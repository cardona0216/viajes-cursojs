import { barcelona, paris, roma, londres } from "./ciudades.js"; 

//obtener los elementos del DOM
//pero que es el dom
/**
 * DOM(document objet model) es un representacion estructurada de un documneto html
 * la interaccion con esto nos va a permitir hacer una modificacion de estructura,contenido o estilo
 * en la pagina web de forma dimanica el dom se organiza como un arbol de nodos y cada nodo es un elemento
 * este elemento es un objeto en js que tiene sus propiedades y sus metodos con las cuales podremos interactuar 
 * con el y modificar la palicacion de forma que se vea mucho mas dinamica, la buena utikizacin del dom nos
 * va apermitir hacer paginas super dinamicas y super atractivas
 */

//Obtener los elementos del DOM

const enlaces = document.querySelectorAll('a');
let tituloElemento = document.getElementById('titulo');
let subtituloElemento = document.getElementById('subtitulo');
let parrafoElememto = document.getElementById('parrafo');
let precioElemento = document.getElementById('precio');



// agregamos un evento click a cada enlace

enlaces.forEach(function (enlace) {
    enlace.addEventListener('click', function(){
        //remover activo
        enlaces.forEach(function(enlace) {
            enlace.classList.remove('active')
        })
        
    //agregar la clase ' active' al enlace actual
    this.classList.add('active')

    //obtener el contenido correspondiente segun el enlace
    let contenido = obtenerContenido(this.textContent)
   
    //traer la informacion del objeto correspondiente a la eleccion

    //mostrar contenido en el DOM

    tituloElemento.innerHTML = contenido.titulo;
    subtituloElemento.innerHTML = contenido.subtitulo;
    parrafoElememto.innerHTML = contenido.parrafo;
    precioElemento.innerHTML = contenido.precio;
    });

});


function obtenerContenido(enlace) {
    let contendio = {
        'Barcelona': barcelona,
        'Roma': roma,
        'París': paris,
        'Londres': londres,
    };
    return contendio[enlace]
}



