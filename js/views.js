const list = () => {
    const list = document.getElementById('list').value;
    const setLists = document.getElementById('setLists');

    setLists.classList.remove('view--table','view--grid');
    setLists.classList.add('view--'+list);
};

const show = () => {
    const show = document.getElementById('show').value;
    const setLists = document.getElementById('setLists');

    setLists.classList.remove('view--collection','view--all');
    setLists.classList.add('view--'+show);
}