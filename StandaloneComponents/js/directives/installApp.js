app.directive('installApp', function() {
	return {
		restrict: 'E',
		scope: {},
		templateUrl: 'js/directives/installApp.html',
		// create interactive directives that respond to actions
		// scope gets directive's scope and $scope from controller is availabile here
		// element is the HTML element
		// attrs is the HTML elemment's attributes
		link: function(scope, element, attrs) {
			scope.buttonText = 'Install',
			scope.installed = false,
			scope.download = function() {
				element.toggleClass('btn-active');
				if (scope.installed) {
					scope.buttonText = 'Install';
					scope.installed = false;
				} else {
					scope.buttonText = 'Uninstall';
					scope.installed = true;
				}
			};
		}
	};
});