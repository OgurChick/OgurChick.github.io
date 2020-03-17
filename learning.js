
todoListArray = [ ]
if (localStorage.getItem('todo') != undefined){
    todoListArray = JSON.parse(localStorage.getItem('todo'))
}
$('#add').on('click', function(){
var input =  document.getElementById('input')
valueI = input.value
    if(!valueI.trim()){
            $(this).css({backgroundColor: 'red'})
            return false
        }else{
            $(this).css({backgroundColor: '#1729B0'})
        }
$(".todoList").append("<div class = 'todoItem'>" +"<ul class ='item'>" +valueI +"</ul>" +"<i class='fas fa-trash'></i>" + "</div>")
$('#input').val("")
todoListArray.push = valueI
    console.log(todoListArray)
var lenghtOut = $('.item').length
var i = lenghtOut
localStorage.setItem('todo', JSON.stringify(todoListArray[i]))
deleteTask();
})
function deleteTask(){
$('.fa-trash').on('click', function(){
    $(this).parent(".todoItem").remove()
})
}