var imageSrc = [];
imageSrc[0] = "images/medium/5855774224.jpg";
imageSrc[1] = "images/medium/5856697109.jpg";
imageSrc[2] = "images/medium/6119130918.jpg";
imageSrc[3] = "images/medium/8711645510.jpg";
imageSrc[4] = "images/medium/9504449928.jpg";
var imageName = [];
imageName[0] = "Battle";
imageName[1] = "Luneburg";
imageName[2] = "Bermuda";
imageName[3] = "Athens";
imageName[4] = "Florence";

function setImageChange(){
    images = document.getElementById("thumbnails").getElementsByTagName("img");
    featured = document.getElementById("featured").getElementsByTagName("*");

    images[0].onclick = function(){
        featured[0].src = imageSrc[0];
        featured[1].innerHTML = imageName[0];
    };
    images[1].onclick = function(){
        featured[0].src = imageSrc[1];
        featured[1].innerHTML = imageName[1];
    };
    images[2].onclick = function(){
        featured[0].src = imageSrc[2];
        featured[1].innerHTML = imageName[2];
    };
    images[3].onclick = function(){
        featured[0].src = imageSrc[3];
        featured[1].innerHTML = imageName[3];
    };
    images[4].onclick = function(){
        featured[0].src = imageSrc[4];
        featured[1].innerHTML = imageName[4];
    };
    featured[0].onmouseover = function(){
        featured[1].style.opacity = "0.8";
        featured[1].style.transition = "1s";
    }
    featured[0].onmouseout = function(){
        featured[1].style.opacity = "0";
        featured[1].style.transition = "1s";
    }
}

window.onload = setImageChange;  