var intervalo = 2000

function slide1(){
    document.getElementById("slide").src="./img/imagem1.jpg"
    setTimeout("slide2()", intervalo)
}

function slide2(){
    document.getElementById("slide").src="./img/imagem2.jpg"

    setTimeout("slide1()", intervalo)
 }
