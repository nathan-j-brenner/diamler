angular.module('app').controller('TodoCtrl', Todo);

function Todo(){
	var vm = this;
	vm.list = [];
	vm.add = function(task){
		vm.list.push(task);
		vm.newTask = '';
	}
	vm.edit = function(task){
		vm.newTask = task;
		var task = vm.list.indexOf(task);
		console.log(task);
		vm.list.splice(task, 1);
	}
	vm.complete = function(task){
		vm.completed.push(task);
		var task = vm.list.indexOf(task);
		vm.list.splice(task, 1);
	}
	vm.completed=[];
}