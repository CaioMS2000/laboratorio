function doingSomething(cllbk: (name: string) => void): void{
    cllbk.call(this, "Caio");
    cllbk.apply(this, ["Caio"]);
    cllbk("Caio")
}

function execute(name: string): void{
    console.log(name)
}

doingSomething(execute);