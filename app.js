//image constructor
function EvilImage(src, character, movie, vote) {
  this.src = src;
  this.character = character;
  this.movie = movie;
  this.vote = 0;
}

function createEvil(img, name, movie, vote) {
  var x = new EvilImage(img, name, movie, vote);
  evilCharacters.push(x);
}

// array of images
var evilCharacters = [];
//var of random number assignments
var random1 = 0, random2 = 0;
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
  title1.appendChild(document.createTextNode(randomPhoto1["character"]));
  var movie1 = document.getElementById("movie1");
  movie1.appendChild(document.createTextNode(randomPhoto1["movie"]));
  // console.log(title1);
  // console.log(movie1);
//input random photo2
  var randomPhoto2 = (evilCharacters[random2]);
  document.getElementById("photoGen2").src = randomPhoto2["src"];
  var title2 = document.getElementById("photoName2");
  title2.appendChild(document.createTextNode(randomPhoto2["character"]));
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
  evilCharacters[random1].vote+=1;
  console.log(evilCharacters[random1].character + " vote TOTAL: " + evilCharacters[random1].vote);

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
};

var nextPhoto2 = function(e) {
  e.preventDefault();
  //counter for votes
  // console.log("Right was clicked");
  // console.log("Counter check random number: " + random2);
  evilCharacters[random2].vote+=1;
  console.log(evilCharacters[random2].character + " vote TOTAL: " + evilCharacters[random2].vote);

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
};

//voting system event listener
var vote1 = document.getElementById('photoGen1');
vote1.addEventListener('click', nextPhoto1, false);

var vote2 = document.getElementById('photoGen2');
vote2.addEventListener('click', nextPhoto2, false);

//array of data for chart
var data = {
    labels: [evilCharacters[0].character, evilCharacters[1].character, evilCharacters[2].character, evilCharacters[3].character, evilCharacters[4].character, evilCharacters[5].character, evilCharacters[6].character, evilCharacters[7].character, evilCharacters[8].character, evilCharacters[9].character, evilCharacters[10].character, evilCharacters[11].character, evilCharacters[12].character, evilCharacters[13].character, evilCharacters[14].character, evilCharacters[15].character, evilCharacters[16].character, evilCharacters[17].character, evilCharacters[18].character, evilCharacters[19].character, evilCharacters[20].character, evilCharacters[21].character, evilCharacters[22].character, evilCharacters[23].character, evilCharacters[24].character, evilCharacters[25].character],
    datasets: [
        {
            label: "Votes",
            fillColor: "rgba(220,220,220,0.5)",
            strokeColor: "rgba(220,220,220,0.8)",
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            votes: [5, 2, 3, 1]
        }
    ]
};

//putting data chart into html
var context = document.getElementById('voteChart').getContext('2d');
var myBarChart = new Chart(context).Bar(data, {
  //animation options
  scaleBeginAtZero : true,
  scaleGridLineColor : "rgba(0,0,0,.05)",
  barValueSpacing : 5,
  barDatasetSpacing : 1
});

myBarChart.datasets[0].votes[2].value = 50;
// Would update the first dataset's value of 'March' to be 50
myBarChart.update();
