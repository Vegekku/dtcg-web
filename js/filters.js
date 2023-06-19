const filterCards = () => {
    const filters = {
        "status": document.getElementById('status').value,
        "color": document.getElementById('color').value,
        "set": document.getElementById('set').value
    }
    const setLists = document.getElementById('setLists');

    // Status filter
    const cleanFilterStatus = (  ) => {
        const filterCards = document.querySelectorAll('.filtered--status');
        filterCards.forEach( card => {
            card.classList.remove('filtered--status');
        });

        const filterRows = document.querySelectorAll('.match_filter');
        filterRows.forEach( row => {
            row.classList.remove('match_filter');
        });

        setLists.classList.remove('filter--status--no-pull','filter--status--no_pull_no_have');
    }
    if ( filters.status !== '' ) {
        const status = {
            'reservation': '-1',
            'no_have': '0',
            'got_it': '1',
            'bought_it': '2',
            'proxy': '3'
        };
        setLists.classList.add('filter--status');
        cleanFilterStatus();
        if ( 'no_pull_no_have' === filters.status ) {
            setLists.classList.add('filter--status--no_pull_no_have');
            const filterStatusCards = document.querySelectorAll('[data-status="0"]');
            filterStatusCards.forEach( card => {
                card.classList.add('filtered--status');
                card.parentElement.parentElement.classList.add('match_filter');
            });
        } else if ( 'no_pull' === filters.status ) {
            setLists.classList.add('filter--status--no_pull');
        } else {
            const filterStatusCards = document.querySelectorAll(`[data-status="${status[filters.status]}"]`);
            filterStatusCards.forEach( card => {
                card.classList.add('filtered--status');
                card.parentElement.parentElement.classList.add('match_filter');
            });
        }
    } else {
        setLists.classList.remove('filter--status');
        cleanFilterStatus();
    }

    // Color filter
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

    // Set filter
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