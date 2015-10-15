//image constructor
function EvilImage(src, label, movie, value, color, highlight) {
  this.src = src;
  this.label = label;
  this.movie = movie;
  this.value = value;
  this.color = "#024959";
  this.highlight = "#FF5A5E"
}

function createEvil(img, name, movie, value, color, highlight) {
  var x = new EvilImage(img, name, movie, value, color, highlight);
  evilCharacters.push(x);
}

// array of images
var evilCharacters = [];
//var of random number assignments
var random1 , random2;
//creates evil characters objects within the array rather than as an image
createEvil("img/americanpsycho-patrickbateman.jpg", "Patrick Bateman", "American Psycho", 0);
createEvil("img/austinpowers-drevil.jpg", "Dr. Evil", "The Austin Powers Series", 0);
createEvil("img/batman-joker.jpg", "The Joker", "The Dark Knight", 0);
createEvil('img/chucky.jpg', "Chucky", "Child's Play", 0);
createEvil('img/cuckoo-nurseratched.jpg', "Nurse Ratched", "One Flew Over the Cuckoos Nest", 0);
createEvil('img/darth-vader.jpg', "Darth Vader", "The Star Wars Saga", 0);
createEvil('img/freddy-krueger.jpg', "Freddy Krueger", "A Nightmare on Elm Street", 0);
createEvil('img/fridaythe13-PamelaVoorhees.png', "Pamela Voorhees", "Friday the 13th", 0);
createEvil('img/godfather-michaelcorleone.jpg', "Michael Corleone", "The Godfather Trilogy", 0);
createEvil('img/got-joeffreybaratheon.jpg', "Joeffrey Baratheon", "Game of Thrones", 0);
createEvil('img/hercules-hades.png', "Hades", "Hercules", 0);
createEvil('img/halloween-michaelmyers.jpg', "Michael Myers", "Halloween", 0);
createEvil('img/hanniballecter.jpg', "Dr. Hannibal Lecter", "Hannibal", 0);
createEvil('img/harrypotter-lordvoldemort.jpg', "Lord Voldemort", "The Harry Potter Series", 0);
createEvil('img/hellbound-pinhead.jpg', "Pinhead", "Hellraiser", 0);
createEvil('img/hp-BellatrixLestrange.png', "Bellatrix Lestrange", "The Harry Potter Series", 0);
createEvil('img/it-pennywise.jpg', "Pennywise", "It", 0);
createEvil('img/lotr-saruman.jpg', "Saruman", "The Lord of the Rings Series", 0);
createEvil('img/lotr-Sauron.jpg', "Sauron", "The Lord of the Rings Series", 0);
createEvil('img/misery-Annie Wilkes.jpg', "Annie Wilkes", "Misery", 0);
createEvil('img/saw-jigsaw.jpg', "Jigsaw", "The Saw Franchise", 0);
createEvil('img/thelionking-scar.jpg', "Scar", "The Lion King", 0);
createEvil("img/theshining-jacktorrance.jpg", "Jack Torrance", "The Shining", 0);
createEvil("img/Cruella-de-vil-101-dalmatians.jpg", "Cruella de Vil", "101 Dalmatians", 0);
createEvil("img/Psycho-NormanBates.jpg", "Norman Bates", "Psycho", 0);
createEvil("img/wizardofoz-TheWickedWitchoftheWest.jpg", "The Wicked Witch of the West", "The Wizard of Oz", 0);

//Generate a random number
var randomNumber = function() {
  return Math.floor(Math.random() * (evilCharacters.length - 1)) + 1;
}
//Display the images
var randomImg = function(){
//random number prevent same img displaying
  random1 = randomNumber();
  random2 = randomNumber();
  if (random1 == random2) {
    random2 = randomNumber();
    // console.log("Same number, number 2 regened");
    console.log(random1);
    console.log(random2);
  }
  else {
    console.log(random1);
    console.log(random2);
  }
//input random photo1
  var randomPhoto1 = (evilCharacters[random1]);
  document.getElementById("photoGen1").src = randomPhoto1["src"];
  var title1 = document.getElementById("photoName1");
  title1.appendChild(document.createTextNode(randomPhoto1["label"]));
  var movie1 = document.getElementById("movie1");
  movie1.appendChild(document.createTextNode(randomPhoto1["movie"]));
  // console.log(title1);
  // console.log(movie1);
//input random photo2
  var randomPhoto2 = (evilCharacters[random2]);
  document.getElementById("photoGen2").src = randomPhoto2["src"];
  var title2 = document.getElementById("photoName2");
  title2.appendChild(document.createTextNode(randomPhoto2["label"]));
  var movie2 = document.getElementById("movie2");
  movie2.appendChild(document.createTextNode(randomPhoto2["movie"]));
  // console.log(title2);
  // console.log(movie2);
}
//calling photo generator function on load
randomImg();

//function to refresh imgs, characters and titles
var nextPhoto1 = function(e) {
  e.preventDefault();
  //counter for votes
  // console.log("Left was clicked");
  // console.log("Counter check random number: " + random1);
  evilCharacters[random1].value+=1;
  console.log(evilCharacters[random1].label + " vote TOTAL: " + evilCharacters[random1].value);
  //adding local storage
  var newVote = evilCharacters[random1].value;
  var voteToSave = JSON.stringify(newVote);
  localStorage.setItem(evilCharacters[random1].label, voteToSave);
  var getVotes = localStorage.getItem(voteToSave);
  JSON.parse(getVotes);
  //removing attributes for setup of next img
  var titleRemove1 = document.getElementById("photoName1");
  titleRemove1.removeChild(titleRemove1.childNodes[0]);
  var movieRemove1 = document.getElementById("movie1");
  movieRemove1.removeChild(movieRemove1.childNodes[0]);
  // console.log(movieRemove1.childNodes);
  var titleRemove2 = document.getElementById("photoName2");
  var movieRemove2 = document.getElementById("movie2");
  titleRemove2.removeChild(titleRemove2.childNodes[0]);
  movieRemove2.removeChild(movieRemove2.childNodes[0]);
  // console.log(movieRemove2.childNodes);
  //recall img function to insert new photos
  randomImg();
  //calls to create a new pie chart
  myVotingChart = new Chart(context).Pie(evilCharacters);
};

var nextPhoto2 = function(e) {
  e.preventDefault();
  //counter for votes
  // console.log("Right was clicked");
  // console.log("Counter check random number: " + random2);
  evilCharacters[random2].value+=1;
  console.log(evilCharacters[random2].label + " vote TOTAL: " + evilCharacters[random2].value);
  //adding local storage
  var newVote = evilCharacters[random2].value;
  var voteToSave = JSON.stringify(newVote);
  localStorage.setItem(evilCharacters[random2].label, voteToSave);
  var getVotes = localStorage.getItem(voteToSave);
  JSON.parse(getVotes);
  //removing attributes for setup of next img
  var titleRemove2 = document.getElementById("photoName1");
  titleRemove2.removeChild(titleRemove2.childNodes[0]);
  var movieRemove2 = document.getElementById("movie1");
  movieRemove2.removeChild(movieRemove2.childNodes[0]);
  // console.log(movieRemove2.childNodes);
  var titleRemove2 = document.getElementById("photoName2");
  var movieRemove2 = document.getElementById("movie2");
  titleRemove2.removeChild(titleRemove2.childNodes[0]);
  movieRemove2.removeChild(movieRemove2.childNodes[0]);
  // console.log(movieRemove2.childNodes);
  //recall img function to insert new photos
  randomImg();
  myVotingChart = new Chart(context).Pie(evilCharacters);
};

//voting system event listener
var vote1 = document.getElementById('photoGen1');
vote1.addEventListener('click', nextPhoto1, false);
var vote2 = document.getElementById('photoGen2');
vote2.addEventListener('click', nextPhoto2, false);

//make chart
var context = document.getElementById('voteChart').getContext('2d');
var myVotingChart = new Chart(context).Pie(evilCharacters);
