//su kien 

const update_container=document.querySelector(".update_container");
const update=update_container.querySelector(".update");
const form_update=document.querySelector("#form_update");
const startTiming=document.querySelectorAll(".startTiming");
const updateDate=document.querySelector("#date")

function hienthiData(data){
     form_update.action="/update?id="+data._id;
     form_update.querySelector("input[name=username]").value=data.username;
     form_update.querySelector("input[name=phone]").value=data.phone;
     form_update.querySelector("input[name=time]").value=data.time;
     form_update.querySelector("input[name=date]").value=data.date;
     let a=form_update.querySelector("select");
     for(let i=0;i<a.length;i++){
          if(a[i].value==data.chonsan){
               a[i].setAttribute("selected","selected");
          }else{
               a[i].removeAttribute("selected");
          }
     }
}


async function updateData(data){
     await fetch('/update?id='+data,{method:'GET'})
          .then(response =>response.json())
          .then(async data => {
               await hienthiData(data);
               update_container.style.display="block";
          });
}
function closeUpdate(){
     update_container.style.display="none";
}
window.onclick = function(event) {
     if (event.target == update_container) {
          update_container.style.display = "none";
     }
}



let a=new Date()
let date=a.getDate()<9?("0"+a.getDate()):a.getDate()
let month=a.getMonth()+1<9?(`0${a.getMonth()+1}`):a.getMonth()+1
let year=a.getFullYear()

let min=year+"-"+month+"-"+date

updateDate.setAttribute("min",min)
