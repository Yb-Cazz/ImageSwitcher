const images = document.querySelectorAll(".images img");
let imageIndex = 0;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider(){
  
    if(images.length > 0){
        images[imageIndex].classList.add("displayImage");
    }
}

function showimage(index){

    if(index >= images.length){
        imageIndex = 0;
    }
    else if( index < 0){
        imageIndex = images.length - 1;
    }

    images.forEach(image => {
        image.classList.remove("displayImage");
    });

    images[imageIndex].classList.add("displayImage");
}

function prevImage(){
    imageIndex--;
    showimage(imageIndex)
}

function nextImage(){
    imageIndex++;
    showimage(imageIndex);
}