function showImage(src) {
    document.getElementById('modalImage').src = src;
}

function typeEffect(element, text, callback) {
    let i = 0;
    const speed = 100;

    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        } else if (callback) {
            callback();
        }
    }

    element.innerHTML = '';
    type();
}

document.addEventListener('DOMContentLoaded', () => {
    const heroText = document.getElementById('heroText');
    const heroSubText = document.getElementById('heroSubText');
    const aboutHeading = document.getElementById('aboutHeading');
    const aboutText = document.getElementById('aboutText');

    typeEffect(heroText, 'Hi! Welcome 😊', () => {
        typeEffect(heroSubText, 'Full Stack Cellphone User | Problem Solver', () => {
            typeEffect(aboutHeading, 'About Me', () => {
                typeEffect(aboutText, 'I’m a passionate ML Lord and nana user.');
            });
        });
    });
});
