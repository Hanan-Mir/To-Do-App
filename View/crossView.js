import View from "./view"
import allToDOsView from "./allToDOsView"
class CrossView extends View{

_crossBtn=document.querySelector('.cross');
_completedTodo;
_completedTodoArr=[];
addHandlerClickCross(handler){
    this._todocontainer.addEventListener('click',(e)=>{
        if(e.target.classList.contains('todocheck')){
            let id=e.target.getAttribute('data-id');
            let alltodos=document.querySelectorAll('.todocheck');
            console.log(id);
            alltodos.forEach(todo=>{
                if(todo.checked){
console.log("hello");
                    todo.setAttribute('disabled',true);
                    this._completedTodoArr.push(todo.getAttribute('data-id'));

                }
            })
            let completedItem=document.querySelector(`.todo${id}`);
            completedItem.classList.add('complete');
            console.log(completedItem);
            this._completedTodo=completedItem.textContent;
            this._completedTodoArr=[...new Set(this._completedTodoArr)];
            console.log(this._completedTodoArr)
            handler(this._completedTodo,completedItem);
        }
    })
}
}
export default new CrossView();