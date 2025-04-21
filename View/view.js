export default class View{
_parentEl=document.querySelectorAll('.todo-container');
_todocontainer=document.querySelector('.todo-list');
_todoInput=document.querySelector('.input-todo');
_data;
_todolistID=1;
_todolistCrossID=1;
_todoNum=1;
_todoDeleteID=1;
_render(data,className,checkStatus,disableStatus){
    this._data=data;
    let markup=this._generateMarkup(this._data,className,checkStatus,disableStatus);
    this._todocontainer.insertAdjacentHTML('afterbegin',markup);
}
_clear(){
    this._todocontainer.innerHTML='';
}
_getElement(className){
    return document.querySelector(`${className}`);
}
_setCounters(){
    this._todolistCrossID=1;
    this._todolistID=1;
    this._todoNum=1;
    this._todoDeleteID=1;
}
onClickDeleteIcon(handler1,handler2){
    if(this._todocontainer.hasChildNodes){
        this._todocontainer.addEventListener('click',(e)=>{
            if(e.target.classList.contains('cross')){
                let elID=e.target.getAttribute('data-deleteID');
                console.log(elID);
                let todoElement=document.querySelector(`.todo${elID}`);
                console.log(todoElement);
                if(!todoElement.classList.contains('complete')){
                    this._clear();
                   handler1(todoElement.textContent);
                }

                if(todoElement.classList.contains('complete')){
                    this._clear();
                handler2(todoElement.textContent)
                }
            }
        })
    }
}

}