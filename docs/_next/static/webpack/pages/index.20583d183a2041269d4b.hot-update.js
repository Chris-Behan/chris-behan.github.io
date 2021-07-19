webpackHotUpdate_N_E("pages/index",{

/***/ "./components/SignupForm.js":
/*!**********************************!*\
  !*** ./components/SignupForm.js ***!
  \**********************************/
/*! exports provided: SignupForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SignupForm\", function() { return SignupForm; });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/signup.module.css */ \"./styles/signup.module.css\");\n/* harmony import */ var _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_signup_module_css__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/home/chris/dev/javascript/chris-behan.github.io/components/SignupForm.js\",\n    _s = $RefreshSig$();\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n\n\nfunction SignupForm() {\n  _s();\n\n  var mailChimpURL = 'https://chrisbehan.us6.list-manage.com/subscribe/post?u=0b20b88aeb38038fee452a64e&amp;id=ef13d3d07a';\n  var mailChimpUser = '0b20b88aeb38038fee452a64e';\n  var mailChimpID = 'ef13d3d07a';\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(''),\n      email = _useState[0],\n      setEmail = _useState[1];\n\n  return __jsx(\"div\", {\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 5\n    }\n  }, __jsx(\"form\", {\n    className: _styles_signup_module_css__WEBPACK_IMPORTED_MODULE_1___default.a.signupForm,\n    action: mailChimpURL,\n    method: \"POST\",\n    noValidate: true,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 7\n    }\n  }, __jsx(\"input\", {\n    type: \"hidden\",\n    name: \"u\",\n    value: mailChimpUser,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 12,\n      columnNumber: 9\n    }\n  }), __jsx(\"input\", {\n    type: \"hidden\",\n    name: \"id\",\n    value: mailChimpID,\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 13,\n      columnNumber: 9\n    }\n  }), __jsx(\"label\", {\n    htmlFor: \"email\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, \"Email\", __jsx(\"input\", {\n    type: \"email\",\n    name: \"EMAIL\",\n    placeholder: \"Email\",\n    id: \"email\",\n    value: email,\n    onChange: function onChange(e) {\n      return setEmail(e.target.value);\n    },\n    autoCapitalize: \"off\",\n    autoCorrect: \"off\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 11\n    }\n  })), __jsx(\"input\", {\n    type: \"submit\",\n    value: \"Subscribe\",\n    name: \"subscribe\",\n    id: \"mc-embedded-subscribe\",\n    className: \"button\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    style: {\n      position: 'absolute',\n      left: '-5000px'\n    },\n    \"aria-hidden\": \"true\",\n    \"aria-label\": \"Please leave the following three fields empty\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 9\n    }\n  }, __jsx(\"label\", {\n    htmlFor: \"b_name\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 11\n    }\n  }, \"Name: \"), __jsx(\"input\", {\n    type: \"text\",\n    name: \"b_name\",\n    tabIndex: \"-1\",\n    value: \"\",\n    placeholder: \"Freddie\",\n    id: \"b_name\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 33,\n      columnNumber: 11\n    }\n  }), __jsx(\"label\", {\n    htmlFor: \"b_email\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 11\n    }\n  }, \"Email: \"), __jsx(\"input\", {\n    type: \"email\",\n    name: \"b_email\",\n    tabIndex: \"-1\",\n    value: \"\",\n    placeholder: \"youremail@gmail.com\",\n    id: \"b_email\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 11\n    }\n  }), __jsx(\"label\", {\n    htmlFor: \"b_comment\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 11\n    }\n  }, \"Comment: \"), __jsx(\"textarea\", {\n    name: \"b_comment\",\n    tabIndex: \"-1\",\n    placeholder: \"Please comment\",\n    id: \"b_comment\",\n    __self: this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 11\n    }\n  }))));\n}\n\n_s(SignupForm, \"qu4bovk5U4+JuhY7vxbmswqixrc=\");\n\n_c = SignupForm;\n\nvar _c;\n\n$RefreshReg$(_c, \"SignupForm\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9TaWdudXBGb3JtLmpzP2IxZjIiXSwibmFtZXMiOlsiU2lnbnVwRm9ybSIsIm1haWxDaGltcFVSTCIsIm1haWxDaGltcFVzZXIiLCJtYWlsQ2hpbXBJRCIsInVzZVN0YXRlIiwiZW1haWwiLCJzZXRFbWFpbCIsInN0eWxlcyIsInNpZ251cEZvcm0iLCJlIiwidGFyZ2V0IiwidmFsdWUiLCJwb3NpdGlvbiIsImxlZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sU0FBU0EsVUFBVCxHQUFzQjtBQUFBOztBQUMzQixNQUFNQyxZQUFZLEdBQUcscUdBQXJCO0FBQ0EsTUFBTUMsYUFBYSxHQUFHLDJCQUF0QjtBQUNBLE1BQU1DLFdBQVcsR0FBRyxZQUFwQjs7QUFDQSxrQkFBMEJDLHNEQUFRLENBQUMsRUFBRCxDQUFsQztBQUFBLE1BQU9DLEtBQVA7QUFBQSxNQUFjQyxRQUFkOztBQUNBLFNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQU0sYUFBUyxFQUFFQyxnRUFBTSxDQUFDQyxVQUF4QjtBQUFvQyxVQUFNLEVBQUVQLFlBQTVDO0FBQTBELFVBQU0sRUFBQyxNQUFqRTtBQUF3RSxjQUFVLE1BQWxGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFPLFFBQUksRUFBQyxRQUFaO0FBQXFCLFFBQUksRUFBQyxHQUExQjtBQUE4QixTQUFLLEVBQUVDLGFBQXJDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFERixFQUVFO0FBQU8sUUFBSSxFQUFDLFFBQVo7QUFBcUIsUUFBSSxFQUFDLElBQTFCO0FBQStCLFNBQUssRUFBRUMsV0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBR0U7QUFBTyxXQUFPLEVBQUMsT0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRUU7QUFDRSxRQUFJLEVBQUMsT0FEUDtBQUVFLFFBQUksRUFBQyxPQUZQO0FBR0UsZUFBVyxFQUFDLE9BSGQ7QUFJRSxNQUFFLEVBQUMsT0FKTDtBQUtFLFNBQUssRUFBRUUsS0FMVDtBQU1FLFlBQVEsRUFBRSxrQkFBQ0ksQ0FBRDtBQUFBLGFBQU9ILFFBQVEsQ0FBQ0csQ0FBQyxDQUFDQyxNQUFGLENBQVNDLEtBQVYsQ0FBZjtBQUFBLEtBTlo7QUFPRSxrQkFBYyxFQUFDLEtBUGpCO0FBUUUsZUFBVyxFQUFDLEtBUmQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLENBSEYsRUFpQkU7QUFBTyxRQUFJLEVBQUMsUUFBWjtBQUFxQixTQUFLLEVBQUMsV0FBM0I7QUFBdUMsUUFBSSxFQUFDLFdBQTVDO0FBQXdELE1BQUUsRUFBQyx1QkFBM0Q7QUFBbUYsYUFBUyxFQUFDLFFBQTdGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFqQkYsRUFvQkU7QUFBSyxTQUFLLEVBQUU7QUFBRUMsY0FBUSxFQUFFLFVBQVo7QUFBd0JDLFVBQUksRUFBRTtBQUE5QixLQUFaO0FBQXVELG1CQUFZLE1BQW5FO0FBQTBFLGtCQUFXLCtDQUFyRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBTyxXQUFPLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsRUFFRTtBQUFPLFFBQUksRUFBQyxNQUFaO0FBQW1CLFFBQUksRUFBQyxRQUF4QjtBQUFpQyxZQUFRLEVBQUMsSUFBMUM7QUFBK0MsU0FBSyxFQUFDLEVBQXJEO0FBQXdELGVBQVcsRUFBQyxTQUFwRTtBQUE4RSxNQUFFLEVBQUMsUUFBakY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUZGLEVBSUU7QUFBTyxXQUFPLEVBQUMsU0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkYsRUFLRTtBQUFPLFFBQUksRUFBQyxPQUFaO0FBQW9CLFFBQUksRUFBQyxTQUF6QjtBQUFtQyxZQUFRLEVBQUMsSUFBNUM7QUFBaUQsU0FBSyxFQUFDLEVBQXZEO0FBQTBELGVBQVcsRUFBQyxxQkFBdEU7QUFBNEYsTUFBRSxFQUFDLFNBQS9GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFMRixFQU9FO0FBQU8sV0FBTyxFQUFDLFdBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFQRixFQVFFO0FBQVUsUUFBSSxFQUFDLFdBQWY7QUFBMkIsWUFBUSxFQUFDLElBQXBDO0FBQXlDLGVBQVcsRUFBQyxnQkFBckQ7QUFBc0UsTUFBRSxFQUFDLFdBQXpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFSRixDQXBCRixDQURGLENBREY7QUFvQ0Q7O0dBekNlYixVOztLQUFBQSxVIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9TaWdudXBGb3JtLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvc2lnbnVwLm1vZHVsZS5jc3NcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIFNpZ251cEZvcm0oKSB7XG4gIGNvbnN0IG1haWxDaGltcFVSTCA9ICdodHRwczovL2NocmlzYmVoYW4udXM2Lmxpc3QtbWFuYWdlLmNvbS9zdWJzY3JpYmUvcG9zdD91PTBiMjBiODhhZWIzODAzOGZlZTQ1MmE2NGUmYW1wO2lkPWVmMTNkM2QwN2EnO1xuICBjb25zdCBtYWlsQ2hpbXBVc2VyID0gJzBiMjBiODhhZWIzODAzOGZlZTQ1MmE2NGUnO1xuICBjb25zdCBtYWlsQ2hpbXBJRCA9ICdlZjEzZDNkMDdhJztcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJyk7XG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxmb3JtIGNsYXNzTmFtZT17c3R5bGVzLnNpZ251cEZvcm19IGFjdGlvbj17bWFpbENoaW1wVVJMfSBtZXRob2Q9XCJQT1NUXCIgbm9WYWxpZGF0ZT5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJoaWRkZW5cIiBuYW1lPVwidVwiIHZhbHVlPXttYWlsQ2hpbXBVc2VyfSAvPlxuICAgICAgICA8aW5wdXQgdHlwZT1cImhpZGRlblwiIG5hbWU9XCJpZFwiIHZhbHVlPXttYWlsQ2hpbXBJRH0gLz5cbiAgICAgICAgPGxhYmVsIGh0bWxGb3I9J2VtYWlsJz5cbiAgICAgICAgICBFbWFpbFxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcbiAgICAgICAgICAgIG5hbWU9XCJFTUFJTFwiXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcbiAgICAgICAgICAgIGlkPVwiZW1haWxcIlxuICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxuICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiBzZXRFbWFpbChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBhdXRvQ2FwaXRhbGl6ZT1cIm9mZlwiXG4gICAgICAgICAgICBhdXRvQ29ycmVjdD1cIm9mZlwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9sYWJlbD5cblxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwiU3Vic2NyaWJlXCIgbmFtZT1cInN1YnNjcmliZVwiIGlkPVwibWMtZW1iZWRkZWQtc3Vic2NyaWJlXCIgY2xhc3NOYW1lPVwiYnV0dG9uXCIgLz5cblxuICAgICAgICB7LyogUHJvdGVjdHMgYWdhaW5zdCBib3RzICovfVxuICAgICAgICA8ZGl2IHN0eWxlPXt7IHBvc2l0aW9uOiAnYWJzb2x1dGUnLCBsZWZ0OiAnLTUwMDBweCcgfX0gYXJpYS1oaWRkZW49J3RydWUnIGFyaWEtbGFiZWw9XCJQbGVhc2UgbGVhdmUgdGhlIGZvbGxvd2luZyB0aHJlZSBmaWVsZHMgZW1wdHlcIj5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImJfbmFtZVwiPk5hbWU6IDwvbGFiZWw+XG4gICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgbmFtZT1cImJfbmFtZVwiIHRhYkluZGV4PVwiLTFcIiB2YWx1ZT1cIlwiIHBsYWNlaG9sZGVyPVwiRnJlZGRpZVwiIGlkPVwiYl9uYW1lXCIgLz5cblxuICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiYl9lbWFpbFwiPkVtYWlsOiA8L2xhYmVsPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZW1haWxcIiBuYW1lPVwiYl9lbWFpbFwiIHRhYkluZGV4PVwiLTFcIiB2YWx1ZT1cIlwiIHBsYWNlaG9sZGVyPVwieW91cmVtYWlsQGdtYWlsLmNvbVwiIGlkPVwiYl9lbWFpbFwiIC8+XG5cbiAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cImJfY29tbWVudFwiPkNvbW1lbnQ6IDwvbGFiZWw+XG4gICAgICAgICAgPHRleHRhcmVhIG5hbWU9XCJiX2NvbW1lbnRcIiB0YWJJbmRleD1cIi0xXCIgcGxhY2Vob2xkZXI9XCJQbGVhc2UgY29tbWVudFwiIGlkPVwiYl9jb21tZW50XCI+PC90ZXh0YXJlYT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Zvcm0+XG4gICAgPC9kaXY+XG4gIClcblxufSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/SignupForm.js\n");

/***/ })

})