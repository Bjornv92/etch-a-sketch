const mainContainer = document.getElementById("mainContainer");
const squareDim = 960/10;
let dimensions = document.getElementById("dimensions");
dimensions.onchange = () => dimensions.value;

function resetGrid() {
    mainContainer.querySelectorAll("*").forEach(n => n.remove());
}

function createSquares() {

    resetGrid();

    for (let i = 0; i < 10; i++) {
        let col = document.createElement("div");
        col.className = "col";
        for (let j = 0; j < 10; j++){
            let square = document.createElement("div");
            square.className = "square";
            square.style.width = squareDim + "px";
            square.style.height = squareDim + "px";
            col.appendChild(square);
        }
        mainContainer.appendChild(col);
    }
}

/*

function createSquares(){
    for(let i = 0; i < 4; i++) {
        let col = document.createElement("div");
        col.className = "col";
        for (let j = 0; j < 8; j++) {
            let square = document.createElement("div");
            square.className = "square";
            col.appendChild(square);
        }
        document.getElementById("mainContainer").appendChild(col);
    }
}
*/