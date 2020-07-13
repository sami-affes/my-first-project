var text;
				var todos = [];
				 function addList(){//when you press on the button the data is added to list 
				 	text = $("#input").val();
 					if(text.length>0){
 						$(".Completed").append("<h3><li>"+text+"</li></h3>")
 					
 						var todo = {
                todo: $('li').last().text()  // get value only of the last li added into the local storage
            }
            todos.push(todo);
            localStorage.setItem('todos', JSON.stringify(todos))

 					$("#input").val(""); 
 					}
 					$('#input').val("");
 					
 				}
$(document).ready(function() {  
	$('#delete').click(function() { //when you press on the button the list is cleared
   	console.log('done')
            $('.Completed').html('')
            localStorage.clear();  
            $('.Completed').hide()   
            todos = []                
 
        })  
})
 				      

 $(document).ready(function(){
  $("#add").on("click",addList);// when you press the button add the data is aded to the list 
    });

if(localStorage.getItem('todos')) {
	todos = JSON.parse(localStorage.getItem('todos'))//get the item from the local storage 
} else {
	todos = []
}

document.addEventListener('DOMContentLoaded', function reload (){// when your refresh the page the data is still there
           for(var i=0;i<todos.length;i++){
	 $('.Completed').append('<h3><li>' +todos[i]["todo"] + '</li></h3>')

}
        });















