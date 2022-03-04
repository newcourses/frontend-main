(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 636:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "BackTopButton_button__REFBy",
	"backTop": "BackTopButton_backTop__yv4OF",
	"backTopIcon": "BackTopButton_backTopIcon__uUA9v"
};


/***/ }),

/***/ 4144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: external "moment/locale/ru"
var ru_ = __webpack_require__(4045);
// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(2245);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: ./src/components/BackTopButton/index.module.scss
var index_module = __webpack_require__(636);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
;// CONCATENATED MODULE: ./src/components/BackTopButton/index.jsx






function BackTopButton() {
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.BackTop, {
        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: external_classnames_default()((index_module_default()).button, (index_module_default()).backTop),
            children: /*#__PURE__*/ jsx_runtime_.jsx(icons_.VerticalAlignTopOutlined, {
                className: (index_module_default()).backTopIcon
            })
        })
    }));
}
BackTopButton.propTypes = {};
BackTopButton.defaultProps = {};
/* harmony default export */ const components_BackTopButton = (/*#__PURE__*/external_react_default().memo(BackTopButton));

;// CONCATENATED MODULE: ./src/pages/_app.jsx







external_moment_default().locale('ru');
function MyApp({ Component , pageProps  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Component, {
                ...pageProps
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_BackTopButton, {})
        ]
    }));
}
MyApp.propTypes = {
    // eslint-disable-next-line react/forbid-prop-types
    pageProps: (external_prop_types_default()).object.isRequired,
    Component: (external_prop_types_default()).element.isRequired
};
/* harmony default export */ const _app = (MyApp);


/***/ }),

/***/ 7066:
/***/ ((module) => {

"use strict";
module.exports = require("@ant-design/icons");

/***/ }),

/***/ 5725:
/***/ ((module) => {

"use strict";
module.exports = require("antd");

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 2245:
/***/ ((module) => {

"use strict";
module.exports = require("moment");

/***/ }),

/***/ 4045:
/***/ ((module) => {

"use strict";
module.exports = require("moment/locale/ru");

/***/ }),

/***/ 580:
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(4144));
module.exports = __webpack_exports__;

})();