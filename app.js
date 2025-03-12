// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];

function agregarAmigo() {
    let amigo = document.getElementById("amigo").value;
    listaAmigos.push(amigo);
    actualizarLista();
}



function actualizarLista() {
    console.log(listaAmigos);
}