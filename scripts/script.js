const container = document.querySelector("#container");

generateNewCells(16);
container.style["grid-template-columns"] = generateGridTemplateString(16);
container.style["grid-template-rows"] = generateGridTemplateString(16);



function generateNewCells(numOfRows) {
    for (i = 0; i < (numOfRows * numOfRows); i++) {
        const newCell = document.createElement("div");
        newCell.setAttribute("class", "cell");
        container.appendChild(newCell);
    }

    const cells = document.querySelectorAll(".cell");
    cells.forEach((cell) => {
        cell.addEventListener("mouseover", (e) => {
            cell.classList.add("moused-over");
        })
    })
    
}

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

    container.style["grid-template-columns"] = generateGridTemplateString(gridSize);
    container.style["grid-template-rows"] = generateGridTemplateString(gridSize);

    generateNewCells(gridSize);
}