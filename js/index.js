let collection = null;
let cardmarket = null;

const toggleTables = ( element ) => {
    const currentSet = window.location.hash.substring(1);

    if ( '' !== currentSet ) {
        document.getElementById(currentSet).classList.remove('active');
    }
    document.getElementById(element.target?.value || element.value).classList.add('active');

    // add set id to URL
    window.location.hash = element.target?.value || element.value;
}

document.addEventListener("DOMContentLoaded", function (event) {
    const boosterButtons = document.getElementById('boosterButtons');
    const starterButtons = document.getElementById('starterButtons');
    const extraButtons = document.getElementById('extraButtons');
    const otherButtons = document.getElementById('otherButtons');
    // const productButtons = document.getElementById('productButtons');
    const setLists = document.getElementById('setLists');
    const setOptions = {};
    const setFilterOptions = document.getElementById('setOptions');
    const accordion = document.getElementsByClassName('accordion');

    const packs = document.getElementById('packs');

    for( let item of accordion) {
        item.addEventListener( 'click', ( element ) => {
            const _this = element.currentTarget;
            const panel = document.getElementById( _this.dataset.buttons );

            if ( ! _this.classList.contains('active') ) {
                document.querySelector('.accordion.active')?.classList.remove('active');
                document.querySelector('.panel.show')?.classList.remove('show');
            }

            _this.classList.toggle('active');
            panel.classList.toggle('show');
        });
    }

    // 0. Actualizar datos erroneos o desactualizados.
    // updatesData();

    // 1. crear objeto collection y cardmarket si no existe. Si existe, obtener de storage.
    collection = JSON.parse( window.localStorage.getItem("collection") || '{}' );
    (collection.products ??= {}).packs ??= {};
    cardmarket = JSON.parse( window.localStorage.getItem("cardmarket") || '{}' );
    (cardmarket.products ??= {}).packs ??= {};

    /**
     * Gets the full URL to image card source.
     * @param {string} url The card url.
     * @param {string} setID The set id.
     * @param {string} cardID The card id.
     * @param {string} parallel The parallel word for alternative cards mainly.
     * @returns string
     */
    const getImageUrl = (url, setID, cardID, parallel = null) => {
        const noCardURL = 'https://assets.cardlist.dev/other/2020_card_backstage_design.jpg';

        if ( url === 'noCardURL' ) {
            return noCardURL;
        }

        const bandaitcgplusURL = 'https://files.bandai-tcg-plus.com/card_image/DG-EN';
        const digimoncardURL = 'https://world.digimoncard.com/images/cardlist/card';
        const digimoncardjpURL = 'https://digimoncard.com/images/cardlist/card';
        const digimonCardDev = 'https://assets.cardlist.dev/images/communitycards';
        const digimonFandom = 'https://static.wikia.nocookie.net/digimoncardgame/images';
        
        if ( url.includes('bandaitcgplusURL')) {
            var cardUrl = url.replace('bandaitcgplusURL', bandaitcgplusURL);
        } else if (url.includes('digimoncardjpURL')) {
            var cardUrl = url.replace('digimoncardjpURL', digimoncardjpURL);
        } else if (url.includes('digimoncardURL')) {
            var cardUrl = url.replace('digimoncardURL', digimoncardURL);
        } else if (url.includes('digimonCardDev')) {
            var cardUrl = url.replace('digimonCardDev', digimonCardDev);
        } else {
            var cardUrl = url.replace('digimonFandom', digimonFandom);
        }
        cardUrl = cardUrl.replaceAll('setID', setID);
        cardUrl = cardUrl.replace('cardID', cardID);

        if (null !== parallel) {
            cardUrl = cardUrl.replace('parallel', parallel);
        }

        return cardUrl;
    };

    // TODO: pasar un objeto con todo los parámetros, en lugar de incrementar el número de parámetros
    const getImageTag = (url, title, id, set, status = 0, bought = 0, rarity = 'aa') => {
        const [cardNumber, slug] = id.split('__');
        const [setId, cardId] = cardNumber.split('-');
        let cardmarketUrl = '';
        let cardmarketPrice = '';

        // TODO Hacer lo mismo pero con collection
        if ( setId in cardmarket && cardId in cardmarket[setId] && slug in cardmarket[setId][cardId] ) {
            cardmarketUrl = cardmarket[setId][cardId][slug].url || '';
            cardmarketPrice = cardmarket[setId][cardId][slug].price?.slice(-1)[0] || '';
        }

        const imageCard = `<img loading="lazy" class="card" src="${url}" title="${title}" alt="${title}" id="${id}" data-set="${set}" data-status="${status}" data-bought="${bought}" data-cardmarketurl="${cardmarketUrl}" data-cardmarketprice="${cardmarketPrice}" data-rarity="${rarity}" data-type="card" onclick="modalOpen(this)">`;

        return imageCard;
    }

    const getImagePack = ( src, name, id, status = 0, bought = 0 ) => {
        const [slug, pack] = id.split('__');
        const imagePack = document.createElement('img');
        imagePack.src = src;
        imagePack.alt = name;
        imagePack.title = name;
        imagePack.id = id;
        imagePack.loading = 'lazy';
        imagePack.dataset.type = 'pack';
        imagePack.dataset.status = collection.products.packs[slug].status;
        imagePack.dataset.bought = collection.products.packs[slug].bought;
        imagePack.dataset.cardmarketurl = cardmarket.products.packs?.[slug]?.url || '';
        imagePack.dataset.cardmarketprice = cardmarket.products.packs?.[slug]?.price?.slice(-1)[0] || '';
        imagePack.onclick = () => { modalOpen(imagePack) };
        
        return imagePack;
    }

    const drawAlternatives = (setElement) => {
        const {name, url, cards, slug, reprint, rarity} = setElement;
        const cardRarity = getCardsRarity(rarity);
        if ( url === null ) {
            Object.entries(cards).forEach(card => {
                const [cardNumber, cardUrl] = card;
                const cardRow = document.getElementById(cardNumber);
    
                if (cardRow !== null) {
                    // 5. si no existe la carta, la añadimos al set
                    const [setId, cardId] = cardNumber.split('-');
                    if (collection[setId][cardId].cards[slug] === undefined) {
                        collection[setId][cardId].cards[slug] = {status: 0, bought: 0};
                    }

                    // TODO: añadir cardRarity
                    cardRow.getElementsByClassName('card_list')[0].innerHTML += getImageTag(cardUrl, name, `${cardNumber}__${slug}`, slug, collection[setId][cardId].cards[slug].status, collection[setId][cardId].cards[slug].bought,rarities);
                }
            });
        } else {
            Object.entries(cards).forEach(card => {
                const [cardNumber, parallel] = card;
                const cardRow = document.getElementById(cardNumber);
    
                if (cardRow !== null) {
                    const [setId, cardId] = cardNumber.split('-');
                    if ( Array.isArray( parallel )) {
                        parallel.forEach((parallelElement, index) => {
                            // 5. si no existe la carta, la añadimos al set
                            const parallel_slug = `${slug}_${index}`;
                            if (collection[setId][cardId].cards[parallel_slug] === undefined) {
                                collection[setId][cardId].cards[parallel_slug] = {status: 0, bought: 0};
                            }
                            
                            var cardUrl = getImageUrl(url, setId, cardId, parallelElement);
                            // Override in array
                            if ( 'override' in setElement && cardNumber in setElement.override.cards && setElement.override.cards[cardNumber][index] !== null ) {
                                cardUrl = getImageUrl(setElement.override.url, setId, cardId, parallelElement);
                            }

                            // TODO: añadir cardRarity
                            cardRow.getElementsByClassName('card_list')[0].innerHTML += getImageTag(cardUrl, name, `${cardNumber}__${slug}_${index}`, slug, collection[setId][cardId].cards[parallel_slug].status, collection[setId][cardId].cards[parallel_slug].bought);
                        });
                    } else {
                        // 5. si no existe la carta, la añadimos al set
                        if (collection[setId][cardId].cards[slug] === undefined) {
                            collection[setId][cardId].cards[slug] = {status: 0, bought: 0};
                        }
                        
                        var cardUrl = getImageUrl(url, setId, cardId, parallel);
                        // Override in card
                        if ( 'override' in setElement && cardNumber in setElement.override.cards ) {
                            const overrideParallel = '' !== setElement.override.cards[cardNumber] ? setElement.override.cards[cardNumber] : parallel
                            cardUrl = getImageUrl(setElement.override.url, setId, cardId, overrideParallel);
                        }
                        
                        cardRow.getElementsByClassName('card_list')[0].innerHTML += getImageTag(cardUrl, name, `${cardNumber}__${slug}`, slug, collection[setId][cardId].cards[slug].status, collection[setId][cardId].cards[slug].bought, cardRarity);
                    }

                    if ( reprint ) {
                        cardRow.cells[1].innerHTML += `<input class="amount-card amount-card--reprint" type="text" data-card-number="${cardNumber}" onblur="updateValue(this)" onfocus="selectValue()" readonly value="${collection[setId][cardId].reprint || 0}">`;
                    }
                }
            });
        }
    };

    const addButton = (set) => {
        const setButton = document.createElement('button');
        setButton.title = set.name;
        setButton.value = set.id;
        setButton.innerText = set.id.replace(/^(BT|EX|ST)/, '');

        setButton.addEventListener('click', element => toggleTables(element) );

        if ( set.id.startsWith('BT') ) {
            boosterButtons.appendChild(setButton);
        } else if ( set.id.startsWith('ST') ) {
            starterButtons.appendChild(setButton);
        } else if ( set.id.startsWith('EX') ) {
            extraButtons.appendChild(setButton);
        } else {
            otherButtons.appendChild(setButton);
        }
    }

    const getCardsColor = (setColor) => {
        let cardsColor = null;
        if ( typeof setColor === 'string' ) {
            cardsColor = setColor;
        } else {
            cardsColor = [];
            Object.entries(setColor).forEach( ([color, cardIds]) => {
                cardIds.forEach( id => {
                    if (typeof id === 'string') {
                        let [start, end] = id.split('-');
                        for (let index = parseInt(start); index <= parseInt(end); index++) {
                            cardsColor[index] = color;
                        }
                    } else {
                        cardsColor[id] = color;
                    }
                });
            });
        }

        return cardsColor;
    }

    const getCardsRarity = (setRarity) => {
        let cardsRarity = [];
        if ( typeof setRarity === 'string' ) {
            cardsRarity = setRarity;
        } else if ( typeof setRarity !== 'undefined' ) {
            cardsRarity = [];
            Object.entries(setRarity).forEach( ([rarity, cardIds]) => {
                cardIds.forEach( id => {
                    if (typeof id === 'string') {
                        let [start, end] = id.split('-');
                        for (let index = parseInt(start); index <= parseInt(end); index++) {
                            cardsRarity[index] = rarity;
                        }
                    } else {
                        cardsRarity[id] = rarity;
                    }
                });
            });
        }

        return cardsRarity;
    }

    sets.forEach(setElement => {
        if (setElement.id !== null) {
            const tableSet = document.createElement('table');
            tableSet.id = setElement.id;
            tableSet.classList.add('set');

            // 2. si no existe el set, añadirlo a la coleccion.
            if (collection[setElement.id] === undefined) {
                collection[setElement.id] = {};
            }

            // Header
            const tHead = tableSet.createTHead();
            const tHeadTexts = [setElement.id, "", "Cards"];
            var row = tHead.insertRow(0);
            tHeadTexts.forEach(tHeadText => {
                const tHeadCell = document.createElement('th');
                tHeadCell.innerHTML = tHeadText;
                row.appendChild(tHeadCell);
            })

            // Body
            const tBody = tableSet.createTBody();
            const colors = setElement.color ? getCardsColor(setElement.color) : null;
            const rarities = getCardsRarity(setElement.rarity);

            for (let index = 1; index <= setElement.total; index++) {
                const cardId = String(index).padStart(setElement.add_zero, '0');
                const row = tBody.insertRow(index - 1);
                const cardNumber = `${setElement.id}-${cardId}`;
                const cardRarity = rarities[index];
                row.id = cardNumber;
                row.insertCell(0).innerHTML = cardId;

                // 3. obtener cantidad de cartas de este id
                if (collection[setElement.id][cardId] === undefined) {
                    collection[setElement.id][cardId] = {amount: 0, cards: {}};
                }
                
                row.insertCell(1).innerHTML = `<input class="amount-card" type="text" data-card-number="${cardNumber}" onblur="updateValue(this)" onfocus="selectValue()" readonly value="${collection[setElement.id][cardId].amount}">`;
                row.dataset.pull = collection[setElement.id][cardId].amount >= 4;

                if (setElement.url) {
                    var cardUrl = getImageUrl(setElement.url, setElement.id, cardId);

                    if ( 'override' in setElement && cardNumber in setElement.override.cards ) {
                        // TODO: Pasar parallel
                        cardUrl = getImageUrl(setElement.override.url, setElement.id, cardId);
                    }

                    // 4. si no existe la carta, la añadimos al set
                    if (setElement.slug && collection[setElement.id][cardId].cards[setElement.slug] === undefined) {
                        collection[setElement.id][cardId].cards[setElement.slug] = {status: 0, bought: 0};
                    }

                    // TODO: añadir cardRarity
                    row.insertCell(2).innerHTML = getImageTag(cardUrl, setElement.name, `${cardNumber}__${setElement.slug}`, setElement.slug, collection[setElement.id][cardId].cards[setElement.slug].status, collection[setElement.id][cardId].cards[setElement.slug].bought, cardRarity);
                } else {
                    row.insertCell(2).innerHTML = "";
                }

                row.cells[0].className = 'card_id';
                row.cells[1].className = 'card_amount';
                row.cells[2].className = 'card_list';

                if ( colors !== null ) {
                    row.dataset.color = typeof colors === 'string' ? colors : colors[index];
                }
            }

            // Draw table set
            setLists.appendChild(tableSet);

            addButton(setElement);
        } else {
            drawAlternatives(setElement);
        }

        if (setElement.slug) {
            setOptions[setElement.slug] = setElement.name;
        }

        if (setElement.pack) {
            if ( Array.isArray( setElement.pack )) {
                setElement.pack.forEach( ( pack, index ) => {
                    collection.products.packs[`${setElement.slug}_${index}`] ??= {status: 0, bought: 0};
                    packs.appendChild( getImagePack( pack, setElement.name, `${setElement.slug}_${index}__pack`, collection.products.packs[`${setElement.slug}_${index}`].status, collection.products.packs[`${setElement.slug}_${index}`].bought ) );
                });
            } else {
                collection.products.packs[setElement.slug] ??= {status: 0, bought: 0};
                packs.appendChild( getImagePack( setElement.pack, setElement.name, `${setElement.slug}__pack`, collection.products.packs[setElement.slug].status, collection.products.packs[setElement.slug].bought ) );
            }
        }
    });

    Object.entries(setOptions).forEach(([key,value]) => {
        const setOption = document.createElement('option');
        setOption.dataset.value = key;
        setOption.innerHTML = value;
        setFilterOptions.appendChild(setOption);
    });

    // 6. guardar coleccion en localstorage
    window.localStorage.setItem("collection", JSON.stringify(collection));

    if ( '' !== window.location.hash ) {
        document.getElementById(window.location.hash.substring(1)).classList.add('active');
    }
});
