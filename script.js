// Create floating hearts background
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animation = `float ${Math.random() * 3 + 2}s linear`;
    document.querySelector('.hearts').appendChild(heart);

    heart.addEventListener('animationend', () => heart.remove());
}

// Start creating hearts
setInterval(createHeart, 300);

// Make the "No" button run away
const noBtn = document.getElementById('noBtn');
noBtn.addEventListener('mouseover', () => {
    const x = Math.random() * (window.innerWidth - noBtn.offsetWidth);
    const y = Math.random() * (window.innerHeight - noBtn.offsetHeight);
    noBtn.style.position = 'absolute';
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
});

// Handle "Yes" button click
const yesBtn = document.querySelector('.btn-yes');
const modal = document.querySelector('.modal');
yesBtn.addEventListener('click', () => {
    modal.style.display = 'flex';
    // Create a heart burst effect
    for (let i = 0; i < 20; i++) {
        setTimeout(createHeart, i * 50);
    }
});

// Close modal when clicking outside
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});