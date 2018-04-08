var tedApp = angular.module('tedApp', ['ngRoute']);
tedApp.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'pages/main.html',
			controller  : 'mainController'
		})
		.when('/about', {
			templateUrl : 'pages/about.html',
			controller  : 'aboutController'
		})
		.when('/speaker', {
			templateUrl : 'pages/speaker.html',
			controller  : 'speakerController'
		})
		.when('/schedule', {
			templateUrl : 'pages/schedule.html',
			controller  : 'scheduleController'
		})
		.when('/contact', {
			templateUrl : 'pages/contact.html',
			controller  : 'contactController'
		});
});

tedApp.controller('mainController', function($scope) {
	$scope.message = 'Home Page';
	$scope.email = '[EMAIL]';
});

tedApp.controller('aboutController', function($scope) {
	$scope.message = 'About Us';
});

tedApp.controller('speakerController', function($scope) {
	$scope.message = 'Speaker';
});

tedApp.controller('scheduleController', function($scope) {
	$scope.message = 'Schedule';
});

tedApp.controller('contactController', function($scope) {
	$scope.message = 'Contact';
});

