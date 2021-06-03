const quotes = [
'"Never let the fear of striking out keep you from playing the game." -Babe Ruth',
'"The way to get started is to quit talking and begin doing." -Walt Disney',
'"The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart." -Helen Keller',
'"Whoever is happy will make others happy too." -Anne Frank',
'"Always remember that you are absolutely unique. Just like everyone else." -Margaret Mead',
'"Never let the fear of striking out keep you from playing the game." -Babe Ruth',
'"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose." -Dr. Seuss',
]

var button = document.getElementById("button");

button.addEventListener("click", function() {
  var num = Math.floor(Math.random() * quotes.length)
  document.querySelector(".text").innerHTML=quotes[num];
  console.log(num);
});

console.log(quotes.length)
