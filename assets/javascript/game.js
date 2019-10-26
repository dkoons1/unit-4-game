$(document).ready(function() {

    
    var x = $("#number");
    var y = $("#guessed");
    var z = $("#wins")
    var a = $("#lose")

    var number = Math.floor(Math.random() * (120 - 19) + 19);
    var counter = 0;

    var red = Math.floor(Math.random() * 11) + 1;
    var blue = Math.floor(Math.random() * 11) + 1;
    var green = Math.floor(Math.random() * 11) + 1;
    var yellow = Math.floor(Math.random() * 11) + 1;
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


function restart()
{
         console.log(y.val())
         number = Math.floor(Math.random() * (120 - 19) + 19);
         red = Math.floor(Math.random() * 11) + 1;
         blue = Math.floor(Math.random() * 11) + 1;
         green = Math.floor(Math.random() * 11) + 1;
         yellow = Math.floor(Math.random() * 11) + 1;

        counter = 0;
        x.text(number);
        y.text(counter);
}

function winGame(){
    alert("U win")
    wins++
    z.text(wins)
    
}

function loseGame(){
    alert("u lose")
    losses++
    a.text(losses)
}

        $("#red").on("click", function() {
            if(counter != number){
                counter += red;
                y.text(counter);
                if(counter > number){
                    loseGame()
                    restart()
                }
                else if (counter == number){
                    winGame()
                    restart()
                }   
            }

        });

        $("#blue").on("click", function() {
            if(counter != number){
                counter += blue;
                y.text(counter);
                if(counter > number){
                    loseGame()
                    restart()
                }
                else if (counter == number){
                    winGame()
                    restart()
                }   
            }
        });
    
        $("#green").on("click", function() {
            if(counter != number){
                counter += green;
                y.text(counter);
                if(counter > number){
                    loseGame()
                    restart()
                }
                else if (counter == number){
                    winGame()
                    restart()
                }   
            }
        });
    
        $("#yellow").on("click", function() {
            if(counter != number){
                counter += yellow;
                y.text(counter);
                if(counter > number){
                    loseGame()
                    restart()
                }
                else if (counter == number){
                    winGame()
                    restart()
                }   
            }
        });
  });