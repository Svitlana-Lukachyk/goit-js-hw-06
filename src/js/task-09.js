function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const body = document.querySelector('body');
const btnColour = document.querySelector('.change-color');
const backgroundColor = document.querySelector('.color');

btnColour.addEventListener('click', onBtnColourClick);
function onBtnColourClick(event) {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = `${newColor}`;
  backgroundColor.textContent = `${newColor}`;
};