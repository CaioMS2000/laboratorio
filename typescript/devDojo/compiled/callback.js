"use strict";
function doingSomething(cllbk) {
    cllbk.call(this, "Caio");
    cllbk.apply(this, ["Caio"]);
    cllbk("Caio");
}
function execute(name) {
    console.log(name);
}
doingSomething(execute);
//# sourceMappingURL=callback.js.map