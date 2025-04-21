import View from "./view";
import bglight from 'url:../images/bg-desktop-light.jpg';
import bglightMobile from 'url:../images/bg-mobile-light.jpg';
import bgDarkMobile from 'url:../images/bg-mobile-dark.jpg'
import bgNight from 'url:../images/bg-desktop-dark.jpg';
import iconMoon from 'url:../images/icon-moon.svg';
import iconSun from 'url:../images/icon-sun.svg';
class ChangingMode extends View{
_mode=document.querySelectorAll('.mode');
_curmode='moon';
addHandlerChangeMode(){
    this._mode.forEach(el=>{
        console.log(el);
    el.addEventListener('click',(e)=>{
        if(e.target.classList.contains('sun')){
           
        this._curmode="sun";
        let bgImg=document.querySelector('.bg-img');
        let mobileImg=document.querySelector('.mobileImage');
    let inputBar=document.querySelectorAll('.todo-inputtext');
    let inputText=document.querySelectorAll('.input-todo');
 
    bgImg.src=bglight;
    mobileImg.src=bglightMobile;
    this._mode.forEach((element)=>{
        element.src=iconMoon;
    })
    
    console.log(el.src);
    el.classList.remove('sun');
    el.classList.add('moon');
    document.body.style.backgroundColor='hsl(0, 0%, 98%)';
    inputBar.forEach((input)=>{
        input.style.backgroundColor='hsl(0, 0%, 98%)';
    })
    inputText.forEach((input)=>{
        input.style.backgroundColor='hsl(0, 0%, 98%)';
        input.style.color='hsl(237, 14%, 26%)';
    })
    
        this.lightMode();
        return;
    
}
if(e.target.classList.contains('moon')){
    this._curmode="moon";
    this._mode.forEach((element)=>{
        element.src=iconSun;
    })
    let bgImg=document.querySelector('.bg-img');
    let mobileImg=document.querySelector('.mobileImage');
    bgImg.src=bgNight;
    mobileImg.src=bgDarkMobile;
    
    el.classList.add('sun');
    el.classList.remove('moon');
    let inputBar=document.querySelectorAll('.todo-inputtext');
    let inputText=document.querySelectorAll('.input-todo');
    document.body.style.backgroundColor='hsl(237, 14%, 26%)';
    inputBar.forEach(input=>{
        input.style.backgroundColor='var(--primary-vDark-DesatBlue)';
    })
    inputText.forEach(input=>{
        input.style.backgroundColor='var(--primary-vDark-DesatBlue)';
        input.style.color='hsl(0, 0%, 98%)';
    })
    this.nightMode();
    return;
}
})})
}
lightMode(){
    
if(this._todocontainer.hasChildNodes){
    let stateEL=document.querySelectorAll('.state');
let todobottom=document.querySelector('.todo-bottom');
let todoList=document.querySelectorAll('.list');
let todoName=document.querySelectorAll('.todo');
let todoContainer=document.querySelector('.todo-container');
todoContainer.style.backgroundColor='hsl(236, 33%, 92%)';
todoList.forEach(list=>{
    list.style.backgroundColor='hsl(236, 33%, 92%)';
})
todoName.forEach(todo=>{
    todo.style.color='hsl(235, 19%, 35%)';
    todo.style.fontWeight='400';
})
stateEL.forEach((el)=>{
    el.style.backgroundColor='hsl(236, 33%, 92%)'
})

todobottom.style.backgroundColor='hsl(236, 33%, 92%)';
}
}
nightMode(){
    if(this._todocontainer.hasChildNodes){
        let todobottom=document.querySelector('.todo-bottom');
        let todoList=document.querySelectorAll('.list');
        let todoName=document.querySelectorAll('.todo');
        let todoContainer=document.querySelector('.todo-container');
        let stateEL=document.querySelectorAll('.state');
        todoContainer.style.backgroundColor='var(--primary-vDark-grayishBlue)';
        todoList.forEach(list=>{
            list.style.backgroundColor='var(--primary-vDark-DesatBlue)';
        })
        todoName.forEach(todo=>{
            todo.style.color='hsl(234, 11%, 52%)';
            todo.style.fontWeight='400';
        })
        stateEL.forEach((el)=>{
            el.style.backgroundColor='var(--primary-vDark-DesatBlue)';
        })
        todobottom.style.color='var(--primary-vDark-grayishBlue)';
        todobottom.style.backgroundColor='var(--primary-vDark-DesatBlue)';
        }
}

}
export default new ChangingMode();