const image = document.getElementById('shakyImage');

image.addEventListener('mouseenter', () => {
    console.log('The image is shaking!');
});

image.addEventListener('mouseleave', () => {
    console.log('The image stopped shaking.');
});

