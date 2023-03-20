function testThis() :any{
    return this;//se refere ao objeto "window"
}

let obj = {
    attr1 :"string",
    attr2: function () :any{
        return this;
    },
    attr3: () => {
        return this;
    },
}
console.log(testThis())