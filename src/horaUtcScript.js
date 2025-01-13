function atualizarHoras() {
  date = new Date().toLocaleString("pt-br", { timeZone: `Etc/GMT${timeZoneUtc}`, });
  relogio.innerHTML = `
    <div class="containerRelogio">
      <div class="horas">
        <p class="texto">${date.slice(12,14)}</p>      
        <span class="texto">HORAS</span>
      </div>
      <div class="minutos">
        <p class="texto">${date.slice(15,17)}</p>
        <span class="texto">MINUTOS</span>
      </div>
      <div class="segundos">
        <p class="texto">${date.slice(18,20)}</p>
        <span class="texto">SEGUNDOS</span>
      </div>
    </div>
    <p class="texto pDataTimezone">${date.slice(0,10)}</p>
    <p class="texto pDataTimezone">${utcSelecionada}</p>
  `;
}

const relogio = document.getElementById("relogio");
const utcOpcoes = document.getElementById("utcOpcoes");

for (let i = -12; i < 0; i++) {
  utcOpcoes.innerHTML += `<option value="${i}">${i}</option>`;
}
utcOpcoes.innerHTML += `<option value="+0" selected>0</option>`;
for (let i = 1; i <= 12; i++) {
  utcOpcoes.innerHTML += `<option value="+${i}">+${i}</option>`;
}

let date = new Date();
let utcSelecionada = utcOpcoes.value;
let timeZoneUtc = `${utcSelecionada.startsWith("+") ? "-" : "+"}${utcSelecionada.slice(1)}`;

utcOpcoes.addEventListener("change", () => {
  utcSelecionada = utcOpcoes.value;
  timeZoneUtc = `${utcSelecionada.startsWith("+") ? "-" : "+"}${utcSelecionada.slice(1)}`;
});

atualizarHoras();

setInterval(() => {
  atualizarHoras();
}, 1000);
