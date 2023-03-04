const filterCards = () => {
    const noCollected = document.getElementById('no_collected').checked;
    const incompletePull = document.getElementById('incomplete_pull').checked;
    const color = document.getElementById('color').value;

    const rows = document.querySelectorAll('tbody tr');
    for (let row of rows) {
        let isIncompletedPull = false;
        if ( incompletePull ) {
            const amount = row.querySelector('.amount-card');
            if (amount.value < 4){
                isIncompletedPull = true;
            }
        } else {
            isIncompletedPull = true;
        }

        const cards = row.querySelectorAll('[data-status]');
        let noCardFind = false;
        if (noCollected) {
            for (let card of cards) {     
                if ( card.dataset.status === '0' ){
                    noCardFind = true;
                } else {
                    card.classList.add('card--gotit');
                }
            }
            // Si no incompletePull, isIncompletedPull mismo valor que noCardFind.
            if( ! incompletePull){
                isIncompletedPull = noCardFind;
            }
        } else {
            for (let card of cards) {
                card.classList.remove('card--gotit');
            }
        }

        let isColor = false;
        if ( color !== '' ) {
            const colorCard = row.querySelector('.card_id');
            if ( colorCard.className.includes(`card_id--${color}`) ){
                isColor = true;
            }
        } else {
            isColor = true;
        }

        row.style.display = ( isIncompletedPull || noCardFind ) && isColor ? '' : 'none';
    }
}