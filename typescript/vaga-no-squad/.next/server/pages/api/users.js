"use strict";
(() => {
var exports = {};
exports.id = 829;
exports.ids = [829];
exports.modules = {

/***/ 390:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "@prisma/client"
const client_namespaceObject = require("@prisma/client");
;// CONCATENATED MODULE: ./src/lib/prisma.ts
// lib/prisma.ts

const prisma = new client_namespaceObject.PrismaClient();
/* harmony default export */ const lib_prisma = (prisma);

;// CONCATENATED MODULE: ./src/pages/api/users.ts

async function methodGet(res) {
    const users = await lib_prisma.user.findMany();
    res.json(users);
}
async function methodPost(req, res) {
    const { name , rounds =0  } = req.body;
    const newUser = await lib_prisma.user.create({
        data: {
            name,
            rounds
        }
    });
    res.json(newUser);
}
async function methodPatch(req, res) {
    const { name , rounds  } = req.body;
    const user = await lib_prisma.user.update({
        where: {
            name
        },
        data: {
            rounds
        }
    });
    res.json(user);
}
async function methodDelete(req) {
    // const { name } = req.body
    const { name  } = req.query;
    await lib_prisma.user["delete"]({
        where: {
            name
        }
    });
}
async function handler(req, res) {
    if (req.method === "GET") {
        console.log("GET");
        await methodGet(res);
    } else if (req.method === "POST") {
        console.log("POST");
        await methodPost(req, res);
    } else if (req.method === "PATCH") {
        console.log("PATCH");
        await methodPatch(req, res);
    } else if (req.method === "DELETE") {
        console.log("DELETE");
        await methodDelete(req);
    } else res.status(405).json({
        message: "Method not allowed"
    });
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(390));
module.exports = __webpack_exports__;

})();