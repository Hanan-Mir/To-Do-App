export default class View{
_parentEl=document.querySelector('.todo-container');
_todocontainer=document.querySelector('.todo-list');
_data;
_render(data){
    this._data=data;
    let markup=this._generateMarkup(this._data);
    this._todocontainer.insertAdjacentHTML('afterbegin',markup);
}
_clear(){
    this._todocontainer.innerHTML='';
}

}