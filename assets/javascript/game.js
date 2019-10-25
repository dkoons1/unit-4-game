$(document).ready(function() {

    
    var x = $("#number");
    var y = $("#guessed");

    var number = Math.floor(Math.random() * (120 - 19) + 19);
    var counter = 0;

    var red = Math.floor(Math.random() * 11) + 1;
    var blue = Math.floor(Math.random() * 11) + 1;
    var green = Math.floor(Math.random() * 11) + 1;
    var yellow = Math.floor(Math.random() * 11) + 1;


    x.text(number);
    y.text(counter);

        // number = Math.floor(Math.random() * (120 - 19) + 19);
        // x.val(number)
        // y.val(counter)
        // console.log(x.val())


function restart()
{
        console.log(y.val())
        var number = Math.floor(Math.random() * (120 - 19) + 19);
        var red = Math.floor(Math.random() * 11) + 1;
        var blue = Math.floor(Math.random() * 11) + 1;
        var green = Math.floor(Math.random() * 11) + 1;
        var yellow = Math.floor(Math.random() * 11) + 1;

        counter = 0;
        y.val(0)
        x.val(number)
}

function winGame(){
    alert("U win")
    restart()
}

function loseGame(){
    alert("u lose")
    restart()
}

        

        $("#red").on("click", function() {
            if(counter != number){
                counter += red;
                y.text(counter);
            }
            else if(counter > number){
                loseGame()
            }
            else{
                winGame()
            }
        });

        $("#blue").on("click", function() {
            if(counter != number){
                counter += blue;
                y.text(counter);
            }
            else{
                restart()
            }
        });
    
        $("#green").on("click", function() {
            if(counter != number){
                counter += green;
                y.text(counter);
            }
            else{
                restart()
            }
        });
    
        $("#yellow").on("click", function() {
            if(counter != number){
                counter += yellow;
                y.text(counter);
            }
            else{
                restart()
            }
        });
  });