// let button =document.querySelector(".button");
function openImage() {
    let image = document.querySelector(".img");
    image.style.display ="block";
    let close1 = document.querySelector(".close");
    close1.style.display = "block";
    let button = document.querySelector(".open");
    button.style.display = "none"
}
let button1 = document.querySelector(".open");
button1.addEventListener("click", openImage,);



function closeImage(){
    let image = document.querySelector(".img");
    image.style.display = "none";
    let close = document.querySelector(".close");
    close.style.display= "none";
    let button2 = document.querySelector(".open");
    button2.style.display = "block";
}
let closed= document.querySelector(".close");
closed.addEventListener("click", closeImage);