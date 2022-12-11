document.addEventListener("DOMContentLoaded", function (event) {
    const boosterButtons = document.getElementById('boosterButtons');
    const starterButtons = document.getElementById('starterButtons');
    const otherButtons = document.getElementById('otherButtons');
    const setLists = document.getElementById('setLists');

    const getImageUrl = (url, setID, cardID, parallel = null) => {
        const noCardURL = 'https://assets.cardlist.dev/other/2020_card_backstage_design.jpg';

        if ( url === 'noCardURL' ) {
            return noCardURL;
        }

        const bandaitcgplusURL = 'https://s3.amazonaws.com/prod.bandaitcgplus.files.api/card_image/DG-EN';
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

    const drawAlternatives = (setName, url, cards) => {
        if ( url === null ) {
            Object.entries(cards).forEach(card => {
                const [cardNumber, cardUrl] = card;
                const cardRow = document.getElementById(cardNumber);
    
                if (cardRow !== null) {
                    cardRow.getElementsByClassName('card_list')[0].innerHTML += `<img class="card" src="${cardUrl}" title="${setName}">`;
                }
            });
        } else {
            Object.entries(cards).forEach(card => {
                const [cardNumber, parallel] = card;
                const cardRow = document.getElementById(cardNumber);
    
                if (cardRow !== null) {
                    const [setId, cardId] = cardNumber.split('-');
                    if ( Array.isArray( parallel )) {
                        parallel.forEach(parallelElement => {
                            const cardUrl = getImageUrl(url, setId, cardId, parallelElement);
                        cardRow.getElementsByClassName('card_list')[0].innerHTML += `<img class="card" src="${cardUrl}" title="${setName}">`;
                        });
                    } else {
                        const cardUrl = getImageUrl(url, setId, cardId, parallel);
                        cardRow.getElementsByClassName('card_list')[0].innerHTML += `<img class="card" src="${cardUrl}" title="${setName}">`;
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
            document.querySelectorAll('table').forEach(table => table.style.display = 'none');
            if (tableSet.style.display === "none") {
                tableSet.style.display = "block";
            } else {
                tableSet.style.display = "none";
            }

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

    sets.forEach(setElement => {
        if (setElement.id !== null) {
            const tableSet = document.createElement('table');
            tableSet.id = setElement.id;
            if (window.location.hash !== `#${setElement.id}`) {
                tableSet.style.display = "none";
            }

            // Header
            const tHead = tableSet.createTHead();
            const tHeadTexts = [setElement.id, "Amount", "Cards"];
            var row = tHead.insertRow(0);
            tHeadTexts.forEach(tHeadText => {
                const tHeadCell = document.createElement('th');
                tHeadCell.innerHTML = tHeadText;
                row.appendChild(tHeadCell);
            })

            // Body
            const tBody = tableSet.createTBody();
            for (let index = 1; index <= setElement.total; index++) {
                var cardNumber = String(index).padStart(setElement.add_zero, '0');
                var row = tBody.insertRow(index - 1);
                row.id = `${setElement.id}-${cardNumber}`;
                row.insertCell(0).innerHTML = cardNumber;
                row.insertCell(1).innerHTML = 0;

                if (setElement.url) {
                    var cardUrl = getImageUrl(setElement.url, setElement.id, cardNumber);
                    if ( 'override' in setElement && `${setElement.id}-${cardNumber}` in setElement.override.cards ) {
                        cardUrl = getImageUrl(setElement.override.url, setElement.id, cardNumber);
                    }

                    row.insertCell(2).innerHTML = `<img class="card" src="${cardUrl}" title="${setElement.name}">`;
                } else {
                    row.insertCell(2).innerHTML = "";
                }
                row.cells[2].className = 'card_list';
            }

            // Draw table set
            setLists.appendChild(tableSet);

            addButton(setElement);
        } else {
            drawAlternatives(setElement.name, setElement.url, setElement.cards);
        }
    });
});
