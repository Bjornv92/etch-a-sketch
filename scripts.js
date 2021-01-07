const mainContainer = document.getElementById("gridContainer");
const range = document.getElementById("dimensions");

//Grid Reset

function resetGrid() {
    mainContainer.querySelectorAll("*").forEach(n => n.remove());
}

//Grid Creation

function createSquares() {

    resetGrid();

    // Assigning the range input onchange to a variable
    let dimensions = document.getElementById("dimensions");

    const squareDim = 960/dimensions.value;

    for (let i = 0; i < dimensions.value; i++) {
        let col = document.createElement("div");
        col.className = "col";
        for (let j = 0; j < dimensions.value; j++){
            let square = document.createElement("div");
            square.className = "square";
            square.style.width = squareDim + "px";
            square.style.height = squareDim + "px";
            col.appendChild(square);
        }
        gridContainer.appendChild(col);
    }

    blackColour();
};

//GridColours

function blackColour() {
    document.querySelectorAll(".square").forEach(square => {
        square.addEventListener("mouseover", function() {
            square.style.backgroundColor = "black";
        });
    });
};

function randomColour() {
    document.querySelectorAll(".square").forEach(square => {
        square.addEventListener("mouseover", function() {
        let randomColour = Math.floor(Math.random()*16777215).toString(16);
            square.style.backgroundColor = "#" + randomColour;
        });
    });
};

function erase() {
    document.querySelectorAll(".square").forEach(square => {
        square.addEventListener("mouseover", function() {
            square.style.backgroundColor = "white";
        });
    });
};

//Range Visual Output
dimensions.addEventListener("input" , () => {
    bubble.textContent = range.value + "x" + range.value;
});
