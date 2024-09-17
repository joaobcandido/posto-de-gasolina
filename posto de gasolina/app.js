document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();


    let litros = document.getElementById("litros").value;
    let precoGasolina = document.getElementById("preco").value;
    let totalAPagar = (litros * precoGasolina).toFixed(2);


    let resultado = document.getElementById("resultado");

    
    resultado.textContent = `Você abasteceu com ${litros} litros o valor a pagar é :${totalAPagar}  `;
});