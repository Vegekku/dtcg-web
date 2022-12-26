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

    modal.classList.add('open');
};

const modalClose = () => {
    const modal = document.getElementById('modal-one');
    modal.classList.remove('open');
};

const modalOk = () => {
    const modal = document.getElementById('modal-one');
    const status = document.querySelector('input[name="status"]:checked').value
    const cardId = document.getElementById('cardId').value;

    const [cardNumber, slug] = cardId.split('__');
    const [set, id] = cardNumber.split('-');

    collection[set][id].cards[slug].status = parseInt(status);
    document.getElementById(cardId).setAttribute('data-status', status);

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