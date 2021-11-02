// write a function which takes 3 numbers as arguments and returns addition of those 3 nos.
let add = (num1, num2, num3) =>
    num1 + num2 + num3;

console.log(add(14343, 4334, 5355));

//caluclation of speed,input time and distance
/**
 * enter distance in 'metres' and time in 'seconds'
 */
let speed = (distance, time) => {
    return parseInt(distance / time);
}
console.log(speed(120, 5));

//radius as input, area of circle.
let areaOfCircle = (radius) =>
    3.14 * radius * radius;

console.log(areaOfCircle(5));

//factorial of a number.
let factorial = (num) => {
    let fact = 1;
    if (num == 1)
        return 'factorial is 1';
    else if (num < 0)
        return ' no factorial ';
    else {
        for (i = 1; i <= num; i++) {
            fact = fact * i
        }
        return 'factorial of' + num + ' is ' + fact;
    }
}
console.log(factorial(5));

//integer as input, true if even else False
let isEven = (num) =>
    (num % 2 == 0)

console.log(isEven(54545));
console.log(isEven(6424646));

//integer as input, true if odd else False
let isOdd = (num) =>
    (num % 2 != 0)

console.log(isOdd(54545));
console.log(isOdd(6424646));

//return true if prime else false
let isPrime = (num) => {
    for (i = 2; i <= parseInt(num / 2); i++) {
        return (num % i != 0)
    }
}

console.log(isPrime(49));

//fibonacci
let fibonacciseries = (size) => {
    let fibonacci = ''
    let firstNum = 0;
    let secondNum = 1;

    for (i = 0; i < size; i++) {
        fibonacci = firstNum + secondNum
        secondNum = fibonacci;
        firstNum = secondNum;
    }
    return fibonacci;
}
console.log(fibonacciseries(7));

//div by 6
let divBy6 = (num) =>
    num % 6 == 0

console.log(divBy6(366));

//func accepts time in seconds, returns in hours
let seconds = (sec) => {
    result = sec / 3600
    return result.toFixed(2)
}
console.log(4000 / 3600);

//func. to count the no. of digits
let numberOfDigits = (number) => {
    let count = 0;
    while (number) {
        number = parseInt(number / 10);
        count++
    }
    return count
}
console.log(numberOfDigits(432432));

//repeating input no. twice
let repeatTwice = (number) => {
    let choice = numberOfDigits(number);
    switch (choice) {
        case 1: return number * 10 + number;
        case 2: return number * 100 + number;
        case 3: return number * 1000 + number;
        case 4: return number * 10000 + number;
        case 5: return number * 100000 + number;
    }
};

console.log(repeatTwice(47));

//returning 100th digit

let hundredthDigit = (number) => {
    return parseInt(number / 100) % 10;
}
console.log(hundredthDigit(2345));

//runrate
let reqRR = (target, maxOvers, currentScore, oversBowled) => {
    let RR = (target - currentScore) / (maxOvers - oversBowled);
    return RR.toFixed(2);
};

console.log(reqRR(152, 20, 3, 1));

//make Decimel a.bc
let input = (a, b, c) =>
    ((a * 100) + (b * 10) + c) / 100;
console.log(input(1, 2, 3));

//adding last4 digits 
let addLast4 = (number) => {
    if (number < 1000)
        return ' enter numbers with 4 digit ';
    else if (number >= 1000) {
        units = (number % 10);
        tens = (parseInt(number / 10) % 10);
        hundreds = (parseInt(number / 100) % 10);
        thousands = (parseInt(number / 1000) % 10);
    }
    return units + tens + hundreds + thousands;

}
console.log(addLast4(2));
console.log(addLast4(1234));
console.log(addLast4(123476));

