"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_pages_users_UserList_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/users/UserList.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/users/UserList.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_UserItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/UserItem */ "./resources/js/views/pages/users/components/UserItem.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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


/* harmony default export */ __webpack_exports__["default"] = ({
  components: {
    UserItem: _components_UserItem__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      perPage: 12,
      currentPage: 1,
      searchStr: "",
      delUserId: ""
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)({
    users: "user/users",
    user: "auth/user"
  })), {}, {
    rows: function rows() {
      return this.users.length;
    }
  }),
  mounted: function mounted() {
    this.$store.dispatch("user/getUsers", "");
    this.$store.dispatch("auth/fetchUser");
  },
  created: function created() {},
  methods: {
    gotoCreatePage: function gotoCreatePage() {
      this.$router.push("/users/create");
    },
    getUserBySearch: function getUserBySearch(event) {
      if (event.keyCode === 13) {
        if (event) event.preventDefault();
        this.$store.dispatch("user/getUsers", this.searchStr);
      }
    },
    setDelUserId: function setDelUserId(id) {
      this.delUserId = id;
    },
    deleteUser: function deleteUser(id) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
        var _this, result;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(id == _this2.user.id)) {
                  _context.next = 4;
                  break;
                }

                _this2.$refs["alert-modal"].show();

                _context.next = 14;
                break;

              case 4:
                _this = _this2;
                _context.prev = 5;
                _context.next = 8;
                return _this2.$bvModal.msgBoxConfirm("Do you really want to delete this Shift?", //do you want to delete this user?
                {
                  title: "Confirmation" //confirmation

                });

              case 8:
                result = _context.sent;

                if (result === true) {
                  _this.$store.dispatch("user/deleteUser", {
                    id: id
                  }).then(function (res) {
                    _this.$store.dispatch("user/getUsers", "");
                  });
                }

                _context.next = 14;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](5);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, null, [[5, 12]]);
      }))();
    },
    hideAlertModal: function hideAlertModal() {
      this.$refs["alert-modal"].hide();
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/users/components/UserItem.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/users/components/UserItem.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ["user", "deleteUser"]
});

/***/ }),

/***/ "./resources/js/views/pages/users/UserList.vue":
/*!*****************************************************!*\
  !*** ./resources/js/views/pages/users/UserList.vue ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserList_vue_vue_type_template_id_59b41cfa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserList.vue?vue&type=template&id=59b41cfa& */ "./resources/js/views/pages/users/UserList.vue?vue&type=template&id=59b41cfa&");
/* harmony import */ var _UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserList.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/users/UserList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserList_vue_vue_type_template_id_59b41cfa___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserList_vue_vue_type_template_id_59b41cfa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/users/UserList.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/users/components/UserItem.vue":
/*!****************************************************************!*\
  !*** ./resources/js/views/pages/users/components/UserItem.vue ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserItem_vue_vue_type_template_id_4cdeeb94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserItem.vue?vue&type=template&id=4cdeeb94& */ "./resources/js/views/pages/users/components/UserItem.vue?vue&type=template&id=4cdeeb94&");
/* harmony import */ var _UserItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserItem.vue?vue&type=script&lang=js& */ "./resources/js/views/pages/users/components/UserItem.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserItem_vue_vue_type_template_id_4cdeeb94___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserItem_vue_vue_type_template_id_4cdeeb94___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/pages/users/components/UserItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/pages/users/UserList.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/views/pages/users/UserList.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/users/UserList.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/users/components/UserItem.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/views/pages/users/components/UserItem.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/users/components/UserItem.vue?vue&type=script&lang=js&");
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/pages/users/UserList.vue?vue&type=template&id=59b41cfa&":
/*!************************************************************************************!*\
  !*** ./resources/js/views/pages/users/UserList.vue?vue&type=template&id=59b41cfa& ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_59b41cfa___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_59b41cfa___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserList_vue_vue_type_template_id_59b41cfa___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserList.vue?vue&type=template&id=59b41cfa& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/users/UserList.vue?vue&type=template&id=59b41cfa&");


/***/ }),

/***/ "./resources/js/views/pages/users/components/UserItem.vue?vue&type=template&id=4cdeeb94&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/views/pages/users/components/UserItem.vue?vue&type=template&id=4cdeeb94& ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserItem_vue_vue_type_template_id_4cdeeb94___WEBPACK_IMPORTED_MODULE_0__.render; },
/* harmony export */   "staticRenderFns": function() { return /* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserItem_vue_vue_type_template_id_4cdeeb94___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns; }
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserItem_vue_vue_type_template_id_4cdeeb94___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserItem.vue?vue&type=template&id=4cdeeb94& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/users/components/UserItem.vue?vue&type=template&id=4cdeeb94&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/users/UserList.vue?vue&type=template&id=59b41cfa&":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/users/UserList.vue?vue&type=template&id=59b41cfa& ***!
  \***************************************************************************************************************************************************************************************************************************/
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
      _c("div", { staticClass: "content" }, [
        _c(
          "div",
          {
            staticClass:
              "d-flex flex-column flex-sm-row justify-content-sm-between align-items-sm-center py-2 text-center text-sm-left",
          },
          [
            _vm._m(0),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "mt-2" },
              [
                _c(
                  "b-form",
                  {},
                  [
                    _c(
                      "b-row",
                      [
                        _c(
                          "b-col",
                          {
                            staticClass: "pb-2",
                            attrs: { lg: "6", md: "6", sm: "6", xs: "6" },
                          },
                          [
                            _c(
                              "b-input-group",
                              [
                                _c(
                                  "b-input-group-prepend",
                                  [
                                    _c(
                                      "b-button",
                                      { attrs: { variant: "primary" } },
                                      [
                                        _c("i", {
                                          staticClass: "fa fa-search mr-1",
                                        }),
                                      ]
                                    ),
                                  ],
                                  1
                                ),
                                _vm._v(" "),
                                _c("b-form-input", {
                                  attrs: { placeholder: "Search User..." },
                                  on: {
                                    keydown: function ($event) {
                                      return _vm.getUserBySearch($event)
                                    },
                                  },
                                  model: {
                                    value: _vm.searchStr,
                                    callback: function ($$v) {
                                      _vm.searchStr = $$v
                                    },
                                    expression: "searchStr",
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
                          "b-col",
                          {
                            staticClass: "pb-2",
                            attrs: { lg: "6", md: "6", sm: "6", xs: "6" },
                          },
                          [
                            _c(
                              "b-button",
                              {
                                directives: [
                                  {
                                    name: "click-ripple",
                                    rawName: "v-click-ripple",
                                  },
                                ],
                                staticClass: "mr-1",
                                attrs: {
                                  variant: "primary",
                                  href: "javascript:void(0)",
                                },
                                on: { click: _vm.gotoCreatePage },
                              },
                              [
                                _c("i", {
                                  staticClass: "fa fa-user-plus mr-4",
                                }),
                                _vm._v(
                                  "\n                                Add User\n                            "
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
            ),
          ]
        ),
      ]),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "content" },
        [
          _vm.users.isLoading === true
            ? _c(
                "div",
                { staticClass: "text-center" },
                [_c("b-spinner", { attrs: { label: "Loading..." } })],
                1
              )
            : _c(
                "b-row",
                { staticClass: "text-center justify-content-start" },
                _vm._l(_vm.users.data, function (item, index) {
                  return _c("user-item", {
                    key: index,
                    attrs: { user: item, deleteUser: _vm.deleteUser },
                  })
                }),
                1
              ),
          _vm._v(" "),
          _c(
            "div",
            [
              _c("b-pagination", {
                staticClass: "float-right mb-5",
                attrs: {
                  "total-rows": _vm.rows,
                  "per-page": _vm.perPage,
                  "aria-controls": "my-table",
                },
                model: {
                  value: _vm.currentPage,
                  callback: function ($$v) {
                    _vm.currentPage = $$v
                  },
                  expression: "currentPage",
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
        "b-modal",
        { ref: "alert-modal", attrs: { "hide-footer": "", title: "Alarm" } },
        [
          _c("div", { staticClass: "d-block text-center" }, [
            _c("h3", [_vm._v("This User is you. You can't delete this User.")]),
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "text-center" },
            [
              _c(
                "b-button",
                {
                  staticClass: "mt-2 w-40",
                  attrs: { variant: "danger" },
                  on: { click: _vm.hideAlertModal },
                },
                [_vm._v("ok")]
              ),
            ],
            1
          ),
        ]
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
    return _c("div", { staticClass: "flex-sm-fill" }, [
      _c("h1", { staticClass: "h3 font-w700 mb-2" }, [
        _vm._v("User Administration"),
      ]),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/users/components/UserItem.vue?vue&type=template&id=4cdeeb94&":
/*!**************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/views/pages/users/components/UserItem.vue?vue&type=template&id=4cdeeb94& ***!
  \**************************************************************************************************************************************************************************************************************************************/
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
    "b-col",
    { attrs: { md: "6", xl: "3" } },
    [
      _c(
        "router-link",
        { attrs: { to: { name: "UserEdit", params: { id: _vm.user.id } } } },
        [
          _c(
            "div",
            { staticClass: "user-item-card mb-5" },
            [
              _c(
                "b-dropdown",
                {
                  staticClass: "m-2 setting-drop",
                  attrs: { "no-caret": "", variant: "outline-secondary" },
                  scopedSlots: _vm._u([
                    {
                      key: "button-content",
                      fn: function () {
                        return [_c("i", { staticClass: "fa fa-ellipsis-v" })]
                      },
                      proxy: true,
                    },
                  ]),
                },
                [
                  _vm._v(" "),
                  _c(
                    "b-dropdown-item",
                    { attrs: { href: "#" } },
                    [
                      _c(
                        "router-link",
                        {
                          staticClass: "drop-button",
                          attrs: {
                            to: {
                              name: "UserEdit",
                              params: { id: _vm.user.id },
                            },
                          },
                        },
                        [
                          _c("i", { staticClass: "fa fa-edit mr-2" }),
                          _vm._v("Edit"),
                        ]
                      ),
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("b-dropdown-item", { attrs: { href: "#" } }, [
                    _c(
                      "a",
                      {
                        attrs: { href: "javascript:void(0)" },
                        on: {
                          click: function ($event) {
                            return _vm.deleteUser(_vm.user.id)
                          },
                        },
                      },
                      [
                        _c("span", { staticClass: "drop-button" }, [
                          _c("i", { staticClass: "fa fa-trash-alt mr-2" }),
                          _vm._v("Delete"),
                        ]),
                      ]
                    ),
                  ]),
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "img-block mb-2" }, [
                _vm.user.avatar
                  ? _c("img", {
                      staticClass: "card-img-top",
                      attrs: {
                        src: _vm.user.avatar,
                        alt: "avatar",
                        width: "100px",
                        height: "120px",
                      },
                    })
                  : _c("img", {
                      staticClass: "card-img-top",
                      attrs: {
                        src: "/images/default_user_avatar.png",
                        alt: "avatar",
                        width: "100px",
                        height: "120px",
                      },
                    }),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-title mb-2" }, [
                _vm._v(
                  "\n                " +
                    _vm._s(_vm.user.first_name) +
                    " " +
                    _vm._s(_vm.user.second_name) +
                    "\n            "
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "card-qualification mb-4" }, [
                _vm._v(
                  "\n                " +
                    _vm._s(
                      _vm.user.qualification
                        ? _vm.user.qualification
                        : "unbekannt"
                    ) +
                    "\n            "
                ),
              ]),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "d-flex justify-content-start" },
                [
                  _c("b-col", { attrs: { cols: "2" } }, [
                    _c("i", {
                      staticClass: "pull-left fa fa-envelope primary",
                    }),
                  ]),
                  _vm._v(" "),
                  _c(
                    "b-col",
                    { staticClass: "card-email mb-2", attrs: { cols: "10" } },
                    [
                      _vm._v(
                        "\n                    " +
                          _vm._s(_vm.user.email) +
                          "\n                "
                      ),
                    ]
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
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);