const mainContainer = document.getElementById("gridContainer");

function resetGrid() {
    mainContainer.querySelectorAll("*").forEach(n => n.remove());
}

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

function blackColour() {
    document.querySelectorAll(".square").forEach(square => {
        square.addEventListener("mouseover", function() {
        square.style.backgroundColor = "black";
        });
    });
};

function grayColour() {
    document.querySelectorAll(".square").foreach(square => {
        square.addEventListener("mouseover", function() {
            square.style.backgroundColor = "green";
        })
    })
}

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