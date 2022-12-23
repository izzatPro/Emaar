document.addEventListener('DOMContentLoaded', () =>{
    let radio = document.querySelectorAll('.tabheader__item');
    let parentTabs = document.querySelector('.flats__content_wrapper');
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





            
            // function hideTabContent(){
            //     mainTabs.forEach(item =>{
            //         item.classList.add('hide');
            //         item.classList.remove('show');
            //     });
            //     radio.forEach(item =>{
            //         item.classList.remove('flats__content_active');
            //     });
            // }

            // function showTabContent(i = 1){
            //     console.log(mainTabs[1]);
            //     mainTabs[i].classList.add('show');
            //     mainTabs[i].classList.remove('hide');
            //     radio[i].classList.add('flats__content_active');
            // }
            // hideTabContent();
            // showTabContent();

            // parentTabs.addEventListener('click', (e) =>{

            //     if(e.target && e.target.classList.contains('tabheader__item')){
            //         radio.forEach((item , i ) => {
            //            if( e.target == item ){
            //             hideTabContent();
            //             showTabContent(i);
            //            }
            //         });
            //     }
            // });


});
