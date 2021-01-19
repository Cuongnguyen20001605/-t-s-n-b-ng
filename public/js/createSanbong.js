

const inputDate = document.querySelector("#date")

let dateNow = new Date()
let date = dateNow.getDate() < 9 ? ("0"+dateNow.getDate()) : dateNow.getDate()
let month = (dateNow.getMonth() + 1) < 9 ? (`0${dateNow.getMonth()+1}`) : (dateNow.getMonth()+1)
let year = dateNow.getFullYear()

let min = year + "-" + month + "-" + date

inputDate.setAttribute("min",min)


const ul=document.querySelector(".TimePermanent")
const li=ul.querySelectorAll("li")
const inputTime=document.querySelector("input[name=time]")
function openTime(){
     ul.style.display="block"
}

for(let i=0;i<li.length;i++){
     li[i].onclick=function(){
          inputTime.value=li[i].innerText
           ul.style.display="none"
     }
}

