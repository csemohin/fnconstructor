// Variable declear
var Person = function(name,age,job){
    this.name = name;
    this.age = age;
    this.job = job;
}
//Add a new function
Person.prototype.dob = function(){
    console.log(`${this.name} date of birth is ${2019-this.age}`);
}

//Calling prototype
//console.log(Person.prototype);

//Create new Constructor function
var mohin = new Person("mohin",23,"std");
console.log(mohin);

//Access functon
mohin.dob()
