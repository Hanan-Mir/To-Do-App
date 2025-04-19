import crossView from "./crossView";
import allToDOsView from "./allToDOsView";
import View from "./view";
import cross from 'url:../images/icon-cross.svg';
import tick from 'url:../images/icon-check.svg';
class ActiveTodo extends View{
    _activeTodo=[];
    _todolistID=1;
    _todolistCrossID=1;
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

_generateMarkup(data,cName,checkStatus,disableStatus){
return `<div class="list">
        <div class="todoname">
<input type="checkbox" class="todocheck" name="" id="" data-id=${this._todolistCrossID++} ${checkStatus} ${disableStatus?'disabled':''}>
<img src="${tick}" class="completedimg" alt="">
<span class="checkbox"></span>
<p class='todo${this._todolistID++} todo ${cName}' data-number=${this._todoNum++}>${data}</p>
</div>
<img src="${cross}" class="cross" alt="" >
</div>`
}




}
export default new ActiveTodo();