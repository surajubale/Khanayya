//fucntion which accepts 3 nos. as aruguments and returns as addition of 3 nos.
function arguments(a, b, c) {
    return a + b + c
}

function speed(time, distance) {
    return distance / time + " m/s"
}

function areaOfCircle(radius) {
    return 3.142 * radius * radius
}

function factorial(number) {
    let fact = 1;
    if (number == 1)
        return 'factorialValue is 1'
    else if (number < 0)
        return 'there is no factorial for -ve no\'s'
    else {
        for (i = 1; i <= number; i++)
            fact = fact * i
    }
    return fact;
}

function integerEven(number) {
    return number % 2 == 0
}

function integerOdd(number) {
    return number % 2 != 0
}

function prime(number) {
    for (i = 2; i <= parseInt(number / 2); i++) {
        if (number % i == 0)
            return false
    }
    return true
}

function fibonacciseries(size) {
    let fibonacci = ''
    let firstNum = 0;
    let secondNum = 1;

    for (i = 0; i < size; i++) {
        fibonacci = firstNum + secondNum
        secondNum = fibonacci;
        firstNum = secondNum;
    }
    return fibonacci
}

function integerDivBy6(number) {
    return number % 6 == 0
}

function secToHour(timeinsec) {
    return timeinsec / 3600
}

function numberOfDigits(number) {
    let count = 0;
    while (number) {
        number = parseInt(number / 10);
        count++
    }
    return count
}

function repeatTheNum(num) {
    let choice = numberOfDigits(num);
    switch (choice) {
        case 1: return num * 10 + num;
        case 2: return num * 100 + num;
        case 3: return num * 1000 + num;
        case 4: return num * 10000 + num;
        case 5: return num * 100000 + num;
    }
}

function hundredthDigit(number) {
    return parseInt(number / 100) % 10
}

function reqRunrate(target, maxOvers, CurrentScore, OversBowled) {
    RR = (target - CurrentScore) / (maxOvers - OversBowled)
    RR = RR.toFixed(2);
    return RR
}

function makeDecimel(a, b, c) {
    return ((a * 100) + (b * 10) + (c * 1)) / 100
}

console.log(makeDecimel(2, 3, 5))

function sumOfDigits(number) {
    firstDigi = parseInt(number / 10);
    secondDigi = number % 10;
    return firstDigi + secondDigi
}

function andBoolean(B1, B2, B3) {
    return B1 && B2 && B3
}

function greaterInOne(n1, n2, n3) {
    return n1 > n2 || n1 > n2
}

function ascending(n1, n2, n3) {
    return n1 < n2 < n3
}

console.log(ascending(2, 3, 4));

function addLast4(number) {
    if (number >= 1000) {
        units = number % 10;
        tens = parseInt(number / 10) % 10
        hundreds = parseInt(number / 100) % 10
        thousands = parseInt(number / 1000) % 10
        return units + tens + hundreds + thousands
    }
    else
        return "please enter minimum of 4 digits"
}
console.log(addLast4(1234));
console.log(addLast4(12345));

function areaOfSquare(x1, y1, x2, y2) {
    return (x2 - x1) * (y2 - y1)
}

console.log(areaOfSquare(2, 6, 6, 2));

function making4AndAdd(number) {
    let newNum1 = 0, newNum2 = 0, newNum3 = 0;
    for (i = 0; i < 4; i++) {
        newNum1 = newNum1 * 10 + number;
        newNum2 = newNum2 * 10 + number;
        newNum3 = newNum3 * 10 + number;
    }
    return newNum1 + newNum2 + newNum3
}

console.log(making4AndAdd(123));

function divBy3Or7(n) {
    return n % 3 == 0 || n % 7 == 0
}

console.log(divBy3Or7(49));
console.log(divBy3Or7(24));

function largest(n1, n2, n3) {
    if (n1 > n2 && n1 > n3)
        return n1;
    else if
        (n2 > n1 && n2 > n3)
        return n2
    else
        return n3
}

console.log(largest(143434434, 343444434, 43436555));


function mnthYear(month, year) {
    switch (month) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:
            return numberOfDays = 31;
        case 4:
        case 6:
        case 9:
        case 11:
            return numberOfDays = 30;
        case 2:
            if (year % 4 == 0 & year % 100 != 0 || year % 400 == 0)
                return numberOfDays = 29
            else 
                return numberOfDays = 28
    }
}

console.log(mnthYear(2,2020));


function lottery(number) {
    if (number%4==0 && number%7==0)
        return 20
    else if (number%7==0)
        return 10
    else if (number%4==0 )
        return 6
    else 
        return 0
}

console.log(lottery(34345531));

function reward(ticket1,ticket2,ticket3) {
    return lottery(ticket1) + lottery(ticket2) + lottery(ticket3)
} 

console.log(reward(123456,234567,345678));
console.log(reward(56,11,13));

function sumOfLast3(number) {
    if (number>=100) {
        units = number%10;
        tens = parseInt(number/10)%10;
        hundreds = parseInt(number/100)%10;

        return units + tens + hundreds
    }
}

console.log(sumOfLast3(1234));




console.log(greaterInOne(10, 6, 12))
console.log(andBoolean(true, true, true))
console.log(arguments(124, 434, 434))
console.log(speed(40, 150))
console.log(areaOfCircle(40))
console.log(factorial(0))
console.log(factorial(-6))
console.log(factorial(5))
console.log(integerEven(-7798))
console.log(integerOdd(-2222))
console.log(prime(45))
console.log(fibonacciseries(7))
console.log(integerDivBy6(91))
console.log(secToHour(36000))
console.log(numberOfDigits(1234))
console.log(repeatTheNum(13453))
console.log(hundredthDigit(2356))
console.log(reqRunrate(264, 50, 100, 27))
console.log(sumOfDigits(49))
console.log(addLast4(1234))
