const menu = document.querySelector(".mobile-menu-icon"); 

menu.addEventListener("click",menuMobile());
console.log(menuMobile);

function menuMobile(){
    let mobile = document.querySelector(".mobile-menu");
    if(mobile.classList.contains('open')){
        mobile.classList.remove('open');
    }else{
           mobile.classList.add('open');
    }
}