// Function to update the clock every second
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    // Add leading zeros to hours, minutes, and seconds if needed
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    const currentTime = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent = currentTime;
}

// Update the clock every 1 second
setInterval(updateClock, 1000);

// Initial call to display clock immediately
updateClock();
