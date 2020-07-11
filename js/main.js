import { ControllerPostForm } from './PostForm/controllerPostForm.js';
import { ControllerPostPage } from './PostPage/controllerPostPage.js';
import { SliderOne as Slider } from './slider/slider.js';

document.addEventListener('DOMContentLoaded', () => {
    new ControllerPostForm();
    if(window.location.href.indexOf('post.html') != -1){
        new ControllerPostPage();
    }  
});

document.querySelector('.btn--add-post').addEventListener('click', () => {
    document.querySelector('.modalPostForm').classList.add('modalPostForm--visible');
    document.querySelector('.overlayModal').classList.add('overlayModal--visible');
    document.querySelector('body').style.overflow = 'hidden';
});

const slider = new Slider();