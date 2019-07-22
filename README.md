# The Chuck Norrizer

The Chuck Norrizer is a web application that accesses [The Chuck Norris Database](http://www.icndb.com/api/), an API that has access to over 500 Chucnk Norris jokes, and lets you put your own name in the jokes. It is my first project for my Software Engineering Immersive Course at [General Assembly](https://generalassemb.ly/).

## The API

[The Chuck Norris Database](http://www.icndb.com/api/) is a simple API where you can pull only a fair key pairs from your call back objects. They are: id, joke, and genre.

Id is the what number the joke represents in the database.

Joke is the text of the specific joke called.

Genre is only filled out within some of the objects. For most objects, it is an empty string. Genre is used for filtering jokes during your callback. Since my purposes are educational, I have filtered out the genre: explicit jokes. However, some jokes have not been labeled properly, so a few explicit jokes remain. 

# Technology Used

## AJAX and Jquery
The app uses an ajax callback to access the API, and I have manipulated the callback url using jquery to callback a random joke and customize the name in that joke. As stated above, I have filtered out explicit jokes, so I have manipulated the url to do that as well. Here is the visual example:

```javascript
  $.ajax({
      url:'https://api.icndb.com/jokes/random?firstName=' +$firstName+ '&lastName=' +$lastName+'&exclude=[explicit]'
   }).then(
       (data)=>{
         ///get joke
           let $joke = data.value.joke;
           //////changes text in joke container
           $('#joke-container').html($joke);
       },
       ()=>{
           console.log('bad request');
      }
   );
```

Input fields are used on the html where the user can type in their first and last names, and buttons are used to start on.('click) functions. Once the "GET NORRIZED" or "GET ANOTHER JOKE" button is clicked, the inputted names will be stored in the variables $firstName and $lastName. Those variables manipulate the callback url, and the name the user has inputted are inserted into the jokes, which are then inserted into a joke container div on the DOM. If no input is entered, and the "GET NORRIZED" or "GET ANOTHER JOKE" button is clicked, the default name in each joke will be "Chuck Norris." 

## Carousels

There are two carousels on the app. One allows the user to manipulate which picture of Chuck is showing on the DOM, and the other automatically cycles through an array of Chuck Norris facts.

## Image Carousel

The image carousel hides and shows three seperate photos of Chuck that are <img> elements hardcoded into the html. Using jquery, both the previous and next buttons are using on.('click') event listeners to hide the existing image, change the image index number to reflect the next or previous image, and then show the new image that has the corresponding index number on the DOM. A visual example with comments is below:

```javascript
///////////////////Carousel

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
    ////stop auto run
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
```

## Chuck Facts Carousel

During the creation process for the Image Carousel, I thought about using a set interval function to change the images every few seconds. Once coded and tested, I found the auto cycling to be a distraction from reading the jokes. I did however, think the feature would be good for something that takes up less space visiually. Text seemed to be the perfect solution for this.  Since this API is very simple and only has a few key pair values in it's objects, I decided to look for outside data. I compiled a number Chuck Norris facts in an array, and used jquery, and the set interval function to switch them out every few seconds. Here is the visual examples with commments below:

```Javascript
////Array of Chuck Facts
  const chuckFacts = ['Chuck Norris’s full name is Carlos Ray Norris.', 'Chuck served in the US Air Force from 1958-1962.', 'Chuck Norris Superkicks is a video game that was released for the Atari 2600 in 1983.', 'Chuck Norris has his own style of competitive fighting known as Chun Kuk Do.', 'Chuck Norris was Bruce Lee’s Nemesis in the 1972 movie, Way of the Dragon.', 'Norris began his martial arts training in South Korea in 1958.', 'Norris won karate’s triple crown for most tournament wins of the year in 1968.', 'Chuck Norris is a fan of Chuck Norris jokes.'];
  


/////Function to run the fact change function every four seconds
  setInterval(function(){
    factChange();
  },4000);

////Chuck Fact array index number
  let indexNum = 0;

//////Make the text of the Chuck Facts container the chuck fact with the corresponding index
  $('#chuck-facts').text(chuckFacts[indexNum]);

/////function to have facts change
  const factChange = () => {
    ////increase index number of chuck facts
    indexNum++;
    /////reset to beginning of array if we hit all the facts
    if (indexNum > (chuckFacts.length - 1)) {
      indexNum = 0;
    }
    $('#chuck-facts').text(chuckFacts[indexNum])
  }
```
I think the fact carousel compliments the image carousel nicely, and also allows for a nicer UI.

## FAQ Modal

I thought it would be nice to put in a FAQ section to not only instruct the user how to use the app properly, but also instill some more humor into the app. The answers are written from a humorous perspective. The FAQ button uses an on.('click) event listener to switch between .hide() and .show() functions for the modal holding the FAQ text. The visual example with comments is below:

```javascript
////gets FAQ button
  const $openFAQ = $('#openFAQ');

  /////grabs the modal itself
  const $modal = $('#modal');

  ////grabs close button
  const $closeFAQ = $('#closeFAQ');

  ////hide modal
  $modal.hide();

  /////function to open modal
  const openModal = () => {
    $modal.show();
  }

  ////open Modal Event listner
  $openFAQ.on('click', openModal);

  ////function to close modal
  const closeModal = () => {
    $modal.hide();
  }

////close modal event listener
  $closeFAQ.on('click', closeModal);
```
# Issues and Limitations

## API Scope
Due to the simple scope of the API, there is not much more information to pull other than joke id and the jokes themselves. Although some of the jokes have been placed in genre categories, most do not have a category, and the category process feels incomplete. This leads to sorting issues, especially for filtering explicit jokes. 

## Callback Response
Sometimes the callback response of the API is slow, and can lead to the user waiting for a new joke for upwards of 45 seconds. It happens at random intervals, and is generally fixed within a half hour.
