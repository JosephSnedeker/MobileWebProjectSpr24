
const url = window.location.origin;
let socket = io.connect(url);

var myTurn = true;
var symbol;

function getBoardState() {
  var obj = {};

  /* We are creating an object where each attribute corresponds
   to the name of a cell (r0c0, r0c1, ..., r2c2) and its value is
   'X', 'O' or '' (empty).
  */
  $(".board button").each(function() {
    obj[$(this).attr("id")] = $(this).text() || "";
  });

  return obj;
}

function isGameOver() {
    var state = getBoardState();
    var matches = ["XXX", "OOO"]; // This are the string we will be looking for to declare the match over

    // We are creating a string for each possible winning combination of the cells
    var rows = [
      state.r0c0 + state.r0c1 + state.r0c2, // 1st line
      state.r1c0 + state.r1c1 + state.r1c2, // 2nd line
      state.r2c0 + state.r2c1 + state.r2c2, // 3rd line
      state.r0c0 + state.r1c0 + state.r2c0, // 1st column
      state.r0c1 + state.r1c1 + state.r2c1, // 2nd column
      state.r0c2 + state.r1c2 + state.r2c2, // 3rd column
      state.r0c0 + state.r1c1 + state.r2c2, // Primary diagonal
      state.r0c2 + state.r1c1 + state.r2c0  // Secondary diagonal
    ];

    // Loop through all the rows looking for a match
    for (var i = 0; i < rows.length; i++) {
        if (rows[i] === matches[0] || rows[i] === matches[1]) {
            return true;
        }
    }

    return false;
}

function renderTurnMessage() {
    if (!myTurn) { // If not player's turn disable the board
        $("#message").text("Your opponent's turn");
        $(".cell").attr("disabled", true);
    } else { // Enable it otherwise
        $("#message").text("Your turn.");
        $(".cell").removeAttr("disabled");
    }
}

function makeMove(e) {
    if (!myTurn) {
        return; // Shouldn't happen since the board is disabled
    }

    if ($(this).text().length) {
        return; // If cell is already checked
    }

    socket.emit("make.move", { // Valid move (on client side) -> emit to server
        symbol: symbol,
        position: $(this).attr("id")
    });
}

// Bind event on players move
socket.on("move.made", function(data) {
    $("#" + data.position).text(data.symbol); // Render move

    // If the symbol of the last move was the same as the current player
    // means that now is opponent's turn
    myTurn = data.symbol !== symbol;

    if (!isGameOver()) { // If game isn't over show who's turn is this
        renderTurnMessage();
    } else { // Else show win/lose message
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


/////
/////
/////
/////
function logic() { 
  
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
        
        if(b[1] == 'X') {
            document.getElementById('print').innerHTML = "Player X won"; 
        }
        else {
            document.getElementById('print').innerHTML = "Player O won";
        }
        for(i=4;i < 10;i++) {
            btn[i].disabled = true;
        }
        for(i=1;i < 4;i++) {
            btn[i].style.color = "red"; 
        }
    } 
    else if (((b[1] == 'X') && (b[4] == 'X') && (b[7] == 'X')) ||
             ((b[1] == 'O') && (b[4] == 'O') && (b[7] == 'O'))) { 
        
        if(b[1] == 'X') {
            document.getElementById('print').innerHTML = "Player X won"; 
        }
        else {
            document.getElementById('print').innerHTML = "Player O won";
        } 
        btn[2].disabled = true; 
        btn[3].disabled = true; 
        btn[5].disabled = true; 
        btn[6].disabled = true; 
        btn[8].disabled = true; 
        btn[9].disabled = true; 
  
        for(i=1;i<8;i=i+3){
            btn[i].style.color = "red"; 
        }
    } 
    else if (((b[7] == 'X') && (b[8] == 'X') && (b[9] == 'X')) ||
             ((b[7] == 'O') && (b[8] == 'O') && (b[9] == 'O'))) { 
        if(b[7] == 'X') {
            document.getElementById('print').innerHTML = "Player X won"; 
        }
        else {
            document.getElementById('print').innerHTML = "Player O won";
        }  
        for(i=1;i < 7;i++) {
            btn[i].disabled = true;
        }
        for(i=7;i<10;i++){
            btn[i].style.color = "red"; 
        }
    } 
    else if (((b[3] == 'X') && (b[6] == 'X') && (b[9] == 'X')) ||
             ((b[3] == 'O') && (b[6] == 'O') && (b[9] == 'O'))) { 
        if(b[3] == 'X') {
            document.getElementById('print').innerHTML = "Player X won"; 
        }
        else {
            document.getElementById('print').innerHTML = "Player O won";
        }  
        btn[1].disabled = true; 
        btn[2].disabled = true; 
        btn[4].disabled = true; 
        btn[5].disabled = true; 
        btn[7].disabled = true; 
        btn[8].disabled = true; 
  
        for(i=3;i<10;i=i+3){
            btn[i].style.color = "red"; 
        }
    } 
    else if (((b[1] == 'X') && (b[5] == 'X') && (b[9] == 'X')) ||
             ((b[1] == 'O') && (b[5] == 'O') && (b[9] == 'O'))) { 
        if(b[1] == 'X') {
            document.getElementById('print').innerHTML = "Player X won"; 
        }
        else {
            document.getElementById('print').innerHTML = "Player O won";
        }   
        for(i=2;i < 5;i++) {
            btn[i].disabled = true;
        }
        for(i=6;i < 9;i++) {
            btn[i].disabled = true;
        }
  
        for(i=1;i<10;i=i+4){
            btn[i].style.color = "red"; 
        }
    } 
    else if (((b[3] == 'X') && (b[5] == 'X') && (b[7] == 'X')) ||
             ((b[3] == 'O') && (b[5] == 'O') && (b[7] == 'O'))) { 
        if(b[3] == 'X') {
            document.getElementById('print').innerHTML = "Player X won"; 
        }
        else {
            document.getElementById('print').innerHTML = "Player O won";
        }    
        btn[1].disabled = true; 
        btn[2].disabled = true; 
        btn[4].disabled = true; 
        btn[6].disabled = true; 
        btn[8].disabled = true; 
        btn[9].disabled = true; 
  
        for(i=3;i<8;i=i+2){
            btn[i].style.color = "red"; 
        }
    } 
    else if (((b[2] == 'X') && (b[5] == 'X') && (b[8] == 'X')) ||
             ((b[2] == 'O') && (b[5] == 'O') && (b[8] == 'O'))) { 
        if(b[2] == 'X') {
            document.getElementById('print').innerHTML = "Player X won"; 
        }
        else {
            document.getElementById('print').innerHTML = "Player O won";
        }    
        btn[1].disabled = true; 
        btn[2].disabled = true; 
        btn[4].disabled = true; 
        btn[6].disabled = true; 
        btn[7].disabled = true; 
        btn[9].disabled = true; 
  
        for(i=2;i<9;i=i+3){
            btn[i].style.color = "red"; 
        }
    } 
    else if (((b[4] == 'X') && (b[5] == 'X') && (b[6] == 'X')) ||
             ((b[4] == 'O') && (b[5] == 'O') && (b[6] == 'O'))) { 
        if(b[2] == 'X') {
            document.getElementById('print').innerHTML = "Player X won"; 
        }
        else {
            document.getElementById('print').innerHTML = "Player O won";
        }    
        for(i=1;i < 4;i++) {
            btn[i].disabled = true;
        }
        for(i=7;i < 10;i++) {
            btn[i].disabled = true;
        }
        for(i=4;i<7;i++){
            btn[i].style.color = "red"; 
        }
    }
    //Checking for player tie 
    else if ((b[1] == 'X' || b[1] == 'O') && (b[2] == 'X'
        || b[2] == 'O') && (b[3] == 'X' || b[3] == 'O') && 
        (b[4] == 'X' || b[4] == 'O') && (b[5] == 'X' || 
            b[5] == 'O') && (b[6] == 'X' || b[6] == 'O') && 
        (b[7] == 'X' || b[7] == 'O') && (b[8] == 'X' || 
            b[8] == 'O') && (b[9] == 'X' || b[9] == 'O')) { 
        document.getElementById('print').innerHTML = "Match Tie"; 
    } 
    //Printing player turn
    else { 
        if (flag == 1) { 
            document.getElementById('print').innerHTML = "Player X Turn"; 
        } 
        else { 
            document.getElementById('print').innerHTML = "Player O Turn"; 
        } 
    } 
} 
  
// Function to reset game 
function reload_Game() { 
    location.reload(); 
} 
  
//Player action, switches flag to inititate next player turn
flag = 1; 
function insert_Letter(num) { 
    if (flag == 1) { 
        document.getElementById("b" + num).value = "X"; 
        document.getElementById("b" + num).disabled = true; 
        flag = 0; 
    } 
    else { 
        document.getElementById("b" + num).value = "O"; 
        document.getElementById("b" + num).disabled = true; 
        flag = 1; 
    } 
} 