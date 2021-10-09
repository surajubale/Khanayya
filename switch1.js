var choice = 1.2;
switch(choice) {
    case 1:
        console.log('case 1');
    case 1.2:
        console.log('case 1');
    case 'y':
        console.log('case y');
    case 'x':
        console.log('case x');
        break;
    case undefined:
        console.log(undefined);
        break;
    case null:
        console.log(null);
        break;
}