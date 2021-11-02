// 1. chiedo all'utenete che livello di difficoltà desidera => prompt
// 2. a seconda della scelta modulo il layout => if
    // 2.1 creo un ciclo per ogni scelta => for
// 3. l'utente deve essere in grado di selezionare le celle per rendere selezionate => click + classList

// richiesta all'utente
const userChoice = parseInt(prompt("Scegli il livello di difficoltà tra: 1, 2 o 3"));
console.log(userChoice);

// costante del contenitore
const squareContainer = document.getElementById("container");

// layout a seconda della difficoltà
if (userChoice === 1) {
    // ciclo per la ripetizione degli square
    for (let i = 1; i <= 100; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.append(i);
        squareContainer.append(square);

        // // aggiunta click
        // square.addEventListener (`click`, 
        //     function () {
        //         menu.classList.add('selection');
        //     }
        // );
    }
} else if (userChoice === 2) {
    // ciclo per la ripetizione degli square
    for (let i = 1; i <= 81; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.append(i);

        squareContainer.append(square);
    }
} else if (userChoice === 3) {
    // ciclo per la ripetizione degli square
    for (let i = 1; i <= 49; i++) {
        let square = document.createElement("div");
        square.classList.add("square");
        square.append(i);

        squareContainer.append(square);
    }
}

