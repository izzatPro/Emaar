"use strict";
document.addEventListener('DOMContentLoaded', () =>{
    let radio = document.querySelectorAll('.tabheader__item');
    let parentTabs = document.querySelector('.parent__bigphoto');
    let mainTabs = document.querySelectorAll('.mainTabs');

        function hideTabContent(){
            mainTabs.forEach(item =>{
                item.classList.add('hide');
                item.classList.remove('show','fade');
            });
            radio.forEach(item =>{
                item.parentNode.classList.remove('flats__content_active');
            });
        }
        function showTabContent(i = 0){
            mainTabs[i].classList.add('show', 'fade');
            mainTabs[i].classList.remove('hide');
            radio[i].parentNode.classList.add('flats__content_active');
        }
        hideTabContent();
        showTabContent();

        parentTabs.addEventListener('click', (e) =>{
            let target = e.target;
            if (target && target.classList.contains('tabheader__item')){
                radio.forEach((item , i) =>{
                    if(item == target){
                        hideTabContent();
                        showTabContent(i);  
                    }
                });
            }
        });


        let toggleSlider = document.querySelectorAll('.slider_choose');
        let parentToggle = document.querySelector('.parent__slider');
        let sliderBlock = document.querySelectorAll('.offer__slider');
       function hideSliderContent(){
            sliderBlock.forEach( item => {
                item.classList.add('hide');
                item.classList.remove('show','fade');
            });
            toggleSlider.forEach( item =>{
                item.classList.remove('flats__content_active');
            });
        }
   

        function showSliderContent( i = 0){
            sliderBlock[i].classList.add('show','fade');
            sliderBlock[i].classList.remove('hide');
            toggleSlider[i].classList.add('flats__content_active');
        }

        hideSliderContent();
        showSliderContent();

        parentToggle.addEventListener('click', (e) =>{
            if( e.target && e.target.classList.contains('slider_choose')){
                toggleSlider.forEach((item, i) =>{
                    if (item == e.target){
                        console.log("asd");
                        hideSliderContent();
                        showSliderContent(i);
                    };
                });
            }
        });


      // Slider 1
    const slides1 = document.querySelectorAll('.first__slide'),
    prev1 = document.querySelector('.prev1'),
    next1 = document.querySelector('.next1'),
    total1 = document.querySelector('.total1'),
    current1 = document.querySelector('.current1');
            let slideIndex = 1;
            showSlides(slideIndex);

            if (slides1.length < 10) {
            total1.textContent = `${slides1.length}`;
                } else {
                total1.textContent = slides1.length;
                }

    function showSlides(n) {
    if (n > slides1.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides1.length;
    }

    slides1.forEach((item) => item.style.display = 'none');

    slides1[slideIndex - 1].style.display = 'block'; 
    
    if (slides1.length < 10) {
        current1.textContent =  `${slideIndex}`;
    } else {
        current1.textContent =  slideIndex;
    }
}
    function plusSlides (n) {
    showSlides(slideIndex += n);
    }

    prev1.addEventListener('click', function(){
    plusSlides(-1);
    });

    next1.addEventListener('click', function(){
    plusSlides(1);
    });



    // Slider 2
    const slides2 = document.querySelectorAll('.second__slide'),
     prev2 = document.querySelector('.prev2'),
    next2 = document.querySelector('.next2'),
    total2 = document.querySelector('.total2'),
    current2 = document.querySelector('.current2');  

            let slideIndex2 = 1;
            showSlides2(slideIndex2);

            if (slides2.length < 10) {
            total2.textContent = `${slides2.length}`;
                } else {
                total2.textContent = slides2.length;
                }

    function showSlides2(n) {
    if (n > slides2.length) {
        slideIndex2 = 1;
    }
    if (n < 1) {
        slideIndex2 = slides2.length;
    }

    slides2.forEach((item) => item.style.display = 'none');

    slides2[slideIndex2 - 1].style.display = 'block'; 
    
    if (slides2.length < 10) {
        current2.textContent =  `${slideIndex2}`;
    } else {
        current2.textContent =  slideIndex2;
    }
}
    function plusSlides2 (n) {
    showSlides2(slideIndex2 += n);
    }

    prev2.addEventListener('click', function(){
    plusSlides2(-1);
    });

    next2.addEventListener('click', function(){
    plusSlides2(1);
    });

   
    // Slider 3

    const slides3 = document.querySelectorAll('.third__slide'),
    prev3 = document.querySelector('.prev3'),
    next3 = document.querySelector('.next3'),
    total3 = document.querySelector('.total3'),
    current3 = document.querySelector('.current3');  

           let slideIndex3 = 1;
           showSlides3(slideIndex3);

           if (slides3.length < 10) {
           total3.textContent = `${slides3.length}`;
               } else {
               total3.textContent = slides3.length;
               }

   function showSlides3(n) {
   if (n > slides3.length) {
       slideIndex3 = 1;
   }
   if (n < 1) {
       slideIndex3 = slides3.length;
   }

   slides3.forEach((item) => item.style.display = 'none');

   slides3[slideIndex3 - 1].style.display = 'block'; 
   
   if (slides3.length < 10) {
       current3.textContent =  `${slideIndex3}`;
   } else {
       current3.textContent =  slideIndex3;
   }
}
   function plusSlides3 (n) {
   showSlides3(slideIndex3 += n);
   }

   prev3.addEventListener('click', function(){
   plusSlides3(-1);
   });

   next3.addEventListener('click', function(){
   plusSlides3(1);
   });


//    // Show Number
//    const currentNum = document.querySelector('.current__num'),
//          totalNum = document.querySelector('.total__num'),
//          currentShow = document.querySelector('.current__show'),
//          totalShow = document.querySelector('.total__hide');

//            currentShow.addEventListener('click', () =>{
//             currentNum.classList.remove('present');
//             currentNum.classList.add('cover');
//             totalNum.classList.add('present');
//             totalNum.classList.remove('cover');
//             currentShow.classList.remove('present');
//             currentShow.classList.add('hide');
//             totalShow.classList.add('present');
//             totalShow.classList.remove('cover');
//            });
//            totalShow.addEventListener('click', () =>{
//             currentNum.classList.add('present');
//             currentNum.classList.remove('cover');
//             totalNum.classList.remove('present');
//             totalNum.classList.add('cover');
//             currentShow.classList.add('present');
//             currentShow.classList.remove('hide');
//             totalShow.classList.remove('present');
//             totalShow.classList.add('cover');
//            });

//     //modal
//     const  modalTrigger = document.querySelectorAll("[data-modal]"),
//            modal = document.querySelector('.modal__brochure'),
//            modalCloseBtn = document.querySelector('[data-close]');
           
           
    

//      //Функция для открытия модальных окон
//         modalTrigger.forEach(btn =>{
//           btn.addEventListener('click', (e) =>{
//             e.preventDefault();
//             modal.style.opacity = 1;
//             modal.style.zIndex = 123213;
//             document.body.style.overflow = "hidden"; // колесо прокрутки
//            });
//         });

//      //Функция для закрытия модального окна
//      function closeModal(){
//             modal.style.opacity = 0;
//             modal.style.zIndex = -5;
// 		    document.body.style.overflow = "visible";
//       }
// 		modalCloseBtn.addEventListener('click', () =>{
// 		    closeModal();
// 						});
	
//     // Кликаем на подложку, модальное окно закрывается.		
// 			modal.addEventListener('click', (e) =>{
//                     if ( e.target.classList.contains('modal__wrapper') || e.target.classList.contains('modal__wrapper-block') ){
//                         closeModal();    
//                             }
//                         });
//     // Кликаем на escp
//             document.addEventListener('keydown', (e) =>{
//                 if(e.code == "Escape"){
//                 closeModal();   
//                 } 
//                             });
               
        


//     // Modal second
//         const  modal2 = document.querySelector('.modal__offer'),
//                modalCloseBtn2 = document.querySelector('[data-close="second"]');
                            
  
//     function openModal2(){
//         modal2.style.opacity = 1;
//         modal2.style.zIndex = 123213;
//         document.body.style.overflow = "hidden"; 
//         clearInterval(modalTimerId);
//     }


//     function closeModal2(){
//         modal2.style.opacity = 0;
//         modal2.style.zIndex = -5;
//         document.body.style.overflow = "visible";
//     };
//     modalCloseBtn2.addEventListener("click", closeModal2); 

//     modal2.addEventListener("click" ,(e) =>{
//       if (e.target.classList.contains('modal__wrapper')  || e.target.classList.contains('modal__wrapper-block')){
//             closeModal2();
//           }
//          });


//         document.addEventListener('keydown', (e)=>{
//          if(e.code == "Escape" ){
//           closeModal2();
//          }
//         });
        
//         const modalTimerId = setTimeout(openModal2,15000);

//         function showModalByScroll(){
//           //Долистал до конца
//           if ( window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight){
//             openModal2();
//             window.removeEventListener('scroll' , showModalByScroll);
//           }
//         }

//         window.addEventListener('scroll', showModalByScroll);

//         //form 
//         const callForm = document.querySelector('.call');
//             callForm.addEventListener('submit', (e)=>{
//             });
});
