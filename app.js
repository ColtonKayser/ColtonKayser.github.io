$(() => {

  $.ajax({
       url:'https://api.icndb.com/jokes/random?firstName=Colton&lastName=Kayser&exclude=[explicit]'
   }).then(
       (data)=>{
           console.log(data.value.joke);
       },
       ()=>{
           console.log('bad request');
       }
   );














});
