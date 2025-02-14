document.addEventListener("DOMContentLoaded", function () {
    const heart = document.getElementById("heart");
    const messageBox = document.getElementById("love-letter");
    const closeButton = document.getElementById("closeBtn");

    heart.addEventListener("click", function () {
        this.classList.add("separate-heart");

        setTimeout(() => {
            document.body.classList.add("neon-bg");
            document.getElementById("message").classList.add("reveal-text");

            messageBox.style.display = "block";
            messageBox.style.position = "fixed";
            messageBox.style.bottom = "20px";
            messageBox.style.left = "20px";
        }, 1000);
    });

    closeButton.addEventListener("click", function () {
        messageBox.style.display = "none";
    });

    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
});

