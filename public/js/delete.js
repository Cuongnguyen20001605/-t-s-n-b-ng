async function deteleBooking(_id){
     alert("Bạn có chắc muốn xóa dữ liệu không")
     await fetch("/delete?id="+_id,{method:"DELETE"})
          .then(response => response.json())
          .then(data => {
               location.reload()
          })
}