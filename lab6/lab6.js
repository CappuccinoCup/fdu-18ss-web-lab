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


    for(var i = 0;i < images.length;i++){
        set = function(number){
            images[number].onclick = function(){
                featured[0].src = imageSrc[number];
                featured[0].title = imageName[number];
                featured[1].innerHTML = imageName[number];
            }
        }(i);
    }/* 使用闭包 + 循环简化代码 */
    
    
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