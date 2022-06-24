(self["webpackChunk"] = self["webpackChunk"] || []).push([["various-coming-soon"],{

/***/ "./node_modules/@chenfengyuan/vue-countdown/dist/vue-countdown.js":
/*!************************************************************************!*\
  !*** ./node_modules/@chenfengyuan/vue-countdown/dist/vue-countdown.js ***!
  \************************************************************************/
/***/ (function(module) {

/*!
 * vue-countdown v1.1.5
 * https://fengyuanchen.github.io/vue-countdown
 *
 * Copyright 2018-present Chen Fengyuan
 * Released under the MIT license
 *
 * Date: 2020-02-25T01:19:32.769Z
 */

(function (global, factory) {
   true ? module.exports = factory() :
  0;
}(this, (function () { 'use strict';

  var MILLISECONDS_SECOND = 1000;
  var MILLISECONDS_MINUTE = 60 * MILLISECONDS_SECOND;
  var MILLISECONDS_HOUR = 60 * MILLISECONDS_MINUTE;
  var MILLISECONDS_DAY = 24 * MILLISECONDS_HOUR;
  var EVENT_VISIBILITY_CHANGE = 'visibilitychange';
  var index = {
    name: 'countdown',
    data: function data() {
      return {
        /**
         * It is counting down.
         * @type {boolean}
         */
        counting: false,

        /**
         * The absolute end time.
         * @type {number}
         */
        endTime: 0,

        /**
         * The remaining milliseconds.
         * @type {number}
         */
        totalMilliseconds: 0
      };
    },
    props: {
      /**
       * Starts the countdown automatically when initialized.
       */
      autoStart: {
        type: Boolean,
        default: true
      },

      /**
       * Emits the countdown events.
       */
      emitEvents: {
        type: Boolean,
        default: true
      },

      /**
       * The interval time (in milliseconds) of the countdown progress.
       */
      interval: {
        type: Number,
        default: 1000,
        validator: function validator(value) {
          return value >= 0;
        }
      },

      /**
       * Generate the current time of a specific time zone.
       */
      now: {
        type: Function,
        default: function _default() {
          return Date.now();
        }
      },

      /**
       * The tag name of the component's root element.
       */
      tag: {
        type: String,
        default: 'span'
      },

      /**
       * The time (in milliseconds) to count down from.
       */
      time: {
        type: Number,
        default: 0,
        validator: function validator(value) {
          return value >= 0;
        }
      },

      /**
       * Transforms the output props before render.
       */
      transform: {
        type: Function,
        default: function _default(props) {
          return props;
        }
      }
    },
    computed: {
      /**
       * Remaining days.
       * @returns {number} The computed value.
       */
      days: function days() {
        return Math.floor(this.totalMilliseconds / MILLISECONDS_DAY);
      },

      /**
       * Remaining hours.
       * @returns {number} The computed value.
       */
      hours: function hours() {
        return Math.floor(this.totalMilliseconds % MILLISECONDS_DAY / MILLISECONDS_HOUR);
      },

      /**
       * Remaining minutes.
       * @returns {number} The computed value.
       */
      minutes: function minutes() {
        return Math.floor(this.totalMilliseconds % MILLISECONDS_HOUR / MILLISECONDS_MINUTE);
      },

      /**
       * Remaining seconds.
       * @returns {number} The computed value.
       */
      seconds: function seconds() {
        return Math.floor(this.totalMilliseconds % MILLISECONDS_MINUTE / MILLISECONDS_SECOND);
      },

      /**
       * Remaining milliseconds.
       * @returns {number} The computed value.
       */
      milliseconds: function milliseconds() {
        return Math.floor(this.totalMilliseconds % MILLISECONDS_SECOND);
      },

      /**
       * Total remaining days.
       * @returns {number} The computed value.
       */
      totalDays: function totalDays() {
        return this.days;
      },

      /**
       * Total remaining hours.
       * @returns {number} The computed value.
       */
      totalHours: function totalHours() {
        return Math.floor(this.totalMilliseconds / MILLISECONDS_HOUR);
      },

      /**
       * Total remaining minutes.
       * @returns {number} The computed value.
       */
      totalMinutes: function totalMinutes() {
        return Math.floor(this.totalMilliseconds / MILLISECONDS_MINUTE);
      },

      /**
       * Total remaining seconds.
       * @returns {number} The computed value.
       */
      totalSeconds: function totalSeconds() {
        return Math.floor(this.totalMilliseconds / MILLISECONDS_SECOND);
      }
    },
    render: function render(createElement) {
      return createElement(this.tag, this.$scopedSlots.default ? [this.$scopedSlots.default(this.transform({
        days: this.days,
        hours: this.hours,
        minutes: this.minutes,
        seconds: this.seconds,
        milliseconds: this.milliseconds,
        totalDays: this.totalDays,
        totalHours: this.totalHours,
        totalMinutes: this.totalMinutes,
        totalSeconds: this.totalSeconds,
        totalMilliseconds: this.totalMilliseconds
      }))] : this.$slots.default);
    },
    watch: {
      $props: {
        deep: true,
        immediate: true,

        /**
         * Update the countdown when props changed.
         */
        handler: function handler() {
          this.totalMilliseconds = this.time;
          this.endTime = this.now() + this.time;

          if (this.autoStart) {
            this.start();
          }
        }
      }
    },
    methods: {
      /**
       * Starts to countdown.
       * @public
       * @emits Countdown#start
       */
      start: function start() {
        if (this.counting) {
          return;
        }

        this.counting = true;

        if (this.emitEvents) {
          /**
           * Countdown start event.
           * @event Countdown#start
           */
          this.$emit('start');
        }

        if (document.visibilityState === 'visible') {
          this.continue();
        }
      },

      /**
       * Continues the countdown.
       * @private
       */
      continue: function _continue() {
        var _this = this;

        if (!this.counting) {
          return;
        }

        var delay = Math.min(this.totalMilliseconds, this.interval);

        if (delay > 0) {
          if (window.requestAnimationFrame) {
            var init;
            var prev;

            var step = function step(now) {
              if (!init) {
                init = now;
              }

              if (!prev) {
                prev = now;
              }

              var range = now - init;

              if (range >= delay // Avoid losing time about one second per minute (now - prev ≈ 16ms) (#43)
              || range + (now - prev) / 2 >= delay) {
                _this.progress();
              } else {
                _this.requestId = requestAnimationFrame(step);
              }

              prev = now;
            };

            this.requestId = requestAnimationFrame(step);
          } else {
            this.timeoutId = setTimeout(function () {
              _this.progress();
            }, delay);
          }
        } else {
          this.end();
        }
      },

      /**
       * Pauses the countdown.
       * @private
       */
      pause: function pause() {
        if (window.requestAnimationFrame) {
          cancelAnimationFrame(this.requestId);
        } else {
          clearTimeout(this.timeoutId);
        }
      },

      /**
       * Progresses to countdown.
       * @private
       * @emits Countdown#progress
       */
      progress: function progress() {
        if (!this.counting) {
          return;
        }

        this.totalMilliseconds -= this.interval;

        if (this.emitEvents && this.totalMilliseconds > 0) {
          /**
           * Countdown progress event.
           * @event Countdown#progress
           */
          this.$emit('progress', {
            days: this.days,
            hours: this.hours,
            minutes: this.minutes,
            seconds: this.seconds,
            milliseconds: this.milliseconds,
            totalDays: this.totalDays,
            totalHours: this.totalHours,
            totalMinutes: this.totalMinutes,
            totalSeconds: this.totalSeconds,
            totalMilliseconds: this.totalMilliseconds
          });
        }

        this.continue();
      },

      /**
       * Aborts the countdown.
       * @public
       * @emits Countdown#abort
       */
      abort: function abort() {
        if (!this.counting) {
          return;
        }

        this.pause();
        this.counting = false;

        if (this.emitEvents) {
          /**
           * Countdown abort event.
           * @event Countdown#abort
           */
          this.$emit('abort');
        }
      },

      /**
       * Ends the countdown.
       * @public
       * @emits Countdown#end
       */
      end: function end() {
        if (!this.counting) {
          return;
        }

        this.pause();
        this.totalMilliseconds = 0;
        this.counting = false;

        if (this.emitEvents) {
          /**
           * Countdown end event.
           * @event Countdown#end
           */
          this.$emit('end');
        }
      },

      /**
       * Updates the count.
       * @private
       */
      update: function update() {
        if (this.counting) {
          this.totalMilliseconds = Math.max(0, this.endTime - this.now());
        }
      },

      /**
       * visibility change event handler.
       * @private
       */
      handleVisibilityChange: function handleVisibilityChange() {
        switch (document.visibilityState) {
          case 'visible':
            this.update();
            this.continue();
            break;

          case 'hidden':
            this.pause();
            break;
        }
      }
    },
    mounted: function mounted() {
      document.addEventListener(EVENT_VISIBILITY_CHANGE, this.handleVisibilityChange);
    },
    beforeDestroy: function beforeDestroy() {
      document.removeEventListener(EVENT_VISIBILITY_CHANGE, this.handleVisibilityChange);
      this.pause();
    }
  };

  return index;

})));


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/various/ComingSoon.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/various/ComingSoon.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _chenfengyuan_vue_countdown__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chenfengyuan/vue-countdown */ "./node_modules/@chenfengyuan/vue-countdown/dist/vue-countdown.js");
/* harmony import */ var _chenfengyuan_vue_countdown__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chenfengyuan_vue_countdown__WEBPACK_IMPORTED_MODULE_0__);
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
// Vue Countdown, for more info and examples you can check out https://github.com/fengyuanchen/vue-countdown

/* harmony default export */ __webpack_exports__["default"] = ({
  components: _defineProperty({}, (_chenfengyuan_vue_countdown__WEBPACK_IMPORTED_MODULE_0___default().name), (_chenfengyuan_vue_countdown__WEBPACK_IMPORTED_MODULE_0___default())),
  data: function data() {
    return {
      form: {
        email: '',
        success: ''
      }
    };
  },
  methods: {
    onSubmit: function onSubmit(evt) {
      evt.preventDefault(); // Alert with form input values
      //window.console.log(JSON.stringify(this.form))

      this.form.success = 'Thank you for subscribing!';
      this.form.email = '';
    }
  }
});

/***/ }),

/***/ "./resources/js/views/pages/various/ComingSoon.vue":
/*!*********************************************************!*\
  !*** ./resources/js/views/pages/various/ComingSoon.vue ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ComingSoon_vue_vue_type_template_id_1e9adb0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ComingSoon.vue?vue&type=template&id=1e9adb0a& */ "./resources/js/views/pages/various/ComingSoon.vue?vue&type=template&id=1e9adb0a&");
/* harmony import */ var _ComingSoon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ComingSoon.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/various/ComingSoon.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ComingSoon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ComingSoon_vue_vue_type_template_id_1e9adb0a___WEBPACK_IMPORTED_MODULE_0__.render,
  _ComingSoon_vue_vue_type_template_id_1e9adb0a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/various/ComingSoon.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/various/ComingSoon.vue?vue&type=script&lang=js&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/pages/various/ComingSoon.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComingSoon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ComingSoon.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/various/ComingSoon.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ComingSoon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/various/ComingSoon.vue?vue&type=template&id=1e9adb0a&":
/*!****************************************************************************************!*\
  !*** ./resources/js/views/pages/various/ComingSoon.vue?vue&type=template&id=1e9adb0a& ***!
  \****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ComingSoon_vue_vue_type_template_id_1e9adb0a___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ComingSoon_vue_vue_type_template_id_1e9adb0a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ComingSoon_vue_vue_type_template_id_1e9adb0a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ComingSoon.vue?vue&type=template&id=1e9adb0a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/various/ComingSoon.vue?vue&type=template&id=1e9adb0a&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/various/ComingSoon.vue?vue&type=template&id=1e9adb0a&":
/*!*******************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/various/ComingSoon.vue?vue&type=template&id=1e9adb0a& ***!
  \*******************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
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
    "base-background",
    {
      attrs: {
        image: "img/photos/photo6@2x.jpg",
        "inner-class": "bg-primary-dark-op",
      },
    },
    [
      _c("div", { staticClass: "hero bg-black-50" }, [
        _c("div", { staticClass: "hero-inner" }, [
          _c(
            "div",
            { staticClass: "content content-full" },
            [
              _c(
                "b-row",
                { staticClass: "justify-content-center" },
                [
                  _c(
                    "b-col",
                    { staticClass: "py-3 text-center", attrs: { md: "6" } },
                    [
                      _c(
                        "div",
                        { staticClass: "push" },
                        [
                          _c(
                            "router-link",
                            {
                              staticClass: "link-fx font-w700 font-size-h1",
                              attrs: { to: "/" },
                            },
                            [
                              _c("span", { staticClass: "text-white" }, [
                                _vm._v("OneUI"),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c("p", { staticClass: "text-white-50" }, [
                            _vm._v(
                              "Stay tuned! We are working on it and it is coming soon!"
                            ),
                          ]),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c("countdown", {
                        attrs: { time: 408 * 24 * 60 * 60 * 955 },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function (props) {
                              return [
                                _c(
                                  "b-row",
                                  {
                                    staticClass:
                                      "row items-push py-3 text-center font-w700",
                                  },
                                  [
                                    _c(
                                      "b-col",
                                      { attrs: { cols: "6", md: "3" } },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "font-size-h1 text-white",
                                          },
                                          [_vm._v(_vm._s(props.days))]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "font-size-sm text-muted",
                                          },
                                          [_vm._v("DAYS")]
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-col",
                                      { attrs: { cols: "6", md: "3" } },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "font-size-h1 text-white",
                                          },
                                          [_vm._v(_vm._s(props.hours))]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "font-size-sm text-muted",
                                          },
                                          [_vm._v("HOURS")]
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-col",
                                      { attrs: { cols: "6", md: "3" } },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "font-size-h1 text-white",
                                          },
                                          [_vm._v(_vm._s(props.minutes))]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "font-size-sm text-muted",
                                          },
                                          [_vm._v("MINUTES")]
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "b-col",
                                      { attrs: { cols: "6", md: "3" } },
                                      [
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "font-size-h1 text-white",
                                          },
                                          [_vm._v(_vm._s(props.seconds))]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "div",
                                          {
                                            staticClass:
                                              "font-size-sm text-muted",
                                          },
                                          [_vm._v("SECONDS")]
                                        ),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                              ]
                            },
                          },
                        ]),
                      }),
                      _vm._v(" "),
                      _c(
                        "b-form",
                        { staticClass: "push", on: { submit: _vm.onSubmit } },
                        [
                          _c(
                            "b-row",
                            {
                              staticClass: "form-group justify-content-center",
                            },
                            [
                              _c(
                                "b-col",
                                { attrs: { md: "10", xl: "6" } },
                                [
                                  this.form.success
                                    ? _c(
                                        "p",
                                        {
                                          staticClass:
                                            "font-w600 text-success text-center",
                                        },
                                        [
                                          _vm._v(
                                            "\n                    " +
                                              _vm._s(_vm.form.success) +
                                              "\n                  "
                                          ),
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _c(
                                    "b-input-group",
                                    { staticClass: "mb-2" },
                                    [
                                      _c("b-form-input", {
                                        staticClass: "border-0",
                                        attrs: {
                                          type: "email",
                                          placeholder: "Enter your email..",
                                          required: "",
                                        },
                                        model: {
                                          value: _vm.form.email,
                                          callback: function ($$v) {
                                            _vm.$set(_vm.form, "email", $$v)
                                          },
                                          expression: "form.email",
                                        },
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "b-input-group-append",
                                        [
                                          _c(
                                            "b-button",
                                            {
                                              attrs: {
                                                type: "submit",
                                                variant: "primary",
                                              },
                                            },
                                            [_vm._v("Subscribe")]
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
                                    {
                                      staticClass: "font-size-sm text-white-50",
                                    },
                                    [
                                      _vm._v(
                                        "\n                    Don't worry, we hate spam.\n                  "
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
                      _vm._v(" "),
                      _c("router-link", {
                        attrs: {
                          to: "/backend/pages/generic/blank",
                          custom: "",
                        },
                        scopedSlots: _vm._u([
                          {
                            key: "default",
                            fn: function (ref) {
                              var href = ref.href
                              var navigate = ref.navigate
                              return [
                                _c(
                                  "a",
                                  {
                                    staticClass: "btn btn-lg btn-alt-primary",
                                    attrs: { href: href },
                                    on: { click: navigate },
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-arrow-left mr-1",
                                    }),
                                    _vm._v(
                                      " Go Back to Dashboard\n              "
                                    ),
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
        ]),
      ]),
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);