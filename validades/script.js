let btnSousam = document.querySelector("#btnSousam")
let btnBotumedic = document.querySelector("#btnBotumedic")
let btnItamedic = document.querySelector("#btnItamedic")
let changeBgColorBtn = document.querySelector("#switch-bg-color")

let validadesSousam = document.querySelector('.validades-sousam')
let validadesBotumedic = document.querySelector('.validades-botumedic')
let validadesItamedic = document.querySelector('.validades-itamedic')

let mainContainer = document.querySelector('.main-container')
let validadesContainer = document.querySelector('.validades')
let footer = document.querySelector('footer')

btnSousam.addEventListener("click", () =>{
    hideButtons(btnBotumedic, btnItamedic)
    validadesSousam.classList.toggle('hide')
})

btnBotumedic.addEventListener("click", () =>{
    hideButtons(btnSousam, btnItamedic)
    validadesBotumedic.classList.toggle('hide')
})

btnItamedic.addEventListener("click", () =>{
   hideButtons(btnSousam, btnBotumedic)
   validadesItamedic.classList.toggle('hide')
})

changeBgColorBtn.addEventListener('click', ()=>{
    changeBgColor(mainContainer, validadesContainer, footer)
})

function changeBgColor(container, content, footer){
    container.classList.toggle('day')
    content.classList.toggle('day')
    footer.classList.toggle('day')
    document.body.classList.toggle('day')
}


function hideButtons(btn1, btn2){
    let contentContainer = document.querySelector('.content')
    btn1.closest('div').classList.toggle('hide')
    btn2.closest('div').classList.toggle('hide')
    contentContainer.style.justifyContent = 'center'
    contentContainer.style.animation = 'fade 1s linear'
}


