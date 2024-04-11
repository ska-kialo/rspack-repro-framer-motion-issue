"use strict";
(self["webpackChunkrspack_repro"] = self["webpackChunkrspack_repro"] || []).push([["src_render_js"],{

/***/ "./src/default-value.js":
/*!******************************!*\
  !*** ./src/default-value.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defaultValue: () => (/* binding */ defaultValue)
/* harmony export */ });
const defaultValue = 'default-value';


/***/ }),

/***/ "./src/render.js":
/*!***********************!*\
  !*** ./src/render.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _render_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.css */ "./src/render.css");
/* harmony import */ var _default_value__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default-value */ "./src/default-value.js");



class SomeClass {
    constructor(value = _default_value__WEBPACK_IMPORTED_MODULE_1__.defaultValue) {
        this.value = value;
    }

    run() {
        console.log(this.value);
    }
}

function render() {
    const el = document.createElement('div');
    el.classList.add('text');
    document.getElementsByTagName('body')[0].appendChild(el);
    el.innerHTML = 'hello, world';

    new SomeClass().run();
}


/***/ })

}]);