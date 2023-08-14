// Get elements by their IDs
const dateElement = document.getElementById('date');
const dayElement = document.getElementById('day');
const hoursElement = document.getElementById('hours');
const minutesElement = document.getElementById('minutes');
const secondsElement = document.getElementById('seconds');
const sessionElement = document.getElementById('session');
const toggleBtn = document.getElementById('toggle-btn');

let is24HourFormat = false;

// Function to update the time display
function updateTime() {
  const now = new Date();

  const dateOptions = { year: 'numeric', month: 'long', day: 'numeric' };
  const timeOptions24 = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
  const timeOptions12 = { hour: 'numeric', minute: '2-digit', second: '2-digit', hour12: true };

  dateElement.textContent = now.toLocaleDateString(undefined, dateOptions);

  if (is24HourFormat) {
    hoursElement.textContent = now.toLocaleTimeString(undefined, timeOptions24).split(':')[0];
    sessionElement.textContent = '';
  } else {
    hoursElement.textContent = now.toLocaleTimeString(undefined, timeOptions12).split(':')[0];
    sessionElement.textContent = now.getHours() >= 12 ? 'PM' : 'AM';
  }

  dayElement.textContent = now.toLocaleDateString(undefined, { weekday: 'long' }).toUpperCase();
  minutesElement.textContent = now.toLocaleTimeString(undefined, is24HourFormat ? timeOptions24 : timeOptions12).split(':')[1];
  secondsElement.textContent = now.toLocaleTimeString(undefined, { second: '2-digit' });
}

// Toggle time format
toggleBtn.addEventListener('click', function () {
  is24HourFormat = !is24HourFormat;
  updateTime();
});

// Initial call to set up the time display
updateTime();

// Update time every second
setInterval(updateTime, 1000);