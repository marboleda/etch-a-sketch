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
