/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[2]!./src/styles/Home.module.css":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[2]!./src/styles/Home.module.css ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\nvar ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".Home_main__EtNt2{\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n\\n  height: 100vh;\\n  height: 100dvh;\\n  height: 100svh;\\n\\n  width: 100vw;\\n  width: 100dvw;\\n  width: 100svw;\\n\\n  font-size: 3rem;\\n}\\n\\n.Home_content___fOQz{\\n  background-color: #fff;\\n  color: #000;\\n}\\n\\n.Home_players-grid__J1Uf6{\\n  display: grid;\\n  grid-template-columns: auto auto;\\n}\\n\\n.Home_row__xp23k{\\n  grid-column-start: 1;\\n  grid-column-end: 3;\\n}\\n\\n/* .main {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 6rem;\\n  min-height: 100vh;\\n}\\n\\n.description {\\n  display: inherit;\\n  justify-content: inherit;\\n  align-items: inherit;\\n  font-size: 0.85rem;\\n  max-width: var(--max-width);\\n  width: 100%;\\n  z-index: 2;\\n  font-family: var(--font-mono);\\n}\\n\\n.description a {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 0.5rem;\\n}\\n\\n.description p {\\n  position: relative;\\n  margin: 0;\\n  padding: 1rem;\\n  background-color: rgba(var(--callout-rgb), 0.5);\\n  border: 1px solid rgba(var(--callout-border-rgb), 0.3);\\n  border-radius: var(--border-radius);\\n}\\n\\n.code {\\n  font-weight: 700;\\n  font-family: var(--font-mono);\\n}\\n\\n.grid {\\n  display: grid;\\n  grid-template-columns: repeat(4, minmax(25%, auto));\\n  width: var(--max-width);\\n  max-width: 100%;\\n}\\n\\n.card {\\n  padding: 1rem 1.2rem;\\n  border-radius: var(--border-radius);\\n  background: rgba(var(--card-rgb), 0);\\n  border: 1px solid rgba(var(--card-border-rgb), 0);\\n  transition: background 200ms, border 200ms;\\n}\\n\\n.card span {\\n  display: inline-block;\\n  transition: transform 200ms;\\n}\\n\\n.card h2 {\\n  font-weight: 600;\\n  margin-bottom: 0.7rem;\\n}\\n\\n.card p {\\n  margin: 0;\\n  opacity: 0.6;\\n  font-size: 0.9rem;\\n  line-height: 1.5;\\n  max-width: 30ch;\\n}\\n\\n.center {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  position: relative;\\n  padding: 4rem 0;\\n}\\n\\n.center::before {\\n  background: var(--secondary-glow);\\n  border-radius: 50%;\\n  width: 480px;\\n  height: 360px;\\n  margin-left: -400px;\\n}\\n\\n.center::after {\\n  background: var(--primary-glow);\\n  width: 240px;\\n  height: 180px;\\n  z-index: -1;\\n}\\n\\n.center::before,\\n.center::after {\\n  content: '';\\n  left: 50%;\\n  position: absolute;\\n  filter: blur(45px);\\n  transform: translateZ(0);\\n}\\n\\n.logo {\\n  position: relative;\\n}\\n@media (hover: hover) and (pointer: fine) {\\n  .card:hover {\\n    background: rgba(var(--card-rgb), 0.1);\\n    border: 1px solid rgba(var(--card-border-rgb), 0.15);\\n  }\\n\\n  .card:hover span {\\n    transform: translateX(4px);\\n  }\\n}\\n\\n@media (prefers-reduced-motion) {\\n  .card:hover span {\\n    transform: none;\\n  }\\n}\\n\\n@media (max-width: 700px) {\\n  .content {\\n    padding: 4rem;\\n  }\\n\\n  .grid {\\n    grid-template-columns: 1fr;\\n    margin-bottom: 120px;\\n    max-width: 320px;\\n    text-align: center;\\n  }\\n\\n  .card {\\n    padding: 1rem 2.5rem;\\n  }\\n\\n  .card h2 {\\n    margin-bottom: 0.5rem;\\n  }\\n\\n  .center {\\n    padding: 8rem 0 6rem;\\n  }\\n\\n  .center::before {\\n    transform: none;\\n    height: 300px;\\n  }\\n\\n  .description {\\n    font-size: 0.8rem;\\n  }\\n\\n  .description a {\\n    padding: 1rem;\\n  }\\n\\n  .description p,\\n  .description div {\\n    display: flex;\\n    justify-content: center;\\n    position: fixed;\\n    width: 100%;\\n  }\\n\\n  .description p {\\n    align-items: center;\\n    inset: 0 0 auto;\\n    padding: 2rem 1rem 1.4rem;\\n    border-radius: 0;\\n    border: none;\\n    border-bottom: 1px solid rgba(var(--callout-border-rgb), 0.25);\\n    background: linear-gradient(\\n      to bottom,\\n      rgba(var(--background-start-rgb), 1),\\n      rgba(var(--callout-rgb), 0.5)\\n    );\\n    background-clip: padding-box;\\n    backdrop-filter: blur(24px);\\n  }\\n\\n  .description div {\\n    align-items: flex-end;\\n    pointer-events: none;\\n    inset: auto 0 0;\\n    padding: 2rem;\\n    height: 200px;\\n    background: linear-gradient(\\n      to bottom,\\n      transparent 0%,\\n      rgb(var(--background-end-rgb)) 40%\\n    );\\n    z-index: 1;\\n  }\\n}\\n\\n@media (min-width: 701px) and (max-width: 1120px) {\\n  .grid {\\n    grid-template-columns: repeat(2, 50%);\\n  }\\n}\\n\\n@media (prefers-color-scheme: dark) {\\n  .vercelLogo {\\n    filter: invert(1);\\n  }\\n\\n  .logo {\\n    filter: invert(1) drop-shadow(0 0 0.3rem #ffffff70);\\n  }\\n}\\n\\n@keyframes rotate {\\n  from {\\n    transform: rotate(360deg);\\n  }\\n  to {\\n    transform: rotate(0deg);\\n  }\\n} */\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://src/styles/Home.module.css\"],\"names\":[],\"mappings\":\"AAAA;EACE,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB,aAAa;EACb,cAAc;EACd,cAAc;;EAEd,YAAY;EACZ,aAAa;EACb,aAAa;;EAEb,eAAe;AACjB;;AAEA;EACE,sBAAsB;EACtB,WAAW;AACb;;AAEA;EACE,aAAa;EACb,gCAAgC;AAClC;;AAEA;EACE,oBAAoB;EACpB,kBAAkB;AACpB;;AAEA;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;GAiOG\",\"sourcesContent\":[\".main{\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n\\n  height: 100vh;\\n  height: 100dvh;\\n  height: 100svh;\\n\\n  width: 100vw;\\n  width: 100dvw;\\n  width: 100svw;\\n\\n  font-size: 3rem;\\n}\\n\\n.content{\\n  background-color: #fff;\\n  color: #000;\\n}\\n\\n.players-grid{\\n  display: grid;\\n  grid-template-columns: auto auto;\\n}\\n\\n.row{\\n  grid-column-start: 1;\\n  grid-column-end: 3;\\n}\\n\\n/* .main {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 6rem;\\n  min-height: 100vh;\\n}\\n\\n.description {\\n  display: inherit;\\n  justify-content: inherit;\\n  align-items: inherit;\\n  font-size: 0.85rem;\\n  max-width: var(--max-width);\\n  width: 100%;\\n  z-index: 2;\\n  font-family: var(--font-mono);\\n}\\n\\n.description a {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  gap: 0.5rem;\\n}\\n\\n.description p {\\n  position: relative;\\n  margin: 0;\\n  padding: 1rem;\\n  background-color: rgba(var(--callout-rgb), 0.5);\\n  border: 1px solid rgba(var(--callout-border-rgb), 0.3);\\n  border-radius: var(--border-radius);\\n}\\n\\n.code {\\n  font-weight: 700;\\n  font-family: var(--font-mono);\\n}\\n\\n.grid {\\n  display: grid;\\n  grid-template-columns: repeat(4, minmax(25%, auto));\\n  width: var(--max-width);\\n  max-width: 100%;\\n}\\n\\n.card {\\n  padding: 1rem 1.2rem;\\n  border-radius: var(--border-radius);\\n  background: rgba(var(--card-rgb), 0);\\n  border: 1px solid rgba(var(--card-border-rgb), 0);\\n  transition: background 200ms, border 200ms;\\n}\\n\\n.card span {\\n  display: inline-block;\\n  transition: transform 200ms;\\n}\\n\\n.card h2 {\\n  font-weight: 600;\\n  margin-bottom: 0.7rem;\\n}\\n\\n.card p {\\n  margin: 0;\\n  opacity: 0.6;\\n  font-size: 0.9rem;\\n  line-height: 1.5;\\n  max-width: 30ch;\\n}\\n\\n.center {\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  position: relative;\\n  padding: 4rem 0;\\n}\\n\\n.center::before {\\n  background: var(--secondary-glow);\\n  border-radius: 50%;\\n  width: 480px;\\n  height: 360px;\\n  margin-left: -400px;\\n}\\n\\n.center::after {\\n  background: var(--primary-glow);\\n  width: 240px;\\n  height: 180px;\\n  z-index: -1;\\n}\\n\\n.center::before,\\n.center::after {\\n  content: '';\\n  left: 50%;\\n  position: absolute;\\n  filter: blur(45px);\\n  transform: translateZ(0);\\n}\\n\\n.logo {\\n  position: relative;\\n}\\n@media (hover: hover) and (pointer: fine) {\\n  .card:hover {\\n    background: rgba(var(--card-rgb), 0.1);\\n    border: 1px solid rgba(var(--card-border-rgb), 0.15);\\n  }\\n\\n  .card:hover span {\\n    transform: translateX(4px);\\n  }\\n}\\n\\n@media (prefers-reduced-motion) {\\n  .card:hover span {\\n    transform: none;\\n  }\\n}\\n\\n@media (max-width: 700px) {\\n  .content {\\n    padding: 4rem;\\n  }\\n\\n  .grid {\\n    grid-template-columns: 1fr;\\n    margin-bottom: 120px;\\n    max-width: 320px;\\n    text-align: center;\\n  }\\n\\n  .card {\\n    padding: 1rem 2.5rem;\\n  }\\n\\n  .card h2 {\\n    margin-bottom: 0.5rem;\\n  }\\n\\n  .center {\\n    padding: 8rem 0 6rem;\\n  }\\n\\n  .center::before {\\n    transform: none;\\n    height: 300px;\\n  }\\n\\n  .description {\\n    font-size: 0.8rem;\\n  }\\n\\n  .description a {\\n    padding: 1rem;\\n  }\\n\\n  .description p,\\n  .description div {\\n    display: flex;\\n    justify-content: center;\\n    position: fixed;\\n    width: 100%;\\n  }\\n\\n  .description p {\\n    align-items: center;\\n    inset: 0 0 auto;\\n    padding: 2rem 1rem 1.4rem;\\n    border-radius: 0;\\n    border: none;\\n    border-bottom: 1px solid rgba(var(--callout-border-rgb), 0.25);\\n    background: linear-gradient(\\n      to bottom,\\n      rgba(var(--background-start-rgb), 1),\\n      rgba(var(--callout-rgb), 0.5)\\n    );\\n    background-clip: padding-box;\\n    backdrop-filter: blur(24px);\\n  }\\n\\n  .description div {\\n    align-items: flex-end;\\n    pointer-events: none;\\n    inset: auto 0 0;\\n    padding: 2rem;\\n    height: 200px;\\n    background: linear-gradient(\\n      to bottom,\\n      transparent 0%,\\n      rgb(var(--background-end-rgb)) 40%\\n    );\\n    z-index: 1;\\n  }\\n}\\n\\n@media (min-width: 701px) and (max-width: 1120px) {\\n  .grid {\\n    grid-template-columns: repeat(2, 50%);\\n  }\\n}\\n\\n@media (prefers-color-scheme: dark) {\\n  .vercelLogo {\\n    filter: invert(1);\\n  }\\n\\n  .logo {\\n    filter: invert(1) drop-shadow(0 0 0.3rem #ffffff70);\\n  }\\n}\\n\\n@keyframes rotate {\\n  from {\\n    transform: rotate(360deg);\\n  }\\n  to {\\n    transform: rotate(0deg);\\n  }\\n} */\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n___CSS_LOADER_EXPORT___.locals = {\n\t\"main\": \"Home_main__EtNt2\",\n\t\"content\": \"Home_content___fOQz\",\n\t\"players-grid\": \"Home_players-grid__J1Uf6\",\n\t\"row\": \"Home_row__xp23k\"\n};\nmodule.exports = ___CSS_LOADER_EXPORT___;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0ub25lT2ZbOF0udXNlWzJdIS4vc3JjL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MuanMiLCJtYXBwaW5ncyI6IkFBQUE7QUFDQSxrQ0FBa0MsbUJBQU8sQ0FBQyxzS0FBa0Y7QUFDNUg7QUFDQTtBQUNBLDREQUE0RCxrQkFBa0IsNEJBQTRCLHdCQUF3QixvQkFBb0IsbUJBQW1CLG1CQUFtQixtQkFBbUIsa0JBQWtCLGtCQUFrQixzQkFBc0IsR0FBRyx5QkFBeUIsMkJBQTJCLGdCQUFnQixHQUFHLDhCQUE4QixrQkFBa0IscUNBQXFDLEdBQUcscUJBQXFCLHlCQUF5Qix1QkFBdUIsR0FBRyxjQUFjLGtCQUFrQiwyQkFBMkIsbUNBQW1DLHdCQUF3QixrQkFBa0Isc0JBQXNCLEdBQUcsa0JBQWtCLHFCQUFxQiw2QkFBNkIseUJBQXlCLHVCQUF1QixnQ0FBZ0MsZ0JBQWdCLGVBQWUsa0NBQWtDLEdBQUcsb0JBQW9CLGtCQUFrQiw0QkFBNEIsd0JBQXdCLGdCQUFnQixHQUFHLG9CQUFvQix1QkFBdUIsY0FBYyxrQkFBa0Isb0RBQW9ELDJEQUEyRCx3Q0FBd0MsR0FBRyxXQUFXLHFCQUFxQixrQ0FBa0MsR0FBRyxXQUFXLGtCQUFrQix3REFBd0QsNEJBQTRCLG9CQUFvQixHQUFHLFdBQVcseUJBQXlCLHdDQUF3Qyx5Q0FBeUMsc0RBQXNELCtDQUErQyxHQUFHLGdCQUFnQiwwQkFBMEIsZ0NBQWdDLEdBQUcsY0FBYyxxQkFBcUIsMEJBQTBCLEdBQUcsYUFBYSxjQUFjLGlCQUFpQixzQkFBc0IscUJBQXFCLG9CQUFvQixHQUFHLGFBQWEsa0JBQWtCLDRCQUE0Qix3QkFBd0IsdUJBQXVCLG9CQUFvQixHQUFHLHFCQUFxQixzQ0FBc0MsdUJBQXVCLGlCQUFpQixrQkFBa0Isd0JBQXdCLEdBQUcsb0JBQW9CLG9DQUFvQyxpQkFBaUIsa0JBQWtCLGdCQUFnQixHQUFHLHNDQUFzQyxnQkFBZ0IsY0FBYyx1QkFBdUIsdUJBQXVCLDZCQUE2QixHQUFHLFdBQVcsdUJBQXVCLEdBQUcsNkNBQTZDLGlCQUFpQiw2Q0FBNkMsMkRBQTJELEtBQUssd0JBQXdCLGlDQUFpQyxLQUFLLEdBQUcscUNBQXFDLHNCQUFzQixzQkFBc0IsS0FBSyxHQUFHLCtCQUErQixjQUFjLG9CQUFvQixLQUFLLGFBQWEsaUNBQWlDLDJCQUEyQix1QkFBdUIseUJBQXlCLEtBQUssYUFBYSwyQkFBMkIsS0FBSyxnQkFBZ0IsNEJBQTRCLEtBQUssZUFBZSwyQkFBMkIsS0FBSyx1QkFBdUIsc0JBQXNCLG9CQUFvQixLQUFLLG9CQUFvQix3QkFBd0IsS0FBSyxzQkFBc0Isb0JBQW9CLEtBQUssMkNBQTJDLG9CQUFvQiw4QkFBOEIsc0JBQXNCLGtCQUFrQixLQUFLLHNCQUFzQiwwQkFBMEIsc0JBQXNCLGdDQUFnQyx1QkFBdUIsbUJBQW1CLHFFQUFxRSw4SUFBOEksbUNBQW1DLGtDQUFrQyxLQUFLLHdCQUF3Qiw0QkFBNEIsMkJBQTJCLHNCQUFzQixvQkFBb0Isb0JBQW9CLDZIQUE2SCxpQkFBaUIsS0FBSyxHQUFHLHVEQUF1RCxXQUFXLDRDQUE0QyxLQUFLLEdBQUcseUNBQXlDLGlCQUFpQix3QkFBd0IsS0FBSyxhQUFhLDBEQUEwRCxLQUFLLEdBQUcsdUJBQXVCLFVBQVUsZ0NBQWdDLEtBQUssUUFBUSw4QkFBOEIsS0FBSyxJQUFJLFdBQVcsMkZBQTJGLFVBQVUsWUFBWSxjQUFjLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxNQUFNLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxxT0FBcU8sZ0NBQWdDLGtCQUFrQiw0QkFBNEIsd0JBQXdCLG9CQUFvQixtQkFBbUIsbUJBQW1CLG1CQUFtQixrQkFBa0Isa0JBQWtCLHNCQUFzQixHQUFHLGFBQWEsMkJBQTJCLGdCQUFnQixHQUFHLGtCQUFrQixrQkFBa0IscUNBQXFDLEdBQUcsU0FBUyx5QkFBeUIsdUJBQXVCLEdBQUcsY0FBYyxrQkFBa0IsMkJBQTJCLG1DQUFtQyx3QkFBd0Isa0JBQWtCLHNCQUFzQixHQUFHLGtCQUFrQixxQkFBcUIsNkJBQTZCLHlCQUF5Qix1QkFBdUIsZ0NBQWdDLGdCQUFnQixlQUFlLGtDQUFrQyxHQUFHLG9CQUFvQixrQkFBa0IsNEJBQTRCLHdCQUF3QixnQkFBZ0IsR0FBRyxvQkFBb0IsdUJBQXVCLGNBQWMsa0JBQWtCLG9EQUFvRCwyREFBMkQsd0NBQXdDLEdBQUcsV0FBVyxxQkFBcUIsa0NBQWtDLEdBQUcsV0FBVyxrQkFBa0Isd0RBQXdELDRCQUE0QixvQkFBb0IsR0FBRyxXQUFXLHlCQUF5Qix3Q0FBd0MseUNBQXlDLHNEQUFzRCwrQ0FBK0MsR0FBRyxnQkFBZ0IsMEJBQTBCLGdDQUFnQyxHQUFHLGNBQWMscUJBQXFCLDBCQUEwQixHQUFHLGFBQWEsY0FBYyxpQkFBaUIsc0JBQXNCLHFCQUFxQixvQkFBb0IsR0FBRyxhQUFhLGtCQUFrQiw0QkFBNEIsd0JBQXdCLHVCQUF1QixvQkFBb0IsR0FBRyxxQkFBcUIsc0NBQXNDLHVCQUF1QixpQkFBaUIsa0JBQWtCLHdCQUF3QixHQUFHLG9CQUFvQixvQ0FBb0MsaUJBQWlCLGtCQUFrQixnQkFBZ0IsR0FBRyxzQ0FBc0MsZ0JBQWdCLGNBQWMsdUJBQXVCLHVCQUF1Qiw2QkFBNkIsR0FBRyxXQUFXLHVCQUF1QixHQUFHLDZDQUE2QyxpQkFBaUIsNkNBQTZDLDJEQUEyRCxLQUFLLHdCQUF3QixpQ0FBaUMsS0FBSyxHQUFHLHFDQUFxQyxzQkFBc0Isc0JBQXNCLEtBQUssR0FBRywrQkFBK0IsY0FBYyxvQkFBb0IsS0FBSyxhQUFhLGlDQUFpQywyQkFBMkIsdUJBQXVCLHlCQUF5QixLQUFLLGFBQWEsMkJBQTJCLEtBQUssZ0JBQWdCLDRCQUE0QixLQUFLLGVBQWUsMkJBQTJCLEtBQUssdUJBQXVCLHNCQUFzQixvQkFBb0IsS0FBSyxvQkFBb0Isd0JBQXdCLEtBQUssc0JBQXNCLG9CQUFvQixLQUFLLDJDQUEyQyxvQkFBb0IsOEJBQThCLHNCQUFzQixrQkFBa0IsS0FBSyxzQkFBc0IsMEJBQTBCLHNCQUFzQixnQ0FBZ0MsdUJBQXVCLG1CQUFtQixxRUFBcUUsOElBQThJLG1DQUFtQyxrQ0FBa0MsS0FBSyx3QkFBd0IsNEJBQTRCLDJCQUEyQixzQkFBc0Isb0JBQW9CLG9CQUFvQiw2SEFBNkgsaUJBQWlCLEtBQUssR0FBRyx1REFBdUQsV0FBVyw0Q0FBNEMsS0FBSyxHQUFHLHlDQUF5QyxpQkFBaUIsd0JBQXdCLEtBQUssYUFBYSwwREFBMEQsS0FBSyxHQUFHLHVCQUF1QixVQUFVLGdDQUFnQyxLQUFLLFFBQVEsOEJBQThCLEtBQUssSUFBSSx1QkFBdUI7QUFDLzNTO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3M/ZmQxNSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL2Nzcy1sb2FkZXIvc3JjL3J1bnRpbWUvYXBpLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLkhvbWVfbWFpbl9fRXROdDJ7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGhlaWdodDogMTAwZHZoO1xcbiAgaGVpZ2h0OiAxMDBzdmg7XFxuXFxuICB3aWR0aDogMTAwdnc7XFxuICB3aWR0aDogMTAwZHZ3O1xcbiAgd2lkdGg6IDEwMHN2dztcXG5cXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLkhvbWVfY29udGVudF9fX2ZPUXp7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgY29sb3I6ICMwMDA7XFxufVxcblxcbi5Ib21lX3BsYXllcnMtZ3JpZF9fSjFVZjZ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxufVxcblxcbi5Ib21lX3Jvd19feHAyM2t7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gIGdyaWQtY29sdW1uLWVuZDogMztcXG59XFxuXFxuLyogLm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNnJlbTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgZGlzcGxheTogaW5oZXJpdDtcXG4gIGp1c3RpZnktY29udGVudDogaW5oZXJpdDtcXG4gIGFsaWduLWl0ZW1zOiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xcbiAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtd2lkdGgpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAyO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9ubyk7XFxufVxcblxcbi5kZXNjcmlwdGlvbiBhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tY2FsbG91dC1yZ2IpLCAwLjUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSh2YXIoLS1jYWxsb3V0LWJvcmRlci1yZ2IpLCAwLjMpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbi5jb2RlIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb25vKTtcXG59XFxuXFxuLmdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1pbm1heCgyNSUsIGF1dG8pKTtcXG4gIHdpZHRoOiB2YXIoLS1tYXgtd2lkdGgpO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY2FyZCB7XFxuICBwYWRkaW5nOiAxcmVtIDEuMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1jYXJkLXJnYiksIDApO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSh2YXIoLS1jYXJkLWJvcmRlci1yZ2IpLCAwKTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMjAwbXMsIGJvcmRlciAyMDBtcztcXG59XFxuXFxuLmNhcmQgc3BhbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXM7XFxufVxcblxcbi5jYXJkIGgyIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBtYXJnaW4tYm90dG9tOiAwLjdyZW07XFxufVxcblxcbi5jYXJkIHAge1xcbiAgbWFyZ2luOiAwO1xcbiAgb3BhY2l0eTogMC42O1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgbWF4LXdpZHRoOiAzMGNoO1xcbn1cXG5cXG4uY2VudGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiA0cmVtIDA7XFxufVxcblxcbi5jZW50ZXI6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktZ2xvdyk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB3aWR0aDogNDgwcHg7XFxuICBoZWlnaHQ6IDM2MHB4O1xcbiAgbWFyZ2luLWxlZnQ6IC00MDBweDtcXG59XFxuXFxuLmNlbnRlcjo6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1nbG93KTtcXG4gIHdpZHRoOiAyNDBweDtcXG4gIGhlaWdodDogMTgwcHg7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLmNlbnRlcjo6YmVmb3JlLFxcbi5jZW50ZXI6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgbGVmdDogNTAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZmlsdGVyOiBibHVyKDQ1cHgpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcXG4gIC5jYXJkOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1jYXJkLXJnYiksIDAuMSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEodmFyKC0tY2FyZC1ib3JkZXItcmdiKSwgMC4xNSk7XFxuICB9XFxuXFxuICAuY2FyZDpob3ZlciBzcGFuIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDRweCk7XFxuICB9XFxufVxcblxcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbikge1xcbiAgLmNhcmQ6aG92ZXIgc3BhbiB7XFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICAuY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDRyZW07XFxuICB9XFxuXFxuICAuZ3JpZCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMjBweDtcXG4gICAgbWF4LXdpZHRoOiAzMjBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmNhcmQge1xcbiAgICBwYWRkaW5nOiAxcmVtIDIuNXJlbTtcXG4gIH1cXG5cXG4gIC5jYXJkIGgyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgfVxcblxcbiAgLmNlbnRlciB7XFxuICAgIHBhZGRpbmc6IDhyZW0gMCA2cmVtO1xcbiAgfVxcblxcbiAgLmNlbnRlcjo6YmVmb3JlIHtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgfVxcblxcbiAgLmRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICB9XFxuXFxuICAuZGVzY3JpcHRpb24gYSB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICB9XFxuXFxuICAuZGVzY3JpcHRpb24gcCxcXG4gIC5kZXNjcmlwdGlvbiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5kZXNjcmlwdGlvbiBwIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaW5zZXQ6IDAgMCBhdXRvO1xcbiAgICBwYWRkaW5nOiAycmVtIDFyZW0gMS40cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKHZhcigtLWNhbGxvdXQtYm9yZGVyLXJnYiksIDAuMjUpO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgdG8gYm90dG9tLFxcbiAgICAgIHJnYmEodmFyKC0tYmFja2dyb3VuZC1zdGFydC1yZ2IpLCAxKSxcXG4gICAgICByZ2JhKHZhcigtLWNhbGxvdXQtcmdiKSwgMC41KVxcbiAgICApO1xcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjRweCk7XFxuICB9XFxuXFxuICAuZGVzY3JpcHRpb24gZGl2IHtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgaW5zZXQ6IGF1dG8gMCAwO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgdG8gYm90dG9tLFxcbiAgICAgIHRyYW5zcGFyZW50IDAlLFxcbiAgICAgIHJnYih2YXIoLS1iYWNrZ3JvdW5kLWVuZC1yZ2IpKSA0MCVcXG4gICAgKTtcXG4gICAgei1pbmRleDogMTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDcwMXB4KSBhbmQgKG1heC13aWR0aDogMTEyMHB4KSB7XFxuICAuZ3JpZCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDUwJSk7XFxuICB9XFxufVxcblxcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcXG4gIC52ZXJjZWxMb2dvIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XFxuICB9XFxuXFxuICAubG9nbyB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEpIGRyb3Atc2hhZG93KDAgMCAwLjNyZW0gI2ZmZmZmZjcwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGUge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbn0gKi9cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3JjL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjs7RUFFbkIsYUFBYTtFQUNiLGNBQWM7RUFDZCxjQUFjOztFQUVkLFlBQVk7RUFDWixhQUFhO0VBQ2IsYUFBYTs7RUFFYixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0JBQXNCO0VBQ3RCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGFBQWE7RUFDYixnQ0FBZ0M7QUFDbEM7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0FBQ3BCOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FpT0dcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLm1haW57XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGhlaWdodDogMTAwZHZoO1xcbiAgaGVpZ2h0OiAxMDBzdmg7XFxuXFxuICB3aWR0aDogMTAwdnc7XFxuICB3aWR0aDogMTAwZHZ3O1xcbiAgd2lkdGg6IDEwMHN2dztcXG5cXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG59XFxuXFxuLmNvbnRlbnR7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcbiAgY29sb3I6ICMwMDA7XFxufVxcblxcbi5wbGF5ZXJzLWdyaWR7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxufVxcblxcbi5yb3d7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gIGdyaWQtY29sdW1uLWVuZDogMztcXG59XFxuXFxuLyogLm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgcGFkZGluZzogNnJlbTtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4uZGVzY3JpcHRpb24ge1xcbiAgZGlzcGxheTogaW5oZXJpdDtcXG4gIGp1c3RpZnktY29udGVudDogaW5oZXJpdDtcXG4gIGFsaWduLWl0ZW1zOiBpbmhlcml0O1xcbiAgZm9udC1zaXplOiAwLjg1cmVtO1xcbiAgbWF4LXdpZHRoOiB2YXIoLS1tYXgtd2lkdGgpO1xcbiAgd2lkdGg6IDEwMCU7XFxuICB6LWluZGV4OiAyO1xcbiAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtbW9ubyk7XFxufVxcblxcbi5kZXNjcmlwdGlvbiBhIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBnYXA6IDAuNXJlbTtcXG59XFxuXFxuLmRlc2NyaXB0aW9uIHAge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEodmFyKC0tY2FsbG91dC1yZ2IpLCAwLjUpO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSh2YXIoLS1jYWxsb3V0LWJvcmRlci1yZ2IpLCAwLjMpO1xcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tYm9yZGVyLXJhZGl1cyk7XFxufVxcblxcbi5jb2RlIHtcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICBmb250LWZhbWlseTogdmFyKC0tZm9udC1tb25vKTtcXG59XFxuXFxuLmdyaWQge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQsIG1pbm1heCgyNSUsIGF1dG8pKTtcXG4gIHdpZHRoOiB2YXIoLS1tYXgtd2lkdGgpO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uY2FyZCB7XFxuICBwYWRkaW5nOiAxcmVtIDEuMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLWJvcmRlci1yYWRpdXMpO1xcbiAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1jYXJkLXJnYiksIDApO1xcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiYSh2YXIoLS1jYXJkLWJvcmRlci1yZ2IpLCAwKTtcXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQgMjAwbXMsIGJvcmRlciAyMDBtcztcXG59XFxuXFxuLmNhcmQgc3BhbiB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjAwbXM7XFxufVxcblxcbi5jYXJkIGgyIHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBtYXJnaW4tYm90dG9tOiAwLjdyZW07XFxufVxcblxcbi5jYXJkIHAge1xcbiAgbWFyZ2luOiAwO1xcbiAgb3BhY2l0eTogMC42O1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBsaW5lLWhlaWdodDogMS41O1xcbiAgbWF4LXdpZHRoOiAzMGNoO1xcbn1cXG5cXG4uY2VudGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiA0cmVtIDA7XFxufVxcblxcbi5jZW50ZXI6OmJlZm9yZSB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zZWNvbmRhcnktZ2xvdyk7XFxuICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICB3aWR0aDogNDgwcHg7XFxuICBoZWlnaHQ6IDM2MHB4O1xcbiAgbWFyZ2luLWxlZnQ6IC00MDBweDtcXG59XFxuXFxuLmNlbnRlcjo6YWZ0ZXIge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tcHJpbWFyeS1nbG93KTtcXG4gIHdpZHRoOiAyNDBweDtcXG4gIGhlaWdodDogMTgwcHg7XFxuICB6LWluZGV4OiAtMTtcXG59XFxuXFxuLmNlbnRlcjo6YmVmb3JlLFxcbi5jZW50ZXI6OmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgbGVmdDogNTAlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgZmlsdGVyOiBibHVyKDQ1cHgpO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xcbn1cXG5cXG4ubG9nbyB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcbkBtZWRpYSAoaG92ZXI6IGhvdmVyKSBhbmQgKHBvaW50ZXI6IGZpbmUpIHtcXG4gIC5jYXJkOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZDogcmdiYSh2YXIoLS1jYXJkLXJnYiksIDAuMSk7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEodmFyKC0tY2FyZC1ib3JkZXItcmdiKSwgMC4xNSk7XFxuICB9XFxuXFxuICAuY2FyZDpob3ZlciBzcGFuIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDRweCk7XFxuICB9XFxufVxcblxcbkBtZWRpYSAocHJlZmVycy1yZWR1Y2VkLW1vdGlvbikge1xcbiAgLmNhcmQ6aG92ZXIgc3BhbiB7XFxuICAgIHRyYW5zZm9ybTogbm9uZTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtYXgtd2lkdGg6IDcwMHB4KSB7XFxuICAuY29udGVudCB7XFxuICAgIHBhZGRpbmc6IDRyZW07XFxuICB9XFxuXFxuICAuZ3JpZCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBtYXJnaW4tYm90dG9tOiAxMjBweDtcXG4gICAgbWF4LXdpZHRoOiAzMjBweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcblxcbiAgLmNhcmQge1xcbiAgICBwYWRkaW5nOiAxcmVtIDIuNXJlbTtcXG4gIH1cXG5cXG4gIC5jYXJkIGgyIHtcXG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xcbiAgfVxcblxcbiAgLmNlbnRlciB7XFxuICAgIHBhZGRpbmc6IDhyZW0gMCA2cmVtO1xcbiAgfVxcblxcbiAgLmNlbnRlcjo6YmVmb3JlIHtcXG4gICAgdHJhbnNmb3JtOiBub25lO1xcbiAgICBoZWlnaHQ6IDMwMHB4O1xcbiAgfVxcblxcbiAgLmRlc2NyaXB0aW9uIHtcXG4gICAgZm9udC1zaXplOiAwLjhyZW07XFxuICB9XFxuXFxuICAuZGVzY3JpcHRpb24gYSB7XFxuICAgIHBhZGRpbmc6IDFyZW07XFxuICB9XFxuXFxuICAuZGVzY3JpcHRpb24gcCxcXG4gIC5kZXNjcmlwdGlvbiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gIH1cXG5cXG4gIC5kZXNjcmlwdGlvbiBwIHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaW5zZXQ6IDAgMCBhdXRvO1xcbiAgICBwYWRkaW5nOiAycmVtIDFyZW0gMS40cmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAwO1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2JhKHZhcigtLWNhbGxvdXQtYm9yZGVyLXJnYiksIDAuMjUpO1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgdG8gYm90dG9tLFxcbiAgICAgIHJnYmEodmFyKC0tYmFja2dyb3VuZC1zdGFydC1yZ2IpLCAxKSxcXG4gICAgICByZ2JhKHZhcigtLWNhbGxvdXQtcmdiKSwgMC41KVxcbiAgICApO1xcbiAgICBiYWNrZ3JvdW5kLWNsaXA6IHBhZGRpbmctYm94O1xcbiAgICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjRweCk7XFxuICB9XFxuXFxuICAuZGVzY3JpcHRpb24gZGl2IHtcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXG4gICAgaW5zZXQ6IGF1dG8gMCAwO1xcbiAgICBwYWRkaW5nOiAycmVtO1xcbiAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoXFxuICAgICAgdG8gYm90dG9tLFxcbiAgICAgIHRyYW5zcGFyZW50IDAlLFxcbiAgICAgIHJnYih2YXIoLS1iYWNrZ3JvdW5kLWVuZC1yZ2IpKSA0MCVcXG4gICAgKTtcXG4gICAgei1pbmRleDogMTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDcwMXB4KSBhbmQgKG1heC13aWR0aDogMTEyMHB4KSB7XFxuICAuZ3JpZCB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDUwJSk7XFxuICB9XFxufVxcblxcbkBtZWRpYSAocHJlZmVycy1jb2xvci1zY2hlbWU6IGRhcmspIHtcXG4gIC52ZXJjZWxMb2dvIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XFxuICB9XFxuXFxuICAubG9nbyB7XFxuICAgIGZpbHRlcjogaW52ZXJ0KDEpIGRyb3Atc2hhZG93KDAgMCAwLjNyZW0gI2ZmZmZmZjcwKTtcXG4gIH1cXG59XFxuXFxuQGtleWZyYW1lcyByb3RhdGUge1xcbiAgZnJvbSB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XFxuICB9XFxuICB0byB7XFxuICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpO1xcbiAgfVxcbn0gKi9cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLmxvY2FscyA9IHtcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX19FdE50MlwiLFxuXHRcImNvbnRlbnRcIjogXCJIb21lX2NvbnRlbnRfX19mT1F6XCIsXG5cdFwicGxheWVycy1ncmlkXCI6IFwiSG9tZV9wbGF5ZXJzLWdyaWRfX0oxVWY2XCIsXG5cdFwicm93XCI6IFwiSG9tZV9yb3dfX3hwMjNrXCJcbn07XG5tb2R1bGUuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[8].use[2]!./src/styles/Home.module.css\n"));

/***/ })

});