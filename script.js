const selectQuantidade = document
 .getElementById('quantidade');
for (let i = 6; i <= 15; i++) {
 const option = document.createElement(
  'option');
 option.value = i;
 option.textContent = i;
 selectQuantidade.appendChild(option);
}

function gerarNumeros() {
 const quantidade = parseInt(
  selectQuantidade.value
 );
 const numerosContainer = document
  .getElementById('numeros');
 numerosContainer.innerHTML =
  '';

 const numerosGerados = new Set();
 while (numerosGerados.size <
  quantidade) {
  const numero = Math.floor(Math
    .random() * 60) +
   1;
  numerosGerados.add(numero);
 }

 Array.from(numerosGerados).sort((a,
  b) => a - b).forEach(numero => {
  const numeroDiv = document
   .createElement('div');
  numeroDiv.className = 'numero';
  numeroDiv.textContent = numero;
  numerosContainer.appendChild(
   numeroDiv);
 });
}

document.getElementById('gerar-btn')
 .addEventListener('click',
  gerarNumeros);
