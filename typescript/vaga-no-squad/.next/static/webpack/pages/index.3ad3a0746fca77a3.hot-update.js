"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    async function fetchUsers() {\n        const res = await fetch(\"/api/users\");\n        const data = await res.json();\n        setUsers(data);\n        console.log(users);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetchUsers();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().content)),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Comp do LOL\"\n                    }, void 0, false, {\n                        fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/toplane.png\"\n                    }, void 0, false, {\n                        fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"CONTROLE DE VAGAS\"\n            }, void 0, false, {\n                fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().container), \" container\"),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"players-grid\"])),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().row), \" row\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().name), \" col-8\"),\n                                        children: \"Nick\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().rounds), \" col-4 text-center\"),\n                                        children: \"Vagas\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 13\n                            }, this),\n                            users.map((user, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().row), \" row\"),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().name), \" col-8\"),\n                                            children: user.name\n                                        }, void 0, false, {\n                                            fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                                            lineNumber: 50,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().rounds), \" col-2 text-center\"),\n                                            children: user.rounds\n                                        }, void 0, false, {\n                                            fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"col-1 d-flex align-items-center justify-content-center\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaMinus, {}, void 0, false, {\n                                                fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                                                lineNumber: 53,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"col-1 d-flex align-items-center justify-content-center\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__.FaPlus, {}, void 0, false, {\n                                                fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                                                lineNumber: 56,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                                            lineNumber: 55,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                                    lineNumber: 49,\n                                    columnNumber: 17\n                                }, this))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                    lineNumber: 41,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n} // async function handleSubmit(event) {\n //   event.preventDefault();\n //   const newUser = {\n //     name: form.name,\n //     email: form.email,\n //     phone: form.phone\n //   };\n //   const response = await fetch('/api/users', {\n //     method: 'POST',\n //     headers: {\n //       'Content-Type': 'application/json'\n //     },\n //     body: JSON.stringify(newUser)\n //   });\n //   const data = await response.json();\n //   setUsers([...users, data]);\n //   setForm({ name: '', email: '', phone: '' });\n // }\n_s(Home, \"JadZszbqna06PpJs9hMo7Hl/LOY=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE0QjtBQUVpQjtBQUNEO0FBRUs7QUFRbEMsU0FBU00sT0FBTzs7SUFDN0IsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdMLCtDQUFRQSxDQUFTLEVBQUU7SUFFN0MsZUFBZU0sYUFBWTtRQUN6QixNQUFNQyxNQUFNLE1BQU1DLE1BQU07UUFDeEIsTUFBTUMsT0FBTyxNQUFNRixJQUFJRyxJQUFJO1FBRTNCTCxTQUFTSTtRQUNURSxRQUFRQyxHQUFHLENBQUNSO0lBQ2Q7SUFFQUwsZ0RBQVNBLENBQUMsSUFBTTtRQUNkTztJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDTztRQUFJQyxXQUFXLEdBQWtCLE9BQWZoQix3RUFBYzs7MEJBQy9CLDhEQUFDRCxrREFBSUE7O2tDQUNILDhEQUFDbUI7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQWNILFNBQVE7Ozs7OztrQ0FDakMsOERBQUNFO3dCQUFLQyxNQUFLO3dCQUFXSCxTQUFROzs7Ozs7a0NBRTlCLDhEQUFDSTt3QkFBS0MsS0FBSTt3QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUd4Qiw4REFBQ0M7MEJBQUc7Ozs7OzswQkFDSiw4REFBQ0M7Z0JBQUtULFdBQVdoQixxRUFBVzswQkFDMUIsNEVBQUNlO29CQUFJQyxXQUFXLEdBQW9CLE9BQWpCaEIsMEVBQWdCLEVBQUM7OEJBQ2xDLDRFQUFDZTt3QkFBSUMsV0FBVyxHQUEwQixPQUF2QmhCLGdGQUFzQjs7MENBQ3ZDLDhEQUFDZTtnQ0FBSUMsV0FBVyxHQUFjLE9BQVhoQixvRUFBVSxFQUFDOztrREFDNUIsOERBQUNlO3dDQUFJQyxXQUFXLEdBQWUsT0FBWmhCLHFFQUFXLEVBQUM7a0RBQVM7Ozs7OztrREFDeEMsOERBQUNlO3dDQUFJQyxXQUFXLEdBQWlCLE9BQWRoQix1RUFBYSxFQUFDO2tEQUFxQjs7Ozs7Ozs7Ozs7OzRCQUd0RE0sTUFBTXVCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDZiw4REFBQ2hCO29DQUFnQkMsV0FBVyxHQUFjLE9BQVhoQixvRUFBVSxFQUFDOztzREFDeEMsOERBQUNlOzRDQUFJQyxXQUFXLEdBQWUsT0FBWmhCLHFFQUFXLEVBQUM7c0RBQVU4QixLQUFLVixJQUFJOzs7Ozs7c0RBQ2xELDhEQUFDTDs0Q0FBSUMsV0FBVyxHQUFpQixPQUFkaEIsdUVBQWEsRUFBQztzREFBc0I4QixLQUFLRixNQUFNOzs7Ozs7c0RBQ2xFLDhEQUFDYjs0Q0FBSUMsV0FBWTtzREFDZiw0RUFBQ1osbURBQU9BOzs7Ozs7Ozs7O3NEQUVWLDhEQUFDVzs0Q0FBSUMsV0FBWTtzREFDZiw0RUFBQ2Isa0RBQU1BOzs7Ozs7Ozs7OzttQ0FQRDRCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQjFCLENBQUMsQ0FFRCx1Q0FBdUM7Q0FDdkMsNEJBQTRCO0NBQzVCLHNCQUFzQjtDQUN0Qix1QkFBdUI7Q0FDdkIseUJBQXlCO0NBQ3pCLHdCQUF3QjtDQUN4QixPQUFPO0NBQ1AsaURBQWlEO0NBQ2pELHNCQUFzQjtDQUN0QixpQkFBaUI7Q0FDakIsMkNBQTJDO0NBQzNDLFNBQVM7Q0FDVCxvQ0FBb0M7Q0FDcEMsUUFBUTtDQUNSLHdDQUF3QztDQUN4QyxnQ0FBZ0M7Q0FDaEMsaURBQWlEO0NBQ2pELElBQUk7R0F2RW9CMUI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBaUZpbGxDbG9zZUNpcmNsZSB9IGZyb20gJ3JlYWN0LWljb25zL2FpJztcbmltcG9ydCB7IEZhUGx1cywgRmFNaW51cyB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcblxuaW50ZXJmYWNlIFVzZXJ7XG4gIG5hbWU6IHN0cmluZztcbiAgcm91bmRzOiBudW1iZXI7XG4gIGlkOiBudW1iZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGU8VXNlcltdPihbXSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hVc2Vycygpe1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL3VzZXJzJylcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gICAgc2V0VXNlcnMoZGF0YSlcbiAgICBjb25zb2xlLmxvZyh1c2VycylcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hVc2VycygpXG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGVudH1gfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q29tcCBkbyBMT0w8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIHsvKiA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+ICovfVxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi90b3BsYW5lLnBuZ1wiIC8+XG5cbiAgICAgIDwvSGVhZD5cbiAgICAgIDxoMT5DT05UUk9MRSBERSBWQUdBUzwvaDE+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250YWluZXJ9IGNvbnRhaW5lcmB9PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXNbXCJwbGF5ZXJzLWdyaWRcIl19YH0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLnJvd30gcm93YH0+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMubmFtZX0gY29sLThgfT5OaWNrPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMucm91bmRzfSBjb2wtNCB0ZXh0LWNlbnRlcmB9PlZhZ2FzPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdXNlcnMubWFwKCh1c2VyLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0gY2xhc3NOYW1lPXtgJHtzdHlsZXMucm93fSByb3dgfT5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMubmFtZX0gY29sLThgfT57dXNlci5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5yb3VuZHN9IGNvbC0yIHRleHQtY2VudGVyYH0+e3VzZXIucm91bmRzfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb2wtMSBkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyIGp1c3RpZnktY29udGVudC1jZW50ZXJgfSA+XG4gICAgICAgICAgICAgICAgICAgIDxGYU1pbnVzIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29sLTEgZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNvbnRlbnQtY2VudGVyYH0gPlxuICAgICAgICAgICAgICAgICAgICA8RmFQbHVzIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuLy8gYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4vLyAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4vLyAgIGNvbnN0IG5ld1VzZXIgPSB7XG4vLyAgICAgbmFtZTogZm9ybS5uYW1lLFxuLy8gICAgIGVtYWlsOiBmb3JtLmVtYWlsLFxuLy8gICAgIHBob25lOiBmb3JtLnBob25lXG4vLyAgIH07XG4vLyAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvdXNlcnMnLCB7XG4vLyAgICAgbWV0aG9kOiAnUE9TVCcsXG4vLyAgICAgaGVhZGVyczoge1xuLy8gICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuLy8gICAgIH0sXG4vLyAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3VXNlcilcbi8vICAgfSk7XG4vLyAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4vLyAgIHNldFVzZXJzKFsuLi51c2VycywgZGF0YV0pO1xuLy8gICBzZXRGb3JtKHsgbmFtZTogJycsIGVtYWlsOiAnJywgcGhvbmU6ICcnIH0pO1xuLy8gfSJdLCJuYW1lcyI6WyJIZWFkIiwic3R5bGVzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJGYVBsdXMiLCJGYU1pbnVzIiwiSG9tZSIsInVzZXJzIiwic2V0VXNlcnMiLCJmZXRjaFVzZXJzIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJjb250ZW50IiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImxpbmsiLCJyZWwiLCJocmVmIiwiaDEiLCJtYWluIiwiY29udGFpbmVyIiwicm93Iiwicm91bmRzIiwibWFwIiwidXNlciIsImluZGV4Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});