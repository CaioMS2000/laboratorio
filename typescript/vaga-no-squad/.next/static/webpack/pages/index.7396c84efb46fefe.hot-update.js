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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [users, setUsers] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    console.log((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default()));\n    async function fetchUsers() {\n        const res = await fetch(\"/api/users\");\n        const data = await res.json();\n        setUsers(data);\n        console.log(users);\n    }\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        fetchUsers();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Comp do LOL\"\n                    }, void 0, false, {\n                        fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                        lineNumber: 31,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/toplane.png\"\n                    }, void 0, false, {\n                        fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"\".concat((_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().content), \" container\"),\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default()[\"players-grid\"]),\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().row),\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().name),\n                                            children: \"Nick\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                                            lineNumber: 42,\n                                            columnNumber: 15\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                            className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().rounds),\n                                            children: \"vagas\"\n                                        }, void 0, false, {\n                                            fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                                            lineNumber: 43,\n                                            columnNumber: 15\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                                    lineNumber: 41,\n                                    columnNumber: 13\n                                }, this),\n                                users.map((user, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().row),\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().name),\n                                                children: user.name\n                                            }, void 0, false, {\n                                                fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                                                lineNumber: 48,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().rounds),\n                                                children: user.rounds\n                                            }, void 0, false, {\n                                                fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                                                lineNumber: 49,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_4__.AiFillCloseCircle, {}, void 0, false, {\n                                                fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                                                lineNumber: 50,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, index, true, {\n                                        fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                                        lineNumber: 47,\n                                        columnNumber: 17\n                                    }, this))\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                            lineNumber: 40,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        className: \"btn btn-primary\",\n                        children: \"Clique aqui\"\n                    }, void 0, false, {\n                        fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/caio/dev/laboratorio/typescript/vaga-no-squad/src/pages/index.tsx\",\n                lineNumber: 38,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n} // async function handleSubmit(event) {\n //   event.preventDefault();\n //   const newUser = {\n //     name: form.name,\n //     email: form.email,\n //     phone: form.phone\n //   };\n //   const response = await fetch('/api/users', {\n //     method: 'POST',\n //     headers: {\n //       'Content-Type': 'application/json'\n //     },\n //     body: JSON.stringify(newUser)\n //   });\n //   const data = await response.json();\n //   setUsers([...users, data]);\n //   setForm({ name: '', email: '', phone: '' });\n // }\n_s(Home, \"JadZszbqna06PpJs9hMo7Hl/LOY=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXgudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE0QjtBQUVpQjtBQUNEO0FBQ087QUFRcEMsU0FBU0ssT0FBTzs7SUFDN0IsTUFBTSxDQUFDQyxPQUFPQyxTQUFTLEdBQUdKLCtDQUFRQSxDQUFTLEVBQUU7SUFDN0NLLFFBQVFDLEdBQUcsQ0FBQ1IsZ0VBQU1BO0lBQ2xCLGVBQWVTLGFBQVk7UUFDekIsTUFBTUMsTUFBTSxNQUFNQyxNQUFNO1FBQ3hCLE1BQU1DLE9BQU8sTUFBTUYsSUFBSUcsSUFBSTtRQUUzQlAsU0FBU007UUFDVEwsUUFBUUMsR0FBRyxDQUFDSDtJQUNkO0lBRUFKLGdEQUFTQSxDQUFDLElBQU07UUFDZFE7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRTs7MEJBQ0UsOERBQUNWLGtEQUFJQTs7a0NBQ0gsOERBQUNlO2tDQUFNOzs7Ozs7a0NBQ1AsOERBQUNDO3dCQUFLQyxNQUFLO3dCQUFjQyxTQUFROzs7Ozs7a0NBQ2pDLDhEQUFDRjt3QkFBS0MsTUFBSzt3QkFBV0MsU0FBUTs7Ozs7O2tDQUU5Qiw4REFBQ0M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7Ozs7Ozs7Ozs7OzswQkFHeEIsOERBQUNDO2dCQUFLQyxXQUFXdEIscUVBQVc7O2tDQUMxQiw4REFBQ3VCO3dCQUFJRCxXQUFXLEdBQWtCLE9BQWZ0Qix3RUFBYyxFQUFDO2tDQUNoQyw0RUFBQ3VCOzRCQUFJRCxXQUFXdEIsZ0ZBQXNCOzs4Q0FDcEMsOERBQUN1QjtvQ0FBSUQsV0FBV3RCLG9FQUFVOztzREFDeEIsOERBQUN1Qjs0Q0FBSUQsV0FBV3RCLHFFQUFXO3NEQUFFOzs7Ozs7c0RBQzdCLDhEQUFDdUI7NENBQUlELFdBQVd0Qix1RUFBYTtzREFBRTs7Ozs7Ozs7Ozs7O2dDQUcvQkssTUFBTXFCLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDZiw4REFBQ0w7d0NBQWdCRCxXQUFXdEIsb0VBQVU7OzBEQUNwQyw4REFBQ3VCO2dEQUFJRCxXQUFXdEIscUVBQVc7MERBQUcyQixLQUFLWCxJQUFJOzs7Ozs7MERBQ3ZDLDhEQUFDTztnREFBSUQsV0FBV3RCLHVFQUFhOzBEQUFHMkIsS0FBS0YsTUFBTTs7Ozs7OzBEQUMzQyw4REFBQ3RCLDZEQUFpQkE7Ozs7Ozt1Q0FIVnlCOzs7Ozs7Ozs7Ozs7Ozs7O2tDQVNsQiw4REFBQ0M7d0JBQU9QLFdBQVU7a0NBQWtCOzs7Ozs7Ozs7Ozs7OztBQUk1QyxDQUFDLENBRUQsdUNBQXVDO0NBQ3ZDLDRCQUE0QjtDQUM1QixzQkFBc0I7Q0FDdEIsdUJBQXVCO0NBQ3ZCLHlCQUF5QjtDQUN6Qix3QkFBd0I7Q0FDeEIsT0FBTztDQUNQLGlEQUFpRDtDQUNqRCxzQkFBc0I7Q0FDdEIsaUJBQWlCO0NBQ2pCLDJDQUEyQztDQUMzQyxTQUFTO0NBQ1Qsb0NBQW9DO0NBQ3BDLFFBQVE7Q0FDUix3Q0FBd0M7Q0FDeEMsZ0NBQWdDO0NBQ2hDLGlEQUFpRDtDQUNqRCxJQUFJO0dBbEVvQmxCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC50c3g/MTlhMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSdcbmltcG9ydCBzdHlsZXMgZnJvbSAnQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzJ1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgQWlGaWxsQ2xvc2VDaXJjbGUgfSBmcm9tICdyZWFjdC1pY29ucy9haSc7XG5cbmludGVyZmFjZSBVc2Vye1xuICBuYW1lOiBzdHJpbmc7XG4gIHJvdW5kczogbnVtYmVyO1xuICBpZDogbnVtYmVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKCkge1xuICBjb25zdCBbdXNlcnMsIHNldFVzZXJzXSA9IHVzZVN0YXRlPFVzZXJbXT4oW10pO1xuICBjb25zb2xlLmxvZyhzdHlsZXMpXG4gIGFzeW5jIGZ1bmN0aW9uIGZldGNoVXNlcnMoKXtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCgnL2FwaS91c2VycycpXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcblxuICAgIHNldFVzZXJzKGRhdGEpXG4gICAgY29uc29sZS5sb2codXNlcnMpXG4gIH1cblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoVXNlcnMoKVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5Db21wIGRvIExPTDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgey8qIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz4gKi99XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL3RvcGxhbmUucG5nXCIgLz5cblxuICAgICAgPC9IZWFkPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGVudH0gY29udGFpbmVyYH0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInBsYXllcnMtZ3JpZFwiXX0+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvd30+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmFtZX0+TmljazwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvdW5kc30+dmFnYXM8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB1c2Vycy5tYXAoKHVzZXIsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlcy5yb3d9PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uYW1lfT57dXNlci5uYW1lfTwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5yb3VuZHN9Pnt1c2VyLnJvdW5kc308L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDxBaUZpbGxDbG9zZUNpcmNsZSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidG4gYnRuLXByaW1hcnlcIj5DbGlxdWUgYXF1aTwvYnV0dG9uPlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApXG59XG5cbi8vIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudCkge1xuLy8gICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuLy8gICBjb25zdCBuZXdVc2VyID0ge1xuLy8gICAgIG5hbWU6IGZvcm0ubmFtZSxcbi8vICAgICBlbWFpbDogZm9ybS5lbWFpbCxcbi8vICAgICBwaG9uZTogZm9ybS5waG9uZVxuLy8gICB9O1xuLy8gICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3VzZXJzJywge1xuLy8gICAgIG1ldGhvZDogJ1BPU1QnLFxuLy8gICAgIGhlYWRlcnM6IHtcbi8vICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbi8vICAgICB9LFxuLy8gICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KG5ld1VzZXIpXG4vLyAgIH0pO1xuLy8gICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuLy8gICBzZXRVc2VycyhbLi4udXNlcnMsIGRhdGFdKTtcbi8vICAgc2V0Rm9ybSh7IG5hbWU6ICcnLCBlbWFpbDogJycsIHBob25lOiAnJyB9KTtcbi8vIH0iXSwibmFtZXMiOlsiSGVhZCIsInN0eWxlcyIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQWlGaWxsQ2xvc2VDaXJjbGUiLCJIb21lIiwidXNlcnMiLCJzZXRVc2VycyIsImNvbnNvbGUiLCJsb2ciLCJmZXRjaFVzZXJzIiwicmVzIiwiZmV0Y2giLCJkYXRhIiwianNvbiIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiY2xhc3NOYW1lIiwiZGl2Iiwicm93Iiwicm91bmRzIiwibWFwIiwidXNlciIsImluZGV4IiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.tsx\n"));

/***/ })

});