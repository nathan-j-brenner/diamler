angular.module('app').controller('TodoCtrl', Todo);

function Todo(){
	var vm = this;

	vm.completedTasks=[];
	vm.tasks = [];

	vm.addTask = addTask;
	vm.completeTask = completeTask;
	vm.editTask = editTask;
	
	function addTask (task) {
		if (vm.tasks.indexOf(task)!= -1){
			alert("That task is already on the list");
		} else{
			vm.tasks.push(task);
			vm.newTask = '';
		}
	}

	function completeTask (task) {
		vm.completedTasks.push(task);
		var task = vm.tasks.indexOf(task);
		vm.tasks.splice(task, 1);
	}

	function editTask (task) {
		vm.newTask = task;
		var task = vm.tasks.indexOf(task);
		console.log(task);
		vm.tasks.splice(task, 1);
	}
}