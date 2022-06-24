"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_elements_Popovers_vue"],{

/***/ "./resources/js/views/elements/Popovers.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/elements/Popovers.vue ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Popovers_vue_vue_type_template_id_83269292___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Popovers.vue?vue&type=template&id=83269292& */ "./resources/js/views/elements/Popovers.vue?vue&type=template&id=83269292&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Popovers_vue_vue_type_template_id_83269292___WEBPACK_IMPORTED_MODULE_0__.render,
  _Popovers_vue_vue_type_template_id_83269292___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/elements/Popovers.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/elements/Popovers.vue?vue&type=template&id=83269292&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/elements/Popovers.vue?vue&type=template&id=83269292& ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Popovers_vue_vue_type_template_id_83269292___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Popovers_vue_vue_type_template_id_83269292___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Popovers_vue_vue_type_template_id_83269292___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Popovers.vue?vue&type=template&id=83269292& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/elements/Popovers.vue?vue&type=template&id=83269292&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/elements/Popovers.vue?vue&type=template&id=83269292&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/elements/Popovers.vue?vue&type=template&id=83269292& ***!
  \************************************************************************************************************************************************************************************************************************/
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
          title: "Popovers",
          subtitle: "Similar to the ones found in iOS.",
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
                      _vm._v("Popovers"),
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
          _c(
            "base-block",
            { attrs: { rounded: "", title: "Default" } },
            [
              _c("p", { staticClass: "font-size-sm text-muted" }, [
                _vm._v("\n        Show popovers on hover\n      "),
              ]),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push text-center" },
                [
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "3" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-popover",
                              rawName: "v-b-popover.hover.nofade.top",
                              value:
                                "This is example content. You can put a description or more info here.",
                              expression:
                                "'This is example content. You can put a description or more info here.'",
                              modifiers: {
                                hover: true,
                                nofade: true,
                                top: true,
                              },
                            },
                          ],
                          attrs: {
                            size: "sm",
                            variant: "primary",
                            block: "",
                            title: "Top Popover",
                          },
                        },
                        [_vm._v("Top")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "3" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-popover",
                              rawName: "v-b-popover.hover.nofade.right",
                              value:
                                "This is example content. You can put a description or more info here.",
                              expression:
                                "'This is example content. You can put a description or more info here.'",
                              modifiers: {
                                hover: true,
                                nofade: true,
                                right: true,
                              },
                            },
                          ],
                          attrs: {
                            size: "sm",
                            variant: "primary",
                            block: "",
                            title: "Right Popover",
                          },
                        },
                        [_vm._v("Right")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "3" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-popover",
                              rawName: "v-b-popover.hover.nofade.bottom",
                              value:
                                "This is example content. You can put a description or more info here.",
                              expression:
                                "'This is example content. You can put a description or more info here.'",
                              modifiers: {
                                hover: true,
                                nofade: true,
                                bottom: true,
                              },
                            },
                          ],
                          attrs: {
                            size: "sm",
                            variant: "primary",
                            block: "",
                            title: "Bottom Popover",
                          },
                        },
                        [_vm._v("Bottom")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "3" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-popover",
                              rawName: "v-b-popover.hover.nofade.left",
                              value:
                                "This is example content. You can put a description or more info here.",
                              expression:
                                "'This is example content. You can put a description or more info here.'",
                              modifiers: {
                                hover: true,
                                nofade: true,
                                left: true,
                              },
                            },
                          ],
                          attrs: {
                            size: "sm",
                            variant: "primary",
                            block: "",
                            title: "Left Popover",
                          },
                        },
                        [_vm._v("Left")]
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
            { attrs: { rounded: "", title: "Click Triggered" } },
            [
              _c("p", { staticClass: "font-size-sm text-muted" }, [
                _vm._v("\n        Show popovers on hover\n      "),
              ]),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push text-center" },
                [
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "3" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-popover",
                              rawName: "v-b-popover.click.nofade.top",
                              value:
                                "This is example content. You can put a description or more info here.",
                              expression:
                                "'This is example content. You can put a description or more info here.'",
                              modifiers: {
                                click: true,
                                nofade: true,
                                top: true,
                              },
                            },
                          ],
                          attrs: {
                            variant: "alt-primary",
                            block: "",
                            title: "Top Popover",
                          },
                        },
                        [_vm._v("Top")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "3" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-popover",
                              rawName: "v-b-popover.click.nofade.right",
                              value:
                                "This is example content. You can put a description or more info here.",
                              expression:
                                "'This is example content. You can put a description or more info here.'",
                              modifiers: {
                                click: true,
                                nofade: true,
                                right: true,
                              },
                            },
                          ],
                          attrs: {
                            variant: "alt-primary",
                            block: "",
                            title: "Right Popover",
                          },
                        },
                        [_vm._v("Right")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "3" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-popover",
                              rawName: "v-b-popover.click.nofade.bottom",
                              value:
                                "This is example content. You can put a description or more info here.",
                              expression:
                                "'This is example content. You can put a description or more info here.'",
                              modifiers: {
                                click: true,
                                nofade: true,
                                bottom: true,
                              },
                            },
                          ],
                          attrs: {
                            variant: "alt-primary",
                            block: "",
                            title: "Bottom Popover",
                          },
                        },
                        [_vm._v("Bottom")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "3" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-popover",
                              rawName: "v-b-popover.click.nofade.left",
                              value:
                                "This is example content. You can put a description or more info here.",
                              expression:
                                "'This is example content. You can put a description or more info here.'",
                              modifiers: {
                                click: true,
                                nofade: true,
                                left: true,
                              },
                            },
                          ],
                          attrs: {
                            variant: "alt-primary",
                            block: "",
                            title: "Left Popover",
                          },
                        },
                        [_vm._v("Left")]
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
            { attrs: { rounded: "", title: "Animation" } },
            [
              _c("p", { staticClass: "font-size-sm text-muted" }, [
                _vm._v(
                  "\n        You can enable a fade animation to your popovers\n      "
                ),
              ]),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push text-center" },
                [
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "3" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-popover",
                              rawName: "v-b-popover.hover.top",
                              value:
                                "This is example content. You can put a description or more info here.",
                              expression:
                                "'This is example content. You can put a description or more info here.'",
                              modifiers: { hover: true, top: true },
                            },
                          ],
                          attrs: {
                            variant: "alt-primary",
                            block: "",
                            title: "Top Popover",
                          },
                        },
                        [_vm._v("Top")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "3" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-popover",
                              rawName: "v-b-popover.hover.right",
                              value:
                                "This is example content. You can put a description or more info here.",
                              expression:
                                "'This is example content. You can put a description or more info here.'",
                              modifiers: { hover: true, right: true },
                            },
                          ],
                          attrs: {
                            variant: "alt-primary",
                            block: "",
                            title: "Right Popover",
                          },
                        },
                        [_vm._v("Right")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "3" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-popover",
                              rawName: "v-b-popover.hover.bottom",
                              value:
                                "This is example content. You can put a description or more info here.",
                              expression:
                                "'This is example content. You can put a description or more info here.'",
                              modifiers: { hover: true, bottom: true },
                            },
                          ],
                          attrs: {
                            variant: "alt-primary",
                            block: "",
                            title: "Bottom Popover",
                          },
                        },
                        [_vm._v("Bottom")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "3" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-popover",
                              rawName: "v-b-popover.hover.left",
                              value:
                                "This is example content. You can put a description or more info here.",
                              expression:
                                "'This is example content. You can put a description or more info here.'",
                              modifiers: { hover: true, left: true },
                            },
                          ],
                          attrs: {
                            variant: "alt-primary",
                            block: "",
                            title: "Left Popover",
                          },
                        },
                        [_vm._v("Left")]
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
            { attrs: { rounded: "", title: "HTML" } },
            [
              _c("p", { staticClass: "font-size-sm text-muted" }, [
                _vm._v(
                  "\n        You can add HTML in your popovers as well\n      "
                ),
              ]),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push text-center" },
                [
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "3" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-popover",
                              rawName: "v-b-popover.hover.html.nofade.top",
                              value:
                                "<img class='img-avatar' src='img/avatars/avatar10.jpg' alt=''>",
                              expression:
                                "'<img class=\\'img-avatar\\' src=\\'img/avatars/avatar10.jpg\\' alt=\\'\\'>'",
                              modifiers: {
                                hover: true,
                                html: true,
                                nofade: true,
                                top: true,
                              },
                            },
                          ],
                          attrs: {
                            variant: "alt-primary",
                            block: "",
                            title: "Popover Title",
                          },
                        },
                        [_vm._v("Top")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "3" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-popover",
                              rawName: "v-b-popover.hover.html.nofade.right",
                              value:
                                "<img class='img-avatar' src='img/avatars/avatar10.jpg' alt=''>",
                              expression:
                                "'<img class=\\'img-avatar\\' src=\\'img/avatars/avatar10.jpg\\' alt=\\'\\'>'",
                              modifiers: {
                                hover: true,
                                html: true,
                                nofade: true,
                                right: true,
                              },
                            },
                          ],
                          attrs: {
                            variant: "alt-primary",
                            block: "",
                            title: "Popover Title",
                          },
                        },
                        [_vm._v("Right")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "3" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-popover",
                              rawName: "v-b-popover.hover.html.nofade.bottom",
                              value:
                                "<img class='img-avatar' src='img/avatars/avatar10.jpg' alt=''>",
                              expression:
                                "'<img class=\\'img-avatar\\' src=\\'img/avatars/avatar10.jpg\\' alt=\\'\\'>'",
                              modifiers: {
                                hover: true,
                                html: true,
                                nofade: true,
                                bottom: true,
                              },
                            },
                          ],
                          attrs: {
                            variant: "alt-primary",
                            block: "",
                            title: "Popover Title",
                          },
                        },
                        [_vm._v("Bottom")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { sm: "6", xl: "3" } },
                    [
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-popover",
                              rawName: "v-b-popover.hover.html.nofade.left",
                              value:
                                "<img class='img-avatar' src='img/avatars/avatar10.jpg' alt=''>",
                              expression:
                                "'<img class=\\'img-avatar\\' src=\\'img/avatars/avatar10.jpg\\' alt=\\'\\'>'",
                              modifiers: {
                                hover: true,
                                html: true,
                                nofade: true,
                                left: true,
                              },
                            },
                          ],
                          attrs: {
                            variant: "alt-primary",
                            block: "",
                            title: "Popover Title",
                          },
                        },
                        [_vm._v("Left")]
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