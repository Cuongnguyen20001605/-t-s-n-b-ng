async function deleteData(data){
     await fetch("/delete?id="+data,{method:"DELETE"})
          .then(text=>{
               location.reload();
          });
}