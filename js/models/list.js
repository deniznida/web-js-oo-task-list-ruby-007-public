'use strict';

function List(title) {
	this.tasks = [];
	this.id = List.all.length;
	this.title = title;
	List.all.push(this);
}

List.all = [];

List.prototype.addTask = function(task) {

	this.tasks.push(task);
};

List.prototype.listEl = function() {
	var div = "<div class=\"list\"><h2><button class=\"destroy-list\">x</button>" + " " + this.title + "</h2><ul id=\"list-" + this.id + "\" data-id=\"" + this.id + "\"></ul></div>";
	return div;
};

List.prototype.optionEl = function() {
	var option = 	"<option value=\"" + this.id + "\">"+ this.title + "</option>";
	return option;
};

List.prototype.build = function() {
	$("#lists").append(this.listEl());
	$("#select_list").append(this.optionEl());
};