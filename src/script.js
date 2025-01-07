import aryIanaTimeZones from './database.js';
const fuso = document.getElementById('fuso');
const relogio = document.getElementById('relogio');

aryIanaTimeZones.forEach((timeZone) => {
  fuso.innerHTML += `<option value="${timeZone}">${timeZone}</option>`;
});

let timeZone = aryIanaTimeZones[0];
fuso.addEventListener('change', () => {
  timeZone = fuso.value;
});

setInterval(() => {
  let date = new Date;
  let strTime = date.toLocaleString("pt-br", {timeZone: `${timeZone}`});
  relogio.innerHTML = `
    <p>Horário Local: ${date.toLocaleString()}</p>
    <p>Horário no Fuso: ${strTime}</p>
  `;
}, 500);

