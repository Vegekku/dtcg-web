let editingSet = false;
let cardAPI = null;

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
            toggleEditionInputs('priceConfirm');
        } else {
            document.getElementById('price').value = '';
            document.getElementById('cardmarketUrl').value = element.dataset.cardmarketurl || '';
            document.getElementById('cardmarketPrice').value = element.dataset.cardmarketprice || '';
            toggleEditionInputs('cardmarket');
        }
    } else {
        const cardStatus = document.getElementById('card-status');
        const cardPrice = document.getElementById('card-price');
        const cardmarketLink = document.getElementById('cardmarketLink');
        const cardmarketMinimun = document.getElementById('cardmarketMinimun');
        const status = ['No la tengo', 'Obtenida', 'Comprada', 'Es proxy'];
        let price = element.dataset.bought;

        if (element.dataset.status === '0' && element.dataset.cardmarketurl !== '') {
            cardmarketLink.href = element.dataset.cardmarketurl;
            price = element.dataset.cardmarketprice;
            cardmarketLink.hidden = false;
        } else {
            cardmarketLink.removeAttribute('href');
            cardmarketLink.hidden = true;
        }

        cardStatus.innerHTML = status[element.dataset.status];
        cardPrice.innerHTML = parseFloat(price).toLocaleString('es-ES', {
            style: 'currency', 
            currency: 'EUR',
        });
    }
    modal.classList.add('open');
};

const modalClose = (element) => {
    const modal = element.closest('.modal');
    modal.classList.remove('open');
};

const modalOk = () => {
    const modal = document.getElementById('editModal');
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

    if ( status === 0 ) {
        const cardmarketUrl = document.getElementById('cardmarketUrl').value || '';
        const cardmarketPrice = parseFloat( document.getElementById('cardmarketPrice').value || 0 );

        if ( cardmarketUrl !== '' && cardmarketPrice !== 0 ) {
            (cardmarket[cardId] ??= {}).url = cardmarketUrl;

            (cardmarket[cardId].price ??= []);
            if (cardmarket[cardId].price.length > 0) {
                const lastCardmarketPrice = cardmarket[cardId].price.slice(-1)[0];
                if (lastCardmarketPrice !== cardmarketPrice) {
                    cardmarket[cardId].price.push(cardmarketPrice);
                }
            } else {
                cardmarket[cardId].price.push(cardmarketPrice);
            }

            document.getElementById(cardId).setAttribute('data-cardmarketUrl', cardmarketUrl);
            document.getElementById(cardId).setAttribute('data-cardmarketPrice', cardmarketPrice);
        }
    }

    modal.classList.remove('open');
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
    toggleEditionInputs('priceConfirm');
    document.getElementById('price').select();
}

const priceCardmarket = () => {
    toggleEditionInputs('cardmarket');
    document.getElementById('cardmarketUrl').select();
}