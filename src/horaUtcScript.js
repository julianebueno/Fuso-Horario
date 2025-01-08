let date = new Date();

const utcBotoes = document.getElementById("utcBotoes");
for (let i = 1; i <= 12; i++) {
  utcBotoes.innerHTML += `<button id="btn+${i}" class="utcBtns"> UTC+${i}</button>`;
  utcBotoes.innerHTML += `<button id="btn-${i}" class="utcBtns"> UTC-${i}</button>`;
}

let timeZoneUtc = `-0`;
let utcBtns = document.querySelectorAll(".utcBtns");

utcBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    let num = btn.id.slice(3);
    timeZoneUtc = `${num.startsWith("+") ? "-" : "+"}${num.slice(1)}`;
  });
});

const utcHorariosGMT = document.getElementById("utcHorariosGMT");
const utcHorariosLocal = document.getElementById("utcHorariosLocal");
const utcHorariosUTC = document.getElementById("utcHorariosUTC");
const utcHorariosLocalUTC = document.getElementById("utcHorariosLocalUTC");

setInterval(() => {
  date = new Date();
  utcHorariosGMT.innerHTML = ` <p>${date.toUTCString().slice(4, 25)}</p> `;
  utcHorariosLocal.innerHTML = ` <p>${date.toLocaleString("pt-br")}</p> `;
  utcHorariosUTC.innerHTML = ` 
    <p> Horário UTC ${ timeZoneUtc.startsWith("+")?"-":"+" }${ timeZoneUtc.slice(1) }:</p> 
  `;
  utcHorariosLocalUTC.innerHTML = ` 
    <p>${date.toLocaleString("pt-br", { timeZone: `Etc/GMT${timeZoneUtc}`, })}</p> 
  `;
}, 500);

