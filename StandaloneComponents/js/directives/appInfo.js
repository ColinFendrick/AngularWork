app.directive('appInfo', function () {
	return {
		// restrict specifies how this will be used. 'E' means an HTML element
		restrict: 'E',
		// pass information through an attribute named info. 
		scope: {
			info: '='
		},
		// where we get the template (HTML in this case) for scope
		templateUrl: 'js/directives/appInfo.html'
	};
});
