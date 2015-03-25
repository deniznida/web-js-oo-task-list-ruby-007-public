'use strict';

function Task(description, priority, list){
	this.description = description;
	this.priority = priority;
	this.list = list;
	this.id = this.list.tasks.length;
	this.list.addTask(this);
}

Task.prototype.liEl = function() {
	var li = "<li data-id=\"" + this.id + "\"><button class=\"destroy-task\">x</button> " + this.description + ", " + this.priority + "</li>";
	return li;
};
Task.prototype.build = function() {

	$("#list-" + this.list.id).append(this.liEl());
};