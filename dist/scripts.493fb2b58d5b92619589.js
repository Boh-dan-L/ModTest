/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/just-validate.min.js":
/*!**********************************!*\
  !*** ./src/just-validate.min.js ***!
  \**********************************/
/***/ ((module) => {



function _defineProperty(e, t, i) {
  return t in e ? Object.defineProperty(e, t, {
    value: i,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = i, e;
}

var _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
  return typeof e;
} : function (e) {
  return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
};

!function () {
  for (var e = ["DocumentType", "Element", "CharacterData"], t = function () {
    null != this.parentNode && this.parentNode.removeChild(this);
  }, i = 0; i < e.length; i++) {
    var r = e[i];
    window[r] && !window[r].prototype.remove && (window[r].prototype.remove = t);
  }
}(), function (e) {
  function t() {}

  function i(e, t) {
    return function () {
      e.apply(t, arguments);
    };
  }

  function r(e) {
    if ("object" !== _typeof(this)) throw new TypeError("Promises must be constructed via new");
    if ("function" != typeof e) throw new TypeError("not a function");
    this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], u(e, this);
  }

  function n(e, t) {
    for (; 3 === e._state;) e = e._value;

    return 0 === e._state ? void e._deferreds.push(t) : (e._handled = !0, void r._immediateFn(function () {
      var i = 1 === e._state ? t.onFulfilled : t.onRejected;
      if (null === i) return void (1 === e._state ? o : s)(t.promise, e._value);
      var r;

      try {
        r = i(e._value);
      } catch (n) {
        return void s(t.promise, n);
      }

      o(t.promise, r);
    }));
  }

  function o(e, t) {
    try {
      if (t === e) throw new TypeError("A promise cannot be resolved with itself.");

      if (t && ("object" === ("undefined" == typeof t ? "undefined" : _typeof(t)) || "function" == typeof t)) {
        var n = t.then;
        if (t instanceof r) return e._state = 3, e._value = t, void a(e);
        if ("function" == typeof n) return void u(i(n, t), e);
      }

      e._state = 1, e._value = t, a(e);
    } catch (o) {
      s(e, o);
    }
  }

  function s(e, t) {
    e._state = 2, e._value = t, a(e);
  }

  function a(e) {
    2 === e._state && 0 === e._deferreds.length && r._immediateFn(function () {
      e._handled || r._unhandledRejectionFn(e._value);
    });

    for (var t = 0, i = e._deferreds.length; t < i; t++) n(e, e._deferreds[t]);

    e._deferreds = null;
  }

  function l(e, t, i) {
    this.onFulfilled = "function" == typeof e ? e : null, this.onRejected = "function" == typeof t ? t : null, this.promise = i;
  }

  function u(e, t) {
    var i = !1;

    try {
      e(function (e) {
        i || (i = !0, o(t, e));
      }, function (e) {
        i || (i = !0, s(t, e));
      });
    } catch (r) {
      if (i) return;
      i = !0, s(t, r);
    }
  }

  var d = setTimeout;
  r.prototype["catch"] = function (e) {
    return this.then(null, e);
  }, r.prototype.then = function (e, i) {
    var r = new this.constructor(t);
    return n(this, new l(e, i, r)), r;
  }, r.all = function (e) {
    var t = Array.prototype.slice.call(e);
    return new r(function (e, i) {
      function r(o, s) {
        try {
          if (s && ("object" === ("undefined" == typeof s ? "undefined" : _typeof(s)) || "function" == typeof s)) {
            var a = s.then;
            if ("function" == typeof a) return void a.call(s, function (e) {
              r(o, e);
            }, i);
          }

          t[o] = s, 0 === --n && e(t);
        } catch (l) {
          i(l);
        }
      }

      if (0 === t.length) return e([]);

      for (var n = t.length, o = 0; o < t.length; o++) r(o, t[o]);
    });
  }, r.resolve = function (e) {
    return e && "object" === ("undefined" == typeof e ? "undefined" : _typeof(e)) && e.constructor === r ? e : new r(function (t) {
      t(e);
    });
  }, r.reject = function (e) {
    return new r(function (t, i) {
      i(e);
    });
  }, r.race = function (e) {
    return new r(function (t, i) {
      for (var r = 0, n = e.length; r < n; r++) e[r].then(t, i);
    });
  }, r._immediateFn = "function" == typeof setImmediate && function (e) {
    setImmediate(e);
  } || function (e) {
    d(e, 0);
  }, r._unhandledRejectionFn = function (e) {
    "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", e);
  }, r._setImmediateFn = function (e) {
    r._immediateFn = e;
  }, r._setUnhandledRejectionFn = function (e) {
    r._unhandledRejectionFn = e;
  },  true && module.exports ? module.exports = r : e.Promise || (e.Promise = r);
}(window), function (e) {
  e.Promise || (e.Promise = Promise);

  var t = "required",
      i = "email",
      r = "minLength",
      n = "maxLength",
      o = "password",
      s = "zip",
      a = "phone",
      l = "remote",
      u = "strength",
      d = "function",
      c = function (e, t) {
    if ("string" == typeof e) return e;
    var i = "post" === t.toLowerCase() ? "" : "?";
    return Array.isArray(e) ? i + e.map(function (e) {
      return e.name + "=" + e.value;
    }).join("&") : i + Object.keys(e).map(function (t) {
      return t + "=" + e[t];
    }).join("&");
  },
      h = function (e) {
    var t = e.url,
        i = e.method,
        r = e.data,
        n = e.debug,
        o = e.callback,
        s = e.error;
    if (n) return void o("test");
    var a = e.async !== !1,
        l = new XMLHttpRequest(),
        u = c(r, "get"),
        d = null;
    "post" === i.toLowerCase() && (d = c(r, "post"), u = ""), l.open(i, t + u, a), l.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"), l.onreadystatechange = function () {
      4 === this.readyState && (200 === this.status ? o(this.responseText) : s && s(this.responseText));
    }, l.send(d);
  },
      f = function (e, t) {
    this.options = t || {}, this.rules = this.options.rules || {}, this.messages = this.options.messages || void 0, this.colorWrong = this.options.colorWrong || "#B81111", this.result = {}, this.elements = [], this.tooltip = this.options.tooltip || {}, this.tooltipFadeOutTime = this.tooltip.fadeOutTime || 5e3, this.tooltipFadeOutClass = this.tooltip.fadeOutClass || "just-validate-tooltip-hide", this.tooltipSelectorWrap = document.querySelectorAll(this.tooltip.selectorWrap).length ? document.querySelectorAll(this.tooltip.selectorWrap) : document.querySelectorAll(".just-validate-tooltip-container"), this.bindHandlerKeyup = this.handlerKeyup.bind(this), this.submitHandler = this.options.submitHandler || void 0, this.invalidFormCallback = this.options.invalidFormCallback || void 0, this.promisesRemote = [], this.isValidationSuccess = !1, this.focusWrongField = this.options.focusWrongField || !1, this.REGEXP = {
      email: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
      zip: /^\d{5}(-\d{4})?$/,
      phone: /^([0-9]( |-)?)?(\(?[0-9]{3}\)?|[0-9]{3})( |-)?([0-9]{3}( |-)?[0-9]{4}|[a-zA-Z0-9]{7})$/,
      password: /[^\w\d]*(([0-9]+.*[A-Za-z]+.*)|[A-Za-z]+.*([0-9]+.*))/,
      strengthPass: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/
    }, this.DEFAULT_REMOTE_ERROR = "Error", this.state = {
      tooltipsTimer: null
    }, this.setForm(document.querySelector(e));
  };

  f.prototype = {
    defaultRules: {
      email: {
        required: !0,
        email: !0
      },
      name: {
        required: !0,
        minLength: 3,
        maxLength: 15
      },
      text: {
        required: !0,
        maxLength: 300,
        minLength: 5
      },
      password: {
        required: !0,
        password: !0,
        minLength: 4,
        maxLength: 8
      },
      zip: {
        required: !0,
        zip: !0
      },
      phone: {
        phone: !0
      }
    },
    defaultMessages: {
      required: "The field is required",
      email: "Please, type a valid email",
      maxLength: "The field must contain a maximum of :value characters",
      minLength: "The field must contain a minimum of :value characters",
      password: "Password is not valid",
      remote: "Email already exists",
      strength: "Password must contents at least one uppercase letter, one lowercase letter and one number",
      "function": "Function returned false"
    },
    handlerKeyup: function (e) {
      var t = e.target,
          i = {
        name: t.getAttribute("data-validate-field"),
        value: t.value
      };
      delete this.result[i.name], this.validateItem({
        name: i.name,
        value: i.value,
        group: [],
        isKeyupChange: !0
      }), this.renderErrors();
    },
    setterEventListener: function (e, t, i, r) {
      switch ("keyup" === t && (i = this.bindHandlerKeyup), r) {
        case "add":
          e.addEventListener(t, i);
          break;

        case "remove":
          e.removeEventListener(t, i);
      }
    },
    getElementsRealValue: function () {
      for (var e = this.$form.querySelectorAll("*"), t = void 0, i = {}, r = 0, n = e.length; r < n; ++r) if (t = e[r].getAttribute("name")) {
        if ("checkbox" === e[r].type) {
          i[t] = e[r].checked;
          continue;
        }

        i[t] = e[r].value;
      }

      return i;
    },
    validationFailed: function () {
      this.invalidFormCallback && this.invalidFormCallback(this.result);
      var e = document.querySelector(".js-validate-error-field");
      this.focusWrongField && e && e.focus && e.focus();
    },
    validationSuccess: function () {
      if (0 === Object.keys(this.result).length) {
        if (this.isValidationSuccess = !1, this.submitHandler) {
          var e = this.getElementsRealValue();
          return void this.submitHandler(this.$form, e, h);
        }

        this.$form.submit();
      }
    },
    setForm: function (e) {
      var t = this;
      this.$form = e, this.$form.setAttribute("novalidate", "novalidate"), this.$form.addEventListener("submit", function (e) {
        return e.preventDefault(), t.result = [], t.getElements(), t.promisesRemote.length ? void Promise.all(t.promisesRemote).then(function () {
          t.promisesRemote = [], t.isValidationSuccess ? t.validationSuccess() : t.validationFailed();
        }) : void (t.isValidationSuccess ? t.validationSuccess() : t.validationFailed());
      });
    },
    isEmail: function (e) {
      return this.REGEXP.email.test(e);
    },
    isZip: function (e) {
      return this.REGEXP.zip.test(e);
    },
    isPhone: function (e) {
      return this.REGEXP.phone.test(e);
    },
    isPassword: function (e) {
      return this.REGEXP.password.test(e);
    },
    isEmpty: function (e) {
      var t = e;
      return e.trim && (t = e.trim()), !t;
    },
    checkLengthMax: function (e, t) {
      return e.length <= t;
    },
    checkLengthMin: function (e, t) {
      return e.length >= t;
    },
    checkStrengthPass: function (e) {
      return this.REGEXP.strengthPass.test(e);
    },
    getElements: function () {
      var e = this,
          t = this.$form.querySelectorAll("[data-validate-field]");
      this.elements = [];

      for (var i = function (i, r) {
        var n = t[i],
            o = n.getAttribute("data-validate-field"),
            s = n.value,
            a = !1,
            l = [];

        if ("checkbox" === n.type && (s = n.checked || "", n.addEventListener("change", function (t) {
          var i = t.target,
              r = {
            name: i.getAttribute("data-validate-field"),
            value: i.checked
          };
          delete e.result[r.name], e.validateItem({
            name: r.name,
            value: r.value,
            group: []
          }), e.renderErrors();
        })), "radio" === n.type) {
          var u = e.elements.filter(function (e) {
            if (e.name === o) return e;
          })[0];
          u ? (u.group.push(n.checked), a = !0) : l.push(n.checked), n.addEventListener("change", function (t) {
            var i = t.target,
                r = {
              name: i.getAttribute("data-validate-field"),
              value: i.checked
            };
            delete e.result[r.name], e.validateItem({
              name: r.name,
              value: r.value,
              group: []
            }), e.renderErrors();
          });
        }

        e.setterEventListener(n, "keyup", e.handlerKeyup, "add"), a || e.elements.push({
          name: o,
          value: s,
          group: l
        });
      }, r = 0, n = t.length; r < n; ++r) i(r, n);

      this.validateElements();
    },
    validateRequired: function (e) {
      return !this.isEmpty(e);
    },
    validateEmail: function (e) {
      return this.isEmail(e);
    },
    validatePhone: function (e) {
      return this.isPhone(e);
    },
    validateMinLength: function (e, t) {
      return this.checkLengthMin(e, t);
    },
    validateMaxLength: function (e, t) {
      return this.checkLengthMax(e, t);
    },
    validateStrengthPass: function (e) {
      return this.checkStrengthPass(e);
    },
    validatePassword: function (e) {
      return this.isPassword(e);
    },
    validateZip: function (e) {
      return this.isZip(e);
    },
    validateRemote: function (e) {
      var t = e.value,
          i = e.name,
          r = e.url,
          n = e.successAnswer,
          o = e.sendParam,
          s = e.method;
      return new Promise(function (e) {
        h({
          url: r,
          method: s,
          data: _defineProperty({}, o, t),
          async: !0,
          callback: function (t) {
            t.toLowerCase() === n.toLowerCase() && e("ok"), e({
              type: "incorrect",
              name: i
            });
          },
          error: function () {
            e({
              type: "error",
              name: i
            });
          }
        });
      });
    },
    generateMessage: function (e, t, i) {
      var r = this.messages || this.defaultMessages,
          n = r[t] && r[t][e] || this.messages && "string" == typeof this.messages[t] && r[t] || this.defaultMessages[e] || this.DEFAULT_REMOTE_ERROR;
      i && (n = n.replace(":value", i.toString())), this.result[t] = {
        message: n
      };
    },
    validateElements: function () {
      var e = this;
      return this.lockForm(), this.elements.forEach(function (t) {
        e.validateItem({
          name: t.name,
          value: t.value,
          group: t.group
        });
      }), this.promisesRemote.length ? void Promise.all(this.promisesRemote).then(function (t) {
        t.forEach(function (t) {
          return "ok" === t ? void e.renderErrors() : ("error" === t.type && alert("Server error occured. Please try later."), e.generateMessage(l, t.name), void e.renderErrors());
        });
      }) : void this.renderErrors();
    },
    validateItem: function (e) {
      var c = this,
          h = e.name,
          f = e.group,
          m = e.value,
          v = e.isKeyupChange,
          p = this.rules[h] || this.defaultRules[h] || !1;
      if (p) for (var g in p) {
        var y = p[g];
        if (g !== t && g !== d && "" == m) return;

        switch (g) {
          case d:
            if ("function" != typeof y) break;
            if (y(h, m)) break;
            return void this.generateMessage(d, h, y);

          case t:
            if (!y) break;

            if (f.length) {
              var b = !1;
              if (f.forEach(function (e) {
                c.validateRequired(e) && (b = !0);
              }), b) break;
            } else if (this.validateRequired(m)) break;

            return void this.generateMessage(t, h);

          case i:
            if (!y) break;
            if (this.validateEmail(m)) break;
            return void this.generateMessage(i, h);

          case r:
            if (!y) break;
            if (this.validateMinLength(m, y)) break;
            return void this.generateMessage(r, h, y);

          case n:
            if (!y) break;
            if (this.validateMaxLength(m, y)) break;
            return void this.generateMessage(n, h, y);

          case a:
            if (!y) break;
            if (this.validatePhone(m)) break;
            return void this.generateMessage(a, h);

          case o:
            if (!y) break;
            if (this.validatePassword(m)) break;
            return void this.generateMessage(o, h);

          case u:
            if (!y || "object" !== ("undefined" == typeof y ? "undefined" : _typeof(y))) break;
            if (y["default"] && this.validateStrengthPass(m)) break;

            if (y.custom) {
              var E = void 0;

              try {
                E = new RegExp(y.custom);
              } catch (w) {
                E = this.REGEXP.strengthPass, console.error("Custom regexp for strength rule is not valid. Default regexp was used.");
              }

              if (E.test(m)) break;
            }

            return void this.generateMessage(u, h);

          case s:
            if (!y) break;
            if (this.validateZip(m)) break;
            return void this.generateMessage(s, h);

          case l:
            if (v) break;
            if (!y) break;
            var k = y.url,
                _ = y.successAnswer,
                P = y.method,
                R = y.sendParam,
                S = this.$form.querySelector('input[data-validate-field="' + h + '"]');
            return this.setterEventListener(S, "keyup", this.handlerKeyup, "remove"), void this.promisesRemote.push(this.validateRemote({
              name: h,
              value: m,
              url: k,
              method: P,
              sendParam: R,
              successAnswer: _
            }));
        }
      }
    },
    clearErrors: function () {
      for (var e = document.querySelectorAll(".js-validate-error-label"), t = 0, i = e.length; t < i; ++t) e[t].remove();

      e = document.querySelectorAll(".js-validate-error-field");

      for (var r = 0, n = e.length; r < n; ++r) e[r].classList.remove("js-validate-error-field"), e[r].style.border = "", e[r].style.color = "";
    },
    renderErrors: function () {
      var e = this;
      if (this.clearErrors(), this.unlockForm(), this.isValidationSuccess = !1, 0 === Object.keys(this.result).length) return void (this.isValidationSuccess = !0);

      for (var t in this.result) {
        var i = this.result[t].message,
            r = this.$form.querySelectorAll('[data-validate-field="' + t + '"]'),
            n = r[r.length - 1],
            o = document.createElement("div");

        if (o.innerHTML = i, o.className = "js-validate-error-label", o.setAttribute("style", "color: " + this.colorWrong), n.style.border = "1px solid " + this.colorWrong, n.style.color = "" + this.colorWrong, n.classList.add("js-validate-error-field"), "checkbox" === n.type || "radio" === n.type) {
          var s = document.querySelector('label[for="' + n.getAttribute("id") + '"]');
          "label" === n.parentNode.tagName.toLowerCase() ? n.parentNode.parentNode.insertBefore(o, null) : s ? s.parentNode.insertBefore(o, s.nextSibling) : n.parentNode.insertBefore(o, n.nextSibling);
        } else n.parentNode.insertBefore(o, n.nextSibling);
      }

      this.tooltipSelectorWrap.length && (this.state.tooltipsTimer = setTimeout(function () {
        e.hideTooltips();
      }, this.tooltipFadeOutTime));
    },
    hideTooltips: function () {
      var e = this,
          t = document.querySelectorAll(".js-validate-error-label");
      t.forEach(function (t) {
        t.classList.add(e.tooltipFadeOutClass);
      }), this.state.tooltipsTimer = null;
    },
    lockForm: function () {
      for (var e = this.$form.querySelectorAll("input, textarea, button, select"), t = 0, i = e.length; t < i; ++t) e[t].setAttribute("disabled", "disabled"), e[t].style.pointerEvents = "none", e[t].style.webitFilter = "grayscale(100%)", e[t].style.filter = "grayscale(100%)";
    },
    unlockForm: function () {
      for (var e = this.$form.querySelectorAll("input, textarea, button, select"), t = 0, i = e.length; t < i; ++t) e[t].removeAttribute("disabled"), e[t].style.pointerEvents = "", e[t].style.webitFilter = "", e[t].style.filter = "";
    }
  }, e.JustValidate = f;
}(window);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss ***!
  \**********************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/GraphikBold.otf */ "./src/fonts/GraphikBold.otf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../images/Icons/Facebook.svg */ "./src/images/Icons/Facebook.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../images/Icons/Google-login.svg */ "./src/images/Icons/Google-login.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_3___ = new URL(/* asset import */ __webpack_require__(/*! ../images/Icons/Apple-login.svg */ "./src/images/Icons/Apple-login.svg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_4___ = new URL(/* asset import */ __webpack_require__(/*! ../images/signNow-Logo.svg */ "./src/images/signNow-Logo.svg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
var ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_3___);
var ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_4___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "@font-face {\n  font-family: Graphik;\n  src: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ") format(\"truetype\");\n  font-weight: 700;\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.button__facebook {\n  width: 90px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ") 50% no-repeat;\n}\n@media (min-width: 440px) {\n  .button__facebook {\n    background-position: 17% 46%;\n    width: 133px;\n    padding: 5px 21px;\n  }\n}\n@media (min-width: 540px) {\n  .button__facebook {\n    background-position: 25% 46%;\n    width: 153px;\n  }\n}\n\n.button__google {\n  width: 90px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_2___ + ") 50% no-repeat;\n}\n@media (min-width: 440px) {\n  .button__google {\n    background-position: 21% 53%;\n    width: 116px;\n    padding: 8px 23px;\n  }\n}\n@media (min-width: 540px) {\n  .button__google {\n    background-position: 30% 53%;\n    width: 136px;\n  }\n}\n\n.button__apple {\n  width: 90px;\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_3___ + ") 50% no-repeat;\n}\n@media (min-width: 440px) {\n  .button__apple {\n    background-position: 24% 46%;\n    width: 107px;\n    padding: 5px 22px;\n  }\n}\n@media (min-width: 540px) {\n  .button__apple {\n    background-position: 31% 51%;\n    width: 127px;\n  }\n}\n\n.secondary__buttons {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 24px;\n  text-align: right;\n  color: transparent;\n  background-color: #FFFFFF;\n  border: 1px solid #C7CED3;\n  border-radius: 4px;\n  height: 40px;\n  transition: 0.3s;\n}\n@media (min-width: 440px) {\n  .secondary__buttons {\n    color: #414141;\n  }\n}\n@media (min-width: 540px) {\n  .secondary__buttons {\n    padding: 8px 26px 8px 60px;\n    text-align: center;\n  }\n}\n.secondary__buttons:hover {\n  border: 1px solid #0777CF;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.secondary__buttons:focus {\n  border: 1px solid #0777CF;\n  box-shadow: 0px 0px 0px 1px #FFFFFF, 0px 0px 0px 3px #667988;\n  border-radius: 4px;\n}\n\n.button__prime {\n  display: block;\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  color: #FFFFFF;\n  width: 100%;\n  height: 48px;\n  background: #0777CF;\n  border-radius: 4px;\n  transition: 0.3s;\n}\n.button__prime:hover {\n  background: #348FD7;\n  cursor: pointer;\n}\n.button__prime:focus {\n  background: #0777CF;\n  border: 1px solid #FFFFFF;\n  box-shadow: 0px 0px 0px 1px #FFFFFF, 0px 0px 0px 3px #667988;\n}\n\n.input__style {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  background: #FFFFFF;\n  border: 1px solid #81919D;\n  border-radius: 4px;\n  padding: 8px 0 8px 12px;\n  transition: 0.3s;\n  color: #38424B;\n}\n.input__style::-moz-placeholder {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  color: #667988;\n}\n.input__style:-ms-input-placeholder {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  color: #667988;\n}\n.input__style::placeholder {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  color: #667988;\n}\n.input__style:hover {\n  border: 1px solid #738592;\n}\n.input__style:focus {\n  box-shadow: 0px 0px 0px 1px #FFFFFF, 0px 0px 0px 3px #667988;\n  border-color: #667988;\n  outline: none;\n}\n.input__style:focus::-moz-placeholder {\n  color: #38424B;\n}\n.input__style:focus:-ms-input-placeholder {\n  color: #38424B;\n}\n.input__style:focus::placeholder {\n  color: #38424B;\n}\n\n.js-validate-error-field {\n  color: #38424B !important;\n}\n\n[dir=\"ltr\"] .js-validate-error-label{\n  text-align: left;\n}\n\n[dir=\"rtl\"] .js-validate-error-label{\n  text-align: right;\n}\n\n.js-validate-error-label {\n  display: block;\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 16px;\n  color: #D73F3E;\n  width: 100%;\n  margin-top: 4px;\n  margin-bottom: 8px;\n}\n\n.rate {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  right: 0;\n  background: #FFFFFF;\n  box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.1);\n  border-radius: 4px;\n  width: 152px;\n  padding: 8px;\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  color: #546470;\n}\n@media (max-width: 1024px) {\n  .rate {\n    bottom: 0;\n  }\n}\n@media (max-width: 576px) {\n  .rate {\n    display: none;\n  }\n}\n.rate__dollar {\n  display: flex;\n  justify-content: center;\n  border-bottom: 1px solid #546470;\n}\n.rate__dollar--text {\n  margin-right: 4px;\n}\n.rate__eur {\n  display: flex;\n  justify-content: center;\n}\n.rate__eur--text {\n  margin-right: 4px;\n}\n\n.footer {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 400;\n}\n.footer__advice {\n  font-size: 14px;\n  line-height: 24px;\n  text-align: center;\n  color: #2C2C2C;\n  margin-bottom: 12px;\n}\n@media (min-width: 540px) {\n  .footer__advice {\n    font-size: 16px;\n  }\n}\n.footer__advice--link {\n  display: inline-block;\n  color: #0777CF;\n  transition: 0.3s;\n}\n.footer__advice--link:hover {\n  color: #348FD7;\n}\n.footer__consent {\n  font-size: 12px;\n  line-height: 18px;\n  text-align: center;\n  color: #667988;\n}\n.footer__consent--link {\n  color: #667988;\n  transition: 0.3s;\n}\n.footer__consent--link:hover {\n  color: #348FD7;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n.form__input {\n  min-width: 100%;\n  height: 48px;\n}\n.form__input:nth-child(2) {\n  margin-top: 16px;\n}\n.form__button {\n  margin: 28px 0 8px;\n  border: none;\n}\n.form__text {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 16px;\n  text-align: center;\n  color: #546470;\n  margin-bottom: 28px;\n}\n\n.popup {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 auto;\n  width: 100vw;\n  padding: 30px 10px;\n  background: #FFFFFF;\n  box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.1);\n  height: 100vh;\n  border-radius: 0;\n}\n@media (min-width: 375px) {\n  .popup {\n    padding: 40px 44px;\n  }\n}\n@media (min-width: 575px) {\n  .popup {\n    width: 576px;\n    padding: 60px 64px;\n    min-height: 628px;\n    border-radius: 12px;\n  }\n}\n@media (min-width: 1024px) {\n  .popup {\n    margin-top: 176px;\n  }\n}\n.popup__title {\n  font-family: \"Graphik\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 19px;\n  line-height: 40px;\n  color: #2C2C2C;\n  margin-bottom: 12px;\n}\n@media (min-width: 440px) {\n  .popup__title {\n    font-size: 32px;\n    margin-bottom: 36px;\n    margin-top: 19px;\n  }\n}\n@media (min-width: 575px) {\n  .popup__title {\n    margin-top: 0;\n  }\n}\n.popup__buttons {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 18px;\n}\n@media (min-width: 440px) {\n  .popup__buttons {\n    margin-bottom: 28px;\n  }\n}\n.popup__buttons--block {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.popup__buttons--block:not(:last-child) {\n  margin-right: 8px;\n}\n@media (min-width: 575px) {\n  .popup__buttons--block:not(:last-child) {\n    margin-right: 16px;\n  }\n}\n.popup__hint {\n  display: flex;\n  align-items: center;\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 24px;\n  text-align: center;\n  color: #546470;\n  margin-bottom: 28px;\n  width: 100%;\n}\n.popup__hint::before, .popup__hint::after {\n  content: \"\";\n  display: inline-block;\n  background: #D8E0E6;\n  border-radius: 4px;\n  vertical-align: middle;\n  height: 1px;\n  flex-grow: 1;\n}\n.popup__hint::before {\n  margin-right: 12px;\n}\n.popup__hint::after {\n  margin-left: 12px;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100vw;\n  height: 100%;\n  background-color: #E5E5E5;\n  position: relative;\n}\n@media (min-width: 576px) {\n  .container {\n    padding: 10px 0;\n  }\n}\n.container__logo {\n  position: absolute;\n  z-index: 10;\n  height: 40px;\n  min-width: 183px;\n  background-image: url(" + ___CSS_LOADER_URL_REPLACEMENT_4___ + ");\n  background-repeat: no-repeat;\n  background-size: 55%;\n  background-position: 50%;\n  margin: 0 auto;\n  margin-top: 5px;\n}\n@media (min-width: 440px) {\n  .container__logo {\n    background-size: 80%;\n    top: 2%;\n  }\n}\n@media (min-width: 576px) {\n  .container__logo {\n    background-size: 100%;\n    top: 3%;\n  }\n}\n@media (min-width: 1024px) {\n  .container__logo {\n    top: 77px;\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles/_fonts.scss","webpack://./src/styles/index.scss","webpack://./src/styles/_global.scss","webpack://./src/styles/buttons/_secondary-buttons.scss","webpack://./src/styles/buttons/_primary-buttons.scss","webpack://./src/styles/_inputs-style.scss","webpack://./src/styles/_exchange-rate.scss","webpack://./src/styles/_footer-popup.scss","webpack://./src/styles/_form.scss","webpack://./src/styles/_popup.scss","webpack://./src/styles/_container.scss"],"names":[],"mappings":"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","sourcesContent":["\n\n@font-face {\n  font-family: Graphik ;\n  src: url(\"../fonts/GraphikBold.otf\") format(\"truetype\");\n  font-weight: 700;\n}\n\n@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap');","@import url(\"https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&display=swap\");\n@font-face {\n  font-family: Graphik;\n  src: url(\"../fonts/GraphikBold.otf\") format(\"truetype\");\n  font-weight: 700;\n}\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.button__facebook {\n  width: 90px;\n  background: url(../images/Icons/Facebook.svg) 50% no-repeat;\n}\n@media (min-width: 440px) {\n  .button__facebook {\n    background-position: 17% 46%;\n    width: 133px;\n    padding: 5px 21px;\n  }\n}\n@media (min-width: 540px) {\n  .button__facebook {\n    background-position: 25% 46%;\n    width: 153px;\n  }\n}\n\n.button__google {\n  width: 90px;\n  background: url(../images/Icons/Google-login.svg) 50% no-repeat;\n}\n@media (min-width: 440px) {\n  .button__google {\n    background-position: 21% 53%;\n    width: 116px;\n    padding: 8px 23px;\n  }\n}\n@media (min-width: 540px) {\n  .button__google {\n    background-position: 30% 53%;\n    width: 136px;\n  }\n}\n\n.button__apple {\n  width: 90px;\n  background: url(../images/Icons/Apple-login.svg) 50% no-repeat;\n}\n@media (min-width: 440px) {\n  .button__apple {\n    background-position: 24% 46%;\n    width: 107px;\n    padding: 5px 22px;\n  }\n}\n@media (min-width: 540px) {\n  .button__apple {\n    background-position: 31% 51%;\n    width: 127px;\n  }\n}\n\n.secondary__buttons {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  line-height: 24px;\n  text-align: right;\n  color: transparent;\n  background-color: #FFFFFF;\n  border: 1px solid #C7CED3;\n  border-radius: 4px;\n  height: 40px;\n  transition: 0.3s;\n}\n@media (min-width: 440px) {\n  .secondary__buttons {\n    color: #414141;\n  }\n}\n@media (min-width: 540px) {\n  .secondary__buttons {\n    padding: 8px 26px 8px 60px;\n    text-align: center;\n  }\n}\n.secondary__buttons:hover {\n  border: 1px solid #0777CF;\n  border-radius: 4px;\n  cursor: pointer;\n}\n.secondary__buttons:focus {\n  border: 1px solid #0777CF;\n  box-shadow: 0px 0px 0px 1px #FFFFFF, 0px 0px 0px 3px #667988;\n  border-radius: 4px;\n}\n\n.button__prime {\n  display: block;\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  color: #FFFFFF;\n  width: 100%;\n  height: 48px;\n  background: #0777CF;\n  border-radius: 4px;\n  transition: 0.3s;\n}\n.button__prime:hover {\n  background: #348FD7;\n  cursor: pointer;\n}\n.button__prime:focus {\n  background: #0777CF;\n  border: 1px solid #FFFFFF;\n  box-shadow: 0px 0px 0px 1px #FFFFFF, 0px 0px 0px 3px #667988;\n}\n\n.input__style {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  background: #FFFFFF;\n  border: 1px solid #81919D;\n  border-radius: 4px;\n  padding: 8px 0 8px 12px;\n  transition: 0.3s;\n  color: #38424B;\n}\n.input__style::placeholder {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 16px;\n  line-height: 24px;\n  color: #667988;\n}\n.input__style:hover {\n  border: 1px solid #738592;\n}\n.input__style:focus {\n  box-shadow: 0px 0px 0px 1px #FFFFFF, 0px 0px 0px 3px #667988;\n  border-color: #667988;\n  outline: none;\n}\n.input__style:focus::placeholder {\n  color: #38424B;\n}\n\n.js-validate-error-field {\n  color: #38424B !important;\n}\n\n.js-validate-error-label {\n  display: block;\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 12px;\n  line-height: 16px;\n  color: #D73F3E;\n  text-align: start;\n  width: 100%;\n  margin-top: 4px;\n  margin-bottom: 8px;\n}\n\n.rate {\n  position: absolute;\n  display: flex;\n  flex-direction: column;\n  right: 0;\n  background: #FFFFFF;\n  box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.1);\n  border-radius: 4px;\n  width: 152px;\n  padding: 8px;\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 16px;\n  line-height: 24px;\n  text-align: center;\n  color: #546470;\n}\n@media (max-width: 1024px) {\n  .rate {\n    bottom: 0;\n  }\n}\n@media (max-width: 576px) {\n  .rate {\n    display: none;\n  }\n}\n.rate__dollar {\n  display: flex;\n  justify-content: center;\n  border-bottom: 1px solid #546470;\n}\n.rate__dollar--text {\n  margin-right: 4px;\n}\n.rate__eur {\n  display: flex;\n  justify-content: center;\n}\n.rate__eur--text {\n  margin-right: 4px;\n}\n\n.footer {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 400;\n}\n.footer__advice {\n  font-size: 14px;\n  line-height: 24px;\n  text-align: center;\n  color: #2C2C2C;\n  margin-bottom: 12px;\n}\n@media (min-width: 540px) {\n  .footer__advice {\n    font-size: 16px;\n  }\n}\n.footer__advice--link {\n  display: inline-block;\n  color: #0777CF;\n  transition: 0.3s;\n}\n.footer__advice--link:hover {\n  color: #348FD7;\n}\n.footer__consent {\n  font-size: 12px;\n  line-height: 18px;\n  text-align: center;\n  color: #667988;\n}\n.footer__consent--link {\n  color: #667988;\n  transition: 0.3s;\n}\n.footer__consent--link:hover {\n  color: #348FD7;\n}\n\n.form {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100%;\n}\n.form__input {\n  min-width: 100%;\n  height: 48px;\n}\n.form__input:nth-child(2) {\n  margin-top: 16px;\n}\n.form__button {\n  margin: 28px 0 8px;\n  border: none;\n}\n.form__text {\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 12px;\n  line-height: 16px;\n  text-align: center;\n  color: #546470;\n  margin-bottom: 28px;\n}\n\n.popup {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin: 0 auto;\n  width: 100vw;\n  padding: 30px 10px;\n  background: #FFFFFF;\n  box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.1);\n  height: 100vh;\n  border-radius: 0;\n}\n@media (min-width: 375px) {\n  .popup {\n    padding: 40px 44px;\n  }\n}\n@media (min-width: 575px) {\n  .popup {\n    width: 576px;\n    padding: 60px 64px;\n    min-height: 628px;\n    border-radius: 12px;\n  }\n}\n@media (min-width: 1024px) {\n  .popup {\n    margin-top: 176px;\n  }\n}\n.popup__title {\n  font-family: \"Graphik\";\n  font-style: normal;\n  font-weight: 700;\n  font-size: 19px;\n  line-height: 40px;\n  color: #2C2C2C;\n  margin-bottom: 12px;\n}\n@media (min-width: 440px) {\n  .popup__title {\n    font-size: 32px;\n    margin-bottom: 36px;\n    margin-top: 19px;\n  }\n}\n@media (min-width: 575px) {\n  .popup__title {\n    margin-top: 0;\n  }\n}\n.popup__buttons {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 18px;\n}\n@media (min-width: 440px) {\n  .popup__buttons {\n    margin-bottom: 28px;\n  }\n}\n.popup__buttons--block {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.popup__buttons--block:not(:last-child) {\n  margin-right: 8px;\n}\n@media (min-width: 575px) {\n  .popup__buttons--block:not(:last-child) {\n    margin-right: 16px;\n  }\n}\n.popup__hint {\n  display: flex;\n  align-items: center;\n  font-family: \"Open Sans\";\n  font-style: normal;\n  font-weight: 400;\n  font-size: 14px;\n  line-height: 24px;\n  text-align: center;\n  color: #546470;\n  margin-bottom: 28px;\n  width: 100%;\n}\n.popup__hint::before, .popup__hint::after {\n  content: \"\";\n  display: inline-block;\n  background: #D8E0E6;\n  border-radius: 4px;\n  vertical-align: middle;\n  height: 1px;\n  flex-grow: 1;\n}\n.popup__hint::before {\n  margin-right: 12px;\n}\n.popup__hint::after {\n  margin-left: 12px;\n}\n\n.container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100vw;\n  height: 100%;\n  background-color: #E5E5E5;\n  position: relative;\n}\n@media (min-width: 576px) {\n  .container {\n    padding: 10px 0;\n  }\n}\n.container__logo {\n  position: absolute;\n  z-index: 10;\n  height: 40px;\n  min-width: 183px;\n  background-image: url(../images/signNow-Logo.svg);\n  background-repeat: no-repeat;\n  background-size: 55%;\n  background-position: 50%;\n  margin: 0 auto;\n  margin-top: 5px;\n}\n@media (min-width: 440px) {\n  .container__logo {\n    background-size: 80%;\n    top: 2%;\n  }\n}\n@media (min-width: 576px) {\n  .container__logo {\n    background-size: 100%;\n    top: 3%;\n  }\n}\n@media (min-width: 1024px) {\n  .container__logo {\n    top: 77px;\n  }\n}","\n\n* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n","\n// sedcondary buttoms\n.button__facebook  {\n    width: 90px;\n    background: url(../images/Icons/Facebook.svg) 50% no-repeat;\n\n    @media (min-width: 440px) {\n        background-position: 17% 46%;\n        width: 133px;\n        padding: 5px 21px;\n    }\n\n    @media (min-width: 540px) {\n        background-position: 25% 46%;\n        width: 153px;\n    }\n}\n\n.button__google {\n    width: 90px;\n    background: url(../images/Icons/Google-login.svg) 50% no-repeat;\n\n    @media (min-width: 440px) {\n        background-position: 21% 53%;\n        width: 116px;\n        padding: 8px 23px;\n    }\n\n    @media (min-width: 540px) {\n        background-position: 30% 53%;\n        width: 136px;\n    }\n}\n\n.button__apple {\n    width: 90px;\n    background: url(../images/Icons/Apple-login.svg) 50% no-repeat;\n\n    @media (min-width: 440px) {\n        background-position: 24% 46%;\n        width: 107px;\n        padding: 5px 22px;\n    }\n\n    @media (min-width: 540px) {\n        background-position: 31% 51%;\n        width: 127px;\n    }\n}\n\n.secondary__buttons {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 600;\n    font-size: 14px;\n    line-height: 24px;\n    text-align: right;\n    color: transparent;\n    background-color: #FFFFFF;\n    border: 1px solid #C7CED3;\n    border-radius: 4px;\n    height: 40px;\n    transition: 0.3s;\n\n    @media (min-width: 440px) {\n        color: #414141;\n    }\n\n    @media (min-width: 540px) {\n        padding: 8px 26px 8px 60px;\n        text-align: center;\n    }\n\n    &:hover {\n        border: 1px solid #0777CF;\n        border-radius: 4px;\n        cursor: pointer;\n    }\n\n    &:focus {\n        border: 1px solid #0777CF;\n        box-shadow: 0px 0px 0px 1px #FFFFFF, 0px 0px 0px 3px #667988;\n        border-radius: 4px;\n    }\n}","// Primary Buttons\n\n.button__prime {\n    display: block;\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 700;\n    font-size: 16px;\n    line-height: 24px;\n    text-align: center;\n    color: #FFFFFF;\n    width: 100%;\n    height: 48px;\n    background: #0777CF;\n    border-radius: 4px;\n    transition: 0.3s;\n\n    &:hover {\n        background: #348FD7;\n        cursor: pointer;\n    }\n\n    &:focus {\n        background: #0777CF;\n        border: 1px solid #FFFFFF;\n        box-shadow: 0px 0px 0px 1px #FFFFFF, 0px 0px 0px 3px #667988;\n    }\n}","\n\n\n.input__style {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 400;\n    font-size: 16px;\n    line-height: 24px;\n    background: #FFFFFF;\n    border: 1px solid #81919D;\n    border-radius: 4px;\n    padding: 8px 0 8px 12px;\n    transition: 0.3s;\n    color:#38424B;\n\n\n    &::placeholder {\n        font-family: 'Open Sans';\n        font-style: normal;\n        font-weight: 400;\n        font-size: 16px;\n        line-height: 24px;\n        color: #667988;\n    }\n\n    &:hover {\n        border: 1px solid #738592;\n    }\n\n    &:focus {\n        box-shadow: 0px 0px 0px 1px #FFFFFF, 0px 0px 0px 3px #667988;\n        border-color: #667988;\n        outline: none;\n    }\n\n    &:focus::placeholder {\n        color: #38424B ;\n    }\n}\n\n.js-validate-error-field {\n    color: #38424B !important;\n}\n\n.js-validate-error-label {\n    display: block;\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 600;\n    font-size: 12px;\n    line-height: 16px;\n    color: #D73F3E;\n    text-align: start;\n    width: 100%;\n    margin-top: 4px;\n    margin-bottom: 8px;\n}","\n\n\n.rate {\n    position: absolute;\n    display: flex;\n    flex-direction: column;\n    right: 0;\n    background: #FFFFFF;\n    box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.1);\n    border-radius: 4px;\n    width: 152px;\n    padding: 8px;\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 600;\n    font-size: 16px;\n    line-height: 24px;\n    text-align: center;\n    color: #546470;\n\n    @media (max-width: 1024px) {\n        bottom: 0;\n    }\n\n    @media (max-width: 576px) {\n        display: none;\n    }\n\n    &__dollar {\n        display: flex;\n        justify-content: center;\n        border-bottom: 1px solid #546470;\n\n        &--text {\n            margin-right: 4px;\n        }\n    }\n\n    &__eur {\n        display: flex;\n        justify-content: center;\n\n        &--text {\n            margin-right: 4px;\n        }\n    }\n}","\n\n.footer {\n    font-family: 'Open Sans';\n    font-style: normal;\n    font-weight: 400;\n\n    &__advice {\n        font-size: 14px;\n        line-height: 24px;\n        text-align: center;\n        color: #2C2C2C;\n        margin-bottom: 12px;\n\n        @media (min-width: 540px) {\n        font-size: 16px;\n        }\n\n        &--link {\n        display: inline-block;\n        color: #0777CF;\n        transition: 0.3s;\n\n            &:hover {\n                color: #348FD7;\n            }\n        }\n    }\n    &__consent {\n        font-size: 12px;\n        line-height: 18px;\n        text-align: center;\n        color: #667988;\n\n        &--link {\n        color: #667988;\n        transition: 0.3s;\n\n            &:hover {\n                color: #348FD7;\n            }\n        }\n    }\n}","\n\n.form {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n\n\n    &__input {\n        min-width: 100%;\n        height: 48px;\n\n        &:nth-child(2) {\n        margin-top: 16px;\n        }\n    }\n\n    &__button {\n        margin: 28px 0 8px;\n        border: none;\n    }\n\n    &__text {\n        font-family: 'Open Sans';\n        font-style: normal;\n        font-weight: 400;\n        font-size: 12px;\n        line-height: 16px;\n        text-align: center;\n        color: #546470;\n        margin-bottom: 28px;\n    }\n}","\n\n.popup {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    margin: 0 auto;\n    width: 100vw;\n    padding: 30px 10px;\n    background: #FFFFFF;\n    box-shadow: 0px 8px 40px rgba(0, 0, 0, 0.1);\n    height: 100vh;\n    border-radius: 0;\n\n\n    @media (min-width:375px) {\n        padding: 40px 44px;\n    }\n\n    @media (min-width: 575px) {\n        width: 576px;\n        padding: 60px 64px;\n        min-height: 628px;\n        border-radius: 12px;\n    }\n\n    @media (min-width: 1024px) {\n        margin-top: 176px;\n    }\n\n    &__title {\n        font-family: 'Graphik';\n        font-style: normal;\n        font-weight: 700;\n        font-size: 19px;\n        line-height: 40px;\n        color: #2C2C2C;\n        margin-bottom: 12px;\n\n        @media (min-width:440px) {\n        font-size: 32px;\n        margin-bottom: 36px;\n        margin-top: 19px;\n        }\n\n        @media (min-width: 575px) {\n        margin-top: 0;\n        }\n    }\n\n    &__buttons {\n        display: flex;\n        justify-content: space-between;\n        margin-bottom: 18px;\n\n        @media (min-width:440px) {\n        margin-bottom: 28px;\n        }\n\n        &--block {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n\n        &:not(:last-child) {\n            margin-right: 8px;\n\n            @media (min-width: 575px) {\n            margin-right: 16px;\n            }\n        }\n        }\n    }\n\n    &__hint {\n        display: flex;\n        align-items: center;\n        font-family: 'Open Sans';\n        font-style: normal;\n        font-weight: 400;\n        font-size: 14px;\n        line-height: 24px;\n        text-align: center;\n        color: #546470;\n        margin-bottom: 28px;\n        width: 100%;\n\n        &::before, &::after {\n        content: \"\";\n        display: inline-block;\n        background: #D8E0E6;\n        border-radius: 4px;\n        vertical-align: middle;\n        height: 1px;\n        flex-grow: 1;\n        }\n\n        &::before {\n        margin-right: 12px;\n        }\n\n        &::after {\n        margin-left: 12px;\n        }\n    }\n}","\n\n.container {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100vw;\n    height: 100%;\n    background-color: #E5E5E5;\n    position: relative;\n\n    @media (min-width: 576px) {\n        padding: 10px 0;\n    }\n\n    &__logo {\n        position: absolute;\n        z-index: 10;\n        height: 40px;\n        min-width: 183px;\n        background-image: url(../images/signNow-Logo.svg);\n        background-repeat: no-repeat;\n        background-size: 55%;\n        background-position: 50%;\n        margin: 0 auto;\n        margin-top: 5px;\n\n        @media (min-width: 440px) {\n        background-size: 80%;\n        top: 2%;\n        }\n\n        @media (min-width: 576px) {\n        background-size: 100%;\n        top: 3%\n        }\n\n        @media (min-width: 1024px) {\n        top: 77px;\n        }\n    }\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var _i = 0; _i < this.length; _i++) {
        var id = this[_i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i2 = 0; _i2 < modules.length; _i2++) {
      var item = [].concat(modules[_i2]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/dist/cjs.js??ruleSet[1].rules[1].use[2]!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_postcss_loader_dist_cjs_js_ruleSet_1_rules_1_use_2_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/fonts/GraphikBold.otf":
/*!***********************************!*\
  !*** ./src/fonts/GraphikBold.otf ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/e78d3d4f87bc060c0a1a.otf";

/***/ }),

/***/ "./src/images/Icons/Apple-login.svg":
/*!******************************************!*\
  !*** ./src/images/Icons/Apple-login.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/e2f100490f83144d4eee.svg";

/***/ }),

/***/ "./src/images/Icons/Facebook.svg":
/*!***************************************!*\
  !*** ./src/images/Icons/Facebook.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/32c5ee8929160ed86e86.svg";

/***/ }),

/***/ "./src/images/Icons/Google-login.svg":
/*!*******************************************!*\
  !*** ./src/images/Icons/Google-login.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/dd0f06489f8eaa9f1c67.svg";

/***/ }),

/***/ "./src/images/signNow-Logo.svg":
/*!*************************************!*\
  !*** ./src/images/signNow-Logo.svg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "assets/d5c76b30debe1f6d5d01.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"scripts": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_index_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/index.scss */ "./src/styles/index.scss");
/* harmony import */ var _just_validate_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./just-validate.min.js */ "./src/just-validate.min.js");
/* harmony import */ var _just_validate_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_just_validate_min_js__WEBPACK_IMPORTED_MODULE_1__);

 // Validate form

new window.JustValidate('.js-form', {
  rulse: {},
  colorWrong: '#D73F3E',
  submitHandler: function (form, values, ajax) {
    console.log(values);
    form.reset();
  }
}); // API endpoint, exchange rate

fetch(' https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5').then(function (resp) {
  return resp.json();
}).then(function (data) {
  console.log(data);
  document.querySelector('.rate__dollar--text').textContent = data[0]['ccy'];
  document.querySelector('.rate__dollar--buy').textContent = Math.round(data[0]['buy'] * 100) / 100;
  document.querySelector('.rate__dollar--sale').textContent = Math.round(data[0]['sale'] * 100) / 100;
  document.querySelector('.rate__eur--text').textContent = data[1]['ccy'];
  document.querySelector('.rate__eur--buy').textContent = Math.round(data[1]['buy'] * 100) / 100;
  document.querySelector('.rate__eur--sale').textContent = Math.round(data[1]['sale'] * 100) / 100;
});
})();

/******/ })()
;
//# sourceMappingURL=scripts.493fb2b58d5b92619589.js.map