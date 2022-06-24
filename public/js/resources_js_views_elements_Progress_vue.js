"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_elements_Progress_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/elements/Progress.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/elements/Progress.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  data: function data() {
    return {
      groupOneValue: [30, 50, 70, 90, 100],
      groupTwoValue: [30, 50, 70, 90, 100],
      groupThreeValue: [30, 50, 70, 90, 100],
      groupFourValue: [30, 50, 70, 90, 100, 80, 60],
      max: 100
    };
  },
  methods: {
    randomValue: function randomValue(group) {
      var _this = this;

      switch (group) {
        case 1:
          this.groupOneValue.forEach(function (val, index) {
            _this.$set(_this.groupOneValue, index, 10 + Math.random() * _this.max);
          });
          break;

        case 2:
          this.groupTwoValue.forEach(function (val, index) {
            _this.$set(_this.groupTwoValue, index, 10 + Math.random() * _this.max);
          });
          break;

        case 3:
          this.groupThreeValue.forEach(function (val, index) {
            _this.$set(_this.groupThreeValue, index, 10 + Math.random() * _this.max);
          });
          break;

        case 4:
          this.groupFourValue.forEach(function (val, index) {
            _this.$set(_this.groupFourValue, index, 10 + Math.random() * _this.max);
          });
          break;
      }
    }
  }
});

/***/ }),

/***/ "./resources/js/views/elements/Progress.vue":
/*!**************************************************!*\
  !*** ./resources/js/views/elements/Progress.vue ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Progress_vue_vue_type_template_id_48de0af6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Progress.vue?vue&type=template&id=48de0af6& */ "./resources/js/views/elements/Progress.vue?vue&type=template&id=48de0af6&");
/* harmony import */ var _Progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Progress.vue?vue&type=script&lang=js& */ "./resources/js/views/elements/Progress.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Progress_vue_vue_type_template_id_48de0af6___WEBPACK_IMPORTED_MODULE_0__.render,
  _Progress_vue_vue_type_template_id_48de0af6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/elements/Progress.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/elements/Progress.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/views/elements/Progress.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Progress.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/elements/Progress.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Progress_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/elements/Progress.vue?vue&type=template&id=48de0af6&":
/*!*********************************************************************************!*\
  !*** ./resources/js/views/elements/Progress.vue?vue&type=template&id=48de0af6& ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Progress_vue_vue_type_template_id_48de0af6___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Progress_vue_vue_type_template_id_48de0af6___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Progress_vue_vue_type_template_id_48de0af6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Progress.vue?vue&type=template&id=48de0af6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/elements/Progress.vue?vue&type=template&id=48de0af6&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/elements/Progress.vue?vue&type=template&id=48de0af6&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/elements/Progress.vue?vue&type=template&id=48de0af6& ***!
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
          title: "Progress",
          subtitle: "Vital activity components for your project.",
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
                      _vm._v("Progress"),
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
          _c("h2", { staticClass: "content-heading" }, [_vm._v("Loading")]),
          _vm._v(" "),
          _c(
            "base-block",
            { attrs: { rounded: "", title: "Bootstrap Spinners" } },
            [
              _c(
                "b-row",
                { staticClass: "items-push" },
                [
                  _c(
                    "b-col",
                    { attrs: { md: "6" } },
                    [
                      _c("b-spinner", {
                        attrs: {
                          small: "",
                          variant: "primary",
                          label: "Loading...",
                        },
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: {
                          small: "",
                          variant: "secondary",
                          label: "Loading...",
                        },
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: {
                          small: "",
                          variant: "success",
                          label: "Loading...",
                        },
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: {
                          small: "",
                          variant: "danger",
                          label: "Loading...",
                        },
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: {
                          small: "",
                          variant: "warning",
                          label: "Loading...",
                        },
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: {
                          small: "",
                          variant: "info",
                          label: "Loading...",
                        },
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: {
                          small: "",
                          variant: "light",
                          label: "Loading...",
                        },
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: {
                          small: "",
                          variant: "dark",
                          label: "Loading...",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { md: "6" } },
                    [
                      _c("b-spinner", {
                        attrs: {
                          small: "",
                          type: "grow",
                          variant: "primary",
                          label: "Loading...",
                        },
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: {
                          small: "",
                          type: "grow",
                          variant: "secondary",
                          label: "Loading...",
                        },
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: {
                          small: "",
                          type: "grow",
                          variant: "success",
                          label: "Loading...",
                        },
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: {
                          small: "",
                          type: "grow",
                          variant: "danger",
                          label: "Loading...",
                        },
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: {
                          small: "",
                          type: "grow",
                          variant: "warning",
                          label: "Loading...",
                        },
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: {
                          small: "",
                          type: "grow",
                          variant: "info",
                          label: "Loading...",
                        },
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: {
                          small: "",
                          type: "grow",
                          variant: "light",
                          label: "Loading...",
                        },
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: {
                          small: "",
                          type: "grow",
                          variant: "dark",
                          label: "Loading...",
                        },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { md: "6" } },
                    [
                      _c("b-spinner", {
                        attrs: { variant: "primary", label: "Loading..." },
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: { variant: "secondary", label: "Loading..." },
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: { variant: "success", label: "Loading..." },
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: { variant: "danger", label: "Loading..." },
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: { variant: "warning", label: "Loading..." },
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: { variant: "info", label: "Loading..." },
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: { variant: "light", label: "Loading..." },
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: { variant: "dark", label: "Loading..." },
                      }),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { attrs: { md: "6" } },
                    [
                      _c("b-spinner", {
                        attrs: {
                          type: "grow",
                          variant: "primary",
                          label: "Loading...",
                        },
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: {
                          type: "grow",
                          variant: "secondary",
                          label: "Loading...",
                        },
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: {
                          type: "grow",
                          variant: "success",
                          label: "Loading...",
                        },
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: {
                          type: "grow",
                          variant: "danger",
                          label: "Loading...",
                        },
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: {
                          type: "grow",
                          variant: "warning",
                          label: "Loading...",
                        },
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: {
                          type: "grow",
                          variant: "info",
                          label: "Loading...",
                        },
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: {
                          type: "grow",
                          variant: "light",
                          label: "Loading...",
                        },
                      }),
                      _vm._v(" "),
                      _c("b-spinner", {
                        attrs: {
                          type: "grow",
                          variant: "dark",
                          label: "Loading...",
                        },
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
          _vm._v(" "),
          _c(
            "base-block",
            { attrs: { rounded: "", title: "Icons" } },
            [
              _c("p", { staticClass: "font-size-sm text-muted mb-5" }, [
                _vm._v(
                  "\n        You can create a loading indicator by adding the class "
                ),
                _c("code", [_vm._v("fa-spin")]),
                _vm._v(
                  " to any Font Awesome icon. Combining it with size classes and colors, you can get a lot of variations.\n      "
                ),
              ]),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push-3x text-center" },
                [
                  _c("b-col", { attrs: { cols: "6", md: "3" } }, [
                    _c("i", { staticClass: "fa fa-sun fa-spin" }),
                  ]),
                  _vm._v(" "),
                  _c("b-col", { attrs: { cols: "6", md: "3" } }, [
                    _c("i", { staticClass: "fa fa-2x fa-sun fa-spin" }),
                  ]),
                  _vm._v(" "),
                  _c("b-col", { attrs: { cols: "6", md: "3" } }, [
                    _c("i", { staticClass: "fa fa-3x fa-sun fa-spin" }),
                  ]),
                  _vm._v(" "),
                  _c("b-col", { attrs: { cols: "6", md: "3" } }, [
                    _c("i", {
                      staticClass: "fa fa-4x fa-sun fa-spin text-danger",
                    }),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push-3x text-center" },
                [
                  _c("b-col", { attrs: { cols: "6", md: "3" } }, [
                    _c("i", { staticClass: "fa fa-cog fa-spin" }),
                  ]),
                  _vm._v(" "),
                  _c("b-col", { attrs: { cols: "6", md: "3" } }, [
                    _c("i", { staticClass: "fa fa-2x fa-cog fa-spin" }),
                  ]),
                  _vm._v(" "),
                  _c("b-col", { attrs: { cols: "6", md: "3" } }, [
                    _c("i", { staticClass: "fa fa-3x fa-cog fa-spin" }),
                  ]),
                  _vm._v(" "),
                  _c("b-col", { attrs: { cols: "6", md: "3" } }, [
                    _c("i", {
                      staticClass: "fa fa-4x fa-cog fa-spin text-warning",
                    }),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c(
                "b-row",
                { staticClass: "items-push-3x text-center" },
                [
                  _c("b-col", { attrs: { cols: "6", md: "3" } }, [
                    _c("i", { staticClass: "fa fa-asterisk fa-spin" }),
                  ]),
                  _vm._v(" "),
                  _c("b-col", { attrs: { cols: "6", md: "3" } }, [
                    _c("i", { staticClass: "fa fa-2x fa-asterisk fa-spin" }),
                  ]),
                  _vm._v(" "),
                  _c("b-col", { attrs: { cols: "6", md: "3" } }, [
                    _c("i", { staticClass: "fa fa-3x fa-asterisk fa-spin" }),
                  ]),
                  _vm._v(" "),
                  _c("b-col", { attrs: { cols: "6", md: "3" } }, [
                    _c("i", {
                      staticClass: "fa fa-4x fa-asterisk fa-spin text-success",
                    }),
                  ]),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("h2", { staticClass: "content-heading" }, [
            _vm._v("Progress Bars"),
          ]),
          _vm._v(" "),
          _c(
            "b-row",
            { staticClass: "row-deck" },
            [
              _c(
                "b-col",
                { attrs: { xl: "6" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: { rounded: "", title: "Normal" },
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
                                  on: {
                                    click: function ($event) {
                                      return _vm.randomValue(1)
                                    },
                                  },
                                },
                                [_c("i", { staticClass: "fa fa-random" })]
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
                        "b-progress",
                        {
                          staticClass: "push",
                          attrs: { max: _vm.max, variant: "primary" },
                        },
                        [
                          _c("b-progress-bar", {
                            attrs: {
                              value: _vm.groupOneValue[0],
                              "label-html":
                                "<span class='font-size-sm font-w600'>" +
                                _vm.groupOneValue[0].toFixed() +
                                "%</span>",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-progress",
                        {
                          staticClass: "push",
                          attrs: { max: _vm.max, variant: "warning" },
                        },
                        [
                          _c("b-progress-bar", {
                            attrs: {
                              value: _vm.groupOneValue[1],
                              "label-html":
                                "<span class='font-size-sm font-w600'>" +
                                _vm.groupOneValue[1].toFixed() +
                                "%</span>",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-progress",
                        {
                          staticClass: "push",
                          attrs: { max: _vm.max, variant: "danger" },
                        },
                        [
                          _c("b-progress-bar", {
                            attrs: {
                              value: _vm.groupOneValue[2],
                              "label-html":
                                "<span class='font-size-sm font-w600'>" +
                                _vm.groupOneValue[2].toFixed() +
                                "%</span>",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-progress",
                        {
                          staticClass: "push",
                          attrs: { max: _vm.max, variant: "info" },
                        },
                        [
                          _c("b-progress-bar", {
                            attrs: {
                              value: _vm.groupOneValue[3],
                              "label-html":
                                "<span class='font-size-sm font-w600'>" +
                                _vm.groupOneValue[3].toFixed() +
                                "%</span>",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-progress",
                        {
                          staticClass: "push",
                          attrs: { max: _vm.max, variant: "success" },
                        },
                        [
                          _c("b-progress-bar", {
                            attrs: {
                              value: _vm.groupOneValue[4],
                              "label-html":
                                "<span class='font-size-sm font-w600'>" +
                                _vm.groupOneValue[4].toFixed() +
                                "%</span>",
                            },
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
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { xl: "6" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: { rounded: "", title: "Striped" },
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
                                  on: {
                                    click: function ($event) {
                                      return _vm.randomValue(2)
                                    },
                                  },
                                },
                                [_c("i", { staticClass: "fa fa-random" })]
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
                        "b-progress",
                        {
                          staticClass: "push",
                          attrs: {
                            max: _vm.max,
                            variant: "primary",
                            striped: "",
                          },
                        },
                        [
                          _c("b-progress-bar", {
                            attrs: {
                              value: _vm.groupTwoValue[0],
                              "label-html":
                                "<span class='font-size-sm font-w600'>" +
                                _vm.groupTwoValue[0].toFixed() +
                                "%</span>",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-progress",
                        {
                          staticClass: "push",
                          attrs: {
                            max: _vm.max,
                            variant: "warning",
                            striped: "",
                          },
                        },
                        [
                          _c("b-progress-bar", {
                            attrs: {
                              value: _vm.groupTwoValue[1],
                              "label-html":
                                "<span class='font-size-sm font-w600'>" +
                                _vm.groupTwoValue[1].toFixed() +
                                "%</span>",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-progress",
                        {
                          staticClass: "push",
                          attrs: {
                            max: _vm.max,
                            variant: "danger",
                            striped: "",
                          },
                        },
                        [
                          _c("b-progress-bar", {
                            attrs: {
                              value: _vm.groupTwoValue[2],
                              "label-html":
                                "<span class='font-size-sm font-w600'>" +
                                _vm.groupTwoValue[2].toFixed() +
                                "%</span>",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-progress",
                        {
                          staticClass: "push",
                          attrs: { max: _vm.max, variant: "info", striped: "" },
                        },
                        [
                          _c("b-progress-bar", {
                            attrs: {
                              value: _vm.groupTwoValue[3],
                              "label-html":
                                "<span class='font-size-sm font-w600'>" +
                                _vm.groupTwoValue[3].toFixed() +
                                "%</span>",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-progress",
                        {
                          staticClass: "push",
                          attrs: {
                            max: _vm.max,
                            variant: "success",
                            striped: "",
                          },
                        },
                        [
                          _c("b-progress-bar", {
                            attrs: {
                              value: _vm.groupTwoValue[4],
                              "label-html":
                                "<span class='font-size-sm font-w600'>" +
                                _vm.groupTwoValue[4].toFixed() +
                                "%</span>",
                            },
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
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { xl: "6" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: { rounded: "", title: "Animated" },
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
                                  on: {
                                    click: function ($event) {
                                      return _vm.randomValue(3)
                                    },
                                  },
                                },
                                [_c("i", { staticClass: "fa fa-random" })]
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
                        "b-progress",
                        {
                          staticClass: "push",
                          attrs: {
                            max: _vm.max,
                            variant: "primary",
                            animated: "",
                          },
                        },
                        [
                          _c("b-progress-bar", {
                            attrs: {
                              value: _vm.groupThreeValue[0],
                              "label-html":
                                "<span class='font-size-sm font-w600'>" +
                                _vm.groupThreeValue[0].toFixed() +
                                "%</span>",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-progress",
                        {
                          staticClass: "push",
                          attrs: {
                            max: _vm.max,
                            variant: "warning",
                            animated: "",
                          },
                        },
                        [
                          _c("b-progress-bar", {
                            attrs: {
                              value: _vm.groupThreeValue[1],
                              "label-html":
                                "<span class='font-size-sm font-w600'>" +
                                _vm.groupThreeValue[1].toFixed() +
                                "%</span>",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-progress",
                        {
                          staticClass: "push",
                          attrs: {
                            max: _vm.max,
                            variant: "danger",
                            animated: "",
                          },
                        },
                        [
                          _c("b-progress-bar", {
                            attrs: {
                              value: _vm.groupThreeValue[2],
                              "label-html":
                                "<span class='font-size-sm font-w600'>" +
                                _vm.groupThreeValue[2].toFixed() +
                                "%</span>",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-progress",
                        {
                          staticClass: "push",
                          attrs: {
                            max: _vm.max,
                            variant: "info",
                            animated: "",
                          },
                        },
                        [
                          _c("b-progress-bar", {
                            attrs: {
                              value: _vm.groupThreeValue[3],
                              "label-html":
                                "<span class='font-size-sm font-w600'>" +
                                _vm.groupThreeValue[3].toFixed() +
                                "%</span>",
                            },
                          }),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-progress",
                        {
                          staticClass: "push",
                          attrs: {
                            max: _vm.max,
                            variant: "success",
                            animated: "",
                          },
                        },
                        [
                          _c("b-progress-bar", {
                            attrs: {
                              value: _vm.groupThreeValue[4],
                              "label-html":
                                "<span class='font-size-sm font-w600'>" +
                                _vm.groupThreeValue[4].toFixed() +
                                "%</span>",
                            },
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
              _vm._v(" "),
              _c(
                "b-col",
                { attrs: { xl: "6" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: { rounded: "", title: "Mini" },
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
                                  on: {
                                    click: function ($event) {
                                      return _vm.randomValue(4)
                                    },
                                  },
                                },
                                [_c("i", { staticClass: "fa fa-random" })]
                              ),
                            ]
                          },
                          proxy: true,
                        },
                      ]),
                    },
                    [
                      _vm._v(" "),
                      _c("b-progress", {
                        staticClass: "push",
                        attrs: {
                          value: _vm.groupFourValue[0],
                          max: _vm.max,
                          variant: "primary",
                          height: "10px",
                        },
                      }),
                      _vm._v(" "),
                      _c("b-progress", {
                        staticClass: "push",
                        attrs: {
                          value: _vm.groupFourValue[1],
                          max: _vm.max,
                          variant: "warning",
                          height: "10px",
                        },
                      }),
                      _vm._v(" "),
                      _c("b-progress", {
                        staticClass: "push",
                        attrs: {
                          value: _vm.groupFourValue[2],
                          max: _vm.max,
                          variant: "danger",
                          height: "10px",
                        },
                      }),
                      _vm._v(" "),
                      _c("b-progress", {
                        staticClass: "push",
                        attrs: {
                          value: _vm.groupFourValue[3],
                          max: _vm.max,
                          variant: "info",
                          height: "10px",
                          striped: "",
                        },
                      }),
                      _vm._v(" "),
                      _c("b-progress", {
                        staticClass: "push",
                        attrs: {
                          value: _vm.groupFourValue[4],
                          max: _vm.max,
                          variant: "success",
                          height: "10px",
                          striped: "",
                        },
                      }),
                      _vm._v(" "),
                      _c("b-progress", {
                        staticClass: "push",
                        attrs: {
                          value: _vm.groupFourValue[5],
                          max: _vm.max,
                          variant: "muted",
                          height: "10px",
                          animated: "",
                        },
                      }),
                      _vm._v(" "),
                      _c("b-progress", {
                        staticClass: "push",
                        attrs: {
                          value: _vm.groupFourValue[6],
                          max: _vm.max,
                          variant: "dark",
                          height: "10px",
                          animated: "",
                        },
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
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);