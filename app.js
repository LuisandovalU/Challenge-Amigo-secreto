// El array que almacenará la lista de amigos.
let amigos = [];

// --- Función para AGREGAR un amigo (llamada desde tu botón "Añadir") ---
function agregarAmigo() {
    // Obtenemos el campo de texto por su id 'amigo'.
    let campoNombre = document.getElementById('amigo');
    let nombre = campoNombre.value.trim(); // Usamos .trim() para evitar nombres que solo sean espacios.

    // Validación 1: El campo no puede estar vacío.
    if (nombre === '') {
        alert('Por favor, escribe el nombre del amigo.');
        return; // Detenemos la función aquí.
    }

    // Validación 2: El nombre no debe estar ya en la lista.
    if (amigos.includes(nombre)) {
        alert('Este nombre ya ha sido agregado. Intenta con uno diferente.');
        campoNombre.value = ''; // Limpiamos el campo para facilitar.
        campoNombre.focus();
        return; // Detenemos la función.
    }

    // Si todo es correcto, añadimos el nombre al array.
    amigos.push(nombre);

    // Actualizamos la lista visible en el HTML.
    actualizarListaAmigos();

    // Limpiamos el campo de texto y lo dejamos listo para el siguiente nombre.
    campoNombre.value = '';
    campoNombre.focus();
}

// --- Función para SORTEAR (llamada desde tu botón "Sortear amigo") ---
function sortearAmigo() {
    // Validación: Necesitamos al menos 2 amigos para un sorteo justo.
    if (amigos.length < 2) {
        alert('Necesitas agregar al menos 2 amigos para realizar el sorteo.');
        return; // Detenemos la función.
    }

    // Generamos un índice aleatorio dentro del rango del array.
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtenemos el nombre del amigo secreto usando el índice.
    let amigoSecreto = amigos[indiceAleatorio];

    // Mostramos el resultado en el elemento con id 'resultado'.
    // Como 'resultado' es una <ul>, ponemos el texto dentro de una <li>.
    let elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = `<li>¡El amigo secreto es: <strong>${amigoSecreto}</strong>!</li>`;
}

// --- Función auxiliar para mostrar los amigos en la lista <ul> ---
function actualizarListaAmigos() {
    let elementoLista = document.getElementById('listaAmigos');
    elementoLista.innerHTML = ''; // Limpiamos la lista para no duplicar nombres.

    // Recorremos el array 'amigos' para crear cada elemento de la lista.
    for (let i = 0; i < amigos.length; i++) {
        // Creamos un elemento de lista <li> por cada amigo.
        let item = document.createElement('li');
        item.textContent = amigos[i];

        // Lo añadimos a la <ul> en el HTML.
        elementoLista.appendChild(item);
    }
}

// --- Función OPCIONAL pero recomendada: Reiniciar el juego ---
function reiniciarJuego() {
    // Vaciamos el array.
    amigos = [];
    
    // Limpiamos los elementos en pantalla.
    document.getElementById('listaAmigos').innerHTML = '';
    document.getElementById('resultado').innerHTML = '';
    document.getElementById('amigo').value = '';
    document.getElementById('amigo').focus();
}