"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/movies3",{

/***/ "./pages/movies3.js":
/*!**************************!*\
  !*** ./pages/movies3.js ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TheLink\": function() { return /* binding */ TheLink; },\n/* harmony export */   \"TheMovies\": function() { return /* binding */ TheMovies; },\n/* harmony export */   \"default\": function() { return /* binding */ Movies3; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var antd_lib_layout_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd/lib/layout/layout */ \"./node_modules/antd/lib/layout/layout.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst App = next_dynamic__WEBPACK_IMPORTED_MODULE_5___default()(()=>__webpack_require__.e(/*! import() */ \"pages_layout_index_js\").then(__webpack_require__.bind(__webpack_require__, /*! ./layout/index */ \"./pages/layout/index.js\")), {\n    loadableGenerated: {\n        modules: [\n            \"movies3.js -> \" + \"./layout/index\"\n        ]\n    },\n    suspense: true\n});\n_c = App;\nfunction Movies3() {\n    _s();\n    const [url, setUrl] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(url, theFetcher);\n    const onClickHandler = (e)=>{\n        e.preventDefault();\n        if (url === \"\") setUrl(\"http://www.omdbapi.com/?apikey=fe65a93e&s=wonder\");\n        else setUrl(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"https://cdn-icons-png.flaticon.com/512/149/149286.png\",\n                        type: \"image/x-icon\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\movies3.js\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \" My Page \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\movies3.js\",\n                        lineNumber: 29,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\movies3.js\",\n                lineNumber: 27,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(App, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd_lib_layout_layout__WEBPACK_IMPORTED_MODULE_6__.Content, {\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TheMovies, {\n                        data: error ? {\n                            error: \"Erro na pesquisa\"\n                        } : data ? data : {\n                            Search: \"\"\n                        },\n                        show: url !== \"\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\movies3.js\",\n                        lineNumber: 33,\n                        columnNumber: 21\n                    }, this)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\movies3.js\",\n                    lineNumber: 32,\n                    columnNumber: 17\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\movies3.js\",\n                lineNumber: 31,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\movies3.js\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TheLink, {\n                url: url,\n                handler: onClickHandler\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\movies3.js\",\n                lineNumber: 37,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\movies3.js\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, this);\n}\n_s(Movies3, \"2r2+E4Om05gz+0AzJznQQl0HwCY=\", false, function() {\n    return [\n        swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c1 = Movies3;\nasync function theFetcher(url) {\n    if (url === null || url === \"\") return {\n        Search: \"\"\n    };\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n}\nfunction TheMovies(param) {\n    let { data , show  } = param;\n    if (!show) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\movies3.js\",\n        lineNumber: 51,\n        columnNumber: 24\n    }, this);\n    if (data.error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"falha na requisi\\xe7\\xe3o\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\movies3.js\",\n        lineNumber: 52,\n        columnNumber: 29\n    }, this);\n    if (data.Search === \"\") return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                type: \"primary\",\n                size: \"small\",\n                loading: true,\n                children: \" Carregando...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\movies3.js\",\n                lineNumber: 53,\n                columnNumber: 43\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\movies3.js\",\n        lineNumber: 53,\n        columnNumber: 37\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            marginLeft: \"1rem\"\n        },\n        children: data.Search.map((m)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                        href: \"/onemovie/\" + m.imdbID,\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_8__.CheckOutlined, {}, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\movies3.js\",\n                                lineNumber: 56,\n                                columnNumber: 92\n                            }, this),\n                            \" \",\n                            m.Title,\n                            \" --- \",\n                            m.Year,\n                            \" \"\n                        ]\n                    }, m.imdbID, true, {\n                        fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\movies3.js\",\n                        lineNumber: 56,\n                        columnNumber: 43\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\movies3.js\",\n                lineNumber: 56,\n                columnNumber: 37\n            }, this))\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\movies3.js\",\n        lineNumber: 55,\n        columnNumber: 9\n    }, this);\n}\n_c2 = TheMovies;\nfunction TheLink(param) {\n    let { url , handler  } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            marginLeft: \"2rem\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Space, {\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                    type: \"primary\",\n                    ghost: true,\n                    href: \"movies4\",\n                    children: \" Pesquisar \"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\movies3.js\",\n                    lineNumber: 65,\n                    columnNumber: 17\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                    type: \"primary\",\n                    ghost: true,\n                    href: \"/movies3.js\",\n                    onClick: handler,\n                    children: [\n                        \" \",\n                        url === \"\" ? \"Mostrar\" : \"Ocultar\",\n                        \" \"\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\movies3.js\",\n                    lineNumber: 66,\n                    columnNumber: 17\n                }, this)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\movies3.js\",\n            lineNumber: 64,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\movies3.js\",\n        lineNumber: 63,\n        columnNumber: 9\n    }, this);\n}\n_c3 = TheLink;\nvar _c, _c1, _c2, _c3;\n$RefreshReg$(_c, \"App\");\n$RefreshReg$(_c1, \"Movies3\");\n$RefreshReg$(_c2, \"TheMovies\");\n$RefreshReg$(_c3, \"TheLink\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SztvQkFBVXFCLEtBQUs7b0JBQUN0QixNQUFLO29CQUFjdUIsU0FBU2Y7O3dCQUFTO3dCQUFFbkIsUUFBUSxLQUFLLFlBQVksU0FBUzt3QkFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXZILENBQUM7TUFUZWtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL21vdmllczMuanM/N2FhYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgQ2hlY2tPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgQnV0dG9uLCBTcGFjZSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcyc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IGR5bmFtaWMgZnJvbSAnbmV4dC9keW5hbWljJztcclxuaW1wb3J0IHsgQ29udGVudCB9IGZyb20gJ2FudGQvbGliL2xheW91dC9sYXlvdXQnO1xyXG5cclxuY29uc3QgQXBwID0gZHluYW1pYygoKT0+IGltcG9ydCgnLi9sYXlvdXQvaW5kZXgnKSx7XHJcbiAgICBzdXNwZW5zZTogdHJ1ZSwgXHJcbiB9KTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1vdmllczMoKSB7XHJcbiAgICBjb25zdCBbdXJsLCBzZXRVcmxdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCB7IGRhdGEsIGVycm9yIH0gPSB1c2VTV1IodXJsLCB0aGVGZXRjaGVyKVxyXG5cclxuICAgIGNvbnN0IG9uQ2xpY2tIYW5kbGVyID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgICAgICBpZiAodXJsID09PSAnJykgc2V0VXJsKCdodHRwOi8vd3d3Lm9tZGJhcGkuY29tLz9hcGlrZXk9ZmU2NWE5M2Umcz13b25kZXInKVxyXG4gICAgICAgIGVsc2Ugc2V0VXJsKCcnKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cImh0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vNTEyLzE0OS8xNDkyODYucG5nXCIgdHlwZT1cImltYWdlL3gtaWNvblwiPjwvbGluaz5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT4gTXkgUGFnZSA8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxBcHA+XHJcbiAgICAgICAgICAgICAgICA8Q29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8VGhlTW92aWVzIGRhdGE9e2Vycm9yID8geyBlcnJvcjogJ0Vycm8gbmEgcGVzcXVpc2EnIH0gOiBkYXRhID8gZGF0YSA6IHsgU2VhcmNoOiAnJyB9fSBzaG93PXt1cmwgIT09ICcnfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Db250ZW50PlxyXG4gICAgICAgICAgICA8L0FwcD5cclxuICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgPFRoZUxpbmsgdXJsPXt1cmx9IGhhbmRsZXI9e29uQ2xpY2tIYW5kbGVyfSAvPlxyXG4gICAgICAgICAgICBcclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gdGhlRmV0Y2hlcih1cmwpIHtcclxuICAgIGlmICh1cmwgPT09IG51bGwgfHwgdXJsID09PSAnJykgcmV0dXJuIHsgU2VhcmNoOiAnJyB9XHJcbiAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaCh1cmwpO1xyXG4gICAgY29uc3QganNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XHJcbiAgICByZXR1cm4ganNvbjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRoZU1vdmllcyh7IGRhdGEsIHNob3cgfSkge1xyXG4gICAgaWYgKCFzaG93KSByZXR1cm4gKDxkaXY+PC9kaXY+KVxyXG4gICAgaWYgKGRhdGEuZXJyb3IpIHJldHVybiAoPGRpdj5mYWxoYSBuYSByZXF1aXNpw6fDo288L2Rpdj4pXHJcbiAgICBpZiAoZGF0YS5TZWFyY2ggPT09ICcnKSByZXR1cm4gKDxkaXY+IDxCdXR0b24gdHlwZT1cInByaW1hcnlcIiBzaXplPVwic21hbGxcIiBsb2FkaW5nPiBDYXJyZWdhbmRvLi4uPC9CdXR0b24+PC9kaXY+KVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcxcmVtJyB9fT5cclxuICAgICAgICAgICAge2RhdGEuU2VhcmNoLm1hcCgobSkgPT4gPGRpdj4gPGEga2V5PXttLmltZGJJRH0gaHJlZj17XCIvb25lbW92aWUvXCIgKyBtLmltZGJJRH0+PENoZWNrT3V0bGluZWQgLz4ge20uVGl0bGV9IC0tLSB7bS5ZZWFyfSA8L2E+PC9kaXY+KX1cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFRoZUxpbmsoeyB1cmwsIGhhbmRsZXIgfSkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpbkxlZnQ6ICcycmVtJyB9fT5cclxuICAgICAgICAgICAgPFNwYWNlPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiB0eXBlPSdwcmltYXJ5JyBnaG9zdCBocmVmPVwibW92aWVzNFwiPiBQZXNxdWlzYXIgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgZ2hvc3QgaHJlZj1cIi9tb3ZpZXMzLmpzXCIgb25DbGljaz17aGFuZGxlcn0+IHt1cmwgPT09ICcnID8gJ01vc3RyYXInIDogJ09jdWx0YXInfSA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9TcGFjZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU1dSIiwidXNlU3RhdGUiLCJDaGVja091dGxpbmVkIiwiQnV0dG9uIiwiU3BhY2UiLCJSZWFjdCIsIkhlYWQiLCJkeW5hbWljIiwiQ29udGVudCIsIkFwcCIsInN1c3BlbnNlIiwiTW92aWVzMyIsInVybCIsInNldFVybCIsImRhdGEiLCJlcnJvciIsInRoZUZldGNoZXIiLCJvbkNsaWNrSGFuZGxlciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImRpdiIsImxpbmsiLCJyZWwiLCJocmVmIiwidHlwZSIsInRpdGxlIiwiVGhlTW92aWVzIiwiU2VhcmNoIiwic2hvdyIsImJyIiwiVGhlTGluayIsImhhbmRsZXIiLCJyZXMiLCJmZXRjaCIsImpzb24iLCJzaXplIiwibG9hZGluZyIsInN0eWxlIiwibWFyZ2luTGVmdCIsIm1hcCIsIm0iLCJhIiwiaW1kYklEIiwiVGl0bGUiLCJZZWFyIiwiZ2hvc3QiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/movies3.js\n"));

/***/ })

});