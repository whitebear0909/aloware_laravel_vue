(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_pages_generic_Inbox_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/generic/Inbox.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/generic/Inbox.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_easy_pie_chart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-easy-pie-chart */ "./node_modules/vue-easy-pie-chart/dist/vue-easy-pie-chart.common.js");
/* harmony import */ var vue_easy_pie_chart__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_easy_pie_chart__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// Vue Easy Pie Chart, for more info and examples you can check out https://github.com/DotNetAge/vue-easy-pie-chart

/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    VueEasyPieChart: (vue_easy_pie_chart__WEBPACK_IMPORTED_MODULE_0___default())
  },
  data: function data() {
    return {
      form: {
        email: '',
        subject: '',
        message: ''
      },
      showMessage: 0,
      messages: [{
        id: 1,
        user: 'Amanda Powell',
        email: 'amanda.powell@example.com',
        title: 'Welcome to our service',
        contentPreview: "It's a pleasure to have you on our service..",
        files: ['file1.zip', 'file2.zip', 'file3.zip'],
        received: '2 min ago'
      }, {
        id: 2,
        user: 'Betty Kelley',
        email: 'betty.kelley@example.com',
        title: 'Your subscription was updated',
        contentPreview: "We are glad you decided to go with a vip..",
        files: ['file1.zip', 'file2.zip'],
        received: '10 min ago'
      }, {
        id: 3,
        user: 'Thomas Riley',
        email: 'thomas.riley@example.com',
        title: 'Update is available',
        contentPreview: "An update is under way for your app..",
        files: [],
        received: '25 min ago'
      }, {
        id: 4,
        user: 'Megan Fuller',
        email: 'megan.fuller@example.com',
        title: 'New Sale!',
        contentPreview: "You had a new sale and earned..",
        files: ['file1.zip'],
        received: '30 min ago'
      }, {
        id: 5,
        user: 'Jack Greene',
        email: 'jack.greene@example.com',
        title: 'Action Required for your account!',
        contentPreview: "Your account is inactive for a long time and..",
        files: [],
        received: '1 hour ago'
      }, {
        id: 6,
        user: 'Barbara Scott',
        email: 'barbara.scott@example.com',
        title: 'New Photo Pack!',
        contentPreview: "Our new photo pack is available now! You..",
        files: [],
        received: '2 hrs ago'
      }, {
        id: 7,
        user: 'Marie Duncan',
        email: 'marie.duncan@example.com',
        title: 'Product is released!',
        contentPreview: "This is a notification about our new product..",
        files: ['file1.zip'],
        received: '1 day ago'
      }, {
        id: 8,
        user: 'Jose Mills',
        email: 'jose.mills@example.com',
        title: 'Now on Sale!',
        contentPreview: "Our Book is out! You can buy a copy and..",
        files: ['file1.zip', 'file2.zip', 'file3.zip', 'file4.zip', 'file5.zip', 'file6.zip', 'file7.zip', 'file8.zip', 'file9.zip'],
        received: '1 day ago'
      }, {
        id: 9,
        user: 'Lori Grant',
        email: 'lori.grant@example.com',
        title: 'Monthly Report',
        contentPreview: "The monthly report you requested for..",
        files: ['file1.zip', 'file2.zip', 'file3.zip', 'file4.zip', 'file5.zip', 'file6.zip'],
        received: '3 days ago'
      }, {
        id: 10,
        user: 'Megan Fuller',
        email: 'megan.fuller@example.com',
        title: 'Trial Started!',
        contentPreview: "You 30-day trial has now started and..",
        files: [],
        received: '3 days ago'
      }, {
        id: 11,
        user: 'Jack Greene',
        email: 'jack.greene@example.com',
        title: 'Invoice #INV001645',
        contentPreview: "This is the invoice for the project we..",
        files: [],
        received: '5 days ago'
      }, {
        id: 12,
        user: 'Lori Moore',
        email: 'lori.moore@example.com',
        title: 'Friend Request!',
        contentPreview: "You have a new friend request. Click the..",
        files: ['file1.zip', 'file2.zip', 'file3.zip', 'file4.zip', 'file5.zip'],
        received: '1 week ago'
      }, {
        id: 13,
        user: 'Jose Wagner',
        email: 'jose.wagner@example.com',
        title: 'Enjoy life!',
        contentPreview: "Thank you for helping us with our cause...",
        files: ['file1.zip', 'file2.zip', 'file3.zip'],
        received: '1 week ago'
      }, {
        id: 14,
        user: 'Laura Carr',
        email: 'laura.carr@example.com',
        title: 'New Twitter follower!',
        contentPreview: "You have a new follower, congratulations..",
        files: ['file1.zip'],
        received: '2 weeks ago'
      }, {
        id: 15,
        user: 'Amanda Powell',
        email: 'amanda.powell@example.com',
        title: 'Huge Discount available!',
        contentPreview: "Due to the fact that you are a great..",
        files: [],
        received: '3 weeks ago'
      }]
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$root.$on('bv::modal::hidden', function (bvEvent, modalId) {
      if (modalId === 'one-inbox-message') {
        _this.showMessage = 0;
      }
    });
  },
  methods: {
    onSubmit: function onSubmit(evt) {
      evt.preventDefault(); // Alert with form input values

      alert(JSON.stringify(this.form));
    },
    onReset: function onReset(evt) {
      evt.preventDefault(); // Reset our form values

      this.form.email = '';
      this.form.subject = '';
      this.form.message = '';
    }
  }
});

/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-easy-pie-chart/dist/vue-easy-pie-chart.css":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-easy-pie-chart/dist/vue-easy-pie-chart.css ***!
  \*************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/*!\n * VueEasyPieChart v1.0.2 (https://github.com/dotnetage/vue-easy-pie-chart)\n * (c) 2016 Ray\n * Released under the MIT License.\n */\n\n.vue-easy-pie-chart[data-v-8087077e] {\n  position: relative;\n  text-align: center;\n}\n.vue-easy-pie-chart .inner-text[data-v-8087077e] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  text-align: center;\n  display: block;\n}\n", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/generic/Inbox.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/generic/Inbox.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js */ "./node_modules/laravel-mix/node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_easy_pie_chart_dist_vue_easy_pie_chart_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! -!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../node_modules/vue-easy-pie-chart/dist/vue-easy-pie-chart.css */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-easy-pie-chart/dist/vue-easy-pie-chart.css");
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_laravel_mix_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
___CSS_LOADER_EXPORT___.i(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_easy_pie_chart_dist_vue_easy_pie_chart_css__WEBPACK_IMPORTED_MODULE_1__["default"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "", ""]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/generic/Inbox.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/generic/Inbox.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Inbox_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Inbox.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/generic/Inbox.vue?vue&type=style&index=0&lang=scss&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Inbox_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Inbox_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/vue-easy-pie-chart/dist/vue-easy-pie-chart.common.js":
/*!***************************************************************************!*\
  !*** ./node_modules/vue-easy-pie-chart/dist/vue-easy-pie-chart.common.js ***!
  \***************************************************************************/
/***/ (function(module) {

/*!
 * VueEasyPieChart v1.0.2 (https://github.com/dotnetage/vue-easy-pie-chart)
 * (c) 2016 Ray
 * Released under the MIT License.
 */
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __nested_webpack_require_314__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_314__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__nested_webpack_require_314__.m = modules;

/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_314__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_314__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_314__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __nested_webpack_require_1515__) {

	var __vue_exports__, __vue_options__
	var __vue_styles__ = {}

	/* styles */
	__nested_webpack_require_1515__(3)

	/* script */
	__vue_exports__ = __nested_webpack_require_1515__(1)

	/* template */
	var __vue_template__ = __nested_webpack_require_1515__(4)
	__vue_options__ = __vue_exports__ = __vue_exports__ || {}
	if (
	  typeof __vue_exports__.default === "object" ||
	  typeof __vue_exports__.default === "function"
	) {
	__vue_options__ = __vue_exports__ = __vue_exports__.default
	}
	if (typeof __vue_options__ === "function") {
	  __vue_options__ = __vue_options__.options
	}

	__vue_options__.render = __vue_template__.render
	__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
	__vue_options__._scopeId = "data-v-8087077e"

	module.exports = __vue_exports__


/***/ },
/* 1 */
/***/ function(module, exports, __nested_webpack_require_2340__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _easyPieChart = __nested_webpack_require_2340__(2);

	var _easyPieChart2 = _interopRequireDefault(_easyPieChart);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	  name: 'VueEasyPieChat',
	  data: function data() {
	    return {
	      pieChart: undefined
	    };
	  },

	  props: {
	    barColor: {
	      type: String,
	      default: "#ef1e25"
	    },
	    fontSize: {
	      type: String,
	      default: "20px"
	    },
	    trackColor: {
	      type: String,
	      default: "#f2f2f2"
	    },
	    scaleColor: { type: String, default: "#dfe0e0" },
	    scaleLength: { type: Number, default: 5 },
	    lineCap: { type: String, default: 'round' },
	    lineWidth: { type: Number, default: 3 },
	    size: { type: Number, default: 110 },
	    rotate: { type: Number, default: 0 },
	    duration: { type: Number, default: 1000 },
	    animated: { type: Boolean, default: true },
	    percent: { type: Number, default: 0 }
	  },
	  watch: {
	    percent: function percent(val) {
	      this.update(val);
	    },
	    duration: function duration(val) {
	      this.pieChart.options.animate.duration = val;
	      this.update(this.percent);
	    },
	    animated: function animated(val) {
	      this.pieChart.options.animate.enabled = val;
	      this.update(this.percent);
	    }
	  },
	  methods: {
	    update: function update(val) {
	      this.pieChart.update(val);
	    },
	    getOptions: function getOptions() {
	      return;
	    }
	  },
	  mounted: function mounted() {
	    var _this = this;

	    var self = this;
	    this.pieChart = new _easyPieChart2.default(this.$refs.chart, {
	      barColor: this.barColor,
	      trackColor: this.trackColor,
	      scaleColor: this.scaleColor,
	      scaleLength: this.scaleLength,
	      lineCap: this.lineCap,
	      lineWidth: this.lineWidth,
	      size: this.size,
	      rotate: this.rotate,
	      animate: {
	        duration: this.duration,
	        enabled: this.animated
	      },
	      onStart: function onStart() {
	        self.$emit('start');
	      },
	      onStop: function onStop() {
	        self.$emit('stop');
	      },
	      onStep: function onStep() {
	        self.$emit('step');
	      }
	    });

	    var addWatcher = function addWatcher(propName) {
	      _this.$watch(propName, function (val) {
	        _this.pieChart.options[propName] = val;
	        _this.update(_this.percent);
	      });
	    };

	    ['barColor', 'trackColor', 'scaleColor', 'scaleLength', 'lineCap', 'lineWidth', 'size', 'rotate'].forEach(addWatcher);
	  }
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**!
	 * easy-pie-chart
	 * Lightweight plugin to render simple, animated and retina optimized pie charts
	 *
	 * @license 
	 * @author Robert Fleischmann <rendro87@gmail.com> (http://robert-fleischmann.de)
	 * @version 2.1.7
	 **/

	(function (root, factory) {
	  if (true) {
	    // AMD. Register as an anonymous module unless amdModuleId is set
	    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	      return (root['EasyPieChart'] = factory());
	    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	  } else {}
	}(this, function () {

	/**
	 * Renderer to render the chart on a canvas object
	 * @param {DOMElement} el      DOM element to host the canvas (root of the plugin)
	 * @param {object}     options options object of the plugin
	 */
	var CanvasRenderer = function(el, options) {
		var cachedBackground;
		var canvas = document.createElement('canvas');

		el.appendChild(canvas);

		if (typeof(G_vmlCanvasManager) === 'object') {
			G_vmlCanvasManager.initElement(canvas);
		}

		var ctx = canvas.getContext('2d');

		canvas.width = canvas.height = options.size;

		// canvas on retina devices
		var scaleBy = 1;
		if (window.devicePixelRatio > 1) {
			scaleBy = window.devicePixelRatio;
			canvas.style.width = canvas.style.height = [options.size, 'px'].join('');
			canvas.width = canvas.height = options.size * scaleBy;
			ctx.scale(scaleBy, scaleBy);
		}

		// move 0,0 coordinates to the center
		ctx.translate(options.size / 2, options.size / 2);

		// rotate canvas -90deg
		ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI);

		var radius = (options.size - options.lineWidth) / 2;
		if (options.scaleColor && options.scaleLength) {
			radius -= options.scaleLength + 2; // 2 is the distance between scale and bar
		}

		// IE polyfill for Date
		Date.now = Date.now || function() {
			return +(new Date());
		};

		/**
		 * Draw a circle around the center of the canvas
		 * @param {strong} color     Valid CSS color string
		 * @param {number} lineWidth Width of the line in px
		 * @param {number} percent   Percentage to draw (float between -1 and 1)
		 */
		var drawCircle = function(color, lineWidth, percent) {
			percent = Math.min(Math.max(-1, percent || 0), 1);
			var isNegative = percent <= 0 ? true : false;

			ctx.beginPath();
			ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, isNegative);

			ctx.strokeStyle = color;
			ctx.lineWidth = lineWidth;

			ctx.stroke();
		};

		/**
		 * Draw the scale of the chart
		 */
		var drawScale = function() {
			var offset;
			var length;

			ctx.lineWidth = 1;
			ctx.fillStyle = options.scaleColor;

			ctx.save();
			for (var i = 24; i > 0; --i) {
				if (i % 6 === 0) {
					length = options.scaleLength;
					offset = 0;
				} else {
					length = options.scaleLength * 0.6;
					offset = options.scaleLength - length;
				}
				ctx.fillRect(-options.size/2 + offset, 0, length, 1);
				ctx.rotate(Math.PI / 12);
			}
			ctx.restore();
		};

		/**
		 * Request animation frame wrapper with polyfill
		 * @return {function} Request animation frame method or timeout fallback
		 */
		var reqAnimationFrame = (function() {
			return  window.requestAnimationFrame ||
					window.webkitRequestAnimationFrame ||
					window.mozRequestAnimationFrame ||
					function(callback) {
						window.setTimeout(callback, 1000 / 60);
					};
		}());

		/**
		 * Draw the background of the plugin including the scale and the track
		 */
		var drawBackground = function() {
			if(options.scaleColor) drawScale();
			if(options.trackColor) drawCircle(options.trackColor, options.trackWidth || options.lineWidth, 1);
		};

	  /**
	    * Canvas accessor
	   */
	  this.getCanvas = function() {
	    return canvas;
	  };

	  /**
	    * Canvas 2D context 'ctx' accessor
	   */
	  this.getCtx = function() {
	    return ctx;
	  };

		/**
		 * Clear the complete canvas
		 */
		this.clear = function() {
			ctx.clearRect(options.size / -2, options.size / -2, options.size, options.size);
		};

		/**
		 * Draw the complete chart
		 * @param {number} percent Percent shown by the chart between -100 and 100
		 */
		this.draw = function(percent) {
			// do we need to render a background
			if (!!options.scaleColor || !!options.trackColor) {
				// getImageData and putImageData are supported
				if (ctx.getImageData && ctx.putImageData) {
					if (!cachedBackground) {
						drawBackground();
						cachedBackground = ctx.getImageData(0, 0, options.size * scaleBy, options.size * scaleBy);
					} else {
						ctx.putImageData(cachedBackground, 0, 0);
					}
				} else {
					this.clear();
					drawBackground();
				}
			} else {
				this.clear();
			}

			ctx.lineCap = options.lineCap;

			// if barcolor is a function execute it and pass the percent as a value
			var color;
			if (typeof(options.barColor) === 'function') {
				color = options.barColor(percent);
			} else {
				color = options.barColor;
			}

			// draw bar
			drawCircle(color, options.lineWidth, percent / 100);
		}.bind(this);

		/**
		 * Animate from some percent to some other percentage
		 * @param {number} from Starting percentage
		 * @param {number} to   Final percentage
		 */
		this.animate = function(from, to) {
			var startTime = Date.now();
			options.onStart(from, to);
			var animation = function() {
				var process = Math.min(Date.now() - startTime, options.animate.duration);
				var currentValue = options.easing(this, process, from, to - from, options.animate.duration);
				this.draw(currentValue);
				options.onStep(from, to, currentValue);
				if (process >= options.animate.duration) {
					options.onStop(from, to);
				} else {
					reqAnimationFrame(animation);
				}
			}.bind(this);

			reqAnimationFrame(animation);
		}.bind(this);
	};

	var EasyPieChart = function(el, opts) {
		var defaultOptions = {
			barColor: '#ef1e25',
			trackColor: '#f9f9f9',
			scaleColor: '#dfe0e0',
			scaleLength: 5,
			lineCap: 'round',
			lineWidth: 3,
			trackWidth: undefined,
			size: 110,
			rotate: 0,
			animate: {
				duration: 1000,
				enabled: true
			},
			easing: function (x, t, b, c, d) { // more can be found here: http://gsgd.co.uk/sandbox/jquery/easing/
				t = t / (d/2);
				if (t < 1) {
					return c / 2 * t * t + b;
				}
				return -c/2 * ((--t)*(t-2) - 1) + b;
			},
			onStart: function(from, to) {
				return;
			},
			onStep: function(from, to, currentValue) {
				return;
			},
			onStop: function(from, to) {
				return;
			}
		};

		// detect present renderer
		if (typeof(CanvasRenderer) !== 'undefined') {
			defaultOptions.renderer = CanvasRenderer;
		} else if (typeof(SVGRenderer) !== 'undefined') {
			defaultOptions.renderer = SVGRenderer;
		} else {
			throw new Error('Please load either the SVG- or the CanvasRenderer');
		}

		var options = {};
		var currentValue = 0;

		/**
		 * Initialize the plugin by creating the options object and initialize rendering
		 */
		var init = function() {
			this.el = el;
			this.options = options;

			// merge user options into default options
			for (var i in defaultOptions) {
				if (defaultOptions.hasOwnProperty(i)) {
					options[i] = opts && typeof(opts[i]) !== 'undefined' ? opts[i] : defaultOptions[i];
					if (typeof(options[i]) === 'function') {
						options[i] = options[i].bind(this);
					}
				}
			}

			// check for jQuery easing
			if (typeof(options.easing) === 'string' && typeof(jQuery) !== 'undefined' && jQuery.isFunction(jQuery.easing[options.easing])) {
				options.easing = jQuery.easing[options.easing];
			} else {
				options.easing = defaultOptions.easing;
			}

			// process earlier animate option to avoid bc breaks
			if (typeof(options.animate) === 'number') {
				options.animate = {
					duration: options.animate,
					enabled: true
				};
			}

			if (typeof(options.animate) === 'boolean' && !options.animate) {
				options.animate = {
					duration: 1000,
					enabled: options.animate
				};
			}

			// create renderer
			this.renderer = new options.renderer(el, options);

			// initial draw
			this.renderer.draw(currentValue);

			// initial update
			if (el.dataset && el.dataset.percent) {
				this.update(parseFloat(el.dataset.percent));
			} else if (el.getAttribute && el.getAttribute('data-percent')) {
				this.update(parseFloat(el.getAttribute('data-percent')));
			}
		}.bind(this);

		/**
		 * Update the value of the chart
		 * @param  {number} newValue Number between 0 and 100
		 * @return {object}          Instance of the plugin for method chaining
		 */
		this.update = function(newValue) {
			newValue = parseFloat(newValue);
			if (options.animate.enabled) {
				this.renderer.animate(currentValue, newValue);
			} else {
				this.renderer.draw(newValue);
			}
			currentValue = newValue;
			return this;
		}.bind(this);

		/**
		 * Disable animation
		 * @return {object} Instance of the plugin for method chaining
		 */
		this.disableAnimation = function() {
			options.animate.enabled = false;
			return this;
		};

		/**
		 * Enable animation
		 * @return {object} Instance of the plugin for method chaining
		 */
		this.enableAnimation = function() {
			options.animate.enabled = true;
			return this;
		};

		init();
	};

	return EasyPieChart;

	}));


/***/ },
/* 3 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
	  return _c('div', {
	    ref: "chart",
	    staticClass: "vue-easy-pie-chart",
	    attrs: {
	      "data-percent": _vm.percent
	    }
	  }, [_c('div', {
	    staticClass: "inner-text",
	    style: ({
	      fontSize: _vm.fontSize,
	      lineHeight: _vm.size + 'px'
	    })
	  }, [_vm._t("default", [_vm._v("\n      " + _vm._s(_vm.percent) + "%\n    ")])], 2)])
	},staticRenderFns: []}

/***/ }
/******/ ]);

/***/ }),

/***/ "./resources/js/views/pages/generic/Inbox.vue":
/*!****************************************************!*\
  !*** ./resources/js/views/pages/generic/Inbox.vue ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Inbox_vue_vue_type_template_id_1ed3e674___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Inbox.vue?vue&type=template&id=1ed3e674& */ "./resources/js/views/pages/generic/Inbox.vue?vue&type=template&id=1ed3e674&");
/* harmony import */ var _Inbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Inbox.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/generic/Inbox.vue?vue&type=script&lang=js&");
/* harmony import */ var _Inbox_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Inbox.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/views/pages/generic/Inbox.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Inbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Inbox_vue_vue_type_template_id_1ed3e674___WEBPACK_IMPORTED_MODULE_0__.render,
  _Inbox_vue_vue_type_template_id_1ed3e674___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/generic/Inbox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/generic/Inbox.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/views/pages/generic/Inbox.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Inbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Inbox.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/generic/Inbox.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Inbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/generic/Inbox.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************!*\
  !*** ./resources/js/views/pages/generic/Inbox.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_laravel_mix_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_laravel_mix_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_Inbox_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader/dist/cjs.js!../../../../../node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Inbox.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/laravel-mix/node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/laravel-mix/node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/generic/Inbox.vue?vue&type=style&index=0&lang=scss&");


/***/ }),

/***/ "./resources/js/views/pages/generic/Inbox.vue?vue&type=template&id=1ed3e674&":
/*!***********************************************************************************!*\
  !*** ./resources/js/views/pages/generic/Inbox.vue?vue&type=template&id=1ed3e674& ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Inbox_vue_vue_type_template_id_1ed3e674___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Inbox_vue_vue_type_template_id_1ed3e674___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Inbox_vue_vue_type_template_id_1ed3e674___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Inbox.vue?vue&type=template&id=1ed3e674& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/generic/Inbox.vue?vue&type=template&id=1ed3e674&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/generic/Inbox.vue?vue&type=template&id=1ed3e674&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/generic/Inbox.vue?vue&type=template&id=1ed3e674& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
    "div",
    { staticClass: "content" },
    [
      _c(
        "b-row",
        [
          _c("b-col", { attrs: { md: "5", xl: "3" } }, [
            _c(
              "div",
              { staticClass: "d-md-none push" },
              [
                _c(
                  "b-button",
                  {
                    directives: [
                      {
                        name: "toggle-class",
                        rawName: "v-toggle-class",
                        value: {
                          targetId: "one-inbox-side-nav",
                          class: "d-none",
                        },
                        expression:
                          "{ targetId: 'one-inbox-side-nav', class: 'd-none' }",
                      },
                    ],
                    attrs: { variant: "primary", block: "" },
                  },
                  [_vm._v("\n          Inbox Menu\n        ")]
                ),
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              {
                staticClass: "d-none d-md-block push",
                attrs: { id: "one-inbox-side-nav" },
              },
              [
                _c(
                  "b-modal",
                  {
                    attrs: {
                      id: "one-inbox-new-message",
                      "body-class": "p-0",
                      "hide-footer": "",
                      "hide-header": "",
                    },
                  },
                  [
                    _c(
                      "b-form",
                      { on: { submit: _vm.onSubmit, reset: _vm.onReset } },
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
                                  _c("i", {
                                    staticClass: "fa fa-pencil-alt mr-1",
                                  }),
                                  _vm._v(" New Message\n                "),
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
                                            "one-inbox-new-message"
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
                              { staticClass: "block-content" },
                              [
                                _c(
                                  "b-form-group",
                                  {
                                    attrs: {
                                      label: "Email",
                                      "label-for": "message-email",
                                    },
                                  },
                                  [
                                    _c("b-form-input", {
                                      staticClass: "form-control-alt",
                                      attrs: {
                                        id: "message-email",
                                        type: "email",
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
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-form-group",
                                  {
                                    attrs: {
                                      label: "Subject",
                                      "label-for": "message-subject",
                                    },
                                  },
                                  [
                                    _c("b-form-input", {
                                      staticClass: "form-control-alt",
                                      attrs: {
                                        id: "message-subject",
                                        required: "",
                                      },
                                      model: {
                                        value: _vm.form.subject,
                                        callback: function ($$v) {
                                          _vm.$set(_vm.form, "subject", $$v)
                                        },
                                        expression: "form.subject",
                                      },
                                    }),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-form-group",
                                  {
                                    attrs: {
                                      label: "Message",
                                      "label-for": "message-msg",
                                      description:
                                        "Feel free to use common tags: <blockquote>, <strong>, <em>",
                                    },
                                  },
                                  [
                                    _c("b-form-textarea", {
                                      staticClass: "form-control-alt",
                                      attrs: {
                                        id: "message-msg",
                                        rows: "6",
                                        required: "",
                                      },
                                      model: {
                                        value: _vm.form.message,
                                        callback: function ($$v) {
                                          _vm.$set(_vm.form, "message", $$v)
                                        },
                                        expression: "form.message",
                                      },
                                    }),
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
                                          "one-inbox-new-message"
                                        )
                                      },
                                    },
                                  },
                                  [_vm._v("Cancel")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "b-button",
                                  {
                                    attrs: {
                                      type: "submit",
                                      variant: "primary",
                                    },
                                  },
                                  [
                                    _c("i", {
                                      staticClass: "fa fa-paper-plane mr-1",
                                    }),
                                    _vm._v(" Send Message\n                "),
                                  ]
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
                  "base-block",
                  {
                    attrs: {
                      title: "Inbox",
                      "header-class": "block-header-default",
                      rounded: "",
                    },
                    scopedSlots: _vm._u([
                      {
                        key: "options",
                        fn: function () {
                          return [
                            _c(
                              "b-button",
                              {
                                directives: [
                                  {
                                    name: "b-modal",
                                    rawName: "v-b-modal.one-inbox-new-message",
                                    modifiers: {
                                      "one-inbox-new-message": true,
                                    },
                                  },
                                ],
                                staticClass: "btn btn-sm btn-alt-primary",
                                attrs: { variant: "alt-primary", size: "sm" },
                              },
                              [
                                _c("i", {
                                  staticClass: "fa fa-pencil-alt mr-1",
                                }),
                                _vm._v(" Compose\n            "),
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
                      "b-nav",
                      {
                        staticClass: "font-size-sm push",
                        attrs: { pills: "", vertical: "" },
                      },
                      [
                        _c(
                          "b-nav-item",
                          {
                            staticClass: "my-1",
                            attrs: {
                              href: "javascript:void(0)",
                              "link-classes":
                                "d-flex justify-content-between align-items-center",
                              active: "",
                            },
                          },
                          [
                            _c("span", [
                              _c("i", {
                                staticClass: "fa fa-fw fa-inbox mr-1",
                              }),
                              _vm._v(" Inbox\n              "),
                            ]),
                            _vm._v(" "),
                            _c(
                              "b-badge",
                              { attrs: { pill: "", variant: "secondary" } },
                              [_vm._v("3")]
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-nav-item",
                          {
                            staticClass: "my-1",
                            attrs: {
                              href: "javascript:void(0)",
                              "link-classes":
                                "d-flex justify-content-between align-items-center",
                            },
                          },
                          [
                            _c("span", [
                              _c("i", { staticClass: "fa fa-fw fa-star mr-1" }),
                              _vm._v(" Starred\n              "),
                            ]),
                            _vm._v(" "),
                            _c(
                              "b-badge",
                              { attrs: { pill: "", variant: "secondary" } },
                              [_vm._v("48")]
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-nav-item",
                          {
                            staticClass: "my-1",
                            attrs: {
                              href: "javascript:void(0)",
                              "link-classes":
                                "d-flex justify-content-between align-items-center",
                            },
                          },
                          [
                            _c("span", [
                              _c("i", {
                                staticClass: "fa fa-fw fa-paper-plane mr-1",
                              }),
                              _vm._v(" Sent\n              "),
                            ]),
                            _vm._v(" "),
                            _c(
                              "b-badge",
                              { attrs: { pill: "", variant: "secondary" } },
                              [_vm._v("1480")]
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-nav-item",
                          {
                            staticClass: "my-1",
                            attrs: {
                              href: "javascript:void(0)",
                              "link-classes":
                                "d-flex justify-content-between align-items-center",
                            },
                          },
                          [
                            _c("span", [
                              _c("i", {
                                staticClass: "fa fa-fw fa-pencil-alt mr-1",
                              }),
                              _vm._v(" Draft\n              "),
                            ]),
                            _vm._v(" "),
                            _c(
                              "b-badge",
                              { attrs: { pill: "", variant: "secondary" } },
                              [_vm._v("2")]
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-nav-item",
                          {
                            staticClass: "my-1",
                            attrs: {
                              href: "javascript:void(0)",
                              "link-classes":
                                "d-flex justify-content-between align-items-center",
                            },
                          },
                          [
                            _c("span", [
                              _c("i", {
                                staticClass: "fa fa-fw fa-folder mr-1",
                              }),
                              _vm._v(" Archive\n              "),
                            ]),
                            _vm._v(" "),
                            _c(
                              "b-badge",
                              { attrs: { pill: "", variant: "secondary" } },
                              [_vm._v("1987")]
                            ),
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "b-nav-item",
                          {
                            staticClass: "my-1",
                            attrs: {
                              href: "javascript:void(0)",
                              "link-classes":
                                "d-flex justify-content-between align-items-center",
                            },
                          },
                          [
                            _c("span", [
                              _c("i", {
                                staticClass: "fa fa-fw fa-trash-alt mr-1",
                              }),
                              _vm._v(" Trash\n              "),
                            ]),
                            _vm._v(" "),
                            _c(
                              "b-badge",
                              { attrs: { pill: "", variant: "secondary" } },
                              [_vm._v("10")]
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
                  {
                    attrs: {
                      title: "Friends",
                      "header-class": "block-header-default",
                      rounded: "",
                    },
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
                              },
                              [_c("i", { staticClass: "si si-settings" })]
                            ),
                          ]
                        },
                        proxy: true,
                      },
                    ]),
                  },
                  [
                    _vm._v(" "),
                    _c("ul", { staticClass: "nav-items font-size-sm" }, [
                      _c("li", [
                        _c(
                          "a",
                          {
                            staticClass: "media py-2",
                            attrs: { href: "javascript:void(0)" },
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "mr-3 ml-2 overlay-container overlay-bottom",
                              },
                              [
                                _c("img", {
                                  staticClass: "img-avatar img-avatar48",
                                  attrs: {
                                    src: "img/avatars/avatar7.jpg",
                                    alt: "Avatar",
                                  },
                                }),
                                _vm._v(" "),
                                _c("span", {
                                  staticClass:
                                    "overlay-item item item-tiny item-circle border border-2x border-white bg-success",
                                }),
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "media-body" }, [
                              _c("div", { staticClass: "font-w600" }, [
                                _vm._v("Judy Ford"),
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "font-w400 text-muted" },
                                [_vm._v("Web Designer")]
                              ),
                            ]),
                          ]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c(
                          "a",
                          {
                            staticClass: "media py-2",
                            attrs: { href: "javascript:void(0)" },
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "mr-3 ml-2 overlay-container overlay-bottom",
                              },
                              [
                                _c("img", {
                                  staticClass: "img-avatar img-avatar48",
                                  attrs: {
                                    src: "img/avatars/avatar16.jpg",
                                    alt: "Avatar",
                                  },
                                }),
                                _vm._v(" "),
                                _c("span", {
                                  staticClass:
                                    "overlay-item item item-tiny item-circle border border-2x border-white bg-success",
                                }),
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "media-body" }, [
                              _c("div", { staticClass: "font-w600" }, [
                                _vm._v("Adam McCoy"),
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "font-w400 text-muted" },
                                [_vm._v("Graphic Designer")]
                              ),
                            ]),
                          ]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c(
                          "a",
                          {
                            staticClass: "media py-2",
                            attrs: { href: "javascript:void(0)" },
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "mr-3 ml-2 overlay-container overlay-bottom",
                              },
                              [
                                _c("img", {
                                  staticClass: "img-avatar img-avatar48",
                                  attrs: {
                                    src: "img/avatars/avatar4.jpg",
                                    alt: "Avatar",
                                  },
                                }),
                                _vm._v(" "),
                                _c("span", {
                                  staticClass:
                                    "overlay-item item item-tiny item-circle border border-2x border-white bg-warning",
                                }),
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "media-body" }, [
                              _c("div", { staticClass: "font-w600" }, [
                                _vm._v("Helen Jacobs"),
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "font-w400 text-muted" },
                                [_vm._v("Photographer")]
                              ),
                            ]),
                          ]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c(
                          "a",
                          {
                            staticClass: "media py-2",
                            attrs: { href: "javascript:void(0)" },
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "mr-3 ml-2 overlay-container overlay-bottom",
                              },
                              [
                                _c("img", {
                                  staticClass: "img-avatar img-avatar48",
                                  attrs: {
                                    src: "img/avatars/avatar15.jpg",
                                    alt: "Avatar",
                                  },
                                }),
                                _vm._v(" "),
                                _c("span", {
                                  staticClass:
                                    "overlay-item item item-tiny item-circle border border-2x border-white bg-warning",
                                }),
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "media-body" }, [
                              _c("div", { staticClass: "font-w600" }, [
                                _vm._v("Jack Greene"),
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "font-w400 text-muted" },
                                [_vm._v("Copywriter")]
                              ),
                            ]),
                          ]
                        ),
                      ]),
                      _vm._v(" "),
                      _c("li", [
                        _c(
                          "a",
                          {
                            staticClass: "media py-2",
                            attrs: { href: "javascript:void(0)" },
                          },
                          [
                            _c(
                              "div",
                              {
                                staticClass:
                                  "mr-3 ml-2 overlay-container overlay-bottom",
                              },
                              [
                                _c("img", {
                                  staticClass: "img-avatar img-avatar48",
                                  attrs: {
                                    src: "img/avatars/avatar13.jpg",
                                    alt: "Avatar",
                                  },
                                }),
                                _vm._v(" "),
                                _c("span", {
                                  staticClass:
                                    "overlay-item item item-tiny item-circle border border-2x border-white bg-danger",
                                }),
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", { staticClass: "media-body" }, [
                              _c("div", { staticClass: "font-w600" }, [
                                _vm._v("Scott Young"),
                              ]),
                              _vm._v(" "),
                              _c(
                                "div",
                                { staticClass: "font-w400 text-muted" },
                                [_vm._v("UI designer")]
                              ),
                            ]),
                          ]
                        ),
                      ]),
                    ]),
                  ]
                ),
                _vm._v(" "),
                _c(
                  "base-block",
                  {
                    attrs: {
                      title: "Account",
                      "header-class": "block-header-default",
                      rounded: "",
                    },
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
                              },
                              [_c("i", { staticClass: "si si-settings" })]
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
                      "vue-easy-pie-chart",
                      {
                        staticClass: "push",
                        attrs: {
                          percent: 35,
                          "line-width": 3,
                          size: 100,
                          "bar-color": "#abe37d",
                          "track-color": "#eeeeee",
                          "scale-color": "#dddddd",
                        },
                      },
                      [
                        _c("img", {
                          staticClass: "img-avatar",
                          attrs: {
                            src: "img/avatars/avatar1.jpg",
                            alt: "Avatar",
                          },
                        }),
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "base-block",
                      {
                        attrs: {
                          tag: "a",
                          href: "javascript:void(0)",
                          rounded: "",
                          bordered: "",
                          "link-shadow": "",
                          "content-full": "",
                          "content-class": "text-center",
                        },
                      },
                      [
                        _c("div", { staticClass: "push" }, [
                          _c("i", {
                            staticClass: "si si-like fa-2x text-success",
                          }),
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "font-size-h2 font-w700" }, [
                          _c("span", { staticClass: "text-muted" }, [
                            _vm._v("+"),
                          ]),
                          _vm._v(" 2.5TB\n              "),
                        ]),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass:
                              "font-size-sm text-muted text-uppercase",
                          },
                          [
                            _vm._v(
                              "\n                Upgrade Now\n              "
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
          ]),
          _vm._v(" "),
          _c(
            "b-col",
            { attrs: { md: "7", xl: "9" } },
            [
              _c(
                "b-modal",
                {
                  attrs: {
                    id: "one-inbox-message",
                    "body-class": "p-0",
                    "hide-footer": "",
                    "hide-header": "",
                  },
                },
                [
                  _vm.showMessage
                    ? _c(
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
                                _vm._v(
                                  "\n              " +
                                    _vm._s(
                                      _vm.messages.find(function (x) {
                                        return x.id === _vm.showMessage
                                      }).title
                                    ) +
                                    "\n            "
                                ),
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
                                          "one-inbox-message"
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
                            {
                              staticClass:
                                "block-content block-content-full font-size-sm d-flex justify-content-between align-items-center bg-body-light",
                            },
                            [
                              _c("div", [
                                _c(
                                  "a",
                                  {
                                    staticClass: "font-w600",
                                    attrs: { href: "javascript:void(0)" },
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.messages.find(function (x) {
                                          return x.id === _vm.showMessage
                                        }).user
                                      )
                                    ),
                                  ]
                                ),
                                _c("br"),
                                _vm._v(" "),
                                _c(
                                  "a",
                                  { attrs: { href: "javascript:void(0)" } },
                                  [
                                    _vm._v(
                                      _vm._s(
                                        _vm.messages.find(function (x) {
                                          return x.id === _vm.showMessage
                                        }).email
                                      )
                                    ),
                                  ]
                                ),
                              ]),
                              _vm._v(" "),
                              _c("span", { staticClass: "text-muted" }, [
                                _c("em", [
                                  _vm._v(
                                    _vm._s(
                                      _vm.messages.find(function (x) {
                                        return x.id === _vm.showMessage
                                      }).received
                                    )
                                  ),
                                ]),
                              ]),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "block-content font-size-sm" },
                            [
                              _c("p", [_vm._v("Dear Admin,")]),
                              _vm._v(" "),
                              _c("p", [
                                _vm._v(
                                  "Dolor posuere proin blandit accumsan senectus netus nullam curae, ornare laoreet adipiscing luctus mauris adipiscing pretium eget fermentum, tristique lobortis est ut metus lobortis tortor tincidunt himenaeos habitant quis dictumst proin odio sagittis purus mi, nec taciti vestibulum quis in sit varius lorem sit metus mi."
                                ),
                              ]),
                              _vm._v(" "),
                              _c("p", [_vm._v("Best Regards")]),
                            ]
                          ),
                          _vm._v(" "),
                          _vm.messages.find(function (x) {
                            return x.id === _vm.showMessage
                          }).files.length
                            ? _c(
                                "div",
                                { staticClass: "block-content bg-body-light" },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass:
                                        "row gutters-tiny items-push font-size-sm",
                                    },
                                    _vm._l(
                                      _vm.messages.find(function (x) {
                                        return x.id === _vm.showMessage
                                      }).files,
                                      function (file) {
                                        return _c(
                                          "div",
                                          {
                                            key: file,
                                            staticClass:
                                              "col-md-4 text-center py-2",
                                          },
                                          [
                                            _c("div", { staticClass: "mb-2" }, [
                                              _c("i", {
                                                staticClass:
                                                  "fa fa-file fa-2x text-muted opacity-50",
                                              }),
                                            ]),
                                            _vm._v(" "),
                                            _c(
                                              "div",
                                              { staticClass: "text-muted" },
                                              [_vm._v(_vm._s(file))]
                                            ),
                                          ]
                                        )
                                      }
                                    ),
                                    0
                                  ),
                                ]
                              )
                            : _vm._e(),
                        ]
                      )
                    : _vm._e(),
                ]
              ),
              _vm._v(" "),
              _c(
                "base-block",
                {
                  attrs: {
                    rounded: "",
                    "btn-option-fullscreen": "",
                    "header-class": "block-header-default",
                  },
                  scopedSlots: _vm._u([
                    {
                      key: "title",
                      fn: function () {
                        return [
                          _vm._v("\n          15-30 "),
                          _c(
                            "span",
                            { staticClass: "font-w400 text-lowercase" },
                            [_vm._v("from")]
                          ),
                          _vm._v(" 700\n        "),
                        ]
                      },
                      proxy: true,
                    },
                    {
                      key: "options",
                      fn: function () {
                        return [
                          _c(
                            "button",
                            {
                              directives: [
                                {
                                  name: "b-tooltip",
                                  rawName: "v-b-tooltip.hover.nofade.left",
                                  value: "Previous 15 Messages",
                                  expression: "'Previous 15 Messages'",
                                  modifiers: {
                                    hover: true,
                                    nofade: true,
                                    left: true,
                                  },
                                },
                              ],
                              staticClass: "btn-block-option",
                              attrs: { type: "button" },
                            },
                            [_c("i", { staticClass: "si si-arrow-left" })]
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              directives: [
                                {
                                  name: "b-tooltip",
                                  rawName: "v-b-tooltip.hover.nofade.left",
                                  value: "Next 15 Messages",
                                  expression: "'Next 15 Messages'",
                                  modifiers: {
                                    hover: true,
                                    nofade: true,
                                    left: true,
                                  },
                                },
                              ],
                              staticClass: "btn-block-option",
                              attrs: { type: "button" },
                            },
                            [_c("i", { staticClass: "si si-arrow-right" })]
                          ),
                        ]
                      },
                      proxy: true,
                    },
                  ]),
                },
                [
                  _vm._v(" "),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "d-flex justify-content-between push" },
                    [
                      _c(
                        "div",
                        { staticClass: "btn-group" },
                        [
                          _c(
                            "b-button",
                            { attrs: { variant: "light", size: "sm" } },
                            [
                              _c("i", {
                                staticClass: "fa fa-archive text-primary",
                              }),
                              _vm._v(" "),
                              _c(
                                "span",
                                { staticClass: "d-none d-sm-inline ml-1" },
                                [_vm._v("Archive")]
                              ),
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "b-button",
                            { attrs: { variant: "light", size: "sm" } },
                            [
                              _c("i", {
                                staticClass: "fa fa-star text-warning",
                              }),
                              _vm._v(" "),
                              _c(
                                "span",
                                { staticClass: "d-none d-sm-inline ml-1" },
                                [_vm._v("Star")]
                              ),
                            ]
                          ),
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "b-button",
                        { attrs: { variant: "light", size: "sm" } },
                        [
                          _c("i", { staticClass: "fa fa-times text-danger" }),
                          _vm._v(" "),
                          _c(
                            "span",
                            { staticClass: "d-none d-sm-inline ml-1" },
                            [_vm._v("Delete")]
                          ),
                        ]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    { staticClass: "pull-x" },
                    [
                      _c(
                        "b-table-simple",
                        {
                          attrs: {
                            hover: "",
                            "table-class": "table-vcenter font-size-sm",
                          },
                        },
                        [
                          _c(
                            "b-tbody",
                            _vm._l(_vm.messages, function (message) {
                              return _c(
                                "b-tr",
                                { key: message.id },
                                [
                                  _c(
                                    "b-td",
                                    {
                                      staticClass: "text-center",
                                      staticStyle: { width: "60px" },
                                    },
                                    [
                                      _c("b-form-checkbox", {
                                        attrs: {
                                          id: "checkbox-" + message.id,
                                          value: message.id,
                                        },
                                      }),
                                    ],
                                    1
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-td",
                                    {
                                      staticClass:
                                        "d-none d-sm-table-cell font-w600",
                                      staticStyle: { width: "140px" },
                                    },
                                    [
                                      _vm._v(
                                        "\n                  " +
                                          _vm._s(message.user) +
                                          "\n                "
                                      ),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("b-td", [
                                    _c(
                                      "a",
                                      {
                                        directives: [
                                          {
                                            name: "b-modal",
                                            rawName:
                                              "v-b-modal.one-inbox-message",
                                            modifiers: {
                                              "one-inbox-message": true,
                                            },
                                          },
                                        ],
                                        staticClass: "font-w600",
                                        attrs: { href: "javascript:void(0)" },
                                        on: {
                                          click: function ($event) {
                                            _vm.showMessage = message.id
                                          },
                                        },
                                      },
                                      [
                                        _vm._v(
                                          "\n                    " +
                                            _vm._s(message.title) +
                                            "\n                  "
                                        ),
                                      ]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "text-muted mt-1" },
                                      [
                                        _vm._v(
                                          "\n                    " +
                                            _vm._s(message.contentPreview) +
                                            "\n                  "
                                        ),
                                      ]
                                    ),
                                  ]),
                                  _vm._v(" "),
                                  _c(
                                    "b-td",
                                    {
                                      staticClass:
                                        "d-none d-xl-table-cell text-muted",
                                      staticStyle: { width: "80px" },
                                    },
                                    [
                                      message.files.length > 0
                                        ? _c("span", [
                                            _c("i", {
                                              staticClass:
                                                "fa fa-paperclip mr-1",
                                            }),
                                            _vm._v(
                                              " (" +
                                                _vm._s(message.files.length) +
                                                ")\n                  "
                                            ),
                                          ])
                                        : _vm._e(),
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "b-td",
                                    {
                                      staticClass:
                                        "d-none d-xl-table-cell text-muted",
                                      staticStyle: { width: "120px" },
                                    },
                                    [
                                      _c("em", [
                                        _vm._v(_vm._s(message.received)),
                                      ]),
                                    ]
                                  ),
                                ],
                                1
                              )
                            }),
                            1
                          ),
                        ],
                        1
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
      ),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);