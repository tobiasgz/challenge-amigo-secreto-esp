// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigosJS = [];
let listaAmigosHTML = document.getElementById("listaAmigos");

function agregarAmigo() { // Tomar texto del html y agregarlo a la lista
    let amigo = document.getElementById("amigo").value;
    verificadorDeNombre(amigo);
}



function actualizarLista(persona) {
    const li = document.createElement("li"); // Crear un elemento <li>
    li.textContent = persona; // Agregar el texto del elemento
    listaAmigosHTML.appendChild(li); // Insertar el <li> en el <ul>
     
}

function verificadorDeNombre(persona) { // Verificar que el campo no sea vacio
    if (persona != '') {
        listaAmigosJS.push(persona);
        actualizarLista(persona);
    } else {
        alert("El nombre ingresado no es correcto");
    }
}

