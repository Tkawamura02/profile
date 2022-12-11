var quoteNum = 0;
var speed = 50;
var i = 0;

const textField = document.getElementById('open');
const typewriter = new Typewriter(textField,{
  loop: false,
  delay: 75,
});

typewriter
  .typeString(`<span>Hello World!</span>`)
  .deleteChars(6)
  .pauseFor(200)
  .typeString(`<span>Reader!</span`)
  .pauseFor(300)
  .typeString(`<span> My name is Tiffany Kawamura.</span`)
  .cursor(transparent)
  .start()

var quotes = [
  'Hello World! My name is Tiffany Kawamura.',
  'What is your name?'
];

$(document).ready(function() {
    $("#nameButton").click(function() {
      $("#nameButton").fadeOut()
      $("#userName").fadeIn()
      const typewriterName = new Typewriter(document.getElementById(0),{
        loop: false,
        delay: 75,
      })

      typewriterName
        .typeString(`<span>Hello World!</span>`)
    })
});

/*
function typeWriter() {
  var txt = quotes[quoteNum];
  if (i<txt.length) {
    document.getElementById(quoteNum).innerHTML += txt.charAt(i);
    i++;
  }
  setTimeout(typeWriter, speed);
  quoteNum++;
}
*/