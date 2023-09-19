const slider = document.querySelector('.slider1');
const prevButton = document.querySelector('.prev-button1');
const nextButton = document.querySelector('.next-button1');

let currentIndex = 0;

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slider.children.length;
    updateSlider();
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slider.children.length) % slider.children.length;
    updateSlider();
});

function updateSlider() {
    const translateX = -currentIndex * 100;
    slider.style.transform = `translateX(${translateX}%)`;
}

// Automatic slider
setInterval(() => {
    currentIndex = (currentIndex + 1) % slider.children.length;
    updateSlider();
}, 10000); // Change slide every 5 seconds