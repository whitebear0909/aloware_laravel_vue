"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_blocks_Styles_vue"],{

/***/ "./resources/js/views/blocks/Styles.vue":
/*!**********************************************!*\
  !*** ./resources/js/views/blocks/Styles.vue ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Styles_vue_vue_type_template_id_6070b488___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Styles.vue?vue&type=template&id=6070b488& */ "./resources/js/views/blocks/Styles.vue?vue&type=template&id=6070b488&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Styles_vue_vue_type_template_id_6070b488___WEBPACK_IMPORTED_MODULE_0__.render,
  _Styles_vue_vue_type_template_id_6070b488___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/blocks/Styles.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/blocks/Styles.vue?vue&type=template&id=6070b488&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/blocks/Styles.vue?vue&type=template&id=6070b488& ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Styles_vue_vue_type_template_id_6070b488___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Styles_vue_vue_type_template_id_6070b488___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Styles_vue_vue_type_template_id_6070b488___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Styles.vue?vue&type=template&id=6070b488& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/blocks/Styles.vue?vue&type=template&id=6070b488&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/blocks/Styles.vue?vue&type=template&id=6070b488&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/blocks/Styles.vue?vue&type=template&id=6070b488& ***!
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
          title: "Blocks",
          subtitle: "Solid foundation and integral part of the design.",
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
                      _vm._v("Styles"),
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
            _vm._v("Square Blocks"),
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
                    { attrs: { title: "Title", subtitle: "Subtitle" } },
                    [
                      _c("p", [
                        _vm._v("\n            Simple block..\n          "),
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
                        title: "Title",
                        subtitle: "Subtitle",
                        "header-bg": "",
                      },
                    },
                    [
                      _c("p", [
                        _vm._v(
                          "\n            With header background..\n          "
                        ),
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
                        title: "Title",
                        subtitle: "Subtitle",
                        bordered: "",
                      },
                    },
                    [
                      _c("p", [
                        _vm._v("\n            Bordered block..\n          "),
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
                        title: "Title",
                        subtitle: "Subtitle",
                        bordered: "",
                        "header-bg": "",
                      },
                    },
                    [
                      _c("p", [
                        _vm._v(
                          "\n            Bordered block with header background..\n          "
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
          _vm._v(" "),
          _c("h2", { staticClass: "content-heading" }, [
            _vm._v("Rounded Blocks"),
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
                      attrs: {
                        title: "Title",
                        subtitle: "Subtitle",
                        rounded: "",
                      },
                    },
                    [
                      _c("p", [
                        _vm._v("\n            Simple block..\n          "),
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
                        title: "Title",
                        subtitle: "Subtitle",
                        rounded: "",
                        "header-bg": "",
                      },
                    },
                    [
                      _c("p", [
                        _vm._v(
                          "\n            With header background..\n          "
                        ),
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
                        title: "Title",
                        subtitle: "Subtitle",
                        rounded: "",
                        bordered: "",
                      },
                    },
                    [
                      _c("p", [
                        _vm._v("\n            Bordered block..\n          "),
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
                        title: "Title",
                        subtitle: "Subtitle",
                        rounded: "",
                        bordered: "",
                        "header-bg": "",
                      },
                    },
                    [
                      _c("p", [
                        _vm._v(
                          "\n            Bordered block with header background..\n          "
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
          _vm._v(" "),
          _c("h2", { staticClass: "content-heading" }, [
            _vm._v("Transparent Blocks"),
          ]),
          _vm._v(" "),
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: {
                        title: "Title",
                        subtitle: "Subtitle",
                        transparent: "",
                      },
                    },
                    [
                      _c("p", [
                        _vm._v(
                          "\n            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.\n          "
                        ),
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
                      attrs: {
                        title: "Title",
                        subtitle: "Subtitle",
                        transparent: "",
                      },
                    },
                    [
                      _c("p", [
                        _vm._v(
                          "\n            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.\n          "
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
          _vm._v(" "),
          _c("h2", { staticClass: "content-heading" }, [
            _vm._v("Block Effects"),
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
                      attrs: {
                        title: "Shadow",
                        subtitle: "FX",
                        "fx-shadow": "",
                      },
                    },
                    [
                      _c("p", [
                        _vm._v(
                          "\n            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.\n          "
                        ),
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
                    { attrs: { title: "Pop", subtitle: "FX", "fx-pop": "" } },
                    [
                      _c("p", [
                        _vm._v(
                          "\n            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.\n          "
                        ),
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
                        title: "Rotate Right",
                        subtitle: "FX",
                        "fx-rotate-right": "",
                      },
                    },
                    [
                      _c("p", [
                        _vm._v(
                          "\n            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.\n          "
                        ),
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
                        title: "Rotate Left",
                        subtitle: "FX",
                        "fx-rotate-left": "",
                      },
                    },
                    [
                      _c("p", [
                        _vm._v(
                          "\n            Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.\n          "
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
          _vm._v(" "),
          _c("h2", { staticClass: "content-heading" }, [_vm._v("Link Blocks")]),
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
                      attrs: {
                        title: "Title",
                        subtitle: "Subtitle",
                        tag: "a",
                        href: "javascript:void(0)",
                      },
                    },
                    [
                      _c("p", [
                        _vm._v(
                          "\n            Default opacity hover effect..\n          "
                        ),
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
                        title: "Title",
                        subtitle: "Subtitle",
                        tag: "a",
                        href: "javascript:void(0)",
                        "link-rotate": "",
                      },
                    },
                    [
                      _c("p", [
                        _vm._v(
                          "\n            Rotate hover effect..\n          "
                        ),
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
                        title: "Title",
                        subtitle: "Subtitle",
                        tag: "a",
                        href: "javascript:void(0)",
                        "link-pop": "",
                      },
                    },
                    [
                      _c("p", [
                        _vm._v("\n            Pop hover effect..\n          "),
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
                        title: "Title",
                        subtitle: "Subtitle",
                        tag: "a",
                        href: "javascript:void(0)",
                        "link-shadow": "",
                      },
                    },
                    [
                      _c("p", [
                        _vm._v(
                          "\n            Shadow hover effect..\n          "
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
          _vm._v(" "),
          _c("h2", { staticClass: "content-heading" }, [
            _vm._v("Router Link Blocks"),
          ]),
          _vm._v(" "),
          _c(
            "b-row",
            [
              _c(
                "b-col",
                { attrs: { md: "6", xl: "3" } },
                [
                  _c("router-link", {
                    attrs: { to: "/backend/dashboard", custom: "" },
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
                                  title: "Dashboard",
                                  tag: "a",
                                  href: href,
                                },
                                on: { click: navigate },
                              },
                              [
                                _c("p", [
                                  _vm._v(
                                    "\n              Go to Dashboard\n            "
                                  ),
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
                "b-col",
                { attrs: { md: "6", xl: "3" } },
                [
                  _c("router-link", {
                    attrs: { to: "/", custom: "" },
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
                                  title: "Landing",
                                  tag: "a",
                                  href: href,
                                },
                                on: { click: navigate },
                              },
                              [
                                _c("p", [
                                  _vm._v(
                                    "\n              Go to Landing\n            "
                                  ),
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
                "b-col",
                { attrs: { md: "6", xl: "3" } },
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
                                  title: "Sign In",
                                  subtitle: "Auth",
                                  tag: "a",
                                  href: href,
                                },
                                on: { click: navigate },
                              },
                              [
                                _c("p", [
                                  _vm._v(
                                    "\n              Go to Sign In Page\n            "
                                  ),
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
                "b-col",
                { attrs: { md: "6", xl: "3" } },
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
                                  title: "Sign Up",
                                  subtitle: "Auth",
                                  tag: "a",
                                  href: href,
                                },
                                on: { click: navigate },
                              },
                              [
                                _c("p", [
                                  _vm._v(
                                    "\n              Go to Sign Up Page\n            "
                                  ),
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