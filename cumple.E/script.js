// Contador de tiempo juntos (cambia '2020-01-01' por la fecha real de cuando empezaron)
const startDate = new Date('2025-09-05'); // Ejemplo: Cambia esto
function updateCounter() {
    const now = new Date();
    const diff = now - startDate;
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    document.getElementById('timeTogether').innerHTML = `${days} días, ${hours} horas, ${minutes} minutos`;
}
updateCounter();
setInterval(updateCounter, 60000); // Actualiza cada minuto

const images = ['foto1.jpeg', 'foto2.jpeg','foto3.jpeg','foto4.jpeg','foto5.jpeg','foto6.jpeg']; // Cambia por tus nombres reales
let currentIndex = 0;
const sliderImage = document.getElementById('sliderImage');
document.getElementById('nextBtn').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    sliderImage.src = images[currentIndex];
});
document.getElementById('prevBtn').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    sliderImage.src = images[currentIndex];
});

// Botón secreto
document.getElementById('secretBtn').addEventListener('click', () => {
    const message = document.getElementById('secretMessage');
    message.classList.toggle('hidden');
});

// Confeti al cargar
window.addEventListener('load', () => {
    const confettiContainer = document.getElementById('confetti');
    for (let i = 0; i < 100; i++) {
        const piece = document.createElement('div');
        piece.classList.add('confetti-piece');
        piece.style.left = Math.random() * 100 + '%';
        piece.style.animationDelay = Math.random() * 3 + 's';
        confettiContainer.appendChild(piece);
    }
});