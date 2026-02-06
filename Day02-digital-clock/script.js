// script.js

// --- Clock Logic ---
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // 12-hour format

    const h = hours < 10 ? "0" + hours : hours;
    const m = minutes < 10 ? "0" + minutes : minutes;
    const s = seconds < 10 ? "0" + seconds : seconds;

    document.getElementById("clock").textContent = `${h}:${m}:${s} ${ampm}`;

    const options = { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' };
    document.getElementById("date").textContent = now.toLocaleDateString(undefined, options);
}

setInterval(updateClock, 1000);
updateClock();

// --- Mouse Interaction for Background ---
document.addEventListener('mousemove', (e) => {
    const { innerWidth, innerHeight } = window;
    const xPercent = e.clientX / innerWidth * 100;
    const yPercent = e.clientY / innerHeight * 100;

    // Move the radial gradient based on mouse
    document.body.style.background = `radial-gradient(circle at ${xPercent}% ${yPercent}%, #1f1c2c, #928dab)`;

    // Optional: Slight clock container tilt
    const rotateX = (yPercent - 50) / 5;
    const rotateY = (xPercent - 50) / 5;
    document.querySelector('.clock-container').style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});
