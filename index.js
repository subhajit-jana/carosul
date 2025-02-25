const container = document.querySelector(".carousel-container");
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let currentIndex = 0;

function updateCarousel() {
    container.style.transform = `translateX(${-currentIndex * 100}%)`;
    dots.forEach(dot => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
}

document.querySelector(".prev").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateCarousel();
});

document.querySelector(".next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateCarousel();
});

dots.forEach(dot => {
    dot.addEventListener("click", (e) => {
        currentIndex = parseInt(e.target.dataset.index);
        updateCarousel();
    });
});

updateCarousel();



