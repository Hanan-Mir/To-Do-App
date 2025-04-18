import allToDOsView from "./allToDOsView";
import View from "./view";
import activeToDosView from "./activeToDosView";
class CompletedView extends View{
    renderCompletedTodos(handler){
        if(this._todocontainer.hasChildNodes){
            let completedEl=document.querySelector('.completed');
            completedEl.addEventListener('click',()=>{
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
}
export default new CompletedView()