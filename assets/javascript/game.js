$(document).ready(function() {

    var x = $("#number");
    var y = $("#guessed");
    var z = $("#wins")
    var a = $("#lose")

    var number = Math.floor(Math.random() * (120 - 19) + 19);
    var counter = 0;

    var gems = {
        red: getRandomNumber(),
        blue: getRandomNumber(),
        green: getRandomNumber(),
        yellow: getRandomNumber()
    }
    var wins = 0;
    var losses = 0;

    x.text(number);
    y.text(counter);
    z.text(wins)
    a.text(losses)

        // number = Math.floor(Math.random() * (120 - 19) + 19);
        // x.val(number)
        // y.val(counter)
        // console.log(x.val())

function getRandomNumber() {
    return Math.floor(Math.random() * 11) + 1;
}

function startGame()
{
         console.log(y.val())
         number = Math.floor(Math.random() * (120 - 19) + 19);
         for (var g in gems) {
             gems[g] = getRandomNumber()
         }

        counter = 0;
        x.text(number);
        y.text(counter);
}

function winGame(){
    alert("Hooray! You guessed the number right!")
    wins++
    z.text(wins)
    
}

function loseGame(){
    alert("Oh no! You went over the number!")
    losses++
    a.text(losses)
}

        $("#wrapper img").on("click", function(e) {
            if(counter != number){
                counter += gems[e.target.id];
                y.text(counter);
                if(counter > number){
                    loseGame()
                    startGame()
                }
                else if (counter == number){
                    winGame()
                    startGame()
                }
            }
        })
  });