// Function called whenever user tab on any box 
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