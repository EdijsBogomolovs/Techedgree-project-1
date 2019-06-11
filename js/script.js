/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1s5grutGuQFwJcQP8bFwEI69Q8FCkGdDk/view?usp=sharing


/***
  Create the array of quote objects and name it `quotes`.
  Add at least five quote objects to the `quotes` array.
  Give each quote object a `quote` and `source` property.
  Add the `citation` property to at least one object in the array.
  Add the `year` property to at least one object in the array.
  Use console.log() to log your array of quotes to the console.
***/

const quotes = [
  {
  quote: "Have no fear of perfection—you'll never reach it.",
  source: "Salvador Dali",
  citation: "invisionapp",
},
  {
  quote: "Good design is like a refrigerator—when it works, no one notices, but when it doesn’t, it sure stinks.",
  source: "Damian Jolley",
},
  {
  quote: "Digital design is like painting, except the paint never dries.",
  source: "Neville Brody",
  year: "1976"
},

  {
  quote: "The role of the designer is that of a good, thoughtful host anticipating the needs of his guests.",
  source: "Charles Eames",
},
  {
  quote: "Make it simple, but significant.",
  source: "Don Draper",
  }
];

console.log(quotes);

/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

const getRandomQuote = () => {
  const randomNumber = Math.floor( Math.random() * quotes.length );
  return quotes[randomNumber];
}

console.log(getRandomQuote());

/***
  Create the `printQuote` function to:
   - Call the `getRandomQuote` function and assign it to a variable.
   - Create a variable for the HTML string and set it equal to an empty string.
   - Use the HTML template in the instructions or the markup in the index.html file, AND
     the random quote vairable to build your HTML string.
   - Add the quote and source section to the HTML string.
   - Use an if statement to check for the citation property before adding it to the HTML string.
   - Use an if statement to check for the year property before adding it to the HTML string.
   - Don't forget to close that final `p` tag.
   - Set the `innerHTML` of the `quote-box` div to the HTML string.
***/

const printQuote = () => {

  let randomQuote = getRandomQuote();

  let HTML = ' ';
  HTML += '<p class="quote">' + randomQuote.quote + '.</p>';
  HTML += '<p class="source">' + randomQuote.source;

  if ( randomQuote.hasOwnProperty('citation') === true ) {
    HTML += '<span class="citation">' + randomQuote.citation + '</span>';
  }

  if ( randomQuote.hasOwnProperty('year') === true ) {
    HTML += '<span class="year">'+ randomQuote.year + '</span>';
  }

  HTML +='.</p>';

  document.getElementById('quote-box').innerHTML = HTML;
}
printQuote();

 const random_bg_color = () => {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  console.log(bgColor);
  document.body.style.backgroundColor = bgColor;
}
console.log(random_bg_color());

/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
