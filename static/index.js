// document.addEventListener("DOMContentLoaded", function () {
//     function createSparkle() {
//         const sparkle = document.createElement("div");
//         sparkle.classList.add("sparkle");
        
//         const emojis = ["✨", "🎉", "🎇", "🎆", "🔥", "🌟"];
//         sparkle.innerHTML = emojis[Math.floor(Math.random() * emojis.length)];

//         // Random Positioning
//         sparkle.style.left = Math.random() * window.innerWidth + "px";
//         sparkle.style.top = Math.random() * window.innerHeight + "px";
        
//         document.querySelector(".fireworks-container").appendChild(sparkle);

//         // Remove after animation
//         setTimeout(() => {
//             sparkle.remove();
//         }, 4000);
//     }

//     setInterval(createSparkle, 15);
// });

document.addEventListener("DOMContentLoaded", function () {
    function createColorSplash() {
        const splash = document.createElement("div");
        splash.classList.add("color-splash");

        // Random Colors (Holi Festival Vibes)
        const colors = ["#FF5733", "#FFC300", "#DAF7A6", "#C70039", "#900C3F", "#581845", "#00FF00", "#0000FF"];
        splash.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];

        // Random Position
        splash.style.left = Math.random() * window.innerWidth + "px";
        splash.style.top = Math.random() * window.innerHeight + "px";

        document.querySelector(".fireworks-container").appendChild(splash);

        // Remove after animation
        setTimeout(() => {
            splash.remove();
        }, 3000);
    }

    // Increase frequency of color splashes (15-16 per second)
    setInterval(createColorSplash, 60);
});

