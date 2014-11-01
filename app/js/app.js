'use strict';

angular.module('app', [
	'app.controllers',
	'app.services',
	'ngRoute'
	])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'app/partials/app.html',
		controller: 'MainController'
	});
}]);