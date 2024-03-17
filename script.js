let foto1 = document.querySelector('.foto1')
let foto2 = document.querySelector('.foto2')
let foto3 = document.querySelector('.foto3')

let legenda1 = document.querySelector('.legenda1')
let legenda2 = document.querySelector('.legenda2')
let legenda3= document.querySelector('.legenda3')

let posicao = 1

    function trocafoto(){
        if(posicao === 1){
            foto1.style.opacity = 1
            foto2.style.opacity = 0
            foto3.style.opacity = 0
            posicao= 2
        }else if(posicao === 2){
            foto1.style.opacity = 0
            foto2.style.opacity = 1
            foto3.style.opacity = 0
            posicao= 3
        }
        else if(posicao === 3){
            foto1.style.opacity = 0
            foto2.style.opacity = 0
            foto3.style.opacity = 1
            posicao= 1
    }

    }

    function trocaLegenda(){
        if(posicao === 1){
            legenda1.style.opacity = 0
            legenda2.style.opacity = 0
            legenda3.style.opacity = 1
            posicao= 2
        }else if(posicao === 2){
            legenda1.style.opacity = 1
            legenda2.style.opacity = 0
            legenda3.style.opacity = 0
            posicao= 3
        }
        else if(posicao === 3){
            legenda1.style.opacity = 0
            legenda2.style.opacity = 1
            legenda3.style.opacity = 0
            posicao= 1
    }
}

    timerslider = setInterval(trocafoto, '3000')
    timerslider = setInterval(trocaLegenda, '3000')