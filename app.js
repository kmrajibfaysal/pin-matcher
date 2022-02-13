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
