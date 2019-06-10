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
  qoute: "Have no fear of perfection—you'll never reach it.",
  source: "Salvador Dali",
  citation: "invisionapp",
  year: "1976"
},
  {
  qoute: "Good design is like a refrigerator—when it works, no one notices, but when it doesn’t, it sure stinks.",
  source: "Damian Jolley",
},
  {
  qoute: "Digital design is like painting, except the paint never dries.",
  source: "Neville Brody",
},

  {
  qoute: "The role of the designer is that of a good, thoughtful host anticipating the needs of his guests.",
  source: "Charles Eames",
},
  {
  qoute: "Make it simple, but significant.",
  source: "Don Draper",
  }
];



/***
  Create the `getRandomQuote` function to:
   - Create a variable to store a random number
   - Cse the random number to `return` a random quote object from the `quotes` array.
***/

const getRandomQuote = () => {
  const randomNumber = Math.floor( Math.random() * quotes.length ) + 1;
  return quotes(randomNumber);
};

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

// HTML += '<p class="quote">' + qoutes.qoute + '.</p>';
// HTML += '<p class="source">' + qoutes.source + '<span class="citation">' + qoutes.citation + '</span>'
// + '<span class="year">'+ qoutes.year + '</span>' + '.</p>';
// const randomNumber  =  getRandomQuote();
// let HTML = '';
// HTML += '<p class="quote">' + getRandomQuote.qoute + '.</p>';
// HTML += '<p class="source">' + getRandomQuote.source;
// console.log(HTML);

// const printQuote = () => {
//   const randomNumber  =  getRandomQuote();
//   let HTML = '';
//   HTML += '<p class="quote">' + getRandomQuote.qoute + '.</p>';
//   HTML += '<p class="source">' + getRandomQuote.source;
//   if(qoutes.citation === " " ){
//     HTML += '<span class="citation">' + qoutes.citation + '</span>';
//   }
//   if(qoutes.citation === " " ){
//   HTML += '<span class="year">'+ qoutes.year + '</span>' + '.</p>';
//   }
//   console.log(HTML);
// };

/***
  When the "Show another quote" button is clicked, the event listener
  below will be triggered, and it will call, or "invoke", the `printQuote`
  function. So do not make any changes to the line of code below this
  comment.
***/

// document.getElementById('loadQuote').addEventListener("click", printQuote, false);


// Remember to delete the comments that came with this file, and replace them with your own code comments.
