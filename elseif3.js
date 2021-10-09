var time = 15;
var greeting = 'not set yet';
if (time < 10) {
    greeting = 'Good Morning';
} else if ( time > 20) {
    greeting = 'Good Day'
} else {
    greeting = 'good evening';
}
console.log(greeting);