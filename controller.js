import * as model from './model.js'
import allToDOsView from './View/allToDOsView.js';
import crossView from './View/crossView.js';
import activeToDosView from './View/activeToDosView.js';
import completedView from './View/completedView.js';
import View from './View/view.js';
import changingModeView from './View/changingModeView.js';
import dragAndDropView from './View/dragAndDropView.js';

const allAddons=function(data){
    model.todoList.all.push(data);
    model.todoList.active.push(data);
    if(changingModeView._curmode==='sun'){
    allToDOsView._render(data,'','',false);
    allToDOsView.updateRemainingToDOs(model.todoList.all)
    changingModeView.lightMode();
    }
    if(changingModeView._curmode==='moon'){
        allToDOsView._render(data,'','',false);
        allToDOsView.updateRemainingToDOs(model.todoList.all);
        changingModeView.nightMode();
    }
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
            if(changingModeView._curmode==='sun'){
            activeToDosView._render(el,'','',false);
            changingModeView.lightMode();
            }
            if(changingModeView._curmode==='moon'){
                activeToDosView._render(el,'','',false);
                changingModeView.nightMode();
                }
            
        })
        activeToDosView._setCounters();
    }
    if(!model.todoList.active.length){
        
        model.todoList.active.forEach(el=>{
            if(changingModeView._curmode==='sun'){
                activeToDosView._render(el,'','',false);
                changingModeView.lightMode();
                }
                if(changingModeView._curmode==='moon'){
                    activeToDosView._render(el,'','',false);
                    changingModeView.nightMode();
                    }
           
        })
        activeToDosView._setCounters()
    }
    allToDOsView.updateRemainingToDOs(model.todoList.active);
}
const loadAllToDos=function(){

if(model.todoList.all){
    allToDOsView._setCounters();
model.todoList.all.forEach(item=>{
    if(model.todoList.completed.includes(item)){
        if(changingModeView._curmode==='sun'){
        allToDOsView._render(item,'complete','checked',true);
        changingModeView.lightMode();
        }
        if(changingModeView._curmode==='moon'){
            allToDOsView._render(item,'complete','checked',true);
            changingModeView.nightMode();
            }
    }else{
        if(changingModeView._curmode==='sun'){
        allToDOsView._render(item,'','',false);
        changingModeView.lightMode();
        }
        if(changingModeView._curmode==='moon'){
            allToDOsView._render(item,'','',false);
            changingModeView.nightMode();
            }
    }
})
}

}
const completedToDos=function(){
    if(model.todoList.completed){
        model.todoList.completed.forEach(el=>{
            if(changingModeView._curmode==='sun'){
            completedView._render(el,'complete',"checked",true);
        changingModeView.lightMode();    
        }
        if(changingModeView._curmode==='moon'){
            completedView._render(el,'complete',"checked",true);
        changingModeView.nightMode();    
        }
        })
        completedView._setCounters();
    }
}
const clearCompleted=function(){
    if(model.todoList.completed){
        model.todoList.completed.forEach(el=>{
            let index=model.todoList.all.indexOf(el);
            model.todoList.all.splice(index,1);
        })
    let length=model.todoList.completed.length;
    for(let i=0;i<length;i++){
        model.todoList.completed.pop();
        
    }
    console.log(model.todoList.all);
    }
}
const deleteCompleteElement=function(el){
        let indexInCompletedArr=model.todoList.completed.indexOf(el);
        let indexInAllArr=model.todoList.all.indexOf(el);
        model.todoList.completed.splice(indexInCompletedArr,1);
        model.todoList.all.splice(indexInAllArr,1);
        model.todoList.active.forEach(item=>{
            if(changingModeView._curmode==='sun'){
          //  activeToDosView._render(item,'','',false);
        changingModeView.lightMode();    
        }
        if(changingModeView._curmode==='moon'){
           // activeToDosView._render(item,'','',false);
        changingModeView.nightMode();    
        }

        })
        model.todoList.completed.forEach(item=>{
            if(changingModeView._curmode==='sun'){
            completedView._render(item,'complete','checked',true);
        changingModeView.lightMode();    
        }
        if(changingModeView._curmode==='moon'){
            completedView._render(item,'complete','checked',true);
        changingModeView.nightMode();    
        }

        })
}
const deleteActiveElement=function(el){
    let indexInActiveArr=model.todoList.active.indexOf(el);
    let indexInAllArr=model.todoList.all.indexOf(el);
    model.todoList.active.splice(indexInActiveArr,1);
    model.todoList.all.splice(indexInAllArr,1);
    model.todoList.active.forEach(item=>{
        if(changingModeView._curmode==='sun'){
        activeToDosView._render(item,'','',false);
        allToDOsView.updateRemainingToDOs(model.todoList.active);
    changingModeView.lightMode();    
    }
    if(changingModeView._curmode==='moon'){
        activeToDosView._render(item,'','',false);
        allToDOsView.updateRemainingToDOs(model.todoList.active);
    changingModeView.nightMode();    
    }

    })
    console.log(model.todoList.active);
    console.log(model.todoList.all);
   
    model.todoList.completed.forEach(item=>{
        if(changingModeView._curmode==='sun'){
        //completedView._render(item,'complete','checked',true);
    changingModeView.lightMode();    
    }
    if(changingModeView._curmode==='moon'){
        //completedView._render(item,'complete','checked',true);
    changingModeView.nightMode();    
    }
    })
}

const init=function(){
allToDOsView.addHandlerUserInput(allAddons);
crossView.addHandlerClickCross(completedtodo);
activeToDosView.addHandlerActiveTodo(activeToDos);
activeToDosView.renderActiveTodos(loadActiveToDos);
allToDOsView.renderAllTodos(loadAllToDos);
completedView.renderCompletedTodos(completedToDos);
completedView._clearCompletedView(clearCompleted);
allToDOsView.onClickDeleteIcon(deleteActiveElement,deleteCompleteElement);
// activeToDosView.onClickDeleteIcon(deleteActiveElement,deleteCompleteElement);
// completedView.onClickDeleteIcon(deleteActiveElement,deleteCompleteElement);
changingModeView.addHandlerChangeMode();
dragAndDropView.addHandlerDragAndDrop();
}
init();