var Person = /** @class */ (function () {
    function Person() {
        this.name = "";
        this.family = "";
        this.age = 0;
    }
    Person.prototype.FullName = function () {
        return this.name + " " + this.family;
    };
    return Person;
}());
var p1 = new Person();
p1.name = "farshid";
p1.family = "saeidi";
p1.age = 34;
console.log(p1);
console.log(p1.FullName());
