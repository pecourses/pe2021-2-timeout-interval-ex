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

timeEl.textContent = `
${formatTime(time.getMinutes())}
:${formatTime(time.getSeconds())}
.${formatMs(time.getMilliseconds())}`;

function formatTime(t) {
  return t < 10 ? `0${t}` : `${t}`;
}

// 5=>005, 20=>020, 222=>222
function formatMs() {}
