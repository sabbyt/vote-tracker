//image constructor
function Image(src, title, movie) {
  this.src = src;
  this.title = title;
  this.movie = movie;
}

function createEvil(img, name, movie) {
  var x = new Image(img, name, movie);
  evilCharacters.push(x);
}
// array of images
var evilCharacters = [];

//creates evil characters objects within the array rather than as an image
createEvil("img/americanpsycho-patrickbateman.jpg", "Patrick Bateman", "American Psycho");
createEvil("img/austinpowers-drevil.jpg", "Dr. Evil", "Austin Powers");
createEvil("img/batman-joker.jpg", "The Joker", "The Batman Series");
createEvil('img/chucky.jpg', "Chucky", "Chucky");
createEvil('img/cuckoo-nurseratched.jpg', "Nurse Ratched", "One Flew Over the Cuckoos Nest");
createEvil('img/darth-vader.jpg', "Darth Vader", "Star Wars");
createEvil('img/freddy-krueger.jpg', "Freddy Krueger", "A Nightmare on Elm Street");
createEvil('img/fridaythe13-PamelaVoorhees.png', "Pamela Voorhees", "Friday the 13th");
createEvil('img/godfather-michaelcorleone.jpg', "Michael Corleone", "The Godfather Trilogy");
createEvil('img/got-joeffreybaratheon.jpg', "Joeffrey Baratheon", "Game of Thrones");
createEvil('img/hercules-hades.png', "Hades", "Hercules");
createEvil('img/halloween-michaelmyers.jpg', "Michael Myers", "Halloween");
createEvil('img/hanniballecter.jpg', "Hannibal Lecter", "Hannibal");
createEvil('img/harrypotter-lordvoldemort.jpg', "Lord Voldemort", "The Harry Potter Series");
createEvil('img/hellbound-pinhead.jpg', "Pinhead", "Hellraiser");
createEvil('img/hp-BellatrixLestrange.png', "Bellatrix Lestrange", "The Harry Potter Series");
createEvil('img/it-pennywise.jpg', "Pennywise", "It");
createEvil('img/lotr-saruman.jpg', "Saruman", "The Lord of the Rings");
createEvil('img/lotr-Sauron.jpg', "Sauron", "The Lord of the Rings");
createEvil('img/misery-Annie Wilkes.jpg', "Annie Wilkes", "Misery");
createEvil('img/saw-jigsaw.jpg', "Jigsaw", "Saw");
createEvil('img/thelionking-scar.jpg', "Scar", "The Lion King");
createEvil("img/theshining-jacktorrance.jpg", "Jack Torrance", "The Shining")

//photo randomiser
var randomNumber = function() {
  return Math.floor(Math.random() * (evilCharacters.length - 1)) + 1;
}

//insert random photo 1
function randomImg1(){
  var random1 = randomNumber();
  var randomPhoto1 = (evilCharacters[random1]);
  console.log(random1);
  document.getElementById("photoGen1").src = randomPhoto1["src"];
  var title1 = document.getElementById("photoName1");
  title1.appendChild(document.createTextNode(randomPhoto1["title"]));
  var movie1 = document.getElementById("movie1");
  movie1.appendChild(document.createTextNode(randomPhoto1["movie"]));
}

//insert random photo 2
function randomImg2(){
  var random2 = randomNumber();
  var randomPhoto2 = (evilCharacters[random2]);
  console.log(evilCharacters);
  console.log(random2);
  document.getElementById("photoGen2").src = randomPhoto2["src"];
  var title2 = document.getElementById("photoName2");
  title2.appendChild(document.createTextNode(randomPhoto2["title"]));
  var movie2 = document.getElementById("movie2");
  movie2.appendChild(document.createTextNode(randomPhoto2["movie"]));
}

randomImg1();
randomImg2();
