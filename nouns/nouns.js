const $noun = document.querySelector('.heading')
const $description = document.querySelector('.paragraph')
const $button = document.querySelector('.button')

const NOUNS = nouns

function mostrarAleatorio(array) {
    // Obtener un índice aleatorio
    const indice = Math.floor(Math.random() * array.length);
    // Obtener el objeto correspondiente al índice
    const noun = array[indice];
    $noun.innerHTML = noun
        // Eliminar el objeto del array
    array.splice(indice, 1);
    // Mostrar la información del objeto
    console.log(array.length)
}

$button.addEventListener("click", function () {
    mostrarAleatorio(NOUNS);
});