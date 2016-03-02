var app = angular.module('myModule', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			controller: 'getMadLib',
			templateUrl: 'view1.html'
		})
		.when('/view2', {
			controller: 'showResults',
			templateUrl: 'view2.html'
		})
		.otherwise({
			templateUrl: 'fourohfour.html'
		})
});