var app = angular.module('myModule');

app.controller('showResults', function($scope, creatingMadLib){
		$scope.pluralnoun = creatingMadLib.outputName();
		console.log(creatingMadLib.outputName());
});