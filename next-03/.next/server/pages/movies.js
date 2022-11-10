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
exports.id = "pages/movies";
exports.ids = ["pages/movies"];
exports.modules = {

/***/ "./pages/movies.js":
/*!*************************!*\
  !*** ./pages/movies.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Movies),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n\nasync function getServerSideProps(context, pesquisa = \"bagdad\") {\n    const res = await fetch(`http://www.omdbapi.com/?apikey=fe65a93e&s=${pesquisa}`);\n    const data = await res.json();\n    return {\n        props: {\n            data\n        }\n    };\n}\nfunction Movies({ data  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: data.Search.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        \" \",\n                        m.Title,\n                        \" --- \",\n                        m.Year,\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-03\\\\pages\\\\movies.js\",\n                            lineNumber: 16,\n                            columnNumber: 63\n                        }, this),\n                        \" \",\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            width: \"200x\",\n                            src: m.Poster\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-03\\\\pages\\\\movies.js\",\n                            lineNumber: 16,\n                            columnNumber: 73\n                        }, this),\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-03\\\\pages\\\\movies.js\",\n                    lineNumber: 16,\n                    columnNumber: 34\n                }, this))\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-03\\\\pages\\\\movies.js\",\n            lineNumber: 15,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-03\\\\pages\\\\movies.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9tb3ZpZXMuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQU8sZUFBZUEsbUJBQW1CQyxPQUFPLEVBQUVDLFdBQVMsUUFBUSxFQUFDO0lBQ2xFLE1BQU1DLE1BQU0sTUFBTUMsTUFBTSxDQUFDLDBDQUEwQyxFQUFFRixTQUFTLENBQUM7SUFDL0UsTUFBTUcsT0FBTyxNQUFNRixJQUFJRyxJQUFJO0lBQzNCLE9BQU87UUFDSEMsT0FBTztZQUNIRjtRQUNKO0lBQ0o7QUFFRixDQUFDO0FBRWMsU0FBU0csT0FBTyxFQUFDSCxLQUFJLEVBQUMsRUFBQztJQUNwQyxxQkFDRSw4REFBQ0k7a0JBQ0MsNEVBQUNBO3NCQUNFSixLQUFLSyxNQUFNLENBQUNDLEdBQUcsQ0FBRSxDQUFDQyxrQkFBTSw4REFBQ0g7O3dCQUFJO3dCQUFFRyxFQUFFQyxLQUFLO3dCQUFDO3dCQUFNRCxFQUFFRSxJQUFJO3dCQUFDO3NDQUFDLDhEQUFDQzs7Ozs7d0JBQVE7c0NBQUMsOERBQUNDOzRCQUFJQyxPQUFNOzRCQUFPQyxLQUFLTixFQUFFTyxNQUFNOzs7Ozs7d0JBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSTFHLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9tb3ZpZXMuanM/YWY1NCJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQsIHBlc3F1aXNhPVwiYmFnZGFkXCIpe1xyXG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9ZmU2NWE5M2Umcz0ke3Blc3F1aXNhfWApXHJcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKClcclxuICByZXR1cm4ge1xyXG4gICAgICBwcm9wczoge1xyXG4gICAgICAgICAgZGF0YVxyXG4gICAgICB9XHJcbiAgfVxyXG4gIFxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3ZpZXMoe2RhdGF9KXtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGRpdj5cclxuICAgICAgICB7ZGF0YS5TZWFyY2gubWFwKCAobSkgPT4gPGRpdj4ge20uVGl0bGV9IC0tLSB7bS5ZZWFyfSA8YnI+PC9icj4gPGltZyB3aWR0aD1cIjIwMHhcIiBzcmM9e20uUG9zdGVyfS8+IDwvZGl2Pil9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJwZXNxdWlzYSIsInJlcyIsImZldGNoIiwiZGF0YSIsImpzb24iLCJwcm9wcyIsIk1vdmllcyIsImRpdiIsIlNlYXJjaCIsIm1hcCIsIm0iLCJUaXRsZSIsIlllYXIiLCJiciIsImltZyIsIndpZHRoIiwic3JjIiwiUG9zdGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/movies.js\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/movies.js"));
module.exports = __webpack_exports__;

})();