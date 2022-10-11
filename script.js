
function somar(){
    num1 = Number(document.getElementById("num1").value)
    num2 = Number(document.getElementById("num2").value)
    soma = num1 + num2
    document.getElementById("res").value = soma
}

function subtrair(){
    num1 = Number(document.getElementById("num1").value)
    num2 = Number(document.getElementById("num2").value)
    sub = num1 - num2
    document.getElementById("res").value = sub
}

function multiplicar(){
    num1 = Number(document.getElementById("num1").value)
    num2 = Number(document.getElementById("num2").value)
    mult = num1 * num2
    document.getElementById("res").value = mult
}

function dividir(){
    num1 = Number(document.getElementById("num1").value)
    num2 = Number(document.getElementById("num2").value)
    div = num1 / num2
    document.getElementById("res").value = div
}
