class CPerson{
    name :string;

    constructor(name :string){
        this.name = name;
    }

    print() :void{
        console.log(this.name)
    }
}

class CEmployee extends CPerson{
    salary :number;

    constructor(name :string, salary :number){
        super(name);
        this.salary = salary;
    }

    print() :void{
        super.print()
        console.log(`R$ ${this.salary}`)
    }
}

let p2 = new CPerson('Caio');
let e2 = new CEmployee('Roberto', 3000);

e2.print()

let p3 = {name:"Diogo"} as CPerson;
let p4 = <CPerson>{};

let p5 :CPerson = new CEmployee('Geraldo', 5000);
p5.print()