window.onload = function() {
console.log("RogueNation");

//Psuedo Code//

//create a click event from the start button
var startGame = document.getElementById("start");
var qtiles = ['1' ,'2', '3','4'];           //array of tiles for my questions to be housed
startGame.onclick = function(){
        startGame.style.display = 'none';
    start();

};
//when start button is clicked
    //both score elements should be displayed(appended) under the players names.
    //10 clickable question tiles should appear in the middle on the bottom of the page.
    //make sure question and possible answers are linked to question tiles.
function start(){
    showTiles();
}

function showTiles(){
    //referenceing the div tag where my tile will appear
    for(var i = 0; i < qtiles.length; i++){    
        var tiles = document.createElement("button");              //creating a tag for tiles
        tiles.className = "squares";                            //adding a class name to tiles to reference in the future
        // tiles.setAttribute("data",qtiles[i]);
        tiles.setAttribute("id",`t${i}`);                   //string concantenation(makes the i interactive)
        tiles.innerHTML = "Q";                                 //put the Q inside the the tiles
        document.getElementById("gameBoard").appendChild(tiles);//put div elements into gameboard
        tiles.onlick = function(){
            alert('question');                      //click the question tiles, questions should arise
        };
    }
    

}
    // for (var i = 0; game[1].answers.length)
    // var tile1 = document.getElementById("t0");
    // var questions = document.getElementsByClassName("questions");
    //     tile1.onclick = function() {
    //     var p1 = document.createElement('p');
    //     questions.appendChild(p1);
    //     };
    // };

function question1() {
    var tile1 = document.getElementById("t0");
        tile1.onlick = function() {
            alert("wins");
        };
}
//when 10 clickable question tiles are displayed
    //make sure Player 1 goes first and it alternates players after everyturn.(strech)
    //when individual question tiles are clicked, questions should appear
    //possible asnwers should appear as well.
    //change the color of question tiles after click.
    //make button unclickable after clicked.
var game = {
questionable: {
    1: {  
        question: "Which is the worlds largest ocean?",
        answers: {
            a1: {text: "Pacific", key: true},
            a2: {text: "Artic", key: false},
            a3: {text: "Indian", key: false},
            a4: {text: "Southern", key: false},
        }
       },
    2: {  
        question: "Which record label did Micheal Jackson record on?",
        answers: {
            a1: {text: "Epic", key: false},
            a2: {text: "Sun", key: false},
            a3: {text: "Warner Bros", key: false},
            a4: {text: "Motown", key: true},
        }
       },
    3: {  
        question: "Where is Disney World?",
        answers: {
            a1: {text: "Florida", key: true},
            a2: {text: "California", key: false},
            a3: {text: "New Mexico", key: false},
            a4: {text: "Georgia", key: false},
        }
       },
    // 4: {  
    //     question: "In which country did Marilyn Monroe die in?",
    //     answers: {
    //         a1: {text: "Brazil", key: false},
    //         a2: {text: "United States", key: true},
    //         a3: {text: "England", key: false},
    //         a4: {text: "Spain", key: false},
    //     }
    //   },
    // 5: {  
    //     question: "Harstfeild international airport is located in what state?",
    //     answers: {
    //         a1: {text: "Alabama", key: false},
    //         a2: {text: "New York", key: false},
    //         a3: {text: "Georgia", key: true},
    //         a4: {text: "Florida", key: false},
    //     }
    //   },
    // 6: {  
    //     question: "In baseball, where are the Blue Jays from?",
    //     answers: {
    //         a1: {text: "California", key: false},
    //         a2: {text: "New York", key: false},
    //         a3: {text: "Toronto", key: true},
    //         a4: {text: "Michigan", key: false},
    //     }
    //   },
    // 7: {  
    //     question: "Where is the Golden Gate Bridge?",
    //     answers: {
    //         a1: {text: "California", key: true},
    //         a2: {text: "Pennsylvania", key: false},
    //         a3: {text: "Denver", key: false},
    //         a4: {text: "New York City", key: false},
    //     }
    //   },
    // 8: {  
    //     question: "Which planet is closest to the sun?",
    //     answers: {
    //         a1: {text: "Saturn", key: false},
    //         a2: {text: "Mercury", key: true},
    //         a3: {text: "Mars", key: false},
    //         a4: {text: "Jupiter", key: false},
    //     }
    //   },
    // 9: {  
    //     question: "Which country gave the USA the 'Statute of Liberty'?",
    //     answers: {
    //         a1: {text: "Venzuela", key: true},
    //         a2: {text: "Britain", key: false},
    //         a3: {text: "Spain", key: false},
    //         a4: {text: "France", key: true},
    //     }
    //   },
    // 10: {  
    //     question: "What is the biggest animal to inhabit the earth?",
    //     answers: {
    //         a1: {text: "Killer Whale", key: false},
    //         a2: {text: "Blue Whale", key: true},
    //         a3: {text: "Elephant", key: false},
    //         a4: {text: "Sperm Whale", key: false},
    //     }
    //   }
    },
    
};
var holder = document.querySelector(".questions-holder");
var questions = document.querySelector(".questions");
var answers = document.querySelector(".answers");

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
