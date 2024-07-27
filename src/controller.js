import {showImage, prevImage, nextImage, currentImage} from './carousel';
import './dom-elements';

let dots = document.getElementsByClassName("dot");

btnPrev.addEventListener("click", ()=>prevImage());
btnNext.addEventListener("click", ()=>nextImage());
Array.from(dots).forEach(element => {
    element.addEventListener("click", (e)=>{
        let parent = element.parentNode; 
        let indexElement = Array.prototype.indexOf.call(parent.children, element);
        currentImage(indexElement + 1);
    });
});


window.addEventListener("load", ()=>{
    showImage(1);
})

