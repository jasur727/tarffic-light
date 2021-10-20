const elWrapper = document.querySelector('.wrappper');
const elRed = document.querySelector('.red');
const elYellow = document.querySelector('.yellow');
const elGreen = document.querySelector('.green');
const elInnerImg = document.querySelector('.inner__img');

function startTarfficLight() {

  //RED

  setTimeout(() => {
    elRed.style.backgroundColor = 'red';
  }, 100);

  setTimeout(() => {
    elRed.style.backgroundColor = 'white';
  }, 4000);

  setTimeout(() => {
    elRed.style.backgroundColor = 'red';
  }, 4500);

  setTimeout(() => {
    elRed.style.backgroundColor = 'white';
  }, 5000);

  setTimeout(() => {
    elRed.style.backgroundColor = 'red';
  }, 5500);

  setTimeout(() => {
    elRed.style.backgroundColor = 'white';
  }, 6000);

  // YELLOW

  setTimeout(() => {
    elYellow.style.backgroundColor = 'yellow';
  }, 6500);

  setTimeout(() => {
    elYellow.style.backgroundColor = 'white';
  }, 10500);

  setTimeout(() => {
    elYellow.style.backgroundColor = 'yellow';
  }, 11000);

  setTimeout(() => {
    elYellow.style.backgroundColor = 'white';
  }, 11500);

  setTimeout(() => {
    elYellow.style.backgroundColor = 'yellow';
  }, 12000);

  setTimeout(() => {
    elYellow.style.backgroundColor = 'white';
  }, 12500);

  // GREEN

  setTimeout(() => {
    elGreen.style.backgroundColor = 'green';
  }, 13000);

  setTimeout(() => {
    elGreen.style.backgroundColor = 'white';
  }, 17000);

  setTimeout(() => {
    elGreen.style.backgroundColor = 'green';
  }, 17500);

  setTimeout(() => {
    elGreen.style.backgroundColor = 'white';
  }, 18000);

  setTimeout(() => {
    elGreen.style.backgroundColor = 'green';
  }, 18500);

  setTimeout(() => {
    elGreen.style.backgroundColor = 'white';
  }, 19000);
}

startTarfficLight();

setInterval(() => {
  startTarfficLight();
}, 19000);

elStopBtn.addEventListener('click', () => {
	clearTimeout(startTarfficLight());
});