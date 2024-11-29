document.addEventListener('mousemove', function(event) {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    
    const caras = document.querySelectorAll('.muneco');

    caras.forEach(function(muneco) {
        const cara = muneco.querySelector('div');
        const ojos = cara.querySelectorAll('.ojo');
        
        const rect = cara.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const angle = Math.atan2(mouseY - centerY, mouseX - centerX);

        ojos.forEach(function(ojo) {
            const distance = 15; 
            const eyeX = Math.cos(angle) * distance;
            const eyeY = Math.sin(angle) * distance;
            
            ojo.style.transform = `translate(${eyeX}px, ${eyeY}px)`;
        });
    });
});

const formulario = document.querySelector('.formulario');
const inputs = formulario.querySelectorAll('input, textarea');

inputs.forEach(input => {
    input.addEventListener('input', function() {
        if (this.checkValidity()) {
            this.style.borderColor = 'green';
        } else {
            this.style.borderColor = 'red';
        }
    });
});

function toggleDarkModeImages() {
    const images = document.querySelectorAll('.apartado img');

    const isDarkMode = document.body.classList.contains('dark-mode');

    images.forEach(img => {
        const originalSrc = img.getAttribute('data-src') || img.src.split('?')[0]; 

        const darkImage = img.getAttribute('data-dark-src');

        if (isDarkMode) {
            img.src = darkImage;
        } else {
            img.src = originalSrc;
        }
    });
}

const toggleCheckbox = document.getElementById('toggle-theme');
toggleCheckbox.addEventListener('change', function() {
    document.body.classList.toggle('dark-mode');
    document.querySelector('.formulario').classList.toggle('dark-mode');
    
    toggleDarkModeImages();
});

if (document.body.classList.contains('dark-mode')) {
    toggleDarkModeImages();
}

const apartados = document.querySelectorAll('.apartado');

apartados.forEach(apartado => {
    apartado.addEventListener('mouseover', function() {
        apartado.style.transform = 'scale(1.1)';
        apartado.style.transition = 'transform 0.3s ease';
    });

    apartado.addEventListener('mouseout', function() {
        apartado.style.transform = 'scale(1)';
    });
});

document.querySelector('.hamburger-icon').addEventListener('click', function() {
    const dropdown = document.querySelector('.dropdown');
    dropdown.classList.toggle('open');
});


const verMasButtons = document.querySelectorAll('.ver-mas');

verMasButtons.forEach(button => {
    button.addEventListener('click', function() {
        const detalles = button.nextElementSibling; 
        detalles.style.display = detalles.style.display === 'block' ? 'none' : 'block';
    });
});
