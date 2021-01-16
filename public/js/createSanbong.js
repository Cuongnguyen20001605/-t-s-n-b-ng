

const inputDate = document.querySelector("#date")

let dateNow = new Date()
let date = dateNow.getDate() < 9 ? ("0"+dateNow.getDate()) : dateNow.getDate()
let month = (dateNow.getMonth() + 1) < 9 ? (`0${a.getMonth()+1}`) : (a.getMonth()+1)
let year = dateNow.getFullYear()

let min = year + "-" + month + "-" + date

inputDate.setAttribute("min",min)



