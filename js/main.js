var quotes = [
  {
    name: "“Be yourself; everyone else is already taken.”",
    author: "-- Oscar Wilde",
  },
  {
    name: "“So many books, so little time.”",
    author: "-- Frank Zappa",
  },
  {
    name: "“A room without books is like a body without a soul.”",
    author: "-- Marcus Tullius Cicero",
  },
  {
    name: `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”
`,
    author: "-- Bernard M. Baruch",
  },
  {
    name: `“You only live once, but if you do it right, once is enough.”
`,
    author: "-- Mae West",
  },
  {
    name: `“Be the change that you wish to see in the world.”
`,
    author: "-- Mahatma Gandhi",
  },
  {
    name: `“In three words I can sum up everything I've learned about life: it goes on.”
`,
    author: "-- Robert Frost",
  },
  {
    name: `“If you want to know what a man's like, take a good look at how he treats his inferiors, not his equals.”
`,
    author: `J.K. Rowling, Harry Potter and the Goblet of Fire`,
  },
  {
    name: `“If you tell the truth, you don't have to remember anything.”
`,
    author: "-- Mark Twain",
  },
  {
    name: `“I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.”
`,
    author: "-- Maya Angelou",
  },
];

var currentIndex = 0;

function generateQuote() {
  var selectedQuote = quotes[currentIndex];

  document.getElementById("main-p").innerHTML = ` 
  <p style="font-size: 35px;">${selectedQuote.name}</p>
  `;

  document.getElementById("sub-p").innerHTML = `
  <p style="font-size: 35px;">${selectedQuote.author}</p>
  `;

  currentIndex = (currentIndex + 1) % quotes.length;
}
