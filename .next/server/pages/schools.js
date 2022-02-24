(() => {
var exports = {};
exports.id = 16;
exports.ids = [16];
exports.modules = {

/***/ 4310:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "Footer_wrapper__rRtwQ",
	"text": "Footer_text__4UmoO"
};


/***/ }),

/***/ 6102:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "Header_wrapper__vbwZf",
	"item": "Header_item__3lzd5",
	"link": "Header_link__1Pz7S",
	"button": "Header_button__tR4_R"
};


/***/ }),

/***/ 597:
/***/ ((module) => {

// Exports
module.exports = {
	"wrapper": "SchoolCard_wrapper__FZJk_",
	"line": "SchoolCard_line__enAhQ"
};


/***/ }),

/***/ 7289:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "SchoolList_title__7hPcY"
};


/***/ }),

/***/ 8644:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ schools),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: ./src/layouts/Main/index.jsx + 8 modules
var Main = __webpack_require__(3812);
// EXTERNAL MODULE: ./src/propTypes/index.js + 6 modules
var propTypes = __webpack_require__(160);
// EXTERNAL MODULE: ./src/hooks/useVisibleDrawer.js
var useVisibleDrawer = __webpack_require__(3379);
// EXTERNAL MODULE: ./src/controllers/getCategories.js + 1 modules
var getCategories = __webpack_require__(4159);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: ./src/containers/SchoolList/index.module.scss
var index_module = __webpack_require__(7289);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: ./src/components/SchoolCard/index.module.scss
var SchoolCard_index_module = __webpack_require__(597);
var SchoolCard_index_module_default = /*#__PURE__*/__webpack_require__.n(SchoolCard_index_module);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: ./src/components/Logo/index.jsx
var Logo = __webpack_require__(1211);
// EXTERNAL MODULE: ./src/components/SchoolCard/components/Header/index.module.scss
var Header_index_module = __webpack_require__(6102);
var Header_index_module_default = /*#__PURE__*/__webpack_require__.n(Header_index_module);
// EXTERNAL MODULE: ./src/components/CustomRate/index.jsx
var CustomRate = __webpack_require__(2161);
// EXTERNAL MODULE: ./src/helpers/declOfNumInstances.js
var declOfNumInstances = __webpack_require__(9272);
// EXTERNAL MODULE: ./src/library/navigation.js
var navigation = __webpack_require__(5705);
;// CONCATENATED MODULE: ./src/components/SchoolCard/components/Header/index.jsx










function Header({ logo , mainLink , value , countReviews  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Header_index_module_default()).wrapper,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Header_index_module_default()).item,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(Logo/* default */.Z, {
                        logo: logo,
                        isNewWind: true
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: (Header_index_module_default()).link,
                        href: `https://${mainLink}`,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: mainLink
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: (Header_index_module_default()).item,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(CustomRate/* default */.Z, {
                        rating: countReviews
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                        className: (Header_index_module_default()).button,
                        type: "primary",
                        href: navigation/* default.schoolReview.as */.Z.schoolReview.as(value),
                        target: "_blank",
                        rel: "noopener noreferrer",
                        children: (0,declOfNumInstances/* declOfNumReviews */.p)(countReviews, true)
                    })
                ]
            })
        ]
    }));
}
Header.propTypes = {
    logo: propTypes/* IDataImage */.I$,
    value: (external_prop_types_default()).string.isRequired,
    mainLink: (external_prop_types_default()).string.isRequired,
    countReviews: (external_prop_types_default()).number.isRequired
};
Header.defaultProps = {
    logo: {}
};
/* harmony default export */ const components_Header = (/*#__PURE__*/external_react_default().memo(Header));

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/components/SchoolCard/components/Footer/index.module.scss
var Footer_index_module = __webpack_require__(4310);
var Footer_index_module_default = /*#__PURE__*/__webpack_require__.n(Footer_index_module);
;// CONCATENATED MODULE: ./src/components/SchoolCard/components/Footer/index.jsx





function Footer({ description  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: external_classnames_default()((Footer_index_module_default()).wrapper, (Footer_index_module_default()).text),
        children: description
    }));
}
Footer.propTypes = {
    description: (external_prop_types_default()).string
};
Footer.defaultProps = {
    description: ''
};
/* harmony default export */ const components_Footer = (/*#__PURE__*/external_react_default().memo(Footer));

;// CONCATENATED MODULE: ./src/components/SchoolCard/index.jsx






function SchoolCard({ logo , value , mainLink , description , countReviews  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (SchoolCard_index_module_default()).wrapper,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {
                logo: logo,
                value: value,
                mainLink: mainLink,
                countReviews: countReviews
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                className: (SchoolCard_index_module_default()).line
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {
                description: description
            })
        ]
    }));
}
SchoolCard.propTypes = {
    ...propTypes/* ISchoolCard */.D6
};
SchoolCard.defaultProps = {
    description: '',
    logo: {}
};
/* harmony default export */ const components_SchoolCard = (/*#__PURE__*/external_react_default().memo(SchoolCard));

;// CONCATENATED MODULE: ./src/containers/SchoolList/index.jsx






function SchoolList({ data  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                className: (index_module_default()).title,
                children: "Отзывы об онлайн-школах"
            }),
            data.map((elem)=>/*#__PURE__*/ jsx_runtime_.jsx(components_SchoolCard, {
                    ...elem
                })
            )
        ]
    }));
}
SchoolList.propTypes = {
    data: external_prop_types_default().arrayOf(propTypes/* ISchoolCard */.D6)
};
SchoolList.defaultProps = {
    data: []
};
/* harmony default export */ const containers_SchoolList = (/*#__PURE__*/external_react_default().memo(SchoolList));

;// CONCATENATED MODULE: ./src/pages/schools/schools.json
const schools_namespaceObject = JSON.parse('[{"logo":{"src":"/_next/static/media/logo-dark.d3afc38c.png"},"value":"cillum-anim-consectetur","mainLink":"cillum-anim-consectetur.com","description":"Veniam consequat anim est laborum id ad enim occaecat ipsum voluptate do","countReviews":271},{"logo":{"src":"/_next/static/media/logo-dark.d3afc38c.png"},"value":"cillum","mainLink":"cillum.ru","description":"Aliquip culpa pariatur in laboris ad laborum anim quis velit ut deserunt minim aliqua","countReviews":837},{"logo":{"src":"/_next/static/media/logo-dark.d3afc38c.png"},"value":"duis-nisi","mainLink":"duis-nisi.com","description":"Qui mollit cillum mollit cupidatat proident anim anim","countReviews":214},{"logo":{"src":"/_next/static/media/logo-dark.d3afc38c.png"},"value":"elit","mainLink":"elit.com","description":"Voluptate esse proident ullamco nostrud anim occaecat adipisicing mollit deserunt et irure esse laborum dolore","countReviews":332},{"logo":{"src":"/_next/static/media/logo-dark.d3afc38c.png"},"value":"deserunt","mainLink":"deserunt.com","description":"Eu esse deserunt non nostrud sunt culpa laborum enim voluptate ullamco duis non laboris fugiat","countReviews":231},{"logo":{"src":"/_next/static/media/logo-dark.d3afc38c.png"},"value":"velit-exercitation-aliqua","mainLink":"velit-exercitation-aliqua.com","description":"Cillum sint laborum labore reprehenderit sunt ullamco dolore labore ut qui nulla qui","countReviews":445},{"logo":{"src":"/_next/static/media/logo-dark.d3afc38c.png"},"value":"eu","mainLink":"eu.io","description":"Quis eiusmod dolor occaecat enim velit elit","countReviews":837},{"logo":{"src":"/_next/static/media/logo-dark.d3afc38c.png"},"value":"consequat-ullamco","mainLink":"consequat-ullamco.ru","description":"Excepteur qui velit laboris ad consectetur cillum non ut officia","countReviews":479},{"logo":{"src":"/_next/static/media/logo-dark.d3afc38c.png"},"value":"elit-do","mainLink":"elit-do.ru","description":"Elit proident mollit in laborum id magna aliqua veniam officia aute tempor et aute","countReviews":542},{"logo":{"src":"/_next/static/media/logo-dark.d3afc38c.png"},"value":"mollit-sint-irure","mainLink":"mollit-sint-irure.io","description":"Id ea proident nostrud fugiat fugiat laboris enim qui ex dolor non aliqua","countReviews":817},{"logo":{"src":"/_next/static/media/logo-dark.d3afc38c.png"},"value":"voluptate-cupidatat-ex","mainLink":"voluptate-cupidatat-ex.ru","description":"Magna cillum veniam excepteur aliqua laborum ad","countReviews":637},{"logo":{"src":"/_next/static/media/logo-dark.d3afc38c.png"},"value":"ex-duis-nulla","mainLink":"ex-duis-nulla.io","description":"Eu aliqua ea ea nisi pariatur Lorem magna incididunt non aliquip nostrud nulla","countReviews":398},{"logo":{"src":"/_next/static/media/logo-dark.d3afc38c.png"},"value":"culpa-magna-est","mainLink":"culpa-magna-est.com","description":"Dolore eu fugiat dolore eu consectetur cupidatat ex veniam","countReviews":915},{"logo":{"src":"/_next/static/media/logo-dark.d3afc38c.png"},"value":"sint-voluptate","mainLink":"sint-voluptate.com","description":"Irure nisi eiusmod laboris culpa ex enim consectetur aliqua officia adipisicing laboris fugiat nisi sint","countReviews":821},{"logo":{"src":"/_next/static/media/logo-dark.d3afc38c.png"},"value":"ut-veniam-dolor","mainLink":"ut-veniam-dolor.ru","description":"Do culpa Lorem culpa excepteur quis velit","countReviews":237},{"logo":{"src":"/_next/static/media/logo-dark.d3afc38c.png"},"value":"minim-commodo-consectetur","mainLink":"minim-commodo-consectetur.io","description":"Laborum labore ea aliqua labore cillum aliqua nisi elit sit ea ex in ad sit","countReviews":565},{"logo":{"src":"/_next/static/media/logo-dark.d3afc38c.png"},"value":"ad-aliqua-est","mainLink":"ad-aliqua-est.ru","description":"Elit aute qui exercitation et adipisicing laboris adipisicing in culpa","countReviews":115},{"logo":{"src":"/_next/static/media/logo-dark.d3afc38c.png"},"value":"magna-incididunt","mainLink":"magna-incididunt.io","description":"Esse laboris elit enim labore eiusmod tempor culpa cillum aliqua enim ut ea","countReviews":854},{"logo":{"src":"/_next/static/media/logo-dark.d3afc38c.png"},"value":"fugiat-in-esse","mainLink":"fugiat-in-esse.io","description":"Ea velit do laborum duis aliquip eiusmod dolor laboris consequat","countReviews":205},{"logo":{"src":"/_next/static/media/logo-dark.d3afc38c.png"},"value":"Lorem","mainLink":"Lorem.com","description":"Enim reprehenderit nulla adipisicing in eiusmod veniam ipsum excepteur fugiat laborum ex nostrud Lorem pariatur","countReviews":860},{"logo":{"src":"/_next/static/media/logo-dark.d3afc38c.png"},"value":"qui-incididunt","mainLink":"qui-incididunt.com","description":"Magna sunt occaecat magna dolor fugiat aliqua nulla cupidatat ad proident magna labore ad","countReviews":27},{"logo":{"src":"/_next/static/media/logo-dark.d3afc38c.png"},"value":"amet-quis","mainLink":"amet-quis.ru","description":"Mollit adipisicing commodo aliqua amet ullamco ea labore proident duis ea cillum dolore cupidatat proident","countReviews":829},{"logo":{"src":"/_next/static/media/logo-dark.d3afc38c.png"},"value":"quis-id-aliqua","mainLink":"quis-id-aliqua.com","description":"Duis aute sint laboris nostrud veniam veniam consectetur","countReviews":48},{"logo":{"src":"/_next/static/media/logo-dark.d3afc38c.png"},"value":"minim-dolor","mainLink":"minim-dolor.com","description":"Ea voluptate amet culpa eiusmod elit sit cillum proident labore dolore labore consectetur","countReviews":729},{"logo":{"src":"/_next/static/media/logo-dark.d3afc38c.png"},"value":"labore-laborum-elit","mainLink":"labore-laborum-elit.io","description":"Sint mollit elit elit voluptate aliquip fugiat aliqua","countReviews":406},{"logo":{"src":"/_next/static/media/logo-dark.d3afc38c.png"},"value":"nulla-velit","mainLink":"nulla-velit.ru","description":"Duis reprehenderit cillum culpa incididunt commodo duis aute consectetur pariatur amet duis","countReviews":896},{"logo":{"src":"/_next/static/media/logo-dark.d3afc38c.png"},"value":"minim","mainLink":"minim.ru","description":"Occaecat ex minim consectetur eiusmod duis laborum ipsum","countReviews":172},{"logo":{"src":"/_next/static/media/logo-dark.d3afc38c.png"},"value":"ipsum-dolore","mainLink":"ipsum-dolore.ru","description":"Ex veniam eiusmod aliqua labore exercitation culpa minim sint consectetur culpa dolore ad","countReviews":176},{"logo":{"src":"/_next/static/media/logo-dark.d3afc38c.png"},"value":"nisi-excepteur-non","mainLink":"nisi-excepteur-non.ru","description":"Deserunt ad adipisicing officia amet do id eu id esse ea eu","countReviews":20},{"logo":{"src":"/_next/static/media/logo-dark.d3afc38c.png"},"value":"non","mainLink":"non.io","description":"Dolor tempor sit consectetur exercitation ipsum ex reprehenderit aliquip elit dolor proident","countReviews":275}]');
;// CONCATENATED MODULE: ./src/pages/schools/index.jsx








/* [
  '{{repeat(30, 30)}}',
  {

    logo: {
      src: '/_next/static/media/logo-dark.d3afc38c.png'
    },
    value: function (tags) {
        var str = tags.lorem(tags.integer(1, 3), 'words');
        return str.split(' ').join('-');
      },
    mainLink: function (tags) {
          var domenZones = ['ru', 'com', 'io'];
          return this.value + '.' + domenZones[tags.integer(0, domenZones.length - 1)];
        },
    description: function (tags) {
        var str = tags.lorem(tags.integer(7, 15), 'words');
        return str[0].toUpperCase() + str.slice(1);
      },
    countReviews: '{{integer(10, 999)}}'
   }
]
* */ function Schools({ categories  }) {
    const { visibleDrawer , setVisibleDrawer  } = (0,useVisibleDrawer/* default */.Z)();
    return(/*#__PURE__*/ jsx_runtime_.jsx(Main/* default */.Z, {
        visibleDrawer: visibleDrawer,
        setVisibleDrawer: setVisibleDrawer,
        categories: categories.data,
        children: /*#__PURE__*/ jsx_runtime_.jsx("main", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(containers_SchoolList, {
                data: schools_namespaceObject
            })
        })
    }));
}
Schools.propTypes = {
    categories: propTypes/* ICourseCategories */.ll
};
Schools.defaultProps = {
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
/* harmony default export */ const schools = (/*#__PURE__*/external_react_default().memo(Schools));


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
var __webpack_exports__ = __webpack_require__.X(0, [730,664,858,591], () => (__webpack_exec__(8644)));
module.exports = __webpack_exports__;

})();