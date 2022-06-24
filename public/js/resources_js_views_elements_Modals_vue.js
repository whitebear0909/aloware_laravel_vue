"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_elements_Modals_vue"],{

/***/ "./resources/js/views/elements/Modals.vue":
/*!************************************************!*\
  !*** ./resources/js/views/elements/Modals.vue ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Modals_vue_vue_type_template_id_9cea5022___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modals.vue?vue&type=template&id=9cea5022& */ "./resources/js/views/elements/Modals.vue?vue&type=template&id=9cea5022&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Modals_vue_vue_type_template_id_9cea5022___WEBPACK_IMPORTED_MODULE_0__.render,
  _Modals_vue_vue_type_template_id_9cea5022___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/elements/Modals.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/elements/Modals.vue?vue&type=template&id=9cea5022&":
/*!*******************************************************************************!*\
  !*** ./resources/js/views/elements/Modals.vue?vue&type=template&id=9cea5022& ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modals_vue_vue_type_template_id_9cea5022___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modals_vue_vue_type_template_id_9cea5022___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Modals_vue_vue_type_template_id_9cea5022___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Modals.vue?vue&type=template&id=9cea5022& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/elements/Modals.vue?vue&type=template&id=9cea5022&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/elements/Modals.vue?vue&type=template&id=9cea5022&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/elements/Modals.vue?vue&type=template&id=9cea5022& ***!
  \**********************************************************************************************************************************************************************************************************************/
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
          title: "Modals",
          subtitle:
            "Add dialogs to your site for lightboxes, user notifications, or completely custom content.",
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
                      _vm._v("Modals"),
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
            _vm._v("Bootstrap Modals"),
          ]),
          _vm._v(" "),
          _c(
            "b-row",
            { staticClass: "row-deck" },
            [
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "base-block",
                    { attrs: { rounded: "", title: "Default Variation" } },
                    [
                      _c("p", { staticClass: "font-size-sm text-muted" }, [
                        _vm._v(
                          "\n            Modals are completely customizable and here we present the default one\n          "
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-modal",
                              rawName: "v-b-modal.modal-block-normal",
                              modifiers: { "modal-block-normal": true },
                            },
                          ],
                          staticClass: "push",
                          attrs: { variant: "alt-primary" },
                        },
                        [_vm._v("\n            Launch Modal\n          ")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      attrs: {
                        id: "modal-block-normal",
                        "body-class": "p-0",
                        "hide-footer": "",
                        "hide-header": "",
                      },
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "block block-rounded block-themed block-transparent mb-0",
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "block-header bg-primary-dark" },
                            [
                              _c("h3", { staticClass: "block-title" }, [
                                _vm._v("Modal Title"),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "block-options" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn-block-option",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function ($event) {
                                        return _vm.$bvModal.hide(
                                          "modal-block-normal"
                                        )
                                      },
                                    },
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-fw fa-times",
                                    }),
                                  ]
                                ),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "block-content font-size-sm" },
                            [
                              _c("p", [
                                _vm._v(
                                  "\n                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.\n              "
                                ),
                              ]),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "\n                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.\n              "
                                ),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "block-content block-content-full text-right border-top",
                            },
                            [
                              _c(
                                "b-button",
                                {
                                  staticClass: "mr-1",
                                  attrs: { variant: "alt-primary" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-normal"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("Close")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  attrs: { variant: "primary" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-normal"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("Ok")]
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
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
                    { attrs: { rounded: "", title: "Size: Small" } },
                    [
                      _c("p", { staticClass: "font-size-sm text-muted" }, [
                        _vm._v(
                          "\n            If you don’t have much content, you can use the small size variation\n          "
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-modal",
                              rawName: "v-b-modal.modal-block-small",
                              modifiers: { "modal-block-small": true },
                            },
                          ],
                          staticClass: "push",
                          attrs: { variant: "alt-primary" },
                        },
                        [_vm._v("\n            Launch Modal\n          ")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      attrs: {
                        id: "modal-block-small",
                        size: "sm",
                        "body-class": "p-0",
                        "hide-footer": "",
                        "hide-header": "",
                      },
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "block block-rounded block-themed block-transparent mb-0",
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "block-header bg-primary-dark" },
                            [
                              _c("h3", { staticClass: "block-title" }, [
                                _vm._v("Modal Title"),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "block-options" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn-block-option",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function ($event) {
                                        return _vm.$bvModal.hide(
                                          "modal-block-small"
                                        )
                                      },
                                    },
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-fw fa-times",
                                    }),
                                  ]
                                ),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "block-content font-size-sm" },
                            [
                              _c("p", [
                                _vm._v(
                                  "\n                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.\n              "
                                ),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "block-content block-content-full text-right border-top",
                            },
                            [
                              _c(
                                "b-button",
                                {
                                  staticClass: "mr-1",
                                  attrs: { variant: "alt-primary" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-small"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("Close")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  attrs: { variant: "primary" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-small"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("Ok")]
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
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
                    { attrs: { rounded: "", title: "Size: Large" } },
                    [
                      _c("p", { staticClass: "font-size-sm text-muted" }, [
                        _vm._v(
                          "\n            If you need more space you can use the large size variation\n          "
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-modal",
                              rawName: "v-b-modal.modal-block-large",
                              modifiers: { "modal-block-large": true },
                            },
                          ],
                          staticClass: "push",
                          attrs: { variant: "alt-primary" },
                        },
                        [_vm._v("\n            Launch Modal\n          ")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      attrs: {
                        id: "modal-block-large",
                        size: "lg",
                        "body-class": "p-0",
                        "hide-footer": "",
                        "hide-header": "",
                      },
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "block block-rounded block-themed block-transparent mb-0",
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "block-header bg-primary-dark" },
                            [
                              _c("h3", { staticClass: "block-title" }, [
                                _vm._v("Modal Title"),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "block-options" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn-block-option",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function ($event) {
                                        return _vm.$bvModal.hide(
                                          "modal-block-large"
                                        )
                                      },
                                    },
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-fw fa-times",
                                    }),
                                  ]
                                ),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "block-content font-size-sm" },
                            [
                              _c("p", [
                                _vm._v(
                                  "\n                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.\n              "
                                ),
                              ]),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "\n                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.\n              "
                                ),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "block-content block-content-full text-right border-top",
                            },
                            [
                              _c(
                                "b-button",
                                {
                                  staticClass: "mr-1",
                                  attrs: { variant: "alt-primary" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-large"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("Close")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  attrs: { variant: "primary" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-large"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("Ok")]
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
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
                    { attrs: { rounded: "", title: "Size: Extra Large" } },
                    [
                      _c("p", { staticClass: "font-size-sm text-muted" }, [
                        _vm._v(
                          "\n            Do you need even more space? Go for the extra large modal\n          "
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-modal",
                              rawName: "v-b-modal.modal-block-extra-large",
                              modifiers: { "modal-block-extra-large": true },
                            },
                          ],
                          staticClass: "push",
                          attrs: { variant: "alt-primary" },
                        },
                        [_vm._v("\n            Launch Modal\n          ")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      attrs: {
                        id: "modal-block-extra-large",
                        size: "xl",
                        "body-class": "p-0",
                        "hide-footer": "",
                        "hide-header": "",
                      },
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "block block-rounded block-themed block-transparent mb-0",
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "block-header bg-primary-dark" },
                            [
                              _c("h3", { staticClass: "block-title" }, [
                                _vm._v("Modal Title"),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "block-options" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn-block-option",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function ($event) {
                                        return _vm.$bvModal.hide(
                                          "modal-block-extra-large"
                                        )
                                      },
                                    },
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-fw fa-times",
                                    }),
                                  ]
                                ),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "block-content font-size-sm" },
                            [
                              _c("p", [
                                _vm._v(
                                  "\n                Potenti elit lectus augue eget iaculis vitae etiam, ullamcorper etiam bibendum ad feugiat magna accumsan dolor, nibh molestie cras hac ac ad massa, fusce ante convallis ante urna molestie vulputate bibendum tempus ante justo arcu erat accumsan adipiscing risus, libero condimentum venenatis sit nisl nisi ultricies sed, fames aliquet consectetur consequat nostra molestie neque nullam scelerisque neque commodo turpis quisque etiam egestas vulputate massa, curabitur tellus massa venenatis congue dolor enim integer luctus, nisi suscipit gravida fames quis vulputate nisi viverra luctus id leo dictum lorem, inceptos nibh orci.\n              "
                                ),
                              ]),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "\n                Potenti elit lectus augue eget iaculis vitae etiam, ullamcorper etiam bibendum ad feugiat magna accumsan dolor, nibh molestie cras hac ac ad massa, fusce ante convallis ante urna molestie vulputate bibendum tempus ante justo arcu erat accumsan adipiscing risus, libero condimentum venenatis sit nisl nisi ultricies sed, fames aliquet consectetur consequat nostra molestie neque nullam scelerisque neque commodo turpis quisque etiam egestas vulputate massa, curabitur tellus massa venenatis congue dolor enim integer luctus, nisi suscipit gravida fames quis vulputate nisi viverra luctus id leo dictum lorem, inceptos nibh orci.\n              "
                                ),
                              ]),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "\n                Potenti elit lectus augue eget iaculis vitae etiam, ullamcorper etiam bibendum ad feugiat magna accumsan dolor, nibh molestie cras hac ac ad massa, fusce ante convallis ante urna molestie vulputate bibendum tempus ante justo arcu erat accumsan adipiscing risus, libero condimentum venenatis sit nisl nisi ultricies sed, fames aliquet consectetur consequat nostra molestie neque nullam scelerisque neque commodo turpis quisque etiam egestas vulputate massa, curabitur tellus massa venenatis congue dolor enim integer luctus, nisi suscipit gravida fames quis vulputate nisi viverra luctus id leo dictum lorem, inceptos nibh orci.\n              "
                                ),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "block-content block-content-full text-right border-top",
                            },
                            [
                              _c(
                                "b-button",
                                {
                                  staticClass: "mr-1",
                                  attrs: { variant: "alt-primary" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-extra-large"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("Close")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  attrs: { variant: "primary" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-extra-large"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("Ok")]
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
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
                    { attrs: { rounded: "", title: "Position: Top" } },
                    [
                      _c("p", { staticClass: "font-size-sm text-muted" }, [
                        _vm._v(
                          "\n            You can position your modals at the top of the screen\n          "
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-modal",
                              rawName: "v-b-modal.modal-block-top",
                              modifiers: { "modal-block-top": true },
                            },
                          ],
                          staticClass: "push",
                          attrs: { variant: "alt-primary" },
                        },
                        [_vm._v("\n            Launch Modal\n          ")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      attrs: {
                        id: "modal-block-top",
                        "dialog-class": "modal-dialog-top",
                        "body-class": "p-0",
                        "hide-footer": "",
                        "hide-header": "",
                      },
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "block block-rounded block-themed block-transparent mb-0",
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "block-header bg-primary-dark" },
                            [
                              _c("h3", { staticClass: "block-title" }, [
                                _vm._v("Modal Title"),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "block-options" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn-block-option",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function ($event) {
                                        return _vm.$bvModal.hide(
                                          "modal-block-top"
                                        )
                                      },
                                    },
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-fw fa-times",
                                    }),
                                  ]
                                ),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "block-content font-size-sm" },
                            [
                              _c("p", [
                                _vm._v(
                                  "\n                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.\n              "
                                ),
                              ]),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "\n                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.\n              "
                                ),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "block-content block-content-full text-right border-top",
                            },
                            [
                              _c(
                                "b-button",
                                {
                                  staticClass: "mr-1",
                                  attrs: { variant: "alt-primary" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-top"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("Close")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  attrs: { variant: "primary" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-top"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("Ok")]
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
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
                        rounded: "",
                        title: "Position: Vertically Centered",
                      },
                    },
                    [
                      _c("p", { staticClass: "font-size-sm text-muted" }, [
                        _vm._v(
                          "\n            You can center your modals in the middle of the screen\n          "
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-modal",
                              rawName: "v-b-modal.modal-block-vcenter",
                              modifiers: { "modal-block-vcenter": true },
                            },
                          ],
                          staticClass: "push",
                          attrs: { variant: "alt-primary" },
                        },
                        [_vm._v("\n            Launch Modal\n          ")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      attrs: {
                        id: "modal-block-vcenter",
                        "body-class": "p-0",
                        centered: "",
                        "hide-footer": "",
                        "hide-header": "",
                      },
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "block block-rounded block-themed block-transparent mb-0",
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "block-header bg-primary-dark" },
                            [
                              _c("h3", { staticClass: "block-title" }, [
                                _vm._v("Modal Title"),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "block-options" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn-block-option",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function ($event) {
                                        return _vm.$bvModal.hide(
                                          "modal-block-vcenter"
                                        )
                                      },
                                    },
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-fw fa-times",
                                    }),
                                  ]
                                ),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "block-content font-size-sm" },
                            [
                              _c("p", [
                                _vm._v(
                                  "\n                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.\n              "
                                ),
                              ]),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "\n                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.\n              "
                                ),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "block-content block-content-full text-right border-top",
                            },
                            [
                              _c(
                                "b-button",
                                {
                                  staticClass: "mr-1",
                                  attrs: { variant: "alt-primary" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-vcenter"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("Close")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  attrs: { variant: "primary" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-vcenter"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("Ok")]
                              ),
                            ],
                            1
                          ),
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
          _vm._m(0),
          _vm._v(" "),
          _c(
            "b-row",
            { staticClass: "row-deck" },
            [
              _c(
                "b-col",
                { attrs: { md: "6" } },
                [
                  _c(
                    "base-block",
                    { attrs: { rounded: "", title: "Fade In" } },
                    [
                      _c("p", { staticClass: "font-size-sm text-muted" }, [
                        _vm._v(
                          "\n            The default modal animation\n          "
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-modal",
                              rawName: "v-b-modal.modal-block-fadein",
                              modifiers: { "modal-block-fadein": true },
                            },
                          ],
                          staticClass: "push",
                          attrs: { variant: "alt-primary" },
                        },
                        [_vm._v("\n            Launch Modal\n          ")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      attrs: {
                        id: "modal-block-fadein",
                        "body-class": "p-0",
                        "hide-footer": "",
                        "hide-header": "",
                      },
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "block block-rounded block-themed block-transparent mb-0",
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "block-header bg-primary-dark" },
                            [
                              _c("h3", { staticClass: "block-title" }, [
                                _vm._v("Modal Title"),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "block-options" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn-block-option",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function ($event) {
                                        return _vm.$bvModal.hide(
                                          "modal-block-fadein"
                                        )
                                      },
                                    },
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-fw fa-times",
                                    }),
                                  ]
                                ),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "block-content font-size-sm" },
                            [
                              _c("p", [
                                _vm._v(
                                  "\n                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.\n              "
                                ),
                              ]),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "\n                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.\n              "
                                ),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "block-content block-content-full text-right border-top",
                            },
                            [
                              _c(
                                "b-button",
                                {
                                  staticClass: "mr-1",
                                  attrs: { variant: "alt-primary" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-fadein"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("Close")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  attrs: { variant: "primary" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-fadein"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("Ok")]
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
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
                    { attrs: { rounded: "", title: "Pop In" } },
                    [
                      _c("p", { staticClass: "font-size-sm text-muted" }, [
                        _vm._v("\n            Poping in animation\n          "),
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-modal",
                              rawName: "v-b-modal.modal-block-popin",
                              modifiers: { "modal-block-popin": true },
                            },
                          ],
                          staticClass: "push",
                          attrs: { variant: "alt-primary" },
                        },
                        [_vm._v("\n            Launch Modal\n          ")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      attrs: {
                        id: "modal-block-popin",
                        "dialog-class": "modal-dialog-popin",
                        "body-class": "p-0",
                        "hide-footer": "",
                        "hide-header": "",
                      },
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "block block-rounded block-themed block-transparent mb-0",
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "block-header bg-primary-dark" },
                            [
                              _c("h3", { staticClass: "block-title" }, [
                                _vm._v("Modal Title"),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "block-options" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn-block-option",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function ($event) {
                                        return _vm.$bvModal.hide(
                                          "modal-block-popin"
                                        )
                                      },
                                    },
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-fw fa-times",
                                    }),
                                  ]
                                ),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "block-content font-size-sm" },
                            [
                              _c("p", [
                                _vm._v(
                                  "\n                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.\n              "
                                ),
                              ]),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "\n                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.\n              "
                                ),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "block-content block-content-full text-right border-top",
                            },
                            [
                              _c(
                                "b-button",
                                {
                                  staticClass: "mr-1",
                                  attrs: { variant: "alt-primary" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-popin"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("Close")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  attrs: { variant: "primary" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-popin"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("Ok")]
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
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
                    { attrs: { rounded: "", title: "Pop Out" } },
                    [
                      _c("p", { staticClass: "font-size-sm text-muted" }, [
                        _vm._v(
                          "\n            Poping out animation\n          "
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-modal",
                              rawName: "v-b-modal.modal-block-popout",
                              modifiers: { "modal-block-popout": true },
                            },
                          ],
                          staticClass: "push",
                          attrs: { variant: "alt-primary" },
                        },
                        [_vm._v("\n            Launch Modal\n          ")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      attrs: {
                        id: "modal-block-popout",
                        "dialog-class": "modal-dialog-popout",
                        "body-class": "p-0",
                        "hide-footer": "",
                        "hide-header": "",
                      },
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "block block-rounded block-themed block-transparent mb-0",
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "block-header bg-primary-dark" },
                            [
                              _c("h3", { staticClass: "block-title" }, [
                                _vm._v("Modal Title"),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "block-options" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn-block-option",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function ($event) {
                                        return _vm.$bvModal.hide(
                                          "modal-block-popout"
                                        )
                                      },
                                    },
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-fw fa-times",
                                    }),
                                  ]
                                ),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "block-content font-size-sm" },
                            [
                              _c("p", [
                                _vm._v(
                                  "\n                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.\n              "
                                ),
                              ]),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "\n                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.\n              "
                                ),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "block-content block-content-full text-right border-top",
                            },
                            [
                              _c(
                                "b-button",
                                {
                                  staticClass: "mr-1",
                                  attrs: { variant: "alt-primary" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-popout"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("Close")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  attrs: { variant: "primary" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-popout"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("Ok")]
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
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
                    { attrs: { rounded: "", title: "Slide Up" } },
                    [
                      _c("p", { staticClass: "font-size-sm text-muted" }, [
                        _vm._v(
                          "\n            Sliding from up animation\n          "
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-modal",
                              rawName: "v-b-modal.modal-block-slideup",
                              modifiers: { "modal-block-slideup": true },
                            },
                          ],
                          staticClass: "push",
                          attrs: { variant: "alt-primary" },
                        },
                        [_vm._v("\n            Launch Modal\n          ")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      attrs: {
                        id: "modal-block-slideup",
                        "dialog-class": "modal-dialog-slideup",
                        "body-class": "p-0",
                        "hide-footer": "",
                        "hide-header": "",
                      },
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "block block-rounded block-themed block-transparent mb-0",
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "block-header bg-primary-dark" },
                            [
                              _c("h3", { staticClass: "block-title" }, [
                                _vm._v("Modal Title"),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "block-options" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn-block-option",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function ($event) {
                                        return _vm.$bvModal.hide(
                                          "modal-block-slideup"
                                        )
                                      },
                                    },
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-fw fa-times",
                                    }),
                                  ]
                                ),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "block-content font-size-sm" },
                            [
                              _c("p", [
                                _vm._v(
                                  "\n                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.\n              "
                                ),
                              ]),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "\n                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.\n              "
                                ),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "block-content block-content-full text-right border-top",
                            },
                            [
                              _c(
                                "b-button",
                                {
                                  staticClass: "mr-1",
                                  attrs: { variant: "alt-primary" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-slideup"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("Close")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  attrs: { variant: "primary" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-slideup"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("Ok")]
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
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
                    { attrs: { rounded: "", title: "Slide Right" } },
                    [
                      _c("p", { staticClass: "font-size-sm text-muted" }, [
                        _vm._v(
                          "\n            Sliding from right animation\n          "
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-modal",
                              rawName: "v-b-modal.modal-block-slideright",
                              modifiers: { "modal-block-slideright": true },
                            },
                          ],
                          staticClass: "push",
                          attrs: { variant: "alt-primary" },
                        },
                        [_vm._v("\n            Launch Modal\n          ")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      attrs: {
                        id: "modal-block-slideright",
                        "dialog-class": "modal-dialog-slideright",
                        "body-class": "p-0",
                        "hide-footer": "",
                        "hide-header": "",
                      },
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "block block-rounded block-themed block-transparent mb-0",
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "block-header bg-primary-dark" },
                            [
                              _c("h3", { staticClass: "block-title" }, [
                                _vm._v("Modal Title"),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "block-options" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn-block-option",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function ($event) {
                                        return _vm.$bvModal.hide(
                                          "modal-block-slideright"
                                        )
                                      },
                                    },
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-fw fa-times",
                                    }),
                                  ]
                                ),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "block-content font-size-sm" },
                            [
                              _c("p", [
                                _vm._v(
                                  "\n                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.\n              "
                                ),
                              ]),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "\n                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.\n              "
                                ),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "block-content block-content-full text-right border-top",
                            },
                            [
                              _c(
                                "b-button",
                                {
                                  staticClass: "mr-1",
                                  attrs: { variant: "alt-primary" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-slideright"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("Close")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  attrs: { variant: "primary" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-slideright"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("Ok")]
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
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
                    { attrs: { rounded: "", title: "Slide Left" } },
                    [
                      _c("p", { staticClass: "font-size-sm text-muted" }, [
                        _vm._v(
                          "\n            Sliding from left animation\n          "
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-modal",
                              rawName: "v-b-modal.modal-block-slideleft",
                              modifiers: { "modal-block-slideleft": true },
                            },
                          ],
                          staticClass: "push",
                          attrs: { variant: "alt-primary" },
                        },
                        [_vm._v("\n            Launch Modal\n          ")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      attrs: {
                        id: "modal-block-slideleft",
                        "dialog-class": "modal-dialog-slideleft",
                        "body-class": "p-0",
                        "hide-footer": "",
                        "hide-header": "",
                      },
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "block block-rounded block-themed block-transparent mb-0",
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "block-header bg-primary-dark" },
                            [
                              _c("h3", { staticClass: "block-title" }, [
                                _vm._v("Modal Title"),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "block-options" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn-block-option",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function ($event) {
                                        return _vm.$bvModal.hide(
                                          "modal-block-slideleft"
                                        )
                                      },
                                    },
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-fw fa-times",
                                    }),
                                  ]
                                ),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "block-content font-size-sm" },
                            [
                              _c("p", [
                                _vm._v(
                                  "\n                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.\n              "
                                ),
                              ]),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "\n                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.\n              "
                                ),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "block-content block-content-full text-right border-top",
                            },
                            [
                              _c(
                                "b-button",
                                {
                                  staticClass: "mr-1",
                                  attrs: { variant: "alt-primary" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-slideleft"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("Close")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  attrs: { variant: "primary" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-slideleft"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("Ok")]
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
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
                    { attrs: { rounded: "", title: "From Right" } },
                    [
                      _c("p", { staticClass: "font-size-sm text-muted" }, [
                        _vm._v(
                          "\n            Coming from right with rotation animation\n          "
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-modal",
                              rawName: "v-b-modal.modal-block-fromright",
                              modifiers: { "modal-block-fromright": true },
                            },
                          ],
                          staticClass: "push",
                          attrs: { variant: "alt-primary" },
                        },
                        [_vm._v("\n            Launch Modal\n          ")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      attrs: {
                        id: "modal-block-fromright",
                        "dialog-class": "modal-dialog-fromright",
                        "body-class": "p-0",
                        "hide-footer": "",
                        "hide-header": "",
                      },
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "block block-rounded block-themed block-transparent mb-0",
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "block-header bg-primary-dark" },
                            [
                              _c("h3", { staticClass: "block-title" }, [
                                _vm._v("Modal Title"),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "block-options" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn-block-option",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function ($event) {
                                        return _vm.$bvModal.hide(
                                          "modal-block-fromright"
                                        )
                                      },
                                    },
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-fw fa-times",
                                    }),
                                  ]
                                ),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "block-content font-size-sm" },
                            [
                              _c("p", [
                                _vm._v(
                                  "\n                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.\n              "
                                ),
                              ]),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "\n                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.\n              "
                                ),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "block-content block-content-full text-right border-top",
                            },
                            [
                              _c(
                                "b-button",
                                {
                                  staticClass: "mr-1",
                                  attrs: { variant: "alt-primary" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-fromright"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("Close")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  attrs: { variant: "primary" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-fromright"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("Ok")]
                              ),
                            ],
                            1
                          ),
                        ]
                      ),
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
                    { attrs: { rounded: "", title: "From Left" } },
                    [
                      _c("p", { staticClass: "font-size-sm text-muted" }, [
                        _vm._v(
                          "\n            Coming from left with rotation animation\n          "
                        ),
                      ]),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        {
                          directives: [
                            {
                              name: "b-modal",
                              rawName: "v-b-modal.modal-block-fromleft",
                              modifiers: { "modal-block-fromleft": true },
                            },
                          ],
                          staticClass: "push",
                          attrs: { variant: "alt-primary" },
                        },
                        [_vm._v("\n            Launch Modal\n          ")]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "b-modal",
                    {
                      attrs: {
                        id: "modal-block-fromleft",
                        "dialog-class": "modal-dialog-fromleft",
                        "body-class": "p-0",
                        "hide-footer": "",
                        "hide-header": "",
                      },
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass:
                            "block block-rounded block-themed block-transparent mb-0",
                        },
                        [
                          _c(
                            "div",
                            { staticClass: "block-header bg-primary-dark" },
                            [
                              _c("h3", { staticClass: "block-title" }, [
                                _vm._v("Modal Title"),
                              ]),
                              _vm._v(" "),
                              _c("div", { staticClass: "block-options" }, [
                                _c(
                                  "button",
                                  {
                                    staticClass: "btn-block-option",
                                    attrs: { type: "button" },
                                    on: {
                                      click: function ($event) {
                                        return _vm.$bvModal.hide(
                                          "modal-block-fromleft"
                                        )
                                      },
                                    },
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-fw fa-times",
                                    }),
                                  ]
                                ),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "block-content font-size-sm" },
                            [
                              _c("p", [
                                _vm._v(
                                  "\n                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.\n              "
                                ),
                              ]),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "\n                Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst\n                proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi.\n              "
                                ),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            {
                              staticClass:
                                "block-content block-content-full text-right border-top",
                            },
                            [
                              _c(
                                "b-button",
                                {
                                  staticClass: "mr-1",
                                  attrs: { variant: "alt-primary" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-fromleft"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("Close")]
                              ),
                              _vm._v(" "),
                              _c(
                                "b-button",
                                {
                                  attrs: { variant: "primary" },
                                  on: {
                                    click: function ($event) {
                                      return _vm.$bvModal.hide(
                                        "modal-block-fromleft"
                                      )
                                    },
                                  },
                                },
                                [_vm._v("Ok")]
                              ),
                            ],
                            1
                          ),
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
        ],
        1
      ),
    ],
    1
  )
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("h2", { staticClass: "content-heading" }, [
      _vm._v("\n      Bootstrap Modals "),
      _c("small", [_vm._v("Animations")]),
    ])
  },
]
render._withStripped = true



/***/ })

}]);