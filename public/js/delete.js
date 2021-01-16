async function deteleBooking(_id){
     await fetch("/delete?id="+_id,{method:"DELETE"})
          .then(text=>{
               location.reload()
          }
     )
}