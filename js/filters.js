const SESSION_FILTERS_KEY = 'uiFilters';

const saveFiltersToSession = () => {
    const state = {
        status: document.getElementById('status').value,
        color: document.getElementById('color').value,
        set: document.getElementById('setValue').value,
        setLabel: document.getElementById('set').value,
        rarity: document.getElementById('rarity').value,
        block: document.getElementById('block').value,
        list: document.getElementById('list').value,
        show: document.getElementById('show').value,
    };
    sessionStorage.setItem(SESSION_FILTERS_KEY, JSON.stringify(state));
};

const restoreFiltersFromSession = () => {
    const raw = sessionStorage.getItem(SESSION_FILTERS_KEY);
    if (!raw) return;
    const state = JSON.parse(raw);

    document.getElementById('status').value = state.status || '';
    document.getElementById('color').value = state.color || '';
    document.getElementById('setValue').value = state.set || '';
    document.getElementById('set').value = state.setLabel || '';
    document.getElementById('rarity').value = state.rarity || '';
    document.getElementById('block').value = state.block || '';
    document.getElementById('list').value = state.list || 'table';
    document.getElementById('show').value = state.show || 'collection';

    list();
    show();
    filterCards();
};

const datalistNavigation = {
    'prev': null,
    'next': null,
};

/**
 * Toggle the navigation controls for set filter.
 */
const toggleSetNavigation = () => {
    document.getElementById('previusSet').disabled = datalistNavigation.prev === null;
    document.getElementById('nextSet').disabled = datalistNavigation.next === null;
}

const resetSearchSet = () => {
    document.getElementById('setValue').value = '';
    datalistNavigation.prev = null;
    datalistNavigation.next = null;
}

const filterCards = () => {
    const filters = {
        "status": document.getElementById('status').value,
        "color": document.getElementById('color').value,
        "set": document.getElementById('setValue').value,
        "rarity": document.getElementById('rarity').value,
        "block": document.getElementById('block').value
    }
    const setLists = document.getElementById('setLists');
    const content = document.getElementById('content');

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
        content.className = 'content';
    }
    cleanFilterStatus();
    if (filters.status !== '') {
        const status = {
            'reservation': '-1',
            'no_have': '0',
            'got_it': '1',
            'bought_it': '2',
            'proxy': '3'
        };
        if ('no_pull_no_have' === filters.status) {
            setLists.classList.add('filter--status--no_pull_no_have');
            content.classList.add('filter--status--no_pull_no_have');
            queryCards += '[data-status="0"]';
            cardClasses.push('filtered--status');
            rowClasses.push('match_filter');
        } else if ('no_pull' === filters.status) {
            setLists.classList.add('filter--status--no_pull');
            content.classList.add('filter--status--no_pull');
        } else {
            setLists.classList.add('filter--status');
            content.classList.add('filter--status', `status--${filters.status}`);
            queryCards += `[data-status="${status[filters.status]}"]`;
            cardClasses.push('filtered--status');
            rowClasses.push('match_filter--status');
        }
    }

    // Color filter
    const cleanFilterColor = () => {
        const filterRows = document.querySelectorAll('.filtered--color');
        filterRows.forEach(row => {
            row.classList.remove('filtered--color');
        });
        setLists.classList.remove('filter--color');
    }
    cleanFilterColor();
    if (filters.color !== '') {
        setLists.classList.add('filter--color');
        const filterColorRows = document.querySelectorAll(`[data-color^="${filters.color}"]`);
        filterColorRows.forEach(row => {
            row.classList.add('filtered--color');
        });
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
    cleanFilterSet();
    if (filters.set !== '') {
        setLists.classList.add('filter--set');
        queryCards += `[data-set="${filters.set}"]`;
        cardClasses.push('filtered--set');
        rowClasses.push('match_filter--set');
    }

    // Rarity filter
    const cleanFilterRarity = () => {
        const filterCards = document.querySelectorAll('.filtered--rarity');
        filterCards.forEach(card => {
            card.classList.remove('filtered--rarity');
            card.parentElement.parentElement.classList.remove('match_filter--rarity');
        });
        setLists.classList.remove('filter--rarity');
    }
    cleanFilterRarity();
    if (filters.rarity !== '') {
        setLists.classList.add('filter--rarity');
        queryCards += `[data-rarity="${filters.rarity}"]`;
        cardClasses.push('filtered--rarity');
        rowClasses.push('match_filter--rarity');
    }

    // Block filter
    const cleanFilterBlock = () => {
        const filterCards = document.querySelectorAll('.filtered--block');
        filterCards.forEach(card => {
            card.classList.remove('filtered--block');
            card.parentElement.parentElement.classList.remove('match_filter--block');
        });
        setLists.className = setLists.className.replace(/\bblock--\d+\b/g, '').trim();
        setLists.classList.remove('filter--block');
    }
    cleanFilterBlock();
    if (filters.block !== '') {
        setLists.classList.add('filter--block', `block--${filters.block}`);
        queryCards += `[data-block="${filters.block}"]`;
        cardClasses.push('filtered--block');
        rowClasses.push('match_filter--block');
    }
   
    const hideAllSets = () => {
        const filteredSet = document.querySelectorAll('.set--visible');
        filteredSet.forEach(row => {
            row.classList.replace('set--visible','set--hidden');
        });
    }
    hideAllSets();

    if ('' !== queryCards) {
        const filterCards = document.querySelectorAll(queryCards);
        filterCards.forEach( (card, index ) => {
            card.classList.add(...cardClasses);
            const rowCard = card.parentElement.parentElement;
            rowCard.classList.add(...rowClasses);
        });
    }

    // Ocultar tablas sin filas visibles
    const anyFilter = filters.status !== '' || filters.color !== '' || filters.set !== '' || filters.rarity !== '' || filters.block !== '';
    document.querySelectorAll('.set').forEach(table => {
        if (!anyFilter) {
            table.classList.remove('set--hidden', 'set--visible');
            return;
        }

        let hasResults = false;
        const rows = table.querySelectorAll('tbody tr');
        rows.forEach(row => {
            let match = true;
            if (filters.color !== '' && !row.classList.contains('filtered--color')) match = false;
            if (filters.rarity !== '' && !row.classList.contains('match_filter--rarity')) match = false;
            if (filters.set !== '' && !row.classList.contains('match_filter--set')) match = false;
            if (filters.block !== '' && !row.classList.contains('match_filter--block')) match = false;
            if (filters.status === 'no_pull') {
                if (row.dataset.pull === 'true') match = false;
            } else if (filters.status === 'no_pull_no_have') {
                if (row.dataset.pull === 'true' && !row.classList.contains('match_filter')) match = false;
            } else if (filters.status !== '') {
                if (!row.classList.contains('match_filter--status')) match = false;
            }
            if (match) hasResults = true;
        });

        table.classList.toggle('set--hidden', !hasResults);
        table.classList.toggle('set--visible', hasResults);
    });

    updateFilterCount();
    saveFiltersToSession();
}

const searchSet = (element) => {
    if (element.value !== '') {
        const datalist = element.list;
        const resultData = Object.entries(datalist.options).filter(([key, option]) => option.value === element.value);

        if ( resultData.length > 0 ) {
            const datalistIndex = parseInt(resultData[0][0]);
            const result = resultData.map(result => result[1].dataset.value)[0];

            document.getElementById('setValue').value = result;
            datalistNavigation.prev = datalistIndex !== 0 ? datalistIndex - 1 : null;
            datalistNavigation.next = datalistIndex + 1 !== datalist.options.length ? datalistIndex + 1 : null;
        } else {
            element.value = '';
            resetSearchSet();
        }
    } else {
        resetSearchSet();
    }
    filterCards();
    toggleSetNavigation();
}

const previusSet = () => {
    document.getElementById('set').value = document.getElementById('setOptions').options[datalistNavigation.prev].value;
    document.getElementById('set').dispatchEvent(new Event("change"));
}

const nextSet = () => {
    document.getElementById('set').value = document.getElementById('setOptions').options[datalistNavigation.next].value;
    document.getElementById('set').dispatchEvent(new Event("change"));
}
