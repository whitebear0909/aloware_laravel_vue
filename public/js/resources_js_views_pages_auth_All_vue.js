"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_pages_auth_All_vue"],{

/***/ "./resources/js/views/pages/auth/All.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/pages/auth/All.vue ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _All_vue_vue_type_template_id_01f912c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./All.vue?vue&type=template&id=01f912c4& */ "./resources/js/views/pages/auth/All.vue?vue&type=template&id=01f912c4&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _All_vue_vue_type_template_id_01f912c4___WEBPACK_IMPORTED_MODULE_0__.render,
  _All_vue_vue_type_template_id_01f912c4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/auth/All.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/auth/All.vue?vue&type=template&id=01f912c4&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/pages/auth/All.vue?vue&type=template&id=01f912c4& ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_All_vue_vue_type_template_id_01f912c4___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_All_vue_vue_type_template_id_01f912c4___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_All_vue_vue_type_template_id_01f912c4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./All.vue?vue&type=template&id=01f912c4& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/auth/All.vue?vue&type=template&id=01f912c4&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/auth/All.vue?vue&type=template&id=01f912c4&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/auth/All.vue?vue&type=template&id=01f912c4& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
        attrs: { title: "Authentication", subtitle: "All pages in one spot!" },
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
                      [_vm._v("Authentication")]
                    ),
                    _vm._v(" "),
                    _c("b-breadcrumb-item", { attrs: { active: "" } }, [
                      _vm._v("All"),
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
      _c("div", { staticClass: "content" }, [
        _c("h2", { staticClass: "content-heading" }, [_vm._v("Original")]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-md-6" },
            [
              _c("router-link", {
                attrs: { to: "/auth/signin", custom: "" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function (ref) {
                      var href = ref.href
                      var navigate = ref.navigate
                      return [
                        _c(
                          "base-block",
                          {
                            attrs: {
                              tag: "a",
                              "content-class": "text-center",
                              rounded: "",
                              "link-shadow": "",
                              href: href,
                            },
                            on: { click: navigate },
                          },
                          [
                            _c("div", { staticClass: "py-5" }, [
                              _c("div", { staticClass: "mb-3" }, [
                                _c("i", {
                                  staticClass:
                                    "fa fa-sign-in-alt fa-2x text-default",
                                }),
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "text-muted" }, [
                                _vm._v("Sign In"),
                              ]),
                            ]),
                          ]
                        ),
                      ]
                    },
                  },
                ]),
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-6" },
            [
              _c("router-link", {
                attrs: { to: "/auth/signup", custom: "" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function (ref) {
                      var href = ref.href
                      var navigate = ref.navigate
                      return [
                        _c(
                          "base-block",
                          {
                            attrs: {
                              tag: "a",
                              "content-class": "text-center",
                              rounded: "",
                              "link-shadow": "",
                              href: href,
                            },
                            on: { click: navigate },
                          },
                          [
                            _c("div", { staticClass: "py-5" }, [
                              _c("div", { staticClass: "mb-3" }, [
                                _c("i", {
                                  staticClass:
                                    "fa fa-user-plus fa-2x text-success",
                                }),
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "text-muted" }, [
                                _vm._v("Sign Up"),
                              ]),
                            ]),
                          ]
                        ),
                      ]
                    },
                  },
                ]),
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-6" },
            [
              _c("router-link", {
                attrs: { to: "/auth/lock", custom: "" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function (ref) {
                      var href = ref.href
                      var navigate = ref.navigate
                      return [
                        _c(
                          "base-block",
                          {
                            attrs: {
                              tag: "a",
                              "content-class": "text-center",
                              rounded: "",
                              "link-shadow": "",
                              href: href,
                            },
                            on: { click: navigate },
                          },
                          [
                            _c("div", { staticClass: "py-5" }, [
                              _c("div", { staticClass: "mb-3" }, [
                                _c("i", {
                                  staticClass: "fa fa-lock fa-2x text-city",
                                }),
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "text-muted" }, [
                                _vm._v("Lock Screen"),
                              ]),
                            ]),
                          ]
                        ),
                      ]
                    },
                  },
                ]),
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-6" },
            [
              _c("router-link", {
                attrs: { to: "/auth/reminder", custom: "" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function (ref) {
                      var href = ref.href
                      var navigate = ref.navigate
                      return [
                        _c(
                          "base-block",
                          {
                            attrs: {
                              tag: "a",
                              "content-class": "text-center",
                              rounded: "",
                              "link-shadow": "",
                              href: href,
                            },
                            on: { click: navigate },
                          },
                          [
                            _c("div", { staticClass: "py-5" }, [
                              _c("div", { staticClass: "mb-3" }, [
                                _c("i", {
                                  staticClass:
                                    "fa fa-life-ring fa-2x text-modern",
                                }),
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "text-muted" }, [
                                _vm._v("Password Reminder"),
                              ]),
                            ]),
                          ]
                        ),
                      ]
                    },
                  },
                ]),
              }),
            ],
            1
          ),
        ]),
        _vm._v(" "),
        _c("h2", { staticClass: "content-heading" }, [_vm._v("Alternative")]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-md-6" },
            [
              _c("router-link", {
                attrs: { to: "/auth/signin2", custom: "" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function (ref) {
                      var href = ref.href
                      var navigate = ref.navigate
                      return [
                        _c(
                          "base-block",
                          {
                            attrs: {
                              tag: "a",
                              "content-class": "text-center",
                              rounded: "",
                              "link-shadow": "",
                              href: href,
                            },
                            on: { click: navigate },
                          },
                          [
                            _c("div", { staticClass: "py-5" }, [
                              _c("div", { staticClass: "mb-3" }, [
                                _c("i", {
                                  staticClass:
                                    "fa fa-sign-in-alt fa-2x text-default",
                                }),
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "text-muted" }, [
                                _vm._v("Sign In 2"),
                              ]),
                            ]),
                          ]
                        ),
                      ]
                    },
                  },
                ]),
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-6" },
            [
              _c("router-link", {
                attrs: { to: "/auth/signup2", custom: "" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function (ref) {
                      var href = ref.href
                      var navigate = ref.navigate
                      return [
                        _c(
                          "base-block",
                          {
                            attrs: {
                              tag: "a",
                              "content-class": "text-center",
                              rounded: "",
                              "link-shadow": "",
                              href: href,
                            },
                            on: { click: navigate },
                          },
                          [
                            _c("div", { staticClass: "py-5" }, [
                              _c("div", { staticClass: "mb-3" }, [
                                _c("i", {
                                  staticClass:
                                    "fa fa-user-plus fa-2x text-success",
                                }),
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "text-muted" }, [
                                _vm._v("Sign Up 2"),
                              ]),
                            ]),
                          ]
                        ),
                      ]
                    },
                  },
                ]),
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-6" },
            [
              _c("router-link", {
                attrs: { to: "/auth/lock2", custom: "" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function (ref) {
                      var href = ref.href
                      var navigate = ref.navigate
                      return [
                        _c(
                          "base-block",
                          {
                            attrs: {
                              tag: "a",
                              "content-class": "text-center",
                              rounded: "",
                              "link-shadow": "",
                              href: href,
                            },
                            on: { click: navigate },
                          },
                          [
                            _c("div", { staticClass: "py-5" }, [
                              _c("div", { staticClass: "mb-3" }, [
                                _c("i", {
                                  staticClass: "fa fa-lock fa-2x text-city",
                                }),
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "text-muted" }, [
                                _vm._v("Lock Screen 2"),
                              ]),
                            ]),
                          ]
                        ),
                      ]
                    },
                  },
                ]),
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-6" },
            [
              _c("router-link", {
                attrs: { to: "/auth/reminder2", custom: "" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function (ref) {
                      var href = ref.href
                      var navigate = ref.navigate
                      return [
                        _c(
                          "base-block",
                          {
                            attrs: {
                              tag: "a",
                              "content-class": "text-center",
                              rounded: "",
                              "link-shadow": "",
                              href: href,
                            },
                            on: { click: navigate },
                          },
                          [
                            _c("div", { staticClass: "py-5" }, [
                              _c("div", { staticClass: "mb-3" }, [
                                _c("i", {
                                  staticClass:
                                    "fa fa-life-ring fa-2x text-modern",
                                }),
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "text-muted" }, [
                                _vm._v("Password Reminder 2"),
                              ]),
                            ]),
                          ]
                        ),
                      ]
                    },
                  },
                ]),
              }),
            ],
            1
          ),
        ]),
        _vm._v(" "),
        _c("h2", { staticClass: "content-heading" }, [_vm._v("Full Page")]),
        _vm._v(" "),
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            { staticClass: "col-md-6" },
            [
              _c("router-link", {
                attrs: { to: "/auth/signin3", custom: "" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function (ref) {
                      var href = ref.href
                      var navigate = ref.navigate
                      return [
                        _c(
                          "base-block",
                          {
                            attrs: {
                              tag: "a",
                              "content-class": "text-center",
                              rounded: "",
                              "link-shadow": "",
                              href: href,
                            },
                            on: { click: navigate },
                          },
                          [
                            _c("div", { staticClass: "py-5" }, [
                              _c("div", { staticClass: "mb-3" }, [
                                _c("i", {
                                  staticClass:
                                    "fa fa-sign-in-alt fa-2x text-default",
                                }),
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "text-muted" }, [
                                _vm._v("Sign In 3"),
                              ]),
                            ]),
                          ]
                        ),
                      ]
                    },
                  },
                ]),
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-6" },
            [
              _c("router-link", {
                attrs: { to: "/auth/signup3", custom: "" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function (ref) {
                      var href = ref.href
                      var navigate = ref.navigate
                      return [
                        _c(
                          "base-block",
                          {
                            attrs: {
                              tag: "a",
                              "content-class": "text-center",
                              rounded: "",
                              "link-shadow": "",
                              href: href,
                            },
                            on: { click: navigate },
                          },
                          [
                            _c("div", { staticClass: "py-5" }, [
                              _c("div", { staticClass: "mb-3" }, [
                                _c("i", {
                                  staticClass:
                                    "fa fa-user-plus fa-2x text-success",
                                }),
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "text-muted" }, [
                                _vm._v("Sign Up 3"),
                              ]),
                            ]),
                          ]
                        ),
                      ]
                    },
                  },
                ]),
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-6" },
            [
              _c("router-link", {
                attrs: { to: "/auth/lock3", custom: "" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function (ref) {
                      var href = ref.href
                      var navigate = ref.navigate
                      return [
                        _c(
                          "base-block",
                          {
                            attrs: {
                              tag: "a",
                              "content-class": "text-center",
                              rounded: "",
                              "link-shadow": "",
                              href: href,
                            },
                            on: { click: navigate },
                          },
                          [
                            _c("div", { staticClass: "py-5" }, [
                              _c("div", { staticClass: "mb-3" }, [
                                _c("i", {
                                  staticClass: "fa fa-lock fa-2x text-city",
                                }),
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "text-muted" }, [
                                _vm._v("Lock Screen 3"),
                              ]),
                            ]),
                          ]
                        ),
                      ]
                    },
                  },
                ]),
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "col-md-6" },
            [
              _c("router-link", {
                attrs: { to: "/auth/reminder3", custom: "" },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function (ref) {
                      var href = ref.href
                      var navigate = ref.navigate
                      return [
                        _c(
                          "base-block",
                          {
                            attrs: {
                              tag: "a",
                              "content-class": "text-center",
                              rounded: "",
                              "link-shadow": "",
                              href: href,
                            },
                            on: { click: navigate },
                          },
                          [
                            _c("div", { staticClass: "py-5" }, [
                              _c("div", { staticClass: "mb-3" }, [
                                _c("i", {
                                  staticClass:
                                    "fa fa-life-ring fa-2x text-modern",
                                }),
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "text-muted" }, [
                                _vm._v("Password Reminder 3"),
                              ]),
                            ]),
                          ]
                        ),
                      ]
                    },
                  },
                ]),
              }),
            ],
            1
          ),
        ]),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);