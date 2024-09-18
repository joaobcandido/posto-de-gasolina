document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();

    let tipoCombustivel = document.getElementById("tipo__conbustivel").value;
    let litros = document.getElementById("litros").value;
    let precoGasolina = document.getElementById("preco__gasolina").value;
    let precoAlcool = document.getElementById("preco__alcool").value;

    let totalGasolina = (litros * precoGasolina).toFixed(2);
    let totalAlcool = (litros * precoAlcool).toFixed(2);


    let resultado = document.getElementById("resultado");

    
    if (tipoCombustivel === "gasolina"){
        resultado.textContent = `Você abasteceu com ${litros} litros de gasolina, o valor a pagar é : ${totalGasolina}`;
        resultado.style.color = "green"
    } else{
        resultado.textContent = `Você abasteceu com ${litros} litros de alcool, o valor a pagar é : ${totalAlcool}`;
        resultado.style.color = "green"
    }
});