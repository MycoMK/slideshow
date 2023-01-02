let images = ['images/imag1.jpeg','images/imag2.webp',
'images/imag3.jpeg','images/imag4.jpeg','images/imag5.jpeg',
'images/imag6.jpeg'];

let i = 0;
functionslideshow() {
    document.getElementById('image').src = image[i];

    if(i<image.length-1){
        i++
    }
    else{
        i=0;
    }
    setTimeout('slideshow',2000);
}
window.onload = slideShow
