import View from "./view"
import allToDOsView from "./allToDOsView"
class CrossView extends View{

_crossBtn=document.querySelector('.cross');
_completedTodo;
addHandlerClickCross(handler){
    this._todocontainer.addEventListener('click',(e)=>{
        if(e.target.classList.contains('todocheck')){
            let id=e.target.getAttribute('data-id');
            let alltodos=document.querySelectorAll('.todocheck');
            alltodos.forEach(todo=>{
                if(todo.checked){

                    todo.setAttribute('disabled',true);
                }
            })
            let completedItem=document.querySelector(`.todo${id}`);
            completedItem.classList.add('complete');
            this._completedTodo=completedItem.textContent;
            handler(this._completedTodo);

        }
    })
}
}
export default new CrossView();