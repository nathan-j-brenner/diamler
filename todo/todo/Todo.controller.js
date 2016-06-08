angular.module('app').controller('TodoCtrl', TodoCtlr);

function TodoCtlr(){
	var vm = this;

	vm.completedTasks=[];
	vm.tasks = [];

	// time picker
	vm.dueTime = new Date();
	vm.hstep = 1;
	vm.mstep = 15;
	vm.isMeridian = true;
	vm.toggleMeridian = toggleMeridian;

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

	function toggleMeridian() {
		vm.isMeridian = !vm.isMeridian;
	}
}