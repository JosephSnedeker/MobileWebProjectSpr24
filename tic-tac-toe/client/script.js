//Logic for online tic-tac-toe is based on a combination of https://github.com/Xfox1/tic-tac-toe and https://www.geeksforgeeks.org/simple-tic-tac-toe-game-using-javascript/
const url = window.location.origin;
let socket = io.connect(url);

var myTurn = true;
var symbol;
flag = 1; 

function isGameOver() {
    // Setting DOM to all boxes or input field 
    var b = [];
    for(i=1;i<10;i++) {
        b[i] = document.getElementById("b" + i).value;
    }
  
    var btn = [];
    for(i=1;i<10;i++) {
        btn[i] = document.getElementById("b" + i);
    }
  
    // Checking if Player X won or not and after 
    // that disabled all the other fields 
    if (((b[1] == 'X') && (b[2] == 'X') && (b[3] == 'X')) || 
        ((b[1] == 'O') && (b[2] == 'O') && (b[3] == 'O'))) { 
        
        $(".cell").attr("disabled", true);
        
        for(i=1;i < 4;i++) {
            btn[i].style.color = "red"; 
        }
        
        return true;
    } 
    else if (((b[1] == 'X') && (b[4] == 'X') && (b[7] == 'X')) ||
             ((b[1] == 'O') && (b[4] == 'O') && (b[7] == 'O'))) { 
        
        $(".cell").attr("disabled", true);
  
        for(i=1;i<8;i=i+3){
            btn[i].style.color = "red"; 
        }
        
        return true;
    } 
    else if (((b[7] == 'X') && (b[8] == 'X') && (b[9] == 'X')) ||
             ((b[7] == 'O') && (b[8] == 'O') && (b[9] == 'O'))) { 
 
        $(".cell").attr("disabled", true);
        
        for(i=7;i<10;i++){
            btn[i].style.color = "red"; 
        }
        
        return true;
    } 
    else if (((b[3] == 'X') && (b[6] == 'X') && (b[9] == 'X')) ||
             ((b[3] == 'O') && (b[6] == 'O') && (b[9] == 'O'))) { 

        $(".cell").attr("disabled", true); 
  
        for(i=3;i<10;i=i+3){
            btn[i].style.color = "red"; 
        }
        return true;
    } 
    else if (((b[1] == 'X') && (b[5] == 'X') && (b[9] == 'X')) ||
             ((b[1] == 'O') && (b[5] == 'O') && (b[9] == 'O'))) { 
 
        $(".cell").attr("disabled", true);
  
        for(i=1;i<10;i=i+4){
            btn[i].style.color = "red"; 
        }

        return true;
    } 
    else if (((b[3] == 'X') && (b[5] == 'X') && (b[7] == 'X')) ||
             ((b[3] == 'O') && (b[5] == 'O') && (b[7] == 'O'))) { 

        $(".cell").attr("disabled", true);
  
        for(i=3;i<8;i=i+2){
            btn[i].style.color = "red"; 
        }
        
        return true;
    } 
    else if (((b[2] == 'X') && (b[5] == 'X') && (b[8] == 'X')) ||
             ((b[2] == 'O') && (b[5] == 'O') && (b[8] == 'O'))) { 

        $(".cell").attr("disabled", true);
  
        for(i=2;i<9;i=i+3){
            btn[i].style.color = "red"; 
        }
        
        return true;
    } 
    else if (((b[4] == 'X') && (b[5] == 'X') && (b[6] == 'X')) ||
             ((b[4] == 'O') && (b[5] == 'O') && (b[6] == 'O'))) { 
 
        $(".cell").attr("disabled", true);
        
        for(i=4;i<7;i++){
            btn[i].style.color = "red"; 
        }
        
        return true;
    }
    else {
        return false;
    }
}

function GameTied() {
    var b = [];
    for(i=1;i<10;i++) {
        b[i] = document.getElementById("b" + i).value;
    }
    if ((b[1] == 'X' || b[1] == 'O') && (b[2] == 'X' || 
            b[2] == 'O') && (b[3] == 'X' || b[3] == 'O') && 
        (b[4] == 'X' || b[4] == 'O') && (b[5] == 'X' || 
            b[5] == 'O') && (b[6] == 'X' || b[6] == 'O') && 
        (b[7] == 'X' || b[7] == 'O') && (b[8] == 'X' || 
            b[8] == 'O') && (b[9] == 'X' || b[9] == 'O')) { 
        return true;
    }
    else {
        return false;
    }
}

function renderTurnMessage() {
    if (!myTurn) { // If not player's turn disable the board
        $("#message").text("Your opponent's turn");
        $(".cell").attr("disabled", true);
    } else { // Enable it otherwise
        $("#message").text("Your turn.");
        $(".cell").removeAttr("disabled");
        CheckBoard();
    }
}

function makeMove() {
    if (!myTurn) {
        return; // Shouldn't happen since the board is disabled
    }

    if ($(this).text().length) {
        return; // If cell is already checked
    }

    socket.emit("make.move", { // Valid move (on client side) -> emit to server
        position: $(this).attr("id")  
    });
}

// Bind event on players move
socket.on("move.made", function(data) {
    
    $(insert_Letter(data.position))
    if(flag == 0) {
        flag = 1;
        myTurn = symbol !== "O";
    }
    else {
        flag = 0;
        myTurn = symbol !== "X";
    }

    if(GameTied()) {
        $("#message").text("Game Tied!");
    } 
    else if (!isGameOver()) { // If game isn't over show who's turn is this
        renderTurnMessage();
    } 
    else { // Else show win/lose message
        if (myTurn) {
            $("#message").text("You lost.");
        } else {
            $("#message").text("You won!");
        }

        $(".cell").attr("disabled", true); // Disable board
    }
});


// Bind event for game begin
socket.on("game.begin", function(data) {
    symbol = data.symbol; // The server is assigning the symbol
    myTurn = symbol === "X"; // 'X' starts first
    renderTurnMessage();
});

// Bind on event for opponent leaving the game
socket.on("opponent.left", function() {
    $("#message").text("Your opponent left the game.");
    $(".cell").attr("disabled", true);
});

// Binding buttons on the board
$(function() {
  $(".cell").attr("disabled", true); // Disable board at the beginning
  $(".cell").on("click", makeMove);
});

// Function to reset game 
function reload_Game() { 
    location.reload(); 
} 
  
//Player action, switches flag to inititate next player turn
function insert_Letter(num) { 
    if (flag == 1) { 
        document.getElementById(num).value = "X"; 
        document.getElementById(num).disabled = true; 
    } 
    else { 
        document.getElementById(num).value = "O"; 
        document.getElementById(num).disabled = true; 
    } 
} 

//Function to check and disable cells at the beginning of every turn
function CheckBoard() {
    for(i=1;i<10;i++) {
        if(document.getElementById("b" + i).value == "X" || document.getElementById("b" + i).value == "O") {
            document.getElementById("b" + i).disabled = true;
        }
    }
}