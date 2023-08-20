let editingSet = false;

const toggleEditionInputs = (inputs) => {
    document.getElementById('priceConfirm').hidden = 'cardmarket' === inputs;
    document.getElementById('cardmarket').hidden = 'cardmarket' !== inputs;
};

const modalOpen = (element) => {
    const modal = editingSet ? document.getElementById('editModal') : document.getElementById('viewModal');
    const modalTitle = modal.querySelector('.modal-title');
    const [cardNumber, slug] = element.id.split('__');

    modalTitle.innerHTML = `${cardNumber}: ${element.title}`;

    const modalCards = document.querySelectorAll('.modal-card');
    modalCards.forEach( modalCard => {
        modalCard.src = element.src;
        modalCard.alt = element.alt;
    });

    if ( editingSet ) {
        const status = {
            '-1': 'reservation',
            '0': 'no_have',
            '1': 'got_it',
            '2': 'bought_it',
            '3': 'proxy'
        };

        document.getElementById(status[element.dataset.status]).checked = true;
        document.getElementById('cardId').value = element.id;

        if ( parseInt(element.dataset.status) > 1 ) {
            document.getElementById('price').value = element.dataset.bought;
            document.getElementById('priceConfirm').hidden = false;
        } else {
            document.getElementById('price').value = '';
            document.getElementById('priceConfirm').hidden = true;
        }
        document.getElementById('cardmarketUrl').value = element.dataset.cardmarketurl || '';
        document.getElementById('cardmarketPrice').value = element.dataset.cardmarketprice || '';
    } else {
        const cardStatus = document.getElementById('card-status');
        const cardPrice = document.getElementById('card-price');
        const cardMinimum = document.getElementById('card-minimum');
        const cardmarketLink = document.getElementById('cardmarketLink');
        const status = ['No la tengo', 'Obtenida', 'Comprada', 'Es proxy'];

        cardmarketLink.removeAttribute('href');
        cardmarketLink.hidden = true;
        cardMinimum.innerHTML = '';
        if ( element.dataset.cardmarketurl !== '' ) {
            cardmarketLink.href = element.dataset.cardmarketurl;
            cardmarketLink.hidden = false;
        }
        if ( element.dataset.cardmarketprice !== '' ) {
            cardmarketLink.hidden = false;
            cardMinimum.innerHTML = parseFloat(element.dataset.cardmarketprice).toLocaleString('es-ES', {
                style: 'currency', 
                currency: 'EUR',
                minimumFractionDigits: 0,
                maximumFractionDigits: 2,
            });
        }

        cardStatus.innerHTML = status[element.dataset.status];
        cardPrice.innerHTML = '';
        if ( '2' === element.dataset.status || '3' === element.dataset.status ) {
            const price = parseFloat(element.dataset.bought).toLocaleString('es-ES', {
                style: 'currency', 
                currency: 'EUR',
                minimumFractionDigits: 0,
                maximumFractionDigits: 2,
            });
            cardPrice.innerHTML = ` por ${price}`;
        }
    }
    modal.classList.add('open');
};

const modalClose = (element) => {
    const modal = element.closest('.modal');
    modal.classList.remove('open');
};

const modalOk = () => {
    const editModal = document.getElementById('editModal');
    const status = parseInt(document.querySelector('input[name="status"]:checked').value);
    const price = parseFloat(document.getElementById('price').value || 0);
    const cardId = document.getElementById('cardId').value;

    const [cardNumber, slug] = cardId.split('__');
    const [set, id] = cardNumber.split('-');

    collection[set][id].cards[slug].status = status;
    document.getElementById(cardId).setAttribute('data-status', status);

    if ( status > 1 ) {
        collection[set][id].cards[slug].bought = price;
        document.getElementById(cardId).setAttribute('data-bought', price);
    } else {
        collection[set][id].cards[slug].bought = 0;
        document.getElementById(cardId).setAttribute('data-bought', 0);
    }

    const cardmarketUrl = document.getElementById('cardmarketUrl').value || '';
    const cardmarketPrice = parseFloat( document.getElementById('cardmarketPrice').value || 0 );

    if ( cardmarketUrl !== '' || cardmarketPrice !== 0 ) {
        if ( cardmarketUrl !== '' ) {
            (((cardmarket[set] ??= {})[id] ??= {})[slug] ??= {}).url = cardmarketUrl;

            document.getElementById(cardId).setAttribute('data-cardmarketUrl', cardmarketUrl);
        }
        if ( cardmarketPrice !== 0 ) {
            (((cardmarket[set] ??= {})[id] ??= {})[slug] ??= {}).price ??= [];
            if (cardmarket[set][id][slug].price.length > 0) {
                const lastCardmarketPrice = cardmarket[set][id][slug].price.slice(-1)[0];
                if (lastCardmarketPrice !== cardmarketPrice) {
                    cardmarket[set][id][slug].price.push(cardmarketPrice);
                }
            } else {
                cardmarket[set][id][slug].price.push(cardmarketPrice);
            }

            document.getElementById(cardId).setAttribute('data-cardmarketPrice', cardmarketPrice);
        }
    }

    editModal.classList.remove('open');
};

const toggleSetButtons = (disabled) => {
    document.querySelectorAll('#boosterButtons button, #starterButtons button, #otherButtons button').forEach( button => {
        button.disabled = disabled;
    });
};

const toggleEditionButtons = (hidden) => {
    document.getElementById('saveSet').hidden = !hidden;
    document.getElementById('cancelEdit').hidden = !hidden;
    document.getElementById('editSet').hidden = hidden;
};

const toggleAmountInputs = (readonly) => {
    Array.from(document.getElementsByClassName('amount-card')).forEach( input => {
        input.readOnly = readonly;
    });
}

const editSet = () => {
    toggleSetButtons(true);
    toggleEditionButtons(true);
    toggleAmountInputs(false);
    editingSet = true;
};

const cancelEdit = () => {
    toggleSetButtons(false);
    toggleEditionButtons(false);
    toggleAmountInputs(true);
    editingSet = false;
}

const saveSet = () => {
    window.localStorage.setItem("collection", JSON.stringify(collection));
    window.localStorage.setItem("cardmarket", JSON.stringify(cardmarket));
    cancelEdit();
}

const updateValue = (element) => {
    element.setAttribute('value', element.value);
    element.parentElement.parentElement.dataset.pull = element.value >= 4;
    const [set, id] = element.dataset.cardNumber.split('-');
    collection[set][id].amount = parseInt(element.value);
}

const selectValue = () => {
    if ( editingSet ) {
        this.event.target.select();
    }
}

const priceConfirm = () => {
    document.getElementById('priceConfirm').hidden = false;
    document.getElementById('price').select();
}