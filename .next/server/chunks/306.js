"use strict";
exports.id = 306;
exports.ids = [306];
exports.modules = {

/***/ 9306:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Kf": () => (/* binding */ getAPI)
/* harmony export */ });
/* unused harmony exports postAPI, putAPI */
/* harmony import */ var react_toastify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3590);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_toastify__WEBPACK_IMPORTED_MODULE_0__]);
react_toastify__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
const axios = __webpack_require__(2167);

const postAPI = (path, body, token)=>{
    // console.log(`${process.env.NEXT_PUBLIC_BACKEND_API}/${path}`);
    let config = {
        method: "POST",
        maxBodyLength: Infinity,
        url: `${"http://localhost:3000/api"}/${path}`,
        headers: {
            "Content-Type": "application/json"
        },
        data: JSON.stringify(body)
    };
    return axios(config).then((response)=>{
        return response.data;
    }).catch((error)=>{
        toast.error("Something went wrong! Please contact to the administrator");
    // console.log(error);
    });
};
const getAPI = (path, token)=>{
    let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: `${"http://localhost:3000/api"}/${path}`,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    };
    return axios(config).then((response)=>{
        return response.data;
    }).catch((error)=>{
        // console.log(error.response.data.errors);
        react_toastify__WEBPACK_IMPORTED_MODULE_0__.toast.error("Something went wrong! Please contact to the administrator", error.response.data.errors);
    });
};
const putAPI = (path, body, token)=>{
    let config = {
        method: "put",
        maxBodyLength: Infinity,
        url: `${"http://localhost:3000/api"}/${path}`,
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        data: JSON.stringify(body)
    };
    return axios(config).then((response)=>{
        return response.data;
    }).catch((error)=>{
        toast.error("Something went wrong! Please contact to the administrator");
    // console.log(error);
    });
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;