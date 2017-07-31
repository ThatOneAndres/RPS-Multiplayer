
function playMatch(player1, player2)
	{
		if(player1.choice === player2Choice){
			player1.ties++;
			player2.ties++;

		}
		else if (player1.choice === "r" && player2.choice === "s"){
			player1.wins++;
			player2.losses++;
		}
		else if (player1.choice === "r" && player2.choice === "p"){
			player1.losses++;
			player2.wins++;
		}
		else if (player1.choice === "s" && player2.choice === "p"){
			player1.wins++;
			player2.losses++;
		}
		else if (player1.choice === "s" && player2.choice === "r"){
			player1.losses++;
			player2.wins++;
		}
		else if (player1.choice === "p" && player2.choice === "r"){
			player1.wins++;
			player2.losses++;
		}
		else if (player1.choice === "p" && player2.choice === "s"){
			player1.losses++;
			player2.wins++;
		}
	}

function player(name, position){
	this.name = name;
	this.wins  = 0;
	this.losses = 0;
	this.ties = 0;
	this.position = position;
	this.choice;
	function select(choice){
		this.choice = choice;
	}
	}
	// function RPSplayer(){
// 	this.win = 0;
// 	this.lose = 0;
// }
// class RPS{
// 	constructor(player1, player2){
// 		this.player1 = player1;
// 		this.player2 = player2;
// 		// Score of players involed player1 wins, ties, player2 wins
// 		this.score = [0,0,0];
// 	}

// 	playMatch(player1Choice, player2Choice)
// 	{
// 		if(player1Choice === player2Choice){
// 			this.score[1]++;
// 		}
// 		else if (player1Choice === "r" && player2Choice === "s"){
// 			this.score[0]++;
// 		}
// 		else if (player1Choice === "r" && player2Choice === "p"){
// 			this.score[2]++;
// 		}
// 		else if (player1Choice === "s" && player2Choice === "p"){
// 			this.score[0]++;
// 		}
// 		else if (player1Choice === "s" && player2Choice === "r"){
// 			this.score[2]++;
// 		}
// 		else if (player1Choice === "p" && player2Choice === "r"){
// 			this.score[0]++;
// 		}
// 		else if (player1Choice === "p" && player2Choice === "s"){
// 			this.score[2]++;
// 		}
// 		else{ 
// 			//Add modals
// 		}
// 	}
// }