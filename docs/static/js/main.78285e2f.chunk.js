(this.webpackJsonpexample = this.webpackJsonpexample || []).push([
  [0],
  {
    11: function (e, c, t) {},
    12: function (e, c, t) {},
    13: function (e, c, t) {
      'use strict';
      t.r(c);
      var j = t(0),
        s = t(1),
        l = t.n(s),
        n = t(5),
        a = t.n(n),
        i = (t(11), t(12), t(2));
      var r = function () {
          return Object(j.jsxs)('div', {
            className: 'root',
            children: [
              Object(j.jsx)('h1', { className: 'title', children: 'Js Value View' }),
              Object(j.jsxs)('section', {
                children: [
                  Object(j.jsx)('header', { children: 'Number' }),
                  Object(j.jsxs)('article', {
                    children: [
                      Object(j.jsx)(i.a, { value: 1 }),
                      Object(j.jsx)(i.a, { value: 1.12 }),
                      Object(j.jsx)(i.a, { value: Number.MAX_SAFE_INTEGER }),
                      Object(j.jsx)(i.a, { value: Number.MAX_VALUE }),
                      Object(j.jsx)(i.a, { value: Number.MIN_SAFE_INTEGER }),
                      Object(j.jsx)(i.a, { value: Number.MIN_VALUE }),
                    ],
                  }),
                ],
              }),
              Object(j.jsxs)('section', {
                children: [
                  Object(j.jsx)('header', { children: 'Boolean' }),
                  Object(j.jsxs)('article', {
                    children: [Object(j.jsx)(i.a, { value: !0 }), Object(j.jsx)(i.a, { value: !1 })],
                  }),
                ],
              }),
              Object(j.jsxs)('section', {
                children: [
                  Object(j.jsx)('header', { children: 'Null & Undefined' }),
                  Object(j.jsxs)('article', {
                    children: [Object(j.jsx)(i.a, { value: null }), Object(j.jsx)(i.a, { value: void 0 })],
                  }),
                ],
              }),
              Object(j.jsxs)('section', {
                children: [
                  Object(j.jsx)('header', { children: 'String' }),
                  Object(j.jsxs)('article', {
                    children: [
                      Object(j.jsx)(i.a, { value: 'null' }),
                      Object(j.jsx)(i.a, { value: 'undefined' }),
                      Object(j.jsx)(i.a, { value: 'Hello World' }),
                    ],
                  }),
                ],
              }),
              Object(j.jsxs)('section', {
                children: [
                  Object(j.jsx)('header', { children: 'Object' }),
                  Object(j.jsx)('article', {
                    children: Object(j.jsx)(i.a, {
                      value: { a: 1, b: '2', c: !1, d: null, e: { a: 1 }, f: [1, { a: 1 }] },
                    }),
                  }),
                ],
              }),
              Object(j.jsxs)('section', {
                children: [
                  Object(j.jsx)('header', { children: 'Array' }),
                  Object(j.jsx)('article', {
                    children: Object(j.jsx)(i.a, { value: [1, '2', !0, null, void 0, { a: 1 }, [{ a: 1 }]] }),
                  }),
                ],
              }),
            ],
          });
        },
        b = function (e) {
          e &&
            e instanceof Function &&
            t
              .e(3)
              .then(t.bind(null, 14))
              .then(function (c) {
                var t = c.getCLS,
                  j = c.getFID,
                  s = c.getFCP,
                  l = c.getLCP,
                  n = c.getTTFB;
                t(e), j(e), s(e), l(e), n(e);
              });
        };
      a.a.render(Object(j.jsx)(l.a.StrictMode, { children: Object(j.jsx)(r, {}) }), document.getElementById('root')),
        b();
    },
  },
  [[13, 1, 2]],
]);
//# sourceMappingURL=main.78285e2f.chunk.js.map
