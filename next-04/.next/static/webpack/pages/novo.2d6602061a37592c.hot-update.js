"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/novo",{

/***/ "./pages/novo.js":
/*!***********************!*\
  !*** ./pages/novo.js ***!
  \***********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Novo; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\nfunction Novo() {\n    _s();\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"https://extreme-ip-lookup.com/json/?key=lOrbxjRbt2JB1UT1GtFz\", fetcher);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"falha na requisi\\xe7\\xe3o...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\novo.js\",\n        lineNumber: 4,\n        columnNumber: 23\n    }, this);\n    if (!data) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"carregando...\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\novo.js\",\n        lineNumber: 5,\n        columnNumber: 23\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: Object.key(data).map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \" \",\n                    m.org,\n                    \" -- \",\n                    m.query,\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\novo.js\",\n                lineNumber: 8,\n                columnNumber: 43\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\novo.js\",\n        lineNumber: 7,\n        columnNumber: 9\n    }, this);\n}\n_s(Novo, \"PLUSh3GLacfZJClYQJks7Deieck=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = Novo;\nasync function fetcher(url) {\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n}\nvar _c;\n$RefreshReg$(_c, \"Novo\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ub3ZvLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFBd0I7QUFDVCxTQUFTQyxPQUFNOztJQUMxQixNQUFNLEVBQUNDLEtBQUksRUFBRUMsTUFBSyxFQUFDLEdBQUdILCtDQUFNQSxDQUFFLGdFQUErREk7SUFDN0YsSUFBSUQsT0FBTyxxQkFBTyw4REFBQ0U7a0JBQUk7Ozs7OztJQUN2QixJQUFJLENBQUNILE1BQU0scUJBQU8sOERBQUNHO2tCQUFJOzs7Ozs7SUFDdkIscUJBQ0ksOERBQUNBO2tCQUNLQyxPQUFPQyxHQUFHLENBQUNMLE1BQU1NLEdBQUcsQ0FBRUMsQ0FBQUEsa0JBQU0sOERBQUNKOztvQkFBSTtvQkFBRUksRUFBRUMsR0FBRztvQkFBQztvQkFBS0QsRUFBRUUsS0FBSztvQkFBQzs7Ozs7Ozs7Ozs7O0FBR3BFLENBQUM7R0FUdUJWOztRQUNFRCwyQ0FBTUE7OztLQURSQztBQVd4QixlQUFlRyxRQUFRUSxHQUFHLEVBQUU7SUFDeEIsTUFBTUMsTUFBTSxNQUFNQyxNQUFNRjtJQUN4QixNQUFNRyxPQUFPLE1BQU1GLElBQUlFLElBQUk7SUFDM0IsT0FBT0E7QUFDWCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9ub3ZvLmpzPzkyNjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHVzZVNXUiBmcm9tICdzd3InXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5vdm8oKXtcclxuICAgIGNvbnN0IHtkYXRhLCBlcnJvcn0gPSB1c2VTV1IoYGh0dHBzOi8vZXh0cmVtZS1pcC1sb29rdXAuY29tL2pzb24vP2tleT1sT3JieGpSYnQySkIxVVQxR3RGemAsIGZldGNoZXIpICAgIFxyXG4gICAgaWYgKGVycm9yKSByZXR1cm4gPGRpdj5mYWxoYSBuYSByZXF1aXNpw6fDo28uLi48L2Rpdj5cclxuICAgIGlmICghZGF0YSkgcmV0dXJuIDxkaXY+Y2FycmVnYW5kby4uLjwvZGl2PlxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICB7IE9iamVjdC5rZXkoZGF0YSkubWFwKCBtID0+ICg8ZGl2PiB7bS5vcmd9IC0tIHttLnF1ZXJ5fSA8L2Rpdj4gKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApICAgIFxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaGVyKHVybCkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgcmV0dXJuIGpzb247XHJcbn0iXSwibmFtZXMiOlsidXNlU1dSIiwiTm92byIsImRhdGEiLCJlcnJvciIsImZldGNoZXIiLCJkaXYiLCJPYmplY3QiLCJrZXkiLCJtYXAiLCJtIiwib3JnIiwicXVlcnkiLCJ1cmwiLCJyZXMiLCJmZXRjaCIsImpzb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/novo.js\n"));

/***/ })

});