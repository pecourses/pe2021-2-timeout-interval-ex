'use strict';

// setTimeout(()=>{}, ms [, параметры]) - 1 раз
// setInterval(()=>{}, ms [, параметры]) - повторяется циклично

const timeoutId = setTimeout(() => {
  console.log('Hi!!');
}, 2000);

console.log('End :>> ');

const intervalId = setInterval(() => {
  console.log('interval');
}, 1000);

// clearTimeout(id)
// clearInterval(id)

clearTimeout(timeoutId);
clearInterval(intervalId);

// Прописать setInterval, который с период-ю в 0,5с
// выводит значение счетчика: 1, 2, 3, 4, 5,...

let i = 0;
const id = setInterval(() => {
  console.log(i++);
}, 500);
clearInterval(id);

// Прописать в html кнопку
// При нажатии на кнопку подсвечивать ее красным цветом
// и через 1с удалять
// const button = document.querySelector('button');

// button.onclick = e => {
//   e.target.style.backgroundColor = 'red';
//   setInterval(() => {
//     e.target.remove();
//   }, 1000);
// };

//----- Timer -----------------------------------------

const timeEl = document.querySelector('.time');

const [startBtn, stopBtn, resetBtn] = document.querySelectorAll('button');

let time = new Date(0);
const DELAY = 100;
let timerId;

updateTime(time);

startBtn.addEventListener('click', startBtnHandler);
stopBtn.addEventListener('click', stopBtnHandler);
resetBtn.addEventListener('click', resetBtnHandler);

function startBtnHandler() {
  if (timerId) {
    return;
  }
  timerId = setInterval(() => {
    time.setMilliseconds(time.getMilliseconds() + DELAY);
    updateTime(time);
  }, DELAY);
}

function stopBtnHandler() {
  clearInterval(timerId);
  timerId = null;
}

function resetBtnHandler() {
  time = new Date(0);
  updateTime(time);
}

function updateTime(t) {
  timeEl.textContent = `
  ${formatTime(t.getMinutes())}:${formatTime(t.getSeconds())}.${formatMs(
    t.getMilliseconds()
  )}`;
}

function formatTime(t) {
  return t < 10 ? `0${t}` : `${t}`;
}

// 5=>005, 20=>020, 222=>222
function formatMs(t) {
  if (t.toString().length === 1) return `00${t}`;
  if (t.toString().length === 2) return `0${t}`;
  if (t.toString().length === 3) return `${t}`;
}

//-----------------------------------
function second() {
  console.log('Hi :>> ');
}

function first() {
  second();
}

debugger;
first();

setTimeout(() => {
  console.log('Hi :>> ');
}, 1000);

load('http://152.125.126.121:3000', () => {
  render();
});

console.log('end :>> ');
