let currMoleTile;
let currPlantTile;
let score =0;
let gameover = false;

window.onload=function(){
    setGame();
    
}

function setGame(){
    //set up the grid for the game board in our html
    for(let i =0;i<9;i++){  // i goes from 0 to 8 , 9 tile
        //<div id="0-8"></div>
        let tile = document.createElement("div")
        // assiging the id to tiles
        tile.id = i.toString();  // toString bcoz id string hoti h
        tile.addEventListener("click",selectTile);
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setMole,1000);
    setInterval(setPlant,2000);
}

function getRandomTile(){
    // math.random -> [0,1) * 9 = [0,9);
    let num = Math.floor(Math.random()*9);
    return num.toString(); // toString so that we can use it a sthe id
}

function setMole(){
// emptty previous mole tile 
    if(gameover){
        return;
    }
    if(currMoleTile){
        currMoleTile.innerHTML="";
    }

    let mole = document.createElement("img");
    mole.src="./monty-mole.png";

    let num= getRandomTile();

    if(currPlantTile && currPlantTile.id==num){
        return;
    }
    currMoleTile=document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setPlant(){
    if(gameover){
        return;
    }
    if(currPlantTile){
        currPlantTile.innerHTML="";
    }

    let plant = document.createElement("img");
    plant.src="./piranha-plant.png";

    let num = getRandomTile();

    if(currMoleTile && currMoleTile.id==num){
        return;
    }
    currPlantTile=document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selectTile(){
    if(gameover){
        return;
    }
    if(this==currMoleTile){
        score=score+10;
        document.getElementById("score").innerText= score.toString();
    }else if(this==currPlantTile){
        document.getElementById("score").innerText="GAME OVER: " + score.toString();
        gameover=true;
    }
}