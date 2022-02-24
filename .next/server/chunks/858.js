exports.id = 858;
exports.ids = [858];
exports.modules = {

/***/ 6402:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "VerticalCategoriesNav_container__C2W04",
	"tabTitle": "VerticalCategoriesNav_tabTitle__yQ3nO",
	"tab": "VerticalCategoriesNav_tab__eZsYu",
	"linkText": "VerticalCategoriesNav_linkText__0pETK"
};


/***/ }),

/***/ 4319:
/***/ ((module) => {

// Exports
module.exports = {
	"title": "DrawerWithCourseCategories_title__twRWn",
	"icon": "DrawerWithCourseCategories_icon__zKkV8"
};


/***/ }),

/***/ 7700:
/***/ ((module) => {

// Exports
module.exports = {
	"logo": "Logo_logo__DZ1ej"
};


/***/ }),

/***/ 1595:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Footer_container__fE6JT",
	"wrapper": "Footer_wrapper__roRsR",
	"logo": "Footer_logo__9TUcO",
	"linksWrapper": "Footer_linksWrapper__nqrYK",
	"link": "Footer_link__K6Y0h",
	"docWrapper": "Footer_docWrapper__yoYvR",
	"documentation": "Footer_documentation__DaEMM"
};


/***/ }),

/***/ 4444:
/***/ ((module) => {

// Exports
module.exports = {
	"linksContainer": "DynamicNav_linksContainer__K6Z2D",
	"linkWrapper": "DynamicNav_linkWrapper__3K_ll",
	"link": "DynamicNav_link__5e1mt"
};


/***/ }),

/***/ 5324:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Header_container__yv5R1",
	"nav": "Header_nav__6c0H4",
	"navMobile": "Header_navMobile__Nzq7O",
	"button": "Header_button__YdkkE",
	"textButton": "Header_textButton__tO8PR"
};


/***/ }),

/***/ 6116:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "Main_container__RWZas",
	"wrapper": "Main_wrapper__4_a_a"
};


/***/ }),

/***/ 1211:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(580);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7700);
/* harmony import */ var _index_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_scss__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _library_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5705);






function Logo({ logo , classNames , isNewWind  }) {
    const linkProps = {};
    if (isNewWind) {
        linkProps.target = '_blank';
        linkProps.rel = 'noopener noreferrer';
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
        href: _library_navigation__WEBPACK_IMPORTED_MODULE_4__/* ["default"].home.link */ .Z.home.link,
        passHref: true,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            className: classNames,
            ...linkProps,
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                className: (_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().logo),
                src: logo.src,
                alt: "logo"
            })
        })
    }));
}
Logo.propTypes = {
    logo: prop_types__WEBPACK_IMPORTED_MODULE_3___default().shape({
        blurDataURL: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
        height: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
        width: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().number),
        src: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string.isRequired)
    }),
    classNames: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().string),
    isNewWind: (prop_types__WEBPACK_IMPORTED_MODULE_3___default().bool)
};
Logo.defaultProps = {
    classNames: '',
    isNewWind: false,
    logo: {}
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().memo(Logo));


/***/ }),

/***/ 4159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ getCategories)
});

// EXTERNAL MODULE: external "qs"
var external_qs_ = __webpack_require__(7104);
var external_qs_default = /*#__PURE__*/__webpack_require__.n(external_qs_);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./src/utils/axiosInstances.js

const api = external_axios_default().create({
    baseURL: 'http://localhost:1337/api'
});
const mock = ()=>{};

;// CONCATENATED MODULE: ./src/controllers/getCategories.js


async function getCategories() {
    const query = external_qs_default().stringify({
        populate: [
            'subcategories'
        ]
    }, {
        encodeValuesOnly: true
    });
    const { data  } = await api.get(`/categories?${query}`);
    return data;
};


/***/ }),

/***/ 3379:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ useVisibleDrawer)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function useVisibleDrawer() {
    const { 0: visibleDrawer , 1: setVisibleDrawer  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    return {
        visibleDrawer,
        setVisibleDrawer
    };
};


/***/ }),

/***/ 3812:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layouts_Main)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(9003);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);
// EXTERNAL MODULE: ./src/layouts/Main/components/Footer/index.module.scss
var index_module = __webpack_require__(1595);
var index_module_default = /*#__PURE__*/__webpack_require__.n(index_module);
// EXTERNAL MODULE: ./src/library/navigation.js
var navigation = __webpack_require__(5705);
// EXTERNAL MODULE: ./src/components/Logo/index.jsx
var Logo = __webpack_require__(1211);
;// CONCATENATED MODULE: ./src/library/companyData.js
const DOCUMENTATION = {
    privacyPolicy: {
        link: '',
        value: 'privacyPolicy',
        caption: 'Политика конфиденциальности'
    },
    termsOfUse: {
        link: '',
        value: 'termsOfUse',
        caption: 'Пользовательское соглашение'
    },
    cookiePolicy: {
        link: '',
        value: 'cookiePolicy',
        caption: 'Политика cook'
    }
};
const test = {};

;// CONCATENATED MODULE: ./src/assets/images/logo-light.png
/* harmony default export */ const logo_light = ({"src":"/_next/static/media/logo-light.103ba324.png","height":143,"width":534,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAQAAADPnVVmAAAALElEQVR42mP4avAl4rPzZ+dPJp+tPrt+Emf4qvQl6EvAZ6fP3p9tP/t8lgUASeETBc5zcBkAAAAASUVORK5CYII="});
;// CONCATENATED MODULE: ./src/layouts/Main/components/Footer/index.jsx










function Footer({ wrapperStyles  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("footer", {
        style: {
            backgroundColor: '#333',
            ...wrapperStyles
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: (index_module_default()).container,
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (index_module_default()).wrapper,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(Logo/* default */.Z, {
                            logo: logo_light,
                            classNames: (index_module_default()).logo
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                                className: external_classnames_default()((index_module_default()).linksWrapper, (index_module_default()).wrapper),
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: navigation/* default.about.link */.Z.about.link,
                                            passHref: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: (index_module_default()).link,
                                                children: navigation/* default.about.caption */.Z.about.caption
                                            })
                                        })
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                            href: navigation/* default.contacts.link */.Z.contacts.link,
                                            passHref: true,
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: (index_module_default()).link,
                                                children: navigation/* default.contacts.caption */.Z.contacts.caption
                                            })
                                        })
                                    })
                                ]
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (index_module_default()).docWrapper,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: DOCUMENTATION.privacyPolicy.link,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: (index_module_default()).documentation,
                            children: DOCUMENTATION.privacyPolicy.caption
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: DOCUMENTATION.termsOfUse.link,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: (index_module_default()).documentation,
                            children: DOCUMENTATION.termsOfUse.caption
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            href: DOCUMENTATION.cookiePolicy.link,
                            target: "_blank",
                            rel: "noopener noreferrer",
                            className: (index_module_default()).documentation,
                            children: DOCUMENTATION.cookiePolicy.caption
                        })
                    ]
                })
            ]
        })
    }));
}
Footer.propTypes = {
    wrapperStyles: external_prop_types_default().objectOf({})
};
Footer.defaultProps = {
    wrapperStyles: {}
};
/* harmony default export */ const components_Footer = (/*#__PURE__*/external_react_default().memo(Footer));

// EXTERNAL MODULE: ./src/layouts/Main/index.module.scss
var Main_index_module = __webpack_require__(6116);
var Main_index_module_default = /*#__PURE__*/__webpack_require__.n(Main_index_module);
// EXTERNAL MODULE: external "antd"
var external_antd_ = __webpack_require__(5725);
// EXTERNAL MODULE: external "@ant-design/icons"
var icons_ = __webpack_require__(7066);
// EXTERNAL MODULE: ./src/layouts/Main/components/Header/index.module.scss
var Header_index_module = __webpack_require__(5324);
var Header_index_module_default = /*#__PURE__*/__webpack_require__.n(Header_index_module);
// EXTERNAL MODULE: ./src/layouts/Main/components/Header/DynamicNav/index.module.scss
var DynamicNav_index_module = __webpack_require__(4444);
var DynamicNav_index_module_default = /*#__PURE__*/__webpack_require__.n(DynamicNav_index_module);
;// CONCATENATED MODULE: ./src/layouts/Main/components/Header/DynamicNav/index.jsx






function DynamicNav({ links  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: (DynamicNav_index_module_default()).linksContainer,
        children: links.map((navElement)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                    href: navElement.link,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                        className: external_classnames_default()((DynamicNav_index_module_default()).linkWrapper, (DynamicNav_index_module_default()).link),
                        children: navElement.caption
                    })
                })
            })
        )
    }));
}
DynamicNav.propTypes = {
    links: external_prop_types_default().arrayOf({
        link: (external_prop_types_default()).string.isRequired,
        caption: (external_prop_types_default()).string.isRequired
    })
};
DynamicNav.defaultProps = {
    links: []
};
/* harmony default export */ const Header_DynamicNav = (/*#__PURE__*/external_react_default().memo(DynamicNav));

;// CONCATENATED MODULE: ./src/assets/images/logo-dark.png
/* harmony default export */ const logo_dark = ({"src":"/_next/static/media/logo-dark.d3afc38c.png","height":151,"width":509,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAACCAQAAADPnVVmAAAAKklEQVR42mOQsZTxl7WTs1MwlDORdZRTZpDVlQmQ9pOxl/WUsZL1lNUGAF5vBZ4QsEpZAAAAAElFTkSuQmCC"});
;// CONCATENATED MODULE: ./src/layouts/Main/components/Header/index.jsx










function Header({ setVisibleDrawer  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
        className: (Header_index_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Logo/* default */.Z, {
                logo: logo_dark
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("nav", {
                className: (Header_index_module_default()).navMobile,
                children: "BURGER"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                className: (Header_index_module_default()).nav,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Button, {
                        onClick: ()=>setVisibleDrawer(true)
                        ,
                        type: "primary",
                        size: "large",
                        className: (Header_index_module_default()).button,
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: (Header_index_module_default()).textButton,
                            children: [
                                "Все категории курсов",
                                /*#__PURE__*/ jsx_runtime_.jsx(icons_.DownOutlined, {
                                    style: {
                                        marginLeft: '10px'
                                    }
                                })
                            ]
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(Header_DynamicNav, {
                        links: [
                            navigation/* default.about */.Z.about,
                            navigation/* default.schoolsList */.Z.schoolsList,
                            navigation/* default.contacts */.Z.contacts, 
                        ]
                    })
                ]
            })
        ]
    }));
}
Header.propTypes = {
    setVisibleDrawer: (external_prop_types_default()).func
};
Header.defaultProps = {
    setVisibleDrawer: ()=>{}
};
/* harmony default export */ const components_Header = (/*#__PURE__*/external_react_default().memo(Header));

// EXTERNAL MODULE: ./src/propTypes/index.js + 6 modules
var propTypes = __webpack_require__(160);
// EXTERNAL MODULE: ./src/components/DrawerWithCourseCategories/VerticalCategoriesNav/index.module.scss
var VerticalCategoriesNav_index_module = __webpack_require__(6402);
var VerticalCategoriesNav_index_module_default = /*#__PURE__*/__webpack_require__.n(VerticalCategoriesNav_index_module);
;// CONCATENATED MODULE: ./src/components/DrawerWithCourseCategories/VerticalCategoriesNav/index.jsx







const { TabPane  } = external_antd_.Tabs;
function VerticalCategoriesNav({ categories  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Tabs, {
        className: (VerticalCategoriesNav_index_module_default()).container,
        tabPosition: "left",
        size: "large",
        children: categories.map(({ attributes  })=>/*#__PURE__*/ jsx_runtime_.jsx(TabPane, {
                tab: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (VerticalCategoriesNav_index_module_default()).tabTitle,
                    children: attributes.caption
                }),
                children: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.List, {
                    dataSource: attributes.subcategories.data,
                    renderItem: ({ attributes: subAttributes  })=>/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.List.Item, {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                                href: navigation/* default.coursesCategory.link */.Z.coursesCategory.link,
                                as: navigation/* default.coursesCategory.as */.Z.coursesCategory.as(subAttributes.value),
                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: (VerticalCategoriesNav_index_module_default()).linkText,
                                    children: subAttributes.caption
                                })
                            })
                        })
                })
            }, attributes.value)
        )
    }));
}
VerticalCategoriesNav.propTypes = {
    categories: propTypes/* ICourseCategoriesData */.W6
};
VerticalCategoriesNav.defaultProps = {
    categories: []
};
/* harmony default export */ const DrawerWithCourseCategories_VerticalCategoriesNav = (/*#__PURE__*/external_react_default().memo(VerticalCategoriesNav));

// EXTERNAL MODULE: ./src/components/DrawerWithCourseCategories/index.module.scss
var DrawerWithCourseCategories_index_module = __webpack_require__(4319);
var DrawerWithCourseCategories_index_module_default = /*#__PURE__*/__webpack_require__.n(DrawerWithCourseCategories_index_module);
;// CONCATENATED MODULE: ./src/components/DrawerWithCourseCategories/index.jsx








function DrawerWithCourseCategories({ setVisible , visible , categories  }) {
    const closeDrawer = (0,external_react_.useCallback)(()=>setVisible(false)
    , [
        setVisible
    ]);
    return(/*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Drawer, {
        headerStyle: {
            backgroundColor: '#ffefd7'
        },
        bodyStyle: {
            backgroundColor: '#ffefd7'
        },
        title: /*#__PURE__*/ jsx_runtime_.jsx("div", {
            className: (DrawerWithCourseCategories_index_module_default()).title,
            children: "Все направдения"
        }),
        closable: false,
        onClose: closeDrawer,
        visible: visible,
        placement: "top",
        height: "min-content",
        extra: /*#__PURE__*/ jsx_runtime_.jsx(external_antd_.Space, {
            children: /*#__PURE__*/ jsx_runtime_.jsx(icons_.CloseOutlined, {
                className: (DrawerWithCourseCategories_index_module_default()).icon,
                onClick: closeDrawer
            })
        }),
        children: /*#__PURE__*/ jsx_runtime_.jsx(DrawerWithCourseCategories_VerticalCategoriesNav, {
            categories: categories
        })
    }));
}
DrawerWithCourseCategories.propTypes = {
    visible: (external_prop_types_default()).bool,
    setVisible: (external_prop_types_default()).func,
    categories: propTypes/* ICourseCategoriesData.isRequired */.W6.isRequired
};
DrawerWithCourseCategories.defaultProps = {
    setVisible: ()=>{},
    visible: false
};
/* harmony default export */ const components_DrawerWithCourseCategories = (/*#__PURE__*/external_react_default().memo(DrawerWithCourseCategories));

;// CONCATENATED MODULE: ./src/layouts/Main/index.jsx








function Main({ children , visibleDrawer , setVisibleDrawer , categories  }) {
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (Main_index_module_default()).container,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_DrawerWithCourseCategories, {
                visible: visibleDrawer,
                setVisible: setVisibleDrawer,
                categories: categories
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Header, {
                setVisibleDrawer: setVisibleDrawer
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Main_index_module_default()).wrapper,
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {
                wrapperStyles: {
                    marginTop: 60
                }
            })
        ]
    }));
}
Main.propTypes = {
    children: (external_prop_types_default()).element,
    visibleDrawer: (external_prop_types_default()).bool,
    setVisibleDrawer: (external_prop_types_default()).func,
    categories: propTypes/* ICourseCategoriesData */.W6
};
Main.defaultProps = {
    children: ()=>/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: "Компонент служит как обертка с хедерои и футуреом страницы"
        })
    ,
    visibleDrawer: false,
    setVisibleDrawer: ()=>{},
    categories: []
};
/* harmony default export */ const layouts_Main = (/*#__PURE__*/external_react_default().memo(Main));


/***/ }),

/***/ 5705:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    home: {
        link: '/',
        caption: 'На главную'
    },
    coursesCategory: {
        link: '/courses-category/[value]',
        as: (id)=>`/courses-category/${id}`
    },
    about: {
        link: '/about',
        caption: 'О нас'
    },
    contacts: {
        link: '/contacts',
        caption: 'Контакты'
    },
    schoolsList: {
        link: '/schools',
        caption: 'Отзывы о школах'
    },
    schoolsReviews: {
        link: '/schools/reviews',
        caption: 'Страница не определена'
    },
    schoolReview: {
        link: '/schools/[value]/reviews',
        as: (value)=>`/schools/${value}/reviews`
    }
});


/***/ }),

/***/ 160:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "rQ": () => (/* reexport */ ICourseCard),
  "ll": () => (/* reexport */ ICourseCategories),
  "W6": () => (/* reexport */ ICourseCategoriesData),
  "_C": () => (/* reexport */ ICourseSubcategories),
  "I$": () => (/* reexport */ ICourseSubcategories),
  "D6": () => (/* reexport */ ISchoolCard),
  "$7": () => (/* reexport */ ISchoolInfo)
});

// NAMESPACE OBJECT: ./src/propTypes/IDataImage.js
var IDataImage_namespaceObject = {};
__webpack_require__.r(IDataImage_namespaceObject);

// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
;// CONCATENATED MODULE: ./src/propTypes/ISchoolInfo.js

/* harmony default export */ const ISchoolInfo = (external_prop_types_default().shape({
    link: (external_prop_types_default()).string.isRequired,
    name: (external_prop_types_default()).string.isRequired,
    value: (external_prop_types_default()).string.isRequired,
    rating: (external_prop_types_default()).number.isRequired,
    mainLink: (external_prop_types_default()).string.isRequired,
    countReviews: (external_prop_types_default()).number.isRequired
}));

;// CONCATENATED MODULE: ./src/propTypes/ICourseCard.js


/* harmony default export */ const ICourseCard = (external_prop_types_default().shape({
    schoolInfo: ISchoolInfo.isRequired,
    title: (external_prop_types_default()).string.isRequired,
    start: external_prop_types_default().instanceOf(Date).isRequired,
    duration: (external_prop_types_default()).string.isRequired,
    format: (external_prop_types_default()).string.isRequired,
    peculiarities: (external_prop_types_default()).string.isRequired
}));

;// CONCATENATED MODULE: ./src/propTypes/IDataImage.js

/* harmony default export */ const IDataImage = (external_prop_types_default().shape({
    blurDataURL: (external_prop_types_default()).string,
    height: (external_prop_types_default()).number,
    width: (external_prop_types_default()).number,
    src: (external_prop_types_default()).string.isRequired
}));

;// CONCATENATED MODULE: ./src/propTypes/ISchoolCard.js


/* harmony default export */ const ISchoolCard = (external_prop_types_default().shape({
    description: (external_prop_types_default()).string,
    logo: IDataImage_namespaceObject.IDataImage,
    value: (external_prop_types_default()).string.isRequired,
    mainLink: (external_prop_types_default()).string.isRequired,
    countReviews: (external_prop_types_default()).number.isRequired
}));

;// CONCATENATED MODULE: ./src/propTypes/ICourseSubcategories.js

/* harmony default export */ const ICourseSubcategories = (external_prop_types_default().shape({
    data: external_prop_types_default().arrayOf({
        id: (external_prop_types_default()).number.isRequired,
        attributes: external_prop_types_default().shape({
            caption: (external_prop_types_default()).string.isRequired,
            value: (external_prop_types_default()).string.isRequired,
            createdAt: external_prop_types_default().instanceOf(Date).isRequired,
            updatedAt: external_prop_types_default().instanceOf(Date).isRequired,
            publishedAt: external_prop_types_default().instanceOf(Date).isRequired,
            locale: (external_prop_types_default()).string.isRequired
        }).isRequired
    }).isRequired
}));

;// CONCATENATED MODULE: ./src/propTypes/ICourseCategories.js


const ICourseCategoriesData = external_prop_types_default().arrayOf({
    id: (external_prop_types_default()).number.isRequired,
    attributes: external_prop_types_default().objectOf({
        caption: (external_prop_types_default()).string.isRequired,
        value: (external_prop_types_default()).string.isRequired,
        createdAt: external_prop_types_default().instanceOf(Date).isRequired,
        updatedAt: external_prop_types_default().instanceOf(Date).isRequired,
        publishedAt: external_prop_types_default().instanceOf(Date).isRequired,
        locale: (external_prop_types_default()).string.isRequired,
        subcategories: ICourseSubcategories.isRequired
    }).isRequired
});
const ICourseCategories = external_prop_types_default().shape({
    data: external_prop_types_default().arrayOf(ICourseCategoriesData.isRequired)
});


;// CONCATENATED MODULE: ./src/propTypes/index.js








/***/ })

};
;