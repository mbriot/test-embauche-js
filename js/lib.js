var awesomeGameLib = (function($w){

	// Class
	var AwesomeGame = function(){
		this.magicNumber = null;
		this.count = 0;
		this.history = [];
		this.beginTime = Date.now();
	};

	//http://the389.com/9/4/
	//http://the389.com/12/1/
	//http://the389.com/11/2/
	//http://the389.com/9/3/
	//http://the389.com/12/3/

	AwesomeGame.prototype = {

		GenerateMagicNumber : function(){
			this.magicNumber = Math.floor((Math.random() * 1000));
			if(this.magicNumber == 0) this.GenerateMagicNumber();
 		},

		IsEqual : function(number){
			return (this.magicNumber == number);
		},

		IsHigher : function(number){
			return (this.magicNumber > number);
		},

		IsLower : function(number){
			return (this.magicNumber < number);
		},

		GetMagicNumber : function(){
			return this.magicNumber;
		},

		IncrementCounter : function(){
			this.count = this.count + 1;
		},

		AddToHistory : function(number){
			if(this.history.length == 5) this.history.shift();
			this.history.push(number);
		},

		GetHistory : function(){
			return this.history;
		},

		PurgeObject : function(){
			this.history = [];
			this.count = 0;
		},

		GetBeginTime : function(){
			return this.beginTime;
		}
	};

	return {
		AwesomeGame:AwesomeGame
	};
})(window);