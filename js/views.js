const list = () => {
    const list = document.getElementById('list').value;
    const setLists = document.getElementById('setLists');

    setLists.classList.remove('view--table', 'view--grid');
    setLists.classList.add('view--' + list);
};

const show = () => {
    const show = document.getElementById('show').value;
    const setLists = document.getElementById('setLists');

    setLists.classList.remove('view--collection', 'view--all');
    setLists.classList.add('view--' + show);
}

const downloadJson = (data) => {
    // Recuperar el JSON desde localStorage
    const jsonData = localStorage.getItem(data);
    if (!jsonData) {
        alert("No hay datos disponibles en el localStorage.");
        return;
    }

    // Crear un blob con los datos del JSON
    const blob = new Blob([jsonData], { type: 'application/json' });

    // Crear un enlace para la descarga
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${data}.json`; // Nombre del archivo a descargar
    document.body.appendChild(a);
    a.click();

    // Limpiar recursos
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}