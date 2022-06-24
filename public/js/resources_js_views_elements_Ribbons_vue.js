"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_elements_Ribbons_vue"],{

/***/ "./resources/js/views/elements/Ribbons.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/elements/Ribbons.vue ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Ribbons_vue_vue_type_template_id_f08538b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ribbons.vue?vue&type=template&id=f08538b8& */ "./resources/js/views/elements/Ribbons.vue?vue&type=template&id=f08538b8&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Ribbons_vue_vue_type_template_id_f08538b8___WEBPACK_IMPORTED_MODULE_0__.render,
  _Ribbons_vue_vue_type_template_id_f08538b8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/elements/Ribbons.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/elements/Ribbons.vue?vue&type=template&id=f08538b8&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/elements/Ribbons.vue?vue&type=template&id=f08538b8& ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ribbons_vue_vue_type_template_id_f08538b8___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ribbons_vue_vue_type_template_id_f08538b8___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Ribbons_vue_vue_type_template_id_f08538b8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Ribbons.vue?vue&type=template&id=f08538b8& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/elements/Ribbons.vue?vue&type=template&id=f08538b8&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/elements/Ribbons.vue?vue&type=template&id=f08538b8&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/elements/Ribbons.vue?vue&type=template&id=f08538b8& ***!
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
          title: "Ribbons",
          subtitle: "Easily add cool ribbons to your blocks.",
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
                      _vm._v("Ribbons"),
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
            _vm._v("Simple Ribbon"),
          ]),
          _vm._v(" "),
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { md: "6", xl: "3" } },
                [
                  _c("base-block", { attrs: { rounded: "", ribbon: "$28" } }, [
                    _c("div", { staticClass: "text-center py-4 push" }, [
                      _c("p", [
                        _c("i", {
                          staticClass: "fab fa-3x fa-html5 text-gray",
                        }),
                      ]),
                      _vm._v(" "),
                      _c("h4", { staticClass: "mb-0" }, [
                        _vm._v("Learn HTML5"),
                      ]),
                    ]),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6", xl: "3" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: {
                        rounded: "",
                        ribbon: "$28",
                        "ribbon-bottom": "",
                      },
                    },
                    [
                      _c("div", { staticClass: "text-center py-4 push" }, [
                        _c("p", [
                          _c("i", {
                            staticClass: "fab fa-3x fa-html5 text-gray",
                          }),
                        ]),
                        _vm._v(" "),
                        _c("h4", { staticClass: "mb-0" }, [
                          _vm._v("Learn HTML5"),
                        ]),
                      ]),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6", xl: "3" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: {
                        rounded: "",
                        ribbon: "$28",
                        "ribbon-bottom": "",
                        "ribbon-left": "",
                      },
                    },
                    [
                      _c("div", { staticClass: "text-center py-4 push" }, [
                        _c("p", [
                          _c("i", {
                            staticClass: "fab fa-3x fa-html5 text-gray",
                          }),
                        ]),
                        _vm._v(" "),
                        _c("h4", { staticClass: "mb-0" }, [
                          _vm._v("Learn HTML5"),
                        ]),
                      ]),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6", xl: "3" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: { rounded: "", ribbon: "$28", "ribbon-left": "" },
                    },
                    [
                      _c("div", { staticClass: "text-center py-4 push" }, [
                        _c("p", [
                          _c("i", {
                            staticClass: "fab fa-3x fa-html5 text-gray",
                          }),
                        ]),
                        _vm._v(" "),
                        _c("h4", { staticClass: "mb-0" }, [
                          _vm._v("Learn HTML5"),
                        ]),
                      ]),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6", xl: "3" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: {
                        rounded: "",
                        ribbon: "$32",
                        "ribbon-variant": "success",
                      },
                    },
                    [
                      _c("div", { staticClass: "text-center py-4 push" }, [
                        _c("p", [
                          _c("i", {
                            staticClass: "fab fa-3x fa-css3 text-gray",
                          }),
                        ]),
                        _vm._v(" "),
                        _c("h4", { staticClass: "mb-0" }, [
                          _vm._v("Discover CSS3"),
                        ]),
                      ]),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6", xl: "3" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: {
                        rounded: "",
                        ribbon: "$32",
                        "ribbon-variant": "info",
                      },
                    },
                    [
                      _c("div", { staticClass: "text-center py-4 push" }, [
                        _c("p", [
                          _c("i", {
                            staticClass: "fab fa-3x fa-css3 text-gray",
                          }),
                        ]),
                        _vm._v(" "),
                        _c("h4", { staticClass: "mb-0" }, [
                          _vm._v("Discover CSS3"),
                        ]),
                      ]),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6", xl: "3" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: {
                        rounded: "",
                        ribbon: "$32",
                        "ribbon-variant": "warning",
                      },
                    },
                    [
                      _c("div", { staticClass: "text-center py-4 push" }, [
                        _c("p", [
                          _c("i", {
                            staticClass: "fab fa-3x fa-css3 text-gray",
                          }),
                        ]),
                        _vm._v(" "),
                        _c("h4", { staticClass: "mb-0" }, [
                          _vm._v("Discover CSS3"),
                        ]),
                      ]),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6", xl: "3" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: {
                        rounded: "",
                        ribbon: "$32",
                        "ribbon-variant": "danger",
                      },
                    },
                    [
                      _c("div", { staticClass: "text-center py-4 push" }, [
                        _c("p", [
                          _c("i", {
                            staticClass: "fab fa-3x fa-css3 text-gray",
                          }),
                        ]),
                        _vm._v(" "),
                        _c("h4", { staticClass: "mb-0" }, [
                          _vm._v("Discover CSS3"),
                        ]),
                      ]),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "base-block",
                    {
                      staticClass: "bg-primary",
                      attrs: {
                        rounded: "",
                        ribbon: "",
                        "ribbon-variant": "glass",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "ribbon",
                          fn: function () {
                            return [
                              _c("i", { staticClass: "fa fa-check mr-1" }),
                              _vm._v(" Crystal\n          "),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("div", { staticClass: "text-center py-6 push" }, [
                        _c("h4", { staticClass: "text-white mb-0" }, [
                          _vm._v("Awesome Color"),
                        ]),
                      ]),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "base-background",
                    { attrs: { image: "/img/photos/photo25.jpg" } },
                    [
                      _c(
                        "base-block",
                        {
                          staticClass: "bg-black-50",
                          attrs: {
                            rounded: "",
                            ribbon: "",
                            "ribbon-variant": "glass",
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "ribbon",
                              fn: function () {
                                return [_c("i", { staticClass: "fa fa-check" })]
                              },
                              proxy: true,
                            },
                          ]),
                        },
                        [
                          _vm._v(" "),
                          _c("div", { staticClass: "text-center py-6 push" }, [
                            _c(
                              "h4",
                              { staticClass: "font-w600 text-white mb-0" },
                              [_vm._v("Awesome Image")]
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
            ],
            1
          ),
          _vm._v(" "),
          _c("h2", { staticClass: "content-heading" }, [
            _vm._v("Bookmark Ribbon"),
          ]),
          _vm._v(" "),
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { md: "6", xl: "3" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: { rounded: "", ribbon: "", "ribbon-bookmark": "" },
                      scopedSlots: _vm._u([
                        {
                          key: "ribbon",
                          fn: function () {
                            return [_c("i", { staticClass: "far fa-heart" })]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("div", { staticClass: "text-center py-4 push" }, [
                        _c("p", [
                          _c("i", { staticClass: "fa fa-3x fa-cog text-gray" }),
                        ]),
                        _vm._v(" "),
                        _c("h4", { staticClass: "mb-0" }, [_vm._v("Settings")]),
                      ]),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6", xl: "3" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: {
                        rounded: "",
                        ribbon: "",
                        "ribbon-bottom": "",
                        "ribbon-bookmark": "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "ribbon",
                          fn: function () {
                            return [_c("i", { staticClass: "far fa-heart" })]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("div", { staticClass: "text-center py-4 push" }, [
                        _c("p", [
                          _c("i", { staticClass: "fa fa-3x fa-cog text-gray" }),
                        ]),
                        _vm._v(" "),
                        _c("h4", { staticClass: "mb-0" }, [_vm._v("Settings")]),
                      ]),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6", xl: "3" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: {
                        rounded: "",
                        ribbon: "",
                        "ribbon-bottom": "",
                        "ribbon-left": "",
                        "ribbon-bookmark": "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "ribbon",
                          fn: function () {
                            return [_c("i", { staticClass: "far fa-heart" })]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("div", { staticClass: "text-center py-4 push" }, [
                        _c("p", [
                          _c("i", { staticClass: "fa fa-3x fa-cog text-gray" }),
                        ]),
                        _vm._v(" "),
                        _c("h4", { staticClass: "mb-0" }, [_vm._v("Settings")]),
                      ]),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6", xl: "3" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: {
                        rounded: "",
                        ribbon: "",
                        "ribbon-left": "",
                        "ribbon-bookmark": "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "ribbon",
                          fn: function () {
                            return [_c("i", { staticClass: "far fa-heart" })]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("div", { staticClass: "text-center py-4 push" }, [
                        _c("p", [
                          _c("i", { staticClass: "fa fa-3x fa-cog text-gray" }),
                        ]),
                        _vm._v(" "),
                        _c("h4", { staticClass: "mb-0" }, [_vm._v("Settings")]),
                      ]),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6", xl: "3" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: {
                        rounded: "",
                        ribbon: "",
                        "ribbon-bookmark": "",
                        "ribbon-variant": "success",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "ribbon",
                          fn: function () {
                            return [_c("i", { staticClass: "far fa-heart" })]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("div", { staticClass: "text-center py-4 push" }, [
                        _c("p", [
                          _c("i", {
                            staticClass: "fa fa-3x fa-wrench text-gray",
                          }),
                        ]),
                        _vm._v(" "),
                        _c("h4", { staticClass: "mb-0" }, [_vm._v("Options")]),
                      ]),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6", xl: "3" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: {
                        rounded: "",
                        ribbon: "",
                        "ribbon-bookmark": "",
                        "ribbon-variant": "info",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "ribbon",
                          fn: function () {
                            return [_c("i", { staticClass: "far fa-heart" })]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("div", { staticClass: "text-center py-4 push" }, [
                        _c("p", [
                          _c("i", {
                            staticClass: "fa fa-3x fa-wrench text-gray",
                          }),
                        ]),
                        _vm._v(" "),
                        _c("h4", { staticClass: "mb-0" }, [_vm._v("Options")]),
                      ]),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6", xl: "3" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: {
                        rounded: "",
                        ribbon: "",
                        "ribbon-bookmark": "",
                        "ribbon-variant": "warning",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "ribbon",
                          fn: function () {
                            return [_c("i", { staticClass: "far fa-heart" })]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("div", { staticClass: "text-center py-4 push" }, [
                        _c("p", [
                          _c("i", {
                            staticClass: "fa fa-3x fa-wrench text-gray",
                          }),
                        ]),
                        _vm._v(" "),
                        _c("h4", { staticClass: "mb-0" }, [_vm._v("Options")]),
                      ]),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6", xl: "3" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: {
                        rounded: "",
                        ribbon: "",
                        "ribbon-bookmark": "",
                        "ribbon-variant": "danger",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "ribbon",
                          fn: function () {
                            return [_c("i", { staticClass: "far fa-heart" })]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("div", { staticClass: "text-center py-4 push" }, [
                        _c("p", [
                          _c("i", {
                            staticClass: "fa fa-3x fa-wrench text-gray",
                          }),
                        ]),
                        _vm._v(" "),
                        _c("h4", { staticClass: "mb-0" }, [_vm._v("Options")]),
                      ]),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "base-block",
                    {
                      staticClass: "bg-primary",
                      attrs: {
                        rounded: "",
                        ribbon: "",
                        "ribbon-bookmark": "",
                        "ribbon-variant": "glass",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "ribbon",
                          fn: function () {
                            return [
                              _c("i", { staticClass: "fa fa-check mr-1" }),
                              _vm._v(" Crystal\n          "),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("div", { staticClass: "text-center py-6 push" }, [
                        _c("h4", { staticClass: "text-white mb-0" }, [
                          _vm._v("Awesome Color"),
                        ]),
                      ]),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "base-background",
                    { attrs: { image: "/img/photos/photo25.jpg" } },
                    [
                      _c(
                        "base-block",
                        {
                          staticClass: "bg-black-50",
                          attrs: {
                            rounded: "",
                            ribbon: "",
                            "ribbon-bookmark": "",
                            "ribbon-variant": "glass",
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "ribbon",
                              fn: function () {
                                return [_c("i", { staticClass: "fa fa-check" })]
                              },
                              proxy: true,
                            },
                          ]),
                        },
                        [
                          _vm._v(" "),
                          _c("div", { staticClass: "text-center py-6 push" }, [
                            _c(
                              "h4",
                              { staticClass: "font-w600 text-white mb-0" },
                              [_vm._v("Awesome Image")]
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
            ],
            1
          ),
          _vm._v(" "),
          _c("h2", { staticClass: "content-heading" }, [
            _vm._v("Modern Ribbon"),
          ]),
          _vm._v(" "),
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { md: "6", xl: "3" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: { rounded: "", ribbon: "", "ribbon-modern": "" },
                      scopedSlots: _vm._u([
                        {
                          key: "ribbon",
                          fn: function () {
                            return [_c("i", { staticClass: "far fa-heart" })]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("div", { staticClass: "text-center py-4 push" }, [
                        _c("p", [
                          _c("i", {
                            staticClass: "far fa-3x fa-copy text-gray",
                          }),
                        ]),
                        _vm._v(" "),
                        _c("h4", { staticClass: "mb-0" }, [_vm._v("Files")]),
                      ]),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6", xl: "3" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: {
                        rounded: "",
                        ribbon: "",
                        "ribbon-bottom": "",
                        "ribbon-modern": "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "ribbon",
                          fn: function () {
                            return [_c("i", { staticClass: "far fa-heart" })]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("div", { staticClass: "text-center py-4 push" }, [
                        _c("p", [
                          _c("i", {
                            staticClass: "far fa-3x fa-copy text-gray",
                          }),
                        ]),
                        _vm._v(" "),
                        _c("h4", { staticClass: "mb-0" }, [_vm._v("Files")]),
                      ]),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6", xl: "3" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: {
                        rounded: "",
                        ribbon: "",
                        "ribbon-bottom": "",
                        "ribbon-left": "",
                        "ribbon-modern": "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "ribbon",
                          fn: function () {
                            return [_c("i", { staticClass: "far fa-heart" })]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("div", { staticClass: "text-center py-4 push" }, [
                        _c("p", [
                          _c("i", {
                            staticClass: "far fa-3x fa-copy text-gray",
                          }),
                        ]),
                        _vm._v(" "),
                        _c("h4", { staticClass: "mb-0" }, [_vm._v("Files")]),
                      ]),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6", xl: "3" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: {
                        rounded: "",
                        ribbon: "",
                        "ribbon-left": "",
                        "ribbon-modern": "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "ribbon",
                          fn: function () {
                            return [_c("i", { staticClass: "far fa-heart" })]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("div", { staticClass: "text-center py-4 push" }, [
                        _c("p", [
                          _c("i", {
                            staticClass: "far fa-3x fa-copy text-gray",
                          }),
                        ]),
                        _vm._v(" "),
                        _c("h4", { staticClass: "mb-0" }, [_vm._v("Files")]),
                      ]),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6", xl: "3" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: {
                        rounded: "",
                        ribbon: "",
                        "ribbon-modern": "",
                        "ribbon-variant": "success",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "ribbon",
                          fn: function () {
                            return [
                              _c("i", { staticClass: "fa fa-fw fa-heart" }),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("div", { staticClass: "text-center py-4 push" }, [
                        _c("p", [
                          _c("i", {
                            staticClass: "far fa-3x fa-image text-gray",
                          }),
                        ]),
                        _vm._v(" "),
                        _c("h4", { staticClass: "mb-0" }, [_vm._v("Photos")]),
                      ]),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6", xl: "3" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: {
                        rounded: "",
                        ribbon: "",
                        "ribbon-modern": "",
                        "ribbon-variant": "info",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "ribbon",
                          fn: function () {
                            return [
                              _c("i", { staticClass: "fa fa-fw fa-heart" }),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("div", { staticClass: "text-center py-4 push" }, [
                        _c("p", [
                          _c("i", {
                            staticClass: "far fa-3x fa-image text-gray",
                          }),
                        ]),
                        _vm._v(" "),
                        _c("h4", { staticClass: "mb-0" }, [_vm._v("Photos")]),
                      ]),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6", xl: "3" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: {
                        rounded: "",
                        ribbon: "",
                        "ribbon-modern": "",
                        "ribbon-variant": "warning",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "ribbon",
                          fn: function () {
                            return [
                              _c("i", { staticClass: "fa fa-fw fa-heart" }),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("div", { staticClass: "text-center py-4 push" }, [
                        _c("p", [
                          _c("i", {
                            staticClass: "far fa-3x fa-image text-gray",
                          }),
                        ]),
                        _vm._v(" "),
                        _c("h4", { staticClass: "mb-0" }, [_vm._v("Photos")]),
                      ]),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6", xl: "3" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: {
                        rounded: "",
                        ribbon: "",
                        "ribbon-modern": "",
                        "ribbon-variant": "danger",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "ribbon",
                          fn: function () {
                            return [
                              _c("i", { staticClass: "fa fa-fw fa-heart" }),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("div", { staticClass: "text-center py-4 push" }, [
                        _c("p", [
                          _c("i", {
                            staticClass: "far fa-3x fa-image text-gray",
                          }),
                        ]),
                        _vm._v(" "),
                        _c("h4", { staticClass: "mb-0" }, [_vm._v("Photos")]),
                      ]),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "base-block",
                    {
                      staticClass: "bg-primary",
                      attrs: {
                        rounded: "",
                        ribbon: "",
                        "ribbon-modern": "",
                        "ribbon-variant": "glass",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "ribbon",
                          fn: function () {
                            return [
                              _c("i", { staticClass: "fa fa-check mr-1" }),
                              _vm._v(" Crystal\n          "),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("div", { staticClass: "text-center py-6 push" }, [
                        _c("h4", { staticClass: "text-white mb-0" }, [
                          _vm._v("Awesome Color"),
                        ]),
                      ]),
                    ]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "base-background",
                    { attrs: { image: "/img/photos/photo25.jpg" } },
                    [
                      _c(
                        "base-block",
                        {
                          staticClass: "bg-black-50",
                          attrs: {
                            rounded: "",
                            ribbon: "",
                            "ribbon-bottom": "",
                            "ribbon-modern": "",
                            "ribbon-variant": "glass",
                          },
                          scopedSlots: _vm._u([
                            {
                              key: "ribbon",
                              fn: function () {
                                return [_c("i", { staticClass: "fa fa-check" })]
                              },
                              proxy: true,
                            },
                          ]),
                        },
                        [
                          _vm._v(" "),
                          _c("div", { staticClass: "text-center py-6 push" }, [
                            _c(
                              "h4",
                              { staticClass: "font-w600 text-white mb-0" },
                              [_vm._v("Awesome Image")]
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