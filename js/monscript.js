(function(ag,$w){
	var game = new ag.AwesomeGame();

	//element
	var $d = $w.document;
	var $g = function(id){return $d.getElementById(id);};
	var gameArea = $g('game-area');
	var clientGuess = $g('guessed-number-button');
	var clientNumber = $g('guessed-number-field');
	var history = $g('history');
	var messagePanel = $g('message');

	var reaction = function(message,alertClass,number) {
		game.IncrementCounter();
		
		messagePanel.className = alertClass;
		messagePanel.removeChild(messagePanel.firstChild);
		var p = document.createElement('p');
		p.innerHTML = message;
		messagePanel.appendChild(p);

		history.innerHTML = game.GetHistory();
		
		messagePanel.style["display"] = "block";
	};

	var gameEvaluator = function() {
		var nbr = clientNumber.value;
		if(game.GetMagicNumber() == null) 
		{
			game.GenerateMagicNumber();
			alert(game.GetMagicNumber());
			game.PurgeObject();
		}
		if(isNaN(nbr) || nbr === "") 
		{
			var message = "Vous devez entrer un nombre entre 0 et 999";
			reaction(message,"error-message");
		} else 
		{
			game.AddToHistory(nbr);
			if(game.IsEqual(nbr)) 
			{
				var ellapsedTime = parseInt((Date.now() - game.GetBeginTime()) / 1000);
				var message = "Bravo, trouvé en " + ellapsedTime +" secondes ! <form><br> Voulez vous recommencer ? <button type='submit'> Recommencer </button></form>";
				reaction(message,"success-message");
			}
			else if(game.IsHigher(nbr))
			{
				var message = "Plus Haut !";
				reaction(message,"clue-message");
			} 
			else if(game.IsLower(nbr))
			{
				var message = "Moins Haut !";
				reaction(message,"clue-message");
			}
		}	
	};
    
	clientGuess.addEventListener('click',gameEvaluator,false);

	
})(awesomeGameLib,window);
