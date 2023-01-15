const menu = document.querySelector(".mobile-menu-icon"); 

const imagemPrincipal = document.querySelector("#imagem-principal");
const thumbnails =document.querySelectorAll(".thumbnail");

// menu.addEventListener("click",menuMobile());
// console.log(menuMobile);

menu.onclick = menuMobile;

function menuMobile(){
    let mobile = document.querySelector(".mobile-menu");
    if(mobile.classList.contains('open')){
        mobile.classList.remove('open');
    }else{
           mobile.classList.add('open');
    }
};

thumbnails.forEach((e)=>{
    e.addEventListener("click", ()=>{
        imagemPrincipal.setAttribute('src',`imagens/${e.name}.jpg`)
    })
 })
 
