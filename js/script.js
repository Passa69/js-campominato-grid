// costante del contenitore
const squareContainer = document.getElementById("container");

// ciclo base per la ripetizione degli square
for (let i = 1; i <= 100; i++) {
    let square = document.createElement("div");
    square.classList.add("square");
    square.append(i);

    squareContainer.append(square);
}