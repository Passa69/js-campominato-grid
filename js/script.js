// 1. chiedo all'utenete che livello di difficoltà desidera => prompt
// 2. a seconda della scelta modulo il layout => if
    // 2.1 creo un ciclo per ogni scelta => for
// 3. l'utente deve essere in grado di selezionare le celle per rendere selezionate => click + classList


// costante del contenitore
const squareContainer = document.getElementById("container");

// ciclo base per la ripetizione degli square
for (let i = 1; i <= 100; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.append(i);

    squareContainer.append(square);
}
