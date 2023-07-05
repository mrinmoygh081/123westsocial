"use strict";
exports.id = 46;
exports.ids = [46];
exports.modules = {

/***/ 4046:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const mongoose = __webpack_require__(1185);
const bookHourSchema = new mongoose.Schema({
    date: {
        type: String,
        required: [
            true,
            "Please provide a valid date"
        ]
    },
    name: {
        type: String,
        required: [
            true,
            "Please provide a valid name"
        ]
    },
    phone: {
        type: String,
        required: [
            true,
            "Please provide a valid phone"
        ]
    },
    email: {
        type: String
    },
    address: {
        type: String,
        required: [
            true,
            "Please provide a valid address"
        ]
    },
    numOfGuests: {
        type: String,
        required: [
            true,
            "Please provide a valid number of Guests"
        ]
    },
    hours: {
        type: String,
        required: [
            true,
            "Please provide a valid hours"
        ]
    },
    price: {
        type: String,
        required: [
            true,
            "Please provide a valid price"
        ]
    }
});
const bookHourModel = mongoose.models.bookHours || mongoose.model("bookHours", bookHourSchema);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (bookHourModel);


/***/ })

};
;