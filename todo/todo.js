console.log('running todo.js');

const fs = require('fs');


var addTodo = (title) =>{
    var todos=[];
    var todo ={
        title
    };

    try{
        var todosString = fs.readFileSync('todos-data.json');
        todos = JSON.parse(todosString)
    }catch(e){

    }

    var duplicatetodos = todos.filter((todos)=>todo.title ===title);

    if(duplicatetodos.length ===0){
        todos.push(todo);
        fs.writeFileSync('todos-data.json',JSON.stringify(todos));
    }
    };

module.exports ={
    addTodo
};