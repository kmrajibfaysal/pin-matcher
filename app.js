// generate Btn event handler
const generateBtn = document.querySelector('.generate-btn');

generateBtn.addEventListener('click', () => {
  const pin = Math.floor(1000 + Math.random() * 9000);
  document.querySelector('#display-pin').value = pin;
});

document.querySelector('#key-pad').addEventListener('click', (event) => {
  const number = event.target.innerText;
  const calcInput = document.querySelector('#typed-numbers');

  if (isNaN(number)) {
    if (number === 'C') {
      calcInput.value = '';
    }
  } else {
    const previousNumber = calcInput.value;
    const newNumber = previousNumber + number;
    calcInput.value = newNumber;
  }
});

const submitBtn = document.querySelector('#submit-btn');
const displayPin = document.querySelector('#display-pin');
const typedNumbers = document.querySelector('#typed-numbers');

submitBtn.addEventListener('click', (event) => {
  if (displayPin.value === typedNumbers.value) {
    document.querySelector('#matched').classList.toggle('d-none');
  } else {
    document.querySelector('#not-matched').classList.toggle('d-none');
    const tryLeft = document.querySelector('#try-left');
    if (parseInt(tryLeft.innerText) > 0) {
      tryLeft.innerText = parseInt(tryLeft.innerText) - 1;
    } else {
      alert('Please try again Later!');
    }
  }
});
