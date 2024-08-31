document.addEventListener("DOMContentLoaded", () => {
    const texts = document.querySelectorAll('.text');
    const background = document.querySelector('.background');
    const prevButton = document.querySelector('.scroll-arrow.prev');
    const nextButton = document.querySelector('.scroll-arrow.next');
    let index = 0;

    function changeContent() {
        texts.forEach((text) => {
            text.style.opacity = '0';
        });
        background.style.opacity = '0';

        setTimeout(() => {
            const images = [
                'url("main-slider-01.jpg")',
                'url("main-slider-02.jpg")',
                'url("main-slider-03.jpg")'
            ];
            background.style.backgroundImage = images[index];

            texts.forEach((text, i) => {
                text.style.opacity = i === index ? '1' : '0';
            });
            background.style.opacity = '1';
        }, 1000); // Fade duration
    }

    function showNext() {
        index = (index + 1) % texts.length;
        changeContent();
    }

    function showPrevious() {
        index = (index - 1 + texts.length) % texts.length;
        changeContent();
    }

    setInterval(showNext, 6000);
    changeContent(); // Initial call to show first text and image immediately

    if (prevButton) {
        prevButton.addEventListener('click', showPrevious);
    }

    if (nextButton) {
        nextButton.addEventListener('click', showNext);
    }

    // Mobile menu toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('show');
        });
    }
});


document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.portfolio-container');
    const items = document.querySelectorAll('.portfolio-item');
    
    let totalWidth = 0;
    items.forEach(item => totalWidth += item.offsetWidth);

    container.style.width = `${totalWidth}px`;

    // Adjust the animation duration based on the total width
    container.style.animationDuration = `${totalWidth / 50}s`; // Adjust speed as needed

    window.addEventListener('resize', () => {
        totalWidth = 0;
        items.forEach(item => totalWidth += item.offsetWidth);
        container.style.width = `${totalWidth}px`;
        container.style.animationDuration = `${totalWidth / 50}s`;
    });
});


// -----------------------------
// document.addEventListener('DOMContentLoaded', () => {
//     const menuToggle = document.querySelector('.menu-toggle');
//     const navLinks = document.querySelector('.nav-links');

//     menuToggle.addEventListener('click', () => {
//         navLinks.classList.toggle('show');
//     });
// });



