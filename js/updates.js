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
    
    localStorage.setItem('collection', collectionData);
    localStorage.setItem('cardmarket', cardmarketData);
};