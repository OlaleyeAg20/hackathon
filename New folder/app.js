const storeInfoDisplay = document.querySelector('.storeInfo')
const profileInfoBtn = document.querySelector('.profileInfo')
const notificationBtn = document.querySelector('#notificationBtn')
const notificationDisplay = document.querySelector('.notificationDisplay')
const cancelBtn = document.querySelector('.cancelBtn')
const popUp = document.querySelector('.announcement')
const drawUp = document.querySelector('#drawUpBtn')
const dropDown = document.querySelector('#dropDownBtn')
const progressGuage = document.getElementById('progressGuage')
const guage = document.querySelector('.guage')
const checkboxContainer = document.querySelector('.checkboxContainer')


dropDown.addEventListener('click', function(){
    checkboxContainer.style.display = 'block'
    dropDown.style.display = 'none'
    drawUp.style.display = 'block'
})

drawUp.addEventListener('click', function(){
    checkboxContainer.style.display = 'none'
    dropDown.style.display = 'block'
    drawUp.style.display = 'none'
})

cancelBtn.addEventListener('click', function(){
    popUp.style.display = "none"
})

let completedStep = 0

const checkBtns = document.querySelectorAll('input[type="checkbox"]')
console.log(checkBtns)

const checkedIcon = document.querySelectorAll('.checked')
const uncheckedIcon = document.querySelectorAll('.unchecked')
const checkBoxes = document.querySelectorAll('.checkboxes')
const radioBtn = document.querySelectorAll('input[type="radio"]')

checkBtns.forEach((e) => {
    e.addEventListener('change', function(){
        if(this.checked){
            completedStep++
            checkedIcon[this.value - 1].style.display = "inline"
            uncheckedIcon[this.value - 1].style.display = "none"
        }else{
            completedStep--
            checkedIcon[this.value - 1].style.display = "none"
            uncheckedIcon[this.value - 1].style.display = "inline"
        }
        progressGuage.textContent = `${completedStep} / ${checkBtns.length} completed`
        guage.style.width = (completedStep/checkBtns.length * 100) + "%"
    })
})

radioBtn.forEach((e) => {
    e.addEventListener('change', function(){
        if(this.checked){
            checkBoxes[this.value - 1].style.background = "#F3F3F3"
        }else{
            checkBoxes[this.value - 1].style.background = "#fff"
        }
    })
})


guage.style.width = (completedStep/checkBtns.length * 100) + "%"
progressGuage.textContent = `${completedStep} / ${checkBtns.length} completed`



const template = `<span>1 / 5 completed</span>`

let isClicked = false
let isClicked1 = false


profileInfoBtn.addEventListener('click', hideShowStoreInfo)

notificationBtn.addEventListener('click', hideShowNotification)

function hideShowNotification(){
    isClicked1 = false
    isClicked = !isClicked
    if(isClicked === true){
        notificationDisplay.style.display = 'block'
        notificationBtn.style.background = '#656266'
    }else{
        notificationDisplay.style.display = 'none'
        notificationBtn.style.background = '#303030'
    }
    storeInfoDisplay.style.display = 'none'
    profileInfoBtn.style.background = '#303030'
}

function hideShowStoreInfo(){
    isClicked = false
    isClicked1 = !isClicked1
    if(isClicked1 === true){
        storeInfoDisplay.style.display = 'block'
        profileInfoBtn.style.background = '#656266'
    }else{
        storeInfoDisplay.style.display = 'none'
        profileInfoBtn.style.background = '#303030'
    }
    notificationDisplay.style.display = 'none'
    notificationBtn.style.background = '#303030'
    
}


