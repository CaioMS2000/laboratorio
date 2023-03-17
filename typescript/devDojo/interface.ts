interface Person{
    name :string
}

interface Employee extends Person {
    salary :number
}

function printName(p :Person) :void{
    console.log(p.name)
}

let p1: Person = {name:"Caio"};
let e1: Employee = {name:'Bruno', salary:2358.56}

printName(p1)
printName(e1)
printName({name:"Rogerio"})
printName({name:"Fernando"} as Person)
printName({name:"Marcelo"} as Employee)