const filterCards = () => {
    const filters = {
        "noCollected": document.getElementById('no_collected').checked,
        "noPull": document.getElementById('incomplete_pull').checked,
        "color": document.getElementById('color').value,
    }

    const getNoCard = cards => {
        const noCards = [];
        for (let card of cards) {     
            if ( card.dataset.status === '0' ){
                noCards.push(card.id);
            }
        }

        return noCards;
    }

    const rows = document.querySelectorAll('tbody tr');
    for (let row of rows) {
        const cards = row.querySelectorAll('[data-status]');
        const noCards = getNoCard( cards );

        // 1. Show/hide rows
        
        let isColor = true;
        if ( filters.color !== '' ) {
            const colorCard = row.querySelector('.card_id');
            if ( ! colorCard.className.includes(`card_id--${filters.color}`) ){
                isColor = false;
            }
        }

        let isIncompletedPull = true;
        if ( isColor && filters.noPull ) {
            const amount = row.querySelector('.amount-card');
            if (amount.value >= 4){
                isIncompletedPull = false;
            }
        }

        let noCardFind = true;
        if ( isColor && filters.noCollected ) {
            if (noCards.length === 0 ) {
                noCardFind = false;
            }
        }

        /**
         * noPull=true && noCollected=false -> isIncompletedPull
         * noPull=false && noCollected=true -> noCardFind
         * noPull=true && noCollected=true -> isIncompletedPull || noCardFind
         */
        let showRow = true;
        if ( filters.noPull && ! filters.noCollected ) {
            showRow = isIncompletedPull;
        } else if ( ! filters.noPull && filters.noCollected ) {
            showRow = noCardFind;
        } else if ( filters.noPull && filters.noCollected ) {
            showRow = isIncompletedPull || noCardFind;
        }

        row.style.display = isColor && showRow ? '' : 'none';

        // 2. Show/hide cards in the row

        if ( isColor && showRow && filters.noCollected ) {
            /**
             * noPull=true && noCollected=false -> nothing
             * noPull=false && noCollected=true -> hide status != 0
             * noPull=true && noCollected=true -> opacity status != 0
             */
            if ( ! filters.noPull ) {
                for (let card of cards) {
                    if ( ! noCards.includes(card.id)){
                        card.hidden = true;
                    }
                }
                row.querySelector('.amount-card').hidden = true;
            } else {
                for (let card of cards) {
                    if ( ! noCards.includes(card.id)){
                        card.classList.add('card--gotit');
                    }
                }
                row.querySelector('.amount-card').hidden = false;
            }
        } else {
            for (let card of cards) {
                card.classList.remove('card--gotit');
                card.hidden = false;
            }
            row.querySelector('.amount-card').hidden = false;
        }
    }
}