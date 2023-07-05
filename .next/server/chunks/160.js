"use strict";
exports.id = 160;
exports.ids = [160];
exports.modules = {

/***/ 1160:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ checkBookingData),
/* harmony export */   "T": () => (/* binding */ checkBookingDaysData)
/* harmony export */ });
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_0__]);
react_toastify__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const checkBookingData = (data)=>{
    if (data?.name === undefined || data?.name === "") {
        react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error("Your name is required");
        return false;
    }
    if (data?.date === undefined || data?.date === "") {
        react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error("Your date is required");
        return false;
    }
    if (data?.phone === undefined || data?.phone === "") {
        react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error("Your phone is required");
        return false;
    }
    if (data?.email === undefined || data?.email === "") {
        react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error("Your email is required");
        return false;
    }
    if (data?.address === undefined || data?.address === "") {
        react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error("Your adress is required");
        return false;
    }
    if (data?.numOfGuests === undefined || data?.numOfGuests === "") {
        react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error("Your number of guests is required");
        return false;
    }
    if (data?.hours === undefined || data?.hours === "") {
        react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error("You have to mention hours you want to book it");
        return false;
    }
    return true;
};
const checkBookingDaysData = (data)=>{
    if (data?.name === undefined || data?.name === "") {
        react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error("Your name is required");
        return false;
    }
    if (data?.phone === undefined || data?.phone === "") {
        react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error("Your phone is required");
        return false;
    }
    if (data?.email === undefined || data?.email === "") {
        react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error("Your email is required");
        return false;
    }
    if (data?.address === undefined || data?.address === "") {
        react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error("Your adress is required");
        return false;
    }
    if (data?.numOfGuests === undefined || data?.numOfGuests === "") {
        react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error("Your number of guests is required");
        return false;
    }
    if (data?.days === undefined || data?.days === "") {
        react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error("You have to mention booking days you want to book it");
        return false;
    }
    return true;
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;