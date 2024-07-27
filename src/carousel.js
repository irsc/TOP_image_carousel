let imgIndex = 1;
let images = document.getElementsByClassName("myImage");
let dots = document.getElementsByClassName("dot");

function showImage(index){
    
    if(index > images.length){imgIndex = 1};
    if(index < 1){imgIndex = images.length};

    Array.from(images).forEach(element => {
        element.style.display = "none";
    });
    Array.from(dots).forEach(element => {
        element.classList.remove("active");
    });

    images[imgIndex-1].style.display = "block";
    dots[imgIndex-1].classList.add("active");
}

function nextImage(){
    showImage(imgIndex+=1);
    console.log(imgIndex);
}
function prevImage(){
    showImage(imgIndex -= 1);
}

function currentImage(index){
    showImage(imgIndex = index);
}

function getImgIndex(){
    return imgIndex;
}

export {showImage, nextImage, prevImage, currentImage}

