document.addEventListener("DOMContentLoaded", function (event) {
    const setButtons = document.getElementById('setButtons');
    const setLists = document.getElementById('setLists');

    const getImageUrlFromBandai = (url, setID, cardID, parallel = null) => {
        const bandaitcgplusURL = 'https://s3.amazonaws.com/prod.bandaitcgplus.files.api/card_image/DG-EN';
        var cardUrl = url.replace('bandaitcgplusURL', bandaitcgplusURL);
        cardUrl = cardUrl.replaceAll('setID', setID);
        cardUrl = cardUrl.replace('cardID', cardID);

        if (null !== parallel) {
            cardUrl = cardUrl.replace('parallel', parallel);
        }

        return cardUrl;
    };

    const drawAlternatives = (setName, url, cards) => {
        Object.entries(cards).forEach(card => {
            const [cardNumber, parallel] = card;
            const cardRow = document.getElementById(cardNumber);

            if (cardRow !== null) {
                const [setId, cardId] = cardNumber.split('-');
                if ( Array.isArray( parallel )) {
                    parallel.forEach(parallelElement => {
                        const cardUrl = getImageUrlFromBandai(url, setId, cardId, parallelElement);
                    cardRow.getElementsByClassName('card_list')[0].innerHTML += `<img class="card" src="${cardUrl}" title="${setName}">`;
                    });
                } else {
                    const cardUrl = getImageUrlFromBandai(url, setId, cardId, parallel);
                    cardRow.getElementsByClassName('card_list')[0].innerHTML += `<img class="card" src="${cardUrl}" title="${setName}">`;
                }
            }
        });
    };

    sets.forEach(setElement => {
        if (setElement.id !== null) {
            const tableSet = document.createElement('table');
            tableSet.id = setElement.id;
            tableSet.style.display = "none";

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
                    var cardUrl = getImageUrlFromBandai(setElement.url, setElement.id, cardNumber);
                    row.insertCell(2).innerHTML = `<img class="card" src="${cardUrl}" title="${setElement.name}">`;
                } else {
                    row.insertCell(2).innerHTML = "";
                }
                row.cells[2].className = 'card_list';
            }

            // Draw table set
            setLists.appendChild(tableSet);

            // Draw set alternatives
            if (setElement.alternatives) {
                drawAlternatives(setElement.name, setElement.alternatives.url, setElement.alternatives.cards);
            }

            // Add button
            const setButton = document.createElement('button');
            setButton.value = setElement.id;
            setButton.innerText = setElement.id;
            setButton.addEventListener('click', (element, event) => {
                const tableSet = document.getElementById(element.target.value);
                document.querySelectorAll('table').forEach(table => table.style.display = 'none');
                if (tableSet.style.display === "none") {
                    tableSet.style.display = "block";
                } else {
                    tableSet.style.display = "none";
                }
            });
            setButtons.appendChild(setButton);
        } else {
            drawAlternatives(setElement.name, setElement.url, setElement.cards);
        }
    });
});
