import h3, { useState as N, useRef as n3, useEffect as f3, useLayoutEffect as v3, useMemo as w3 } from "react";
var X = { exports: {} }, Y = {};
var a3;
function g3() {
  if (a3) return Y;
  a3 = 1;
  var t = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
  function s(l, i, o) {
    var d = null;
    if (o !== void 0 && (d = "" + o), i.key !== void 0 && (d = "" + i.key), "key" in i) {
      o = {};
      for (var a in i)
        a !== "key" && (o[a] = i[a]);
    } else o = i;
    return i = o.ref, {
      $$typeof: t,
      type: l,
      key: d,
      ref: i !== void 0 ? i : null,
      props: o
    };
  }
  return Y.Fragment = r, Y.jsx = s, Y.jsxs = s, Y;
}
var I = {};
var l3;
function E3() {
  return l3 || (l3 = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === H ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case A:
          return "Fragment";
        case u:
          return "Profiler";
        case w:
          return "StrictMode";
        case y:
          return "Suspense";
        case T:
          return "SuspenseList";
        case $:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case g:
            return "Portal";
          case R:
            return e.displayName || "Context";
          case S:
            return (e._context.displayName || "Context") + ".Consumer";
          case C:
            var n = e.render;
            return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case j:
            return n = e.displayName || null, n !== null ? n : t(e.type) || "Memo";
          case k:
            n = e._payload, e = e._init;
            try {
              return t(e(n));
            } catch {
            }
        }
      return null;
    }
    function r(e) {
      return "" + e;
    }
    function s(e) {
      try {
        r(e);
        var n = !1;
      } catch {
        n = !0;
      }
      if (n) {
        n = console;
        var p = n.error, E = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return p.call(
          n,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          E
        ), r(e);
      }
    }
    function l(e) {
      if (e === A) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === k)
        return "<...>";
      try {
        var n = t(e);
        return n ? "<" + n + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function i() {
      var e = O.A;
      return e === null ? null : e.getOwner();
    }
    function o() {
      return Error("react-stack-top-frame");
    }
    function d(e) {
      if (U.call(e, "key")) {
        var n = Object.getOwnPropertyDescriptor(e, "key").get;
        if (n && n.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function a(e, n) {
      function p() {
        z || (z = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          n
        ));
      }
      p.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: p,
        configurable: !0
      });
    }
    function f() {
      var e = t(this.type);
      return W[e] || (W[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function m(e, n, p, E, G, t3) {
      var b = p.ref;
      return e = {
        $$typeof: v,
        type: e,
        key: n,
        props: p,
        _owner: E
      }, (b !== void 0 ? b : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: f
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: G
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: t3
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function x(e, n, p, E, G, t3) {
      var b = n.children;
      if (b !== void 0)
        if (E)
          if (F(b)) {
            for (E = 0; E < b.length; E++)
              _(b[E]);
            Object.freeze && Object.freeze(b);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else _(b);
      if (U.call(n, "key")) {
        b = t(e);
        var P = Object.keys(n).filter(function(p3) {
          return p3 !== "key";
        });
        E = 0 < P.length ? "{key: someKey, " + P.join(": ..., ") + ": ...}" : "{key: someKey}", q[b + E] || (P = 0 < P.length ? "{" + P.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          E,
          b,
          P,
          b
        ), q[b + E] = !0);
      }
      if (b = null, p !== void 0 && (s(p), b = "" + p), d(n) && (s(n.key), b = "" + n.key), "key" in n) {
        p = {};
        for (var r3 in n)
          r3 !== "key" && (p[r3] = n[r3]);
      } else p = n;
      return b && a(
        p,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), m(
        e,
        b,
        p,
        i(),
        G,
        t3
      );
    }
    function _(e) {
      D(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === k && (e._payload.status === "fulfilled" ? D(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function D(e) {
      return typeof e == "object" && e !== null && e.$$typeof === v;
    }
    var h = h3, v = /* @__PURE__ */ Symbol.for("react.transitional.element"), g = /* @__PURE__ */ Symbol.for("react.portal"), A = /* @__PURE__ */ Symbol.for("react.fragment"), w = /* @__PURE__ */ Symbol.for("react.strict_mode"), u = /* @__PURE__ */ Symbol.for("react.profiler"), S = /* @__PURE__ */ Symbol.for("react.consumer"), R = /* @__PURE__ */ Symbol.for("react.context"), C = /* @__PURE__ */ Symbol.for("react.forward_ref"), y = /* @__PURE__ */ Symbol.for("react.suspense"), T = /* @__PURE__ */ Symbol.for("react.suspense_list"), j = /* @__PURE__ */ Symbol.for("react.memo"), k = /* @__PURE__ */ Symbol.for("react.lazy"), $ = /* @__PURE__ */ Symbol.for("react.activity"), H = /* @__PURE__ */ Symbol.for("react.client.reference"), O = h.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, U = Object.prototype.hasOwnProperty, F = Array.isArray, M = console.createTask ? console.createTask : function() {
      return null;
    };
    h = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var z, W = {}, V = h.react_stack_bottom_frame.bind(
      h,
      o
    )(), J = M(l(o)), q = {};
    I.Fragment = A, I.jsx = function(e, n, p) {
      var E = 1e4 > O.recentlyCreatedOwnerStacks++;
      return x(
        e,
        n,
        p,
        !1,
        E ? Error("react-stack-top-frame") : V,
        E ? M(l(e)) : J
      );
    }, I.jsxs = function(e, n, p) {
      var E = 1e4 > O.recentlyCreatedOwnerStacks++;
      return x(
        e,
        n,
        p,
        !0,
        E ? Error("react-stack-top-frame") : V,
        E ? M(l(e)) : J
      );
    };
  })()), I;
}
var i3;
function b3() {
  return i3 || (i3 = 1, process.env.NODE_ENV === "production" ? X.exports = g3() : X.exports = E3()), X.exports;
}
var c = b3();
function Q(t) {
  const r = {
    0: "०",
    1: "१",
    2: "२",
    3: "३",
    4: "४",
    5: "५",
    6: "६",
    7: "७",
    8: "८",
    9: "९"
  };
  return String(t).replace(/[0-9]/g, (s) => r[s]);
}
const c3 = (t, r) => {
  if (!t) return null;
  try {
    if (r === "AD") return new Date(t);
    const [s, l, i] = t.split("-").map(Number);
    return e3(s, l, i);
  } catch {
    return null;
  }
}, u3 = (t) => {
  const r = Z(t);
  return `${r.year}-${String(r.month).padStart(2, "0")}-${String(r.day).padStart(2, "0")}`;
}, s3 = ({
  type: t = "select",
  options: r = [],
  value: s,
  onChange: l = () => {
  },
  placeholder: i = t === "calendar" ? "Select date" : "Select an option",
  disabled: o = !1,
  className: d,
  onClick: a,
  name: f,
  lang: m = "en",
  clearable: x = !1,
  onClear: _
}) => {
  const [D, h] = N(!1), v = n3(null);
  f3(() => {
    const w = (u) => {
      v.current && !v.current.contains(u.target) && h(!1);
    };
    return document.addEventListener("mousedown", w), () => document.removeEventListener("mousedown", w);
  }, []);
  const g = m === "np" && s ? Q(s) : s;
  if (t === "calendar")
    return /* @__PURE__ */ c.jsxs("div", { className: "calendar", children: [
      /* @__PURE__ */ c.jsx(
        "input",
        {
          readOnly: !0,
          type: "text",
          name: f,
          value: g,
          placeholder: i,
          className: `custom-calendar ${d}`,
          onClick: a
        }
      ),
      s && !o && x && /* @__PURE__ */ c.jsx(
        "button",
        {
          type: "button",
          onClick: (w) => {
            w.stopPropagation(), _?.();
          },
          className: "clear-btn",
          children: /* @__PURE__ */ c.jsx(
            "svg",
            {
              xmlns: "http://www.w3.org/2000/svg",
              width: "16",
              height: "16",
              fill: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ c.jsx("path", { d: "M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" })
            }
          )
        }
      ),
      /* @__PURE__ */ c.jsx(
        "svg",
        {
          className: "calendar-icon",
          xmlns: "http://www.w3.org/2000/svg",
          fill: "currentColor",
          viewBox: "0 0 24 24",
          children: /* @__PURE__ */ c.jsx("path", { d: "M9 1v2h6V1h2v2h4a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h4V1zm11 10H4v8h16zM7 5H4v4h16V5h-3v2h-2V5H9v2H7z" })
        }
      )
    ] });
  const A = r.find((w) => w.value === s);
  return /* @__PURE__ */ c.jsxs("div", { ref: v, className: `custom-select ${d} ${o ? "disabled" : ""}`, children: [
    /* @__PURE__ */ c.jsxs(
      "button",
      {
        type: "button",
        className: "select-trigger",
        onClick: () => !o && h((w) => !w),
        disabled: o,
        children: [
          /* @__PURE__ */ c.jsx("span", { className: A ? "" : "placeholder", children: A?.label || i }),
          /* @__PURE__ */ c.jsx(
            "svg",
            {
              className: `arrow ${D ? "open" : ""}`,
              xmlns: "http://www.w3.org/2000/svg",
              fill: "currentColor",
              viewBox: "0 0 24 24",
              children: /* @__PURE__ */ c.jsx("path", { d: "m12 15-4.243-4.242 1.415-1.414L12 12.172l2.828-2.828 1.415 1.414z" })
            }
          )
        ]
      }
    ),
    D && /* @__PURE__ */ c.jsxs("ul", { className: "select-dropdown", children: [
      r.length === 0 && /* @__PURE__ */ c.jsx("li", { className: "empty", children: "No options" }),
      r.map((w) => /* @__PURE__ */ c.jsx(
        "li",
        {
          className: `option ${w.value === s ? "active" : ""}`,
          onClick: () => {
            l(w.value), h(!1);
          },
          children: w.label
        },
        w.value
      ))
    ] })
  ] });
}, L = {
  1978: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  1979: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  1980: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  1981: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  1982: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  1983: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  1984: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  1985: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  1986: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  1987: [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  1988: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  1989: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  1990: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  1991: [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  1992: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  1993: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  1994: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  1995: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  1996: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  1997: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  1998: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  1999: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2e3: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2001: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2002: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2003: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2004: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2005: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2006: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2007: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2008: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
  2009: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2010: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2011: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2012: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  2013: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2014: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2015: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2016: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  2017: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2018: [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2019: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2020: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  2021: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2022: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  2023: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2024: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  2025: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2026: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2027: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2028: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2029: [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
  2030: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2031: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2032: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2033: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2034: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2035: [30, 32, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
  2036: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2037: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2038: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2039: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  2040: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2041: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2042: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2043: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  2044: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2045: [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2046: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2047: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  2048: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2049: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  2050: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2051: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  2052: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2053: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  2054: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2055: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2056: [31, 31, 32, 31, 32, 30, 30, 29, 30, 29, 30, 30],
  2057: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2058: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2059: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2060: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2061: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2062: [30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31],
  2063: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2064: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2065: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2066: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 29, 31],
  2067: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2068: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2069: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2070: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  2071: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2072: [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2073: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2074: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  2075: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2076: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  2077: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2078: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  2079: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2080: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  2081: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2082: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2083: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2084: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2085: [30, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31],
  2086: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2087: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2088: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2089: [30, 32, 31, 32, 31, 31, 29, 30, 29, 30, 29, 31],
  2090: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2091: [31, 31, 32, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2092: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2093: [31, 31, 31, 32, 31, 31, 29, 30, 30, 29, 30, 30],
  2094: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2095: [31, 32, 31, 32, 31, 30, 30, 29, 30, 29, 30, 30],
  2096: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 31],
  2097: [31, 31, 31, 32, 31, 31, 30, 29, 30, 29, 30, 30],
  2098: [31, 31, 32, 31, 31, 31, 30, 29, 30, 29, 30, 30],
  2099: [31, 32, 31, 32, 31, 30, 30, 30, 29, 29, 30, 30],
  2100: [31, 32, 31, 32, 31, 30, 30, 30, 29, 30, 29, 31]
}, B = /* @__PURE__ */ new Date("1943-04-14"), m3 = 2e3;
function Z(t) {
  const r = t.getFullYear();
  if (r < 1943 || r > 2044)
    return console.warn("AD date is out of supported BS range (2000-2100)."), { year: r + 57, month: t.getMonth() + 1, day: t.getDate() };
  const s = 1e3 * 60 * 60 * 24, l = Date.UTC(
    B.getFullYear(),
    B.getMonth(),
    B.getDate()
  ), i = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
  let o = Math.floor((i - l) / s), d = m3, a = 1, f = 1;
  if (o < 0)
    return { year: 0, month: 0, day: 0 };
  for (; o > 0; ) {
    const m = L[d][a - 1];
    o >= m ? (o -= m, a++, a > 12 && (a = 1, d++)) : (f += o, o = 0);
  }
  return { year: d, month: a, day: f };
}
function e3(t, r, s) {
  if (t < 2e3 || t > 2100)
    return console.warn("BS date is out of range (2000-2100)."), new Date(t - 57, r - 1, s);
  let l = 0;
  for (let a = m3; a < t; a++)
    l += L[a].reduce((f, m) => f + m, 0);
  for (let a = 1; a < r; a++)
    l += L[t][a - 1];
  l += s - 1;
  const i = 1e3 * 60 * 60 * 24, d = Date.UTC(
    B.getFullYear(),
    B.getMonth(),
    B.getDate()
  ) + l * i;
  return new Date(d);
}
const x3 = (t, r) => {
  const s = new Date(r, t, 1).getDay(), l = new Date(r, t + 1, 0).getDate(), i = Array(s).fill(null);
  for (let o = 1; o <= l; o++)
    i.push(o);
  return i;
}, S3 = (t, r) => {
  if (!L[r])
    return console.error(`BS data for year ${r} not available.`), Array(35).fill(null);
  const l = e3(r, t + 1, 1).getDay(), i = L[r][t], o = Array(l).fill(null);
  for (let d = 1; d <= i; d++)
    o.push(d);
  return o;
}, _3 = (t, r) => {
  f3(() => {
    const s = (l) => {
      t.current && !t.current.contains(l.target) && r();
    };
    return document.addEventListener("mousedown", s), () => document.removeEventListener("mousedown", s);
  }, [t, r]);
}, y3 = (t, r, s) => {
  const [l, i] = N("bottom");
  return v3(() => {
    if (!t || !r.current || !s.current) return;
    const o = () => {
      const d = r.current.getBoundingClientRect(), a = s.current.getBoundingClientRect(), m = window.innerHeight - d.bottom, x = d.top;
      m < a.height && x > a.height ? i("top") : i("bottom");
    };
    return o(), window.addEventListener("scroll", o, !0), window.addEventListener("resize", o), () => {
      window.removeEventListener("scroll", o, !0), window.removeEventListener("resize", o);
    };
  }, [t, r, s]), l;
}, D3 = (t, r, s, l, i, o) => w3(() => {
  const d = s === "AD" ? x3(r, t) : S3(r, t);
  let a = 0;
  if (s === "AD")
    a = new Date(t, r, 0).getDate();
  else {
    const u = r > 0 ? r - 1 : 11, S = r > 0 ? t : t - 1;
    a = L[S]?.[u] ?? 0;
  }
  const f = d.findIndex((u) => u !== null);
  let m = 1;
  const x = /* @__PURE__ */ new Date(), _ = Z(x), D = Z(l), h = (u, S, R) => {
    const C = s === "AD" ? new Date(R, S, u) : e3(R, S + 1, u), y = new Date(C).setHours(0, 0, 0, 0);
    if (i) {
      const T = new Date(i).setHours(0, 0, 0, 0);
      if (y < T) return !0;
    }
    if (o) {
      const T = new Date(o).setHours(0, 0, 0, 0);
      if (y > T) return !0;
    }
    return !1;
  }, v = (u, S, R) => {
    let C = !1, y = !1, T = S, j = r, k = t;
    return R === "prev" ? (j = r === 0 ? 11 : r - 1, k = r === 0 ? t - 1 : t) : R === "next" && (j = r === 11 ? 0 : r + 1, k = r === 11 ? t + 1 : t), h(u, j, k) && (T = !0), S || (s === "AD" ? (C = x.getFullYear() === t && x.getMonth() === r && x.getDate() === u, y = l.getFullYear() === t && l.getMonth() === r && l.getDate() === u) : (C = _.year === t && _.month - 1 === r && _.day === u, y = D.year === t && D.month - 1 === r && D.day === u)), { day: u, isDisabled: T, isToday: C, isSelected: y };
  }, g = d.map((u, S) => {
    if (u !== null) return v(u, !1);
    if (S < f) {
      const R = a - (f - 1 - S);
      return v(R, !0, "prev");
    }
    return v(m++, !0, "next");
  }), A = 7 - g.length % 7;
  if (A < 7)
    for (let u = 0; u < A; u++)
      g.push(v(m++, !0, "next"));
  const w = [];
  for (let u = 0; u < g.length; u += 7)
    w.push(g.slice(u, u + 7));
  return w;
}, [t, r, s, l, i, o]), o3 = ["आइत", "सोम", "मंगल", "बुध", "बिही", "शुक्र", "शनि"], K = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], T3 = ({ weeks: t, calendarType: r, onSelect: s, lang: l = "en" }) => {
  const i = (a, f) => a === "BS" && f === "np" ? o3 : K, o = (a, f, m) => f === "BS" && m === "np" ? Q(a) : a, d = i(r, l);
  return /* @__PURE__ */ c.jsxs("table", { className: "calendar-table", children: [
    /* @__PURE__ */ c.jsx("thead", { children: /* @__PURE__ */ c.jsx("tr", { children: d.map((a, f) => /* @__PURE__ */ c.jsx("th", { children: a }, f)) }) }),
    /* @__PURE__ */ c.jsx("tbody", { children: t.map((a, f) => /* @__PURE__ */ c.jsx("tr", { children: a.map((m, x) => /* @__PURE__ */ c.jsx(
      "td",
      {
        className: `calendar-cell 
                  ${m.isSelected ? "active" : ""} 
                  ${m.isToday ? "today" : ""} 
                  ${m.isDisabled ? "disabled" : ""}`,
        onClick: () => s(m),
        children: o(m.day, r, l)
      },
      x
    )) }, f)) })
  ] });
}, d3 = ({ direction: t, onClick: r, disabled: s }) => {
  const l = t === "next";
  return /* @__PURE__ */ c.jsx("button", { onClick: r, className: "arrow-btn", disabled: s, children: /* @__PURE__ */ c.jsx(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      className: l ? "-mr-1" : "rotate-180 -ml-1",
      children: /* @__PURE__ */ c.jsx("polyline", { points: "9 18 15 12 9 6" })
    }
  ) });
}, A3 = [
  "बैशाख",
  "जेठ",
  "असार",
  "साउन",
  "भदौ",
  "असोज",
  "कार्तिक",
  "मंसिर",
  "पुस",
  "माघ",
  "फागुन",
  "चैत"
], R3 = [
  "Baishakh",
  "Jestha",
  "Ashadh",
  "Shrawan",
  "Bhadra",
  "Ashwin",
  "Kartik",
  "Mangsir",
  "Poush",
  "Magh",
  "Falgun",
  "Chaitra"
], k3 = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December"
], C3 = (t, r) => r === "AD" ? {
  months: k3,
  weekdays: t === "np" ? o3 : K
} : {
  months: t === "np" ? A3 : R3,
  weekdays: t === "np" ? o3 : K
}, j3 = ({
  currentMonth: t,
  currentYear: r,
  calendarType: s,
  onMonthChange: l,
  onYearChange: i,
  onPrev: o,
  onNext: d,
  lang: a = "en"
}) => {
  const { months: f } = C3(a, s), m = s === "BS", x = m && r <= 2e3 && t <= 0, _ = m && r >= 2100 && t >= 11, D = () => {
    if (m) {
      const h = [];
      for (let v = 2100; v >= 2e3; v--) {
        const g = a === "np" ? Q(v) : v.toString();
        h.push({
          value: v,
          label: `${g}`
        });
      }
      return h;
    } else {
      const h = (/* @__PURE__ */ new Date()).getFullYear(), v = [];
      for (let g = h + 20; g >= h - 80; g--)
        v.push({ value: g, label: g.toString() });
      return v;
    }
  };
  return /* @__PURE__ */ c.jsxs("div", { className: "datepicker-header", children: [
    /* @__PURE__ */ c.jsx(d3, { direction: "prev", disabled: x, onClick: o }),
    /* @__PURE__ */ c.jsxs("div", { className: "datepicker-select", children: [
      /* @__PURE__ */ c.jsx(
        s3,
        {
          className: "month-select",
          value: t,
          onChange: (h) => l(Number(h)),
          options: f.map((h, v) => ({ label: h, value: v }))
        }
      ),
      /* @__PURE__ */ c.jsx(
        s3,
        {
          className: "year-select",
          value: r,
          onChange: (h) => i(Number(h)),
          options: D()
        }
      )
    ] }),
    /* @__PURE__ */ c.jsx(d3, { direction: "next", disabled: _, onClick: d })
  ] });
}, O3 = ({
  calendar: t = "AD",
  onChange: r,
  placeholder: s,
  value: l,
  className: i,
  min: o,
  max: d,
  name: a,
  lang: f = "en",
  darkMode: m = !1,
  clearable: x
}) => {
  const _ = /* @__PURE__ */ new Date(), D = Z(_), h = c3(o, t), v = c3(d, t), [g, A] = N(_), [w] = N(t), [u, S] = N(!1), [R, C] = N(!1), [y, T] = N(
    t === "BS" ? D.month - 1 : _.getMonth()
  ), [j, k] = N(
    t === "BS" ? D.year : _.getFullYear()
  ), $ = n3(null), H = n3(null);
  _3($, () => S(!1));
  const O = y3(u, $, H), U = D3(
    j,
    y,
    w,
    g,
    h,
    v
  ), F = l ?? (R ? w === "AD" ? g.toLocaleDateString("en-CA") : u3(g) : void 0), M = f === "np" && F ? Q(F) : F, z = s ?? (f === "np" ? "मिति छान्नुहोस्" : "Select date"), W = (n) => {
    if (n.isDisabled) return;
    const p = w === "AD" ? new Date(j, y, n.day) : e3(j, y + 1, n.day);
    A(p), C(!0), S(!1), r?.(w === "BS" ? u3(p) : p.toLocaleDateString("en-CA"));
  }, V = () => {
    y === 0 ? (T(11), k((n) => n - 1)) : T((n) => n - 1);
  }, J = () => {
    y === 11 ? (T(0), k((n) => n + 1)) : T((n) => n + 1);
  }, q = (n) => {
    k(n);
  }, e = () => {
    C(!1), A(/* @__PURE__ */ new Date()), r?.("");
  };
  return /* @__PURE__ */ c.jsxs("div", { className: `wrapper ${m ? "dark" : ""}`, ref: $, children: [
    /* @__PURE__ */ c.jsx(
      s3,
      {
        name: a,
        type: "calendar",
        onClick: () => S((n) => !n),
        onClear: e,
        placeholder: z,
        value: M,
        className: i,
        lang: f,
        clearable: x
      }
    ),
    u && /* @__PURE__ */ c.jsxs(
      "div",
      {
        className: "datepicker",
        ref: H,
        style: {
          [O === "bottom" ? "top" : "bottom"]: "100%",
          [O === "bottom" ? "marginTop" : "marginBottom"]: "4px",
          zIndex: 1e3
        },
        children: [
          /* @__PURE__ */ c.jsx(
            j3,
            {
              currentMonth: y,
              currentYear: j,
              calendarType: w,
              onMonthChange: T,
              onYearChange: q,
              onPrev: V,
              onNext: J,
              minDate: h,
              maxDate: v,
              lang: f
            }
          ),
          /* @__PURE__ */ c.jsx("div", { className: "datepicker-calendar", children: /* @__PURE__ */ c.jsx(
            T3,
            {
              weeks: U,
              calendarType: w,
              onSelect: W,
              lang: f
            }
          ) })
        ]
      }
    )
  ] });
};
export {
  O3 as DatePicker,
  Z as adToBs,
  e3 as bsToAd
};
