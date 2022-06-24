"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_elements_Tooltips_vue"],{

/***/ "./resources/js/views/elements/Tooltips.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/elements/Tooltips.vue ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Tooltips_vue_vue_type_template_id_2c897019___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Tooltips.vue?vue&type=template&id=2c897019& */ "./resources/js/views/elements/Tooltips.vue?vue&type=template&id=2c897019&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Tooltips_vue_vue_type_template_id_2c897019___WEBPACK_IMPORTED_MODULE_0__.render,
  _Tooltips_vue_vue_type_template_id_2c897019___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/elements/Tooltips.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/elements/Tooltips.vue?vue&type=template&id=2c897019&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/elements/Tooltips.vue?vue&type=template&id=2c897019& ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tooltips_vue_vue_type_template_id_2c897019___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tooltips_vue_vue_type_template_id_2c897019___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Tooltips_vue_vue_type_template_id_2c897019___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Tooltips.vue?vue&type=template&id=2c897019& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/elements/Tooltips.vue?vue&type=template&id=2c897019&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/elements/Tooltips.vue?vue&type=template&id=2c897019&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/elements/Tooltips.vue?vue&type=template&id=2c897019& ***!
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
          title: "Tooltips",
          subtitle: "Attach optional info to an element.",
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
                      _vm._v("Tooltips"),
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
                _vm._v("\n        Show tooltips on hover\n      "),
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
                              name: "b-tooltip",
                              rawName: "v-b-tooltip.hover.nofade.top",
                              value: "Top Tooltip",
                              expression: "'Top Tooltip'",
                              modifiers: {
                                hover: true,
                                nofade: true,
                                top: true,
                              },
                            },
                          ],
                          attrs: { variant: "primary", block: "" },
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
                              name: "b-tooltip",
                              rawName: "v-b-tooltip.hover.nofade.right",
                              value: "Right Tooltip",
                              expression: "'Right Tooltip'",
                              modifiers: {
                                hover: true,
                                nofade: true,
                                right: true,
                              },
                            },
                          ],
                          attrs: { variant: "primary", block: "" },
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
                              name: "b-tooltip",
                              rawName: "v-b-tooltip.hover.nofade.bottom",
                              value: "Bottom Tooltip",
                              expression: "'Bottom Tooltip'",
                              modifiers: {
                                hover: true,
                                nofade: true,
                                bottom: true,
                              },
                            },
                          ],
                          attrs: { variant: "primary", block: "" },
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
                              name: "b-tooltip",
                              rawName: "v-b-tooltip.hover.nofade.left",
                              value: "Left Tooltip",
                              expression: "'Left Tooltip'",
                              modifiers: {
                                hover: true,
                                nofade: true,
                                left: true,
                              },
                            },
                          ],
                          attrs: { variant: "primary", block: "" },
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
                _vm._v("\n        Show tooltips on hover\n      "),
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
                              name: "b-tooltip",
                              rawName: "v-b-tooltip.click.nofade.top",
                              value: "Top Tooltip",
                              expression: "'Top Tooltip'",
                              modifiers: {
                                click: true,
                                nofade: true,
                                top: true,
                              },
                            },
                          ],
                          attrs: { variant: "alt-primary", block: "" },
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
                              name: "b-tooltip",
                              rawName: "v-b-tooltip.click.nofade.right",
                              value: "Right Tooltip",
                              expression: "'Right Tooltip'",
                              modifiers: {
                                click: true,
                                nofade: true,
                                right: true,
                              },
                            },
                          ],
                          attrs: { variant: "alt-primary", block: "" },
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
                              name: "b-tooltip",
                              rawName: "v-b-tooltip.click.nofade.bottom",
                              value: "Bottom Tooltip",
                              expression: "'Bottom Tooltip'",
                              modifiers: {
                                click: true,
                                nofade: true,
                                bottom: true,
                              },
                            },
                          ],
                          attrs: { variant: "alt-primary", block: "" },
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
                              name: "b-tooltip",
                              rawName: "v-b-tooltip.click.nofade.left",
                              value: "Left Tooltip",
                              expression: "'Left Tooltip'",
                              modifiers: {
                                click: true,
                                nofade: true,
                                left: true,
                              },
                            },
                          ],
                          attrs: { variant: "alt-primary", block: "" },
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
                  "\n        You can enable a fade animation to your tooltips\n      "
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
                              name: "b-tooltip",
                              rawName: "v-b-tooltip.hover.top",
                              value: "Top Tooltip",
                              expression: "'Top Tooltip'",
                              modifiers: { hover: true, top: true },
                            },
                          ],
                          attrs: { variant: "alt-primary", block: "" },
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
                              name: "b-tooltip",
                              rawName: "v-b-tooltip.hover.right",
                              value: "Right Tooltip",
                              expression: "'Right Tooltip'",
                              modifiers: { hover: true, right: true },
                            },
                          ],
                          attrs: { variant: "alt-primary", block: "" },
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
                              name: "b-tooltip",
                              rawName: "v-b-tooltip.hover.bottom",
                              value: "Bottom Tooltip",
                              expression: "'Bottom Tooltip'",
                              modifiers: { hover: true, bottom: true },
                            },
                          ],
                          attrs: { variant: "alt-primary", block: "" },
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
                              name: "b-tooltip",
                              rawName: "v-b-tooltip.hover.left",
                              value: "Left Tooltip",
                              expression: "'Left Tooltip'",
                              modifiers: { hover: true, left: true },
                            },
                          ],
                          attrs: { variant: "alt-primary", block: "" },
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
                  "\n        You can add HTML in your tooltips as well\n      "
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
                              name: "b-tooltip",
                              rawName: "v-b-tooltip.hover.html.nofade.top",
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
                          attrs: { variant: "alt-primary", block: "" },
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
                              name: "b-tooltip",
                              rawName: "v-b-tooltip.hover.html.nofade.right",
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
                          attrs: { variant: "alt-primary", block: "" },
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
                              name: "b-tooltip",
                              rawName: "v-b-tooltip.hover.html.nofade.bottom",
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
                          attrs: { variant: "alt-primary", block: "" },
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
                              name: "b-tooltip",
                              rawName: "v-b-tooltip.hover.html.nofade.left",
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
                          attrs: { variant: "alt-primary", block: "" },
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