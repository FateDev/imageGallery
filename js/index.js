var items = document.getElementsByClassName('item');
var pOItems = document.getElementById('container');
var nav = document.getElementsByClassName('nav')[0];

var marTop = nav.clientHeight;

container.setAttribute('style','margin-top:' + marTop + 'px');
nav.setAttribute('style','margin-top:-' + marTop + 'px');

var i = 0;

function getTarget(e){
    if(!e){
        e = event;
    }
    return e.target || e.srcElement;
}

var windowWidth = window.innerWidth;
var itemHeight = items[0].clientHeight;

/*

var slideNo;
var 8;

if(windowWidth < 920){
    slideNo = 4;
    slideNowWidth = 6;
    pOItems.lastChild.previousSibling.setAttribute('style','display:none');
}else if(windowWidth > 920){
    slideNo = 5;
    slideNoWidth = 8;
}

*/
for (i = 0; i < items.length; i++) {
    items[i].setAttribute('style','width:'+ (windowWidth/16) +'px');
    items[i].firstElementChild.setAttribute('style','width:'+ (windowWidth/16) +'px; height:' + (itemHeight) + 'px');
    items[i].firstElementChild.nextElementSibling.setAttribute('style','width:'+ 0 +'px; height:' + 0 + 'px');
    items[i].firstElementChild.setAttribute('class','overlay');
}

var selected = document.getElementById('selected');
selected.setAttribute('style','width:'+ (innerWidth/4)*3 +'px');
selected.firstElementChild.setAttribute('class','overlay');
selected.firstElementChild.setAttribute('style','width:'+ 0 +'px; height:' + (0) + 'px');
selected.firstElementChild.nextElementSibling.setAttribute('style','width:'+ 0 +'px; height:' + (0) + 'px');

var sliderWidth = windowWidth/5 + 'px'; //5
var largeSliderWidth = (windowWidth/4)*3 + 'px';
var smallSliderWidth = windowWidth/16 + 'px'; //8

function resizeImgs(){
    itemHeight = items[0].clientHeight;

    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('style','width:'+ (windowWidth/16) +'px');
        items[i].firstElementChild.nextElementSibling.setAttribute('style','width:'+ 0 +'px; height:' + 0 + 'px');
        items[i].firstElementChild.setAttribute('style','width:'+ (windowWidth/16) +'px; height:' + (itemHeight) + 'px');
    }
    windowWidth = window.innerWidth;
    
    for (i = 0; i < items.length; i++) {
        items[i].setAttribute('style','width:'+ (windowWidth/5) +'px');
        items[i].firstElementChild.setAttribute('style','width:'+ (windowWidth/5) +'px; height:' + (itemHeight) + 'px;' + 'opacity:0.3;');
        items[i].firstElementChild.nextElementSibling.setAttribute('style','width:'+ (windowWidth/5) +'px; height:' + (itemHeight) + 'px;');
    }
    
    sliderWidth = windowWidth/5 + 'px'; //5
    largeSliderWidth = (windowWidth/4)*3 + 'px';
    smallSliderWidth = windowWidth/16 + 'px'; //8
}

window.addEventListener('resize',resizeImgs,false);

function increaseSize(e){
    var el = getTarget(e);
    if(el.parentElement.getAttribute('class') == 'item'){
        if(el.parentElement.style.width == largeSliderWidth){
            for (i = 0; i < items.length; i++) {
                items[i].style.width = sliderWidth;
                items[i].firstElementChild.setAttribute('style','width:'+ (windowWidth/5) +'px; height:' + (itemHeight) + 'px;' + 'opacity:0.3;');
                items[i].firstElementChild.nextElementSibling.setAttribute('style','width:'+ (windowWidth/5) +'px; height:' + (itemHeight) + 'px;');
            }
        }else if(el.parentElement.style.width == sliderWidth || el.parentElement.style.width == smallSliderWidth){
            for (i = 0; i < items.length; i++) {
                items[i].style.width = smallSliderWidth;
                items[i].firstElementChild.setAttribute('style','width:'+ (windowWidth/16) +'px; height:' + (itemHeight) + 'px');
                items[i].firstElementChild.nextElementSibling.setAttribute('style','width:'+ 0 +'px; height:' + 0 + 'px');
                
            }
            el.parentElement.style.width = largeSliderWidth;
            el.parentElement.firstElementChild.setAttribute('style','width:'+ (0) +'px; height:' + (0) + 'px');
        }
    }
}

pOItems.addEventListener('click',function(e){increaseSize(e);},false);