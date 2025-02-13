document.addEventListener("DOMContentLoaded", function () {
    let heart = document.getElementById("heart");
    let body = document.body;
    let message = document.getElementById("message");

    heart.addEventListener("click", function () {
        heart.style.animation = "glitch 0.3s ease-in-out";
        setTimeout(() => {
            heart.style.display = "none";
            body.style.backgroundImage = "url('sunset-pixel.jpg')";
            body.style.backgroundSize = "cover";
            message.style.display = "block";
        }, 300);
    });
});
