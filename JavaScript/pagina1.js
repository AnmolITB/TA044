document.addEventListener('wheel', function(event) {
    window.scrollBy({
        top: event.deltaY,  
        behavior: 'smooth'  
    });
});

document.addEventListener('mousemove', function(event) {
    var robotHead = document.querySelector('.robot-head');
    var leftEye = document.querySelector('.left-eye');
    var rightEye = document.querySelector('.right-eye');

    var mouseX = event.clientX;
    var mouseY = event.clientY;

    var headRect = robotHead.getBoundingClientRect();
    var headCenterX = headRect.left + headRect.width / 2;
    var headCenterY = headRect.top + headRect.height / 2;

    var angle = Math.atan2(mouseY - headCenterY, mouseX - headCenterX);

    var eyeDistance = 10;

    leftEye.style.transform = 'translate(' + (Math.cos(angle) * eyeDistance) + 'px, ' + (Math.sin(angle) * eyeDistance) + 'px)';
    rightEye.style.transform = 'translate(' + (Math.cos(angle) * eyeDistance) + 'px, ' + (Math.sin(angle) * eyeDistance) + 'px)';
});


const logo = document.getElementById('logo-bo6');

const images = [
    
    "../IMAGENES/D1.avif",       
    "../IMAGENES/D2.jpg",    
    "../IMAGENES/D3.jpg",   
    "../IMAGENES/D4.jpg"     
    
];
let currentImageIndex = 0;
logo.addEventListener('click', function() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    logo.src = images[currentImageIndex];
});





