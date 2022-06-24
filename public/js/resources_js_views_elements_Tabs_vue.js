"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_elements_Tabs_vue"],{

/***/ "./resources/js/views/elements/Tabs.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/elements/Tabs.vue ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tabs_vue_vue_type_template_id_8bb72772___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tabs.vue?vue&type=template&id=8bb72772& */ "./resources/js/views/elements/Tabs.vue?vue&type=template&id=8bb72772&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Tabs_vue_vue_type_template_id_8bb72772___WEBPACK_IMPORTED_MODULE_0__.render,
  _Tabs_vue_vue_type_template_id_8bb72772___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/elements/Tabs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/elements/Tabs.vue?vue&type=template&id=8bb72772&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/elements/Tabs.vue?vue&type=template&id=8bb72772& ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_template_id_8bb72772___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_template_id_8bb72772___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tabs_vue_vue_type_template_id_8bb72772___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tabs.vue?vue&type=template&id=8bb72772& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/elements/Tabs.vue?vue&type=template&id=8bb72772&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/elements/Tabs.vue?vue&type=template&id=8bb72772&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/elements/Tabs.vue?vue&type=template&id=8bb72772& ***!
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
          title: "Tabs",
          subtitle: "Generate tabbed interfaces with ease.",
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
                      _vm._v("Tabs"),
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
          _c("h2", { staticClass: "content-heading" }, [_vm._v("Block Tabs")]),
          _vm._v(" "),
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { lg: "6" } },
                [
                  _c(
                    "b-tabs",
                    {
                      staticClass: "block",
                      attrs: {
                        "nav-class": "nav-tabs-block",
                        "content-class": "block-content",
                      },
                    },
                    [
                      _c("b-tab", { attrs: { title: "Home", active: "" } }, [
                        _c("h4", { staticClass: "font-w400" }, [
                          _vm._v("Home Content"),
                        ]),
                        _vm._v(" "),
                        _c("p", [_vm._v("...")]),
                      ]),
                      _vm._v(" "),
                      _c("b-tab", { attrs: { title: "Profile" } }, [
                        _c("h4", { staticClass: "font-w400" }, [
                          _vm._v("Profile Content"),
                        ]),
                        _vm._v(" "),
                        _c("p", [_vm._v("...")]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        {
                          attrs: { "title-item-class": "ml-auto" },
                          scopedSlots: _vm._u([
                            {
                              key: "title",
                              fn: function () {
                                return [
                                  _c("i", { staticClass: "si si-settings" }),
                                ]
                              },
                              proxy: true,
                            },
                          ]),
                        },
                        [
                          _vm._v(" "),
                          _c("h4", { staticClass: "font-w400" }, [
                            _vm._v("Settings Content"),
                          ]),
                          _vm._v(" "),
                          _c("p", [_vm._v("...")]),
                        ]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-tabs",
                    {
                      staticClass: "block",
                      attrs: {
                        "nav-class": "nav-tabs-alt",
                        "content-class": "block-content",
                      },
                    },
                    [
                      _c("b-tab", { attrs: { title: "Home", active: "" } }, [
                        _c("h4", { staticClass: "font-w400" }, [
                          _vm._v("Home Content"),
                        ]),
                        _vm._v(" "),
                        _c("p", [_vm._v("...")]),
                      ]),
                      _vm._v(" "),
                      _c("b-tab", { attrs: { title: "Profile" } }, [
                        _c("h4", { staticClass: "font-w400" }, [
                          _vm._v("Profile Content"),
                        ]),
                        _vm._v(" "),
                        _c("p", [_vm._v("...")]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        {
                          attrs: { "title-item-class": "ml-auto" },
                          scopedSlots: _vm._u([
                            {
                              key: "title",
                              fn: function () {
                                return [
                                  _c("i", { staticClass: "si si-settings" }),
                                ]
                              },
                              proxy: true,
                            },
                          ]),
                        },
                        [
                          _vm._v(" "),
                          _c("h4", { staticClass: "font-w400" }, [
                            _vm._v("Settings Content"),
                          ]),
                          _vm._v(" "),
                          _c("p", [_vm._v("...")]),
                        ]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { lg: "6" } },
                [
                  _c(
                    "b-tabs",
                    {
                      staticClass: "block",
                      attrs: {
                        "nav-class": "nav-tabs-block justify-content-end",
                        "content-class": "block-content",
                      },
                    },
                    [
                      _c(
                        "b-tab",
                        {
                          attrs: { "title-item-class": "mr-auto" },
                          scopedSlots: _vm._u([
                            {
                              key: "title",
                              fn: function () {
                                return [
                                  _c("i", { staticClass: "si si-settings" }),
                                ]
                              },
                              proxy: true,
                            },
                          ]),
                        },
                        [
                          _vm._v(" "),
                          _c("h4", { staticClass: "font-w400" }, [
                            _vm._v("Settings Content"),
                          ]),
                          _vm._v(" "),
                          _c("p", [_vm._v("...")]),
                        ]
                      ),
                      _vm._v(" "),
                      _c("b-tab", { attrs: { title: "Profile" } }, [
                        _c("h4", { staticClass: "font-w400" }, [
                          _vm._v("Profile Content"),
                        ]),
                        _vm._v(" "),
                        _c("p", [_vm._v("...")]),
                      ]),
                      _vm._v(" "),
                      _c("b-tab", { attrs: { title: "Home", active: "" } }, [
                        _c("h4", { staticClass: "font-w400" }, [
                          _vm._v("Home Content"),
                        ]),
                        _vm._v(" "),
                        _c("p", [_vm._v("...")]),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-tabs",
                    {
                      staticClass: "block",
                      attrs: {
                        "nav-class": "nav-tabs-alt justify-content-end",
                        "content-class": "block-content",
                      },
                    },
                    [
                      _c(
                        "b-tab",
                        {
                          attrs: { "title-item-class": "mr-auto" },
                          scopedSlots: _vm._u([
                            {
                              key: "title",
                              fn: function () {
                                return [
                                  _c("i", { staticClass: "si si-settings" }),
                                ]
                              },
                              proxy: true,
                            },
                          ]),
                        },
                        [
                          _vm._v(" "),
                          _c("h4", { staticClass: "font-w400" }, [
                            _vm._v("Settings Content"),
                          ]),
                          _vm._v(" "),
                          _c("p", [_vm._v("...")]),
                        ]
                      ),
                      _vm._v(" "),
                      _c("b-tab", { attrs: { title: "Profile" } }, [
                        _c("h4", { staticClass: "font-w400" }, [
                          _vm._v("Profile Content"),
                        ]),
                        _vm._v(" "),
                        _c("p", [_vm._v("...")]),
                      ]),
                      _vm._v(" "),
                      _c("b-tab", { attrs: { title: "Home", active: "" } }, [
                        _c("h4", { staticClass: "font-w400" }, [
                          _vm._v("Home Content"),
                        ]),
                        _vm._v(" "),
                        _c("p", [_vm._v("...")]),
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
          _c("h2", { staticClass: "content-heading" }, [
            _vm._v("Tabs with Animation"),
          ]),
          _vm._v(" "),
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { lg: "6" } },
                [
                  _c(
                    "b-tabs",
                    {
                      staticClass: "block",
                      attrs: {
                        "nav-class": "nav-tabs-block",
                        "content-class": "block-content overflow-hidden",
                      },
                    },
                    [
                      _c("b-tab", { attrs: { title: "Home", active: "" } }, [
                        _c("h4", { staticClass: "font-w400" }, [
                          _vm._v("Home Content"),
                        ]),
                        _vm._v(" "),
                        _c("p", [_vm._v("Content fades in..")]),
                      ]),
                      _vm._v(" "),
                      _c("b-tab", { attrs: { title: "Profile" } }, [
                        _c("h4", { staticClass: "font-w400" }, [
                          _vm._v("Profile Content"),
                        ]),
                        _vm._v(" "),
                        _c("p", [_vm._v("Content fades in..")]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        {
                          attrs: { "title-item-class": "ml-auto" },
                          scopedSlots: _vm._u([
                            {
                              key: "title",
                              fn: function () {
                                return [
                                  _c("i", { staticClass: "si si-settings" }),
                                ]
                              },
                              proxy: true,
                            },
                          ]),
                        },
                        [
                          _vm._v(" "),
                          _c("h4", { staticClass: "font-w400" }, [
                            _vm._v("Settings Content"),
                          ]),
                          _vm._v(" "),
                          _c("p", [_vm._v("Content fades in..")]),
                        ]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-tabs",
                    {
                      staticClass: "block",
                      attrs: {
                        "nav-class": "nav-tabs-block",
                        "content-class": "block-content overflow-hidden",
                      },
                    },
                    [
                      _c(
                        "b-tab",
                        {
                          staticClass: "fade-left",
                          attrs: { title: "Home", active: "" },
                        },
                        [
                          _c("h4", { staticClass: "font-w400" }, [
                            _vm._v("Home Content"),
                          ]),
                          _vm._v(" "),
                          _c("p", [_vm._v("Content slides in to the left..")]),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        {
                          staticClass: "fade-left",
                          attrs: { title: "Profile" },
                        },
                        [
                          _c("h4", { staticClass: "font-w400" }, [
                            _vm._v("Profile Content"),
                          ]),
                          _vm._v(" "),
                          _c("p", [_vm._v("Content slides in to the left..")]),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        {
                          staticClass: "fade-left",
                          attrs: { "title-item-class": "ml-auto" },
                          scopedSlots: _vm._u([
                            {
                              key: "title",
                              fn: function () {
                                return [
                                  _c("i", { staticClass: "si si-settings" }),
                                ]
                              },
                              proxy: true,
                            },
                          ]),
                        },
                        [
                          _vm._v(" "),
                          _c("h4", { staticClass: "font-w400" }, [
                            _vm._v("Settings Content"),
                          ]),
                          _vm._v(" "),
                          _c("p", [_vm._v("Content slides in to the left..")]),
                        ]
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { lg: "6" } },
                [
                  _c(
                    "b-tabs",
                    {
                      staticClass: "block",
                      attrs: {
                        "nav-class": "nav-tabs-block",
                        "content-class": "block-content overflow-hidden",
                      },
                    },
                    [
                      _c(
                        "b-tab",
                        {
                          staticClass: "fade-up",
                          attrs: { title: "Home", active: "" },
                        },
                        [
                          _c("h4", { staticClass: "font-w400" }, [
                            _vm._v("Home Content"),
                          ]),
                          _vm._v(" "),
                          _c("p", [_vm._v("Content slides up..")]),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        { staticClass: "fade-up", attrs: { title: "Profile" } },
                        [
                          _c("h4", { staticClass: "font-w400" }, [
                            _vm._v("Profile Content"),
                          ]),
                          _vm._v(" "),
                          _c("p", [_vm._v("Content slides up..")]),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        {
                          staticClass: "fade-up",
                          attrs: { "title-item-class": "ml-auto" },
                          scopedSlots: _vm._u([
                            {
                              key: "title",
                              fn: function () {
                                return [
                                  _c("i", { staticClass: "si si-settings" }),
                                ]
                              },
                              proxy: true,
                            },
                          ]),
                        },
                        [
                          _vm._v(" "),
                          _c("h4", { staticClass: "font-w400" }, [
                            _vm._v("Settings Content"),
                          ]),
                          _vm._v(" "),
                          _c("p", [_vm._v("Content slides up..")]),
                        ]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-tabs",
                    {
                      staticClass: "block",
                      attrs: {
                        "nav-class": "nav-tabs-block",
                        "content-class": "block-content overflow-hidden",
                      },
                    },
                    [
                      _c(
                        "b-tab",
                        {
                          staticClass: "fade-right",
                          attrs: { title: "Home", active: "" },
                        },
                        [
                          _c("h4", { staticClass: "font-w400" }, [
                            _vm._v("Home Content"),
                          ]),
                          _vm._v(" "),
                          _c("p", [_vm._v("Content slides in to the right..")]),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        {
                          staticClass: "fade-right",
                          attrs: { title: "Profile" },
                        },
                        [
                          _c("h4", { staticClass: "font-w400" }, [
                            _vm._v("Profile Content"),
                          ]),
                          _vm._v(" "),
                          _c("p", [_vm._v("Content slides in to the right..")]),
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tab",
                        {
                          staticClass: "fade-right",
                          attrs: { "title-item-class": "ml-auto" },
                          scopedSlots: _vm._u([
                            {
                              key: "title",
                              fn: function () {
                                return [
                                  _c("i", { staticClass: "si si-settings" }),
                                ]
                              },
                              proxy: true,
                            },
                          ]),
                        },
                        [
                          _vm._v(" "),
                          _c("h4", { staticClass: "font-w400" }, [
                            _vm._v("Settings Content"),
                          ]),
                          _vm._v(" "),
                          _c("p", [_vm._v("Content slides in to the right..")]),
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