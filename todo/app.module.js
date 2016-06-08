angular.module('app', ['ui.router']).config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');

	$stateProvider.state('todo', {
		url: '/',
		templateUrl: 'todo/todo.html',
		controller: 'TodoCtrl as vm'
	});
});