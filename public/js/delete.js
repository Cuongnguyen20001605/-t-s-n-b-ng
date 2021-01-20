async function deteleBooking(_id){
     let bool = confirm("bạn chắc chắn muốn xóa không???")
    if(bool){
          await fetch("/delete?id="+_id,{method:"DELETE"})
               .then(response => response.json())
               .then(data => {
                    location.reload()
          })
    }
}