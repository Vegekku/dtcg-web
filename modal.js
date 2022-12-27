let editingSet = false;

const modalOpen = (element) => {
    if ( !editingSet ) {
        return;
    }
    const modal = document.getElementById('modal-one');
    const modalTitle = document.getElementById('modal-title');
    const status = ['no_have', 'got_it', 'bought_it', 'proxy'];

    modalTitle.innerHTML = element.title;
    document.getElementById(status[element.dataset.status]).checked = true;
    document.getElementById('cardId').value = element.id;

    if ( parseInt(element.dataset.status) > 1 ) {
        document.getElementById('price').value = element.dataset.bought;
    } else {
        document.getElementById('price').value = '';
    }

    modal.classList.add('open');
};

const modalClose = () => {
    const modal = document.getElementById('modal-one');
    modal.classList.remove('open');
};

const modalOk = () => {
    const modal = document.getElementById('modal-one');
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

const editSet = () => {
    toggleSetButtons(true);
    toggleEditionButtons(true);
    editingSet = true;
};

const cancelEdit = () => {
    toggleSetButtons(false);
    toggleEditionButtons(false);
    editingSet = false;
}

const saveSet = () => {
    window.localStorage.setItem("collection", JSON.stringify(collection));
    cancelEdit();
}