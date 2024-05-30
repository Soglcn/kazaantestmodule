(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
        n(i);
    new MutationObserver(i=>{
        for (const s of i)
            if (s.type === "childList")
                for (const a of s.addedNodes)
                    a.tagName === "LINK" && a.rel === "modulepreload" && n(a)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function t(i) {
        const s = {};
        return i.integrity && (s.integrity = i.integrity),
        i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
        i.crossOrigin === "use-credentials" ? s.credentials = "include" : i.crossOrigin === "anonymous" ? s.credentials = "omit" : s.credentials = "same-origin",
        s
    }
    function n(i) {
        if (i.ep)
            return;
        i.ep = !0;
        const s = t(i);
        fetch(i.href, s)
    }
}
)();
/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */
const ea = "164"
  , _l = 0
  , Ta = 1
  , xl = 2
  , xc = 1
  , ta = 2
  , ln = 3
  , pn = 0
  , wt = 1
  , Gt = 2
  , wn = 0
  , _i = 1
  , Aa = 2
  , ba = 3
  , wa = 4
  , vl = 5
  , Gn = 100
  , Ml = 101
  , Sl = 102
  , yl = 103
  , El = 104
  , Tl = 200
  , Al = 201
  , bl = 202
  , wl = 203
  , Ws = 204
  , Xs = 205
  , Rl = 206
  , Cl = 207
  , Ll = 208
  , Pl = 209
  , Il = 210
  , Dl = 211
  , Ul = 212
  , Nl = 213
  , Fl = 214
  , Ol = 0
  , Bl = 1
  , zl = 2
  , Hr = 3
  , Hl = 4
  , kl = 5
  , Vl = 6
  , Gl = 7
  , vc = 0
  , Wl = 1
  , Xl = 2
  , Rn = 0
  , ql = 1
  , Yl = 2
  , Kl = 3
  , jl = 4
  , $l = 5
  , Zl = 6
  , Jl = 7
  , Ra = "attached"
  , Ql = "detached"
  , Mc = 300
  , Ei = 301
  , Ti = 302
  , kr = 303
  , qs = 304
  , jr = 306
  , Ai = 1e3
  , Xt = 1001
  , Vr = 1002
  , Et = 1003
  , Sc = 1004
  , ji = 1005
  , lt = 1006
  , Br = 1007
  , qt = 1008
  , Cn = 1009
  , eh = 1010
  , th = 1011
  , yc = 1012
  , Ec = 1013
  , bi = 1014
  , Pt = 1015
  , un = 1016
  , Tc = 1017
  , Ac = 1018
  , rr = 1020
  , nh = 35902
  , ih = 1021
  , rh = 1022
  , zt = 1023
  , sh = 1024
  , ah = 1025
  , xi = 1026
  , er = 1027
  , bc = 1028
  , wc = 1029
  , oh = 1030
  , Rc = 1031
  , Cc = 1033
  , rs = 33776
  , ss = 33777
  , as = 33778
  , os = 33779
  , Ca = 35840
  , La = 35841
  , Pa = 35842
  , Ia = 35843
  , Da = 36196
  , Ua = 37492
  , Na = 37496
  , Fa = 37808
  , Oa = 37809
  , Ba = 37810
  , za = 37811
  , Ha = 37812
  , ka = 37813
  , Va = 37814
  , Ga = 37815
  , Wa = 37816
  , Xa = 37817
  , qa = 37818
  , Ya = 37819
  , Ka = 37820
  , ja = 37821
  , cs = 36492
  , $a = 36494
  , Za = 36495
  , ch = 36283
  , Ja = 36284
  , Qa = 36285
  , eo = 36286
  , tr = 2300
  , wi = 2301
  , ls = 2302
  , to = 2400
  , no = 2401
  , io = 2402
  , lh = 2500
  , hh = 0
  , Lc = 1
  , Ys = 2
  , uh = 3200
  , dh = 3201
  , Pc = 0
  , fh = 1
  , An = ""
  , St = "srgb"
  , ut = "srgb-linear"
  , na = "display-p3"
  , $r = "display-p3-linear"
  , Gr = "linear"
  , Je = "srgb"
  , Wr = "rec709"
  , Xr = "p3"
  , Zn = 7680
  , ro = 519
  , ph = 512
  , mh = 513
  , gh = 514
  , Ic = 515
  , _h = 516
  , xh = 517
  , vh = 518
  , Mh = 519
  , Ks = 35044
  , so = "300 es"
  , dn = 2e3
  , qr = 2001;
class Ii {
    addEventListener(e, t) {
        this._listeners === void 0 && (this._listeners = {});
        const n = this._listeners;
        n[e] === void 0 && (n[e] = []),
        n[e].indexOf(t) === -1 && n[e].push(t)
    }
    hasEventListener(e, t) {
        if (this._listeners === void 0)
            return !1;
        const n = this._listeners;
        return n[e] !== void 0 && n[e].indexOf(t) !== -1
    }
    removeEventListener(e, t) {
        if (this._listeners === void 0)
            return;
        const i = this._listeners[e];
        if (i !== void 0) {
            const s = i.indexOf(t);
            s !== -1 && i.splice(s, 1)
        }
    }
    dispatchEvent(e) {
        if (this._listeners === void 0)
            return;
        const n = this._listeners[e.type];
        if (n !== void 0) {
            e.target = this;
            const i = n.slice(0);
            for (let s = 0, a = i.length; s < a; s++)
                i[s].call(this, e);
            e.target = null
        }
    }
}
const gt = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "0a", "0b", "0c", "0d", "0e", "0f", "10", "11", "12", "13", "14", "15", "16", "17", "18", "19", "1a", "1b", "1c", "1d", "1e", "1f", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "2a", "2b", "2c", "2d", "2e", "2f", "30", "31", "32", "33", "34", "35", "36", "37", "38", "39", "3a", "3b", "3c", "3d", "3e", "3f", "40", "41", "42", "43", "44", "45", "46", "47", "48", "49", "4a", "4b", "4c", "4d", "4e", "4f", "50", "51", "52", "53", "54", "55", "56", "57", "58", "59", "5a", "5b", "5c", "5d", "5e", "5f", "60", "61", "62", "63", "64", "65", "66", "67", "68", "69", "6a", "6b", "6c", "6d", "6e", "6f", "70", "71", "72", "73", "74", "75", "76", "77", "78", "79", "7a", "7b", "7c", "7d", "7e", "7f", "80", "81", "82", "83", "84", "85", "86", "87", "88", "89", "8a", "8b", "8c", "8d", "8e", "8f", "90", "91", "92", "93", "94", "95", "96", "97", "98", "99", "9a", "9b", "9c", "9d", "9e", "9f", "a0", "a1", "a2", "a3", "a4", "a5", "a6", "a7", "a8", "a9", "aa", "ab", "ac", "ad", "ae", "af", "b0", "b1", "b2", "b3", "b4", "b5", "b6", "b7", "b8", "b9", "ba", "bb", "bc", "bd", "be", "bf", "c0", "c1", "c2", "c3", "c4", "c5", "c6", "c7", "c8", "c9", "ca", "cb", "cc", "cd", "ce", "cf", "d0", "d1", "d2", "d3", "d4", "d5", "d6", "d7", "d8", "d9", "da", "db", "dc", "dd", "de", "df", "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "ea", "eb", "ec", "ed", "ee", "ef", "f0", "f1", "f2", "f3", "f4", "f5", "f6", "f7", "f8", "f9", "fa", "fb", "fc", "fd", "fe", "ff"];
let ao = 1234567;
const Zi = Math.PI / 180
  , Ri = 180 / Math.PI;
function Ht() {
    const r = Math.random() * 4294967295 | 0
      , e = Math.random() * 4294967295 | 0
      , t = Math.random() * 4294967295 | 0
      , n = Math.random() * 4294967295 | 0;
    return (gt[r & 255] + gt[r >> 8 & 255] + gt[r >> 16 & 255] + gt[r >> 24 & 255] + "-" + gt[e & 255] + gt[e >> 8 & 255] + "-" + gt[e >> 16 & 15 | 64] + gt[e >> 24 & 255] + "-" + gt[t & 63 | 128] + gt[t >> 8 & 255] + "-" + gt[t >> 16 & 255] + gt[t >> 24 & 255] + gt[n & 255] + gt[n >> 8 & 255] + gt[n >> 16 & 255] + gt[n >> 24 & 255]).toLowerCase()
}
function dt(r, e, t) {
    return Math.max(e, Math.min(t, r))
}
function ia(r, e) {
    return (r % e + e) % e
}
function Sh(r, e, t, n, i) {
    return n + (r - e) * (i - n) / (t - e)
}
function yh(r, e, t) {
    return r !== e ? (t - r) / (e - r) : 0
}
function Ji(r, e, t) {
    return (1 - t) * r + t * e
}
function Eh(r, e, t, n) {
    return Ji(r, e, 1 - Math.exp(-t * n))
}
function Th(r, e=1) {
    return e - Math.abs(ia(r, e * 2) - e)
}
function Ah(r, e, t) {
    return r <= e ? 0 : r >= t ? 1 : (r = (r - e) / (t - e),
    r * r * (3 - 2 * r))
}
function bh(r, e, t) {
    return r <= e ? 0 : r >= t ? 1 : (r = (r - e) / (t - e),
    r * r * r * (r * (r * 6 - 15) + 10))
}
function wh(r, e) {
    return r + Math.floor(Math.random() * (e - r + 1))
}
function Rh(r, e) {
    return r + Math.random() * (e - r)
}
function Ch(r) {
    return r * (.5 - Math.random())
}
function Lh(r) {
    r !== void 0 && (ao = r);
    let e = ao += 1831565813;
    return e = Math.imul(e ^ e >>> 15, e | 1),
    e ^= e + Math.imul(e ^ e >>> 7, e | 61),
    ((e ^ e >>> 14) >>> 0) / 4294967296
}
function Ph(r) {
    return r * Zi
}
function Ih(r) {
    return r * Ri
}
function Dh(r) {
    return (r & r - 1) === 0 && r !== 0
}
function Uh(r) {
    return Math.pow(2, Math.ceil(Math.log(r) / Math.LN2))
}
function Nh(r) {
    return Math.pow(2, Math.floor(Math.log(r) / Math.LN2))
}
function Fh(r, e, t, n, i) {
    const s = Math.cos
      , a = Math.sin
      , o = s(t / 2)
      , c = a(t / 2)
      , l = s((e + n) / 2)
      , h = a((e + n) / 2)
      , u = s((e - n) / 2)
      , d = a((e - n) / 2)
      , m = s((n - e) / 2)
      , g = a((n - e) / 2);
    switch (i) {
    case "XYX":
        r.set(o * h, c * u, c * d, o * l);
        break;
    case "YZY":
        r.set(c * d, o * h, c * u, o * l);
        break;
    case "ZXZ":
        r.set(c * u, c * d, o * h, o * l);
        break;
    case "XZX":
        r.set(o * h, c * g, c * m, o * l);
        break;
    case "YXY":
        r.set(c * m, o * h, c * g, o * l);
        break;
    case "ZYZ":
        r.set(c * g, c * m, o * h, o * l);
        break;
    default:
        console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " + i)
    }
}
function Bt(r, e) {
    switch (e.constructor) {
    case Float32Array:
        return r;
    case Uint32Array:
        return r / 4294967295;
    case Uint16Array:
        return r / 65535;
    case Uint8Array:
        return r / 255;
    case Int32Array:
        return Math.max(r / 2147483647, -1);
    case Int16Array:
        return Math.max(r / 32767, -1);
    case Int8Array:
        return Math.max(r / 127, -1);
    default:
        throw new Error("Invalid component type.")
    }
}
function qe(r, e) {
    switch (e.constructor) {
    case Float32Array:
        return r;
    case Uint32Array:
        return Math.round(r * 4294967295);
    case Uint16Array:
        return Math.round(r * 65535);
    case Uint8Array:
        return Math.round(r * 255);
    case Int32Array:
        return Math.round(r * 2147483647);
    case Int16Array:
        return Math.round(r * 32767);
    case Int8Array:
        return Math.round(r * 127);
    default:
        throw new Error("Invalid component type.")
    }
}
const Hn = {
    DEG2RAD: Zi,
    RAD2DEG: Ri,
    generateUUID: Ht,
    clamp: dt,
    euclideanModulo: ia,
    mapLinear: Sh,
    inverseLerp: yh,
    lerp: Ji,
    damp: Eh,
    pingpong: Th,
    smoothstep: Ah,
    smootherstep: bh,
    randInt: wh,
    randFloat: Rh,
    randFloatSpread: Ch,
    seededRandom: Lh,
    degToRad: Ph,
    radToDeg: Ih,
    isPowerOfTwo: Dh,
    ceilPowerOfTwo: Uh,
    floorPowerOfTwo: Nh,
    setQuaternionFromProperEuler: Fh,
    normalize: qe,
    denormalize: Bt
};
class Ue {
    constructor(e=0, t=0) {
        Ue.prototype.isVector2 = !0,
        this.x = e,
        this.y = t
    }
    get width() {
        return this.x
    }
    set width(e) {
        this.x = e
    }
    get height() {
        return this.y
    }
    set height(e) {
        this.y = e
    }
    set(e, t) {
        return this.x = e,
        this.y = t,
        this
    }
    setScalar(e) {
        return this.x = e,
        this.y = e,
        this
    }
    setX(e) {
        return this.x = e,
        this
    }
    setY(e) {
        return this.y = e,
        this
    }
    setComponent(e, t) {
        switch (e) {
        case 0:
            this.x = t;
            break;
        case 1:
            this.y = t;
            break;
        default:
            throw new Error("index is out of range: " + e)
        }
        return this
    }
    getComponent(e) {
        switch (e) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        default:
            throw new Error("index is out of range: " + e)
        }
    }
    clone() {
        return new this.constructor(this.x,this.y)
    }
    copy(e) {
        return this.x = e.x,
        this.y = e.y,
        this
    }
    add(e) {
        return this.x += e.x,
        this.y += e.y,
        this
    }
    addScalar(e) {
        return this.x += e,
        this.y += e,
        this
    }
    addVectors(e, t) {
        return this.x = e.x + t.x,
        this.y = e.y + t.y,
        this
    }
    addScaledVector(e, t) {
        return this.x += e.x * t,
        this.y += e.y * t,
        this
    }
    sub(e) {
        return this.x -= e.x,
        this.y -= e.y,
        this
    }
    subScalar(e) {
        return this.x -= e,
        this.y -= e,
        this
    }
    subVectors(e, t) {
        return this.x = e.x - t.x,
        this.y = e.y - t.y,
        this
    }
    multiply(e) {
        return this.x *= e.x,
        this.y *= e.y,
        this
    }
    multiplyScalar(e) {
        return this.x *= e,
        this.y *= e,
        this
    }
    divide(e) {
        return this.x /= e.x,
        this.y /= e.y,
        this
    }
    divideScalar(e) {
        return this.multiplyScalar(1 / e)
    }
    applyMatrix3(e) {
        const t = this.x
          , n = this.y
          , i = e.elements;
        return this.x = i[0] * t + i[3] * n + i[6],
        this.y = i[1] * t + i[4] * n + i[7],
        this
    }
    min(e) {
        return this.x = Math.min(this.x, e.x),
        this.y = Math.min(this.y, e.y),
        this
    }
    max(e) {
        return this.x = Math.max(this.x, e.x),
        this.y = Math.max(this.y, e.y),
        this
    }
    clamp(e, t) {
        return this.x = Math.max(e.x, Math.min(t.x, this.x)),
        this.y = Math.max(e.y, Math.min(t.y, this.y)),
        this
    }
    clampScalar(e, t) {
        return this.x = Math.max(e, Math.min(t, this.x)),
        this.y = Math.max(e, Math.min(t, this.y)),
        this
    }
    clampLength(e, t) {
        const n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
    }
    floor() {
        return this.x = Math.floor(this.x),
        this.y = Math.floor(this.y),
        this
    }
    ceil() {
        return this.x = Math.ceil(this.x),
        this.y = Math.ceil(this.y),
        this
    }
    round() {
        return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this
    }
    roundToZero() {
        return this.x = Math.trunc(this.x),
        this.y = Math.trunc(this.y),
        this
    }
    negate() {
        return this.x = -this.x,
        this.y = -this.y,
        this
    }
    dot(e) {
        return this.x * e.x + this.y * e.y
    }
    cross(e) {
        return this.x * e.y - this.y * e.x
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y)
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y)
    }
    normalize() {
        return this.divideScalar(this.length() || 1)
    }
    angle() {
        return Math.atan2(-this.y, -this.x) + Math.PI
    }
    angleTo(e) {
        const t = Math.sqrt(this.lengthSq() * e.lengthSq());
        if (t === 0)
            return Math.PI / 2;
        const n = this.dot(e) / t;
        return Math.acos(dt(n, -1, 1))
    }
    distanceTo(e) {
        return Math.sqrt(this.distanceToSquared(e))
    }
    distanceToSquared(e) {
        const t = this.x - e.x
          , n = this.y - e.y;
        return t * t + n * n
    }
    manhattanDistanceTo(e) {
        return Math.abs(this.x - e.x) + Math.abs(this.y - e.y)
    }
    setLength(e) {
        return this.normalize().multiplyScalar(e)
    }
    lerp(e, t) {
        return this.x += (e.x - this.x) * t,
        this.y += (e.y - this.y) * t,
        this
    }
    lerpVectors(e, t, n) {
        return this.x = e.x + (t.x - e.x) * n,
        this.y = e.y + (t.y - e.y) * n,
        this
    }
    equals(e) {
        return e.x === this.x && e.y === this.y
    }
    fromArray(e, t=0) {
        return this.x = e[t],
        this.y = e[t + 1],
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this.x,
        e[t + 1] = this.y,
        e
    }
    fromBufferAttribute(e, t) {
        return this.x = e.getX(t),
        this.y = e.getY(t),
        this
    }
    rotateAround(e, t) {
        const n = Math.cos(t)
          , i = Math.sin(t)
          , s = this.x - e.x
          , a = this.y - e.y;
        return this.x = s * n - a * i + e.x,
        this.y = s * i + a * n + e.y,
        this
    }
    random() {
        return this.x = Math.random(),
        this.y = Math.random(),
        this
    }
    *[Symbol.iterator]() {
        yield this.x,
        yield this.y
    }
}
class be {
    constructor(e, t, n, i, s, a, o, c, l) {
        be.prototype.isMatrix3 = !0,
        this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1],
        e !== void 0 && this.set(e, t, n, i, s, a, o, c, l)
    }
    set(e, t, n, i, s, a, o, c, l) {
        const h = this.elements;
        return h[0] = e,
        h[1] = i,
        h[2] = o,
        h[3] = t,
        h[4] = s,
        h[5] = c,
        h[6] = n,
        h[7] = a,
        h[8] = l,
        this
    }
    identity() {
        return this.set(1, 0, 0, 0, 1, 0, 0, 0, 1),
        this
    }
    copy(e) {
        const t = this.elements
          , n = e.elements;
        return t[0] = n[0],
        t[1] = n[1],
        t[2] = n[2],
        t[3] = n[3],
        t[4] = n[4],
        t[5] = n[5],
        t[6] = n[6],
        t[7] = n[7],
        t[8] = n[8],
        this
    }
    extractBasis(e, t, n) {
        return e.setFromMatrix3Column(this, 0),
        t.setFromMatrix3Column(this, 1),
        n.setFromMatrix3Column(this, 2),
        this
    }
    setFromMatrix4(e) {
        const t = e.elements;
        return this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]),
        this
    }
    multiply(e) {
        return this.multiplyMatrices(this, e)
    }
    premultiply(e) {
        return this.multiplyMatrices(e, this)
    }
    multiplyMatrices(e, t) {
        const n = e.elements
          , i = t.elements
          , s = this.elements
          , a = n[0]
          , o = n[3]
          , c = n[6]
          , l = n[1]
          , h = n[4]
          , u = n[7]
          , d = n[2]
          , m = n[5]
          , g = n[8]
          , _ = i[0]
          , p = i[3]
          , f = i[6]
          , T = i[1]
          , y = i[4]
          , E = i[7]
          , U = i[2]
          , w = i[5]
          , b = i[8];
        return s[0] = a * _ + o * T + c * U,
        s[3] = a * p + o * y + c * w,
        s[6] = a * f + o * E + c * b,
        s[1] = l * _ + h * T + u * U,
        s[4] = l * p + h * y + u * w,
        s[7] = l * f + h * E + u * b,
        s[2] = d * _ + m * T + g * U,
        s[5] = d * p + m * y + g * w,
        s[8] = d * f + m * E + g * b,
        this
    }
    multiplyScalar(e) {
        const t = this.elements;
        return t[0] *= e,
        t[3] *= e,
        t[6] *= e,
        t[1] *= e,
        t[4] *= e,
        t[7] *= e,
        t[2] *= e,
        t[5] *= e,
        t[8] *= e,
        this
    }
    determinant() {
        const e = this.elements
          , t = e[0]
          , n = e[1]
          , i = e[2]
          , s = e[3]
          , a = e[4]
          , o = e[5]
          , c = e[6]
          , l = e[7]
          , h = e[8];
        return t * a * h - t * o * l - n * s * h + n * o * c + i * s * l - i * a * c
    }
    invert() {
        const e = this.elements
          , t = e[0]
          , n = e[1]
          , i = e[2]
          , s = e[3]
          , a = e[4]
          , o = e[5]
          , c = e[6]
          , l = e[7]
          , h = e[8]
          , u = h * a - o * l
          , d = o * c - h * s
          , m = l * s - a * c
          , g = t * u + n * d + i * m;
        if (g === 0)
            return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
        const _ = 1 / g;
        return e[0] = u * _,
        e[1] = (i * l - h * n) * _,
        e[2] = (o * n - i * a) * _,
        e[3] = d * _,
        e[4] = (h * t - i * c) * _,
        e[5] = (i * s - o * t) * _,
        e[6] = m * _,
        e[7] = (n * c - l * t) * _,
        e[8] = (a * t - n * s) * _,
        this
    }
    transpose() {
        let e;
        const t = this.elements;
        return e = t[1],
        t[1] = t[3],
        t[3] = e,
        e = t[2],
        t[2] = t[6],
        t[6] = e,
        e = t[5],
        t[5] = t[7],
        t[7] = e,
        this
    }
    getNormalMatrix(e) {
        return this.setFromMatrix4(e).invert().transpose()
    }
    transposeIntoArray(e) {
        const t = this.elements;
        return e[0] = t[0],
        e[1] = t[3],
        e[2] = t[6],
        e[3] = t[1],
        e[4] = t[4],
        e[5] = t[7],
        e[6] = t[2],
        e[7] = t[5],
        e[8] = t[8],
        this
    }
    setUvTransform(e, t, n, i, s, a, o) {
        const c = Math.cos(s)
          , l = Math.sin(s);
        return this.set(n * c, n * l, -n * (c * a + l * o) + a + e, -i * l, i * c, -i * (-l * a + c * o) + o + t, 0, 0, 1),
        this
    }
    scale(e, t) {
        return this.premultiply(hs.makeScale(e, t)),
        this
    }
    rotate(e) {
        return this.premultiply(hs.makeRotation(-e)),
        this
    }
    translate(e, t) {
        return this.premultiply(hs.makeTranslation(e, t)),
        this
    }
    makeTranslation(e, t) {
        return e.isVector2 ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1) : this.set(1, 0, e, 0, 1, t, 0, 0, 1),
        this
    }
    makeRotation(e) {
        const t = Math.cos(e)
          , n = Math.sin(e);
        return this.set(t, -n, 0, n, t, 0, 0, 0, 1),
        this
    }
    makeScale(e, t) {
        return this.set(e, 0, 0, 0, t, 0, 0, 0, 1),
        this
    }
    equals(e) {
        const t = this.elements
          , n = e.elements;
        for (let i = 0; i < 9; i++)
            if (t[i] !== n[i])
                return !1;
        return !0
    }
    fromArray(e, t=0) {
        for (let n = 0; n < 9; n++)
            this.elements[n] = e[n + t];
        return this
    }
    toArray(e=[], t=0) {
        const n = this.elements;
        return e[t] = n[0],
        e[t + 1] = n[1],
        e[t + 2] = n[2],
        e[t + 3] = n[3],
        e[t + 4] = n[4],
        e[t + 5] = n[5],
        e[t + 6] = n[6],
        e[t + 7] = n[7],
        e[t + 8] = n[8],
        e
    }
    clone() {
        return new this.constructor().fromArray(this.elements)
    }
}
const hs = new be;
function Dc(r) {
    for (let e = r.length - 1; e >= 0; --e)
        if (r[e] >= 65535)
            return !0;
    return !1
}
function nr(r) {
    return document.createElementNS("http://www.w3.org/1999/xhtml", r)
}
function Oh() {
    const r = nr("canvas");
    return r.style.display = "block",
    r
}
const oo = {};
function Uc(r) {
    r in oo || (oo[r] = !0,
    console.warn(r))
}
const co = new be().set(.8224621, .177538, 0, .0331941, .9668058, 0, .0170827, .0723974, .9105199)
  , lo = new be().set(1.2249401, -.2249404, 0, -.0420569, 1.0420571, 0, -.0196376, -.0786361, 1.0982735)
  , lr = {
    [ut]: {
        transfer: Gr,
        primaries: Wr,
        toReference: r=>r,
        fromReference: r=>r
    },
    [St]: {
        transfer: Je,
        primaries: Wr,
        toReference: r=>r.convertSRGBToLinear(),
        fromReference: r=>r.convertLinearToSRGB()
    },
    [$r]: {
        transfer: Gr,
        primaries: Xr,
        toReference: r=>r.applyMatrix3(lo),
        fromReference: r=>r.applyMatrix3(co)
    },
    [na]: {
        transfer: Je,
        primaries: Xr,
        toReference: r=>r.convertSRGBToLinear().applyMatrix3(lo),
        fromReference: r=>r.applyMatrix3(co).convertLinearToSRGB()
    }
}
  , Bh = new Set([ut, $r])
  , We = {
    enabled: !0,
    _workingColorSpace: ut,
    get workingColorSpace() {
        return this._workingColorSpace
    },
    set workingColorSpace(r) {
        if (!Bh.has(r))
            throw new Error(`Unsupported working color space, "${r}".`);
        this._workingColorSpace = r
    },
    convert: function(r, e, t) {
        if (this.enabled === !1 || e === t || !e || !t)
            return r;
        const n = lr[e].toReference
          , i = lr[t].fromReference;
        return i(n(r))
    },
    fromWorkingColorSpace: function(r, e) {
        return this.convert(r, this._workingColorSpace, e)
    },
    toWorkingColorSpace: function(r, e) {
        return this.convert(r, e, this._workingColorSpace)
    },
    getPrimaries: function(r) {
        return lr[r].primaries
    },
    getTransfer: function(r) {
        return r === An ? Gr : lr[r].transfer
    }
};
function vi(r) {
    return r < .04045 ? r * .0773993808 : Math.pow(r * .9478672986 + .0521327014, 2.4)
}
function us(r) {
    return r < .0031308 ? r * 12.92 : 1.055 * Math.pow(r, .41666) - .055
}
let Jn;
class zh {
    static getDataURL(e) {
        if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u")
            return e.src;
        let t;
        if (e instanceof HTMLCanvasElement)
            t = e;
        else {
            Jn === void 0 && (Jn = nr("canvas")),
            Jn.width = e.width,
            Jn.height = e.height;
            const n = Jn.getContext("2d");
            e instanceof ImageData ? n.putImageData(e, 0, 0) : n.drawImage(e, 0, 0, e.width, e.height),
            t = Jn
        }
        return t.width > 2048 || t.height > 2048 ? (console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons", e),
        t.toDataURL("image/jpeg", .6)) : t.toDataURL("image/png")
    }
    static sRGBToLinear(e) {
        if (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && e instanceof ImageBitmap) {
            const t = nr("canvas");
            t.width = e.width,
            t.height = e.height;
            const n = t.getContext("2d");
            n.drawImage(e, 0, 0, e.width, e.height);
            const i = n.getImageData(0, 0, e.width, e.height)
              , s = i.data;
            for (let a = 0; a < s.length; a++)
                s[a] = vi(s[a] / 255) * 255;
            return n.putImageData(i, 0, 0),
            t
        } else if (e.data) {
            const t = e.data.slice(0);
            for (let n = 0; n < t.length; n++)
                t instanceof Uint8Array || t instanceof Uint8ClampedArray ? t[n] = Math.floor(vi(t[n] / 255) * 255) : t[n] = vi(t[n]);
            return {
                data: t,
                width: e.width,
                height: e.height
            }
        } else
            return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),
            e
    }
}
let Hh = 0;
class Nc {
    constructor(e=null) {
        this.isSource = !0,
        Object.defineProperty(this, "id", {
            value: Hh++
        }),
        this.uuid = Ht(),
        this.data = e,
        this.dataReady = !0,
        this.version = 0
    }
    set needsUpdate(e) {
        e === !0 && this.version++
    }
    toJSON(e) {
        const t = e === void 0 || typeof e == "string";
        if (!t && e.images[this.uuid] !== void 0)
            return e.images[this.uuid];
        const n = {
            uuid: this.uuid,
            url: ""
        }
          , i = this.data;
        if (i !== null) {
            let s;
            if (Array.isArray(i)) {
                s = [];
                for (let a = 0, o = i.length; a < o; a++)
                    i[a].isDataTexture ? s.push(ds(i[a].image)) : s.push(ds(i[a]))
            } else
                s = ds(i);
            n.url = s
        }
        return t || (e.images[this.uuid] = n),
        n
    }
}
function ds(r) {
    return typeof HTMLImageElement < "u" && r instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && r instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && r instanceof ImageBitmap ? zh.getDataURL(r) : r.data ? {
        data: Array.from(r.data),
        width: r.width,
        height: r.height,
        type: r.data.constructor.name
    } : (console.warn("THREE.Texture: Unable to serialize Texture."),
    {})
}
let kh = 0;
class ht extends Ii {
    constructor(e=ht.DEFAULT_IMAGE, t=ht.DEFAULT_MAPPING, n=Xt, i=Xt, s=lt, a=qt, o=zt, c=Cn, l=ht.DEFAULT_ANISOTROPY, h=An) {
        super(),
        this.isTexture = !0,
        Object.defineProperty(this, "id", {
            value: kh++
        }),
        this.uuid = Ht(),
        this.name = "",
        this.source = new Nc(e),
        this.mipmaps = [],
        this.mapping = t,
        this.channel = 0,
        this.wrapS = n,
        this.wrapT = i,
        this.magFilter = s,
        this.minFilter = a,
        this.anisotropy = l,
        this.format = o,
        this.internalFormat = null,
        this.type = c,
        this.offset = new Ue(0,0),
        this.repeat = new Ue(1,1),
        this.center = new Ue(0,0),
        this.rotation = 0,
        this.matrixAutoUpdate = !0,
        this.matrix = new be,
        this.generateMipmaps = !0,
        this.premultiplyAlpha = !1,
        this.flipY = !0,
        this.unpackAlignment = 4,
        this.colorSpace = h,
        this.userData = {},
        this.version = 0,
        this.onUpdate = null,
        this.isRenderTargetTexture = !1,
        this.pmremVersion = 0
    }
    get image() {
        return this.source.data
    }
    set image(e=null) {
        this.source.data = e
    }
    updateMatrix() {
        this.matrix.setUvTransform(this.offset.x, this.offset.y, this.repeat.x, this.repeat.y, this.rotation, this.center.x, this.center.y)
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        return this.name = e.name,
        this.source = e.source,
        this.mipmaps = e.mipmaps.slice(0),
        this.mapping = e.mapping,
        this.channel = e.channel,
        this.wrapS = e.wrapS,
        this.wrapT = e.wrapT,
        this.magFilter = e.magFilter,
        this.minFilter = e.minFilter,
        this.anisotropy = e.anisotropy,
        this.format = e.format,
        this.internalFormat = e.internalFormat,
        this.type = e.type,
        this.offset.copy(e.offset),
        this.repeat.copy(e.repeat),
        this.center.copy(e.center),
        this.rotation = e.rotation,
        this.matrixAutoUpdate = e.matrixAutoUpdate,
        this.matrix.copy(e.matrix),
        this.generateMipmaps = e.generateMipmaps,
        this.premultiplyAlpha = e.premultiplyAlpha,
        this.flipY = e.flipY,
        this.unpackAlignment = e.unpackAlignment,
        this.colorSpace = e.colorSpace,
        this.userData = JSON.parse(JSON.stringify(e.userData)),
        this.needsUpdate = !0,
        this
    }
    toJSON(e) {
        const t = e === void 0 || typeof e == "string";
        if (!t && e.textures[this.uuid] !== void 0)
            return e.textures[this.uuid];
        const n = {
            metadata: {
                version: 4.6,
                type: "Texture",
                generator: "Texture.toJSON"
            },
            uuid: this.uuid,
            name: this.name,
            image: this.source.toJSON(e).uuid,
            mapping: this.mapping,
            channel: this.channel,
            repeat: [this.repeat.x, this.repeat.y],
            offset: [this.offset.x, this.offset.y],
            center: [this.center.x, this.center.y],
            rotation: this.rotation,
            wrap: [this.wrapS, this.wrapT],
            format: this.format,
            internalFormat: this.internalFormat,
            type: this.type,
            colorSpace: this.colorSpace,
            minFilter: this.minFilter,
            magFilter: this.magFilter,
            anisotropy: this.anisotropy,
            flipY: this.flipY,
            generateMipmaps: this.generateMipmaps,
            premultiplyAlpha: this.premultiplyAlpha,
            unpackAlignment: this.unpackAlignment
        };
        return Object.keys(this.userData).length > 0 && (n.userData = this.userData),
        t || (e.textures[this.uuid] = n),
        n
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
    transformUv(e) {
        if (this.mapping !== Mc)
            return e;
        if (e.applyMatrix3(this.matrix),
        e.x < 0 || e.x > 1)
            switch (this.wrapS) {
            case Ai:
                e.x = e.x - Math.floor(e.x);
                break;
            case Xt:
                e.x = e.x < 0 ? 0 : 1;
                break;
            case Vr:
                Math.abs(Math.floor(e.x) % 2) === 1 ? e.x = Math.ceil(e.x) - e.x : e.x = e.x - Math.floor(e.x);
                break
            }
        if (e.y < 0 || e.y > 1)
            switch (this.wrapT) {
            case Ai:
                e.y = e.y - Math.floor(e.y);
                break;
            case Xt:
                e.y = e.y < 0 ? 0 : 1;
                break;
            case Vr:
                Math.abs(Math.floor(e.y) % 2) === 1 ? e.y = Math.ceil(e.y) - e.y : e.y = e.y - Math.floor(e.y);
                break
            }
        return this.flipY && (e.y = 1 - e.y),
        e
    }
    set needsUpdate(e) {
        e === !0 && (this.version++,
        this.source.needsUpdate = !0)
    }
    set needsPMREMUpdate(e) {
        e === !0 && this.pmremVersion++
    }
}
ht.DEFAULT_IMAGE = null;
ht.DEFAULT_MAPPING = Mc;
ht.DEFAULT_ANISOTROPY = 1;
class Ke {
    constructor(e=0, t=0, n=0, i=1) {
        Ke.prototype.isVector4 = !0,
        this.x = e,
        this.y = t,
        this.z = n,
        this.w = i
    }
    get width() {
        return this.z
    }
    set width(e) {
        this.z = e
    }
    get height() {
        return this.w
    }
    set height(e) {
        this.w = e
    }
    set(e, t, n, i) {
        return this.x = e,
        this.y = t,
        this.z = n,
        this.w = i,
        this
    }
    setScalar(e) {
        return this.x = e,
        this.y = e,
        this.z = e,
        this.w = e,
        this
    }
    setX(e) {
        return this.x = e,
        this
    }
    setY(e) {
        return this.y = e,
        this
    }
    setZ(e) {
        return this.z = e,
        this
    }
    setW(e) {
        return this.w = e,
        this
    }
    setComponent(e, t) {
        switch (e) {
        case 0:
            this.x = t;
            break;
        case 1:
            this.y = t;
            break;
        case 2:
            this.z = t;
            break;
        case 3:
            this.w = t;
            break;
        default:
            throw new Error("index is out of range: " + e)
        }
        return this
    }
    getComponent(e) {
        switch (e) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        case 2:
            return this.z;
        case 3:
            return this.w;
        default:
            throw new Error("index is out of range: " + e)
        }
    }
    clone() {
        return new this.constructor(this.x,this.y,this.z,this.w)
    }
    copy(e) {
        return this.x = e.x,
        this.y = e.y,
        this.z = e.z,
        this.w = e.w !== void 0 ? e.w : 1,
        this
    }
    add(e) {
        return this.x += e.x,
        this.y += e.y,
        this.z += e.z,
        this.w += e.w,
        this
    }
    addScalar(e) {
        return this.x += e,
        this.y += e,
        this.z += e,
        this.w += e,
        this
    }
    addVectors(e, t) {
        return this.x = e.x + t.x,
        this.y = e.y + t.y,
        this.z = e.z + t.z,
        this.w = e.w + t.w,
        this
    }
    addScaledVector(e, t) {
        return this.x += e.x * t,
        this.y += e.y * t,
        this.z += e.z * t,
        this.w += e.w * t,
        this
    }
    sub(e) {
        return this.x -= e.x,
        this.y -= e.y,
        this.z -= e.z,
        this.w -= e.w,
        this
    }
    subScalar(e) {
        return this.x -= e,
        this.y -= e,
        this.z -= e,
        this.w -= e,
        this
    }
    subVectors(e, t) {
        return this.x = e.x - t.x,
        this.y = e.y - t.y,
        this.z = e.z - t.z,
        this.w = e.w - t.w,
        this
    }
    multiply(e) {
        return this.x *= e.x,
        this.y *= e.y,
        this.z *= e.z,
        this.w *= e.w,
        this
    }
    multiplyScalar(e) {
        return this.x *= e,
        this.y *= e,
        this.z *= e,
        this.w *= e,
        this
    }
    applyMatrix4(e) {
        const t = this.x
          , n = this.y
          , i = this.z
          , s = this.w
          , a = e.elements;
        return this.x = a[0] * t + a[4] * n + a[8] * i + a[12] * s,
        this.y = a[1] * t + a[5] * n + a[9] * i + a[13] * s,
        this.z = a[2] * t + a[6] * n + a[10] * i + a[14] * s,
        this.w = a[3] * t + a[7] * n + a[11] * i + a[15] * s,
        this
    }
    divideScalar(e) {
        return this.multiplyScalar(1 / e)
    }
    setAxisAngleFromQuaternion(e) {
        this.w = 2 * Math.acos(e.w);
        const t = Math.sqrt(1 - e.w * e.w);
        return t < 1e-4 ? (this.x = 1,
        this.y = 0,
        this.z = 0) : (this.x = e.x / t,
        this.y = e.y / t,
        this.z = e.z / t),
        this
    }
    setAxisAngleFromRotationMatrix(e) {
        let t, n, i, s;
        const c = e.elements
          , l = c[0]
          , h = c[4]
          , u = c[8]
          , d = c[1]
          , m = c[5]
          , g = c[9]
          , _ = c[2]
          , p = c[6]
          , f = c[10];
        if (Math.abs(h - d) < .01 && Math.abs(u - _) < .01 && Math.abs(g - p) < .01) {
            if (Math.abs(h + d) < .1 && Math.abs(u + _) < .1 && Math.abs(g + p) < .1 && Math.abs(l + m + f - 3) < .1)
                return this.set(1, 0, 0, 0),
                this;
            t = Math.PI;
            const y = (l + 1) / 2
              , E = (m + 1) / 2
              , U = (f + 1) / 2
              , w = (h + d) / 4
              , b = (u + _) / 4
              , L = (g + p) / 4;
            return y > E && y > U ? y < .01 ? (n = 0,
            i = .707106781,
            s = .707106781) : (n = Math.sqrt(y),
            i = w / n,
            s = b / n) : E > U ? E < .01 ? (n = .707106781,
            i = 0,
            s = .707106781) : (i = Math.sqrt(E),
            n = w / i,
            s = L / i) : U < .01 ? (n = .707106781,
            i = .707106781,
            s = 0) : (s = Math.sqrt(U),
            n = b / s,
            i = L / s),
            this.set(n, i, s, t),
            this
        }
        let T = Math.sqrt((p - g) * (p - g) + (u - _) * (u - _) + (d - h) * (d - h));
        return Math.abs(T) < .001 && (T = 1),
        this.x = (p - g) / T,
        this.y = (u - _) / T,
        this.z = (d - h) / T,
        this.w = Math.acos((l + m + f - 1) / 2),
        this
    }
    min(e) {
        return this.x = Math.min(this.x, e.x),
        this.y = Math.min(this.y, e.y),
        this.z = Math.min(this.z, e.z),
        this.w = Math.min(this.w, e.w),
        this
    }
    max(e) {
        return this.x = Math.max(this.x, e.x),
        this.y = Math.max(this.y, e.y),
        this.z = Math.max(this.z, e.z),
        this.w = Math.max(this.w, e.w),
        this
    }
    clamp(e, t) {
        return this.x = Math.max(e.x, Math.min(t.x, this.x)),
        this.y = Math.max(e.y, Math.min(t.y, this.y)),
        this.z = Math.max(e.z, Math.min(t.z, this.z)),
        this.w = Math.max(e.w, Math.min(t.w, this.w)),
        this
    }
    clampScalar(e, t) {
        return this.x = Math.max(e, Math.min(t, this.x)),
        this.y = Math.max(e, Math.min(t, this.y)),
        this.z = Math.max(e, Math.min(t, this.z)),
        this.w = Math.max(e, Math.min(t, this.w)),
        this
    }
    clampLength(e, t) {
        const n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
    }
    floor() {
        return this.x = Math.floor(this.x),
        this.y = Math.floor(this.y),
        this.z = Math.floor(this.z),
        this.w = Math.floor(this.w),
        this
    }
    ceil() {
        return this.x = Math.ceil(this.x),
        this.y = Math.ceil(this.y),
        this.z = Math.ceil(this.z),
        this.w = Math.ceil(this.w),
        this
    }
    round() {
        return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this.z = Math.round(this.z),
        this.w = Math.round(this.w),
        this
    }
    roundToZero() {
        return this.x = Math.trunc(this.x),
        this.y = Math.trunc(this.y),
        this.z = Math.trunc(this.z),
        this.w = Math.trunc(this.w),
        this
    }
    negate() {
        return this.x = -this.x,
        this.y = -this.y,
        this.z = -this.z,
        this.w = -this.w,
        this
    }
    dot(e) {
        return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w)
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    }
    normalize() {
        return this.divideScalar(this.length() || 1)
    }
    setLength(e) {
        return this.normalize().multiplyScalar(e)
    }
    lerp(e, t) {
        return this.x += (e.x - this.x) * t,
        this.y += (e.y - this.y) * t,
        this.z += (e.z - this.z) * t,
        this.w += (e.w - this.w) * t,
        this
    }
    lerpVectors(e, t, n) {
        return this.x = e.x + (t.x - e.x) * n,
        this.y = e.y + (t.y - e.y) * n,
        this.z = e.z + (t.z - e.z) * n,
        this.w = e.w + (t.w - e.w) * n,
        this
    }
    equals(e) {
        return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w
    }
    fromArray(e, t=0) {
        return this.x = e[t],
        this.y = e[t + 1],
        this.z = e[t + 2],
        this.w = e[t + 3],
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this.x,
        e[t + 1] = this.y,
        e[t + 2] = this.z,
        e[t + 3] = this.w,
        e
    }
    fromBufferAttribute(e, t) {
        return this.x = e.getX(t),
        this.y = e.getY(t),
        this.z = e.getZ(t),
        this.w = e.getW(t),
        this
    }
    random() {
        return this.x = Math.random(),
        this.y = Math.random(),
        this.z = Math.random(),
        this.w = Math.random(),
        this
    }
    *[Symbol.iterator]() {
        yield this.x,
        yield this.y,
        yield this.z,
        yield this.w
    }
}
class Vh extends Ii {
    constructor(e=1, t=1, n={}) {
        super(),
        this.isRenderTarget = !0,
        this.width = e,
        this.height = t,
        this.depth = 1,
        this.scissor = new Ke(0,0,e,t),
        this.scissorTest = !1,
        this.viewport = new Ke(0,0,e,t);
        const i = {
            width: e,
            height: t,
            depth: 1
        };
        n = Object.assign({
            generateMipmaps: !1,
            internalFormat: null,
            minFilter: lt,
            depthBuffer: !0,
            stencilBuffer: !1,
            resolveDepthBuffer: !0,
            resolveStencilBuffer: !0,
            depthTexture: null,
            samples: 0,
            count: 1
        }, n);
        const s = new ht(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);
        s.flipY = !1,
        s.generateMipmaps = n.generateMipmaps,
        s.internalFormat = n.internalFormat,
        this.textures = [];
        const a = n.count;
        for (let o = 0; o < a; o++)
            this.textures[o] = s.clone(),
            this.textures[o].isRenderTargetTexture = !0;
        this.depthBuffer = n.depthBuffer,
        this.stencilBuffer = n.stencilBuffer,
        this.resolveDepthBuffer = n.resolveDepthBuffer,
        this.resolveStencilBuffer = n.resolveStencilBuffer,
        this.depthTexture = n.depthTexture,
        this.samples = n.samples
    }
    get texture() {
        return this.textures[0]
    }
    set texture(e) {
        this.textures[0] = e
    }
    setSize(e, t, n=1) {
        if (this.width !== e || this.height !== t || this.depth !== n) {
            this.width = e,
            this.height = t,
            this.depth = n;
            for (let i = 0, s = this.textures.length; i < s; i++)
                this.textures[i].image.width = e,
                this.textures[i].image.height = t,
                this.textures[i].image.depth = n;
            this.dispose()
        }
        this.viewport.set(0, 0, e, t),
        this.scissor.set(0, 0, e, t)
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        this.width = e.width,
        this.height = e.height,
        this.depth = e.depth,
        this.scissor.copy(e.scissor),
        this.scissorTest = e.scissorTest,
        this.viewport.copy(e.viewport),
        this.textures.length = 0;
        for (let n = 0, i = e.textures.length; n < i; n++)
            this.textures[n] = e.textures[n].clone(),
            this.textures[n].isRenderTargetTexture = !0;
        const t = Object.assign({}, e.texture.image);
        return this.texture.source = new Nc(t),
        this.depthBuffer = e.depthBuffer,
        this.stencilBuffer = e.stencilBuffer,
        this.resolveDepthBuffer = e.resolveDepthBuffer,
        this.resolveStencilBuffer = e.resolveStencilBuffer,
        e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
        this.samples = e.samples,
        this
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
}
class Yn extends Vh {
    constructor(e=1, t=1, n={}) {
        super(e, t, n),
        this.isWebGLRenderTarget = !0
    }
}
class Fc extends ht {
    constructor(e=null, t=1, n=1, i=1) {
        super(null),
        this.isDataArrayTexture = !0,
        this.image = {
            data: e,
            width: t,
            height: n,
            depth: i
        },
        this.magFilter = Et,
        this.minFilter = Et,
        this.wrapR = Xt,
        this.generateMipmaps = !1,
        this.flipY = !1,
        this.unpackAlignment = 1
    }
}
class Gh extends ht {
    constructor(e=null, t=1, n=1, i=1) {
        super(null),
        this.isData3DTexture = !0,
        this.image = {
            data: e,
            width: t,
            height: n,
            depth: i
        },
        this.magFilter = Et,
        this.minFilter = Et,
        this.wrapR = Xt,
        this.generateMipmaps = !1,
        this.flipY = !1,
        this.unpackAlignment = 1
    }
}
class Pn {
    constructor(e=0, t=0, n=0, i=1) {
        this.isQuaternion = !0,
        this._x = e,
        this._y = t,
        this._z = n,
        this._w = i
    }
    static slerpFlat(e, t, n, i, s, a, o) {
        let c = n[i + 0]
          , l = n[i + 1]
          , h = n[i + 2]
          , u = n[i + 3];
        const d = s[a + 0]
          , m = s[a + 1]
          , g = s[a + 2]
          , _ = s[a + 3];
        if (o === 0) {
            e[t + 0] = c,
            e[t + 1] = l,
            e[t + 2] = h,
            e[t + 3] = u;
            return
        }
        if (o === 1) {
            e[t + 0] = d,
            e[t + 1] = m,
            e[t + 2] = g,
            e[t + 3] = _;
            return
        }
        if (u !== _ || c !== d || l !== m || h !== g) {
            let p = 1 - o;
            const f = c * d + l * m + h * g + u * _
              , T = f >= 0 ? 1 : -1
              , y = 1 - f * f;
            if (y > Number.EPSILON) {
                const U = Math.sqrt(y)
                  , w = Math.atan2(U, f * T);
                p = Math.sin(p * w) / U,
                o = Math.sin(o * w) / U
            }
            const E = o * T;
            if (c = c * p + d * E,
            l = l * p + m * E,
            h = h * p + g * E,
            u = u * p + _ * E,
            p === 1 - o) {
                const U = 1 / Math.sqrt(c * c + l * l + h * h + u * u);
                c *= U,
                l *= U,
                h *= U,
                u *= U
            }
        }
        e[t] = c,
        e[t + 1] = l,
        e[t + 2] = h,
        e[t + 3] = u
    }
    static multiplyQuaternionsFlat(e, t, n, i, s, a) {
        const o = n[i]
          , c = n[i + 1]
          , l = n[i + 2]
          , h = n[i + 3]
          , u = s[a]
          , d = s[a + 1]
          , m = s[a + 2]
          , g = s[a + 3];
        return e[t] = o * g + h * u + c * m - l * d,
        e[t + 1] = c * g + h * d + l * u - o * m,
        e[t + 2] = l * g + h * m + o * d - c * u,
        e[t + 3] = h * g - o * u - c * d - l * m,
        e
    }
    get x() {
        return this._x
    }
    set x(e) {
        this._x = e,
        this._onChangeCallback()
    }
    get y() {
        return this._y
    }
    set y(e) {
        this._y = e,
        this._onChangeCallback()
    }
    get z() {
        return this._z
    }
    set z(e) {
        this._z = e,
        this._onChangeCallback()
    }
    get w() {
        return this._w
    }
    set w(e) {
        this._w = e,
        this._onChangeCallback()
    }
    set(e, t, n, i) {
        return this._x = e,
        this._y = t,
        this._z = n,
        this._w = i,
        this._onChangeCallback(),
        this
    }
    clone() {
        return new this.constructor(this._x,this._y,this._z,this._w)
    }
    copy(e) {
        return this._x = e.x,
        this._y = e.y,
        this._z = e.z,
        this._w = e.w,
        this._onChangeCallback(),
        this
    }
    setFromEuler(e, t=!0) {
        const n = e._x
          , i = e._y
          , s = e._z
          , a = e._order
          , o = Math.cos
          , c = Math.sin
          , l = o(n / 2)
          , h = o(i / 2)
          , u = o(s / 2)
          , d = c(n / 2)
          , m = c(i / 2)
          , g = c(s / 2);
        switch (a) {
        case "XYZ":
            this._x = d * h * u + l * m * g,
            this._y = l * m * u - d * h * g,
            this._z = l * h * g + d * m * u,
            this._w = l * h * u - d * m * g;
            break;
        case "YXZ":
            this._x = d * h * u + l * m * g,
            this._y = l * m * u - d * h * g,
            this._z = l * h * g - d * m * u,
            this._w = l * h * u + d * m * g;
            break;
        case "ZXY":
            this._x = d * h * u - l * m * g,
            this._y = l * m * u + d * h * g,
            this._z = l * h * g + d * m * u,
            this._w = l * h * u - d * m * g;
            break;
        case "ZYX":
            this._x = d * h * u - l * m * g,
            this._y = l * m * u + d * h * g,
            this._z = l * h * g - d * m * u,
            this._w = l * h * u + d * m * g;
            break;
        case "YZX":
            this._x = d * h * u + l * m * g,
            this._y = l * m * u + d * h * g,
            this._z = l * h * g - d * m * u,
            this._w = l * h * u - d * m * g;
            break;
        case "XZY":
            this._x = d * h * u - l * m * g,
            this._y = l * m * u - d * h * g,
            this._z = l * h * g + d * m * u,
            this._w = l * h * u + d * m * g;
            break;
        default:
            console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: " + a)
        }
        return t === !0 && this._onChangeCallback(),
        this
    }
    setFromAxisAngle(e, t) {
        const n = t / 2
          , i = Math.sin(n);
        return this._x = e.x * i,
        this._y = e.y * i,
        this._z = e.z * i,
        this._w = Math.cos(n),
        this._onChangeCallback(),
        this
    }
    setFromRotationMatrix(e) {
        const t = e.elements
          , n = t[0]
          , i = t[4]
          , s = t[8]
          , a = t[1]
          , o = t[5]
          , c = t[9]
          , l = t[2]
          , h = t[6]
          , u = t[10]
          , d = n + o + u;
        if (d > 0) {
            const m = .5 / Math.sqrt(d + 1);
            this._w = .25 / m,
            this._x = (h - c) * m,
            this._y = (s - l) * m,
            this._z = (a - i) * m
        } else if (n > o && n > u) {
            const m = 2 * Math.sqrt(1 + n - o - u);
            this._w = (h - c) / m,
            this._x = .25 * m,
            this._y = (i + a) / m,
            this._z = (s + l) / m
        } else if (o > u) {
            const m = 2 * Math.sqrt(1 + o - n - u);
            this._w = (s - l) / m,
            this._x = (i + a) / m,
            this._y = .25 * m,
            this._z = (c + h) / m
        } else {
            const m = 2 * Math.sqrt(1 + u - n - o);
            this._w = (a - i) / m,
            this._x = (s + l) / m,
            this._y = (c + h) / m,
            this._z = .25 * m
        }
        return this._onChangeCallback(),
        this
    }
    setFromUnitVectors(e, t) {
        let n = e.dot(t) + 1;
        return n < Number.EPSILON ? (n = 0,
        Math.abs(e.x) > Math.abs(e.z) ? (this._x = -e.y,
        this._y = e.x,
        this._z = 0,
        this._w = n) : (this._x = 0,
        this._y = -e.z,
        this._z = e.y,
        this._w = n)) : (this._x = e.y * t.z - e.z * t.y,
        this._y = e.z * t.x - e.x * t.z,
        this._z = e.x * t.y - e.y * t.x,
        this._w = n),
        this.normalize()
    }
    angleTo(e) {
        return 2 * Math.acos(Math.abs(dt(this.dot(e), -1, 1)))
    }
    rotateTowards(e, t) {
        const n = this.angleTo(e);
        if (n === 0)
            return this;
        const i = Math.min(1, t / n);
        return this.slerp(e, i),
        this
    }
    identity() {
        return this.set(0, 0, 0, 1)
    }
    invert() {
        return this.conjugate()
    }
    conjugate() {
        return this._x *= -1,
        this._y *= -1,
        this._z *= -1,
        this._onChangeCallback(),
        this
    }
    dot(e) {
        return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w
    }
    lengthSq() {
        return this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w
    }
    length() {
        return Math.sqrt(this._x * this._x + this._y * this._y + this._z * this._z + this._w * this._w)
    }
    normalize() {
        let e = this.length();
        return e === 0 ? (this._x = 0,
        this._y = 0,
        this._z = 0,
        this._w = 1) : (e = 1 / e,
        this._x = this._x * e,
        this._y = this._y * e,
        this._z = this._z * e,
        this._w = this._w * e),
        this._onChangeCallback(),
        this
    }
    multiply(e) {
        return this.multiplyQuaternions(this, e)
    }
    premultiply(e) {
        return this.multiplyQuaternions(e, this)
    }
    multiplyQuaternions(e, t) {
        const n = e._x
          , i = e._y
          , s = e._z
          , a = e._w
          , o = t._x
          , c = t._y
          , l = t._z
          , h = t._w;
        return this._x = n * h + a * o + i * l - s * c,
        this._y = i * h + a * c + s * o - n * l,
        this._z = s * h + a * l + n * c - i * o,
        this._w = a * h - n * o - i * c - s * l,
        this._onChangeCallback(),
        this
    }
    slerp(e, t) {
        if (t === 0)
            return this;
        if (t === 1)
            return this.copy(e);
        const n = this._x
          , i = this._y
          , s = this._z
          , a = this._w;
        let o = a * e._w + n * e._x + i * e._y + s * e._z;
        if (o < 0 ? (this._w = -e._w,
        this._x = -e._x,
        this._y = -e._y,
        this._z = -e._z,
        o = -o) : this.copy(e),
        o >= 1)
            return this._w = a,
            this._x = n,
            this._y = i,
            this._z = s,
            this;
        const c = 1 - o * o;
        if (c <= Number.EPSILON) {
            const m = 1 - t;
            return this._w = m * a + t * this._w,
            this._x = m * n + t * this._x,
            this._y = m * i + t * this._y,
            this._z = m * s + t * this._z,
            this.normalize(),
            this
        }
        const l = Math.sqrt(c)
          , h = Math.atan2(l, o)
          , u = Math.sin((1 - t) * h) / l
          , d = Math.sin(t * h) / l;
        return this._w = a * u + this._w * d,
        this._x = n * u + this._x * d,
        this._y = i * u + this._y * d,
        this._z = s * u + this._z * d,
        this._onChangeCallback(),
        this
    }
    slerpQuaternions(e, t, n) {
        return this.copy(e).slerp(t, n)
    }
    random() {
        const e = 2 * Math.PI * Math.random()
          , t = 2 * Math.PI * Math.random()
          , n = Math.random()
          , i = Math.sqrt(1 - n)
          , s = Math.sqrt(n);
        return this.set(i * Math.sin(e), i * Math.cos(e), s * Math.sin(t), s * Math.cos(t))
    }
    equals(e) {
        return e._x === this._x && e._y === this._y && e._z === this._z && e._w === this._w
    }
    fromArray(e, t=0) {
        return this._x = e[t],
        this._y = e[t + 1],
        this._z = e[t + 2],
        this._w = e[t + 3],
        this._onChangeCallback(),
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this._x,
        e[t + 1] = this._y,
        e[t + 2] = this._z,
        e[t + 3] = this._w,
        e
    }
    fromBufferAttribute(e, t) {
        return this._x = e.getX(t),
        this._y = e.getY(t),
        this._z = e.getZ(t),
        this._w = e.getW(t),
        this._onChangeCallback(),
        this
    }
    toJSON() {
        return this.toArray()
    }
    _onChange(e) {
        return this._onChangeCallback = e,
        this
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
        yield this._x,
        yield this._y,
        yield this._z,
        yield this._w
    }
}
class P {
    constructor(e=0, t=0, n=0) {
        P.prototype.isVector3 = !0,
        this.x = e,
        this.y = t,
        this.z = n
    }
    set(e, t, n) {
        return n === void 0 && (n = this.z),
        this.x = e,
        this.y = t,
        this.z = n,
        this
    }
    setScalar(e) {
        return this.x = e,
        this.y = e,
        this.z = e,
        this
    }
    setX(e) {
        return this.x = e,
        this
    }
    setY(e) {
        return this.y = e,
        this
    }
    setZ(e) {
        return this.z = e,
        this
    }
    setComponent(e, t) {
        switch (e) {
        case 0:
            this.x = t;
            break;
        case 1:
            this.y = t;
            break;
        case 2:
            this.z = t;
            break;
        default:
            throw new Error("index is out of range: " + e)
        }
        return this
    }
    getComponent(e) {
        switch (e) {
        case 0:
            return this.x;
        case 1:
            return this.y;
        case 2:
            return this.z;
        default:
            throw new Error("index is out of range: " + e)
        }
    }
    clone() {
        return new this.constructor(this.x,this.y,this.z)
    }
    copy(e) {
        return this.x = e.x,
        this.y = e.y,
        this.z = e.z,
        this
    }
    add(e) {
        return this.x += e.x,
        this.y += e.y,
        this.z += e.z,
        this
    }
    addScalar(e) {
        return this.x += e,
        this.y += e,
        this.z += e,
        this
    }
    addVectors(e, t) {
        return this.x = e.x + t.x,
        this.y = e.y + t.y,
        this.z = e.z + t.z,
        this
    }
    addScaledVector(e, t) {
        return this.x += e.x * t,
        this.y += e.y * t,
        this.z += e.z * t,
        this
    }
    sub(e) {
        return this.x -= e.x,
        this.y -= e.y,
        this.z -= e.z,
        this
    }
    subScalar(e) {
        return this.x -= e,
        this.y -= e,
        this.z -= e,
        this
    }
    subVectors(e, t) {
        return this.x = e.x - t.x,
        this.y = e.y - t.y,
        this.z = e.z - t.z,
        this
    }
    multiply(e) {
        return this.x *= e.x,
        this.y *= e.y,
        this.z *= e.z,
        this
    }
    multiplyScalar(e) {
        return this.x *= e,
        this.y *= e,
        this.z *= e,
        this
    }
    multiplyVectors(e, t) {
        return this.x = e.x * t.x,
        this.y = e.y * t.y,
        this.z = e.z * t.z,
        this
    }
    applyEuler(e) {
        return this.applyQuaternion(ho.setFromEuler(e))
    }
    applyAxisAngle(e, t) {
        return this.applyQuaternion(ho.setFromAxisAngle(e, t))
    }
    applyMatrix3(e) {
        const t = this.x
          , n = this.y
          , i = this.z
          , s = e.elements;
        return this.x = s[0] * t + s[3] * n + s[6] * i,
        this.y = s[1] * t + s[4] * n + s[7] * i,
        this.z = s[2] * t + s[5] * n + s[8] * i,
        this
    }
    applyNormalMatrix(e) {
        return this.applyMatrix3(e).normalize()
    }
    applyMatrix4(e) {
        const t = this.x
          , n = this.y
          , i = this.z
          , s = e.elements
          , a = 1 / (s[3] * t + s[7] * n + s[11] * i + s[15]);
        return this.x = (s[0] * t + s[4] * n + s[8] * i + s[12]) * a,
        this.y = (s[1] * t + s[5] * n + s[9] * i + s[13]) * a,
        this.z = (s[2] * t + s[6] * n + s[10] * i + s[14]) * a,
        this
    }
    applyQuaternion(e) {
        const t = this.x
          , n = this.y
          , i = this.z
          , s = e.x
          , a = e.y
          , o = e.z
          , c = e.w
          , l = 2 * (a * i - o * n)
          , h = 2 * (o * t - s * i)
          , u = 2 * (s * n - a * t);
        return this.x = t + c * l + a * u - o * h,
        this.y = n + c * h + o * l - s * u,
        this.z = i + c * u + s * h - a * l,
        this
    }
    project(e) {
        return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)
    }
    unproject(e) {
        return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)
    }
    transformDirection(e) {
        const t = this.x
          , n = this.y
          , i = this.z
          , s = e.elements;
        return this.x = s[0] * t + s[4] * n + s[8] * i,
        this.y = s[1] * t + s[5] * n + s[9] * i,
        this.z = s[2] * t + s[6] * n + s[10] * i,
        this.normalize()
    }
    divide(e) {
        return this.x /= e.x,
        this.y /= e.y,
        this.z /= e.z,
        this
    }
    divideScalar(e) {
        return this.multiplyScalar(1 / e)
    }
    min(e) {
        return this.x = Math.min(this.x, e.x),
        this.y = Math.min(this.y, e.y),
        this.z = Math.min(this.z, e.z),
        this
    }
    max(e) {
        return this.x = Math.max(this.x, e.x),
        this.y = Math.max(this.y, e.y),
        this.z = Math.max(this.z, e.z),
        this
    }
    clamp(e, t) {
        return this.x = Math.max(e.x, Math.min(t.x, this.x)),
        this.y = Math.max(e.y, Math.min(t.y, this.y)),
        this.z = Math.max(e.z, Math.min(t.z, this.z)),
        this
    }
    clampScalar(e, t) {
        return this.x = Math.max(e, Math.min(t, this.x)),
        this.y = Math.max(e, Math.min(t, this.y)),
        this.z = Math.max(e, Math.min(t, this.z)),
        this
    }
    clampLength(e, t) {
        const n = this.length();
        return this.divideScalar(n || 1).multiplyScalar(Math.max(e, Math.min(t, n)))
    }
    floor() {
        return this.x = Math.floor(this.x),
        this.y = Math.floor(this.y),
        this.z = Math.floor(this.z),
        this
    }
    ceil() {
        return this.x = Math.ceil(this.x),
        this.y = Math.ceil(this.y),
        this.z = Math.ceil(this.z),
        this
    }
    round() {
        return this.x = Math.round(this.x),
        this.y = Math.round(this.y),
        this.z = Math.round(this.z),
        this
    }
    roundToZero() {
        return this.x = Math.trunc(this.x),
        this.y = Math.trunc(this.y),
        this.z = Math.trunc(this.z),
        this
    }
    negate() {
        return this.x = -this.x,
        this.y = -this.y,
        this.z = -this.z,
        this
    }
    dot(e) {
        return this.x * e.x + this.y * e.y + this.z * e.z
    }
    lengthSq() {
        return this.x * this.x + this.y * this.y + this.z * this.z
    }
    length() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z)
    }
    manhattanLength() {
        return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z)
    }
    normalize() {
        return this.divideScalar(this.length() || 1)
    }
    setLength(e) {
        return this.normalize().multiplyScalar(e)
    }
    lerp(e, t) {
        return this.x += (e.x - this.x) * t,
        this.y += (e.y - this.y) * t,
        this.z += (e.z - this.z) * t,
        this
    }
    lerpVectors(e, t, n) {
        return this.x = e.x + (t.x - e.x) * n,
        this.y = e.y + (t.y - e.y) * n,
        this.z = e.z + (t.z - e.z) * n,
        this
    }
    cross(e) {
        return this.crossVectors(this, e)
    }
    crossVectors(e, t) {
        const n = e.x
          , i = e.y
          , s = e.z
          , a = t.x
          , o = t.y
          , c = t.z;
        return this.x = i * c - s * o,
        this.y = s * a - n * c,
        this.z = n * o - i * a,
        this
    }
    projectOnVector(e) {
        const t = e.lengthSq();
        if (t === 0)
            return this.set(0, 0, 0);
        const n = e.dot(this) / t;
        return this.copy(e).multiplyScalar(n)
    }
    projectOnPlane(e) {
        return fs.copy(this).projectOnVector(e),
        this.sub(fs)
    }
    reflect(e) {
        return this.sub(fs.copy(e).multiplyScalar(2 * this.dot(e)))
    }
    angleTo(e) {
        const t = Math.sqrt(this.lengthSq() * e.lengthSq());
        if (t === 0)
            return Math.PI / 2;
        const n = this.dot(e) / t;
        return Math.acos(dt(n, -1, 1))
    }
    distanceTo(e) {
        return Math.sqrt(this.distanceToSquared(e))
    }
    distanceToSquared(e) {
        const t = this.x - e.x
          , n = this.y - e.y
          , i = this.z - e.z;
        return t * t + n * n + i * i
    }
    manhattanDistanceTo(e) {
        return Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    }
    setFromSpherical(e) {
        return this.setFromSphericalCoords(e.radius, e.phi, e.theta)
    }
    setFromSphericalCoords(e, t, n) {
        const i = Math.sin(t) * e;
        return this.x = i * Math.sin(n),
        this.y = Math.cos(t) * e,
        this.z = i * Math.cos(n),
        this
    }
    setFromCylindrical(e) {
        return this.setFromCylindricalCoords(e.radius, e.theta, e.y)
    }
    setFromCylindricalCoords(e, t, n) {
        return this.x = e * Math.sin(t),
        this.y = n,
        this.z = e * Math.cos(t),
        this
    }
    setFromMatrixPosition(e) {
        const t = e.elements;
        return this.x = t[12],
        this.y = t[13],
        this.z = t[14],
        this
    }
    setFromMatrixScale(e) {
        const t = this.setFromMatrixColumn(e, 0).length()
          , n = this.setFromMatrixColumn(e, 1).length()
          , i = this.setFromMatrixColumn(e, 2).length();
        return this.x = t,
        this.y = n,
        this.z = i,
        this
    }
    setFromMatrixColumn(e, t) {
        return this.fromArray(e.elements, t * 4)
    }
    setFromMatrix3Column(e, t) {
        return this.fromArray(e.elements, t * 3)
    }
    setFromEuler(e) {
        return this.x = e._x,
        this.y = e._y,
        this.z = e._z,
        this
    }
    setFromColor(e) {
        return this.x = e.r,
        this.y = e.g,
        this.z = e.b,
        this
    }
    equals(e) {
        return e.x === this.x && e.y === this.y && e.z === this.z
    }
    fromArray(e, t=0) {
        return this.x = e[t],
        this.y = e[t + 1],
        this.z = e[t + 2],
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this.x,
        e[t + 1] = this.y,
        e[t + 2] = this.z,
        e
    }
    fromBufferAttribute(e, t) {
        return this.x = e.getX(t),
        this.y = e.getY(t),
        this.z = e.getZ(t),
        this
    }
    random() {
        return this.x = Math.random(),
        this.y = Math.random(),
        this.z = Math.random(),
        this
    }
    randomDirection() {
        const e = Math.random() * Math.PI * 2
          , t = Math.random() * 2 - 1
          , n = Math.sqrt(1 - t * t);
        return this.x = n * Math.cos(e),
        this.y = t,
        this.z = n * Math.sin(e),
        this
    }
    *[Symbol.iterator]() {
        yield this.x,
        yield this.y,
        yield this.z
    }
}
const fs = new P
  , ho = new Pn;
class mn {
    constructor(e=new P(1 / 0,1 / 0,1 / 0), t=new P(-1 / 0,-1 / 0,-1 / 0)) {
        this.isBox3 = !0,
        this.min = e,
        this.max = t
    }
    set(e, t) {
        return this.min.copy(e),
        this.max.copy(t),
        this
    }
    setFromArray(e) {
        this.makeEmpty();
        for (let t = 0, n = e.length; t < n; t += 3)
            this.expandByPoint(Nt.fromArray(e, t));
        return this
    }
    setFromBufferAttribute(e) {
        this.makeEmpty();
        for (let t = 0, n = e.count; t < n; t++)
            this.expandByPoint(Nt.fromBufferAttribute(e, t));
        return this
    }
    setFromPoints(e) {
        this.makeEmpty();
        for (let t = 0, n = e.length; t < n; t++)
            this.expandByPoint(e[t]);
        return this
    }
    setFromCenterAndSize(e, t) {
        const n = Nt.copy(t).multiplyScalar(.5);
        return this.min.copy(e).sub(n),
        this.max.copy(e).add(n),
        this
    }
    setFromObject(e, t=!1) {
        return this.makeEmpty(),
        this.expandByObject(e, t)
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        return this.min.copy(e.min),
        this.max.copy(e.max),
        this
    }
    makeEmpty() {
        return this.min.x = this.min.y = this.min.z = 1 / 0,
        this.max.x = this.max.y = this.max.z = -1 / 0,
        this
    }
    isEmpty() {
        return this.max.x < this.min.x || this.max.y < this.min.y || this.max.z < this.min.z
    }
    getCenter(e) {
        return this.isEmpty() ? e.set(0, 0, 0) : e.addVectors(this.min, this.max).multiplyScalar(.5)
    }
    getSize(e) {
        return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min)
    }
    expandByPoint(e) {
        return this.min.min(e),
        this.max.max(e),
        this
    }
    expandByVector(e) {
        return this.min.sub(e),
        this.max.add(e),
        this
    }
    expandByScalar(e) {
        return this.min.addScalar(-e),
        this.max.addScalar(e),
        this
    }
    expandByObject(e, t=!1) {
        e.updateWorldMatrix(!1, !1);
        const n = e.geometry;
        if (n !== void 0) {
            const s = n.getAttribute("position");
            if (t === !0 && s !== void 0 && e.isInstancedMesh !== !0)
                for (let a = 0, o = s.count; a < o; a++)
                    e.isMesh === !0 ? e.getVertexPosition(a, Nt) : Nt.fromBufferAttribute(s, a),
                    Nt.applyMatrix4(e.matrixWorld),
                    this.expandByPoint(Nt);
            else
                e.boundingBox !== void 0 ? (e.boundingBox === null && e.computeBoundingBox(),
                hr.copy(e.boundingBox)) : (n.boundingBox === null && n.computeBoundingBox(),
                hr.copy(n.boundingBox)),
                hr.applyMatrix4(e.matrixWorld),
                this.union(hr)
        }
        const i = e.children;
        for (let s = 0, a = i.length; s < a; s++)
            this.expandByObject(i[s], t);
        return this
    }
    containsPoint(e) {
        return !(e.x < this.min.x || e.x > this.max.x || e.y < this.min.y || e.y > this.max.y || e.z < this.min.z || e.z > this.max.z)
    }
    containsBox(e) {
        return this.min.x <= e.min.x && e.max.x <= this.max.x && this.min.y <= e.min.y && e.max.y <= this.max.y && this.min.z <= e.min.z && e.max.z <= this.max.z
    }
    getParameter(e, t) {
        return t.set((e.x - this.min.x) / (this.max.x - this.min.x), (e.y - this.min.y) / (this.max.y - this.min.y), (e.z - this.min.z) / (this.max.z - this.min.z))
    }
    intersectsBox(e) {
        return !(e.max.x < this.min.x || e.min.x > this.max.x || e.max.y < this.min.y || e.min.y > this.max.y || e.max.z < this.min.z || e.min.z > this.max.z)
    }
    intersectsSphere(e) {
        return this.clampPoint(e.center, Nt),
        Nt.distanceToSquared(e.center) <= e.radius * e.radius
    }
    intersectsPlane(e) {
        let t, n;
        return e.normal.x > 0 ? (t = e.normal.x * this.min.x,
        n = e.normal.x * this.max.x) : (t = e.normal.x * this.max.x,
        n = e.normal.x * this.min.x),
        e.normal.y > 0 ? (t += e.normal.y * this.min.y,
        n += e.normal.y * this.max.y) : (t += e.normal.y * this.max.y,
        n += e.normal.y * this.min.y),
        e.normal.z > 0 ? (t += e.normal.z * this.min.z,
        n += e.normal.z * this.max.z) : (t += e.normal.z * this.max.z,
        n += e.normal.z * this.min.z),
        t <= -e.constant && n >= -e.constant
    }
    intersectsTriangle(e) {
        if (this.isEmpty())
            return !1;
        this.getCenter(zi),
        ur.subVectors(this.max, zi),
        Qn.subVectors(e.a, zi),
        ei.subVectors(e.b, zi),
        ti.subVectors(e.c, zi),
        _n.subVectors(ei, Qn),
        xn.subVectors(ti, ei),
        Dn.subVectors(Qn, ti);
        let t = [0, -_n.z, _n.y, 0, -xn.z, xn.y, 0, -Dn.z, Dn.y, _n.z, 0, -_n.x, xn.z, 0, -xn.x, Dn.z, 0, -Dn.x, -_n.y, _n.x, 0, -xn.y, xn.x, 0, -Dn.y, Dn.x, 0];
        return !ps(t, Qn, ei, ti, ur) || (t = [1, 0, 0, 0, 1, 0, 0, 0, 1],
        !ps(t, Qn, ei, ti, ur)) ? !1 : (dr.crossVectors(_n, xn),
        t = [dr.x, dr.y, dr.z],
        ps(t, Qn, ei, ti, ur))
    }
    clampPoint(e, t) {
        return t.copy(e).clamp(this.min, this.max)
    }
    distanceToPoint(e) {
        return this.clampPoint(e, Nt).distanceTo(e)
    }
    getBoundingSphere(e) {
        return this.isEmpty() ? e.makeEmpty() : (this.getCenter(e.center),
        e.radius = this.getSize(Nt).length() * .5),
        e
    }
    intersect(e) {
        return this.min.max(e.min),
        this.max.min(e.max),
        this.isEmpty() && this.makeEmpty(),
        this
    }
    union(e) {
        return this.min.min(e.min),
        this.max.max(e.max),
        this
    }
    applyMatrix4(e) {
        return this.isEmpty() ? this : (en[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        en[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        en[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        en[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        en[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        en[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        en[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        en[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(en),
        this)
    }
    translate(e) {
        return this.min.add(e),
        this.max.add(e),
        this
    }
    equals(e) {
        return e.min.equals(this.min) && e.max.equals(this.max)
    }
}
const en = [new P, new P, new P, new P, new P, new P, new P, new P]
  , Nt = new P
  , hr = new mn
  , Qn = new P
  , ei = new P
  , ti = new P
  , _n = new P
  , xn = new P
  , Dn = new P
  , zi = new P
  , ur = new P
  , dr = new P
  , Un = new P;
function ps(r, e, t, n, i) {
    for (let s = 0, a = r.length - 3; s <= a; s += 3) {
        Un.fromArray(r, s);
        const o = i.x * Math.abs(Un.x) + i.y * Math.abs(Un.y) + i.z * Math.abs(Un.z)
          , c = e.dot(Un)
          , l = t.dot(Un)
          , h = n.dot(Un);
        if (Math.max(-Math.max(c, l, h), Math.min(c, l, h)) > o)
            return !1
    }
    return !0
}
const Wh = new mn
  , Hi = new P
  , ms = new P;
class jt {
    constructor(e=new P, t=-1) {
        this.isSphere = !0,
        this.center = e,
        this.radius = t
    }
    set(e, t) {
        return this.center.copy(e),
        this.radius = t,
        this
    }
    setFromPoints(e, t) {
        const n = this.center;
        t !== void 0 ? n.copy(t) : Wh.setFromPoints(e).getCenter(n);
        let i = 0;
        for (let s = 0, a = e.length; s < a; s++)
            i = Math.max(i, n.distanceToSquared(e[s]));
        return this.radius = Math.sqrt(i),
        this
    }
    copy(e) {
        return this.center.copy(e.center),
        this.radius = e.radius,
        this
    }
    isEmpty() {
        return this.radius < 0
    }
    makeEmpty() {
        return this.center.set(0, 0, 0),
        this.radius = -1,
        this
    }
    containsPoint(e) {
        return e.distanceToSquared(this.center) <= this.radius * this.radius
    }
    distanceToPoint(e) {
        return e.distanceTo(this.center) - this.radius
    }
    intersectsSphere(e) {
        const t = this.radius + e.radius;
        return e.center.distanceToSquared(this.center) <= t * t
    }
    intersectsBox(e) {
        return e.intersectsSphere(this)
    }
    intersectsPlane(e) {
        return Math.abs(e.distanceToPoint(this.center)) <= this.radius
    }
    clampPoint(e, t) {
        const n = this.center.distanceToSquared(e);
        return t.copy(e),
        n > this.radius * this.radius && (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
        t
    }
    getBoundingBox(e) {
        return this.isEmpty() ? (e.makeEmpty(),
        e) : (e.set(this.center, this.center),
        e.expandByScalar(this.radius),
        e)
    }
    applyMatrix4(e) {
        return this.center.applyMatrix4(e),
        this.radius = this.radius * e.getMaxScaleOnAxis(),
        this
    }
    translate(e) {
        return this.center.add(e),
        this
    }
    expandByPoint(e) {
        if (this.isEmpty())
            return this.center.copy(e),
            this.radius = 0,
            this;
        Hi.subVectors(e, this.center);
        const t = Hi.lengthSq();
        if (t > this.radius * this.radius) {
            const n = Math.sqrt(t)
              , i = (n - this.radius) * .5;
            this.center.addScaledVector(Hi, i / n),
            this.radius += i
        }
        return this
    }
    union(e) {
        return e.isEmpty() ? this : this.isEmpty() ? (this.copy(e),
        this) : (this.center.equals(e.center) === !0 ? this.radius = Math.max(this.radius, e.radius) : (ms.subVectors(e.center, this.center).setLength(e.radius),
        this.expandByPoint(Hi.copy(e.center).add(ms)),
        this.expandByPoint(Hi.copy(e.center).sub(ms))),
        this)
    }
    equals(e) {
        return e.center.equals(this.center) && e.radius === this.radius
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
const tn = new P
  , gs = new P
  , fr = new P
  , vn = new P
  , _s = new P
  , pr = new P
  , xs = new P;
class Zr {
    constructor(e=new P, t=new P(0,0,-1)) {
        this.origin = e,
        this.direction = t
    }
    set(e, t) {
        return this.origin.copy(e),
        this.direction.copy(t),
        this
    }
    copy(e) {
        return this.origin.copy(e.origin),
        this.direction.copy(e.direction),
        this
    }
    at(e, t) {
        return t.copy(this.origin).addScaledVector(this.direction, e)
    }
    lookAt(e) {
        return this.direction.copy(e).sub(this.origin).normalize(),
        this
    }
    recast(e) {
        return this.origin.copy(this.at(e, tn)),
        this
    }
    closestPointToPoint(e, t) {
        t.subVectors(e, this.origin);
        const n = t.dot(this.direction);
        return n < 0 ? t.copy(this.origin) : t.copy(this.origin).addScaledVector(this.direction, n)
    }
    distanceToPoint(e) {
        return Math.sqrt(this.distanceSqToPoint(e))
    }
    distanceSqToPoint(e) {
        const t = tn.subVectors(e, this.origin).dot(this.direction);
        return t < 0 ? this.origin.distanceToSquared(e) : (tn.copy(this.origin).addScaledVector(this.direction, t),
        tn.distanceToSquared(e))
    }
    distanceSqToSegment(e, t, n, i) {
        gs.copy(e).add(t).multiplyScalar(.5),
        fr.copy(t).sub(e).normalize(),
        vn.copy(this.origin).sub(gs);
        const s = e.distanceTo(t) * .5
          , a = -this.direction.dot(fr)
          , o = vn.dot(this.direction)
          , c = -vn.dot(fr)
          , l = vn.lengthSq()
          , h = Math.abs(1 - a * a);
        let u, d, m, g;
        if (h > 0)
            if (u = a * c - o,
            d = a * o - c,
            g = s * h,
            u >= 0)
                if (d >= -g)
                    if (d <= g) {
                        const _ = 1 / h;
                        u *= _,
                        d *= _,
                        m = u * (u + a * d + 2 * o) + d * (a * u + d + 2 * c) + l
                    } else
                        d = s,
                        u = Math.max(0, -(a * d + o)),
                        m = -u * u + d * (d + 2 * c) + l;
                else
                    d = -s,
                    u = Math.max(0, -(a * d + o)),
                    m = -u * u + d * (d + 2 * c) + l;
            else
                d <= -g ? (u = Math.max(0, -(-a * s + o)),
                d = u > 0 ? -s : Math.min(Math.max(-s, -c), s),
                m = -u * u + d * (d + 2 * c) + l) : d <= g ? (u = 0,
                d = Math.min(Math.max(-s, -c), s),
                m = d * (d + 2 * c) + l) : (u = Math.max(0, -(a * s + o)),
                d = u > 0 ? s : Math.min(Math.max(-s, -c), s),
                m = -u * u + d * (d + 2 * c) + l);
        else
            d = a > 0 ? -s : s,
            u = Math.max(0, -(a * d + o)),
            m = -u * u + d * (d + 2 * c) + l;
        return n && n.copy(this.origin).addScaledVector(this.direction, u),
        i && i.copy(gs).addScaledVector(fr, d),
        m
    }
    intersectSphere(e, t) {
        tn.subVectors(e.center, this.origin);
        const n = tn.dot(this.direction)
          , i = tn.dot(tn) - n * n
          , s = e.radius * e.radius;
        if (i > s)
            return null;
        const a = Math.sqrt(s - i)
          , o = n - a
          , c = n + a;
        return c < 0 ? null : o < 0 ? this.at(c, t) : this.at(o, t)
    }
    intersectsSphere(e) {
        return this.distanceSqToPoint(e.center) <= e.radius * e.radius
    }
    distanceToPlane(e) {
        const t = e.normal.dot(this.direction);
        if (t === 0)
            return e.distanceToPoint(this.origin) === 0 ? 0 : null;
        const n = -(this.origin.dot(e.normal) + e.constant) / t;
        return n >= 0 ? n : null
    }
    intersectPlane(e, t) {
        const n = this.distanceToPlane(e);
        return n === null ? null : this.at(n, t)
    }
    intersectsPlane(e) {
        const t = e.distanceToPoint(this.origin);
        return t === 0 || e.normal.dot(this.direction) * t < 0
    }
    intersectBox(e, t) {
        let n, i, s, a, o, c;
        const l = 1 / this.direction.x
          , h = 1 / this.direction.y
          , u = 1 / this.direction.z
          , d = this.origin;
        return l >= 0 ? (n = (e.min.x - d.x) * l,
        i = (e.max.x - d.x) * l) : (n = (e.max.x - d.x) * l,
        i = (e.min.x - d.x) * l),
        h >= 0 ? (s = (e.min.y - d.y) * h,
        a = (e.max.y - d.y) * h) : (s = (e.max.y - d.y) * h,
        a = (e.min.y - d.y) * h),
        n > a || s > i || ((s > n || isNaN(n)) && (n = s),
        (a < i || isNaN(i)) && (i = a),
        u >= 0 ? (o = (e.min.z - d.z) * u,
        c = (e.max.z - d.z) * u) : (o = (e.max.z - d.z) * u,
        c = (e.min.z - d.z) * u),
        n > c || o > i) || ((o > n || n !== n) && (n = o),
        (c < i || i !== i) && (i = c),
        i < 0) ? null : this.at(n >= 0 ? n : i, t)
    }
    intersectsBox(e) {
        return this.intersectBox(e, tn) !== null
    }
    intersectTriangle(e, t, n, i, s) {
        _s.subVectors(t, e),
        pr.subVectors(n, e),
        xs.crossVectors(_s, pr);
        let a = this.direction.dot(xs), o;
        if (a > 0) {
            if (i)
                return null;
            o = 1
        } else if (a < 0)
            o = -1,
            a = -a;
        else
            return null;
        vn.subVectors(this.origin, e);
        const c = o * this.direction.dot(pr.crossVectors(vn, pr));
        if (c < 0)
            return null;
        const l = o * this.direction.dot(_s.cross(vn));
        if (l < 0 || c + l > a)
            return null;
        const h = -o * vn.dot(xs);
        return h < 0 ? null : this.at(h / a, s)
    }
    applyMatrix4(e) {
        return this.origin.applyMatrix4(e),
        this.direction.transformDirection(e),
        this
    }
    equals(e) {
        return e.origin.equals(this.origin) && e.direction.equals(this.direction)
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
class we {
    constructor(e, t, n, i, s, a, o, c, l, h, u, d, m, g, _, p) {
        we.prototype.isMatrix4 = !0,
        this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1],
        e !== void 0 && this.set(e, t, n, i, s, a, o, c, l, h, u, d, m, g, _, p)
    }
    set(e, t, n, i, s, a, o, c, l, h, u, d, m, g, _, p) {
        const f = this.elements;
        return f[0] = e,
        f[4] = t,
        f[8] = n,
        f[12] = i,
        f[1] = s,
        f[5] = a,
        f[9] = o,
        f[13] = c,
        f[2] = l,
        f[6] = h,
        f[10] = u,
        f[14] = d,
        f[3] = m,
        f[7] = g,
        f[11] = _,
        f[15] = p,
        this
    }
    identity() {
        return this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
        this
    }
    clone() {
        return new we().fromArray(this.elements)
    }
    copy(e) {
        const t = this.elements
          , n = e.elements;
        return t[0] = n[0],
        t[1] = n[1],
        t[2] = n[2],
        t[3] = n[3],
        t[4] = n[4],
        t[5] = n[5],
        t[6] = n[6],
        t[7] = n[7],
        t[8] = n[8],
        t[9] = n[9],
        t[10] = n[10],
        t[11] = n[11],
        t[12] = n[12],
        t[13] = n[13],
        t[14] = n[14],
        t[15] = n[15],
        this
    }
    copyPosition(e) {
        const t = this.elements
          , n = e.elements;
        return t[12] = n[12],
        t[13] = n[13],
        t[14] = n[14],
        this
    }
    setFromMatrix3(e) {
        const t = e.elements;
        return this.set(t[0], t[3], t[6], 0, t[1], t[4], t[7], 0, t[2], t[5], t[8], 0, 0, 0, 0, 1),
        this
    }
    extractBasis(e, t, n) {
        return e.setFromMatrixColumn(this, 0),
        t.setFromMatrixColumn(this, 1),
        n.setFromMatrixColumn(this, 2),
        this
    }
    makeBasis(e, t, n) {
        return this.set(e.x, t.x, n.x, 0, e.y, t.y, n.y, 0, e.z, t.z, n.z, 0, 0, 0, 0, 1),
        this
    }
    extractRotation(e) {
        const t = this.elements
          , n = e.elements
          , i = 1 / ni.setFromMatrixColumn(e, 0).length()
          , s = 1 / ni.setFromMatrixColumn(e, 1).length()
          , a = 1 / ni.setFromMatrixColumn(e, 2).length();
        return t[0] = n[0] * i,
        t[1] = n[1] * i,
        t[2] = n[2] * i,
        t[3] = 0,
        t[4] = n[4] * s,
        t[5] = n[5] * s,
        t[6] = n[6] * s,
        t[7] = 0,
        t[8] = n[8] * a,
        t[9] = n[9] * a,
        t[10] = n[10] * a,
        t[11] = 0,
        t[12] = 0,
        t[13] = 0,
        t[14] = 0,
        t[15] = 1,
        this
    }
    makeRotationFromEuler(e) {
        const t = this.elements
          , n = e.x
          , i = e.y
          , s = e.z
          , a = Math.cos(n)
          , o = Math.sin(n)
          , c = Math.cos(i)
          , l = Math.sin(i)
          , h = Math.cos(s)
          , u = Math.sin(s);
        if (e.order === "XYZ") {
            const d = a * h
              , m = a * u
              , g = o * h
              , _ = o * u;
            t[0] = c * h,
            t[4] = -c * u,
            t[8] = l,
            t[1] = m + g * l,
            t[5] = d - _ * l,
            t[9] = -o * c,
            t[2] = _ - d * l,
            t[6] = g + m * l,
            t[10] = a * c
        } else if (e.order === "YXZ") {
            const d = c * h
              , m = c * u
              , g = l * h
              , _ = l * u;
            t[0] = d + _ * o,
            t[4] = g * o - m,
            t[8] = a * l,
            t[1] = a * u,
            t[5] = a * h,
            t[9] = -o,
            t[2] = m * o - g,
            t[6] = _ + d * o,
            t[10] = a * c
        } else if (e.order === "ZXY") {
            const d = c * h
              , m = c * u
              , g = l * h
              , _ = l * u;
            t[0] = d - _ * o,
            t[4] = -a * u,
            t[8] = g + m * o,
            t[1] = m + g * o,
            t[5] = a * h,
            t[9] = _ - d * o,
            t[2] = -a * l,
            t[6] = o,
            t[10] = a * c
        } else if (e.order === "ZYX") {
            const d = a * h
              , m = a * u
              , g = o * h
              , _ = o * u;
            t[0] = c * h,
            t[4] = g * l - m,
            t[8] = d * l + _,
            t[1] = c * u,
            t[5] = _ * l + d,
            t[9] = m * l - g,
            t[2] = -l,
            t[6] = o * c,
            t[10] = a * c
        } else if (e.order === "YZX") {
            const d = a * c
              , m = a * l
              , g = o * c
              , _ = o * l;
            t[0] = c * h,
            t[4] = _ - d * u,
            t[8] = g * u + m,
            t[1] = u,
            t[5] = a * h,
            t[9] = -o * h,
            t[2] = -l * h,
            t[6] = m * u + g,
            t[10] = d - _ * u
        } else if (e.order === "XZY") {
            const d = a * c
              , m = a * l
              , g = o * c
              , _ = o * l;
            t[0] = c * h,
            t[4] = -u,
            t[8] = l * h,
            t[1] = d * u + _,
            t[5] = a * h,
            t[9] = m * u - g,
            t[2] = g * u - m,
            t[6] = o * h,
            t[10] = _ * u + d
        }
        return t[3] = 0,
        t[7] = 0,
        t[11] = 0,
        t[12] = 0,
        t[13] = 0,
        t[14] = 0,
        t[15] = 1,
        this
    }
    makeRotationFromQuaternion(e) {
        return this.compose(Xh, e, qh)
    }
    lookAt(e, t, n) {
        const i = this.elements;
        return Ct.subVectors(e, t),
        Ct.lengthSq() === 0 && (Ct.z = 1),
        Ct.normalize(),
        Mn.crossVectors(n, Ct),
        Mn.lengthSq() === 0 && (Math.abs(n.z) === 1 ? Ct.x += 1e-4 : Ct.z += 1e-4,
        Ct.normalize(),
        Mn.crossVectors(n, Ct)),
        Mn.normalize(),
        mr.crossVectors(Ct, Mn),
        i[0] = Mn.x,
        i[4] = mr.x,
        i[8] = Ct.x,
        i[1] = Mn.y,
        i[5] = mr.y,
        i[9] = Ct.y,
        i[2] = Mn.z,
        i[6] = mr.z,
        i[10] = Ct.z,
        this
    }
    multiply(e) {
        return this.multiplyMatrices(this, e)
    }
    premultiply(e) {
        return this.multiplyMatrices(e, this)
    }
    multiplyMatrices(e, t) {
        const n = e.elements
          , i = t.elements
          , s = this.elements
          , a = n[0]
          , o = n[4]
          , c = n[8]
          , l = n[12]
          , h = n[1]
          , u = n[5]
          , d = n[9]
          , m = n[13]
          , g = n[2]
          , _ = n[6]
          , p = n[10]
          , f = n[14]
          , T = n[3]
          , y = n[7]
          , E = n[11]
          , U = n[15]
          , w = i[0]
          , b = i[4]
          , L = i[8]
          , M = i[12]
          , x = i[1]
          , D = i[5]
          , V = i[9]
          , R = i[13]
          , B = i[2]
          , G = i[6]
          , q = i[10]
          , J = i[14]
          , H = i[3]
          , Q = i[7]
          , $ = i[11]
          , de = i[15];
        return s[0] = a * w + o * x + c * B + l * H,
        s[4] = a * b + o * D + c * G + l * Q,
        s[8] = a * L + o * V + c * q + l * $,
        s[12] = a * M + o * R + c * J + l * de,
        s[1] = h * w + u * x + d * B + m * H,
        s[5] = h * b + u * D + d * G + m * Q,
        s[9] = h * L + u * V + d * q + m * $,
        s[13] = h * M + u * R + d * J + m * de,
        s[2] = g * w + _ * x + p * B + f * H,
        s[6] = g * b + _ * D + p * G + f * Q,
        s[10] = g * L + _ * V + p * q + f * $,
        s[14] = g * M + _ * R + p * J + f * de,
        s[3] = T * w + y * x + E * B + U * H,
        s[7] = T * b + y * D + E * G + U * Q,
        s[11] = T * L + y * V + E * q + U * $,
        s[15] = T * M + y * R + E * J + U * de,
        this
    }
    multiplyScalar(e) {
        const t = this.elements;
        return t[0] *= e,
        t[4] *= e,
        t[8] *= e,
        t[12] *= e,
        t[1] *= e,
        t[5] *= e,
        t[9] *= e,
        t[13] *= e,
        t[2] *= e,
        t[6] *= e,
        t[10] *= e,
        t[14] *= e,
        t[3] *= e,
        t[7] *= e,
        t[11] *= e,
        t[15] *= e,
        this
    }
    determinant() {
        const e = this.elements
          , t = e[0]
          , n = e[4]
          , i = e[8]
          , s = e[12]
          , a = e[1]
          , o = e[5]
          , c = e[9]
          , l = e[13]
          , h = e[2]
          , u = e[6]
          , d = e[10]
          , m = e[14]
          , g = e[3]
          , _ = e[7]
          , p = e[11]
          , f = e[15];
        return g * (+s * c * u - i * l * u - s * o * d + n * l * d + i * o * m - n * c * m) + _ * (+t * c * m - t * l * d + s * a * d - i * a * m + i * l * h - s * c * h) + p * (+t * l * u - t * o * m - s * a * u + n * a * m + s * o * h - n * l * h) + f * (-i * o * h - t * c * u + t * o * d + i * a * u - n * a * d + n * c * h)
    }
    transpose() {
        const e = this.elements;
        let t;
        return t = e[1],
        e[1] = e[4],
        e[4] = t,
        t = e[2],
        e[2] = e[8],
        e[8] = t,
        t = e[6],
        e[6] = e[9],
        e[9] = t,
        t = e[3],
        e[3] = e[12],
        e[12] = t,
        t = e[7],
        e[7] = e[13],
        e[13] = t,
        t = e[11],
        e[11] = e[14],
        e[14] = t,
        this
    }
    setPosition(e, t, n) {
        const i = this.elements;
        return e.isVector3 ? (i[12] = e.x,
        i[13] = e.y,
        i[14] = e.z) : (i[12] = e,
        i[13] = t,
        i[14] = n),
        this
    }
    invert() {
        const e = this.elements
          , t = e[0]
          , n = e[1]
          , i = e[2]
          , s = e[3]
          , a = e[4]
          , o = e[5]
          , c = e[6]
          , l = e[7]
          , h = e[8]
          , u = e[9]
          , d = e[10]
          , m = e[11]
          , g = e[12]
          , _ = e[13]
          , p = e[14]
          , f = e[15]
          , T = u * p * l - _ * d * l + _ * c * m - o * p * m - u * c * f + o * d * f
          , y = g * d * l - h * p * l - g * c * m + a * p * m + h * c * f - a * d * f
          , E = h * _ * l - g * u * l + g * o * m - a * _ * m - h * o * f + a * u * f
          , U = g * u * c - h * _ * c - g * o * d + a * _ * d + h * o * p - a * u * p
          , w = t * T + n * y + i * E + s * U;
        if (w === 0)
            return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
        const b = 1 / w;
        return e[0] = T * b,
        e[1] = (_ * d * s - u * p * s - _ * i * m + n * p * m + u * i * f - n * d * f) * b,
        e[2] = (o * p * s - _ * c * s + _ * i * l - n * p * l - o * i * f + n * c * f) * b,
        e[3] = (u * c * s - o * d * s - u * i * l + n * d * l + o * i * m - n * c * m) * b,
        e[4] = y * b,
        e[5] = (h * p * s - g * d * s + g * i * m - t * p * m - h * i * f + t * d * f) * b,
        e[6] = (g * c * s - a * p * s - g * i * l + t * p * l + a * i * f - t * c * f) * b,
        e[7] = (a * d * s - h * c * s + h * i * l - t * d * l - a * i * m + t * c * m) * b,
        e[8] = E * b,
        e[9] = (g * u * s - h * _ * s - g * n * m + t * _ * m + h * n * f - t * u * f) * b,
        e[10] = (a * _ * s - g * o * s + g * n * l - t * _ * l - a * n * f + t * o * f) * b,
        e[11] = (h * o * s - a * u * s - h * n * l + t * u * l + a * n * m - t * o * m) * b,
        e[12] = U * b,
        e[13] = (h * _ * i - g * u * i + g * n * d - t * _ * d - h * n * p + t * u * p) * b,
        e[14] = (g * o * i - a * _ * i - g * n * c + t * _ * c + a * n * p - t * o * p) * b,
        e[15] = (a * u * i - h * o * i + h * n * c - t * u * c - a * n * d + t * o * d) * b,
        this
    }
    scale(e) {
        const t = this.elements
          , n = e.x
          , i = e.y
          , s = e.z;
        return t[0] *= n,
        t[4] *= i,
        t[8] *= s,
        t[1] *= n,
        t[5] *= i,
        t[9] *= s,
        t[2] *= n,
        t[6] *= i,
        t[10] *= s,
        t[3] *= n,
        t[7] *= i,
        t[11] *= s,
        this
    }
    getMaxScaleOnAxis() {
        const e = this.elements
          , t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2]
          , n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6]
          , i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
        return Math.sqrt(Math.max(t, n, i))
    }
    makeTranslation(e, t, n) {
        return e.isVector3 ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1) : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1),
        this
    }
    makeRotationX(e) {
        const t = Math.cos(e)
          , n = Math.sin(e);
        return this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1),
        this
    }
    makeRotationY(e) {
        const t = Math.cos(e)
          , n = Math.sin(e);
        return this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1),
        this
    }
    makeRotationZ(e) {
        const t = Math.cos(e)
          , n = Math.sin(e);
        return this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1),
        this
    }
    makeRotationAxis(e, t) {
        const n = Math.cos(t)
          , i = Math.sin(t)
          , s = 1 - n
          , a = e.x
          , o = e.y
          , c = e.z
          , l = s * a
          , h = s * o;
        return this.set(l * a + n, l * o - i * c, l * c + i * o, 0, l * o + i * c, h * o + n, h * c - i * a, 0, l * c - i * o, h * c + i * a, s * c * c + n, 0, 0, 0, 0, 1),
        this
    }
    makeScale(e, t, n) {
        return this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1),
        this
    }
    makeShear(e, t, n, i, s, a) {
        return this.set(1, n, s, 0, e, 1, a, 0, t, i, 1, 0, 0, 0, 0, 1),
        this
    }
    compose(e, t, n) {
        const i = this.elements
          , s = t._x
          , a = t._y
          , o = t._z
          , c = t._w
          , l = s + s
          , h = a + a
          , u = o + o
          , d = s * l
          , m = s * h
          , g = s * u
          , _ = a * h
          , p = a * u
          , f = o * u
          , T = c * l
          , y = c * h
          , E = c * u
          , U = n.x
          , w = n.y
          , b = n.z;
        return i[0] = (1 - (_ + f)) * U,
        i[1] = (m + E) * U,
        i[2] = (g - y) * U,
        i[3] = 0,
        i[4] = (m - E) * w,
        i[5] = (1 - (d + f)) * w,
        i[6] = (p + T) * w,
        i[7] = 0,
        i[8] = (g + y) * b,
        i[9] = (p - T) * b,
        i[10] = (1 - (d + _)) * b,
        i[11] = 0,
        i[12] = e.x,
        i[13] = e.y,
        i[14] = e.z,
        i[15] = 1,
        this
    }
    decompose(e, t, n) {
        const i = this.elements;
        let s = ni.set(i[0], i[1], i[2]).length();
        const a = ni.set(i[4], i[5], i[6]).length()
          , o = ni.set(i[8], i[9], i[10]).length();
        this.determinant() < 0 && (s = -s),
        e.x = i[12],
        e.y = i[13],
        e.z = i[14],
        Ft.copy(this);
        const l = 1 / s
          , h = 1 / a
          , u = 1 / o;
        return Ft.elements[0] *= l,
        Ft.elements[1] *= l,
        Ft.elements[2] *= l,
        Ft.elements[4] *= h,
        Ft.elements[5] *= h,
        Ft.elements[6] *= h,
        Ft.elements[8] *= u,
        Ft.elements[9] *= u,
        Ft.elements[10] *= u,
        t.setFromRotationMatrix(Ft),
        n.x = s,
        n.y = a,
        n.z = o,
        this
    }
    makePerspective(e, t, n, i, s, a, o=dn) {
        const c = this.elements
          , l = 2 * s / (t - e)
          , h = 2 * s / (n - i)
          , u = (t + e) / (t - e)
          , d = (n + i) / (n - i);
        let m, g;
        if (o === dn)
            m = -(a + s) / (a - s),
            g = -2 * a * s / (a - s);
        else if (o === qr)
            m = -a / (a - s),
            g = -a * s / (a - s);
        else
            throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o);
        return c[0] = l,
        c[4] = 0,
        c[8] = u,
        c[12] = 0,
        c[1] = 0,
        c[5] = h,
        c[9] = d,
        c[13] = 0,
        c[2] = 0,
        c[6] = 0,
        c[10] = m,
        c[14] = g,
        c[3] = 0,
        c[7] = 0,
        c[11] = -1,
        c[15] = 0,
        this
    }
    makeOrthographic(e, t, n, i, s, a, o=dn) {
        const c = this.elements
          , l = 1 / (t - e)
          , h = 1 / (n - i)
          , u = 1 / (a - s)
          , d = (t + e) * l
          , m = (n + i) * h;
        let g, _;
        if (o === dn)
            g = (a + s) * u,
            _ = -2 * u;
        else if (o === qr)
            g = s * u,
            _ = -1 * u;
        else
            throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o);
        return c[0] = 2 * l,
        c[4] = 0,
        c[8] = 0,
        c[12] = -d,
        c[1] = 0,
        c[5] = 2 * h,
        c[9] = 0,
        c[13] = -m,
        c[2] = 0,
        c[6] = 0,
        c[10] = _,
        c[14] = -g,
        c[3] = 0,
        c[7] = 0,
        c[11] = 0,
        c[15] = 1,
        this
    }
    equals(e) {
        const t = this.elements
          , n = e.elements;
        for (let i = 0; i < 16; i++)
            if (t[i] !== n[i])
                return !1;
        return !0
    }
    fromArray(e, t=0) {
        for (let n = 0; n < 16; n++)
            this.elements[n] = e[n + t];
        return this
    }
    toArray(e=[], t=0) {
        const n = this.elements;
        return e[t] = n[0],
        e[t + 1] = n[1],
        e[t + 2] = n[2],
        e[t + 3] = n[3],
        e[t + 4] = n[4],
        e[t + 5] = n[5],
        e[t + 6] = n[6],
        e[t + 7] = n[7],
        e[t + 8] = n[8],
        e[t + 9] = n[9],
        e[t + 10] = n[10],
        e[t + 11] = n[11],
        e[t + 12] = n[12],
        e[t + 13] = n[13],
        e[t + 14] = n[14],
        e[t + 15] = n[15],
        e
    }
}
const ni = new P
  , Ft = new we
  , Xh = new P(0,0,0)
  , qh = new P(1,1,1)
  , Mn = new P
  , mr = new P
  , Ct = new P
  , uo = new we
  , fo = new Pn;
class Kt {
    constructor(e=0, t=0, n=0, i=Kt.DEFAULT_ORDER) {
        this.isEuler = !0,
        this._x = e,
        this._y = t,
        this._z = n,
        this._order = i
    }
    get x() {
        return this._x
    }
    set x(e) {
        this._x = e,
        this._onChangeCallback()
    }
    get y() {
        return this._y
    }
    set y(e) {
        this._y = e,
        this._onChangeCallback()
    }
    get z() {
        return this._z
    }
    set z(e) {
        this._z = e,
        this._onChangeCallback()
    }
    get order() {
        return this._order
    }
    set order(e) {
        this._order = e,
        this._onChangeCallback()
    }
    set(e, t, n, i=this._order) {
        return this._x = e,
        this._y = t,
        this._z = n,
        this._order = i,
        this._onChangeCallback(),
        this
    }
    clone() {
        return new this.constructor(this._x,this._y,this._z,this._order)
    }
    copy(e) {
        return this._x = e._x,
        this._y = e._y,
        this._z = e._z,
        this._order = e._order,
        this._onChangeCallback(),
        this
    }
    setFromRotationMatrix(e, t=this._order, n=!0) {
        const i = e.elements
          , s = i[0]
          , a = i[4]
          , o = i[8]
          , c = i[1]
          , l = i[5]
          , h = i[9]
          , u = i[2]
          , d = i[6]
          , m = i[10];
        switch (t) {
        case "XYZ":
            this._y = Math.asin(dt(o, -1, 1)),
            Math.abs(o) < .9999999 ? (this._x = Math.atan2(-h, m),
            this._z = Math.atan2(-a, s)) : (this._x = Math.atan2(d, l),
            this._z = 0);
            break;
        case "YXZ":
            this._x = Math.asin(-dt(h, -1, 1)),
            Math.abs(h) < .9999999 ? (this._y = Math.atan2(o, m),
            this._z = Math.atan2(c, l)) : (this._y = Math.atan2(-u, s),
            this._z = 0);
            break;
        case "ZXY":
            this._x = Math.asin(dt(d, -1, 1)),
            Math.abs(d) < .9999999 ? (this._y = Math.atan2(-u, m),
            this._z = Math.atan2(-a, l)) : (this._y = 0,
            this._z = Math.atan2(c, s));
            break;
        case "ZYX":
            this._y = Math.asin(-dt(u, -1, 1)),
            Math.abs(u) < .9999999 ? (this._x = Math.atan2(d, m),
            this._z = Math.atan2(c, s)) : (this._x = 0,
            this._z = Math.atan2(-a, l));
            break;
        case "YZX":
            this._z = Math.asin(dt(c, -1, 1)),
            Math.abs(c) < .9999999 ? (this._x = Math.atan2(-h, l),
            this._y = Math.atan2(-u, s)) : (this._x = 0,
            this._y = Math.atan2(o, m));
            break;
        case "XZY":
            this._z = Math.asin(-dt(a, -1, 1)),
            Math.abs(a) < .9999999 ? (this._x = Math.atan2(d, l),
            this._y = Math.atan2(o, s)) : (this._x = Math.atan2(-h, m),
            this._y = 0);
            break;
        default:
            console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " + t)
        }
        return this._order = t,
        n === !0 && this._onChangeCallback(),
        this
    }
    setFromQuaternion(e, t, n) {
        return uo.makeRotationFromQuaternion(e),
        this.setFromRotationMatrix(uo, t, n)
    }
    setFromVector3(e, t=this._order) {
        return this.set(e.x, e.y, e.z, t)
    }
    reorder(e) {
        return fo.setFromEuler(this),
        this.setFromQuaternion(fo, e)
    }
    equals(e) {
        return e._x === this._x && e._y === this._y && e._z === this._z && e._order === this._order
    }
    fromArray(e) {
        return this._x = e[0],
        this._y = e[1],
        this._z = e[2],
        e[3] !== void 0 && (this._order = e[3]),
        this._onChangeCallback(),
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this._x,
        e[t + 1] = this._y,
        e[t + 2] = this._z,
        e[t + 3] = this._order,
        e
    }
    _onChange(e) {
        return this._onChangeCallback = e,
        this
    }
    _onChangeCallback() {}
    *[Symbol.iterator]() {
        yield this._x,
        yield this._y,
        yield this._z,
        yield this._order
    }
}
Kt.DEFAULT_ORDER = "XYZ";
class Oc {
    constructor() {
        this.mask = 1
    }
    set(e) {
        this.mask = (1 << e | 0) >>> 0
    }
    enable(e) {
        this.mask |= 1 << e | 0
    }
    enableAll() {
        this.mask = -1
    }
    toggle(e) {
        this.mask ^= 1 << e | 0
    }
    disable(e) {
        this.mask &= ~(1 << e | 0)
    }
    disableAll() {
        this.mask = 0
    }
    test(e) {
        return (this.mask & e.mask) !== 0
    }
    isEnabled(e) {
        return (this.mask & (1 << e | 0)) !== 0
    }
}
let Yh = 0;
const po = new P
  , ii = new Pn
  , nn = new we
  , gr = new P
  , ki = new P
  , Kh = new P
  , jh = new Pn
  , mo = new P(1,0,0)
  , go = new P(0,1,0)
  , _o = new P(0,0,1)
  , xo = {
    type: "added"
}
  , $h = {
    type: "removed"
}
  , ri = {
    type: "childadded",
    child: null
}
  , vs = {
    type: "childremoved",
    child: null
};
class et extends Ii {
    constructor() {
        super(),
        this.isObject3D = !0,
        Object.defineProperty(this, "id", {
            value: Yh++
        }),
        this.uuid = Ht(),
        this.name = "",
        this.type = "Object3D",
        this.parent = null,
        this.children = [],
        this.up = et.DEFAULT_UP.clone();
        const e = new P
          , t = new Kt
          , n = new Pn
          , i = new P(1,1,1);
        function s() {
            n.setFromEuler(t, !1)
        }
        function a() {
            t.setFromQuaternion(n, void 0, !1)
        }
        t._onChange(s),
        n._onChange(a),
        Object.defineProperties(this, {
            position: {
                configurable: !0,
                enumerable: !0,
                value: e
            },
            rotation: {
                configurable: !0,
                enumerable: !0,
                value: t
            },
            quaternion: {
                configurable: !0,
                enumerable: !0,
                value: n
            },
            scale: {
                configurable: !0,
                enumerable: !0,
                value: i
            },
            modelViewMatrix: {
                value: new we
            },
            normalMatrix: {
                value: new be
            }
        }),
        this.matrix = new we,
        this.matrixWorld = new we,
        this.matrixAutoUpdate = et.DEFAULT_MATRIX_AUTO_UPDATE,
        this.matrixWorldAutoUpdate = et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,
        this.matrixWorldNeedsUpdate = !1,
        this.layers = new Oc,
        this.visible = !0,
        this.castShadow = !1,
        this.receiveShadow = !1,
        this.frustumCulled = !0,
        this.renderOrder = 0,
        this.animations = [],
        this.userData = {}
    }
    onBeforeShadow() {}
    onAfterShadow() {}
    onBeforeRender() {}
    onAfterRender() {}
    applyMatrix4(e) {
        this.matrixAutoUpdate && this.updateMatrix(),
        this.matrix.premultiply(e),
        this.matrix.decompose(this.position, this.quaternion, this.scale)
    }
    applyQuaternion(e) {
        return this.quaternion.premultiply(e),
        this
    }
    setRotationFromAxisAngle(e, t) {
        this.quaternion.setFromAxisAngle(e, t)
    }
    setRotationFromEuler(e) {
        this.quaternion.setFromEuler(e, !0)
    }
    setRotationFromMatrix(e) {
        this.quaternion.setFromRotationMatrix(e)
    }
    setRotationFromQuaternion(e) {
        this.quaternion.copy(e)
    }
    rotateOnAxis(e, t) {
        return ii.setFromAxisAngle(e, t),
        this.quaternion.multiply(ii),
        this
    }
    rotateOnWorldAxis(e, t) {
        return ii.setFromAxisAngle(e, t),
        this.quaternion.premultiply(ii),
        this
    }
    rotateX(e) {
        return this.rotateOnAxis(mo, e)
    }
    rotateY(e) {
        return this.rotateOnAxis(go, e)
    }
    rotateZ(e) {
        return this.rotateOnAxis(_o, e)
    }
    translateOnAxis(e, t) {
        return po.copy(e).applyQuaternion(this.quaternion),
        this.position.add(po.multiplyScalar(t)),
        this
    }
    translateX(e) {
        return this.translateOnAxis(mo, e)
    }
    translateY(e) {
        return this.translateOnAxis(go, e)
    }
    translateZ(e) {
        return this.translateOnAxis(_o, e)
    }
    localToWorld(e) {
        return this.updateWorldMatrix(!0, !1),
        e.applyMatrix4(this.matrixWorld)
    }
    worldToLocal(e) {
        return this.updateWorldMatrix(!0, !1),
        e.applyMatrix4(nn.copy(this.matrixWorld).invert())
    }
    lookAt(e, t, n) {
        e.isVector3 ? gr.copy(e) : gr.set(e, t, n);
        const i = this.parent;
        this.updateWorldMatrix(!0, !1),
        ki.setFromMatrixPosition(this.matrixWorld),
        this.isCamera || this.isLight ? nn.lookAt(ki, gr, this.up) : nn.lookAt(gr, ki, this.up),
        this.quaternion.setFromRotationMatrix(nn),
        i && (nn.extractRotation(i.matrixWorld),
        ii.setFromRotationMatrix(nn),
        this.quaternion.premultiply(ii.invert()))
    }
    add(e) {
        if (arguments.length > 1) {
            for (let t = 0; t < arguments.length; t++)
                this.add(arguments[t]);
            return this
        }
        return e === this ? (console.error("THREE.Object3D.add: object can't be added as a child of itself.", e),
        this) : (e && e.isObject3D ? (e.removeFromParent(),
        e.parent = this,
        this.children.push(e),
        e.dispatchEvent(xo),
        ri.child = e,
        this.dispatchEvent(ri),
        ri.child = null) : console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.", e),
        this)
    }
    remove(e) {
        if (arguments.length > 1) {
            for (let n = 0; n < arguments.length; n++)
                this.remove(arguments[n]);
            return this
        }
        const t = this.children.indexOf(e);
        return t !== -1 && (e.parent = null,
        this.children.splice(t, 1),
        e.dispatchEvent($h),
        vs.child = e,
        this.dispatchEvent(vs),
        vs.child = null),
        this
    }
    removeFromParent() {
        const e = this.parent;
        return e !== null && e.remove(this),
        this
    }
    clear() {
        return this.remove(...this.children)
    }
    attach(e) {
        return this.updateWorldMatrix(!0, !1),
        nn.copy(this.matrixWorld).invert(),
        e.parent !== null && (e.parent.updateWorldMatrix(!0, !1),
        nn.multiply(e.parent.matrixWorld)),
        e.applyMatrix4(nn),
        e.removeFromParent(),
        e.parent = this,
        this.children.push(e),
        e.updateWorldMatrix(!1, !0),
        e.dispatchEvent(xo),
        ri.child = e,
        this.dispatchEvent(ri),
        ri.child = null,
        this
    }
    getObjectById(e) {
        return this.getObjectByProperty("id", e)
    }
    getObjectByName(e) {
        return this.getObjectByProperty("name", e)
    }
    getObjectByProperty(e, t) {
        if (this[e] === t)
            return this;
        for (let n = 0, i = this.children.length; n < i; n++) {
            const a = this.children[n].getObjectByProperty(e, t);
            if (a !== void 0)
                return a
        }
    }
    getObjectsByProperty(e, t, n=[]) {
        this[e] === t && n.push(this);
        const i = this.children;
        for (let s = 0, a = i.length; s < a; s++)
            i[s].getObjectsByProperty(e, t, n);
        return n
    }
    getWorldPosition(e) {
        return this.updateWorldMatrix(!0, !1),
        e.setFromMatrixPosition(this.matrixWorld)
    }
    getWorldQuaternion(e) {
        return this.updateWorldMatrix(!0, !1),
        this.matrixWorld.decompose(ki, e, Kh),
        e
    }
    getWorldScale(e) {
        return this.updateWorldMatrix(!0, !1),
        this.matrixWorld.decompose(ki, jh, e),
        e
    }
    getWorldDirection(e) {
        this.updateWorldMatrix(!0, !1);
        const t = this.matrixWorld.elements;
        return e.set(t[8], t[9], t[10]).normalize()
    }
    raycast() {}
    traverse(e) {
        e(this);
        const t = this.children;
        for (let n = 0, i = t.length; n < i; n++)
            t[n].traverse(e)
    }
    traverseVisible(e) {
        if (this.visible === !1)
            return;
        e(this);
        const t = this.children;
        for (let n = 0, i = t.length; n < i; n++)
            t[n].traverseVisible(e)
    }
    traverseAncestors(e) {
        const t = this.parent;
        t !== null && (e(t),
        t.traverseAncestors(e))
    }
    updateMatrix() {
        this.matrix.compose(this.position, this.quaternion, this.scale),
        this.matrixWorldNeedsUpdate = !0
    }
    updateMatrixWorld(e) {
        this.matrixAutoUpdate && this.updateMatrix(),
        (this.matrixWorldNeedsUpdate || e) && (this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
        this.matrixWorldNeedsUpdate = !1,
        e = !0);
        const t = this.children;
        for (let n = 0, i = t.length; n < i; n++) {
            const s = t[n];
            (s.matrixWorldAutoUpdate === !0 || e === !0) && s.updateMatrixWorld(e)
        }
    }
    updateWorldMatrix(e, t) {
        const n = this.parent;
        if (e === !0 && n !== null && n.matrixWorldAutoUpdate === !0 && n.updateWorldMatrix(!0, !1),
        this.matrixAutoUpdate && this.updateMatrix(),
        this.parent === null ? this.matrixWorld.copy(this.matrix) : this.matrixWorld.multiplyMatrices(this.parent.matrixWorld, this.matrix),
        t === !0) {
            const i = this.children;
            for (let s = 0, a = i.length; s < a; s++) {
                const o = i[s];
                o.matrixWorldAutoUpdate === !0 && o.updateWorldMatrix(!1, !0)
            }
        }
    }
    toJSON(e) {
        const t = e === void 0 || typeof e == "string"
          , n = {};
        t && (e = {
            geometries: {},
            materials: {},
            textures: {},
            images: {},
            shapes: {},
            skeletons: {},
            animations: {},
            nodes: {}
        },
        n.metadata = {
            version: 4.6,
            type: "Object",
            generator: "Object3D.toJSON"
        });
        const i = {};
        i.uuid = this.uuid,
        i.type = this.type,
        this.name !== "" && (i.name = this.name),
        this.castShadow === !0 && (i.castShadow = !0),
        this.receiveShadow === !0 && (i.receiveShadow = !0),
        this.visible === !1 && (i.visible = !1),
        this.frustumCulled === !1 && (i.frustumCulled = !1),
        this.renderOrder !== 0 && (i.renderOrder = this.renderOrder),
        Object.keys(this.userData).length > 0 && (i.userData = this.userData),
        i.layers = this.layers.mask,
        i.matrix = this.matrix.toArray(),
        i.up = this.up.toArray(),
        this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1),
        this.isInstancedMesh && (i.type = "InstancedMesh",
        i.count = this.count,
        i.instanceMatrix = this.instanceMatrix.toJSON(),
        this.instanceColor !== null && (i.instanceColor = this.instanceColor.toJSON())),
        this.isBatchedMesh && (i.type = "BatchedMesh",
        i.perObjectFrustumCulled = this.perObjectFrustumCulled,
        i.sortObjects = this.sortObjects,
        i.drawRanges = this._drawRanges,
        i.reservedRanges = this._reservedRanges,
        i.visibility = this._visibility,
        i.active = this._active,
        i.bounds = this._bounds.map(o=>({
            boxInitialized: o.boxInitialized,
            boxMin: o.box.min.toArray(),
            boxMax: o.box.max.toArray(),
            sphereInitialized: o.sphereInitialized,
            sphereRadius: o.sphere.radius,
            sphereCenter: o.sphere.center.toArray()
        })),
        i.maxGeometryCount = this._maxGeometryCount,
        i.maxVertexCount = this._maxVertexCount,
        i.maxIndexCount = this._maxIndexCount,
        i.geometryInitialized = this._geometryInitialized,
        i.geometryCount = this._geometryCount,
        i.matricesTexture = this._matricesTexture.toJSON(e),
        this.boundingSphere !== null && (i.boundingSphere = {
            center: i.boundingSphere.center.toArray(),
            radius: i.boundingSphere.radius
        }),
        this.boundingBox !== null && (i.boundingBox = {
            min: i.boundingBox.min.toArray(),
            max: i.boundingBox.max.toArray()
        }));
        function s(o, c) {
            return o[c.uuid] === void 0 && (o[c.uuid] = c.toJSON(e)),
            c.uuid
        }
        if (this.isScene)
            this.background && (this.background.isColor ? i.background = this.background.toJSON() : this.background.isTexture && (i.background = this.background.toJSON(e).uuid)),
            this.environment && this.environment.isTexture && this.environment.isRenderTargetTexture !== !0 && (i.environment = this.environment.toJSON(e).uuid);
        else if (this.isMesh || this.isLine || this.isPoints) {
            i.geometry = s(e.geometries, this.geometry);
            const o = this.geometry.parameters;
            if (o !== void 0 && o.shapes !== void 0) {
                const c = o.shapes;
                if (Array.isArray(c))
                    for (let l = 0, h = c.length; l < h; l++) {
                        const u = c[l];
                        s(e.shapes, u)
                    }
                else
                    s(e.shapes, c)
            }
        }
        if (this.isSkinnedMesh && (i.bindMode = this.bindMode,
        i.bindMatrix = this.bindMatrix.toArray(),
        this.skeleton !== void 0 && (s(e.skeletons, this.skeleton),
        i.skeleton = this.skeleton.uuid)),
        this.material !== void 0)
            if (Array.isArray(this.material)) {
                const o = [];
                for (let c = 0, l = this.material.length; c < l; c++)
                    o.push(s(e.materials, this.material[c]));
                i.material = o
            } else
                i.material = s(e.materials, this.material);
        if (this.children.length > 0) {
            i.children = [];
            for (let o = 0; o < this.children.length; o++)
                i.children.push(this.children[o].toJSON(e).object)
        }
        if (this.animations.length > 0) {
            i.animations = [];
            for (let o = 0; o < this.animations.length; o++) {
                const c = this.animations[o];
                i.animations.push(s(e.animations, c))
            }
        }
        if (t) {
            const o = a(e.geometries)
              , c = a(e.materials)
              , l = a(e.textures)
              , h = a(e.images)
              , u = a(e.shapes)
              , d = a(e.skeletons)
              , m = a(e.animations)
              , g = a(e.nodes);
            o.length > 0 && (n.geometries = o),
            c.length > 0 && (n.materials = c),
            l.length > 0 && (n.textures = l),
            h.length > 0 && (n.images = h),
            u.length > 0 && (n.shapes = u),
            d.length > 0 && (n.skeletons = d),
            m.length > 0 && (n.animations = m),
            g.length > 0 && (n.nodes = g)
        }
        return n.object = i,
        n;
        function a(o) {
            const c = [];
            for (const l in o) {
                const h = o[l];
                delete h.metadata,
                c.push(h)
            }
            return c
        }
    }
    clone(e) {
        return new this.constructor().copy(this, e)
    }
    copy(e, t=!0) {
        if (this.name = e.name,
        this.up.copy(e.up),
        this.position.copy(e.position),
        this.rotation.order = e.rotation.order,
        this.quaternion.copy(e.quaternion),
        this.scale.copy(e.scale),
        this.matrix.copy(e.matrix),
        this.matrixWorld.copy(e.matrixWorld),
        this.matrixAutoUpdate = e.matrixAutoUpdate,
        this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate,
        this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate,
        this.layers.mask = e.layers.mask,
        this.visible = e.visible,
        this.castShadow = e.castShadow,
        this.receiveShadow = e.receiveShadow,
        this.frustumCulled = e.frustumCulled,
        this.renderOrder = e.renderOrder,
        this.animations = e.animations.slice(),
        this.userData = JSON.parse(JSON.stringify(e.userData)),
        t === !0)
            for (let n = 0; n < e.children.length; n++) {
                const i = e.children[n];
                this.add(i.clone())
            }
        return this
    }
}
et.DEFAULT_UP = new P(0,1,0);
et.DEFAULT_MATRIX_AUTO_UPDATE = !0;
et.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Ot = new P
  , rn = new P
  , Ms = new P
  , sn = new P
  , si = new P
  , ai = new P
  , vo = new P
  , Ss = new P
  , ys = new P
  , Es = new P;
class Wt {
    constructor(e=new P, t=new P, n=new P) {
        this.a = e,
        this.b = t,
        this.c = n
    }
    static getNormal(e, t, n, i) {
        i.subVectors(n, t),
        Ot.subVectors(e, t),
        i.cross(Ot);
        const s = i.lengthSq();
        return s > 0 ? i.multiplyScalar(1 / Math.sqrt(s)) : i.set(0, 0, 0)
    }
    static getBarycoord(e, t, n, i, s) {
        Ot.subVectors(i, t),
        rn.subVectors(n, t),
        Ms.subVectors(e, t);
        const a = Ot.dot(Ot)
          , o = Ot.dot(rn)
          , c = Ot.dot(Ms)
          , l = rn.dot(rn)
          , h = rn.dot(Ms)
          , u = a * l - o * o;
        if (u === 0)
            return s.set(0, 0, 0),
            null;
        const d = 1 / u
          , m = (l * c - o * h) * d
          , g = (a * h - o * c) * d;
        return s.set(1 - m - g, g, m)
    }
    static containsPoint(e, t, n, i) {
        return this.getBarycoord(e, t, n, i, sn) === null ? !1 : sn.x >= 0 && sn.y >= 0 && sn.x + sn.y <= 1
    }
    static getInterpolation(e, t, n, i, s, a, o, c) {
        return this.getBarycoord(e, t, n, i, sn) === null ? (c.x = 0,
        c.y = 0,
        "z"in c && (c.z = 0),
        "w"in c && (c.w = 0),
        null) : (c.setScalar(0),
        c.addScaledVector(s, sn.x),
        c.addScaledVector(a, sn.y),
        c.addScaledVector(o, sn.z),
        c)
    }
    static isFrontFacing(e, t, n, i) {
        return Ot.subVectors(n, t),
        rn.subVectors(e, t),
        Ot.cross(rn).dot(i) < 0
    }
    set(e, t, n) {
        return this.a.copy(e),
        this.b.copy(t),
        this.c.copy(n),
        this
    }
    setFromPointsAndIndices(e, t, n, i) {
        return this.a.copy(e[t]),
        this.b.copy(e[n]),
        this.c.copy(e[i]),
        this
    }
    setFromAttributeAndIndices(e, t, n, i) {
        return this.a.fromBufferAttribute(e, t),
        this.b.fromBufferAttribute(e, n),
        this.c.fromBufferAttribute(e, i),
        this
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        return this.a.copy(e.a),
        this.b.copy(e.b),
        this.c.copy(e.c),
        this
    }
    getArea() {
        return Ot.subVectors(this.c, this.b),
        rn.subVectors(this.a, this.b),
        Ot.cross(rn).length() * .5
    }
    getMidpoint(e) {
        return e.addVectors(this.a, this.b).add(this.c).multiplyScalar(1 / 3)
    }
    getNormal(e) {
        return Wt.getNormal(this.a, this.b, this.c, e)
    }
    getPlane(e) {
        return e.setFromCoplanarPoints(this.a, this.b, this.c)
    }
    getBarycoord(e, t) {
        return Wt.getBarycoord(e, this.a, this.b, this.c, t)
    }
    getInterpolation(e, t, n, i, s) {
        return Wt.getInterpolation(e, this.a, this.b, this.c, t, n, i, s)
    }
    containsPoint(e) {
        return Wt.containsPoint(e, this.a, this.b, this.c)
    }
    isFrontFacing(e) {
        return Wt.isFrontFacing(this.a, this.b, this.c, e)
    }
    intersectsBox(e) {
        return e.intersectsTriangle(this)
    }
    closestPointToPoint(e, t) {
        const n = this.a
          , i = this.b
          , s = this.c;
        let a, o;
        si.subVectors(i, n),
        ai.subVectors(s, n),
        Ss.subVectors(e, n);
        const c = si.dot(Ss)
          , l = ai.dot(Ss);
        if (c <= 0 && l <= 0)
            return t.copy(n);
        ys.subVectors(e, i);
        const h = si.dot(ys)
          , u = ai.dot(ys);
        if (h >= 0 && u <= h)
            return t.copy(i);
        const d = c * u - h * l;
        if (d <= 0 && c >= 0 && h <= 0)
            return a = c / (c - h),
            t.copy(n).addScaledVector(si, a);
        Es.subVectors(e, s);
        const m = si.dot(Es)
          , g = ai.dot(Es);
        if (g >= 0 && m <= g)
            return t.copy(s);
        const _ = m * l - c * g;
        if (_ <= 0 && l >= 0 && g <= 0)
            return o = l / (l - g),
            t.copy(n).addScaledVector(ai, o);
        const p = h * g - m * u;
        if (p <= 0 && u - h >= 0 && m - g >= 0)
            return vo.subVectors(s, i),
            o = (u - h) / (u - h + (m - g)),
            t.copy(i).addScaledVector(vo, o);
        const f = 1 / (p + _ + d);
        return a = _ * f,
        o = d * f,
        t.copy(n).addScaledVector(si, a).addScaledVector(ai, o)
    }
    equals(e) {
        return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c)
    }
}
const Bc = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074
}
  , Sn = {
    h: 0,
    s: 0,
    l: 0
}
  , _r = {
    h: 0,
    s: 0,
    l: 0
};
function Ts(r, e, t) {
    return t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6 ? r + (e - r) * 6 * t : t < 1 / 2 ? e : t < 2 / 3 ? r + (e - r) * 6 * (2 / 3 - t) : r
}
class Se {
    constructor(e, t, n) {
        return this.isColor = !0,
        this.r = 1,
        this.g = 1,
        this.b = 1,
        this.set(e, t, n)
    }
    set(e, t, n) {
        if (t === void 0 && n === void 0) {
            const i = e;
            i && i.isColor ? this.copy(i) : typeof i == "number" ? this.setHex(i) : typeof i == "string" && this.setStyle(i)
        } else
            this.setRGB(e, t, n);
        return this
    }
    setScalar(e) {
        return this.r = e,
        this.g = e,
        this.b = e,
        this
    }
    setHex(e, t=St) {
        return e = Math.floor(e),
        this.r = (e >> 16 & 255) / 255,
        this.g = (e >> 8 & 255) / 255,
        this.b = (e & 255) / 255,
        We.toWorkingColorSpace(this, t),
        this
    }
    setRGB(e, t, n, i=We.workingColorSpace) {
        return this.r = e,
        this.g = t,
        this.b = n,
        We.toWorkingColorSpace(this, i),
        this
    }
    setHSL(e, t, n, i=We.workingColorSpace) {
        if (e = ia(e, 1),
        t = dt(t, 0, 1),
        n = dt(n, 0, 1),
        t === 0)
            this.r = this.g = this.b = n;
        else {
            const s = n <= .5 ? n * (1 + t) : n + t - n * t
              , a = 2 * n - s;
            this.r = Ts(a, s, e + 1 / 3),
            this.g = Ts(a, s, e),
            this.b = Ts(a, s, e - 1 / 3)
        }
        return We.toWorkingColorSpace(this, i),
        this
    }
    setStyle(e, t=St) {
        function n(s) {
            s !== void 0 && parseFloat(s) < 1 && console.warn("THREE.Color: Alpha component of " + e + " will be ignored.")
        }
        let i;
        if (i = /^(\w+)\(([^\)]*)\)/.exec(e)) {
            let s;
            const a = i[1]
              , o = i[2];
            switch (a) {
            case "rgb":
            case "rgba":
                if (s = /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
                    return n(s[4]),
                    this.setRGB(Math.min(255, parseInt(s[1], 10)) / 255, Math.min(255, parseInt(s[2], 10)) / 255, Math.min(255, parseInt(s[3], 10)) / 255, t);
                if (s = /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
                    return n(s[4]),
                    this.setRGB(Math.min(100, parseInt(s[1], 10)) / 100, Math.min(100, parseInt(s[2], 10)) / 100, Math.min(100, parseInt(s[3], 10)) / 100, t);
                break;
            case "hsl":
            case "hsla":
                if (s = /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))
                    return n(s[4]),
                    this.setHSL(parseFloat(s[1]) / 360, parseFloat(s[2]) / 100, parseFloat(s[3]) / 100, t);
                break;
            default:
                console.warn("THREE.Color: Unknown color model " + e)
            }
        } else if (i = /^\#([A-Fa-f\d]+)$/.exec(e)) {
            const s = i[1]
              , a = s.length;
            if (a === 3)
                return this.setRGB(parseInt(s.charAt(0), 16) / 15, parseInt(s.charAt(1), 16) / 15, parseInt(s.charAt(2), 16) / 15, t);
            if (a === 6)
                return this.setHex(parseInt(s, 16), t);
            console.warn("THREE.Color: Invalid hex color " + e)
        } else if (e && e.length > 0)
            return this.setColorName(e, t);
        return this
    }
    setColorName(e, t=St) {
        const n = Bc[e.toLowerCase()];
        return n !== void 0 ? this.setHex(n, t) : console.warn("THREE.Color: Unknown color " + e),
        this
    }
    clone() {
        return new this.constructor(this.r,this.g,this.b)
    }
    copy(e) {
        return this.r = e.r,
        this.g = e.g,
        this.b = e.b,
        this
    }
    copySRGBToLinear(e) {
        return this.r = vi(e.r),
        this.g = vi(e.g),
        this.b = vi(e.b),
        this
    }
    copyLinearToSRGB(e) {
        return this.r = us(e.r),
        this.g = us(e.g),
        this.b = us(e.b),
        this
    }
    convertSRGBToLinear() {
        return this.copySRGBToLinear(this),
        this
    }
    convertLinearToSRGB() {
        return this.copyLinearToSRGB(this),
        this
    }
    getHex(e=St) {
        return We.fromWorkingColorSpace(_t.copy(this), e),
        Math.round(dt(_t.r * 255, 0, 255)) * 65536 + Math.round(dt(_t.g * 255, 0, 255)) * 256 + Math.round(dt(_t.b * 255, 0, 255))
    }
    getHexString(e=St) {
        return ("000000" + this.getHex(e).toString(16)).slice(-6)
    }
    getHSL(e, t=We.workingColorSpace) {
        We.fromWorkingColorSpace(_t.copy(this), t);
        const n = _t.r
          , i = _t.g
          , s = _t.b
          , a = Math.max(n, i, s)
          , o = Math.min(n, i, s);
        let c, l;
        const h = (o + a) / 2;
        if (o === a)
            c = 0,
            l = 0;
        else {
            const u = a - o;
            switch (l = h <= .5 ? u / (a + o) : u / (2 - a - o),
            a) {
            case n:
                c = (i - s) / u + (i < s ? 6 : 0);
                break;
            case i:
                c = (s - n) / u + 2;
                break;
            case s:
                c = (n - i) / u + 4;
                break
            }
            c /= 6
        }
        return e.h = c,
        e.s = l,
        e.l = h,
        e
    }
    getRGB(e, t=We.workingColorSpace) {
        return We.fromWorkingColorSpace(_t.copy(this), t),
        e.r = _t.r,
        e.g = _t.g,
        e.b = _t.b,
        e
    }
    getStyle(e=St) {
        We.fromWorkingColorSpace(_t.copy(this), e);
        const t = _t.r
          , n = _t.g
          , i = _t.b;
        return e !== St ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})` : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`
    }
    offsetHSL(e, t, n) {
        return this.getHSL(Sn),
        this.setHSL(Sn.h + e, Sn.s + t, Sn.l + n)
    }
    add(e) {
        return this.r += e.r,
        this.g += e.g,
        this.b += e.b,
        this
    }
    addColors(e, t) {
        return this.r = e.r + t.r,
        this.g = e.g + t.g,
        this.b = e.b + t.b,
        this
    }
    addScalar(e) {
        return this.r += e,
        this.g += e,
        this.b += e,
        this
    }
    sub(e) {
        return this.r = Math.max(0, this.r - e.r),
        this.g = Math.max(0, this.g - e.g),
        this.b = Math.max(0, this.b - e.b),
        this
    }
    multiply(e) {
        return this.r *= e.r,
        this.g *= e.g,
        this.b *= e.b,
        this
    }
    multiplyScalar(e) {
        return this.r *= e,
        this.g *= e,
        this.b *= e,
        this
    }
    lerp(e, t) {
        return this.r += (e.r - this.r) * t,
        this.g += (e.g - this.g) * t,
        this.b += (e.b - this.b) * t,
        this
    }
    lerpColors(e, t, n) {
        return this.r = e.r + (t.r - e.r) * n,
        this.g = e.g + (t.g - e.g) * n,
        this.b = e.b + (t.b - e.b) * n,
        this
    }
    lerpHSL(e, t) {
        this.getHSL(Sn),
        e.getHSL(_r);
        const n = Ji(Sn.h, _r.h, t)
          , i = Ji(Sn.s, _r.s, t)
          , s = Ji(Sn.l, _r.l, t);
        return this.setHSL(n, i, s),
        this
    }
    setFromVector3(e) {
        return this.r = e.x,
        this.g = e.y,
        this.b = e.z,
        this
    }
    applyMatrix3(e) {
        const t = this.r
          , n = this.g
          , i = this.b
          , s = e.elements;
        return this.r = s[0] * t + s[3] * n + s[6] * i,
        this.g = s[1] * t + s[4] * n + s[7] * i,
        this.b = s[2] * t + s[5] * n + s[8] * i,
        this
    }
    equals(e) {
        return e.r === this.r && e.g === this.g && e.b === this.b
    }
    fromArray(e, t=0) {
        return this.r = e[t],
        this.g = e[t + 1],
        this.b = e[t + 2],
        this
    }
    toArray(e=[], t=0) {
        return e[t] = this.r,
        e[t + 1] = this.g,
        e[t + 2] = this.b,
        e
    }
    fromBufferAttribute(e, t) {
        return this.r = e.getX(t),
        this.g = e.getY(t),
        this.b = e.getZ(t),
        this
    }
    toJSON() {
        return this.getHex()
    }
    *[Symbol.iterator]() {
        yield this.r,
        yield this.g,
        yield this.b
    }
}
const _t = new Se;
Se.NAMES = Bc;
let Zh = 0;
class Yt extends Ii {
    constructor() {
        super(),
        this.isMaterial = !0,
        Object.defineProperty(this, "id", {
            value: Zh++
        }),
        this.uuid = Ht(),
        this.name = "",
        this.type = "Material",
        this.blending = _i,
        this.side = pn,
        this.vertexColors = !1,
        this.opacity = 1,
        this.transparent = !1,
        this.alphaHash = !1,
        this.blendSrc = Ws,
        this.blendDst = Xs,
        this.blendEquation = Gn,
        this.blendSrcAlpha = null,
        this.blendDstAlpha = null,
        this.blendEquationAlpha = null,
        this.blendColor = new Se(0,0,0),
        this.blendAlpha = 0,
        this.depthFunc = Hr,
        this.depthTest = !0,
        this.depthWrite = !0,
        this.stencilWriteMask = 255,
        this.stencilFunc = ro,
        this.stencilRef = 0,
        this.stencilFuncMask = 255,
        this.stencilFail = Zn,
        this.stencilZFail = Zn,
        this.stencilZPass = Zn,
        this.stencilWrite = !1,
        this.clippingPlanes = null,
        this.clipIntersection = !1,
        this.clipShadows = !1,
        this.shadowSide = null,
        this.colorWrite = !0,
        this.precision = null,
        this.polygonOffset = !1,
        this.polygonOffsetFactor = 0,
        this.polygonOffsetUnits = 0,
        this.dithering = !1,
        this.alphaToCoverage = !1,
        this.premultipliedAlpha = !1,
        this.forceSinglePass = !1,
        this.visible = !0,
        this.toneMapped = !0,
        this.userData = {},
        this.version = 0,
        this._alphaTest = 0
    }
    get alphaTest() {
        return this._alphaTest
    }
    set alphaTest(e) {
        this._alphaTest > 0 != e > 0 && this.version++,
        this._alphaTest = e
    }
    onBuild() {}
    onBeforeRender() {}
    onBeforeCompile() {}
    customProgramCacheKey() {
        return this.onBeforeCompile.toString()
    }
    setValues(e) {
        if (e !== void 0)
            for (const t in e) {
                const n = e[t];
                if (n === void 0) {
                    console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);
                    continue
                }
                const i = this[t];
                if (i === void 0) {
                    console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);
                    continue
                }
                i && i.isColor ? i.set(n) : i && i.isVector3 && n && n.isVector3 ? i.copy(n) : this[t] = n
            }
    }
    toJSON(e) {
        const t = e === void 0 || typeof e == "string";
        t && (e = {
            textures: {},
            images: {}
        });
        const n = {
            metadata: {
                version: 4.6,
                type: "Material",
                generator: "Material.toJSON"
            }
        };
        n.uuid = this.uuid,
        n.type = this.type,
        this.name !== "" && (n.name = this.name),
        this.color && this.color.isColor && (n.color = this.color.getHex()),
        this.roughness !== void 0 && (n.roughness = this.roughness),
        this.metalness !== void 0 && (n.metalness = this.metalness),
        this.sheen !== void 0 && (n.sheen = this.sheen),
        this.sheenColor && this.sheenColor.isColor && (n.sheenColor = this.sheenColor.getHex()),
        this.sheenRoughness !== void 0 && (n.sheenRoughness = this.sheenRoughness),
        this.emissive && this.emissive.isColor && (n.emissive = this.emissive.getHex()),
        this.emissiveIntensity !== void 0 && this.emissiveIntensity !== 1 && (n.emissiveIntensity = this.emissiveIntensity),
        this.specular && this.specular.isColor && (n.specular = this.specular.getHex()),
        this.specularIntensity !== void 0 && (n.specularIntensity = this.specularIntensity),
        this.specularColor && this.specularColor.isColor && (n.specularColor = this.specularColor.getHex()),
        this.shininess !== void 0 && (n.shininess = this.shininess),
        this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
        this.clearcoatRoughness !== void 0 && (n.clearcoatRoughness = this.clearcoatRoughness),
        this.clearcoatMap && this.clearcoatMap.isTexture && (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
        this.clearcoatRoughnessMap && this.clearcoatRoughnessMap.isTexture && (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
        this.clearcoatNormalMap && this.clearcoatNormalMap.isTexture && (n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid,
        n.clearcoatNormalScale = this.clearcoatNormalScale.toArray()),
        this.dispersion !== void 0 && (n.dispersion = this.dispersion),
        this.iridescence !== void 0 && (n.iridescence = this.iridescence),
        this.iridescenceIOR !== void 0 && (n.iridescenceIOR = this.iridescenceIOR),
        this.iridescenceThicknessRange !== void 0 && (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
        this.iridescenceMap && this.iridescenceMap.isTexture && (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
        this.iridescenceThicknessMap && this.iridescenceThicknessMap.isTexture && (n.iridescenceThicknessMap = this.iridescenceThicknessMap.toJSON(e).uuid),
        this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy),
        this.anisotropyRotation !== void 0 && (n.anisotropyRotation = this.anisotropyRotation),
        this.anisotropyMap && this.anisotropyMap.isTexture && (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid),
        this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
        this.matcap && this.matcap.isTexture && (n.matcap = this.matcap.toJSON(e).uuid),
        this.alphaMap && this.alphaMap.isTexture && (n.alphaMap = this.alphaMap.toJSON(e).uuid),
        this.lightMap && this.lightMap.isTexture && (n.lightMap = this.lightMap.toJSON(e).uuid,
        n.lightMapIntensity = this.lightMapIntensity),
        this.aoMap && this.aoMap.isTexture && (n.aoMap = this.aoMap.toJSON(e).uuid,
        n.aoMapIntensity = this.aoMapIntensity),
        this.bumpMap && this.bumpMap.isTexture && (n.bumpMap = this.bumpMap.toJSON(e).uuid,
        n.bumpScale = this.bumpScale),
        this.normalMap && this.normalMap.isTexture && (n.normalMap = this.normalMap.toJSON(e).uuid,
        n.normalMapType = this.normalMapType,
        n.normalScale = this.normalScale.toArray()),
        this.displacementMap && this.displacementMap.isTexture && (n.displacementMap = this.displacementMap.toJSON(e).uuid,
        n.displacementScale = this.displacementScale,
        n.displacementBias = this.displacementBias),
        this.roughnessMap && this.roughnessMap.isTexture && (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
        this.metalnessMap && this.metalnessMap.isTexture && (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
        this.emissiveMap && this.emissiveMap.isTexture && (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
        this.specularMap && this.specularMap.isTexture && (n.specularMap = this.specularMap.toJSON(e).uuid),
        this.specularIntensityMap && this.specularIntensityMap.isTexture && (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
        this.specularColorMap && this.specularColorMap.isTexture && (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
        this.envMap && this.envMap.isTexture && (n.envMap = this.envMap.toJSON(e).uuid,
        this.combine !== void 0 && (n.combine = this.combine)),
        this.envMapRotation !== void 0 && (n.envMapRotation = this.envMapRotation.toArray()),
        this.envMapIntensity !== void 0 && (n.envMapIntensity = this.envMapIntensity),
        this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
        this.refractionRatio !== void 0 && (n.refractionRatio = this.refractionRatio),
        this.gradientMap && this.gradientMap.isTexture && (n.gradientMap = this.gradientMap.toJSON(e).uuid),
        this.transmission !== void 0 && (n.transmission = this.transmission),
        this.transmissionMap && this.transmissionMap.isTexture && (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
        this.thickness !== void 0 && (n.thickness = this.thickness),
        this.thicknessMap && this.thicknessMap.isTexture && (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
        this.attenuationDistance !== void 0 && this.attenuationDistance !== 1 / 0 && (n.attenuationDistance = this.attenuationDistance),
        this.attenuationColor !== void 0 && (n.attenuationColor = this.attenuationColor.getHex()),
        this.size !== void 0 && (n.size = this.size),
        this.shadowSide !== null && (n.shadowSide = this.shadowSide),
        this.sizeAttenuation !== void 0 && (n.sizeAttenuation = this.sizeAttenuation),
        this.blending !== _i && (n.blending = this.blending),
        this.side !== pn && (n.side = this.side),
        this.vertexColors === !0 && (n.vertexColors = !0),
        this.opacity < 1 && (n.opacity = this.opacity),
        this.transparent === !0 && (n.transparent = !0),
        this.blendSrc !== Ws && (n.blendSrc = this.blendSrc),
        this.blendDst !== Xs && (n.blendDst = this.blendDst),
        this.blendEquation !== Gn && (n.blendEquation = this.blendEquation),
        this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha),
        this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha),
        this.blendEquationAlpha !== null && (n.blendEquationAlpha = this.blendEquationAlpha),
        this.blendColor && this.blendColor.isColor && (n.blendColor = this.blendColor.getHex()),
        this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha),
        this.depthFunc !== Hr && (n.depthFunc = this.depthFunc),
        this.depthTest === !1 && (n.depthTest = this.depthTest),
        this.depthWrite === !1 && (n.depthWrite = this.depthWrite),
        this.colorWrite === !1 && (n.colorWrite = this.colorWrite),
        this.stencilWriteMask !== 255 && (n.stencilWriteMask = this.stencilWriteMask),
        this.stencilFunc !== ro && (n.stencilFunc = this.stencilFunc),
        this.stencilRef !== 0 && (n.stencilRef = this.stencilRef),
        this.stencilFuncMask !== 255 && (n.stencilFuncMask = this.stencilFuncMask),
        this.stencilFail !== Zn && (n.stencilFail = this.stencilFail),
        this.stencilZFail !== Zn && (n.stencilZFail = this.stencilZFail),
        this.stencilZPass !== Zn && (n.stencilZPass = this.stencilZPass),
        this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite),
        this.rotation !== void 0 && this.rotation !== 0 && (n.rotation = this.rotation),
        this.polygonOffset === !0 && (n.polygonOffset = !0),
        this.polygonOffsetFactor !== 0 && (n.polygonOffsetFactor = this.polygonOffsetFactor),
        this.polygonOffsetUnits !== 0 && (n.polygonOffsetUnits = this.polygonOffsetUnits),
        this.linewidth !== void 0 && this.linewidth !== 1 && (n.linewidth = this.linewidth),
        this.dashSize !== void 0 && (n.dashSize = this.dashSize),
        this.gapSize !== void 0 && (n.gapSize = this.gapSize),
        this.scale !== void 0 && (n.scale = this.scale),
        this.dithering === !0 && (n.dithering = !0),
        this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
        this.alphaHash === !0 && (n.alphaHash = !0),
        this.alphaToCoverage === !0 && (n.alphaToCoverage = !0),
        this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0),
        this.forceSinglePass === !0 && (n.forceSinglePass = !0),
        this.wireframe === !0 && (n.wireframe = !0),
        this.wireframeLinewidth > 1 && (n.wireframeLinewidth = this.wireframeLinewidth),
        this.wireframeLinecap !== "round" && (n.wireframeLinecap = this.wireframeLinecap),
        this.wireframeLinejoin !== "round" && (n.wireframeLinejoin = this.wireframeLinejoin),
        this.flatShading === !0 && (n.flatShading = !0),
        this.visible === !1 && (n.visible = !1),
        this.toneMapped === !1 && (n.toneMapped = !1),
        this.fog === !1 && (n.fog = !1),
        Object.keys(this.userData).length > 0 && (n.userData = this.userData);
        function i(s) {
            const a = [];
            for (const o in s) {
                const c = s[o];
                delete c.metadata,
                a.push(c)
            }
            return a
        }
        if (t) {
            const s = i(e.textures)
              , a = i(e.images);
            s.length > 0 && (n.textures = s),
            a.length > 0 && (n.images = a)
        }
        return n
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        this.name = e.name,
        this.blending = e.blending,
        this.side = e.side,
        this.vertexColors = e.vertexColors,
        this.opacity = e.opacity,
        this.transparent = e.transparent,
        this.blendSrc = e.blendSrc,
        this.blendDst = e.blendDst,
        this.blendEquation = e.blendEquation,
        this.blendSrcAlpha = e.blendSrcAlpha,
        this.blendDstAlpha = e.blendDstAlpha,
        this.blendEquationAlpha = e.blendEquationAlpha,
        this.blendColor.copy(e.blendColor),
        this.blendAlpha = e.blendAlpha,
        this.depthFunc = e.depthFunc,
        this.depthTest = e.depthTest,
        this.depthWrite = e.depthWrite,
        this.stencilWriteMask = e.stencilWriteMask,
        this.stencilFunc = e.stencilFunc,
        this.stencilRef = e.stencilRef,
        this.stencilFuncMask = e.stencilFuncMask,
        this.stencilFail = e.stencilFail,
        this.stencilZFail = e.stencilZFail,
        this.stencilZPass = e.stencilZPass,
        this.stencilWrite = e.stencilWrite;
        const t = e.clippingPlanes;
        let n = null;
        if (t !== null) {
            const i = t.length;
            n = new Array(i);
            for (let s = 0; s !== i; ++s)
                n[s] = t[s].clone()
        }
        return this.clippingPlanes = n,
        this.clipIntersection = e.clipIntersection,
        this.clipShadows = e.clipShadows,
        this.shadowSide = e.shadowSide,
        this.colorWrite = e.colorWrite,
        this.precision = e.precision,
        this.polygonOffset = e.polygonOffset,
        this.polygonOffsetFactor = e.polygonOffsetFactor,
        this.polygonOffsetUnits = e.polygonOffsetUnits,
        this.dithering = e.dithering,
        this.alphaTest = e.alphaTest,
        this.alphaHash = e.alphaHash,
        this.alphaToCoverage = e.alphaToCoverage,
        this.premultipliedAlpha = e.premultipliedAlpha,
        this.forceSinglePass = e.forceSinglePass,
        this.visible = e.visible,
        this.toneMapped = e.toneMapped,
        this.userData = JSON.parse(JSON.stringify(e.userData)),
        this
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
    set needsUpdate(e) {
        e === !0 && this.version++
    }
}
class Xn extends Yt {
    constructor(e) {
        super(),
        this.isMeshBasicMaterial = !0,
        this.type = "MeshBasicMaterial",
        this.color = new Se(16777215),
        this.map = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.specularMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.envMapRotation = new Kt,
        this.combine = vc,
        this.reflectivity = 1,
        this.refractionRatio = .98,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = "round",
        this.wireframeLinejoin = "round",
        this.fog = !0,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.color.copy(e.color),
        this.map = e.map,
        this.lightMap = e.lightMap,
        this.lightMapIntensity = e.lightMapIntensity,
        this.aoMap = e.aoMap,
        this.aoMapIntensity = e.aoMapIntensity,
        this.specularMap = e.specularMap,
        this.alphaMap = e.alphaMap,
        this.envMap = e.envMap,
        this.envMapRotation.copy(e.envMapRotation),
        this.combine = e.combine,
        this.reflectivity = e.reflectivity,
        this.refractionRatio = e.refractionRatio,
        this.wireframe = e.wireframe,
        this.wireframeLinewidth = e.wireframeLinewidth,
        this.wireframeLinecap = e.wireframeLinecap,
        this.wireframeLinejoin = e.wireframeLinejoin,
        this.fog = e.fog,
        this
    }
}
const hn = Jh();
function Jh() {
    const r = new ArrayBuffer(4)
      , e = new Float32Array(r)
      , t = new Uint32Array(r)
      , n = new Uint32Array(512)
      , i = new Uint32Array(512);
    for (let c = 0; c < 256; ++c) {
        const l = c - 127;
        l < -27 ? (n[c] = 0,
        n[c | 256] = 32768,
        i[c] = 24,
        i[c | 256] = 24) : l < -14 ? (n[c] = 1024 >> -l - 14,
        n[c | 256] = 1024 >> -l - 14 | 32768,
        i[c] = -l - 1,
        i[c | 256] = -l - 1) : l <= 15 ? (n[c] = l + 15 << 10,
        n[c | 256] = l + 15 << 10 | 32768,
        i[c] = 13,
        i[c | 256] = 13) : l < 128 ? (n[c] = 31744,
        n[c | 256] = 64512,
        i[c] = 24,
        i[c | 256] = 24) : (n[c] = 31744,
        n[c | 256] = 64512,
        i[c] = 13,
        i[c | 256] = 13)
    }
    const s = new Uint32Array(2048)
      , a = new Uint32Array(64)
      , o = new Uint32Array(64);
    for (let c = 1; c < 1024; ++c) {
        let l = c << 13
          , h = 0;
        for (; !(l & 8388608); )
            l <<= 1,
            h -= 8388608;
        l &= -8388609,
        h += 947912704,
        s[c] = l | h
    }
    for (let c = 1024; c < 2048; ++c)
        s[c] = 939524096 + (c - 1024 << 13);
    for (let c = 1; c < 31; ++c)
        a[c] = c << 23;
    a[31] = 1199570944,
    a[32] = 2147483648;
    for (let c = 33; c < 63; ++c)
        a[c] = 2147483648 + (c - 32 << 23);
    a[63] = 3347054592;
    for (let c = 1; c < 64; ++c)
        c !== 32 && (o[c] = 1024);
    return {
        floatView: e,
        uint32View: t,
        baseTable: n,
        shiftTable: i,
        mantissaTable: s,
        exponentTable: a,
        offsetTable: o
    }
}
function Qh(r) {
    Math.abs(r) > 65504 && console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),
    r = dt(r, -65504, 65504),
    hn.floatView[0] = r;
    const e = hn.uint32View[0]
      , t = e >> 23 & 511;
    return hn.baseTable[t] + ((e & 8388607) >> hn.shiftTable[t])
}
function eu(r) {
    const e = r >> 10;
    return hn.uint32View[0] = hn.mantissaTable[hn.offsetTable[e] + (r & 1023)] + hn.exponentTable[e],
    hn.floatView[0]
}
const xr = {
    toHalfFloat: Qh,
    fromHalfFloat: eu
}
  , st = new P
  , vr = new Ue;
class Tt {
    constructor(e, t, n=!1) {
        if (Array.isArray(e))
            throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");
        this.isBufferAttribute = !0,
        this.name = "",
        this.array = e,
        this.itemSize = t,
        this.count = e !== void 0 ? e.length / t : 0,
        this.normalized = n,
        this.usage = Ks,
        this._updateRange = {
            offset: 0,
            count: -1
        },
        this.updateRanges = [],
        this.gpuType = Pt,
        this.version = 0
    }
    onUploadCallback() {}
    set needsUpdate(e) {
        e === !0 && this.version++
    }
    get updateRange() {
        return Uc("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),
        this._updateRange
    }
    setUsage(e) {
        return this.usage = e,
        this
    }
    addUpdateRange(e, t) {
        this.updateRanges.push({
            start: e,
            count: t
        })
    }
    clearUpdateRanges() {
        this.updateRanges.length = 0
    }
    copy(e) {
        return this.name = e.name,
        this.array = new e.array.constructor(e.array),
        this.itemSize = e.itemSize,
        this.count = e.count,
        this.normalized = e.normalized,
        this.usage = e.usage,
        this.gpuType = e.gpuType,
        this
    }
    copyAt(e, t, n) {
        e *= this.itemSize,
        n *= t.itemSize;
        for (let i = 0, s = this.itemSize; i < s; i++)
            this.array[e + i] = t.array[n + i];
        return this
    }
    copyArray(e) {
        return this.array.set(e),
        this
    }
    applyMatrix3(e) {
        if (this.itemSize === 2)
            for (let t = 0, n = this.count; t < n; t++)
                vr.fromBufferAttribute(this, t),
                vr.applyMatrix3(e),
                this.setXY(t, vr.x, vr.y);
        else if (this.itemSize === 3)
            for (let t = 0, n = this.count; t < n; t++)
                st.fromBufferAttribute(this, t),
                st.applyMatrix3(e),
                this.setXYZ(t, st.x, st.y, st.z);
        return this
    }
    applyMatrix4(e) {
        for (let t = 0, n = this.count; t < n; t++)
            st.fromBufferAttribute(this, t),
            st.applyMatrix4(e),
            this.setXYZ(t, st.x, st.y, st.z);
        return this
    }
    applyNormalMatrix(e) {
        for (let t = 0, n = this.count; t < n; t++)
            st.fromBufferAttribute(this, t),
            st.applyNormalMatrix(e),
            this.setXYZ(t, st.x, st.y, st.z);
        return this
    }
    transformDirection(e) {
        for (let t = 0, n = this.count; t < n; t++)
            st.fromBufferAttribute(this, t),
            st.transformDirection(e),
            this.setXYZ(t, st.x, st.y, st.z);
        return this
    }
    set(e, t=0) {
        return this.array.set(e, t),
        this
    }
    getComponent(e, t) {
        let n = this.array[e * this.itemSize + t];
        return this.normalized && (n = Bt(n, this.array)),
        n
    }
    setComponent(e, t, n) {
        return this.normalized && (n = qe(n, this.array)),
        this.array[e * this.itemSize + t] = n,
        this
    }
    getX(e) {
        let t = this.array[e * this.itemSize];
        return this.normalized && (t = Bt(t, this.array)),
        t
    }
    setX(e, t) {
        return this.normalized && (t = qe(t, this.array)),
        this.array[e * this.itemSize] = t,
        this
    }
    getY(e) {
        let t = this.array[e * this.itemSize + 1];
        return this.normalized && (t = Bt(t, this.array)),
        t
    }
    setY(e, t) {
        return this.normalized && (t = qe(t, this.array)),
        this.array[e * this.itemSize + 1] = t,
        this
    }
    getZ(e) {
        let t = this.array[e * this.itemSize + 2];
        return this.normalized && (t = Bt(t, this.array)),
        t
    }
    setZ(e, t) {
        return this.normalized && (t = qe(t, this.array)),
        this.array[e * this.itemSize + 2] = t,
        this
    }
    getW(e) {
        let t = this.array[e * this.itemSize + 3];
        return this.normalized && (t = Bt(t, this.array)),
        t
    }
    setW(e, t) {
        return this.normalized && (t = qe(t, this.array)),
        this.array[e * this.itemSize + 3] = t,
        this
    }
    setXY(e, t, n) {
        return e *= this.itemSize,
        this.normalized && (t = qe(t, this.array),
        n = qe(n, this.array)),
        this.array[e + 0] = t,
        this.array[e + 1] = n,
        this
    }
    setXYZ(e, t, n, i) {
        return e *= this.itemSize,
        this.normalized && (t = qe(t, this.array),
        n = qe(n, this.array),
        i = qe(i, this.array)),
        this.array[e + 0] = t,
        this.array[e + 1] = n,
        this.array[e + 2] = i,
        this
    }
    setXYZW(e, t, n, i, s) {
        return e *= this.itemSize,
        this.normalized && (t = qe(t, this.array),
        n = qe(n, this.array),
        i = qe(i, this.array),
        s = qe(s, this.array)),
        this.array[e + 0] = t,
        this.array[e + 1] = n,
        this.array[e + 2] = i,
        this.array[e + 3] = s,
        this
    }
    onUpload(e) {
        return this.onUploadCallback = e,
        this
    }
    clone() {
        return new this.constructor(this.array,this.itemSize).copy(this)
    }
    toJSON() {
        const e = {
            itemSize: this.itemSize,
            type: this.array.constructor.name,
            array: Array.from(this.array),
            normalized: this.normalized
        };
        return this.name !== "" && (e.name = this.name),
        this.usage !== Ks && (e.usage = this.usage),
        e
    }
}
class zc extends Tt {
    constructor(e, t, n) {
        super(new Uint16Array(e), t, n)
    }
}
class Hc extends Tt {
    constructor(e, t, n) {
        super(new Uint32Array(e), t, n)
    }
}
class fn extends Tt {
    constructor(e, t, n) {
        super(new Float32Array(e), t, n)
    }
}
let tu = 0;
const Dt = new we
  , As = new et
  , oi = new P
  , Lt = new mn
  , Vi = new mn
  , ct = new P;
class $t extends Ii {
    constructor() {
        super(),
        this.isBufferGeometry = !0,
        Object.defineProperty(this, "id", {
            value: tu++
        }),
        this.uuid = Ht(),
        this.name = "",
        this.type = "BufferGeometry",
        this.index = null,
        this.attributes = {},
        this.morphAttributes = {},
        this.morphTargetsRelative = !1,
        this.groups = [],
        this.boundingBox = null,
        this.boundingSphere = null,
        this.drawRange = {
            start: 0,
            count: 1 / 0
        },
        this.userData = {}
    }
    getIndex() {
        return this.index
    }
    setIndex(e) {
        return Array.isArray(e) ? this.index = new (Dc(e) ? Hc : zc)(e,1) : this.index = e,
        this
    }
    getAttribute(e) {
        return this.attributes[e]
    }
    setAttribute(e, t) {
        return this.attributes[e] = t,
        this
    }
    deleteAttribute(e) {
        return delete this.attributes[e],
        this
    }
    hasAttribute(e) {
        return this.attributes[e] !== void 0
    }
    addGroup(e, t, n=0) {
        this.groups.push({
            start: e,
            count: t,
            materialIndex: n
        })
    }
    clearGroups() {
        this.groups = []
    }
    setDrawRange(e, t) {
        this.drawRange.start = e,
        this.drawRange.count = t
    }
    applyMatrix4(e) {
        const t = this.attributes.position;
        t !== void 0 && (t.applyMatrix4(e),
        t.needsUpdate = !0);
        const n = this.attributes.normal;
        if (n !== void 0) {
            const s = new be().getNormalMatrix(e);
            n.applyNormalMatrix(s),
            n.needsUpdate = !0
        }
        const i = this.attributes.tangent;
        return i !== void 0 && (i.transformDirection(e),
        i.needsUpdate = !0),
        this.boundingBox !== null && this.computeBoundingBox(),
        this.boundingSphere !== null && this.computeBoundingSphere(),
        this
    }
    applyQuaternion(e) {
        return Dt.makeRotationFromQuaternion(e),
        this.applyMatrix4(Dt),
        this
    }
    rotateX(e) {
        return Dt.makeRotationX(e),
        this.applyMatrix4(Dt),
        this
    }
    rotateY(e) {
        return Dt.makeRotationY(e),
        this.applyMatrix4(Dt),
        this
    }
    rotateZ(e) {
        return Dt.makeRotationZ(e),
        this.applyMatrix4(Dt),
        this
    }
    translate(e, t, n) {
        return Dt.makeTranslation(e, t, n),
        this.applyMatrix4(Dt),
        this
    }
    scale(e, t, n) {
        return Dt.makeScale(e, t, n),
        this.applyMatrix4(Dt),
        this
    }
    lookAt(e) {
        return As.lookAt(e),
        As.updateMatrix(),
        this.applyMatrix4(As.matrix),
        this
    }
    center() {
        return this.computeBoundingBox(),
        this.boundingBox.getCenter(oi).negate(),
        this.translate(oi.x, oi.y, oi.z),
        this
    }
    setFromPoints(e) {
        const t = [];
        for (let n = 0, i = e.length; n < i; n++) {
            const s = e[n];
            t.push(s.x, s.y, s.z || 0)
        }
        return this.setAttribute("position", new fn(t,3)),
        this
    }
    computeBoundingBox() {
        this.boundingBox === null && (this.boundingBox = new mn);
        const e = this.attributes.position
          , t = this.morphAttributes.position;
        if (e && e.isGLBufferAttribute) {
            console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.", this),
            this.boundingBox.set(new P(-1 / 0,-1 / 0,-1 / 0), new P(1 / 0,1 / 0,1 / 0));
            return
        }
        if (e !== void 0) {
            if (this.boundingBox.setFromBufferAttribute(e),
            t)
                for (let n = 0, i = t.length; n < i; n++) {
                    const s = t[n];
                    Lt.setFromBufferAttribute(s),
                    this.morphTargetsRelative ? (ct.addVectors(this.boundingBox.min, Lt.min),
                    this.boundingBox.expandByPoint(ct),
                    ct.addVectors(this.boundingBox.max, Lt.max),
                    this.boundingBox.expandByPoint(ct)) : (this.boundingBox.expandByPoint(Lt.min),
                    this.boundingBox.expandByPoint(Lt.max))
                }
        } else
            this.boundingBox.makeEmpty();
        (isNaN(this.boundingBox.min.x) || isNaN(this.boundingBox.min.y) || isNaN(this.boundingBox.min.z)) && console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.', this)
    }
    computeBoundingSphere() {
        this.boundingSphere === null && (this.boundingSphere = new jt);
        const e = this.attributes.position
          , t = this.morphAttributes.position;
        if (e && e.isGLBufferAttribute) {
            console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.", this),
            this.boundingSphere.set(new P, 1 / 0);
            return
        }
        if (e) {
            const n = this.boundingSphere.center;
            if (Lt.setFromBufferAttribute(e),
            t)
                for (let s = 0, a = t.length; s < a; s++) {
                    const o = t[s];
                    Vi.setFromBufferAttribute(o),
                    this.morphTargetsRelative ? (ct.addVectors(Lt.min, Vi.min),
                    Lt.expandByPoint(ct),
                    ct.addVectors(Lt.max, Vi.max),
                    Lt.expandByPoint(ct)) : (Lt.expandByPoint(Vi.min),
                    Lt.expandByPoint(Vi.max))
                }
            Lt.getCenter(n);
            let i = 0;
            for (let s = 0, a = e.count; s < a; s++)
                ct.fromBufferAttribute(e, s),
                i = Math.max(i, n.distanceToSquared(ct));
            if (t)
                for (let s = 0, a = t.length; s < a; s++) {
                    const o = t[s]
                      , c = this.morphTargetsRelative;
                    for (let l = 0, h = o.count; l < h; l++)
                        ct.fromBufferAttribute(o, l),
                        c && (oi.fromBufferAttribute(e, l),
                        ct.add(oi)),
                        i = Math.max(i, n.distanceToSquared(ct))
                }
            this.boundingSphere.radius = Math.sqrt(i),
            isNaN(this.boundingSphere.radius) && console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.', this)
        }
    }
    computeTangents() {
        const e = this.index
          , t = this.attributes;
        if (e === null || t.position === void 0 || t.normal === void 0 || t.uv === void 0) {
            console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");
            return
        }
        const n = t.position
          , i = t.normal
          , s = t.uv;
        this.hasAttribute("tangent") === !1 && this.setAttribute("tangent", new Tt(new Float32Array(4 * n.count),4));
        const a = this.getAttribute("tangent")
          , o = []
          , c = [];
        for (let L = 0; L < n.count; L++)
            o[L] = new P,
            c[L] = new P;
        const l = new P
          , h = new P
          , u = new P
          , d = new Ue
          , m = new Ue
          , g = new Ue
          , _ = new P
          , p = new P;
        function f(L, M, x) {
            l.fromBufferAttribute(n, L),
            h.fromBufferAttribute(n, M),
            u.fromBufferAttribute(n, x),
            d.fromBufferAttribute(s, L),
            m.fromBufferAttribute(s, M),
            g.fromBufferAttribute(s, x),
            h.sub(l),
            u.sub(l),
            m.sub(d),
            g.sub(d);
            const D = 1 / (m.x * g.y - g.x * m.y);
            isFinite(D) && (_.copy(h).multiplyScalar(g.y).addScaledVector(u, -m.y).multiplyScalar(D),
            p.copy(u).multiplyScalar(m.x).addScaledVector(h, -g.x).multiplyScalar(D),
            o[L].add(_),
            o[M].add(_),
            o[x].add(_),
            c[L].add(p),
            c[M].add(p),
            c[x].add(p))
        }
        let T = this.groups;
        T.length === 0 && (T = [{
            start: 0,
            count: e.count
        }]);
        for (let L = 0, M = T.length; L < M; ++L) {
            const x = T[L]
              , D = x.start
              , V = x.count;
            for (let R = D, B = D + V; R < B; R += 3)
                f(e.getX(R + 0), e.getX(R + 1), e.getX(R + 2))
        }
        const y = new P
          , E = new P
          , U = new P
          , w = new P;
        function b(L) {
            U.fromBufferAttribute(i, L),
            w.copy(U);
            const M = o[L];
            y.copy(M),
            y.sub(U.multiplyScalar(U.dot(M))).normalize(),
            E.crossVectors(w, M);
            const D = E.dot(c[L]) < 0 ? -1 : 1;
            a.setXYZW(L, y.x, y.y, y.z, D)
        }
        for (let L = 0, M = T.length; L < M; ++L) {
            const x = T[L]
              , D = x.start
              , V = x.count;
            for (let R = D, B = D + V; R < B; R += 3)
                b(e.getX(R + 0)),
                b(e.getX(R + 1)),
                b(e.getX(R + 2))
        }
    }
    computeVertexNormals() {
        const e = this.index
          , t = this.getAttribute("position");
        if (t !== void 0) {
            let n = this.getAttribute("normal");
            if (n === void 0)
                n = new Tt(new Float32Array(t.count * 3),3),
                this.setAttribute("normal", n);
            else
                for (let d = 0, m = n.count; d < m; d++)
                    n.setXYZ(d, 0, 0, 0);
            const i = new P
              , s = new P
              , a = new P
              , o = new P
              , c = new P
              , l = new P
              , h = new P
              , u = new P;
            if (e)
                for (let d = 0, m = e.count; d < m; d += 3) {
                    const g = e.getX(d + 0)
                      , _ = e.getX(d + 1)
                      , p = e.getX(d + 2);
                    i.fromBufferAttribute(t, g),
                    s.fromBufferAttribute(t, _),
                    a.fromBufferAttribute(t, p),
                    h.subVectors(a, s),
                    u.subVectors(i, s),
                    h.cross(u),
                    o.fromBufferAttribute(n, g),
                    c.fromBufferAttribute(n, _),
                    l.fromBufferAttribute(n, p),
                    o.add(h),
                    c.add(h),
                    l.add(h),
                    n.setXYZ(g, o.x, o.y, o.z),
                    n.setXYZ(_, c.x, c.y, c.z),
                    n.setXYZ(p, l.x, l.y, l.z)
                }
            else
                for (let d = 0, m = t.count; d < m; d += 3)
                    i.fromBufferAttribute(t, d + 0),
                    s.fromBufferAttribute(t, d + 1),
                    a.fromBufferAttribute(t, d + 2),
                    h.subVectors(a, s),
                    u.subVectors(i, s),
                    h.cross(u),
                    n.setXYZ(d + 0, h.x, h.y, h.z),
                    n.setXYZ(d + 1, h.x, h.y, h.z),
                    n.setXYZ(d + 2, h.x, h.y, h.z);
            this.normalizeNormals(),
            n.needsUpdate = !0
        }
    }
    normalizeNormals() {
        const e = this.attributes.normal;
        for (let t = 0, n = e.count; t < n; t++)
            ct.fromBufferAttribute(e, t),
            ct.normalize(),
            e.setXYZ(t, ct.x, ct.y, ct.z)
    }
    toNonIndexed() {
        function e(o, c) {
            const l = o.array
              , h = o.itemSize
              , u = o.normalized
              , d = new l.constructor(c.length * h);
            let m = 0
              , g = 0;
            for (let _ = 0, p = c.length; _ < p; _++) {
                o.isInterleavedBufferAttribute ? m = c[_] * o.data.stride + o.offset : m = c[_] * h;
                for (let f = 0; f < h; f++)
                    d[g++] = l[m++]
            }
            return new Tt(d,h,u)
        }
        if (this.index === null)
            return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),
            this;
        const t = new $t
          , n = this.index.array
          , i = this.attributes;
        for (const o in i) {
            const c = i[o]
              , l = e(c, n);
            t.setAttribute(o, l)
        }
        const s = this.morphAttributes;
        for (const o in s) {
            const c = []
              , l = s[o];
            for (let h = 0, u = l.length; h < u; h++) {
                const d = l[h]
                  , m = e(d, n);
                c.push(m)
            }
            t.morphAttributes[o] = c
        }
        t.morphTargetsRelative = this.morphTargetsRelative;
        const a = this.groups;
        for (let o = 0, c = a.length; o < c; o++) {
            const l = a[o];
            t.addGroup(l.start, l.count, l.materialIndex)
        }
        return t
    }
    toJSON() {
        const e = {
            metadata: {
                version: 4.6,
                type: "BufferGeometry",
                generator: "BufferGeometry.toJSON"
            }
        };
        if (e.uuid = this.uuid,
        e.type = this.type,
        this.name !== "" && (e.name = this.name),
        Object.keys(this.userData).length > 0 && (e.userData = this.userData),
        this.parameters !== void 0) {
            const c = this.parameters;
            for (const l in c)
                c[l] !== void 0 && (e[l] = c[l]);
            return e
        }
        e.data = {
            attributes: {}
        };
        const t = this.index;
        t !== null && (e.data.index = {
            type: t.array.constructor.name,
            array: Array.prototype.slice.call(t.array)
        });
        const n = this.attributes;
        for (const c in n) {
            const l = n[c];
            e.data.attributes[c] = l.toJSON(e.data)
        }
        const i = {};
        let s = !1;
        for (const c in this.morphAttributes) {
            const l = this.morphAttributes[c]
              , h = [];
            for (let u = 0, d = l.length; u < d; u++) {
                const m = l[u];
                h.push(m.toJSON(e.data))
            }
            h.length > 0 && (i[c] = h,
            s = !0)
        }
        s && (e.data.morphAttributes = i,
        e.data.morphTargetsRelative = this.morphTargetsRelative);
        const a = this.groups;
        a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
        const o = this.boundingSphere;
        return o !== null && (e.data.boundingSphere = {
            center: o.center.toArray(),
            radius: o.radius
        }),
        e
    }
    clone() {
        return new this.constructor().copy(this)
    }
    copy(e) {
        this.index = null,
        this.attributes = {},
        this.morphAttributes = {},
        this.groups = [],
        this.boundingBox = null,
        this.boundingSphere = null;
        const t = {};
        this.name = e.name;
        const n = e.index;
        n !== null && this.setIndex(n.clone(t));
        const i = e.attributes;
        for (const l in i) {
            const h = i[l];
            this.setAttribute(l, h.clone(t))
        }
        const s = e.morphAttributes;
        for (const l in s) {
            const h = []
              , u = s[l];
            for (let d = 0, m = u.length; d < m; d++)
                h.push(u[d].clone(t));
            this.morphAttributes[l] = h
        }
        this.morphTargetsRelative = e.morphTargetsRelative;
        const a = e.groups;
        for (let l = 0, h = a.length; l < h; l++) {
            const u = a[l];
            this.addGroup(u.start, u.count, u.materialIndex)
        }
        const o = e.boundingBox;
        o !== null && (this.boundingBox = o.clone());
        const c = e.boundingSphere;
        return c !== null && (this.boundingSphere = c.clone()),
        this.drawRange.start = e.drawRange.start,
        this.drawRange.count = e.drawRange.count,
        this.userData = e.userData,
        this
    }
    dispose() {
        this.dispatchEvent({
            type: "dispose"
        })
    }
}
const Mo = new we
  , Nn = new Zr
  , Mr = new jt
  , So = new P
  , ci = new P
  , li = new P
  , hi = new P
  , bs = new P
  , Sr = new P
  , yr = new Ue
  , Er = new Ue
  , Tr = new Ue
  , yo = new P
  , Eo = new P
  , To = new P
  , Ar = new P
  , br = new P;
class At extends et {
    constructor(e=new $t, t=new Xn) {
        super(),
        this.isMesh = !0,
        this.type = "Mesh",
        this.geometry = e,
        this.material = t,
        this.updateMorphTargets()
    }
    copy(e, t) {
        return super.copy(e, t),
        e.morphTargetInfluences !== void 0 && (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
        e.morphTargetDictionary !== void 0 && (this.morphTargetDictionary = Object.assign({}, e.morphTargetDictionary)),
        this.material = Array.isArray(e.material) ? e.material.slice() : e.material,
        this.geometry = e.geometry,
        this
    }
    updateMorphTargets() {
        const t = this.geometry.morphAttributes
          , n = Object.keys(t);
        if (n.length > 0) {
            const i = t[n[0]];
            if (i !== void 0) {
                this.morphTargetInfluences = [],
                this.morphTargetDictionary = {};
                for (let s = 0, a = i.length; s < a; s++) {
                    const o = i[s].name || String(s);
                    this.morphTargetInfluences.push(0),
                    this.morphTargetDictionary[o] = s
                }
            }
        }
    }
    getVertexPosition(e, t) {
        const n = this.geometry
          , i = n.attributes.position
          , s = n.morphAttributes.position
          , a = n.morphTargetsRelative;
        t.fromBufferAttribute(i, e);
        const o = this.morphTargetInfluences;
        if (s && o) {
            Sr.set(0, 0, 0);
            for (let c = 0, l = s.length; c < l; c++) {
                const h = o[c]
                  , u = s[c];
                h !== 0 && (bs.fromBufferAttribute(u, e),
                a ? Sr.addScaledVector(bs, h) : Sr.addScaledVector(bs.sub(t), h))
            }
            t.add(Sr)
        }
        return t
    }
    raycast(e, t) {
        const n = this.geometry
          , i = this.material
          , s = this.matrixWorld;
        i !== void 0 && (n.boundingSphere === null && n.computeBoundingSphere(),
        Mr.copy(n.boundingSphere),
        Mr.applyMatrix4(s),
        Nn.copy(e.ray).recast(e.near),
        !(Mr.containsPoint(Nn.origin) === !1 && (Nn.intersectSphere(Mr, So) === null || Nn.origin.distanceToSquared(So) > (e.far - e.near) ** 2)) && (Mo.copy(s).invert(),
        Nn.copy(e.ray).applyMatrix4(Mo),
        !(n.boundingBox !== null && Nn.intersectsBox(n.boundingBox) === !1) && this._computeIntersections(e, t, Nn)))
    }
    _computeIntersections(e, t, n) {
        let i;
        const s = this.geometry
          , a = this.material
          , o = s.index
          , c = s.attributes.position
          , l = s.attributes.uv
          , h = s.attributes.uv1
          , u = s.attributes.normal
          , d = s.groups
          , m = s.drawRange;
        if (o !== null)
            if (Array.isArray(a))
                for (let g = 0, _ = d.length; g < _; g++) {
                    const p = d[g]
                      , f = a[p.materialIndex]
                      , T = Math.max(p.start, m.start)
                      , y = Math.min(o.count, Math.min(p.start + p.count, m.start + m.count));
                    for (let E = T, U = y; E < U; E += 3) {
                        const w = o.getX(E)
                          , b = o.getX(E + 1)
                          , L = o.getX(E + 2);
                        i = wr(this, f, e, n, l, h, u, w, b, L),
                        i && (i.faceIndex = Math.floor(E / 3),
                        i.face.materialIndex = p.materialIndex,
                        t.push(i))
                    }
                }
            else {
                const g = Math.max(0, m.start)
                  , _ = Math.min(o.count, m.start + m.count);
                for (let p = g, f = _; p < f; p += 3) {
                    const T = o.getX(p)
                      , y = o.getX(p + 1)
                      , E = o.getX(p + 2);
                    i = wr(this, a, e, n, l, h, u, T, y, E),
                    i && (i.faceIndex = Math.floor(p / 3),
                    t.push(i))
                }
            }
        else if (c !== void 0)
            if (Array.isArray(a))
                for (let g = 0, _ = d.length; g < _; g++) {
                    const p = d[g]
                      , f = a[p.materialIndex]
                      , T = Math.max(p.start, m.start)
                      , y = Math.min(c.count, Math.min(p.start + p.count, m.start + m.count));
                    for (let E = T, U = y; E < U; E += 3) {
                        const w = E
                          , b = E + 1
                          , L = E + 2;
                        i = wr(this, f, e, n, l, h, u, w, b, L),
                        i && (i.faceIndex = Math.floor(E / 3),
                        i.face.materialIndex = p.materialIndex,
                        t.push(i))
                    }
                }
            else {
                const g = Math.max(0, m.start)
                  , _ = Math.min(c.count, m.start + m.count);
                for (let p = g, f = _; p < f; p += 3) {
                    const T = p
                      , y = p + 1
                      , E = p + 2;
                    i = wr(this, a, e, n, l, h, u, T, y, E),
                    i && (i.faceIndex = Math.floor(p / 3),
                    t.push(i))
                }
            }
    }
}
function nu(r, e, t, n, i, s, a, o) {
    let c;
    if (e.side === wt ? c = n.intersectTriangle(a, s, i, !0, o) : c = n.intersectTriangle(i, s, a, e.side === pn, o),
    c === null)
        return null;
    br.copy(o),
    br.applyMatrix4(r.matrixWorld);
    const l = t.ray.origin.distanceTo(br);
    return l < t.near || l > t.far ? null : {
        distance: l,
        point: br.clone(),
        object: r
    }
}
function wr(r, e, t, n, i, s, a, o, c, l) {
    r.getVertexPosition(o, ci),
    r.getVertexPosition(c, li),
    r.getVertexPosition(l, hi);
    const h = nu(r, e, t, n, ci, li, hi, Ar);
    if (h) {
        i && (yr.fromBufferAttribute(i, o),
        Er.fromBufferAttribute(i, c),
        Tr.fromBufferAttribute(i, l),
        h.uv = Wt.getInterpolation(Ar, ci, li, hi, yr, Er, Tr, new Ue)),
        s && (yr.fromBufferAttribute(s, o),
        Er.fromBufferAttribute(s, c),
        Tr.fromBufferAttribute(s, l),
        h.uv1 = Wt.getInterpolation(Ar, ci, li, hi, yr, Er, Tr, new Ue)),
        a && (yo.fromBufferAttribute(a, o),
        Eo.fromBufferAttribute(a, c),
        To.fromBufferAttribute(a, l),
        h.normal = Wt.getInterpolation(Ar, ci, li, hi, yo, Eo, To, new P),
        h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1));
        const u = {
            a: o,
            b: c,
            c: l,
            normal: new P,
            materialIndex: 0
        };
        Wt.getNormal(ci, li, hi, u.normal),
        h.face = u
    }
    return h
}
class sr extends $t {
    constructor(e=1, t=1, n=1, i=1, s=1, a=1) {
        super(),
        this.type = "BoxGeometry",
        this.parameters = {
            width: e,
            height: t,
            depth: n,
            widthSegments: i,
            heightSegments: s,
            depthSegments: a
        };
        const o = this;
        i = Math.floor(i),
        s = Math.floor(s),
        a = Math.floor(a);
        const c = []
          , l = []
          , h = []
          , u = [];
        let d = 0
          , m = 0;
        g("z", "y", "x", -1, -1, n, t, e, a, s, 0),
        g("z", "y", "x", 1, -1, n, t, -e, a, s, 1),
        g("x", "z", "y", 1, 1, e, n, t, i, a, 2),
        g("x", "z", "y", 1, -1, e, n, -t, i, a, 3),
        g("x", "y", "z", 1, -1, e, t, n, i, s, 4),
        g("x", "y", "z", -1, -1, e, t, -n, i, s, 5),
        this.setIndex(c),
        this.setAttribute("position", new fn(l,3)),
        this.setAttribute("normal", new fn(h,3)),
        this.setAttribute("uv", new fn(u,2));
        function g(_, p, f, T, y, E, U, w, b, L, M) {
            const x = E / b
              , D = U / L
              , V = E / 2
              , R = U / 2
              , B = w / 2
              , G = b + 1
              , q = L + 1;
            let J = 0
              , H = 0;
            const Q = new P;
            for (let $ = 0; $ < q; $++) {
                const de = $ * D - R;
                for (let Me = 0; Me < G; Me++) {
                    const Ne = Me * x - V;
                    Q[_] = Ne * T,
                    Q[p] = de * y,
                    Q[f] = B,
                    l.push(Q.x, Q.y, Q.z),
                    Q[_] = 0,
                    Q[p] = 0,
                    Q[f] = w > 0 ? 1 : -1,
                    h.push(Q.x, Q.y, Q.z),
                    u.push(Me / b),
                    u.push(1 - $ / L),
                    J += 1
                }
            }
            for (let $ = 0; $ < L; $++)
                for (let de = 0; de < b; de++) {
                    const Me = d + de + G * $
                      , Ne = d + de + G * ($ + 1)
                      , W = d + (de + 1) + G * ($ + 1)
                      , ee = d + (de + 1) + G * $;
                    c.push(Me, Ne, ee),
                    c.push(Ne, W, ee),
                    H += 6
                }
            o.addGroup(m, H, M),
            m += H,
            d += J
        }
    }
    copy(e) {
        return super.copy(e),
        this.parameters = Object.assign({}, e.parameters),
        this
    }
    static fromJSON(e) {
        return new sr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)
    }
}
function Ci(r) {
    const e = {};
    for (const t in r) {
        e[t] = {};
        for (const n in r[t]) {
            const i = r[t][n];
            i && (i.isColor || i.isMatrix3 || i.isMatrix4 || i.isVector2 || i.isVector3 || i.isVector4 || i.isTexture || i.isQuaternion) ? i.isRenderTargetTexture ? (console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),
            e[t][n] = null) : e[t][n] = i.clone() : Array.isArray(i) ? e[t][n] = i.slice() : e[t][n] = i
        }
    }
    return e
}
function Mt(r) {
    const e = {};
    for (let t = 0; t < r.length; t++) {
        const n = Ci(r[t]);
        for (const i in n)
            e[i] = n[i]
    }
    return e
}
function iu(r) {
    const e = [];
    for (let t = 0; t < r.length; t++)
        e.push(r[t].clone());
    return e
}
function kc(r) {
    const e = r.getRenderTarget();
    return e === null ? r.outputColorSpace : e.isXRRenderTarget === !0 ? e.texture.colorSpace : We.workingColorSpace
}
const ru = {
    clone: Ci,
    merge: Mt
};
var su = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`
  , au = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Ln extends Yt {
    constructor(e) {
        super(),
        this.isShaderMaterial = !0,
        this.type = "ShaderMaterial",
        this.defines = {},
        this.uniforms = {},
        this.uniformsGroups = [],
        this.vertexShader = su,
        this.fragmentShader = au,
        this.linewidth = 1,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.fog = !1,
        this.lights = !1,
        this.clipping = !1,
        this.forceSinglePass = !0,
        this.extensions = {
            clipCullDistance: !1,
            multiDraw: !1
        },
        this.defaultAttributeValues = {
            color: [1, 1, 1],
            uv: [0, 0],
            uv1: [0, 0]
        },
        this.index0AttributeName = void 0,
        this.uniformsNeedUpdate = !1,
        this.glslVersion = null,
        e !== void 0 && this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.fragmentShader = e.fragmentShader,
        this.vertexShader = e.vertexShader,
        this.uniforms = Ci(e.uniforms),
        this.uniformsGroups = iu(e.uniformsGroups),
        this.defines = Object.assign({}, e.defines),
        this.wireframe = e.wireframe,
        this.wireframeLinewidth = e.wireframeLinewidth,
        this.fog = e.fog,
        this.lights = e.lights,
        this.clipping = e.clipping,
        this.extensions = Object.assign({}, e.extensions),
        this.glslVersion = e.glslVersion,
        this
    }
    toJSON(e) {
        const t = super.toJSON(e);
        t.glslVersion = this.glslVersion,
        t.uniforms = {};
        for (const i in this.uniforms) {
            const a = this.uniforms[i].value;
            a && a.isTexture ? t.uniforms[i] = {
                type: "t",
                value: a.toJSON(e).uuid
            } : a && a.isColor ? t.uniforms[i] = {
                type: "c",
                value: a.getHex()
            } : a && a.isVector2 ? t.uniforms[i] = {
                type: "v2",
                value: a.toArray()
            } : a && a.isVector3 ? t.uniforms[i] = {
                type: "v3",
                value: a.toArray()
            } : a && a.isVector4 ? t.uniforms[i] = {
                type: "v4",
                value: a.toArray()
            } : a && a.isMatrix3 ? t.uniforms[i] = {
                type: "m3",
                value: a.toArray()
            } : a && a.isMatrix4 ? t.uniforms[i] = {
                type: "m4",
                value: a.toArray()
            } : t.uniforms[i] = {
                value: a
            }
        }
        Object.keys(this.defines).length > 0 && (t.defines = this.defines),
        t.vertexShader = this.vertexShader,
        t.fragmentShader = this.fragmentShader,
        t.lights = this.lights,
        t.clipping = this.clipping;
        const n = {};
        for (const i in this.extensions)
            this.extensions[i] === !0 && (n[i] = !0);
        return Object.keys(n).length > 0 && (t.extensions = n),
        t
    }
}
class Vc extends et {
    constructor() {
        super(),
        this.isCamera = !0,
        this.type = "Camera",
        this.matrixWorldInverse = new we,
        this.projectionMatrix = new we,
        this.projectionMatrixInverse = new we,
        this.coordinateSystem = dn
    }
    copy(e, t) {
        return super.copy(e, t),
        this.matrixWorldInverse.copy(e.matrixWorldInverse),
        this.projectionMatrix.copy(e.projectionMatrix),
        this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
        this.coordinateSystem = e.coordinateSystem,
        this
    }
    getWorldDirection(e) {
        return super.getWorldDirection(e).negate()
    }
    updateMatrixWorld(e) {
        super.updateMatrixWorld(e),
        this.matrixWorldInverse.copy(this.matrixWorld).invert()
    }
    updateWorldMatrix(e, t) {
        super.updateWorldMatrix(e, t),
        this.matrixWorldInverse.copy(this.matrixWorld).invert()
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
const yn = new P
  , Ao = new Ue
  , bo = new Ue;
class yt extends Vc {
    constructor(e=50, t=1, n=.1, i=2e3) {
        super(),
        this.isPerspectiveCamera = !0,
        this.type = "PerspectiveCamera",
        this.fov = e,
        this.zoom = 1,
        this.near = n,
        this.far = i,
        this.focus = 10,
        this.aspect = t,
        this.view = null,
        this.filmGauge = 35,
        this.filmOffset = 0,
        this.updateProjectionMatrix()
    }
    copy(e, t) {
        return super.copy(e, t),
        this.fov = e.fov,
        this.zoom = e.zoom,
        this.near = e.near,
        this.far = e.far,
        this.focus = e.focus,
        this.aspect = e.aspect,
        this.view = e.view === null ? null : Object.assign({}, e.view),
        this.filmGauge = e.filmGauge,
        this.filmOffset = e.filmOffset,
        this
    }
    setFocalLength(e) {
        const t = .5 * this.getFilmHeight() / e;
        this.fov = Ri * 2 * Math.atan(t),
        this.updateProjectionMatrix()
    }
    getFocalLength() {
        const e = Math.tan(Zi * .5 * this.fov);
        return .5 * this.getFilmHeight() / e
    }
    getEffectiveFOV() {
        return Ri * 2 * Math.atan(Math.tan(Zi * .5 * this.fov) / this.zoom)
    }
    getFilmWidth() {
        return this.filmGauge * Math.min(this.aspect, 1)
    }
    getFilmHeight() {
        return this.filmGauge / Math.max(this.aspect, 1)
    }
    getViewBounds(e, t, n) {
        yn.set(-1, -1, .5).applyMatrix4(this.projectionMatrixInverse),
        t.set(yn.x, yn.y).multiplyScalar(-e / yn.z),
        yn.set(1, 1, .5).applyMatrix4(this.projectionMatrixInverse),
        n.set(yn.x, yn.y).multiplyScalar(-e / yn.z)
    }
    getViewSize(e, t) {
        return this.getViewBounds(e, Ao, bo),
        t.subVectors(bo, Ao)
    }
    setViewOffset(e, t, n, i, s, a) {
        this.aspect = e / t,
        this.view === null && (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
        }),
        this.view.enabled = !0,
        this.view.fullWidth = e,
        this.view.fullHeight = t,
        this.view.offsetX = n,
        this.view.offsetY = i,
        this.view.width = s,
        this.view.height = a,
        this.updateProjectionMatrix()
    }
    clearViewOffset() {
        this.view !== null && (this.view.enabled = !1),
        this.updateProjectionMatrix()
    }
    updateProjectionMatrix() {
        const e = this.near;
        let t = e * Math.tan(Zi * .5 * this.fov) / this.zoom
          , n = 2 * t
          , i = this.aspect * n
          , s = -.5 * i;
        const a = this.view;
        if (this.view !== null && this.view.enabled) {
            const c = a.fullWidth
              , l = a.fullHeight;
            s += a.offsetX * i / c,
            t -= a.offsetY * n / l,
            i *= a.width / c,
            n *= a.height / l
        }
        const o = this.filmOffset;
        o !== 0 && (s += e * o / this.getFilmWidth()),
        this.projectionMatrix.makePerspective(s, s + i, t, t - n, e, this.far, this.coordinateSystem),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return t.object.fov = this.fov,
        t.object.zoom = this.zoom,
        t.object.near = this.near,
        t.object.far = this.far,
        t.object.focus = this.focus,
        t.object.aspect = this.aspect,
        this.view !== null && (t.object.view = Object.assign({}, this.view)),
        t.object.filmGauge = this.filmGauge,
        t.object.filmOffset = this.filmOffset,
        t
    }
}
const ui = -90
  , di = 1;
class ou extends et {
    constructor(e, t, n) {
        super(),
        this.type = "CubeCamera",
        this.renderTarget = n,
        this.coordinateSystem = null,
        this.activeMipmapLevel = 0;
        const i = new yt(ui,di,e,t);
        i.layers = this.layers,
        this.add(i);
        const s = new yt(ui,di,e,t);
        s.layers = this.layers,
        this.add(s);
        const a = new yt(ui,di,e,t);
        a.layers = this.layers,
        this.add(a);
        const o = new yt(ui,di,e,t);
        o.layers = this.layers,
        this.add(o);
        const c = new yt(ui,di,e,t);
        c.layers = this.layers,
        this.add(c);
        const l = new yt(ui,di,e,t);
        l.layers = this.layers,
        this.add(l)
    }
    updateCoordinateSystem() {
        const e = this.coordinateSystem
          , t = this.children.concat()
          , [n,i,s,a,o,c] = t;
        for (const l of t)
            this.remove(l);
        if (e === dn)
            n.up.set(0, 1, 0),
            n.lookAt(1, 0, 0),
            i.up.set(0, 1, 0),
            i.lookAt(-1, 0, 0),
            s.up.set(0, 0, -1),
            s.lookAt(0, 1, 0),
            a.up.set(0, 0, 1),
            a.lookAt(0, -1, 0),
            o.up.set(0, 1, 0),
            o.lookAt(0, 0, 1),
            c.up.set(0, 1, 0),
            c.lookAt(0, 0, -1);
        else if (e === qr)
            n.up.set(0, -1, 0),
            n.lookAt(-1, 0, 0),
            i.up.set(0, -1, 0),
            i.lookAt(1, 0, 0),
            s.up.set(0, 0, 1),
            s.lookAt(0, 1, 0),
            a.up.set(0, 0, -1),
            a.lookAt(0, -1, 0),
            o.up.set(0, -1, 0),
            o.lookAt(0, 0, 1),
            c.up.set(0, -1, 0),
            c.lookAt(0, 0, -1);
        else
            throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " + e);
        for (const l of t)
            this.add(l),
            l.updateMatrixWorld()
    }
    update(e, t) {
        this.parent === null && this.updateMatrixWorld();
        const {renderTarget: n, activeMipmapLevel: i} = this;
        this.coordinateSystem !== e.coordinateSystem && (this.coordinateSystem = e.coordinateSystem,
        this.updateCoordinateSystem());
        const [s,a,o,c,l,h] = this.children
          , u = e.getRenderTarget()
          , d = e.getActiveCubeFace()
          , m = e.getActiveMipmapLevel()
          , g = e.xr.enabled;
        e.xr.enabled = !1;
        const _ = n.texture.generateMipmaps;
        n.texture.generateMipmaps = !1,
        e.setRenderTarget(n, 0, i),
        e.render(t, s),
        e.setRenderTarget(n, 1, i),
        e.render(t, a),
        e.setRenderTarget(n, 2, i),
        e.render(t, o),
        e.setRenderTarget(n, 3, i),
        e.render(t, c),
        e.setRenderTarget(n, 4, i),
        e.render(t, l),
        n.texture.generateMipmaps = _,
        e.setRenderTarget(n, 5, i),
        e.render(t, h),
        e.setRenderTarget(u, d, m),
        e.xr.enabled = g,
        n.texture.needsPMREMUpdate = !0
    }
}
class Gc extends ht {
    constructor(e, t, n, i, s, a, o, c, l, h) {
        e = e !== void 0 ? e : [],
        t = t !== void 0 ? t : Ei,
        super(e, t, n, i, s, a, o, c, l, h),
        this.isCubeTexture = !0,
        this.flipY = !1
    }
    get images() {
        return this.image
    }
    set images(e) {
        this.image = e
    }
}
class cu extends Yn {
    constructor(e=1, t={}) {
        super(e, e, t),
        this.isWebGLCubeRenderTarget = !0;
        const n = {
            width: e,
            height: e,
            depth: 1
        }
          , i = [n, n, n, n, n, n];
        this.texture = new Gc(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),
        this.texture.isRenderTargetTexture = !0,
        this.texture.generateMipmaps = t.generateMipmaps !== void 0 ? t.generateMipmaps : !1,
        this.texture.minFilter = t.minFilter !== void 0 ? t.minFilter : lt
    }
    fromEquirectangularTexture(e, t) {
        this.texture.type = t.type,
        this.texture.colorSpace = t.colorSpace,
        this.texture.generateMipmaps = t.generateMipmaps,
        this.texture.minFilter = t.minFilter,
        this.texture.magFilter = t.magFilter;
        const n = {
            uniforms: {
                tEquirect: {
                    value: null
                }
            },
            vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
            fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`
        }
          , i = new sr(5,5,5)
          , s = new Ln({
            name: "CubemapFromEquirect",
            uniforms: Ci(n.uniforms),
            vertexShader: n.vertexShader,
            fragmentShader: n.fragmentShader,
            side: wt,
            blending: wn
        });
        s.uniforms.tEquirect.value = t;
        const a = new At(i,s)
          , o = t.minFilter;
        return t.minFilter === qt && (t.minFilter = lt),
        new ou(1,10,this).update(e, a),
        t.minFilter = o,
        a.geometry.dispose(),
        a.material.dispose(),
        this
    }
    clear(e, t, n, i) {
        const s = e.getRenderTarget();
        for (let a = 0; a < 6; a++)
            e.setRenderTarget(this, a),
            e.clear(t, n, i);
        e.setRenderTarget(s)
    }
}
const ws = new P
  , lu = new P
  , hu = new be;
class kn {
    constructor(e=new P(1,0,0), t=0) {
        this.isPlane = !0,
        this.normal = e,
        this.constant = t
    }
    set(e, t) {
        return this.normal.copy(e),
        this.constant = t,
        this
    }
    setComponents(e, t, n, i) {
        return this.normal.set(e, t, n),
        this.constant = i,
        this
    }
    setFromNormalAndCoplanarPoint(e, t) {
        return this.normal.copy(e),
        this.constant = -t.dot(this.normal),
        this
    }
    setFromCoplanarPoints(e, t, n) {
        const i = ws.subVectors(n, t).cross(lu.subVectors(e, t)).normalize();
        return this.setFromNormalAndCoplanarPoint(i, e),
        this
    }
    copy(e) {
        return this.normal.copy(e.normal),
        this.constant = e.constant,
        this
    }
    normalize() {
        const e = 1 / this.normal.length();
        return this.normal.multiplyScalar(e),
        this.constant *= e,
        this
    }
    negate() {
        return this.constant *= -1,
        this.normal.negate(),
        this
    }
    distanceToPoint(e) {
        return this.normal.dot(e) + this.constant
    }
    distanceToSphere(e) {
        return this.distanceToPoint(e.center) - e.radius
    }
    projectPoint(e, t) {
        return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e))
    }
    intersectLine(e, t) {
        const n = e.delta(ws)
          , i = this.normal.dot(n);
        if (i === 0)
            return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
        const s = -(e.start.dot(this.normal) + this.constant) / i;
        return s < 0 || s > 1 ? null : t.copy(e.start).addScaledVector(n, s)
    }
    intersectsLine(e) {
        const t = this.distanceToPoint(e.start)
          , n = this.distanceToPoint(e.end);
        return t < 0 && n > 0 || n < 0 && t > 0
    }
    intersectsBox(e) {
        return e.intersectsPlane(this)
    }
    intersectsSphere(e) {
        return e.intersectsPlane(this)
    }
    coplanarPoint(e) {
        return e.copy(this.normal).multiplyScalar(-this.constant)
    }
    applyMatrix4(e, t) {
        const n = t || hu.getNormalMatrix(e)
          , i = this.coplanarPoint(ws).applyMatrix4(e)
          , s = this.normal.applyMatrix3(n).normalize();
        return this.constant = -i.dot(s),
        this
    }
    translate(e) {
        return this.constant -= e.dot(this.normal),
        this
    }
    equals(e) {
        return e.normal.equals(this.normal) && e.constant === this.constant
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
const Fn = new jt
  , Rr = new P;
class ra {
    constructor(e=new kn, t=new kn, n=new kn, i=new kn, s=new kn, a=new kn) {
        this.planes = [e, t, n, i, s, a]
    }
    set(e, t, n, i, s, a) {
        const o = this.planes;
        return o[0].copy(e),
        o[1].copy(t),
        o[2].copy(n),
        o[3].copy(i),
        o[4].copy(s),
        o[5].copy(a),
        this
    }
    copy(e) {
        const t = this.planes;
        for (let n = 0; n < 6; n++)
            t[n].copy(e.planes[n]);
        return this
    }
    setFromProjectionMatrix(e, t=dn) {
        const n = this.planes
          , i = e.elements
          , s = i[0]
          , a = i[1]
          , o = i[2]
          , c = i[3]
          , l = i[4]
          , h = i[5]
          , u = i[6]
          , d = i[7]
          , m = i[8]
          , g = i[9]
          , _ = i[10]
          , p = i[11]
          , f = i[12]
          , T = i[13]
          , y = i[14]
          , E = i[15];
        if (n[0].setComponents(c - s, d - l, p - m, E - f).normalize(),
        n[1].setComponents(c + s, d + l, p + m, E + f).normalize(),
        n[2].setComponents(c + a, d + h, p + g, E + T).normalize(),
        n[3].setComponents(c - a, d - h, p - g, E - T).normalize(),
        n[4].setComponents(c - o, d - u, p - _, E - y).normalize(),
        t === dn)
            n[5].setComponents(c + o, d + u, p + _, E + y).normalize();
        else if (t === qr)
            n[5].setComponents(o, u, _, y).normalize();
        else
            throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " + t);
        return this
    }
    intersectsObject(e) {
        if (e.boundingSphere !== void 0)
            e.boundingSphere === null && e.computeBoundingSphere(),
            Fn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);
        else {
            const t = e.geometry;
            t.boundingSphere === null && t.computeBoundingSphere(),
            Fn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)
        }
        return this.intersectsSphere(Fn)
    }
    intersectsSprite(e) {
        return Fn.center.set(0, 0, 0),
        Fn.radius = .7071067811865476,
        Fn.applyMatrix4(e.matrixWorld),
        this.intersectsSphere(Fn)
    }
    intersectsSphere(e) {
        const t = this.planes
          , n = e.center
          , i = -e.radius;
        for (let s = 0; s < 6; s++)
            if (t[s].distanceToPoint(n) < i)
                return !1;
        return !0
    }
    intersectsBox(e) {
        const t = this.planes;
        for (let n = 0; n < 6; n++) {
            const i = t[n];
            if (Rr.x = i.normal.x > 0 ? e.max.x : e.min.x,
            Rr.y = i.normal.y > 0 ? e.max.y : e.min.y,
            Rr.z = i.normal.z > 0 ? e.max.z : e.min.z,
            i.distanceToPoint(Rr) < 0)
                return !1
        }
        return !0
    }
    containsPoint(e) {
        const t = this.planes;
        for (let n = 0; n < 6; n++)
            if (t[n].distanceToPoint(e) < 0)
                return !1;
        return !0
    }
    clone() {
        return new this.constructor().copy(this)
    }
}
function Wc() {
    let r = null
      , e = !1
      , t = null
      , n = null;
    function i(s, a) {
        t(s, a),
        n = r.requestAnimationFrame(i)
    }
    return {
        start: function() {
            e !== !0 && t !== null && (n = r.requestAnimationFrame(i),
            e = !0)
        },
        stop: function() {
            r.cancelAnimationFrame(n),
            e = !1
        },
        setAnimationLoop: function(s) {
            t = s
        },
        setContext: function(s) {
            r = s
        }
    }
}
function uu(r) {
    const e = new WeakMap;
    function t(o, c) {
        const l = o.array
          , h = o.usage
          , u = l.byteLength
          , d = r.createBuffer();
        r.bindBuffer(c, d),
        r.bufferData(c, l, h),
        o.onUploadCallback();
        let m;
        if (l instanceof Float32Array)
            m = r.FLOAT;
        else if (l instanceof Uint16Array)
            o.isFloat16BufferAttribute ? m = r.HALF_FLOAT : m = r.UNSIGNED_SHORT;
        else if (l instanceof Int16Array)
            m = r.SHORT;
        else if (l instanceof Uint32Array)
            m = r.UNSIGNED_INT;
        else if (l instanceof Int32Array)
            m = r.INT;
        else if (l instanceof Int8Array)
            m = r.BYTE;
        else if (l instanceof Uint8Array)
            m = r.UNSIGNED_BYTE;
        else if (l instanceof Uint8ClampedArray)
            m = r.UNSIGNED_BYTE;
        else
            throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: " + l);
        return {
            buffer: d,
            type: m,
            bytesPerElement: l.BYTES_PER_ELEMENT,
            version: o.version,
            size: u
        }
    }
    function n(o, c, l) {
        const h = c.array
          , u = c._updateRange
          , d = c.updateRanges;
        if (r.bindBuffer(l, o),
        u.count === -1 && d.length === 0 && r.bufferSubData(l, 0, h),
        d.length !== 0) {
            for (let m = 0, g = d.length; m < g; m++) {
                const _ = d[m];
                r.bufferSubData(l, _.start * h.BYTES_PER_ELEMENT, h, _.start, _.count)
            }
            c.clearUpdateRanges()
        }
        u.count !== -1 && (r.bufferSubData(l, u.offset * h.BYTES_PER_ELEMENT, h, u.offset, u.count),
        u.count = -1),
        c.onUploadCallback()
    }
    function i(o) {
        return o.isInterleavedBufferAttribute && (o = o.data),
        e.get(o)
    }
    function s(o) {
        o.isInterleavedBufferAttribute && (o = o.data);
        const c = e.get(o);
        c && (r.deleteBuffer(c.buffer),
        e.delete(o))
    }
    function a(o, c) {
        if (o.isGLBufferAttribute) {
            const h = e.get(o);
            (!h || h.version < o.version) && e.set(o, {
                buffer: o.buffer,
                type: o.type,
                bytesPerElement: o.elementSize,
                version: o.version
            });
            return
        }
        o.isInterleavedBufferAttribute && (o = o.data);
        const l = e.get(o);
        if (l === void 0)
            e.set(o, t(o, c));
        else if (l.version < o.version) {
            if (l.size !== o.array.byteLength)
                throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");
            n(l.buffer, o, c),
            l.version = o.version
        }
    }
    return {
        get: i,
        remove: s,
        update: a
    }
}
class Jr extends $t {
    constructor(e=1, t=1, n=1, i=1) {
        super(),
        this.type = "PlaneGeometry",
        this.parameters = {
            width: e,
            height: t,
            widthSegments: n,
            heightSegments: i
        };
        const s = e / 2
          , a = t / 2
          , o = Math.floor(n)
          , c = Math.floor(i)
          , l = o + 1
          , h = c + 1
          , u = e / o
          , d = t / c
          , m = []
          , g = []
          , _ = []
          , p = [];
        for (let f = 0; f < h; f++) {
            const T = f * d - a;
            for (let y = 0; y < l; y++) {
                const E = y * u - s;
                g.push(E, -T, 0),
                _.push(0, 0, 1),
                p.push(y / o),
                p.push(1 - f / c)
            }
        }
        for (let f = 0; f < c; f++)
            for (let T = 0; T < o; T++) {
                const y = T + l * f
                  , E = T + l * (f + 1)
                  , U = T + 1 + l * (f + 1)
                  , w = T + 1 + l * f;
                m.push(y, E, w),
                m.push(E, U, w)
            }
        this.setIndex(m),
        this.setAttribute("position", new fn(g,3)),
        this.setAttribute("normal", new fn(_,3)),
        this.setAttribute("uv", new fn(p,2))
    }
    copy(e) {
        return super.copy(e),
        this.parameters = Object.assign({}, e.parameters),
        this
    }
    static fromJSON(e) {
        return new Jr(e.width,e.height,e.widthSegments,e.heightSegments)
    }
}
var du = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`
  , fu = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`
  , pu = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`
  , mu = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`
  , gu = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`
  , _u = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`
  , xu = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`
  , vu = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`
  , Mu = `#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`
  , Su = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`
  , yu = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`
  , Eu = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`
  , Tu = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`
  , Au = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`
  , bu = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`
  , wu = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`
  , Ru = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`
  , Cu = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`
  , Lu = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`
  , Pu = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`
  , Iu = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`
  , Du = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`
  , Uu = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`
  , Nu = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`
  , Fu = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`
  , Ou = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`
  , Bu = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`
  , zu = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`
  , Hu = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`
  , ku = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`
  , Vu = "gl_FragColor = linearToOutputTexel( gl_FragColor );"
  , Gu = `
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`
  , Wu = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`
  , Xu = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`
  , qu = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`
  , Yu = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`
  , Ku = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`
  , ju = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`
  , $u = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`
  , Zu = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`
  , Ju = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`
  , Qu = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`
  , ed = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`
  , td = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`
  , nd = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`
  , id = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`
  , rd = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`
  , sd = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`
  , ad = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`
  , od = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`
  , cd = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`
  , ld = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`
  , hd = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`
  , ud = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`
  , dd = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`
  , fd = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`
  , pd = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`
  , md = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`
  , gd = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`
  , _d = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`
  , xd = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`
  , vd = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`
  , Md = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`
  , Sd = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`
  , yd = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`
  , Ed = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`
  , Td = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[MORPHTARGETS_COUNT];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`
  , Ad = `#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`
  , bd = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`
  , wd = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
	#endif
	#ifdef MORPHTARGETS_TEXTURE
		#ifndef USE_INSTANCING_MORPH
			uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		#endif
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`
  , Rd = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`
  , Cd = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`
  , Ld = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`
  , Pd = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`
  , Id = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`
  , Dd = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`
  , Ud = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`
  , Nd = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`
  , Fd = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`
  , Od = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`
  , Bd = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`
  , zd = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`
  , Hd = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`
  , kd = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`
  , Vd = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`
  , Gd = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`
  , Wd = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`
  , Xd = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`
  , qd = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`
  , Yd = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`
  , Kd = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`
  , jd = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`
  , $d = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`
  , Zd = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`
  , Jd = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`
  , Qd = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`
  , ef = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`
  , tf = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`
  , nf = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`
  , rf = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`
  , sf = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`
  , af = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`
  , of = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`
  , cf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`
  , lf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`
  , hf = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`
  , uf = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const df = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`
  , ff = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`
  , pf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`
  , mf = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`
  , gf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`
  , _f = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`
  , xf = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`
  , vf = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`
  , Mf = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`
  , Sf = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`
  , yf = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`
  , Ef = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`
  , Tf = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`
  , Af = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`
  , bf = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`
  , wf = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , Rf = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`
  , Cf = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , Lf = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`
  , Pf = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , If = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`
  , Df = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`
  , Uf = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`
  , Nf = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , Ff = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`
  , Of = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , Bf = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`
  , zf = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`
  , Hf = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`
  , kf = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`
  , Vf = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`
  , Gf = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`
  , Wf = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`
  , Xf = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`
  , Ae = {
    alphahash_fragment: du,
    alphahash_pars_fragment: fu,
    alphamap_fragment: pu,
    alphamap_pars_fragment: mu,
    alphatest_fragment: gu,
    alphatest_pars_fragment: _u,
    aomap_fragment: xu,
    aomap_pars_fragment: vu,
    batching_pars_vertex: Mu,
    batching_vertex: Su,
    begin_vertex: yu,
    beginnormal_vertex: Eu,
    bsdfs: Tu,
    iridescence_fragment: Au,
    bumpmap_pars_fragment: bu,
    clipping_planes_fragment: wu,
    clipping_planes_pars_fragment: Ru,
    clipping_planes_pars_vertex: Cu,
    clipping_planes_vertex: Lu,
    color_fragment: Pu,
    color_pars_fragment: Iu,
    color_pars_vertex: Du,
    color_vertex: Uu,
    common: Nu,
    cube_uv_reflection_fragment: Fu,
    defaultnormal_vertex: Ou,
    displacementmap_pars_vertex: Bu,
    displacementmap_vertex: zu,
    emissivemap_fragment: Hu,
    emissivemap_pars_fragment: ku,
    colorspace_fragment: Vu,
    colorspace_pars_fragment: Gu,
    envmap_fragment: Wu,
    envmap_common_pars_fragment: Xu,
    envmap_pars_fragment: qu,
    envmap_pars_vertex: Yu,
    envmap_physical_pars_fragment: rd,
    envmap_vertex: Ku,
    fog_vertex: ju,
    fog_pars_vertex: $u,
    fog_fragment: Zu,
    fog_pars_fragment: Ju,
    gradientmap_pars_fragment: Qu,
    lightmap_pars_fragment: ed,
    lights_lambert_fragment: td,
    lights_lambert_pars_fragment: nd,
    lights_pars_begin: id,
    lights_toon_fragment: sd,
    lights_toon_pars_fragment: ad,
    lights_phong_fragment: od,
    lights_phong_pars_fragment: cd,
    lights_physical_fragment: ld,
    lights_physical_pars_fragment: hd,
    lights_fragment_begin: ud,
    lights_fragment_maps: dd,
    lights_fragment_end: fd,
    logdepthbuf_fragment: pd,
    logdepthbuf_pars_fragment: md,
    logdepthbuf_pars_vertex: gd,
    logdepthbuf_vertex: _d,
    map_fragment: xd,
    map_pars_fragment: vd,
    map_particle_fragment: Md,
    map_particle_pars_fragment: Sd,
    metalnessmap_fragment: yd,
    metalnessmap_pars_fragment: Ed,
    morphinstance_vertex: Td,
    morphcolor_vertex: Ad,
    morphnormal_vertex: bd,
    morphtarget_pars_vertex: wd,
    morphtarget_vertex: Rd,
    normal_fragment_begin: Cd,
    normal_fragment_maps: Ld,
    normal_pars_fragment: Pd,
    normal_pars_vertex: Id,
    normal_vertex: Dd,
    normalmap_pars_fragment: Ud,
    clearcoat_normal_fragment_begin: Nd,
    clearcoat_normal_fragment_maps: Fd,
    clearcoat_pars_fragment: Od,
    iridescence_pars_fragment: Bd,
    opaque_fragment: zd,
    packing: Hd,
    premultiplied_alpha_fragment: kd,
    project_vertex: Vd,
    dithering_fragment: Gd,
    dithering_pars_fragment: Wd,
    roughnessmap_fragment: Xd,
    roughnessmap_pars_fragment: qd,
    shadowmap_pars_fragment: Yd,
    shadowmap_pars_vertex: Kd,
    shadowmap_vertex: jd,
    shadowmask_pars_fragment: $d,
    skinbase_vertex: Zd,
    skinning_pars_vertex: Jd,
    skinning_vertex: Qd,
    skinnormal_vertex: ef,
    specularmap_fragment: tf,
    specularmap_pars_fragment: nf,
    tonemapping_fragment: rf,
    tonemapping_pars_fragment: sf,
    transmission_fragment: af,
    transmission_pars_fragment: of,
    uv_pars_fragment: cf,
    uv_pars_vertex: lf,
    uv_vertex: hf,
    worldpos_vertex: uf,
    background_vert: df,
    background_frag: ff,
    backgroundCube_vert: pf,
    backgroundCube_frag: mf,
    cube_vert: gf,
    cube_frag: _f,
    depth_vert: xf,
    depth_frag: vf,
    distanceRGBA_vert: Mf,
    distanceRGBA_frag: Sf,
    equirect_vert: yf,
    equirect_frag: Ef,
    linedashed_vert: Tf,
    linedashed_frag: Af,
    meshbasic_vert: bf,
    meshbasic_frag: wf,
    meshlambert_vert: Rf,
    meshlambert_frag: Cf,
    meshmatcap_vert: Lf,
    meshmatcap_frag: Pf,
    meshnormal_vert: If,
    meshnormal_frag: Df,
    meshphong_vert: Uf,
    meshphong_frag: Nf,
    meshphysical_vert: Ff,
    meshphysical_frag: Of,
    meshtoon_vert: Bf,
    meshtoon_frag: zf,
    points_vert: Hf,
    points_frag: kf,
    shadow_vert: Vf,
    shadow_frag: Gf,
    sprite_vert: Wf,
    sprite_frag: Xf
}
  , ne = {
    common: {
        diffuse: {
            value: new Se(16777215)
        },
        opacity: {
            value: 1
        },
        map: {
            value: null
        },
        mapTransform: {
            value: new be
        },
        alphaMap: {
            value: null
        },
        alphaMapTransform: {
            value: new be
        },
        alphaTest: {
            value: 0
        }
    },
    specularmap: {
        specularMap: {
            value: null
        },
        specularMapTransform: {
            value: new be
        }
    },
    envmap: {
        envMap: {
            value: null
        },
        envMapRotation: {
            value: new be
        },
        flipEnvMap: {
            value: -1
        },
        reflectivity: {
            value: 1
        },
        ior: {
            value: 1.5
        },
        refractionRatio: {
            value: .98
        }
    },
    aomap: {
        aoMap: {
            value: null
        },
        aoMapIntensity: {
            value: 1
        },
        aoMapTransform: {
            value: new be
        }
    },
    lightmap: {
        lightMap: {
            value: null
        },
        lightMapIntensity: {
            value: 1
        },
        lightMapTransform: {
            value: new be
        }
    },
    bumpmap: {
        bumpMap: {
            value: null
        },
        bumpMapTransform: {
            value: new be
        },
        bumpScale: {
            value: 1
        }
    },
    normalmap: {
        normalMap: {
            value: null
        },
        normalMapTransform: {
            value: new be
        },
        normalScale: {
            value: new Ue(1,1)
        }
    },
    displacementmap: {
        displacementMap: {
            value: null
        },
        displacementMapTransform: {
            value: new be
        },
        displacementScale: {
            value: 1
        },
        displacementBias: {
            value: 0
        }
    },
    emissivemap: {
        emissiveMap: {
            value: null
        },
        emissiveMapTransform: {
            value: new be
        }
    },
    metalnessmap: {
        metalnessMap: {
            value: null
        },
        metalnessMapTransform: {
            value: new be
        }
    },
    roughnessmap: {
        roughnessMap: {
            value: null
        },
        roughnessMapTransform: {
            value: new be
        }
    },
    gradientmap: {
        gradientMap: {
            value: null
        }
    },
    fog: {
        fogDensity: {
            value: 25e-5
        },
        fogNear: {
            value: 1
        },
        fogFar: {
            value: 2e3
        },
        fogColor: {
            value: new Se(16777215)
        }
    },
    lights: {
        ambientLightColor: {
            value: []
        },
        lightProbe: {
            value: []
        },
        directionalLights: {
            value: [],
            properties: {
                direction: {},
                color: {}
            }
        },
        directionalLightShadows: {
            value: [],
            properties: {
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {}
            }
        },
        directionalShadowMap: {
            value: []
        },
        directionalShadowMatrix: {
            value: []
        },
        spotLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                direction: {},
                distance: {},
                coneCos: {},
                penumbraCos: {},
                decay: {}
            }
        },
        spotLightShadows: {
            value: [],
            properties: {
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {}
            }
        },
        spotLightMap: {
            value: []
        },
        spotShadowMap: {
            value: []
        },
        spotLightMatrix: {
            value: []
        },
        pointLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                decay: {},
                distance: {}
            }
        },
        pointLightShadows: {
            value: [],
            properties: {
                shadowBias: {},
                shadowNormalBias: {},
                shadowRadius: {},
                shadowMapSize: {},
                shadowCameraNear: {},
                shadowCameraFar: {}
            }
        },
        pointShadowMap: {
            value: []
        },
        pointShadowMatrix: {
            value: []
        },
        hemisphereLights: {
            value: [],
            properties: {
                direction: {},
                skyColor: {},
                groundColor: {}
            }
        },
        rectAreaLights: {
            value: [],
            properties: {
                color: {},
                position: {},
                width: {},
                height: {}
            }
        },
        ltc_1: {
            value: null
        },
        ltc_2: {
            value: null
        }
    },
    points: {
        diffuse: {
            value: new Se(16777215)
        },
        opacity: {
            value: 1
        },
        size: {
            value: 1
        },
        scale: {
            value: 1
        },
        map: {
            value: null
        },
        alphaMap: {
            value: null
        },
        alphaMapTransform: {
            value: new be
        },
        alphaTest: {
            value: 0
        },
        uvTransform: {
            value: new be
        }
    },
    sprite: {
        diffuse: {
            value: new Se(16777215)
        },
        opacity: {
            value: 1
        },
        center: {
            value: new Ue(.5,.5)
        },
        rotation: {
            value: 0
        },
        map: {
            value: null
        },
        mapTransform: {
            value: new be
        },
        alphaMap: {
            value: null
        },
        alphaMapTransform: {
            value: new be
        },
        alphaTest: {
            value: 0
        }
    }
}
  , Vt = {
    basic: {
        uniforms: Mt([ne.common, ne.specularmap, ne.envmap, ne.aomap, ne.lightmap, ne.fog]),
        vertexShader: Ae.meshbasic_vert,
        fragmentShader: Ae.meshbasic_frag
    },
    lambert: {
        uniforms: Mt([ne.common, ne.specularmap, ne.envmap, ne.aomap, ne.lightmap, ne.emissivemap, ne.bumpmap, ne.normalmap, ne.displacementmap, ne.fog, ne.lights, {
            emissive: {
                value: new Se(0)
            }
        }]),
        vertexShader: Ae.meshlambert_vert,
        fragmentShader: Ae.meshlambert_frag
    },
    phong: {
        uniforms: Mt([ne.common, ne.specularmap, ne.envmap, ne.aomap, ne.lightmap, ne.emissivemap, ne.bumpmap, ne.normalmap, ne.displacementmap, ne.fog, ne.lights, {
            emissive: {
                value: new Se(0)
            },
            specular: {
                value: new Se(1118481)
            },
            shininess: {
                value: 30
            }
        }]),
        vertexShader: Ae.meshphong_vert,
        fragmentShader: Ae.meshphong_frag
    },
    standard: {
        uniforms: Mt([ne.common, ne.envmap, ne.aomap, ne.lightmap, ne.emissivemap, ne.bumpmap, ne.normalmap, ne.displacementmap, ne.roughnessmap, ne.metalnessmap, ne.fog, ne.lights, {
            emissive: {
                value: new Se(0)
            },
            roughness: {
                value: 1
            },
            metalness: {
                value: 0
            },
            envMapIntensity: {
                value: 1
            }
        }]),
        vertexShader: Ae.meshphysical_vert,
        fragmentShader: Ae.meshphysical_frag
    },
    toon: {
        uniforms: Mt([ne.common, ne.aomap, ne.lightmap, ne.emissivemap, ne.bumpmap, ne.normalmap, ne.displacementmap, ne.gradientmap, ne.fog, ne.lights, {
            emissive: {
                value: new Se(0)
            }
        }]),
        vertexShader: Ae.meshtoon_vert,
        fragmentShader: Ae.meshtoon_frag
    },
    matcap: {
        uniforms: Mt([ne.common, ne.bumpmap, ne.normalmap, ne.displacementmap, ne.fog, {
            matcap: {
                value: null
            }
        }]),
        vertexShader: Ae.meshmatcap_vert,
        fragmentShader: Ae.meshmatcap_frag
    },
    points: {
        uniforms: Mt([ne.points, ne.fog]),
        vertexShader: Ae.points_vert,
        fragmentShader: Ae.points_frag
    },
    dashed: {
        uniforms: Mt([ne.common, ne.fog, {
            scale: {
                value: 1
            },
            dashSize: {
                value: 1
            },
            totalSize: {
                value: 2
            }
        }]),
        vertexShader: Ae.linedashed_vert,
        fragmentShader: Ae.linedashed_frag
    },
    depth: {
        uniforms: Mt([ne.common, ne.displacementmap]),
        vertexShader: Ae.depth_vert,
        fragmentShader: Ae.depth_frag
    },
    normal: {
        uniforms: Mt([ne.common, ne.bumpmap, ne.normalmap, ne.displacementmap, {
            opacity: {
                value: 1
            }
        }]),
        vertexShader: Ae.meshnormal_vert,
        fragmentShader: Ae.meshnormal_frag
    },
    sprite: {
        uniforms: Mt([ne.sprite, ne.fog]),
        vertexShader: Ae.sprite_vert,
        fragmentShader: Ae.sprite_frag
    },
    background: {
        uniforms: {
            uvTransform: {
                value: new be
            },
            t2D: {
                value: null
            },
            backgroundIntensity: {
                value: 1
            }
        },
        vertexShader: Ae.background_vert,
        fragmentShader: Ae.background_frag
    },
    backgroundCube: {
        uniforms: {
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            },
            backgroundBlurriness: {
                value: 0
            },
            backgroundIntensity: {
                value: 1
            },
            backgroundRotation: {
                value: new be
            }
        },
        vertexShader: Ae.backgroundCube_vert,
        fragmentShader: Ae.backgroundCube_frag
    },
    cube: {
        uniforms: {
            tCube: {
                value: null
            },
            tFlip: {
                value: -1
            },
            opacity: {
                value: 1
            }
        },
        vertexShader: Ae.cube_vert,
        fragmentShader: Ae.cube_frag
    },
    equirect: {
        uniforms: {
            tEquirect: {
                value: null
            }
        },
        vertexShader: Ae.equirect_vert,
        fragmentShader: Ae.equirect_frag
    },
    distanceRGBA: {
        uniforms: Mt([ne.common, ne.displacementmap, {
            referencePosition: {
                value: new P
            },
            nearDistance: {
                value: 1
            },
            farDistance: {
                value: 1e3
            }
        }]),
        vertexShader: Ae.distanceRGBA_vert,
        fragmentShader: Ae.distanceRGBA_frag
    },
    shadow: {
        uniforms: Mt([ne.lights, ne.fog, {
            color: {
                value: new Se(0)
            },
            opacity: {
                value: 1
            }
        }]),
        vertexShader: Ae.shadow_vert,
        fragmentShader: Ae.shadow_frag
    }
};
Vt.physical = {
    uniforms: Mt([Vt.standard.uniforms, {
        clearcoat: {
            value: 0
        },
        clearcoatMap: {
            value: null
        },
        clearcoatMapTransform: {
            value: new be
        },
        clearcoatNormalMap: {
            value: null
        },
        clearcoatNormalMapTransform: {
            value: new be
        },
        clearcoatNormalScale: {
            value: new Ue(1,1)
        },
        clearcoatRoughness: {
            value: 0
        },
        clearcoatRoughnessMap: {
            value: null
        },
        clearcoatRoughnessMapTransform: {
            value: new be
        },
        dispersion: {
            value: 0
        },
        iridescence: {
            value: 0
        },
        iridescenceMap: {
            value: null
        },
        iridescenceMapTransform: {
            value: new be
        },
        iridescenceIOR: {
            value: 1.3
        },
        iridescenceThicknessMinimum: {
            value: 100
        },
        iridescenceThicknessMaximum: {
            value: 400
        },
        iridescenceThicknessMap: {
            value: null
        },
        iridescenceThicknessMapTransform: {
            value: new be
        },
        sheen: {
            value: 0
        },
        sheenColor: {
            value: new Se(0)
        },
        sheenColorMap: {
            value: null
        },
        sheenColorMapTransform: {
            value: new be
        },
        sheenRoughness: {
            value: 1
        },
        sheenRoughnessMap: {
            value: null
        },
        sheenRoughnessMapTransform: {
            value: new be
        },
        transmission: {
            value: 0
        },
        transmissionMap: {
            value: null
        },
        transmissionMapTransform: {
            value: new be
        },
        transmissionSamplerSize: {
            value: new Ue
        },
        transmissionSamplerMap: {
            value: null
        },
        thickness: {
            value: 0
        },
        thicknessMap: {
            value: null
        },
        thicknessMapTransform: {
            value: new be
        },
        attenuationDistance: {
            value: 0
        },
        attenuationColor: {
            value: new Se(0)
        },
        specularColor: {
            value: new Se(1,1,1)
        },
        specularColorMap: {
            value: null
        },
        specularColorMapTransform: {
            value: new be
        },
        specularIntensity: {
            value: 1
        },
        specularIntensityMap: {
            value: null
        },
        specularIntensityMapTransform: {
            value: new be
        },
        anisotropyVector: {
            value: new Ue
        },
        anisotropyMap: {
            value: null
        },
        anisotropyMapTransform: {
            value: new be
        }
    }]),
    vertexShader: Ae.meshphysical_vert,
    fragmentShader: Ae.meshphysical_frag
};
const Cr = {
    r: 0,
    b: 0,
    g: 0
}
  , On = new Kt
  , qf = new we;
function Yf(r, e, t, n, i, s, a) {
    const o = new Se(0);
    let c = s === !0 ? 0 : 1, l, h, u = null, d = 0, m = null;
    function g(T) {
        let y = T.isScene === !0 ? T.background : null;
        return y && y.isTexture && (y = (T.backgroundBlurriness > 0 ? t : e).get(y)),
        y
    }
    function _(T) {
        let y = !1;
        const E = g(T);
        E === null ? f(o, c) : E && E.isColor && (f(E, 1),
        y = !0);
        const U = r.xr.getEnvironmentBlendMode();
        U === "additive" ? n.buffers.color.setClear(0, 0, 0, 1, a) : U === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a),
        (r.autoClear || y) && r.clear(r.autoClearColor, r.autoClearDepth, r.autoClearStencil)
    }
    function p(T, y) {
        const E = g(y);
        E && (E.isCubeTexture || E.mapping === jr) ? (h === void 0 && (h = new At(new sr(1,1,1),new Ln({
            name: "BackgroundCubeMaterial",
            uniforms: Ci(Vt.backgroundCube.uniforms),
            vertexShader: Vt.backgroundCube.vertexShader,
            fragmentShader: Vt.backgroundCube.fragmentShader,
            side: wt,
            depthTest: !1,
            depthWrite: !1,
            fog: !1
        })),
        h.geometry.deleteAttribute("normal"),
        h.geometry.deleteAttribute("uv"),
        h.onBeforeRender = function(U, w, b) {
            this.matrixWorld.copyPosition(b.matrixWorld)
        }
        ,
        Object.defineProperty(h.material, "envMap", {
            get: function() {
                return this.uniforms.envMap.value
            }
        }),
        i.update(h)),
        On.copy(y.backgroundRotation),
        On.x *= -1,
        On.y *= -1,
        On.z *= -1,
        E.isCubeTexture && E.isRenderTargetTexture === !1 && (On.y *= -1,
        On.z *= -1),
        h.material.uniforms.envMap.value = E,
        h.material.uniforms.flipEnvMap.value = E.isCubeTexture && E.isRenderTargetTexture === !1 ? -1 : 1,
        h.material.uniforms.backgroundBlurriness.value = y.backgroundBlurriness,
        h.material.uniforms.backgroundIntensity.value = y.backgroundIntensity,
        h.material.uniforms.backgroundRotation.value.setFromMatrix4(qf.makeRotationFromEuler(On)),
        h.material.toneMapped = We.getTransfer(E.colorSpace) !== Je,
        (u !== E || d !== E.version || m !== r.toneMapping) && (h.material.needsUpdate = !0,
        u = E,
        d = E.version,
        m = r.toneMapping),
        h.layers.enableAll(),
        T.unshift(h, h.geometry, h.material, 0, 0, null)) : E && E.isTexture && (l === void 0 && (l = new At(new Jr(2,2),new Ln({
            name: "BackgroundMaterial",
            uniforms: Ci(Vt.background.uniforms),
            vertexShader: Vt.background.vertexShader,
            fragmentShader: Vt.background.fragmentShader,
            side: pn,
            depthTest: !1,
            depthWrite: !1,
            fog: !1
        })),
        l.geometry.deleteAttribute("normal"),
        Object.defineProperty(l.material, "map", {
            get: function() {
                return this.uniforms.t2D.value
            }
        }),
        i.update(l)),
        l.material.uniforms.t2D.value = E,
        l.material.uniforms.backgroundIntensity.value = y.backgroundIntensity,
        l.material.toneMapped = We.getTransfer(E.colorSpace) !== Je,
        E.matrixAutoUpdate === !0 && E.updateMatrix(),
        l.material.uniforms.uvTransform.value.copy(E.matrix),
        (u !== E || d !== E.version || m !== r.toneMapping) && (l.material.needsUpdate = !0,
        u = E,
        d = E.version,
        m = r.toneMapping),
        l.layers.enableAll(),
        T.unshift(l, l.geometry, l.material, 0, 0, null))
    }
    function f(T, y) {
        T.getRGB(Cr, kc(r)),
        n.buffers.color.setClear(Cr.r, Cr.g, Cr.b, y, a)
    }
    return {
        getClearColor: function() {
            return o
        },
        setClearColor: function(T, y=1) {
            o.set(T),
            c = y,
            f(o, c)
        },
        getClearAlpha: function() {
            return c
        },
        setClearAlpha: function(T) {
            c = T,
            f(o, c)
        },
        render: _,
        addToRenderList: p
    }
}
function Kf(r, e) {
    const t = r.getParameter(r.MAX_VERTEX_ATTRIBS)
      , n = {}
      , i = d(null);
    let s = i
      , a = !1;
    function o(x, D, V, R, B) {
        let G = !1;
        const q = u(R, V, D);
        s !== q && (s = q,
        l(s.object)),
        G = m(x, R, V, B),
        G && g(x, R, V, B),
        B !== null && e.update(B, r.ELEMENT_ARRAY_BUFFER),
        (G || a) && (a = !1,
        E(x, D, V, R),
        B !== null && r.bindBuffer(r.ELEMENT_ARRAY_BUFFER, e.get(B).buffer))
    }
    function c() {
        return r.createVertexArray()
    }
    function l(x) {
        return r.bindVertexArray(x)
    }
    function h(x) {
        return r.deleteVertexArray(x)
    }
    function u(x, D, V) {
        const R = V.wireframe === !0;
        let B = n[x.id];
        B === void 0 && (B = {},
        n[x.id] = B);
        let G = B[D.id];
        G === void 0 && (G = {},
        B[D.id] = G);
        let q = G[R];
        return q === void 0 && (q = d(c()),
        G[R] = q),
        q
    }
    function d(x) {
        const D = []
          , V = []
          , R = [];
        for (let B = 0; B < t; B++)
            D[B] = 0,
            V[B] = 0,
            R[B] = 0;
        return {
            geometry: null,
            program: null,
            wireframe: !1,
            newAttributes: D,
            enabledAttributes: V,
            attributeDivisors: R,
            object: x,
            attributes: {},
            index: null
        }
    }
    function m(x, D, V, R) {
        const B = s.attributes
          , G = D.attributes;
        let q = 0;
        const J = V.getAttributes();
        for (const H in J)
            if (J[H].location >= 0) {
                const $ = B[H];
                let de = G[H];
                if (de === void 0 && (H === "instanceMatrix" && x.instanceMatrix && (de = x.instanceMatrix),
                H === "instanceColor" && x.instanceColor && (de = x.instanceColor)),
                $ === void 0 || $.attribute !== de || de && $.data !== de.data)
                    return !0;
                q++
            }
        return s.attributesNum !== q || s.index !== R
    }
    function g(x, D, V, R) {
        const B = {}
          , G = D.attributes;
        let q = 0;
        const J = V.getAttributes();
        for (const H in J)
            if (J[H].location >= 0) {
                let $ = G[H];
                $ === void 0 && (H === "instanceMatrix" && x.instanceMatrix && ($ = x.instanceMatrix),
                H === "instanceColor" && x.instanceColor && ($ = x.instanceColor));
                const de = {};
                de.attribute = $,
                $ && $.data && (de.data = $.data),
                B[H] = de,
                q++
            }
        s.attributes = B,
        s.attributesNum = q,
        s.index = R
    }
    function _() {
        const x = s.newAttributes;
        for (let D = 0, V = x.length; D < V; D++)
            x[D] = 0
    }
    function p(x) {
        f(x, 0)
    }
    function f(x, D) {
        const V = s.newAttributes
          , R = s.enabledAttributes
          , B = s.attributeDivisors;
        V[x] = 1,
        R[x] === 0 && (r.enableVertexAttribArray(x),
        R[x] = 1),
        B[x] !== D && (r.vertexAttribDivisor(x, D),
        B[x] = D)
    }
    function T() {
        const x = s.newAttributes
          , D = s.enabledAttributes;
        for (let V = 0, R = D.length; V < R; V++)
            D[V] !== x[V] && (r.disableVertexAttribArray(V),
            D[V] = 0)
    }
    function y(x, D, V, R, B, G, q) {
        q === !0 ? r.vertexAttribIPointer(x, D, V, B, G) : r.vertexAttribPointer(x, D, V, R, B, G)
    }
    function E(x, D, V, R) {
        _();
        const B = R.attributes
          , G = V.getAttributes()
          , q = D.defaultAttributeValues;
        for (const J in G) {
            const H = G[J];
            if (H.location >= 0) {
                let Q = B[J];
                if (Q === void 0 && (J === "instanceMatrix" && x.instanceMatrix && (Q = x.instanceMatrix),
                J === "instanceColor" && x.instanceColor && (Q = x.instanceColor)),
                Q !== void 0) {
                    const $ = Q.normalized
                      , de = Q.itemSize
                      , Me = e.get(Q);
                    if (Me === void 0)
                        continue;
                    const Ne = Me.buffer
                      , W = Me.type
                      , ee = Me.bytesPerElement
                      , he = W === r.INT || W === r.UNSIGNED_INT || Q.gpuType === Ec;
                    if (Q.isInterleavedBufferAttribute) {
                        const ie = Q.data
                          , Fe = ie.stride
                          , Oe = Q.offset;
                        if (ie.isInstancedInterleavedBuffer) {
                            for (let N = 0; N < H.locationSize; N++)
                                f(H.location + N, ie.meshPerAttribute);
                            x.isInstancedMesh !== !0 && R._maxInstanceCount === void 0 && (R._maxInstanceCount = ie.meshPerAttribute * ie.count)
                        } else
                            for (let N = 0; N < H.locationSize; N++)
                                p(H.location + N);
                        r.bindBuffer(r.ARRAY_BUFFER, Ne);
                        for (let N = 0; N < H.locationSize; N++)
                            y(H.location + N, de / H.locationSize, W, $, Fe * ee, (Oe + de / H.locationSize * N) * ee, he)
                    } else {
                        if (Q.isInstancedBufferAttribute) {
                            for (let ie = 0; ie < H.locationSize; ie++)
                                f(H.location + ie, Q.meshPerAttribute);
                            x.isInstancedMesh !== !0 && R._maxInstanceCount === void 0 && (R._maxInstanceCount = Q.meshPerAttribute * Q.count)
                        } else
                            for (let ie = 0; ie < H.locationSize; ie++)
                                p(H.location + ie);
                        r.bindBuffer(r.ARRAY_BUFFER, Ne);
                        for (let ie = 0; ie < H.locationSize; ie++)
                            y(H.location + ie, de / H.locationSize, W, $, de * ee, de / H.locationSize * ie * ee, he)
                    }
                } else if (q !== void 0) {
                    const $ = q[J];
                    if ($ !== void 0)
                        switch ($.length) {
                        case 2:
                            r.vertexAttrib2fv(H.location, $);
                            break;
                        case 3:
                            r.vertexAttrib3fv(H.location, $);
                            break;
                        case 4:
                            r.vertexAttrib4fv(H.location, $);
                            break;
                        default:
                            r.vertexAttrib1fv(H.location, $)
                        }
                }
            }
        }
        T()
    }
    function U() {
        L();
        for (const x in n) {
            const D = n[x];
            for (const V in D) {
                const R = D[V];
                for (const B in R)
                    h(R[B].object),
                    delete R[B];
                delete D[V]
            }
            delete n[x]
        }
    }
    function w(x) {
        if (n[x.id] === void 0)
            return;
        const D = n[x.id];
        for (const V in D) {
            const R = D[V];
            for (const B in R)
                h(R[B].object),
                delete R[B];
            delete D[V]
        }
        delete n[x.id]
    }
    function b(x) {
        for (const D in n) {
            const V = n[D];
            if (V[x.id] === void 0)
                continue;
            const R = V[x.id];
            for (const B in R)
                h(R[B].object),
                delete R[B];
            delete V[x.id]
        }
    }
    function L() {
        M(),
        a = !0,
        s !== i && (s = i,
        l(s.object))
    }
    function M() {
        i.geometry = null,
        i.program = null,
        i.wireframe = !1
    }
    return {
        setup: o,
        reset: L,
        resetDefaultState: M,
        dispose: U,
        releaseStatesOfGeometry: w,
        releaseStatesOfProgram: b,
        initAttributes: _,
        enableAttribute: p,
        disableUnusedAttributes: T
    }
}
function jf(r, e, t) {
    let n;
    function i(l) {
        n = l
    }
    function s(l, h) {
        r.drawArrays(n, l, h),
        t.update(h, n, 1)
    }
    function a(l, h, u) {
        u !== 0 && (r.drawArraysInstanced(n, l, h, u),
        t.update(h, n, u))
    }
    function o(l, h, u) {
        if (u === 0)
            return;
        const d = e.get("WEBGL_multi_draw");
        if (d === null)
            for (let m = 0; m < u; m++)
                this.render(l[m], h[m]);
        else {
            d.multiDrawArraysWEBGL(n, l, 0, h, 0, u);
            let m = 0;
            for (let g = 0; g < u; g++)
                m += h[g];
            t.update(m, n, 1)
        }
    }
    function c(l, h, u, d) {
        if (u === 0)
            return;
        const m = e.get("WEBGL_multi_draw");
        if (m === null)
            for (let g = 0; g < l.length; g++)
                a(l[g], h[g], d[g]);
        else {
            m.multiDrawArraysInstancedWEBGL(n, l, 0, h, 0, d, 0, u);
            let g = 0;
            for (let _ = 0; _ < u; _++)
                g += h[_];
            for (let _ = 0; _ < d.length; _++)
                t.update(g, n, d[_])
        }
    }
    this.setMode = i,
    this.render = s,
    this.renderInstances = a,
    this.renderMultiDraw = o,
    this.renderMultiDrawInstances = c
}
function $f(r, e, t, n) {
    let i;
    function s() {
        if (i !== void 0)
            return i;
        if (e.has("EXT_texture_filter_anisotropic") === !0) {
            const w = e.get("EXT_texture_filter_anisotropic");
            i = r.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)
        } else
            i = 0;
        return i
    }
    function a(w) {
        return !(w !== zt && n.convert(w) !== r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))
    }
    function o(w) {
        const b = w === un && (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
        return !(w !== Cn && n.convert(w) !== r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE) && w !== Pt && !b)
    }
    function c(w) {
        if (w === "highp") {
            if (r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.HIGH_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.HIGH_FLOAT).precision > 0)
                return "highp";
            w = "mediump"
        }
        return w === "mediump" && r.getShaderPrecisionFormat(r.VERTEX_SHADER, r.MEDIUM_FLOAT).precision > 0 && r.getShaderPrecisionFormat(r.FRAGMENT_SHADER, r.MEDIUM_FLOAT).precision > 0 ? "mediump" : "lowp"
    }
    let l = t.precision !== void 0 ? t.precision : "highp";
    const h = c(l);
    h !== l && (console.warn("THREE.WebGLRenderer:", l, "not supported, using", h, "instead."),
    l = h);
    const u = t.logarithmicDepthBuffer === !0
      , d = r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS)
      , m = r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS)
      , g = r.getParameter(r.MAX_TEXTURE_SIZE)
      , _ = r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE)
      , p = r.getParameter(r.MAX_VERTEX_ATTRIBS)
      , f = r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS)
      , T = r.getParameter(r.MAX_VARYING_VECTORS)
      , y = r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS)
      , E = m > 0
      , U = r.getParameter(r.MAX_SAMPLES);
    return {
        isWebGL2: !0,
        getMaxAnisotropy: s,
        getMaxPrecision: c,
        textureFormatReadable: a,
        textureTypeReadable: o,
        precision: l,
        logarithmicDepthBuffer: u,
        maxTextures: d,
        maxVertexTextures: m,
        maxTextureSize: g,
        maxCubemapSize: _,
        maxAttributes: p,
        maxVertexUniforms: f,
        maxVaryings: T,
        maxFragmentUniforms: y,
        vertexTextures: E,
        maxSamples: U
    }
}
function Zf(r) {
    const e = this;
    let t = null
      , n = 0
      , i = !1
      , s = !1;
    const a = new kn
      , o = new be
      , c = {
        value: null,
        needsUpdate: !1
    };
    this.uniform = c,
    this.numPlanes = 0,
    this.numIntersection = 0,
    this.init = function(u, d) {
        const m = u.length !== 0 || d || n !== 0 || i;
        return i = d,
        n = u.length,
        m
    }
    ,
    this.beginShadows = function() {
        s = !0,
        h(null)
    }
    ,
    this.endShadows = function() {
        s = !1
    }
    ,
    this.setGlobalState = function(u, d) {
        t = h(u, d, 0)
    }
    ,
    this.setState = function(u, d, m) {
        const g = u.clippingPlanes
          , _ = u.clipIntersection
          , p = u.clipShadows
          , f = r.get(u);
        if (!i || g === null || g.length === 0 || s && !p)
            s ? h(null) : l();
        else {
            const T = s ? 0 : n
              , y = T * 4;
            let E = f.clippingState || null;
            c.value = E,
            E = h(g, d, y, m);
            for (let U = 0; U !== y; ++U)
                E[U] = t[U];
            f.clippingState = E,
            this.numIntersection = _ ? this.numPlanes : 0,
            this.numPlanes += T
        }
    }
    ;
    function l() {
        c.value !== t && (c.value = t,
        c.needsUpdate = n > 0),
        e.numPlanes = n,
        e.numIntersection = 0
    }
    function h(u, d, m, g) {
        const _ = u !== null ? u.length : 0;
        let p = null;
        if (_ !== 0) {
            if (p = c.value,
            g !== !0 || p === null) {
                const f = m + _ * 4
                  , T = d.matrixWorldInverse;
                o.getNormalMatrix(T),
                (p === null || p.length < f) && (p = new Float32Array(f));
                for (let y = 0, E = m; y !== _; ++y,
                E += 4)
                    a.copy(u[y]).applyMatrix4(T, o),
                    a.normal.toArray(p, E),
                    p[E + 3] = a.constant
            }
            c.value = p,
            c.needsUpdate = !0
        }
        return e.numPlanes = _,
        e.numIntersection = 0,
        p
    }
}
function Jf(r) {
    let e = new WeakMap;
    function t(a, o) {
        return o === kr ? a.mapping = Ei : o === qs && (a.mapping = Ti),
        a
    }
    function n(a) {
        if (a && a.isTexture) {
            const o = a.mapping;
            if (o === kr || o === qs)
                if (e.has(a)) {
                    const c = e.get(a).texture;
                    return t(c, a.mapping)
                } else {
                    const c = a.image;
                    if (c && c.height > 0) {
                        const l = new cu(c.height);
                        return l.fromEquirectangularTexture(r, a),
                        e.set(a, l),
                        a.addEventListener("dispose", i),
                        t(l.texture, a.mapping)
                    } else
                        return null
                }
        }
        return a
    }
    function i(a) {
        const o = a.target;
        o.removeEventListener("dispose", i);
        const c = e.get(o);
        c !== void 0 && (e.delete(o),
        c.dispose())
    }
    function s() {
        e = new WeakMap
    }
    return {
        get: n,
        dispose: s
    }
}
class sa extends Vc {
    constructor(e=-1, t=1, n=1, i=-1, s=.1, a=2e3) {
        super(),
        this.isOrthographicCamera = !0,
        this.type = "OrthographicCamera",
        this.zoom = 1,
        this.view = null,
        this.left = e,
        this.right = t,
        this.top = n,
        this.bottom = i,
        this.near = s,
        this.far = a,
        this.updateProjectionMatrix()
    }
    copy(e, t) {
        return super.copy(e, t),
        this.left = e.left,
        this.right = e.right,
        this.top = e.top,
        this.bottom = e.bottom,
        this.near = e.near,
        this.far = e.far,
        this.zoom = e.zoom,
        this.view = e.view === null ? null : Object.assign({}, e.view),
        this
    }
    setViewOffset(e, t, n, i, s, a) {
        this.view === null && (this.view = {
            enabled: !0,
            fullWidth: 1,
            fullHeight: 1,
            offsetX: 0,
            offsetY: 0,
            width: 1,
            height: 1
        }),
        this.view.enabled = !0,
        this.view.fullWidth = e,
        this.view.fullHeight = t,
        this.view.offsetX = n,
        this.view.offsetY = i,
        this.view.width = s,
        this.view.height = a,
        this.updateProjectionMatrix()
    }
    clearViewOffset() {
        this.view !== null && (this.view.enabled = !1),
        this.updateProjectionMatrix()
    }
    updateProjectionMatrix() {
        const e = (this.right - this.left) / (2 * this.zoom)
          , t = (this.top - this.bottom) / (2 * this.zoom)
          , n = (this.right + this.left) / 2
          , i = (this.top + this.bottom) / 2;
        let s = n - e
          , a = n + e
          , o = i + t
          , c = i - t;
        if (this.view !== null && this.view.enabled) {
            const l = (this.right - this.left) / this.view.fullWidth / this.zoom
              , h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
            s += l * this.view.offsetX,
            a = s + l * this.view.width,
            o -= h * this.view.offsetY,
            c = o - h * this.view.height
        }
        this.projectionMatrix.makeOrthographic(s, a, o, c, this.near, this.far, this.coordinateSystem),
        this.projectionMatrixInverse.copy(this.projectionMatrix).invert()
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return t.object.zoom = this.zoom,
        t.object.left = this.left,
        t.object.right = this.right,
        t.object.top = this.top,
        t.object.bottom = this.bottom,
        t.object.near = this.near,
        t.object.far = this.far,
        this.view !== null && (t.object.view = Object.assign({}, this.view)),
        t
    }
}
const gi = 4
  , wo = [.125, .215, .35, .446, .526, .582]
  , Wn = 20
  , Rs = new sa
  , Ro = new Se;
let Cs = null
  , Ls = 0
  , Ps = 0
  , Is = !1;
const Vn = (1 + Math.sqrt(5)) / 2
  , fi = 1 / Vn
  , Co = [new P(-Vn,fi,0), new P(Vn,fi,0), new P(-fi,0,Vn), new P(fi,0,Vn), new P(0,Vn,-fi), new P(0,Vn,fi), new P(-1,1,-1), new P(1,1,-1), new P(-1,1,1), new P(1,1,1)];
class Lo {
    constructor(e) {
        this._renderer = e,
        this._pingPongRenderTarget = null,
        this._lodMax = 0,
        this._cubeSize = 0,
        this._lodPlanes = [],
        this._sizeLods = [],
        this._sigmas = [],
        this._blurMaterial = null,
        this._cubemapMaterial = null,
        this._equirectMaterial = null,
        this._compileMaterial(this._blurMaterial)
    }
    fromScene(e, t=0, n=.1, i=100) {
        Cs = this._renderer.getRenderTarget(),
        Ls = this._renderer.getActiveCubeFace(),
        Ps = this._renderer.getActiveMipmapLevel(),
        Is = this._renderer.xr.enabled,
        this._renderer.xr.enabled = !1,
        this._setSize(256);
        const s = this._allocateTargets();
        return s.depthBuffer = !0,
        this._sceneToCubeUV(e, n, i, s),
        t > 0 && this._blur(s, 0, 0, t),
        this._applyPMREM(s),
        this._cleanup(s),
        s
    }
    fromEquirectangular(e, t=null) {
        return this._fromTexture(e, t)
    }
    fromCubemap(e, t=null) {
        return this._fromTexture(e, t)
    }
    compileCubemapShader() {
        this._cubemapMaterial === null && (this._cubemapMaterial = Do(),
        this._compileMaterial(this._cubemapMaterial))
    }
    compileEquirectangularShader() {
        this._equirectMaterial === null && (this._equirectMaterial = Io(),
        this._compileMaterial(this._equirectMaterial))
    }
    dispose() {
        this._dispose(),
        this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
        this._equirectMaterial !== null && this._equirectMaterial.dispose()
    }
    _setSize(e) {
        this._lodMax = Math.floor(Math.log2(e)),
        this._cubeSize = Math.pow(2, this._lodMax)
    }
    _dispose() {
        this._blurMaterial !== null && this._blurMaterial.dispose(),
        this._pingPongRenderTarget !== null && this._pingPongRenderTarget.dispose();
        for (let e = 0; e < this._lodPlanes.length; e++)
            this._lodPlanes[e].dispose()
    }
    _cleanup(e) {
        this._renderer.setRenderTarget(Cs, Ls, Ps),
        this._renderer.xr.enabled = Is,
        e.scissorTest = !1,
        Lr(e, 0, 0, e.width, e.height)
    }
    _fromTexture(e, t) {
        e.mapping === Ei || e.mapping === Ti ? this._setSize(e.image.length === 0 ? 16 : e.image[0].width || e.image[0].image.width) : this._setSize(e.image.width / 4),
        Cs = this._renderer.getRenderTarget(),
        Ls = this._renderer.getActiveCubeFace(),
        Ps = this._renderer.getActiveMipmapLevel(),
        Is = this._renderer.xr.enabled,
        this._renderer.xr.enabled = !1;
        const n = t || this._allocateTargets();
        return this._textureToCubeUV(e, n),
        this._applyPMREM(n),
        this._cleanup(n),
        n
    }
    _allocateTargets() {
        const e = 3 * Math.max(this._cubeSize, 112)
          , t = 4 * this._cubeSize
          , n = {
            magFilter: lt,
            minFilter: lt,
            generateMipmaps: !1,
            type: un,
            format: zt,
            colorSpace: ut,
            depthBuffer: !1
        }
          , i = Po(e, t, n);
        if (this._pingPongRenderTarget === null || this._pingPongRenderTarget.width !== e || this._pingPongRenderTarget.height !== t) {
            this._pingPongRenderTarget !== null && this._dispose(),
            this._pingPongRenderTarget = Po(e, t, n);
            const {_lodMax: s} = this;
            ({sizeLods: this._sizeLods, lodPlanes: this._lodPlanes, sigmas: this._sigmas} = Qf(s)),
            this._blurMaterial = ep(s, e, t)
        }
        return i
    }
    _compileMaterial(e) {
        const t = new At(this._lodPlanes[0],e);
        this._renderer.compile(t, Rs)
    }
    _sceneToCubeUV(e, t, n, i) {
        const o = new yt(90,1,t,n)
          , c = [1, -1, 1, 1, 1, 1]
          , l = [1, 1, 1, -1, -1, -1]
          , h = this._renderer
          , u = h.autoClear
          , d = h.toneMapping;
        h.getClearColor(Ro),
        h.toneMapping = Rn,
        h.autoClear = !1;
        const m = new Xn({
            name: "PMREM.Background",
            side: wt,
            depthWrite: !1,
            depthTest: !1
        })
          , g = new At(new sr,m);
        let _ = !1;
        const p = e.background;
        p ? p.isColor && (m.color.copy(p),
        e.background = null,
        _ = !0) : (m.color.copy(Ro),
        _ = !0);
        for (let f = 0; f < 6; f++) {
            const T = f % 3;
            T === 0 ? (o.up.set(0, c[f], 0),
            o.lookAt(l[f], 0, 0)) : T === 1 ? (o.up.set(0, 0, c[f]),
            o.lookAt(0, l[f], 0)) : (o.up.set(0, c[f], 0),
            o.lookAt(0, 0, l[f]));
            const y = this._cubeSize;
            Lr(i, T * y, f > 2 ? y : 0, y, y),
            h.setRenderTarget(i),
            _ && h.render(g, o),
            h.render(e, o)
        }
        g.geometry.dispose(),
        g.material.dispose(),
        h.toneMapping = d,
        h.autoClear = u,
        e.background = p
    }
    _textureToCubeUV(e, t) {
        const n = this._renderer
          , i = e.mapping === Ei || e.mapping === Ti;
        i ? (this._cubemapMaterial === null && (this._cubemapMaterial = Do()),
        this._cubemapMaterial.uniforms.flipEnvMap.value = e.isRenderTargetTexture === !1 ? -1 : 1) : this._equirectMaterial === null && (this._equirectMaterial = Io());
        const s = i ? this._cubemapMaterial : this._equirectMaterial
          , a = new At(this._lodPlanes[0],s)
          , o = s.uniforms;
        o.envMap.value = e;
        const c = this._cubeSize;
        Lr(t, 0, 0, 3 * c, 2 * c),
        n.setRenderTarget(t),
        n.render(a, Rs)
    }
    _applyPMREM(e) {
        const t = this._renderer
          , n = t.autoClear;
        t.autoClear = !1;
        const i = this._lodPlanes.length;
        for (let s = 1; s < i; s++) {
            const a = Math.sqrt(this._sigmas[s] * this._sigmas[s] - this._sigmas[s - 1] * this._sigmas[s - 1])
              , o = Co[(i - s - 1) % Co.length];
            this._blur(e, s - 1, s, a, o)
        }
        t.autoClear = n
    }
    _blur(e, t, n, i, s) {
        const a = this._pingPongRenderTarget;
        this._halfBlur(e, a, t, n, i, "latitudinal", s),
        this._halfBlur(a, e, n, n, i, "longitudinal", s)
    }
    _halfBlur(e, t, n, i, s, a, o) {
        const c = this._renderer
          , l = this._blurMaterial;
        a !== "latitudinal" && a !== "longitudinal" && console.error("blur direction must be either latitudinal or longitudinal!");
        const h = 3
          , u = new At(this._lodPlanes[i],l)
          , d = l.uniforms
          , m = this._sizeLods[n] - 1
          , g = isFinite(s) ? Math.PI / (2 * m) : 2 * Math.PI / (2 * Wn - 1)
          , _ = s / g
          , p = isFinite(s) ? 1 + Math.floor(h * _) : Wn;
        p > Wn && console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Wn}`);
        const f = [];
        let T = 0;
        for (let b = 0; b < Wn; ++b) {
            const L = b / _
              , M = Math.exp(-L * L / 2);
            f.push(M),
            b === 0 ? T += M : b < p && (T += 2 * M)
        }
        for (let b = 0; b < f.length; b++)
            f[b] = f[b] / T;
        d.envMap.value = e.texture,
        d.samples.value = p,
        d.weights.value = f,
        d.latitudinal.value = a === "latitudinal",
        o && (d.poleAxis.value = o);
        const {_lodMax: y} = this;
        d.dTheta.value = g,
        d.mipInt.value = y - n;
        const E = this._sizeLods[i]
          , U = 3 * E * (i > y - gi ? i - y + gi : 0)
          , w = 4 * (this._cubeSize - E);
        Lr(t, U, w, 3 * E, 2 * E),
        c.setRenderTarget(t),
        c.render(u, Rs)
    }
}
function Qf(r) {
    const e = []
      , t = []
      , n = [];
    let i = r;
    const s = r - gi + 1 + wo.length;
    for (let a = 0; a < s; a++) {
        const o = Math.pow(2, i);
        t.push(o);
        let c = 1 / o;
        a > r - gi ? c = wo[a - r + gi - 1] : a === 0 && (c = 0),
        n.push(c);
        const l = 1 / (o - 2)
          , h = -l
          , u = 1 + l
          , d = [h, h, u, h, u, u, h, h, u, u, h, u]
          , m = 6
          , g = 6
          , _ = 3
          , p = 2
          , f = 1
          , T = new Float32Array(_ * g * m)
          , y = new Float32Array(p * g * m)
          , E = new Float32Array(f * g * m);
        for (let w = 0; w < m; w++) {
            const b = w % 3 * 2 / 3 - 1
              , L = w > 2 ? 0 : -1
              , M = [b, L, 0, b + 2 / 3, L, 0, b + 2 / 3, L + 1, 0, b, L, 0, b + 2 / 3, L + 1, 0, b, L + 1, 0];
            T.set(M, _ * g * w),
            y.set(d, p * g * w);
            const x = [w, w, w, w, w, w];
            E.set(x, f * g * w)
        }
        const U = new $t;
        U.setAttribute("position", new Tt(T,_)),
        U.setAttribute("uv", new Tt(y,p)),
        U.setAttribute("faceIndex", new Tt(E,f)),
        e.push(U),
        i > gi && i--
    }
    return {
        lodPlanes: e,
        sizeLods: t,
        sigmas: n
    }
}
function Po(r, e, t) {
    const n = new Yn(r,e,t);
    return n.texture.mapping = jr,
    n.texture.name = "PMREM.cubeUv",
    n.scissorTest = !0,
    n
}
function Lr(r, e, t, n, i) {
    r.viewport.set(e, t, n, i),
    r.scissor.set(e, t, n, i)
}
function ep(r, e, t) {
    const n = new Float32Array(Wn)
      , i = new P(0,1,0);
    return new Ln({
        name: "SphericalGaussianBlur",
        defines: {
            n: Wn,
            CUBEUV_TEXEL_WIDTH: 1 / e,
            CUBEUV_TEXEL_HEIGHT: 1 / t,
            CUBEUV_MAX_MIP: `${r}.0`
        },
        uniforms: {
            envMap: {
                value: null
            },
            samples: {
                value: 1
            },
            weights: {
                value: n
            },
            latitudinal: {
                value: !1
            },
            dTheta: {
                value: 0
            },
            mipInt: {
                value: 0
            },
            poleAxis: {
                value: i
            }
        },
        vertexShader: aa(),
        fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
        blending: wn,
        depthTest: !1,
        depthWrite: !1
    })
}
function Io() {
    return new Ln({
        name: "EquirectangularToCubeUV",
        uniforms: {
            envMap: {
                value: null
            }
        },
        vertexShader: aa(),
        fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
        blending: wn,
        depthTest: !1,
        depthWrite: !1
    })
}
function Do() {
    return new Ln({
        name: "CubemapToCubeUV",
        uniforms: {
            envMap: {
                value: null
            },
            flipEnvMap: {
                value: -1
            }
        },
        vertexShader: aa(),
        fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
        blending: wn,
        depthTest: !1,
        depthWrite: !1
    })
}
function aa() {
    return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`
}
function tp(r) {
    let e = new WeakMap
      , t = null;
    function n(o) {
        if (o && o.isTexture) {
            const c = o.mapping
              , l = c === kr || c === qs
              , h = c === Ei || c === Ti;
            if (l || h) {
                let u = e.get(o);
                const d = u !== void 0 ? u.texture.pmremVersion : 0;
                if (o.isRenderTargetTexture && o.pmremVersion !== d)
                    return t === null && (t = new Lo(r)),
                    u = l ? t.fromEquirectangular(o, u) : t.fromCubemap(o, u),
                    u.texture.pmremVersion = o.pmremVersion,
                    e.set(o, u),
                    u.texture;
                if (u !== void 0)
                    return u.texture;
                {
                    const m = o.image;
                    return l && m && m.height > 0 || h && m && i(m) ? (t === null && (t = new Lo(r)),
                    u = l ? t.fromEquirectangular(o) : t.fromCubemap(o),
                    u.texture.pmremVersion = o.pmremVersion,
                    e.set(o, u),
                    o.addEventListener("dispose", s),
                    u.texture) : null
                }
            }
        }
        return o
    }
    function i(o) {
        let c = 0;
        const l = 6;
        for (let h = 0; h < l; h++)
            o[h] !== void 0 && c++;
        return c === l
    }
    function s(o) {
        const c = o.target;
        c.removeEventListener("dispose", s);
        const l = e.get(c);
        l !== void 0 && (e.delete(c),
        l.dispose())
    }
    function a() {
        e = new WeakMap,
        t !== null && (t.dispose(),
        t = null)
    }
    return {
        get: n,
        dispose: a
    }
}
function np(r) {
    const e = {};
    function t(n) {
        if (e[n] !== void 0)
            return e[n];
        let i;
        switch (n) {
        case "WEBGL_depth_texture":
            i = r.getExtension("WEBGL_depth_texture") || r.getExtension("MOZ_WEBGL_depth_texture") || r.getExtension("WEBKIT_WEBGL_depth_texture");
            break;
        case "EXT_texture_filter_anisotropic":
            i = r.getExtension("EXT_texture_filter_anisotropic") || r.getExtension("MOZ_EXT_texture_filter_anisotropic") || r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
            break;
        case "WEBGL_compressed_texture_s3tc":
            i = r.getExtension("WEBGL_compressed_texture_s3tc") || r.getExtension("MOZ_WEBGL_compressed_texture_s3tc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
            break;
        case "WEBGL_compressed_texture_pvrtc":
            i = r.getExtension("WEBGL_compressed_texture_pvrtc") || r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
            break;
        default:
            i = r.getExtension(n)
        }
        return e[n] = i,
        i
    }
    return {
        has: function(n) {
            return t(n) !== null
        },
        init: function() {
            t("EXT_color_buffer_float"),
            t("WEBGL_clip_cull_distance"),
            t("OES_texture_float_linear"),
            t("EXT_color_buffer_half_float"),
            t("WEBGL_multisampled_render_to_texture"),
            t("WEBGL_render_shared_exponent")
        },
        get: function(n) {
            const i = t(n);
            return i === null && console.warn("THREE.WebGLRenderer: " + n + " extension not supported."),
            i
        }
    }
}
function ip(r, e, t, n) {
    const i = {}
      , s = new WeakMap;
    function a(u) {
        const d = u.target;
        d.index !== null && e.remove(d.index);
        for (const g in d.attributes)
            e.remove(d.attributes[g]);
        for (const g in d.morphAttributes) {
            const _ = d.morphAttributes[g];
            for (let p = 0, f = _.length; p < f; p++)
                e.remove(_[p])
        }
        d.removeEventListener("dispose", a),
        delete i[d.id];
        const m = s.get(d);
        m && (e.remove(m),
        s.delete(d)),
        n.releaseStatesOfGeometry(d),
        d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount,
        t.memory.geometries--
    }
    function o(u, d) {
        return i[d.id] === !0 || (d.addEventListener("dispose", a),
        i[d.id] = !0,
        t.memory.geometries++),
        d
    }
    function c(u) {
        const d = u.attributes;
        for (const g in d)
            e.update(d[g], r.ARRAY_BUFFER);
        const m = u.morphAttributes;
        for (const g in m) {
            const _ = m[g];
            for (let p = 0, f = _.length; p < f; p++)
                e.update(_[p], r.ARRAY_BUFFER)
        }
    }
    function l(u) {
        const d = []
          , m = u.index
          , g = u.attributes.position;
        let _ = 0;
        if (m !== null) {
            const T = m.array;
            _ = m.version;
            for (let y = 0, E = T.length; y < E; y += 3) {
                const U = T[y + 0]
                  , w = T[y + 1]
                  , b = T[y + 2];
                d.push(U, w, w, b, b, U)
            }
        } else if (g !== void 0) {
            const T = g.array;
            _ = g.version;
            for (let y = 0, E = T.length / 3 - 1; y < E; y += 3) {
                const U = y + 0
                  , w = y + 1
                  , b = y + 2;
                d.push(U, w, w, b, b, U)
            }
        } else
            return;
        const p = new (Dc(d) ? Hc : zc)(d,1);
        p.version = _;
        const f = s.get(u);
        f && e.remove(f),
        s.set(u, p)
    }
    function h(u) {
        const d = s.get(u);
        if (d) {
            const m = u.index;
            m !== null && d.version < m.version && l(u)
        } else
            l(u);
        return s.get(u)
    }
    return {
        get: o,
        update: c,
        getWireframeAttribute: h
    }
}
function rp(r, e, t) {
    let n;
    function i(d) {
        n = d
    }
    let s, a;
    function o(d) {
        s = d.type,
        a = d.bytesPerElement
    }
    function c(d, m) {
        r.drawElements(n, m, s, d * a),
        t.update(m, n, 1)
    }
    function l(d, m, g) {
        g !== 0 && (r.drawElementsInstanced(n, m, s, d * a, g),
        t.update(m, n, g))
    }
    function h(d, m, g) {
        if (g === 0)
            return;
        const _ = e.get("WEBGL_multi_draw");
        if (_ === null)
            for (let p = 0; p < g; p++)
                this.render(d[p] / a, m[p]);
        else {
            _.multiDrawElementsWEBGL(n, m, 0, s, d, 0, g);
            let p = 0;
            for (let f = 0; f < g; f++)
                p += m[f];
            t.update(p, n, 1)
        }
    }
    function u(d, m, g, _) {
        if (g === 0)
            return;
        const p = e.get("WEBGL_multi_draw");
        if (p === null)
            for (let f = 0; f < d.length; f++)
                l(d[f] / a, m[f], _[f]);
        else {
            p.multiDrawElementsInstancedWEBGL(n, m, 0, s, d, 0, _, 0, g);
            let f = 0;
            for (let T = 0; T < g; T++)
                f += m[T];
            for (let T = 0; T < _.length; T++)
                t.update(f, n, _[T])
        }
    }
    this.setMode = i,
    this.setIndex = o,
    this.render = c,
    this.renderInstances = l,
    this.renderMultiDraw = h,
    this.renderMultiDrawInstances = u
}
function sp(r) {
    const e = {
        geometries: 0,
        textures: 0
    }
      , t = {
        frame: 0,
        calls: 0,
        triangles: 0,
        points: 0,
        lines: 0
    };
    function n(s, a, o) {
        switch (t.calls++,
        a) {
        case r.TRIANGLES:
            t.triangles += o * (s / 3);
            break;
        case r.LINES:
            t.lines += o * (s / 2);
            break;
        case r.LINE_STRIP:
            t.lines += o * (s - 1);
            break;
        case r.LINE_LOOP:
            t.lines += o * s;
            break;
        case r.POINTS:
            t.points += o * s;
            break;
        default:
            console.error("THREE.WebGLInfo: Unknown draw mode:", a);
            break
        }
    }
    function i() {
        t.calls = 0,
        t.triangles = 0,
        t.points = 0,
        t.lines = 0
    }
    return {
        memory: e,
        render: t,
        programs: null,
        autoReset: !0,
        reset: i,
        update: n
    }
}
function ap(r, e, t) {
    const n = new WeakMap
      , i = new Ke;
    function s(a, o, c) {
        const l = a.morphTargetInfluences
          , h = o.morphAttributes.position || o.morphAttributes.normal || o.morphAttributes.color
          , u = h !== void 0 ? h.length : 0;
        let d = n.get(o);
        if (d === void 0 || d.count !== u) {
            let x = function() {
                L.dispose(),
                n.delete(o),
                o.removeEventListener("dispose", x)
            };
            var m = x;
            d !== void 0 && d.texture.dispose();
            const g = o.morphAttributes.position !== void 0
              , _ = o.morphAttributes.normal !== void 0
              , p = o.morphAttributes.color !== void 0
              , f = o.morphAttributes.position || []
              , T = o.morphAttributes.normal || []
              , y = o.morphAttributes.color || [];
            let E = 0;
            g === !0 && (E = 1),
            _ === !0 && (E = 2),
            p === !0 && (E = 3);
            let U = o.attributes.position.count * E
              , w = 1;
            U > e.maxTextureSize && (w = Math.ceil(U / e.maxTextureSize),
            U = e.maxTextureSize);
            const b = new Float32Array(U * w * 4 * u)
              , L = new Fc(b,U,w,u);
            L.type = Pt,
            L.needsUpdate = !0;
            const M = E * 4;
            for (let D = 0; D < u; D++) {
                const V = f[D]
                  , R = T[D]
                  , B = y[D]
                  , G = U * w * 4 * D;
                for (let q = 0; q < V.count; q++) {
                    const J = q * M;
                    g === !0 && (i.fromBufferAttribute(V, q),
                    b[G + J + 0] = i.x,
                    b[G + J + 1] = i.y,
                    b[G + J + 2] = i.z,
                    b[G + J + 3] = 0),
                    _ === !0 && (i.fromBufferAttribute(R, q),
                    b[G + J + 4] = i.x,
                    b[G + J + 5] = i.y,
                    b[G + J + 6] = i.z,
                    b[G + J + 7] = 0),
                    p === !0 && (i.fromBufferAttribute(B, q),
                    b[G + J + 8] = i.x,
                    b[G + J + 9] = i.y,
                    b[G + J + 10] = i.z,
                    b[G + J + 11] = B.itemSize === 4 ? i.w : 1)
                }
            }
            d = {
                count: u,
                texture: L,
                size: new Ue(U,w)
            },
            n.set(o, d),
            o.addEventListener("dispose", x)
        }
        if (a.isInstancedMesh === !0 && a.morphTexture !== null)
            c.getUniforms().setValue(r, "morphTexture", a.morphTexture, t);
        else {
            let g = 0;
            for (let p = 0; p < l.length; p++)
                g += l[p];
            const _ = o.morphTargetsRelative ? 1 : 1 - g;
            c.getUniforms().setValue(r, "morphTargetBaseInfluence", _),
            c.getUniforms().setValue(r, "morphTargetInfluences", l)
        }
        c.getUniforms().setValue(r, "morphTargetsTexture", d.texture, t),
        c.getUniforms().setValue(r, "morphTargetsTextureSize", d.size)
    }
    return {
        update: s
    }
}
function op(r, e, t, n) {
    let i = new WeakMap;
    function s(c) {
        const l = n.render.frame
          , h = c.geometry
          , u = e.get(c, h);
        if (i.get(u) !== l && (e.update(u),
        i.set(u, l)),
        c.isInstancedMesh && (c.hasEventListener("dispose", o) === !1 && c.addEventListener("dispose", o),
        i.get(c) !== l && (t.update(c.instanceMatrix, r.ARRAY_BUFFER),
        c.instanceColor !== null && t.update(c.instanceColor, r.ARRAY_BUFFER),
        i.set(c, l))),
        c.isSkinnedMesh) {
            const d = c.skeleton;
            i.get(d) !== l && (d.update(),
            i.set(d, l))
        }
        return u
    }
    function a() {
        i = new WeakMap
    }
    function o(c) {
        const l = c.target;
        l.removeEventListener("dispose", o),
        t.remove(l.instanceMatrix),
        l.instanceColor !== null && t.remove(l.instanceColor)
    }
    return {
        update: s,
        dispose: a
    }
}
class Xc extends ht {
    constructor(e, t, n, i, s, a, o, c, l, h) {
        if (h = h !== void 0 ? h : xi,
        h !== xi && h !== er)
            throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");
        n === void 0 && h === xi && (n = bi),
        n === void 0 && h === er && (n = rr),
        super(null, i, s, a, o, c, h, n, l),
        this.isDepthTexture = !0,
        this.image = {
            width: e,
            height: t
        },
        this.magFilter = o !== void 0 ? o : Et,
        this.minFilter = c !== void 0 ? c : Et,
        this.flipY = !1,
        this.generateMipmaps = !1,
        this.compareFunction = null
    }
    copy(e) {
        return super.copy(e),
        this.compareFunction = e.compareFunction,
        this
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return this.compareFunction !== null && (t.compareFunction = this.compareFunction),
        t
    }
}
const qc = new ht
  , Yc = new Xc(1,1);
Yc.compareFunction = Ic;
const Kc = new Fc
  , jc = new Gh
  , $c = new Gc
  , Uo = []
  , No = []
  , Fo = new Float32Array(16)
  , Oo = new Float32Array(9)
  , Bo = new Float32Array(4);
function Di(r, e, t) {
    const n = r[0];
    if (n <= 0 || n > 0)
        return r;
    const i = e * t;
    let s = Uo[i];
    if (s === void 0 && (s = new Float32Array(i),
    Uo[i] = s),
    e !== 0) {
        n.toArray(s, 0);
        for (let a = 1, o = 0; a !== e; ++a)
            o += t,
            r[a].toArray(s, o)
    }
    return s
}
function at(r, e) {
    if (r.length !== e.length)
        return !1;
    for (let t = 0, n = r.length; t < n; t++)
        if (r[t] !== e[t])
            return !1;
    return !0
}
function ot(r, e) {
    for (let t = 0, n = e.length; t < n; t++)
        r[t] = e[t]
}
function Qr(r, e) {
    let t = No[e];
    t === void 0 && (t = new Int32Array(e),
    No[e] = t);
    for (let n = 0; n !== e; ++n)
        t[n] = r.allocateTextureUnit();
    return t
}
function cp(r, e) {
    const t = this.cache;
    t[0] !== e && (r.uniform1f(this.addr, e),
    t[0] = e)
}
function lp(r, e) {
    const t = this.cache;
    if (e.x !== void 0)
        (t[0] !== e.x || t[1] !== e.y) && (r.uniform2f(this.addr, e.x, e.y),
        t[0] = e.x,
        t[1] = e.y);
    else {
        if (at(t, e))
            return;
        r.uniform2fv(this.addr, e),
        ot(t, e)
    }
}
function hp(r, e) {
    const t = this.cache;
    if (e.x !== void 0)
        (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3f(this.addr, e.x, e.y, e.z),
        t[0] = e.x,
        t[1] = e.y,
        t[2] = e.z);
    else if (e.r !== void 0)
        (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) && (r.uniform3f(this.addr, e.r, e.g, e.b),
        t[0] = e.r,
        t[1] = e.g,
        t[2] = e.b);
    else {
        if (at(t, e))
            return;
        r.uniform3fv(this.addr, e),
        ot(t, e)
    }
}
function up(r, e) {
    const t = this.cache;
    if (e.x !== void 0)
        (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4f(this.addr, e.x, e.y, e.z, e.w),
        t[0] = e.x,
        t[1] = e.y,
        t[2] = e.z,
        t[3] = e.w);
    else {
        if (at(t, e))
            return;
        r.uniform4fv(this.addr, e),
        ot(t, e)
    }
}
function dp(r, e) {
    const t = this.cache
      , n = e.elements;
    if (n === void 0) {
        if (at(t, e))
            return;
        r.uniformMatrix2fv(this.addr, !1, e),
        ot(t, e)
    } else {
        if (at(t, n))
            return;
        Bo.set(n),
        r.uniformMatrix2fv(this.addr, !1, Bo),
        ot(t, n)
    }
}
function fp(r, e) {
    const t = this.cache
      , n = e.elements;
    if (n === void 0) {
        if (at(t, e))
            return;
        r.uniformMatrix3fv(this.addr, !1, e),
        ot(t, e)
    } else {
        if (at(t, n))
            return;
        Oo.set(n),
        r.uniformMatrix3fv(this.addr, !1, Oo),
        ot(t, n)
    }
}
function pp(r, e) {
    const t = this.cache
      , n = e.elements;
    if (n === void 0) {
        if (at(t, e))
            return;
        r.uniformMatrix4fv(this.addr, !1, e),
        ot(t, e)
    } else {
        if (at(t, n))
            return;
        Fo.set(n),
        r.uniformMatrix4fv(this.addr, !1, Fo),
        ot(t, n)
    }
}
function mp(r, e) {
    const t = this.cache;
    t[0] !== e && (r.uniform1i(this.addr, e),
    t[0] = e)
}
function gp(r, e) {
    const t = this.cache;
    if (e.x !== void 0)
        (t[0] !== e.x || t[1] !== e.y) && (r.uniform2i(this.addr, e.x, e.y),
        t[0] = e.x,
        t[1] = e.y);
    else {
        if (at(t, e))
            return;
        r.uniform2iv(this.addr, e),
        ot(t, e)
    }
}
function _p(r, e) {
    const t = this.cache;
    if (e.x !== void 0)
        (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3i(this.addr, e.x, e.y, e.z),
        t[0] = e.x,
        t[1] = e.y,
        t[2] = e.z);
    else {
        if (at(t, e))
            return;
        r.uniform3iv(this.addr, e),
        ot(t, e)
    }
}
function xp(r, e) {
    const t = this.cache;
    if (e.x !== void 0)
        (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4i(this.addr, e.x, e.y, e.z, e.w),
        t[0] = e.x,
        t[1] = e.y,
        t[2] = e.z,
        t[3] = e.w);
    else {
        if (at(t, e))
            return;
        r.uniform4iv(this.addr, e),
        ot(t, e)
    }
}
function vp(r, e) {
    const t = this.cache;
    t[0] !== e && (r.uniform1ui(this.addr, e),
    t[0] = e)
}
function Mp(r, e) {
    const t = this.cache;
    if (e.x !== void 0)
        (t[0] !== e.x || t[1] !== e.y) && (r.uniform2ui(this.addr, e.x, e.y),
        t[0] = e.x,
        t[1] = e.y);
    else {
        if (at(t, e))
            return;
        r.uniform2uiv(this.addr, e),
        ot(t, e)
    }
}
function Sp(r, e) {
    const t = this.cache;
    if (e.x !== void 0)
        (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) && (r.uniform3ui(this.addr, e.x, e.y, e.z),
        t[0] = e.x,
        t[1] = e.y,
        t[2] = e.z);
    else {
        if (at(t, e))
            return;
        r.uniform3uiv(this.addr, e),
        ot(t, e)
    }
}
function yp(r, e) {
    const t = this.cache;
    if (e.x !== void 0)
        (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) && (r.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
        t[0] = e.x,
        t[1] = e.y,
        t[2] = e.z,
        t[3] = e.w);
    else {
        if (at(t, e))
            return;
        r.uniform4uiv(this.addr, e),
        ot(t, e)
    }
}
function Ep(r, e, t) {
    const n = this.cache
      , i = t.allocateTextureUnit();
    n[0] !== i && (r.uniform1i(this.addr, i),
    n[0] = i);
    const s = this.type === r.SAMPLER_2D_SHADOW ? Yc : qc;
    t.setTexture2D(e || s, i)
}
function Tp(r, e, t) {
    const n = this.cache
      , i = t.allocateTextureUnit();
    n[0] !== i && (r.uniform1i(this.addr, i),
    n[0] = i),
    t.setTexture3D(e || jc, i)
}
function Ap(r, e, t) {
    const n = this.cache
      , i = t.allocateTextureUnit();
    n[0] !== i && (r.uniform1i(this.addr, i),
    n[0] = i),
    t.setTextureCube(e || $c, i)
}
function bp(r, e, t) {
    const n = this.cache
      , i = t.allocateTextureUnit();
    n[0] !== i && (r.uniform1i(this.addr, i),
    n[0] = i),
    t.setTexture2DArray(e || Kc, i)
}
function wp(r) {
    switch (r) {
    case 5126:
        return cp;
    case 35664:
        return lp;
    case 35665:
        return hp;
    case 35666:
        return up;
    case 35674:
        return dp;
    case 35675:
        return fp;
    case 35676:
        return pp;
    case 5124:
    case 35670:
        return mp;
    case 35667:
    case 35671:
        return gp;
    case 35668:
    case 35672:
        return _p;
    case 35669:
    case 35673:
        return xp;
    case 5125:
        return vp;
    case 36294:
        return Mp;
    case 36295:
        return Sp;
    case 36296:
        return yp;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
        return Ep;
    case 35679:
    case 36299:
    case 36307:
        return Tp;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
        return Ap;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
        return bp
    }
}
function Rp(r, e) {
    r.uniform1fv(this.addr, e)
}
function Cp(r, e) {
    const t = Di(e, this.size, 2);
    r.uniform2fv(this.addr, t)
}
function Lp(r, e) {
    const t = Di(e, this.size, 3);
    r.uniform3fv(this.addr, t)
}
function Pp(r, e) {
    const t = Di(e, this.size, 4);
    r.uniform4fv(this.addr, t)
}
function Ip(r, e) {
    const t = Di(e, this.size, 4);
    r.uniformMatrix2fv(this.addr, !1, t)
}
function Dp(r, e) {
    const t = Di(e, this.size, 9);
    r.uniformMatrix3fv(this.addr, !1, t)
}
function Up(r, e) {
    const t = Di(e, this.size, 16);
    r.uniformMatrix4fv(this.addr, !1, t)
}
function Np(r, e) {
    r.uniform1iv(this.addr, e)
}
function Fp(r, e) {
    r.uniform2iv(this.addr, e)
}
function Op(r, e) {
    r.uniform3iv(this.addr, e)
}
function Bp(r, e) {
    r.uniform4iv(this.addr, e)
}
function zp(r, e) {
    r.uniform1uiv(this.addr, e)
}
function Hp(r, e) {
    r.uniform2uiv(this.addr, e)
}
function kp(r, e) {
    r.uniform3uiv(this.addr, e)
}
function Vp(r, e) {
    r.uniform4uiv(this.addr, e)
}
function Gp(r, e, t) {
    const n = this.cache
      , i = e.length
      , s = Qr(t, i);
    at(n, s) || (r.uniform1iv(this.addr, s),
    ot(n, s));
    for (let a = 0; a !== i; ++a)
        t.setTexture2D(e[a] || qc, s[a])
}
function Wp(r, e, t) {
    const n = this.cache
      , i = e.length
      , s = Qr(t, i);
    at(n, s) || (r.uniform1iv(this.addr, s),
    ot(n, s));
    for (let a = 0; a !== i; ++a)
        t.setTexture3D(e[a] || jc, s[a])
}
function Xp(r, e, t) {
    const n = this.cache
      , i = e.length
      , s = Qr(t, i);
    at(n, s) || (r.uniform1iv(this.addr, s),
    ot(n, s));
    for (let a = 0; a !== i; ++a)
        t.setTextureCube(e[a] || $c, s[a])
}
function qp(r, e, t) {
    const n = this.cache
      , i = e.length
      , s = Qr(t, i);
    at(n, s) || (r.uniform1iv(this.addr, s),
    ot(n, s));
    for (let a = 0; a !== i; ++a)
        t.setTexture2DArray(e[a] || Kc, s[a])
}
function Yp(r) {
    switch (r) {
    case 5126:
        return Rp;
    case 35664:
        return Cp;
    case 35665:
        return Lp;
    case 35666:
        return Pp;
    case 35674:
        return Ip;
    case 35675:
        return Dp;
    case 35676:
        return Up;
    case 5124:
    case 35670:
        return Np;
    case 35667:
    case 35671:
        return Fp;
    case 35668:
    case 35672:
        return Op;
    case 35669:
    case 35673:
        return Bp;
    case 5125:
        return zp;
    case 36294:
        return Hp;
    case 36295:
        return kp;
    case 36296:
        return Vp;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
        return Gp;
    case 35679:
    case 36299:
    case 36307:
        return Wp;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
        return Xp;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
        return qp
    }
}
class Kp {
    constructor(e, t, n) {
        this.id = e,
        this.addr = n,
        this.cache = [],
        this.type = t.type,
        this.setValue = wp(t.type)
    }
}
class jp {
    constructor(e, t, n) {
        this.id = e,
        this.addr = n,
        this.cache = [],
        this.type = t.type,
        this.size = t.size,
        this.setValue = Yp(t.type)
    }
}
class $p {
    constructor(e) {
        this.id = e,
        this.seq = [],
        this.map = {}
    }
    setValue(e, t, n) {
        const i = this.seq;
        for (let s = 0, a = i.length; s !== a; ++s) {
            const o = i[s];
            o.setValue(e, t[o.id], n)
        }
    }
}
const Ds = /(\w+)(\])?(\[|\.)?/g;
function zo(r, e) {
    r.seq.push(e),
    r.map[e.id] = e
}
function Zp(r, e, t) {
    const n = r.name
      , i = n.length;
    for (Ds.lastIndex = 0; ; ) {
        const s = Ds.exec(n)
          , a = Ds.lastIndex;
        let o = s[1];
        const c = s[2] === "]"
          , l = s[3];
        if (c && (o = o | 0),
        l === void 0 || l === "[" && a + 2 === i) {
            zo(t, l === void 0 ? new Kp(o,r,e) : new jp(o,r,e));
            break
        } else {
            let u = t.map[o];
            u === void 0 && (u = new $p(o),
            zo(t, u)),
            t = u
        }
    }
}
class zr {
    constructor(e, t) {
        this.seq = [],
        this.map = {};
        const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
        for (let i = 0; i < n; ++i) {
            const s = e.getActiveUniform(t, i)
              , a = e.getUniformLocation(t, s.name);
            Zp(s, a, this)
        }
    }
    setValue(e, t, n, i) {
        const s = this.map[t];
        s !== void 0 && s.setValue(e, n, i)
    }
    setOptional(e, t, n) {
        const i = t[n];
        i !== void 0 && this.setValue(e, n, i)
    }
    static upload(e, t, n, i) {
        for (let s = 0, a = t.length; s !== a; ++s) {
            const o = t[s]
              , c = n[o.id];
            c.needsUpdate !== !1 && o.setValue(e, c.value, i)
        }
    }
    static seqWithValue(e, t) {
        const n = [];
        for (let i = 0, s = e.length; i !== s; ++i) {
            const a = e[i];
            a.id in t && n.push(a)
        }
        return n
    }
}
function Ho(r, e, t) {
    const n = r.createShader(e);
    return r.shaderSource(n, t),
    r.compileShader(n),
    n
}
const Jp = 37297;
let Qp = 0;
function em(r, e) {
    const t = r.split(`
`)
      , n = []
      , i = Math.max(e - 6, 0)
      , s = Math.min(e + 6, t.length);
    for (let a = i; a < s; a++) {
        const o = a + 1;
        n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`)
    }
    return n.join(`
`)
}
function tm(r) {
    const e = We.getPrimaries(We.workingColorSpace)
      , t = We.getPrimaries(r);
    let n;
    switch (e === t ? n = "" : e === Xr && t === Wr ? n = "LinearDisplayP3ToLinearSRGB" : e === Wr && t === Xr && (n = "LinearSRGBToLinearDisplayP3"),
    r) {
    case ut:
    case $r:
        return [n, "LinearTransferOETF"];
    case St:
    case na:
        return [n, "sRGBTransferOETF"];
    default:
        return console.warn("THREE.WebGLProgram: Unsupported color space:", r),
        [n, "LinearTransferOETF"]
    }
}
function ko(r, e, t) {
    const n = r.getShaderParameter(e, r.COMPILE_STATUS)
      , i = r.getShaderInfoLog(e).trim();
    if (n && i === "")
        return "";
    const s = /ERROR: 0:(\d+)/.exec(i);
    if (s) {
        const a = parseInt(s[1]);
        return t.toUpperCase() + `

` + i + `

` + em(r.getShaderSource(e), a)
    } else
        return i
}
function nm(r, e) {
    const t = tm(e);
    return `vec4 ${r}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`
}
function im(r, e) {
    let t;
    switch (e) {
    case ql:
        t = "Linear";
        break;
    case Yl:
        t = "Reinhard";
        break;
    case Kl:
        t = "OptimizedCineon";
        break;
    case jl:
        t = "ACESFilmic";
        break;
    case Zl:
        t = "AgX";
        break;
    case Jl:
        t = "Neutral";
        break;
    case $l:
        t = "Custom";
        break;
    default:
        console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
        t = "Linear"
    }
    return "vec3 " + r + "( vec3 color ) { return " + t + "ToneMapping( color ); }"
}
function rm(r) {
    return [r.extensionClipCullDistance ? "#extension GL_ANGLE_clip_cull_distance : require" : "", r.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : ""].filter($i).join(`
`)
}
function sm(r) {
    const e = [];
    for (const t in r) {
        const n = r[t];
        n !== !1 && e.push("#define " + t + " " + n)
    }
    return e.join(`
`)
}
function am(r, e) {
    const t = {}
      , n = r.getProgramParameter(e, r.ACTIVE_ATTRIBUTES);
    for (let i = 0; i < n; i++) {
        const s = r.getActiveAttrib(e, i)
          , a = s.name;
        let o = 1;
        s.type === r.FLOAT_MAT2 && (o = 2),
        s.type === r.FLOAT_MAT3 && (o = 3),
        s.type === r.FLOAT_MAT4 && (o = 4),
        t[a] = {
            type: s.type,
            location: r.getAttribLocation(e, a),
            locationSize: o
        }
    }
    return t
}
function $i(r) {
    return r !== ""
}
function Vo(r, e) {
    const t = e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
    return r.replace(/NUM_DIR_LIGHTS/g, e.numDirLights).replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g, t).replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g, e.numPointLights).replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows)
}
function Go(r, e) {
    return r.replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g, e.numClippingPlanes - e.numClipIntersection)
}
const om = /^[ \t]*#include +<([\w\d./]+)>/gm;
function js(r) {
    return r.replace(om, lm)
}
const cm = new Map;
function lm(r, e) {
    let t = Ae[e];
    if (t === void 0) {
        const n = cm.get(e);
        if (n !== void 0)
            t = Ae[n],
            console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.', e, n);
        else
            throw new Error("Can not resolve #include <" + e + ">")
    }
    return js(t)
}
const hm = /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function Wo(r) {
    return r.replace(hm, um)
}
function um(r, e, t, n) {
    let i = "";
    for (let s = parseInt(e); s < parseInt(t); s++)
        i += n.replace(/\[\s*i\s*\]/g, "[ " + s + " ]").replace(/UNROLLED_LOOP_INDEX/g, s);
    return i
}
function Xo(r) {
    let e = `precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;
    return r.precision === "highp" ? e += `
#define HIGH_PRECISION` : r.precision === "mediump" ? e += `
#define MEDIUM_PRECISION` : r.precision === "lowp" && (e += `
#define LOW_PRECISION`),
    e
}
function dm(r) {
    let e = "SHADOWMAP_TYPE_BASIC";
    return r.shadowMapType === xc ? e = "SHADOWMAP_TYPE_PCF" : r.shadowMapType === ta ? e = "SHADOWMAP_TYPE_PCF_SOFT" : r.shadowMapType === ln && (e = "SHADOWMAP_TYPE_VSM"),
    e
}
function fm(r) {
    let e = "ENVMAP_TYPE_CUBE";
    if (r.envMap)
        switch (r.envMapMode) {
        case Ei:
        case Ti:
            e = "ENVMAP_TYPE_CUBE";
            break;
        case jr:
            e = "ENVMAP_TYPE_CUBE_UV";
            break
        }
    return e
}
function pm(r) {
    let e = "ENVMAP_MODE_REFLECTION";
    if (r.envMap)
        switch (r.envMapMode) {
        case Ti:
            e = "ENVMAP_MODE_REFRACTION";
            break
        }
    return e
}
function mm(r) {
    let e = "ENVMAP_BLENDING_NONE";
    if (r.envMap)
        switch (r.combine) {
        case vc:
            e = "ENVMAP_BLENDING_MULTIPLY";
            break;
        case Wl:
            e = "ENVMAP_BLENDING_MIX";
            break;
        case Xl:
            e = "ENVMAP_BLENDING_ADD";
            break
        }
    return e
}
function gm(r) {
    const e = r.envMapCubeUVHeight;
    if (e === null)
        return null;
    const t = Math.log2(e) - 2
      , n = 1 / e;
    return {
        texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 7 * 16)),
        texelHeight: n,
        maxMip: t
    }
}
function _m(r, e, t, n) {
    const i = r.getContext()
      , s = t.defines;
    let a = t.vertexShader
      , o = t.fragmentShader;
    const c = dm(t)
      , l = fm(t)
      , h = pm(t)
      , u = mm(t)
      , d = gm(t)
      , m = rm(t)
      , g = sm(s)
      , _ = i.createProgram();
    let p, f, T = t.glslVersion ? "#version " + t.glslVersion + `
` : "";
    t.isRawShaderMaterial ? (p = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g].filter($i).join(`
`),
    p.length > 0 && (p += `
`),
    f = ["#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g].filter($i).join(`
`),
    f.length > 0 && (f += `
`)) : (p = [Xo(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g, t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "", t.batching ? "#define USE_BATCHING" : "", t.instancing ? "#define USE_INSTANCING" : "", t.instancingColor ? "#define USE_INSTANCING_COLOR" : "", t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "", t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.map ? "#define USE_MAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + h : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.mapUv ? "#define MAP_UV " + t.mapUv : "", t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "", t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "", t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "", t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "", t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "", t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "", t.displacementMapUv ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv : "", t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "", t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "", t.anisotropyMapUv ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv : "", t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "", t.clearcoatNormalMapUv ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv : "", t.clearcoatRoughnessMapUv ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv : "", t.iridescenceMapUv ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv : "", t.iridescenceThicknessMapUv ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv : "", t.sheenColorMapUv ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv : "", t.sheenRoughnessMapUv ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv : "", t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "", t.specularColorMapUv ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv : "", t.specularIntensityMapUv ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv : "", t.transmissionMapUv ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv : "", t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "", t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "", t.vertexColors ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.skinning ? "#define USE_SKINNING" : "", t.morphTargets ? "#define USE_MORPHTARGETS" : "", t.morphNormals && t.flatShading === !1 ? "#define USE_MORPHNORMALS" : "", t.morphColors ? "#define USE_MORPHCOLORS" : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE" : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride : "", t.morphTargetsCount > 0 ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + c : "", t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.useLegacyLights ? "#define LEGACY_LIGHTS" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", "uniform mat4 modelMatrix;", "uniform mat4 modelViewMatrix;", "uniform mat4 projectionMatrix;", "uniform mat4 viewMatrix;", "uniform mat3 normalMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", "#ifdef USE_INSTANCING", "	attribute mat4 instanceMatrix;", "#endif", "#ifdef USE_INSTANCING_COLOR", "	attribute vec3 instanceColor;", "#endif", "#ifdef USE_INSTANCING_MORPH", "	uniform sampler2D morphTexture;", "#endif", "attribute vec3 position;", "attribute vec3 normal;", "attribute vec2 uv;", "#ifdef USE_UV1", "	attribute vec2 uv1;", "#endif", "#ifdef USE_UV2", "	attribute vec2 uv2;", "#endif", "#ifdef USE_UV3", "	attribute vec2 uv3;", "#endif", "#ifdef USE_TANGENT", "	attribute vec4 tangent;", "#endif", "#if defined( USE_COLOR_ALPHA )", "	attribute vec4 color;", "#elif defined( USE_COLOR )", "	attribute vec3 color;", "#endif", "#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )", "	attribute vec3 morphTarget0;", "	attribute vec3 morphTarget1;", "	attribute vec3 morphTarget2;", "	attribute vec3 morphTarget3;", "	#ifdef USE_MORPHNORMALS", "		attribute vec3 morphNormal0;", "		attribute vec3 morphNormal1;", "		attribute vec3 morphNormal2;", "		attribute vec3 morphNormal3;", "	#else", "		attribute vec3 morphTarget4;", "		attribute vec3 morphTarget5;", "		attribute vec3 morphTarget6;", "		attribute vec3 morphTarget7;", "	#endif", "#endif", "#ifdef USE_SKINNING", "	attribute vec4 skinIndex;", "	attribute vec4 skinWeight;", "#endif", `
`].filter($i).join(`
`),
    f = [Xo(t), "#define SHADER_TYPE " + t.shaderType, "#define SHADER_NAME " + t.shaderName, g, t.useFog && t.fog ? "#define USE_FOG" : "", t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "", t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "", t.map ? "#define USE_MAP" : "", t.matcap ? "#define USE_MATCAP" : "", t.envMap ? "#define USE_ENVMAP" : "", t.envMap ? "#define " + l : "", t.envMap ? "#define " + h : "", t.envMap ? "#define " + u : "", d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "", d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "", d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "", t.lightMap ? "#define USE_LIGHTMAP" : "", t.aoMap ? "#define USE_AOMAP" : "", t.bumpMap ? "#define USE_BUMPMAP" : "", t.normalMap ? "#define USE_NORMALMAP" : "", t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "", t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "", t.emissiveMap ? "#define USE_EMISSIVEMAP" : "", t.anisotropy ? "#define USE_ANISOTROPY" : "", t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "", t.clearcoat ? "#define USE_CLEARCOAT" : "", t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "", t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "", t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "", t.dispersion ? "#define USE_DISPERSION" : "", t.iridescence ? "#define USE_IRIDESCENCE" : "", t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "", t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "", t.specularMap ? "#define USE_SPECULARMAP" : "", t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "", t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "", t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "", t.metalnessMap ? "#define USE_METALNESSMAP" : "", t.alphaMap ? "#define USE_ALPHAMAP" : "", t.alphaTest ? "#define USE_ALPHATEST" : "", t.alphaHash ? "#define USE_ALPHAHASH" : "", t.sheen ? "#define USE_SHEEN" : "", t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "", t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "", t.transmission ? "#define USE_TRANSMISSION" : "", t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "", t.thicknessMap ? "#define USE_THICKNESSMAP" : "", t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "", t.vertexColors || t.instancingColor ? "#define USE_COLOR" : "", t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "", t.vertexUv1s ? "#define USE_UV1" : "", t.vertexUv2s ? "#define USE_UV2" : "", t.vertexUv3s ? "#define USE_UV3" : "", t.pointsUvs ? "#define USE_POINTS_UV" : "", t.gradientMap ? "#define USE_GRADIENTMAP" : "", t.flatShading ? "#define FLAT_SHADED" : "", t.doubleSided ? "#define DOUBLE_SIDED" : "", t.flipSided ? "#define FLIP_SIDED" : "", t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "", t.shadowMapEnabled ? "#define " + c : "", t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "", t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "", t.useLegacyLights ? "#define LEGACY_LIGHTS" : "", t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "", t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "", "uniform mat4 viewMatrix;", "uniform vec3 cameraPosition;", "uniform bool isOrthographic;", t.toneMapping !== Rn ? "#define TONE_MAPPING" : "", t.toneMapping !== Rn ? Ae.tonemapping_pars_fragment : "", t.toneMapping !== Rn ? im("toneMapping", t.toneMapping) : "", t.dithering ? "#define DITHERING" : "", t.opaque ? "#define OPAQUE" : "", Ae.colorspace_pars_fragment, nm("linearToOutputTexel", t.outputColorSpace), t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "", `
`].filter($i).join(`
`)),
    a = js(a),
    a = Vo(a, t),
    a = Go(a, t),
    o = js(o),
    o = Vo(o, t),
    o = Go(o, t),
    a = Wo(a),
    o = Wo(o),
    t.isRawShaderMaterial !== !0 && (T = `#version 300 es
`,
    p = [m, "#define attribute in", "#define varying out", "#define texture2D texture"].join(`
`) + `
` + p,
    f = ["#define varying in", t.glslVersion === so ? "" : "layout(location = 0) out highp vec4 pc_fragColor;", t.glslVersion === so ? "" : "#define gl_FragColor pc_fragColor", "#define gl_FragDepthEXT gl_FragDepth", "#define texture2D texture", "#define textureCube texture", "#define texture2DProj textureProj", "#define texture2DLodEXT textureLod", "#define texture2DProjLodEXT textureProjLod", "#define textureCubeLodEXT textureLod", "#define texture2DGradEXT textureGrad", "#define texture2DProjGradEXT textureProjGrad", "#define textureCubeGradEXT textureGrad"].join(`
`) + `
` + f);
    const y = T + p + a
      , E = T + f + o
      , U = Ho(i, i.VERTEX_SHADER, y)
      , w = Ho(i, i.FRAGMENT_SHADER, E);
    i.attachShader(_, U),
    i.attachShader(_, w),
    t.index0AttributeName !== void 0 ? i.bindAttribLocation(_, 0, t.index0AttributeName) : t.morphTargets === !0 && i.bindAttribLocation(_, 0, "position"),
    i.linkProgram(_);
    function b(D) {
        if (r.debug.checkShaderErrors) {
            const V = i.getProgramInfoLog(_).trim()
              , R = i.getShaderInfoLog(U).trim()
              , B = i.getShaderInfoLog(w).trim();
            let G = !0
              , q = !0;
            if (i.getProgramParameter(_, i.LINK_STATUS) === !1)
                if (G = !1,
                typeof r.debug.onShaderError == "function")
                    r.debug.onShaderError(i, _, U, w);
                else {
                    const J = ko(i, U, "vertex")
                      , H = ko(i, w, "fragment");
                    console.error("THREE.WebGLProgram: Shader Error " + i.getError() + " - VALIDATE_STATUS " + i.getProgramParameter(_, i.VALIDATE_STATUS) + `

Material Name: ` + D.name + `
Material Type: ` + D.type + `

Program Info Log: ` + V + `
` + J + `
` + H)
                }
            else
                V !== "" ? console.warn("THREE.WebGLProgram: Program Info Log:", V) : (R === "" || B === "") && (q = !1);
            q && (D.diagnostics = {
                runnable: G,
                programLog: V,
                vertexShader: {
                    log: R,
                    prefix: p
                },
                fragmentShader: {
                    log: B,
                    prefix: f
                }
            })
        }
        i.deleteShader(U),
        i.deleteShader(w),
        L = new zr(i,_),
        M = am(i, _)
    }
    let L;
    this.getUniforms = function() {
        return L === void 0 && b(this),
        L
    }
    ;
    let M;
    this.getAttributes = function() {
        return M === void 0 && b(this),
        M
    }
    ;
    let x = t.rendererExtensionParallelShaderCompile === !1;
    return this.isReady = function() {
        return x === !1 && (x = i.getProgramParameter(_, Jp)),
        x
    }
    ,
    this.destroy = function() {
        n.releaseStatesOfProgram(this),
        i.deleteProgram(_),
        this.program = void 0
    }
    ,
    this.type = t.shaderType,
    this.name = t.shaderName,
    this.id = Qp++,
    this.cacheKey = e,
    this.usedTimes = 1,
    this.program = _,
    this.vertexShader = U,
    this.fragmentShader = w,
    this
}
let xm = 0;
class vm {
    constructor() {
        this.shaderCache = new Map,
        this.materialCache = new Map
    }
    update(e) {
        const t = e.vertexShader
          , n = e.fragmentShader
          , i = this._getShaderStage(t)
          , s = this._getShaderStage(n)
          , a = this._getShaderCacheForMaterial(e);
        return a.has(i) === !1 && (a.add(i),
        i.usedTimes++),
        a.has(s) === !1 && (a.add(s),
        s.usedTimes++),
        this
    }
    remove(e) {
        const t = this.materialCache.get(e);
        for (const n of t)
            n.usedTimes--,
            n.usedTimes === 0 && this.shaderCache.delete(n.code);
        return this.materialCache.delete(e),
        this
    }
    getVertexShaderID(e) {
        return this._getShaderStage(e.vertexShader).id
    }
    getFragmentShaderID(e) {
        return this._getShaderStage(e.fragmentShader).id
    }
    dispose() {
        this.shaderCache.clear(),
        this.materialCache.clear()
    }
    _getShaderCacheForMaterial(e) {
        const t = this.materialCache;
        let n = t.get(e);
        return n === void 0 && (n = new Set,
        t.set(e, n)),
        n
    }
    _getShaderStage(e) {
        const t = this.shaderCache;
        let n = t.get(e);
        return n === void 0 && (n = new Mm(e),
        t.set(e, n)),
        n
    }
}
class Mm {
    constructor(e) {
        this.id = xm++,
        this.code = e,
        this.usedTimes = 0
    }
}
function Sm(r, e, t, n, i, s, a) {
    const o = new Oc
      , c = new vm
      , l = new Set
      , h = []
      , u = i.logarithmicDepthBuffer
      , d = i.vertexTextures;
    let m = i.precision;
    const g = {
        MeshDepthMaterial: "depth",
        MeshDistanceMaterial: "distanceRGBA",
        MeshNormalMaterial: "normal",
        MeshBasicMaterial: "basic",
        MeshLambertMaterial: "lambert",
        MeshPhongMaterial: "phong",
        MeshToonMaterial: "toon",
        MeshStandardMaterial: "physical",
        MeshPhysicalMaterial: "physical",
        MeshMatcapMaterial: "matcap",
        LineBasicMaterial: "basic",
        LineDashedMaterial: "dashed",
        PointsMaterial: "points",
        ShadowMaterial: "shadow",
        SpriteMaterial: "sprite"
    };
    function _(M) {
        return l.add(M),
        M === 0 ? "uv" : `uv${M}`
    }
    function p(M, x, D, V, R) {
        const B = V.fog
          , G = R.geometry
          , q = M.isMeshStandardMaterial ? V.environment : null
          , J = (M.isMeshStandardMaterial ? t : e).get(M.envMap || q)
          , H = J && J.mapping === jr ? J.image.height : null
          , Q = g[M.type];
        M.precision !== null && (m = i.getMaxPrecision(M.precision),
        m !== M.precision && console.warn("THREE.WebGLProgram.getParameters:", M.precision, "not supported, using", m, "instead."));
        const $ = G.morphAttributes.position || G.morphAttributes.normal || G.morphAttributes.color
          , de = $ !== void 0 ? $.length : 0;
        let Me = 0;
        G.morphAttributes.position !== void 0 && (Me = 1),
        G.morphAttributes.normal !== void 0 && (Me = 2),
        G.morphAttributes.color !== void 0 && (Me = 3);
        let Ne, W, ee, he;
        if (Q) {
            const Xe = Vt[Q];
            Ne = Xe.vertexShader,
            W = Xe.fragmentShader
        } else
            Ne = M.vertexShader,
            W = M.fragmentShader,
            c.update(M),
            ee = c.getVertexShaderID(M),
            he = c.getFragmentShaderID(M);
        const ie = r.getRenderTarget()
          , Fe = R.isInstancedMesh === !0
          , Oe = R.isBatchedMesh === !0
          , N = !!M.map
          , $e = !!M.matcap
          , ge = !!J
          , je = !!M.aoMap
          , ve = !!M.lightMap
          , ze = !!M.bumpMap
          , Pe = !!M.normalMap
          , He = !!M.displacementMap
          , tt = !!M.emissiveMap
          , A = !!M.metalnessMap
          , v = !!M.roughnessMap
          , k = M.anisotropy > 0
          , Y = M.clearcoat > 0
          , j = M.dispersion > 0
          , Z = M.iridescence > 0
          , me = M.sheen > 0
          , oe = M.transmission > 0
          , ae = k && !!M.anisotropyMap
          , Re = Y && !!M.clearcoatMap
          , te = Y && !!M.clearcoatNormalMap
          , pe = Y && !!M.clearcoatRoughnessMap
          , ke = Z && !!M.iridescenceMap
          , _e = Z && !!M.iridescenceThicknessMap
          , le = me && !!M.sheenColorMap
          , Ce = me && !!M.sheenRoughnessMap
          , Be = !!M.specularMap
          , it = !!M.specularColorMap
          , Le = !!M.specularIntensityMap
          , C = oe && !!M.transmissionMap
          , K = oe && !!M.thicknessMap
          , X = !!M.gradientMap
          , re = !!M.alphaMap
          , ce = M.alphaTest > 0
          , Ve = !!M.alphaHash
          , Ze = !!M.extensions;
        let nt = Rn;
        M.toneMapped && (ie === null || ie.isXRRenderTarget === !0) && (nt = r.toneMapping);
        const ft = {
            shaderID: Q,
            shaderType: M.type,
            shaderName: M.name,
            vertexShader: Ne,
            fragmentShader: W,
            defines: M.defines,
            customVertexShaderID: ee,
            customFragmentShaderID: he,
            isRawShaderMaterial: M.isRawShaderMaterial === !0,
            glslVersion: M.glslVersion,
            precision: m,
            batching: Oe,
            instancing: Fe,
            instancingColor: Fe && R.instanceColor !== null,
            instancingMorph: Fe && R.morphTexture !== null,
            supportsVertexTextures: d,
            outputColorSpace: ie === null ? r.outputColorSpace : ie.isXRRenderTarget === !0 ? ie.texture.colorSpace : ut,
            alphaToCoverage: !!M.alphaToCoverage,
            map: N,
            matcap: $e,
            envMap: ge,
            envMapMode: ge && J.mapping,
            envMapCubeUVHeight: H,
            aoMap: je,
            lightMap: ve,
            bumpMap: ze,
            normalMap: Pe,
            displacementMap: d && He,
            emissiveMap: tt,
            normalMapObjectSpace: Pe && M.normalMapType === fh,
            normalMapTangentSpace: Pe && M.normalMapType === Pc,
            metalnessMap: A,
            roughnessMap: v,
            anisotropy: k,
            anisotropyMap: ae,
            clearcoat: Y,
            clearcoatMap: Re,
            clearcoatNormalMap: te,
            clearcoatRoughnessMap: pe,
            dispersion: j,
            iridescence: Z,
            iridescenceMap: ke,
            iridescenceThicknessMap: _e,
            sheen: me,
            sheenColorMap: le,
            sheenRoughnessMap: Ce,
            specularMap: Be,
            specularColorMap: it,
            specularIntensityMap: Le,
            transmission: oe,
            transmissionMap: C,
            thicknessMap: K,
            gradientMap: X,
            opaque: M.transparent === !1 && M.blending === _i && M.alphaToCoverage === !1,
            alphaMap: re,
            alphaTest: ce,
            alphaHash: Ve,
            combine: M.combine,
            mapUv: N && _(M.map.channel),
            aoMapUv: je && _(M.aoMap.channel),
            lightMapUv: ve && _(M.lightMap.channel),
            bumpMapUv: ze && _(M.bumpMap.channel),
            normalMapUv: Pe && _(M.normalMap.channel),
            displacementMapUv: He && _(M.displacementMap.channel),
            emissiveMapUv: tt && _(M.emissiveMap.channel),
            metalnessMapUv: A && _(M.metalnessMap.channel),
            roughnessMapUv: v && _(M.roughnessMap.channel),
            anisotropyMapUv: ae && _(M.anisotropyMap.channel),
            clearcoatMapUv: Re && _(M.clearcoatMap.channel),
            clearcoatNormalMapUv: te && _(M.clearcoatNormalMap.channel),
            clearcoatRoughnessMapUv: pe && _(M.clearcoatRoughnessMap.channel),
            iridescenceMapUv: ke && _(M.iridescenceMap.channel),
            iridescenceThicknessMapUv: _e && _(M.iridescenceThicknessMap.channel),
            sheenColorMapUv: le && _(M.sheenColorMap.channel),
            sheenRoughnessMapUv: Ce && _(M.sheenRoughnessMap.channel),
            specularMapUv: Be && _(M.specularMap.channel),
            specularColorMapUv: it && _(M.specularColorMap.channel),
            specularIntensityMapUv: Le && _(M.specularIntensityMap.channel),
            transmissionMapUv: C && _(M.transmissionMap.channel),
            thicknessMapUv: K && _(M.thicknessMap.channel),
            alphaMapUv: re && _(M.alphaMap.channel),
            vertexTangents: !!G.attributes.tangent && (Pe || k),
            vertexColors: M.vertexColors,
            vertexAlphas: M.vertexColors === !0 && !!G.attributes.color && G.attributes.color.itemSize === 4,
            pointsUvs: R.isPoints === !0 && !!G.attributes.uv && (N || re),
            fog: !!B,
            useFog: M.fog === !0,
            fogExp2: !!B && B.isFogExp2,
            flatShading: M.flatShading === !0,
            sizeAttenuation: M.sizeAttenuation === !0,
            logarithmicDepthBuffer: u,
            skinning: R.isSkinnedMesh === !0,
            morphTargets: G.morphAttributes.position !== void 0,
            morphNormals: G.morphAttributes.normal !== void 0,
            morphColors: G.morphAttributes.color !== void 0,
            morphTargetsCount: de,
            morphTextureStride: Me,
            numDirLights: x.directional.length,
            numPointLights: x.point.length,
            numSpotLights: x.spot.length,
            numSpotLightMaps: x.spotLightMap.length,
            numRectAreaLights: x.rectArea.length,
            numHemiLights: x.hemi.length,
            numDirLightShadows: x.directionalShadowMap.length,
            numPointLightShadows: x.pointShadowMap.length,
            numSpotLightShadows: x.spotShadowMap.length,
            numSpotLightShadowsWithMaps: x.numSpotLightShadowsWithMaps,
            numLightProbes: x.numLightProbes,
            numClippingPlanes: a.numPlanes,
            numClipIntersection: a.numIntersection,
            dithering: M.dithering,
            shadowMapEnabled: r.shadowMap.enabled && D.length > 0,
            shadowMapType: r.shadowMap.type,
            toneMapping: nt,
            useLegacyLights: r._useLegacyLights,
            decodeVideoTexture: N && M.map.isVideoTexture === !0 && We.getTransfer(M.map.colorSpace) === Je,
            premultipliedAlpha: M.premultipliedAlpha,
            doubleSided: M.side === Gt,
            flipSided: M.side === wt,
            useDepthPacking: M.depthPacking >= 0,
            depthPacking: M.depthPacking || 0,
            index0AttributeName: M.index0AttributeName,
            extensionClipCullDistance: Ze && M.extensions.clipCullDistance === !0 && n.has("WEBGL_clip_cull_distance"),
            extensionMultiDraw: Ze && M.extensions.multiDraw === !0 && n.has("WEBGL_multi_draw"),
            rendererExtensionParallelShaderCompile: n.has("KHR_parallel_shader_compile"),
            customProgramCacheKey: M.customProgramCacheKey()
        };
        return ft.vertexUv1s = l.has(1),
        ft.vertexUv2s = l.has(2),
        ft.vertexUv3s = l.has(3),
        l.clear(),
        ft
    }
    function f(M) {
        const x = [];
        if (M.shaderID ? x.push(M.shaderID) : (x.push(M.customVertexShaderID),
        x.push(M.customFragmentShaderID)),
        M.defines !== void 0)
            for (const D in M.defines)
                x.push(D),
                x.push(M.defines[D]);
        return M.isRawShaderMaterial === !1 && (T(x, M),
        y(x, M),
        x.push(r.outputColorSpace)),
        x.push(M.customProgramCacheKey),
        x.join()
    }
    function T(M, x) {
        M.push(x.precision),
        M.push(x.outputColorSpace),
        M.push(x.envMapMode),
        M.push(x.envMapCubeUVHeight),
        M.push(x.mapUv),
        M.push(x.alphaMapUv),
        M.push(x.lightMapUv),
        M.push(x.aoMapUv),
        M.push(x.bumpMapUv),
        M.push(x.normalMapUv),
        M.push(x.displacementMapUv),
        M.push(x.emissiveMapUv),
        M.push(x.metalnessMapUv),
        M.push(x.roughnessMapUv),
        M.push(x.anisotropyMapUv),
        M.push(x.clearcoatMapUv),
        M.push(x.clearcoatNormalMapUv),
        M.push(x.clearcoatRoughnessMapUv),
        M.push(x.iridescenceMapUv),
        M.push(x.iridescenceThicknessMapUv),
        M.push(x.sheenColorMapUv),
        M.push(x.sheenRoughnessMapUv),
        M.push(x.specularMapUv),
        M.push(x.specularColorMapUv),
        M.push(x.specularIntensityMapUv),
        M.push(x.transmissionMapUv),
        M.push(x.thicknessMapUv),
        M.push(x.combine),
        M.push(x.fogExp2),
        M.push(x.sizeAttenuation),
        M.push(x.morphTargetsCount),
        M.push(x.morphAttributeCount),
        M.push(x.numDirLights),
        M.push(x.numPointLights),
        M.push(x.numSpotLights),
        M.push(x.numSpotLightMaps),
        M.push(x.numHemiLights),
        M.push(x.numRectAreaLights),
        M.push(x.numDirLightShadows),
        M.push(x.numPointLightShadows),
        M.push(x.numSpotLightShadows),
        M.push(x.numSpotLightShadowsWithMaps),
        M.push(x.numLightProbes),
        M.push(x.shadowMapType),
        M.push(x.toneMapping),
        M.push(x.numClippingPlanes),
        M.push(x.numClipIntersection),
        M.push(x.depthPacking)
    }
    function y(M, x) {
        o.disableAll(),
        x.supportsVertexTextures && o.enable(0),
        x.instancing && o.enable(1),
        x.instancingColor && o.enable(2),
        x.instancingMorph && o.enable(3),
        x.matcap && o.enable(4),
        x.envMap && o.enable(5),
        x.normalMapObjectSpace && o.enable(6),
        x.normalMapTangentSpace && o.enable(7),
        x.clearcoat && o.enable(8),
        x.iridescence && o.enable(9),
        x.alphaTest && o.enable(10),
        x.vertexColors && o.enable(11),
        x.vertexAlphas && o.enable(12),
        x.vertexUv1s && o.enable(13),
        x.vertexUv2s && o.enable(14),
        x.vertexUv3s && o.enable(15),
        x.vertexTangents && o.enable(16),
        x.anisotropy && o.enable(17),
        x.alphaHash && o.enable(18),
        x.batching && o.enable(19),
        x.dispersion && o.enable(20),
        M.push(o.mask),
        o.disableAll(),
        x.fog && o.enable(0),
        x.useFog && o.enable(1),
        x.flatShading && o.enable(2),
        x.logarithmicDepthBuffer && o.enable(3),
        x.skinning && o.enable(4),
        x.morphTargets && o.enable(5),
        x.morphNormals && o.enable(6),
        x.morphColors && o.enable(7),
        x.premultipliedAlpha && o.enable(8),
        x.shadowMapEnabled && o.enable(9),
        x.useLegacyLights && o.enable(10),
        x.doubleSided && o.enable(11),
        x.flipSided && o.enable(12),
        x.useDepthPacking && o.enable(13),
        x.dithering && o.enable(14),
        x.transmission && o.enable(15),
        x.sheen && o.enable(16),
        x.opaque && o.enable(17),
        x.pointsUvs && o.enable(18),
        x.decodeVideoTexture && o.enable(19),
        x.alphaToCoverage && o.enable(20),
        M.push(o.mask)
    }
    function E(M) {
        const x = g[M.type];
        let D;
        if (x) {
            const V = Vt[x];
            D = ru.clone(V.uniforms)
        } else
            D = M.uniforms;
        return D
    }
    function U(M, x) {
        let D;
        for (let V = 0, R = h.length; V < R; V++) {
            const B = h[V];
            if (B.cacheKey === x) {
                D = B,
                ++D.usedTimes;
                break
            }
        }
        return D === void 0 && (D = new _m(r,x,M,s),
        h.push(D)),
        D
    }
    function w(M) {
        if (--M.usedTimes === 0) {
            const x = h.indexOf(M);
            h[x] = h[h.length - 1],
            h.pop(),
            M.destroy()
        }
    }
    function b(M) {
        c.remove(M)
    }
    function L() {
        c.dispose()
    }
    return {
        getParameters: p,
        getProgramCacheKey: f,
        getUniforms: E,
        acquireProgram: U,
        releaseProgram: w,
        releaseShaderCache: b,
        programs: h,
        dispose: L
    }
}
function ym() {
    let r = new WeakMap;
    function e(s) {
        let a = r.get(s);
        return a === void 0 && (a = {},
        r.set(s, a)),
        a
    }
    function t(s) {
        r.delete(s)
    }
    function n(s, a, o) {
        r.get(s)[a] = o
    }
    function i() {
        r = new WeakMap
    }
    return {
        get: e,
        remove: t,
        update: n,
        dispose: i
    }
}
function Em(r, e) {
    return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.material.id !== e.material.id ? r.material.id - e.material.id : r.z !== e.z ? r.z - e.z : r.id - e.id
}
function qo(r, e) {
    return r.groupOrder !== e.groupOrder ? r.groupOrder - e.groupOrder : r.renderOrder !== e.renderOrder ? r.renderOrder - e.renderOrder : r.z !== e.z ? e.z - r.z : r.id - e.id
}
function Yo() {
    const r = [];
    let e = 0;
    const t = []
      , n = []
      , i = [];
    function s() {
        e = 0,
        t.length = 0,
        n.length = 0,
        i.length = 0
    }
    function a(u, d, m, g, _, p) {
        let f = r[e];
        return f === void 0 ? (f = {
            id: u.id,
            object: u,
            geometry: d,
            material: m,
            groupOrder: g,
            renderOrder: u.renderOrder,
            z: _,
            group: p
        },
        r[e] = f) : (f.id = u.id,
        f.object = u,
        f.geometry = d,
        f.material = m,
        f.groupOrder = g,
        f.renderOrder = u.renderOrder,
        f.z = _,
        f.group = p),
        e++,
        f
    }
    function o(u, d, m, g, _, p) {
        const f = a(u, d, m, g, _, p);
        m.transmission > 0 ? n.push(f) : m.transparent === !0 ? i.push(f) : t.push(f)
    }
    function c(u, d, m, g, _, p) {
        const f = a(u, d, m, g, _, p);
        m.transmission > 0 ? n.unshift(f) : m.transparent === !0 ? i.unshift(f) : t.unshift(f)
    }
    function l(u, d) {
        t.length > 1 && t.sort(u || Em),
        n.length > 1 && n.sort(d || qo),
        i.length > 1 && i.sort(d || qo)
    }
    function h() {
        for (let u = e, d = r.length; u < d; u++) {
            const m = r[u];
            if (m.id === null)
                break;
            m.id = null,
            m.object = null,
            m.geometry = null,
            m.material = null,
            m.group = null
        }
    }
    return {
        opaque: t,
        transmissive: n,
        transparent: i,
        init: s,
        push: o,
        unshift: c,
        finish: h,
        sort: l
    }
}
function Tm() {
    let r = new WeakMap;
    function e(n, i) {
        const s = r.get(n);
        let a;
        return s === void 0 ? (a = new Yo,
        r.set(n, [a])) : i >= s.length ? (a = new Yo,
        s.push(a)) : a = s[i],
        a
    }
    function t() {
        r = new WeakMap
    }
    return {
        get: e,
        dispose: t
    }
}
function Am() {
    const r = {};
    return {
        get: function(e) {
            if (r[e.id] !== void 0)
                return r[e.id];
            let t;
            switch (e.type) {
            case "DirectionalLight":
                t = {
                    direction: new P,
                    color: new Se
                };
                break;
            case "SpotLight":
                t = {
                    position: new P,
                    direction: new P,
                    color: new Se,
                    distance: 0,
                    coneCos: 0,
                    penumbraCos: 0,
                    decay: 0
                };
                break;
            case "PointLight":
                t = {
                    position: new P,
                    color: new Se,
                    distance: 0,
                    decay: 0
                };
                break;
            case "HemisphereLight":
                t = {
                    direction: new P,
                    skyColor: new Se,
                    groundColor: new Se
                };
                break;
            case "RectAreaLight":
                t = {
                    color: new Se,
                    position: new P,
                    halfWidth: new P,
                    halfHeight: new P
                };
                break
            }
            return r[e.id] = t,
            t
        }
    }
}
function bm() {
    const r = {};
    return {
        get: function(e) {
            if (r[e.id] !== void 0)
                return r[e.id];
            let t;
            switch (e.type) {
            case "DirectionalLight":
                t = {
                    shadowBias: 0,
                    shadowNormalBias: 0,
                    shadowRadius: 1,
                    shadowMapSize: new Ue
                };
                break;
            case "SpotLight":
                t = {
                    shadowBias: 0,
                    shadowNormalBias: 0,
                    shadowRadius: 1,
                    shadowMapSize: new Ue
                };
                break;
            case "PointLight":
                t = {
                    shadowBias: 0,
                    shadowNormalBias: 0,
                    shadowRadius: 1,
                    shadowMapSize: new Ue,
                    shadowCameraNear: 1,
                    shadowCameraFar: 1e3
                };
                break
            }
            return r[e.id] = t,
            t
        }
    }
}
let wm = 0;
function Rm(r, e) {
    return (e.castShadow ? 2 : 0) - (r.castShadow ? 2 : 0) + (e.map ? 1 : 0) - (r.map ? 1 : 0)
}
function Cm(r) {
    const e = new Am
      , t = bm()
      , n = {
        version: 0,
        hash: {
            directionalLength: -1,
            pointLength: -1,
            spotLength: -1,
            rectAreaLength: -1,
            hemiLength: -1,
            numDirectionalShadows: -1,
            numPointShadows: -1,
            numSpotShadows: -1,
            numSpotMaps: -1,
            numLightProbes: -1
        },
        ambient: [0, 0, 0],
        probe: [],
        directional: [],
        directionalShadow: [],
        directionalShadowMap: [],
        directionalShadowMatrix: [],
        spot: [],
        spotLightMap: [],
        spotShadow: [],
        spotShadowMap: [],
        spotLightMatrix: [],
        rectArea: [],
        rectAreaLTC1: null,
        rectAreaLTC2: null,
        point: [],
        pointShadow: [],
        pointShadowMap: [],
        pointShadowMatrix: [],
        hemi: [],
        numSpotLightShadowsWithMaps: 0,
        numLightProbes: 0
    };
    for (let l = 0; l < 9; l++)
        n.probe.push(new P);
    const i = new P
      , s = new we
      , a = new we;
    function o(l, h) {
        let u = 0
          , d = 0
          , m = 0;
        for (let D = 0; D < 9; D++)
            n.probe[D].set(0, 0, 0);
        let g = 0
          , _ = 0
          , p = 0
          , f = 0
          , T = 0
          , y = 0
          , E = 0
          , U = 0
          , w = 0
          , b = 0
          , L = 0;
        l.sort(Rm);
        const M = h === !0 ? Math.PI : 1;
        for (let D = 0, V = l.length; D < V; D++) {
            const R = l[D]
              , B = R.color
              , G = R.intensity
              , q = R.distance
              , J = R.shadow && R.shadow.map ? R.shadow.map.texture : null;
            if (R.isAmbientLight)
                u += B.r * G * M,
                d += B.g * G * M,
                m += B.b * G * M;
            else if (R.isLightProbe) {
                for (let H = 0; H < 9; H++)
                    n.probe[H].addScaledVector(R.sh.coefficients[H], G);
                L++
            } else if (R.isDirectionalLight) {
                const H = e.get(R);
                if (H.color.copy(R.color).multiplyScalar(R.intensity * M),
                R.castShadow) {
                    const Q = R.shadow
                      , $ = t.get(R);
                    $.shadowBias = Q.bias,
                    $.shadowNormalBias = Q.normalBias,
                    $.shadowRadius = Q.radius,
                    $.shadowMapSize = Q.mapSize,
                    n.directionalShadow[g] = $,
                    n.directionalShadowMap[g] = J,
                    n.directionalShadowMatrix[g] = R.shadow.matrix,
                    y++
                }
                n.directional[g] = H,
                g++
            } else if (R.isSpotLight) {
                const H = e.get(R);
                H.position.setFromMatrixPosition(R.matrixWorld),
                H.color.copy(B).multiplyScalar(G * M),
                H.distance = q,
                H.coneCos = Math.cos(R.angle),
                H.penumbraCos = Math.cos(R.angle * (1 - R.penumbra)),
                H.decay = R.decay,
                n.spot[p] = H;
                const Q = R.shadow;
                if (R.map && (n.spotLightMap[w] = R.map,
                w++,
                Q.updateMatrices(R),
                R.castShadow && b++),
                n.spotLightMatrix[p] = Q.matrix,
                R.castShadow) {
                    const $ = t.get(R);
                    $.shadowBias = Q.bias,
                    $.shadowNormalBias = Q.normalBias,
                    $.shadowRadius = Q.radius,
                    $.shadowMapSize = Q.mapSize,
                    n.spotShadow[p] = $,
                    n.spotShadowMap[p] = J,
                    U++
                }
                p++
            } else if (R.isRectAreaLight) {
                const H = e.get(R);
                H.color.copy(B).multiplyScalar(G),
                H.halfWidth.set(R.width * .5, 0, 0),
                H.halfHeight.set(0, R.height * .5, 0),
                n.rectArea[f] = H,
                f++
            } else if (R.isPointLight) {
                const H = e.get(R);
                if (H.color.copy(R.color).multiplyScalar(R.intensity * M),
                H.distance = R.distance,
                H.decay = R.decay,
                R.castShadow) {
                    const Q = R.shadow
                      , $ = t.get(R);
                    $.shadowBias = Q.bias,
                    $.shadowNormalBias = Q.normalBias,
                    $.shadowRadius = Q.radius,
                    $.shadowMapSize = Q.mapSize,
                    $.shadowCameraNear = Q.camera.near,
                    $.shadowCameraFar = Q.camera.far,
                    n.pointShadow[_] = $,
                    n.pointShadowMap[_] = J,
                    n.pointShadowMatrix[_] = R.shadow.matrix,
                    E++
                }
                n.point[_] = H,
                _++
            } else if (R.isHemisphereLight) {
                const H = e.get(R);
                H.skyColor.copy(R.color).multiplyScalar(G * M),
                H.groundColor.copy(R.groundColor).multiplyScalar(G * M),
                n.hemi[T] = H,
                T++
            }
        }
        f > 0 && (r.has("OES_texture_float_linear") === !0 ? (n.rectAreaLTC1 = ne.LTC_FLOAT_1,
        n.rectAreaLTC2 = ne.LTC_FLOAT_2) : (n.rectAreaLTC1 = ne.LTC_HALF_1,
        n.rectAreaLTC2 = ne.LTC_HALF_2)),
        n.ambient[0] = u,
        n.ambient[1] = d,
        n.ambient[2] = m;
        const x = n.hash;
        (x.directionalLength !== g || x.pointLength !== _ || x.spotLength !== p || x.rectAreaLength !== f || x.hemiLength !== T || x.numDirectionalShadows !== y || x.numPointShadows !== E || x.numSpotShadows !== U || x.numSpotMaps !== w || x.numLightProbes !== L) && (n.directional.length = g,
        n.spot.length = p,
        n.rectArea.length = f,
        n.point.length = _,
        n.hemi.length = T,
        n.directionalShadow.length = y,
        n.directionalShadowMap.length = y,
        n.pointShadow.length = E,
        n.pointShadowMap.length = E,
        n.spotShadow.length = U,
        n.spotShadowMap.length = U,
        n.directionalShadowMatrix.length = y,
        n.pointShadowMatrix.length = E,
        n.spotLightMatrix.length = U + w - b,
        n.spotLightMap.length = w,
        n.numSpotLightShadowsWithMaps = b,
        n.numLightProbes = L,
        x.directionalLength = g,
        x.pointLength = _,
        x.spotLength = p,
        x.rectAreaLength = f,
        x.hemiLength = T,
        x.numDirectionalShadows = y,
        x.numPointShadows = E,
        x.numSpotShadows = U,
        x.numSpotMaps = w,
        x.numLightProbes = L,
        n.version = wm++)
    }
    function c(l, h) {
        let u = 0
          , d = 0
          , m = 0
          , g = 0
          , _ = 0;
        const p = h.matrixWorldInverse;
        for (let f = 0, T = l.length; f < T; f++) {
            const y = l[f];
            if (y.isDirectionalLight) {
                const E = n.directional[u];
                E.direction.setFromMatrixPosition(y.matrixWorld),
                i.setFromMatrixPosition(y.target.matrixWorld),
                E.direction.sub(i),
                E.direction.transformDirection(p),
                u++
            } else if (y.isSpotLight) {
                const E = n.spot[m];
                E.position.setFromMatrixPosition(y.matrixWorld),
                E.position.applyMatrix4(p),
                E.direction.setFromMatrixPosition(y.matrixWorld),
                i.setFromMatrixPosition(y.target.matrixWorld),
                E.direction.sub(i),
                E.direction.transformDirection(p),
                m++
            } else if (y.isRectAreaLight) {
                const E = n.rectArea[g];
                E.position.setFromMatrixPosition(y.matrixWorld),
                E.position.applyMatrix4(p),
                a.identity(),
                s.copy(y.matrixWorld),
                s.premultiply(p),
                a.extractRotation(s),
                E.halfWidth.set(y.width * .5, 0, 0),
                E.halfHeight.set(0, y.height * .5, 0),
                E.halfWidth.applyMatrix4(a),
                E.halfHeight.applyMatrix4(a),
                g++
            } else if (y.isPointLight) {
                const E = n.point[d];
                E.position.setFromMatrixPosition(y.matrixWorld),
                E.position.applyMatrix4(p),
                d++
            } else if (y.isHemisphereLight) {
                const E = n.hemi[_];
                E.direction.setFromMatrixPosition(y.matrixWorld),
                E.direction.transformDirection(p),
                _++
            }
        }
    }
    return {
        setup: o,
        setupView: c,
        state: n
    }
}
function Ko(r) {
    const e = new Cm(r)
      , t = []
      , n = [];
    function i(h) {
        l.camera = h,
        t.length = 0,
        n.length = 0
    }
    function s(h) {
        t.push(h)
    }
    function a(h) {
        n.push(h)
    }
    function o(h) {
        e.setup(t, h)
    }
    function c(h) {
        e.setupView(t, h)
    }
    const l = {
        lightsArray: t,
        shadowsArray: n,
        camera: null,
        lights: e,
        transmissionRenderTarget: {}
    };
    return {
        init: i,
        state: l,
        setupLights: o,
        setupLightsView: c,
        pushLight: s,
        pushShadow: a
    }
}
function Lm(r) {
    let e = new WeakMap;
    function t(i, s=0) {
        const a = e.get(i);
        let o;
        return a === void 0 ? (o = new Ko(r),
        e.set(i, [o])) : s >= a.length ? (o = new Ko(r),
        a.push(o)) : o = a[s],
        o
    }
    function n() {
        e = new WeakMap
    }
    return {
        get: t,
        dispose: n
    }
}
class Pm extends Yt {
    constructor(e) {
        super(),
        this.isMeshDepthMaterial = !0,
        this.type = "MeshDepthMaterial",
        this.depthPacking = uh,
        this.map = null,
        this.alphaMap = null,
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.depthPacking = e.depthPacking,
        this.map = e.map,
        this.alphaMap = e.alphaMap,
        this.displacementMap = e.displacementMap,
        this.displacementScale = e.displacementScale,
        this.displacementBias = e.displacementBias,
        this.wireframe = e.wireframe,
        this.wireframeLinewidth = e.wireframeLinewidth,
        this
    }
}
class Im extends Yt {
    constructor(e) {
        super(),
        this.isMeshDistanceMaterial = !0,
        this.type = "MeshDistanceMaterial",
        this.map = null,
        this.alphaMap = null,
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.map = e.map,
        this.alphaMap = e.alphaMap,
        this.displacementMap = e.displacementMap,
        this.displacementScale = e.displacementScale,
        this.displacementBias = e.displacementBias,
        this
    }
}
const Dm = `void main() {
	gl_Position = vec4( position, 1.0 );
}`
  , Um = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function Nm(r, e, t) {
    let n = new ra;
    const i = new Ue
      , s = new Ue
      , a = new Ke
      , o = new Pm({
        depthPacking: dh
    })
      , c = new Im
      , l = {}
      , h = t.maxTextureSize
      , u = {
        [pn]: wt,
        [wt]: pn,
        [Gt]: Gt
    }
      , d = new Ln({
        defines: {
            VSM_SAMPLES: 8
        },
        uniforms: {
            shadow_pass: {
                value: null
            },
            resolution: {
                value: new Ue
            },
            radius: {
                value: 4
            }
        },
        vertexShader: Dm,
        fragmentShader: Um
    })
      , m = d.clone();
    m.defines.HORIZONTAL_PASS = 1;
    const g = new $t;
    g.setAttribute("position", new Tt(new Float32Array([-1, -1, .5, 3, -1, .5, -1, 3, .5]),3));
    const _ = new At(g,d)
      , p = this;
    this.enabled = !1,
    this.autoUpdate = !0,
    this.needsUpdate = !1,
    this.type = xc;
    let f = this.type;
    this.render = function(w, b, L) {
        if (p.enabled === !1 || p.autoUpdate === !1 && p.needsUpdate === !1 || w.length === 0)
            return;
        const M = r.getRenderTarget()
          , x = r.getActiveCubeFace()
          , D = r.getActiveMipmapLevel()
          , V = r.state;
        V.setBlending(wn),
        V.buffers.color.setClear(1, 1, 1, 1),
        V.buffers.depth.setTest(!0),
        V.setScissorTest(!1);
        const R = f !== ln && this.type === ln
          , B = f === ln && this.type !== ln;
        for (let G = 0, q = w.length; G < q; G++) {
            const J = w[G]
              , H = J.shadow;
            if (H === void 0) {
                console.warn("THREE.WebGLShadowMap:", J, "has no shadow.");
                continue
            }
            if (H.autoUpdate === !1 && H.needsUpdate === !1)
                continue;
            i.copy(H.mapSize);
            const Q = H.getFrameExtents();
            if (i.multiply(Q),
            s.copy(H.mapSize),
            (i.x > h || i.y > h) && (i.x > h && (s.x = Math.floor(h / Q.x),
            i.x = s.x * Q.x,
            H.mapSize.x = s.x),
            i.y > h && (s.y = Math.floor(h / Q.y),
            i.y = s.y * Q.y,
            H.mapSize.y = s.y)),
            H.map === null || R === !0 || B === !0) {
                const de = this.type !== ln ? {
                    minFilter: Et,
                    magFilter: Et
                } : {};
                H.map !== null && H.map.dispose(),
                H.map = new Yn(i.x,i.y,de),
                H.map.texture.name = J.name + ".shadowMap",
                H.camera.updateProjectionMatrix()
            }
            r.setRenderTarget(H.map),
            r.clear();
            const $ = H.getViewportCount();
            for (let de = 0; de < $; de++) {
                const Me = H.getViewport(de);
                a.set(s.x * Me.x, s.y * Me.y, s.x * Me.z, s.y * Me.w),
                V.viewport(a),
                H.updateMatrices(J, de),
                n = H.getFrustum(),
                E(b, L, H.camera, J, this.type)
            }
            H.isPointLightShadow !== !0 && this.type === ln && T(H, L),
            H.needsUpdate = !1
        }
        f = this.type,
        p.needsUpdate = !1,
        r.setRenderTarget(M, x, D)
    }
    ;
    function T(w, b) {
        const L = e.update(_);
        d.defines.VSM_SAMPLES !== w.blurSamples && (d.defines.VSM_SAMPLES = w.blurSamples,
        m.defines.VSM_SAMPLES = w.blurSamples,
        d.needsUpdate = !0,
        m.needsUpdate = !0),
        w.mapPass === null && (w.mapPass = new Yn(i.x,i.y)),
        d.uniforms.shadow_pass.value = w.map.texture,
        d.uniforms.resolution.value = w.mapSize,
        d.uniforms.radius.value = w.radius,
        r.setRenderTarget(w.mapPass),
        r.clear(),
        r.renderBufferDirect(b, null, L, d, _, null),
        m.uniforms.shadow_pass.value = w.mapPass.texture,
        m.uniforms.resolution.value = w.mapSize,
        m.uniforms.radius.value = w.radius,
        r.setRenderTarget(w.map),
        r.clear(),
        r.renderBufferDirect(b, null, L, m, _, null)
    }
    function y(w, b, L, M) {
        let x = null;
        const D = L.isPointLight === !0 ? w.customDistanceMaterial : w.customDepthMaterial;
        if (D !== void 0)
            x = D;
        else if (x = L.isPointLight === !0 ? c : o,
        r.localClippingEnabled && b.clipShadows === !0 && Array.isArray(b.clippingPlanes) && b.clippingPlanes.length !== 0 || b.displacementMap && b.displacementScale !== 0 || b.alphaMap && b.alphaTest > 0 || b.map && b.alphaTest > 0) {
            const V = x.uuid
              , R = b.uuid;
            let B = l[V];
            B === void 0 && (B = {},
            l[V] = B);
            let G = B[R];
            G === void 0 && (G = x.clone(),
            B[R] = G,
            b.addEventListener("dispose", U)),
            x = G
        }
        if (x.visible = b.visible,
        x.wireframe = b.wireframe,
        M === ln ? x.side = b.shadowSide !== null ? b.shadowSide : b.side : x.side = b.shadowSide !== null ? b.shadowSide : u[b.side],
        x.alphaMap = b.alphaMap,
        x.alphaTest = b.alphaTest,
        x.map = b.map,
        x.clipShadows = b.clipShadows,
        x.clippingPlanes = b.clippingPlanes,
        x.clipIntersection = b.clipIntersection,
        x.displacementMap = b.displacementMap,
        x.displacementScale = b.displacementScale,
        x.displacementBias = b.displacementBias,
        x.wireframeLinewidth = b.wireframeLinewidth,
        x.linewidth = b.linewidth,
        L.isPointLight === !0 && x.isMeshDistanceMaterial === !0) {
            const V = r.properties.get(x);
            V.light = L
        }
        return x
    }
    function E(w, b, L, M, x) {
        if (w.visible === !1)
            return;
        if (w.layers.test(b.layers) && (w.isMesh || w.isLine || w.isPoints) && (w.castShadow || w.receiveShadow && x === ln) && (!w.frustumCulled || n.intersectsObject(w))) {
            w.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse, w.matrixWorld);
            const R = e.update(w)
              , B = w.material;
            if (Array.isArray(B)) {
                const G = R.groups;
                for (let q = 0, J = G.length; q < J; q++) {
                    const H = G[q]
                      , Q = B[H.materialIndex];
                    if (Q && Q.visible) {
                        const $ = y(w, Q, M, x);
                        w.onBeforeShadow(r, w, b, L, R, $, H),
                        r.renderBufferDirect(L, null, R, $, w, H),
                        w.onAfterShadow(r, w, b, L, R, $, H)
                    }
                }
            } else if (B.visible) {
                const G = y(w, B, M, x);
                w.onBeforeShadow(r, w, b, L, R, G, null),
                r.renderBufferDirect(L, null, R, G, w, null),
                w.onAfterShadow(r, w, b, L, R, G, null)
            }
        }
        const V = w.children;
        for (let R = 0, B = V.length; R < B; R++)
            E(V[R], b, L, M, x)
    }
    function U(w) {
        w.target.removeEventListener("dispose", U);
        for (const L in l) {
            const M = l[L]
              , x = w.target.uuid;
            x in M && (M[x].dispose(),
            delete M[x])
        }
    }
}
function Fm(r) {
    function e() {
        let C = !1;
        const K = new Ke;
        let X = null;
        const re = new Ke(0,0,0,0);
        return {
            setMask: function(ce) {
                X !== ce && !C && (r.colorMask(ce, ce, ce, ce),
                X = ce)
            },
            setLocked: function(ce) {
                C = ce
            },
            setClear: function(ce, Ve, Ze, nt, ft) {
                ft === !0 && (ce *= nt,
                Ve *= nt,
                Ze *= nt),
                K.set(ce, Ve, Ze, nt),
                re.equals(K) === !1 && (r.clearColor(ce, Ve, Ze, nt),
                re.copy(K))
            },
            reset: function() {
                C = !1,
                X = null,
                re.set(-1, 0, 0, 0)
            }
        }
    }
    function t() {
        let C = !1
          , K = null
          , X = null
          , re = null;
        return {
            setTest: function(ce) {
                ce ? he(r.DEPTH_TEST) : ie(r.DEPTH_TEST)
            },
            setMask: function(ce) {
                K !== ce && !C && (r.depthMask(ce),
                K = ce)
            },
            setFunc: function(ce) {
                if (X !== ce) {
                    switch (ce) {
                    case Ol:
                        r.depthFunc(r.NEVER);
                        break;
                    case Bl:
                        r.depthFunc(r.ALWAYS);
                        break;
                    case zl:
                        r.depthFunc(r.LESS);
                        break;
                    case Hr:
                        r.depthFunc(r.LEQUAL);
                        break;
                    case Hl:
                        r.depthFunc(r.EQUAL);
                        break;
                    case kl:
                        r.depthFunc(r.GEQUAL);
                        break;
                    case Vl:
                        r.depthFunc(r.GREATER);
                        break;
                    case Gl:
                        r.depthFunc(r.NOTEQUAL);
                        break;
                    default:
                        r.depthFunc(r.LEQUAL)
                    }
                    X = ce
                }
            },
            setLocked: function(ce) {
                C = ce
            },
            setClear: function(ce) {
                re !== ce && (r.clearDepth(ce),
                re = ce)
            },
            reset: function() {
                C = !1,
                K = null,
                X = null,
                re = null
            }
        }
    }
    function n() {
        let C = !1
          , K = null
          , X = null
          , re = null
          , ce = null
          , Ve = null
          , Ze = null
          , nt = null
          , ft = null;
        return {
            setTest: function(Xe) {
                C || (Xe ? he(r.STENCIL_TEST) : ie(r.STENCIL_TEST))
            },
            setMask: function(Xe) {
                K !== Xe && !C && (r.stencilMask(Xe),
                K = Xe)
            },
            setFunc: function(Xe, kt, xt) {
                (X !== Xe || re !== kt || ce !== xt) && (r.stencilFunc(Xe, kt, xt),
                X = Xe,
                re = kt,
                ce = xt)
            },
            setOp: function(Xe, kt, xt) {
                (Ve !== Xe || Ze !== kt || nt !== xt) && (r.stencilOp(Xe, kt, xt),
                Ve = Xe,
                Ze = kt,
                nt = xt)
            },
            setLocked: function(Xe) {
                C = Xe
            },
            setClear: function(Xe) {
                ft !== Xe && (r.clearStencil(Xe),
                ft = Xe)
            },
            reset: function() {
                C = !1,
                K = null,
                X = null,
                re = null,
                ce = null,
                Ve = null,
                Ze = null,
                nt = null,
                ft = null
            }
        }
    }
    const i = new e
      , s = new t
      , a = new n
      , o = new WeakMap
      , c = new WeakMap;
    let l = {}
      , h = {}
      , u = new WeakMap
      , d = []
      , m = null
      , g = !1
      , _ = null
      , p = null
      , f = null
      , T = null
      , y = null
      , E = null
      , U = null
      , w = new Se(0,0,0)
      , b = 0
      , L = !1
      , M = null
      , x = null
      , D = null
      , V = null
      , R = null;
    const B = r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
    let G = !1
      , q = 0;
    const J = r.getParameter(r.VERSION);
    J.indexOf("WebGL") !== -1 ? (q = parseFloat(/^WebGL (\d)/.exec(J)[1]),
    G = q >= 1) : J.indexOf("OpenGL ES") !== -1 && (q = parseFloat(/^OpenGL ES (\d)/.exec(J)[1]),
    G = q >= 2);
    let H = null
      , Q = {};
    const $ = r.getParameter(r.SCISSOR_BOX)
      , de = r.getParameter(r.VIEWPORT)
      , Me = new Ke().fromArray($)
      , Ne = new Ke().fromArray(de);
    function W(C, K, X, re) {
        const ce = new Uint8Array(4)
          , Ve = r.createTexture();
        r.bindTexture(C, Ve),
        r.texParameteri(C, r.TEXTURE_MIN_FILTER, r.NEAREST),
        r.texParameteri(C, r.TEXTURE_MAG_FILTER, r.NEAREST);
        for (let Ze = 0; Ze < X; Ze++)
            C === r.TEXTURE_3D || C === r.TEXTURE_2D_ARRAY ? r.texImage3D(K, 0, r.RGBA, 1, 1, re, 0, r.RGBA, r.UNSIGNED_BYTE, ce) : r.texImage2D(K + Ze, 0, r.RGBA, 1, 1, 0, r.RGBA, r.UNSIGNED_BYTE, ce);
        return Ve
    }
    const ee = {};
    ee[r.TEXTURE_2D] = W(r.TEXTURE_2D, r.TEXTURE_2D, 1),
    ee[r.TEXTURE_CUBE_MAP] = W(r.TEXTURE_CUBE_MAP, r.TEXTURE_CUBE_MAP_POSITIVE_X, 6),
    ee[r.TEXTURE_2D_ARRAY] = W(r.TEXTURE_2D_ARRAY, r.TEXTURE_2D_ARRAY, 1, 1),
    ee[r.TEXTURE_3D] = W(r.TEXTURE_3D, r.TEXTURE_3D, 1, 1),
    i.setClear(0, 0, 0, 1),
    s.setClear(1),
    a.setClear(0),
    he(r.DEPTH_TEST),
    s.setFunc(Hr),
    ze(!1),
    Pe(Ta),
    he(r.CULL_FACE),
    je(wn);
    function he(C) {
        l[C] !== !0 && (r.enable(C),
        l[C] = !0)
    }
    function ie(C) {
        l[C] !== !1 && (r.disable(C),
        l[C] = !1)
    }
    function Fe(C, K) {
        return h[C] !== K ? (r.bindFramebuffer(C, K),
        h[C] = K,
        C === r.DRAW_FRAMEBUFFER && (h[r.FRAMEBUFFER] = K),
        C === r.FRAMEBUFFER && (h[r.DRAW_FRAMEBUFFER] = K),
        !0) : !1
    }
    function Oe(C, K) {
        let X = d
          , re = !1;
        if (C) {
            X = u.get(K),
            X === void 0 && (X = [],
            u.set(K, X));
            const ce = C.textures;
            if (X.length !== ce.length || X[0] !== r.COLOR_ATTACHMENT0) {
                for (let Ve = 0, Ze = ce.length; Ve < Ze; Ve++)
                    X[Ve] = r.COLOR_ATTACHMENT0 + Ve;
                X.length = ce.length,
                re = !0
            }
        } else
            X[0] !== r.BACK && (X[0] = r.BACK,
            re = !0);
        re && r.drawBuffers(X)
    }
    function N(C) {
        return m !== C ? (r.useProgram(C),
        m = C,
        !0) : !1
    }
    const $e = {
        [Gn]: r.FUNC_ADD,
        [Ml]: r.FUNC_SUBTRACT,
        [Sl]: r.FUNC_REVERSE_SUBTRACT
    };
    $e[yl] = r.MIN,
    $e[El] = r.MAX;
    const ge = {
        [Tl]: r.ZERO,
        [Al]: r.ONE,
        [bl]: r.SRC_COLOR,
        [Ws]: r.SRC_ALPHA,
        [Il]: r.SRC_ALPHA_SATURATE,
        [Ll]: r.DST_COLOR,
        [Rl]: r.DST_ALPHA,
        [wl]: r.ONE_MINUS_SRC_COLOR,
        [Xs]: r.ONE_MINUS_SRC_ALPHA,
        [Pl]: r.ONE_MINUS_DST_COLOR,
        [Cl]: r.ONE_MINUS_DST_ALPHA,
        [Dl]: r.CONSTANT_COLOR,
        [Ul]: r.ONE_MINUS_CONSTANT_COLOR,
        [Nl]: r.CONSTANT_ALPHA,
        [Fl]: r.ONE_MINUS_CONSTANT_ALPHA
    };
    function je(C, K, X, re, ce, Ve, Ze, nt, ft, Xe) {
        if (C === wn) {
            g === !0 && (ie(r.BLEND),
            g = !1);
            return
        }
        if (g === !1 && (he(r.BLEND),
        g = !0),
        C !== vl) {
            if (C !== _ || Xe !== L) {
                if ((p !== Gn || y !== Gn) && (r.blendEquation(r.FUNC_ADD),
                p = Gn,
                y = Gn),
                Xe)
                    switch (C) {
                    case _i:
                        r.blendFuncSeparate(r.ONE, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA);
                        break;
                    case Aa:
                        r.blendFunc(r.ONE, r.ONE);
                        break;
                    case ba:
                        r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
                        break;
                    case wa:
                        r.blendFuncSeparate(r.ZERO, r.SRC_COLOR, r.ZERO, r.SRC_ALPHA);
                        break;
                    default:
                        console.error("THREE.WebGLState: Invalid blending: ", C);
                        break
                    }
                else
                    switch (C) {
                    case _i:
                        r.blendFuncSeparate(r.SRC_ALPHA, r.ONE_MINUS_SRC_ALPHA, r.ONE, r.ONE_MINUS_SRC_ALPHA);
                        break;
                    case Aa:
                        r.blendFunc(r.SRC_ALPHA, r.ONE);
                        break;
                    case ba:
                        r.blendFuncSeparate(r.ZERO, r.ONE_MINUS_SRC_COLOR, r.ZERO, r.ONE);
                        break;
                    case wa:
                        r.blendFunc(r.ZERO, r.SRC_COLOR);
                        break;
                    default:
                        console.error("THREE.WebGLState: Invalid blending: ", C);
                        break
                    }
                f = null,
                T = null,
                E = null,
                U = null,
                w.set(0, 0, 0),
                b = 0,
                _ = C,
                L = Xe
            }
            return
        }
        ce = ce || K,
        Ve = Ve || X,
        Ze = Ze || re,
        (K !== p || ce !== y) && (r.blendEquationSeparate($e[K], $e[ce]),
        p = K,
        y = ce),
        (X !== f || re !== T || Ve !== E || Ze !== U) && (r.blendFuncSeparate(ge[X], ge[re], ge[Ve], ge[Ze]),
        f = X,
        T = re,
        E = Ve,
        U = Ze),
        (nt.equals(w) === !1 || ft !== b) && (r.blendColor(nt.r, nt.g, nt.b, ft),
        w.copy(nt),
        b = ft),
        _ = C,
        L = !1
    }
    function ve(C, K) {
        C.side === Gt ? ie(r.CULL_FACE) : he(r.CULL_FACE);
        let X = C.side === wt;
        K && (X = !X),
        ze(X),
        C.blending === _i && C.transparent === !1 ? je(wn) : je(C.blending, C.blendEquation, C.blendSrc, C.blendDst, C.blendEquationAlpha, C.blendSrcAlpha, C.blendDstAlpha, C.blendColor, C.blendAlpha, C.premultipliedAlpha),
        s.setFunc(C.depthFunc),
        s.setTest(C.depthTest),
        s.setMask(C.depthWrite),
        i.setMask(C.colorWrite);
        const re = C.stencilWrite;
        a.setTest(re),
        re && (a.setMask(C.stencilWriteMask),
        a.setFunc(C.stencilFunc, C.stencilRef, C.stencilFuncMask),
        a.setOp(C.stencilFail, C.stencilZFail, C.stencilZPass)),
        tt(C.polygonOffset, C.polygonOffsetFactor, C.polygonOffsetUnits),
        C.alphaToCoverage === !0 ? he(r.SAMPLE_ALPHA_TO_COVERAGE) : ie(r.SAMPLE_ALPHA_TO_COVERAGE)
    }
    function ze(C) {
        M !== C && (C ? r.frontFace(r.CW) : r.frontFace(r.CCW),
        M = C)
    }
    function Pe(C) {
        C !== _l ? (he(r.CULL_FACE),
        C !== x && (C === Ta ? r.cullFace(r.BACK) : C === xl ? r.cullFace(r.FRONT) : r.cullFace(r.FRONT_AND_BACK))) : ie(r.CULL_FACE),
        x = C
    }
    function He(C) {
        C !== D && (G && r.lineWidth(C),
        D = C)
    }
    function tt(C, K, X) {
        C ? (he(r.POLYGON_OFFSET_FILL),
        (V !== K || R !== X) && (r.polygonOffset(K, X),
        V = K,
        R = X)) : ie(r.POLYGON_OFFSET_FILL)
    }
    function A(C) {
        C ? he(r.SCISSOR_TEST) : ie(r.SCISSOR_TEST)
    }
    function v(C) {
        C === void 0 && (C = r.TEXTURE0 + B - 1),
        H !== C && (r.activeTexture(C),
        H = C)
    }
    function k(C, K, X) {
        X === void 0 && (H === null ? X = r.TEXTURE0 + B - 1 : X = H);
        let re = Q[X];
        re === void 0 && (re = {
            type: void 0,
            texture: void 0
        },
        Q[X] = re),
        (re.type !== C || re.texture !== K) && (H !== X && (r.activeTexture(X),
        H = X),
        r.bindTexture(C, K || ee[C]),
        re.type = C,
        re.texture = K)
    }
    function Y() {
        const C = Q[H];
        C !== void 0 && C.type !== void 0 && (r.bindTexture(C.type, null),
        C.type = void 0,
        C.texture = void 0)
    }
    function j() {
        try {
            r.compressedTexImage2D.apply(r, arguments)
        } catch (C) {
            console.error("THREE.WebGLState:", C)
        }
    }
    function Z() {
        try {
            r.compressedTexImage3D.apply(r, arguments)
        } catch (C) {
            console.error("THREE.WebGLState:", C)
        }
    }
    function me() {
        try {
            r.texSubImage2D.apply(r, arguments)
        } catch (C) {
            console.error("THREE.WebGLState:", C)
        }
    }
    function oe() {
        try {
            r.texSubImage3D.apply(r, arguments)
        } catch (C) {
            console.error("THREE.WebGLState:", C)
        }
    }
    function ae() {
        try {
            r.compressedTexSubImage2D.apply(r, arguments)
        } catch (C) {
            console.error("THREE.WebGLState:", C)
        }
    }
    function Re() {
        try {
            r.compressedTexSubImage3D.apply(r, arguments)
        } catch (C) {
            console.error("THREE.WebGLState:", C)
        }
    }
    function te() {
        try {
            r.texStorage2D.apply(r, arguments)
        } catch (C) {
            console.error("THREE.WebGLState:", C)
        }
    }
    function pe() {
        try {
            r.texStorage3D.apply(r, arguments)
        } catch (C) {
            console.error("THREE.WebGLState:", C)
        }
    }
    function ke() {
        try {
            r.texImage2D.apply(r, arguments)
        } catch (C) {
            console.error("THREE.WebGLState:", C)
        }
    }
    function _e() {
        try {
            r.texImage3D.apply(r, arguments)
        } catch (C) {
            console.error("THREE.WebGLState:", C)
        }
    }
    function le(C) {
        Me.equals(C) === !1 && (r.scissor(C.x, C.y, C.z, C.w),
        Me.copy(C))
    }
    function Ce(C) {
        Ne.equals(C) === !1 && (r.viewport(C.x, C.y, C.z, C.w),
        Ne.copy(C))
    }
    function Be(C, K) {
        let X = c.get(K);
        X === void 0 && (X = new WeakMap,
        c.set(K, X));
        let re = X.get(C);
        re === void 0 && (re = r.getUniformBlockIndex(K, C.name),
        X.set(C, re))
    }
    function it(C, K) {
        const re = c.get(K).get(C);
        o.get(K) !== re && (r.uniformBlockBinding(K, re, C.__bindingPointIndex),
        o.set(K, re))
    }
    function Le() {
        r.disable(r.BLEND),
        r.disable(r.CULL_FACE),
        r.disable(r.DEPTH_TEST),
        r.disable(r.POLYGON_OFFSET_FILL),
        r.disable(r.SCISSOR_TEST),
        r.disable(r.STENCIL_TEST),
        r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),
        r.blendEquation(r.FUNC_ADD),
        r.blendFunc(r.ONE, r.ZERO),
        r.blendFuncSeparate(r.ONE, r.ZERO, r.ONE, r.ZERO),
        r.blendColor(0, 0, 0, 0),
        r.colorMask(!0, !0, !0, !0),
        r.clearColor(0, 0, 0, 0),
        r.depthMask(!0),
        r.depthFunc(r.LESS),
        r.clearDepth(1),
        r.stencilMask(4294967295),
        r.stencilFunc(r.ALWAYS, 0, 4294967295),
        r.stencilOp(r.KEEP, r.KEEP, r.KEEP),
        r.clearStencil(0),
        r.cullFace(r.BACK),
        r.frontFace(r.CCW),
        r.polygonOffset(0, 0),
        r.activeTexture(r.TEXTURE0),
        r.bindFramebuffer(r.FRAMEBUFFER, null),
        r.bindFramebuffer(r.DRAW_FRAMEBUFFER, null),
        r.bindFramebuffer(r.READ_FRAMEBUFFER, null),
        r.useProgram(null),
        r.lineWidth(1),
        r.scissor(0, 0, r.canvas.width, r.canvas.height),
        r.viewport(0, 0, r.canvas.width, r.canvas.height),
        l = {},
        H = null,
        Q = {},
        h = {},
        u = new WeakMap,
        d = [],
        m = null,
        g = !1,
        _ = null,
        p = null,
        f = null,
        T = null,
        y = null,
        E = null,
        U = null,
        w = new Se(0,0,0),
        b = 0,
        L = !1,
        M = null,
        x = null,
        D = null,
        V = null,
        R = null,
        Me.set(0, 0, r.canvas.width, r.canvas.height),
        Ne.set(0, 0, r.canvas.width, r.canvas.height),
        i.reset(),
        s.reset(),
        a.reset()
    }
    return {
        buffers: {
            color: i,
            depth: s,
            stencil: a
        },
        enable: he,
        disable: ie,
        bindFramebuffer: Fe,
        drawBuffers: Oe,
        useProgram: N,
        setBlending: je,
        setMaterial: ve,
        setFlipSided: ze,
        setCullFace: Pe,
        setLineWidth: He,
        setPolygonOffset: tt,
        setScissorTest: A,
        activeTexture: v,
        bindTexture: k,
        unbindTexture: Y,
        compressedTexImage2D: j,
        compressedTexImage3D: Z,
        texImage2D: ke,
        texImage3D: _e,
        updateUBOMapping: Be,
        uniformBlockBinding: it,
        texStorage2D: te,
        texStorage3D: pe,
        texSubImage2D: me,
        texSubImage3D: oe,
        compressedTexSubImage2D: ae,
        compressedTexSubImage3D: Re,
        scissor: le,
        viewport: Ce,
        reset: Le
    }
}
function Om(r, e, t, n, i, s, a) {
    const o = e.has("WEBGL_multisampled_render_to_texture") ? e.get("WEBGL_multisampled_render_to_texture") : null
      , c = typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent)
      , l = new Ue
      , h = new WeakMap;
    let u;
    const d = new WeakMap;
    let m = !1;
    try {
        m = typeof OffscreenCanvas < "u" && new OffscreenCanvas(1,1).getContext("2d") !== null
    } catch {}
    function g(A, v) {
        return m ? new OffscreenCanvas(A,v) : nr("canvas")
    }
    function _(A, v, k) {
        let Y = 1;
        const j = tt(A);
        if ((j.width > k || j.height > k) && (Y = k / Math.max(j.width, j.height)),
        Y < 1)
            if (typeof HTMLImageElement < "u" && A instanceof HTMLImageElement || typeof HTMLCanvasElement < "u" && A instanceof HTMLCanvasElement || typeof ImageBitmap < "u" && A instanceof ImageBitmap || typeof VideoFrame < "u" && A instanceof VideoFrame) {
                const Z = Math.floor(Y * j.width)
                  , me = Math.floor(Y * j.height);
                u === void 0 && (u = g(Z, me));
                const oe = v ? g(Z, me) : u;
                return oe.width = Z,
                oe.height = me,
                oe.getContext("2d").drawImage(A, 0, 0, Z, me),
                console.warn("THREE.WebGLRenderer: Texture has been resized from (" + j.width + "x" + j.height + ") to (" + Z + "x" + me + ")."),
                oe
            } else
                return "data"in A && console.warn("THREE.WebGLRenderer: Image in DataTexture is too big (" + j.width + "x" + j.height + ")."),
                A;
        return A
    }
    function p(A) {
        return A.generateMipmaps && A.minFilter !== Et && A.minFilter !== lt
    }
    function f(A) {
        r.generateMipmap(A)
    }
    function T(A, v, k, Y, j=!1) {
        if (A !== null) {
            if (r[A] !== void 0)
                return r[A];
            console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" + A + "'")
        }
        let Z = v;
        if (v === r.RED && (k === r.FLOAT && (Z = r.R32F),
        k === r.HALF_FLOAT && (Z = r.R16F),
        k === r.UNSIGNED_BYTE && (Z = r.R8)),
        v === r.RED_INTEGER && (k === r.UNSIGNED_BYTE && (Z = r.R8UI),
        k === r.UNSIGNED_SHORT && (Z = r.R16UI),
        k === r.UNSIGNED_INT && (Z = r.R32UI),
        k === r.BYTE && (Z = r.R8I),
        k === r.SHORT && (Z = r.R16I),
        k === r.INT && (Z = r.R32I)),
        v === r.RG && (k === r.FLOAT && (Z = r.RG32F),
        k === r.HALF_FLOAT && (Z = r.RG16F),
        k === r.UNSIGNED_BYTE && (Z = r.RG8)),
        v === r.RG_INTEGER && (k === r.UNSIGNED_BYTE && (Z = r.RG8UI),
        k === r.UNSIGNED_SHORT && (Z = r.RG16UI),
        k === r.UNSIGNED_INT && (Z = r.RG32UI),
        k === r.BYTE && (Z = r.RG8I),
        k === r.SHORT && (Z = r.RG16I),
        k === r.INT && (Z = r.RG32I)),
        v === r.RGB && k === r.UNSIGNED_INT_5_9_9_9_REV && (Z = r.RGB9_E5),
        v === r.RGBA) {
            const me = j ? Gr : We.getTransfer(Y);
            k === r.FLOAT && (Z = r.RGBA32F),
            k === r.HALF_FLOAT && (Z = r.RGBA16F),
            k === r.UNSIGNED_BYTE && (Z = me === Je ? r.SRGB8_ALPHA8 : r.RGBA8),
            k === r.UNSIGNED_SHORT_4_4_4_4 && (Z = r.RGBA4),
            k === r.UNSIGNED_SHORT_5_5_5_1 && (Z = r.RGB5_A1)
        }
        return (Z === r.R16F || Z === r.R32F || Z === r.RG16F || Z === r.RG32F || Z === r.RGBA16F || Z === r.RGBA32F) && e.get("EXT_color_buffer_float"),
        Z
    }
    function y(A, v) {
        return p(A) === !0 || A.isFramebufferTexture && A.minFilter !== Et && A.minFilter !== lt ? Math.log2(Math.max(v.width, v.height)) + 1 : A.mipmaps !== void 0 && A.mipmaps.length > 0 ? A.mipmaps.length : A.isCompressedTexture && Array.isArray(A.image) ? v.mipmaps.length : 1
    }
    function E(A) {
        const v = A.target;
        v.removeEventListener("dispose", E),
        w(v),
        v.isVideoTexture && h.delete(v)
    }
    function U(A) {
        const v = A.target;
        v.removeEventListener("dispose", U),
        L(v)
    }
    function w(A) {
        const v = n.get(A);
        if (v.__webglInit === void 0)
            return;
        const k = A.source
          , Y = d.get(k);
        if (Y) {
            const j = Y[v.__cacheKey];
            j.usedTimes--,
            j.usedTimes === 0 && b(A),
            Object.keys(Y).length === 0 && d.delete(k)
        }
        n.remove(A)
    }
    function b(A) {
        const v = n.get(A);
        r.deleteTexture(v.__webglTexture);
        const k = A.source
          , Y = d.get(k);
        delete Y[v.__cacheKey],
        a.memory.textures--
    }
    function L(A) {
        const v = n.get(A);
        if (A.depthTexture && A.depthTexture.dispose(),
        A.isWebGLCubeRenderTarget)
            for (let Y = 0; Y < 6; Y++) {
                if (Array.isArray(v.__webglFramebuffer[Y]))
                    for (let j = 0; j < v.__webglFramebuffer[Y].length; j++)
                        r.deleteFramebuffer(v.__webglFramebuffer[Y][j]);
                else
                    r.deleteFramebuffer(v.__webglFramebuffer[Y]);
                v.__webglDepthbuffer && r.deleteRenderbuffer(v.__webglDepthbuffer[Y])
            }
        else {
            if (Array.isArray(v.__webglFramebuffer))
                for (let Y = 0; Y < v.__webglFramebuffer.length; Y++)
                    r.deleteFramebuffer(v.__webglFramebuffer[Y]);
            else
                r.deleteFramebuffer(v.__webglFramebuffer);
            if (v.__webglDepthbuffer && r.deleteRenderbuffer(v.__webglDepthbuffer),
            v.__webglMultisampledFramebuffer && r.deleteFramebuffer(v.__webglMultisampledFramebuffer),
            v.__webglColorRenderbuffer)
                for (let Y = 0; Y < v.__webglColorRenderbuffer.length; Y++)
                    v.__webglColorRenderbuffer[Y] && r.deleteRenderbuffer(v.__webglColorRenderbuffer[Y]);
            v.__webglDepthRenderbuffer && r.deleteRenderbuffer(v.__webglDepthRenderbuffer)
        }
        const k = A.textures;
        for (let Y = 0, j = k.length; Y < j; Y++) {
            const Z = n.get(k[Y]);
            Z.__webglTexture && (r.deleteTexture(Z.__webglTexture),
            a.memory.textures--),
            n.remove(k[Y])
        }
        n.remove(A)
    }
    let M = 0;
    function x() {
        M = 0
    }
    function D() {
        const A = M;
        return A >= i.maxTextures && console.warn("THREE.WebGLTextures: Trying to use " + A + " texture units while this GPU supports only " + i.maxTextures),
        M += 1,
        A
    }
    function V(A) {
        const v = [];
        return v.push(A.wrapS),
        v.push(A.wrapT),
        v.push(A.wrapR || 0),
        v.push(A.magFilter),
        v.push(A.minFilter),
        v.push(A.anisotropy),
        v.push(A.internalFormat),
        v.push(A.format),
        v.push(A.type),
        v.push(A.generateMipmaps),
        v.push(A.premultiplyAlpha),
        v.push(A.flipY),
        v.push(A.unpackAlignment),
        v.push(A.colorSpace),
        v.join()
    }
    function R(A, v) {
        const k = n.get(A);
        if (A.isVideoTexture && Pe(A),
        A.isRenderTargetTexture === !1 && A.version > 0 && k.__version !== A.version) {
            const Y = A.image;
            if (Y === null)
                console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");
            else if (Y.complete === !1)
                console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");
            else {
                Me(k, A, v);
                return
            }
        }
        t.bindTexture(r.TEXTURE_2D, k.__webglTexture, r.TEXTURE0 + v)
    }
    function B(A, v) {
        const k = n.get(A);
        if (A.version > 0 && k.__version !== A.version) {
            Me(k, A, v);
            return
        }
        t.bindTexture(r.TEXTURE_2D_ARRAY, k.__webglTexture, r.TEXTURE0 + v)
    }
    function G(A, v) {
        const k = n.get(A);
        if (A.version > 0 && k.__version !== A.version) {
            Me(k, A, v);
            return
        }
        t.bindTexture(r.TEXTURE_3D, k.__webglTexture, r.TEXTURE0 + v)
    }
    function q(A, v) {
        const k = n.get(A);
        if (A.version > 0 && k.__version !== A.version) {
            Ne(k, A, v);
            return
        }
        t.bindTexture(r.TEXTURE_CUBE_MAP, k.__webglTexture, r.TEXTURE0 + v)
    }
    const J = {
        [Ai]: r.REPEAT,
        [Xt]: r.CLAMP_TO_EDGE,
        [Vr]: r.MIRRORED_REPEAT
    }
      , H = {
        [Et]: r.NEAREST,
        [Sc]: r.NEAREST_MIPMAP_NEAREST,
        [ji]: r.NEAREST_MIPMAP_LINEAR,
        [lt]: r.LINEAR,
        [Br]: r.LINEAR_MIPMAP_NEAREST,
        [qt]: r.LINEAR_MIPMAP_LINEAR
    }
      , Q = {
        [ph]: r.NEVER,
        [Mh]: r.ALWAYS,
        [mh]: r.LESS,
        [Ic]: r.LEQUAL,
        [gh]: r.EQUAL,
        [vh]: r.GEQUAL,
        [_h]: r.GREATER,
        [xh]: r.NOTEQUAL
    };
    function $(A, v) {
        if (v.type === Pt && e.has("OES_texture_float_linear") === !1 && (v.magFilter === lt || v.magFilter === Br || v.magFilter === ji || v.magFilter === qt || v.minFilter === lt || v.minFilter === Br || v.minFilter === ji || v.minFilter === qt) && console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),
        r.texParameteri(A, r.TEXTURE_WRAP_S, J[v.wrapS]),
        r.texParameteri(A, r.TEXTURE_WRAP_T, J[v.wrapT]),
        (A === r.TEXTURE_3D || A === r.TEXTURE_2D_ARRAY) && r.texParameteri(A, r.TEXTURE_WRAP_R, J[v.wrapR]),
        r.texParameteri(A, r.TEXTURE_MAG_FILTER, H[v.magFilter]),
        r.texParameteri(A, r.TEXTURE_MIN_FILTER, H[v.minFilter]),
        v.compareFunction && (r.texParameteri(A, r.TEXTURE_COMPARE_MODE, r.COMPARE_REF_TO_TEXTURE),
        r.texParameteri(A, r.TEXTURE_COMPARE_FUNC, Q[v.compareFunction])),
        e.has("EXT_texture_filter_anisotropic") === !0) {
            if (v.magFilter === Et || v.minFilter !== ji && v.minFilter !== qt || v.type === Pt && e.has("OES_texture_float_linear") === !1)
                return;
            if (v.anisotropy > 1 || n.get(v).__currentAnisotropy) {
                const k = e.get("EXT_texture_filter_anisotropic");
                r.texParameterf(A, k.TEXTURE_MAX_ANISOTROPY_EXT, Math.min(v.anisotropy, i.getMaxAnisotropy())),
                n.get(v).__currentAnisotropy = v.anisotropy
            }
        }
    }
    function de(A, v) {
        let k = !1;
        A.__webglInit === void 0 && (A.__webglInit = !0,
        v.addEventListener("dispose", E));
        const Y = v.source;
        let j = d.get(Y);
        j === void 0 && (j = {},
        d.set(Y, j));
        const Z = V(v);
        if (Z !== A.__cacheKey) {
            j[Z] === void 0 && (j[Z] = {
                texture: r.createTexture(),
                usedTimes: 0
            },
            a.memory.textures++,
            k = !0),
            j[Z].usedTimes++;
            const me = j[A.__cacheKey];
            me !== void 0 && (j[A.__cacheKey].usedTimes--,
            me.usedTimes === 0 && b(v)),
            A.__cacheKey = Z,
            A.__webglTexture = j[Z].texture
        }
        return k
    }
    function Me(A, v, k) {
        let Y = r.TEXTURE_2D;
        (v.isDataArrayTexture || v.isCompressedArrayTexture) && (Y = r.TEXTURE_2D_ARRAY),
        v.isData3DTexture && (Y = r.TEXTURE_3D);
        const j = de(A, v)
          , Z = v.source;
        t.bindTexture(Y, A.__webglTexture, r.TEXTURE0 + k);
        const me = n.get(Z);
        if (Z.version !== me.__version || j === !0) {
            t.activeTexture(r.TEXTURE0 + k);
            const oe = We.getPrimaries(We.workingColorSpace)
              , ae = v.colorSpace === An ? null : We.getPrimaries(v.colorSpace)
              , Re = v.colorSpace === An || oe === ae ? r.NONE : r.BROWSER_DEFAULT_WEBGL;
            r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, v.flipY),
            r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha),
            r.pixelStorei(r.UNPACK_ALIGNMENT, v.unpackAlignment),
            r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, Re);
            let te = _(v.image, !1, i.maxTextureSize);
            te = He(v, te);
            const pe = s.convert(v.format, v.colorSpace)
              , ke = s.convert(v.type);
            let _e = T(v.internalFormat, pe, ke, v.colorSpace, v.isVideoTexture);
            $(Y, v);
            let le;
            const Ce = v.mipmaps
              , Be = v.isVideoTexture !== !0
              , it = me.__version === void 0 || j === !0
              , Le = Z.dataReady
              , C = y(v, te);
            if (v.isDepthTexture)
                _e = r.DEPTH_COMPONENT16,
                v.type === Pt ? _e = r.DEPTH_COMPONENT32F : v.type === bi ? _e = r.DEPTH_COMPONENT24 : v.type === rr && (_e = r.DEPTH24_STENCIL8),
                it && (Be ? t.texStorage2D(r.TEXTURE_2D, 1, _e, te.width, te.height) : t.texImage2D(r.TEXTURE_2D, 0, _e, te.width, te.height, 0, pe, ke, null));
            else if (v.isDataTexture)
                if (Ce.length > 0) {
                    Be && it && t.texStorage2D(r.TEXTURE_2D, C, _e, Ce[0].width, Ce[0].height);
                    for (let K = 0, X = Ce.length; K < X; K++)
                        le = Ce[K],
                        Be ? Le && t.texSubImage2D(r.TEXTURE_2D, K, 0, 0, le.width, le.height, pe, ke, le.data) : t.texImage2D(r.TEXTURE_2D, K, _e, le.width, le.height, 0, pe, ke, le.data);
                    v.generateMipmaps = !1
                } else
                    Be ? (it && t.texStorage2D(r.TEXTURE_2D, C, _e, te.width, te.height),
                    Le && t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, te.width, te.height, pe, ke, te.data)) : t.texImage2D(r.TEXTURE_2D, 0, _e, te.width, te.height, 0, pe, ke, te.data);
            else if (v.isCompressedTexture)
                if (v.isCompressedArrayTexture) {
                    Be && it && t.texStorage3D(r.TEXTURE_2D_ARRAY, C, _e, Ce[0].width, Ce[0].height, te.depth);
                    for (let K = 0, X = Ce.length; K < X; K++)
                        le = Ce[K],
                        v.format !== zt ? pe !== null ? Be ? Le && t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY, K, 0, 0, 0, le.width, le.height, te.depth, pe, le.data, 0, 0) : t.compressedTexImage3D(r.TEXTURE_2D_ARRAY, K, _e, le.width, le.height, te.depth, 0, le.data, 0, 0) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Be ? Le && t.texSubImage3D(r.TEXTURE_2D_ARRAY, K, 0, 0, 0, le.width, le.height, te.depth, pe, ke, le.data) : t.texImage3D(r.TEXTURE_2D_ARRAY, K, _e, le.width, le.height, te.depth, 0, pe, ke, le.data)
                } else {
                    Be && it && t.texStorage2D(r.TEXTURE_2D, C, _e, Ce[0].width, Ce[0].height);
                    for (let K = 0, X = Ce.length; K < X; K++)
                        le = Ce[K],
                        v.format !== zt ? pe !== null ? Be ? Le && t.compressedTexSubImage2D(r.TEXTURE_2D, K, 0, 0, le.width, le.height, pe, le.data) : t.compressedTexImage2D(r.TEXTURE_2D, K, _e, le.width, le.height, 0, le.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()") : Be ? Le && t.texSubImage2D(r.TEXTURE_2D, K, 0, 0, le.width, le.height, pe, ke, le.data) : t.texImage2D(r.TEXTURE_2D, K, _e, le.width, le.height, 0, pe, ke, le.data)
                }
            else if (v.isDataArrayTexture)
                Be ? (it && t.texStorage3D(r.TEXTURE_2D_ARRAY, C, _e, te.width, te.height, te.depth),
                Le && t.texSubImage3D(r.TEXTURE_2D_ARRAY, 0, 0, 0, 0, te.width, te.height, te.depth, pe, ke, te.data)) : t.texImage3D(r.TEXTURE_2D_ARRAY, 0, _e, te.width, te.height, te.depth, 0, pe, ke, te.data);
            else if (v.isData3DTexture)
                Be ? (it && t.texStorage3D(r.TEXTURE_3D, C, _e, te.width, te.height, te.depth),
                Le && t.texSubImage3D(r.TEXTURE_3D, 0, 0, 0, 0, te.width, te.height, te.depth, pe, ke, te.data)) : t.texImage3D(r.TEXTURE_3D, 0, _e, te.width, te.height, te.depth, 0, pe, ke, te.data);
            else if (v.isFramebufferTexture) {
                if (it)
                    if (Be)
                        t.texStorage2D(r.TEXTURE_2D, C, _e, te.width, te.height);
                    else {
                        let K = te.width
                          , X = te.height;
                        for (let re = 0; re < C; re++)
                            t.texImage2D(r.TEXTURE_2D, re, _e, K, X, 0, pe, ke, null),
                            K >>= 1,
                            X >>= 1
                    }
            } else if (Ce.length > 0) {
                if (Be && it) {
                    const K = tt(Ce[0]);
                    t.texStorage2D(r.TEXTURE_2D, C, _e, K.width, K.height)
                }
                for (let K = 0, X = Ce.length; K < X; K++)
                    le = Ce[K],
                    Be ? Le && t.texSubImage2D(r.TEXTURE_2D, K, 0, 0, pe, ke, le) : t.texImage2D(r.TEXTURE_2D, K, _e, pe, ke, le);
                v.generateMipmaps = !1
            } else if (Be) {
                if (it) {
                    const K = tt(te);
                    t.texStorage2D(r.TEXTURE_2D, C, _e, K.width, K.height)
                }
                Le && t.texSubImage2D(r.TEXTURE_2D, 0, 0, 0, pe, ke, te)
            } else
                t.texImage2D(r.TEXTURE_2D, 0, _e, pe, ke, te);
            p(v) && f(Y),
            me.__version = Z.version,
            v.onUpdate && v.onUpdate(v)
        }
        A.__version = v.version
    }
    function Ne(A, v, k) {
        if (v.image.length !== 6)
            return;
        const Y = de(A, v)
          , j = v.source;
        t.bindTexture(r.TEXTURE_CUBE_MAP, A.__webglTexture, r.TEXTURE0 + k);
        const Z = n.get(j);
        if (j.version !== Z.__version || Y === !0) {
            t.activeTexture(r.TEXTURE0 + k);
            const me = We.getPrimaries(We.workingColorSpace)
              , oe = v.colorSpace === An ? null : We.getPrimaries(v.colorSpace)
              , ae = v.colorSpace === An || me === oe ? r.NONE : r.BROWSER_DEFAULT_WEBGL;
            r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL, v.flipY),
            r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, v.premultiplyAlpha),
            r.pixelStorei(r.UNPACK_ALIGNMENT, v.unpackAlignment),
            r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL, ae);
            const Re = v.isCompressedTexture || v.image[0].isCompressedTexture
              , te = v.image[0] && v.image[0].isDataTexture
              , pe = [];
            for (let X = 0; X < 6; X++)
                !Re && !te ? pe[X] = _(v.image[X], !0, i.maxCubemapSize) : pe[X] = te ? v.image[X].image : v.image[X],
                pe[X] = He(v, pe[X]);
            const ke = pe[0]
              , _e = s.convert(v.format, v.colorSpace)
              , le = s.convert(v.type)
              , Ce = T(v.internalFormat, _e, le, v.colorSpace)
              , Be = v.isVideoTexture !== !0
              , it = Z.__version === void 0 || Y === !0
              , Le = j.dataReady;
            let C = y(v, ke);
            $(r.TEXTURE_CUBE_MAP, v);
            let K;
            if (Re) {
                Be && it && t.texStorage2D(r.TEXTURE_CUBE_MAP, C, Ce, ke.width, ke.height);
                for (let X = 0; X < 6; X++) {
                    K = pe[X].mipmaps;
                    for (let re = 0; re < K.length; re++) {
                        const ce = K[re];
                        v.format !== zt ? _e !== null ? Be ? Le && t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + X, re, 0, 0, ce.width, ce.height, _e, ce.data) : t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + X, re, Ce, ce.width, ce.height, 0, ce.data) : console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()") : Be ? Le && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + X, re, 0, 0, ce.width, ce.height, _e, le, ce.data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + X, re, Ce, ce.width, ce.height, 0, _e, le, ce.data)
                    }
                }
            } else {
                if (K = v.mipmaps,
                Be && it) {
                    K.length > 0 && C++;
                    const X = tt(pe[0]);
                    t.texStorage2D(r.TEXTURE_CUBE_MAP, C, Ce, X.width, X.height)
                }
                for (let X = 0; X < 6; X++)
                    if (te) {
                        Be ? Le && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + X, 0, 0, 0, pe[X].width, pe[X].height, _e, le, pe[X].data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + X, 0, Ce, pe[X].width, pe[X].height, 0, _e, le, pe[X].data);
                        for (let re = 0; re < K.length; re++) {
                            const Ve = K[re].image[X].image;
                            Be ? Le && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + X, re + 1, 0, 0, Ve.width, Ve.height, _e, le, Ve.data) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + X, re + 1, Ce, Ve.width, Ve.height, 0, _e, le, Ve.data)
                        }
                    } else {
                        Be ? Le && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + X, 0, 0, 0, _e, le, pe[X]) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + X, 0, Ce, _e, le, pe[X]);
                        for (let re = 0; re < K.length; re++) {
                            const ce = K[re];
                            Be ? Le && t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + X, re + 1, 0, 0, _e, le, ce.image[X]) : t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X + X, re + 1, Ce, _e, le, ce.image[X])
                        }
                    }
            }
            p(v) && f(r.TEXTURE_CUBE_MAP),
            Z.__version = j.version,
            v.onUpdate && v.onUpdate(v)
        }
        A.__version = v.version
    }
    function W(A, v, k, Y, j, Z) {
        const me = s.convert(k.format, k.colorSpace)
          , oe = s.convert(k.type)
          , ae = T(k.internalFormat, me, oe, k.colorSpace);
        if (!n.get(v).__hasExternalTextures) {
            const te = Math.max(1, v.width >> Z)
              , pe = Math.max(1, v.height >> Z);
            j === r.TEXTURE_3D || j === r.TEXTURE_2D_ARRAY ? t.texImage3D(j, Z, ae, te, pe, v.depth, 0, me, oe, null) : t.texImage2D(j, Z, ae, te, pe, 0, me, oe, null)
        }
        t.bindFramebuffer(r.FRAMEBUFFER, A),
        ze(v) ? o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, Y, j, n.get(k).__webglTexture, 0, ve(v)) : (j === r.TEXTURE_2D || j >= r.TEXTURE_CUBE_MAP_POSITIVE_X && j <= r.TEXTURE_CUBE_MAP_NEGATIVE_Z) && r.framebufferTexture2D(r.FRAMEBUFFER, Y, j, n.get(k).__webglTexture, Z),
        t.bindFramebuffer(r.FRAMEBUFFER, null)
    }
    function ee(A, v, k) {
        if (r.bindRenderbuffer(r.RENDERBUFFER, A),
        v.depthBuffer && !v.stencilBuffer) {
            let Y = r.DEPTH_COMPONENT24;
            if (k || ze(v)) {
                const j = v.depthTexture;
                j && j.isDepthTexture && (j.type === Pt ? Y = r.DEPTH_COMPONENT32F : j.type === bi && (Y = r.DEPTH_COMPONENT24));
                const Z = ve(v);
                ze(v) ? o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, Z, Y, v.width, v.height) : r.renderbufferStorageMultisample(r.RENDERBUFFER, Z, Y, v.width, v.height)
            } else
                r.renderbufferStorage(r.RENDERBUFFER, Y, v.width, v.height);
            r.framebufferRenderbuffer(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.RENDERBUFFER, A)
        } else if (v.depthBuffer && v.stencilBuffer) {
            const Y = ve(v);
            k && ze(v) === !1 ? r.renderbufferStorageMultisample(r.RENDERBUFFER, Y, r.DEPTH24_STENCIL8, v.width, v.height) : ze(v) ? o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, Y, r.DEPTH24_STENCIL8, v.width, v.height) : r.renderbufferStorage(r.RENDERBUFFER, r.DEPTH_STENCIL, v.width, v.height),
            r.framebufferRenderbuffer(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.RENDERBUFFER, A)
        } else {
            const Y = v.textures;
            for (let j = 0; j < Y.length; j++) {
                const Z = Y[j]
                  , me = s.convert(Z.format, Z.colorSpace)
                  , oe = s.convert(Z.type)
                  , ae = T(Z.internalFormat, me, oe, Z.colorSpace)
                  , Re = ve(v);
                k && ze(v) === !1 ? r.renderbufferStorageMultisample(r.RENDERBUFFER, Re, ae, v.width, v.height) : ze(v) ? o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER, Re, ae, v.width, v.height) : r.renderbufferStorage(r.RENDERBUFFER, ae, v.width, v.height)
            }
        }
        r.bindRenderbuffer(r.RENDERBUFFER, null)
    }
    function he(A, v) {
        if (v && v.isWebGLCubeRenderTarget)
            throw new Error("Depth Texture with cube render targets is not supported");
        if (t.bindFramebuffer(r.FRAMEBUFFER, A),
        !(v.depthTexture && v.depthTexture.isDepthTexture))
            throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");
        (!n.get(v.depthTexture).__webglTexture || v.depthTexture.image.width !== v.width || v.depthTexture.image.height !== v.height) && (v.depthTexture.image.width = v.width,
        v.depthTexture.image.height = v.height,
        v.depthTexture.needsUpdate = !0),
        R(v.depthTexture, 0);
        const Y = n.get(v.depthTexture).__webglTexture
          , j = ve(v);
        if (v.depthTexture.format === xi)
            ze(v) ? o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, Y, 0, j) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_ATTACHMENT, r.TEXTURE_2D, Y, 0);
        else if (v.depthTexture.format === er)
            ze(v) ? o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, Y, 0, j) : r.framebufferTexture2D(r.FRAMEBUFFER, r.DEPTH_STENCIL_ATTACHMENT, r.TEXTURE_2D, Y, 0);
        else
            throw new Error("Unknown depthTexture format")
    }
    function ie(A) {
        const v = n.get(A)
          , k = A.isWebGLCubeRenderTarget === !0;
        if (A.depthTexture && !v.__autoAllocateDepthBuffer) {
            if (k)
                throw new Error("target.depthTexture not supported in Cube render targets");
            he(v.__webglFramebuffer, A)
        } else if (k) {
            v.__webglDepthbuffer = [];
            for (let Y = 0; Y < 6; Y++)
                t.bindFramebuffer(r.FRAMEBUFFER, v.__webglFramebuffer[Y]),
                v.__webglDepthbuffer[Y] = r.createRenderbuffer(),
                ee(v.__webglDepthbuffer[Y], A, !1)
        } else
            t.bindFramebuffer(r.FRAMEBUFFER, v.__webglFramebuffer),
            v.__webglDepthbuffer = r.createRenderbuffer(),
            ee(v.__webglDepthbuffer, A, !1);
        t.bindFramebuffer(r.FRAMEBUFFER, null)
    }
    function Fe(A, v, k) {
        const Y = n.get(A);
        v !== void 0 && W(Y.__webglFramebuffer, A, A.texture, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, 0),
        k !== void 0 && ie(A)
    }
    function Oe(A) {
        const v = A.texture
          , k = n.get(A)
          , Y = n.get(v);
        A.addEventListener("dispose", U);
        const j = A.textures
          , Z = A.isWebGLCubeRenderTarget === !0
          , me = j.length > 1;
        if (me || (Y.__webglTexture === void 0 && (Y.__webglTexture = r.createTexture()),
        Y.__version = v.version,
        a.memory.textures++),
        Z) {
            k.__webglFramebuffer = [];
            for (let oe = 0; oe < 6; oe++)
                if (v.mipmaps && v.mipmaps.length > 0) {
                    k.__webglFramebuffer[oe] = [];
                    for (let ae = 0; ae < v.mipmaps.length; ae++)
                        k.__webglFramebuffer[oe][ae] = r.createFramebuffer()
                } else
                    k.__webglFramebuffer[oe] = r.createFramebuffer()
        } else {
            if (v.mipmaps && v.mipmaps.length > 0) {
                k.__webglFramebuffer = [];
                for (let oe = 0; oe < v.mipmaps.length; oe++)
                    k.__webglFramebuffer[oe] = r.createFramebuffer()
            } else
                k.__webglFramebuffer = r.createFramebuffer();
            if (me)
                for (let oe = 0, ae = j.length; oe < ae; oe++) {
                    const Re = n.get(j[oe]);
                    Re.__webglTexture === void 0 && (Re.__webglTexture = r.createTexture(),
                    a.memory.textures++)
                }
            if (A.samples > 0 && ze(A) === !1) {
                k.__webglMultisampledFramebuffer = r.createFramebuffer(),
                k.__webglColorRenderbuffer = [],
                t.bindFramebuffer(r.FRAMEBUFFER, k.__webglMultisampledFramebuffer);
                for (let oe = 0; oe < j.length; oe++) {
                    const ae = j[oe];
                    k.__webglColorRenderbuffer[oe] = r.createRenderbuffer(),
                    r.bindRenderbuffer(r.RENDERBUFFER, k.__webglColorRenderbuffer[oe]);
                    const Re = s.convert(ae.format, ae.colorSpace)
                      , te = s.convert(ae.type)
                      , pe = T(ae.internalFormat, Re, te, ae.colorSpace, A.isXRRenderTarget === !0)
                      , ke = ve(A);
                    r.renderbufferStorageMultisample(r.RENDERBUFFER, ke, pe, A.width, A.height),
                    r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + oe, r.RENDERBUFFER, k.__webglColorRenderbuffer[oe])
                }
                r.bindRenderbuffer(r.RENDERBUFFER, null),
                A.depthBuffer && (k.__webglDepthRenderbuffer = r.createRenderbuffer(),
                ee(k.__webglDepthRenderbuffer, A, !0)),
                t.bindFramebuffer(r.FRAMEBUFFER, null)
            }
        }
        if (Z) {
            t.bindTexture(r.TEXTURE_CUBE_MAP, Y.__webglTexture),
            $(r.TEXTURE_CUBE_MAP, v);
            for (let oe = 0; oe < 6; oe++)
                if (v.mipmaps && v.mipmaps.length > 0)
                    for (let ae = 0; ae < v.mipmaps.length; ae++)
                        W(k.__webglFramebuffer[oe][ae], A, v, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + oe, ae);
                else
                    W(k.__webglFramebuffer[oe], A, v, r.COLOR_ATTACHMENT0, r.TEXTURE_CUBE_MAP_POSITIVE_X + oe, 0);
            p(v) && f(r.TEXTURE_CUBE_MAP),
            t.unbindTexture()
        } else if (me) {
            for (let oe = 0, ae = j.length; oe < ae; oe++) {
                const Re = j[oe]
                  , te = n.get(Re);
                t.bindTexture(r.TEXTURE_2D, te.__webglTexture),
                $(r.TEXTURE_2D, Re),
                W(k.__webglFramebuffer, A, Re, r.COLOR_ATTACHMENT0 + oe, r.TEXTURE_2D, 0),
                p(Re) && f(r.TEXTURE_2D)
            }
            t.unbindTexture()
        } else {
            let oe = r.TEXTURE_2D;
            if ((A.isWebGL3DRenderTarget || A.isWebGLArrayRenderTarget) && (oe = A.isWebGL3DRenderTarget ? r.TEXTURE_3D : r.TEXTURE_2D_ARRAY),
            t.bindTexture(oe, Y.__webglTexture),
            $(oe, v),
            v.mipmaps && v.mipmaps.length > 0)
                for (let ae = 0; ae < v.mipmaps.length; ae++)
                    W(k.__webglFramebuffer[ae], A, v, r.COLOR_ATTACHMENT0, oe, ae);
            else
                W(k.__webglFramebuffer, A, v, r.COLOR_ATTACHMENT0, oe, 0);
            p(v) && f(oe),
            t.unbindTexture()
        }
        A.depthBuffer && ie(A)
    }
    function N(A) {
        const v = A.textures;
        for (let k = 0, Y = v.length; k < Y; k++) {
            const j = v[k];
            if (p(j)) {
                const Z = A.isWebGLCubeRenderTarget ? r.TEXTURE_CUBE_MAP : r.TEXTURE_2D
                  , me = n.get(j).__webglTexture;
                t.bindTexture(Z, me),
                f(Z),
                t.unbindTexture()
            }
        }
    }
    const $e = []
      , ge = [];
    function je(A) {
        if (A.samples > 0) {
            if (ze(A) === !1) {
                const v = A.textures
                  , k = A.width
                  , Y = A.height;
                let j = r.COLOR_BUFFER_BIT;
                const Z = A.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT
                  , me = n.get(A)
                  , oe = v.length > 1;
                if (oe)
                    for (let ae = 0; ae < v.length; ae++)
                        t.bindFramebuffer(r.FRAMEBUFFER, me.__webglMultisampledFramebuffer),
                        r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + ae, r.RENDERBUFFER, null),
                        t.bindFramebuffer(r.FRAMEBUFFER, me.__webglFramebuffer),
                        r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + ae, r.TEXTURE_2D, null, 0);
                t.bindFramebuffer(r.READ_FRAMEBUFFER, me.__webglMultisampledFramebuffer),
                t.bindFramebuffer(r.DRAW_FRAMEBUFFER, me.__webglFramebuffer);
                for (let ae = 0; ae < v.length; ae++) {
                    if (A.resolveDepthBuffer && (A.depthBuffer && (j |= r.DEPTH_BUFFER_BIT),
                    A.stencilBuffer && A.resolveStencilBuffer && (j |= r.STENCIL_BUFFER_BIT)),
                    oe) {
                        r.framebufferRenderbuffer(r.READ_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.RENDERBUFFER, me.__webglColorRenderbuffer[ae]);
                        const Re = n.get(v[ae]).__webglTexture;
                        r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, Re, 0)
                    }
                    r.blitFramebuffer(0, 0, k, Y, 0, 0, k, Y, j, r.NEAREST),
                    c === !0 && ($e.length = 0,
                    ge.length = 0,
                    $e.push(r.COLOR_ATTACHMENT0 + ae),
                    A.depthBuffer && A.resolveDepthBuffer === !1 && ($e.push(Z),
                    ge.push(Z),
                    r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER, ge)),
                    r.invalidateFramebuffer(r.READ_FRAMEBUFFER, $e))
                }
                if (t.bindFramebuffer(r.READ_FRAMEBUFFER, null),
                t.bindFramebuffer(r.DRAW_FRAMEBUFFER, null),
                oe)
                    for (let ae = 0; ae < v.length; ae++) {
                        t.bindFramebuffer(r.FRAMEBUFFER, me.__webglMultisampledFramebuffer),
                        r.framebufferRenderbuffer(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0 + ae, r.RENDERBUFFER, me.__webglColorRenderbuffer[ae]);
                        const Re = n.get(v[ae]).__webglTexture;
                        t.bindFramebuffer(r.FRAMEBUFFER, me.__webglFramebuffer),
                        r.framebufferTexture2D(r.DRAW_FRAMEBUFFER, r.COLOR_ATTACHMENT0 + ae, r.TEXTURE_2D, Re, 0)
                    }
                t.bindFramebuffer(r.DRAW_FRAMEBUFFER, me.__webglMultisampledFramebuffer)
            } else if (A.depthBuffer && A.resolveDepthBuffer === !1 && c) {
                const v = A.stencilBuffer ? r.DEPTH_STENCIL_ATTACHMENT : r.DEPTH_ATTACHMENT;
                r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER, [v])
            }
        }
    }
    function ve(A) {
        return Math.min(i.maxSamples, A.samples)
    }
    function ze(A) {
        const v = n.get(A);
        return A.samples > 0 && e.has("WEBGL_multisampled_render_to_texture") === !0 && v.__useRenderToTexture !== !1
    }
    function Pe(A) {
        const v = a.render.frame;
        h.get(A) !== v && (h.set(A, v),
        A.update())
    }
    function He(A, v) {
        const k = A.colorSpace
          , Y = A.format
          , j = A.type;
        return A.isCompressedTexture === !0 || A.isVideoTexture === !0 || k !== ut && k !== An && (We.getTransfer(k) === Je ? (Y !== zt || j !== Cn) && console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.") : console.error("THREE.WebGLTextures: Unsupported texture color space:", k)),
        v
    }
    function tt(A) {
        return typeof HTMLImageElement < "u" && A instanceof HTMLImageElement ? (l.width = A.naturalWidth || A.width,
        l.height = A.naturalHeight || A.height) : typeof VideoFrame < "u" && A instanceof VideoFrame ? (l.width = A.displayWidth,
        l.height = A.displayHeight) : (l.width = A.width,
        l.height = A.height),
        l
    }
    this.allocateTextureUnit = D,
    this.resetTextureUnits = x,
    this.setTexture2D = R,
    this.setTexture2DArray = B,
    this.setTexture3D = G,
    this.setTextureCube = q,
    this.rebindTextures = Fe,
    this.setupRenderTarget = Oe,
    this.updateRenderTargetMipmap = N,
    this.updateMultisampleRenderTarget = je,
    this.setupDepthRenderbuffer = ie,
    this.setupFrameBufferTexture = W,
    this.useMultisampledRTT = ze
}
function Bm(r, e) {
    function t(n, i=An) {
        let s;
        const a = We.getTransfer(i);
        if (n === Cn)
            return r.UNSIGNED_BYTE;
        if (n === Tc)
            return r.UNSIGNED_SHORT_4_4_4_4;
        if (n === Ac)
            return r.UNSIGNED_SHORT_5_5_5_1;
        if (n === nh)
            return r.UNSIGNED_INT_5_9_9_9_REV;
        if (n === eh)
            return r.BYTE;
        if (n === th)
            return r.SHORT;
        if (n === yc)
            return r.UNSIGNED_SHORT;
        if (n === Ec)
            return r.INT;
        if (n === bi)
            return r.UNSIGNED_INT;
        if (n === Pt)
            return r.FLOAT;
        if (n === un)
            return r.HALF_FLOAT;
        if (n === ih)
            return r.ALPHA;
        if (n === rh)
            return r.RGB;
        if (n === zt)
            return r.RGBA;
        if (n === sh)
            return r.LUMINANCE;
        if (n === ah)
            return r.LUMINANCE_ALPHA;
        if (n === xi)
            return r.DEPTH_COMPONENT;
        if (n === er)
            return r.DEPTH_STENCIL;
        if (n === bc)
            return r.RED;
        if (n === wc)
            return r.RED_INTEGER;
        if (n === oh)
            return r.RG;
        if (n === Rc)
            return r.RG_INTEGER;
        if (n === Cc)
            return r.RGBA_INTEGER;
        if (n === rs || n === ss || n === as || n === os)
            if (a === Je)
                if (s = e.get("WEBGL_compressed_texture_s3tc_srgb"),
                s !== null) {
                    if (n === rs)
                        return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;
                    if (n === ss)
                        return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
                    if (n === as)
                        return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
                    if (n === os)
                        return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT
                } else
                    return null;
            else if (s = e.get("WEBGL_compressed_texture_s3tc"),
            s !== null) {
                if (n === rs)
                    return s.COMPRESSED_RGB_S3TC_DXT1_EXT;
                if (n === ss)
                    return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;
                if (n === as)
                    return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;
                if (n === os)
                    return s.COMPRESSED_RGBA_S3TC_DXT5_EXT
            } else
                return null;
        if (n === Ca || n === La || n === Pa || n === Ia)
            if (s = e.get("WEBGL_compressed_texture_pvrtc"),
            s !== null) {
                if (n === Ca)
                    return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
                if (n === La)
                    return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
                if (n === Pa)
                    return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
                if (n === Ia)
                    return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG
            } else
                return null;
        if (n === Da || n === Ua || n === Na)
            if (s = e.get("WEBGL_compressed_texture_etc"),
            s !== null) {
                if (n === Da || n === Ua)
                    return a === Je ? s.COMPRESSED_SRGB8_ETC2 : s.COMPRESSED_RGB8_ETC2;
                if (n === Na)
                    return a === Je ? s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC : s.COMPRESSED_RGBA8_ETC2_EAC
            } else
                return null;
        if (n === Fa || n === Oa || n === Ba || n === za || n === Ha || n === ka || n === Va || n === Ga || n === Wa || n === Xa || n === qa || n === Ya || n === Ka || n === ja)
            if (s = e.get("WEBGL_compressed_texture_astc"),
            s !== null) {
                if (n === Fa)
                    return a === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR : s.COMPRESSED_RGBA_ASTC_4x4_KHR;
                if (n === Oa)
                    return a === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR : s.COMPRESSED_RGBA_ASTC_5x4_KHR;
                if (n === Ba)
                    return a === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR : s.COMPRESSED_RGBA_ASTC_5x5_KHR;
                if (n === za)
                    return a === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR : s.COMPRESSED_RGBA_ASTC_6x5_KHR;
                if (n === Ha)
                    return a === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR : s.COMPRESSED_RGBA_ASTC_6x6_KHR;
                if (n === ka)
                    return a === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR : s.COMPRESSED_RGBA_ASTC_8x5_KHR;
                if (n === Va)
                    return a === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR : s.COMPRESSED_RGBA_ASTC_8x6_KHR;
                if (n === Ga)
                    return a === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR : s.COMPRESSED_RGBA_ASTC_8x8_KHR;
                if (n === Wa)
                    return a === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR : s.COMPRESSED_RGBA_ASTC_10x5_KHR;
                if (n === Xa)
                    return a === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR : s.COMPRESSED_RGBA_ASTC_10x6_KHR;
                if (n === qa)
                    return a === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR : s.COMPRESSED_RGBA_ASTC_10x8_KHR;
                if (n === Ya)
                    return a === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR : s.COMPRESSED_RGBA_ASTC_10x10_KHR;
                if (n === Ka)
                    return a === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR : s.COMPRESSED_RGBA_ASTC_12x10_KHR;
                if (n === ja)
                    return a === Je ? s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR : s.COMPRESSED_RGBA_ASTC_12x12_KHR
            } else
                return null;
        if (n === cs || n === $a || n === Za)
            if (s = e.get("EXT_texture_compression_bptc"),
            s !== null) {
                if (n === cs)
                    return a === Je ? s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT : s.COMPRESSED_RGBA_BPTC_UNORM_EXT;
                if (n === $a)
                    return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
                if (n === Za)
                    return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT
            } else
                return null;
        if (n === ch || n === Ja || n === Qa || n === eo)
            if (s = e.get("EXT_texture_compression_rgtc"),
            s !== null) {
                if (n === cs)
                    return s.COMPRESSED_RED_RGTC1_EXT;
                if (n === Ja)
                    return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;
                if (n === Qa)
                    return s.COMPRESSED_RED_GREEN_RGTC2_EXT;
                if (n === eo)
                    return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT
            } else
                return null;
        return n === rr ? r.UNSIGNED_INT_24_8 : r[n] !== void 0 ? r[n] : null
    }
    return {
        convert: t
    }
}
class zm extends yt {
    constructor(e=[]) {
        super(),
        this.isArrayCamera = !0,
        this.cameras = e
    }
}
class qn extends et {
    constructor() {
        super(),
        this.isGroup = !0,
        this.type = "Group"
    }
}
const Hm = {
    type: "move"
};
class Us {
    constructor() {
        this._targetRay = null,
        this._grip = null,
        this._hand = null
    }
    getHandSpace() {
        return this._hand === null && (this._hand = new qn,
        this._hand.matrixAutoUpdate = !1,
        this._hand.visible = !1,
        this._hand.joints = {},
        this._hand.inputState = {
            pinching: !1
        }),
        this._hand
    }
    getTargetRaySpace() {
        return this._targetRay === null && (this._targetRay = new qn,
        this._targetRay.matrixAutoUpdate = !1,
        this._targetRay.visible = !1,
        this._targetRay.hasLinearVelocity = !1,
        this._targetRay.linearVelocity = new P,
        this._targetRay.hasAngularVelocity = !1,
        this._targetRay.angularVelocity = new P),
        this._targetRay
    }
    getGripSpace() {
        return this._grip === null && (this._grip = new qn,
        this._grip.matrixAutoUpdate = !1,
        this._grip.visible = !1,
        this._grip.hasLinearVelocity = !1,
        this._grip.linearVelocity = new P,
        this._grip.hasAngularVelocity = !1,
        this._grip.angularVelocity = new P),
        this._grip
    }
    dispatchEvent(e) {
        return this._targetRay !== null && this._targetRay.dispatchEvent(e),
        this._grip !== null && this._grip.dispatchEvent(e),
        this._hand !== null && this._hand.dispatchEvent(e),
        this
    }
    connect(e) {
        if (e && e.hand) {
            const t = this._hand;
            if (t)
                for (const n of e.hand.values())
                    this._getHandJoint(t, n)
        }
        return this.dispatchEvent({
            type: "connected",
            data: e
        }),
        this
    }
    disconnect(e) {
        return this.dispatchEvent({
            type: "disconnected",
            data: e
        }),
        this._targetRay !== null && (this._targetRay.visible = !1),
        this._grip !== null && (this._grip.visible = !1),
        this._hand !== null && (this._hand.visible = !1),
        this
    }
    update(e, t, n) {
        let i = null
          , s = null
          , a = null;
        const o = this._targetRay
          , c = this._grip
          , l = this._hand;
        if (e && t.session.visibilityState !== "visible-blurred") {
            if (l && e.hand) {
                a = !0;
                for (const _ of e.hand.values()) {
                    const p = t.getJointPose(_, n)
                      , f = this._getHandJoint(l, _);
                    p !== null && (f.matrix.fromArray(p.transform.matrix),
                    f.matrix.decompose(f.position, f.rotation, f.scale),
                    f.matrixWorldNeedsUpdate = !0,
                    f.jointRadius = p.radius),
                    f.visible = p !== null
                }
                const h = l.joints["index-finger-tip"]
                  , u = l.joints["thumb-tip"]
                  , d = h.position.distanceTo(u.position)
                  , m = .02
                  , g = .005;
                l.inputState.pinching && d > m + g ? (l.inputState.pinching = !1,
                this.dispatchEvent({
                    type: "pinchend",
                    handedness: e.handedness,
                    target: this
                })) : !l.inputState.pinching && d <= m - g && (l.inputState.pinching = !0,
                this.dispatchEvent({
                    type: "pinchstart",
                    handedness: e.handedness,
                    target: this
                }))
            } else
                c !== null && e.gripSpace && (s = t.getPose(e.gripSpace, n),
                s !== null && (c.matrix.fromArray(s.transform.matrix),
                c.matrix.decompose(c.position, c.rotation, c.scale),
                c.matrixWorldNeedsUpdate = !0,
                s.linearVelocity ? (c.hasLinearVelocity = !0,
                c.linearVelocity.copy(s.linearVelocity)) : c.hasLinearVelocity = !1,
                s.angularVelocity ? (c.hasAngularVelocity = !0,
                c.angularVelocity.copy(s.angularVelocity)) : c.hasAngularVelocity = !1));
            o !== null && (i = t.getPose(e.targetRaySpace, n),
            i === null && s !== null && (i = s),
            i !== null && (o.matrix.fromArray(i.transform.matrix),
            o.matrix.decompose(o.position, o.rotation, o.scale),
            o.matrixWorldNeedsUpdate = !0,
            i.linearVelocity ? (o.hasLinearVelocity = !0,
            o.linearVelocity.copy(i.linearVelocity)) : o.hasLinearVelocity = !1,
            i.angularVelocity ? (o.hasAngularVelocity = !0,
            o.angularVelocity.copy(i.angularVelocity)) : o.hasAngularVelocity = !1,
            this.dispatchEvent(Hm)))
        }
        return o !== null && (o.visible = i !== null),
        c !== null && (c.visible = s !== null),
        l !== null && (l.visible = a !== null),
        this
    }
    _getHandJoint(e, t) {
        if (e.joints[t.jointName] === void 0) {
            const n = new qn;
            n.matrixAutoUpdate = !1,
            n.visible = !1,
            e.joints[t.jointName] = n,
            e.add(n)
        }
        return e.joints[t.jointName]
    }
}
const km = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`
  , Vm = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class Gm {
    constructor() {
        this.texture = null,
        this.mesh = null,
        this.depthNear = 0,
        this.depthFar = 0
    }
    init(e, t, n) {
        if (this.texture === null) {
            const i = new ht
              , s = e.properties.get(i);
            s.__webglTexture = t.texture,
            (t.depthNear != n.depthNear || t.depthFar != n.depthFar) && (this.depthNear = t.depthNear,
            this.depthFar = t.depthFar),
            this.texture = i
        }
    }
    render(e, t) {
        if (this.texture !== null) {
            if (this.mesh === null) {
                const n = t.cameras[0].viewport
                  , i = new Ln({
                    vertexShader: km,
                    fragmentShader: Vm,
                    uniforms: {
                        depthColor: {
                            value: this.texture
                        },
                        depthWidth: {
                            value: n.z
                        },
                        depthHeight: {
                            value: n.w
                        }
                    }
                });
                this.mesh = new At(new Jr(20,20),i)
            }
            e.render(this.mesh, t)
        }
    }
    reset() {
        this.texture = null,
        this.mesh = null
    }
}
class Wm extends Ii {
    constructor(e, t) {
        super();
        const n = this;
        let i = null
          , s = 1
          , a = null
          , o = "local-floor"
          , c = 1
          , l = null
          , h = null
          , u = null
          , d = null
          , m = null
          , g = null;
        const _ = new Gm
          , p = t.getContextAttributes();
        let f = null
          , T = null;
        const y = []
          , E = []
          , U = new Ue;
        let w = null;
        const b = new yt;
        b.layers.enable(1),
        b.viewport = new Ke;
        const L = new yt;
        L.layers.enable(2),
        L.viewport = new Ke;
        const M = [b, L]
          , x = new zm;
        x.layers.enable(1),
        x.layers.enable(2);
        let D = null
          , V = null;
        this.cameraAutoUpdate = !0,
        this.enabled = !1,
        this.isPresenting = !1,
        this.getController = function(W) {
            let ee = y[W];
            return ee === void 0 && (ee = new Us,
            y[W] = ee),
            ee.getTargetRaySpace()
        }
        ,
        this.getControllerGrip = function(W) {
            let ee = y[W];
            return ee === void 0 && (ee = new Us,
            y[W] = ee),
            ee.getGripSpace()
        }
        ,
        this.getHand = function(W) {
            let ee = y[W];
            return ee === void 0 && (ee = new Us,
            y[W] = ee),
            ee.getHandSpace()
        }
        ;
        function R(W) {
            const ee = E.indexOf(W.inputSource);
            if (ee === -1)
                return;
            const he = y[ee];
            he !== void 0 && (he.update(W.inputSource, W.frame, l || a),
            he.dispatchEvent({
                type: W.type,
                data: W.inputSource
            }))
        }
        function B() {
            i.removeEventListener("select", R),
            i.removeEventListener("selectstart", R),
            i.removeEventListener("selectend", R),
            i.removeEventListener("squeeze", R),
            i.removeEventListener("squeezestart", R),
            i.removeEventListener("squeezeend", R),
            i.removeEventListener("end", B),
            i.removeEventListener("inputsourceschange", G);
            for (let W = 0; W < y.length; W++) {
                const ee = E[W];
                ee !== null && (E[W] = null,
                y[W].disconnect(ee))
            }
            D = null,
            V = null,
            _.reset(),
            e.setRenderTarget(f),
            m = null,
            d = null,
            u = null,
            i = null,
            T = null,
            Ne.stop(),
            n.isPresenting = !1,
            e.setPixelRatio(w),
            e.setSize(U.width, U.height, !1),
            n.dispatchEvent({
                type: "sessionend"
            })
        }
        this.setFramebufferScaleFactor = function(W) {
            s = W,
            n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")
        }
        ,
        this.setReferenceSpaceType = function(W) {
            o = W,
            n.isPresenting === !0 && console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")
        }
        ,
        this.getReferenceSpace = function() {
            return l || a
        }
        ,
        this.setReferenceSpace = function(W) {
            l = W
        }
        ,
        this.getBaseLayer = function() {
            return d !== null ? d : m
        }
        ,
        this.getBinding = function() {
            return u
        }
        ,
        this.getFrame = function() {
            return g
        }
        ,
        this.getSession = function() {
            return i
        }
        ,
        this.setSession = async function(W) {
            if (i = W,
            i !== null) {
                if (f = e.getRenderTarget(),
                i.addEventListener("select", R),
                i.addEventListener("selectstart", R),
                i.addEventListener("selectend", R),
                i.addEventListener("squeeze", R),
                i.addEventListener("squeezestart", R),
                i.addEventListener("squeezeend", R),
                i.addEventListener("end", B),
                i.addEventListener("inputsourceschange", G),
                p.xrCompatible !== !0 && await t.makeXRCompatible(),
                w = e.getPixelRatio(),
                e.getSize(U),
                i.renderState.layers === void 0) {
                    const ee = {
                        antialias: p.antialias,
                        alpha: !0,
                        depth: p.depth,
                        stencil: p.stencil,
                        framebufferScaleFactor: s
                    };
                    m = new XRWebGLLayer(i,t,ee),
                    i.updateRenderState({
                        baseLayer: m
                    }),
                    e.setPixelRatio(1),
                    e.setSize(m.framebufferWidth, m.framebufferHeight, !1),
                    T = new Yn(m.framebufferWidth,m.framebufferHeight,{
                        format: zt,
                        type: Cn,
                        colorSpace: e.outputColorSpace,
                        stencilBuffer: p.stencil
                    })
                } else {
                    let ee = null
                      , he = null
                      , ie = null;
                    p.depth && (ie = p.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24,
                    ee = p.stencil ? er : xi,
                    he = p.stencil ? rr : bi);
                    const Fe = {
                        colorFormat: t.RGBA8,
                        depthFormat: ie,
                        scaleFactor: s
                    };
                    u = new XRWebGLBinding(i,t),
                    d = u.createProjectionLayer(Fe),
                    i.updateRenderState({
                        layers: [d]
                    }),
                    e.setPixelRatio(1),
                    e.setSize(d.textureWidth, d.textureHeight, !1),
                    T = new Yn(d.textureWidth,d.textureHeight,{
                        format: zt,
                        type: Cn,
                        depthTexture: new Xc(d.textureWidth,d.textureHeight,he,void 0,void 0,void 0,void 0,void 0,void 0,ee),
                        stencilBuffer: p.stencil,
                        colorSpace: e.outputColorSpace,
                        samples: p.antialias ? 4 : 0,
                        resolveDepthBuffer: d.ignoreDepthValues === !1
                    })
                }
                T.isXRRenderTarget = !0,
                this.setFoveation(c),
                l = null,
                a = await i.requestReferenceSpace(o),
                Ne.setContext(i),
                Ne.start(),
                n.isPresenting = !0,
                n.dispatchEvent({
                    type: "sessionstart"
                })
            }
        }
        ,
        this.getEnvironmentBlendMode = function() {
            if (i !== null)
                return i.environmentBlendMode
        }
        ;
        function G(W) {
            for (let ee = 0; ee < W.removed.length; ee++) {
                const he = W.removed[ee]
                  , ie = E.indexOf(he);
                ie >= 0 && (E[ie] = null,
                y[ie].disconnect(he))
            }
            for (let ee = 0; ee < W.added.length; ee++) {
                const he = W.added[ee];
                let ie = E.indexOf(he);
                if (ie === -1) {
                    for (let Oe = 0; Oe < y.length; Oe++)
                        if (Oe >= E.length) {
                            E.push(he),
                            ie = Oe;
                            break
                        } else if (E[Oe] === null) {
                            E[Oe] = he,
                            ie = Oe;
                            break
                        }
                    if (ie === -1)
                        break
                }
                const Fe = y[ie];
                Fe && Fe.connect(he)
            }
        }
        const q = new P
          , J = new P;
        function H(W, ee, he) {
            q.setFromMatrixPosition(ee.matrixWorld),
            J.setFromMatrixPosition(he.matrixWorld);
            const ie = q.distanceTo(J)
              , Fe = ee.projectionMatrix.elements
              , Oe = he.projectionMatrix.elements
              , N = Fe[14] / (Fe[10] - 1)
              , $e = Fe[14] / (Fe[10] + 1)
              , ge = (Fe[9] + 1) / Fe[5]
              , je = (Fe[9] - 1) / Fe[5]
              , ve = (Fe[8] - 1) / Fe[0]
              , ze = (Oe[8] + 1) / Oe[0]
              , Pe = N * ve
              , He = N * ze
              , tt = ie / (-ve + ze)
              , A = tt * -ve;
            ee.matrixWorld.decompose(W.position, W.quaternion, W.scale),
            W.translateX(A),
            W.translateZ(tt),
            W.matrixWorld.compose(W.position, W.quaternion, W.scale),
            W.matrixWorldInverse.copy(W.matrixWorld).invert();
            const v = N + tt
              , k = $e + tt
              , Y = Pe - A
              , j = He + (ie - A)
              , Z = ge * $e / k * v
              , me = je * $e / k * v;
            W.projectionMatrix.makePerspective(Y, j, Z, me, v, k),
            W.projectionMatrixInverse.copy(W.projectionMatrix).invert()
        }
        function Q(W, ee) {
            ee === null ? W.matrixWorld.copy(W.matrix) : W.matrixWorld.multiplyMatrices(ee.matrixWorld, W.matrix),
            W.matrixWorldInverse.copy(W.matrixWorld).invert()
        }
        this.updateCamera = function(W) {
            if (i === null)
                return;
            _.texture !== null && (W.near = _.depthNear,
            W.far = _.depthFar),
            x.near = L.near = b.near = W.near,
            x.far = L.far = b.far = W.far,
            (D !== x.near || V !== x.far) && (i.updateRenderState({
                depthNear: x.near,
                depthFar: x.far
            }),
            D = x.near,
            V = x.far,
            b.near = D,
            b.far = V,
            L.near = D,
            L.far = V,
            b.updateProjectionMatrix(),
            L.updateProjectionMatrix(),
            W.updateProjectionMatrix());
            const ee = W.parent
              , he = x.cameras;
            Q(x, ee);
            for (let ie = 0; ie < he.length; ie++)
                Q(he[ie], ee);
            he.length === 2 ? H(x, b, L) : x.projectionMatrix.copy(b.projectionMatrix),
            $(W, x, ee)
        }
        ;
        function $(W, ee, he) {
            he === null ? W.matrix.copy(ee.matrixWorld) : (W.matrix.copy(he.matrixWorld),
            W.matrix.invert(),
            W.matrix.multiply(ee.matrixWorld)),
            W.matrix.decompose(W.position, W.quaternion, W.scale),
            W.updateMatrixWorld(!0),
            W.projectionMatrix.copy(ee.projectionMatrix),
            W.projectionMatrixInverse.copy(ee.projectionMatrixInverse),
            W.isPerspectiveCamera && (W.fov = Ri * 2 * Math.atan(1 / W.projectionMatrix.elements[5]),
            W.zoom = 1)
        }
        this.getCamera = function() {
            return x
        }
        ,
        this.getFoveation = function() {
            if (!(d === null && m === null))
                return c
        }
        ,
        this.setFoveation = function(W) {
            c = W,
            d !== null && (d.fixedFoveation = W),
            m !== null && m.fixedFoveation !== void 0 && (m.fixedFoveation = W)
        }
        ,
        this.hasDepthSensing = function() {
            return _.texture !== null
        }
        ;
        let de = null;
        function Me(W, ee) {
            if (h = ee.getViewerPose(l || a),
            g = ee,
            h !== null) {
                const he = h.views;
                m !== null && (e.setRenderTargetFramebuffer(T, m.framebuffer),
                e.setRenderTarget(T));
                let ie = !1;
                he.length !== x.cameras.length && (x.cameras.length = 0,
                ie = !0);
                for (let Oe = 0; Oe < he.length; Oe++) {
                    const N = he[Oe];
                    let $e = null;
                    if (m !== null)
                        $e = m.getViewport(N);
                    else {
                        const je = u.getViewSubImage(d, N);
                        $e = je.viewport,
                        Oe === 0 && (e.setRenderTargetTextures(T, je.colorTexture, d.ignoreDepthValues ? void 0 : je.depthStencilTexture),
                        e.setRenderTarget(T))
                    }
                    let ge = M[Oe];
                    ge === void 0 && (ge = new yt,
                    ge.layers.enable(Oe),
                    ge.viewport = new Ke,
                    M[Oe] = ge),
                    ge.matrix.fromArray(N.transform.matrix),
                    ge.matrix.decompose(ge.position, ge.quaternion, ge.scale),
                    ge.projectionMatrix.fromArray(N.projectionMatrix),
                    ge.projectionMatrixInverse.copy(ge.projectionMatrix).invert(),
                    ge.viewport.set($e.x, $e.y, $e.width, $e.height),
                    Oe === 0 && (x.matrix.copy(ge.matrix),
                    x.matrix.decompose(x.position, x.quaternion, x.scale)),
                    ie === !0 && x.cameras.push(ge)
                }
                const Fe = i.enabledFeatures;
                if (Fe && Fe.includes("depth-sensing")) {
                    const Oe = u.getDepthInformation(he[0]);
                    Oe && Oe.isValid && Oe.texture && _.init(e, Oe, i.renderState)
                }
            }
            for (let he = 0; he < y.length; he++) {
                const ie = E[he]
                  , Fe = y[he];
                ie !== null && Fe !== void 0 && Fe.update(ie, ee, l || a)
            }
            _.render(e, x),
            de && de(W, ee),
            ee.detectedPlanes && n.dispatchEvent({
                type: "planesdetected",
                data: ee
            }),
            g = null
        }
        const Ne = new Wc;
        Ne.setAnimationLoop(Me),
        this.setAnimationLoop = function(W) {
            de = W
        }
        ,
        this.dispose = function() {}
    }
}
const Bn = new Kt
  , Xm = new we;
function qm(r, e) {
    function t(p, f) {
        p.matrixAutoUpdate === !0 && p.updateMatrix(),
        f.value.copy(p.matrix)
    }
    function n(p, f) {
        f.color.getRGB(p.fogColor.value, kc(r)),
        f.isFog ? (p.fogNear.value = f.near,
        p.fogFar.value = f.far) : f.isFogExp2 && (p.fogDensity.value = f.density)
    }
    function i(p, f, T, y, E) {
        f.isMeshBasicMaterial || f.isMeshLambertMaterial ? s(p, f) : f.isMeshToonMaterial ? (s(p, f),
        u(p, f)) : f.isMeshPhongMaterial ? (s(p, f),
        h(p, f)) : f.isMeshStandardMaterial ? (s(p, f),
        d(p, f),
        f.isMeshPhysicalMaterial && m(p, f, E)) : f.isMeshMatcapMaterial ? (s(p, f),
        g(p, f)) : f.isMeshDepthMaterial ? s(p, f) : f.isMeshDistanceMaterial ? (s(p, f),
        _(p, f)) : f.isMeshNormalMaterial ? s(p, f) : f.isLineBasicMaterial ? (a(p, f),
        f.isLineDashedMaterial && o(p, f)) : f.isPointsMaterial ? c(p, f, T, y) : f.isSpriteMaterial ? l(p, f) : f.isShadowMaterial ? (p.color.value.copy(f.color),
        p.opacity.value = f.opacity) : f.isShaderMaterial && (f.uniformsNeedUpdate = !1)
    }
    function s(p, f) {
        p.opacity.value = f.opacity,
        f.color && p.diffuse.value.copy(f.color),
        f.emissive && p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),
        f.map && (p.map.value = f.map,
        t(f.map, p.mapTransform)),
        f.alphaMap && (p.alphaMap.value = f.alphaMap,
        t(f.alphaMap, p.alphaMapTransform)),
        f.bumpMap && (p.bumpMap.value = f.bumpMap,
        t(f.bumpMap, p.bumpMapTransform),
        p.bumpScale.value = f.bumpScale,
        f.side === wt && (p.bumpScale.value *= -1)),
        f.normalMap && (p.normalMap.value = f.normalMap,
        t(f.normalMap, p.normalMapTransform),
        p.normalScale.value.copy(f.normalScale),
        f.side === wt && p.normalScale.value.negate()),
        f.displacementMap && (p.displacementMap.value = f.displacementMap,
        t(f.displacementMap, p.displacementMapTransform),
        p.displacementScale.value = f.displacementScale,
        p.displacementBias.value = f.displacementBias),
        f.emissiveMap && (p.emissiveMap.value = f.emissiveMap,
        t(f.emissiveMap, p.emissiveMapTransform)),
        f.specularMap && (p.specularMap.value = f.specularMap,
        t(f.specularMap, p.specularMapTransform)),
        f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest);
        const T = e.get(f)
          , y = T.envMap
          , E = T.envMapRotation;
        if (y && (p.envMap.value = y,
        Bn.copy(E),
        Bn.x *= -1,
        Bn.y *= -1,
        Bn.z *= -1,
        y.isCubeTexture && y.isRenderTargetTexture === !1 && (Bn.y *= -1,
        Bn.z *= -1),
        p.envMapRotation.value.setFromMatrix4(Xm.makeRotationFromEuler(Bn)),
        p.flipEnvMap.value = y.isCubeTexture && y.isRenderTargetTexture === !1 ? -1 : 1,
        p.reflectivity.value = f.reflectivity,
        p.ior.value = f.ior,
        p.refractionRatio.value = f.refractionRatio),
        f.lightMap) {
            p.lightMap.value = f.lightMap;
            const U = r._useLegacyLights === !0 ? Math.PI : 1;
            p.lightMapIntensity.value = f.lightMapIntensity * U,
            t(f.lightMap, p.lightMapTransform)
        }
        f.aoMap && (p.aoMap.value = f.aoMap,
        p.aoMapIntensity.value = f.aoMapIntensity,
        t(f.aoMap, p.aoMapTransform))
    }
    function a(p, f) {
        p.diffuse.value.copy(f.color),
        p.opacity.value = f.opacity,
        f.map && (p.map.value = f.map,
        t(f.map, p.mapTransform))
    }
    function o(p, f) {
        p.dashSize.value = f.dashSize,
        p.totalSize.value = f.dashSize + f.gapSize,
        p.scale.value = f.scale
    }
    function c(p, f, T, y) {
        p.diffuse.value.copy(f.color),
        p.opacity.value = f.opacity,
        p.size.value = f.size * T,
        p.scale.value = y * .5,
        f.map && (p.map.value = f.map,
        t(f.map, p.uvTransform)),
        f.alphaMap && (p.alphaMap.value = f.alphaMap,
        t(f.alphaMap, p.alphaMapTransform)),
        f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest)
    }
    function l(p, f) {
        p.diffuse.value.copy(f.color),
        p.opacity.value = f.opacity,
        p.rotation.value = f.rotation,
        f.map && (p.map.value = f.map,
        t(f.map, p.mapTransform)),
        f.alphaMap && (p.alphaMap.value = f.alphaMap,
        t(f.alphaMap, p.alphaMapTransform)),
        f.alphaTest > 0 && (p.alphaTest.value = f.alphaTest)
    }
    function h(p, f) {
        p.specular.value.copy(f.specular),
        p.shininess.value = Math.max(f.shininess, 1e-4)
    }
    function u(p, f) {
        f.gradientMap && (p.gradientMap.value = f.gradientMap)
    }
    function d(p, f) {
        p.metalness.value = f.metalness,
        f.metalnessMap && (p.metalnessMap.value = f.metalnessMap,
        t(f.metalnessMap, p.metalnessMapTransform)),
        p.roughness.value = f.roughness,
        f.roughnessMap && (p.roughnessMap.value = f.roughnessMap,
        t(f.roughnessMap, p.roughnessMapTransform)),
        f.envMap && (p.envMapIntensity.value = f.envMapIntensity)
    }
    function m(p, f, T) {
        p.ior.value = f.ior,
        f.sheen > 0 && (p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),
        p.sheenRoughness.value = f.sheenRoughness,
        f.sheenColorMap && (p.sheenColorMap.value = f.sheenColorMap,
        t(f.sheenColorMap, p.sheenColorMapTransform)),
        f.sheenRoughnessMap && (p.sheenRoughnessMap.value = f.sheenRoughnessMap,
        t(f.sheenRoughnessMap, p.sheenRoughnessMapTransform))),
        f.clearcoat > 0 && (p.clearcoat.value = f.clearcoat,
        p.clearcoatRoughness.value = f.clearcoatRoughness,
        f.clearcoatMap && (p.clearcoatMap.value = f.clearcoatMap,
        t(f.clearcoatMap, p.clearcoatMapTransform)),
        f.clearcoatRoughnessMap && (p.clearcoatRoughnessMap.value = f.clearcoatRoughnessMap,
        t(f.clearcoatRoughnessMap, p.clearcoatRoughnessMapTransform)),
        f.clearcoatNormalMap && (p.clearcoatNormalMap.value = f.clearcoatNormalMap,
        t(f.clearcoatNormalMap, p.clearcoatNormalMapTransform),
        p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),
        f.side === wt && p.clearcoatNormalScale.value.negate())),
        f.dispersion > 0 && (p.dispersion.value = f.dispersion),
        f.iridescence > 0 && (p.iridescence.value = f.iridescence,
        p.iridescenceIOR.value = f.iridescenceIOR,
        p.iridescenceThicknessMinimum.value = f.iridescenceThicknessRange[0],
        p.iridescenceThicknessMaximum.value = f.iridescenceThicknessRange[1],
        f.iridescenceMap && (p.iridescenceMap.value = f.iridescenceMap,
        t(f.iridescenceMap, p.iridescenceMapTransform)),
        f.iridescenceThicknessMap && (p.iridescenceThicknessMap.value = f.iridescenceThicknessMap,
        t(f.iridescenceThicknessMap, p.iridescenceThicknessMapTransform))),
        f.transmission > 0 && (p.transmission.value = f.transmission,
        p.transmissionSamplerMap.value = T.texture,
        p.transmissionSamplerSize.value.set(T.width, T.height),
        f.transmissionMap && (p.transmissionMap.value = f.transmissionMap,
        t(f.transmissionMap, p.transmissionMapTransform)),
        p.thickness.value = f.thickness,
        f.thicknessMap && (p.thicknessMap.value = f.thicknessMap,
        t(f.thicknessMap, p.thicknessMapTransform)),
        p.attenuationDistance.value = f.attenuationDistance,
        p.attenuationColor.value.copy(f.attenuationColor)),
        f.anisotropy > 0 && (p.anisotropyVector.value.set(f.anisotropy * Math.cos(f.anisotropyRotation), f.anisotropy * Math.sin(f.anisotropyRotation)),
        f.anisotropyMap && (p.anisotropyMap.value = f.anisotropyMap,
        t(f.anisotropyMap, p.anisotropyMapTransform))),
        p.specularIntensity.value = f.specularIntensity,
        p.specularColor.value.copy(f.specularColor),
        f.specularColorMap && (p.specularColorMap.value = f.specularColorMap,
        t(f.specularColorMap, p.specularColorMapTransform)),
        f.specularIntensityMap && (p.specularIntensityMap.value = f.specularIntensityMap,
        t(f.specularIntensityMap, p.specularIntensityMapTransform))
    }
    function g(p, f) {
        f.matcap && (p.matcap.value = f.matcap)
    }
    function _(p, f) {
        const T = e.get(f).light;
        p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),
        p.nearDistance.value = T.shadow.camera.near,
        p.farDistance.value = T.shadow.camera.far
    }
    return {
        refreshFogUniforms: n,
        refreshMaterialUniforms: i
    }
}
function Ym(r, e, t, n) {
    let i = {}
      , s = {}
      , a = [];
    const o = r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);
    function c(T, y) {
        const E = y.program;
        n.uniformBlockBinding(T, E)
    }
    function l(T, y) {
        let E = i[T.id];
        E === void 0 && (g(T),
        E = h(T),
        i[T.id] = E,
        T.addEventListener("dispose", p));
        const U = y.program;
        n.updateUBOMapping(T, U);
        const w = e.render.frame;
        s[T.id] !== w && (d(T),
        s[T.id] = w)
    }
    function h(T) {
        const y = u();
        T.__bindingPointIndex = y;
        const E = r.createBuffer()
          , U = T.__size
          , w = T.usage;
        return r.bindBuffer(r.UNIFORM_BUFFER, E),
        r.bufferData(r.UNIFORM_BUFFER, U, w),
        r.bindBuffer(r.UNIFORM_BUFFER, null),
        r.bindBufferBase(r.UNIFORM_BUFFER, y, E),
        E
    }
    function u() {
        for (let T = 0; T < o; T++)
            if (a.indexOf(T) === -1)
                return a.push(T),
                T;
        return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),
        0
    }
    function d(T) {
        const y = i[T.id]
          , E = T.uniforms
          , U = T.__cache;
        r.bindBuffer(r.UNIFORM_BUFFER, y);
        for (let w = 0, b = E.length; w < b; w++) {
            const L = Array.isArray(E[w]) ? E[w] : [E[w]];
            for (let M = 0, x = L.length; M < x; M++) {
                const D = L[M];
                if (m(D, w, M, U) === !0) {
                    const V = D.__offset
                      , R = Array.isArray(D.value) ? D.value : [D.value];
                    let B = 0;
                    for (let G = 0; G < R.length; G++) {
                        const q = R[G]
                          , J = _(q);
                        typeof q == "number" || typeof q == "boolean" ? (D.__data[0] = q,
                        r.bufferSubData(r.UNIFORM_BUFFER, V + B, D.__data)) : q.isMatrix3 ? (D.__data[0] = q.elements[0],
                        D.__data[1] = q.elements[1],
                        D.__data[2] = q.elements[2],
                        D.__data[3] = 0,
                        D.__data[4] = q.elements[3],
                        D.__data[5] = q.elements[4],
                        D.__data[6] = q.elements[5],
                        D.__data[7] = 0,
                        D.__data[8] = q.elements[6],
                        D.__data[9] = q.elements[7],
                        D.__data[10] = q.elements[8],
                        D.__data[11] = 0) : (q.toArray(D.__data, B),
                        B += J.storage / Float32Array.BYTES_PER_ELEMENT)
                    }
                    r.bufferSubData(r.UNIFORM_BUFFER, V, D.__data)
                }
            }
        }
        r.bindBuffer(r.UNIFORM_BUFFER, null)
    }
    function m(T, y, E, U) {
        const w = T.value
          , b = y + "_" + E;
        if (U[b] === void 0)
            return typeof w == "number" || typeof w == "boolean" ? U[b] = w : U[b] = w.clone(),
            !0;
        {
            const L = U[b];
            if (typeof w == "number" || typeof w == "boolean") {
                if (L !== w)
                    return U[b] = w,
                    !0
            } else if (L.equals(w) === !1)
                return L.copy(w),
                !0
        }
        return !1
    }
    function g(T) {
        const y = T.uniforms;
        let E = 0;
        const U = 16;
        for (let b = 0, L = y.length; b < L; b++) {
            const M = Array.isArray(y[b]) ? y[b] : [y[b]];
            for (let x = 0, D = M.length; x < D; x++) {
                const V = M[x]
                  , R = Array.isArray(V.value) ? V.value : [V.value];
                for (let B = 0, G = R.length; B < G; B++) {
                    const q = R[B]
                      , J = _(q)
                      , H = E % U;
                    H !== 0 && U - H < J.boundary && (E += U - H),
                    V.__data = new Float32Array(J.storage / Float32Array.BYTES_PER_ELEMENT),
                    V.__offset = E,
                    E += J.storage
                }
            }
        }
        const w = E % U;
        return w > 0 && (E += U - w),
        T.__size = E,
        T.__cache = {},
        this
    }
    function _(T) {
        const y = {
            boundary: 0,
            storage: 0
        };
        return typeof T == "number" || typeof T == "boolean" ? (y.boundary = 4,
        y.storage = 4) : T.isVector2 ? (y.boundary = 8,
        y.storage = 8) : T.isVector3 || T.isColor ? (y.boundary = 16,
        y.storage = 12) : T.isVector4 ? (y.boundary = 16,
        y.storage = 16) : T.isMatrix3 ? (y.boundary = 48,
        y.storage = 48) : T.isMatrix4 ? (y.boundary = 64,
        y.storage = 64) : T.isTexture ? console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.") : console.warn("THREE.WebGLRenderer: Unsupported uniform value type.", T),
        y
    }
    function p(T) {
        const y = T.target;
        y.removeEventListener("dispose", p);
        const E = a.indexOf(y.__bindingPointIndex);
        a.splice(E, 1),
        r.deleteBuffer(i[y.id]),
        delete i[y.id],
        delete s[y.id]
    }
    function f() {
        for (const T in i)
            r.deleteBuffer(i[T]);
        a = [],
        i = {},
        s = {}
    }
    return {
        bind: c,
        update: l,
        dispose: f
    }
}
class Km {
    constructor(e={}) {
        const {canvas: t=Oh(), context: n=null, depth: i=!0, stencil: s=!1, alpha: a=!1, antialias: o=!1, premultipliedAlpha: c=!0, preserveDrawingBuffer: l=!1, powerPreference: h="default", failIfMajorPerformanceCaveat: u=!1} = e;
        this.isWebGLRenderer = !0;
        let d;
        if (n !== null) {
            if (typeof WebGLRenderingContext < "u" && n instanceof WebGLRenderingContext)
                throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");
            d = n.getContextAttributes().alpha
        } else
            d = a;
        const m = new Uint32Array(4)
          , g = new Int32Array(4);
        let _ = null
          , p = null;
        const f = []
          , T = [];
        this.domElement = t,
        this.debug = {
            checkShaderErrors: !0,
            onShaderError: null
        },
        this.autoClear = !0,
        this.autoClearColor = !0,
        this.autoClearDepth = !0,
        this.autoClearStencil = !0,
        this.sortObjects = !0,
        this.clippingPlanes = [],
        this.localClippingEnabled = !1,
        this._outputColorSpace = St,
        this._useLegacyLights = !1,
        this.toneMapping = Rn,
        this.toneMappingExposure = 1;
        const y = this;
        let E = !1
          , U = 0
          , w = 0
          , b = null
          , L = -1
          , M = null;
        const x = new Ke
          , D = new Ke;
        let V = null;
        const R = new Se(0);
        let B = 0
          , G = t.width
          , q = t.height
          , J = 1
          , H = null
          , Q = null;
        const $ = new Ke(0,0,G,q)
          , de = new Ke(0,0,G,q);
        let Me = !1;
        const Ne = new ra;
        let W = !1
          , ee = !1;
        const he = new we
          , ie = new P
          , Fe = {
            background: null,
            fog: null,
            environment: null,
            overrideMaterial: null,
            isScene: !0
        };
        function Oe() {
            return b === null ? J : 1
        }
        let N = n;
        function $e(S, I) {
            return t.getContext(S, I)
        }
        try {
            const S = {
                alpha: !0,
                depth: i,
                stencil: s,
                antialias: o,
                premultipliedAlpha: c,
                preserveDrawingBuffer: l,
                powerPreference: h,
                failIfMajorPerformanceCaveat: u
            };
            if ("setAttribute"in t && t.setAttribute("data-engine", `three.js r${ea}`),
            t.addEventListener("webglcontextlost", C, !1),
            t.addEventListener("webglcontextrestored", K, !1),
            t.addEventListener("webglcontextcreationerror", X, !1),
            N === null) {
                const I = "webgl2";
                if (N = $e(I, S),
                N === null)
                    throw $e(I) ? new Error("Error creating WebGL context with your selected attributes.") : new Error("Error creating WebGL context.")
            }
        } catch (S) {
            throw console.error("THREE.WebGLRenderer: " + S.message),
            S
        }
        let ge, je, ve, ze, Pe, He, tt, A, v, k, Y, j, Z, me, oe, ae, Re, te, pe, ke, _e, le, Ce, Be;
        function it() {
            ge = new np(N),
            ge.init(),
            le = new Bm(N,ge),
            je = new $f(N,ge,e,le),
            ve = new Fm(N),
            ze = new sp(N),
            Pe = new ym,
            He = new Om(N,ge,ve,Pe,je,le,ze),
            tt = new Jf(y),
            A = new tp(y),
            v = new uu(N),
            Ce = new Kf(N,v),
            k = new ip(N,v,ze,Ce),
            Y = new op(N,k,v,ze),
            pe = new ap(N,je,He),
            ae = new Zf(Pe),
            j = new Sm(y,tt,A,ge,je,Ce,ae),
            Z = new qm(y,Pe),
            me = new Tm,
            oe = new Lm(ge),
            te = new Yf(y,tt,A,ve,Y,d,c),
            Re = new Nm(y,Y,je),
            Be = new Ym(N,ze,je,ve),
            ke = new jf(N,ge,ze),
            _e = new rp(N,ge,ze),
            ze.programs = j.programs,
            y.capabilities = je,
            y.extensions = ge,
            y.properties = Pe,
            y.renderLists = me,
            y.shadowMap = Re,
            y.state = ve,
            y.info = ze
        }
        it();
        const Le = new Wm(y,N);
        this.xr = Le,
        this.getContext = function() {
            return N
        }
        ,
        this.getContextAttributes = function() {
            return N.getContextAttributes()
        }
        ,
        this.forceContextLoss = function() {
            const S = ge.get("WEBGL_lose_context");
            S && S.loseContext()
        }
        ,
        this.forceContextRestore = function() {
            const S = ge.get("WEBGL_lose_context");
            S && S.restoreContext()
        }
        ,
        this.getPixelRatio = function() {
            return J
        }
        ,
        this.setPixelRatio = function(S) {
            S !== void 0 && (J = S,
            this.setSize(G, q, !1))
        }
        ,
        this.getSize = function(S) {
            return S.set(G, q)
        }
        ,
        this.setSize = function(S, I, z=!0) {
            if (Le.isPresenting) {
                console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");
                return
            }
            G = S,
            q = I,
            t.width = Math.floor(S * J),
            t.height = Math.floor(I * J),
            z === !0 && (t.style.width = S + "px",
            t.style.height = I + "px"),
            this.setViewport(0, 0, S, I)
        }
        ,
        this.getDrawingBufferSize = function(S) {
            return S.set(G * J, q * J).floor()
        }
        ,
        this.setDrawingBufferSize = function(S, I, z) {
            G = S,
            q = I,
            J = z,
            t.width = Math.floor(S * z),
            t.height = Math.floor(I * z),
            this.setViewport(0, 0, S, I)
        }
        ,
        this.getCurrentViewport = function(S) {
            return S.copy(x)
        }
        ,
        this.getViewport = function(S) {
            return S.copy($)
        }
        ,
        this.setViewport = function(S, I, z, F) {
            S.isVector4 ? $.set(S.x, S.y, S.z, S.w) : $.set(S, I, z, F),
            ve.viewport(x.copy($).multiplyScalar(J).round())
        }
        ,
        this.getScissor = function(S) {
            return S.copy(de)
        }
        ,
        this.setScissor = function(S, I, z, F) {
            S.isVector4 ? de.set(S.x, S.y, S.z, S.w) : de.set(S, I, z, F),
            ve.scissor(D.copy(de).multiplyScalar(J).round())
        }
        ,
        this.getScissorTest = function() {
            return Me
        }
        ,
        this.setScissorTest = function(S) {
            ve.setScissorTest(Me = S)
        }
        ,
        this.setOpaqueSort = function(S) {
            H = S
        }
        ,
        this.setTransparentSort = function(S) {
            Q = S
        }
        ,
        this.getClearColor = function(S) {
            return S.copy(te.getClearColor())
        }
        ,
        this.setClearColor = function() {
            te.setClearColor.apply(te, arguments)
        }
        ,
        this.getClearAlpha = function() {
            return te.getClearAlpha()
        }
        ,
        this.setClearAlpha = function() {
            te.setClearAlpha.apply(te, arguments)
        }
        ,
        this.clear = function(S=!0, I=!0, z=!0) {
            let F = 0;
            if (S) {
                let O = !1;
                if (b !== null) {
                    const se = b.texture.format;
                    O = se === Cc || se === Rc || se === wc
                }
                if (O) {
                    const se = b.texture.type
                      , ue = se === Cn || se === bi || se === yc || se === rr || se === Tc || se === Ac
                      , fe = te.getClearColor()
                      , xe = te.getClearAlpha()
                      , ye = fe.r
                      , Te = fe.g
                      , Ie = fe.b;
                    ue ? (m[0] = ye,
                    m[1] = Te,
                    m[2] = Ie,
                    m[3] = xe,
                    N.clearBufferuiv(N.COLOR, 0, m)) : (g[0] = ye,
                    g[1] = Te,
                    g[2] = Ie,
                    g[3] = xe,
                    N.clearBufferiv(N.COLOR, 0, g))
                } else
                    F |= N.COLOR_BUFFER_BIT
            }
            I && (F |= N.DEPTH_BUFFER_BIT),
            z && (F |= N.STENCIL_BUFFER_BIT,
            this.state.buffers.stencil.setMask(4294967295)),
            N.clear(F)
        }
        ,
        this.clearColor = function() {
            this.clear(!0, !1, !1)
        }
        ,
        this.clearDepth = function() {
            this.clear(!1, !0, !1)
        }
        ,
        this.clearStencil = function() {
            this.clear(!1, !1, !0)
        }
        ,
        this.dispose = function() {
            t.removeEventListener("webglcontextlost", C, !1),
            t.removeEventListener("webglcontextrestored", K, !1),
            t.removeEventListener("webglcontextcreationerror", X, !1),
            me.dispose(),
            oe.dispose(),
            Pe.dispose(),
            tt.dispose(),
            A.dispose(),
            Y.dispose(),
            Ce.dispose(),
            Be.dispose(),
            j.dispose(),
            Le.dispose(),
            Le.removeEventListener("sessionstart", Xe),
            Le.removeEventListener("sessionend", kt),
            xt.stop()
        }
        ;
        function C(S) {
            S.preventDefault(),
            console.log("THREE.WebGLRenderer: Context Lost."),
            E = !0
        }
        function K() {
            console.log("THREE.WebGLRenderer: Context Restored."),
            E = !1;
            const S = ze.autoReset
              , I = Re.enabled
              , z = Re.autoUpdate
              , F = Re.needsUpdate
              , O = Re.type;
            it(),
            ze.autoReset = S,
            Re.enabled = I,
            Re.autoUpdate = z,
            Re.needsUpdate = F,
            Re.type = O
        }
        function X(S) {
            console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ", S.statusMessage)
        }
        function re(S) {
            const I = S.target;
            I.removeEventListener("dispose", re),
            ce(I)
        }
        function ce(S) {
            Ve(S),
            Pe.remove(S)
        }
        function Ve(S) {
            const I = Pe.get(S).programs;
            I !== void 0 && (I.forEach(function(z) {
                j.releaseProgram(z)
            }),
            S.isShaderMaterial && j.releaseShaderCache(S))
        }
        this.renderBufferDirect = function(S, I, z, F, O, se) {
            I === null && (I = Fe);
            const ue = O.isMesh && O.matrixWorld.determinant() < 0
              , fe = fl(S, I, z, F, O);
            ve.setMaterial(F, ue);
            let xe = z.index
              , ye = 1;
            if (F.wireframe === !0) {
                if (xe = k.getWireframeAttribute(z),
                xe === void 0)
                    return;
                ye = 2
            }
            const Te = z.drawRange
              , Ie = z.attributes.position;
            let rt = Te.start * ye
              , pt = (Te.start + Te.count) * ye;
            se !== null && (rt = Math.max(rt, se.start * ye),
            pt = Math.min(pt, (se.start + se.count) * ye)),
            xe !== null ? (rt = Math.max(rt, 0),
            pt = Math.min(pt, xe.count)) : Ie != null && (rt = Math.max(rt, 0),
            pt = Math.min(pt, Ie.count));
            const Rt = pt - rt;
            if (Rt < 0 || Rt === 1 / 0)
                return;
            Ce.setup(O, F, fe, z, xe);
            let Qt, Ge = ke;
            if (xe !== null && (Qt = v.get(xe),
            Ge = _e,
            Ge.setIndex(Qt)),
            O.isMesh)
                F.wireframe === !0 ? (ve.setLineWidth(F.wireframeLinewidth * Oe()),
                Ge.setMode(N.LINES)) : Ge.setMode(N.TRIANGLES);
            else if (O.isLine) {
                let Ee = F.linewidth;
                Ee === void 0 && (Ee = 1),
                ve.setLineWidth(Ee * Oe()),
                O.isLineSegments ? Ge.setMode(N.LINES) : O.isLineLoop ? Ge.setMode(N.LINE_LOOP) : Ge.setMode(N.LINE_STRIP)
            } else
                O.isPoints ? Ge.setMode(N.POINTS) : O.isSprite && Ge.setMode(N.TRIANGLES);
            if (O.isBatchedMesh)
                O._multiDrawInstances !== null ? Ge.renderMultiDrawInstances(O._multiDrawStarts, O._multiDrawCounts, O._multiDrawCount, O._multiDrawInstances) : Ge.renderMultiDraw(O._multiDrawStarts, O._multiDrawCounts, O._multiDrawCount);
            else if (O.isInstancedMesh)
                Ge.renderInstances(rt, Rt, O.count);
            else if (z.isInstancedBufferGeometry) {
                const Ee = z._maxInstanceCount !== void 0 ? z._maxInstanceCount : 1 / 0
                  , Oi = Math.min(z.instanceCount, Ee);
                Ge.renderInstances(rt, Rt, Oi)
            } else
                Ge.render(rt, Rt)
        }
        ;
        function Ze(S, I, z) {
            S.transparent === !0 && S.side === Gt && S.forceSinglePass === !1 ? (S.side = wt,
            S.needsUpdate = !0,
            cr(S, I, z),
            S.side = pn,
            S.needsUpdate = !0,
            cr(S, I, z),
            S.side = Gt) : cr(S, I, z)
        }
        this.compile = function(S, I, z=null) {
            z === null && (z = S),
            p = oe.get(z),
            p.init(I),
            T.push(p),
            z.traverseVisible(function(O) {
                O.isLight && O.layers.test(I.layers) && (p.pushLight(O),
                O.castShadow && p.pushShadow(O))
            }),
            S !== z && S.traverseVisible(function(O) {
                O.isLight && O.layers.test(I.layers) && (p.pushLight(O),
                O.castShadow && p.pushShadow(O))
            }),
            p.setupLights(y._useLegacyLights);
            const F = new Set;
            return S.traverse(function(O) {
                const se = O.material;
                if (se)
                    if (Array.isArray(se))
                        for (let ue = 0; ue < se.length; ue++) {
                            const fe = se[ue];
                            Ze(fe, z, O),
                            F.add(fe)
                        }
                    else
                        Ze(se, z, O),
                        F.add(se)
            }),
            T.pop(),
            p = null,
            F
        }
        ,
        this.compileAsync = function(S, I, z=null) {
            const F = this.compile(S, I, z);
            return new Promise(O=>{
                function se() {
                    if (F.forEach(function(ue) {
                        Pe.get(ue).currentProgram.isReady() && F.delete(ue)
                    }),
                    F.size === 0) {
                        O(S);
                        return
                    }
                    setTimeout(se, 10)
                }
                ge.get("KHR_parallel_shader_compile") !== null ? se() : setTimeout(se, 10)
            }
            )
        }
        ;
        let nt = null;
        function ft(S) {
            nt && nt(S)
        }
        function Xe() {
            xt.stop()
        }
        function kt() {
            xt.start()
        }
        const xt = new Wc;
        xt.setAnimationLoop(ft),
        typeof self < "u" && xt.setContext(self),
        this.setAnimationLoop = function(S) {
            nt = S,
            Le.setAnimationLoop(S),
            S === null ? xt.stop() : xt.start()
        }
        ,
        Le.addEventListener("sessionstart", Xe),
        Le.addEventListener("sessionend", kt),
        this.render = function(S, I) {
            if (I !== void 0 && I.isCamera !== !0) {
                console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");
                return
            }
            if (E === !0)
                return;
            S.matrixWorldAutoUpdate === !0 && S.updateMatrixWorld(),
            I.parent === null && I.matrixWorldAutoUpdate === !0 && I.updateMatrixWorld(),
            Le.enabled === !0 && Le.isPresenting === !0 && (Le.cameraAutoUpdate === !0 && Le.updateCamera(I),
            I = Le.getCamera()),
            S.isScene === !0 && S.onBeforeRender(y, S, I, b),
            p = oe.get(S, T.length),
            p.init(I),
            T.push(p),
            he.multiplyMatrices(I.projectionMatrix, I.matrixWorldInverse),
            Ne.setFromProjectionMatrix(he),
            ee = this.localClippingEnabled,
            W = ae.init(this.clippingPlanes, ee),
            _ = me.get(S, f.length),
            _.init(),
            f.push(_),
            ga(S, I, 0, y.sortObjects),
            _.finish(),
            y.sortObjects === !0 && _.sort(H, Q);
            const z = Le.enabled === !1 || Le.isPresenting === !1 || Le.hasDepthSensing() === !1;
            z && te.addToRenderList(_, S),
            this.info.render.frame++,
            W === !0 && ae.beginShadows();
            const F = p.state.shadowsArray;
            Re.render(F, S, I),
            W === !0 && ae.endShadows(),
            this.info.autoReset === !0 && this.info.reset();
            const O = _.opaque
              , se = _.transmissive;
            if (p.setupLights(y._useLegacyLights),
            I.isArrayCamera) {
                const ue = I.cameras;
                if (se.length > 0)
                    for (let fe = 0, xe = ue.length; fe < xe; fe++) {
                        const ye = ue[fe];
                        xa(O, se, S, ye)
                    }
                z && te.render(S);
                for (let fe = 0, xe = ue.length; fe < xe; fe++) {
                    const ye = ue[fe];
                    _a(_, S, ye, ye.viewport)
                }
            } else
                se.length > 0 && xa(O, se, S, I),
                z && te.render(S),
                _a(_, S, I);
            b !== null && (He.updateMultisampleRenderTarget(b),
            He.updateRenderTargetMipmap(b)),
            S.isScene === !0 && S.onAfterRender(y, S, I),
            Ce.resetDefaultState(),
            L = -1,
            M = null,
            T.pop(),
            T.length > 0 ? (p = T[T.length - 1],
            W === !0 && ae.setGlobalState(y.clippingPlanes, p.state.camera)) : p = null,
            f.pop(),
            f.length > 0 ? _ = f[f.length - 1] : _ = null
        }
        ;
        function ga(S, I, z, F) {
            if (S.visible === !1)
                return;
            if (S.layers.test(I.layers)) {
                if (S.isGroup)
                    z = S.renderOrder;
                else if (S.isLOD)
                    S.autoUpdate === !0 && S.update(I);
                else if (S.isLight)
                    p.pushLight(S),
                    S.castShadow && p.pushShadow(S);
                else if (S.isSprite) {
                    if (!S.frustumCulled || Ne.intersectsSprite(S)) {
                        F && ie.setFromMatrixPosition(S.matrixWorld).applyMatrix4(he);
                        const ue = Y.update(S)
                          , fe = S.material;
                        fe.visible && _.push(S, ue, fe, z, ie.z, null)
                    }
                } else if ((S.isMesh || S.isLine || S.isPoints) && (!S.frustumCulled || Ne.intersectsObject(S))) {
                    const ue = Y.update(S)
                      , fe = S.material;
                    if (F && (S.boundingSphere !== void 0 ? (S.boundingSphere === null && S.computeBoundingSphere(),
                    ie.copy(S.boundingSphere.center)) : (ue.boundingSphere === null && ue.computeBoundingSphere(),
                    ie.copy(ue.boundingSphere.center)),
                    ie.applyMatrix4(S.matrixWorld).applyMatrix4(he)),
                    Array.isArray(fe)) {
                        const xe = ue.groups;
                        for (let ye = 0, Te = xe.length; ye < Te; ye++) {
                            const Ie = xe[ye]
                              , rt = fe[Ie.materialIndex];
                            rt && rt.visible && _.push(S, ue, rt, z, ie.z, Ie)
                        }
                    } else
                        fe.visible && _.push(S, ue, fe, z, ie.z, null)
                }
            }
            const se = S.children;
            for (let ue = 0, fe = se.length; ue < fe; ue++)
                ga(se[ue], I, z, F)
        }
        function _a(S, I, z, F) {
            const O = S.opaque
              , se = S.transmissive
              , ue = S.transparent;
            p.setupLightsView(z),
            W === !0 && ae.setGlobalState(y.clippingPlanes, z),
            F && ve.viewport(x.copy(F)),
            O.length > 0 && or(O, I, z),
            se.length > 0 && or(se, I, z),
            ue.length > 0 && or(ue, I, z),
            ve.buffers.depth.setTest(!0),
            ve.buffers.depth.setMask(!0),
            ve.buffers.color.setMask(!0),
            ve.setPolygonOffset(!1)
        }
        function xa(S, I, z, F) {
            if ((z.isScene === !0 ? z.overrideMaterial : null) !== null)
                return;
            p.state.transmissionRenderTarget[F.id] === void 0 && (p.state.transmissionRenderTarget[F.id] = new Yn(1,1,{
                generateMipmaps: !0,
                type: ge.has("EXT_color_buffer_half_float") || ge.has("EXT_color_buffer_float") ? un : Cn,
                minFilter: qt,
                samples: 4,
                stencilBuffer: s,
                resolveDepthBuffer: !1,
                resolveStencilBuffer: !1
            }));
            const se = p.state.transmissionRenderTarget[F.id]
              , ue = F.viewport || x;
            se.setSize(ue.z, ue.w);
            const fe = y.getRenderTarget();
            y.setRenderTarget(se),
            y.getClearColor(R),
            B = y.getClearAlpha(),
            B < 1 && y.setClearColor(16777215, .5),
            y.clear();
            const xe = y.toneMapping;
            y.toneMapping = Rn;
            const ye = F.viewport;
            if (F.viewport !== void 0 && (F.viewport = void 0),
            p.setupLightsView(F),
            W === !0 && ae.setGlobalState(y.clippingPlanes, F),
            or(S, z, F),
            He.updateMultisampleRenderTarget(se),
            He.updateRenderTargetMipmap(se),
            ge.has("WEBGL_multisampled_render_to_texture") === !1) {
                let Te = !1;
                for (let Ie = 0, rt = I.length; Ie < rt; Ie++) {
                    const pt = I[Ie]
                      , Rt = pt.object
                      , Qt = pt.geometry
                      , Ge = pt.material
                      , Ee = pt.group;
                    if (Ge.side === Gt && Rt.layers.test(F.layers)) {
                        const Oi = Ge.side;
                        Ge.side = wt,
                        Ge.needsUpdate = !0,
                        va(Rt, z, F, Qt, Ge, Ee),
                        Ge.side = Oi,
                        Ge.needsUpdate = !0,
                        Te = !0
                    }
                }
                Te === !0 && (He.updateMultisampleRenderTarget(se),
                He.updateRenderTargetMipmap(se))
            }
            y.setRenderTarget(fe),
            y.setClearColor(R, B),
            ye !== void 0 && (F.viewport = ye),
            y.toneMapping = xe
        }
        function or(S, I, z) {
            const F = I.isScene === !0 ? I.overrideMaterial : null;
            for (let O = 0, se = S.length; O < se; O++) {
                const ue = S[O]
                  , fe = ue.object
                  , xe = ue.geometry
                  , ye = F === null ? ue.material : F
                  , Te = ue.group;
                fe.layers.test(z.layers) && va(fe, I, z, xe, ye, Te)
            }
        }
        function va(S, I, z, F, O, se) {
            S.onBeforeRender(y, I, z, F, O, se),
            S.modelViewMatrix.multiplyMatrices(z.matrixWorldInverse, S.matrixWorld),
            S.normalMatrix.getNormalMatrix(S.modelViewMatrix),
            O.onBeforeRender(y, I, z, F, S, se),
            O.transparent === !0 && O.side === Gt && O.forceSinglePass === !1 ? (O.side = wt,
            O.needsUpdate = !0,
            y.renderBufferDirect(z, I, F, O, S, se),
            O.side = pn,
            O.needsUpdate = !0,
            y.renderBufferDirect(z, I, F, O, S, se),
            O.side = Gt) : y.renderBufferDirect(z, I, F, O, S, se),
            S.onAfterRender(y, I, z, F, O, se)
        }
        function cr(S, I, z) {
            I.isScene !== !0 && (I = Fe);
            const F = Pe.get(S)
              , O = p.state.lights
              , se = p.state.shadowsArray
              , ue = O.state.version
              , fe = j.getParameters(S, O.state, se, I, z)
              , xe = j.getProgramCacheKey(fe);
            let ye = F.programs;
            F.environment = S.isMeshStandardMaterial ? I.environment : null,
            F.fog = I.fog,
            F.envMap = (S.isMeshStandardMaterial ? A : tt).get(S.envMap || F.environment),
            F.envMapRotation = F.environment !== null && S.envMap === null ? I.environmentRotation : S.envMapRotation,
            ye === void 0 && (S.addEventListener("dispose", re),
            ye = new Map,
            F.programs = ye);
            let Te = ye.get(xe);
            if (Te !== void 0) {
                if (F.currentProgram === Te && F.lightsStateVersion === ue)
                    return Sa(S, fe),
                    Te
            } else
                fe.uniforms = j.getUniforms(S),
                S.onBuild(z, fe, y),
                S.onBeforeCompile(fe, y),
                Te = j.acquireProgram(fe, xe),
                ye.set(xe, Te),
                F.uniforms = fe.uniforms;
            const Ie = F.uniforms;
            return (!S.isShaderMaterial && !S.isRawShaderMaterial || S.clipping === !0) && (Ie.clippingPlanes = ae.uniform),
            Sa(S, fe),
            F.needsLights = ml(S),
            F.lightsStateVersion = ue,
            F.needsLights && (Ie.ambientLightColor.value = O.state.ambient,
            Ie.lightProbe.value = O.state.probe,
            Ie.directionalLights.value = O.state.directional,
            Ie.directionalLightShadows.value = O.state.directionalShadow,
            Ie.spotLights.value = O.state.spot,
            Ie.spotLightShadows.value = O.state.spotShadow,
            Ie.rectAreaLights.value = O.state.rectArea,
            Ie.ltc_1.value = O.state.rectAreaLTC1,
            Ie.ltc_2.value = O.state.rectAreaLTC2,
            Ie.pointLights.value = O.state.point,
            Ie.pointLightShadows.value = O.state.pointShadow,
            Ie.hemisphereLights.value = O.state.hemi,
            Ie.directionalShadowMap.value = O.state.directionalShadowMap,
            Ie.directionalShadowMatrix.value = O.state.directionalShadowMatrix,
            Ie.spotShadowMap.value = O.state.spotShadowMap,
            Ie.spotLightMatrix.value = O.state.spotLightMatrix,
            Ie.spotLightMap.value = O.state.spotLightMap,
            Ie.pointShadowMap.value = O.state.pointShadowMap,
            Ie.pointShadowMatrix.value = O.state.pointShadowMatrix),
            F.currentProgram = Te,
            F.uniformsList = null,
            Te
        }
        function Ma(S) {
            if (S.uniformsList === null) {
                const I = S.currentProgram.getUniforms();
                S.uniformsList = zr.seqWithValue(I.seq, S.uniforms)
            }
            return S.uniformsList
        }
        function Sa(S, I) {
            const z = Pe.get(S);
            z.outputColorSpace = I.outputColorSpace,
            z.batching = I.batching,
            z.instancing = I.instancing,
            z.instancingColor = I.instancingColor,
            z.instancingMorph = I.instancingMorph,
            z.skinning = I.skinning,
            z.morphTargets = I.morphTargets,
            z.morphNormals = I.morphNormals,
            z.morphColors = I.morphColors,
            z.morphTargetsCount = I.morphTargetsCount,
            z.numClippingPlanes = I.numClippingPlanes,
            z.numIntersection = I.numClipIntersection,
            z.vertexAlphas = I.vertexAlphas,
            z.vertexTangents = I.vertexTangents,
            z.toneMapping = I.toneMapping
        }
        function fl(S, I, z, F, O) {
            I.isScene !== !0 && (I = Fe),
            He.resetTextureUnits();
            const se = I.fog
              , ue = F.isMeshStandardMaterial ? I.environment : null
              , fe = b === null ? y.outputColorSpace : b.isXRRenderTarget === !0 ? b.texture.colorSpace : ut
              , xe = (F.isMeshStandardMaterial ? A : tt).get(F.envMap || ue)
              , ye = F.vertexColors === !0 && !!z.attributes.color && z.attributes.color.itemSize === 4
              , Te = !!z.attributes.tangent && (!!F.normalMap || F.anisotropy > 0)
              , Ie = !!z.morphAttributes.position
              , rt = !!z.morphAttributes.normal
              , pt = !!z.morphAttributes.color;
            let Rt = Rn;
            F.toneMapped && (b === null || b.isXRRenderTarget === !0) && (Rt = y.toneMapping);
            const Qt = z.morphAttributes.position || z.morphAttributes.normal || z.morphAttributes.color
              , Ge = Qt !== void 0 ? Qt.length : 0
              , Ee = Pe.get(F)
              , Oi = p.state.lights;
            if (W === !0 && (ee === !0 || S !== M)) {
                const It = S === M && F.id === L;
                ae.setState(F, S, It)
            }
            let Qe = !1;
            F.version === Ee.__version ? (Ee.needsLights && Ee.lightsStateVersion !== Oi.state.version || Ee.outputColorSpace !== fe || O.isBatchedMesh && Ee.batching === !1 || !O.isBatchedMesh && Ee.batching === !0 || O.isInstancedMesh && Ee.instancing === !1 || !O.isInstancedMesh && Ee.instancing === !0 || O.isSkinnedMesh && Ee.skinning === !1 || !O.isSkinnedMesh && Ee.skinning === !0 || O.isInstancedMesh && Ee.instancingColor === !0 && O.instanceColor === null || O.isInstancedMesh && Ee.instancingColor === !1 && O.instanceColor !== null || O.isInstancedMesh && Ee.instancingMorph === !0 && O.morphTexture === null || O.isInstancedMesh && Ee.instancingMorph === !1 && O.morphTexture !== null || Ee.envMap !== xe || F.fog === !0 && Ee.fog !== se || Ee.numClippingPlanes !== void 0 && (Ee.numClippingPlanes !== ae.numPlanes || Ee.numIntersection !== ae.numIntersection) || Ee.vertexAlphas !== ye || Ee.vertexTangents !== Te || Ee.morphTargets !== Ie || Ee.morphNormals !== rt || Ee.morphColors !== pt || Ee.toneMapping !== Rt || Ee.morphTargetsCount !== Ge) && (Qe = !0) : (Qe = !0,
            Ee.__version = F.version);
            let In = Ee.currentProgram;
            Qe === !0 && (In = cr(F, I, O));
            let ya = !1
              , Bi = !1
              , ts = !1;
            const mt = In.getUniforms()
              , gn = Ee.uniforms;
            if (ve.useProgram(In.program) && (ya = !0,
            Bi = !0,
            ts = !0),
            F.id !== L && (L = F.id,
            Bi = !0),
            ya || M !== S) {
                mt.setValue(N, "projectionMatrix", S.projectionMatrix),
                mt.setValue(N, "viewMatrix", S.matrixWorldInverse);
                const It = mt.map.cameraPosition;
                It !== void 0 && It.setValue(N, ie.setFromMatrixPosition(S.matrixWorld)),
                je.logarithmicDepthBuffer && mt.setValue(N, "logDepthBufFC", 2 / (Math.log(S.far + 1) / Math.LN2)),
                (F.isMeshPhongMaterial || F.isMeshToonMaterial || F.isMeshLambertMaterial || F.isMeshBasicMaterial || F.isMeshStandardMaterial || F.isShaderMaterial) && mt.setValue(N, "isOrthographic", S.isOrthographicCamera === !0),
                M !== S && (M = S,
                Bi = !0,
                ts = !0)
            }
            if (O.isSkinnedMesh) {
                mt.setOptional(N, O, "bindMatrix"),
                mt.setOptional(N, O, "bindMatrixInverse");
                const It = O.skeleton;
                It && (It.boneTexture === null && It.computeBoneTexture(),
                mt.setValue(N, "boneTexture", It.boneTexture, He))
            }
            O.isBatchedMesh && (mt.setOptional(N, O, "batchingTexture"),
            mt.setValue(N, "batchingTexture", O._matricesTexture, He));
            const ns = z.morphAttributes;
            if ((ns.position !== void 0 || ns.normal !== void 0 || ns.color !== void 0) && pe.update(O, z, In),
            (Bi || Ee.receiveShadow !== O.receiveShadow) && (Ee.receiveShadow = O.receiveShadow,
            mt.setValue(N, "receiveShadow", O.receiveShadow)),
            F.isMeshGouraudMaterial && F.envMap !== null && (gn.envMap.value = xe,
            gn.flipEnvMap.value = xe.isCubeTexture && xe.isRenderTargetTexture === !1 ? -1 : 1),
            F.isMeshStandardMaterial && F.envMap === null && I.environment !== null && (gn.envMapIntensity.value = I.environmentIntensity),
            Bi && (mt.setValue(N, "toneMappingExposure", y.toneMappingExposure),
            Ee.needsLights && pl(gn, ts),
            se && F.fog === !0 && Z.refreshFogUniforms(gn, se),
            Z.refreshMaterialUniforms(gn, F, J, q, p.state.transmissionRenderTarget[S.id]),
            zr.upload(N, Ma(Ee), gn, He)),
            F.isShaderMaterial && F.uniformsNeedUpdate === !0 && (zr.upload(N, Ma(Ee), gn, He),
            F.uniformsNeedUpdate = !1),
            F.isSpriteMaterial && mt.setValue(N, "center", O.center),
            mt.setValue(N, "modelViewMatrix", O.modelViewMatrix),
            mt.setValue(N, "normalMatrix", O.normalMatrix),
            mt.setValue(N, "modelMatrix", O.matrixWorld),
            F.isShaderMaterial || F.isRawShaderMaterial) {
                const It = F.uniformsGroups;
                for (let is = 0, gl = It.length; is < gl; is++) {
                    const Ea = It[is];
                    Be.update(Ea, In),
                    Be.bind(Ea, In)
                }
            }
            return In
        }
        function pl(S, I) {
            S.ambientLightColor.needsUpdate = I,
            S.lightProbe.needsUpdate = I,
            S.directionalLights.needsUpdate = I,
            S.directionalLightShadows.needsUpdate = I,
            S.pointLights.needsUpdate = I,
            S.pointLightShadows.needsUpdate = I,
            S.spotLights.needsUpdate = I,
            S.spotLightShadows.needsUpdate = I,
            S.rectAreaLights.needsUpdate = I,
            S.hemisphereLights.needsUpdate = I
        }
        function ml(S) {
            return S.isMeshLambertMaterial || S.isMeshToonMaterial || S.isMeshPhongMaterial || S.isMeshStandardMaterial || S.isShadowMaterial || S.isShaderMaterial && S.lights === !0
        }
        this.getActiveCubeFace = function() {
            return U
        }
        ,
        this.getActiveMipmapLevel = function() {
            return w
        }
        ,
        this.getRenderTarget = function() {
            return b
        }
        ,
        this.setRenderTargetTextures = function(S, I, z) {
            Pe.get(S.texture).__webglTexture = I,
            Pe.get(S.depthTexture).__webglTexture = z;
            const F = Pe.get(S);
            F.__hasExternalTextures = !0,
            F.__autoAllocateDepthBuffer = z === void 0,
            F.__autoAllocateDepthBuffer || ge.has("WEBGL_multisampled_render_to_texture") === !0 && (console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),
            F.__useRenderToTexture = !1)
        }
        ,
        this.setRenderTargetFramebuffer = function(S, I) {
            const z = Pe.get(S);
            z.__webglFramebuffer = I,
            z.__useDefaultFramebuffer = I === void 0
        }
        ,
        this.setRenderTarget = function(S, I=0, z=0) {
            b = S,
            U = I,
            w = z;
            let F = !0
              , O = null
              , se = !1
              , ue = !1;
            if (S) {
                const xe = Pe.get(S);
                xe.__useDefaultFramebuffer !== void 0 ? (ve.bindFramebuffer(N.FRAMEBUFFER, null),
                F = !1) : xe.__webglFramebuffer === void 0 ? He.setupRenderTarget(S) : xe.__hasExternalTextures && He.rebindTextures(S, Pe.get(S.texture).__webglTexture, Pe.get(S.depthTexture).__webglTexture);
                const ye = S.texture;
                (ye.isData3DTexture || ye.isDataArrayTexture || ye.isCompressedArrayTexture) && (ue = !0);
                const Te = Pe.get(S).__webglFramebuffer;
                S.isWebGLCubeRenderTarget ? (Array.isArray(Te[I]) ? O = Te[I][z] : O = Te[I],
                se = !0) : S.samples > 0 && He.useMultisampledRTT(S) === !1 ? O = Pe.get(S).__webglMultisampledFramebuffer : Array.isArray(Te) ? O = Te[z] : O = Te,
                x.copy(S.viewport),
                D.copy(S.scissor),
                V = S.scissorTest
            } else
                x.copy($).multiplyScalar(J).floor(),
                D.copy(de).multiplyScalar(J).floor(),
                V = Me;
            if (ve.bindFramebuffer(N.FRAMEBUFFER, O) && F && ve.drawBuffers(S, O),
            ve.viewport(x),
            ve.scissor(D),
            ve.setScissorTest(V),
            se) {
                const xe = Pe.get(S.texture);
                N.framebufferTexture2D(N.FRAMEBUFFER, N.COLOR_ATTACHMENT0, N.TEXTURE_CUBE_MAP_POSITIVE_X + I, xe.__webglTexture, z)
            } else if (ue) {
                const xe = Pe.get(S.texture)
                  , ye = I || 0;
                N.framebufferTextureLayer(N.FRAMEBUFFER, N.COLOR_ATTACHMENT0, xe.__webglTexture, z || 0, ye)
            }
            L = -1
        }
        ,
        this.readRenderTargetPixels = function(S, I, z, F, O, se, ue) {
            if (!(S && S.isWebGLRenderTarget)) {
                console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");
                return
            }
            let fe = Pe.get(S).__webglFramebuffer;
            if (S.isWebGLCubeRenderTarget && ue !== void 0 && (fe = fe[ue]),
            fe) {
                ve.bindFramebuffer(N.FRAMEBUFFER, fe);
                try {
                    const xe = S.texture
                      , ye = xe.format
                      , Te = xe.type;
                    if (!je.textureFormatReadable(ye)) {
                        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");
                        return
                    }
                    if (!je.textureTypeReadable(Te)) {
                        console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");
                        return
                    }
                    I >= 0 && I <= S.width - F && z >= 0 && z <= S.height - O && N.readPixels(I, z, F, O, le.convert(ye), le.convert(Te), se)
                } finally {
                    const xe = b !== null ? Pe.get(b).__webglFramebuffer : null;
                    ve.bindFramebuffer(N.FRAMEBUFFER, xe)
                }
            }
        }
        ,
        this.copyFramebufferToTexture = function(S, I, z=0) {
            const F = Math.pow(2, -z)
              , O = Math.floor(I.image.width * F)
              , se = Math.floor(I.image.height * F);
            He.setTexture2D(I, 0),
            N.copyTexSubImage2D(N.TEXTURE_2D, z, 0, 0, S.x, S.y, O, se),
            ve.unbindTexture()
        }
        ,
        this.copyTextureToTexture = function(S, I, z, F=0) {
            const O = I.image.width
              , se = I.image.height
              , ue = le.convert(z.format)
              , fe = le.convert(z.type);
            He.setTexture2D(z, 0),
            N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL, z.flipY),
            N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL, z.premultiplyAlpha),
            N.pixelStorei(N.UNPACK_ALIGNMENT, z.unpackAlignment),
            I.isDataTexture ? N.texSubImage2D(N.TEXTURE_2D, F, S.x, S.y, O, se, ue, fe, I.image.data) : I.isCompressedTexture ? N.compressedTexSubImage2D(N.TEXTURE_2D, F, S.x, S.y, I.mipmaps[0].width, I.mipmaps[0].height, ue, I.mipmaps[0].data) : N.texSubImage2D(N.TEXTURE_2D, F, S.x, S.y, ue, fe, I.image),
            F === 0 && z.generateMipmaps && N.generateMipmap(N.TEXTURE_2D),
            ve.unbindTexture()
        }
        ,
        this.copyTextureToTexture3D = function(S, I, z, F, O=0) {
            const se = S.max.x - S.min.x
              , ue = S.max.y - S.min.y
              , fe = S.max.z - S.min.z
              , xe = le.convert(F.format)
              , ye = le.convert(F.type);
            let Te;
            if (F.isData3DTexture)
                He.setTexture3D(F, 0),
                Te = N.TEXTURE_3D;
            else if (F.isDataArrayTexture || F.isCompressedArrayTexture)
                He.setTexture2DArray(F, 0),
                Te = N.TEXTURE_2D_ARRAY;
            else {
                console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");
                return
            }
            N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL, F.flipY),
            N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL, F.premultiplyAlpha),
            N.pixelStorei(N.UNPACK_ALIGNMENT, F.unpackAlignment);
            const Ie = N.getParameter(N.UNPACK_ROW_LENGTH)
              , rt = N.getParameter(N.UNPACK_IMAGE_HEIGHT)
              , pt = N.getParameter(N.UNPACK_SKIP_PIXELS)
              , Rt = N.getParameter(N.UNPACK_SKIP_ROWS)
              , Qt = N.getParameter(N.UNPACK_SKIP_IMAGES)
              , Ge = z.isCompressedTexture ? z.mipmaps[O] : z.image;
            N.pixelStorei(N.UNPACK_ROW_LENGTH, Ge.width),
            N.pixelStorei(N.UNPACK_IMAGE_HEIGHT, Ge.height),
            N.pixelStorei(N.UNPACK_SKIP_PIXELS, S.min.x),
            N.pixelStorei(N.UNPACK_SKIP_ROWS, S.min.y),
            N.pixelStorei(N.UNPACK_SKIP_IMAGES, S.min.z),
            z.isDataTexture || z.isData3DTexture ? N.texSubImage3D(Te, O, I.x, I.y, I.z, se, ue, fe, xe, ye, Ge.data) : F.isCompressedArrayTexture ? N.compressedTexSubImage3D(Te, O, I.x, I.y, I.z, se, ue, fe, xe, Ge.data) : N.texSubImage3D(Te, O, I.x, I.y, I.z, se, ue, fe, xe, ye, Ge),
            N.pixelStorei(N.UNPACK_ROW_LENGTH, Ie),
            N.pixelStorei(N.UNPACK_IMAGE_HEIGHT, rt),
            N.pixelStorei(N.UNPACK_SKIP_PIXELS, pt),
            N.pixelStorei(N.UNPACK_SKIP_ROWS, Rt),
            N.pixelStorei(N.UNPACK_SKIP_IMAGES, Qt),
            O === 0 && F.generateMipmaps && N.generateMipmap(Te),
            ve.unbindTexture()
        }
        ,
        this.initTexture = function(S) {
            S.isCubeTexture ? He.setTextureCube(S, 0) : S.isData3DTexture ? He.setTexture3D(S, 0) : S.isDataArrayTexture || S.isCompressedArrayTexture ? He.setTexture2DArray(S, 0) : He.setTexture2D(S, 0),
            ve.unbindTexture()
        }
        ,
        this.resetState = function() {
            U = 0,
            w = 0,
            b = null,
            ve.reset(),
            Ce.reset()
        }
        ,
        typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{
            detail: this
        }))
    }
    get coordinateSystem() {
        return dn
    }
    get outputColorSpace() {
        return this._outputColorSpace
    }
    set outputColorSpace(e) {
        this._outputColorSpace = e;
        const t = this.getContext();
        t.drawingBufferColorSpace = e === na ? "display-p3" : "srgb",
        t.unpackColorSpace = We.workingColorSpace === $r ? "display-p3" : "srgb"
    }
    get useLegacyLights() {
        return console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),
        this._useLegacyLights
    }
    set useLegacyLights(e) {
        console.warn("THREE.WebGLRenderer: The property .useLegacyLights has been deprecated. Migrate your lighting according to the following guide: https://discourse.threejs.org/t/updates-to-lighting-in-three-js-r155/53733."),
        this._useLegacyLights = e
    }
}
class jm extends et {
    constructor() {
        super(),
        this.isScene = !0,
        this.type = "Scene",
        this.background = null,
        this.environment = null,
        this.fog = null,
        this.backgroundBlurriness = 0,
        this.backgroundIntensity = 1,
        this.backgroundRotation = new Kt,
        this.environmentIntensity = 1,
        this.environmentRotation = new Kt,
        this.overrideMaterial = null,
        typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{
            detail: this
        }))
    }
    copy(e, t) {
        return super.copy(e, t),
        e.background !== null && (this.background = e.background.clone()),
        e.environment !== null && (this.environment = e.environment.clone()),
        e.fog !== null && (this.fog = e.fog.clone()),
        this.backgroundBlurriness = e.backgroundBlurriness,
        this.backgroundIntensity = e.backgroundIntensity,
        this.backgroundRotation.copy(e.backgroundRotation),
        this.environmentIntensity = e.environmentIntensity,
        this.environmentRotation.copy(e.environmentRotation),
        e.overrideMaterial !== null && (this.overrideMaterial = e.overrideMaterial.clone()),
        this.matrixAutoUpdate = e.matrixAutoUpdate,
        this
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return this.fog !== null && (t.object.fog = this.fog.toJSON()),
        this.backgroundBlurriness > 0 && (t.object.backgroundBlurriness = this.backgroundBlurriness),
        this.backgroundIntensity !== 1 && (t.object.backgroundIntensity = this.backgroundIntensity),
        t.object.backgroundRotation = this.backgroundRotation.toArray(),
        this.environmentIntensity !== 1 && (t.object.environmentIntensity = this.environmentIntensity),
        t.object.environmentRotation = this.environmentRotation.toArray(),
        t
    }
}
class $m {
    constructor(e, t) {
        this.isInterleavedBuffer = !0,
        this.array = e,
        this.stride = t,
        this.count = e !== void 0 ? e.length / t : 0,
        this.usage = Ks,
        this._updateRange = {
            offset: 0,
            count: -1
        },
        this.updateRanges = [],
        this.version = 0,
        this.uuid = Ht()
    }
    onUploadCallback() {}
    set needsUpdate(e) {
        e === !0 && this.version++
    }
    get updateRange() {
        return Uc("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),
        this._updateRange
    }
    setUsage(e) {
        return this.usage = e,
        this
    }
    addUpdateRange(e, t) {
        this.updateRanges.push({
            start: e,
            count: t
        })
    }
    clearUpdateRanges() {
        this.updateRanges.length = 0
    }
    copy(e) {
        return this.array = new e.array.constructor(e.array),
        this.count = e.count,
        this.stride = e.stride,
        this.usage = e.usage,
        this
    }
    copyAt(e, t, n) {
        e *= this.stride,
        n *= t.stride;
        for (let i = 0, s = this.stride; i < s; i++)
            this.array[e + i] = t.array[n + i];
        return this
    }
    set(e, t=0) {
        return this.array.set(e, t),
        this
    }
    clone(e) {
        e.arrayBuffers === void 0 && (e.arrayBuffers = {}),
        this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Ht()),
        e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer);
        const t = new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid])
          , n = new this.constructor(t,this.stride);
        return n.setUsage(this.usage),
        n
    }
    onUpload(e) {
        return this.onUploadCallback = e,
        this
    }
    toJSON(e) {
        return e.arrayBuffers === void 0 && (e.arrayBuffers = {}),
        this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Ht()),
        e.arrayBuffers[this.array.buffer._uuid] === void 0 && (e.arrayBuffers[this.array.buffer._uuid] = Array.from(new Uint32Array(this.array.buffer))),
        {
            uuid: this.uuid,
            buffer: this.array.buffer._uuid,
            type: this.array.constructor.name,
            stride: this.stride
        }
    }
}
const vt = new P;
class oa {
    constructor(e, t, n, i=!1) {
        this.isInterleavedBufferAttribute = !0,
        this.name = "",
        this.data = e,
        this.itemSize = t,
        this.offset = n,
        this.normalized = i
    }
    get count() {
        return this.data.count
    }
    get array() {
        return this.data.array
    }
    set needsUpdate(e) {
        this.data.needsUpdate = e
    }
    applyMatrix4(e) {
        for (let t = 0, n = this.data.count; t < n; t++)
            vt.fromBufferAttribute(this, t),
            vt.applyMatrix4(e),
            this.setXYZ(t, vt.x, vt.y, vt.z);
        return this
    }
    applyNormalMatrix(e) {
        for (let t = 0, n = this.count; t < n; t++)
            vt.fromBufferAttribute(this, t),
            vt.applyNormalMatrix(e),
            this.setXYZ(t, vt.x, vt.y, vt.z);
        return this
    }
    transformDirection(e) {
        for (let t = 0, n = this.count; t < n; t++)
            vt.fromBufferAttribute(this, t),
            vt.transformDirection(e),
            this.setXYZ(t, vt.x, vt.y, vt.z);
        return this
    }
    getComponent(e, t) {
        let n = this.array[e * this.data.stride + this.offset + t];
        return this.normalized && (n = Bt(n, this.array)),
        n
    }
    setComponent(e, t, n) {
        return this.normalized && (n = qe(n, this.array)),
        this.data.array[e * this.data.stride + this.offset + t] = n,
        this
    }
    setX(e, t) {
        return this.normalized && (t = qe(t, this.array)),
        this.data.array[e * this.data.stride + this.offset] = t,
        this
    }
    setY(e, t) {
        return this.normalized && (t = qe(t, this.array)),
        this.data.array[e * this.data.stride + this.offset + 1] = t,
        this
    }
    setZ(e, t) {
        return this.normalized && (t = qe(t, this.array)),
        this.data.array[e * this.data.stride + this.offset + 2] = t,
        this
    }
    setW(e, t) {
        return this.normalized && (t = qe(t, this.array)),
        this.data.array[e * this.data.stride + this.offset + 3] = t,
        this
    }
    getX(e) {
        let t = this.data.array[e * this.data.stride + this.offset];
        return this.normalized && (t = Bt(t, this.array)),
        t
    }
    getY(e) {
        let t = this.data.array[e * this.data.stride + this.offset + 1];
        return this.normalized && (t = Bt(t, this.array)),
        t
    }
    getZ(e) {
        let t = this.data.array[e * this.data.stride + this.offset + 2];
        return this.normalized && (t = Bt(t, this.array)),
        t
    }
    getW(e) {
        let t = this.data.array[e * this.data.stride + this.offset + 3];
        return this.normalized && (t = Bt(t, this.array)),
        t
    }
    setXY(e, t, n) {
        return e = e * this.data.stride + this.offset,
        this.normalized && (t = qe(t, this.array),
        n = qe(n, this.array)),
        this.data.array[e + 0] = t,
        this.data.array[e + 1] = n,
        this
    }
    setXYZ(e, t, n, i) {
        return e = e * this.data.stride + this.offset,
        this.normalized && (t = qe(t, this.array),
        n = qe(n, this.array),
        i = qe(i, this.array)),
        this.data.array[e + 0] = t,
        this.data.array[e + 1] = n,
        this.data.array[e + 2] = i,
        this
    }
    setXYZW(e, t, n, i, s) {
        return e = e * this.data.stride + this.offset,
        this.normalized && (t = qe(t, this.array),
        n = qe(n, this.array),
        i = qe(i, this.array),
        s = qe(s, this.array)),
        this.data.array[e + 0] = t,
        this.data.array[e + 1] = n,
        this.data.array[e + 2] = i,
        this.data.array[e + 3] = s,
        this
    }
    clone(e) {
        if (e === void 0) {
            console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");
            const t = [];
            for (let n = 0; n < this.count; n++) {
                const i = n * this.data.stride + this.offset;
                for (let s = 0; s < this.itemSize; s++)
                    t.push(this.data.array[i + s])
            }
            return new Tt(new this.array.constructor(t),this.itemSize,this.normalized)
        } else
            return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}),
            e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)),
            new oa(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)
    }
    toJSON(e) {
        if (e === void 0) {
            console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");
            const t = [];
            for (let n = 0; n < this.count; n++) {
                const i = n * this.data.stride + this.offset;
                for (let s = 0; s < this.itemSize; s++)
                    t.push(this.data.array[i + s])
            }
            return {
                itemSize: this.itemSize,
                type: this.array.constructor.name,
                array: t,
                normalized: this.normalized
            }
        } else
            return e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}),
            e.interleavedBuffers[this.data.uuid] === void 0 && (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)),
            {
                isInterleavedBufferAttribute: !0,
                itemSize: this.itemSize,
                data: this.data.uuid,
                offset: this.offset,
                normalized: this.normalized
            }
    }
}
const jo = new P
  , $o = new Ke
  , Zo = new Ke
  , Zm = new P
  , Jo = new we
  , Pr = new P
  , Ns = new jt
  , Qo = new we
  , Fs = new Zr;
class Jm extends At {
    constructor(e, t) {
        super(e, t),
        this.isSkinnedMesh = !0,
        this.type = "SkinnedMesh",
        this.bindMode = Ra,
        this.bindMatrix = new we,
        this.bindMatrixInverse = new we,
        this.boundingBox = null,
        this.boundingSphere = null
    }
    computeBoundingBox() {
        const e = this.geometry;
        this.boundingBox === null && (this.boundingBox = new mn),
        this.boundingBox.makeEmpty();
        const t = e.getAttribute("position");
        for (let n = 0; n < t.count; n++)
            this.getVertexPosition(n, Pr),
            this.boundingBox.expandByPoint(Pr)
    }
    computeBoundingSphere() {
        const e = this.geometry;
        this.boundingSphere === null && (this.boundingSphere = new jt),
        this.boundingSphere.makeEmpty();
        const t = e.getAttribute("position");
        for (let n = 0; n < t.count; n++)
            this.getVertexPosition(n, Pr),
            this.boundingSphere.expandByPoint(Pr)
    }
    copy(e, t) {
        return super.copy(e, t),
        this.bindMode = e.bindMode,
        this.bindMatrix.copy(e.bindMatrix),
        this.bindMatrixInverse.copy(e.bindMatrixInverse),
        this.skeleton = e.skeleton,
        e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()),
        e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()),
        this
    }
    raycast(e, t) {
        const n = this.material
          , i = this.matrixWorld;
        n !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(),
        Ns.copy(this.boundingSphere),
        Ns.applyMatrix4(i),
        e.ray.intersectsSphere(Ns) !== !1 && (Qo.copy(i).invert(),
        Fs.copy(e.ray).applyMatrix4(Qo),
        !(this.boundingBox !== null && Fs.intersectsBox(this.boundingBox) === !1) && this._computeIntersections(e, t, Fs)))
    }
    getVertexPosition(e, t) {
        return super.getVertexPosition(e, t),
        this.applyBoneTransform(e, t),
        t
    }
    bind(e, t) {
        this.skeleton = e,
        t === void 0 && (this.updateMatrixWorld(!0),
        this.skeleton.calculateInverses(),
        t = this.matrixWorld),
        this.bindMatrix.copy(t),
        this.bindMatrixInverse.copy(t).invert()
    }
    pose() {
        this.skeleton.pose()
    }
    normalizeSkinWeights() {
        const e = new Ke
          , t = this.geometry.attributes.skinWeight;
        for (let n = 0, i = t.count; n < i; n++) {
            e.fromBufferAttribute(t, n);
            const s = 1 / e.manhattanLength();
            s !== 1 / 0 ? e.multiplyScalar(s) : e.set(1, 0, 0, 0),
            t.setXYZW(n, e.x, e.y, e.z, e.w)
        }
    }
    updateMatrixWorld(e) {
        super.updateMatrixWorld(e),
        this.bindMode === Ra ? this.bindMatrixInverse.copy(this.matrixWorld).invert() : this.bindMode === Ql ? this.bindMatrixInverse.copy(this.bindMatrix).invert() : console.warn("THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode)
    }
    applyBoneTransform(e, t) {
        const n = this.skeleton
          , i = this.geometry;
        $o.fromBufferAttribute(i.attributes.skinIndex, e),
        Zo.fromBufferAttribute(i.attributes.skinWeight, e),
        jo.copy(t).applyMatrix4(this.bindMatrix),
        t.set(0, 0, 0);
        for (let s = 0; s < 4; s++) {
            const a = Zo.getComponent(s);
            if (a !== 0) {
                const o = $o.getComponent(s);
                Jo.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]),
                t.addScaledVector(Zm.copy(jo).applyMatrix4(Jo), a)
            }
        }
        return t.applyMatrix4(this.bindMatrixInverse)
    }
}
class Zc extends et {
    constructor() {
        super(),
        this.isBone = !0,
        this.type = "Bone"
    }
}
class ca extends ht {
    constructor(e=null, t=1, n=1, i, s, a, o, c, l=Et, h=Et, u, d) {
        super(null, a, o, c, l, h, i, s, u, d),
        this.isDataTexture = !0,
        this.image = {
            data: e,
            width: t,
            height: n
        },
        this.generateMipmaps = !1,
        this.flipY = !1,
        this.unpackAlignment = 1
    }
}
const ec = new we
  , Qm = new we;
class la {
    constructor(e=[], t=[]) {
        this.uuid = Ht(),
        this.bones = e.slice(0),
        this.boneInverses = t,
        this.boneMatrices = null,
        this.boneTexture = null,
        this.init()
    }
    init() {
        const e = this.bones
          , t = this.boneInverses;
        if (this.boneMatrices = new Float32Array(e.length * 16),
        t.length === 0)
            this.calculateInverses();
        else if (e.length !== t.length) {
            console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),
            this.boneInverses = [];
            for (let n = 0, i = this.bones.length; n < i; n++)
                this.boneInverses.push(new we)
        }
    }
    calculateInverses() {
        this.boneInverses.length = 0;
        for (let e = 0, t = this.bones.length; e < t; e++) {
            const n = new we;
            this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(),
            this.boneInverses.push(n)
        }
    }
    pose() {
        for (let e = 0, t = this.bones.length; e < t; e++) {
            const n = this.bones[e];
            n && n.matrixWorld.copy(this.boneInverses[e]).invert()
        }
        for (let e = 0, t = this.bones.length; e < t; e++) {
            const n = this.bones[e];
            n && (n.parent && n.parent.isBone ? (n.matrix.copy(n.parent.matrixWorld).invert(),
            n.matrix.multiply(n.matrixWorld)) : n.matrix.copy(n.matrixWorld),
            n.matrix.decompose(n.position, n.quaternion, n.scale))
        }
    }
    update() {
        const e = this.bones
          , t = this.boneInverses
          , n = this.boneMatrices
          , i = this.boneTexture;
        for (let s = 0, a = e.length; s < a; s++) {
            const o = e[s] ? e[s].matrixWorld : Qm;
            ec.multiplyMatrices(o, t[s]),
            ec.toArray(n, s * 16)
        }
        i !== null && (i.needsUpdate = !0)
    }
    clone() {
        return new la(this.bones,this.boneInverses)
    }
    computeBoneTexture() {
        let e = Math.sqrt(this.bones.length * 4);
        e = Math.ceil(e / 4) * 4,
        e = Math.max(e, 4);
        const t = new Float32Array(e * e * 4);
        t.set(this.boneMatrices);
        const n = new ca(t,e,e,zt,Pt);
        return n.needsUpdate = !0,
        this.boneMatrices = t,
        this.boneTexture = n,
        this
    }
    getBoneByName(e) {
        for (let t = 0, n = this.bones.length; t < n; t++) {
            const i = this.bones[t];
            if (i.name === e)
                return i
        }
    }
    dispose() {
        this.boneTexture !== null && (this.boneTexture.dispose(),
        this.boneTexture = null)
    }
    fromJSON(e, t) {
        this.uuid = e.uuid;
        for (let n = 0, i = e.bones.length; n < i; n++) {
            const s = e.bones[n];
            let a = t[s];
            a === void 0 && (console.warn("THREE.Skeleton: No bone found with UUID:", s),
            a = new Zc),
            this.bones.push(a),
            this.boneInverses.push(new we().fromArray(e.boneInverses[n]))
        }
        return this.init(),
        this
    }
    toJSON() {
        const e = {
            metadata: {
                version: 4.6,
                type: "Skeleton",
                generator: "Skeleton.toJSON"
            },
            bones: [],
            boneInverses: []
        };
        e.uuid = this.uuid;
        const t = this.bones
          , n = this.boneInverses;
        for (let i = 0, s = t.length; i < s; i++) {
            const a = t[i];
            e.bones.push(a.uuid);
            const o = n[i];
            e.boneInverses.push(o.toArray())
        }
        return e
    }
}
class $s extends Tt {
    constructor(e, t, n, i=1) {
        super(e, t, n),
        this.isInstancedBufferAttribute = !0,
        this.meshPerAttribute = i
    }
    copy(e) {
        return super.copy(e),
        this.meshPerAttribute = e.meshPerAttribute,
        this
    }
    toJSON() {
        const e = super.toJSON();
        return e.meshPerAttribute = this.meshPerAttribute,
        e.isInstancedBufferAttribute = !0,
        e
    }
}
const pi = new we
  , tc = new we
  , Ir = []
  , nc = new mn
  , eg = new we
  , Gi = new At
  , Wi = new jt;
class tg extends At {
    constructor(e, t, n) {
        super(e, t),
        this.isInstancedMesh = !0,
        this.instanceMatrix = new $s(new Float32Array(n * 16),16),
        this.instanceColor = null,
        this.morphTexture = null,
        this.count = n,
        this.boundingBox = null,
        this.boundingSphere = null;
        for (let i = 0; i < n; i++)
            this.setMatrixAt(i, eg)
    }
    computeBoundingBox() {
        const e = this.geometry
          , t = this.count;
        this.boundingBox === null && (this.boundingBox = new mn),
        e.boundingBox === null && e.computeBoundingBox(),
        this.boundingBox.makeEmpty();
        for (let n = 0; n < t; n++)
            this.getMatrixAt(n, pi),
            nc.copy(e.boundingBox).applyMatrix4(pi),
            this.boundingBox.union(nc)
    }
    computeBoundingSphere() {
        const e = this.geometry
          , t = this.count;
        this.boundingSphere === null && (this.boundingSphere = new jt),
        e.boundingSphere === null && e.computeBoundingSphere(),
        this.boundingSphere.makeEmpty();
        for (let n = 0; n < t; n++)
            this.getMatrixAt(n, pi),
            Wi.copy(e.boundingSphere).applyMatrix4(pi),
            this.boundingSphere.union(Wi)
    }
    copy(e, t) {
        return super.copy(e, t),
        this.instanceMatrix.copy(e.instanceMatrix),
        e.morphTexture !== null && (this.morphTexture = e.morphTexture.clone()),
        e.instanceColor !== null && (this.instanceColor = e.instanceColor.clone()),
        this.count = e.count,
        e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()),
        e.boundingSphere !== null && (this.boundingSphere = e.boundingSphere.clone()),
        this
    }
    getColorAt(e, t) {
        t.fromArray(this.instanceColor.array, e * 3)
    }
    getMatrixAt(e, t) {
        t.fromArray(this.instanceMatrix.array, e * 16)
    }
    getMorphAt(e, t) {
        const n = t.morphTargetInfluences
          , i = this.morphTexture.source.data.data
          , s = n.length + 1
          , a = e * s + 1;
        for (let o = 0; o < n.length; o++)
            n[o] = i[a + o]
    }
    raycast(e, t) {
        const n = this.matrixWorld
          , i = this.count;
        if (Gi.geometry = this.geometry,
        Gi.material = this.material,
        Gi.material !== void 0 && (this.boundingSphere === null && this.computeBoundingSphere(),
        Wi.copy(this.boundingSphere),
        Wi.applyMatrix4(n),
        e.ray.intersectsSphere(Wi) !== !1))
            for (let s = 0; s < i; s++) {
                this.getMatrixAt(s, pi),
                tc.multiplyMatrices(n, pi),
                Gi.matrixWorld = tc,
                Gi.raycast(e, Ir);
                for (let a = 0, o = Ir.length; a < o; a++) {
                    const c = Ir[a];
                    c.instanceId = s,
                    c.object = this,
                    t.push(c)
                }
                Ir.length = 0
            }
    }
    setColorAt(e, t) {
        this.instanceColor === null && (this.instanceColor = new $s(new Float32Array(this.instanceMatrix.count * 3),3)),
        t.toArray(this.instanceColor.array, e * 3)
    }
    setMatrixAt(e, t) {
        t.toArray(this.instanceMatrix.array, e * 16)
    }
    setMorphAt(e, t) {
        const n = t.morphTargetInfluences
          , i = n.length + 1;
        this.morphTexture === null && (this.morphTexture = new ca(new Float32Array(i * this.count),i,this.count,bc,Pt));
        const s = this.morphTexture.source.data.data;
        let a = 0;
        for (let l = 0; l < n.length; l++)
            a += n[l];
        const o = this.geometry.morphTargetsRelative ? 1 : 1 - a
          , c = i * e;
        s[c] = o,
        s.set(n, c + 1)
    }
    updateMorphTargets() {}
    dispose() {
        return this.dispatchEvent({
            type: "dispose"
        }),
        this.morphTexture !== null && (this.morphTexture.dispose(),
        this.morphTexture = null),
        this
    }
}
class Jc extends Yt {
    constructor(e) {
        super(),
        this.isLineBasicMaterial = !0,
        this.type = "LineBasicMaterial",
        this.color = new Se(16777215),
        this.map = null,
        this.linewidth = 1,
        this.linecap = "round",
        this.linejoin = "round",
        this.fog = !0,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.color.copy(e.color),
        this.map = e.map,
        this.linewidth = e.linewidth,
        this.linecap = e.linecap,
        this.linejoin = e.linejoin,
        this.fog = e.fog,
        this
    }
}
const Yr = new P
  , Kr = new P
  , ic = new we
  , Xi = new Zr
  , Dr = new jt
  , Os = new P
  , rc = new P;
class ha extends et {
    constructor(e=new $t, t=new Jc) {
        super(),
        this.isLine = !0,
        this.type = "Line",
        this.geometry = e,
        this.material = t,
        this.updateMorphTargets()
    }
    copy(e, t) {
        return super.copy(e, t),
        this.material = Array.isArray(e.material) ? e.material.slice() : e.material,
        this.geometry = e.geometry,
        this
    }
    computeLineDistances() {
        const e = this.geometry;
        if (e.index === null) {
            const t = e.attributes.position
              , n = [0];
            for (let i = 1, s = t.count; i < s; i++)
                Yr.fromBufferAttribute(t, i - 1),
                Kr.fromBufferAttribute(t, i),
                n[i] = n[i - 1],
                n[i] += Yr.distanceTo(Kr);
            e.setAttribute("lineDistance", new fn(n,1))
        } else
            console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
        return this
    }
    raycast(e, t) {
        const n = this.geometry
          , i = this.matrixWorld
          , s = e.params.Line.threshold
          , a = n.drawRange;
        if (n.boundingSphere === null && n.computeBoundingSphere(),
        Dr.copy(n.boundingSphere),
        Dr.applyMatrix4(i),
        Dr.radius += s,
        e.ray.intersectsSphere(Dr) === !1)
            return;
        ic.copy(i).invert(),
        Xi.copy(e.ray).applyMatrix4(ic);
        const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3)
          , c = o * o
          , l = this.isLineSegments ? 2 : 1
          , h = n.index
          , d = n.attributes.position;
        if (h !== null) {
            const m = Math.max(0, a.start)
              , g = Math.min(h.count, a.start + a.count);
            for (let _ = m, p = g - 1; _ < p; _ += l) {
                const f = h.getX(_)
                  , T = h.getX(_ + 1)
                  , y = Ur(this, e, Xi, c, f, T);
                y && t.push(y)
            }
            if (this.isLineLoop) {
                const _ = h.getX(g - 1)
                  , p = h.getX(m)
                  , f = Ur(this, e, Xi, c, _, p);
                f && t.push(f)
            }
        } else {
            const m = Math.max(0, a.start)
              , g = Math.min(d.count, a.start + a.count);
            for (let _ = m, p = g - 1; _ < p; _ += l) {
                const f = Ur(this, e, Xi, c, _, _ + 1);
                f && t.push(f)
            }
            if (this.isLineLoop) {
                const _ = Ur(this, e, Xi, c, g - 1, m);
                _ && t.push(_)
            }
        }
    }
    updateMorphTargets() {
        const t = this.geometry.morphAttributes
          , n = Object.keys(t);
        if (n.length > 0) {
            const i = t[n[0]];
            if (i !== void 0) {
                this.morphTargetInfluences = [],
                this.morphTargetDictionary = {};
                for (let s = 0, a = i.length; s < a; s++) {
                    const o = i[s].name || String(s);
                    this.morphTargetInfluences.push(0),
                    this.morphTargetDictionary[o] = s
                }
            }
        }
    }
}
function Ur(r, e, t, n, i, s) {
    const a = r.geometry.attributes.position;
    if (Yr.fromBufferAttribute(a, i),
    Kr.fromBufferAttribute(a, s),
    t.distanceSqToSegment(Yr, Kr, Os, rc) > n)
        return;
    Os.applyMatrix4(r.matrixWorld);
    const c = e.ray.origin.distanceTo(Os);
    if (!(c < e.near || c > e.far))
        return {
            distance: c,
            point: rc.clone().applyMatrix4(r.matrixWorld),
            index: i,
            face: null,
            faceIndex: null,
            object: r
        }
}
const sc = new P
  , ac = new P;
class ng extends ha {
    constructor(e, t) {
        super(e, t),
        this.isLineSegments = !0,
        this.type = "LineSegments"
    }
    computeLineDistances() {
        const e = this.geometry;
        if (e.index === null) {
            const t = e.attributes.position
              , n = [];
            for (let i = 0, s = t.count; i < s; i += 2)
                sc.fromBufferAttribute(t, i),
                ac.fromBufferAttribute(t, i + 1),
                n[i] = i === 0 ? 0 : n[i - 1],
                n[i + 1] = n[i] + sc.distanceTo(ac);
            e.setAttribute("lineDistance", new fn(n,1))
        } else
            console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");
        return this
    }
}
class ig extends ha {
    constructor(e, t) {
        super(e, t),
        this.isLineLoop = !0,
        this.type = "LineLoop"
    }
}
class Qc extends Yt {
    constructor(e) {
        super(),
        this.isPointsMaterial = !0,
        this.type = "PointsMaterial",
        this.color = new Se(16777215),
        this.map = null,
        this.alphaMap = null,
        this.size = 1,
        this.sizeAttenuation = !0,
        this.fog = !0,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.color.copy(e.color),
        this.map = e.map,
        this.alphaMap = e.alphaMap,
        this.size = e.size,
        this.sizeAttenuation = e.sizeAttenuation,
        this.fog = e.fog,
        this
    }
}
const oc = new we
  , Zs = new Zr
  , Nr = new jt
  , Fr = new P;
class rg extends et {
    constructor(e=new $t, t=new Qc) {
        super(),
        this.isPoints = !0,
        this.type = "Points",
        this.geometry = e,
        this.material = t,
        this.updateMorphTargets()
    }
    copy(e, t) {
        return super.copy(e, t),
        this.material = Array.isArray(e.material) ? e.material.slice() : e.material,
        this.geometry = e.geometry,
        this
    }
    raycast(e, t) {
        const n = this.geometry
          , i = this.matrixWorld
          , s = e.params.Points.threshold
          , a = n.drawRange;
        if (n.boundingSphere === null && n.computeBoundingSphere(),
        Nr.copy(n.boundingSphere),
        Nr.applyMatrix4(i),
        Nr.radius += s,
        e.ray.intersectsSphere(Nr) === !1)
            return;
        oc.copy(i).invert(),
        Zs.copy(e.ray).applyMatrix4(oc);
        const o = s / ((this.scale.x + this.scale.y + this.scale.z) / 3)
          , c = o * o
          , l = n.index
          , u = n.attributes.position;
        if (l !== null) {
            const d = Math.max(0, a.start)
              , m = Math.min(l.count, a.start + a.count);
            for (let g = d, _ = m; g < _; g++) {
                const p = l.getX(g);
                Fr.fromBufferAttribute(u, p),
                cc(Fr, p, c, i, e, t, this)
            }
        } else {
            const d = Math.max(0, a.start)
              , m = Math.min(u.count, a.start + a.count);
            for (let g = d, _ = m; g < _; g++)
                Fr.fromBufferAttribute(u, g),
                cc(Fr, g, c, i, e, t, this)
        }
    }
    updateMorphTargets() {
        const t = this.geometry.morphAttributes
          , n = Object.keys(t);
        if (n.length > 0) {
            const i = t[n[0]];
            if (i !== void 0) {
                this.morphTargetInfluences = [],
                this.morphTargetDictionary = {};
                for (let s = 0, a = i.length; s < a; s++) {
                    const o = i[s].name || String(s);
                    this.morphTargetInfluences.push(0),
                    this.morphTargetDictionary[o] = s
                }
            }
        }
    }
}
function cc(r, e, t, n, i, s, a) {
    const o = Zs.distanceSqToPoint(r);
    if (o < t) {
        const c = new P;
        Zs.closestPointToPoint(r, c),
        c.applyMatrix4(n);
        const l = i.ray.origin.distanceTo(c);
        if (l < i.near || l > i.far)
            return;
        s.push({
            distance: l,
            distanceToRay: Math.sqrt(o),
            point: c,
            index: e,
            face: null,
            object: a
        })
    }
}
class es extends Yt {
    constructor(e) {
        super(),
        this.isMeshStandardMaterial = !0,
        this.defines = {
            STANDARD: ""
        },
        this.type = "MeshStandardMaterial",
        this.color = new Se(16777215),
        this.roughness = 1,
        this.metalness = 0,
        this.map = null,
        this.lightMap = null,
        this.lightMapIntensity = 1,
        this.aoMap = null,
        this.aoMapIntensity = 1,
        this.emissive = new Se(0),
        this.emissiveIntensity = 1,
        this.emissiveMap = null,
        this.bumpMap = null,
        this.bumpScale = 1,
        this.normalMap = null,
        this.normalMapType = Pc,
        this.normalScale = new Ue(1,1),
        this.displacementMap = null,
        this.displacementScale = 1,
        this.displacementBias = 0,
        this.roughnessMap = null,
        this.metalnessMap = null,
        this.alphaMap = null,
        this.envMap = null,
        this.envMapRotation = new Kt,
        this.envMapIntensity = 1,
        this.wireframe = !1,
        this.wireframeLinewidth = 1,
        this.wireframeLinecap = "round",
        this.wireframeLinejoin = "round",
        this.flatShading = !1,
        this.fog = !0,
        this.setValues(e)
    }
    copy(e) {
        return super.copy(e),
        this.defines = {
            STANDARD: ""
        },
        this.color.copy(e.color),
        this.roughness = e.roughness,
        this.metalness = e.metalness,
        this.map = e.map,
        this.lightMap = e.lightMap,
        this.lightMapIntensity = e.lightMapIntensity,
        this.aoMap = e.aoMap,
        this.aoMapIntensity = e.aoMapIntensity,
        this.emissive.copy(e.emissive),
        this.emissiveMap = e.emissiveMap,
        this.emissiveIntensity = e.emissiveIntensity,
        this.bumpMap = e.bumpMap,
        this.bumpScale = e.bumpScale,
        this.normalMap = e.normalMap,
        this.normalMapType = e.normalMapType,
        this.normalScale.copy(e.normalScale),
        this.displacementMap = e.displacementMap,
        this.displacementScale = e.displacementScale,
        this.displacementBias = e.displacementBias,
        this.roughnessMap = e.roughnessMap,
        this.metalnessMap = e.metalnessMap,
        this.alphaMap = e.alphaMap,
        this.envMap = e.envMap,
        this.envMapRotation.copy(e.envMapRotation),
        this.envMapIntensity = e.envMapIntensity,
        this.wireframe = e.wireframe,
        this.wireframeLinewidth = e.wireframeLinewidth,
        this.wireframeLinecap = e.wireframeLinecap,
        this.wireframeLinejoin = e.wireframeLinejoin,
        this.flatShading = e.flatShading,
        this.fog = e.fog,
        this
    }
}
class Zt extends es {
    constructor(e) {
        super(),
        this.isMeshPhysicalMaterial = !0,
        this.defines = {
            STANDARD: "",
            PHYSICAL: ""
        },
        this.type = "MeshPhysicalMaterial",
        this.anisotropyRotation = 0,
        this.anisotropyMap = null,
        this.clearcoatMap = null,
        this.clearcoatRoughness = 0,
        this.clearcoatRoughnessMap = null,
        this.clearcoatNormalScale = new Ue(1,1),
        this.clearcoatNormalMap = null,
        this.ior = 1.5,
        Object.defineProperty(this, "reflectivity", {
            get: function() {
                return dt(2.5 * (this.ior - 1) / (this.ior + 1), 0, 1)
            },
            set: function(t) {
                this.ior = (1 + .4 * t) / (1 - .4 * t)
            }
        }),
        this.iridescenceMap = null,
        this.iridescenceIOR = 1.3,
        this.iridescenceThicknessRange = [100, 400],
        this.iridescenceThicknessMap = null,
        this.sheenColor = new Se(0),
        this.sheenColorMap = null,
        this.sheenRoughness = 1,
        this.sheenRoughnessMap = null,
        this.transmissionMap = null,
        this.thickness = 0,
        this.thicknessMap = null,
        this.attenuationDistance = 1 / 0,
        this.attenuationColor = new Se(1,1,1),
        this.specularIntensity = 1,
        this.specularIntensityMap = null,
        this.specularColor = new Se(1,1,1),
        this.specularColorMap = null,
        this._anisotropy = 0,
        this._clearcoat = 0,
        this._dispersion = 0,
        this._iridescence = 0,
        this._sheen = 0,
        this._transmission = 0,
        this.setValues(e)
    }
    get anisotropy() {
        return this._anisotropy
    }
    set anisotropy(e) {
        this._anisotropy > 0 != e > 0 && this.version++,
        this._anisotropy = e
    }
    get clearcoat() {
        return this._clearcoat
    }
    set clearcoat(e) {
        this._clearcoat > 0 != e > 0 && this.version++,
        this._clearcoat = e
    }
    get iridescence() {
        return this._iridescence
    }
    set iridescence(e) {
        this._iridescence > 0 != e > 0 && this.version++,
        this._iridescence = e
    }
    get dispersion() {
        return this._dispersion
    }
    set dispersion(e) {
        this._dispersion > 0 != e > 0 && this.version++,
        this._dispersion = e
    }
    get sheen() {
        return this._sheen
    }
    set sheen(e) {
        this._sheen > 0 != e > 0 && this.version++,
        this._sheen = e
    }
    get transmission() {
        return this._transmission
    }
    set transmission(e) {
        this._transmission > 0 != e > 0 && this.version++,
        this._transmission = e
    }
    copy(e) {
        return super.copy(e),
        this.defines = {
            STANDARD: "",
            PHYSICAL: ""
        },
        this.anisotropy = e.anisotropy,
        this.anisotropyRotation = e.anisotropyRotation,
        this.anisotropyMap = e.anisotropyMap,
        this.clearcoat = e.clearcoat,
        this.clearcoatMap = e.clearcoatMap,
        this.clearcoatRoughness = e.clearcoatRoughness,
        this.clearcoatRoughnessMap = e.clearcoatRoughnessMap,
        this.clearcoatNormalMap = e.clearcoatNormalMap,
        this.clearcoatNormalScale.copy(e.clearcoatNormalScale),
        this.dispersion = e.dispersion,
        this.ior = e.ior,
        this.iridescence = e.iridescence,
        this.iridescenceMap = e.iridescenceMap,
        this.iridescenceIOR = e.iridescenceIOR,
        this.iridescenceThicknessRange = [...e.iridescenceThicknessRange],
        this.iridescenceThicknessMap = e.iridescenceThicknessMap,
        this.sheen = e.sheen,
        this.sheenColor.copy(e.sheenColor),
        this.sheenColorMap = e.sheenColorMap,
        this.sheenRoughness = e.sheenRoughness,
        this.sheenRoughnessMap = e.sheenRoughnessMap,
        this.transmission = e.transmission,
        this.transmissionMap = e.transmissionMap,
        this.thickness = e.thickness,
        this.thicknessMap = e.thicknessMap,
        this.attenuationDistance = e.attenuationDistance,
        this.attenuationColor.copy(e.attenuationColor),
        this.specularIntensity = e.specularIntensity,
        this.specularIntensityMap = e.specularIntensityMap,
        this.specularColor.copy(e.specularColor),
        this.specularColorMap = e.specularColorMap,
        this
    }
}
function Or(r, e, t) {
    return !r || !t && r.constructor === e ? r : typeof e.BYTES_PER_ELEMENT == "number" ? new e(r) : Array.prototype.slice.call(r)
}
function sg(r) {
    return ArrayBuffer.isView(r) && !(r instanceof DataView)
}
function ag(r) {
    function e(i, s) {
        return r[i] - r[s]
    }
    const t = r.length
      , n = new Array(t);
    for (let i = 0; i !== t; ++i)
        n[i] = i;
    return n.sort(e),
    n
}
function lc(r, e, t) {
    const n = r.length
      , i = new r.constructor(n);
    for (let s = 0, a = 0; a !== n; ++s) {
        const o = t[s] * e;
        for (let c = 0; c !== e; ++c)
            i[a++] = r[o + c]
    }
    return i
}
function el(r, e, t, n) {
    let i = 1
      , s = r[0];
    for (; s !== void 0 && s[n] === void 0; )
        s = r[i++];
    if (s === void 0)
        return;
    let a = s[n];
    if (a !== void 0)
        if (Array.isArray(a))
            do
                a = s[n],
                a !== void 0 && (e.push(s.time),
                t.push.apply(t, a)),
                s = r[i++];
            while (s !== void 0);
        else if (a.toArray !== void 0)
            do
                a = s[n],
                a !== void 0 && (e.push(s.time),
                a.toArray(t, t.length)),
                s = r[i++];
            while (s !== void 0);
        else
            do
                a = s[n],
                a !== void 0 && (e.push(s.time),
                t.push(a)),
                s = r[i++];
            while (s !== void 0)
}
class ar {
    constructor(e, t, n, i) {
        this.parameterPositions = e,
        this._cachedIndex = 0,
        this.resultBuffer = i !== void 0 ? i : new t.constructor(n),
        this.sampleValues = t,
        this.valueSize = n,
        this.settings = null,
        this.DefaultSettings_ = {}
    }
    evaluate(e) {
        const t = this.parameterPositions;
        let n = this._cachedIndex
          , i = t[n]
          , s = t[n - 1];
        n: {
            e: {
                let a;
                t: {
                    i: if (!(e < i)) {
                        for (let o = n + 2; ; ) {
                            if (i === void 0) {
                                if (e < s)
                                    break i;
                                return n = t.length,
                                this._cachedIndex = n,
                                this.copySampleValue_(n - 1)
                            }
                            if (n === o)
                                break;
                            if (s = i,
                            i = t[++n],
                            e < i)
                                break e
                        }
                        a = t.length;
                        break t
                    }
                    if (!(e >= s)) {
                        const o = t[1];
                        e < o && (n = 2,
                        s = o);
                        for (let c = n - 2; ; ) {
                            if (s === void 0)
                                return this._cachedIndex = 0,
                                this.copySampleValue_(0);
                            if (n === c)
                                break;
                            if (i = s,
                            s = t[--n - 1],
                            e >= s)
                                break e
                        }
                        a = n,
                        n = 0;
                        break t
                    }
                    break n
                }
                for (; n < a; ) {
                    const o = n + a >>> 1;
                    e < t[o] ? a = o : n = o + 1
                }
                if (i = t[n],
                s = t[n - 1],
                s === void 0)
                    return this._cachedIndex = 0,
                    this.copySampleValue_(0);
                if (i === void 0)
                    return n = t.length,
                    this._cachedIndex = n,
                    this.copySampleValue_(n - 1)
            }
            this._cachedIndex = n,
            this.intervalChanged_(n, s, i)
        }
        return this.interpolate_(n, s, e, i)
    }
    getSettings_() {
        return this.settings || this.DefaultSettings_
    }
    copySampleValue_(e) {
        const t = this.resultBuffer
          , n = this.sampleValues
          , i = this.valueSize
          , s = e * i;
        for (let a = 0; a !== i; ++a)
            t[a] = n[s + a];
        return t
    }
    interpolate_() {
        throw new Error("call to abstract method")
    }
    intervalChanged_() {}
}
class og extends ar {
    constructor(e, t, n, i) {
        super(e, t, n, i),
        this._weightPrev = -0,
        this._offsetPrev = -0,
        this._weightNext = -0,
        this._offsetNext = -0,
        this.DefaultSettings_ = {
            endingStart: to,
            endingEnd: to
        }
    }
    intervalChanged_(e, t, n) {
        const i = this.parameterPositions;
        let s = e - 2
          , a = e + 1
          , o = i[s]
          , c = i[a];
        if (o === void 0)
            switch (this.getSettings_().endingStart) {
            case no:
                s = e,
                o = 2 * t - n;
                break;
            case io:
                s = i.length - 2,
                o = t + i[s] - i[s + 1];
                break;
            default:
                s = e,
                o = n
            }
        if (c === void 0)
            switch (this.getSettings_().endingEnd) {
            case no:
                a = e,
                c = 2 * n - t;
                break;
            case io:
                a = 1,
                c = n + i[1] - i[0];
                break;
            default:
                a = e - 1,
                c = t
            }
        const l = (n - t) * .5
          , h = this.valueSize;
        this._weightPrev = l / (t - o),
        this._weightNext = l / (c - n),
        this._offsetPrev = s * h,
        this._offsetNext = a * h
    }
    interpolate_(e, t, n, i) {
        const s = this.resultBuffer
          , a = this.sampleValues
          , o = this.valueSize
          , c = e * o
          , l = c - o
          , h = this._offsetPrev
          , u = this._offsetNext
          , d = this._weightPrev
          , m = this._weightNext
          , g = (n - t) / (i - t)
          , _ = g * g
          , p = _ * g
          , f = -d * p + 2 * d * _ - d * g
          , T = (1 + d) * p + (-1.5 - 2 * d) * _ + (-.5 + d) * g + 1
          , y = (-1 - m) * p + (1.5 + m) * _ + .5 * g
          , E = m * p - m * _;
        for (let U = 0; U !== o; ++U)
            s[U] = f * a[h + U] + T * a[l + U] + y * a[c + U] + E * a[u + U];
        return s
    }
}
class cg extends ar {
    constructor(e, t, n, i) {
        super(e, t, n, i)
    }
    interpolate_(e, t, n, i) {
        const s = this.resultBuffer
          , a = this.sampleValues
          , o = this.valueSize
          , c = e * o
          , l = c - o
          , h = (n - t) / (i - t)
          , u = 1 - h;
        for (let d = 0; d !== o; ++d)
            s[d] = a[l + d] * u + a[c + d] * h;
        return s
    }
}
class lg extends ar {
    constructor(e, t, n, i) {
        super(e, t, n, i)
    }
    interpolate_(e) {
        return this.copySampleValue_(e - 1)
    }
}
class Jt {
    constructor(e, t, n, i) {
        if (e === void 0)
            throw new Error("THREE.KeyframeTrack: track name is undefined");
        if (t === void 0 || t.length === 0)
            throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
        this.name = e,
        this.times = Or(t, this.TimeBufferType),
        this.values = Or(n, this.ValueBufferType),
        this.setInterpolation(i || this.DefaultInterpolation)
    }
    static toJSON(e) {
        const t = e.constructor;
        let n;
        if (t.toJSON !== this.toJSON)
            n = t.toJSON(e);
        else {
            n = {
                name: e.name,
                times: Or(e.times, Array),
                values: Or(e.values, Array)
            };
            const i = e.getInterpolation();
            i !== e.DefaultInterpolation && (n.interpolation = i)
        }
        return n.type = e.ValueTypeName,
        n
    }
    InterpolantFactoryMethodDiscrete(e) {
        return new lg(this.times,this.values,this.getValueSize(),e)
    }
    InterpolantFactoryMethodLinear(e) {
        return new cg(this.times,this.values,this.getValueSize(),e)
    }
    InterpolantFactoryMethodSmooth(e) {
        return new og(this.times,this.values,this.getValueSize(),e)
    }
    setInterpolation(e) {
        let t;
        switch (e) {
        case tr:
            t = this.InterpolantFactoryMethodDiscrete;
            break;
        case wi:
            t = this.InterpolantFactoryMethodLinear;
            break;
        case ls:
            t = this.InterpolantFactoryMethodSmooth;
            break
        }
        if (t === void 0) {
            const n = "unsupported interpolation for " + this.ValueTypeName + " keyframe track named " + this.name;
            if (this.createInterpolant === void 0)
                if (e !== this.DefaultInterpolation)
                    this.setInterpolation(this.DefaultInterpolation);
                else
                    throw new Error(n);
            return console.warn("THREE.KeyframeTrack:", n),
            this
        }
        return this.createInterpolant = t,
        this
    }
    getInterpolation() {
        switch (this.createInterpolant) {
        case this.InterpolantFactoryMethodDiscrete:
            return tr;
        case this.InterpolantFactoryMethodLinear:
            return wi;
        case this.InterpolantFactoryMethodSmooth:
            return ls
        }
    }
    getValueSize() {
        return this.values.length / this.times.length
    }
    shift(e) {
        if (e !== 0) {
            const t = this.times;
            for (let n = 0, i = t.length; n !== i; ++n)
                t[n] += e
        }
        return this
    }
    scale(e) {
        if (e !== 1) {
            const t = this.times;
            for (let n = 0, i = t.length; n !== i; ++n)
                t[n] *= e
        }
        return this
    }
    trim(e, t) {
        const n = this.times
          , i = n.length;
        let s = 0
          , a = i - 1;
        for (; s !== i && n[s] < e; )
            ++s;
        for (; a !== -1 && n[a] > t; )
            --a;
        if (++a,
        s !== 0 || a !== i) {
            s >= a && (a = Math.max(a, 1),
            s = a - 1);
            const o = this.getValueSize();
            this.times = n.slice(s, a),
            this.values = this.values.slice(s * o, a * o)
        }
        return this
    }
    validate() {
        let e = !0;
        const t = this.getValueSize();
        t - Math.floor(t) !== 0 && (console.error("THREE.KeyframeTrack: Invalid value size in track.", this),
        e = !1);
        const n = this.times
          , i = this.values
          , s = n.length;
        s === 0 && (console.error("THREE.KeyframeTrack: Track is empty.", this),
        e = !1);
        let a = null;
        for (let o = 0; o !== s; o++) {
            const c = n[o];
            if (typeof c == "number" && isNaN(c)) {
                console.error("THREE.KeyframeTrack: Time is not a valid number.", this, o, c),
                e = !1;
                break
            }
            if (a !== null && a > c) {
                console.error("THREE.KeyframeTrack: Out of order keys.", this, o, c, a),
                e = !1;
                break
            }
            a = c
        }
        if (i !== void 0 && sg(i))
            for (let o = 0, c = i.length; o !== c; ++o) {
                const l = i[o];
                if (isNaN(l)) {
                    console.error("THREE.KeyframeTrack: Value is not a valid number.", this, o, l),
                    e = !1;
                    break
                }
            }
        return e
    }
    optimize() {
        const e = this.times.slice()
          , t = this.values.slice()
          , n = this.getValueSize()
          , i = this.getInterpolation() === ls
          , s = e.length - 1;
        let a = 1;
        for (let o = 1; o < s; ++o) {
            let c = !1;
            const l = e[o]
              , h = e[o + 1];
            if (l !== h && (o !== 1 || l !== e[0]))
                if (i)
                    c = !0;
                else {
                    const u = o * n
                      , d = u - n
                      , m = u + n;
                    for (let g = 0; g !== n; ++g) {
                        const _ = t[u + g];
                        if (_ !== t[d + g] || _ !== t[m + g]) {
                            c = !0;
                            break
                        }
                    }
                }
            if (c) {
                if (o !== a) {
                    e[a] = e[o];
                    const u = o * n
                      , d = a * n;
                    for (let m = 0; m !== n; ++m)
                        t[d + m] = t[u + m]
                }
                ++a
            }
        }
        if (s > 0) {
            e[a] = e[s];
            for (let o = s * n, c = a * n, l = 0; l !== n; ++l)
                t[c + l] = t[o + l];
            ++a
        }
        return a !== e.length ? (this.times = e.slice(0, a),
        this.values = t.slice(0, a * n)) : (this.times = e,
        this.values = t),
        this
    }
    clone() {
        const e = this.times.slice()
          , t = this.values.slice()
          , n = this.constructor
          , i = new n(this.name,e,t);
        return i.createInterpolant = this.createInterpolant,
        i
    }
}
Jt.prototype.TimeBufferType = Float32Array;
Jt.prototype.ValueBufferType = Float32Array;
Jt.prototype.DefaultInterpolation = wi;
class Ui extends Jt {
}
Ui.prototype.ValueTypeName = "bool";
Ui.prototype.ValueBufferType = Array;
Ui.prototype.DefaultInterpolation = tr;
Ui.prototype.InterpolantFactoryMethodLinear = void 0;
Ui.prototype.InterpolantFactoryMethodSmooth = void 0;
class tl extends Jt {
}
tl.prototype.ValueTypeName = "color";
class Li extends Jt {
}
Li.prototype.ValueTypeName = "number";
class hg extends ar {
    constructor(e, t, n, i) {
        super(e, t, n, i)
    }
    interpolate_(e, t, n, i) {
        const s = this.resultBuffer
          , a = this.sampleValues
          , o = this.valueSize
          , c = (n - t) / (i - t);
        let l = e * o;
        for (let h = l + o; l !== h; l += 4)
            Pn.slerpFlat(s, 0, a, l - o, a, l, c);
        return s
    }
}
class Kn extends Jt {
    InterpolantFactoryMethodLinear(e) {
        return new hg(this.times,this.values,this.getValueSize(),e)
    }
}
Kn.prototype.ValueTypeName = "quaternion";
Kn.prototype.DefaultInterpolation = wi;
Kn.prototype.InterpolantFactoryMethodSmooth = void 0;
class Ni extends Jt {
}
Ni.prototype.ValueTypeName = "string";
Ni.prototype.ValueBufferType = Array;
Ni.prototype.DefaultInterpolation = tr;
Ni.prototype.InterpolantFactoryMethodLinear = void 0;
Ni.prototype.InterpolantFactoryMethodSmooth = void 0;
class Pi extends Jt {
}
Pi.prototype.ValueTypeName = "vector";
class ug {
    constructor(e="", t=-1, n=[], i=lh) {
        this.name = e,
        this.tracks = n,
        this.duration = t,
        this.blendMode = i,
        this.uuid = Ht(),
        this.duration < 0 && this.resetDuration()
    }
    static parse(e) {
        const t = []
          , n = e.tracks
          , i = 1 / (e.fps || 1);
        for (let a = 0, o = n.length; a !== o; ++a)
            t.push(fg(n[a]).scale(i));
        const s = new this(e.name,e.duration,t,e.blendMode);
        return s.uuid = e.uuid,
        s
    }
    static toJSON(e) {
        const t = []
          , n = e.tracks
          , i = {
            name: e.name,
            duration: e.duration,
            tracks: t,
            uuid: e.uuid,
            blendMode: e.blendMode
        };
        for (let s = 0, a = n.length; s !== a; ++s)
            t.push(Jt.toJSON(n[s]));
        return i
    }
    static CreateFromMorphTargetSequence(e, t, n, i) {
        const s = t.length
          , a = [];
        for (let o = 0; o < s; o++) {
            let c = []
              , l = [];
            c.push((o + s - 1) % s, o, (o + 1) % s),
            l.push(0, 1, 0);
            const h = ag(c);
            c = lc(c, 1, h),
            l = lc(l, 1, h),
            !i && c[0] === 0 && (c.push(s),
            l.push(l[0])),
            a.push(new Li(".morphTargetInfluences[" + t[o].name + "]",c,l).scale(1 / n))
        }
        return new this(e,-1,a)
    }
    static findByName(e, t) {
        let n = e;
        if (!Array.isArray(e)) {
            const i = e;
            n = i.geometry && i.geometry.animations || i.animations
        }
        for (let i = 0; i < n.length; i++)
            if (n[i].name === t)
                return n[i];
        return null
    }
    static CreateClipsFromMorphTargetSequences(e, t, n) {
        const i = {}
          , s = /^([\w-]*?)([\d]+)$/;
        for (let o = 0, c = e.length; o < c; o++) {
            const l = e[o]
              , h = l.name.match(s);
            if (h && h.length > 1) {
                const u = h[1];
                let d = i[u];
                d || (i[u] = d = []),
                d.push(l)
            }
        }
        const a = [];
        for (const o in i)
            a.push(this.CreateFromMorphTargetSequence(o, i[o], t, n));
        return a
    }
    static parseAnimation(e, t) {
        if (!e)
            return console.error("THREE.AnimationClip: No animation in JSONLoader data."),
            null;
        const n = function(u, d, m, g, _) {
            if (m.length !== 0) {
                const p = []
                  , f = [];
                el(m, p, f, g),
                p.length !== 0 && _.push(new u(d,p,f))
            }
        }
          , i = []
          , s = e.name || "default"
          , a = e.fps || 30
          , o = e.blendMode;
        let c = e.length || -1;
        const l = e.hierarchy || [];
        for (let u = 0; u < l.length; u++) {
            const d = l[u].keys;
            if (!(!d || d.length === 0))
                if (d[0].morphTargets) {
                    const m = {};
                    let g;
                    for (g = 0; g < d.length; g++)
                        if (d[g].morphTargets)
                            for (let _ = 0; _ < d[g].morphTargets.length; _++)
                                m[d[g].morphTargets[_]] = -1;
                    for (const _ in m) {
                        const p = []
                          , f = [];
                        for (let T = 0; T !== d[g].morphTargets.length; ++T) {
                            const y = d[g];
                            p.push(y.time),
                            f.push(y.morphTarget === _ ? 1 : 0)
                        }
                        i.push(new Li(".morphTargetInfluence[" + _ + "]",p,f))
                    }
                    c = m.length * a
                } else {
                    const m = ".bones[" + t[u].name + "]";
                    n(Pi, m + ".position", d, "pos", i),
                    n(Kn, m + ".quaternion", d, "rot", i),
                    n(Pi, m + ".scale", d, "scl", i)
                }
        }
        return i.length === 0 ? null : new this(s,c,i,o)
    }
    resetDuration() {
        const e = this.tracks;
        let t = 0;
        for (let n = 0, i = e.length; n !== i; ++n) {
            const s = this.tracks[n];
            t = Math.max(t, s.times[s.times.length - 1])
        }
        return this.duration = t,
        this
    }
    trim() {
        for (let e = 0; e < this.tracks.length; e++)
            this.tracks[e].trim(0, this.duration);
        return this
    }
    validate() {
        let e = !0;
        for (let t = 0; t < this.tracks.length; t++)
            e = e && this.tracks[t].validate();
        return e
    }
    optimize() {
        for (let e = 0; e < this.tracks.length; e++)
            this.tracks[e].optimize();
        return this
    }
    clone() {
        const e = [];
        for (let t = 0; t < this.tracks.length; t++)
            e.push(this.tracks[t].clone());
        return new this.constructor(this.name,this.duration,e,this.blendMode)
    }
    toJSON() {
        return this.constructor.toJSON(this)
    }
}
function dg(r) {
    switch (r.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
        return Li;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
        return Pi;
    case "color":
        return tl;
    case "quaternion":
        return Kn;
    case "bool":
    case "boolean":
        return Ui;
    case "string":
        return Ni
    }
    throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + r)
}
function fg(r) {
    if (r.type === void 0)
        throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
    const e = dg(r.type);
    if (r.times === void 0) {
        const t = []
          , n = [];
        el(r.keys, t, n, "value"),
        r.times = t,
        r.values = n
    }
    return e.parse !== void 0 ? e.parse(r) : new e(r.name,r.times,r.values,r.interpolation)
}
const bn = {
    enabled: !1,
    files: {},
    add: function(r, e) {
        this.enabled !== !1 && (this.files[r] = e)
    },
    get: function(r) {
        if (this.enabled !== !1)
            return this.files[r]
    },
    remove: function(r) {
        delete this.files[r]
    },
    clear: function() {
        this.files = {}
    }
};
class pg {
    constructor(e, t, n) {
        const i = this;
        let s = !1, a = 0, o = 0, c;
        const l = [];
        this.onStart = void 0,
        this.onLoad = e,
        this.onProgress = t,
        this.onError = n,
        this.itemStart = function(h) {
            o++,
            s === !1 && i.onStart !== void 0 && i.onStart(h, a, o),
            s = !0
        }
        ,
        this.itemEnd = function(h) {
            a++,
            i.onProgress !== void 0 && i.onProgress(h, a, o),
            a === o && (s = !1,
            i.onLoad !== void 0 && i.onLoad())
        }
        ,
        this.itemError = function(h) {
            i.onError !== void 0 && i.onError(h)
        }
        ,
        this.resolveURL = function(h) {
            return c ? c(h) : h
        }
        ,
        this.setURLModifier = function(h) {
            return c = h,
            this
        }
        ,
        this.addHandler = function(h, u) {
            return l.push(h, u),
            this
        }
        ,
        this.removeHandler = function(h) {
            const u = l.indexOf(h);
            return u !== -1 && l.splice(u, 2),
            this
        }
        ,
        this.getHandler = function(h) {
            for (let u = 0, d = l.length; u < d; u += 2) {
                const m = l[u]
                  , g = l[u + 1];
                if (m.global && (m.lastIndex = 0),
                m.test(h))
                    return g
            }
            return null
        }
    }
}
const mg = new pg;
class jn {
    constructor(e) {
        this.manager = e !== void 0 ? e : mg,
        this.crossOrigin = "anonymous",
        this.withCredentials = !1,
        this.path = "",
        this.resourcePath = "",
        this.requestHeader = {}
    }
    load() {}
    loadAsync(e, t) {
        const n = this;
        return new Promise(function(i, s) {
            n.load(e, i, t, s)
        }
        )
    }
    parse() {}
    setCrossOrigin(e) {
        return this.crossOrigin = e,
        this
    }
    setWithCredentials(e) {
        return this.withCredentials = e,
        this
    }
    setPath(e) {
        return this.path = e,
        this
    }
    setResourcePath(e) {
        return this.resourcePath = e,
        this
    }
    setRequestHeader(e) {
        return this.requestHeader = e,
        this
    }
}
jn.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const an = {};
class gg extends Error {
    constructor(e, t) {
        super(e),
        this.response = t
    }
}
class ua extends jn {
    constructor(e) {
        super(e)
    }
    load(e, t, n, i) {
        e === void 0 && (e = ""),
        this.path !== void 0 && (e = this.path + e),
        e = this.manager.resolveURL(e);
        const s = bn.get(e);
        if (s !== void 0)
            return this.manager.itemStart(e),
            setTimeout(()=>{
                t && t(s),
                this.manager.itemEnd(e)
            }
            , 0),
            s;
        if (an[e] !== void 0) {
            an[e].push({
                onLoad: t,
                onProgress: n,
                onError: i
            });
            return
        }
        an[e] = [],
        an[e].push({
            onLoad: t,
            onProgress: n,
            onError: i
        });
        const a = new Request(e,{
            headers: new Headers(this.requestHeader),
            credentials: this.withCredentials ? "include" : "same-origin"
        })
          , o = this.mimeType
          , c = this.responseType;
        fetch(a).then(l=>{
            if (l.status === 200 || l.status === 0) {
                if (l.status === 0 && console.warn("THREE.FileLoader: HTTP Status 0 received."),
                typeof ReadableStream > "u" || l.body === void 0 || l.body.getReader === void 0)
                    return l;
                const h = an[e]
                  , u = l.body.getReader()
                  , d = l.headers.get("X-File-Size") || l.headers.get("Content-Length")
                  , m = d ? parseInt(d) : 0
                  , g = m !== 0;
                let _ = 0;
                const p = new ReadableStream({
                    start(f) {
                        T();
                        function T() {
                            u.read().then(({done: y, value: E})=>{
                                if (y)
                                    f.close();
                                else {
                                    _ += E.byteLength;
                                    const U = new ProgressEvent("progress",{
                                        lengthComputable: g,
                                        loaded: _,
                                        total: m
                                    });
                                    for (let w = 0, b = h.length; w < b; w++) {
                                        const L = h[w];
                                        L.onProgress && L.onProgress(U)
                                    }
                                    f.enqueue(E),
                                    T()
                                }
                            }
                            )
                        }
                    }
                });
                return new Response(p)
            } else
                throw new gg(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)
        }
        ).then(l=>{
            switch (c) {
            case "arraybuffer":
                return l.arrayBuffer();
            case "blob":
                return l.blob();
            case "document":
                return l.text().then(h=>new DOMParser().parseFromString(h, o));
            case "json":
                return l.json();
            default:
                if (o === void 0)
                    return l.text();
                {
                    const u = /charset="?([^;"\s]*)"?/i.exec(o)
                      , d = u && u[1] ? u[1].toLowerCase() : void 0
                      , m = new TextDecoder(d);
                    return l.arrayBuffer().then(g=>m.decode(g))
                }
            }
        }
        ).then(l=>{
            bn.add(e, l);
            const h = an[e];
            delete an[e];
            for (let u = 0, d = h.length; u < d; u++) {
                const m = h[u];
                m.onLoad && m.onLoad(l)
            }
        }
        ).catch(l=>{
            const h = an[e];
            if (h === void 0)
                throw this.manager.itemError(e),
                l;
            delete an[e];
            for (let u = 0, d = h.length; u < d; u++) {
                const m = h[u];
                m.onError && m.onError(l)
            }
            this.manager.itemError(e)
        }
        ).finally(()=>{
            this.manager.itemEnd(e)
        }
        ),
        this.manager.itemStart(e)
    }
    setResponseType(e) {
        return this.responseType = e,
        this
    }
    setMimeType(e) {
        return this.mimeType = e,
        this
    }
}
class _g extends jn {
    constructor(e) {
        super(e)
    }
    load(e, t, n, i) {
        this.path !== void 0 && (e = this.path + e),
        e = this.manager.resolveURL(e);
        const s = this
          , a = bn.get(e);
        if (a !== void 0)
            return s.manager.itemStart(e),
            setTimeout(function() {
                t && t(a),
                s.manager.itemEnd(e)
            }, 0),
            a;
        const o = nr("img");
        function c() {
            h(),
            bn.add(e, this),
            t && t(this),
            s.manager.itemEnd(e)
        }
        function l(u) {
            h(),
            i && i(u),
            s.manager.itemError(e),
            s.manager.itemEnd(e)
        }
        function h() {
            o.removeEventListener("load", c, !1),
            o.removeEventListener("error", l, !1)
        }
        return o.addEventListener("load", c, !1),
        o.addEventListener("error", l, !1),
        e.slice(0, 5) !== "data:" && this.crossOrigin !== void 0 && (o.crossOrigin = this.crossOrigin),
        s.manager.itemStart(e),
        o.src = e,
        o
    }
}
class xg extends jn {
    constructor(e) {
        super(e)
    }
    load(e, t, n, i) {
        const s = this
          , a = new ca
          , o = new ua(this.manager);
        return o.setResponseType("arraybuffer"),
        o.setRequestHeader(this.requestHeader),
        o.setPath(this.path),
        o.setWithCredentials(s.withCredentials),
        o.load(e, function(c) {
            let l;
            try {
                l = s.parse(c)
            } catch (h) {
                if (i !== void 0)
                    i(h);
                else {
                    console.error(h);
                    return
                }
            }
            l.image !== void 0 ? a.image = l.image : l.data !== void 0 && (a.image.width = l.width,
            a.image.height = l.height,
            a.image.data = l.data),
            a.wrapS = l.wrapS !== void 0 ? l.wrapS : Xt,
            a.wrapT = l.wrapT !== void 0 ? l.wrapT : Xt,
            a.magFilter = l.magFilter !== void 0 ? l.magFilter : lt,
            a.minFilter = l.minFilter !== void 0 ? l.minFilter : lt,
            a.anisotropy = l.anisotropy !== void 0 ? l.anisotropy : 1,
            l.colorSpace !== void 0 && (a.colorSpace = l.colorSpace),
            l.flipY !== void 0 && (a.flipY = l.flipY),
            l.format !== void 0 && (a.format = l.format),
            l.type !== void 0 && (a.type = l.type),
            l.mipmaps !== void 0 && (a.mipmaps = l.mipmaps,
            a.minFilter = qt),
            l.mipmapCount === 1 && (a.minFilter = lt),
            l.generateMipmaps !== void 0 && (a.generateMipmaps = l.generateMipmaps),
            a.needsUpdate = !0,
            t && t(a, l)
        }, n, i),
        a
    }
}
class vg extends jn {
    constructor(e) {
        super(e)
    }
    load(e, t, n, i) {
        const s = new ht
          , a = new _g(this.manager);
        return a.setCrossOrigin(this.crossOrigin),
        a.setPath(this.path),
        a.load(e, function(o) {
            s.image = o,
            s.needsUpdate = !0,
            t !== void 0 && t(s)
        }, n, i),
        s
    }
}
class da extends et {
    constructor(e, t=1) {
        super(),
        this.isLight = !0,
        this.type = "Light",
        this.color = new Se(e),
        this.intensity = t
    }
    dispose() {}
    copy(e, t) {
        return super.copy(e, t),
        this.color.copy(e.color),
        this.intensity = e.intensity,
        this
    }
    toJSON(e) {
        const t = super.toJSON(e);
        return t.object.color = this.color.getHex(),
        t.object.intensity = this.intensity,
        this.groundColor !== void 0 && (t.object.groundColor = this.groundColor.getHex()),
        this.distance !== void 0 && (t.object.distance = this.distance),
        this.angle !== void 0 && (t.object.angle = this.angle),
        this.decay !== void 0 && (t.object.decay = this.decay),
        this.penumbra !== void 0 && (t.object.penumbra = this.penumbra),
        this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()),
        t
    }
}
const Bs = new we
  , hc = new P
  , uc = new P;
class fa {
    constructor(e) {
        this.camera = e,
        this.bias = 0,
        this.normalBias = 0,
        this.radius = 1,
        this.blurSamples = 8,
        this.mapSize = new Ue(512,512),
        this.map = null,
        this.mapPass = null,
        this.matrix = new we,
        this.autoUpdate = !0,
        this.needsUpdate = !1,
        this._frustum = new ra,
        this._frameExtents = new Ue(1,1),
        this._viewportCount = 1,
        this._viewports = [new Ke(0,0,1,1)]
    }
    getViewportCount() {
        return this._viewportCount
    }
    getFrustum() {
        return this._frustum
    }
    updateMatrices(e) {
        const t = this.camera
          , n = this.matrix;
        hc.setFromMatrixPosition(e.matrixWorld),
        t.position.copy(hc),
        uc.setFromMatrixPosition(e.target.matrixWorld),
        t.lookAt(uc),
        t.updateMatrixWorld(),
        Bs.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
        this._frustum.setFromProjectionMatrix(Bs),
        n.set(.5, 0, 0, .5, 0, .5, 0, .5, 0, 0, .5, .5, 0, 0, 0, 1),
        n.multiply(Bs)
    }
    getViewport(e) {
        return this._viewports[e]
    }
    getFrameExtents() {
        return this._frameExtents
    }
    dispose() {
        this.map && this.map.dispose(),
        this.mapPass && this.mapPass.dispose()
    }
    copy(e) {
        return this.camera = e.camera.clone(),
        this.bias = e.bias,
        this.radius = e.radius,
        this.mapSize.copy(e.mapSize),
        this
    }
    clone() {
        return new this.constructor().copy(this)
    }
    toJSON() {
        const e = {};
        return this.bias !== 0 && (e.bias = this.bias),
        this.normalBias !== 0 && (e.normalBias = this.normalBias),
        this.radius !== 1 && (e.radius = this.radius),
        (this.mapSize.x !== 512 || this.mapSize.y !== 512) && (e.mapSize = this.mapSize.toArray()),
        e.camera = this.camera.toJSON(!1).object,
        delete e.camera.matrix,
        e
    }
}
class Mg extends fa {
    constructor() {
        super(new yt(50,1,.5,500)),
        this.isSpotLightShadow = !0,
        this.focus = 1
    }
    updateMatrices(e) {
        const t = this.camera
          , n = Ri * 2 * e.angle * this.focus
          , i = this.mapSize.width / this.mapSize.height
          , s = e.distance || t.far;
        (n !== t.fov || i !== t.aspect || s !== t.far) && (t.fov = n,
        t.aspect = i,
        t.far = s,
        t.updateProjectionMatrix()),
        super.updateMatrices(e)
    }
    copy(e) {
        return super.copy(e),
        this.focus = e.focus,
        this
    }
}
class Sg extends da {
    constructor(e, t, n=0, i=Math.PI / 3, s=0, a=2) {
        super(e, t),
        this.isSpotLight = !0,
        this.type = "SpotLight",
        this.position.copy(et.DEFAULT_UP),
        this.updateMatrix(),
        this.target = new et,
        this.distance = n,
        this.angle = i,
        this.penumbra = s,
        this.decay = a,
        this.map = null,
        this.shadow = new Mg
    }
    get power() {
        return this.intensity * Math.PI
    }
    set power(e) {
        this.intensity = e / Math.PI
    }
    dispose() {
        this.shadow.dispose()
    }
    copy(e, t) {
        return super.copy(e, t),
        this.distance = e.distance,
        this.angle = e.angle,
        this.penumbra = e.penumbra,
        this.decay = e.decay,
        this.target = e.target.clone(),
        this.shadow = e.shadow.clone(),
        this
    }
}
const dc = new we
  , qi = new P
  , zs = new P;
class yg extends fa {
    constructor() {
        super(new yt(90,1,.5,500)),
        this.isPointLightShadow = !0,
        this._frameExtents = new Ue(4,2),
        this._viewportCount = 6,
        this._viewports = [new Ke(2,1,1,1), new Ke(0,1,1,1), new Ke(3,1,1,1), new Ke(1,1,1,1), new Ke(3,0,1,1), new Ke(1,0,1,1)],
        this._cubeDirections = [new P(1,0,0), new P(-1,0,0), new P(0,0,1), new P(0,0,-1), new P(0,1,0), new P(0,-1,0)],
        this._cubeUps = [new P(0,1,0), new P(0,1,0), new P(0,1,0), new P(0,1,0), new P(0,0,1), new P(0,0,-1)]
    }
    updateMatrices(e, t=0) {
        const n = this.camera
          , i = this.matrix
          , s = e.distance || n.far;
        s !== n.far && (n.far = s,
        n.updateProjectionMatrix()),
        qi.setFromMatrixPosition(e.matrixWorld),
        n.position.copy(qi),
        zs.copy(n.position),
        zs.add(this._cubeDirections[t]),
        n.up.copy(this._cubeUps[t]),
        n.lookAt(zs),
        n.updateMatrixWorld(),
        i.makeTranslation(-qi.x, -qi.y, -qi.z),
        dc.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
        this._frustum.setFromProjectionMatrix(dc)
    }
}
class Eg extends da {
    constructor(e, t, n=0, i=2) {
        super(e, t),
        this.isPointLight = !0,
        this.type = "PointLight",
        this.distance = n,
        this.decay = i,
        this.shadow = new yg
    }
    get power() {
        return this.intensity * 4 * Math.PI
    }
    set power(e) {
        this.intensity = e / (4 * Math.PI)
    }
    dispose() {
        this.shadow.dispose()
    }
    copy(e, t) {
        return super.copy(e, t),
        this.distance = e.distance,
        this.decay = e.decay,
        this.shadow = e.shadow.clone(),
        this
    }
}
class Tg extends fa {
    constructor() {
        super(new sa(-5,5,5,-5,.5,500)),
        this.isDirectionalLightShadow = !0
    }
}
class nl extends da {
    constructor(e, t) {
        super(e, t),
        this.isDirectionalLight = !0,
        this.type = "DirectionalLight",
        this.position.copy(et.DEFAULT_UP),
        this.updateMatrix(),
        this.target = new et,
        this.shadow = new Tg
    }
    dispose() {
        this.shadow.dispose()
    }
    copy(e) {
        return super.copy(e),
        this.target = e.target.clone(),
        this.shadow = e.shadow.clone(),
        this
    }
}
class Qi {
    static decodeText(e) {
        if (typeof TextDecoder < "u")
            return new TextDecoder().decode(e);
        let t = "";
        for (let n = 0, i = e.length; n < i; n++)
            t += String.fromCharCode(e[n]);
        try {
            return decodeURIComponent(escape(t))
        } catch {
            return t
        }
    }
    static extractUrlBase(e) {
        const t = e.lastIndexOf("/");
        return t === -1 ? "./" : e.slice(0, t + 1)
    }
    static resolveURL(e, t) {
        return typeof e != "string" || e === "" ? "" : (/^https?:\/\//i.test(t) && /^\//.test(e) && (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")),
        /^(https?:)?\/\//i.test(e) || /^data:.*,.*$/i.test(e) || /^blob:.*$/i.test(e) ? e : t + e)
    }
}
class Ag extends jn {
    constructor(e) {
        super(e),
        this.isImageBitmapLoader = !0,
        typeof createImageBitmap > "u" && console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),
        typeof fetch > "u" && console.warn("THREE.ImageBitmapLoader: fetch() not supported."),
        this.options = {
            premultiplyAlpha: "none"
        }
    }
    setOptions(e) {
        return this.options = e,
        this
    }
    load(e, t, n, i) {
        e === void 0 && (e = ""),
        this.path !== void 0 && (e = this.path + e),
        e = this.manager.resolveURL(e);
        const s = this
          , a = bn.get(e);
        if (a !== void 0) {
            if (s.manager.itemStart(e),
            a.then) {
                a.then(l=>{
                    t && t(l),
                    s.manager.itemEnd(e)
                }
                ).catch(l=>{
                    i && i(l)
                }
                );
                return
            }
            return setTimeout(function() {
                t && t(a),
                s.manager.itemEnd(e)
            }, 0),
            a
        }
        const o = {};
        o.credentials = this.crossOrigin === "anonymous" ? "same-origin" : "include",
        o.headers = this.requestHeader;
        const c = fetch(e, o).then(function(l) {
            return l.blob()
        }).then(function(l) {
            return createImageBitmap(l, Object.assign(s.options, {
                colorSpaceConversion: "none"
            }))
        }).then(function(l) {
            return bn.add(e, l),
            t && t(l),
            s.manager.itemEnd(e),
            l
        }).catch(function(l) {
            i && i(l),
            bn.remove(e),
            s.manager.itemError(e),
            s.manager.itemEnd(e)
        });
        bn.add(e, c),
        s.manager.itemStart(e)
    }
}
const pa = "\\[\\]\\.:\\/"
  , bg = new RegExp("[" + pa + "]","g")
  , ma = "[^" + pa + "]"
  , wg = "[^" + pa.replace("\\.", "") + "]"
  , Rg = /((?:WC+[\/:])*)/.source.replace("WC", ma)
  , Cg = /(WCOD+)?/.source.replace("WCOD", wg)
  , Lg = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", ma)
  , Pg = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", ma)
  , Ig = new RegExp("^" + Rg + Cg + Lg + Pg + "$")
  , Dg = ["material", "materials", "bones", "map"];
class Ug {
    constructor(e, t, n) {
        const i = n || Ye.parseTrackName(t);
        this._targetGroup = e,
        this._bindings = e.subscribe_(t, i)
    }
    getValue(e, t) {
        this.bind();
        const n = this._targetGroup.nCachedObjects_
          , i = this._bindings[n];
        i !== void 0 && i.getValue(e, t)
    }
    setValue(e, t) {
        const n = this._bindings;
        for (let i = this._targetGroup.nCachedObjects_, s = n.length; i !== s; ++i)
            n[i].setValue(e, t)
    }
    bind() {
        const e = this._bindings;
        for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
            e[t].bind()
    }
    unbind() {
        const e = this._bindings;
        for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
            e[t].unbind()
    }
}
class Ye {
    constructor(e, t, n) {
        this.path = t,
        this.parsedPath = n || Ye.parseTrackName(t),
        this.node = Ye.findNode(e, this.parsedPath.nodeName),
        this.rootNode = e,
        this.getValue = this._getValue_unbound,
        this.setValue = this._setValue_unbound
    }
    static create(e, t, n) {
        return e && e.isAnimationObjectGroup ? new Ye.Composite(e,t,n) : new Ye(e,t,n)
    }
    static sanitizeNodeName(e) {
        return e.replace(/\s/g, "_").replace(bg, "")
    }
    static parseTrackName(e) {
        const t = Ig.exec(e);
        if (t === null)
            throw new Error("PropertyBinding: Cannot parse trackName: " + e);
        const n = {
            nodeName: t[2],
            objectName: t[3],
            objectIndex: t[4],
            propertyName: t[5],
            propertyIndex: t[6]
        }
          , i = n.nodeName && n.nodeName.lastIndexOf(".");
        if (i !== void 0 && i !== -1) {
            const s = n.nodeName.substring(i + 1);
            Dg.indexOf(s) !== -1 && (n.nodeName = n.nodeName.substring(0, i),
            n.objectName = s)
        }
        if (n.propertyName === null || n.propertyName.length === 0)
            throw new Error("PropertyBinding: can not parse propertyName from trackName: " + e);
        return n
    }
    static findNode(e, t) {
        if (t === void 0 || t === "" || t === "." || t === -1 || t === e.name || t === e.uuid)
            return e;
        if (e.skeleton) {
            const n = e.skeleton.getBoneByName(t);
            if (n !== void 0)
                return n
        }
        if (e.children) {
            const n = function(s) {
                for (let a = 0; a < s.length; a++) {
                    const o = s[a];
                    if (o.name === t || o.uuid === t)
                        return o;
                    const c = n(o.children);
                    if (c)
                        return c
                }
                return null
            }
              , i = n(e.children);
            if (i)
                return i
        }
        return null
    }
    _getValue_unavailable() {}
    _setValue_unavailable() {}
    _getValue_direct(e, t) {
        e[t] = this.targetObject[this.propertyName]
    }
    _getValue_array(e, t) {
        const n = this.resolvedProperty;
        for (let i = 0, s = n.length; i !== s; ++i)
            e[t++] = n[i]
    }
    _getValue_arrayElement(e, t) {
        e[t] = this.resolvedProperty[this.propertyIndex]
    }
    _getValue_toArray(e, t) {
        this.resolvedProperty.toArray(e, t)
    }
    _setValue_direct(e, t) {
        this.targetObject[this.propertyName] = e[t]
    }
    _setValue_direct_setNeedsUpdate(e, t) {
        this.targetObject[this.propertyName] = e[t],
        this.targetObject.needsUpdate = !0
    }
    _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
        this.targetObject[this.propertyName] = e[t],
        this.targetObject.matrixWorldNeedsUpdate = !0
    }
    _setValue_array(e, t) {
        const n = this.resolvedProperty;
        for (let i = 0, s = n.length; i !== s; ++i)
            n[i] = e[t++]
    }
    _setValue_array_setNeedsUpdate(e, t) {
        const n = this.resolvedProperty;
        for (let i = 0, s = n.length; i !== s; ++i)
            n[i] = e[t++];
        this.targetObject.needsUpdate = !0
    }
    _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
        const n = this.resolvedProperty;
        for (let i = 0, s = n.length; i !== s; ++i)
            n[i] = e[t++];
        this.targetObject.matrixWorldNeedsUpdate = !0
    }
    _setValue_arrayElement(e, t) {
        this.resolvedProperty[this.propertyIndex] = e[t]
    }
    _setValue_arrayElement_setNeedsUpdate(e, t) {
        this.resolvedProperty[this.propertyIndex] = e[t],
        this.targetObject.needsUpdate = !0
    }
    _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
        this.resolvedProperty[this.propertyIndex] = e[t],
        this.targetObject.matrixWorldNeedsUpdate = !0
    }
    _setValue_fromArray(e, t) {
        this.resolvedProperty.fromArray(e, t)
    }
    _setValue_fromArray_setNeedsUpdate(e, t) {
        this.resolvedProperty.fromArray(e, t),
        this.targetObject.needsUpdate = !0
    }
    _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
        this.resolvedProperty.fromArray(e, t),
        this.targetObject.matrixWorldNeedsUpdate = !0
    }
    _getValue_unbound(e, t) {
        this.bind(),
        this.getValue(e, t)
    }
    _setValue_unbound(e, t) {
        this.bind(),
        this.setValue(e, t)
    }
    bind() {
        let e = this.node;
        const t = this.parsedPath
          , n = t.objectName
          , i = t.propertyName;
        let s = t.propertyIndex;
        if (e || (e = Ye.findNode(this.rootNode, t.nodeName),
        this.node = e),
        this.getValue = this._getValue_unavailable,
        this.setValue = this._setValue_unavailable,
        !e) {
            console.warn("THREE.PropertyBinding: No target node found for track: " + this.path + ".");
            return
        }
        if (n) {
            let l = t.objectIndex;
            switch (n) {
            case "materials":
                if (!e.material) {
                    console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                    return
                }
                if (!e.material.materials) {
                    console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.", this);
                    return
                }
                e = e.material.materials;
                break;
            case "bones":
                if (!e.skeleton) {
                    console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.", this);
                    return
                }
                e = e.skeleton.bones;
                for (let h = 0; h < e.length; h++)
                    if (e[h].name === l) {
                        l = h;
                        break
                    }
                break;
            case "map":
                if ("map"in e) {
                    e = e.map;
                    break
                }
                if (!e.material) {
                    console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.", this);
                    return
                }
                if (!e.material.map) {
                    console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.", this);
                    return
                }
                e = e.material.map;
                break;
            default:
                if (e[n] === void 0) {
                    console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.", this);
                    return
                }
                e = e[n]
            }
            if (l !== void 0) {
                if (e[l] === void 0) {
                    console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.", this, e);
                    return
                }
                e = e[l]
            }
        }
        const a = e[i];
        if (a === void 0) {
            const l = t.nodeName;
            console.error("THREE.PropertyBinding: Trying to update property for track: " + l + "." + i + " but it wasn't found.", e);
            return
        }
        let o = this.Versioning.None;
        this.targetObject = e,
        e.needsUpdate !== void 0 ? o = this.Versioning.NeedsUpdate : e.matrixWorldNeedsUpdate !== void 0 && (o = this.Versioning.MatrixWorldNeedsUpdate);
        let c = this.BindingType.Direct;
        if (s !== void 0) {
            if (i === "morphTargetInfluences") {
                if (!e.geometry) {
                    console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.", this);
                    return
                }
                if (!e.geometry.morphAttributes) {
                    console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.", this);
                    return
                }
                e.morphTargetDictionary[s] !== void 0 && (s = e.morphTargetDictionary[s])
            }
            c = this.BindingType.ArrayElement,
            this.resolvedProperty = a,
            this.propertyIndex = s
        } else
            a.fromArray !== void 0 && a.toArray !== void 0 ? (c = this.BindingType.HasFromToArray,
            this.resolvedProperty = a) : Array.isArray(a) ? (c = this.BindingType.EntireArray,
            this.resolvedProperty = a) : this.propertyName = i;
        this.getValue = this.GetterByBindingType[c],
        this.setValue = this.SetterByBindingTypeAndVersioning[c][o]
    }
    unbind() {
        this.node = null,
        this.getValue = this._getValue_unbound,
        this.setValue = this._setValue_unbound
    }
}
Ye.Composite = Ug;
Ye.prototype.BindingType = {
    Direct: 0,
    EntireArray: 1,
    ArrayElement: 2,
    HasFromToArray: 3
};
Ye.prototype.Versioning = {
    None: 0,
    NeedsUpdate: 1,
    MatrixWorldNeedsUpdate: 2
};
Ye.prototype.GetterByBindingType = [Ye.prototype._getValue_direct, Ye.prototype._getValue_array, Ye.prototype._getValue_arrayElement, Ye.prototype._getValue_toArray];
Ye.prototype.SetterByBindingTypeAndVersioning = [[Ye.prototype._setValue_direct, Ye.prototype._setValue_direct_setNeedsUpdate, Ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate], [Ye.prototype._setValue_array, Ye.prototype._setValue_array_setNeedsUpdate, Ye.prototype._setValue_array_setMatrixWorldNeedsUpdate], [Ye.prototype._setValue_arrayElement, Ye.prototype._setValue_arrayElement_setNeedsUpdate, Ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate], [Ye.prototype._setValue_fromArray, Ye.prototype._setValue_fromArray_setNeedsUpdate, Ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];
typeof __THREE_DEVTOOLS__ < "u" && __THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{
    detail: {
        revision: ea
    }
}));
typeof window < "u" && (window.__THREE__ ? console.warn("WARNING: Multiple instances of Three.js being imported.") : window.__THREE__ = ea);
function fc(r, e) {
    if (e === hh)
        return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),
        r;
    if (e === Ys || e === Lc) {
        let t = r.getIndex();
        if (t === null) {
            const a = []
              , o = r.getAttribute("position");
            if (o !== void 0) {
                for (let c = 0; c < o.count; c++)
                    a.push(c);
                r.setIndex(a),
                t = r.getIndex()
            } else
                return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),
                r
        }
        const n = t.count - 2
          , i = [];
        if (e === Ys)
            for (let a = 1; a <= n; a++)
                i.push(t.getX(0)),
                i.push(t.getX(a)),
                i.push(t.getX(a + 1));
        else
            for (let a = 0; a < n; a++)
                a % 2 === 0 ? (i.push(t.getX(a)),
                i.push(t.getX(a + 1)),
                i.push(t.getX(a + 2))) : (i.push(t.getX(a + 2)),
                i.push(t.getX(a + 1)),
                i.push(t.getX(a)));
        i.length / 3 !== n && console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
        const s = r.clone();
        return s.setIndex(i),
        s.clearGroups(),
        s
    } else
        return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", e),
        r
}
class Ng extends jn {
    constructor(e) {
        super(e),
        this.dracoLoader = null,
        this.ktx2Loader = null,
        this.meshoptDecoder = null,
        this.pluginCallbacks = [],
        this.register(function(t) {
            return new Hg(t)
        }),
        this.register(function(t) {
            return new kg(t)
        }),
        this.register(function(t) {
            return new $g(t)
        }),
        this.register(function(t) {
            return new Zg(t)
        }),
        this.register(function(t) {
            return new Jg(t)
        }),
        this.register(function(t) {
            return new Gg(t)
        }),
        this.register(function(t) {
            return new Wg(t)
        }),
        this.register(function(t) {
            return new Xg(t)
        }),
        this.register(function(t) {
            return new qg(t)
        }),
        this.register(function(t) {
            return new zg(t)
        }),
        this.register(function(t) {
            return new Yg(t)
        }),
        this.register(function(t) {
            return new Vg(t)
        }),
        this.register(function(t) {
            return new jg(t)
        }),
        this.register(function(t) {
            return new Kg(t)
        }),
        this.register(function(t) {
            return new Og(t)
        }),
        this.register(function(t) {
            return new Qg(t)
        }),
        this.register(function(t) {
            return new e_(t)
        })
    }
    load(e, t, n, i) {
        const s = this;
        let a;
        if (this.resourcePath !== "")
            a = this.resourcePath;
        else if (this.path !== "") {
            const l = Qi.extractUrlBase(e);
            a = Qi.resolveURL(l, this.path)
        } else
            a = Qi.extractUrlBase(e);
        this.manager.itemStart(e);
        const o = function(l) {
            i ? i(l) : console.error(l),
            s.manager.itemError(e),
            s.manager.itemEnd(e)
        }
          , c = new ua(this.manager);
        c.setPath(this.path),
        c.setResponseType("arraybuffer"),
        c.setRequestHeader(this.requestHeader),
        c.setWithCredentials(this.withCredentials),
        c.load(e, function(l) {
            try {
                s.parse(l, a, function(h) {
                    t(h),
                    s.manager.itemEnd(e)
                }, o)
            } catch (h) {
                o(h)
            }
        }, n, o)
    }
    setDRACOLoader(e) {
        return this.dracoLoader = e,
        this
    }
    setDDSLoader() {
        throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')
    }
    setKTX2Loader(e) {
        return this.ktx2Loader = e,
        this
    }
    setMeshoptDecoder(e) {
        return this.meshoptDecoder = e,
        this
    }
    register(e) {
        return this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e),
        this
    }
    unregister(e) {
        return this.pluginCallbacks.indexOf(e) !== -1 && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1),
        this
    }
    parse(e, t, n, i) {
        let s;
        const a = {}
          , o = {}
          , c = new TextDecoder;
        if (typeof e == "string")
            s = JSON.parse(e);
        else if (e instanceof ArrayBuffer)
            if (c.decode(new Uint8Array(e,0,4)) === il) {
                try {
                    a[De.KHR_BINARY_GLTF] = new t_(e)
                } catch (u) {
                    i && i(u);
                    return
                }
                s = JSON.parse(a[De.KHR_BINARY_GLTF].content)
            } else
                s = JSON.parse(c.decode(e));
        else
            s = e;
        if (s.asset === void 0 || s.asset.version[0] < 2) {
            i && i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
            return
        }
        const l = new p_(s,{
            path: t || this.resourcePath || "",
            crossOrigin: this.crossOrigin,
            requestHeader: this.requestHeader,
            manager: this.manager,
            ktx2Loader: this.ktx2Loader,
            meshoptDecoder: this.meshoptDecoder
        });
        l.fileLoader.setRequestHeader(this.requestHeader);
        for (let h = 0; h < this.pluginCallbacks.length; h++) {
            const u = this.pluginCallbacks[h](l);
            u.name || console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),
            o[u.name] = u,
            a[u.name] = !0
        }
        if (s.extensionsUsed)
            for (let h = 0; h < s.extensionsUsed.length; ++h) {
                const u = s.extensionsUsed[h]
                  , d = s.extensionsRequired || [];
                switch (u) {
                case De.KHR_MATERIALS_UNLIT:
                    a[u] = new Bg;
                    break;
                case De.KHR_DRACO_MESH_COMPRESSION:
                    a[u] = new n_(s,this.dracoLoader);
                    break;
                case De.KHR_TEXTURE_TRANSFORM:
                    a[u] = new i_;
                    break;
                case De.KHR_MESH_QUANTIZATION:
                    a[u] = new r_;
                    break;
                default:
                    d.indexOf(u) >= 0 && o[u] === void 0 && console.warn('THREE.GLTFLoader: Unknown extension "' + u + '".')
                }
            }
        l.setExtensions(a),
        l.setPlugins(o),
        l.parse(n, i)
    }
    parseAsync(e, t) {
        const n = this;
        return new Promise(function(i, s) {
            n.parse(e, t, i, s)
        }
        )
    }
}
function Fg() {
    let r = {};
    return {
        get: function(e) {
            return r[e]
        },
        add: function(e, t) {
            r[e] = t
        },
        remove: function(e) {
            delete r[e]
        },
        removeAll: function() {
            r = {}
        }
    }
}
const De = {
    KHR_BINARY_GLTF: "KHR_binary_glTF",
    KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
    KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
    KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
    KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
    KHR_MATERIALS_IOR: "KHR_materials_ior",
    KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
    KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
    KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
    KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
    KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
    KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
    KHR_MATERIALS_VOLUME: "KHR_materials_volume",
    KHR_TEXTURE_BASISU: "KHR_texture_basisu",
    KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
    KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
    KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
    EXT_MATERIALS_BUMP: "EXT_materials_bump",
    EXT_TEXTURE_WEBP: "EXT_texture_webp",
    EXT_TEXTURE_AVIF: "EXT_texture_avif",
    EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
    EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
class Og {
    constructor(e) {
        this.parser = e,
        this.name = De.KHR_LIGHTS_PUNCTUAL,
        this.cache = {
            refs: {},
            uses: {}
        }
    }
    _markDefs() {
        const e = this.parser
          , t = this.parser.json.nodes || [];
        for (let n = 0, i = t.length; n < i; n++) {
            const s = t[n];
            s.extensions && s.extensions[this.name] && s.extensions[this.name].light !== void 0 && e._addNodeRef(this.cache, s.extensions[this.name].light)
        }
    }
    _loadLight(e) {
        const t = this.parser
          , n = "light:" + e;
        let i = t.cache.get(n);
        if (i)
            return i;
        const s = t.json
          , c = ((s.extensions && s.extensions[this.name] || {}).lights || [])[e];
        let l;
        const h = new Se(16777215);
        c.color !== void 0 && h.setRGB(c.color[0], c.color[1], c.color[2], ut);
        const u = c.range !== void 0 ? c.range : 0;
        switch (c.type) {
        case "directional":
            l = new nl(h),
            l.target.position.set(0, 0, -1),
            l.add(l.target);
            break;
        case "point":
            l = new Eg(h),
            l.distance = u;
            break;
        case "spot":
            l = new Sg(h),
            l.distance = u,
            c.spot = c.spot || {},
            c.spot.innerConeAngle = c.spot.innerConeAngle !== void 0 ? c.spot.innerConeAngle : 0,
            c.spot.outerConeAngle = c.spot.outerConeAngle !== void 0 ? c.spot.outerConeAngle : Math.PI / 4,
            l.angle = c.spot.outerConeAngle,
            l.penumbra = 1 - c.spot.innerConeAngle / c.spot.outerConeAngle,
            l.target.position.set(0, 0, -1),
            l.add(l.target);
            break;
        default:
            throw new Error("THREE.GLTFLoader: Unexpected light type: " + c.type)
        }
        return l.position.set(0, 0, 0),
        l.decay = 2,
        Tn(l, c),
        c.intensity !== void 0 && (l.intensity = c.intensity),
        l.name = t.createUniqueName(c.name || "light_" + e),
        i = Promise.resolve(l),
        t.cache.add(n, i),
        i
    }
    getDependency(e, t) {
        if (e === "light")
            return this._loadLight(t)
    }
    createNodeAttachment(e) {
        const t = this
          , n = this.parser
          , s = n.json.nodes[e]
          , o = (s.extensions && s.extensions[this.name] || {}).light;
        return o === void 0 ? null : this._loadLight(o).then(function(c) {
            return n._getNodeRef(t.cache, o, c)
        })
    }
}
class Bg {
    constructor() {
        this.name = De.KHR_MATERIALS_UNLIT
    }
    getMaterialType() {
        return Xn
    }
    extendParams(e, t, n) {
        const i = [];
        e.color = new Se(1,1,1),
        e.opacity = 1;
        const s = t.pbrMetallicRoughness;
        if (s) {
            if (Array.isArray(s.baseColorFactor)) {
                const a = s.baseColorFactor;
                e.color.setRGB(a[0], a[1], a[2], ut),
                e.opacity = a[3]
            }
            s.baseColorTexture !== void 0 && i.push(n.assignTexture(e, "map", s.baseColorTexture, St))
        }
        return Promise.all(i)
    }
}
class zg {
    constructor(e) {
        this.parser = e,
        this.name = De.KHR_MATERIALS_EMISSIVE_STRENGTH
    }
    extendMaterialParams(e, t) {
        const i = this.parser.json.materials[e];
        if (!i.extensions || !i.extensions[this.name])
            return Promise.resolve();
        const s = i.extensions[this.name].emissiveStrength;
        return s !== void 0 && (t.emissiveIntensity = s),
        Promise.resolve()
    }
}
class Hg {
    constructor(e) {
        this.parser = e,
        this.name = De.KHR_MATERIALS_CLEARCOAT
    }
    getMaterialType(e) {
        const n = this.parser.json.materials[e];
        return !n.extensions || !n.extensions[this.name] ? null : Zt
    }
    extendMaterialParams(e, t) {
        const n = this.parser
          , i = n.json.materials[e];
        if (!i.extensions || !i.extensions[this.name])
            return Promise.resolve();
        const s = []
          , a = i.extensions[this.name];
        if (a.clearcoatFactor !== void 0 && (t.clearcoat = a.clearcoatFactor),
        a.clearcoatTexture !== void 0 && s.push(n.assignTexture(t, "clearcoatMap", a.clearcoatTexture)),
        a.clearcoatRoughnessFactor !== void 0 && (t.clearcoatRoughness = a.clearcoatRoughnessFactor),
        a.clearcoatRoughnessTexture !== void 0 && s.push(n.assignTexture(t, "clearcoatRoughnessMap", a.clearcoatRoughnessTexture)),
        a.clearcoatNormalTexture !== void 0 && (s.push(n.assignTexture(t, "clearcoatNormalMap", a.clearcoatNormalTexture)),
        a.clearcoatNormalTexture.scale !== void 0)) {
            const o = a.clearcoatNormalTexture.scale;
            t.clearcoatNormalScale = new Ue(o,o)
        }
        return Promise.all(s)
    }
}
class kg {
    constructor(e) {
        this.parser = e,
        this.name = De.KHR_MATERIALS_DISPERSION
    }
    getMaterialType(e) {
        const n = this.parser.json.materials[e];
        return !n.extensions || !n.extensions[this.name] ? null : Zt
    }
    extendMaterialParams(e, t) {
        const i = this.parser.json.materials[e];
        if (!i.extensions || !i.extensions[this.name])
            return Promise.resolve();
        const s = i.extensions[this.name];
        return t.dispersion = s.dispersion !== void 0 ? s.dispersion : 0,
        Promise.resolve()
    }
}
class Vg {
    constructor(e) {
        this.parser = e,
        this.name = De.KHR_MATERIALS_IRIDESCENCE
    }
    getMaterialType(e) {
        const n = this.parser.json.materials[e];
        return !n.extensions || !n.extensions[this.name] ? null : Zt
    }
    extendMaterialParams(e, t) {
        const n = this.parser
          , i = n.json.materials[e];
        if (!i.extensions || !i.extensions[this.name])
            return Promise.resolve();
        const s = []
          , a = i.extensions[this.name];
        return a.iridescenceFactor !== void 0 && (t.iridescence = a.iridescenceFactor),
        a.iridescenceTexture !== void 0 && s.push(n.assignTexture(t, "iridescenceMap", a.iridescenceTexture)),
        a.iridescenceIor !== void 0 && (t.iridescenceIOR = a.iridescenceIor),
        t.iridescenceThicknessRange === void 0 && (t.iridescenceThicknessRange = [100, 400]),
        a.iridescenceThicknessMinimum !== void 0 && (t.iridescenceThicknessRange[0] = a.iridescenceThicknessMinimum),
        a.iridescenceThicknessMaximum !== void 0 && (t.iridescenceThicknessRange[1] = a.iridescenceThicknessMaximum),
        a.iridescenceThicknessTexture !== void 0 && s.push(n.assignTexture(t, "iridescenceThicknessMap", a.iridescenceThicknessTexture)),
        Promise.all(s)
    }
}
class Gg {
    constructor(e) {
        this.parser = e,
        this.name = De.KHR_MATERIALS_SHEEN
    }
    getMaterialType(e) {
        const n = this.parser.json.materials[e];
        return !n.extensions || !n.extensions[this.name] ? null : Zt
    }
    extendMaterialParams(e, t) {
        const n = this.parser
          , i = n.json.materials[e];
        if (!i.extensions || !i.extensions[this.name])
            return Promise.resolve();
        const s = [];
        t.sheenColor = new Se(0,0,0),
        t.sheenRoughness = 0,
        t.sheen = 1;
        const a = i.extensions[this.name];
        if (a.sheenColorFactor !== void 0) {
            const o = a.sheenColorFactor;
            t.sheenColor.setRGB(o[0], o[1], o[2], ut)
        }
        return a.sheenRoughnessFactor !== void 0 && (t.sheenRoughness = a.sheenRoughnessFactor),
        a.sheenColorTexture !== void 0 && s.push(n.assignTexture(t, "sheenColorMap", a.sheenColorTexture, St)),
        a.sheenRoughnessTexture !== void 0 && s.push(n.assignTexture(t, "sheenRoughnessMap", a.sheenRoughnessTexture)),
        Promise.all(s)
    }
}
class Wg {
    constructor(e) {
        this.parser = e,
        this.name = De.KHR_MATERIALS_TRANSMISSION
    }
    getMaterialType(e) {
        const n = this.parser.json.materials[e];
        return !n.extensions || !n.extensions[this.name] ? null : Zt
    }
    extendMaterialParams(e, t) {
        const n = this.parser
          , i = n.json.materials[e];
        if (!i.extensions || !i.extensions[this.name])
            return Promise.resolve();
        const s = []
          , a = i.extensions[this.name];
        return a.transmissionFactor !== void 0 && (t.transmission = a.transmissionFactor),
        a.transmissionTexture !== void 0 && s.push(n.assignTexture(t, "transmissionMap", a.transmissionTexture)),
        Promise.all(s)
    }
}
class Xg {
    constructor(e) {
        this.parser = e,
        this.name = De.KHR_MATERIALS_VOLUME
    }
    getMaterialType(e) {
        const n = this.parser.json.materials[e];
        return !n.extensions || !n.extensions[this.name] ? null : Zt
    }
    extendMaterialParams(e, t) {
        const n = this.parser
          , i = n.json.materials[e];
        if (!i.extensions || !i.extensions[this.name])
            return Promise.resolve();
        const s = []
          , a = i.extensions[this.name];
        t.thickness = a.thicknessFactor !== void 0 ? a.thicknessFactor : 0,
        a.thicknessTexture !== void 0 && s.push(n.assignTexture(t, "thicknessMap", a.thicknessTexture)),
        t.attenuationDistance = a.attenuationDistance || 1 / 0;
        const o = a.attenuationColor || [1, 1, 1];
        return t.attenuationColor = new Se().setRGB(o[0], o[1], o[2], ut),
        Promise.all(s)
    }
}
class qg {
    constructor(e) {
        this.parser = e,
        this.name = De.KHR_MATERIALS_IOR
    }
    getMaterialType(e) {
        const n = this.parser.json.materials[e];
        return !n.extensions || !n.extensions[this.name] ? null : Zt
    }
    extendMaterialParams(e, t) {
        const i = this.parser.json.materials[e];
        if (!i.extensions || !i.extensions[this.name])
            return Promise.resolve();
        const s = i.extensions[this.name];
        return t.ior = s.ior !== void 0 ? s.ior : 1.5,
        Promise.resolve()
    }
}
class Yg {
    constructor(e) {
        this.parser = e,
        this.name = De.KHR_MATERIALS_SPECULAR
    }
    getMaterialType(e) {
        const n = this.parser.json.materials[e];
        return !n.extensions || !n.extensions[this.name] ? null : Zt
    }
    extendMaterialParams(e, t) {
        const n = this.parser
          , i = n.json.materials[e];
        if (!i.extensions || !i.extensions[this.name])
            return Promise.resolve();
        const s = []
          , a = i.extensions[this.name];
        t.specularIntensity = a.specularFactor !== void 0 ? a.specularFactor : 1,
        a.specularTexture !== void 0 && s.push(n.assignTexture(t, "specularIntensityMap", a.specularTexture));
        const o = a.specularColorFactor || [1, 1, 1];
        return t.specularColor = new Se().setRGB(o[0], o[1], o[2], ut),
        a.specularColorTexture !== void 0 && s.push(n.assignTexture(t, "specularColorMap", a.specularColorTexture, St)),
        Promise.all(s)
    }
}
class Kg {
    constructor(e) {
        this.parser = e,
        this.name = De.EXT_MATERIALS_BUMP
    }
    getMaterialType(e) {
        const n = this.parser.json.materials[e];
        return !n.extensions || !n.extensions[this.name] ? null : Zt
    }
    extendMaterialParams(e, t) {
        const n = this.parser
          , i = n.json.materials[e];
        if (!i.extensions || !i.extensions[this.name])
            return Promise.resolve();
        const s = []
          , a = i.extensions[this.name];
        return t.bumpScale = a.bumpFactor !== void 0 ? a.bumpFactor : 1,
        a.bumpTexture !== void 0 && s.push(n.assignTexture(t, "bumpMap", a.bumpTexture)),
        Promise.all(s)
    }
}
class jg {
    constructor(e) {
        this.parser = e,
        this.name = De.KHR_MATERIALS_ANISOTROPY
    }
    getMaterialType(e) {
        const n = this.parser.json.materials[e];
        return !n.extensions || !n.extensions[this.name] ? null : Zt
    }
    extendMaterialParams(e, t) {
        const n = this.parser
          , i = n.json.materials[e];
        if (!i.extensions || !i.extensions[this.name])
            return Promise.resolve();
        const s = []
          , a = i.extensions[this.name];
        return a.anisotropyStrength !== void 0 && (t.anisotropy = a.anisotropyStrength),
        a.anisotropyRotation !== void 0 && (t.anisotropyRotation = a.anisotropyRotation),
        a.anisotropyTexture !== void 0 && s.push(n.assignTexture(t, "anisotropyMap", a.anisotropyTexture)),
        Promise.all(s)
    }
}
class $g {
    constructor(e) {
        this.parser = e,
        this.name = De.KHR_TEXTURE_BASISU
    }
    loadTexture(e) {
        const t = this.parser
          , n = t.json
          , i = n.textures[e];
        if (!i.extensions || !i.extensions[this.name])
            return null;
        const s = i.extensions[this.name]
          , a = t.options.ktx2Loader;
        if (!a) {
            if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
                throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
            return null
        }
        return t.loadTextureImage(e, s.source, a)
    }
}
class Zg {
    constructor(e) {
        this.parser = e,
        this.name = De.EXT_TEXTURE_WEBP,
        this.isSupported = null
    }
    loadTexture(e) {
        const t = this.name
          , n = this.parser
          , i = n.json
          , s = i.textures[e];
        if (!s.extensions || !s.extensions[t])
            return null;
        const a = s.extensions[t]
          , o = i.images[a.source];
        let c = n.textureLoader;
        if (o.uri) {
            const l = n.options.manager.getHandler(o.uri);
            l !== null && (c = l)
        }
        return this.detectSupport().then(function(l) {
            if (l)
                return n.loadTextureImage(e, a.source, c);
            if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
                throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
            return n.loadTexture(e)
        })
    }
    detectSupport() {
        return this.isSupported || (this.isSupported = new Promise(function(e) {
            const t = new Image;
            t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",
            t.onload = t.onerror = function() {
                e(t.height === 1)
            }
        }
        )),
        this.isSupported
    }
}
class Jg {
    constructor(e) {
        this.parser = e,
        this.name = De.EXT_TEXTURE_AVIF,
        this.isSupported = null
    }
    loadTexture(e) {
        const t = this.name
          , n = this.parser
          , i = n.json
          , s = i.textures[e];
        if (!s.extensions || !s.extensions[t])
            return null;
        const a = s.extensions[t]
          , o = i.images[a.source];
        let c = n.textureLoader;
        if (o.uri) {
            const l = n.options.manager.getHandler(o.uri);
            l !== null && (c = l)
        }
        return this.detectSupport().then(function(l) {
            if (l)
                return n.loadTextureImage(e, a.source, c);
            if (i.extensionsRequired && i.extensionsRequired.indexOf(t) >= 0)
                throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
            return n.loadTexture(e)
        })
    }
    detectSupport() {
        return this.isSupported || (this.isSupported = new Promise(function(e) {
            const t = new Image;
            t.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",
            t.onload = t.onerror = function() {
                e(t.height === 1)
            }
        }
        )),
        this.isSupported
    }
}
class Qg {
    constructor(e) {
        this.name = De.EXT_MESHOPT_COMPRESSION,
        this.parser = e
    }
    loadBufferView(e) {
        const t = this.parser.json
          , n = t.bufferViews[e];
        if (n.extensions && n.extensions[this.name]) {
            const i = n.extensions[this.name]
              , s = this.parser.getDependency("buffer", i.buffer)
              , a = this.parser.options.meshoptDecoder;
            if (!a || !a.supported) {
                if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0)
                    throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
                return null
            }
            return s.then(function(o) {
                const c = i.byteOffset || 0
                  , l = i.byteLength || 0
                  , h = i.count
                  , u = i.byteStride
                  , d = new Uint8Array(o,c,l);
                return a.decodeGltfBufferAsync ? a.decodeGltfBufferAsync(h, u, d, i.mode, i.filter).then(function(m) {
                    return m.buffer
                }) : a.ready.then(function() {
                    const m = new ArrayBuffer(h * u);
                    return a.decodeGltfBuffer(new Uint8Array(m), h, u, d, i.mode, i.filter),
                    m
                })
            })
        } else
            return null
    }
}
class e_ {
    constructor(e) {
        this.name = De.EXT_MESH_GPU_INSTANCING,
        this.parser = e
    }
    createNodeMesh(e) {
        const t = this.parser.json
          , n = t.nodes[e];
        if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
            return null;
        const i = t.meshes[n.mesh];
        for (const l of i.primitives)
            if (l.mode !== Ut.TRIANGLES && l.mode !== Ut.TRIANGLE_STRIP && l.mode !== Ut.TRIANGLE_FAN && l.mode !== void 0)
                return null;
        const a = n.extensions[this.name].attributes
          , o = []
          , c = {};
        for (const l in a)
            o.push(this.parser.getDependency("accessor", a[l]).then(h=>(c[l] = h,
            c[l])));
        return o.length < 1 ? null : (o.push(this.parser.createNodeMesh(e)),
        Promise.all(o).then(l=>{
            const h = l.pop()
              , u = h.isGroup ? h.children : [h]
              , d = l[0].count
              , m = [];
            for (const g of u) {
                const _ = new we
                  , p = new P
                  , f = new Pn
                  , T = new P(1,1,1)
                  , y = new tg(g.geometry,g.material,d);
                for (let E = 0; E < d; E++)
                    c.TRANSLATION && p.fromBufferAttribute(c.TRANSLATION, E),
                    c.ROTATION && f.fromBufferAttribute(c.ROTATION, E),
                    c.SCALE && T.fromBufferAttribute(c.SCALE, E),
                    y.setMatrixAt(E, _.compose(p, f, T));
                for (const E in c)
                    if (E === "_COLOR_0") {
                        const U = c[E];
                        y.instanceColor = new $s(U.array,U.itemSize,U.normalized)
                    } else
                        E !== "TRANSLATION" && E !== "ROTATION" && E !== "SCALE" && g.geometry.setAttribute(E, c[E]);
                et.prototype.copy.call(y, g),
                this.parser.assignFinalMaterial(y),
                m.push(y)
            }
            return h.isGroup ? (h.clear(),
            h.add(...m),
            h) : m[0]
        }
        ))
    }
}
const il = "glTF"
  , Yi = 12
  , pc = {
    JSON: 1313821514,
    BIN: 5130562
};
class t_ {
    constructor(e) {
        this.name = De.KHR_BINARY_GLTF,
        this.content = null,
        this.body = null;
        const t = new DataView(e,0,Yi)
          , n = new TextDecoder;
        if (this.header = {
            magic: n.decode(new Uint8Array(e.slice(0, 4))),
            version: t.getUint32(4, !0),
            length: t.getUint32(8, !0)
        },
        this.header.magic !== il)
            throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
        if (this.header.version < 2)
            throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
        const i = this.header.length - Yi
          , s = new DataView(e,Yi);
        let a = 0;
        for (; a < i; ) {
            const o = s.getUint32(a, !0);
            a += 4;
            const c = s.getUint32(a, !0);
            if (a += 4,
            c === pc.JSON) {
                const l = new Uint8Array(e,Yi + a,o);
                this.content = n.decode(l)
            } else if (c === pc.BIN) {
                const l = Yi + a;
                this.body = e.slice(l, l + o)
            }
            a += o
        }
        if (this.content === null)
            throw new Error("THREE.GLTFLoader: JSON content not found.")
    }
}
class n_ {
    constructor(e, t) {
        if (!t)
            throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
        this.name = De.KHR_DRACO_MESH_COMPRESSION,
        this.json = e,
        this.dracoLoader = t,
        this.dracoLoader.preload()
    }
    decodePrimitive(e, t) {
        const n = this.json
          , i = this.dracoLoader
          , s = e.extensions[this.name].bufferView
          , a = e.extensions[this.name].attributes
          , o = {}
          , c = {}
          , l = {};
        for (const h in a) {
            const u = Js[h] || h.toLowerCase();
            o[u] = a[h]
        }
        for (const h in e.attributes) {
            const u = Js[h] || h.toLowerCase();
            if (a[h] !== void 0) {
                const d = n.accessors[e.attributes[h]]
                  , m = Mi[d.componentType];
                l[u] = m.name,
                c[u] = d.normalized === !0
            }
        }
        return t.getDependency("bufferView", s).then(function(h) {
            return new Promise(function(u, d) {
                i.decodeDracoFile(h, function(m) {
                    for (const g in m.attributes) {
                        const _ = m.attributes[g]
                          , p = c[g];
                        p !== void 0 && (_.normalized = p)
                    }
                    u(m)
                }, o, l, ut, d)
            }
            )
        })
    }
}
class i_ {
    constructor() {
        this.name = De.KHR_TEXTURE_TRANSFORM
    }
    extendTexture(e, t) {
        return (t.texCoord === void 0 || t.texCoord === e.channel) && t.offset === void 0 && t.rotation === void 0 && t.scale === void 0 || (e = e.clone(),
        t.texCoord !== void 0 && (e.channel = t.texCoord),
        t.offset !== void 0 && e.offset.fromArray(t.offset),
        t.rotation !== void 0 && (e.rotation = t.rotation),
        t.scale !== void 0 && e.repeat.fromArray(t.scale),
        e.needsUpdate = !0),
        e
    }
}
class r_ {
    constructor() {
        this.name = De.KHR_MESH_QUANTIZATION
    }
}
class rl extends ar {
    constructor(e, t, n, i) {
        super(e, t, n, i)
    }
    copySampleValue_(e) {
        const t = this.resultBuffer
          , n = this.sampleValues
          , i = this.valueSize
          , s = e * i * 3 + i;
        for (let a = 0; a !== i; a++)
            t[a] = n[s + a];
        return t
    }
    interpolate_(e, t, n, i) {
        const s = this.resultBuffer
          , a = this.sampleValues
          , o = this.valueSize
          , c = o * 2
          , l = o * 3
          , h = i - t
          , u = (n - t) / h
          , d = u * u
          , m = d * u
          , g = e * l
          , _ = g - l
          , p = -2 * m + 3 * d
          , f = m - d
          , T = 1 - p
          , y = f - d + u;
        for (let E = 0; E !== o; E++) {
            const U = a[_ + E + o]
              , w = a[_ + E + c] * h
              , b = a[g + E + o]
              , L = a[g + E] * h;
            s[E] = T * U + y * w + p * b + f * L
        }
        return s
    }
}
const s_ = new Pn;
class a_ extends rl {
    interpolate_(e, t, n, i) {
        const s = super.interpolate_(e, t, n, i);
        return s_.fromArray(s).normalize().toArray(s),
        s
    }
}
const Ut = {
    FLOAT: 5126,
    FLOAT_MAT3: 35675,
    FLOAT_MAT4: 35676,
    FLOAT_VEC2: 35664,
    FLOAT_VEC3: 35665,
    FLOAT_VEC4: 35666,
    LINEAR: 9729,
    REPEAT: 10497,
    SAMPLER_2D: 35678,
    POINTS: 0,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    TRIANGLES: 4,
    TRIANGLE_STRIP: 5,
    TRIANGLE_FAN: 6,
    UNSIGNED_BYTE: 5121,
    UNSIGNED_SHORT: 5123
}
  , Mi = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array
}
  , mc = {
    9728: Et,
    9729: lt,
    9984: Sc,
    9985: Br,
    9986: ji,
    9987: qt
}
  , gc = {
    33071: Xt,
    33648: Vr,
    10497: Ai
}
  , Hs = {
    SCALAR: 1,
    VEC2: 2,
    VEC3: 3,
    VEC4: 4,
    MAT2: 4,
    MAT3: 9,
    MAT4: 16
}
  , Js = {
    POSITION: "position",
    NORMAL: "normal",
    TANGENT: "tangent",
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv1",
    TEXCOORD_2: "uv2",
    TEXCOORD_3: "uv3",
    COLOR_0: "color",
    WEIGHTS_0: "skinWeight",
    JOINTS_0: "skinIndex"
}
  , En = {
    scale: "scale",
    translation: "position",
    rotation: "quaternion",
    weights: "morphTargetInfluences"
}
  , o_ = {
    CUBICSPLINE: void 0,
    LINEAR: wi,
    STEP: tr
}
  , ks = {
    OPAQUE: "OPAQUE",
    MASK: "MASK",
    BLEND: "BLEND"
};
function c_(r) {
    return r.DefaultMaterial === void 0 && (r.DefaultMaterial = new es({
        color: 16777215,
        emissive: 0,
        metalness: 1,
        roughness: 1,
        transparent: !1,
        depthTest: !0,
        side: pn
    })),
    r.DefaultMaterial
}
function zn(r, e, t) {
    for (const n in t.extensions)
        r[n] === void 0 && (e.userData.gltfExtensions = e.userData.gltfExtensions || {},
        e.userData.gltfExtensions[n] = t.extensions[n])
}
function Tn(r, e) {
    e.extras !== void 0 && (typeof e.extras == "object" ? Object.assign(r.userData, e.extras) : console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras))
}
function l_(r, e, t) {
    let n = !1
      , i = !1
      , s = !1;
    for (let l = 0, h = e.length; l < h; l++) {
        const u = e[l];
        if (u.POSITION !== void 0 && (n = !0),
        u.NORMAL !== void 0 && (i = !0),
        u.COLOR_0 !== void 0 && (s = !0),
        n && i && s)
            break
    }
    if (!n && !i && !s)
        return Promise.resolve(r);
    const a = []
      , o = []
      , c = [];
    for (let l = 0, h = e.length; l < h; l++) {
        const u = e[l];
        if (n) {
            const d = u.POSITION !== void 0 ? t.getDependency("accessor", u.POSITION) : r.attributes.position;
            a.push(d)
        }
        if (i) {
            const d = u.NORMAL !== void 0 ? t.getDependency("accessor", u.NORMAL) : r.attributes.normal;
            o.push(d)
        }
        if (s) {
            const d = u.COLOR_0 !== void 0 ? t.getDependency("accessor", u.COLOR_0) : r.attributes.color;
            c.push(d)
        }
    }
    return Promise.all([Promise.all(a), Promise.all(o), Promise.all(c)]).then(function(l) {
        const h = l[0]
          , u = l[1]
          , d = l[2];
        return n && (r.morphAttributes.position = h),
        i && (r.morphAttributes.normal = u),
        s && (r.morphAttributes.color = d),
        r.morphTargetsRelative = !0,
        r
    })
}
function h_(r, e) {
    if (r.updateMorphTargets(),
    e.weights !== void 0)
        for (let t = 0, n = e.weights.length; t < n; t++)
            r.morphTargetInfluences[t] = e.weights[t];
    if (e.extras && Array.isArray(e.extras.targetNames)) {
        const t = e.extras.targetNames;
        if (r.morphTargetInfluences.length === t.length) {
            r.morphTargetDictionary = {};
            for (let n = 0, i = t.length; n < i; n++)
                r.morphTargetDictionary[t[n]] = n
        } else
            console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")
    }
}
function u_(r) {
    let e;
    const t = r.extensions && r.extensions[De.KHR_DRACO_MESH_COMPRESSION];
    if (t ? e = "draco:" + t.bufferView + ":" + t.indices + ":" + Vs(t.attributes) : e = r.indices + ":" + Vs(r.attributes) + ":" + r.mode,
    r.targets !== void 0)
        for (let n = 0, i = r.targets.length; n < i; n++)
            e += ":" + Vs(r.targets[n]);
    return e
}
function Vs(r) {
    let e = "";
    const t = Object.keys(r).sort();
    for (let n = 0, i = t.length; n < i; n++)
        e += t[n] + ":" + r[t[n]] + ";";
    return e
}
function Qs(r) {
    switch (r) {
    case Int8Array:
        return 1 / 127;
    case Uint8Array:
        return 1 / 255;
    case Int16Array:
        return 1 / 32767;
    case Uint16Array:
        return 1 / 65535;
    default:
        throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")
    }
}
function d_(r) {
    return r.search(/\.jpe?g($|\?)/i) > 0 || r.search(/^data\:image\/jpeg/) === 0 ? "image/jpeg" : r.search(/\.webp($|\?)/i) > 0 || r.search(/^data\:image\/webp/) === 0 ? "image/webp" : "image/png"
}
const f_ = new we;
class p_ {
    constructor(e={}, t={}) {
        this.json = e,
        this.extensions = {},
        this.plugins = {},
        this.options = t,
        this.cache = new Fg,
        this.associations = new Map,
        this.primitiveCache = {},
        this.nodeCache = {},
        this.meshCache = {
            refs: {},
            uses: {}
        },
        this.cameraCache = {
            refs: {},
            uses: {}
        },
        this.lightCache = {
            refs: {},
            uses: {}
        },
        this.sourceCache = {},
        this.textureCache = {},
        this.nodeNamesUsed = {};
        let n = !1
          , i = !1
          , s = -1;
        typeof navigator < "u" && (n = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === !0,
        i = navigator.userAgent.indexOf("Firefox") > -1,
        s = i ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1),
        typeof createImageBitmap > "u" || n || i && s < 98 ? this.textureLoader = new vg(this.options.manager) : this.textureLoader = new Ag(this.options.manager),
        this.textureLoader.setCrossOrigin(this.options.crossOrigin),
        this.textureLoader.setRequestHeader(this.options.requestHeader),
        this.fileLoader = new ua(this.options.manager),
        this.fileLoader.setResponseType("arraybuffer"),
        this.options.crossOrigin === "use-credentials" && this.fileLoader.setWithCredentials(!0)
    }
    setExtensions(e) {
        this.extensions = e
    }
    setPlugins(e) {
        this.plugins = e
    }
    parse(e, t) {
        const n = this
          , i = this.json
          , s = this.extensions;
        this.cache.removeAll(),
        this.nodeCache = {},
        this._invokeAll(function(a) {
            return a._markDefs && a._markDefs()
        }),
        Promise.all(this._invokeAll(function(a) {
            return a.beforeRoot && a.beforeRoot()
        })).then(function() {
            return Promise.all([n.getDependencies("scene"), n.getDependencies("animation"), n.getDependencies("camera")])
        }).then(function(a) {
            const o = {
                scene: a[0][i.scene || 0],
                scenes: a[0],
                animations: a[1],
                cameras: a[2],
                asset: i.asset,
                parser: n,
                userData: {}
            };
            return zn(s, o, i),
            Tn(o, i),
            Promise.all(n._invokeAll(function(c) {
                return c.afterRoot && c.afterRoot(o)
            })).then(function() {
                for (const c of o.scenes)
                    c.updateMatrixWorld();
                e(o)
            })
        }).catch(t)
    }
    _markDefs() {
        const e = this.json.nodes || []
          , t = this.json.skins || []
          , n = this.json.meshes || [];
        for (let i = 0, s = t.length; i < s; i++) {
            const a = t[i].joints;
            for (let o = 0, c = a.length; o < c; o++)
                e[a[o]].isBone = !0
        }
        for (let i = 0, s = e.length; i < s; i++) {
            const a = e[i];
            a.mesh !== void 0 && (this._addNodeRef(this.meshCache, a.mesh),
            a.skin !== void 0 && (n[a.mesh].isSkinnedMesh = !0)),
            a.camera !== void 0 && this._addNodeRef(this.cameraCache, a.camera)
        }
    }
    _addNodeRef(e, t) {
        t !== void 0 && (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0),
        e.refs[t]++)
    }
    _getNodeRef(e, t, n) {
        if (e.refs[t] <= 1)
            return n;
        const i = n.clone()
          , s = (a,o)=>{
            const c = this.associations.get(a);
            c != null && this.associations.set(o, c);
            for (const [l,h] of a.children.entries())
                s(h, o.children[l])
        }
        ;
        return s(n, i),
        i.name += "_instance_" + e.uses[t]++,
        i
    }
    _invokeOne(e) {
        const t = Object.values(this.plugins);
        t.push(this);
        for (let n = 0; n < t.length; n++) {
            const i = e(t[n]);
            if (i)
                return i
        }
        return null
    }
    _invokeAll(e) {
        const t = Object.values(this.plugins);
        t.unshift(this);
        const n = [];
        for (let i = 0; i < t.length; i++) {
            const s = e(t[i]);
            s && n.push(s)
        }
        return n
    }
    getDependency(e, t) {
        const n = e + ":" + t;
        let i = this.cache.get(n);
        if (!i) {
            switch (e) {
            case "scene":
                i = this.loadScene(t);
                break;
            case "node":
                i = this._invokeOne(function(s) {
                    return s.loadNode && s.loadNode(t)
                });
                break;
            case "mesh":
                i = this._invokeOne(function(s) {
                    return s.loadMesh && s.loadMesh(t)
                });
                break;
            case "accessor":
                i = this.loadAccessor(t);
                break;
            case "bufferView":
                i = this._invokeOne(function(s) {
                    return s.loadBufferView && s.loadBufferView(t)
                });
                break;
            case "buffer":
                i = this.loadBuffer(t);
                break;
            case "material":
                i = this._invokeOne(function(s) {
                    return s.loadMaterial && s.loadMaterial(t)
                });
                break;
            case "texture":
                i = this._invokeOne(function(s) {
                    return s.loadTexture && s.loadTexture(t)
                });
                break;
            case "skin":
                i = this.loadSkin(t);
                break;
            case "animation":
                i = this._invokeOne(function(s) {
                    return s.loadAnimation && s.loadAnimation(t)
                });
                break;
            case "camera":
                i = this.loadCamera(t);
                break;
            default:
                if (i = this._invokeOne(function(s) {
                    return s != this && s.getDependency && s.getDependency(e, t)
                }),
                !i)
                    throw new Error("Unknown type: " + e);
                break
            }
            this.cache.add(n, i)
        }
        return i
    }
    getDependencies(e) {
        let t = this.cache.get(e);
        if (!t) {
            const n = this
              , i = this.json[e + (e === "mesh" ? "es" : "s")] || [];
            t = Promise.all(i.map(function(s, a) {
                return n.getDependency(e, a)
            })),
            this.cache.add(e, t)
        }
        return t
    }
    loadBuffer(e) {
        const t = this.json.buffers[e]
          , n = this.fileLoader;
        if (t.type && t.type !== "arraybuffer")
            throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
        if (t.uri === void 0 && e === 0)
            return Promise.resolve(this.extensions[De.KHR_BINARY_GLTF].body);
        const i = this.options;
        return new Promise(function(s, a) {
            n.load(Qi.resolveURL(t.uri, i.path), s, void 0, function() {
                a(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'))
            })
        }
        )
    }
    loadBufferView(e) {
        const t = this.json.bufferViews[e];
        return this.getDependency("buffer", t.buffer).then(function(n) {
            const i = t.byteLength || 0
              , s = t.byteOffset || 0;
            return n.slice(s, s + i)
        })
    }
    loadAccessor(e) {
        const t = this
          , n = this.json
          , i = this.json.accessors[e];
        if (i.bufferView === void 0 && i.sparse === void 0) {
            const a = Hs[i.type]
              , o = Mi[i.componentType]
              , c = i.normalized === !0
              , l = new o(i.count * a);
            return Promise.resolve(new Tt(l,a,c))
        }
        const s = [];
        return i.bufferView !== void 0 ? s.push(this.getDependency("bufferView", i.bufferView)) : s.push(null),
        i.sparse !== void 0 && (s.push(this.getDependency("bufferView", i.sparse.indices.bufferView)),
        s.push(this.getDependency("bufferView", i.sparse.values.bufferView))),
        Promise.all(s).then(function(a) {
            const o = a[0]
              , c = Hs[i.type]
              , l = Mi[i.componentType]
              , h = l.BYTES_PER_ELEMENT
              , u = h * c
              , d = i.byteOffset || 0
              , m = i.bufferView !== void 0 ? n.bufferViews[i.bufferView].byteStride : void 0
              , g = i.normalized === !0;
            let _, p;
            if (m && m !== u) {
                const f = Math.floor(d / m)
                  , T = "InterleavedBuffer:" + i.bufferView + ":" + i.componentType + ":" + f + ":" + i.count;
                let y = t.cache.get(T);
                y || (_ = new l(o,f * m,i.count * m / h),
                y = new $m(_,m / h),
                t.cache.add(T, y)),
                p = new oa(y,c,d % m / h,g)
            } else
                o === null ? _ = new l(i.count * c) : _ = new l(o,d,i.count * c),
                p = new Tt(_,c,g);
            if (i.sparse !== void 0) {
                const f = Hs.SCALAR
                  , T = Mi[i.sparse.indices.componentType]
                  , y = i.sparse.indices.byteOffset || 0
                  , E = i.sparse.values.byteOffset || 0
                  , U = new T(a[1],y,i.sparse.count * f)
                  , w = new l(a[2],E,i.sparse.count * c);
                o !== null && (p = new Tt(p.array.slice(),p.itemSize,p.normalized));
                for (let b = 0, L = U.length; b < L; b++) {
                    const M = U[b];
                    if (p.setX(M, w[b * c]),
                    c >= 2 && p.setY(M, w[b * c + 1]),
                    c >= 3 && p.setZ(M, w[b * c + 2]),
                    c >= 4 && p.setW(M, w[b * c + 3]),
                    c >= 5)
                        throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")
                }
            }
            return p
        })
    }
    loadTexture(e) {
        const t = this.json
          , n = this.options
          , s = t.textures[e].source
          , a = t.images[s];
        let o = this.textureLoader;
        if (a.uri) {
            const c = n.manager.getHandler(a.uri);
            c !== null && (o = c)
        }
        return this.loadTextureImage(e, s, o)
    }
    loadTextureImage(e, t, n) {
        const i = this
          , s = this.json
          , a = s.textures[e]
          , o = s.images[t]
          , c = (o.uri || o.bufferView) + ":" + a.sampler;
        if (this.textureCache[c])
            return this.textureCache[c];
        const l = this.loadImageSource(t, n).then(function(h) {
            h.flipY = !1,
            h.name = a.name || o.name || "",
            h.name === "" && typeof o.uri == "string" && o.uri.startsWith("data:image/") === !1 && (h.name = o.uri);
            const d = (s.samplers || {})[a.sampler] || {};
            return h.magFilter = mc[d.magFilter] || lt,
            h.minFilter = mc[d.minFilter] || qt,
            h.wrapS = gc[d.wrapS] || Ai,
            h.wrapT = gc[d.wrapT] || Ai,
            i.associations.set(h, {
                textures: e
            }),
            h
        }).catch(function() {
            return null
        });
        return this.textureCache[c] = l,
        l
    }
    loadImageSource(e, t) {
        const n = this
          , i = this.json
          , s = this.options;
        if (this.sourceCache[e] !== void 0)
            return this.sourceCache[e].then(u=>u.clone());
        const a = i.images[e]
          , o = self.URL || self.webkitURL;
        let c = a.uri || ""
          , l = !1;
        if (a.bufferView !== void 0)
            c = n.getDependency("bufferView", a.bufferView).then(function(u) {
                l = !0;
                const d = new Blob([u],{
                    type: a.mimeType
                });
                return c = o.createObjectURL(d),
                c
            });
        else if (a.uri === void 0)
            throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
        const h = Promise.resolve(c).then(function(u) {
            return new Promise(function(d, m) {
                let g = d;
                t.isImageBitmapLoader === !0 && (g = function(_) {
                    const p = new ht(_);
                    p.needsUpdate = !0,
                    d(p)
                }
                ),
                t.load(Qi.resolveURL(u, s.path), g, void 0, m)
            }
            )
        }).then(function(u) {
            return l === !0 && o.revokeObjectURL(c),
            u.userData.mimeType = a.mimeType || d_(a.uri),
            u
        }).catch(function(u) {
            throw console.error("THREE.GLTFLoader: Couldn't load texture", c),
            u
        });
        return this.sourceCache[e] = h,
        h
    }
    assignTexture(e, t, n, i) {
        const s = this;
        return this.getDependency("texture", n.index).then(function(a) {
            if (!a)
                return null;
            if (n.texCoord !== void 0 && n.texCoord > 0 && (a = a.clone(),
            a.channel = n.texCoord),
            s.extensions[De.KHR_TEXTURE_TRANSFORM]) {
                const o = n.extensions !== void 0 ? n.extensions[De.KHR_TEXTURE_TRANSFORM] : void 0;
                if (o) {
                    const c = s.associations.get(a);
                    a = s.extensions[De.KHR_TEXTURE_TRANSFORM].extendTexture(a, o),
                    s.associations.set(a, c)
                }
            }
            return i !== void 0 && (a.colorSpace = i),
            e[t] = a,
            a
        })
    }
    assignFinalMaterial(e) {
        const t = e.geometry;
        let n = e.material;
        const i = t.attributes.tangent === void 0
          , s = t.attributes.color !== void 0
          , a = t.attributes.normal === void 0;
        if (e.isPoints) {
            const o = "PointsMaterial:" + n.uuid;
            let c = this.cache.get(o);
            c || (c = new Qc,
            Yt.prototype.copy.call(c, n),
            c.color.copy(n.color),
            c.map = n.map,
            c.sizeAttenuation = !1,
            this.cache.add(o, c)),
            n = c
        } else if (e.isLine) {
            const o = "LineBasicMaterial:" + n.uuid;
            let c = this.cache.get(o);
            c || (c = new Jc,
            Yt.prototype.copy.call(c, n),
            c.color.copy(n.color),
            c.map = n.map,
            this.cache.add(o, c)),
            n = c
        }
        if (i || s || a) {
            let o = "ClonedMaterial:" + n.uuid + ":";
            i && (o += "derivative-tangents:"),
            s && (o += "vertex-colors:"),
            a && (o += "flat-shading:");
            let c = this.cache.get(o);
            c || (c = n.clone(),
            s && (c.vertexColors = !0),
            a && (c.flatShading = !0),
            i && (c.normalScale && (c.normalScale.y *= -1),
            c.clearcoatNormalScale && (c.clearcoatNormalScale.y *= -1)),
            this.cache.add(o, c),
            this.associations.set(c, this.associations.get(n))),
            n = c
        }
        e.material = n
    }
    getMaterialType() {
        return es
    }
    loadMaterial(e) {
        const t = this
          , n = this.json
          , i = this.extensions
          , s = n.materials[e];
        let a;
        const o = {}
          , c = s.extensions || {}
          , l = [];
        if (c[De.KHR_MATERIALS_UNLIT]) {
            const u = i[De.KHR_MATERIALS_UNLIT];
            a = u.getMaterialType(),
            l.push(u.extendParams(o, s, t))
        } else {
            const u = s.pbrMetallicRoughness || {};
            if (o.color = new Se(1,1,1),
            o.opacity = 1,
            Array.isArray(u.baseColorFactor)) {
                const d = u.baseColorFactor;
                o.color.setRGB(d[0], d[1], d[2], ut),
                o.opacity = d[3]
            }
            u.baseColorTexture !== void 0 && l.push(t.assignTexture(o, "map", u.baseColorTexture, St)),
            o.metalness = u.metallicFactor !== void 0 ? u.metallicFactor : 1,
            o.roughness = u.roughnessFactor !== void 0 ? u.roughnessFactor : 1,
            u.metallicRoughnessTexture !== void 0 && (l.push(t.assignTexture(o, "metalnessMap", u.metallicRoughnessTexture)),
            l.push(t.assignTexture(o, "roughnessMap", u.metallicRoughnessTexture))),
            a = this._invokeOne(function(d) {
                return d.getMaterialType && d.getMaterialType(e)
            }),
            l.push(Promise.all(this._invokeAll(function(d) {
                return d.extendMaterialParams && d.extendMaterialParams(e, o)
            })))
        }
        s.doubleSided === !0 && (o.side = Gt);
        const h = s.alphaMode || ks.OPAQUE;
        if (h === ks.BLEND ? (o.transparent = !0,
        o.depthWrite = !1) : (o.transparent = !1,
        h === ks.MASK && (o.alphaTest = s.alphaCutoff !== void 0 ? s.alphaCutoff : .5)),
        s.normalTexture !== void 0 && a !== Xn && (l.push(t.assignTexture(o, "normalMap", s.normalTexture)),
        o.normalScale = new Ue(1,1),
        s.normalTexture.scale !== void 0)) {
            const u = s.normalTexture.scale;
            o.normalScale.set(u, u)
        }
        if (s.occlusionTexture !== void 0 && a !== Xn && (l.push(t.assignTexture(o, "aoMap", s.occlusionTexture)),
        s.occlusionTexture.strength !== void 0 && (o.aoMapIntensity = s.occlusionTexture.strength)),
        s.emissiveFactor !== void 0 && a !== Xn) {
            const u = s.emissiveFactor;
            o.emissive = new Se().setRGB(u[0], u[1], u[2], ut)
        }
        return s.emissiveTexture !== void 0 && a !== Xn && l.push(t.assignTexture(o, "emissiveMap", s.emissiveTexture, St)),
        Promise.all(l).then(function() {
            const u = new a(o);
            return s.name && (u.name = s.name),
            Tn(u, s),
            t.associations.set(u, {
                materials: e
            }),
            s.extensions && zn(i, u, s),
            u
        })
    }
    createUniqueName(e) {
        const t = Ye.sanitizeNodeName(e || "");
        return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0,
        t)
    }
    loadGeometries(e) {
        const t = this
          , n = this.extensions
          , i = this.primitiveCache;
        function s(o) {
            return n[De.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o, t).then(function(c) {
                return _c(c, o, t)
            })
        }
        const a = [];
        for (let o = 0, c = e.length; o < c; o++) {
            const l = e[o]
              , h = u_(l)
              , u = i[h];
            if (u)
                a.push(u.promise);
            else {
                let d;
                l.extensions && l.extensions[De.KHR_DRACO_MESH_COMPRESSION] ? d = s(l) : d = _c(new $t, l, t),
                i[h] = {
                    primitive: l,
                    promise: d
                },
                a.push(d)
            }
        }
        return Promise.all(a)
    }
    loadMesh(e) {
        const t = this
          , n = this.json
          , i = this.extensions
          , s = n.meshes[e]
          , a = s.primitives
          , o = [];
        for (let c = 0, l = a.length; c < l; c++) {
            const h = a[c].material === void 0 ? c_(this.cache) : this.getDependency("material", a[c].material);
            o.push(h)
        }
        return o.push(t.loadGeometries(a)),
        Promise.all(o).then(function(c) {
            const l = c.slice(0, c.length - 1)
              , h = c[c.length - 1]
              , u = [];
            for (let m = 0, g = h.length; m < g; m++) {
                const _ = h[m]
                  , p = a[m];
                let f;
                const T = l[m];
                if (p.mode === Ut.TRIANGLES || p.mode === Ut.TRIANGLE_STRIP || p.mode === Ut.TRIANGLE_FAN || p.mode === void 0)
                    f = s.isSkinnedMesh === !0 ? new Jm(_,T) : new At(_,T),
                    f.isSkinnedMesh === !0 && f.normalizeSkinWeights(),
                    p.mode === Ut.TRIANGLE_STRIP ? f.geometry = fc(f.geometry, Lc) : p.mode === Ut.TRIANGLE_FAN && (f.geometry = fc(f.geometry, Ys));
                else if (p.mode === Ut.LINES)
                    f = new ng(_,T);
                else if (p.mode === Ut.LINE_STRIP)
                    f = new ha(_,T);
                else if (p.mode === Ut.LINE_LOOP)
                    f = new ig(_,T);
                else if (p.mode === Ut.POINTS)
                    f = new rg(_,T);
                else
                    throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + p.mode);
                Object.keys(f.geometry.morphAttributes).length > 0 && h_(f, s),
                f.name = t.createUniqueName(s.name || "mesh_" + e),
                Tn(f, s),
                p.extensions && zn(i, f, p),
                t.assignFinalMaterial(f),
                u.push(f)
            }
            for (let m = 0, g = u.length; m < g; m++)
                t.associations.set(u[m], {
                    meshes: e,
                    primitives: m
                });
            if (u.length === 1)
                return s.extensions && zn(i, u[0], s),
                u[0];
            const d = new qn;
            s.extensions && zn(i, d, s),
            t.associations.set(d, {
                meshes: e
            });
            for (let m = 0, g = u.length; m < g; m++)
                d.add(u[m]);
            return d
        })
    }
    loadCamera(e) {
        let t;
        const n = this.json.cameras[e]
          , i = n[n.type];
        if (!i) {
            console.warn("THREE.GLTFLoader: Missing camera parameters.");
            return
        }
        return n.type === "perspective" ? t = new yt(Hn.radToDeg(i.yfov),i.aspectRatio || 1,i.znear || 1,i.zfar || 2e6) : n.type === "orthographic" && (t = new sa(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),
        n.name && (t.name = this.createUniqueName(n.name)),
        Tn(t, n),
        Promise.resolve(t)
    }
    loadSkin(e) {
        const t = this.json.skins[e]
          , n = [];
        for (let i = 0, s = t.joints.length; i < s; i++)
            n.push(this._loadNodeShallow(t.joints[i]));
        return t.inverseBindMatrices !== void 0 ? n.push(this.getDependency("accessor", t.inverseBindMatrices)) : n.push(null),
        Promise.all(n).then(function(i) {
            const s = i.pop()
              , a = i
              , o = []
              , c = [];
            for (let l = 0, h = a.length; l < h; l++) {
                const u = a[l];
                if (u) {
                    o.push(u);
                    const d = new we;
                    s !== null && d.fromArray(s.array, l * 16),
                    c.push(d)
                } else
                    console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[l])
            }
            return new la(o,c)
        })
    }
    loadAnimation(e) {
        const t = this.json
          , n = this
          , i = t.animations[e]
          , s = i.name ? i.name : "animation_" + e
          , a = []
          , o = []
          , c = []
          , l = []
          , h = [];
        for (let u = 0, d = i.channels.length; u < d; u++) {
            const m = i.channels[u]
              , g = i.samplers[m.sampler]
              , _ = m.target
              , p = _.node
              , f = i.parameters !== void 0 ? i.parameters[g.input] : g.input
              , T = i.parameters !== void 0 ? i.parameters[g.output] : g.output;
            _.node !== void 0 && (a.push(this.getDependency("node", p)),
            o.push(this.getDependency("accessor", f)),
            c.push(this.getDependency("accessor", T)),
            l.push(g),
            h.push(_))
        }
        return Promise.all([Promise.all(a), Promise.all(o), Promise.all(c), Promise.all(l), Promise.all(h)]).then(function(u) {
            const d = u[0]
              , m = u[1]
              , g = u[2]
              , _ = u[3]
              , p = u[4]
              , f = [];
            for (let T = 0, y = d.length; T < y; T++) {
                const E = d[T]
                  , U = m[T]
                  , w = g[T]
                  , b = _[T]
                  , L = p[T];
                if (E === void 0)
                    continue;
                E.updateMatrix && E.updateMatrix();
                const M = n._createAnimationTracks(E, U, w, b, L);
                if (M)
                    for (let x = 0; x < M.length; x++)
                        f.push(M[x])
            }
            return new ug(s,void 0,f)
        })
    }
    createNodeMesh(e) {
        const t = this.json
          , n = this
          , i = t.nodes[e];
        return i.mesh === void 0 ? null : n.getDependency("mesh", i.mesh).then(function(s) {
            const a = n._getNodeRef(n.meshCache, i.mesh, s);
            return i.weights !== void 0 && a.traverse(function(o) {
                if (o.isMesh)
                    for (let c = 0, l = i.weights.length; c < l; c++)
                        o.morphTargetInfluences[c] = i.weights[c]
            }),
            a
        })
    }
    loadNode(e) {
        const t = this.json
          , n = this
          , i = t.nodes[e]
          , s = n._loadNodeShallow(e)
          , a = []
          , o = i.children || [];
        for (let l = 0, h = o.length; l < h; l++)
            a.push(n.getDependency("node", o[l]));
        const c = i.skin === void 0 ? Promise.resolve(null) : n.getDependency("skin", i.skin);
        return Promise.all([s, Promise.all(a), c]).then(function(l) {
            const h = l[0]
              , u = l[1]
              , d = l[2];
            d !== null && h.traverse(function(m) {
                m.isSkinnedMesh && m.bind(d, f_)
            });
            for (let m = 0, g = u.length; m < g; m++)
                h.add(u[m]);
            return h
        })
    }
    _loadNodeShallow(e) {
        const t = this.json
          , n = this.extensions
          , i = this;
        if (this.nodeCache[e] !== void 0)
            return this.nodeCache[e];
        const s = t.nodes[e]
          , a = s.name ? i.createUniqueName(s.name) : ""
          , o = []
          , c = i._invokeOne(function(l) {
            return l.createNodeMesh && l.createNodeMesh(e)
        });
        return c && o.push(c),
        s.camera !== void 0 && o.push(i.getDependency("camera", s.camera).then(function(l) {
            return i._getNodeRef(i.cameraCache, s.camera, l)
        })),
        i._invokeAll(function(l) {
            return l.createNodeAttachment && l.createNodeAttachment(e)
        }).forEach(function(l) {
            o.push(l)
        }),
        this.nodeCache[e] = Promise.all(o).then(function(l) {
            let h;
            if (s.isBone === !0 ? h = new Zc : l.length > 1 ? h = new qn : l.length === 1 ? h = l[0] : h = new et,
            h !== l[0])
                for (let u = 0, d = l.length; u < d; u++)
                    h.add(l[u]);
            if (s.name && (h.userData.name = s.name,
            h.name = a),
            Tn(h, s),
            s.extensions && zn(n, h, s),
            s.matrix !== void 0) {
                const u = new we;
                u.fromArray(s.matrix),
                h.applyMatrix4(u)
            } else
                s.translation !== void 0 && h.position.fromArray(s.translation),
                s.rotation !== void 0 && h.quaternion.fromArray(s.rotation),
                s.scale !== void 0 && h.scale.fromArray(s.scale);
            return i.associations.has(h) || i.associations.set(h, {}),
            i.associations.get(h).nodes = e,
            h
        }),
        this.nodeCache[e]
    }
    loadScene(e) {
        const t = this.extensions
          , n = this.json.scenes[e]
          , i = this
          , s = new qn;
        n.name && (s.name = i.createUniqueName(n.name)),
        Tn(s, n),
        n.extensions && zn(t, s, n);
        const a = n.nodes || []
          , o = [];
        for (let c = 0, l = a.length; c < l; c++)
            o.push(i.getDependency("node", a[c]));
        return Promise.all(o).then(function(c) {
            for (let h = 0, u = c.length; h < u; h++)
                s.add(c[h]);
            const l = h=>{
                const u = new Map;
                for (const [d,m] of i.associations)
                    (d instanceof Yt || d instanceof ht) && u.set(d, m);
                return h.traverse(d=>{
                    const m = i.associations.get(d);
                    m != null && u.set(d, m)
                }
                ),
                u
            }
            ;
            return i.associations = l(s),
            s
        })
    }
    _createAnimationTracks(e, t, n, i, s) {
        const a = []
          , o = e.name ? e.name : e.uuid
          , c = [];
        En[s.path] === En.weights ? e.traverse(function(d) {
            d.morphTargetInfluences && c.push(d.name ? d.name : d.uuid)
        }) : c.push(o);
        let l;
        switch (En[s.path]) {
        case En.weights:
            l = Li;
            break;
        case En.rotation:
            l = Kn;
            break;
        case En.position:
        case En.scale:
            l = Pi;
            break;
        default:
            switch (n.itemSize) {
            case 1:
                l = Li;
                break;
            case 2:
            case 3:
            default:
                l = Pi;
                break
            }
            break
        }
        const h = i.interpolation !== void 0 ? o_[i.interpolation] : wi
          , u = this._getArrayFromAccessor(n);
        for (let d = 0, m = c.length; d < m; d++) {
            const g = new l(c[d] + "." + En[s.path],t.array,u,h);
            i.interpolation === "CUBICSPLINE" && this._createCubicSplineTrackInterpolant(g),
            a.push(g)
        }
        return a
    }
    _getArrayFromAccessor(e) {
        let t = e.array;
        if (e.normalized) {
            const n = Qs(t.constructor)
              , i = new Float32Array(t.length);
            for (let s = 0, a = t.length; s < a; s++)
                i[s] = t[s] * n;
            t = i
        }
        return t
    }
    _createCubicSplineTrackInterpolant(e) {
        e.createInterpolant = function(n) {
            const i = this instanceof Kn ? a_ : rl;
            return new i(this.times,this.values,this.getValueSize() / 3,n)
        }
        ,
        e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0
    }
}
function m_(r, e, t) {
    const n = e.attributes
      , i = new mn;
    if (n.POSITION !== void 0) {
        const o = t.json.accessors[n.POSITION]
          , c = o.min
          , l = o.max;
        if (c !== void 0 && l !== void 0) {
            if (i.set(new P(c[0],c[1],c[2]), new P(l[0],l[1],l[2])),
            o.normalized) {
                const h = Qs(Mi[o.componentType]);
                i.min.multiplyScalar(h),
                i.max.multiplyScalar(h)
            }
        } else {
            console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
            return
        }
    } else
        return;
    const s = e.targets;
    if (s !== void 0) {
        const o = new P
          , c = new P;
        for (let l = 0, h = s.length; l < h; l++) {
            const u = s[l];
            if (u.POSITION !== void 0) {
                const d = t.json.accessors[u.POSITION]
                  , m = d.min
                  , g = d.max;
                if (m !== void 0 && g !== void 0) {
                    if (c.setX(Math.max(Math.abs(m[0]), Math.abs(g[0]))),
                    c.setY(Math.max(Math.abs(m[1]), Math.abs(g[1]))),
                    c.setZ(Math.max(Math.abs(m[2]), Math.abs(g[2]))),
                    d.normalized) {
                        const _ = Qs(Mi[d.componentType]);
                        c.multiplyScalar(_)
                    }
                    o.max(c)
                } else
                    console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")
            }
        }
        i.expandByVector(o)
    }
    r.boundingBox = i;
    const a = new jt;
    i.getCenter(a.center),
    a.radius = i.min.distanceTo(i.max) / 2,
    r.boundingSphere = a
}
function _c(r, e, t) {
    const n = e.attributes
      , i = [];
    function s(a, o) {
        return t.getDependency("accessor", a).then(function(c) {
            r.setAttribute(o, c)
        })
    }
    for (const a in n) {
        const o = Js[a] || a.toLowerCase();
        o in r.attributes || i.push(s(n[a], o))
    }
    if (e.indices !== void 0 && !r.index) {
        const a = t.getDependency("accessor", e.indices).then(function(o) {
            r.setIndex(o)
        });
        i.push(a)
    }
    return We.workingColorSpace !== ut && "COLOR_0"in n && console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${We.workingColorSpace}" not supported.`),
    Tn(r, e),
    m_(r, e, t),
    Promise.all(i).then(function() {
        return e.targets !== void 0 ? l_(r, e.targets, t) : r
    })
}
class g_ extends xg {
    constructor(e) {
        super(e),
        this.type = un
    }
    parse(e) {
        const a = function(L, M) {
            switch (L) {
            case 1:
                throw new Error("THREE.RGBELoader: Read Error: " + (M || ""));
            case 2:
                throw new Error("THREE.RGBELoader: Write Error: " + (M || ""));
            case 3:
                throw new Error("THREE.RGBELoader: Bad File Format: " + (M || ""));
            default:
            case 4:
                throw new Error("THREE.RGBELoader: Memory Error: " + (M || ""))
            }
        }
          , h = `
`
          , u = function(L, M, x) {
            M = M || 1024;
            let V = L.pos
              , R = -1
              , B = 0
              , G = ""
              , q = String.fromCharCode.apply(null, new Uint16Array(L.subarray(V, V + 128)));
            for (; 0 > (R = q.indexOf(h)) && B < M && V < L.byteLength; )
                G += q,
                B += q.length,
                V += 128,
                q += String.fromCharCode.apply(null, new Uint16Array(L.subarray(V, V + 128)));
            return -1 < R ? (L.pos += B + R + 1,
            G + q.slice(0, R)) : !1
        }
          , d = function(L) {
            const M = /^#\?(\S+)/
              , x = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/
              , D = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/
              , V = /^\s*FORMAT=(\S+)\s*$/
              , R = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/
              , B = {
                valid: 0,
                string: "",
                comments: "",
                programtype: "RGBE",
                format: "",
                gamma: 1,
                exposure: 1,
                width: 0,
                height: 0
            };
            let G, q;
            for ((L.pos >= L.byteLength || !(G = u(L))) && a(1, "no header found"),
            (q = G.match(M)) || a(3, "bad initial token"),
            B.valid |= 1,
            B.programtype = q[1],
            B.string += G + `
`; G = u(L),
            G !== !1; ) {
                if (B.string += G + `
`,
                G.charAt(0) === "#") {
                    B.comments += G + `
`;
                    continue
                }
                if ((q = G.match(x)) && (B.gamma = parseFloat(q[1])),
                (q = G.match(D)) && (B.exposure = parseFloat(q[1])),
                (q = G.match(V)) && (B.valid |= 2,
                B.format = q[1]),
                (q = G.match(R)) && (B.valid |= 4,
                B.height = parseInt(q[1], 10),
                B.width = parseInt(q[2], 10)),
                B.valid & 2 && B.valid & 4)
                    break
            }
            return B.valid & 2 || a(3, "missing format specifier"),
            B.valid & 4 || a(3, "missing image size specifier"),
            B
        }
          , m = function(L, M, x) {
            const D = M;
            if (D < 8 || D > 32767 || L[0] !== 2 || L[1] !== 2 || L[2] & 128)
                return new Uint8Array(L);
            D !== (L[2] << 8 | L[3]) && a(3, "wrong scanline width");
            const V = new Uint8Array(4 * M * x);
            V.length || a(4, "unable to allocate buffer space");
            let R = 0
              , B = 0;
            const G = 4 * D
              , q = new Uint8Array(4)
              , J = new Uint8Array(G);
            let H = x;
            for (; H > 0 && B < L.byteLength; ) {
                B + 4 > L.byteLength && a(1),
                q[0] = L[B++],
                q[1] = L[B++],
                q[2] = L[B++],
                q[3] = L[B++],
                (q[0] != 2 || q[1] != 2 || (q[2] << 8 | q[3]) != D) && a(3, "bad rgbe scanline format");
                let Q = 0, $;
                for (; Q < G && B < L.byteLength; ) {
                    $ = L[B++];
                    const Me = $ > 128;
                    if (Me && ($ -= 128),
                    ($ === 0 || Q + $ > G) && a(3, "bad scanline data"),
                    Me) {
                        const Ne = L[B++];
                        for (let W = 0; W < $; W++)
                            J[Q++] = Ne
                    } else
                        J.set(L.subarray(B, B + $), Q),
                        Q += $,
                        B += $
                }
                const de = D;
                for (let Me = 0; Me < de; Me++) {
                    let Ne = 0;
                    V[R] = J[Me + Ne],
                    Ne += D,
                    V[R + 1] = J[Me + Ne],
                    Ne += D,
                    V[R + 2] = J[Me + Ne],
                    Ne += D,
                    V[R + 3] = J[Me + Ne],
                    R += 4
                }
                H--
            }
            return V
        }
          , g = function(L, M, x, D) {
            const V = L[M + 3]
              , R = Math.pow(2, V - 128) / 255;
            x[D + 0] = L[M + 0] * R,
            x[D + 1] = L[M + 1] * R,
            x[D + 2] = L[M + 2] * R,
            x[D + 3] = 1
        }
          , _ = function(L, M, x, D) {
            const V = L[M + 3]
              , R = Math.pow(2, V - 128) / 255;
            x[D + 0] = xr.toHalfFloat(Math.min(L[M + 0] * R, 65504)),
            x[D + 1] = xr.toHalfFloat(Math.min(L[M + 1] * R, 65504)),
            x[D + 2] = xr.toHalfFloat(Math.min(L[M + 2] * R, 65504)),
            x[D + 3] = xr.toHalfFloat(1)
        }
          , p = new Uint8Array(e);
        p.pos = 0;
        const f = d(p)
          , T = f.width
          , y = f.height
          , E = m(p.subarray(p.pos), T, y);
        let U, w, b;
        switch (this.type) {
        case Pt:
            b = E.length / 4;
            const L = new Float32Array(b * 4);
            for (let x = 0; x < b; x++)
                g(E, x * 4, L, x * 4);
            U = L,
            w = Pt;
            break;
        case un:
            b = E.length / 4;
            const M = new Uint16Array(b * 4);
            for (let x = 0; x < b; x++)
                _(E, x * 4, M, x * 4);
            U = M,
            w = un;
            break;
        default:
            throw new Error("THREE.RGBELoader: Unsupported type: " + this.type)
        }
        return {
            width: T,
            height: y,
            data: U,
            header: f.string,
            gamma: f.gamma,
            exposure: f.exposure,
            type: w
        }
    }
    setDataType(e) {
        return this.type = e,
        this
    }
    load(e, t, n, i) {
        function s(a, o) {
            switch (a.type) {
            case Pt:
            case un:
                a.colorSpace = ut,
                a.minFilter = lt,
                a.magFilter = lt,
                a.generateMipmaps = !1,
                a.flipY = !0;
                break
            }
            t && t(a, o)
        }
        return super.load(e, s, n, i)
    }
}
const ir = new jm
  , bt = new yt(50,window.innerWidth / window.innerHeight,.1,1e4)
  , Fi = new Km({
    alpha: !0,
    antialias: !0
});
Fi.setSize(window.innerWidth, window.innerHeight);
document.querySelector(".model-viewer").appendChild(Fi.domElement);
Fi.shadowMap.enabled = !0;
Fi.shadowMap.type = ta;
const sl = new g_;
sl.setDataType(un);




let hdrLoaded = false;
let modelLoaded = false;
let hdrProgress = 0;
let modelProgress = 0;

const hl = () => {
    const totalProgress = Math.round(hdrProgress + modelProgress);
    const progressBar = document.getElementById("loading-progress-bar");
    const progressText = document.getElementById("loading-progress-text");
    const loader = document.querySelector(".loader");
    const loaderImg = document.querySelector(".loader img");

    progressBar.style.width = `${totalProgress}%`;
	progressText.textContent = `${Math.round(totalProgress / 2.35)-1}%`;


    if (loader) {
        loader.style.opacity = `${totalProgress}%`;
    }
    if (loaderImg) {
        loaderImg.style.opacity = `${totalProgress}%`;
    }

    console.log(totalProgress);
};

const ul = () => {
    if (hdrLoaded && modelLoaded) {
        const loader = document.querySelector(".loader");
        const progressContainer = document.querySelector(".loading-progress-container");
        loader.classList.add("fade-out");
        progressContainer.classList.add("fade-out");

        const loadingScreen = document.getElementById("loading-screen");
        loadingScreen.classList.add("fade-out");

        loadingScreen.addEventListener("transitionend", () => {
            loadingScreen.style.display = "none";
        });

        // Yükleme tamamlandığında yazdırmayı durdur
        return;
    }
};

sl.load("./assets/hdri-2.hdr", r => {
    r.mapping = kr;
    ir.background = r;
    ir.environment = r;
    hdrLoaded = true;
    ul();
}, r => {
    hdrProgress = r.loaded / r.total * 50;
    hl();
}, r => {
    console.error("Error loading HDR:", r);
});

const __ = new Ng;
let Gs;
__.load("./assets/TEST-MODEL-2.glb", r => {
    Gs = r.scene;
    const e = new es({
        color: 16777215,
        metalness: .15,
        roughness: .85
    });
    Gs.traverse(t => {
        t instanceof At && (t.material = e,
        t.castShadow = !0,
        t.receiveShadow = !0)
    });
    ir.add(Gs);
    modelLoaded = true;
    ul();
}, r => {
    modelProgress = r.loaded / r.total * 50;
    hl();
}, r => {
    console.error("Error loading model:", r);
});



bt.position.set(0, 5, 10);
bt.lookAt(0, 0, 0);
const $n = new nl(16777215,1.5);
$n.position.set(-15, 25, 10);
$n.castShadow = !0;
$n.shadow.radius = 50;
$n.shadow.mapSize.width = 4096;
$n.shadow.mapSize.height = 4096;
$n.shadow.filter = ta;
ir.add($n);
function x_(r) {
    const e = r.clientX / window.innerWidth * 2 - 1
      , t = -(r.clientY / window.innerHeight) * 2 + 1
      , n = new P(e,t,.5);
    n.unproject(bt);
    const i = n.sub(bt.position).normalize()
      , s = -bt.position.z / i.z
      , a = bt.position.clone().add(i.multiplyScalar(s))
      , o = 3;
    a.y += o
}
document.addEventListener("mousemove", x_, !1);
let Si = {
    x: 0,
    y: 15,
    z: 0
}
  , yi = {
    x: 0,
    y: 20,
    z: 0
}
  , on = {
    x: bt.position.x,
    y: bt.position.y,
    z: bt.position.z
}
  , cn = {
    x: 0,
    y: 0,
    z: 0
};
const Ki = [{
    percent: 0,
    position: {
        x: 0,
        y: 15,
        z: 0
    },
    lookAt: {
        x: 0,
        y: 20,
        z: 0
    }
}, {
    percent: 10,
    position: {
        x: 0,
        y: 5,
        z: 10
    },
    lookAt: {
        x: 0,
        y: 0,
        z: 0
    }
}, {
    percent: 22,
    position: {
        x: -16,
        y: 2,
        z: 10
    },
    lookAt: {
        x: 20,
        y: -5,
        z: -40
    }
}, {
    percent: 40,
    position: {
        x: 5,
        y: 5,
        z: 10
    },
    lookAt: {
        x: 0,
        y: -50,
        z: -100
    }
}, {
    percent: 60,
    position: {
        x: 15,
        y: 2,
        z: -5
    },
    lookAt: {
        x: -5,
        y: 0,
        z: 0
    }
}, {
    percent: 80,
    position: {
        x: 15,
        y: 2,
        z: 5
    },
    lookAt: {
        x: -50,
        y: -10,
        z: -25
    }
}, {
    percent: 90,
    position: {
        x: 5,
        y: 5,
        z: 5
    },
    lookAt: {
        x: -150,
        y: -100,
        z: -150
    }
}, {
    percent: 100,
    position: {
        x: 0,
        y: 5,
        z: 10
    },
    lookAt: {
        x: 0,
        y: 0,
        z: 0
    }
}];
window.addEventListener("scroll", ()=>{
    const e = window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100;
    console.log(`Scrolling: ${Math.floor(e)}%`);
    let t = 0;
    for (let a = 0; a < Ki.length - 1; a++)
        if (e >= Ki[a].percent && e < Ki[a + 1].percent) {
            t = a;
            break
        }
    const n = Ki[t]
      , i = Ki[t + 1]
      , s = (e - n.percent) / (i.percent - n.percent);
    Si.x = mi(n.position.x, i.position.x, s),
    Si.y = mi(n.position.y, i.position.y, s),
    Si.z = mi(n.position.z, i.position.z, s),
    yi.x = mi(n.lookAt.x, i.lookAt.x, s),
    yi.y = mi(n.lookAt.y, i.lookAt.y, s),
    yi.z = mi(n.lookAt.z, i.lookAt.z, s)
}
);
function mi(r, e, t) {
    return (1 - t) * r + t * e
}
function dl() {
    requestAnimationFrame(dl),
    on.x = Hn.lerp(on.x, Si.x, .075),
    on.y = Hn.lerp(on.y, Si.y, .075),
    on.z = Hn.lerp(on.z, Si.z, .075),
    cn.x = Hn.lerp(cn.x, yi.x, .05),
    cn.y = Hn.lerp(cn.y, yi.y, .05),
    cn.z = Hn.lerp(cn.z, yi.z, .05),
    bt.position.set(on.x, on.y, on.z),
    bt.lookAt(cn.x, cn.y, cn.z),
    Fi.render(ir, bt)
}
dl();
window.addEventListener("resize", ()=>{
    bt.aspect = window.innerWidth / window.innerHeight,
    bt.updateProjectionMatrix(),
    Fi.setSize(window.innerWidth, window.innerHeight)
}
);
