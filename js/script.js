console.log('hello there friends!');
var doCoolStuff = function () {
    var currentClassName = document.getElementById('cool').className;
    if (currentClassName == 'cool') {
        document.getElementById('cool').className = 'cool red';
    } else if (currentClassName == 'cool red') {
        document.getElementById('cool').className = 'cool gray';
    } else if (currentClassName == 'cool gray') {
        document.getElementById('cool').className = 'cool';
        }
}

var southPark = function() {
    alert ('Weed');
}

var sayMyName = function (name) {
    alert ('My name is: '+name);
}

var car = {
    make: 'VW',
    type: 'polo',
    color: 'blue',
    isTurnedOn: false,
    numberOfWheels: 4,
    seats: [
        'seat 1', 
        'seat 2', 
        'seat 3', 
        'seat 4'
    ],
    turnOn: function () {
        this.isTurnedOn = true;
    },
    fly: function () {
        alert ('fly');
    },
    switchCar: function (isOn) {
        console.log('turn car '+isOn);
        if (isOn == true) {
            this.isTurnedOn = true;
        } else {
            this.isTurnedOn = false;
        }
    }
};

var x = (1+1)
