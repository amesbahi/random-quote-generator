// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// get random quote function that selects a random quote object from the quotes array
// and returns the randomly selected quote object
function getRandomQuote() {
  for (var key in quotes) {
    var theQuote = Math.floor(Math.random() * (quotes.length));
    return theQuote;
  }
}

// printQuote calls the getRandomQuote function and stores the returned quote object in a variable
// printQuote constructs a string using the different properties of the quote object using the following
// HTML template: <p class="quote"> [quote here] </p> <p class="source"> [source here]
// <span class="citation"> [citation here] </span> <span class="year"> [year here] </span> </p>
// printQuote doesn't add a <span class="citation"> for a missing citation or a
// <span class="year"> if the year property is missing
// printQuote displays the final HTML string to the page. You can use the following
// JS snippet to accomplish that: document.getElementById('quote-box').innerHTML
function printQuote () {
  var selectedRandomQuote = getRandomQuote();
  var selectedRandomQuote += '<p class="quote">' + quotes.quote + '</p>';
  selectedRandomQuote += '<p class="source">' + quotes.source + '</p>';
  var div = document.getElementById('quote-box').innerHTML;
  return div
}

// an array of objects to hold the data for the quotes
var quotes = [
  {
    quote: 'The journey of a thousand miles begins with one step.',
    source: 'Lao Tzu'
  },
  {
    quote: 'He who knows best knows how little he knows.',
    source: 'Thomas Jefferson'
  },
  {
    quote: 'A man may die, nations may rise and fall, but an idea lives on.',
    source: 'John F. Kennedy'
  },
  {
    quote: 'If you spend too much time thinking about a thing, you\'ll never get it done',
    source: 'Bruce Lee'
  },
  {
    quote: 'All that we see or seem is but a dream within a dream',
    source: 'Edgar Allan Poe'
  },
  {
    quote: 'We are always getting ready to live but never living',
    source: 'Ralph Waldo Emerson'
  },
  {
    quote: 'The only way to make sense out of change is to plunge into it, move with it, and join the dance.',
    source: 'Alan Watts'
  },
  {
    quote: 'Real generosity toward the future lies in giving all to the present.',
    source: 'Henry David Thoreau'
  },
  {
    quote: 'Today you are you! That is truer than true! There is no one alive who is you-er than you!',
    source: 'Dr. Seuss'
  },
  {
    quote: 'Stay hungry, stay foolish.',
    source: 'Steve Jobs'
  }
];

getRandomQuote();
