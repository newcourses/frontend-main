(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 4677:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "CategoriesCard_wrapper__8CWOq",
	"caption": "CategoriesCard_caption__occ3d",
	"link": "CategoriesCard_link__jklAs",
	"button": "CategoriesCard_button__iAi9X"
};


/***/ }),

/***/ 7340:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "CourseCategories_container__rLkuO",
	"mainTitle": "CourseCategories_mainTitle__ohVGI",
	"wrapperList": "CourseCategories_wrapperList__o0azi"
};


/***/ }),

/***/ 239:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "MainBanner_container__i_SF3",
	"img": "MainBanner_img__AZezS",
	"button": "MainBanner_button__hWcp2",
	"textButton": "MainBanner_textButton__rXlwe"
};


/***/ }),

/***/ 5774:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/layouts/Main/index.jsx + 8 modules
var Main = __webpack_require__(3812);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: ./src/containers/CourseCategories/index.module.scss
var index_module = __webpack_require__(7340);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: ./src/components/CategoriesCard/index.module.scss
var CategoriesCard_index_module = __webpack_require__(4677);
var CategoriesCard_index_module_default = /*#__PURE__*/__webpack_require__.n(CategoriesCard_index_module);
// EXTERNAL MODULE: ./src/propTypes/index.js + 6 modules
var propTypes = __webpack_require__(160);
// EXTERNAL MODULE: ./src/library/navigation.js
var navigation = __webpack_require__(5705);
;// CONCATENATED MODULE: ./src/components/CategoriesCard/index.jsx








function CategoriesCard({ caption , subcategories , handler  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (CategoriesCard_index_module_default()).wrapper,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: (CategoriesCard_index_module_default()).caption,
                children: caption
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    children: [
                        subcategories.data.slice(0, 4).map(({ id , attributes  })=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                    href: navigation/* default.coursesCategory.link */.Z.coursesCategory.link,
                                    as: navigation/* default.coursesCategory.as */.Z.coursesCategory.as(attributes.value),
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                        className: (CategoriesCard_index_module_default()).link,
                                        children: attributes.caption
                                    })
                                })
                            }, id)
                        ),
                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                                type: "button",
                                className: (CategoriesCard_index_module_default()).button,
                                onClick: handler,
                                children: [
                                    "Развернуть все",
                                    /*#__PURE__*/ jsx_runtime_.jsx(icons_.DownOutlined, {
                                        style: {
                                            marginLeft: '10px'
                                        }
                                    })
                                ]
                            })
                        })
                    ]
                })
            })
        ]
    }));
}
CategoriesCard.propTypes = {
    caption: (external_prop_types_default()).string.isRequired,
    subcategories: propTypes/* ICourseSubcategories.isRequired */._C.isRequired,
    handler: (external_prop_types_default()).func.isRequired
};
/* harmony default export */ const components_CategoriesCard = (/*#__PURE__*/external_react_default().memo(CategoriesCard));

;// CONCATENATED MODULE: ./src/containers/CourseCategories/index.jsx






function CourseCategories({ categories , setVisibleDrawer  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (index_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                className: (index_module_default()).mainTitle,
                children: "Направления курсов"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (index_module_default()).wrapperList,
                children: categories.map(({ id , attributes  })=>/*#__PURE__*/ jsx_runtime_.jsx(components_CategoriesCard, {
                        caption: attributes.caption,
                        subcategories: attributes.subcategories,
                        handler: setVisibleDrawer
                    }, id)
                )
            })
        ]
    }));
}
CourseCategories.propTypes = {
    categories: propTypes/* ICourseCategories */.ll,
    setVisibleDrawer: (external_prop_types_default()).func
};
CourseCategories.defaultProps = {
    categories: [],
    setVisibleDrawer: ()=>{}
};
/* harmony default export */ const containers_CourseCategories = (/*#__PURE__*/external_react_default().memo(CourseCategories));

// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: ./src/containers/MainBanner/index.module.scss
var MainBanner_index_module = __webpack_require__(239);
var MainBanner_index_module_default = /*#__PURE__*/__webpack_require__.n(MainBanner_index_module);
;// CONCATENATED MODULE: ./src/assets/images/bg.svg
/* harmony default export */ const bg = ({"src":"/_next/static/media/bg.81b53ec2.svg","height":94,"width":117});
;// CONCATENATED MODULE: ./src/containers/MainBanner/index.jsx







function MainBanner({ setVisibleDrawer  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (MainBanner_index_module_default()).container,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        children: "Сравниваем курсы онлайн-школ"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: "Сравниваем онлайн-курсы по digital и IT. Мы — каталог-отзовик курсов. Выбирайте курсы по отзывам, цене, продолжительности и другим критериям!"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                        onClick: ()=>setVisibleDrawer(true)
                        ,
                        type: "primary",
                        size: "large",
                        className: (MainBanner_index_module_default()).button,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: (MainBanner_index_module_default()).textButton,
                            style: {
                                display: 'block'
                            },
                            children: [
                                "Все категории курсов",
                                /*#__PURE__*/ jsx_runtime_.jsx(icons_.DownOutlined, {
                                    style: {
                                        marginLeft: '10px'
                                    }
                                })
                            ]
                        })
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("img", {
                className: (MainBanner_index_module_default()).img,
                src: bg.src,
                alt: "mainBanner"
            })
        ]
    }));
}
MainBanner.propTypes = {
    setVisibleDrawer: (external_prop_types_default()).func
};
MainBanner.defaultProps = {
    setVisibleDrawer: ()=>{}
};
/* harmony default export */ const containers_MainBanner = (/*#__PURE__*/external_react_default().memo(MainBanner));

// EXTERNAL MODULE: ./src/hooks/useVisibleDrawer.js
var useVisibleDrawer = __webpack_require__(3379);
// EXTERNAL MODULE: ./src/controllers/getCategories.js + 1 modules
var getCategories = __webpack_require__(4159);
;// CONCATENATED MODULE: ./src/pages/index.jsx








function Home({ categories  }) {
    const { visibleDrawer , setVisibleDrawer  } = (0,useVisibleDrawer/* default */.Z)();
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(Main/* default */.Z, {
        visibleDrawer: visibleDrawer,
        setVisibleDrawer: setVisibleDrawer,
        categories: categories.data,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(containers_MainBanner, {
                    setVisibleDrawer: setVisibleDrawer
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("section", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(containers_CourseCategories, {
                    categories: categories.data,
                    setVisibleDrawer: setVisibleDrawer
                })
            })
        ]
    }));
}
Home.propTypes = {
    categories: propTypes/* ICourseCategories */.ll
};
Home.defaultProps = {
    categories: {
        data: []
    }
};
async function getServerSideProps() {
    const categories = await (0,getCategories/* default */.Z)();
    return {
        props: {
            categories
        }
    };
}
/* harmony default export */ const pages = (/*#__PURE__*/external_react_default().memo(Home));


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

/***/ 2167:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

/***/ }),

/***/ 9003:
/***/ ((module) => {

"use strict";
module.exports = require("classnames");

/***/ }),

/***/ 562:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 4365:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-middleware-regex.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 580:
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ 7104:
/***/ ((module) => {

"use strict";
module.exports = require("qs");

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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,858], () => (__webpack_exec__(5774)));
module.exports = __webpack_exports__;

})();