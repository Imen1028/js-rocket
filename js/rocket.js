//Why do I need to set timer = null??
var timer = null;
var countDownNumber = 10;

var changeState = function(state) {
    document.body.className = 'body-state'+state;
    //I don't understand the logic of these three elements...
    clearInterval(timer);
    countDownNumber = 10;
    document.getElementById('countDown').innerHTML = countDownNumber;
 /* If statement:
    if (condition) {
        block of code to be executed if the condition is true
        e.g., 
        function() {}

        Variable = xyz...

        timer = setInterval(function (){
        countDownNumber = countDownNumber - 1;
            document.getElementById('countDown').innerHTML = countDownNumber;
            if (countDownNumber <=0) {
                changeState(3);
            }; 
        }, 300);
 */ 
    if (state == 2) {
        timer = setInterval(function (){
            /*
            Why if I put "countDownNumber = countDownNumber - 1;" before 
            " document.getElementById('countDown').innerHTML = countDownNumber;",
            can make the program run faster???
            */

            countDownNumber = countDownNumber - 1;
            document.getElementById('countDown').innerHTML = countDownNumber;
            // A if statement inside a if statement!!!
            if (countDownNumber <=0) {
                changeState(3);
            }; 
        }, 300);
    } else if (state == 3) {
        var success = setTimeout(function ()
            {
                //this math formula looks so cool!! 
                var randomNumber = Math.round(Math.random()*10);

                console.log('Random number:', randomNumber);

                if (randomNumber > 5) {
                    changeState(4);
                } else {
                    changeState(5);
                }
        }, 2000)
        //2000 等於 2000ms = 2s
    }
}
