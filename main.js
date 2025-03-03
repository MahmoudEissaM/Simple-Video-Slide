const playlistItems = document.querySelectorAll('.playlist-item');
const videoElement = document.getElementById('main-video');
let activeItem = null;

playlistItems.forEach(item => {
    item.addEventListener('click', () => {
        if (activeItem) {
            activeItem.classList.add('spin');
            activeItem.addEventListener('animationend', () => {
                activeItem.classList.remove('spin');
            }, { once: true });
        }

        item.classList.add('spin');
        item.addEventListener('animationend', () => {
            item.classList.remove('spin');
        }, { once: true });

        activeItem = item;

        const videoSrc = item.getAttribute('data-video');
        videoElement.querySelector('source').src = videoSrc;
        videoElement.load();
        videoElement.play();
    });
});

videoElement.addEventListener('dblclick', () => {
    if (videoElement.requestFullscreen) {
        videoElement.requestFullscreen();
    } else if (videoElement.webkitRequestFullscreen) {
        videoElement.webkitRequestFullscreen();
    } else if (videoElement.msRequestFullscreen) {
        videoElement.msRequestFullscreen();
    }
});