const xhr = new XMLHttpRequest();
const animation = document.getElementById('loader');
const items = document.getElementById('items');

function addValute(item) {
  let newItem = document.createElement('div');
  newItem.className = 'item';
  let newCode = document.createElement('div');
  newCode.textContent = item['CharCode'];
  newCode.className = 'item__code';
  let newValue = document.createElement('div');
  newValue.textContent = item['Value'];
  newValue.className = 'item__value';
  let newCurrency = document.createElement('div');
  newCurrency.textContent = 'руб.';
  newCurrency.className = 'item__currency';
  items.appendChild(newItem);
  newItem.appendChild(newCode);
  newItem.appendChild(newValue);
  newItem.appendChild(newCurrency);
}

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === xhr.DONE) {
    animation.className = 'loader';
  	let allInformation = xhr['response'];
    let objectСurrencies = allInformation['Valute'];
    let arrayСurrencies = Object.values(objectСurrencies);
    arrayСurrencies.forEach(item => addValute(item));
  } else {
      animation.className = 'loader loader_active';
    }
});

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');

xhr.send();

