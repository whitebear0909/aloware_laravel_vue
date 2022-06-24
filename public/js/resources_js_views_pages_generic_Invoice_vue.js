"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_pages_generic_Invoice_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/generic/Invoice.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/generic/Invoice.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  methods: {
    printPage: function printPage() {
      // Get current sidebar visibility
      var sidebarVisibility = this.$store.state.settings.sidebarVisibleDesktop; // Close the sidebar

      this.$store.commit('sidebar', {
        mode: 'close'
      }); // Print the page

      window.print(); // Restore previous sidebar visibility

      if (sidebarVisibility) {
        this.$store.commit('sidebar', {
          mode: 'open'
        });
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/views/pages/generic/Invoice.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/pages/generic/Invoice.vue ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Invoice_vue_vue_type_template_id_e29ec3ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Invoice.vue?vue&type=template&id=e29ec3ca& */ "./resources/js/views/pages/generic/Invoice.vue?vue&type=template&id=e29ec3ca&");
/* harmony import */ var _Invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Invoice.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/generic/Invoice.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Invoice_vue_vue_type_template_id_e29ec3ca___WEBPACK_IMPORTED_MODULE_0__.render,
  _Invoice_vue_vue_type_template_id_e29ec3ca___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/generic/Invoice.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/generic/Invoice.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/pages/generic/Invoice.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Invoice.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/generic/Invoice.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoice_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/generic/Invoice.vue?vue&type=template&id=e29ec3ca&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/pages/generic/Invoice.vue?vue&type=template&id=e29ec3ca& ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoice_vue_vue_type_template_id_e29ec3ca___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoice_vue_vue_type_template_id_e29ec3ca___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Invoice_vue_vue_type_template_id_e29ec3ca___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Invoice.vue?vue&type=template&id=e29ec3ca& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/generic/Invoice.vue?vue&type=template&id=e29ec3ca&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/generic/Invoice.vue?vue&type=template&id=e29ec3ca&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/generic/Invoice.vue?vue&type=template&id=e29ec3ca& ***!
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
        staticClass: "d-print-none",
        attrs: { title: "Invoice", subtitle: "Clean and professional design." },
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
                      [_vm._v("Generic")]
                    ),
                    _vm._v(" "),
                    _c("b-breadcrumb-item", { attrs: { active: "" } }, [
                      _vm._v("Invoice"),
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
        { staticClass: "content content-boxed" },
        [
          _c(
            "base-block",
            {
              attrs: { rounded: "", title: "#INV0625" },
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
                          on: { click: _vm.printPage },
                        },
                        [
                          _c("i", { staticClass: "si si-printer mr-1" }),
                          _vm._v(" Print Invoice\n        "),
                        ]
                      ),
                    ]
                  },
                  proxy: true,
                },
              ]),
            },
            [
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "p-sm-4 p-xl-7" },
                [
                  _c("div", { staticClass: "row mb-4" }, [
                    _c("div", { staticClass: "col-6 font-size-sm" }, [
                      _c("p", { staticClass: "h3" }, [_vm._v("Company")]),
                      _vm._v(" "),
                      _c("address", [
                        _vm._v("\n              Street Address"),
                        _c("br"),
                        _vm._v("\n              State, City"),
                        _c("br"),
                        _vm._v("\n              Region, Postal Code"),
                        _c("br"),
                        _vm._v("\n              ltd@example.com\n            "),
                      ]),
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-6 text-right font-size-sm" },
                      [
                        _c("p", { staticClass: "h3" }, [_vm._v("Client")]),
                        _vm._v(" "),
                        _c("address", [
                          _vm._v("\n              Street Address"),
                          _c("br"),
                          _vm._v("\n              State, City"),
                          _c("br"),
                          _vm._v("\n              Region, Postal Code"),
                          _c("br"),
                          _vm._v(
                            "\n              ctr@example.com\n            "
                          ),
                        ]),
                      ]
                    ),
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-table-simple",
                    {
                      attrs: {
                        responsive: "",
                        bordered: "",
                        "table-class": "table-vcenter",
                      },
                    },
                    [
                      _c(
                        "b-thead",
                        [
                          _c(
                            "b-tr",
                            [
                              _c("b-th", {
                                staticClass: "text-center",
                                staticStyle: { width: "60px" },
                              }),
                              _vm._v(" "),
                              _c("b-th", [_vm._v("Product")]),
                              _vm._v(" "),
                              _c(
                                "b-th",
                                {
                                  staticClass: "text-center",
                                  staticStyle: { width: "90px" },
                                },
                                [_vm._v("Qnt")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-th",
                                {
                                  staticClass: "text-right",
                                  staticStyle: { width: "120px" },
                                },
                                [_vm._v("Unit")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-th",
                                {
                                  staticClass: "text-right",
                                  staticStyle: { width: "120px" },
                                },
                                [_vm._v("Amount")]
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-tbody",
                        [
                          _c(
                            "b-tr",
                            [
                              _c("b-td", { staticClass: "text-center" }, [
                                _vm._v("1"),
                              ]),
                              _vm._v(" "),
                              _c("b-td", [
                                _c("p", { staticClass: "font-w600 mb-1" }, [
                                  _vm._v("App Design & Development"),
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "text-muted" }, [
                                  _vm._v(
                                    "Design/Development of iOS and Android application"
                                  ),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-td",
                                { staticClass: "text-center" },
                                [
                                  _c(
                                    "b-badge",
                                    { attrs: { variant: "primary", pill: "" } },
                                    [_vm._v("1")]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("b-td", { staticClass: "text-right" }, [
                                _vm._v("$25.000,00"),
                              ]),
                              _vm._v(" "),
                              _c("b-td", { staticClass: "text-right" }, [
                                _vm._v("$25.000,00"),
                              ]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-tr",
                            [
                              _c("b-td", { staticClass: "text-center" }, [
                                _vm._v("2"),
                              ]),
                              _vm._v(" "),
                              _c("b-td", [
                                _c("p", { staticClass: "font-w600 mb-1" }, [
                                  _vm._v("Icon Pack Design"),
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "text-muted" }, [
                                  _vm._v(
                                    "50 uniquely crafted icons for promotion"
                                  ),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-td",
                                { staticClass: "text-center" },
                                [
                                  _c(
                                    "b-badge",
                                    { attrs: { variant: "primary", pill: "" } },
                                    [_vm._v("1")]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("b-td", { staticClass: "text-right" }, [
                                _vm._v("$900,00"),
                              ]),
                              _vm._v(" "),
                              _c("b-td", { staticClass: "text-right" }, [
                                _vm._v("$900,00"),
                              ]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-tr",
                            [
                              _c("b-td", { staticClass: "text-center" }, [
                                _vm._v("3"),
                              ]),
                              _vm._v(" "),
                              _c("b-td", [
                                _c("p", { staticClass: "font-w600 mb-1" }, [
                                  _vm._v("Website Design"),
                                ]),
                                _vm._v(" "),
                                _c("div", { staticClass: "text-muted" }, [
                                  _vm._v(
                                    "Promotional website for the mobile application"
                                  ),
                                ]),
                              ]),
                              _vm._v(" "),
                              _c(
                                "b-td",
                                { staticClass: "text-center" },
                                [
                                  _c(
                                    "b-badge",
                                    { attrs: { variant: "primary", pill: "" } },
                                    [_vm._v("1")]
                                  ),
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c("b-td", { staticClass: "text-right" }, [
                                _vm._v("$1.600,00"),
                              ]),
                              _vm._v(" "),
                              _c("b-td", { staticClass: "text-right" }, [
                                _vm._v("$1.600,00"),
                              ]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-tr",
                            [
                              _c(
                                "b-td",
                                {
                                  staticClass: "font-w600 text-right",
                                  attrs: { colspan: "4" },
                                },
                                [_vm._v("Subtotal")]
                              ),
                              _vm._v(" "),
                              _c("b-td", { staticClass: "text-right" }, [
                                _vm._v("$27.500,00"),
                              ]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-tr",
                            [
                              _c(
                                "b-td",
                                {
                                  staticClass: "font-w600 text-right",
                                  attrs: { colspan: "4" },
                                },
                                [_vm._v("Vat Rate")]
                              ),
                              _vm._v(" "),
                              _c("b-td", { staticClass: "text-right" }, [
                                _vm._v("20%"),
                              ]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-tr",
                            [
                              _c(
                                "b-td",
                                {
                                  staticClass: "font-w600 text-right",
                                  attrs: { colspan: "4" },
                                },
                                [_vm._v("Vat Due")]
                              ),
                              _vm._v(" "),
                              _c("b-td", { staticClass: "text-right" }, [
                                _vm._v("$5.500,00"),
                              ]),
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "b-tr",
                            [
                              _c(
                                "b-td",
                                {
                                  staticClass:
                                    "font-w700 text-uppercase text-right bg-body-light",
                                  attrs: { colspan: "4" },
                                },
                                [_vm._v("Total Due")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-td",
                                {
                                  staticClass:
                                    "font-w700 text-right bg-body-light",
                                },
                                [_vm._v("$33.000,00")]
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
                    "p",
                    {
                      staticClass:
                        "font-size-sm text-muted text-center py-3 my-3 border-top",
                    },
                    [
                      _vm._v(
                        "\n          Thank you very much for doing business with us. We look forward to working with you again!\n        "
                      ),
                    ]
                  ),
                ],
                1
              ),
            ]
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