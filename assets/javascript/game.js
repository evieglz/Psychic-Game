var wins = 0;
var looses= 0;
// var tries = 6;

var choices= ["a", "b", "c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

document.onkeyup = function (event){
    var userGuess = event.key;
    console.log(userGuess);

    var compGuess = choices[Math.floor(Math.random()* choices.length)];
    console.log("comp guess:")
    console.log(compGuess);
 
    
   
    if (userGuess === compGuess){
        wins++
    }
    else{
        looses++
    }

    document.querySelector("#user-guess").innerHTML = userGuess;
    document.querySelector("#comp-guess").innerHTML = compGuess;
    document.querySelector("#wins").innerHTML = wins;
    document.querySelector("#losses").innerHTML =looses;
}
