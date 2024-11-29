function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('active');
}

document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.createElement('div');
    cursor.classList.add('cursor-follow');
    document.body.appendChild(cursor);

    document.addEventListener('mousemove', (e) => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    });
});

document.getElementById('contactForm').addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
        alert('Gracias por contactarnos, te responderemos pronto.');
        document.getElementById('contactForm').reset();
    } else {
        alert('Por favor, completa todos los campos antes de enviar.');
    }
});
