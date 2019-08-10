

window.addEventListener('scroll',function(event){
    const postiion =  (window.pageYOffset !== undefined) ? window.pageYOffset : (document.documentElement || document.body.parentNode || document.body).scrollTop;


    if(postiion>=200){
        document.querySelector('.gallery').classList.add('change')
    }else{
        document.querySelector('.gallery').classList.remove('change')
    }
})

document.querySelector('.writers-col').addEventListener('click',(event) => {
    if(event.target.id.split('-')[0] === 'button'){
        let author = event.target.id.split('-')[1];
        
         document.querySelector('#book1').setAttribute('src',"img/writers/" + author + "-book1.jpg")
         document.querySelector('#book2').setAttribute('src',"img/writers/" + author + "-book2.jpg")

    }
})

document.querySelector('.navigation').addEventListener('click',function(){
    document.querySelector('.navigation').classList.toggle('change')
})