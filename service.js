var app = angular.module('myModule');

app.factory('creatingMadLib', function(){
	var noun1 = "";
	return {
		saveName: function(pluralnoun){
			noun1 = pluralnoun;
			// inputs[1] = ;
		},
		outputName: function(){
			return noun1;
		}
	};
});