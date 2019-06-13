/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/


/***
  The array of quote objects
***/

const quotes = [
  {
  quote: `“It’s not enough that we build products that function, that are understandable and usable, we also need to build products that bring joy and excitement, pleasure and fun, and yes, beauty to people’s lives.”`,
  source: "Don Norman",
  role: "Designer"
},
  {
  quote: "Good design is like a refrigerator—when it works, no one notices, but when it doesn’t, it sure stinks.",
  source: "Damian Jolley",
  role: "Designer"
},
  {
  quote: `Without requirements or design, programming is the art of adding bugs to an empty text file`,
  source: "Louis Srygley",
  year: "2002",
  role: "Programmer"
},

  {
  quote: "Experience is the name everyone gives to their mistakes.",
  source: "Oscar Wilde",
  citation: "invisionapp",
  role: "Programmer"
},
  {
  quote: "Make it simple, but significant.",
  source: "Don Draper",
  year: "2010",
  role: "Designer"
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
printQuote function
***/
const printQuote = () => {

  let randomQuote = getRandomQuote();
  let HTML = ` `;
  HTML += `<p class="quote"> ${randomQuote.quote} .</p>
          <p class="source"> ${randomQuote.source}`;

  if ( randomQuote.hasOwnProperty('citation')) {
    HTML += `<span class="citation"> ${randomQuote.citation}</span>`;
  }

  if ( randomQuote.hasOwnProperty('year')) {
    HTML += `<span class="year"> ${randomQuote.year} </span>`;
  }

  HTML +=`<span class="year"> ${randomQuote.role}</span></p> `;

  document.getElementById('quote-box').innerHTML = HTML;
}

/***
call printQuote function
***/

printQuote();


randomNumberGenerator = () => Math.floor(Math.random() * 256);

/***
randomBgColor function
***/

 const randomBgColor = () => {
  const x = randomNumberGenerator();
  const y = randomNumberGenerator();
  const z = randomNumberGenerator();
  const bgColor = `rgb( ${x}, ${y}, ${z} )`;
  const container = document.querySelector('.container');
  container.style.backgroundColor = bgColor;
}

const interval = () => {
  window.setInterval(printQuote, 4000);
  window.setInterval(randomBgColor, 4000);
}
interval();


/***
call randomBgColor function
***/
randomBgColor();
/***

call function printQuote and randomBgColor by clicking button
***/
document.getElementById('loadQuote').addEventListener("click", () => {
  printQuote();
  randomBgColor();
});
