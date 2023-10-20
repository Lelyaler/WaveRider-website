

const navBtn = document.querySelector('.nav-button');
const mobileNav = document.querySelector('.mobile-nav');
const body = document.body;

function toggleMobailNav () {
   body.classList.toggle('no-scroll');
   navBtn.classList.toggle('nav-button-close');
   mobileNav.classList.toggle('mobile-nav-active');
}

// клик по кнопке
navBtn.addEventListener('click', function (умуте){
    event.stopPropagation();
    toggleMobailNav ()
})

// клик за пределами новигации
window.addEventListener('click', function(){
   console.log('Click on Window');

   if(body.classList.contains('no-scroll')){
      toggleMobailNav ()
   }
})
// остановливаем клик внутри открытой нав
mobileNav.addEventListener('click', function (event){
   event.stopPropagation();
})
