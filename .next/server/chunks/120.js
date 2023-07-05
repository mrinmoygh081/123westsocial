"use strict";
exports.id = 120;
exports.ids = [120];
exports.modules = {

/***/ 6761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const connection = {};
const connect = async ()=>{
    if (connection.isConnected) {
        console.log("DB already connected");
        return;
    }
    if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections.length) > 0) {
        connection.isConnected = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().connections[0].readyState);
        if (connection.isConnected === 1) {
            console.log("use previous connection");
            return;
        }
        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().disconnect();
    }
    const db = await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI);
    console.log("new connection");
    connection.isConnected = db.connections[0].readyState;
};
async function disconnect() {
    if (connection.isConnected) {
        if (true) {
            await mongoose__WEBPACK_IMPORTED_MODULE_0___default().disconnect();
            connection.isConnected = false;
        } else {}
    }
}
const db = {
    connect,
    disconnect
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (db); // import { MongoClient } from "mongodb";
 // if (!process.env.MONGODB_URI) {
 //   throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
 // }
 // const uri = process.env.MONGODB_URI;
 // const options = {};
 // let client;
 // let clientPromise;
 // if (process.env.NODE_ENV === "development") {
 //   // In development mode, use a global variable so that the value
 //   // is preserved across module reloads caused by HMR (Hot Module Replacement).
 //   if (!global._mongoClientPromise) {
 //     client = new MongoClient(uri, options);
 //     global._mongoClientPromise = client.connect();
 //   }
 //   clientPromise = global._mongoClientPromise;
 // } else {
 //   // In production mode, it's best to not use a global variable.
 //   client = new MongoClient(uri, options);
 //   clientPromise = client.connect();
 // }
 // // Export a module-scoped MongoClient promise. By doing this in a
 // // separate module, the client can be shared across functions.
 // export default clientPromise;


/***/ }),

/***/ 3809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ resHandler)
/* harmony export */ });
const resHandler = (res, statuses, statusCode, msg, data)=>{
    res.status(statusCode).json({
        status: statuses,
        statusCode,
        msg,
        data
    });
};


/***/ })

};
;