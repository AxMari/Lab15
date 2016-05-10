var app = angular.module('myModule', []); 
app.controller('myController', function($scope, $interval){ 

	function words(){
	 	var word = ['what?\xA0', 'NO!\xA0', 'mine!\xA0', 'waaaaahhhhh!!!\xA0', 'gimme!\xA0'];
	 	return word[Math.floor(Math.random() * word.length)];
	};

	function cssClass(){
	 	var classes = [
	 		'red',
	 		'blue',
	 		'green',
	 		'big',
	 		'small',
	 		'arial', 
	 		'courier', 
	 		'bold',
	 		'yellow',
	 		'aquamarine',
	 		'blackback',
	 		'violetback',
	 		'pinkback'
	 	];
	 	return classes[Math.floor(Math.random() * classes.length)];
	};
	
	function phrase(){
	 	var phrases = [
	 	'no fair!\xA0', 
	 	'thats mine!\xA0', 
	 	'shes hitting me!\xA0', 
	 	'Im hungry!\xA0', 
	 	'I dont wanna nap\xA0' 
	 	];
	 	return phrases[Math.floor(Math.random() * phrases.length)];
	};
	function wordButton(){
		var item = {
			text: words(),
			style1: "",
			style2: ""
		};
		return item;
	};
	function wordFancyButton(){
		var item = {
			text: words(),
			style1: cssClass(),
			style2: cssClass()
		};
		return item;
	};
	function phraseButton(){
		var item = {
			text: phrase(),
			style1: "",
			style2: ""
		};
		return item;
	};
	function phraseFancyButton(){
		var item = {
			text: phrase(),
			style1: cssClass(),
			style2: cssClass()
		};
		return item;
	};
	function functions(){
		var funct = [
		wordButton(),
		wordFancyButton(),
		phraseButton(),
		phraseFancyButton()
		];
		return funct[Math.floor(Math.random() * funct.length)];
	};


	$scope.arr = [];

	$scope.addWord= function(){
		$scope.arr.push(wordButton());
	};
	$scope.addPhrase= function(){
		$scope.arr.push(phraseButton());
	};
	$scope.addFancyStyle= function(){
		$scope.arr.push(wordFancyButton());
	};
	$scope.addFancyPhrase= function(){
		$scope.arr.push(phraseFancyButton());
	};
	$scope.bigButton= function(){	
		$scope.arr.push(functions());
	};

});