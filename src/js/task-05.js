const textInput = document.querySelector('input#name-input');
const textOutput = document.querySelector('span#name-output');

textInput.addEventListener('input', onTextInputEvent);
// let textOutput.textContent = 'Anonymous';

function onTextInputEvent(event) {

    if (event.currentTarget.value.trim() !== '') {
        textOutput.textContent = event.currentTarget.value.trim();
    } else {
        textOutput.textContent = 'Anonymous';
    }
    };