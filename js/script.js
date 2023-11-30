// FUNZIONE CHE CREA CELLE 
function create_cell(num, cellInRow){
    let element = document.createElement("div");
    element.classList.add("square");
    element.innerText = num;
    element.style.width = `calc(100vw / ${cellInRow})`
    element.style.height = `calc(100vw / ${cellInRow})`
    return element;
}

// RECUPERO BUTTON E DIV #GRID 
const grid = document.getElementById("grid");
const button = document.getElementById("play");

function newGrid(){
    grid.innerHTML = " ";

    let num_cell;
    let cellInRow;
    
    let level_selector = document.getElementById("difficulty");
    let level = parseInt(level_selector.value);

    switch(level){
        case 1:
            num_cell = 100;
            cellInRow = 10;
            break;
        case 2:
            num_cell = 81;
            cellInRow = 9;
            break;
        case 3:
            num_cell = 49;
            cellInRow = 7;
            break;
        default:
            num_cell = 100;
            cellInRow = 10;
            break;
        }
        playGround(num_cell, cellInRow)
    }
    
    function playGround(num_cell, cellInRow){
        for(let i=1; i<=num_cell; i++){
            let square = create_cell(i, cellInRow);
            grid.appendChild(square);
            square.addEventListener("click", function(){
                this.classList.toggle("bg_lightblue");
                console.log(square.innerText)
            })
        }
    }

    button.addEventListener("click", function(){
        newGrid()
    })








