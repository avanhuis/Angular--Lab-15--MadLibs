var app= angular.module('myModule', [ngRoute]);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			controller: 'simpleController',
			templateUrl: 'view1.html'
		})
		.when('/view2', {
			controller: '',
			templateUrl: 'view2.html'
		})
		.otherwise({
			controller: '',
			templateUrl: 'fourohfour.html'
		})
});

app.controller('simpleController', function($scope, getMadLib){

})