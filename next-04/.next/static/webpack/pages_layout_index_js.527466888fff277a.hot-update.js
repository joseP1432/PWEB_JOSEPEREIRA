"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages_layout_index_js",{

/***/ "./pages/layout/index.js":
/*!*******************************!*\
  !*** ./pages/layout/index.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ App; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ \"./node_modules/@ant-design/icons/es/index.js\");\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n\n\n\n\nconst { Header , Content , Footer , Sider  } = antd__WEBPACK_IMPORTED_MODULE_2__.Layout;\nfunction App() {\n    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Sider, {\n                breakpoint: \"lg\",\n                collapsedWidth: \"0\",\n                onBreakpoint: (broken)=>{\n                    console.log(broken);\n                },\n                onCollapse: (collapsed, type)=>{\n                    console.log(collapsed, type);\n                },\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"logo\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\layout\\\\index.js\",\n                        lineNumber: 16,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Menu, {\n                        theme: \"dark\",\n                        mode: \"inline\",\n                        defaultSelectedKeys: [\n                            \"4\"\n                        ],\n                        items: [\n                            _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.UserOutlined,\n                            _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.VideoCameraOutlined,\n                            _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.UploadOutlined,\n                            _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__.UserOutlined\n                        ].map((icon, index)=>({\n                                key: String(index + 1),\n                                icon: /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createElement(icon),\n                                label: \"nav \".concat(index + 1)\n                            }))\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\layout\\\\index.js\",\n                        lineNumber: 17,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\layout\\\\index.js\",\n                lineNumber: 7,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Header, {\n                        className: \"site-layout-sub-header-background\",\n                        style: {\n                            padding: 0\n                        }\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\layout\\\\index.js\",\n                        lineNumber: 31,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Content, {\n                        style: {\n                            margin: \"24px 16px 0\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"site-layout-background\",\n                            style: {\n                                padding: 24,\n                                minHeight: 360\n                            },\n                            children: \"content\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\layout\\\\index.js\",\n                            lineNumber: 42,\n                            columnNumber: 17\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\layout\\\\index.js\",\n                        lineNumber: 37,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Footer, {\n                        style: {\n                            textAlign: \"center\"\n                        },\n                        children: \"Ant Design \\xa92018 Created by Ant UED\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\layout\\\\index.js\",\n                        lineNumber: 52,\n                        columnNumber: 13\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\layout\\\\index.js\",\n                lineNumber: 30,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\josem\\\\Desktop\\\\PWEB\\\\next-04\\\\pages\\\\layout\\\\index.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n}\n_c = App;\nvar _c;\n$RefreshReg$(_c, \"App\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9sYXlvdXQvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBQzREO0FBQ2xEO0FBQ3BDLE1BQU0sRUFBRU0sT0FBTSxFQUFFQyxRQUFPLEVBQUVDLE9BQU0sRUFBRUMsTUFBSyxFQUFFLEdBQUdMLHdDQUFNQTtBQUNsQyxTQUFTTSxNQUFNO2tCQUMxQiw4REFBQ04sd0NBQU1BOzswQkFDSCw4REFBQ0s7Z0JBQ0dFLFlBQVc7Z0JBQ1hDLGdCQUFlO2dCQUNmQyxjQUFjLENBQUNDLFNBQVc7b0JBQ3RCQyxRQUFRQyxHQUFHLENBQUNGO2dCQUNoQjtnQkFDQUcsWUFBWSxDQUFDQyxXQUFXQyxPQUFTO29CQUM3QkosUUFBUUMsR0FBRyxDQUFDRSxXQUFXQztnQkFDM0I7O2tDQUNBLDhEQUFDQzt3QkFBSUMsV0FBVTs7Ozs7O2tDQUNmLDhEQUFDaEIsc0NBQUlBO3dCQUNEaUIsT0FBTTt3QkFDTkMsTUFBSzt3QkFDTEMscUJBQXFCOzRCQUFDO3lCQUFJO3dCQUMxQkMsT0FBTzs0QkFBQ3ZCLDJEQUFZQTs0QkFBRUMsa0VBQW1CQTs0QkFBRUYsNkRBQWNBOzRCQUFFQywyREFBWUE7eUJBQUMsQ0FBQ3dCLEdBQUcsQ0FDeEUsQ0FBQ0MsTUFBTUMsUUFBVztnQ0FDZEMsS0FBS0MsT0FBT0YsUUFBUTtnQ0FDcEJELG9CQUFNM0IsMERBQW1CLENBQUMyQjtnQ0FDMUJLLE9BQU8sT0FBaUIsT0FBVkosUUFBUTs0QkFDMUI7Ozs7Ozs7Ozs7OzswQkFJWiw4REFBQ3hCLHdDQUFNQTs7a0NBQ0gsOERBQUNFO3dCQUNHZSxXQUFVO3dCQUNWWSxPQUFPOzRCQUNIQyxTQUFTO3dCQUNiOzs7Ozs7a0NBRUosOERBQUMzQjt3QkFDRzBCLE9BQU87NEJBQ0hFLFFBQVE7d0JBQ1o7a0NBRUEsNEVBQUNmOzRCQUNHQyxXQUFVOzRCQUNWWSxPQUFPO2dDQUNIQyxTQUFTO2dDQUNURSxXQUFXOzRCQUNmO3NDQUNIOzs7Ozs7Ozs7OztrQ0FJTCw4REFBQzVCO3dCQUNHeUIsT0FBTzs0QkFDSEksV0FBVzt3QkFDZjtrQ0FDSDs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS2IsQ0FBQztLQXhEdUIzQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9sYXlvdXQvaW5kZXguanM/OTE4YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBVcGxvYWRPdXRsaW5lZCwgVXNlck91dGxpbmVkLCBWaWRlb0NhbWVyYU91dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBMYXlvdXQsIE1lbnUgfSBmcm9tICdhbnRkJztcclxuY29uc3QgeyBIZWFkZXIsIENvbnRlbnQsIEZvb3RlciwgU2lkZXIgfSA9IExheW91dDtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKCkge1xyXG4gICAgPExheW91dD5cclxuICAgICAgICA8U2lkZXJcclxuICAgICAgICAgICAgYnJlYWtwb2ludD1cImxnXCJcclxuICAgICAgICAgICAgY29sbGFwc2VkV2lkdGg9XCIwXCJcclxuICAgICAgICAgICAgb25CcmVha3BvaW50PXsoYnJva2VuKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhicm9rZW4pO1xyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICBvbkNvbGxhcHNlPXsoY29sbGFwc2VkLCB0eXBlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjb2xsYXBzZWQsIHR5cGUpO1xyXG4gICAgICAgICAgICB9fT5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCIgLz5cclxuICAgICAgICAgICAgPE1lbnVcclxuICAgICAgICAgICAgICAgIHRoZW1lPVwiZGFya1wiXHJcbiAgICAgICAgICAgICAgICBtb2RlPVwiaW5saW5lXCJcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRTZWxlY3RlZEtleXM9e1snNCddfVxyXG4gICAgICAgICAgICAgICAgaXRlbXM9e1tVc2VyT3V0bGluZWQsIFZpZGVvQ2FtZXJhT3V0bGluZWQsIFVwbG9hZE91dGxpbmVkLCBVc2VyT3V0bGluZWRdLm1hcChcclxuICAgICAgICAgICAgICAgICAgICAoaWNvbiwgaW5kZXgpID0+ICh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogU3RyaW5nKGluZGV4ICsgMSksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246IFJlYWN0LmNyZWF0ZUVsZW1lbnQoaWNvbiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBgbmF2ICR7aW5kZXggKyAxfWAsXHJcbiAgICAgICAgICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvU2lkZXI+XHJcbiAgICAgICAgPExheW91dD5cclxuICAgICAgICAgICAgPEhlYWRlclxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2l0ZS1sYXlvdXQtc3ViLWhlYWRlci1iYWNrZ3JvdW5kXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMCxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDb250ZW50XHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbjogJzI0cHggMTZweCAwJyxcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzaXRlLWxheW91dC1iYWNrZ3JvdW5kXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyNCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiAzNjAsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9Db250ZW50PlxyXG4gICAgICAgICAgICA8Rm9vdGVyXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBBbnQgRGVzaWduIMKpMjAxOCBDcmVhdGVkIGJ5IEFudCBVRURcclxuICAgICAgICAgICAgPC9Gb290ZXI+XHJcbiAgICAgICAgPC9MYXlvdXQ+XHJcbiAgICA8L0xheW91dD5cclxufTtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiVXBsb2FkT3V0bGluZWQiLCJVc2VyT3V0bGluZWQiLCJWaWRlb0NhbWVyYU91dGxpbmVkIiwiTGF5b3V0IiwiTWVudSIsIkhlYWRlciIsIkNvbnRlbnQiLCJGb290ZXIiLCJTaWRlciIsIkFwcCIsImJyZWFrcG9pbnQiLCJjb2xsYXBzZWRXaWR0aCIsIm9uQnJlYWtwb2ludCIsImJyb2tlbiIsImNvbnNvbGUiLCJsb2ciLCJvbkNvbGxhcHNlIiwiY29sbGFwc2VkIiwidHlwZSIsImRpdiIsImNsYXNzTmFtZSIsInRoZW1lIiwibW9kZSIsImRlZmF1bHRTZWxlY3RlZEtleXMiLCJpdGVtcyIsIm1hcCIsImljb24iLCJpbmRleCIsImtleSIsIlN0cmluZyIsImNyZWF0ZUVsZW1lbnQiLCJsYWJlbCIsInN0eWxlIiwicGFkZGluZyIsIm1hcmdpbiIsIm1pbkhlaWdodCIsInRleHRBbGlnbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/layout/index.js\n"));

/***/ })

});