//  funzione che genera 16 numeri casuali e univoci nel range da 1 a 100 ;
//  inseriamo i numeri generati all'interno di un array;
function numberRandom(num_bombs, num_cell){
   
    let bombs = [];
    
    while(bombs.length < num_bombs){
        let num = Math.floor(Math.random() * num_cell +1);
        if(!bombs.includes(num)){
            bombs.push(num);
        }
    }
    return bombs
}

// 9 - ? il punteggio è uguale a 100 - 16
//     9.1 - creiamo alert che mostra il punteggio e si congratula per la vittoria
//     9.2 - la variante game-over diventa vera


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
const button = document.getElementById("play");
const grid = document.getElementById("grid");

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
    playGround(num_cell, cellInRow, num_cell)
}

    
function playGround(num_cell, cellInRow, num_cell){
    //creiamo una variabile punteggio;
    // creiamo variabile game_over impostata su false;
    let punteggio = 0;
    let game_over = false;
    
    
    const NUMBER_OF_BOMBS = 16;
    let bombs = numberRandom(NUMBER_OF_BOMBS, num_cell)
    console.log(bombs)

    let score = document.getElementById("score");
    

    for(let i=1; i<=num_cell; i++){
        let square = create_cell(i, cellInRow);
        
        grid.appendChild(square);
        // mettiamo una condizione al click delle caselle; se la variante game over è falsa controlliamo se il numero della casella si trova nell array
   
        
        square.addEventListener("click", function(){
            if(punteggio == num_cell - NUMBER_OF_BOMBS){
                alert(`HAI VINTO! il tuo punteggio è di: ${punteggio}`)
            }
            if(!game_over){
                if(!bombs.includes(i)){
                    this.classList.toggle("bg_lightblue");
                    console.log(square.innerText);
                    punteggio++;
                    score.innerText = (`Il tuo punteggio è: ${punteggio} `)
                }
                else{
                    this.classList.toggle("bg_red");
                    game_over = true
                    
                    score.innerText = (`BOOOOOMMM!!!! hai preso la bomba il tuo punteggio è: ${punteggio} `)
                }
            }    
        })
    }
    
}

button.addEventListener("click", function(){
   newGrid()
})








