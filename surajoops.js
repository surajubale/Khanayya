var employee = new Object();
employee.name = 'Girish';
employee.id = '33555';
employee.salary = 90000;
employee.mailId =  'girishsunad@yahoo.com';
employee.Detail = function() {
    console.log(this.name, this.id, this.salary, this.mailId);
},
employee.location = ' hubli ';
employee.cluster = function() {
    console.log(this.location + ' NorthKarnataka ');
};

employee.Detail();
employee.cluster();
console.log(employee.Detail())