let currentIndex = 0;

function moveSlide(direction) {
    const cards = document.querySelectorAll('.card');
    const totalCards = cards.length;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = totalCards - 1;
    } else if (currentIndex >= totalCards) {
        currentIndex = 0;
    }

    const slider = document.querySelector('.slider');
    const cardWidth = cards[0].offsetWidth + 15; // width of each card plus margin
    slider.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}
