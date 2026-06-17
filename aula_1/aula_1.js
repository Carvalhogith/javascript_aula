// console.log("Olá mundo!");

function somar() {
  const n1 = Number(prompt("Digite o primeiro numero"));
  const n2 = Number(prompt("Digite o segundo numero"));
  const resultado = n1 + n2;
  alert(`O Resultado da soma é ${resultado}`);
}

function multiplicar() {
  const n1 = Number(prompt("Digite o primeiro numero"));
  const n2 = Number(prompt("Digite o segundo numero"));
  const resultado = n1 * n2;
  alert(`O Resultado da multiplicação é ${resultado}`);
}

function somarInputs() {
  const n1 = Number(document.querySelector("#n1_soma").value);
  const n2 = Number(document.querySelector("#n2_soma").value);
  const resultado = n1 + n2;
  document.querySelector("#resultado_soma").textContent =`O resultado da soma é ${resultado}`;
}
//  somar();
// multiplicar();
