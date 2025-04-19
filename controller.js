import * as model from './model.js'
import allToDOsView from './View/allToDOsView.js';
import crossView from './View/crossView.js';
import activeToDosView from './View/activeToDosView.js';
import completedView from './View/completedView.js';
import View from './View/view.js';

const allAddons=function(data){
    model.todoList.all.push(data);
    model.todoList.active.push(data);
    allToDOsView._render(data,'','',false);
}
const completedtodo=function(data,element){
    if(model.todoList.completed.includes(data)){
        return;
    }
    model.todoList.completed.push(data);
    model.completedItems.set(element,data);
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
            activeToDosView._render(el,'','',false);
            
        })
        activeToDosView._setCounters();
    }
    if(!model.todoList.active.length){
        model.todoList.all.forEach(el=>{
            activeToDosView._render(el,'','',false);
           
        })
        activeToDosView._setCounters()
    }
    console.log(activeToDosView._todolistID);
    console.log(activeToDosView._todolistCrossID);
}
const loadAllToDos=function(){

if(model.todoList.all){
model.todoList.active.forEach((el)=>{
    activeToDosView._render(el,'',"",false);
})
model.todoList.completed.forEach((el)=>{
    completedView._render(el,'complete',"checked",true);
})
allToDOsView._setCounters();
// completedView._setCounters();
}

}
const completedToDos=function(){
    if(model.todoList.completed){
        model.todoList.completed.forEach(el=>{
            completedView._render(el,'complete',"checked",true);
            
        })
        completedView._setCounters();
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