var timer = null;
var countDownNumber = 10;

var changeState = function(state) {
    document.body.className = 'body-state'+state;
    clearInterval(timer);
    countDownNumber = 10;
    document.getElementById('countDown').innerHTML = countDownNumber;

    if (state == 2) {
        timer = setInterval(function (){
            countDownNumber = countDownNumber - 1;
            document.getElementById('countDown').innerHTML = countDownNumber;
            //Start countdown
            if (countDownNumber > 4 && countDownNumber <= 7) {
                document.getElementById('nervous').className = 'nervous show';
            } else {
                document.getElementById('nervous').className = 'nervous';
            };
            
            if (countDownNumber > 1 && countDownNumber <=4 ) {
                document.getElementById('cant-wait').className = 'cant-wait show';
            } else {
                document.getElementById('cant-wait').className = 'cant-wait';
            }

            if (countDownNumber <=0) {
                changeState(3);
            }; 
        }, 700);
    } else if (state == 3) {
        var success = setTimeout(function ()
            {
                var randomNumber = Math.round(Math.random()*10);

                console.log('Random number:', randomNumber);

                if (randomNumber > 5) {
                    changeState(4);
                } else {
                    changeState(5);
                }
        }, 2000)
    }else if (state == 1 || 3 || 4 || 5) {
        document.getElementById('nervous').className = 'nervous';
        document.getElementById('cant-wait').className = 'cant-wait';
    }
}

/*
-------------------------------------------------
Everything I do here is to change the "state".
-------------------------------------------------

-------------------------------------------------
Why do I need to set timer = null??
-------------------------------------------------

-------------------------------------------------
What is the "setTimeOut()" function?
-------------------------------------------------

var timer = null;
var countDownNumber = 10;

var changeState = function(state) {
    document.body.className = 'body-state'+state;
    
    //I don't understand the logic of these three elements...
    clearInterval(timer);
    countDownNumber = 10;
    document.getElementById('countDown').innerHTML = countDownNumber;

    ------------------------------------------------------
    If statement:
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
        -------------------------------------------------

        if (state == 2) {
            timer = setInterval(function (){
                
                -------------------------------------------------    
               Why if I put "countDownNumber = countDownNumber - 1;" before 
                " document.getElementById('countDown').innerHTML = countDownNumber;",
                can make the program run faster???
                -------------------------------------------------

                countDownNumber = countDownNumber - 1;
                document.getElementById('countDown').innerHTML = countDownNumber;

                -------------------------------------------------
                A if statement inside a if statement!!!
                -------------------------------------------------
                
                if (countDownNumber <=0) {
                    changeState(3);
                }; 
            }, 300);
        } else if (state == 3) {
            var success = setTimeout(function ()
                {
                 
                 -------------------------------------------------
                    //this math formula looks so cool!! 
                 -------------------------------------------------
                 
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
    
*/