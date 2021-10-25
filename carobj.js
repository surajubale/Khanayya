let car1 = {
    name: ' amabassador ',
    mode: 2004 ,
    colour: ' white ',
    board: ' yellow board ',
    number: ' MH 04 EC 1947 ',
    kmRun: 12346 ,
    speed: 0,
    longestDrive: ' Bombay to Benglur ',
    start: function() {
        console.log( this.name + ' has started ' );
    },
    stop: function() {
        console.log( this.name + ' has stopped ');
    },
    accelerate: function() {
        this.speed++;
    }
};

console.log(car1.name, car1.kmRun, car1.colour);
car1.start();
car1.accelerate();car1.accelerate();car1.accelerate();
console.log(car1.speed)
car1.stop();
console.log('-----------------------------------------------------');

let car2 = {
    name: ' TATA SUMO ',
    model: 2004 ,
    colour: ' white ',
    board: ' white board ',
    number: ' KA 09 1997 ',
    kmRun: 20000 ,
    speed: 0,
    longestDrive: ' benglur to shabarimala ',
    start: function() {
        console.log( this.name + ' has started ' );
    },
    stop: function() {
        console.log( this.name + ' has stopped ');
    },
    accelerate: function() {
        this.speed++;
    },
    beastMode: function() {
        console.log( this.name + ' BeasMode activated ');
    }
};
for( properties in car2)
console.log( properties + car2[properties])
car2.beastMode();
console.log(car2.kmRun);

