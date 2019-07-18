$(() => {
//////get user input on button click
  $('.norrized-button').on('click', (event) => {
    /////prevent refresh
    event.preventDefault();
    /////get user input for first name
    let $firstName = $('#first-name').val();
    ///sets default first name as Chuck
    if ($firstName == ''){
      $firstName = 'Chuck';
    }
    // console.log($firstName);

    ////get user input for last name
    let $lastName = $('#last-name').val();
    ///sets default last name as Norris
    if ($lastName == ''){
      $lastName = 'Norris';
    }
    // console.log($lastName);


    // const $jokeRandomizer = Math.floor(Math.random() * 550);
    // console.log($jokeRandomizer);


  $.ajax({
      url:'https://api.icndb.com/jokes/random?firstName=' +$firstName+ '&lastName=' +$lastName+ '&exclude=[explicit]'
   }).then(
       (data)=>{
         ///get joke
           let $joke = data.value.joke;
           ////create div to store joke
           // let $jokeContainer = $('<div>').addClass('joke-container');
           ///add joke div to DOM
           $('#whole-container').text($joke);
           ///add joke to joke div
           // $($jokeContainer).append($joke);

           // const $moreJokesbutton = $('<button>').text('Another Joke').addClass('norrized-button');
           // $('body').append($moreJokesbutton);

            // $moreJokesbutton.on('click', () => {
            //   // const $jokeRandomizer = Math.floor(Math.random() * 550);
            //   $($jokeContainer).append($joke);
            // })







       },
       ()=>{
           console.log('bad request');
       }
   );











   })


});
