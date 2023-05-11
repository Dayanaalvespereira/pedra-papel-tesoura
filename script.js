const imagem1 = document.getElementById("imagem1")
const imagem2 = document.getElementById("imagem2")
const btn = document.getElementById("btn")
const resultado = document.getElementById("resultado")

let jogador1 = ""
let jogador2 = ""



window.addEventListener('keydown', function (event) {
    imagem1.style.visibility = "hidden";
    imagem2.style.visibility = "hidden";

    if (event.key == "p") {
        imagem1.innerHTML = '<img src="assets/pedra.png">'
        jogador1 = "pedra"
    }
    if (event.key == "t") {
        imagem1.innerHTML = '<img src="assets/tesoura.png">'
        jogador1 = "tesoura"
    }
    if (event.key == "l") {
        imagem1.innerHTML = '<img src="assets/papel.png">'
        jogador1 = "papel"
    }
    if (event.key == "1") {
        imagem2.innerHTML = '<img src="assets/pedra.png">'
        jogador2 = "pedra"
    }
    if (event.key == "2") {
        imagem2.innerHTML = '<img src="assets/tesoura.png">'
        jogador2 = "tesoura"
    }
    if (event.key == "3") {
        imagem2.innerHTML = '<img src="assets/papel.png">'
        jogador2 = "papel"
    }
})

btn.addEventListener("click", function (event) {
    event.preventDefault()

    imagem1.style.visibility = "visible"
    imagem2.style.visibility = "visible"

    if ((jogador1 == "papel" && jogador2 == "papel") ||
        (jogador1 == "tesoura" && jogador2 == "tesoura") ||
        (jogador1 == "pedra" && jogador2 == "pedra")) {
        resultado.innerHTML = "EMPATE"
    }
    else if ((jogador1 == "papel" && jogador2 == "pedra") ||
        (jogador1 == "tesoura" && jogador2 == "papel") ||
        (jogador1 == "pedra" && jogador2 == "tesoura")) {
        resultado.innerHTML = "JOGADOR 1 VENCEU"
    }
    else if ((jogador1 = "pedra" && jogador2 == "papel") ||
        (jogador1 = "tesoura" && jogador2 == "pedra") ||
        (jogador1 = "papel" && jogador2 == "tesoura")){

        resultado.innerHTML = "JOGADOR 2 VENCEU"
    }
})