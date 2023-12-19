import './style.css'

const BtnFamily= document.querySelector("#BtnFamily")
const BtnSpecial= document.querySelector("#BtnSpecial")
const BtnSocial= document.querySelector("#BtnSocial")

const BtnFamily2= document.querySelector("#BtnFamily2")
const BtnSpecial2= document.querySelector("#BtnSpecial2")
const BtnSocial2= document.querySelector("#BtnSocial2")

const BtnFamily3= document.querySelector("#BtnFamily3")
const BtnSpecial3= document.querySelector("#BtnSpecial3")
const BtnSocial3= document.querySelector("#BtnSocial3")

const Family=document.querySelector("#familyGathering")
const special= document.querySelector("#SpecialEvents")
const social= document.querySelector("#SocialEvents")

BtnFamily.addEventListener('click',()=>{
    Family.style.display = "block";
    special.style.display = "none";
    social.style.display = "none";
})

BtnFamily2.addEventListener('click',()=>{
    Family.style.display = "block";
    special.style.display = "none";
    social.style.display = "none";
})

BtnFamily3.addEventListener('click',()=>{
    Family.style.display = "block";
    special.style.display = "none";
    social.style.display = "none";
})

BtnSpecial.addEventListener('click',()=>{
    Family.style.display = "none";
    special.style.display = "block";
    social.style.display = "none";
})

BtnSpecial2.addEventListener('click',()=>{
    Family.style.display = "none";
    special.style.display = "block";
    social.style.display = "none";
})

BtnSpecial3.addEventListener('click',()=>{
    Family.style.display = "none";
    special.style.display = "block";
    social.style.display = "none";
})

BtnSocial.addEventListener('click',()=>{
    Family.style.display = "none";
    special.style.display = "none";
    social.style.display = "block";
})

BtnSocial2.addEventListener('click',()=>{
    Family.style.display = "none";
    special.style.display = "none";
    social.style.display = "block";
})

BtnSocial3.addEventListener('click',()=>{
    Family.style.display = "none";
    special.style.display = "none";
    social.style.display = "block";
})