var images = ['image1.jpg','image2.jpg','image3.jpg','image8.jpg','image9.jpg'];
var i=0;
function slideShow(){
    document.getElementById("imagee").src=images[i];
    if(i<images.length-1){
        i++;
    }
    else{
        i=0;
    }
    setTimeout("slideShow()",1500);
}
window.onload = slideShow;
// next script
