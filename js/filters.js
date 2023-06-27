const filterCards = () => {
    const filters = {
        "status": document.getElementById('status').value,
        "color": document.getElementById('color').value,
        "set": document.getElementById('setValue').value
    }
    const setLists = document.getElementById('setLists');

    let queryCards = '';
    let cardClasses = [];
    let rowClasses = [];

    // Status filter
    const cleanFilterStatus = () => {
        const filterCards = document.querySelectorAll('.filtered--status');
        filterCards.forEach(card => {
            card.classList.remove('filtered--status');
        });

        const filterRows = document.querySelectorAll('.match_filter--status');
        filterRows.forEach(row => {
            row.classList.remove('match_filter', 'match_filter--status');
        });

        setLists.classList.remove('filter--status', 'filter--status--no_pull', 'filter--status--no_pull_no_have');
    }
    if (filters.status !== '') {
        const status = {
            'reservation': '-1',
            'no_have': '0',
            'got_it': '1',
            'bought_it': '2',
            'proxy': '3'
        };
        cleanFilterStatus();
        if ('no_pull_no_have' === filters.status) {
            setLists.classList.add('filter--status--no_pull_no_have');
            queryCards += '[data-status="0"]';
            cardClasses.push('filtered--status');
            rowClasses.push('match_filter');
        } else if ('no_pull' === filters.status) {
            setLists.classList.add('filter--status--no_pull');
        } else {
            setLists.classList.add('filter--status');
            queryCards += `[data-status="${status[filters.status]}"]`;
            cardClasses.push('filtered--status');
            rowClasses.push('match_filter--status');
        }
    } else {
        cleanFilterStatus();
    }

    // Color filter
    const cleanFilterColor = () => {
        const filterRows = document.querySelectorAll('.filtered--color');
        filterRows.forEach(row => {
            row.classList.remove('filtered--color');
        });
        setLists.classList.remove('filter--color');
    }
    if (filters.color !== '') {
        cleanFilterColor();
        setLists.classList.add('filter--color');
        const filterColorRows = document.querySelectorAll(`[data-color^="${filters.color}"]`);
        filterColorRows.forEach(row => {
            row.classList.add('filtered--color');
        });
    } else {
        cleanFilterColor();
    }

    // Set filter
    const cleanFilterSet = () => {
        const filterCards = document.querySelectorAll('.filtered--set');
        filterCards.forEach(card => {
            card.classList.remove('filtered--set');
            card.parentElement.parentElement.classList.remove('match_filter--set');
        });
        setLists.classList.remove('filter--set');
    }
    if (filters.set !== '') {
        cleanFilterSet();
        setLists.classList.add('filter--set');
        queryCards += `[data-set="${filters.set}"]`;
        cardClasses.push('filtered--set');
        rowClasses.push('match_filter--set');
    } else {
        cleanFilterSet();
    }

    if ('' !== queryCards) {
        const filterCards = document.querySelectorAll(queryCards);
        filterCards.forEach(card => {
            card.classList.add(...cardClasses);
            card.parentElement.parentElement.classList.add(...rowClasses);
        });
    }
}

const searchSet = (element) => {
    if (element.value !== '') {
        const datalist = element.list;
        const result = Object.entries(datalist.options).filter(([key, option]) => option.value === element.value).map(result => result[1].dataset.value)[0];
        if (result !== undefined) {
            document.getElementById('setValue').value = result;
        } else {
            element.value = '';
            document.getElementById('setValue').value = '';
        }
    } else {
        document.getElementById('setValue').value = '';
    }
    filterCards();
}