const nav = document.querySelector('.section-deals__list')
const navItems = document.querySelectorAll('.section-deals__item')
const tagItems = document.querySelectorAll('.section-deals__tabs-selected')

nav.addEventListener("click", function (e) {
   const targetNavItem = e.target;
   let newActiveIndexNav = null;
   let currentActiveIndexNav = null;
   if(navItems) {
      
      navItems.forEach((itemNav, index)=>{
         if(itemNav.classList.contains("section-deals__item_active")){
            activeNavItem = itemNav;
            currentActiveIndexNav = index;
         }
         if(itemNav === targetNavItem){
            newActiveIndexNav = index;
         }
      })
   }
   targetNavItem.classList.add("section-deals__item_active");
   activeNavItem.classList.remove("section-deals__item_active");
   tagItems[currentActiveIndexNav].classList.remove("section-deals__tabs-selected_active");
   tagItems[newActiveIndexNav].classList.add("section-deals__tabs-selected_active");
});


