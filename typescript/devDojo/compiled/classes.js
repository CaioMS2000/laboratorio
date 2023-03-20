"use strict";
class CPerson {
    name;
    constructor(name) {
        this.name = name;
    }
    print() {
        console.log(this.name);
    }
}
class CEmployee extends CPerson {
    salary;
    constructor(name, salary) {
        super(name);
        this.salary = salary;
    }
    print() {
        super.print();
        console.log(`R$ ${this.salary}`);
    }
}
let p2 = new CPerson('Caio');
let e2 = new CEmployee('Roberto', 3000);
e2.print();
let p3 = { name: "Diogo" };
let p4 = {};
let p5 = new CEmployee('Geraldo', 5000);
p5.print();
//# sourceMappingURL=classes.js.map