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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    async function fetchUsers() {\n        const res = await fetch(\"/api/users\");\n        const data = await res.json();\n        setUsers(data);\n        console.log(users);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetchUsers();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Comp do LOL\"\n                    }, void 0, false, {\n                        fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/toplane.png\"\n                    }, void 0, false, {\n                        fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().content), \" container\"),\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"players-grid\"])),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().row), \" row\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().name), \" col-10\"),\n                                        children: \"Nick\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                                        lineNumber: 43,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().rounds), \" col-4\"),\n                                        children: \"vagas\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 13\n                            }, this),\n                            users.map((user, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().row), \" row\"),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().name), \" col-8\"),\n                                            children: user.name\n                                        }, void 0, false, {\n                                            fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                                            lineNumber: 49,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().rounds), \" col-2\"),\n                                            children: user.rounds\n                                        }, void 0, false, {\n                                            fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                                            lineNumber: 50,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"col-2\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillCloseCircle, {}, void 0, false, {\n                                                fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                                                lineNumber: 52,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                                            lineNumber: 51,\n                                            columnNumber: 19\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: \"col-2\",\n                                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillCloseCircle, {}, void 0, false, {\n                                                fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                                                lineNumber: 55,\n                                                columnNumber: 21\n                                            }, this)\n                                        }, void 0, false, {\n                                            fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                                            lineNumber: 54,\n                                            columnNumber: 19\n                                        }, this)\n                                    ]\n                                }, index, true, {\n                                    fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 17\n                                }, this))\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 11\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n} // async function handleSubmit(event) {\n //   event.preventDefault();\n //   const newUser = {\n //     name: form.name,\n //     email: form.email,\n //     phone: form.phone\n //   };\n //   const response = await fetch('/api/users', {\n //     method: 'POST',\n //     headers: {\n //       'Content-Type': 'application/json'\n //     },\n //     body: JSON.stringify(newUser)\n //   });\n //   const data = await response.json();\n //   setUsers([...users, data]);\n //   setForm({ name: '', email: '', phone: '' });\n // }\n_s(Home, \"JadZszbqna06PpJs9hMo7Hl/LOY=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE0QjtBQUVpQjtBQUNEO0FBQ087QUFTcEMsU0FBU0ssT0FBTzs7SUFDN0IsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdKLCtDQUFRQSxDQUFTLEVBQUU7SUFFN0MsZUFBZUssYUFBWTtRQUN6QixNQUFNQyxNQUFNLE1BQU1DLE1BQU07UUFDeEIsTUFBTUMsT0FBTyxNQUFNRixJQUFJRyxJQUFJO1FBRTNCTCxTQUFTSTtRQUNURSxRQUFRQyxHQUFHLENBQUNSO0lBQ2Q7SUFFQUosZ0RBQVNBLENBQUMsSUFBTTtRQUNkTTtJQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFOzswQkFDRSw4REFBQ1Isa0RBQUlBOztrQ0FDSCw4REFBQ2U7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7OztrQ0FDakMsOERBQUNGO3dCQUFLQyxNQUFLO3dCQUFXQyxTQUFROzs7Ozs7a0NBRTlCLDhEQUFDQzt3QkFBS0MsS0FBSTt3QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUd4Qiw4REFBQ0M7Z0JBQUtDLFdBQVd0QixxRUFBVzswQkFDMUIsNEVBQUN1QjtvQkFBSUQsV0FBVyxHQUFrQixPQUFmdEIsd0VBQWMsRUFBQzs4QkFDaEMsNEVBQUN1Qjt3QkFBSUQsV0FBVyxHQUEwQixPQUF2QnRCLGdGQUFzQjs7MENBQ3ZDLDhEQUFDdUI7Z0NBQUlELFdBQVcsR0FBYyxPQUFYdEIsb0VBQVUsRUFBQzs7a0RBQzVCLDhEQUFDdUI7d0NBQUlELFdBQVcsR0FBZSxPQUFadEIscUVBQVcsRUFBQztrREFBVTs7Ozs7O2tEQUN6Qyw4REFBQ3VCO3dDQUFJRCxXQUFXLEdBQWlCLE9BQWR0Qix1RUFBYSxFQUFDO2tEQUFTOzs7Ozs7Ozs7Ozs7NEJBRzFDSyxNQUFNcUIsR0FBRyxDQUFDLENBQUNDLE1BQU1DLHNCQUNmLDhEQUFDTDtvQ0FBZ0JELFdBQVcsR0FBYyxPQUFYdEIsb0VBQVUsRUFBQzs7c0RBQ3hDLDhEQUFDdUI7NENBQUlELFdBQVcsR0FBZSxPQUFadEIscUVBQVcsRUFBQztzREFBVTJCLEtBQUtYLElBQUk7Ozs7OztzREFDbEQsOERBQUNPOzRDQUFJRCxXQUFXLEdBQWlCLE9BQWR0Qix1RUFBYSxFQUFDO3NEQUFVMkIsS0FBS0YsTUFBTTs7Ozs7O3NEQUN0RCw4REFBQ0Y7NENBQUlELFdBQVk7c0RBQ2YsNEVBQUNuQiw2REFBaUJBOzs7Ozs7Ozs7O3NEQUVwQiw4REFBQ29COzRDQUFJRCxXQUFZO3NEQUNmLDRFQUFDbkIsNkRBQWlCQTs7Ozs7Ozs7Ozs7bUNBUFp5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQjFCLENBQUMsQ0FFRCx1Q0FBdUM7Q0FDdkMsNEJBQTRCO0NBQzVCLHNCQUFzQjtDQUN0Qix1QkFBdUI7Q0FDdkIseUJBQXlCO0NBQ3pCLHdCQUF3QjtDQUN4QixPQUFPO0NBQ1AsaURBQWlEO0NBQ2pELHNCQUFzQjtDQUN0QixpQkFBaUI7Q0FDakIsMkNBQTJDO0NBQzNDLFNBQVM7Q0FDVCxvQ0FBb0M7Q0FDcEMsUUFBUTtDQUNSLHdDQUF3QztDQUN4QyxnQ0FBZ0M7Q0FDaEMsaURBQWlEO0NBQ2pELElBQUk7R0F0RW9CeEI7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LnRzeD8xOWEwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICdAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBBaUZpbGxDbG9zZUNpcmNsZSB9IGZyb20gJ3JlYWN0LWljb25zL2FpJztcbmltcG9ydCB7IEZhTWludXMsIEZhUGx1cyB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcblxuaW50ZXJmYWNlIFVzZXJ7XG4gIG5hbWU6IHN0cmluZztcbiAgcm91bmRzOiBudW1iZXI7XG4gIGlkOiBudW1iZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFt1c2Vycywgc2V0VXNlcnNdID0gdXNlU3RhdGU8VXNlcltdPihbXSk7XG5cbiAgYXN5bmMgZnVuY3Rpb24gZmV0Y2hVc2Vycygpe1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKCcvYXBpL3VzZXJzJylcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKVxuXG4gICAgc2V0VXNlcnMoZGF0YSlcbiAgICBjb25zb2xlLmxvZyh1c2VycylcbiAgfVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hVc2VycygpXG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNvbXAgZG8gTE9MPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICB7LyogPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPiAqL31cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvdG9wbGFuZS5wbmdcIiAvPlxuXG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250ZW50fSBjb250YWluZXJgfT5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzW1wicGxheWVycy1ncmlkXCJdfWB9PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5yb3d9IHJvd2B9PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLm5hbWV9IGNvbC0xMGB9Pk5pY2s8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5yb3VuZHN9IGNvbC00YH0+dmFnYXM8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB1c2Vycy5tYXAoKHVzZXIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e2Ake3N0eWxlcy5yb3d9IHJvd2B9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5uYW1lfSBjb2wtOGB9Pnt1c2VyLm5hbWV9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLnJvdW5kc30gY29sLTJgfT57dXNlci5yb3VuZHN9PC9kaXY+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YGNvbC0yYH0gPlxuICAgICAgICAgICAgICAgICAgICA8QWlGaWxsQ2xvc2VDaXJjbGUgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Bjb2wtMmB9ID5cbiAgICAgICAgICAgICAgICAgICAgPEFpRmlsbENsb3NlQ2lyY2xlIC8+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gIClcbn1cblxuLy8gYXN5bmMgZnVuY3Rpb24gaGFuZGxlU3VibWl0KGV2ZW50KSB7XG4vLyAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4vLyAgIGNvbnN0IG5ld1VzZXIgPSB7XG4vLyAgICAgbmFtZTogZm9ybS5uYW1lLFxuLy8gICAgIGVtYWlsOiBmb3JtLmVtYWlsLFxuLy8gICAgIHBob25lOiBmb3JtLnBob25lXG4vLyAgIH07XG4vLyAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJy9hcGkvdXNlcnMnLCB7XG4vLyAgICAgbWV0aG9kOiAnUE9TVCcsXG4vLyAgICAgaGVhZGVyczoge1xuLy8gICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuLy8gICAgIH0sXG4vLyAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkobmV3VXNlcilcbi8vICAgfSk7XG4vLyAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4vLyAgIHNldFVzZXJzKFsuLi51c2VycywgZGF0YV0pO1xuLy8gICBzZXRGb3JtKHsgbmFtZTogJycsIGVtYWlsOiAnJywgcGhvbmU6ICcnIH0pO1xuLy8gfSJdLCJuYW1lcyI6WyJIZWFkIiwic3R5bGVzIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJBaUZpbGxDbG9zZUNpcmNsZSIsIkhvbWUiLCJ1c2VycyIsInNldFVzZXJzIiwiZmV0Y2hVc2VycyIsInJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iLCJjb25zb2xlIiwibG9nIiwidGl0bGUiLCJtZXRhIiwibmFtZSIsImNvbnRlbnQiLCJsaW5rIiwicmVsIiwiaHJlZiIsIm1haW4iLCJjbGFzc05hbWUiLCJkaXYiLCJyb3ciLCJyb3VuZHMiLCJtYXAiLCJ1c2VyIiwiaW5kZXgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});