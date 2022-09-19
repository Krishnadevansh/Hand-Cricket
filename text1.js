var tot = 0;
function score(){
	var s = uchoice;
	tot += s;
	var h = "Half Century";
	var c = "Century";
	document.getElementById('score').innerHTML = tot;
	if(tot >= 50 && tot <= 55){
		document.getElementById('achievement').innerHTML = h;
	}
	else if(tot >= 100 && tot <= 105){
		document.getElementById('achievement').innerHTML = c;
	}
	else{
		document.getElementById('achievement').innerHTML = "";
	}
}
function play1(){
	uchoice = 1;
	var cchoice = Math.floor(Math.random() * 6) + 1;
	document.getElementById("userchoiceshow").innerHTML = uchoice;
	document.getElementById("computerchoiceshow").innerHTML = cchoice;
	if(cchoice === 1){
		var o = "Out!"
		document.getElementById("comments").innerHTML = o;
		tot = 0;
	}
	else{
		var c = "A single taken";
		document.getElementById("comments").innerHTML = c;
		score();
	}
}

function play2(){
	uchoice = 2;
	var cchoice = Math.floor(Math.random() * 6) + 1;
	document.getElementById("userchoiceshow").innerHTML = uchoice;
	document.getElementById("computerchoiceshow").innerHTML = cchoice;
	if(cchoice === 2){
		var o = "Out!"
		document.getElementById("comments").innerHTML = o;
		tot = 0;
	}
	else{
		var c = "batsman looking for two runs...";
		document.getElementById("comments").innerHTML = c;
		score();
	}
}

function play3(){
	uchoice = 3;
	var cchoice = Math.floor(Math.random() * 6) + 1;
	document.getElementById("userchoiceshow").innerHTML = uchoice;
	document.getElementById("computerchoiceshow").innerHTML = cchoice;
	if(cchoice === 3){
		var o = "Out!"
		document.getElementById("comments").innerHTML = o;
		tot = 0;
	}
	else{
		var c = "batsmen are quick between the wickets....3 runs taken...";
		document.getElementById("comments").innerHTML = c;
		score();
	}
}

function play4(){
	uchoice = 4;
	var cchoice = Math.floor(Math.random() * 6) + 1;
	document.getElementById("userchoiceshow").innerHTML = uchoice;
	document.getElementById("computerchoiceshow").innerHTML = cchoice;
	if(cchoice === 4){
		var o = "Out!"
		document.getElementById("comments").innerHTML = o;
		tot = 0;
	}
	else{
		var c = "ball races to the boundary line..... 4 it is....";
		document.getElementById("comments").innerHTML = c;
		score();
	}
}

function play5(){
	uchoice = 5;
	var cchoice = Math.floor(Math.random() * 6) + 1;
	document.getElementById("userchoiceshow").innerHTML = uchoice;
	document.getElementById("computerchoiceshow").innerHTML = cchoice;
	if(cchoice === 5){
		var o = "Out!"
		document.getElementById("comments").innerHTML = o;
		tot = 0;
	}
	else{
		var c = "No ball and a boundary...";
		document.getElementById("comments").innerHTML = c;
	    score();
	}
}

function play6(){
	uchoice = 6;
	var cchoice = Math.floor(Math.random() * 6) + 1;
	document.getElementById("userchoiceshow").innerHTML = uchoice;
	document.getElementById("computerchoiceshow").innerHTML = cchoice;
	if(cchoice === 6){
		var o = "Out!"
		document.getElementById("comments").innerHTML = o;
		tot = 0;
	}
	else{
		var c = "Over the boundary line.... 6 it is";
		document.getElementById("comments").innerHTML = c;
		score();
	}
}