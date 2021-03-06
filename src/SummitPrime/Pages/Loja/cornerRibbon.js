module.exports = (function (e) {
  var t = {};
  function r(n) {
    if (t[n]) return t[n].exports;
    var o = (t[n] = { i: n, l: !1, exports: {} });
    return e[n].call(o.exports, o, o.exports, r), (o.l = !0), o.exports;
  }
  return (
    (r.m = e),
    (r.c = t),
    (r.d = function (e, t, n) {
      r.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (r.r = function (e) {
      "undefined" != typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (r.t = function (e, t) {
      if ((1 & t && (e = r(e)), 8 & t)) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (r.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var o in e)
          r.d(
            n,
            o,
            function (t) {
              return e[t];
            }.bind(null, o)
          );
      return n;
    }),
    (r.n = function (e) {
      var t =
        e && e.__esModule
          ? function () {
              return e.default;
            }
          : function () {
              return e;
            };
      return r.d(t, "a", t), t;
    }),
    (r.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (r.p = ""),
    r((r.s = 0))
  );
})([
  function (e, t, r) {
    "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 });
    var n =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
          }
          return e;
        },
      o = (function () {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var n = t[r];
            (n.enumerable = n.enumerable || !1),
              (n.configurable = !0),
              "value" in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n);
          }
        }
        return function (t, r, n) {
          return r && e(t.prototype, r), n && e(t, n), t;
        };
      })(),
      u = i(r(1)),
      a = i(r(4));
    function i(e) {
      return e && e.__esModule ? e : { default: e };
    }
    function f(e, t) {
      if (!(e instanceof t))
        throw new TypeError("Cannot call a class as a function");
    }
    function c(e, t) {
      if (!e)
        throw new ReferenceError(
          "this hasn't been initialised - super() hasn't been called"
        );
      return !t || ("object" != typeof t && "function" != typeof t) ? e : t;
    }
    var l = {
        position: a.default.string,
        fontColor: a.default.string,
        backgroundColor: a.default.string,
      },
      s = (function (e) {
        function t() {
          return (
            f(this, t),
            c(
              this,
              (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments)
            )
          );
        }
        return (
          (function (e, t) {
            if ("function" != typeof t && null !== t)
              throw new TypeError(
                "Super expression must either be null or a function, not " +
                  typeof t
              );
            (e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })),
              t &&
                (Object.setPrototypeOf
                  ? Object.setPrototypeOf(e, t)
                  : (e.__proto__ = t));
          })(t, e),
          o(t, [
            {
              key: "render",
              value: function () {
                var e = this.props,
                  t = e.children,
                  r = e.style,
                  o = e.backgroundColor,
                  a = void 0 === o ? "#2c7" : o,
                  i = e.fontColor,
                  f = void 0 === i ? "#f0f0f0" : i,
                  c = e.position,
                  l = void 0 === c ? "top-right" : c,
                  s = e.containerStyle,
                  p = {};
                switch (l) {
                  case "top-left":
                    p = {
                      top: 0,
                      left: 0,
                      transform:
                        "translateY(-100%) rotate(-90deg) translateX(-70.71067811865476%) rotate(45deg)",
                      transformOrigin: "bottom left",
                      WebkitTransform:
                        "translateY(-100%) rotate(-90deg) translateX(-70.71067811865476%) rotate(45deg)",
                    };
                    break;
                  case "top-right":
                    p = {
                      top: 0,
                      right: 0,
                      transform:
                        "translateY(-100%) rotate(90deg) translateX(70.71067811865476%) rotate(-45deg)",
                      transformOrigin: "bottom right",
                      WebkitTransform:
                        "translateY(-100%) rotate(90deg) translateX(70.71067811865476%) rotate(-45deg)",
                    };
                    break;
                  case "bottom-left":
                    p = {
                      bottom: 0,
                      left: 0,
                      transform:
                        "translateY(100%) rotate(90deg) translateX(-70.71067811865476%) rotate(-45deg)",
                      transformOrigin: "top left",
                      WebkitTransform:
                        "translateY(100%) rotate(90deg) translateX(-70.71067811865476%) rotate(-45deg)",
                    };
                    break;
                  case "bottom-right":
                    p = {
                      right: 0,
                      bottom: 0,
                      transform:
                        "translateY(100%) rotate(-90deg) translateX(70.71067811865476%) rotate(45deg)",
                      transformOrigin: "top right",
                      WebkitTransform:
                        "translateY(100%) rotate(-90deg) translateX(70.71067811865476%) rotate(45deg)",
                    };
                }
                var y = n(
                    {
                      position: "absolute",
                      padding: "0.1em 2em",
                      zIndex: 99,
                      textAlign: "center",
                      letterSpacing: "2px",
                      fontSize: "14px",
                      pointerEvents: "auto",
                      boxShadow: "0 0 3px rgba(0,0,0,.3)",
                    },
                    a && { backgroundColor: a },
                    f && { color: f },
                    p,
                    r
                  ),
                  d = n(
                    {
                      position: "absolute",
                      top: 0,
                      right: 0,
                      left: 0,
                      bottom: 0,
                      overflow: "hidden",
                      backgroundColor: "transparent",
                      pointerEvents: "none",
                    },
                    s
                  );
                return u.default.createElement(
                  "div",
                  { style: d },
                  u.default.createElement("div", { style: y }, t)
                );
              },
            },
          ]),
          t
        );
      })(u.default.Component);
    (s.propTypes = l),
      (s.defaultProps = {
        backgroundColor: "#2c7",
        fontColor: "#f0f0f0",
        position: "top-right",
      }),
      (t.default = s);
  },
  function (e, t, r) {
    "use strict";
    e.exports = r(2);
  },
  function (e, t, r) {
    "use strict";
    /** @license React v16.14.0
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */ var n = r(3),
      o = "function" == typeof Symbol && Symbol.for,
      u = o ? Symbol.for("react.element") : 60103,
      a = o ? Symbol.for("react.portal") : 60106,
      i = o ? Symbol.for("react.fragment") : 60107,
      f = o ? Symbol.for("react.strict_mode") : 60108,
      c = o ? Symbol.for("react.profiler") : 60114,
      l = o ? Symbol.for("react.provider") : 60109,
      s = o ? Symbol.for("react.context") : 60110,
      p = o ? Symbol.for("react.forward_ref") : 60112,
      y = o ? Symbol.for("react.suspense") : 60113,
      d = o ? Symbol.for("react.memo") : 60115,
      b = o ? Symbol.for("react.lazy") : 60116,
      m = "function" == typeof Symbol && Symbol.iterator;
    function h(e) {
      for (
        var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e,
          r = 1;
        r < arguments.length;
        r++
      )
        t += "&args[]=" + encodeURIComponent(arguments[r]);
      return (
        "Minified React error #" +
        e +
        "; visit " +
        t +
        " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
      );
    }
    var g = {
        isMounted: function () {
          return !1;
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      v = {};
    function O(e, t, r) {
      (this.props = e),
        (this.context = t),
        (this.refs = v),
        (this.updater = r || g);
    }
    function _() {}
    function S(e, t, r) {
      (this.props = e),
        (this.context = t),
        (this.refs = v),
        (this.updater = r || g);
    }
    (O.prototype.isReactComponent = {}),
      (O.prototype.setState = function (e, t) {
        if ("object" != typeof e && "function" != typeof e && null != e)
          throw Error(h(85));
        this.updater.enqueueSetState(this, e, t, "setState");
      }),
      (O.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      }),
      (_.prototype = O.prototype);
    var j = (S.prototype = new _());
    (j.constructor = S), n(j, O.prototype), (j.isPureReactComponent = !0);
    var k = { current: null },
      w = Object.prototype.hasOwnProperty,
      P = { key: !0, ref: !0, __self: !0, __source: !0 };
    function x(e, t, r) {
      var n,
        o = {},
        a = null,
        i = null;
      if (null != t)
        for (n in (void 0 !== t.ref && (i = t.ref),
        void 0 !== t.key && (a = "" + t.key),
        t))
          w.call(t, n) && !P.hasOwnProperty(n) && (o[n] = t[n]);
      var f = arguments.length - 2;
      if (1 === f) o.children = r;
      else if (1 < f) {
        for (var c = Array(f), l = 0; l < f; l++) c[l] = arguments[l + 2];
        o.children = c;
      }
      if (e && e.defaultProps)
        for (n in (f = e.defaultProps)) void 0 === o[n] && (o[n] = f[n]);
      return {
        $$typeof: u,
        type: e,
        key: a,
        ref: i,
        props: o,
        _owner: k.current,
      };
    }
    function C(e) {
      return "object" == typeof e && null !== e && e.$$typeof === u;
    }
    var E = /\/+/g,
      R = [];
    function T(e, t, r, n) {
      if (R.length) {
        var o = R.pop();
        return (
          (o.result = e),
          (o.keyPrefix = t),
          (o.func = r),
          (o.context = n),
          (o.count = 0),
          o
        );
      }
      return { result: e, keyPrefix: t, func: r, context: n, count: 0 };
    }
    function $(e) {
      (e.result = null),
        (e.keyPrefix = null),
        (e.func = null),
        (e.context = null),
        (e.count = 0),
        10 > R.length && R.push(e);
    }
    function I(e, t, r) {
      return null == e
        ? 0
        : (function e(t, r, n, o) {
            var i = typeof t;
            ("undefined" !== i && "boolean" !== i) || (t = null);
            var f = !1;
            if (null === t) f = !0;
            else
              switch (i) {
                case "string":
                case "number":
                  f = !0;
                  break;
                case "object":
                  switch (t.$$typeof) {
                    case u:
                    case a:
                      f = !0;
                  }
              }
            if (f) return n(o, t, "" === r ? "." + A(t, 0) : r), 1;
            if (((f = 0), (r = "" === r ? "." : r + ":"), Array.isArray(t)))
              for (var c = 0; c < t.length; c++) {
                var l = r + A((i = t[c]), c);
                f += e(i, l, n, o);
              }
            else if (
              (null === t || "object" != typeof t
                ? (l = null)
                : (l =
                    "function" == typeof (l = (m && t[m]) || t["@@iterator"])
                      ? l
                      : null),
              "function" == typeof l)
            )
              for (t = l.call(t), c = 0; !(i = t.next()).done; )
                f += e((i = i.value), (l = r + A(i, c++)), n, o);
            else if ("object" === i)
              throw (
                ((n = "" + t),
                Error(
                  h(
                    31,
                    "[object Object]" === n
                      ? "object with keys {" + Object.keys(t).join(", ") + "}"
                      : n,
                    ""
                  )
                ))
              );
            return f;
          })(e, "", t, r);
    }
    function A(e, t) {
      return "object" == typeof e && null !== e && null != e.key
        ? (function (e) {
            var t = { "=": "=0", ":": "=2" };
            return (
              "$" +
              ("" + e).replace(/[=:]/g, function (e) {
                return t[e];
              })
            );
          })(e.key)
        : t.toString(36);
    }
    function M(e, t) {
      e.func.call(e.context, t, e.count++);
    }
    function Y(e, t, r) {
      var n = e.result,
        o = e.keyPrefix;
      (e = e.func.call(e.context, t, e.count++)),
        Array.isArray(e)
          ? U(e, n, r, function (e) {
              return e;
            })
          : null != e &&
            (C(e) &&
              (e = (function (e, t) {
                return {
                  $$typeof: u,
                  type: e.type,
                  key: t,
                  ref: e.ref,
                  props: e.props,
                  _owner: e._owner,
                };
              })(
                e,
                o +
                  (!e.key || (t && t.key === e.key)
                    ? ""
                    : ("" + e.key).replace(E, "$&/") + "/") +
                  r
              )),
            n.push(e));
    }
    function U(e, t, r, n, o) {
      var u = "";
      null != r && (u = ("" + r).replace(E, "$&/") + "/"),
        I(e, Y, (t = T(t, u, n, o))),
        $(t);
    }
    var q = { current: null };
    function W() {
      var e = q.current;
      if (null === e) throw Error(h(321));
      return e;
    }
    var X = {
      ReactCurrentDispatcher: q,
      ReactCurrentBatchConfig: { suspense: null },
      ReactCurrentOwner: k,
      IsSomeRendererActing: { current: !1 },
      assign: n,
    };
    (t.Children = {
      map: function (e, t, r) {
        if (null == e) return e;
        var n = [];
        return U(e, n, null, t, r), n;
      },
      forEach: function (e, t, r) {
        if (null == e) return e;
        I(e, M, (t = T(null, null, t, r))), $(t);
      },
      count: function (e) {
        return I(
          e,
          function () {
            return null;
          },
          null
        );
      },
      toArray: function (e) {
        var t = [];
        return (
          U(e, t, null, function (e) {
            return e;
          }),
          t
        );
      },
      only: function (e) {
        if (!C(e)) throw Error(h(143));
        return e;
      },
    }),
      (t.Component = O),
      (t.Fragment = i),
      (t.Profiler = c),
      (t.PureComponent = S),
      (t.StrictMode = f),
      (t.Suspense = y),
      (t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X),
      (t.cloneElement = function (e, t, r) {
        if (null == e) throw Error(h(267, e));
        var o = n({}, e.props),
          a = e.key,
          i = e.ref,
          f = e._owner;
        if (null != t) {
          if (
            (void 0 !== t.ref && ((i = t.ref), (f = k.current)),
            void 0 !== t.key && (a = "" + t.key),
            e.type && e.type.defaultProps)
          )
            var c = e.type.defaultProps;
          for (l in t)
            w.call(t, l) &&
              !P.hasOwnProperty(l) &&
              (o[l] = void 0 === t[l] && void 0 !== c ? c[l] : t[l]);
        }
        var l = arguments.length - 2;
        if (1 === l) o.children = r;
        else if (1 < l) {
          c = Array(l);
          for (var s = 0; s < l; s++) c[s] = arguments[s + 2];
          o.children = c;
        }
        return {
          $$typeof: u,
          type: e.type,
          key: a,
          ref: i,
          props: o,
          _owner: f,
        };
      }),
      (t.createContext = function (e, t) {
        return (
          void 0 === t && (t = null),
          ((e = {
            $$typeof: s,
            _calculateChangedBits: t,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
          }).Provider = { $$typeof: l, _context: e }),
          (e.Consumer = e)
        );
      }),
      (t.createElement = x),
      (t.createFactory = function (e) {
        var t = x.bind(null, e);
        return (t.type = e), t;
      }),
      (t.createRef = function () {
        return { current: null };
      }),
      (t.forwardRef = function (e) {
        return { $$typeof: p, render: e };
      }),
      (t.isValidElement = C),
      (t.lazy = function (e) {
        return { $$typeof: b, _ctor: e, _status: -1, _result: null };
      }),
      (t.memo = function (e, t) {
        return { $$typeof: d, type: e, compare: void 0 === t ? null : t };
      }),
      (t.useCallback = function (e, t) {
        return W().useCallback(e, t);
      }),
      (t.useContext = function (e, t) {
        return W().useContext(e, t);
      }),
      (t.useDebugValue = function () {}),
      (t.useEffect = function (e, t) {
        return W().useEffect(e, t);
      }),
      (t.useImperativeHandle = function (e, t, r) {
        return W().useImperativeHandle(e, t, r);
      }),
      (t.useLayoutEffect = function (e, t) {
        return W().useLayoutEffect(e, t);
      }),
      (t.useMemo = function (e, t) {
        return W().useMemo(e, t);
      }),
      (t.useReducer = function (e, t, r) {
        return W().useReducer(e, t, r);
      }),
      (t.useRef = function (e) {
        return W().useRef(e);
      }),
      (t.useState = function (e) {
        return W().useState(e);
      }),
      (t.version = "16.14.0");
  },
  function (e, t, r) {
    "use strict";
    /*
object-assign
(c) Sindre Sorhus
@license MIT
*/ var n = Object.getOwnPropertySymbols,
      o = Object.prototype.hasOwnProperty,
      u = Object.prototype.propertyIsEnumerable;
    function a(e) {
      if (null == e)
        throw new TypeError(
          "Object.assign cannot be called with null or undefined"
        );
      return Object(e);
    }
    e.exports = (function () {
      try {
        if (!Object.assign) return !1;
        var e = new String("abc");
        if (((e[5] = "de"), "5" === Object.getOwnPropertyNames(e)[0]))
          return !1;
        for (var t = {}, r = 0; r < 10; r++)
          t["_" + String.fromCharCode(r)] = r;
        if (
          "0123456789" !==
          Object.getOwnPropertyNames(t)
            .map(function (e) {
              return t[e];
            })
            .join("")
        )
          return !1;
        var n = {};
        return (
          "abcdefghijklmnopqrst".split("").forEach(function (e) {
            n[e] = e;
          }),
          "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, n)).join("")
        );
      } catch (e) {
        return !1;
      }
    })()
      ? Object.assign
      : function (e, t) {
          for (var r, i, f = a(e), c = 1; c < arguments.length; c++) {
            for (var l in (r = Object(arguments[c])))
              o.call(r, l) && (f[l] = r[l]);
            if (n) {
              i = n(r);
              for (var s = 0; s < i.length; s++)
                u.call(r, i[s]) && (f[i[s]] = r[i[s]]);
            }
          }
          return f;
        };
  },
  function (e, t, r) {
    e.exports = r(5)();
  },
  function (e, t, r) {
    "use strict";
    var n = r(6);
    function o() {}
    function u() {}
    (u.resetWarningCache = o),
      (e.exports = function () {
        function e(e, t, r, o, u, a) {
          if (a !== n) {
            var i = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw ((i.name = "Invariant Violation"), i);
          }
        }
        function t() {
          return e;
        }
        e.isRequired = e;
        var r = {
          array: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: t,
          element: e,
          elementType: e,
          instanceOf: t,
          node: e,
          objectOf: t,
          oneOf: t,
          oneOfType: t,
          shape: t,
          exact: t,
          checkPropTypes: u,
          resetWarningCache: o,
        };
        return (r.PropTypes = r), r;
      });
  },
  function (e, t, r) {
    "use strict";
    e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  },
]);
