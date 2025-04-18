import crossView from "./crossView";
import allToDOsView from "./allToDOsView";
import View from "./view";
class ActiveTodo extends View{
    _activeTodo=[];
addHandlerActiveTodo(handler){
    this._todocontainer.addEventListener('click',(e)=>{
        if(e.target.classList.contains('todocheck')){
            let alltodos=document.querySelectorAll('.todocheck');
            alltodos.forEach(todo=>{
                if(todo.checked){
                    handler();
                    
                }
            })
        }
       
})

}
renderActiveTodos(handler){
        if(this._todocontainer.hasChildNodes){
            let activeEl=document.querySelector('.active');
            activeEl.addEventListener('click',()=>{
                let stateEls=document.querySelectorAll('.stateEl')
                stateEls.forEach(el=>{
                    el.classList.remove('activestate');

                })
                activeEl.classList.add('activestate');
                this._clear();
                handler()
            })

        }

}





}
export default new ActiveTodo();