import View from "./view";
import allToDOsView from "./allToDOsView";
class DragAndDrop extends View{
    _todoList;
addHandlerDragAndDrop(){
    allToDOsView._userInputtodo.forEach((input)=>{
        input.addEventListener('keydown',(e)=>{
            
            if(e.key==='Enter'){
            this._todoList=[...this._todocontainer.children];
            this._todoList.forEach((list)=>{
                list.addEventListener('dragstart',(e)=>{
let selected=e.target;
this._todocontainer.addEventListener('dragover',(e)=>{
    e.preventDefault();
})
this._todocontainer.addEventListener('drop',(e)=>{
    this._todocontainer.appendChild(selected);
    selected=null;
})
                })     
                       
            
            
            
            })
            
            }
            
        })
    })
}





}
export default new DragAndDrop();