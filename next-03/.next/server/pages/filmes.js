"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/filmes";
exports.ids = ["pages/filmes"];
exports.modules = {

/***/ "./pages/filmes.js":
/*!*************************!*\
  !*** ./pages/filmes.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Filmes),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function getServerSideProps(context, pesquisa = \"x-men\") {\n    const res = await fetch(`http://www.omdbapi.com/?apikey=fe65a93e&s=${pesquisa}`);\n    const data = await res.json();\n    return {\n        props: {\n            data\n        }\n    };\n}\nfunction Filmes({ data  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: data.Search.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        \" \",\n                        m.Title,\n                        \" -- \",\n                        m.Year,\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-03\\\\pages\\\\filmes.js\",\n                            lineNumber: 15,\n                            columnNumber: 70\n                        }, this),\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            width: \"200px\",\n                            src: m.Poster\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-03\\\\pages\\\\filmes.js\",\n                            lineNumber: 15,\n                            columnNumber: 80\n                        }, this),\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-03\\\\pages\\\\filmes.js\",\n                    lineNumber: 15,\n                    columnNumber: 42\n                }, this))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-03\\\\pages\\\\filmes.js\",\n            lineNumber: 14,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-03\\\\pages\\\\filmes.js\",\n        lineNumber: 13,\n        columnNumber: 9\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9maWxtZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQU8sZUFBZUEsbUJBQW1CQyxPQUFPLEVBQUVDLFdBQVMsT0FBTyxFQUFDO0lBQy9ELE1BQU1DLE1BQU0sTUFBTUMsTUFBTSxDQUFDLDBDQUEwQyxFQUFFRixTQUFTLENBQUM7SUFDL0UsTUFBTUcsT0FBTyxNQUFNRixJQUFJRyxJQUFJO0lBQzNCLE9BQU87UUFDSEMsT0FBTztZQUNIRjtRQUNKO0lBQ0o7QUFDSixDQUFDO0FBRWMsU0FBU0csT0FBTyxFQUFDSCxLQUFJLEVBQUMsRUFBQztJQUNsQyxxQkFDSSw4REFBQ0k7a0JBQ0csNEVBQUNBO3NCQUNJSixLQUFLSyxNQUFNLENBQUNDLEdBQUcsQ0FBRSxDQUFDQyxrQkFBTSw4REFBQ0g7O3dCQUFJO3dCQUFFRyxFQUFFQyxLQUFLO3dCQUFDO3dCQUFLRCxFQUFFRSxJQUFJO3dCQUFDO3NDQUFDLDhEQUFDQzs7Ozs7d0JBQVE7c0NBQUMsOERBQUNDOzRCQUFJQyxPQUFNOzRCQUFRQyxLQUFLTixFQUFFTyxNQUFNOzs7Ozs7d0JBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWxILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9maWxtZXMuanM/YjU4OSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQsIHBlc3F1aXNhPVwieC1tZW5cIil7XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PWZlNjVhOTNlJnM9JHtwZXNxdWlzYX1gKVxyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgZGF0YVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmlsbWVzKHtkYXRhfSl7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICB7ZGF0YS5TZWFyY2gubWFwKCAobSkgPT4gPGRpdj4ge20uVGl0bGV9IC0tIHttLlllYXJ9IDxicj48L2JyPiA8aW1nIHdpZHRoPVwiMjAwcHhcIiBzcmM9e20uUG9zdGVyfS8+IDwvZGl2Pil9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59Il0sIm5hbWVzIjpbImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJwZXNxdWlzYSIsInJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iLCJwcm9wcyIsIkZpbG1lcyIsImRpdiIsIlNlYXJjaCIsIm1hcCIsIm0iLCJUaXRsZSIsIlllYXIiLCJiciIsImltZyIsIndpZHRoIiwic3JjIiwiUG9zdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/filmes.js\n");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/filmes.js"));
module.exports = __webpack_exports__;

})();