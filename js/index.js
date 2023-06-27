let collection = null;
document.addEventListener("DOMContentLoaded", function (event) {
    const boosterButtons = document.getElementById('boosterButtons');
    const starterButtons = document.getElementById('starterButtons');
    const otherButtons = document.getElementById('otherButtons');
    const setLists = document.getElementById('setLists');
    const setOptions = {};
    const setFilterOptions = document.getElementById('setOptions');

    // 1. crear objeto coleccion si no existe. Si existe, obtener de storage.
    collection = JSON.parse( window.localStorage.getItem("collection") || '{}' );

    const getImageUrl = (url, setID, cardID, parallel = null) => {
        const noCardURL = 'https://assets.cardlist.dev/other/2020_card_backstage_design.jpg';

        if ( url === 'noCardURL' ) {
            return noCardURL;
        }

        const bandaitcgplusURL = 'https://files.bandai-tcg-plus.com/card_image/DG-EN';
        const digimoncardURL = 'https://world.digimoncard.com/images/cardlist/card';
        const digimonCardDev = 'https://assets.cardlist.dev/images/communitycards';
        const tcgPlayerURL = 'https://product-images.tcgplayer.com/fit-in/874x874';
        
        if ( url.includes('bandaitcgplusURL')) {
            var cardUrl = url.replace('bandaitcgplusURL', bandaitcgplusURL);
        } else if (url.includes('digimoncardURL')) {
            var cardUrl = url.replace('digimoncardURL', digimoncardURL);
        } else if (url.includes('tcgPlayerURL')) {
            var cardUrl = url.replace('tcgPlayerURL', tcgPlayerURL);
        } else {
            var cardUrl = url.replace('digimonCardDev', digimonCardDev);
        }
        cardUrl = cardUrl.replaceAll('setID', setID);
        cardUrl = cardUrl.replace('cardID', cardID);

        if (null !== parallel) {
            cardUrl = cardUrl.replace('parallel', parallel);
        }

        return cardUrl;
    };

    const getImageTag = (url, title, id, set, status = 0, bought = 0, cardmarket = "") => {
        return `<img loading="lazy" class="card" src="${url}" title="${title}" alt="${title}" id="${id}" data-set="${set}" data-status="${status}" data-bought="${bought}" data-cardmarket="${cardmarket}" onclick="modalOpen(this)">`;
    }

    const drawAlternatives = (setElement) => {
        const {name, url, cards, slug, cardmarket} = setElement;
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

                    cardRow.getElementsByClassName('card_list')[0].innerHTML += getImageTag(cardUrl, name, `${cardNumber}__${slug}`, slug, collection[setId][cardId].cards[slug].status, collection[setId][cardId].cards[slug].bought, cardmarket);
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
                            
                            const cardUrl = getImageUrl(url, setId, cardId, parallelElement);
                            cardRow.getElementsByClassName('card_list')[0].innerHTML += getImageTag(cardUrl, name, `${cardNumber}__${slug}_${index}`, slug, collection[setId][cardId].cards[parallel_slug].status, collection[setId][cardId].cards[parallel_slug].bought, cardmarket);
                        });
                    } else {
                        // 5. si no existe la carta, la añadimos al set
                        if (collection[setId][cardId].cards[slug] === undefined) {
                            collection[setId][cardId].cards[slug] = {status: 0, bought: 0};
                        }
                        
                        const cardUrl = getImageUrl(url, setId, cardId, parallel);
                        cardRow.getElementsByClassName('card_list')[0].innerHTML += getImageTag(cardUrl, name, `${cardNumber}__${slug}`, slug, collection[setId][cardId].cards[slug].status, collection[setId][cardId].cards[slug].bought, cardmarket);
                    }

                }
            });
        }
    };

    const addButton = (set) => {
        const setButton = document.createElement('button');
        setButton.title = set.name;
        setButton.value = set.id;
        setButton.innerText = set.id;
        setButton.addEventListener('click', (element, event) => {
            const tableSet = document.getElementById(element.target.value);
            const currentSet = window.location.hash.substring(1);

            document.getElementById(element.target.value).classList.add('set--current');
            document.getElementById(currentSet).classList.remove('set--current');

            // add set id to URL
            window.location.hash = set.id;
        });

        if ( set.id.startsWith('BT') ) {
            boosterButtons.appendChild(setButton);
        } else if ( set.id.startsWith('ST') ) {
            starterButtons.appendChild(setButton);
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

    sets.forEach(setElement => {
        if (setElement.id !== null) {
            const tableSet = document.createElement('table');
            tableSet.id = setElement.id;
            if (window.location.hash !== `#${setElement.id}`) {
                tableSet.classList.add('set--hidden');
            } else {
                tableSet.classList.add('set--visible','set--current');
            }

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

            for (let index = 1; index <= setElement.total; index++) {
                var cardId = String(index).padStart(setElement.add_zero, '0');
                var row = tBody.insertRow(index - 1);
                var cardNumber = `${setElement.id}-${cardId}`;
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
                        cardUrl = getImageUrl(setElement.override.url, setElement.id, cardId);
                    }

                    // 4. si no existe la carta, la añadimos al set
                    if (setElement.slug && collection[setElement.id][cardId].cards[setElement.slug] === undefined) {
                        collection[setElement.id][cardId].cards[setElement.slug] = {status: 0, bought: 0};
                    }

                    row.insertCell(2).innerHTML = getImageTag(cardUrl, setElement.name, `${cardNumber}__${setElement.slug}`, setElement.slug, collection[setElement.id][cardId].cards[setElement.slug].status, collection[setElement.id][cardId].cards[setElement.slug].bought, setElement.cardmarket);
                } else {
                    row.insertCell(2).innerHTML = "";
                }

                row.cells[0].className = 'card_id';
                row.cells[1].className = 'card_amount';
                row.cells[2].className = 'card_list';

                if ( colors !== null ) {
                    // TODO: Remove class card_id--<color>
                    if ( typeof colors === 'string' ) {
                        row.cells[0].className += ` card_id--${colors}`;
                        row.dataset.color = colors;
                    } else  {
                        row.cells[0].className += ` card_id--${colors[index]}`
                        row.dataset.color = colors[index];
                    }
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
    });

    Object.entries(setOptions).forEach(([key,value]) => {
        const setOption = document.createElement('option');
        setOption.dataset.value = key;
        setOption.innerHTML = value;
        setFilterOptions.appendChild(setOption);
    });

    // 6. guardar coleccion en localstorage
    window.localStorage.setItem("collection", JSON.stringify(collection));
});
