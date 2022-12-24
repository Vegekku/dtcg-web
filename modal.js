const modalOpen = (element) => {
    const modal = document.getElementById('modal-one');
    const modalTitle = document.getElementById('modal-title');
    modalTitle.innerHTML = element.title;
    modal.classList.add('open');
};

const modalClose = () => {
    const modal = document.getElementById('modal-one');
    modal.classList.remove('open');
}