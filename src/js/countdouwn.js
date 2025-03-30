
let targetDate = localStorage.getItem("targetDate");

if (!targetDate) {
    targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 367);
    localStorage.setItem("targetDate", targetDate); 
} else {
    targetDate = new Date(targetDate); 
}

const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

function updateCountdown() {
    const currentDate = new Date();
    const totalSeconds = (targetDate - currentDate) / 1000;
    if (totalSeconds <= 0) {
        clearInterval(countdown);
        document.querySelector('.countdown-box').innerHTML = `
            <div class="text-center py-8">
                <h2 class="text-3xl font-bold text-pink-600 mb-4">The Event Has Started!</h2>
                <p class="text-gray-600">Thank you for waiting. Enjoy the event!</p>
            </div>
        `;
        return;
    }
    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
}

function formatTime(time) {
    return time < 10 ? `0${time}` : time;
}

updateCountdown();
const countdown = setInterval(updateCountdown, 1000);