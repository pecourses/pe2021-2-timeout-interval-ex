'use strict';

const btn = document.querySelector('button');
const span = document.querySelector('span');

btn.onclick = () => {
  alert('Hi');
};

for (let i = 0; i < 1000000; i++) {
  if (i % 100) {
    setTimeout(() => {
      span.textContent = `${i}`;
    }, 0);
  }
}

load(() => {
  load(() => {
    load(() => {
      load(() => {});
    });
  });
});

load()
  .then(() => {})
  .then(() => {})
  .then(() => {})
  .then(() => {});
