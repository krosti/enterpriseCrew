var enterpriseApp = angular.module('enterprise', ['ngRoute']);

enterpriseApp.config(function($routeProvider) {
	$routeProvider.
	when('/', {
		templateUrl: 'partials/list.html'
	})
		.when('/new', {
			templateUrl: 'partials/edit.html',
			controller: 'NewCtrl'
		})
		.when('/edit/:id', {
			templateUrl: 'partials/edit.html',
			controller: 'EditCtrl'
		})
		.otherwise({
			redirectTo: '/'
		})
});

enterpriseApp.controller('AppCtrl', ['$scope',
	function($scope) {
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
	}
]);

enterpriseApp.controller('NewCtrl', ['$scope', '$location',

	function($scope, $location) {
		$scope.person = {
			name: "",
			description: ""
		},

		$scope.save = function() {
			$scope.crew.push($scope.person);
			$location.path("/");
		}
	}
]);

enterpriseApp.controller('EditCtrl', ['$scope', '$location', '$routeParams',

	function($scope, $location, $routeParams) {
		$scope.person = $scope.crew[$routeParams.id];

		$scope.save = function() {
			$location.path("/");
		}
	},
]);