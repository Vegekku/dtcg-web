const migrateReprints = () => {
    const collectionJson = JSON.parse(localStorage.getItem('collection') || '{}');
    const reprintBlocks = {};

    sets.forEach(s => {
        if (s.id === null && s.reprint && s.block !== undefined && s.cards) {
            Object.keys(s.cards).forEach(cardNumber => {
                const [setId, cardId] = cardNumber.split('-');
                (reprintBlocks[setId] ??= {})[cardId] ??= s.block;
            });
        }
    });

    let migrated = false;
    for (const setId in collectionJson) {
        if (typeof collectionJson[setId] !== 'object' || setId === 'products') continue;
        for (const cardId in collectionJson[setId]) {
            const card = collectionJson[setId][cardId];
            if (typeof card.reprint === 'number') {
                const block = reprintBlocks[setId]?.[cardId];
                if (block !== undefined && card.reprint > 0) {
                    card.reprint = { [block]: card.reprint };
                } else {
                    delete card.reprint;
                }
                migrated = true;
            }
        }
    }

    if (migrated) {
        localStorage.setItem('collection', JSON.stringify(collectionJson));
    }
};

const migrateReprintSlugsToBlocks = () => {
    const collectionJson = JSON.parse(localStorage.getItem('collection') || '{}');
    const slugToBlock = {};

    sets.forEach(s => {
        if (s.id === null && s.reprint && s.block !== undefined) {
            slugToBlock[s.slug] ??= s.block;
        }
    });

    let migrated = false;
    for (const setId in collectionJson) {
        if (typeof collectionJson[setId] !== 'object' || setId === 'products') continue;
        for (const cardId in collectionJson[setId]) {
            const card = collectionJson[setId][cardId];
            if (typeof card.reprint !== 'object') continue;
            for (const key in card.reprint) {
                if (key in slugToBlock) {
                    const block = slugToBlock[key];
                    card.reprint[block] = (card.reprint[block] || 0) + card.reprint[key];
                    delete card.reprint[key];
                    migrated = true;
                }
            }
            if (Object.keys(card.reprint).length === 0) {
                delete card.reprint;
            }
        }
    }

    if (migrated) {
        localStorage.setItem('collection', JSON.stringify(collectionJson));
    }
};

const updatesData = ( version ) => {
    // TODO: Mejora de ejecución de script.
    // 1. detectar la versión de los datos.
    // 2. mediante un switch, ejecutar los cambios correspondientes hasta llegar a la versión actual.
    // 3. guardar la última versión de datos.

    let collectionData = localStorage.getItem('collection');
    let cardmarketData = localStorage.getItem('cardmarket');

    if ( 'LM01' === version ) {
        collectionData = collectionData.replace(/"LM01"/g, '"LM"');
        cardmarketData = cardmarketData.replace(/"LM01"/g, '"LM"');
    }

    if ( 'pb21' === version ) {
        collectionData = collectionData.replace(/"pb21"/g, '"tamer_champion_24"');
        cardmarketData = cardmarketData.replace(/"pb21"/g, '"tamer_champion_24"');
    }

    if ( 'eventpack8' === version ) {
        collectionData = collectionData.replace(/"eventpack8"/g, '"special_eventpack_2025"');
        cardmarketData = cardmarketData.replace(/"eventpack8"/g, '"special_eventpack_2025"');
    }

    if ( 'ex10_alts' === version ) {
        const collectionJson = JSON.parse(collectionData);
        if (collectionJson.EX9) {
            for (const cardID in collectionJson.EX9) {
                if (collectionJson.EX9[cardID].cards.ex10_alts) {
                    delete collectionJson.EX9[cardID].cards.ex10_alts;
                }
            }
        }

        collectionData = JSON.stringify( collectionJson );
    }

    // TODO: Borrado de simplificación de jsons. Sino tienes la carta, no se almacena json.
    
    localStorage.setItem('collection', collectionData);
    localStorage.setItem('cardmarket', cardmarketData);
};