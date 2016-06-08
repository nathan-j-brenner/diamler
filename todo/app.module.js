console.log('test from app.module.js');
angular.module('app', ['ui.router']).config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/todo');

	$stateProvider.state('todo', {
		url: '/todo',
		templateUrl: 'todo/todo.html',
		controller: 'TodoCtrl as vm'
	});
});