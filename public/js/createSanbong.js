

const inputdate=document.querySelector("#date")

let a=new Date()
let date=a.getDate()<9?("0"+a.getDate()):a.getDate()
let month=a.getMonth()+1<9?(`0${a.getMonth()+1}`):a.getMonth()+1
let year=a.getFullYear()

let min=year+"-"+month+"-"+date

inputdate.setAttribute("min",min)



