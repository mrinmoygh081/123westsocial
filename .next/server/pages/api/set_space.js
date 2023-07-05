"use strict";
(() => {
var exports = {};
exports.id = 421;
exports.ids = [421];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 4691:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const spaceSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({
    name: {
        type: String,
        required: [
            true,
            "Please enter a valid space name"
        ]
    },
    description: {
        type: String,
        required: [
            true,
            "Please enter a valid space description"
        ]
    },
    location: {
        type: String,
        required: [
            true,
            "Please enter a valid space location"
        ]
    }
});
const Space = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models.Space) || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Space", spaceSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Space);


/***/ }),

/***/ 4599:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_mongo_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6761);
/* harmony import */ var _lib_utils_resHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3809);
/* harmony import */ var _models_SpaceModel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4691);
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction



async function handler(req, res) {
    if (req.method !== "POST") {
        (0,_lib_utils_resHandler__WEBPACK_IMPORTED_MODULE_2__/* .resHandler */ .I)(res, false, 405, "Only POST requests are allowed", null);
        return;
    }
    const { name , description , location  } = req.body;
    try {
        await (0,_lib_mongo_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z)();
        _models_SpaceModel__WEBPACK_IMPORTED_MODULE_1__/* ["default"].create */ .Z.create({
            name,
            description,
            location
        }).then((data)=>{
            console.log(data);
            (0,_lib_utils_resHandler__WEBPACK_IMPORTED_MODULE_2__/* .resHandler */ .I)(res, true, 201, "Space created", data);
        });
    } catch (error) {
        (0,_lib_utils_resHandler__WEBPACK_IMPORTED_MODULE_2__/* .resHandler */ .I)(res, false, 500, "Error creating space", error);
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [120], () => (__webpack_exec__(4599)));
module.exports = __webpack_exports__;

})();