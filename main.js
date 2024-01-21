function myNav(){
    let bar =document.getElementById("bar");
    let nav=document.querySelector(".navigation");
    bar.onclick = ()=>{
        if(nav.style.right=="0%"){
            nav.style.right="-50%";
            bar.src="picture/logo.png"
        }else{
            nav.style.right="0%"
            bar.src="picture/x-logo.png"
        }
    }

}
myNav();

function myHeader(){
    let header =document.getElementById("header");
    let lamp=document.getElementById("lamp");
    window.addEventListener("scroll",function(){
        if(window.scrollY >0){
            header.classList.add("active")
        }else{
            header.classList.remove("active")
        }
    })
}
myHeader();

function myfun(){
    let plus =document.querySelector(".plus");
    let textBox=document.querySelector(".text-box");
    plus.onclick=()=>{
        textBox.classList.toggle("active");
        plus.classList.toggle("img_active");
    }
}
myfun();

function myvideo(){
    let links=document.querySelector(".link_a");
    let overs=document.querySelector(".bg-show .overlay");
    let exit=document.querySelector(".cancel");
    let player=document.querySelector(".player");
    let video=document.querySelector("video");
    links.onclick =(ed)=>{
        ed.preventDefault();
        overs.style.display = "block"
    }
    exit.onclick =()=>{
        overs.style.display = "none"
    }
    player.onclick =()=>{
        if(video.paused){
            video.play();
            player.src="picture/pause.png"
        }else{
            video.pause();
            player.src="picture/play.png"
        }
    }
}
myvideo()

function toTop(){
    let top = document.querySelector(".top");
    window.onscroll =()=>{
        if(window.scrollY >100 || document.documentElement.scrollTop>100){
            top.style.display="block"
        }else{
            top.style.display="none"
        }    
    }
    top.onclick=()=>{
        scrollTo(0,0);
    }
}
toTop();

function myhome(){
    location.replace('./index.html')
}