let user = prompt("Hello! What is your name?")

let contactName = document.getElementById("contactName")
let contactDate = document.getElementById("contactDate")
let contactEmail = document.getElementById("contactEmail")
let contactMessage = document.getElementById("contactMessage")

let previewName = document.getElementById("previewName")
let previewDate = document.getElementById("previewDate")
let previewEmail = document.getElementById("previewEmail")
let previewMessage = document.getElementById("previewMessage")

if(user == ''){
    location.reload()
}

let welcome = document.querySelector(".welcomeName")
welcome.innerHTML = user

setPreview = () => {
    previewName.innerHTML = contactName.value
    previewDate.innerHTML = contactDate.value
    previewEmail.innerHTML = contactEmail.value
    previewMessage.innerHTML = contactMessage.value
}