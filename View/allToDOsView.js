import View from "./view";
import cross from 'url:../images/icon-cross.svg';
import tick from 'url:../images/icon-check.svg';
class AllToDo extends View{
_userInputtodo=document.querySelector('.input-todo')
_itemNumbers=1;
_todolistID=1;
_todolistCrossID=1;

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
            let stateEls=document.querySelectorAll('.stateEl')
            stateEls.forEach(el=>{
                el.classList.remove('activestate');

            })
            allEl.classList.add('activestate');
            this._clear();
            
            handler()
        })

    }

}
_generateMarkup(data){
return `<div class="list">
        <div class="todoname">
<input type="checkbox" class="todocheck" name="" id="" data-id=${this._todolistCrossID++}>
<img src="${tick}" class="completedimg" alt="">
<span class="checkbox"></span>
<p class='todo${this._todolistID++} todo'>${data}</p>
</div>
<img src="${cross}" class="cross" alt="" >
</div>`
}



}


export default new AllToDo();