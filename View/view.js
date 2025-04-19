export default class View{
_parentEl=document.querySelector('.todo-container');
_todocontainer=document.querySelector('.todo-list');
_data;
_todolistID=1;
_todolistCrossID=1;
_todoNum=1;
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
}

}