var compRun = Array();
var playerRun = Array();
var t = 0;
var canGuess = false;
var level = 1 ;
var len = 3;


function runGame(){
    document.getElementById("start").style.display= "none";
    document.getElementById("game-container").style.backgroundColor = "firebrick";
    document.getElementById("result").innerHTML = "Watch";
    if(level%2==1 && level>1){ len = len+2;}
    var run = Array.from({length: len}, () => Math.floor(Math.random() * 9));
    for ( let i = 1; i<run.length;i++){
        if( run[i] == run[i-1]){
            run[i]= Math.floor(Math.random() * 9);
            i--;
        }
      }
    compRun = run;
    // document.getElementById("cheat").innerHTML = compRun;
    for ( let i = 0; i<run.length;i++){
      timeout= setTimeout(changeRunColor, 1000*(i+1), "b"+run[i] );
    }
    timeout= setTimeout(guessChange,1000*len+1000);
  }
function guess(pick){
    if (canGuess){
        changeColor(pick);
        playerRun[t] = Number(pick.charAt(1));
        // document.getElementById("cheater").innerHTML = playerRun;
        // playerRun[t] = document.getElementById(pick).innerHTML - 1;
        // var x = playerRun[t]-compRun[t]
        // if(x !== 0){
        if(playerRun[t] !== compRun[t]){
            document.getElementById("result").innerHTML = "GAME OVER!";
            document.getElementById("game-container").style.backgroundColor = "firebrick";
            canGuess = false;
            document.getElementById("start").style.display= "block";
            document.getElementById("start").innerText= "Play Again?";
            playerRun = [];
            t=0;
            level=1;
            len=3;
            return;
        }
        
        t++;
        if (t == compRun.length && playerRun[t-1] == compRun[t-1]){
            document.getElementById("result").innerHTML = "Level "+level+" Clear";
            canGuess = false;
            playerRun = [];
            t=0;
            level++;
            timeout= setTimeout(runGame, 2000);

        }
    }
}
function guessChange(){
    // document.getElementById("result").innerHTML = "test";
    canGuess = true;
    document.getElementById("result").innerHTML = "Your Turn";
    document.getElementById("game-container").style.backgroundColor = "aliceblue";

}
function changeColor(clicked){
    var element = document.getElementById(clicked);
    element.style.backgroundColor = "cornflowerblue";
    timeout= setTimeout(changeColorBack, 1000, clicked );
  }
  function changeColorBack(clicked){
    var element = document.getElementById(clicked);
    element.style.backgroundColor = "lightgray";
  }
  function changeRunColor(sent){
    var element = document.getElementById(sent);
    element.style.backgroundColor = "coral";
    timeout= setTimeout(changeColorBack, 1500, sent);
  }

 
