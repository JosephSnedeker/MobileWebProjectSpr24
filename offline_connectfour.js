// Function called whenever user tab on any box 
function myfunc() { 
  
    // Setting DOM to all boxes or input field 
    var f11, f21, f31, f41, f51, f61, f71, f12, f22, f32, f42, f52, f62, f72,
	f13, f23, f33, f43, f53, f63, f73, f14, f24, f34, f44, f54, f64, f74,
	f15, f25, f35, f45, f55, f65, f75, f16, f26, f36, f46, f56, f66, f76; 
    f11 = document.getElementById("f11").value; 
    f21 = document.getElementById("f21").value; 
    f31 = document.getElementById("f31").value; 
    f41 = document.getElementById("f41").value; 
    f51 = document.getElementById("f51").value; 
    f61 = document.getElementById("f61").value; 
    f71 = document.getElementById("f71").value; 
    
	f12 = document.getElementById("f12").value;
	f22 = document.getElementById("f22").value;
	f32 = document.getElementById("f32").value;
	f42 = document.getElementById("f42").value;
	f52 = document.getElementById("f52").value;
	f62 = document.getElementById("f62").value;
	f72 = document.getElementById("f72").value;
	
	f13 = document.getElementById("f13").value;
	f23 = document.getElementById("f23").value;
	f33 = document.getElementById("f33").value;
	f43 = document.getElementById("f43").value;
	f53 = document.getElementById("f53").value;
	f63 = document.getElementById("f63").value;
	f73 = document.getElementById("f73").value;

	f14 = document.getElementById("f14").value;
	f24 = document.getElementById("f24").value;
	f34 = document.getElementById("f34").value;
	f44 = document.getElementById("f44").value;
	f54 = document.getElementById("f54").value;
	f64 = document.getElementById("f64").value;
	f74 = document.getElementById("f74").value;

	f15 = document.getElementById("f15").value;
	f25 = document.getElementById("f25").value;
	f35 = document.getElementById("f35").value;
	f45 = document.getElementById("f45").value;
	f55 = document.getElementById("f55").value;
	f65 = document.getElementById("f65").value;
	f75 = document.getElementById("f75").value;

	f16 = document.getElementById("f16").value;
	f26 = document.getElementById("f26").value;
	f36 = document.getElementById("f36").value;
	f46 = document.getElementById("f46").value;
	f56 = document.getElementById("f56").value;
	f66 = document.getElementById("f66").value;
	f76 = document.getElementById("f76").value;

	document.getElementById("print").innerHTML = '';
}
  /*
    var b1btn, b2btn, b3btn, b4btn, b5btn,  
        b6btn, b7btn, b8btn, b9btn; 
          
    b1btn = document.getElementById("b1"); 
    b2btn = document.getElementById("b2"); 
    b3btn = document.getElementById("b3"); 
    b4btn = document.getElementById("b4"); 
    b5btn = document.getElementById("b5"); 
    b6btn = document.getElementById("b6"); 
    b7btn = document.getElementById("b7"); 
    b8btn = document.getElementById("b8"); 
    b9btn = document.getElementById("b9"); 
  
    // Checking if Player X won or not and after 
    // that disabled all the other fields 
    if ((b1 == 'x' || b1 == 'X') && (b2 == 'x' || 
        b2 == 'X') && (b3 == 'x' || b3 == 'X')) { 
        document.getElementById('print') 
            .innerHTML = "Player X won"; 
        b4btn.disabled = true; 
        b5btn.disabled = true; 
        b6btn.disabled = true; 
        b7btn.disabled = true; 
        b8btn.disabled = true; 
        b9btn.disabled = true; 
  
        b1btn.style.color = "red"; 
        b2btn.style.color = "red"; 
        b3btn.style.color = "red"; 
    } 
    else if ((b1 == 'x' || b1 == 'X') && (b4 == 'x' || 
        b4 == 'X') && (b7 == 'x' || b7 == 'X')) { 
        document.getElementById('print') 
            .innerHTML = "Player X won"; 
        b2btn.disabled = true; 
        b3btn.disabled = true; 
        b5btn.disabled = true; 
        b6btn.disabled = true; 
        b8btn.disabled = true; 
        b9btn.disabled = true; 
  
        b1btn.style.color = "red"; 
        b4btn.style.color = "red"; 
        b7btn.style.color = "red"; 
    } 
    else if ((b7 == 'x' || b7 == 'X') && (b8 == 'x' || 
        b8 == 'X') && (b9 == 'x' || b9 == 'X')) { 
        document.getElementById('print') 
            .innerHTML = "Player X won"; 
  
        b1btn.disabled = true; 
        b2btn.disabled = true; 
        b3btn.disabled = true; 
        b4btn.disabled = true; 
        b5btn.disabled = true; 
        b6btn.disabled = true; 
  
        b7btn.style.color = "red"; 
        b8btn.style.color = "red"; 
        b9btn.style.color = "red"; 
    } 
    else if ((b3 == 'x' || b3 == 'X') && (b6 == 'x' || 
        b6 == 'X') && (b9 == 'x' || b9 == 'X')) { 
        document.getElementById('print') 
            .innerHTML = "Player X won"; 
  
        b1btn.disabled = true; 
        b2btn.disabled = true; 
        b4btn.disabled = true; 
        b5btn.disabled = true; 
        b7btn.disabled = true; 
        b8btn.disabled = true; 
  
        b3btn.style.color = "red"; 
        b6btn.style.color = "red"; 
        b9btn.style.color = "red"; 
    } 
    else if ((b1 == 'x' || b1 == 'X') && (b5 == 'x' || 
        b5 == 'X') && (b9 == 'x' || b9 == 'X')) { 
        document.getElementById('print') 
            .innerHTML = "Player X won"; 
        b2btn.disabled = true; 
        b3btn.disabled = true; 
        b4btn.disabled = true; 
        b6btn.disabled = true; 
        b7btn.disabled = true; 
        b8btn.disabled = true; 
  
        b1btn.style.color = "red"; 
        b5btn.style.color = "red"; 
        b9btn.style.color = "red"; 
    } 
    else if ((b3 == 'x' || b3 == 'X') && (b5 == 'x' || 
        b5 == 'X') && (b7 == 'x' || b7 == 'X')) { 
        document.getElementById('print') 
            .innerHTML = "Player X won"; 
        b1btn.disabled = true; 
        b2btn.disabled = true; 
        b4btn.disabled = true; 
        b6btn.disabled = true; 
        b8btn.disabled = true; 
        b9btn.disabled = true; 
  
        b3btn.style.color = "red"; 
        b5btn.style.color = "red"; 
        b7btn.style.color = "red"; 
    } 
    else if ((b2 == 'x' || b2 == 'X') && (b5 == 'x' || 
        b5 == 'X') && (b8 == 'x' || b8 == 'X')) { 
        document.getElementById('print') 
            .innerHTML = "Player X won"; 
        b1btn.disabled = true; 
        b2btn.disabled = true; 
        b4btn.disabled = true; 
        b6btn.disabled = true; 
        b7btn.disabled = true; 
        b9btn.disabled = true; 
  
        b2btn.style.color = "red"; 
        b5btn.style.color = "red"; 
        b8btn.style.color = "red"; 
    } 
    else if ((b4 == 'x' || b4 == 'X') && (b5 == 'x' || 
        b5 == 'X') && (b6 == 'x' || b6 == 'X')) { 
        document.getElementById('print') 
            .innerHTML = "Player X won"; 
        b1btn.disabled = true; 
        b2btn.disabled = true; 
        b3btn.disabled = true; 
        b7btn.disabled = true; 
        b8btn.disabled = true; 
        b9btn.disabled = true; 
  
        b4btn.style.color = "red"; 
        b5btn.style.color = "red"; 
        b6btn.style.color = "red"; 
    } 
  
    // Checking of Player X finish 
    // Checking for Player 0 starts, Is player 0 won or 
    // not and after that disabled all the other fields 
    else if ((b1 == 'o' || b1 == 'O') && (b2 == 'o' || 
        b2 == 'O') && (b3 == 'o' || b3 == 'O')) { 
        document.getElementById('print') 
            .innerHTML = "Player O won"; 
        b4btn.disabled = true; 
        b5btn.disabled = true; 
        b6btn.disabled = true; 
        b7btn.disabled = true; 
        b8btn.disabled = true; 
        b9btn.disabled = true; 
  
        b1btn.style.color = "red"; 
        b2btn.style.color = "red"; 
        b3btn.style.color = "red"; 
    } 
    else if ((b1 == 'o' || b1 == 'O') && (b4 == 'o' || 
        b4 == 'O') && (b7 == 'o' || b7 == 'O')) { 
        document.getElementById('print') 
            .innerHTML = "Player O won"; 
        b2btn.disabled = true; 
        b3btn.disabled = true; 
        b5btn.disabled = true; 
        b6btn.disabled = true; 
        b8btn.disabled = true; 
        b9btn.disabled = true; 
  
        b1btn.style.color = "red"; 
        b4btn.style.color = "red"; 
        b7btn.style.color = "red"; 
    } 
    else if ((b7 == 'o' || b7 == 'O') && (b8 == 'o' || 
        b8 == 'O') && (b9 == 'o' || b9 == 'O')) { 
        document.getElementById('print') 
            .innerHTML = "Player O won"; 
        b1btn.disabled = true; 
        b2btn.disabled = true; 
        b3btn.disabled = true; 
        b4btn.disabled = true; 
        b5btn.disabled = true; 
        b6btn.disabled = true; 
  
        b7btn.style.color = "red"; 
        b8btn.style.color = "red"; 
        b9btn.style.color = "red"; 
    } 
    else if ((b3 == 'o' || b3 == 'O') && (b6 == 'o' || 
        b6 == 'O') && (b9 == 'o' || b9 == 'O')) { 
        document.getElementById('print') 
            .innerHTML = "Player O won"; 
        b1btn.disabled = true; 
        b2btn.disabled = true; 
        b4btn.disabled = true; 
        b5btn.disabled = true; 
        b7btn.disabled = true; 
        b8btn.disabled = true; 
        b3btn.style.color = "red"; 
        b6btn.style.color = "red"; 
        b9btn.style.color = "red"; 
    } 
    else if ((b1 == 'o' || b1 == 'O') && (b5 == 'o' || 
        b5 == 'O') && (b9 == 'o' || b9 == 'O')) { 
        document.getElementById('print') 
            .innerHTML = "Player O won"; 
        b2btn.disabled = true; 
        b3btn.disabled = true; 
        b4btn.disabled = true; 
        b6btn.disabled = true; 
        b7btn.disabled = true; 
        b8btn.disabled = true; 
  
        b1btn.style.color = "red"; 
        b5btn.style.color = "red"; 
        b9btn.style.color = "red"; 
    } 
    else if ((b3 == 'o' || b3 == 'O') && (b5 == 'o' || 
        b5 == 'O') && (b7 == 'o' || b7 == 'O')) { 
        document.getElementById('print') 
            .innerHTML = "Player O won"; 
        b1btn.disabled = true; 
        b2btn.disabled = true; 
        b4btn.disabled = true; 
        b6btn.disabled = true; 
        b8btn.disabled = true; 
        b9btn.disabled = true; 
  
        b3btn.style.color = "red"; 
        b5btn.style.color = "red"; 
        b7btn.style.color = "red"; 
    } 
    else if ((b2 == 'o' || b2 == 'O') && (b5 == 'o' || 
        b5 == 'O') && (b8 == 'o' || b8 == 'O')) { 
        document.getElementById('print') 
            .innerHTML = "Player 0 won"; 
        b1btn.disabled = true; 
        b3btn.disabled = true; 
        b4btn.disabled = true; 
        b6btn.disabled = true; 
        b7btn.disabled = true; 
        b9btn.disabled = true; 
  
        b2btn.style.color = "red"; 
        b5btn.style.color = "red"; 
        b8btn.style.color = "red"; 
    } 
    else if ((b4 == 'o' || b4 == 'O') && (b5 == 'o' || 
        b5 == 'O') && (b6 == 'o' || b6 == 'O')) { 
        document.getElementById('print') 
            .innerHTML = "Player O won"; 
        b1btn.disabled = true; 
        b2btn.disabled = true; 
        b3btn.disabled = true; 
        b7btn.disabled = true; 
        b8btn.disabled = true; 
        b9btn.disabled = true; 
  
        b4btn.style.color = "red"; 
        b5btn.style.color = "red"; 
        b6btn.style.color = "red"; 
    } 
  
    // Checking of Player O finish 
    // Here, Checking about Tie 
    else if ((b1 == 'X' || b1 == 'O') && (b2 == 'X'
        || b2 == 'O') && (b3 == 'X' || b3 == 'O') && 
        (b4 == 'X' || b4 == 'O') && (b5 == 'X' || 
            b5 == 'O') && (b6 == 'X' || b6 == 'O') && 
        (b7 == 'X' || b7 == 'O') && (b8 == 'X' || 
            b8 == 'O') && (b9 == 'X' || b9 == 'O')) { 
        document.getElementById('print') 
            .innerHTML = "Match Tie"; 
    } 
    else { 
  
        // Here, Printing Result 
        if (flag == 1) { 
            document.getElementById('print') 
                .innerHTML = "Player X Turn"; 
        } 
        else { 
            document.getElementById('print') 
                .innerHTML = "Player O Turn"; 
        } 
    } 
} 
  */

// Function to reset game 
function myfunc_2() { 
    location.reload(); 
    f11 = f21 = f31 = f41 = f51 = f61 = f71 = f12 = f22 = f32 = f42 = f52 = f62 = f72 = 
		f13 = f23 =f33 = f43 = f53 = f63 = f73 = f14 = f24 = f34 = f44 = f54 = f64 = f74
		 = f15 = f25 = f35 = f45 = f55 = f65 = f75 = f16 = f26 = f36 =f46 = f56 =f66 = f76 = ''; 
} 
  
// Here onwards, functions check turn of the player 
// and put accordingly value X or 0 


function col1(){
	if (flag == 1){
		 //if the col is full, dont switch players
		getLowestRow(1).value= 'X';
		flag = 0;
		
	}else{
		getLowestRow(1).value = 'O';
		flag = 1;
	}
}

function col2(){
	if (flag == 1){
		getLowestRow(2).value = 'X';
		flag = 0
	}else{
		getLowestRow(2).value = 'O';
		flag = 1;
	}
}
function col3(){
	if (flag == 1){
		getLowestRow(3).value = 'X';
		flag = 0
	}else{
		getLowestRow(3).value = 'O';
		flag = 1;
	}
}
function col4(){
	if (flag == 1){
		getLowestRow(4).value = 'X';
		flag = 0
	}else{
		getLowestRow(4).value = 'O';
		flag = 1;
	}
}
function col5(){
	if (flag == 1){
		getLowestRow(5).value = 'X';
		flag = 0
	}else{
		getLowestRow(5).value = 'O';
		flag = 1;
	}
}function col6(){
	if (flag == 1){
		getLowestRow(6).value = 'X';
		flag = 0
	}else{
		getLowestRow(6).value = 'O';
		flag = 1;
	}
}function col7(){
	if (flag == 1){
		getLowestRow(7).value = 'X';
		flag = 0
	}else{
		getLowestRow(7).value = 'O';
		flag = 1;
	}
}
function getLowestRow(col){
	if (col == 1){
		if (document.getElementById("f11").value == ''){
			return f11;
		}else if (document.getElementById("f12").value == ''){
			 return f12;
		}else if (document.getElementById("f13").value == ''){
			return f13;
		}else if (document.getElementById("f14").value == ''){
			return f14;
		}else if (document.getElementById("f15").value == ''){
			return f15;
		}else if (document.getElementById("f16").value == ''){
			return f16;
		}else{
			document.getElementById("print").innerHTML = "Column is full, please choose another";
			
	}
	}
	if (col == 2){
		if (document.getElementById("f21").value == ''){
			return f21;
		}else if (document.getElementById("f22").value == ''){
		return f22;
		}else if (document.getElementById("f23").value == ''){
		return f23;
		}else if (document.getElementById("f24").value == ''){
		return f24;
		}else if (document.getElementById("f25").value == ''){
		return f25;
		}else if (document.getElementById("f26").value == ''){
		return f26;
		}else{
			document.getElementById("print").innerHTML = "Column is full, please choose another";
		}
	}
	if (col == 3){
		if (document.getElementById("f31").value == ''){
			return f31;
		}else if (document.getElementById("f32").value == ''){
		return f32;
		}else if (document.getElementById("f33").value == ''){
		return f33;
		}else if (document.getElementById("f34").value == ''){
		return f34;
		}else if (document.getElementById("f35").value == ''){
		return f35;
		}else if (document.getElementById("f36").value == ''){
		return f36;
		}else{
			document.getElementById("print").innerHTML = "Column is full, please choose another";
		}
	}
	if (col == 4){
		if (document.getElementById("f41").value == ''){
			return f41;
		}else if (document.getElementById("f42").value == ''){
			return f42;
		}else if (document.getElementById("f43").value == ''){
			return f43;
		}else if (document.getElementById("f44").value == ''){
			return f44;
		}else if (document.getElementById("f45").value == ''){
			return f45;
		}else if (document.getElementById("f46").value == ''){
			return f46;
		}else{
			document.getElementById("print").innerHTML = "Column is full, please choose another";
		}
	}
	if (col == 5){
		if (document.getElementById("f51").value == ''){
			return f51;
		}else if (document.getElementById("f52").value == ''){
			return f52;
		}else if (document.getElementById("f53").value == ''){
			return f53;
		}else if (document.getElementById("f54").value == ''){
			return f54;
		}else if (document.getElementById("f55").value == ''){
			return f55;
		}else if (document.getElementById("f56").value == ''){
			return f56;
		}else{
			document.getElementById("print").innerHTML = "Column is full, please choose another";
		}
	}
	if (col == 6){
		if (document.getElementById("f61").value == ''){
			return f61;
		}else if (document.getElementById("f62").value == ''){
			return f62;
		}else if (document.getElementById("f63").value == ''){
			return f63;
		}else if (document.getElementById("f64").value == ''){
			return f64;
		}else if (document.getElementById("f65").value == ''){
			return f65;
		}else if (document.getElementById("f66").value == ''){
			return f66;
		}else {
			document.getElementById("print").innerHTML = "Column is full, please choose another";
		}
	}
	if (col == 7){
		if (document.getElementById("f71").value == ''){
			return f71;
		}else if (document.getElementById("f72").value == ''){
			return f72;
		}else if (document.getElementById("f73").value == ''){
			return f73;
		}else if (document.getElementById("f74").value == ''){
			return f74;
		}else if (document.getElementById("f75").value == ''){
			return f75;
		}else if (document.getElementById("f76").value == ''){
			return f76;
		}else{
			document.getElementById("print").innerHTML = "Column is full, please choose another";
		}
	}
	
}
function checkWin(cell){
	checkDiag(col, row);
	checkH(cell);
	checkV(col, row);
}
function checkV(col, row){
	int k = 1; //k is number in a row in a col
	int help = 0;	
	}
}


