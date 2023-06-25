const btnStart = document.querySelector('button[data-start]');
const btnStop = document.querySelector('button[data-stop]');
const bodyEl = document.querySelector('body');
let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

btnStart.addEventListener('click', () => {
  timerId = setInterval(() => {
    bodyEl.style.backgroundColor = getRandomHexColor();
    btnStart.setAttribute('disabled', false);
  }, 500);
});

btnStop.addEventListener(
  'click',
  () => {
    clearInterval(timerId);
    btnStart.setAttribute('disabled', true);
    btnStart.removeAttribute('disabled');
  },
  500
);
