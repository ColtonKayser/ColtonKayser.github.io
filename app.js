$(() => {


///////////////////Carousel
////////   NOTE: I referenced Jerrica's carousel code along to get my carousel up and running. There are some similarities, but I chose to display/hide the images on load using jquery instead of css.

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
  // console.log($numberOfImages);

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
      ///reset current image index to 0
      $currentImgIndex = 0;
    }
    /////get new current image
    $currentImg = $('.carousel-images').children().eq($currentImgIndex);
    ////show new image on DOM
    $currentImg.show();
  });


  /////grab previous button
  const $previous = $('.previous-button');

  /////event handler for previous buttons
  ////previous button on click
  $previous.on('click', () => {
    ///hide current image
    $currentImg.hide();
    /////if image index is greater than 0
    if ($currentImgIndex > 0) {
      ///decrement image index
      $currentImgIndex--;
    } else {
      ///reset current image index to highest amount
      $currentImgIndex = $numberOfImages;
    }
    ///get new current image
    $currentImg = $('.carousel-images').children().eq($currentImgIndex);
    ////show current image on DOM
    $currentImg.show();
  })




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
      url:'https://api.icndb.com/jokes/random?firstName=' +$firstName+ '&lastName=' +$lastName+'&exclude=[explicit]'
   }).then(
       (data)=>{
         console.log('after ajax');
         ///get joke
         console.log(data.value);
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
