import * as model from './model.js'
import allToDOsView from './View/allToDOsView.js';
import crossView from './View/crossView.js';
import activeToDosView from './View/activeToDosView.js';
import completedView from './View/completedView.js';

const allAddons=function(data){
    model.todoList.all.push(data);
    allToDOsView._render(data);
}
const completedtodo=function(data){
    if(model.todoList.completed.includes(data)){
        return;
    }
    model.todoList.completed.push(data)
}
const activeToDos=function(data){
const active=model.todoList.all.filter((el)=>{
    if(!model.todoList.completed.includes(el)){
        return el;   
    }
})
model.todoList.active=[...new Set(active)];
allToDOsView.updateRemainingToDOs(model.todoList.active);
}
const loadActiveToDos=function(){
    if(model.todoList.active){
        model.todoList.active.forEach(el=>{
            allToDOsView._render(el);
        })
    }
    if(!model.todoList.active.length){
        model.todoList.all.forEach(el=>{
            allToDOsView._render(el);
        })
    }
}
const loadAllToDos=function(){
if(model.todoList.all){
model.todoList.all.forEach((el)=>{
    if(model.todoList.completed.includes(el)){
    }
allToDOsView._render(el);
})
}
}
const completedToDos=function(){
    if(model.todoList.completed){
        model.todoList.completed.forEach(el=>{
            allToDOsView._render(el);
        })
    }
}

const init=function(){
allToDOsView.addHandlerUserInput(allAddons);
crossView.addHandlerClickCross(completedtodo);
activeToDosView.addHandlerActiveTodo(activeToDos);
activeToDosView.renderActiveTodos(loadActiveToDos);
allToDOsView.renderAllTodos(loadAllToDos);
completedView.renderCompletedTodos(completedToDos);
}
init();