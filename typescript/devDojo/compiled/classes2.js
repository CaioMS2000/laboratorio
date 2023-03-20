"use strict";
class CPerson2 {
    name;
    constructor(name) {
        this.name = name;
    }
}
let p6 = new CPerson2('Caio');
// ainda não tenho acesso ao atributo name
class CPerson3 {
    name;
    constructor(name) {
        this.name = name;
    }
    get get_name() {
        return this.name;
    }
    set set_name(name) {
        this.name = name;
    }
}
let p7 = new CPerson3('Caio');
p7.set_name = 'Alison';
console.log(p7.get_name);
//# sourceMappingURL=classes2.js.map