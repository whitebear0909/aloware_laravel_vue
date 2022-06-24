"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_plugins_Carousel_vue"],{

/***/ "./resources/js/views/plugins/Carousel.vue":
/*!*************************************************!*\
  !*** ./resources/js/views/plugins/Carousel.vue ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Carousel_vue_vue_type_template_id_15577c8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Carousel.vue?vue&type=template&id=15577c8e& */ "./resources/js/views/plugins/Carousel.vue?vue&type=template&id=15577c8e&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _Carousel_vue_vue_type_template_id_15577c8e___WEBPACK_IMPORTED_MODULE_0__.render,
  _Carousel_vue_vue_type_template_id_15577c8e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/plugins/Carousel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/plugins/Carousel.vue?vue&type=template&id=15577c8e&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/plugins/Carousel.vue?vue&type=template&id=15577c8e& ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_template_id_15577c8e___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_template_id_15577c8e___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Carousel_vue_vue_type_template_id_15577c8e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Carousel.vue?vue&type=template&id=15577c8e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/plugins/Carousel.vue?vue&type=template&id=15577c8e&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/plugins/Carousel.vue?vue&type=template&id=15577c8e&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/plugins/Carousel.vue?vue&type=template&id=15577c8e& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
          title: "Carousel",
          subtitle: "Flexible and mobile friendly content sliders.",
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
                      _vm._v("Carousel"),
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
                        rounded: "",
                        title: "Default with Indicators",
                        "content-full": "",
                      },
                    },
                    [
                      _c(
                        "b-carousel",
                        {
                          attrs: {
                            controls: "",
                            indicators: "",
                            interval: 4000,
                          },
                        },
                        [
                          _c("b-carousel-slide", {
                            attrs: { "img-src": "img/photos/photo29.jpg" },
                          }),
                          _vm._v(" "),
                          _c("b-carousel-slide", {
                            attrs: { "img-src": "img/photos/photo30.jpg" },
                          }),
                          _vm._v(" "),
                          _c("b-carousel-slide", {
                            attrs: { "img-src": "img/photos/photo31.jpg" },
                          }),
                          _vm._v(" "),
                          _c("b-carousel-slide", {
                            attrs: { "img-src": "img/photos/photo32.jpg" },
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
                { attrs: { md: "6" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: {
                        rounded: "",
                        title: "Fade with Indicators",
                        "content-full": "",
                      },
                    },
                    [
                      _c(
                        "b-carousel",
                        {
                          attrs: {
                            fade: "",
                            controls: "",
                            indicators: "",
                            interval: 4000,
                          },
                        },
                        [
                          _c("b-carousel-slide", {
                            attrs: { "img-src": "img/photos/photo32.jpg" },
                          }),
                          _vm._v(" "),
                          _c("b-carousel-slide", {
                            attrs: { "img-src": "img/photos/photo30.jpg" },
                          }),
                          _vm._v(" "),
                          _c("b-carousel-slide", {
                            attrs: { "img-src": "img/photos/photo29.jpg" },
                          }),
                          _vm._v(" "),
                          _c("b-carousel-slide", {
                            attrs: { "img-src": "img/photos/photo31.jpg" },
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
                { attrs: { md: "6" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: {
                        rounded: "",
                        title: "No animation with Indicators",
                        "content-full": "",
                      },
                    },
                    [
                      _c(
                        "b-carousel",
                        {
                          attrs: {
                            "no-animation": "",
                            controls: "",
                            indicators: "",
                            interval: 4000,
                          },
                        },
                        [
                          _c("b-carousel-slide", {
                            attrs: { "img-src": "img/photos/photo30.jpg" },
                          }),
                          _vm._v(" "),
                          _c("b-carousel-slide", {
                            attrs: { "img-src": "img/photos/photo32.jpg" },
                          }),
                          _vm._v(" "),
                          _c("b-carousel-slide", {
                            attrs: { "img-src": "img/photos/photo31.jpg" },
                          }),
                          _vm._v(" "),
                          _c("b-carousel-slide", {
                            attrs: { "img-src": "img/photos/photo29.jpg" },
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
                { attrs: { md: "6" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: {
                        rounded: "",
                        title: "Only Arrows",
                        "content-full": "",
                      },
                    },
                    [
                      _c(
                        "b-carousel",
                        { attrs: { controls: "", interval: 4000 } },
                        [
                          _c("b-carousel-slide", {
                            attrs: { "img-src": "img/photos/photo30.jpg" },
                          }),
                          _vm._v(" "),
                          _c("b-carousel-slide", {
                            attrs: { "img-src": "img/photos/photo29.jpg" },
                          }),
                          _vm._v(" "),
                          _c("b-carousel-slide", {
                            attrs: { "img-src": "img/photos/photo32.jpg" },
                          }),
                          _vm._v(" "),
                          _c("b-carousel-slide", {
                            attrs: { "img-src": "img/photos/photo31.jpg" },
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
                { attrs: { md: "6" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: {
                        rounded: "",
                        title: "Simple with No Pause on Hover",
                        "content-full": "",
                      },
                    },
                    [
                      _c(
                        "b-carousel",
                        { attrs: { "no-hover-pause": "", interval: 4000 } },
                        [
                          _c("b-carousel-slide", {
                            attrs: { "img-src": "img/photos/photo31.jpg" },
                          }),
                          _vm._v(" "),
                          _c("b-carousel-slide", {
                            attrs: { "img-src": "img/photos/photo30.jpg" },
                          }),
                          _vm._v(" "),
                          _c("b-carousel-slide", {
                            attrs: { "img-src": "img/photos/photo32.jpg" },
                          }),
                          _vm._v(" "),
                          _c("b-carousel-slide", {
                            attrs: { "img-src": "img/photos/photo29.jpg" },
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
                { attrs: { md: "6" } },
                [
                  _c(
                    "base-block",
                    {
                      attrs: {
                        rounded: "",
                        title: "No autoplay",
                        "content-full": "",
                      },
                    },
                    [
                      _c(
                        "b-carousel",
                        {
                          attrs: { controls: "", indicators: "", interval: 0 },
                        },
                        [
                          _c("b-carousel-slide", {
                            attrs: { "img-src": "img/photos/photo31.jpg" },
                          }),
                          _vm._v(" "),
                          _c("b-carousel-slide", {
                            attrs: { "img-src": "img/photos/photo29.jpg" },
                          }),
                          _vm._v(" "),
                          _c("b-carousel-slide", {
                            attrs: { "img-src": "img/photos/photo30.jpg" },
                          }),
                          _vm._v(" "),
                          _c("b-carousel-slide", {
                            attrs: { "img-src": "img/photos/photo32.jpg" },
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
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);