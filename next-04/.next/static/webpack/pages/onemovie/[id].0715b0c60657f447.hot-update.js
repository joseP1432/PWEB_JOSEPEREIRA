"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/onemovie/[id]",{

/***/ "./pages/onemovie/[id].js":
/*!********************************!*\
  !*** ./pages/onemovie/[id].js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"TheLink\": function() { return /* binding */ TheLink; },\n/* harmony export */   \"TheMovies\": function() { return /* binding */ TheMovies; },\n/* harmony export */   \"default\": function() { return /* binding */ Movies3; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var swr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! swr */ \"./node_modules/swr/dist/index.mjs\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/dist/antd.css */ \"./node_modules/antd/dist/antd.css\");\n/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Movies3() {\n    _s();\n    //const router = useRouter();\n    const { id  } = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)().query;\n    const [url, setUrl] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const { data , error  } = (0,swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(url, theFetcher);\n    const onClickHandler = (e)=>{\n        e.preventDefault();\n        if (url === \"\") setUrl(\"http://www.omdbapi.com/?apikey=fe65a93e&i=\" + id);\n        else setUrl(\"\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_4___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"https://cdn-icons-png.flaticon.com/512/149/149286.png\",\n                        type: \"image/x-icon\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\onemovie\\\\[id].js\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \" My Page \"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\onemovie\\\\[id].js\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\onemovie\\\\[id].js\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\onemovie\\\\[id].js\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TheLink, {\n                url: url,\n                handler: onClickHandler\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\onemovie\\\\[id].js\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(TheMovies, {\n                data: error ? {\n                    error: \"Erro na pesquisa\"\n                } : data ? data : {\n                    Search: \"\"\n                },\n                show: url !== \"\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\onemovie\\\\[id].js\",\n                lineNumber: 30,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\onemovie\\\\[id].js\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this);\n}\n_s(Movies3, \"twO8KIaJ4ssCvgcoJ6Xg4kZGVI4=\", false, function() {\n    return [\n        next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter,\n        swr__WEBPACK_IMPORTED_MODULE_1__[\"default\"]\n    ];\n});\n_c = Movies3;\nasync function theFetcher(url) {\n    const res = await fetch(url);\n    const json = await res.json();\n    return json;\n}\nfunction TheMovies(param) {\n    let { data , show  } = param;\n    if (!show) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {}, void 0, false, {\n        fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\onemovie\\\\[id].js\",\n        lineNumber: 42,\n        columnNumber: 24\n    }, this);\n    if (data.error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"falha na requisi\\xe7\\xe3o\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\onemovie\\\\[id].js\",\n        lineNumber: 43,\n        columnNumber: 29\n    }, this);\n    if (data.Search === \"\") return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                type: \"primary\",\n                size: \"small\",\n                loading: true,\n                children: \" Carregando...\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\onemovie\\\\[id].js\",\n                lineNumber: 44,\n                columnNumber: 44\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\onemovie\\\\[id].js\",\n        lineNumber: 44,\n        columnNumber: 38\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            textAlign: \"center\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: data.Poster\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\onemovie\\\\[id].js\",\n                lineNumber: 47,\n                columnNumber: 13\n            }, this),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\onemovie\\\\[id].js\",\n                lineNumber: 47,\n                columnNumber: 39\n            }, this),\n            \" \",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\onemovie\\\\[id].js\",\n                lineNumber: 47,\n                columnNumber: 45\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.CheckOutlined, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\onemovie\\\\[id].js\",\n                lineNumber: 48,\n                columnNumber: 12\n            }, this),\n            \" \",\n            data.Title,\n            \" --- \",\n            data.Year\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\onemovie\\\\[id].js\",\n        lineNumber: 46,\n        columnNumber: 9\n    }, this);\n}\n_c1 = TheMovies;\nfunction TheLink() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            marginLeft: \"70rem\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Space, {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_6__.Button, {\n                type: \"primary\",\n                ghost: true,\n                href: \"../movies3\",\n                children: [\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ant_design_icons__WEBPACK_IMPORTED_MODULE_7__.HomeOutlined, {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\onemovie\\\\[id].js\",\n                        lineNumber: 57,\n                        columnNumber: 65\n                    }, this),\n                    \" \"\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\onemovie\\\\[id].js\",\n                lineNumber: 57,\n                columnNumber: 17\n            }, this)\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\onemovie\\\\[id].js\",\n            lineNumber: 56,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\onemovie\\\\[id].js\",\n        lineNumber: 55,\n        columnNumber: 9\n    }, this);\n}\n_c2 = TheLink;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Movies3\");\n$RefreshReg$(_c1, \"TheMovies\");\n$RefreshReg$(_c2, \"TheLink\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9vbmVtb3ZpZS9baWRdLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFBd0I7QUFDTTtBQUMwRDtBQUNuRDtBQUNYO0FBQ0U7QUFDQTtBQUNXO0FBRXhCLFNBQVNXLFVBQVM7O0lBQzdCLDZCQUE2QjtJQUM3QixNQUFNLEVBQUVDLEdBQUUsRUFBRSxHQUFHRixzREFBU0EsR0FBR0csS0FBSztJQUNoQyxNQUFNLENBQUNDLEtBQUtDLE9BQU8sR0FBR2QsK0NBQVFBLENBQUM7SUFDL0IsTUFBTSxFQUFDZSxLQUFJLEVBQUVDLE1BQUssRUFBQyxHQUFHakIsK0NBQU1BLENBQUNjLEtBQUtJO0lBRWxDLE1BQU1DLGlCQUFpQixDQUFDQyxJQUFNO1FBQzFCQSxFQUFFQyxjQUFjO1FBQ2hCLElBQUlQLFFBQVEsSUFBSUMsT0FBTywrQ0FBK0NIO2FBQ2pFRyxPQUFPO0lBQ2hCO0lBRUEscUJBQ0ksOERBQUNPOzswQkFDRyw4REFBQ2Isa0RBQUlBOztrQ0FDRCw4REFBQ2M7d0JBQUtDLEtBQUk7d0JBQU9DLE1BQUs7d0JBQXdEQyxNQUFLOzs7Ozs7a0NBQ25GLDhEQUFDQztrQ0FBTTs7Ozs7Ozs7Ozs7OzBCQUVYLDhEQUFDQzs7Ozs7MEJBQ0QsOERBQUNDO2dCQUFRZixLQUFLQTtnQkFBS2dCLFNBQVNYOzs7Ozs7MEJBQzVCLDhEQUFDWTtnQkFBVWYsTUFBT0MsUUFBTTtvQkFBQ0EsT0FBTTtnQkFBa0IsSUFBR0QsT0FBT0EsT0FBTTtvQkFBQ2dCLFFBQU87Z0JBQUUsQ0FBQztnQkFBR0MsTUFBTW5CLFFBQVE7Ozs7Ozs7Ozs7OztBQUd6RyxDQUFDO0dBdkJ1Qkg7O1FBRUxELGtEQUFTQTtRQUVGViwyQ0FBTUE7OztLQUpSVztBQXlCeEIsZUFBZU8sV0FBV0osR0FBRyxFQUFFO0lBQzNCLE1BQU1vQixNQUFNLE1BQU1DLE1BQU1yQjtJQUN4QixNQUFNc0IsT0FBTyxNQUFNRixJQUFJRSxJQUFJO0lBQzNCLE9BQU9BO0FBQ1g7QUFFTyxTQUFTTCxVQUFVLEtBQVcsRUFBQztRQUFaLEVBQUNmLEtBQUksRUFBQ2lCLEtBQUksRUFBQyxHQUFYO0lBQ3RCLElBQUksQ0FBQ0EsTUFBTSxxQkFBUSw4REFBQ1g7Ozs7O0lBQ3BCLElBQUlOLEtBQUtDLEtBQUssRUFBRSxxQkFBUSw4REFBQ0s7a0JBQUk7Ozs7OztJQUM3QixJQUFJTixLQUFLZ0IsTUFBTSxLQUFLLElBQUsscUJBQVEsOERBQUNWOztZQUFJOzBCQUFDLDhEQUFDaEIsd0NBQU1BO2dCQUFDb0IsTUFBSztnQkFBVVcsTUFBSztnQkFBUUMsT0FBTzswQkFBQzs7Ozs7Ozs7Ozs7O0lBQ25GLHFCQUNJLDhEQUFDaEI7UUFBSWlCLE9BQU87WUFBQ0MsV0FBVztRQUFROzswQkFDNUIsOERBQUNDO2dCQUFJQyxLQUFLMUIsS0FBSzJCLE1BQU07Ozs7OztZQUFJOzBCQUFDLDhEQUFDZjs7Ozs7WUFBSTswQkFBQyw4REFBQ0E7Ozs7OzBCQUNsQyw4REFBQzFCLDREQUFhQTs7Ozs7WUFBRztZQUFFYyxLQUFLNEIsS0FBSztZQUFDO1lBQU01QixLQUFLNkIsSUFBSTs7Ozs7OztBQUd4RCxDQUFDO01BVmVkO0FBWVQsU0FBU0YsVUFBUztJQUNyQixxQkFDSSw4REFBQ1A7UUFBSWlCLE9BQU87WUFBQ08sWUFBWTtRQUFPO2tCQUM1Qiw0RUFBQ3ZDLHVDQUFLQTtzQkFDRiw0RUFBQ0Qsd0NBQU1BO2dCQUFDb0IsTUFBSztnQkFBVXFCLEtBQUs7Z0JBQUN0QixNQUFLOztvQkFBYTtrQ0FBQyw4REFBQ3BCLDJEQUFZQTs7Ozs7b0JBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSWhGLENBQUM7TUFSZXdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL29uZW1vdmllL1tpZF0uanM/YzJiNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgdXNlU1dSIGZyb20gJ3N3cidcclxuaW1wb3J0IHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7Q2hlY2tPdXRsaW5lZCwgRG93bk91dGxpbmVkLCBVcE91dGxpbmVkLCBIb21lT3V0bGluZWR9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgQnV0dG9uLCBTcGFjZSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgJ2FudGQvZGlzdC9hbnRkLmNzcyc7XHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3ZpZXMzKCl7XHJcbiAgICAvL2NvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gICAgY29uc3QgeyBpZCB9ID0gdXNlUm91dGVyKCkucXVlcnk7XHJcbiAgICBjb25zdCBbdXJsLCBzZXRVcmxdID0gdXNlU3RhdGUoJycpXHJcbiAgICBjb25zdCB7ZGF0YSwgZXJyb3J9ID0gdXNlU1dSKHVybCwgdGhlRmV0Y2hlcilcclxuXHJcbiAgICBjb25zdCBvbkNsaWNrSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICAgICAgaWYgKHVybCA9PT0gJycpIHNldFVybCgnaHR0cDovL3d3dy5vbWRiYXBpLmNvbS8/YXBpa2V5PWZlNjVhOTNlJmk9JyArIGlkKVxyXG4gICAgICAgIGVsc2Ugc2V0VXJsKCcnKVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cImh0dHBzOi8vY2RuLWljb25zLXBuZy5mbGF0aWNvbi5jb20vNTEyLzE0OS8xNDkyODYucG5nXCIgdHlwZT1cImltYWdlL3gtaWNvblwiPjwvbGluaz5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT4gTXkgUGFnZSA8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgIDxUaGVMaW5rIHVybD17dXJsfSBoYW5kbGVyPXtvbkNsaWNrSGFuZGxlcn0vPlxyXG4gICAgICAgICAgICA8VGhlTW92aWVzIGRhdGE9eyBlcnJvcj97ZXJyb3I6J0Vycm8gbmEgcGVzcXVpc2EnfTogZGF0YSA/IGRhdGE6IHtTZWFyY2g6Jyd9IH0gc2hvdz17dXJsICE9PSAnJ30vPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiB0aGVGZXRjaGVyKHVybCkge1xyXG4gICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2godXJsKTtcclxuICAgIGNvbnN0IGpzb24gPSBhd2FpdCByZXMuanNvbigpO1xyXG4gICAgcmV0dXJuIGpzb247XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUaGVNb3ZpZXMoe2RhdGEsc2hvd30pe1xyXG4gICAgaWYgKCFzaG93KSByZXR1cm4gKDxkaXY+PC9kaXY+KSAgICBcclxuICAgIGlmIChkYXRhLmVycm9yKSByZXR1cm4gKDxkaXY+ZmFsaGEgbmEgcmVxdWlzacOnw6NvPC9kaXY+KVxyXG4gICAgaWYgKGRhdGEuU2VhcmNoID09PSAnJyApIHJldHVybiAoPGRpdj4gPEJ1dHRvbiB0eXBlPVwicHJpbWFyeVwiIHNpemU9XCJzbWFsbFwiIGxvYWRpbmc+IENhcnJlZ2FuZG8uLi48L0J1dHRvbj48L2Rpdj4pXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgc3R5bGU9e3t0ZXh0QWxpZ246ICdjZW50ZXInfX0+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPXtkYXRhLlBvc3Rlcn0gLz4gPGJyLz4gPGJyLz5cclxuICAgICAgICAgICA8Q2hlY2tPdXRsaW5lZCAvPiB7ZGF0YS5UaXRsZX0gLS0tIHtkYXRhLlllYXJ9ICAgICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBUaGVMaW5rKCl7ICAgIFxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7bWFyZ2luTGVmdDogJzcwcmVtJ319PlxyXG4gICAgICAgICAgICA8U3BhY2U+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uIHR5cGU9XCJwcmltYXJ5XCIgZ2hvc3QgaHJlZj1cIi4uL21vdmllczNcIj4gPEhvbWVPdXRsaW5lZCAvPiA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9TcGFjZT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG4iXSwibmFtZXMiOlsidXNlU1dSIiwidXNlU3RhdGUiLCJDaGVja091dGxpbmVkIiwiRG93bk91dGxpbmVkIiwiVXBPdXRsaW5lZCIsIkhvbWVPdXRsaW5lZCIsIkJ1dHRvbiIsIlNwYWNlIiwiUmVhY3QiLCJIZWFkIiwidXNlUm91dGVyIiwiTW92aWVzMyIsImlkIiwicXVlcnkiLCJ1cmwiLCJzZXRVcmwiLCJkYXRhIiwiZXJyb3IiLCJ0aGVGZXRjaGVyIiwib25DbGlja0hhbmRsZXIiLCJlIiwicHJldmVudERlZmF1bHQiLCJkaXYiLCJsaW5rIiwicmVsIiwiaHJlZiIsInR5cGUiLCJ0aXRsZSIsImJyIiwiVGhlTGluayIsImhhbmRsZXIiLCJUaGVNb3ZpZXMiLCJTZWFyY2giLCJzaG93IiwicmVzIiwiZmV0Y2giLCJqc29uIiwic2l6ZSIsImxvYWRpbmciLCJzdHlsZSIsInRleHRBbGlnbiIsImltZyIsInNyYyIsIlBvc3RlciIsIlRpdGxlIiwiWWVhciIsIm1hcmdpbkxlZnQiLCJnaG9zdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/onemovie/[id].js\n"));

/***/ })

});