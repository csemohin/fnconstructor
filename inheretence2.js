var Person = function(name,age,sub){
    this.name = name;
    this.age = age;
    this.sub = sub;
}
var Teacher = function(name,age,sub,add){
    Person.call(this,name,age,sub);
    this.address = add;
}

var hannan = new Teacher("hannan",33,"math","cummilla");

console.log(hannan);
