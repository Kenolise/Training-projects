const converter = document.querySelector('#converter');
const result = document.querySelector('.result');
const convertBtn = document.querySelector('.conv');
const resetBtn = document.querySelector('.reset');
const swapBtn = document.querySelector('.change');
const one = document.querySelector('.one');
const two = document.querySelector('.two');

function swap() {
    if(one.innerText === '°C'){
        one.innerText = '°F';
        two.innerText = '°C';
        result.innerText = "";
    } else {
        one.innerText = '°C';
        two.innerText = '°F';
    }
};

swapBtn.addEventListener('click', swap);

function convertToF() {
    let fahrenheit = converter.value * 1.8 + 32;
    result.innerText = `${converter.value}°C is equal to ${fahrenheit.toFixed(1)}°F`;
    converter.value = "";
  }

  function convertToC() {
    let celsius = (converter.value - 32 ) / 1.8;
    result.innerText = `${converter.value}°F is equal to ${celsius.toFixed(1)}°C`;
    converter.value = "";
  }
  convertBtn.addEventListener('click', () => {
      if(one.innerText === '°C' && converter.value !== ""){
        convertToF();
      } else if (one.innerText === '°F' && converter.value !== ""){
          convertToC();
      } else {
          result.innerText = `Put a number!`;
      }
  });

  resetBtn.addEventListener('click', () => {
        converter.value = "";
        result.innerHTML = "";
    }
      );