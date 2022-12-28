let editingSet = false;

const modalOpen = (element) => {
    const modal = editingSet ? document.getElementById('editModal') : document.getElementById('viewModal');
    const modalTitle = modal.querySelector('.modal-title');
    modalTitle.innerHTML = element.title;
    if ( editingSet ) {
        const status = ['no_have', 'got_it', 'bought_it', 'proxy'];

        document.getElementById(status[element.dataset.status]).checked = true;
        document.getElementById('cardId').value = element.id;

        if ( parseInt(element.dataset.status) > 1 ) {
            document.getElementById('price').value = element.dataset.bought;
        } else {
            document.getElementById('price').value = '';
        }
    } else {
        const cardZoom = document.getElementById('card-zoom');
        const cardStatus = document.getElementById('card-status');
        const cardPrice = document.getElementById('card-price');
        const status = ['No la tengo', 'Obtenida', 'Comprada', 'Es proxy'];

        cardZoom.src = element.src;
        cardZoom.alt = element.alt;
        cardStatus.innerHTML = status[element.dataset.status];
        cardPrice.innerHTML = parseFloat(element.dataset.bought).toLocaleString('es-ES', {
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
    cancelEdit();
}

const updateValue = (element) => {
    element.setAttribute('value', element.value);
    const [set, id] = element.dataset.cardNumber.split('-');
    collection[set][id].amount = parseInt(element.value);
}