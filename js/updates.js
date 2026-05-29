const DATA_VERSION = 1;

const runMigrations = () => {
    const currentVersion = parseInt(localStorage.getItem('dataVersion') || '0');
    if (currentVersion >= DATA_VERSION) return;

    const migrations = [
        { version: 1, fn: migrateAmountToBlocks },
        // TODO v2: no almacenar cartas con estado por defecto ({ status: 0, bought: 0 }) para reducir tamaño de localStorage (#29)
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
