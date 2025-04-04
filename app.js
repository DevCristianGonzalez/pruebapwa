document.addEventListener('DOMContentLoaded', function() {
    // Navegación entre páginas
    const navButtons = document.querySelectorAll('.nav-button');
    
    navButtons.forEach(button => {
        button.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            window.location.href = page + '.html';
        });
    });
    
    // Funcionalidad para la página de transporte
    const showFormButton = document.getElementById('showFormButton');
    const cancelFormButton = document.getElementById('cancelFormButton');
    const transporteListView = document.getElementById('transporteListView');
    const transporteFormView = document.getElementById('transporteFormView');
    const transporteForm = document.getElementById('transporteForm');
    
    if (showFormButton) {
        showFormButton.addEventListener('click', function() {
            transporteListView.classList.add('hidden');
            transporteFormView.classList.remove('hidden');
        });
    }
    
    if (cancelFormButton) {
        cancelFormButton.addEventListener('click', function() {
            transporteFormView.classList.add('hidden');
            transporteListView.classList.remove('hidden');
        });
    }
    
    if (transporteForm) {
        transporteForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Registro de transporte guardado');
            transporteFormView.classList.add('hidden');
            transporteListView.classList.remove('hidden');
            this.reset();
        });
    }
    
    // Funcionalidad para la página de opciones
    const logoutButton = document.getElementById('logoutButton');
    
    if (logoutButton) {
        logoutButton.addEventListener('click', function() {
            window.location.href = 'index.html';
        });
    }
    
    // Funcionalidad para los botones de menú en opciones
    const menuOptions = document.querySelectorAll('.menu-option');
    
    menuOptions.forEach(option => {
        option.addEventListener('click', function() {
            alert('Esta funcionalidad está en desarrollo');
        });
    });
});