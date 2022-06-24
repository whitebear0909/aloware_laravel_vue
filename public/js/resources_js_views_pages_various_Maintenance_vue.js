"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_pages_various_Maintenance_vue"],{

/***/ "./resources/js/views/pages/various/Maintenance.vue":
/*!**********************************************************!*\
  !*** ./resources/js/views/pages/various/Maintenance.vue ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Maintenance_vue_vue_type_template_id_e2edb7d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Maintenance.vue?vue&type=template&id=e2edb7d6& */ "./resources/js/views/pages/various/Maintenance.vue?vue&type=template&id=e2edb7d6&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Maintenance_vue_vue_type_template_id_e2edb7d6___WEBPACK_IMPORTED_MODULE_0__.render,
  _Maintenance_vue_vue_type_template_id_e2edb7d6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/various/Maintenance.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/various/Maintenance.vue?vue&type=template&id=e2edb7d6&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/pages/various/Maintenance.vue?vue&type=template&id=e2edb7d6& ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Maintenance_vue_vue_type_template_id_e2edb7d6___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Maintenance_vue_vue_type_template_id_e2edb7d6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Maintenance_vue_vue_type_template_id_e2edb7d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Maintenance.vue?vue&type=template&id=e2edb7d6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/various/Maintenance.vue?vue&type=template&id=e2edb7d6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/various/Maintenance.vue?vue&type=template&id=e2edb7d6&":
/*!********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/various/Maintenance.vue?vue&type=template&id=e2edb7d6& ***!
  \********************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* binding */ render; },
/* harmony export */   "staticRenderFns": function() { return /* binding */ staticRenderFns; }
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "hero-static d-flex align-items-center" }, [
    _c("div", { staticClass: "w-100" }, [
      _c("div", { staticClass: "bg-white" }, [
        _c(
          "div",
          { staticClass: "content content-full" },
          [
            _c(
              "b-row",
              { staticClass: "justify-content-center" },
              [
                _c(
                  "b-col",
                  { staticClass: "py-6", attrs: { md: "8", lg: "6", xl: "4" } },
                  [
                    _c("div", { staticClass: "text-center" }, [
                      _c("p", [
                        _c("i", {
                          staticClass: "fa fa-3x fa-cog fa-spin text-primary",
                        }),
                      ]),
                      _vm._v(" "),
                      _c("h1", { staticClass: "h4 mb-1" }, [
                        _vm._v(
                          "\n                Sorry, we’re down for maintenance..\n              "
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "h2",
                        { staticClass: "h6 font-w400 text-muted mb-3" },
                        [
                          _vm._v(
                            "\n                ..but we’ll be back shortly!\n              "
                          ),
                        ]
                      ),
                    ]),
                  ]
                ),
              ],
              1
            ),
          ],
          1
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "font-size-sm text-center text-muted py-3" }, [
        _c("strong", [
          _vm._v(
            _vm._s(
              _vm.$store.getters.appName + " " + _vm.$store.getters.appVersion
            )
          ),
        ]),
        _vm._v(" © " + _vm._s(_vm.$store.getters.appCopyright) + "\n    "),
      ]),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);