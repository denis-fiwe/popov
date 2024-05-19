document.addEventListener("DOMContentLoaded", function() {
    // Скрипт для обработки формы
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Данные записаны');
    });

    // Скрипт для интерактивного элемента
    const interactiveElement = document.getElementById('interactive-element');
    interactiveElement.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#29648A';
    });
    interactiveElement.addEventListener('mouseout', function() {
        this.style.backgroundColor = '#2E9CCA';
    });
});