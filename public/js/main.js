var serverURL = "/public/index.php/api";
var app = angular.module('sobic', ["ngCookies",'ui.bootstrap', 'ngRoute', 'ngAnimate', 'angular-parallax']);
clicked = false;

app.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
	
	$locationProvider.html5Mode({
		enabled: true,
  		requireBase: false
	}).hashPrefix = '!';

	/* Es importante que estas líneas siempre esten al final para que funcione el scaffolg. */
	$routeProvider.when('/', {
		templateUrl: 'partials/pages/list.html',
		controller: 'MenuController'
	}).otherwise({
		redirectTo: '/'
	});
}]);
