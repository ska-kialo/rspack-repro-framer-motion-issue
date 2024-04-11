(self['webpackChunkrspack_repro'] = self['webpackChunkrspack_repro'] || []).push([["src_render_js"], {
"./src/default-value.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  defaultValue: function() { return defaultValue; }
});
const defaultValue = 'default-value';
}),
"./src/render.js": (function (__unused_webpack_module, __webpack_exports__, __webpack_require__) {
"use strict";
__webpack_require__.r(__webpack_exports__);
__webpack_require__.d(__webpack_exports__, {
  render: function() { return render; }
});
/* harmony import */var _render_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./render.css */"./src/render.css");
/* harmony import */var _default_value__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./default-value */"./src/default-value.js");


class SomeClass {
    constructor(value = defaultValue){
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
}),
"./src/render.css": (function (module, __unused_webpack_exports, __webpack_require__) {
"use strict";
__webpack_require__.r(module.exports = {})
}),

}]);