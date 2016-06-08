(function(){
	'use strict';

angular.module('app', ['ui.router', 'ngAnimate', 'ui.bootstrap']).config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider.state('todo', {
		url: '/',
		templateUrl: 'todo/todo.html',
		controller: 'TodoCtrl as vm'
	});
});

})();