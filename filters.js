const filterCards = () => {
    const noCollected = document.getElementById('no_collected').checked;
    const incompletePull = document.getElementById('incomplete_pull').checked;

    const rows = document.querySelectorAll('tbody tr');
    for (let row of rows) {
        let showRow = true;
        if ( incompletePull ) {
            const amount = row.querySelector('.amount-card');
            if (amount.value > 3){
                showRow = false;
            }
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
            // Si no incompletePull, showRow if noCardFind.
            if( ! incompletePull){
                showRow = noCardFind;
            }
        } else {
            for (let card of cards) {
                card.classList.remove('card--gotit');
            }
        }

        row.style.display = showRow || noCardFind ? 'table-row' : 'none';
    }
}