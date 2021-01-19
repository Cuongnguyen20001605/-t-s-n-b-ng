//su kien 

const updateContainer=document.querySelector(".update_container")
const update=updateContainer.querySelector(".update")
const formUpdate=document.querySelector("#form_update")
const startTiming=document.querySelectorAll(".startTiming")
const updateDate=document.querySelector("#date")

function hienThiData(updateData){
     formUpdate.action="/update?id="+updateData._id;
     formUpdate.querySelector("input[name=name]").value=updateData.name
     formUpdate.querySelector("input[name=phone]").value=updateData.phone
     formUpdate.querySelector("input[name=time]").value=updateData.time
     formUpdate.querySelector("input[name=date]").value=updateData.date
     let a=formUpdate.querySelector("select")
     for(let i=0;i<a.length;i++){
          if(a[i].value===updateData.chonsan){
               a[i].setAttribute("selected","selected")
          }else{
               a[i].removeAttribute("selected")
          }
     }
}


async function updateData(data){
     await fetch('/update?id='+data,{method:'GET'})
          .then(response =>response.json())
          .then(async data => {
               hienThiData(data)
               updateContainer.style.display="block"
          });
}
function closeUpdate(){
     updateContainer.style.display="none"
}
window.onclick = function(event) {
     if (event.target === updateContainer) {
          updateContainer.style.display = "none"
     }
}

let dateNow = new Date()
let date = dateNow.getDate() < 9 ? ("0"+dateNow.getDate()) : dateNow.getDate()
let month = (dateNow.getMonth()+1)< 9 ? (`0${dateNow.getMonth()+1}`) : (dateNow.getMonth()+1)
let year=dateNow.getFullYear()

let minDate=year+"-"+month+"-"+date

updateDate.setAttribute("min",minDate)


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





