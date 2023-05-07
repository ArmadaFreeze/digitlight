(self["webpackChunk"] = self["webpackChunk"] || []).push([["js/app"],{

/***/ "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$":
/*!****************************************************************************************************************!*\
  !*** ./assets/controllers/ sync ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \.[jt]sx?$ ***!
  \****************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./hello_controller.js": "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$";

/***/ }),

/***/ "./assets/react/controllers sync recursive \\.(j%7Ct)sx?$":
/*!******************************************************!*\
  !*** ./assets/react/controllers/ sync \.(j%7Ct)sx?$ ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./accueil.jsx": "./assets/react/controllers/accueil.jsx",
	"./login.jsx": "./assets/react/controllers/login.jsx",
	"./materiel/desktop.jsx": "./assets/react/controllers/materiel/desktop.jsx",
	"./materiel/materiel_details.jsx": "./assets/react/controllers/materiel/materiel_details.jsx",
	"./materiel/reseau.jsx": "./assets/react/controllers/materiel/reseau.jsx",
	"./materiel/reunion.jsx": "./assets/react/controllers/materiel/reunion.jsx",
	"./materiel/telephonique.jsx": "./assets/react/controllers/materiel/telephonique.jsx"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./assets/react/controllers sync recursive \\.(j%7Ct)sx?$";

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json":
/*!************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/dist/webpack/loader.js!./assets/controllers.json ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  'symfony--ux-react--react': Promise.resolve(/*! import() eager */).then(__webpack_require__.bind(__webpack_require__, /*! @symfony/ux-react/dist/render_controller.js */ "./vendor/symfony/ux-react/assets/dist/render_controller.js")),
});

/***/ }),

/***/ "./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js!./assets/controllers/hello_controller.js ***!
  \******************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }


/*
 * This is an example Stimulus controller!
 *
 * Any element with a data-controller="hello" attribute will cause
 * this controller to be executed. The name "hello" comes from the filename:
 * hello_controller.js -> "hello"
 *
 * Delete this file or adapt it for your use!
 */
var _default = /*#__PURE__*/function (_Controller) {
  _inherits(_default, _Controller);
  var _super = _createSuper(_default);
  function _default() {
    _classCallCheck(this, _default);
    return _super.apply(this, arguments);
  }
  _createClass(_default, [{
    key: "connect",
    value: function connect() {
      this.element.textContent = 'Hello Stimulus! Edit me in assets/controllers/hello_controller.js';
    }
  }]);
  return _default;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_19__.Controller);


/***/ }),

/***/ "./assets/components/copyright.jsx":
/*!*****************************************!*\
  !*** ./assets/components/copyright.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ footer)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function footer() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("div", {
    style: {
      fontWeight: "bold",
      textDecoration: "none",
      display: "flex",
      height: "70px",
      opacity: "0.5",
      color: "#000000",
      transition: "background-color 1s ease 0s",
      fontFamily: "system-ui",
      fontSize: "x-small",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#ffffff75"
    }
  }, " DigitLight \xA9 ", new Date().getFullYear(), ". Tous droits r\xE9serv\xE9s.");
}

/***/ }),

/***/ "./assets/components/header.jsx":
/*!**************************************!*\
  !*** ./assets/components/header.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ header)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_all_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace-all.js */ "./node_modules/core-js/modules/es.string.replace-all.js");
/* harmony import */ var core_js_modules_es_string_replace_all_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_all_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/Link */ "./node_modules/@mui/material/Link/Link.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _modal_ajout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modal_ajout */ "./assets/components/modal_ajout.jsx");









function capitalizeWords(str) {
  return str.toLowerCase().split(' ').map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ').normalize("NFD").replace(/[\u0300-\u036f]/g, "").replaceAll('-', " ").toLowerCase();
}
;
function header(_ref) {
  var title = _ref.title,
    item = _ref.item;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement((react__WEBPACK_IMPORTED_MODULE_6___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("header", {
    className: "panelHeader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("ul", {
    className: "breadcrumb"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_8__["default"], {
    href: "/accueil"
  }, "Accueil")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_8__["default"], {
    href: "/accueil"
  }, "Materiel")), item.length <= 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("li", null, title) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_8__["default"], {
    href: "/materiel/".concat(capitalizeWords(title))
  }, title)), item.length > 0 ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement("span", null, capitalizeWords(item).charAt(0).toUpperCase() + capitalizeWords(item.slice(1)))) : null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default().createElement(_modal_ajout__WEBPACK_IMPORTED_MODULE_7__["default"], null)));
}

/***/ }),

/***/ "./assets/components/itemStats.jsx":
/*!*****************************************!*\
  !*** ./assets/components/itemStats.jsx ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ itemStats)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/FormControl */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @mui/material/Select */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/InputLabel */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @mui/material/MenuItem */ "./node_modules/@mui/material/MenuItem/MenuItem.js");









var total = function total(page, Filter, ITEMS, CAT) {
  if (page == null || page == '') {
    if (Filter == 0) {
      {
        return ITEMS.filter(function (item) {
          return item;
        }).length;
      }
    }
    {
      return ITEMS.filter(function (item) {
        return item.category == Filter;
      }).length;
    }
  } else {
    {
      return ITEMS.filter(function (item) {
        return item.category == CAT.filter(function (cat) {
          return cat.name === page;
        }).map(function (cat) {
          return cat.id;
        });
      }).length;
    }
  }
};
var available = function available(page, Filter, ITEMS, CAT) {
  if (page == null || page == '') {
    if (Filter == 0) {
      return ITEMS.filter(function (item) {
        return item.available;
      }).map(function (item) {
        return item;
      }).length;
    }
    return ITEMS.filter(function (item) {
      return item.category == Filter && item.available;
    }).map(function (item) {
      return item;
    }).length;
  } else {
    {
      return ITEMS.filter(function (item) {
        return item.category == CAT.filter(function (cat) {
          return cat.name === page;
        }).map(function (cat) {
          return cat.id;
        });
      }).filter(function (item) {
        return item.available;
      }).length;
    }
  }
};
var unavailable = function unavailable(page, Filter, ITEMS, CAT) {
  if (page == null || page == '') {
    if (Filter == 0) {
      return ITEMS.filter(function (item) {
        return !item.available;
      }).map(function (item) {
        return item;
      }).length;
    }
    return ITEMS.filter(function (item) {
      return item.category == Filter && !item.available;
    }).map(function (item) {
      return item;
    }).length;
  } else {
    {
      return ITEMS.filter(function (item) {
        return item.category == CAT.filter(function (cat) {
          return cat.name === page;
        }).map(function (cat) {
          return cat.id;
        });
      }).filter(function (item) {
        return item.unavailable;
      }).length;
    }
  }
};
function itemStats(_ref) {
  var Category = _ref.Category,
    Filter = _ref.Filter,
    onCatChange = _ref.onCatChange,
    ITEMS = _ref.ITEMS,
    CAT = _ref.CAT;
  function handleChange(e) {
    onCatChange(e.target.value);
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "statsItems"
  }, Category == null || Category == '' ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", null, "Filtre:"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      width: '187px',
      height: '45px',
      bottom: '11px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
    id: "demo-simple-select-label"
  }, "Cat\xE9gorie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_mui_material_Select__WEBPACK_IMPORTED_MODULE_7__["default"], {
    onChange: handleChange,
    value: Filter,
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    label: "Cat\xE9gorie"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    value: "0"
  }, "Tous"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    value: "1"
  }, "R\xE9seau"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    value: "2"
  }, "T\xE9l\xE9phonique"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    value: "3"
  }, "Desktop"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
    value: "4"
  }, "R\xE9union")))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement((react__WEBPACK_IMPORTED_MODULE_4___default().Fragment), null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("div", {
    className: "statsItemsInfo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", null, "Total: ", total(Category, Filter, ITEMS, CAT)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", null, "Disponible: ", available(Category, Filter, ITEMS, CAT)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default().createElement("span", null, "Indisponible: ", unavailable(Category, Filter, ITEMS, CAT)))));
}

/***/ }),

/***/ "./assets/components/loading.jsx":
/*!***************************************!*\
  !*** ./assets/components/loading.jsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ loadingComp)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-loader-spinner */ "./node_modules/react-loader-spinner/dist/esm/index.js");


function loadingComp() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    id: "loading",
    style: {
      position: 'absolute',
      top: '0',
      bottom: '0',
      left: '0',
      right: '0',
      margin: 'auto',
      width: '100px',
      height: '100px'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_loader_spinner__WEBPACK_IMPORTED_MODULE_1__.Rings, {
    height: "100",
    width: "100",
    color: "var(--defaut-header-color)",
    secondaryColor: "black",
    radius: "12.5",
    ariaLabel: "mutating-dots-loading",
    wrapperStyle: {},
    wrapperClass: "",
    visible: true
  }));
}

/***/ }),

/***/ "./assets/components/materiel.jsx":
/*!****************************************!*\
  !*** ./assets/components/materiel.jsx ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Item)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @mui/material/Link */ "./node_modules/@mui/material/Link/Link.js");
/* harmony import */ var _modal_suppression__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modal_suppression */ "./assets/components/modal_suppression.jsx");
/* harmony import */ var _modal_edit__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modal_edit */ "./assets/components/modal_edit.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_9__);











function Item(_ref) {
  var item = _ref.item,
    ITEMS = _ref.ITEMS,
    setItem = _ref.setItem,
    cat = _ref.cat;
  function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", {
    className: "panelItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", {
    id: "entry-pic",
    className: "panelImage"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_10__["default"], {
    href: item.href
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("img", {
    src: item.img,
    alt: item.alt,
    style: {
      objectFit: "cover"
    },
    width: 500,
    height: 500
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", {
    className: "itemInfo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", {
    className: "itemInfoTitle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("span", null, "Nom du produit : "), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("span", null, item.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", {
    className: "itemInfoTitle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_10__["default"], {
    href: "/materiel/".concat(removeAccents(cat.toString()))
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("span", null, "Cat\xE9gorie : ", cat))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", {
    className: "itemInfoTitle"
  }, item.available ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("span", null, "Statut : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("span", {
    style: {
      color: "darkgreen"
    }
  }, "Disponible")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("span", null, "Statut : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("span", {
    style: {
      color: "red"
    }
  }, "R\xE9serv\xE9")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement("div", {
    className: "modalButton"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_modal_edit__WEBPACK_IMPORTED_MODULE_8__["default"], {
    Item: item,
    ITEMS: ITEMS,
    setItem: setItem
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_9___default().createElement(_modal_suppression__WEBPACK_IMPORTED_MODULE_7__["default"], {
    Item: item,
    ITEMS: ITEMS,
    setItem: setItem
  })));
}

/***/ }),

/***/ "./assets/components/materiel_details.jsx":
/*!************************************************!*\
  !*** ./assets/components/materiel_details.jsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Item)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material/Link */ "./node_modules/@mui/material/Link/Link.js");
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);






function Item(_ref) {
  var item = _ref.item,
    cat = _ref.cat;
  function zoom(e) {
    var zoomer = e.currentTarget;
    var offsetX;
    var offsetY;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.pageX;
    e.offsetY ? offsetY = e.offsetY : offsetY = e.pageY;
    var x = offsetX / zoomer.offsetWidth * 50;
    var y = offsetY / zoomer.offsetHeight * 80;
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "panelInfoItem"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "panelImage"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("figure", {
    className: "zoom",
    onMouseMove: zoom,
    style: {
      backgroundImage: "url(".concat(item.img, ")")
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("img", {
    src: item.img,
    alt: item.alt,
    style: {
      objectFit: "cover"
    },
    width: 500,
    height: 500
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "itemInfo"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "itemInfoTitle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h1", null, item.name)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "itemInfoCat"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_4__["default"], {
    href: "/materiel/".concat(cat)
  }, "Cat\xE9gorie : ", cat)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "itemInfoAvailable"
  }, item.available ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "Statut : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", {
    style: {
      color: "darkgreen"
    }
  }, "Disponible")) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, "Statut : ", /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", {
    style: {
      color: "red"
    }
  }, "R\xE9serv\xE9"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "itemInfoEmpl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", null, "Emplacement : ", item.emplacement, " N\xBA ", item.id)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "itemInfoDesc"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h3", null, "Description : "), " ", item.description)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "itemInfoCar"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("span", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("h3", null, "Caract\xE9ristiques : "), " ", item.caracteristiques)), item.available ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "agendaGoogle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("iframe", {
    src: "https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23ffffff&ctz=Europe%2FParis&showDate=1&showNav=1&showTitle=0&showPrint=1&showTabs=1&showCalendars=0&src=MjNhZTVhOGFiZWFkNmNiZmUyNWQxMjJjYjMyZmM3YjZkMzllYWY0ODZkYmMwOTc2MGZmMWI4YWQ4N2U5ZGFiYUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23616161",
    style: {
      border: 0
    }
  })) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "boutonReserver"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "btnReserver",
    size: "large",
    sx: {
      borderColor: "white",
      color: "white"
    },
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("div", {
    className: "textReserver"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default().createElement("p", null, "RESERVER CE MATERIEL"))))));
}

/***/ }),

/***/ "./assets/components/modal_ajout.jsx":
/*!*******************************************!*\
  !*** ./assets/components/modal_ajout.jsx ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ modal)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @mui/material/Select */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @mui/material/Modal */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @mui/material/IconButton */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @mui/material/InputLabel */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! @mui/material/MenuItem */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_icons_material_AddBox__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @mui/icons-material/AddBox */ "./node_modules/@mui/icons-material/AddBox.js");
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @mui/material/FormControl */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var _constants_data_json__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../constants/data.json */ "./assets/constants/data.json");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @mui/material/Alert */ "./node_modules/@mui/material/Alert/Alert.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }








































function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
















function modal(_ref) {
  var Items = _ref.Items,
    setItem = _ref.setItem;
  //ALERT MESSAGE
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_40__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    alertOpen = _useState2[0],
    setAlertOpen = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_40__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    alertMessage = _useState4[0],
    setAlertMessage = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_40__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    AlertInfo = _useState6[0],
    setAlertInfo = _useState6[1];
  var sleep = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(milliseconds) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return new Promise(function (resolve) {
              return setTimeout(resolve, milliseconds);
            });
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function sleep(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  function removeAccents(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  }
  function replaceSpacesWithDashes(str) {
    return str.replace(/\s+/g, '-');
  }
  var AlertSleep = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var i;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            i = 0;
          case 1:
            if (!(i < 4)) {
              _context2.next = 7;
              break;
            }
            _context2.next = 4;
            return sleep(1000);
          case 4:
            i++;
            _context2.next = 1;
            break;
          case 7:
            setAlertOpen(false);
            return _context2.abrupt("return");
          case 9:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function AlertSleep() {
      return _ref3.apply(this, arguments);
    };
  }();
  var CATEGORIES = _constants_data_json__WEBPACK_IMPORTED_MODULE_41__.categories;
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_40__.useState)({
      name: "",
      category: 1,
      emplacement: "",
      description: "",
      caracteristiques: "",
      img: ""
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    value = _useState8[0],
    setValue = _useState8[1];
  var handleClick = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var newState;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!(alertOpen == true)) {
              _context3.next = 2;
              break;
            }
            return _context3.abrupt("return");
          case 2:
            if (!(value.name == "" || value.category == "" || value.emplacement == "" || value.description == "" || value.caracteristiques == "" || value.img == "")) {
              _context3.next = 9;
              break;
            }
            setAlertOpen(false);
            setAlertOpen(true);
            setAlertInfo('error');
            setAlertMessage("Veuillez remplir tous les champs");
            AlertSleep();
            return _context3.abrupt("return");
          case 9:
            try {
              newState = {
                id: Items[Items.length - 1].id + 1,
                name: value.name,
                alt: value.name,
                category: value.category,
                emplacement: value.emplacement,
                description: value.description,
                caracteristiques: value.caracteristiques,
                img: value.img,
                href: "/materiel/" + removeAccents(CATEGORIES.filter(function (cat) {
                  return cat.id == value.category;
                }).map(function (cat) {
                  return cat.name;
                })[0]) + "/" + replaceSpacesWithDashes(value.name),
                available: true
              };
              setItem(function (Items) {
                return [].concat(_toConsumableArray(Items), [newState]);
              });
              handleClose();
              setAlertOpen(false);
              setAlertOpen(true);
              setAlertInfo('success');
              setAlertMessage("Le matériel a été ajouté avec succès");
              AlertSleep();
            } catch (error) {
              console.error(error);
            }
          case 10:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function handleClick() {
      return _ref4.apply(this, arguments);
    };
  }();
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_40__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    open = _useState10[0],
    setOpen = _useState10[1];
  var handleOpen = function handleOpen() {
    setOpen(true);
  };
  var handleClose = function handleClose() {
    setOpen(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement((react__WEBPACK_IMPORTED_MODULE_40___default().Fragment), null, alertOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_42__["default"], {
    className: "alertPopUp",
    style: {
      zIndex: '9999',
      width: "1",
      height: "100%"
    },
    severity: AlertInfo,
    color: AlertInfo
  }, alertMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_43__["default"], {
    id: "tooltip",
    title: "Ajouter"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_44__["default"], {
    style: {
      display: 'flex',
      position: 'relative',
      margin: '0.5rem 0px',
      alignItems: 'center',
      width: 'auto',
      justifyContent: 'flex-end'
    },
    onClick: handleOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement(_mui_icons_material_AddBox__WEBPACK_IMPORTED_MODULE_45__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement(_mui_material_Modal__WEBPACK_IMPORTED_MODULE_46__["default"], {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_47__["default"], {
    className: "modal01"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_44__["default"], {
    className: "modal01Button",
    onClick: handleClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_48__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_49__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_50__["default"], {
    className: "modalElement",
    value: value.name,
    onChange: function onChange(e) {
      setValue(_objectSpread(_objectSpread({}, value), {}, {
        name: e.target.value
      }));
    },
    margin: "dense",
    id: "Produit",
    color: "primary",
    label: "Nom du produit",
    variant: "standard"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_50__["default"], {
    className: "modalElement",
    value: value.description,
    onChange: function onChange(e) {
      setValue(_objectSpread(_objectSpread({}, value), {}, {
        description: e.target.value
      }));
    },
    margin: "dense",
    id: "Description",
    color: "primary",
    label: "Description du produit",
    variant: "standard"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_50__["default"], {
    className: "modalElement",
    value: value.caracteristiques,
    onChange: function onChange(e) {
      setValue(_objectSpread(_objectSpread({}, value), {}, {
        caracteristiques: e.target.value
      }));
    },
    margin: "dense",
    id: "Caract\xE9ristique",
    color: "primary",
    label: "Caract\xE9ristique du produit",
    variant: "standard"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_50__["default"], {
    className: "modalElement",
    value: value.img,
    onChange: function onChange(e) {
      setValue(_objectSpread(_objectSpread({}, value), {}, {
        img: e.target.value
      }));
    },
    margin: "dense",
    id: "Image",
    color: "primary",
    label: "Image du produit",
    variant: "standard"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_51__["default"], {
    className: "modalElement"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_52__["default"], {
    id: "demo-simple-select-label"
  }, "Emplacement"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement(_mui_material_Select__WEBPACK_IMPORTED_MODULE_53__["default"], {
    defaultValue: "",
    onChange: function onChange(e) {
      setValue(_objectSpread(_objectSpread({}, value), {}, {
        emplacement: e.target.value
      }));
    },
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    label: "Salle de stockage 1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_54__["default"], {
    value: "Salle de stockage 1"
  }, "Salle de stockage 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_54__["default"], {
    value: "Salle de stockage 2"
  }, "Salle de stockage 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_54__["default"], {
    value: "Salle de stockage 3"
  }, "Salle de stockage 3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_54__["default"], {
    value: "Salle de stockage 4"
  }, "Salle de stockage 4"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_51__["default"], {
    className: "modalElement"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_52__["default"], {
    id: "demo-simple-select-label"
  }, "Cat\xE9gorie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement(_mui_material_Select__WEBPACK_IMPORTED_MODULE_53__["default"], {
    defaultValue: "",
    onChange: function onChange(e) {
      setValue(_objectSpread(_objectSpread({}, value), {}, {
        category: e.target.value
      }));
    },
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    label: "r\xE9seau"
  }, CATEGORIES.map(function (category) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_54__["default"], {
      key: category.id,
      value: category.id
    }, category.name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_40___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_55__["default"], {
    className: "modalElement",
    onClick: handleClick,
    size: "large",
    variant: "outlined"
  }, "Ajouter")))));
}

/***/ }),

/***/ "./assets/components/modal_edit.jsx":
/*!******************************************!*\
  !*** ./assets/components/modal_edit.jsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ modal)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptor.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptor.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptor_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.object.get-own-property-descriptors.js */ "./node_modules/core-js/modules/es.object.get-own-property-descriptors.js");
/* harmony import */ var core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_own_property_descriptors_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.object.define-properties.js */ "./node_modules/core-js/modules/es.object.define-properties.js");
/* harmony import */ var core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_properties_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/TextField.js");
/* harmony import */ var _mui_material_Select__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! @mui/material/Select */ "./node_modules/@mui/material/Select/Select.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! @mui/material/Modal */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @mui/material/IconButton */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! @mui/material/InputLabel */ "./node_modules/@mui/material/InputLabel/InputLabel.js");
/* harmony import */ var _mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! @mui/material/MenuItem */ "./node_modules/@mui/material/MenuItem/MenuItem.js");
/* harmony import */ var _mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @mui/icons-material/Edit */ "./node_modules/@mui/icons-material/Edit.js");
/* harmony import */ var _mui_material_FormControl__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! @mui/material/FormControl */ "./node_modules/@mui/material/FormControl/FormControl.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var _constants_data_json__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ../constants/data.json */ "./assets/constants/data.json");
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @mui/material/Alert */ "./node_modules/@mui/material/Alert/Alert.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }






































function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
















function modal(_ref) {
  var Item = _ref.Item,
    ITEMS = _ref.ITEMS,
    setItem = _ref.setItem;
  //ALERT MESSAGE
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_38__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    alertOpen = _useState2[0],
    setAlertOpen = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_38__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    alertMessage = _useState4[0],
    setAlertMessage = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_38__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    AlertInfo = _useState6[0],
    setAlertInfo = _useState6[1];
  var sleep = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(milliseconds) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return new Promise(function (resolve) {
              return setTimeout(resolve, milliseconds);
            });
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function sleep(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  var AlertSleep = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var i;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            i = 0;
          case 1:
            if (!(i < 4)) {
              _context2.next = 7;
              break;
            }
            _context2.next = 4;
            return sleep(1000);
          case 4:
            i++;
            _context2.next = 1;
            break;
          case 7:
            setAlertOpen(false);
            return _context2.abrupt("return");
          case 9:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function AlertSleep() {
      return _ref3.apply(this, arguments);
    };
  }();
  var CATEGORIES = _constants_data_json__WEBPACK_IMPORTED_MODULE_39__.categories;
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_38__.useState)({
      name: Item.name,
      category: Item.category,
      emplacement: Item.emplacement,
      description: Item.description,
      caracteristiques: Item.caracteristiques,
      img: Item.img
    }),
    _useState8 = _slicedToArray(_useState7, 2),
    value = _useState8[0],
    setValue = _useState8[1];
  var handleClick = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      var newState;
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            if (!(alertOpen == true)) {
              _context3.next = 2;
              break;
            }
            return _context3.abrupt("return");
          case 2:
            if (!(value.name == "" || value.category == "" || value.emplacement == "" || value.description == "" || value.caracteristiques == "" || value.img == "")) {
              _context3.next = 9;
              break;
            }
            setAlertOpen(false);
            setAlertOpen(true);
            setAlertInfo('error');
            setAlertMessage("Veuillez remplir tous les champs");
            AlertSleep();
            return _context3.abrupt("return");
          case 9:
            try {
              newState = ITEMS.map(function (obj) {
                if (obj.id === Item.id) {
                  return _objectSpread(_objectSpread({}, obj), {}, {
                    name: value.name,
                    category: value.category,
                    emplacement: value.emplacement,
                    description: value.description,
                    caracteristiques: value.caracteristiques,
                    img: value.img
                  });
                }
                return obj;
              });
              setItem(newState);
              handleClose();
              setAlertOpen(false);
              setAlertOpen(true);
              setAlertInfo('success');
              setAlertMessage("Le matériel a été modifié avec succès");
              AlertSleep();
            } catch (error) {
              console.error(error);
            }
          case 10:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }));
    return function handleClick() {
      return _ref4.apply(this, arguments);
    };
  }();
  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_38__.useState)(false),
    _useState10 = _slicedToArray(_useState9, 2),
    open = _useState10[0],
    setOpen = _useState10[1];
  var handleOpen = function handleOpen() {
    setOpen(true);
  };
  var handleClose = function handleClose() {
    setOpen(false);
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement((react__WEBPACK_IMPORTED_MODULE_38___default().Fragment), null, alertOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_40__["default"], {
    className: "alertPopUp",
    style: {
      zIndex: '9999',
      width: "1",
      height: "100%"
    },
    severity: AlertInfo,
    color: AlertInfo
  }, alertMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_41__["default"], {
    id: "tooltip",
    title: "Editer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_42__["default"], {
    style: {
      display: 'flex',
      position: 'relative',
      margin: '0.5rem 0px',
      alignItems: 'center',
      width: 'auto',
      justifyContent: 'flex-end'
    },
    onClick: handleOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_mui_icons_material_Edit__WEBPACK_IMPORTED_MODULE_43__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_mui_material_Modal__WEBPACK_IMPORTED_MODULE_44__["default"], {
    className: "Modal",
    open: open,
    onClose: handleClose,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_45__["default"], {
    className: "modal01"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_42__["default"], {
    className: "modal01Button",
    onClick: handleClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_46__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_47__["default"], {
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_48__["default"], {
    className: "modalElement",
    value: value.name,
    onChange: function onChange(e) {
      setValue(_objectSpread(_objectSpread({}, value), {}, {
        name: e.target.value
      }));
    },
    margin: "dense",
    id: "Produit",
    color: "primary",
    label: "Nom du produit",
    variant: "standard"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_48__["default"], {
    className: "modalElement",
    value: value.description,
    onChange: function onChange(e) {
      setValue(_objectSpread(_objectSpread({}, value), {}, {
        description: e.target.value
      }));
    },
    margin: "dense",
    id: "Description",
    color: "primary",
    label: "Description du produit",
    variant: "standard"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_48__["default"], {
    className: "modalElement",
    value: value.caracteristiques,
    onChange: function onChange(e) {
      setValue(_objectSpread(_objectSpread({}, value), {}, {
        caracteristiques: e.target.value
      }));
    },
    margin: "dense",
    id: "Caract\xE9ristique",
    color: "primary",
    label: "Caract\xE9ristique du produit",
    variant: "standard"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_48__["default"], {
    className: "modalElement",
    value: value.img,
    onChange: function onChange(e) {
      setValue(_objectSpread(_objectSpread({}, value), {}, {
        img: e.target.value
      }));
    },
    margin: "dense",
    id: "Image",
    color: "primary",
    label: "Image du produit",
    variant: "standard"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_49__["default"], {
    className: "modalElement"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_50__["default"], {
    id: "demo-simple-select-label"
  }, "Emplacement"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_mui_material_Select__WEBPACK_IMPORTED_MODULE_51__["default"], {
    value: value.emplacement,
    onChange: function onChange(e) {
      setValue(_objectSpread(_objectSpread({}, value), {}, {
        emplacement: e.target.value
      }));
    },
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    label: "Salle de stockage 1"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_52__["default"], {
    value: "Salle de stockage 1"
  }, "Salle de stockage 1"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_52__["default"], {
    value: "Salle de stockage 2"
  }, "Salle de stockage 2"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_52__["default"], {
    value: "Salle de stockage 3"
  }, "Salle de stockage 3"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_52__["default"], {
    value: "Salle de stockage 4"
  }, "Salle de stockage 4"))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_mui_material_FormControl__WEBPACK_IMPORTED_MODULE_49__["default"], {
    className: "modalElement"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_mui_material_InputLabel__WEBPACK_IMPORTED_MODULE_50__["default"], {
    id: "demo-simple-select-label"
  }, "Cat\xE9gorie"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_mui_material_Select__WEBPACK_IMPORTED_MODULE_51__["default"], {
    value: value.category,
    onChange: function onChange(e) {
      setValue(_objectSpread(_objectSpread({}, value), {}, {
        category: e.target.value
      }));
    },
    labelId: "demo-simple-select-label",
    id: "demo-simple-select",
    label: "r\xE9seau"
  }, CATEGORIES.map(function (category) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_mui_material_MenuItem__WEBPACK_IMPORTED_MODULE_52__["default"], {
      key: category.id,
      value: category.id
    }, category.name);
  }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_38___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_53__["default"], {
    className: "modalElement",
    onClick: handleClick,
    size: "large",
    variant: "outlined"
  }, "\xC9diter")))));
}

/***/ }),

/***/ "./assets/components/modal_suppression.jsx":
/*!*************************************************!*\
  !*** ./assets/components/modal_suppression.jsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ modal)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.symbol.async-iterator.js */ "./node_modules/core-js/modules/es.symbol.async-iterator.js");
/* harmony import */ var core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_async_iterator_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.symbol.to-string-tag.js */ "./node_modules/core-js/modules/es.symbol.to-string-tag.js");
/* harmony import */ var core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_string_tag_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.json.to-string-tag.js */ "./node_modules/core-js/modules/es.json.to-string-tag.js");
/* harmony import */ var core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_to_string_tag_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.math.to-string-tag.js */ "./node_modules/core-js/modules/es.math.to-string-tag.js");
/* harmony import */ var core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_math_to_string_tag_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.array.reverse.js */ "./node_modules/core-js/modules/es.array.reverse.js");
/* harmony import */ var core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_reverse_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material_Box__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @mui/material/Box */ "./node_modules/@mui/material/Box/Box.js");
/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @mui/material/Typography */ "./node_modules/@mui/material/Typography/Typography.js");
/* harmony import */ var _mui_material_Modal__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @mui/material/Modal */ "./node_modules/@mui/material/Modal/Modal.js");
/* harmony import */ var _mui_material_IconButton__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @mui/material/IconButton */ "./node_modules/@mui/material/IconButton/IconButton.js");
/* harmony import */ var _mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @mui/icons-material/Close */ "./node_modules/@mui/icons-material/Close.js");
/* harmony import */ var _mui_icons_material_HighlightOff__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @mui/icons-material/HighlightOff */ "./node_modules/@mui/icons-material/HighlightOff.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var _mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @mui/material/Tooltip */ "./node_modules/@mui/material/Tooltip/Tooltip.js");
/* harmony import */ var _mui_material_Alert__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @mui/material/Alert */ "./node_modules/@mui/material/Alert/Alert.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) keys.push(key); return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }






























function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }
function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










function modal(_ref) {
  var Item = _ref.Item,
    ITEMS = _ref.ITEMS,
    setItem = _ref.setItem;
  //ALERT MESSAGE
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_30__.useState)(false),
    _useState2 = _slicedToArray(_useState, 2),
    alertOpen = _useState2[0],
    setAlertOpen = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_30__.useState)(''),
    _useState4 = _slicedToArray(_useState3, 2),
    alertMessage = _useState4[0],
    setAlertMessage = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_30__.useState)(''),
    _useState6 = _slicedToArray(_useState5, 2),
    AlertInfo = _useState6[0],
    setAlertInfo = _useState6[1];
  var sleep = /*#__PURE__*/function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee(milliseconds) {
      return _regeneratorRuntime().wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return new Promise(function (resolve) {
              return setTimeout(resolve, milliseconds);
            });
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    return function sleep(_x2) {
      return _ref2.apply(this, arguments);
    };
  }();
  var AlertSleep = /*#__PURE__*/function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
      var i;
      return _regeneratorRuntime().wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            i = 0;
          case 1:
            if (!(i < 4)) {
              _context2.next = 8;
              break;
            }
            _context2.next = 4;
            return sleep(1000);
          case 4:
            deleteById(Item.id);
          case 5:
            i++;
            _context2.next = 1;
            break;
          case 8:
            setAlertOpen(false);
            return _context2.abrupt("return");
          case 10:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    return function AlertSleep() {
      return _ref3.apply(this, arguments);
    };
  }();
  var deleteById = function deleteById(id) {
    setItem(ITEMS.filter(function (Item) {
      return Item.id !== id;
    }));
  };
  var handleClick = /*#__PURE__*/function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
      return _regeneratorRuntime().wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.prev = 0;
            if (!(alertOpen == true)) {
              _context3.next = 3;
              break;
            }
            return _context3.abrupt("return");
          case 3:
            handleClose();
            _context3.next = 9;
            break;
          case 6:
            _context3.prev = 6;
            _context3.t0 = _context3["catch"](0);
            console.error(_context3.t0);
          case 9:
          case "end":
            return _context3.stop();
        }
      }, _callee3, null, [[0, 6]]);
    }));
    return function handleClick() {
      return _ref4.apply(this, arguments);
    };
  }();
  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_30__.useState)(false),
    _useState8 = _slicedToArray(_useState7, 2),
    open = _useState8[0],
    setOpen = _useState8[1];
  var handleOpen = function handleOpen() {
    setOpen(true);
  };
  var handleClose = function handleClose() {
    setOpen(false);
    setAlertOpen(false);
    setAlertOpen(true);
    setAlertInfo('info');
    setAlertMessage("Suprression du matériel en cours...");
    AlertSleep();
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement((react__WEBPACK_IMPORTED_MODULE_30___default().Fragment), null, alertOpen && /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement(_mui_material_Alert__WEBPACK_IMPORTED_MODULE_31__["default"], {
    className: "alertPopUp",
    style: {
      zIndex: '9999',
      width: "1",
      height: "100%"
    },
    severity: AlertInfo,
    color: AlertInfo
  }, alertMessage), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement(_mui_material_Tooltip__WEBPACK_IMPORTED_MODULE_32__["default"], {
    id: "tooltip",
    title: "Supprimer"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_33__["default"], {
    style: {
      display: 'flex',
      position: 'relative',
      margin: '0.5rem 0px',
      alignItems: 'center',
      width: 'auto',
      justifyContent: 'flex-end'
    },
    onClick: handleOpen
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement(_mui_icons_material_HighlightOff__WEBPACK_IMPORTED_MODULE_34__["default"], null))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement(_mui_material_Modal__WEBPACK_IMPORTED_MODULE_35__["default"], {
    open: open,
    onClose: handleClose,
    "aria-labelledby": "modal-modal-title",
    "aria-describedby": "modal-modal-description"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement(_mui_material_Box__WEBPACK_IMPORTED_MODULE_36__["default"], {
    className: "modal01"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement(_mui_material_IconButton__WEBPACK_IMPORTED_MODULE_33__["default"], {
    className: "modal01Button",
    onClick: handleClose
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement(_mui_icons_material_Close__WEBPACK_IMPORTED_MODULE_37__["default"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_38__["default"], {
    className: "modalElement",
    id: "modal-modal-title",
    variant: "h6",
    component: "h2"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement("p", {
    style: {
      textAlign: 'center',
      padding: '14px'
    }
  }, "Voulez-vous supprimer ", Item.name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_30___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_39__["default"], {
    className: "modalElement",
    onClick: handleClick,
    size: "large",
    variant: "outlined"
  }, "Supprimer")))));
}

/***/ }),

/***/ "./assets/components/navbar.jsx":
/*!**************************************!*\
  !*** ./assets/components/navbar.jsx ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ navbar)
/* harmony export */ });
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/Link */ "./node_modules/@mui/material/Link/Link.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);



function navbar() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "leftNav"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    id: "bgImg",
    src: "/build/images/digitlight.svg",
    alt: "digilight picture",
    width: 500,
    height: 500
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "/accueil"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "btn",
    size: "large",
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "imgText"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/build/images/navbar/material.png",
    alt: "material picture",
    width: 500,
    height: 500
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Mat\xE9riel")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "subPanelMateriel"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "/materiel/reseau"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "subBtn",
    size: "large",
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "imgText"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/build/images/navbar/reseau.png",
    alt: "reseau picture",
    width: 500,
    height: 500
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "R\xE9seau")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "/materiel/telephonique"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "subBtn",
    size: "large",
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "imgText"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/build/images/navbar/telephone.png",
    alt: "telephone picture",
    width: 500,
    height: 500
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "T\xE9l\xE9phonique")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "/materiel/desktop"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "subBtn",
    size: "large",
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "imgText"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/build/images/navbar/desktop.png",
    alt: "desktop picture",
    width: 500,
    height: 500
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "Desktop")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_1__["default"], {
    href: "/materiel/reunion"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "subBtn",
    size: "large",
    variant: "outlined"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "imgText"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/build/images/navbar/reunion.png",
    alt: "reunion picture",
    width: 500,
    height: 500
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("p", null, "R\xE9union"))))));
}

/***/ }),

/***/ "./assets/js/app.js":
/*!**************************!*\
  !*** ./assets/js/app.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/global.css */ "./assets/styles/global.css");
/* harmony import */ var _js_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../js/bootstrap */ "./assets/js/bootstrap.js");
/* harmony import */ var _symfony_ux_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @symfony/ux-react */ "./vendor/symfony/ux-react/assets/dist/register_controller.js");
/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)


// start the Stimulus application


(0,_symfony_ux_react__WEBPACK_IMPORTED_MODULE_2__.registerReactControllerComponents)(__webpack_require__("./assets/react/controllers sync recursive \\.(j%7Ct)sx?$"));

/***/ }),

/***/ "./assets/js/bootstrap.js":
/*!********************************!*\
  !*** ./assets/js/bootstrap.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": () => (/* binding */ app)
/* harmony export */ });
/* harmony import */ var _symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @symfony/stimulus-bridge */ "./node_modules/@symfony/stimulus-bridge/dist/index.js");


// Registers Stimulus controllers from controllers.json and in the controllers/ directory
var app = (0,_symfony_stimulus_bridge__WEBPACK_IMPORTED_MODULE_0__.startStimulusApp)(__webpack_require__("./assets/controllers sync recursive ./node_modules/@symfony/stimulus-bridge/lazy-controller-loader.js! \\.[jt]sx?$"));

// register any custom, 3rd party controllers here
// app.register('some_controller_name', SomeImportedController);

/***/ }),

/***/ "./assets/react/controllers/accueil.jsx":
/*!**********************************************!*\
  !*** ./assets/react/controllers/accueil.jsx ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Accueil)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _mui_material_Link__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/material/Link */ "./node_modules/@mui/material/Link/Link.js");
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../components/navbar */ "./assets/components/navbar.jsx");
/* harmony import */ var _components_copyright__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../components/copyright */ "./assets/components/copyright.jsx");
/* harmony import */ var _components_loading__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../components/loading */ "./assets/components/loading.jsx");
/* harmony import */ var _components_materiel__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../components/materiel */ "./assets/components/materiel.jsx");
/* harmony import */ var _components_itemStats__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../components/itemStats */ "./assets/components/itemStats.jsx");
/* harmony import */ var _constants_data_json__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../constants/data.json */ "./assets/constants/data.json");
/* harmony import */ var _mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @mui/material/Skeleton */ "./node_modules/@mui/material/Skeleton/Skeleton.js");
/* harmony import */ var _components_modal_ajout__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../components/modal_ajout */ "./assets/components/modal_ajout.jsx");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }






























function randomTime(min, max) {
  // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function AllItems(_ref) {
  var page = _ref.page,
    loading = _ref.loading,
    filter = _ref.filter,
    setFilter = _ref.setFilter,
    Items = _ref.Items,
    setItem = _ref.setItem,
    CATEGORIES = _ref.CATEGORIES;
  var SkeletonBreadcrumb = function SkeletonBreadcrumb() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("span", {
      style: {
        height: '4%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_27__["default"], {
      variant: "text",
      width: "30%",
      height: "80%",
      sx: {
        marginLeft: '5%',
        marginTop: '1.5%'
      }
    }));
  };
  var SkeletonItem = function SkeletonItem() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_27__["default"], {
      variant: "rounded",
      width: "45%",
      height: "15%",
      sx: {
        marginLeft: '1%',
        marginTop: '3%'
      }
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement((react__WEBPACK_IMPORTED_MODULE_19___default().Fragment), null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement((react__WEBPACK_IMPORTED_MODULE_19___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(SkeletonBreadcrumb, null), _toConsumableArray(Array(8).keys()).map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(SkeletonItem, {
      key: item
    });
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement((react__WEBPACK_IMPORTED_MODULE_19___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(_components_itemStats__WEBPACK_IMPORTED_MODULE_24__["default"], {
    Category: page,
    Filter: filter,
    onCatChange: function onCatChange(categorie) {
      return setFilter(categorie);
    },
    ITEMS: Items,
    CAT: CATEGORIES
  }), items(page, filter, Items, setItem, CATEGORIES)));
}
var items = function items(Category, filterValue, ITEMS, setItem, CATEGORIES) {
  if (filterValue != 0) {
    return ITEMS.filter(function (item) {
      return item.category == filterValue;
    }).map(function (item) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(_components_materiel__WEBPACK_IMPORTED_MODULE_23__["default"], {
        key: item.id,
        item: item,
        ITEMS: ITEMS,
        setItem: setItem,
        cat: CATEGORIES.filter(function (cat) {
          return cat.id === item.category;
        }).map(function (cat) {
          return cat.name;
        })
      });
    });
  }
  if (Category == null || Category == '' || Category == '0') {
    return ITEMS.filter(function (item) {
      return item.available;
    }).map(function (item) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(_components_materiel__WEBPACK_IMPORTED_MODULE_23__["default"], {
        key: item.id,
        item: item,
        ITEMS: ITEMS,
        setItem: setItem,
        cat: CATEGORIES.filter(function (cat) {
          return cat.id === item.category;
        }).map(function (cat) {
          return cat.name;
        })
      });
    });
  } else {
    return ITEMS.filter(function (item) {
      return CATEGORIES.filter(function (cat) {
        return cat.id === item.category;
      }).map(function (cat) {
        return cat.name;
      }) == Category;
    }).map(function (item) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(_components_materiel__WEBPACK_IMPORTED_MODULE_23__["default"], {
        key: item.id,
        item: item,
        ITEMS: ITEMS,
        cat: CATEGORIES.filter(function (cat) {
          return cat.id === item.category;
        }).map(function (cat) {
          return cat.name;
        })
      });
    });
  }
};
function Accueil() {
  var ITEMS = _constants_data_json__WEBPACK_IMPORTED_MODULE_25__.items;
  var CATEGORIES = _constants_data_json__WEBPACK_IMPORTED_MODULE_25__.categories;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)(ITEMS),
    _useState2 = _slicedToArray(_useState, 2),
    Items = _useState2[0],
    setItem = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)(0),
    _useState4 = _slicedToArray(_useState3, 2),
    filter = _useState4[0],
    setFilter = _useState4[1];
  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_19__.useState)(true),
    _useState6 = _slicedToArray(_useState5, 2),
    loading = _useState6[0],
    setLoading = _useState6[1];
  (0,react__WEBPACK_IMPORTED_MODULE_19__.useEffect)(function () {
    setTimeout(function () {
      setLoading(false);
    }, randomTime(800, 1000));
  }, []);
  function removeOpacity() {
    var elem = document.getElementById("main");
    if (elem) {
      elem.style.opacity = 1;
    }
    elem = document.getElementById("loading");
    if (elem) {
      elem.style.opacity = 0;
    }
  }
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement((react__WEBPACK_IMPORTED_MODULE_19___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(_components_loading__WEBPACK_IMPORTED_MODULE_22__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("main", {
    id: "main",
    className: "main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("div", {
    className: "body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("header", {
    className: "panelHeader"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("ul", {
    className: "breadcrumb"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(_mui_material_Link__WEBPACK_IMPORTED_MODULE_28__["default"], {
    href: "/accueil"
  }, "Accueil")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("li", null, "Materiel")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(_components_modal_ajout__WEBPACK_IMPORTED_MODULE_26__["default"], {
    Items: Items,
    setItem: setItem
  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_20__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement("section", {
    className: "container"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(AllItems, {
    page: "",
    loading: loading,
    filter: filter,
    setFilter: setFilter,
    Items: Items,
    setItem: setItem,
    CATEGORIES: CATEGORIES
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement(_components_copyright__WEBPACK_IMPORTED_MODULE_21__["default"], null)))), loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement((react__WEBPACK_IMPORTED_MODULE_19___default().Fragment), null) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_19___default().createElement((react__WEBPACK_IMPORTED_MODULE_19___default().Fragment), null, removeOpacity()));
}

/***/ }),

/***/ "./assets/react/controllers/login.jsx":
/*!********************************************!*\
  !*** ./assets/react/controllers/login.jsx ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Login)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _mui_material_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Button */ "./node_modules/@mui/material/Button/Button.js");
/* harmony import */ var _mui_material_TextField__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material/TextField */ "./node_modules/@mui/material/TextField/TextField.js");



function Login() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("main", {
    className: "main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "panelLeft"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "leftForm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "leftFormControl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("img", {
    src: "/build/images/digitlight.svg",
    alt: "DigitLight",
    width: "500",
    height: "500"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Le gestionnaire de r\xE9servation et de pr\xE8s de mat\xE9riels centralis\xE9s")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "panelRight"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "rightForm"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("form", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "panelRightTitle"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h3", null, "Connexion")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
    margin: "dense",
    id: "login",
    color: "primary",
    label: "Identifiant",
    variant: "standard"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_TextField__WEBPACK_IMPORTED_MODULE_1__["default"], {
    margin: "dense",
    id: "password",
    color: "primary",
    label: "Mot de passe",
    variant: "standard"
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_mui_material_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
    size: "large",
    variant: "outlined"
  }, "Se connecter"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div", {
    className: "panelRightControl"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", null, "Vous avez besoin d'aide ?\xA0"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("a", {
    href: "mailto:corantin.berger@hotmail.com",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "Contactez-nous")))))));
}

/***/ }),

/***/ "./assets/react/controllers/materiel/desktop.jsx":
/*!*******************************************************!*\
  !*** ./assets/react/controllers/materiel/desktop.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Desktop)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../components/navbar */ "./assets/components/navbar.jsx");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../components/header */ "./assets/components/header.jsx");
/* harmony import */ var _components_copyright__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../components/copyright */ "./assets/components/copyright.jsx");
/* harmony import */ var _components_materiel__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../components/materiel */ "./assets/components/materiel.jsx");
/* harmony import */ var _components_itemStats__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../components/itemStats */ "./assets/components/itemStats.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _constants_data_json__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../constants/data.json */ "./assets/constants/data.json");
/* harmony import */ var _mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material/Skeleton */ "./node_modules/@mui/material/Skeleton/Skeleton.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }



















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function randomTime(min, max) {
  // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function allItems(page) {
  var ITEMS = _constants_data_json__WEBPACK_IMPORTED_MODULE_25__.items;
  var CATEGORIES = _constants_data_json__WEBPACK_IMPORTED_MODULE_25__.categories;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)(ITEMS),
    _useState4 = _slicedToArray(_useState3, 2),
    Items = _useState4[0],
    setItem = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_24__.useEffect)(function () {
    setTimeout(function () {
      setLoading(false);
    }, randomTime(500, 1000));
  }, []);
  var SkeletonBreadcrumb = function SkeletonBreadcrumb() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("span", {
      style: {
        height: '4%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_26__["default"], {
      variant: "text",
      width: "30%",
      height: "80%",
      sx: {
        marginLeft: '5%',
        marginTop: '1.5%'
      }
    }));
  };
  var SkeletonItem = function SkeletonItem() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_26__["default"], {
      variant: "rounded",
      width: "45%",
      height: "15%",
      sx: {
        marginLeft: '1%',
        marginTop: '3%'
      }
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement((react__WEBPACK_IMPORTED_MODULE_24___default().Fragment), null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement((react__WEBPACK_IMPORTED_MODULE_24___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(SkeletonBreadcrumb, null), _toConsumableArray(Array(8).keys()).map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(SkeletonItem, {
      key: item
    });
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement((react__WEBPACK_IMPORTED_MODULE_24___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_components_itemStats__WEBPACK_IMPORTED_MODULE_23__["default"], {
    Category: page,
    ITEMS: Items,
    CAT: CATEGORIES
  }), items(page, Items, setItem, CATEGORIES)));
}
var items = function items(Category, ITEMS, setItem, CATEGORIES) {
  console.log(Category);
  if (Category == null || Category == '') {
    {
      return ITEMS.filter(function (item) {
        return item.available;
      }).map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_components_materiel__WEBPACK_IMPORTED_MODULE_22__["default"], {
          key: item.id,
          item: item,
          ITEMS: ITEMS,
          setItem: setItem,
          cat: CATEGORIES.filter(function (cat) {
            return cat.id === item.category;
          }).map(function (cat) {
            return cat.name;
          })
        });
      });
    }
  } else {
    {
      return ITEMS.filter(function (item) {
        return CATEGORIES.filter(function (cat) {
          return cat.id === item.category;
        }).map(function (cat) {
          return cat.name;
        }) == Category;
      }).map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_components_materiel__WEBPACK_IMPORTED_MODULE_22__["default"], {
          key: item.id,
          item: item,
          ITEMS: ITEMS,
          setItem: setItem,
          cat: CATEGORIES.filter(function (cat) {
            return cat.id === item.category;
          }).map(function (cat) {
            return cat.name;
          })
        });
      });
    }
  }
};
function Desktop() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement((react__WEBPACK_IMPORTED_MODULE_24___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("main", {
    className: "main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_components_header__WEBPACK_IMPORTED_MODULE_20__["default"], {
    title: "Desktop",
    item: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_19__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("section", {
    className: "container"
  }, allItems("desktop"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_components_copyright__WEBPACK_IMPORTED_MODULE_21__["default"], null)))));
}

/***/ }),

/***/ "./assets/react/controllers/materiel/materiel_details.jsx":
/*!****************************************************************!*\
  !*** ./assets/react/controllers/materiel/materiel_details.jsx ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Details)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_string_replace_all_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.string.replace-all.js */ "./node_modules/core-js/modules/es.string.replace-all.js");
/* harmony import */ var core_js_modules_es_string_replace_all_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_all_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.join.js */ "./node_modules/core-js/modules/es.array.join.js");
/* harmony import */ var core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_join_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../components/navbar */ "./assets/components/navbar.jsx");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../components/header */ "./assets/components/header.jsx");
/* harmony import */ var _components_copyright__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../components/copyright */ "./assets/components/copyright.jsx");
/* harmony import */ var _constants_data_json__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../constants/data.json */ "./assets/constants/data.json");
/* harmony import */ var _components_materiel_details__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../components/materiel_details */ "./assets/components/materiel_details.jsx");
/* harmony import */ var _mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @mui/material/Skeleton */ "./node_modules/@mui/material/Skeleton/Skeleton.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_27__);
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






























function randomTime(min, max) {
  // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}
var capitalizeWords = function capitalizeWords(str) {
  return str.toLowerCase().split(' ').map(function (word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }).join(' ').normalize("NFD").replace(/[\u0300-\u036f]/g, "").replaceAll('-', " ").toLowerCase();
};
var itemDetail = function itemDetail(itemName) {
  var ITEMS = _constants_data_json__WEBPACK_IMPORTED_MODULE_25__.items;
  var CATEGORIES = _constants_data_json__WEBPACK_IMPORTED_MODULE_25__.categories;
  return ITEMS.filter(function (item) {
    return capitalizeWords(item.name) == capitalizeWords(itemName);
  }).map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement(_components_materiel_details__WEBPACK_IMPORTED_MODULE_26__["default"], {
      key: item.id,
      item: item,
      cat: CATEGORIES.filter(function (cat) {
        return cat.id === item.category;
      }).map(function (cat) {
        return cat.name;
      })
    });
  });
};
function itemInfo(itemName) {
  var ItemImage = function ItemImage() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_28__["default"], {
      animation: "wave",
      variant: "rounded",
      width: "80%",
      height: "55%",
      sx: {
        marginLeft: '10%'
      }
    });
  };
  var TextTitle = function TextTitle() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_28__["default"], {
      variant: "rounded",
      width: "50%",
      height: "3%",
      sx: {
        marginLeft: '10%',
        marginTop: '1%'
      }
    });
  };
  var TextDescription = function TextDescription() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_28__["default"], {
      variant: "rounded",
      width: "80%",
      height: "2%",
      sx: {
        marginLeft: '10%',
        marginTop: '3%'
      }
    });
  };
  var Button = function Button() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_28__["default"], {
      animation: "wave",
      variant: "rounded",
      width: "50%",
      height: "3%",
      sx: {
        marginLeft: '10%',
        marginTop: '8%'
      }
    });
  };
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_27__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  (0,react__WEBPACK_IMPORTED_MODULE_27__.useEffect)(function () {
    setTimeout(function () {
      setLoading(false);
    }, randomTime(500, 1000));
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement((react__WEBPACK_IMPORTED_MODULE_27___default().Fragment), null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement((react__WEBPACK_IMPORTED_MODULE_27___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      alignContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement(ItemImage, null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("span", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center'
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement(TextTitle, null), _toConsumableArray(Array(8).keys()).map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement(TextDescription, {
      key: item
    });
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement(Button, null)))) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement((react__WEBPACK_IMPORTED_MODULE_27___default().Fragment), null, itemDetail(itemName)));
}
function Details(props) {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement((react__WEBPACK_IMPORTED_MODULE_27___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("main", {
    className: "main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("div", {
    className: "body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement(_components_header__WEBPACK_IMPORTED_MODULE_23__["default"], {
    title: props.cat,
    item: props.item
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_22__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement("section", {
    className: "InfoItem"
  }, itemInfo(props.item), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_27___default().createElement(_components_copyright__WEBPACK_IMPORTED_MODULE_24__["default"], null)))));
}

/***/ }),

/***/ "./assets/react/controllers/materiel/reseau.jsx":
/*!******************************************************!*\
  !*** ./assets/react/controllers/materiel/reseau.jsx ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Reseau)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../components/navbar */ "./assets/components/navbar.jsx");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../components/header */ "./assets/components/header.jsx");
/* harmony import */ var _components_copyright__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../components/copyright */ "./assets/components/copyright.jsx");
/* harmony import */ var _components_materiel__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../components/materiel */ "./assets/components/materiel.jsx");
/* harmony import */ var _components_itemStats__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../components/itemStats */ "./assets/components/itemStats.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _constants_data_json__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../constants/data.json */ "./assets/constants/data.json");
/* harmony import */ var _mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material/Skeleton */ "./node_modules/@mui/material/Skeleton/Skeleton.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }



















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function randomTime(min, max) {
  // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function allItems(page) {
  var ITEMS = _constants_data_json__WEBPACK_IMPORTED_MODULE_25__.items;
  var CATEGORIES = _constants_data_json__WEBPACK_IMPORTED_MODULE_25__.categories;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)(ITEMS),
    _useState4 = _slicedToArray(_useState3, 2),
    Items = _useState4[0],
    setItem = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_24__.useEffect)(function () {
    setTimeout(function () {
      setLoading(false);
    }, randomTime(500, 1000));
  }, []);
  var SkeletonBreadcrumb = function SkeletonBreadcrumb() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("span", {
      style: {
        height: '4%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_26__["default"], {
      variant: "text",
      width: "30%",
      height: "80%",
      sx: {
        marginLeft: '5%',
        marginTop: '1.5%'
      }
    }));
  };
  var SkeletonItem = function SkeletonItem() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_26__["default"], {
      variant: "rounded",
      width: "45%",
      height: "15%",
      sx: {
        marginLeft: '1%',
        marginTop: '3%'
      }
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement((react__WEBPACK_IMPORTED_MODULE_24___default().Fragment), null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement((react__WEBPACK_IMPORTED_MODULE_24___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(SkeletonBreadcrumb, null), _toConsumableArray(Array(8).keys()).map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(SkeletonItem, {
      key: item
    });
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement((react__WEBPACK_IMPORTED_MODULE_24___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_components_itemStats__WEBPACK_IMPORTED_MODULE_23__["default"], {
    Category: page,
    ITEMS: Items,
    CAT: CATEGORIES
  }), items(page, Items, setItem, CATEGORIES)));
}
var items = function items(Category, ITEMS, setItem, CATEGORIES) {
  console.log(Category);
  if (Category == null || Category == '') {
    {
      return ITEMS.filter(function (item) {
        return item.available;
      }).map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_components_materiel__WEBPACK_IMPORTED_MODULE_22__["default"], {
          key: item.id,
          item: item,
          ITEMS: ITEMS,
          setItem: setItem,
          cat: CATEGORIES.filter(function (cat) {
            return cat.id === item.category;
          }).map(function (cat) {
            return cat.name;
          })
        });
      });
    }
  } else {
    {
      return ITEMS.filter(function (item) {
        return CATEGORIES.filter(function (cat) {
          return cat.id === item.category;
        }).map(function (cat) {
          return cat.name;
        }) == Category;
      }).map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_components_materiel__WEBPACK_IMPORTED_MODULE_22__["default"], {
          key: item.id,
          item: item,
          ITEMS: ITEMS,
          setItem: setItem,
          cat: CATEGORIES.filter(function (cat) {
            return cat.id === item.category;
          }).map(function (cat) {
            return cat.name;
          })
        });
      });
    }
  }
};
function Reseau() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement((react__WEBPACK_IMPORTED_MODULE_24___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("main", {
    className: "main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_components_header__WEBPACK_IMPORTED_MODULE_20__["default"], {
    title: "R\xE9seau",
    item: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_19__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("section", {
    className: "container"
  }, allItems("réseau"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_components_copyright__WEBPACK_IMPORTED_MODULE_21__["default"], null)))));
}

/***/ }),

/***/ "./assets/react/controllers/materiel/reunion.jsx":
/*!*******************************************************!*\
  !*** ./assets/react/controllers/materiel/reunion.jsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Reunion)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../components/navbar */ "./assets/components/navbar.jsx");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../components/header */ "./assets/components/header.jsx");
/* harmony import */ var _components_copyright__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../components/copyright */ "./assets/components/copyright.jsx");
/* harmony import */ var _components_materiel__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../components/materiel */ "./assets/components/materiel.jsx");
/* harmony import */ var _components_itemStats__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../components/itemStats */ "./assets/components/itemStats.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _constants_data_json__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../constants/data.json */ "./assets/constants/data.json");
/* harmony import */ var _mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material/Skeleton */ "./node_modules/@mui/material/Skeleton/Skeleton.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }



















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function randomTime(min, max) {
  // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function allItems(page) {
  var ITEMS = _constants_data_json__WEBPACK_IMPORTED_MODULE_25__.items;
  var CATEGORIES = _constants_data_json__WEBPACK_IMPORTED_MODULE_25__.categories;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)(ITEMS),
    _useState4 = _slicedToArray(_useState3, 2),
    Items = _useState4[0],
    setItem = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_24__.useEffect)(function () {
    setTimeout(function () {
      setLoading(false);
    }, randomTime(500, 1000));
  }, []);
  var SkeletonBreadcrumb = function SkeletonBreadcrumb() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("span", {
      style: {
        height: '4%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_26__["default"], {
      variant: "text",
      width: "30%",
      height: "80%",
      sx: {
        marginLeft: '5%',
        marginTop: '1.5%'
      }
    }));
  };
  var SkeletonItem = function SkeletonItem() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_26__["default"], {
      variant: "rounded",
      width: "45%",
      height: "15%",
      sx: {
        marginLeft: '1%',
        marginTop: '3%'
      }
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement((react__WEBPACK_IMPORTED_MODULE_24___default().Fragment), null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement((react__WEBPACK_IMPORTED_MODULE_24___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(SkeletonBreadcrumb, null), _toConsumableArray(Array(8).keys()).map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(SkeletonItem, {
      key: item
    });
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement((react__WEBPACK_IMPORTED_MODULE_24___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_components_itemStats__WEBPACK_IMPORTED_MODULE_23__["default"], {
    Category: page,
    ITEMS: Items,
    CAT: CATEGORIES
  }), items(page, Items, setItem, CATEGORIES)));
}
var items = function items(Category, ITEMS, setItem, CATEGORIES) {
  console.log(Category);
  if (Category == null || Category == '') {
    {
      return ITEMS.filter(function (item) {
        return item.available;
      }).map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_components_materiel__WEBPACK_IMPORTED_MODULE_22__["default"], {
          key: item.id,
          item: item,
          ITEMS: ITEMS,
          setItem: setItem,
          cat: CATEGORIES.filter(function (cat) {
            return cat.id === item.category;
          }).map(function (cat) {
            return cat.name;
          })
        });
      });
    }
  } else {
    {
      return ITEMS.filter(function (item) {
        return CATEGORIES.filter(function (cat) {
          return cat.id === item.category;
        }).map(function (cat) {
          return cat.name;
        }) == Category;
      }).map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_components_materiel__WEBPACK_IMPORTED_MODULE_22__["default"], {
          key: item.id,
          item: item,
          ITEMS: ITEMS,
          setItem: setItem,
          cat: CATEGORIES.filter(function (cat) {
            return cat.id === item.category;
          }).map(function (cat) {
            return cat.name;
          })
        });
      });
    }
  }
};
function Reunion() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement((react__WEBPACK_IMPORTED_MODULE_24___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("main", {
    className: "main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_components_header__WEBPACK_IMPORTED_MODULE_20__["default"], {
    title: "R\xE9union",
    item: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_19__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("section", {
    className: "container"
  }, allItems("réunion"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_components_copyright__WEBPACK_IMPORTED_MODULE_21__["default"], null)))));
}

/***/ }),

/***/ "./assets/react/controllers/materiel/telephonique.jsx":
/*!************************************************************!*\
  !*** ./assets/react/controllers/materiel/telephonique.jsx ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Telephonique)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _components_navbar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../components/navbar */ "./assets/components/navbar.jsx");
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../components/header */ "./assets/components/header.jsx");
/* harmony import */ var _components_copyright__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../components/copyright */ "./assets/components/copyright.jsx");
/* harmony import */ var _components_materiel__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../components/materiel */ "./assets/components/materiel.jsx");
/* harmony import */ var _components_itemStats__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../components/itemStats */ "./assets/components/itemStats.jsx");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var _constants_data_json__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../constants/data.json */ "./assets/constants/data.json");
/* harmony import */ var _mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @mui/material/Skeleton */ "./node_modules/@mui/material/Skeleton/Skeleton.js");
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }



















function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }









function randomTime(min, max) {
  // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function allItems(page) {
  var ITEMS = _constants_data_json__WEBPACK_IMPORTED_MODULE_25__.items;
  var CATEGORIES = _constants_data_json__WEBPACK_IMPORTED_MODULE_25__.categories;
  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)(true),
    _useState2 = _slicedToArray(_useState, 2),
    loading = _useState2[0],
    setLoading = _useState2[1];
  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_24__.useState)(ITEMS),
    _useState4 = _slicedToArray(_useState3, 2),
    Items = _useState4[0],
    setItem = _useState4[1];
  (0,react__WEBPACK_IMPORTED_MODULE_24__.useEffect)(function () {
    setTimeout(function () {
      setLoading(false);
    }, randomTime(500, 1000));
  }, []);
  var SkeletonBreadcrumb = function SkeletonBreadcrumb() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("span", {
      style: {
        height: '4%'
      }
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_26__["default"], {
      variant: "text",
      width: "30%",
      height: "80%",
      sx: {
        marginLeft: '5%',
        marginTop: '1.5%'
      }
    }));
  };
  var SkeletonItem = function SkeletonItem() {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_mui_material_Skeleton__WEBPACK_IMPORTED_MODULE_26__["default"], {
      variant: "rounded",
      width: "45%",
      height: "15%",
      sx: {
        marginLeft: '1%',
        marginTop: '3%'
      }
    });
  };
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement((react__WEBPACK_IMPORTED_MODULE_24___default().Fragment), null, loading ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement((react__WEBPACK_IMPORTED_MODULE_24___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(SkeletonBreadcrumb, null), _toConsumableArray(Array(8).keys()).map(function (item) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(SkeletonItem, {
      key: item
    });
  })) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement((react__WEBPACK_IMPORTED_MODULE_24___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_components_itemStats__WEBPACK_IMPORTED_MODULE_23__["default"], {
    Category: page,
    ITEMS: Items,
    CAT: CATEGORIES
  }), items(page, Items, setItem, CATEGORIES)));
}
var items = function items(Category, ITEMS, setItem, CATEGORIES) {
  console.log(Category);
  if (Category == null || Category == '') {
    {
      return ITEMS.filter(function (item) {
        return item.available;
      }).map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_components_materiel__WEBPACK_IMPORTED_MODULE_22__["default"], {
          key: item.id,
          item: item,
          ITEMS: ITEMS,
          setItem: setItem,
          cat: CATEGORIES.filter(function (cat) {
            return cat.id === item.category;
          }).map(function (cat) {
            return cat.name;
          })
        });
      });
    }
  } else {
    {
      return ITEMS.filter(function (item) {
        return CATEGORIES.filter(function (cat) {
          return cat.id === item.category;
        }).map(function (cat) {
          return cat.name;
        }) == Category;
      }).map(function (item) {
        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_components_materiel__WEBPACK_IMPORTED_MODULE_22__["default"], {
          key: item.id,
          item: item,
          ITEMS: ITEMS,
          setItem: setItem,
          cat: CATEGORIES.filter(function (cat) {
            return cat.id === item.category;
          }).map(function (cat) {
            return cat.name;
          })
        });
      });
    }
  }
};
function Telephonique() {
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement((react__WEBPACK_IMPORTED_MODULE_24___default().Fragment), null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("main", {
    className: "main"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("div", {
    className: "body"
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_components_header__WEBPACK_IMPORTED_MODULE_20__["default"], {
    title: "T\xE9l\xE9phonique",
    item: ""
  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_components_navbar__WEBPACK_IMPORTED_MODULE_19__["default"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement("section", {
    className: "container"
  }, allItems("téléphonique"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_24___default().createElement(_components_copyright__WEBPACK_IMPORTED_MODULE_21__["default"], null)))));
}

/***/ }),

/***/ "./vendor/symfony/ux-react/assets/dist/register_controller.js":
/*!********************************************************************!*\
  !*** ./vendor/symfony/ux-react/assets/dist/register_controller.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "registerReactControllerComponents": () => (/* binding */ registerReactControllerComponents)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_6__);







function registerReactControllerComponents(context) {
  var reactControllers = {};
  var importAllReactComponents = function importAllReactComponents(r) {
    r.keys().forEach(function (key) {
      return reactControllers[key] = r(key)["default"];
    });
  };
  importAllReactComponents(context);
  window.resolveReactComponent = function (name) {
    var component = reactControllers["./".concat(name, ".jsx")] || reactControllers["./".concat(name, ".tsx")];
    if (typeof component === 'undefined') {
      throw new Error('React controller "' + name + '" does not exist');
    }
    return component;
  };
}


/***/ }),

/***/ "./vendor/symfony/ux-react/assets/dist/render_controller.js":
/*!******************************************************************!*\
  !*** ./vendor/symfony/ux-react/assets/dist/render_controller.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ default_1)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.reflect.to-string-tag.js */ "./node_modules/core-js/modules/es.reflect.to-string-tag.js");
/* harmony import */ var core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_to_string_tag_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.reflect.construct.js */ "./node_modules/core-js/modules/es.reflect.construct.js");
/* harmony import */ var core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_reflect_construct_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.symbol.to-primitive.js */ "./node_modules/core-js/modules/es.symbol.to-primitive.js");
/* harmony import */ var core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_to_primitive_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.date.to-primitive.js */ "./node_modules/core-js/modules/es.date.to-primitive.js");
/* harmony import */ var core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_primitive_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.number.constructor.js */ "./node_modules/core-js/modules/es.number.constructor.js");
/* harmony import */ var core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_constructor_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var _hotwired_stimulus__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @hotwired/stimulus */ "./node_modules/@hotwired/stimulus/dist/stimulus.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }



















function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }
function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }
function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }
function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }
function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }
function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }
function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



var createRoot;
var m = react_dom__WEBPACK_IMPORTED_MODULE_20__;
if (false) {} else {
  var i = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  createRoot = function createRoot(c, o) {
    i.usingClientEntryPoint = true;
    try {
      return m.createRoot(c, o);
    } finally {
      i.usingClientEntryPoint = false;
    }
  };
}
var default_1 = /*#__PURE__*/function (_Controller) {
  _inherits(default_1, _Controller);
  var _super = _createSuper(default_1);
  function default_1() {
    _classCallCheck(this, default_1);
    return _super.apply(this, arguments);
  }
  _createClass(default_1, [{
    key: "connect",
    value: function connect() {
      var props = this.propsValue ? this.propsValue : null;
      this.dispatchEvent('connect', {
        component: this.componentValue,
        props: props
      });
      if (!this.componentValue) {
        throw new Error('No component specified.');
      }
      var component = window.resolveReactComponent(this.componentValue);
      this._renderReactElement(react__WEBPACK_IMPORTED_MODULE_19___default().createElement(component, props, null));
      this.dispatchEvent('mount', {
        componentName: this.componentValue,
        component: component,
        props: props
      });
    }
  }, {
    key: "disconnect",
    value: function disconnect() {
      this.element.root.unmount();
      this.dispatchEvent('unmount', {
        component: this.componentValue,
        props: this.propsValue ? this.propsValue : null
      });
    }
  }, {
    key: "_renderReactElement",
    value: function _renderReactElement(reactElement) {
      var element = this.element;
      if (!element.root) {
        element.root = createRoot(this.element);
      }
      element.root.render(reactElement);
    }
  }, {
    key: "dispatchEvent",
    value: function dispatchEvent(name, payload) {
      this.dispatch(name, {
        detail: payload,
        prefix: 'react'
      });
    }
  }]);
  return default_1;
}(_hotwired_stimulus__WEBPACK_IMPORTED_MODULE_21__.Controller);
default_1.values = {
  component: String,
  props: Object
};


/***/ }),

/***/ "./assets/styles/global.css":
/*!**********************************!*\
  !*** ./assets/styles/global.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/constants/data.json":
/*!************************************!*\
  !*** ./assets/constants/data.json ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"items":[{"id":1,"name":"Commutateur Cisco 250","alt":"Commutateur Cisco 250","category":1,"emplacement":"Salle de stockage 1","description":"Les commutateurs Cisco 250 sont conçus pour être faciles à déployer et utiliser par les petites entreprises et leurs partenaires. Des interfaces graphiques avancées et conviviales réduisent le temps de déploiement, de dépannage et de gestion du réseau. Des assistants de configuration simplifient les tâches de configuration courantes et constituent l\'outil idéal pour paramétrer et gérer le réseau.","caracteristiques":"Contrôle du flux, prise en charge de BOOTP, IGMP snooping, prise en charge de Syslog, protection contre les attaques de Déni de Service, mise en miroir des ports, prise en charge DiffServ, mise en file d\'attente Weighted Round Robin (WRR), contrôle de la tempête de Broadcast, prise en charge d\'IPv6, Multicast Storm Control, Unicast Storm Control, prise en charge du protocole SNTP, prise en charge du protocole STP (Spanning Tree Protocol), prise en charge du protocole RSTP (Rapid Spanning Tree Protocol), prise en charge du protocole Multiple Spanning Tree Protocol (MSTP), qualité de service (QDS), serveur DHCP, snooping MLD, bouton de réinitialisation, sans ventilateur, prise en charge LLDP, relais DHCP, Link Aggregation Control Protocol (LACP), Port Security, client DHCP, Energy Efficient Ethernet, base d\'information de gestion (MIB), tampon 12 MB, Class of Service (CoS), authentification 802.1x, Duplicated Address Detection, Type of Service (ToS), prise en charge DiffServ Code Point (DSCP), test de câble, technologie SmartPort, système de prévention du blocage en tête, Internet Control Message Protocol (ICMP), Cisco Discovery Protocol, miroir VLAN.","img":"/build/images/item/commutateur.jpg","href":"/materiel/reseau/commutateur-cisco-250","available":true},{"id":2,"name":"Routeur Cisco 1921","alt":"Routeur","category":1,"emplacement":"Salle de stockage 1","description":"Le Cisco 1921 s\'appuie sur le meilleur de sa catégorie. Tous les routeurs à services intégrés de la gamme Cisco 1900 offrent une accélération du cryptage matériel intégré et des services de sécurité avancés. En outre, les plates-formes prennent en charge la plus large gamme d\'options de connectivité filaire et sans fil du secteur, telles que les connexions série, T1/E1, xDSL, Gigabit Ethernet et sans fil de troisième génération (3G). Le Cisco 1921 est conçu pour répondre aux exigences des applications des succursales d\'aujourd\'hui, avec une flexibilité de conception pour les applications futures. Vous pouvez facilement interchanger les modules utilisés sur le Cisco 1921 avec d\'autres routeurs Cisco pour assurer une protection maximale de votre investissement. L\'utilisation de cartes d\'interface communes à l\'ensemble du réseau réduit considérablement la complexité de la gestion des stocks, de la mise en œuvre de grands déploiements de réseau et de la maintenance des configurations pour des succursales de tailles diverses.","caracteristiques":"\\tProtection par firewall, Prise en charge VPN, prise en charge de MPLS, prise en charge du réseau local (LAN) virtuel, prise en charge de Syslog, prise en charge d\'IPv6, Class-Based Weighted Fair Queuing (CBWFQ), Weighted Random Early Detection (WRED), qualité de service (QDS), Web Services Management Agent (WSMA), TR-069 Agent, NetFlow","img":"/build/images/item/routeur.jpg","href":"/materiel/reseau/routeur-cisco-1921","available":true},{"id":3,"name":"Cpl AV2000","alt":"Cpl","category":1,"emplacement":"Salle de stockage 1","description":"Tout comme le D-Link DHP-701AV, le TL-PA9020 embarque donc une puce communicante signée Broadcom. Plus véloce que son homologue Qualcomm QCA7500 (1,2 Gb/s), elle permet d\'afficher des débits théoriques plus élevés, bien que fonctionnant également sur la norme HomePlug AV2. Le constructeur parle ainsi d\'un débit théorique de 2 Gb/s, soit 100 Mb/s de plus que sur la version française du bloc D-Link et 800 Mb/s de plus que sur les blocs utilisant une puce Qualcomm. Pour profiter de tels débits —  bruts on le rappelle — il est toutefois nécessaire de pouvoir utiliser la fonction MiMo et donc de disposer de trois câbles électriques sur chaque prise de courant.","caracteristiques":"Débit théorique\\t2 Gbit/s Ports\\t2x Gigabit Ethernet Norme\\tHomePlug AV2 ; IEEE1901 ; HomePlug AV Sécurité\\tAES 128 bits Garantie\\t3 Wi-Fi\\tNon Switch réseau\\tOui Prise femelle\\tOui","img":"/build/images/item/cpl.jpg","href":"/materiel/reseau/cpl-AV2000","available":true},{"id":4,"name":"Yealink T54W","alt":"Téléphone fixe","category":2,"emplacement":"Salle de stockage 2","description":"Avec son modèle T54W, Yealink propose un poste IP haut de gamme pour les entreprises et le monde professionnel. Doté d\'un écran couleur LCD 4,3 pouces tactile et offrant plusieurs positions pour une visibilité optimale, il permet une navigation fluide et aisée. Grâce aux différents témoins lumineux bicolores (rouge et vert) d\'informations d\'état de ligne, de messages ou d\'appels en attente, voyez d\'un seul coup d\'oeil votre activité en cours. Niveau interface utilisateur, le Yealink T54W est pensé pour être intuitif et ne poser aucun problèmes aux professionnels, peu importe qu\'ils soient à l\'aise avec la téléphonie ou non. Les icônes ainsi que les différentes touches programmables permettent une navigation et une utilisation simplifiée. Enfin, le téléphone est évidemment capable d\'afficher le nom et le numéro de l\'appelant, permettant de connaître qui essaie de vous joindre.","caracteristiques":"Les caractéristiques audio du téléphone IP Yealink T54W sont issues de la dernière génération. Prenant en charge le Codec OPUS, le  T54W propose une qualité de voix HD grâce au combiné et au haut-parleur.  Compatible avec les prothèses auditives (HAC), le téléphone SIP T54W permet, d\'une part, d\'offrir un bouclier accoustique contre les bruits trop aigüe provenant de votre interlocuteur, et d\'autre part, offre un filtrage intelligent du bruit. Le T54W est capable de filtrer en partie les bruits nuisibles autour de vous et de les traiter pour ne récupérer que la voix.","img":"/build/images/item/telephone-fixe.png","href":"/materiel/telephonique/yealink-t54w","available":true},{"id":5,"name":"Iphone 12","alt":"Téléphone portable","category":2,"emplacement":"Salle de stockage 2","description":"Tout en s’inspirant du design des nouveaux iPad, l’iPhone 12 renoue également avec le passé en arborant un style qui n’est pas sans rappeler les anciennes générations de smartphones Apple ; notamment les 4ème et 5ème. Le téléphone se veut plus compact que son prédécesseur et affiche de surcroît une finition plus élégante, qu’il doit à des bordures nettement plus fines. Le smartphone de 14ème génération partage par ailleurs les mêmes dimensions que l’iPhone 12 Pro et justifie d’une très bonne ergonomie, puisqu’il se manipule aisément d\'une seule main.","caracteristiques":"Processeur\\tApple A13 Bionic\\tApple A14 Bionic Mémoire vive (RAM)\\t4 Go\\t4 Go Capacité de stockage\\t64 Go, 128 Go ou 256 Go\\t64 Go, 128 Go ou 256 Go Appareil photo\\tDouble caméra de 12 Mpx, Caméra frontale de 12 Mpx\\tDouble caméra de 12 Mpx, Caméra frontale de 12 Mpx Écran\\tLCD 6,1 pouces avec 1 792 x 828 pixels à 326 ppi6\\tOLED de 6,1 pouces avec 2 532 x 1 170 pixels à 460 ppi Batterie\\tBatterie Li-Ion de 3 110 mAh\\tBatterie Li-Ion de 2 815 mAh Autonomie\\t15 h\\t12 h Connectique\\tLTE, UMTS, GMS\\t5G, LTE, GMS, UMTS","img":"/build/images/item/telephone-portable.png","href":"/materiel/telephonique/iphone-12","available":true},{"id":6,"name":"Casque Superlux hmd685a","alt":"Casque audio","category":3,"emplacement":"Salle de stockage 3","description":"Comme son nom l\'indique, ces écouteurs sont de haute définition. Ils peuvent reproduire des basses épaisses ainsi que des médiums et des aigus clairs. Avec ces écouteurs, vous pouvez profiter de votre musique préférée partout ou vous allez. Les écouteurs peuvent etre pliés pour ne pas prendre trop de place dans vos bagages. Le câble est doté d\'un microphone a bouton-poussoir, qui vous permet de répondre aux appels et d\'y répondre (fonctionne avec les appareils Apple).","caracteristiques":"Directivité: cardioïde Réponse en fréquence: 50 - 15000 Hz Impédance: 200 Ohm Sensibilité: -64 dBV / Pa (0,6 mV / Pa) à 1 kHz Longueur de câble de 1,5 m avec connecteur XLR 4 broches femelle","img":"/build/images/item/casque.jpg","href":"/materiel/desktop/casque-superlux-hmd685a","available":true},{"id":7,"name":"Ordinateur Acer veriton s2680g","alt":"Ordinateur de bureau","category":3,"emplacement":"Salle de stockage 3","description":"L\'ordinateur Acer Veriton S2680G est une solution professionnelle performante, compacte, fiable et sécurisée à prix abordable. Faites l\'achat de ce PC de bureau pour toutes vos tâches professionnelles courantes et profitez de bonnes performances, y compris en multitâches.","caracteristiques":"Informations générales Désignation Acer Veriton S2680G (DT.VV2EF.00H) - Windows 10 Pro Marque Acer Modèle DT.VV2EF.00H Système d\'exploitation Système d\'exploitation Windows 10 Professionnel 64 bits Système d\'exploitation fourni Oui Processeur et chipset Plateforme (Proc.) Intel Comet Lake Type de processeur Intel Core i3-10105 (Quad-Core 3.7 GHz / 4.4 GHz Turbo - 8 Threads - Cache 6 Mo) Processeur Intel Core i3 Fréquence CPU 3.7 GHz Mémoire Taille de la mémoire 8 Go Type de mémoire DDR4 Fréquence(s) Mémoire DDR4 2666 MHz Stockage Configuration disque(s) SSD 256 Go Disque dur SSD 256 Go Disque secondaire Sans disque secondaire Type de Disque Système SSD (Solid State Drive) Interface avec l\'ordinateur disque dur système M.2 - PCI-E NVMe Lecteur Optique Graveur DVD Super Multi Lecteur de disquettes Non Affichage Chipset graphique Intel UHD Graphics 630 NVIDIA Studio Non Type de multi-GPU Aucun VR Ready (réalité virtuelle) Non Réseau Sans-fil Non Nombre de ports/Contrôleur Ethernet 1 X Intégré Norme(s) réseau 10/100/1000 Mbps Connectique Connecteurs panneau avant 2 X USB 3.1 2 X USB 3.0 1 X Micro (Jack 3.5mm Femelle) 1 X Casque (Jack 3.5mm Femelle) Connecteurs panneau arrière 1 X VGA (D-sub 15 Femelle) 1 X HDMI Femelle 1 X DisplayPort Femelle 4 X USB 2.0 1 X RJ45 Femelle 2 X MiniDin 6 Femelle (PS/2) 1 X Série (RS-232) 3 X Jack 3,5mm Femelle Stéréo Equipement Clavier et souris fournis Oui Caractéristiques physiques Format de PC Tour Format du boitier Mini Tour Conception boîtier Boitier non vitré Largeur 160 mm Hauteur 350 mm Profondeur 309.25 mm Poids 6.84 kg Puissance 180 W Spécifications techniques Monté Oui Usage Professionnel Technologie Intel vPro Non Garanties Garantie commerciale 2 années vendeur Garanties légales Voir les modalités Informations légales Reprise des produits usagés Voir les modalités","img":"/build/images/item/ordinateur.png","href":"/materiel/desktop/ordinateur-acer-veriton-s2680g","available":true},{"id":8,"name":"Ordinateur ACER aspire 3","alt":"Ordinateur portable","category":3,"emplacement":"Salle de stockage 3","description":"Profitez de bonnes performances pour un prix abordable avec le PC portable Acer Aspire 3 A315-24P. À la fois compact, élégant et efficace, c\'est un parfait compagnon mobile. Il sera adapté pour les applications de bureautique, la navigation web et le divertissement multimédia occasionnel.","caracteristiques":"Processeur AMD Ryzen 5 7520U (Quad-Core 2.8 GHz / 4.3 GHz Turbo - 8 Threads - Cache 4 Mo) 16 Go de mémoire LPDDR5 (mémoire intégrée) Écran IPS de 15.6 pouces avec résolution Full HD (1920 x 1080) SSD M.2 PCIe de 512 Go Meilleur confort oculaire avec la technologie Acer Bluelight Shield Communication sans fil Wi-Fi 6 + Bluetooth 5.2 Webcam HP 720p intégrée Windows 11 Famille Garantie constructeur 2 ans","img":"/build/images/item/ordinateur-portable.jpg","href":"/materiel/desktop/ordinateur-acer-aspire-3","available":true},{"id":9,"name":"Tablette tactile et56","alt":"Tablette tactile","category":3,"emplacement":"Salle de stockage 3","description":"Zebra a pour vous la solution avec la tablette professionnelle ET56. Sous Android, avec scanner intégré, et dotée des technologies Wi-Fi, cellulaires et Bluetooth les plus rapides, l\'ET56 est le modèle le plus robuste, mince et léger de la gamme Zebra.","caracteristiques":"Processeur : Qualcomm Snapdragon 660 huit cœurs, 2,2 GHz Système : Android 8.1 Oreo Ecran : 8.4 po, capacitif, tactile 10 points, résolution maximale 2 560 x 1 600 ; verre Corning Gorilla Glass ; lisible en plein jour RAM : 4 Go de RAM LPDDR4 (extensible jusqu\'à 8 Go) APN : 8 MP, caméra frontale 2 MP Stockage : 32 Go de mémoire flash eMMC ; fente pour carte micro SDXC accessible par l’utilisateur (jusqu’à 200 Go pris en charge en standard) Connectivité : 4G LTE (données uniquement), Bluetooth 5.0, GPS, A-GPS, NFC, Wi-Fi ac/b/g/n, USB Type C Capteurs : Accéléromètre, capteur de luminosité, boussoule, gyroscope Batterie de 9 660 mAh Li-Ion, remplaçable par l’utilisateur Certifié IP65 Dimensions (L x H x P) : 228 x 150 x 12,7 mm Poids : 527 g","img":"/build/images/item/tablette-tactile.png","href":"/materiel/desktop/tablette-tactile-et56","available":true},{"id":10,"name":"Imprimante Brother","alt":"Imprimante","category":3,"emplacement":"Salle de stockage 3","description":"La MFC-L3710CW de Brother est une imprimante multifonction 4-en-1 qui possède de nombreux atouts qui vont améliorer votre rendement. Cette imprimante silencieuse et compacte possède de nombreuses fonctionnalités, des vitesses d\'impression élevées et d\'une connexion réseau sans fil intégré.","caracteristiques":"Vitesse d’impression jusqu’à 18 pages par minute Technologie LED Taille maximale du papier : A4 Écran tactile couleur de 9.3 cm afin de faciliter vos impressions Bac papier de 250 feuilles et chargeur automatique de documents de 50 feuilles Connectivités USB et réseau Wi-Fi Connectivité mobile : AirPrint, Cortado Cloud Print, Google Cloud Print 2.0, iPrint&Scan, Brother Print Service Plugin, Mopria Impressions silencieuses : moins de 45dB Mémoire de 512 Mo Matériaux robustes et durables","img":"/build/images/item/imprimante.png","href":"/materiel/desktop/imprimante-brother","available":true},{"id":11,"name":"Clef usb Kingston","alt":"Clef usb","category":3,"emplacement":"Salle de stockage 3","description":"La clé DataTraveler Max de Kingston est une clé USB qui est dotée d\'une interface USB 3.1 Type C afin d\'offrir des débits de lecture pouvant atteindre 1000 Mo/s et d\'écriture de 900 Mo/s.","caracteristiques":"Capacité de 256 Go Interface USB 3.1 Type C Débit en lecture : jusqu\'à 1000 Mo/s Débit en écriture : jusqu\'à 900 Mo/s Compatibilité : Windows 11/10/8.1, Mac OS (v.10.14.x +), Linux (v. 2.6.x +), Chrome OS","img":"/build/images/item/clef-usb.png","href":"/materiel/desktop/clef-usb-kingston","available":true},{"id":12,"name":"SSD externe samsung","alt":"Disque dur externe","category":3,"emplacement":"Salle de stockage 3","description":"Le Samsung T7 Shield est un SSD externe ultra-rapide et ultra-résistant. Il offre des vitesses fulgurantes pour le transfert de données et bénéficie d\'une protection avancée (IP65) contre l\'eau, la poussière et les chutes (jusqu\'à 3 m). Il est compatible PC, Mac, Android, consoles de jeux et plus.","caracteristiques":"Désignation Samsung SSD Externe T7 Shield 1 To Bleu MarqueSamsung ModèleMU-PE1T0R/EU Garantie3 ans (constructeur) PRINCIPALES CARACTÉRISTIQUES Capacité1 To Format de disque externeUltra-portable Type de Disque SystèmeSSD (Solid State Drive) Interface avec l\'ordinateurUSB 3.1 Format de Disque2 1/2 OS supporté(s)Microsoft Windows 7 , Microsoft Windows 10 , Mac OS X 10.10 ou supérieur , Microsoft Windows 11 , Android SPÉCIFICATIONS DISQUE Type de DisqueSSD (Solid State Drive) RAID supporténon FONCTIONS SPÉCIALES Résistant aux chocsoui Stockage en lignenon Cryptage des donnéesoui CARACTÉRISTIQUES PHYSIQUES MatériauABS/Aluminium , Elastomère CouleurBleu Largeur88 mm Epaisseur13 mm Profondeur59 mm Poids98 g","img":"/build/images/item/disque-dur-externe.png","href":"/materiel/desktop/ssd-externe-samsung","available":true},{"id":13,"name":"Videoprojecteur Epson EB-W49","alt":"Videoprojecteur","category":4,"emplacement":"Salle de stockage 4","description":"Ce vidéoprojecteur mobile proposé par la marque EPSON vous offre la liberté de l’installer presque partout. C’est un outil de projection durable qui garantit plusieurs années de performances pour toutes vos réunions et présentations. Le design élégant et compact de ce vidéoprojecteur, ainsi que ses faibles dimensions vous permettent d’utiliser sa résolution WXGA partout. De plus, ce vidéoprojecteur à lampe présente une durée d’utilisation en mode éco de près de 17 000 heures.","caracteristiques":"Technologie de projection 3LCD + Obturateur RVB à cristaux liquides Luminosité couleur et lumière blanche Jusqu’à 3800 lumens Résolution WXGA, 1280 x 800, 16:10 Reproduction des couleurs Jusqu’à 1,07 milliards de couleurs Taille de l’image Entre 33 et 320 pouces Contraste 16000:1 Distance focale 16,9 mm - 20,28 mm Offset 10:1 Dimensions nettes 302‎ x 249 x 87 mm (Largeur x Profondeur x Hauteur) Poids 2,7 Kg","img":"/build/images/item/videoprojecteur.png","href":"/materiel/reunion/videoprojecteur-epson-eb-w49","available":true},{"id":14,"name":"Écran Samsung QMB","alt":"Écran","category":4,"emplacement":"Salle de stockage 4","description":"Upscaling et Dynamic Crystal Colors sont les technologies de la marque SAMSUNG qui garantissent à cet écran professionnel une colorimétrie incroyable pour des contenus toujours plus réalistes dans tous vos environnements intérieurs. Cette gamme d’écrans professionnels SAMSUNG QMB vous offre une visibilité parfaite à tout moment de la journée car elle est dotée d’une haute luminosité, d’une dalle mate anti-reflets et d’un grand angle de vision de 178°.","caracteristiques":"Type Edge LED BLU Taille en centimètre 967.5x557.7x48.3 Luminosité 500 cd/m2 Type de dalle VA Poids net 10 kg Consommation en veille 0.5W VESA 200x200 Technologie Upscalling Système d’exploitation Tizen 6.5","img":"/build/images/item/ecran.png","href":"/materiel/reunion/ecran-samsung-qmb","available":true},{"id":15,"name":"Paperboard digital Samsung Flip 4","alt":"Paperboard digital","category":4,"emplacement":"Salle de stockage 4","description":"Le Paperboard digital Samsung Flip 4 est un écran tactile de 75 ou 85 pouces doté d’une résolution 4K. Il donne la possibilité de prendre des notes, d’importer des fichiers, de partager du contenu et bien plus encore ! C’est l’outil incontournable en salle de réunion pour collaborer efficacement.","caracteristiques":"Taille 55\'\', 65\'\', 75” et 85” Résolution 3 840 x 2 160 (paysage) Luminosité 350 cd/m2 Angle de vision 178:178 Haut-parleurs intégrés (10 W x 4) Signal d’entrée 2 x HDMI (1 avant, 1 arrière), 1 x DP, USB-C (avant), 3 x USB (2 SoC, 1 External) 1 x Slot OPS I/F Signal de sortie 1 x HDMI Out (Partage d’écran), 1 x Touch out 2 (USB Upstream), Stereo Mini Jack Points de contact simultanés 4 sur SoC, 20 sur source externe Dimensions Nettes / Brutes (mm) : 55 pouces : 1297.4 x 768.2 x 59.9 65 pouces : 1522.4 x 897.6 x 62.9 75 pouces : 1724 x 1026.3 x 89 85 pouces : 1945.8 x 1151.1 x 89 Mémoire de stockage 32GB (2.65GB occupé par l\'O/S, 29.35GB disponible) VESA 400*400","img":"/build/images/item/paperboard-digital.png","href":"/materiel/reunion/paperboard-digital-samsung-flip-4","available":true}],"categories":[{"id":1,"name":"réseau"},{"id":2,"name":"téléphonique"},{"id":3,"name":"desktop"},{"id":4,"name":"réunion"}]}');

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_mui_icons-material_AddBox_js-node_modules_mui_icons-material_Close_js-no-9c1704"], () => (__webpack_exec__("./assets/js/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBRTtNQUN6QixJQUFJLENBQUNDLFFBQVEsQ0FBQ3BMLElBQUksRUFBRTtRQUFFcUwsTUFBTSxFQUFFRixPQUFPO1FBQUVHLE1BQU0sRUFBRTtNQUFRLENBQUMsQ0FBQztJQUM3RDtFQUFDO0VBQUE7QUFBQSxFQS9CbUJ4TywyREFBVTtBQWlDbEMwTixTQUFTLENBQUNlLE1BQU0sR0FBRztFQUNmNUIsU0FBUyxFQUFFNkIsTUFBTTtFQUNqQnhDLEtBQUssRUFBRXlDO0FBQ1gsQ0FBQzs7Ozs7Ozs7Ozs7OztBQzFERCIsInNvdXJjZXMiOlsid2VicGFjazovLy8gXFwuW2p0XXN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy8gc3luYyBcXC4oaiU3Q3Qpc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzLmpzb24iLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbnRyb2xsZXJzL2hlbGxvX2NvbnRyb2xsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvY29weXJpZ2h0LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9oZWFkZXIuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL2l0ZW1TdGF0cy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbG9hZGluZy5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbWF0ZXJpZWwuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL21hdGVyaWVsX2RldGFpbHMuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9jb21wb25lbnRzL21vZGFsX2Fqb3V0LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9tb2RhbF9lZGl0LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY29tcG9uZW50cy9tb2RhbF9zdXBwcmVzc2lvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2NvbXBvbmVudHMvbmF2YmFyLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9ib290c3RyYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL2FjY3VlaWwuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9sb2dpbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL21hdGVyaWVsL2Rlc2t0b3AuanN4Iiwid2VicGFjazovLy8uL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9tYXRlcmllbC9tYXRlcmllbF9kZXRhaWxzLmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbWF0ZXJpZWwvcmVzZWF1LmpzeCIsIndlYnBhY2s6Ly8vLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbWF0ZXJpZWwvcmV1bmlvbi5qc3giLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL21hdGVyaWVsL3RlbGVwaG9uaXF1ZS5qc3giLCJ3ZWJwYWNrOi8vLy4vdmVuZG9yL3N5bWZvbnkvdXgtcmVhY3QvYXNzZXRzL2Rpc3QvcmVnaXN0ZXJfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi92ZW5kb3Ivc3ltZm9ueS91eC1yZWFjdC9hc3NldHMvZGlzdC9yZW5kZXJfY29udHJvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc3R5bGVzL2dsb2JhbC5jc3MiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIG1hcCA9IHtcblx0XCIuL2hlbGxvX2NvbnRyb2xsZXIuanNcIjogXCIuL25vZGVfbW9kdWxlcy9Ac3ltZm9ueS9zdGltdWx1cy1icmlkZ2UvbGF6eS1jb250cm9sbGVyLWxvYWRlci5qcyEuL2Fzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIC4vbm9kZV9tb2R1bGVzL0BzeW1mb255L3N0aW11bHVzLWJyaWRnZS9sYXp5LWNvbnRyb2xsZXItbG9hZGVyLmpzISBcXFxcLltqdF1zeD8kXCI7IiwidmFyIG1hcCA9IHtcblx0XCIuL2FjY3VlaWwuanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvYWNjdWVpbC5qc3hcIixcblx0XCIuL2xvZ2luLmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL2xvZ2luLmpzeFwiLFxuXHRcIi4vbWF0ZXJpZWwvZGVza3RvcC5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9tYXRlcmllbC9kZXNrdG9wLmpzeFwiLFxuXHRcIi4vbWF0ZXJpZWwvbWF0ZXJpZWxfZGV0YWlscy5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9tYXRlcmllbC9tYXRlcmllbF9kZXRhaWxzLmpzeFwiLFxuXHRcIi4vbWF0ZXJpZWwvcmVzZWF1LmpzeFwiOiBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzL21hdGVyaWVsL3Jlc2VhdS5qc3hcIixcblx0XCIuL21hdGVyaWVsL3JldW5pb24uanN4XCI6IFwiLi9hc3NldHMvcmVhY3QvY29udHJvbGxlcnMvbWF0ZXJpZWwvcmV1bmlvbi5qc3hcIixcblx0XCIuL21hdGVyaWVsL3RlbGVwaG9uaXF1ZS5qc3hcIjogXCIuL2Fzc2V0cy9yZWFjdC9jb250cm9sbGVycy9tYXRlcmllbC90ZWxlcGhvbmlxdWUuanN4XCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vYXNzZXRzL3JlYWN0L2NvbnRyb2xsZXJzIHN5bmMgcmVjdXJzaXZlIFxcXFwuKGolN0N0KXN4PyRcIjsiLCJleHBvcnQgZGVmYXVsdCB7XG4gICdzeW1mb255LS11eC1yZWFjdC0tcmVhY3QnOiBpbXBvcnQoLyogd2VicGFja01vZGU6IFwiZWFnZXJcIiAqLyAnQHN5bWZvbnkvdXgtcmVhY3QvZGlzdC9yZW5kZXJfY29udHJvbGxlci5qcycpLFxufTsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxuLypcbiAqIFRoaXMgaXMgYW4gZXhhbXBsZSBTdGltdWx1cyBjb250cm9sbGVyIVxuICpcbiAqIEFueSBlbGVtZW50IHdpdGggYSBkYXRhLWNvbnRyb2xsZXI9XCJoZWxsb1wiIGF0dHJpYnV0ZSB3aWxsIGNhdXNlXG4gKiB0aGlzIGNvbnRyb2xsZXIgdG8gYmUgZXhlY3V0ZWQuIFRoZSBuYW1lIFwiaGVsbG9cIiBjb21lcyBmcm9tIHRoZSBmaWxlbmFtZTpcbiAqIGhlbGxvX2NvbnRyb2xsZXIuanMgLT4gXCJoZWxsb1wiXG4gKlxuICogRGVsZXRlIHRoaXMgZmlsZSBvciBhZGFwdCBpdCBmb3IgeW91ciB1c2UhXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnRleHRDb250ZW50ID0gJ0hlbGxvIFN0aW11bHVzISBFZGl0IG1lIGluIGFzc2V0cy9jb250cm9sbGVycy9oZWxsb19jb250cm9sbGVyLmpzJztcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZm9vdGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IHN0eWxlPXt7XHJcbiAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICBoZWlnaHQ6IFwiNzBweFwiLFxyXG4gICAgICAgICAgICBvcGFjaXR5OiBcIjAuNVwiLFxyXG4gICAgICAgICAgICBjb2xvcjogXCIjMDAwMDAwXCIsXHJcbiAgICAgICAgICAgIHRyYW5zaXRpb246IFwiYmFja2dyb3VuZC1jb2xvciAxcyBlYXNlIDBzXCIsXHJcbiAgICAgICAgICAgIGZvbnRGYW1pbHk6IFwic3lzdGVtLXVpXCIsXHJcbiAgICAgICAgICAgIGZvbnRTaXplOiBcIngtc21hbGxcIixcclxuICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmZmZmNzVcIlxyXG4gICAgICAgIH19PiBEaWdpdExpZ2h0IMKpIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9LiBUb3VzIGRyb2l0cyByw6lzZXJ2w6lzLjwvZGl2PlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IExpbmsgZnJvbSAnQG11aS9tYXRlcmlhbC9MaW5rJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IE1vZGFsYnV0dG9uIGZyb20gJy4vbW9kYWxfYWpvdXQnO1xyXG5cclxuZnVuY3Rpb24gY2FwaXRhbGl6ZVdvcmRzKHN0cikge1xyXG4gICAgcmV0dXJuIHN0clxyXG4gICAgICAgIC50b0xvd2VyQ2FzZSgpXHJcbiAgICAgICAgLnNwbGl0KCcgJylcclxuICAgICAgICAubWFwKCh3b3JkKSA9PiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zbGljZSgxKSlcclxuICAgICAgICAuam9pbignICcpLm5vcm1hbGl6ZShcIk5GRFwiKS5yZXBsYWNlKC9bXFx1MDMwMC1cXHUwMzZmXS9nLCBcIlwiKS5yZXBsYWNlQWxsKCctJywgXCIgXCIpLnRvTG93ZXJDYXNlKCk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoZWFkZXIoeyB0aXRsZSwgaXRlbSB9KSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInBhbmVsSGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICA8dWwgY2xhc3NOYW1lPVwiYnJlYWRjcnVtYlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hY2N1ZWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBY2N1ZWlsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hY2N1ZWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBNYXRlcmllbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge2l0ZW0ubGVuZ3RoIDw9IDAgP1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3RpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPiA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvbWF0ZXJpZWwvJHtjYXBpdGFsaXplV29yZHModGl0bGUpfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHtpdGVtLmxlbmd0aCA+IDAgP1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+e2NhcGl0YWxpemVXb3JkcyhpdGVtKS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIGNhcGl0YWxpemVXb3JkcyhpdGVtLnNsaWNlKDEpKX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICA8TW9kYWxidXR0b24gLz5cclxuXHJcbiAgICAgICAgICAgIDwvaGVhZGVyPlxyXG4gICAgICAgIDwvPilcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbXVpL21hdGVyaWFsL0Zvcm1Db250cm9sJztcclxuaW1wb3J0IFNlbGVjdCBmcm9tICdAbXVpL21hdGVyaWFsL1NlbGVjdCc7XHJcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gJ0BtdWkvbWF0ZXJpYWwvSW5wdXRMYWJlbCc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbXVpL21hdGVyaWFsL01lbnVJdGVtJztcclxuXHJcbmNvbnN0IHRvdGFsID0gZnVuY3Rpb24gKHBhZ2UsIEZpbHRlciwgSVRFTVMsIENBVCkge1xyXG5cclxuICBpZiAocGFnZSA9PSBudWxsIHx8IHBhZ2UgPT0gJycpIHtcclxuICAgIGlmIChGaWx0ZXIgPT0gMCkge1xyXG4gICAgICB7IHJldHVybiAoSVRFTVMuZmlsdGVyKGl0ZW0gPT4gaXRlbSkubGVuZ3RoKSB9XHJcbiAgICB9XHJcblxyXG4gICAgeyByZXR1cm4gKElURU1TLmZpbHRlcihpdGVtID0+IGl0ZW0uY2F0ZWdvcnkgPT0gRmlsdGVyKS5sZW5ndGgpIH1cclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICB7IHJldHVybiAoSVRFTVMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jYXRlZ29yeSA9PSBDQVQuZmlsdGVyKGNhdCA9PiAoY2F0Lm5hbWUgPT09IHBhZ2UpKS5tYXAoY2F0ID0+IChjYXQuaWQpKSkpLmxlbmd0aCB9XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCBhdmFpbGFibGUgPSBmdW5jdGlvbiAocGFnZSwgRmlsdGVyLCBJVEVNUywgQ0FUKSB7XHJcbiAgaWYgKHBhZ2UgPT0gbnVsbCB8fCBwYWdlID09ICcnKSB7XHJcblxyXG4gICAgaWYgKEZpbHRlciA9PSAwKSB7XHJcbiAgICAgICAgcmV0dXJuIElURU1TLmZpbHRlcihpdGVtID0+IGl0ZW0uYXZhaWxhYmxlKVxyXG4gICAgICAgICAgLm1hcCgoaXRlbSkgPT5cclxuICAgICAgICAgICAgKGl0ZW0pKS5sZW5ndGhcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gSVRFTVMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jYXRlZ29yeSA9PSBGaWx0ZXIgJiYgaXRlbS5hdmFpbGFibGUpXHJcbiAgICAgIC5tYXAoKGl0ZW0pID0+XHJcbiAgICAgICAgKGl0ZW0pKS5sZW5ndGhcclxuICB9XHJcbiAgZWxzZSB7XHJcbiAgICB7XHJcbiAgICAgIHJldHVybiBJVEVNUy5maWx0ZXIoaXRlbSA9PiBpdGVtLmNhdGVnb3J5ID09IENBVC5maWx0ZXIoY2F0ID0+IChjYXQubmFtZSA9PT0gcGFnZSkpLm1hcChjYXQgPT4gKGNhdC5pZCkpKVxyXG4gICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLmF2YWlsYWJsZSkubGVuZ3RoXHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5jb25zdCB1bmF2YWlsYWJsZSA9IGZ1bmN0aW9uIChwYWdlLCBGaWx0ZXIsIElURU1TLCBDQVQpIHtcclxuICBpZiAocGFnZSA9PSBudWxsIHx8IHBhZ2UgPT0gJycpIHtcclxuXHJcbiAgICBpZiAoRmlsdGVyID09IDApIHtcclxuICAgICAgcmV0dXJuIElURU1TLmZpbHRlcihpdGVtID0+ICFpdGVtLmF2YWlsYWJsZSlcclxuICAgICAgICAubWFwKChpdGVtKSA9PlxyXG4gICAgICAgICAgKGl0ZW0pKS5sZW5ndGhcclxuICB9XHJcblxyXG4gICAgICByZXR1cm4gSVRFTVMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5jYXRlZ29yeSA9PSBGaWx0ZXIgJiYgIWl0ZW0uYXZhaWxhYmxlKVxyXG4gICAgICAgIC5tYXAoKGl0ZW0pID0+XHJcbiAgICAgICAgICAoaXRlbSkpLmxlbmd0aFxyXG4gIH1cclxuICBlbHNlIHtcclxuICAgIHtcclxuICAgICAgcmV0dXJuIElURU1TLmZpbHRlcihpdGVtID0+IGl0ZW0uY2F0ZWdvcnkgPT0gQ0FULmZpbHRlcihjYXQgPT4gKGNhdC5uYW1lID09PSBwYWdlKSkubWFwKGNhdCA9PiAoY2F0LmlkKSkpXHJcbiAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0udW5hdmFpbGFibGUpLmxlbmd0aFxyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXRlbVN0YXRzKHsgQ2F0ZWdvcnksIEZpbHRlciwgb25DYXRDaGFuZ2UsIElURU1TLCBDQVQgfSkge1xyXG5cclxuICBmdW5jdGlvbiBoYW5kbGVDaGFuZ2UoZSkge1xyXG4gICAgb25DYXRDaGFuZ2UoZS50YXJnZXQudmFsdWUpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuICg8PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzdGF0c0l0ZW1zXCI+XHJcblxyXG4gICAgICB7KENhdGVnb3J5ID09IG51bGwgfHwgQ2F0ZWdvcnkgPT0gJycpID8gKDw+PHNwYW4+XHJcbiAgICAgICAgRmlsdHJlOlxyXG4gICAgICA8L3NwYW4+XHJcbiAgICAgICAgPEZvcm1Db250cm9sIHN0eWxlPXt7XHJcbiAgICAgICAgICB3aWR0aDogJzE4N3B4JyxcclxuICAgICAgICAgIGhlaWdodDogJzQ1cHgnLFxyXG4gICAgICAgICAgYm90dG9tOiAnMTFweCdcclxuICAgICAgICB9fT5cclxuICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCI+Q2F0w6lnb3JpZTwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgIDxTZWxlY3Qgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgdmFsdWU9e0ZpbHRlcn1cclxuICAgICAgICAgICAgbGFiZWxJZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiXHJcbiAgICAgICAgICAgIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0XCJcclxuICAgICAgICAgICAgbGFiZWw9XCJDYXTDqWdvcmllXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiMFwiPlRvdXM8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCIxXCI+UsOpc2VhdTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIjJcIj5Uw6lsw6lwaG9uaXF1ZTwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIjNcIj5EZXNrdG9wPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiNFwiPlLDqXVuaW9uPC9NZW51SXRlbT5cclxuICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgIDwvRm9ybUNvbnRyb2w+PC8+KSA6XHJcbiAgICAgICAgKDw+PC8+KX1cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3N0YXRzSXRlbXNJbmZvJz5cclxuICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgIFRvdGFsOiB7dG90YWwoQ2F0ZWdvcnksIEZpbHRlciwgSVRFTVMsIENBVCl9XHJcbiAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgRGlzcG9uaWJsZToge2F2YWlsYWJsZShDYXRlZ29yeSwgRmlsdGVyLCBJVEVNUywgQ0FUKX1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICBJbmRpc3BvbmlibGU6IHt1bmF2YWlsYWJsZShDYXRlZ29yeSwgRmlsdGVyLCBJVEVNUywgQ0FUKX1cclxuICAgICAgICA8L3NwYW4+XHJcbiAgICAgIDwvZGl2PjwvZGl2PlxyXG4gIDwvPilcclxufSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IFJpbmdzIH0gZnJvbSAncmVhY3QtbG9hZGVyLXNwaW5uZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbG9hZGluZ0NvbXAoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgaWQ9XCJsb2FkaW5nXCIgc3R5bGU9e3tcclxuICAgICAgICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICAgICAgICAgIHRvcDogJzAnLFxyXG4gICAgICAgICAgICBib3R0b206ICcwJyxcclxuICAgICAgICAgICAgbGVmdDogJzAnLFxyXG4gICAgICAgICAgICByaWdodDogJzAnLFxyXG4gICAgICAgICAgICBtYXJnaW46ICdhdXRvJyxcclxuICAgICAgICAgICAgd2lkdGg6ICcxMDBweCcsXHJcbiAgICAgICAgICAgIGhlaWdodDogJzEwMHB4JyxcclxuICAgICAgICB9fT48UmluZ3NcclxuICAgICAgICAgICAgICAgIGhlaWdodD1cIjEwMFwiXHJcbiAgICAgICAgICAgICAgICB3aWR0aD1cIjEwMFwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInZhcigtLWRlZmF1dC1oZWFkZXItY29sb3IpXCJcclxuICAgICAgICAgICAgICAgIHNlY29uZGFyeUNvbG9yPSdibGFjaydcclxuICAgICAgICAgICAgICAgIHJhZGl1cz0nMTIuNSdcclxuICAgICAgICAgICAgICAgIGFyaWFMYWJlbD1cIm11dGF0aW5nLWRvdHMtbG9hZGluZ1wiXHJcbiAgICAgICAgICAgICAgICB3cmFwcGVyU3R5bGU9e3t9fVxyXG4gICAgICAgICAgICAgICAgd3JhcHBlckNsYXNzPVwiXCJcclxuICAgICAgICAgICAgICAgIHZpc2libGU9e3RydWV9XHJcbiAgICAgICAgICAgIC8+PC9kaXY+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgTGluayBmcm9tICdAbXVpL21hdGVyaWFsL0xpbmsnXHJcbmltcG9ydCBCdXR0b25EZWxldGUgZnJvbSAnLi9tb2RhbF9zdXBwcmVzc2lvbic7XHJcbmltcG9ydCBCdXR0b25FZGl0IGZyb20gJy4vbW9kYWxfZWRpdCc7XHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJdGVtKHsgaXRlbSwgSVRFTVMsIHNldEl0ZW0sIGNhdCB9KSB7XHJcbiAgXHJcbiAgZnVuY3Rpb24gcmVtb3ZlQWNjZW50cyhzdHIpIHtcclxuICAgIHJldHVybiBzdHIubm9ybWFsaXplKFwiTkZEXCIpLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csIFwiXCIpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwicGFuZWxJdGVtXCI+XHJcbiAgICA8ZGl2IGlkPVwiZW50cnktcGljXCIgY2xhc3NOYW1lPVwicGFuZWxJbWFnZVwiPlxyXG4gICAgICA8TGluayBocmVmPXtpdGVtLmhyZWZ9PlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz17aXRlbS5pbWd9XHJcbiAgICAgICAgICBhbHQ9e2l0ZW0uYWx0fVxyXG4gICAgICAgICAgc3R5bGU9e3sgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX1cclxuICAgICAgICAgIHdpZHRoPXs1MDB9XHJcbiAgICAgICAgICBoZWlnaHQ9ezUwMH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2Rpdj5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbUluZm9cIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtSW5mb1RpdGxlXCI+XHJcbiAgICAgICAgPHNwYW4+Tm9tIGR1IHByb2R1aXQgOiA8L3NwYW4+XHJcbiAgICAgICAgPHNwYW4+e2l0ZW0ubmFtZX08L3NwYW4+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1JbmZvVGl0bGVcIj5cclxuICAgICAgICA8TGluayBocmVmPXtgL21hdGVyaWVsLyR7cmVtb3ZlQWNjZW50cyhjYXQudG9TdHJpbmcoKSl9YH0+XHJcbiAgICAgICAgICA8c3Bhbj5DYXTDqWdvcmllIDoge2NhdH08L3NwYW4+XHJcbiAgICAgICAgPC9MaW5rPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtSW5mb1RpdGxlXCI+XHJcbiAgICAgICAge2l0ZW0uYXZhaWxhYmxlID9cclxuICAgICAgICAgIDxzcGFuPlN0YXR1dCA6IDxzcGFuIHN0eWxlPXt7IGNvbG9yOiBcImRhcmtncmVlblwiIH19PkRpc3BvbmlibGU8L3NwYW4+PC9zcGFuPlxyXG4gICAgICAgICAgOlxyXG4gICAgICAgICAgPHNwYW4+U3RhdHV0IDogPHNwYW4gc3R5bGU9e3sgY29sb3I6IFwicmVkXCIgfX0+UsOpc2VydsOpPC9zcGFuPjwvc3Bhbj5cclxuICAgICAgICB9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vZGFsQnV0dG9uXCI+XHJcbiAgICAgIDxCdXR0b25FZGl0IEl0ZW09e2l0ZW19IElURU1TPXtJVEVNU30gc2V0SXRlbT17c2V0SXRlbX0gLz5cclxuICAgICAgPEJ1dHRvbkRlbGV0ZSBJdGVtPXtpdGVtfSBJVEVNUz17SVRFTVN9IHNldEl0ZW09e3NldEl0ZW19IC8+XHJcbiAgICA8L2Rpdj5cclxuICA8L2Rpdj4pXHJcbn0iLCJpbXBvcnQgTGluayBmcm9tICdAbXVpL21hdGVyaWFsL0xpbmsnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEl0ZW0oeyBpdGVtLCBjYXQgfSkge1xyXG5cclxuICBmdW5jdGlvbiB6b29tKGUpIHtcclxuICAgIFxyXG4gICAgdmFyIHpvb21lciA9IGUuY3VycmVudFRhcmdldDtcclxuXHJcbiAgICBsZXQgb2Zmc2V0WDtcclxuICAgIGxldCBvZmZzZXRZO1xyXG5cclxuICAgIGUub2Zmc2V0WCA/IG9mZnNldFggPSBlLm9mZnNldFggOiBvZmZzZXRYID0gZS5wYWdlWDtcclxuICAgIGUub2Zmc2V0WSA/IG9mZnNldFkgPSBlLm9mZnNldFkgOiBvZmZzZXRZID0gZS5wYWdlWTtcclxuXHJcbiAgICBsZXQgeCA9IG9mZnNldFgvem9vbWVyLm9mZnNldFdpZHRoKjUwXHJcbiAgICBsZXQgeSA9IG9mZnNldFkvem9vbWVyLm9mZnNldEhlaWdodCo4MFxyXG5cclxuICAgIHpvb21lci5zdHlsZS5iYWNrZ3JvdW5kUG9zaXRpb24gPSB4ICsgJyUgJyArIHkgKyAnJSc7XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKDxkaXYgY2xhc3NOYW1lPVwicGFuZWxJbmZvSXRlbVwiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbEltYWdlXCI+XHJcbiAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwiem9vbVwiIG9uTW91c2VNb3ZlPXt6b29tfSBzdHlsZT17e2JhY2tncm91bmRJbWFnZTogYHVybCgke2l0ZW0uaW1nfSlgIH19PlxyXG4gICAgICAgIDxpbWdcclxuICAgICAgICAgIHNyYz17aXRlbS5pbWd9XHJcbiAgICAgICAgICBhbHQ9e2l0ZW0uYWx0fVxyXG4gICAgICAgICAgc3R5bGU9e3sgb2JqZWN0Rml0OiBcImNvdmVyXCIgfX1cclxuICAgICAgICAgIHdpZHRoPXs1MDB9XHJcbiAgICAgICAgICBoZWlnaHQ9ezUwMH1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2ZpZ3VyZT5cclxuICAgIDwvZGl2PlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtSW5mb1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1JbmZvVGl0bGVcIj5cclxuICAgICAgICA8aDE+e2l0ZW0ubmFtZX08L2gxPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtSW5mb0NhdFwiPlxyXG4gICAgICAgIDxMaW5rIGhyZWY9e2AvbWF0ZXJpZWwvJHtjYXR9YH0+XHJcbiAgICAgICAgICBDYXTDqWdvcmllIDoge2NhdH1cclxuICAgICAgICA8L0xpbms+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17XCJpdGVtSW5mb0F2YWlsYWJsZVwifT5cclxuICAgICAgICB7aXRlbS5hdmFpbGFibGUgP1xyXG4gICAgICAgICAgPHNwYW4+U3RhdHV0IDogPHAgc3R5bGU9e3sgY29sb3I6IFwiZGFya2dyZWVuXCIgfX0+RGlzcG9uaWJsZTwvcD48L3NwYW4+XHJcbiAgICAgICAgICA6XHJcbiAgICAgICAgICA8c3Bhbj5TdGF0dXQgOiA8cCBzdHlsZT17eyBjb2xvcjogXCJyZWRcIiB9fT5Sw6lzZXJ2w6k8L3A+PC9zcGFuPlxyXG4gICAgICAgIH1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbUluZm9FbXBsXCI+XHJcbiAgICAgICAgPHA+RW1wbGFjZW1lbnQgOiB7aXRlbS5lbXBsYWNlbWVudH0gTsK6IHtpdGVtLmlkfTwvcD5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaXRlbUluZm9EZXNjXCI+XHJcbiAgICAgICAgPHNwYW4+PGgzPkRlc2NyaXB0aW9uIDogPC9oMz4ge2l0ZW0uZGVzY3JpcHRpb259PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpdGVtSW5mb0NhclwiPlxyXG4gICAgICAgIDxzcGFuPjxoMz5DYXJhY3TDqXJpc3RpcXVlcyA6IDwvaDM+IHtpdGVtLmNhcmFjdGVyaXN0aXF1ZXN9PC9zcGFuPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAge2l0ZW0uYXZhaWxhYmxlID9cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFnZW5kYUdvb2dsZVwiPlxyXG4gICAgICAgICAgPGlmcmFtZVxyXG4gICAgICAgICAgICBzcmM9XCJodHRwczovL2NhbGVuZGFyLmdvb2dsZS5jb20vY2FsZW5kYXIvZW1iZWQ/aGVpZ2h0PTYwMCZ3a3N0PTEmYmdjb2xvcj0lMjNmZmZmZmYmY3R6PUV1cm9wZSUyRlBhcmlzJnNob3dEYXRlPTEmc2hvd05hdj0xJnNob3dUaXRsZT0wJnNob3dQcmludD0xJnNob3dUYWJzPTEmc2hvd0NhbGVuZGFycz0wJnNyYz1Nak5oWlRWaE9HRmlaV0ZrTm1OaVptVXlOV1F4TWpKallqTXlabU0zWWpaa016bGxZV1kwT0Raa1ltTXdPVGMyTUdabU1XSTRZV1E0TjJVNVpHRmlZVUJuY205MWNDNWpZV3hsYm1SaGNpNW5iMjluYkdVdVkyOXQmY29sb3I9JTIzNjE2MTYxXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyOiAwIH19PlxyXG4gICAgICAgICAgPC9pZnJhbWU+XHJcbiAgICAgICAgPC9kaXY+IDogbnVsbFxyXG4gICAgICB9XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm91dG9uUmVzZXJ2ZXJcIj5cclxuICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJidG5SZXNlcnZlclwiXHJcbiAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgc3g9e3sgYm9yZGVyQ29sb3I6IFwid2hpdGVcIiwgY29sb3I6IFwid2hpdGVcIiB9fVxyXG4gICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHRSZXNlcnZlclwiPlxyXG4gICAgICAgICAgICA8cD5SRVNFUlZFUiBDRSBNQVRFUklFTDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gIDwvZGl2PilcclxufSIsImltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtdWkvbWF0ZXJpYWwvVGV4dEZpZWxkJztcclxuaW1wb3J0IFNlbGVjdCBmcm9tICdAbXVpL21hdGVyaWFsL1NlbGVjdCc7XHJcbmltcG9ydCBCb3ggZnJvbSAnQG11aS9tYXRlcmlhbC9Cb3gnO1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbXVpL21hdGVyaWFsL1R5cG9ncmFwaHknO1xyXG5pbXBvcnQgTW9kYWwgZnJvbSAnQG11aS9tYXRlcmlhbC9Nb2RhbCc7XHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBDbG9zZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9DbG9zZSc7XHJcbmltcG9ydCBJbnB1dExhYmVsIGZyb20gJ0BtdWkvbWF0ZXJpYWwvSW5wdXRMYWJlbCc7XHJcbmltcG9ydCBNZW51SXRlbSBmcm9tICdAbXVpL21hdGVyaWFsL01lbnVJdGVtJztcclxuaW1wb3J0IEFkZEJveEljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9BZGRCb3gnO1xyXG5pbXBvcnQgRm9ybUNvbnRyb2wgZnJvbSAnQG11aS9tYXRlcmlhbC9Gb3JtQ29udHJvbCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IGRhdGEgZnJvbSAnLi4vY29uc3RhbnRzL2RhdGEuanNvbidcclxuaW1wb3J0IFRvb2x0aXAgZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sdGlwJztcclxuaW1wb3J0IEFsZXJ0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQWxlcnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW9kYWwoeyBJdGVtcywgc2V0SXRlbSB9KSB7XHJcblxyXG4gICAgLy9BTEVSVCBNRVNTQUdFXHJcbiAgICBjb25zdCBbYWxlcnRPcGVuLCBzZXRBbGVydE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2FsZXJ0TWVzc2FnZSwgc2V0QWxlcnRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtBbGVydEluZm8sIHNldEFsZXJ0SW5mb10gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3Qgc2xlZXAgPSBhc3luYyAobWlsbGlzZWNvbmRzKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KHJlc29sdmUsIG1pbGxpc2Vjb25kcylcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgZnVuY3Rpb24gcmVtb3ZlQWNjZW50cyhzdHIpIHtcclxuICAgICAgICByZXR1cm4gc3RyLm5vcm1hbGl6ZShcIk5GRFwiKS5yZXBsYWNlKC9bXFx1MDMwMC1cXHUwMzZmXS9nLCBcIlwiKVxyXG4gICAgfVxyXG5cclxuICAgIGZ1bmN0aW9uIHJlcGxhY2VTcGFjZXNXaXRoRGFzaGVzKHN0cikge1xyXG4gICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxzKy9nLCAnLScpO1xyXG4gICAgICB9XHJcblxyXG4gICAgY29uc3QgQWxlcnRTbGVlcCA9IGFzeW5jICgpID0+IHtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgYXdhaXQgc2xlZXAoMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEFsZXJ0T3BlbihmYWxzZSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgQ0FURUdPUklFUyA9IGRhdGEuY2F0ZWdvcmllcztcclxuXHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICAgICAgY2F0ZWdvcnk6IDEsXHJcbiAgICAgICAgICAgIGVtcGxhY2VtZW50OiBcIlwiLFxyXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogXCJcIixcclxuICAgICAgICAgICAgY2FyYWN0ZXJpc3RpcXVlczogXCJcIixcclxuICAgICAgICAgICAgaW1nOiBcIlwiLFxyXG4gICAgICAgIH1cclxuICAgICk7XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2sgPSBhc3luYyAoKSA9PiB7XHJcblxyXG4gICAgICAgIGlmIChhbGVydE9wZW4gPT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodmFsdWUubmFtZSA9PSBcIlwiIHx8XHJcbiAgICAgICAgICAgIHZhbHVlLmNhdGVnb3J5ID09IFwiXCIgfHxcclxuICAgICAgICAgICAgdmFsdWUuZW1wbGFjZW1lbnQgPT0gXCJcIiB8fFxyXG4gICAgICAgICAgICB2YWx1ZS5kZXNjcmlwdGlvbiA9PSBcIlwiIHx8XHJcbiAgICAgICAgICAgIHZhbHVlLmNhcmFjdGVyaXN0aXF1ZXMgPT0gXCJcIiB8fFxyXG4gICAgICAgICAgICB2YWx1ZS5pbWcgPT0gXCJcIikge1xyXG5cclxuICAgICAgICAgICAgc2V0QWxlcnRPcGVuKGZhbHNlKVxyXG4gICAgICAgICAgICBzZXRBbGVydE9wZW4odHJ1ZSlcclxuICAgICAgICAgICAgc2V0QWxlcnRJbmZvKCdlcnJvcicpXHJcbiAgICAgICAgICAgIHNldEFsZXJ0TWVzc2FnZShcIlZldWlsbGV6IHJlbXBsaXIgdG91cyBsZXMgY2hhbXBzXCIpXHJcbiAgICAgICAgICAgIEFsZXJ0U2xlZXAoKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgbmV3U3RhdGUgPVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZDogSXRlbXNbSXRlbXMubGVuZ3RoIC0gMV0uaWQgKyAxLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogdmFsdWUubmFtZSxcclxuICAgICAgICAgICAgICAgIGFsdDogdmFsdWUubmFtZSxcclxuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiB2YWx1ZS5jYXRlZ29yeSxcclxuICAgICAgICAgICAgICAgIGVtcGxhY2VtZW50OiB2YWx1ZS5lbXBsYWNlbWVudCxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB2YWx1ZS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgIGNhcmFjdGVyaXN0aXF1ZXM6IHZhbHVlLmNhcmFjdGVyaXN0aXF1ZXMsXHJcbiAgICAgICAgICAgICAgICBpbWc6IHZhbHVlLmltZyxcclxuICAgICAgICAgICAgICAgIGhyZWY6IFwiL21hdGVyaWVsL1wiICsgcmVtb3ZlQWNjZW50cyhDQVRFR09SSUVTLmZpbHRlcihjYXQgPT4gKGNhdC5pZCA9PSB2YWx1ZS5jYXRlZ29yeSkpLm1hcChjYXQgPT4gKGNhdC5uYW1lKSlbMF0pICsgXCIvXCIgKyByZXBsYWNlU3BhY2VzV2l0aERhc2hlcyh2YWx1ZS5uYW1lKSxcclxuICAgICAgICAgICAgICAgIGF2YWlsYWJsZTogdHJ1ZSxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHNldEl0ZW0oKEl0ZW1zKSA9PiBbLi4uSXRlbXMsIG5ld1N0YXRlXSk7XHJcblxyXG4gICAgICAgICAgICBoYW5kbGVDbG9zZSgpO1xyXG5cclxuICAgICAgICAgICAgc2V0QWxlcnRPcGVuKGZhbHNlKVxyXG4gICAgICAgICAgICBzZXRBbGVydE9wZW4odHJ1ZSlcclxuICAgICAgICAgICAgc2V0QWxlcnRJbmZvKCdzdWNjZXNzJylcclxuICAgICAgICAgICAgc2V0QWxlcnRNZXNzYWdlKFwiTGUgbWF0w6lyaWVsIGEgw6l0w6kgYWpvdXTDqSBhdmVjIHN1Y2PDqHNcIilcclxuICAgICAgICAgICAgQWxlcnRTbGVlcCgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0T3Blbih0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD57YWxlcnRPcGVuICYmXHJcbiAgICAgICAgICAgIDxBbGVydCBjbGFzc05hbWU9XCJhbGVydFBvcFVwXCIgc3R5bGU9e3sgekluZGV4OiAnOTk5OScsIHdpZHRoOiBcIjFcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fSBzZXZlcml0eT17QWxlcnRJbmZvfSBjb2xvcj17QWxlcnRJbmZvfT5cclxuICAgICAgICAgICAgICAgIHthbGVydE1lc3NhZ2V9XHJcbiAgICAgICAgICAgIDwvQWxlcnQ+fVxyXG5cclxuICAgICAgICAgICAgPFRvb2x0aXAgaWQ9XCJ0b29sdGlwXCIgdGl0bGU9XCJBam91dGVyXCI+PEljb25CdXR0b24gc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAnMC41cmVtIDBweCcsXHJcbiAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAnYXV0bycsXHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtZW5kJ1xyXG4gICAgICAgICAgICB9fSBvbkNsaWNrPXtoYW5kbGVPcGVufT48QWRkQm94SWNvbiAvPjwvSWNvbkJ1dHRvbj48L1Rvb2x0aXA+XHJcbiAgICAgICAgICAgIDxNb2RhbFxyXG4gICAgICAgICAgICAgICAgb3Blbj17b3Blbn1cclxuICAgICAgICAgICAgICAgIG9uQ2xvc2U9e2hhbmRsZUNsb3NlfVxyXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbGxlZGJ5PVwibW9kYWwtbW9kYWwtdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgYXJpYS1kZXNjcmliZWRieT1cIm1vZGFsLW1vZGFsLWRlc2NyaXB0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICA8Qm94IGNsYXNzTmFtZT1cIm1vZGFsMDFcIj5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBjbGFzc05hbWU9XCJtb2RhbDAxQnV0dG9uXCIgb25DbGljaz17aGFuZGxlQ2xvc2V9PjxDbG9zZUljb24gLz48L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgaWQ9XCJtb2RhbC1tb2RhbC10aXRsZVwiIHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgY2xhc3NOYW1lPVwibW9kYWxFbGVtZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoeyAuLi52YWx1ZSwgbmFtZTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJQcm9kdWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIk5vbSBkdSBwcm9kdWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdGFuZGFyZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgY2xhc3NOYW1lPVwibW9kYWxFbGVtZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKHsgLi4udmFsdWUsIGRlc2NyaXB0aW9uOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIkRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkRlc2NyaXB0aW9uIGR1IHByb2R1aXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZCBjbGFzc05hbWU9XCJtb2RhbEVsZW1lbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlLmNhcmFjdGVyaXN0aXF1ZXN9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZSh7IC4uLnZhbHVlLCBjYXJhY3RlcmlzdGlxdWVzOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIkNhcmFjdMOpcmlzdGlxdWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ2FyYWN0w6lyaXN0aXF1ZSBkdSBwcm9kdWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdGFuZGFyZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgY2xhc3NOYW1lPVwibW9kYWxFbGVtZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS5pbWd9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZSh7IC4uLnZhbHVlLCBpbWc6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cImRlbnNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiSW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiSW1hZ2UgZHUgcHJvZHVpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic3RhbmRhcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPVwibW9kYWxFbGVtZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiPkVtcGxhY2VtZW50PC9JbnB1dExhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHRWYWx1ZT1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKHsgLi4udmFsdWUsIGVtcGxhY2VtZW50OiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNhbGxlIGRlIHN0b2NrYWdlIDFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIlNhbGxlIGRlIHN0b2NrYWdlIDFcIj5TYWxsZSBkZSBzdG9ja2FnZSAxPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJTYWxsZSBkZSBzdG9ja2FnZSAyXCI+U2FsbGUgZGUgc3RvY2thZ2UgMjwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiU2FsbGUgZGUgc3RvY2thZ2UgM1wiPlNhbGxlIGRlIHN0b2NrYWdlIDM8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIlNhbGxlIGRlIHN0b2NrYWdlIDRcIj5TYWxsZSBkZSBzdG9ja2FnZSA0PC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPVwibW9kYWxFbGVtZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiPkNhdMOpZ29yaWU8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdFZhbHVlPVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoeyAuLi52YWx1ZSwgY2F0ZWdvcnk6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWxJZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPVwicsOpc2VhdVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge0NBVEVHT1JJRVMubWFwKGNhdGVnb3J5ID0+IDxNZW51SXRlbSBrZXk9e2NhdGVnb3J5LmlkfSB2YWx1ZT17Y2F0ZWdvcnkuaWR9PntjYXRlZ29yeS5uYW1lfTwvTWVudUl0ZW0+KX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIm1vZGFsRWxlbWVudFwiIG9uQ2xpY2s9e2hhbmRsZUNsaWNrfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiPkFqb3V0ZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPC9Cb3g+XHJcbiAgICAgICAgICAgIDwvTW9kYWw+PC8+XHJcbiAgICApXHJcbn0iLCJpbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbXVpL21hdGVyaWFsL1RleHRGaWVsZCc7XHJcbmltcG9ydCBTZWxlY3QgZnJvbSAnQG11aS9tYXRlcmlhbC9TZWxlY3QnO1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IE1vZGFsIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTW9kYWwnO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2xvc2UnO1xyXG5pbXBvcnQgSW5wdXRMYWJlbCBmcm9tICdAbXVpL21hdGVyaWFsL0lucHV0TGFiZWwnO1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG11aS9tYXRlcmlhbC9NZW51SXRlbSc7XHJcbmltcG9ydCBBZGRCb3hJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvRWRpdCc7XHJcbmltcG9ydCBGb3JtQ29udHJvbCBmcm9tICdAbXVpL21hdGVyaWFsL0Zvcm1Db250cm9sJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZGF0YSBmcm9tICcuLi9jb25zdGFudHMvZGF0YS5qc29uJ1xyXG5pbXBvcnQgVG9vbHRpcCBmcm9tICdAbXVpL21hdGVyaWFsL1Rvb2x0aXAnO1xyXG5pbXBvcnQgQWxlcnQgZnJvbSAnQG11aS9tYXRlcmlhbC9BbGVydCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBtb2RhbCh7IEl0ZW0sIElURU1TLCBzZXRJdGVtIH0pIHtcclxuXHJcblxyXG4gICAgLy9BTEVSVCBNRVNTQUdFXHJcbiAgICBjb25zdCBbYWxlcnRPcGVuLCBzZXRBbGVydE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2FsZXJ0TWVzc2FnZSwgc2V0QWxlcnRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtBbGVydEluZm8sIHNldEFsZXJ0SW5mb10gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3Qgc2xlZXAgPSBhc3luYyAobWlsbGlzZWNvbmRzKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KHJlc29sdmUsIG1pbGxpc2Vjb25kcylcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgQWxlcnRTbGVlcCA9IGFzeW5jICgpID0+IHtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgYXdhaXQgc2xlZXAoMTAwMCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEFsZXJ0T3BlbihmYWxzZSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgQ0FURUdPUklFUyA9IGRhdGEuY2F0ZWdvcmllcztcclxuXHJcbiAgICBjb25zdCBbdmFsdWUsIHNldFZhbHVlXSA9IHVzZVN0YXRlKFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbmFtZTogSXRlbS5uYW1lLFxyXG4gICAgICAgICAgICBjYXRlZ29yeTogSXRlbS5jYXRlZ29yeSxcclxuICAgICAgICAgICAgZW1wbGFjZW1lbnQ6IEl0ZW0uZW1wbGFjZW1lbnQsXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBJdGVtLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICBjYXJhY3RlcmlzdGlxdWVzOiBJdGVtLmNhcmFjdGVyaXN0aXF1ZXMsXHJcbiAgICAgICAgICAgIGltZzogSXRlbS5pbWcsXHJcbiAgICAgICAgfVxyXG4gICAgKTtcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IGFzeW5jICgpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKGFsZXJ0T3BlbiA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICh2YWx1ZS5uYW1lID09IFwiXCIgfHxcclxuICAgICAgICAgICAgdmFsdWUuY2F0ZWdvcnkgPT0gXCJcIiB8fFxyXG4gICAgICAgICAgICB2YWx1ZS5lbXBsYWNlbWVudCA9PSBcIlwiIHx8XHJcbiAgICAgICAgICAgIHZhbHVlLmRlc2NyaXB0aW9uID09IFwiXCIgfHxcclxuICAgICAgICAgICAgdmFsdWUuY2FyYWN0ZXJpc3RpcXVlcyA9PSBcIlwiIHx8XHJcbiAgICAgICAgICAgIHZhbHVlLmltZyA9PSBcIlwiKSB7XHJcblxyXG4gICAgICAgICAgICBzZXRBbGVydE9wZW4oZmFsc2UpXHJcbiAgICAgICAgICAgIHNldEFsZXJ0T3Blbih0cnVlKVxyXG4gICAgICAgICAgICBzZXRBbGVydEluZm8oJ2Vycm9yJylcclxuICAgICAgICAgICAgc2V0QWxlcnRNZXNzYWdlKFwiVmV1aWxsZXogcmVtcGxpciB0b3VzIGxlcyBjaGFtcHNcIilcclxuICAgICAgICAgICAgQWxlcnRTbGVlcCgpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBjb25zdCBuZXdTdGF0ZSA9IElURU1TLm1hcChvYmogPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9iai5pZCA9PT0gSXRlbS5pZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLm9iaixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogdmFsdWUubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2F0ZWdvcnk6IHZhbHVlLmNhdGVnb3J5LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbXBsYWNlbWVudDogdmFsdWUuZW1wbGFjZW1lbnQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB2YWx1ZS5kZXNjcmlwdGlvbixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FyYWN0ZXJpc3RpcXVlczogdmFsdWUuY2FyYWN0ZXJpc3RpcXVlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nOiB2YWx1ZS5pbWdcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBzZXRJdGVtKG5ld1N0YXRlKTtcclxuXHJcbiAgICAgICAgICAgIGhhbmRsZUNsb3NlKCk7XHJcblxyXG4gICAgICAgICAgICBzZXRBbGVydE9wZW4oZmFsc2UpXHJcbiAgICAgICAgICAgIHNldEFsZXJ0T3Blbih0cnVlKVxyXG4gICAgICAgICAgICBzZXRBbGVydEluZm8oJ3N1Y2Nlc3MnKVxyXG4gICAgICAgICAgICBzZXRBbGVydE1lc3NhZ2UoXCJMZSBtYXTDqXJpZWwgYSDDqXTDqSBtb2RpZmnDqSBhdmVjIHN1Y2PDqHNcIilcclxuICAgICAgICAgICAgQWxlcnRTbGVlcCgpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0T3Blbih0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcbiAgICB9O1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD57YWxlcnRPcGVuICYmXHJcbiAgICAgICAgICAgIDxBbGVydCBjbGFzc05hbWU9XCJhbGVydFBvcFVwXCIgc3R5bGU9e3sgekluZGV4OiAnOTk5OScsIHdpZHRoOiBcIjFcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fSBzZXZlcml0eT17QWxlcnRJbmZvfSBjb2xvcj17QWxlcnRJbmZvfT5cclxuICAgICAgICAgICAgICAgIHthbGVydE1lc3NhZ2V9XHJcbiAgICAgICAgICAgIDwvQWxlcnQ+fVxyXG4gICAgICAgICAgICA8VG9vbHRpcCBpZD1cInRvb2x0aXBcIiB0aXRsZT1cIkVkaXRlclwiPjxJY29uQnV0dG9uIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogJzAuNXJlbSAwcHgnLFxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCdcclxuICAgICAgICAgICAgfX0gb25DbGljaz17aGFuZGxlT3Blbn0+PEFkZEJveEljb24gLz48L0ljb25CdXR0b24+PC9Ub29sdGlwPlxyXG4gICAgICAgICAgICA8TW9kYWwgY2xhc3NOYW1lPSdNb2RhbCdcclxuICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9XCJtb2RhbDAxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gY2xhc3NOYW1lPVwibW9kYWwwMUJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT48Q2xvc2VJY29uIC8+PC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGlkPVwibW9kYWwtbW9kYWwtdGl0bGVcIiB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzTmFtZT1cIm1vZGFsRWxlbWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKHsgLi4udmFsdWUsIG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cImRlbnNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiUHJvZHVpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJOb20gZHUgcHJvZHVpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic3RhbmRhcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzTmFtZT1cIm1vZGFsRWxlbWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZSh7IC4uLnZhbHVlLCBkZXNjcmlwdGlvbjogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJEZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJEZXNjcmlwdGlvbiBkdSBwcm9kdWl0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJzdGFuZGFyZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGQgY2xhc3NOYW1lPVwibW9kYWxFbGVtZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZS5jYXJhY3RlcmlzdGlxdWVzfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoeyAuLi52YWx1ZSwgY2FyYWN0ZXJpc3RpcXVlczogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9XCJDYXJhY3TDqXJpc3RpcXVlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNhcmFjdMOpcmlzdGlxdWUgZHUgcHJvZHVpdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwic3RhbmRhcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkIGNsYXNzTmFtZT1cIm1vZGFsRWxlbWVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUuaW1nfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0VmFsdWUoeyAuLi52YWx1ZSwgaW1nOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJkZW5zZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cIkltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkltYWdlIGR1IHByb2R1aXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZvcm1Db250cm9sIGNsYXNzTmFtZT1cIm1vZGFsRWxlbWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPElucHV0TGFiZWwgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIj5FbXBsYWNlbWVudDwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxTZWxlY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dmFsdWUuZW1wbGFjZW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFZhbHVlKHsgLi4udmFsdWUsIGVtcGxhY2VtZW50OiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIlNhbGxlIGRlIHN0b2NrYWdlIDFcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIlNhbGxlIGRlIHN0b2NrYWdlIDFcIj5TYWxsZSBkZSBzdG9ja2FnZSAxPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TWVudUl0ZW0gdmFsdWU9XCJTYWxsZSBkZSBzdG9ja2FnZSAyXCI+U2FsbGUgZGUgc3RvY2thZ2UgMjwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIHZhbHVlPVwiU2FsbGUgZGUgc3RvY2thZ2UgM1wiPlNhbGxlIGRlIHN0b2NrYWdlIDM8L01lbnVJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZW51SXRlbSB2YWx1ZT1cIlNhbGxlIGRlIHN0b2NrYWdlIDRcIj5TYWxsZSBkZSBzdG9ja2FnZSA0PC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0Zvcm1Db250cm9sPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2wgY2xhc3NOYW1lPVwibW9kYWxFbGVtZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiPkNhdMOpZ29yaWU8L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlLmNhdGVnb3J5fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRWYWx1ZSh7IC4uLnZhbHVlLCBjYXRlZ29yeTogZS50YXJnZXQudmFsdWUgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbElkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJyw6lzZWF1XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Q0FURUdPUklFUy5tYXAoY2F0ZWdvcnkgPT4gPE1lbnVJdGVtIGtleT17Y2F0ZWdvcnkuaWR9IHZhbHVlPXtjYXRlZ29yeS5pZH0+e2NhdGVnb3J5Lm5hbWV9PC9NZW51SXRlbT4pfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9TZWxlY3Q+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvRm9ybUNvbnRyb2w+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwibW9kYWxFbGVtZW50XCIgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCI+w4lkaXRlclxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L0JveD5cclxuICAgICAgICAgICAgPC9Nb2RhbD48Lz5cclxuICAgIClcclxufSIsImltcG9ydCBCdXR0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9CdXR0b24nO1xyXG5pbXBvcnQgQm94IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQm94JztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG11aS9tYXRlcmlhbC9UeXBvZ3JhcGh5JztcclxuaW1wb3J0IE1vZGFsIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTW9kYWwnO1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0ljb25CdXR0b24nO1xyXG5pbXBvcnQgQ2xvc2VJY29uIGZyb20gJ0BtdWkvaWNvbnMtbWF0ZXJpYWwvQ2xvc2UnO1xyXG5pbXBvcnQgQWRkQm94SWNvbiBmcm9tICdAbXVpL2ljb25zLW1hdGVyaWFsL0hpZ2hsaWdodE9mZic7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IFRvb2x0aXAgZnJvbSAnQG11aS9tYXRlcmlhbC9Ub29sdGlwJztcclxuaW1wb3J0IEFsZXJ0IGZyb20gJ0BtdWkvbWF0ZXJpYWwvQWxlcnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbW9kYWwoeyBJdGVtLCBJVEVNUywgc2V0SXRlbSB9KSB7XHJcblxyXG4gICAgLy9BTEVSVCBNRVNTQUdFXHJcbiAgICBjb25zdCBbYWxlcnRPcGVuLCBzZXRBbGVydE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2FsZXJ0TWVzc2FnZSwgc2V0QWxlcnRNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKTtcclxuICAgIGNvbnN0IFtBbGVydEluZm8sIHNldEFsZXJ0SW5mb10gPSB1c2VTdGF0ZSgnJyk7XHJcblxyXG4gICAgY29uc3Qgc2xlZXAgPSBhc3luYyAobWlsbGlzZWNvbmRzKSA9PiB7XHJcbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiBzZXRUaW1lb3V0KHJlc29sdmUsIG1pbGxpc2Vjb25kcylcclxuICAgICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgQWxlcnRTbGVlcCA9IGFzeW5jICgpID0+IHtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcclxuICAgICAgICAgICAgYXdhaXQgc2xlZXAoMTAwMCk7XHJcbiAgICAgICAgICAgIGRlbGV0ZUJ5SWQoSXRlbS5pZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldEFsZXJ0T3BlbihmYWxzZSlcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgZGVsZXRlQnlJZCA9IGlkID0+IHtcclxuICAgICAgICBzZXRJdGVtKElURU1TLmZpbHRlcihJdGVtID0+IEl0ZW0uaWQgIT09IGlkKSlcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljayA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG5cclxuICAgICAgICAgICAgaWYgKGFsZXJ0T3BlbiA9PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGhhbmRsZUNsb3NlKCk7XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG5cclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICAgIGNvbnN0IGhhbmRsZU9wZW4gPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0T3Blbih0cnVlKTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0T3BlbihmYWxzZSk7XHJcblxyXG4gICAgICAgIHNldEFsZXJ0T3BlbihmYWxzZSlcclxuICAgICAgICBzZXRBbGVydE9wZW4odHJ1ZSlcclxuICAgICAgICBzZXRBbGVydEluZm8oJ2luZm8nKVxyXG4gICAgICAgIHNldEFsZXJ0TWVzc2FnZShcIlN1cHJyZXNzaW9uIGR1IG1hdMOpcmllbCBlbiBjb3Vycy4uLlwiKVxyXG4gICAgICAgIEFsZXJ0U2xlZXAoKTtcclxuICAgICAgICBcclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PnthbGVydE9wZW4gJiZcclxuICAgICAgICAgICAgPEFsZXJ0IGNsYXNzTmFtZT1cImFsZXJ0UG9wVXBcIiBzdHlsZT17eyB6SW5kZXg6ICc5OTk5Jywgd2lkdGg6IFwiMVwiLCBoZWlnaHQ6IFwiMTAwJVwiIH19IHNldmVyaXR5PXtBbGVydEluZm99IGNvbG9yPXtBbGVydEluZm99PlxyXG4gICAgICAgICAgICAgICAge2FsZXJ0TWVzc2FnZX1cclxuICAgICAgICAgICAgPC9BbGVydD59XHJcblxyXG4gICAgICAgICAgICA8VG9vbHRpcCBpZD1cInRvb2x0aXBcIiB0aXRsZT1cIlN1cHByaW1lclwiPjxJY29uQnV0dG9uIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogJzAuNXJlbSAwcHgnLFxyXG4gICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogJ2F1dG8nLFxyXG4gICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LWVuZCdcclxuICAgICAgICAgICAgfX0gb25DbGljaz17aGFuZGxlT3Blbn0+PEFkZEJveEljb24gLz48L0ljb25CdXR0b24+PC9Ub29sdGlwPlxyXG4gICAgICAgICAgICA8TW9kYWxcclxuICAgICAgICAgICAgICAgIG9wZW49e29wZW59XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICAgICAgICAgIGFyaWEtbGFiZWxsZWRieT1cIm1vZGFsLW1vZGFsLXRpdGxlXCJcclxuICAgICAgICAgICAgICAgIGFyaWEtZGVzY3JpYmVkYnk9XCJtb2RhbC1tb2RhbC1kZXNjcmlwdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgPEJveCBjbGFzc05hbWU9XCJtb2RhbDAxXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gY2xhc3NOYW1lPVwibW9kYWwwMUJ1dHRvblwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT48Q2xvc2VJY29uIC8+PC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT1cIm1vZGFsRWxlbWVudFwiIGlkPVwibW9kYWwtbW9kYWwtdGl0bGVcIiB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6ICcxNHB4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fT5Wb3VsZXotdm91cyBzdXBwcmltZXIge0l0ZW0ubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwibW9kYWxFbGVtZW50XCIgb25DbGljaz17aGFuZGxlQ2xpY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cIm91dGxpbmVkXCI+U3VwcHJpbWVyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvQm94PlxyXG4gICAgICAgICAgICA8L01vZGFsPjwvPlxyXG4gICAgKVxyXG59IiwiaW1wb3J0IEJ1dHRvbiBmcm9tICdAbXVpL21hdGVyaWFsL0J1dHRvbic7XHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtdWkvbWF0ZXJpYWwvTGluayc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBuYXZiYXIoKSB7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJsZWZ0TmF2XCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ9XCJiZ0ltZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2J1aWxkL2ltYWdlcy9kaWdpdGxpZ2h0LnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwiZGlnaWxpZ2h0IHBpY3R1cmVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MDB9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hY2N1ZWlsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdUZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2J1aWxkL2ltYWdlcy9uYXZiYXIvbWF0ZXJpYWwucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJtYXRlcmlhbCBwaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17NTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwPk1hdMOpcmllbDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJQYW5lbE1hdGVyaWVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9tYXRlcmllbC9yZXNlYXVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ViQnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nVGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2J1aWxkL2ltYWdlcy9uYXZiYXIvcmVzZWF1LnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInJlc2VhdSBwaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Sw6lzZWF1PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9tYXRlcmllbC90ZWxlcGhvbmlxdWVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3ViQnRuXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1nVGV4dFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2J1aWxkL2ltYWdlcy9uYXZiYXIvdGVsZXBob25lLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInRlbGVwaG9uZSBwaWN0dXJlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezUwMH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5Uw6lsw6lwaG9uaXF1ZTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbWF0ZXJpZWwvZGVza3RvcFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdWJCdG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdUZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYnVpbGQvaW1hZ2VzL25hdmJhci9kZXNrdG9wLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cImRlc2t0b3AgcGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+RGVza3RvcDwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvbWF0ZXJpZWwvcmV1bmlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdWJCdG5cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJvdXRsaW5lZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpbWdUZXh0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCIvYnVpbGQvaW1hZ2VzL25hdmJhci9yZXVuaW9uLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cInJldW5pb24gcGljdHVyZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MDB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTAwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHA+UsOpdW5pb248L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PilcclxufSIsIi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogV2UgcmVjb21tZW5kIGluY2x1ZGluZyB0aGUgYnVpbHQgdmVyc2lvbiBvZiB0aGlzIEphdmFTY3JpcHQgZmlsZVxuICogKGFuZCBpdHMgQ1NTIGZpbGUpIGluIHlvdXIgYmFzZSBsYXlvdXQgKGJhc2UuaHRtbC50d2lnKS5cbiAqL1xuXG4vLyBhbnkgQ1NTIHlvdSBpbXBvcnQgd2lsbCBvdXRwdXQgaW50byBhIHNpbmdsZSBjc3MgZmlsZSAoYXBwLmNzcyBpbiB0aGlzIGNhc2UpXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWwuY3NzJztcblxuLy8gc3RhcnQgdGhlIFN0aW11bHVzIGFwcGxpY2F0aW9uXG5pbXBvcnQgJy4uL2pzL2Jvb3RzdHJhcCc7XG5cbmltcG9ydCB7IHJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyB9IGZyb20gJ0BzeW1mb255L3V4LXJlYWN0JztcbnJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyhyZXF1aXJlLmNvbnRleHQoJy4uL3JlYWN0L2NvbnRyb2xsZXJzJywgdHJ1ZSwgL1xcLihqfHQpc3g/JC8pKTsiLCJpbXBvcnQgeyBzdGFydFN0aW11bHVzQXBwIH0gZnJvbSAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlJztcblxuLy8gUmVnaXN0ZXJzIFN0aW11bHVzIGNvbnRyb2xsZXJzIGZyb20gY29udHJvbGxlcnMuanNvbiBhbmQgaW4gdGhlIGNvbnRyb2xsZXJzLyBkaXJlY3RvcnlcbmV4cG9ydCBjb25zdCBhcHAgPSBzdGFydFN0aW11bHVzQXBwKHJlcXVpcmUuY29udGV4dChcbiAgICAnQHN5bWZvbnkvc3RpbXVsdXMtYnJpZGdlL2xhenktY29udHJvbGxlci1sb2FkZXIhLi4vY29udHJvbGxlcnMnLFxuICAgIHRydWUsXG4gICAgL1xcLltqdF1zeD8kL1xuKSk7XG5cbi8vIHJlZ2lzdGVyIGFueSBjdXN0b20sIDNyZCBwYXJ0eSBjb250cm9sbGVycyBoZXJlXG4vLyBhcHAucmVnaXN0ZXIoJ3NvbWVfY29udHJvbGxlcl9uYW1lJywgU29tZUltcG9ydGVkQ29udHJvbGxlcik7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IExpbmsgZnJvbSAnQG11aS9tYXRlcmlhbC9MaW5rJztcbmltcG9ydCBOYXZiYXIgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9uYXZiYXInXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvY29weXJpZ2h0J1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgTG9hZGluZ0NvbXAgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9sb2FkaW5nJ1xuaW1wb3J0IEl0ZW0gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9tYXRlcmllbCdcbmltcG9ydCBJdGVtU3RhdHMgZnJvbSAnLi4vLi4vY29tcG9uZW50cy9pdGVtU3RhdHMnXG5pbXBvcnQgZGF0YSBmcm9tICcuLi8uLi9jb25zdGFudHMvZGF0YS5qc29uJ1xuaW1wb3J0IFNrZWxldG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvU2tlbGV0b24nO1xuaW1wb3J0IE1vZGFsYnV0dG9uIGZyb20gJy4uLy4uL2NvbXBvbmVudHMvbW9kYWxfYWpvdXQnO1xuXG5mdW5jdGlvbiByYW5kb21UaW1lKG1pbiwgbWF4KSB7IC8vIG1pbiBhbmQgbWF4IGluY2x1ZGVkIFxuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKVxufVxuXG5mdW5jdGlvbiBBbGxJdGVtcyh7IHBhZ2UsIGxvYWRpbmcsIGZpbHRlciwgc2V0RmlsdGVyLCBJdGVtcywgc2V0SXRlbSwgQ0FURUdPUklFUyB9KSB7XG5cbiAgY29uc3QgU2tlbGV0b25CcmVhZGNydW1iID0gKCkgPT4gKFxuICAgIDxzcGFuIHN0eWxlPXt7XG4gICAgICBoZWlnaHQ6ICc0JScsXG4gICAgfX0+XG4gICAgICA8U2tlbGV0b24gdmFyaWFudD1cInRleHRcIlxuICAgICAgICB3aWR0aD1cIjMwJVwiXG4gICAgICAgIGhlaWdodD0nODAlJ1xuICAgICAgICBzeD17e1xuICAgICAgICAgIG1hcmdpbkxlZnQ6ICc1JScsXG4gICAgICAgICAgbWFyZ2luVG9wOiAnMS41JScsXG4gICAgICAgIH19IC8+XG4gICAgPC9zcGFuPilcblxuICBjb25zdCBTa2VsZXRvbkl0ZW0gPSAoKSA9PiAoXG4gICAgPFNrZWxldG9uIHZhcmlhbnQ9XCJyb3VuZGVkXCJcbiAgICAgIHdpZHRoPVwiNDUlXCJcbiAgICAgIGhlaWdodD0nMTUlJ1xuICAgICAgc3g9e3tcbiAgICAgICAgbWFyZ2luTGVmdDogJzElJyxcbiAgICAgICAgbWFyZ2luVG9wOiAnMyUnLFxuICAgICAgfX0gLz4pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2xvYWRpbmcgPyAoPD5cblxuICAgICAgICA8U2tlbGV0b25CcmVhZGNydW1iIC8+XG4gICAgICAgIHtbLi4uQXJyYXkoOCkua2V5cygpXS5tYXAoKGl0ZW0pID0+ICg8U2tlbGV0b25JdGVtIGtleT17aXRlbX0gLz4pKX1cblxuICAgICAgPC8+KSA6XG4gICAgICAgICg8PjxJdGVtU3RhdHMgQ2F0ZWdvcnk9e3BhZ2V9IEZpbHRlcj17ZmlsdGVyfSBvbkNhdENoYW5nZT17KGNhdGVnb3JpZSkgPT4gc2V0RmlsdGVyKGNhdGVnb3JpZSl9IElURU1TPXtJdGVtc30gQ0FUPXtDQVRFR09SSUVTfSAvPlxuICAgICAgICAgIHtpdGVtcyhwYWdlLCBmaWx0ZXIsIEl0ZW1zLCBzZXRJdGVtLCBDQVRFR09SSUVTKX1cbiAgICAgICAgPC8+KX1cbiAgICA8Lz5cbiAgKVxufVxuXG5jb25zdCBpdGVtcyA9IGZ1bmN0aW9uIChDYXRlZ29yeSwgZmlsdGVyVmFsdWUsIElURU1TLCBzZXRJdGVtLCBDQVRFR09SSUVTKSB7XG5cbiAgaWYgKGZpbHRlclZhbHVlICE9IDApIHtcbiAgICByZXR1cm4gSVRFTVNcbiAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLmNhdGVnb3J5ID09IGZpbHRlclZhbHVlKVxuICAgICAgLm1hcChpdGVtID0+XG4gICAgICAgIDxJdGVtXG4gICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgSVRFTVM9e0lURU1TfVxuICAgICAgICAgIHNldEl0ZW09e3NldEl0ZW19XG4gICAgICAgICAgY2F0PXsoQ0FURUdPUklFUy5maWx0ZXIoY2F0ID0+IChjYXQuaWQgPT09IGl0ZW0uY2F0ZWdvcnkpKS5tYXAoY2F0ID0+IChjYXQubmFtZSkpKX0gLz4pXG4gIH1cblxuICBpZiAoQ2F0ZWdvcnkgPT0gbnVsbCB8fCBDYXRlZ29yeSA9PSAnJyB8fCBDYXRlZ29yeSA9PSAnMCcpIHtcblxuICAgIHJldHVybiBJVEVNU1xuICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0uYXZhaWxhYmxlKVxuICAgICAgLm1hcChpdGVtID0+IChcbiAgICAgICAgPEl0ZW1cbiAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgICBJVEVNUz17SVRFTVN9XG4gICAgICAgICAgc2V0SXRlbT17c2V0SXRlbX1cbiAgICAgICAgICBjYXQ9eyhDQVRFR09SSUVTLmZpbHRlcihjYXQgPT4gKGNhdC5pZCA9PT0gaXRlbS5jYXRlZ29yeSkpLm1hcChjYXQgPT4gKGNhdC5uYW1lKSkpfVxuICAgICAgICAvPikpXG4gIH1cblxuICBlbHNlIHtcbiAgICByZXR1cm4gSVRFTVNcbiAgICAgIC5maWx0ZXIoaXRlbSA9PiAoQ0FURUdPUklFUy5maWx0ZXIoY2F0ID0+IChjYXQuaWQgPT09IGl0ZW0uY2F0ZWdvcnkpKS5tYXAoY2F0ID0+IChjYXQubmFtZSkpKSA9PSBDYXRlZ29yeSlcbiAgICAgIC5tYXAoKGl0ZW0pID0+XG4gICAgICAoPEl0ZW1cbiAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICBJVEVNUz17SVRFTVN9XG4gICAgICAgIGNhdD17KENBVEVHT1JJRVMuZmlsdGVyKGNhdCA9PiAoY2F0LmlkID09PSBpdGVtLmNhdGVnb3J5KSkubWFwKGNhdCA9PiAoY2F0Lm5hbWUpKSl9XG4gICAgICAvPlxuICAgICAgKSlcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBY2N1ZWlsKCkge1xuXG4gIGNvbnN0IElURU1TID0gZGF0YS5pdGVtcztcbiAgY29uc3QgQ0FURUdPUklFUyA9IGRhdGEuY2F0ZWdvcmllcztcblxuICBjb25zdCBbSXRlbXMsIHNldEl0ZW1dID0gdXNlU3RhdGUoSVRFTVMpO1xuXG4gIGNvbnN0IFtmaWx0ZXIsIHNldEZpbHRlcl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgfSwgcmFuZG9tVGltZSg4MDAsIDEwMDApKVxuICB9LCBbXSlcblxuICBmdW5jdGlvbiByZW1vdmVPcGFjaXR5KCkge1xuXG4gICAgdmFyIGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1haW5cIik7XG4gICAgaWYgKGVsZW0pIHtcbiAgICAgIGVsZW0uc3R5bGUub3BhY2l0eSA9IDE7XG4gICAgfVxuXG4gICAgZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9hZGluZ1wiKTtcbiAgICBpZiAoZWxlbSkge1xuICAgICAgZWxlbS5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8TG9hZGluZ0NvbXAgLz5cbiAgICAgIDxtYWluIGlkPVwibWFpblwiIGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG4gICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJwYW5lbEhlYWRlclwiPlxuICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImJyZWFkY3J1bWJcIj5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWNjdWVpbFwiPlxuICAgICAgICAgICAgICAgICAgQWNjdWVpbFxuICAgICAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICAgIE1hdGVyaWVsXG4gICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICA8TW9kYWxidXR0b24gSXRlbXM9e0l0ZW1zfSBzZXRJdGVtPXtzZXRJdGVtfS8+XG5cbiAgICAgICAgICA8L2hlYWRlcj5cblxuICAgICAgICAgIDxOYXZiYXIgLz5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxBbGxJdGVtcyBwYWdlPVwiXCIgbG9hZGluZz17bG9hZGluZ30gZmlsdGVyPXtmaWx0ZXJ9IHNldEZpbHRlcj17c2V0RmlsdGVyfSBJdGVtcz17SXRlbXN9IHNldEl0ZW09e3NldEl0ZW19IENBVEVHT1JJRVM9e0NBVEVHT1JJRVN9IC8+XG4gICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cblxuICAgICAge2xvYWRpbmcgPyAoPD48Lz4pIDpcbiAgICAgICAgKDw+e3JlbW92ZU9wYWNpdHkoKX08Lz4pfVxuICAgIDwvPlxuICApXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvQnV0dG9uJztcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbXVpL21hdGVyaWFsL1RleHRGaWVsZCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWFpblwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFuZWxMZWZ0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxlZnRGb3JtXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGVmdEZvcm1Db250cm9sXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIvYnVpbGQvaW1hZ2VzL2RpZ2l0bGlnaHQuc3ZnXCIgYWx0PVwiRGlnaXRMaWdodFwiIHdpZHRoPVwiNTAwXCIgaGVpZ2h0PVwiNTAwXCIgLz5cclxuICAgICAgICAgICAgICA8aDM+TGUgZ2VzdGlvbm5haXJlIGRlIHLDqXNlcnZhdGlvbiBldCBkZSBwcsOocyBkZSBtYXTDqXJpZWxzIGNlbnRyYWxpc8OpczwvaDM+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYW5lbFJpZ2h0XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJpZ2h0Rm9ybVwiPlxyXG4gICAgICAgICAgICA8Zm9ybT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsUmlnaHRUaXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGgzPkNvbm5leGlvbjwvaDM+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJsb2dpblwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJJZGVudGlmaWFudFwiXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwic3RhbmRhcmRcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwiZGVuc2VcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJNb3QgZGUgcGFzc2VcIlxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwib3V0bGluZWRcIj5TZSBjb25uZWN0ZXJcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBhbmVsUmlnaHRDb250cm9sXCI+XHJcbiAgICAgICAgICAgICAgICA8YT5Wb3VzIGF2ZXogYmVzb2luIGQnYWlkZSA/Jm5ic3A7PC9hPlxyXG4gICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIm1haWx0bzpjb3JhbnRpbi5iZXJnZXJAaG90bWFpbC5jb21cIlxyXG4gICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgICAgICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICAgICAgICAgID5Db250YWN0ZXotbm91czwvYT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvbWFpbj5cclxuICAgIDwvPlxyXG4gIClcclxufSIsImltcG9ydCBOYXZiYXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9uYXZiYXInO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29weXJpZ2h0JztcbmltcG9ydCBJdGVtIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbWF0ZXJpZWwnXG5pbXBvcnQgSXRlbVN0YXRzIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvaXRlbVN0YXRzJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZGF0YSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMvZGF0YS5qc29uJ1xuaW1wb3J0IFNrZWxldG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvU2tlbGV0b24nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gcmFuZG9tVGltZShtaW4sIG1heCkgeyAvLyBtaW4gYW5kIG1heCBpbmNsdWRlZCBcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbilcbn1cblxuZnVuY3Rpb24gYWxsSXRlbXMocGFnZSkge1xuXG4gIGNvbnN0IElURU1TID0gZGF0YS5pdGVtcztcbiAgY29uc3QgQ0FURUdPUklFUyA9IGRhdGEuY2F0ZWdvcmllcztcblxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gIGNvbnN0IFtJdGVtcywgc2V0SXRlbV0gPSB1c2VTdGF0ZShJVEVNUyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgfSwgcmFuZG9tVGltZSg1MDAsIDEwMDApKVxuICB9LCBbXSlcblxuICBjb25zdCBTa2VsZXRvbkJyZWFkY3J1bWIgPSAoKSA9PiAoXG4gICAgPHNwYW4gc3R5bGU9e3tcbiAgICAgIGhlaWdodDogJzQlJyxcbiAgICB9fT5cbiAgICAgIDxTa2VsZXRvbiB2YXJpYW50PVwidGV4dFwiXG4gICAgICAgIHdpZHRoPVwiMzAlXCJcbiAgICAgICAgaGVpZ2h0PSc4MCUnXG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgbWFyZ2luTGVmdDogJzUlJyxcbiAgICAgICAgICBtYXJnaW5Ub3A6ICcxLjUlJyxcbiAgICAgICAgfX0gLz5cbiAgICA8L3NwYW4+KVxuXG4gIGNvbnN0IFNrZWxldG9uSXRlbSA9ICgpID0+IChcbiAgICA8U2tlbGV0b24gdmFyaWFudD1cInJvdW5kZWRcIlxuICAgICAgd2lkdGg9XCI0NSVcIlxuICAgICAgaGVpZ2h0PScxNSUnXG4gICAgICBzeD17e1xuICAgICAgICBtYXJnaW5MZWZ0OiAnMSUnLFxuICAgICAgICBtYXJnaW5Ub3A6ICczJScsXG4gICAgICB9fSAvPilcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7bG9hZGluZyA/ICg8PlxuXG4gICAgICAgIDxTa2VsZXRvbkJyZWFkY3J1bWIgLz5cbiAgICAgICAge1suLi5BcnJheSg4KS5rZXlzKCldLm1hcCgoaXRlbSkgPT4gKDxTa2VsZXRvbkl0ZW0ga2V5PXtpdGVtfSAvPikpfVxuXG4gICAgICA8Lz4pIDogKDw+XG4gICAgICAgIDxJdGVtU3RhdHMgQ2F0ZWdvcnk9e3BhZ2V9IElURU1TPXtJdGVtc30gQ0FUPXtDQVRFR09SSUVTfSAvPlxuICAgICAgICB7aXRlbXMocGFnZSwgSXRlbXMsIHNldEl0ZW0sIENBVEVHT1JJRVMpfVxuICAgICAgPC8+KX1cbiAgICA8Lz5cbiAgKVxufVxuXG5jb25zdCBpdGVtcyA9IGZ1bmN0aW9uIChDYXRlZ29yeSwgSVRFTVMsIHNldEl0ZW0sIENBVEVHT1JJRVMpIHtcbiAgY29uc29sZS5sb2coQ2F0ZWdvcnkpXG5cbiAgaWYgKENhdGVnb3J5ID09IG51bGwgfHwgQ2F0ZWdvcnkgPT0gJycpIHtcbiAgICB7XG4gICAgICByZXR1cm4gSVRFTVNcbiAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0uYXZhaWxhYmxlKVxuICAgICAgICAubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgIDxJdGVtXG4gICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICAgICAgSVRFTVM9e0lURU1TfVxuICAgICAgICAgICAgc2V0SXRlbT17c2V0SXRlbX1cbiAgICAgICAgICAgIGNhdD17KENBVEVHT1JJRVMuZmlsdGVyKGNhdCA9PiAoY2F0LmlkID09PSBpdGVtLmNhdGVnb3J5KSkubWFwKGNhdCA9PiAoY2F0Lm5hbWUpKSl9XG4gICAgICAgICAgLz4pKVxuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICB7XG4gICAgICByZXR1cm4gSVRFTVNcbiAgICAgICAgLmZpbHRlcihpdGVtID0+IChDQVRFR09SSUVTLmZpbHRlcihjYXQgPT4gKGNhdC5pZCA9PT0gaXRlbS5jYXRlZ29yeSkpLm1hcChjYXQgPT4gKGNhdC5uYW1lKSkpID09IENhdGVnb3J5KVxuICAgICAgICAubWFwKChpdGVtKSA9PlxuICAgICAgICAoPEl0ZW1cbiAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgICBJVEVNUz17SVRFTVN9XG4gICAgICAgICAgc2V0SXRlbT17c2V0SXRlbX1cbiAgICAgICAgICBjYXQ9eyhDQVRFR09SSUVTLmZpbHRlcihjYXQgPT4gKGNhdC5pZCA9PT0gaXRlbS5jYXRlZ29yeSkpLm1hcChjYXQgPT4gKGNhdC5uYW1lKSkpfVxuICAgICAgICAvPlxuICAgICAgICApKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXNrdG9wKCkge1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG5cbiAgICAgICAgICA8SGVhZGVyIHRpdGxlPVwiRGVza3RvcFwiIGl0ZW09XCJcIiAvPlxuICAgICAgICAgIDxOYXZiYXIgLz5cblxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAge2FsbEl0ZW1zKFwiZGVza3RvcFwiKX1cbiAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApXG59IiwiaW1wb3J0IE5hdmJhciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL25hdmJhcic7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb3B5cmlnaHQnO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzL2RhdGEuanNvbidcbmltcG9ydCBJdGVtIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbWF0ZXJpZWxfZGV0YWlscydcbmltcG9ydCBTa2VsZXRvbiBmcm9tICdAbXVpL21hdGVyaWFsL1NrZWxldG9uJztcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gcmFuZG9tVGltZShtaW4sIG1heCkgeyAvLyBtaW4gYW5kIG1heCBpbmNsdWRlZCBcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbilcbn1cblxuY29uc3QgY2FwaXRhbGl6ZVdvcmRzID0gKHN0cikgPT4ge1xuICByZXR1cm4gc3RyXG4gICAgLnRvTG93ZXJDYXNlKClcbiAgICAuc3BsaXQoJyAnKVxuICAgIC5tYXAoKHdvcmQpID0+IHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnNsaWNlKDEpKVxuICAgIC5qb2luKCcgJykubm9ybWFsaXplKFwiTkZEXCIpLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csIFwiXCIpLnJlcGxhY2VBbGwoJy0nLCBcIiBcIikudG9Mb3dlckNhc2UoKTtcbn07XG5cbmNvbnN0IGl0ZW1EZXRhaWwgPSBmdW5jdGlvbiAoaXRlbU5hbWUpIHtcblxuICBjb25zdCBJVEVNUyA9IGRhdGEuaXRlbXM7XG4gIGNvbnN0IENBVEVHT1JJRVMgPSBkYXRhLmNhdGVnb3JpZXM7XG5cbiAgcmV0dXJuIElURU1TXG4gICAgLmZpbHRlcihpdGVtID0+IGNhcGl0YWxpemVXb3JkcyhpdGVtLm5hbWUpID09IGNhcGl0YWxpemVXb3JkcyhpdGVtTmFtZSkpXG4gICAgLm1hcCgoaXRlbSkgPT5cbiAgICAoPEl0ZW1cbiAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgIGl0ZW09e2l0ZW19XG4gICAgICBjYXQ9eyhDQVRFR09SSUVTLmZpbHRlcihjYXQgPT4gKGNhdC5pZCA9PT0gaXRlbS5jYXRlZ29yeSkpLm1hcChjYXQgPT4gKGNhdC5uYW1lKSkpfVxuICAgIC8+XG4gICAgKSlcbn1cblxuZnVuY3Rpb24gaXRlbUluZm8oaXRlbU5hbWUpIHtcblxuICBjb25zdCBJdGVtSW1hZ2UgPSAoKSA9PiAoXG4gICAgPFNrZWxldG9uXG4gICAgICBhbmltYXRpb249XCJ3YXZlXCJcbiAgICAgIHZhcmlhbnQ9XCJyb3VuZGVkXCJcbiAgICAgIHdpZHRoPVwiODAlXCJcbiAgICAgIGhlaWdodD0nNTUlJ1xuICAgICAgc3g9e3tcbiAgICAgICAgbWFyZ2luTGVmdDogJzEwJScsXG4gICAgICB9fSAvPilcblxuICBjb25zdCBUZXh0VGl0bGUgPSAoKSA9PiAoXG4gICAgPFNrZWxldG9uXG4gICAgICB2YXJpYW50PVwicm91bmRlZFwiXG4gICAgICB3aWR0aD1cIjUwJVwiXG4gICAgICBoZWlnaHQ9JzMlJ1xuICAgICAgc3g9e3tcbiAgICAgICAgbWFyZ2luTGVmdDogJzEwJScsXG4gICAgICAgIG1hcmdpblRvcDogJzElJyxcbiAgICAgIH19IC8+KVxuXG4gIGNvbnN0IFRleHREZXNjcmlwdGlvbiA9ICgpID0+IChcbiAgICA8U2tlbGV0b25cbiAgICAgIHZhcmlhbnQ9XCJyb3VuZGVkXCJcbiAgICAgIHdpZHRoPVwiODAlXCJcbiAgICAgIGhlaWdodD0nMiUnXG4gICAgICBzeD17e1xuICAgICAgICBtYXJnaW5MZWZ0OiAnMTAlJyxcbiAgICAgICAgbWFyZ2luVG9wOiAnMyUnLFxuICAgICAgfX0gLz4pXG5cbiAgY29uc3QgQnV0dG9uID0gKCkgPT4gKFxuICAgIDxTa2VsZXRvblxuICAgICAgYW5pbWF0aW9uPVwid2F2ZVwiXG4gICAgICB2YXJpYW50PVwicm91bmRlZFwiXG4gICAgICB3aWR0aD1cIjUwJVwiXG4gICAgICBoZWlnaHQ9JzMlJ1xuICAgICAgc3g9e3tcbiAgICAgICAgbWFyZ2luTGVmdDogJzEwJScsXG4gICAgICAgIG1hcmdpblRvcDogJzglJyxcbiAgICAgIH19IC8+KVxuXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgfSwgcmFuZG9tVGltZSg1MDAsIDEwMDApKVxuICB9LCBbXSlcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7bG9hZGluZyA/ICg8PlxuXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInIH19PlxuXG4gICAgICAgICAgPHNwYW4gc3R5bGU9e3sgZGlzcGxheTogJ2ZsZXgnLCBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PjxJdGVtSW1hZ2UgLz48L3NwYW4+XG5cbiAgICAgICAgICA8c3BhbiBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLCBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicgfX0+XG4gICAgICAgICAgICA8VGV4dFRpdGxlIC8+XG4gICAgICAgICAgICB7Wy4uLkFycmF5KDgpLmtleXMoKV0ubWFwKChpdGVtKSA9PiAoPFRleHREZXNjcmlwdGlvbiBrZXk9e2l0ZW19IC8+KSl9XG4gICAgICAgICAgICA8QnV0dG9uIC8+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgPC8+KSA6ICg8PntpdGVtRGV0YWlsKGl0ZW1OYW1lKX1cbiAgICAgIDwvPil9XG4gICAgPC8+XG4gIClcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBEZXRhaWxzKHByb3BzKSB7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cblxuICAgICAgICAgIDxIZWFkZXIgdGl0bGU9e3Byb3BzLmNhdH0gaXRlbT17cHJvcHMuaXRlbX0gLz5cbiAgICAgICAgICA8TmF2YmFyIC8+XG5cbiAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJJbmZvSXRlbVwiPlxuICAgICAgICAgICAge2l0ZW1JbmZvKHByb3BzLml0ZW0pfVxuICAgICAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG4gICAgPC8+XG4gIClcbn0iLCJpbXBvcnQgTmF2YmFyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbmF2YmFyJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9oZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2NvcHlyaWdodCc7XG5pbXBvcnQgSXRlbSBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL21hdGVyaWVsJ1xuaW1wb3J0IEl0ZW1TdGF0cyBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2l0ZW1TdGF0cydcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGRhdGEgZnJvbSAnLi4vLi4vLi4vY29uc3RhbnRzL2RhdGEuanNvbidcbmltcG9ydCBTa2VsZXRvbiBmcm9tICdAbXVpL21hdGVyaWFsL1NrZWxldG9uJztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmZ1bmN0aW9uIHJhbmRvbVRpbWUobWluLCBtYXgpIHsgLy8gbWluIGFuZCBtYXggaW5jbHVkZWQgXG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkgKyBtaW4pXG59XG5cbmZ1bmN0aW9uIGFsbEl0ZW1zKHBhZ2UpIHtcblxuICBjb25zdCBJVEVNUyA9IGRhdGEuaXRlbXM7XG4gIGNvbnN0IENBVEVHT1JJRVMgPSBkYXRhLmNhdGVnb3JpZXM7XG5cbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcblxuICBjb25zdCBbSXRlbXMsIHNldEl0ZW1dID0gdXNlU3RhdGUoSVRFTVMpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIH0sIHJhbmRvbVRpbWUoNTAwLCAxMDAwKSlcbiAgfSwgW10pXG5cbiAgY29uc3QgU2tlbGV0b25CcmVhZGNydW1iID0gKCkgPT4gKFxuICAgIDxzcGFuIHN0eWxlPXt7XG4gICAgICBoZWlnaHQ6ICc0JScsXG4gICAgfX0+XG4gICAgICA8U2tlbGV0b24gdmFyaWFudD1cInRleHRcIlxuICAgICAgICB3aWR0aD1cIjMwJVwiXG4gICAgICAgIGhlaWdodD0nODAlJ1xuICAgICAgICBzeD17e1xuICAgICAgICAgIG1hcmdpbkxlZnQ6ICc1JScsXG4gICAgICAgICAgbWFyZ2luVG9wOiAnMS41JScsXG4gICAgICAgIH19IC8+XG4gICAgPC9zcGFuPilcblxuICBjb25zdCBTa2VsZXRvbkl0ZW0gPSAoKSA9PiAoXG4gICAgPFNrZWxldG9uIHZhcmlhbnQ9XCJyb3VuZGVkXCJcbiAgICAgIHdpZHRoPVwiNDUlXCJcbiAgICAgIGhlaWdodD0nMTUlJ1xuICAgICAgc3g9e3tcbiAgICAgICAgbWFyZ2luTGVmdDogJzElJyxcbiAgICAgICAgbWFyZ2luVG9wOiAnMyUnLFxuICAgICAgfX0gLz4pXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge2xvYWRpbmcgPyAoPD5cblxuICAgICAgICA8U2tlbGV0b25CcmVhZGNydW1iIC8+XG4gICAgICAgIHtbLi4uQXJyYXkoOCkua2V5cygpXS5tYXAoKGl0ZW0pID0+ICg8U2tlbGV0b25JdGVtIGtleT17aXRlbX0gLz4pKX1cblxuICAgICAgPC8+KSA6ICg8PlxuICAgICAgICA8SXRlbVN0YXRzIENhdGVnb3J5PXtwYWdlfSBJVEVNUz17SXRlbXN9IENBVD17Q0FURUdPUklFU30gLz5cbiAgICAgICAge2l0ZW1zKHBhZ2UsIEl0ZW1zLCBzZXRJdGVtLCBDQVRFR09SSUVTKX1cbiAgICAgIDwvPil9XG4gICAgPC8+XG4gIClcbn1cblxuY29uc3QgaXRlbXMgPSBmdW5jdGlvbiAoQ2F0ZWdvcnksIElURU1TLCBzZXRJdGVtLCBDQVRFR09SSUVTKSB7XG4gIGNvbnNvbGUubG9nKENhdGVnb3J5KVxuXG4gIGlmIChDYXRlZ29yeSA9PSBudWxsIHx8IENhdGVnb3J5ID09ICcnKSB7XG4gICAge1xuICAgICAgcmV0dXJuIElURU1TXG4gICAgICAgIC5maWx0ZXIoaXRlbSA9PiBpdGVtLmF2YWlsYWJsZSlcbiAgICAgICAgLm1hcChpdGVtID0+IChcbiAgICAgICAgICA8SXRlbVxuICAgICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgICAgIElURU1TPXtJVEVNU31cbiAgICAgICAgICAgIHNldEl0ZW09e3NldEl0ZW19XG4gICAgICAgICAgICBjYXQ9eyhDQVRFR09SSUVTLmZpbHRlcihjYXQgPT4gKGNhdC5pZCA9PT0gaXRlbS5jYXRlZ29yeSkpLm1hcChjYXQgPT4gKGNhdC5uYW1lKSkpfVxuICAgICAgICAgIC8+KSlcbiAgICB9XG4gIH1cbiAgZWxzZSB7XG4gICAge1xuICAgICAgcmV0dXJuIElURU1TXG4gICAgICAgIC5maWx0ZXIoaXRlbSA9PiAoQ0FURUdPUklFUy5maWx0ZXIoY2F0ID0+IChjYXQuaWQgPT09IGl0ZW0uY2F0ZWdvcnkpKS5tYXAoY2F0ID0+IChjYXQubmFtZSkpKSA9PSBDYXRlZ29yeSlcbiAgICAgICAgLm1hcCgoaXRlbSkgPT5cbiAgICAgICAgKDxJdGVtXG4gICAgICAgICAga2V5PXtpdGVtLmlkfVxuICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgSVRFTVM9e0lURU1TfVxuICAgICAgICAgIHNldEl0ZW09e3NldEl0ZW19XG4gICAgICAgICAgY2F0PXsoQ0FURUdPUklFUy5maWx0ZXIoY2F0ID0+IChjYXQuaWQgPT09IGl0ZW0uY2F0ZWdvcnkpKS5tYXAoY2F0ID0+IChjYXQubmFtZSkpKX1cbiAgICAgICAgLz5cbiAgICAgICAgKSlcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVzZWF1KCkge1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT1cIm1haW5cIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJib2R5XCI+XG5cbiAgICAgICAgICA8SGVhZGVyIHRpdGxlPVwiUsOpc2VhdVwiIGl0ZW09XCJcIiAvPlxuICAgICAgICAgIDxOYXZiYXIgLz5cblxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAge2FsbEl0ZW1zKFwicsOpc2VhdVwiKX1cbiAgICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApXG59IiwiaW1wb3J0IE5hdmJhciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL25hdmJhcic7XG5pbXBvcnQgSGVhZGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvaGVhZGVyJztcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9jb3B5cmlnaHQnO1xuaW1wb3J0IEl0ZW0gZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9tYXRlcmllbCdcbmltcG9ydCBJdGVtU3RhdHMgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9pdGVtU3RhdHMnXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBkYXRhIGZyb20gJy4uLy4uLy4uL2NvbnN0YW50cy9kYXRhLmpzb24nXG5pbXBvcnQgU2tlbGV0b24gZnJvbSAnQG11aS9tYXRlcmlhbC9Ta2VsZXRvbic7XG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5mdW5jdGlvbiByYW5kb21UaW1lKG1pbiwgbWF4KSB7IC8vIG1pbiBhbmQgbWF4IGluY2x1ZGVkIFxuICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpICsgbWluKVxufVxuXG5mdW5jdGlvbiBhbGxJdGVtcyhwYWdlKSB7XG5cbiAgY29uc3QgSVRFTVMgPSBkYXRhLml0ZW1zO1xuICBjb25zdCBDQVRFR09SSUVTID0gZGF0YS5jYXRlZ29yaWVzO1xuXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpXG5cbiAgY29uc3QgW0l0ZW1zLCBzZXRJdGVtXSA9IHVzZVN0YXRlKElURU1TKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgc2V0TG9hZGluZyhmYWxzZSlcbiAgICB9LCByYW5kb21UaW1lKDUwMCwgMTAwMCkpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IFNrZWxldG9uQnJlYWRjcnVtYiA9ICgpID0+IChcbiAgICA8c3BhbiBzdHlsZT17e1xuICAgICAgaGVpZ2h0OiAnNCUnLFxuICAgIH19PlxuICAgICAgPFNrZWxldG9uIHZhcmlhbnQ9XCJ0ZXh0XCJcbiAgICAgICAgd2lkdGg9XCIzMCVcIlxuICAgICAgICBoZWlnaHQ9JzgwJSdcbiAgICAgICAgc3g9e3tcbiAgICAgICAgICBtYXJnaW5MZWZ0OiAnNSUnLFxuICAgICAgICAgIG1hcmdpblRvcDogJzEuNSUnLFxuICAgICAgICB9fSAvPlxuICAgIDwvc3Bhbj4pXG5cbiAgY29uc3QgU2tlbGV0b25JdGVtID0gKCkgPT4gKFxuICAgIDxTa2VsZXRvbiB2YXJpYW50PVwicm91bmRlZFwiXG4gICAgICB3aWR0aD1cIjQ1JVwiXG4gICAgICBoZWlnaHQ9JzE1JSdcbiAgICAgIHN4PXt7XG4gICAgICAgIG1hcmdpbkxlZnQ6ICcxJScsXG4gICAgICAgIG1hcmdpblRvcDogJzMlJyxcbiAgICAgIH19IC8+KVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIHtsb2FkaW5nID8gKDw+XG5cbiAgICAgICAgPFNrZWxldG9uQnJlYWRjcnVtYiAvPlxuICAgICAgICB7Wy4uLkFycmF5KDgpLmtleXMoKV0ubWFwKChpdGVtKSA9PiAoPFNrZWxldG9uSXRlbSBrZXk9e2l0ZW19IC8+KSl9XG5cbiAgICAgIDwvPikgOiAoPD5cbiAgICAgICAgPEl0ZW1TdGF0cyBDYXRlZ29yeT17cGFnZX0gSVRFTVM9e0l0ZW1zfSBDQVQ9e0NBVEVHT1JJRVN9IC8+XG4gICAgICAgIHtpdGVtcyhwYWdlLCBJdGVtcywgc2V0SXRlbSwgQ0FURUdPUklFUyl9XG4gICAgICA8Lz4pfVxuICAgIDwvPlxuICApXG59XG5cbmNvbnN0IGl0ZW1zID0gZnVuY3Rpb24gKENhdGVnb3J5LCBJVEVNUywgc2V0SXRlbSwgQ0FURUdPUklFUykge1xuICBjb25zb2xlLmxvZyhDYXRlZ29yeSlcblxuICBpZiAoQ2F0ZWdvcnkgPT0gbnVsbCB8fCBDYXRlZ29yeSA9PSAnJykge1xuICAgIHtcbiAgICAgIHJldHVybiBJVEVNU1xuICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gaXRlbS5hdmFpbGFibGUpXG4gICAgICAgIC5tYXAoaXRlbSA9PiAoXG4gICAgICAgICAgPEl0ZW1cbiAgICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICAgIGl0ZW09e2l0ZW19XG4gICAgICAgICAgICBJVEVNUz17SVRFTVN9XG4gICAgICAgICAgICBzZXRJdGVtPXtzZXRJdGVtfVxuICAgICAgICAgICAgY2F0PXsoQ0FURUdPUklFUy5maWx0ZXIoY2F0ID0+IChjYXQuaWQgPT09IGl0ZW0uY2F0ZWdvcnkpKS5tYXAoY2F0ID0+IChjYXQubmFtZSkpKX1cbiAgICAgICAgICAvPikpXG4gICAgfVxuICB9XG4gIGVsc2Uge1xuICAgIHtcbiAgICAgIHJldHVybiBJVEVNU1xuICAgICAgICAuZmlsdGVyKGl0ZW0gPT4gKENBVEVHT1JJRVMuZmlsdGVyKGNhdCA9PiAoY2F0LmlkID09PSBpdGVtLmNhdGVnb3J5KSkubWFwKGNhdCA9PiAoY2F0Lm5hbWUpKSkgPT0gQ2F0ZWdvcnkpXG4gICAgICAgIC5tYXAoKGl0ZW0pID0+XG4gICAgICAgICg8SXRlbVxuICAgICAgICAgIGtleT17aXRlbS5pZH1cbiAgICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICAgIElURU1TPXtJVEVNU31cbiAgICAgICAgICBzZXRJdGVtPXtzZXRJdGVtfVxuICAgICAgICAgIGNhdD17KENBVEVHT1JJRVMuZmlsdGVyKGNhdCA9PiAoY2F0LmlkID09PSBpdGVtLmNhdGVnb3J5KSkubWFwKGNhdCA9PiAoY2F0Lm5hbWUpKSl9XG4gICAgICAgIC8+XG4gICAgICAgICkpXG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJldW5pb24oKSB7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cblxuICAgICAgICAgIDxIZWFkZXIgdGl0bGU9XCJSw6l1bmlvblwiIGl0ZW09XCJcIiAvPlxuICAgICAgICAgIDxOYXZiYXIgLz5cblxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAge2FsbEl0ZW1zKFwicsOpdW5pb25cIil9XG4gICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKVxufSIsImltcG9ydCBOYXZiYXIgZnJvbSAnLi4vLi4vLi4vY29tcG9uZW50cy9uYXZiYXInO1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi8uLi8uLi9jb21wb25lbnRzL2hlYWRlcic7XG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvY29weXJpZ2h0JztcbmltcG9ydCBJdGVtIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvbWF0ZXJpZWwnXG5pbXBvcnQgSXRlbVN0YXRzIGZyb20gJy4uLy4uLy4uL2NvbXBvbmVudHMvaXRlbVN0YXRzJ1xuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgZGF0YSBmcm9tICcuLi8uLi8uLi9jb25zdGFudHMvZGF0YS5qc29uJ1xuaW1wb3J0IFNrZWxldG9uIGZyb20gJ0BtdWkvbWF0ZXJpYWwvU2tlbGV0b24nO1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gcmFuZG9tVGltZShtaW4sIG1heCkgeyAvLyBtaW4gYW5kIG1heCBpbmNsdWRlZCBcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSArIG1pbilcbn1cblxuZnVuY3Rpb24gYWxsSXRlbXMocGFnZSkge1xuXG4gIGNvbnN0IElURU1TID0gZGF0YS5pdGVtcztcbiAgY29uc3QgQ0FURUdPUklFUyA9IGRhdGEuY2F0ZWdvcmllcztcblxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKVxuXG4gIGNvbnN0IFtJdGVtcywgc2V0SXRlbV0gPSB1c2VTdGF0ZShJVEVNUyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpXG4gICAgfSwgcmFuZG9tVGltZSg1MDAsIDEwMDApKVxuICB9LCBbXSlcblxuICBjb25zdCBTa2VsZXRvbkJyZWFkY3J1bWIgPSAoKSA9PiAoXG4gICAgPHNwYW4gc3R5bGU9e3tcbiAgICAgIGhlaWdodDogJzQlJyxcbiAgICB9fT5cbiAgICAgIDxTa2VsZXRvbiB2YXJpYW50PVwidGV4dFwiXG4gICAgICAgIHdpZHRoPVwiMzAlXCJcbiAgICAgICAgaGVpZ2h0PSc4MCUnXG4gICAgICAgIHN4PXt7XG4gICAgICAgICAgbWFyZ2luTGVmdDogJzUlJyxcbiAgICAgICAgICBtYXJnaW5Ub3A6ICcxLjUlJyxcbiAgICAgICAgfX0gLz5cbiAgICA8L3NwYW4+KVxuXG4gIGNvbnN0IFNrZWxldG9uSXRlbSA9ICgpID0+IChcbiAgICA8U2tlbGV0b24gdmFyaWFudD1cInJvdW5kZWRcIlxuICAgICAgd2lkdGg9XCI0NSVcIlxuICAgICAgaGVpZ2h0PScxNSUnXG4gICAgICBzeD17e1xuICAgICAgICBtYXJnaW5MZWZ0OiAnMSUnLFxuICAgICAgICBtYXJnaW5Ub3A6ICczJScsXG4gICAgICB9fSAvPilcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7bG9hZGluZyA/ICg8PlxuXG4gICAgICAgIDxTa2VsZXRvbkJyZWFkY3J1bWIgLz5cbiAgICAgICAge1suLi5BcnJheSg4KS5rZXlzKCldLm1hcCgoaXRlbSkgPT4gKDxTa2VsZXRvbkl0ZW0ga2V5PXtpdGVtfSAvPikpfVxuXG4gICAgICA8Lz4pIDogKDw+XG4gICAgICAgIDxJdGVtU3RhdHMgQ2F0ZWdvcnk9e3BhZ2V9IElURU1TPXtJdGVtc30gQ0FUPXtDQVRFR09SSUVTfSAvPlxuICAgICAgICB7aXRlbXMocGFnZSwgSXRlbXMsIHNldEl0ZW0sIENBVEVHT1JJRVMpfVxuICAgICAgPC8+KX1cbiAgICA8Lz5cbiAgKVxufVxuXG5jb25zdCBpdGVtcyA9IGZ1bmN0aW9uIChDYXRlZ29yeSwgSVRFTVMsIHNldEl0ZW0sIENBVEVHT1JJRVMpIHtcbiAgY29uc29sZS5sb2coQ2F0ZWdvcnkpXG5cbiAgaWYgKENhdGVnb3J5ID09IG51bGwgfHwgQ2F0ZWdvcnkgPT0gJycpIHtcbiAgICB7XG4gICAgICByZXR1cm4gSVRFTVNcbiAgICAgICAgLmZpbHRlcihpdGVtID0+IGl0ZW0uYXZhaWxhYmxlKVxuICAgICAgICAubWFwKGl0ZW0gPT4gKFxuICAgICAgICAgIDxJdGVtXG4gICAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgICBpdGVtPXtpdGVtfVxuICAgICAgICAgICAgSVRFTVM9e0lURU1TfVxuICAgICAgICAgICAgc2V0SXRlbT17c2V0SXRlbX1cbiAgICAgICAgICAgIGNhdD17KENBVEVHT1JJRVMuZmlsdGVyKGNhdCA9PiAoY2F0LmlkID09PSBpdGVtLmNhdGVnb3J5KSkubWFwKGNhdCA9PiAoY2F0Lm5hbWUpKSl9XG4gICAgICAgICAgLz4pKVxuICAgIH1cbiAgfVxuICBlbHNlIHtcbiAgICB7XG4gICAgICByZXR1cm4gSVRFTVNcbiAgICAgICAgLmZpbHRlcihpdGVtID0+IChDQVRFR09SSUVTLmZpbHRlcihjYXQgPT4gKGNhdC5pZCA9PT0gaXRlbS5jYXRlZ29yeSkpLm1hcChjYXQgPT4gKGNhdC5uYW1lKSkpID09IENhdGVnb3J5KVxuICAgICAgICAubWFwKChpdGVtKSA9PlxuICAgICAgICAoPEl0ZW1cbiAgICAgICAgICBrZXk9e2l0ZW0uaWR9XG4gICAgICAgICAgaXRlbT17aXRlbX1cbiAgICAgICAgICBJVEVNUz17SVRFTVN9XG4gICAgICAgICAgc2V0SXRlbT17c2V0SXRlbX1cbiAgICAgICAgICBjYXQ9eyhDQVRFR09SSUVTLmZpbHRlcihjYXQgPT4gKGNhdC5pZCA9PT0gaXRlbS5jYXRlZ29yeSkpLm1hcChjYXQgPT4gKGNhdC5uYW1lKSkpfVxuICAgICAgICAvPlxuICAgICAgICApKVxuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBUZWxlcGhvbmlxdWUoKSB7XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPG1haW4gY2xhc3NOYW1lPVwibWFpblwiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJvZHlcIj5cblxuICAgICAgICAgIDxIZWFkZXIgdGl0bGU9XCJUw6lsw6lwaG9uaXF1ZVwiIGl0ZW09XCJcIiAvPlxuICAgICAgICAgIDxOYXZiYXIgLz5cblxuICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgICAge2FsbEl0ZW1zKFwidMOpbMOpcGhvbmlxdWVcIil9XG4gICAgICAgICAgICA8Rm9vdGVyIC8+XG4gICAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKVxufSIsImZ1bmN0aW9uIHJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyhjb250ZXh0KSB7XG4gICAgY29uc3QgcmVhY3RDb250cm9sbGVycyA9IHt9O1xuICAgIGNvbnN0IGltcG9ydEFsbFJlYWN0Q29tcG9uZW50cyA9IChyKSA9PiB7XG4gICAgICAgIHIua2V5cygpLmZvckVhY2goKGtleSkgPT4gKHJlYWN0Q29udHJvbGxlcnNba2V5XSA9IHIoa2V5KS5kZWZhdWx0KSk7XG4gICAgfTtcbiAgICBpbXBvcnRBbGxSZWFjdENvbXBvbmVudHMoY29udGV4dCk7XG4gICAgd2luZG93LnJlc29sdmVSZWFjdENvbXBvbmVudCA9IChuYW1lKSA9PiB7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudCA9IHJlYWN0Q29udHJvbGxlcnNbYC4vJHtuYW1lfS5qc3hgXSB8fCByZWFjdENvbnRyb2xsZXJzW2AuLyR7bmFtZX0udHN4YF07XG4gICAgICAgIGlmICh0eXBlb2YgY29tcG9uZW50ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdSZWFjdCBjb250cm9sbGVyIFwiJyArIG5hbWUgKyAnXCIgZG9lcyBub3QgZXhpc3QnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29tcG9uZW50O1xuICAgIH07XG59XG5cbmV4cG9ydCB7IHJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyB9O1xuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCByZXF1aXJlJCQwIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQGhvdHdpcmVkL3N0aW11bHVzJztcblxudmFyIGNyZWF0ZVJvb3Q7XG5cbnZhciBtID0gcmVxdWlyZSQkMDtcbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIGNyZWF0ZVJvb3QgPSBtLmNyZWF0ZVJvb3Q7XG4gIG0uaHlkcmF0ZVJvb3Q7XG59IGVsc2Uge1xuICB2YXIgaSA9IG0uX19TRUNSRVRfSU5URVJOQUxTX0RPX05PVF9VU0VfT1JfWU9VX1dJTExfQkVfRklSRUQ7XG4gIGNyZWF0ZVJvb3QgPSBmdW5jdGlvbihjLCBvKSB7XG4gICAgaS51c2luZ0NsaWVudEVudHJ5UG9pbnQgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gbS5jcmVhdGVSb290KGMsIG8pO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBpLnVzaW5nQ2xpZW50RW50cnlQb2ludCA9IGZhbHNlO1xuICAgIH1cbiAgfTtcbn1cblxuY2xhc3MgZGVmYXVsdF8xIGV4dGVuZHMgQ29udHJvbGxlciB7XG4gICAgY29ubmVjdCgpIHtcbiAgICAgICAgY29uc3QgcHJvcHMgPSB0aGlzLnByb3BzVmFsdWUgPyB0aGlzLnByb3BzVmFsdWUgOiBudWxsO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoJ2Nvbm5lY3QnLCB7IGNvbXBvbmVudDogdGhpcy5jb21wb25lbnRWYWx1ZSwgcHJvcHM6IHByb3BzIH0pO1xuICAgICAgICBpZiAoIXRoaXMuY29tcG9uZW50VmFsdWUpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gY29tcG9uZW50IHNwZWNpZmllZC4nKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb21wb25lbnQgPSB3aW5kb3cucmVzb2x2ZVJlYWN0Q29tcG9uZW50KHRoaXMuY29tcG9uZW50VmFsdWUpO1xuICAgICAgICB0aGlzLl9yZW5kZXJSZWFjdEVsZW1lbnQoUmVhY3QuY3JlYXRlRWxlbWVudChjb21wb25lbnQsIHByb3BzLCBudWxsKSk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgnbW91bnQnLCB7XG4gICAgICAgICAgICBjb21wb25lbnROYW1lOiB0aGlzLmNvbXBvbmVudFZhbHVlLFxuICAgICAgICAgICAgY29tcG9uZW50OiBjb21wb25lbnQsXG4gICAgICAgICAgICBwcm9wczogcHJvcHMsXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkaXNjb25uZWN0KCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQucm9vdC51bm1vdW50KCk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudCgndW5tb3VudCcsIHtcbiAgICAgICAgICAgIGNvbXBvbmVudDogdGhpcy5jb21wb25lbnRWYWx1ZSxcbiAgICAgICAgICAgIHByb3BzOiB0aGlzLnByb3BzVmFsdWUgPyB0aGlzLnByb3BzVmFsdWUgOiBudWxsLFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgX3JlbmRlclJlYWN0RWxlbWVudChyZWFjdEVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudDtcbiAgICAgICAgaWYgKCFlbGVtZW50LnJvb3QpIHtcbiAgICAgICAgICAgIGVsZW1lbnQucm9vdCA9IGNyZWF0ZVJvb3QodGhpcy5lbGVtZW50KTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LnJvb3QucmVuZGVyKHJlYWN0RWxlbWVudCk7XG4gICAgfVxuICAgIGRpc3BhdGNoRXZlbnQobmFtZSwgcGF5bG9hZCkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoKG5hbWUsIHsgZGV0YWlsOiBwYXlsb2FkLCBwcmVmaXg6ICdyZWFjdCcgfSk7XG4gICAgfVxufVxuZGVmYXVsdF8xLnZhbHVlcyA9IHtcbiAgICBjb21wb25lbnQ6IFN0cmluZyxcbiAgICBwcm9wczogT2JqZWN0LFxufTtcblxuZXhwb3J0IHsgZGVmYXVsdF8xIGFzIGRlZmF1bHQgfTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJDb250cm9sbGVyIiwiZWxlbWVudCIsInRleHRDb250ZW50IiwiUmVhY3QiLCJmb290ZXIiLCJmb250V2VpZ2h0IiwidGV4dERlY29yYXRpb24iLCJkaXNwbGF5IiwiaGVpZ2h0Iiwib3BhY2l0eSIsImNvbG9yIiwidHJhbnNpdGlvbiIsImZvbnRGYW1pbHkiLCJmb250U2l6ZSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImJhY2tncm91bmRDb2xvciIsIkRhdGUiLCJnZXRGdWxsWWVhciIsIkxpbmsiLCJNb2RhbGJ1dHRvbiIsImNhcGl0YWxpemVXb3JkcyIsInN0ciIsInRvTG93ZXJDYXNlIiwic3BsaXQiLCJtYXAiLCJ3b3JkIiwiY2hhckF0IiwidG9VcHBlckNhc2UiLCJzbGljZSIsImpvaW4iLCJub3JtYWxpemUiLCJyZXBsYWNlIiwicmVwbGFjZUFsbCIsImhlYWRlciIsInRpdGxlIiwiaXRlbSIsImxlbmd0aCIsIkZvcm1Db250cm9sIiwiU2VsZWN0IiwiSW5wdXRMYWJlbCIsIk1lbnVJdGVtIiwidG90YWwiLCJwYWdlIiwiRmlsdGVyIiwiSVRFTVMiLCJDQVQiLCJmaWx0ZXIiLCJjYXRlZ29yeSIsImNhdCIsIm5hbWUiLCJpZCIsImF2YWlsYWJsZSIsInVuYXZhaWxhYmxlIiwiaXRlbVN0YXRzIiwiQ2F0ZWdvcnkiLCJvbkNhdENoYW5nZSIsImhhbmRsZUNoYW5nZSIsImUiLCJ0YXJnZXQiLCJ2YWx1ZSIsIndpZHRoIiwiYm90dG9tIiwiUmluZ3MiLCJsb2FkaW5nQ29tcCIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInJpZ2h0IiwibWFyZ2luIiwiQnV0dG9uRGVsZXRlIiwiQnV0dG9uRWRpdCIsIkl0ZW0iLCJzZXRJdGVtIiwicmVtb3ZlQWNjZW50cyIsImhyZWYiLCJpbWciLCJhbHQiLCJvYmplY3RGaXQiLCJ0b1N0cmluZyIsIkJ1dHRvbiIsInpvb20iLCJ6b29tZXIiLCJjdXJyZW50VGFyZ2V0Iiwib2Zmc2V0WCIsIm9mZnNldFkiLCJwYWdlWCIsInBhZ2VZIiwieCIsIm9mZnNldFdpZHRoIiwieSIsIm9mZnNldEhlaWdodCIsInN0eWxlIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZEltYWdlIiwiZW1wbGFjZW1lbnQiLCJkZXNjcmlwdGlvbiIsImNhcmFjdGVyaXN0aXF1ZXMiLCJib3JkZXIiLCJib3JkZXJDb2xvciIsIlRleHRGaWVsZCIsIkJveCIsIlR5cG9ncmFwaHkiLCJNb2RhbCIsIkljb25CdXR0b24iLCJDbG9zZUljb24iLCJBZGRCb3hJY29uIiwidXNlU3RhdGUiLCJkYXRhIiwiVG9vbHRpcCIsIkFsZXJ0IiwibW9kYWwiLCJJdGVtcyIsImFsZXJ0T3BlbiIsInNldEFsZXJ0T3BlbiIsImFsZXJ0TWVzc2FnZSIsInNldEFsZXJ0TWVzc2FnZSIsIkFsZXJ0SW5mbyIsInNldEFsZXJ0SW5mbyIsInNsZWVwIiwibWlsbGlzZWNvbmRzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJzZXRUaW1lb3V0IiwicmVwbGFjZVNwYWNlc1dpdGhEYXNoZXMiLCJBbGVydFNsZWVwIiwiaSIsIkNBVEVHT1JJRVMiLCJjYXRlZ29yaWVzIiwic2V0VmFsdWUiLCJoYW5kbGVDbGljayIsIm5ld1N0YXRlIiwiaGFuZGxlQ2xvc2UiLCJlcnJvciIsImNvbnNvbGUiLCJvcGVuIiwic2V0T3BlbiIsImhhbmRsZU9wZW4iLCJ6SW5kZXgiLCJvYmoiLCJkZWxldGVCeUlkIiwidGV4dEFsaWduIiwicGFkZGluZyIsInVzZUVmZmVjdCIsIm5hdmJhciIsInJlZ2lzdGVyUmVhY3RDb250cm9sbGVyQ29tcG9uZW50cyIsInJlcXVpcmUiLCJjb250ZXh0Iiwic3RhcnRTdGltdWx1c0FwcCIsImFwcCIsIk5hdmJhciIsIkZvb3RlciIsInVzZVJlZiIsIkxvYWRpbmdDb21wIiwiSXRlbVN0YXRzIiwiU2tlbGV0b24iLCJyYW5kb21UaW1lIiwibWluIiwibWF4IiwiTWF0aCIsImZsb29yIiwicmFuZG9tIiwiQWxsSXRlbXMiLCJsb2FkaW5nIiwic2V0RmlsdGVyIiwiU2tlbGV0b25CcmVhZGNydW1iIiwibWFyZ2luTGVmdCIsIm1hcmdpblRvcCIsIlNrZWxldG9uSXRlbSIsIkFycmF5Iiwia2V5cyIsImNhdGVnb3JpZSIsIml0ZW1zIiwiZmlsdGVyVmFsdWUiLCJBY2N1ZWlsIiwic2V0TG9hZGluZyIsInJlbW92ZU9wYWNpdHkiLCJlbGVtIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsIkxvZ2luIiwiSGVhZGVyIiwiYWxsSXRlbXMiLCJsb2ciLCJEZXNrdG9wIiwiaXRlbURldGFpbCIsIml0ZW1OYW1lIiwiaXRlbUluZm8iLCJJdGVtSW1hZ2UiLCJUZXh0VGl0bGUiLCJUZXh0RGVzY3JpcHRpb24iLCJhbGlnbkNvbnRlbnQiLCJmbGV4RGlyZWN0aW9uIiwiRGV0YWlscyIsInByb3BzIiwiUmVzZWF1IiwiUmV1bmlvbiIsIlRlbGVwaG9uaXF1ZSIsInJlYWN0Q29udHJvbGxlcnMiLCJpbXBvcnRBbGxSZWFjdENvbXBvbmVudHMiLCJyIiwiZm9yRWFjaCIsImtleSIsIndpbmRvdyIsInJlc29sdmVSZWFjdENvbXBvbmVudCIsImNvbXBvbmVudCIsIkVycm9yIiwicmVxdWlyZSQkMCIsImNyZWF0ZVJvb3QiLCJtIiwicHJvY2VzcyIsImVudiIsIk5PREVfRU5WIiwiaHlkcmF0ZVJvb3QiLCJfX1NFQ1JFVF9JTlRFUk5BTFNfRE9fTk9UX1VTRV9PUl9ZT1VfV0lMTF9CRV9GSVJFRCIsImMiLCJvIiwidXNpbmdDbGllbnRFbnRyeVBvaW50IiwiZGVmYXVsdF8xIiwicHJvcHNWYWx1ZSIsImRpc3BhdGNoRXZlbnQiLCJjb21wb25lbnRWYWx1ZSIsIl9yZW5kZXJSZWFjdEVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY29tcG9uZW50TmFtZSIsInJvb3QiLCJ1bm1vdW50IiwicmVhY3RFbGVtZW50IiwicmVuZGVyIiwicGF5bG9hZCIsImRpc3BhdGNoIiwiZGV0YWlsIiwicHJlZml4IiwidmFsdWVzIiwiU3RyaW5nIiwiT2JqZWN0IiwiZGVmYXVsdCJdLCJzb3VyY2VSb290IjoiIn0=