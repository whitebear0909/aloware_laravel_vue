"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_plugins_Notifications_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/plugins/Notifications.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/plugins/Notifications.vue?vue&type=script&lang=js& ***!
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
    // Trigger a new toast
    toast: function toast(title, content) {
      var variant = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var append = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
      var toaster = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 'b-toaster-top-right';
      var autoHideDelay = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 5000;
      this.$bvToast.toast(content, {
        title: title,
        toaster: toaster,
        variant: variant,
        autoHideDelay: autoHideDelay,
        appendToast: append
      });
    }
  }
});

/***/ }),

/***/ "./resources/js/views/plugins/Notifications.vue":
/*!******************************************************!*\
  !*** ./resources/js/views/plugins/Notifications.vue ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Notifications_vue_vue_type_template_id_d1ab2eac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Notifications.vue?vue&type=template&id=d1ab2eac& */ "./resources/js/views/plugins/Notifications.vue?vue&type=template&id=d1ab2eac&");
/* harmony import */ var _Notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Notifications.vue?vue&type=script&lang=js& */ "./resources/js/views/plugins/Notifications.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Notifications_vue_vue_type_template_id_d1ab2eac___WEBPACK_IMPORTED_MODULE_0__.render,
  _Notifications_vue_vue_type_template_id_d1ab2eac___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/plugins/Notifications.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/plugins/Notifications.vue?vue&type=script&lang=js&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/plugins/Notifications.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Notifications.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/plugins/Notifications.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/plugins/Notifications.vue?vue&type=template&id=d1ab2eac&":
/*!*************************************************************************************!*\
  !*** ./resources/js/views/plugins/Notifications.vue?vue&type=template&id=d1ab2eac& ***!
  \*************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_template_id_d1ab2eac___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_template_id_d1ab2eac___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Notifications_vue_vue_type_template_id_d1ab2eac___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Notifications.vue?vue&type=template&id=d1ab2eac& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/plugins/Notifications.vue?vue&type=template&id=d1ab2eac&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/plugins/Notifications.vue?vue&type=template&id=d1ab2eac&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/plugins/Notifications.vue?vue&type=template&id=d1ab2eac& ***!
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
          title: "Notifications",
          subtitle: "Powerful alerts for your application.",
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
                      [_vm._v("Plugins")]
                    ),
                    _vm._v(" "),
                    _c("b-breadcrumb-item", { attrs: { active: "" } }, [
                      _vm._v("Notifications"),
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
            { attrs: { rounded: "", title: "Bootstrap Toasts" } },
            [
              _c("h4", { staticClass: "border-bottom pb-2" }, [
                _vm._v("Default"),
              ]),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push" },
                [
                  _c("b-col", { attrs: { lg: "4" } }, [
                    _c("p", { staticClass: "font-size-sm text-muted" }, [
                      _vm._v(
                        "\n            A nice toast with a message\n          "
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { lg: "8" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "push",
                          attrs: { variant: "alt-secondary" },
                          on: {
                            click: function ($event) {
                              return _vm.toast("Prepend Toast", "Toast content")
                            },
                          },
                        },
                        [_vm._v("\n            Prepend Toast\n          ")]
                      ),
                      _vm._v(" "),
                      _c("p", { staticClass: "font-w600 mb-0" }, [
                        _vm._v("\n            JS code:\n          "),
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "mb-5" }, [
                        _c("code", [_vm._v("this.toast('Title', 'Content')")]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "push",
                          attrs: { variant: "alt-secondary" },
                          on: {
                            click: function ($event) {
                              return _vm.toast(
                                "Append Toast",
                                "Toast content",
                                null,
                                true
                              )
                            },
                          },
                        },
                        [_vm._v("\n            Append Toast\n          ")]
                      ),
                      _vm._v(" "),
                      _c("p", { staticClass: "font-w600 mb-0" }, [
                        _vm._v("\n            JS code:\n          "),
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "mb-5" }, [
                        _c("code", [
                          _vm._v("this.toast('Title', 'Content', null, true)"),
                        ]),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("h4", { staticClass: "border-bottom pb-2" }, [
                _vm._v("Position"),
              ]),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push" },
                [
                  _c("b-col", { attrs: { lg: "4" } }, [
                    _c("p", { staticClass: "font-size-sm text-muted" }, [
                      _vm._v(
                        "\n            You can show your notification in multiple screen positions\n          "
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { lg: "8" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "push",
                          attrs: { variant: "alt-primary" },
                          on: {
                            click: function ($event) {
                              return _vm.toast(
                                "Top Right Toast",
                                "Toast content",
                                null,
                                false,
                                "b-toaster-top-right"
                              )
                            },
                          },
                        },
                        [_vm._v("\n            Top Right Toast\n          ")]
                      ),
                      _vm._v(" "),
                      _c("p", { staticClass: "font-w600 mb-0" }, [
                        _vm._v("\n            JS code:\n          "),
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "mb-5" }, [
                        _c("code", [
                          _vm._v(
                            "this.toast('Title', 'Content', null, false, 'b-toaster-top-right')"
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "push",
                          attrs: { variant: "alt-primary" },
                          on: {
                            click: function ($event) {
                              return _vm.toast(
                                "Top Left Toast",
                                "Toast content",
                                null,
                                false,
                                "b-toaster-top-left"
                              )
                            },
                          },
                        },
                        [_vm._v("\n            Top Left Toast\n          ")]
                      ),
                      _vm._v(" "),
                      _c("p", { staticClass: "font-w600 mb-0" }, [
                        _vm._v("\n            JS code:\n          "),
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "mb-5" }, [
                        _c("code", [
                          _vm._v(
                            "this.toast('Title', 'Content', null, false, 'b-toaster-top-left')"
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "push",
                          attrs: { variant: "alt-primary" },
                          on: {
                            click: function ($event) {
                              return _vm.toast(
                                "Top Center Toast",
                                "Toast content",
                                null,
                                false,
                                "b-toaster-top-center"
                              )
                            },
                          },
                        },
                        [_vm._v("\n            Top Center Toast\n          ")]
                      ),
                      _vm._v(" "),
                      _c("p", { staticClass: "font-w600 mb-0" }, [
                        _vm._v("\n            JS code:\n          "),
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "mb-5" }, [
                        _c("code", [
                          _vm._v(
                            "this.toast('Title', 'Content', null, false, 'b-toaster-top-center')"
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "push",
                          attrs: { variant: "alt-primary" },
                          on: {
                            click: function ($event) {
                              return _vm.toast(
                                "Top Full Toast",
                                "Toast content",
                                null,
                                false,
                                "b-toaster-top-full"
                              )
                            },
                          },
                        },
                        [_vm._v("\n            Top Full Toast\n          ")]
                      ),
                      _vm._v(" "),
                      _c("p", { staticClass: "font-w600 mb-0" }, [
                        _vm._v("\n            JS code:\n          "),
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "mb-5" }, [
                        _c("code", [
                          _vm._v(
                            "this.toast('Title', 'Content', null, false, 'b-toaster-top-full')"
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "push",
                          attrs: { variant: "alt-primary" },
                          on: {
                            click: function ($event) {
                              return _vm.toast(
                                "Bottom Right Toast",
                                "Toast content",
                                null,
                                false,
                                "b-toaster-bottom-right"
                              )
                            },
                          },
                        },
                        [_vm._v("\n            Bottom Right Toast\n          ")]
                      ),
                      _vm._v(" "),
                      _c("p", { staticClass: "font-w600 mb-0" }, [
                        _vm._v("\n            JS code:\n          "),
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "mb-5" }, [
                        _c("code", [
                          _vm._v(
                            "this.toast('Title', 'Content', null, false, 'b-toaster-bottom-right')"
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "push",
                          attrs: { variant: "alt-primary" },
                          on: {
                            click: function ($event) {
                              return _vm.toast(
                                "Bottom Left Toast",
                                "Toast content",
                                null,
                                false,
                                "b-toaster-bottom-left"
                              )
                            },
                          },
                        },
                        [_vm._v("\n            Bottom Left Toast\n          ")]
                      ),
                      _vm._v(" "),
                      _c("p", { staticClass: "font-w600 mb-0" }, [
                        _vm._v("\n            JS code:\n          "),
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "mb-5" }, [
                        _c("code", [
                          _vm._v(
                            "this.toast('Title', 'Content', null, false, 'b-toaster-bottom-left')"
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "push",
                          attrs: { variant: "alt-primary" },
                          on: {
                            click: function ($event) {
                              return _vm.toast(
                                "Bottom Center Toast",
                                "Toast content",
                                null,
                                false,
                                "b-toaster-bottom-center"
                              )
                            },
                          },
                        },
                        [
                          _vm._v(
                            "\n            Bottom Center Toast\n          "
                          ),
                        ]
                      ),
                      _vm._v(" "),
                      _c("p", { staticClass: "font-w600 mb-0" }, [
                        _vm._v("\n            JS code:\n          "),
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "mb-5" }, [
                        _c("code", [
                          _vm._v(
                            "this.toast('Title', 'Content', null, false, 'b-toaster-bottom-center')"
                          ),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "push",
                          attrs: { variant: "alt-primary" },
                          on: {
                            click: function ($event) {
                              return _vm.toast(
                                "Bottom Full Toast",
                                "Toast content",
                                null,
                                false,
                                "b-toaster-bottom-full"
                              )
                            },
                          },
                        },
                        [_vm._v("\n            Bottom Full Toast\n          ")]
                      ),
                      _vm._v(" "),
                      _c("p", { staticClass: "font-w600 mb-0" }, [
                        _vm._v("\n            JS code:\n          "),
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "mb-5" }, [
                        _c("code", [
                          _vm._v(
                            "this.toast('Title', 'Content', null, false, 'b-toaster-bottom-full')"
                          ),
                        ]),
                      ]),
                    ],
                    1
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("h4", { staticClass: "border-bottom pb-2" }, [
                _vm._v("Variants"),
              ]),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push" },
                [
                  _c("b-col", { attrs: { lg: "4" } }, [
                    _c("p", { staticClass: "font-size-sm text-muted" }, [
                      _vm._v(
                        "\n            You can also specify color variations\n          "
                      ),
                    ]),
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { lg: "8" } },
                    [
                      _c(
                        "b-button",
                        {
                          staticClass: "push",
                          attrs: { variant: "alt-success" },
                          on: {
                            click: function ($event) {
                              return _vm.toast(
                                "Success Toast",
                                "Toast content",
                                "success"
                              )
                            },
                          },
                        },
                        [_vm._v("\n            Success\n          ")]
                      ),
                      _vm._v(" "),
                      _c("p", { staticClass: "font-w600 mb-0" }, [
                        _vm._v("\n            JS code:\n          "),
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "mb-5" }, [
                        _c("code", [
                          _vm._v("this.toast('Title', 'Content', 'success')"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "push",
                          attrs: { variant: "alt-info" },
                          on: {
                            click: function ($event) {
                              return _vm.toast(
                                "Info Toast",
                                "Toast content",
                                "info"
                              )
                            },
                          },
                        },
                        [_vm._v("\n            Info\n          ")]
                      ),
                      _vm._v(" "),
                      _c("p", { staticClass: "font-w600 mb-0" }, [
                        _vm._v("\n            JS code:\n          "),
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "mb-5" }, [
                        _c("code", [
                          _vm._v("this.toast('Title', 'Content', 'info')"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "push",
                          attrs: { variant: "alt-warning" },
                          on: {
                            click: function ($event) {
                              return _vm.toast(
                                "Warning Toast",
                                "Toast content",
                                "warning"
                              )
                            },
                          },
                        },
                        [_vm._v("\n            Warning\n          ")]
                      ),
                      _vm._v(" "),
                      _c("p", { staticClass: "font-w600 mb-0" }, [
                        _vm._v("\n            JS code:\n          "),
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "mb-5" }, [
                        _c("code", [
                          _vm._v("this.toast('Title', 'Content', 'warning')"),
                        ]),
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          staticClass: "push",
                          attrs: { variant: "alt-danger" },
                          on: {
                            click: function ($event) {
                              return _vm.toast(
                                "Danger Toast",
                                "Toast content",
                                "danger"
                              )
                            },
                          },
                        },
                        [_vm._v("\n            Danger\n          ")]
                      ),
                      _vm._v(" "),
                      _c("p", { staticClass: "font-w600 mb-0" }, [
                        _vm._v("\n            JS code:\n          "),
                      ]),
                      _vm._v(" "),
                      _c("p", { staticClass: "mb-5" }, [
                        _c("code", [
                          _vm._v("this.toast('Title', 'Content', 'danger')"),
                        ]),
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