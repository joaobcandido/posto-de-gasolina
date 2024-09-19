document.getElementById("formulario").addEventListener("submit", function (e) {
    e.preventDefault();

    let tipoCombustivel = document.getElementById("tipo__conbustivel").value.toLowerCase();
    let litros = document.getElementById("litros").value;
    let precoGasolina = document.getElementById("preco__gasolina").value;
    let precoAlcool = document.getElementById("preco__alcool").value;
    let precoDiesel = document.getElementById("preco__diesel").value;

    let totalGasolina = (litros * precoGasolina).toFixed(2);
    let totalAlcool = (litros * precoAlcool).toFixed(2);
    let totalDiesel = (litros * precoDiesel).toFixed(2);


    let resultado = document.getElementById("resultado");

    
    if (tipoCombustivel === "gasolina"){
        resultado.textContent = `Você abasteceu com ${litros} litros de gasolina, o valor a pagar é : ${totalGasolina}`;
    } else if (tipoCombustivel === "alcool"){
        resultado.textContent = `Você abasteceu com ${litros} litros de alcool, o valor a pagar é : ${totalAlcool}`;
    } else if (tipoCombustivel === "diesel"){
        resultado.textContent = `Você abasteceu com ${litros} litros de diesel, o valor a pagar é : ${totalDiesel}`;   
    } else {
        resultado.textContent = "voçê escolheu um combustivel que não esta disponivel"
    }
});