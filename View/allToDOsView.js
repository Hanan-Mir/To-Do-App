import View from "./view";
import cross from 'url:../images/icon-cross.svg';
import tick from 'url:../images/icon-check.svg';
import completedView from "./completedView";
import activeToDosView from "./activeToDosView";
import crossView from "./crossView";
class AllToDo extends View{
_userInputtodo=document.querySelector('.input-todo')
_itemNumbers=1;

addHandlerUserInput(handler,active){
    this._userInputtodo.addEventListener('keydown',(e)=>{
        if(e.key==='Enter'){
            this._parentEl.classList.remove('hide');
            handler(this._userInputtodo.value);
            this._userInputtodo.value='';
            if(this._todocontainer.hasChildNodes){
                let itemsLeft=document.querySelector('.itemsLeft');
                itemsLeft.textContent=`${this._itemNumbers++} items left`;

            }
        }
    })
}
updateRemainingToDOs(arr){
            if(this._todocontainer.hasChildNodes){
                let itemsLeft=document.querySelector('.itemsLeft');
                itemsLeft.textContent=`${arr.length} items left`;
            }
        
}
renderAllTodos(handler){
    if(this._todocontainer.hasChildNodes){
       
        let allEl=document.querySelector('.all'); 
    
        allEl.addEventListener('click',()=>{
            this._todolistID=1;
            this._todolistCrossID=1;
            this._todoNum=1;
            let stateEls=document.querySelectorAll('.stateEl');
            
            stateEls.forEach(el=>{
                el.classList.remove('activestate');

            })
            allEl.classList.add('activestate');
            this._clear();
            handler();
        })

    }

}
_generateMarkup(data,CName,flag,disableStatus){
return `<div class="list">
        <div class="todoname">
<input type="checkbox" class="todocheck" name="" id="" data-id=${this._todolistCrossID++} ${flag} ${disableStatus?'disabled':''}">
<img src="${tick}" class="completedimg" alt="">
<span class="checkbox"></span>
<p class='todo${this._todolistID++} todo ${CName}' data-number=${this._todoNum++}>${data}</p>
</div>
<img src="${cross}" class="cross" alt="" >
</div>`
}



}


export default new AllToDo();