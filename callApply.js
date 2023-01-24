const normalPerson = {
    firstName : 'Rahim',
    lsatName : 'Uddin',
    salary: 15000,
    getFulName: function(){
        console.log(this.firstName, this.lsatName);

    },
    chargeBill: function(amount, tips, tax){
        console.log(this);
        this.salary = this.salary-amount - tips - tax;
        return this.salary;
    }
}

const heroPerson = {
    firstName: 'Hero',
    lsatName: 'Balam',
    salary: 25000
}

const friendlyPerson = {
    firstName: 'Hero',
    lsatName: 'Jalam',
    salary: 25000
}

normalPerson.chargeBill.apply(heroPerson, [3000, 200, 30]);
console.log(heroPerson.salary)
// normalPerson.chargeBill.call(heroPerson, 900, 100, 20);
// normalPerson.chargeBill.call(heroPerson, 3000, 200, 50);
// console.log(heroPerson.salary);

// normalPerson.chargeBill.call(friendlyPerson, 500, 100, 20);
// normalPerson.chargeBill.call(friendlyPerson, 2000, 100, 30);
// console.log(friendlyPerson.salary);

//normalPerson.chargeBill();

// const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
// heroChargeBill(2000);
// heroChargeBill(3000);
// console.log(heroPerson.salary);
// console.log(normalPerson.salary)



// normalPerson.chargeBill(150);
// normalPerson.chargeBill(3000);
// console.log(normalPerson.salary);

// console.log(normalPerson);