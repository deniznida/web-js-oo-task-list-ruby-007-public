'use strict';

function TasksController(){
 this.$addTaskForm = $("#add_task");
 this.$taskDescriptionInput = $("#task_description");
 this.$selectListMenu = $("#select_list");
 this.$taskPriorityInput = $("#task_priority");
 this.$wrapper = $("#wrapper");
}

TasksController.prototype.init = function(){
 var instance = this;
 instance.$addTaskForm.submit(function(e){
   e.preventDefault();
   var listId = instance.$selectListMenu.val();
   var list = List.all[listId];
   var task = new Task(instance.$taskDescriptionInput.val(), instance.$taskPriorityInput.val(), list);
   task.build();
   $(".destroy-task").on("click", function(){
     var taskId = $(this).closest("li").attr('data-id');
     var listId = $(this).closest("ul").attr('data-id');
     if(listId){
     List.all[listId]['tasks'][taskId] = null;
     }
     this.closest("li").remove();
   });
 });
}