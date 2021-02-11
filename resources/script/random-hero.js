var images = ['hero-halloween.jpg', 'hero-high-window.jpg', 'hero-sewing-desk.jpg', 'hero-window-watchers.jpg', 'hero-zig-crotch.jpg'];

let bannerBackground = document.getElementById('banner');

bannerBackground.style.backgroundImage = 'url(resources/img/' + images[Math.floor(Math.random() * images.length)] + ')';

