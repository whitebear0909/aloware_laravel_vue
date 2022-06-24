"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_blocks_Themed_vue"],{

/***/ "./resources/js/views/blocks/Themed.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/blocks/Themed.vue ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Themed_vue_vue_type_template_id_315187d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Themed.vue?vue&type=template&id=315187d6& */ "./resources/js/views/blocks/Themed.vue?vue&type=template&id=315187d6&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Themed_vue_vue_type_template_id_315187d6___WEBPACK_IMPORTED_MODULE_0__.render,
  _Themed_vue_vue_type_template_id_315187d6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/blocks/Themed.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/blocks/Themed.vue?vue&type=template&id=315187d6&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/blocks/Themed.vue?vue&type=template&id=315187d6& ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Themed_vue_vue_type_template_id_315187d6___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Themed_vue_vue_type_template_id_315187d6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Themed_vue_vue_type_template_id_315187d6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Themed.vue?vue&type=template&id=315187d6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/blocks/Themed.vue?vue&type=template&id=315187d6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/blocks/Themed.vue?vue&type=template&id=315187d6&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/blocks/Themed.vue?vue&type=template&id=315187d6& ***!
  \********************************************************************************************************************************************************************************************************************/
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
          title: "Block Options",
          subtitle: "Colorful blocks to match with your design.",
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
                      [_vm._v("Blocks")]
                    ),
                    _vm._v(" "),
                    _c("b-breadcrumb-item", { attrs: { active: "" } }, [
                      _vm._v("Themed"),
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
            _vm._v("Themed Square"),
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
                      attrs: { title: "Primary", themed: "" },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Primary Light",
                        "header-class": "bg-primary-light",
                        themed: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Primary Dark",
                        "header-class": "bg-primary-dark",
                        themed: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Primary Darker",
                        "header-class": "bg-primary-darker",
                        themed: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Success",
                        "header-class": "bg-success",
                        themed: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Info",
                        "header-class": "bg-info",
                        themed: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Warning",
                        "header-class": "bg-warning",
                        themed: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Danger",
                        "header-class": "bg-danger",
                        themed: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Gray",
                        "header-class": "bg-gray",
                        themed: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Gray Dark",
                        "header-class": "bg-muted",
                        themed: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Gray Darker",
                        "header-class": "bg-gray-darker",
                        themed: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Black",
                        "header-class": "bg-black",
                        themed: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Default",
                        "header-class": "bg-default",
                        themed: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Default Light",
                        "header-class": "bg-default-light",
                        themed: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Default Dark",
                        "header-class": "bg-default-dark",
                        themed: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Default Darker",
                        "header-class": "bg-default-darker",
                        themed: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Amethyst",
                        "header-class": "bg-amethyst",
                        themed: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Amethyst Light",
                        "header-class": "bg-amethyst-light",
                        themed: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Amethyst Dark",
                        "header-class": "bg-amethyst-dark",
                        themed: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Amethyst Darker",
                        "header-class": "bg-amethyst-darker",
                        themed: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "City",
                        "header-class": "bg-city",
                        themed: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "City Light",
                        "header-class": "bg-city-light",
                        themed: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "City Dark",
                        "header-class": "bg-city-dark",
                        themed: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "City Darker",
                        "header-class": "bg-city-darker",
                        themed: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Flat",
                        "header-class": "bg-flat",
                        themed: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Flat Light",
                        "header-class": "bg-flat-light",
                        themed: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Flat Dark",
                        "header-class": "bg-flat-dark",
                        themed: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Flat Darker",
                        "header-class": "bg-flat-darker",
                        themed: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Modern",
                        "header-class": "bg-modern",
                        themed: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Modern Light",
                        "header-class": "bg-modern-light",
                        themed: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Modern Dark",
                        "header-class": "bg-modern-dark",
                        themed: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Modern Darker",
                        "header-class": "bg-modern-darker",
                        themed: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Smooth",
                        "header-class": "bg-smooth",
                        themed: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Smooth Light",
                        "header-class": "bg-smooth-light",
                        themed: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Smooth Dark",
                        "header-class": "bg-smooth-dark",
                        themed: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Smooth Darker",
                        "header-class": "bg-smooth-darker",
                        themed: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
                      ]),
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
            _vm._v("Themed Rounded"),
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
                      attrs: { title: "Primary", themed: "" },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Primary Light",
                        "header-class": "bg-primary-light",
                        themed: "",
                        rounded: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Primary Dark",
                        "header-class": "bg-primary-dark",
                        themed: "",
                        rounded: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Primary Darker",
                        "header-class": "bg-primary-darker",
                        themed: "",
                        rounded: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Success",
                        "header-class": "bg-success",
                        themed: "",
                        rounded: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Info",
                        "header-class": "bg-info",
                        themed: "",
                        rounded: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Warning",
                        "header-class": "bg-warning",
                        themed: "",
                        rounded: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Danger",
                        "header-class": "bg-danger",
                        themed: "",
                        rounded: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Gray",
                        "header-class": "bg-gray",
                        themed: "",
                        rounded: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Gray Dark",
                        "header-class": "bg-muted",
                        themed: "",
                        rounded: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Gray Darker",
                        "header-class": "bg-gray-darker",
                        themed: "",
                        rounded: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Black",
                        "header-class": "bg-black",
                        themed: "",
                        rounded: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Default",
                        "header-class": "bg-default",
                        themed: "",
                        rounded: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Default Light",
                        "header-class": "bg-default-light",
                        themed: "",
                        rounded: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Default Dark",
                        "header-class": "bg-default-dark",
                        themed: "",
                        rounded: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Default Darker",
                        "header-class": "bg-default-darker",
                        themed: "",
                        rounded: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Amethyst",
                        "header-class": "bg-amethyst",
                        themed: "",
                        rounded: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Amethyst Light",
                        "header-class": "bg-amethyst-light",
                        themed: "",
                        rounded: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Amethyst Dark",
                        "header-class": "bg-amethyst-dark",
                        themed: "",
                        rounded: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Amethyst Darker",
                        "header-class": "bg-amethyst-darker",
                        themed: "",
                        rounded: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "City",
                        "header-class": "bg-city",
                        themed: "",
                        rounded: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "City Light",
                        "header-class": "bg-city-light",
                        themed: "",
                        rounded: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "City Dark",
                        "header-class": "bg-city-dark",
                        themed: "",
                        rounded: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "City Darker",
                        "header-class": "bg-city-darker",
                        themed: "",
                        rounded: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Flat",
                        "header-class": "bg-flat",
                        themed: "",
                        rounded: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Flat Light",
                        "header-class": "bg-flat-light",
                        themed: "",
                        rounded: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Flat Dark",
                        "header-class": "bg-flat-dark",
                        themed: "",
                        rounded: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Flat Darker",
                        "header-class": "bg-flat-darker",
                        themed: "",
                        rounded: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Modern",
                        "header-class": "bg-modern",
                        themed: "",
                        rounded: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Modern Light",
                        "header-class": "bg-modern-light",
                        themed: "",
                        rounded: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Modern Dark",
                        "header-class": "bg-modern-dark",
                        themed: "",
                        rounded: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Modern Darker",
                        "header-class": "bg-modern-darker",
                        themed: "",
                        rounded: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Smooth",
                        "header-class": "bg-smooth",
                        themed: "",
                        rounded: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Smooth Light",
                        "header-class": "bg-smooth-light",
                        themed: "",
                        rounded: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Smooth Dark",
                        "header-class": "bg-smooth-dark",
                        themed: "",
                        rounded: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
                        title: "Smooth Darker",
                        "header-class": "bg-smooth-darker",
                        themed: "",
                        rounded: "",
                      },
                      scopedSlots: _vm._u([
                        {
                          key: "options",
                          fn: function () {
                            return [
                              _c(
                                "button",
                                {
                                  staticClass: "btn-block-option",
                                  attrs: { type: "button" },
                                },
                                [_c("i", { staticClass: "si si-settings" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("p", [
                        _vm._v("\n            Block’s content..\n          "),
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);