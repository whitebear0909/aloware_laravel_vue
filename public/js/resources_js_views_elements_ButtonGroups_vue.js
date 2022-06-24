"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_elements_ButtonGroups_vue"],{

/***/ "./resources/js/views/elements/ButtonGroups.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/elements/ButtonGroups.vue ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ButtonGroups_vue_vue_type_template_id_3993636f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ButtonGroups.vue?vue&type=template&id=3993636f& */ "./resources/js/views/elements/ButtonGroups.vue?vue&type=template&id=3993636f&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _ButtonGroups_vue_vue_type_template_id_3993636f___WEBPACK_IMPORTED_MODULE_0__.render,
  _ButtonGroups_vue_vue_type_template_id_3993636f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/elements/ButtonGroups.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/elements/ButtonGroups.vue?vue&type=template&id=3993636f&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/elements/ButtonGroups.vue?vue&type=template&id=3993636f& ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonGroups_vue_vue_type_template_id_3993636f___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonGroups_vue_vue_type_template_id_3993636f___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ButtonGroups_vue_vue_type_template_id_3993636f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ButtonGroups.vue?vue&type=template&id=3993636f& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/elements/ButtonGroups.vue?vue&type=template&id=3993636f&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/elements/ButtonGroups.vue?vue&type=template&id=3993636f&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/elements/ButtonGroups.vue?vue&type=template&id=3993636f& ***!
  \****************************************************************************************************************************************************************************************************************************/
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
          title: "Button Groups",
          subtitle: "Group a series of buttons together on a single line.",
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
                      _vm._v("Button Groups"),
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
          _c("h2", { staticClass: "content-heading" }, [_vm._v("Groups")]),
          _vm._v(" "),
          _c(
            "base-block",
            { attrs: { rounded: "", title: "Horizontal" } },
            [
              _c("p", { staticClass: "font-size-sm text-muted" }, [
                _vm._v(
                  "\n        Group a series of buttons together on a single line with the button group\n      "
                ),
              ]),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push" },
                [
                  _c("b-col", { attrs: { sm: "6", xl: "4" } }, [
                    _c(
                      "div",
                      { staticClass: "mb-3" },
                      [
                        _c(
                          "b-button-group",
                          [
                            _c("b-button", { attrs: { variant: "primary" } }, [
                              _vm._v("Left"),
                            ]),
                            _vm._v(" "),
                            _c("b-button", { attrs: { variant: "primary" } }, [
                              _vm._v("Middle"),
                            ]),
                            _vm._v(" "),
                            _c("b-button", { attrs: { variant: "primary" } }, [
                              _vm._v("Right"),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "mb-3" },
                      [
                        _c(
                          "b-button-group",
                          [
                            _c(
                              "b-button",
                              { attrs: { variant: "secondary" } },
                              [_vm._v("Left")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { variant: "secondary" } },
                              [_vm._v("Middle")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { variant: "secondary" } },
                              [_vm._v("Right")]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "mb-3" },
                      [
                        _c(
                          "b-button-group",
                          [
                            _c("b-button", { attrs: { variant: "info" } }, [
                              _vm._v("Left"),
                            ]),
                            _vm._v(" "),
                            _c("b-button", { attrs: { variant: "info" } }, [
                              _vm._v("Middle"),
                            ]),
                            _vm._v(" "),
                            _c("b-button", { attrs: { variant: "info" } }, [
                              _vm._v("Right"),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "mb-3" },
                      [
                        _c(
                          "b-button-group",
                          [
                            _c("b-button", { attrs: { variant: "success" } }, [
                              _vm._v("Left"),
                            ]),
                            _vm._v(" "),
                            _c("b-button", { attrs: { variant: "success" } }, [
                              _vm._v("Middle"),
                            ]),
                            _vm._v(" "),
                            _c("b-button", { attrs: { variant: "success" } }, [
                              _vm._v("Right"),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "mb-3" },
                      [
                        _c(
                          "b-button-group",
                          [
                            _c("b-button", { attrs: { variant: "warning" } }, [
                              _vm._v("Left"),
                            ]),
                            _vm._v(" "),
                            _c("b-button", { attrs: { variant: "warning" } }, [
                              _vm._v("Middle"),
                            ]),
                            _vm._v(" "),
                            _c("b-button", { attrs: { variant: "warning" } }, [
                              _vm._v("Right"),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "mb-3" },
                      [
                        _c(
                          "b-button-group",
                          [
                            _c("b-button", { attrs: { variant: "danger" } }, [
                              _vm._v("Left"),
                            ]),
                            _vm._v(" "),
                            _c("b-button", { attrs: { variant: "danger" } }, [
                              _vm._v("Middle"),
                            ]),
                            _vm._v(" "),
                            _c("b-button", { attrs: { variant: "danger" } }, [
                              _vm._v("Right"),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "mb-3" },
                      [
                        _c(
                          "b-button-group",
                          [
                            _c("b-button", { attrs: { variant: "dark" } }, [
                              _vm._v("Left"),
                            ]),
                            _vm._v(" "),
                            _c("b-button", { attrs: { variant: "dark" } }, [
                              _vm._v("Middle"),
                            ]),
                            _vm._v(" "),
                            _c("b-button", { attrs: { variant: "dark" } }, [
                              _vm._v("Right"),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "mb-3" },
                      [
                        _c(
                          "b-button-group",
                          [
                            _c("b-button", { attrs: { variant: "light" } }, [
                              _vm._v("Left"),
                            ]),
                            _vm._v(" "),
                            _c("b-button", { attrs: { variant: "light" } }, [
                              _vm._v("Middle"),
                            ]),
                            _vm._v(" "),
                            _c("b-button", { attrs: { variant: "light" } }, [
                              _vm._v("Right"),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ]),
                  _vm._v(" "),
                  _c("b-col", { attrs: { sm: "6", xl: "4" } }, [
                    _c(
                      "div",
                      { staticClass: "mb-3" },
                      [
                        _c(
                          "b-button-group",
                          [
                            _c(
                              "b-button",
                              { attrs: { variant: "alt-primary" } },
                              [_vm._v("Left")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { variant: "alt-primary" } },
                              [_vm._v("Middle")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { variant: "alt-primary" } },
                              [_vm._v("Right")]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "mb-3" },
                      [
                        _c(
                          "b-button-group",
                          [
                            _c(
                              "b-button",
                              { attrs: { variant: "alt-secondary" } },
                              [_vm._v("Left")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { variant: "alt-secondary" } },
                              [_vm._v("Middle")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { variant: "alt-secondary" } },
                              [_vm._v("Right")]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "mb-3" },
                      [
                        _c(
                          "b-button-group",
                          [
                            _c("b-button", { attrs: { variant: "alt-info" } }, [
                              _vm._v("Left"),
                            ]),
                            _vm._v(" "),
                            _c("b-button", { attrs: { variant: "alt-info" } }, [
                              _vm._v("Middle"),
                            ]),
                            _vm._v(" "),
                            _c("b-button", { attrs: { variant: "alt-info" } }, [
                              _vm._v("Right"),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "mb-3" },
                      [
                        _c(
                          "b-button-group",
                          [
                            _c(
                              "b-button",
                              { attrs: { variant: "alt-success" } },
                              [_vm._v("Left")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { variant: "alt-success" } },
                              [_vm._v("Middle")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { variant: "alt-success" } },
                              [_vm._v("Right")]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "mb-3" },
                      [
                        _c(
                          "b-button-group",
                          [
                            _c(
                              "b-button",
                              { attrs: { variant: "alt-warning" } },
                              [_vm._v("Left")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { variant: "alt-warning" } },
                              [_vm._v("Middle")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { variant: "alt-warning" } },
                              [_vm._v("Right")]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "mb-3" },
                      [
                        _c(
                          "b-button-group",
                          [
                            _c(
                              "b-button",
                              { attrs: { variant: "alt-danger" } },
                              [_vm._v("Left")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { variant: "alt-danger" } },
                              [_vm._v("Middle")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { variant: "alt-danger" } },
                              [_vm._v("Right")]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "mb-3" },
                      [
                        _c(
                          "b-button-group",
                          [
                            _c("b-button", { attrs: { variant: "alt-dark" } }, [
                              _vm._v("Left"),
                            ]),
                            _vm._v(" "),
                            _c("b-button", { attrs: { variant: "alt-dark" } }, [
                              _vm._v("Middle"),
                            ]),
                            _vm._v(" "),
                            _c("b-button", { attrs: { variant: "alt-dark" } }, [
                              _vm._v("Right"),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "mb-3" },
                      [
                        _c(
                          "b-button-group",
                          [
                            _c(
                              "b-button",
                              { attrs: { variant: "alt-light" } },
                              [_vm._v("Left")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { variant: "alt-light" } },
                              [_vm._v("Middle")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { variant: "alt-light" } },
                              [_vm._v("Right")]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ]),
                  _vm._v(" "),
                  _c("b-col", { attrs: { sm: "6", xl: "4" } }, [
                    _c(
                      "div",
                      { staticClass: "mb-3" },
                      [
                        _c(
                          "b-button-group",
                          [
                            _c(
                              "b-button",
                              { attrs: { variant: "outline-primary" } },
                              [_vm._v("Left")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { variant: "outline-primary" } },
                              [_vm._v("Middle")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { variant: "outline-primary" } },
                              [_vm._v("Right")]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "mb-3" },
                      [
                        _c(
                          "b-button-group",
                          [
                            _c(
                              "b-button",
                              { attrs: { variant: "outline-secondary" } },
                              [_vm._v("Left")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { variant: "outline-secondary" } },
                              [_vm._v("Middle")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { variant: "outline-secondary" } },
                              [_vm._v("Right")]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "mb-3" },
                      [
                        _c(
                          "b-button-group",
                          [
                            _c(
                              "b-button",
                              { attrs: { variant: "outline-info" } },
                              [_vm._v("Left")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { variant: "outline-info" } },
                              [_vm._v("Middle")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { variant: "outline-info" } },
                              [_vm._v("Right")]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "mb-3" },
                      [
                        _c(
                          "b-button-group",
                          [
                            _c(
                              "b-button",
                              { attrs: { variant: "outline-success" } },
                              [_vm._v("Left")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { variant: "outline-success" } },
                              [_vm._v("Middle")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { variant: "outline-success" } },
                              [_vm._v("Right")]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "mb-3" },
                      [
                        _c(
                          "b-button-group",
                          [
                            _c(
                              "b-button",
                              { attrs: { variant: "outline-warning" } },
                              [_vm._v("Left")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { variant: "outline-warning" } },
                              [_vm._v("Middle")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { variant: "outline-warning" } },
                              [_vm._v("Right")]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "mb-3" },
                      [
                        _c(
                          "b-button-group",
                          [
                            _c(
                              "b-button",
                              { attrs: { variant: "outline-danger" } },
                              [_vm._v("Left")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { variant: "outline-danger" } },
                              [_vm._v("Middle")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { variant: "outline-danger" } },
                              [_vm._v("Right")]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "mb-3" },
                      [
                        _c(
                          "b-button-group",
                          [
                            _c(
                              "b-button",
                              { attrs: { variant: "outline-dark" } },
                              [_vm._v("Left")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { variant: "outline-dark" } },
                              [_vm._v("Middle")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { variant: "outline-dark" } },
                              [_vm._v("Right")]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "mb-3" },
                      [
                        _c(
                          "b-button-group",
                          [
                            _c(
                              "b-button",
                              { attrs: { variant: "outline-light" } },
                              [_vm._v("Left")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { variant: "outline-light" } },
                              [_vm._v("Middle")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { variant: "outline-light" } },
                              [_vm._v("Right")]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "base-block",
            { attrs: { rounded: "", title: "Sizes" } },
            [
              _c("p", { staticClass: "font-size-sm text-muted" }, [
                _vm._v(
                  "\n        You can easily have a small or large size for all button group variations\n      "
                ),
              ]),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push" },
                [
                  _c("b-col", { attrs: { sm: "6", xl: "4" } }, [
                    _c(
                      "div",
                      { staticClass: "mb-3" },
                      [
                        _c(
                          "b-button-group",
                          { attrs: { size: "sm" } },
                          [
                            _c("b-button", { attrs: { variant: "primary" } }, [
                              _vm._v("Left"),
                            ]),
                            _vm._v(" "),
                            _c("b-button", { attrs: { variant: "primary" } }, [
                              _vm._v("Middle"),
                            ]),
                            _vm._v(" "),
                            _c("b-button", { attrs: { variant: "primary" } }, [
                              _vm._v("Right"),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "mb-3" },
                      [
                        _c(
                          "b-button-group",
                          { attrs: { size: "lg" } },
                          [
                            _c("b-button", { attrs: { variant: "primary" } }, [
                              _vm._v("Left"),
                            ]),
                            _vm._v(" "),
                            _c("b-button", { attrs: { variant: "primary" } }, [
                              _vm._v("Middle"),
                            ]),
                            _vm._v(" "),
                            _c("b-button", { attrs: { variant: "primary" } }, [
                              _vm._v("Right"),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "mb-3" },
                      [
                        _c(
                          "b-button-group",
                          { attrs: { size: "sm", vertical: "" } },
                          [
                            _c("b-button", { attrs: { variant: "primary" } }, [
                              _vm._v("Left"),
                            ]),
                            _vm._v(" "),
                            _c("b-button", { attrs: { variant: "primary" } }, [
                              _vm._v("Middle"),
                            ]),
                            _vm._v(" "),
                            _c("b-button", { attrs: { variant: "primary" } }, [
                              _vm._v("Right"),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "mb-3" },
                      [
                        _c(
                          "b-button-group",
                          { attrs: { size: "lg", vertical: "" } },
                          [
                            _c("b-button", { attrs: { variant: "primary" } }, [
                              _vm._v("Left"),
                            ]),
                            _vm._v(" "),
                            _c("b-button", { attrs: { variant: "primary" } }, [
                              _vm._v("Middle"),
                            ]),
                            _vm._v(" "),
                            _c("b-button", { attrs: { variant: "primary" } }, [
                              _vm._v("Right"),
                            ]),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ]),
                  _vm._v(" "),
                  _c("b-col", { attrs: { sm: "6", xl: "4" } }, [
                    _c(
                      "div",
                      { staticClass: "mb-3" },
                      [
                        _c(
                          "b-button-group",
                          { attrs: { size: "sm" } },
                          [
                            _c(
                              "b-button",
                              { attrs: { variant: "alt-secondary" } },
                              [_vm._v("Left")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { variant: "alt-secondary" } },
                              [_vm._v("Middle")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { variant: "alt-secondary" } },
                              [_vm._v("Right")]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "mb-3" },
                      [
                        _c(
                          "b-button-group",
                          { attrs: { size: "lg" } },
                          [
                            _c(
                              "b-button",
                              { attrs: { variant: "alt-secondary" } },
                              [_vm._v("Left")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { variant: "alt-secondary" } },
                              [_vm._v("Middle")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { variant: "alt-secondary" } },
                              [_vm._v("Right")]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "mb-3" },
                      [
                        _c(
                          "b-button-group",
                          { attrs: { size: "sm", vertical: "" } },
                          [
                            _c(
                              "b-button",
                              { attrs: { variant: "alt-secondary" } },
                              [_vm._v("Left")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { variant: "alt-secondary" } },
                              [_vm._v("Middle")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { variant: "alt-secondary" } },
                              [_vm._v("Right")]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "mb-3" },
                      [
                        _c(
                          "b-button-group",
                          { attrs: { size: "lg", vertical: "" } },
                          [
                            _c(
                              "b-button",
                              { attrs: { variant: "alt-secondary" } },
                              [_vm._v("Left")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { variant: "alt-secondary" } },
                              [_vm._v("Middle")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { variant: "alt-secondary" } },
                              [_vm._v("Right")]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ]),
                  _vm._v(" "),
                  _c("b-col", { attrs: { sm: "6", xl: "4" } }, [
                    _c(
                      "div",
                      { staticClass: "mb-3" },
                      [
                        _c(
                          "b-button-group",
                          { attrs: { size: "sm" } },
                          [
                            _c(
                              "b-button",
                              { attrs: { variant: "outline-secondary" } },
                              [_vm._v("Left")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { variant: "outline-secondary" } },
                              [_vm._v("Middle")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { variant: "outline-secondary" } },
                              [_vm._v("Right")]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "mb-3" },
                      [
                        _c(
                          "b-button-group",
                          { attrs: { size: "lg" } },
                          [
                            _c(
                              "b-button",
                              { attrs: { variant: "outline-secondary" } },
                              [_vm._v("Left")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { variant: "outline-secondary" } },
                              [_vm._v("Middle")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { variant: "outline-secondary" } },
                              [_vm._v("Right")]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "mb-3" },
                      [
                        _c(
                          "b-button-group",
                          { attrs: { size: "sm", vertical: "" } },
                          [
                            _c(
                              "b-button",
                              { attrs: { variant: "outline-secondary" } },
                              [_vm._v("Left")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { variant: "outline-secondary" } },
                              [_vm._v("Middle")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { variant: "outline-secondary" } },
                              [_vm._v("Right")]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "mb-3" },
                      [
                        _c(
                          "b-button-group",
                          { attrs: { size: "lg", vertical: "" } },
                          [
                            _c(
                              "b-button",
                              { attrs: { variant: "outline-secondary" } },
                              [_vm._v("Left")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { variant: "outline-secondary" } },
                              [_vm._v("Middle")]
                            ),
                            _vm._v(" "),
                            _c(
                              "b-button",
                              { attrs: { variant: "outline-secondary" } },
                              [_vm._v("Right")]
                            ),
                          ],
                          1
                        ),
                      ],
                      1
                    ),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "base-block",
            { attrs: { rounded: "", title: "Vertical" } },
            [
              _c("p", { staticClass: "font-size-sm text-muted" }, [
                _vm._v(
                  "\n        Make a set of buttons appear vertically stacked rather than horizontally.\n      "
                ),
              ]),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push" },
                [
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "4" } },
                    [
                      _c(
                        "b-button-group",
                        { staticClass: "push mr-3", attrs: { vertical: "" } },
                        [
                          _c("b-button", { attrs: { variant: "primary" } }, [
                            _vm._v("Left"),
                          ]),
                          _vm._v(" "),
                          _c("b-button", { attrs: { variant: "primary" } }, [
                            _vm._v("Middle"),
                          ]),
                          _vm._v(" "),
                          _c("b-button", { attrs: { variant: "primary" } }, [
                            _vm._v("Right"),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-group",
                        { staticClass: "push mr-3", attrs: { vertical: "" } },
                        [
                          _c("b-button", { attrs: { variant: "secondary" } }, [
                            _vm._v("Left"),
                          ]),
                          _vm._v(" "),
                          _c("b-button", { attrs: { variant: "secondary" } }, [
                            _vm._v("Middle"),
                          ]),
                          _vm._v(" "),
                          _c("b-button", { attrs: { variant: "secondary" } }, [
                            _vm._v("Right"),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-group",
                        { staticClass: "push mr-3", attrs: { vertical: "" } },
                        [
                          _c("b-button", { attrs: { variant: "info" } }, [
                            _vm._v("Left"),
                          ]),
                          _vm._v(" "),
                          _c("b-button", { attrs: { variant: "info" } }, [
                            _vm._v("Middle"),
                          ]),
                          _vm._v(" "),
                          _c("b-button", { attrs: { variant: "info" } }, [
                            _vm._v("Right"),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-group",
                        { staticClass: "push mr-3", attrs: { vertical: "" } },
                        [
                          _c("b-button", { attrs: { variant: "success" } }, [
                            _vm._v("Left"),
                          ]),
                          _vm._v(" "),
                          _c("b-button", { attrs: { variant: "success" } }, [
                            _vm._v("Middle"),
                          ]),
                          _vm._v(" "),
                          _c("b-button", { attrs: { variant: "success" } }, [
                            _vm._v("Right"),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-group",
                        { staticClass: "push mr-3", attrs: { vertical: "" } },
                        [
                          _c("b-button", { attrs: { variant: "warning" } }, [
                            _vm._v("Left"),
                          ]),
                          _vm._v(" "),
                          _c("b-button", { attrs: { variant: "warning" } }, [
                            _vm._v("Middle"),
                          ]),
                          _vm._v(" "),
                          _c("b-button", { attrs: { variant: "warning" } }, [
                            _vm._v("Right"),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-group",
                        { staticClass: "push mr-3", attrs: { vertical: "" } },
                        [
                          _c("b-button", { attrs: { variant: "danger" } }, [
                            _vm._v("Left"),
                          ]),
                          _vm._v(" "),
                          _c("b-button", { attrs: { variant: "danger" } }, [
                            _vm._v("Middle"),
                          ]),
                          _vm._v(" "),
                          _c("b-button", { attrs: { variant: "danger" } }, [
                            _vm._v("Right"),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-group",
                        { staticClass: "push mr-3", attrs: { vertical: "" } },
                        [
                          _c("b-button", { attrs: { variant: "dark" } }, [
                            _vm._v("Left"),
                          ]),
                          _vm._v(" "),
                          _c("b-button", { attrs: { variant: "dark" } }, [
                            _vm._v("Middle"),
                          ]),
                          _vm._v(" "),
                          _c("b-button", { attrs: { variant: "dark" } }, [
                            _vm._v("Right"),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-group",
                        { staticClass: "push mr-3", attrs: { vertical: "" } },
                        [
                          _c("b-button", { attrs: { variant: "light" } }, [
                            _vm._v("Left"),
                          ]),
                          _vm._v(" "),
                          _c("b-button", { attrs: { variant: "light" } }, [
                            _vm._v("Middle"),
                          ]),
                          _vm._v(" "),
                          _c("b-button", { attrs: { variant: "light" } }, [
                            _vm._v("Right"),
                          ]),
                        ],
                        1
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
                        "b-button-group",
                        { staticClass: "push mr-3", attrs: { vertical: "" } },
                        [
                          _c(
                            "b-button",
                            { attrs: { variant: "alt-primary" } },
                            [_vm._v("Left")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            { attrs: { variant: "alt-primary" } },
                            [_vm._v("Middle")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            { attrs: { variant: "alt-primary" } },
                            [_vm._v("Right")]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-group",
                        { staticClass: "push mr-3", attrs: { vertical: "" } },
                        [
                          _c(
                            "b-button",
                            { attrs: { variant: "alt-secondary" } },
                            [_vm._v("Left")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            { attrs: { variant: "alt-secondary" } },
                            [_vm._v("Middle")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            { attrs: { variant: "alt-secondary" } },
                            [_vm._v("Right")]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-group",
                        { staticClass: "push mr-3", attrs: { vertical: "" } },
                        [
                          _c("b-button", { attrs: { variant: "alt-info" } }, [
                            _vm._v("Left"),
                          ]),
                          _vm._v(" "),
                          _c("b-button", { attrs: { variant: "alt-info" } }, [
                            _vm._v("Middle"),
                          ]),
                          _vm._v(" "),
                          _c("b-button", { attrs: { variant: "alt-info" } }, [
                            _vm._v("Right"),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-group",
                        { staticClass: "push mr-3", attrs: { vertical: "" } },
                        [
                          _c(
                            "b-button",
                            { attrs: { variant: "alt-success" } },
                            [_vm._v("Left")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            { attrs: { variant: "alt-success" } },
                            [_vm._v("Middle")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            { attrs: { variant: "alt-success" } },
                            [_vm._v("Right")]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-group",
                        { staticClass: "push mr-3", attrs: { vertical: "" } },
                        [
                          _c(
                            "b-button",
                            { attrs: { variant: "alt-warning" } },
                            [_vm._v("Left")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            { attrs: { variant: "alt-warning" } },
                            [_vm._v("Middle")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            { attrs: { variant: "alt-warning" } },
                            [_vm._v("Right")]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-group",
                        { staticClass: "push mr-3", attrs: { vertical: "" } },
                        [
                          _c("b-button", { attrs: { variant: "alt-danger" } }, [
                            _vm._v("Left"),
                          ]),
                          _vm._v(" "),
                          _c("b-button", { attrs: { variant: "alt-danger" } }, [
                            _vm._v("Middle"),
                          ]),
                          _vm._v(" "),
                          _c("b-button", { attrs: { variant: "alt-danger" } }, [
                            _vm._v("Right"),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-group",
                        { staticClass: "push mr-3", attrs: { vertical: "" } },
                        [
                          _c("b-button", { attrs: { variant: "alt-dark" } }, [
                            _vm._v("Left"),
                          ]),
                          _vm._v(" "),
                          _c("b-button", { attrs: { variant: "alt-dark" } }, [
                            _vm._v("Middle"),
                          ]),
                          _vm._v(" "),
                          _c("b-button", { attrs: { variant: "alt-dark" } }, [
                            _vm._v("Right"),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-group",
                        { staticClass: "push mr-3", attrs: { vertical: "" } },
                        [
                          _c("b-button", { attrs: { variant: "alt-light" } }, [
                            _vm._v("Left"),
                          ]),
                          _vm._v(" "),
                          _c("b-button", { attrs: { variant: "alt-light" } }, [
                            _vm._v("Middle"),
                          ]),
                          _vm._v(" "),
                          _c("b-button", { attrs: { variant: "alt-light" } }, [
                            _vm._v("Right"),
                          ]),
                        ],
                        1
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
                        "b-button-group",
                        { staticClass: "push mr-3", attrs: { vertical: "" } },
                        [
                          _c(
                            "b-button",
                            { attrs: { variant: "outline-primary" } },
                            [_vm._v("Left")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            { attrs: { variant: "outline-primary" } },
                            [_vm._v("Middle")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            { attrs: { variant: "outline-primary" } },
                            [_vm._v("Right")]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-group",
                        { staticClass: "push mr-3", attrs: { vertical: "" } },
                        [
                          _c(
                            "b-button",
                            { attrs: { variant: "outline-secondary" } },
                            [_vm._v("Left")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            { attrs: { variant: "outline-secondary" } },
                            [_vm._v("Middle")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            { attrs: { variant: "outline-secondary" } },
                            [_vm._v("Right")]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-group",
                        { staticClass: "push mr-3", attrs: { vertical: "" } },
                        [
                          _c(
                            "b-button",
                            { attrs: { variant: "outline-info" } },
                            [_vm._v("Left")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            { attrs: { variant: "outline-info" } },
                            [_vm._v("Middle")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            { attrs: { variant: "outline-info" } },
                            [_vm._v("Right")]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-group",
                        { staticClass: "push mr-3", attrs: { vertical: "" } },
                        [
                          _c(
                            "b-button",
                            { attrs: { variant: "outline-success" } },
                            [_vm._v("Left")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            { attrs: { variant: "outline-success" } },
                            [_vm._v("Middle")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            { attrs: { variant: "outline-success" } },
                            [_vm._v("Right")]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-group",
                        { staticClass: "push mr-3", attrs: { vertical: "" } },
                        [
                          _c(
                            "b-button",
                            { attrs: { variant: "outline-warning" } },
                            [_vm._v("Left")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            { attrs: { variant: "outline-warning" } },
                            [_vm._v("Middle")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            { attrs: { variant: "outline-warning" } },
                            [_vm._v("Right")]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-group",
                        { staticClass: "push mr-3", attrs: { vertical: "" } },
                        [
                          _c(
                            "b-button",
                            { attrs: { variant: "outline-danger" } },
                            [_vm._v("Left")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            { attrs: { variant: "outline-danger" } },
                            [_vm._v("Middle")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            { attrs: { variant: "outline-danger" } },
                            [_vm._v("Right")]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-group",
                        { staticClass: "push mr-3", attrs: { vertical: "" } },
                        [
                          _c(
                            "b-button",
                            { attrs: { variant: "outline-dark" } },
                            [_vm._v("Left")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            { attrs: { variant: "outline-dark" } },
                            [_vm._v("Middle")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            { attrs: { variant: "outline-dark" } },
                            [_vm._v("Right")]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-group",
                        { staticClass: "push mr-3", attrs: { vertical: "" } },
                        [
                          _c(
                            "b-button",
                            { attrs: { variant: "outline-light" } },
                            [_vm._v("Left")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            { attrs: { variant: "outline-light" } },
                            [_vm._v("Middle")]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            { attrs: { variant: "outline-light" } },
                            [_vm._v("Right")]
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
          _vm._v(" "),
          _c("h2", { staticClass: "content-heading" }, [_vm._v("Toolbars")]),
          _vm._v(" "),
          _c(
            "base-block",
            { attrs: { rounded: "", title: "Default" } },
            [
              _c("p", { staticClass: "font-size-sm text-muted" }, [
                _vm._v(
                  "\n        Combine sets of button groups into button toolbars for more complex components\n      "
                ),
              ]),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push" },
                [
                  _c(
                    "b-col",
                    { attrs: { md: "6", xl: "4" } },
                    [
                      _c(
                        "b-button-toolbar",
                        {
                          staticClass: "mb-2",
                          attrs: {
                            "aria-label": "Primary Toolbar with button groups",
                          },
                        },
                        [
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "primary" } },
                                [_vm._v("1")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "primary" } },
                                [_vm._v("2")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "primary" } },
                                [_vm._v("3")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "primary" } },
                                [_vm._v("4")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "primary" } },
                                [_vm._v("5")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "primary" } },
                                [_vm._v("6")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "primary" } },
                                [_vm._v("7")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "primary" } },
                                [_vm._v("8")]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-toolbar",
                        {
                          staticClass: "mb-2",
                          attrs: {
                            "aria-label":
                              "Secondary Toolbar with button groups",
                          },
                        },
                        [
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "secondary" } },
                                [_vm._v("1")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "secondary" } },
                                [_vm._v("2")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "secondary" } },
                                [_vm._v("3")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "secondary" } },
                                [_vm._v("4")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "secondary" } },
                                [_vm._v("5")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "secondary" } },
                                [_vm._v("6")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "secondary" } },
                                [_vm._v("7")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "secondary" } },
                                [_vm._v("8")]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-toolbar",
                        {
                          staticClass: "mb-2",
                          attrs: {
                            "aria-label": "Info Toolbar with button groups",
                          },
                        },
                        [
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2" },
                            [
                              _c("b-button", { attrs: { variant: "info" } }, [
                                _vm._v("1"),
                              ]),
                              _vm._v(" "),
                              _c("b-button", { attrs: { variant: "info" } }, [
                                _vm._v("2"),
                              ]),
                              _vm._v(" "),
                              _c("b-button", { attrs: { variant: "info" } }, [
                                _vm._v("3"),
                              ]),
                              _vm._v(" "),
                              _c("b-button", { attrs: { variant: "info" } }, [
                                _vm._v("4"),
                              ]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2" },
                            [
                              _c("b-button", { attrs: { variant: "info" } }, [
                                _vm._v("5"),
                              ]),
                              _vm._v(" "),
                              _c("b-button", { attrs: { variant: "info" } }, [
                                _vm._v("6"),
                              ]),
                              _vm._v(" "),
                              _c("b-button", { attrs: { variant: "info" } }, [
                                _vm._v("7"),
                              ]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mb-2" },
                            [
                              _c("b-button", { attrs: { variant: "info" } }, [
                                _vm._v("8"),
                              ]),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-toolbar",
                        {
                          staticClass: "mb-2",
                          attrs: {
                            "aria-label": "Success Toolbar with button groups",
                          },
                        },
                        [
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "success" } },
                                [_vm._v("1")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "success" } },
                                [_vm._v("2")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "success" } },
                                [_vm._v("3")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "success" } },
                                [_vm._v("4")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "success" } },
                                [_vm._v("5")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "success" } },
                                [_vm._v("6")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "success" } },
                                [_vm._v("7")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "success" } },
                                [_vm._v("8")]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-toolbar",
                        {
                          staticClass: "mb-2",
                          attrs: {
                            "aria-label": "Warning Toolbar with button groups",
                          },
                        },
                        [
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "warning" } },
                                [_vm._v("1")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "warning" } },
                                [_vm._v("2")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "warning" } },
                                [_vm._v("3")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "warning" } },
                                [_vm._v("4")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "warning" } },
                                [_vm._v("5")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "warning" } },
                                [_vm._v("6")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "warning" } },
                                [_vm._v("7")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "warning" } },
                                [_vm._v("8")]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-toolbar",
                        {
                          staticClass: "mb-2",
                          attrs: {
                            "aria-label": "Danger Toolbar with button groups",
                          },
                        },
                        [
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2" },
                            [
                              _c("b-button", { attrs: { variant: "danger" } }, [
                                _vm._v("1"),
                              ]),
                              _vm._v(" "),
                              _c("b-button", { attrs: { variant: "danger" } }, [
                                _vm._v("2"),
                              ]),
                              _vm._v(" "),
                              _c("b-button", { attrs: { variant: "danger" } }, [
                                _vm._v("3"),
                              ]),
                              _vm._v(" "),
                              _c("b-button", { attrs: { variant: "danger" } }, [
                                _vm._v("4"),
                              ]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2" },
                            [
                              _c("b-button", { attrs: { variant: "danger" } }, [
                                _vm._v("5"),
                              ]),
                              _vm._v(" "),
                              _c("b-button", { attrs: { variant: "danger" } }, [
                                _vm._v("6"),
                              ]),
                              _vm._v(" "),
                              _c("b-button", { attrs: { variant: "danger" } }, [
                                _vm._v("7"),
                              ]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mb-2" },
                            [
                              _c("b-button", { attrs: { variant: "danger" } }, [
                                _vm._v("8"),
                              ]),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-toolbar",
                        {
                          staticClass: "mb-2",
                          attrs: {
                            "aria-label": "Dark Toolbar with button groups",
                          },
                        },
                        [
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2" },
                            [
                              _c("b-button", { attrs: { variant: "dark" } }, [
                                _vm._v("1"),
                              ]),
                              _vm._v(" "),
                              _c("b-button", { attrs: { variant: "dark" } }, [
                                _vm._v("2"),
                              ]),
                              _vm._v(" "),
                              _c("b-button", { attrs: { variant: "dark" } }, [
                                _vm._v("3"),
                              ]),
                              _vm._v(" "),
                              _c("b-button", { attrs: { variant: "dark" } }, [
                                _vm._v("4"),
                              ]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2" },
                            [
                              _c("b-button", { attrs: { variant: "dark" } }, [
                                _vm._v("5"),
                              ]),
                              _vm._v(" "),
                              _c("b-button", { attrs: { variant: "dark" } }, [
                                _vm._v("6"),
                              ]),
                              _vm._v(" "),
                              _c("b-button", { attrs: { variant: "dark" } }, [
                                _vm._v("7"),
                              ]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mb-2" },
                            [
                              _c("b-button", { attrs: { variant: "dark" } }, [
                                _vm._v("8"),
                              ]),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-toolbar",
                        {
                          staticClass: "mb-2",
                          attrs: {
                            "aria-label": "Light Toolbar with button groups",
                          },
                        },
                        [
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2" },
                            [
                              _c("b-button", { attrs: { variant: "light" } }, [
                                _vm._v("1"),
                              ]),
                              _vm._v(" "),
                              _c("b-button", { attrs: { variant: "light" } }, [
                                _vm._v("2"),
                              ]),
                              _vm._v(" "),
                              _c("b-button", { attrs: { variant: "light" } }, [
                                _vm._v("3"),
                              ]),
                              _vm._v(" "),
                              _c("b-button", { attrs: { variant: "light" } }, [
                                _vm._v("4"),
                              ]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2" },
                            [
                              _c("b-button", { attrs: { variant: "light" } }, [
                                _vm._v("5"),
                              ]),
                              _vm._v(" "),
                              _c("b-button", { attrs: { variant: "light" } }, [
                                _vm._v("6"),
                              ]),
                              _vm._v(" "),
                              _c("b-button", { attrs: { variant: "light" } }, [
                                _vm._v("7"),
                              ]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mb-2" },
                            [
                              _c("b-button", { attrs: { variant: "light" } }, [
                                _vm._v("8"),
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
                    "b-col",
                    { attrs: { md: "6", xl: "4" } },
                    [
                      _c(
                        "b-button-toolbar",
                        {
                          staticClass: "mb-2",
                          attrs: {
                            "aria-label":
                              "Alternate Primary Toolbar with button groups",
                          },
                        },
                        [
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-primary" } },
                                [_vm._v("1")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-primary" } },
                                [_vm._v("2")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-primary" } },
                                [_vm._v("3")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-primary" } },
                                [_vm._v("4")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-primary" } },
                                [_vm._v("5")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-primary" } },
                                [_vm._v("6")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-primary" } },
                                [_vm._v("7")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-primary" } },
                                [_vm._v("8")]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-toolbar",
                        {
                          staticClass: "mb-2",
                          attrs: {
                            "aria-label":
                              "Alternate Secondary Toolbar with button groups",
                          },
                        },
                        [
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-secondary" } },
                                [_vm._v("1")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-secondary" } },
                                [_vm._v("2")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-secondary" } },
                                [_vm._v("3")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-secondary" } },
                                [_vm._v("4")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-secondary" } },
                                [_vm._v("5")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-secondary" } },
                                [_vm._v("6")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-secondary" } },
                                [_vm._v("7")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-secondary" } },
                                [_vm._v("8")]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-toolbar",
                        {
                          staticClass: "mb-2",
                          attrs: {
                            "aria-label":
                              "Alternate Info Toolbar with button groups",
                          },
                        },
                        [
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-info" } },
                                [_vm._v("1")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-info" } },
                                [_vm._v("2")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-info" } },
                                [_vm._v("3")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-info" } },
                                [_vm._v("4")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-info" } },
                                [_vm._v("5")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-info" } },
                                [_vm._v("6")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-info" } },
                                [_vm._v("7")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-info" } },
                                [_vm._v("8")]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-toolbar",
                        {
                          staticClass: "mb-2",
                          attrs: {
                            "aria-label":
                              "Alternate Success Toolbar with button groups",
                          },
                        },
                        [
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-success" } },
                                [_vm._v("1")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-success" } },
                                [_vm._v("2")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-success" } },
                                [_vm._v("3")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-success" } },
                                [_vm._v("4")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-success" } },
                                [_vm._v("5")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-success" } },
                                [_vm._v("6")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-success" } },
                                [_vm._v("7")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-success" } },
                                [_vm._v("8")]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-toolbar",
                        {
                          staticClass: "mb-2",
                          attrs: {
                            "aria-label":
                              "Alternate Warning Toolbar with button groups",
                          },
                        },
                        [
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-warning" } },
                                [_vm._v("1")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-warning" } },
                                [_vm._v("2")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-warning" } },
                                [_vm._v("3")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-warning" } },
                                [_vm._v("4")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-warning" } },
                                [_vm._v("5")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-warning" } },
                                [_vm._v("6")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-warning" } },
                                [_vm._v("7")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-warning" } },
                                [_vm._v("8")]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-toolbar",
                        {
                          staticClass: "mb-2",
                          attrs: {
                            "aria-label":
                              "Alternate Danger Toolbar with button groups",
                          },
                        },
                        [
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-danger" } },
                                [_vm._v("1")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-danger" } },
                                [_vm._v("2")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-danger" } },
                                [_vm._v("3")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-danger" } },
                                [_vm._v("4")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-danger" } },
                                [_vm._v("5")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-danger" } },
                                [_vm._v("6")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-danger" } },
                                [_vm._v("7")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-danger" } },
                                [_vm._v("8")]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-toolbar",
                        {
                          staticClass: "mb-2",
                          attrs: {
                            "aria-label":
                              "Alternate Dark Toolbar with button groups",
                          },
                        },
                        [
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-dark" } },
                                [_vm._v("1")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-dark" } },
                                [_vm._v("2")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-dark" } },
                                [_vm._v("3")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-dark" } },
                                [_vm._v("4")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-dark" } },
                                [_vm._v("5")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-dark" } },
                                [_vm._v("6")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-dark" } },
                                [_vm._v("7")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-dark" } },
                                [_vm._v("8")]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-toolbar",
                        {
                          staticClass: "mb-2",
                          attrs: {
                            "aria-label":
                              "Alternate Light Toolbar with button groups",
                          },
                        },
                        [
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-light" } },
                                [_vm._v("1")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-light" } },
                                [_vm._v("2")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-light" } },
                                [_vm._v("3")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-light" } },
                                [_vm._v("4")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-light" } },
                                [_vm._v("5")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-light" } },
                                [_vm._v("6")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-light" } },
                                [_vm._v("7")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-light" } },
                                [_vm._v("8")]
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
                    "b-col",
                    { attrs: { md: "6", xl: "4" } },
                    [
                      _c(
                        "b-button-toolbar",
                        {
                          staticClass: "mb-2",
                          attrs: {
                            "aria-label":
                              "Outline Primary Toolbar with button groups",
                          },
                        },
                        [
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-primary" } },
                                [_vm._v("1")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-primary" } },
                                [_vm._v("2")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-primary" } },
                                [_vm._v("3")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-primary" } },
                                [_vm._v("4")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-primary" } },
                                [_vm._v("5")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-primary" } },
                                [_vm._v("6")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-primary" } },
                                [_vm._v("7")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-primary" } },
                                [_vm._v("8")]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-toolbar",
                        {
                          staticClass: "mb-2",
                          attrs: {
                            "aria-label":
                              "Outline Secondary Toolbar with button groups",
                          },
                        },
                        [
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-secondary" } },
                                [_vm._v("1")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-secondary" } },
                                [_vm._v("2")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-secondary" } },
                                [_vm._v("3")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-secondary" } },
                                [_vm._v("4")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-secondary" } },
                                [_vm._v("5")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-secondary" } },
                                [_vm._v("6")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-secondary" } },
                                [_vm._v("7")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-secondary" } },
                                [_vm._v("8")]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-toolbar",
                        {
                          staticClass: "mb-2",
                          attrs: {
                            "aria-label":
                              "Outline Info Toolbar with button groups",
                          },
                        },
                        [
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-info" } },
                                [_vm._v("1")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-info" } },
                                [_vm._v("2")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-info" } },
                                [_vm._v("3")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-info" } },
                                [_vm._v("4")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-info" } },
                                [_vm._v("5")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-info" } },
                                [_vm._v("6")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-info" } },
                                [_vm._v("7")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-info" } },
                                [_vm._v("8")]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-toolbar",
                        {
                          staticClass: "mb-2",
                          attrs: {
                            "aria-label":
                              "Outline Success Toolbar with button groups",
                          },
                        },
                        [
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-success" } },
                                [_vm._v("1")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-success" } },
                                [_vm._v("2")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-success" } },
                                [_vm._v("3")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-success" } },
                                [_vm._v("4")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-success" } },
                                [_vm._v("5")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-success" } },
                                [_vm._v("6")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-success" } },
                                [_vm._v("7")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-success" } },
                                [_vm._v("8")]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-toolbar",
                        {
                          staticClass: "mb-2",
                          attrs: {
                            "aria-label":
                              "Outline Warning Toolbar with button groups",
                          },
                        },
                        [
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-warning" } },
                                [_vm._v("1")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-warning" } },
                                [_vm._v("2")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-warning" } },
                                [_vm._v("3")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-warning" } },
                                [_vm._v("4")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-warning" } },
                                [_vm._v("5")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-warning" } },
                                [_vm._v("6")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-warning" } },
                                [_vm._v("7")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-warning" } },
                                [_vm._v("8")]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-toolbar",
                        {
                          staticClass: "mb-2",
                          attrs: {
                            "aria-label":
                              "Outline Danger Toolbar with button groups",
                          },
                        },
                        [
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-danger" } },
                                [_vm._v("1")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-danger" } },
                                [_vm._v("2")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-danger" } },
                                [_vm._v("3")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-danger" } },
                                [_vm._v("4")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-danger" } },
                                [_vm._v("5")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-danger" } },
                                [_vm._v("6")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-danger" } },
                                [_vm._v("7")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-danger" } },
                                [_vm._v("8")]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-toolbar",
                        {
                          staticClass: "mb-2",
                          attrs: {
                            "aria-label":
                              "Outline Dark Toolbar with button groups",
                          },
                        },
                        [
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-dark" } },
                                [_vm._v("1")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-dark" } },
                                [_vm._v("2")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-dark" } },
                                [_vm._v("3")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-dark" } },
                                [_vm._v("4")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-dark" } },
                                [_vm._v("5")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-dark" } },
                                [_vm._v("6")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-dark" } },
                                [_vm._v("7")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-dark" } },
                                [_vm._v("8")]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-toolbar",
                        {
                          staticClass: "mb-2",
                          attrs: {
                            "aria-label":
                              "Outline Light Toolbar with button groups",
                          },
                        },
                        [
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-light" } },
                                [_vm._v("1")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-light" } },
                                [_vm._v("2")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-light" } },
                                [_vm._v("3")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-light" } },
                                [_vm._v("4")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-light" } },
                                [_vm._v("5")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-light" } },
                                [_vm._v("6")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-light" } },
                                [_vm._v("7")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mb-2" },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-light" } },
                                [_vm._v("8")]
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
          ),
          _vm._v(" "),
          _c(
            "base-block",
            { attrs: { rounded: "", title: "Sizes" } },
            [
              _c("p", { staticClass: "font-size-sm text-muted" }, [
                _vm._v(
                  "\n        You can easily have a small or large size for all toolbar variations\n      "
                ),
              ]),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push" },
                [
                  _c(
                    "b-col",
                    { attrs: { lg: "6" } },
                    [
                      _c(
                        "b-button-toolbar",
                        {
                          staticClass: "mb-2",
                          attrs: {
                            "aria-label":
                              "Small Primary Toolbar with button groups",
                          },
                        },
                        [
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2", attrs: { size: "sm" } },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "primary" } },
                                [_vm._v("1")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "primary" } },
                                [_vm._v("2")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "primary" } },
                                [_vm._v("3")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "primary" } },
                                [_vm._v("4")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2", attrs: { size: "sm" } },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "primary" } },
                                [_vm._v("5")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "primary" } },
                                [_vm._v("6")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "primary" } },
                                [_vm._v("7")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mb-2", attrs: { size: "sm" } },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "primary" } },
                                [_vm._v("8")]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-toolbar",
                        {
                          staticClass: "mb-2",
                          attrs: {
                            "aria-label":
                              "Small Alternate Primary Toolbar with button groups",
                          },
                        },
                        [
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2", attrs: { size: "sm" } },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-primary" } },
                                [_vm._v("1")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-primary" } },
                                [_vm._v("2")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-primary" } },
                                [_vm._v("3")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-primary" } },
                                [_vm._v("4")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2", attrs: { size: "sm" } },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-primary" } },
                                [_vm._v("5")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-primary" } },
                                [_vm._v("6")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-primary" } },
                                [_vm._v("7")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mb-2", attrs: { size: "sm" } },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-primary" } },
                                [_vm._v("8")]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-toolbar",
                        {
                          staticClass: "mb-2",
                          attrs: {
                            "aria-label":
                              "Small Outline Secondary Toolbar with button groups",
                          },
                        },
                        [
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2", attrs: { size: "sm" } },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-secondary" } },
                                [_vm._v("1")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-secondary" } },
                                [_vm._v("2")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-secondary" } },
                                [_vm._v("3")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-secondary" } },
                                [_vm._v("4")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2", attrs: { size: "sm" } },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-secondary" } },
                                [_vm._v("5")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-secondary" } },
                                [_vm._v("6")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-secondary" } },
                                [_vm._v("7")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mb-2", attrs: { size: "sm" } },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-secondary" } },
                                [_vm._v("8")]
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
                    "b-col",
                    { attrs: { lg: "6" } },
                    [
                      _c(
                        "b-button-toolbar",
                        {
                          staticClass: "mb-2",
                          attrs: {
                            "aria-label":
                              "Large Primary Toolbar with button groups",
                          },
                        },
                        [
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2", attrs: { size: "lg" } },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "primary" } },
                                [_vm._v("1")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "primary" } },
                                [_vm._v("2")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "primary" } },
                                [_vm._v("3")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "primary" } },
                                [_vm._v("4")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2", attrs: { size: "lg" } },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "primary" } },
                                [_vm._v("5")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "primary" } },
                                [_vm._v("6")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "primary" } },
                                [_vm._v("7")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mb-2", attrs: { size: "lg" } },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "primary" } },
                                [_vm._v("8")]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-toolbar",
                        {
                          staticClass: "mb-2",
                          attrs: {
                            "aria-label":
                              "Large Alternate Secondary Toolbar with button groups",
                          },
                        },
                        [
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2", attrs: { size: "lg" } },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-secondary" } },
                                [_vm._v("1")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-secondary" } },
                                [_vm._v("2")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-secondary" } },
                                [_vm._v("3")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-secondary" } },
                                [_vm._v("4")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2", attrs: { size: "lg" } },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-secondary" } },
                                [_vm._v("5")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-secondary" } },
                                [_vm._v("6")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-secondary" } },
                                [_vm._v("7")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mb-2", attrs: { size: "lg" } },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "alt-secondary" } },
                                [_vm._v("8")]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button-toolbar",
                        {
                          staticClass: "mb-2",
                          attrs: {
                            "aria-label":
                              "Large Outline Secondary Toolbar with button groups",
                          },
                        },
                        [
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2", attrs: { size: "lg" } },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-secondary" } },
                                [_vm._v("1")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-secondary" } },
                                [_vm._v("2")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-secondary" } },
                                [_vm._v("3")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-secondary" } },
                                [_vm._v("4")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mr-2 mb-2", attrs: { size: "lg" } },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-secondary" } },
                                [_vm._v("5")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-secondary" } },
                                [_vm._v("6")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-secondary" } },
                                [_vm._v("7")]
                              ),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button-group",
                            { staticClass: "mb-2", attrs: { size: "lg" } },
                            [
                              _c(
                                "b-button",
                                { attrs: { variant: "outline-secondary" } },
                                [_vm._v("8")]
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
          ),
          _vm._v(" "),
          _c(
            "base-block",
            { attrs: { rounded: "", title: "Icons" } },
            [
              _c("p", { staticClass: "font-size-sm text-muted" }, [
                _vm._v(
                  "\n        Using icons is ideal for creating useful toolbars\n      "
                ),
              ]),
              _vm._v(" "),
              _c(
                "b-button-toolbar",
                {
                  staticClass: "mb-2",
                  attrs: { "aria-label": "Icons Toolbar with button groups" },
                },
                [
                  _c(
                    "b-button-group",
                    { staticClass: "mr-2 mb-2" },
                    [
                      _c("b-button", { attrs: { variant: "primary" } }, [
                        _c("i", { staticClass: "fa fa-fw fa-file" }),
                      ]),
                      _vm._v(" "),
                      _c("b-button", { attrs: { variant: "primary" } }, [
                        _c("i", { staticClass: "fa fa-fw fa-save" }),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button-group",
                    { staticClass: "mr-2 mb-2" },
                    [
                      _c("b-button", { attrs: { variant: "primary" } }, [
                        _c("i", { staticClass: "fa fa-fw fa-bold" }),
                      ]),
                      _vm._v(" "),
                      _c("b-button", { attrs: { variant: "primary" } }, [
                        _c("i", { staticClass: "fa fa-fw fa-italic" }),
                      ]),
                      _vm._v(" "),
                      _c("b-button", { attrs: { variant: "primary" } }, [
                        _c("i", { staticClass: "fa fa-fw fa-underline" }),
                      ]),
                      _vm._v(" "),
                      _c("b-button", { attrs: { variant: "primary" } }, [
                        _c("i", { staticClass: "fa fa-fw fa-strikethrough" }),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button-group",
                    { staticClass: "mr-2 mb-2" },
                    [
                      _c("b-button", { attrs: { variant: "primary" } }, [
                        _c("i", { staticClass: "fa fa-fw fa-align-left" }),
                      ]),
                      _vm._v(" "),
                      _c("b-button", { attrs: { variant: "primary" } }, [
                        _c("i", { staticClass: "fa fa-fw fa-align-center" }),
                      ]),
                      _vm._v(" "),
                      _c("b-button", { attrs: { variant: "primary" } }, [
                        _c("i", { staticClass: "fa fa-fw fa-align-right" }),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button-group",
                    { staticClass: "mr-2 mb-2" },
                    [
                      _c("b-button", { attrs: { variant: "primary" } }, [
                        _c("i", { staticClass: "fa fa-fw fa-list-ul" }),
                      ]),
                      _vm._v(" "),
                      _c("b-button", { attrs: { variant: "primary" } }, [
                        _c("i", { staticClass: "fa fa-fw fa-list-ol" }),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button-group",
                    { staticClass: "mb-2" },
                    [
                      _c("b-button", { attrs: { variant: "primary" } }, [
                        _c("i", { staticClass: "fa fa-fw fa-archive" }),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-button-toolbar",
                {
                  staticClass: "mb-2",
                  attrs: {
                    "aria-label": "Icons Alternate Toolbar with button groups",
                  },
                },
                [
                  _c(
                    "b-button-group",
                    { staticClass: "mr-2 mb-2" },
                    [
                      _c("b-button", { attrs: { variant: "alt-secondary" } }, [
                        _c("i", { staticClass: "fa fa-fw fa-file" }),
                      ]),
                      _vm._v(" "),
                      _c("b-button", { attrs: { variant: "alt-secondary" } }, [
                        _c("i", { staticClass: "fa fa-fw fa-save" }),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button-group",
                    { staticClass: "mr-2 mb-2" },
                    [
                      _c("b-button", { attrs: { variant: "alt-secondary" } }, [
                        _c("i", { staticClass: "fa fa-fw fa-bold" }),
                      ]),
                      _vm._v(" "),
                      _c("b-button", { attrs: { variant: "alt-secondary" } }, [
                        _c("i", { staticClass: "fa fa-fw fa-italic" }),
                      ]),
                      _vm._v(" "),
                      _c("b-button", { attrs: { variant: "alt-secondary" } }, [
                        _c("i", { staticClass: "fa fa-fw fa-underline" }),
                      ]),
                      _vm._v(" "),
                      _c("b-button", { attrs: { variant: "alt-secondary" } }, [
                        _c("i", { staticClass: "fa fa-fw fa-strikethrough" }),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button-group",
                    { staticClass: "mr-2 mb-2" },
                    [
                      _c("b-button", { attrs: { variant: "alt-secondary" } }, [
                        _c("i", { staticClass: "fa fa-fw fa-align-left" }),
                      ]),
                      _vm._v(" "),
                      _c("b-button", { attrs: { variant: "alt-secondary" } }, [
                        _c("i", { staticClass: "fa fa-fw fa-align-center" }),
                      ]),
                      _vm._v(" "),
                      _c("b-button", { attrs: { variant: "alt-secondary" } }, [
                        _c("i", { staticClass: "fa fa-fw fa-align-right" }),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button-group",
                    { staticClass: "mr-2 mb-2" },
                    [
                      _c("b-button", { attrs: { variant: "alt-secondary" } }, [
                        _c("i", { staticClass: "fa fa-fw fa-list-ul" }),
                      ]),
                      _vm._v(" "),
                      _c("b-button", { attrs: { variant: "alt-secondary" } }, [
                        _c("i", { staticClass: "fa fa-fw fa-list-ol" }),
                      ]),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button-group",
                    { staticClass: "mr-2 mb-2" },
                    [
                      _c("b-button", { attrs: { variant: "alt-secondary" } }, [
                        _c("i", { staticClass: "fa fa-fw fa-archive" }),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-button-toolbar",
                {
                  staticClass: "mb-2",
                  attrs: {
                    "aria-label": "Icons Outline Toolbar with button groups",
                  },
                },
                [
                  _c(
                    "b-button-group",
                    { staticClass: "mr-2 mb-2" },
                    [
                      _c(
                        "b-button",
                        { attrs: { variant: "outline-secondary" } },
                        [_c("i", { staticClass: "fa fa-fw fa-file" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        { attrs: { variant: "outline-secondary" } },
                        [_c("i", { staticClass: "fa fa-fw fa-save" })]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button-group",
                    { staticClass: "mr-2 mb-2" },
                    [
                      _c(
                        "b-button",
                        { attrs: { variant: "outline-secondary" } },
                        [_c("i", { staticClass: "fa fa-fw fa-bold" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        { attrs: { variant: "outline-secondary" } },
                        [_c("i", { staticClass: "fa fa-fw fa-italic" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        { attrs: { variant: "outline-secondary" } },
                        [_c("i", { staticClass: "fa fa-fw fa-underline" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        { attrs: { variant: "outline-secondary" } },
                        [_c("i", { staticClass: "fa fa-fw fa-strikethrough" })]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button-group",
                    { staticClass: "mr-2 mb-2" },
                    [
                      _c(
                        "b-button",
                        { attrs: { variant: "outline-secondary" } },
                        [_c("i", { staticClass: "fa fa-fw fa-align-left" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        { attrs: { variant: "outline-secondary" } },
                        [_c("i", { staticClass: "fa fa-fw fa-align-center" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        { attrs: { variant: "outline-secondary" } },
                        [_c("i", { staticClass: "fa fa-fw fa-align-right" })]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button-group",
                    { staticClass: "mr-2 mb-2" },
                    [
                      _c(
                        "b-button",
                        { attrs: { variant: "outline-secondary" } },
                        [_c("i", { staticClass: "fa fa-fw fa-list-ul" })]
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        { attrs: { variant: "outline-secondary" } },
                        [_c("i", { staticClass: "fa fa-fw fa-list-ol" })]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button-group",
                    { staticClass: "mr-2 mb-2" },
                    [
                      _c(
                        "b-button",
                        { attrs: { variant: "outline-secondary" } },
                        [_c("i", { staticClass: "fa fa-fw fa-archive" })]
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