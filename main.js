var slider_img = document.querySelector('.slider-img');
var images = ['chic1.jpg', 'chic2.jpg', 'chic3.jpg', 'chic4.jpg', 'chic5.jpg','image8.jpg','image8.jpg','Fish2.jpg','Fill1.jpg','Fill2.jpg','Fill3.jpg'];
var i = 0;
function prev() {
    if (i <= 0) i = images.length;
    i--;
    return setImg();
}
function next() {
    if (i >= images.length - 1) i = -1;
    i++;
    return setImg();
}
function setImg() {
    return slider_img.setAttribute('src', '/' + images[i]);
}
