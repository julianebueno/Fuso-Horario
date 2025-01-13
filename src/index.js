const containerRelogio = document.querySelector('.containerRelogio');
const horas = document.querySelector('.horas');
const minutos = document.querySelector('.minutos');
const segundos = document.querySelector('.segundos');

function atualizarHoras() {
  let date = new Date();
  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();

  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  horas.innerHTML = `
    <p>${h}</p>
    <span>HORAS</span>
  `;
  minutos.innerHTML = `
    <p>${m}</p>
    <span>MINUTOS</span>
  `;
  segundos.innerHTML = `
    <p>${s}</p>
    <span>SEGUNDOS</span>
  `;
}

atualizarHoras();

setInterval(() => {
  atualizarHoras();
}
, 1000);
