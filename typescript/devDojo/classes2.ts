class CPerson2 {
    protected name :string

    constructor(name :string){
        this.name = name;
    }
}

let p6 :CPerson2 = new CPerson2('Caio');
// ainda não tenho acesso ao atributo name

class CPerson3 {
    protected name :string

    constructor(name :string){
        this.name = name;
    }

    get get_name() :string{
        return this.name;
    }

    set set_name(name :string){
        this.name = name;
    }
}

let p7 :CPerson3 = new CPerson3('Caio');
p7.set_name = 'Alison';

console.log(p7.get_name)