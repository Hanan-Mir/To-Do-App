import allToDOsView from "./allToDOsView";
import View from "./view";
import activeToDosView from "./activeToDosView";
import cross from 'url:../images/icon-cross.svg';
import tick from 'url:../images/icon-check.svg';
class CompletedView extends View{
  
    renderCompletedTodos(handler){
        if(this._todocontainer.hasChildNodes){
            let completedEl=document.querySelector('.completed');
            completedEl.addEventListener('click',()=>{
                this._todolistID=1;
                this._todolistCrossID=1;
                this._todoNum=1;
                let completedToDoEls=document.querySelectorAll('.todo');
                completedToDoEls.forEach((el)=>{
                    console.log(el.classList);
                
                })
                let stateEls=document.querySelectorAll('.stateEl')
                stateEls.forEach(el=>{
                    el.classList.remove('activestate');
    
                })
                completedEl.classList.add('activestate');
                this._clear();
                
                handler()
            })
    
        }
    
    }
    _generateMarkup(data,CName,checkStaus,disableStatus){ 
    return `<div class="list">
            <div class="todoname">
    <input type="checkbox" class="todocheck" name="" id="" data-id=${this._todolistCrossID++} ${checkStaus} ${disableStatus?'disabled':''}>
    <img src="${tick}" class="completedimg" alt="">
    <span class="checkbox"></span>
    <p class='todo${this._todolistID++} todo ${CName}' data-number=${this._todoNum++}>${data}</p>
    </div>
    <img src="${cross}" class="cross" alt="" >
    </div>`
    }
}
export default new CompletedView()