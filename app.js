// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigosJS = [];
let listaAmigosHTML = document.getElementById("listaAmigos");
let resultado = document.getElementById("resultado");

function agregarAmigo() { // Tomar texto del html y agregarlo a la lista
    let amigo = document.getElementById("amigo");
    verificadorDeNombre(amigo.value);
    amigo.value = "";
}



function actualizarLista(persona) { // Se modifica para cumplir la consigna de usar ciclo + innerHTML
    listaAmigosHTML.innerHTML = "";
    listaAmigosJS.forEach(item => {
        const li = document.createElement("li"); // Crear un elemento <li>
        li.textContent = item; // Agregar el texto del elemento
        listaAmigosHTML.appendChild(li); // Insertar el <li> en el <ul>
    });
     
}

function verificadorDeNombre(persona) { // Verificar que el campo no sea vacio
    if (persona != '') {
        listaAmigosJS.push(persona);
        actualizarLista(persona);
    } else {
        alert("El nombre ingresado no es correcto");
    }
}

function sortearAmigo() { // Solicita al ganador y lo muestra si es que hay una lista de amigos
    if (listaAmigosJS.length !== 0) {
        let numeroGanador = generadorDeNumero();
        resultado.innerHTML = `El ganador es: ${listaAmigosJS[numeroGanador]}`;
    } else {
        alert("No hay amigos para sortear");
    }
    
    
}

function generadorDeNumero() { // Genera al ganador
    let numeroMaximo = listaAmigosJS.length;
    return Math.floor(Math.random() * numeroMaximo); 
}