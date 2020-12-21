function createSquares(){
    for(let i = 0; i < 16; i++) {
        let row = document.createElement("div");
        row.className = "row";
        for (let j = 0; j < 16; j++) {
            let square = document.createElement("div");
            square.className = "square";
            row.appendChild(square);
        }
        document.getElementById("mainContainer").appendChild(row);
    }
}