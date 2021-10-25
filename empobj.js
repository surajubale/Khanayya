function EmployeeDetails(id, name, gender, age, salary, exp, status) {
    this.id = id,
        this.name = name,
        this.gender = gender,
        this.age = age,
        this.salary = salary,
        this.exp = exp,
        this.status = true,
        this.assignProject = function () {
            console.log(this.name + '  login design is assigned to you ');
            console.log(' click here to get the access ');
        },
        this.checkStatus = function () {
            if (this.status)
                console.log(this.status + ' great! ');
            else
                console.log(this.status + ' please updated in 30 min ');
        },
        this.salaryIncreaser = function (percentage) {
            console.log( this.salary + (percentage/100)*salary);
        }
}

var emp1 = new EmployeeDetails(01, 'Madhu', 'M', 19, 180000, 1 , true);
var emp2 = new EmployeeDetails(01, 'Ram', 'M', '22', 60000, '2', true);

console.log(emp1);
emp1.checkStatus();
emp1.assignProject();
emp1.salaryIncreaser(100);
emp2.salaryIncreaser(50);