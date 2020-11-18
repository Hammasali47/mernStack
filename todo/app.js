console.log('Running app.js');
console.log('Running app.js');

const fs= require('fs');
const _=require('lodash');
const yargs = require('yargs');

const todo =require('./todo');

const argv = yargs.argv;
var command = argv._[0];

console.log('Running Command',command);

if(command==='addTodo'){
    todo.addTodo(argv.title);
}

else{
    console.log('Invalid command.');
}