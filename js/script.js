/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/***
  The array of quote objects
***/

const quotes = [
  {
  quote: `Have no fear of perfection—you'll never reach it.`,
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
  getRandomQuote function
***/

const getRandomQuote = () => {
  const randomNumber = Math.floor( Math.random() * quotes.length );
  return quotes[randomNumber];
}
/***
  call getRandomQuote function
***/

getRandomQuote();

/***
printQuote function
***/

const printQuote = () => {

  let randomQuote = getRandomQuote();
  let HTML = ` `;
  HTML += `<p class="quote">` + randomQuote.quote + `.</p>`;
  HTML += `<p class="source">` + randomQuote.source;

  if ( randomQuote.hasOwnProperty('citation')) {
    HTML += `<span class="citation">` + randomQuote.citation + `</span>`;
  }

  if ( randomQuote.hasOwnProperty('year')) {
    HTML += `<span class="year">`+ randomQuote.year + `</span>`;
  }

  HTML +=`.</p>`;

  document.getElementById('quote-box').innerHTML = HTML;
}

/***
call printQuote function
***/

printQuote();

/***
randomBgColor function
***/

 const randomBgColor = () => {
  const x = Math.floor(Math.random() * 256);
  const y = Math.floor(Math.random() * 256);
  const z = Math.floor(Math.random() * 256);
  const bgColor = `rgb(` + x + `,` + y + `,` + z + `)`;
  const container = document.querySelector('.container');
  container.style.backgroundColor = bgColor;
}

const interval = () => {
  window.setInterval(printQuote, 2000);
  window.setInterval(randomBgColor, 2000);
};
interval();


/***
call randomBgColor function
***/
randomBgColor();
/***
call fubntions ptintQuote and randomBgColor by cliclikin button
***/
document.getElementById('loadQuote').addEventListener("click", () => {
  printQuote();
  randomBgColor();
});
