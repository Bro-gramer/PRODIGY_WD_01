
let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');

let coursesDom = document.querySelector('.courses');
let SliderDom = coursesDom.querySelector('.courses .list');
let thumbnailBorderDom = document.querySelector('.courses .thumbnail');
let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
let timeDom = document.querySelector('.courses .time');

thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
let timeRunning = 3000;
let timeAutoNext = 7000;

nextDom.onclick = function(){
    showSlider('next');    
}

prevDom.onclick = function(){
    showSlider('prev');    
}
let runTimeOut;
let runNextAuto = setTimeout(() => {
    next.click();
}, timeAutoNext)
function showSlider(type){
    let  SliderItemsDom = SliderDom.querySelectorAll('.courses .list .item');
    let thumbnailItemsDom = document.querySelectorAll('.courses .thumbnail .item');
    
    if(type === 'next'){
        SliderDom.appendChild(SliderItemsDom[0]);
        thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
        coursesDom.classList.add('next');
    }else{
        SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
        thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
        coursesDom.classList.add('prev');
    }
    clearTimeout(runTimeOut);
    runTimeOut = setTimeout(() => {
        coursesDom.classList.remove('next');
        coursesDom.classList.remove('prev');
    }, timeRunning);

    clearTimeout(runNextAuto);
    runNextAuto = setTimeout(() => {
        next.click();
    }, timeAutoNext)
}
document.getElementById("UDEMY").addEventListener("click", function(){
    window.location.href="https://www.udemy.com/"
});
document.getElementById("Coursera").addEventListener("click", function(){
    window.location.href="https://www.coursera.org/"
});
document.getElementById("freeCodeCamp").addEventListener("click", function(){
    window.location.href="https://www.freecodecamp.org/"
});
