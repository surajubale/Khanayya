var num = 3;

for (var i = 2; i <= parseInt(num / 2); i++) {
    if (num % i == 0)
        break;
}
if (i == parseInt(num / 2))
    console.log(num + ' is a Prime no.');
else
    console.log(num + ' is not a prime no.');