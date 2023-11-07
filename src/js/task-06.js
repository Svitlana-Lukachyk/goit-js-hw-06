const input = document.querySelector('#validation-input');
const dataLength = Number(input.dataset.length);

input.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
if (dataLength === event.currentTarget.value.trim().length) {

    input.setAttribute('class', 'valid')
} else  {
    input.setAttribute('class','invalid');
}
}