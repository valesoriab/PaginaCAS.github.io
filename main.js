let app = document.getElementById('typewriter');
 
let typewriter = new Typewriter(app, {
  loop: true,
  delay: 90,
});
 
typewriter
  .pauseFor(2500)
  .typeString('<span style="color: #523976 ">Soy estudiante del BI y este es mi portafolio CAS')
  .pauseFor(200)
  .deleteChars(10)
  .start();