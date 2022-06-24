"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_elements_Buttons_vue"],{

/***/ "./resources/js/views/elements/Buttons.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/elements/Buttons.vue ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Buttons_vue_vue_type_template_id_67887ac8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Buttons.vue?vue&type=template&id=67887ac8& */ "./resources/js/views/elements/Buttons.vue?vue&type=template&id=67887ac8&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Buttons_vue_vue_type_template_id_67887ac8___WEBPACK_IMPORTED_MODULE_0__.render,
  _Buttons_vue_vue_type_template_id_67887ac8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/elements/Buttons.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/elements/Buttons.vue?vue&type=template&id=67887ac8&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/elements/Buttons.vue?vue&type=template&id=67887ac8& ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Buttons_vue_vue_type_template_id_67887ac8___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Buttons_vue_vue_type_template_id_67887ac8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Buttons_vue_vue_type_template_id_67887ac8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Buttons.vue?vue&type=template&id=67887ac8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/elements/Buttons.vue?vue&type=template&id=67887ac8&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/elements/Buttons.vue?vue&type=template&id=67887ac8&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/elements/Buttons.vue?vue&type=template&id=67887ac8& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c("base-page-heading", {
        attrs: {
          title: "Buttons",
          subtitle: "Custom buttons styles to fulfill any design approach.",
        },
        scopedSlots: _vm._u([
          {
            key: "extra",
            fn: function () {
              return [
                _c(
                  "b-breadcrumb",
                  { staticClass: "breadcrumb-alt" },
                  [
                    _c(
                      "b-breadcrumb-item",
                      { attrs: { href: "javascript:void(0)" } },
                      [_vm._v("Elements")]
                    ),
                    _vm._v(" "),
                    _c("b-breadcrumb-item", { attrs: { active: "" } }, [
                      _vm._v("Button"),
                    ]),
                  ],
                  1
                ),
              ]
            },
            proxy: true,
          },
        ]),
      }),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "content" },
        [
          _c("h2", { staticClass: "content-heading" }, [_vm._v("Styles")]),
          _vm._v(" "),
          _c(
            "base-block",
            { attrs: { rounded: "", title: "Default" } },
            [
              _c("p", { staticClass: "font-size-sm text-muted" }, [
                _vm._v(
                  "\n        The default button style with various colors to choose from. Prefer using 2 or max 3 button color variations in your web project to make it easier and more accesible for your users.\n      "
                ),
              ]),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push-2x text-center text-sm-left" },
                [
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c("b-button", { attrs: { variant: "primary" } }, [
                        _vm._v("Primary"),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "mt-2" }, [
                        _c("code", [_vm._v('variant="primary"')]),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c("b-button", { attrs: { variant: "secondary" } }, [
                        _vm._v("Secondary"),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "mt-2" }, [
                        _c("code", [_vm._v('variant="secondary"')]),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c("b-button", { attrs: { variant: "success" } }, [
                        _vm._v("Success"),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "mt-2" }, [
                        _c("code", [_vm._v('variant="success"')]),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c("b-button", { attrs: { variant: "info" } }, [
                        _vm._v("Info"),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "mt-2" }, [
                        _c("code", [_vm._v('variant="info"')]),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c("b-button", { attrs: { variant: "warning" } }, [
                        _vm._v("Warning"),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "mt-2" }, [
                        _c("code", [_vm._v('variant="warning"')]),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c("b-button", { attrs: { variant: "danger" } }, [
                        _vm._v("Danger"),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "mt-2" }, [
                        _c("code", [_vm._v('variant="danger"')]),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c("b-button", { attrs: { variant: "dark" } }, [
                        _vm._v("Dark"),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "mt-2" }, [
                        _c("code", [_vm._v('variant="dark"')]),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c("b-button", { attrs: { variant: "light" } }, [
                        _vm._v("Light"),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "mt-2" }, [
                        _c("code", [_vm._v('variant="light"')]),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "base-block",
            { attrs: { rounded: "", title: "Alternate" } },
            [
              _c("p", { staticClass: "font-size-sm text-muted" }, [
                _vm._v(
                  "\n        The alternate button style offers a more subtle design style.\n      "
                ),
              ]),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push-2x text-center text-sm-left" },
                [
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c("b-button", { attrs: { variant: "alt-primary" } }, [
                        _vm._v("Primary"),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "mt-2" }, [
                        _c("code", [_vm._v('variant="alt-primary"')]),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c("b-button", { attrs: { variant: "alt-secondary" } }, [
                        _vm._v("Secondary"),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "mt-2" }, [
                        _c("code", [_vm._v('variant="alt-secondary"')]),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c("b-button", { attrs: { variant: "alt-success" } }, [
                        _vm._v("Success"),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "mt-2" }, [
                        _c("code", [_vm._v('variant="alt-success"')]),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c("b-button", { attrs: { variant: "alt-info" } }, [
                        _vm._v("Info"),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "mt-2" }, [
                        _c("code", [_vm._v('variant="alt-info"')]),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c("b-button", { attrs: { variant: "alt-warning" } }, [
                        _vm._v("Warning"),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "mt-2" }, [
                        _c("code", [_vm._v('variant="alt-warning"')]),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c("b-button", { attrs: { variant: "alt-danger" } }, [
                        _vm._v("Danger"),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "mt-2" }, [
                        _c("code", [_vm._v('variant="alt-danger"')]),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c("b-button", { attrs: { variant: "alt-dark" } }, [
                        _vm._v("Dark"),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "mt-2" }, [
                        _c("code", [_vm._v('variant="alt-dark"')]),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c("b-button", { attrs: { variant: "alt-light" } }, [
                        _vm._v("Light"),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "mt-2" }, [
                        _c("code", [_vm._v('variant="alt-light"')]),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "base-block",
            { attrs: { rounded: "", title: "Outline" } },
            [
              _c("p", { staticClass: "font-size-sm text-muted" }, [
                _vm._v(
                  "\n        Outline styles are also available for all previous color variations\n      "
                ),
              ]),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push-2x text-center text-sm-left" },
                [
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { variant: "outline-primary" } },
                        [_vm._v("Primary")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "mt-2" }, [
                        _c("code", [_vm._v('variant="primary"')]),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { variant: "outline-secondary" } },
                        [_vm._v("Secondary")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "mt-2" }, [
                        _c("code", [_vm._v('variant="outline-secondary"')]),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { variant: "outline-success" } },
                        [_vm._v("Success")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "mt-2" }, [
                        _c("code", [_vm._v('variant="outline-success"')]),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c("b-button", { attrs: { variant: "outline-info" } }, [
                        _vm._v("Info"),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "mt-2" }, [
                        _c("code", [_vm._v('variant="outline-info"')]),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { variant: "outline-warning" } },
                        [_vm._v("Warning")]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "mt-2" }, [
                        _c("code", [_vm._v('variant="outline-warning"')]),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c("b-button", { attrs: { variant: "outline-danger" } }, [
                        _vm._v("Danger"),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "mt-2" }, [
                        _c("code", [_vm._v('variant="outline-danger"')]),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c("b-button", { attrs: { variant: "outline-dark" } }, [
                        _vm._v("Dark"),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "mt-2" }, [
                        _c("code", [_vm._v('variant="outline-dark"')]),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c("b-button", { attrs: { variant: "outline-light" } }, [
                        _vm._v("Light"),
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "mt-2" }, [
                        _c("code", [_vm._v('variant="outline-light"')]),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("h2", { staticClass: "content-heading" }, [_vm._v("Effects")]),
          _vm._v(" "),
          _c(
            "base-block",
            { attrs: { rounded: "", title: "Ripple" } },
            [
              _c("p", { staticClass: "font-size-sm text-muted" }, [
                _vm._v(
                  "\n        Inspired by Material design, adding a ripple animation on click is just an attribute away "
                ),
                _c("code", [_vm._v("v-click-ripple")]),
              ]),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push text-center text-sm-left mb-4" },
                [
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            { name: "click-ripple", rawName: "v-click-ripple" },
                          ],
                          attrs: { variant: "primary" },
                        },
                        [_vm._v("Primary")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            { name: "click-ripple", rawName: "v-click-ripple" },
                          ],
                          attrs: { variant: "secondary" },
                        },
                        [_vm._v("Secondary")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            { name: "click-ripple", rawName: "v-click-ripple" },
                          ],
                          attrs: { variant: "success" },
                        },
                        [_vm._v("Success")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            { name: "click-ripple", rawName: "v-click-ripple" },
                          ],
                          attrs: { variant: "info" },
                        },
                        [_vm._v("Info")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            { name: "click-ripple", rawName: "v-click-ripple" },
                          ],
                          attrs: { variant: "warning" },
                        },
                        [_vm._v("Warning")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            { name: "click-ripple", rawName: "v-click-ripple" },
                          ],
                          attrs: { variant: "danger" },
                        },
                        [_vm._v("Danger")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            { name: "click-ripple", rawName: "v-click-ripple" },
                          ],
                          attrs: { variant: "dark" },
                        },
                        [_vm._v("Dark")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            { name: "click-ripple", rawName: "v-click-ripple" },
                          ],
                          attrs: { variant: "light" },
                        },
                        [_vm._v("Light")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push text-center text-sm-left mb-4" },
                [
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            { name: "click-ripple", rawName: "v-click-ripple" },
                          ],
                          attrs: { variant: "alt-primary" },
                        },
                        [_vm._v("Primary")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            { name: "click-ripple", rawName: "v-click-ripple" },
                          ],
                          attrs: { variant: "alt-secondary" },
                        },
                        [_vm._v("Secondary")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            { name: "click-ripple", rawName: "v-click-ripple" },
                          ],
                          attrs: { variant: "alt-success" },
                        },
                        [_vm._v("Success")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            { name: "click-ripple", rawName: "v-click-ripple" },
                          ],
                          attrs: { variant: "alt-info" },
                        },
                        [_vm._v("Info")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            { name: "click-ripple", rawName: "v-click-ripple" },
                          ],
                          attrs: { variant: "alt-warning" },
                        },
                        [_vm._v("Warning")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            { name: "click-ripple", rawName: "v-click-ripple" },
                          ],
                          attrs: { variant: "alt-danger" },
                        },
                        [_vm._v("Danger")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            { name: "click-ripple", rawName: "v-click-ripple" },
                          ],
                          attrs: { variant: "alt-dark" },
                        },
                        [_vm._v("Dark")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            { name: "click-ripple", rawName: "v-click-ripple" },
                          ],
                          attrs: { variant: "alt-light" },
                        },
                        [_vm._v("Light")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push text-center text-sm-left mb-4" },
                [
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            { name: "click-ripple", rawName: "v-click-ripple" },
                          ],
                          attrs: { variant: "outline-primary" },
                        },
                        [_vm._v("Primary")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            { name: "click-ripple", rawName: "v-click-ripple" },
                          ],
                          attrs: { variant: "outline-secondary" },
                        },
                        [_vm._v("Secondary")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            { name: "click-ripple", rawName: "v-click-ripple" },
                          ],
                          attrs: { variant: "outline-success" },
                        },
                        [_vm._v("Success")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            { name: "click-ripple", rawName: "v-click-ripple" },
                          ],
                          attrs: { variant: "outline-info" },
                        },
                        [_vm._v("Info")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            { name: "click-ripple", rawName: "v-click-ripple" },
                          ],
                          attrs: { variant: "outline-warning" },
                        },
                        [_vm._v("Warning")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            { name: "click-ripple", rawName: "v-click-ripple" },
                          ],
                          attrs: { variant: "outline-danger" },
                        },
                        [_vm._v("Danger")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            { name: "click-ripple", rawName: "v-click-ripple" },
                          ],
                          attrs: { variant: "outline-dark" },
                        },
                        [_vm._v("Dark")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            { name: "click-ripple", rawName: "v-click-ripple" },
                          ],
                          attrs: { variant: "outline-light" },
                        },
                        [_vm._v("Light")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("h2", { staticClass: "content-heading" }, [_vm._v("Variations")]),
          _vm._v(" "),
          _c(
            "base-block",
            { attrs: { rounded: "", title: "Small Size" } },
            [
              _c("p", { staticClass: "font-size-sm text-muted" }, [
                _vm._v("\n        You can use "),
                _c("code", [_vm._v('size="sm"')]),
                _vm._v(" to make your buttons larger\n      "),
              ]),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push text-center text-sm-left mb-4" },
                [
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "sm", variant: "primary" } },
                        [_vm._v("Primary")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "sm", variant: "secondary" } },
                        [_vm._v("Secondary")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "sm", variant: "success" } },
                        [_vm._v("Success")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "sm", variant: "info" } },
                        [_vm._v("Info")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "sm", variant: "warning" } },
                        [_vm._v("Warning")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "sm", variant: "danger" } },
                        [_vm._v("Danger")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "sm", variant: "dark" } },
                        [_vm._v("Dark")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "sm", variant: "light" } },
                        [_vm._v("Light")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push text-center text-sm-left mb-4" },
                [
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "sm", variant: "alt-primary" } },
                        [_vm._v("Primary")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "sm", variant: "alt-secondary" } },
                        [_vm._v("Secondary")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "sm", variant: "alt-success" } },
                        [_vm._v("Success")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "sm", variant: "alt-info" } },
                        [_vm._v("Info")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "sm", variant: "alt-warning" } },
                        [_vm._v("Warning")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "sm", variant: "alt-danger" } },
                        [_vm._v("Danger")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "sm", variant: "alt-dark" } },
                        [_vm._v("Dark")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "sm", variant: "alt-light" } },
                        [_vm._v("Light")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push text-center text-sm-left mb-4" },
                [
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "sm", variant: "outline-primary" } },
                        [_vm._v("Primary")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "sm", variant: "outline-secondary" } },
                        [_vm._v("Secondary")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "sm", variant: "outline-success" } },
                        [_vm._v("Success")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "sm", variant: "outline-info" } },
                        [_vm._v("Info")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "sm", variant: "outline-warning" } },
                        [_vm._v("Warning")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "sm", variant: "outline-danger" } },
                        [_vm._v("Danger")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "sm", variant: "outline-dark" } },
                        [_vm._v("Dark")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "sm", variant: "outline-light" } },
                        [_vm._v("Light")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "base-block",
            { attrs: { rounded: "", title: "Large Size" } },
            [
              _c("p", { staticClass: "font-size-sm text-muted" }, [
                _vm._v("\n        You can use "),
                _c("code", [_vm._v('size="lg"')]),
                _vm._v(" to make your buttons larger\n      "),
              ]),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push text-center text-sm-left mb-4" },
                [
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "lg", variant: "primary" } },
                        [_vm._v("Primary")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "lg", variant: "secondary" } },
                        [_vm._v("Secondary")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "lg", variant: "success" } },
                        [_vm._v("Success")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "lg", variant: "info" } },
                        [_vm._v("Info")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "lg", variant: "warning" } },
                        [_vm._v("Warning")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "lg", variant: "danger" } },
                        [_vm._v("Danger")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "lg", variant: "dark" } },
                        [_vm._v("Dark")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "lg", variant: "light" } },
                        [_vm._v("Light")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push text-center text-sm-left mb-4" },
                [
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "lg", variant: "alt-primary" } },
                        [_vm._v("Primary")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "lg", variant: "alt-secondary" } },
                        [_vm._v("Secondary")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "lg", variant: "alt-success" } },
                        [_vm._v("Success")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "lg", variant: "alt-info" } },
                        [_vm._v("Info")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "lg", variant: "alt-warning" } },
                        [_vm._v("Warning")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "lg", variant: "alt-danger" } },
                        [_vm._v("Danger")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "lg", variant: "alt-dark" } },
                        [_vm._v("Dark")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "lg", variant: "alt-light" } },
                        [_vm._v("Light")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push text-center text-sm-left mb-4" },
                [
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "lg", variant: "outline-primary" } },
                        [_vm._v("Primary")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "lg", variant: "outline-secondary" } },
                        [_vm._v("Secondary")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "lg", variant: "outline-success" } },
                        [_vm._v("Success")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "lg", variant: "outline-info" } },
                        [_vm._v("Info")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "lg", variant: "outline-warning" } },
                        [_vm._v("Warning")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "lg", variant: "outline-danger" } },
                        [_vm._v("Danger")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "lg", variant: "outline-dark" } },
                        [_vm._v("Dark")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { size: "lg", variant: "outline-light" } },
                        [_vm._v("Light")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "base-block",
            { attrs: { rounded: "", title: "Square" } },
            [
              _c("p", { staticClass: "font-size-sm text-muted" }, [
                _vm._v(
                  "\n        You can remove border radius from your buttons if you are looking for a sharp look by using the class "
                ),
                _c("code", [_vm._v("btn-square")]),
              ]),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push text-center text-sm-left mb-4" },
                [
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-square",
                          attrs: { variant: "primary" },
                        },
                        [_vm._v("Primary")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-square",
                          attrs: { variant: "secondary" },
                        },
                        [_vm._v("Secondary")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-square",
                          attrs: { variant: "success" },
                        },
                        [_vm._v("Success")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-square",
                          attrs: { variant: "info" },
                        },
                        [_vm._v("Info")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-square",
                          attrs: { variant: "warning" },
                        },
                        [_vm._v("Warning")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-square",
                          attrs: { variant: "danger" },
                        },
                        [_vm._v("Danger")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-square",
                          attrs: { variant: "dark" },
                        },
                        [_vm._v("Dark")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-square",
                          attrs: { variant: "light" },
                        },
                        [_vm._v("Light")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push text-center text-sm-left mb-4" },
                [
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-square",
                          attrs: { variant: "alt-primary" },
                        },
                        [_vm._v("Primary")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-square",
                          attrs: { variant: "alt-secondary" },
                        },
                        [_vm._v("Secondary")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-square",
                          attrs: { variant: "alt-success" },
                        },
                        [_vm._v("Success")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-square",
                          attrs: { variant: "alt-info" },
                        },
                        [_vm._v("Info")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-square",
                          attrs: { variant: "alt-warning" },
                        },
                        [_vm._v("Warning")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-square",
                          attrs: { variant: "alt-danger" },
                        },
                        [_vm._v("Danger")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-square",
                          attrs: { variant: "alt-dark" },
                        },
                        [_vm._v("Dark")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-square",
                          attrs: { variant: "alt-light" },
                        },
                        [_vm._v("Light")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push text-center text-sm-left mb-4" },
                [
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-square",
                          attrs: { variant: "outline-primary" },
                        },
                        [_vm._v("Primary")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-square",
                          attrs: { variant: "outline-secondary" },
                        },
                        [_vm._v("Secondary")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-square",
                          attrs: { variant: "outline-success" },
                        },
                        [_vm._v("Success")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-square",
                          attrs: { variant: "outline-info" },
                        },
                        [_vm._v("Info")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-square",
                          attrs: { variant: "outline-warning" },
                        },
                        [_vm._v("Warning")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-square",
                          attrs: { variant: "outline-danger" },
                        },
                        [_vm._v("Danger")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-square",
                          attrs: { variant: "outline-dark" },
                        },
                        [_vm._v("Dark")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-square",
                          attrs: { variant: "outline-light" },
                        },
                        [_vm._v("Light")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "base-block",
            { attrs: { rounded: "", title: "Rounded" } },
            [
              _c("p", { staticClass: "font-size-sm text-muted" }, [
                _vm._v(
                  "\n        Fully rounded buttons are available for all available button styles by using the class "
                ),
                _c("code", [_vm._v("btn-rounded")]),
              ]),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push text-center text-sm-left mb-4" },
                [
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-rounded",
                          attrs: { variant: "primary" },
                        },
                        [_vm._v("Primary")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-rounded",
                          attrs: { variant: "secondary" },
                        },
                        [_vm._v("Secondary")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-rounded",
                          attrs: { variant: "success" },
                        },
                        [_vm._v("Success")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-rounded",
                          attrs: { variant: "info" },
                        },
                        [_vm._v("Info")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-rounded",
                          attrs: { variant: "warning" },
                        },
                        [_vm._v("Warning")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-rounded",
                          attrs: { variant: "danger" },
                        },
                        [_vm._v("Danger")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-rounded",
                          attrs: { variant: "dark" },
                        },
                        [_vm._v("Dark")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-rounded",
                          attrs: { variant: "light" },
                        },
                        [_vm._v("Light")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push text-center text-sm-left mb-4" },
                [
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-rounded",
                          attrs: { variant: "alt-primary" },
                        },
                        [_vm._v("Primary")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-rounded",
                          attrs: { variant: "alt-secondary" },
                        },
                        [_vm._v("Secondary")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-rounded",
                          attrs: { variant: "alt-success" },
                        },
                        [_vm._v("Success")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-rounded",
                          attrs: { variant: "alt-info" },
                        },
                        [_vm._v("Info")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-rounded",
                          attrs: { variant: "alt-warning" },
                        },
                        [_vm._v("Warning")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-rounded",
                          attrs: { variant: "alt-danger" },
                        },
                        [_vm._v("Danger")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-rounded",
                          attrs: { variant: "alt-dark" },
                        },
                        [_vm._v("Dark")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-rounded",
                          attrs: { variant: "alt-light" },
                        },
                        [_vm._v("Light")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push text-center text-sm-left mb-4" },
                [
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-rounded",
                          attrs: { variant: "outline-primary" },
                        },
                        [_vm._v("Primary")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-rounded",
                          attrs: { variant: "outline-secondary" },
                        },
                        [_vm._v("Secondary")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-rounded",
                          attrs: { variant: "outline-success" },
                        },
                        [_vm._v("Success")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-rounded",
                          attrs: { variant: "outline-info" },
                        },
                        [_vm._v("Info")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-rounded",
                          attrs: { variant: "outline-warning" },
                        },
                        [_vm._v("Warning")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-rounded",
                          attrs: { variant: "outline-danger" },
                        },
                        [_vm._v("Danger")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-rounded",
                          attrs: { variant: "outline-dark" },
                        },
                        [_vm._v("Dark")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "btn-rounded",
                          attrs: { variant: "outline-light" },
                        },
                        [_vm._v("Light")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "base-block",
            { attrs: { rounded: "", title: "Disabled" } },
            [
              _c("p", { staticClass: "font-size-sm text-muted" }, [
                _vm._v(
                  "\n        If an action is not available in a specific state of your website/app, you can easily disable your buttons\n      "
                ),
              ]),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push text-center text-sm-left mb-4" },
                [
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { variant: "primary", disabled: "" } },
                        [_vm._v("Primary")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { variant: "secondary", disabled: "" } },
                        [_vm._v("Secondary")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { variant: "success", disabled: "" } },
                        [_vm._v("Success")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { variant: "info", disabled: "" } },
                        [_vm._v("Info")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { variant: "warning", disabled: "" } },
                        [_vm._v("Warning")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { variant: "danger", disabled: "" } },
                        [_vm._v("Danger")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { variant: "dark", disabled: "" } },
                        [_vm._v("Dark")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { variant: "light", disabled: "" } },
                        [_vm._v("Light")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push text-center text-sm-left mb-4" },
                [
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { variant: "alt-primary", disabled: "" } },
                        [_vm._v("Primary")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { variant: "alt-secondary", disabled: "" } },
                        [_vm._v("Secondary")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { variant: "alt-success", disabled: "" } },
                        [_vm._v("Success")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { variant: "alt-info", disabled: "" } },
                        [_vm._v("Info")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { variant: "alt-warning", disabled: "" } },
                        [_vm._v("Warning")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { variant: "alt-danger", disabled: "" } },
                        [_vm._v("Danger")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { variant: "alt-dark", disabled: "" } },
                        [_vm._v("Dark")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { variant: "alt-light", disabled: "" } },
                        [_vm._v("Light")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push text-center text-sm-left mb-4" },
                [
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { variant: "outline-primary", disabled: "" } },
                        [_vm._v("Primary")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        {
                          attrs: { variant: "outline-secondary", disabled: "" },
                        },
                        [_vm._v("Secondary")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { variant: "outline-success", disabled: "" } },
                        [_vm._v("Success")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { variant: "outline-info", disabled: "" } },
                        [_vm._v("Info")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { variant: "outline-warning", disabled: "" } },
                        [_vm._v("Warning")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { variant: "outline-danger", disabled: "" } },
                        [_vm._v("Danger")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { variant: "outline-dark", disabled: "" } },
                        [_vm._v("Dark")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button",
                        { attrs: { variant: "outline-light", disabled: "" } },
                        [_vm._v("Light")]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("base-block", { attrs: { rounded: "", title: "Icons" } }, [
            _c(
              "p",
              { staticClass: "font-size-sm text-muted" },
              [
                _vm._v("\n        You can use any of the "),
                _c(
                  "router-link",
                  { attrs: { to: "/backend/elements/icons" } },
                  [_vm._v("available icons")]
                ),
                _vm._v(
                  " in your buttons to visualize its intended action\n      "
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mb-4" },
              [
                _c(
                  "b-button",
                  { staticClass: "mr-1 mb-3", attrs: { variant: "success" } },
                  [
                    _c("i", { staticClass: "fa fa-fw fa-plus mr-1" }),
                    _vm._v(" Add User\n        "),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-button",
                  { staticClass: "mr-1 mb-3", attrs: { variant: "info" } },
                  [
                    _c("i", { staticClass: "fa fa-fw fa-download mr-1" }),
                    _vm._v(" Download\n        "),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-button",
                  { staticClass: "mr-1 mb-3", attrs: { variant: "warning" } },
                  [
                    _c("i", {
                      staticClass: "fa fa-fw fa-exclamation-triangle mr-1",
                    }),
                    _vm._v(" Are you sure?\n        "),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-button",
                  { staticClass: "mr-1 mb-3", attrs: { variant: "primary" } },
                  [
                    _c("i", { staticClass: "fa fa-fw fa-upload mr-1" }),
                    _vm._v(" Upload\n        "),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-button",
                  { staticClass: "mr-1 mb-3", attrs: { variant: "secondary" } },
                  [
                    _c("i", { staticClass: "fab fa-fw fa-bluetooth-b mr-1" }),
                    _vm._v(" 3 Connections\n        "),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-button",
                  { staticClass: "mr-1 mb-3", attrs: { variant: "danger" } },
                  [
                    _c("i", { staticClass: "fa fa-fw fa-times mr-1" }),
                    _vm._v(" Delete\n        "),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-button",
                  { staticClass: "mr-1 mb-3", attrs: { variant: "primary" } },
                  [
                    _c("i", { staticClass: "fa fa-fw fa-thumbs-up mr-1" }),
                    _vm._v(" Like\n        "),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-button",
                  { staticClass: "mr-1 mb-3", attrs: { variant: "secondary" } },
                  [
                    _c("i", { staticClass: "fa fa-fw fa-play mr-1" }),
                    _vm._v(" Play\n        "),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-button",
                  { staticClass: "mr-1 mb-3", attrs: { variant: "dark" } },
                  [
                    _c("i", { staticClass: "fa fa-fw fa-box mr-1" }),
                    _vm._v(" 10 Products\n        "),
                  ]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mb-4" },
              [
                _c(
                  "b-button",
                  {
                    staticClass: "mr-1 mb-3",
                    attrs: { variant: "alt-success" },
                  },
                  [
                    _c("i", { staticClass: "fa fa-fw fa-plus mr-1" }),
                    _vm._v(" Add User\n        "),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-button",
                  { staticClass: "mr-1 mb-3", attrs: { variant: "alt-info" } },
                  [
                    _c("i", { staticClass: "fa fa-fw fa-download mr-1" }),
                    _vm._v(" Download\n        "),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-button",
                  {
                    staticClass: "mr-1 mb-3",
                    attrs: { variant: "alt-warning" },
                  },
                  [
                    _c("i", {
                      staticClass: "fa fa-fw fa-exclamation-triangle mr-1",
                    }),
                    _vm._v(" Are you sure?\n        "),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-button",
                  {
                    staticClass: "mr-1 mb-3",
                    attrs: { variant: "alt-primary" },
                  },
                  [
                    _c("i", { staticClass: "fa fa-fw fa-upload mr-1" }),
                    _vm._v(" Upload\n        "),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-button",
                  {
                    staticClass: "mr-1 mb-3",
                    attrs: { variant: "alt-secondary" },
                  },
                  [
                    _c("i", { staticClass: "fab fa-fw fa-bluetooth-b mr-1" }),
                    _vm._v(" 3 Connections\n        "),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-button",
                  {
                    staticClass: "mr-1 mb-3",
                    attrs: { variant: "alt-danger" },
                  },
                  [
                    _c("i", { staticClass: "fa fa-fw fa-times mr-1" }),
                    _vm._v(" Delete\n        "),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-button",
                  {
                    staticClass: "mr-1 mb-3",
                    attrs: { variant: "alt-primary" },
                  },
                  [
                    _c("i", { staticClass: "fa fa-fw fa-thumbs-up mr-1" }),
                    _vm._v(" Like\n        "),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-button",
                  {
                    staticClass: "mr-1 mb-3",
                    attrs: { variant: "alt-secondary" },
                  },
                  [
                    _c("i", { staticClass: "fa fa-fw fa-play mr-1" }),
                    _vm._v(" Play\n        "),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-button",
                  { staticClass: "mr-1 mb-3", attrs: { variant: "alt-dark" } },
                  [
                    _c("i", { staticClass: "fa fa-fw fa-box mr-1" }),
                    _vm._v(" 10 Products\n        "),
                  ]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mb-4" },
              [
                _c(
                  "b-button",
                  {
                    staticClass: "mr-1 mb-3",
                    attrs: { variant: "outline-success" },
                  },
                  [
                    _c("i", { staticClass: "fa fa-fw fa-plus mr-1" }),
                    _vm._v(" Add User\n        "),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-button",
                  {
                    staticClass: "mr-1 mb-3",
                    attrs: { variant: "outline-info" },
                  },
                  [
                    _c("i", { staticClass: "fa fa-fw fa-download mr-1" }),
                    _vm._v(" Download\n        "),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-button",
                  {
                    staticClass: "mr-1 mb-3",
                    attrs: { variant: "outline-warning" },
                  },
                  [
                    _c("i", {
                      staticClass: "fa fa-fw fa-exclamation-triangle mr-1",
                    }),
                    _vm._v(" Are you sure?\n        "),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-button",
                  {
                    staticClass: "mr-1 mb-3",
                    attrs: { variant: "outline-primary" },
                  },
                  [
                    _c("i", { staticClass: "fa fa-fw fa-upload mr-1" }),
                    _vm._v(" Upload\n        "),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-button",
                  {
                    staticClass: "mr-1 mb-3",
                    attrs: { variant: "outline-secondary" },
                  },
                  [
                    _c("i", { staticClass: "fab fa-fw fa-bluetooth-b mr-1" }),
                    _vm._v(" 3 Connections\n        "),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-button",
                  {
                    staticClass: "mr-1 mb-3",
                    attrs: { variant: "outline-danger" },
                  },
                  [
                    _c("i", { staticClass: "fa fa-fw fa-times mr-1" }),
                    _vm._v(" Delete\n        "),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-button",
                  {
                    staticClass: "mr-1 mb-3",
                    attrs: { variant: "outline-primary" },
                  },
                  [
                    _c("i", { staticClass: "fa fa-fw fa-thumbs-up mr-1" }),
                    _vm._v(" Like\n        "),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-button",
                  {
                    staticClass: "mr-1 mb-3",
                    attrs: { variant: "outline-secondary" },
                  },
                  [
                    _c("i", { staticClass: "fa fa-fw fa-play mr-1" }),
                    _vm._v(" Play\n        "),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "b-button",
                  {
                    staticClass: "mr-1 mb-3",
                    attrs: { variant: "outline-dark" },
                  },
                  [
                    _c("i", { staticClass: "fa fa-fw fa-box mr-1" }),
                    _vm._v(" 10 Products\n        "),
                  ]
                ),
              ],
              1
            ),
          ]),
          _vm._v(" "),
          _c(
            "base-block",
            { attrs: { rounded: "", title: "Be Creative" } },
            [
              _c("p", { staticClass: "font-size-sm text-muted" }, [
                _vm._v(
                  "\n        Mix any of the available classes to create the button style you want to use in your project\n      "
                ),
              ]),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  staticClass: "btn-square mr-1 mb-3",
                  attrs: { size: "lg", variant: "secondary" },
                },
                [
                  _c("i", { staticClass: "fa fa-fw fa-wifi mr-1" }),
                  _vm._v(" Wifi Available\n      "),
                ]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  staticClass: "btn-rounded mr-1 mb-3",
                  attrs: { variant: "alt-danger" },
                },
                [
                  _c("i", { staticClass: "fa fa-fw fa-times mr-1" }),
                  _vm._v(" Remove\n      "),
                ]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                { staticClass: "mr-1 mb-3", attrs: { variant: "success" } },
                [_c("i", { staticClass: "fa fa-fw fa-check" })]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  staticClass: "mr-1 mb-3",
                  attrs: { size: "sm", variant: "warning" },
                },
                [_c("i", { staticClass: "fa fa-fw fa-exclamation-circle" })]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  staticClass: "mr-1 mb-3",
                  attrs: { size: "lg", variant: "outline-primary" },
                },
                [
                  _c("i", { staticClass: "fab fa-fw fa-instagram mr-1" }),
                  _vm._v(" Post your image\n      "),
                ]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  staticClass: "btn-rounded mr-1 mb-3",
                  attrs: { variant: "success" },
                },
                [_c("i", { staticClass: "fa fa-fw fa-pencil-alt" })]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  staticClass: "mr-1 mb-3",
                  attrs: { size: "lg", variant: "secondary" },
                },
                [
                  _c("i", { staticClass: "fab fa-fw fa-youtube mr-1" }),
                  _vm._v(" YouTube\n      "),
                ]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  staticClass: "btn-square mr-1 mb-3",
                  attrs: { size: "sm", variant: "outline-warning" },
                },
                [
                  _c("i", { staticClass: "far fa-fw fa-envelope mr-1" }),
                  _vm._v(" Messages\n      "),
                ]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  staticClass: "mr-1 mb-3",
                  attrs: { size: "sm", variant: "dark" },
                },
                [
                  _c("i", { staticClass: "fab fa-fw fa-dribbble mr-1" }),
                  _vm._v(" Dribbble\n      "),
                ]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  staticClass: "mr-1 mb-3",
                  attrs: { size: "sm", variant: "primary" },
                },
                [
                  _c("i", { staticClass: "fa fa-fw fa-archive mr-1" }),
                  _vm._v(" Archive\n      "),
                ]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  staticClass: "mr-1 mb-3",
                  attrs: { size: "sm", variant: "secondary" },
                },
                [
                  _c("i", { staticClass: "fa fa-fw fa-wrench mr-1" }),
                  _vm._v(" Preferences\n      "),
                ]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  staticClass: "btn-square mr-1 mb-3",
                  attrs: { size: "lg", variant: "light" },
                },
                [
                  _c("i", { staticClass: "fa fa-fw fa-cog mr-1" }),
                  _vm._v(" Options\n      "),
                ]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  staticClass: "mr-1 mb-3",
                  attrs: { size: "lg", variant: "alt-warning" },
                },
                [
                  _c("i", { staticClass: "fab fa-fw fa-instagram mr-1" }),
                  _vm._v(" Instagram\n      "),
                ]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  staticClass: "mr-1 mb-3",
                  attrs: { size: "sm", variant: "alt-primary" },
                },
                [
                  _c("i", { staticClass: "fa fa-fw fa-rocket mr-1" }),
                  _vm._v(" Test\n      "),
                ]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  staticClass: "btn-rounded mr-1 mb-3",
                  attrs: { size: "sm", variant: "outline-dark" },
                },
                [
                  _c("i", { staticClass: "fa fa-fw fa-image mr-1" }),
                  _vm._v(" Picture\n      "),
                ]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  staticClass: "mr-1 mb-3",
                  attrs: { size: "lg", variant: "warning" },
                },
                [
                  _c("i", { staticClass: "fa fa-fw fa-tint mr-1" }),
                  _vm._v(" Themes\n      "),
                ]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  staticClass: "mr-1 mb-3",
                  attrs: { size: "sm", variant: "primary" },
                },
                [
                  _c("i", { staticClass: "fa fa-fw fa-arrow-down mr-1" }),
                  _vm._v(" Down\n      "),
                ]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  staticClass: "btn-rounded px-4 mr-1 mb-3",
                  attrs: { size: "lg", variant: "alt-success" },
                },
                [
                  _c("i", { staticClass: "si si-rocket mr-1" }),
                  _vm._v(" Launch Product\n      "),
                ]
              ),
              _vm._v(" "),
              _c(
                "b-button",
                {
                  staticClass: "btn-square mr-1 mb-3",
                  attrs: { size: "sm", variant: "info" },
                },
                [
                  _c("i", { staticClass: "si si-chemistry mr-1" }),
                  _vm._v(" Lab\n      "),
                ]
              ),
            ],
            1
          ),
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);