exports.id = 591;
exports.ids = [591];
exports.modules = {

/***/ 9026:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapperRating": "CustomRate_wrapperRating__iCS4K",
	"ratingCount": "CustomRate_ratingCount__DQkuA"
};


/***/ }),

/***/ 2161:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5725);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9026);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_4__);





function CustomRate({ rating  }) {
    let color;
    if (rating >= 4) {
        color = 'green';
    } else if (rating < 4 && rating > 2.5) {
        color = '#fadb14;';
    } else if (rating < 2.5) {
        color = 'red';
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().wrapperRating),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_4___default().ratingCount),
                style: {
                    color
                },
                children: rating
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd__WEBPACK_IMPORTED_MODULE_3__.Rate, {
                allowHalf: true,
                disabled: true,
                defaultValue: rating,
                style: {
                    color
                }
            })
        ]
    }));
}
CustomRate.propTypes = {
    rating: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().number.isRequired)
};
CustomRate.defaultProps = {};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(CustomRate));


/***/ }),

/***/ 9272:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ declOfNumReviews)
/* harmony export */ });
/* unused harmony export test */
function declOfNum(number, titles, returnString) {
    const cases = [
        2,
        0,
        1,
        1,
        1,
        2
    ];
    const title = titles[number % 100 > 4 && number % 100 < 20 ? 2 : cases[number % 10 < 5 ? number % 10 : 5]];
    if (returnString) {
        return `${number} ${title}`;
    }
    return title;
}
function declOfNumReviews(number, returnString) {
    const titles = [
        'отзыв',
        'отзыва',
        'отзывов'
    ];
    return declOfNum(number, titles, returnString);
}
function test() {}


/***/ })

};
;