$(() => {

  //Keep track of current image index
  let $currentImgIndex = 0;
  // grab current image element
  let $currentImg= $('.carousel-images').children().eq($currentImgIndex);
  ////hide all the images on init
  $('.carousel-images').children().hide();
  ////show first image on init
  $('.carousel-images').children().eq(0).show();
  /////total number of images
  let $numberOfImages = $('.carousel-images').children().length - 1;
  console.log($numberOfImages);


  const $next = $('.next-button');

  $next.on('click', () => {
    $currentImg.hide();

    if($currentImgIndex < $numberOfImages) {
      $currentImgIndex++;
    } else {
      $currentImgIndex = 0;
    }
    $currentImg = $('.carousel-images').children().eq($currentImgIndex);
    $currentImg.show();
  });






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

    console.log('before ajax');
  $.ajax({
      url:'https://api.icndb.com/jokes/random?firstName=' +$firstName+ '&lastName=' +$lastName+ '&exclude=[explicit]'
   }).then(
       (data)=>{
         console.log('after ajax');
         ///get joke
           let $joke = data.value.joke;
           //////changes text in joke container
           $('#joke-container').text($joke);
       },
       ()=>{
           console.log('bad request');
      }
   );
  })
});
