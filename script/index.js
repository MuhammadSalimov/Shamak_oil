const btnok = document.querySelector('.btn-ok')
const successdiv = document.querySelector('.success-div')



const TOKEN = "6099226775:AAG56-goOWGyfhcLiLvacSGsuZHQrfl9DhQ"
const ChAT_ID = "-1001725081225"
const URL_API=`https://api.telegram.org/bot${ TOKEN }/sendMessage`;
const Form = document.getElementById('tg')

Form.addEventListener('submit', function(e){
    e.preventDefault()
    let message = `<b>Ariza Yuboruvchi !</b>\n`
    message += `<b>Ismi: </b> ${this.name.value}\n`
    message += `<b>Tel-raqami: </b> ${this.phone.value}\n`
    message += `<b>Yashash Manzili: </b> ${this.location.value}\n`
   
  console.log(message);
    axios.post(URL_API , {
        chat_id:ChAT_ID,
        parse_mode:'html',
        text:message
    })


    e.target.reset()
    successdiv.style.left='0%'

})


btnok.addEventListener('click' , ()=>{
    successdiv.style.left='-100%'
    successdiv.style.zidIndex= "1000"
})