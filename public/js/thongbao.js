
function xulithongbao(elem,backgr,op,di){
     elem.style.background=backgr;
     elem.style.opacity=op;
     elem.style.display=di;
}

if(document.getElementById("messages")){
     let a= document.getElementById("messages");
     if(a.querySelector("ul").className=="success"){
          xulithongbao(a,"green","1","block");
          setTimeout(()=>{
               xulithongbao(a,"green","0","none");
          },5000);
     }else{
          xulithongbao(a,"red","1","block");
          setTimeout(()=>{
               xulithongbao(a,"red","0","none");
          },5000);
     }
}