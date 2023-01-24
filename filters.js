const incompletePull = (active) => {
    const rows = document.querySelectorAll('tbody tr');
    for (let row of rows) {
        const amount = row.querySelector('.amount-card');
        if (amount.value > 3){
            row.style.display = active ? 'none' : 'table-row';
        }
    }
    document.getElementById('no_collected').disabled = active;
}

const noCollected = (active) => {
    const rows = document.querySelectorAll('tbody tr');
    for (let row of rows) {
        const cards = row.querySelectorAll('[data-status]');
        let noCardFind = false;

        for (let card of cards) {
            if (active) {     
                if ( card.dataset.status === '0' ){
                    noCardFind = true;
                } else {
                    card.classList.add('card--gotit');
                }
            } else {
                card.classList.remove('card--gotit');
            }
        }
        
        row.style.display = active && !noCardFind ? 'none' : 'table-row';
    }
    document.getElementById('incomplete_pull').disabled = active;
}