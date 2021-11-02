// 1. chiedo all'utenete che livello di difficoltà desidera => prompt
// 2. a seconda della scelta modulo il layout => if
    // 2.1 creo un ciclo per ogni scelta => for
// 3. l'utente deve essere in grado di selezionare le celle per rendere selezionate => click + classList

// richiesta all'utente
const userChoice = parseInt(prompt("Scegli il livello di difficoltà tra: 1, 2 o 3"));
console.log(userChoice);

// costante del contenitore
const squareContainer = document.getElementById("container");

// variabile per layout di scelta dell'utente
let levels = 100;

if (userChoice == 1) {
    levels = 100;
}

if (userChoice == 2) {
    levels = 81;
}

if (userChoice == 3) {
    levels = 49;
}

// ciclo per la ripetizione degli square
for (let i = 1; i <= levels; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.append(i);
    squareContainer.append(square);

    // aggiunta click
    square.addEventListener ('click', function() {
        console.log('hai cliccato!', this)
        square.classList.add("selection");
    });
}

