app.controller('MainController', ['$scope', function ($scope) {
	$scope.move = {
		icon: 'img/move.jpg',
		title: 'MOVE',
		developer: 'MOVE, Inc.',
		price: 0.99
	};

	$scope.shutterbugg = {
		icon: 'img/shutterbugg.jpg',
		title: 'Shutterbugg',
		developer: 'Chico Dusty',
		price: 2.99
	};

	$scope.gameboard = {
		icon: 'img/gameboard.jpg',
		title: 'Gameboard',
		developer: 'Armando P.',
		price: 1.99
	};

	$scope.apps = [
		{
			icon: 'icon/move.jpg',
			title: 'MOVE',
			developer: 'MOVE, Inc.',
			price: 0.99
		},
		{
			icon: 'img/shutterbugg.jpg',
			title: 'Shutterbugg',
			developer: 'Chico Dusty',
			price: 2.99
		},
		{
			icon: 'img/move.jpg',
			title: 'Twitter',
			developer: 'Twitter, Inc.',
			price: 0
		},
		{
			icon: 'img/move.jpb',
			title: 'Apple Maps is good and definitely doesn\'t suck',
			developer: 'Smart people',
			price: 0	
		}
	];
}]);