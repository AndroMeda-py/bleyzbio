
let counter = 0;
const counterDisplay = document.getElementById('counter');
const clickBtn = document.getElementById('click-btn');

clickBtn.addEventListener('click', () => {
  counter++;
  counterDisplay.textContent = counter;
});
