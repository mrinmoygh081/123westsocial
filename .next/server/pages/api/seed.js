"use strict";
(() => {
var exports = {};
exports.id = 890;
exports.ids = [890];
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

/***/ 7867:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ seed)
});

;// CONCATENATED MODULE: ./lib/mongo/data.js
const data = {
    listings: [
        {
            id: 1,
            name: "Corporate Meetings or annual gatherings",
            banner: "../images/uploads/banners/corporate.jpeg",
            image: "../images/uploads/corporate.jpeg"
        },
        {
            id: 2,
            name: "Dinner Parties",
            banner: "../images/uploads/banners/dinnerban.jpg",
            image: "../images/uploads/dinner.jpg",
            video: "../images/uploads/videos/dinner.mp4"
        },
        {
            id: 3,
            name: "Epic Weekend Hangout",
            banner: "../images/uploads/banners/banhangout.jpg",
            image: "../images/uploads/hangout.jpg"
        },
        {
            id: 4,
            name: "Game Nights",
            video: "../images/uploads/videos/game.mp4",
            banner: "../images/uploads/banners/bangame.webp",
            image: "../images/uploads/game.webp"
        },
        {
            id: 5,
            name: "Birthday Parties",
            video: "../images/uploads/videos/birthday.mp4",
            banner: "../images/uploads/birthday.jpg",
            image: "../images/uploads/birthday.jpg"
        },
        {
            id: 6,
            name: "New Year dinner parties",
            banner: "../images/uploads/banners/bannewyear.jpg",
            image: "../images/uploads/newyear.jpg"
        },
        {
            id: 7,
            name: "Anniversary celebrations",
            video: "../images/uploads/videos/aniversy.mp4",
            image: "../images/uploads/any.jpg",
            banner: "../images/uploads/any.jpg"
        },
        {
            id: 8,
            name: "Family gatherings",
            videos: "../images/uploads/videos/family.mp4",
            image: "../images/uploads/family.jpeg",
            banner: "../images/uploads/family.jpeg"
        },
        {
            id: 9,
            name: "Reunions",
            videos: "../images/uploads/videos/reunion.mp4",
            image: "../images/uploads/reunions.jpeg",
            banner: "../images/uploads/banners/reunion-banner.jpeg"
        },
        {
            id: 10,
            name: "Wedding Parties",
            banner: "../images/uploads/banners/wedban.jpeg",
            image: "../images/uploads/wed.jpeg"
        }
    ]
};
/* harmony default export */ const mongo_data = (data);

// EXTERNAL MODULE: ./lib/mongo/db.js
var db = __webpack_require__(6761);
// EXTERNAL MODULE: ./lib/utils/resHandler.js
var resHandler = __webpack_require__(3809);
// EXTERNAL MODULE: ./models/SpaceModel.js
var SpaceModel = __webpack_require__(4691);
;// CONCATENATED MODULE: ./pages/api/seed.js




const handler = async (req, res)=>{
    await db/* default.connect */.Z.connect();
    await SpaceModel/* default.deleteMany */.Z.deleteMany();
    await SpaceModel/* default.insertMany */.Z.insertMany(mongo_data.sampleSpaces);
    (0,resHandler/* resHandler */.I)(res, true, 200, "Data updated successfully", null);
};
/* harmony default export */ const seed = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [120], () => (__webpack_exec__(7867)));
module.exports = __webpack_exports__;

})();