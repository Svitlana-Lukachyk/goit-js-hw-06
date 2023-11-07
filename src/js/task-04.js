const decrementBtn = document.querySelector('#counter [data-action="decrement"]');
const incrementBtn = document.querySelector('#counter [data-action="increment"]');

const counterValue = document.querySelector('#value');
let counterValueEl = 0;

decrementBtn.addEventListener('click', onDecrementBtnClick);

incrementBtn.addEventListener('click', onIncrementBtnClick);

function onDecrementBtnClick() {
    counterValueEl -= 1;
    counterValue.textContent = Number(counterValueEl);
};

function onIncrementBtnClick() {
    counterValueEl += 1;
    counterValue.textContent = Number(counterValueEl);
};

// Варіант 2

// decrementBtn.addEventListener("click", () => {
//     counterValueEl -= 1;
//     counterValue.textContent = Number(counterValueEl);
// });

// incrementBtn.addEventListener("click", () => {
//     counterValueEl += 1;
//     counterValue.textContent = Number(counterValueEl);
// });


