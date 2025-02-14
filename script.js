document.getElementById('heart').addEventListener('click', function() {
    this.classList.add('separate-heart');

    setTimeout(() => {
        document.body.classList.add('neon-bg');
        document.getElementById('message').classList.add('reveal-text');
        document.getElementById('love-letter').style.display = 'block';
    }, 1000);
});

function closeLetter() {
    document.getElementById('love-letter').style.display = 'none';
}

