const DATA_VERSION = 3;

const runMigrations = () => {
    const currentVersion = parseInt(localStorage.getItem('dataVersion') || '0');
    if (currentVersion >= DATA_VERSION) return;

    const migrations = [
        { version: 1, fn: migrateAmountToBlocks },
        { version: 2, fn: migrateRemoveWrongPromos },
        { version: 3, fn: migrateTokenIds },
        // TODO v4: no almacenar cartas con estado por defecto ({ status: 0, bought: 0 }) para reducir tamaño de localStorage (#29)
    ];

    migrations
        .filter(m => m.version > currentVersion)
        .forEach(m => m.fn());

    localStorage.setItem('dataVersion', String(DATA_VERSION));
};

const migrateAmountToBlocks = () => {
    let migrated = false;

    // Construir mapa cardNumber -> bloque más bajo a partir de sets con id: null
    const cardBlockMap = {};
    sets.forEach(s => {
        if (s.id === null && s.block !== undefined && s.cards) {
            Object.keys(s.cards).forEach(cardNumber => {
                const block = getCardBlock(cardNumber, s.block);
                if (block !== null) {
                    if (cardBlockMap[cardNumber] === undefined || block < cardBlockMap[cardNumber]) {
                        cardBlockMap[cardNumber] = block;
                    }
                }
            });
        }
    });

    for (const setId in collection) {
        if (typeof collection[setId] !== 'object' || setId === 'products') continue;
        const setElement = sets.find(s => s.id === setId);
        if (!setElement) continue;

        for (const cardId in collection[setId]) {
            const card = collection[setId][cardId];
            if (typeof card.amount !== 'number') continue;

            const cardNumber = `${setId}-${cardId}`;
            const block = getCardBlock(cardNumber, setElement.block) ?? cardBlockMap[cardNumber] ?? null;
            const newAmount = {};

            if (block !== null && card.amount > 0) {
                newAmount[String(block)] = card.amount;
            }

            if (card.reprint && typeof card.reprint === 'object') {
                for (const b in card.reprint) {
                    if (card.reprint[b] > 0) {
                        newAmount[b] = (newAmount[b] || 0) + card.reprint[b];
                    }
                }
                delete card.reprint;
            }

            card.amount = newAmount;
            migrated = true;
        }
    }

    return migrated;
};

const migrateRemoveWrongPromos = () => {
    if (!collection['P']) return;
    ['139', '140', '141', '142', '143', '144'].forEach(id => {
        if (!collection['P'][id]?.cards) return;
        delete collection['P'][id].cards['otp22'];
        delete collection['P'][id].cards['wp22'];
    });
};

const migrateTokenIds = () => {
    if (!collection['T']) return;
    // Renombrar de 3 dígitos a 2 dígitos
    Object.keys(collection['T']).forEach(id => {
        if (id.length === 3) {
            const newId = id.replace(/^0/, '');
            collection['T'][newId] = collection['T'][id];
            delete collection['T'][id];
        }
    });
    // Eliminar IDs que ya no existen (T-001..T-006 incorrectos, ahora son T-02,T-08,T-10,T-14,T-15,T-16)
    const validIds = Array.from({length: 17}, (_, i) => String(i + 1).padStart(2, '0'));
    Object.keys(collection['T']).forEach(id => {
        if (!validIds.includes(id)) delete collection['T'][id];
    });
};
