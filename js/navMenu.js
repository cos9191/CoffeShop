let navMenu=document.querySelector(".header__nav-menu"),burgerWrapper=document.querySelector(".nav-list__burger-wrapper"),burgerButton=document.querySelector(".nav-list__burger");navMenu.classList.remove("header__nav-menu--nojs"),burgerButton.classList.remove("nav-list__burger--nojs");let initNavMenu=()=>{burgerWrapper.addEventListener("click",(function(){if(navMenu.classList.contains("header__nav-menu--closed"))return navMenu.classList.remove("header__nav-menu--closed"),burgerButton.classList.remove("nav-list__burger--closed"),void burgerButton.classList.add("nav-list__burger--opened");navMenu.classList.add("header__nav-menu--closed"),burgerButton.classList.add("nav-list__burger--closed"),burgerButton.classList.remove("nav-list__burger--opened")}))};export{initNavMenu};