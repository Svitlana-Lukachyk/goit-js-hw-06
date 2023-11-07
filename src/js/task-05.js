const textInput = document.querySelector('input#name-input');
const textOutput = document.querySelector('span#name-output');

textInput.addEventListener('input', onTextInputEvent);

function onTextInputEvent(event) {
    textOutput.textContent = event.currentTarget.value;
};

// Варіант 2
// function onTextInputEvent() {
//     textOutput.textContent = textInput.value;
// };

// Варіант 3
// textInput.addEventListener('input', (event) => {
//   textOutput.textContent = event.currentTarget.value;
// });
