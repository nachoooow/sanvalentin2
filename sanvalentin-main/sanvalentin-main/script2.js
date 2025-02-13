document.getElementById('siBtn').addEventListener('click', function() {
    document.getElementById('countdown').style.display = 'block';
    setInterval(updateCountdown, 1000);
});

function updateCountdown() {
    const now = new Date();
    const valentinesDay = new Date(now.getFullYear(), 1, 14); // 14 de febrero
    if (now.getMonth() === 1 && now.getDate() > 14) {
        valentinesDay.setFullYear(valentinesDay.getFullYear() + 1);
    }
    const diff = valentinesDay - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}
document.getElementById('secretBtn').addEventListener('click', function() {
    alert("¡Eres la persona más especial en mi vida! ❤️");
});

function createPetals() {
    const petalsContainer = document.getElementById('petalsContainer');
    for (let i = 0; i < 50; i++) {
        const petal = document.createElement('div');
        petal.classList.add('petal');
        petal.style.left = `${Math.random() * 100}vw`;
        petal.style.animationDuration = `${Math.random() * 5 + 3}s`;
        petalsContainer.appendChild(petal);
    }
}

createPetals();


function typeWriter(text, element, speed = 100) {
    let i = 0;
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

document.getElementById('siBtn').addEventListener('click', function() {
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.style.left = `${Math.random() * 100}vw`;
        heart.style.top = `${Math.random() * 100}vh`;
        heart.style.animationDuration = `${Math.random() * 2 + 1}s`;
        document.body.appendChild(heart);
        setTimeout(() => heart.remove(), 2000);
    }
});
