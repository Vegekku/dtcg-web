const updatesData = () => {
    // 1. detectar la versión de los datos.
    // 2. mediante un switch, ejecutar los cambios correspondientes hasta llegar a la versión actual.
    // 3. guardar la última versión de datos.
    let collectionData = localStorage.getItem('collection');
    collectionData = collectionData.replace(/"LM01"/g, '"LM"');
    localStorage.setItem('collection', collectionData);

    let cardmarketData = localStorage.getItem('cardmarket');
    cardmarketData = cardmarketData.replace(/"LM01"/g, '"LM"');
    localStorage.setItem('cardmarket', cardmarketData);
};