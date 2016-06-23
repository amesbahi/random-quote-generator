// event listener to respond to clicks on the page
// when user clicks anywhere on the page, the "makeQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

// get random quote function that selects a random quote object from the quotes array
// and returns the randomly selected quote object
function getRandomQuote() {
  for (var key in quotes) {
    var quotesObject = quotes[key];
    return quotesObject;
  }
}

// array of quotes objects
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
