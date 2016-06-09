window.onload = function() {
console.log("This is why I'm hot");

//Psuedo Code//

//create a click event from the start button
var startGame = document.getElementById("start");
var qtiles = ['1' ,'2', '3', '4', '5', '6', '7', '8', '9', '10'];
startGame.onclick = function(){
    alert("Click Buttons work!!!!")
    start();
};
//when start button is clicked
    //both score elements should be displayed(appended) under the players names.
    //12 clickable question tiles should appear in the middle on the bottom of the page.
function start(){
    showScore();
    showTiles();
}
function showScore(){
    
}
function showTiles(){
    document.getElementById("gameBoard");                       //referenceing the div tag where my tile will appear
    for(var i = 0; qtiles.length; ++i){    
        var tiles = document.createElement("div");              //creating a tag for tiles
        tiles.className = "squares";                            //adding a class name to tiles to reference in the future
        tiles.setAttribute("data-values",tiles[i]);
        document.getElementById("gameBoard").appendChild(tiles);//put div elements into gameboard
        tiles.onlick = function(){
            console.log("it works");
        };
    }
}

//when 12 clickable question tiles are displayed
    //make sure question and possible answers are linked to question tiles.
    //make sure Player 1 goes first and it alternates players after everyturn.
//when individual question tiles are clicked
    //questions should appear
    //possible asnwers should appear as well.
    //change the color of question tiles after click.
    //make button unclickable after clicked.
//when possible asnwers are chosen
    //game should display wether the answer is right or wrong (IF STATEMENT).
        // if correct answer clicked, highlight answer in yellow.
            //transition it to spin.
        // if incorrect answer clicked, highlight players answer red and right answer in yellow.
    // make sure the score changes when answer is correct.
    // "switch" button should appear after answer is chosen.
//when "switch" button is clicked
    //make question and possible answers dissappear.
//when 12 question tiles are chosen
    //check for a winner
    // if player 1 wins, display image
    //if player 2 wins, display image
    //else display tie. 
//once winner displayed
    //add reset button to restart the game from beginning.
        
        
};