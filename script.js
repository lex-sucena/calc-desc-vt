// Feature #1 - Calculadora de desconto do vale transporte
const actBtn = document.querySelector("#actBtn");
let salario = document.querySelector("#salario").value;
const vtDia = document.querySelector("#vtDia").value;
const diasMes = 22;
const vtMes = vtDia * diasMes;
let valorDescontado;

function calcMaxDesc() {
  const descMax = salario * 0.06;
  if (descMax < vtMes) {
    valorDescontado = descMax;
  } else {
    valorDescontado = vtMes;
  }
  alert(valorDescontado);
}
actBtn.addEventListener("click", calcMaxDesc);
