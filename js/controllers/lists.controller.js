'use strict';

function ListsController(){
 this.$addListForm = $("#add_list");
 this.$listTitleInput = $("#list_title");
 this.$selectListMenu = $("#select_list");
 this.$addTaskForm = $("#add_task");
 this.$wrapper = $("#wrapper");
}

ListsController.prototype.init = function(){
 var instance = this;
 instance.$addTaskForm.hide();
 instance.$addListForm.submit(function(e){
   e.preventDefault();
   instance.$addTaskForm.show();
   var list = new List(instance.$listTitleInput.val());
   list.build();
   $(".destroy-list").on("click", function() {
     this.closest("div").remove();
    
   });
 });
};
