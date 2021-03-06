angular.module('myModule', [])
       .controller('myController', function($scope, $interval){ 

    function randomize(x){
    	return x[Math.floor(Math.random() * x.length)];
    };

	function words(){
	 	var word = [
		 	'what?\xA0', 
		 	'NO!\xA0', 
		 	'mine!\xA0', 
		 	'MINE!\xA0',
		 	'waaaaahhhhh!!!\xA0', 
		 	'gimme!\xA0',
		 	'Steven Universe\xA0',
		 	'why?\xA0',
		 	'why?\xA0'
	 	];
	 	return randomize(word);
	};
	function phrase(){
	 	var phrases = [
		 	'no fair!\xA0', 
		 	'that\'s mine!\xA0', 
		 	'they hit me!\xA0', 
		 	'I\'m hungry!\xA0', 
		 	'I don\'t wanna nap\xA0',
		 	'can we get ice cream?\xA0',
		 	'i want that!\xA0',
		 	'how come?\xA0',
		 	'nuh uh!\xA0',
		 	'yeah huh!\xA0'
	 	];
	 	return randomize(phrases);
	};
	function cssClass(){
	 	var classes = [
	 		'red',
	 		'blue',
	 		'green',
	 		'big',
	 		'reallybig',
	 		'small',
	 		'arial', 
	 		'courier', 
	 		'bold',
	 		'yellow',
	 		'cursive',
	 		'aquamarine',
	 		'blackback',
	 		'violetback',
	 		'pinkback'
	 	];
	 	return randomize(classes);
	};
	

	function button(x){
		var item = {
			text: x,
			style1: "",
			style2: "",
			style3: ""
		};
		return item;
	};
	function fancyButton(x){
		var item = {
			text: x,
			style1: cssClass(),
			style2: cssClass(),
			style2: cssClass()
		};
		return item;
	};

	function functions(){
		var funct = [
		button(words()),
		button(phrase()),
		fancyButton(words()),
		fancyButton(phrase())
		];
		return randomize(funct);
	};

	$scope.arr = [];

	$scope.addWord= function(){
		$scope.arr.push(button(words()));
	};
	$scope.addPhrase= function(){
		$scope.arr.push(button(phrase()));
	};
	$scope.addFancyStyle= function(){
		$scope.arr.push(fancyButton(words()));
	};
	$scope.addFancyPhrase= function(){
		$scope.arr.push(fancyButton(phrase()));
	};
	$scope.bigButton= function(){	
		$scope.arr.push(functions());
	};

});