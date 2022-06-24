"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_elements_ColorThemes_vue"],{

/***/ "./resources/js/views/elements/ColorThemes.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/elements/ColorThemes.vue ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ColorThemes_vue_vue_type_template_id_f6162258___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ColorThemes.vue?vue&type=template&id=f6162258& */ "./resources/js/views/elements/ColorThemes.vue?vue&type=template&id=f6162258&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _ColorThemes_vue_vue_type_template_id_f6162258___WEBPACK_IMPORTED_MODULE_0__.render,
  _ColorThemes_vue_vue_type_template_id_f6162258___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/elements/ColorThemes.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/elements/ColorThemes.vue?vue&type=template&id=f6162258&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/elements/ColorThemes.vue?vue&type=template&id=f6162258& ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorThemes_vue_vue_type_template_id_f6162258___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorThemes_vue_vue_type_template_id_f6162258___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ColorThemes_vue_vue_type_template_id_f6162258___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ColorThemes.vue?vue&type=template&id=f6162258& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/elements/ColorThemes.vue?vue&type=template&id=f6162258&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/elements/ColorThemes.vue?vue&type=template&id=f6162258&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/elements/ColorThemes.vue?vue&type=template&id=f6162258& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
          title: "Color Themes",
          subtitle:
            "Carefully picked colors that will inspire and make you more productive.",
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
                      _vm._v("Color Themes"),
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
          _c("h2", { staticClass: "content-heading" }, [
            _vm._v("Preview Color Theme"),
          ]),
          _vm._v(" "),
          _c(
            "base-block",
            { attrs: { rounded: "", "content-full": "" } },
            [
              _c(
                "b-row",
                { staticClass: "text-center" },
                [
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", xl: "2" } },
                    [
                      _c(
                        "a",
                        {
                          staticClass:
                            "item item-link-pop item-circle bg-default text-white-75 mx-auto mb-3",
                          attrs: { href: "#" },
                          on: {
                            click: function ($event) {
                              $event.preventDefault()
                              return _vm.$store.commit("setColorTheme", {
                                theme: "",
                              })
                            },
                          },
                        },
                        [_c("i", { staticClass: "si si-drop" })]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "font-w600" }, [
                        _vm._v("Default"),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", xl: "2" } },
                    [
                      _c(
                        "a",
                        {
                          staticClass:
                            "item item-link-pop item-circle bg-amethyst text-white-75 mx-auto mb-3",
                          attrs: { href: "#" },
                          on: {
                            click: function ($event) {
                              $event.preventDefault()
                              return _vm.$store.commit("setColorTheme", {
                                theme: "amethyst",
                              })
                            },
                          },
                        },
                        [_c("i", { staticClass: "si si-drop" })]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "font-w600" }, [
                        _vm._v("Amethyst"),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", xl: "2" } },
                    [
                      _c(
                        "a",
                        {
                          staticClass:
                            "item item-link-pop item-circle bg-city text-white-75 mx-auto mb-3",
                          attrs: { href: "#" },
                          on: {
                            click: function ($event) {
                              $event.preventDefault()
                              return _vm.$store.commit("setColorTheme", {
                                theme: "city",
                              })
                            },
                          },
                        },
                        [_c("i", { staticClass: "si si-drop" })]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "font-w600" }, [_vm._v("City")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", xl: "2" } },
                    [
                      _c(
                        "a",
                        {
                          staticClass:
                            "item item-link-pop item-circle bg-flat text-white-75 mx-auto mb-3",
                          attrs: { href: "#" },
                          on: {
                            click: function ($event) {
                              $event.preventDefault()
                              return _vm.$store.commit("setColorTheme", {
                                theme: "flat",
                              })
                            },
                          },
                        },
                        [_c("i", { staticClass: "si si-drop" })]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "font-w600" }, [_vm._v("Flat")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", xl: "2" } },
                    [
                      _c(
                        "a",
                        {
                          staticClass:
                            "item item-link-pop item-circle bg-modern text-white-75 mx-auto mb-3",
                          attrs: { href: "#" },
                          on: {
                            click: function ($event) {
                              $event.preventDefault()
                              return _vm.$store.commit("setColorTheme", {
                                theme: "modern",
                              })
                            },
                          },
                        },
                        [_c("i", { staticClass: "si si-drop" })]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "font-w600" }, [
                        _vm._v("Modern"),
                      ]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", xl: "2" } },
                    [
                      _c(
                        "a",
                        {
                          staticClass:
                            "item item-link-pop item-circle bg-smooth text-white-75 mx-auto mb-3",
                          attrs: { href: "#" },
                          on: {
                            click: function ($event) {
                              $event.preventDefault()
                              return _vm.$store.commit("setColorTheme", {
                                theme: "smooth",
                              })
                            },
                          },
                        },
                        [_c("i", { staticClass: "si si-drop" })]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "font-w600" }, [
                        _vm._v("Smooth"),
                      ]),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "text-center" },
                [
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", xl: "2", "offset-xl": "1" },
                    },
                    [
                      _c(
                        "base-layout-modifier",
                        {
                          staticClass:
                            "item item-link-pop item-circle bg-sidebar-light text-muted mx-auto mb-3",
                          attrs: { tag: "a", action: "sidebarStyleLight" },
                        },
                        [_c("i", { staticClass: "si si-drop" })]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "font-w600" }, [
                        _vm._v("Light Sidebar"),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", xl: "2" } },
                    [
                      _c(
                        "base-layout-modifier",
                        {
                          staticClass:
                            "item item-link-pop item-circle bg-sidebar-dark text-white-75 mx-auto mb-3",
                          attrs: { tag: "a", action: "sidebarStyleDark" },
                        },
                        [_c("i", { staticClass: "si si-drop" })]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "font-w600" }, [
                        _vm._v("Dark Sidebar"),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", xl: "2", "offset-xl": "2" },
                    },
                    [
                      _c(
                        "base-layout-modifier",
                        {
                          staticClass:
                            "item item-link-pop item-circle bg-header-light text-muted mx-auto mb-3",
                          attrs: { tag: "a", action: "headerStyleLight" },
                        },
                        [_c("i", { staticClass: "si si-drop" })]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "font-w600" }, [
                        _vm._v("Light Header"),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", xl: "2" } },
                    [
                      _c(
                        "base-layout-modifier",
                        {
                          staticClass:
                            "item item-link-pop item-circle bg-header-dark text-white-75 mx-auto mb-3",
                          attrs: { tag: "a", action: "headerStyleDark" },
                        },
                        [_c("i", { staticClass: "si si-drop" })]
                      ),
                      _vm._v(" "),
                      _c("div", { staticClass: "font-w600" }, [
                        _vm._v("Dark Header"),
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
          _vm._m(0),
          _vm._v(" "),
          _c(
            "base-block",
            { attrs: { rounded: "", "content-full": "" } },
            [
              _c(
                "b-row",
                { staticClass: "text-center" },
                [
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", md: "4" } },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-primary-lighter mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-primary-lighter")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", md: "4" } },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-primary-light mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-primary-light")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", md: "4" } },
                    [
                      _c("div", {
                        staticClass: "item item-circle bg-primary mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-primary")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "3" },
                    },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-primary-dark mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-primary-dark")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "3" },
                    },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-primary-darker mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-primary-darker")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "3" },
                    },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-primary-op mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-primary-op")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "3" },
                    },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-primary-dark-op mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-primary-dark-op")]),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "text-center" },
                [
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "2" },
                    },
                    [
                      _c("div", { staticClass: "text-primary-lighter mb-3" }, [
                        _vm._v("Primary Lighter"),
                      ]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".text-primary-lighter")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "2" },
                    },
                    [
                      _c("div", { staticClass: "text-primary-light mb-3" }, [
                        _vm._v("Primary Light"),
                      ]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".text-primary-light")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", md: "4" } },
                    [
                      _c("div", { staticClass: "text-primary mb-3" }, [
                        _vm._v("Primary"),
                      ]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".text-primary")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "2" },
                    },
                    [
                      _c("div", { staticClass: "text-primary-dark mb-3" }, [
                        _vm._v("Primary Dark"),
                      ]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".text-primary-dark")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "2" },
                    },
                    [
                      _c("div", { staticClass: "text-primary-darker mb-3" }, [
                        _vm._v("Primary Darker"),
                      ]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".text-primary-darker")]),
                    ]
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("h2", { staticClass: "content-heading" }, [
            _vm._v("Default Theme"),
          ]),
          _vm._v(" "),
          _c(
            "base-block",
            { attrs: { rounded: "", "content-full": "" } },
            [
              _c(
                "b-row",
                { staticClass: "text-center" },
                [
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", md: "4" } },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-default-lighter mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-default-lighter")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", md: "4" } },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-default-light mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-default-light")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", md: "4" } },
                    [
                      _c("div", {
                        staticClass: "item item-circle bg-default mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-default")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "3" },
                    },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-default-dark mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-default-dark")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "3" },
                    },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-default-darker mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-default-darker")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "3" },
                    },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-default-op mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-default-op")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "3" },
                    },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-default-dark-op mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-default-dark-op")]),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "text-center" },
                [
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "2" },
                    },
                    [
                      _c("div", { staticClass: "text-default-lighter mb-3" }, [
                        _vm._v("Default Lighter"),
                      ]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".text-default-lighter")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "2" },
                    },
                    [
                      _c("div", { staticClass: "text-default-light mb-3" }, [
                        _vm._v("Default Light"),
                      ]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".text-default-light")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", md: "4" } },
                    [
                      _c("div", { staticClass: "text-default mb-3" }, [
                        _vm._v("Default Main"),
                      ]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".text-default")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "2" },
                    },
                    [
                      _c("div", { staticClass: "text-default-dark mb-3" }, [
                        _vm._v("Default Dark"),
                      ]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".text-default-dark")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "2" },
                    },
                    [
                      _c("div", { staticClass: "text-default-darker mb-3" }, [
                        _vm._v("Default Darker"),
                      ]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".text-default-darker")]),
                    ]
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("h2", { staticClass: "content-heading" }, [
            _vm._v("Amethyst Theme"),
          ]),
          _vm._v(" "),
          _c(
            "base-block",
            { attrs: { rounded: "", "content-full": "" } },
            [
              _c(
                "b-row",
                { staticClass: "text-center" },
                [
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", md: "4" } },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-amethyst-lighter mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-amethyst-lighter")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", md: "4" } },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-amethyst-light mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-amethyst-light")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", md: "4" } },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-amethyst mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-amethyst")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "3" },
                    },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-amethyst-dark mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-amethyst-dark")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "3" },
                    },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-amethyst-darker mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-amethyst-darker")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "3" },
                    },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-amethyst-op mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-amethyst-op")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "3" },
                    },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-amethyst-dark-op mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-amethyst-dark-op")]),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "text-center" },
                [
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "2" },
                    },
                    [
                      _c("div", { staticClass: "text-amethyst-lighter mb-3" }, [
                        _vm._v("Amethyst Lighter"),
                      ]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".text-amethyst-lighter")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "2" },
                    },
                    [
                      _c("div", { staticClass: "text-amethyst-light mb-3" }, [
                        _vm._v("Amethyst Light"),
                      ]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".text-amethyst-light")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", md: "4" } },
                    [
                      _c("div", { staticClass: "text-amethyst mb-3" }, [
                        _vm._v("Amethyst Main"),
                      ]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".text-amethyst")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "2" },
                    },
                    [
                      _c("div", { staticClass: "text-amethyst-dark mb-3" }, [
                        _vm._v("Amethyst Dark"),
                      ]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".text-amethyst-dark")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "2" },
                    },
                    [
                      _c("div", { staticClass: "text-amethyst-darker mb-3" }, [
                        _vm._v("Amethyst Darker"),
                      ]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".text-amethyst-darker")]),
                    ]
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("h2", { staticClass: "content-heading" }, [_vm._v("City Theme")]),
          _vm._v(" "),
          _c(
            "base-block",
            { attrs: { rounded: "", "content-full": "" } },
            [
              _c(
                "b-row",
                { staticClass: "text-center" },
                [
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", md: "4" } },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-city-lighter mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-city-lighter")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", md: "4" } },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-city-light mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-city-light")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", md: "4" } },
                    [
                      _c("div", {
                        staticClass: "item item-circle bg-city mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-city")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "3" },
                    },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-city-dark mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-city-dark")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "3" },
                    },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-city-darker mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-city-darker")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "3" },
                    },
                    [
                      _c("div", {
                        staticClass: "item item-circle bg-city-op mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-city-op")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "3" },
                    },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-city-dark-op mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-city-dark-op")]),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "text-center" },
                [
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "2" },
                    },
                    [
                      _c("div", { staticClass: "text-city-lighter mb-3" }, [
                        _vm._v("City Lighter"),
                      ]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".text-city-lighter")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "2" },
                    },
                    [
                      _c("div", { staticClass: "text-city-light mb-3" }, [
                        _vm._v("City Light"),
                      ]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".text-city-light")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", md: "4" } },
                    [
                      _c("div", { staticClass: "text-city mb-3" }, [
                        _vm._v("City Main"),
                      ]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".text-city")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "2" },
                    },
                    [
                      _c("div", { staticClass: "text-city-dark mb-3" }, [
                        _vm._v("City Dark"),
                      ]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".text-city-dark")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "2" },
                    },
                    [
                      _vm._v(">\n          "),
                      _c("div", { staticClass: "text-city-darker mb-3" }, [
                        _vm._v("City Darker"),
                      ]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".text-city-darker")]),
                    ]
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("h2", { staticClass: "content-heading" }, [_vm._v("Flat Theme")]),
          _vm._v(" "),
          _c(
            "base-block",
            { attrs: { rounded: "", "content-full": "" } },
            [
              _c(
                "b-row",
                { staticClass: "text-center" },
                [
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", md: "4" } },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-flat-lighter mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-flat-lighter")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", md: "4" } },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-flat-light mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-flat-light")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", md: "4" } },
                    [
                      _c("div", {
                        staticClass: "item item-circle bg-flat mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-flat")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "3" },
                    },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-flat-dark mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-flat-dark")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "3" },
                    },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-flat-darker mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-flat-darker")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "3" },
                    },
                    [
                      _c("div", {
                        staticClass: "item item-circle bg-flat-op mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-flat-op")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "3" },
                    },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-flat-dark-op mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-flat-dark-op")]),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "text-center" },
                [
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "2" },
                    },
                    [
                      _c("div", { staticClass: "text-flat-lighter mb-3" }, [
                        _vm._v("Flat Lighter"),
                      ]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".text-flat-lighter")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "2" },
                    },
                    [
                      _c("div", { staticClass: "text-flat-light mb-3" }, [
                        _vm._v("Flat Light"),
                      ]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".text-flat-light")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", md: "4" } },
                    [
                      _c("div", { staticClass: "text-flat mb-3" }, [
                        _vm._v("Flat Main"),
                      ]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".text-flat")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "2" },
                    },
                    [
                      _c("div", { staticClass: "text-flat-dark mb-3" }, [
                        _vm._v("Flat Dark"),
                      ]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".text-flat-dark")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "2" },
                    },
                    [
                      _c("div", { staticClass: "text-flat-darker mb-3" }, [
                        _vm._v("Flat Darker"),
                      ]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".text-flat-darker")]),
                    ]
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("h2", { staticClass: "content-heading" }, [
            _vm._v("Modern Theme"),
          ]),
          _vm._v(" "),
          _c(
            "base-block",
            { attrs: { rounded: "", "content-full": "" } },
            [
              _c(
                "b-row",
                { staticClass: "text-center" },
                [
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", md: "4" } },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-modern-lighter mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-modern-lighter")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", md: "4" } },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-modern-light mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-modern-light")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", md: "4" } },
                    [
                      _c("div", {
                        staticClass: "item item-circle bg-modern mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-modern")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "3" },
                    },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-modern-dark mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-modern-dark")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "3" },
                    },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-modern-darker mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-modern-darker")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "3" },
                    },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-modern-op mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-modern-op")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "3" },
                    },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-modern-dark-op mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-modern-dark-op")]),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "text-center" },
                [
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "2" },
                    },
                    [
                      _c("div", { staticClass: "text-modern-lighter mb-3" }, [
                        _vm._v("Modern Lighter"),
                      ]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".text-modern-lighter")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "2" },
                    },
                    [
                      _c("div", { staticClass: "text-modern-light mb-3" }, [
                        _vm._v("Modern Light"),
                      ]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".text-modern-light")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", md: "4" } },
                    [
                      _c("div", { staticClass: "text-modern mb-3" }, [
                        _vm._v("Modern Main"),
                      ]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".text-modern")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "2" },
                    },
                    [
                      _c("div", { staticClass: "text-modern-dark mb-3" }, [
                        _vm._v("Modern Dark"),
                      ]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".text-modern-dark")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "2" },
                    },
                    [
                      _c("div", { staticClass: "text-modern-darker mb-3" }, [
                        _vm._v("Modern Darker"),
                      ]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".text-modern-darker")]),
                    ]
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("h2", { staticClass: "content-heading" }, [
            _vm._v("Smooth Theme"),
          ]),
          _vm._v(" "),
          _c(
            "base-block",
            { attrs: { rounded: "", "content-full": "" } },
            [
              _c(
                "b-row",
                { staticClass: "text-center" },
                [
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", md: "4" } },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-smooth-lighter mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-smooth-lighter")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", md: "4" } },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-smooth-light mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-smooth-light")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", md: "4" } },
                    [
                      _c("div", {
                        staticClass: "item item-circle bg-smooth mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-smooth")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "3" },
                    },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-smooth-dark mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-smooth-dark")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "3" },
                    },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-smooth-darker mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-smooth-darker")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "3" },
                    },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-smooth-op mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-smooth-op")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "3" },
                    },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-smooth-dark-op mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-smooth-dark-op")]),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "text-center" },
                [
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "2" },
                    },
                    [
                      _c("div", { staticClass: "text-smooth-lighter mb-3" }, [
                        _vm._v("Smooth Lighter"),
                      ]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".text-smooth-lighter")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "2" },
                    },
                    [
                      _c("div", { staticClass: "text-smooth-light mb-3" }, [
                        _vm._v("Smooth Light"),
                      ]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".text-smooth-light")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", md: "4" } },
                    [
                      _c("div", { staticClass: "text-smooth mb-3" }, [
                        _vm._v("Smooth Main"),
                      ]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".text-smooth")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "2" },
                    },
                    [
                      _c("div", { staticClass: "text-smooth-dark mb-3" }, [
                        _vm._v("Smooth Dark"),
                      ]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".text-smooth-dark")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    {
                      staticClass: "py-4",
                      attrs: { cols: "6", md: "4", xl: "2" },
                    },
                    [
                      _c("div", { staticClass: "text-smooth-darker mb-3" }, [
                        _vm._v("Smooth Darker"),
                      ]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".text-smooth-darker")]),
                    ]
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("h2", { staticClass: "content-heading" }, [
            _vm._v("Contextual Colors"),
          ]),
          _vm._v(" "),
          _c(
            "base-block",
            { attrs: { rounded: "", "content-full": "" } },
            [
              _c(
                "b-row",
                { staticClass: "text-center" },
                [
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", md: "3" } },
                    [
                      _c("div", {
                        staticClass: "item item-circle bg-success mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-success")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", md: "3" } },
                    [
                      _c("div", {
                        staticClass: "item item-circle bg-info mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-info")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", md: "3" } },
                    [
                      _c("div", {
                        staticClass: "item item-circle bg-warning mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-warning")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", md: "3" } },
                    [
                      _c("div", {
                        staticClass: "item item-circle bg-danger mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-danger")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", md: "3" } },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-success-light mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-success-light")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", md: "3" } },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-info-light mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-info-light")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", md: "3" } },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-warning-light mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-warning-light")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", md: "3" } },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-danger-light mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-danger-light")]),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: " text-center" },
                [
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", md: "3" } },
                    [
                      _c("div", { staticClass: "text-success mb-3" }, [
                        _vm._v("Success"),
                      ]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".text-success")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", md: "3" } },
                    [
                      _c("div", { staticClass: "text-info mb-3" }, [
                        _vm._v("Info"),
                      ]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".text-info")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", md: "3" } },
                    [
                      _c("div", { staticClass: "text-warning mb-3" }, [
                        _vm._v("Warning"),
                      ]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".text-warning")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", md: "3" } },
                    [
                      _c("div", { staticClass: "text-danger mb-3" }, [
                        _vm._v("Danger"),
                      ]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".text-danger")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", md: "3" } },
                    [
                      _c("div", { staticClass: "text-success-light mb-3" }, [
                        _vm._v("Success Light"),
                      ]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".text-success-light")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", md: "3" } },
                    [
                      _c("div", { staticClass: "text-info-light mb-3" }, [
                        _vm._v("Info Light"),
                      ]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".text-info-light")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", md: "3" } },
                    [
                      _c("div", { staticClass: "text-warning-light mb-3" }, [
                        _vm._v("Warning Light"),
                      ]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".text-warning-light")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", md: "3" } },
                    [
                      _c("div", { staticClass: "text-danger-light mb-3" }, [
                        _vm._v("Danger Light"),
                      ]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".text-danger-light")]),
                    ]
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("h2", { staticClass: "content-heading" }, [_vm._v("Gray Colors")]),
          _vm._v(" "),
          _c(
            "base-block",
            { attrs: { rounded: "", "content-full": "" } },
            [
              _c(
                "b-row",
                { staticClass: "text-center" },
                [
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", xl: "2" } },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-gray-lighter mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-gray-lighter")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", xl: "2" } },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-gray-light mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-gray-light")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c("b-col", { staticClass: "col-xl-4 py-4" }, [
                    _c("div", {
                      staticClass: "item item-circle bg-gray mx-auto mb-3",
                    }),
                    _vm._v(" "),
                    _c("code", [_vm._v(".bg-gray")]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", xl: "2" } },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-gray-dark mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-gray-dark")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", xl: "2" } },
                    [
                      _c("div", {
                        staticClass:
                          "item item-circle bg-gray-darker mx-auto mb-3",
                      }),
                      _vm._v(" "),
                      _c("code", [_vm._v(".bg-gray-darker")]),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("hr"),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "text-center" },
                [
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", xl: "2" } },
                    [
                      _c("div", { staticClass: "text-gray-lighter mb-3" }, [
                        _vm._v("Gray Lighter"),
                      ]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".text-gray-lighter")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", xl: "2" } },
                    [
                      _c("div", { staticClass: "text-gray-light mb-3" }, [
                        _vm._v("Gray Light"),
                      ]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".text-gray-light")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c("b-col", { staticClass: "col-xl-4 py-4" }, [
                    _c("div", { staticClass: "text-gray mb-3" }, [
                      _vm._v("Gray"),
                    ]),
                    _vm._v(" "),
                    _c("code", [_vm._v(".text-gray")]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", xl: "2" } },
                    [
                      _c("div", { staticClass: "text-gray-dark mb-3" }, [
                        _vm._v("Gray Dark"),
                      ]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".text-gray-dark")]),
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "py-4", attrs: { cols: "6", xl: "2" } },
                    [
                      _c("div", { staticClass: "text-gray-darker mb-3" }, [
                        _vm._v("Gray Darker"),
                      ]),
                      _vm._v(" "),
                      _c("code", [_vm._v(".text-gray-darker")]),
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
      ),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { staticClass: "content-heading" }, [
      _vm._v("Primary Colors "),
      _c("small", [_vm._v("Colors of the active color theme")]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);