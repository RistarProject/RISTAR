let buttonIcon = document.querySelector(".burger_menu");


buttonIcon.onclick = function(){
   document.querySelector(".menu__icon").classList.toggle("menu__icon__active");
   document.querySelector(".menu__mobile").classList.toggle("menu__mobile__active");
};


let tabLinks = document.querySelectorAll(".tab_link");
let tabContent = document.querySelectorAll(".content");

function turnOffTabs(){
   tabLinks.forEach(function(tabLink){
       tabLink.classList.remove('tab_active');
   });

   tabContent.forEach(function(tabContent){
       tabContent.classList.remove('content_active');
   });
   
}

tabLinks.forEach(function(tab){
   tab.addEventListener("click", function(){
      
      turnOffTabs();

      tab.classList.add('tab_active');

        let tabId = tab.getAttribute('data-tab');

        let tabContent = document.querySelector(tabId);
        
        tabContent.classList.add('content_active');
   });
});