let editingSet = false;
let cardAPI = null;

const modalOpen = (element) => {
    const modal = editingSet ? document.getElementById('editModal') : document.getElementById('viewModal');
    const modalTitle = modal.querySelector('.modal-title');
    const [cardNumber, slug] = element.id.split('__');

    const getCardmarketUrl = (url) => {
        if ( cardAPI === null ) {
            cardAPI = JSON.parse( window.localStorage.getItem("cardAPI") || '{}' );
        }

        // Buscar en objeto si existe el cardNumber
        // Si exste, componer la url en función de esos datos
        // Sino, pedir a la api
        const response = fetch('https://digimoncard.io/api-public/search.php?card=' + cardNumber)
            .then( response => response.json() )
            .then( json => { return url.replaceAll('digimonName', json[0].name) } )
            .catch(err => console.log('Solicitud fallida', err)); 

        return response;
    }

    modalTitle.innerHTML = `${cardNumber}: ${element.title}`;
    if ( editingSet ) {
        const status = ['no_have', 'got_it', 'bought_it', 'proxy'];

        document.getElementById(status[element.dataset.status]).checked = true;
        document.getElementById('cardId').value = element.id;

        if ( parseInt(element.dataset.status) > 1 ) {
            document.getElementById('price').value = element.dataset.bought;
            document.getElementById('priceConfirm').hidden = false;
        } else {
            document.getElementById('price').value = '';
            document.getElementById('priceConfirm').hidden = true;
        }
    } else {
        const cardZoom = document.getElementById('card-zoom');
        const cardStatus = document.getElementById('card-status');
        const cardPrice = document.getElementById('card-price');
        const cardmarket = document.getElementById('cardmarket');
        const status = ['No la tengo', 'Obtenida', 'Comprada', 'Es proxy'];

        cardZoom.src = element.src;
        cardZoom.alt = element.alt;
        cardStatus.innerHTML = status[element.dataset.status];
        cardPrice.innerHTML = parseFloat(element.dataset.bought).toLocaleString('es-ES', {
            style: 'currency', 
            currency: 'EUR',
        });
    
        cardmarket.href = element.dataset.cardmarket.replaceAll('cardNumber', cardNumber);
        cardmarket.addEventListener( 'click', (event) => {
            event.preventDefault();
            const url = event.currentTarget.href;
            if ( '' !== url ){
                getCardmarketUrl(url).then( data => { console.log(data); window.open(data,'_blank'); });
            }
        })
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

const selectValue = () => {
    if ( editingSet ) {
        this.event.target.select();
    }
}

const priceConfirm = () => {
    document.getElementById('priceConfirm').hidden = false;
    document.getElementById('price').select();
}