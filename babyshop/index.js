const smalImg = document.querySelectorAll('.main__galerry-smal-img');// ---всем маленькие
const bigImg = document.querySelector('.main__big-img').firstElementChild // --- большая картинка
const counter = document.querySelector('.main__utils-count-title');
const plus = document.querySelector('.main__utils-count-plus');
const minus = document.querySelector('.main__utils-count-minus');
const burgerButton = document.querySelector('.hat__burger-strip'); // --- кнопка бургера
const burgerMenu = document.querySelector('.hat__burder-menu'); // ---бургер меню
const header = document.querySelector('.hat');
const buttonAddBasket = document.querySelector('.main__utils-add');
const nameItem = document.querySelector('.main__tools-title');
const addFavorite = document.querySelector('.main__utils-add-favorite');
const popap = document.querySelector('.popap');
const popapTitle = document.querySelector('.popap__titile')
const resetEmail = document.querySelector('.links__email').nextElementSibling;
const inputEmail = document.querySelector('.links__email');
const overlay = document.querySelector('.hat__overlay');
const burgerIcon = document.querySelector('.hat__burger-button');

resetEmail.addEventListener('click',()=>{ //---- очистка инпута email
    inputEmail.value=''
})

const allSmalImg = () =>{ //--- переключение изображений(слайдер)
   smalImg.forEach((target)=>{
        target.addEventListener('click',()=>{
           const test = target.firstElementChild.src;
           bigImg.setAttribute('src', test);
        })
    })

}
allSmalImg()

//-----||-----\\
let count = 1;
plus.addEventListener('click',(()=>{ //--- увеличение счетика на 1
   return counter.innerHTML = count+=1;
}))

minus.addEventListener('click',(()=>{//--- уменьшение счетика на 1
    return counter.innerHTML = count-=1;
 }))

//-----||-----\\
 const toggleMenu = function() { //--- тогл бургер меню
    burgerMenu.classList.toggle('hat-burder-menu_opened');
    burgerIcon.classList.toggle('hat-burder-menu_opened');
}
burgerButton.addEventListener('click',()=>{
    toggleMenu()
 })
 overlay.addEventListener('click',()=>{
     toggleMenu()
 })
//  window.addEventListener('click',(e)=>{
//     const target = e.target;
//     if(!target.closest('.hat__burder-menu') && !target.closest('.hat__burger')){
//         toggleMenu()
//     }
//  })

//-----||-----\\
window.onscroll = function () { //--- плавный хедер
    let scroll = window.pageYOffset;

    if(scroll > 150){
       header.classList.add('header_fixed-none')
    }else{
        header.classList.remove('header_fixed-none')
    }
}

//-----||-----\\
buttonAddBasket.addEventListener('click',()=>{ //--- плавующее уведомление при добавлении в корзину 
    const text = (`${nameItem.textContent} в количестве ${count}, добавленно в корзину...`);
    popapTitle.innerText = text;
    popap.classList.add('popap__opened');

    setTimeout(function(){
        popap.style.visibility = 'hidden';
    }, 5000);
    popap.style.visibility = 'unset';
  
})
addFavorite.addEventListener('click',()=>{
   const favoriteSucced = (`${nameItem.textContent} в количестве ${count}, добавленно в избранное...`);//--- плавующее уведомление при добавлении в избранное
   popapTitle.innerText = favoriteSucced;
   popap.classList.add('popap__opened');

   setTimeout(function(){
    popap.style.visibility = 'hidden';
}, 5000);
popap.style.visibility = 'unset';
})
//-----||-----\\