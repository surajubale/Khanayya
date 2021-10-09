var daynumber = 5;
var dayname = '';

switch(daynumber){
    case 1:
        dayname = 'Sunday';
        break;
    case 2:
        dayname = 'Monday';
        break;
    case 3:
        dayname = 'Tuesday';
        break;
    case 4:
        dayname = 'Wednesday';
        break;
    default:
        console.log('Invalid Choice');
}
console.log(dayname);