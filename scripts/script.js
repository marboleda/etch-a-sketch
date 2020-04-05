const container = document.querySelector("#container");

for (i = 0; i < (16 * 16); i++) {
    const newCell = document.createElement("div");
    newCell.setAttribute("class", "cell");
    container.appendChild(newCell);
}

let numColumnString = "";
for (i = 0; i < 16; i++) {
    numColumnString += "auto ";
}

container.style["grid-template-columns"] = numColumnString;
container.style["grid-template-rows"] = numColumnString; //num of rows and num of columns is the same

const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
    cell.addEventListener("mouseover", (e) => {
        cell.classList.add("moused-over");
    })
})

function generateNewGrid() {
    document.querySelectorAll(".cell").forEach((cell) => cell.remove());

    //gridSize = prompt("How many rows/columns would you like your grid to have?");

}