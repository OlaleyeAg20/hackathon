const storeInfoDisplay = document.querySelector('.storeInfo')
const profileInfoBtn = document.querySelector('.profileInfo')
const notificationBtn = document.querySelector('#notificationBtn')
const notificationDisplay = document.querySelector('.notificationDisplay')

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


