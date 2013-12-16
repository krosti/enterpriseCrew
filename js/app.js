var enterpriseApp = angular.module('enterprise', ['ngRoute']);

enterpriseApp.config(function($routeProvider){
	$routeProvider.
		when('/', {
			templateUrl: 'partials/list.html'
		})
		.when('/new', {
			templateUrl: 'partials/edit.html'
		})
		.otherwise({ redirectTo: '/' })
});

enterpriseApp.controller('AppCtrl',['$scope', function ($scope){
	$scope.crew = [{
		name: "Picard",
		description: "Captain"
	}, {
		name: "Messi",
		description: "God"
	}, {
		name: "Ronaldo",
		description: "I dont know"
	}, {
		name: "Maradona",
		description: "God God!"
	}];
}]);