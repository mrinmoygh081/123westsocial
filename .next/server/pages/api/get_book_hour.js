"use strict";
(() => {
var exports = {};
exports.id = 185;
exports.ids = [185];
exports.modules = {

/***/ 1185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 4261:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_mongo_db__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6761);
/* harmony import */ var _lib_utils_resHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3809);
/* harmony import */ var _models_BookHourModels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4046);



const handler = async (req, res)=>{
    if (req.method !== "GET") {
        (0,_lib_utils_resHandler__WEBPACK_IMPORTED_MODULE_2__/* .resHandler */ .I)(res, false, 405, "Only GET requests are allowed", null);
        return;
    }
    try {
        await _lib_mongo_db__WEBPACK_IMPORTED_MODULE_0__/* ["default"].connect */ .Z.connect();
        let data = await _models_BookHourModels__WEBPACK_IMPORTED_MODULE_1__/* ["default"].find */ .Z.find({});
        (0,_lib_utils_resHandler__WEBPACK_IMPORTED_MODULE_2__/* .resHandler */ .I)(res, true, 200, "Fetch Booking Data", data);
    } catch (error) {
        (0,_lib_utils_resHandler__WEBPACK_IMPORTED_MODULE_2__/* .resHandler */ .I)(res, false, 400, "Booking data not updated", error);
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [120,46], () => (__webpack_exec__(4261)));
module.exports = __webpack_exports__;

})();