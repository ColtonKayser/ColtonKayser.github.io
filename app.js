$(() => {

  //Establish current image index
  let $currentImgIndex = 0;
  // grab current image element
  let $currentImg= $('.carousel-images').children().eq($currentImgIndex);
  ////hide all the images on init
  $('.carousel-images').children().hide();
  ////show first image on init
  $('.carousel-images').children().eq(0).show();
  /////grab total number of images
  let $numberOfImages = $('.carousel-images').children().length - 1;
  console.log($numberOfImages);

  ////grab next button
  const $next = $('.next-button');

  ///event handler for next button
  ///next button on click
  $next.on('click', () => {
    ////hides current image
    $currentImg.hide();
    ////if the image index is less than total number of images
    if($currentImgIndex < $numberOfImages) {
      ///increment it
      $currentImgIndex++;
      ///if not
    } else {
      ///reset current image index
      $currentImgIndex = 0;
    }
    /////get new current image
    $currentImg = $('.carousel-images').children().eq($currentImgIndex);
    ////show new image on DOM
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
