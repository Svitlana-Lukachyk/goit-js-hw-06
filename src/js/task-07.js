const fontSize = document.querySelector
('#font-size-control');

const inputText = document.querySelector('#text');

fontSize.addEventListener('input', onFontSizeInput);

function onFontSizeInput(event) {
    text.style.fontSize = `${event.currentTarget.value}px`;
};