document.addEventListener("DOMContentLoaded", function (event) {
    const bandaitcgplusURL = 'https://s3.amazonaws.com/prod.bandaitcgplus.files.api/card_image/DG-EN';

    const getImageUrl = cardImage => {
        var cardUrl = cardImage.replace('bandaitcgplusURL', bandaitcgplusURL);

        return cardUrl;
    };

    const tableSt1 = document.getElementById('st1');
    // st1.cards.forEach((element, index) => {
    //     var row = tableSt1.insertRow(index + 1);
    //     var cell1 = row.insertCell(0);
    //     var cell2 = row.insertCell(1);
    //     var cell3 = row.insertCell(2);

    //     cell1.innerHTML = element.id;
    //     cell2.innerHTML = '0';

    //     var st1Cards = cards.filter( card => card.card_id == element.id );

    //     st1Cards.forEach(card => {
    //         cell3.innerHTML += `<img class="card" src="${getImageUrl(card.image)}" title="${card.set}">`;
    //     });
    // });

    sets.forEach(setElement => {
        var tableSet = document.createElement('table');
        tableSet.id = setElement.id;

        // Header
        var header = tableSet.createTHead();
        var row = header.insertRow(0);
        var headerTexts = [setElement.id, "Amount", "Cards"];
        headerTexts.forEach(headerText => {
            var headerCell = document.createElement('th');
            headerCell.innerHTML = headerText;
            row.appendChild(headerCell);
        })

        // Body
        var body = tableSet.createTBody();
        for (let index = 1; index < setElement.total; index++) {
            var row = body.insertRow(index - 1);
            row.insertCell(0).innerHTML = index;
            row.insertCell(1).innerHTML = 0;

            var cardUrl = getImageUrl(setElement.url);
            cardUrl = cardUrl.replaceAll('setID',setElement.id);
            cardUrl = cardUrl.replace('cardID',String(index).padStart(2,'0'));
            row.insertCell(2).innerHTML = `<img class="card" src="${cardUrl}" title="${setElement.name}">`;
        }
        row = body.insertRow(0);

        document.body.appendChild(tableSet);
    });
});
