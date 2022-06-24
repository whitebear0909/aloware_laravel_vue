"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_elements_Animations_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/elements/Animations.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/elements/Animations.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      attentionSeekers: {
        animated: false,
        animation: ''
      },
      bouncingEntrances: {
        animated: false,
        animation: ''
      },
      bouncingExits: {
        animated: false,
        animation: ''
      },
      fadingEntrances: {
        animated: false,
        animation: ''
      },
      fadingExits: {
        animated: false,
        animation: ''
      },
      flippers: {
        animated: false,
        animation: ''
      },
      lightspeed: {
        animated: false,
        animation: ''
      },
      rotatingEntrances: {
        animated: false,
        animation: ''
      },
      rotatingExits: {
        animated: false,
        animation: ''
      },
      slidingEntrances: {
        animated: false,
        animation: ''
      },
      slidingExits: {
        animated: false,
        animation: ''
      },
      zoomEntrances: {
        animated: false,
        animation: ''
      },
      zoomExits: {
        animated: false,
        animation: ''
      },
      specials: {
        animated: false,
        animation: ''
      }
    };
  },
  methods: {
    setAnimation: function setAnimation(animation, section) {
      // Remove animation classes
      this[section]['animated'] = false;
      this[section]['animation'] = ''; // Add them again to trigger the animation

      this[section]['animated'] = true;
      this[section]['animation'] = animation;
    },
    classContainer: function classContainer(section) {
      return _defineProperty({
        'animated': this[section]['animated']
      }, this[section]['animation'], this[section]['animation']);
    }
  }
});

/***/ }),

/***/ "./resources/js/views/elements/Animations.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/elements/Animations.vue ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Animations_vue_vue_type_template_id_37507610___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Animations.vue?vue&type=template&id=37507610& */ "./resources/js/views/elements/Animations.vue?vue&type=template&id=37507610&");
/* harmony import */ var _Animations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Animations.vue?vue&type=script&lang=js& */ "./resources/js/views/elements/Animations.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Animations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Animations_vue_vue_type_template_id_37507610___WEBPACK_IMPORTED_MODULE_0__.render,
  _Animations_vue_vue_type_template_id_37507610___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/elements/Animations.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/elements/Animations.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/elements/Animations.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Animations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Animations.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/elements/Animations.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Animations_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/elements/Animations.vue?vue&type=template&id=37507610&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/elements/Animations.vue?vue&type=template&id=37507610& ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Animations_vue_vue_type_template_id_37507610___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Animations_vue_vue_type_template_id_37507610___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Animations_vue_vue_type_template_id_37507610___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Animations.vue?vue&type=template&id=37507610& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/elements/Animations.vue?vue&type=template&id=37507610&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/elements/Animations.vue?vue&type=template&id=37507610&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/elements/Animations.vue?vue&type=template&id=37507610& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
          title: "Animations",
          subtitle:
            "Rich animation library will bring your elements to life and engage your users.",
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
                      _vm._v("Animations"),
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
            _vm._v("Attention Seekers"),
          ]),
          _vm._v(" "),
          _c(
            "base-block",
            {
              attrs: { rounded: "", "content-class": "overflow-hidden" },
              scopedSlots: _vm._u([
                {
                  key: "header",
                  fn: function () {
                    return [
                      _c("h3", { staticClass: "block-title" }, [
                        _vm._v("\n          Active CSS classes: "),
                        _c("small", [
                          _c("code", [
                            _vm._v(
                              _vm._s(
                                _vm.attentionSeekers.animated
                                  ? "animated " + _vm.attentionSeekers.animation
                                  : ""
                              )
                            ),
                          ]),
                        ]),
                      ]),
                    ]
                  },
                  proxy: true,
                },
              ]),
            },
            [
              _vm._v(" "),
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { attrs: { lg: "6" } },
                    [
                      _c(
                        "b-row",
                        { staticClass: "items-push" },
                        [
                          _c(
                            "b-col",
                            { attrs: { md: "6" } },
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "bounce",
                                        "attentionSeekers"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("bounce")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "flash",
                                        "attentionSeekers"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("flash")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "pulse",
                                        "attentionSeekers"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("pulse")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "rubberBand",
                                        "attentionSeekers"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("rubberBand")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "shake",
                                        "attentionSeekers"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("shake")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "swing",
                                        "attentionSeekers"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("swing")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "tada",
                                        "attentionSeekers"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("tada")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "wobble",
                                        "attentionSeekers"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("wobble")]
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
                    {
                      staticClass:
                        "d-lg-flex align-items-lg-center justify-content-lg-center text-center pb-4",
                      attrs: { lg: "6" },
                    },
                    [
                      _c(
                        "div",
                        { class: _vm.classContainer("attentionSeekers") },
                        [
                          _c("img", {
                            staticClass: "img-fluid",
                            attrs: {
                              src: "img/various/little-monster.png",
                              alt: "Cartoon",
                              width: "200",
                            },
                          }),
                        ]
                      ),
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
            _vm._v("Bouncing Entrances"),
          ]),
          _vm._v(" "),
          _c(
            "base-block",
            {
              attrs: { rounded: "", "content-class": "overflow-hidden" },
              scopedSlots: _vm._u([
                {
                  key: "header",
                  fn: function () {
                    return [
                      _c("h3", { staticClass: "block-title" }, [
                        _vm._v("\n          Active CSS classes: "),
                        _c("small", [
                          _c("code", [
                            _vm._v(
                              _vm._s(
                                _vm.bouncingEntrances.animated
                                  ? "animated " +
                                      _vm.bouncingEntrances.animation
                                  : ""
                              )
                            ),
                          ]),
                        ]),
                      ]),
                    ]
                  },
                  proxy: true,
                },
              ]),
            },
            [
              _vm._v(" "),
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { attrs: { lg: "6" } },
                    [
                      _c(
                        "b-row",
                        { staticClass: "items-push" },
                        [
                          _c(
                            "b-col",
                            { attrs: { md: "6" } },
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "bounceIn",
                                        "bouncingEntrances"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("bounceIn")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "bounceInDown",
                                        "bouncingEntrances"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("bounceInDown")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "bounceInLeft",
                                        "bouncingEntrances"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("bounceInLeft")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "bounceInRight",
                                        "bouncingEntrances"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("bounceInRight")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "bounceInUp",
                                        "bouncingEntrances"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("bounceInUp")]
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
                    {
                      staticClass:
                        "d-lg-flex align-items-lg-center justify-content-lg-center text-center pb-4",
                      attrs: { lg: "6" },
                    },
                    [
                      _c(
                        "div",
                        { class: _vm.classContainer("bouncingEntrances") },
                        [
                          _c("img", {
                            staticClass: "img-fluid",
                            attrs: {
                              src: "img/various/little-monster.png",
                              alt: "Cartoon",
                              width: "200",
                            },
                          }),
                        ]
                      ),
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
            _vm._v("Bouncing Exits"),
          ]),
          _vm._v(" "),
          _c(
            "base-block",
            {
              attrs: { rounded: "", "content-class": "overflow-hidden" },
              scopedSlots: _vm._u([
                {
                  key: "header",
                  fn: function () {
                    return [
                      _c("h3", { staticClass: "block-title" }, [
                        _vm._v("\n          Active CSS classes: "),
                        _c("small", [
                          _c("code", [
                            _vm._v(
                              _vm._s(
                                _vm.bouncingExits.animated
                                  ? "animated " + _vm.bouncingExits.animation
                                  : ""
                              )
                            ),
                          ]),
                        ]),
                      ]),
                    ]
                  },
                  proxy: true,
                },
              ]),
            },
            [
              _vm._v(" "),
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { attrs: { lg: "6" } },
                    [
                      _c(
                        "b-row",
                        { staticClass: "items-push" },
                        [
                          _c(
                            "b-col",
                            { attrs: { md: "6" } },
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "bounceOut",
                                        "bouncingExits"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("bounceOut")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "bounceOutDown",
                                        "bouncingExits"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("bounceOutDown")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "bounceOutLeft",
                                        "bouncingExits"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("bounceOutLeft")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "bounceOutRight",
                                        "bouncingExits"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("bounceOutRight")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "bounceOutUp",
                                        "bouncingExits"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("bounceOutUp")]
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
                    {
                      staticClass:
                        "d-lg-flex align-items-lg-center justify-content-lg-center text-center pb-4",
                      attrs: { lg: "6" },
                    },
                    [
                      _c(
                        "div",
                        { class: _vm.classContainer("bouncingExits") },
                        [
                          _c("img", {
                            staticClass: "img-fluid",
                            attrs: {
                              src: "img/various/little-monster.png",
                              alt: "Cartoon",
                              width: "200",
                            },
                          }),
                        ]
                      ),
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
            _vm._v("Fading Entrances"),
          ]),
          _vm._v(" "),
          _c(
            "base-block",
            {
              attrs: { rounded: "", "content-class": "overflow-hidden" },
              scopedSlots: _vm._u([
                {
                  key: "header",
                  fn: function () {
                    return [
                      _c("h3", { staticClass: "block-title" }, [
                        _vm._v("\n          Active CSS classes: "),
                        _c("small", [
                          _c("code", [
                            _vm._v(
                              _vm._s(
                                _vm.fadingEntrances.animated
                                  ? "animated " + _vm.fadingEntrances.animation
                                  : ""
                              )
                            ),
                          ]),
                        ]),
                      ]),
                    ]
                  },
                  proxy: true,
                },
              ]),
            },
            [
              _vm._v(" "),
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { attrs: { lg: "6" } },
                    [
                      _c(
                        "b-row",
                        { staticClass: "items-push" },
                        [
                          _c(
                            "b-col",
                            { attrs: { md: "6" } },
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "fadeIn",
                                        "fadingEntrances"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("fadeIn")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "fadeInDown",
                                        "fadingEntrances"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("fadeInDown")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "fadeInDownBig",
                                        "fadingEntrances"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("fadeInDownBig")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "fadeInLeft",
                                        "fadingEntrances"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("fadeInLeft")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "fadeInLeftBig",
                                        "fadingEntrances"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("fadeInLeftBig")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "fadeInRight",
                                        "fadingEntrances"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("fadeInRight")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "fadeInRightBig",
                                        "fadingEntrances"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("fadeInRightBig")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "fadeInUp",
                                        "fadingEntrances"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("fadeInUp")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "fadeInUpBig",
                                        "fadingEntrances"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("fadeInUpBig")]
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
                    {
                      staticClass:
                        "d-lg-flex align-items-lg-center justify-content-lg-center text-center pb-4",
                      attrs: { lg: "6" },
                    },
                    [
                      _c(
                        "div",
                        { class: _vm.classContainer("fadingEntrances") },
                        [
                          _c("img", {
                            staticClass: "img-fluid",
                            attrs: {
                              src: "img/various/little-monster.png",
                              alt: "Cartoon",
                              width: "200",
                            },
                          }),
                        ]
                      ),
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
            _vm._v("Fading Exits"),
          ]),
          _vm._v(" "),
          _c(
            "base-block",
            {
              attrs: { rounded: "", "content-class": "overflow-hidden" },
              scopedSlots: _vm._u([
                {
                  key: "header",
                  fn: function () {
                    return [
                      _c("h3", { staticClass: "block-title" }, [
                        _vm._v("\n          Active CSS classes: "),
                        _c("small", [
                          _c("code", [
                            _vm._v(
                              _vm._s(
                                _vm.fadingExits.animated
                                  ? "animated " + _vm.fadingExits.animation
                                  : ""
                              )
                            ),
                          ]),
                        ]),
                      ]),
                    ]
                  },
                  proxy: true,
                },
              ]),
            },
            [
              _vm._v(" "),
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { attrs: { lg: "6" } },
                    [
                      _c(
                        "b-row",
                        { staticClass: "items-push" },
                        [
                          _c(
                            "b-col",
                            { attrs: { md: "6" } },
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "fadeOut",
                                        "fadingExits"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("fadeOut")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "fadeOutDown",
                                        "fadingExits"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("fadeOutDown")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "fadeOutDownBig",
                                        "fadingExits"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("fadeOutDownBig")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "fadeOutLeft",
                                        "fadingExits"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("fadeOutLeft")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "fadeOutLeftBig",
                                        "fadingExits"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("fadeOutLeftBig")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "fadeOutRight",
                                        "fadingExits"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("fadeOutRight")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "fadeOutRightBig",
                                        "fadingExits"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("fadeOutRightBig")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "fadeOutUp",
                                        "fadingExits"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("fadeOutUp")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "fadeOutUpBig",
                                        "fadingExits"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("fadeOutUpBig")]
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
                    {
                      staticClass:
                        "d-lg-flex align-items-lg-center justify-content-lg-center text-center pb-4",
                      attrs: { lg: "6" },
                    },
                    [
                      _c("div", { class: _vm.classContainer("fadingExits") }, [
                        _c("img", {
                          staticClass: "img-fluid",
                          attrs: {
                            src: "img/various/little-monster.png",
                            alt: "Cartoon",
                            width: "200",
                          },
                        }),
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
          _c("h2", { staticClass: "content-heading" }, [_vm._v("Flippers")]),
          _vm._v(" "),
          _c(
            "base-block",
            {
              attrs: { rounded: "", "content-class": "overflow-hidden" },
              scopedSlots: _vm._u([
                {
                  key: "header",
                  fn: function () {
                    return [
                      _c("h3", { staticClass: "block-title" }, [
                        _vm._v("\n          Active CSS classes: "),
                        _c("small", [
                          _c("code", [
                            _vm._v(
                              _vm._s(
                                _vm.flippers.animated
                                  ? "animated " + _vm.flippers.animation
                                  : ""
                              )
                            ),
                          ]),
                        ]),
                      ]),
                    ]
                  },
                  proxy: true,
                },
              ]),
            },
            [
              _vm._v(" "),
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { attrs: { lg: "6" } },
                    [
                      _c(
                        "b-row",
                        { staticClass: "items-push" },
                        [
                          _c(
                            "b-col",
                            { attrs: { md: "6" } },
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "flip",
                                        "flippers"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("flip")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "flipInX",
                                        "flippers"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("flipInX")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "flipInY",
                                        "flippers"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("flipInY")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "flipOutX",
                                        "flippers"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("flipOutX")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "flipOutY",
                                        "flippers"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("flipOutY")]
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
                    {
                      staticClass:
                        "d-lg-flex align-items-lg-center justify-content-lg-center text-center pb-4",
                      attrs: { lg: "6" },
                    },
                    [
                      _c("div", { class: _vm.classContainer("flippers") }, [
                        _c("img", {
                          staticClass: "img-fluid",
                          attrs: {
                            src: "img/various/little-monster.png",
                            alt: "Cartoon",
                            width: "200",
                          },
                        }),
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
          _c("h2", { staticClass: "content-heading" }, [_vm._v("Lightspeed")]),
          _vm._v(" "),
          _c(
            "base-block",
            {
              attrs: { rounded: "", "content-class": "overflow-hidden" },
              scopedSlots: _vm._u([
                {
                  key: "header",
                  fn: function () {
                    return [
                      _c("h3", { staticClass: "block-title" }, [
                        _vm._v("\n          Active CSS classes: "),
                        _c("small", [
                          _c("code", [
                            _vm._v(
                              _vm._s(
                                _vm.lightspeed.animated
                                  ? "animated " + _vm.lightspeed.animation
                                  : ""
                              )
                            ),
                          ]),
                        ]),
                      ]),
                    ]
                  },
                  proxy: true,
                },
              ]),
            },
            [
              _vm._v(" "),
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { attrs: { lg: "6" } },
                    [
                      _c(
                        "b-row",
                        { staticClass: "items-push" },
                        [
                          _c(
                            "b-col",
                            { attrs: { md: "6" } },
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "lightSpeedIn",
                                        "lightspeed"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("lightSpeedIn")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "lightSpeedOut",
                                        "lightspeed"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("lightSpeedOut")]
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
                    {
                      staticClass:
                        "d-lg-flex align-items-lg-center justify-content-lg-center text-center pb-4",
                      attrs: { lg: "6" },
                    },
                    [
                      _c("div", { class: _vm.classContainer("lightspeed") }, [
                        _c("img", {
                          staticClass: "img-fluid",
                          attrs: {
                            src: "img/various/little-monster.png",
                            alt: "Cartoon",
                            width: "200",
                          },
                        }),
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
            _vm._v("Rotating Entrances"),
          ]),
          _vm._v(" "),
          _c(
            "base-block",
            {
              attrs: { rounded: "", "content-class": "overflow-hidden" },
              scopedSlots: _vm._u([
                {
                  key: "header",
                  fn: function () {
                    return [
                      _c("h3", { staticClass: "block-title" }, [
                        _vm._v("\n          Active CSS classes: "),
                        _c("small", [
                          _c("code", [
                            _vm._v(
                              _vm._s(
                                _vm.rotatingEntrances.animated
                                  ? "animated " +
                                      _vm.rotatingEntrances.animation
                                  : ""
                              )
                            ),
                          ]),
                        ]),
                      ]),
                    ]
                  },
                  proxy: true,
                },
              ]),
            },
            [
              _vm._v(" "),
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { attrs: { lg: "6" } },
                    [
                      _c(
                        "b-row",
                        { staticClass: "items-push" },
                        [
                          _c(
                            "b-col",
                            { attrs: { md: "6" } },
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "rotateIn",
                                        "rotatingEntrances"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("rotateIn")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "rotateInDownLeft",
                                        "rotatingEntrances"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("rotateInDownLeft")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "rotateInDownRight",
                                        "rotatingEntrances"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("rotateInDownRight")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "rotateInDownLeft",
                                        "rotatingEntrances"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("rotateInDownLeft")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "rotateInUpRight",
                                        "rotatingEntrances"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("rotateInUpRight")]
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
                    {
                      staticClass:
                        "d-lg-flex align-items-lg-center justify-content-lg-center text-center pb-4",
                      attrs: { lg: "6" },
                    },
                    [
                      _c(
                        "div",
                        { class: _vm.classContainer("rotatingEntrances") },
                        [
                          _c("img", {
                            staticClass: "img-fluid",
                            attrs: {
                              src: "img/various/little-monster.png",
                              alt: "Cartoon",
                              width: "200",
                            },
                          }),
                        ]
                      ),
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
            _vm._v("Rotating Exits"),
          ]),
          _vm._v(" "),
          _c(
            "base-block",
            {
              attrs: { rounded: "", "content-class": "overflow-hidden" },
              scopedSlots: _vm._u([
                {
                  key: "header",
                  fn: function () {
                    return [
                      _c("h3", { staticClass: "block-title" }, [
                        _vm._v("\n          Active CSS classes: "),
                        _c("small", [
                          _c("code", [
                            _vm._v(
                              _vm._s(
                                _vm.rotatingExits.animated
                                  ? "animated " + _vm.rotatingExits.animation
                                  : ""
                              )
                            ),
                          ]),
                        ]),
                      ]),
                    ]
                  },
                  proxy: true,
                },
              ]),
            },
            [
              _vm._v(" "),
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { attrs: { lg: "6" } },
                    [
                      _c(
                        "b-row",
                        { staticClass: "items-push" },
                        [
                          _c(
                            "b-col",
                            { attrs: { md: "6" } },
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "rotateOut",
                                        "rotatingExits"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("rotateOut")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "rotateOutDownLeft",
                                        "rotatingExits"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("rotateOutDownLeft")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "rotateOutDownRight",
                                        "rotatingExits"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("rotateOutDownRight")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "rotateOutUpLeft",
                                        "rotatingExits"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("rotateOutUpLeft")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "rotateOutUpRight",
                                        "rotatingExits"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("rotateOutUpRight")]
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
                    {
                      staticClass:
                        "d-lg-flex align-items-lg-center justify-content-lg-center text-center pb-4",
                      attrs: { lg: "6" },
                    },
                    [
                      _c(
                        "div",
                        { class: _vm.classContainer("rotatingExits") },
                        [
                          _c("img", {
                            staticClass: "img-fluid",
                            attrs: {
                              src: "img/various/little-monster.png",
                              alt: "Cartoon",
                              width: "200",
                            },
                          }),
                        ]
                      ),
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
            _vm._v("Sliding Entrances"),
          ]),
          _vm._v(" "),
          _c(
            "base-block",
            {
              attrs: { rounded: "", "content-class": "overflow-hidden" },
              scopedSlots: _vm._u([
                {
                  key: "header",
                  fn: function () {
                    return [
                      _c("h3", { staticClass: "block-title" }, [
                        _vm._v("\n          Active CSS classes: "),
                        _c("small", [
                          _c("code", [
                            _vm._v(
                              _vm._s(
                                _vm.slidingEntrances.animated
                                  ? "animated " + _vm.slidingEntrances.animation
                                  : ""
                              )
                            ),
                          ]),
                        ]),
                      ]),
                    ]
                  },
                  proxy: true,
                },
              ]),
            },
            [
              _vm._v(" "),
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { attrs: { lg: "6" } },
                    [
                      _c(
                        "b-row",
                        { staticClass: "items-push" },
                        [
                          _c(
                            "b-col",
                            { attrs: { md: "6" } },
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "slideInUp",
                                        "slidingEntrances"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("slideInUp")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "slideInDown",
                                        "slidingEntrances"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("slideInDown")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "slideInLeft",
                                        "slidingEntrances"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("slideInLeft")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "slideInRight",
                                        "slidingEntrances"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("slideInRight")]
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
                    {
                      staticClass:
                        "d-lg-flex align-items-lg-center justify-content-lg-center text-center pb-4",
                      attrs: { lg: "6" },
                    },
                    [
                      _c(
                        "div",
                        { class: _vm.classContainer("slidingEntrances") },
                        [
                          _c("img", {
                            staticClass: "img-fluid",
                            attrs: {
                              src: "img/various/little-monster.png",
                              alt: "Cartoon",
                              width: "200",
                            },
                          }),
                        ]
                      ),
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
            _vm._v("Sliding Exits"),
          ]),
          _vm._v(" "),
          _c(
            "base-block",
            {
              attrs: { rounded: "", "content-class": "overflow-hidden" },
              scopedSlots: _vm._u([
                {
                  key: "header",
                  fn: function () {
                    return [
                      _c("h3", { staticClass: "block-title" }, [
                        _vm._v("\n          Active CSS classes: "),
                        _c("small", [
                          _c("code", [
                            _vm._v(
                              _vm._s(
                                _vm.slidingExits.animated
                                  ? "animated " + _vm.slidingExits.animation
                                  : ""
                              )
                            ),
                          ]),
                        ]),
                      ]),
                    ]
                  },
                  proxy: true,
                },
              ]),
            },
            [
              _vm._v(" "),
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { attrs: { lg: "6" } },
                    [
                      _c(
                        "b-row",
                        { staticClass: "items-push" },
                        [
                          _c(
                            "b-col",
                            { attrs: { md: "6" } },
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "slideOutUp",
                                        "slidingExits"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("slideOutUp")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "slideOutDown",
                                        "slidingExits"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("slideOutDown")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "slideOutLeft",
                                        "slidingExits"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("slideOutLeft")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "slideOutRight",
                                        "slidingExits"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("slideOutRight")]
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
                    {
                      staticClass:
                        "d-lg-flex align-items-lg-center justify-content-lg-center text-center pb-4",
                      attrs: { lg: "6" },
                    },
                    [
                      _c("div", { class: _vm.classContainer("slidingExits") }, [
                        _c("img", {
                          staticClass: "img-fluid",
                          attrs: {
                            src: "img/various/little-monster.png",
                            alt: "Cartoon",
                            width: "200",
                          },
                        }),
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
            _vm._v("Zoom Entrances"),
          ]),
          _vm._v(" "),
          _c(
            "base-block",
            {
              attrs: { rounded: "", "content-class": "overflow-hidden" },
              scopedSlots: _vm._u([
                {
                  key: "header",
                  fn: function () {
                    return [
                      _c("h3", { staticClass: "block-title" }, [
                        _vm._v("\n          Active CSS classes: "),
                        _c("small", [
                          _c("code", [
                            _vm._v(
                              _vm._s(
                                _vm.zoomEntrances.animated
                                  ? "animated " + _vm.zoomEntrances.animation
                                  : ""
                              )
                            ),
                          ]),
                        ]),
                      ]),
                    ]
                  },
                  proxy: true,
                },
              ]),
            },
            [
              _vm._v(" "),
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { attrs: { lg: "6" } },
                    [
                      _c(
                        "b-row",
                        { staticClass: "items-push" },
                        [
                          _c(
                            "b-col",
                            { attrs: { md: "6" } },
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "zoomIn",
                                        "zoomEntrances"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("zoomIn")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "zoomInDown",
                                        "zoomEntrances"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("zoomInDown")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "zoomInLeft",
                                        "zoomEntrances"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("zoomInLeft")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "zoomInRight",
                                        "zoomEntrances"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("zoomInRight")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "zoomInUp",
                                        "zoomEntrances"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("zoomInUp")]
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
                    {
                      staticClass:
                        "d-lg-flex align-items-lg-center justify-content-lg-center text-center pb-4",
                      attrs: { lg: "6" },
                    },
                    [
                      _c(
                        "div",
                        { class: _vm.classContainer("zoomEntrances") },
                        [
                          _c("img", {
                            staticClass: "img-fluid",
                            attrs: {
                              src: "img/various/little-monster.png",
                              alt: "Cartoon",
                              width: "200",
                            },
                          }),
                        ]
                      ),
                    ]
                  ),
                ],
                1
              ),
            ],
            1
          ),
          _vm._v(" "),
          _c("h2", { staticClass: "content-heading" }, [_vm._v("Zoom Exits")]),
          _vm._v(" "),
          _c(
            "base-block",
            {
              attrs: { rounded: "", "content-class": "overflow-hidden" },
              scopedSlots: _vm._u([
                {
                  key: "header",
                  fn: function () {
                    return [
                      _c("h3", { staticClass: "block-title" }, [
                        _vm._v("\n          Active CSS classes: "),
                        _c("small", [
                          _c("code", [
                            _vm._v(
                              _vm._s(
                                _vm.zoomExits.animated
                                  ? "animated " + _vm.zoomExits.animation
                                  : ""
                              )
                            ),
                          ]),
                        ]),
                      ]),
                    ]
                  },
                  proxy: true,
                },
              ]),
            },
            [
              _vm._v(" "),
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { attrs: { lg: "6" } },
                    [
                      _c(
                        "b-row",
                        { staticClass: "items-push" },
                        [
                          _c(
                            "b-col",
                            { attrs: { md: "6" } },
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "zoomOut",
                                        "zoomExits"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("zoomOut")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "zoomOutDown",
                                        "zoomExits"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("zoomOutDown")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "zoomOutLeft",
                                        "zoomExits"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("zoomOutLeft")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "zoomOutRight",
                                        "zoomExits"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("zoomOutRight")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "zoomOutUp",
                                        "zoomExits"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("zoomOutUp")]
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
                    {
                      staticClass:
                        "d-lg-flex align-items-lg-center justify-content-lg-center text-center pb-4",
                      attrs: { lg: "6" },
                    },
                    [
                      _c("div", { class: _vm.classContainer("zoomExits") }, [
                        _c("img", {
                          staticClass: "img-fluid",
                          attrs: {
                            src: "img/various/little-monster.png",
                            alt: "Cartoon",
                            width: "200",
                          },
                        }),
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
          _c("h2", { staticClass: "content-heading" }, [_vm._v("Specials")]),
          _vm._v(" "),
          _c(
            "base-block",
            {
              attrs: { rounded: "", "content-class": "overflow-hidden" },
              scopedSlots: _vm._u([
                {
                  key: "header",
                  fn: function () {
                    return [
                      _c("h3", { staticClass: "block-title" }, [
                        _vm._v("\n          Active CSS classes: "),
                        _c("small", [
                          _c("code", [
                            _vm._v(
                              _vm._s(
                                _vm.specials.animated
                                  ? "animated " + _vm.specials.animation
                                  : ""
                              )
                            ),
                          ]),
                        ]),
                      ]),
                    ]
                  },
                  proxy: true,
                },
              ]),
            },
            [
              _vm._v(" "),
              _c(
                "b-row",
                [
                  _c(
                    "b-col",
                    { attrs: { lg: "6" } },
                    [
                      _c(
                        "b-row",
                        { staticClass: "items-push" },
                        [
                          _c(
                            "b-col",
                            { attrs: { md: "6" } },
                            [
                              _c(
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "hinge",
                                        "specials"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("hinge")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "rollIn",
                                        "specials"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("rollIn")]
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
                                "b-button",
                                {
                                  attrs: { variant: "alt-primary", block: "" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.setAnimation(
                                        "rollOut",
                                        "specials"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("rollOut")]
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
                    {
                      staticClass:
                        "d-lg-flex align-items-lg-center justify-content-lg-center text-center pb-4",
                      attrs: { lg: "6" },
                    },
                    [
                      _c("div", { class: _vm.classContainer("specials") }, [
                        _c("img", {
                          staticClass: "img-fluid",
                          attrs: {
                            src: "img/various/little-monster.png",
                            alt: "Cartoon",
                            width: "200",
                          },
                        }),
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