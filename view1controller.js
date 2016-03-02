var app = angular.module('myModule');

app.controller('getMadLib', function($scope, creatingMadLib){
	$scope.save = function(){
		creatingMadLib.saveName($scope.pluralnoun);
	};
});