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
  .start()