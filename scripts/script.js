const container = document.querySelector("#container");
const mode = document.querySelector("#mode");
const normalModeButton = document.querySelector("#normal-button");
const discoModeButton = document.querySelector("#disco-button");
const gradualModeButton = document.querySelector("#gradual-button")

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
        cell.onmouseover = function(e) {
            e.target.style["background-color"] = "rgba(0 ,0, 0, 1)";
        }
    });
    
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

normalModeButton.onclick = function() {
    const cells = document.querySelectorAll(".cell");
    mode.textContent = "Normal";
    cells.forEach((cell) => {
        cell.onmouseover = function(e) {
            e.target.style["background-color"] = "rgba(0, 0, 0, 1)";
        }
    });
}

discoModeButton.onclick = function() {
    const cells = document.querySelectorAll(".cell");
    let rValue;
    let gValue;
    let bValue;
    mode.textContent = "Disco";
    cells.forEach((cell) => {
        cell.onmouseover = function(e) {
            rValue = Math.round((Math.random() * 255));
            gValue = Math.round((Math.random() * 255));
            bValue = Math.round((Math.random() * 255));
            e.target.style["background-color"] = `rgba(${rValue}, ${gValue}, ${bValue},1)`;
        }
    });
}

gradualModeButton.onclick = function() {
    const cells = document.querySelectorAll(".cell");
    mode.textContent = "Gradual";
    cells.forEach((cell) => {
        cell.onmouseover = function(e) {
            if (e.target.style["background-color"] != "" &&
                e.target.style["background-color"].substr(0,12) == "rgba(0, 0, 0") {
                const alphaVal = Number(e.target.style["background-color"].substr(-4,3));
                e.target.style["background-color"] = `rgba(0, 0, 0, ${alphaVal + 0.1})`;
            } else if (e.target.style["background-color"] != "" &&
                       e.target.style["background-color"].substr(0,11) == "rgb(0, 0, 0") {
                //do nothing
            } else { //blank cell
                e.target.style["background-color"] = "rgba(0, 0, 0, 0.1)";
            }
        }
    });
}