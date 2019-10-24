$(document).ready(function() {

    var number = 0;
    var x = $("#number");
    var y = $("#guessed");
    var counter = 0;


    x.text(number);
    y.text(counter);

    function start(){
        number = Math.floor(Math.random() * (120 - 19) + 19);
        x.val(number)
        y.val(counter)
        console.log(x.val())

        $("#red").on("click", function() {
            if(counter != number){
                counter += 6;
                y.text(counter)
                console.log(y.val())
                return counter;
            }
            else{
                restart()
            }

        });
        $("#blue").on("click", function() {
            counter += 3;
            y.text(counter);
        });
    
        $("#green").on("click", function() {
            counter += 1;
            y.text(counter);

        });
    
        $("#yellow").on("click", function() {
            counter += 9;
            y.text(counter);
        });

}

start()

    function restart(){
        console.log(y.val())
        number = Math.floor(Math.random() * (120 - 19) + 19);
        counter = 0;
        y.val(0)
        x.val(number)
    }



            


  });