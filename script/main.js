const cube = document.querySelectorAll('.cube')
const span= document.querySelectorAll('span')
const done = document.querySelector('.done')
const formSection = document.querySelector('.form-section')
const btnDone  = document.querySelector('.btn-done')
const cubicSection = document.querySelector('.cubic-section')
const Formtg = document.getElementById('tg')

cube.forEach((e)=>{
    e.addEventListener('click' ,(elem)=> {
        const parent= elem.target.parentElement
        parent.classList.add('show')
        setTimeout(function spanShow(){
            span.forEach((e)=>{
                e.classList.add('show')
                setTimeout(()=>{
                    done.style.left="0%"
                    setTimeout(()=>{
                        cubicSection.style.display="none"
                        formSection.style.display="block"
                    },4000)
                },1000)
            })
        },1000)
        
        spanShow()
    })
})



btnDone.addEventListener('click' , ()=>{
    cubicSection.style.display="none"
    formSection.style.display="block"
})




