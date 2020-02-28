let NUMROWS = 4;
let NUMCOLS = 4;
let NUMCELLS = NUMROWS * NUMCOLS;
let DIFFSCALE = 50;
let score = 0; 
let results = " ";

let createTable = function(){
	
	//FOR LOOP - used when you KNOW how many times to loop something.

	//FOR(initialize control variable; state the boolean expression; update control variable)

	let redColor = Math.floor(Math.random()*256);
	let greenColor = Math.floor(Math.random()*256);
	let blueColor = Math.floor(Math.random()*256);

	let regColor = "rgb(" + redColor + "," + greenColor + "," + blueColor + ")";
	let diffColor = "rgb(" + (redColor + DIFFSCALE) + "," + (greenColor + DIFFSCALE) + "," + (blueColor + DIFFSCALE) + ")";

	let randRow = Math.floor(Math.random() * NUMROWS) + 1;
	let randCols = Math.floor(Math.random() * NUMCOLS) + 1;

	let table = document.createElement("table");

	for(let row = 1; row <= NUMROWS); row++){
		let tableRow = document.createElement("TR");
		
		table.appendChild(tableRow);

		 for(let col = 1; col <= NUMCOLS; col++){

            let cell = document.createElement("TD");
            cell.onclick = function(){checkWin(this)};
            cell.style.backgroundColor = regColor;


            if (row === randRow && col === randCols){
                cell.style.backgroundColor = diffColor;
                cell.id = "correctBox";
            }

            tableRow.appendChild(cell);
        }
	}
}

table.classList.add("aside");

let tableplace = document.getElementById("content");
tableplace.innerHTML = " ";
tableplace.appendChild(table);


let scoreRow = document.createElement("TR");
let scoreRow2 = document.createElement("TR");
let scoreRow3 = document.createElement("TR");
    
let scoreCol = document.createElement("TD");
let scoreCol2 = document.createElement("TD");
let scoreCol3 = document.createElement("TD");
scoreCol3.id = "result";

scoreCol.innerText = "Player's Score";
scoreCol2.innerText = score;
scoreCol3.innerText = results;

scoreCol.classList.add("smallCell");
scoreCol2.classList.add("smallCell");
scoreCol3.classList.add("smallCell");

scoreRow.appendChild(scoreCol);
scoreRow2.appendChild(scoreCol2);
scoreRow3.appendChild(scoreCol3);

let scoreboard = document.createElement("TABLE");
scoreboard.classList.add("aside");
scoreboard.appendChild(scoreRow);
scoreboard.appendChild(scoreRow2);
scoreboard.appendChild(scoreRow3);

tableplace.appendChild(scoreboard);

};

let checkWin = function(cell){
	if(cell.id === "correctBox"){
		results = "You found it!";
		score++;
		if(score >= 10){
			score = 0;
			DIFFSCALE -= 5;
		}
		if(DIFFSCALE <= 0){
			winMenu();
		}else{
			createTable();
		}
	}else{
		results = "Wrong one, lost a point, try again!";
		score = 0;
		DIFFSCALE = 50;
		startMenu();
	}else{
		createTable()
	}
}
};

let winMenu = function(){
	let title = document.createElement("H1");
	title.innerText = "Color Chooser Game";

	let directions = document.createElement("P");
	directions.innerText = "You Won, Good Job!!!! Click the button to play again!";

	let begin = document.createElement("BUTTON");
	begin.innerText = "BEGIN";
	begin.onclick = createTable;

	let display = document.getElementById("content");
	display.innerHTML = " ";
	display.appendChild(title);
	display.appendChild(directions);
	display.appendChild(begin);
};
