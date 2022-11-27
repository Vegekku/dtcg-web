document.addEventListener("DOMContentLoaded", function (event) {
    const setButtons = document.getElementById('setButtons');
    
    const getImageUrlFromBandai = (url, setID, cardID, parallel = null) => {
        const bandaitcgplusURL = 'https://s3.amazonaws.com/prod.bandaitcgplus.files.api/card_image/DG-EN';
        var cardUrl = url.replace('bandaitcgplusURL', bandaitcgplusURL);
        cardUrl = cardUrl.replaceAll('setID', setID);
        cardUrl = cardUrl.replace('cardID', cardID);

        if (null !== parallel){
            cardUrl = cardUrl.replace('parallel', parallel);
        }

        return cardUrl;
    };

    sets.forEach(setElement => {
        if (setElement.id !== null) {
            const tableSet = document.createElement('table');
            tableSet.id = setElement.id;

            // Header
            const header = tableSet.createTHead();
            const headerTexts = [setElement.id, "Amount", "Cards"];
            var row = header.insertRow(0);
            headerTexts.forEach(headerText => {
                const headerCell = document.createElement('th');
                headerCell.innerHTML = headerText;
                row.appendChild(headerCell);
            })

            // Body
            const body = tableSet.createTBody();
            for (let index = 1; index <= setElement.total; index++) {
                var cardNumber = String(index).padStart(setElement.add_zero, '0');
                var row = body.insertRow(index - 1);
                row.id = `${setElement.id}-${cardNumber}`;
                row.insertCell(0).innerHTML = cardNumber;
                row.insertCell(1).innerHTML = 0;

                var cardUrl = getImageUrlFromBandai(setElement.url, setElement.id, cardNumber);
                row.insertCell(2).innerHTML = `<img class="card" src="${cardUrl}" title="${setElement.name}">`;
                row.cells[2].className = 'card_list';
            }
            row = body.insertRow(0);
            tableSet.style.display = "none";

            document.body.appendChild(tableSet);

            const setButton = document.createElement('button');
            setButton.value = setElement.id;
            setButton.innerText = setElement.id;
            setButton.addEventListener('click', (element, event) => {
                const tableSet = document.getElementById(element.target.value);
                document.querySelectorAll('table').forEach( table => table.style.display = 'none' );
                if (tableSet.style.display === "none") {
                    tableSet.style.display = "block";
                } else {
                    tableSet.style.display = "none";
                }
            });
            setButtons.appendChild(setButton);
        } else {
            Object.entries(setElement.cards).forEach(card => {
                const [cardNumber, parallel] = card;
                const cardRow = document.getElementById(cardNumber);

                if (cardRow !== null) {
                    const [setId, cardId] = cardNumber.split('-');
                    var cardUrl = getImageUrlFromBandai(setElement.url, setId, cardId, parallel);
                    cardRow.getElementsByClassName('card_list')[0].innerHTML += `<img class="card" src="${cardUrl}" title="${setElement.name}">`;
                }
            });
        }

    });
});
