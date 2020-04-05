const container = document.querySelector("#container");

for (i = 0; i < (16 * 16); i++) {
    const newCell = document.createElement("div");
    newCell.setAttribute("class", "cell");
    container.appendChild(newCell);
}

container.style["grid-template-columns"] = generateGridTemplateString(16);
container.style["grid-template-rows"] = generateGridTemplateString(16);

const cells = document.querySelectorAll(".cell");
cells.forEach((cell) => {
    cell.addEventListener("mouseover", (e) => {
        cell.classList.add("moused-over");
    })
})

function generateGridTemplateString(numOfColumns) {
    let numOfColumnsAndRowsString = "";
    for (i = 0; i < numOfColumns; i++) {
        numOfColumnsAndRowsString += "auto ";
    }
    return numOfColumnsAndRowsString;
}

function generateNewGrid() {
    document.querySelectorAll(".cell").forEach((cell) => cell.remove());

    gridSize = prompt("How many rows/columns would you like your grid to have?");

}