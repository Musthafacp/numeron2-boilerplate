// Iteration 8: Making scoreboard functional


const playagain = document.getElementById("play-again-button");
const boardscore = document.querySelector("#score-board")
const storedscore = sessionStorage.getItem("score");

     
playagain.onclick = ()=>{
    sessionStorage.removeItem("score")
    window.location.href = "game.html";
}


boardscore.innerText = storedscore;




