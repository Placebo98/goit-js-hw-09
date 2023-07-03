// Описаний в документації
import flatpickr from 'flatpickr';
// Додатковий імпорт стилів
import 'flatpickr/dist/flatpickr.min.css';
// all modules
import Notiflix from 'notiflix';

const timerEl = document.querySelector('.timer');
const btnStartEl = document.querySelector('[data-start]');
const daysEl = timerEl.querySelector('[data-days]');
const hoursEl = timerEl.querySelector('[data-hours]');
const minutesEl = timerEl.querySelector('[data-minutes]');
const secondsEl = timerEl.querySelector('[data-seconds]');
const valueEl = timerEl.querySelectorAll('.value');
let selectedDate = null;

timerEl.setAttribute('style', 'display: flex; gap: 20px');
valueEl.forEach(
  el => ((el.style.display = 'flex'), (el.style.flexDirection = 'column'))
);

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    selectedDate = selectedDates[0];
    if (selectedDate < new Date()) {
      // window.alert('Please choose a date in the future');
      Notiflix.Notify.warning('Please choose a date in the future');
      btnStartEl.setAttribute('disabled', true);
    } else {
      btnStartEl.setAttribute('disabled', false);
      btnStartEl.removeAttribute('disabled');
    }
  },
};

function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}

function startCount() {
  const countInt = setInterval(() => {
    const currentTime = new Date().getTime();
    const differenceOfTime = selectedDate - currentTime;
    if (differenceOfTime <= 0) {
      clearInterval(countInt);

      return;
    }
    const { days, hours, minutes, seconds } = convertMs(differenceOfTime);
    daysEl.textContent = addLeadingZero(days);
    daysEl.textContent = addLeadingZero(days);
    hoursEl.textContent = addLeadingZero(hours);
    minutesEl.textContent = addLeadingZero(minutes);
    secondsEl.textContent = addLeadingZero(seconds);
  }, 500);
}

btnStartEl.addEventListener('click', startCount);
flatpickr('#datetime-picker', options);
