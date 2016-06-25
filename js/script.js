// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// get random quote function that selects a random quote object from the quotes array
// and returns the randomly selected quote object
function getRandomQuote() {
    var theQuote = Math.floor(Math.random() * quotes.length);
    return quotes[theQuote];
}

// function displays a random color each time a new quote is shown
function randColor() {
  var hexColorsArray = ['#FF0000', '#008000', '#0000FF', '#800080', '#800000', '#FF00FF'];
  var hexColor = hexColorsArray[Math.floor(Math.random() * hexColorsArray.length)];
  document.getElementById('background-color').style.background = hexColor;
}

// printQuote calls the getRandomQuote function and stores the returned quote object in a variable
// printQuote constructs a string using the different properties of the quote object using the following
// HTML template: <p class="quote"> [quote here] </p> <p class="source"> [source here]
// <span class="citation"> [citation here] </span> <span class="year"> [year here] </span> </p>
// printQuote doesn't add a <span class="citation"> for a missing citation or a
// <span class="year"> if the year property is missing
// printQuote displays the final HTML string to the page. You can use the following
// JS snippet to accomplish that: document.getElementById('quote-box').innerHTML
function printQuote() {
  var selectedRandomQuote = getRandomQuote();
  var html = '<p class="quote">' + selectedRandomQuote.quote + '</p>'
  + '<p class="source">' + selectedRandomQuote.source +
  '<span class="citation">' + selectedRandomQuote.citation + '</span>'
  + '<span class="year">' + selectedRandomQuote.year + '</span>' + '<span class="category">'
  + selectedRandomQuote.category + '</span>' + '</p>';
  document.getElementById('quote-box').innerHTML = html;
  randColor();
}

// Quotes change automatically after certain amount of time passes
function changeQuote() {
  var timeoutID = window.setInterval(printQuote, [4000]);
}

// an array of objects to hold the data for the quotes
var quotes = [
  {
    quote: 'The journey of a thousand miles begins with one step.',
    source: 'Lao Tzu',
    citation: 'Wiktionary',
    year: 'c 551 bc - c 479 bc',
    category: "Inspiration"
  },
  {
    quote: 'He who knows best knows how little he knows.',
    source: 'Thomas Jefferson',
    citation: 'Monticello',
    year: '1812',
    category: 'Inspiration'
  },
  {
    quote: 'A man may die, nations may rise and fall, but an idea lives on.',
    source: 'John F. Kennedy',
    citation: 'presidency.ucsb.edu',
    year: '1963',
    category: 'Inspiration'
  },
  {
    quote: 'If you spend too much time thinking about a thing, you\'ll never get it done',
    source: 'Bruce Lee',
    citation: 'Wikipedia',
    year: '1940 - 1973',
    category: 'Inspiration'
  },
  {
    quote: 'All that we see or seem is but a dream within a dream',
    source: 'Edgar Allan Poe',
    citation: 'Wikipedia',
    year: '1849',
    category: 'Inspiration'
  },
  {
    quote: 'We are always getting ready to live but never living',
    source: 'Ralph Waldo Emerson',
    citation: 'Wikipedia',
    year: '1803 - 1882',
    category: 'Inspiration'
  },
  {
    quote: 'The only way to make sense out of change is to plunge into it, move with it, and join the dance.',
    source: 'Alan Watts',
    citation: 'Wikipedia',
    year: '1915 - 1973',
    category: 'Inspiration'
  },
  {
    quote: 'Real generosity toward the future lies in giving all to the present.',
    source: 'Albert Camus',
    citation: 'Wikipedia',
    year: '1913 - 1960',
    category: 'Inspiration'
  },
  {
    quote: 'Today you are you! That is truer than true! There is no one alive who is you-er than you!',
    source: 'Dr. Seuss',
    citation: 'Happy Birthday To You!',
    year: '1959',
    category: 'Inspiration'
  },
  {
    quote: 'Stay hungry, stay foolish.',
    source: 'Steve Jobs',
    citation: 'Stanford Commencement Speech',
    year: '2005',
    category: 'Inspiration'
  }
];

// calling the functions
getRandomQuote();
printQuote();
randColor();
changeQuote();
