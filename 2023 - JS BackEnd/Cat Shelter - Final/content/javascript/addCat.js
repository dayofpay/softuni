document.addEventListener('DOMContentLoaded',function(){
    let getAddCatBtn = document.querySelector('.cat-form > button:nth-child(9)');

    getAddCatBtn.addEventListener('click',addCat);


    function addCat(e){
        setTimeout(() => {
            //page.redirect('/');
        }, 1000);
    }
})