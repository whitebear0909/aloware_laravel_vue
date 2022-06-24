"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_tables_Helpers_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/tables/Helpers.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/tables/Helpers.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      sortBy: 'id',
      sortDesc: false,
      selectMode: 'multi',
      selected: [],
      fields: [{
        key: 'id',
        sortable: true,
        thStyle: 'width: 75px;',
        thClass: 'text-center',
        tdClass: 'text-center'
      }, {
        key: 'firstName',
        sortable: true
      }, {
        key: 'lastName',
        sortable: true
      }, {
        key: 'email',
        sortable: true
      }],
      fields2: [{
        key: 'selected',
        thStyle: 'width: 150px;',
        thClass: 'text-center',
        tdClass: 'text-center'
      }, {
        key: 'id',
        thStyle: 'width: 75px;',
        thClass: 'text-center',
        tdClass: 'text-center'
      }, {
        key: 'firstName'
      }, {
        key: 'lastName'
      }, {
        key: 'email'
      }],
      users: [{
        id: 1,
        firstName: 'Adam',
        lastName: 'McCoy',
        email: 'adam.maccoy@example.com'
      }, {
        id: 2,
        firstName: 'Betty',
        lastName: 'Kelley',
        email: 'betty.kelley@example.com'
      }, {
        id: 3,
        firstName: 'Jesse',
        lastName: 'Fisher',
        email: 'jesse.fisher@example.com'
      }, {
        id: 4,
        firstName: 'Ryan',
        lastName: 'Flores',
        email: 'ryan.flores@example.com'
      }, {
        id: 5,
        firstName: 'Alice',
        lastName: 'Moore',
        email: 'alice.moore@example.com'
      }]
    };
  },
  methods: {
    onRowSelected: function onRowSelected(items) {
      this.selected = items;
    },
    selectAllRows: function selectAllRows() {
      this.$refs.selectableTable.selectAllRows();
    },
    clearSelected: function clearSelected() {
      this.$refs.selectableTable.clearSelected();
    },
    selectSecondRow: function selectSecondRow() {
      // Rows are indexed from 0, so the second row is index 1
      this.$refs.selectableTable.selectRow(1);
    },
    unselectSecondRow: function unselectSecondRow() {
      // Rows are indexed from 0, so the second row is index 1
      this.$refs.selectableTable.unselectRow(1);
    }
  }
});

/***/ }),

/***/ "./resources/js/views/tables/Helpers.vue":
/*!***********************************************!*\
  !*** ./resources/js/views/tables/Helpers.vue ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Helpers_vue_vue_type_template_id_511eb5fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Helpers.vue?vue&type=template&id=511eb5fa& */ "./resources/js/views/tables/Helpers.vue?vue&type=template&id=511eb5fa&");
/* harmony import */ var _Helpers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Helpers.vue?vue&type=script&lang=js& */ "./resources/js/views/tables/Helpers.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Helpers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Helpers_vue_vue_type_template_id_511eb5fa___WEBPACK_IMPORTED_MODULE_0__.render,
  _Helpers_vue_vue_type_template_id_511eb5fa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/tables/Helpers.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/tables/Helpers.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/views/tables/Helpers.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Helpers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Helpers.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/tables/Helpers.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Helpers_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/tables/Helpers.vue?vue&type=template&id=511eb5fa&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/tables/Helpers.vue?vue&type=template&id=511eb5fa& ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Helpers_vue_vue_type_template_id_511eb5fa___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Helpers_vue_vue_type_template_id_511eb5fa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Helpers_vue_vue_type_template_id_511eb5fa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Helpers.vue?vue&type=template&id=511eb5fa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/tables/Helpers.vue?vue&type=template&id=511eb5fa&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/tables/Helpers.vue?vue&type=template&id=511eb5fa&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/tables/Helpers.vue?vue&type=template&id=511eb5fa& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
          title: "Table Helpers",
          subtitle: "Custom functionality to further enrich your tables.",
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
                      [_vm._v("Tables")]
                    ),
                    _vm._v(" "),
                    _c("b-breadcrumb-item", { attrs: { active: "" } }, [
                      _vm._v("Helpers"),
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
            {
              attrs: { rounded: "", title: "Sorting Table" },
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
              _c("p", { staticClass: "font-size-sm text-muted" }, [
                _vm._v("\n        Sorting By: "),
                _c("strong", [_vm._v(_vm._s(_vm.sortBy))]),
                _vm._v(", Sort Direction: "),
                _c("strong", [
                  _vm._v(_vm._s(_vm.sortDesc ? "Descending" : "Ascending")),
                ]),
              ]),
              _vm._v(" "),
              _c("b-table", {
                attrs: {
                  items: _vm.users,
                  fields: _vm.fields,
                  "sort-by": _vm.sortBy,
                  "sort-desc": _vm.sortDesc,
                  responsive: "",
                  bordered: "",
                  striped: "",
                  "table-class": "table-vcenter",
                },
                on: {
                  "update:sortBy": function ($event) {
                    _vm.sortBy = $event
                  },
                  "update:sort-by": function ($event) {
                    _vm.sortBy = $event
                  },
                  "update:sortDesc": function ($event) {
                    _vm.sortDesc = $event
                  },
                  "update:sort-desc": function ($event) {
                    _vm.sortDesc = $event
                  },
                },
              }),
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "base-block",
            {
              attrs: { rounded: "", title: "Selectable Table" },
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
                "p",
                [
                  _c(
                    "b-button",
                    {
                      attrs: { size: "sm", variant: "light" },
                      on: { click: _vm.selectAllRows },
                    },
                    [_vm._v("Select all")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      attrs: { size: "sm", variant: "light" },
                      on: { click: _vm.clearSelected },
                    },
                    [_vm._v("Clear selected")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      attrs: { size: "sm", variant: "light" },
                      on: { click: _vm.selectSecondRow },
                    },
                    [_vm._v("Select 2nd row")]
                  ),
                  _vm._v(" "),
                  _c(
                    "b-button",
                    {
                      attrs: { size: "sm", variant: "light" },
                      on: { click: _vm.unselectSecondRow },
                    },
                    [_vm._v("Unselect 2nd row")]
                  ),
                ],
                1
              ),
              _vm._v(" "),
              _c("b-table", {
                ref: "selectableTable",
                attrs: {
                  selectable: "",
                  "select-variant": "active",
                  items: _vm.users,
                  fields: _vm.fields2,
                  responsive: "",
                  "table-class": "table-vcenter",
                },
                on: { "row-selected": _vm.onRowSelected },
                scopedSlots: _vm._u([
                  {
                    key: "cell(selected)",
                    fn: function (ref) {
                      var rowSelected = ref.rowSelected
                      return [
                        rowSelected
                          ? [
                              _c("span", { attrs: { "aria-hidden": "true" } }, [
                                _c("i", {
                                  staticClass:
                                    "fa fa-check-circle text-primary",
                                }),
                              ]),
                              _vm._v(" "),
                              _c("span", { staticClass: "sr-only" }, [
                                _vm._v("Selected"),
                              ]),
                            ]
                          : [
                              _c("span", { attrs: { "aria-hidden": "true" } }, [
                                _c("i", {
                                  staticClass: "fa fa-minus-circle text-muted",
                                }),
                              ]),
                              _vm._v(" "),
                              _c("span", { staticClass: "sr-only" }, [
                                _vm._v("Not selected"),
                              ]),
                            ],
                      ]
                    },
                  },
                ]),
              }),
              _vm._v(" "),
              _c("p", { staticClass: "font-size-sm text-muted" }, [
                _vm._v("\n        Selected Rows: "),
                _c("strong", [_vm._v(_vm._s(_vm.selected))]),
              ]),
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