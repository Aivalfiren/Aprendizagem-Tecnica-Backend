// faça um programa que conta quantas letras "a" existem numa determinada palavra.
// IMprima o resultado na tela.

const palavra = 'Flavia'
let contador = 0

for (let letra of palavra){
    if (letra === 'a'){
        contador += 1
    }
} console.log(contador)