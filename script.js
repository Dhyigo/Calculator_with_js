
function somar(){
    const num1 = Number(document.getElementById("num1").value)
    const num2 = Number(document.getElementById("num2").value)
    const soma = num1 + num2
    MostraResultado(soma)
}

function subtrair(){
    const num1 = Number(document.getElementById("num1").value)
    const num2 = Number(document.getElementById("num2").value)
    const sub = num1 - num2
    MostraResultado(sub)
}

function multiplicar(){
    const num1 = Number(document.getElementById("num1").value)
    const num2 = Number(document.getElementById("num2").value)
    const mult = num1 * num2
    MostraResultado(mult)
}

function dividir(){
    const num1 = Number(document.getElementById("num1").value)
    const num2 = Number(document.getElementById("num2").value)
    const div = num1 / num2
    MostraResultado(div)
}

function MostraResultado(msg) {
    const res = document.getElementById("res")
    res.innerHTML = msg
}
