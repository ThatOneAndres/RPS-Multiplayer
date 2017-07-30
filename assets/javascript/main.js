


$(document).ready(function(){
	$(".enter-btn").on("click",function(event){
		event.preventDefault();
		$(".entry").remove();

		$(".header").after($('<div class = "row text-center" id = "result">'));
		$("#result").text("Choose Your Move");
		var game = $('<div class = "row text-center" id = "game">');
		var leftPlayer = $('<div class = "col-md-6 player" id = "leftPlayer">');
		var leftPlayerName = $('<div class = "row name">');
		leftPlayerName.text("You");
		leftPlayer.append(leftPlayerName)

		var rightPlayer = $('<div class = "col-md-6 player" id = "rightPlayer">');
		var rightPlayerName = $('<div class = "row name">');
		rightPlayerName.text("Oppenent");
		rightPlayer.append(rightPlayerName)

		var leftRPSImages = $('<div class = "row left-images">');
		leftRPSImages.append($('<img class= "RPSimages image-responsive" src="assets/images/rock.png">'))
		leftRPSImages.append($('<img class= "RPSimages image-responsive" src="assets/images/paper.png">'))
		leftRPSImages.append($('<img class= "RPSimages image-responsive" src="assets/images/scissors.png">'))
		leftPlayer.append(leftRPSImages)

		var rightRPSImages = $('<div class = "row left-images">');
		rightRPSImages.append($('<img class= "RPSimages image-responsive" src="assets/images/rock.png">'))
		rightRPSImages.append($('<img class= "RPSimages image-responsive" src="assets/images/paper.png">'))
		rightRPSImages.append($('<img class= "RPSimages image-responsive" src="assets/images/scissors.png">'))
		rightPlayer.append(rightRPSImages);

		var leftResult = $('<div class = "row" id = "leftResult">');
		leftResult.text("Wins: 0 Ties: 0 Losses: 0 ");
		leftPlayer.append(leftResult);

		var rightResult = $('<div class = "row" id = "rightResult">');
		rightResult.text("Wins: 0 Ties: 0 Losses: 0 ");
		rightPlayer.append(rightResult);

		game.append(leftPlayer);
		game.append(rightPlayer);
		$("#result").after(game);
	});
});