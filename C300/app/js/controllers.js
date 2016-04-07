'use strict';

/* controllers */



var c300App = angular.module('c300App', ['ngRoute']);



c300App.config(['$routeProvider', function($routeProvide){

	$routeProvide

		.when('/', {

			templateUrl: 'template/home.html',

			controller: 'UserListCtrl'

		})		

		.when('/about', {

			templateUrl: 'template/about.html',

			controller: 'AboutCtrl'

		})

		.when('/contact', {

			templateUrl: 'template/contact.html',

			controller: 'ContactCtrl'

		}).

		otherwise({

			redirectTo: '/'

		});

}]);





c300App.controller('UserListCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {



	$http.get('js/user.json').success(function(response) {
		$scope.users = response;
		$scope.provider = $scope.users.data.provider;
		$scope.username = $scope.users.data.str_name;
		$scope.short_username = $scope.users.data.short_name;
		$scope.position = $scope.users.data.position;
	});

	$http.get('js/report1.json').success(function(response) {
		$scope.reports = response;	
		$scope.header = $scope.reports.data.header;
		$scope.caption = $scope.reports.data.caption;
		$scope.footer = $scope.reports.data.footer[0];
		$scope.reportObj = [];
		for (var i=0; i< $scope.reports.data.body.length; i++) {
			$scope.reportObj.push($scope.reports.data.body[i]);
		}
	});	

	

}]);













c300App.controller('AboutCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {





}]);



c300App.controller('ContactCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {





}]);







