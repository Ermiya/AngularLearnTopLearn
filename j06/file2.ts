class Person {
    name: string;
    family: string;
    age: number;
    constructor() {
        this.name = "";
        this.family = "";
        this.age = 0;
    }

    FullName ()
    {
        return this.name + " " + this.family;
    }
}

var p1 = new Person();

p1.name="farshid";
p1.family="saeidi";
p1.age=34;

console.log(p1);
console.log(p1.FullName());