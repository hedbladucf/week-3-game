var dictionary = ['music', 'mountain', 'forest', 'florida', 'sweden', 'golf', 'orlando'];
var totalGuesses = 10;
var wordUsed, input, placeHolder; 

function startGame()
{
	placeHolder = "";
	wordUsed = dictionary[Math.floor(Math.random() * dictionary.length)];
	console.log(wordUsed);

	var buttonText = document.getElementById("button").innerHTML = "Guess";

	for(var i = 0; i < wordUsed.length; i++)
	{
		placeHolder += "_";
	}

	document.getElementById("holder").innerHTML = placeHolder;

}

function refresh()
{
	window.location.reload();
}

function guess()
{
	document.getElementById("status").innerHTML = "Game is in progress.";
	var correctGuess = false;
	var ip = document.getElementById("letterInput");
	input = ip.value.toLowerCase();

	for(var i = 0; i < wordUsed.length; i++)
	{
		if(input == wordUsed.substring(i, i + 1))
		{
			correctGuess = true;
			placeHolder = placeHolder.substring(0, i) + input + placeHolder.substring(i + 1, placeHolder.length);
			document.getElementById("holder").innerHTML = placeHolder;
		}
	}
	if(!correctGuess)
	{
		totalGuesses--;
	}
	document.getElementById("guess").innerHTML = "Total guesses: " + totalGuesses;
	if(placeHolder == wordUsed)
	{
		alert("You WIN!");
	}
	if(totalGuesses == 0)
	{
		alert("You LOSE!")
		startGame();
	}
}
startGame();
document.getElementById("button").onclick = guess;