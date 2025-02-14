document.addEventListener("DOMContentLoaded", function () {
    const heart = document.getElementById("heart");
    const message = document.getElementById("message");
    const body = document.body;

    heart.addEventListener("click", function () {
        // Add split animation class
        heart.classList.add("split-heart");

        // Wait for the split animation to finish
        setTimeout(() => {
            heart.style.display = "none"; // Hide the heart
            body.classList.add("neon-bg"); // Change background
            message.classList.add("reveal-text"); // Show message
        }, 1000); // Adjust timing to match CSS animation duration
    });
});
