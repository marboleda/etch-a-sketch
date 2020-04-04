const container = document.querySelector("#container");

for (i = 0; i < 16; i++) {
    const newCell = document.createElement("div");
    newCell.setAttribute("class", "cell");
    container.appendChild(newCell);
}