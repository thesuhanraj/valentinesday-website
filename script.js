function showWish() {
    document.getElementById("heart").src = "pink-heart2.png";
    let wishText = document.getElementById("wish-text");
    wishText.classList.remove("hidden");
    
    startFireworks();
}

// Fireworks effect
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function startFireworks() {
    let particles = [];
    for (let i = 0; i < 50; i++) {
        particles.push({
            x: window.innerWidth / 2,
            y: window.innerHeight / 2,
            radius: Math.random() * 3 + 1,
            color: `hsl(${Math.random() * 360}, 100%, 70%)`,
            speedX: (Math.random() - 0.5) * 5,
            speedY: (Math.random() - 0.5) * 5
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        particles.forEach(p => {
            p.x += p.speedX;
            p.y += p.speedY;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            ctx.fillStyle = p.color;
            ctx.fill();
        });

        requestAnimationFrame(animate);
    }
    animate();
}
