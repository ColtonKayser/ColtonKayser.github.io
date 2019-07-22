# The Chuck Norrizer

The Chuck Norrizer is a web application that accesses [The Chuck Norris Database](http://www.icndb.com/api/), an API that has access to over 500 Chucnk Norris jokes, and lets you put your own name in the jokes. It is my first project for my Software Engineering Immersive Course at [General Assembly](https://generalassemb.ly/).

## The API

[The Chuck Norris Database](http://www.icndb.com/api/) is a simple API where you can pull only a fair key pairs from your call back objects. They are: id, joke, and genre.

Id is the what number the joke represents in the database.

Joke is the text of the specific joke called.

Genre is only filled out within some of the objects. For most objects, it is an empty string. Genre is used for filtering jokes during your callback. Since my purposes are educational, I have filtered out the genre: explicit jokes. However, some jokes have not been labeled properly, so a few explicit jokes remain. 

## Technology Used

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

Input fields are used on the html where the user can type in their first and last names. Once the "GET NORRIZED" or "GET ANOTHER JOKE" button is clicked, the inputted names will be stored in the variables $firstName and $lastName. Those variables manipulate the callback url, and the name the user has inputted are inserted into the jokes. If no input is entered, and the "GET NORRIZED" or "GET ANOTHER JOKE" button is clicked, the default name in each joke will be "Chuck Norris." 
