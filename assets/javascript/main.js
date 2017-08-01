  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyB5Fv4dvjSLOsw0rZ5M_91tjSJnRduPzpY",
    authDomain: "rps-game-b3ed0.firebaseapp.com",
    databaseURL: "https://rps-game-b3ed0.firebaseio.com",
    projectId: "rps-game-b3ed0",
    storageBucket: "rps-game-b3ed0.appspot.com",
    messagingSenderId: "1009660396441"
  };
  firebase.initializeApp(config);
  var playerSide;
  var database = firebase.database();
  // database.ref("inGamePlayers").set({isCalculating: false});
function firstPlayerEnter(playerName){

	var leftPlayerName = $('<div class = "row name" id = "leftName">');
	leftPlayerName.text(playerName);
	$("#leftPlayer").append(leftPlayerName)

	var leftRPSImages = $('<div class = "row left-images">');
	leftRPSImages.append($('<img class= "RPSimages image-responsive rock" value = "rock" src="assets/images/rock.png">'))
	leftRPSImages.append($('<img class= "RPSimages image-responsive paper" value = "paper" src="assets/images/paper.png">'))
	leftRPSImages.append($('<img class= "RPSimages image-responsive scissors" value = "scissors" src="assets/images/scissors.png">'))
	$("#leftPlayer").append(leftRPSImages)

	var leftResult = $('<div class = "row" id = "leftResult">');
	leftResult.text("Wins: 0 Ties: 0 Losses: 0 ");
	$("#leftPlayer").append(leftResult);

	var rightPlayerName = $('<div class = "row name" id = "rightName">');
	rightPlayerName.text("Waiting For Opponent...")
	$("#rightPlayer").append(rightPlayerName);

	var rightRPSImages = $('<div class = "row right-images">');
	rightRPSImages.append($('<img class= "RPSimages image-responsive rock" style = "display: none" value = "rock" src="assets/images/rock.png">'))
	rightRPSImages.append($('<img class= "RPSimages image-responsive paper" style = "display: none" value = "paper" src="assets/images/paper.png">'))
	rightRPSImages.append($('<img class= "RPSimages image-responsive scissors" style = "display: none" value = "scissors" src="assets/images/scissors.png">'))
	$("#rightPlayer").append(rightRPSImages);

	var rightResult = $('<div class = "row" style = "display: none" id = "rightResult">');
	rightResult.text("Wins: 0 Ties: 0 Losses: 0 ");
	$("#rightPlayer").append(rightResult);
}

function secondPlayerEnter(playerName){

	var rightPlayerName = $('<div class = "row name" id = "rightName">');
	rightPlayerName.text(playerName);
	$("#rightPlayer").append(rightPlayerName)

	var rightRPSImages = $('<div class = "row right-images">');
	rightRPSImages.append($('<img class= "RPSimages image-responsive rock" value = "rock" src="assets/images/rock.png">'))
	rightRPSImages.append($('<img class= "RPSimages image-responsive paper" value = "paper" src="assets/images/paper.png">'))
	rightRPSImages.append($('<img class= "RPSimages image-responsive scissors" value = "scissors" src="assets/images/scissors.png">'))
	$("#rightPlayer").append(rightRPSImages);

	var rightResult = $('<div class = "row" id = "rightResult">');
	rightResult.text("Wins: 0 Ties: 0 Losses: 0 ");
	$("#rightPlayer").append(rightResult);

	var leftPlayerName = $('<div class = "row name" id = "leftName">');
	leftPlayerName.text("Waiting For Opponent...");
	$("#leftPlayer").append(leftPlayerName);

	var leftRPSImages = $('<div class = "row left-images">');
	leftRPSImages.append($('<img class= "RPSimages image-responsive rock" style = "display: none" value = "rock" src="assets/images/rock.png">'))
	leftRPSImages.append($('<img class= "RPSimages image-responsive paper" style = "display: none" value = "paper" src="assets/images/paper.png">'))
	leftRPSImages.append($('<img class= "RPSimages image-responsive scissors" style = "display: none" value = "scissors" src="assets/images/scissors.png">'))
	$("#leftPlayer").append(leftRPSImages);

	var leftResult = $('<div class = "row" style = "display: none" id = "leftResult">');
	leftResult.text("Wins: 0 Ties: 0 Losses: 0 ");
	$("#leftPlayer").append(leftResult);

}

function updateResult(){

}  

function checkWinner(entry){

		if(entry.val().player1.choice === entry.val().player2.choice){
			database.ref("inGamePlayers/player1/ties").set(parseInt(entry.val().player1.ties)+1);
			database.ref("inGamePlayers/player2/ties").set(parseInt(entry.val().player2.ties)+1);

		}
		else if (entry.val().player1.choice === "rock" && entry.val().player2.choice === "scissors"){
			database.ref("inGamePlayers/player1/wins").set(parseInt(entry.val().player1.wins)+1);
			database.ref("inGamePlayers/player2/losses").set(parseInt(entry.val().player2.losses)+1);
		}
		else if (entry.val().player1.choice === "rock" && entry.val().player2.choice === "paper"){
			database.ref("inGamePlayers/player1/losses").set(parseInt(entry.val().player1.losses)+1);
			database.ref("inGamePlayers/player2/wins").set(parseInt(entry.val().player2.wins)+1);
		}
		else if (entry.val().player1.choice === "scissors" && entry.val().player2.choice === "paper"){
			database.ref("inGamePlayers/player1/wins").set(parseInt(entry.val().player1.wins)+1);
			database.ref("inGamePlayers/player2/losses").set(parseInt(entry.val().player2.losses)+1);
		}
		else if (entry.val().player1.choice === "scissors" && entry.val().player2.choice === "rock"){
			database.ref("inGamePlayers/player1/losses").set(parseInt(entry.val().player1.losses)+1);
			database.ref("inGamePlayers/player2/wins").set(parseInt(entry.val().player2.wins)+1);
		}
		else if (entry.val().player1.choice === "paper" && entry.val().player2.choice === "rock"){
			database.ref("inGamePlayers/player1/wins").set(parseInt(entry.val().player1.wins)+1);
			database.ref("inGamePlayers/player2/losses").set(parseInt(entry.val().player2.losses)+1);
		}
		else if (entry.val().player1.choice === "paper" && entry.val().player2.choice === "scissors"){
			database.ref("inGamePlayers/player1/losses").set(parseInt(entry.val().player1.losses)+1);
			database.ref("inGamePlayers/player2/wins").set(parseInt(entry.val().player2.wins)+1);
		}
}

function beginGame(){
	console.log("beginGame");
	database.ref("inGamePlayers").once("value").then(function(snapshot){
		if (snapshot.val().turn%2 === 0){
			$("#leftResult").text("Wins: "+snapshot.val().player1.wins+" Ties: "+snapshot.val().player1.ties+" Losses: "+snapshot.val().player1.losses);
			$("#rightResult").text("Wins: "+snapshot.val().player2.wins+" Ties: "+snapshot.val().player2.ties+" Losses: "+snapshot.val().player2.losses);
			if (playerSide === "left"){
			$(".left-images	.RPSimages").css("display", "inline");
			$("#leftPlayer").css("border", "5px solid blue");
				$(".left-images .RPSimages").hover(function(){
					$(this).css("border", "3px solid yellow")
				},function(){
					$(this).css("border", "");
				});
				$(".left-images").delegate(".RPSimages","click",function(){
					$(".left-images .RPSimages").off('hover');
					database.ref("inGamePlayers/player1/choice").set($(this).attr("value"));
					$("#leftPlayer").css("border", "5px solid black");
					$(".left-images .RPSimages").css("display", "none");
					$(this).css("display", "inline");
					database.ref("inGamePlayers/turn").set(parseInt(snapshot.val().turn)+1);
				})
			}
			// }		
		}else{
			if (playerSide === "right"){
			$(".right-images .RPSimages").css("display", "inline");
			$("#rightPlayer").css("border", "5px solid blue");
			$(".right-images .RPSimages").hover(function(){
				$(this).css("border", "3px solid yellow")
			},function(){
				$(this).css("border", "");
			});
			}

			$(".right-images").delegate(".RPSimages","click",function(){
				$(".right-images .RPSimages").off('hover');
				database.ref("inGamePlayers/player2/choice").set($(this).attr("value"));
				$("#rightPlayer").css("border", "5px solid black");
				$(".right-images .RPSimages").css("display", "none");

				database.ref("inGamePlayers/turn").set(parseInt(snapshot.val().turn)+1);
				// $(this).css("display", "inline");
				// setTimeout(function(){
				// 	database.ref("inGamePlayers").once("value").then(function(newSnapshot){
				// 		console.log(newSnapshot.val());
				// 		$(".right-images .RPSimages [value ='" + newSnapshot.val().player2.choice+"']").css("display", "inline");

				// 		checkWinner(snapshot,newSnapshot.val().player2.choice);
				// 		$(this).css("display","none");

				// 	})
				// },3000);
				

			})
		}
	});
}

$(document).ready(function(){
	$(".enter-btn").on("click",function(event){
		event.preventDefault();
		var RPSGame;

		var playerName = $("#playerName").val();
		$("#playerName").val("");
		$(".entry").remove();

		$(".header").after($('<div class = "row text-center" id = "result">'));
		$("#result").text("Choose Your Move");
		var game = $('<div class = "row text-center" id = "game">');

		var leftPlayer = $('<div class = "col-md-6 player" id = "leftPlayer">');
		game.append(leftPlayer);

		var rightPlayer = $('<div class = "col-md-6 player" id = "rightPlayer">');
		game.append(rightPlayer);
		$("#result").after(game);



		database.ref("inGamePlayers").once("value").then(function(snapshot){
			if (snapshot.numChildren() === 0){
				playerSide = "left";
				firstPlayerEnter(playerName);
				database.ref("inGamePlayers/player1").set({
					name: playerName,
					wins: 0,
					losses: 0,
					ties:0 ,
					choice: "none"

				});
			}else if (snapshot.numChildren() === 1){
				if (snapshot.val().player1 !== null){
					playerSide = "right";
					secondPlayerEnter(playerName);
					database.ref("inGamePlayers/player2").set({
						name: playerName,
						wins: 0,
						losses: 0,
						ties: 0,
						choice: "none"
					});
					
				}else{
					playerSide = "left";
					firstPlayerEnter(playerName);
					database.ref("inGamePlayers/player1").set({
						name: playerName,
						wins: 0,
						losses: 0,
						ties:0 ,
						choice: "none"
					});	

				}
				database.ref("inGamePlayers/turn").set(0);
			}else{
				// Eventually plan to move player from queue to inGame when one disconnects
				database.ref("queue").set({name: playerName});
			}

		});

	});

		database.ref("inGamePlayers/turn").on("value",function(snapshot){
			console.log(snapshot.val());
			if(snapshot.val() !== null){
				database.ref("inGamePlayers").once("value").then(function(parentSnapshot){
				$("#rightName").text(parentSnapshot.val().player2.name);
				$("#leftName").text(parentSnapshot.val().player1.name);
				$("#leftResult").css("display","inline");
				$("#rightResult").css("display","inline");
			});
				if (snapshot.val()%2 === 0 && snapshot.val() > 0){
					database.ref("inGamePlayers").once("value").then(function(newSnapshot){
						console.log(newSnapshot.val());
						var leftImagePath = ".left-images ." + newSnapshot.val().player1.choice;
						$(leftImagePath).css("display", "inline");
						var rightImagePath = ".right-images ." + newSnapshot.val().player2.choice;
						$(rightImagePath).css("display", "inline");
						checkWinner(newSnapshot);
						// $(this).css("display","none");
					})
					setTimeout(function(){
						beginGame();
						$(".RPSimages").css("display","none");
				},3000);

				}else{
					beginGame();
				}
			}
		});

	database.ref("inGamePlayers").onDisconnect().remove();
});