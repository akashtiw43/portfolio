$(document).ready(function(){

$("#project .owl-carousel").owlCarousel({
    loop:true,
    nav:true,
    dots:false,
    responsive:{
        300: {
            items: 1
        },
        500: {
            items: 2
        },
        1000 : {
            items: 4
        }
    }
});
  
var anim=document.querySelector(".anim");
const text=["Developer", "Designer"];
let count=0;
let index=0;
let currentText="";
let letters="";
let typeSpeed=300;
const top=document.querySelector(".scroll-up-btn");
(function animate(){
        if(count==text.length){
            count=0;
        }
     currentText=text[count];
     letters=currentText.slice(0,index++);
     anim.innerText=letters;
     if(letters.length===currentText.length){
         typeSpeed=2000;
         count++;
         index=0;
     }  
     setTimeout(animate, typeSpeed);
     typeSpeed=300;
    }());


    window.onscroll=function(){
        // scroll-up button show/hide script
        if(this.scrollY > 500){
           top.classList.add("show");
        }else{
            top.classList.remove("show");
        }
    };
    // slide-up script
    top.addEventListener("click",function(){
        document.documentElement.scrollTop = 0;
       
    });
   
});

var canvas=document.getElementById("gc");
var ctx=canvas.getContext("2d");
window.onload=function(){
    
    ctx.beginPath();
    ctx.strokeStyle="white";
    ctx.moveTo(20,canvas.height/2);
    ctx.lineTo(600,canvas.height/2);
    ctx.stroke();
    
    verLines(70,canvas.height/2-60);
    verLines(73,canvas.height/2-60);
    year(2016,50,canvas.height/2+20);
    eve("Passed Elementary School",50,canvas.height/2-70);

    verLines(220,canvas.height/2+60);
    verLines(223,canvas.height/2+60); 
    year(2018,200,canvas.height/2-10);
    eve("Passed High School",200,canvas.height/2+75);

    verLines(370,canvas.height/2-60);
    verLines(373,canvas.height/2-60);
    year(2019,350,canvas.height/2+20);
    eve("Registered in Undergrad Clg",350,canvas.height/2-70);

    verLines(520,canvas.height/2+60);
    verLines(523,canvas.height/2+60);
    year(2020,500,canvas.height/2-10);
    eve("Started Web Development",500,canvas.height/2+75);
   
    ctx.fillStyle="white";
    ctx.font="25px arial";
    ctx.fillText("Education Timeline :",200,30);
}

function verLines(x,y){
    ctx.beginPath();
    ctx.moveTo(x,canvas.height/2);
    ctx.lineTo(x,y);
    ctx.stroke();
}
function year(t,x,y){
    ctx.fillStyle="rgb(226, 37, 4)";
    ctx.font="15px arial"
    ctx.fillText(t,x,y);
}
function eve(t,x,y){
    ctx.fillStyle="white";
    ctx.font="15px arial"
    ctx.fillText(t,x,y);
}
var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}
