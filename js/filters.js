const filterCards = () => {
    const filters = {
        "status": document.getElementById('status').value,
        "color": document.getElementById('color').value,
        "set": document.getElementById('set').value
    }
    const setLists = document.getElementById('setLists');

    const getFilterCardsByStatus = (cards, status = '0') => {
        const filterCards = [];
        for (let card of cards) {     
            if ( card.dataset.status === status ){
                filterCards.push(card.id);
            }
        }

        return filterCards;
    }

    const getFilterCardsBySet = (cards, set) => {
        const filterCards = [];
        for (let card of cards) {     
            if ( card.id === set ){
                filterCards.push(card.id);
            }
        }

        return filterCards;
    }

    const rows = document.querySelectorAll('tbody tr');
    for (let row of rows) {
        const cards = row.querySelectorAll('[data-status]');

        // 1. Show/hide rows
        
        let isColor = true;
        if ( filters.color !== '' ) {
            // const colorCard = row.querySelector('.card_id');
            // if ( ! colorCard.className.includes(`card_id--${filters.color}`) ){
            //     isColor = false;
            // }
        }

        let isStatus = true;
        if ( isColor && filters.status !== '' ) {
            const status = {
                'reservation': '-1',
                'no_have': '0',
                'got_it': '1',
                'bought_it': '2',
                'proxy': '3'
            };

            if ( 'no_pull_no_have' === filters.status ) {
                const statusCardsInRow = getFilterCardsByStatus( cards );
                const amount = row.querySelector('.amount-card');

                if (amount.value >= 4 && statusCardsInRow.length === 0 ){
                    isStatus = false;
                }
            } else if ( 'no_pull' === filters.status ) {
                const amount = row.querySelector('.amount-card');
                if (amount.value >= 4){
                    isStatus = false;
                }
            } else {
                const statusCardsInRow = getFilterCardsByStatus( cards, status[filters.status] );

                if ( statusCardsInRow.length === 0 ) {
                    isStatus = false;
                }
            }
        }

        row.style.display = isColor && isStatus ? '' : 'none';

        // 2. Show/hide cards in the row

        if ( isColor && isStatus ) {
            for (let card of cards) {
                card.classList.remove('card--gotit');
                card.hidden = false;
            }
            row.querySelector('.amount-card').hidden = false;

            if ( filters.status !== '' ) {
                const status = {
                    'reservation': '-1',
                    'no_have': '0',
                    'got_it': '1',
                    'bought_it': '2',
                    'proxy': '3'
                };
    
                if ( 'no_pull_no_have' === filters.status ) {
                    const statusCardsInRow = getFilterCardsByStatus( cards );

                    for (let card of cards) {
                        if ( ! statusCardsInRow.includes(card.id)){
                            card.classList.add('card--gotit');
                        }
                    }
                } else if ( 'no_pull' === filters.status ) {
                    // Nothint for now.
                } else {
                    const statusCardsInRow = getFilterCardsByStatus( cards, status[filters.status] );

                    for (let card of cards) {
                        if ( ! statusCardsInRow.includes(card.id)){
                            card.hidden = true;
                        }
                    }
                    row.querySelector('.amount-card').hidden = true;
                }
            }
        }
    }

    // New logic
    const cleanFilterColor = () => {
        const filterRows = document.querySelectorAll('.filtered--color');
        filterRows.forEach( row => {
            row.classList.remove('filtered--color');
        });
    }

    if ( filters.color !== '' ) {
        setLists.classList.add('filter--color');
        cleanFilterColor();
        const filterColorRows = document.querySelectorAll(`[data-color^="${filters.color}"]`);
        filterColorRows.forEach( row => {
            row.classList.add('filtered--color');
        });
    } else {
        setLists.classList.remove('filter--color');
        cleanFilterColor();
    }

    const cleanFilterSet = () => {
        const filterCards = document.querySelectorAll('.filtered--set');
        filterCards.forEach( card => {
            card.classList.remove('filtered--set');
            card.parentElement.parentElement.classList.remove('match_filter');
        });
    }

    if ( filters.set !== '' ) {
        setLists.classList.add('filter--set');
        cleanFilterSet();
        const filterSetCards = document.querySelectorAll(`[data-set="${filters.set}"]`);
        filterSetCards.forEach( card => {
            card.classList.add('filtered--set');
            card.parentElement.parentElement.classList.add('match_filter');
        });
    } else {
        setLists.classList.remove('filter--set');
        cleanFilterSet();
    }
}