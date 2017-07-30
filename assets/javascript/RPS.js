// function RPSplayer(){
// 	this.win = 0;
// 	this.lose = 0;
// }
class RPS{
	constructor(){
		// this.player1 = player1;
		// this.player2 = player2;
		// Score of players involed player1 wins, ties, player2 wins
		this.score = [0,0,0];
	}

	playMatch(player1Choice, player2Choice)
	{
		if(player1Choice === player2Choice){
			this.score[1]++;
		}
		else if (player1Choice === "r" && player2Choice === "s"){
			this.score[0]++;
		}
		else if (player1Choice === "r" && player2Choice === "p"){
			this.score[2]++;
		}
		else if (player1Choice === "s" && player2Choice === "p"){
			this.score[0]++;
		}
		else if (player1Choice === "s" && player2Choice === "r"){
			this.score[2]++;
		}
		else if (player1Choice === "p" && player2Choice === "r"){
			this.score[0]++;
		}
		else if (player1Choice === "p" && player2Choice === "s"){
			this.score[2]++;
		}
		else{ 
			//Add modals
		}
	}
	get score(){
		return this.score;
	}
}