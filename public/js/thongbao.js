
function xuLiThongBao(element,background,opacity,display){
     element.style.background=background
     element.style.opacity=opacity
     element.style.display=display
}

if(document.getElementById("messages")){
     let messages= document.getElementById("messages")
     if(messages.querySelector("ul").className==="success"){
          xuLiThongBao(messages,"green","1","block")
          setTimeout(()=>{
               xuLiThongBao(messages,"green","0","none")
          },5000)
     }else{
          xuLiThongBao(messages,"red","1","block")
          setTimeout(()=>{
               xuLiThongBao(messages,"red","0","none")
          },5000)
     }
}