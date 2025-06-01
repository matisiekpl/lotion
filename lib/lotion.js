import { defineComponent as ze, h as Kn, resolveComponent as Aa, ref as Ke, onMounted as Da, onBeforeUnmount as Ds, getCurrentInstance as up, watchEffect as fp, nextTick as dp, unref as he, shallowRef as hp, markRaw as pp, customRef as mp, computed as bf, watch as wf, openBlock as me, createElementBlock as qe, createVNode as vt, withKeys as $l, withModifiers as Mo, createBlock as Br, withCtx as Sr, createElementVNode as We, normalizeClass as wt, createCommentVNode as un, toDisplayString as Ao, renderSlot as gp, withDirectives as yp, Fragment as kf, renderList as xf, vShow as vp, resolveDynamicComponent as bp, onBeforeUpdate as wp, mergeProps as kp, TransitionGroup as xp } from "vue";
/*!
  * vue-draggable-next v2.2.0
  * (c) 2023 Anish George
  * @license MIT
  */
/**!
 * Sortable 1.14.0
 * @author	RubaXa   <trash@rubaxa.org>
 * @author	owenm    <owen23355@gmail.com>
 * @license MIT
 */
function kc(n, e) {
  var t = Object.keys(n);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(n);
    e && (r = r.filter(function(i) {
      return Object.getOwnPropertyDescriptor(n, i).enumerable;
    })), t.push.apply(t, r);
  }
  return t;
}
function It(n) {
  for (var e = 1; e < arguments.length; e++) {
    var t = arguments[e] != null ? arguments[e] : {};
    e % 2 ? kc(Object(t), !0).forEach(function(r) {
      Sp(n, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t)) : kc(Object(t)).forEach(function(r) {
      Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return n;
}
function yo(n) {
  return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? yo = function(e) {
    return typeof e;
  } : yo = function(e) {
    return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
  }, yo(n);
}
function Sp(n, e, t) {
  return e in n ? Object.defineProperty(n, e, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : n[e] = t, n;
}
function Yt() {
  return Yt = Object.assign || function(n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t)
        Object.prototype.hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, Yt.apply(this, arguments);
}
function Ep(n, e) {
  if (n == null)
    return {};
  var t = {}, r = Object.keys(n), i, o;
  for (o = 0; o < r.length; o++)
    i = r[o], !(e.indexOf(i) >= 0) && (t[i] = n[i]);
  return t;
}
function Cp(n, e) {
  if (n == null)
    return {};
  var t = Ep(n, e), r, i;
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(n);
    for (i = 0; i < o.length; i++)
      r = o[i], !(e.indexOf(r) >= 0) && (!Object.prototype.propertyIsEnumerable.call(n, r) || (t[r] = n[r]));
  }
  return t;
}
var Tp = "1.14.0";
function Jt(n) {
  if (typeof window < "u" && window.navigator)
    return !!/* @__PURE__ */ navigator.userAgent.match(n);
}
var Zt = Jt(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i), Pi = Jt(/Edge/i), xc = Jt(/firefox/i), ti = Jt(/safari/i) && !Jt(/chrome/i) && !Jt(/android/i), Sf = Jt(/iP(ad|od|hone)/i), Op = Jt(/chrome/i) && Jt(/android/i), Ef = {
  capture: !1,
  passive: !1
};
function ie(n, e, t) {
  n.addEventListener(e, t, !Zt && Ef);
}
function ne(n, e, t) {
  n.removeEventListener(e, t, !Zt && Ef);
}
function Do(n, e) {
  if (!!e) {
    if (e[0] === ">" && (e = e.substring(1)), n)
      try {
        if (n.matches)
          return n.matches(e);
        if (n.msMatchesSelector)
          return n.msMatchesSelector(e);
        if (n.webkitMatchesSelector)
          return n.webkitMatchesSelector(e);
      } catch {
        return !1;
      }
    return !1;
  }
}
function Mp(n) {
  return n.host && n !== document && n.host.nodeType ? n.host : n.parentNode;
}
function Tt(n, e, t, r) {
  if (n) {
    t = t || document;
    do {
      if (e != null && (e[0] === ">" ? n.parentNode === t && Do(n, e) : Do(n, e)) || r && n === t)
        return n;
      if (n === t)
        break;
    } while (n = Mp(n));
  }
  return null;
}
var Sc = /\s+/g;
function Xe(n, e, t) {
  if (n && e)
    if (n.classList)
      n.classList[t ? "add" : "remove"](e);
    else {
      var r = (" " + n.className + " ").replace(Sc, " ").replace(" " + e + " ", " ");
      n.className = (r + (t ? " " + e : "")).replace(Sc, " ");
    }
}
function H(n, e, t) {
  var r = n && n.style;
  if (r) {
    if (t === void 0)
      return document.defaultView && document.defaultView.getComputedStyle ? t = document.defaultView.getComputedStyle(n, "") : n.currentStyle && (t = n.currentStyle), e === void 0 ? t : t[e];
    !(e in r) && e.indexOf("webkit") === -1 && (e = "-webkit-" + e), r[e] = t + (typeof t == "string" ? "" : "px");
  }
}
function br(n, e) {
  var t = "";
  if (typeof n == "string")
    t = n;
  else
    do {
      var r = H(n, "transform");
      r && r !== "none" && (t = r + " " + t);
    } while (!e && (n = n.parentNode));
  var i = window.DOMMatrix || window.WebKitCSSMatrix || window.CSSMatrix || window.MSCSSMatrix;
  return i && new i(t);
}
function Cf(n, e, t) {
  if (n) {
    var r = n.getElementsByTagName(e), i = 0, o = r.length;
    if (t)
      for (; i < o; i++)
        t(r[i], i);
    return r;
  }
  return [];
}
function Dt() {
  var n = document.scrollingElement;
  return n || document.documentElement;
}
function ye(n, e, t, r, i) {
  if (!(!n.getBoundingClientRect && n !== window)) {
    var o, s, l, a, c, u, f;
    if (n !== window && n.parentNode && n !== Dt() ? (o = n.getBoundingClientRect(), s = o.top, l = o.left, a = o.bottom, c = o.right, u = o.height, f = o.width) : (s = 0, l = 0, a = window.innerHeight, c = window.innerWidth, u = window.innerHeight, f = window.innerWidth), (e || t) && n !== window && (i = i || n.parentNode, !Zt))
      do
        if (i && i.getBoundingClientRect && (H(i, "transform") !== "none" || t && H(i, "position") !== "static")) {
          var d = i.getBoundingClientRect();
          s -= d.top + parseInt(H(i, "border-top-width")), l -= d.left + parseInt(H(i, "border-left-width")), a = s + o.height, c = l + o.width;
          break;
        }
      while (i = i.parentNode);
    if (r && n !== window) {
      var h = br(i || n), p = h && h.a, m = h && h.d;
      h && (s /= m, l /= p, f /= p, u /= m, a = s + u, c = l + f);
    }
    return {
      top: s,
      left: l,
      bottom: a,
      right: c,
      width: f,
      height: u
    };
  }
}
function Ec(n, e, t) {
  for (var r = pn(n, !0), i = ye(n)[e]; r; ) {
    var o = ye(r)[t], s = void 0;
    if (t === "top" || t === "left" ? s = i >= o : s = i <= o, !s)
      return r;
    if (r === Dt())
      break;
    r = pn(r, !1);
  }
  return !1;
}
function Er(n, e, t, r) {
  for (var i = 0, o = 0, s = n.children; o < s.length; ) {
    if (s[o].style.display !== "none" && s[o] !== V.ghost && (r || s[o] !== V.dragged) && Tt(s[o], t.draggable, n, !1)) {
      if (i === e)
        return s[o];
      i++;
    }
    o++;
  }
  return null;
}
function Na(n, e) {
  for (var t = n.lastElementChild; t && (t === V.ghost || H(t, "display") === "none" || e && !Do(t, e)); )
    t = t.previousElementSibling;
  return t || null;
}
function lt(n, e) {
  var t = 0;
  if (!n || !n.parentNode)
    return -1;
  for (; n = n.previousElementSibling; )
    n.nodeName.toUpperCase() !== "TEMPLATE" && n !== V.clone && (!e || Do(n, e)) && t++;
  return t;
}
function Cc(n) {
  var e = 0, t = 0, r = Dt();
  if (n)
    do {
      var i = br(n), o = i.a, s = i.d;
      e += n.scrollLeft * o, t += n.scrollTop * s;
    } while (n !== r && (n = n.parentNode));
  return [e, t];
}
function Ap(n, e) {
  for (var t in n)
    if (!!n.hasOwnProperty(t)) {
      for (var r in e)
        if (e.hasOwnProperty(r) && e[r] === n[t][r])
          return Number(t);
    }
  return -1;
}
function pn(n, e) {
  if (!n || !n.getBoundingClientRect)
    return Dt();
  var t = n, r = !1;
  do
    if (t.clientWidth < t.scrollWidth || t.clientHeight < t.scrollHeight) {
      var i = H(t);
      if (t.clientWidth < t.scrollWidth && (i.overflowX == "auto" || i.overflowX == "scroll") || t.clientHeight < t.scrollHeight && (i.overflowY == "auto" || i.overflowY == "scroll")) {
        if (!t.getBoundingClientRect || t === document.body)
          return Dt();
        if (r || e)
          return t;
        r = !0;
      }
    }
  while (t = t.parentNode);
  return Dt();
}
function Dp(n, e) {
  if (n && e)
    for (var t in e)
      e.hasOwnProperty(t) && (n[t] = e[t]);
  return n;
}
function Gs(n, e) {
  return Math.round(n.top) === Math.round(e.top) && Math.round(n.left) === Math.round(e.left) && Math.round(n.height) === Math.round(e.height) && Math.round(n.width) === Math.round(e.width);
}
var ni;
function Tf(n, e) {
  return function() {
    if (!ni) {
      var t = arguments, r = this;
      t.length === 1 ? n.call(r, t[0]) : n.apply(r, t), ni = setTimeout(function() {
        ni = void 0;
      }, e);
    }
  };
}
function Np() {
  clearTimeout(ni), ni = void 0;
}
function Of(n, e, t) {
  n.scrollLeft += e, n.scrollTop += t;
}
function Mf(n) {
  var e = window.Polymer, t = window.jQuery || window.Zepto;
  return e && e.dom ? e.dom(n).cloneNode(!0) : t ? t(n).clone(!0)[0] : n.cloneNode(!0);
}
var et = "Sortable" + new Date().getTime();
function Ip() {
  var n = [], e;
  return {
    captureAnimationState: function() {
      if (n = [], !!this.options.animation) {
        var r = [].slice.call(this.el.children);
        r.forEach(function(i) {
          if (!(H(i, "display") === "none" || i === V.ghost)) {
            n.push({
              target: i,
              rect: ye(i)
            });
            var o = It({}, n[n.length - 1].rect);
            if (i.thisAnimationDuration) {
              var s = br(i, !0);
              s && (o.top -= s.f, o.left -= s.e);
            }
            i.fromRect = o;
          }
        });
      }
    },
    addAnimationState: function(r) {
      n.push(r);
    },
    removeAnimationState: function(r) {
      n.splice(Ap(n, {
        target: r
      }), 1);
    },
    animateAll: function(r) {
      var i = this;
      if (!this.options.animation) {
        clearTimeout(e), typeof r == "function" && r();
        return;
      }
      var o = !1, s = 0;
      n.forEach(function(l) {
        var a = 0, c = l.target, u = c.fromRect, f = ye(c), d = c.prevFromRect, h = c.prevToRect, p = l.rect, m = br(c, !0);
        m && (f.top -= m.f, f.left -= m.e), c.toRect = f, c.thisAnimationDuration && Gs(d, f) && !Gs(u, f) && (p.top - f.top) / (p.left - f.left) === (u.top - f.top) / (u.left - f.left) && (a = Pp(p, d, h, i.options)), Gs(f, u) || (c.prevFromRect = u, c.prevToRect = f, a || (a = i.options.animation), i.animate(c, p, f, a)), a && (o = !0, s = Math.max(s, a), clearTimeout(c.animationResetTimer), c.animationResetTimer = setTimeout(function() {
          c.animationTime = 0, c.prevFromRect = null, c.fromRect = null, c.prevToRect = null, c.thisAnimationDuration = null;
        }, a), c.thisAnimationDuration = a);
      }), clearTimeout(e), o ? e = setTimeout(function() {
        typeof r == "function" && r();
      }, s) : typeof r == "function" && r(), n = [];
    },
    animate: function(r, i, o, s) {
      if (s) {
        H(r, "transition", ""), H(r, "transform", "");
        var l = br(this.el), a = l && l.a, c = l && l.d, u = (i.left - o.left) / (a || 1), f = (i.top - o.top) / (c || 1);
        r.animatingX = !!u, r.animatingY = !!f, H(r, "transform", "translate3d(" + u + "px," + f + "px,0)"), this.forRepaintDummy = Rp(r), H(r, "transition", "transform " + s + "ms" + (this.options.easing ? " " + this.options.easing : "")), H(r, "transform", "translate3d(0,0,0)"), typeof r.animated == "number" && clearTimeout(r.animated), r.animated = setTimeout(function() {
          H(r, "transition", ""), H(r, "transform", ""), r.animated = !1, r.animatingX = !1, r.animatingY = !1;
        }, s);
      }
    }
  };
}
function Rp(n) {
  return n.offsetWidth;
}
function Pp(n, e, t, r) {
  return Math.sqrt(Math.pow(e.top - n.top, 2) + Math.pow(e.left - n.left, 2)) / Math.sqrt(Math.pow(e.top - t.top, 2) + Math.pow(e.left - t.left, 2)) * r.animation;
}
var sr = [], Ys = {
  initializeByDefault: !0
}, Li = {
  mount: function(e) {
    for (var t in Ys)
      Ys.hasOwnProperty(t) && !(t in e) && (e[t] = Ys[t]);
    sr.forEach(function(r) {
      if (r.pluginName === e.pluginName)
        throw "Sortable: Cannot mount plugin ".concat(e.pluginName, " more than once");
    }), sr.push(e);
  },
  pluginEvent: function(e, t, r) {
    var i = this;
    this.eventCanceled = !1, r.cancel = function() {
      i.eventCanceled = !0;
    };
    var o = e + "Global";
    sr.forEach(function(s) {
      !t[s.pluginName] || (t[s.pluginName][o] && t[s.pluginName][o](It({
        sortable: t
      }, r)), t.options[s.pluginName] && t[s.pluginName][e] && t[s.pluginName][e](It({
        sortable: t
      }, r)));
    });
  },
  initializePlugins: function(e, t, r, i) {
    sr.forEach(function(l) {
      var a = l.pluginName;
      if (!(!e.options[a] && !l.initializeByDefault)) {
        var c = new l(e, t, e.options);
        c.sortable = e, c.options = e.options, e[a] = c, Yt(r, c.defaults);
      }
    });
    for (var o in e.options)
      if (!!e.options.hasOwnProperty(o)) {
        var s = this.modifyOption(e, o, e.options[o]);
        typeof s < "u" && (e.options[o] = s);
      }
  },
  getEventProperties: function(e, t) {
    var r = {};
    return sr.forEach(function(i) {
      typeof i.eventProperties == "function" && Yt(r, i.eventProperties.call(t[i.pluginName], e));
    }), r;
  },
  modifyOption: function(e, t, r) {
    var i;
    return sr.forEach(function(o) {
      !e[o.pluginName] || o.optionListeners && typeof o.optionListeners[t] == "function" && (i = o.optionListeners[t].call(e[o.pluginName], r));
    }), i;
  }
};
function Lp(n) {
  var e = n.sortable, t = n.rootEl, r = n.name, i = n.targetEl, o = n.cloneEl, s = n.toEl, l = n.fromEl, a = n.oldIndex, c = n.newIndex, u = n.oldDraggableIndex, f = n.newDraggableIndex, d = n.originalEvent, h = n.putSortable, p = n.extraEventProperties;
  if (e = e || t && t[et], !!e) {
    var m, g = e.options, v = "on" + r.charAt(0).toUpperCase() + r.substr(1);
    window.CustomEvent && !Zt && !Pi ? m = new CustomEvent(r, {
      bubbles: !0,
      cancelable: !0
    }) : (m = document.createEvent("Event"), m.initEvent(r, !0, !0)), m.to = s || t, m.from = l || t, m.item = i || t, m.clone = o, m.oldIndex = a, m.newIndex = c, m.oldDraggableIndex = u, m.newDraggableIndex = f, m.originalEvent = d, m.pullMode = h ? h.lastPutMode : void 0;
    var w = It(It({}, p), Li.getEventProperties(r, e));
    for (var E in w)
      m[E] = w[E];
    t && t.dispatchEvent(m), g[v] && g[v].call(e, m);
  }
}
var Bp = ["evt"], je = function(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i = r.evt, o = Cp(r, Bp);
  Li.pluginEvent.bind(V)(e, t, It({
    dragEl: N,
    parentEl: fe,
    ghostEl: q,
    rootEl: ce,
    nextEl: In,
    lastDownEl: vo,
    cloneEl: de,
    cloneHidden: fn,
    dragStarted: Jr,
    putSortable: Ce,
    activeSortable: V.active,
    originalEvent: i,
    oldIndex: gr,
    oldDraggableIndex: ri,
    newIndex: Qe,
    newDraggableIndex: sn,
    hideGhostForTarget: If,
    unhideGhostForTarget: Rf,
    cloneNowHidden: function() {
      fn = !0;
    },
    cloneNowShown: function() {
      fn = !1;
    },
    dispatchSortableEvent: function(l) {
      Le({
        sortable: t,
        name: l,
        originalEvent: i
      });
    }
  }, o));
};
function Le(n) {
  Lp(It({
    putSortable: Ce,
    cloneEl: de,
    targetEl: N,
    rootEl: ce,
    oldIndex: gr,
    oldDraggableIndex: ri,
    newIndex: Qe,
    newDraggableIndex: sn
  }, n));
}
var N, fe, q, ce, In, vo, de, fn, gr, Qe, ri, sn, Qi, Ce, fr = !1, No = !1, Io = [], An, yt, Xs, Qs, Tc, Oc, Jr, lr, ii, oi = !1, Zi = !1, bo, De, Zs = [], zl = !1, Ro = [], Ns = typeof document < "u", eo = Sf, Mc = Pi || Zt ? "cssFloat" : "float", _p = Ns && !Op && !Sf && "draggable" in document.createElement("div"), Af = function() {
  if (!!Ns) {
    if (Zt)
      return !1;
    var n = document.createElement("x");
    return n.style.cssText = "pointer-events:auto", n.style.pointerEvents === "auto";
  }
}(), Df = function(e, t) {
  var r = H(e), i = parseInt(r.width) - parseInt(r.paddingLeft) - parseInt(r.paddingRight) - parseInt(r.borderLeftWidth) - parseInt(r.borderRightWidth), o = Er(e, 0, t), s = Er(e, 1, t), l = o && H(o), a = s && H(s), c = l && parseInt(l.marginLeft) + parseInt(l.marginRight) + ye(o).width, u = a && parseInt(a.marginLeft) + parseInt(a.marginRight) + ye(s).width;
  if (r.display === "flex")
    return r.flexDirection === "column" || r.flexDirection === "column-reverse" ? "vertical" : "horizontal";
  if (r.display === "grid")
    return r.gridTemplateColumns.split(" ").length <= 1 ? "vertical" : "horizontal";
  if (o && l.float && l.float !== "none") {
    var f = l.float === "left" ? "left" : "right";
    return s && (a.clear === "both" || a.clear === f) ? "vertical" : "horizontal";
  }
  return o && (l.display === "block" || l.display === "flex" || l.display === "table" || l.display === "grid" || c >= i && r[Mc] === "none" || s && r[Mc] === "none" && c + u > i) ? "vertical" : "horizontal";
}, Fp = function(e, t, r) {
  var i = r ? e.left : e.top, o = r ? e.right : e.bottom, s = r ? e.width : e.height, l = r ? t.left : t.top, a = r ? t.right : t.bottom, c = r ? t.width : t.height;
  return i === l || o === a || i + s / 2 === l + c / 2;
}, $p = function(e, t) {
  var r;
  return Io.some(function(i) {
    var o = i[et].options.emptyInsertThreshold;
    if (!(!o || Na(i))) {
      var s = ye(i), l = e >= s.left - o && e <= s.right + o, a = t >= s.top - o && t <= s.bottom + o;
      if (l && a)
        return r = i;
    }
  }), r;
}, Nf = function(e) {
  function t(o, s) {
    return function(l, a, c, u) {
      var f = l.options.group.name && a.options.group.name && l.options.group.name === a.options.group.name;
      if (o == null && (s || f))
        return !0;
      if (o == null || o === !1)
        return !1;
      if (s && o === "clone")
        return o;
      if (typeof o == "function")
        return t(o(l, a, c, u), s)(l, a, c, u);
      var d = (s ? l : a).options.group.name;
      return o === !0 || typeof o == "string" && o === d || o.join && o.indexOf(d) > -1;
    };
  }
  var r = {}, i = e.group;
  (!i || yo(i) != "object") && (i = {
    name: i
  }), r.name = i.name, r.checkPull = t(i.pull, !0), r.checkPut = t(i.put), r.revertClone = i.revertClone, e.group = r;
}, If = function() {
  !Af && q && H(q, "display", "none");
}, Rf = function() {
  !Af && q && H(q, "display", "");
};
Ns && document.addEventListener("click", function(n) {
  if (No)
    return n.preventDefault(), n.stopPropagation && n.stopPropagation(), n.stopImmediatePropagation && n.stopImmediatePropagation(), No = !1, !1;
}, !0);
var Dn = function(e) {
  if (N) {
    e = e.touches ? e.touches[0] : e;
    var t = $p(e.clientX, e.clientY);
    if (t) {
      var r = {};
      for (var i in e)
        e.hasOwnProperty(i) && (r[i] = e[i]);
      r.target = r.rootEl = t, r.preventDefault = void 0, r.stopPropagation = void 0, t[et]._onDragOver(r);
    }
  }
}, zp = function(e) {
  N && N.parentNode[et]._isOutsideThisEl(e.target);
};
function V(n, e) {
  if (!(n && n.nodeType && n.nodeType === 1))
    throw "Sortable: `el` must be an HTMLElement, not ".concat({}.toString.call(n));
  this.el = n, this.options = e = Yt({}, e), n[et] = this;
  var t = {
    group: null,
    sort: !0,
    disabled: !1,
    store: null,
    handle: null,
    draggable: /^[uo]l$/i.test(n.nodeName) ? ">li" : ">*",
    swapThreshold: 1,
    invertSwap: !1,
    invertedSwapThreshold: null,
    removeCloneOnHide: !0,
    direction: function() {
      return Df(n, this.options);
    },
    ghostClass: "sortable-ghost",
    chosenClass: "sortable-chosen",
    dragClass: "sortable-drag",
    ignore: "a, img",
    filter: null,
    preventOnFilter: !0,
    animation: 0,
    easing: null,
    setData: function(s, l) {
      s.setData("Text", l.textContent);
    },
    dropBubble: !1,
    dragoverBubble: !1,
    dataIdAttr: "data-id",
    delay: 0,
    delayOnTouchOnly: !1,
    touchStartThreshold: (Number.parseInt ? Number : window).parseInt(window.devicePixelRatio, 10) || 1,
    forceFallback: !1,
    fallbackClass: "sortable-fallback",
    fallbackOnBody: !1,
    fallbackTolerance: 0,
    fallbackOffset: {
      x: 0,
      y: 0
    },
    supportPointer: V.supportPointer !== !1 && "PointerEvent" in window && !ti,
    emptyInsertThreshold: 5
  };
  Li.initializePlugins(this, n, t);
  for (var r in t)
    !(r in e) && (e[r] = t[r]);
  Nf(e);
  for (var i in this)
    i.charAt(0) === "_" && typeof this[i] == "function" && (this[i] = this[i].bind(this));
  this.nativeDraggable = e.forceFallback ? !1 : _p, this.nativeDraggable && (this.options.touchStartThreshold = 1), e.supportPointer ? ie(n, "pointerdown", this._onTapStart) : (ie(n, "mousedown", this._onTapStart), ie(n, "touchstart", this._onTapStart)), this.nativeDraggable && (ie(n, "dragover", this), ie(n, "dragenter", this)), Io.push(this.el), e.store && e.store.get && this.sort(e.store.get(this) || []), Yt(this, Ip());
}
V.prototype = {
  constructor: V,
  _isOutsideThisEl: function(e) {
    !this.el.contains(e) && e !== this.el && (lr = null);
  },
  _getDirection: function(e, t) {
    return typeof this.options.direction == "function" ? this.options.direction.call(this, e, t, N) : this.options.direction;
  },
  _onTapStart: function(e) {
    if (!!e.cancelable) {
      var t = this, r = this.el, i = this.options, o = i.preventOnFilter, s = e.type, l = e.touches && e.touches[0] || e.pointerType && e.pointerType === "touch" && e, a = (l || e).target, c = e.target.shadowRoot && (e.path && e.path[0] || e.composedPath && e.composedPath()[0]) || a, u = i.filter;
      if (Jp(r), !N && !(/mousedown|pointerdown/.test(s) && e.button !== 0 || i.disabled) && !c.isContentEditable && !(!this.nativeDraggable && ti && a && a.tagName.toUpperCase() === "SELECT") && (a = Tt(a, i.draggable, r, !1), !(a && a.animated) && vo !== a)) {
        if (gr = lt(a), ri = lt(a, i.draggable), typeof u == "function") {
          if (u.call(this, e, a, this)) {
            Le({
              sortable: t,
              rootEl: c,
              name: "filter",
              targetEl: a,
              toEl: r,
              fromEl: r
            }), je("filter", t, {
              evt: e
            }), o && e.cancelable && e.preventDefault();
            return;
          }
        } else if (u && (u = u.split(",").some(function(f) {
          if (f = Tt(c, f.trim(), r, !1), f)
            return Le({
              sortable: t,
              rootEl: f,
              name: "filter",
              targetEl: a,
              fromEl: r,
              toEl: r
            }), je("filter", t, {
              evt: e
            }), !0;
        }), u)) {
          o && e.cancelable && e.preventDefault();
          return;
        }
        i.handle && !Tt(c, i.handle, r, !1) || this._prepareDragStart(e, l, a);
      }
    }
  },
  _prepareDragStart: function(e, t, r) {
    var i = this, o = i.el, s = i.options, l = o.ownerDocument, a;
    if (r && !N && r.parentNode === o) {
      var c = ye(r);
      if (ce = o, N = r, fe = N.parentNode, In = N.nextSibling, vo = r, Qi = s.group, V.dragged = N, An = {
        target: N,
        clientX: (t || e).clientX,
        clientY: (t || e).clientY
      }, Tc = An.clientX - c.left, Oc = An.clientY - c.top, this._lastX = (t || e).clientX, this._lastY = (t || e).clientY, N.style["will-change"] = "all", a = function() {
        if (je("delayEnded", i, {
          evt: e
        }), V.eventCanceled) {
          i._onDrop();
          return;
        }
        i._disableDelayedDragEvents(), !xc && i.nativeDraggable && (N.draggable = !0), i._triggerDragStart(e, t), Le({
          sortable: i,
          name: "choose",
          originalEvent: e
        }), Xe(N, s.chosenClass, !0);
      }, s.ignore.split(",").forEach(function(u) {
        Cf(N, u.trim(), el);
      }), ie(l, "dragover", Dn), ie(l, "mousemove", Dn), ie(l, "touchmove", Dn), ie(l, "mouseup", i._onDrop), ie(l, "touchend", i._onDrop), ie(l, "touchcancel", i._onDrop), xc && this.nativeDraggable && (this.options.touchStartThreshold = 4, N.draggable = !0), je("delayStart", this, {
        evt: e
      }), s.delay && (!s.delayOnTouchOnly || t) && (!this.nativeDraggable || !(Pi || Zt))) {
        if (V.eventCanceled) {
          this._onDrop();
          return;
        }
        ie(l, "mouseup", i._disableDelayedDrag), ie(l, "touchend", i._disableDelayedDrag), ie(l, "touchcancel", i._disableDelayedDrag), ie(l, "mousemove", i._delayedDragTouchMoveHandler), ie(l, "touchmove", i._delayedDragTouchMoveHandler), s.supportPointer && ie(l, "pointermove", i._delayedDragTouchMoveHandler), i._dragStartTimer = setTimeout(a, s.delay);
      } else
        a();
    }
  },
  _delayedDragTouchMoveHandler: function(e) {
    var t = e.touches ? e.touches[0] : e;
    Math.max(Math.abs(t.clientX - this._lastX), Math.abs(t.clientY - this._lastY)) >= Math.floor(this.options.touchStartThreshold / (this.nativeDraggable && window.devicePixelRatio || 1)) && this._disableDelayedDrag();
  },
  _disableDelayedDrag: function() {
    N && el(N), clearTimeout(this._dragStartTimer), this._disableDelayedDragEvents();
  },
  _disableDelayedDragEvents: function() {
    var e = this.el.ownerDocument;
    ne(e, "mouseup", this._disableDelayedDrag), ne(e, "touchend", this._disableDelayedDrag), ne(e, "touchcancel", this._disableDelayedDrag), ne(e, "mousemove", this._delayedDragTouchMoveHandler), ne(e, "touchmove", this._delayedDragTouchMoveHandler), ne(e, "pointermove", this._delayedDragTouchMoveHandler);
  },
  _triggerDragStart: function(e, t) {
    t = t || e.pointerType == "touch" && e, !this.nativeDraggable || t ? this.options.supportPointer ? ie(document, "pointermove", this._onTouchMove) : t ? ie(document, "touchmove", this._onTouchMove) : ie(document, "mousemove", this._onTouchMove) : (ie(N, "dragend", this), ie(ce, "dragstart", this._onDragStart));
    try {
      document.selection ? wo(function() {
        document.selection.empty();
      }) : window.getSelection().removeAllRanges();
    } catch {
    }
  },
  _dragStarted: function(e, t) {
    if (fr = !1, ce && N) {
      je("dragStarted", this, {
        evt: t
      }), this.nativeDraggable && ie(document, "dragover", zp);
      var r = this.options;
      !e && Xe(N, r.dragClass, !1), Xe(N, r.ghostClass, !0), V.active = this, e && this._appendGhost(), Le({
        sortable: this,
        name: "start",
        originalEvent: t
      });
    } else
      this._nulling();
  },
  _emulateDragOver: function() {
    if (yt) {
      this._lastX = yt.clientX, this._lastY = yt.clientY, If();
      for (var e = document.elementFromPoint(yt.clientX, yt.clientY), t = e; e && e.shadowRoot && (e = e.shadowRoot.elementFromPoint(yt.clientX, yt.clientY), e !== t); )
        t = e;
      if (N.parentNode[et]._isOutsideThisEl(e), t)
        do {
          if (t[et]) {
            var r = void 0;
            if (r = t[et]._onDragOver({
              clientX: yt.clientX,
              clientY: yt.clientY,
              target: e,
              rootEl: t
            }), r && !this.options.dragoverBubble)
              break;
          }
          e = t;
        } while (t = t.parentNode);
      Rf();
    }
  },
  _onTouchMove: function(e) {
    if (An) {
      var t = this.options, r = t.fallbackTolerance, i = t.fallbackOffset, o = e.touches ? e.touches[0] : e, s = q && br(q, !0), l = q && s && s.a, a = q && s && s.d, c = eo && De && Cc(De), u = (o.clientX - An.clientX + i.x) / (l || 1) + (c ? c[0] - Zs[0] : 0) / (l || 1), f = (o.clientY - An.clientY + i.y) / (a || 1) + (c ? c[1] - Zs[1] : 0) / (a || 1);
      if (!V.active && !fr) {
        if (r && Math.max(Math.abs(o.clientX - this._lastX), Math.abs(o.clientY - this._lastY)) < r)
          return;
        this._onDragStart(e, !0);
      }
      if (q) {
        s ? (s.e += u - (Xs || 0), s.f += f - (Qs || 0)) : s = {
          a: 1,
          b: 0,
          c: 0,
          d: 1,
          e: u,
          f
        };
        var d = "matrix(".concat(s.a, ",").concat(s.b, ",").concat(s.c, ",").concat(s.d, ",").concat(s.e, ",").concat(s.f, ")");
        H(q, "webkitTransform", d), H(q, "mozTransform", d), H(q, "msTransform", d), H(q, "transform", d), Xs = u, Qs = f, yt = o;
      }
      e.cancelable && e.preventDefault();
    }
  },
  _appendGhost: function() {
    if (!q) {
      var e = this.options.fallbackOnBody ? document.body : ce, t = ye(N, !0, eo, !0, e), r = this.options;
      if (eo) {
        for (De = e; H(De, "position") === "static" && H(De, "transform") === "none" && De !== document; )
          De = De.parentNode;
        De !== document.body && De !== document.documentElement ? (De === document && (De = Dt()), t.top += De.scrollTop, t.left += De.scrollLeft) : De = Dt(), Zs = Cc(De);
      }
      q = N.cloneNode(!0), Xe(q, r.ghostClass, !1), Xe(q, r.fallbackClass, !0), Xe(q, r.dragClass, !0), H(q, "transition", ""), H(q, "transform", ""), H(q, "box-sizing", "border-box"), H(q, "margin", 0), H(q, "top", t.top), H(q, "left", t.left), H(q, "width", t.width), H(q, "height", t.height), H(q, "opacity", "0.8"), H(q, "position", eo ? "absolute" : "fixed"), H(q, "zIndex", "100000"), H(q, "pointerEvents", "none"), V.ghost = q, e.appendChild(q), H(q, "transform-origin", Tc / parseInt(q.style.width) * 100 + "% " + Oc / parseInt(q.style.height) * 100 + "%");
    }
  },
  _onDragStart: function(e, t) {
    var r = this, i = e.dataTransfer, o = r.options;
    if (je("dragStart", this, {
      evt: e
    }), V.eventCanceled) {
      this._onDrop();
      return;
    }
    je("setupClone", this), V.eventCanceled || (de = Mf(N), de.draggable = !1, de.style["will-change"] = "", this._hideClone(), Xe(de, this.options.chosenClass, !1), V.clone = de), r.cloneId = wo(function() {
      je("clone", r), !V.eventCanceled && (r.options.removeCloneOnHide || ce.insertBefore(de, N), r._hideClone(), Le({
        sortable: r,
        name: "clone"
      }));
    }), !t && Xe(N, o.dragClass, !0), t ? (No = !0, r._loopId = setInterval(r._emulateDragOver, 50)) : (ne(document, "mouseup", r._onDrop), ne(document, "touchend", r._onDrop), ne(document, "touchcancel", r._onDrop), i && (i.effectAllowed = "move", o.setData && o.setData.call(r, i, N)), ie(document, "drop", r), H(N, "transform", "translateZ(0)")), fr = !0, r._dragStartId = wo(r._dragStarted.bind(r, t, e)), ie(document, "selectstart", r), Jr = !0, ti && H(document.body, "user-select", "none");
  },
  _onDragOver: function(e) {
    var t = this.el, r = e.target, i, o, s, l = this.options, a = l.group, c = V.active, u = Qi === a, f = l.sort, d = Ce || c, h, p = this, m = !1;
    if (zl)
      return;
    function g(M, I) {
      je(M, p, It({
        evt: e,
        isOwner: u,
        axis: h ? "vertical" : "horizontal",
        revert: s,
        dragRect: i,
        targetRect: o,
        canSort: f,
        fromSortable: d,
        target: r,
        completed: w,
        onMove: function(Q, se) {
          return to(ce, t, N, i, Q, ye(Q), e, se);
        },
        changed: E
      }, I));
    }
    function v() {
      g("dragOverAnimationCapture"), p.captureAnimationState(), p !== d && d.captureAnimationState();
    }
    function w(M) {
      return g("dragOverCompleted", {
        insertion: M
      }), M && (u ? c._hideClone() : c._showClone(p), p !== d && (Xe(N, Ce ? Ce.options.ghostClass : c.options.ghostClass, !1), Xe(N, l.ghostClass, !0)), Ce !== p && p !== V.active ? Ce = p : p === V.active && Ce && (Ce = null), d === p && (p._ignoreWhileAnimating = r), p.animateAll(function() {
        g("dragOverAnimationComplete"), p._ignoreWhileAnimating = null;
      }), p !== d && (d.animateAll(), d._ignoreWhileAnimating = null)), (r === N && !N.animated || r === t && !r.animated) && (lr = null), !l.dragoverBubble && !e.rootEl && r !== document && (N.parentNode[et]._isOutsideThisEl(e.target), !M && Dn(e)), !l.dragoverBubble && e.stopPropagation && e.stopPropagation(), m = !0;
    }
    function E() {
      Qe = lt(N), sn = lt(N, l.draggable), Le({
        sortable: p,
        name: "change",
        toEl: t,
        newIndex: Qe,
        newDraggableIndex: sn,
        originalEvent: e
      });
    }
    if (e.preventDefault !== void 0 && e.cancelable && e.preventDefault(), r = Tt(r, l.draggable, t, !0), g("dragOver"), V.eventCanceled)
      return m;
    if (N.contains(e.target) || r.animated && r.animatingX && r.animatingY || p._ignoreWhileAnimating === r)
      return w(!1);
    if (No = !1, c && !l.disabled && (u ? f || (s = fe !== ce) : Ce === this || (this.lastPutMode = Qi.checkPull(this, c, N, e)) && a.checkPut(this, c, N, e))) {
      if (h = this._getDirection(e, r) === "vertical", i = ye(N), g("dragOverValid"), V.eventCanceled)
        return m;
      if (s)
        return fe = ce, v(), this._hideClone(), g("revert"), V.eventCanceled || (In ? ce.insertBefore(N, In) : ce.appendChild(N)), w(!0);
      var y = Na(t, l.draggable);
      if (!y || Wp(e, h, this) && !y.animated) {
        if (y === N)
          return w(!1);
        if (y && t === e.target && (r = y), r && (o = ye(r)), to(ce, t, N, i, r, o, e, !!r) !== !1)
          return v(), t.appendChild(N), fe = t, E(), w(!0);
      } else if (y && jp(e, h, this)) {
        var T = Er(t, 0, l, !0);
        if (T === N)
          return w(!1);
        if (r = T, o = ye(r), to(ce, t, N, i, r, o, e, !1) !== !1)
          return v(), t.insertBefore(N, T), fe = t, E(), w(!0);
      } else if (r.parentNode === t) {
        o = ye(r);
        var b = 0, D, B = N.parentNode !== t, A = !Fp(N.animated && N.toRect || i, r.animated && r.toRect || o, h), $ = h ? "top" : "left", K = Ec(r, "top", "top") || Ec(N, "top", "top"), U = K ? K.scrollTop : void 0;
        lr !== r && (D = o[$], oi = !1, Zi = !A && l.invertSwap || B), b = Up(e, r, o, h, A ? 1 : l.swapThreshold, l.invertedSwapThreshold == null ? l.swapThreshold : l.invertedSwapThreshold, Zi, lr === r);
        var G;
        if (b !== 0) {
          var Y = lt(N);
          do
            Y -= b, G = fe.children[Y];
          while (G && (H(G, "display") === "none" || G === q));
        }
        if (b === 0 || G === r)
          return w(!1);
        lr = r, ii = b;
        var re = r.nextElementSibling, k = !1;
        k = b === 1;
        var S = to(ce, t, N, i, r, o, e, k);
        if (S !== !1)
          return (S === 1 || S === -1) && (k = S === 1), zl = !0, setTimeout(Vp, 30), v(), k && !re ? t.appendChild(N) : r.parentNode.insertBefore(N, k ? re : r), K && Of(K, 0, U - K.scrollTop), fe = N.parentNode, D !== void 0 && !Zi && (bo = Math.abs(D - ye(r)[$])), E(), w(!0);
      }
      if (t.contains(N))
        return w(!1);
    }
    return !1;
  },
  _ignoreWhileAnimating: null,
  _offMoveEvents: function() {
    ne(document, "mousemove", this._onTouchMove), ne(document, "touchmove", this._onTouchMove), ne(document, "pointermove", this._onTouchMove), ne(document, "dragover", Dn), ne(document, "mousemove", Dn), ne(document, "touchmove", Dn);
  },
  _offUpEvents: function() {
    var e = this.el.ownerDocument;
    ne(e, "mouseup", this._onDrop), ne(e, "touchend", this._onDrop), ne(e, "pointerup", this._onDrop), ne(e, "touchcancel", this._onDrop), ne(document, "selectstart", this);
  },
  _onDrop: function(e) {
    var t = this.el, r = this.options;
    if (Qe = lt(N), sn = lt(N, r.draggable), je("drop", this, {
      evt: e
    }), fe = N && N.parentNode, Qe = lt(N), sn = lt(N, r.draggable), V.eventCanceled) {
      this._nulling();
      return;
    }
    fr = !1, Zi = !1, oi = !1, clearInterval(this._loopId), clearTimeout(this._dragStartTimer), Hl(this.cloneId), Hl(this._dragStartId), this.nativeDraggable && (ne(document, "drop", this), ne(t, "dragstart", this._onDragStart)), this._offMoveEvents(), this._offUpEvents(), ti && H(document.body, "user-select", ""), H(N, "transform", ""), e && (Jr && (e.cancelable && e.preventDefault(), !r.dropBubble && e.stopPropagation()), q && q.parentNode && q.parentNode.removeChild(q), (ce === fe || Ce && Ce.lastPutMode !== "clone") && de && de.parentNode && de.parentNode.removeChild(de), N && (this.nativeDraggable && ne(N, "dragend", this), el(N), N.style["will-change"] = "", Jr && !fr && Xe(N, Ce ? Ce.options.ghostClass : this.options.ghostClass, !1), Xe(N, this.options.chosenClass, !1), Le({
      sortable: this,
      name: "unchoose",
      toEl: fe,
      newIndex: null,
      newDraggableIndex: null,
      originalEvent: e
    }), ce !== fe ? (Qe >= 0 && (Le({
      rootEl: fe,
      name: "add",
      toEl: fe,
      fromEl: ce,
      originalEvent: e
    }), Le({
      sortable: this,
      name: "remove",
      toEl: fe,
      originalEvent: e
    }), Le({
      rootEl: fe,
      name: "sort",
      toEl: fe,
      fromEl: ce,
      originalEvent: e
    }), Le({
      sortable: this,
      name: "sort",
      toEl: fe,
      originalEvent: e
    })), Ce && Ce.save()) : Qe !== gr && Qe >= 0 && (Le({
      sortable: this,
      name: "update",
      toEl: fe,
      originalEvent: e
    }), Le({
      sortable: this,
      name: "sort",
      toEl: fe,
      originalEvent: e
    })), V.active && ((Qe == null || Qe === -1) && (Qe = gr, sn = ri), Le({
      sortable: this,
      name: "end",
      toEl: fe,
      originalEvent: e
    }), this.save()))), this._nulling();
  },
  _nulling: function() {
    je("nulling", this), ce = N = fe = q = In = de = vo = fn = An = yt = Jr = Qe = sn = gr = ri = lr = ii = Ce = Qi = V.dragged = V.ghost = V.clone = V.active = null, Ro.forEach(function(e) {
      e.checked = !0;
    }), Ro.length = Xs = Qs = 0;
  },
  handleEvent: function(e) {
    switch (e.type) {
      case "drop":
      case "dragend":
        this._onDrop(e);
        break;
      case "dragenter":
      case "dragover":
        N && (this._onDragOver(e), Hp(e));
        break;
      case "selectstart":
        e.preventDefault();
        break;
    }
  },
  toArray: function() {
    for (var e = [], t, r = this.el.children, i = 0, o = r.length, s = this.options; i < o; i++)
      t = r[i], Tt(t, s.draggable, this.el, !1) && e.push(t.getAttribute(s.dataIdAttr) || qp(t));
    return e;
  },
  sort: function(e, t) {
    var r = {}, i = this.el;
    this.toArray().forEach(function(o, s) {
      var l = i.children[s];
      Tt(l, this.options.draggable, i, !1) && (r[o] = l);
    }, this), t && this.captureAnimationState(), e.forEach(function(o) {
      r[o] && (i.removeChild(r[o]), i.appendChild(r[o]));
    }), t && this.animateAll();
  },
  save: function() {
    var e = this.options.store;
    e && e.set && e.set(this);
  },
  closest: function(e, t) {
    return Tt(e, t || this.options.draggable, this.el, !1);
  },
  option: function(e, t) {
    var r = this.options;
    if (t === void 0)
      return r[e];
    var i = Li.modifyOption(this, e, t);
    typeof i < "u" ? r[e] = i : r[e] = t, e === "group" && Nf(r);
  },
  destroy: function() {
    je("destroy", this);
    var e = this.el;
    e[et] = null, ne(e, "mousedown", this._onTapStart), ne(e, "touchstart", this._onTapStart), ne(e, "pointerdown", this._onTapStart), this.nativeDraggable && (ne(e, "dragover", this), ne(e, "dragenter", this)), Array.prototype.forEach.call(e.querySelectorAll("[draggable]"), function(t) {
      t.removeAttribute("draggable");
    }), this._onDrop(), this._disableDelayedDragEvents(), Io.splice(Io.indexOf(this.el), 1), this.el = e = null;
  },
  _hideClone: function() {
    if (!fn) {
      if (je("hideClone", this), V.eventCanceled)
        return;
      H(de, "display", "none"), this.options.removeCloneOnHide && de.parentNode && de.parentNode.removeChild(de), fn = !0;
    }
  },
  _showClone: function(e) {
    if (e.lastPutMode !== "clone") {
      this._hideClone();
      return;
    }
    if (fn) {
      if (je("showClone", this), V.eventCanceled)
        return;
      N.parentNode == ce && !this.options.group.revertClone ? ce.insertBefore(de, N) : In ? ce.insertBefore(de, In) : ce.appendChild(de), this.options.group.revertClone && this.animate(N, de), H(de, "display", ""), fn = !1;
    }
  }
};
function Hp(n) {
  n.dataTransfer && (n.dataTransfer.dropEffect = "move"), n.cancelable && n.preventDefault();
}
function to(n, e, t, r, i, o, s, l) {
  var a, c = n[et], u = c.options.onMove, f;
  return window.CustomEvent && !Zt && !Pi ? a = new CustomEvent("move", {
    bubbles: !0,
    cancelable: !0
  }) : (a = document.createEvent("Event"), a.initEvent("move", !0, !0)), a.to = e, a.from = n, a.dragged = t, a.draggedRect = r, a.related = i || e, a.relatedRect = o || ye(e), a.willInsertAfter = l, a.originalEvent = s, n.dispatchEvent(a), u && (f = u.call(c, a, s)), f;
}
function el(n) {
  n.draggable = !1;
}
function Vp() {
  zl = !1;
}
function jp(n, e, t) {
  var r = ye(Er(t.el, 0, t.options, !0)), i = 10;
  return e ? n.clientX < r.left - i || n.clientY < r.top && n.clientX < r.right : n.clientY < r.top - i || n.clientY < r.bottom && n.clientX < r.left;
}
function Wp(n, e, t) {
  var r = ye(Na(t.el, t.options.draggable)), i = 10;
  return e ? n.clientX > r.right + i || n.clientX <= r.right && n.clientY > r.bottom && n.clientX >= r.left : n.clientX > r.right && n.clientY > r.top || n.clientX <= r.right && n.clientY > r.bottom + i;
}
function Up(n, e, t, r, i, o, s, l) {
  var a = r ? n.clientY : n.clientX, c = r ? t.height : t.width, u = r ? t.top : t.left, f = r ? t.bottom : t.right, d = !1;
  if (!s) {
    if (l && bo < c * i) {
      if (!oi && (ii === 1 ? a > u + c * o / 2 : a < f - c * o / 2) && (oi = !0), oi)
        d = !0;
      else if (ii === 1 ? a < u + bo : a > f - bo)
        return -ii;
    } else if (a > u + c * (1 - i) / 2 && a < f - c * (1 - i) / 2)
      return Kp(e);
  }
  return d = d || s, d && (a < u + c * o / 2 || a > f - c * o / 2) ? a > u + c / 2 ? 1 : -1 : 0;
}
function Kp(n) {
  return lt(N) < lt(n) ? 1 : -1;
}
function qp(n) {
  for (var e = n.tagName + n.className + n.src + n.href + n.textContent, t = e.length, r = 0; t--; )
    r += e.charCodeAt(t);
  return r.toString(36);
}
function Jp(n) {
  Ro.length = 0;
  for (var e = n.getElementsByTagName("input"), t = e.length; t--; ) {
    var r = e[t];
    r.checked && Ro.push(r);
  }
}
function wo(n) {
  return setTimeout(n, 0);
}
function Hl(n) {
  return clearTimeout(n);
}
Ns && ie(document, "touchmove", function(n) {
  (V.active || fr) && n.cancelable && n.preventDefault();
});
V.utils = {
  on: ie,
  off: ne,
  css: H,
  find: Cf,
  is: function(e, t) {
    return !!Tt(e, t, e, !1);
  },
  extend: Dp,
  throttle: Tf,
  closest: Tt,
  toggleClass: Xe,
  clone: Mf,
  index: lt,
  nextTick: wo,
  cancelNextTick: Hl,
  detectDirection: Df,
  getChild: Er
};
V.get = function(n) {
  return n[et];
};
V.mount = function() {
  for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
    e[t] = arguments[t];
  e[0].constructor === Array && (e = e[0]), e.forEach(function(r) {
    if (!r.prototype || !r.prototype.constructor)
      throw "Sortable: Mounted plugin must be a constructor function, not ".concat({}.toString.call(r));
    r.utils && (V.utils = It(It({}, V.utils), r.utils)), Li.mount(r);
  });
};
V.create = function(n, e) {
  return new V(n, e);
};
V.version = Tp;
var pe = [], Gr, Vl, jl = !1, tl, nl, Po, Yr;
function Gp() {
  function n() {
    this.defaults = {
      scroll: !0,
      forceAutoScrollFallback: !1,
      scrollSensitivity: 30,
      scrollSpeed: 10,
      bubbleScroll: !0
    };
    for (var e in this)
      e.charAt(0) === "_" && typeof this[e] == "function" && (this[e] = this[e].bind(this));
  }
  return n.prototype = {
    dragStarted: function(t) {
      var r = t.originalEvent;
      this.sortable.nativeDraggable ? ie(document, "dragover", this._handleAutoScroll) : this.options.supportPointer ? ie(document, "pointermove", this._handleFallbackAutoScroll) : r.touches ? ie(document, "touchmove", this._handleFallbackAutoScroll) : ie(document, "mousemove", this._handleFallbackAutoScroll);
    },
    dragOverCompleted: function(t) {
      var r = t.originalEvent;
      !this.options.dragOverBubble && !r.rootEl && this._handleAutoScroll(r);
    },
    drop: function() {
      this.sortable.nativeDraggable ? ne(document, "dragover", this._handleAutoScroll) : (ne(document, "pointermove", this._handleFallbackAutoScroll), ne(document, "touchmove", this._handleFallbackAutoScroll), ne(document, "mousemove", this._handleFallbackAutoScroll)), Ac(), ko(), Np();
    },
    nulling: function() {
      Po = Vl = Gr = jl = Yr = tl = nl = null, pe.length = 0;
    },
    _handleFallbackAutoScroll: function(t) {
      this._handleAutoScroll(t, !0);
    },
    _handleAutoScroll: function(t, r) {
      var i = this, o = (t.touches ? t.touches[0] : t).clientX, s = (t.touches ? t.touches[0] : t).clientY, l = document.elementFromPoint(o, s);
      if (Po = t, r || this.options.forceAutoScrollFallback || Pi || Zt || ti) {
        rl(t, this.options, l, r);
        var a = pn(l, !0);
        jl && (!Yr || o !== tl || s !== nl) && (Yr && Ac(), Yr = setInterval(function() {
          var c = pn(document.elementFromPoint(o, s), !0);
          c !== a && (a = c, ko()), rl(t, i.options, c, r);
        }, 10), tl = o, nl = s);
      } else {
        if (!this.options.bubbleScroll || pn(l, !0) === Dt()) {
          ko();
          return;
        }
        rl(t, this.options, pn(l, !1), !1);
      }
    }
  }, Yt(n, {
    pluginName: "scroll",
    initializeByDefault: !0
  });
}
function ko() {
  pe.forEach(function(n) {
    clearInterval(n.pid);
  }), pe = [];
}
function Ac() {
  clearInterval(Yr);
}
var rl = Tf(function(n, e, t, r) {
  if (!!e.scroll) {
    var i = (n.touches ? n.touches[0] : n).clientX, o = (n.touches ? n.touches[0] : n).clientY, s = e.scrollSensitivity, l = e.scrollSpeed, a = Dt(), c = !1, u;
    Vl !== t && (Vl = t, ko(), Gr = e.scroll, u = e.scrollFn, Gr === !0 && (Gr = pn(t, !0)));
    var f = 0, d = Gr;
    do {
      var h = d, p = ye(h), m = p.top, g = p.bottom, v = p.left, w = p.right, E = p.width, y = p.height, T = void 0, b = void 0, D = h.scrollWidth, B = h.scrollHeight, A = H(h), $ = h.scrollLeft, K = h.scrollTop;
      h === a ? (T = E < D && (A.overflowX === "auto" || A.overflowX === "scroll" || A.overflowX === "visible"), b = y < B && (A.overflowY === "auto" || A.overflowY === "scroll" || A.overflowY === "visible")) : (T = E < D && (A.overflowX === "auto" || A.overflowX === "scroll"), b = y < B && (A.overflowY === "auto" || A.overflowY === "scroll"));
      var U = T && (Math.abs(w - i) <= s && $ + E < D) - (Math.abs(v - i) <= s && !!$), G = b && (Math.abs(g - o) <= s && K + y < B) - (Math.abs(m - o) <= s && !!K);
      if (!pe[f])
        for (var Y = 0; Y <= f; Y++)
          pe[Y] || (pe[Y] = {});
      (pe[f].vx != U || pe[f].vy != G || pe[f].el !== h) && (pe[f].el = h, pe[f].vx = U, pe[f].vy = G, clearInterval(pe[f].pid), (U != 0 || G != 0) && (c = !0, pe[f].pid = setInterval(function() {
        r && this.layer === 0 && V.active._onTouchMove(Po);
        var re = pe[this.layer].vy ? pe[this.layer].vy * l : 0, k = pe[this.layer].vx ? pe[this.layer].vx * l : 0;
        typeof u == "function" && u.call(V.dragged.parentNode[et], k, re, n, Po, pe[this.layer].el) !== "continue" || Of(pe[this.layer].el, k, re);
      }.bind({
        layer: f
      }), 24))), f++;
    } while (e.bubbleScroll && d !== a && (d = pn(d, !1)));
    jl = c;
  }
}, 30), Pf = function(e) {
  var t = e.originalEvent, r = e.putSortable, i = e.dragEl, o = e.activeSortable, s = e.dispatchSortableEvent, l = e.hideGhostForTarget, a = e.unhideGhostForTarget;
  if (!!t) {
    var c = r || o;
    l();
    var u = t.changedTouches && t.changedTouches.length ? t.changedTouches[0] : t, f = document.elementFromPoint(u.clientX, u.clientY);
    a(), c && !c.el.contains(f) && (s("spill"), this.onSpill({
      dragEl: i,
      putSortable: r
    }));
  }
};
function Ia() {
}
Ia.prototype = {
  startIndex: null,
  dragStart: function(e) {
    var t = e.oldDraggableIndex;
    this.startIndex = t;
  },
  onSpill: function(e) {
    var t = e.dragEl, r = e.putSortable;
    this.sortable.captureAnimationState(), r && r.captureAnimationState();
    var i = Er(this.sortable.el, this.startIndex, this.options);
    i ? this.sortable.el.insertBefore(t, i) : this.sortable.el.appendChild(t), this.sortable.animateAll(), r && r.animateAll();
  },
  drop: Pf
};
Yt(Ia, {
  pluginName: "revertOnSpill"
});
function Ra() {
}
Ra.prototype = {
  onSpill: function(e) {
    var t = e.dragEl, r = e.putSortable, i = r || this.sortable;
    i.captureAnimationState(), t.parentNode && t.parentNode.removeChild(t), i.animateAll();
  },
  drop: Pf
};
Yt(Ra, {
  pluginName: "removeOnSpill"
});
V.mount(new Gp());
V.mount(Ra, Ia);
function Yp() {
  return typeof window < "u" ? window.console : global.console;
}
const Xp = Yp();
function Qp(n) {
  const e = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return e[r] || (e[r] = n(r));
  };
}
const Zp = /-(\w)/g, Dc = Qp((n) => n.replace(Zp, (e, t) => t ? t.toUpperCase() : ""));
function il(n) {
  n.parentElement !== null && n.parentElement.removeChild(n);
}
function Nc(n, e, t) {
  const r = t === 0 ? n.children[0] : n.children[t - 1].nextSibling;
  n.insertBefore(e, r);
}
function em(n, e) {
  return Object.values(n).indexOf(e);
}
function tm(n, e, t, r) {
  if (!n)
    return [];
  const i = Object.values(n), o = e.length - r;
  return [...e].map((l, a) => a >= o ? i.length : i.indexOf(l));
}
function Lf(n, e) {
  this.$nextTick(() => this.$emit(n.toLowerCase(), e));
}
function nm(n) {
  return (e) => {
    this.realList !== null && this["onDrag" + n](e), Lf.call(this, n, e);
  };
}
function rm(n) {
  return ["transition-group", "TransitionGroup"].includes(n);
}
function im(n) {
  if (!n || n.length !== 1)
    return !1;
  const [{ type: e }] = n;
  return e ? rm(e.name) : !1;
}
function om(n, e) {
  return e ? { ...e.props, ...e.attrs } : n;
}
const Wl = ["Start", "Add", "Remove", "Update", "End"], Ul = ["Choose", "Unchoose", "Sort", "Filter", "Clone"], sm = ["Move", ...Wl, ...Ul].map((n) => "on" + n);
let ol = null;
const lm = {
  options: Object,
  list: {
    type: Array,
    required: !1,
    default: null
  },
  noTransitionOnDrag: {
    type: Boolean,
    default: !1
  },
  clone: {
    type: Function,
    default: (n) => n
  },
  tag: {
    type: String,
    default: "div"
  },
  move: {
    type: Function,
    default: null
  },
  componentData: {
    type: Object,
    required: !1,
    default: null
  },
  component: {
    type: String,
    default: null
  },
  modelValue: {
    type: Array,
    required: !1,
    default: null
  }
}, am = ze({
  name: "VueDraggableNext",
  inheritAttrs: !1,
  emits: [
    "update:modelValue",
    "move",
    "change",
    ...Wl.map((n) => n.toLowerCase()),
    ...Ul.map((n) => n.toLowerCase())
  ],
  props: lm,
  data() {
    return {
      transitionMode: !1,
      noneFunctionalComponentMode: !1,
      headerOffset: 0,
      footerOffset: 0,
      _sortable: {},
      visibleIndexes: [],
      context: {}
    };
  },
  render() {
    const n = this.$slots.default ? this.$slots.default() : null, e = om(this.$attrs, this.componentData);
    return n ? (this.transitionMode = im(n), Kn(this.getTag(), e, n)) : Kn(this.getTag(), e, []);
  },
  created() {
    this.list !== null && this.modelValue !== null && Xp.error("list props are mutually exclusive! Please set one.");
  },
  mounted() {
    const n = {};
    Wl.forEach((i) => {
      n["on" + i] = nm.call(this, i);
    }), Ul.forEach((i) => {
      n["on" + i] = Lf.bind(this, i);
    });
    const e = Object.keys(this.$attrs).reduce((i, o) => (i[Dc(o)] = this.$attrs[o], i), {}), t = Object.assign({}, e, n, {
      onMove: (i, o) => this.onDragMove(i, o)
    });
    !("draggable" in t) && (t.draggable = ">*");
    const r = this.$el.nodeType === 1 ? this.$el : this.$el.parentElement;
    this._sortable = new V(r, t), r.__draggable_component__ = this, this.computeIndexes();
  },
  beforeUnmount() {
    try {
      this._sortable !== void 0 && this._sortable.destroy();
    } catch {
    }
  },
  computed: {
    realList() {
      return this.list ? this.list : this.modelValue;
    }
  },
  watch: {
    $attrs: {
      handler(n) {
        this.updateOptions(n);
      },
      deep: !0
    },
    realList() {
      this.computeIndexes();
    }
  },
  methods: {
    getTag() {
      return this.component ? Aa(this.component) : this.tag;
    },
    updateOptions(n) {
      for (var e in n) {
        const t = Dc(e);
        sm.indexOf(t) === -1 && this._sortable.option(t, n[e]);
      }
    },
    getChildrenNodes() {
      return this.$el.children;
    },
    computeIndexes() {
      this.$nextTick(() => {
        this.visibleIndexes = tm(this.getChildrenNodes(), this.$el.children, this.transitionMode, this.footerOffset);
      });
    },
    getUnderlyingVm(n) {
      const e = em(this.getChildrenNodes() || [], n);
      if (e === -1)
        return null;
      const t = this.realList[e];
      return { index: e, element: t };
    },
    emitChanges(n) {
      this.$nextTick(() => {
        this.$emit("change", n);
      });
    },
    alterList(n) {
      if (this.list) {
        n(this.list);
        return;
      }
      const e = [...this.modelValue];
      n(e), this.$emit("update:modelValue", e);
    },
    spliceList() {
      const n = (e) => e.splice(...arguments);
      this.alterList(n);
    },
    updatePosition(n, e) {
      const t = (r) => r.splice(e, 0, r.splice(n, 1)[0]);
      this.alterList(t);
    },
    getVmIndex(n) {
      const e = this.visibleIndexes, t = e.length;
      return n > t - 1 ? t : e[n];
    },
    getComponent() {
      return this.$slots.default ? this.$slots.default()[0].componentInstance : null;
    },
    resetTransitionData(n) {
      if (!this.noTransitionOnDrag || !this.transitionMode)
        return;
      var e = this.getChildrenNodes();
      e[n].data = null;
      const t = this.getComponent();
      t.children = [], t.kept = void 0;
    },
    onDragStart(n) {
      this.computeIndexes(), this.context = this.getUnderlyingVm(n.item), this.context && (n.item._underlying_vm_ = this.clone(this.context.element), ol = n.item);
    },
    onDragAdd(n) {
      const e = n.item._underlying_vm_;
      if (e === void 0)
        return;
      il(n.item);
      const t = this.getVmIndex(n.newIndex);
      this.spliceList(t, 0, e), this.computeIndexes();
      const r = { element: e, newIndex: t };
      this.emitChanges({ added: r });
    },
    onDragRemove(n) {
      if (Nc(this.$el, n.item, n.oldIndex), n.pullMode === "clone") {
        il(n.clone);
        return;
      }
      if (!this.context)
        return;
      const e = this.context.index;
      this.spliceList(e, 1);
      const t = { element: this.context.element, oldIndex: e };
      this.resetTransitionData(e), this.emitChanges({ removed: t });
    },
    onDragUpdate(n) {
      il(n.item), Nc(n.from, n.item, n.oldIndex);
      const e = this.context.index, t = this.getVmIndex(n.newIndex);
      this.updatePosition(e, t);
      const r = { element: this.context.element, oldIndex: e, newIndex: t };
      this.emitChanges({ moved: r });
    },
    updateProperty(n, e) {
      n.hasOwnProperty(e) && (n[e] += this.headerOffset);
    },
    onDragMove(n, e) {
      const t = this.move;
      if (!t || !this.realList)
        return !0;
      const r = this.getRelatedContextFromMoveEvent(n), i = this.context, o = this.computeFutureIndex(r, n);
      Object.assign(i, { futureIndex: o });
      const s = Object.assign({}, n, {
        relatedContext: r,
        draggedContext: i
      });
      return t(s, e);
    },
    onDragEnd() {
      this.computeIndexes(), ol = null;
    },
    getTrargetedComponent(n) {
      return n.__draggable_component__;
    },
    getRelatedContextFromMoveEvent({ to: n, related: e }) {
      const t = this.getTrargetedComponent(n);
      if (!t)
        return { component: t };
      const r = t.realList, i = { list: r, component: t };
      if (n !== e && r && t.getUnderlyingVm) {
        const o = t.getUnderlyingVm(e);
        if (o)
          return Object.assign(o, i);
      }
      return i;
    },
    computeFutureIndex(n, e) {
      const t = [...e.to.children].filter((s) => s.style.display !== "none");
      if (t.length === 0)
        return 0;
      const r = t.indexOf(e.related), i = n.component.getVmIndex(r);
      return t.indexOf(ol) !== -1 || !e.willInsertAfter ? i : i + 1;
    }
  }
});
var no, cm = new Uint8Array(16);
function um() {
  if (!no && (no = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || typeof msCrypto < "u" && typeof msCrypto.getRandomValues == "function" && msCrypto.getRandomValues.bind(msCrypto), !no))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
  return no(cm);
}
const fm = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
function dm(n) {
  return typeof n == "string" && fm.test(n);
}
var Ee = [];
for (var sl = 0; sl < 256; ++sl)
  Ee.push((sl + 256).toString(16).substr(1));
function hm(n) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, t = (Ee[n[e + 0]] + Ee[n[e + 1]] + Ee[n[e + 2]] + Ee[n[e + 3]] + "-" + Ee[n[e + 4]] + Ee[n[e + 5]] + "-" + Ee[n[e + 6]] + Ee[n[e + 7]] + "-" + Ee[n[e + 8]] + Ee[n[e + 9]] + "-" + Ee[n[e + 10]] + Ee[n[e + 11]] + Ee[n[e + 12]] + Ee[n[e + 13]] + Ee[n[e + 14]] + Ee[n[e + 15]]).toLowerCase();
  if (!dm(t))
    throw TypeError("Stringified UUID is invalid");
  return t;
}
function pm(n, e, t) {
  n = n || {};
  var r = n.random || (n.rng || um)();
  if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, e) {
    t = t || 0;
    for (var i = 0; i < 16; ++i)
      e[t + i] = r[i];
    return e;
  }
  return hm(r);
}
function Te(n) {
  this.content = n;
}
Te.prototype = {
  constructor: Te,
  find: function(n) {
    for (var e = 0; e < this.content.length; e += 2)
      if (this.content[e] === n)
        return e;
    return -1;
  },
  get: function(n) {
    var e = this.find(n);
    return e == -1 ? void 0 : this.content[e + 1];
  },
  update: function(n, e, t) {
    var r = t && t != n ? this.remove(t) : this, i = r.find(n), o = r.content.slice();
    return i == -1 ? o.push(t || n, e) : (o[i + 1] = e, t && (o[i] = t)), new Te(o);
  },
  remove: function(n) {
    var e = this.find(n);
    if (e == -1)
      return this;
    var t = this.content.slice();
    return t.splice(e, 2), new Te(t);
  },
  addToStart: function(n, e) {
    return new Te([n, e].concat(this.remove(n).content));
  },
  addToEnd: function(n, e) {
    var t = this.remove(n).content.slice();
    return t.push(n, e), new Te(t);
  },
  addBefore: function(n, e, t) {
    var r = this.remove(e), i = r.content.slice(), o = r.find(n);
    return i.splice(o == -1 ? i.length : o, 0, e, t), new Te(i);
  },
  forEach: function(n) {
    for (var e = 0; e < this.content.length; e += 2)
      n(this.content[e], this.content[e + 1]);
  },
  prepend: function(n) {
    return n = Te.from(n), n.size ? new Te(n.content.concat(this.subtract(n).content)) : this;
  },
  append: function(n) {
    return n = Te.from(n), n.size ? new Te(this.subtract(n).content.concat(n.content)) : this;
  },
  subtract: function(n) {
    var e = this;
    n = Te.from(n);
    for (var t = 0; t < n.content.length; t += 2)
      e = e.remove(n.content[t]);
    return e;
  },
  toObject: function() {
    var n = {};
    return this.forEach(function(e, t) {
      n[e] = t;
    }), n;
  },
  get size() {
    return this.content.length >> 1;
  }
};
Te.from = function(n) {
  if (n instanceof Te)
    return n;
  var e = [];
  if (n)
    for (var t in n)
      e.push(t, n[t]);
  return new Te(e);
};
function Bf(n, e, t) {
  for (let r = 0; ; r++) {
    if (r == n.childCount || r == e.childCount)
      return n.childCount == e.childCount ? null : t;
    let i = n.child(r), o = e.child(r);
    if (i == o) {
      t += i.nodeSize;
      continue;
    }
    if (!i.sameMarkup(o))
      return t;
    if (i.isText && i.text != o.text) {
      for (let s = 0; i.text[s] == o.text[s]; s++)
        t++;
      return t;
    }
    if (i.content.size || o.content.size) {
      let s = Bf(i.content, o.content, t + 1);
      if (s != null)
        return s;
    }
    t += i.nodeSize;
  }
}
function _f(n, e, t, r) {
  for (let i = n.childCount, o = e.childCount; ; ) {
    if (i == 0 || o == 0)
      return i == o ? null : { a: t, b: r };
    let s = n.child(--i), l = e.child(--o), a = s.nodeSize;
    if (s == l) {
      t -= a, r -= a;
      continue;
    }
    if (!s.sameMarkup(l))
      return { a: t, b: r };
    if (s.isText && s.text != l.text) {
      let c = 0, u = Math.min(s.text.length, l.text.length);
      for (; c < u && s.text[s.text.length - c - 1] == l.text[l.text.length - c - 1]; )
        c++, t--, r--;
      return { a: t, b: r };
    }
    if (s.content.size || l.content.size) {
      let c = _f(s.content, l.content, t - 1, r - 1);
      if (c)
        return c;
    }
    t -= a, r -= a;
  }
}
class C {
  constructor(e, t) {
    if (this.content = e, this.size = t || 0, t == null)
      for (let r = 0; r < e.length; r++)
        this.size += e[r].nodeSize;
  }
  nodesBetween(e, t, r, i = 0, o) {
    for (let s = 0, l = 0; l < t; s++) {
      let a = this.content[s], c = l + a.nodeSize;
      if (c > e && r(a, i + l, o || null, s) !== !1 && a.content.size) {
        let u = l + 1;
        a.nodesBetween(Math.max(0, e - u), Math.min(a.content.size, t - u), r, i + u);
      }
      l = c;
    }
  }
  descendants(e) {
    this.nodesBetween(0, this.size, e);
  }
  textBetween(e, t, r, i) {
    let o = "", s = !0;
    return this.nodesBetween(e, t, (l, a) => {
      let c = l.isText ? l.text.slice(Math.max(e, a) - a, t - a) : l.isLeaf ? i ? typeof i == "function" ? i(l) : i : l.type.spec.leafText ? l.type.spec.leafText(l) : "" : "";
      l.isBlock && (l.isLeaf && c || l.isTextblock) && r && (s ? s = !1 : o += r), o += c;
    }, 0), o;
  }
  append(e) {
    if (!e.size)
      return this;
    if (!this.size)
      return e;
    let t = this.lastChild, r = e.firstChild, i = this.content.slice(), o = 0;
    for (t.isText && t.sameMarkup(r) && (i[i.length - 1] = t.withText(t.text + r.text), o = 1); o < e.content.length; o++)
      i.push(e.content[o]);
    return new C(i, this.size + e.size);
  }
  cut(e, t = this.size) {
    if (e == 0 && t == this.size)
      return this;
    let r = [], i = 0;
    if (t > e)
      for (let o = 0, s = 0; s < t; o++) {
        let l = this.content[o], a = s + l.nodeSize;
        a > e && ((s < e || a > t) && (l.isText ? l = l.cut(Math.max(0, e - s), Math.min(l.text.length, t - s)) : l = l.cut(Math.max(0, e - s - 1), Math.min(l.content.size, t - s - 1))), r.push(l), i += l.nodeSize), s = a;
      }
    return new C(r, i);
  }
  cutByIndex(e, t) {
    return e == t ? C.empty : e == 0 && t == this.content.length ? this : new C(this.content.slice(e, t));
  }
  replaceChild(e, t) {
    let r = this.content[e];
    if (r == t)
      return this;
    let i = this.content.slice(), o = this.size + t.nodeSize - r.nodeSize;
    return i[e] = t, new C(i, o);
  }
  addToStart(e) {
    return new C([e].concat(this.content), this.size + e.nodeSize);
  }
  addToEnd(e) {
    return new C(this.content.concat(e), this.size + e.nodeSize);
  }
  eq(e) {
    if (this.content.length != e.content.length)
      return !1;
    for (let t = 0; t < this.content.length; t++)
      if (!this.content[t].eq(e.content[t]))
        return !1;
    return !0;
  }
  get firstChild() {
    return this.content.length ? this.content[0] : null;
  }
  get lastChild() {
    return this.content.length ? this.content[this.content.length - 1] : null;
  }
  get childCount() {
    return this.content.length;
  }
  child(e) {
    let t = this.content[e];
    if (!t)
      throw new RangeError("Index " + e + " out of range for " + this);
    return t;
  }
  maybeChild(e) {
    return this.content[e] || null;
  }
  forEach(e) {
    for (let t = 0, r = 0; t < this.content.length; t++) {
      let i = this.content[t];
      e(i, r, t), r += i.nodeSize;
    }
  }
  findDiffStart(e, t = 0) {
    return Bf(this, e, t);
  }
  findDiffEnd(e, t = this.size, r = e.size) {
    return _f(this, e, t, r);
  }
  findIndex(e, t = -1) {
    if (e == 0)
      return ro(0, e);
    if (e == this.size)
      return ro(this.content.length, e);
    if (e > this.size || e < 0)
      throw new RangeError(`Position ${e} outside of fragment (${this})`);
    for (let r = 0, i = 0; ; r++) {
      let o = this.child(r), s = i + o.nodeSize;
      if (s >= e)
        return s == e || t > 0 ? ro(r + 1, s) : ro(r, i);
      i = s;
    }
  }
  toString() {
    return "<" + this.toStringInner() + ">";
  }
  toStringInner() {
    return this.content.join(", ");
  }
  toJSON() {
    return this.content.length ? this.content.map((e) => e.toJSON()) : null;
  }
  static fromJSON(e, t) {
    if (!t)
      return C.empty;
    if (!Array.isArray(t))
      throw new RangeError("Invalid input for Fragment.fromJSON");
    return new C(t.map(e.nodeFromJSON));
  }
  static fromArray(e) {
    if (!e.length)
      return C.empty;
    let t, r = 0;
    for (let i = 0; i < e.length; i++) {
      let o = e[i];
      r += o.nodeSize, i && o.isText && e[i - 1].sameMarkup(o) ? (t || (t = e.slice(0, i)), t[t.length - 1] = o.withText(t[t.length - 1].text + o.text)) : t && t.push(o);
    }
    return new C(t || e, r);
  }
  static from(e) {
    if (!e)
      return C.empty;
    if (e instanceof C)
      return e;
    if (Array.isArray(e))
      return this.fromArray(e);
    if (e.attrs)
      return new C([e], e.nodeSize);
    throw new RangeError("Can not convert " + e + " to a Fragment" + (e.nodesBetween ? " (looks like multiple versions of prosemirror-model were loaded)" : ""));
  }
}
C.empty = new C([], 0);
const ll = { index: 0, offset: 0 };
function ro(n, e) {
  return ll.index = n, ll.offset = e, ll;
}
function Lo(n, e) {
  if (n === e)
    return !0;
  if (!(n && typeof n == "object") || !(e && typeof e == "object"))
    return !1;
  let t = Array.isArray(n);
  if (Array.isArray(e) != t)
    return !1;
  if (t) {
    if (n.length != e.length)
      return !1;
    for (let r = 0; r < n.length; r++)
      if (!Lo(n[r], e[r]))
        return !1;
  } else {
    for (let r in n)
      if (!(r in e) || !Lo(n[r], e[r]))
        return !1;
    for (let r in e)
      if (!(r in n))
        return !1;
  }
  return !0;
}
class oe {
  constructor(e, t) {
    this.type = e, this.attrs = t;
  }
  addToSet(e) {
    let t, r = !1;
    for (let i = 0; i < e.length; i++) {
      let o = e[i];
      if (this.eq(o))
        return e;
      if (this.type.excludes(o.type))
        t || (t = e.slice(0, i));
      else {
        if (o.type.excludes(this.type))
          return e;
        !r && o.type.rank > this.type.rank && (t || (t = e.slice(0, i)), t.push(this), r = !0), t && t.push(o);
      }
    }
    return t || (t = e.slice()), r || t.push(this), t;
  }
  removeFromSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t]))
        return e.slice(0, t).concat(e.slice(t + 1));
    return e;
  }
  isInSet(e) {
    for (let t = 0; t < e.length; t++)
      if (this.eq(e[t]))
        return !0;
    return !1;
  }
  eq(e) {
    return this == e || this.type == e.type && Lo(this.attrs, e.attrs);
  }
  toJSON() {
    let e = { type: this.type.name };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return e;
  }
  static fromJSON(e, t) {
    if (!t)
      throw new RangeError("Invalid input for Mark.fromJSON");
    let r = e.marks[t.type];
    if (!r)
      throw new RangeError(`There is no mark type ${t.type} in this schema`);
    let i = r.create(t.attrs);
    return r.checkAttrs(i.attrs), i;
  }
  static sameSet(e, t) {
    if (e == t)
      return !0;
    if (e.length != t.length)
      return !1;
    for (let r = 0; r < e.length; r++)
      if (!e[r].eq(t[r]))
        return !1;
    return !0;
  }
  static setFrom(e) {
    if (!e || Array.isArray(e) && e.length == 0)
      return oe.none;
    if (e instanceof oe)
      return [e];
    let t = e.slice();
    return t.sort((r, i) => r.type.rank - i.type.rank), t;
  }
}
oe.none = [];
class Bo extends Error {
}
class R {
  constructor(e, t, r) {
    this.content = e, this.openStart = t, this.openEnd = r;
  }
  get size() {
    return this.content.size - this.openStart - this.openEnd;
  }
  insertAt(e, t) {
    let r = $f(this.content, e + this.openStart, t);
    return r && new R(r, this.openStart, this.openEnd);
  }
  removeBetween(e, t) {
    return new R(Ff(this.content, e + this.openStart, t + this.openStart), this.openStart, this.openEnd);
  }
  eq(e) {
    return this.content.eq(e.content) && this.openStart == e.openStart && this.openEnd == e.openEnd;
  }
  toString() {
    return this.content + "(" + this.openStart + "," + this.openEnd + ")";
  }
  toJSON() {
    if (!this.content.size)
      return null;
    let e = { content: this.content.toJSON() };
    return this.openStart > 0 && (e.openStart = this.openStart), this.openEnd > 0 && (e.openEnd = this.openEnd), e;
  }
  static fromJSON(e, t) {
    if (!t)
      return R.empty;
    let r = t.openStart || 0, i = t.openEnd || 0;
    if (typeof r != "number" || typeof i != "number")
      throw new RangeError("Invalid input for Slice.fromJSON");
    return new R(C.fromJSON(e, t.content), r, i);
  }
  static maxOpen(e, t = !0) {
    let r = 0, i = 0;
    for (let o = e.firstChild; o && !o.isLeaf && (t || !o.type.spec.isolating); o = o.firstChild)
      r++;
    for (let o = e.lastChild; o && !o.isLeaf && (t || !o.type.spec.isolating); o = o.lastChild)
      i++;
    return new R(e, r, i);
  }
}
R.empty = new R(C.empty, 0, 0);
function Ff(n, e, t) {
  let { index: r, offset: i } = n.findIndex(e), o = n.maybeChild(r), { index: s, offset: l } = n.findIndex(t);
  if (i == e || o.isText) {
    if (l != t && !n.child(s).isText)
      throw new RangeError("Removing non-flat range");
    return n.cut(0, e).append(n.cut(t));
  }
  if (r != s)
    throw new RangeError("Removing non-flat range");
  return n.replaceChild(r, o.copy(Ff(o.content, e - i - 1, t - i - 1)));
}
function $f(n, e, t, r) {
  let { index: i, offset: o } = n.findIndex(e), s = n.maybeChild(i);
  if (o == e || s.isText)
    return r && !r.canReplace(i, i, t) ? null : n.cut(0, e).append(t).append(n.cut(e));
  let l = $f(s.content, e - o - 1, t);
  return l && n.replaceChild(i, s.copy(l));
}
function mm(n, e, t) {
  if (t.openStart > n.depth)
    throw new Bo("Inserted content deeper than insertion position");
  if (n.depth - t.openStart != e.depth - t.openEnd)
    throw new Bo("Inconsistent open depths");
  return zf(n, e, t, 0);
}
function zf(n, e, t, r) {
  let i = n.index(r), o = n.node(r);
  if (i == e.index(r) && r < n.depth - t.openStart) {
    let s = zf(n, e, t, r + 1);
    return o.copy(o.content.replaceChild(i, s));
  } else if (t.content.size)
    if (!t.openStart && !t.openEnd && n.depth == r && e.depth == r) {
      let s = n.parent, l = s.content;
      return Hn(s, l.cut(0, n.parentOffset).append(t.content).append(l.cut(e.parentOffset)));
    } else {
      let { start: s, end: l } = gm(t, n);
      return Hn(o, Vf(n, s, l, e, r));
    }
  else
    return Hn(o, _o(n, e, r));
}
function Hf(n, e) {
  if (!e.type.compatibleContent(n.type))
    throw new Bo("Cannot join " + e.type.name + " onto " + n.type.name);
}
function Kl(n, e, t) {
  let r = n.node(t);
  return Hf(r, e.node(t)), r;
}
function zn(n, e) {
  let t = e.length - 1;
  t >= 0 && n.isText && n.sameMarkup(e[t]) ? e[t] = n.withText(e[t].text + n.text) : e.push(n);
}
function si(n, e, t, r) {
  let i = (e || n).node(t), o = 0, s = e ? e.index(t) : i.childCount;
  n && (o = n.index(t), n.depth > t ? o++ : n.textOffset && (zn(n.nodeAfter, r), o++));
  for (let l = o; l < s; l++)
    zn(i.child(l), r);
  e && e.depth == t && e.textOffset && zn(e.nodeBefore, r);
}
function Hn(n, e) {
  return n.type.checkContent(e), n.copy(e);
}
function Vf(n, e, t, r, i) {
  let o = n.depth > i && Kl(n, e, i + 1), s = r.depth > i && Kl(t, r, i + 1), l = [];
  return si(null, n, i, l), o && s && e.index(i) == t.index(i) ? (Hf(o, s), zn(Hn(o, Vf(n, e, t, r, i + 1)), l)) : (o && zn(Hn(o, _o(n, e, i + 1)), l), si(e, t, i, l), s && zn(Hn(s, _o(t, r, i + 1)), l)), si(r, null, i, l), new C(l);
}
function _o(n, e, t) {
  let r = [];
  if (si(null, n, t, r), n.depth > t) {
    let i = Kl(n, e, t + 1);
    zn(Hn(i, _o(n, e, t + 1)), r);
  }
  return si(e, null, t, r), new C(r);
}
function gm(n, e) {
  let t = e.depth - n.openStart, i = e.node(t).copy(n.content);
  for (let o = t - 1; o >= 0; o--)
    i = e.node(o).copy(C.from(i));
  return {
    start: i.resolveNoCache(n.openStart + t),
    end: i.resolveNoCache(i.content.size - n.openEnd - t)
  };
}
class bi {
  constructor(e, t, r) {
    this.pos = e, this.path = t, this.parentOffset = r, this.depth = t.length / 3 - 1;
  }
  resolveDepth(e) {
    return e == null ? this.depth : e < 0 ? this.depth + e : e;
  }
  get parent() {
    return this.node(this.depth);
  }
  get doc() {
    return this.node(0);
  }
  node(e) {
    return this.path[this.resolveDepth(e) * 3];
  }
  index(e) {
    return this.path[this.resolveDepth(e) * 3 + 1];
  }
  indexAfter(e) {
    return e = this.resolveDepth(e), this.index(e) + (e == this.depth && !this.textOffset ? 0 : 1);
  }
  start(e) {
    return e = this.resolveDepth(e), e == 0 ? 0 : this.path[e * 3 - 1] + 1;
  }
  end(e) {
    return e = this.resolveDepth(e), this.start(e) + this.node(e).content.size;
  }
  before(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position before the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1];
  }
  after(e) {
    if (e = this.resolveDepth(e), !e)
      throw new RangeError("There is no position after the top-level node");
    return e == this.depth + 1 ? this.pos : this.path[e * 3 - 1] + this.path[e * 3].nodeSize;
  }
  get textOffset() {
    return this.pos - this.path[this.path.length - 1];
  }
  get nodeAfter() {
    let e = this.parent, t = this.index(this.depth);
    if (t == e.childCount)
      return null;
    let r = this.pos - this.path[this.path.length - 1], i = e.child(t);
    return r ? e.child(t).cut(r) : i;
  }
  get nodeBefore() {
    let e = this.index(this.depth), t = this.pos - this.path[this.path.length - 1];
    return t ? this.parent.child(e).cut(0, t) : e == 0 ? null : this.parent.child(e - 1);
  }
  posAtIndex(e, t) {
    t = this.resolveDepth(t);
    let r = this.path[t * 3], i = t == 0 ? 0 : this.path[t * 3 - 1] + 1;
    for (let o = 0; o < e; o++)
      i += r.child(o).nodeSize;
    return i;
  }
  marks() {
    let e = this.parent, t = this.index();
    if (e.content.size == 0)
      return oe.none;
    if (this.textOffset)
      return e.child(t).marks;
    let r = e.maybeChild(t - 1), i = e.maybeChild(t);
    if (!r) {
      let l = r;
      r = i, i = l;
    }
    let o = r.marks;
    for (var s = 0; s < o.length; s++)
      o[s].type.spec.inclusive === !1 && (!i || !o[s].isInSet(i.marks)) && (o = o[s--].removeFromSet(o));
    return o;
  }
  marksAcross(e) {
    let t = this.parent.maybeChild(this.index());
    if (!t || !t.isInline)
      return null;
    let r = t.marks, i = e.parent.maybeChild(e.index());
    for (var o = 0; o < r.length; o++)
      r[o].type.spec.inclusive === !1 && (!i || !r[o].isInSet(i.marks)) && (r = r[o--].removeFromSet(r));
    return r;
  }
  sharedDepth(e) {
    for (let t = this.depth; t > 0; t--)
      if (this.start(t) <= e && this.end(t) >= e)
        return t;
    return 0;
  }
  blockRange(e = this, t) {
    if (e.pos < this.pos)
      return e.blockRange(this);
    for (let r = this.depth - (this.parent.inlineContent || this.pos == e.pos ? 1 : 0); r >= 0; r--)
      if (e.pos <= this.end(r) && (!t || t(this.node(r))))
        return new Fo(this, e, r);
    return null;
  }
  sameParent(e) {
    return this.pos - this.parentOffset == e.pos - e.parentOffset;
  }
  max(e) {
    return e.pos > this.pos ? e : this;
  }
  min(e) {
    return e.pos < this.pos ? e : this;
  }
  toString() {
    let e = "";
    for (let t = 1; t <= this.depth; t++)
      e += (e ? "/" : "") + this.node(t).type.name + "_" + this.index(t - 1);
    return e + ":" + this.parentOffset;
  }
  static resolve(e, t) {
    if (!(t >= 0 && t <= e.content.size))
      throw new RangeError("Position " + t + " out of range");
    let r = [], i = 0, o = t;
    for (let s = e; ; ) {
      let { index: l, offset: a } = s.content.findIndex(o), c = o - a;
      if (r.push(s, l, i + a), !c || (s = s.child(l), s.isText))
        break;
      o = c - 1, i += a + 1;
    }
    return new bi(t, r, o);
  }
  static resolveCached(e, t) {
    let r = Ic.get(e);
    if (r)
      for (let o = 0; o < r.elts.length; o++) {
        let s = r.elts[o];
        if (s.pos == t)
          return s;
      }
    else
      Ic.set(e, r = new ym());
    let i = r.elts[r.i] = bi.resolve(e, t);
    return r.i = (r.i + 1) % vm, i;
  }
}
class ym {
  constructor() {
    this.elts = [], this.i = 0;
  }
}
const vm = 12, Ic = /* @__PURE__ */ new WeakMap();
class Fo {
  constructor(e, t, r) {
    this.$from = e, this.$to = t, this.depth = r;
  }
  get start() {
    return this.$from.before(this.depth + 1);
  }
  get end() {
    return this.$to.after(this.depth + 1);
  }
  get parent() {
    return this.$from.node(this.depth);
  }
  get startIndex() {
    return this.$from.index(this.depth);
  }
  get endIndex() {
    return this.$to.indexAfter(this.depth);
  }
}
const bm = /* @__PURE__ */ Object.create(null);
class kt {
  constructor(e, t, r, i = oe.none) {
    this.type = e, this.attrs = t, this.marks = i, this.content = r || C.empty;
  }
  get children() {
    return this.content.content;
  }
  get nodeSize() {
    return this.isLeaf ? 1 : 2 + this.content.size;
  }
  get childCount() {
    return this.content.childCount;
  }
  child(e) {
    return this.content.child(e);
  }
  maybeChild(e) {
    return this.content.maybeChild(e);
  }
  forEach(e) {
    this.content.forEach(e);
  }
  nodesBetween(e, t, r, i = 0) {
    this.content.nodesBetween(e, t, r, i, this);
  }
  descendants(e) {
    this.nodesBetween(0, this.content.size, e);
  }
  get textContent() {
    return this.isLeaf && this.type.spec.leafText ? this.type.spec.leafText(this) : this.textBetween(0, this.content.size, "");
  }
  textBetween(e, t, r, i) {
    return this.content.textBetween(e, t, r, i);
  }
  get firstChild() {
    return this.content.firstChild;
  }
  get lastChild() {
    return this.content.lastChild;
  }
  eq(e) {
    return this == e || this.sameMarkup(e) && this.content.eq(e.content);
  }
  sameMarkup(e) {
    return this.hasMarkup(e.type, e.attrs, e.marks);
  }
  hasMarkup(e, t, r) {
    return this.type == e && Lo(this.attrs, t || e.defaultAttrs || bm) && oe.sameSet(this.marks, r || oe.none);
  }
  copy(e = null) {
    return e == this.content ? this : new kt(this.type, this.attrs, e, this.marks);
  }
  mark(e) {
    return e == this.marks ? this : new kt(this.type, this.attrs, this.content, e);
  }
  cut(e, t = this.content.size) {
    return e == 0 && t == this.content.size ? this : this.copy(this.content.cut(e, t));
  }
  slice(e, t = this.content.size, r = !1) {
    if (e == t)
      return R.empty;
    let i = this.resolve(e), o = this.resolve(t), s = r ? 0 : i.sharedDepth(t), l = i.start(s), c = i.node(s).content.cut(i.pos - l, o.pos - l);
    return new R(c, i.depth - s, o.depth - s);
  }
  replace(e, t, r) {
    return mm(this.resolve(e), this.resolve(t), r);
  }
  nodeAt(e) {
    for (let t = this; ; ) {
      let { index: r, offset: i } = t.content.findIndex(e);
      if (t = t.maybeChild(r), !t)
        return null;
      if (i == e || t.isText)
        return t;
      e -= i + 1;
    }
  }
  childAfter(e) {
    let { index: t, offset: r } = this.content.findIndex(e);
    return { node: this.content.maybeChild(t), index: t, offset: r };
  }
  childBefore(e) {
    if (e == 0)
      return { node: null, index: 0, offset: 0 };
    let { index: t, offset: r } = this.content.findIndex(e);
    if (r < e)
      return { node: this.content.child(t), index: t, offset: r };
    let i = this.content.child(t - 1);
    return { node: i, index: t - 1, offset: r - i.nodeSize };
  }
  resolve(e) {
    return bi.resolveCached(this, e);
  }
  resolveNoCache(e) {
    return bi.resolve(this, e);
  }
  rangeHasMark(e, t, r) {
    let i = !1;
    return t > e && this.nodesBetween(e, t, (o) => (r.isInSet(o.marks) && (i = !0), !i)), i;
  }
  get isBlock() {
    return this.type.isBlock;
  }
  get isTextblock() {
    return this.type.isTextblock;
  }
  get inlineContent() {
    return this.type.inlineContent;
  }
  get isInline() {
    return this.type.isInline;
  }
  get isText() {
    return this.type.isText;
  }
  get isLeaf() {
    return this.type.isLeaf;
  }
  get isAtom() {
    return this.type.isAtom;
  }
  toString() {
    if (this.type.spec.toDebugString)
      return this.type.spec.toDebugString(this);
    let e = this.type.name;
    return this.content.size && (e += "(" + this.content.toStringInner() + ")"), jf(this.marks, e);
  }
  contentMatchAt(e) {
    let t = this.type.contentMatch.matchFragment(this.content, 0, e);
    if (!t)
      throw new Error("Called contentMatchAt on a node with invalid content");
    return t;
  }
  canReplace(e, t, r = C.empty, i = 0, o = r.childCount) {
    let s = this.contentMatchAt(e).matchFragment(r, i, o), l = s && s.matchFragment(this.content, t);
    if (!l || !l.validEnd)
      return !1;
    for (let a = i; a < o; a++)
      if (!this.type.allowsMarks(r.child(a).marks))
        return !1;
    return !0;
  }
  canReplaceWith(e, t, r, i) {
    if (i && !this.type.allowsMarks(i))
      return !1;
    let o = this.contentMatchAt(e).matchType(r), s = o && o.matchFragment(this.content, t);
    return s ? s.validEnd : !1;
  }
  canAppend(e) {
    return e.content.size ? this.canReplace(this.childCount, this.childCount, e.content) : this.type.compatibleContent(e.type);
  }
  check() {
    this.type.checkContent(this.content), this.type.checkAttrs(this.attrs);
    let e = oe.none;
    for (let t = 0; t < this.marks.length; t++) {
      let r = this.marks[t];
      r.type.checkAttrs(r.attrs), e = r.addToSet(e);
    }
    if (!oe.sameSet(e, this.marks))
      throw new RangeError(`Invalid collection of marks for node ${this.type.name}: ${this.marks.map((t) => t.type.name)}`);
    this.content.forEach((t) => t.check());
  }
  toJSON() {
    let e = { type: this.type.name };
    for (let t in this.attrs) {
      e.attrs = this.attrs;
      break;
    }
    return this.content.size && (e.content = this.content.toJSON()), this.marks.length && (e.marks = this.marks.map((t) => t.toJSON())), e;
  }
  static fromJSON(e, t) {
    if (!t)
      throw new RangeError("Invalid input for Node.fromJSON");
    let r;
    if (t.marks) {
      if (!Array.isArray(t.marks))
        throw new RangeError("Invalid mark data for Node.fromJSON");
      r = t.marks.map(e.markFromJSON);
    }
    if (t.type == "text") {
      if (typeof t.text != "string")
        throw new RangeError("Invalid text node in JSON");
      return e.text(t.text, r);
    }
    let i = C.fromJSON(e, t.content), o = e.nodeType(t.type).create(t.attrs, i, r);
    return o.type.checkAttrs(o.attrs), o;
  }
}
kt.prototype.text = void 0;
class $o extends kt {
  constructor(e, t, r, i) {
    if (super(e, t, null, i), !r)
      throw new RangeError("Empty text nodes are not allowed");
    this.text = r;
  }
  toString() {
    return this.type.spec.toDebugString ? this.type.spec.toDebugString(this) : jf(this.marks, JSON.stringify(this.text));
  }
  get textContent() {
    return this.text;
  }
  textBetween(e, t) {
    return this.text.slice(e, t);
  }
  get nodeSize() {
    return this.text.length;
  }
  mark(e) {
    return e == this.marks ? this : new $o(this.type, this.attrs, this.text, e);
  }
  withText(e) {
    return e == this.text ? this : new $o(this.type, this.attrs, e, this.marks);
  }
  cut(e = 0, t = this.text.length) {
    return e == 0 && t == this.text.length ? this : this.withText(this.text.slice(e, t));
  }
  eq(e) {
    return this.sameMarkup(e) && this.text == e.text;
  }
  toJSON() {
    let e = super.toJSON();
    return e.text = this.text, e;
  }
}
function jf(n, e) {
  for (let t = n.length - 1; t >= 0; t--)
    e = n[t].type.name + "(" + e + ")";
  return e;
}
class qn {
  constructor(e) {
    this.validEnd = e, this.next = [], this.wrapCache = [];
  }
  static parse(e, t) {
    let r = new wm(e, t);
    if (r.next == null)
      return qn.empty;
    let i = Wf(r);
    r.next && r.err("Unexpected trailing text");
    let o = Om(Tm(i));
    return Mm(o, r), o;
  }
  matchType(e) {
    for (let t = 0; t < this.next.length; t++)
      if (this.next[t].type == e)
        return this.next[t].next;
    return null;
  }
  matchFragment(e, t = 0, r = e.childCount) {
    let i = this;
    for (let o = t; i && o < r; o++)
      i = i.matchType(e.child(o).type);
    return i;
  }
  get inlineContent() {
    return this.next.length != 0 && this.next[0].type.isInline;
  }
  get defaultType() {
    for (let e = 0; e < this.next.length; e++) {
      let { type: t } = this.next[e];
      if (!(t.isText || t.hasRequiredAttrs()))
        return t;
    }
    return null;
  }
  compatible(e) {
    for (let t = 0; t < this.next.length; t++)
      for (let r = 0; r < e.next.length; r++)
        if (this.next[t].type == e.next[r].type)
          return !0;
    return !1;
  }
  fillBefore(e, t = !1, r = 0) {
    let i = [this];
    function o(s, l) {
      let a = s.matchFragment(e, r);
      if (a && (!t || a.validEnd))
        return C.from(l.map((c) => c.createAndFill()));
      for (let c = 0; c < s.next.length; c++) {
        let { type: u, next: f } = s.next[c];
        if (!(u.isText || u.hasRequiredAttrs()) && i.indexOf(f) == -1) {
          i.push(f);
          let d = o(f, l.concat(u));
          if (d)
            return d;
        }
      }
      return null;
    }
    return o(this, []);
  }
  findWrapping(e) {
    for (let r = 0; r < this.wrapCache.length; r += 2)
      if (this.wrapCache[r] == e)
        return this.wrapCache[r + 1];
    let t = this.computeWrapping(e);
    return this.wrapCache.push(e, t), t;
  }
  computeWrapping(e) {
    let t = /* @__PURE__ */ Object.create(null), r = [{ match: this, type: null, via: null }];
    for (; r.length; ) {
      let i = r.shift(), o = i.match;
      if (o.matchType(e)) {
        let s = [];
        for (let l = i; l.type; l = l.via)
          s.push(l.type);
        return s.reverse();
      }
      for (let s = 0; s < o.next.length; s++) {
        let { type: l, next: a } = o.next[s];
        !l.isLeaf && !l.hasRequiredAttrs() && !(l.name in t) && (!i.type || a.validEnd) && (r.push({ match: l.contentMatch, type: l, via: i }), t[l.name] = !0);
      }
    }
    return null;
  }
  get edgeCount() {
    return this.next.length;
  }
  edge(e) {
    if (e >= this.next.length)
      throw new RangeError(`There's no ${e}th edge in this content match`);
    return this.next[e];
  }
  toString() {
    let e = [];
    function t(r) {
      e.push(r);
      for (let i = 0; i < r.next.length; i++)
        e.indexOf(r.next[i].next) == -1 && t(r.next[i].next);
    }
    return t(this), e.map((r, i) => {
      let o = i + (r.validEnd ? "*" : " ") + " ";
      for (let s = 0; s < r.next.length; s++)
        o += (s ? ", " : "") + r.next[s].type.name + "->" + e.indexOf(r.next[s].next);
      return o;
    }).join(`
`);
  }
}
qn.empty = new qn(!0);
class wm {
  constructor(e, t) {
    this.string = e, this.nodeTypes = t, this.inline = null, this.pos = 0, this.tokens = e.split(/\s*(?=\b|\W|$)/), this.tokens[this.tokens.length - 1] == "" && this.tokens.pop(), this.tokens[0] == "" && this.tokens.shift();
  }
  get next() {
    return this.tokens[this.pos];
  }
  eat(e) {
    return this.next == e && (this.pos++ || !0);
  }
  err(e) {
    throw new SyntaxError(e + " (in content expression '" + this.string + "')");
  }
}
function Wf(n) {
  let e = [];
  do
    e.push(km(n));
  while (n.eat("|"));
  return e.length == 1 ? e[0] : { type: "choice", exprs: e };
}
function km(n) {
  let e = [];
  do
    e.push(xm(n));
  while (n.next && n.next != ")" && n.next != "|");
  return e.length == 1 ? e[0] : { type: "seq", exprs: e };
}
function xm(n) {
  let e = Cm(n);
  for (; ; )
    if (n.eat("+"))
      e = { type: "plus", expr: e };
    else if (n.eat("*"))
      e = { type: "star", expr: e };
    else if (n.eat("?"))
      e = { type: "opt", expr: e };
    else if (n.eat("{"))
      e = Sm(n, e);
    else
      break;
  return e;
}
function Rc(n) {
  /\D/.test(n.next) && n.err("Expected number, got '" + n.next + "'");
  let e = Number(n.next);
  return n.pos++, e;
}
function Sm(n, e) {
  let t = Rc(n), r = t;
  return n.eat(",") && (n.next != "}" ? r = Rc(n) : r = -1), n.eat("}") || n.err("Unclosed braced range"), { type: "range", min: t, max: r, expr: e };
}
function Em(n, e) {
  let t = n.nodeTypes, r = t[e];
  if (r)
    return [r];
  let i = [];
  for (let o in t) {
    let s = t[o];
    s.isInGroup(e) && i.push(s);
  }
  return i.length == 0 && n.err("No node type or group '" + e + "' found"), i;
}
function Cm(n) {
  if (n.eat("(")) {
    let e = Wf(n);
    return n.eat(")") || n.err("Missing closing paren"), e;
  } else if (/\W/.test(n.next))
    n.err("Unexpected token '" + n.next + "'");
  else {
    let e = Em(n, n.next).map((t) => (n.inline == null ? n.inline = t.isInline : n.inline != t.isInline && n.err("Mixing inline and block content"), { type: "name", value: t }));
    return n.pos++, e.length == 1 ? e[0] : { type: "choice", exprs: e };
  }
}
function Tm(n) {
  let e = [[]];
  return i(o(n, 0), t()), e;
  function t() {
    return e.push([]) - 1;
  }
  function r(s, l, a) {
    let c = { term: a, to: l };
    return e[s].push(c), c;
  }
  function i(s, l) {
    s.forEach((a) => a.to = l);
  }
  function o(s, l) {
    if (s.type == "choice")
      return s.exprs.reduce((a, c) => a.concat(o(c, l)), []);
    if (s.type == "seq")
      for (let a = 0; ; a++) {
        let c = o(s.exprs[a], l);
        if (a == s.exprs.length - 1)
          return c;
        i(c, l = t());
      }
    else if (s.type == "star") {
      let a = t();
      return r(l, a), i(o(s.expr, a), a), [r(a)];
    } else if (s.type == "plus") {
      let a = t();
      return i(o(s.expr, l), a), i(o(s.expr, a), a), [r(a)];
    } else {
      if (s.type == "opt")
        return [r(l)].concat(o(s.expr, l));
      if (s.type == "range") {
        let a = l;
        for (let c = 0; c < s.min; c++) {
          let u = t();
          i(o(s.expr, a), u), a = u;
        }
        if (s.max == -1)
          i(o(s.expr, a), a);
        else
          for (let c = s.min; c < s.max; c++) {
            let u = t();
            r(a, u), i(o(s.expr, a), u), a = u;
          }
        return [r(a)];
      } else {
        if (s.type == "name")
          return [r(l, void 0, s.value)];
        throw new Error("Unknown expr type");
      }
    }
  }
}
function Uf(n, e) {
  return e - n;
}
function Pc(n, e) {
  let t = [];
  return r(e), t.sort(Uf);
  function r(i) {
    let o = n[i];
    if (o.length == 1 && !o[0].term)
      return r(o[0].to);
    t.push(i);
    for (let s = 0; s < o.length; s++) {
      let { term: l, to: a } = o[s];
      !l && t.indexOf(a) == -1 && r(a);
    }
  }
}
function Om(n) {
  let e = /* @__PURE__ */ Object.create(null);
  return t(Pc(n, 0));
  function t(r) {
    let i = [];
    r.forEach((s) => {
      n[s].forEach(({ term: l, to: a }) => {
        if (!l)
          return;
        let c;
        for (let u = 0; u < i.length; u++)
          i[u][0] == l && (c = i[u][1]);
        Pc(n, a).forEach((u) => {
          c || i.push([l, c = []]), c.indexOf(u) == -1 && c.push(u);
        });
      });
    });
    let o = e[r.join(",")] = new qn(r.indexOf(n.length - 1) > -1);
    for (let s = 0; s < i.length; s++) {
      let l = i[s][1].sort(Uf);
      o.next.push({ type: i[s][0], next: e[l.join(",")] || t(l) });
    }
    return o;
  }
}
function Mm(n, e) {
  for (let t = 0, r = [n]; t < r.length; t++) {
    let i = r[t], o = !i.validEnd, s = [];
    for (let l = 0; l < i.next.length; l++) {
      let { type: a, next: c } = i.next[l];
      s.push(a.name), o && !(a.isText || a.hasRequiredAttrs()) && (o = !1), r.indexOf(c) == -1 && r.push(c);
    }
    o && e.err("Only non-generatable nodes (" + s.join(", ") + ") in a required position (see https://prosemirror.net/docs/guide/#generatable)");
  }
}
function Kf(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n) {
    let r = n[t];
    if (!r.hasDefault)
      return null;
    e[t] = r.default;
  }
  return e;
}
function qf(n, e) {
  let t = /* @__PURE__ */ Object.create(null);
  for (let r in n) {
    let i = e && e[r];
    if (i === void 0) {
      let o = n[r];
      if (o.hasDefault)
        i = o.default;
      else
        throw new RangeError("No value supplied for attribute " + r);
    }
    t[r] = i;
  }
  return t;
}
function Jf(n, e, t, r) {
  for (let i in e)
    if (!(i in n))
      throw new RangeError(`Unsupported attribute ${i} for ${t} of type ${i}`);
  for (let i in n) {
    let o = n[i];
    o.validate && o.validate(e[i]);
  }
}
function Gf(n, e) {
  let t = /* @__PURE__ */ Object.create(null);
  if (e)
    for (let r in e)
      t[r] = new Dm(n, r, e[r]);
  return t;
}
class zo {
  constructor(e, t, r) {
    this.name = e, this.schema = t, this.spec = r, this.markSet = null, this.groups = r.group ? r.group.split(" ") : [], this.attrs = Gf(e, r.attrs), this.defaultAttrs = Kf(this.attrs), this.contentMatch = null, this.inlineContent = null, this.isBlock = !(r.inline || e == "text"), this.isText = e == "text";
  }
  get isInline() {
    return !this.isBlock;
  }
  get isTextblock() {
    return this.isBlock && this.inlineContent;
  }
  get isLeaf() {
    return this.contentMatch == qn.empty;
  }
  get isAtom() {
    return this.isLeaf || !!this.spec.atom;
  }
  isInGroup(e) {
    return this.groups.indexOf(e) > -1;
  }
  get whitespace() {
    return this.spec.whitespace || (this.spec.code ? "pre" : "normal");
  }
  hasRequiredAttrs() {
    for (let e in this.attrs)
      if (this.attrs[e].isRequired)
        return !0;
    return !1;
  }
  compatibleContent(e) {
    return this == e || this.contentMatch.compatible(e.contentMatch);
  }
  computeAttrs(e) {
    return !e && this.defaultAttrs ? this.defaultAttrs : qf(this.attrs, e);
  }
  create(e = null, t, r) {
    if (this.isText)
      throw new Error("NodeType.create can't construct text nodes");
    return new kt(this, this.computeAttrs(e), C.from(t), oe.setFrom(r));
  }
  createChecked(e = null, t, r) {
    return t = C.from(t), this.checkContent(t), new kt(this, this.computeAttrs(e), t, oe.setFrom(r));
  }
  createAndFill(e = null, t, r) {
    if (e = this.computeAttrs(e), t = C.from(t), t.size) {
      let s = this.contentMatch.fillBefore(t);
      if (!s)
        return null;
      t = s.append(t);
    }
    let i = this.contentMatch.matchFragment(t), o = i && i.fillBefore(C.empty, !0);
    return o ? new kt(this, e, t.append(o), oe.setFrom(r)) : null;
  }
  validContent(e) {
    let t = this.contentMatch.matchFragment(e);
    if (!t || !t.validEnd)
      return !1;
    for (let r = 0; r < e.childCount; r++)
      if (!this.allowsMarks(e.child(r).marks))
        return !1;
    return !0;
  }
  checkContent(e) {
    if (!this.validContent(e))
      throw new RangeError(`Invalid content for node ${this.name}: ${e.toString().slice(0, 50)}`);
  }
  checkAttrs(e) {
    Jf(this.attrs, e, "node", this.name);
  }
  allowsMarkType(e) {
    return this.markSet == null || this.markSet.indexOf(e) > -1;
  }
  allowsMarks(e) {
    if (this.markSet == null)
      return !0;
    for (let t = 0; t < e.length; t++)
      if (!this.allowsMarkType(e[t].type))
        return !1;
    return !0;
  }
  allowedMarks(e) {
    if (this.markSet == null)
      return e;
    let t;
    for (let r = 0; r < e.length; r++)
      this.allowsMarkType(e[r].type) ? t && t.push(e[r]) : t || (t = e.slice(0, r));
    return t ? t.length ? t : oe.none : e;
  }
  static compile(e, t) {
    let r = /* @__PURE__ */ Object.create(null);
    e.forEach((o, s) => r[o] = new zo(o, t, s));
    let i = t.spec.topNode || "doc";
    if (!r[i])
      throw new RangeError("Schema is missing its top node type ('" + i + "')");
    if (!r.text)
      throw new RangeError("Every schema needs a 'text' type");
    for (let o in r.text.attrs)
      throw new RangeError("The text node type should not have attributes");
    return r;
  }
}
function Am(n, e, t) {
  let r = t.split("|");
  return (i) => {
    let o = i === null ? "null" : typeof i;
    if (r.indexOf(o) < 0)
      throw new RangeError(`Expected value of type ${r} for attribute ${e} on type ${n}, got ${o}`);
  };
}
class Dm {
  constructor(e, t, r) {
    this.hasDefault = Object.prototype.hasOwnProperty.call(r, "default"), this.default = r.default, this.validate = typeof r.validate == "string" ? Am(e, t, r.validate) : r.validate;
  }
  get isRequired() {
    return !this.hasDefault;
  }
}
class Is {
  constructor(e, t, r, i) {
    this.name = e, this.rank = t, this.schema = r, this.spec = i, this.attrs = Gf(e, i.attrs), this.excluded = null;
    let o = Kf(this.attrs);
    this.instance = o ? new oe(this, o) : null;
  }
  create(e = null) {
    return !e && this.instance ? this.instance : new oe(this, qf(this.attrs, e));
  }
  static compile(e, t) {
    let r = /* @__PURE__ */ Object.create(null), i = 0;
    return e.forEach((o, s) => r[o] = new Is(o, i++, t, s)), r;
  }
  removeFromSet(e) {
    for (var t = 0; t < e.length; t++)
      e[t].type == this && (e = e.slice(0, t).concat(e.slice(t + 1)), t--);
    return e;
  }
  isInSet(e) {
    for (let t = 0; t < e.length; t++)
      if (e[t].type == this)
        return e[t];
  }
  checkAttrs(e) {
    Jf(this.attrs, e, "mark", this.name);
  }
  excludes(e) {
    return this.excluded.indexOf(e) > -1;
  }
}
class Yf {
  constructor(e) {
    this.linebreakReplacement = null, this.cached = /* @__PURE__ */ Object.create(null);
    let t = this.spec = {};
    for (let i in e)
      t[i] = e[i];
    t.nodes = Te.from(e.nodes), t.marks = Te.from(e.marks || {}), this.nodes = zo.compile(this.spec.nodes, this), this.marks = Is.compile(this.spec.marks, this);
    let r = /* @__PURE__ */ Object.create(null);
    for (let i in this.nodes) {
      if (i in this.marks)
        throw new RangeError(i + " can not be both a node and a mark");
      let o = this.nodes[i], s = o.spec.content || "", l = o.spec.marks;
      if (o.contentMatch = r[s] || (r[s] = qn.parse(s, this.nodes)), o.inlineContent = o.contentMatch.inlineContent, o.spec.linebreakReplacement) {
        if (this.linebreakReplacement)
          throw new RangeError("Multiple linebreak nodes defined");
        if (!o.isInline || !o.isLeaf)
          throw new RangeError("Linebreak replacement nodes must be inline leaf nodes");
        this.linebreakReplacement = o;
      }
      o.markSet = l == "_" ? null : l ? Lc(this, l.split(" ")) : l == "" || !o.inlineContent ? [] : null;
    }
    for (let i in this.marks) {
      let o = this.marks[i], s = o.spec.excludes;
      o.excluded = s == null ? [o] : s == "" ? [] : Lc(this, s.split(" "));
    }
    this.nodeFromJSON = this.nodeFromJSON.bind(this), this.markFromJSON = this.markFromJSON.bind(this), this.topNodeType = this.nodes[this.spec.topNode || "doc"], this.cached.wrappings = /* @__PURE__ */ Object.create(null);
  }
  node(e, t = null, r, i) {
    if (typeof e == "string")
      e = this.nodeType(e);
    else if (e instanceof zo) {
      if (e.schema != this)
        throw new RangeError("Node type from different schema used (" + e.name + ")");
    } else
      throw new RangeError("Invalid node type: " + e);
    return e.createChecked(t, r, i);
  }
  text(e, t) {
    let r = this.nodes.text;
    return new $o(r, r.defaultAttrs, e, oe.setFrom(t));
  }
  mark(e, t) {
    return typeof e == "string" && (e = this.marks[e]), e.create(t);
  }
  nodeFromJSON(e) {
    return kt.fromJSON(this, e);
  }
  markFromJSON(e) {
    return oe.fromJSON(this, e);
  }
  nodeType(e) {
    let t = this.nodes[e];
    if (!t)
      throw new RangeError("Unknown node type: " + e);
    return t;
  }
}
function Lc(n, e) {
  let t = [];
  for (let r = 0; r < e.length; r++) {
    let i = e[r], o = n.marks[i], s = o;
    if (o)
      t.push(o);
    else
      for (let l in n.marks) {
        let a = n.marks[l];
        (i == "_" || a.spec.group && a.spec.group.split(" ").indexOf(i) > -1) && t.push(s = a);
      }
    if (!s)
      throw new SyntaxError("Unknown mark type: '" + e[r] + "'");
  }
  return t;
}
function Nm(n) {
  return n.tag != null;
}
function Im(n) {
  return n.style != null;
}
class vn {
  constructor(e, t) {
    this.schema = e, this.rules = t, this.tags = [], this.styles = [];
    let r = this.matchedStyles = [];
    t.forEach((i) => {
      if (Nm(i))
        this.tags.push(i);
      else if (Im(i)) {
        let o = /[^=]*/.exec(i.style)[0];
        r.indexOf(o) < 0 && r.push(o), this.styles.push(i);
      }
    }), this.normalizeLists = !this.tags.some((i) => {
      if (!/^(ul|ol)\b/.test(i.tag) || !i.node)
        return !1;
      let o = e.nodes[i.node];
      return o.contentMatch.matchType(o);
    });
  }
  parse(e, t = {}) {
    let r = new _c(this, t, !1);
    return r.addAll(e, oe.none, t.from, t.to), r.finish();
  }
  parseSlice(e, t = {}) {
    let r = new _c(this, t, !0);
    return r.addAll(e, oe.none, t.from, t.to), R.maxOpen(r.finish());
  }
  matchTag(e, t, r) {
    for (let i = r ? this.tags.indexOf(r) + 1 : 0; i < this.tags.length; i++) {
      let o = this.tags[i];
      if (Lm(e, o.tag) && (o.namespace === void 0 || e.namespaceURI == o.namespace) && (!o.context || t.matchesContext(o.context))) {
        if (o.getAttrs) {
          let s = o.getAttrs(e);
          if (s === !1)
            continue;
          o.attrs = s || void 0;
        }
        return o;
      }
    }
  }
  matchStyle(e, t, r, i) {
    for (let o = i ? this.styles.indexOf(i) + 1 : 0; o < this.styles.length; o++) {
      let s = this.styles[o], l = s.style;
      if (!(l.indexOf(e) != 0 || s.context && !r.matchesContext(s.context) || l.length > e.length && (l.charCodeAt(e.length) != 61 || l.slice(e.length + 1) != t))) {
        if (s.getAttrs) {
          let a = s.getAttrs(t);
          if (a === !1)
            continue;
          s.attrs = a || void 0;
        }
        return s;
      }
    }
  }
  static schemaRules(e) {
    let t = [];
    function r(i) {
      let o = i.priority == null ? 50 : i.priority, s = 0;
      for (; s < t.length; s++) {
        let l = t[s];
        if ((l.priority == null ? 50 : l.priority) < o)
          break;
      }
      t.splice(s, 0, i);
    }
    for (let i in e.marks) {
      let o = e.marks[i].spec.parseDOM;
      o && o.forEach((s) => {
        r(s = Fc(s)), s.mark || s.ignore || s.clearMark || (s.mark = i);
      });
    }
    for (let i in e.nodes) {
      let o = e.nodes[i].spec.parseDOM;
      o && o.forEach((s) => {
        r(s = Fc(s)), s.node || s.ignore || s.mark || (s.node = i);
      });
    }
    return t;
  }
  static fromSchema(e) {
    return e.cached.domParser || (e.cached.domParser = new vn(e, vn.schemaRules(e)));
  }
}
const Xf = {
  address: !0,
  article: !0,
  aside: !0,
  blockquote: !0,
  canvas: !0,
  dd: !0,
  div: !0,
  dl: !0,
  fieldset: !0,
  figcaption: !0,
  figure: !0,
  footer: !0,
  form: !0,
  h1: !0,
  h2: !0,
  h3: !0,
  h4: !0,
  h5: !0,
  h6: !0,
  header: !0,
  hgroup: !0,
  hr: !0,
  li: !0,
  noscript: !0,
  ol: !0,
  output: !0,
  p: !0,
  pre: !0,
  section: !0,
  table: !0,
  tfoot: !0,
  ul: !0
}, Rm = {
  head: !0,
  noscript: !0,
  object: !0,
  script: !0,
  style: !0,
  title: !0
}, Qf = { ol: !0, ul: !0 }, wi = 1, ql = 2, li = 4;
function Bc(n, e, t) {
  return e != null ? (e ? wi : 0) | (e === "full" ? ql : 0) : n && n.whitespace == "pre" ? wi | ql : t & ~li;
}
class io {
  constructor(e, t, r, i, o, s) {
    this.type = e, this.attrs = t, this.marks = r, this.solid = i, this.options = s, this.content = [], this.activeMarks = oe.none, this.match = o || (s & li ? null : e.contentMatch);
  }
  findWrapping(e) {
    if (!this.match) {
      if (!this.type)
        return [];
      let t = this.type.contentMatch.fillBefore(C.from(e));
      if (t)
        this.match = this.type.contentMatch.matchFragment(t);
      else {
        let r = this.type.contentMatch, i;
        return (i = r.findWrapping(e.type)) ? (this.match = r, i) : null;
      }
    }
    return this.match.findWrapping(e.type);
  }
  finish(e) {
    if (!(this.options & wi)) {
      let r = this.content[this.content.length - 1], i;
      if (r && r.isText && (i = /[ \t\r\n\u000c]+$/.exec(r.text))) {
        let o = r;
        r.text.length == i[0].length ? this.content.pop() : this.content[this.content.length - 1] = o.withText(o.text.slice(0, o.text.length - i[0].length));
      }
    }
    let t = C.from(this.content);
    return !e && this.match && (t = t.append(this.match.fillBefore(C.empty, !0))), this.type ? this.type.create(this.attrs, t, this.marks) : t;
  }
  inlineContext(e) {
    return this.type ? this.type.inlineContent : this.content.length ? this.content[0].isInline : e.parentNode && !Xf.hasOwnProperty(e.parentNode.nodeName.toLowerCase());
  }
}
class _c {
  constructor(e, t, r) {
    this.parser = e, this.options = t, this.isOpen = r, this.open = 0, this.localPreserveWS = !1;
    let i = t.topNode, o, s = Bc(null, t.preserveWhitespace, 0) | (r ? li : 0);
    i ? o = new io(i.type, i.attrs, oe.none, !0, t.topMatch || i.type.contentMatch, s) : r ? o = new io(null, null, oe.none, !0, null, s) : o = new io(e.schema.topNodeType, null, oe.none, !0, null, s), this.nodes = [o], this.find = t.findPositions, this.needsBlock = !1;
  }
  get top() {
    return this.nodes[this.open];
  }
  addDOM(e, t) {
    e.nodeType == 3 ? this.addTextNode(e, t) : e.nodeType == 1 && this.addElement(e, t);
  }
  addTextNode(e, t) {
    let r = e.nodeValue, i = this.top, o = i.options & ql ? "full" : this.localPreserveWS || (i.options & wi) > 0;
    if (o === "full" || i.inlineContext(e) || /[^ \t\r\n\u000c]/.test(r)) {
      if (o)
        o !== "full" ? r = r.replace(/\r?\n|\r/g, " ") : r = r.replace(/\r\n?/g, `
`);
      else if (r = r.replace(/[ \t\r\n\u000c]+/g, " "), /^[ \t\r\n\u000c]/.test(r) && this.open == this.nodes.length - 1) {
        let s = i.content[i.content.length - 1], l = e.previousSibling;
        (!s || l && l.nodeName == "BR" || s.isText && /[ \t\r\n\u000c]$/.test(s.text)) && (r = r.slice(1));
      }
      r && this.insertNode(this.parser.schema.text(r), t, !/\S/.test(r)), this.findInText(e);
    } else
      this.findInside(e);
  }
  addElement(e, t, r) {
    let i = this.localPreserveWS, o = this.top;
    (e.tagName == "PRE" || /pre/.test(e.style && e.style.whiteSpace)) && (this.localPreserveWS = !0);
    let s = e.nodeName.toLowerCase(), l;
    Qf.hasOwnProperty(s) && this.parser.normalizeLists && Pm(e);
    let a = this.options.ruleFromNode && this.options.ruleFromNode(e) || (l = this.parser.matchTag(e, this, r));
    e:
      if (a ? a.ignore : Rm.hasOwnProperty(s))
        this.findInside(e), this.ignoreFallback(e, t);
      else if (!a || a.skip || a.closeParent) {
        a && a.closeParent ? this.open = Math.max(0, this.open - 1) : a && a.skip.nodeType && (e = a.skip);
        let c, u = this.needsBlock;
        if (Xf.hasOwnProperty(s))
          o.content.length && o.content[0].isInline && this.open && (this.open--, o = this.top), c = !0, o.type || (this.needsBlock = !0);
        else if (!e.firstChild) {
          this.leafFallback(e, t);
          break e;
        }
        let f = a && a.skip ? t : this.readStyles(e, t);
        f && this.addAll(e, f), c && this.sync(o), this.needsBlock = u;
      } else {
        let c = this.readStyles(e, t);
        c && this.addElementByRule(e, a, c, a.consuming === !1 ? l : void 0);
      }
    this.localPreserveWS = i;
  }
  leafFallback(e, t) {
    e.nodeName == "BR" && this.top.type && this.top.type.inlineContent && this.addTextNode(e.ownerDocument.createTextNode(`
`), t);
  }
  ignoreFallback(e, t) {
    e.nodeName == "BR" && (!this.top.type || !this.top.type.inlineContent) && this.findPlace(this.parser.schema.text("-"), t, !0);
  }
  readStyles(e, t) {
    let r = e.style;
    if (r && r.length)
      for (let i = 0; i < this.parser.matchedStyles.length; i++) {
        let o = this.parser.matchedStyles[i], s = r.getPropertyValue(o);
        if (s)
          for (let l = void 0; ; ) {
            let a = this.parser.matchStyle(o, s, this, l);
            if (!a)
              break;
            if (a.ignore)
              return null;
            if (a.clearMark ? t = t.filter((c) => !a.clearMark(c)) : t = t.concat(this.parser.schema.marks[a.mark].create(a.attrs)), a.consuming === !1)
              l = a;
            else
              break;
          }
      }
    return t;
  }
  addElementByRule(e, t, r, i) {
    let o, s;
    if (t.node)
      if (s = this.parser.schema.nodes[t.node], s.isLeaf)
        this.insertNode(s.create(t.attrs), r, e.nodeName == "BR") || this.leafFallback(e, r);
      else {
        let a = this.enter(s, t.attrs || null, r, t.preserveWhitespace);
        a && (o = !0, r = a);
      }
    else {
      let a = this.parser.schema.marks[t.mark];
      r = r.concat(a.create(t.attrs));
    }
    let l = this.top;
    if (s && s.isLeaf)
      this.findInside(e);
    else if (i)
      this.addElement(e, r, i);
    else if (t.getContent)
      this.findInside(e), t.getContent(e, this.parser.schema).forEach((a) => this.insertNode(a, r, !1));
    else {
      let a = e;
      typeof t.contentElement == "string" ? a = e.querySelector(t.contentElement) : typeof t.contentElement == "function" ? a = t.contentElement(e) : t.contentElement && (a = t.contentElement), this.findAround(e, a, !0), this.addAll(a, r), this.findAround(e, a, !1);
    }
    o && this.sync(l) && this.open--;
  }
  addAll(e, t, r, i) {
    let o = r || 0;
    for (let s = r ? e.childNodes[r] : e.firstChild, l = i == null ? null : e.childNodes[i]; s != l; s = s.nextSibling, ++o)
      this.findAtPoint(e, o), this.addDOM(s, t);
    this.findAtPoint(e, o);
  }
  findPlace(e, t, r) {
    let i, o;
    for (let s = this.open, l = 0; s >= 0; s--) {
      let a = this.nodes[s], c = a.findWrapping(e);
      if (c && (!i || i.length > c.length + l) && (i = c, o = a, !c.length))
        break;
      if (a.solid) {
        if (r)
          break;
        l += 2;
      }
    }
    if (!i)
      return null;
    this.sync(o);
    for (let s = 0; s < i.length; s++)
      t = this.enterInner(i[s], null, t, !1);
    return t;
  }
  insertNode(e, t, r) {
    if (e.isInline && this.needsBlock && !this.top.type) {
      let o = this.textblockFromContext();
      o && (t = this.enterInner(o, null, t));
    }
    let i = this.findPlace(e, t, r);
    if (i) {
      this.closeExtra();
      let o = this.top;
      o.match && (o.match = o.match.matchType(e.type));
      let s = oe.none;
      for (let l of i.concat(e.marks))
        (o.type ? o.type.allowsMarkType(l.type) : $c(l.type, e.type)) && (s = l.addToSet(s));
      return o.content.push(e.mark(s)), !0;
    }
    return !1;
  }
  enter(e, t, r, i) {
    let o = this.findPlace(e.create(t), r, !1);
    return o && (o = this.enterInner(e, t, r, !0, i)), o;
  }
  enterInner(e, t, r, i = !1, o) {
    this.closeExtra();
    let s = this.top;
    s.match = s.match && s.match.matchType(e);
    let l = Bc(e, o, s.options);
    s.options & li && s.content.length == 0 && (l |= li);
    let a = oe.none;
    return r = r.filter((c) => (s.type ? s.type.allowsMarkType(c.type) : $c(c.type, e)) ? (a = c.addToSet(a), !1) : !0), this.nodes.push(new io(e, t, a, i, null, l)), this.open++, r;
  }
  closeExtra(e = !1) {
    let t = this.nodes.length - 1;
    if (t > this.open) {
      for (; t > this.open; t--)
        this.nodes[t - 1].content.push(this.nodes[t].finish(e));
      this.nodes.length = this.open + 1;
    }
  }
  finish() {
    return this.open = 0, this.closeExtra(this.isOpen), this.nodes[0].finish(!!(this.isOpen || this.options.topOpen));
  }
  sync(e) {
    for (let t = this.open; t >= 0; t--) {
      if (this.nodes[t] == e)
        return this.open = t, !0;
      this.localPreserveWS && (this.nodes[t].options |= wi);
    }
    return !1;
  }
  get currentPos() {
    this.closeExtra();
    let e = 0;
    for (let t = this.open; t >= 0; t--) {
      let r = this.nodes[t].content;
      for (let i = r.length - 1; i >= 0; i--)
        e += r[i].nodeSize;
      t && e++;
    }
    return e;
  }
  findAtPoint(e, t) {
    if (this.find)
      for (let r = 0; r < this.find.length; r++)
        this.find[r].node == e && this.find[r].offset == t && (this.find[r].pos = this.currentPos);
  }
  findInside(e) {
    if (this.find)
      for (let t = 0; t < this.find.length; t++)
        this.find[t].pos == null && e.nodeType == 1 && e.contains(this.find[t].node) && (this.find[t].pos = this.currentPos);
  }
  findAround(e, t, r) {
    if (e != t && this.find)
      for (let i = 0; i < this.find.length; i++)
        this.find[i].pos == null && e.nodeType == 1 && e.contains(this.find[i].node) && t.compareDocumentPosition(this.find[i].node) & (r ? 2 : 4) && (this.find[i].pos = this.currentPos);
  }
  findInText(e) {
    if (this.find)
      for (let t = 0; t < this.find.length; t++)
        this.find[t].node == e && (this.find[t].pos = this.currentPos - (e.nodeValue.length - this.find[t].offset));
  }
  matchesContext(e) {
    if (e.indexOf("|") > -1)
      return e.split(/\s*\|\s*/).some(this.matchesContext, this);
    let t = e.split("/"), r = this.options.context, i = !this.isOpen && (!r || r.parent.type == this.nodes[0].type), o = -(r ? r.depth + 1 : 0) + (i ? 0 : 1), s = (l, a) => {
      for (; l >= 0; l--) {
        let c = t[l];
        if (c == "") {
          if (l == t.length - 1 || l == 0)
            continue;
          for (; a >= o; a--)
            if (s(l - 1, a))
              return !0;
          return !1;
        } else {
          let u = a > 0 || a == 0 && i ? this.nodes[a].type : r && a >= o ? r.node(a - o).type : null;
          if (!u || u.name != c && !u.isInGroup(c))
            return !1;
          a--;
        }
      }
      return !0;
    };
    return s(t.length - 1, this.open);
  }
  textblockFromContext() {
    let e = this.options.context;
    if (e)
      for (let t = e.depth; t >= 0; t--) {
        let r = e.node(t).contentMatchAt(e.indexAfter(t)).defaultType;
        if (r && r.isTextblock && r.defaultAttrs)
          return r;
      }
    for (let t in this.parser.schema.nodes) {
      let r = this.parser.schema.nodes[t];
      if (r.isTextblock && r.defaultAttrs)
        return r;
    }
  }
}
function Pm(n) {
  for (let e = n.firstChild, t = null; e; e = e.nextSibling) {
    let r = e.nodeType == 1 ? e.nodeName.toLowerCase() : null;
    r && Qf.hasOwnProperty(r) && t ? (t.appendChild(e), e = t) : r == "li" ? t = e : r && (t = null);
  }
}
function Lm(n, e) {
  return (n.matches || n.msMatchesSelector || n.webkitMatchesSelector || n.mozMatchesSelector).call(n, e);
}
function Fc(n) {
  let e = {};
  for (let t in n)
    e[t] = n[t];
  return e;
}
function $c(n, e) {
  let t = e.schema.nodes;
  for (let r in t) {
    let i = t[r];
    if (!i.allowsMarkType(n))
      continue;
    let o = [], s = (l) => {
      o.push(l);
      for (let a = 0; a < l.edgeCount; a++) {
        let { type: c, next: u } = l.edge(a);
        if (c == e || o.indexOf(u) < 0 && s(u))
          return !0;
      }
    };
    if (s(i.contentMatch))
      return !0;
  }
}
class Zn {
  constructor(e, t) {
    this.nodes = e, this.marks = t;
  }
  serializeFragment(e, t = {}, r) {
    r || (r = al(t).createDocumentFragment());
    let i = r, o = [];
    return e.forEach((s) => {
      if (o.length || s.marks.length) {
        let l = 0, a = 0;
        for (; l < o.length && a < s.marks.length; ) {
          let c = s.marks[a];
          if (!this.marks[c.type.name]) {
            a++;
            continue;
          }
          if (!c.eq(o[l][0]) || c.type.spec.spanning === !1)
            break;
          l++, a++;
        }
        for (; l < o.length; )
          i = o.pop()[1];
        for (; a < s.marks.length; ) {
          let c = s.marks[a++], u = this.serializeMark(c, s.isInline, t);
          u && (o.push([c, i]), i.appendChild(u.dom), i = u.contentDOM || u.dom);
        }
      }
      i.appendChild(this.serializeNodeInner(s, t));
    }), r;
  }
  serializeNodeInner(e, t) {
    let { dom: r, contentDOM: i } = xo(al(t), this.nodes[e.type.name](e), null, e.attrs);
    if (i) {
      if (e.isLeaf)
        throw new RangeError("Content hole not allowed in a leaf node spec");
      this.serializeFragment(e.content, t, i);
    }
    return r;
  }
  serializeNode(e, t = {}) {
    let r = this.serializeNodeInner(e, t);
    for (let i = e.marks.length - 1; i >= 0; i--) {
      let o = this.serializeMark(e.marks[i], e.isInline, t);
      o && ((o.contentDOM || o.dom).appendChild(r), r = o.dom);
    }
    return r;
  }
  serializeMark(e, t, r = {}) {
    let i = this.marks[e.type.name];
    return i && xo(al(r), i(e, t), null, e.attrs);
  }
  static renderSpec(e, t, r = null, i) {
    return xo(e, t, r, i);
  }
  static fromSchema(e) {
    return e.cached.domSerializer || (e.cached.domSerializer = new Zn(this.nodesFromSchema(e), this.marksFromSchema(e)));
  }
  static nodesFromSchema(e) {
    let t = zc(e.nodes);
    return t.text || (t.text = (r) => r.text), t;
  }
  static marksFromSchema(e) {
    return zc(e.marks);
  }
}
function zc(n) {
  let e = {};
  for (let t in n) {
    let r = n[t].spec.toDOM;
    r && (e[t] = r);
  }
  return e;
}
function al(n) {
  return n.document || window.document;
}
const Hc = /* @__PURE__ */ new WeakMap();
function Bm(n) {
  let e = Hc.get(n);
  return e === void 0 && Hc.set(n, e = _m(n)), e;
}
function _m(n) {
  let e = null;
  function t(r) {
    if (r && typeof r == "object")
      if (Array.isArray(r))
        if (typeof r[0] == "string")
          e || (e = []), e.push(r);
        else
          for (let i = 0; i < r.length; i++)
            t(r[i]);
      else
        for (let i in r)
          t(r[i]);
  }
  return t(n), e;
}
function xo(n, e, t, r) {
  if (typeof e == "string")
    return { dom: n.createTextNode(e) };
  if (e.nodeType != null)
    return { dom: e };
  if (e.dom && e.dom.nodeType != null)
    return e;
  let i = e[0], o;
  if (typeof i != "string")
    throw new RangeError("Invalid array passed to renderSpec");
  if (r && (o = Bm(r)) && o.indexOf(e) > -1)
    throw new RangeError("Using an array from an attribute object as a DOM spec. This may be an attempted cross site scripting attack.");
  let s = i.indexOf(" ");
  s > 0 && (t = i.slice(0, s), i = i.slice(s + 1));
  let l, a = t ? n.createElementNS(t, i) : n.createElement(i), c = e[1], u = 1;
  if (c && typeof c == "object" && c.nodeType == null && !Array.isArray(c)) {
    u = 2;
    for (let f in c)
      if (c[f] != null) {
        let d = f.indexOf(" ");
        d > 0 ? a.setAttributeNS(f.slice(0, d), f.slice(d + 1), c[f]) : a.setAttribute(f, c[f]);
      }
  }
  for (let f = u; f < e.length; f++) {
    let d = e[f];
    if (d === 0) {
      if (f < e.length - 1 || f > u)
        throw new RangeError("Content hole must be the only child of its parent node");
      return { dom: a, contentDOM: a };
    } else {
      let { dom: h, contentDOM: p } = xo(n, d, t, r);
      if (a.appendChild(h), p) {
        if (l)
          throw new RangeError("Multiple content holes");
        l = p;
      }
    }
  }
  return { dom: a, contentDOM: l };
}
const Zf = 65535, ed = Math.pow(2, 16);
function Fm(n, e) {
  return n + e * ed;
}
function Vc(n) {
  return n & Zf;
}
function $m(n) {
  return (n - (n & Zf)) / ed;
}
const td = 1, nd = 2, So = 4, rd = 8;
class Jl {
  constructor(e, t, r) {
    this.pos = e, this.delInfo = t, this.recover = r;
  }
  get deleted() {
    return (this.delInfo & rd) > 0;
  }
  get deletedBefore() {
    return (this.delInfo & (td | So)) > 0;
  }
  get deletedAfter() {
    return (this.delInfo & (nd | So)) > 0;
  }
  get deletedAcross() {
    return (this.delInfo & So) > 0;
  }
}
class tt {
  constructor(e, t = !1) {
    if (this.ranges = e, this.inverted = t, !e.length && tt.empty)
      return tt.empty;
  }
  recover(e) {
    let t = 0, r = Vc(e);
    if (!this.inverted)
      for (let i = 0; i < r; i++)
        t += this.ranges[i * 3 + 2] - this.ranges[i * 3 + 1];
    return this.ranges[r * 3] + t + $m(e);
  }
  mapResult(e, t = 1) {
    return this._map(e, t, !1);
  }
  map(e, t = 1) {
    return this._map(e, t, !0);
  }
  _map(e, t, r) {
    let i = 0, o = this.inverted ? 2 : 1, s = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? i : 0);
      if (a > e)
        break;
      let c = this.ranges[l + o], u = this.ranges[l + s], f = a + c;
      if (e <= f) {
        let d = c ? e == a ? -1 : e == f ? 1 : t : t, h = a + i + (d < 0 ? 0 : u);
        if (r)
          return h;
        let p = e == (t < 0 ? a : f) ? null : Fm(l / 3, e - a), m = e == a ? nd : e == f ? td : So;
        return (t < 0 ? e != a : e != f) && (m |= rd), new Jl(h, m, p);
      }
      i += u - c;
    }
    return r ? e + i : new Jl(e + i, 0, null);
  }
  touches(e, t) {
    let r = 0, i = Vc(t), o = this.inverted ? 2 : 1, s = this.inverted ? 1 : 2;
    for (let l = 0; l < this.ranges.length; l += 3) {
      let a = this.ranges[l] - (this.inverted ? r : 0);
      if (a > e)
        break;
      let c = this.ranges[l + o], u = a + c;
      if (e <= u && l == i * 3)
        return !0;
      r += this.ranges[l + s] - c;
    }
    return !1;
  }
  forEach(e) {
    let t = this.inverted ? 2 : 1, r = this.inverted ? 1 : 2;
    for (let i = 0, o = 0; i < this.ranges.length; i += 3) {
      let s = this.ranges[i], l = s - (this.inverted ? o : 0), a = s + (this.inverted ? 0 : o), c = this.ranges[i + t], u = this.ranges[i + r];
      e(l, l + c, a, a + u), o += u - c;
    }
  }
  invert() {
    return new tt(this.ranges, !this.inverted);
  }
  toString() {
    return (this.inverted ? "-" : "") + JSON.stringify(this.ranges);
  }
  static offset(e) {
    return e == 0 ? tt.empty : new tt(e < 0 ? [0, -e, 0] : [0, 0, e]);
  }
}
tt.empty = new tt([]);
class ki {
  constructor(e, t, r = 0, i = e ? e.length : 0) {
    this.mirror = t, this.from = r, this.to = i, this._maps = e || [], this.ownData = !(e || t);
  }
  get maps() {
    return this._maps;
  }
  slice(e = 0, t = this.maps.length) {
    return new ki(this._maps, this.mirror, e, t);
  }
  appendMap(e, t) {
    this.ownData || (this._maps = this._maps.slice(), this.mirror = this.mirror && this.mirror.slice(), this.ownData = !0), this.to = this._maps.push(e), t != null && this.setMirror(this._maps.length - 1, t);
  }
  appendMapping(e) {
    for (let t = 0, r = this._maps.length; t < e._maps.length; t++) {
      let i = e.getMirror(t);
      this.appendMap(e._maps[t], i != null && i < t ? r + i : void 0);
    }
  }
  getMirror(e) {
    if (this.mirror) {
      for (let t = 0; t < this.mirror.length; t++)
        if (this.mirror[t] == e)
          return this.mirror[t + (t % 2 ? -1 : 1)];
    }
  }
  setMirror(e, t) {
    this.mirror || (this.mirror = []), this.mirror.push(e, t);
  }
  appendMappingInverted(e) {
    for (let t = e.maps.length - 1, r = this._maps.length + e._maps.length; t >= 0; t--) {
      let i = e.getMirror(t);
      this.appendMap(e._maps[t].invert(), i != null && i > t ? r - i - 1 : void 0);
    }
  }
  invert() {
    let e = new ki();
    return e.appendMappingInverted(this), e;
  }
  map(e, t = 1) {
    if (this.mirror)
      return this._map(e, t, !0);
    for (let r = this.from; r < this.to; r++)
      e = this._maps[r].map(e, t);
    return e;
  }
  mapResult(e, t = 1) {
    return this._map(e, t, !1);
  }
  _map(e, t, r) {
    let i = 0;
    for (let o = this.from; o < this.to; o++) {
      let s = this._maps[o], l = s.mapResult(e, t);
      if (l.recover != null) {
        let a = this.getMirror(o);
        if (a != null && a > o && a < this.to) {
          o = a, e = this._maps[a].recover(l.recover);
          continue;
        }
      }
      i |= l.delInfo, e = l.pos;
    }
    return r ? e : new Jl(e, i, null);
  }
}
const cl = /* @__PURE__ */ Object.create(null);
class Re {
  getMap() {
    return tt.empty;
  }
  merge(e) {
    return null;
  }
  static fromJSON(e, t) {
    if (!t || !t.stepType)
      throw new RangeError("Invalid input for Step.fromJSON");
    let r = cl[t.stepType];
    if (!r)
      throw new RangeError(`No step type ${t.stepType} defined`);
    return r.fromJSON(e, t);
  }
  static jsonID(e, t) {
    if (e in cl)
      throw new RangeError("Duplicate use of step JSON ID " + e);
    return cl[e] = t, t.prototype.jsonID = e, t;
  }
}
class ge {
  constructor(e, t) {
    this.doc = e, this.failed = t;
  }
  static ok(e) {
    return new ge(e, null);
  }
  static fail(e) {
    return new ge(null, e);
  }
  static fromReplace(e, t, r, i) {
    try {
      return ge.ok(e.replace(t, r, i));
    } catch (o) {
      if (o instanceof Bo)
        return ge.fail(o.message);
      throw o;
    }
  }
}
function Pa(n, e, t) {
  let r = [];
  for (let i = 0; i < n.childCount; i++) {
    let o = n.child(i);
    o.content.size && (o = o.copy(Pa(o.content, e, o))), o.isInline && (o = e(o, t, i)), r.push(o);
  }
  return C.fromArray(r);
}
class mn extends Re {
  constructor(e, t, r) {
    super(), this.from = e, this.to = t, this.mark = r;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), r = e.resolve(this.from), i = r.node(r.sharedDepth(this.to)), o = new R(Pa(t.content, (s, l) => !s.isAtom || !l.type.allowsMarkType(this.mark.type) ? s : s.mark(this.mark.addToSet(s.marks)), i), t.openStart, t.openEnd);
    return ge.fromReplace(e, this.from, this.to, o);
  }
  invert() {
    return new Mt(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deleted && r.deleted || t.pos >= r.pos ? null : new mn(t.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof mn && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new mn(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "addMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for AddMarkStep.fromJSON");
    return new mn(t.from, t.to, e.markFromJSON(t.mark));
  }
}
Re.jsonID("addMark", mn);
class Mt extends Re {
  constructor(e, t, r) {
    super(), this.from = e, this.to = t, this.mark = r;
  }
  apply(e) {
    let t = e.slice(this.from, this.to), r = new R(Pa(t.content, (i) => i.mark(this.mark.removeFromSet(i.marks)), e), t.openStart, t.openEnd);
    return ge.fromReplace(e, this.from, this.to, r);
  }
  invert() {
    return new mn(this.from, this.to, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deleted && r.deleted || t.pos >= r.pos ? null : new Mt(t.pos, r.pos, this.mark);
  }
  merge(e) {
    return e instanceof Mt && e.mark.eq(this.mark) && this.from <= e.to && this.to >= e.from ? new Mt(Math.min(this.from, e.from), Math.max(this.to, e.to), this.mark) : null;
  }
  toJSON() {
    return {
      stepType: "removeMark",
      mark: this.mark.toJSON(),
      from: this.from,
      to: this.to
    };
  }
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for RemoveMarkStep.fromJSON");
    return new Mt(t.from, t.to, e.markFromJSON(t.mark));
  }
}
Re.jsonID("removeMark", Mt);
class gn extends Re {
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return ge.fail("No node at mark step's position");
    let r = t.type.create(t.attrs, null, this.mark.addToSet(t.marks));
    return ge.fromReplace(e, this.pos, this.pos + 1, new R(C.from(r), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    if (t) {
      let r = this.mark.addToSet(t.marks);
      if (r.length == t.marks.length) {
        for (let i = 0; i < t.marks.length; i++)
          if (!t.marks[i].isInSet(r))
            return new gn(this.pos, t.marks[i]);
        return new gn(this.pos, this.mark);
      }
    }
    return new Jn(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new gn(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "addNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for AddNodeMarkStep.fromJSON");
    return new gn(t.pos, e.markFromJSON(t.mark));
  }
}
Re.jsonID("addNodeMark", gn);
class Jn extends Re {
  constructor(e, t) {
    super(), this.pos = e, this.mark = t;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return ge.fail("No node at mark step's position");
    let r = t.type.create(t.attrs, null, this.mark.removeFromSet(t.marks));
    return ge.fromReplace(e, this.pos, this.pos + 1, new R(C.from(r), 0, t.isLeaf ? 0 : 1));
  }
  invert(e) {
    let t = e.nodeAt(this.pos);
    return !t || !this.mark.isInSet(t.marks) ? this : new gn(this.pos, this.mark);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new Jn(t.pos, this.mark);
  }
  toJSON() {
    return { stepType: "removeNodeMark", pos: this.pos, mark: this.mark.toJSON() };
  }
  static fromJSON(e, t) {
    if (typeof t.pos != "number")
      throw new RangeError("Invalid input for RemoveNodeMarkStep.fromJSON");
    return new Jn(t.pos, e.markFromJSON(t.mark));
  }
}
Re.jsonID("removeNodeMark", Jn);
class be extends Re {
  constructor(e, t, r, i = !1) {
    super(), this.from = e, this.to = t, this.slice = r, this.structure = i;
  }
  apply(e) {
    return this.structure && Gl(e, this.from, this.to) ? ge.fail("Structure replace would overwrite content") : ge.fromReplace(e, this.from, this.to, this.slice);
  }
  getMap() {
    return new tt([this.from, this.to - this.from, this.slice.size]);
  }
  invert(e) {
    return new be(this.from, this.from + this.slice.size, e.slice(this.from, this.to));
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1);
    return t.deletedAcross && r.deletedAcross ? null : new be(t.pos, Math.max(t.pos, r.pos), this.slice, this.structure);
  }
  merge(e) {
    if (!(e instanceof be) || e.structure || this.structure)
      return null;
    if (this.from + this.slice.size == e.from && !this.slice.openEnd && !e.slice.openStart) {
      let t = this.slice.size + e.slice.size == 0 ? R.empty : new R(this.slice.content.append(e.slice.content), this.slice.openStart, e.slice.openEnd);
      return new be(this.from, this.to + (e.to - e.from), t, this.structure);
    } else if (e.to == this.from && !this.slice.openStart && !e.slice.openEnd) {
      let t = this.slice.size + e.slice.size == 0 ? R.empty : new R(e.slice.content.append(this.slice.content), e.slice.openStart, this.slice.openEnd);
      return new be(e.from, this.to, t, this.structure);
    } else
      return null;
  }
  toJSON() {
    let e = { stepType: "replace", from: this.from, to: this.to };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number")
      throw new RangeError("Invalid input for ReplaceStep.fromJSON");
    return new be(t.from, t.to, R.fromJSON(e, t.slice), !!t.structure);
  }
}
Re.jsonID("replace", be);
class we extends Re {
  constructor(e, t, r, i, o, s, l = !1) {
    super(), this.from = e, this.to = t, this.gapFrom = r, this.gapTo = i, this.slice = o, this.insert = s, this.structure = l;
  }
  apply(e) {
    if (this.structure && (Gl(e, this.from, this.gapFrom) || Gl(e, this.gapTo, this.to)))
      return ge.fail("Structure gap-replace would overwrite content");
    let t = e.slice(this.gapFrom, this.gapTo);
    if (t.openStart || t.openEnd)
      return ge.fail("Gap is not a flat range");
    let r = this.slice.insertAt(this.insert, t.content);
    return r ? ge.fromReplace(e, this.from, this.to, r) : ge.fail("Content does not fit in gap");
  }
  getMap() {
    return new tt([
      this.from,
      this.gapFrom - this.from,
      this.insert,
      this.gapTo,
      this.to - this.gapTo,
      this.slice.size - this.insert
    ]);
  }
  invert(e) {
    let t = this.gapTo - this.gapFrom;
    return new we(this.from, this.from + this.slice.size + t, this.from + this.insert, this.from + this.insert + t, e.slice(this.from, this.to).removeBetween(this.gapFrom - this.from, this.gapTo - this.from), this.gapFrom - this.from, this.structure);
  }
  map(e) {
    let t = e.mapResult(this.from, 1), r = e.mapResult(this.to, -1), i = this.from == this.gapFrom ? t.pos : e.map(this.gapFrom, -1), o = this.to == this.gapTo ? r.pos : e.map(this.gapTo, 1);
    return t.deletedAcross && r.deletedAcross || i < t.pos || o > r.pos ? null : new we(t.pos, r.pos, i, o, this.slice, this.insert, this.structure);
  }
  toJSON() {
    let e = {
      stepType: "replaceAround",
      from: this.from,
      to: this.to,
      gapFrom: this.gapFrom,
      gapTo: this.gapTo,
      insert: this.insert
    };
    return this.slice.size && (e.slice = this.slice.toJSON()), this.structure && (e.structure = !0), e;
  }
  static fromJSON(e, t) {
    if (typeof t.from != "number" || typeof t.to != "number" || typeof t.gapFrom != "number" || typeof t.gapTo != "number" || typeof t.insert != "number")
      throw new RangeError("Invalid input for ReplaceAroundStep.fromJSON");
    return new we(t.from, t.to, t.gapFrom, t.gapTo, R.fromJSON(e, t.slice), t.insert, !!t.structure);
  }
}
Re.jsonID("replaceAround", we);
function Gl(n, e, t) {
  let r = n.resolve(e), i = t - e, o = r.depth;
  for (; i > 0 && o > 0 && r.indexAfter(o) == r.node(o).childCount; )
    o--, i--;
  if (i > 0) {
    let s = r.node(o).maybeChild(r.indexAfter(o));
    for (; i > 0; ) {
      if (!s || s.isLeaf)
        return !0;
      s = s.firstChild, i--;
    }
  }
  return !1;
}
function zm(n, e, t, r) {
  let i = [], o = [], s, l;
  n.doc.nodesBetween(e, t, (a, c, u) => {
    if (!a.isInline)
      return;
    let f = a.marks;
    if (!r.isInSet(f) && u.type.allowsMarkType(r.type)) {
      let d = Math.max(c, e), h = Math.min(c + a.nodeSize, t), p = r.addToSet(f);
      for (let m = 0; m < f.length; m++)
        f[m].isInSet(p) || (s && s.to == d && s.mark.eq(f[m]) ? s.to = h : i.push(s = new Mt(d, h, f[m])));
      l && l.to == d ? l.to = h : o.push(l = new mn(d, h, r));
    }
  }), i.forEach((a) => n.step(a)), o.forEach((a) => n.step(a));
}
function Hm(n, e, t, r) {
  let i = [], o = 0;
  n.doc.nodesBetween(e, t, (s, l) => {
    if (!s.isInline)
      return;
    o++;
    let a = null;
    if (r instanceof Is) {
      let c = s.marks, u;
      for (; u = r.isInSet(c); )
        (a || (a = [])).push(u), c = u.removeFromSet(c);
    } else
      r ? r.isInSet(s.marks) && (a = [r]) : a = s.marks;
    if (a && a.length) {
      let c = Math.min(l + s.nodeSize, t);
      for (let u = 0; u < a.length; u++) {
        let f = a[u], d;
        for (let h = 0; h < i.length; h++) {
          let p = i[h];
          p.step == o - 1 && f.eq(i[h].style) && (d = p);
        }
        d ? (d.to = c, d.step = o) : i.push({ style: f, from: Math.max(l, e), to: c, step: o });
      }
    }
  }), i.forEach((s) => n.step(new Mt(s.from, s.to, s.style)));
}
function La(n, e, t, r = t.contentMatch, i = !0) {
  let o = n.doc.nodeAt(e), s = [], l = e + 1;
  for (let a = 0; a < o.childCount; a++) {
    let c = o.child(a), u = l + c.nodeSize, f = r.matchType(c.type);
    if (!f)
      s.push(new be(l, u, R.empty));
    else {
      r = f;
      for (let d = 0; d < c.marks.length; d++)
        t.allowsMarkType(c.marks[d].type) || n.step(new Mt(l, u, c.marks[d]));
      if (i && c.isText && t.whitespace != "pre") {
        let d, h = /\r?\n|\r/g, p;
        for (; d = h.exec(c.text); )
          p || (p = new R(C.from(t.schema.text(" ", t.allowedMarks(c.marks))), 0, 0)), s.push(new be(l + d.index, l + d.index + d[0].length, p));
      }
    }
    l = u;
  }
  if (!r.validEnd) {
    let a = r.fillBefore(C.empty, !0);
    n.replace(l, l, new R(a, 0, 0));
  }
  for (let a = s.length - 1; a >= 0; a--)
    n.step(s[a]);
}
function Vm(n, e, t) {
  return (e == 0 || n.canReplace(e, n.childCount)) && (t == n.childCount || n.canReplace(0, t));
}
function _r(n) {
  let t = n.parent.content.cutByIndex(n.startIndex, n.endIndex);
  for (let r = n.depth; ; --r) {
    let i = n.$from.node(r), o = n.$from.index(r), s = n.$to.indexAfter(r);
    if (r < n.depth && i.canReplace(o, s, t))
      return r;
    if (r == 0 || i.type.spec.isolating || !Vm(i, o, s))
      break;
  }
  return null;
}
function jm(n, e, t) {
  let { $from: r, $to: i, depth: o } = e, s = r.before(o + 1), l = i.after(o + 1), a = s, c = l, u = C.empty, f = 0;
  for (let p = o, m = !1; p > t; p--)
    m || r.index(p) > 0 ? (m = !0, u = C.from(r.node(p).copy(u)), f++) : a--;
  let d = C.empty, h = 0;
  for (let p = o, m = !1; p > t; p--)
    m || i.after(p + 1) < i.end(p) ? (m = !0, d = C.from(i.node(p).copy(d)), h++) : c++;
  n.step(new we(a, c, s, l, new R(u.append(d), f, h), u.size - f, !0));
}
function id(n, e, t = null, r = n) {
  let i = Wm(n, e), o = i && Um(r, e);
  return o ? i.map(jc).concat({ type: e, attrs: t }).concat(o.map(jc)) : null;
}
function jc(n) {
  return { type: n, attrs: null };
}
function Wm(n, e) {
  let { parent: t, startIndex: r, endIndex: i } = n, o = t.contentMatchAt(r).findWrapping(e);
  if (!o)
    return null;
  let s = o.length ? o[0] : e;
  return t.canReplaceWith(r, i, s) ? o : null;
}
function Um(n, e) {
  let { parent: t, startIndex: r, endIndex: i } = n, o = t.child(r), s = e.contentMatch.findWrapping(o.type);
  if (!s)
    return null;
  let a = (s.length ? s[s.length - 1] : e).contentMatch;
  for (let c = r; a && c < i; c++)
    a = a.matchType(t.child(c).type);
  return !a || !a.validEnd ? null : s;
}
function Km(n, e, t) {
  let r = C.empty;
  for (let s = t.length - 1; s >= 0; s--) {
    if (r.size) {
      let l = t[s].type.contentMatch.matchFragment(r);
      if (!l || !l.validEnd)
        throw new RangeError("Wrapper type given to Transform.wrap does not form valid content of its parent wrapper");
    }
    r = C.from(t[s].type.create(t[s].attrs, r));
  }
  let i = e.start, o = e.end;
  n.step(new we(i, o, i, o, new R(r, 0, 0), t.length, !0));
}
function qm(n, e, t, r, i) {
  if (!r.isTextblock)
    throw new RangeError("Type given to setBlockType should be a textblock");
  let o = n.steps.length;
  n.doc.nodesBetween(e, t, (s, l) => {
    let a = typeof i == "function" ? i(s) : i;
    if (s.isTextblock && !s.hasMarkup(r, a) && Jm(n.doc, n.mapping.slice(o).map(l), r)) {
      let c = null;
      if (r.schema.linebreakReplacement) {
        let h = r.whitespace == "pre", p = !!r.contentMatch.matchType(r.schema.linebreakReplacement);
        h && !p ? c = !1 : !h && p && (c = !0);
      }
      c === !1 && sd(n, s, l, o), La(n, n.mapping.slice(o).map(l, 1), r, void 0, c === null);
      let u = n.mapping.slice(o), f = u.map(l, 1), d = u.map(l + s.nodeSize, 1);
      return n.step(new we(f, d, f + 1, d - 1, new R(C.from(r.create(a, null, s.marks)), 0, 0), 1, !0)), c === !0 && od(n, s, l, o), !1;
    }
  });
}
function od(n, e, t, r) {
  e.forEach((i, o) => {
    if (i.isText) {
      let s, l = /\r?\n|\r/g;
      for (; s = l.exec(i.text); ) {
        let a = n.mapping.slice(r).map(t + 1 + o + s.index);
        n.replaceWith(a, a + 1, e.type.schema.linebreakReplacement.create());
      }
    }
  });
}
function sd(n, e, t, r) {
  e.forEach((i, o) => {
    if (i.type == i.type.schema.linebreakReplacement) {
      let s = n.mapping.slice(r).map(t + 1 + o);
      n.replaceWith(s, s + 1, e.type.schema.text(`
`));
    }
  });
}
function Jm(n, e, t) {
  let r = n.resolve(e), i = r.index();
  return r.parent.canReplaceWith(i, i + 1, t);
}
function Gm(n, e, t, r, i) {
  let o = n.doc.nodeAt(e);
  if (!o)
    throw new RangeError("No node at given position");
  t || (t = o.type);
  let s = t.create(r, null, i || o.marks);
  if (o.isLeaf)
    return n.replaceWith(e, e + o.nodeSize, s);
  if (!t.validContent(o.content))
    throw new RangeError("Invalid content for node type " + t.name);
  n.step(new we(e, e + o.nodeSize, e + 1, e + o.nodeSize - 1, new R(C.from(s), 0, 0), 1, !0));
}
function wr(n, e, t = 1, r) {
  let i = n.resolve(e), o = i.depth - t, s = r && r[r.length - 1] || i.parent;
  if (o < 0 || i.parent.type.spec.isolating || !i.parent.canReplace(i.index(), i.parent.childCount) || !s.type.validContent(i.parent.content.cutByIndex(i.index(), i.parent.childCount)))
    return !1;
  for (let c = i.depth - 1, u = t - 2; c > o; c--, u--) {
    let f = i.node(c), d = i.index(c);
    if (f.type.spec.isolating)
      return !1;
    let h = f.content.cutByIndex(d, f.childCount), p = r && r[u + 1];
    p && (h = h.replaceChild(0, p.type.create(p.attrs)));
    let m = r && r[u] || f;
    if (!f.canReplace(d + 1, f.childCount) || !m.type.validContent(h))
      return !1;
  }
  let l = i.indexAfter(o), a = r && r[0];
  return i.node(o).canReplaceWith(l, l, a ? a.type : i.node(o + 1).type);
}
function Ym(n, e, t = 1, r) {
  let i = n.doc.resolve(e), o = C.empty, s = C.empty;
  for (let l = i.depth, a = i.depth - t, c = t - 1; l > a; l--, c--) {
    o = C.from(i.node(l).copy(o));
    let u = r && r[c];
    s = C.from(u ? u.type.create(u.attrs, s) : i.node(l).copy(s));
  }
  n.step(new be(e, e, new R(o.append(s), t, t), !0));
}
function er(n, e) {
  let t = n.resolve(e), r = t.index();
  return ld(t.nodeBefore, t.nodeAfter) && t.parent.canReplace(r, r + 1);
}
function Xm(n, e) {
  e.content.size || n.type.compatibleContent(e.type);
  let t = n.contentMatchAt(n.childCount), { linebreakReplacement: r } = n.type.schema;
  for (let i = 0; i < e.childCount; i++) {
    let o = e.child(i), s = o.type == r ? n.type.schema.nodes.text : o.type;
    if (t = t.matchType(s), !t || !n.type.allowsMarks(o.marks))
      return !1;
  }
  return t.validEnd;
}
function ld(n, e) {
  return !!(n && e && !n.isLeaf && Xm(n, e));
}
function Rs(n, e, t = -1) {
  let r = n.resolve(e);
  for (let i = r.depth; ; i--) {
    let o, s, l = r.index(i);
    if (i == r.depth ? (o = r.nodeBefore, s = r.nodeAfter) : t > 0 ? (o = r.node(i + 1), l++, s = r.node(i).maybeChild(l)) : (o = r.node(i).maybeChild(l - 1), s = r.node(i + 1)), o && !o.isTextblock && ld(o, s) && r.node(i).canReplace(l, l + 1))
      return e;
    if (i == 0)
      break;
    e = t < 0 ? r.before(i) : r.after(i);
  }
}
function Qm(n, e, t) {
  let r = null, { linebreakReplacement: i } = n.doc.type.schema, o = n.doc.resolve(e - t), s = o.node().type;
  if (i && s.inlineContent) {
    let u = s.whitespace == "pre", f = !!s.contentMatch.matchType(i);
    u && !f ? r = !1 : !u && f && (r = !0);
  }
  let l = n.steps.length;
  if (r === !1) {
    let u = n.doc.resolve(e + t);
    sd(n, u.node(), u.before(), l);
  }
  s.inlineContent && La(n, e + t - 1, s, o.node().contentMatchAt(o.index()), r == null);
  let a = n.mapping.slice(l), c = a.map(e - t);
  if (n.step(new be(c, a.map(e + t, -1), R.empty, !0)), r === !0) {
    let u = n.doc.resolve(c);
    od(n, u.node(), u.before(), n.steps.length);
  }
  return n;
}
function Zm(n, e, t) {
  let r = n.resolve(e);
  if (r.parent.canReplaceWith(r.index(), r.index(), t))
    return e;
  if (r.parentOffset == 0)
    for (let i = r.depth - 1; i >= 0; i--) {
      let o = r.index(i);
      if (r.node(i).canReplaceWith(o, o, t))
        return r.before(i + 1);
      if (o > 0)
        return null;
    }
  if (r.parentOffset == r.parent.content.size)
    for (let i = r.depth - 1; i >= 0; i--) {
      let o = r.indexAfter(i);
      if (r.node(i).canReplaceWith(o, o, t))
        return r.after(i + 1);
      if (o < r.node(i).childCount)
        return null;
    }
  return null;
}
function eg(n, e, t) {
  let r = n.resolve(e);
  if (!t.content.size)
    return e;
  let i = t.content;
  for (let o = 0; o < t.openStart; o++)
    i = i.firstChild.content;
  for (let o = 1; o <= (t.openStart == 0 && t.size ? 2 : 1); o++)
    for (let s = r.depth; s >= 0; s--) {
      let l = s == r.depth ? 0 : r.pos <= (r.start(s + 1) + r.end(s + 1)) / 2 ? -1 : 1, a = r.index(s) + (l > 0 ? 1 : 0), c = r.node(s), u = !1;
      if (o == 1)
        u = c.canReplace(a, a, i);
      else {
        let f = c.contentMatchAt(a).findWrapping(i.firstChild.type);
        u = f && c.canReplaceWith(a, a, f[0]);
      }
      if (u)
        return l == 0 ? r.pos : l < 0 ? r.before(s + 1) : r.after(s + 1);
    }
  return null;
}
function Ps(n, e, t = e, r = R.empty) {
  if (e == t && !r.size)
    return null;
  let i = n.resolve(e), o = n.resolve(t);
  return ad(i, o, r) ? new be(e, t, r) : new tg(i, o, r).fit();
}
function ad(n, e, t) {
  return !t.openStart && !t.openEnd && n.start() == e.start() && n.parent.canReplace(n.index(), e.index(), t.content);
}
class tg {
  constructor(e, t, r) {
    this.$from = e, this.$to = t, this.unplaced = r, this.frontier = [], this.placed = C.empty;
    for (let i = 0; i <= e.depth; i++) {
      let o = e.node(i);
      this.frontier.push({
        type: o.type,
        match: o.contentMatchAt(e.indexAfter(i))
      });
    }
    for (let i = e.depth; i > 0; i--)
      this.placed = C.from(e.node(i).copy(this.placed));
  }
  get depth() {
    return this.frontier.length - 1;
  }
  fit() {
    for (; this.unplaced.size; ) {
      let c = this.findFittable();
      c ? this.placeNodes(c) : this.openMore() || this.dropNode();
    }
    let e = this.mustMoveInline(), t = this.placed.size - this.depth - this.$from.depth, r = this.$from, i = this.close(e < 0 ? this.$to : r.doc.resolve(e));
    if (!i)
      return null;
    let o = this.placed, s = r.depth, l = i.depth;
    for (; s && l && o.childCount == 1; )
      o = o.firstChild.content, s--, l--;
    let a = new R(o, s, l);
    return e > -1 ? new we(r.pos, e, this.$to.pos, this.$to.end(), a, t) : a.size || r.pos != this.$to.pos ? new be(r.pos, i.pos, a) : null;
  }
  findFittable() {
    let e = this.unplaced.openStart;
    for (let t = this.unplaced.content, r = 0, i = this.unplaced.openEnd; r < e; r++) {
      let o = t.firstChild;
      if (t.childCount > 1 && (i = 0), o.type.spec.isolating && i <= r) {
        e = r;
        break;
      }
      t = o.content;
    }
    for (let t = 1; t <= 2; t++)
      for (let r = t == 1 ? e : this.unplaced.openStart; r >= 0; r--) {
        let i, o = null;
        r ? (o = ul(this.unplaced.content, r - 1).firstChild, i = o.content) : i = this.unplaced.content;
        let s = i.firstChild;
        for (let l = this.depth; l >= 0; l--) {
          let { type: a, match: c } = this.frontier[l], u, f = null;
          if (t == 1 && (s ? c.matchType(s.type) || (f = c.fillBefore(C.from(s), !1)) : o && a.compatibleContent(o.type)))
            return { sliceDepth: r, frontierDepth: l, parent: o, inject: f };
          if (t == 2 && s && (u = c.findWrapping(s.type)))
            return { sliceDepth: r, frontierDepth: l, parent: o, wrap: u };
          if (o && c.matchType(o.type))
            break;
        }
      }
  }
  openMore() {
    let { content: e, openStart: t, openEnd: r } = this.unplaced, i = ul(e, t);
    return !i.childCount || i.firstChild.isLeaf ? !1 : (this.unplaced = new R(e, t + 1, Math.max(r, i.size + t >= e.size - r ? t + 1 : 0)), !0);
  }
  dropNode() {
    let { content: e, openStart: t, openEnd: r } = this.unplaced, i = ul(e, t);
    if (i.childCount <= 1 && t > 0) {
      let o = e.size - t <= t + i.size;
      this.unplaced = new R(Xr(e, t - 1, 1), t - 1, o ? t - 1 : r);
    } else
      this.unplaced = new R(Xr(e, t, 1), t, r);
  }
  placeNodes({ sliceDepth: e, frontierDepth: t, parent: r, inject: i, wrap: o }) {
    for (; this.depth > t; )
      this.closeFrontierNode();
    if (o)
      for (let m = 0; m < o.length; m++)
        this.openFrontierNode(o[m]);
    let s = this.unplaced, l = r ? r.content : s.content, a = s.openStart - e, c = 0, u = [], { match: f, type: d } = this.frontier[t];
    if (i) {
      for (let m = 0; m < i.childCount; m++)
        u.push(i.child(m));
      f = f.matchFragment(i);
    }
    let h = l.size + e - (s.content.size - s.openEnd);
    for (; c < l.childCount; ) {
      let m = l.child(c), g = f.matchType(m.type);
      if (!g)
        break;
      c++, (c > 1 || a == 0 || m.content.size) && (f = g, u.push(cd(m.mark(d.allowedMarks(m.marks)), c == 1 ? a : 0, c == l.childCount ? h : -1)));
    }
    let p = c == l.childCount;
    p || (h = -1), this.placed = Qr(this.placed, t, C.from(u)), this.frontier[t].match = f, p && h < 0 && r && r.type == this.frontier[this.depth].type && this.frontier.length > 1 && this.closeFrontierNode();
    for (let m = 0, g = l; m < h; m++) {
      let v = g.lastChild;
      this.frontier.push({ type: v.type, match: v.contentMatchAt(v.childCount) }), g = v.content;
    }
    this.unplaced = p ? e == 0 ? R.empty : new R(Xr(s.content, e - 1, 1), e - 1, h < 0 ? s.openEnd : e - 1) : new R(Xr(s.content, e, c), s.openStart, s.openEnd);
  }
  mustMoveInline() {
    if (!this.$to.parent.isTextblock)
      return -1;
    let e = this.frontier[this.depth], t;
    if (!e.type.isTextblock || !fl(this.$to, this.$to.depth, e.type, e.match, !1) || this.$to.depth == this.depth && (t = this.findCloseLevel(this.$to)) && t.depth == this.depth)
      return -1;
    let { depth: r } = this.$to, i = this.$to.after(r);
    for (; r > 1 && i == this.$to.end(--r); )
      ++i;
    return i;
  }
  findCloseLevel(e) {
    e:
      for (let t = Math.min(this.depth, e.depth); t >= 0; t--) {
        let { match: r, type: i } = this.frontier[t], o = t < e.depth && e.end(t + 1) == e.pos + (e.depth - (t + 1)), s = fl(e, t, i, r, o);
        if (!!s) {
          for (let l = t - 1; l >= 0; l--) {
            let { match: a, type: c } = this.frontier[l], u = fl(e, l, c, a, !0);
            if (!u || u.childCount)
              continue e;
          }
          return { depth: t, fit: s, move: o ? e.doc.resolve(e.after(t + 1)) : e };
        }
      }
  }
  close(e) {
    let t = this.findCloseLevel(e);
    if (!t)
      return null;
    for (; this.depth > t.depth; )
      this.closeFrontierNode();
    t.fit.childCount && (this.placed = Qr(this.placed, t.depth, t.fit)), e = t.move;
    for (let r = t.depth + 1; r <= e.depth; r++) {
      let i = e.node(r), o = i.type.contentMatch.fillBefore(i.content, !0, e.index(r));
      this.openFrontierNode(i.type, i.attrs, o);
    }
    return e;
  }
  openFrontierNode(e, t = null, r) {
    let i = this.frontier[this.depth];
    i.match = i.match.matchType(e), this.placed = Qr(this.placed, this.depth, C.from(e.create(t, r))), this.frontier.push({ type: e, match: e.contentMatch });
  }
  closeFrontierNode() {
    let t = this.frontier.pop().match.fillBefore(C.empty, !0);
    t.childCount && (this.placed = Qr(this.placed, this.frontier.length, t));
  }
}
function Xr(n, e, t) {
  return e == 0 ? n.cutByIndex(t, n.childCount) : n.replaceChild(0, n.firstChild.copy(Xr(n.firstChild.content, e - 1, t)));
}
function Qr(n, e, t) {
  return e == 0 ? n.append(t) : n.replaceChild(n.childCount - 1, n.lastChild.copy(Qr(n.lastChild.content, e - 1, t)));
}
function ul(n, e) {
  for (let t = 0; t < e; t++)
    n = n.firstChild.content;
  return n;
}
function cd(n, e, t) {
  if (e <= 0)
    return n;
  let r = n.content;
  return e > 1 && (r = r.replaceChild(0, cd(r.firstChild, e - 1, r.childCount == 1 ? t - 1 : 0))), e > 0 && (r = n.type.contentMatch.fillBefore(r).append(r), t <= 0 && (r = r.append(n.type.contentMatch.matchFragment(r).fillBefore(C.empty, !0)))), n.copy(r);
}
function fl(n, e, t, r, i) {
  let o = n.node(e), s = i ? n.indexAfter(e) : n.index(e);
  if (s == o.childCount && !t.compatibleContent(o.type))
    return null;
  let l = r.fillBefore(o.content, !0, s);
  return l && !ng(t, o.content, s) ? l : null;
}
function ng(n, e, t) {
  for (let r = t; r < e.childCount; r++)
    if (!n.allowsMarks(e.child(r).marks))
      return !0;
  return !1;
}
function rg(n) {
  return n.spec.defining || n.spec.definingForContent;
}
function ig(n, e, t, r) {
  if (!r.size)
    return n.deleteRange(e, t);
  let i = n.doc.resolve(e), o = n.doc.resolve(t);
  if (ad(i, o, r))
    return n.step(new be(e, t, r));
  let s = fd(i, n.doc.resolve(t));
  s[s.length - 1] == 0 && s.pop();
  let l = -(i.depth + 1);
  s.unshift(l);
  for (let d = i.depth, h = i.pos - 1; d > 0; d--, h--) {
    let p = i.node(d).type.spec;
    if (p.defining || p.definingAsContext || p.isolating)
      break;
    s.indexOf(d) > -1 ? l = d : i.before(d) == h && s.splice(1, 0, -d);
  }
  let a = s.indexOf(l), c = [], u = r.openStart;
  for (let d = r.content, h = 0; ; h++) {
    let p = d.firstChild;
    if (c.push(p), h == r.openStart)
      break;
    d = p.content;
  }
  for (let d = u - 1; d >= 0; d--) {
    let h = c[d], p = rg(h.type);
    if (p && !h.sameMarkup(i.node(Math.abs(l) - 1)))
      u = d;
    else if (p || !h.type.isTextblock)
      break;
  }
  for (let d = r.openStart; d >= 0; d--) {
    let h = (d + u + 1) % (r.openStart + 1), p = c[h];
    if (!!p)
      for (let m = 0; m < s.length; m++) {
        let g = s[(m + a) % s.length], v = !0;
        g < 0 && (v = !1, g = -g);
        let w = i.node(g - 1), E = i.index(g - 1);
        if (w.canReplaceWith(E, E, p.type, p.marks))
          return n.replace(i.before(g), v ? o.after(g) : t, new R(ud(r.content, 0, r.openStart, h), h, r.openEnd));
      }
  }
  let f = n.steps.length;
  for (let d = s.length - 1; d >= 0 && (n.replace(e, t, r), !(n.steps.length > f)); d--) {
    let h = s[d];
    h < 0 || (e = i.before(h), t = o.after(h));
  }
}
function ud(n, e, t, r, i) {
  if (e < t) {
    let o = n.firstChild;
    n = n.replaceChild(0, o.copy(ud(o.content, e + 1, t, r, o)));
  }
  if (e > r) {
    let o = i.contentMatchAt(0), s = o.fillBefore(n).append(n);
    n = s.append(o.matchFragment(s).fillBefore(C.empty, !0));
  }
  return n;
}
function og(n, e, t, r) {
  if (!r.isInline && e == t && n.doc.resolve(e).parent.content.size) {
    let i = Zm(n.doc, e, r.type);
    i != null && (e = t = i);
  }
  n.replaceRange(e, t, new R(C.from(r), 0, 0));
}
function sg(n, e, t) {
  let r = n.doc.resolve(e), i = n.doc.resolve(t), o = fd(r, i);
  for (let s = 0; s < o.length; s++) {
    let l = o[s], a = s == o.length - 1;
    if (a && l == 0 || r.node(l).type.contentMatch.validEnd)
      return n.delete(r.start(l), i.end(l));
    if (l > 0 && (a || r.node(l - 1).canReplace(r.index(l - 1), i.indexAfter(l - 1))))
      return n.delete(r.before(l), i.after(l));
  }
  for (let s = 1; s <= r.depth && s <= i.depth; s++)
    if (e - r.start(s) == r.depth - s && t > r.end(s) && i.end(s) - t != i.depth - s && r.start(s - 1) == i.start(s - 1) && r.node(s - 1).canReplace(r.index(s - 1), i.index(s - 1)))
      return n.delete(r.before(s), t);
  n.delete(e, t);
}
function fd(n, e) {
  let t = [], r = Math.min(n.depth, e.depth);
  for (let i = r; i >= 0; i--) {
    let o = n.start(i);
    if (o < n.pos - (n.depth - i) || e.end(i) > e.pos + (e.depth - i) || n.node(i).type.spec.isolating || e.node(i).type.spec.isolating)
      break;
    (o == e.start(i) || i == n.depth && i == e.depth && n.parent.inlineContent && e.parent.inlineContent && i && e.start(i - 1) == o - 1) && t.push(i);
  }
  return t;
}
class kr extends Re {
  constructor(e, t, r) {
    super(), this.pos = e, this.attr = t, this.value = r;
  }
  apply(e) {
    let t = e.nodeAt(this.pos);
    if (!t)
      return ge.fail("No node at attribute step's position");
    let r = /* @__PURE__ */ Object.create(null);
    for (let o in t.attrs)
      r[o] = t.attrs[o];
    r[this.attr] = this.value;
    let i = t.type.create(r, null, t.marks);
    return ge.fromReplace(e, this.pos, this.pos + 1, new R(C.from(i), 0, t.isLeaf ? 0 : 1));
  }
  getMap() {
    return tt.empty;
  }
  invert(e) {
    return new kr(this.pos, this.attr, e.nodeAt(this.pos).attrs[this.attr]);
  }
  map(e) {
    let t = e.mapResult(this.pos, 1);
    return t.deletedAfter ? null : new kr(t.pos, this.attr, this.value);
  }
  toJSON() {
    return { stepType: "attr", pos: this.pos, attr: this.attr, value: this.value };
  }
  static fromJSON(e, t) {
    if (typeof t.pos != "number" || typeof t.attr != "string")
      throw new RangeError("Invalid input for AttrStep.fromJSON");
    return new kr(t.pos, t.attr, t.value);
  }
}
Re.jsonID("attr", kr);
class xi extends Re {
  constructor(e, t) {
    super(), this.attr = e, this.value = t;
  }
  apply(e) {
    let t = /* @__PURE__ */ Object.create(null);
    for (let i in e.attrs)
      t[i] = e.attrs[i];
    t[this.attr] = this.value;
    let r = e.type.create(t, e.content, e.marks);
    return ge.ok(r);
  }
  getMap() {
    return tt.empty;
  }
  invert(e) {
    return new xi(this.attr, e.attrs[this.attr]);
  }
  map(e) {
    return this;
  }
  toJSON() {
    return { stepType: "docAttr", attr: this.attr, value: this.value };
  }
  static fromJSON(e, t) {
    if (typeof t.attr != "string")
      throw new RangeError("Invalid input for DocAttrStep.fromJSON");
    return new xi(t.attr, t.value);
  }
}
Re.jsonID("docAttr", xi);
let Cr = class extends Error {
};
Cr = function n(e) {
  let t = Error.call(this, e);
  return t.__proto__ = n.prototype, t;
};
Cr.prototype = Object.create(Error.prototype);
Cr.prototype.constructor = Cr;
Cr.prototype.name = "TransformError";
class dd {
  constructor(e) {
    this.doc = e, this.steps = [], this.docs = [], this.mapping = new ki();
  }
  get before() {
    return this.docs.length ? this.docs[0] : this.doc;
  }
  step(e) {
    let t = this.maybeStep(e);
    if (t.failed)
      throw new Cr(t.failed);
    return this;
  }
  maybeStep(e) {
    let t = e.apply(this.doc);
    return t.failed || this.addStep(e, t.doc), t;
  }
  get docChanged() {
    return this.steps.length > 0;
  }
  addStep(e, t) {
    this.docs.push(this.doc), this.steps.push(e), this.mapping.appendMap(e.getMap()), this.doc = t;
  }
  replace(e, t = e, r = R.empty) {
    let i = Ps(this.doc, e, t, r);
    return i && this.step(i), this;
  }
  replaceWith(e, t, r) {
    return this.replace(e, t, new R(C.from(r), 0, 0));
  }
  delete(e, t) {
    return this.replace(e, t, R.empty);
  }
  insert(e, t) {
    return this.replaceWith(e, e, t);
  }
  replaceRange(e, t, r) {
    return ig(this, e, t, r), this;
  }
  replaceRangeWith(e, t, r) {
    return og(this, e, t, r), this;
  }
  deleteRange(e, t) {
    return sg(this, e, t), this;
  }
  lift(e, t) {
    return jm(this, e, t), this;
  }
  join(e, t = 1) {
    return Qm(this, e, t), this;
  }
  wrap(e, t) {
    return Km(this, e, t), this;
  }
  setBlockType(e, t = e, r, i = null) {
    return qm(this, e, t, r, i), this;
  }
  setNodeMarkup(e, t, r = null, i) {
    return Gm(this, e, t, r, i), this;
  }
  setNodeAttribute(e, t, r) {
    return this.step(new kr(e, t, r)), this;
  }
  setDocAttribute(e, t) {
    return this.step(new xi(e, t)), this;
  }
  addNodeMark(e, t) {
    return this.step(new gn(e, t)), this;
  }
  removeNodeMark(e, t) {
    let r = this.doc.nodeAt(e);
    if (!r)
      throw new RangeError("No node at position " + e);
    if (t instanceof oe)
      t.isInSet(r.marks) && this.step(new Jn(e, t));
    else {
      let i = r.marks, o, s = [];
      for (; o = t.isInSet(i); )
        s.push(new Jn(e, o)), i = o.removeFromSet(i);
      for (let l = s.length - 1; l >= 0; l--)
        this.step(s[l]);
    }
    return this;
  }
  split(e, t = 1, r) {
    return Ym(this, e, t, r), this;
  }
  addMark(e, t, r) {
    return zm(this, e, t, r), this;
  }
  removeMark(e, t, r) {
    return Hm(this, e, t, r), this;
  }
  clearIncompatible(e, t, r) {
    return La(this, e, t, r), this;
  }
}
const dl = /* @__PURE__ */ Object.create(null);
class Z {
  constructor(e, t, r) {
    this.$anchor = e, this.$head = t, this.ranges = r || [new lg(e.min(t), e.max(t))];
  }
  get anchor() {
    return this.$anchor.pos;
  }
  get head() {
    return this.$head.pos;
  }
  get from() {
    return this.$from.pos;
  }
  get to() {
    return this.$to.pos;
  }
  get $from() {
    return this.ranges[0].$from;
  }
  get $to() {
    return this.ranges[0].$to;
  }
  get empty() {
    let e = this.ranges;
    for (let t = 0; t < e.length; t++)
      if (e[t].$from.pos != e[t].$to.pos)
        return !1;
    return !0;
  }
  content() {
    return this.$from.doc.slice(this.from, this.to, !0);
  }
  replace(e, t = R.empty) {
    let r = t.content.lastChild, i = null;
    for (let l = 0; l < t.openEnd; l++)
      i = r, r = r.lastChild;
    let o = e.steps.length, s = this.ranges;
    for (let l = 0; l < s.length; l++) {
      let { $from: a, $to: c } = s[l], u = e.mapping.slice(o);
      e.replaceRange(u.map(a.pos), u.map(c.pos), l ? R.empty : t), l == 0 && Kc(e, o, (r ? r.isInline : i && i.isTextblock) ? -1 : 1);
    }
  }
  replaceWith(e, t) {
    let r = e.steps.length, i = this.ranges;
    for (let o = 0; o < i.length; o++) {
      let { $from: s, $to: l } = i[o], a = e.mapping.slice(r), c = a.map(s.pos), u = a.map(l.pos);
      o ? e.deleteRange(c, u) : (e.replaceRangeWith(c, u, t), Kc(e, r, t.isInline ? -1 : 1));
    }
  }
  static findFrom(e, t, r = !1) {
    let i = e.parent.inlineContent ? new X(e) : dr(e.node(0), e.parent, e.pos, e.index(), t, r);
    if (i)
      return i;
    for (let o = e.depth - 1; o >= 0; o--) {
      let s = t < 0 ? dr(e.node(0), e.node(o), e.before(o + 1), e.index(o), t, r) : dr(e.node(0), e.node(o), e.after(o + 1), e.index(o) + 1, t, r);
      if (s)
        return s;
    }
    return null;
  }
  static near(e, t = 1) {
    return this.findFrom(e, t) || this.findFrom(e, -t) || new ft(e.node(0));
  }
  static atStart(e) {
    return dr(e, e, 0, 0, 1) || new ft(e);
  }
  static atEnd(e) {
    return dr(e, e, e.content.size, e.childCount, -1) || new ft(e);
  }
  static fromJSON(e, t) {
    if (!t || !t.type)
      throw new RangeError("Invalid input for Selection.fromJSON");
    let r = dl[t.type];
    if (!r)
      throw new RangeError(`No selection type ${t.type} defined`);
    return r.fromJSON(e, t);
  }
  static jsonID(e, t) {
    if (e in dl)
      throw new RangeError("Duplicate use of selection JSON ID " + e);
    return dl[e] = t, t.prototype.jsonID = e, t;
  }
  getBookmark() {
    return X.between(this.$anchor, this.$head).getBookmark();
  }
}
Z.prototype.visible = !0;
class lg {
  constructor(e, t) {
    this.$from = e, this.$to = t;
  }
}
let Wc = !1;
function Uc(n) {
  !Wc && !n.parent.inlineContent && (Wc = !0, console.warn("TextSelection endpoint not pointing into a node with inline content (" + n.parent.type.name + ")"));
}
class X extends Z {
  constructor(e, t = e) {
    Uc(e), Uc(t), super(e, t);
  }
  get $cursor() {
    return this.$anchor.pos == this.$head.pos ? this.$head : null;
  }
  map(e, t) {
    let r = e.resolve(t.map(this.head));
    if (!r.parent.inlineContent)
      return Z.near(r);
    let i = e.resolve(t.map(this.anchor));
    return new X(i.parent.inlineContent ? i : r, r);
  }
  replace(e, t = R.empty) {
    if (super.replace(e, t), t == R.empty) {
      let r = this.$from.marksAcross(this.$to);
      r && e.ensureMarks(r);
    }
  }
  eq(e) {
    return e instanceof X && e.anchor == this.anchor && e.head == this.head;
  }
  getBookmark() {
    return new Ls(this.anchor, this.head);
  }
  toJSON() {
    return { type: "text", anchor: this.anchor, head: this.head };
  }
  static fromJSON(e, t) {
    if (typeof t.anchor != "number" || typeof t.head != "number")
      throw new RangeError("Invalid input for TextSelection.fromJSON");
    return new X(e.resolve(t.anchor), e.resolve(t.head));
  }
  static create(e, t, r = t) {
    let i = e.resolve(t);
    return new this(i, r == t ? i : e.resolve(r));
  }
  static between(e, t, r) {
    let i = e.pos - t.pos;
    if ((!r || i) && (r = i >= 0 ? 1 : -1), !t.parent.inlineContent) {
      let o = Z.findFrom(t, r, !0) || Z.findFrom(t, -r, !0);
      if (o)
        t = o.$head;
      else
        return Z.near(t, r);
    }
    return e.parent.inlineContent || (i == 0 ? e = t : (e = (Z.findFrom(e, -r, !0) || Z.findFrom(e, r, !0)).$anchor, e.pos < t.pos != i < 0 && (e = t))), new X(e, t);
  }
}
Z.jsonID("text", X);
class Ls {
  constructor(e, t) {
    this.anchor = e, this.head = t;
  }
  map(e) {
    return new Ls(e.map(this.anchor), e.map(this.head));
  }
  resolve(e) {
    return X.between(e.resolve(this.anchor), e.resolve(this.head));
  }
}
class z extends Z {
  constructor(e) {
    let t = e.nodeAfter, r = e.node(0).resolve(e.pos + t.nodeSize);
    super(e, r), this.node = t;
  }
  map(e, t) {
    let { deleted: r, pos: i } = t.mapResult(this.anchor), o = e.resolve(i);
    return r ? Z.near(o) : new z(o);
  }
  content() {
    return new R(C.from(this.node), 0, 0);
  }
  eq(e) {
    return e instanceof z && e.anchor == this.anchor;
  }
  toJSON() {
    return { type: "node", anchor: this.anchor };
  }
  getBookmark() {
    return new Ba(this.anchor);
  }
  static fromJSON(e, t) {
    if (typeof t.anchor != "number")
      throw new RangeError("Invalid input for NodeSelection.fromJSON");
    return new z(e.resolve(t.anchor));
  }
  static create(e, t) {
    return new z(e.resolve(t));
  }
  static isSelectable(e) {
    return !e.isText && e.type.spec.selectable !== !1;
  }
}
z.prototype.visible = !1;
Z.jsonID("node", z);
class Ba {
  constructor(e) {
    this.anchor = e;
  }
  map(e) {
    let { deleted: t, pos: r } = e.mapResult(this.anchor);
    return t ? new Ls(r, r) : new Ba(r);
  }
  resolve(e) {
    let t = e.resolve(this.anchor), r = t.nodeAfter;
    return r && z.isSelectable(r) ? new z(t) : Z.near(t);
  }
}
class ft extends Z {
  constructor(e) {
    super(e.resolve(0), e.resolve(e.content.size));
  }
  replace(e, t = R.empty) {
    if (t == R.empty) {
      e.delete(0, e.doc.content.size);
      let r = Z.atStart(e.doc);
      r.eq(e.selection) || e.setSelection(r);
    } else
      super.replace(e, t);
  }
  toJSON() {
    return { type: "all" };
  }
  static fromJSON(e) {
    return new ft(e);
  }
  map(e) {
    return new ft(e);
  }
  eq(e) {
    return e instanceof ft;
  }
  getBookmark() {
    return ag;
  }
}
Z.jsonID("all", ft);
const ag = {
  map() {
    return this;
  },
  resolve(n) {
    return new ft(n);
  }
};
function dr(n, e, t, r, i, o = !1) {
  if (e.inlineContent)
    return X.create(n, t);
  for (let s = r - (i > 0 ? 0 : 1); i > 0 ? s < e.childCount : s >= 0; s += i) {
    let l = e.child(s);
    if (l.isAtom) {
      if (!o && z.isSelectable(l))
        return z.create(n, t - (i < 0 ? l.nodeSize : 0));
    } else {
      let a = dr(n, l, t + i, i < 0 ? l.childCount : 0, i, o);
      if (a)
        return a;
    }
    t += l.nodeSize * i;
  }
  return null;
}
function Kc(n, e, t) {
  let r = n.steps.length - 1;
  if (r < e)
    return;
  let i = n.steps[r];
  if (!(i instanceof be || i instanceof we))
    return;
  let o = n.mapping.maps[r], s;
  o.forEach((l, a, c, u) => {
    s == null && (s = u);
  }), n.setSelection(Z.near(n.doc.resolve(s), t));
}
const qc = 1, oo = 2, Jc = 4;
class cg extends dd {
  constructor(e) {
    super(e.doc), this.curSelectionFor = 0, this.updated = 0, this.meta = /* @__PURE__ */ Object.create(null), this.time = Date.now(), this.curSelection = e.selection, this.storedMarks = e.storedMarks;
  }
  get selection() {
    return this.curSelectionFor < this.steps.length && (this.curSelection = this.curSelection.map(this.doc, this.mapping.slice(this.curSelectionFor)), this.curSelectionFor = this.steps.length), this.curSelection;
  }
  setSelection(e) {
    if (e.$from.doc != this.doc)
      throw new RangeError("Selection passed to setSelection must point at the current document");
    return this.curSelection = e, this.curSelectionFor = this.steps.length, this.updated = (this.updated | qc) & ~oo, this.storedMarks = null, this;
  }
  get selectionSet() {
    return (this.updated & qc) > 0;
  }
  setStoredMarks(e) {
    return this.storedMarks = e, this.updated |= oo, this;
  }
  ensureMarks(e) {
    return oe.sameSet(this.storedMarks || this.selection.$from.marks(), e) || this.setStoredMarks(e), this;
  }
  addStoredMark(e) {
    return this.ensureMarks(e.addToSet(this.storedMarks || this.selection.$head.marks()));
  }
  removeStoredMark(e) {
    return this.ensureMarks(e.removeFromSet(this.storedMarks || this.selection.$head.marks()));
  }
  get storedMarksSet() {
    return (this.updated & oo) > 0;
  }
  addStep(e, t) {
    super.addStep(e, t), this.updated = this.updated & ~oo, this.storedMarks = null;
  }
  setTime(e) {
    return this.time = e, this;
  }
  replaceSelection(e) {
    return this.selection.replace(this, e), this;
  }
  replaceSelectionWith(e, t = !0) {
    let r = this.selection;
    return t && (e = e.mark(this.storedMarks || (r.empty ? r.$from.marks() : r.$from.marksAcross(r.$to) || oe.none))), r.replaceWith(this, e), this;
  }
  deleteSelection() {
    return this.selection.replace(this), this;
  }
  insertText(e, t, r) {
    let i = this.doc.type.schema;
    if (t == null)
      return e ? this.replaceSelectionWith(i.text(e), !0) : this.deleteSelection();
    {
      if (r == null && (r = t), r = r == null ? t : r, !e)
        return this.deleteRange(t, r);
      let o = this.storedMarks;
      if (!o) {
        let s = this.doc.resolve(t);
        o = r == t ? s.marks() : s.marksAcross(this.doc.resolve(r));
      }
      return this.replaceRangeWith(t, r, i.text(e, o)), this.selection.empty || this.setSelection(Z.near(this.selection.$to)), this;
    }
  }
  setMeta(e, t) {
    return this.meta[typeof e == "string" ? e : e.key] = t, this;
  }
  getMeta(e) {
    return this.meta[typeof e == "string" ? e : e.key];
  }
  get isGeneric() {
    for (let e in this.meta)
      return !1;
    return !0;
  }
  scrollIntoView() {
    return this.updated |= Jc, this;
  }
  get scrolledIntoView() {
    return (this.updated & Jc) > 0;
  }
}
function Gc(n, e) {
  return !e || !n ? n : n.bind(e);
}
class Zr {
  constructor(e, t, r) {
    this.name = e, this.init = Gc(t.init, r), this.apply = Gc(t.apply, r);
  }
}
const ug = [
  new Zr("doc", {
    init(n) {
      return n.doc || n.schema.topNodeType.createAndFill();
    },
    apply(n) {
      return n.doc;
    }
  }),
  new Zr("selection", {
    init(n, e) {
      return n.selection || Z.atStart(e.doc);
    },
    apply(n) {
      return n.selection;
    }
  }),
  new Zr("storedMarks", {
    init(n) {
      return n.storedMarks || null;
    },
    apply(n, e, t, r) {
      return r.selection.$cursor ? n.storedMarks : null;
    }
  }),
  new Zr("scrollToSelection", {
    init() {
      return 0;
    },
    apply(n, e) {
      return n.scrolledIntoView ? e + 1 : e;
    }
  })
];
class hl {
  constructor(e, t) {
    this.schema = e, this.plugins = [], this.pluginsByKey = /* @__PURE__ */ Object.create(null), this.fields = ug.slice(), t && t.forEach((r) => {
      if (this.pluginsByKey[r.key])
        throw new RangeError("Adding different instances of a keyed plugin (" + r.key + ")");
      this.plugins.push(r), this.pluginsByKey[r.key] = r, r.spec.state && this.fields.push(new Zr(r.key, r.spec.state, r));
    });
  }
}
class yr {
  constructor(e) {
    this.config = e;
  }
  get schema() {
    return this.config.schema;
  }
  get plugins() {
    return this.config.plugins;
  }
  apply(e) {
    return this.applyTransaction(e).state;
  }
  filterTransaction(e, t = -1) {
    for (let r = 0; r < this.config.plugins.length; r++)
      if (r != t) {
        let i = this.config.plugins[r];
        if (i.spec.filterTransaction && !i.spec.filterTransaction.call(i, e, this))
          return !1;
      }
    return !0;
  }
  applyTransaction(e) {
    if (!this.filterTransaction(e))
      return { state: this, transactions: [] };
    let t = [e], r = this.applyInner(e), i = null;
    for (; ; ) {
      let o = !1;
      for (let s = 0; s < this.config.plugins.length; s++) {
        let l = this.config.plugins[s];
        if (l.spec.appendTransaction) {
          let a = i ? i[s].n : 0, c = i ? i[s].state : this, u = a < t.length && l.spec.appendTransaction.call(l, a ? t.slice(a) : t, c, r);
          if (u && r.filterTransaction(u, s)) {
            if (u.setMeta("appendedTransaction", e), !i) {
              i = [];
              for (let f = 0; f < this.config.plugins.length; f++)
                i.push(f < s ? { state: r, n: t.length } : { state: this, n: 0 });
            }
            t.push(u), r = r.applyInner(u), o = !0;
          }
          i && (i[s] = { state: r, n: t.length });
        }
      }
      if (!o)
        return { state: r, transactions: t };
    }
  }
  applyInner(e) {
    if (!e.before.eq(this.doc))
      throw new RangeError("Applying a mismatched transaction");
    let t = new yr(this.config), r = this.config.fields;
    for (let i = 0; i < r.length; i++) {
      let o = r[i];
      t[o.name] = o.apply(e, this[o.name], this, t);
    }
    return t;
  }
  get tr() {
    return new cg(this);
  }
  static create(e) {
    let t = new hl(e.doc ? e.doc.type.schema : e.schema, e.plugins), r = new yr(t);
    for (let i = 0; i < t.fields.length; i++)
      r[t.fields[i].name] = t.fields[i].init(e, r);
    return r;
  }
  reconfigure(e) {
    let t = new hl(this.schema, e.plugins), r = t.fields, i = new yr(t);
    for (let o = 0; o < r.length; o++) {
      let s = r[o].name;
      i[s] = this.hasOwnProperty(s) ? this[s] : r[o].init(e, i);
    }
    return i;
  }
  toJSON(e) {
    let t = { doc: this.doc.toJSON(), selection: this.selection.toJSON() };
    if (this.storedMarks && (t.storedMarks = this.storedMarks.map((r) => r.toJSON())), e && typeof e == "object")
      for (let r in e) {
        if (r == "doc" || r == "selection")
          throw new RangeError("The JSON fields `doc` and `selection` are reserved");
        let i = e[r], o = i.spec.state;
        o && o.toJSON && (t[r] = o.toJSON.call(i, this[i.key]));
      }
    return t;
  }
  static fromJSON(e, t, r) {
    if (!t)
      throw new RangeError("Invalid input for EditorState.fromJSON");
    if (!e.schema)
      throw new RangeError("Required config field 'schema' missing");
    let i = new hl(e.schema, e.plugins), o = new yr(i);
    return i.fields.forEach((s) => {
      if (s.name == "doc")
        o.doc = kt.fromJSON(e.schema, t.doc);
      else if (s.name == "selection")
        o.selection = Z.fromJSON(o.doc, t.selection);
      else if (s.name == "storedMarks")
        t.storedMarks && (o.storedMarks = t.storedMarks.map(e.schema.markFromJSON));
      else {
        if (r)
          for (let l in r) {
            let a = r[l], c = a.spec.state;
            if (a.key == s.name && c && c.fromJSON && Object.prototype.hasOwnProperty.call(t, l)) {
              o[s.name] = c.fromJSON.call(a, e, t[l], o);
              return;
            }
          }
        o[s.name] = s.init(e, o);
      }
    }), o;
  }
}
function hd(n, e, t) {
  for (let r in n) {
    let i = n[r];
    i instanceof Function ? i = i.bind(e) : r == "handleDOMEvents" && (i = hd(i, e, {})), t[r] = i;
  }
  return t;
}
class Ae {
  constructor(e) {
    this.spec = e, this.props = {}, e.props && hd(e.props, this, this.props), this.key = e.key ? e.key.key : pd("plugin");
  }
  getState(e) {
    return e[this.key];
  }
}
const pl = /* @__PURE__ */ Object.create(null);
function pd(n) {
  return n in pl ? n + "$" + ++pl[n] : (pl[n] = 0, n + "$");
}
class He {
  constructor(e = "key") {
    this.key = pd(e);
  }
  get(e) {
    return e.config.pluginsByKey[this.key];
  }
  getState(e) {
    return e[this.key];
  }
}
const Oe = function(n) {
  for (var e = 0; ; e++)
    if (n = n.previousSibling, !n)
      return e;
}, Tr = function(n) {
  let e = n.assignedSlot || n.parentNode;
  return e && e.nodeType == 11 ? e.host : e;
};
let Yl = null;
const jt = function(n, e, t) {
  let r = Yl || (Yl = document.createRange());
  return r.setEnd(n, t == null ? n.nodeValue.length : t), r.setStart(n, e || 0), r;
}, fg = function() {
  Yl = null;
}, Gn = function(n, e, t, r) {
  return t && (Yc(n, e, t, r, -1) || Yc(n, e, t, r, 1));
}, dg = /^(img|br|input|textarea|hr)$/i;
function Yc(n, e, t, r, i) {
  for (; ; ) {
    if (n == t && e == r)
      return !0;
    if (e == (i < 0 ? 0 : ct(n))) {
      let o = n.parentNode;
      if (!o || o.nodeType != 1 || Bi(n) || dg.test(n.nodeName) || n.contentEditable == "false")
        return !1;
      e = Oe(n) + (i < 0 ? 0 : 1), n = o;
    } else if (n.nodeType == 1) {
      if (n = n.childNodes[e + (i < 0 ? -1 : 0)], n.contentEditable == "false")
        return !1;
      e = i < 0 ? ct(n) : 0;
    } else
      return !1;
  }
}
function ct(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function hg(n, e) {
  for (; ; ) {
    if (n.nodeType == 3 && e)
      return n;
    if (n.nodeType == 1 && e > 0) {
      if (n.contentEditable == "false")
        return null;
      n = n.childNodes[e - 1], e = ct(n);
    } else if (n.parentNode && !Bi(n))
      e = Oe(n), n = n.parentNode;
    else
      return null;
  }
}
function pg(n, e) {
  for (; ; ) {
    if (n.nodeType == 3 && e < n.nodeValue.length)
      return n;
    if (n.nodeType == 1 && e < n.childNodes.length) {
      if (n.contentEditable == "false")
        return null;
      n = n.childNodes[e], e = 0;
    } else if (n.parentNode && !Bi(n))
      e = Oe(n) + 1, n = n.parentNode;
    else
      return null;
  }
}
function mg(n, e, t) {
  for (let r = e == 0, i = e == ct(n); r || i; ) {
    if (n == t)
      return !0;
    let o = Oe(n);
    if (n = n.parentNode, !n)
      return !1;
    r = r && o == 0, i = i && o == ct(n);
  }
}
function Bi(n) {
  let e;
  for (let t = n; t && !(e = t.pmViewDesc); t = t.parentNode)
    ;
  return e && e.node && e.node.isBlock && (e.dom == n || e.contentDOM == n);
}
const Bs = function(n) {
  return n.focusNode && Gn(n.focusNode, n.focusOffset, n.anchorNode, n.anchorOffset);
};
function Pn(n, e) {
  let t = document.createEvent("Event");
  return t.initEvent("keydown", !0, !0), t.keyCode = n, t.key = t.code = e, t;
}
function gg(n) {
  let e = n.activeElement;
  for (; e && e.shadowRoot; )
    e = e.shadowRoot.activeElement;
  return e;
}
function yg(n, e, t) {
  if (n.caretPositionFromPoint)
    try {
      let r = n.caretPositionFromPoint(e, t);
      if (r)
        return { node: r.offsetNode, offset: Math.min(ct(r.offsetNode), r.offset) };
    } catch {
    }
  if (n.caretRangeFromPoint) {
    let r = n.caretRangeFromPoint(e, t);
    if (r)
      return { node: r.startContainer, offset: Math.min(ct(r.startContainer), r.startOffset) };
  }
}
const Rt = typeof navigator < "u" ? navigator : null, Xc = typeof document < "u" ? document : null, Sn = Rt && Rt.userAgent || "", Xl = /Edge\/(\d+)/.exec(Sn), md = /MSIE \d/.exec(Sn), Ql = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(Sn), Je = !!(md || Ql || Xl), bn = md ? document.documentMode : Ql ? +Ql[1] : Xl ? +Xl[1] : 0, xt = !Je && /gecko\/(\d+)/i.test(Sn);
xt && +(/Firefox\/(\d+)/.exec(Sn) || [0, 0])[1];
const Zl = !Je && /Chrome\/(\d+)/.exec(Sn), Ie = !!Zl, gd = Zl ? +Zl[1] : 0, Be = !Je && !!Rt && /Apple Computer/.test(Rt.vendor), Or = Be && (/Mobile\/\w+/.test(Sn) || !!Rt && Rt.maxTouchPoints > 2), at = Or || (Rt ? /Mac/.test(Rt.platform) : !1), vg = Rt ? /Win/.test(Rt.platform) : !1, Kt = /Android \d/.test(Sn), _i = !!Xc && "webkitFontSmoothing" in Xc.documentElement.style, bg = _i ? +(/\bAppleWebKit\/(\d+)/.exec(navigator.userAgent) || [0, 0])[1] : 0;
function wg(n) {
  let e = n.defaultView && n.defaultView.visualViewport;
  return e ? {
    left: 0,
    right: e.width,
    top: 0,
    bottom: e.height
  } : {
    left: 0,
    right: n.documentElement.clientWidth,
    top: 0,
    bottom: n.documentElement.clientHeight
  };
}
function $t(n, e) {
  return typeof n == "number" ? n : n[e];
}
function kg(n) {
  let e = n.getBoundingClientRect(), t = e.width / n.offsetWidth || 1, r = e.height / n.offsetHeight || 1;
  return {
    left: e.left,
    right: e.left + n.clientWidth * t,
    top: e.top,
    bottom: e.top + n.clientHeight * r
  };
}
function Qc(n, e, t) {
  let r = n.someProp("scrollThreshold") || 0, i = n.someProp("scrollMargin") || 5, o = n.dom.ownerDocument;
  for (let s = t || n.dom; s; ) {
    if (s.nodeType != 1) {
      s = Tr(s);
      continue;
    }
    let l = s, a = l == o.body, c = a ? wg(o) : kg(l), u = 0, f = 0;
    if (e.top < c.top + $t(r, "top") ? f = -(c.top - e.top + $t(i, "top")) : e.bottom > c.bottom - $t(r, "bottom") && (f = e.bottom - e.top > c.bottom - c.top ? e.top + $t(i, "top") - c.top : e.bottom - c.bottom + $t(i, "bottom")), e.left < c.left + $t(r, "left") ? u = -(c.left - e.left + $t(i, "left")) : e.right > c.right - $t(r, "right") && (u = e.right - c.right + $t(i, "right")), u || f)
      if (a)
        o.defaultView.scrollBy(u, f);
      else {
        let h = l.scrollLeft, p = l.scrollTop;
        f && (l.scrollTop += f), u && (l.scrollLeft += u);
        let m = l.scrollLeft - h, g = l.scrollTop - p;
        e = { left: e.left - m, top: e.top - g, right: e.right - m, bottom: e.bottom - g };
      }
    let d = a ? "fixed" : getComputedStyle(s).position;
    if (/^(fixed|sticky)$/.test(d))
      break;
    s = d == "absolute" ? s.offsetParent : Tr(s);
  }
}
function xg(n) {
  let e = n.dom.getBoundingClientRect(), t = Math.max(0, e.top), r, i;
  for (let o = (e.left + e.right) / 2, s = t + 1; s < Math.min(innerHeight, e.bottom); s += 5) {
    let l = n.root.elementFromPoint(o, s);
    if (!l || l == n.dom || !n.dom.contains(l))
      continue;
    let a = l.getBoundingClientRect();
    if (a.top >= t - 20) {
      r = l, i = a.top;
      break;
    }
  }
  return { refDOM: r, refTop: i, stack: yd(n.dom) };
}
function yd(n) {
  let e = [], t = n.ownerDocument;
  for (let r = n; r && (e.push({ dom: r, top: r.scrollTop, left: r.scrollLeft }), n != t); r = Tr(r))
    ;
  return e;
}
function Sg({ refDOM: n, refTop: e, stack: t }) {
  let r = n ? n.getBoundingClientRect().top : 0;
  vd(t, r == 0 ? 0 : r - e);
}
function vd(n, e) {
  for (let t = 0; t < n.length; t++) {
    let { dom: r, top: i, left: o } = n[t];
    r.scrollTop != i + e && (r.scrollTop = i + e), r.scrollLeft != o && (r.scrollLeft = o);
  }
}
let ar = null;
function Eg(n) {
  if (n.setActive)
    return n.setActive();
  if (ar)
    return n.focus(ar);
  let e = yd(n);
  n.focus(ar == null ? {
    get preventScroll() {
      return ar = { preventScroll: !0 }, !0;
    }
  } : void 0), ar || (ar = !1, vd(e, 0));
}
function bd(n, e) {
  let t, r = 2e8, i, o = 0, s = e.top, l = e.top, a, c;
  for (let u = n.firstChild, f = 0; u; u = u.nextSibling, f++) {
    let d;
    if (u.nodeType == 1)
      d = u.getClientRects();
    else if (u.nodeType == 3)
      d = jt(u).getClientRects();
    else
      continue;
    for (let h = 0; h < d.length; h++) {
      let p = d[h];
      if (p.top <= s && p.bottom >= l) {
        s = Math.max(p.bottom, s), l = Math.min(p.top, l);
        let m = p.left > e.left ? p.left - e.left : p.right < e.left ? e.left - p.right : 0;
        if (m < r) {
          t = u, r = m, i = m && t.nodeType == 3 ? {
            left: p.right < e.left ? p.right : p.left,
            top: e.top
          } : e, u.nodeType == 1 && m && (o = f + (e.left >= (p.left + p.right) / 2 ? 1 : 0));
          continue;
        }
      } else
        p.top > e.top && !a && p.left <= e.left && p.right >= e.left && (a = u, c = { left: Math.max(p.left, Math.min(p.right, e.left)), top: p.top });
      !t && (e.left >= p.right && e.top >= p.top || e.left >= p.left && e.top >= p.bottom) && (o = f + 1);
    }
  }
  return !t && a && (t = a, i = c, r = 0), t && t.nodeType == 3 ? Cg(t, i) : !t || r && t.nodeType == 1 ? { node: n, offset: o } : bd(t, i);
}
function Cg(n, e) {
  let t = n.nodeValue.length, r = document.createRange();
  for (let i = 0; i < t; i++) {
    r.setEnd(n, i + 1), r.setStart(n, i);
    let o = on(r, 1);
    if (o.top != o.bottom && _a(e, o))
      return { node: n, offset: i + (e.left >= (o.left + o.right) / 2 ? 1 : 0) };
  }
  return { node: n, offset: 0 };
}
function _a(n, e) {
  return n.left >= e.left - 1 && n.left <= e.right + 1 && n.top >= e.top - 1 && n.top <= e.bottom + 1;
}
function Tg(n, e) {
  let t = n.parentNode;
  return t && /^li$/i.test(t.nodeName) && e.left < n.getBoundingClientRect().left ? t : n;
}
function Og(n, e, t) {
  let { node: r, offset: i } = bd(e, t), o = -1;
  if (r.nodeType == 1 && !r.firstChild) {
    let s = r.getBoundingClientRect();
    o = s.left != s.right && t.left > (s.left + s.right) / 2 ? 1 : -1;
  }
  return n.docView.posFromDOM(r, i, o);
}
function Mg(n, e, t, r) {
  let i = -1;
  for (let o = e, s = !1; o != n.dom; ) {
    let l = n.docView.nearestDesc(o, !0), a;
    if (!l)
      return null;
    if (l.dom.nodeType == 1 && (l.node.isBlock && l.parent || !l.contentDOM) && ((a = l.dom.getBoundingClientRect()).width || a.height) && (l.node.isBlock && l.parent && (!s && a.left > r.left || a.top > r.top ? i = l.posBefore : (!s && a.right < r.left || a.bottom < r.top) && (i = l.posAfter), s = !0), !l.contentDOM && i < 0 && !l.node.isText))
      return (l.node.isBlock ? r.top < (a.top + a.bottom) / 2 : r.left < (a.left + a.right) / 2) ? l.posBefore : l.posAfter;
    o = l.dom.parentNode;
  }
  return i > -1 ? i : n.docView.posFromDOM(e, t, -1);
}
function wd(n, e, t) {
  let r = n.childNodes.length;
  if (r && t.top < t.bottom)
    for (let i = Math.max(0, Math.min(r - 1, Math.floor(r * (e.top - t.top) / (t.bottom - t.top)) - 2)), o = i; ; ) {
      let s = n.childNodes[o];
      if (s.nodeType == 1) {
        let l = s.getClientRects();
        for (let a = 0; a < l.length; a++) {
          let c = l[a];
          if (_a(e, c))
            return wd(s, e, c);
        }
      }
      if ((o = (o + 1) % r) == i)
        break;
    }
  return n;
}
function Ag(n, e) {
  let t = n.dom.ownerDocument, r, i = 0, o = yg(t, e.left, e.top);
  o && ({ node: r, offset: i } = o);
  let s = (n.root.elementFromPoint ? n.root : t).elementFromPoint(e.left, e.top), l;
  if (!s || !n.dom.contains(s.nodeType != 1 ? s.parentNode : s)) {
    let c = n.dom.getBoundingClientRect();
    if (!_a(e, c) || (s = wd(n.dom, e, c), !s))
      return null;
  }
  if (Be)
    for (let c = s; r && c; c = Tr(c))
      c.draggable && (r = void 0);
  if (s = Tg(s, e), r) {
    if (xt && r.nodeType == 1 && (i = Math.min(i, r.childNodes.length), i < r.childNodes.length)) {
      let u = r.childNodes[i], f;
      u.nodeName == "IMG" && (f = u.getBoundingClientRect()).right <= e.left && f.bottom > e.top && i++;
    }
    let c;
    _i && i && r.nodeType == 1 && (c = r.childNodes[i - 1]).nodeType == 1 && c.contentEditable == "false" && c.getBoundingClientRect().top >= e.top && i--, r == n.dom && i == r.childNodes.length - 1 && r.lastChild.nodeType == 1 && e.top > r.lastChild.getBoundingClientRect().bottom ? l = n.state.doc.content.size : (i == 0 || r.nodeType != 1 || r.childNodes[i - 1].nodeName != "BR") && (l = Mg(n, r, i, e));
  }
  l == null && (l = Og(n, s, e));
  let a = n.docView.nearestDesc(s, !0);
  return { pos: l, inside: a ? a.posAtStart - a.border : -1 };
}
function Zc(n) {
  return n.top < n.bottom || n.left < n.right;
}
function on(n, e) {
  let t = n.getClientRects();
  if (t.length) {
    let r = t[e < 0 ? 0 : t.length - 1];
    if (Zc(r))
      return r;
  }
  return Array.prototype.find.call(t, Zc) || n.getBoundingClientRect();
}
const Dg = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/;
function kd(n, e, t) {
  let { node: r, offset: i, atom: o } = n.docView.domFromPos(e, t < 0 ? -1 : 1), s = _i || xt;
  if (r.nodeType == 3)
    if (s && (Dg.test(r.nodeValue) || (t < 0 ? !i : i == r.nodeValue.length))) {
      let a = on(jt(r, i, i), t);
      if (xt && i && /\s/.test(r.nodeValue[i - 1]) && i < r.nodeValue.length) {
        let c = on(jt(r, i - 1, i - 1), -1);
        if (c.top == a.top) {
          let u = on(jt(r, i, i + 1), -1);
          if (u.top != a.top)
            return Ur(u, u.left < c.left);
        }
      }
      return a;
    } else {
      let a = i, c = i, u = t < 0 ? 1 : -1;
      return t < 0 && !i ? (c++, u = -1) : t >= 0 && i == r.nodeValue.length ? (a--, u = 1) : t < 0 ? a-- : c++, Ur(on(jt(r, a, c), u), u < 0);
    }
  if (!n.state.doc.resolve(e - (o || 0)).parent.inlineContent) {
    if (o == null && i && (t < 0 || i == ct(r))) {
      let a = r.childNodes[i - 1];
      if (a.nodeType == 1)
        return ml(a.getBoundingClientRect(), !1);
    }
    if (o == null && i < ct(r)) {
      let a = r.childNodes[i];
      if (a.nodeType == 1)
        return ml(a.getBoundingClientRect(), !0);
    }
    return ml(r.getBoundingClientRect(), t >= 0);
  }
  if (o == null && i && (t < 0 || i == ct(r))) {
    let a = r.childNodes[i - 1], c = a.nodeType == 3 ? jt(a, ct(a) - (s ? 0 : 1)) : a.nodeType == 1 && (a.nodeName != "BR" || !a.nextSibling) ? a : null;
    if (c)
      return Ur(on(c, 1), !1);
  }
  if (o == null && i < ct(r)) {
    let a = r.childNodes[i];
    for (; a.pmViewDesc && a.pmViewDesc.ignoreForCoords; )
      a = a.nextSibling;
    let c = a ? a.nodeType == 3 ? jt(a, 0, s ? 0 : 1) : a.nodeType == 1 ? a : null : null;
    if (c)
      return Ur(on(c, -1), !0);
  }
  return Ur(on(r.nodeType == 3 ? jt(r) : r, -t), t >= 0);
}
function Ur(n, e) {
  if (n.width == 0)
    return n;
  let t = e ? n.left : n.right;
  return { top: n.top, bottom: n.bottom, left: t, right: t };
}
function ml(n, e) {
  if (n.height == 0)
    return n;
  let t = e ? n.top : n.bottom;
  return { top: t, bottom: t, left: n.left, right: n.right };
}
function xd(n, e, t) {
  let r = n.state, i = n.root.activeElement;
  r != e && n.updateState(e), i != n.dom && n.focus();
  try {
    return t();
  } finally {
    r != e && n.updateState(r), i != n.dom && i && i.focus();
  }
}
function Ng(n, e, t) {
  let r = e.selection, i = t == "up" ? r.$from : r.$to;
  return xd(n, e, () => {
    let { node: o } = n.docView.domFromPos(i.pos, t == "up" ? -1 : 1);
    for (; ; ) {
      let l = n.docView.nearestDesc(o, !0);
      if (!l)
        break;
      if (l.node.isBlock) {
        o = l.contentDOM || l.dom;
        break;
      }
      o = l.dom.parentNode;
    }
    let s = kd(n, i.pos, 1);
    for (let l = o.firstChild; l; l = l.nextSibling) {
      let a;
      if (l.nodeType == 1)
        a = l.getClientRects();
      else if (l.nodeType == 3)
        a = jt(l, 0, l.nodeValue.length).getClientRects();
      else
        continue;
      for (let c = 0; c < a.length; c++) {
        let u = a[c];
        if (u.bottom > u.top + 1 && (t == "up" ? s.top - u.top > (u.bottom - s.top) * 2 : u.bottom - s.bottom > (s.bottom - u.top) * 2))
          return !1;
      }
    }
    return !0;
  });
}
const Ig = /[\u0590-\u08ac]/;
function Rg(n, e, t) {
  let { $head: r } = e.selection;
  if (!r.parent.isTextblock)
    return !1;
  let i = r.parentOffset, o = !i, s = i == r.parent.content.size, l = n.domSelection();
  return l ? !Ig.test(r.parent.textContent) || !l.modify ? t == "left" || t == "backward" ? o : s : xd(n, e, () => {
    let { focusNode: a, focusOffset: c, anchorNode: u, anchorOffset: f } = n.domSelectionRange(), d = l.caretBidiLevel;
    l.modify("move", t, "character");
    let h = r.depth ? n.docView.domAfterPos(r.before()) : n.dom, { focusNode: p, focusOffset: m } = n.domSelectionRange(), g = p && !h.contains(p.nodeType == 1 ? p : p.parentNode) || a == p && c == m;
    try {
      l.collapse(u, f), a && (a != u || c != f) && l.extend && l.extend(a, c);
    } catch {
    }
    return d != null && (l.caretBidiLevel = d), g;
  }) : r.pos == r.start() || r.pos == r.end();
}
let eu = null, tu = null, nu = !1;
function Pg(n, e, t) {
  return eu == e && tu == t ? nu : (eu = e, tu = t, nu = t == "up" || t == "down" ? Ng(n, e, t) : Rg(n, e, t));
}
const dt = 0, ru = 1, _n = 2, Pt = 3;
class Fi {
  constructor(e, t, r, i) {
    this.parent = e, this.children = t, this.dom = r, this.contentDOM = i, this.dirty = dt, r.pmViewDesc = this;
  }
  matchesWidget(e) {
    return !1;
  }
  matchesMark(e) {
    return !1;
  }
  matchesNode(e, t, r) {
    return !1;
  }
  matchesHack(e) {
    return !1;
  }
  parseRule() {
    return null;
  }
  stopEvent(e) {
    return !1;
  }
  get size() {
    let e = 0;
    for (let t = 0; t < this.children.length; t++)
      e += this.children[t].size;
    return e;
  }
  get border() {
    return 0;
  }
  destroy() {
    this.parent = void 0, this.dom.pmViewDesc == this && (this.dom.pmViewDesc = void 0);
    for (let e = 0; e < this.children.length; e++)
      this.children[e].destroy();
  }
  posBeforeChild(e) {
    for (let t = 0, r = this.posAtStart; ; t++) {
      let i = this.children[t];
      if (i == e)
        return r;
      r += i.size;
    }
  }
  get posBefore() {
    return this.parent.posBeforeChild(this);
  }
  get posAtStart() {
    return this.parent ? this.parent.posBeforeChild(this) + this.border : 0;
  }
  get posAfter() {
    return this.posBefore + this.size;
  }
  get posAtEnd() {
    return this.posAtStart + this.size - 2 * this.border;
  }
  localPosFromDOM(e, t, r) {
    if (this.contentDOM && this.contentDOM.contains(e.nodeType == 1 ? e : e.parentNode))
      if (r < 0) {
        let o, s;
        if (e == this.contentDOM)
          o = e.childNodes[t - 1];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          o = e.previousSibling;
        }
        for (; o && !((s = o.pmViewDesc) && s.parent == this); )
          o = o.previousSibling;
        return o ? this.posBeforeChild(s) + s.size : this.posAtStart;
      } else {
        let o, s;
        if (e == this.contentDOM)
          o = e.childNodes[t];
        else {
          for (; e.parentNode != this.contentDOM; )
            e = e.parentNode;
          o = e.nextSibling;
        }
        for (; o && !((s = o.pmViewDesc) && s.parent == this); )
          o = o.nextSibling;
        return o ? this.posBeforeChild(s) : this.posAtEnd;
      }
    let i;
    if (e == this.dom && this.contentDOM)
      i = t > Oe(this.contentDOM);
    else if (this.contentDOM && this.contentDOM != this.dom && this.dom.contains(this.contentDOM))
      i = e.compareDocumentPosition(this.contentDOM) & 2;
    else if (this.dom.firstChild) {
      if (t == 0)
        for (let o = e; ; o = o.parentNode) {
          if (o == this.dom) {
            i = !1;
            break;
          }
          if (o.previousSibling)
            break;
        }
      if (i == null && t == e.childNodes.length)
        for (let o = e; ; o = o.parentNode) {
          if (o == this.dom) {
            i = !0;
            break;
          }
          if (o.nextSibling)
            break;
        }
    }
    return (i == null ? r > 0 : i) ? this.posAtEnd : this.posAtStart;
  }
  nearestDesc(e, t = !1) {
    for (let r = !0, i = e; i; i = i.parentNode) {
      let o = this.getDesc(i), s;
      if (o && (!t || o.node))
        if (r && (s = o.nodeDOM) && !(s.nodeType == 1 ? s.contains(e.nodeType == 1 ? e : e.parentNode) : s == e))
          r = !1;
        else
          return o;
    }
  }
  getDesc(e) {
    let t = e.pmViewDesc;
    for (let r = t; r; r = r.parent)
      if (r == this)
        return t;
  }
  posFromDOM(e, t, r) {
    for (let i = e; i; i = i.parentNode) {
      let o = this.getDesc(i);
      if (o)
        return o.localPosFromDOM(e, t, r);
    }
    return -1;
  }
  descAt(e) {
    for (let t = 0, r = 0; t < this.children.length; t++) {
      let i = this.children[t], o = r + i.size;
      if (r == e && o != r) {
        for (; !i.border && i.children.length; )
          for (let s = 0; s < i.children.length; s++) {
            let l = i.children[s];
            if (l.size) {
              i = l;
              break;
            }
          }
        return i;
      }
      if (e < o)
        return i.descAt(e - r - i.border);
      r = o;
    }
  }
  domFromPos(e, t) {
    if (!this.contentDOM)
      return { node: this.dom, offset: 0, atom: e + 1 };
    let r = 0, i = 0;
    for (let o = 0; r < this.children.length; r++) {
      let s = this.children[r], l = o + s.size;
      if (l > e || s instanceof Ed) {
        i = e - o;
        break;
      }
      o = l;
    }
    if (i)
      return this.children[r].domFromPos(i - this.children[r].border, t);
    for (let o; r && !(o = this.children[r - 1]).size && o instanceof Sd && o.side >= 0; r--)
      ;
    if (t <= 0) {
      let o, s = !0;
      for (; o = r ? this.children[r - 1] : null, !(!o || o.dom.parentNode == this.contentDOM); r--, s = !1)
        ;
      return o && t && s && !o.border && !o.domAtom ? o.domFromPos(o.size, t) : { node: this.contentDOM, offset: o ? Oe(o.dom) + 1 : 0 };
    } else {
      let o, s = !0;
      for (; o = r < this.children.length ? this.children[r] : null, !(!o || o.dom.parentNode == this.contentDOM); r++, s = !1)
        ;
      return o && s && !o.border && !o.domAtom ? o.domFromPos(0, t) : { node: this.contentDOM, offset: o ? Oe(o.dom) : this.contentDOM.childNodes.length };
    }
  }
  parseRange(e, t, r = 0) {
    if (this.children.length == 0)
      return { node: this.contentDOM, from: e, to: t, fromOffset: 0, toOffset: this.contentDOM.childNodes.length };
    let i = -1, o = -1;
    for (let s = r, l = 0; ; l++) {
      let a = this.children[l], c = s + a.size;
      if (i == -1 && e <= c) {
        let u = s + a.border;
        if (e >= u && t <= c - a.border && a.node && a.contentDOM && this.contentDOM.contains(a.contentDOM))
          return a.parseRange(e, t, u);
        e = s;
        for (let f = l; f > 0; f--) {
          let d = this.children[f - 1];
          if (d.size && d.dom.parentNode == this.contentDOM && !d.emptyChildAt(1)) {
            i = Oe(d.dom) + 1;
            break;
          }
          e -= d.size;
        }
        i == -1 && (i = 0);
      }
      if (i > -1 && (c > t || l == this.children.length - 1)) {
        t = c;
        for (let u = l + 1; u < this.children.length; u++) {
          let f = this.children[u];
          if (f.size && f.dom.parentNode == this.contentDOM && !f.emptyChildAt(-1)) {
            o = Oe(f.dom);
            break;
          }
          t += f.size;
        }
        o == -1 && (o = this.contentDOM.childNodes.length);
        break;
      }
      s = c;
    }
    return { node: this.contentDOM, from: e, to: t, fromOffset: i, toOffset: o };
  }
  emptyChildAt(e) {
    if (this.border || !this.contentDOM || !this.children.length)
      return !1;
    let t = this.children[e < 0 ? 0 : this.children.length - 1];
    return t.size == 0 || t.emptyChildAt(e);
  }
  domAfterPos(e) {
    let { node: t, offset: r } = this.domFromPos(e, 0);
    if (t.nodeType != 1 || r == t.childNodes.length)
      throw new RangeError("No node after pos " + e);
    return t.childNodes[r];
  }
  setSelection(e, t, r, i = !1) {
    let o = Math.min(e, t), s = Math.max(e, t);
    for (let h = 0, p = 0; h < this.children.length; h++) {
      let m = this.children[h], g = p + m.size;
      if (o > p && s < g)
        return m.setSelection(e - p - m.border, t - p - m.border, r, i);
      p = g;
    }
    let l = this.domFromPos(e, e ? -1 : 1), a = t == e ? l : this.domFromPos(t, t ? -1 : 1), c = r.root.getSelection(), u = r.domSelectionRange(), f = !1;
    if ((xt || Be) && e == t) {
      let { node: h, offset: p } = l;
      if (h.nodeType == 3) {
        if (f = !!(p && h.nodeValue[p - 1] == `
`), f && p == h.nodeValue.length)
          for (let m = h, g; m; m = m.parentNode) {
            if (g = m.nextSibling) {
              g.nodeName == "BR" && (l = a = { node: g.parentNode, offset: Oe(g) + 1 });
              break;
            }
            let v = m.pmViewDesc;
            if (v && v.node && v.node.isBlock)
              break;
          }
      } else {
        let m = h.childNodes[p - 1];
        f = m && (m.nodeName == "BR" || m.contentEditable == "false");
      }
    }
    if (xt && u.focusNode && u.focusNode != a.node && u.focusNode.nodeType == 1) {
      let h = u.focusNode.childNodes[u.focusOffset];
      h && h.contentEditable == "false" && (i = !0);
    }
    if (!(i || f && Be) && Gn(l.node, l.offset, u.anchorNode, u.anchorOffset) && Gn(a.node, a.offset, u.focusNode, u.focusOffset))
      return;
    let d = !1;
    if ((c.extend || e == t) && !f) {
      c.collapse(l.node, l.offset);
      try {
        e != t && c.extend(a.node, a.offset), d = !0;
      } catch {
      }
    }
    if (!d) {
      if (e > t) {
        let p = l;
        l = a, a = p;
      }
      let h = document.createRange();
      h.setEnd(a.node, a.offset), h.setStart(l.node, l.offset), c.removeAllRanges(), c.addRange(h);
    }
  }
  ignoreMutation(e) {
    return !this.contentDOM && e.type != "selection";
  }
  get contentLost() {
    return this.contentDOM && this.contentDOM != this.dom && !this.dom.contains(this.contentDOM);
  }
  markDirty(e, t) {
    for (let r = 0, i = 0; i < this.children.length; i++) {
      let o = this.children[i], s = r + o.size;
      if (r == s ? e <= s && t >= r : e < s && t > r) {
        let l = r + o.border, a = s - o.border;
        if (e >= l && t <= a) {
          this.dirty = e == r || t == s ? _n : ru, e == l && t == a && (o.contentLost || o.dom.parentNode != this.contentDOM) ? o.dirty = Pt : o.markDirty(e - l, t - l);
          return;
        } else
          o.dirty = o.dom == o.contentDOM && o.dom.parentNode == this.contentDOM && !o.children.length ? _n : Pt;
      }
      r = s;
    }
    this.dirty = _n;
  }
  markParentsDirty() {
    let e = 1;
    for (let t = this.parent; t; t = t.parent, e++) {
      let r = e == 1 ? _n : ru;
      t.dirty < r && (t.dirty = r);
    }
  }
  get domAtom() {
    return !1;
  }
  get ignoreForCoords() {
    return !1;
  }
  isText(e) {
    return !1;
  }
}
class Sd extends Fi {
  constructor(e, t, r, i) {
    let o, s = t.type.toDOM;
    if (typeof s == "function" && (s = s(r, () => {
      if (!o)
        return i;
      if (o.parent)
        return o.parent.posBeforeChild(o);
    })), !t.type.spec.raw) {
      if (s.nodeType != 1) {
        let l = document.createElement("span");
        l.appendChild(s), s = l;
      }
      s.contentEditable = "false", s.classList.add("ProseMirror-widget");
    }
    super(e, [], s, null), this.widget = t, this.widget = t, o = this;
  }
  matchesWidget(e) {
    return this.dirty == dt && e.type.eq(this.widget.type);
  }
  parseRule() {
    return { ignore: !0 };
  }
  stopEvent(e) {
    let t = this.widget.spec.stopEvent;
    return t ? t(e) : !1;
  }
  ignoreMutation(e) {
    return e.type != "selection" || this.widget.spec.ignoreSelection;
  }
  destroy() {
    this.widget.type.destroy(this.dom), super.destroy();
  }
  get domAtom() {
    return !0;
  }
  get side() {
    return this.widget.type.side;
  }
}
class Lg extends Fi {
  constructor(e, t, r, i) {
    super(e, [], t, null), this.textDOM = r, this.text = i;
  }
  get size() {
    return this.text.length;
  }
  localPosFromDOM(e, t) {
    return e != this.textDOM ? this.posAtStart + (t ? this.size : 0) : this.posAtStart + t;
  }
  domFromPos(e) {
    return { node: this.textDOM, offset: e };
  }
  ignoreMutation(e) {
    return e.type === "characterData" && e.target.nodeValue == e.oldValue;
  }
}
class Yn extends Fi {
  constructor(e, t, r, i, o) {
    super(e, [], r, i), this.mark = t, this.spec = o;
  }
  static create(e, t, r, i) {
    let o = i.nodeViews[t.type.name], s = o && o(t, i, r);
    return (!s || !s.dom) && (s = Zn.renderSpec(document, t.type.spec.toDOM(t, r), null, t.attrs)), new Yn(e, t, s.dom, s.contentDOM || s.dom, s);
  }
  parseRule() {
    return this.dirty & Pt || this.mark.type.spec.reparseInView ? null : { mark: this.mark.type.name, attrs: this.mark.attrs, contentElement: this.contentDOM };
  }
  matchesMark(e) {
    return this.dirty != Pt && this.mark.eq(e);
  }
  markDirty(e, t) {
    if (super.markDirty(e, t), this.dirty != dt) {
      let r = this.parent;
      for (; !r.node; )
        r = r.parent;
      r.dirty < this.dirty && (r.dirty = this.dirty), this.dirty = dt;
    }
  }
  slice(e, t, r) {
    let i = Yn.create(this.parent, this.mark, !0, r), o = this.children, s = this.size;
    t < s && (o = ta(o, t, s, r)), e > 0 && (o = ta(o, 0, e, r));
    for (let l = 0; l < o.length; l++)
      o[l].parent = i;
    return i.children = o, i;
  }
  ignoreMutation(e) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
  }
  destroy() {
    this.spec.destroy && this.spec.destroy(), super.destroy();
  }
}
class wn extends Fi {
  constructor(e, t, r, i, o, s, l, a, c) {
    super(e, [], o, s), this.node = t, this.outerDeco = r, this.innerDeco = i, this.nodeDOM = l;
  }
  static create(e, t, r, i, o, s) {
    let l = o.nodeViews[t.type.name], a, c = l && l(t, o, () => {
      if (!a)
        return s;
      if (a.parent)
        return a.parent.posBeforeChild(a);
    }, r, i), u = c && c.dom, f = c && c.contentDOM;
    if (t.isText) {
      if (!u)
        u = document.createTextNode(t.text);
      else if (u.nodeType != 3)
        throw new RangeError("Text must be rendered as a DOM text node");
    } else
      u || ({ dom: u, contentDOM: f } = Zn.renderSpec(document, t.type.spec.toDOM(t), null, t.attrs));
    !f && !t.isText && u.nodeName != "BR" && (u.hasAttribute("contenteditable") || (u.contentEditable = "false"), t.type.spec.draggable && (u.draggable = !0));
    let d = u;
    return u = Od(u, r, t), c ? a = new Bg(e, t, r, i, u, f || null, d, c, o, s + 1) : t.isText ? new _s(e, t, r, i, u, d, o) : new wn(e, t, r, i, u, f || null, d, o, s + 1);
  }
  parseRule() {
    if (this.node.type.spec.reparseInView)
      return null;
    let e = { node: this.node.type.name, attrs: this.node.attrs };
    if (this.node.type.whitespace == "pre" && (e.preserveWhitespace = "full"), !this.contentDOM)
      e.getContent = () => this.node.content;
    else if (!this.contentLost)
      e.contentElement = this.contentDOM;
    else {
      for (let t = this.children.length - 1; t >= 0; t--) {
        let r = this.children[t];
        if (this.dom.contains(r.dom.parentNode)) {
          e.contentElement = r.dom.parentNode;
          break;
        }
      }
      e.contentElement || (e.getContent = () => C.empty);
    }
    return e;
  }
  matchesNode(e, t, r) {
    return this.dirty == dt && e.eq(this.node) && Ho(t, this.outerDeco) && r.eq(this.innerDeco);
  }
  get size() {
    return this.node.nodeSize;
  }
  get border() {
    return this.node.isLeaf ? 0 : 1;
  }
  updateChildren(e, t) {
    let r = this.node.inlineContent, i = t, o = e.composing ? this.localCompositionInfo(e, t) : null, s = o && o.pos > -1 ? o : null, l = o && o.pos < 0, a = new Fg(this, s && s.node, e);
    Hg(this.node, this.innerDeco, (c, u, f) => {
      c.spec.marks ? a.syncToMarks(c.spec.marks, r, e) : c.type.side >= 0 && !f && a.syncToMarks(u == this.node.childCount ? oe.none : this.node.child(u).marks, r, e), a.placeWidget(c, e, i);
    }, (c, u, f, d) => {
      a.syncToMarks(c.marks, r, e);
      let h;
      a.findNodeMatch(c, u, f, d) || l && e.state.selection.from > i && e.state.selection.to < i + c.nodeSize && (h = a.findIndexWithChild(o.node)) > -1 && a.updateNodeAt(c, u, f, h, e) || a.updateNextNode(c, u, f, e, d, i) || a.addNode(c, u, f, e, i), i += c.nodeSize;
    }), a.syncToMarks([], r, e), this.node.isTextblock && a.addTextblockHacks(), a.destroyRest(), (a.changed || this.dirty == _n) && (s && this.protectLocalComposition(e, s), Cd(this.contentDOM, this.children, e), Or && Vg(this.dom));
  }
  localCompositionInfo(e, t) {
    let { from: r, to: i } = e.state.selection;
    if (!(e.state.selection instanceof X) || r < t || i > t + this.node.content.size)
      return null;
    let o = e.input.compositionNode;
    if (!o || !this.dom.contains(o.parentNode))
      return null;
    if (this.node.inlineContent) {
      let s = o.nodeValue, l = jg(this.node.content, s, r - t, i - t);
      return l < 0 ? null : { node: o, pos: l, text: s };
    } else
      return { node: o, pos: -1, text: "" };
  }
  protectLocalComposition(e, { node: t, pos: r, text: i }) {
    if (this.getDesc(t))
      return;
    let o = t;
    for (; o.parentNode != this.contentDOM; o = o.parentNode) {
      for (; o.previousSibling; )
        o.parentNode.removeChild(o.previousSibling);
      for (; o.nextSibling; )
        o.parentNode.removeChild(o.nextSibling);
      o.pmViewDesc && (o.pmViewDesc = void 0);
    }
    let s = new Lg(this, o, t, i);
    e.input.compositionNodes.push(s), this.children = ta(this.children, r, r + i.length, e, s);
  }
  update(e, t, r, i) {
    return this.dirty == Pt || !e.sameMarkup(this.node) ? !1 : (this.updateInner(e, t, r, i), !0);
  }
  updateInner(e, t, r, i) {
    this.updateOuterDeco(t), this.node = e, this.innerDeco = r, this.contentDOM && this.updateChildren(i, this.posAtStart), this.dirty = dt;
  }
  updateOuterDeco(e) {
    if (Ho(e, this.outerDeco))
      return;
    let t = this.nodeDOM.nodeType != 1, r = this.dom;
    this.dom = Td(this.dom, this.nodeDOM, ea(this.outerDeco, this.node, t), ea(e, this.node, t)), this.dom != r && (r.pmViewDesc = void 0, this.dom.pmViewDesc = this), this.outerDeco = e;
  }
  selectNode() {
    this.nodeDOM.nodeType == 1 && this.nodeDOM.classList.add("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && (this.dom.draggable = !0);
  }
  deselectNode() {
    this.nodeDOM.nodeType == 1 && (this.nodeDOM.classList.remove("ProseMirror-selectednode"), (this.contentDOM || !this.node.type.spec.draggable) && this.dom.removeAttribute("draggable"));
  }
  get domAtom() {
    return this.node.isAtom;
  }
}
function iu(n, e, t, r, i) {
  Od(r, e, n);
  let o = new wn(void 0, n, e, t, r, r, r, i, 0);
  return o.contentDOM && o.updateChildren(i, 0), o;
}
class _s extends wn {
  constructor(e, t, r, i, o, s, l) {
    super(e, t, r, i, o, null, s, l, 0);
  }
  parseRule() {
    let e = this.nodeDOM.parentNode;
    for (; e && e != this.dom && !e.pmIsDeco; )
      e = e.parentNode;
    return { skip: e || !0 };
  }
  update(e, t, r, i) {
    return this.dirty == Pt || this.dirty != dt && !this.inParent() || !e.sameMarkup(this.node) ? !1 : (this.updateOuterDeco(t), (this.dirty != dt || e.text != this.node.text) && e.text != this.nodeDOM.nodeValue && (this.nodeDOM.nodeValue = e.text, i.trackWrites == this.nodeDOM && (i.trackWrites = null)), this.node = e, this.dirty = dt, !0);
  }
  inParent() {
    let e = this.parent.contentDOM;
    for (let t = this.nodeDOM; t; t = t.parentNode)
      if (t == e)
        return !0;
    return !1;
  }
  domFromPos(e) {
    return { node: this.nodeDOM, offset: e };
  }
  localPosFromDOM(e, t, r) {
    return e == this.nodeDOM ? this.posAtStart + Math.min(t, this.node.text.length) : super.localPosFromDOM(e, t, r);
  }
  ignoreMutation(e) {
    return e.type != "characterData" && e.type != "selection";
  }
  slice(e, t, r) {
    let i = this.node.cut(e, t), o = document.createTextNode(i.text);
    return new _s(this.parent, i, this.outerDeco, this.innerDeco, o, o, r);
  }
  markDirty(e, t) {
    super.markDirty(e, t), this.dom != this.nodeDOM && (e == 0 || t == this.nodeDOM.nodeValue.length) && (this.dirty = Pt);
  }
  get domAtom() {
    return !1;
  }
  isText(e) {
    return this.node.text == e;
  }
}
class Ed extends Fi {
  parseRule() {
    return { ignore: !0 };
  }
  matchesHack(e) {
    return this.dirty == dt && this.dom.nodeName == e;
  }
  get domAtom() {
    return !0;
  }
  get ignoreForCoords() {
    return this.dom.nodeName == "IMG";
  }
}
class Bg extends wn {
  constructor(e, t, r, i, o, s, l, a, c, u) {
    super(e, t, r, i, o, s, l, c, u), this.spec = a;
  }
  update(e, t, r, i) {
    if (this.dirty == Pt)
      return !1;
    if (this.spec.update && (this.node.type == e.type || this.spec.multiType)) {
      let o = this.spec.update(e, t, r);
      return o && this.updateInner(e, t, r, i), o;
    } else
      return !this.contentDOM && !e.isLeaf ? !1 : super.update(e, t, r, i);
  }
  selectNode() {
    this.spec.selectNode ? this.spec.selectNode() : super.selectNode();
  }
  deselectNode() {
    this.spec.deselectNode ? this.spec.deselectNode() : super.deselectNode();
  }
  setSelection(e, t, r, i) {
    this.spec.setSelection ? this.spec.setSelection(e, t, r.root) : super.setSelection(e, t, r, i);
  }
  destroy() {
    this.spec.destroy && this.spec.destroy(), super.destroy();
  }
  stopEvent(e) {
    return this.spec.stopEvent ? this.spec.stopEvent(e) : !1;
  }
  ignoreMutation(e) {
    return this.spec.ignoreMutation ? this.spec.ignoreMutation(e) : super.ignoreMutation(e);
  }
}
function Cd(n, e, t) {
  let r = n.firstChild, i = !1;
  for (let o = 0; o < e.length; o++) {
    let s = e[o], l = s.dom;
    if (l.parentNode == n) {
      for (; l != r; )
        r = ou(r), i = !0;
      r = r.nextSibling;
    } else
      i = !0, n.insertBefore(l, r);
    if (s instanceof Yn) {
      let a = r ? r.previousSibling : n.lastChild;
      Cd(s.contentDOM, s.children, t), r = a ? a.nextSibling : n.firstChild;
    }
  }
  for (; r; )
    r = ou(r), i = !0;
  i && t.trackWrites == n && (t.trackWrites = null);
}
const ai = function(n) {
  n && (this.nodeName = n);
};
ai.prototype = /* @__PURE__ */ Object.create(null);
const Fn = [new ai()];
function ea(n, e, t) {
  if (n.length == 0)
    return Fn;
  let r = t ? Fn[0] : new ai(), i = [r];
  for (let o = 0; o < n.length; o++) {
    let s = n[o].type.attrs;
    if (!!s) {
      s.nodeName && i.push(r = new ai(s.nodeName));
      for (let l in s) {
        let a = s[l];
        a != null && (t && i.length == 1 && i.push(r = new ai(e.isInline ? "span" : "div")), l == "class" ? r.class = (r.class ? r.class + " " : "") + a : l == "style" ? r.style = (r.style ? r.style + ";" : "") + a : l != "nodeName" && (r[l] = a));
      }
    }
  }
  return i;
}
function Td(n, e, t, r) {
  if (t == Fn && r == Fn)
    return e;
  let i = e;
  for (let o = 0; o < r.length; o++) {
    let s = r[o], l = t[o];
    if (o) {
      let a;
      l && l.nodeName == s.nodeName && i != n && (a = i.parentNode) && a.nodeName.toLowerCase() == s.nodeName || (a = document.createElement(s.nodeName), a.pmIsDeco = !0, a.appendChild(i), l = Fn[0]), i = a;
    }
    _g(i, l || Fn[0], s);
  }
  return i;
}
function _g(n, e, t) {
  for (let r in e)
    r != "class" && r != "style" && r != "nodeName" && !(r in t) && n.removeAttribute(r);
  for (let r in t)
    r != "class" && r != "style" && r != "nodeName" && t[r] != e[r] && n.setAttribute(r, t[r]);
  if (e.class != t.class) {
    let r = e.class ? e.class.split(" ").filter(Boolean) : [], i = t.class ? t.class.split(" ").filter(Boolean) : [];
    for (let o = 0; o < r.length; o++)
      i.indexOf(r[o]) == -1 && n.classList.remove(r[o]);
    for (let o = 0; o < i.length; o++)
      r.indexOf(i[o]) == -1 && n.classList.add(i[o]);
    n.classList.length == 0 && n.removeAttribute("class");
  }
  if (e.style != t.style) {
    if (e.style) {
      let r = /\s*([\w\-\xa1-\uffff]+)\s*:(?:"(?:\\.|[^"])*"|'(?:\\.|[^'])*'|\(.*?\)|[^;])*/g, i;
      for (; i = r.exec(e.style); )
        n.style.removeProperty(i[1]);
    }
    t.style && (n.style.cssText += t.style);
  }
}
function Od(n, e, t) {
  return Td(n, n, Fn, ea(e, t, n.nodeType != 1));
}
function Ho(n, e) {
  if (n.length != e.length)
    return !1;
  for (let t = 0; t < n.length; t++)
    if (!n[t].type.eq(e[t].type))
      return !1;
  return !0;
}
function ou(n) {
  let e = n.nextSibling;
  return n.parentNode.removeChild(n), e;
}
class Fg {
  constructor(e, t, r) {
    this.lock = t, this.view = r, this.index = 0, this.stack = [], this.changed = !1, this.top = e, this.preMatch = $g(e.node.content, e);
  }
  destroyBetween(e, t) {
    if (e != t) {
      for (let r = e; r < t; r++)
        this.top.children[r].destroy();
      this.top.children.splice(e, t - e), this.changed = !0;
    }
  }
  destroyRest() {
    this.destroyBetween(this.index, this.top.children.length);
  }
  syncToMarks(e, t, r) {
    let i = 0, o = this.stack.length >> 1, s = Math.min(o, e.length);
    for (; i < s && (i == o - 1 ? this.top : this.stack[i + 1 << 1]).matchesMark(e[i]) && e[i].type.spec.spanning !== !1; )
      i++;
    for (; i < o; )
      this.destroyRest(), this.top.dirty = dt, this.index = this.stack.pop(), this.top = this.stack.pop(), o--;
    for (; o < e.length; ) {
      this.stack.push(this.top, this.index + 1);
      let l = -1;
      for (let a = this.index; a < Math.min(this.index + 3, this.top.children.length); a++) {
        let c = this.top.children[a];
        if (c.matchesMark(e[o]) && !this.isLocked(c.dom)) {
          l = a;
          break;
        }
      }
      if (l > -1)
        l > this.index && (this.changed = !0, this.destroyBetween(this.index, l)), this.top = this.top.children[this.index];
      else {
        let a = Yn.create(this.top, e[o], t, r);
        this.top.children.splice(this.index, 0, a), this.top = a, this.changed = !0;
      }
      this.index = 0, o++;
    }
  }
  findNodeMatch(e, t, r, i) {
    let o = -1, s;
    if (i >= this.preMatch.index && (s = this.preMatch.matches[i - this.preMatch.index]).parent == this.top && s.matchesNode(e, t, r))
      o = this.top.children.indexOf(s, this.index);
    else
      for (let l = this.index, a = Math.min(this.top.children.length, l + 5); l < a; l++) {
        let c = this.top.children[l];
        if (c.matchesNode(e, t, r) && !this.preMatch.matched.has(c)) {
          o = l;
          break;
        }
      }
    return o < 0 ? !1 : (this.destroyBetween(this.index, o), this.index++, !0);
  }
  updateNodeAt(e, t, r, i, o) {
    let s = this.top.children[i];
    return s.dirty == Pt && s.dom == s.contentDOM && (s.dirty = _n), s.update(e, t, r, o) ? (this.destroyBetween(this.index, i), this.index++, !0) : !1;
  }
  findIndexWithChild(e) {
    for (; ; ) {
      let t = e.parentNode;
      if (!t)
        return -1;
      if (t == this.top.contentDOM) {
        let r = e.pmViewDesc;
        if (r) {
          for (let i = this.index; i < this.top.children.length; i++)
            if (this.top.children[i] == r)
              return i;
        }
        return -1;
      }
      e = t;
    }
  }
  updateNextNode(e, t, r, i, o, s) {
    for (let l = this.index; l < this.top.children.length; l++) {
      let a = this.top.children[l];
      if (a instanceof wn) {
        let c = this.preMatch.matched.get(a);
        if (c != null && c != o)
          return !1;
        let u = a.dom, f, d = this.isLocked(u) && !(e.isText && a.node && a.node.isText && a.nodeDOM.nodeValue == e.text && a.dirty != Pt && Ho(t, a.outerDeco));
        if (!d && a.update(e, t, r, i))
          return this.destroyBetween(this.index, l), a.dom != u && (this.changed = !0), this.index++, !0;
        if (!d && (f = this.recreateWrapper(a, e, t, r, i, s)))
          return this.destroyBetween(this.index, l), this.top.children[this.index] = f, f.contentDOM && (f.dirty = _n, f.updateChildren(i, s + 1), f.dirty = dt), this.changed = !0, this.index++, !0;
        break;
      }
    }
    return !1;
  }
  recreateWrapper(e, t, r, i, o, s) {
    if (e.dirty || t.isAtom || !e.children.length || !e.node.content.eq(t.content) || !Ho(r, e.outerDeco) || !i.eq(e.innerDeco))
      return null;
    let l = wn.create(this.top, t, r, i, o, s);
    if (l.contentDOM) {
      l.children = e.children, e.children = [];
      for (let a of l.children)
        a.parent = l;
    }
    return e.destroy(), l;
  }
  addNode(e, t, r, i, o) {
    let s = wn.create(this.top, e, t, r, i, o);
    s.contentDOM && s.updateChildren(i, o + 1), this.top.children.splice(this.index++, 0, s), this.changed = !0;
  }
  placeWidget(e, t, r) {
    let i = this.index < this.top.children.length ? this.top.children[this.index] : null;
    if (i && i.matchesWidget(e) && (e == i.widget || !i.widget.type.toDOM.parentNode))
      this.index++;
    else {
      let o = new Sd(this.top, e, t, r);
      this.top.children.splice(this.index++, 0, o), this.changed = !0;
    }
  }
  addTextblockHacks() {
    let e = this.top.children[this.index - 1], t = this.top;
    for (; e instanceof Yn; )
      t = e, e = t.children[t.children.length - 1];
    (!e || !(e instanceof _s) || /\n$/.test(e.node.text) || this.view.requiresGeckoHackNode && /\s$/.test(e.node.text)) && ((Be || Ie) && e && e.dom.contentEditable == "false" && this.addHackNode("IMG", t), this.addHackNode("BR", this.top));
  }
  addHackNode(e, t) {
    if (t == this.top && this.index < t.children.length && t.children[this.index].matchesHack(e))
      this.index++;
    else {
      let r = document.createElement(e);
      e == "IMG" && (r.className = "ProseMirror-separator", r.alt = ""), e == "BR" && (r.className = "ProseMirror-trailingBreak");
      let i = new Ed(this.top, [], r, null);
      t != this.top ? t.children.push(i) : t.children.splice(this.index++, 0, i), this.changed = !0;
    }
  }
  isLocked(e) {
    return this.lock && (e == this.lock || e.nodeType == 1 && e.contains(this.lock.parentNode));
  }
}
function $g(n, e) {
  let t = e, r = t.children.length, i = n.childCount, o = /* @__PURE__ */ new Map(), s = [];
  e:
    for (; i > 0; ) {
      let l;
      for (; ; )
        if (r) {
          let c = t.children[r - 1];
          if (c instanceof Yn)
            t = c, r = c.children.length;
          else {
            l = c, r--;
            break;
          }
        } else {
          if (t == e)
            break e;
          r = t.parent.children.indexOf(t), t = t.parent;
        }
      let a = l.node;
      if (!!a) {
        if (a != n.child(i - 1))
          break;
        --i, o.set(l, i), s.push(l);
      }
    }
  return { index: i, matched: o, matches: s.reverse() };
}
function zg(n, e) {
  return n.type.side - e.type.side;
}
function Hg(n, e, t, r) {
  let i = e.locals(n), o = 0;
  if (i.length == 0) {
    for (let c = 0; c < n.childCount; c++) {
      let u = n.child(c);
      r(u, i, e.forChild(o, u), c), o += u.nodeSize;
    }
    return;
  }
  let s = 0, l = [], a = null;
  for (let c = 0; ; ) {
    let u, f;
    for (; s < i.length && i[s].to == o; ) {
      let g = i[s++];
      g.widget && (u ? (f || (f = [u])).push(g) : u = g);
    }
    if (u)
      if (f) {
        f.sort(zg);
        for (let g = 0; g < f.length; g++)
          t(f[g], c, !!a);
      } else
        t(u, c, !!a);
    let d, h;
    if (a)
      h = -1, d = a, a = null;
    else if (c < n.childCount)
      h = c, d = n.child(c++);
    else
      break;
    for (let g = 0; g < l.length; g++)
      l[g].to <= o && l.splice(g--, 1);
    for (; s < i.length && i[s].from <= o && i[s].to > o; )
      l.push(i[s++]);
    let p = o + d.nodeSize;
    if (d.isText) {
      let g = p;
      s < i.length && i[s].from < g && (g = i[s].from);
      for (let v = 0; v < l.length; v++)
        l[v].to < g && (g = l[v].to);
      g < p && (a = d.cut(g - o), d = d.cut(0, g - o), p = g, h = -1);
    } else
      for (; s < i.length && i[s].to < p; )
        s++;
    let m = d.isInline && !d.isLeaf ? l.filter((g) => !g.inline) : l.slice();
    r(d, m, e.forChild(o, d), h), o = p;
  }
}
function Vg(n) {
  if (n.nodeName == "UL" || n.nodeName == "OL") {
    let e = n.style.cssText;
    n.style.cssText = e + "; list-style: square !important", window.getComputedStyle(n).listStyle, n.style.cssText = e;
  }
}
function jg(n, e, t, r) {
  for (let i = 0, o = 0; i < n.childCount && o <= r; ) {
    let s = n.child(i++), l = o;
    if (o += s.nodeSize, !s.isText)
      continue;
    let a = s.text;
    for (; i < n.childCount; ) {
      let c = n.child(i++);
      if (o += c.nodeSize, !c.isText)
        break;
      a += c.text;
    }
    if (o >= t) {
      if (o >= r && a.slice(r - e.length - l, r - l) == e)
        return r - e.length;
      let c = l < r ? a.lastIndexOf(e, r - l - 1) : -1;
      if (c >= 0 && c + e.length + l >= t)
        return l + c;
      if (t == r && a.length >= r + e.length - l && a.slice(r - l, r - l + e.length) == e)
        return r;
    }
  }
  return -1;
}
function ta(n, e, t, r, i) {
  let o = [];
  for (let s = 0, l = 0; s < n.length; s++) {
    let a = n[s], c = l, u = l += a.size;
    c >= t || u <= e ? o.push(a) : (c < e && o.push(a.slice(0, e - c, r)), i && (o.push(i), i = void 0), u > t && o.push(a.slice(t - c, a.size, r)));
  }
  return o;
}
function Fa(n, e = null) {
  let t = n.domSelectionRange(), r = n.state.doc;
  if (!t.focusNode)
    return null;
  let i = n.docView.nearestDesc(t.focusNode), o = i && i.size == 0, s = n.docView.posFromDOM(t.focusNode, t.focusOffset, 1);
  if (s < 0)
    return null;
  let l = r.resolve(s), a, c;
  if (Bs(t)) {
    for (a = s; i && !i.node; )
      i = i.parent;
    let f = i.node;
    if (i && f.isAtom && z.isSelectable(f) && i.parent && !(f.isInline && mg(t.focusNode, t.focusOffset, i.dom))) {
      let d = i.posBefore;
      c = new z(s == d ? l : r.resolve(d));
    }
  } else {
    if (t instanceof n.dom.ownerDocument.defaultView.Selection && t.rangeCount > 1) {
      let f = s, d = s;
      for (let h = 0; h < t.rangeCount; h++) {
        let p = t.getRangeAt(h);
        f = Math.min(f, n.docView.posFromDOM(p.startContainer, p.startOffset, 1)), d = Math.max(d, n.docView.posFromDOM(p.endContainer, p.endOffset, -1));
      }
      if (f < 0)
        return null;
      [a, s] = d == n.state.selection.anchor ? [d, f] : [f, d], l = r.resolve(s);
    } else
      a = n.docView.posFromDOM(t.anchorNode, t.anchorOffset, 1);
    if (a < 0)
      return null;
  }
  let u = r.resolve(a);
  if (!c) {
    let f = e == "pointer" || n.state.selection.head < l.pos && !o ? 1 : -1;
    c = $a(n, u, l, f);
  }
  return c;
}
function Md(n) {
  return n.editable ? n.hasFocus() : Dd(n) && document.activeElement && document.activeElement.contains(n.dom);
}
function Gt(n, e = !1) {
  let t = n.state.selection;
  if (Ad(n, t), !!Md(n)) {
    if (!e && n.input.mouseDown && n.input.mouseDown.allowDefault && Ie) {
      let r = n.domSelectionRange(), i = n.domObserver.currentSelection;
      if (r.anchorNode && i.anchorNode && Gn(r.anchorNode, r.anchorOffset, i.anchorNode, i.anchorOffset)) {
        n.input.mouseDown.delayedSelectionSync = !0, n.domObserver.setCurSelection();
        return;
      }
    }
    if (n.domObserver.disconnectSelection(), n.cursorWrapper)
      Ug(n);
    else {
      let { anchor: r, head: i } = t, o, s;
      su && !(t instanceof X) && (t.$from.parent.inlineContent || (o = lu(n, t.from)), !t.empty && !t.$from.parent.inlineContent && (s = lu(n, t.to))), n.docView.setSelection(r, i, n, e), su && (o && au(o), s && au(s)), t.visible ? n.dom.classList.remove("ProseMirror-hideselection") : (n.dom.classList.add("ProseMirror-hideselection"), "onselectionchange" in document && Wg(n));
    }
    n.domObserver.setCurSelection(), n.domObserver.connectSelection();
  }
}
const su = Be || Ie && gd < 63;
function lu(n, e) {
  let { node: t, offset: r } = n.docView.domFromPos(e, 0), i = r < t.childNodes.length ? t.childNodes[r] : null, o = r ? t.childNodes[r - 1] : null;
  if (Be && i && i.contentEditable == "false")
    return gl(i);
  if ((!i || i.contentEditable == "false") && (!o || o.contentEditable == "false")) {
    if (i)
      return gl(i);
    if (o)
      return gl(o);
  }
}
function gl(n) {
  return n.contentEditable = "true", Be && n.draggable && (n.draggable = !1, n.wasDraggable = !0), n;
}
function au(n) {
  n.contentEditable = "false", n.wasDraggable && (n.draggable = !0, n.wasDraggable = null);
}
function Wg(n) {
  let e = n.dom.ownerDocument;
  e.removeEventListener("selectionchange", n.input.hideSelectionGuard);
  let t = n.domSelectionRange(), r = t.anchorNode, i = t.anchorOffset;
  e.addEventListener("selectionchange", n.input.hideSelectionGuard = () => {
    (t.anchorNode != r || t.anchorOffset != i) && (e.removeEventListener("selectionchange", n.input.hideSelectionGuard), setTimeout(() => {
      (!Md(n) || n.state.selection.visible) && n.dom.classList.remove("ProseMirror-hideselection");
    }, 20));
  });
}
function Ug(n) {
  let e = n.domSelection(), t = document.createRange();
  if (!e)
    return;
  let r = n.cursorWrapper.dom, i = r.nodeName == "IMG";
  i ? t.setStart(r.parentNode, Oe(r) + 1) : t.setStart(r, 0), t.collapse(!0), e.removeAllRanges(), e.addRange(t), !i && !n.state.selection.visible && Je && bn <= 11 && (r.disabled = !0, r.disabled = !1);
}
function Ad(n, e) {
  if (e instanceof z) {
    let t = n.docView.descAt(e.from);
    t != n.lastSelectedViewDesc && (cu(n), t && t.selectNode(), n.lastSelectedViewDesc = t);
  } else
    cu(n);
}
function cu(n) {
  n.lastSelectedViewDesc && (n.lastSelectedViewDesc.parent && n.lastSelectedViewDesc.deselectNode(), n.lastSelectedViewDesc = void 0);
}
function $a(n, e, t, r) {
  return n.someProp("createSelectionBetween", (i) => i(n, e, t)) || X.between(e, t, r);
}
function uu(n) {
  return n.editable && !n.hasFocus() ? !1 : Dd(n);
}
function Dd(n) {
  let e = n.domSelectionRange();
  if (!e.anchorNode)
    return !1;
  try {
    return n.dom.contains(e.anchorNode.nodeType == 3 ? e.anchorNode.parentNode : e.anchorNode) && (n.editable || n.dom.contains(e.focusNode.nodeType == 3 ? e.focusNode.parentNode : e.focusNode));
  } catch {
    return !1;
  }
}
function Kg(n) {
  let e = n.docView.domFromPos(n.state.selection.anchor, 0), t = n.domSelectionRange();
  return Gn(e.node, e.offset, t.anchorNode, t.anchorOffset);
}
function na(n, e) {
  let { $anchor: t, $head: r } = n.selection, i = e > 0 ? t.max(r) : t.min(r), o = i.parent.inlineContent ? i.depth ? n.doc.resolve(e > 0 ? i.after() : i.before()) : null : i;
  return o && Z.findFrom(o, e);
}
function ln(n, e) {
  return n.dispatch(n.state.tr.setSelection(e).scrollIntoView()), !0;
}
function fu(n, e, t) {
  let r = n.state.selection;
  if (r instanceof X)
    if (t.indexOf("s") > -1) {
      let { $head: i } = r, o = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter;
      if (!o || o.isText || !o.isLeaf)
        return !1;
      let s = n.state.doc.resolve(i.pos + o.nodeSize * (e < 0 ? -1 : 1));
      return ln(n, new X(r.$anchor, s));
    } else if (r.empty) {
      if (n.endOfTextblock(e > 0 ? "forward" : "backward")) {
        let i = na(n.state, e);
        return i && i instanceof z ? ln(n, i) : !1;
      } else if (!(at && t.indexOf("m") > -1)) {
        let i = r.$head, o = i.textOffset ? null : e < 0 ? i.nodeBefore : i.nodeAfter, s;
        if (!o || o.isText)
          return !1;
        let l = e < 0 ? i.pos - o.nodeSize : i.pos;
        return o.isAtom || (s = n.docView.descAt(l)) && !s.contentDOM ? z.isSelectable(o) ? ln(n, new z(e < 0 ? n.state.doc.resolve(i.pos - o.nodeSize) : i)) : _i ? ln(n, new X(n.state.doc.resolve(e < 0 ? l : l + o.nodeSize))) : !1 : !1;
      }
    } else
      return !1;
  else {
    if (r instanceof z && r.node.isInline)
      return ln(n, new X(e > 0 ? r.$to : r.$from));
    {
      let i = na(n.state, e);
      return i ? ln(n, i) : !1;
    }
  }
}
function Vo(n) {
  return n.nodeType == 3 ? n.nodeValue.length : n.childNodes.length;
}
function ci(n, e) {
  let t = n.pmViewDesc;
  return t && t.size == 0 && (e < 0 || n.nextSibling || n.nodeName != "BR");
}
function cr(n, e) {
  return e < 0 ? qg(n) : Jg(n);
}
function qg(n) {
  let e = n.domSelectionRange(), t = e.focusNode, r = e.focusOffset;
  if (!t)
    return;
  let i, o, s = !1;
  for (xt && t.nodeType == 1 && r < Vo(t) && ci(t.childNodes[r], -1) && (s = !0); ; )
    if (r > 0) {
      if (t.nodeType != 1)
        break;
      {
        let l = t.childNodes[r - 1];
        if (ci(l, -1))
          i = t, o = --r;
        else if (l.nodeType == 3)
          t = l, r = t.nodeValue.length;
        else
          break;
      }
    } else {
      if (Nd(t))
        break;
      {
        let l = t.previousSibling;
        for (; l && ci(l, -1); )
          i = t.parentNode, o = Oe(l), l = l.previousSibling;
        if (l)
          t = l, r = Vo(t);
        else {
          if (t = t.parentNode, t == n.dom)
            break;
          r = 0;
        }
      }
    }
  s ? ra(n, t, r) : i && ra(n, i, o);
}
function Jg(n) {
  let e = n.domSelectionRange(), t = e.focusNode, r = e.focusOffset;
  if (!t)
    return;
  let i = Vo(t), o, s;
  for (; ; )
    if (r < i) {
      if (t.nodeType != 1)
        break;
      let l = t.childNodes[r];
      if (ci(l, 1))
        o = t, s = ++r;
      else
        break;
    } else {
      if (Nd(t))
        break;
      {
        let l = t.nextSibling;
        for (; l && ci(l, 1); )
          o = l.parentNode, s = Oe(l) + 1, l = l.nextSibling;
        if (l)
          t = l, r = 0, i = Vo(t);
        else {
          if (t = t.parentNode, t == n.dom)
            break;
          r = i = 0;
        }
      }
    }
  o && ra(n, o, s);
}
function Nd(n) {
  let e = n.pmViewDesc;
  return e && e.node && e.node.isBlock;
}
function Gg(n, e) {
  for (; n && e == n.childNodes.length && !Bi(n); )
    e = Oe(n) + 1, n = n.parentNode;
  for (; n && e < n.childNodes.length; ) {
    let t = n.childNodes[e];
    if (t.nodeType == 3)
      return t;
    if (t.nodeType == 1 && t.contentEditable == "false")
      break;
    n = t, e = 0;
  }
}
function Yg(n, e) {
  for (; n && !e && !Bi(n); )
    e = Oe(n), n = n.parentNode;
  for (; n && e; ) {
    let t = n.childNodes[e - 1];
    if (t.nodeType == 3)
      return t;
    if (t.nodeType == 1 && t.contentEditable == "false")
      break;
    n = t, e = n.childNodes.length;
  }
}
function ra(n, e, t) {
  if (e.nodeType != 3) {
    let o, s;
    (s = Gg(e, t)) ? (e = s, t = 0) : (o = Yg(e, t)) && (e = o, t = o.nodeValue.length);
  }
  let r = n.domSelection();
  if (!r)
    return;
  if (Bs(r)) {
    let o = document.createRange();
    o.setEnd(e, t), o.setStart(e, t), r.removeAllRanges(), r.addRange(o);
  } else
    r.extend && r.extend(e, t);
  n.domObserver.setCurSelection();
  let { state: i } = n;
  setTimeout(() => {
    n.state == i && Gt(n);
  }, 50);
}
function du(n, e) {
  let t = n.state.doc.resolve(e);
  if (!(Ie || vg) && t.parent.inlineContent) {
    let i = n.coordsAtPos(e);
    if (e > t.start()) {
      let o = n.coordsAtPos(e - 1), s = (o.top + o.bottom) / 2;
      if (s > i.top && s < i.bottom && Math.abs(o.left - i.left) > 1)
        return o.left < i.left ? "ltr" : "rtl";
    }
    if (e < t.end()) {
      let o = n.coordsAtPos(e + 1), s = (o.top + o.bottom) / 2;
      if (s > i.top && s < i.bottom && Math.abs(o.left - i.left) > 1)
        return o.left > i.left ? "ltr" : "rtl";
    }
  }
  return getComputedStyle(n.dom).direction == "rtl" ? "rtl" : "ltr";
}
function hu(n, e, t) {
  let r = n.state.selection;
  if (r instanceof X && !r.empty || t.indexOf("s") > -1 || at && t.indexOf("m") > -1)
    return !1;
  let { $from: i, $to: o } = r;
  if (!i.parent.inlineContent || n.endOfTextblock(e < 0 ? "up" : "down")) {
    let s = na(n.state, e);
    if (s && s instanceof z)
      return ln(n, s);
  }
  if (!i.parent.inlineContent) {
    let s = e < 0 ? i : o, l = r instanceof ft ? Z.near(s, e) : Z.findFrom(s, e);
    return l ? ln(n, l) : !1;
  }
  return !1;
}
function pu(n, e) {
  if (!(n.state.selection instanceof X))
    return !0;
  let { $head: t, $anchor: r, empty: i } = n.state.selection;
  if (!t.sameParent(r))
    return !0;
  if (!i)
    return !1;
  if (n.endOfTextblock(e > 0 ? "forward" : "backward"))
    return !0;
  let o = !t.textOffset && (e < 0 ? t.nodeBefore : t.nodeAfter);
  if (o && !o.isText) {
    let s = n.state.tr;
    return e < 0 ? s.delete(t.pos - o.nodeSize, t.pos) : s.delete(t.pos, t.pos + o.nodeSize), n.dispatch(s), !0;
  }
  return !1;
}
function mu(n, e, t) {
  n.domObserver.stop(), e.contentEditable = t, n.domObserver.start();
}
function Xg(n) {
  if (!Be || n.state.selection.$head.parentOffset > 0)
    return !1;
  let { focusNode: e, focusOffset: t } = n.domSelectionRange();
  if (e && e.nodeType == 1 && t == 0 && e.firstChild && e.firstChild.contentEditable == "false") {
    let r = e.firstChild;
    mu(n, r, "true"), setTimeout(() => mu(n, r, "false"), 20);
  }
  return !1;
}
function Qg(n) {
  let e = "";
  return n.ctrlKey && (e += "c"), n.metaKey && (e += "m"), n.altKey && (e += "a"), n.shiftKey && (e += "s"), e;
}
function Zg(n, e) {
  let t = e.keyCode, r = Qg(e);
  if (t == 8 || at && t == 72 && r == "c")
    return pu(n, -1) || cr(n, -1);
  if (t == 46 && !e.shiftKey || at && t == 68 && r == "c")
    return pu(n, 1) || cr(n, 1);
  if (t == 13 || t == 27)
    return !0;
  if (t == 37 || at && t == 66 && r == "c") {
    let i = t == 37 ? du(n, n.state.selection.from) == "ltr" ? -1 : 1 : -1;
    return fu(n, i, r) || cr(n, i);
  } else if (t == 39 || at && t == 70 && r == "c") {
    let i = t == 39 ? du(n, n.state.selection.from) == "ltr" ? 1 : -1 : 1;
    return fu(n, i, r) || cr(n, i);
  } else {
    if (t == 38 || at && t == 80 && r == "c")
      return hu(n, -1, r) || cr(n, -1);
    if (t == 40 || at && t == 78 && r == "c")
      return Xg(n) || hu(n, 1, r) || cr(n, 1);
    if (r == (at ? "m" : "c") && (t == 66 || t == 73 || t == 89 || t == 90))
      return !0;
  }
  return !1;
}
function za(n, e) {
  n.someProp("transformCopied", (h) => {
    e = h(e, n);
  });
  let t = [], { content: r, openStart: i, openEnd: o } = e;
  for (; i > 1 && o > 1 && r.childCount == 1 && r.firstChild.childCount == 1; ) {
    i--, o--;
    let h = r.firstChild;
    t.push(h.type.name, h.attrs != h.type.defaultAttrs ? h.attrs : null), r = h.content;
  }
  let s = n.someProp("clipboardSerializer") || Zn.fromSchema(n.state.schema), l = _d(), a = l.createElement("div");
  a.appendChild(s.serializeFragment(r, { document: l }));
  let c = a.firstChild, u, f = 0;
  for (; c && c.nodeType == 1 && (u = Bd[c.nodeName.toLowerCase()]); ) {
    for (let h = u.length - 1; h >= 0; h--) {
      let p = l.createElement(u[h]);
      for (; a.firstChild; )
        p.appendChild(a.firstChild);
      a.appendChild(p), f++;
    }
    c = a.firstChild;
  }
  c && c.nodeType == 1 && c.setAttribute("data-pm-slice", `${i} ${o}${f ? ` -${f}` : ""} ${JSON.stringify(t)}`);
  let d = n.someProp("clipboardTextSerializer", (h) => h(e, n)) || e.content.textBetween(0, e.content.size, `

`);
  return { dom: a, text: d, slice: e };
}
function Id(n, e, t, r, i) {
  let o = i.parent.type.spec.code, s, l;
  if (!t && !e)
    return null;
  let a = e && (r || o || !t);
  if (a) {
    if (n.someProp("transformPastedText", (d) => {
      e = d(e, o || r, n);
    }), o)
      return e ? new R(C.from(n.state.schema.text(e.replace(/\r\n?/g, `
`))), 0, 0) : R.empty;
    let f = n.someProp("clipboardTextParser", (d) => d(e, i, r, n));
    if (f)
      l = f;
    else {
      let d = i.marks(), { schema: h } = n.state, p = Zn.fromSchema(h);
      s = document.createElement("div"), e.split(/(?:\r\n?|\n)+/).forEach((m) => {
        let g = s.appendChild(document.createElement("p"));
        m && g.appendChild(p.serializeNode(h.text(m, d)));
      });
    }
  } else
    n.someProp("transformPastedHTML", (f) => {
      t = f(t, n);
    }), s = ry(t), _i && iy(s);
  let c = s && s.querySelector("[data-pm-slice]"), u = c && /^(\d+) (\d+)(?: -(\d+))? (.*)/.exec(c.getAttribute("data-pm-slice") || "");
  if (u && u[3])
    for (let f = +u[3]; f > 0; f--) {
      let d = s.firstChild;
      for (; d && d.nodeType != 1; )
        d = d.nextSibling;
      if (!d)
        break;
      s = d;
    }
  if (l || (l = (n.someProp("clipboardParser") || n.someProp("domParser") || vn.fromSchema(n.state.schema)).parseSlice(s, {
    preserveWhitespace: !!(a || u),
    context: i,
    ruleFromNode(d) {
      return d.nodeName == "BR" && !d.nextSibling && d.parentNode && !ey.test(d.parentNode.nodeName) ? { ignore: !0 } : null;
    }
  })), u)
    l = oy(gu(l, +u[1], +u[2]), u[4]);
  else if (l = R.maxOpen(ty(l.content, i), !0), l.openStart || l.openEnd) {
    let f = 0, d = 0;
    for (let h = l.content.firstChild; f < l.openStart && !h.type.spec.isolating; f++, h = h.firstChild)
      ;
    for (let h = l.content.lastChild; d < l.openEnd && !h.type.spec.isolating; d++, h = h.lastChild)
      ;
    l = gu(l, f, d);
  }
  return n.someProp("transformPasted", (f) => {
    l = f(l, n);
  }), l;
}
const ey = /^(a|abbr|acronym|b|cite|code|del|em|i|ins|kbd|label|output|q|ruby|s|samp|span|strong|sub|sup|time|u|tt|var)$/i;
function ty(n, e) {
  if (n.childCount < 2)
    return n;
  for (let t = e.depth; t >= 0; t--) {
    let i = e.node(t).contentMatchAt(e.index(t)), o, s = [];
    if (n.forEach((l) => {
      if (!s)
        return;
      let a = i.findWrapping(l.type), c;
      if (!a)
        return s = null;
      if (c = s.length && o.length && Pd(a, o, l, s[s.length - 1], 0))
        s[s.length - 1] = c;
      else {
        s.length && (s[s.length - 1] = Ld(s[s.length - 1], o.length));
        let u = Rd(l, a);
        s.push(u), i = i.matchType(u.type), o = a;
      }
    }), s)
      return C.from(s);
  }
  return n;
}
function Rd(n, e, t = 0) {
  for (let r = e.length - 1; r >= t; r--)
    n = e[r].create(null, C.from(n));
  return n;
}
function Pd(n, e, t, r, i) {
  if (i < n.length && i < e.length && n[i] == e[i]) {
    let o = Pd(n, e, t, r.lastChild, i + 1);
    if (o)
      return r.copy(r.content.replaceChild(r.childCount - 1, o));
    if (r.contentMatchAt(r.childCount).matchType(i == n.length - 1 ? t.type : n[i + 1]))
      return r.copy(r.content.append(C.from(Rd(t, n, i + 1))));
  }
}
function Ld(n, e) {
  if (e == 0)
    return n;
  let t = n.content.replaceChild(n.childCount - 1, Ld(n.lastChild, e - 1)), r = n.contentMatchAt(n.childCount).fillBefore(C.empty, !0);
  return n.copy(t.append(r));
}
function ia(n, e, t, r, i, o) {
  let s = e < 0 ? n.firstChild : n.lastChild, l = s.content;
  return n.childCount > 1 && (o = 0), i < r - 1 && (l = ia(l, e, t, r, i + 1, o)), i >= t && (l = e < 0 ? s.contentMatchAt(0).fillBefore(l, o <= i).append(l) : l.append(s.contentMatchAt(s.childCount).fillBefore(C.empty, !0))), n.replaceChild(e < 0 ? 0 : n.childCount - 1, s.copy(l));
}
function gu(n, e, t) {
  return e < n.openStart && (n = new R(ia(n.content, -1, e, n.openStart, 0, n.openEnd), e, n.openEnd)), t < n.openEnd && (n = new R(ia(n.content, 1, t, n.openEnd, 0, 0), n.openStart, t)), n;
}
const Bd = {
  thead: ["table"],
  tbody: ["table"],
  tfoot: ["table"],
  caption: ["table"],
  colgroup: ["table"],
  col: ["table", "colgroup"],
  tr: ["table", "tbody"],
  td: ["table", "tbody", "tr"],
  th: ["table", "tbody", "tr"]
};
let yu = null;
function _d() {
  return yu || (yu = document.implementation.createHTMLDocument("title"));
}
let yl = null;
function ny(n) {
  let e = window.trustedTypes;
  return e ? (yl || (yl = e.defaultPolicy || e.createPolicy("ProseMirrorClipboard", { createHTML: (t) => t })), yl.createHTML(n)) : n;
}
function ry(n) {
  let e = /^(\s*<meta [^>]*>)*/.exec(n);
  e && (n = n.slice(e[0].length));
  let t = _d().createElement("div"), r = /<([a-z][^>\s]+)/i.exec(n), i;
  if ((i = r && Bd[r[1].toLowerCase()]) && (n = i.map((o) => "<" + o + ">").join("") + n + i.map((o) => "</" + o + ">").reverse().join("")), t.innerHTML = ny(n), i)
    for (let o = 0; o < i.length; o++)
      t = t.querySelector(i[o]) || t;
  return t;
}
function iy(n) {
  let e = n.querySelectorAll(Ie ? "span:not([class]):not([style])" : "span.Apple-converted-space");
  for (let t = 0; t < e.length; t++) {
    let r = e[t];
    r.childNodes.length == 1 && r.textContent == "\xA0" && r.parentNode && r.parentNode.replaceChild(n.ownerDocument.createTextNode(" "), r);
  }
}
function oy(n, e) {
  if (!n.size)
    return n;
  let t = n.content.firstChild.type.schema, r;
  try {
    r = JSON.parse(e);
  } catch {
    return n;
  }
  let { content: i, openStart: o, openEnd: s } = n;
  for (let l = r.length - 2; l >= 0; l -= 2) {
    let a = t.nodes[r[l]];
    if (!a || a.hasRequiredAttrs())
      break;
    i = C.from(a.create(r[l + 1], i)), o++, s++;
  }
  return new R(i, o, s);
}
const _e = {}, Fe = {}, sy = { touchstart: !0, touchmove: !0 };
class ly {
  constructor() {
    this.shiftKey = !1, this.mouseDown = null, this.lastKeyCode = null, this.lastKeyCodeTime = 0, this.lastClick = { time: 0, x: 0, y: 0, type: "", button: 0 }, this.lastSelectionOrigin = null, this.lastSelectionTime = 0, this.lastIOSEnter = 0, this.lastIOSEnterFallbackTimeout = -1, this.lastFocus = 0, this.lastTouch = 0, this.lastChromeDelete = 0, this.composing = !1, this.compositionNode = null, this.composingTimeout = -1, this.compositionNodes = [], this.compositionEndedAt = -2e8, this.compositionID = 1, this.compositionPendingChanges = 0, this.domChangeCount = 0, this.eventHandlers = /* @__PURE__ */ Object.create(null), this.hideSelectionGuard = null;
  }
}
function ay(n) {
  for (let e in _e) {
    let t = _e[e];
    n.dom.addEventListener(e, n.input.eventHandlers[e] = (r) => {
      uy(n, r) && !Ha(n, r) && (n.editable || !(r.type in Fe)) && t(n, r);
    }, sy[e] ? { passive: !0 } : void 0);
  }
  Be && n.dom.addEventListener("input", () => null), oa(n);
}
function yn(n, e) {
  n.input.lastSelectionOrigin = e, n.input.lastSelectionTime = Date.now();
}
function cy(n) {
  n.domObserver.stop();
  for (let e in n.input.eventHandlers)
    n.dom.removeEventListener(e, n.input.eventHandlers[e]);
  clearTimeout(n.input.composingTimeout), clearTimeout(n.input.lastIOSEnterFallbackTimeout);
}
function oa(n) {
  n.someProp("handleDOMEvents", (e) => {
    for (let t in e)
      n.input.eventHandlers[t] || n.dom.addEventListener(t, n.input.eventHandlers[t] = (r) => Ha(n, r));
  });
}
function Ha(n, e) {
  return n.someProp("handleDOMEvents", (t) => {
    let r = t[e.type];
    return r ? r(n, e) || e.defaultPrevented : !1;
  });
}
function uy(n, e) {
  if (!e.bubbles)
    return !0;
  if (e.defaultPrevented)
    return !1;
  for (let t = e.target; t != n.dom; t = t.parentNode)
    if (!t || t.nodeType == 11 || t.pmViewDesc && t.pmViewDesc.stopEvent(e))
      return !1;
  return !0;
}
function fy(n, e) {
  !Ha(n, e) && _e[e.type] && (n.editable || !(e.type in Fe)) && _e[e.type](n, e);
}
Fe.keydown = (n, e) => {
  let t = e;
  if (n.input.shiftKey = t.keyCode == 16 || t.shiftKey, !$d(n, t) && (n.input.lastKeyCode = t.keyCode, n.input.lastKeyCodeTime = Date.now(), !(Kt && Ie && t.keyCode == 13)))
    if (t.keyCode != 229 && n.domObserver.forceFlush(), Or && t.keyCode == 13 && !t.ctrlKey && !t.altKey && !t.metaKey) {
      let r = Date.now();
      n.input.lastIOSEnter = r, n.input.lastIOSEnterFallbackTimeout = setTimeout(() => {
        n.input.lastIOSEnter == r && (n.someProp("handleKeyDown", (i) => i(n, Pn(13, "Enter"))), n.input.lastIOSEnter = 0);
      }, 200);
    } else
      n.someProp("handleKeyDown", (r) => r(n, t)) || Zg(n, t) ? t.preventDefault() : yn(n, "key");
};
Fe.keyup = (n, e) => {
  e.keyCode == 16 && (n.input.shiftKey = !1);
};
Fe.keypress = (n, e) => {
  let t = e;
  if ($d(n, t) || !t.charCode || t.ctrlKey && !t.altKey || at && t.metaKey)
    return;
  if (n.someProp("handleKeyPress", (i) => i(n, t))) {
    t.preventDefault();
    return;
  }
  let r = n.state.selection;
  if (!(r instanceof X) || !r.$from.sameParent(r.$to)) {
    let i = String.fromCharCode(t.charCode);
    !/[\r\n]/.test(i) && !n.someProp("handleTextInput", (o) => o(n, r.$from.pos, r.$to.pos, i)) && n.dispatch(n.state.tr.insertText(i).scrollIntoView()), t.preventDefault();
  }
};
function Fs(n) {
  return { left: n.clientX, top: n.clientY };
}
function dy(n, e) {
  let t = e.x - n.clientX, r = e.y - n.clientY;
  return t * t + r * r < 100;
}
function Va(n, e, t, r, i) {
  if (r == -1)
    return !1;
  let o = n.state.doc.resolve(r);
  for (let s = o.depth + 1; s > 0; s--)
    if (n.someProp(e, (l) => s > o.depth ? l(n, t, o.nodeAfter, o.before(s), i, !0) : l(n, t, o.node(s), o.before(s), i, !1)))
      return !0;
  return !1;
}
function xr(n, e, t) {
  if (n.focused || n.focus(), n.state.selection.eq(e))
    return;
  let r = n.state.tr.setSelection(e);
  t == "pointer" && r.setMeta("pointer", !0), n.dispatch(r);
}
function hy(n, e) {
  if (e == -1)
    return !1;
  let t = n.state.doc.resolve(e), r = t.nodeAfter;
  return r && r.isAtom && z.isSelectable(r) ? (xr(n, new z(t), "pointer"), !0) : !1;
}
function py(n, e) {
  if (e == -1)
    return !1;
  let t = n.state.selection, r, i;
  t instanceof z && (r = t.node);
  let o = n.state.doc.resolve(e);
  for (let s = o.depth + 1; s > 0; s--) {
    let l = s > o.depth ? o.nodeAfter : o.node(s);
    if (z.isSelectable(l)) {
      r && t.$from.depth > 0 && s >= t.$from.depth && o.before(t.$from.depth + 1) == t.$from.pos ? i = o.before(t.$from.depth) : i = o.before(s);
      break;
    }
  }
  return i != null ? (xr(n, z.create(n.state.doc, i), "pointer"), !0) : !1;
}
function my(n, e, t, r, i) {
  return Va(n, "handleClickOn", e, t, r) || n.someProp("handleClick", (o) => o(n, e, r)) || (i ? py(n, t) : hy(n, t));
}
function gy(n, e, t, r) {
  return Va(n, "handleDoubleClickOn", e, t, r) || n.someProp("handleDoubleClick", (i) => i(n, e, r));
}
function yy(n, e, t, r) {
  return Va(n, "handleTripleClickOn", e, t, r) || n.someProp("handleTripleClick", (i) => i(n, e, r)) || vy(n, t, r);
}
function vy(n, e, t) {
  if (t.button != 0)
    return !1;
  let r = n.state.doc;
  if (e == -1)
    return r.inlineContent ? (xr(n, X.create(r, 0, r.content.size), "pointer"), !0) : !1;
  let i = r.resolve(e);
  for (let o = i.depth + 1; o > 0; o--) {
    let s = o > i.depth ? i.nodeAfter : i.node(o), l = i.before(o);
    if (s.inlineContent)
      xr(n, X.create(r, l + 1, l + 1 + s.content.size), "pointer");
    else if (z.isSelectable(s))
      xr(n, z.create(r, l), "pointer");
    else
      continue;
    return !0;
  }
}
function ja(n) {
  return jo(n);
}
const Fd = at ? "metaKey" : "ctrlKey";
_e.mousedown = (n, e) => {
  let t = e;
  n.input.shiftKey = t.shiftKey;
  let r = ja(n), i = Date.now(), o = "singleClick";
  i - n.input.lastClick.time < 500 && dy(t, n.input.lastClick) && !t[Fd] && n.input.lastClick.button == t.button && (n.input.lastClick.type == "singleClick" ? o = "doubleClick" : n.input.lastClick.type == "doubleClick" && (o = "tripleClick")), n.input.lastClick = { time: i, x: t.clientX, y: t.clientY, type: o, button: t.button };
  let s = n.posAtCoords(Fs(t));
  !s || (o == "singleClick" ? (n.input.mouseDown && n.input.mouseDown.done(), n.input.mouseDown = new by(n, s, t, !!r)) : (o == "doubleClick" ? gy : yy)(n, s.pos, s.inside, t) ? t.preventDefault() : yn(n, "pointer"));
};
class by {
  constructor(e, t, r, i) {
    this.view = e, this.pos = t, this.event = r, this.flushed = i, this.delayedSelectionSync = !1, this.mightDrag = null, this.startDoc = e.state.doc, this.selectNode = !!r[Fd], this.allowDefault = r.shiftKey;
    let o, s;
    if (t.inside > -1)
      o = e.state.doc.nodeAt(t.inside), s = t.inside;
    else {
      let u = e.state.doc.resolve(t.pos);
      o = u.parent, s = u.depth ? u.before() : 0;
    }
    const l = i ? null : r.target, a = l ? e.docView.nearestDesc(l, !0) : null;
    this.target = a && a.dom.nodeType == 1 ? a.dom : null;
    let { selection: c } = e.state;
    (r.button == 0 && o.type.spec.draggable && o.type.spec.selectable !== !1 || c instanceof z && c.from <= s && c.to > s) && (this.mightDrag = {
      node: o,
      pos: s,
      addAttr: !!(this.target && !this.target.draggable),
      setUneditable: !!(this.target && xt && !this.target.hasAttribute("contentEditable"))
    }), this.target && this.mightDrag && (this.mightDrag.addAttr || this.mightDrag.setUneditable) && (this.view.domObserver.stop(), this.mightDrag.addAttr && (this.target.draggable = !0), this.mightDrag.setUneditable && setTimeout(() => {
      this.view.input.mouseDown == this && this.target.setAttribute("contentEditable", "false");
    }, 20), this.view.domObserver.start()), e.root.addEventListener("mouseup", this.up = this.up.bind(this)), e.root.addEventListener("mousemove", this.move = this.move.bind(this)), yn(e, "pointer");
  }
  done() {
    this.view.root.removeEventListener("mouseup", this.up), this.view.root.removeEventListener("mousemove", this.move), this.mightDrag && this.target && (this.view.domObserver.stop(), this.mightDrag.addAttr && this.target.removeAttribute("draggable"), this.mightDrag.setUneditable && this.target.removeAttribute("contentEditable"), this.view.domObserver.start()), this.delayedSelectionSync && setTimeout(() => Gt(this.view)), this.view.input.mouseDown = null;
  }
  up(e) {
    if (this.done(), !this.view.dom.contains(e.target))
      return;
    let t = this.pos;
    this.view.state.doc != this.startDoc && (t = this.view.posAtCoords(Fs(e))), this.updateAllowDefault(e), this.allowDefault || !t ? yn(this.view, "pointer") : my(this.view, t.pos, t.inside, e, this.selectNode) ? e.preventDefault() : e.button == 0 && (this.flushed || Be && this.mightDrag && !this.mightDrag.node.isAtom || Ie && !this.view.state.selection.visible && Math.min(Math.abs(t.pos - this.view.state.selection.from), Math.abs(t.pos - this.view.state.selection.to)) <= 2) ? (xr(this.view, Z.near(this.view.state.doc.resolve(t.pos)), "pointer"), e.preventDefault()) : yn(this.view, "pointer");
  }
  move(e) {
    this.updateAllowDefault(e), yn(this.view, "pointer"), e.buttons == 0 && this.done();
  }
  updateAllowDefault(e) {
    !this.allowDefault && (Math.abs(this.event.x - e.clientX) > 4 || Math.abs(this.event.y - e.clientY) > 4) && (this.allowDefault = !0);
  }
}
_e.touchstart = (n) => {
  n.input.lastTouch = Date.now(), ja(n), yn(n, "pointer");
};
_e.touchmove = (n) => {
  n.input.lastTouch = Date.now(), yn(n, "pointer");
};
_e.contextmenu = (n) => ja(n);
function $d(n, e) {
  return n.composing ? !0 : Be && Math.abs(e.timeStamp - n.input.compositionEndedAt) < 500 ? (n.input.compositionEndedAt = -2e8, !0) : !1;
}
const wy = Kt ? 5e3 : -1;
Fe.compositionstart = Fe.compositionupdate = (n) => {
  if (!n.composing) {
    n.domObserver.flush();
    let { state: e } = n, t = e.selection.$to;
    if (e.selection instanceof X && (e.storedMarks || !t.textOffset && t.parentOffset && t.nodeBefore.marks.some((r) => r.type.spec.inclusive === !1)))
      n.markCursor = n.state.storedMarks || t.marks(), jo(n, !0), n.markCursor = null;
    else if (jo(n, !e.selection.empty), xt && e.selection.empty && t.parentOffset && !t.textOffset && t.nodeBefore.marks.length) {
      let r = n.domSelectionRange();
      for (let i = r.focusNode, o = r.focusOffset; i && i.nodeType == 1 && o != 0; ) {
        let s = o < 0 ? i.lastChild : i.childNodes[o - 1];
        if (!s)
          break;
        if (s.nodeType == 3) {
          let l = n.domSelection();
          l && l.collapse(s, s.nodeValue.length);
          break;
        } else
          i = s, o = -1;
      }
    }
    n.input.composing = !0;
  }
  zd(n, wy);
};
Fe.compositionend = (n, e) => {
  n.composing && (n.input.composing = !1, n.input.compositionEndedAt = e.timeStamp, n.input.compositionPendingChanges = n.domObserver.pendingRecords().length ? n.input.compositionID : 0, n.input.compositionNode = null, n.input.compositionPendingChanges && Promise.resolve().then(() => n.domObserver.flush()), n.input.compositionID++, zd(n, 20));
};
function zd(n, e) {
  clearTimeout(n.input.composingTimeout), e > -1 && (n.input.composingTimeout = setTimeout(() => jo(n), e));
}
function Hd(n) {
  for (n.composing && (n.input.composing = !1, n.input.compositionEndedAt = xy()); n.input.compositionNodes.length > 0; )
    n.input.compositionNodes.pop().markParentsDirty();
}
function ky(n) {
  let e = n.domSelectionRange();
  if (!e.focusNode)
    return null;
  let t = hg(e.focusNode, e.focusOffset), r = pg(e.focusNode, e.focusOffset);
  if (t && r && t != r) {
    let i = r.pmViewDesc, o = n.domObserver.lastChangedTextNode;
    if (t == o || r == o)
      return o;
    if (!i || !i.isText(r.nodeValue))
      return r;
    if (n.input.compositionNode == r) {
      let s = t.pmViewDesc;
      if (!(!s || !s.isText(t.nodeValue)))
        return r;
    }
  }
  return t || r;
}
function xy() {
  let n = document.createEvent("Event");
  return n.initEvent("event", !0, !0), n.timeStamp;
}
function jo(n, e = !1) {
  if (!(Kt && n.domObserver.flushingSoon >= 0)) {
    if (n.domObserver.forceFlush(), Hd(n), e || n.docView && n.docView.dirty) {
      let t = Fa(n), r = n.state.selection;
      return t && !t.eq(r) ? n.dispatch(n.state.tr.setSelection(t)) : (n.markCursor || e) && !r.$from.node(r.$from.sharedDepth(r.to)).inlineContent ? n.dispatch(n.state.tr.deleteSelection()) : n.updateState(n.state), !0;
    }
    return !1;
  }
}
function Sy(n, e) {
  if (!n.dom.parentNode)
    return;
  let t = n.dom.parentNode.appendChild(document.createElement("div"));
  t.appendChild(e), t.style.cssText = "position: fixed; left: -10000px; top: 10px";
  let r = getSelection(), i = document.createRange();
  i.selectNodeContents(e), n.dom.blur(), r.removeAllRanges(), r.addRange(i), setTimeout(() => {
    t.parentNode && t.parentNode.removeChild(t), n.focus();
  }, 50);
}
const Si = Je && bn < 15 || Or && bg < 604;
_e.copy = Fe.cut = (n, e) => {
  let t = e, r = n.state.selection, i = t.type == "cut";
  if (r.empty)
    return;
  let o = Si ? null : t.clipboardData, s = r.content(), { dom: l, text: a } = za(n, s);
  o ? (t.preventDefault(), o.clearData(), o.setData("text/html", l.innerHTML), o.setData("text/plain", a)) : Sy(n, l), i && n.dispatch(n.state.tr.deleteSelection().scrollIntoView().setMeta("uiEvent", "cut"));
};
function Ey(n) {
  return n.openStart == 0 && n.openEnd == 0 && n.content.childCount == 1 ? n.content.firstChild : null;
}
function Cy(n, e) {
  if (!n.dom.parentNode)
    return;
  let t = n.input.shiftKey || n.state.selection.$from.parent.type.spec.code, r = n.dom.parentNode.appendChild(document.createElement(t ? "textarea" : "div"));
  t || (r.contentEditable = "true"), r.style.cssText = "position: fixed; left: -10000px; top: 10px", r.focus();
  let i = n.input.shiftKey && n.input.lastKeyCode != 45;
  setTimeout(() => {
    n.focus(), r.parentNode && r.parentNode.removeChild(r), t ? Ei(n, r.value, null, i, e) : Ei(n, r.textContent, r.innerHTML, i, e);
  }, 50);
}
function Ei(n, e, t, r, i) {
  let o = Id(n, e, t, r, n.state.selection.$from);
  if (n.someProp("handlePaste", (a) => a(n, i, o || R.empty)))
    return !0;
  if (!o)
    return !1;
  let s = Ey(o), l = s ? n.state.tr.replaceSelectionWith(s, r) : n.state.tr.replaceSelection(o);
  return n.dispatch(l.scrollIntoView().setMeta("paste", !0).setMeta("uiEvent", "paste")), !0;
}
function Vd(n) {
  let e = n.getData("text/plain") || n.getData("Text");
  if (e)
    return e;
  let t = n.getData("text/uri-list");
  return t ? t.replace(/\r?\n/g, " ") : "";
}
Fe.paste = (n, e) => {
  let t = e;
  if (n.composing && !Kt)
    return;
  let r = Si ? null : t.clipboardData, i = n.input.shiftKey && n.input.lastKeyCode != 45;
  r && Ei(n, Vd(r), r.getData("text/html"), i, t) ? t.preventDefault() : Cy(n, t);
};
class jd {
  constructor(e, t, r) {
    this.slice = e, this.move = t, this.node = r;
  }
}
const Ty = at ? "altKey" : "ctrlKey";
function Wd(n, e) {
  let t = n.someProp("dragCopies", (r) => !r(e));
  return t != null ? t : !e[Ty];
}
_e.dragstart = (n, e) => {
  let t = e, r = n.input.mouseDown;
  if (r && r.done(), !t.dataTransfer)
    return;
  let i = n.state.selection, o = i.empty ? null : n.posAtCoords(Fs(t)), s;
  if (!(o && o.pos >= i.from && o.pos <= (i instanceof z ? i.to - 1 : i.to))) {
    if (r && r.mightDrag)
      s = z.create(n.state.doc, r.mightDrag.pos);
    else if (t.target && t.target.nodeType == 1) {
      let f = n.docView.nearestDesc(t.target, !0);
      f && f.node.type.spec.draggable && f != n.docView && (s = z.create(n.state.doc, f.posBefore));
    }
  }
  let l = (s || n.state.selection).content(), { dom: a, text: c, slice: u } = za(n, l);
  (!t.dataTransfer.files.length || !Ie || gd > 120) && t.dataTransfer.clearData(), t.dataTransfer.setData(Si ? "Text" : "text/html", a.innerHTML), t.dataTransfer.effectAllowed = "copyMove", Si || t.dataTransfer.setData("text/plain", c), n.dragging = new jd(u, Wd(n, t), s);
};
_e.dragend = (n) => {
  let e = n.dragging;
  window.setTimeout(() => {
    n.dragging == e && (n.dragging = null);
  }, 50);
};
Fe.dragover = Fe.dragenter = (n, e) => e.preventDefault();
Fe.drop = (n, e) => {
  let t = e, r = n.dragging;
  if (n.dragging = null, !t.dataTransfer)
    return;
  let i = n.posAtCoords(Fs(t));
  if (!i)
    return;
  let o = n.state.doc.resolve(i.pos), s = r && r.slice;
  s ? n.someProp("transformPasted", (p) => {
    s = p(s, n);
  }) : s = Id(n, Vd(t.dataTransfer), Si ? null : t.dataTransfer.getData("text/html"), !1, o);
  let l = !!(r && Wd(n, t));
  if (n.someProp("handleDrop", (p) => p(n, t, s || R.empty, l))) {
    t.preventDefault();
    return;
  }
  if (!s)
    return;
  t.preventDefault();
  let a = s ? eg(n.state.doc, o.pos, s) : o.pos;
  a == null && (a = o.pos);
  let c = n.state.tr;
  if (l) {
    let { node: p } = r;
    p ? p.replace(c) : c.deleteSelection();
  }
  let u = c.mapping.map(a), f = s.openStart == 0 && s.openEnd == 0 && s.content.childCount == 1, d = c.doc;
  if (f ? c.replaceRangeWith(u, u, s.content.firstChild) : c.replaceRange(u, u, s), c.doc.eq(d))
    return;
  let h = c.doc.resolve(u);
  if (f && z.isSelectable(s.content.firstChild) && h.nodeAfter && h.nodeAfter.sameMarkup(s.content.firstChild))
    c.setSelection(new z(h));
  else {
    let p = c.mapping.map(a);
    c.mapping.maps[c.mapping.maps.length - 1].forEach((m, g, v, w) => p = w), c.setSelection($a(n, h, c.doc.resolve(p)));
  }
  n.focus(), n.dispatch(c.setMeta("uiEvent", "drop"));
};
_e.focus = (n) => {
  n.input.lastFocus = Date.now(), n.focused || (n.domObserver.stop(), n.dom.classList.add("ProseMirror-focused"), n.domObserver.start(), n.focused = !0, setTimeout(() => {
    n.docView && n.hasFocus() && !n.domObserver.currentSelection.eq(n.domSelectionRange()) && Gt(n);
  }, 20));
};
_e.blur = (n, e) => {
  let t = e;
  n.focused && (n.domObserver.stop(), n.dom.classList.remove("ProseMirror-focused"), n.domObserver.start(), t.relatedTarget && n.dom.contains(t.relatedTarget) && n.domObserver.currentSelection.clear(), n.focused = !1);
};
_e.beforeinput = (n, e) => {
  if (Ie && Kt && e.inputType == "deleteContentBackward") {
    n.domObserver.flushSoon();
    let { domChangeCount: r } = n.input;
    setTimeout(() => {
      if (n.input.domChangeCount != r || (n.dom.blur(), n.focus(), n.someProp("handleKeyDown", (o) => o(n, Pn(8, "Backspace")))))
        return;
      let { $cursor: i } = n.state.selection;
      i && i.pos > 0 && n.dispatch(n.state.tr.delete(i.pos - 1, i.pos).scrollIntoView());
    }, 50);
  }
};
for (let n in Fe)
  _e[n] = Fe[n];
function Ci(n, e) {
  if (n == e)
    return !0;
  for (let t in n)
    if (n[t] !== e[t])
      return !1;
  for (let t in e)
    if (!(t in n))
      return !1;
  return !0;
}
class Wo {
  constructor(e, t) {
    this.toDOM = e, this.spec = t || Vn, this.side = this.spec.side || 0;
  }
  map(e, t, r, i) {
    let { pos: o, deleted: s } = e.mapResult(t.from + i, this.side < 0 ? -1 : 1);
    return s ? null : new ut(o - r, o - r, this);
  }
  valid() {
    return !0;
  }
  eq(e) {
    return this == e || e instanceof Wo && (this.spec.key && this.spec.key == e.spec.key || this.toDOM == e.toDOM && Ci(this.spec, e.spec));
  }
  destroy(e) {
    this.spec.destroy && this.spec.destroy(e);
  }
}
class kn {
  constructor(e, t) {
    this.attrs = e, this.spec = t || Vn;
  }
  map(e, t, r, i) {
    let o = e.map(t.from + i, this.spec.inclusiveStart ? -1 : 1) - r, s = e.map(t.to + i, this.spec.inclusiveEnd ? 1 : -1) - r;
    return o >= s ? null : new ut(o, s, this);
  }
  valid(e, t) {
    return t.from < t.to;
  }
  eq(e) {
    return this == e || e instanceof kn && Ci(this.attrs, e.attrs) && Ci(this.spec, e.spec);
  }
  static is(e) {
    return e.type instanceof kn;
  }
  destroy() {
  }
}
class Wa {
  constructor(e, t) {
    this.attrs = e, this.spec = t || Vn;
  }
  map(e, t, r, i) {
    let o = e.mapResult(t.from + i, 1);
    if (o.deleted)
      return null;
    let s = e.mapResult(t.to + i, -1);
    return s.deleted || s.pos <= o.pos ? null : new ut(o.pos - r, s.pos - r, this);
  }
  valid(e, t) {
    let { index: r, offset: i } = e.content.findIndex(t.from), o;
    return i == t.from && !(o = e.child(r)).isText && i + o.nodeSize == t.to;
  }
  eq(e) {
    return this == e || e instanceof Wa && Ci(this.attrs, e.attrs) && Ci(this.spec, e.spec);
  }
  destroy() {
  }
}
class ut {
  constructor(e, t, r) {
    this.from = e, this.to = t, this.type = r;
  }
  copy(e, t) {
    return new ut(e, t, this.type);
  }
  eq(e, t = 0) {
    return this.type.eq(e.type) && this.from + t == e.from && this.to + t == e.to;
  }
  map(e, t, r) {
    return this.type.map(e, this, t, r);
  }
  static widget(e, t, r) {
    return new ut(e, e, new Wo(t, r));
  }
  static inline(e, t, r, i) {
    return new ut(e, t, new kn(r, i));
  }
  static node(e, t, r, i) {
    return new ut(e, t, new Wa(r, i));
  }
  get spec() {
    return this.type.spec;
  }
  get inline() {
    return this.type instanceof kn;
  }
  get widget() {
    return this.type instanceof Wo;
  }
}
const hr = [], Vn = {};
class ve {
  constructor(e, t) {
    this.local = e.length ? e : hr, this.children = t.length ? t : hr;
  }
  static create(e, t) {
    return t.length ? Uo(t, e, 0, Vn) : Ne;
  }
  find(e, t, r) {
    let i = [];
    return this.findInner(e == null ? 0 : e, t == null ? 1e9 : t, i, 0, r), i;
  }
  findInner(e, t, r, i, o) {
    for (let s = 0; s < this.local.length; s++) {
      let l = this.local[s];
      l.from <= t && l.to >= e && (!o || o(l.spec)) && r.push(l.copy(l.from + i, l.to + i));
    }
    for (let s = 0; s < this.children.length; s += 3)
      if (this.children[s] < t && this.children[s + 1] > e) {
        let l = this.children[s] + 1;
        this.children[s + 2].findInner(e - l, t - l, r, i + l, o);
      }
  }
  map(e, t, r) {
    return this == Ne || e.maps.length == 0 ? this : this.mapInner(e, t, 0, 0, r || Vn);
  }
  mapInner(e, t, r, i, o) {
    let s;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l].map(e, r, i);
      a && a.type.valid(t, a) ? (s || (s = [])).push(a) : o.onRemove && o.onRemove(this.local[l].spec);
    }
    return this.children.length ? Oy(this.children, s || [], e, t, r, i, o) : s ? new ve(s.sort(jn), hr) : Ne;
  }
  add(e, t) {
    return t.length ? this == Ne ? ve.create(e, t) : this.addInner(e, t, 0) : this;
  }
  addInner(e, t, r) {
    let i, o = 0;
    e.forEach((l, a) => {
      let c = a + r, u;
      if (!!(u = Kd(t, l, c))) {
        for (i || (i = this.children.slice()); o < i.length && i[o] < a; )
          o += 3;
        i[o] == a ? i[o + 2] = i[o + 2].addInner(l, u, c + 1) : i.splice(o, 0, a, a + l.nodeSize, Uo(u, l, c + 1, Vn)), o += 3;
      }
    });
    let s = Ud(o ? qd(t) : t, -r);
    for (let l = 0; l < s.length; l++)
      s[l].type.valid(e, s[l]) || s.splice(l--, 1);
    return new ve(s.length ? this.local.concat(s).sort(jn) : this.local, i || this.children);
  }
  remove(e) {
    return e.length == 0 || this == Ne ? this : this.removeInner(e, 0);
  }
  removeInner(e, t) {
    let r = this.children, i = this.local;
    for (let o = 0; o < r.length; o += 3) {
      let s, l = r[o] + t, a = r[o + 1] + t;
      for (let u = 0, f; u < e.length; u++)
        (f = e[u]) && f.from > l && f.to < a && (e[u] = null, (s || (s = [])).push(f));
      if (!s)
        continue;
      r == this.children && (r = this.children.slice());
      let c = r[o + 2].removeInner(s, l + 1);
      c != Ne ? r[o + 2] = c : (r.splice(o, 3), o -= 3);
    }
    if (i.length) {
      for (let o = 0, s; o < e.length; o++)
        if (s = e[o])
          for (let l = 0; l < i.length; l++)
            i[l].eq(s, t) && (i == this.local && (i = this.local.slice()), i.splice(l--, 1));
    }
    return r == this.children && i == this.local ? this : i.length || r.length ? new ve(i, r) : Ne;
  }
  forChild(e, t) {
    if (this == Ne)
      return this;
    if (t.isLeaf)
      return ve.empty;
    let r, i;
    for (let l = 0; l < this.children.length; l += 3)
      if (this.children[l] >= e) {
        this.children[l] == e && (r = this.children[l + 2]);
        break;
      }
    let o = e + 1, s = o + t.content.size;
    for (let l = 0; l < this.local.length; l++) {
      let a = this.local[l];
      if (a.from < s && a.to > o && a.type instanceof kn) {
        let c = Math.max(o, a.from) - o, u = Math.min(s, a.to) - o;
        c < u && (i || (i = [])).push(a.copy(c, u));
      }
    }
    if (i) {
      let l = new ve(i.sort(jn), hr);
      return r ? new dn([l, r]) : l;
    }
    return r || Ne;
  }
  eq(e) {
    if (this == e)
      return !0;
    if (!(e instanceof ve) || this.local.length != e.local.length || this.children.length != e.children.length)
      return !1;
    for (let t = 0; t < this.local.length; t++)
      if (!this.local[t].eq(e.local[t]))
        return !1;
    for (let t = 0; t < this.children.length; t += 3)
      if (this.children[t] != e.children[t] || this.children[t + 1] != e.children[t + 1] || !this.children[t + 2].eq(e.children[t + 2]))
        return !1;
    return !0;
  }
  locals(e) {
    return Ua(this.localsInner(e));
  }
  localsInner(e) {
    if (this == Ne)
      return hr;
    if (e.inlineContent || !this.local.some(kn.is))
      return this.local;
    let t = [];
    for (let r = 0; r < this.local.length; r++)
      this.local[r].type instanceof kn || t.push(this.local[r]);
    return t;
  }
  forEachSet(e) {
    e(this);
  }
}
ve.empty = new ve([], []);
ve.removeOverlap = Ua;
const Ne = ve.empty;
class dn {
  constructor(e) {
    this.members = e;
  }
  map(e, t) {
    const r = this.members.map((i) => i.map(e, t, Vn));
    return dn.from(r);
  }
  forChild(e, t) {
    if (t.isLeaf)
      return ve.empty;
    let r = [];
    for (let i = 0; i < this.members.length; i++) {
      let o = this.members[i].forChild(e, t);
      o != Ne && (o instanceof dn ? r = r.concat(o.members) : r.push(o));
    }
    return dn.from(r);
  }
  eq(e) {
    if (!(e instanceof dn) || e.members.length != this.members.length)
      return !1;
    for (let t = 0; t < this.members.length; t++)
      if (!this.members[t].eq(e.members[t]))
        return !1;
    return !0;
  }
  locals(e) {
    let t, r = !0;
    for (let i = 0; i < this.members.length; i++) {
      let o = this.members[i].localsInner(e);
      if (!!o.length)
        if (!t)
          t = o;
        else {
          r && (t = t.slice(), r = !1);
          for (let s = 0; s < o.length; s++)
            t.push(o[s]);
        }
    }
    return t ? Ua(r ? t : t.sort(jn)) : hr;
  }
  static from(e) {
    switch (e.length) {
      case 0:
        return Ne;
      case 1:
        return e[0];
      default:
        return new dn(e.every((t) => t instanceof ve) ? e : e.reduce((t, r) => t.concat(r instanceof ve ? r : r.members), []));
    }
  }
  forEachSet(e) {
    for (let t = 0; t < this.members.length; t++)
      this.members[t].forEachSet(e);
  }
}
function Oy(n, e, t, r, i, o, s) {
  let l = n.slice();
  for (let c = 0, u = o; c < t.maps.length; c++) {
    let f = 0;
    t.maps[c].forEach((d, h, p, m) => {
      let g = m - p - (h - d);
      for (let v = 0; v < l.length; v += 3) {
        let w = l[v + 1];
        if (w < 0 || d > w + u - f)
          continue;
        let E = l[v] + u - f;
        h >= E ? l[v + 1] = d <= E ? -2 : -1 : d >= u && g && (l[v] += g, l[v + 1] += g);
      }
      f += g;
    }), u = t.maps[c].map(u, -1);
  }
  let a = !1;
  for (let c = 0; c < l.length; c += 3)
    if (l[c + 1] < 0) {
      if (l[c + 1] == -2) {
        a = !0, l[c + 1] = -1;
        continue;
      }
      let u = t.map(n[c] + o), f = u - i;
      if (f < 0 || f >= r.content.size) {
        a = !0;
        continue;
      }
      let d = t.map(n[c + 1] + o, -1), h = d - i, { index: p, offset: m } = r.content.findIndex(f), g = r.maybeChild(p);
      if (g && m == f && m + g.nodeSize == h) {
        let v = l[c + 2].mapInner(t, g, u + 1, n[c] + o + 1, s);
        v != Ne ? (l[c] = f, l[c + 1] = h, l[c + 2] = v) : (l[c + 1] = -2, a = !0);
      } else
        a = !0;
    }
  if (a) {
    let c = My(l, n, e, t, i, o, s), u = Uo(c, r, 0, s);
    e = u.local;
    for (let f = 0; f < l.length; f += 3)
      l[f + 1] < 0 && (l.splice(f, 3), f -= 3);
    for (let f = 0, d = 0; f < u.children.length; f += 3) {
      let h = u.children[f];
      for (; d < l.length && l[d] < h; )
        d += 3;
      l.splice(d, 0, u.children[f], u.children[f + 1], u.children[f + 2]);
    }
  }
  return new ve(e.sort(jn), l);
}
function Ud(n, e) {
  if (!e || !n.length)
    return n;
  let t = [];
  for (let r = 0; r < n.length; r++) {
    let i = n[r];
    t.push(new ut(i.from + e, i.to + e, i.type));
  }
  return t;
}
function My(n, e, t, r, i, o, s) {
  function l(a, c) {
    for (let u = 0; u < a.local.length; u++) {
      let f = a.local[u].map(r, i, c);
      f ? t.push(f) : s.onRemove && s.onRemove(a.local[u].spec);
    }
    for (let u = 0; u < a.children.length; u += 3)
      l(a.children[u + 2], a.children[u] + c + 1);
  }
  for (let a = 0; a < n.length; a += 3)
    n[a + 1] == -1 && l(n[a + 2], e[a] + o + 1);
  return t;
}
function Kd(n, e, t) {
  if (e.isLeaf)
    return null;
  let r = t + e.nodeSize, i = null;
  for (let o = 0, s; o < n.length; o++)
    (s = n[o]) && s.from > t && s.to < r && ((i || (i = [])).push(s), n[o] = null);
  return i;
}
function qd(n) {
  let e = [];
  for (let t = 0; t < n.length; t++)
    n[t] != null && e.push(n[t]);
  return e;
}
function Uo(n, e, t, r) {
  let i = [], o = !1;
  e.forEach((l, a) => {
    let c = Kd(n, l, a + t);
    if (c) {
      o = !0;
      let u = Uo(c, l, t + a + 1, r);
      u != Ne && i.push(a, a + l.nodeSize, u);
    }
  });
  let s = Ud(o ? qd(n) : n, -t).sort(jn);
  for (let l = 0; l < s.length; l++)
    s[l].type.valid(e, s[l]) || (r.onRemove && r.onRemove(s[l].spec), s.splice(l--, 1));
  return s.length || i.length ? new ve(s, i) : Ne;
}
function jn(n, e) {
  return n.from - e.from || n.to - e.to;
}
function Ua(n) {
  let e = n;
  for (let t = 0; t < e.length - 1; t++) {
    let r = e[t];
    if (r.from != r.to)
      for (let i = t + 1; i < e.length; i++) {
        let o = e[i];
        if (o.from == r.from) {
          o.to != r.to && (e == n && (e = n.slice()), e[i] = o.copy(o.from, r.to), vu(e, i + 1, o.copy(r.to, o.to)));
          continue;
        } else {
          o.from < r.to && (e == n && (e = n.slice()), e[t] = r.copy(r.from, o.from), vu(e, i, r.copy(o.from, r.to)));
          break;
        }
      }
  }
  return e;
}
function vu(n, e, t) {
  for (; e < n.length && jn(t, n[e]) > 0; )
    e++;
  n.splice(e, 0, t);
}
function vl(n) {
  let e = [];
  return n.someProp("decorations", (t) => {
    let r = t(n.state);
    r && r != Ne && e.push(r);
  }), n.cursorWrapper && e.push(ve.create(n.state.doc, [n.cursorWrapper.deco])), dn.from(e);
}
const Ay = {
  childList: !0,
  characterData: !0,
  characterDataOldValue: !0,
  attributes: !0,
  attributeOldValue: !0,
  subtree: !0
}, Dy = Je && bn <= 11;
class Ny {
  constructor() {
    this.anchorNode = null, this.anchorOffset = 0, this.focusNode = null, this.focusOffset = 0;
  }
  set(e) {
    this.anchorNode = e.anchorNode, this.anchorOffset = e.anchorOffset, this.focusNode = e.focusNode, this.focusOffset = e.focusOffset;
  }
  clear() {
    this.anchorNode = this.focusNode = null;
  }
  eq(e) {
    return e.anchorNode == this.anchorNode && e.anchorOffset == this.anchorOffset && e.focusNode == this.focusNode && e.focusOffset == this.focusOffset;
  }
}
class Iy {
  constructor(e, t) {
    this.view = e, this.handleDOMChange = t, this.queue = [], this.flushingSoon = -1, this.observer = null, this.currentSelection = new Ny(), this.onCharData = null, this.suppressingSelectionUpdates = !1, this.lastChangedTextNode = null, this.observer = window.MutationObserver && new window.MutationObserver((r) => {
      for (let i = 0; i < r.length; i++)
        this.queue.push(r[i]);
      Je && bn <= 11 && r.some((i) => i.type == "childList" && i.removedNodes.length || i.type == "characterData" && i.oldValue.length > i.target.nodeValue.length) ? this.flushSoon() : this.flush();
    }), Dy && (this.onCharData = (r) => {
      this.queue.push({ target: r.target, type: "characterData", oldValue: r.prevValue }), this.flushSoon();
    }), this.onSelectionChange = this.onSelectionChange.bind(this);
  }
  flushSoon() {
    this.flushingSoon < 0 && (this.flushingSoon = window.setTimeout(() => {
      this.flushingSoon = -1, this.flush();
    }, 20));
  }
  forceFlush() {
    this.flushingSoon > -1 && (window.clearTimeout(this.flushingSoon), this.flushingSoon = -1, this.flush());
  }
  start() {
    this.observer && (this.observer.takeRecords(), this.observer.observe(this.view.dom, Ay)), this.onCharData && this.view.dom.addEventListener("DOMCharacterDataModified", this.onCharData), this.connectSelection();
  }
  stop() {
    if (this.observer) {
      let e = this.observer.takeRecords();
      if (e.length) {
        for (let t = 0; t < e.length; t++)
          this.queue.push(e[t]);
        window.setTimeout(() => this.flush(), 20);
      }
      this.observer.disconnect();
    }
    this.onCharData && this.view.dom.removeEventListener("DOMCharacterDataModified", this.onCharData), this.disconnectSelection();
  }
  connectSelection() {
    this.view.dom.ownerDocument.addEventListener("selectionchange", this.onSelectionChange);
  }
  disconnectSelection() {
    this.view.dom.ownerDocument.removeEventListener("selectionchange", this.onSelectionChange);
  }
  suppressSelectionUpdates() {
    this.suppressingSelectionUpdates = !0, setTimeout(() => this.suppressingSelectionUpdates = !1, 50);
  }
  onSelectionChange() {
    if (!!uu(this.view)) {
      if (this.suppressingSelectionUpdates)
        return Gt(this.view);
      if (Je && bn <= 11 && !this.view.state.selection.empty) {
        let e = this.view.domSelectionRange();
        if (e.focusNode && Gn(e.focusNode, e.focusOffset, e.anchorNode, e.anchorOffset))
          return this.flushSoon();
      }
      this.flush();
    }
  }
  setCurSelection() {
    this.currentSelection.set(this.view.domSelectionRange());
  }
  ignoreSelectionChange(e) {
    if (!e.focusNode)
      return !0;
    let t = /* @__PURE__ */ new Set(), r;
    for (let o = e.focusNode; o; o = Tr(o))
      t.add(o);
    for (let o = e.anchorNode; o; o = Tr(o))
      if (t.has(o)) {
        r = o;
        break;
      }
    let i = r && this.view.docView.nearestDesc(r);
    if (i && i.ignoreMutation({
      type: "selection",
      target: r.nodeType == 3 ? r.parentNode : r
    }))
      return this.setCurSelection(), !0;
  }
  pendingRecords() {
    if (this.observer)
      for (let e of this.observer.takeRecords())
        this.queue.push(e);
    return this.queue;
  }
  flush() {
    let { view: e } = this;
    if (!e.docView || this.flushingSoon > -1)
      return;
    let t = this.pendingRecords();
    t.length && (this.queue = []);
    let r = e.domSelectionRange(), i = !this.suppressingSelectionUpdates && !this.currentSelection.eq(r) && uu(e) && !this.ignoreSelectionChange(r), o = -1, s = -1, l = !1, a = [];
    if (e.editable)
      for (let u = 0; u < t.length; u++) {
        let f = this.registerMutation(t[u], a);
        f && (o = o < 0 ? f.from : Math.min(f.from, o), s = s < 0 ? f.to : Math.max(f.to, s), f.typeOver && (l = !0));
      }
    if (xt && a.length) {
      let u = a.filter((f) => f.nodeName == "BR");
      if (u.length == 2) {
        let [f, d] = u;
        f.parentNode && f.parentNode.parentNode == d.parentNode ? d.remove() : f.remove();
      } else {
        let { focusNode: f } = this.currentSelection;
        for (let d of u) {
          let h = d.parentNode;
          h && h.nodeName == "LI" && (!f || Ly(e, f) != h) && d.remove();
        }
      }
    }
    let c = null;
    o < 0 && i && e.input.lastFocus > Date.now() - 200 && Math.max(e.input.lastTouch, e.input.lastClick.time) < Date.now() - 300 && Bs(r) && (c = Fa(e)) && c.eq(Z.near(e.state.doc.resolve(0), 1)) ? (e.input.lastFocus = 0, Gt(e), this.currentSelection.set(r), e.scrollToSelection()) : (o > -1 || i) && (o > -1 && (e.docView.markDirty(o, s), Ry(e)), this.handleDOMChange(o, s, l, a), e.docView && e.docView.dirty ? e.updateState(e.state) : this.currentSelection.eq(r) || Gt(e), this.currentSelection.set(r));
  }
  registerMutation(e, t) {
    if (t.indexOf(e.target) > -1)
      return null;
    let r = this.view.docView.nearestDesc(e.target);
    if (e.type == "attributes" && (r == this.view.docView || e.attributeName == "contenteditable" || e.attributeName == "style" && !e.oldValue && !e.target.getAttribute("style")) || !r || r.ignoreMutation(e))
      return null;
    if (e.type == "childList") {
      for (let u = 0; u < e.addedNodes.length; u++) {
        let f = e.addedNodes[u];
        t.push(f), f.nodeType == 3 && (this.lastChangedTextNode = f);
      }
      if (r.contentDOM && r.contentDOM != r.dom && !r.contentDOM.contains(e.target))
        return { from: r.posBefore, to: r.posAfter };
      let i = e.previousSibling, o = e.nextSibling;
      if (Je && bn <= 11 && e.addedNodes.length)
        for (let u = 0; u < e.addedNodes.length; u++) {
          let { previousSibling: f, nextSibling: d } = e.addedNodes[u];
          (!f || Array.prototype.indexOf.call(e.addedNodes, f) < 0) && (i = f), (!d || Array.prototype.indexOf.call(e.addedNodes, d) < 0) && (o = d);
        }
      let s = i && i.parentNode == e.target ? Oe(i) + 1 : 0, l = r.localPosFromDOM(e.target, s, -1), a = o && o.parentNode == e.target ? Oe(o) : e.target.childNodes.length, c = r.localPosFromDOM(e.target, a, 1);
      return { from: l, to: c };
    } else
      return e.type == "attributes" ? { from: r.posAtStart - r.border, to: r.posAtEnd + r.border } : (this.lastChangedTextNode = e.target, {
        from: r.posAtStart,
        to: r.posAtEnd,
        typeOver: e.target.nodeValue == e.oldValue
      });
  }
}
let bu = /* @__PURE__ */ new WeakMap(), wu = !1;
function Ry(n) {
  if (!bu.has(n) && (bu.set(n, null), ["normal", "nowrap", "pre-line"].indexOf(getComputedStyle(n.dom).whiteSpace) !== -1)) {
    if (n.requiresGeckoHackNode = xt, wu)
      return;
    console.warn("ProseMirror expects the CSS white-space property to be set, preferably to 'pre-wrap'. It is recommended to load style/prosemirror.css from the prosemirror-view package."), wu = !0;
  }
}
function ku(n, e) {
  let t = e.startContainer, r = e.startOffset, i = e.endContainer, o = e.endOffset, s = n.domAtPos(n.state.selection.anchor);
  return Gn(s.node, s.offset, i, o) && ([t, r, i, o] = [i, o, t, r]), { anchorNode: t, anchorOffset: r, focusNode: i, focusOffset: o };
}
function Py(n, e) {
  if (e.getComposedRanges) {
    let i = e.getComposedRanges(n.root)[0];
    if (i)
      return ku(n, i);
  }
  let t;
  function r(i) {
    i.preventDefault(), i.stopImmediatePropagation(), t = i.getTargetRanges()[0];
  }
  return n.dom.addEventListener("beforeinput", r, !0), document.execCommand("indent"), n.dom.removeEventListener("beforeinput", r, !0), t ? ku(n, t) : null;
}
function Ly(n, e) {
  for (let t = e.parentNode; t && t != n.dom; t = t.parentNode) {
    let r = n.docView.nearestDesc(t, !0);
    if (r && r.node.isBlock)
      return t;
  }
  return null;
}
function By(n, e, t) {
  let { node: r, fromOffset: i, toOffset: o, from: s, to: l } = n.docView.parseRange(e, t), a = n.domSelectionRange(), c, u = a.anchorNode;
  if (u && n.dom.contains(u.nodeType == 1 ? u : u.parentNode) && (c = [{ node: u, offset: a.anchorOffset }], Bs(a) || c.push({ node: a.focusNode, offset: a.focusOffset })), Ie && n.input.lastKeyCode === 8)
    for (let g = o; g > i; g--) {
      let v = r.childNodes[g - 1], w = v.pmViewDesc;
      if (v.nodeName == "BR" && !w) {
        o = g;
        break;
      }
      if (!w || w.size)
        break;
    }
  let f = n.state.doc, d = n.someProp("domParser") || vn.fromSchema(n.state.schema), h = f.resolve(s), p = null, m = d.parse(r, {
    topNode: h.parent,
    topMatch: h.parent.contentMatchAt(h.index()),
    topOpen: !0,
    from: i,
    to: o,
    preserveWhitespace: h.parent.type.whitespace == "pre" ? "full" : !0,
    findPositions: c,
    ruleFromNode: _y,
    context: h
  });
  if (c && c[0].pos != null) {
    let g = c[0].pos, v = c[1] && c[1].pos;
    v == null && (v = g), p = { anchor: g + s, head: v + s };
  }
  return { doc: m, sel: p, from: s, to: l };
}
function _y(n) {
  let e = n.pmViewDesc;
  if (e)
    return e.parseRule();
  if (n.nodeName == "BR" && n.parentNode) {
    if (Be && /^(ul|ol)$/i.test(n.parentNode.nodeName)) {
      let t = document.createElement("div");
      return t.appendChild(document.createElement("li")), { skip: t };
    } else if (n.parentNode.lastChild == n || Be && /^(tr|table)$/i.test(n.parentNode.nodeName))
      return { ignore: !0 };
  } else if (n.nodeName == "IMG" && n.getAttribute("mark-placeholder"))
    return { ignore: !0 };
  return null;
}
const Fy = /^(a|abbr|acronym|b|bd[io]|big|br|button|cite|code|data(list)?|del|dfn|em|i|ins|kbd|label|map|mark|meter|output|q|ruby|s|samp|small|span|strong|su[bp]|time|u|tt|var)$/i;
function $y(n, e, t, r, i) {
  let o = n.input.compositionPendingChanges || (n.composing ? n.input.compositionID : 0);
  if (n.input.compositionPendingChanges = 0, e < 0) {
    let A = n.input.lastSelectionTime > Date.now() - 50 ? n.input.lastSelectionOrigin : null, $ = Fa(n, A);
    if ($ && !n.state.selection.eq($)) {
      if (Ie && Kt && n.input.lastKeyCode === 13 && Date.now() - 100 < n.input.lastKeyCodeTime && n.someProp("handleKeyDown", (U) => U(n, Pn(13, "Enter"))))
        return;
      let K = n.state.tr.setSelection($);
      A == "pointer" ? K.setMeta("pointer", !0) : A == "key" && K.scrollIntoView(), o && K.setMeta("composition", o), n.dispatch(K);
    }
    return;
  }
  let s = n.state.doc.resolve(e), l = s.sharedDepth(t);
  e = s.before(l + 1), t = n.state.doc.resolve(t).after(l + 1);
  let a = n.state.selection, c = By(n, e, t), u = n.state.doc, f = u.slice(c.from, c.to), d, h;
  n.input.lastKeyCode === 8 && Date.now() - 100 < n.input.lastKeyCodeTime ? (d = n.state.selection.to, h = "end") : (d = n.state.selection.from, h = "start"), n.input.lastKeyCode = null;
  let p = Vy(f.content, c.doc.content, c.from, d, h);
  if (p && n.input.domChangeCount++, (Or && n.input.lastIOSEnter > Date.now() - 225 || Kt) && i.some((A) => A.nodeType == 1 && !Fy.test(A.nodeName)) && (!p || p.endA >= p.endB) && n.someProp("handleKeyDown", (A) => A(n, Pn(13, "Enter")))) {
    n.input.lastIOSEnter = 0;
    return;
  }
  if (!p)
    if (r && a instanceof X && !a.empty && a.$head.sameParent(a.$anchor) && !n.composing && !(c.sel && c.sel.anchor != c.sel.head))
      p = { start: a.from, endA: a.to, endB: a.to };
    else {
      if (c.sel) {
        let A = xu(n, n.state.doc, c.sel);
        if (A && !A.eq(n.state.selection)) {
          let $ = n.state.tr.setSelection(A);
          o && $.setMeta("composition", o), n.dispatch($);
        }
      }
      return;
    }
  n.state.selection.from < n.state.selection.to && p.start == p.endB && n.state.selection instanceof X && (p.start > n.state.selection.from && p.start <= n.state.selection.from + 2 && n.state.selection.from >= c.from ? p.start = n.state.selection.from : p.endA < n.state.selection.to && p.endA >= n.state.selection.to - 2 && n.state.selection.to <= c.to && (p.endB += n.state.selection.to - p.endA, p.endA = n.state.selection.to)), Je && bn <= 11 && p.endB == p.start + 1 && p.endA == p.start && p.start > c.from && c.doc.textBetween(p.start - c.from - 1, p.start - c.from + 1) == " \xA0" && (p.start--, p.endA--, p.endB--);
  let m = c.doc.resolveNoCache(p.start - c.from), g = c.doc.resolveNoCache(p.endB - c.from), v = u.resolve(p.start), w = m.sameParent(g) && m.parent.inlineContent && v.end() >= p.endA, E;
  if ((Or && n.input.lastIOSEnter > Date.now() - 225 && (!w || i.some((A) => A.nodeName == "DIV" || A.nodeName == "P")) || !w && m.pos < c.doc.content.size && (!m.sameParent(g) || !m.parent.inlineContent) && !/\S/.test(c.doc.textBetween(m.pos, g.pos, "", "")) && (E = Z.findFrom(c.doc.resolve(m.pos + 1), 1, !0)) && E.head > m.pos) && n.someProp("handleKeyDown", (A) => A(n, Pn(13, "Enter")))) {
    n.input.lastIOSEnter = 0;
    return;
  }
  if (n.state.selection.anchor > p.start && Hy(u, p.start, p.endA, m, g) && n.someProp("handleKeyDown", (A) => A(n, Pn(8, "Backspace")))) {
    Kt && Ie && n.domObserver.suppressSelectionUpdates();
    return;
  }
  Ie && p.endB == p.start && (n.input.lastChromeDelete = Date.now()), Kt && !w && m.start() != g.start() && g.parentOffset == 0 && m.depth == g.depth && c.sel && c.sel.anchor == c.sel.head && c.sel.head == p.endA && (p.endB -= 2, g = c.doc.resolveNoCache(p.endB - c.from), setTimeout(() => {
    n.someProp("handleKeyDown", function(A) {
      return A(n, Pn(13, "Enter"));
    });
  }, 20));
  let y = p.start, T = p.endA, b, D, B;
  if (w) {
    if (m.pos == g.pos)
      Je && bn <= 11 && m.parentOffset == 0 && (n.domObserver.suppressSelectionUpdates(), setTimeout(() => Gt(n), 20)), b = n.state.tr.delete(y, T), D = u.resolve(p.start).marksAcross(u.resolve(p.endA));
    else if (p.endA == p.endB && (B = zy(m.parent.content.cut(m.parentOffset, g.parentOffset), v.parent.content.cut(v.parentOffset, p.endA - v.start()))))
      b = n.state.tr, B.type == "add" ? b.addMark(y, T, B.mark) : b.removeMark(y, T, B.mark);
    else if (m.parent.child(m.index()).isText && m.index() == g.index() - (g.textOffset ? 0 : 1)) {
      let A = m.parent.textBetween(m.parentOffset, g.parentOffset);
      if (n.someProp("handleTextInput", ($) => $(n, y, T, A)))
        return;
      b = n.state.tr.insertText(A, y, T);
    }
  }
  if (b || (b = n.state.tr.replace(y, T, c.doc.slice(p.start - c.from, p.endB - c.from))), c.sel) {
    let A = xu(n, b.doc, c.sel);
    A && !(Ie && n.composing && A.empty && (p.start != p.endB || n.input.lastChromeDelete < Date.now() - 100) && (A.head == y || A.head == b.mapping.map(T) - 1) || Je && A.empty && A.head == y) && b.setSelection(A);
  }
  D && b.ensureMarks(D), o && b.setMeta("composition", o), n.dispatch(b.scrollIntoView());
}
function xu(n, e, t) {
  return Math.max(t.anchor, t.head) > e.content.size ? null : $a(n, e.resolve(t.anchor), e.resolve(t.head));
}
function zy(n, e) {
  let t = n.firstChild.marks, r = e.firstChild.marks, i = t, o = r, s, l, a;
  for (let u = 0; u < r.length; u++)
    i = r[u].removeFromSet(i);
  for (let u = 0; u < t.length; u++)
    o = t[u].removeFromSet(o);
  if (i.length == 1 && o.length == 0)
    l = i[0], s = "add", a = (u) => u.mark(l.addToSet(u.marks));
  else if (i.length == 0 && o.length == 1)
    l = o[0], s = "remove", a = (u) => u.mark(l.removeFromSet(u.marks));
  else
    return null;
  let c = [];
  for (let u = 0; u < e.childCount; u++)
    c.push(a(e.child(u)));
  if (C.from(c).eq(n))
    return { mark: l, type: s };
}
function Hy(n, e, t, r, i) {
  if (t - e <= i.pos - r.pos || bl(r, !0, !1) < i.pos)
    return !1;
  let o = n.resolve(e);
  if (!r.parent.isTextblock) {
    let l = o.nodeAfter;
    return l != null && t == e + l.nodeSize;
  }
  if (o.parentOffset < o.parent.content.size || !o.parent.isTextblock)
    return !1;
  let s = n.resolve(bl(o, !0, !0));
  return !s.parent.isTextblock || s.pos > t || bl(s, !0, !1) < t ? !1 : r.parent.content.cut(r.parentOffset).eq(s.parent.content);
}
function bl(n, e, t) {
  let r = n.depth, i = e ? n.end() : n.pos;
  for (; r > 0 && (e || n.indexAfter(r) == n.node(r).childCount); )
    r--, i++, e = !1;
  if (t) {
    let o = n.node(r).maybeChild(n.indexAfter(r));
    for (; o && !o.isLeaf; )
      o = o.firstChild, i++;
  }
  return i;
}
function Vy(n, e, t, r, i) {
  let o = n.findDiffStart(e, t);
  if (o == null)
    return null;
  let { a: s, b: l } = n.findDiffEnd(e, t + n.size, t + e.size);
  if (i == "end") {
    let a = Math.max(0, o - Math.min(s, l));
    r -= s + a - o;
  }
  if (s < o && n.size < e.size) {
    let a = r <= o && r >= s ? o - r : 0;
    o -= a, o && o < e.size && Su(e.textBetween(o - 1, o + 1)) && (o += a ? 1 : -1), l = o + (l - s), s = o;
  } else if (l < o) {
    let a = r <= o && r >= l ? o - r : 0;
    o -= a, o && o < n.size && Su(n.textBetween(o - 1, o + 1)) && (o += a ? 1 : -1), s = o + (s - l), l = o;
  }
  return { start: o, endA: s, endB: l };
}
function Su(n) {
  if (n.length != 2)
    return !1;
  let e = n.charCodeAt(0), t = n.charCodeAt(1);
  return e >= 56320 && e <= 57343 && t >= 55296 && t <= 56319;
}
class jy {
  constructor(e, t) {
    this._root = null, this.focused = !1, this.trackWrites = null, this.mounted = !1, this.markCursor = null, this.cursorWrapper = null, this.lastSelectedViewDesc = void 0, this.input = new ly(), this.prevDirectPlugins = [], this.pluginViews = [], this.requiresGeckoHackNode = !1, this.dragging = null, this._props = t, this.state = t.state, this.directPlugins = t.plugins || [], this.directPlugins.forEach(Mu), this.dispatch = this.dispatch.bind(this), this.dom = e && e.mount || document.createElement("div"), e && (e.appendChild ? e.appendChild(this.dom) : typeof e == "function" ? e(this.dom) : e.mount && (this.mounted = !0)), this.editable = Tu(this), Cu(this), this.nodeViews = Ou(this), this.docView = iu(this.state.doc, Eu(this), vl(this), this.dom, this), this.domObserver = new Iy(this, (r, i, o, s) => $y(this, r, i, o, s)), this.domObserver.start(), ay(this), this.updatePluginViews();
  }
  get composing() {
    return this.input.composing;
  }
  get props() {
    if (this._props.state != this.state) {
      let e = this._props;
      this._props = {};
      for (let t in e)
        this._props[t] = e[t];
      this._props.state = this.state;
    }
    return this._props;
  }
  update(e) {
    e.handleDOMEvents != this._props.handleDOMEvents && oa(this);
    let t = this._props;
    this._props = e, e.plugins && (e.plugins.forEach(Mu), this.directPlugins = e.plugins), this.updateStateInner(e.state, t);
  }
  setProps(e) {
    let t = {};
    for (let r in this._props)
      t[r] = this._props[r];
    t.state = this.state;
    for (let r in e)
      t[r] = e[r];
    this.update(t);
  }
  updateState(e) {
    this.updateStateInner(e, this._props);
  }
  updateStateInner(e, t) {
    var r;
    let i = this.state, o = !1, s = !1;
    e.storedMarks && this.composing && (Hd(this), s = !0), this.state = e;
    let l = i.plugins != e.plugins || this._props.plugins != t.plugins;
    if (l || this._props.plugins != t.plugins || this._props.nodeViews != t.nodeViews) {
      let h = Ou(this);
      Uy(h, this.nodeViews) && (this.nodeViews = h, o = !0);
    }
    (l || t.handleDOMEvents != this._props.handleDOMEvents) && oa(this), this.editable = Tu(this), Cu(this);
    let a = vl(this), c = Eu(this), u = i.plugins != e.plugins && !i.doc.eq(e.doc) ? "reset" : e.scrollToSelection > i.scrollToSelection ? "to selection" : "preserve", f = o || !this.docView.matchesNode(e.doc, c, a);
    (f || !e.selection.eq(i.selection)) && (s = !0);
    let d = u == "preserve" && s && this.dom.style.overflowAnchor == null && xg(this);
    if (s) {
      this.domObserver.stop();
      let h = f && (Je || Ie) && !this.composing && !i.selection.empty && !e.selection.empty && Wy(i.selection, e.selection);
      if (f) {
        let p = Ie ? this.trackWrites = this.domSelectionRange().focusNode : null;
        this.composing && (this.input.compositionNode = ky(this)), (o || !this.docView.update(e.doc, c, a, this)) && (this.docView.updateOuterDeco(c), this.docView.destroy(), this.docView = iu(e.doc, c, a, this.dom, this)), p && !this.trackWrites && (h = !0);
      }
      h || !(this.input.mouseDown && this.domObserver.currentSelection.eq(this.domSelectionRange()) && Kg(this)) ? Gt(this, h) : (Ad(this, e.selection), this.domObserver.setCurSelection()), this.domObserver.start();
    }
    this.updatePluginViews(i), ((r = this.dragging) === null || r === void 0 ? void 0 : r.node) && !i.doc.eq(e.doc) && this.updateDraggedNode(this.dragging, i), u == "reset" ? this.dom.scrollTop = 0 : u == "to selection" ? this.scrollToSelection() : d && Sg(d);
  }
  scrollToSelection() {
    let e = this.domSelectionRange().focusNode;
    if (!(!e || !this.dom.contains(e.nodeType == 1 ? e : e.parentNode))) {
      if (!this.someProp("handleScrollToSelection", (t) => t(this)))
        if (this.state.selection instanceof z) {
          let t = this.docView.domAfterPos(this.state.selection.from);
          t.nodeType == 1 && Qc(this, t.getBoundingClientRect(), e);
        } else
          Qc(this, this.coordsAtPos(this.state.selection.head, 1), e);
    }
  }
  destroyPluginViews() {
    let e;
    for (; e = this.pluginViews.pop(); )
      e.destroy && e.destroy();
  }
  updatePluginViews(e) {
    if (!e || e.plugins != this.state.plugins || this.directPlugins != this.prevDirectPlugins) {
      this.prevDirectPlugins = this.directPlugins, this.destroyPluginViews();
      for (let t = 0; t < this.directPlugins.length; t++) {
        let r = this.directPlugins[t];
        r.spec.view && this.pluginViews.push(r.spec.view(this));
      }
      for (let t = 0; t < this.state.plugins.length; t++) {
        let r = this.state.plugins[t];
        r.spec.view && this.pluginViews.push(r.spec.view(this));
      }
    } else
      for (let t = 0; t < this.pluginViews.length; t++) {
        let r = this.pluginViews[t];
        r.update && r.update(this, e);
      }
  }
  updateDraggedNode(e, t) {
    let r = e.node, i = -1;
    if (this.state.doc.nodeAt(r.from) == r.node)
      i = r.from;
    else {
      let o = r.from + (this.state.doc.content.size - t.doc.content.size);
      (o > 0 && this.state.doc.nodeAt(o)) == r.node && (i = o);
    }
    this.dragging = new jd(e.slice, e.move, i < 0 ? void 0 : z.create(this.state.doc, i));
  }
  someProp(e, t) {
    let r = this._props && this._props[e], i;
    if (r != null && (i = t ? t(r) : r))
      return i;
    for (let s = 0; s < this.directPlugins.length; s++) {
      let l = this.directPlugins[s].props[e];
      if (l != null && (i = t ? t(l) : l))
        return i;
    }
    let o = this.state.plugins;
    if (o)
      for (let s = 0; s < o.length; s++) {
        let l = o[s].props[e];
        if (l != null && (i = t ? t(l) : l))
          return i;
      }
  }
  hasFocus() {
    if (Je) {
      let e = this.root.activeElement;
      if (e == this.dom)
        return !0;
      if (!e || !this.dom.contains(e))
        return !1;
      for (; e && this.dom != e && this.dom.contains(e); ) {
        if (e.contentEditable == "false")
          return !1;
        e = e.parentElement;
      }
      return !0;
    }
    return this.root.activeElement == this.dom;
  }
  focus() {
    this.domObserver.stop(), this.editable && Eg(this.dom), Gt(this), this.domObserver.start();
  }
  get root() {
    let e = this._root;
    if (e == null) {
      for (let t = this.dom.parentNode; t; t = t.parentNode)
        if (t.nodeType == 9 || t.nodeType == 11 && t.host)
          return t.getSelection || (Object.getPrototypeOf(t).getSelection = () => t.ownerDocument.getSelection()), this._root = t;
    }
    return e || document;
  }
  updateRoot() {
    this._root = null;
  }
  posAtCoords(e) {
    return Ag(this, e);
  }
  coordsAtPos(e, t = 1) {
    return kd(this, e, t);
  }
  domAtPos(e, t = 0) {
    return this.docView.domFromPos(e, t);
  }
  nodeDOM(e) {
    let t = this.docView.descAt(e);
    return t ? t.nodeDOM : null;
  }
  posAtDOM(e, t, r = -1) {
    let i = this.docView.posFromDOM(e, t, r);
    if (i == null)
      throw new RangeError("DOM position not inside the editor");
    return i;
  }
  endOfTextblock(e, t) {
    return Pg(this, t || this.state, e);
  }
  pasteHTML(e, t) {
    return Ei(this, "", e, !1, t || new ClipboardEvent("paste"));
  }
  pasteText(e, t) {
    return Ei(this, e, null, !0, t || new ClipboardEvent("paste"));
  }
  serializeForClipboard(e) {
    return za(this, e);
  }
  destroy() {
    !this.docView || (cy(this), this.destroyPluginViews(), this.mounted ? (this.docView.update(this.state.doc, [], vl(this), this), this.dom.textContent = "") : this.dom.parentNode && this.dom.parentNode.removeChild(this.dom), this.docView.destroy(), this.docView = null, fg());
  }
  get isDestroyed() {
    return this.docView == null;
  }
  dispatchEvent(e) {
    return fy(this, e);
  }
  dispatch(e) {
    let t = this._props.dispatchTransaction;
    t ? t.call(this, e) : this.updateState(this.state.apply(e));
  }
  domSelectionRange() {
    let e = this.domSelection();
    return e ? Be && this.root.nodeType === 11 && gg(this.dom.ownerDocument) == this.dom && Py(this, e) || e : { focusNode: null, focusOffset: 0, anchorNode: null, anchorOffset: 0 };
  }
  domSelection() {
    return this.root.getSelection();
  }
}
function Eu(n) {
  let e = /* @__PURE__ */ Object.create(null);
  return e.class = "ProseMirror", e.contenteditable = String(n.editable), n.someProp("attributes", (t) => {
    if (typeof t == "function" && (t = t(n.state)), t)
      for (let r in t)
        r == "class" ? e.class += " " + t[r] : r == "style" ? e.style = (e.style ? e.style + ";" : "") + t[r] : !e[r] && r != "contenteditable" && r != "nodeName" && (e[r] = String(t[r]));
  }), e.translate || (e.translate = "no"), [ut.node(0, n.state.doc.content.size, e)];
}
function Cu(n) {
  if (n.markCursor) {
    let e = document.createElement("img");
    e.className = "ProseMirror-separator", e.setAttribute("mark-placeholder", "true"), e.setAttribute("alt", ""), n.cursorWrapper = { dom: e, deco: ut.widget(n.state.selection.from, e, { raw: !0, marks: n.markCursor }) };
  } else
    n.cursorWrapper = null;
}
function Tu(n) {
  return !n.someProp("editable", (e) => e(n.state) === !1);
}
function Wy(n, e) {
  let t = Math.min(n.$anchor.sharedDepth(n.head), e.$anchor.sharedDepth(e.head));
  return n.$anchor.start(t) != e.$anchor.start(t);
}
function Ou(n) {
  let e = /* @__PURE__ */ Object.create(null);
  function t(r) {
    for (let i in r)
      Object.prototype.hasOwnProperty.call(e, i) || (e[i] = r[i]);
  }
  return n.someProp("nodeViews", t), n.someProp("markViews", t), e;
}
function Uy(n, e) {
  let t = 0, r = 0;
  for (let i in n) {
    if (n[i] != e[i])
      return !0;
    t++;
  }
  for (let i in e)
    r++;
  return t != r;
}
function Mu(n) {
  if (n.spec.state || n.spec.filterTransaction || n.spec.appendTransaction)
    throw new RangeError("Plugins passed directly to the view must not have a state component");
}
var xn = {
  8: "Backspace",
  9: "Tab",
  10: "Enter",
  12: "NumLock",
  13: "Enter",
  16: "Shift",
  17: "Control",
  18: "Alt",
  20: "CapsLock",
  27: "Escape",
  32: " ",
  33: "PageUp",
  34: "PageDown",
  35: "End",
  36: "Home",
  37: "ArrowLeft",
  38: "ArrowUp",
  39: "ArrowRight",
  40: "ArrowDown",
  44: "PrintScreen",
  45: "Insert",
  46: "Delete",
  59: ";",
  61: "=",
  91: "Meta",
  92: "Meta",
  106: "*",
  107: "+",
  108: ",",
  109: "-",
  110: ".",
  111: "/",
  144: "NumLock",
  145: "ScrollLock",
  160: "Shift",
  161: "Shift",
  162: "Control",
  163: "Control",
  164: "Alt",
  165: "Alt",
  173: "-",
  186: ";",
  187: "=",
  188: ",",
  189: "-",
  190: ".",
  191: "/",
  192: "`",
  219: "[",
  220: "\\",
  221: "]",
  222: "'"
}, Ko = {
  48: ")",
  49: "!",
  50: "@",
  51: "#",
  52: "$",
  53: "%",
  54: "^",
  55: "&",
  56: "*",
  57: "(",
  59: ":",
  61: "+",
  173: "_",
  186: ":",
  187: "+",
  188: "<",
  189: "_",
  190: ">",
  191: "?",
  192: "~",
  219: "{",
  220: "|",
  221: "}",
  222: '"'
}, Ky = typeof navigator < "u" && /Mac/.test(navigator.platform), qy = typeof navigator < "u" && /MSIE \d|Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(navigator.userAgent);
for (var Me = 0; Me < 10; Me++)
  xn[48 + Me] = xn[96 + Me] = String(Me);
for (var Me = 1; Me <= 24; Me++)
  xn[Me + 111] = "F" + Me;
for (var Me = 65; Me <= 90; Me++)
  xn[Me] = String.fromCharCode(Me + 32), Ko[Me] = String.fromCharCode(Me);
for (var wl in xn)
  Ko.hasOwnProperty(wl) || (Ko[wl] = xn[wl]);
function Jy(n) {
  var e = Ky && n.metaKey && n.shiftKey && !n.ctrlKey && !n.altKey || qy && n.shiftKey && n.key && n.key.length == 1 || n.key == "Unidentified", t = !e && n.key || (n.shiftKey ? Ko : xn)[n.keyCode] || n.key || "Unidentified";
  return t == "Esc" && (t = "Escape"), t == "Del" && (t = "Delete"), t == "Left" && (t = "ArrowLeft"), t == "Up" && (t = "ArrowUp"), t == "Right" && (t = "ArrowRight"), t == "Down" && (t = "ArrowDown"), t;
}
const Gy = typeof navigator < "u" && /Mac|iP(hone|[oa]d)/.test(navigator.platform), Yy = typeof navigator < "u" && /Win/.test(navigator.platform);
function Xy(n) {
  let e = n.split(/-(?!$)/), t = e[e.length - 1];
  t == "Space" && (t = " ");
  let r, i, o, s;
  for (let l = 0; l < e.length - 1; l++) {
    let a = e[l];
    if (/^(cmd|meta|m)$/i.test(a))
      s = !0;
    else if (/^a(lt)?$/i.test(a))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      i = !0;
    else if (/^s(hift)?$/i.test(a))
      o = !0;
    else if (/^mod$/i.test(a))
      Gy ? s = !0 : i = !0;
    else
      throw new Error("Unrecognized modifier name: " + a);
  }
  return r && (t = "Alt-" + t), i && (t = "Ctrl-" + t), s && (t = "Meta-" + t), o && (t = "Shift-" + t), t;
}
function Qy(n) {
  let e = /* @__PURE__ */ Object.create(null);
  for (let t in n)
    e[Xy(t)] = n[t];
  return e;
}
function kl(n, e, t = !0) {
  return e.altKey && (n = "Alt-" + n), e.ctrlKey && (n = "Ctrl-" + n), e.metaKey && (n = "Meta-" + n), t && e.shiftKey && (n = "Shift-" + n), n;
}
function Zy(n) {
  return new Ae({ props: { handleKeyDown: e0(n) } });
}
function e0(n) {
  let e = Qy(n);
  return function(t, r) {
    let i = Jy(r), o, s = e[kl(i, r)];
    if (s && s(t.state, t.dispatch, t))
      return !0;
    if (i.length == 1 && i != " ") {
      if (r.shiftKey) {
        let l = e[kl(i, r, !1)];
        if (l && l(t.state, t.dispatch, t))
          return !0;
      }
      if ((r.altKey || r.metaKey || r.ctrlKey) && !(Yy && r.ctrlKey && r.altKey) && (o = xn[r.keyCode]) && o != i) {
        let l = e[kl(o, r)];
        if (l && l(t.state, t.dispatch, t))
          return !0;
      }
    }
    return !1;
  };
}
const t0 = (n, e) => n.selection.empty ? !1 : (e && e(n.tr.deleteSelection().scrollIntoView()), !0);
function Jd(n, e) {
  let { $cursor: t } = n.selection;
  return !t || (e ? !e.endOfTextblock("backward", n) : t.parentOffset > 0) ? null : t;
}
const n0 = (n, e, t) => {
  let r = Jd(n, t);
  if (!r)
    return !1;
  let i = Ka(r);
  if (!i) {
    let s = r.blockRange(), l = s && _r(s);
    return l == null ? !1 : (e && e(n.tr.lift(s, l).scrollIntoView()), !0);
  }
  let o = i.nodeBefore;
  if (Qd(n, i, e, -1))
    return !0;
  if (r.parent.content.size == 0 && (Mr(o, "end") || z.isSelectable(o)))
    for (let s = r.depth; ; s--) {
      let l = Ps(n.doc, r.before(s), r.after(s), R.empty);
      if (l && l.slice.size < l.to - l.from) {
        if (e) {
          let a = n.tr.step(l);
          a.setSelection(Mr(o, "end") ? Z.findFrom(a.doc.resolve(a.mapping.map(i.pos, -1)), -1) : z.create(a.doc, i.pos - o.nodeSize)), e(a.scrollIntoView());
        }
        return !0;
      }
      if (s == 1 || r.node(s - 1).childCount > 1)
        break;
    }
  return o.isAtom && i.depth == r.depth - 1 ? (e && e(n.tr.delete(i.pos - o.nodeSize, i.pos).scrollIntoView()), !0) : !1;
}, r0 = (n, e, t) => {
  let r = Jd(n, t);
  if (!r)
    return !1;
  let i = Ka(r);
  return i ? Gd(n, i, e) : !1;
}, i0 = (n, e, t) => {
  let r = Yd(n, t);
  if (!r)
    return !1;
  let i = qa(r);
  return i ? Gd(n, i, e) : !1;
};
function Gd(n, e, t) {
  let r = e.nodeBefore, i = r, o = e.pos - 1;
  for (; !i.isTextblock; o--) {
    if (i.type.spec.isolating)
      return !1;
    let u = i.lastChild;
    if (!u)
      return !1;
    i = u;
  }
  let s = e.nodeAfter, l = s, a = e.pos + 1;
  for (; !l.isTextblock; a++) {
    if (l.type.spec.isolating)
      return !1;
    let u = l.firstChild;
    if (!u)
      return !1;
    l = u;
  }
  let c = Ps(n.doc, o, a, R.empty);
  if (!c || c.from != o || c instanceof be && c.slice.size >= a - o)
    return !1;
  if (t) {
    let u = n.tr.step(c);
    u.setSelection(X.create(u.doc, o)), t(u.scrollIntoView());
  }
  return !0;
}
function Mr(n, e, t = !1) {
  for (let r = n; r; r = e == "start" ? r.firstChild : r.lastChild) {
    if (r.isTextblock)
      return !0;
    if (t && r.childCount != 1)
      return !1;
  }
  return !1;
}
const o0 = (n, e, t) => {
  let { $head: r, empty: i } = n.selection, o = r;
  if (!i)
    return !1;
  if (r.parent.isTextblock) {
    if (t ? !t.endOfTextblock("backward", n) : r.parentOffset > 0)
      return !1;
    o = Ka(r);
  }
  let s = o && o.nodeBefore;
  return !s || !z.isSelectable(s) ? !1 : (e && e(n.tr.setSelection(z.create(n.doc, o.pos - s.nodeSize)).scrollIntoView()), !0);
};
function Ka(n) {
  if (!n.parent.type.spec.isolating)
    for (let e = n.depth - 1; e >= 0; e--) {
      if (n.index(e) > 0)
        return n.doc.resolve(n.before(e + 1));
      if (n.node(e).type.spec.isolating)
        break;
    }
  return null;
}
function Yd(n, e) {
  let { $cursor: t } = n.selection;
  return !t || (e ? !e.endOfTextblock("forward", n) : t.parentOffset < t.parent.content.size) ? null : t;
}
const s0 = (n, e, t) => {
  let r = Yd(n, t);
  if (!r)
    return !1;
  let i = qa(r);
  if (!i)
    return !1;
  let o = i.nodeAfter;
  if (Qd(n, i, e, 1))
    return !0;
  if (r.parent.content.size == 0 && (Mr(o, "start") || z.isSelectable(o))) {
    let s = Ps(n.doc, r.before(), r.after(), R.empty);
    if (s && s.slice.size < s.to - s.from) {
      if (e) {
        let l = n.tr.step(s);
        l.setSelection(Mr(o, "start") ? Z.findFrom(l.doc.resolve(l.mapping.map(i.pos)), 1) : z.create(l.doc, l.mapping.map(i.pos))), e(l.scrollIntoView());
      }
      return !0;
    }
  }
  return o.isAtom && i.depth == r.depth - 1 ? (e && e(n.tr.delete(i.pos, i.pos + o.nodeSize).scrollIntoView()), !0) : !1;
}, l0 = (n, e, t) => {
  let { $head: r, empty: i } = n.selection, o = r;
  if (!i)
    return !1;
  if (r.parent.isTextblock) {
    if (t ? !t.endOfTextblock("forward", n) : r.parentOffset < r.parent.content.size)
      return !1;
    o = qa(r);
  }
  let s = o && o.nodeAfter;
  return !s || !z.isSelectable(s) ? !1 : (e && e(n.tr.setSelection(z.create(n.doc, o.pos)).scrollIntoView()), !0);
};
function qa(n) {
  if (!n.parent.type.spec.isolating)
    for (let e = n.depth - 1; e >= 0; e--) {
      let t = n.node(e);
      if (n.index(e) + 1 < t.childCount)
        return n.doc.resolve(n.after(e + 1));
      if (t.type.spec.isolating)
        break;
    }
  return null;
}
const a0 = (n, e) => {
  let t = n.selection, r = t instanceof z, i;
  if (r) {
    if (t.node.isTextblock || !er(n.doc, t.from))
      return !1;
    i = t.from;
  } else if (i = Rs(n.doc, t.from, -1), i == null)
    return !1;
  if (e) {
    let o = n.tr.join(i);
    r && o.setSelection(z.create(o.doc, i - n.doc.resolve(i).nodeBefore.nodeSize)), e(o.scrollIntoView());
  }
  return !0;
}, c0 = (n, e) => {
  let t = n.selection, r;
  if (t instanceof z) {
    if (t.node.isTextblock || !er(n.doc, t.to))
      return !1;
    r = t.to;
  } else if (r = Rs(n.doc, t.to, 1), r == null)
    return !1;
  return e && e(n.tr.join(r).scrollIntoView()), !0;
}, u0 = (n, e) => {
  let { $from: t, $to: r } = n.selection, i = t.blockRange(r), o = i && _r(i);
  return o == null ? !1 : (e && e(n.tr.lift(i, o).scrollIntoView()), !0);
}, f0 = (n, e) => {
  let { $head: t, $anchor: r } = n.selection;
  return !t.parent.type.spec.code || !t.sameParent(r) ? !1 : (e && e(n.tr.insertText(`
`).scrollIntoView()), !0);
};
function Xd(n) {
  for (let e = 0; e < n.edgeCount; e++) {
    let { type: t } = n.edge(e);
    if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  }
  return null;
}
const d0 = (n, e) => {
  let { $head: t, $anchor: r } = n.selection;
  if (!t.parent.type.spec.code || !t.sameParent(r))
    return !1;
  let i = t.node(-1), o = t.indexAfter(-1), s = Xd(i.contentMatchAt(o));
  if (!s || !i.canReplaceWith(o, o, s))
    return !1;
  if (e) {
    let l = t.after(), a = n.tr.replaceWith(l, l, s.createAndFill());
    a.setSelection(Z.near(a.doc.resolve(l), 1)), e(a.scrollIntoView());
  }
  return !0;
}, h0 = (n, e) => {
  let t = n.selection, { $from: r, $to: i } = t;
  if (t instanceof ft || r.parent.inlineContent || i.parent.inlineContent)
    return !1;
  let o = Xd(i.parent.contentMatchAt(i.indexAfter()));
  if (!o || !o.isTextblock)
    return !1;
  if (e) {
    let s = (!r.parentOffset && i.index() < i.parent.childCount ? r : i).pos, l = n.tr.insert(s, o.createAndFill());
    l.setSelection(X.create(l.doc, s + 1)), e(l.scrollIntoView());
  }
  return !0;
}, p0 = (n, e) => {
  let { $cursor: t } = n.selection;
  if (!t || t.parent.content.size)
    return !1;
  if (t.depth > 1 && t.after() != t.end(-1)) {
    let o = t.before();
    if (wr(n.doc, o))
      return e && e(n.tr.split(o).scrollIntoView()), !0;
  }
  let r = t.blockRange(), i = r && _r(r);
  return i == null ? !1 : (e && e(n.tr.lift(r, i).scrollIntoView()), !0);
}, m0 = (n, e) => {
  let { $from: t, to: r } = n.selection, i, o = t.sharedDepth(r);
  return o == 0 ? !1 : (i = t.before(o), e && e(n.tr.setSelection(z.create(n.doc, i))), !0);
};
function g0(n, e, t) {
  let r = e.nodeBefore, i = e.nodeAfter, o = e.index();
  return !r || !i || !r.type.compatibleContent(i.type) ? !1 : !r.content.size && e.parent.canReplace(o - 1, o) ? (t && t(n.tr.delete(e.pos - r.nodeSize, e.pos).scrollIntoView()), !0) : !e.parent.canReplace(o, o + 1) || !(i.isTextblock || er(n.doc, e.pos)) ? !1 : (t && t(n.tr.join(e.pos).scrollIntoView()), !0);
}
function Qd(n, e, t, r) {
  let i = e.nodeBefore, o = e.nodeAfter, s, l, a = i.type.spec.isolating || o.type.spec.isolating;
  if (!a && g0(n, e, t))
    return !0;
  let c = !a && e.parent.canReplace(e.index(), e.index() + 1);
  if (c && (s = (l = i.contentMatchAt(i.childCount)).findWrapping(o.type)) && l.matchType(s[0] || o.type).validEnd) {
    if (t) {
      let h = e.pos + o.nodeSize, p = C.empty;
      for (let v = s.length - 1; v >= 0; v--)
        p = C.from(s[v].create(null, p));
      p = C.from(i.copy(p));
      let m = n.tr.step(new we(e.pos - 1, h, e.pos, h, new R(p, 1, 0), s.length, !0)), g = m.doc.resolve(h + 2 * s.length);
      g.nodeAfter && g.nodeAfter.type == i.type && er(m.doc, g.pos) && m.join(g.pos), t(m.scrollIntoView());
    }
    return !0;
  }
  let u = o.type.spec.isolating || r > 0 && a ? null : Z.findFrom(e, 1), f = u && u.$from.blockRange(u.$to), d = f && _r(f);
  if (d != null && d >= e.depth)
    return t && t(n.tr.lift(f, d).scrollIntoView()), !0;
  if (c && Mr(o, "start", !0) && Mr(i, "end")) {
    let h = i, p = [];
    for (; p.push(h), !h.isTextblock; )
      h = h.lastChild;
    let m = o, g = 1;
    for (; !m.isTextblock; m = m.firstChild)
      g++;
    if (h.canReplace(h.childCount, h.childCount, m.content)) {
      if (t) {
        let v = C.empty;
        for (let E = p.length - 1; E >= 0; E--)
          v = C.from(p[E].copy(v));
        let w = n.tr.step(new we(e.pos - p.length, e.pos + o.nodeSize, e.pos + g, e.pos + o.nodeSize - g, new R(v, p.length, 0), 0, !0));
        t(w.scrollIntoView());
      }
      return !0;
    }
  }
  return !1;
}
function Zd(n) {
  return function(e, t) {
    let r = e.selection, i = n < 0 ? r.$from : r.$to, o = i.depth;
    for (; i.node(o).isInline; ) {
      if (!o)
        return !1;
      o--;
    }
    return i.node(o).isTextblock ? (t && t(e.tr.setSelection(X.create(e.doc, n < 0 ? i.start(o) : i.end(o)))), !0) : !1;
  };
}
const y0 = Zd(-1), v0 = Zd(1);
function b0(n, e = null) {
  return function(t, r) {
    let { $from: i, $to: o } = t.selection, s = i.blockRange(o), l = s && id(s, n, e);
    return l ? (r && r(t.tr.wrap(s, l).scrollIntoView()), !0) : !1;
  };
}
function Au(n, e = null) {
  return function(t, r) {
    let i = !1;
    for (let o = 0; o < t.selection.ranges.length && !i; o++) {
      let { $from: { pos: s }, $to: { pos: l } } = t.selection.ranges[o];
      t.doc.nodesBetween(s, l, (a, c) => {
        if (i)
          return !1;
        if (!(!a.isTextblock || a.hasMarkup(n, e)))
          if (a.type == n)
            i = !0;
          else {
            let u = t.doc.resolve(c), f = u.index();
            i = u.parent.canReplaceWith(f, f + 1, n);
          }
      });
    }
    if (!i)
      return !1;
    if (r) {
      let o = t.tr;
      for (let s = 0; s < t.selection.ranges.length; s++) {
        let { $from: { pos: l }, $to: { pos: a } } = t.selection.ranges[s];
        o.setBlockType(l, a, n, e);
      }
      r(o.scrollIntoView());
    }
    return !0;
  };
}
typeof navigator < "u" ? /Mac|iP(hone|[oa]d)/.test(navigator.platform) : typeof os < "u" && os.platform && os.platform() == "darwin";
function w0(n, e = null) {
  return function(t, r) {
    let { $from: i, $to: o } = t.selection, s = i.blockRange(o);
    if (!s)
      return !1;
    let l = r ? t.tr : null;
    return k0(l, s, n, e) ? (r && r(l.scrollIntoView()), !0) : !1;
  };
}
function k0(n, e, t, r = null) {
  let i = !1, o = e, s = e.$from.doc;
  if (e.depth >= 2 && e.$from.node(e.depth - 1).type.compatibleContent(t) && e.startIndex == 0) {
    if (e.$from.index(e.depth - 1) == 0)
      return !1;
    let a = s.resolve(e.start - 2);
    o = new Fo(a, a, e.depth), e.endIndex < e.parent.childCount && (e = new Fo(e.$from, s.resolve(e.$to.end(e.depth)), e.depth)), i = !0;
  }
  let l = id(o, t, r, e);
  return l ? (n && x0(n, e, l, i, t), !0) : !1;
}
function x0(n, e, t, r, i) {
  let o = C.empty;
  for (let u = t.length - 1; u >= 0; u--)
    o = C.from(t[u].type.create(t[u].attrs, o));
  n.step(new we(e.start - (r ? 2 : 0), e.end, e.start, e.end, new R(o, 0, 0), t.length, !0));
  let s = 0;
  for (let u = 0; u < t.length; u++)
    t[u].type == i && (s = u + 1);
  let l = t.length - s, a = e.start + t.length - (r ? 2 : 0), c = e.parent;
  for (let u = e.startIndex, f = e.endIndex, d = !0; u < f; u++, d = !1)
    !d && wr(n.doc, a, l) && (n.split(a, l), a += 2 * l), a += c.child(u).nodeSize;
  return n;
}
function S0(n) {
  return function(e, t) {
    let { $from: r, $to: i } = e.selection, o = r.blockRange(i, (s) => s.childCount > 0 && s.firstChild.type == n);
    return o ? t ? r.node(o.depth - 1).type == n ? E0(e, t, n, o) : C0(e, t, o) : !0 : !1;
  };
}
function E0(n, e, t, r) {
  let i = n.tr, o = r.end, s = r.$to.end(r.depth);
  o < s && (i.step(new we(o - 1, s, o, s, new R(C.from(t.create(null, r.parent.copy())), 1, 0), 1, !0)), r = new Fo(i.doc.resolve(r.$from.pos), i.doc.resolve(s), r.depth));
  const l = _r(r);
  if (l == null)
    return !1;
  i.lift(r, l);
  let a = i.doc.resolve(i.mapping.map(o, -1) - 1);
  return er(i.doc, a.pos) && a.nodeBefore.type == a.nodeAfter.type && i.join(a.pos), e(i.scrollIntoView()), !0;
}
function C0(n, e, t) {
  let r = n.tr, i = t.parent;
  for (let h = t.end, p = t.endIndex - 1, m = t.startIndex; p > m; p--)
    h -= i.child(p).nodeSize, r.delete(h - 1, h + 1);
  let o = r.doc.resolve(t.start), s = o.nodeAfter;
  if (r.mapping.map(t.end) != t.start + o.nodeAfter.nodeSize)
    return !1;
  let l = t.startIndex == 0, a = t.endIndex == i.childCount, c = o.node(-1), u = o.index(-1);
  if (!c.canReplace(u + (l ? 0 : 1), u + 1, s.content.append(a ? C.empty : C.from(i))))
    return !1;
  let f = o.pos, d = f + s.nodeSize;
  return r.step(new we(f - (l ? 1 : 0), d + (a ? 1 : 0), f + 1, d - 1, new R((l ? C.empty : C.from(i.copy(C.empty))).append(a ? C.empty : C.from(i.copy(C.empty))), l ? 0 : 1, a ? 0 : 1), l ? 0 : 1)), e(r.scrollIntoView()), !0;
}
function T0(n) {
  return function(e, t) {
    let { $from: r, $to: i } = e.selection, o = r.blockRange(i, (c) => c.childCount > 0 && c.firstChild.type == n);
    if (!o)
      return !1;
    let s = o.startIndex;
    if (s == 0)
      return !1;
    let l = o.parent, a = l.child(s - 1);
    if (a.type != n)
      return !1;
    if (t) {
      let c = a.lastChild && a.lastChild.type == l.type, u = C.from(c ? n.create() : null), f = new R(C.from(n.create(null, C.from(l.type.create(null, u)))), c ? 3 : 1, 0), d = o.start, h = o.end;
      t(e.tr.step(new we(d - (c ? 3 : 1), h, d, h, f, 1, !0)).scrollIntoView());
    }
    return !0;
  };
}
function $s(n) {
  const { state: e, transaction: t } = n;
  let { selection: r } = t, { doc: i } = t, { storedMarks: o } = t;
  return {
    ...e,
    apply: e.apply.bind(e),
    applyTransaction: e.applyTransaction.bind(e),
    plugins: e.plugins,
    schema: e.schema,
    reconfigure: e.reconfigure.bind(e),
    toJSON: e.toJSON.bind(e),
    get storedMarks() {
      return o;
    },
    get selection() {
      return r;
    },
    get doc() {
      return i;
    },
    get tr() {
      return r = t.selection, i = t.doc, o = t.storedMarks, t;
    }
  };
}
class zs {
  constructor(e) {
    this.editor = e.editor, this.rawCommands = this.editor.extensionManager.commands, this.customState = e.state;
  }
  get hasCustomState() {
    return !!this.customState;
  }
  get state() {
    return this.customState || this.editor.state;
  }
  get commands() {
    const { rawCommands: e, editor: t, state: r } = this, { view: i } = t, { tr: o } = r, s = this.buildProps(o);
    return Object.fromEntries(Object.entries(e).map(([l, a]) => [l, (...u) => {
      const f = a(...u)(s);
      return !o.getMeta("preventDispatch") && !this.hasCustomState && i.dispatch(o), f;
    }]));
  }
  get chain() {
    return () => this.createChain();
  }
  get can() {
    return () => this.createCan();
  }
  createChain(e, t = !0) {
    const { rawCommands: r, editor: i, state: o } = this, { view: s } = i, l = [], a = !!e, c = e || o.tr, u = () => (!a && t && !c.getMeta("preventDispatch") && !this.hasCustomState && s.dispatch(c), l.every((d) => d === !0)), f = {
      ...Object.fromEntries(Object.entries(r).map(([d, h]) => [d, (...m) => {
        const g = this.buildProps(c, t), v = h(...m)(g);
        return l.push(v), f;
      }])),
      run: u
    };
    return f;
  }
  createCan(e) {
    const { rawCommands: t, state: r } = this, i = !1, o = e || r.tr, s = this.buildProps(o, i);
    return {
      ...Object.fromEntries(Object.entries(t).map(([a, c]) => [a, (...u) => c(...u)({ ...s, dispatch: void 0 })])),
      chain: () => this.createChain(o, i)
    };
  }
  buildProps(e, t = !0) {
    const { rawCommands: r, editor: i, state: o } = this, { view: s } = i, l = {
      tr: e,
      editor: i,
      view: s,
      state: $s({
        state: o,
        transaction: e
      }),
      dispatch: t ? () => {
      } : void 0,
      chain: () => this.createChain(e, t),
      can: () => this.createCan(e),
      get commands() {
        return Object.fromEntries(Object.entries(r).map(([a, c]) => [a, (...u) => c(...u)(l)]));
      }
    };
    return l;
  }
}
class O0 {
  constructor() {
    this.callbacks = {};
  }
  on(e, t) {
    return this.callbacks[e] || (this.callbacks[e] = []), this.callbacks[e].push(t), this;
  }
  emit(e, ...t) {
    const r = this.callbacks[e];
    return r && r.forEach((i) => i.apply(this, t)), this;
  }
  off(e, t) {
    const r = this.callbacks[e];
    return r && (t ? this.callbacks[e] = r.filter((i) => i !== t) : delete this.callbacks[e]), this;
  }
  once(e, t) {
    const r = (...i) => {
      this.off(e, r), t.apply(this, i);
    };
    return this.on(e, r);
  }
  removeAllListeners() {
    this.callbacks = {};
  }
}
function _(n, e, t) {
  return n.config[e] === void 0 && n.parent ? _(n.parent, e, t) : typeof n.config[e] == "function" ? n.config[e].bind({
    ...t,
    parent: n.parent ? _(n.parent, e, t) : null
  }) : n.config[e];
}
function Hs(n) {
  const e = n.filter((i) => i.type === "extension"), t = n.filter((i) => i.type === "node"), r = n.filter((i) => i.type === "mark");
  return {
    baseExtensions: e,
    nodeExtensions: t,
    markExtensions: r
  };
}
function eh(n) {
  const e = [], { nodeExtensions: t, markExtensions: r } = Hs(n), i = [...t, ...r], o = {
    default: null,
    rendered: !0,
    renderHTML: null,
    parseHTML: null,
    keepOnSplit: !0,
    isRequired: !1
  };
  return n.forEach((s) => {
    const l = {
      name: s.name,
      options: s.options,
      storage: s.storage,
      extensions: i
    }, a = _(s, "addGlobalAttributes", l);
    if (!a)
      return;
    a().forEach((u) => {
      u.types.forEach((f) => {
        Object.entries(u.attributes).forEach(([d, h]) => {
          e.push({
            type: f,
            name: d,
            attribute: {
              ...o,
              ...h
            }
          });
        });
      });
    });
  }), i.forEach((s) => {
    const l = {
      name: s.name,
      options: s.options,
      storage: s.storage
    }, a = _(s, "addAttributes", l);
    if (!a)
      return;
    const c = a();
    Object.entries(c).forEach(([u, f]) => {
      const d = {
        ...o,
        ...f
      };
      typeof (d == null ? void 0 : d.default) == "function" && (d.default = d.default()), (d == null ? void 0 : d.isRequired) && (d == null ? void 0 : d.default) === void 0 && delete d.default, e.push({
        type: s.name,
        name: u,
        attribute: d
      });
    });
  }), e;
}
function xe(n, e) {
  if (typeof n == "string") {
    if (!e.nodes[n])
      throw Error(`There is no node type named '${n}'. Maybe you forgot to add the extension?`);
    return e.nodes[n];
  }
  return n;
}
function Ar(...n) {
  return n.filter((e) => !!e).reduce((e, t) => {
    const r = { ...e };
    return Object.entries(t).forEach(([i, o]) => {
      if (!r[i]) {
        r[i] = o;
        return;
      }
      if (i === "class") {
        const l = o ? String(o).split(" ") : [], a = r[i] ? r[i].split(" ") : [], c = l.filter((u) => !a.includes(u));
        r[i] = [...a, ...c].join(" ");
      } else if (i === "style") {
        const l = o ? o.split(";").map((u) => u.trim()).filter(Boolean) : [], a = r[i] ? r[i].split(";").map((u) => u.trim()).filter(Boolean) : [], c = /* @__PURE__ */ new Map();
        a.forEach((u) => {
          const [f, d] = u.split(":").map((h) => h.trim());
          c.set(f, d);
        }), l.forEach((u) => {
          const [f, d] = u.split(":").map((h) => h.trim());
          c.set(f, d);
        }), r[i] = Array.from(c.entries()).map(([u, f]) => `${u}: ${f}`).join("; ");
      } else
        r[i] = o;
    }), r;
  }, {});
}
function sa(n, e) {
  return e.filter((t) => t.type === n.type.name).filter((t) => t.attribute.rendered).map((t) => t.attribute.renderHTML ? t.attribute.renderHTML(n.attrs) || {} : {
    [t.name]: n.attrs[t.name]
  }).reduce((t, r) => Ar(t, r), {});
}
function th(n) {
  return typeof n == "function";
}
function ee(n, e = void 0, ...t) {
  return th(n) ? e ? n.bind(e)(...t) : n(...t) : n;
}
function M0(n = {}) {
  return Object.keys(n).length === 0 && n.constructor === Object;
}
function A0(n) {
  return typeof n != "string" ? n : n.match(/^[+-]?(?:\d*\.)?\d+$/) ? Number(n) : n === "true" ? !0 : n === "false" ? !1 : n;
}
function Du(n, e) {
  return "style" in n ? n : {
    ...n,
    getAttrs: (t) => {
      const r = n.getAttrs ? n.getAttrs(t) : n.attrs;
      if (r === !1)
        return !1;
      const i = e.reduce((o, s) => {
        const l = s.attribute.parseHTML ? s.attribute.parseHTML(t) : A0(t.getAttribute(s.name));
        return l == null ? o : {
          ...o,
          [s.name]: l
        };
      }, {});
      return { ...r, ...i };
    }
  };
}
function Nu(n) {
  return Object.fromEntries(
    Object.entries(n).filter(([e, t]) => e === "attrs" && M0(t) ? !1 : t != null)
  );
}
function D0(n, e) {
  var t;
  const r = eh(n), { nodeExtensions: i, markExtensions: o } = Hs(n), s = (t = i.find((c) => _(c, "topNode"))) === null || t === void 0 ? void 0 : t.name, l = Object.fromEntries(i.map((c) => {
    const u = r.filter((v) => v.type === c.name), f = {
      name: c.name,
      options: c.options,
      storage: c.storage,
      editor: e
    }, d = n.reduce((v, w) => {
      const E = _(w, "extendNodeSchema", f);
      return {
        ...v,
        ...E ? E(c) : {}
      };
    }, {}), h = Nu({
      ...d,
      content: ee(_(c, "content", f)),
      marks: ee(_(c, "marks", f)),
      group: ee(_(c, "group", f)),
      inline: ee(_(c, "inline", f)),
      atom: ee(_(c, "atom", f)),
      selectable: ee(_(c, "selectable", f)),
      draggable: ee(_(c, "draggable", f)),
      code: ee(_(c, "code", f)),
      whitespace: ee(_(c, "whitespace", f)),
      linebreakReplacement: ee(_(c, "linebreakReplacement", f)),
      defining: ee(_(c, "defining", f)),
      isolating: ee(_(c, "isolating", f)),
      attrs: Object.fromEntries(u.map((v) => {
        var w;
        return [v.name, { default: (w = v == null ? void 0 : v.attribute) === null || w === void 0 ? void 0 : w.default }];
      }))
    }), p = ee(_(c, "parseHTML", f));
    p && (h.parseDOM = p.map((v) => Du(v, u)));
    const m = _(c, "renderHTML", f);
    m && (h.toDOM = (v) => m({
      node: v,
      HTMLAttributes: sa(v, u)
    }));
    const g = _(c, "renderText", f);
    return g && (h.toText = g), [c.name, h];
  })), a = Object.fromEntries(o.map((c) => {
    const u = r.filter((g) => g.type === c.name), f = {
      name: c.name,
      options: c.options,
      storage: c.storage,
      editor: e
    }, d = n.reduce((g, v) => {
      const w = _(v, "extendMarkSchema", f);
      return {
        ...g,
        ...w ? w(c) : {}
      };
    }, {}), h = Nu({
      ...d,
      inclusive: ee(_(c, "inclusive", f)),
      excludes: ee(_(c, "excludes", f)),
      group: ee(_(c, "group", f)),
      spanning: ee(_(c, "spanning", f)),
      code: ee(_(c, "code", f)),
      attrs: Object.fromEntries(u.map((g) => {
        var v;
        return [g.name, { default: (v = g == null ? void 0 : g.attribute) === null || v === void 0 ? void 0 : v.default }];
      }))
    }), p = ee(_(c, "parseHTML", f));
    p && (h.parseDOM = p.map((g) => Du(g, u)));
    const m = _(c, "renderHTML", f);
    return m && (h.toDOM = (g) => m({
      mark: g,
      HTMLAttributes: sa(g, u)
    })), [c.name, h];
  }));
  return new Yf({
    topNode: s,
    nodes: l,
    marks: a
  });
}
function xl(n, e) {
  return e.nodes[n] || e.marks[n] || null;
}
function Iu(n, e) {
  return Array.isArray(e) ? e.some((t) => (typeof t == "string" ? t : t.name) === n.name) : e;
}
function Ja(n, e) {
  const t = Zn.fromSchema(e).serializeFragment(n), i = document.implementation.createHTMLDocument().createElement("div");
  return i.appendChild(t), i.innerHTML;
}
const N0 = (n, e = 500) => {
  let t = "";
  const r = n.parentOffset;
  return n.parent.nodesBetween(Math.max(0, r - e), r, (i, o, s, l) => {
    var a, c;
    const u = ((c = (a = i.type.spec).toText) === null || c === void 0 ? void 0 : c.call(a, {
      node: i,
      pos: o,
      parent: s,
      index: l
    })) || i.textContent || "%leaf%";
    t += i.isAtom && !i.isText ? u : u.slice(0, Math.max(0, r - o));
  }), t;
};
function Ga(n) {
  return Object.prototype.toString.call(n) === "[object RegExp]";
}
class I0 {
  constructor(e) {
    this.find = e.find, this.handler = e.handler;
  }
}
const R0 = (n, e) => {
  if (Ga(e))
    return e.exec(n);
  const t = e(n);
  if (!t)
    return null;
  const r = [t.text];
  return r.index = t.index, r.input = n, r.data = t.data, t.replaceWith && (t.text.includes(t.replaceWith) || console.warn('[tiptap warn]: "inputRuleMatch.replaceWith" must be part of "inputRuleMatch.text".'), r.push(t.replaceWith)), r;
};
function so(n) {
  var e;
  const { editor: t, from: r, to: i, text: o, rules: s, plugin: l } = n, { view: a } = t;
  if (a.composing)
    return !1;
  const c = a.state.doc.resolve(r);
  if (c.parent.type.spec.code || !!(!((e = c.nodeBefore || c.nodeAfter) === null || e === void 0) && e.marks.find((d) => d.type.spec.code)))
    return !1;
  let u = !1;
  const f = N0(c) + o;
  return s.forEach((d) => {
    if (u)
      return;
    const h = R0(f, d.find);
    if (!h)
      return;
    const p = a.state.tr, m = $s({
      state: a.state,
      transaction: p
    }), g = {
      from: r - (h[0].length - o.length),
      to: i
    }, { commands: v, chain: w, can: E } = new zs({
      editor: t,
      state: m
    });
    d.handler({
      state: m,
      range: g,
      match: h,
      commands: v,
      chain: w,
      can: E
    }) === null || !p.steps.length || (p.setMeta(l, {
      transform: p,
      from: r,
      to: i,
      text: o
    }), a.dispatch(p), u = !0);
  }), u;
}
function P0(n) {
  const { editor: e, rules: t } = n, r = new Ae({
    state: {
      init() {
        return null;
      },
      apply(i, o, s) {
        const l = i.getMeta(r);
        if (l)
          return l;
        const a = i.getMeta("applyInputRules");
        return !!a && setTimeout(() => {
          let { text: u } = a;
          typeof u == "string" ? u = u : u = Ja(C.from(u), s.schema);
          const { from: f } = a, d = f + u.length;
          so({
            editor: e,
            from: f,
            to: d,
            text: u,
            rules: t,
            plugin: r
          });
        }), i.selectionSet || i.docChanged ? null : o;
      }
    },
    props: {
      handleTextInput(i, o, s, l) {
        return so({
          editor: e,
          from: o,
          to: s,
          text: l,
          rules: t,
          plugin: r
        });
      },
      handleDOMEvents: {
        compositionend: (i) => (setTimeout(() => {
          const { $cursor: o } = i.state.selection;
          o && so({
            editor: e,
            from: o.pos,
            to: o.pos,
            text: "",
            rules: t,
            plugin: r
          });
        }), !1)
      },
      handleKeyDown(i, o) {
        if (o.key !== "Enter")
          return !1;
        const { $cursor: s } = i.state.selection;
        return s ? so({
          editor: e,
          from: s.pos,
          to: s.pos,
          text: `
`,
          rules: t,
          plugin: r
        }) : !1;
      }
    },
    isInputRules: !0
  });
  return r;
}
function L0(n) {
  return Object.prototype.toString.call(n).slice(8, -1);
}
function lo(n) {
  return L0(n) !== "Object" ? !1 : n.constructor === Object && Object.getPrototypeOf(n) === Object.prototype;
}
function Vs(n, e) {
  const t = { ...n };
  return lo(n) && lo(e) && Object.keys(e).forEach((r) => {
    lo(e[r]) && lo(n[r]) ? t[r] = Vs(n[r], e[r]) : t[r] = e[r];
  }), t;
}
class Xn {
  constructor(e = {}) {
    this.type = "mark", this.name = "mark", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = ee(_(this, "addOptions", {
      name: this.name
    }))), this.storage = ee(_(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new Xn(e);
  }
  configure(e = {}) {
    const t = this.extend({
      ...this.config,
      addOptions: () => Vs(this.options, e)
    });
    return t.name = this.name, t.parent = this.parent, t;
  }
  extend(e = {}) {
    const t = new Xn(e);
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = ee(_(t, "addOptions", {
      name: t.name
    })), t.storage = ee(_(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
  static handleExit({ editor: e, mark: t }) {
    const { tr: r } = e.state, i = e.state.selection.$from;
    if (i.pos === i.end()) {
      const s = i.marks();
      if (!!!s.find((c) => (c == null ? void 0 : c.type.name) === t.name))
        return !1;
      const a = s.find((c) => (c == null ? void 0 : c.type.name) === t.name);
      return a && r.removeStoredMark(a), r.insertText(" ", i.pos), e.view.dispatch(r), !0;
    }
    return !1;
  }
}
function B0(n) {
  return typeof n == "number";
}
class _0 {
  constructor(e) {
    this.find = e.find, this.handler = e.handler;
  }
}
const F0 = (n, e, t) => {
  if (Ga(e))
    return [...n.matchAll(e)];
  const r = e(n, t);
  return r ? r.map((i) => {
    const o = [i.text];
    return o.index = i.index, o.input = n, o.data = i.data, i.replaceWith && (i.text.includes(i.replaceWith) || console.warn('[tiptap warn]: "pasteRuleMatch.replaceWith" must be part of "pasteRuleMatch.text".'), o.push(i.replaceWith)), o;
  }) : [];
};
function $0(n) {
  const { editor: e, state: t, from: r, to: i, rule: o, pasteEvent: s, dropEvent: l } = n, { commands: a, chain: c, can: u } = new zs({
    editor: e,
    state: t
  }), f = [];
  return t.doc.nodesBetween(r, i, (h, p) => {
    if (!h.isTextblock || h.type.spec.code)
      return;
    const m = Math.max(r, p), g = Math.min(i, p + h.content.size), v = h.textBetween(m - p, g - p, void 0, "\uFFFC");
    F0(v, o.find, s).forEach((E) => {
      if (E.index === void 0)
        return;
      const y = m + E.index + 1, T = y + E[0].length, b = {
        from: t.tr.mapping.map(y),
        to: t.tr.mapping.map(T)
      }, D = o.handler({
        state: t,
        range: b,
        match: E,
        commands: a,
        chain: c,
        can: u,
        pasteEvent: s,
        dropEvent: l
      });
      f.push(D);
    });
  }), f.every((h) => h !== null);
}
let ao = null;
const z0 = (n) => {
  var e;
  const t = new ClipboardEvent("paste", {
    clipboardData: new DataTransfer()
  });
  return (e = t.clipboardData) === null || e === void 0 || e.setData("text/html", n), t;
};
function H0(n) {
  const { editor: e, rules: t } = n;
  let r = null, i = !1, o = !1, s = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, l;
  try {
    l = typeof DragEvent < "u" ? new DragEvent("drop") : null;
  } catch {
    l = null;
  }
  const a = ({ state: u, from: f, to: d, rule: h, pasteEvt: p }) => {
    const m = u.tr, g = $s({
      state: u,
      transaction: m
    });
    if (!(!$0({
      editor: e,
      state: g,
      from: Math.max(f - 1, 0),
      to: d.b - 1,
      rule: h,
      pasteEvent: p,
      dropEvent: l
    }) || !m.steps.length)) {
      try {
        l = typeof DragEvent < "u" ? new DragEvent("drop") : null;
      } catch {
        l = null;
      }
      return s = typeof ClipboardEvent < "u" ? new ClipboardEvent("paste") : null, m;
    }
  };
  return t.map((u) => new Ae({
    view(f) {
      const d = (p) => {
        var m;
        r = !((m = f.dom.parentElement) === null || m === void 0) && m.contains(p.target) ? f.dom.parentElement : null, r && (ao = e);
      }, h = () => {
        ao && (ao = null);
      };
      return window.addEventListener("dragstart", d), window.addEventListener("dragend", h), {
        destroy() {
          window.removeEventListener("dragstart", d), window.removeEventListener("dragend", h);
        }
      };
    },
    props: {
      handleDOMEvents: {
        drop: (f, d) => {
          if (o = r === f.dom.parentElement, l = d, !o) {
            const h = ao;
            h && setTimeout(() => {
              const p = h.state.selection;
              p && h.commands.deleteRange({ from: p.from, to: p.to });
            }, 10);
          }
          return !1;
        },
        paste: (f, d) => {
          var h;
          const p = (h = d.clipboardData) === null || h === void 0 ? void 0 : h.getData("text/html");
          return s = d, i = !!(p != null && p.includes("data-pm-slice")), !1;
        }
      }
    },
    appendTransaction: (f, d, h) => {
      const p = f[0], m = p.getMeta("uiEvent") === "paste" && !i, g = p.getMeta("uiEvent") === "drop" && !o, v = p.getMeta("applyPasteRules"), w = !!v;
      if (!m && !g && !w)
        return;
      if (w) {
        let { text: T } = v;
        typeof T == "string" ? T = T : T = Ja(C.from(T), h.schema);
        const { from: b } = v, D = b + T.length, B = z0(T);
        return a({
          rule: u,
          state: h,
          from: b,
          to: { b: D },
          pasteEvt: B
        });
      }
      const E = d.doc.content.findDiffStart(h.doc.content), y = d.doc.content.findDiffEnd(h.doc.content);
      if (!(!B0(E) || !y || E === y.b))
        return a({
          rule: u,
          state: h,
          from: E,
          to: y,
          pasteEvt: s
        });
    }
  }));
}
function V0(n) {
  const e = n.filter((t, r) => n.indexOf(t) !== r);
  return Array.from(new Set(e));
}
class vr {
  constructor(e, t) {
    this.splittableMarks = [], this.editor = t, this.extensions = vr.resolve(e), this.schema = D0(this.extensions, t), this.setupExtensions();
  }
  static resolve(e) {
    const t = vr.sort(vr.flatten(e)), r = V0(t.map((i) => i.name));
    return r.length && console.warn(`[tiptap warn]: Duplicate extension names found: [${r.map((i) => `'${i}'`).join(", ")}]. This can lead to issues.`), t;
  }
  static flatten(e) {
    return e.map((t) => {
      const r = {
        name: t.name,
        options: t.options,
        storage: t.storage
      }, i = _(t, "addExtensions", r);
      return i ? [t, ...this.flatten(i())] : t;
    }).flat(10);
  }
  static sort(e) {
    return e.sort((r, i) => {
      const o = _(r, "priority") || 100, s = _(i, "priority") || 100;
      return o > s ? -1 : o < s ? 1 : 0;
    });
  }
  get commands() {
    return this.extensions.reduce((e, t) => {
      const r = {
        name: t.name,
        options: t.options,
        storage: t.storage,
        editor: this.editor,
        type: xl(t.name, this.schema)
      }, i = _(t, "addCommands", r);
      return i ? {
        ...e,
        ...i()
      } : e;
    }, {});
  }
  get plugins() {
    const { editor: e } = this, t = vr.sort([...this.extensions].reverse()), r = [], i = [], o = t.map((s) => {
      const l = {
        name: s.name,
        options: s.options,
        storage: s.storage,
        editor: e,
        type: xl(s.name, this.schema)
      }, a = [], c = _(s, "addKeyboardShortcuts", l);
      let u = {};
      if (s.type === "mark" && _(s, "exitable", l) && (u.ArrowRight = () => Xn.handleExit({ editor: e, mark: s })), c) {
        const m = Object.fromEntries(Object.entries(c()).map(([g, v]) => [g, () => v({ editor: e })]));
        u = { ...u, ...m };
      }
      const f = Zy(u);
      a.push(f);
      const d = _(s, "addInputRules", l);
      Iu(s, e.options.enableInputRules) && d && r.push(...d());
      const h = _(s, "addPasteRules", l);
      Iu(s, e.options.enablePasteRules) && h && i.push(...h());
      const p = _(s, "addProseMirrorPlugins", l);
      if (p) {
        const m = p();
        a.push(...m);
      }
      return a;
    }).flat();
    return [
      P0({
        editor: e,
        rules: r
      }),
      ...H0({
        editor: e,
        rules: i
      }),
      ...o
    ];
  }
  get attributes() {
    return eh(this.extensions);
  }
  get nodeViews() {
    const { editor: e } = this, { nodeExtensions: t } = Hs(this.extensions);
    return Object.fromEntries(t.filter((r) => !!_(r, "addNodeView")).map((r) => {
      const i = this.attributes.filter((a) => a.type === r.name), o = {
        name: r.name,
        options: r.options,
        storage: r.storage,
        editor: e,
        type: xe(r.name, this.schema)
      }, s = _(r, "addNodeView", o);
      if (!s)
        return [];
      const l = (a, c, u, f, d) => {
        const h = sa(a, i);
        return s()({
          node: a,
          view: c,
          getPos: u,
          decorations: f,
          innerDecorations: d,
          editor: e,
          extension: r,
          HTMLAttributes: h
        });
      };
      return [r.name, l];
    }));
  }
  setupExtensions() {
    this.extensions.forEach((e) => {
      var t;
      this.editor.extensionStorage[e.name] = e.storage;
      const r = {
        name: e.name,
        options: e.options,
        storage: e.storage,
        editor: this.editor,
        type: xl(e.name, this.schema)
      };
      e.type === "mark" && ((t = ee(_(e, "keepOnSplit", r))) !== null && t !== void 0 ? t : !0) && this.splittableMarks.push(e.name);
      const i = _(e, "onBeforeCreate", r), o = _(e, "onCreate", r), s = _(e, "onUpdate", r), l = _(e, "onSelectionUpdate", r), a = _(e, "onTransaction", r), c = _(e, "onFocus", r), u = _(e, "onBlur", r), f = _(e, "onDestroy", r);
      i && this.editor.on("beforeCreate", i), o && this.editor.on("create", o), s && this.editor.on("update", s), l && this.editor.on("selectionUpdate", l), a && this.editor.on("transaction", a), c && this.editor.on("focus", c), u && this.editor.on("blur", u), f && this.editor.on("destroy", f);
    });
  }
}
class $e {
  constructor(e = {}) {
    this.type = "extension", this.name = "extension", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = ee(_(this, "addOptions", {
      name: this.name
    }))), this.storage = ee(_(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new $e(e);
  }
  configure(e = {}) {
    const t = this.extend({
      ...this.config,
      addOptions: () => Vs(this.options, e)
    });
    return t.name = this.name, t.parent = this.parent, t;
  }
  extend(e = {}) {
    const t = new $e({ ...this.config, ...e });
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = ee(_(t, "addOptions", {
      name: t.name
    })), t.storage = ee(_(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
}
function nh(n, e, t) {
  const { from: r, to: i } = e, { blockSeparator: o = `

`, textSerializers: s = {} } = t || {};
  let l = "";
  return n.nodesBetween(r, i, (a, c, u, f) => {
    var d;
    a.isBlock && c > r && (l += o);
    const h = s == null ? void 0 : s[a.type.name];
    if (h)
      return u && (l += h({
        node: a,
        pos: c,
        parent: u,
        index: f,
        range: e
      })), !1;
    a.isText && (l += (d = a == null ? void 0 : a.text) === null || d === void 0 ? void 0 : d.slice(Math.max(r, c) - c, i - c));
  }), l;
}
function Ya(n) {
  return Object.fromEntries(Object.entries(n.nodes).filter(([, e]) => e.spec.toText).map(([e, t]) => [e, t.spec.toText]));
}
const j0 = $e.create({
  name: "clipboardTextSerializer",
  addOptions() {
    return {
      blockSeparator: void 0
    };
  },
  addProseMirrorPlugins() {
    return [
      new Ae({
        key: new He("clipboardTextSerializer"),
        props: {
          clipboardTextSerializer: () => {
            const { editor: n } = this, { state: e, schema: t } = n, { doc: r, selection: i } = e, { ranges: o } = i, s = Math.min(...o.map((u) => u.$from.pos)), l = Math.max(...o.map((u) => u.$to.pos)), a = Ya(t);
            return nh(r, { from: s, to: l }, {
              ...this.options.blockSeparator !== void 0 ? { blockSeparator: this.options.blockSeparator } : {},
              textSerializers: a
            });
          }
        }
      })
    ];
  }
}), W0 = () => ({ editor: n, view: e }) => (requestAnimationFrame(() => {
  var t;
  n.isDestroyed || (e.dom.blur(), (t = window == null ? void 0 : window.getSelection()) === null || t === void 0 || t.removeAllRanges());
}), !0), U0 = (n = !1) => ({ commands: e }) => e.setContent("", n), K0 = () => ({ state: n, tr: e, dispatch: t }) => {
  const { selection: r } = e, { ranges: i } = r;
  return t && i.forEach(({ $from: o, $to: s }) => {
    n.doc.nodesBetween(o.pos, s.pos, (l, a) => {
      if (l.type.isText)
        return;
      const { doc: c, mapping: u } = e, f = c.resolve(u.map(a)), d = c.resolve(u.map(a + l.nodeSize)), h = f.blockRange(d);
      if (!h)
        return;
      const p = _r(h);
      if (l.type.isTextblock) {
        const { defaultType: m } = f.parent.contentMatchAt(f.index());
        e.setNodeMarkup(h.start, m);
      }
      (p || p === 0) && e.lift(h, p);
    });
  }), !0;
}, q0 = (n) => (e) => n(e), J0 = () => ({ state: n, dispatch: e }) => h0(n, e), G0 = (n, e) => ({ editor: t, tr: r }) => {
  const { state: i } = t, o = i.doc.slice(n.from, n.to);
  r.deleteRange(n.from, n.to);
  const s = r.mapping.map(e);
  return r.insert(s, o.content), r.setSelection(new X(r.doc.resolve(s - 1))), !0;
}, Y0 = () => ({ tr: n, dispatch: e }) => {
  const { selection: t } = n, r = t.$anchor.node();
  if (r.content.size > 0)
    return !1;
  const i = n.selection.$anchor;
  for (let o = i.depth; o > 0; o -= 1)
    if (i.node(o).type === r.type) {
      if (e) {
        const l = i.before(o), a = i.after(o);
        n.delete(l, a).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, X0 = (n) => ({ tr: e, state: t, dispatch: r }) => {
  const i = xe(n, t.schema), o = e.selection.$anchor;
  for (let s = o.depth; s > 0; s -= 1)
    if (o.node(s).type === i) {
      if (r) {
        const a = o.before(s), c = o.after(s);
        e.delete(a, c).scrollIntoView();
      }
      return !0;
    }
  return !1;
}, Q0 = (n) => ({ tr: e, dispatch: t }) => {
  const { from: r, to: i } = n;
  return t && e.delete(r, i), !0;
}, Z0 = () => ({ state: n, dispatch: e }) => t0(n, e), ev = () => ({ commands: n }) => n.keyboardShortcut("Enter"), tv = () => ({ state: n, dispatch: e }) => d0(n, e);
function qo(n, e, t = { strict: !0 }) {
  const r = Object.keys(e);
  return r.length ? r.every((i) => t.strict ? e[i] === n[i] : Ga(e[i]) ? e[i].test(n[i]) : e[i] === n[i]) : !0;
}
function rh(n, e, t = {}) {
  return n.find((r) => r.type === e && qo(
    Object.fromEntries(Object.keys(t).map((i) => [i, r.attrs[i]])),
    t
  ));
}
function Ru(n, e, t = {}) {
  return !!rh(n, e, t);
}
function Xa(n, e, t) {
  var r;
  if (!n || !e)
    return;
  let i = n.parent.childAfter(n.parentOffset);
  if ((!i.node || !i.node.marks.some((u) => u.type === e)) && (i = n.parent.childBefore(n.parentOffset)), !i.node || !i.node.marks.some((u) => u.type === e) || (t = t || ((r = i.node.marks[0]) === null || r === void 0 ? void 0 : r.attrs), !rh([...i.node.marks], e, t)))
    return;
  let s = i.index, l = n.start() + i.offset, a = s + 1, c = l + i.node.nodeSize;
  for (; s > 0 && Ru([...n.parent.child(s - 1).marks], e, t); )
    s -= 1, l -= n.parent.child(s).nodeSize;
  for (; a < n.parent.childCount && Ru([...n.parent.child(a).marks], e, t); )
    c += n.parent.child(a).nodeSize, a += 1;
  return {
    from: l,
    to: c
  };
}
function En(n, e) {
  if (typeof n == "string") {
    if (!e.marks[n])
      throw Error(`There is no mark type named '${n}'. Maybe you forgot to add the extension?`);
    return e.marks[n];
  }
  return n;
}
const nv = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  const o = En(n, r.schema), { doc: s, selection: l } = t, { $from: a, from: c, to: u } = l;
  if (i) {
    const f = Xa(a, o, e);
    if (f && f.from <= c && f.to >= u) {
      const d = X.create(s, f.from, f.to);
      t.setSelection(d);
    }
  }
  return !0;
}, rv = (n) => (e) => {
  const t = typeof n == "function" ? n(e) : n;
  for (let r = 0; r < t.length; r += 1)
    if (t[r](e))
      return !0;
  return !1;
};
function Qa(n) {
  return n instanceof X;
}
function qt(n = 0, e = 0, t = 0) {
  return Math.min(Math.max(n, e), t);
}
function ih(n, e = null) {
  if (!e)
    return null;
  const t = Z.atStart(n), r = Z.atEnd(n);
  if (e === "start" || e === !0)
    return t;
  if (e === "end")
    return r;
  const i = t.from, o = r.to;
  return e === "all" ? X.create(n, qt(0, i, o), qt(n.content.size, i, o)) : X.create(n, qt(e, i, o), qt(e, i, o));
}
function iv() {
  return navigator.platform === "Android" || /android/i.test(navigator.userAgent);
}
function Za() {
  return [
    "iPad Simulator",
    "iPhone Simulator",
    "iPod Simulator",
    "iPad",
    "iPhone",
    "iPod"
  ].includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document;
}
const ov = (n = null, e = {}) => ({ editor: t, view: r, tr: i, dispatch: o }) => {
  e = {
    scrollIntoView: !0,
    ...e
  };
  const s = () => {
    (Za() || iv()) && r.dom.focus(), requestAnimationFrame(() => {
      t.isDestroyed || (r.focus(), e != null && e.scrollIntoView && t.commands.scrollIntoView());
    });
  };
  if (r.hasFocus() && n === null || n === !1)
    return !0;
  if (o && n === null && !Qa(t.state.selection))
    return s(), !0;
  const l = ih(i.doc, n) || t.state.selection, a = t.state.selection.eq(l);
  return o && (a || i.setSelection(l), a && i.storedMarks && i.setStoredMarks(i.storedMarks), s()), !0;
}, sv = (n, e) => (t) => n.every((r, i) => e(r, { ...t, index: i })), lv = (n, e) => ({ tr: t, commands: r }) => r.insertContentAt({ from: t.selection.from, to: t.selection.to }, n, e), oh = (n) => {
  const e = n.childNodes;
  for (let t = e.length - 1; t >= 0; t -= 1) {
    const r = e[t];
    r.nodeType === 3 && r.nodeValue && /^(\n\s\s|\n)$/.test(r.nodeValue) ? n.removeChild(r) : r.nodeType === 1 && oh(r);
  }
  return n;
};
function co(n) {
  const e = `<body>${n}</body>`, t = new window.DOMParser().parseFromString(e, "text/html").body;
  return oh(t);
}
function Jo(n, e, t) {
  if (n instanceof kt || n instanceof C)
    return n;
  t = {
    slice: !0,
    parseOptions: {},
    ...t
  };
  const r = typeof n == "object" && n !== null, i = typeof n == "string";
  if (r)
    try {
      if (Array.isArray(n) && n.length > 0)
        return C.fromArray(n.map((l) => e.nodeFromJSON(l)));
      const s = e.nodeFromJSON(n);
      return t.errorOnInvalidContent && s.check(), s;
    } catch (o) {
      if (t.errorOnInvalidContent)
        throw new Error("[tiptap error]: Invalid JSON content", { cause: o });
      return console.warn("[tiptap warn]: Invalid content.", "Passed value:", n, "Error:", o), Jo("", e, t);
    }
  if (i) {
    if (t.errorOnInvalidContent) {
      let s = !1, l = "";
      const a = new Yf({
        topNode: e.spec.topNode,
        marks: e.spec.marks,
        nodes: e.spec.nodes.append({
          __tiptap__private__unknown__catch__all__node: {
            content: "inline*",
            group: "block",
            parseDOM: [
              {
                tag: "*",
                getAttrs: (c) => (s = !0, l = typeof c == "string" ? c : c.outerHTML, null)
              }
            ]
          }
        })
      });
      if (t.slice ? vn.fromSchema(a).parseSlice(co(n), t.parseOptions) : vn.fromSchema(a).parse(co(n), t.parseOptions), t.errorOnInvalidContent && s)
        throw new Error("[tiptap error]: Invalid HTML content", { cause: new Error(`Invalid element found: ${l}`) });
    }
    const o = vn.fromSchema(e);
    return t.slice ? o.parseSlice(co(n), t.parseOptions).content : o.parse(co(n), t.parseOptions);
  }
  return Jo("", e, t);
}
function av(n, e, t) {
  const r = n.steps.length - 1;
  if (r < e)
    return;
  const i = n.steps[r];
  if (!(i instanceof be || i instanceof we))
    return;
  const o = n.mapping.maps[r];
  let s = 0;
  o.forEach((l, a, c, u) => {
    s === 0 && (s = u);
  }), n.setSelection(Z.near(n.doc.resolve(s), t));
}
const cv = (n) => !("type" in n), uv = (n, e, t) => ({ tr: r, dispatch: i, editor: o }) => {
  var s;
  if (i) {
    t = {
      parseOptions: o.options.parseOptions,
      updateSelection: !0,
      applyInputRules: !1,
      applyPasteRules: !1,
      ...t
    };
    let l;
    try {
      l = Jo(e, o.schema, {
        parseOptions: {
          preserveWhitespace: "full",
          ...t.parseOptions
        },
        errorOnInvalidContent: (s = t.errorOnInvalidContent) !== null && s !== void 0 ? s : o.options.enableContentCheck
      });
    } catch (p) {
      return o.emit("contentError", {
        editor: o,
        error: p,
        disableCollaboration: () => {
          o.storage.collaboration && (o.storage.collaboration.isDisabled = !0);
        }
      }), !1;
    }
    let { from: a, to: c } = typeof n == "number" ? { from: n, to: n } : { from: n.from, to: n.to }, u = !0, f = !0;
    if ((cv(l) ? l : [l]).forEach((p) => {
      p.check(), u = u ? p.isText && p.marks.length === 0 : !1, f = f ? p.isBlock : !1;
    }), a === c && f) {
      const { parent: p } = r.doc.resolve(a);
      p.isTextblock && !p.type.spec.code && !p.childCount && (a -= 1, c += 1);
    }
    let h;
    if (u) {
      if (Array.isArray(e))
        h = e.map((p) => p.text || "").join("");
      else if (e instanceof C) {
        let p = "";
        e.forEach((m) => {
          m.text && (p += m.text);
        }), h = p;
      } else
        typeof e == "object" && !!e && !!e.text ? h = e.text : h = e;
      r.insertText(h, a, c);
    } else
      h = l, r.replaceWith(a, c, h);
    t.updateSelection && av(r, r.steps.length - 1, -1), t.applyInputRules && r.setMeta("applyInputRules", { from: a, text: h }), t.applyPasteRules && r.setMeta("applyPasteRules", { from: a, text: h });
  }
  return !0;
}, fv = () => ({ state: n, dispatch: e }) => a0(n, e), dv = () => ({ state: n, dispatch: e }) => c0(n, e), hv = () => ({ state: n, dispatch: e }) => n0(n, e), pv = () => ({ state: n, dispatch: e }) => s0(n, e), mv = () => ({ state: n, dispatch: e, tr: t }) => {
  try {
    const r = Rs(n.doc, n.selection.$from.pos, -1);
    return r == null ? !1 : (t.join(r, 2), e && e(t), !0);
  } catch {
    return !1;
  }
}, gv = () => ({ state: n, dispatch: e, tr: t }) => {
  try {
    const r = Rs(n.doc, n.selection.$from.pos, 1);
    return r == null ? !1 : (t.join(r, 2), e && e(t), !0);
  } catch {
    return !1;
  }
}, yv = () => ({ state: n, dispatch: e }) => r0(n, e), vv = () => ({ state: n, dispatch: e }) => i0(n, e);
function sh() {
  return typeof navigator < "u" ? /Mac/.test(navigator.platform) : !1;
}
function bv(n) {
  const e = n.split(/-(?!$)/);
  let t = e[e.length - 1];
  t === "Space" && (t = " ");
  let r, i, o, s;
  for (let l = 0; l < e.length - 1; l += 1) {
    const a = e[l];
    if (/^(cmd|meta|m)$/i.test(a))
      s = !0;
    else if (/^a(lt)?$/i.test(a))
      r = !0;
    else if (/^(c|ctrl|control)$/i.test(a))
      i = !0;
    else if (/^s(hift)?$/i.test(a))
      o = !0;
    else if (/^mod$/i.test(a))
      Za() || sh() ? s = !0 : i = !0;
    else
      throw new Error(`Unrecognized modifier name: ${a}`);
  }
  return r && (t = `Alt-${t}`), i && (t = `Ctrl-${t}`), s && (t = `Meta-${t}`), o && (t = `Shift-${t}`), t;
}
const wv = (n) => ({ editor: e, view: t, tr: r, dispatch: i }) => {
  const o = bv(n).split(/-(?!$)/), s = o.find((c) => !["Alt", "Ctrl", "Meta", "Shift"].includes(c)), l = new KeyboardEvent("keydown", {
    key: s === "Space" ? " " : s,
    altKey: o.includes("Alt"),
    ctrlKey: o.includes("Ctrl"),
    metaKey: o.includes("Meta"),
    shiftKey: o.includes("Shift"),
    bubbles: !0,
    cancelable: !0
  }), a = e.captureTransaction(() => {
    t.someProp("handleKeyDown", (c) => c(t, l));
  });
  return a == null || a.steps.forEach((c) => {
    const u = c.map(r.mapping);
    u && i && r.maybeStep(u);
  }), !0;
};
function Ti(n, e, t = {}) {
  const { from: r, to: i, empty: o } = n.selection, s = e ? xe(e, n.schema) : null, l = [];
  n.doc.nodesBetween(r, i, (f, d) => {
    if (f.isText)
      return;
    const h = Math.max(r, d), p = Math.min(i, d + f.nodeSize);
    l.push({
      node: f,
      from: h,
      to: p
    });
  });
  const a = i - r, c = l.filter((f) => s ? s.name === f.node.type.name : !0).filter((f) => qo(f.node.attrs, t, { strict: !1 }));
  return o ? !!c.length : c.reduce((f, d) => f + d.to - d.from, 0) >= a;
}
const kv = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = xe(n, t.schema);
  return Ti(t, i, e) ? u0(t, r) : !1;
}, xv = () => ({ state: n, dispatch: e }) => p0(n, e), Sv = (n) => ({ state: e, dispatch: t }) => {
  const r = xe(n, e.schema);
  return S0(r)(e, t);
}, Ev = () => ({ state: n, dispatch: e }) => f0(n, e);
function js(n, e) {
  return e.nodes[n] ? "node" : e.marks[n] ? "mark" : null;
}
function Pu(n, e) {
  const t = typeof e == "string" ? [e] : e;
  return Object.keys(n).reduce((r, i) => (t.includes(i) || (r[i] = n[i]), r), {});
}
const Cv = (n, e) => ({ tr: t, state: r, dispatch: i }) => {
  let o = null, s = null;
  const l = js(typeof n == "string" ? n : n.name, r.schema);
  return l ? (l === "node" && (o = xe(n, r.schema)), l === "mark" && (s = En(n, r.schema)), i && t.selection.ranges.forEach((a) => {
    r.doc.nodesBetween(a.$from.pos, a.$to.pos, (c, u) => {
      o && o === c.type && t.setNodeMarkup(u, void 0, Pu(c.attrs, e)), s && c.marks.length && c.marks.forEach((f) => {
        s === f.type && t.addMark(u, u + c.nodeSize, s.create(Pu(f.attrs, e)));
      });
    });
  }), !0) : !1;
}, Tv = () => ({ tr: n, dispatch: e }) => (e && n.scrollIntoView(), !0), Ov = () => ({ tr: n, dispatch: e }) => {
  if (e) {
    const t = new ft(n.doc);
    n.setSelection(t);
  }
  return !0;
}, Mv = () => ({ state: n, dispatch: e }) => o0(n, e), Av = () => ({ state: n, dispatch: e }) => l0(n, e), Dv = () => ({ state: n, dispatch: e }) => m0(n, e), Nv = () => ({ state: n, dispatch: e }) => v0(n, e), Iv = () => ({ state: n, dispatch: e }) => y0(n, e);
function la(n, e, t = {}, r = {}) {
  return Jo(n, e, {
    slice: !1,
    parseOptions: t,
    errorOnInvalidContent: r.errorOnInvalidContent
  });
}
const Rv = (n, e = !1, t = {}, r = {}) => ({ editor: i, tr: o, dispatch: s, commands: l }) => {
  var a, c;
  const { doc: u } = o;
  if (t.preserveWhitespace !== "full") {
    const f = la(n, i.schema, t, {
      errorOnInvalidContent: (a = r.errorOnInvalidContent) !== null && a !== void 0 ? a : i.options.enableContentCheck
    });
    return s && o.replaceWith(0, u.content.size, f).setMeta("preventUpdate", !e), !0;
  }
  return s && o.setMeta("preventUpdate", !e), l.insertContentAt({ from: 0, to: u.content.size }, n, {
    parseOptions: t,
    errorOnInvalidContent: (c = r.errorOnInvalidContent) !== null && c !== void 0 ? c : i.options.enableContentCheck
  });
};
function lh(n, e) {
  const t = En(e, n.schema), { from: r, to: i, empty: o } = n.selection, s = [];
  o ? (n.storedMarks && s.push(...n.storedMarks), s.push(...n.selection.$head.marks())) : n.doc.nodesBetween(r, i, (a) => {
    s.push(...a.marks);
  });
  const l = s.find((a) => a.type.name === t.name);
  return l ? { ...l.attrs } : {};
}
function Pv(n, e) {
  const t = new dd(n);
  return e.forEach((r) => {
    r.steps.forEach((i) => {
      t.step(i);
    });
  }), t;
}
function Lv(n) {
  for (let e = 0; e < n.edgeCount; e += 1) {
    const { type: t } = n.edge(e);
    if (t.isTextblock && !t.hasRequiredAttrs())
      return t;
  }
  return null;
}
function Bv(n, e, t) {
  const r = [];
  return n.nodesBetween(e.from, e.to, (i, o) => {
    t(i) && r.push({
      node: i,
      pos: o
    });
  }), r;
}
function _v(n, e) {
  for (let t = n.depth; t > 0; t -= 1) {
    const r = n.node(t);
    if (e(r))
      return {
        pos: t > 0 ? n.before(t) : 0,
        start: n.start(t),
        depth: t,
        node: r
      };
  }
}
function ec(n) {
  return (e) => _v(e.$from, n);
}
function ah(n, e) {
  const t = {
    from: 0,
    to: n.content.size
  };
  return nh(n, t, e);
}
function Fv(n, e) {
  const t = xe(e, n.schema), { from: r, to: i } = n.selection, o = [];
  n.doc.nodesBetween(r, i, (l) => {
    o.push(l);
  });
  const s = o.reverse().find((l) => l.type.name === t.name);
  return s ? { ...s.attrs } : {};
}
function ch(n, e) {
  const t = js(typeof e == "string" ? e : e.name, n.schema);
  return t === "node" ? Fv(n, e) : t === "mark" ? lh(n, e) : {};
}
function $v(n, e = JSON.stringify) {
  const t = {};
  return n.filter((r) => {
    const i = e(r);
    return Object.prototype.hasOwnProperty.call(t, i) ? !1 : t[i] = !0;
  });
}
function zv(n) {
  const e = $v(n);
  return e.length === 1 ? e : e.filter((t, r) => !e.filter((o, s) => s !== r).some((o) => t.oldRange.from >= o.oldRange.from && t.oldRange.to <= o.oldRange.to && t.newRange.from >= o.newRange.from && t.newRange.to <= o.newRange.to));
}
function Hv(n) {
  const { mapping: e, steps: t } = n, r = [];
  return e.maps.forEach((i, o) => {
    const s = [];
    if (i.ranges.length)
      i.forEach((l, a) => {
        s.push({ from: l, to: a });
      });
    else {
      const { from: l, to: a } = t[o];
      if (l === void 0 || a === void 0)
        return;
      s.push({ from: l, to: a });
    }
    s.forEach(({ from: l, to: a }) => {
      const c = e.slice(o).map(l, -1), u = e.slice(o).map(a), f = e.invert().map(c, -1), d = e.invert().map(u);
      r.push({
        oldRange: {
          from: f,
          to: d
        },
        newRange: {
          from: c,
          to: u
        }
      });
    });
  }), zv(r);
}
function tc(n, e, t) {
  const r = [];
  return n === e ? t.resolve(n).marks().forEach((i) => {
    const o = t.resolve(n), s = Xa(o, i.type);
    !s || r.push({
      mark: i,
      ...s
    });
  }) : t.nodesBetween(n, e, (i, o) => {
    !i || (i == null ? void 0 : i.nodeSize) === void 0 || r.push(...i.marks.map((s) => ({
      from: o,
      to: o + i.nodeSize,
      mark: s
    })));
  }), r;
}
function Eo(n, e, t) {
  return Object.fromEntries(Object.entries(t).filter(([r]) => {
    const i = n.find((o) => o.type === e && o.name === r);
    return i ? i.attribute.keepOnSplit : !1;
  }));
}
function aa(n, e, t = {}) {
  const { empty: r, ranges: i } = n.selection, o = e ? En(e, n.schema) : null;
  if (r)
    return !!(n.storedMarks || n.selection.$from.marks()).filter((f) => o ? o.name === f.type.name : !0).find((f) => qo(f.attrs, t, { strict: !1 }));
  let s = 0;
  const l = [];
  if (i.forEach(({ $from: f, $to: d }) => {
    const h = f.pos, p = d.pos;
    n.doc.nodesBetween(h, p, (m, g) => {
      if (!m.isText && !m.marks.length)
        return;
      const v = Math.max(h, g), w = Math.min(p, g + m.nodeSize), E = w - v;
      s += E, l.push(...m.marks.map((y) => ({
        mark: y,
        from: v,
        to: w
      })));
    });
  }), s === 0)
    return !1;
  const a = l.filter((f) => o ? o.name === f.mark.type.name : !0).filter((f) => qo(f.mark.attrs, t, { strict: !1 })).reduce((f, d) => f + d.to - d.from, 0), c = l.filter((f) => o ? f.mark.type !== o && f.mark.type.excludes(o) : !0).reduce((f, d) => f + d.to - d.from, 0);
  return (a > 0 ? a + c : a) >= s;
}
function Vv(n, e, t = {}) {
  if (!e)
    return Ti(n, null, t) || aa(n, null, t);
  const r = js(e, n.schema);
  return r === "node" ? Ti(n, e, t) : r === "mark" ? aa(n, e, t) : !1;
}
function Lu(n, e) {
  const { nodeExtensions: t } = Hs(e), r = t.find((s) => s.name === n);
  if (!r)
    return !1;
  const i = {
    name: r.name,
    options: r.options,
    storage: r.storage
  }, o = ee(_(r, "group", i));
  return typeof o != "string" ? !1 : o.split(" ").includes("list");
}
function Ws(n, { checkChildren: e = !0, ignoreWhitespace: t = !1 } = {}) {
  var r;
  if (t) {
    if (n.type.name === "hardBreak")
      return !0;
    if (n.isText)
      return /^\s*$/m.test((r = n.text) !== null && r !== void 0 ? r : "");
  }
  if (n.isText)
    return !n.text;
  if (n.isAtom || n.isLeaf)
    return !1;
  if (n.content.childCount === 0)
    return !0;
  if (e) {
    let i = !0;
    return n.content.forEach((o) => {
      i !== !1 && (Ws(o, { ignoreWhitespace: t, checkChildren: e }) || (i = !1));
    }), i;
  }
  return !1;
}
function jv(n) {
  return n instanceof z;
}
function uh(n, e, t) {
  const i = n.state.doc.content.size, o = qt(e, 0, i), s = qt(t, 0, i), l = n.coordsAtPos(o), a = n.coordsAtPos(s, -1), c = Math.min(l.top, a.top), u = Math.max(l.bottom, a.bottom), f = Math.min(l.left, a.left), d = Math.max(l.right, a.right), h = d - f, p = u - c, v = {
    top: c,
    bottom: u,
    left: f,
    right: d,
    width: h,
    height: p,
    x: f,
    y: c
  };
  return {
    ...v,
    toJSON: () => v
  };
}
function Wv(n, e, t) {
  var r;
  const { selection: i } = e;
  let o = null;
  if (Qa(i) && (o = i.$cursor), o) {
    const l = (r = n.storedMarks) !== null && r !== void 0 ? r : o.marks();
    return !!t.isInSet(l) || !l.some((a) => a.type.excludes(t));
  }
  const { ranges: s } = i;
  return s.some(({ $from: l, $to: a }) => {
    let c = l.depth === 0 ? n.doc.inlineContent && n.doc.type.allowsMarkType(t) : !1;
    return n.doc.nodesBetween(l.pos, a.pos, (u, f, d) => {
      if (c)
        return !1;
      if (u.isInline) {
        const h = !d || d.type.allowsMarkType(t), p = !!t.isInSet(u.marks) || !u.marks.some((m) => m.type.excludes(t));
        c = h && p;
      }
      return !c;
    }), c;
  });
}
const Uv = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  const { selection: o } = t, { empty: s, ranges: l } = o, a = En(n, r.schema);
  if (i)
    if (s) {
      const c = lh(r, a);
      t.addStoredMark(a.create({
        ...c,
        ...e
      }));
    } else
      l.forEach((c) => {
        const u = c.$from.pos, f = c.$to.pos;
        r.doc.nodesBetween(u, f, (d, h) => {
          const p = Math.max(h, u), m = Math.min(h + d.nodeSize, f);
          d.marks.find((v) => v.type === a) ? d.marks.forEach((v) => {
            a === v.type && t.addMark(p, m, a.create({
              ...v.attrs,
              ...e
            }));
          }) : t.addMark(p, m, a.create(e));
        });
      });
  return Wv(r, t, a);
}, Kv = (n, e) => ({ tr: t }) => (t.setMeta(n, e), !0), qv = (n, e = {}) => ({ state: t, dispatch: r, chain: i }) => {
  const o = xe(n, t.schema);
  let s;
  return t.selection.$anchor.sameParent(t.selection.$head) && (s = t.selection.$anchor.parent.attrs), o.isTextblock ? i().command(({ commands: l }) => Au(o, { ...s, ...e })(t) ? !0 : l.clearNodes()).command(({ state: l }) => Au(o, { ...s, ...e })(l, r)).run() : (console.warn('[tiptap warn]: Currently "setNode()" only supports text block nodes.'), !1);
}, Jv = (n) => ({ tr: e, dispatch: t }) => {
  if (t) {
    const { doc: r } = e, i = qt(n, 0, r.content.size), o = z.create(r, i);
    e.setSelection(o);
  }
  return !0;
}, Gv = (n) => ({ tr: e, dispatch: t }) => {
  if (t) {
    const { doc: r } = e, { from: i, to: o } = typeof n == "number" ? { from: n, to: n } : n, s = X.atStart(r).from, l = X.atEnd(r).to, a = qt(i, s, l), c = qt(o, s, l), u = X.create(r, a, c);
    e.setSelection(u);
  }
  return !0;
}, Yv = (n) => ({ state: e, dispatch: t }) => {
  const r = xe(n, e.schema);
  return T0(r)(e, t);
};
function Bu(n, e) {
  const t = n.storedMarks || n.selection.$to.parentOffset && n.selection.$from.marks();
  if (t) {
    const r = t.filter((i) => e == null ? void 0 : e.includes(i.type.name));
    n.tr.ensureMarks(r);
  }
}
const Xv = ({ keepMarks: n = !0 } = {}) => ({ tr: e, state: t, dispatch: r, editor: i }) => {
  const { selection: o, doc: s } = e, { $from: l, $to: a } = o, c = i.extensionManager.attributes, u = Eo(c, l.node().type.name, l.node().attrs);
  if (o instanceof z && o.node.isBlock)
    return !l.parentOffset || !wr(s, l.pos) ? !1 : (r && (n && Bu(t, i.extensionManager.splittableMarks), e.split(l.pos).scrollIntoView()), !0);
  if (!l.parent.isBlock)
    return !1;
  const f = a.parentOffset === a.parent.content.size, d = l.depth === 0 ? void 0 : Lv(l.node(-1).contentMatchAt(l.indexAfter(-1)));
  let h = f && d ? [
    {
      type: d,
      attrs: u
    }
  ] : void 0, p = wr(e.doc, e.mapping.map(l.pos), 1, h);
  if (!h && !p && wr(e.doc, e.mapping.map(l.pos), 1, d ? [{ type: d }] : void 0) && (p = !0, h = d ? [
    {
      type: d,
      attrs: u
    }
  ] : void 0), r) {
    if (p && (o instanceof X && e.deleteSelection(), e.split(e.mapping.map(l.pos), 1, h), d && !f && !l.parentOffset && l.parent.type !== d)) {
      const m = e.mapping.map(l.before()), g = e.doc.resolve(m);
      l.node(-1).canReplaceWith(g.index(), g.index() + 1, d) && e.setNodeMarkup(e.mapping.map(l.before()), d);
    }
    n && Bu(t, i.extensionManager.splittableMarks), e.scrollIntoView();
  }
  return p;
}, Qv = (n, e = {}) => ({ tr: t, state: r, dispatch: i, editor: o }) => {
  var s;
  const l = xe(n, r.schema), { $from: a, $to: c } = r.selection, u = r.selection.node;
  if (u && u.isBlock || a.depth < 2 || !a.sameParent(c))
    return !1;
  const f = a.node(-1);
  if (f.type !== l)
    return !1;
  const d = o.extensionManager.attributes;
  if (a.parent.content.size === 0 && a.node(-1).childCount === a.indexAfter(-1)) {
    if (a.depth === 2 || a.node(-3).type !== l || a.index(-2) !== a.node(-2).childCount - 1)
      return !1;
    if (i) {
      let v = C.empty;
      const w = a.index(-1) ? 1 : a.index(-2) ? 2 : 3;
      for (let B = a.depth - w; B >= a.depth - 3; B -= 1)
        v = C.from(a.node(B).copy(v));
      const E = a.indexAfter(-1) < a.node(-2).childCount ? 1 : a.indexAfter(-2) < a.node(-3).childCount ? 2 : 3, y = {
        ...Eo(d, a.node().type.name, a.node().attrs),
        ...e
      }, T = ((s = l.contentMatch.defaultType) === null || s === void 0 ? void 0 : s.createAndFill(y)) || void 0;
      v = v.append(C.from(l.createAndFill(null, T) || void 0));
      const b = a.before(a.depth - (w - 1));
      t.replace(b, a.after(-E), new R(v, 4 - w, 0));
      let D = -1;
      t.doc.nodesBetween(b, t.doc.content.size, (B, A) => {
        if (D > -1)
          return !1;
        B.isTextblock && B.content.size === 0 && (D = A + 1);
      }), D > -1 && t.setSelection(X.near(t.doc.resolve(D))), t.scrollIntoView();
    }
    return !0;
  }
  const h = c.pos === a.end() ? f.contentMatchAt(0).defaultType : null, p = {
    ...Eo(d, f.type.name, f.attrs),
    ...e
  }, m = {
    ...Eo(d, a.node().type.name, a.node().attrs),
    ...e
  };
  t.delete(a.pos, c.pos);
  const g = h ? [
    { type: l, attrs: p },
    { type: h, attrs: m }
  ] : [{ type: l, attrs: p }];
  if (!wr(t.doc, a.pos, 2))
    return !1;
  if (i) {
    const { selection: v, storedMarks: w } = r, { splittableMarks: E } = o.extensionManager, y = w || v.$to.parentOffset && v.$from.marks();
    if (t.split(a.pos, 2, g).scrollIntoView(), !y || !i)
      return !0;
    const T = y.filter((b) => E.includes(b.type.name));
    t.ensureMarks(T);
  }
  return !0;
}, Sl = (n, e) => {
  const t = ec((s) => s.type === e)(n.selection);
  if (!t)
    return !0;
  const r = n.doc.resolve(Math.max(0, t.pos - 1)).before(t.depth);
  if (r === void 0)
    return !0;
  const i = n.doc.nodeAt(r);
  return t.node.type === (i == null ? void 0 : i.type) && er(n.doc, t.pos) && n.join(t.pos), !0;
}, El = (n, e) => {
  const t = ec((s) => s.type === e)(n.selection);
  if (!t)
    return !0;
  const r = n.doc.resolve(t.start).after(t.depth);
  if (r === void 0)
    return !0;
  const i = n.doc.nodeAt(r);
  return t.node.type === (i == null ? void 0 : i.type) && er(n.doc, r) && n.join(r), !0;
}, Zv = (n, e, t, r = {}) => ({ editor: i, tr: o, state: s, dispatch: l, chain: a, commands: c, can: u }) => {
  const { extensions: f, splittableMarks: d } = i.extensionManager, h = xe(n, s.schema), p = xe(e, s.schema), { selection: m, storedMarks: g } = s, { $from: v, $to: w } = m, E = v.blockRange(w), y = g || m.$to.parentOffset && m.$from.marks();
  if (!E)
    return !1;
  const T = ec((b) => Lu(b.type.name, f))(m);
  if (E.depth >= 1 && T && E.depth - T.depth <= 1) {
    if (T.node.type === h)
      return c.liftListItem(p);
    if (Lu(T.node.type.name, f) && h.validContent(T.node.content) && l)
      return a().command(() => (o.setNodeMarkup(T.pos, h), !0)).command(() => Sl(o, h)).command(() => El(o, h)).run();
  }
  return !t || !y || !l ? a().command(() => u().wrapInList(h, r) ? !0 : c.clearNodes()).wrapInList(h, r).command(() => Sl(o, h)).command(() => El(o, h)).run() : a().command(() => {
    const b = u().wrapInList(h, r), D = y.filter((B) => d.includes(B.type.name));
    return o.ensureMarks(D), b ? !0 : c.clearNodes();
  }).wrapInList(h, r).command(() => Sl(o, h)).command(() => El(o, h)).run();
}, eb = (n, e = {}, t = {}) => ({ state: r, commands: i }) => {
  const { extendEmptyMarkRange: o = !1 } = t, s = En(n, r.schema);
  return aa(r, s, e) ? i.unsetMark(s, { extendEmptyMarkRange: o }) : i.setMark(s, e);
}, tb = (n, e, t = {}) => ({ state: r, commands: i }) => {
  const o = xe(n, r.schema), s = xe(e, r.schema), l = Ti(r, o, t);
  let a;
  return r.selection.$anchor.sameParent(r.selection.$head) && (a = r.selection.$anchor.parent.attrs), l ? i.setNode(s, a) : i.setNode(o, { ...a, ...t });
}, nb = (n, e = {}) => ({ state: t, commands: r }) => {
  const i = xe(n, t.schema);
  return Ti(t, i, e) ? r.lift(i) : r.wrapIn(i, e);
}, rb = () => ({ state: n, dispatch: e }) => {
  const t = n.plugins;
  for (let r = 0; r < t.length; r += 1) {
    const i = t[r];
    let o;
    if (i.spec.isInputRules && (o = i.getState(n))) {
      if (e) {
        const s = n.tr, l = o.transform;
        for (let a = l.steps.length - 1; a >= 0; a -= 1)
          s.step(l.steps[a].invert(l.docs[a]));
        if (o.text) {
          const a = s.doc.resolve(o.from).marks();
          s.replaceWith(o.from, o.to, n.schema.text(o.text, a));
        } else
          s.delete(o.from, o.to);
      }
      return !0;
    }
  }
  return !1;
}, ib = () => ({ tr: n, dispatch: e }) => {
  const { selection: t } = n, { empty: r, ranges: i } = t;
  return r || e && i.forEach((o) => {
    n.removeMark(o.$from.pos, o.$to.pos);
  }), !0;
}, ob = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  var o;
  const { extendEmptyMarkRange: s = !1 } = e, { selection: l } = t, a = En(n, r.schema), { $from: c, empty: u, ranges: f } = l;
  if (!i)
    return !0;
  if (u && s) {
    let { from: d, to: h } = l;
    const p = (o = c.marks().find((g) => g.type === a)) === null || o === void 0 ? void 0 : o.attrs, m = Xa(c, a, p);
    m && (d = m.from, h = m.to), t.removeMark(d, h, a);
  } else
    f.forEach((d) => {
      t.removeMark(d.$from.pos, d.$to.pos, a);
    });
  return t.removeStoredMark(a), !0;
}, sb = (n, e = {}) => ({ tr: t, state: r, dispatch: i }) => {
  let o = null, s = null;
  const l = js(typeof n == "string" ? n : n.name, r.schema);
  return l ? (l === "node" && (o = xe(n, r.schema)), l === "mark" && (s = En(n, r.schema)), i && t.selection.ranges.forEach((a) => {
    const c = a.$from.pos, u = a.$to.pos;
    let f, d, h, p;
    t.selection.empty ? r.doc.nodesBetween(c, u, (m, g) => {
      o && o === m.type && (h = Math.max(g, c), p = Math.min(g + m.nodeSize, u), f = g, d = m);
    }) : r.doc.nodesBetween(c, u, (m, g) => {
      g < c && o && o === m.type && (h = Math.max(g, c), p = Math.min(g + m.nodeSize, u), f = g, d = m), g >= c && g <= u && (o && o === m.type && t.setNodeMarkup(g, void 0, {
        ...m.attrs,
        ...e
      }), s && m.marks.length && m.marks.forEach((v) => {
        if (s === v.type) {
          const w = Math.max(g, c), E = Math.min(g + m.nodeSize, u);
          t.addMark(w, E, s.create({
            ...v.attrs,
            ...e
          }));
        }
      }));
    }), d && (f !== void 0 && t.setNodeMarkup(f, void 0, {
      ...d.attrs,
      ...e
    }), s && d.marks.length && d.marks.forEach((m) => {
      s === m.type && t.addMark(h, p, s.create({
        ...m.attrs,
        ...e
      }));
    }));
  }), !0) : !1;
}, lb = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = xe(n, t.schema);
  return b0(i, e)(t, r);
}, ab = (n, e = {}) => ({ state: t, dispatch: r }) => {
  const i = xe(n, t.schema);
  return w0(i, e)(t, r);
};
var cb = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  blur: W0,
  clearContent: U0,
  clearNodes: K0,
  command: q0,
  createParagraphNear: J0,
  cut: G0,
  deleteCurrentNode: Y0,
  deleteNode: X0,
  deleteRange: Q0,
  deleteSelection: Z0,
  enter: ev,
  exitCode: tv,
  extendMarkRange: nv,
  first: rv,
  focus: ov,
  forEach: sv,
  insertContent: lv,
  insertContentAt: uv,
  joinBackward: hv,
  joinDown: dv,
  joinForward: pv,
  joinItemBackward: mv,
  joinItemForward: gv,
  joinTextblockBackward: yv,
  joinTextblockForward: vv,
  joinUp: fv,
  keyboardShortcut: wv,
  lift: kv,
  liftEmptyBlock: xv,
  liftListItem: Sv,
  newlineInCode: Ev,
  resetAttributes: Cv,
  scrollIntoView: Tv,
  selectAll: Ov,
  selectNodeBackward: Mv,
  selectNodeForward: Av,
  selectParentNode: Dv,
  selectTextblockEnd: Nv,
  selectTextblockStart: Iv,
  setContent: Rv,
  setMark: Uv,
  setMeta: Kv,
  setNode: qv,
  setNodeSelection: Jv,
  setTextSelection: Gv,
  sinkListItem: Yv,
  splitBlock: Xv,
  splitListItem: Qv,
  toggleList: Zv,
  toggleMark: eb,
  toggleNode: tb,
  toggleWrap: nb,
  undoInputRule: rb,
  unsetAllMarks: ib,
  unsetMark: ob,
  updateAttributes: sb,
  wrapIn: lb,
  wrapInList: ab
});
const ub = $e.create({
  name: "commands",
  addCommands() {
    return {
      ...cb
    };
  }
}), fb = $e.create({
  name: "drop",
  addProseMirrorPlugins() {
    return [
      new Ae({
        key: new He("tiptapDrop"),
        props: {
          handleDrop: (n, e, t, r) => {
            this.editor.emit("drop", {
              editor: this.editor,
              event: e,
              slice: t,
              moved: r
            });
          }
        }
      })
    ];
  }
}), db = $e.create({
  name: "editable",
  addProseMirrorPlugins() {
    return [
      new Ae({
        key: new He("editable"),
        props: {
          editable: () => this.editor.options.editable
        }
      })
    ];
  }
}), hb = new He("focusEvents"), pb = $e.create({
  name: "focusEvents",
  addProseMirrorPlugins() {
    const { editor: n } = this;
    return [
      new Ae({
        key: hb,
        props: {
          handleDOMEvents: {
            focus: (e, t) => {
              n.isFocused = !0;
              const r = n.state.tr.setMeta("focus", { event: t }).setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            },
            blur: (e, t) => {
              n.isFocused = !1;
              const r = n.state.tr.setMeta("blur", { event: t }).setMeta("addToHistory", !1);
              return e.dispatch(r), !1;
            }
          }
        }
      })
    ];
  }
}), mb = $e.create({
  name: "keymap",
  addKeyboardShortcuts() {
    const n = () => this.editor.commands.first(({ commands: s }) => [
      () => s.undoInputRule(),
      () => s.command(({ tr: l }) => {
        const { selection: a, doc: c } = l, { empty: u, $anchor: f } = a, { pos: d, parent: h } = f, p = f.parent.isTextblock && d > 0 ? l.doc.resolve(d - 1) : f, m = p.parent.type.spec.isolating, g = f.pos - f.parentOffset, v = m && p.parent.childCount === 1 ? g === f.pos : Z.atStart(c).from === d;
        return !u || !h.type.isTextblock || h.textContent.length || !v || v && f.parent.type.name === "paragraph" ? !1 : s.clearNodes();
      }),
      () => s.deleteSelection(),
      () => s.joinBackward(),
      () => s.selectNodeBackward()
    ]), e = () => this.editor.commands.first(({ commands: s }) => [
      () => s.deleteSelection(),
      () => s.deleteCurrentNode(),
      () => s.joinForward(),
      () => s.selectNodeForward()
    ]), r = {
      Enter: () => this.editor.commands.first(({ commands: s }) => [
        () => s.newlineInCode(),
        () => s.createParagraphNear(),
        () => s.liftEmptyBlock(),
        () => s.splitBlock()
      ]),
      "Mod-Enter": () => this.editor.commands.exitCode(),
      Backspace: n,
      "Mod-Backspace": n,
      "Shift-Backspace": n,
      Delete: e,
      "Mod-Delete": e,
      "Mod-a": () => this.editor.commands.selectAll()
    }, i = {
      ...r
    }, o = {
      ...r,
      "Ctrl-h": n,
      "Alt-Backspace": n,
      "Ctrl-d": e,
      "Ctrl-Alt-Backspace": e,
      "Alt-Delete": e,
      "Alt-d": e,
      "Ctrl-a": () => this.editor.commands.selectTextblockStart(),
      "Ctrl-e": () => this.editor.commands.selectTextblockEnd()
    };
    return Za() || sh() ? o : i;
  },
  addProseMirrorPlugins() {
    return [
      new Ae({
        key: new He("clearDocument"),
        appendTransaction: (n, e, t) => {
          if (n.some((m) => m.getMeta("composition")))
            return;
          const r = n.some((m) => m.docChanged) && !e.doc.eq(t.doc), i = n.some((m) => m.getMeta("preventClearDocument"));
          if (!r || i)
            return;
          const { empty: o, from: s, to: l } = e.selection, a = Z.atStart(e.doc).from, c = Z.atEnd(e.doc).to;
          if (o || !(s === a && l === c) || !Ws(t.doc))
            return;
          const d = t.tr, h = $s({
            state: t,
            transaction: d
          }), { commands: p } = new zs({
            editor: this.editor,
            state: h
          });
          if (p.clearNodes(), !!d.steps.length)
            return d;
        }
      })
    ];
  }
}), gb = $e.create({
  name: "paste",
  addProseMirrorPlugins() {
    return [
      new Ae({
        key: new He("tiptapPaste"),
        props: {
          handlePaste: (n, e, t) => {
            this.editor.emit("paste", {
              editor: this.editor,
              event: e,
              slice: t
            });
          }
        }
      })
    ];
  }
}), yb = $e.create({
  name: "tabindex",
  addProseMirrorPlugins() {
    return [
      new Ae({
        key: new He("tabindex"),
        props: {
          attributes: () => this.editor.isEditable ? { tabindex: "0" } : {}
        }
      })
    ];
  }
});
class Ln {
  get name() {
    return this.node.type.name;
  }
  constructor(e, t, r = !1, i = null) {
    this.currentNode = null, this.actualDepth = null, this.isBlock = r, this.resolvedPos = e, this.editor = t, this.currentNode = i;
  }
  get node() {
    return this.currentNode || this.resolvedPos.node();
  }
  get element() {
    return this.editor.view.domAtPos(this.pos).node;
  }
  get depth() {
    var e;
    return (e = this.actualDepth) !== null && e !== void 0 ? e : this.resolvedPos.depth;
  }
  get pos() {
    return this.resolvedPos.pos;
  }
  get content() {
    return this.node.content;
  }
  set content(e) {
    let t = this.from, r = this.to;
    if (this.isBlock) {
      if (this.content.size === 0) {
        console.error(`You can\u2019t set content on a block node. Tried to set content on ${this.name} at ${this.pos}`);
        return;
      }
      t = this.from + 1, r = this.to - 1;
    }
    this.editor.commands.insertContentAt({ from: t, to: r }, e);
  }
  get attributes() {
    return this.node.attrs;
  }
  get textContent() {
    return this.node.textContent;
  }
  get size() {
    return this.node.nodeSize;
  }
  get from() {
    return this.isBlock ? this.pos : this.resolvedPos.start(this.resolvedPos.depth);
  }
  get range() {
    return {
      from: this.from,
      to: this.to
    };
  }
  get to() {
    return this.isBlock ? this.pos + this.size : this.resolvedPos.end(this.resolvedPos.depth) + (this.node.isText ? 0 : 1);
  }
  get parent() {
    if (this.depth === 0)
      return null;
    const e = this.resolvedPos.start(this.resolvedPos.depth - 1), t = this.resolvedPos.doc.resolve(e);
    return new Ln(t, this.editor);
  }
  get before() {
    let e = this.resolvedPos.doc.resolve(this.from - (this.isBlock ? 1 : 2));
    return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.from - 3)), new Ln(e, this.editor);
  }
  get after() {
    let e = this.resolvedPos.doc.resolve(this.to + (this.isBlock ? 2 : 1));
    return e.depth !== this.depth && (e = this.resolvedPos.doc.resolve(this.to + 3)), new Ln(e, this.editor);
  }
  get children() {
    const e = [];
    return this.node.content.forEach((t, r) => {
      const i = t.isBlock && !t.isTextblock, o = t.isAtom && !t.isText, s = this.pos + r + (o ? 0 : 1), l = this.resolvedPos.doc.resolve(s);
      if (!i && l.depth <= this.depth)
        return;
      const a = new Ln(l, this.editor, i, i ? t : null);
      i && (a.actualDepth = this.depth + 1), e.push(new Ln(l, this.editor, i, i ? t : null));
    }), e;
  }
  get firstChild() {
    return this.children[0] || null;
  }
  get lastChild() {
    const e = this.children;
    return e[e.length - 1] || null;
  }
  closest(e, t = {}) {
    let r = null, i = this.parent;
    for (; i && !r; ) {
      if (i.node.type.name === e)
        if (Object.keys(t).length > 0) {
          const o = i.node.attrs, s = Object.keys(t);
          for (let l = 0; l < s.length; l += 1) {
            const a = s[l];
            if (o[a] !== t[a])
              break;
          }
        } else
          r = i;
      i = i.parent;
    }
    return r;
  }
  querySelector(e, t = {}) {
    return this.querySelectorAll(e, t, !0)[0] || null;
  }
  querySelectorAll(e, t = {}, r = !1) {
    let i = [];
    if (!this.children || this.children.length === 0)
      return i;
    const o = Object.keys(t);
    return this.children.forEach((s) => {
      r && i.length > 0 || (s.node.type.name === e && o.every((a) => t[a] === s.node.attrs[a]) && i.push(s), !(r && i.length > 0) && (i = i.concat(s.querySelectorAll(e, t, r))));
    }), i;
  }
  setAttribute(e) {
    const { tr: t } = this.editor.state;
    t.setNodeMarkup(this.from, void 0, {
      ...this.node.attrs,
      ...e
    }), this.editor.view.dispatch(t);
  }
}
const vb = `.ProseMirror {
  position: relative;
}

.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
}

.ProseMirror [contenteditable="false"] {
  white-space: normal;
}

.ProseMirror [contenteditable="false"] [contenteditable="true"] {
  white-space: pre-wrap;
}

.ProseMirror pre {
  white-space: pre-wrap;
}

img.ProseMirror-separator {
  display: inline !important;
  border: none !important;
  margin: 0 !important;
  width: 0 !important;
  height: 0 !important;
}

.ProseMirror-gapcursor {
  display: none;
  pointer-events: none;
  position: absolute;
  margin: 0;
}

.ProseMirror-gapcursor:after {
  content: "";
  display: block;
  position: absolute;
  top: -2px;
  width: 20px;
  border-top: 1px solid black;
  animation: ProseMirror-cursor-blink 1.1s steps(2, start) infinite;
}

@keyframes ProseMirror-cursor-blink {
  to {
    visibility: hidden;
  }
}

.ProseMirror-hideselection *::selection {
  background: transparent;
}

.ProseMirror-hideselection *::-moz-selection {
  background: transparent;
}

.ProseMirror-hideselection * {
  caret-color: transparent;
}

.ProseMirror-focused .ProseMirror-gapcursor {
  display: block;
}

.tippy-box[data-animation=fade][data-state=hidden] {
  opacity: 0
}`;
function bb(n, e, t) {
  const r = document.querySelector(`style[data-tiptap-style${t ? `-${t}` : ""}]`);
  if (r !== null)
    return r;
  const i = document.createElement("style");
  return e && i.setAttribute("nonce", e), i.setAttribute(`data-tiptap-style${t ? `-${t}` : ""}`, ""), i.innerHTML = n, document.getElementsByTagName("head")[0].appendChild(i), i;
}
class wb extends O0 {
  constructor(e = {}) {
    super(), this.isFocused = !1, this.isInitialized = !1, this.extensionStorage = {}, this.options = {
      element: document.createElement("div"),
      content: "",
      injectCSS: !0,
      injectNonce: void 0,
      extensions: [],
      autofocus: !1,
      editable: !0,
      editorProps: {},
      parseOptions: {},
      coreExtensionOptions: {},
      enableInputRules: !0,
      enablePasteRules: !0,
      enableCoreExtensions: !0,
      enableContentCheck: !1,
      onBeforeCreate: () => null,
      onCreate: () => null,
      onUpdate: () => null,
      onSelectionUpdate: () => null,
      onTransaction: () => null,
      onFocus: () => null,
      onBlur: () => null,
      onDestroy: () => null,
      onContentError: ({ error: t }) => {
        throw t;
      },
      onPaste: () => null,
      onDrop: () => null
    }, this.isCapturingTransaction = !1, this.capturedTransaction = null, this.setOptions(e), this.createExtensionManager(), this.createCommandManager(), this.createSchema(), this.on("beforeCreate", this.options.onBeforeCreate), this.emit("beforeCreate", { editor: this }), this.on("contentError", this.options.onContentError), this.createView(), this.injectCSS(), this.on("create", this.options.onCreate), this.on("update", this.options.onUpdate), this.on("selectionUpdate", this.options.onSelectionUpdate), this.on("transaction", this.options.onTransaction), this.on("focus", this.options.onFocus), this.on("blur", this.options.onBlur), this.on("destroy", this.options.onDestroy), this.on("drop", ({ event: t, slice: r, moved: i }) => this.options.onDrop(t, r, i)), this.on("paste", ({ event: t, slice: r }) => this.options.onPaste(t, r)), window.setTimeout(() => {
      this.isDestroyed || (this.commands.focus(this.options.autofocus), this.emit("create", { editor: this }), this.isInitialized = !0);
    }, 0);
  }
  get storage() {
    return this.extensionStorage;
  }
  get commands() {
    return this.commandManager.commands;
  }
  chain() {
    return this.commandManager.chain();
  }
  can() {
    return this.commandManager.can();
  }
  injectCSS() {
    this.options.injectCSS && document && (this.css = bb(vb, this.options.injectNonce));
  }
  setOptions(e = {}) {
    this.options = {
      ...this.options,
      ...e
    }, !(!this.view || !this.state || this.isDestroyed) && (this.options.editorProps && this.view.setProps(this.options.editorProps), this.view.updateState(this.state));
  }
  setEditable(e, t = !0) {
    this.setOptions({ editable: e }), t && this.emit("update", { editor: this, transaction: this.state.tr });
  }
  get isEditable() {
    return this.options.editable && this.view && this.view.editable;
  }
  get state() {
    return this.view.state;
  }
  registerPlugin(e, t) {
    const r = th(t) ? t(e, [...this.state.plugins]) : [...this.state.plugins, e], i = this.state.reconfigure({ plugins: r });
    return this.view.updateState(i), i;
  }
  unregisterPlugin(e) {
    if (this.isDestroyed)
      return;
    const t = this.state.plugins;
    let r = t;
    if ([].concat(e).forEach((o) => {
      const s = typeof o == "string" ? `${o}$` : o.key;
      r = r.filter((l) => !l.key.startsWith(s));
    }), t.length === r.length)
      return;
    const i = this.state.reconfigure({
      plugins: r
    });
    return this.view.updateState(i), i;
  }
  createExtensionManager() {
    var e, t;
    const i = [...this.options.enableCoreExtensions ? [
      db,
      j0.configure({
        blockSeparator: (t = (e = this.options.coreExtensionOptions) === null || e === void 0 ? void 0 : e.clipboardTextSerializer) === null || t === void 0 ? void 0 : t.blockSeparator
      }),
      ub,
      pb,
      mb,
      yb,
      fb,
      gb
    ].filter((o) => typeof this.options.enableCoreExtensions == "object" ? this.options.enableCoreExtensions[o.name] !== !1 : !0) : [], ...this.options.extensions].filter((o) => ["extension", "node", "mark"].includes(o == null ? void 0 : o.type));
    this.extensionManager = new vr(i, this);
  }
  createCommandManager() {
    this.commandManager = new zs({
      editor: this
    });
  }
  createSchema() {
    this.schema = this.extensionManager.schema;
  }
  createView() {
    var e;
    let t;
    try {
      t = la(this.options.content, this.schema, this.options.parseOptions, { errorOnInvalidContent: this.options.enableContentCheck });
    } catch (s) {
      if (!(s instanceof Error) || !["[tiptap error]: Invalid JSON content", "[tiptap error]: Invalid HTML content"].includes(s.message))
        throw s;
      this.emit("contentError", {
        editor: this,
        error: s,
        disableCollaboration: () => {
          this.storage.collaboration && (this.storage.collaboration.isDisabled = !0), this.options.extensions = this.options.extensions.filter((l) => l.name !== "collaboration"), this.createExtensionManager();
        }
      }), t = la(this.options.content, this.schema, this.options.parseOptions, { errorOnInvalidContent: !1 });
    }
    const r = ih(t, this.options.autofocus);
    this.view = new jy(this.options.element, {
      ...this.options.editorProps,
      attributes: {
        role: "textbox",
        ...(e = this.options.editorProps) === null || e === void 0 ? void 0 : e.attributes
      },
      dispatchTransaction: this.dispatchTransaction.bind(this),
      state: yr.create({
        doc: t,
        selection: r || void 0
      })
    });
    const i = this.state.reconfigure({
      plugins: this.extensionManager.plugins
    });
    this.view.updateState(i), this.createNodeViews(), this.prependClass();
    const o = this.view.dom;
    o.editor = this;
  }
  createNodeViews() {
    this.view.isDestroyed || this.view.setProps({
      nodeViews: this.extensionManager.nodeViews
    });
  }
  prependClass() {
    this.view.dom.className = `tiptap ${this.view.dom.className}`;
  }
  captureTransaction(e) {
    this.isCapturingTransaction = !0, e(), this.isCapturingTransaction = !1;
    const t = this.capturedTransaction;
    return this.capturedTransaction = null, t;
  }
  dispatchTransaction(e) {
    if (this.view.isDestroyed)
      return;
    if (this.isCapturingTransaction) {
      if (!this.capturedTransaction) {
        this.capturedTransaction = e;
        return;
      }
      e.steps.forEach((s) => {
        var l;
        return (l = this.capturedTransaction) === null || l === void 0 ? void 0 : l.step(s);
      });
      return;
    }
    const t = this.state.apply(e), r = !this.state.selection.eq(t.selection);
    this.emit("beforeTransaction", {
      editor: this,
      transaction: e,
      nextState: t
    }), this.view.updateState(t), this.emit("transaction", {
      editor: this,
      transaction: e
    }), r && this.emit("selectionUpdate", {
      editor: this,
      transaction: e
    });
    const i = e.getMeta("focus"), o = e.getMeta("blur");
    i && this.emit("focus", {
      editor: this,
      event: i.event,
      transaction: e
    }), o && this.emit("blur", {
      editor: this,
      event: o.event,
      transaction: e
    }), !(!e.docChanged || e.getMeta("preventUpdate")) && this.emit("update", {
      editor: this,
      transaction: e
    });
  }
  getAttributes(e) {
    return ch(this.state, e);
  }
  isActive(e, t) {
    const r = typeof e == "string" ? e : null, i = typeof e == "string" ? t : e;
    return Vv(this.state, r, i);
  }
  getJSON() {
    return this.state.doc.toJSON();
  }
  getHTML() {
    return Ja(this.state.doc.content, this.schema);
  }
  getText(e) {
    const { blockSeparator: t = `

`, textSerializers: r = {} } = e || {};
    return ah(this.state.doc, {
      blockSeparator: t,
      textSerializers: {
        ...Ya(this.schema),
        ...r
      }
    });
  }
  get isEmpty() {
    return Ws(this.state.doc);
  }
  getCharacterCount() {
    return console.warn('[tiptap warn]: "editor.getCharacterCount()" is deprecated. Please use "editor.storage.characterCount.characters()" instead.'), this.state.doc.content.size - 2;
  }
  destroy() {
    if (this.emit("destroy"), this.view) {
      const e = this.view.dom;
      e && e.editor && delete e.editor, this.view.destroy();
    }
    this.removeAllListeners();
  }
  get isDestroyed() {
    var e;
    return !(!((e = this.view) === null || e === void 0) && e.docView);
  }
  $node(e, t) {
    var r;
    return ((r = this.$doc) === null || r === void 0 ? void 0 : r.querySelector(e, t)) || null;
  }
  $nodes(e, t) {
    var r;
    return ((r = this.$doc) === null || r === void 0 ? void 0 : r.querySelectorAll(e, t)) || null;
  }
  $pos(e) {
    const t = this.state.doc.resolve(e);
    return new Ln(t, this);
  }
  get $doc() {
    return this.$pos(0);
  }
}
function Go(n) {
  return new I0({
    find: n.find,
    handler: ({ state: e, range: t, match: r }) => {
      const i = ee(n.getAttributes, void 0, r);
      if (i === !1 || i === null)
        return null;
      const { tr: o } = e, s = r[r.length - 1], l = r[0];
      if (s) {
        const a = l.search(/\S/), c = t.from + l.indexOf(s), u = c + s.length;
        if (tc(t.from, t.to, e.doc).filter((h) => h.mark.type.excluded.find((m) => m === n.type && m !== h.mark.type)).filter((h) => h.to > c).length)
          return null;
        u < t.to && o.delete(u, t.to), c > t.from && o.delete(t.from + a, c);
        const d = t.from + a + s.length;
        o.addMark(t.from + a, d, n.type.create(i || {})), o.removeStoredMark(n.type);
      }
    }
  });
}
class Dr {
  constructor(e = {}) {
    this.type = "node", this.name = "node", this.parent = null, this.child = null, this.config = {
      name: this.name,
      defaultOptions: {}
    }, this.config = {
      ...this.config,
      ...e
    }, this.name = this.config.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${this.name}".`), this.options = this.config.defaultOptions, this.config.addOptions && (this.options = ee(_(this, "addOptions", {
      name: this.name
    }))), this.storage = ee(_(this, "addStorage", {
      name: this.name,
      options: this.options
    })) || {};
  }
  static create(e = {}) {
    return new Dr(e);
  }
  configure(e = {}) {
    const t = this.extend({
      ...this.config,
      addOptions: () => Vs(this.options, e)
    });
    return t.name = this.name, t.parent = this.parent, t;
  }
  extend(e = {}) {
    const t = new Dr(e);
    return t.parent = this, this.child = t, t.name = e.name ? e.name : t.parent.name, e.defaultOptions && Object.keys(e.defaultOptions).length > 0 && console.warn(`[tiptap warn]: BREAKING CHANGE: "defaultOptions" is deprecated. Please use "addOptions" instead. Found in extension: "${t.name}".`), t.options = ee(_(t, "addOptions", {
      name: t.name
    })), t.storage = ee(_(t, "addStorage", {
      name: t.name,
      options: t.options
    })), t;
  }
}
function Oi(n) {
  return new _0({
    find: n.find,
    handler: ({ state: e, range: t, match: r, pasteEvent: i }) => {
      const o = ee(n.getAttributes, void 0, r, i);
      if (o === !1 || o === null)
        return null;
      const { tr: s } = e, l = r[r.length - 1], a = r[0];
      let c = t.to;
      if (l) {
        const u = a.search(/\S/), f = t.from + a.indexOf(l), d = f + l.length;
        if (tc(t.from, t.to, e.doc).filter((p) => p.mark.type.excluded.find((g) => g === n.type && g !== p.mark.type)).filter((p) => p.to > f).length)
          return null;
        d < t.to && s.delete(d, t.to), f > t.from && s.delete(t.from + u, f), c = t.from + u + l.length, s.addMark(t.from + u, c, n.type.create(o || {})), s.removeStoredMark(n.type);
      }
    }
  });
}
const kb = Dr.create({
  name: "doc",
  topNode: !0,
  content: "block+"
}), xb = Dr.create({
  name: "paragraph",
  priority: 1e3,
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  group: "block",
  content: "inline*",
  parseHTML() {
    return [
      { tag: "p" }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["p", Ar(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setParagraph: () => ({ commands: n }) => n.setNode(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-Alt-0": () => this.editor.commands.setParagraph()
    };
  }
}), Sb = Dr.create({
  name: "text",
  group: "inline"
}), Eb = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))$/, Cb = /(?:^|\s)(\*\*(?!\s+\*\*)((?:[^*]+))\*\*(?!\s+\*\*))/g, Tb = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))$/, Ob = /(?:^|\s)(__(?!\s+__)((?:[^_]+))__(?!\s+__))/g, Mb = Xn.create({
  name: "bold",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "strong"
      },
      {
        tag: "b",
        getAttrs: (n) => n.style.fontWeight !== "normal" && null
      },
      {
        style: "font-weight=400",
        clearMark: (n) => n.type.name === this.name
      },
      {
        style: "font-weight",
        getAttrs: (n) => /^(bold(er)?|[5-9]\d{2,})$/.test(n) && null
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["strong", Ar(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setBold: () => ({ commands: n }) => n.setMark(this.name),
      toggleBold: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetBold: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-b": () => this.editor.commands.toggleBold(),
      "Mod-B": () => this.editor.commands.toggleBold()
    };
  },
  addInputRules() {
    return [
      Go({
        find: Eb,
        type: this.type
      }),
      Go({
        find: Tb,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Oi({
        find: Cb,
        type: this.type
      }),
      Oi({
        find: Ob,
        type: this.type
      })
    ];
  }
}), Ab = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))$/, Db = /(?:^|\s)(\*(?!\s+\*)((?:[^*]+))\*(?!\s+\*))/g, Nb = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))$/, Ib = /(?:^|\s)(_(?!\s+_)((?:[^_]+))_(?!\s+_))/g, Rb = Xn.create({
  name: "italic",
  addOptions() {
    return {
      HTMLAttributes: {}
    };
  },
  parseHTML() {
    return [
      {
        tag: "em"
      },
      {
        tag: "i",
        getAttrs: (n) => n.style.fontStyle !== "normal" && null
      },
      {
        style: "font-style=normal",
        clearMark: (n) => n.type.name === this.name
      },
      {
        style: "font-style=italic"
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return ["em", Ar(this.options.HTMLAttributes, n), 0];
  },
  addCommands() {
    return {
      setItalic: () => ({ commands: n }) => n.setMark(this.name),
      toggleItalic: () => ({ commands: n }) => n.toggleMark(this.name),
      unsetItalic: () => ({ commands: n }) => n.unsetMark(this.name)
    };
  },
  addKeyboardShortcuts() {
    return {
      "Mod-i": () => this.editor.commands.toggleItalic(),
      "Mod-I": () => this.editor.commands.toggleItalic()
    };
  },
  addInputRules() {
    return [
      Go({
        find: Ab,
        type: this.type
      }),
      Go({
        find: Nb,
        type: this.type
      })
    ];
  },
  addPasteRules() {
    return [
      Oi({
        find: Db,
        type: this.type
      }),
      Oi({
        find: Ib,
        type: this.type
      })
    ];
  }
});
var Yo = 200, ke = function() {
};
ke.prototype.append = function(e) {
  return e.length ? (e = ke.from(e), !this.length && e || e.length < Yo && this.leafAppend(e) || this.length < Yo && e.leafPrepend(this) || this.appendInner(e)) : this;
};
ke.prototype.prepend = function(e) {
  return e.length ? ke.from(e).append(this) : this;
};
ke.prototype.appendInner = function(e) {
  return new Pb(this, e);
};
ke.prototype.slice = function(e, t) {
  return e === void 0 && (e = 0), t === void 0 && (t = this.length), e >= t ? ke.empty : this.sliceInner(Math.max(0, e), Math.min(this.length, t));
};
ke.prototype.get = function(e) {
  if (!(e < 0 || e >= this.length))
    return this.getInner(e);
};
ke.prototype.forEach = function(e, t, r) {
  t === void 0 && (t = 0), r === void 0 && (r = this.length), t <= r ? this.forEachInner(e, t, r, 0) : this.forEachInvertedInner(e, t, r, 0);
};
ke.prototype.map = function(e, t, r) {
  t === void 0 && (t = 0), r === void 0 && (r = this.length);
  var i = [];
  return this.forEach(function(o, s) {
    return i.push(e(o, s));
  }, t, r), i;
};
ke.from = function(e) {
  return e instanceof ke ? e : e && e.length ? new fh(e) : ke.empty;
};
var fh = /* @__PURE__ */ function(n) {
  function e(r) {
    n.call(this), this.values = r;
  }
  n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e;
  var t = { length: { configurable: !0 }, depth: { configurable: !0 } };
  return e.prototype.flatten = function() {
    return this.values;
  }, e.prototype.sliceInner = function(i, o) {
    return i == 0 && o == this.length ? this : new e(this.values.slice(i, o));
  }, e.prototype.getInner = function(i) {
    return this.values[i];
  }, e.prototype.forEachInner = function(i, o, s, l) {
    for (var a = o; a < s; a++)
      if (i(this.values[a], l + a) === !1)
        return !1;
  }, e.prototype.forEachInvertedInner = function(i, o, s, l) {
    for (var a = o - 1; a >= s; a--)
      if (i(this.values[a], l + a) === !1)
        return !1;
  }, e.prototype.leafAppend = function(i) {
    if (this.length + i.length <= Yo)
      return new e(this.values.concat(i.flatten()));
  }, e.prototype.leafPrepend = function(i) {
    if (this.length + i.length <= Yo)
      return new e(i.flatten().concat(this.values));
  }, t.length.get = function() {
    return this.values.length;
  }, t.depth.get = function() {
    return 0;
  }, Object.defineProperties(e.prototype, t), e;
}(ke);
ke.empty = new fh([]);
var Pb = /* @__PURE__ */ function(n) {
  function e(t, r) {
    n.call(this), this.left = t, this.right = r, this.length = t.length + r.length, this.depth = Math.max(t.depth, r.depth) + 1;
  }
  return n && (e.__proto__ = n), e.prototype = Object.create(n && n.prototype), e.prototype.constructor = e, e.prototype.flatten = function() {
    return this.left.flatten().concat(this.right.flatten());
  }, e.prototype.getInner = function(r) {
    return r < this.left.length ? this.left.get(r) : this.right.get(r - this.left.length);
  }, e.prototype.forEachInner = function(r, i, o, s) {
    var l = this.left.length;
    if (i < l && this.left.forEachInner(r, i, Math.min(o, l), s) === !1 || o > l && this.right.forEachInner(r, Math.max(i - l, 0), Math.min(this.length, o) - l, s + l) === !1)
      return !1;
  }, e.prototype.forEachInvertedInner = function(r, i, o, s) {
    var l = this.left.length;
    if (i > l && this.right.forEachInvertedInner(r, i - l, Math.max(o, l) - l, s + l) === !1 || o < l && this.left.forEachInvertedInner(r, Math.min(i, l), o, s) === !1)
      return !1;
  }, e.prototype.sliceInner = function(r, i) {
    if (r == 0 && i == this.length)
      return this;
    var o = this.left.length;
    return i <= o ? this.left.slice(r, i) : r >= o ? this.right.slice(r - o, i - o) : this.left.slice(r, o).append(this.right.slice(0, i - o));
  }, e.prototype.leafAppend = function(r) {
    var i = this.right.leafAppend(r);
    if (i)
      return new e(this.left, i);
  }, e.prototype.leafPrepend = function(r) {
    var i = this.left.leafPrepend(r);
    if (i)
      return new e(i, this.right);
  }, e.prototype.appendInner = function(r) {
    return this.left.depth >= Math.max(this.right.depth, r.depth) + 1 ? new e(this.left, new e(this.right, r)) : new e(this, r);
  }, e;
}(ke);
const Lb = 500;
class bt {
  constructor(e, t) {
    this.items = e, this.eventCount = t;
  }
  popEvent(e, t) {
    if (this.eventCount == 0)
      return null;
    let r = this.items.length;
    for (; ; r--)
      if (this.items.get(r - 1).selection) {
        --r;
        break;
      }
    let i, o;
    t && (i = this.remapping(r, this.items.length), o = i.maps.length);
    let s = e.tr, l, a, c = [], u = [];
    return this.items.forEach((f, d) => {
      if (!f.step) {
        i || (i = this.remapping(r, d + 1), o = i.maps.length), o--, u.push(f);
        return;
      }
      if (i) {
        u.push(new St(f.map));
        let h = f.step.map(i.slice(o)), p;
        h && s.maybeStep(h).doc && (p = s.mapping.maps[s.mapping.maps.length - 1], c.push(new St(p, void 0, void 0, c.length + u.length))), o--, p && i.appendMap(p, o);
      } else
        s.maybeStep(f.step);
      if (f.selection)
        return l = i ? f.selection.map(i.slice(o)) : f.selection, a = new bt(this.items.slice(0, r).append(u.reverse().concat(c)), this.eventCount - 1), !1;
    }, this.items.length, 0), { remaining: a, transform: s, selection: l };
  }
  addTransform(e, t, r, i) {
    let o = [], s = this.eventCount, l = this.items, a = !i && l.length ? l.get(l.length - 1) : null;
    for (let u = 0; u < e.steps.length; u++) {
      let f = e.steps[u].invert(e.docs[u]), d = new St(e.mapping.maps[u], f, t), h;
      (h = a && a.merge(d)) && (d = h, u ? o.pop() : l = l.slice(0, l.length - 1)), o.push(d), t && (s++, t = void 0), i || (a = d);
    }
    let c = s - r.depth;
    return c > _b && (l = Bb(l, c), s -= c), new bt(l.append(o), s);
  }
  remapping(e, t) {
    let r = new ki();
    return this.items.forEach((i, o) => {
      let s = i.mirrorOffset != null && o - i.mirrorOffset >= e ? r.maps.length - i.mirrorOffset : void 0;
      r.appendMap(i.map, s);
    }, e, t), r;
  }
  addMaps(e) {
    return this.eventCount == 0 ? this : new bt(this.items.append(e.map((t) => new St(t))), this.eventCount);
  }
  rebased(e, t) {
    if (!this.eventCount)
      return this;
    let r = [], i = Math.max(0, this.items.length - t), o = e.mapping, s = e.steps.length, l = this.eventCount;
    this.items.forEach((d) => {
      d.selection && l--;
    }, i);
    let a = t;
    this.items.forEach((d) => {
      let h = o.getMirror(--a);
      if (h == null)
        return;
      s = Math.min(s, h);
      let p = o.maps[h];
      if (d.step) {
        let m = e.steps[h].invert(e.docs[h]), g = d.selection && d.selection.map(o.slice(a + 1, h));
        g && l++, r.push(new St(p, m, g));
      } else
        r.push(new St(p));
    }, i);
    let c = [];
    for (let d = t; d < s; d++)
      c.push(new St(o.maps[d]));
    let u = this.items.slice(0, i).append(c).append(r), f = new bt(u, l);
    return f.emptyItemCount() > Lb && (f = f.compress(this.items.length - r.length)), f;
  }
  emptyItemCount() {
    let e = 0;
    return this.items.forEach((t) => {
      t.step || e++;
    }), e;
  }
  compress(e = this.items.length) {
    let t = this.remapping(0, e), r = t.maps.length, i = [], o = 0;
    return this.items.forEach((s, l) => {
      if (l >= e)
        i.push(s), s.selection && o++;
      else if (s.step) {
        let a = s.step.map(t.slice(r)), c = a && a.getMap();
        if (r--, c && t.appendMap(c, r), a) {
          let u = s.selection && s.selection.map(t.slice(r));
          u && o++;
          let f = new St(c.invert(), a, u), d, h = i.length - 1;
          (d = i.length && i[h].merge(f)) ? i[h] = d : i.push(f);
        }
      } else
        s.map && r--;
    }, this.items.length, 0), new bt(ke.from(i.reverse()), o);
  }
}
bt.empty = new bt(ke.empty, 0);
function Bb(n, e) {
  let t;
  return n.forEach((r, i) => {
    if (r.selection && e-- == 0)
      return t = i, !1;
  }), n.slice(t);
}
class St {
  constructor(e, t, r, i) {
    this.map = e, this.step = t, this.selection = r, this.mirrorOffset = i;
  }
  merge(e) {
    if (this.step && e.step && !e.selection) {
      let t = e.step.merge(this.step);
      if (t)
        return new St(t.getMap().invert(), t, this.selection);
    }
  }
}
class an {
  constructor(e, t, r, i, o) {
    this.done = e, this.undone = t, this.prevRanges = r, this.prevTime = i, this.prevComposition = o;
  }
}
const _b = 20;
function Fb(n, e, t, r) {
  let i = t.getMeta(Wn), o;
  if (i)
    return i.historyState;
  t.getMeta(Hb) && (n = new an(n.done, n.undone, null, 0, -1));
  let s = t.getMeta("appendedTransaction");
  if (t.steps.length == 0)
    return n;
  if (s && s.getMeta(Wn))
    return s.getMeta(Wn).redo ? new an(n.done.addTransform(t, void 0, r, Co(e)), n.undone, _u(t.mapping.maps), n.prevTime, n.prevComposition) : new an(n.done, n.undone.addTransform(t, void 0, r, Co(e)), null, n.prevTime, n.prevComposition);
  if (t.getMeta("addToHistory") !== !1 && !(s && s.getMeta("addToHistory") === !1)) {
    let l = t.getMeta("composition"), a = n.prevTime == 0 || !s && n.prevComposition != l && (n.prevTime < (t.time || 0) - r.newGroupDelay || !$b(t, n.prevRanges)), c = s ? Cl(n.prevRanges, t.mapping) : _u(t.mapping.maps);
    return new an(n.done.addTransform(t, a ? e.selection.getBookmark() : void 0, r, Co(e)), bt.empty, c, t.time, l == null ? n.prevComposition : l);
  } else
    return (o = t.getMeta("rebased")) ? new an(n.done.rebased(t, o), n.undone.rebased(t, o), Cl(n.prevRanges, t.mapping), n.prevTime, n.prevComposition) : new an(n.done.addMaps(t.mapping.maps), n.undone.addMaps(t.mapping.maps), Cl(n.prevRanges, t.mapping), n.prevTime, n.prevComposition);
}
function $b(n, e) {
  if (!e)
    return !1;
  if (!n.docChanged)
    return !0;
  let t = !1;
  return n.mapping.maps[0].forEach((r, i) => {
    for (let o = 0; o < e.length; o += 2)
      r <= e[o + 1] && i >= e[o] && (t = !0);
  }), t;
}
function _u(n) {
  let e = [];
  for (let t = n.length - 1; t >= 0 && e.length == 0; t--)
    n[t].forEach((r, i, o, s) => e.push(o, s));
  return e;
}
function Cl(n, e) {
  if (!n)
    return null;
  let t = [];
  for (let r = 0; r < n.length; r += 2) {
    let i = e.map(n[r], 1), o = e.map(n[r + 1], -1);
    i <= o && t.push(i, o);
  }
  return t;
}
function zb(n, e, t) {
  let r = Co(e), i = Wn.get(e).spec.config, o = (t ? n.undone : n.done).popEvent(e, r);
  if (!o)
    return null;
  let s = o.selection.resolve(o.transform.doc), l = (t ? n.done : n.undone).addTransform(o.transform, e.selection.getBookmark(), i, r), a = new an(t ? l : o.remaining, t ? o.remaining : l, null, 0, -1);
  return o.transform.setSelection(s).setMeta(Wn, { redo: t, historyState: a });
}
let Tl = !1, Fu = null;
function Co(n) {
  let e = n.plugins;
  if (Fu != e) {
    Tl = !1, Fu = e;
    for (let t = 0; t < e.length; t++)
      if (e[t].spec.historyPreserveItems) {
        Tl = !0;
        break;
      }
  }
  return Tl;
}
const Wn = new He("history"), Hb = new He("closeHistory");
function Vb(n = {}) {
  return n = {
    depth: n.depth || 100,
    newGroupDelay: n.newGroupDelay || 500
  }, new Ae({
    key: Wn,
    state: {
      init() {
        return new an(bt.empty, bt.empty, null, 0, -1);
      },
      apply(e, t, r) {
        return Fb(t, r, e, n);
      }
    },
    config: n,
    props: {
      handleDOMEvents: {
        beforeinput(e, t) {
          let r = t.inputType, i = r == "historyUndo" ? hh : r == "historyRedo" ? ph : null;
          return i ? (t.preventDefault(), i(e.state, e.dispatch)) : !1;
        }
      }
    }
  });
}
function dh(n, e) {
  return (t, r) => {
    let i = Wn.getState(t);
    if (!i || (n ? i.undone : i.done).eventCount == 0)
      return !1;
    if (r) {
      let o = zb(i, t, n);
      o && r(e ? o.scrollIntoView() : o);
    }
    return !0;
  };
}
const hh = dh(!1, !0), ph = dh(!0, !0), jb = $e.create({
  name: "history",
  addOptions() {
    return {
      depth: 100,
      newGroupDelay: 500
    };
  },
  addCommands() {
    return {
      undo: () => ({ state: n, dispatch: e }) => hh(n, e),
      redo: () => ({ state: n, dispatch: e }) => ph(n, e)
    };
  },
  addProseMirrorPlugins() {
    return [
      Vb(this.options)
    ];
  },
  addKeyboardShortcuts() {
    return {
      "Mod-z": () => this.editor.commands.undo(),
      "Shift-Mod-z": () => this.editor.commands.redo(),
      "Mod-y": () => this.editor.commands.redo(),
      "Mod-\u044F": () => this.editor.commands.undo(),
      "Shift-Mod-\u044F": () => this.editor.commands.redo()
    };
  }
}), Wb = $e.create({
  name: "placeholder",
  addOptions() {
    return {
      emptyEditorClass: "is-editor-empty",
      emptyNodeClass: "is-empty",
      placeholder: "Write something \u2026",
      showOnlyWhenEditable: !0,
      showOnlyCurrent: !0,
      includeChildren: !1
    };
  },
  addProseMirrorPlugins() {
    return [
      new Ae({
        key: new He("placeholder"),
        props: {
          decorations: ({ doc: n, selection: e }) => {
            const t = this.editor.isEditable || !this.options.showOnlyWhenEditable, { anchor: r } = e, i = [];
            if (!t)
              return null;
            const o = this.editor.isEmpty;
            return n.descendants((s, l) => {
              const a = r >= l && r <= l + s.nodeSize, c = !s.isLeaf && Ws(s);
              if ((a || !this.options.showOnlyCurrent) && c) {
                const u = [this.options.emptyNodeClass];
                o && u.push(this.options.emptyEditorClass);
                const f = ut.node(l, l + s.nodeSize, {
                  class: u.join(" "),
                  "data-placeholder": typeof this.options.placeholder == "function" ? this.options.placeholder({
                    editor: this.editor,
                    node: s,
                    pos: l,
                    hasAnchor: a
                  }) : this.options.placeholder
                });
                i.push(f);
              }
              return this.options.includeChildren;
            }), ve.create(n, i);
          }
        }
      })
    ];
  }
}), Ub = "aaa1rp3bb0ott3vie4c1le2ogado5udhabi7c0ademy5centure6ountant0s9o1tor4d0s1ult4e0g1ro2tna4f0l1rica5g0akhan5ency5i0g1rbus3force5tel5kdn3l0ibaba4pay4lfinanz6state5y2sace3tom5m0azon4ericanexpress7family11x2fam3ica3sterdam8nalytics7droid5quan4z2o0l2partments8p0le4q0uarelle8r0ab1mco4chi3my2pa2t0e3s0da2ia2sociates9t0hleta5torney7u0ction5di0ble3o3spost5thor3o0s4w0s2x0a2z0ure5ba0by2idu3namex4d1k2r0celona5laycard4s5efoot5gains6seball5ketball8uhaus5yern5b0c1t1va3cg1n2d1e0ats2uty4er2rlin4st0buy5t2f1g1h0arti5i0ble3d1ke2ng0o3o1z2j1lack0friday9ockbuster8g1omberg7ue3m0s1w2n0pparibas9o0ats3ehringer8fa2m1nd2o0k0ing5sch2tik2on4t1utique6x2r0adesco6idgestone9oadway5ker3ther5ussels7s1t1uild0ers6siness6y1zz3v1w1y1z0h3ca0b1fe2l0l1vinklein9m0era3p2non3petown5ital0one8r0avan4ds2e0er0s4s2sa1e1h1ino4t0ering5holic7ba1n1re3c1d1enter4o1rn3f0a1d2g1h0anel2nel4rity4se2t2eap3intai5ristmas6ome4urch5i0priani6rcle4sco3tadel4i0c2y3k1l0aims4eaning6ick2nic1que6othing5ud3ub0med6m1n1o0ach3des3ffee4llege4ogne5m0mbank4unity6pany2re3uter5sec4ndos3struction8ulting7tact3ractors9oking4l1p2rsica5untry4pon0s4rses6pa2r0edit0card4union9icket5own3s1uise0s6u0isinella9v1w1x1y0mru3ou3z2dad1nce3ta1e1ing3sun4y2clk3ds2e0al0er2s3gree4livery5l1oitte5ta3mocrat6ntal2ist5si0gn4v2hl2iamonds6et2gital5rect0ory7scount3ver5h2y2j1k1m1np2o0cs1tor4g1mains5t1wnload7rive4tv2ubai3nlop4pont4rban5vag2r2z2earth3t2c0o2deka3u0cation8e1g1mail3erck5nergy4gineer0ing9terprises10pson4quipment8r0icsson6ni3s0q1tate5t1u0rovision8s2vents5xchange6pert3osed4ress5traspace10fage2il1rwinds6th3mily4n0s2rm0ers5shion4t3edex3edback6rrari3ero6i0delity5o2lm2nal1nce1ial7re0stone6mdale6sh0ing5t0ness6j1k1lickr3ghts4r2orist4wers5y2m1o0o0d1tball6rd1ex2sale4um3undation8x2r0ee1senius7l1ogans4ntier7tr2ujitsu5n0d2rniture7tbol5yi3ga0l0lery3o1up4me0s3p1rden4y2b0iz3d0n2e0a1nt0ing5orge5f1g0ee3h1i0ft0s3ves2ing5l0ass3e1obal2o4m0ail3bh2o1x2n1odaddy5ld0point6f2o0dyear5g0le4p1t1v2p1q1r0ainger5phics5tis4een3ipe3ocery4up4s1t1u0cci3ge2ide2tars5ru3w1y2hair2mburg5ngout5us3bo2dfc0bank7ealth0care8lp1sinki6re1mes5iphop4samitsu7tachi5v2k0t2m1n1ockey4ldings5iday5medepot5goods5s0ense7nda3rse3spital5t0ing5t0els3mail5use3w2r1sbc3t1u0ghes5yatt3undai7ibm2cbc2e1u2d1e0ee3fm2kano4l1m0amat4db2mo0bilien9n0c1dustries8finiti5o2g1k1stitute6urance4e4t0ernational10uit4vestments10o1piranga7q1r0ish4s0maili5t0anbul7t0au2v3jaguar4va3cb2e0ep2tzt3welry6io2ll2m0p2nj2o0bs1urg4t1y2p0morgan6rs3uegos4niper7kaufen5ddi3e0rryhotels6properties14fh2g1h1i0a1ds2m1ndle4tchen5wi3m1n1oeln3matsu5sher5p0mg2n2r0d1ed3uokgroup8w1y0oto4z2la0caixa5mborghini8er3nd0rover6xess5salle5t0ino3robe5w0yer5b1c1ds2ease3clerc5frak4gal2o2xus4gbt3i0dl2fe0insurance9style7ghting6ke2lly3mited4o2ncoln4k2ve1ing5k1lc1p2oan0s3cker3us3l1ndon4tte1o3ve3pl0financial11r1s1t0d0a3u0ndbeck6xe1ury5v1y2ma0drid4if1son4keup4n0agement7go3p1rket0ing3s4riott5shalls7ttel5ba2c0kinsey7d1e0d0ia3et2lbourne7me1orial6n0u2rckmsd7g1h1iami3crosoft7l1ni1t2t0subishi9k1l0b1s2m0a2n1o0bi0le4da2e1i1m1nash3ey2ster5rmon3tgage6scow4to0rcycles9v0ie4p1q1r1s0d2t0n1r2u0seum3ic4v1w1x1y1z2na0b1goya4me2vy3ba2c1e0c1t0bank4flix4work5ustar5w0s2xt0direct7us4f0l2g0o2hk2i0co2ke1on3nja3ssan1y5l1o0kia3rton4w0ruz3tv4p1r0a1w2tt2u1yc2z2obi1server7ffice5kinawa6layan0group9lo3m0ega4ne1g1l0ine5oo2pen3racle3nge4g0anic5igins6saka4tsuka4t2vh3pa0ge2nasonic7ris2s1tners4s1y3y2ccw3e0t2f0izer5g1h0armacy6d1ilips5one2to0graphy6s4ysio5ics1tet2ures6d1n0g1k2oneer5zza4k1l0ace2y0station9umbing5s3m1n0c2ohl2ker3litie5rn2st3r0america6xi3ess3ime3o0d0uctions8f1gressive8mo2perties3y5tection8u0dential9s1t1ub2w0c2y2qa1pon3uebec3st5racing4dio4e0ad1lestate6tor2y4cipes5d0stone5umbrella9hab3ise0n3t2liance6n0t0als5pair3ort3ublican8st0aurant8view0s5xroth6ich0ardli6oh3l1o1p2o0cks3deo3gers4om3s0vp3u0gby3hr2n2w0e2yukyu6sa0arland6fe0ty4kura4le1on3msclub4ung5ndvik0coromant12ofi4p1rl2s1ve2xo3b0i1s2c0b1haeffler7midt4olarships8ol3ule3warz5ience5ot3d1e0arch3t2cure1ity6ek2lect4ner3rvices6ven3w1x0y3fr2g1h0angrila6rp3ell3ia1ksha5oes2p0ping5uji3w3i0lk2na1gles5te3j1k0i0n2y0pe4l0ing4m0art3ile4n0cf3o0ccer3ial4ftbank4ware6hu2lar2utions7ng1y2y2pa0ce3ort2t3r0l2s1t0ada2ples4r1tebank4farm7c0group6ockholm6rage3e3ream4udio2y3yle4u0cks3pplies3y2ort5rf1gery5zuki5v1watch4iss4x1y0dney4stems6z2tab1ipei4lk2obao4rget4tamotors6r2too4x0i3c0i2d0k2eam2ch0nology8l1masek5nnis4va3f1g1h0d1eater2re6iaa2ckets5enda4ps2res2ol4j0maxx4x2k0maxx5l1m0all4n1o0day3kyo3ols3p1ray3shiba5tal3urs3wn2yota3s3r0ade1ing4ining5vel0ers0insurance16ust3v2t1ube2i1nes3shu4v0s2w1z2ua1bank3s2g1k1nicom3versity8o2ol2ps2s1y1z2va0cations7na1guard7c1e0gas3ntures6risign5m\xF6gensberater2ung14sicherung10t2g1i0ajes4deo3g1king4llas4n1p1rgin4sa1ion4va1o3laanderen9n1odka3lvo3te1ing3o2yage5u2wales2mart4ter4ng0gou5tch0es6eather0channel12bcam3er2site5d0ding5ibo2r3f1hoswho6ien2ki2lliamhill9n0dows4e1ners6me2olterskluwer11odside6rk0s2ld3w2s1tc1f3xbox3erox4ihuan4n2xx2yz3yachts4hoo3maxun5ndex5e1odobashi7ga2kohama6u0tube6t1un3za0ppos4ra3ero3ip2m1one3uerich6w2", Kb = "\u03B5\u03BB1\u03C52\u0431\u04331\u0435\u043B3\u0434\u0435\u0442\u04384\u0435\u044E2\u043A\u0430\u0442\u043E\u043B\u0438\u043A6\u043E\u043C3\u043C\u043A\u04342\u043E\u043D1\u0441\u043A\u0432\u04306\u043E\u043D\u043B\u0430\u0439\u043D5\u0440\u04333\u0440\u0443\u04412\u04442\u0441\u0430\u0439\u04423\u0440\u04313\u0443\u043A\u04403\u049B\u0430\u04373\u0570\u0561\u05753\u05D9\u05E9\u05E8\u05D0\u05DC5\u05E7\u05D5\u05DD3\u0627\u0628\u0648\u0638\u0628\u064A5\u0631\u0627\u0645\u0643\u06485\u0644\u0627\u0631\u062F\u06464\u0628\u062D\u0631\u064A\u06465\u062C\u0632\u0627\u0626\u06315\u0633\u0639\u0648\u062F\u064A\u06296\u0639\u0644\u064A\u0627\u06465\u0645\u063A\u0631\u06285\u0645\u0627\u0631\u0627\u062A5\u06CC\u0631\u0627\u06465\u0628\u0627\u0631\u062A2\u0632\u0627\u06314\u064A\u062A\u06433\u06BE\u0627\u0631\u062A5\u062A\u0648\u0646\u06334\u0633\u0648\u062F\u0627\u06463\u0631\u064A\u06295\u0634\u0628\u0643\u06294\u0639\u0631\u0627\u06422\u06282\u0645\u0627\u06464\u0641\u0644\u0633\u0637\u064A\u06466\u0642\u0637\u06313\u0643\u0627\u062B\u0648\u0644\u064A\u06436\u0648\u06453\u0645\u0635\u06312\u0644\u064A\u0633\u064A\u06275\u0648\u0631\u064A\u062A\u0627\u0646\u064A\u06277\u0642\u06394\u0647\u0645\u0631\u0627\u06475\u067E\u0627\u06A9\u0633\u062A\u0627\u06467\u0680\u0627\u0631\u062A4\u0915\u0949\u092E3\u0928\u0947\u091F3\u092D\u093E\u0930\u09240\u092E\u094D3\u094B\u09245\u0938\u0902\u0917\u0920\u09285\u09AC\u09BE\u0982\u09B2\u09BE5\u09AD\u09BE\u09B0\u09A42\u09F0\u09A44\u0A2D\u0A3E\u0A30\u0A244\u0AAD\u0ABE\u0AB0\u0AA44\u0B2D\u0B3E\u0B30\u0B244\u0B87\u0BA8\u0BCD\u0BA4\u0BBF\u0BAF\u0BBE6\u0BB2\u0B99\u0BCD\u0B95\u0BC86\u0B9A\u0BBF\u0B99\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0BC2\u0BB0\u0BCD11\u0C2D\u0C3E\u0C30\u0C24\u0C4D5\u0CAD\u0CBE\u0CB0\u0CA44\u0D2D\u0D3E\u0D30\u0D24\u0D025\u0DBD\u0D82\u0D9A\u0DCF4\u0E04\u0E2D\u0E213\u0E44\u0E17\u0E223\u0EA5\u0EB2\u0EA73\u10D2\u10D42\u307F\u3093\u306A3\u30A2\u30DE\u30BE\u30F34\u30AF\u30E9\u30A6\u30C94\u30B0\u30FC\u30B0\u30EB4\u30B3\u30E02\u30B9\u30C8\u30A23\u30BB\u30FC\u30EB3\u30D5\u30A1\u30C3\u30B7\u30E7\u30F36\u30DD\u30A4\u30F3\u30C84\u4E16\u754C2\u4E2D\u4FE11\u56FD1\u570B1\u6587\u7F513\u4E9A\u9A6C\u900A3\u4F01\u4E1A2\u4F5B\u5C712\u4FE1\u606F2\u5065\u5EB72\u516B\u53662\u516C\u53F81\u76CA2\u53F0\u6E7E1\u70632\u5546\u57CE1\u5E971\u68072\u5609\u91CC0\u5927\u9152\u5E975\u5728\u7EBF2\u5927\u62FF2\u5929\u4E3B\u65593\u5A31\u4E502\u5BB6\u96FB2\u5E7F\u4E1C2\u5FAE\u535A2\u6148\u55842\u6211\u7231\u4F603\u624B\u673A2\u62DB\u80582\u653F\u52A11\u5E9C2\u65B0\u52A0\u57612\u95FB2\u65F6\u5C1A2\u66F8\u7C4D2\u673A\u67842\u6DE1\u9A6C\u95213\u6E38\u620F2\u6FB3\u95802\u70B9\u770B2\u79FB\u52A82\u7EC4\u7EC7\u673A\u67844\u7F51\u57401\u5E971\u7AD91\u7EDC2\u8054\u901A2\u8C37\u6B4C2\u8D2D\u72692\u901A\u8CA92\u96C6\u56E22\u96FB\u8A0A\u76C8\u79D14\u98DE\u5229\u6D663\u98DF\u54C12\u9910\u53852\u9999\u683C\u91CC\u62C93\u6E2F2\uB2F7\uB1371\uCEF42\uC0BC\uC1312\uD55C\uAD6D2", Nr = (n, e) => {
  for (const t in e)
    n[t] = e[t];
  return n;
}, ca = "numeric", ua = "ascii", fa = "alpha", ui = "asciinumeric", ei = "alphanumeric", da = "domain", mh = "emoji", qb = "scheme", Jb = "slashscheme", Ol = "whitespace";
function Gb(n, e) {
  return n in e || (e[n] = []), e[n];
}
function $n(n, e, t) {
  e[ca] && (e[ui] = !0, e[ei] = !0), e[ua] && (e[ui] = !0, e[fa] = !0), e[ui] && (e[ei] = !0), e[fa] && (e[ei] = !0), e[ei] && (e[da] = !0), e[mh] && (e[da] = !0);
  for (const r in e) {
    const i = Gb(r, t);
    i.indexOf(n) < 0 && i.push(n);
  }
}
function Yb(n, e) {
  const t = {};
  for (const r in e)
    e[r].indexOf(n) >= 0 && (t[r] = !0);
  return t;
}
function Ue(n = null) {
  this.j = {}, this.jr = [], this.jd = null, this.t = n;
}
Ue.groups = {};
Ue.prototype = {
  accepts() {
    return !!this.t;
  },
  go(n) {
    const e = this, t = e.j[n];
    if (t)
      return t;
    for (let r = 0; r < e.jr.length; r++) {
      const i = e.jr[r][0], o = e.jr[r][1];
      if (o && i.test(n))
        return o;
    }
    return e.jd;
  },
  has(n, e = !1) {
    return e ? n in this.j : !!this.go(n);
  },
  ta(n, e, t, r) {
    for (let i = 0; i < n.length; i++)
      this.tt(n[i], e, t, r);
  },
  tr(n, e, t, r) {
    r = r || Ue.groups;
    let i;
    return e && e.j ? i = e : (i = new Ue(e), t && r && $n(e, t, r)), this.jr.push([n, i]), i;
  },
  ts(n, e, t, r) {
    let i = this;
    const o = n.length;
    if (!o)
      return i;
    for (let s = 0; s < o - 1; s++)
      i = i.tt(n[s]);
    return i.tt(n[o - 1], e, t, r);
  },
  tt(n, e, t, r) {
    r = r || Ue.groups;
    const i = this;
    if (e && e.j)
      return i.j[n] = e, e;
    const o = e;
    let s, l = i.go(n);
    if (l ? (s = new Ue(), Nr(s.j, l.j), s.jr.push.apply(s.jr, l.jr), s.jd = l.jd, s.t = l.t) : s = new Ue(), o) {
      if (r)
        if (s.t && typeof s.t == "string") {
          const a = Nr(Yb(s.t, r), t);
          $n(o, a, r);
        } else
          t && $n(o, t, r);
      s.t = o;
    }
    return i.j[n] = s, s;
  }
};
const J = (n, e, t, r, i) => n.ta(e, t, r, i), ue = (n, e, t, r, i) => n.tr(e, t, r, i), $u = (n, e, t, r, i) => n.ts(e, t, r, i), O = (n, e, t, r, i) => n.tt(e, t, r, i), Vt = "WORD", ha = "UWORD", gh = "ASCIINUMERICAL", yh = "ALPHANUMERICAL", Mi = "LOCALHOST", pa = "TLD", ma = "UTLD", To = "SCHEME", pr = "SLASH_SCHEME", nc = "NUM", ga = "WS", rc = "NL", fi = "OPENBRACE", di = "CLOSEBRACE", Xo = "OPENBRACKET", Qo = "CLOSEBRACKET", Zo = "OPENPAREN", es = "CLOSEPAREN", ts = "OPENANGLEBRACKET", ns = "CLOSEANGLEBRACKET", rs = "FULLWIDTHLEFTPAREN", is = "FULLWIDTHRIGHTPAREN", ss = "LEFTCORNERBRACKET", ls = "RIGHTCORNERBRACKET", as = "LEFTWHITECORNERBRACKET", cs = "RIGHTWHITECORNERBRACKET", us = "FULLWIDTHLESSTHAN", fs = "FULLWIDTHGREATERTHAN", ds = "AMPERSAND", hs = "APOSTROPHE", ps = "ASTERISK", cn = "AT", ms = "BACKSLASH", gs = "BACKTICK", ys = "CARET", hn = "COLON", ic = "COMMA", vs = "DOLLAR", Et = "DOT", bs = "EQUALS", oc = "EXCLAMATION", st = "HYPHEN", hi = "PERCENT", ws = "PIPE", ks = "PLUS", xs = "POUND", pi = "QUERY", sc = "QUOTE", vh = "FULLWIDTHMIDDLEDOT", lc = "SEMI", Ct = "SLASH", mi = "TILDE", Ss = "UNDERSCORE", bh = "EMOJI", Es = "SYM";
var wh = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ALPHANUMERICAL: yh,
  AMPERSAND: ds,
  APOSTROPHE: hs,
  ASCIINUMERICAL: gh,
  ASTERISK: ps,
  AT: cn,
  BACKSLASH: ms,
  BACKTICK: gs,
  CARET: ys,
  CLOSEANGLEBRACKET: ns,
  CLOSEBRACE: di,
  CLOSEBRACKET: Qo,
  CLOSEPAREN: es,
  COLON: hn,
  COMMA: ic,
  DOLLAR: vs,
  DOT: Et,
  EMOJI: bh,
  EQUALS: bs,
  EXCLAMATION: oc,
  FULLWIDTHGREATERTHAN: fs,
  FULLWIDTHLEFTPAREN: rs,
  FULLWIDTHLESSTHAN: us,
  FULLWIDTHMIDDLEDOT: vh,
  FULLWIDTHRIGHTPAREN: is,
  HYPHEN: st,
  LEFTCORNERBRACKET: ss,
  LEFTWHITECORNERBRACKET: as,
  LOCALHOST: Mi,
  NL: rc,
  NUM: nc,
  OPENANGLEBRACKET: ts,
  OPENBRACE: fi,
  OPENBRACKET: Xo,
  OPENPAREN: Zo,
  PERCENT: hi,
  PIPE: ws,
  PLUS: ks,
  POUND: xs,
  QUERY: pi,
  QUOTE: sc,
  RIGHTCORNERBRACKET: ls,
  RIGHTWHITECORNERBRACKET: cs,
  SCHEME: To,
  SEMI: lc,
  SLASH: Ct,
  SLASH_SCHEME: pr,
  SYM: Es,
  TILDE: mi,
  TLD: pa,
  UNDERSCORE: Ss,
  UTLD: ma,
  UWORD: ha,
  WORD: Vt,
  WS: ga
});
const zt = /[a-z]/, Kr = /\p{L}/u, Ml = /\p{Emoji}/u, Ht = /\d/, Al = /\s/, zu = "\r", Dl = `
`, Xb = "\uFE0F", Qb = "\u200D", Nl = "\uFFFC";
let uo = null, fo = null;
function Zb(n = []) {
  const e = {};
  Ue.groups = e;
  const t = new Ue();
  uo == null && (uo = Hu(Ub)), fo == null && (fo = Hu(Kb)), O(t, "'", hs), O(t, "{", fi), O(t, "}", di), O(t, "[", Xo), O(t, "]", Qo), O(t, "(", Zo), O(t, ")", es), O(t, "<", ts), O(t, ">", ns), O(t, "\uFF08", rs), O(t, "\uFF09", is), O(t, "\u300C", ss), O(t, "\u300D", ls), O(t, "\u300E", as), O(t, "\u300F", cs), O(t, "\uFF1C", us), O(t, "\uFF1E", fs), O(t, "&", ds), O(t, "*", ps), O(t, "@", cn), O(t, "`", gs), O(t, "^", ys), O(t, ":", hn), O(t, ",", ic), O(t, "$", vs), O(t, ".", Et), O(t, "=", bs), O(t, "!", oc), O(t, "-", st), O(t, "%", hi), O(t, "|", ws), O(t, "+", ks), O(t, "#", xs), O(t, "?", pi), O(t, '"', sc), O(t, "/", Ct), O(t, ";", lc), O(t, "~", mi), O(t, "_", Ss), O(t, "\\", ms), O(t, "\u30FB", vh);
  const r = ue(t, Ht, nc, {
    [ca]: !0
  });
  ue(r, Ht, r);
  const i = ue(r, zt, gh, {
    [ui]: !0
  }), o = ue(r, Kr, yh, {
    [ei]: !0
  }), s = ue(t, zt, Vt, {
    [ua]: !0
  });
  ue(s, Ht, i), ue(s, zt, s), ue(i, Ht, i), ue(i, zt, i);
  const l = ue(t, Kr, ha, {
    [fa]: !0
  });
  ue(l, zt), ue(l, Ht, o), ue(l, Kr, l), ue(o, Ht, o), ue(o, zt), ue(o, Kr, o);
  const a = O(t, Dl, rc, {
    [Ol]: !0
  }), c = O(t, zu, ga, {
    [Ol]: !0
  }), u = ue(t, Al, ga, {
    [Ol]: !0
  });
  O(t, Nl, u), O(c, Dl, a), O(c, Nl, u), ue(c, Al, u), O(u, zu), O(u, Dl), ue(u, Al, u), O(u, Nl, u);
  const f = ue(t, Ml, bh, {
    [mh]: !0
  });
  O(f, "#"), ue(f, Ml, f), O(f, Xb, f);
  const d = O(f, Qb);
  O(d, "#"), ue(d, Ml, f);
  const h = [[zt, s], [Ht, i]], p = [[zt, null], [Kr, l], [Ht, o]];
  for (let m = 0; m < uo.length; m++)
    rn(t, uo[m], pa, Vt, h);
  for (let m = 0; m < fo.length; m++)
    rn(t, fo[m], ma, ha, p);
  $n(pa, {
    tld: !0,
    ascii: !0
  }, e), $n(ma, {
    utld: !0,
    alpha: !0
  }, e), rn(t, "file", To, Vt, h), rn(t, "mailto", To, Vt, h), rn(t, "http", pr, Vt, h), rn(t, "https", pr, Vt, h), rn(t, "ftp", pr, Vt, h), rn(t, "ftps", pr, Vt, h), $n(To, {
    scheme: !0,
    ascii: !0
  }, e), $n(pr, {
    slashscheme: !0,
    ascii: !0
  }, e), n = n.sort((m, g) => m[0] > g[0] ? 1 : -1);
  for (let m = 0; m < n.length; m++) {
    const g = n[m][0], w = n[m][1] ? {
      [qb]: !0
    } : {
      [Jb]: !0
    };
    g.indexOf("-") >= 0 ? w[da] = !0 : zt.test(g) ? Ht.test(g) ? w[ui] = !0 : w[ua] = !0 : w[ca] = !0, $u(t, g, g, w);
  }
  return $u(t, "localhost", Mi, {
    ascii: !0
  }), t.jd = new Ue(Es), {
    start: t,
    tokens: Nr({
      groups: e
    }, wh)
  };
}
function kh(n, e) {
  const t = e1(e.replace(/[A-Z]/g, (l) => l.toLowerCase())), r = t.length, i = [];
  let o = 0, s = 0;
  for (; s < r; ) {
    let l = n, a = null, c = 0, u = null, f = -1, d = -1;
    for (; s < r && (a = l.go(t[s])); )
      l = a, l.accepts() ? (f = 0, d = 0, u = l) : f >= 0 && (f += t[s].length, d++), c += t[s].length, o += t[s].length, s++;
    o -= f, s -= d, c -= f, i.push({
      t: u.t,
      v: e.slice(o - c, o),
      s: o - c,
      e: o
    });
  }
  return i;
}
function e1(n) {
  const e = [], t = n.length;
  let r = 0;
  for (; r < t; ) {
    let i = n.charCodeAt(r), o, s = i < 55296 || i > 56319 || r + 1 === t || (o = n.charCodeAt(r + 1)) < 56320 || o > 57343 ? n[r] : n.slice(r, r + 2);
    e.push(s), r += s.length;
  }
  return e;
}
function rn(n, e, t, r, i) {
  let o;
  const s = e.length;
  for (let l = 0; l < s - 1; l++) {
    const a = e[l];
    n.j[a] ? o = n.j[a] : (o = new Ue(r), o.jr = i.slice(), n.j[a] = o), n = o;
  }
  return o = new Ue(t), o.jr = i.slice(), n.j[e[s - 1]] = o, o;
}
function Hu(n) {
  const e = [], t = [];
  let r = 0, i = "0123456789";
  for (; r < n.length; ) {
    let o = 0;
    for (; i.indexOf(n[r + o]) >= 0; )
      o++;
    if (o > 0) {
      e.push(t.join(""));
      for (let s = parseInt(n.substring(r, r + o), 10); s > 0; s--)
        t.pop();
      r += o;
    } else
      t.push(n[r]), r++;
  }
  return e;
}
const Ai = {
  defaultProtocol: "http",
  events: null,
  format: Vu,
  formatHref: Vu,
  nl2br: !1,
  tagName: "a",
  target: null,
  rel: null,
  validate: !0,
  truncate: 1 / 0,
  className: null,
  attributes: null,
  ignoreTags: [],
  render: null
};
function ac(n, e = null) {
  let t = Nr({}, Ai);
  n && (t = Nr(t, n instanceof ac ? n.o : n));
  const r = t.ignoreTags, i = [];
  for (let o = 0; o < r.length; o++)
    i.push(r[o].toUpperCase());
  this.o = t, e && (this.defaultRender = e), this.ignoreTags = i;
}
ac.prototype = {
  o: Ai,
  ignoreTags: [],
  defaultRender(n) {
    return n;
  },
  check(n) {
    return this.get("validate", n.toString(), n);
  },
  get(n, e, t) {
    const r = e != null;
    let i = this.o[n];
    return i && (typeof i == "object" ? (i = t.t in i ? i[t.t] : Ai[n], typeof i == "function" && r && (i = i(e, t))) : typeof i == "function" && r && (i = i(e, t.t, t)), i);
  },
  getObj(n, e, t) {
    let r = this.o[n];
    return typeof r == "function" && e != null && (r = r(e, t.t, t)), r;
  },
  render(n) {
    const e = n.render(this);
    return (this.get("render", null, n) || this.defaultRender)(e, n.t, n);
  }
};
function Vu(n) {
  return n;
}
function xh(n, e) {
  this.t = "token", this.v = n, this.tk = e;
}
xh.prototype = {
  isLink: !1,
  toString() {
    return this.v;
  },
  toHref(n) {
    return this.toString();
  },
  toFormattedString(n) {
    const e = this.toString(), t = n.get("truncate", e, this), r = n.get("format", e, this);
    return t && r.length > t ? r.substring(0, t) + "\u2026" : r;
  },
  toFormattedHref(n) {
    return n.get("formatHref", this.toHref(n.get("defaultProtocol")), this);
  },
  startIndex() {
    return this.tk[0].s;
  },
  endIndex() {
    return this.tk[this.tk.length - 1].e;
  },
  toObject(n = Ai.defaultProtocol) {
    return {
      type: this.t,
      value: this.toString(),
      isLink: this.isLink,
      href: this.toHref(n),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  toFormattedObject(n) {
    return {
      type: this.t,
      value: this.toFormattedString(n),
      isLink: this.isLink,
      href: this.toFormattedHref(n),
      start: this.startIndex(),
      end: this.endIndex()
    };
  },
  validate(n) {
    return n.get("validate", this.toString(), this);
  },
  render(n) {
    const e = this, t = this.toHref(n.get("defaultProtocol")), r = n.get("formatHref", t, this), i = n.get("tagName", t, e), o = this.toFormattedString(n), s = {}, l = n.get("className", t, e), a = n.get("target", t, e), c = n.get("rel", t, e), u = n.getObj("attributes", t, e), f = n.getObj("events", t, e);
    return s.href = r, l && (s.class = l), a && (s.target = a), c && (s.rel = c), u && Nr(s, u), {
      tagName: i,
      attributes: s,
      content: o,
      eventListeners: f
    };
  }
};
function Us(n, e) {
  class t extends xh {
    constructor(i, o) {
      super(i, o), this.t = n;
    }
  }
  for (const r in e)
    t.prototype[r] = e[r];
  return t.t = n, t;
}
const ju = Us("email", {
  isLink: !0,
  toHref() {
    return "mailto:" + this.toString();
  }
}), Wu = Us("text"), t1 = Us("nl"), ho = Us("url", {
  isLink: !0,
  toHref(n = Ai.defaultProtocol) {
    return this.hasProtocol() ? this.v : `${n}://${this.v}`;
  },
  hasProtocol() {
    const n = this.tk;
    return n.length >= 2 && n[0].t !== Mi && n[1].t === hn;
  }
}), ot = (n) => new Ue(n);
function n1({
  groups: n
}) {
  const e = n.domain.concat([ds, ps, cn, ms, gs, ys, vs, bs, st, nc, hi, ws, ks, xs, Ct, Es, mi, Ss]), t = [hs, hn, ic, Et, oc, hi, pi, sc, lc, ts, ns, fi, di, Qo, Xo, Zo, es, rs, is, ss, ls, as, cs, us, fs], r = [ds, hs, ps, ms, gs, ys, vs, bs, st, fi, di, hi, ws, ks, xs, pi, Ct, Es, mi, Ss], i = ot(), o = O(i, mi);
  J(o, r, o), J(o, n.domain, o);
  const s = ot(), l = ot(), a = ot();
  J(i, n.domain, s), J(i, n.scheme, l), J(i, n.slashscheme, a), J(s, r, o), J(s, n.domain, s);
  const c = O(s, cn);
  O(o, cn, c), O(l, cn, c), O(a, cn, c);
  const u = O(o, Et);
  J(u, r, o), J(u, n.domain, o);
  const f = ot();
  J(c, n.domain, f), J(f, n.domain, f);
  const d = O(f, Et);
  J(d, n.domain, f);
  const h = ot(ju);
  J(d, n.tld, h), J(d, n.utld, h), O(c, Mi, h);
  const p = O(f, st);
  O(p, st, p), J(p, n.domain, f), J(h, n.domain, f), O(h, Et, d), O(h, st, p);
  const m = O(h, hn);
  J(m, n.numeric, ju);
  const g = O(s, st), v = O(s, Et);
  O(g, st, g), J(g, n.domain, s), J(v, r, o), J(v, n.domain, s);
  const w = ot(ho);
  J(v, n.tld, w), J(v, n.utld, w), J(w, n.domain, s), J(w, r, o), O(w, Et, v), O(w, st, g), O(w, cn, c);
  const E = O(w, hn), y = ot(ho);
  J(E, n.numeric, y);
  const T = ot(ho), b = ot();
  J(T, e, T), J(T, t, b), J(b, e, T), J(b, t, b), O(w, Ct, T), O(y, Ct, T);
  const D = O(l, hn), B = O(a, hn), A = O(B, Ct), $ = O(A, Ct);
  J(l, n.domain, s), O(l, Et, v), O(l, st, g), J(a, n.domain, s), O(a, Et, v), O(a, st, g), J(D, n.domain, T), O(D, Ct, T), O(D, pi, T), J($, n.domain, T), J($, e, T), O($, Ct, T);
  const K = [
    [fi, di],
    [Xo, Qo],
    [Zo, es],
    [ts, ns],
    [rs, is],
    [ss, ls],
    [as, cs],
    [us, fs]
  ];
  for (let U = 0; U < K.length; U++) {
    const [G, Y] = K[U], re = O(T, G);
    O(b, G, re), O(re, Y, T);
    const k = ot(ho);
    J(re, e, k);
    const S = ot();
    J(re, t), J(k, e, k), J(k, t, S), J(S, e, k), J(S, t, S), O(k, Y, T), O(S, Y, T);
  }
  return O(i, Mi, w), O(i, rc, t1), {
    start: i,
    tokens: wh
  };
}
function r1(n, e, t) {
  let r = t.length, i = 0, o = [], s = [];
  for (; i < r; ) {
    let l = n, a = null, c = null, u = 0, f = null, d = -1;
    for (; i < r && !(a = l.go(t[i].t)); )
      s.push(t[i++]);
    for (; i < r && (c = a || l.go(t[i].t)); )
      a = null, l = c, l.accepts() ? (d = 0, f = l) : d >= 0 && d++, i++, u++;
    if (d < 0)
      i -= u, i < r && (s.push(t[i]), i++);
    else {
      s.length > 0 && (o.push(Il(Wu, e, s)), s = []), i -= d, u -= d;
      const h = f.t, p = t.slice(i - u, i);
      o.push(Il(h, e, p));
    }
  }
  return s.length > 0 && o.push(Il(Wu, e, s)), o;
}
function Il(n, e, t) {
  const r = t[0].s, i = t[t.length - 1].e, o = e.slice(r, i);
  return new n(o, t);
}
const i1 = typeof console < "u" && console && console.warn || (() => {
}), o1 = "until manual call of linkify.init(). Register all schemes and plugins before invoking linkify the first time.", ae = {
  scanner: null,
  parser: null,
  tokenQueue: [],
  pluginQueue: [],
  customSchemes: [],
  initialized: !1
};
function s1() {
  return Ue.groups = {}, ae.scanner = null, ae.parser = null, ae.tokenQueue = [], ae.pluginQueue = [], ae.customSchemes = [], ae.initialized = !1, ae;
}
function Uu(n, e = !1) {
  if (ae.initialized && i1(`linkifyjs: already initialized - will not register custom scheme "${n}" ${o1}`), !/^[0-9a-z]+(-[0-9a-z]+)*$/.test(n))
    throw new Error(`linkifyjs: incorrect scheme format.
1. Must only contain digits, lowercase ASCII letters or "-"
2. Cannot start or end with "-"
3. "-" cannot repeat`);
  ae.customSchemes.push([n, e]);
}
function l1() {
  ae.scanner = Zb(ae.customSchemes);
  for (let n = 0; n < ae.tokenQueue.length; n++)
    ae.tokenQueue[n][1]({
      scanner: ae.scanner
    });
  ae.parser = n1(ae.scanner.tokens);
  for (let n = 0; n < ae.pluginQueue.length; n++)
    ae.pluginQueue[n][1]({
      scanner: ae.scanner,
      parser: ae.parser
    });
  return ae.initialized = !0, ae;
}
function cc(n) {
  return ae.initialized || l1(), r1(ae.parser.start, n, kh(ae.scanner.start, n));
}
cc.scan = kh;
function Sh(n, e = null, t = null) {
  if (e && typeof e == "object") {
    if (t)
      throw Error(`linkifyjs: Invalid link type ${e}; must be a string`);
    t = e, e = null;
  }
  const r = new ac(t), i = cc(n), o = [];
  for (let s = 0; s < i.length; s++) {
    const l = i[s];
    l.isLink && (!e || l.t === e) && r.check(l) && o.push(l.toFormattedObject(r));
  }
  return o;
}
function a1(n) {
  return n.length === 1 ? n[0].isLink : n.length === 3 && n[1].isLink ? ["()", "[]"].includes(n[0].value + n[2].value) : !1;
}
function c1(n) {
  return new Ae({
    key: new He("autolink"),
    appendTransaction: (e, t, r) => {
      const i = e.some((c) => c.docChanged) && !t.doc.eq(r.doc), o = e.some((c) => c.getMeta("preventAutolink"));
      if (!i || o)
        return;
      const { tr: s } = r, l = Pv(t.doc, [...e]);
      if (Hv(l).forEach(({ newRange: c }) => {
        const u = Bv(r.doc, c, (h) => h.isTextblock);
        let f, d;
        if (u.length > 1 ? (f = u[0], d = r.doc.textBetween(f.pos, f.pos + f.node.nodeSize, void 0, " ")) : u.length && r.doc.textBetween(c.from, c.to, " ", " ").endsWith(" ") && (f = u[0], d = r.doc.textBetween(f.pos, c.to, void 0, " ")), f && d) {
          const h = d.split(" ").filter((v) => v !== "");
          if (h.length <= 0)
            return !1;
          const p = h[h.length - 1], m = f.pos + d.lastIndexOf(p);
          if (!p)
            return !1;
          const g = cc(p).map((v) => v.toObject(n.defaultProtocol));
          if (!a1(g))
            return !1;
          g.filter((v) => v.isLink).map((v) => ({
            ...v,
            from: m + v.start + 1,
            to: m + v.end + 1
          })).filter((v) => r.schema.marks.code ? !r.doc.rangeHasMark(v.from, v.to, r.schema.marks.code) : !0).filter((v) => n.validate(v.value)).filter((v) => n.shouldAutoLink(v.value)).forEach((v) => {
            tc(v.from, v.to, r.doc).some((w) => w.mark.type === n.type) || s.addMark(v.from, v.to, n.type.create({
              href: v.href
            }));
          });
        }
      }), !!s.steps.length)
        return s;
    }
  });
}
function u1(n) {
  return new Ae({
    key: new He("handleClickLink"),
    props: {
      handleClick: (e, t, r) => {
        var i, o;
        if (r.button !== 0 || !e.editable)
          return !1;
        let s = r.target;
        const l = [];
        for (; s.nodeName !== "DIV"; )
          l.push(s), s = s.parentNode;
        if (!l.find((d) => d.nodeName === "A"))
          return !1;
        const a = ch(e.state, n.type.name), c = r.target, u = (i = c == null ? void 0 : c.href) !== null && i !== void 0 ? i : a.href, f = (o = c == null ? void 0 : c.target) !== null && o !== void 0 ? o : a.target;
        return c && u ? (window.open(u, f), !0) : !1;
      }
    }
  });
}
function f1(n) {
  return new Ae({
    key: new He("handlePasteLink"),
    props: {
      handlePaste: (e, t, r) => {
        const { state: i } = e, { selection: o } = i, { empty: s } = o;
        if (s)
          return !1;
        let l = "";
        r.content.forEach((c) => {
          l += c.textContent;
        });
        const a = Sh(l, { defaultProtocol: n.defaultProtocol }).find((c) => c.isLink && c.value === l);
        return !l || !a ? !1 : n.editor.commands.setMark(n.type, {
          href: a.href
        });
      }
    }
  });
}
const d1 = /[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g;
function Nn(n, e) {
  const t = [
    "http",
    "https",
    "ftp",
    "ftps",
    "mailto",
    "tel",
    "callto",
    "sms",
    "cid",
    "xmpp"
  ];
  return e && e.forEach((r) => {
    const i = typeof r == "string" ? r : r.scheme;
    i && t.push(i);
  }), !n || n.replace(d1, "").match(new RegExp(
    `^(?:(?:${t.join("|")}):|[^a-z]|[a-z0-9+.-]+(?:[^a-z+.-:]|$))`,
    "i"
  ));
}
const h1 = Xn.create({
  name: "link",
  priority: 1e3,
  keepOnSplit: !1,
  exitable: !0,
  onCreate() {
    this.options.validate && !this.options.shouldAutoLink && (this.options.shouldAutoLink = this.options.validate, console.warn("The `validate` option is deprecated. Rename to the `shouldAutoLink` option instead.")), this.options.protocols.forEach((n) => {
      if (typeof n == "string") {
        Uu(n);
        return;
      }
      Uu(n.scheme, n.optionalSlashes);
    });
  },
  onDestroy() {
    s1();
  },
  inclusive() {
    return this.options.autolink;
  },
  addOptions() {
    return {
      openOnClick: !0,
      linkOnPaste: !0,
      autolink: !0,
      protocols: [],
      defaultProtocol: "http",
      HTMLAttributes: {
        target: "_blank",
        rel: "noopener noreferrer nofollow",
        class: null
      },
      isAllowedUri: (n, e) => !!Nn(n, e.protocols),
      validate: (n) => !!n,
      shouldAutoLink: (n) => !!n
    };
  },
  addAttributes() {
    return {
      href: {
        default: null,
        parseHTML(n) {
          return n.getAttribute("href");
        }
      },
      target: {
        default: this.options.HTMLAttributes.target
      },
      rel: {
        default: this.options.HTMLAttributes.rel
      },
      class: {
        default: this.options.HTMLAttributes.class
      }
    };
  },
  parseHTML() {
    return [
      {
        tag: "a[href]",
        getAttrs: (n) => {
          const e = n.getAttribute("href");
          return !e || !this.options.isAllowedUri(e, {
            defaultValidate: (t) => !!Nn(t, this.options.protocols),
            protocols: this.options.protocols,
            defaultProtocol: this.options.defaultProtocol
          }) ? !1 : null;
        }
      }
    ];
  },
  renderHTML({ HTMLAttributes: n }) {
    return this.options.isAllowedUri(n.href, {
      defaultValidate: (e) => !!Nn(e, this.options.protocols),
      protocols: this.options.protocols,
      defaultProtocol: this.options.defaultProtocol
    }) ? ["a", Ar(this.options.HTMLAttributes, n), 0] : [
      "a",
      Ar(this.options.HTMLAttributes, { ...n, href: "" }),
      0
    ];
  },
  addCommands() {
    return {
      setLink: (n) => ({ chain: e }) => {
        const { href: t } = n;
        return this.options.isAllowedUri(t, {
          defaultValidate: (r) => !!Nn(r, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        }) ? e().setMark(this.name, n).setMeta("preventAutolink", !0).run() : !1;
      },
      toggleLink: (n) => ({ chain: e }) => {
        const { href: t } = n;
        return this.options.isAllowedUri(t, {
          defaultValidate: (r) => !!Nn(r, this.options.protocols),
          protocols: this.options.protocols,
          defaultProtocol: this.options.defaultProtocol
        }) ? e().toggleMark(this.name, n, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run() : !1;
      },
      unsetLink: () => ({ chain: n }) => n().unsetMark(this.name, { extendEmptyMarkRange: !0 }).setMeta("preventAutolink", !0).run()
    };
  },
  addPasteRules() {
    return [
      Oi({
        find: (n) => {
          const e = [];
          if (n) {
            const { protocols: t, defaultProtocol: r } = this.options, i = Sh(n).filter((o) => o.isLink && this.options.isAllowedUri(o.value, {
              defaultValidate: (s) => !!Nn(s, t),
              protocols: t,
              defaultProtocol: r
            }));
            i.length && i.forEach((o) => e.push({
              text: o.value,
              data: {
                href: o.href
              },
              index: o.start
            }));
          }
          return e;
        },
        type: this.type,
        getAttributes: (n) => {
          var e;
          return {
            href: (e = n.data) === null || e === void 0 ? void 0 : e.href
          };
        }
      })
    ];
  },
  addProseMirrorPlugins() {
    const n = [], { protocols: e, defaultProtocol: t } = this.options;
    return this.options.autolink && n.push(c1({
      type: this.type,
      defaultProtocol: this.options.defaultProtocol,
      validate: (r) => this.options.isAllowedUri(r, {
        defaultValidate: (i) => !!Nn(i, e),
        protocols: e,
        defaultProtocol: t
      }),
      shouldAutoLink: this.options.shouldAutoLink
    })), this.options.openOnClick === !0 && n.push(u1({
      type: this.type
    })), this.options.linkOnPaste && n.push(f1({
      editor: this.editor,
      defaultProtocol: this.options.defaultProtocol,
      type: this.type
    })), n;
  }
});
var Ge = "top", pt = "bottom", mt = "right", Ye = "left", uc = "auto", $i = [Ge, pt, mt, Ye], Ir = "start", Di = "end", p1 = "clippingParents", Eh = "viewport", qr = "popper", m1 = "reference", Ku = /* @__PURE__ */ $i.reduce(function(n, e) {
  return n.concat([e + "-" + Ir, e + "-" + Di]);
}, []), Ch = /* @__PURE__ */ [].concat($i, [uc]).reduce(function(n, e) {
  return n.concat([e, e + "-" + Ir, e + "-" + Di]);
}, []), g1 = "beforeRead", y1 = "read", v1 = "afterRead", b1 = "beforeMain", w1 = "main", k1 = "afterMain", x1 = "beforeWrite", S1 = "write", E1 = "afterWrite", C1 = [g1, y1, v1, b1, w1, k1, x1, S1, E1];
function Lt(n) {
  return n ? (n.nodeName || "").toLowerCase() : null;
}
function rt(n) {
  if (n == null)
    return window;
  if (n.toString() !== "[object Window]") {
    var e = n.ownerDocument;
    return e && e.defaultView || window;
  }
  return n;
}
function Qn(n) {
  var e = rt(n).Element;
  return n instanceof e || n instanceof Element;
}
function ht(n) {
  var e = rt(n).HTMLElement;
  return n instanceof e || n instanceof HTMLElement;
}
function fc(n) {
  if (typeof ShadowRoot > "u")
    return !1;
  var e = rt(n).ShadowRoot;
  return n instanceof e || n instanceof ShadowRoot;
}
function T1(n) {
  var e = n.state;
  Object.keys(e.elements).forEach(function(t) {
    var r = e.styles[t] || {}, i = e.attributes[t] || {}, o = e.elements[t];
    !ht(o) || !Lt(o) || (Object.assign(o.style, r), Object.keys(i).forEach(function(s) {
      var l = i[s];
      l === !1 ? o.removeAttribute(s) : o.setAttribute(s, l === !0 ? "" : l);
    }));
  });
}
function O1(n) {
  var e = n.state, t = {
    popper: {
      position: e.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(e.elements.popper.style, t.popper), e.styles = t, e.elements.arrow && Object.assign(e.elements.arrow.style, t.arrow), function() {
    Object.keys(e.elements).forEach(function(r) {
      var i = e.elements[r], o = e.attributes[r] || {}, s = Object.keys(e.styles.hasOwnProperty(r) ? e.styles[r] : t[r]), l = s.reduce(function(a, c) {
        return a[c] = "", a;
      }, {});
      !ht(i) || !Lt(i) || (Object.assign(i.style, l), Object.keys(o).forEach(function(a) {
        i.removeAttribute(a);
      }));
    });
  };
}
const Th = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: T1,
  effect: O1,
  requires: ["computeStyles"]
};
function Nt(n) {
  return n.split("-")[0];
}
var Un = Math.max, Cs = Math.min, Rr = Math.round;
function ya() {
  var n = navigator.userAgentData;
  return n != null && n.brands && Array.isArray(n.brands) ? n.brands.map(function(e) {
    return e.brand + "/" + e.version;
  }).join(" ") : navigator.userAgent;
}
function Oh() {
  return !/^((?!chrome|android).)*safari/i.test(ya());
}
function Pr(n, e, t) {
  e === void 0 && (e = !1), t === void 0 && (t = !1);
  var r = n.getBoundingClientRect(), i = 1, o = 1;
  e && ht(n) && (i = n.offsetWidth > 0 && Rr(r.width) / n.offsetWidth || 1, o = n.offsetHeight > 0 && Rr(r.height) / n.offsetHeight || 1);
  var s = Qn(n) ? rt(n) : window, l = s.visualViewport, a = !Oh() && t, c = (r.left + (a && l ? l.offsetLeft : 0)) / i, u = (r.top + (a && l ? l.offsetTop : 0)) / o, f = r.width / i, d = r.height / o;
  return {
    width: f,
    height: d,
    top: u,
    right: c + f,
    bottom: u + d,
    left: c,
    x: c,
    y: u
  };
}
function dc(n) {
  var e = Pr(n), t = n.offsetWidth, r = n.offsetHeight;
  return Math.abs(e.width - t) <= 1 && (t = e.width), Math.abs(e.height - r) <= 1 && (r = e.height), {
    x: n.offsetLeft,
    y: n.offsetTop,
    width: t,
    height: r
  };
}
function Mh(n, e) {
  var t = e.getRootNode && e.getRootNode();
  if (n.contains(e))
    return !0;
  if (t && fc(t)) {
    var r = e;
    do {
      if (r && n.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Xt(n) {
  return rt(n).getComputedStyle(n);
}
function M1(n) {
  return ["table", "td", "th"].indexOf(Lt(n)) >= 0;
}
function Cn(n) {
  return ((Qn(n) ? n.ownerDocument : n.document) || window.document).documentElement;
}
function Ks(n) {
  return Lt(n) === "html" ? n : n.assignedSlot || n.parentNode || (fc(n) ? n.host : null) || Cn(n);
}
function qu(n) {
  return !ht(n) || Xt(n).position === "fixed" ? null : n.offsetParent;
}
function A1(n) {
  var e = /firefox/i.test(ya()), t = /Trident/i.test(ya());
  if (t && ht(n)) {
    var r = Xt(n);
    if (r.position === "fixed")
      return null;
  }
  var i = Ks(n);
  for (fc(i) && (i = i.host); ht(i) && ["html", "body"].indexOf(Lt(i)) < 0; ) {
    var o = Xt(i);
    if (o.transform !== "none" || o.perspective !== "none" || o.contain === "paint" || ["transform", "perspective"].indexOf(o.willChange) !== -1 || e && o.willChange === "filter" || e && o.filter && o.filter !== "none")
      return i;
    i = i.parentNode;
  }
  return null;
}
function zi(n) {
  for (var e = rt(n), t = qu(n); t && M1(t) && Xt(t).position === "static"; )
    t = qu(t);
  return t && (Lt(t) === "html" || Lt(t) === "body" && Xt(t).position === "static") ? e : t || A1(n) || e;
}
function hc(n) {
  return ["top", "bottom"].indexOf(n) >= 0 ? "x" : "y";
}
function gi(n, e, t) {
  return Un(n, Cs(e, t));
}
function D1(n, e, t) {
  var r = gi(n, e, t);
  return r > t ? t : r;
}
function Ah() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Dh(n) {
  return Object.assign({}, Ah(), n);
}
function Nh(n, e) {
  return e.reduce(function(t, r) {
    return t[r] = n, t;
  }, {});
}
var N1 = function(e, t) {
  return e = typeof e == "function" ? e(Object.assign({}, t.rects, {
    placement: t.placement
  })) : e, Dh(typeof e != "number" ? e : Nh(e, $i));
};
function I1(n) {
  var e, t = n.state, r = n.name, i = n.options, o = t.elements.arrow, s = t.modifiersData.popperOffsets, l = Nt(t.placement), a = hc(l), c = [Ye, mt].indexOf(l) >= 0, u = c ? "height" : "width";
  if (!(!o || !s)) {
    var f = N1(i.padding, t), d = dc(o), h = a === "y" ? Ge : Ye, p = a === "y" ? pt : mt, m = t.rects.reference[u] + t.rects.reference[a] - s[a] - t.rects.popper[u], g = s[a] - t.rects.reference[a], v = zi(o), w = v ? a === "y" ? v.clientHeight || 0 : v.clientWidth || 0 : 0, E = m / 2 - g / 2, y = f[h], T = w - d[u] - f[p], b = w / 2 - d[u] / 2 + E, D = gi(y, b, T), B = a;
    t.modifiersData[r] = (e = {}, e[B] = D, e.centerOffset = D - b, e);
  }
}
function R1(n) {
  var e = n.state, t = n.options, r = t.element, i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null && (typeof i == "string" && (i = e.elements.popper.querySelector(i), !i) || !Mh(e.elements.popper, i) || (e.elements.arrow = i));
}
const P1 = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: I1,
  effect: R1,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function Lr(n) {
  return n.split("-")[1];
}
var L1 = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function B1(n, e) {
  var t = n.x, r = n.y, i = e.devicePixelRatio || 1;
  return {
    x: Rr(t * i) / i || 0,
    y: Rr(r * i) / i || 0
  };
}
function Ju(n) {
  var e, t = n.popper, r = n.popperRect, i = n.placement, o = n.variation, s = n.offsets, l = n.position, a = n.gpuAcceleration, c = n.adaptive, u = n.roundOffsets, f = n.isFixed, d = s.x, h = d === void 0 ? 0 : d, p = s.y, m = p === void 0 ? 0 : p, g = typeof u == "function" ? u({
    x: h,
    y: m
  }) : {
    x: h,
    y: m
  };
  h = g.x, m = g.y;
  var v = s.hasOwnProperty("x"), w = s.hasOwnProperty("y"), E = Ye, y = Ge, T = window;
  if (c) {
    var b = zi(t), D = "clientHeight", B = "clientWidth";
    if (b === rt(t) && (b = Cn(t), Xt(b).position !== "static" && l === "absolute" && (D = "scrollHeight", B = "scrollWidth")), b = b, i === Ge || (i === Ye || i === mt) && o === Di) {
      y = pt;
      var A = f && b === T && T.visualViewport ? T.visualViewport.height : b[D];
      m -= A - r.height, m *= a ? 1 : -1;
    }
    if (i === Ye || (i === Ge || i === pt) && o === Di) {
      E = mt;
      var $ = f && b === T && T.visualViewport ? T.visualViewport.width : b[B];
      h -= $ - r.width, h *= a ? 1 : -1;
    }
  }
  var K = Object.assign({
    position: l
  }, c && L1), U = u === !0 ? B1({
    x: h,
    y: m
  }, rt(t)) : {
    x: h,
    y: m
  };
  if (h = U.x, m = U.y, a) {
    var G;
    return Object.assign({}, K, (G = {}, G[y] = w ? "0" : "", G[E] = v ? "0" : "", G.transform = (T.devicePixelRatio || 1) <= 1 ? "translate(" + h + "px, " + m + "px)" : "translate3d(" + h + "px, " + m + "px, 0)", G));
  }
  return Object.assign({}, K, (e = {}, e[y] = w ? m + "px" : "", e[E] = v ? h + "px" : "", e.transform = "", e));
}
function _1(n) {
  var e = n.state, t = n.options, r = t.gpuAcceleration, i = r === void 0 ? !0 : r, o = t.adaptive, s = o === void 0 ? !0 : o, l = t.roundOffsets, a = l === void 0 ? !0 : l, c = {
    placement: Nt(e.placement),
    variation: Lr(e.placement),
    popper: e.elements.popper,
    popperRect: e.rects.popper,
    gpuAcceleration: i,
    isFixed: e.options.strategy === "fixed"
  };
  e.modifiersData.popperOffsets != null && (e.styles.popper = Object.assign({}, e.styles.popper, Ju(Object.assign({}, c, {
    offsets: e.modifiersData.popperOffsets,
    position: e.options.strategy,
    adaptive: s,
    roundOffsets: a
  })))), e.modifiersData.arrow != null && (e.styles.arrow = Object.assign({}, e.styles.arrow, Ju(Object.assign({}, c, {
    offsets: e.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: a
  })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-placement": e.placement
  });
}
const F1 = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: _1,
  data: {}
};
var po = {
  passive: !0
};
function $1(n) {
  var e = n.state, t = n.instance, r = n.options, i = r.scroll, o = i === void 0 ? !0 : i, s = r.resize, l = s === void 0 ? !0 : s, a = rt(e.elements.popper), c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
  return o && c.forEach(function(u) {
    u.addEventListener("scroll", t.update, po);
  }), l && a.addEventListener("resize", t.update, po), function() {
    o && c.forEach(function(u) {
      u.removeEventListener("scroll", t.update, po);
    }), l && a.removeEventListener("resize", t.update, po);
  };
}
const z1 = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: $1,
  data: {}
};
var H1 = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Oo(n) {
  return n.replace(/left|right|bottom|top/g, function(e) {
    return H1[e];
  });
}
var V1 = {
  start: "end",
  end: "start"
};
function Gu(n) {
  return n.replace(/start|end/g, function(e) {
    return V1[e];
  });
}
function pc(n) {
  var e = rt(n), t = e.pageXOffset, r = e.pageYOffset;
  return {
    scrollLeft: t,
    scrollTop: r
  };
}
function mc(n) {
  return Pr(Cn(n)).left + pc(n).scrollLeft;
}
function j1(n, e) {
  var t = rt(n), r = Cn(n), i = t.visualViewport, o = r.clientWidth, s = r.clientHeight, l = 0, a = 0;
  if (i) {
    o = i.width, s = i.height;
    var c = Oh();
    (c || !c && e === "fixed") && (l = i.offsetLeft, a = i.offsetTop);
  }
  return {
    width: o,
    height: s,
    x: l + mc(n),
    y: a
  };
}
function W1(n) {
  var e, t = Cn(n), r = pc(n), i = (e = n.ownerDocument) == null ? void 0 : e.body, o = Un(t.scrollWidth, t.clientWidth, i ? i.scrollWidth : 0, i ? i.clientWidth : 0), s = Un(t.scrollHeight, t.clientHeight, i ? i.scrollHeight : 0, i ? i.clientHeight : 0), l = -r.scrollLeft + mc(n), a = -r.scrollTop;
  return Xt(i || t).direction === "rtl" && (l += Un(t.clientWidth, i ? i.clientWidth : 0) - o), {
    width: o,
    height: s,
    x: l,
    y: a
  };
}
function gc(n) {
  var e = Xt(n), t = e.overflow, r = e.overflowX, i = e.overflowY;
  return /auto|scroll|overlay|hidden/.test(t + i + r);
}
function Ih(n) {
  return ["html", "body", "#document"].indexOf(Lt(n)) >= 0 ? n.ownerDocument.body : ht(n) && gc(n) ? n : Ih(Ks(n));
}
function yi(n, e) {
  var t;
  e === void 0 && (e = []);
  var r = Ih(n), i = r === ((t = n.ownerDocument) == null ? void 0 : t.body), o = rt(r), s = i ? [o].concat(o.visualViewport || [], gc(r) ? r : []) : r, l = e.concat(s);
  return i ? l : l.concat(yi(Ks(s)));
}
function va(n) {
  return Object.assign({}, n, {
    left: n.x,
    top: n.y,
    right: n.x + n.width,
    bottom: n.y + n.height
  });
}
function U1(n, e) {
  var t = Pr(n, !1, e === "fixed");
  return t.top = t.top + n.clientTop, t.left = t.left + n.clientLeft, t.bottom = t.top + n.clientHeight, t.right = t.left + n.clientWidth, t.width = n.clientWidth, t.height = n.clientHeight, t.x = t.left, t.y = t.top, t;
}
function Yu(n, e, t) {
  return e === Eh ? va(j1(n, t)) : Qn(e) ? U1(e, t) : va(W1(Cn(n)));
}
function K1(n) {
  var e = yi(Ks(n)), t = ["absolute", "fixed"].indexOf(Xt(n).position) >= 0, r = t && ht(n) ? zi(n) : n;
  return Qn(r) ? e.filter(function(i) {
    return Qn(i) && Mh(i, r) && Lt(i) !== "body";
  }) : [];
}
function q1(n, e, t, r) {
  var i = e === "clippingParents" ? K1(n) : [].concat(e), o = [].concat(i, [t]), s = o[0], l = o.reduce(function(a, c) {
    var u = Yu(n, c, r);
    return a.top = Un(u.top, a.top), a.right = Cs(u.right, a.right), a.bottom = Cs(u.bottom, a.bottom), a.left = Un(u.left, a.left), a;
  }, Yu(n, s, r));
  return l.width = l.right - l.left, l.height = l.bottom - l.top, l.x = l.left, l.y = l.top, l;
}
function Rh(n) {
  var e = n.reference, t = n.element, r = n.placement, i = r ? Nt(r) : null, o = r ? Lr(r) : null, s = e.x + e.width / 2 - t.width / 2, l = e.y + e.height / 2 - t.height / 2, a;
  switch (i) {
    case Ge:
      a = {
        x: s,
        y: e.y - t.height
      };
      break;
    case pt:
      a = {
        x: s,
        y: e.y + e.height
      };
      break;
    case mt:
      a = {
        x: e.x + e.width,
        y: l
      };
      break;
    case Ye:
      a = {
        x: e.x - t.width,
        y: l
      };
      break;
    default:
      a = {
        x: e.x,
        y: e.y
      };
  }
  var c = i ? hc(i) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (o) {
      case Ir:
        a[c] = a[c] - (e[u] / 2 - t[u] / 2);
        break;
      case Di:
        a[c] = a[c] + (e[u] / 2 - t[u] / 2);
        break;
    }
  }
  return a;
}
function Ni(n, e) {
  e === void 0 && (e = {});
  var t = e, r = t.placement, i = r === void 0 ? n.placement : r, o = t.strategy, s = o === void 0 ? n.strategy : o, l = t.boundary, a = l === void 0 ? p1 : l, c = t.rootBoundary, u = c === void 0 ? Eh : c, f = t.elementContext, d = f === void 0 ? qr : f, h = t.altBoundary, p = h === void 0 ? !1 : h, m = t.padding, g = m === void 0 ? 0 : m, v = Dh(typeof g != "number" ? g : Nh(g, $i)), w = d === qr ? m1 : qr, E = n.rects.popper, y = n.elements[p ? w : d], T = q1(Qn(y) ? y : y.contextElement || Cn(n.elements.popper), a, u, s), b = Pr(n.elements.reference), D = Rh({
    reference: b,
    element: E,
    strategy: "absolute",
    placement: i
  }), B = va(Object.assign({}, E, D)), A = d === qr ? B : b, $ = {
    top: T.top - A.top + v.top,
    bottom: A.bottom - T.bottom + v.bottom,
    left: T.left - A.left + v.left,
    right: A.right - T.right + v.right
  }, K = n.modifiersData.offset;
  if (d === qr && K) {
    var U = K[i];
    Object.keys($).forEach(function(G) {
      var Y = [mt, pt].indexOf(G) >= 0 ? 1 : -1, re = [Ge, pt].indexOf(G) >= 0 ? "y" : "x";
      $[G] += U[re] * Y;
    });
  }
  return $;
}
function J1(n, e) {
  e === void 0 && (e = {});
  var t = e, r = t.placement, i = t.boundary, o = t.rootBoundary, s = t.padding, l = t.flipVariations, a = t.allowedAutoPlacements, c = a === void 0 ? Ch : a, u = Lr(r), f = u ? l ? Ku : Ku.filter(function(p) {
    return Lr(p) === u;
  }) : $i, d = f.filter(function(p) {
    return c.indexOf(p) >= 0;
  });
  d.length === 0 && (d = f);
  var h = d.reduce(function(p, m) {
    return p[m] = Ni(n, {
      placement: m,
      boundary: i,
      rootBoundary: o,
      padding: s
    })[Nt(m)], p;
  }, {});
  return Object.keys(h).sort(function(p, m) {
    return h[p] - h[m];
  });
}
function G1(n) {
  if (Nt(n) === uc)
    return [];
  var e = Oo(n);
  return [Gu(n), e, Gu(e)];
}
function Y1(n) {
  var e = n.state, t = n.options, r = n.name;
  if (!e.modifiersData[r]._skip) {
    for (var i = t.mainAxis, o = i === void 0 ? !0 : i, s = t.altAxis, l = s === void 0 ? !0 : s, a = t.fallbackPlacements, c = t.padding, u = t.boundary, f = t.rootBoundary, d = t.altBoundary, h = t.flipVariations, p = h === void 0 ? !0 : h, m = t.allowedAutoPlacements, g = e.options.placement, v = Nt(g), w = v === g, E = a || (w || !p ? [Oo(g)] : G1(g)), y = [g].concat(E).reduce(function(Ve, gt) {
      return Ve.concat(Nt(gt) === uc ? J1(e, {
        placement: gt,
        boundary: u,
        rootBoundary: f,
        padding: c,
        flipVariations: p,
        allowedAutoPlacements: m
      }) : gt);
    }, []), T = e.rects.reference, b = e.rects.popper, D = /* @__PURE__ */ new Map(), B = !0, A = y[0], $ = 0; $ < y.length; $++) {
      var K = y[$], U = Nt(K), G = Lr(K) === Ir, Y = [Ge, pt].indexOf(U) >= 0, re = Y ? "width" : "height", k = Ni(e, {
        placement: K,
        boundary: u,
        rootBoundary: f,
        altBoundary: d,
        padding: c
      }), S = Y ? G ? mt : Ye : G ? pt : Ge;
      T[re] > b[re] && (S = Oo(S));
      var M = Oo(S), I = [];
      if (o && I.push(k[U] <= 0), l && I.push(k[S] <= 0, k[M] <= 0), I.every(function(Ve) {
        return Ve;
      })) {
        A = K, B = !1;
        break;
      }
      D.set(K, I);
    }
    if (B)
      for (var P = p ? 3 : 1, Q = function(gt) {
        var Bt = y.find(function(tr) {
          var _t = D.get(tr);
          if (_t)
            return _t.slice(0, gt).every(function(nr) {
              return nr;
            });
        });
        if (Bt)
          return A = Bt, "break";
      }, se = P; se > 0; se--) {
        var Se = Q(se);
        if (Se === "break")
          break;
      }
    e.placement !== A && (e.modifiersData[r]._skip = !0, e.placement = A, e.reset = !0);
  }
}
const X1 = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Y1,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function Xu(n, e, t) {
  return t === void 0 && (t = {
    x: 0,
    y: 0
  }), {
    top: n.top - e.height - t.y,
    right: n.right - e.width + t.x,
    bottom: n.bottom - e.height + t.y,
    left: n.left - e.width - t.x
  };
}
function Qu(n) {
  return [Ge, mt, pt, Ye].some(function(e) {
    return n[e] >= 0;
  });
}
function Q1(n) {
  var e = n.state, t = n.name, r = e.rects.reference, i = e.rects.popper, o = e.modifiersData.preventOverflow, s = Ni(e, {
    elementContext: "reference"
  }), l = Ni(e, {
    altBoundary: !0
  }), a = Xu(s, r), c = Xu(l, i, o), u = Qu(a), f = Qu(c);
  e.modifiersData[t] = {
    referenceClippingOffsets: a,
    popperEscapeOffsets: c,
    isReferenceHidden: u,
    hasPopperEscaped: f
  }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
    "data-popper-reference-hidden": u,
    "data-popper-escaped": f
  });
}
const Z1 = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Q1
};
function ew(n, e, t) {
  var r = Nt(n), i = [Ye, Ge].indexOf(r) >= 0 ? -1 : 1, o = typeof t == "function" ? t(Object.assign({}, e, {
    placement: n
  })) : t, s = o[0], l = o[1];
  return s = s || 0, l = (l || 0) * i, [Ye, mt].indexOf(r) >= 0 ? {
    x: l,
    y: s
  } : {
    x: s,
    y: l
  };
}
function tw(n) {
  var e = n.state, t = n.options, r = n.name, i = t.offset, o = i === void 0 ? [0, 0] : i, s = Ch.reduce(function(u, f) {
    return u[f] = ew(f, e.rects, o), u;
  }, {}), l = s[e.placement], a = l.x, c = l.y;
  e.modifiersData.popperOffsets != null && (e.modifiersData.popperOffsets.x += a, e.modifiersData.popperOffsets.y += c), e.modifiersData[r] = s;
}
const nw = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: tw
};
function rw(n) {
  var e = n.state, t = n.name;
  e.modifiersData[t] = Rh({
    reference: e.rects.reference,
    element: e.rects.popper,
    strategy: "absolute",
    placement: e.placement
  });
}
const iw = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: rw,
  data: {}
};
function ow(n) {
  return n === "x" ? "y" : "x";
}
function sw(n) {
  var e = n.state, t = n.options, r = n.name, i = t.mainAxis, o = i === void 0 ? !0 : i, s = t.altAxis, l = s === void 0 ? !1 : s, a = t.boundary, c = t.rootBoundary, u = t.altBoundary, f = t.padding, d = t.tether, h = d === void 0 ? !0 : d, p = t.tetherOffset, m = p === void 0 ? 0 : p, g = Ni(e, {
    boundary: a,
    rootBoundary: c,
    padding: f,
    altBoundary: u
  }), v = Nt(e.placement), w = Lr(e.placement), E = !w, y = hc(v), T = ow(y), b = e.modifiersData.popperOffsets, D = e.rects.reference, B = e.rects.popper, A = typeof m == "function" ? m(Object.assign({}, e.rects, {
    placement: e.placement
  })) : m, $ = typeof A == "number" ? {
    mainAxis: A,
    altAxis: A
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, A), K = e.modifiersData.offset ? e.modifiersData.offset[e.placement] : null, U = {
    x: 0,
    y: 0
  };
  if (!!b) {
    if (o) {
      var G, Y = y === "y" ? Ge : Ye, re = y === "y" ? pt : mt, k = y === "y" ? "height" : "width", S = b[y], M = S + g[Y], I = S - g[re], P = h ? -B[k] / 2 : 0, Q = w === Ir ? D[k] : B[k], se = w === Ir ? -B[k] : -D[k], Se = e.elements.arrow, Ve = h && Se ? dc(Se) : {
        width: 0,
        height: 0
      }, gt = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : Ah(), Bt = gt[Y], tr = gt[re], _t = gi(0, D[k], Ve[k]), nr = E ? D[k] / 2 - P - _t - Bt - $.mainAxis : Q - _t - Bt - $.mainAxis, tn = E ? -D[k] / 2 + P + _t + tr + $.mainAxis : se + _t + tr + $.mainAxis, rr = e.elements.arrow && zi(e.elements.arrow), Hi = rr ? y === "y" ? rr.clientTop || 0 : rr.clientLeft || 0 : 0, zr = (G = K == null ? void 0 : K[y]) != null ? G : 0, Vi = S + nr - zr - Hi, ji = S + tn - zr, Hr = gi(h ? Cs(M, Vi) : M, S, h ? Un(I, ji) : I);
      b[y] = Hr, U[y] = Hr - S;
    }
    if (l) {
      var Vr, Wi = y === "x" ? Ge : Ye, Ui = y === "x" ? pt : mt, Ft = b[T], nn = T === "y" ? "height" : "width", jr = Ft + g[Wi], On = Ft - g[Ui], Wr = [Ge, Ye].indexOf(v) !== -1, Ki = (Vr = K == null ? void 0 : K[T]) != null ? Vr : 0, qi = Wr ? jr : Ft - D[nn] - B[nn] - Ki + $.altAxis, Ji = Wr ? Ft + D[nn] + B[nn] - Ki - $.altAxis : On, Gi = h && Wr ? D1(qi, Ft, Ji) : gi(h ? qi : jr, Ft, h ? Ji : On);
      b[T] = Gi, U[T] = Gi - Ft;
    }
    e.modifiersData[r] = U;
  }
}
const lw = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: sw,
  requiresIfExists: ["offset"]
};
function aw(n) {
  return {
    scrollLeft: n.scrollLeft,
    scrollTop: n.scrollTop
  };
}
function cw(n) {
  return n === rt(n) || !ht(n) ? pc(n) : aw(n);
}
function uw(n) {
  var e = n.getBoundingClientRect(), t = Rr(e.width) / n.offsetWidth || 1, r = Rr(e.height) / n.offsetHeight || 1;
  return t !== 1 || r !== 1;
}
function fw(n, e, t) {
  t === void 0 && (t = !1);
  var r = ht(e), i = ht(e) && uw(e), o = Cn(e), s = Pr(n, i, t), l = {
    scrollLeft: 0,
    scrollTop: 0
  }, a = {
    x: 0,
    y: 0
  };
  return (r || !r && !t) && ((Lt(e) !== "body" || gc(o)) && (l = cw(e)), ht(e) ? (a = Pr(e, !0), a.x += e.clientLeft, a.y += e.clientTop) : o && (a.x = mc(o))), {
    x: s.left + l.scrollLeft - a.x,
    y: s.top + l.scrollTop - a.y,
    width: s.width,
    height: s.height
  };
}
function dw(n) {
  var e = /* @__PURE__ */ new Map(), t = /* @__PURE__ */ new Set(), r = [];
  n.forEach(function(o) {
    e.set(o.name, o);
  });
  function i(o) {
    t.add(o.name);
    var s = [].concat(o.requires || [], o.requiresIfExists || []);
    s.forEach(function(l) {
      if (!t.has(l)) {
        var a = e.get(l);
        a && i(a);
      }
    }), r.push(o);
  }
  return n.forEach(function(o) {
    t.has(o.name) || i(o);
  }), r;
}
function hw(n) {
  var e = dw(n);
  return C1.reduce(function(t, r) {
    return t.concat(e.filter(function(i) {
      return i.phase === r;
    }));
  }, []);
}
function pw(n) {
  var e;
  return function() {
    return e || (e = new Promise(function(t) {
      Promise.resolve().then(function() {
        e = void 0, t(n());
      });
    })), e;
  };
}
function mw(n) {
  var e = n.reduce(function(t, r) {
    var i = t[r.name];
    return t[r.name] = i ? Object.assign({}, i, r, {
      options: Object.assign({}, i.options, r.options),
      data: Object.assign({}, i.data, r.data)
    }) : r, t;
  }, {});
  return Object.keys(e).map(function(t) {
    return e[t];
  });
}
var Zu = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function ef() {
  for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++)
    e[t] = arguments[t];
  return !e.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function gw(n) {
  n === void 0 && (n = {});
  var e = n, t = e.defaultModifiers, r = t === void 0 ? [] : t, i = e.defaultOptions, o = i === void 0 ? Zu : i;
  return function(l, a, c) {
    c === void 0 && (c = o);
    var u = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, Zu, o),
      modifiersData: {},
      elements: {
        reference: l,
        popper: a
      },
      attributes: {},
      styles: {}
    }, f = [], d = !1, h = {
      state: u,
      setOptions: function(v) {
        var w = typeof v == "function" ? v(u.options) : v;
        m(), u.options = Object.assign({}, o, u.options, w), u.scrollParents = {
          reference: Qn(l) ? yi(l) : l.contextElement ? yi(l.contextElement) : [],
          popper: yi(a)
        };
        var E = hw(mw([].concat(r, u.options.modifiers)));
        return u.orderedModifiers = E.filter(function(y) {
          return y.enabled;
        }), p(), h.update();
      },
      forceUpdate: function() {
        if (!d) {
          var v = u.elements, w = v.reference, E = v.popper;
          if (!!ef(w, E)) {
            u.rects = {
              reference: fw(w, zi(E), u.options.strategy === "fixed"),
              popper: dc(E)
            }, u.reset = !1, u.placement = u.options.placement, u.orderedModifiers.forEach(function($) {
              return u.modifiersData[$.name] = Object.assign({}, $.data);
            });
            for (var y = 0; y < u.orderedModifiers.length; y++) {
              if (u.reset === !0) {
                u.reset = !1, y = -1;
                continue;
              }
              var T = u.orderedModifiers[y], b = T.fn, D = T.options, B = D === void 0 ? {} : D, A = T.name;
              typeof b == "function" && (u = b({
                state: u,
                options: B,
                name: A,
                instance: h
              }) || u);
            }
          }
        }
      },
      update: pw(function() {
        return new Promise(function(g) {
          h.forceUpdate(), g(u);
        });
      }),
      destroy: function() {
        m(), d = !0;
      }
    };
    if (!ef(l, a))
      return h;
    h.setOptions(c).then(function(g) {
      !d && c.onFirstUpdate && c.onFirstUpdate(g);
    });
    function p() {
      u.orderedModifiers.forEach(function(g) {
        var v = g.name, w = g.options, E = w === void 0 ? {} : w, y = g.effect;
        if (typeof y == "function") {
          var T = y({
            state: u,
            name: v,
            instance: h,
            options: E
          }), b = function() {
          };
          f.push(T || b);
        }
      });
    }
    function m() {
      f.forEach(function(g) {
        return g();
      }), f = [];
    }
    return h;
  };
}
var yw = [z1, iw, F1, Th, nw, X1, lw, P1, Z1], vw = /* @__PURE__ */ gw({
  defaultModifiers: yw
}), bw = "tippy-box", Ph = "tippy-content", ww = "tippy-backdrop", Lh = "tippy-arrow", Bh = "tippy-svg-arrow", Rn = {
  passive: !0,
  capture: !0
}, _h = function() {
  return document.body;
};
function kw(n, e) {
  return {}.hasOwnProperty.call(n, e);
}
function Rl(n, e, t) {
  if (Array.isArray(n)) {
    var r = n[e];
    return r == null ? Array.isArray(t) ? t[e] : t : r;
  }
  return n;
}
function yc(n, e) {
  var t = {}.toString.call(n);
  return t.indexOf("[object") === 0 && t.indexOf(e + "]") > -1;
}
function Fh(n, e) {
  return typeof n == "function" ? n.apply(void 0, e) : n;
}
function tf(n, e) {
  if (e === 0)
    return n;
  var t;
  return function(r) {
    clearTimeout(t), t = setTimeout(function() {
      n(r);
    }, e);
  };
}
function xw(n, e) {
  var t = Object.assign({}, n);
  return e.forEach(function(r) {
    delete t[r];
  }), t;
}
function Sw(n) {
  return n.split(/\s+/).filter(Boolean);
}
function mr(n) {
  return [].concat(n);
}
function nf(n, e) {
  n.indexOf(e) === -1 && n.push(e);
}
function Ew(n) {
  return n.filter(function(e, t) {
    return n.indexOf(e) === t;
  });
}
function Cw(n) {
  return n.split("-")[0];
}
function Ts(n) {
  return [].slice.call(n);
}
function rf(n) {
  return Object.keys(n).reduce(function(e, t) {
    return n[t] !== void 0 && (e[t] = n[t]), e;
  }, {});
}
function vi() {
  return document.createElement("div");
}
function Ii(n) {
  return ["Element", "Fragment"].some(function(e) {
    return yc(n, e);
  });
}
function Tw(n) {
  return yc(n, "NodeList");
}
function Ow(n) {
  return yc(n, "MouseEvent");
}
function Mw(n) {
  return !!(n && n._tippy && n._tippy.reference === n);
}
function Aw(n) {
  return Ii(n) ? [n] : Tw(n) ? Ts(n) : Array.isArray(n) ? n : Ts(document.querySelectorAll(n));
}
function Pl(n, e) {
  n.forEach(function(t) {
    t && (t.style.transitionDuration = e + "ms");
  });
}
function of(n, e) {
  n.forEach(function(t) {
    t && t.setAttribute("data-state", e);
  });
}
function Dw(n) {
  var e, t = mr(n), r = t[0];
  return r != null && (e = r.ownerDocument) != null && e.body ? r.ownerDocument : document;
}
function Nw(n, e) {
  var t = e.clientX, r = e.clientY;
  return n.every(function(i) {
    var o = i.popperRect, s = i.popperState, l = i.props, a = l.interactiveBorder, c = Cw(s.placement), u = s.modifiersData.offset;
    if (!u)
      return !0;
    var f = c === "bottom" ? u.top.y : 0, d = c === "top" ? u.bottom.y : 0, h = c === "right" ? u.left.x : 0, p = c === "left" ? u.right.x : 0, m = o.top - r + f > a, g = r - o.bottom - d > a, v = o.left - t + h > a, w = t - o.right - p > a;
    return m || g || v || w;
  });
}
function Ll(n, e, t) {
  var r = e + "EventListener";
  ["transitionend", "webkitTransitionEnd"].forEach(function(i) {
    n[r](i, t);
  });
}
function sf(n, e) {
  for (var t = e; t; ) {
    var r;
    if (n.contains(t))
      return !0;
    t = t.getRootNode == null || (r = t.getRootNode()) == null ? void 0 : r.host;
  }
  return !1;
}
var Ot = {
  isTouch: !1
}, lf = 0;
function Iw() {
  Ot.isTouch || (Ot.isTouch = !0, window.performance && document.addEventListener("mousemove", $h));
}
function $h() {
  var n = performance.now();
  n - lf < 20 && (Ot.isTouch = !1, document.removeEventListener("mousemove", $h)), lf = n;
}
function Rw() {
  var n = document.activeElement;
  if (Mw(n)) {
    var e = n._tippy;
    n.blur && !e.state.isVisible && n.blur();
  }
}
function Pw() {
  document.addEventListener("touchstart", Iw, Rn), window.addEventListener("blur", Rw);
}
var Lw = typeof window < "u" && typeof document < "u", Bw = Lw ? !!window.msCrypto : !1;
function ur(n) {
  var e = n === "destroy" ? "n already-" : " ";
  return [n + "() was called on a" + e + "destroyed instance. This is a no-op but", "indicates a potential memory leak."].join(" ");
}
function af(n) {
  var e = /[ \t]{2,}/g, t = /^[ \t]*/gm;
  return n.replace(e, " ").replace(t, "").trim();
}
function _w(n) {
  return af(`
  %ctippy.js

  %c` + af(n) + `

  %c\u{1F477}\u200D This is a development-only message. It will be removed in production.
  `);
}
function zh(n) {
  return [
    _w(n),
    "color: #00C584; font-size: 1.3em; font-weight: bold;",
    "line-height: 1.5",
    "color: #a6a095;"
  ];
}
var Ri;
process.env.NODE_ENV !== "production" && Fw();
function Fw() {
  Ri = /* @__PURE__ */ new Set();
}
function Wt(n, e) {
  if (n && !Ri.has(e)) {
    var t;
    Ri.add(e), (t = console).warn.apply(t, zh(e));
  }
}
function ba(n, e) {
  if (n && !Ri.has(e)) {
    var t;
    Ri.add(e), (t = console).error.apply(t, zh(e));
  }
}
function $w(n) {
  var e = !n, t = Object.prototype.toString.call(n) === "[object Object]" && !n.addEventListener;
  ba(e, ["tippy() was passed", "`" + String(n) + "`", "as its targets (first) argument. Valid types are: String, Element,", "Element[], or NodeList."].join(" ")), ba(t, ["tippy() was passed a plain object which is not supported as an argument", "for virtual positioning. Use props.getReferenceClientRect instead."].join(" "));
}
var Hh = {
  animateFill: !1,
  followCursor: !1,
  inlinePositioning: !1,
  sticky: !1
}, zw = {
  allowHTML: !1,
  animation: "fade",
  arrow: !0,
  content: "",
  inertia: !1,
  maxWidth: 350,
  role: "tooltip",
  theme: "",
  zIndex: 9999
}, nt = Object.assign({
  appendTo: _h,
  aria: {
    content: "auto",
    expanded: "auto"
  },
  delay: 0,
  duration: [300, 250],
  getReferenceClientRect: null,
  hideOnClick: !0,
  ignoreAttributes: !1,
  interactive: !1,
  interactiveBorder: 2,
  interactiveDebounce: 0,
  moveTransition: "",
  offset: [0, 10],
  onAfterUpdate: function() {
  },
  onBeforeUpdate: function() {
  },
  onCreate: function() {
  },
  onDestroy: function() {
  },
  onHidden: function() {
  },
  onHide: function() {
  },
  onMount: function() {
  },
  onShow: function() {
  },
  onShown: function() {
  },
  onTrigger: function() {
  },
  onUntrigger: function() {
  },
  onClickOutside: function() {
  },
  placement: "top",
  plugins: [],
  popperOptions: {},
  render: null,
  showOnCreate: !1,
  touch: !0,
  trigger: "mouseenter focus",
  triggerTarget: null
}, Hh, zw), Hw = Object.keys(nt), Vw = function(e) {
  process.env.NODE_ENV !== "production" && jh(e, []);
  var t = Object.keys(e);
  t.forEach(function(r) {
    nt[r] = e[r];
  });
};
function Vh(n) {
  var e = n.plugins || [], t = e.reduce(function(r, i) {
    var o = i.name, s = i.defaultValue;
    if (o) {
      var l;
      r[o] = n[o] !== void 0 ? n[o] : (l = nt[o]) != null ? l : s;
    }
    return r;
  }, {});
  return Object.assign({}, n, t);
}
function jw(n, e) {
  var t = e ? Object.keys(Vh(Object.assign({}, nt, {
    plugins: e
  }))) : Hw, r = t.reduce(function(i, o) {
    var s = (n.getAttribute("data-tippy-" + o) || "").trim();
    if (!s)
      return i;
    if (o === "content")
      i[o] = s;
    else
      try {
        i[o] = JSON.parse(s);
      } catch {
        i[o] = s;
      }
    return i;
  }, {});
  return r;
}
function cf(n, e) {
  var t = Object.assign({}, e, {
    content: Fh(e.content, [n])
  }, e.ignoreAttributes ? {} : jw(n, e.plugins));
  return t.aria = Object.assign({}, nt.aria, t.aria), t.aria = {
    expanded: t.aria.expanded === "auto" ? e.interactive : t.aria.expanded,
    content: t.aria.content === "auto" ? e.interactive ? null : "describedby" : t.aria.content
  }, t;
}
function jh(n, e) {
  n === void 0 && (n = {}), e === void 0 && (e = []);
  var t = Object.keys(n);
  t.forEach(function(r) {
    var i = xw(nt, Object.keys(Hh)), o = !kw(i, r);
    o && (o = e.filter(function(s) {
      return s.name === r;
    }).length === 0), Wt(o, ["`" + r + "`", "is not a valid prop. You may have spelled it incorrectly, or if it's", "a plugin, forgot to pass it in an array as props.plugins.", `

`, `All props: https://atomiks.github.io/tippyjs/v6/all-props/
`, "Plugins: https://atomiks.github.io/tippyjs/v6/plugins/"].join(" "));
  });
}
var Ww = function() {
  return "innerHTML";
};
function wa(n, e) {
  n[Ww()] = e;
}
function uf(n) {
  var e = vi();
  return n === !0 ? e.className = Lh : (e.className = Bh, Ii(n) ? e.appendChild(n) : wa(e, n)), e;
}
function ff(n, e) {
  Ii(e.content) ? (wa(n, ""), n.appendChild(e.content)) : typeof e.content != "function" && (e.allowHTML ? wa(n, e.content) : n.textContent = e.content);
}
function ka(n) {
  var e = n.firstElementChild, t = Ts(e.children);
  return {
    box: e,
    content: t.find(function(r) {
      return r.classList.contains(Ph);
    }),
    arrow: t.find(function(r) {
      return r.classList.contains(Lh) || r.classList.contains(Bh);
    }),
    backdrop: t.find(function(r) {
      return r.classList.contains(ww);
    })
  };
}
function Wh(n) {
  var e = vi(), t = vi();
  t.className = bw, t.setAttribute("data-state", "hidden"), t.setAttribute("tabindex", "-1");
  var r = vi();
  r.className = Ph, r.setAttribute("data-state", "hidden"), ff(r, n.props), e.appendChild(t), t.appendChild(r), i(n.props, n.props);
  function i(o, s) {
    var l = ka(e), a = l.box, c = l.content, u = l.arrow;
    s.theme ? a.setAttribute("data-theme", s.theme) : a.removeAttribute("data-theme"), typeof s.animation == "string" ? a.setAttribute("data-animation", s.animation) : a.removeAttribute("data-animation"), s.inertia ? a.setAttribute("data-inertia", "") : a.removeAttribute("data-inertia"), a.style.maxWidth = typeof s.maxWidth == "number" ? s.maxWidth + "px" : s.maxWidth, s.role ? a.setAttribute("role", s.role) : a.removeAttribute("role"), (o.content !== s.content || o.allowHTML !== s.allowHTML) && ff(c, n.props), s.arrow ? u ? o.arrow !== s.arrow && (a.removeChild(u), a.appendChild(uf(s.arrow))) : a.appendChild(uf(s.arrow)) : u && a.removeChild(u);
  }
  return {
    popper: e,
    onUpdate: i
  };
}
Wh.$$tippy = !0;
var Uw = 1, mo = [], Bl = [];
function Kw(n, e) {
  var t = cf(n, Object.assign({}, nt, Vh(rf(e)))), r, i, o, s = !1, l = !1, a = !1, c = !1, u, f, d, h = [], p = tf(Vi, t.interactiveDebounce), m, g = Uw++, v = null, w = Ew(t.plugins), E = {
    isEnabled: !0,
    isVisible: !1,
    isDestroyed: !1,
    isMounted: !1,
    isShown: !1
  }, y = {
    id: g,
    reference: n,
    popper: vi(),
    popperInstance: v,
    props: t,
    state: E,
    plugins: w,
    clearDelayTimeouts: qi,
    setProps: Ji,
    setContent: Gi,
    show: ip,
    hide: op,
    hideWithInteractivity: sp,
    enable: Wr,
    disable: Ki,
    unmount: lp,
    destroy: ap
  };
  if (!t.render)
    return process.env.NODE_ENV !== "production" && ba(!0, "render() function has not been supplied."), y;
  var T = t.render(y), b = T.popper, D = T.onUpdate;
  b.setAttribute("data-tippy-root", ""), b.id = "tippy-" + y.id, y.popper = b, n._tippy = y, b._tippy = y;
  var B = w.map(function(x) {
    return x.fn(y);
  }), A = n.hasAttribute("aria-expanded");
  return rr(), P(), S(), M("onCreate", [y]), t.showOnCreate && jr(), b.addEventListener("mouseenter", function() {
    y.props.interactive && y.state.isVisible && y.clearDelayTimeouts();
  }), b.addEventListener("mouseleave", function() {
    y.props.interactive && y.props.trigger.indexOf("mouseenter") >= 0 && Y().addEventListener("mousemove", p);
  }), y;
  function $() {
    var x = y.props.touch;
    return Array.isArray(x) ? x : [x, 0];
  }
  function K() {
    return $()[0] === "hold";
  }
  function U() {
    var x;
    return !!((x = y.props.render) != null && x.$$tippy);
  }
  function G() {
    return m || n;
  }
  function Y() {
    var x = G().parentNode;
    return x ? Dw(x) : document;
  }
  function re() {
    return ka(b);
  }
  function k(x) {
    return y.state.isMounted && !y.state.isVisible || Ot.isTouch || u && u.type === "focus" ? 0 : Rl(y.props.delay, x ? 0 : 1, nt.delay);
  }
  function S(x) {
    x === void 0 && (x = !1), b.style.pointerEvents = y.props.interactive && !x ? "" : "none", b.style.zIndex = "" + y.props.zIndex;
  }
  function M(x, F, j) {
    if (j === void 0 && (j = !0), B.forEach(function(te) {
      te[x] && te[x].apply(te, F);
    }), j) {
      var le;
      (le = y.props)[x].apply(le, F);
    }
  }
  function I() {
    var x = y.props.aria;
    if (!!x.content) {
      var F = "aria-" + x.content, j = b.id, le = mr(y.props.triggerTarget || n);
      le.forEach(function(te) {
        var Pe = te.getAttribute(F);
        if (y.state.isVisible)
          te.setAttribute(F, Pe ? Pe + " " + j : j);
        else {
          var it = Pe && Pe.replace(j, "").trim();
          it ? te.setAttribute(F, it) : te.removeAttribute(F);
        }
      });
    }
  }
  function P() {
    if (!(A || !y.props.aria.expanded)) {
      var x = mr(y.props.triggerTarget || n);
      x.forEach(function(F) {
        y.props.interactive ? F.setAttribute("aria-expanded", y.state.isVisible && F === G() ? "true" : "false") : F.removeAttribute("aria-expanded");
      });
    }
  }
  function Q() {
    Y().removeEventListener("mousemove", p), mo = mo.filter(function(x) {
      return x !== p;
    });
  }
  function se(x) {
    if (!(Ot.isTouch && (a || x.type === "mousedown"))) {
      var F = x.composedPath && x.composedPath()[0] || x.target;
      if (!(y.props.interactive && sf(b, F))) {
        if (mr(y.props.triggerTarget || n).some(function(j) {
          return sf(j, F);
        })) {
          if (Ot.isTouch || y.state.isVisible && y.props.trigger.indexOf("click") >= 0)
            return;
        } else
          M("onClickOutside", [y, x]);
        y.props.hideOnClick === !0 && (y.clearDelayTimeouts(), y.hide(), l = !0, setTimeout(function() {
          l = !1;
        }), y.state.isMounted || Bt());
      }
    }
  }
  function Se() {
    a = !0;
  }
  function Ve() {
    a = !1;
  }
  function gt() {
    var x = Y();
    x.addEventListener("mousedown", se, !0), x.addEventListener("touchend", se, Rn), x.addEventListener("touchstart", Ve, Rn), x.addEventListener("touchmove", Se, Rn);
  }
  function Bt() {
    var x = Y();
    x.removeEventListener("mousedown", se, !0), x.removeEventListener("touchend", se, Rn), x.removeEventListener("touchstart", Ve, Rn), x.removeEventListener("touchmove", Se, Rn);
  }
  function tr(x, F) {
    nr(x, function() {
      !y.state.isVisible && b.parentNode && b.parentNode.contains(b) && F();
    });
  }
  function _t(x, F) {
    nr(x, F);
  }
  function nr(x, F) {
    var j = re().box;
    function le(te) {
      te.target === j && (Ll(j, "remove", le), F());
    }
    if (x === 0)
      return F();
    Ll(j, "remove", f), Ll(j, "add", le), f = le;
  }
  function tn(x, F, j) {
    j === void 0 && (j = !1);
    var le = mr(y.props.triggerTarget || n);
    le.forEach(function(te) {
      te.addEventListener(x, F, j), h.push({
        node: te,
        eventType: x,
        handler: F,
        options: j
      });
    });
  }
  function rr() {
    K() && (tn("touchstart", zr, {
      passive: !0
    }), tn("touchend", ji, {
      passive: !0
    })), Sw(y.props.trigger).forEach(function(x) {
      if (x !== "manual")
        switch (tn(x, zr), x) {
          case "mouseenter":
            tn("mouseleave", ji);
            break;
          case "focus":
            tn(Bw ? "focusout" : "blur", Hr);
            break;
          case "focusin":
            tn("focusout", Hr);
            break;
        }
    });
  }
  function Hi() {
    h.forEach(function(x) {
      var F = x.node, j = x.eventType, le = x.handler, te = x.options;
      F.removeEventListener(j, le, te);
    }), h = [];
  }
  function zr(x) {
    var F, j = !1;
    if (!(!y.state.isEnabled || Vr(x) || l)) {
      var le = ((F = u) == null ? void 0 : F.type) === "focus";
      u = x, m = x.currentTarget, P(), !y.state.isVisible && Ow(x) && mo.forEach(function(te) {
        return te(x);
      }), x.type === "click" && (y.props.trigger.indexOf("mouseenter") < 0 || s) && y.props.hideOnClick !== !1 && y.state.isVisible ? j = !0 : jr(x), x.type === "click" && (s = !j), j && !le && On(x);
    }
  }
  function Vi(x) {
    var F = x.target, j = G().contains(F) || b.contains(F);
    if (!(x.type === "mousemove" && j)) {
      var le = nn().concat(b).map(function(te) {
        var Pe, it = te._tippy, ir = (Pe = it.popperInstance) == null ? void 0 : Pe.state;
        return ir ? {
          popperRect: te.getBoundingClientRect(),
          popperState: ir,
          props: t
        } : null;
      }).filter(Boolean);
      Nw(le, x) && (Q(), On(x));
    }
  }
  function ji(x) {
    var F = Vr(x) || y.props.trigger.indexOf("click") >= 0 && s;
    if (!F) {
      if (y.props.interactive) {
        y.hideWithInteractivity(x);
        return;
      }
      On(x);
    }
  }
  function Hr(x) {
    y.props.trigger.indexOf("focusin") < 0 && x.target !== G() || y.props.interactive && x.relatedTarget && b.contains(x.relatedTarget) || On(x);
  }
  function Vr(x) {
    return Ot.isTouch ? K() !== x.type.indexOf("touch") >= 0 : !1;
  }
  function Wi() {
    Ui();
    var x = y.props, F = x.popperOptions, j = x.placement, le = x.offset, te = x.getReferenceClientRect, Pe = x.moveTransition, it = U() ? ka(b).arrow : null, ir = te ? {
      getBoundingClientRect: te,
      contextElement: te.contextElement || G()
    } : n, wc = {
      name: "$$tippy",
      enabled: !0,
      phase: "beforeWrite",
      requires: ["computeStyles"],
      fn: function(Yi) {
        var or = Yi.state;
        if (U()) {
          var cp = re(), Js = cp.box;
          ["placement", "reference-hidden", "escaped"].forEach(function(Xi) {
            Xi === "placement" ? Js.setAttribute("data-placement", or.placement) : or.attributes.popper["data-popper-" + Xi] ? Js.setAttribute("data-" + Xi, "") : Js.removeAttribute("data-" + Xi);
          }), or.attributes.popper = {};
        }
      }
    }, Mn = [{
      name: "offset",
      options: {
        offset: le
      }
    }, {
      name: "preventOverflow",
      options: {
        padding: {
          top: 2,
          bottom: 2,
          left: 5,
          right: 5
        }
      }
    }, {
      name: "flip",
      options: {
        padding: 5
      }
    }, {
      name: "computeStyles",
      options: {
        adaptive: !Pe
      }
    }, wc];
    U() && it && Mn.push({
      name: "arrow",
      options: {
        element: it,
        padding: 3
      }
    }), Mn.push.apply(Mn, (F == null ? void 0 : F.modifiers) || []), y.popperInstance = vw(ir, b, Object.assign({}, F, {
      placement: j,
      onFirstUpdate: d,
      modifiers: Mn
    }));
  }
  function Ui() {
    y.popperInstance && (y.popperInstance.destroy(), y.popperInstance = null);
  }
  function Ft() {
    var x = y.props.appendTo, F, j = G();
    y.props.interactive && x === _h || x === "parent" ? F = j.parentNode : F = Fh(x, [j]), F.contains(b) || F.appendChild(b), y.state.isMounted = !0, Wi(), process.env.NODE_ENV !== "production" && Wt(y.props.interactive && x === nt.appendTo && j.nextElementSibling !== b, ["Interactive tippy element may not be accessible via keyboard", "navigation because it is not directly after the reference element", "in the DOM source order.", `

`, "Using a wrapper <div> or <span> tag around the reference element", "solves this by creating a new parentNode context.", `

`, "Specifying `appendTo: document.body` silences this warning, but it", "assumes you are using a focus management solution to handle", "keyboard navigation.", `

`, "See: https://atomiks.github.io/tippyjs/v6/accessibility/#interactivity"].join(" "));
  }
  function nn() {
    return Ts(b.querySelectorAll("[data-tippy-root]"));
  }
  function jr(x) {
    y.clearDelayTimeouts(), x && M("onTrigger", [y, x]), gt();
    var F = k(!0), j = $(), le = j[0], te = j[1];
    Ot.isTouch && le === "hold" && te && (F = te), F ? r = setTimeout(function() {
      y.show();
    }, F) : y.show();
  }
  function On(x) {
    if (y.clearDelayTimeouts(), M("onUntrigger", [y, x]), !y.state.isVisible) {
      Bt();
      return;
    }
    if (!(y.props.trigger.indexOf("mouseenter") >= 0 && y.props.trigger.indexOf("click") >= 0 && ["mouseleave", "mousemove"].indexOf(x.type) >= 0 && s)) {
      var F = k(!1);
      F ? i = setTimeout(function() {
        y.state.isVisible && y.hide();
      }, F) : o = requestAnimationFrame(function() {
        y.hide();
      });
    }
  }
  function Wr() {
    y.state.isEnabled = !0;
  }
  function Ki() {
    y.hide(), y.state.isEnabled = !1;
  }
  function qi() {
    clearTimeout(r), clearTimeout(i), cancelAnimationFrame(o);
  }
  function Ji(x) {
    if (process.env.NODE_ENV !== "production" && Wt(y.state.isDestroyed, ur("setProps")), !y.state.isDestroyed) {
      M("onBeforeUpdate", [y, x]), Hi();
      var F = y.props, j = cf(n, Object.assign({}, F, rf(x), {
        ignoreAttributes: !0
      }));
      y.props = j, rr(), F.interactiveDebounce !== j.interactiveDebounce && (Q(), p = tf(Vi, j.interactiveDebounce)), F.triggerTarget && !j.triggerTarget ? mr(F.triggerTarget).forEach(function(le) {
        le.removeAttribute("aria-expanded");
      }) : j.triggerTarget && n.removeAttribute("aria-expanded"), P(), S(), D && D(F, j), y.popperInstance && (Wi(), nn().forEach(function(le) {
        requestAnimationFrame(le._tippy.popperInstance.forceUpdate);
      })), M("onAfterUpdate", [y, x]);
    }
  }
  function Gi(x) {
    y.setProps({
      content: x
    });
  }
  function ip() {
    process.env.NODE_ENV !== "production" && Wt(y.state.isDestroyed, ur("show"));
    var x = y.state.isVisible, F = y.state.isDestroyed, j = !y.state.isEnabled, le = Ot.isTouch && !y.props.touch, te = Rl(y.props.duration, 0, nt.duration);
    if (!(x || F || j || le) && !G().hasAttribute("disabled") && (M("onShow", [y], !1), y.props.onShow(y) !== !1)) {
      if (y.state.isVisible = !0, U() && (b.style.visibility = "visible"), S(), gt(), y.state.isMounted || (b.style.transition = "none"), U()) {
        var Pe = re(), it = Pe.box, ir = Pe.content;
        Pl([it, ir], 0);
      }
      d = function() {
        var Mn;
        if (!(!y.state.isVisible || c)) {
          if (c = !0, b.offsetHeight, b.style.transition = y.props.moveTransition, U() && y.props.animation) {
            var qs = re(), Yi = qs.box, or = qs.content;
            Pl([Yi, or], te), of([Yi, or], "visible");
          }
          I(), P(), nf(Bl, y), (Mn = y.popperInstance) == null || Mn.forceUpdate(), M("onMount", [y]), y.props.animation && U() && _t(te, function() {
            y.state.isShown = !0, M("onShown", [y]);
          });
        }
      }, Ft();
    }
  }
  function op() {
    process.env.NODE_ENV !== "production" && Wt(y.state.isDestroyed, ur("hide"));
    var x = !y.state.isVisible, F = y.state.isDestroyed, j = !y.state.isEnabled, le = Rl(y.props.duration, 1, nt.duration);
    if (!(x || F || j) && (M("onHide", [y], !1), y.props.onHide(y) !== !1)) {
      if (y.state.isVisible = !1, y.state.isShown = !1, c = !1, s = !1, U() && (b.style.visibility = "hidden"), Q(), Bt(), S(!0), U()) {
        var te = re(), Pe = te.box, it = te.content;
        y.props.animation && (Pl([Pe, it], le), of([Pe, it], "hidden"));
      }
      I(), P(), y.props.animation ? U() && tr(le, y.unmount) : y.unmount();
    }
  }
  function sp(x) {
    process.env.NODE_ENV !== "production" && Wt(y.state.isDestroyed, ur("hideWithInteractivity")), Y().addEventListener("mousemove", p), nf(mo, p), p(x);
  }
  function lp() {
    process.env.NODE_ENV !== "production" && Wt(y.state.isDestroyed, ur("unmount")), y.state.isVisible && y.hide(), y.state.isMounted && (Ui(), nn().forEach(function(x) {
      x._tippy.unmount();
    }), b.parentNode && b.parentNode.removeChild(b), Bl = Bl.filter(function(x) {
      return x !== y;
    }), y.state.isMounted = !1, M("onHidden", [y]));
  }
  function ap() {
    process.env.NODE_ENV !== "production" && Wt(y.state.isDestroyed, ur("destroy")), !y.state.isDestroyed && (y.clearDelayTimeouts(), y.unmount(), Hi(), delete n._tippy, y.state.isDestroyed = !0, M("onDestroy", [y]));
  }
}
function Fr(n, e) {
  e === void 0 && (e = {});
  var t = nt.plugins.concat(e.plugins || []);
  process.env.NODE_ENV !== "production" && ($w(n), jh(e, t)), Pw();
  var r = Object.assign({}, e, {
    plugins: t
  }), i = Aw(n);
  if (process.env.NODE_ENV !== "production") {
    var o = Ii(r.content), s = i.length > 1;
    Wt(o && s, ["tippy() was passed an Element as the `content` prop, but more than", "one tippy instance was created by this invocation. This means the", "content element will only be appended to the last tippy instance.", `

`, "Instead, pass the .innerHTML of the element, or use a function that", "returns a cloned version of the element instead.", `

`, `1) content: element.innerHTML
`, "2) content: () => element.cloneNode(true)"].join(" "));
  }
  var l = i.reduce(function(a, c) {
    var u = c && Kw(c, r);
    return u && a.push(u), a;
  }, []);
  return Ii(n) ? l[0] : l;
}
Fr.defaultProps = nt;
Fr.setDefaultProps = Vw;
Fr.currentInput = Ot;
Object.assign({}, Th, {
  effect: function(e) {
    var t = e.state, r = {
      popper: {
        position: t.options.strategy,
        left: "0",
        top: "0",
        margin: "0"
      },
      arrow: {
        position: "absolute"
      },
      reference: {}
    };
    Object.assign(t.elements.popper.style, r.popper), t.styles = r, t.elements.arrow && Object.assign(t.elements.arrow.style, r.arrow);
  }
});
Fr.setDefaultProps({
  render: Wh
});
class qw {
  constructor({ editor: e, element: t, view: r, tippyOptions: i = {}, updateDelay: o = 250, shouldShow: s }) {
    this.preventHide = !1, this.shouldShow = ({ view: l, state: a, from: c, to: u }) => {
      const { doc: f, selection: d } = a, { empty: h } = d, p = !f.textBetween(c, u).length && Qa(a.selection), m = this.element.contains(document.activeElement);
      return !(!(l.hasFocus() || m) || h || p || !this.editor.isEditable);
    }, this.mousedownHandler = () => {
      this.preventHide = !0;
    }, this.dragstartHandler = () => {
      this.hide();
    }, this.focusHandler = () => {
      setTimeout(() => this.update(this.editor.view));
    }, this.blurHandler = ({ event: l }) => {
      var a;
      if (this.preventHide) {
        this.preventHide = !1;
        return;
      }
      (l == null ? void 0 : l.relatedTarget) && ((a = this.element.parentNode) === null || a === void 0 ? void 0 : a.contains(l.relatedTarget)) || (l == null ? void 0 : l.relatedTarget) !== this.editor.view.dom && this.hide();
    }, this.tippyBlurHandler = (l) => {
      this.blurHandler({ event: l });
    }, this.handleDebouncedUpdate = (l, a) => {
      const c = !(a != null && a.selection.eq(l.state.selection)), u = !(a != null && a.doc.eq(l.state.doc));
      !c && !u || (this.updateDebounceTimer && clearTimeout(this.updateDebounceTimer), this.updateDebounceTimer = window.setTimeout(() => {
        this.updateHandler(l, c, u, a);
      }, this.updateDelay));
    }, this.updateHandler = (l, a, c, u) => {
      var f, d, h;
      const { state: p, composing: m } = l, { selection: g } = p;
      if (m || !a && !c)
        return;
      this.createTooltip();
      const { ranges: w } = g, E = Math.min(...w.map((b) => b.$from.pos)), y = Math.max(...w.map((b) => b.$to.pos));
      if (!((f = this.shouldShow) === null || f === void 0 ? void 0 : f.call(this, {
        editor: this.editor,
        element: this.element,
        view: l,
        state: p,
        oldState: u,
        from: E,
        to: y
      }))) {
        this.hide();
        return;
      }
      (d = this.tippy) === null || d === void 0 || d.setProps({
        getReferenceClientRect: ((h = this.tippyOptions) === null || h === void 0 ? void 0 : h.getReferenceClientRect) || (() => {
          if (jv(p.selection)) {
            let b = l.nodeDOM(E);
            if (b) {
              const D = b.dataset.nodeViewWrapper ? b : b.querySelector("[data-node-view-wrapper]");
              if (D && (b = D.firstChild), b)
                return b.getBoundingClientRect();
            }
          }
          return uh(l, E, y);
        })
      }), this.show();
    }, this.editor = e, this.element = t, this.view = r, this.updateDelay = o, s && (this.shouldShow = s), this.element.addEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.view.dom.addEventListener("dragstart", this.dragstartHandler), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.tippyOptions = i, this.element.remove(), this.element.style.visibility = "visible";
  }
  createTooltip() {
    const { element: e } = this.editor.options, t = !!e.parentElement;
    this.tippy || !t || (this.tippy = Fr(e, {
      duration: 0,
      getReferenceClientRect: null,
      content: this.element,
      interactive: !0,
      trigger: "manual",
      placement: "top",
      hideOnClick: "toggle",
      ...this.tippyOptions
    }), this.tippy.popper.firstChild && this.tippy.popper.firstChild.addEventListener("blur", this.tippyBlurHandler));
  }
  update(e, t) {
    const { state: r } = e, i = r.selection.from !== r.selection.to;
    if (this.updateDelay > 0 && i) {
      this.handleDebouncedUpdate(e, t);
      return;
    }
    const o = !(t != null && t.selection.eq(e.state.selection)), s = !(t != null && t.doc.eq(e.state.doc));
    this.updateHandler(e, o, s, t);
  }
  show() {
    var e;
    (e = this.tippy) === null || e === void 0 || e.show();
  }
  hide() {
    var e;
    (e = this.tippy) === null || e === void 0 || e.hide();
  }
  destroy() {
    var e, t;
    !((e = this.tippy) === null || e === void 0) && e.popper.firstChild && this.tippy.popper.firstChild.removeEventListener("blur", this.tippyBlurHandler), (t = this.tippy) === null || t === void 0 || t.destroy(), this.element.removeEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.view.dom.removeEventListener("dragstart", this.dragstartHandler), this.editor.off("focus", this.focusHandler), this.editor.off("blur", this.blurHandler);
  }
}
const Uh = (n) => new Ae({
  key: typeof n.pluginKey == "string" ? new He(n.pluginKey) : n.pluginKey,
  view: (e) => new qw({ view: e, ...n })
});
$e.create({
  name: "bubbleMenu",
  addOptions() {
    return {
      element: null,
      tippyOptions: {},
      pluginKey: "bubbleMenu",
      updateDelay: void 0,
      shouldShow: null
    };
  },
  addProseMirrorPlugins() {
    return this.options.element ? [
      Uh({
        pluginKey: this.options.pluginKey,
        editor: this.editor,
        element: this.options.element,
        tippyOptions: this.options.tippyOptions,
        updateDelay: this.options.updateDelay,
        shouldShow: this.options.shouldShow
      })
    ] : [];
  }
});
class Jw {
  getTextContent(e) {
    return ah(e, { textSerializers: Ya(this.editor.schema) });
  }
  constructor({ editor: e, element: t, view: r, tippyOptions: i = {}, shouldShow: o }) {
    this.preventHide = !1, this.shouldShow = ({ view: s, state: l }) => {
      const { selection: a } = l, { $anchor: c, empty: u } = a, f = c.depth === 1, d = c.parent.isTextblock && !c.parent.type.spec.code && !c.parent.textContent && c.parent.childCount === 0 && !this.getTextContent(c.parent);
      return !(!s.hasFocus() || !u || !f || !d || !this.editor.isEditable);
    }, this.mousedownHandler = () => {
      this.preventHide = !0;
    }, this.focusHandler = () => {
      setTimeout(() => this.update(this.editor.view));
    }, this.blurHandler = ({ event: s }) => {
      var l;
      if (this.preventHide) {
        this.preventHide = !1;
        return;
      }
      (s == null ? void 0 : s.relatedTarget) && ((l = this.element.parentNode) === null || l === void 0 ? void 0 : l.contains(s.relatedTarget)) || (s == null ? void 0 : s.relatedTarget) !== this.editor.view.dom && this.hide();
    }, this.tippyBlurHandler = (s) => {
      this.blurHandler({ event: s });
    }, this.editor = e, this.element = t, this.view = r, o && (this.shouldShow = o), this.element.addEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.editor.on("focus", this.focusHandler), this.editor.on("blur", this.blurHandler), this.tippyOptions = i, this.element.remove(), this.element.style.visibility = "visible";
  }
  createTooltip() {
    const { element: e } = this.editor.options, t = !!e.parentElement;
    this.tippy || !t || (this.tippy = Fr(e, {
      duration: 0,
      getReferenceClientRect: null,
      content: this.element,
      interactive: !0,
      trigger: "manual",
      placement: "right",
      hideOnClick: "toggle",
      ...this.tippyOptions
    }), this.tippy.popper.firstChild && this.tippy.popper.firstChild.addEventListener("blur", this.tippyBlurHandler));
  }
  update(e, t) {
    var r, i, o;
    const { state: s } = e, { doc: l, selection: a } = s, { from: c, to: u } = a;
    if (t && t.doc.eq(l) && t.selection.eq(a))
      return;
    if (this.createTooltip(), !((r = this.shouldShow) === null || r === void 0 ? void 0 : r.call(this, {
      editor: this.editor,
      view: e,
      state: s,
      oldState: t
    }))) {
      this.hide();
      return;
    }
    (i = this.tippy) === null || i === void 0 || i.setProps({
      getReferenceClientRect: ((o = this.tippyOptions) === null || o === void 0 ? void 0 : o.getReferenceClientRect) || (() => uh(e, c, u))
    }), this.show();
  }
  show() {
    var e;
    (e = this.tippy) === null || e === void 0 || e.show();
  }
  hide() {
    var e;
    (e = this.tippy) === null || e === void 0 || e.hide();
  }
  destroy() {
    var e, t;
    !((e = this.tippy) === null || e === void 0) && e.popper.firstChild && this.tippy.popper.firstChild.removeEventListener("blur", this.tippyBlurHandler), (t = this.tippy) === null || t === void 0 || t.destroy(), this.element.removeEventListener("mousedown", this.mousedownHandler, { capture: !0 }), this.editor.off("focus", this.focusHandler), this.editor.off("blur", this.blurHandler);
  }
}
const Kh = (n) => new Ae({
  key: typeof n.pluginKey == "string" ? new He(n.pluginKey) : n.pluginKey,
  view: (e) => new Jw({ view: e, ...n })
});
$e.create({
  name: "floatingMenu",
  addOptions() {
    return {
      element: null,
      tippyOptions: {},
      pluginKey: "floatingMenu",
      shouldShow: null
    };
  },
  addProseMirrorPlugins() {
    return this.options.element ? [
      Kh({
        pluginKey: this.options.pluginKey,
        editor: this.editor,
        element: this.options.element,
        tippyOptions: this.options.tippyOptions,
        shouldShow: this.options.shouldShow
      })
    ] : [];
  }
});
const Gw = ze({
  name: "BubbleMenu",
  props: {
    pluginKey: {
      type: [String, Object],
      default: "bubbleMenu"
    },
    editor: {
      type: Object,
      required: !0
    },
    updateDelay: {
      type: Number,
      default: void 0
    },
    tippyOptions: {
      type: Object,
      default: () => ({})
    },
    shouldShow: {
      type: Function,
      default: null
    }
  },
  setup(n, { slots: e }) {
    const t = Ke(null);
    return Da(() => {
      const { updateDelay: r, editor: i, pluginKey: o, shouldShow: s, tippyOptions: l } = n;
      i.registerPlugin(Uh({
        updateDelay: r,
        editor: i,
        element: t.value,
        pluginKey: o,
        shouldShow: s,
        tippyOptions: l
      }));
    }), Ds(() => {
      const { pluginKey: r, editor: i } = n;
      i.unregisterPlugin(r);
    }), () => {
      var r;
      return Kn("div", { ref: t }, (r = e.default) === null || r === void 0 ? void 0 : r.call(e));
    };
  }
});
function df(n) {
  return mp((e, t) => ({
    get() {
      return e(), n;
    },
    set(r) {
      n = r, requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          t();
        });
      });
    }
  }));
}
class Yw extends wb {
  constructor(e = {}) {
    return super(e), this.contentComponent = null, this.appContext = null, this.reactiveState = df(this.view.state), this.reactiveExtensionStorage = df(this.extensionStorage), this.on("beforeTransaction", ({ nextState: t }) => {
      this.reactiveState.value = t, this.reactiveExtensionStorage.value = this.extensionStorage;
    }), pp(this);
  }
  get state() {
    return this.reactiveState ? this.reactiveState.value : this.view.state;
  }
  get storage() {
    return this.reactiveExtensionStorage ? this.reactiveExtensionStorage.value : super.storage;
  }
  registerPlugin(e, t) {
    const r = super.registerPlugin(e, t);
    return this.reactiveState && (this.reactiveState.value = r), r;
  }
  unregisterPlugin(e) {
    const t = super.unregisterPlugin(e);
    return this.reactiveState && t && (this.reactiveState.value = t), t;
  }
}
const Xw = ze({
  name: "EditorContent",
  props: {
    editor: {
      default: null,
      type: Object
    }
  },
  setup(n) {
    const e = Ke(), t = up();
    return fp(() => {
      const r = n.editor;
      r && r.options.element && e.value && dp(() => {
        if (!e.value || !r.options.element.firstChild)
          return;
        const i = he(e.value);
        e.value.append(...r.options.element.childNodes), r.contentComponent = t.ctx._, t && (r.appContext = {
          ...t.appContext,
          provides: t.provides
        }), r.setOptions({
          element: i
        }), r.createNodeViews();
      });
    }), Ds(() => {
      const r = n.editor;
      !r || (r.contentComponent = null, r.appContext = null);
    }), { rootEl: e };
  },
  render() {
    return Kn("div", {
      ref: (n) => {
        this.rootEl = n;
      }
    });
  }
});
ze({
  name: "FloatingMenu",
  props: {
    pluginKey: {
      type: null,
      default: "floatingMenu"
    },
    editor: {
      type: Object,
      required: !0
    },
    tippyOptions: {
      type: Object,
      default: () => ({})
    },
    shouldShow: {
      type: Function,
      default: null
    }
  },
  setup(n, { slots: e }) {
    const t = Ke(null);
    return Da(() => {
      const { pluginKey: r, editor: i, tippyOptions: o, shouldShow: s } = n;
      i.registerPlugin(Kh({
        pluginKey: r,
        editor: i,
        element: t.value,
        tippyOptions: o,
        shouldShow: s
      }));
    }), Ds(() => {
      const { pluginKey: r, editor: i } = n;
      i.unregisterPlugin(r);
    }), () => {
      var r;
      return Kn("div", { ref: t }, (r = e.default) === null || r === void 0 ? void 0 : r.call(e));
    };
  }
});
ze({
  name: "NodeViewContent",
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  render() {
    return Kn(this.as, {
      style: {
        whiteSpace: "pre-wrap"
      },
      "data-node-view-content": ""
    });
  }
});
ze({
  name: "NodeViewWrapper",
  props: {
    as: {
      type: String,
      default: "div"
    }
  },
  inject: ["onDragStart", "decorationClasses"],
  render() {
    var n, e;
    return Kn(this.as, {
      class: this.decorationClasses,
      style: {
        whiteSpace: "normal"
      },
      "data-node-view-wrapper": "",
      onDragstart: this.onDragStart
    }, (e = (n = this.$slots).default) === null || e === void 0 ? void 0 : e.call(n));
  }
});
const Qw = (n = {}) => {
  const e = hp();
  return Da(() => {
    e.value = new Yw(n);
  }), Ds(() => {
    var t, r, i;
    const o = (t = e.value) === null || t === void 0 ? void 0 : t.options.element, s = o == null ? void 0 : o.cloneNode(!0);
    (r = o == null ? void 0 : o.parentNode) === null || r === void 0 || r.replaceChild(s, o), (i = e.value) === null || i === void 0 || i.destroy();
  }), e;
};
function mx(n, e, t, r = "bi-text-left") {
  vc[n] = t, Ms.push({
    type: "Turn into",
    icon: r,
    label: e,
    blockType: n
  });
}
function hf(n) {
  return n.replace(/\*\*(.*?)\*\*/gim, "<strong>$1</strong>").replace(/\*(.*?)\*/gim, "<em>$1</em>").trim();
}
function Os(n) {
  return n.replaceAll("<p>", "").replaceAll("</p>", "").replaceAll("<strong>", "**").replaceAll("</strong>", "**").replaceAll("<em>", "*").replaceAll("</em>", "*").replaceAll(/\<br.*?\>/g, "");
}
const Zw = { class: "editor-wrapper" }, ek = /* @__PURE__ */ ze({
  __name: "Editor",
  props: {
    modelValue: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  setup(n, { emit: e }) {
    const t = n, r = e, i = bf({
      get() {
        const l = t.modelValue;
        return l ? hf(l) : "<p></p>";
      },
      set(l) {
        r("update:modelValue", l);
      }
    }), o = Qw({
      extensions: [
        kb,
        xb,
        Sb,
        Mb,
        Rb,
        jb,
        h1.configure({
          openOnClick: !1,
          HTMLAttributes: {
            rel: "noopener noreferrer",
            class: "text-blue-500 hover:underline"
          }
        }),
        Wb.configure({
          placeholder: "Type '/' for a menu"
        })
      ],
      editorProps: {
        handleDrop: () => !0
      },
      content: i.value,
      onUpdate: () => {
        var l;
        i.value = Os(((l = o.value) == null ? void 0 : l.getHTML()) || "");
      }
    }), s = () => {
      if (!o.value)
        return;
      const l = o.value.getAttributes("link").href, a = window.prompt("URL", l);
      if (a !== null) {
        if (a === "") {
          o.value.chain().focus().unsetLink().run();
          return;
        }
        o.value.chain().focus().setLink({ href: a }).run();
      }
    };
    return wf(() => t.modelValue, (l) => {
      var c, u;
      Os(((c = o.value) == null ? void 0 : c.getHTML()) || "") !== l && ((u = o.value) == null || u.commands.setContent(hf(l), !1));
    }), (l, a) => (me(), qe("div", Zw, [
      vt(he(Xw), {
        editor: he(o),
        spellcheck: "false",
        onKeyupCapture: $l(Mo(() => {
        }, ["prevent"]), ["enter"]),
        onKeydownCapture: $l(Mo(() => {
        }, ["prevent"]), ["enter"])
      }, null, 8, ["editor", "onKeyupCapture", "onKeydownCapture"]),
      he(o) ? (me(), Br(he(Gw), {
        key: 0,
        class: "bubble-menu",
        editor: he(o),
        "tippy-options": { duration: 100 }
      }, {
        default: Sr(() => [
          We("button", {
            class: wt(["bubble-menu-item", { "is-active": he(o).isActive("bold") }]),
            onClick: a[0] || (a[0] = (c) => he(o).chain().focus().toggleBold().run())
          }, " bold ", 2),
          We("button", {
            class: wt(["bubble-menu-item", { "is-active": he(o).isActive("italic") }]),
            onClick: a[1] || (a[1] = (c) => he(o).chain().focus().toggleItalic().run())
          }, " italic ", 2),
          We("button", {
            class: wt(["bubble-menu-item", { "is-active": he(o).isActive("link") }]),
            onClick: s
          }, " link ", 2)
        ]),
        _: 1
      }, 8, ["editor"])) : un("v-if", !0)
    ]));
  }
});
const en = (n, e) => {
  const t = n.__vccOpts || n;
  for (const [r, i] of e)
    t[r] = i;
  return t;
}, qh = /* @__PURE__ */ en(ek, [["__file", "/Users/mateuszwozniak/repos/lotion/src/components/elements/Editor.vue"]]), tk = ["innerHTML"], nk = /* @__PURE__ */ ze({
  __name: "TextBlock",
  props: {
    block: {
      type: Object,
      required: !0
    },
    readonly: {
      type: Boolean,
      default: !1
    }
  },
  setup(n) {
    const e = n;
    return (t, r) => e.readonly ? (me(), qe("div", {
      key: 1,
      innerHTML: e.block.details.value,
      class: "py-1.5"
    }, null, 8, tk)) : (me(), Br(qh, {
      key: 0,
      modelValue: e.block.details.value,
      "onUpdate:modelValue": r[0] || (r[0] = (i) => e.block.details.value = i),
      class: "py-1.5"
    }, null, 8, ["modelValue"]));
  }
}), rk = /* @__PURE__ */ en(nk, [["__file", "/Users/mateuszwozniak/repos/lotion/src/components/blocks/TextBlock.vue"]]), ik = { class: "w-full py-0 h-[1px] bg-neutral-300 mt-[1.2rem]" }, ok = /* @__PURE__ */ ze({
  __name: "DividerBlock",
  props: {
    block: {
      type: Object,
      required: !0
    },
    readonly: {
      type: Boolean,
      default: !1
    }
  },
  setup(n) {
    return (e, t) => (me(), qe("div", ik));
  }
}), sk = /* @__PURE__ */ en(ok, [["__file", "/Users/mateuszwozniak/repos/lotion/src/components/blocks/DividerBlock.vue"]]), lk = ["contenteditable", "block-type", "data-ph"], ak = /* @__PURE__ */ ze({
  __name: "HeadingBlock",
  props: {
    block: {
      type: Object,
      required: !0
    },
    readonly: {
      type: Boolean,
      default: !1
    }
  },
  setup(n) {
    const e = {
      [L.H1]: {
        placeholder: "Heading 1",
        class: "text-4xl font-semibold"
      },
      [L.H2]: {
        placeholder: "Heading 2",
        class: "text-3xl font-medium"
      },
      [L.H3]: {
        placeholder: "Heading 3",
        class: "text-2xl font-medium"
      },
      [L.Text]: null,
      [L.Divider]: null,
      [L.Quote]: null
    }, t = n, r = Ke();
    return (i, o) => {
      var s, l;
      return me(), qe("div", {
        ref_key: "content",
        ref: r,
        contenteditable: !t.readonly,
        spellcheck: "false",
        onBlur: o[0] || (o[0] = (a) => {
          var c;
          return t.block.details.value = (c = r.value) == null ? void 0 : c.innerText;
        }),
        class: wt(["focus:outline-none focus-visible:outline-none w-full py-1.5 font-semibold", (s = e[t.block.type]) == null ? void 0 : s.class]),
        "block-type": t.block.type,
        "data-ph": (l = e[t.block.type]) == null ? void 0 : l.placeholder
      }, Ao(t.block.details.value), 43, lk);
    };
  }
}), _l = /* @__PURE__ */ en(ak, [["__file", "/Users/mateuszwozniak/repos/lotion/src/components/blocks/HeadingBlock.vue"]]), ck = ["innerHTML"], uk = /* @__PURE__ */ ze({
  __name: "QuoteBlock",
  props: {
    block: {
      type: Object,
      required: !0
    },
    readonly: {
      type: Boolean,
      default: !1
    }
  },
  setup(n) {
    const e = n;
    return (t, r) => e.readonly ? (me(), qe("div", {
      key: 1,
      innerHTML: e.block.details.value,
      class: "py-1.5 border-l-3 border-black border-solid px-3"
    }, null, 8, ck)) : (me(), Br(qh, {
      key: 0,
      modelValue: e.block.details.value,
      "onUpdate:modelValue": r[0] || (r[0] = (i) => e.block.details.value = i),
      class: "py-1.5 border-l-3 border-black border-solid px-3"
    }, null, 8, ["modelValue"]));
  }
}), fk = /* @__PURE__ */ en(uk, [["__file", "/Users/mateuszwozniak/repos/lotion/src/components/blocks/QuoteBlock.vue"]]);
var L;
(function(n) {
  n.Text = "TEXT", n.H1 = "H1", n.H2 = "H2", n.H3 = "H3", n.Divider = "DIVIDER", n.Quote = "QUOTE";
})(L || (L = {}));
const vc = {
  [L.Text]: rk,
  [L.H1]: _l,
  [L.H2]: _l,
  [L.H3]: _l,
  [L.Divider]: sk,
  [L.Quote]: fk
}, Jh = [L.Text, L.Quote], Ut = (n) => Jh.some((e) => e === n), Ms = [
  {
    type: "Turn into",
    icon: "bi-text-left",
    label: "Text",
    blockType: L.Text
  },
  {
    type: "Turn into",
    icon: "bi-type-h1",
    label: "Heading 1",
    blockType: L.H1
  },
  {
    type: "Turn into",
    icon: "bi-type-h2",
    label: "Heading 2",
    blockType: L.H2
  },
  {
    type: "Turn into",
    icon: "bi-type-h3",
    label: "Heading 3",
    blockType: L.H3
  },
  {
    type: "Turn into",
    icon: "bi-hr",
    label: "Divider",
    blockType: L.Divider
  },
  {
    type: "Turn into",
    icon: "bi-quote",
    label: "Quote",
    blockType: L.Quote
  }
], gx = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  get BlockType() {
    return L;
  },
  BlockComponents: vc,
  textBlockMap: Jh,
  isTextBlock: Ut,
  availableBlockTypes: Ms
}, Symbol.toStringTag, { value: "Module" }));
function Qt(n) {
  return Array.isArray ? Array.isArray(n) : Xh(n) === "[object Array]";
}
const dk = 1 / 0;
function hk(n) {
  if (typeof n == "string")
    return n;
  let e = n + "";
  return e == "0" && 1 / n == -dk ? "-0" : e;
}
function pk(n) {
  return n == null ? "" : hk(n);
}
function At(n) {
  return typeof n == "string";
}
function Gh(n) {
  return typeof n == "number";
}
function mk(n) {
  return n === !0 || n === !1 || gk(n) && Xh(n) == "[object Boolean]";
}
function Yh(n) {
  return typeof n == "object";
}
function gk(n) {
  return Yh(n) && n !== null;
}
function Ze(n) {
  return n != null;
}
function Fl(n) {
  return !n.trim().length;
}
function Xh(n) {
  return n == null ? n === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(n);
}
const yk = "Incorrect 'index' type", vk = (n) => `Invalid value for key ${n}`, bk = (n) => `Pattern length exceeds max of ${n}.`, wk = (n) => `Missing ${n} property in key`, kk = (n) => `Property 'weight' in key '${n}' must be a positive integer`, pf = Object.prototype.hasOwnProperty;
class xk {
  constructor(e) {
    this._keys = [], this._keyMap = {};
    let t = 0;
    e.forEach((r) => {
      let i = Qh(r);
      t += i.weight, this._keys.push(i), this._keyMap[i.id] = i, t += i.weight;
    }), this._keys.forEach((r) => {
      r.weight /= t;
    });
  }
  get(e) {
    return this._keyMap[e];
  }
  keys() {
    return this._keys;
  }
  toJSON() {
    return JSON.stringify(this._keys);
  }
}
function Qh(n) {
  let e = null, t = null, r = null, i = 1, o = null;
  if (At(n) || Qt(n))
    r = n, e = mf(n), t = xa(n);
  else {
    if (!pf.call(n, "name"))
      throw new Error(wk("name"));
    const s = n.name;
    if (r = s, pf.call(n, "weight") && (i = n.weight, i <= 0))
      throw new Error(kk(s));
    e = mf(s), t = xa(s), o = n.getFn;
  }
  return { path: e, id: t, weight: i, src: r, getFn: o };
}
function mf(n) {
  return Qt(n) ? n : n.split(".");
}
function xa(n) {
  return Qt(n) ? n.join(".") : n;
}
function Sk(n, e) {
  let t = [], r = !1;
  const i = (o, s, l) => {
    if (!!Ze(o))
      if (!s[l])
        t.push(o);
      else {
        let a = s[l];
        const c = o[a];
        if (!Ze(c))
          return;
        if (l === s.length - 1 && (At(c) || Gh(c) || mk(c)))
          t.push(pk(c));
        else if (Qt(c)) {
          r = !0;
          for (let u = 0, f = c.length; u < f; u += 1)
            i(c[u], s, l + 1);
        } else
          s.length && i(c, s, l + 1);
      }
  };
  return i(n, At(e) ? e.split(".") : e, 0), r ? t : t[0];
}
const Ek = {
  includeMatches: !1,
  findAllMatches: !1,
  minMatchCharLength: 1
}, Ck = {
  isCaseSensitive: !1,
  includeScore: !1,
  keys: [],
  shouldSort: !0,
  sortFn: (n, e) => n.score === e.score ? n.idx < e.idx ? -1 : 1 : n.score < e.score ? -1 : 1
}, Tk = {
  location: 0,
  threshold: 0.6,
  distance: 100
}, Ok = {
  useExtendedSearch: !1,
  getFn: Sk,
  ignoreLocation: !1,
  ignoreFieldNorm: !1,
  fieldNormWeight: 1
};
var W = {
  ...Ck,
  ...Ek,
  ...Tk,
  ...Ok
};
const Mk = /[^ ]+/g;
function Ak(n = 1, e = 3) {
  const t = /* @__PURE__ */ new Map(), r = Math.pow(10, e);
  return {
    get(i) {
      const o = i.match(Mk).length;
      if (t.has(o))
        return t.get(o);
      const s = 1 / Math.pow(o, 0.5 * n), l = parseFloat(Math.round(s * r) / r);
      return t.set(o, l), l;
    },
    clear() {
      t.clear();
    }
  };
}
class bc {
  constructor({
    getFn: e = W.getFn,
    fieldNormWeight: t = W.fieldNormWeight
  } = {}) {
    this.norm = Ak(t, 3), this.getFn = e, this.isCreated = !1, this.setIndexRecords();
  }
  setSources(e = []) {
    this.docs = e;
  }
  setIndexRecords(e = []) {
    this.records = e;
  }
  setKeys(e = []) {
    this.keys = e, this._keysMap = {}, e.forEach((t, r) => {
      this._keysMap[t.id] = r;
    });
  }
  create() {
    this.isCreated || !this.docs.length || (this.isCreated = !0, At(this.docs[0]) ? this.docs.forEach((e, t) => {
      this._addString(e, t);
    }) : this.docs.forEach((e, t) => {
      this._addObject(e, t);
    }), this.norm.clear());
  }
  add(e) {
    const t = this.size();
    At(e) ? this._addString(e, t) : this._addObject(e, t);
  }
  removeAt(e) {
    this.records.splice(e, 1);
    for (let t = e, r = this.size(); t < r; t += 1)
      this.records[t].i -= 1;
  }
  getValueForItemAtKeyId(e, t) {
    return e[this._keysMap[t]];
  }
  size() {
    return this.records.length;
  }
  _addString(e, t) {
    if (!Ze(e) || Fl(e))
      return;
    let r = {
      v: e,
      i: t,
      n: this.norm.get(e)
    };
    this.records.push(r);
  }
  _addObject(e, t) {
    let r = { i: t, $: {} };
    this.keys.forEach((i, o) => {
      let s = i.getFn ? i.getFn(e) : this.getFn(e, i.path);
      if (!!Ze(s)) {
        if (Qt(s)) {
          let l = [];
          const a = [{ nestedArrIndex: -1, value: s }];
          for (; a.length; ) {
            const { nestedArrIndex: c, value: u } = a.pop();
            if (!!Ze(u))
              if (At(u) && !Fl(u)) {
                let f = {
                  v: u,
                  i: c,
                  n: this.norm.get(u)
                };
                l.push(f);
              } else
                Qt(u) && u.forEach((f, d) => {
                  a.push({
                    nestedArrIndex: d,
                    value: f
                  });
                });
          }
          r.$[o] = l;
        } else if (At(s) && !Fl(s)) {
          let l = {
            v: s,
            n: this.norm.get(s)
          };
          r.$[o] = l;
        }
      }
    }), this.records.push(r);
  }
  toJSON() {
    return {
      keys: this.keys,
      records: this.records
    };
  }
}
function Zh(n, e, { getFn: t = W.getFn, fieldNormWeight: r = W.fieldNormWeight } = {}) {
  const i = new bc({ getFn: t, fieldNormWeight: r });
  return i.setKeys(n.map(Qh)), i.setSources(e), i.create(), i;
}
function Dk(n, { getFn: e = W.getFn, fieldNormWeight: t = W.fieldNormWeight } = {}) {
  const { keys: r, records: i } = n, o = new bc({ getFn: e, fieldNormWeight: t });
  return o.setKeys(r), o.setIndexRecords(i), o;
}
function go(n, {
  errors: e = 0,
  currentLocation: t = 0,
  expectedLocation: r = 0,
  distance: i = W.distance,
  ignoreLocation: o = W.ignoreLocation
} = {}) {
  const s = e / n.length;
  if (o)
    return s;
  const l = Math.abs(r - t);
  return i ? s + l / i : l ? 1 : s;
}
function Nk(n = [], e = W.minMatchCharLength) {
  let t = [], r = -1, i = -1, o = 0;
  for (let s = n.length; o < s; o += 1) {
    let l = n[o];
    l && r === -1 ? r = o : !l && r !== -1 && (i = o - 1, i - r + 1 >= e && t.push([r, i]), r = -1);
  }
  return n[o - 1] && o - r >= e && t.push([r, o - 1]), t;
}
const Bn = 32;
function Ik(n, e, t, {
  location: r = W.location,
  distance: i = W.distance,
  threshold: o = W.threshold,
  findAllMatches: s = W.findAllMatches,
  minMatchCharLength: l = W.minMatchCharLength,
  includeMatches: a = W.includeMatches,
  ignoreLocation: c = W.ignoreLocation
} = {}) {
  if (e.length > Bn)
    throw new Error(bk(Bn));
  const u = e.length, f = n.length, d = Math.max(0, Math.min(r, f));
  let h = o, p = d;
  const m = l > 1 || a, g = m ? Array(f) : [];
  let v;
  for (; (v = n.indexOf(e, p)) > -1; ) {
    let D = go(e, {
      currentLocation: v,
      expectedLocation: d,
      distance: i,
      ignoreLocation: c
    });
    if (h = Math.min(D, h), p = v + u, m) {
      let B = 0;
      for (; B < u; )
        g[v + B] = 1, B += 1;
    }
  }
  p = -1;
  let w = [], E = 1, y = u + f;
  const T = 1 << u - 1;
  for (let D = 0; D < u; D += 1) {
    let B = 0, A = y;
    for (; B < A; )
      go(e, {
        errors: D,
        currentLocation: d + A,
        expectedLocation: d,
        distance: i,
        ignoreLocation: c
      }) <= h ? B = A : y = A, A = Math.floor((y - B) / 2 + B);
    y = A;
    let $ = Math.max(1, d - A + 1), K = s ? f : Math.min(d + A, f) + u, U = Array(K + 2);
    U[K + 1] = (1 << D) - 1;
    for (let Y = K; Y >= $; Y -= 1) {
      let re = Y - 1, k = t[n.charAt(re)];
      if (m && (g[re] = +!!k), U[Y] = (U[Y + 1] << 1 | 1) & k, D && (U[Y] |= (w[Y + 1] | w[Y]) << 1 | 1 | w[Y + 1]), U[Y] & T && (E = go(e, {
        errors: D,
        currentLocation: re,
        expectedLocation: d,
        distance: i,
        ignoreLocation: c
      }), E <= h)) {
        if (h = E, p = re, p <= d)
          break;
        $ = Math.max(1, 2 * d - p);
      }
    }
    if (go(e, {
      errors: D + 1,
      currentLocation: d,
      expectedLocation: d,
      distance: i,
      ignoreLocation: c
    }) > h)
      break;
    w = U;
  }
  const b = {
    isMatch: p >= 0,
    score: Math.max(1e-3, E)
  };
  if (m) {
    const D = Nk(g, l);
    D.length ? a && (b.indices = D) : b.isMatch = !1;
  }
  return b;
}
function Rk(n) {
  let e = {};
  for (let t = 0, r = n.length; t < r; t += 1) {
    const i = n.charAt(t);
    e[i] = (e[i] || 0) | 1 << r - t - 1;
  }
  return e;
}
class ep {
  constructor(e, {
    location: t = W.location,
    threshold: r = W.threshold,
    distance: i = W.distance,
    includeMatches: o = W.includeMatches,
    findAllMatches: s = W.findAllMatches,
    minMatchCharLength: l = W.minMatchCharLength,
    isCaseSensitive: a = W.isCaseSensitive,
    ignoreLocation: c = W.ignoreLocation
  } = {}) {
    if (this.options = {
      location: t,
      threshold: r,
      distance: i,
      includeMatches: o,
      findAllMatches: s,
      minMatchCharLength: l,
      isCaseSensitive: a,
      ignoreLocation: c
    }, this.pattern = a ? e : e.toLowerCase(), this.chunks = [], !this.pattern.length)
      return;
    const u = (d, h) => {
      this.chunks.push({
        pattern: d,
        alphabet: Rk(d),
        startIndex: h
      });
    }, f = this.pattern.length;
    if (f > Bn) {
      let d = 0;
      const h = f % Bn, p = f - h;
      for (; d < p; )
        u(this.pattern.substr(d, Bn), d), d += Bn;
      if (h) {
        const m = f - Bn;
        u(this.pattern.substr(m), m);
      }
    } else
      u(this.pattern, 0);
  }
  searchIn(e) {
    const { isCaseSensitive: t, includeMatches: r } = this.options;
    if (t || (e = e.toLowerCase()), this.pattern === e) {
      let p = {
        isMatch: !0,
        score: 0
      };
      return r && (p.indices = [[0, e.length - 1]]), p;
    }
    const {
      location: i,
      distance: o,
      threshold: s,
      findAllMatches: l,
      minMatchCharLength: a,
      ignoreLocation: c
    } = this.options;
    let u = [], f = 0, d = !1;
    this.chunks.forEach(({ pattern: p, alphabet: m, startIndex: g }) => {
      const { isMatch: v, score: w, indices: E } = Ik(e, p, m, {
        location: i + g,
        distance: o,
        threshold: s,
        findAllMatches: l,
        minMatchCharLength: a,
        includeMatches: r,
        ignoreLocation: c
      });
      v && (d = !0), f += w, v && E && (u = [...u, ...E]);
    });
    let h = {
      isMatch: d,
      score: d ? f / this.chunks.length : 1
    };
    return d && r && (h.indices = u), h;
  }
}
class Tn {
  constructor(e) {
    this.pattern = e;
  }
  static isMultiMatch(e) {
    return gf(e, this.multiRegex);
  }
  static isSingleMatch(e) {
    return gf(e, this.singleRegex);
  }
  search() {
  }
}
function gf(n, e) {
  const t = n.match(e);
  return t ? t[1] : null;
}
class Pk extends Tn {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "exact";
  }
  static get multiRegex() {
    return /^="(.*)"$/;
  }
  static get singleRegex() {
    return /^=(.*)$/;
  }
  search(e) {
    const t = e === this.pattern;
    return {
      isMatch: t,
      score: t ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class Lk extends Tn {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "inverse-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"$/;
  }
  static get singleRegex() {
    return /^!(.*)$/;
  }
  search(e) {
    const r = e.indexOf(this.pattern) === -1;
    return {
      isMatch: r,
      score: r ? 0 : 1,
      indices: [0, e.length - 1]
    };
  }
}
class Bk extends Tn {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "prefix-exact";
  }
  static get multiRegex() {
    return /^\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^\^(.*)$/;
  }
  search(e) {
    const t = e.startsWith(this.pattern);
    return {
      isMatch: t,
      score: t ? 0 : 1,
      indices: [0, this.pattern.length - 1]
    };
  }
}
class _k extends Tn {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "inverse-prefix-exact";
  }
  static get multiRegex() {
    return /^!\^"(.*)"$/;
  }
  static get singleRegex() {
    return /^!\^(.*)$/;
  }
  search(e) {
    const t = !e.startsWith(this.pattern);
    return {
      isMatch: t,
      score: t ? 0 : 1,
      indices: [0, e.length - 1]
    };
  }
}
class Fk extends Tn {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "suffix-exact";
  }
  static get multiRegex() {
    return /^"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^(.*)\$$/;
  }
  search(e) {
    const t = e.endsWith(this.pattern);
    return {
      isMatch: t,
      score: t ? 0 : 1,
      indices: [e.length - this.pattern.length, e.length - 1]
    };
  }
}
class $k extends Tn {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "inverse-suffix-exact";
  }
  static get multiRegex() {
    return /^!"(.*)"\$$/;
  }
  static get singleRegex() {
    return /^!(.*)\$$/;
  }
  search(e) {
    const t = !e.endsWith(this.pattern);
    return {
      isMatch: t,
      score: t ? 0 : 1,
      indices: [0, e.length - 1]
    };
  }
}
class tp extends Tn {
  constructor(e, {
    location: t = W.location,
    threshold: r = W.threshold,
    distance: i = W.distance,
    includeMatches: o = W.includeMatches,
    findAllMatches: s = W.findAllMatches,
    minMatchCharLength: l = W.minMatchCharLength,
    isCaseSensitive: a = W.isCaseSensitive,
    ignoreLocation: c = W.ignoreLocation
  } = {}) {
    super(e), this._bitapSearch = new ep(e, {
      location: t,
      threshold: r,
      distance: i,
      includeMatches: o,
      findAllMatches: s,
      minMatchCharLength: l,
      isCaseSensitive: a,
      ignoreLocation: c
    });
  }
  static get type() {
    return "fuzzy";
  }
  static get multiRegex() {
    return /^"(.*)"$/;
  }
  static get singleRegex() {
    return /^(.*)$/;
  }
  search(e) {
    return this._bitapSearch.searchIn(e);
  }
}
class np extends Tn {
  constructor(e) {
    super(e);
  }
  static get type() {
    return "include";
  }
  static get multiRegex() {
    return /^'"(.*)"$/;
  }
  static get singleRegex() {
    return /^'(.*)$/;
  }
  search(e) {
    let t = 0, r;
    const i = [], o = this.pattern.length;
    for (; (r = e.indexOf(this.pattern, t)) > -1; )
      t = r + o, i.push([r, t - 1]);
    const s = !!i.length;
    return {
      isMatch: s,
      score: s ? 0 : 1,
      indices: i
    };
  }
}
const Sa = [
  Pk,
  np,
  Bk,
  _k,
  $k,
  Fk,
  Lk,
  tp
], yf = Sa.length, zk = / +(?=(?:[^\"]*\"[^\"]*\")*[^\"]*$)/, Hk = "|";
function Vk(n, e = {}) {
  return n.split(Hk).map((t) => {
    let r = t.trim().split(zk).filter((o) => o && !!o.trim()), i = [];
    for (let o = 0, s = r.length; o < s; o += 1) {
      const l = r[o];
      let a = !1, c = -1;
      for (; !a && ++c < yf; ) {
        const u = Sa[c];
        let f = u.isMultiMatch(l);
        f && (i.push(new u(f, e)), a = !0);
      }
      if (!a)
        for (c = -1; ++c < yf; ) {
          const u = Sa[c];
          let f = u.isSingleMatch(l);
          if (f) {
            i.push(new u(f, e));
            break;
          }
        }
    }
    return i;
  });
}
const jk = /* @__PURE__ */ new Set([tp.type, np.type]);
class Wk {
  constructor(e, {
    isCaseSensitive: t = W.isCaseSensitive,
    includeMatches: r = W.includeMatches,
    minMatchCharLength: i = W.minMatchCharLength,
    ignoreLocation: o = W.ignoreLocation,
    findAllMatches: s = W.findAllMatches,
    location: l = W.location,
    threshold: a = W.threshold,
    distance: c = W.distance
  } = {}) {
    this.query = null, this.options = {
      isCaseSensitive: t,
      includeMatches: r,
      minMatchCharLength: i,
      findAllMatches: s,
      ignoreLocation: o,
      location: l,
      threshold: a,
      distance: c
    }, this.pattern = t ? e : e.toLowerCase(), this.query = Vk(this.pattern, this.options);
  }
  static condition(e, t) {
    return t.useExtendedSearch;
  }
  searchIn(e) {
    const t = this.query;
    if (!t)
      return {
        isMatch: !1,
        score: 1
      };
    const { includeMatches: r, isCaseSensitive: i } = this.options;
    e = i ? e : e.toLowerCase();
    let o = 0, s = [], l = 0;
    for (let a = 0, c = t.length; a < c; a += 1) {
      const u = t[a];
      s.length = 0, o = 0;
      for (let f = 0, d = u.length; f < d; f += 1) {
        const h = u[f], { isMatch: p, indices: m, score: g } = h.search(e);
        if (p) {
          if (o += 1, l += g, r) {
            const v = h.constructor.type;
            jk.has(v) ? s = [...s, ...m] : s.push(m);
          }
        } else {
          l = 0, o = 0, s.length = 0;
          break;
        }
      }
      if (o) {
        let f = {
          isMatch: !0,
          score: l / o
        };
        return r && (f.indices = s), f;
      }
    }
    return {
      isMatch: !1,
      score: 1
    };
  }
}
const Ea = [];
function Uk(...n) {
  Ea.push(...n);
}
function Ca(n, e) {
  for (let t = 0, r = Ea.length; t < r; t += 1) {
    let i = Ea[t];
    if (i.condition(n, e))
      return new i(n, e);
  }
  return new ep(n, e);
}
const As = {
  AND: "$and",
  OR: "$or"
}, Ta = {
  PATH: "$path",
  PATTERN: "$val"
}, Oa = (n) => !!(n[As.AND] || n[As.OR]), Kk = (n) => !!n[Ta.PATH], qk = (n) => !Qt(n) && Yh(n) && !Oa(n), vf = (n) => ({
  [As.AND]: Object.keys(n).map((e) => ({
    [e]: n[e]
  }))
});
function rp(n, e, { auto: t = !0 } = {}) {
  const r = (i) => {
    let o = Object.keys(i);
    const s = Kk(i);
    if (!s && o.length > 1 && !Oa(i))
      return r(vf(i));
    if (qk(i)) {
      const a = s ? i[Ta.PATH] : o[0], c = s ? i[Ta.PATTERN] : i[a];
      if (!At(c))
        throw new Error(vk(a));
      const u = {
        keyId: xa(a),
        pattern: c
      };
      return t && (u.searcher = Ca(c, e)), u;
    }
    let l = {
      children: [],
      operator: o[0]
    };
    return o.forEach((a) => {
      const c = i[a];
      Qt(c) && c.forEach((u) => {
        l.children.push(r(u));
      });
    }), l;
  };
  return Oa(n) || (n = vf(n)), r(n);
}
function Jk(n, { ignoreFieldNorm: e = W.ignoreFieldNorm }) {
  n.forEach((t) => {
    let r = 1;
    t.matches.forEach(({ key: i, norm: o, score: s }) => {
      const l = i ? i.weight : null;
      r *= Math.pow(
        s === 0 && l ? Number.EPSILON : s,
        (l || 1) * (e ? 1 : o)
      );
    }), t.score = r;
  });
}
function Gk(n, e) {
  const t = n.matches;
  e.matches = [], Ze(t) && t.forEach((r) => {
    if (!Ze(r.indices) || !r.indices.length)
      return;
    const { indices: i, value: o } = r;
    let s = {
      indices: i,
      value: o
    };
    r.key && (s.key = r.key.src), r.idx > -1 && (s.refIndex = r.idx), e.matches.push(s);
  });
}
function Yk(n, e) {
  e.score = n.score;
}
function Xk(n, e, {
  includeMatches: t = W.includeMatches,
  includeScore: r = W.includeScore
} = {}) {
  const i = [];
  return t && i.push(Gk), r && i.push(Yk), n.map((o) => {
    const { idx: s } = o, l = {
      item: e[s],
      refIndex: s
    };
    return i.length && i.forEach((a) => {
      a(o, l);
    }), l;
  });
}
class $r {
  constructor(e, t = {}, r) {
    this.options = { ...W, ...t }, this.options.useExtendedSearch, this._keyStore = new xk(this.options.keys), this.setCollection(e, r);
  }
  setCollection(e, t) {
    if (this._docs = e, t && !(t instanceof bc))
      throw new Error(yk);
    this._myIndex = t || Zh(this.options.keys, this._docs, {
      getFn: this.options.getFn,
      fieldNormWeight: this.options.fieldNormWeight
    });
  }
  add(e) {
    !Ze(e) || (this._docs.push(e), this._myIndex.add(e));
  }
  remove(e = () => !1) {
    const t = [];
    for (let r = 0, i = this._docs.length; r < i; r += 1) {
      const o = this._docs[r];
      e(o, r) && (this.removeAt(r), r -= 1, i -= 1, t.push(o));
    }
    return t;
  }
  removeAt(e) {
    this._docs.splice(e, 1), this._myIndex.removeAt(e);
  }
  getIndex() {
    return this._myIndex;
  }
  search(e, { limit: t = -1 } = {}) {
    const {
      includeMatches: r,
      includeScore: i,
      shouldSort: o,
      sortFn: s,
      ignoreFieldNorm: l
    } = this.options;
    let a = At(e) ? At(this._docs[0]) ? this._searchStringList(e) : this._searchObjectList(e) : this._searchLogical(e);
    return Jk(a, { ignoreFieldNorm: l }), o && a.sort(s), Gh(t) && t > -1 && (a = a.slice(0, t)), Xk(a, this._docs, {
      includeMatches: r,
      includeScore: i
    });
  }
  _searchStringList(e) {
    const t = Ca(e, this.options), { records: r } = this._myIndex, i = [];
    return r.forEach(({ v: o, i: s, n: l }) => {
      if (!Ze(o))
        return;
      const { isMatch: a, score: c, indices: u } = t.searchIn(o);
      a && i.push({
        item: o,
        idx: s,
        matches: [{ score: c, value: o, norm: l, indices: u }]
      });
    }), i;
  }
  _searchLogical(e) {
    const t = rp(e, this.options), r = (l, a, c) => {
      if (!l.children) {
        const { keyId: f, searcher: d } = l, h = this._findMatches({
          key: this._keyStore.get(f),
          value: this._myIndex.getValueForItemAtKeyId(a, f),
          searcher: d
        });
        return h && h.length ? [
          {
            idx: c,
            item: a,
            matches: h
          }
        ] : [];
      }
      const u = [];
      for (let f = 0, d = l.children.length; f < d; f += 1) {
        const h = l.children[f], p = r(h, a, c);
        if (p.length)
          u.push(...p);
        else if (l.operator === As.AND)
          return [];
      }
      return u;
    }, i = this._myIndex.records, o = {}, s = [];
    return i.forEach(({ $: l, i: a }) => {
      if (Ze(l)) {
        let c = r(t, l, a);
        c.length && (o[a] || (o[a] = { idx: a, item: l, matches: [] }, s.push(o[a])), c.forEach(({ matches: u }) => {
          o[a].matches.push(...u);
        }));
      }
    }), s;
  }
  _searchObjectList(e) {
    const t = Ca(e, this.options), { keys: r, records: i } = this._myIndex, o = [];
    return i.forEach(({ $: s, i: l }) => {
      if (!Ze(s))
        return;
      let a = [];
      r.forEach((c, u) => {
        a.push(
          ...this._findMatches({
            key: c,
            value: s[u],
            searcher: t
          })
        );
      }), a.length && o.push({
        idx: l,
        item: s,
        matches: a
      });
    }), o;
  }
  _findMatches({ key: e, value: t, searcher: r }) {
    if (!Ze(t))
      return [];
    let i = [];
    if (Qt(t))
      t.forEach(({ v: o, i: s, n: l }) => {
        if (!Ze(o))
          return;
        const { isMatch: a, score: c, indices: u } = r.searchIn(o);
        a && i.push({
          score: c,
          key: e,
          value: o,
          idx: s,
          norm: l,
          indices: u
        });
      });
    else {
      const { v: o, n: s } = t, { isMatch: l, score: a, indices: c } = r.searchIn(o);
      l && i.push({ score: a, key: e, value: o, norm: s, indices: c });
    }
    return i;
  }
}
$r.version = "6.6.2";
$r.createIndex = Zh;
$r.parseIndex = Dk;
$r.config = W;
$r.parseQuery = rp;
Uk(Wk);
const Qk = { class: "relative group-tooltip" }, Zk = ["innerHTML"], ex = /* @__PURE__ */ ze({
  __name: "Tooltip",
  props: {
    value: {
      type: String,
      default: "Hello World"
    },
    disabled: {
      type: Boolean,
      default: !1
    }
  },
  setup(n) {
    const e = n;
    return (t, r) => (me(), qe("div", Qk, [
      gp(t.$slots, "default"),
      We("div", {
        class: wt(["z-10 absolute translate-y-2 left-1/2 -translate-x-1/2 w-max text-white bg-neutral-800 text-sm font-medium px-2 py-1 rounded opacity-0 pointer-events-none transition duration-150 group-tooltip-hover:delay-500", n.disabled ? "delay-75" : "group-tooltip-hover:opacity-100"]),
        innerHTML: e.value
      }, null, 10, Zk)
    ]));
  }
}), Ma = /* @__PURE__ */ en(ex, [["__file", "/Users/mateuszwozniak/repos/lotion/src/components/elements/Tooltip.vue"]]), tx = { class: "block-menu" }, nx = { class: "text-left divide-y" }, rx = {
  key: 0,
  class: "block-menu-search px-2 py-2 flex gap-2 w-full"
}, ix = { class: "truncate" }, ox = {
  key: 1,
  class: "px-2 py-2"
}, sx = ["onClick", "onMouseover"], lx = { class: "truncate" }, ax = /* @__PURE__ */ ze({
  __name: "BlockMenu",
  props: {
    blockTypes: {
      type: Object,
      default: null
    }
  },
  emits: [
    "setBlockType",
    "clearSearch"
  ],
  setup(n, { expose: e, emit: t }) {
    const r = n, i = t, o = Ke(!1);
    let s = !1;
    const l = Ke(null), a = Ke(null);
    wf(o, (p) => {
      p || (s = !1);
    }), document.addEventListener("click", (p) => {
      !o.value || l.value && l.value.contains(p.target) || (o.value = !1, u.value = "", c.value = 0);
    });
    const c = Ke(0), u = Ke("");
    document.addEventListener("keydown", (p) => {
      !o.value || (["ArrowUp", "ArrowDown"].includes(p.key) ? p.key === "ArrowUp" ? c.value = c.value - 1 >= 0 ? c.value - 1 : d.value.length - 1 : c.value = c.value + 1 <= d.value.length - 1 ? c.value + 1 : 0 : p.key === "ArrowLeft" || p.key === "ArrowRight" ? u.value.length === 0 && (o.value = !1) : p.key === "Enter" ? (p.preventDefault(), h(d.value[c.value].blockType)) : p.key === "Escape" ? (o.value = !1, u.value = "", c.value = 0) : p.key.match(/^([a-zA-Z]|[0-9]| )$/) ? (u.value += p.key, c.value = 0) : p.key === "Backspace" && (u.value.length === 0 ? o.value = !1 : u.value = u.value.slice(0, -1), c.value = 0));
    });
    const f = new $r(Ms, {
      keys: ["label"]
    }), d = bf(() => {
      const p = u.value === "" ? Ms : f.search(u.value).map((m) => m.item);
      return r.blockTypes ? p.filter((m) => {
        var g;
        return (g = r.blockTypes) == null ? void 0 : g.includes(m.blockType);
      }) : p;
    });
    function h(p) {
      i("setBlockType", p, u.value.length, s), u.value = "", o.value = !1;
    }
    return e({
      open: o,
      openedWithSlash: s
    }), (p, m) => {
      const g = Aa("v-icon");
      return me(), qe("div", {
        ref_key: "container",
        ref: l,
        as: "div",
        class: "relative w-max h-max"
      }, [
        We("div", {
          onClick: m[1] || (m[1] = (v) => o.value = !o.value),
          class: "handle",
          "data-test-id": "block-menu"
        }, [
          vt(Ma, { value: "<span class='text-neutral-400'><span class='text-white'>Drag</span> to move<br/><span class='text-white'>Click</span> to open menu</span>" }, {
            default: Sr(() => [
              vt(g, {
                name: "md-dragindicator",
                onMouseup: m[0] || (m[0] = (v) => v.stopPropagation()),
                class: wt(["w-6 h-6 hover:bg-neutral-100 hover:text-neutral-400 p-0.5 rounded group-hover:opacity-100 opacity-0", o.value ? "opacity-100" : ""])
              }, null, 8, ["class"])
            ]),
            _: 1
          })
        ]),
        yp(We("div", tx, [
          We("div", {
            ref_key: "menu",
            ref: a,
            class: "w-[10rem] lg:w-[12rem] xl:w-[16rem] absolute z-10 shadow-block rounded py-1 text-neutral-700 text-sm right-full bg-white max-h-[24rem] overflow-auto focus-visible:outline-none top-0"
          }, [
            We("div", nx, [
              un(" Search term "),
              u.value ? (me(), qe("div", rx, [
                vt(g, {
                  name: "hi-solid-search",
                  class: "w-4 shrink-0"
                }),
                We("div", ix, Ao(u.value), 1)
              ])) : un("v-if", !0),
              un(" Turn into another block like Text, Heading or Divider "),
              d.value.filter((v) => v.type === "Turn into").length ? (me(), qe("div", ox, [
                m[2] || (m[2] = We("div", { class: "px-2 pb-2 font-semibold uppercase text-xs text-neutral-400" }, "Turn into", -1)),
                (me(!0), qe(kf, null, xf(d.value.filter((v) => v.type === "Turn into"), (v, w) => (me(), qe("div", {
                  class: wt(["px-2 py-1 rounded flex items-center gap-2", [c.value === w + d.value.filter((E) => E.type !== "Turn into").length ? "bg-neutral-100" : ""]]),
                  onClick: Mo((E) => {
                    h(v.blockType);
                  }, ["stop"]),
                  onMouseup: Mo(() => {
                  }, ["stop"]),
                  onMouseover: (E) => c.value = w + d.value.filter((y) => y.type !== "Turn into").length
                }, [
                  v.icon ? (me(), Br(g, {
                    key: 0,
                    name: v.icon,
                    class: "w-5 h-5"
                  }, null, 8, ["name"])) : un("v-if", !0),
                  We("span", lx, Ao(v.label), 1)
                ], 42, sx))), 256))
              ])) : un("v-if", !0)
            ])
          ], 512)
        ], 512), [
          [vp, o.value]
        ])
      ], 512);
    };
  }
}), cx = /* @__PURE__ */ en(ax, [["__file", "/Users/mateuszwozniak/repos/lotion/src/components/BlockMenu.vue"]]), ux = /* @__PURE__ */ ze({
  __name: "Block",
  props: {
    block: {
      type: Object,
      default: {
        type: L.Text,
        details: {
          value: "Hello World"
        }
      }
    },
    blockTypes: {
      type: Object,
      default: null
    },
    readonly: {
      type: Boolean,
      default: !1
    },
    isMerging: {
      type: Boolean,
      default: !1
    }
  },
  emits: [
    "deleteBlock",
    "newBlock",
    "moveToPrevChar",
    "moveToNextChar",
    "moveToPrevLine",
    "moveToNextLine",
    "merge",
    "split",
    "setBlockType"
  ],
  setup(n, { expose: e, emit: t }) {
    const r = n, i = t;
    function o() {
      return Ut(r.block.type) ? (d.value.$el.firstChild.firstChild.firstChild.firstChild.childNodes.length > 1, d.value.$el.firstChild.firstChild.firstChild.firstChild) : d.value.$el ? d.value.$el.firstChild || d.value.$el : d.value.firstChild || d.value;
    }
    function s() {
      return Ut(r.block.type) ? d.value.$el.firstChild.firstChild.firstChild.childNodes.length > 1 ? d.value.$el.firstChild.firstChild.firstChild.lastChild : d.value.$el.firstChild.firstChild.firstChild.firstChild : d.value.$el ? d.value.$el.firstChild || d.value.$el : d.value.firstChild || d.value;
    }
    function l() {
      return Ut(r.block.type) ? d.value.$el.firstChild.firstChild.firstChild.firstChild : d.value.$el.firstChild;
    }
    function a() {
      const k = l();
      return k ? k.parentElement ? k.parentElement.textContent : k.textContent : "";
    }
    function c() {
      const k = l();
      return k ? k.parentElement.innerHTML : "";
    }
    function u(k) {
      var S, M;
      k.key === "ArrowUp" ? (S = h.value) != null && S.open ? k.preventDefault() : g() && (k.preventDefault(), i("moveToPrevLine")) : k.key === "ArrowDown" ? (M = h.value) != null && M.open ? k.preventDefault() : v() && (k.preventDefault(), i("moveToNextLine")) : k.key === "ArrowLeft" ? p() && (k.preventDefault(), i("moveToPrevChar")) : k.key === "ArrowRight" ? m() && (k.preventDefault(), i("moveToNextChar")) : k.key === "Backspace" && w() === 0 ? !(h.value && h.value.open) && p() && (k.preventDefault(), i("merge")) : k.key === "Enter" && (k.preventDefault(), !(h.value && h.value.open) && !r.isMerging && i("split"));
    }
    function f() {
      return [L.Text, L.Quote, L.H1, L.H2, L.H3].includes(r.block.type);
    }
    const d = Ke(null), h = Ke(null);
    function p() {
      const k = K(), S = D();
      return (S == null ? void 0 : S.x) === k.x && (S == null ? void 0 : S.y) === k.y;
    }
    function m() {
      const k = U(), S = D();
      return (S == null ? void 0 : S.x) === k.x && (S == null ? void 0 : S.y) === k.y;
    }
    function g() {
      const k = K(), S = D();
      return (S == null ? void 0 : S.y) === k.y;
    }
    function v() {
      const k = U(), S = D();
      return (S == null ? void 0 : S.y) === k.y;
    }
    function w() {
      var k;
      return (k = window.getSelection()) == null ? void 0 : k.toString().length;
    }
    function E() {
      if (console.log("moveToStart"), f()) {
        const k = o();
        if (k) {
          const S = window.getSelection(), M = document.createRange();
          M.selectNodeContents(k), M.collapse(!0), S == null || S.removeAllRanges(), S == null || S.addRange(M);
        }
      } else
        i("moveToNextChar");
    }
    function y() {
      if (console.log("moveToEnd"), f()) {
        const k = s();
        if (k) {
          const S = window.getSelection(), M = document.createRange();
          M.selectNodeContents(k), M.collapse(), S == null || S.removeAllRanges(), S == null || S.addRange(M);
        }
      } else
        i("moveToPrevChar");
    }
    async function T() {
      if (f()) {
        const k = a();
        if (!k)
          E();
        else {
          let S = D(), M = 99999, I = 1;
          for (; ; ) {
            $(I);
            const P = D(), Q = Math.abs((P == null ? void 0 : P.x) - (S == null ? void 0 : S.x));
            if (Q > M) {
              I > 0 && $(I - 1);
              break;
            } else {
              if (I === k.length || I > 999)
                break;
              M = Q, I += 1;
            }
          }
        }
      } else
        i("moveToNextLine");
    }
    async function b() {
      if (f()) {
        const k = a();
        if (!k)
          E();
        else {
          let S = D(), M = 99999, I = k.length;
          for (; ; ) {
            $(I);
            const P = D(), Q = Math.abs((P == null ? void 0 : P.x) - (S == null ? void 0 : S.x));
            if (Q > M) {
              I < k.length && $(I + 1);
              break;
            } else {
              if (I === 0)
                break;
              M = Q, I -= 1;
            }
          }
        }
      } else
        i("moveToPrevLine");
    }
    function D() {
      let k = 0, S = 0;
      const M = window.getSelection();
      if ((M == null ? void 0 : M.rangeCount) > 0) {
        const I = M == null ? void 0 : M.getRangeAt(0);
        if (I != null && I.startContainer.firstChild) {
          const Q = document.createRange();
          return Q.selectNodeContents(I.startContainer.firstChild), Q.collapse(!0), Q.getBoundingClientRect();
        }
        return I == null ? void 0 : I.getBoundingClientRect();
      }
      return { x: k, y: S };
    }
    function B() {
      var S;
      const k = window.getSelection();
      if (k)
        if (Ut(r.block.type)) {
          let M = 0, I = null, P = k.anchorNode;
          ["STRONG", "EM"].includes((S = P == null ? void 0 : P.parentElement) == null ? void 0 : S.tagName) && (P = P == null ? void 0 : P.parentElement, I = P.tagName.toLowerCase()), P !== null && P.childNodes.length > 0 && P.childNodes[0].textContent && P.childNodes[0].textContent.length <= 1 && (P = P.childNodes[0]);
          for (const [Q, se] of d.value.$el.firstChild.firstChild.firstChild.childNodes.entries()) {
            if (se === P) {
              se.tagName && (M += 2 + se.tagName.length);
              break;
            }
            se.tagName ? M += se.outerHTML.length : M += se.textContent.length;
          }
          return { pos: M + k.anchorOffset, tag: I };
        } else
          return { pos: k.anchorOffset };
      else
        return { pos: 0 };
    }
    function A() {
      var S;
      const k = window.getSelection();
      if (k)
        if (Ut(r.block.type)) {
          let M = 0, I = null, P = k.anchorNode;
          ["STRONG", "EM"].includes((S = P == null ? void 0 : P.parentElement) == null ? void 0 : S.tagName) && (P = P == null ? void 0 : P.parentElement, I = P.tagName.toLowerCase()), P !== null && P.childNodes.length > 0 && P.childNodes[0].textContent && P.childNodes[0].textContent.length <= 1 && (P = P.childNodes[0]);
          for (const [Q, se] of d.value.$el.firstChild.firstChild.childNodes.entries()) {
            if (se === P)
              break;
            M += se.textContent.length;
          }
          return { pos: M + k.anchorOffset, tag: I };
        } else
          return { pos: k.anchorOffset };
      else
        return { pos: 0 };
    }
    function $(k) {
      console.log(k);
      const S = l();
      if (S)
        if (Ut(r.block.type)) {
          let M, I = 0;
          const P = d.value.$el.firstChild.firstChild.firstChild.childNodes.length;
          for (const [Se, Ve] of d.value.$el.firstChild.firstChild.firstChild.childNodes.entries()) {
            if (I + Ve.textContent.length > k || Se === P - 1) {
              M = Ve;
              break;
            }
            I += Ve.textContent.length, M = Ve;
          }
          const Q = window.getSelection(), se = document.createRange();
          se.setStart(M.firstChild || M, k - I), se.setEnd(M.firstChild || M, k - I), Q == null || Q.removeAllRanges(), Q == null || Q.addRange(se);
        } else {
          const M = window.getSelection(), I = document.createRange();
          I.setStart(S, k), I.setEnd(S, k), M == null || M.removeAllRanges(), M == null || M.addRange(I);
        }
    }
    function K() {
      let k = 0, S = 0;
      const M = o();
      if (M) {
        const I = document.createRange();
        I.selectNodeContents(M.firstChild || M), I.collapse(!0);
        const P = I.getBoundingClientRect();
        k = P.left, S = P.top;
      }
      return { x: k, y: S };
    }
    function U() {
      let k = 0, S = 0;
      const M = s();
      if (M) {
        const I = document.createRange();
        I.selectNodeContents(M.firstChild || M), I.collapse();
        const P = I.getBoundingClientRect();
        k = P.left, S = P.top;
      }
      return { x: k, y: S };
    }
    function G(k) {
      const S = a();
      if (!S)
        return;
      const M = {
        [L.H1]: /^#\s(.*)$/,
        [L.H2]: /^##\s(.*)$/,
        [L.H3]: /^###\s(.*)$/,
        [L.Quote]: /^>\s(.*)$/,
        [L.Divider]: /^---\s$/
      }, I = (P) => {
        i("setBlockType", P);
        const Q = S.replace(M[P], "$1");
        d.value.innerText = Q, r.block.details.value = Q;
      };
      S.match(M[L.H1]) && k.key === " " ? I(L.H1) : S.match(M[L.H2]) && k.key === " " ? I(L.H2) : S.match(M[L.H3]) && k.key === " " ? I(L.H3) : S.match(M[L.Quote]) && k.key === " " ? I(L.Quote) : S.match(M[L.Divider]) && k.key === " " ? (I(L.Divider), r.block.details.value = "") : k.key === "/" && h.value && !h.value.open && (h.value.open = !0, h.value.openedWithSlash = !0);
    }
    function Y(k, S, M = !1) {
      re(S, k, M).then((I) => {
        i("setBlockType", k), setTimeout(() => {
          S < 1 && !M ? y() : $(I);
        });
      });
    }
    async function re(k, S, M = !1) {
      const I = A().pos;
      let P = I - (k ? k + 1 : 0), Q = I;
      return new Promise((se) => {
        setTimeout(() => {
          const Se = d.value.$el.innerText;
          !Se || (r.block.details.value = Se.substring(0, P) + Se.substring(Q), S === L.Text ? r.block.details.value = `${Se.substring(0, P) + Se.substring(Q)}` : d.value.$el.innerText = Se.substring(0, P) + Se.substring(Q), se(P));
        });
      });
    }
    return e({
      content: d,
      getTextContent: a,
      getHtmlContent: c,
      moveToStart: E,
      moveToEnd: y,
      moveToFirstLine: T,
      moveToLastLine: b,
      getCaretPos: B,
      setCaretPos: $
    }), (k, S) => {
      const M = Aa("v-icon");
      return me(), qe("div", {
        class: wt(["group flex w-full rounded", {
          "pt-12 first:pt-0": n.block.type === he(L).H1,
          "pt-4 first:pt-0": n.block.type === he(L).H2
        }])
      }, [
        We("div", {
          class: wt(["h-full pl-4 pr-2 text-center cursor-pointer transition-all duration-150 text-neutral-300 flex", {
            invisible: r.readonly,
            "py-3.5": n.block.type === he(L).H1,
            "py-3": n.block.type === he(L).H2,
            "py-2.5": n.block.type === he(L).H3,
            "py-1.5": ![he(L).H1, he(L).H2, he(L).H3].includes(n.block.type)
          }])
        }, [
          vt(Ma, { value: "<span class='text-neutral-400'><span class='text-white'>Click</span> to delete block</span>" }, {
            default: Sr(() => [
              vt(M, {
                name: "hi-trash",
                onClick: S[0] || (S[0] = (I) => i("deleteBlock")),
                class: "w-6 h-6 hover:bg-neutral-100 hover:text-neutral-400 p-0.5 rounded group-hover:opacity-100 opacity-0"
              })
            ]),
            _: 1
          }),
          vt(Ma, { value: "<span class='text-neutral-400'><span class='text-white'>Click</span> to add block below</span>" }, {
            default: Sr(() => [
              vt(M, {
                name: "hi-plus",
                onClick: S[1] || (S[1] = (I) => i("newBlock")),
                class: "w-6 h-6 hover:bg-neutral-100 hover:text-neutral-400 p-0.5 rounded group-hover:opacity-100 opacity-0"
              })
            ]),
            _: 1
          }),
          vt(cx, {
            ref_key: "menu",
            ref: h,
            onSetBlockType: Y,
            blockTypes: r.block.details.blockTypes || r.blockTypes
          }, null, 8, ["blockTypes"])
        ], 2),
        We("div", {
          class: wt(["w-full relative", { "px-0": n.block.type !== he(L).Divider }])
        }, [
          un(" Actual content "),
          (me(), Br(bp(he(vc)[r.block.type]), {
            ref_key: "content",
            ref: d,
            block: n.block,
            readonly: r.readonly,
            onKeydownCapture: u,
            onKeyup: G
          }, null, 40, ["block", "readonly"]))
        ], 2)
      ], 2);
    };
  }
}), fx = /* @__PURE__ */ en(ux, [["__file", "/Users/mateuszwozniak/repos/lotion/src/components/Block.vue"]]), dx = ["contenteditable"], hx = /* @__PURE__ */ ze({
  __name: "Lotion",
  props: {
    page: {
      type: Object,
      required: !0
    },
    blockTypes: {
      type: Object,
      default: null
    },
    readonly: {
      type: Boolean,
      default: !1
    }
  },
  setup(n) {
    const e = n, t = Ke(null), r = Ke(!1);
    document.addEventListener("mouseup", (d) => {
      var v, w;
      const h = document.getElementById("blocks"), p = document.getElementById("title"), m = (v = t.value) == null ? void 0 : v.getClientRects()[0];
      if (!h || !p || !m)
        return;
      if (d.clientX < (m.left || -1) || d.clientX > ((m == null ? void 0 : m.right) || window.innerWidth)) {
        const E = p == null ? void 0 : p.getClientRects()[0];
        if (d.clientY > ((E == null ? void 0 : E.top) || window.innerHeight) && d.clientY < ((E == null ? void 0 : E.bottom) || 0)) {
          const D = p == null ? void 0 : p.getClientRects()[0];
          let B = !0;
          d.x > D.right && (B = !1);
          const A = window.getSelection(), $ = document.createRange();
          $.selectNodeContents(p), $.collapse(B), A == null || A.removeAllRanges(), A == null || A.addRange($);
          return;
        }
        const y = Array.from(h == null ? void 0 : h.children), T = y.find((D) => {
          const B = D.getClientRects()[0];
          return d.clientY > B.top && d.clientY < B.bottom;
        }), b = y.findIndex((D) => {
          const B = D.getClientRects()[0];
          return d.clientY > B.top && d.clientY < B.bottom;
        });
        if (T) {
          const D = T.getClientRects()[0];
          d.x < D.left ? o.value[b].moveToStart() : o.value[b].moveToEnd();
          return;
        }
      }
      const g = (w = h == null ? void 0 : h.lastElementChild) == null ? void 0 : w.getClientRects()[0];
      if (!!g && d.clientX > g.left && d.clientX < g.right && d.clientY > g.bottom) {
        const E = e.page.blocks[e.page.blocks.length - 1], y = o.value[e.page.blocks.length - 1];
        E.type === L.Text && y.getTextContent() === "" ? setTimeout(y.moveToEnd) : l(e.page.blocks.length - 1);
      }
    });
    const i = {
      animation: 150,
      group: "blocks",
      disabled: !1,
      ghostClass: "lotion-ghost"
    };
    wp(() => {
      o.value = [];
    });
    const o = Ke([]);
    function s() {
      var h, p;
      const d = window.getSelection();
      !d || !d.anchorNode || (((h = d == null ? void 0 : d.anchorNode) == null ? void 0 : h.nodeType) === Node.ELEMENT_NODE ? (d == null ? void 0 : d.anchorNode).scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" }) : ((p = d == null ? void 0 : d.anchorNode) == null ? void 0 : p.parentElement).scrollIntoView({ behavior: "smooth", block: "center", inline: "nearest" }));
    }
    function l(d) {
      e.page.blocks.splice(d + 1, 0, {
        id: pm(),
        type: L.Text,
        details: {
          value: ""
        }
      }), setTimeout(() => {
        o.value[d + 1].moveToStart(), s();
      });
    }
    function a(d) {
      e.page.blocks.splice(d, 1), e.page.blocks.length === 0 && l(0);
    }
    async function c(d, h) {
      o.value[d].content.onUnset && o.value[d].content.onUnset(), e.page.blocks[d].type = h, h === L.Divider ? (e.page.blocks[d].details = {}, l(d)) : setTimeout(() => {
        o.value[d].content.onSet ? o.value[d].content.onSet() : o.value[d].moveToEnd();
      });
    }
    function u(d) {
      if (!r.value) {
        if ([L.H1, L.H2, L.H3, L.Quote].includes(e.page.blocks[d].type)) {
          c(d, L.Text), setTimeout(() => {
            o.value[d].moveToStart();
          }, 5);
          return;
        }
        if (d !== 0) {
          if (Ut(e.page.blocks[d - 1].type) && o.value[d - 1].getTextContent().length === 0) {
            e.page.blocks[d - 1].details.value = e.page.blocks[d].details.value, e.page.blocks.splice(d, 1), o.value[d - 1].setCaretPos(0), r.value = !0, setTimeout(() => {
              o.value[d - 1].setCaretPos(0), r.value = !1;
            }, 200);
            return;
          }
          if (Ut(e.page.blocks[d - 1].type)) {
            const h = o.value[d - 1].getTextContent().length;
            e.page.blocks[d - 1].details.value = e.page.blocks[d - 1].details.value + e.page.blocks[d].details.value, r.value = !0, setTimeout(() => {
              o.value[d - 1].setCaretPos(h), e.page.blocks.splice(d, 1), r.value = !1;
            }, 5);
          } else if ([L.H1, L.H2, L.H3].includes(e.page.blocks[d - 1].type)) {
            const h = e.page.blocks[d - 1].details.value.length;
            e.page.blocks[d - 1].details.value += o.value[d].getTextContent(), r.value = !0, setTimeout(() => {
              o.value[d - 1].setCaretPos(h), e.page.blocks.splice(d, 1), r.value = !1;
            }, 5);
          } else
            e.page.blocks.splice(d - 1, 1), setTimeout(() => o.value[d - 1].moveToStart(), 5);
        }
      }
    }
    function f(d) {
      const h = o.value[d].getCaretPos();
      l(d);
      const p = o.value[d].getHtmlContent();
      e.page.blocks[d + 1].details.value = Os((h.tag ? `<${h.tag}>` : "") + (p ? p == null ? void 0 : p.slice(h.pos) : "")), e.page.blocks[d].details.value = Os((p ? p == null ? void 0 : p.slice(0, h.pos) : "") + (h.tag ? `</${h.tag}>` : "")), setTimeout(() => o.value[d + 1].moveToStart(), 5);
    }
    return (d, h) => e.page ? (me(), qe("div", {
      key: 0,
      class: "lotion w-[65ch] mx-auto my-24 font-sans text-base",
      ref_key: "editor",
      ref: t
    }, [
      We("h1", {
        id: "title",
        contenteditable: !e.readonly,
        spellcheck: "false",
        "data-ph": "Untitled",
        onKeydown: h[0] || (h[0] = $l((p) => p.preventDefault(), ["enter"])),
        onBlur: h[1] || (h[1] = (p) => e.page.name = p.target.innerText.replace(`
`, "")),
        class: wt(["focus:outline-none focus-visible:outline-none text-5xl font-bold mb-12", e.page.name ? "" : "empty"])
      }, Ao(e.page.name || ""), 43, dx),
      vt(he(am), kp({
        id: "blocks",
        tag: "div",
        list: e.page.blocks,
        handle: ".handle"
      }, i, { class: "-ml-24 space-y-2 pb-4" }), {
        default: Sr(() => [
          vt(xp, { type: "transition" }, {
            default: Sr(() => [
              (me(!0), qe(kf, null, xf(e.page.blocks, (p, m) => (me(), Br(fx, {
                block: p,
                key: m,
                id: "block-" + p.id,
                blockTypes: e.blockTypes,
                readonly: e.readonly,
                isMerging: r.value,
                ref_for: !0,
                ref: (g) => o.value[m] = g,
                onDeleteBlock: (g) => a(m),
                onNewBlock: (g) => l(m),
                onMoveToPrevChar: (g) => {
                  var v;
                  (v = o.value[m - 1]) == null || v.moveToEnd(), s();
                },
                onMoveToNextChar: (g) => {
                  var v;
                  (v = o.value[m + 1]) == null || v.moveToStart(), s();
                },
                onMoveToPrevLine: (g) => {
                  var v;
                  (v = o.value[m - 1]) == null || v.moveToLastLine(), s();
                },
                onMoveToNextLine: (g) => {
                  var v;
                  (v = o.value[m + 1]) == null || v.moveToFirstLine(), s();
                },
                onMerge: (g) => u(m),
                onSplit: (g) => f(m),
                onSetBlockType: (g) => c(m, g)
              }, null, 8, ["block", "id", "blockTypes", "readonly", "isMerging", "onDeleteBlock", "onNewBlock", "onMoveToPrevChar", "onMoveToNextChar", "onMoveToPrevLine", "onMoveToNextLine", "onMerge", "onSplit", "onSetBlockType"]))), 128))
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 16, ["list"])
    ], 512)) : un("v-if", !0);
  }
}), yx = /* @__PURE__ */ en(hx, [["__file", "/Users/mateuszwozniak/repos/lotion/src/components/Lotion.vue"]]);
export {
  yx as Lotion,
  mx as registerBlock,
  gx as types
};
