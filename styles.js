var app = angular.module('myModule', []); 
app.controller('myController', function($scope, $interval){ 

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
	 	return word[Math.floor(Math.random() * word.length)];
	};
	function phrase(){
	 	var phrases = [
		 	'no fair!\xA0', 
		 	'that\'s mine!\xA0', 
		 	'she\'s hitting me!\xA0', 
		 	'I\'m hungry!\xA0', 
		 	'I don\'t wanna nap\xA0',
		 	'can we get ice cream?\xA0',
		 	'i want that!\xA0',
		 	'how come?\xA0',
		 	'nuh uh!\xA0',
		 	'yeah huh!\xA0'
	 	];
	 	return phrases[Math.floor(Math.random() * phrases.length)];
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
	 	return classes[Math.floor(Math.random() * classes.length)];
	};
	

	function button(x){
		var item = {
			text: x,
			style1: "",
			style2: ""
		};
		return item;
	};
	function fancyButton(x){
		var item = {
			text: x,
			style1: cssClass(),
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
		return funct[Math.floor(Math.random() * funct.length)];
	};

	$scope.arr = [];

	$scope.addWord= function(){
		$scope.arr.push(Button(words()));
	};
	$scope.addPhrase= function(){
		$scope.arr.push(Button(phrase()));
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