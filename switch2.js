let month = 5;
let year =  2020;
let noofdays;

switch(noofdays) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 9:
    case 11:
    noofdays = 31
    break;
    
    case 4:
    case 6:
    case 8:
    case 10:
    case 12:
        noofdays =  30 days;
    break;

    case 2:
        if (year % 4 ==0) && (year % 100 != 0) || (year % 400 == 0)
        noofdays = 29;
        else
        noofdays = 28;
}
console.log(noofdays)