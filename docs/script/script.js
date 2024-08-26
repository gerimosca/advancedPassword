const passwordElement = document.getElementById('password');
const passwordLengthElement = document.getElementById('passwordlenght');
const rangeLengthElement = document.getElementById('rangelength');
const uppercaseElement = document.getElementById('uppercase');
const lowercaseElement = document.getElementById('lowercase');
const numbersElement = document.getElementById('numbers');
const symbolsElement = document.getElementById('symbols');
const buttonElement = document.getElementById('button');

const uppercaseContainer = document.querySelector('.rectangle-container1');
const lowercaseContainer = document.querySelector('.rectangle-container2');
const numbersContainer = document.querySelector('.rectangle-container3');
const symbolsContainer = document.querySelector('.rectangle-container4');

const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!"·$%&/()=?¿Ç{_-:.;,';

let password = '';

// Cambiar el range al valor deseado
const changeRangeValue = (e) => {
  passwordLengthElement.textContent = e.target.value;
};

// Clickar boton y dejarlo seleccionado en verde escalado
const checkedScaled = (e) => {
  const isChecked = e.target.checked;

  if (e.target.id === 'uppercase') {
    if (isChecked) {
      uppercaseContainer.classList.add('scaled');
    } else {
      uppercaseContainer.classList.remove('scaled');
    }
  } else if (e.target.id === 'lowercase') {
    if (isChecked) {
      lowercaseContainer.classList.add('scaled');
    } else {
      lowercaseContainer.classList.remove('scaled');
    }
  } else if (e.target.id === 'numbers') {
    if (isChecked) {
      numbersContainer.classList.add('scaled');
    } else {
      numbersContainer.classList.remove('scaled');
    }
  } else if (e.target.id === 'symbols') {
    if (isChecked) {
      symbolsContainer.classList.add('scaled');
    } else {
      symbolsContainer.classList.remove('scaled');
    }
  }
};

const randomCharacter = (characters) => {
  const randomNumber = Math.floor(Math.random() * characters.length);
  return characters[randomNumber];
};

const passwordGenerated = () => {
  let charactersSet = '';

  if (uppercaseElement.checked) charactersSet += uppercase;
  if (lowercaseElement.checked) charactersSet += lowercase;
  if (numbersElement.checked) charactersSet += numbers;
  if (symbolsElement.checked) charactersSet += symbols;
  if (!uppercaseElement.checked && !lowercaseElement.checked && !numbersElement.checked && !symbolsElement.checked) {
    return (passwordElement.value = 'NO HAS INCLUIDO NINGUN TIPO DE CARACTER.');
  }

  const passwordLenght = parseInt(rangeLengthElement.value);
  let password = '';

  for (let i = 0; i < passwordLenght; i++) {
    password += randomCharacter(charactersSet);
  }

  passwordElement.value = password;
};

rangeLengthElement.addEventListener('input', changeRangeValue);
uppercaseElement.addEventListener('change', checkedScaled);
lowercaseElement.addEventListener('change', checkedScaled);
numbersElement.addEventListener('change', checkedScaled);
symbolsElement.addEventListener('change', checkedScaled);
buttonElement.addEventListener('click', passwordGenerated);
