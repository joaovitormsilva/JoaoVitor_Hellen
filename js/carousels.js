let scrollAmount = 0;

function scrollCarousel(direction) {
    const track = document.getElementById('wideTrack');
    if (!track) return;

    const step = 320; 
    const maxScroll = -(track.scrollWidth - track.parentElement.clientWidth);

    scrollAmount += (direction * -step);

    if (scrollAmount > 0) scrollAmount = 0;
    if (scrollAmount < maxScroll) scrollAmount = maxScroll;

    track.style.transform = `translateX(${scrollAmount}px)`;
}