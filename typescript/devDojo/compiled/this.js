"use strict";
function testThis() {
    return this; //se refere ao objeto "window"
}
let obj = {
    attr1: "string",
    attr2: function () {
        return this;
    },
    attr3: () => {
        return this;
    },
};
console.log(testThis());
//# sourceMappingURL=this.js.map