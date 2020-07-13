var text;
				var todos = [];
				 function addList(){
				 	text = $("#input").val();
				 	todos = [];
 					if(text.length>0){
 						$(".Completed").append("<li>"+text+"</li>")
 					$("#input").val(""); 
 					}
 					$('#input').val("");
 					
 				}

 $(document).ready(function(){
  $("#add").on("click",addList);
    });



// local storage
//saving data

function makeCounter() {
  var count = 0;
  return function() {
    var t = count;
    count = count + 1;
    return t;
  };
}

var generateID = makeCounter();

todos.push({text:text,complete:false, id: generateID()});
localStorage.setItem("todos",JSON.stringify(todos));


for(var i=0;i<todos.length;i++){
	 $('.Completed').append('<div><h3>' +todos[i]["todo"] + '</h3></div>')
	 var todo = localStorage.getItem(JSON.parse(todos));
            }











