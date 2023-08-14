import { barcelona,roma,paris,londres } from './ciudades.js'

//obtenemos los elementos del DOM

let enlaces = document.querySelectorAll('a')
let tituloElemento = document.getElementById('titulo')
let subTituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')


//agregar evento click

enlaces.forEach( function(enlace){
    console.log(enlaces)
    enlace.addEventListener('click',function(){
        //Removemos el activo
        enlaces.forEach(function(enlace){
            enlace.classList.remove('active')
        });
 

    //agregar Active al que corresponda
    this.classList.add('active')


    //obtener el contenido correspondiente segun el enlace
    let contenido = obtenerContenido(this.textContent)


    //mostrar el contenido en el DOM
    tituloElemento.innerHTML = contenido.titulo
    subTituloElemento.innerHTML = contenido.subtitulo
    parrafoElemento.innerHTML = contenido.parrafo

});
});

//funcion para traer la información correcta desde ciudades.js
function obtenerContenido(enlace){
    let contenido ={
        'Barcelona' : barcelona,
        'Roma' : roma,
        'París' : paris,
        'Londres' : londres
    };
    return contenido[enlace];
}


