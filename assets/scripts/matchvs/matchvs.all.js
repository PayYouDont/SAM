var MVS = {
    version: "SDK_REL_V3.7.6.4",
    Game: {id: 0, appkey: ""},
    DEBUG: !0,
    IsWss: !1,
    SetWss: function (e) {
        this.IsWss = e
    },
    getNowTimeStr: function () {
        var e = new Date, t = e.getMonth() + 1, r = e.getDate();
        return 1 <= t && t <= 9 && (t = "0" + t), 0 <= r && r <= 9 && (r = "0" + r), "[" + e.getFullYear() + "-" + t + "-" + r + " " + e.getHours() + ":" + e.getMinutes() + ":" + e.getSeconds() + "." + e.getMilliseconds() + "]"
    },
    LgFormat: function (e) {
        return "[MatchvsSDK][" + this.getNowTimeStr() + "][" + e + "]"
    },
    Config: {HEART_BEAT_INTERVAL: 3e3, MAXPLAYER_LIMIT: 100, MINPLAYER_LIMIT: 2},
    Host: {
        HOST_GATWAY_ADDR: "",
        HOST_HOTEL_ADDR: "",
        HOST_WATCH_ADDR: "",
        GETHOSTLIST_URL: "http://sdk.matchvs.com",
        REGISTER_USER_URL: "",
        CMSNS_URL: "",
        VS_OPEN_URL: "",
        VS_PAY_URL: "",
        VS_PRODUCT_URL: ""
    },
    TgRoomType: {NRoom: -1, PRoom: 0, WRoom: 1}
}, MatchvsLog = {
    toArray: function (e) {
        for (var t = [], r = 0; r < e.length; r++) t.push(e[r]);
        return t
    }
};

function getNowFormatDate() {
    var e = new Date, t = e.getMonth() + 1, r = e.getDate();
    return 1 <= t && t <= 9 && (t = "0" + t), 0 <= r && r <= 9 && (r = "0" + r), "[" + e.getFullYear() + "-" + t + "-" + r + " " + e.getHours() + ":" + e.getMinutes() + ":" + e.getSeconds() + "." + e.getMilliseconds() + "]"
}

MatchvsLog.openLog = function () {
    console.log("---- open log ----"), "undefined" == typeof wx ? (MatchvsLog.logI = console.log.bind(console, "[INFO][Matchvs]  "), MatchvsLog.logE = console.error.bind(console, "[ERROR][Matchvs]  ")) : (MatchvsLog.logI = function () {
        var t = "";
        try {
            throw new Error
        } catch (e) {
            var r = e.stack.split(/\n/)[1];
            t = r.slice(r.lastIndexOf("/") + 1, r.lastIndexOf(")"))
        }
        console.log("[INFO][Matchvs] " + getNowFormatDate() + " " + this.toArray(arguments) + " " + t)
    }, MatchvsLog.logE = function () {
        var t = "";
        try {
            throw new Error
        } catch (e) {
            var r = e.stack.split(/\n/)[1];
            t = r.slice(r.lastIndexOf("/") + 1, r.lastIndexOf(")"))
        }
        console.error("[ERROR][Matchvs] " + getNowFormatDate() + " " + this.toArray(arguments) + " " + t)
    })
}, MatchvsLog.closeLog = function () {
    console.log("---- close log ----"), MatchvsLog.logI = function () {
    }, MatchvsLog.logE = function () {
    }
}, MatchvsLog.openLog(), function (e) {
    var t = {
        NONE: 0,
        INITING: 1,
        HAVE_INIT: 2,
        LOGINING: 4,
        HAVE_LOGIN: 8,
        IN_ROOM: 16,
        CREATEROOM: 32,
        JOIN_ROOMING: 64,
        LEAVE_ROOMING: 128,
        LOGOUTING: 256,
        RECONNECTING: 512,
        IN_WATCHING: 1024,
        IN_WATCH: 2048,
        LEAVE_WATCHING: 4096,
        TEAMMATCHING: 8192,
        IN_TEAM: 16384
    };
    (MVS || {}).ENGE_STATE = t
}();
var hexcase = 0, b64pad = "", chrsz = 8;

function hex_md5(e) {
    return binl2hex(core_md5(str2binl(e), e.length * chrsz))
}

function b64_md5(e) {
    return binl2b64(core_md5(str2binl(e), e.length * chrsz))
}

function str_md5(e) {
    return binl2str(core_md5(str2binl(e), e.length * chrsz))
}

function hex_hmac_md5(e, t) {
    return binl2hex(core_hmac_md5(e, t))
}

function b64_hmac_md5(e, t) {
    return binl2b64(core_hmac_md5(e, t))
}

function str_hmac_md5(e, t) {
    return binl2str(core_hmac_md5(e, t))
}

function md5_vm_test() {
    return "900150983cd24fb0d6963f7d28e17f72" == hex_md5("abc")
}

function core_md5(e, t) {
    e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
    for (var r = 1732584193, o = -271733879, i = -1732584194, s = 271733878, a = 0; a < e.length; a += 16) {
        var n = r, p = o, g = i, u = s;
        o = md5_ii(o = md5_ii(o = md5_ii(o = md5_ii(o = md5_hh(o = md5_hh(o = md5_hh(o = md5_hh(o = md5_gg(o = md5_gg(o = md5_gg(o = md5_gg(o = md5_ff(o = md5_ff(o = md5_ff(o = md5_ff(o, i = md5_ff(i, s = md5_ff(s, r = md5_ff(r, o, i, s, e[a + 0], 7, -680876936), o, i, e[a + 1], 12, -389564586), r, o, e[a + 2], 17, 606105819), s, r, e[a + 3], 22, -1044525330), i = md5_ff(i, s = md5_ff(s, r = md5_ff(r, o, i, s, e[a + 4], 7, -176418897), o, i, e[a + 5], 12, 1200080426), r, o, e[a + 6], 17, -1473231341), s, r, e[a + 7], 22, -45705983), i = md5_ff(i, s = md5_ff(s, r = md5_ff(r, o, i, s, e[a + 8], 7, 1770035416), o, i, e[a + 9], 12, -1958414417), r, o, e[a + 10], 17, -42063), s, r, e[a + 11], 22, -1990404162), i = md5_ff(i, s = md5_ff(s, r = md5_ff(r, o, i, s, e[a + 12], 7, 1804603682), o, i, e[a + 13], 12, -40341101), r, o, e[a + 14], 17, -1502002290), s, r, e[a + 15], 22, 1236535329), i = md5_gg(i, s = md5_gg(s, r = md5_gg(r, o, i, s, e[a + 1], 5, -165796510), o, i, e[a + 6], 9, -1069501632), r, o, e[a + 11], 14, 643717713), s, r, e[a + 0], 20, -373897302), i = md5_gg(i, s = md5_gg(s, r = md5_gg(r, o, i, s, e[a + 5], 5, -701558691), o, i, e[a + 10], 9, 38016083), r, o, e[a + 15], 14, -660478335), s, r, e[a + 4], 20, -405537848), i = md5_gg(i, s = md5_gg(s, r = md5_gg(r, o, i, s, e[a + 9], 5, 568446438), o, i, e[a + 14], 9, -1019803690), r, o, e[a + 3], 14, -187363961), s, r, e[a + 8], 20, 1163531501), i = md5_gg(i, s = md5_gg(s, r = md5_gg(r, o, i, s, e[a + 13], 5, -1444681467), o, i, e[a + 2], 9, -51403784), r, o, e[a + 7], 14, 1735328473), s, r, e[a + 12], 20, -1926607734), i = md5_hh(i, s = md5_hh(s, r = md5_hh(r, o, i, s, e[a + 5], 4, -378558), o, i, e[a + 8], 11, -2022574463), r, o, e[a + 11], 16, 1839030562), s, r, e[a + 14], 23, -35309556), i = md5_hh(i, s = md5_hh(s, r = md5_hh(r, o, i, s, e[a + 1], 4, -1530992060), o, i, e[a + 4], 11, 1272893353), r, o, e[a + 7], 16, -155497632), s, r, e[a + 10], 23, -1094730640), i = md5_hh(i, s = md5_hh(s, r = md5_hh(r, o, i, s, e[a + 13], 4, 681279174), o, i, e[a + 0], 11, -358537222), r, o, e[a + 3], 16, -722521979), s, r, e[a + 6], 23, 76029189), i = md5_hh(i, s = md5_hh(s, r = md5_hh(r, o, i, s, e[a + 9], 4, -640364487), o, i, e[a + 12], 11, -421815835), r, o, e[a + 15], 16, 530742520), s, r, e[a + 2], 23, -995338651), i = md5_ii(i, s = md5_ii(s, r = md5_ii(r, o, i, s, e[a + 0], 6, -198630844), o, i, e[a + 7], 10, 1126891415), r, o, e[a + 14], 15, -1416354905), s, r, e[a + 5], 21, -57434055), i = md5_ii(i, s = md5_ii(s, r = md5_ii(r, o, i, s, e[a + 12], 6, 1700485571), o, i, e[a + 3], 10, -1894986606), r, o, e[a + 10], 15, -1051523), s, r, e[a + 1], 21, -2054922799), i = md5_ii(i, s = md5_ii(s, r = md5_ii(r, o, i, s, e[a + 8], 6, 1873313359), o, i, e[a + 15], 10, -30611744), r, o, e[a + 6], 15, -1560198380), s, r, e[a + 13], 21, 1309151649), i = md5_ii(i, s = md5_ii(s, r = md5_ii(r, o, i, s, e[a + 4], 6, -145523070), o, i, e[a + 11], 10, -1120210379), r, o, e[a + 2], 15, 718787259), s, r, e[a + 9], 21, -343485551), r = safe_add(r, n), o = safe_add(o, p), i = safe_add(i, g), s = safe_add(s, u)
    }
    return Array(r, o, i, s)
}

function md5_cmn(e, t, r, o, i, s) {
    return safe_add(bit_rol(safe_add(safe_add(t, e), safe_add(o, s)), i), r)
}

function md5_ff(e, t, r, o, i, s, a) {
    return md5_cmn(t & r | ~t & o, e, t, i, s, a)
}

function md5_gg(e, t, r, o, i, s, a) {
    return md5_cmn(t & o | r & ~o, e, t, i, s, a)
}

function md5_hh(e, t, r, o, i, s, a) {
    return md5_cmn(t ^ r ^ o, e, t, i, s, a)
}

function md5_ii(e, t, r, o, i, s, a) {
    return md5_cmn(r ^ (t | ~o), e, t, i, s, a)
}

function core_hmac_md5(e, t) {
    var r = str2binl(e);
    16 < r.length && (r = core_md5(r, e.length * chrsz));
    for (var o = Array(16), i = Array(16), s = 0; s < 16; s++) o[s] = 909522486 ^ r[s], i[s] = 1549556828 ^ r[s];
    var a = core_md5(o.concat(str2binl(t)), 512 + t.length * chrsz);
    return core_md5(i.concat(a), 640)
}

function safe_add(e, t) {
    var r = (65535 & e) + (65535 & t);
    return (e >> 16) + (t >> 16) + (r >> 16) << 16 | 65535 & r
}

function bit_rol(e, t) {
    return e << t | e >>> 32 - t
}

function str2binl(e) {
    for (var t = Array(), r = (1 << chrsz) - 1, o = 0; o < e.length * chrsz; o += chrsz) t[o >> 5] |= (e.charCodeAt(o / chrsz) & r) << o % 32;
    return t
}

function binl2str(e) {
    for (var t = "", r = (1 << chrsz) - 1, o = 0; o < 32 * e.length; o += chrsz) t += String.fromCharCode(e[o >> 5] >>> o % 32 & r);
    return t
}

function binl2hex(e) {
    for (var t = hexcase ? "0123456789ABCDEF" : "0123456789abcdef", r = "", o = 0; o < 4 * e.length; o++) r += t.charAt(e[o >> 2] >> o % 4 * 8 + 4 & 15) + t.charAt(e[o >> 2] >> o % 4 * 8 & 15);
    return r
}

function binl2b64(e) {
    for (var t = "", r = 0; r < 4 * e.length; r += 3) for (var o = (e[r >> 2] >> r % 4 * 8 & 255) << 16 | (e[r + 1 >> 2] >> (r + 1) % 4 * 8 & 255) << 8 | e[r + 2 >> 2] >> (r + 2) % 4 * 8 & 255, i = 0; i < 4; i++) 8 * r + 6 * i > 32 * e.length ? t += b64pad : t += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(o >> 6 * (3 - i) & 63);
    return t
}

var format = function (t) {
    for (var r, e, o, i, s = 1, a = [].slice.call(arguments), n = 0, p = t.length, g = "", u = !1, l = !1, c = function () {
        return a[s++]
    }, m = function () {
        for (var e = ""; /\d/.test(t[n]);) e += t[n++], r = t[n];
        return 0 < e.length ? parseInt(e) : null
    }; n < p; ++n) if (r = t[n], u) switch (u = !1, "." == r ? (l = !1, r = t[++n]) : "0" == r && "." == t[n + 1] ? (l = !0, r = t[n += 2]) : l = !0, i = m(), r) {
        case"b":
            g += parseInt(c(), 10).toString(2);
            break;
        case"c":
            "string" == typeof (e = c()) || e instanceof String ? g += e : g += String.fromCharCode(parseInt(e, 10));
            break;
        case"d":
            g += parseInt(c(), 10);
            break;
        case"f":
            o = String(parseFloat(c()).toFixed(i || 6)), g += l ? o : o.replace(/^0/, "");
            break;
        case"j":
            g += JSON.stringify(c());
            break;
        case"o":
            g += "0" + parseInt(c(), 10).toString(8);
            break;
        case"s":
            g += c();
            break;
        case"x":
            g += "0x" + parseInt(c(), 10).toString(16);
            break;
        case"X":
            g += "0x" + parseInt(c(), 10).toString(16).toUpperCase();
            break;
        default:
            g += r
    } else "%" === r ? u = !0 : g += r;
    return g
};

function IncludeJS(e) {
    new_element = document.createElement("script"), new_element.setAttribute("type", "text/javascript"), new_element.setAttribute("src", e), document.body.appendChild(new_element)
}

function MSExtend(e, t) {
    var r = t.prototype, o = e.prototype;
    for (var i in r) o[i] = r[i]
}

function stringToUtf8ByteArray(e) {
    if (!e || "string" != typeof e) return new Uint8Array(0);
    for (var t = [], r = 0, o = 0; o < e.length; o++) {
        var i = e.charCodeAt(o);
        i < 128 ? t[r++] = i : (i < 2048 ? t[r++] = i >> 6 | 192 : (55296 == (64512 & i) && o + 1 < e.length && 56320 == (64512 & e.charCodeAt(o + 1)) ? (i = 65536 + ((1023 & i) << 10) + (1023 & e.charCodeAt(++o)), t[r++] = i >> 18 | 240, t[r++] = i >> 12 & 63 | 128) : t[r++] = i >> 12 | 224, t[r++] = i >> 6 & 63 | 128), t[r++] = 63 & i | 128)
    }
    for (var s = new Uint8Array(t.length), a = 0; a < s.length; a++) s[a] = t[a];
    return s
}

function utf8ByteArrayToString(e) {
    for (var t = [], r = 0, o = 0; r < e.length;) {
        if ((a = e[r++]) < 128) t[o++] = String.fromCharCode(a); else if (191 < a && a < 224) {
            var i = e[r++];
            t[o++] = String.fromCharCode((31 & a) << 6 | 63 & i)
        } else if (239 < a && a < 365) {
            i = e[r++];
            var s = e[r++], a = ((7 & a) << 18 | (63 & i) << 12 | (63 & s) << 6 | 63 & e[r++]) - 65536;
            t[o++] = String.fromCharCode(55296 + (a >> 10)), t[o++] = String.fromCharCode(56320 + (1023 & a))
        } else i = e[r++], s = e[r++], t[o++] = String.fromCharCode((15 & a) << 12 | (63 & i) << 6 | 63 & s)
    }
    return t.join("")
}

function LocalStore_Save(e, t) {
    return window.localStorage ? (localStorage.setItem(e, t), !0) : "undefined" != typeof wx && (wx.setStorageSync(e, t), !0)
}

function LocalStore_Clear() {
    return window.localStorage ? (localStorage.clear(), !0) : "undefined" != typeof wx && (wx.clearStorageSync(), !0)
}

function LocalStore_Load(e) {
    return window.localStorage ? localStorage.getItem(e) : "undefined" != typeof wx ? wx.getStorageSync(e) : null
}

function isIE() {
    return !!window.ActiveXObject || "ActiveXObject" in window
}

function commEngineStateCheck(e, t) {
    var r = 0;
    return (e & MVS.ENGE_STATE.HAVE_INIT) !== MVS.ENGE_STATE.HAVE_INIT ? -2 : (e & MVS.ENGE_STATE.INITING) === MVS.ENGE_STATE.INITING ? -3 : (e & MVS.ENGE_STATE.HAVE_LOGIN) !== MVS.ENGE_STATE.HAVE_LOGIN ? -4 : (e & MVS.ENGE_STATE.LOGINING) === MVS.ENGE_STATE.LOGINING ? -5 : (e & MVS.ENGE_STATE.CREATEROOM) === MVS.ENGE_STATE.CREATEROOM ? -7 : (e & MVS.ENGE_STATE.JOIN_ROOMING) === MVS.ENGE_STATE.JOIN_ROOMING ? -7 : (e & MVS.ENGE_STATE.LOGOUTING) === MVS.ENGE_STATE.LOGOUTING ? -11 : (e & MVS.ENGE_STATE.IN_WATCHING) === MVS.ENGE_STATE.IN_WATCHING ? -12 : (e & MVS.ENGE_STATE.TEAMMATCHING) === MVS.ENGE_STATE.TEAMMATCHING ? -13 : (1 === t ? ((e & MVS.ENGE_STATE.IN_ROOM) !== MVS.ENGE_STATE.IN_ROOM && (r = -6), (e & MVS.ENGE_STATE.LEAVE_ROOMING) === MVS.ENGE_STATE.LEAVE_ROOMING && (r = -10)) : 2 === t ? ((e & MVS.ENGE_STATE.IN_ROOM) === MVS.ENGE_STATE.IN_ROOM && (r = -8), (e & MVS.ENGE_STATE.IN_WATCH) === MVS.ENGE_STATE.IN_WATCH && (r = -8), (e & MVS.ENGE_STATE.LEAVE_ROOMING) === MVS.ENGE_STATE.LEAVE_ROOMING && (r = -10), (e & MVS.ENGE_STATE.LEAVE_WATCHING) === MVS.ENGE_STATE.LEAVE_WATCHING && (r = -14)) : 3 === t ? ((e & MVS.ENGE_STATE.LEAVE_ROOMING) === MVS.ENGE_STATE.LEAVE_ROOMING && (r = -10), (e & MVS.ENGE_STATE.LEAVE_WATCHING) === MVS.ENGE_STATE.LEAVE_WATCHING && (r = -10)) : 4 === t && ((e & MVS.ENGE_STATE.IN_WATCH) !== MVS.ENGE_STATE.IN_WATCH && (r = -6), (e & MVS.ENGE_STATE.LEAVE_WATCHING) === MVS.ENGE_STATE.LEAVE_WATCHING && (r = -10)), 0 !== r && MatchvsLog.logI("error code:" + r + " see the error documentation : http://www.matchvs.com/service?page=js"), r)
}

"function" != typeof String.prototype.startsWith && (String.prototype.startsWith = function (e) {
    return this.slice(0, e.length) === e
}), "function" != typeof String.prototype.endsWith && (String.prototype.endsWith = function (e) {
    return -1 !== this.indexOf(e, this.length - e.length)
}), function (e) {
    var t = {
        isNeedUseWSS: function () {
            return !!MVS.IsWss || ("undefined" != typeof wx || "undefined" != typeof BK)
        }, getLiveUrl: function (e, t, r, o) {
            var i = "live=" + e.getHoteladdr() + "&gameID=" + t + "&roomID=" + r + "&setID=" + o;
            return MVS.IsWss ? "wss://" + e.getWssproxy() + "/watch?" + i : "ws://" + e.getHoteladdr()
        }, getHotelUrl: function (e) {
            return this.isNeedUseWSS() ? "wss://" + e.getWssproxy() + "/proxy?hotel=" + e.getHoteladdr() : "ws://" + e.getHoteladdr()
        }
    };
    e.MsUtil = t;
    var r = function () {
        var i = {}, s = 0;

        function e() {
        }

        return "undefined" != typeof BK ? (e.prototype.setInterval = function (e, t) {
            var r = new BK.Ticker;
            r.interval = 6 * t / 100, r.setTickerCallBack(e);
            var o = ++s;
            return i[o] = r, o
        }, e.prototype.clearInterval = function (e) {
            var t = i[e];
            t && (t.dispose(), delete i[e])
        }) : (e.prototype.setInterval = function (e, t) {
            return setInterval(e, t)
        }, e.prototype.clearInterval = function (e) {
            clearInterval(e)
        }), e
    }();
    e.MvsTicker = r, e.ticker = new r
}(MVS || {}), function s(a, n, p) {
    function g(r, e) {
        if (!n[r]) {
            if (!a[r]) {
                var t = "function" == typeof require && require;
                if (!e && t) return t(r, !0);
                if (u) return u(r, !0);
                var o = new Error("Cannot find module '" + r + "'");
                throw o.code = "MODULE_NOT_FOUND", o
            }
            var i = n[r] = {exports: {}};
            a[r][0].call(i.exports, function (e) {
                var t = a[r][1][e];
                return g(t || e)
            }, i, i.exports, s, a, n, p)
        }
        return n[r].exports
    }

    for (var u = "function" == typeof require && require, e = 0; e < p.length; e++) g(p[e]);
    return g
}({
    1: [function (e, t, r) {
        "use strict";
        r.byteLength = function (e) {
            return 3 * e.length / 4 - l(e)
        }, r.toByteArray = function (e) {
            var t, r, o, i, s, a = e.length;
            i = l(e), s = new u(3 * a / 4 - i), r = 0 < i ? a - 4 : a;
            var n = 0;
            for (t = 0; t < r; t += 4) o = g[e.charCodeAt(t)] << 18 | g[e.charCodeAt(t + 1)] << 12 | g[e.charCodeAt(t + 2)] << 6 | g[e.charCodeAt(t + 3)], s[n++] = o >> 16 & 255, s[n++] = o >> 8 & 255, s[n++] = 255 & o;
            2 === i ? (o = g[e.charCodeAt(t)] << 2 | g[e.charCodeAt(t + 1)] >> 4, s[n++] = 255 & o) : 1 === i && (o = g[e.charCodeAt(t)] << 10 | g[e.charCodeAt(t + 1)] << 4 | g[e.charCodeAt(t + 2)] >> 2, s[n++] = o >> 8 & 255, s[n++] = 255 & o);
            return s
        }, r.fromByteArray = function (e) {
            for (var t, r = e.length, o = r % 3, i = "", s = [], a = 0, n = r - o; a < n; a += 16383) s.push(c(e, a, n < a + 16383 ? n : a + 16383));
            1 === o ? (t = e[r - 1], i += p[t >> 2], i += p[t << 4 & 63], i += "==") : 2 === o && (t = (e[r - 2] << 8) + e[r - 1], i += p[t >> 10], i += p[t >> 4 & 63], i += p[t << 2 & 63], i += "=");
            return s.push(i), s.join("")
        };
        for (var p = [], g = [], u = "undefined" != typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = 0, s = o.length; i < s; ++i) p[i] = o[i], g[o.charCodeAt(i)] = i;

        function l(e) {
            var t = e.length;
            if (0 < t % 4) throw new Error("Invalid string. Length must be a multiple of 4");
            return "=" === e[t - 2] ? 2 : "=" === e[t - 1] ? 1 : 0
        }

        function c(e, t, r) {
            for (var o, i, s = [], a = t; a < r; a += 3) o = (e[a] << 16) + (e[a + 1] << 8) + e[a + 2], s.push(p[(i = o) >> 18 & 63] + p[i >> 12 & 63] + p[i >> 6 & 63] + p[63 & i]);
            return s.join("")
        }

        g["-".charCodeAt(0)] = 62, g["_".charCodeAt(0)] = 63
    }, {}], 2: [function (t, e, k) {
        (function (e) {
            "use strict";
            var o = t("base64-js"), s = t("ieee754"), a = t("isarray");

            function r() {
                return l.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
            }

            function n(e, t) {
                if (r() < t) throw new RangeError("Invalid typed array length");
                return l.TYPED_ARRAY_SUPPORT ? (e = new Uint8Array(t)).__proto__ = l.prototype : (null === e && (e = new l(t)), e.length = t), e
            }

            function l(e, t, r) {
                if (!(l.TYPED_ARRAY_SUPPORT || this instanceof l)) return new l(e, t, r);
                if ("number" == typeof e) {
                    if ("string" == typeof t) throw new Error("If encoding is specified then the first argument must be a string");
                    return g(this, e)
                }
                return i(this, e, t, r)
            }

            function i(e, t, r, o) {
                if ("number" == typeof t) throw new TypeError('"value" argument must not be a number');
                return "undefined" != typeof ArrayBuffer && t instanceof ArrayBuffer ? function (e, t, r, o) {
                    if (t.byteLength, r < 0 || t.byteLength < r) throw new RangeError("'offset' is out of bounds");
                    if (t.byteLength < r + (o || 0)) throw new RangeError("'length' is out of bounds");
                    t = void 0 === r && void 0 === o ? new Uint8Array(t) : void 0 === o ? new Uint8Array(t, r) : new Uint8Array(t, r, o);
                    l.TYPED_ARRAY_SUPPORT ? (e = t).__proto__ = l.prototype : e = u(e, t);
                    return e
                }(e, t, r, o) : "string" == typeof t ? function (e, t, r) {
                    "string" == typeof r && "" !== r || (r = "utf8");
                    if (!l.isEncoding(r)) throw new TypeError('"encoding" must be a valid string encoding');
                    var o = 0 | m(t, r), i = (e = n(e, o)).write(t, r);
                    i !== o && (e = e.slice(0, i));
                    return e
                }(e, t, r) : function (e, t) {
                    if (l.isBuffer(t)) {
                        var r = 0 | c(t.length);
                        return 0 === (e = n(e, r)).length || t.copy(e, 0, 0, r), e
                    }
                    if (t) {
                        if ("undefined" != typeof ArrayBuffer && t.buffer instanceof ArrayBuffer || "length" in t) return "number" != typeof t.length || (o = t.length) != o ? n(e, 0) : u(e, t);
                        if ("Buffer" === t.type && a(t.data)) return u(e, t.data)
                    }
                    var o;
                    throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                }(e, t)
            }

            function p(e) {
                if ("number" != typeof e) throw new TypeError('"size" argument must be a number');
                if (e < 0) throw new RangeError('"size" argument must not be negative')
            }

            function g(e, t) {
                if (p(t), e = n(e, t < 0 ? 0 : 0 | c(t)), !l.TYPED_ARRAY_SUPPORT) for (var r = 0; r < t; ++r) e[r] = 0;
                return e
            }

            function u(e, t) {
                var r = t.length < 0 ? 0 : 0 | c(t.length);
                e = n(e, r);
                for (var o = 0; o < r; o += 1) e[o] = 255 & t[o];
                return e
            }

            function c(e) {
                if (e >= r()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + r().toString(16) + " bytes");
                return 0 | e
            }

            function m(e, t) {
                if (l.isBuffer(e)) return e.length;
                if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(e) || e instanceof ArrayBuffer)) return e.byteLength;
                "string" != typeof e && (e = "" + e);
                var r = e.length;
                if (0 === r) return 0;
                for (var o = !1; ;) switch (t) {
                    case"ascii":
                    case"latin1":
                    case"binary":
                        return r;
                    case"utf8":
                    case"utf-8":
                    case void 0:
                        return W(e).length;
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return 2 * r;
                    case"hex":
                        return r >>> 1;
                    case"base64":
                        return P(e).length;
                    default:
                        if (o) return W(e).length;
                        t = ("" + t).toLowerCase(), o = !0
                }
            }

            function f(e, t, r) {
                var o = e[t];
                e[t] = e[r], e[r] = o
            }

            function d(e, t, r, o, i) {
                if (0 === e.length) return -1;
                if ("string" == typeof r ? (o = r, r = 0) : 2147483647 < r ? r = 2147483647 : r < -2147483648 && (r = -2147483648), r = +r, isNaN(r) && (r = i ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
                    if (i) return -1;
                    r = e.length - 1
                } else if (r < 0) {
                    if (!i) return -1;
                    r = 0
                }
                if ("string" == typeof t && (t = l.from(t, o)), l.isBuffer(t)) return 0 === t.length ? -1 : h(e, t, r, o, i);
                if ("number" == typeof t) return t &= 255, l.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : h(e, [t], r, o, i);
                throw new TypeError("val must be string, number or Buffer")
            }

            function h(e, t, r, o, i) {
                var s, a = 1, n = e.length, p = t.length;
                if (void 0 !== o && ("ucs2" === (o = String(o).toLowerCase()) || "ucs-2" === o || "utf16le" === o || "utf-16le" === o)) {
                    if (e.length < 2 || t.length < 2) return -1;
                    n /= a = 2, p /= 2, r /= 2
                }

                function g(e, t) {
                    return 1 === a ? e[t] : e.readUInt16BE(t * a)
                }

                if (i) {
                    var u = -1;
                    for (s = r; s < n; s++) if (g(e, s) === g(t, -1 === u ? 0 : s - u)) {
                        if (-1 === u && (u = s), s - u + 1 === p) return u * a
                    } else -1 !== u && (s -= s - u), u = -1
                } else for (n < r + p && (r = n - p), s = r; 0 <= s; s--) {
                    for (var l = !0, c = 0; c < p; c++) if (g(e, s + c) !== g(t, c)) {
                        l = !1;
                        break
                    }
                    if (l) return s
                }
                return -1
            }

            function y(e, t, r, o) {
                r = Number(r) || 0;
                var i = e.length - r;
                o ? i < (o = Number(o)) && (o = i) : o = i;
                var s = t.length;
                if (s % 2 != 0) throw new TypeError("Invalid hex string");
                s / 2 < o && (o = s / 2);
                for (var a = 0; a < o; ++a) {
                    var n = parseInt(t.substr(2 * a, 2), 16);
                    if (isNaN(n)) return a;
                    e[r + a] = n
                }
                return a
            }

            function R(e, t, r, o) {
                return L(function (e) {
                    for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
                    return t
                }(t), e, r, o)
            }

            function M(e, t, r) {
                return 0 === t && r === e.length ? o.fromByteArray(e) : o.fromByteArray(e.slice(t, r))
            }

            function b(e, t, r) {
                r = Math.min(e.length, r);
                for (var o = [], i = t; i < r;) {
                    var s, a, n, p, g = e[i], u = null, l = 239 < g ? 4 : 223 < g ? 3 : 191 < g ? 2 : 1;
                    if (i + l <= r) switch (l) {
                        case 1:
                            g < 128 && (u = g);
                            break;
                        case 2:
                            128 == (192 & (s = e[i + 1])) && 127 < (p = (31 & g) << 6 | 63 & s) && (u = p);
                            break;
                        case 3:
                            s = e[i + 1], a = e[i + 2], 128 == (192 & s) && 128 == (192 & a) && 2047 < (p = (15 & g) << 12 | (63 & s) << 6 | 63 & a) && (p < 55296 || 57343 < p) && (u = p);
                            break;
                        case 4:
                            s = e[i + 1], a = e[i + 2], n = e[i + 3], 128 == (192 & s) && 128 == (192 & a) && 128 == (192 & n) && 65535 < (p = (15 & g) << 18 | (63 & s) << 12 | (63 & a) << 6 | 63 & n) && p < 1114112 && (u = p)
                    }
                    null === u ? (u = 65533, l = 1) : 65535 < u && (u -= 65536, o.push(u >>> 10 & 1023 | 55296), u = 56320 | 1023 & u), o.push(u), i += l
                }
                return function (e) {
                    var t = e.length;
                    if (t <= E) return String.fromCharCode.apply(String, e);
                    var r = "", o = 0;
                    for (; o < t;) r += String.fromCharCode.apply(String, e.slice(o, o += E));
                    return r
                }(o)
            }

            k.Buffer = l, k.SlowBuffer = function (e) {
                +e != e && (e = 0);
                return l.alloc(+e)
            }, k.INSPECT_MAX_BYTES = 50, l.TYPED_ARRAY_SUPPORT = void 0 !== e.TYPED_ARRAY_SUPPORT ? e.TYPED_ARRAY_SUPPORT : function () {
                try {
                    var e = new Uint8Array(1);
                    return e.__proto__ = {
                        __proto__: Uint8Array.prototype, foo: function () {
                            return 42
                        }
                    }, 42 === e.foo() && "function" == typeof e.subarray && 0 === e.subarray(1, 1).byteLength
                } catch (e) {
                    return !1
                }
            }(), k.kMaxLength = r(), l.poolSize = 8192, l._augment = function (e) {
                return e.__proto__ = l.prototype, e
            }, l.from = function (e, t, r) {
                return i(null, e, t, r)
            }, l.TYPED_ARRAY_SUPPORT && (l.prototype.__proto__ = Uint8Array.prototype, l.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && l[Symbol.species] === l && Object.defineProperty(l, Symbol.species, {
                value: null,
                configurable: !0
            })), l.alloc = function (e, t, r) {
                return o = null, s = t, a = r, p(i = e), i <= 0 ? n(o, i) : void 0 !== s ? "string" == typeof a ? n(o, i).fill(s, a) : n(o, i).fill(s) : n(o, i);
                var o, i, s, a
            }, l.allocUnsafe = function (e) {
                return g(null, e)
            }, l.allocUnsafeSlow = function (e) {
                return g(null, e)
            }, l.isBuffer = function (e) {
                return !(null == e || !e._isBuffer)
            }, l.compare = function (e, t) {
                if (!l.isBuffer(e) || !l.isBuffer(t)) throw new TypeError("Arguments must be Buffers");
                if (e === t) return 0;
                for (var r = e.length, o = t.length, i = 0, s = Math.min(r, o); i < s; ++i) if (e[i] !== t[i]) {
                    r = e[i], o = t[i];
                    break
                }
                return r < o ? -1 : o < r ? 1 : 0
            }, l.isEncoding = function (e) {
                switch (String(e).toLowerCase()) {
                    case"hex":
                    case"utf8":
                    case"utf-8":
                    case"ascii":
                    case"latin1":
                    case"binary":
                    case"base64":
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return !0;
                    default:
                        return !1
                }
            }, l.concat = function (e, t) {
                if (!a(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                if (0 === e.length) return l.alloc(0);
                var r;
                if (void 0 === t) for (r = t = 0; r < e.length; ++r) t += e[r].length;
                var o = l.allocUnsafe(t), i = 0;
                for (r = 0; r < e.length; ++r) {
                    var s = e[r];
                    if (!l.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                    s.copy(o, i), i += s.length
                }
                return o
            }, l.byteLength = m, l.prototype._isBuffer = !0, l.prototype.swap16 = function () {
                var e = this.length;
                if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                for (var t = 0; t < e; t += 2) f(this, t, t + 1);
                return this
            }, l.prototype.swap32 = function () {
                var e = this.length;
                if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                for (var t = 0; t < e; t += 4) f(this, t, t + 3), f(this, t + 1, t + 2);
                return this
            }, l.prototype.swap64 = function () {
                var e = this.length;
                if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                for (var t = 0; t < e; t += 8) f(this, t, t + 7), f(this, t + 1, t + 6), f(this, t + 2, t + 5), f(this, t + 3, t + 4);
                return this
            }, l.prototype.toString = function () {
                var e = 0 | this.length;
                return 0 === e ? "" : 0 === arguments.length ? b(this, 0, e) : function (e, t, r) {
                    var o = !1;
                    if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                    if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
                    if ((r >>>= 0) <= (t >>>= 0)) return "";
                    for (e || (e = "utf8"); ;) switch (e) {
                        case"hex":
                            return T(this, t, r);
                        case"utf8":
                        case"utf-8":
                            return b(this, t, r);
                        case"ascii":
                            return S(this, t, r);
                        case"latin1":
                        case"binary":
                            return _(this, t, r);
                        case"base64":
                            return M(this, t, r);
                        case"ucs2":
                        case"ucs-2":
                        case"utf16le":
                        case"utf-16le":
                            return v(this, t, r);
                        default:
                            if (o) throw new TypeError("Unknown encoding: " + e);
                            e = (e + "").toLowerCase(), o = !0
                    }
                }.apply(this, arguments)
            }, l.prototype.equals = function (e) {
                if (!l.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                return this === e || 0 === l.compare(this, e)
            }, l.prototype.inspect = function () {
                var e = "", t = k.INSPECT_MAX_BYTES;
                return 0 < this.length && (e = this.toString("hex", 0, t).match(/.{2}/g).join(" "), this.length > t && (e += " ... ")), "<Buffer " + e + ">"
            }, l.prototype.compare = function (e, t, r, o, i) {
                if (!l.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === o && (o = 0), void 0 === i && (i = this.length), t < 0 || r > e.length || o < 0 || i > this.length) throw new RangeError("out of range index");
                if (i <= o && r <= t) return 0;
                if (i <= o) return -1;
                if (r <= t) return 1;
                if (this === e) return 0;
                for (var s = (i >>>= 0) - (o >>>= 0), a = (r >>>= 0) - (t >>>= 0), n = Math.min(s, a), p = this.slice(o, i), g = e.slice(t, r), u = 0; u < n; ++u) if (p[u] !== g[u]) {
                    s = p[u], a = g[u];
                    break
                }
                return s < a ? -1 : a < s ? 1 : 0
            }, l.prototype.includes = function (e, t, r) {
                return -1 !== this.indexOf(e, t, r)
            }, l.prototype.indexOf = function (e, t, r) {
                return d(this, e, t, r, !0)
            }, l.prototype.lastIndexOf = function (e, t, r) {
                return d(this, e, t, r, !1)
            }, l.prototype.write = function (e, t, r, o) {
                if (void 0 === t) o = "utf8", r = this.length, t = 0; else if (void 0 === r && "string" == typeof t) o = t, r = this.length, t = 0; else {
                    if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                    t |= 0, isFinite(r) ? (r |= 0, void 0 === o && (o = "utf8")) : (o = r, r = void 0)
                }
                var i = this.length - t;
                if ((void 0 === r || i < r) && (r = i), 0 < e.length && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                o || (o = "utf8");
                for (var s, a, n, p, g, u, l, c, m, f = !1; ;) switch (o) {
                    case"hex":
                        return y(this, e, t, r);
                    case"utf8":
                    case"utf-8":
                        return c = t, m = r, L(W(e, (l = this).length - c), l, c, m);
                    case"ascii":
                        return R(this, e, t, r);
                    case"latin1":
                    case"binary":
                        return R(this, e, t, r);
                    case"base64":
                        return p = this, g = t, u = r, L(P(e), p, g, u);
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return a = t, n = r, L(function (e, t) {
                            for (var r, o, i, s = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) r = e.charCodeAt(a), o = r >> 8, i = r % 256, s.push(i), s.push(o);
                            return s
                        }(e, (s = this).length - a), s, a, n);
                    default:
                        if (f) throw new TypeError("Unknown encoding: " + o);
                        o = ("" + o).toLowerCase(), f = !0
                }
            }, l.prototype.toJSON = function () {
                return {type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0)}
            };
            var E = 4096;

            function S(e, t, r) {
                var o = "";
                r = Math.min(e.length, r);
                for (var i = t; i < r; ++i) o += String.fromCharCode(127 & e[i]);
                return o
            }

            function _(e, t, r) {
                var o = "";
                r = Math.min(e.length, r);
                for (var i = t; i < r; ++i) o += String.fromCharCode(e[i]);
                return o
            }

            function T(e, t, r) {
                var o = e.length;
                (!t || t < 0) && (t = 0), (!r || r < 0 || o < r) && (r = o);
                for (var i = "", s = t; s < r; ++s) i += N(e[s]);
                return i
            }

            function v(e, t, r) {
                for (var o = e.slice(t, r), i = "", s = 0; s < o.length; s += 2) i += String.fromCharCode(o[s] + 256 * o[s + 1]);
                return i
            }

            function I(e, t, r) {
                if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
                if (r < e + t) throw new RangeError("Trying to access beyond buffer length")
            }

            function B(e, t, r, o, i, s) {
                if (!l.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (i < t || t < s) throw new RangeError('"value" argument is out of bounds');
                if (r + o > e.length) throw new RangeError("Index out of range")
            }

            function F(e, t, r, o) {
                t < 0 && (t = 65535 + t + 1);
                for (var i = 0, s = Math.min(e.length - r, 2); i < s; ++i) e[r + i] = (t & 255 << 8 * (o ? i : 1 - i)) >>> 8 * (o ? i : 1 - i)
            }

            function A(e, t, r, o) {
                t < 0 && (t = 4294967295 + t + 1);
                for (var i = 0, s = Math.min(e.length - r, 4); i < s; ++i) e[r + i] = t >>> 8 * (o ? i : 3 - i) & 255
            }

            function O(e, t, r, o, i, s) {
                if (r + o > e.length) throw new RangeError("Index out of range");
                if (r < 0) throw new RangeError("Index out of range")
            }

            function w(e, t, r, o, i) {
                return i || O(e, 0, r, 4), s.write(e, t, r, o, 23, 4), r + 4
            }

            function D(e, t, r, o, i) {
                return i || O(e, 0, r, 8), s.write(e, t, r, o, 52, 8), r + 8
            }

            l.prototype.slice = function (e, t) {
                var r, o = this.length;
                if ((e = ~~e) < 0 ? (e += o) < 0 && (e = 0) : o < e && (e = o), (t = void 0 === t ? o : ~~t) < 0 ? (t += o) < 0 && (t = 0) : o < t && (t = o), t < e && (t = e), l.TYPED_ARRAY_SUPPORT) (r = this.subarray(e, t)).__proto__ = l.prototype; else {
                    var i = t - e;
                    r = new l(i, void 0);
                    for (var s = 0; s < i; ++s) r[s] = this[s + e]
                }
                return r
            }, l.prototype.readUIntLE = function (e, t, r) {
                e |= 0, t |= 0, r || I(e, t, this.length);
                for (var o = this[e], i = 1, s = 0; ++s < t && (i *= 256);) o += this[e + s] * i;
                return o
            }, l.prototype.readUIntBE = function (e, t, r) {
                e |= 0, t |= 0, r || I(e, t, this.length);
                for (var o = this[e + --t], i = 1; 0 < t && (i *= 256);) o += this[e + --t] * i;
                return o
            }, l.prototype.readUInt8 = function (e, t) {
                return t || I(e, 1, this.length), this[e]
            }, l.prototype.readUInt16LE = function (e, t) {
                return t || I(e, 2, this.length), this[e] | this[e + 1] << 8
            }, l.prototype.readUInt16BE = function (e, t) {
                return t || I(e, 2, this.length), this[e] << 8 | this[e + 1]
            }, l.prototype.readUInt32LE = function (e, t) {
                return t || I(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
            }, l.prototype.readUInt32BE = function (e, t) {
                return t || I(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
            }, l.prototype.readIntLE = function (e, t, r) {
                e |= 0, t |= 0, r || I(e, t, this.length);
                for (var o = this[e], i = 1, s = 0; ++s < t && (i *= 256);) o += this[e + s] * i;
                return (i *= 128) <= o && (o -= Math.pow(2, 8 * t)), o
            }, l.prototype.readIntBE = function (e, t, r) {
                e |= 0, t |= 0, r || I(e, t, this.length);
                for (var o = t, i = 1, s = this[e + --o]; 0 < o && (i *= 256);) s += this[e + --o] * i;
                return (i *= 128) <= s && (s -= Math.pow(2, 8 * t)), s
            }, l.prototype.readInt8 = function (e, t) {
                return t || I(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
            }, l.prototype.readInt16LE = function (e, t) {
                t || I(e, 2, this.length);
                var r = this[e] | this[e + 1] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, l.prototype.readInt16BE = function (e, t) {
                t || I(e, 2, this.length);
                var r = this[e + 1] | this[e] << 8;
                return 32768 & r ? 4294901760 | r : r
            }, l.prototype.readInt32LE = function (e, t) {
                return t || I(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
            }, l.prototype.readInt32BE = function (e, t) {
                return t || I(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
            }, l.prototype.readFloatLE = function (e, t) {
                return t || I(e, 4, this.length), s.read(this, e, !0, 23, 4)
            }, l.prototype.readFloatBE = function (e, t) {
                return t || I(e, 4, this.length), s.read(this, e, !1, 23, 4)
            }, l.prototype.readDoubleLE = function (e, t) {
                return t || I(e, 8, this.length), s.read(this, e, !0, 52, 8)
            }, l.prototype.readDoubleBE = function (e, t) {
                return t || I(e, 8, this.length), s.read(this, e, !1, 52, 8)
            }, l.prototype.writeUIntLE = function (e, t, r, o) {
                (e = +e, t |= 0, r |= 0, o) || B(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                var i = 1, s = 0;
                for (this[t] = 255 & e; ++s < r && (i *= 256);) this[t + s] = e / i & 255;
                return t + r
            }, l.prototype.writeUIntBE = function (e, t, r, o) {
                (e = +e, t |= 0, r |= 0, o) || B(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                var i = r - 1, s = 1;
                for (this[t + i] = 255 & e; 0 <= --i && (s *= 256);) this[t + i] = e / s & 255;
                return t + r
            }, l.prototype.writeUInt8 = function (e, t, r) {
                return e = +e, t |= 0, r || B(this, e, t, 1, 255, 0), l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), this[t] = 255 & e, t + 1
            }, l.prototype.writeUInt16LE = function (e, t, r) {
                return e = +e, t |= 0, r || B(this, e, t, 2, 65535, 0), l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : F(this, e, t, !0), t + 2
            }, l.prototype.writeUInt16BE = function (e, t, r) {
                return e = +e, t |= 0, r || B(this, e, t, 2, 65535, 0), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : F(this, e, t, !1), t + 2
            }, l.prototype.writeUInt32LE = function (e, t, r) {
                return e = +e, t |= 0, r || B(this, e, t, 4, 4294967295, 0), l.TYPED_ARRAY_SUPPORT ? (this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e) : A(this, e, t, !0), t + 4
            }, l.prototype.writeUInt32BE = function (e, t, r) {
                return e = +e, t |= 0, r || B(this, e, t, 4, 4294967295, 0), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : A(this, e, t, !1), t + 4
            }, l.prototype.writeIntLE = function (e, t, r, o) {
                if (e = +e, t |= 0, !o) {
                    var i = Math.pow(2, 8 * r - 1);
                    B(this, e, t, r, i - 1, -i)
                }
                var s = 0, a = 1, n = 0;
                for (this[t] = 255 & e; ++s < r && (a *= 256);) e < 0 && 0 === n && 0 !== this[t + s - 1] && (n = 1), this[t + s] = (e / a >> 0) - n & 255;
                return t + r
            }, l.prototype.writeIntBE = function (e, t, r, o) {
                if (e = +e, t |= 0, !o) {
                    var i = Math.pow(2, 8 * r - 1);
                    B(this, e, t, r, i - 1, -i)
                }
                var s = r - 1, a = 1, n = 0;
                for (this[t + s] = 255 & e; 0 <= --s && (a *= 256);) e < 0 && 0 === n && 0 !== this[t + s + 1] && (n = 1), this[t + s] = (e / a >> 0) - n & 255;
                return t + r
            }, l.prototype.writeInt8 = function (e, t, r) {
                return e = +e, t |= 0, r || B(this, e, t, 1, 127, -128), l.TYPED_ARRAY_SUPPORT || (e = Math.floor(e)), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
            }, l.prototype.writeInt16LE = function (e, t, r) {
                return e = +e, t |= 0, r || B(this, e, t, 2, 32767, -32768), l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8) : F(this, e, t, !0), t + 2
            }, l.prototype.writeInt16BE = function (e, t, r) {
                return e = +e, t |= 0, r || B(this, e, t, 2, 32767, -32768), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 8, this[t + 1] = 255 & e) : F(this, e, t, !1), t + 2
            }, l.prototype.writeInt32LE = function (e, t, r) {
                return e = +e, t |= 0, r || B(this, e, t, 4, 2147483647, -2147483648), l.TYPED_ARRAY_SUPPORT ? (this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24) : A(this, e, t, !0), t + 4
            }, l.prototype.writeInt32BE = function (e, t, r) {
                return e = +e, t |= 0, r || B(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), l.TYPED_ARRAY_SUPPORT ? (this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e) : A(this, e, t, !1), t + 4
            }, l.prototype.writeFloatLE = function (e, t, r) {
                return w(this, e, t, !0, r)
            }, l.prototype.writeFloatBE = function (e, t, r) {
                return w(this, e, t, !1, r)
            }, l.prototype.writeDoubleLE = function (e, t, r) {
                return D(this, e, t, !0, r)
            }, l.prototype.writeDoubleBE = function (e, t, r) {
                return D(this, e, t, !1, r)
            }, l.prototype.copy = function (e, t, r, o) {
                if (r || (r = 0), o || 0 === o || (o = this.length), t >= e.length && (t = e.length), t || (t = 0), 0 < o && o < r && (o = r), o === r) return 0;
                if (0 === e.length || 0 === this.length) return 0;
                if (t < 0) throw new RangeError("targetStart out of bounds");
                if (r < 0 || r >= this.length) throw new RangeError("sourceStart out of bounds");
                if (o < 0) throw new RangeError("sourceEnd out of bounds");
                o > this.length && (o = this.length), e.length - t < o - r && (o = e.length - t + r);
                var i, s = o - r;
                if (this === e && r < t && t < o) for (i = s - 1; 0 <= i; --i) e[i + t] = this[i + r]; else if (s < 1e3 || !l.TYPED_ARRAY_SUPPORT) for (i = 0; i < s; ++i) e[i + t] = this[i + r]; else Uint8Array.prototype.set.call(e, this.subarray(r, r + s), t);
                return s
            }, l.prototype.fill = function (e, t, r, o) {
                if ("string" == typeof e) {
                    if ("string" == typeof t ? (o = t, t = 0, r = this.length) : "string" == typeof r && (o = r, r = this.length), 1 === e.length) {
                        var i = e.charCodeAt(0);
                        i < 256 && (e = i)
                    }
                    if (void 0 !== o && "string" != typeof o) throw new TypeError("encoding must be a string");
                    if ("string" == typeof o && !l.isEncoding(o)) throw new TypeError("Unknown encoding: " + o)
                } else "number" == typeof e && (e &= 255);
                if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
                if (r <= t) return this;
                var s;
                if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" == typeof e) for (s = t; s < r; ++s) this[s] = e; else {
                    var a = l.isBuffer(e) ? e : W(new l(e, o).toString()), n = a.length;
                    for (s = 0; s < r - t; ++s) this[s + t] = a[s % n]
                }
                return this
            };
            var C = /[^+\/0-9A-Za-z-_]/g;

            function N(e) {
                return e < 16 ? "0" + e.toString(16) : e.toString(16)
            }

            function W(e, t) {
                var r;
                t = t || 1 / 0;
                for (var o = e.length, i = null, s = [], a = 0; a < o; ++a) {
                    if (55295 < (r = e.charCodeAt(a)) && r < 57344) {
                        if (!i) {
                            if (56319 < r) {
                                -1 < (t -= 3) && s.push(239, 191, 189);
                                continue
                            }
                            if (a + 1 === o) {
                                -1 < (t -= 3) && s.push(239, 191, 189);
                                continue
                            }
                            i = r;
                            continue
                        }
                        if (r < 56320) {
                            -1 < (t -= 3) && s.push(239, 191, 189), i = r;
                            continue
                        }
                        r = 65536 + (i - 55296 << 10 | r - 56320)
                    } else i && -1 < (t -= 3) && s.push(239, 191, 189);
                    if (i = null, r < 128) {
                        if ((t -= 1) < 0) break;
                        s.push(r)
                    } else if (r < 2048) {
                        if ((t -= 2) < 0) break;
                        s.push(r >> 6 | 192, 63 & r | 128)
                    } else if (r < 65536) {
                        if ((t -= 3) < 0) break;
                        s.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                    } else {
                        if (!(r < 1114112)) throw new Error("Invalid code point");
                        if ((t -= 4) < 0) break;
                        s.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                    }
                }
                return s
            }

            function P(e) {
                return o.toByteArray(function (e) {
                    var t;
                    if ((e = (t = e, t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")).replace(C, "")).length < 2) return "";
                    for (; e.length % 4 != 0;) e += "=";
                    return e
                }(e))
            }

            function L(e, t, r, o) {
                for (var i = 0; i < o && !(i + r >= t.length || i >= e.length); ++i) t[i + r] = e[i];
                return i
            }
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {"base64-js": 1, ieee754: 5, isarray: 7}], 3: [function (e, t, r) {
        var o = {
            utf8: {
                stringToBytes: function (e) {
                    return o.bin.stringToBytes(unescape(encodeURIComponent(e)))
                }, bytesToString: function (e) {
                    return decodeURIComponent(escape(o.bin.bytesToString(e)))
                }
            }, bin: {
                stringToBytes: function (e) {
                    for (var t = [], r = 0; r < e.length; r++) t.push(255 & e.charCodeAt(r));
                    return t
                }, bytesToString: function (e) {
                    for (var t = [], r = 0; r < e.length; r++) t.push(String.fromCharCode(e[r]));
                    return t.join("")
                }
            }
        };
        t.exports = o
    }, {}], 4: [function (e, t, r) {
        var s, o;
        s = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", o = {
            rotl: function (e, t) {
                return e << t | e >>> 32 - t
            }, rotr: function (e, t) {
                return e << 32 - t | e >>> t
            }, endian: function (e) {
                if (e.constructor == Number) return 16711935 & o.rotl(e, 8) | 4278255360 & o.rotl(e, 24);
                for (var t = 0; t < e.length; t++) e[t] = o.endian(e[t]);
                return e
            }, randomBytes: function (e) {
                for (var t = []; 0 < e; e--) t.push(Math.floor(256 * Math.random()));
                return t
            }, bytesToWords: function (e) {
                for (var t = [], r = 0, o = 0; r < e.length; r++, o += 8) t[o >>> 5] |= e[r] << 24 - o % 32;
                return t
            }, wordsToBytes: function (e) {
                for (var t = [], r = 0; r < 32 * e.length; r += 8) t.push(e[r >>> 5] >>> 24 - r % 32 & 255);
                return t
            }, bytesToHex: function (e) {
                for (var t = [], r = 0; r < e.length; r++) t.push((e[r] >>> 4).toString(16)), t.push((15 & e[r]).toString(16));
                return t.join("")
            }, hexToBytes: function (e) {
                for (var t = [], r = 0; r < e.length; r += 2) t.push(parseInt(e.substr(r, 2), 16));
                return t
            }, bytesToBase64: function (e) {
                for (var t = [], r = 0; r < e.length; r += 3) for (var o = e[r] << 16 | e[r + 1] << 8 | e[r + 2], i = 0; i < 4; i++) 8 * r + 6 * i <= 8 * e.length ? t.push(s.charAt(o >>> 6 * (3 - i) & 63)) : t.push("=");
                return t.join("")
            }, base64ToBytes: function (e) {
                e = e.replace(/[^A-Z0-9+\/]/gi, "");
                for (var t = [], r = 0, o = 0; r < e.length; o = ++r % 4) 0 != o && t.push((s.indexOf(e.charAt(r - 1)) & Math.pow(2, -2 * o + 8) - 1) << 2 * o | s.indexOf(e.charAt(r)) >>> 6 - 2 * o);
                return t
            }
        }, t.exports = o
    }, {}], 5: [function (e, t, r) {
        r.read = function (e, t, r, o, i) {
            var s, a, n = 8 * i - o - 1, p = (1 << n) - 1, g = p >> 1, u = -7, l = r ? i - 1 : 0, c = r ? -1 : 1,
                m = e[t + l];
            for (l += c, s = m & (1 << -u) - 1, m >>= -u, u += n; 0 < u; s = 256 * s + e[t + l], l += c, u -= 8) ;
            for (a = s & (1 << -u) - 1, s >>= -u, u += o; 0 < u; a = 256 * a + e[t + l], l += c, u -= 8) ;
            if (0 === s) s = 1 - g; else {
                if (s === p) return a ? NaN : 1 / 0 * (m ? -1 : 1);
                a += Math.pow(2, o), s -= g
            }
            return (m ? -1 : 1) * a * Math.pow(2, s - o)
        }, r.write = function (e, t, r, o, i, s) {
            var a, n, p, g = 8 * s - i - 1, u = (1 << g) - 1, l = u >> 1,
                c = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, m = o ? 0 : s - 1, f = o ? 1 : -1,
                d = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (n = isNaN(t) ? 1 : 0, a = u) : (a = Math.floor(Math.log(t) / Math.LN2), t * (p = Math.pow(2, -a)) < 1 && (a--, p *= 2), 2 <= (t += 1 <= a + l ? c / p : c * Math.pow(2, 1 - l)) * p && (a++, p /= 2), u <= a + l ? (n = 0, a = u) : 1 <= a + l ? (n = (t * p - 1) * Math.pow(2, i), a += l) : (n = t * Math.pow(2, l - 1) * Math.pow(2, i), a = 0)); 8 <= i; e[r + m] = 255 & n, m += f, n /= 256, i -= 8) ;
            for (a = a << i | n, g += i; 0 < g; e[r + m] = 255 & a, m += f, a /= 256, g -= 8) ;
            e[r + m - f] |= 128 * d
        }
    }, {}], 6: [function (e, t, r) {
        function o(e) {
            return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
        }

        t.exports = function (e) {
            return null != e && (o(e) || "function" == typeof (t = e).readFloatLE && "function" == typeof t.slice && o(t.slice(0, 0)) || !!e._isBuffer);
            var t
        }
    }, {}], 7: [function (e, t, r) {
        var o = {}.toString;
        t.exports = Array.isArray || function (e) {
            return "[object Array]" == o.call(e)
        }
    }, {}], 8: [function (e, t, r) {
        var y, R, M, b, E;
        y = e("crypt"), R = e("charenc").utf8, M = e("is-buffer"), b = e("charenc").bin, (E = function (e, t) {
            e.constructor == String ? e = t && "binary" === t.encoding ? b.stringToBytes(e) : R.stringToBytes(e) : M(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || (e = e.toString());
            for (var r = y.bytesToWords(e), o = 8 * e.length, i = 1732584193, s = -271733879, a = -1732584194, n = 271733878, p = 0; p < r.length; p++) r[p] = 16711935 & (r[p] << 8 | r[p] >>> 24) | 4278255360 & (r[p] << 24 | r[p] >>> 8);
            r[o >>> 5] |= 128 << o % 32, r[14 + (o + 64 >>> 9 << 4)] = o;
            var g = E._ff, u = E._gg, l = E._hh, c = E._ii;
            for (p = 0; p < r.length; p += 16) {
                var m = i, f = s, d = a, h = n;
                s = c(s = c(s = c(s = c(s = l(s = l(s = l(s = l(s = u(s = u(s = u(s = u(s = g(s = g(s = g(s = g(s, a = g(a, n = g(n, i = g(i, s, a, n, r[p + 0], 7, -680876936), s, a, r[p + 1], 12, -389564586), i, s, r[p + 2], 17, 606105819), n, i, r[p + 3], 22, -1044525330), a = g(a, n = g(n, i = g(i, s, a, n, r[p + 4], 7, -176418897), s, a, r[p + 5], 12, 1200080426), i, s, r[p + 6], 17, -1473231341), n, i, r[p + 7], 22, -45705983), a = g(a, n = g(n, i = g(i, s, a, n, r[p + 8], 7, 1770035416), s, a, r[p + 9], 12, -1958414417), i, s, r[p + 10], 17, -42063), n, i, r[p + 11], 22, -1990404162), a = g(a, n = g(n, i = g(i, s, a, n, r[p + 12], 7, 1804603682), s, a, r[p + 13], 12, -40341101), i, s, r[p + 14], 17, -1502002290), n, i, r[p + 15], 22, 1236535329), a = u(a, n = u(n, i = u(i, s, a, n, r[p + 1], 5, -165796510), s, a, r[p + 6], 9, -1069501632), i, s, r[p + 11], 14, 643717713), n, i, r[p + 0], 20, -373897302), a = u(a, n = u(n, i = u(i, s, a, n, r[p + 5], 5, -701558691), s, a, r[p + 10], 9, 38016083), i, s, r[p + 15], 14, -660478335), n, i, r[p + 4], 20, -405537848), a = u(a, n = u(n, i = u(i, s, a, n, r[p + 9], 5, 568446438), s, a, r[p + 14], 9, -1019803690), i, s, r[p + 3], 14, -187363961), n, i, r[p + 8], 20, 1163531501), a = u(a, n = u(n, i = u(i, s, a, n, r[p + 13], 5, -1444681467), s, a, r[p + 2], 9, -51403784), i, s, r[p + 7], 14, 1735328473), n, i, r[p + 12], 20, -1926607734), a = l(a, n = l(n, i = l(i, s, a, n, r[p + 5], 4, -378558), s, a, r[p + 8], 11, -2022574463), i, s, r[p + 11], 16, 1839030562), n, i, r[p + 14], 23, -35309556), a = l(a, n = l(n, i = l(i, s, a, n, r[p + 1], 4, -1530992060), s, a, r[p + 4], 11, 1272893353), i, s, r[p + 7], 16, -155497632), n, i, r[p + 10], 23, -1094730640), a = l(a, n = l(n, i = l(i, s, a, n, r[p + 13], 4, 681279174), s, a, r[p + 0], 11, -358537222), i, s, r[p + 3], 16, -722521979), n, i, r[p + 6], 23, 76029189), a = l(a, n = l(n, i = l(i, s, a, n, r[p + 9], 4, -640364487), s, a, r[p + 12], 11, -421815835), i, s, r[p + 15], 16, 530742520), n, i, r[p + 2], 23, -995338651), a = c(a, n = c(n, i = c(i, s, a, n, r[p + 0], 6, -198630844), s, a, r[p + 7], 10, 1126891415), i, s, r[p + 14], 15, -1416354905), n, i, r[p + 5], 21, -57434055), a = c(a, n = c(n, i = c(i, s, a, n, r[p + 12], 6, 1700485571), s, a, r[p + 3], 10, -1894986606), i, s, r[p + 10], 15, -1051523), n, i, r[p + 1], 21, -2054922799), a = c(a, n = c(n, i = c(i, s, a, n, r[p + 8], 6, 1873313359), s, a, r[p + 15], 10, -30611744), i, s, r[p + 6], 15, -1560198380), n, i, r[p + 13], 21, 1309151649), a = c(a, n = c(n, i = c(i, s, a, n, r[p + 4], 6, -145523070), s, a, r[p + 11], 10, -1120210379), i, s, r[p + 2], 15, 718787259), n, i, r[p + 9], 21, -343485551), i = i + m >>> 0, s = s + f >>> 0, a = a + d >>> 0, n = n + h >>> 0
            }
            return y.endian([i, s, a, n])
        })._ff = function (e, t, r, o, i, s, a) {
            var n = e + (t & r | ~t & o) + (i >>> 0) + a;
            return (n << s | n >>> 32 - s) + t
        }, E._gg = function (e, t, r, o, i, s, a) {
            var n = e + (t & o | r & ~o) + (i >>> 0) + a;
            return (n << s | n >>> 32 - s) + t
        }, E._hh = function (e, t, r, o, i, s, a) {
            var n = e + (t ^ r ^ o) + (i >>> 0) + a;
            return (n << s | n >>> 32 - s) + t
        }, E._ii = function (e, t, r, o, i, s, a) {
            var n = e + (r ^ (t | ~o)) + (i >>> 0) + a;
            return (n << s | n >>> 32 - s) + t
        }, E._blocksize = 16, E._digestsize = 16, t.exports = function (e, t) {
            if (null == e) throw new Error("Illegal argument " + e);
            var r = y.wordsToBytes(E(e, t));
            return t && t.asBytes ? r : t && t.asString ? b.bytesToString(r) : y.bytesToHex(r)
        }
    }, {charenc: 3, crypt: 4, "is-buffer": 6}], 9: [function (e, u, l) {
        (function (g) {
            (function () {
                "use strict";
                var e = {function: !0, object: !0}, N = e[typeof window] && window || this, W = N, r = e[typeof l] && l,
                    t = e[typeof u] && u && !u.nodeType && u, o = r && t && "object" == typeof g && g;
                !o || o.global !== o && o.window !== o && o.self !== o || (N = o);
                var s = Math.pow(2, 53) - 1, P = /\bOpera/, L = this, i = Object.prototype, a = i.hasOwnProperty,
                    k = i.toString;

                function n(e) {
                    return (e = String(e)).charAt(0).toUpperCase() + e.slice(1)
                }

                function U(e) {
                    return e = H(e), /^(?:webOS|i(?:OS|P))/.test(e) ? e : n(e)
                }

                function j(e, t) {
                    for (var r in e) a.call(e, r) && t(e[r], r, e)
                }

                function G(e) {
                    return null == e ? n(e) : k.call(e).slice(8, -1)
                }

                function x(e, t) {
                    var r = null != e ? typeof e[t] : "number";
                    return !(/^(?:boolean|number|string|undefined)$/.test(r) || "object" == r && !e[t])
                }

                function z(e) {
                    return String(e).replace(/([ -])(?!$)/g, "$1?")
                }

                function V(r, o) {
                    var i = null;
                    return function (e, t) {
                        var r = -1, o = e ? e.length : 0;
                        if ("number" == typeof o && -1 < o && o <= s) for (; ++r < o;) t(e[r], r, e); else j(e, t)
                    }(r, function (e, t) {
                        i = o(i, e, t, r)
                    }), i
                }

                function H(e) {
                    return String(e).replace(/^ +| +$/g, "")
                }

                var p = function e(n) {
                    var t = N, r = n && "object" == typeof n && "String" != G(n);
                    r && (t = n, n = null);
                    var o = t.navigator || {}, i = o.userAgent || "";
                    n || (n = i);
                    var s, a, p = r || L == W,
                        g = r ? !!o.likeChrome : /\bChrome\b/.test(n) && !/internal|\n/i.test(k.toString()),
                        u = "Object", l = r ? u : "ScriptBridgingProxyObject", c = r ? u : "Environment",
                        m = r && t.java ? "JavaPackage" : G(t.java), f = r ? u : "RuntimeObject",
                        d = /\bJava/.test(m) && t.java, h = d && G(t.environment) == c, y = d ? "a" : "α",
                        R = d ? "b" : "β", M = t.document || {}, b = t.operamini || t.opera,
                        E = P.test(E = r && b ? b["[[Class]]"] : G(b)) ? E : b = null, S = n, _ = [], T = null,
                        v = n == i, I = v && b && "function" == typeof b.version && b.version(),
                        B = V([{label: "EdgeHTML", pattern: "Edge"}, "Trident", {
                            label: "WebKit",
                            pattern: "AppleWebKit"
                        }, "iCab", "Presto", "NetFront", "Tasman", "KHTML", "Gecko"], function (e, t) {
                            return e || RegExp("\\b" + (t.pattern || z(t)) + "\\b", "i").exec(n) && (t.label || t)
                        }),
                        F = V(["Adobe AIR", "Arora", "Avant Browser", "Breach", "Camino", "Electron", "Epiphany", "Fennec", "Flock", "Galeon", "GreenBrowser", "iCab", "Iceweasel", "K-Meleon", "Konqueror", "Lunascape", "Maxthon", {
                            label: "Microsoft Edge",
                            pattern: "Edge"
                        }, "Midori", "Nook Browser", "PaleMoon", "PhantomJS", "Raven", "Rekonq", "RockMelt", {
                            label: "Samsung Internet",
                            pattern: "SamsungBrowser"
                        }, "SeaMonkey", {
                            label: "Silk",
                            pattern: "(?:Cloud9|Silk-Accelerated)"
                        }, "Sleipnir", "SlimBrowser", {
                            label: "SRWare Iron",
                            pattern: "Iron"
                        }, "Sunrise", "Swiftfox", "Waterfox", "WebPositive", "Opera Mini", {
                            label: "Opera Mini",
                            pattern: "OPiOS"
                        }, "Opera", {label: "Opera", pattern: "OPR"}, "Chrome", {
                            label: "Chrome Mobile",
                            pattern: "(?:CriOS|CrMo)"
                        }, {label: "Firefox", pattern: "(?:Firefox|Minefield)"}, {
                            label: "Firefox for iOS",
                            pattern: "FxiOS"
                        }, {label: "IE", pattern: "IEMobile"}, {
                            label: "IE",
                            pattern: "MSIE"
                        }, "Safari"], function (e, t) {
                            return e || RegExp("\\b" + (t.pattern || z(t)) + "\\b", "i").exec(n) && (t.label || t)
                        }), A = D([{label: "BlackBerry", pattern: "BB10"}, "BlackBerry", {
                            label: "Galaxy S",
                            pattern: "GT-I9000"
                        }, {label: "Galaxy S2", pattern: "GT-I9100"}, {
                            label: "Galaxy S3",
                            pattern: "GT-I9300"
                        }, {label: "Galaxy S4", pattern: "GT-I9500"}, {
                            label: "Galaxy S5",
                            pattern: "SM-G900"
                        }, {label: "Galaxy S6", pattern: "SM-G920"}, {
                            label: "Galaxy S6 Edge",
                            pattern: "SM-G925"
                        }, {label: "Galaxy S7", pattern: "SM-G930"}, {
                            label: "Galaxy S7 Edge",
                            pattern: "SM-G935"
                        }, "Google TV", "Lumia", "iPad", "iPod", "iPhone", "Kindle", {
                            label: "Kindle Fire",
                            pattern: "(?:Cloud9|Silk-Accelerated)"
                        }, "Nexus", "Nook", "PlayBook", "PlayStation Vita", "PlayStation", "TouchPad", "Transformer", {
                            label: "Wii U",
                            pattern: "WiiU"
                        }, "Wii", "Xbox One", {label: "Xbox 360", pattern: "Xbox"}, "Xoom"]), O = V({
                            Apple: {iPad: 1, iPhone: 1, iPod: 1},
                            Archos: {},
                            Amazon: {Kindle: 1, "Kindle Fire": 1},
                            Asus: {Transformer: 1},
                            "Barnes & Noble": {Nook: 1},
                            BlackBerry: {PlayBook: 1},
                            Google: {"Google TV": 1, Nexus: 1},
                            HP: {TouchPad: 1},
                            HTC: {},
                            LG: {},
                            Microsoft: {Xbox: 1, "Xbox One": 1},
                            Motorola: {Xoom: 1},
                            Nintendo: {"Wii U": 1, Wii: 1},
                            Nokia: {Lumia: 1},
                            Samsung: {"Galaxy S": 1, "Galaxy S2": 1, "Galaxy S3": 1, "Galaxy S4": 1},
                            Sony: {PlayStation: 1, "PlayStation Vita": 1}
                        }, function (e, t, r) {
                            return e || (t[A] || t[/^[a-z]+(?: +[a-z]+\b)*/i.exec(A)] || RegExp("\\b" + z(r) + "(?:\\b|\\w*\\d)", "i").exec(n)) && r
                        }), w = V(["Windows Phone", "Android", "CentOS", {
                            label: "Chrome OS",
                            pattern: "CrOS"
                        }, "Debian", "Fedora", "FreeBSD", "Gentoo", "Haiku", "Kubuntu", "Linux Mint", "OpenBSD", "Red Hat", "SuSE", "Ubuntu", "Xubuntu", "Cygwin", "Symbian OS", "hpwOS", "webOS ", "webOS", "Tablet OS", "Tizen", "Linux", "Mac OS X", "Macintosh", "Mac", "Windows 98;", "Windows "], function (e, t) {
                            var r, o, i, s, a = t.pattern || z(t);
                            return !e && (e = RegExp("\\b" + a + "(?:/[\\d.]+|[ \\w.]*)", "i").exec(n)) && (r = e, o = a, i = t.label || t, s = {
                                "10.0": "10",
                                6.4: "10 Technical Preview",
                                6.3: "8.1",
                                6.2: "8",
                                6.1: "Server 2008 R2 / 7",
                                "6.0": "Server 2008 / Vista",
                                5.2: "Server 2003 / XP 64-bit",
                                5.1: "XP",
                                5.01: "2000 SP1",
                                "5.0": "2000",
                                "4.0": "NT",
                                "4.90": "ME"
                            }, o && i && /^Win/i.test(r) && !/^Windows Phone /i.test(r) && (s = s[/[\d.]+$/.exec(r)]) && (r = "Windows " + s), r = String(r), o && i && (r = r.replace(RegExp(o, "i"), i)), e = r = U(r.replace(/ ce$/i, " CE").replace(/\bhpw/i, "web").replace(/\bMacintosh\b/, "Mac OS").replace(/_PowerPC\b/i, " OS").replace(/\b(OS X) [^ \d]+/i, "$1").replace(/\bMac (OS X)\b/, "$1").replace(/\/(\d)/, " $1").replace(/_/g, ".").replace(/(?: BePC|[ .]*fc[ \d.]+)$/i, "").replace(/\bx86\.64\b/gi, "x86_64").replace(/\b(Windows Phone) OS\b/, "$1").replace(/\b(Chrome OS \w+) [\d.]+\b/, "$1").split(" on ")[0])), e
                        });

                    function D(e) {
                        return V(e, function (e, t) {
                            var r = t.pattern || z(t);
                            return !e && (e = RegExp("\\b" + r + " *\\d+[.\\w_]*", "i").exec(n) || RegExp("\\b" + r + " *\\w+-[\\w]*", "i").exec(n) || RegExp("\\b" + r + "(?:; *(?:[a-z]+[_-])?[a-z]+\\d+|[^ ();-]*)", "i").exec(n)) && ((e = String(t.label && !RegExp(r, "i").test(t.label) ? t.label : e).split("/"))[1] && !/[\d.]+/.test(e[0]) && (e[0] += " " + e[1]), t = t.label || t, e = U(e[0].replace(RegExp(r, "i"), t).replace(RegExp("; *(?:" + t + "[_-])?", "i"), " ").replace(RegExp("(" + t + ")[-_.]?(\\w)", "i"), "$1 $2"))), e
                        })
                    }

                    if (B && (B = [B]), O && !A && (A = D([O])), (s = /\bGoogle TV\b/.exec(A)) && (A = s[0]), /\bSimulator\b/i.test(n) && (A = (A ? A + " " : "") + "Simulator"), "Opera Mini" == F && /\bOPiOS\b/.test(n) && _.push("running in Turbo/Uncompressed mode"), "IE" == F && /\blike iPhone OS\b/.test(n) ? (O = (s = e(n.replace(/like iPhone OS/, ""))).manufacturer, A = s.product) : /^iP/.test(A) ? (F || (F = "Safari"), w = "iOS" + ((s = / OS ([\d_]+)/i.exec(n)) ? " " + s[1].replace(/_/g, ".") : "")) : "Konqueror" != F || /buntu/i.test(w) ? O && "Google" != O && (/Chrome/.test(F) && !/\bMobile Safari\b/i.test(n) || /\bVita\b/.test(A)) || /\bAndroid\b/.test(w) && /^Chrome/.test(F) && /\bVersion\//i.test(n) ? (F = "Android Browser", w = /\bAndroid\b/.test(w) ? w : "Android") : "Silk" == F ? (/\bMobi/i.test(n) || (w = "Android", _.unshift("desktop mode")), /Accelerated *= *true/i.test(n) && _.unshift("accelerated")) : "PaleMoon" == F && (s = /\bFirefox\/([\d.]+)\b/.exec(n)) ? _.push("identifying as Firefox " + s[1]) : "Firefox" == F && (s = /\b(Mobile|Tablet|TV)\b/i.exec(n)) ? (w || (w = "Firefox OS"), A || (A = s[1])) : !F || (s = !/\bMinefield\b/i.test(n) && /\b(?:Firefox|Safari)\b/.exec(F)) ? (F && !A && /[\/,]|^[^(]+?\)/.test(n.slice(n.indexOf(s + "/") + 8)) && (F = null), (s = A || O || w) && (A || O || /\b(?:Android|Symbian OS|Tablet OS|webOS)\b/.test(w)) && (F = /[a-z]+(?: Hat)?/i.exec(/\bAndroid\b/.test(w) ? w : s) + " Browser")) : "Electron" == F && (s = (/\bChrome\/([\d.]+)\b/.exec(n) || 0)[1]) && _.push("Chromium " + s) : w = "Kubuntu", I || (I = V(["(?:Cloud9|CriOS|CrMo|Edge|FxiOS|IEMobile|Iron|Opera ?Mini|OPiOS|OPR|Raven|SamsungBrowser|Silk(?!/[\\d.]+$))", "Version", z(F), "(?:Firefox|Minefield|NetFront)"], function (e, t) {
                        return e || (RegExp(t + "(?:-[\\d.]+/|(?: for [\\w-]+)?[ /-])([\\d.]+[^ ();/_-]*)", "i").exec(n) || 0)[1] || null
                    })), (s = ("iCab" == B && 3 < parseFloat(I) ? "WebKit" : /\bOpera\b/.test(F) && (/\bOPR\b/.test(n) ? "Blink" : "Presto")) || /\b(?:Midori|Nook|Safari)\b/i.test(n) && !/^(?:Trident|EdgeHTML)$/.test(B) && "WebKit" || !B && /\bMSIE\b/i.test(n) && ("Mac OS" == w ? "Tasman" : "Trident") || "WebKit" == B && /\bPlayStation\b(?! Vita\b)/i.test(F) && "NetFront") && (B = [s]), "IE" == F && (s = (/; *(?:XBLWP|ZuneWP)(\d+)/i.exec(n) || 0)[1]) ? (F += " Mobile", w = "Windows Phone " + (/\+$/.test(s) ? s : s + ".x"), _.unshift("desktop mode")) : /\bWPDesktop\b/i.test(n) ? (F = "IE Mobile", w = "Windows Phone 8.x", _.unshift("desktop mode"), I || (I = (/\brv:([\d.]+)/.exec(n) || 0)[1])) : "IE" != F && "Trident" == B && (s = /\brv:([\d.]+)/.exec(n)) && (F && _.push("identifying as " + F + (I ? " " + I : "")), F = "IE", I = s[1]), v) {
                        if (x(t, "global")) if (d && (S = (s = d.lang.System).getProperty("os.arch"), w = w || s.getProperty("os.name") + " " + s.getProperty("os.version")), p && x(t, "system") && (s = [t.system])[0]) {
                            w || (w = s[0].os || null);
                            try {
                                s[1] = t.require("ringo/engine").version, I = s[1].join("."), F = "RingoJS"
                            } catch (e) {
                                s[0].global.system == t.system && (F = "Narwhal")
                            }
                        } else "object" == typeof t.process && !t.process.browser && (s = t.process) ? "object" == typeof s.versions ? "string" == typeof s.versions.electron ? (_.push("Node " + s.versions.node), F = "Electron", I = s.versions.electron) : "string" == typeof s.versions.nw && (_.push("Chromium " + I, "Node " + s.versions.node), F = "NW.js", I = s.versions.nw) : (F = "Node.js", S = s.arch, w = s.platform, I = (I = /[\d.]+/.exec(s.version)) ? I[0] : "unknown") : h && (F = "Rhino"); else G(s = t.runtime) == l ? (F = "Adobe AIR", w = s.flash.system.Capabilities.os) : G(s = t.phantom) == f ? (F = "PhantomJS", I = (s = s.version || null) && s.major + "." + s.minor + "." + s.patch) : "number" == typeof M.documentMode && (s = /\bTrident\/(\d+)/i.exec(n)) ? (I = [I, M.documentMode], (s = +s[1] + 4) != I[1] && (_.push("IE " + I[1] + " mode"), B && (B[1] = ""), I[1] = s), I = "IE" == F ? String(I[1].toFixed(1)) : I[0]) : "number" == typeof M.documentMode && /^(?:Chrome|Firefox)\b/.test(F) && (_.push("masking as " + F + " " + I), F = "IE", I = "11.0", B = ["Trident"], w = "Windows");
                        w = w && U(w)
                    }
                    if (I && (s = /(?:[ab]|dp|pre|[ab]\d+pre)(?:\d+\+?)?$/i.exec(I) || /(?:alpha|beta)(?: ?\d)?/i.exec(n + ";" + (v && o.appMinorVersion)) || /\bMinefield\b/i.test(n) && "a") && (T = /b/i.test(s) ? "beta" : "alpha", I = I.replace(RegExp(s + "\\+?$"), "") + ("beta" == T ? R : y) + (/\d+\+?/.exec(s) || "")), "Fennec" == F || "Firefox" == F && /\b(?:Android|Firefox OS)\b/.test(w)) F = "Firefox Mobile"; else if ("Maxthon" == F && I) I = I.replace(/\.[\d.]+/, ".x"); else if (/\bXbox\b/i.test(A)) "Xbox 360" == A && (w = null), "Xbox 360" == A && /\bIEMobile\b/.test(n) && _.unshift("mobile mode"); else if (!/^(?:Chrome|IE|Opera)$/.test(F) && (!F || A || /Browser|Mobi/.test(F)) || "Windows CE" != w && !/Mobi/i.test(n)) if ("IE" == F && v) try {
                        null === t.external && _.unshift("platform preview")
                    } catch (e) {
                        _.unshift("embedded")
                    } else (/\bBlackBerry\b/.test(A) || /\bBB10\b/.test(n)) && (s = (RegExp(A.replace(/ +/g, " *") + "/([.\\d]+)", "i").exec(n) || 0)[1] || I) ? (w = ((s = [s, /BB10/.test(n)])[1] ? (A = null, O = "BlackBerry") : "Device Software") + " " + s[0], I = null) : this != j && "Wii" != A && (v && b || /Opera/.test(F) && /\b(?:MSIE|Firefox)\b/i.test(n) || "Firefox" == F && /\bOS X (?:\d+\.){2,}/.test(w) || "IE" == F && (w && !/^Win/.test(w) && 5.5 < I || /\bWindows XP\b/.test(w) && 8 < I || 8 == I && !/\bTrident\b/.test(n))) && !P.test(s = e.call(j, n.replace(P, "") + ";")) && s.name && (s = "ing as " + s.name + ((s = s.version) ? " " + s : ""), P.test(F) ? (/\bIE\b/.test(s) && "Mac OS" == w && (w = null), s = "identify" + s) : (s = "mask" + s, F = E ? U(E.replace(/([a-z])([A-Z])/g, "$1 $2")) : "Opera", /\bIE\b/.test(s) && (w = null), v || (I = null)), B = ["Presto"], _.push(s)); else F += " Mobile";
                    (s = (/\bAppleWebKit\/([\d.]+\+?)/i.exec(n) || 0)[1]) && (s = [parseFloat(s.replace(/\.(\d)$/, ".0$1")), s], "Safari" == F && "+" == s[1].slice(-1) ? (F = "WebKit Nightly", T = "alpha", I = s[1].slice(0, -1)) : I != s[1] && I != (s[2] = (/\bSafari\/([\d.]+\+?)/i.exec(n) || 0)[1]) || (I = null), s[1] = (/\bChrome\/([\d.]+)/i.exec(n) || 0)[1], 537.36 == s[0] && 537.36 == s[2] && 28 <= parseFloat(s[1]) && "WebKit" == B && (B = ["Blink"]), v && (g || s[1]) ? (B && (B[1] = "like Chrome"), s = s[1] || ((s = s[0]) < 530 ? 1 : s < 532 ? 2 : s < 532.05 ? 3 : s < 533 ? 4 : s < 534.03 ? 5 : s < 534.07 ? 6 : s < 534.1 ? 7 : s < 534.13 ? 8 : s < 534.16 ? 9 : s < 534.24 ? 10 : s < 534.3 ? 11 : s < 535.01 ? 12 : s < 535.02 ? "13+" : s < 535.07 ? 15 : s < 535.11 ? 16 : s < 535.19 ? 17 : s < 536.05 ? 18 : s < 536.1 ? 19 : s < 537.01 ? 20 : s < 537.11 ? "21+" : s < 537.13 ? 23 : s < 537.18 ? 24 : s < 537.24 ? 25 : s < 537.36 ? 26 : "Blink" != B ? "27" : "28")) : (B && (B[1] = "like Safari"), s = (s = s[0]) < 400 ? 1 : s < 500 ? 2 : s < 526 ? 3 : s < 533 ? 4 : s < 534 ? "4+" : s < 535 ? 5 : s < 537 ? 6 : s < 538 ? 7 : s < 601 ? 8 : "8"), B && (B[1] += " " + (s += "number" == typeof s ? ".x" : /[.+]/.test(s) ? "" : "+")), "Safari" == F && (!I || 45 < parseInt(I)) && (I = s)), "Opera" == F && (s = /\bzbov|zvav$/.exec(w)) ? (F += " ", _.unshift("desktop mode"), "zvav" == s ? (F += "Mini", I = null) : F += "Mobile", w = w.replace(RegExp(" *" + s + "$"), "")) : "Safari" == F && /\bChrome\b/.exec(B && B[1]) && (_.unshift("desktop mode"), F = "Chrome Mobile", I = null, /\bOS X\b/.test(w) ? (O = "Apple", w = "iOS 4.3+") : w = null), I && 0 == I.indexOf(s = /[\d.]+$/.exec(w)) && -1 < n.indexOf("/" + s + "-") && (w = H(w.replace(s, ""))), B && !/\b(?:Avant|Nook)\b/.test(F) && (/Browser|Lunascape|Maxthon/.test(F) || "Safari" != F && /^iOS/.test(w) && /\bSafari\b/.test(B[1]) || /^(?:Adobe|Arora|Breach|Midori|Opera|Phantom|Rekonq|Rock|Samsung Internet|Sleipnir|Web)/.test(F) && B[1]) && (s = B[B.length - 1]) && _.push(s), _.length && (_ = ["(" + _.join("; ") + ")"]), O && A && A.indexOf(O) < 0 && _.push("on " + O), A && _.push((/^on /.test(_[_.length - 1]) ? "" : "on ") + A), w && (s = / ([\d.+]+)$/.exec(w), a = s && "/" == w.charAt(w.length - s[0].length - 1), w = {
                        architecture: 32,
                        family: s && !a ? w.replace(s[0], "") : w,
                        version: s ? s[1] : null,
                        toString: function () {
                            var e = this.version;
                            return this.family + (e && !a ? " " + e : "") + (64 == this.architecture ? " 64-bit" : "")
                        }
                    }), (s = /\b(?:AMD|IA|Win|WOW|x86_|x)64\b/i.exec(S)) && !/\bi686\b/i.test(S) ? (w && (w.architecture = 64, w.family = w.family.replace(RegExp(" *" + s), "")), F && (/\bWOW64\b/i.test(n) || v && /\w(?:86|32)$/.test(o.cpuClass || o.platform) && !/\bWin64; x64\b/i.test(n)) && _.unshift("32-bit")) : w && /^OS X/.test(w.family) && "Chrome" == F && 39 <= parseFloat(I) && (w.architecture = 64), n || (n = null);
                    var C = {};
                    return C.description = n, C.layout = B && B[0], C.manufacturer = O, C.name = F, C.prerelease = T, C.product = A, C.ua = n, C.version = F && I, C.os = w || {
                        architecture: null,
                        family: null,
                        version: null,
                        toString: function () {
                            return "null"
                        }
                    }, C.parse = e, C.toString = function () {
                        return this.description || ""
                    }, C.version && _.unshift(I), C.name && _.unshift(F), w && F && (w != String(w).split(" ")[0] || w != F.split(" ")[0] && !A) && _.push(A ? "(" + w + ")" : "on " + w), _.length && (C.description = _.join(" ")), C
                }();
                "function" == typeof define && "object" == typeof define.amd && define.amd ? (N.platform = p, define(function () {
                    return p
                })) : r && t ? j(p, function (e, t) {
                    r[t] = e
                }) : N.platform = p
            }).call(this)
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {}], 10: [function (e, t, r) {
        var o, i, s = t.exports = {};

        function a() {
            throw new Error("setTimeout has not been defined")
        }

        function n() {
            throw new Error("clearTimeout has not been defined")
        }

        function p(t) {
            if (o === setTimeout) return setTimeout(t, 0);
            if ((o === a || !o) && setTimeout) return o = setTimeout, setTimeout(t, 0);
            try {
                return o(t, 0)
            } catch (e) {
                try {
                    return o.call(null, t, 0)
                } catch (e) {
                    return o.call(this, t, 0)
                }
            }
        }

        !function () {
            try {
                o = "function" == typeof setTimeout ? setTimeout : a
            } catch (e) {
                o = a
            }
            try {
                i = "function" == typeof clearTimeout ? clearTimeout : n
            } catch (e) {
                i = n
            }
        }();
        var g, u = [], l = !1, c = -1;

        function m() {
            l && g && (l = !1, g.length ? u = g.concat(u) : c = -1, u.length && f())
        }

        function f() {
            if (!l) {
                var e = p(m);
                l = !0;
                for (var t = u.length; t;) {
                    for (g = u, u = []; ++c < t;) g && g[c].run();
                    c = -1, t = u.length
                }
                g = null, l = !1, function (t) {
                    if (i === clearTimeout) return clearTimeout(t);
                    if ((i === n || !i) && clearTimeout) return i = clearTimeout, clearTimeout(t);
                    try {
                        i(t)
                    } catch (e) {
                        try {
                            return i.call(null, t)
                        } catch (e) {
                            return i.call(this, t)
                        }
                    }
                }(e)
            }
        }

        function d(e, t) {
            this.fun = e, this.array = t
        }

        function h() {
        }

        s.nextTick = function (e) {
            var t = new Array(arguments.length - 1);
            if (1 < arguments.length) for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
            u.push(new d(e, t)), 1 !== u.length || l || p(f)
        }, d.prototype.run = function () {
            this.fun.apply(null, this.array)
        }, s.title = "browser", s.browser = !0, s.env = {}, s.argv = [], s.version = "", s.versions = {}, s.on = h, s.addListener = h, s.once = h, s.off = h, s.removeListener = h, s.removeAllListeners = h, s.emit = h, s.prependListener = h, s.prependOnceListener = h, s.listeners = function (e) {
            return []
        }, s.binding = function (e) {
            throw new Error("process.binding is not supported")
        }, s.cwd = function () {
            return "/"
        }, s.chdir = function (e) {
            throw new Error("process.chdir is not supported")
        }, s.umask = function () {
            return 0
        }
    }, {}], 11: [function (t, r, e) {
        (function (R) {
            var M, b, o, e;
            M = t("crypt"), b = t("charenc").utf8, o = t("charenc").bin, (e = function (e, t) {
                var r = M.wordsToBytes(function (e) {
                    e.constructor == String ? e = b.stringToBytes(e) : void 0 !== R && "function" == typeof R.isBuffer && R.isBuffer(e) ? e = Array.prototype.slice.call(e, 0) : Array.isArray(e) || (e = e.toString());
                    var t = M.bytesToWords(e), r = 8 * e.length, o = [], i = 1732584193, s = -271733879,
                        a = -1732584194, n = 271733878, p = -1009589776;
                    t[r >> 5] |= 128 << 24 - r % 32, t[15 + (r + 64 >>> 9 << 4)] = r;
                    for (var g = 0; g < t.length; g += 16) {
                        for (var u = i, l = s, c = a, m = n, f = p, d = 0; d < 80; d++) {
                            if (d < 16) o[d] = t[g + d]; else {
                                var h = o[d - 3] ^ o[d - 8] ^ o[d - 14] ^ o[d - 16];
                                o[d] = h << 1 | h >>> 31
                            }
                            var y = (i << 5 | i >>> 27) + p + (o[d] >>> 0) + (d < 20 ? 1518500249 + (s & a | ~s & n) : d < 40 ? 1859775393 + (s ^ a ^ n) : d < 60 ? (s & a | s & n | a & n) - 1894007588 : (s ^ a ^ n) - 899497514);
                            p = n, n = a, a = s << 30 | s >>> 2, s = i, i = y
                        }
                        i += u, s += l, a += c, n += m, p += f
                    }
                    return [i, s, a, n, p]
                }(e));
                return t && t.asBytes ? r : t && t.asString ? o.bytesToString(r) : M.bytesToHex(r)
            })._blocksize = 16, e._digestsize = 20, r.exports = e
        }).call(this, t("buffer").Buffer)
    }, {buffer: 2, charenc: 3, crypt: 4}], 12: [function (e, t, r) {
        "use strict";
        var o = function (e) {
            e.extends(this)
        };
        o.prototype = {
            loginStart: function () {
                var e = this._generatePostData({category: "account", action: "start"});
                this._upload(e)
            }, loginSuccess: function (e) {
                if (e && e.userID) {
                    this.data.userID = e.userID, this._addLocalStorage("_UID_" + this.data.appID, this.data.userID);
                    var t = this._generatePostData({category: "account", action: "success"});
                    this._upload(t)
                } else console.log("userID 不能为空!")
            }, loginFailed: function () {
                var e = this._generatePostData({category: "account", action: "failure"});
                this._upload(e)
            }, logout: function () {
                var e = this._generatePostData({category: "account", action: "logout"});
                this._upload(e)
            }, setAccountType: function (e) {
                var t = this._generatePostData({category: "account", action: "setType", accountType: e});
                this._upload(t)
            }, setAge: function (e) {
                var t = this._generatePostData({category: "account", action: "setAge", age: e});
                this._upload(t)
            }, setGender: function (e) {
                if (0 == e || 1 == e || 2 == e) {
                    var t = this._generatePostData({category: "account", action: "setGender", gender: e});
                    this._upload(t)
                } else console.log("gender 为 int 类型：0 未知、1 男性、 2 女性")
            }, createRole: function (e) {
                var t = {};
                e.roleID && (t.roleID = e.roleID), e.userName && (t.userName = e.userName), e.race && (t.race = e.race), e.class && (t.class = e.class), e.gameServer && (t.gameServer = e.gameServer);
                var r = this._generatePostData({category: "createRole", role: t});
                this._upload(r)
            }, setLevel: function (e) {
                var t = this._generatePostData({category: "account", action: "setLevel", level: e});
                this._upload(t)
            }
        }, t.exports = o
    }, {}], 13: [function (e, u, l) {
        (function (p, g) {
            !function (e, t, r) {
                "use strict";
                var o = {function: !0, object: !0}, i = o[typeof window] && window || this, s = o[typeof l] && l,
                    a = o[typeof u] && u && !u.nodeType && u, n = s && a && "object" == typeof g && g;
                !n || n.global !== n && n.window !== n && n.self !== n || (i = n), "function" == typeof define && "object" == typeof define.amd && define.amd ? (p.env.NODE_ENV = "development", define(r)) : s && a && (u.exports = r()), i.MVS ? i.MVS[e] = r() : i.MVS = {}, i.MVS[e], MVS ? MVS[e] = r() : MVS = {}, MVS[e]
            }("CCAnalytics", window, function () {
                return window.CC_JSB ? e("./nativeCocosAnalytics") : e("./h5CocosAnalytics")
            })
        }).call(this, e("_process"), "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {})
    }, {"./h5CocosAnalytics": 16, "./nativeCocosAnalytics": 19, _process: 10}], 14: [function (t, r, e) {
        (function (o) {
            "use strict";
            var i = t("sha1"), e = {
                x64Add: function (e, t) {
                    e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
                    var r = [0, 0, 0, 0];
                    return r[3] += e[3] + t[3], r[2] += r[3] >>> 16, r[3] &= 65535, r[2] += e[2] + t[2], r[1] += r[2] >>> 16, r[2] &= 65535, r[1] += e[1] + t[1], r[0] += r[1] >>> 16, r[1] &= 65535, r[0] += e[0] + t[0], r[0] &= 65535, [r[0] << 16 | r[1], r[2] << 16 | r[3]]
                }, x64Multiply: function (e, t) {
                    e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
                    var r = [0, 0, 0, 0];
                    return r[3] += e[3] * t[3], r[2] += r[3] >>> 16, r[3] &= 65535, r[2] += e[2] * t[3], r[1] += r[2] >>> 16, r[2] &= 65535, r[2] += e[3] * t[2], r[1] += r[2] >>> 16, r[2] &= 65535, r[1] += e[1] * t[3], r[0] += r[1] >>> 16, r[1] &= 65535, r[1] += e[2] * t[2], r[0] += r[1] >>> 16, r[1] &= 65535, r[1] += e[3] * t[1], r[0] += r[1] >>> 16, r[1] &= 65535, r[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0], r[0] &= 65535, [r[0] << 16 | r[1], r[2] << 16 | r[3]]
                }, x64Rotl: function (e, t) {
                    return 32 === (t %= 64) ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32, [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
                }, x64LeftShift: function (e, t) {
                    return 0 === (t %= 64) ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
                }, x64Xor: function (e, t) {
                    return [e[0] ^ t[0], e[1] ^ t[1]]
                }, x64Fmix: function (e) {
                    return e = this.x64Xor(e, [0, e[0] >>> 1]), e = this.x64Multiply(e, [4283543511, 3981806797]), e = this.x64Xor(e, [0, e[0] >>> 1]), e = this.x64Multiply(e, [3301882366, 444984403]), e = this.x64Xor(e, [0, e[0] >>> 1])
                }, x64hash128: function (e, t) {
                    t = t || 0;
                    for (var r = (e = e || "0").length % 16, o = e.length - r, i = [0, t], s = [0, t], a = [0, 0], n = [0, 0], p = [2277735313, 289559509], g = [1291169091, 658871167], u = 0; u < o; u += 16) a = [255 & e.charCodeAt(u + 4) | (255 & e.charCodeAt(u + 5)) << 8 | (255 & e.charCodeAt(u + 6)) << 16 | (255 & e.charCodeAt(u + 7)) << 24, 255 & e.charCodeAt(u) | (255 & e.charCodeAt(u + 1)) << 8 | (255 & e.charCodeAt(u + 2)) << 16 | (255 & e.charCodeAt(u + 3)) << 24], n = [255 & e.charCodeAt(u + 12) | (255 & e.charCodeAt(u + 13)) << 8 | (255 & e.charCodeAt(u + 14)) << 16 | (255 & e.charCodeAt(u + 15)) << 24, 255 & e.charCodeAt(u + 8) | (255 & e.charCodeAt(u + 9)) << 8 | (255 & e.charCodeAt(u + 10)) << 16 | (255 & e.charCodeAt(u + 11)) << 24], a = this.x64Multiply(a, p), a = this.x64Rotl(a, 31), a = this.x64Multiply(a, g), i = this.x64Xor(i, a), i = this.x64Rotl(i, 27), i = this.x64Add(i, s), i = this.x64Add(this.x64Multiply(i, [0, 5]), [0, 1390208809]), n = this.x64Multiply(n, g), n = this.x64Rotl(n, 33), n = this.x64Multiply(n, p), s = this.x64Xor(s, n), s = this.x64Rotl(s, 31), s = this.x64Add(s, i), s = this.x64Add(this.x64Multiply(s, [0, 5]), [0, 944331445]);
                    switch (a = [0, 0], n = [0, 0], r) {
                        case 15:
                            n = this.x64Xor(n, this.x64LeftShift([0, e.charCodeAt(u + 14)], 48));
                        case 14:
                            n = this.x64Xor(n, this.x64LeftShift([0, e.charCodeAt(u + 13)], 40));
                        case 13:
                            n = this.x64Xor(n, this.x64LeftShift([0, e.charCodeAt(u + 12)], 32));
                        case 12:
                            n = this.x64Xor(n, this.x64LeftShift([0, e.charCodeAt(u + 11)], 24));
                        case 11:
                            n = this.x64Xor(n, this.x64LeftShift([0, e.charCodeAt(u + 10)], 16));
                        case 10:
                            n = this.x64Xor(n, this.x64LeftShift([0, e.charCodeAt(u + 9)], 8));
                        case 9:
                            n = this.x64Xor(n, [0, e.charCodeAt(u + 8)]), n = this.x64Multiply(n, g), n = this.x64Rotl(n, 33), n = this.x64Multiply(n, p), s = this.x64Xor(s, n);
                        case 8:
                            a = this.x64Xor(a, this.x64LeftShift([0, e.charCodeAt(u + 7)], 56));
                        case 7:
                            a = this.x64Xor(a, this.x64LeftShift([0, e.charCodeAt(u + 6)], 48));
                        case 6:
                            a = this.x64Xor(a, this.x64LeftShift([0, e.charCodeAt(u + 5)], 40));
                        case 5:
                            a = this.x64Xor(a, this.x64LeftShift([0, e.charCodeAt(u + 4)], 32));
                        case 4:
                            a = this.x64Xor(a, this.x64LeftShift([0, e.charCodeAt(u + 3)], 24));
                        case 3:
                            a = this.x64Xor(a, this.x64LeftShift([0, e.charCodeAt(u + 2)], 16));
                        case 2:
                            a = this.x64Xor(a, this.x64LeftShift([0, e.charCodeAt(u + 1)], 8));
                        case 1:
                            a = this.x64Xor(a, [0, e.charCodeAt(u)]), a = this.x64Multiply(a, p), a = this.x64Rotl(a, 31), a = this.x64Multiply(a, g), i = this.x64Xor(i, a)
                    }
                    return i = this.x64Xor(i, [0, e.length]), s = this.x64Xor(s, [0, e.length]), i = this.x64Add(i, s), s = this.x64Add(s, i), i = this.x64Fmix(i), s = this.x64Fmix(s), i = this.x64Add(i, s), s = this.x64Add(s, i), ("00000000" + (i[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (i[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (s[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (s[1] >>> 0).toString(16)).slice(-8)
                }, random32Str: function () {
                    var r, e = Date.now().toString(32).toUpperCase();
                    return r = Date.now(), (e || "") + "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (e) {
                        var t;
                        return t = (r + 16 * Math.random()) % 16 | 0, r = Math.floor(r / 16), "x" === e ? t.toString(16) : (7 & t | 8).toString(16)
                    }).replace(/-/g, "").toUpperCase()
                }, encryptPostData: function (e, t) {
                    var r = new o(e).toString("base64");
                    return i(r + t).substr(0, 32) + r
                }
            };
            r.exports = e
        }).call(this, t("buffer").Buffer)
    }, {buffer: 2, sha1: 11}], 15: [function (e, t, r) {
        "use strict";
        var o = function (e) {
            e.extends(this)
        };
        o.prototype = {
            onEvent: function (e) {
                if (e && e.eventName) {
                    var t = this._generatePostData({category: "event", action: "success", eventName: e.eventName});
                    this._upload(t)
                } else console.log("eventName 不能为空!")
            }, onEventStart: function (e) {
                if (e && e.eventName) {
                    var t = this._generatePostData({category: "event", action: "start", eventName: e.eventName});
                    this._upload(t)
                } else console.log("eventName 不能为空!")
            }, onEventEnd: function (e) {
                if (e && e.eventName) {
                    var t = this._generatePostData({category: "event", action: "end", eventName: e.eventName});
                    this._upload(t)
                } else console.log("eventName 不能为空!")
            }
        }, t.exports = o
    }, {}], 16: [function (m, f, e) {
        (function (t) {
            "use strict";
            var i = m("./encrypt"), r = m("platform"), o = m("md5"), s = m("./account"), a = m("./event"),
                n = m("./payment"), p = m("./levels"), g = m("./task"), u = m("./item"), l = m("./virtual"),
                c = m("./taskType"), e = {
                    data: {isInit: !1, msgPool: [], apiURL: "https://reportlog.cocos.com", versionCode: 2},
                    browserVersion: void 0,
                    isActive: !0,
                    isShowLog: !1,
                    init: function (e) {
                        e.appID ? (this.data.appID = e.appID, e.appSecret ? (this.data.appSecret = e.appSecret, e.channel && (this.data.channel = e.channel), e.version && (this.data.appVersion = e.version), e.build && (this.data.appBuild = e.build), this.data.resolution = this._getScreenResolution(), this.data.CCID = this._getCCID(), this.data.userID = this._getLocalStorage("_UID_" + this.data.appID), this.data.sessionID = o(this.data.CCID + ((new Date).getTime() + "")), this.CAAccount = new s(this), this.CAEvent = new a(this), this.CAPayment = new n(this), this.CALevels = new p(this), this.CATask = new g(this), this.CAItem = new u(this), this.CAVirtual = new l(this), this.CATaskType = new c(this), this._runInterval(), this._bindPageVisibilityEvent(), this.data.isInit = !0, this._sendInitEvent()) : console.log("appSecret 不能为空!")) : console.log("appID 不能为空!")
                    },
                    isInited: function () {
                        return this.data.isInit
                    },
                    onPause: function () {
                        this.isActive = !1, this.data.end = ((new Date).getTime() + "").substr(0, 10);
                        var e = this.data.end - this.data.start;
                        this.log("duration..." + e + "s");
                        var t = this._generatePostData({
                            category: "view",
                            action: "background",
                            start: this.data.start,
                            end: this.data.end
                        });
                        this._upload(t)
                    },
                    onResume: function () {
                        (this.isActive = !0, this.data.start = ((new Date).getTime() + "").substr(0, 10), this.data.end) && (3600 < this.data.start - this.data.end && (this.data.sessionID = o(this.data.CCID + ((new Date).getTime() + "")), this._sendInitEvent()))
                    },
                    enableDebug: function (e) {
                        this.isShowLog = e
                    },
                    _sendInitEvent: function () {
                        var e = this._generatePostData({
                            type: "game",
                            category: "init",
                            resolution: this.data.resolution,
                            osVersion: r.os.version,
                            language: this._getLanguage(),
                            manufacturer: r.manufacturer,
                            model: r.product,
                            appVersion: this.data.appVersion,
                            appBuild: this.data.appBuild,
                            browserVersion: this._getBrowserVersion()
                        });
                        this._upload(e)
                    },
                    _runInterval: function () {
                        var o = this;
                        setInterval(function () {
                            o.log("cocos analytics check and upload log...");
                            for (var e = o._getLocalStorage("_MSG_" + o.data.appID), t = JSON.parse(e) || o.data.msgPool; 0 !== t.length;) if (t.length <= 100) o._submit(t), t = [], o.data.msgPool = t, o._addLocalStorage("_MSG_" + o.data.appID, o._toJson(o.data.msgPool)); else {
                                var r = t.splice(0, 100);
                                o._submit(r), o.data.msgPool = t, o._addLocalStorage("_MSG_" + o.data.appID, o._toJson(o.data.msgPool))
                            }
                        }, 3e4), setInterval(function () {
                            if (o.isActive) {
                                o.log("send heartbeat event");
                                var e = o._generatePostData({category: "heartbeat"});
                                o._upload(e)
                            }
                        }, 6e4)
                    },
                    _bindPageVisibilityEvent: function () {
                        var e = "hidden";
                        e in document ? document.addEventListener("visibilitychange", r) : (e = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", r) : (e = "webkitHidden") in document ? document.addEventListener("webkitvisibilitychange", r) : (e = "msHidden") in document ? document.addEventListener("msvisibilitychange", r) : "onfocusin" in document ? document.onfocusin = document.onfocusout = r : window.onpageshow = window.onpagehide = window.onfocus = window.onblur = r;
                        var t = this;

                        function r() {
                            var e = document.visibilityState;
                            "visible" === e && t.onResume(), "hidden" === e && t.onPause()
                        }

                        void 0 !== document[e] && r()
                    },
                    _generatePostData: function (e) {
                        var t = this._generateBasePostData();
                        if (null == e) return t;
                        for (var r in e) null != e[r] && t[r] !== e[r] && (t[r] = e[r]);
                        return t
                    },
                    _generateBasePostData: function () {
                        var e = ((new Date).getTime() + "").substr(0, 10);
                        return {
                            versionCode: this.data.versionCode,
                            appID: this.data.appID,
                            channelID: this.data.channel,
                            platform: r.os.family,
                            engine: "h5",
                            tsClient: e,
                            CCID: this.data.CCID,
                            sessionID: this.data.sessionID,
                            userID: this.data.userID
                        }
                    },
                    _toJson: function (e) {
                        return JSON.stringify(e)
                    },
                    _fromJson: function (e) {
                        return JSON.parse(e)
                    },
                    _upload: function (e) {
                        if (this.data.isInit) {
                            var t = [e];
                            this._submit(t)
                        } else console.log("Please init first!")
                    },
                    log: function () {
                        if ("development" === t.env.NODE_ENV || !0 === this.isShowLog) for (var e in arguments) console.log(arguments[e])
                    },
                    _submit: function (t) {
                        var r;
                        r = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
                        var o = this;
                        r.onreadystatechange = function () {
                            if (4 == r.readyState) if (200 == r.status) {
                                var e = JSON.parse(r.responseText);
                                e && "0" === e.status ? o.log("resp success:", o._toJson(t), e) : o.log("resp error:", o._toJson(t), e)
                            } else o.log("Problem retrieving data:", o._toJson(t), r.status), o._msgPersist(t)
                        }, r.open("POST", this.data.apiURL, !0), r.setRequestHeader("Content-Type", "application/x-www-form-urlencoded;");
                        var e = i.encryptPostData(this._toJson(t), this.data.appSecret);
                        r.send(e)
                    },
                    _msgPersist: function (e) {
                        for (var t = 0; t < e.length; t++) this.data.msgPool.push(e[t]);
                        this._addLocalStorage("_MSG_" + this.data.appID, this._toJson(this.data.msgPool))
                    },
                    _getCCID: function () {
                        var e = i.x64hash128(), t = this._getLocalStorage(e);
                        return t || (t = o(i.random32Str()), this._addLocalStorage(e, t)), t
                    },
                    extends: function (e) {
                        e.data = this.data, e.log = this.log, e._toJson = this._toJson, e._upload = this._upload, e._submit = this._submit, e._msgPersist = this._msgPersist, e._generatePostData = this._generatePostData, e._generateBasePostData = this._generateBasePostData, e._addLocalStorage = this._addLocalStorage, e._delLocalStorage = this._delLocalStorage, e._getLocalStorage = this._getLocalStorage
                    },
                    _addLocalStorage: function (e, t) {
                        window.localStorage && ("sessionId" == e && window.sessionStorage ? sessionStorage.setItem("__CA_" + e, t) : localStorage.setItem("__CA_" + e, t))
                    },
                    _delLocalStorage: function (e) {
                        window.localStorage && ("sessionId" == e && window.sessionStorage ? sessionStorage.removeItem("__CA_" + e) : localStorage.removeItem("__CA_" + e))
                    },
                    _getLocalStorage: function (e) {
                        if (window.localStorage) return "sessionId" == e && window.sessionStorage ? sessionStorage.getItem("__CA_" + e) : localStorage.getItem("__CA_" + e)
                    },
                    _getScreenResolution: function () {
                        return screen.width + "*" + screen.height
                    },
                    _getBrowserVersion: function () {
                        if (!this.browserVersion) {
                            var e = navigator.userAgent.toLowerCase(),
                                t = /micromessenger|qqbrowser|sogou|qzone|liebao|ucbrowser|360 aphone|360browser|edge|baiduboxapp|bidubrowser|baidubrowser|maxthon|mxbrowser|trident|miuibrowser/i.exec(e);
                            t || (t = /chrome|safari|firefox|opr|oupeng|opera/i.exec(e));
                            var r = t ? t[0] : "unknown";
                            "micromessenger" === r ? r = "wechat" : "safari" === r && e.match(/android.*applewebkit/) ? r = "androidbrowser" : "trident" === r ? r = "ie" : "360 aphone" === r ? r = "360browser" : "mxbrowser" === r ? r = "maxthon" : "opr" === r ? r = "opera" : "bidubrowser" === r && (r = "baidubrowser");
                            var o = e.match(/(micromessenger|qq|mx|maxthon|edge|bidu|baidu|sogou)(mobile)?(browserType)?\/?([\d.]+)/i);
                            o || (o = e.match(/(msie |rv:|firefox|chrome|ucbrowser|oupeng|opera|opr|safari|miui)(mobile)?(browserType)?\/?([\d.]+)/i));
                            var i = o ? o[4] : "";
                            this.browserVersion = r, i && (this.browserVersion += "-" + i)
                        }
                        return this.browserVersion
                    },
                    _getLanguage: function () {
                        var e = navigator.language;
                        return e = (e = e || navigator.browserLanguage) ? e.split("-")[0] : "en"
                    }
                };
            f.exports = e
        }).call(this, m("_process"))
    }, {
        "./account": 12,
        "./encrypt": 14,
        "./event": 15,
        "./item": 17,
        "./levels": 18,
        "./payment": 20,
        "./task": 21,
        "./taskType": 22,
        "./virtual": 23,
        _process: 10,
        md5: 8,
        platform: 9
    }], 17: [function (e, t, r) {
        "use strict";
        var o = function (e) {
            e.extends(this)
        };
        o.prototype = {
            buy: function (e) {
                var t = {
                    itemID: e.itemID,
                    itemType: e.itemType,
                    itemCount: e.itemCount,
                    virtualCoin: e.virtualCoin,
                    virtualType: e.virtualType,
                    consumePoint: e.consumePoint
                }, r = this._generatePostData({category: "item", action: "buy", item: t});
                this._upload(r)
            }, get: function (e) {
                var t = {itemID: e.itemID, itemType: e.itemType, itemCount: e.itemCount, reason: e.reason},
                    r = this._generatePostData({category: "item", action: "get", item: t});
                this._upload(r)
            }, consume: function (e) {
                var t = {itemID: e.itemID, itemType: e.itemType, itemCount: e.itemCount, reason: e.reason},
                    r = this._generatePostData({category: "item", action: "consume", item: t});
                this._upload(r)
            }
        }, t.exports = o
    }, {}], 18: [function (e, t, r) {
        "use strict";
        var o = function (e) {
            e.extends(this)
        };
        o.prototype = {
            begin: function (e) {
                if (e && e.level) {
                    var t = this._generatePostData({category: "level", action: "start", level: e.level});
                    this._upload(t)
                } else console.log("level 不能为空!")
            }, complete: function (e) {
                if (e && e.level) {
                    var t = this._generatePostData({category: "level", action: "success", level: e.level});
                    this._upload(t)
                } else console.log("level 不能为空!")
            }, failed: function (e) {
                if (e && e.level) {
                    var t = this._generatePostData({
                        category: "level",
                        action: "failure",
                        level: e.level,
                        reason: e.reason
                    });
                    this._upload(t)
                } else console.log("level 不能为空!")
            }
        }, t.exports = o
    }, {}], 19: [function (e, t, r) {
        "use strict";
        var o = {
            init: function () {
            }, isInited: function () {
            }, onPause: function () {
            }, onResume: function () {
            }, CAAccount: {
                loginStart: function () {
                }, loginSuccess: function (e) {
                }, loginFailure: function () {
                }, logout: function (e) {
                }, setAccountType: function (e) {
                }, setAge: function (e) {
                }, setGender: function (e) {
                }, setGameServer: function (e) {
                }, createRole: function (e) {
                }
            }, CAEvent: {
                onEvent: function (e) {
                }, onEventStart: function (e) {
                }, onEventEnd: function (e) {
                }
            }, CAPayment: {
                onPayment: function (e) {
                }
            }, CALevels: {
                begin: function (e) {
                }, complete: function (e) {
                }, failed: function (e) {
                }
            }, CATask: {
                begin: function (e) {
                }, complete: function (e) {
                }, failed: function (e) {
                }
            }, CAItem: {
                buy: function (e) {
                }, get: function (e) {
                }, consume: function (e) {
                }
            }, CAVirtual: {
                setVirtualNum: function (e) {
                }, get: function (e) {
                }, consume: function (e) {
                }
            }, CATaskType: new (e("./taskType"))(this)
        };
        t.exports = o
    }, {"./taskType": 22}], 20: [function (e, t, r) {
        "use strict";
        var o = function (e) {
            e.extends(this)
        };
        o.prototype = {
            payBegin: function (e) {
                var t = this._generatePostData({
                    category: "paySDK",
                    action: "start",
                    value: e.amount,
                    orderID: e.orderID,
                    payType: e.payType,
                    iapID: e.iapID,
                    currencyType: e.currencyType
                });
                this._upload(t)
            }, paySuccess: function (e) {
                var t = this._generatePostData({
                    category: "paySDK",
                    action: "success",
                    value: e.amount,
                    orderID: e.orderID,
                    payType: e.payType,
                    iapID: e.iapID,
                    currencyType: e.currencyType
                });
                this._upload(t)
            }, payFailed: function (e) {
                var t = this._generatePostData({
                    category: "paySDK",
                    action: "failure",
                    value: e.amount,
                    orderID: e.orderID,
                    payType: e.payType,
                    iapID: e.iapID,
                    currencyType: e.currencyType
                });
                this._upload(t)
            }, payCanceled: function (e) {
                var t = this._generatePostData({
                    category: "paySDK",
                    action: "canceled",
                    value: e.amount,
                    orderID: e.orderID,
                    payType: e.payType,
                    iapID: e.iapID,
                    currencyType: e.currencyType
                });
                this._upload(t)
            }
        }, t.exports = o
    }, {}], 21: [function (e, t, r) {
        "use strict";
        var o = function (e) {
            e.extends(this)
        };
        o.prototype = {
            begin: function (e) {
                if (e && e.taskID) {
                    var t = this._generatePostData({
                        category: "task",
                        action: "start",
                        taskID: e.taskID,
                        taskType: e.type
                    });
                    this._upload(t)
                } else console.log("taskID 不能为空!")
            }, complete: function (e) {
                if (e && e.taskID) {
                    var t = this._generatePostData({category: "task", action: "success", taskID: e.taskID});
                    this._upload(t)
                } else console.log("taskID 不能为空!")
            }, failed: function (e) {
                if (e && e.taskID) {
                    var t = this._generatePostData({
                        category: "task",
                        action: "failure",
                        taskID: e.taskID,
                        reason: e.reason
                    });
                    this._upload(t)
                } else console.log("taskID 不能为空!")
            }
        }, t.exports = o
    }, {}], 22: [function (e, t, r) {
        "use strict";
        var o = function (e) {
        };
        o.prototype = {GuideLine: 1, MainLine: 2, BranchLine: 3, Daily: 4, Activity: 5, Other: 100}, t.exports = o
    }, {}], 23: [function (e, t, r) {
        "use strict";
        var o = function (e) {
            e.extends(this)
        };
        o.prototype = {
            setVirtualNum: function (e) {
                var t = {type: e.type, count: e.count},
                    r = this._generatePostData({category: "virtual", action: "set", virtual: t});
                this._upload(r)
            }, get: function (e) {
                var t = {type: e.type, count: e.count, reason: e.reason},
                    r = this._generatePostData({category: "virtual", action: "get", virtual: t});
                this._upload(r)
            }, consume: function (e) {
                var t = {type: e.type, count: e.count, reason: e.reason},
                    r = this._generatePostData({category: "virtual", action: "consume", virtual: t});
                this._upload(r)
            }
        }, t.exports = o
    }, {}]
}, {}, [13]), function (e) {
    var o, t, r, i, s = !1, a = (o = ["C"], (t = function () {
    }).prototype.isInvailed = function (e) {
        for (var t = function (e) {
            e.length;
            var t = e.split("#");
            return 2 !== t.length ? "" : t[1]
        }(e), r = 0; r < o.length; r++) if (t === o[r]) return s = !0;
        return console.error("[游戏账户与渠道不匹配，请使用cocos账号登录Matchvs官网创建游戏]：(https://www.matchvs.com/cocos)"), !1
    }, t);
    e.AppKeyCheck = a, i = "", (r = e).ccReport = new function () {
        this.init = function () {
            s && (r.CCAnalytics.init({
                appID: "673213760",
                appSecret: "fdfb6e64e71457866d7785414002c628",
                channel: "cocos_mvs",
                version: "1.0.0"
            }), r.CCAnalytics.onPause(!0), r.CCAnalytics.onResume(!0))
        }, this.login = function (e) {
            s && (i = e + "", r.CCAnalytics.CAAccount.loginStart())
        }, this.loginRsp = function (e) {
            200 == e ? r.CCAnalytics.CAAccount.loginSuccess({userID: i}) : r.CCAnalytics.CAAccount.loginFailed()
        }, this.logout = function () {
            r.CCAnalytics.CAAccount.logout({userID: i})
        }
    }
}(MVS || {}), function s(a, n, p) {
    function g(t, e) {
        if (!n[t]) {
            if (!a[t]) {
                var r = "function" == typeof _require && _require;
                if (!e && r) return r(t, !0);
                if (u) return u(t, !0);
                var o = new Error("Cannot find module '" + t + "'");
                throw o.code = "MODULE_NOT_FOUND", o
            }
            var i = n[t] = {exports: {}};
            a[t][0].call(i.exports, function (e) {
                return g(a[t][1][e] || e)
            }, i, i.exports, s, a, n, p)
        }
        return n[t].exports
    }

    for (var u = "function" == typeof _require && _require, e = 0; e < p.length; e++) g(p[e]);
    return g
}({
    1: [function (e, t, r) {
        "use strict";
        r.byteLength = function (e) {
            var t = m(e), r = t[0], o = t[1];
            return 3 * (r + o) / 4 - o
        }, r.toByteArray = function (e) {
            for (var t, r = m(e), o = r[0], i = r[1], s = new c((g = o, u = i, 3 * (g + u) / 4 - u)), a = 0, n = 0 < i ? o - 4 : o, p = 0; p < n; p += 4) t = l[e.charCodeAt(p)] << 18 | l[e.charCodeAt(p + 1)] << 12 | l[e.charCodeAt(p + 2)] << 6 | l[e.charCodeAt(p + 3)], s[a++] = t >> 16 & 255, s[a++] = t >> 8 & 255, s[a++] = 255 & t;
            var g, u;
            2 === i && (t = l[e.charCodeAt(p)] << 2 | l[e.charCodeAt(p + 1)] >> 4, s[a++] = 255 & t);
            1 === i && (t = l[e.charCodeAt(p)] << 10 | l[e.charCodeAt(p + 1)] << 4 | l[e.charCodeAt(p + 2)] >> 2, s[a++] = t >> 8 & 255, s[a++] = 255 & t);
            return s
        }, r.fromByteArray = function (e) {
            for (var t, r = e.length, o = r % 3, i = [], s = 0, a = r - o; s < a; s += 16383) i.push(p(e, s, a < s + 16383 ? a : s + 16383));
            1 === o ? (t = e[r - 1], i.push(n[t >> 2] + n[t << 4 & 63] + "==")) : 2 === o && (t = (e[r - 2] << 8) + e[r - 1], i.push(n[t >> 10] + n[t >> 4 & 63] + n[t << 2 & 63] + "="));
            return i.join("")
        };
        for (var n = [], l = [], c = "undefined" != typeof Uint8Array ? Uint8Array : Array, o = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", i = 0, s = o.length; i < s; ++i) n[i] = o[i], l[o.charCodeAt(i)] = i;

        function m(e) {
            var t = e.length;
            if (0 < t % 4) throw new Error("Invalid string. Length must be a multiple of 4");
            var r = e.indexOf("=");
            return -1 === r && (r = t), [r, r === t ? 0 : 4 - r % 4]
        }

        function p(e, t, r) {
            for (var o, i, s = [], a = t; a < r; a += 3) o = (e[a] << 16 & 16711680) + (e[a + 1] << 8 & 65280) + (255 & e[a + 2]), s.push(n[(i = o) >> 18 & 63] + n[i >> 12 & 63] + n[i >> 6 & 63] + n[63 & i]);
            return s.join("")
        }

        l["-".charCodeAt(0)] = 62, l["_".charCodeAt(0)] = 63
    }, {}], 2: [function (e, t, r) {
        "use strict";
        var o = e("base64-js"), s = e("ieee754");
        r.Buffer = l, r.SlowBuffer = function (e) {
            +e != e && (e = 0);
            return l.alloc(+e)
        }, r.INSPECT_MAX_BYTES = 50;
        var i = 2147483647;

        function a(e) {
            if (i < e) throw new RangeError('The value "' + e + '" is invalid for option "size"');
            var t = new Uint8Array(e);
            return t.__proto__ = l.prototype, t
        }

        function l(e, t, r) {
            if ("number" == typeof e) {
                if ("string" == typeof t) throw new TypeError('The "string" argument must be of type string. Received type number');
                return g(e)
            }
            return n(e, t, r)
        }

        function n(e, t, r) {
            if ("string" == typeof e) return function (e, t) {
                "string" == typeof t && "" !== t || (t = "utf8");
                if (!l.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
                var r = 0 | m(e, t), o = a(r), i = o.write(e, t);
                i !== r && (o = o.slice(0, i));
                return o
            }(e, t);
            if (ArrayBuffer.isView(e)) return u(e);
            if (null == e) throw TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
            if (P(e, ArrayBuffer) || e && P(e.buffer, ArrayBuffer)) return function (e, t, r) {
                if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
                if (e.byteLength < t + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
                var o;
                o = void 0 === t && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, t) : new Uint8Array(e, t, r);
                return o.__proto__ = l.prototype, o
            }(e, t, r);
            if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
            var o = e.valueOf && e.valueOf();
            if (null != o && o !== e) return l.from(o, t, r);
            var i = function (e) {
                if (l.isBuffer(e)) {
                    var t = 0 | c(e.length), r = a(t);
                    return 0 === r.length || e.copy(r, 0, 0, t), r
                }
                if (void 0 !== e.length) return "number" != typeof e.length || L(e.length) ? a(0) : u(e);
                if ("Buffer" === e.type && Array.isArray(e.data)) return u(e.data)
            }(e);
            if (i) return i;
            if ("undefined" != typeof Symbol && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return l.from(e[Symbol.toPrimitive]("string"), t, r);
            throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
        }

        function p(e) {
            if ("number" != typeof e) throw new TypeError('"size" argument must be of type number');
            if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"')
        }

        function g(e) {
            return p(e), a(e < 0 ? 0 : 0 | c(e))
        }

        function u(e) {
            for (var t = e.length < 0 ? 0 : 0 | c(e.length), r = a(t), o = 0; o < t; o += 1) r[o] = 255 & e[o];
            return r
        }

        function c(e) {
            if (i <= e) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + i.toString(16) + " bytes");
            return 0 | e
        }

        function m(e, t) {
            if (l.isBuffer(e)) return e.length;
            if (ArrayBuffer.isView(e) || P(e, ArrayBuffer)) return e.byteLength;
            if ("string" != typeof e) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
            var r = e.length, o = 2 < arguments.length && !0 === arguments[2];
            if (!o && 0 === r) return 0;
            for (var i = !1; ;) switch (t) {
                case"ascii":
                case"latin1":
                case"binary":
                    return r;
                case"utf8":
                case"utf-8":
                    return C(e).length;
                case"ucs2":
                case"ucs-2":
                case"utf16le":
                case"utf-16le":
                    return 2 * r;
                case"hex":
                    return r >>> 1;
                case"base64":
                    return N(e).length;
                default:
                    if (i) return o ? -1 : C(e).length;
                    t = ("" + t).toLowerCase(), i = !0
            }
        }

        function f(e, t, r) {
            var o = e[t];
            e[t] = e[r], e[r] = o
        }

        function d(e, t, r, o, i) {
            if (0 === e.length) return -1;
            if ("string" == typeof r ? (o = r, r = 0) : 2147483647 < r ? r = 2147483647 : r < -2147483648 && (r = -2147483648), L(r = +r) && (r = i ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
                if (i) return -1;
                r = e.length - 1
            } else if (r < 0) {
                if (!i) return -1;
                r = 0
            }
            if ("string" == typeof t && (t = l.from(t, o)), l.isBuffer(t)) return 0 === t.length ? -1 : h(e, t, r, o, i);
            if ("number" == typeof t) return t &= 255, "function" == typeof Uint8Array.prototype.indexOf ? i ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : h(e, [t], r, o, i);
            throw new TypeError("val must be string, number or Buffer")
        }

        function h(e, t, r, o, i) {
            var s, a = 1, n = e.length, p = t.length;
            if (void 0 !== o && ("ucs2" === (o = String(o).toLowerCase()) || "ucs-2" === o || "utf16le" === o || "utf-16le" === o)) {
                if (e.length < 2 || t.length < 2) return -1;
                n /= a = 2, p /= 2, r /= 2
            }

            function g(e, t) {
                return 1 === a ? e[t] : e.readUInt16BE(t * a)
            }

            if (i) {
                var u = -1;
                for (s = r; s < n; s++) if (g(e, s) === g(t, -1 === u ? 0 : s - u)) {
                    if (-1 === u && (u = s), s - u + 1 === p) return u * a
                } else -1 !== u && (s -= s - u), u = -1
            } else for (n < r + p && (r = n - p), s = r; 0 <= s; s--) {
                for (var l = !0, c = 0; c < p; c++) if (g(e, s + c) !== g(t, c)) {
                    l = !1;
                    break
                }
                if (l) return s
            }
            return -1
        }

        function y(e, t, r, o) {
            r = Number(r) || 0;
            var i = e.length - r;
            o ? i < (o = Number(o)) && (o = i) : o = i;
            var s = t.length;
            s / 2 < o && (o = s / 2);
            for (var a = 0; a < o; ++a) {
                var n = parseInt(t.substr(2 * a, 2), 16);
                if (L(n)) return a;
                e[r + a] = n
            }
            return a
        }

        function R(e, t, r, o) {
            return W(function (e) {
                for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
                return t
            }(t), e, r, o)
        }

        function M(e, t, r) {
            return 0 === t && r === e.length ? o.fromByteArray(e) : o.fromByteArray(e.slice(t, r))
        }

        function b(e, t, r) {
            r = Math.min(e.length, r);
            for (var o = [], i = t; i < r;) {
                var s, a, n, p, g = e[i], u = null, l = 239 < g ? 4 : 223 < g ? 3 : 191 < g ? 2 : 1;
                if (i + l <= r) switch (l) {
                    case 1:
                        g < 128 && (u = g);
                        break;
                    case 2:
                        128 == (192 & (s = e[i + 1])) && 127 < (p = (31 & g) << 6 | 63 & s) && (u = p);
                        break;
                    case 3:
                        s = e[i + 1], a = e[i + 2], 128 == (192 & s) && 128 == (192 & a) && 2047 < (p = (15 & g) << 12 | (63 & s) << 6 | 63 & a) && (p < 55296 || 57343 < p) && (u = p);
                        break;
                    case 4:
                        s = e[i + 1], a = e[i + 2], n = e[i + 3], 128 == (192 & s) && 128 == (192 & a) && 128 == (192 & n) && 65535 < (p = (15 & g) << 18 | (63 & s) << 12 | (63 & a) << 6 | 63 & n) && p < 1114112 && (u = p)
                }
                null === u ? (u = 65533, l = 1) : 65535 < u && (u -= 65536, o.push(u >>> 10 & 1023 | 55296), u = 56320 | 1023 & u), o.push(u), i += l
            }
            return function (e) {
                var t = e.length;
                if (t <= E) return String.fromCharCode.apply(String, e);
                var r = "", o = 0;
                for (; o < t;) r += String.fromCharCode.apply(String, e.slice(o, o += E));
                return r
            }(o)
        }

        r.kMaxLength = i, (l.TYPED_ARRAY_SUPPORT = function () {
            try {
                var e = new Uint8Array(1);
                return e.__proto__ = {
                    __proto__: Uint8Array.prototype, foo: function () {
                        return 42
                    }
                }, 42 === e.foo()
            } catch (e) {
                return !1
            }
        }()) || "undefined" == typeof console || "function" != typeof console.error || console.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you _require old browser support."), Object.defineProperty(l.prototype, "parent", {
            enumerable: !0,
            get: function () {
                if (l.isBuffer(this)) return this.buffer
            }
        }), Object.defineProperty(l.prototype, "offset", {
            enumerable: !0, get: function () {
                if (l.isBuffer(this)) return this.byteOffset
            }
        }), "undefined" != typeof Symbol && null != Symbol.species && l[Symbol.species] === l && Object.defineProperty(l, Symbol.species, {
            value: null,
            configurable: !0,
            enumerable: !1,
            writable: !1
        }), l.poolSize = 8192, l.from = function (e, t, r) {
            return n(e, t, r)
        }, l.prototype.__proto__ = Uint8Array.prototype, l.__proto__ = Uint8Array, l.alloc = function (e, t, r) {
            return i = t, s = r, p(o = e), o <= 0 ? a(o) : void 0 !== i ? "string" == typeof s ? a(o).fill(i, s) : a(o).fill(i) : a(o);
            var o, i, s
        }, l.allocUnsafe = function (e) {
            return g(e)
        }, l.allocUnsafeSlow = function (e) {
            return g(e)
        }, l.isBuffer = function (e) {
            return null != e && !0 === e._isBuffer && e !== l.prototype
        }, l.compare = function (e, t) {
            if (P(e, Uint8Array) && (e = l.from(e, e.offset, e.byteLength)), P(t, Uint8Array) && (t = l.from(t, t.offset, t.byteLength)), !l.isBuffer(e) || !l.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
            if (e === t) return 0;
            for (var r = e.length, o = t.length, i = 0, s = Math.min(r, o); i < s; ++i) if (e[i] !== t[i]) {
                r = e[i], o = t[i];
                break
            }
            return r < o ? -1 : o < r ? 1 : 0
        }, l.isEncoding = function (e) {
            switch (String(e).toLowerCase()) {
                case"hex":
                case"utf8":
                case"utf-8":
                case"ascii":
                case"latin1":
                case"binary":
                case"base64":
                case"ucs2":
                case"ucs-2":
                case"utf16le":
                case"utf-16le":
                    return !0;
                default:
                    return !1
            }
        }, l.concat = function (e, t) {
            if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
            if (0 === e.length) return l.alloc(0);
            var r;
            if (void 0 === t) for (r = t = 0; r < e.length; ++r) t += e[r].length;
            var o = l.allocUnsafe(t), i = 0;
            for (r = 0; r < e.length; ++r) {
                var s = e[r];
                if (P(s, Uint8Array) && (s = l.from(s)), !l.isBuffer(s)) throw new TypeError('"list" argument must be an Array of Buffers');
                s.copy(o, i), i += s.length
            }
            return o
        }, l.byteLength = m, l.prototype._isBuffer = !0, l.prototype.swap16 = function () {
            var e = this.length;
            if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
            for (var t = 0; t < e; t += 2) f(this, t, t + 1);
            return this
        }, l.prototype.swap32 = function () {
            var e = this.length;
            if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
            for (var t = 0; t < e; t += 4) f(this, t, t + 3), f(this, t + 1, t + 2);
            return this
        }, l.prototype.swap64 = function () {
            var e = this.length;
            if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
            for (var t = 0; t < e; t += 8) f(this, t, t + 7), f(this, t + 1, t + 6), f(this, t + 2, t + 5), f(this, t + 3, t + 4);
            return this
        }, l.prototype.toLocaleString = l.prototype.toString = function () {
            var e = this.length;
            return 0 === e ? "" : 0 === arguments.length ? b(this, 0, e) : function (e, t, r) {
                var o = !1;
                if ((void 0 === t || t < 0) && (t = 0), t > this.length) return "";
                if ((void 0 === r || r > this.length) && (r = this.length), r <= 0) return "";
                if ((r >>>= 0) <= (t >>>= 0)) return "";
                for (e || (e = "utf8"); ;) switch (e) {
                    case"hex":
                        return T(this, t, r);
                    case"utf8":
                    case"utf-8":
                        return b(this, t, r);
                    case"ascii":
                        return S(this, t, r);
                    case"latin1":
                    case"binary":
                        return _(this, t, r);
                    case"base64":
                        return M(this, t, r);
                    case"ucs2":
                    case"ucs-2":
                    case"utf16le":
                    case"utf-16le":
                        return v(this, t, r);
                    default:
                        if (o) throw new TypeError("Unknown encoding: " + e);
                        e = (e + "").toLowerCase(), o = !0
                }
            }.apply(this, arguments)
        }, l.prototype.equals = function (e) {
            if (!l.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
            return this === e || 0 === l.compare(this, e)
        }, l.prototype.inspect = function () {
            var e = "", t = r.INSPECT_MAX_BYTES;
            return e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (e += " ... "), "<Buffer " + e + ">"
        }, l.prototype.compare = function (e, t, r, o, i) {
            if (P(e, Uint8Array) && (e = l.from(e, e.offset, e.byteLength)), !l.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
            if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === o && (o = 0), void 0 === i && (i = this.length), t < 0 || r > e.length || o < 0 || i > this.length) throw new RangeError("out of range index");
            if (i <= o && r <= t) return 0;
            if (i <= o) return -1;
            if (r <= t) return 1;
            if (this === e) return 0;
            for (var s = (i >>>= 0) - (o >>>= 0), a = (r >>>= 0) - (t >>>= 0), n = Math.min(s, a), p = this.slice(o, i), g = e.slice(t, r), u = 0; u < n; ++u) if (p[u] !== g[u]) {
                s = p[u], a = g[u];
                break
            }
            return s < a ? -1 : a < s ? 1 : 0
        }, l.prototype.includes = function (e, t, r) {
            return -1 !== this.indexOf(e, t, r)
        }, l.prototype.indexOf = function (e, t, r) {
            return d(this, e, t, r, !0)
        }, l.prototype.lastIndexOf = function (e, t, r) {
            return d(this, e, t, r, !1)
        }, l.prototype.write = function (e, t, r, o) {
            if (void 0 === t) o = "utf8", r = this.length, t = 0; else if (void 0 === r && "string" == typeof t) o = t, r = this.length, t = 0; else {
                if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                t >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === o && (o = "utf8")) : (o = r, r = void 0)
            }
            var i = this.length - t;
            if ((void 0 === r || i < r) && (r = i), 0 < e.length && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
            o || (o = "utf8");
            for (var s, a, n, p, g, u, l, c, m, f = !1; ;) switch (o) {
                case"hex":
                    return y(this, e, t, r);
                case"utf8":
                case"utf-8":
                    return c = t, m = r, W(C(e, (l = this).length - c), l, c, m);
                case"ascii":
                    return R(this, e, t, r);
                case"latin1":
                case"binary":
                    return R(this, e, t, r);
                case"base64":
                    return p = this, g = t, u = r, W(N(e), p, g, u);
                case"ucs2":
                case"ucs-2":
                case"utf16le":
                case"utf-16le":
                    return a = t, n = r, W(function (e, t) {
                        for (var r, o, i, s = [], a = 0; a < e.length && !((t -= 2) < 0); ++a) r = e.charCodeAt(a), o = r >> 8, i = r % 256, s.push(i), s.push(o);
                        return s
                    }(e, (s = this).length - a), s, a, n);
                default:
                    if (f) throw new TypeError("Unknown encoding: " + o);
                    o = ("" + o).toLowerCase(), f = !0
            }
        }, l.prototype.toJSON = function () {
            return {type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0)}
        };
        var E = 4096;

        function S(e, t, r) {
            var o = "";
            r = Math.min(e.length, r);
            for (var i = t; i < r; ++i) o += String.fromCharCode(127 & e[i]);
            return o
        }

        function _(e, t, r) {
            var o = "";
            r = Math.min(e.length, r);
            for (var i = t; i < r; ++i) o += String.fromCharCode(e[i]);
            return o
        }

        function T(e, t, r) {
            var o = e.length;
            (!t || t < 0) && (t = 0), (!r || r < 0 || o < r) && (r = o);
            for (var i = "", s = t; s < r; ++s) i += D(e[s]);
            return i
        }

        function v(e, t, r) {
            for (var o = e.slice(t, r), i = "", s = 0; s < o.length; s += 2) i += String.fromCharCode(o[s] + 256 * o[s + 1]);
            return i
        }

        function I(e, t, r) {
            if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
            if (r < e + t) throw new RangeError("Trying to access beyond buffer length")
        }

        function B(e, t, r, o, i, s) {
            if (!l.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
            if (i < t || t < s) throw new RangeError('"value" argument is out of bounds');
            if (r + o > e.length) throw new RangeError("Index out of range")
        }

        function F(e, t, r, o, i, s) {
            if (r + o > e.length) throw new RangeError("Index out of range");
            if (r < 0) throw new RangeError("Index out of range")
        }

        function A(e, t, r, o, i) {
            return t = +t, r >>>= 0, i || F(e, 0, r, 4), s.write(e, t, r, o, 23, 4), r + 4
        }

        function O(e, t, r, o, i) {
            return t = +t, r >>>= 0, i || F(e, 0, r, 8), s.write(e, t, r, o, 52, 8), r + 8
        }

        l.prototype.slice = function (e, t) {
            var r = this.length;
            (e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : r < e && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : r < t && (t = r), t < e && (t = e);
            var o = this.subarray(e, t);
            return o.__proto__ = l.prototype, o
        }, l.prototype.readUIntLE = function (e, t, r) {
            e >>>= 0, t >>>= 0, r || I(e, t, this.length);
            for (var o = this[e], i = 1, s = 0; ++s < t && (i *= 256);) o += this[e + s] * i;
            return o
        }, l.prototype.readUIntBE = function (e, t, r) {
            e >>>= 0, t >>>= 0, r || I(e, t, this.length);
            for (var o = this[e + --t], i = 1; 0 < t && (i *= 256);) o += this[e + --t] * i;
            return o
        }, l.prototype.readUInt8 = function (e, t) {
            return e >>>= 0, t || I(e, 1, this.length), this[e]
        }, l.prototype.readUInt16LE = function (e, t) {
            return e >>>= 0, t || I(e, 2, this.length), this[e] | this[e + 1] << 8
        }, l.prototype.readUInt16BE = function (e, t) {
            return e >>>= 0, t || I(e, 2, this.length), this[e] << 8 | this[e + 1]
        }, l.prototype.readUInt32LE = function (e, t) {
            return e >>>= 0, t || I(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
        }, l.prototype.readUInt32BE = function (e, t) {
            return e >>>= 0, t || I(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
        }, l.prototype.readIntLE = function (e, t, r) {
            e >>>= 0, t >>>= 0, r || I(e, t, this.length);
            for (var o = this[e], i = 1, s = 0; ++s < t && (i *= 256);) o += this[e + s] * i;
            return (i *= 128) <= o && (o -= Math.pow(2, 8 * t)), o
        }, l.prototype.readIntBE = function (e, t, r) {
            e >>>= 0, t >>>= 0, r || I(e, t, this.length);
            for (var o = t, i = 1, s = this[e + --o]; 0 < o && (i *= 256);) s += this[e + --o] * i;
            return (i *= 128) <= s && (s -= Math.pow(2, 8 * t)), s
        }, l.prototype.readInt8 = function (e, t) {
            return e >>>= 0, t || I(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
        }, l.prototype.readInt16LE = function (e, t) {
            e >>>= 0, t || I(e, 2, this.length);
            var r = this[e] | this[e + 1] << 8;
            return 32768 & r ? 4294901760 | r : r
        }, l.prototype.readInt16BE = function (e, t) {
            e >>>= 0, t || I(e, 2, this.length);
            var r = this[e + 1] | this[e] << 8;
            return 32768 & r ? 4294901760 | r : r
        }, l.prototype.readInt32LE = function (e, t) {
            return e >>>= 0, t || I(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
        }, l.prototype.readInt32BE = function (e, t) {
            return e >>>= 0, t || I(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
        }, l.prototype.readFloatLE = function (e, t) {
            return e >>>= 0, t || I(e, 4, this.length), s.read(this, e, !0, 23, 4)
        }, l.prototype.readFloatBE = function (e, t) {
            return e >>>= 0, t || I(e, 4, this.length), s.read(this, e, !1, 23, 4)
        }, l.prototype.readDoubleLE = function (e, t) {
            return e >>>= 0, t || I(e, 8, this.length), s.read(this, e, !0, 52, 8)
        }, l.prototype.readDoubleBE = function (e, t) {
            return e >>>= 0, t || I(e, 8, this.length), s.read(this, e, !1, 52, 8)
        }, l.prototype.writeUIntLE = function (e, t, r, o) {
            (e = +e, t >>>= 0, r >>>= 0, o) || B(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
            var i = 1, s = 0;
            for (this[t] = 255 & e; ++s < r && (i *= 256);) this[t + s] = e / i & 255;
            return t + r
        }, l.prototype.writeUIntBE = function (e, t, r, o) {
            (e = +e, t >>>= 0, r >>>= 0, o) || B(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
            var i = r - 1, s = 1;
            for (this[t + i] = 255 & e; 0 <= --i && (s *= 256);) this[t + i] = e / s & 255;
            return t + r
        }, l.prototype.writeUInt8 = function (e, t, r) {
            return e = +e, t >>>= 0, r || B(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1
        }, l.prototype.writeUInt16LE = function (e, t, r) {
            return e = +e, t >>>= 0, r || B(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
        }, l.prototype.writeUInt16BE = function (e, t, r) {
            return e = +e, t >>>= 0, r || B(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
        }, l.prototype.writeUInt32LE = function (e, t, r) {
            return e = +e, t >>>= 0, r || B(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4
        }, l.prototype.writeUInt32BE = function (e, t, r) {
            return e = +e, t >>>= 0, r || B(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
        }, l.prototype.writeIntLE = function (e, t, r, o) {
            if (e = +e, t >>>= 0, !o) {
                var i = Math.pow(2, 8 * r - 1);
                B(this, e, t, r, i - 1, -i)
            }
            var s = 0, a = 1, n = 0;
            for (this[t] = 255 & e; ++s < r && (a *= 256);) e < 0 && 0 === n && 0 !== this[t + s - 1] && (n = 1), this[t + s] = (e / a >> 0) - n & 255;
            return t + r
        }, l.prototype.writeIntBE = function (e, t, r, o) {
            if (e = +e, t >>>= 0, !o) {
                var i = Math.pow(2, 8 * r - 1);
                B(this, e, t, r, i - 1, -i)
            }
            var s = r - 1, a = 1, n = 0;
            for (this[t + s] = 255 & e; 0 <= --s && (a *= 256);) e < 0 && 0 === n && 0 !== this[t + s + 1] && (n = 1), this[t + s] = (e / a >> 0) - n & 255;
            return t + r
        }, l.prototype.writeInt8 = function (e, t, r) {
            return e = +e, t >>>= 0, r || B(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
        }, l.prototype.writeInt16LE = function (e, t, r) {
            return e = +e, t >>>= 0, r || B(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
        }, l.prototype.writeInt16BE = function (e, t, r) {
            return e = +e, t >>>= 0, r || B(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
        }, l.prototype.writeInt32LE = function (e, t, r) {
            return e = +e, t >>>= 0, r || B(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4
        }, l.prototype.writeInt32BE = function (e, t, r) {
            return e = +e, t >>>= 0, r || B(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
        }, l.prototype.writeFloatLE = function (e, t, r) {
            return A(this, e, t, !0, r)
        }, l.prototype.writeFloatBE = function (e, t, r) {
            return A(this, e, t, !1, r)
        }, l.prototype.writeDoubleLE = function (e, t, r) {
            return O(this, e, t, !0, r)
        }, l.prototype.writeDoubleBE = function (e, t, r) {
            return O(this, e, t, !1, r)
        }, l.prototype.copy = function (e, t, r, o) {
            if (!l.isBuffer(e)) throw new TypeError("argument should be a Buffer");
            if (r || (r = 0), o || 0 === o || (o = this.length), t >= e.length && (t = e.length), t || (t = 0), 0 < o && o < r && (o = r), o === r) return 0;
            if (0 === e.length || 0 === this.length) return 0;
            if (t < 0) throw new RangeError("targetStart out of bounds");
            if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
            if (o < 0) throw new RangeError("sourceEnd out of bounds");
            o > this.length && (o = this.length), e.length - t < o - r && (o = e.length - t + r);
            var i = o - r;
            if (this === e && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(t, r, o); else if (this === e && r < t && t < o) for (var s = i - 1; 0 <= s; --s) e[s + t] = this[s + r]; else Uint8Array.prototype.set.call(e, this.subarray(r, o), t);
            return i
        }, l.prototype.fill = function (e, t, r, o) {
            if ("string" == typeof e) {
                if ("string" == typeof t ? (o = t, t = 0, r = this.length) : "string" == typeof r && (o = r, r = this.length), void 0 !== o && "string" != typeof o) throw new TypeError("encoding must be a string");
                if ("string" == typeof o && !l.isEncoding(o)) throw new TypeError("Unknown encoding: " + o);
                if (1 === e.length) {
                    var i = e.charCodeAt(0);
                    ("utf8" === o && i < 128 || "latin1" === o) && (e = i)
                }
            } else "number" == typeof e && (e &= 255);
            if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
            if (r <= t) return this;
            var s;
            if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" == typeof e) for (s = t; s < r; ++s) this[s] = e; else {
                var a = l.isBuffer(e) ? e : l.from(e, o), n = a.length;
                if (0 === n) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                for (s = 0; s < r - t; ++s) this[s + t] = a[s % n]
            }
            return this
        };
        var w = /[^+/0-9A-Za-z-_]/g;

        function D(e) {
            return e < 16 ? "0" + e.toString(16) : e.toString(16)
        }

        function C(e, t) {
            var r;
            t = t || 1 / 0;
            for (var o = e.length, i = null, s = [], a = 0; a < o; ++a) {
                if (55295 < (r = e.charCodeAt(a)) && r < 57344) {
                    if (!i) {
                        if (56319 < r) {
                            -1 < (t -= 3) && s.push(239, 191, 189);
                            continue
                        }
                        if (a + 1 === o) {
                            -1 < (t -= 3) && s.push(239, 191, 189);
                            continue
                        }
                        i = r;
                        continue
                    }
                    if (r < 56320) {
                        -1 < (t -= 3) && s.push(239, 191, 189), i = r;
                        continue
                    }
                    r = 65536 + (i - 55296 << 10 | r - 56320)
                } else i && -1 < (t -= 3) && s.push(239, 191, 189);
                if (i = null, r < 128) {
                    if ((t -= 1) < 0) break;
                    s.push(r)
                } else if (r < 2048) {
                    if ((t -= 2) < 0) break;
                    s.push(r >> 6 | 192, 63 & r | 128)
                } else if (r < 65536) {
                    if ((t -= 3) < 0) break;
                    s.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                } else {
                    if (!(r < 1114112)) throw new Error("Invalid code point");
                    if ((t -= 4) < 0) break;
                    s.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                }
            }
            return s
        }

        function N(e) {
            return o.toByteArray(function (e) {
                if ((e = (e = e.split("=")[0]).trim().replace(w, "")).length < 2) return "";
                for (; e.length % 4 != 0;) e += "=";
                return e
            }(e))
        }

        function W(e, t, r, o) {
            for (var i = 0; i < o && !(i + r >= t.length || i >= e.length); ++i) t[i + r] = e[i];
            return i
        }

        function P(e, t) {
            return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
        }

        function L(e) {
            return e != e
        }
    }, {"base64-js": 1, ieee754: 3}], 3: [function (e, t, r) {
        r.read = function (e, t, r, o, i) {
            var s, a, n = 8 * i - o - 1, p = (1 << n) - 1, g = p >> 1, u = -7, l = r ? i - 1 : 0, c = r ? -1 : 1,
                m = e[t + l];
            for (l += c, s = m & (1 << -u) - 1, m >>= -u, u += n; 0 < u; s = 256 * s + e[t + l], l += c, u -= 8) ;
            for (a = s & (1 << -u) - 1, s >>= -u, u += o; 0 < u; a = 256 * a + e[t + l], l += c, u -= 8) ;
            if (0 === s) s = 1 - g; else {
                if (s === p) return a ? NaN : 1 / 0 * (m ? -1 : 1);
                a += Math.pow(2, o), s -= g
            }
            return (m ? -1 : 1) * a * Math.pow(2, s - o)
        }, r.write = function (e, t, r, o, i, s) {
            var a, n, p, g = 8 * s - i - 1, u = (1 << g) - 1, l = u >> 1,
                c = 23 === i ? Math.pow(2, -24) - Math.pow(2, -77) : 0, m = o ? 0 : s - 1, f = o ? 1 : -1,
                d = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
            for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (n = isNaN(t) ? 1 : 0, a = u) : (a = Math.floor(Math.log(t) / Math.LN2), t * (p = Math.pow(2, -a)) < 1 && (a--, p *= 2), 2 <= (t += 1 <= a + l ? c / p : c * Math.pow(2, 1 - l)) * p && (a++, p /= 2), u <= a + l ? (n = 0, a = u) : 1 <= a + l ? (n = (t * p - 1) * Math.pow(2, i), a += l) : (n = t * Math.pow(2, l - 1) * Math.pow(2, i), a = 0)); 8 <= i; e[r + m] = 255 & n, m += f, n /= 256, i -= 8) ;
            for (a = a << i | n, g += i; 0 < g; e[r + m] = 255 & a, m += f, a /= 256, g -= 8) ;
            e[r + m - f] |= 128 * d
        }
    }, {}], 4: [function (e, t, r) {
        var o = e("google-protobuf"), i = o, s = window;
        i.exportSymbol("proto.stream.Audience", null, s), i.exportSymbol("proto.stream.LiveWatchInfo", null, s), i.exportSymbol("proto.stream.WatchBookInfo", null, s), i.exportSymbol("proto.stream.WatchParams", null, s), proto.stream.Audience = function (e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.stream.Audience, o.Message), i.DEBUG && !COMPILED && (proto.stream.Audience.displayName = "proto.stream.Audience"), o.Message.GENERATE_TO_OBJECT && (proto.stream.Audience.prototype.toObject = function (e) {
            return proto.stream.Audience.toObject(e, this)
        }, proto.stream.Audience.toObject = function (e, t) {
            var r = {
                userid: o.Message.getFieldWithDefault(t, 1, 0),
                profile: t.getProfile_asB64(),
                entertime: o.Message.getFieldWithDefault(t, 3, 0)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.stream.Audience.deserializeBinary = function (e) {
            var t = new o.BinaryReader(e), r = new proto.stream.Audience;
            return proto.stream.Audience.deserializeBinaryFromReader(r, t)
        }, proto.stream.Audience.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setUserid(r);
                        break;
                    case 2:
                        r = t.readBytes();
                        e.setProfile(r);
                        break;
                    case 3:
                        r = t.readUint32();
                        e.setEntertime(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.stream.Audience.prototype.serializeBinary = function () {
            var e = new o.BinaryWriter;
            return proto.stream.Audience.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.stream.Audience.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getUserid()) && t.writeUint32(1, r), 0 < (r = e.getProfile_asU8()).length && t.writeBytes(2, r), 0 !== (r = e.getEntertime()) && t.writeUint32(3, r)
        }, proto.stream.Audience.prototype.getUserid = function () {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }, proto.stream.Audience.prototype.setUserid = function (e) {
            o.Message.setProto3IntField(this, 1, e)
        }, proto.stream.Audience.prototype.getProfile = function () {
            return o.Message.getFieldWithDefault(this, 2, "")
        }, proto.stream.Audience.prototype.getProfile_asB64 = function () {
            return o.Message.bytesAsB64(this.getProfile())
        }, proto.stream.Audience.prototype.getProfile_asU8 = function () {
            return o.Message.bytesAsU8(this.getProfile())
        }, proto.stream.Audience.prototype.setProfile = function (e) {
            o.Message.setProto3BytesField(this, 2, e)
        }, proto.stream.Audience.prototype.getEntertime = function () {
            return o.Message.getFieldWithDefault(this, 3, 0)
        }, proto.stream.Audience.prototype.setEntertime = function (e) {
            o.Message.setProto3IntField(this, 3, e)
        }, proto.stream.LiveWatchInfo = function (e) {
            o.Message.initialize(this, e, 0, -1, proto.stream.LiveWatchInfo.repeatedFields_, null)
        }, i.inherits(proto.stream.LiveWatchInfo, o.Message), i.DEBUG && !COMPILED && (proto.stream.LiveWatchInfo.displayName = "proto.stream.LiveWatchInfo"), proto.stream.LiveWatchInfo.repeatedFields_ = [8], o.Message.GENERATE_TO_OBJECT && (proto.stream.LiveWatchInfo.prototype.toObject = function (e) {
            return proto.stream.LiveWatchInfo.toObject(e, this)
        }, proto.stream.LiveWatchInfo.toObject = function (e, t) {
            var r = {
                roomid: o.Message.getFieldWithDefault(t, 1, "0"),
                startts: o.Message.getFieldWithDefault(t, 2, "0"),
                delayms: o.Message.getFieldWithDefault(t, 3, 0),
                cachems: o.Message.getFieldWithDefault(t, 4, 0),
                maxaudiences: o.Message.getFieldWithDefault(t, 5, 0),
                curaudiences: o.Message.getFieldWithDefault(t, 6, 0),
                peakaudiences: o.Message.getFieldWithDefault(t, 7, 0),
                lastaudiencesList: o.Message.toObjectList(t.getLastaudiencesList(), proto.stream.Audience.toObject, e)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.stream.LiveWatchInfo.deserializeBinary = function (e) {
            var t = new o.BinaryReader(e), r = new proto.stream.LiveWatchInfo;
            return proto.stream.LiveWatchInfo.deserializeBinaryFromReader(r, t)
        }, proto.stream.LiveWatchInfo.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint64String();
                        e.setRoomid(r);
                        break;
                    case 2:
                        r = t.readUint64String();
                        e.setStartts(r);
                        break;
                    case 3:
                        r = t.readUint32();
                        e.setDelayms(r);
                        break;
                    case 4:
                        r = t.readUint32();
                        e.setCachems(r);
                        break;
                    case 5:
                        r = t.readUint32();
                        e.setMaxaudiences(r);
                        break;
                    case 6:
                        r = t.readUint32();
                        e.setCuraudiences(r);
                        break;
                    case 7:
                        r = t.readUint32();
                        e.setPeakaudiences(r);
                        break;
                    case 8:
                        r = new proto.stream.Audience;
                        t.readMessage(r, proto.stream.Audience.deserializeBinaryFromReader), e.addLastaudiences(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.stream.LiveWatchInfo.prototype.serializeBinary = function () {
            var e = new o.BinaryWriter;
            return proto.stream.LiveWatchInfo.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.stream.LiveWatchInfo.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            r = e.getRoomid(), 0 !== parseInt(r, 10) && t.writeUint64String(1, r), r = e.getStartts(), 0 !== parseInt(r, 10) && t.writeUint64String(2, r), 0 !== (r = e.getDelayms()) && t.writeUint32(3, r), 0 !== (r = e.getCachems()) && t.writeUint32(4, r), 0 !== (r = e.getMaxaudiences()) && t.writeUint32(5, r), 0 !== (r = e.getCuraudiences()) && t.writeUint32(6, r), 0 !== (r = e.getPeakaudiences()) && t.writeUint32(7, r), 0 < (r = e.getLastaudiencesList()).length && t.writeRepeatedMessage(8, r, proto.stream.Audience.serializeBinaryToWriter)
        }, proto.stream.LiveWatchInfo.prototype.getRoomid = function () {
            return o.Message.getFieldWithDefault(this, 1, "0")
        }, proto.stream.LiveWatchInfo.prototype.setRoomid = function (e) {
            o.Message.setProto3StringIntField(this, 1, e)
        }, proto.stream.LiveWatchInfo.prototype.getStartts = function () {
            return o.Message.getFieldWithDefault(this, 2, "0")
        }, proto.stream.LiveWatchInfo.prototype.setStartts = function (e) {
            o.Message.setProto3StringIntField(this, 2, e)
        }, proto.stream.LiveWatchInfo.prototype.getDelayms = function () {
            return o.Message.getFieldWithDefault(this, 3, 0)
        }, proto.stream.LiveWatchInfo.prototype.setDelayms = function (e) {
            o.Message.setProto3IntField(this, 3, e)
        }, proto.stream.LiveWatchInfo.prototype.getCachems = function () {
            return o.Message.getFieldWithDefault(this, 4, 0)
        }, proto.stream.LiveWatchInfo.prototype.setCachems = function (e) {
            o.Message.setProto3IntField(this, 4, e)
        }, proto.stream.LiveWatchInfo.prototype.getMaxaudiences = function () {
            return o.Message.getFieldWithDefault(this, 5, 0)
        }, proto.stream.LiveWatchInfo.prototype.setMaxaudiences = function (e) {
            o.Message.setProto3IntField(this, 5, e)
        }, proto.stream.LiveWatchInfo.prototype.getCuraudiences = function () {
            return o.Message.getFieldWithDefault(this, 6, 0)
        }, proto.stream.LiveWatchInfo.prototype.setCuraudiences = function (e) {
            o.Message.setProto3IntField(this, 6, e)
        }, proto.stream.LiveWatchInfo.prototype.getPeakaudiences = function () {
            return o.Message.getFieldWithDefault(this, 7, 0)
        }, proto.stream.LiveWatchInfo.prototype.setPeakaudiences = function (e) {
            o.Message.setProto3IntField(this, 7, e)
        }, proto.stream.LiveWatchInfo.prototype.getLastaudiencesList = function () {
            return o.Message.getRepeatedWrapperField(this, proto.stream.Audience, 8)
        }, proto.stream.LiveWatchInfo.prototype.setLastaudiencesList = function (e) {
            o.Message.setRepeatedWrapperField(this, 8, e)
        }, proto.stream.LiveWatchInfo.prototype.addLastaudiences = function (e, t) {
            return o.Message.addToRepeatedWrapperField(this, 8, e, proto.stream.Audience, t)
        }, proto.stream.LiveWatchInfo.prototype.clearLastaudiencesList = function () {
            this.setLastaudiencesList([])
        }, proto.stream.WatchParams = function (e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.stream.WatchParams, o.Message), i.DEBUG && !COMPILED && (proto.stream.WatchParams.displayName = "proto.stream.WatchParams"), o.Message.GENERATE_TO_OBJECT && (proto.stream.WatchParams.prototype.toObject = function (e) {
            return proto.stream.WatchParams.toObject(e, this)
        }, proto.stream.WatchParams.toObject = function (e, t) {
            var r = {
                canwatch: o.Message.getFieldWithDefault(t, 1, !1),
                maxaudiences: o.Message.getFieldWithDefault(t, 2, 0),
                delayms: o.Message.getFieldWithDefault(t, 3, 0),
                cachems: o.Message.getFieldWithDefault(t, 4, 0),
                bufferbytes: o.Message.getFieldWithDefault(t, 5, 0),
                lastsize: o.Message.getFieldWithDefault(t, 6, 0),
                needreplay: o.Message.getFieldWithDefault(t, 7, !1)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.stream.WatchParams.deserializeBinary = function (e) {
            var t = new o.BinaryReader(e), r = new proto.stream.WatchParams;
            return proto.stream.WatchParams.deserializeBinaryFromReader(r, t)
        }, proto.stream.WatchParams.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readBool();
                        e.setCanwatch(r);
                        break;
                    case 2:
                        r = t.readUint32();
                        e.setMaxaudiences(r);
                        break;
                    case 3:
                        r = t.readUint32();
                        e.setDelayms(r);
                        break;
                    case 4:
                        r = t.readUint32();
                        e.setCachems(r);
                        break;
                    case 5:
                        r = t.readUint32();
                        e.setBufferbytes(r);
                        break;
                    case 6:
                        r = t.readUint32();
                        e.setLastsize(r);
                        break;
                    case 7:
                        r = t.readBool();
                        e.setNeedreplay(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.stream.WatchParams.prototype.serializeBinary = function () {
            var e = new o.BinaryWriter;
            return proto.stream.WatchParams.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.stream.WatchParams.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            (r = e.getCanwatch()) && t.writeBool(1, r), 0 !== (r = e.getMaxaudiences()) && t.writeUint32(2, r), 0 !== (r = e.getDelayms()) && t.writeUint32(3, r), 0 !== (r = e.getCachems()) && t.writeUint32(4, r), 0 !== (r = e.getBufferbytes()) && t.writeUint32(5, r), 0 !== (r = e.getLastsize()) && t.writeUint32(6, r), (r = e.getNeedreplay()) && t.writeBool(7, r)
        }, proto.stream.WatchParams.prototype.getCanwatch = function () {
            return o.Message.getFieldWithDefault(this, 1, !1)
        }, proto.stream.WatchParams.prototype.setCanwatch = function (e) {
            o.Message.setProto3BooleanField(this, 1, e)
        }, proto.stream.WatchParams.prototype.getMaxaudiences = function () {
            return o.Message.getFieldWithDefault(this, 2, 0)
        }, proto.stream.WatchParams.prototype.setMaxaudiences = function (e) {
            o.Message.setProto3IntField(this, 2, e)
        }, proto.stream.WatchParams.prototype.getDelayms = function () {
            return o.Message.getFieldWithDefault(this, 3, 0)
        }, proto.stream.WatchParams.prototype.setDelayms = function (e) {
            o.Message.setProto3IntField(this, 3, e)
        }, proto.stream.WatchParams.prototype.getCachems = function () {
            return o.Message.getFieldWithDefault(this, 4, 0)
        }, proto.stream.WatchParams.prototype.setCachems = function (e) {
            o.Message.setProto3IntField(this, 4, e)
        }, proto.stream.WatchParams.prototype.getBufferbytes = function () {
            return o.Message.getFieldWithDefault(this, 5, 0)
        }, proto.stream.WatchParams.prototype.setBufferbytes = function (e) {
            o.Message.setProto3IntField(this, 5, e)
        }, proto.stream.WatchParams.prototype.getLastsize = function () {
            return o.Message.getFieldWithDefault(this, 6, 0)
        }, proto.stream.WatchParams.prototype.setLastsize = function (e) {
            o.Message.setProto3IntField(this, 6, e)
        }, proto.stream.WatchParams.prototype.getNeedreplay = function () {
            return o.Message.getFieldWithDefault(this, 7, !1)
        }, proto.stream.WatchParams.prototype.setNeedreplay = function (e) {
            o.Message.setProto3BooleanField(this, 7, e)
        }, proto.stream.WatchBookInfo = function (e) {
            o.Message.initialize(this, e, 0, -1, proto.stream.WatchBookInfo.repeatedFields_, null)
        }, i.inherits(proto.stream.WatchBookInfo, o.Message), i.DEBUG && !COMPILED && (proto.stream.WatchBookInfo.displayName = "proto.stream.WatchBookInfo"), proto.stream.WatchBookInfo.repeatedFields_ = [4], o.Message.GENERATE_TO_OBJECT && (proto.stream.WatchBookInfo.prototype.toObject = function (e) {
            return proto.stream.WatchBookInfo.toObject(e, this)
        }, proto.stream.WatchBookInfo.toObject = function (e, t) {
            var r = {
                bookid: o.Message.getFieldWithDefault(t, 1, ""),
                ticket: o.Message.getFieldWithDefault(t, 2, ""),
                setid: o.Message.getFieldWithDefault(t, 3, 0),
                livesList: o.Message.getRepeatedField(t, 4),
                wssproxy: o.Message.getFieldWithDefault(t, 5, "")
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.stream.WatchBookInfo.deserializeBinary = function (e) {
            var t = new o.BinaryReader(e), r = new proto.stream.WatchBookInfo;
            return proto.stream.WatchBookInfo.deserializeBinaryFromReader(r, t)
        }, proto.stream.WatchBookInfo.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readString();
                        e.setBookid(r);
                        break;
                    case 2:
                        r = t.readString();
                        e.setTicket(r);
                        break;
                    case 3:
                        r = t.readUint32();
                        e.setSetid(r);
                        break;
                    case 4:
                        r = t.readString();
                        e.addLives(r);
                        break;
                    case 5:
                        r = t.readString();
                        e.setWssproxy(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.stream.WatchBookInfo.prototype.serializeBinary = function () {
            var e = new o.BinaryWriter;
            return proto.stream.WatchBookInfo.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.stream.WatchBookInfo.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 < (r = e.getBookid()).length && t.writeString(1, r), 0 < (r = e.getTicket()).length && t.writeString(2, r), 0 !== (r = e.getSetid()) && t.writeUint32(3, r), 0 < (r = e.getLivesList()).length && t.writeRepeatedString(4, r), 0 < (r = e.getWssproxy()).length && t.writeString(5, r)
        }, proto.stream.WatchBookInfo.prototype.getBookid = function () {
            return o.Message.getFieldWithDefault(this, 1, "")
        }, proto.stream.WatchBookInfo.prototype.setBookid = function (e) {
            o.Message.setProto3StringField(this, 1, e)
        }, proto.stream.WatchBookInfo.prototype.getTicket = function () {
            return o.Message.getFieldWithDefault(this, 2, "")
        }, proto.stream.WatchBookInfo.prototype.setTicket = function (e) {
            o.Message.setProto3StringField(this, 2, e)
        }, proto.stream.WatchBookInfo.prototype.getSetid = function () {
            return o.Message.getFieldWithDefault(this, 3, 0)
        }, proto.stream.WatchBookInfo.prototype.setSetid = function (e) {
            o.Message.setProto3IntField(this, 3, e)
        }, proto.stream.WatchBookInfo.prototype.getLivesList = function () {
            return o.Message.getRepeatedField(this, 4)
        }, proto.stream.WatchBookInfo.prototype.setLivesList = function (e) {
            o.Message.setField(this, 4, e || [])
        }, proto.stream.WatchBookInfo.prototype.addLives = function (e, t) {
            o.Message.addToRepeatedField(this, 4, e, t)
        }, proto.stream.WatchBookInfo.prototype.clearLivesList = function () {
            this.setLivesList([])
        }, proto.stream.WatchBookInfo.prototype.getWssproxy = function () {
            return o.Message.getFieldWithDefault(this, 5, "")
        }, proto.stream.WatchBookInfo.prototype.setWssproxy = function (e) {
            o.Message.setProto3StringField(this, 5, e)
        }, i.object.extend(r, proto.stream)
    }, {"google-protobuf": 8}], 5: [function (e, t, r) {
        var o = e("google-protobuf"), i = window;
        o.exportSymbol("proto.stream.ErrorCode", null, i), proto.stream.ErrorCode = {
            NOERROR: 0,
            OK: 200,
            ACCEPTED: 202,
            NOCONTENT: 204,
            BADREQUEST: 400,
            UNAUTHORIZED: 401,
            SIGNATUREFAILED: 402,
            FORBIDDEN: 403,
            NOTFOUND: 404,
            INTERNALSERVERERROR: 500,
            NOTIMPLEMENTED: 501,
            BADGATEWAY: 502,
            SERVICEUNAVAILABLE: 503
        }, o.object.extend(r, proto.stream)
    }, {"google-protobuf": 8}], 6: [function (e, t, r) {
        var o = e("./sdk_pb"), i = e("./gateway_pb"), s = e("./errorcode_pb"), a = e("./watchsdk_pb");
        t.exports = {DataProto: o, DataProto: i, DataProto: s, DataProto: a}
    }, {"./errorcode_pb": 5, "./gateway_pb": 7, "./sdk_pb": 9, "./watchsdk_pb": 10}], 7: [function (e, t, r) {
        var i = e("google-protobuf"), o = i, s = window;
        e("./errorcode_pb.js");
        o.exportSymbol("proto.stream.BookInfo", null, s), o.exportSymbol("proto.stream.BrigadeInfo", null, s), o.exportSymbol("proto.stream.ChangeRoleReq", null, s), o.exportSymbol("proto.stream.ChangeRoleRsp", null, s), o.exportSymbol("proto.stream.CmdId", null, s), o.exportSymbol("proto.stream.ConnDetailV2", null, s), o.exportSymbol("proto.stream.CreateFlag", null, s), o.exportSymbol("proto.stream.CreateRoomReq", null, s), o.exportSymbol("proto.stream.CreateRoomRsp", null, s), o.exportSymbol("proto.stream.CreateTeamReq", null, s), o.exportSymbol("proto.stream.CreateTeamRsp", null, s), o.exportSymbol("proto.stream.DestroyRoomReq", null, s), o.exportSymbol("proto.stream.DestroyRoomRsp", null, s), o.exportSymbol("proto.stream.DisconnectReq", null, s), o.exportSymbol("proto.stream.DisconnectRsp", null, s), o.exportSymbol("proto.stream.GetRoomDetailReq", null, s), o.exportSymbol("proto.stream.GetRoomDetailRsp", null, s), o.exportSymbol("proto.stream.GetRoomListExReq", null, s), o.exportSymbol("proto.stream.GetRoomListExRsp", null, s), o.exportSymbol("proto.stream.GetRoomListReq", null, s), o.exportSymbol("proto.stream.GetRoomListRsp", null, s), o.exportSymbol("proto.stream.GetWatchRoomsReq", null, s), o.exportSymbol("proto.stream.GetWatchRoomsRsp", null, s), o.exportSymbol("proto.stream.HeartbeatReq", null, s), o.exportSymbol("proto.stream.HeartbeatRsp", null, s), o.exportSymbol("proto.stream.JoinOpenNotify", null, s), o.exportSymbol("proto.stream.JoinOpenReq", null, s), o.exportSymbol("proto.stream.JoinOpenRsp", null, s), o.exportSymbol("proto.stream.JoinOverNotify", null, s), o.exportSymbol("proto.stream.JoinOverReq", null, s), o.exportSymbol("proto.stream.JoinOverRsp", null, s), o.exportSymbol("proto.stream.JoinRoomReq", null, s), o.exportSymbol("proto.stream.JoinRoomRsp", null, s), o.exportSymbol("proto.stream.JoinRoomType", null, s), o.exportSymbol("proto.stream.JoinTeamNotify", null, s), o.exportSymbol("proto.stream.JoinTeamReq", null, s), o.exportSymbol("proto.stream.JoinTeamRsp", null, s), o.exportSymbol("proto.stream.JoinWatchRoomReq", null, s), o.exportSymbol("proto.stream.JoinWatchRoomRsp", null, s), o.exportSymbol("proto.stream.KickPlayerNotify", null, s), o.exportSymbol("proto.stream.KickPlayerReq", null, s), o.exportSymbol("proto.stream.KickPlayerRsp", null, s), o.exportSymbol("proto.stream.LeaveRoomReq", null, s), o.exportSymbol("proto.stream.LeaveRoomRsp", null, s), o.exportSymbol("proto.stream.LeaveTeamNotify", null, s), o.exportSymbol("proto.stream.LeaveTeamReq", null, s), o.exportSymbol("proto.stream.LeaveTeamRsp", null, s), o.exportSymbol("proto.stream.LeaveWatchRoomReq", null, s), o.exportSymbol("proto.stream.LeaveWatchRoomRsp", null, s), o.exportSymbol("proto.stream.LoginReq", null, s), o.exportSymbol("proto.stream.LoginRsp", null, s), o.exportSymbol("proto.stream.LogoutRsp", null, s), o.exportSymbol("proto.stream.NetworkStateNotify", null, s), o.exportSymbol("proto.stream.NetworkStateReq", null, s), o.exportSymbol("proto.stream.NetworkStateRsp", null, s), o.exportSymbol("proto.stream.NoticeJoin", null, s), o.exportSymbol("proto.stream.NoticeLeave", null, s), o.exportSymbol("proto.stream.NoticeRoomProperty", null, s), o.exportSymbol("proto.stream.PlayRoom", null, s), o.exportSymbol("proto.stream.PlayerInfo", null, s), o.exportSymbol("proto.stream.RoomDetail", null, s), o.exportSymbol("proto.stream.RoomFilter", null, s), o.exportSymbol("proto.stream.RoomInfo", null, s), o.exportSymbol("proto.stream.RoomInfoEx", null, s), o.exportSymbol("proto.stream.RoomListSort", null, s), o.exportSymbol("proto.stream.RoomState", null, s), o.exportSymbol("proto.stream.RoomType", null, s), o.exportSymbol("proto.stream.SetReconnectTimeoutReq", null, s), o.exportSymbol("proto.stream.SetReconnectTimeoutRsp", null, s), o.exportSymbol("proto.stream.SetRoomPropertyReq", null, s), o.exportSymbol("proto.stream.SetRoomPropertyRsp", null, s), o.exportSymbol("proto.stream.SortOrder", null, s), o.exportSymbol("proto.stream.TcpProtoHeader", null, s), o.exportSymbol("proto.stream.TeamDetail", null, s), o.exportSymbol("proto.stream.TeamInfo", null, s), o.exportSymbol("proto.stream.TeamMatchCond", null, s), o.exportSymbol("proto.stream.TeamMatchReq", null, s), o.exportSymbol("proto.stream.TeamMatchResultNotify", null, s), o.exportSymbol("proto.stream.TeamMatchRsp", null, s), o.exportSymbol("proto.stream.TeamMatchStartNotify", null, s), o.exportSymbol("proto.stream.UserV2", null, s), o.exportSymbol("proto.stream.UserV2Ex", null, s), o.exportSymbol("proto.stream.WatchInfo", null, s), o.exportSymbol("proto.stream.WatchRoom", null, s), o.exportSymbol("proto.stream.WatchSetting", null, s), o.exportSymbol("proto.stream.keyValue", null, s), proto.stream.LoginReq = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.stream.LoginReq, i.Message), o.DEBUG && !COMPILED && (proto.stream.LoginReq.displayName = "proto.stream.LoginReq"), i.Message.GENERATE_TO_OBJECT && (proto.stream.LoginReq.prototype.toObject = function (e) {
            return proto.stream.LoginReq.toObject(e, this)
        }, proto.stream.LoginReq.toObject = function (e, t) {
            var r = {
                gameid: i.Message.getFieldWithDefault(t, 1, 0),
                appkey: i.Message.getFieldWithDefault(t, 2, ""),
                deviceid: i.Message.getFieldWithDefault(t, 3, ""),
                sign: i.Message.getFieldWithDefault(t, 4, ""),
                sdkver: i.Message.getFieldWithDefault(t, 5, ""),
                vendor: i.Message.getFieldWithDefault(t, 6, 0),
                token: i.Message.getFieldWithDefault(t, 7, "")
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.stream.LoginReq.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.LoginReq;
            return proto.stream.LoginReq.deserializeBinaryFromReader(r, t)
        }, proto.stream.LoginReq.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setGameid(r);
                        break;
                    case 2:
                        r = t.readString();
                        e.setAppkey(r);
                        break;
                    case 3:
                        r = t.readString();
                        e.setDeviceid(r);
                        break;
                    case 4:
                        r = t.readString();
                        e.setSign(r);
                        break;
                    case 5:
                        r = t.readString();
                        e.setSdkver(r);
                        break;
                    case 6:
                        r = t.readUint32();
                        e.setVendor(r);
                        break;
                    case 7:
                        r = t.readString();
                        e.setToken(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.stream.LoginReq.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.LoginReq.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.stream.LoginReq.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getGameid()) && t.writeUint32(1, r), 0 < (r = e.getAppkey()).length && t.writeString(2, r), 0 < (r = e.getDeviceid()).length && t.writeString(3, r), 0 < (r = e.getSign()).length && t.writeString(4, r), 0 < (r = e.getSdkver()).length && t.writeString(5, r), 0 !== (r = e.getVendor()) && t.writeUint32(6, r), 0 < (r = e.getToken()).length && t.writeString(7, r)
        }, proto.stream.LoginReq.prototype.getGameid = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        }, proto.stream.LoginReq.prototype.setGameid = function (e) {
            i.Message.setProto3IntField(this, 1, e)
        }, proto.stream.LoginReq.prototype.getAppkey = function () {
            return i.Message.getFieldWithDefault(this, 2, "")
        }, proto.stream.LoginReq.prototype.setAppkey = function (e) {
            i.Message.setProto3StringField(this, 2, e)
        }, proto.stream.LoginReq.prototype.getDeviceid = function () {
            return i.Message.getFieldWithDefault(this, 3, "")
        }, proto.stream.LoginReq.prototype.setDeviceid = function (e) {
            i.Message.setProto3StringField(this, 3, e)
        }, proto.stream.LoginReq.prototype.getSign = function () {
            return i.Message.getFieldWithDefault(this, 4, "")
        },proto.stream.LoginReq.prototype.setSign = function (e) {
            i.Message.setProto3StringField(this, 4, e)
        },proto.stream.LoginReq.prototype.getSdkver = function () {
            return i.Message.getFieldWithDefault(this, 5, "")
        },proto.stream.LoginReq.prototype.setSdkver = function (e) {
            i.Message.setProto3StringField(this, 5, e)
        },proto.stream.LoginReq.prototype.getVendor = function () {
            return i.Message.getFieldWithDefault(this, 6, 0)
        },proto.stream.LoginReq.prototype.setVendor = function (e) {
            i.Message.setProto3IntField(this, 6, e)
        },proto.stream.LoginReq.prototype.getToken = function () {
            return i.Message.getFieldWithDefault(this, 7, "")
        },proto.stream.LoginReq.prototype.setToken = function (e) {
            i.Message.setProto3StringField(this, 7, e)
        },proto.stream.LoginRsp = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.LoginRsp, i.Message),o.DEBUG && !COMPILED && (proto.stream.LoginRsp.displayName = "proto.stream.LoginRsp"),i.Message.GENERATE_TO_OBJECT && (proto.stream.LoginRsp.prototype.toObject = function (e) {
            return proto.stream.LoginRsp.toObject(e, this)
        }, proto.stream.LoginRsp.toObject = function (e, t) {
            var r = {status: i.Message.getFieldWithDefault(t, 1, 0), roomid: i.Message.getFieldWithDefault(t, 2, "0")};
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.LoginRsp.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.LoginRsp;
            return proto.stream.LoginRsp.deserializeBinaryFromReader(r, t)
        },proto.stream.LoginRsp.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readEnum();
                        e.setStatus(r);
                        break;
                    case 2:
                        r = t.readUint64String();
                        e.setRoomid(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.LoginRsp.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.LoginRsp.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.LoginRsp.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getStatus()) && t.writeEnum(1, r), r = e.getRoomid(), 0 !== parseInt(r, 10) && t.writeUint64String(2, r)
        },proto.stream.LoginRsp.prototype.getStatus = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.LoginRsp.prototype.setStatus = function (e) {
            i.Message.setProto3EnumField(this, 1, e)
        },proto.stream.LoginRsp.prototype.getRoomid = function () {
            return i.Message.getFieldWithDefault(this, 2, "0")
        },proto.stream.LoginRsp.prototype.setRoomid = function (e) {
            i.Message.setProto3StringIntField(this, 2, e)
        },proto.stream.HeartbeatReq = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.HeartbeatReq, i.Message),o.DEBUG && !COMPILED && (proto.stream.HeartbeatReq.displayName = "proto.stream.HeartbeatReq"),i.Message.GENERATE_TO_OBJECT && (proto.stream.HeartbeatReq.prototype.toObject = function (e) {
            return proto.stream.HeartbeatReq.toObject(e, this)
        }, proto.stream.HeartbeatReq.toObject = function (e, t) {
            var r = {gameid: i.Message.getFieldWithDefault(t, 1, 0), roomid: i.Message.getFieldWithDefault(t, 2, "0")};
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.HeartbeatReq.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.HeartbeatReq;
            return proto.stream.HeartbeatReq.deserializeBinaryFromReader(r, t)
        },proto.stream.HeartbeatReq.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setGameid(r);
                        break;
                    case 2:
                        r = t.readUint64String();
                        e.setRoomid(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.HeartbeatReq.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.HeartbeatReq.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.HeartbeatReq.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getGameid()) && t.writeUint32(1, r), r = e.getRoomid(), 0 !== parseInt(r, 10) && t.writeUint64String(2, r)
        },proto.stream.HeartbeatReq.prototype.getGameid = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.HeartbeatReq.prototype.setGameid = function (e) {
            i.Message.setProto3IntField(this, 1, e)
        },proto.stream.HeartbeatReq.prototype.getRoomid = function () {
            return i.Message.getFieldWithDefault(this, 2, "0")
        },proto.stream.HeartbeatReq.prototype.setRoomid = function (e) {
            i.Message.setProto3StringIntField(this, 2, e)
        },proto.stream.HeartbeatRsp = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.HeartbeatRsp, i.Message),o.DEBUG && !COMPILED && (proto.stream.HeartbeatRsp.displayName = "proto.stream.HeartbeatRsp"),i.Message.GENERATE_TO_OBJECT && (proto.stream.HeartbeatRsp.prototype.toObject = function (e) {
            return proto.stream.HeartbeatRsp.toObject(e, this)
        }, proto.stream.HeartbeatRsp.toObject = function (e, t) {
            var r = {gameid: i.Message.getFieldWithDefault(t, 1, 0), gsexist: i.Message.getFieldWithDefault(t, 2, 0)};
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.HeartbeatRsp.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.HeartbeatRsp;
            return proto.stream.HeartbeatRsp.deserializeBinaryFromReader(r, t)
        },proto.stream.HeartbeatRsp.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setGameid(r);
                        break;
                    case 2:
                        r = t.readInt32();
                        e.setGsexist(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.HeartbeatRsp.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.HeartbeatRsp.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.HeartbeatRsp.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getGameid()) && t.writeUint32(1, r), 0 !== (r = e.getGsexist()) && t.writeInt32(2, r)
        },proto.stream.HeartbeatRsp.prototype.getGameid = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.HeartbeatRsp.prototype.setGameid = function (e) {
            i.Message.setProto3IntField(this, 1, e)
        },proto.stream.HeartbeatRsp.prototype.getGsexist = function () {
            return i.Message.getFieldWithDefault(this, 2, 0)
        },proto.stream.HeartbeatRsp.prototype.setGsexist = function (e) {
            i.Message.setProto3IntField(this, 2, e)
        },proto.stream.DisconnectReq = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.DisconnectReq, i.Message),o.DEBUG && !COMPILED && (proto.stream.DisconnectReq.displayName = "proto.stream.DisconnectReq"),i.Message.GENERATE_TO_OBJECT && (proto.stream.DisconnectReq.prototype.toObject = function (e) {
            return proto.stream.DisconnectReq.toObject(e, this)
        }, proto.stream.DisconnectReq.toObject = function (e, t) {
            var r = {
                userid: i.Message.getFieldWithDefault(t, 1, 0),
                gameid: i.Message.getFieldWithDefault(t, 2, 0),
                roomid: i.Message.getFieldWithDefault(t, 3, "0")
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.DisconnectReq.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.DisconnectReq;
            return proto.stream.DisconnectReq.deserializeBinaryFromReader(r, t)
        },proto.stream.DisconnectReq.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setUserid(r);
                        break;
                    case 2:
                        r = t.readUint32();
                        e.setGameid(r);
                        break;
                    case 3:
                        r = t.readUint64String();
                        e.setRoomid(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.DisconnectReq.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.DisconnectReq.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.DisconnectReq.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getUserid()) && t.writeUint32(1, r), 0 !== (r = e.getGameid()) && t.writeUint32(2, r), r = e.getRoomid(), 0 !== parseInt(r, 10) && t.writeUint64String(3, r)
        },proto.stream.DisconnectReq.prototype.getUserid = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.DisconnectReq.prototype.setUserid = function (e) {
            i.Message.setProto3IntField(this, 1, e)
        },proto.stream.DisconnectReq.prototype.getGameid = function () {
            return i.Message.getFieldWithDefault(this, 2, 0)
        },proto.stream.DisconnectReq.prototype.setGameid = function (e) {
            i.Message.setProto3IntField(this, 2, e)
        },proto.stream.DisconnectReq.prototype.getRoomid = function () {
            return i.Message.getFieldWithDefault(this, 3, "0")
        },proto.stream.DisconnectReq.prototype.setRoomid = function (e) {
            i.Message.setProto3StringIntField(this, 3, e)
        },proto.stream.DisconnectRsp = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.DisconnectRsp, i.Message),o.DEBUG && !COMPILED && (proto.stream.DisconnectRsp.displayName = "proto.stream.DisconnectRsp"),i.Message.GENERATE_TO_OBJECT && (proto.stream.DisconnectRsp.prototype.toObject = function (e) {
            return proto.stream.DisconnectRsp.toObject(e, this)
        }, proto.stream.DisconnectRsp.toObject = function (e, t) {
            var r = {status: i.Message.getFieldWithDefault(t, 1, 0)};
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.DisconnectRsp.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.DisconnectRsp;
            return proto.stream.DisconnectRsp.deserializeBinaryFromReader(r, t)
        },proto.stream.DisconnectRsp.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readEnum();
                        e.setStatus(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.DisconnectRsp.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.DisconnectRsp.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.DisconnectRsp.serializeBinaryToWriter = function (e, t) {
            var r;
            0 !== (r = e.getStatus()) && t.writeEnum(1, r)
        },proto.stream.DisconnectRsp.prototype.getStatus = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.DisconnectRsp.prototype.setStatus = function (e) {
            i.Message.setProto3EnumField(this, 1, e)
        },proto.stream.LogoutRsp = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.LogoutRsp, i.Message),o.DEBUG && !COMPILED && (proto.stream.LogoutRsp.displayName = "proto.stream.LogoutRsp"),i.Message.GENERATE_TO_OBJECT && (proto.stream.LogoutRsp.prototype.toObject = function (e) {
            return proto.stream.LogoutRsp.toObject(e, this)
        }, proto.stream.LogoutRsp.toObject = function (e, t) {
            var r = {status: i.Message.getFieldWithDefault(t, 1, 0)};
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.LogoutRsp.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.LogoutRsp;
            return proto.stream.LogoutRsp.deserializeBinaryFromReader(r, t)
        },proto.stream.LogoutRsp.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readEnum();
                        e.setStatus(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.LogoutRsp.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.LogoutRsp.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.LogoutRsp.serializeBinaryToWriter = function (e, t) {
            var r;
            0 !== (r = e.getStatus()) && t.writeEnum(1, r)
        },proto.stream.LogoutRsp.prototype.getStatus = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.LogoutRsp.prototype.setStatus = function (e) {
            i.Message.setProto3EnumField(this, 1, e)
        },proto.stream.SetReconnectTimeoutReq = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.SetReconnectTimeoutReq, i.Message),o.DEBUG && !COMPILED && (proto.stream.SetReconnectTimeoutReq.displayName = "proto.stream.SetReconnectTimeoutReq"),i.Message.GENERATE_TO_OBJECT && (proto.stream.SetReconnectTimeoutReq.prototype.toObject = function (e) {
            return proto.stream.SetReconnectTimeoutReq.toObject(e, this)
        }, proto.stream.SetReconnectTimeoutReq.toObject = function (e, t) {
            var r = {userid: i.Message.getFieldWithDefault(t, 1, 0), timeout: i.Message.getFieldWithDefault(t, 2, 0)};
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.SetReconnectTimeoutReq.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.SetReconnectTimeoutReq;
            return proto.stream.SetReconnectTimeoutReq.deserializeBinaryFromReader(r, t)
        },proto.stream.SetReconnectTimeoutReq.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setUserid(r);
                        break;
                    case 2:
                        r = t.readUint32();
                        e.setTimeout(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.SetReconnectTimeoutReq.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.SetReconnectTimeoutReq.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.SetReconnectTimeoutReq.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getUserid()) && t.writeUint32(1, r), 0 !== (r = e.getTimeout()) && t.writeUint32(2, r)
        },proto.stream.SetReconnectTimeoutReq.prototype.getUserid = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.SetReconnectTimeoutReq.prototype.setUserid = function (e) {
            i.Message.setProto3IntField(this, 1, e)
        },proto.stream.SetReconnectTimeoutReq.prototype.getTimeout = function () {
            return i.Message.getFieldWithDefault(this, 2, 0)
        },proto.stream.SetReconnectTimeoutReq.prototype.setTimeout = function (e) {
            i.Message.setProto3IntField(this, 2, e)
        },proto.stream.SetReconnectTimeoutRsp = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.SetReconnectTimeoutRsp, i.Message),o.DEBUG && !COMPILED && (proto.stream.SetReconnectTimeoutRsp.displayName = "proto.stream.SetReconnectTimeoutRsp"),i.Message.GENERATE_TO_OBJECT && (proto.stream.SetReconnectTimeoutRsp.prototype.toObject = function (e) {
            return proto.stream.SetReconnectTimeoutRsp.toObject(e, this)
        }, proto.stream.SetReconnectTimeoutRsp.toObject = function (e, t) {
            var r = {status: i.Message.getFieldWithDefault(t, 1, 0)};
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.SetReconnectTimeoutRsp.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.SetReconnectTimeoutRsp;
            return proto.stream.SetReconnectTimeoutRsp.deserializeBinaryFromReader(r, t)
        },proto.stream.SetReconnectTimeoutRsp.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readEnum();
                        e.setStatus(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.SetReconnectTimeoutRsp.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.SetReconnectTimeoutRsp.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.SetReconnectTimeoutRsp.serializeBinaryToWriter = function (e, t) {
            var r;
            0 !== (r = e.getStatus()) && t.writeEnum(1, r)
        },proto.stream.SetReconnectTimeoutRsp.prototype.getStatus = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.SetReconnectTimeoutRsp.prototype.setStatus = function (e) {
            i.Message.setProto3EnumField(this, 1, e)
        },proto.stream.keyValue = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.keyValue, i.Message),o.DEBUG && !COMPILED && (proto.stream.keyValue.displayName = "proto.stream.keyValue"),i.Message.GENERATE_TO_OBJECT && (proto.stream.keyValue.prototype.toObject = function (e) {
            return proto.stream.keyValue.toObject(e, this)
        }, proto.stream.keyValue.toObject = function (e, t) {
            var r = {key: i.Message.getFieldWithDefault(t, 1, ""), value: i.Message.getFieldWithDefault(t, 2, "")};
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.keyValue.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.keyValue;
            return proto.stream.keyValue.deserializeBinaryFromReader(r, t)
        },proto.stream.keyValue.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readString();
                        e.setKey(r);
                        break;
                    case 2:
                        r = t.readString();
                        e.setValue(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.keyValue.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.keyValue.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.keyValue.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 < (r = e.getKey()).length && t.writeString(1, r), 0 < (r = e.getValue()).length && t.writeString(2, r)
        },proto.stream.keyValue.prototype.getKey = function () {
            return i.Message.getFieldWithDefault(this, 1, "")
        },proto.stream.keyValue.prototype.setKey = function (e) {
            i.Message.setProto3StringField(this, 1, e)
        },proto.stream.keyValue.prototype.getValue = function () {
            return i.Message.getFieldWithDefault(this, 2, "")
        },proto.stream.keyValue.prototype.setValue = function (e) {
            i.Message.setProto3StringField(this, 2, e)
        },proto.stream.JoinRoomReq = function (e) {
            i.Message.initialize(this, e, 0, -1, proto.stream.JoinRoomReq.repeatedFields_, null)
        },o.inherits(proto.stream.JoinRoomReq, i.Message),o.DEBUG && !COMPILED && (proto.stream.JoinRoomReq.displayName = "proto.stream.JoinRoomReq"),proto.stream.JoinRoomReq.repeatedFields_ = [5],i.Message.GENERATE_TO_OBJECT && (proto.stream.JoinRoomReq.prototype.toObject = function (e) {
            return proto.stream.JoinRoomReq.toObject(e, this)
        }, proto.stream.JoinRoomReq.toObject = function (e, t) {
            var r, o = {
                jointype: i.Message.getFieldWithDefault(t, 1, 0),
                playerinfo: (r = t.getPlayerinfo()) && proto.stream.PlayerInfo.toObject(e, r),
                gameid: i.Message.getFieldWithDefault(t, 3, 0),
                roominfo: (r = t.getRoominfo()) && proto.stream.RoomInfo.toObject(e, r),
                tagsList: i.Message.toObjectList(t.getTagsList(), proto.stream.keyValue.toObject, e),
                cpproto: t.getCpproto_asB64(),
                watchsetting: (r = t.getWatchsetting()) && proto.stream.WatchSetting.toObject(e, r)
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.stream.JoinRoomReq.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.JoinRoomReq;
            return proto.stream.JoinRoomReq.deserializeBinaryFromReader(r, t)
        },proto.stream.JoinRoomReq.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readEnum();
                        e.setJointype(r);
                        break;
                    case 2:
                        r = new proto.stream.PlayerInfo;
                        t.readMessage(r, proto.stream.PlayerInfo.deserializeBinaryFromReader), e.setPlayerinfo(r);
                        break;
                    case 3:
                        r = t.readUint32();
                        e.setGameid(r);
                        break;
                    case 4:
                        r = new proto.stream.RoomInfo;
                        t.readMessage(r, proto.stream.RoomInfo.deserializeBinaryFromReader), e.setRoominfo(r);
                        break;
                    case 5:
                        r = new proto.stream.keyValue;
                        t.readMessage(r, proto.stream.keyValue.deserializeBinaryFromReader), e.addTags(r);
                        break;
                    case 6:
                        r = t.readBytes();
                        e.setCpproto(r);
                        break;
                    case 7:
                        r = new proto.stream.WatchSetting;
                        t.readMessage(r, proto.stream.WatchSetting.deserializeBinaryFromReader), e.setWatchsetting(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.JoinRoomReq.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.JoinRoomReq.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.JoinRoomReq.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getJointype()) && t.writeEnum(1, r), null != (r = e.getPlayerinfo()) && t.writeMessage(2, r, proto.stream.PlayerInfo.serializeBinaryToWriter), 0 !== (r = e.getGameid()) && t.writeUint32(3, r), null != (r = e.getRoominfo()) && t.writeMessage(4, r, proto.stream.RoomInfo.serializeBinaryToWriter), 0 < (r = e.getTagsList()).length && t.writeRepeatedMessage(5, r, proto.stream.keyValue.serializeBinaryToWriter), 0 < (r = e.getCpproto_asU8()).length && t.writeBytes(6, r), null != (r = e.getWatchsetting()) && t.writeMessage(7, r, proto.stream.WatchSetting.serializeBinaryToWriter)
        },proto.stream.JoinRoomReq.prototype.getJointype = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.JoinRoomReq.prototype.setJointype = function (e) {
            i.Message.setProto3EnumField(this, 1, e)
        },proto.stream.JoinRoomReq.prototype.getPlayerinfo = function () {
            return i.Message.getWrapperField(this, proto.stream.PlayerInfo, 2)
        },proto.stream.JoinRoomReq.prototype.setPlayerinfo = function (e) {
            i.Message.setWrapperField(this, 2, e)
        },proto.stream.JoinRoomReq.prototype.clearPlayerinfo = function () {
            this.setPlayerinfo(void 0)
        },proto.stream.JoinRoomReq.prototype.hasPlayerinfo = function () {
            return null != i.Message.getField(this, 2)
        },proto.stream.JoinRoomReq.prototype.getGameid = function () {
            return i.Message.getFieldWithDefault(this, 3, 0)
        },proto.stream.JoinRoomReq.prototype.setGameid = function (e) {
            i.Message.setProto3IntField(this, 3, e)
        },proto.stream.JoinRoomReq.prototype.getRoominfo = function () {
            return i.Message.getWrapperField(this, proto.stream.RoomInfo, 4)
        },proto.stream.JoinRoomReq.prototype.setRoominfo = function (e) {
            i.Message.setWrapperField(this, 4, e)
        },proto.stream.JoinRoomReq.prototype.clearRoominfo = function () {
            this.setRoominfo(void 0)
        },proto.stream.JoinRoomReq.prototype.hasRoominfo = function () {
            return null != i.Message.getField(this, 4)
        },proto.stream.JoinRoomReq.prototype.getTagsList = function () {
            return i.Message.getRepeatedWrapperField(this, proto.stream.keyValue, 5)
        },proto.stream.JoinRoomReq.prototype.setTagsList = function (e) {
            i.Message.setRepeatedWrapperField(this, 5, e)
        },proto.stream.JoinRoomReq.prototype.addTags = function (e, t) {
            return i.Message.addToRepeatedWrapperField(this, 5, e, proto.stream.keyValue, t)
        },proto.stream.JoinRoomReq.prototype.clearTagsList = function () {
            this.setTagsList([])
        },proto.stream.JoinRoomReq.prototype.getCpproto = function () {
            return i.Message.getFieldWithDefault(this, 6, "")
        },proto.stream.JoinRoomReq.prototype.getCpproto_asB64 = function () {
            return i.Message.bytesAsB64(this.getCpproto())
        },proto.stream.JoinRoomReq.prototype.getCpproto_asU8 = function () {
            return i.Message.bytesAsU8(this.getCpproto())
        },proto.stream.JoinRoomReq.prototype.setCpproto = function (e) {
            i.Message.setProto3BytesField(this, 6, e)
        },proto.stream.JoinRoomReq.prototype.getWatchsetting = function () {
            return i.Message.getWrapperField(this, proto.stream.WatchSetting, 7)
        },proto.stream.JoinRoomReq.prototype.setWatchsetting = function (e) {
            i.Message.setWrapperField(this, 7, e)
        },proto.stream.JoinRoomReq.prototype.clearWatchsetting = function () {
            this.setWatchsetting(void 0)
        },proto.stream.JoinRoomReq.prototype.hasWatchsetting = function () {
            return null != i.Message.getField(this, 7)
        },proto.stream.JoinRoomRsp = function (e) {
            i.Message.initialize(this, e, 0, -1, proto.stream.JoinRoomRsp.repeatedFields_, null)
        },o.inherits(proto.stream.JoinRoomRsp, i.Message),o.DEBUG && !COMPILED && (proto.stream.JoinRoomRsp.displayName = "proto.stream.JoinRoomRsp"),proto.stream.JoinRoomRsp.repeatedFields_ = [2],i.Message.GENERATE_TO_OBJECT && (proto.stream.JoinRoomRsp.prototype.toObject = function (e) {
            return proto.stream.JoinRoomRsp.toObject(e, this)
        }, proto.stream.JoinRoomRsp.toObject = function (e, t) {
            var r, o = {
                status: i.Message.getFieldWithDefault(t, 1, 0),
                usersList: i.Message.toObjectList(t.getUsersList(), proto.stream.PlayerInfo.toObject, e),
                roominfo: (r = t.getRoominfo()) && proto.stream.RoomInfo.toObject(e, r),
                bookinfo: (r = t.getBookinfo()) && proto.stream.BookInfo.toObject(e, r),
                cpproto: t.getCpproto_asB64()
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.stream.JoinRoomRsp.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.JoinRoomRsp;
            return proto.stream.JoinRoomRsp.deserializeBinaryFromReader(r, t)
        },proto.stream.JoinRoomRsp.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readEnum();
                        e.setStatus(r);
                        break;
                    case 2:
                        r = new proto.stream.PlayerInfo;
                        t.readMessage(r, proto.stream.PlayerInfo.deserializeBinaryFromReader), e.addUsers(r);
                        break;
                    case 3:
                        r = new proto.stream.RoomInfo;
                        t.readMessage(r, proto.stream.RoomInfo.deserializeBinaryFromReader), e.setRoominfo(r);
                        break;
                    case 4:
                        r = new proto.stream.BookInfo;
                        t.readMessage(r, proto.stream.BookInfo.deserializeBinaryFromReader), e.setBookinfo(r);
                        break;
                    case 5:
                        r = t.readBytes();
                        e.setCpproto(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.JoinRoomRsp.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.JoinRoomRsp.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.JoinRoomRsp.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getStatus()) && t.writeEnum(1, r), 0 < (r = e.getUsersList()).length && t.writeRepeatedMessage(2, r, proto.stream.PlayerInfo.serializeBinaryToWriter), null != (r = e.getRoominfo()) && t.writeMessage(3, r, proto.stream.RoomInfo.serializeBinaryToWriter), null != (r = e.getBookinfo()) && t.writeMessage(4, r, proto.stream.BookInfo.serializeBinaryToWriter), 0 < (r = e.getCpproto_asU8()).length && t.writeBytes(5, r)
        },proto.stream.JoinRoomRsp.prototype.getStatus = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.JoinRoomRsp.prototype.setStatus = function (e) {
            i.Message.setProto3EnumField(this, 1, e)
        },proto.stream.JoinRoomRsp.prototype.getUsersList = function () {
            return i.Message.getRepeatedWrapperField(this, proto.stream.PlayerInfo, 2)
        },proto.stream.JoinRoomRsp.prototype.setUsersList = function (e) {
            i.Message.setRepeatedWrapperField(this, 2, e)
        },proto.stream.JoinRoomRsp.prototype.addUsers = function (e, t) {
            return i.Message.addToRepeatedWrapperField(this, 2, e, proto.stream.PlayerInfo, t)
        },proto.stream.JoinRoomRsp.prototype.clearUsersList = function () {
            this.setUsersList([])
        },proto.stream.JoinRoomRsp.prototype.getRoominfo = function () {
            return i.Message.getWrapperField(this, proto.stream.RoomInfo, 3)
        },proto.stream.JoinRoomRsp.prototype.setRoominfo = function (e) {
            i.Message.setWrapperField(this, 3, e)
        },proto.stream.JoinRoomRsp.prototype.clearRoominfo = function () {
            this.setRoominfo(void 0)
        },proto.stream.JoinRoomRsp.prototype.hasRoominfo = function () {
            return null != i.Message.getField(this, 3)
        },proto.stream.JoinRoomRsp.prototype.getBookinfo = function () {
            return i.Message.getWrapperField(this, proto.stream.BookInfo, 4)
        },proto.stream.JoinRoomRsp.prototype.setBookinfo = function (e) {
            i.Message.setWrapperField(this, 4, e)
        },proto.stream.JoinRoomRsp.prototype.clearBookinfo = function () {
            this.setBookinfo(void 0)
        },proto.stream.JoinRoomRsp.prototype.hasBookinfo = function () {
            return null != i.Message.getField(this, 4)
        },proto.stream.JoinRoomRsp.prototype.getCpproto = function () {
            return i.Message.getFieldWithDefault(this, 5, "")
        },proto.stream.JoinRoomRsp.prototype.getCpproto_asB64 = function () {
            return i.Message.bytesAsB64(this.getCpproto())
        },proto.stream.JoinRoomRsp.prototype.getCpproto_asU8 = function () {
            return i.Message.bytesAsU8(this.getCpproto())
        },proto.stream.JoinRoomRsp.prototype.setCpproto = function (e) {
            i.Message.setProto3BytesField(this, 5, e)
        },proto.stream.PlayerInfo = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.PlayerInfo, i.Message),o.DEBUG && !COMPILED && (proto.stream.PlayerInfo.displayName = "proto.stream.PlayerInfo"),i.Message.GENERATE_TO_OBJECT && (proto.stream.PlayerInfo.prototype.toObject = function (e) {
            return proto.stream.PlayerInfo.toObject(e, this)
        }, proto.stream.PlayerInfo.toObject = function (e, t) {
            var r = {userid: i.Message.getFieldWithDefault(t, 1, 0), userprofile: t.getUserprofile_asB64()};
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.PlayerInfo.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.PlayerInfo;
            return proto.stream.PlayerInfo.deserializeBinaryFromReader(r, t)
        },proto.stream.PlayerInfo.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setUserid(r);
                        break;
                    case 2:
                        r = t.readBytes();
                        e.setUserprofile(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.PlayerInfo.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.PlayerInfo.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.PlayerInfo.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getUserid()) && t.writeUint32(1, r), 0 < (r = e.getUserprofile_asU8()).length && t.writeBytes(2, r)
        },proto.stream.PlayerInfo.prototype.getUserid = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.PlayerInfo.prototype.setUserid = function (e) {
            i.Message.setProto3IntField(this, 1, e)
        },proto.stream.PlayerInfo.prototype.getUserprofile = function () {
            return i.Message.getFieldWithDefault(this, 2, "")
        },proto.stream.PlayerInfo.prototype.getUserprofile_asB64 = function () {
            return i.Message.bytesAsB64(this.getUserprofile())
        },proto.stream.PlayerInfo.prototype.getUserprofile_asU8 = function () {
            return i.Message.bytesAsU8(this.getUserprofile())
        },proto.stream.PlayerInfo.prototype.setUserprofile = function (e) {
            i.Message.setProto3BytesField(this, 2, e)
        },proto.stream.BookInfo = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.BookInfo, i.Message),o.DEBUG && !COMPILED && (proto.stream.BookInfo.displayName = "proto.stream.BookInfo"),i.Message.GENERATE_TO_OBJECT && (proto.stream.BookInfo.prototype.toObject = function (e) {
            return proto.stream.BookInfo.toObject(e, this)
        }, proto.stream.BookInfo.toObject = function (e, t) {
            var r = {
                bookid: i.Message.getFieldWithDefault(t, 1, ""),
                bookkey: i.Message.getFieldWithDefault(t, 2, ""),
                hoteladdr: i.Message.getFieldWithDefault(t, 3, ""),
                wssproxy: i.Message.getFieldWithDefault(t, 4, "")
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.BookInfo.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.BookInfo;
            return proto.stream.BookInfo.deserializeBinaryFromReader(r, t)
        },proto.stream.BookInfo.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readString();
                        e.setBookid(r);
                        break;
                    case 2:
                        r = t.readString();
                        e.setBookkey(r);
                        break;
                    case 3:
                        r = t.readString();
                        e.setHoteladdr(r);
                        break;
                    case 4:
                        r = t.readString();
                        e.setWssproxy(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.BookInfo.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.BookInfo.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.BookInfo.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 < (r = e.getBookid()).length && t.writeString(1, r), 0 < (r = e.getBookkey()).length && t.writeString(2, r), 0 < (r = e.getHoteladdr()).length && t.writeString(3, r), 0 < (r = e.getWssproxy()).length && t.writeString(4, r)
        },proto.stream.BookInfo.prototype.getBookid = function () {
            return i.Message.getFieldWithDefault(this, 1, "")
        },proto.stream.BookInfo.prototype.setBookid = function (e) {
            i.Message.setProto3StringField(this, 1, e)
        },proto.stream.BookInfo.prototype.getBookkey = function () {
            return i.Message.getFieldWithDefault(this, 2, "")
        },proto.stream.BookInfo.prototype.setBookkey = function (e) {
            i.Message.setProto3StringField(this, 2, e)
        },proto.stream.BookInfo.prototype.getHoteladdr = function () {
            return i.Message.getFieldWithDefault(this, 3, "")
        },proto.stream.BookInfo.prototype.setHoteladdr = function (e) {
            i.Message.setProto3StringField(this, 3, e)
        },proto.stream.BookInfo.prototype.getWssproxy = function () {
            return i.Message.getFieldWithDefault(this, 4, "")
        },proto.stream.BookInfo.prototype.setWssproxy = function (e) {
            i.Message.setProto3StringField(this, 4, e)
        },proto.stream.RoomInfo = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.RoomInfo, i.Message),o.DEBUG && !COMPILED && (proto.stream.RoomInfo.displayName = "proto.stream.RoomInfo"),i.Message.GENERATE_TO_OBJECT && (proto.stream.RoomInfo.prototype.toObject = function (e) {
            return proto.stream.RoomInfo.toObject(e, this)
        }, proto.stream.RoomInfo.toObject = function (e, t) {
            var r = {
                roomid: i.Message.getFieldWithDefault(t, 1, "0"),
                roomname: i.Message.getFieldWithDefault(t, 2, ""),
                maxplayer: i.Message.getFieldWithDefault(t, 3, 0),
                mode: i.Message.getFieldWithDefault(t, 4, 0),
                canwatch: i.Message.getFieldWithDefault(t, 5, 0),
                visibility: i.Message.getFieldWithDefault(t, 6, 0),
                roomproperty: t.getRoomproperty_asB64(),
                owner: i.Message.getFieldWithDefault(t, 8, 0),
                state: i.Message.getFieldWithDefault(t, 9, 0)
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.RoomInfo.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.RoomInfo;
            return proto.stream.RoomInfo.deserializeBinaryFromReader(r, t)
        },proto.stream.RoomInfo.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint64String();
                        e.setRoomid(r);
                        break;
                    case 2:
                        r = t.readString();
                        e.setRoomname(r);
                        break;
                    case 3:
                        r = t.readUint32();
                        e.setMaxplayer(r);
                        break;
                    case 4:
                        r = t.readInt32();
                        e.setMode(r);
                        break;
                    case 5:
                        r = t.readInt32();
                        e.setCanwatch(r);
                        break;
                    case 6:
                        r = t.readInt32();
                        e.setVisibility(r);
                        break;
                    case 7:
                        r = t.readBytes();
                        e.setRoomproperty(r);
                        break;
                    case 8:
                        r = t.readUint32();
                        e.setOwner(r);
                        break;
                    case 9:
                        r = t.readEnum();
                        e.setState(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.RoomInfo.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.RoomInfo.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.RoomInfo.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            r = e.getRoomid(), 0 !== parseInt(r, 10) && t.writeUint64String(1, r), 0 < (r = e.getRoomname()).length && t.writeString(2, r), 0 !== (r = e.getMaxplayer()) && t.writeUint32(3, r), 0 !== (r = e.getMode()) && t.writeInt32(4, r), 0 !== (r = e.getCanwatch()) && t.writeInt32(5, r), 0 !== (r = e.getVisibility()) && t.writeInt32(6, r), 0 < (r = e.getRoomproperty_asU8()).length && t.writeBytes(7, r), 0 !== (r = e.getOwner()) && t.writeUint32(8, r), 0 !== (r = e.getState()) && t.writeEnum(9, r)
        },proto.stream.RoomInfo.prototype.getRoomid = function () {
            return i.Message.getFieldWithDefault(this, 1, "0")
        },proto.stream.RoomInfo.prototype.setRoomid = function (e) {
            i.Message.setProto3StringIntField(this, 1, e)
        },proto.stream.RoomInfo.prototype.getRoomname = function () {
            return i.Message.getFieldWithDefault(this, 2, "")
        },proto.stream.RoomInfo.prototype.setRoomname = function (e) {
            i.Message.setProto3StringField(this, 2, e)
        },proto.stream.RoomInfo.prototype.getMaxplayer = function () {
            return i.Message.getFieldWithDefault(this, 3, 0)
        },proto.stream.RoomInfo.prototype.setMaxplayer = function (e) {
            i.Message.setProto3IntField(this, 3, e)
        },proto.stream.RoomInfo.prototype.getMode = function () {
            return i.Message.getFieldWithDefault(this, 4, 0)
        },proto.stream.RoomInfo.prototype.setMode = function (e) {
            i.Message.setProto3IntField(this, 4, e)
        },proto.stream.RoomInfo.prototype.getCanwatch = function () {
            return i.Message.getFieldWithDefault(this, 5, 0)
        },proto.stream.RoomInfo.prototype.setCanwatch = function (e) {
            i.Message.setProto3IntField(this, 5, e)
        },proto.stream.RoomInfo.prototype.getVisibility = function () {
            return i.Message.getFieldWithDefault(this, 6, 0)
        },proto.stream.RoomInfo.prototype.setVisibility = function (e) {
            i.Message.setProto3IntField(this, 6, e)
        },proto.stream.RoomInfo.prototype.getRoomproperty = function () {
            return i.Message.getFieldWithDefault(this, 7, "")
        },proto.stream.RoomInfo.prototype.getRoomproperty_asB64 = function () {
            return i.Message.bytesAsB64(this.getRoomproperty())
        },proto.stream.RoomInfo.prototype.getRoomproperty_asU8 = function () {
            return i.Message.bytesAsU8(this.getRoomproperty())
        },proto.stream.RoomInfo.prototype.setRoomproperty = function (e) {
            i.Message.setProto3BytesField(this, 7, e)
        },proto.stream.RoomInfo.prototype.getOwner = function () {
            return i.Message.getFieldWithDefault(this, 8, 0)
        },proto.stream.RoomInfo.prototype.setOwner = function (e) {
            i.Message.setProto3IntField(this, 8, e)
        },proto.stream.RoomInfo.prototype.getState = function () {
            return i.Message.getFieldWithDefault(this, 9, 0)
        },proto.stream.RoomInfo.prototype.setState = function (e) {
            i.Message.setProto3EnumField(this, 9, e)
        },proto.stream.NoticeJoin = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.NoticeJoin, i.Message),o.DEBUG && !COMPILED && (proto.stream.NoticeJoin.displayName = "proto.stream.NoticeJoin"),i.Message.GENERATE_TO_OBJECT && (proto.stream.NoticeJoin.prototype.toObject = function (e) {
            return proto.stream.NoticeJoin.toObject(e, this)
        }, proto.stream.NoticeJoin.toObject = function (e, t) {
            var r, o = {user: (r = t.getUser()) && proto.stream.PlayerInfo.toObject(e, r)};
            return e && (o.$jspbMessageInstance = t), o
        }),proto.stream.NoticeJoin.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.NoticeJoin;
            return proto.stream.NoticeJoin.deserializeBinaryFromReader(r, t)
        },proto.stream.NoticeJoin.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = new proto.stream.PlayerInfo;
                        t.readMessage(r, proto.stream.PlayerInfo.deserializeBinaryFromReader), e.setUser(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.NoticeJoin.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.NoticeJoin.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.NoticeJoin.serializeBinaryToWriter = function (e, t) {
            var r;
            null != (r = e.getUser()) && t.writeMessage(1, r, proto.stream.PlayerInfo.serializeBinaryToWriter)
        },proto.stream.NoticeJoin.prototype.getUser = function () {
            return i.Message.getWrapperField(this, proto.stream.PlayerInfo, 1)
        },proto.stream.NoticeJoin.prototype.setUser = function (e) {
            i.Message.setWrapperField(this, 1, e)
        },proto.stream.NoticeJoin.prototype.clearUser = function () {
            this.setUser(void 0)
        },proto.stream.NoticeJoin.prototype.hasUser = function () {
            return null != i.Message.getField(this, 1)
        },proto.stream.NoticeLeave = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.NoticeLeave, i.Message),o.DEBUG && !COMPILED && (proto.stream.NoticeLeave.displayName = "proto.stream.NoticeLeave"),i.Message.GENERATE_TO_OBJECT && (proto.stream.NoticeLeave.prototype.toObject = function (e) {
            return proto.stream.NoticeLeave.toObject(e, this)
        }, proto.stream.NoticeLeave.toObject = function (e, t) {
            var r = {
                userid: i.Message.getFieldWithDefault(t, 1, 0),
                roomid: i.Message.getFieldWithDefault(t, 2, "0"),
                owner: i.Message.getFieldWithDefault(t, 3, 0),
                cpproto: t.getCpproto_asB64()
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.NoticeLeave.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.NoticeLeave;
            return proto.stream.NoticeLeave.deserializeBinaryFromReader(r, t)
        },proto.stream.NoticeLeave.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setUserid(r);
                        break;
                    case 2:
                        r = t.readUint64String();
                        e.setRoomid(r);
                        break;
                    case 3:
                        r = t.readUint32();
                        e.setOwner(r);
                        break;
                    case 4:
                        r = t.readBytes();
                        e.setCpproto(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.NoticeLeave.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.NoticeLeave.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.NoticeLeave.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getUserid()) && t.writeUint32(1, r), r = e.getRoomid(), 0 !== parseInt(r, 10) && t.writeUint64String(2, r), 0 !== (r = e.getOwner()) && t.writeUint32(3, r), 0 < (r = e.getCpproto_asU8()).length && t.writeBytes(4, r)
        },proto.stream.NoticeLeave.prototype.getUserid = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.NoticeLeave.prototype.setUserid = function (e) {
            i.Message.setProto3IntField(this, 1, e)
        },proto.stream.NoticeLeave.prototype.getRoomid = function () {
            return i.Message.getFieldWithDefault(this, 2, "0")
        },proto.stream.NoticeLeave.prototype.setRoomid = function (e) {
            i.Message.setProto3StringIntField(this, 2, e)
        },proto.stream.NoticeLeave.prototype.getOwner = function () {
            return i.Message.getFieldWithDefault(this, 3, 0)
        },proto.stream.NoticeLeave.prototype.setOwner = function (e) {
            i.Message.setProto3IntField(this, 3, e)
        },proto.stream.NoticeLeave.prototype.getCpproto = function () {
            return i.Message.getFieldWithDefault(this, 4, "")
        },proto.stream.NoticeLeave.prototype.getCpproto_asB64 = function () {
            return i.Message.bytesAsB64(this.getCpproto())
        },proto.stream.NoticeLeave.prototype.getCpproto_asU8 = function () {
            return i.Message.bytesAsU8(this.getCpproto())
        },proto.stream.NoticeLeave.prototype.setCpproto = function (e) {
            i.Message.setProto3BytesField(this, 4, e)
        },proto.stream.JoinOverReq = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.JoinOverReq, i.Message),o.DEBUG && !COMPILED && (proto.stream.JoinOverReq.displayName = "proto.stream.JoinOverReq"),i.Message.GENERATE_TO_OBJECT && (proto.stream.JoinOverReq.prototype.toObject = function (e) {
            return proto.stream.JoinOverReq.toObject(e, this)
        }, proto.stream.JoinOverReq.toObject = function (e, t) {
            var r = {
                roomid: i.Message.getFieldWithDefault(t, 1, "0"),
                gameid: i.Message.getFieldWithDefault(t, 2, 0),
                cpproto: t.getCpproto_asB64(),
                userid: i.Message.getFieldWithDefault(t, 4, 0)
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.JoinOverReq.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.JoinOverReq;
            return proto.stream.JoinOverReq.deserializeBinaryFromReader(r, t)
        },proto.stream.JoinOverReq.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint64String();
                        e.setRoomid(r);
                        break;
                    case 2:
                        r = t.readUint32();
                        e.setGameid(r);
                        break;
                    case 3:
                        r = t.readBytes();
                        e.setCpproto(r);
                        break;
                    case 4:
                        r = t.readUint32();
                        e.setUserid(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.JoinOverReq.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.JoinOverReq.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.JoinOverReq.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            r = e.getRoomid(), 0 !== parseInt(r, 10) && t.writeUint64String(1, r), 0 !== (r = e.getGameid()) && t.writeUint32(2, r), 0 < (r = e.getCpproto_asU8()).length && t.writeBytes(3, r), 0 !== (r = e.getUserid()) && t.writeUint32(4, r)
        },proto.stream.JoinOverReq.prototype.getRoomid = function () {
            return i.Message.getFieldWithDefault(this, 1, "0")
        },proto.stream.JoinOverReq.prototype.setRoomid = function (e) {
            i.Message.setProto3StringIntField(this, 1, e)
        },proto.stream.JoinOverReq.prototype.getGameid = function () {
            return i.Message.getFieldWithDefault(this, 2, 0)
        },proto.stream.JoinOverReq.prototype.setGameid = function (e) {
            i.Message.setProto3IntField(this, 2, e)
        },proto.stream.JoinOverReq.prototype.getCpproto = function () {
            return i.Message.getFieldWithDefault(this, 3, "")
        },proto.stream.JoinOverReq.prototype.getCpproto_asB64 = function () {
            return i.Message.bytesAsB64(this.getCpproto())
        },proto.stream.JoinOverReq.prototype.getCpproto_asU8 = function () {
            return i.Message.bytesAsU8(this.getCpproto())
        },proto.stream.JoinOverReq.prototype.setCpproto = function (e) {
            i.Message.setProto3BytesField(this, 3, e)
        },proto.stream.JoinOverReq.prototype.getUserid = function () {
            return i.Message.getFieldWithDefault(this, 4, 0)
        },proto.stream.JoinOverReq.prototype.setUserid = function (e) {
            i.Message.setProto3IntField(this, 4, e)
        },proto.stream.JoinOverRsp = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.JoinOverRsp, i.Message),o.DEBUG && !COMPILED && (proto.stream.JoinOverRsp.displayName = "proto.stream.JoinOverRsp"),i.Message.GENERATE_TO_OBJECT && (proto.stream.JoinOverRsp.prototype.toObject = function (e) {
            return proto.stream.JoinOverRsp.toObject(e, this)
        }, proto.stream.JoinOverRsp.toObject = function (e, t) {
            var r = {status: i.Message.getFieldWithDefault(t, 1, 0), cpproto: t.getCpproto_asB64()};
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.JoinOverRsp.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.JoinOverRsp;
            return proto.stream.JoinOverRsp.deserializeBinaryFromReader(r, t)
        },proto.stream.JoinOverRsp.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readEnum();
                        e.setStatus(r);
                        break;
                    case 2:
                        r = t.readBytes();
                        e.setCpproto(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.JoinOverRsp.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.JoinOverRsp.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.JoinOverRsp.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getStatus()) && t.writeEnum(1, r), 0 < (r = e.getCpproto_asU8()).length && t.writeBytes(2, r)
        },proto.stream.JoinOverRsp.prototype.getStatus = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.JoinOverRsp.prototype.setStatus = function (e) {
            i.Message.setProto3EnumField(this, 1, e)
        },proto.stream.JoinOverRsp.prototype.getCpproto = function () {
            return i.Message.getFieldWithDefault(this, 2, "")
        },proto.stream.JoinOverRsp.prototype.getCpproto_asB64 = function () {
            return i.Message.bytesAsB64(this.getCpproto())
        },proto.stream.JoinOverRsp.prototype.getCpproto_asU8 = function () {
            return i.Message.bytesAsU8(this.getCpproto())
        },proto.stream.JoinOverRsp.prototype.setCpproto = function (e) {
            i.Message.setProto3BytesField(this, 2, e)
        },proto.stream.JoinOverNotify = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.JoinOverNotify, i.Message),o.DEBUG && !COMPILED && (proto.stream.JoinOverNotify.displayName = "proto.stream.JoinOverNotify"),i.Message.GENERATE_TO_OBJECT && (proto.stream.JoinOverNotify.prototype.toObject = function (e) {
            return proto.stream.JoinOverNotify.toObject(e, this)
        }, proto.stream.JoinOverNotify.toObject = function (e, t) {
            var r = {
                srcuserid: i.Message.getFieldWithDefault(t, 1, 0),
                roomid: i.Message.getFieldWithDefault(t, 2, "0"),
                cpproto: t.getCpproto_asB64()
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.JoinOverNotify.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.JoinOverNotify;
            return proto.stream.JoinOverNotify.deserializeBinaryFromReader(r, t)
        },proto.stream.JoinOverNotify.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setSrcuserid(r);
                        break;
                    case 2:
                        r = t.readUint64String();
                        e.setRoomid(r);
                        break;
                    case 3:
                        r = t.readBytes();
                        e.setCpproto(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.JoinOverNotify.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.JoinOverNotify.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.JoinOverNotify.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getSrcuserid()) && t.writeUint32(1, r), r = e.getRoomid(), 0 !== parseInt(r, 10) && t.writeUint64String(2, r), 0 < (r = e.getCpproto_asU8()).length && t.writeBytes(3, r)
        },proto.stream.JoinOverNotify.prototype.getSrcuserid = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.JoinOverNotify.prototype.setSrcuserid = function (e) {
            i.Message.setProto3IntField(this, 1, e)
        },proto.stream.JoinOverNotify.prototype.getRoomid = function () {
            return i.Message.getFieldWithDefault(this, 2, "0")
        },proto.stream.JoinOverNotify.prototype.setRoomid = function (e) {
            i.Message.setProto3StringIntField(this, 2, e)
        },proto.stream.JoinOverNotify.prototype.getCpproto = function () {
            return i.Message.getFieldWithDefault(this, 3, "")
        },proto.stream.JoinOverNotify.prototype.getCpproto_asB64 = function () {
            return i.Message.bytesAsB64(this.getCpproto())
        },proto.stream.JoinOverNotify.prototype.getCpproto_asU8 = function () {
            return i.Message.bytesAsU8(this.getCpproto())
        },proto.stream.JoinOverNotify.prototype.setCpproto = function (e) {
            i.Message.setProto3BytesField(this, 3, e)
        },proto.stream.JoinOpenReq = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.JoinOpenReq, i.Message),o.DEBUG && !COMPILED && (proto.stream.JoinOpenReq.displayName = "proto.stream.JoinOpenReq"),i.Message.GENERATE_TO_OBJECT && (proto.stream.JoinOpenReq.prototype.toObject = function (e) {
            return proto.stream.JoinOpenReq.toObject(e, this)
        }, proto.stream.JoinOpenReq.toObject = function (e, t) {
            var r = {
                roomid: i.Message.getFieldWithDefault(t, 1, "0"),
                gameid: i.Message.getFieldWithDefault(t, 2, 0),
                userid: i.Message.getFieldWithDefault(t, 3, 0),
                cpproto: t.getCpproto_asB64()
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.JoinOpenReq.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.JoinOpenReq;
            return proto.stream.JoinOpenReq.deserializeBinaryFromReader(r, t)
        },proto.stream.JoinOpenReq.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint64String();
                        e.setRoomid(r);
                        break;
                    case 2:
                        r = t.readUint32();
                        e.setGameid(r);
                        break;
                    case 3:
                        r = t.readUint32();
                        e.setUserid(r);
                        break;
                    case 4:
                        r = t.readBytes();
                        e.setCpproto(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.JoinOpenReq.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.JoinOpenReq.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.JoinOpenReq.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            r = e.getRoomid(), 0 !== parseInt(r, 10) && t.writeUint64String(1, r), 0 !== (r = e.getGameid()) && t.writeUint32(2, r), 0 !== (r = e.getUserid()) && t.writeUint32(3, r), 0 < (r = e.getCpproto_asU8()).length && t.writeBytes(4, r)
        },proto.stream.JoinOpenReq.prototype.getRoomid = function () {
            return i.Message.getFieldWithDefault(this, 1, "0")
        },proto.stream.JoinOpenReq.prototype.setRoomid = function (e) {
            i.Message.setProto3StringIntField(this, 1, e)
        },proto.stream.JoinOpenReq.prototype.getGameid = function () {
            return i.Message.getFieldWithDefault(this, 2, 0)
        },proto.stream.JoinOpenReq.prototype.setGameid = function (e) {
            i.Message.setProto3IntField(this, 2, e)
        },proto.stream.JoinOpenReq.prototype.getUserid = function () {
            return i.Message.getFieldWithDefault(this, 3, 0)
        },proto.stream.JoinOpenReq.prototype.setUserid = function (e) {
            i.Message.setProto3IntField(this, 3, e)
        },proto.stream.JoinOpenReq.prototype.getCpproto = function () {
            return i.Message.getFieldWithDefault(this, 4, "")
        },proto.stream.JoinOpenReq.prototype.getCpproto_asB64 = function () {
            return i.Message.bytesAsB64(this.getCpproto())
        },proto.stream.JoinOpenReq.prototype.getCpproto_asU8 = function () {
            return i.Message.bytesAsU8(this.getCpproto())
        },proto.stream.JoinOpenReq.prototype.setCpproto = function (e) {
            i.Message.setProto3BytesField(this, 4, e)
        },proto.stream.JoinOpenRsp = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.JoinOpenRsp, i.Message),o.DEBUG && !COMPILED && (proto.stream.JoinOpenRsp.displayName = "proto.stream.JoinOpenRsp"),i.Message.GENERATE_TO_OBJECT && (proto.stream.JoinOpenRsp.prototype.toObject = function (e) {
            return proto.stream.JoinOpenRsp.toObject(e, this)
        }, proto.stream.JoinOpenRsp.toObject = function (e, t) {
            var r = {status: i.Message.getFieldWithDefault(t, 1, 0), cpproto: t.getCpproto_asB64()};
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.JoinOpenRsp.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.JoinOpenRsp;
            return proto.stream.JoinOpenRsp.deserializeBinaryFromReader(r, t)
        },proto.stream.JoinOpenRsp.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readEnum();
                        e.setStatus(r);
                        break;
                    case 2:
                        r = t.readBytes();
                        e.setCpproto(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.JoinOpenRsp.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.JoinOpenRsp.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.JoinOpenRsp.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getStatus()) && t.writeEnum(1, r), 0 < (r = e.getCpproto_asU8()).length && t.writeBytes(2, r)
        },proto.stream.JoinOpenRsp.prototype.getStatus = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.JoinOpenRsp.prototype.setStatus = function (e) {
            i.Message.setProto3EnumField(this, 1, e)
        },proto.stream.JoinOpenRsp.prototype.getCpproto = function () {
            return i.Message.getFieldWithDefault(this, 2, "")
        },proto.stream.JoinOpenRsp.prototype.getCpproto_asB64 = function () {
            return i.Message.bytesAsB64(this.getCpproto())
        },proto.stream.JoinOpenRsp.prototype.getCpproto_asU8 = function () {
            return i.Message.bytesAsU8(this.getCpproto())
        },proto.stream.JoinOpenRsp.prototype.setCpproto = function (e) {
            i.Message.setProto3BytesField(this, 2, e)
        },proto.stream.JoinOpenNotify = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.JoinOpenNotify, i.Message),o.DEBUG && !COMPILED && (proto.stream.JoinOpenNotify.displayName = "proto.stream.JoinOpenNotify"),i.Message.GENERATE_TO_OBJECT && (proto.stream.JoinOpenNotify.prototype.toObject = function (e) {
            return proto.stream.JoinOpenNotify.toObject(e, this)
        }, proto.stream.JoinOpenNotify.toObject = function (e, t) {
            var r = {
                userid: i.Message.getFieldWithDefault(t, 1, 0),
                roomid: i.Message.getFieldWithDefault(t, 2, "0"),
                cpproto: t.getCpproto_asB64()
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.JoinOpenNotify.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.JoinOpenNotify;
            return proto.stream.JoinOpenNotify.deserializeBinaryFromReader(r, t)
        },proto.stream.JoinOpenNotify.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setUserid(r);
                        break;
                    case 2:
                        r = t.readUint64String();
                        e.setRoomid(r);
                        break;
                    case 3:
                        r = t.readBytes();
                        e.setCpproto(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.JoinOpenNotify.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.JoinOpenNotify.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.JoinOpenNotify.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getUserid()) && t.writeUint32(1, r), r = e.getRoomid(), 0 !== parseInt(r, 10) && t.writeUint64String(2, r), 0 < (r = e.getCpproto_asU8()).length && t.writeBytes(3, r)
        },proto.stream.JoinOpenNotify.prototype.getUserid = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.JoinOpenNotify.prototype.setUserid = function (e) {
            i.Message.setProto3IntField(this, 1, e)
        },proto.stream.JoinOpenNotify.prototype.getRoomid = function () {
            return i.Message.getFieldWithDefault(this, 2, "0")
        },proto.stream.JoinOpenNotify.prototype.setRoomid = function (e) {
            i.Message.setProto3StringIntField(this, 2, e)
        },proto.stream.JoinOpenNotify.prototype.getCpproto = function () {
            return i.Message.getFieldWithDefault(this, 3, "")
        },proto.stream.JoinOpenNotify.prototype.getCpproto_asB64 = function () {
            return i.Message.bytesAsB64(this.getCpproto())
        },proto.stream.JoinOpenNotify.prototype.getCpproto_asU8 = function () {
            return i.Message.bytesAsU8(this.getCpproto())
        },proto.stream.JoinOpenNotify.prototype.setCpproto = function (e) {
            i.Message.setProto3BytesField(this, 3, e)
        },proto.stream.LeaveRoomReq = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.LeaveRoomReq, i.Message),o.DEBUG && !COMPILED && (proto.stream.LeaveRoomReq.displayName = "proto.stream.LeaveRoomReq"),i.Message.GENERATE_TO_OBJECT && (proto.stream.LeaveRoomReq.prototype.toObject = function (e) {
            return proto.stream.LeaveRoomReq.toObject(e, this)
        }, proto.stream.LeaveRoomReq.toObject = function (e, t) {
            var r = {
                userid: i.Message.getFieldWithDefault(t, 1, 0),
                gameid: i.Message.getFieldWithDefault(t, 2, 0),
                roomid: i.Message.getFieldWithDefault(t, 3, "0"),
                cpproto: t.getCpproto_asB64()
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.LeaveRoomReq.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.LeaveRoomReq;
            return proto.stream.LeaveRoomReq.deserializeBinaryFromReader(r, t)
        },proto.stream.LeaveRoomReq.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setUserid(r);
                        break;
                    case 2:
                        r = t.readUint32();
                        e.setGameid(r);
                        break;
                    case 3:
                        r = t.readUint64String();
                        e.setRoomid(r);
                        break;
                    case 4:
                        r = t.readBytes();
                        e.setCpproto(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.LeaveRoomReq.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.LeaveRoomReq.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.LeaveRoomReq.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getUserid()) && t.writeUint32(1, r), 0 !== (r = e.getGameid()) && t.writeUint32(2, r), r = e.getRoomid(), 0 !== parseInt(r, 10) && t.writeUint64String(3, r), 0 < (r = e.getCpproto_asU8()).length && t.writeBytes(4, r)
        },proto.stream.LeaveRoomReq.prototype.getUserid = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.LeaveRoomReq.prototype.setUserid = function (e) {
            i.Message.setProto3IntField(this, 1, e)
        },proto.stream.LeaveRoomReq.prototype.getGameid = function () {
            return i.Message.getFieldWithDefault(this, 2, 0)
        },proto.stream.LeaveRoomReq.prototype.setGameid = function (e) {
            i.Message.setProto3IntField(this, 2, e)
        },proto.stream.LeaveRoomReq.prototype.getRoomid = function () {
            return i.Message.getFieldWithDefault(this, 3, "0")
        },proto.stream.LeaveRoomReq.prototype.setRoomid = function (e) {
            i.Message.setProto3StringIntField(this, 3, e)
        },proto.stream.LeaveRoomReq.prototype.getCpproto = function () {
            return i.Message.getFieldWithDefault(this, 4, "")
        },proto.stream.LeaveRoomReq.prototype.getCpproto_asB64 = function () {
            return i.Message.bytesAsB64(this.getCpproto())
        },proto.stream.LeaveRoomReq.prototype.getCpproto_asU8 = function () {
            return i.Message.bytesAsU8(this.getCpproto())
        },proto.stream.LeaveRoomReq.prototype.setCpproto = function (e) {
            i.Message.setProto3BytesField(this, 4, e)
        },proto.stream.LeaveRoomRsp = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.LeaveRoomRsp, i.Message),o.DEBUG && !COMPILED && (proto.stream.LeaveRoomRsp.displayName = "proto.stream.LeaveRoomRsp"),i.Message.GENERATE_TO_OBJECT && (proto.stream.LeaveRoomRsp.prototype.toObject = function (e) {
            return proto.stream.LeaveRoomRsp.toObject(e, this)
        }, proto.stream.LeaveRoomRsp.toObject = function (e, t) {
            var r = {
                status: i.Message.getFieldWithDefault(t, 1, 0),
                roomid: i.Message.getFieldWithDefault(t, 2, "0"),
                userid: i.Message.getFieldWithDefault(t, 3, 0),
                cpproto: t.getCpproto_asB64()
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.LeaveRoomRsp.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.LeaveRoomRsp;
            return proto.stream.LeaveRoomRsp.deserializeBinaryFromReader(r, t)
        },proto.stream.LeaveRoomRsp.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readEnum();
                        e.setStatus(r);
                        break;
                    case 2:
                        r = t.readUint64String();
                        e.setRoomid(r);
                        break;
                    case 3:
                        r = t.readUint32();
                        e.setUserid(r);
                        break;
                    case 4:
                        r = t.readBytes();
                        e.setCpproto(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.LeaveRoomRsp.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.LeaveRoomRsp.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.LeaveRoomRsp.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getStatus()) && t.writeEnum(1, r), r = e.getRoomid(), 0 !== parseInt(r, 10) && t.writeUint64String(2, r), 0 !== (r = e.getUserid()) && t.writeUint32(3, r), 0 < (r = e.getCpproto_asU8()).length && t.writeBytes(4, r)
        },proto.stream.LeaveRoomRsp.prototype.getStatus = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.LeaveRoomRsp.prototype.setStatus = function (e) {
            i.Message.setProto3EnumField(this, 1, e)
        },proto.stream.LeaveRoomRsp.prototype.getRoomid = function () {
            return i.Message.getFieldWithDefault(this, 2, "0")
        },proto.stream.LeaveRoomRsp.prototype.setRoomid = function (e) {
            i.Message.setProto3StringIntField(this, 2, e)
        },proto.stream.LeaveRoomRsp.prototype.getUserid = function () {
            return i.Message.getFieldWithDefault(this, 3, 0)
        },proto.stream.LeaveRoomRsp.prototype.setUserid = function (e) {
            i.Message.setProto3IntField(this, 3, e)
        },proto.stream.LeaveRoomRsp.prototype.getCpproto = function () {
            return i.Message.getFieldWithDefault(this, 4, "")
        },proto.stream.LeaveRoomRsp.prototype.getCpproto_asB64 = function () {
            return i.Message.bytesAsB64(this.getCpproto())
        },proto.stream.LeaveRoomRsp.prototype.getCpproto_asU8 = function () {
            return i.Message.bytesAsU8(this.getCpproto())
        },proto.stream.LeaveRoomRsp.prototype.setCpproto = function (e) {
            i.Message.setProto3BytesField(this, 4, e)
        },proto.stream.TcpProtoHeader = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.TcpProtoHeader, i.Message),o.DEBUG && !COMPILED && (proto.stream.TcpProtoHeader.displayName = "proto.stream.TcpProtoHeader"),i.Message.GENERATE_TO_OBJECT && (proto.stream.TcpProtoHeader.prototype.toObject = function (e) {
            return proto.stream.TcpProtoHeader.toObject(e, this)
        }, proto.stream.TcpProtoHeader.toObject = function (e, t) {
            var r = {
                size: i.Message.getFieldWithDefault(t, 1, 0),
                seq: i.Message.getFieldWithDefault(t, 2, 0),
                cmd: i.Message.getFieldWithDefault(t, 3, 0),
                version: i.Message.getFieldWithDefault(t, 4, 0),
                userid: i.Message.getFieldWithDefault(t, 5, 0)
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.TcpProtoHeader.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.TcpProtoHeader;
            return proto.stream.TcpProtoHeader.deserializeBinaryFromReader(r, t)
        },proto.stream.TcpProtoHeader.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setSize(r);
                        break;
                    case 2:
                        r = t.readUint32();
                        e.setSeq(r);
                        break;
                    case 3:
                        r = t.readUint32();
                        e.setCmd(r);
                        break;
                    case 4:
                        r = t.readUint32();
                        e.setVersion(r);
                        break;
                    case 5:
                        r = t.readUint32();
                        e.setUserid(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.TcpProtoHeader.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.TcpProtoHeader.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.TcpProtoHeader.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getSize()) && t.writeUint32(1, r), 0 !== (r = e.getSeq()) && t.writeUint32(2, r), 0 !== (r = e.getCmd()) && t.writeUint32(3, r), 0 !== (r = e.getVersion()) && t.writeUint32(4, r), 0 !== (r = e.getUserid()) && t.writeUint32(5, r)
        },proto.stream.TcpProtoHeader.prototype.getSize = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.TcpProtoHeader.prototype.setSize = function (e) {
            i.Message.setProto3IntField(this, 1, e)
        },proto.stream.TcpProtoHeader.prototype.getSeq = function () {
            return i.Message.getFieldWithDefault(this, 2, 0)
        },proto.stream.TcpProtoHeader.prototype.setSeq = function (e) {
            i.Message.setProto3IntField(this, 2, e)
        },proto.stream.TcpProtoHeader.prototype.getCmd = function () {
            return i.Message.getFieldWithDefault(this, 3, 0)
        },proto.stream.TcpProtoHeader.prototype.setCmd = function (e) {
            i.Message.setProto3IntField(this, 3, e)
        },proto.stream.TcpProtoHeader.prototype.getVersion = function () {
            return i.Message.getFieldWithDefault(this, 4, 0)
        },proto.stream.TcpProtoHeader.prototype.setVersion = function (e) {
            i.Message.setProto3IntField(this, 4, e)
        },proto.stream.TcpProtoHeader.prototype.getUserid = function () {
            return i.Message.getFieldWithDefault(this, 5, 0)
        },proto.stream.TcpProtoHeader.prototype.setUserid = function (e) {
            i.Message.setProto3IntField(this, 5, e)
        },proto.stream.ConnDetailV2 = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.ConnDetailV2, i.Message),o.DEBUG && !COMPILED && (proto.stream.ConnDetailV2.displayName = "proto.stream.ConnDetailV2"),i.Message.GENERATE_TO_OBJECT && (proto.stream.ConnDetailV2.prototype.toObject = function (e) {
            return proto.stream.ConnDetailV2.toObject(e, this)
        }, proto.stream.ConnDetailV2.toObject = function (e, t) {
            var r = {
                userid: i.Message.getFieldWithDefault(t, 1, 0),
                gameid: i.Message.getFieldWithDefault(t, 2, 0),
                fieldid: i.Message.getFieldWithDefault(t, 3, 0),
                roomid: i.Message.getFieldWithDefault(t, 4, "0"),
                heartbeattime: i.Message.getFieldWithDefault(t, 5, "0"),
                version: i.Message.getFieldWithDefault(t, 6, 0)
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.ConnDetailV2.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.ConnDetailV2;
            return proto.stream.ConnDetailV2.deserializeBinaryFromReader(r, t)
        },proto.stream.ConnDetailV2.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setUserid(r);
                        break;
                    case 2:
                        r = t.readUint32();
                        e.setGameid(r);
                        break;
                    case 3:
                        r = t.readUint32();
                        e.setFieldid(r);
                        break;
                    case 4:
                        r = t.readUint64String();
                        e.setRoomid(r);
                        break;
                    case 5:
                        r = t.readUint64String();
                        e.setHeartbeattime(r);
                        break;
                    case 6:
                        r = t.readUint32();
                        e.setVersion(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.ConnDetailV2.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.ConnDetailV2.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.ConnDetailV2.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getUserid()) && t.writeUint32(1, r), 0 !== (r = e.getGameid()) && t.writeUint32(2, r), 0 !== (r = e.getFieldid()) && t.writeUint32(3, r), r = e.getRoomid(), 0 !== parseInt(r, 10) && t.writeUint64String(4, r), r = e.getHeartbeattime(), 0 !== parseInt(r, 10) && t.writeUint64String(5, r), 0 !== (r = e.getVersion()) && t.writeUint32(6, r)
        },proto.stream.ConnDetailV2.prototype.getUserid = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.ConnDetailV2.prototype.setUserid = function (e) {
            i.Message.setProto3IntField(this, 1, e)
        },proto.stream.ConnDetailV2.prototype.getGameid = function () {
            return i.Message.getFieldWithDefault(this, 2, 0)
        },proto.stream.ConnDetailV2.prototype.setGameid = function (e) {
            i.Message.setProto3IntField(this, 2, e)
        },proto.stream.ConnDetailV2.prototype.getFieldid = function () {
            return i.Message.getFieldWithDefault(this, 3, 0)
        },proto.stream.ConnDetailV2.prototype.setFieldid = function (e) {
            i.Message.setProto3IntField(this, 3, e)
        },proto.stream.ConnDetailV2.prototype.getRoomid = function () {
            return i.Message.getFieldWithDefault(this, 4, "0")
        },proto.stream.ConnDetailV2.prototype.setRoomid = function (e) {
            i.Message.setProto3StringIntField(this, 4, e)
        },proto.stream.ConnDetailV2.prototype.getHeartbeattime = function () {
            return i.Message.getFieldWithDefault(this, 5, "0")
        },proto.stream.ConnDetailV2.prototype.setHeartbeattime = function (e) {
            i.Message.setProto3StringIntField(this, 5, e)
        },proto.stream.ConnDetailV2.prototype.getVersion = function () {
            return i.Message.getFieldWithDefault(this, 6, 0)
        },proto.stream.ConnDetailV2.prototype.setVersion = function (e) {
            i.Message.setProto3IntField(this, 6, e)
        },proto.stream.UserV2 = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.UserV2, i.Message),o.DEBUG && !COMPILED && (proto.stream.UserV2.displayName = "proto.stream.UserV2"),i.Message.GENERATE_TO_OBJECT && (proto.stream.UserV2.prototype.toObject = function (e) {
            return proto.stream.UserV2.toObject(e, this)
        }, proto.stream.UserV2.toObject = function (e, t) {
            var r = {
                userId: i.Message.getFieldWithDefault(t, 1, 0),
                gameId: i.Message.getFieldWithDefault(t, 2, 0),
                versionSdk: i.Message.getFieldWithDefault(t, 3, 0),
                connectionId: i.Message.getFieldWithDefault(t, 4, "0"),
                serviceId: i.Message.getFieldWithDefault(t, 5, 0),
                roomId: i.Message.getFieldWithDefault(t, 6, "0"),
                deviceId: i.Message.getFieldWithDefault(t, 7, ""),
                connStatus: i.Message.getFieldWithDefault(t, 8, 0),
                reconnectTimeout: i.Message.getFieldWithDefault(t, 9, 0),
                teamId: i.Message.getFieldWithDefault(t, 10, "0")
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.UserV2.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.UserV2;
            return proto.stream.UserV2.deserializeBinaryFromReader(r, t)
        },proto.stream.UserV2.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setUserId(r);
                        break;
                    case 2:
                        r = t.readUint32();
                        e.setGameId(r);
                        break;
                    case 3:
                        r = t.readUint32();
                        e.setVersionSdk(r);
                        break;
                    case 4:
                        r = t.readUint64String();
                        e.setConnectionId(r);
                        break;
                    case 5:
                        r = t.readUint32();
                        e.setServiceId(r);
                        break;
                    case 6:
                        r = t.readUint64String();
                        e.setRoomId(r);
                        break;
                    case 7:
                        r = t.readString();
                        e.setDeviceId(r);
                        break;
                    case 8:
                        r = t.readUint32();
                        e.setConnStatus(r);
                        break;
                    case 9:
                        r = t.readUint32();
                        e.setReconnectTimeout(r);
                        break;
                    case 10:
                        r = t.readUint64String();
                        e.setTeamId(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.UserV2.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.UserV2.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.UserV2.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getUserId()) && t.writeUint32(1, r), 0 !== (r = e.getGameId()) && t.writeUint32(2, r), 0 !== (r = e.getVersionSdk()) && t.writeUint32(3, r), r = e.getConnectionId(), 0 !== parseInt(r, 10) && t.writeUint64String(4, r), 0 !== (r = e.getServiceId()) && t.writeUint32(5, r), r = e.getRoomId(), 0 !== parseInt(r, 10) && t.writeUint64String(6, r), 0 < (r = e.getDeviceId()).length && t.writeString(7, r), 0 !== (r = e.getConnStatus()) && t.writeUint32(8, r), 0 !== (r = e.getReconnectTimeout()) && t.writeUint32(9, r), r = e.getTeamId(), 0 !== parseInt(r, 10) && t.writeUint64String(10, r)
        },proto.stream.UserV2.prototype.getUserId = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.UserV2.prototype.setUserId = function (e) {
            i.Message.setProto3IntField(this, 1, e)
        },proto.stream.UserV2.prototype.getGameId = function () {
            return i.Message.getFieldWithDefault(this, 2, 0)
        },proto.stream.UserV2.prototype.setGameId = function (e) {
            i.Message.setProto3IntField(this, 2, e)
        },proto.stream.UserV2.prototype.getVersionSdk = function () {
            return i.Message.getFieldWithDefault(this, 3, 0)
        },proto.stream.UserV2.prototype.setVersionSdk = function (e) {
            i.Message.setProto3IntField(this, 3, e)
        },proto.stream.UserV2.prototype.getConnectionId = function () {
            return i.Message.getFieldWithDefault(this, 4, "0")
        },proto.stream.UserV2.prototype.setConnectionId = function (e) {
            i.Message.setProto3StringIntField(this, 4, e)
        },proto.stream.UserV2.prototype.getServiceId = function () {
            return i.Message.getFieldWithDefault(this, 5, 0)
        },proto.stream.UserV2.prototype.setServiceId = function (e) {
            i.Message.setProto3IntField(this, 5, e)
        },proto.stream.UserV2.prototype.getRoomId = function () {
            return i.Message.getFieldWithDefault(this, 6, "0")
        },proto.stream.UserV2.prototype.setRoomId = function (e) {
            i.Message.setProto3StringIntField(this, 6, e)
        },proto.stream.UserV2.prototype.getDeviceId = function () {
            return i.Message.getFieldWithDefault(this, 7, "")
        },proto.stream.UserV2.prototype.setDeviceId = function (e) {
            i.Message.setProto3StringField(this, 7, e)
        },proto.stream.UserV2.prototype.getConnStatus = function () {
            return i.Message.getFieldWithDefault(this, 8, 0)
        },proto.stream.UserV2.prototype.setConnStatus = function (e) {
            i.Message.setProto3IntField(this, 8, e)
        },proto.stream.UserV2.prototype.getReconnectTimeout = function () {
            return i.Message.getFieldWithDefault(this, 9, 0)
        },proto.stream.UserV2.prototype.setReconnectTimeout = function (e) {
            i.Message.setProto3IntField(this, 9, e)
        },proto.stream.UserV2.prototype.getTeamId = function () {
            return i.Message.getFieldWithDefault(this, 10, "0")
        },proto.stream.UserV2.prototype.setTeamId = function (e) {
            i.Message.setProto3StringIntField(this, 10, e)
        },proto.stream.UserV2Ex = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.UserV2Ex, i.Message),o.DEBUG && !COMPILED && (proto.stream.UserV2Ex.displayName = "proto.stream.UserV2Ex"),i.Message.GENERATE_TO_OBJECT && (proto.stream.UserV2Ex.prototype.toObject = function (e) {
            return proto.stream.UserV2Ex.toObject(e, this)
        }, proto.stream.UserV2Ex.toObject = function (e, t) {
            var r = {
                userId: i.Message.getFieldWithDefault(t, 1, 0),
                gameId: i.Message.getFieldWithDefault(t, 2, 0),
                sdkver: i.Message.getFieldWithDefault(t, 3, ""),
                vendor: i.Message.getFieldWithDefault(t, 4, 0),
                cpproto: t.getCpproto_asB64()
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.UserV2Ex.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.UserV2Ex;
            return proto.stream.UserV2Ex.deserializeBinaryFromReader(r, t)
        },proto.stream.UserV2Ex.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setUserId(r);
                        break;
                    case 2:
                        r = t.readUint32();
                        e.setGameId(r);
                        break;
                    case 3:
                        r = t.readString();
                        e.setSdkver(r);
                        break;
                    case 4:
                        r = t.readUint32();
                        e.setVendor(r);
                        break;
                    case 5:
                        r = t.readBytes();
                        e.setCpproto(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.UserV2Ex.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.UserV2Ex.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.UserV2Ex.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getUserId()) && t.writeUint32(1, r), 0 !== (r = e.getGameId()) && t.writeUint32(2, r), 0 < (r = e.getSdkver()).length && t.writeString(3, r), 0 !== (r = e.getVendor()) && t.writeUint32(4, r), 0 < (r = e.getCpproto_asU8()).length && t.writeBytes(5, r)
        },proto.stream.UserV2Ex.prototype.getUserId = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.UserV2Ex.prototype.setUserId = function (e) {
            i.Message.setProto3IntField(this, 1, e)
        },proto.stream.UserV2Ex.prototype.getGameId = function () {
            return i.Message.getFieldWithDefault(this, 2, 0)
        },proto.stream.UserV2Ex.prototype.setGameId = function (e) {
            i.Message.setProto3IntField(this, 2, e)
        },proto.stream.UserV2Ex.prototype.getSdkver = function () {
            return i.Message.getFieldWithDefault(this, 3, "")
        },proto.stream.UserV2Ex.prototype.setSdkver = function (e) {
            i.Message.setProto3StringField(this, 3, e)
        },proto.stream.UserV2Ex.prototype.getVendor = function () {
            return i.Message.getFieldWithDefault(this, 4, 0)
        },proto.stream.UserV2Ex.prototype.setVendor = function (e) {
            i.Message.setProto3IntField(this, 4, e)
        },proto.stream.UserV2Ex.prototype.getCpproto = function () {
            return i.Message.getFieldWithDefault(this, 5, "")
        },proto.stream.UserV2Ex.prototype.getCpproto_asB64 = function () {
            return i.Message.bytesAsB64(this.getCpproto())
        },proto.stream.UserV2Ex.prototype.getCpproto_asU8 = function () {
            return i.Message.bytesAsU8(this.getCpproto())
        },proto.stream.UserV2Ex.prototype.setCpproto = function (e) {
            i.Message.setProto3BytesField(this, 5, e)
        },proto.stream.NetworkStateReq = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.NetworkStateReq, i.Message),o.DEBUG && !COMPILED && (proto.stream.NetworkStateReq.displayName = "proto.stream.NetworkStateReq"),i.Message.GENERATE_TO_OBJECT && (proto.stream.NetworkStateReq.prototype.toObject = function (e) {
            return proto.stream.NetworkStateReq.toObject(e, this)
        }, proto.stream.NetworkStateReq.toObject = function (e, t) {
            var r = {
                gameid: i.Message.getFieldWithDefault(t, 1, 0),
                roomid: i.Message.getFieldWithDefault(t, 2, "0"),
                userid: i.Message.getFieldWithDefault(t, 3, 0),
                state: i.Message.getFieldWithDefault(t, 4, 0)
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.NetworkStateReq.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.NetworkStateReq;
            return proto.stream.NetworkStateReq.deserializeBinaryFromReader(r, t)
        },proto.stream.NetworkStateReq.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setGameid(r);
                        break;
                    case 2:
                        r = t.readUint64String();
                        e.setRoomid(r);
                        break;
                    case 3:
                        r = t.readUint32();
                        e.setUserid(r);
                        break;
                    case 4:
                        r = t.readUint32();
                        e.setState(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.NetworkStateReq.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.NetworkStateReq.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.NetworkStateReq.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getGameid()) && t.writeUint32(1, r), r = e.getRoomid(), 0 !== parseInt(r, 10) && t.writeUint64String(2, r), 0 !== (r = e.getUserid()) && t.writeUint32(3, r), 0 !== (r = e.getState()) && t.writeUint32(4, r)
        },proto.stream.NetworkStateReq.prototype.getGameid = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.NetworkStateReq.prototype.setGameid = function (e) {
            i.Message.setProto3IntField(this, 1, e)
        },proto.stream.NetworkStateReq.prototype.getRoomid = function () {
            return i.Message.getFieldWithDefault(this, 2, "0")
        },proto.stream.NetworkStateReq.prototype.setRoomid = function (e) {
            i.Message.setProto3StringIntField(this, 2, e)
        },proto.stream.NetworkStateReq.prototype.getUserid = function () {
            return i.Message.getFieldWithDefault(this, 3, 0)
        },proto.stream.NetworkStateReq.prototype.setUserid = function (e) {
            i.Message.setProto3IntField(this, 3, e)
        },proto.stream.NetworkStateReq.prototype.getState = function () {
            return i.Message.getFieldWithDefault(this, 4, 0)
        },proto.stream.NetworkStateReq.prototype.setState = function (e) {
            i.Message.setProto3IntField(this, 4, e)
        },proto.stream.NetworkStateRsp = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.NetworkStateRsp, i.Message),o.DEBUG && !COMPILED && (proto.stream.NetworkStateRsp.displayName = "proto.stream.NetworkStateRsp"),i.Message.GENERATE_TO_OBJECT && (proto.stream.NetworkStateRsp.prototype.toObject = function (e) {
            return proto.stream.NetworkStateRsp.toObject(e, this)
        }, proto.stream.NetworkStateRsp.toObject = function (e, t) {
            var r = {status: i.Message.getFieldWithDefault(t, 1, 0)};
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.NetworkStateRsp.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.NetworkStateRsp;
            return proto.stream.NetworkStateRsp.deserializeBinaryFromReader(r, t)
        },proto.stream.NetworkStateRsp.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readEnum();
                        e.setStatus(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.NetworkStateRsp.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.NetworkStateRsp.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.NetworkStateRsp.serializeBinaryToWriter = function (e, t) {
            var r;
            0 !== (r = e.getStatus()) && t.writeEnum(1, r)
        },proto.stream.NetworkStateRsp.prototype.getStatus = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.NetworkStateRsp.prototype.setStatus = function (e) {
            i.Message.setProto3EnumField(this, 1, e)
        },proto.stream.NetworkStateNotify = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.NetworkStateNotify, i.Message),o.DEBUG && !COMPILED && (proto.stream.NetworkStateNotify.displayName = "proto.stream.NetworkStateNotify"),i.Message.GENERATE_TO_OBJECT && (proto.stream.NetworkStateNotify.prototype.toObject = function (e) {
            return proto.stream.NetworkStateNotify.toObject(e, this)
        }, proto.stream.NetworkStateNotify.toObject = function (e, t) {
            var r = {
                roomid: i.Message.getFieldWithDefault(t, 1, "0"),
                userid: i.Message.getFieldWithDefault(t, 2, 0),
                state: i.Message.getFieldWithDefault(t, 3, 0),
                owner: i.Message.getFieldWithDefault(t, 4, 0)
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.NetworkStateNotify.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.NetworkStateNotify;
            return proto.stream.NetworkStateNotify.deserializeBinaryFromReader(r, t)
        },proto.stream.NetworkStateNotify.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint64String();
                        e.setRoomid(r);
                        break;
                    case 2:
                        r = t.readUint32();
                        e.setUserid(r);
                        break;
                    case 3:
                        r = t.readUint32();
                        e.setState(r);
                        break;
                    case 4:
                        r = t.readUint32();
                        e.setOwner(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.NetworkStateNotify.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.NetworkStateNotify.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.NetworkStateNotify.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            r = e.getRoomid(), 0 !== parseInt(r, 10) && t.writeUint64String(1, r), 0 !== (r = e.getUserid()) && t.writeUint32(2, r), 0 !== (r = e.getState()) && t.writeUint32(3, r), 0 !== (r = e.getOwner()) && t.writeUint32(4, r)
        },proto.stream.NetworkStateNotify.prototype.getRoomid = function () {
            return i.Message.getFieldWithDefault(this, 1, "0")
        },proto.stream.NetworkStateNotify.prototype.setRoomid = function (e) {
            i.Message.setProto3StringIntField(this, 1, e)
        },proto.stream.NetworkStateNotify.prototype.getUserid = function () {
            return i.Message.getFieldWithDefault(this, 2, 0)
        },proto.stream.NetworkStateNotify.prototype.setUserid = function (e) {
            i.Message.setProto3IntField(this, 2, e)
        },proto.stream.NetworkStateNotify.prototype.getState = function () {
            return i.Message.getFieldWithDefault(this, 3, 0)
        },proto.stream.NetworkStateNotify.prototype.setState = function (e) {
            i.Message.setProto3IntField(this, 3, e)
        },proto.stream.NetworkStateNotify.prototype.getOwner = function () {
            return i.Message.getFieldWithDefault(this, 4, 0)
        },proto.stream.NetworkStateNotify.prototype.setOwner = function (e) {
            i.Message.setProto3IntField(this, 4, e)
        },proto.stream.CreateRoomReq = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.CreateRoomReq, i.Message),o.DEBUG && !COMPILED && (proto.stream.CreateRoomReq.displayName = "proto.stream.CreateRoomReq"),i.Message.GENERATE_TO_OBJECT && (proto.stream.CreateRoomReq.prototype.toObject = function (e) {
            return proto.stream.CreateRoomReq.toObject(e, this)
        }, proto.stream.CreateRoomReq.toObject = function (e, t) {
            var r, o = {
                playerinfo: (r = t.getPlayerinfo()) && proto.stream.PlayerInfo.toObject(e, r),
                gameid: i.Message.getFieldWithDefault(t, 2, 0),
                roominfo: (r = t.getRoominfo()) && proto.stream.RoomInfo.toObject(e, r),
                watchsetting: (r = t.getWatchsetting()) && proto.stream.WatchSetting.toObject(e, r)
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.stream.CreateRoomReq.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.CreateRoomReq;
            return proto.stream.CreateRoomReq.deserializeBinaryFromReader(r, t)
        },proto.stream.CreateRoomReq.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = new proto.stream.PlayerInfo;
                        t.readMessage(r, proto.stream.PlayerInfo.deserializeBinaryFromReader), e.setPlayerinfo(r);
                        break;
                    case 2:
                        r = t.readUint32();
                        e.setGameid(r);
                        break;
                    case 3:
                        r = new proto.stream.RoomInfo;
                        t.readMessage(r, proto.stream.RoomInfo.deserializeBinaryFromReader), e.setRoominfo(r);
                        break;
                    case 4:
                        r = new proto.stream.WatchSetting;
                        t.readMessage(r, proto.stream.WatchSetting.deserializeBinaryFromReader), e.setWatchsetting(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.CreateRoomReq.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.CreateRoomReq.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.CreateRoomReq.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            null != (r = e.getPlayerinfo()) && t.writeMessage(1, r, proto.stream.PlayerInfo.serializeBinaryToWriter), 0 !== (r = e.getGameid()) && t.writeUint32(2, r), null != (r = e.getRoominfo()) && t.writeMessage(3, r, proto.stream.RoomInfo.serializeBinaryToWriter), null != (r = e.getWatchsetting()) && t.writeMessage(4, r, proto.stream.WatchSetting.serializeBinaryToWriter)
        },proto.stream.CreateRoomReq.prototype.getPlayerinfo = function () {
            return i.Message.getWrapperField(this, proto.stream.PlayerInfo, 1)
        },proto.stream.CreateRoomReq.prototype.setPlayerinfo = function (e) {
            i.Message.setWrapperField(this, 1, e)
        },proto.stream.CreateRoomReq.prototype.clearPlayerinfo = function () {
            this.setPlayerinfo(void 0)
        },proto.stream.CreateRoomReq.prototype.hasPlayerinfo = function () {
            return null != i.Message.getField(this, 1)
        },proto.stream.CreateRoomReq.prototype.getGameid = function () {
            return i.Message.getFieldWithDefault(this, 2, 0)
        },proto.stream.CreateRoomReq.prototype.setGameid = function (e) {
            i.Message.setProto3IntField(this, 2, e)
        },proto.stream.CreateRoomReq.prototype.getRoominfo = function () {
            return i.Message.getWrapperField(this, proto.stream.RoomInfo, 3)
        },proto.stream.CreateRoomReq.prototype.setRoominfo = function (e) {
            i.Message.setWrapperField(this, 3, e)
        },proto.stream.CreateRoomReq.prototype.clearRoominfo = function () {
            this.setRoominfo(void 0)
        },proto.stream.CreateRoomReq.prototype.hasRoominfo = function () {
            return null != i.Message.getField(this, 3)
        },proto.stream.CreateRoomReq.prototype.getWatchsetting = function () {
            return i.Message.getWrapperField(this, proto.stream.WatchSetting, 4)
        },proto.stream.CreateRoomReq.prototype.setWatchsetting = function (e) {
            i.Message.setWrapperField(this, 4, e)
        },proto.stream.CreateRoomReq.prototype.clearWatchsetting = function () {
            this.setWatchsetting(void 0)
        },proto.stream.CreateRoomReq.prototype.hasWatchsetting = function () {
            return null != i.Message.getField(this, 4)
        },proto.stream.CreateRoomRsp = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.CreateRoomRsp, i.Message),o.DEBUG && !COMPILED && (proto.stream.CreateRoomRsp.displayName = "proto.stream.CreateRoomRsp"),i.Message.GENERATE_TO_OBJECT && (proto.stream.CreateRoomRsp.prototype.toObject = function (e) {
            return proto.stream.CreateRoomRsp.toObject(e, this)
        }, proto.stream.CreateRoomRsp.toObject = function (e, t) {
            var r, o = {
                status: i.Message.getFieldWithDefault(t, 1, 0),
                roomid: i.Message.getFieldWithDefault(t, 2, "0"),
                bookinfo: (r = t.getBookinfo()) && proto.stream.BookInfo.toObject(e, r),
                owner: i.Message.getFieldWithDefault(t, 4, 0)
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.stream.CreateRoomRsp.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.CreateRoomRsp;
            return proto.stream.CreateRoomRsp.deserializeBinaryFromReader(r, t)
        },proto.stream.CreateRoomRsp.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readEnum();
                        e.setStatus(r);
                        break;
                    case 2:
                        r = t.readUint64String();
                        e.setRoomid(r);
                        break;
                    case 3:
                        r = new proto.stream.BookInfo;
                        t.readMessage(r, proto.stream.BookInfo.deserializeBinaryFromReader), e.setBookinfo(r);
                        break;
                    case 4:
                        r = t.readUint32();
                        e.setOwner(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.CreateRoomRsp.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.CreateRoomRsp.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.CreateRoomRsp.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getStatus()) && t.writeEnum(1, r), r = e.getRoomid(), 0 !== parseInt(r, 10) && t.writeUint64String(2, r), null != (r = e.getBookinfo()) && t.writeMessage(3, r, proto.stream.BookInfo.serializeBinaryToWriter), 0 !== (r = e.getOwner()) && t.writeUint32(4, r)
        },proto.stream.CreateRoomRsp.prototype.getStatus = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.CreateRoomRsp.prototype.setStatus = function (e) {
            i.Message.setProto3EnumField(this, 1, e)
        },proto.stream.CreateRoomRsp.prototype.getRoomid = function () {
            return i.Message.getFieldWithDefault(this, 2, "0")
        },proto.stream.CreateRoomRsp.prototype.setRoomid = function (e) {
            i.Message.setProto3StringIntField(this, 2, e)
        },proto.stream.CreateRoomRsp.prototype.getBookinfo = function () {
            return i.Message.getWrapperField(this, proto.stream.BookInfo, 3)
        },proto.stream.CreateRoomRsp.prototype.setBookinfo = function (e) {
            i.Message.setWrapperField(this, 3, e)
        },proto.stream.CreateRoomRsp.prototype.clearBookinfo = function () {
            this.setBookinfo(void 0)
        },proto.stream.CreateRoomRsp.prototype.hasBookinfo = function () {
            return null != i.Message.getField(this, 3)
        },proto.stream.CreateRoomRsp.prototype.getOwner = function () {
            return i.Message.getFieldWithDefault(this, 4, 0)
        },proto.stream.CreateRoomRsp.prototype.setOwner = function (e) {
            i.Message.setProto3IntField(this, 4, e)
        },proto.stream.GetRoomListReq = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.GetRoomListReq, i.Message),o.DEBUG && !COMPILED && (proto.stream.GetRoomListReq.displayName = "proto.stream.GetRoomListReq"),i.Message.GENERATE_TO_OBJECT && (proto.stream.GetRoomListReq.prototype.toObject = function (e) {
            return proto.stream.GetRoomListReq.toObject(e, this)
        }, proto.stream.GetRoomListReq.toObject = function (e, t) {
            var r, o = {
                gameid: i.Message.getFieldWithDefault(t, 1, 0),
                roomfilter: (r = t.getRoomfilter()) && proto.stream.RoomFilter.toObject(e, r)
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.stream.GetRoomListReq.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.GetRoomListReq;
            return proto.stream.GetRoomListReq.deserializeBinaryFromReader(r, t)
        },proto.stream.GetRoomListReq.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setGameid(r);
                        break;
                    case 2:
                        r = new proto.stream.RoomFilter;
                        t.readMessage(r, proto.stream.RoomFilter.deserializeBinaryFromReader), e.setRoomfilter(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.GetRoomListReq.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.GetRoomListReq.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.GetRoomListReq.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getGameid()) && t.writeUint32(1, r), null != (r = e.getRoomfilter()) && t.writeMessage(2, r, proto.stream.RoomFilter.serializeBinaryToWriter)
        },proto.stream.GetRoomListReq.prototype.getGameid = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.GetRoomListReq.prototype.setGameid = function (e) {
            i.Message.setProto3IntField(this, 1, e)
        },proto.stream.GetRoomListReq.prototype.getRoomfilter = function () {
            return i.Message.getWrapperField(this, proto.stream.RoomFilter, 2)
        },proto.stream.GetRoomListReq.prototype.setRoomfilter = function (e) {
            i.Message.setWrapperField(this, 2, e)
        },proto.stream.GetRoomListReq.prototype.clearRoomfilter = function () {
            this.setRoomfilter(void 0)
        },proto.stream.GetRoomListReq.prototype.hasRoomfilter = function () {
            return null != i.Message.getField(this, 2)
        },proto.stream.RoomFilter = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.RoomFilter, i.Message),o.DEBUG && !COMPILED && (proto.stream.RoomFilter.displayName = "proto.stream.RoomFilter"),i.Message.GENERATE_TO_OBJECT && (proto.stream.RoomFilter.prototype.toObject = function (e) {
            return proto.stream.RoomFilter.toObject(e, this)
        }, proto.stream.RoomFilter.toObject = function (e, t) {
            var r = {
                maxplayer: i.Message.getFieldWithDefault(t, 1, 0),
                mode: i.Message.getFieldWithDefault(t, 2, 0),
                canwatch: i.Message.getFieldWithDefault(t, 3, 0),
                roomproperty: t.getRoomproperty_asB64(),
                full: i.Message.getFieldWithDefault(t, 5, 0),
                state: i.Message.getFieldWithDefault(t, 6, 0)
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.RoomFilter.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.RoomFilter;
            return proto.stream.RoomFilter.deserializeBinaryFromReader(r, t)
        },proto.stream.RoomFilter.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setMaxplayer(r);
                        break;
                    case 2:
                        r = t.readInt32();
                        e.setMode(r);
                        break;
                    case 3:
                        r = t.readInt32();
                        e.setCanwatch(r);
                        break;
                    case 4:
                        r = t.readBytes();
                        e.setRoomproperty(r);
                        break;
                    case 5:
                        r = t.readInt32();
                        e.setFull(r);
                        break;
                    case 6:
                        r = t.readEnum();
                        e.setState(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.RoomFilter.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.RoomFilter.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.RoomFilter.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getMaxplayer()) && t.writeUint32(1, r), 0 !== (r = e.getMode()) && t.writeInt32(2, r), 0 !== (r = e.getCanwatch()) && t.writeInt32(3, r), 0 < (r = e.getRoomproperty_asU8()).length && t.writeBytes(4, r), 0 !== (r = e.getFull()) && t.writeInt32(5, r), 0 !== (r = e.getState()) && t.writeEnum(6, r)
        },proto.stream.RoomFilter.prototype.getMaxplayer = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.RoomFilter.prototype.setMaxplayer = function (e) {
            i.Message.setProto3IntField(this, 1, e)
        },proto.stream.RoomFilter.prototype.getMode = function () {
            return i.Message.getFieldWithDefault(this, 2, 0)
        },proto.stream.RoomFilter.prototype.setMode = function (e) {
            i.Message.setProto3IntField(this, 2, e)
        },proto.stream.RoomFilter.prototype.getCanwatch = function () {
            return i.Message.getFieldWithDefault(this, 3, 0)
        },proto.stream.RoomFilter.prototype.setCanwatch = function (e) {
            i.Message.setProto3IntField(this, 3, e)
        },proto.stream.RoomFilter.prototype.getRoomproperty = function () {
            return i.Message.getFieldWithDefault(this, 4, "")
        },proto.stream.RoomFilter.prototype.getRoomproperty_asB64 = function () {
            return i.Message.bytesAsB64(this.getRoomproperty())
        },proto.stream.RoomFilter.prototype.getRoomproperty_asU8 = function () {
            return i.Message.bytesAsU8(this.getRoomproperty())
        },proto.stream.RoomFilter.prototype.setRoomproperty = function (e) {
            i.Message.setProto3BytesField(this, 4, e)
        },proto.stream.RoomFilter.prototype.getFull = function () {
            return i.Message.getFieldWithDefault(this, 5, 0)
        },proto.stream.RoomFilter.prototype.setFull = function (e) {
            i.Message.setProto3IntField(this, 5, e)
        },proto.stream.RoomFilter.prototype.getState = function () {
            return i.Message.getFieldWithDefault(this, 6, 0)
        },proto.stream.RoomFilter.prototype.setState = function (e) {
            i.Message.setProto3EnumField(this, 6, e)
        },proto.stream.GetRoomListRsp = function (e) {
            i.Message.initialize(this, e, 0, -1, proto.stream.GetRoomListRsp.repeatedFields_, null)
        },o.inherits(proto.stream.GetRoomListRsp, i.Message),o.DEBUG && !COMPILED && (proto.stream.GetRoomListRsp.displayName = "proto.stream.GetRoomListRsp"),proto.stream.GetRoomListRsp.repeatedFields_ = [2],i.Message.GENERATE_TO_OBJECT && (proto.stream.GetRoomListRsp.prototype.toObject = function (e) {
            return proto.stream.GetRoomListRsp.toObject(e, this)
        }, proto.stream.GetRoomListRsp.toObject = function (e, t) {
            var r = {
                status: i.Message.getFieldWithDefault(t, 1, 0),
                roominfoList: i.Message.toObjectList(t.getRoominfoList(), proto.stream.RoomInfo.toObject, e)
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.GetRoomListRsp.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.GetRoomListRsp;
            return proto.stream.GetRoomListRsp.deserializeBinaryFromReader(r, t)
        },proto.stream.GetRoomListRsp.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readEnum();
                        e.setStatus(r);
                        break;
                    case 2:
                        r = new proto.stream.RoomInfo;
                        t.readMessage(r, proto.stream.RoomInfo.deserializeBinaryFromReader), e.addRoominfo(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.GetRoomListRsp.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.GetRoomListRsp.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.GetRoomListRsp.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getStatus()) && t.writeEnum(1, r), 0 < (r = e.getRoominfoList()).length && t.writeRepeatedMessage(2, r, proto.stream.RoomInfo.serializeBinaryToWriter)
        },proto.stream.GetRoomListRsp.prototype.getStatus = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.GetRoomListRsp.prototype.setStatus = function (e) {
            i.Message.setProto3EnumField(this, 1, e)
        },proto.stream.GetRoomListRsp.prototype.getRoominfoList = function () {
            return i.Message.getRepeatedWrapperField(this, proto.stream.RoomInfo, 2)
        },proto.stream.GetRoomListRsp.prototype.setRoominfoList = function (e) {
            i.Message.setRepeatedWrapperField(this, 2, e)
        },proto.stream.GetRoomListRsp.prototype.addRoominfo = function (e, t) {
            return i.Message.addToRepeatedWrapperField(this, 2, e, proto.stream.RoomInfo, t)
        },proto.stream.GetRoomListRsp.prototype.clearRoominfoList = function () {
            this.setRoominfoList([])
        },proto.stream.GetRoomListExReq = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.GetRoomListExReq, i.Message),o.DEBUG && !COMPILED && (proto.stream.GetRoomListExReq.displayName = "proto.stream.GetRoomListExReq"),i.Message.GENERATE_TO_OBJECT && (proto.stream.GetRoomListExReq.prototype.toObject = function (e) {
            return proto.stream.GetRoomListExReq.toObject(e, this)
        }, proto.stream.GetRoomListExReq.toObject = function (e, t) {
            var r, o = {
                gameid: i.Message.getFieldWithDefault(t, 1, 0),
                roomfilter: (r = t.getRoomfilter()) && proto.stream.RoomFilter.toObject(e, r),
                sort: i.Message.getFieldWithDefault(t, 3, 0),
                order: i.Message.getFieldWithDefault(t, 4, 0),
                pageno: i.Message.getFieldWithDefault(t, 5, 0),
                pagesize: i.Message.getFieldWithDefault(t, 6, 0)
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.stream.GetRoomListExReq.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.GetRoomListExReq;
            return proto.stream.GetRoomListExReq.deserializeBinaryFromReader(r, t)
        },proto.stream.GetRoomListExReq.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setGameid(r);
                        break;
                    case 2:
                        r = new proto.stream.RoomFilter;
                        t.readMessage(r, proto.stream.RoomFilter.deserializeBinaryFromReader), e.setRoomfilter(r);
                        break;
                    case 3:
                        r = t.readEnum();
                        e.setSort(r);
                        break;
                    case 4:
                        r = t.readEnum();
                        e.setOrder(r);
                        break;
                    case 5:
                        r = t.readInt32();
                        e.setPageno(r);
                        break;
                    case 6:
                        r = t.readInt32();
                        e.setPagesize(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.GetRoomListExReq.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.GetRoomListExReq.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.GetRoomListExReq.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getGameid()) && t.writeUint32(1, r), null != (r = e.getRoomfilter()) && t.writeMessage(2, r, proto.stream.RoomFilter.serializeBinaryToWriter), 0 !== (r = e.getSort()) && t.writeEnum(3, r), 0 !== (r = e.getOrder()) && t.writeEnum(4, r), 0 !== (r = e.getPageno()) && t.writeInt32(5, r), 0 !== (r = e.getPagesize()) && t.writeInt32(6, r)
        },proto.stream.GetRoomListExReq.prototype.getGameid = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.GetRoomListExReq.prototype.setGameid = function (e) {
            i.Message.setProto3IntField(this, 1, e)
        },proto.stream.GetRoomListExReq.prototype.getRoomfilter = function () {
            return i.Message.getWrapperField(this, proto.stream.RoomFilter, 2)
        },proto.stream.GetRoomListExReq.prototype.setRoomfilter = function (e) {
            i.Message.setWrapperField(this, 2, e)
        },proto.stream.GetRoomListExReq.prototype.clearRoomfilter = function () {
            this.setRoomfilter(void 0)
        },proto.stream.GetRoomListExReq.prototype.hasRoomfilter = function () {
            return null != i.Message.getField(this, 2)
        },proto.stream.GetRoomListExReq.prototype.getSort = function () {
            return i.Message.getFieldWithDefault(this, 3, 0)
        },proto.stream.GetRoomListExReq.prototype.setSort = function (e) {
            i.Message.setProto3EnumField(this, 3, e)
        },proto.stream.GetRoomListExReq.prototype.getOrder = function () {
            return i.Message.getFieldWithDefault(this, 4, 0)
        },proto.stream.GetRoomListExReq.prototype.setOrder = function (e) {
            i.Message.setProto3EnumField(this, 4, e)
        },proto.stream.GetRoomListExReq.prototype.getPageno = function () {
            return i.Message.getFieldWithDefault(this, 5, 0)
        },proto.stream.GetRoomListExReq.prototype.setPageno = function (e) {
            i.Message.setProto3IntField(this, 5, e)
        },proto.stream.GetRoomListExReq.prototype.getPagesize = function () {
            return i.Message.getFieldWithDefault(this, 6, 0)
        },proto.stream.GetRoomListExReq.prototype.setPagesize = function (e) {
            i.Message.setProto3IntField(this, 6, e)
        },proto.stream.RoomInfoEx = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.RoomInfoEx, i.Message),o.DEBUG && !COMPILED && (proto.stream.RoomInfoEx.displayName = "proto.stream.RoomInfoEx"),i.Message.GENERATE_TO_OBJECT && (proto.stream.RoomInfoEx.prototype.toObject = function (e) {
            return proto.stream.RoomInfoEx.toObject(e, this)
        }, proto.stream.RoomInfoEx.toObject = function (e, t) {
            var r, o = {
                roomid: i.Message.getFieldWithDefault(t, 1, "0"),
                roomname: i.Message.getFieldWithDefault(t, 2, ""),
                maxplayer: i.Message.getFieldWithDefault(t, 3, 0),
                gameplayer: i.Message.getFieldWithDefault(t, 4, 0),
                watchplayer: i.Message.getFieldWithDefault(t, 5, 0),
                mode: i.Message.getFieldWithDefault(t, 6, 0),
                canwatch: i.Message.getFieldWithDefault(t, 7, 0),
                roomproperty: t.getRoomproperty_asB64(),
                owner: i.Message.getFieldWithDefault(t, 9, 0),
                state: i.Message.getFieldWithDefault(t, 10, 0),
                createtime: i.Message.getFieldWithDefault(t, 11, "0"),
                watchinfo: (r = t.getWatchinfo()) && proto.stream.WatchInfo.toObject(e, r)
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.stream.RoomInfoEx.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.RoomInfoEx;
            return proto.stream.RoomInfoEx.deserializeBinaryFromReader(r, t)
        },proto.stream.RoomInfoEx.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint64String();
                        e.setRoomid(r);
                        break;
                    case 2:
                        r = t.readString();
                        e.setRoomname(r);
                        break;
                    case 3:
                        r = t.readUint32();
                        e.setMaxplayer(r);
                        break;
                    case 4:
                        r = t.readUint32();
                        e.setGameplayer(r);
                        break;
                    case 5:
                        r = t.readUint32();
                        e.setWatchplayer(r);
                        break;
                    case 6:
                        r = t.readInt32();
                        e.setMode(r);
                        break;
                    case 7:
                        r = t.readInt32();
                        e.setCanwatch(r);
                        break;
                    case 8:
                        r = t.readBytes();
                        e.setRoomproperty(r);
                        break;
                    case 9:
                        r = t.readUint32();
                        e.setOwner(r);
                        break;
                    case 10:
                        r = t.readEnum();
                        e.setState(r);
                        break;
                    case 11:
                        r = t.readUint64String();
                        e.setCreatetime(r);
                        break;
                    case 12:
                        r = new proto.stream.WatchInfo;
                        t.readMessage(r, proto.stream.WatchInfo.deserializeBinaryFromReader), e.setWatchinfo(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.RoomInfoEx.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.RoomInfoEx.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.RoomInfoEx.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            r = e.getRoomid(), 0 !== parseInt(r, 10) && t.writeUint64String(1, r), 0 < (r = e.getRoomname()).length && t.writeString(2, r), 0 !== (r = e.getMaxplayer()) && t.writeUint32(3, r), 0 !== (r = e.getGameplayer()) && t.writeUint32(4, r), 0 !== (r = e.getWatchplayer()) && t.writeUint32(5, r), 0 !== (r = e.getMode()) && t.writeInt32(6, r), 0 !== (r = e.getCanwatch()) && t.writeInt32(7, r), 0 < (r = e.getRoomproperty_asU8()).length && t.writeBytes(8, r), 0 !== (r = e.getOwner()) && t.writeUint32(9, r), 0 !== (r = e.getState()) && t.writeEnum(10, r), r = e.getCreatetime(), 0 !== parseInt(r, 10) && t.writeUint64String(11, r), null != (r = e.getWatchinfo()) && t.writeMessage(12, r, proto.stream.WatchInfo.serializeBinaryToWriter)
        },proto.stream.RoomInfoEx.prototype.getRoomid = function () {
            return i.Message.getFieldWithDefault(this, 1, "0")
        },proto.stream.RoomInfoEx.prototype.setRoomid = function (e) {
            i.Message.setProto3StringIntField(this, 1, e)
        },proto.stream.RoomInfoEx.prototype.getRoomname = function () {
            return i.Message.getFieldWithDefault(this, 2, "")
        },proto.stream.RoomInfoEx.prototype.setRoomname = function (e) {
            i.Message.setProto3StringField(this, 2, e)
        },proto.stream.RoomInfoEx.prototype.getMaxplayer = function () {
            return i.Message.getFieldWithDefault(this, 3, 0)
        },proto.stream.RoomInfoEx.prototype.setMaxplayer = function (e) {
            i.Message.setProto3IntField(this, 3, e)
        },proto.stream.RoomInfoEx.prototype.getGameplayer = function () {
            return i.Message.getFieldWithDefault(this, 4, 0)
        },proto.stream.RoomInfoEx.prototype.setGameplayer = function (e) {
            i.Message.setProto3IntField(this, 4, e)
        },proto.stream.RoomInfoEx.prototype.getWatchplayer = function () {
            return i.Message.getFieldWithDefault(this, 5, 0)
        },proto.stream.RoomInfoEx.prototype.setWatchplayer = function (e) {
            i.Message.setProto3IntField(this, 5, e)
        },proto.stream.RoomInfoEx.prototype.getMode = function () {
            return i.Message.getFieldWithDefault(this, 6, 0)
        },proto.stream.RoomInfoEx.prototype.setMode = function (e) {
            i.Message.setProto3IntField(this, 6, e)
        },proto.stream.RoomInfoEx.prototype.getCanwatch = function () {
            return i.Message.getFieldWithDefault(this, 7, 0)
        },proto.stream.RoomInfoEx.prototype.setCanwatch = function (e) {
            i.Message.setProto3IntField(this, 7, e)
        },proto.stream.RoomInfoEx.prototype.getRoomproperty = function () {
            return i.Message.getFieldWithDefault(this, 8, "")
        },proto.stream.RoomInfoEx.prototype.getRoomproperty_asB64 = function () {
            return i.Message.bytesAsB64(this.getRoomproperty())
        },proto.stream.RoomInfoEx.prototype.getRoomproperty_asU8 = function () {
            return i.Message.bytesAsU8(this.getRoomproperty())
        },proto.stream.RoomInfoEx.prototype.setRoomproperty = function (e) {
            i.Message.setProto3BytesField(this, 8, e)
        },proto.stream.RoomInfoEx.prototype.getOwner = function () {
            return i.Message.getFieldWithDefault(this, 9, 0)
        },proto.stream.RoomInfoEx.prototype.setOwner = function (e) {
            i.Message.setProto3IntField(this, 9, e)
        },proto.stream.RoomInfoEx.prototype.getState = function () {
            return i.Message.getFieldWithDefault(this, 10, 0)
        },proto.stream.RoomInfoEx.prototype.setState = function (e) {
            i.Message.setProto3EnumField(this, 10, e)
        },proto.stream.RoomInfoEx.prototype.getCreatetime = function () {
            return i.Message.getFieldWithDefault(this, 11, "0")
        },proto.stream.RoomInfoEx.prototype.setCreatetime = function (e) {
            i.Message.setProto3StringIntField(this, 11, e)
        },proto.stream.RoomInfoEx.prototype.getWatchinfo = function () {
            return i.Message.getWrapperField(this, proto.stream.WatchInfo, 12)
        },proto.stream.RoomInfoEx.prototype.setWatchinfo = function (e) {
            i.Message.setWrapperField(this, 12, e)
        },proto.stream.RoomInfoEx.prototype.clearWatchinfo = function () {
            this.setWatchinfo(void 0)
        },proto.stream.RoomInfoEx.prototype.hasWatchinfo = function () {
            return null != i.Message.getField(this, 12)
        },proto.stream.GetRoomListExRsp = function (e) {
            i.Message.initialize(this, e, 0, -1, proto.stream.GetRoomListExRsp.repeatedFields_, null)
        },o.inherits(proto.stream.GetRoomListExRsp, i.Message),o.DEBUG && !COMPILED && (proto.stream.GetRoomListExRsp.displayName = "proto.stream.GetRoomListExRsp"),proto.stream.GetRoomListExRsp.repeatedFields_ = [3],i.Message.GENERATE_TO_OBJECT && (proto.stream.GetRoomListExRsp.prototype.toObject = function (e) {
            return proto.stream.GetRoomListExRsp.toObject(e, this)
        }, proto.stream.GetRoomListExRsp.toObject = function (e, t) {
            var r = {
                status: i.Message.getFieldWithDefault(t, 1, 0),
                total: i.Message.getFieldWithDefault(t, 2, 0),
                roominfoexList: i.Message.toObjectList(t.getRoominfoexList(), proto.stream.RoomInfoEx.toObject, e)
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.GetRoomListExRsp.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.GetRoomListExRsp;
            return proto.stream.GetRoomListExRsp.deserializeBinaryFromReader(r, t)
        },proto.stream.GetRoomListExRsp.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readEnum();
                        e.setStatus(r);
                        break;
                    case 2:
                        r = t.readInt32();
                        e.setTotal(r);
                        break;
                    case 3:
                        r = new proto.stream.RoomInfoEx;
                        t.readMessage(r, proto.stream.RoomInfoEx.deserializeBinaryFromReader), e.addRoominfoex(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.GetRoomListExRsp.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.GetRoomListExRsp.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.GetRoomListExRsp.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getStatus()) && t.writeEnum(1, r), 0 !== (r = e.getTotal()) && t.writeInt32(2, r), 0 < (r = e.getRoominfoexList()).length && t.writeRepeatedMessage(3, r, proto.stream.RoomInfoEx.serializeBinaryToWriter)
        },proto.stream.GetRoomListExRsp.prototype.getStatus = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.GetRoomListExRsp.prototype.setStatus = function (e) {
            i.Message.setProto3EnumField(this, 1, e)
        },proto.stream.GetRoomListExRsp.prototype.getTotal = function () {
            return i.Message.getFieldWithDefault(this, 2, 0)
        },proto.stream.GetRoomListExRsp.prototype.setTotal = function (e) {
            i.Message.setProto3IntField(this, 2, e)
        },proto.stream.GetRoomListExRsp.prototype.getRoominfoexList = function () {
            return i.Message.getRepeatedWrapperField(this, proto.stream.RoomInfoEx, 3)
        },proto.stream.GetRoomListExRsp.prototype.setRoominfoexList = function (e) {
            i.Message.setRepeatedWrapperField(this, 3, e)
        },proto.stream.GetRoomListExRsp.prototype.addRoominfoex = function (e, t) {
            return i.Message.addToRepeatedWrapperField(this, 3, e, proto.stream.RoomInfoEx, t)
        },proto.stream.GetRoomListExRsp.prototype.clearRoominfoexList = function () {
            this.setRoominfoexList([])
        },proto.stream.KickPlayerReq = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.KickPlayerReq, i.Message),o.DEBUG && !COMPILED && (proto.stream.KickPlayerReq.displayName = "proto.stream.KickPlayerReq"),i.Message.GENERATE_TO_OBJECT && (proto.stream.KickPlayerReq.prototype.toObject = function (e) {
            return proto.stream.KickPlayerReq.toObject(e, this)
        }, proto.stream.KickPlayerReq.toObject = function (e, t) {
            var r = {
                roomid: i.Message.getFieldWithDefault(t, 1, "0"),
                srcuserid: i.Message.getFieldWithDefault(t, 2, 0),
                userid: i.Message.getFieldWithDefault(t, 3, 0),
                cpproto: t.getCpproto_asB64()
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.KickPlayerReq.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.KickPlayerReq;
            return proto.stream.KickPlayerReq.deserializeBinaryFromReader(r, t)
        },proto.stream.KickPlayerReq.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint64String();
                        e.setRoomid(r);
                        break;
                    case 2:
                        r = t.readUint32();
                        e.setSrcuserid(r);
                        break;
                    case 3:
                        r = t.readUint32();
                        e.setUserid(r);
                        break;
                    case 4:
                        r = t.readBytes();
                        e.setCpproto(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.KickPlayerReq.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.KickPlayerReq.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.KickPlayerReq.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            r = e.getRoomid(), 0 !== parseInt(r, 10) && t.writeUint64String(1, r), 0 !== (r = e.getSrcuserid()) && t.writeUint32(2, r), 0 !== (r = e.getUserid()) && t.writeUint32(3, r), 0 < (r = e.getCpproto_asU8()).length && t.writeBytes(4, r)
        },proto.stream.KickPlayerReq.prototype.getRoomid = function () {
            return i.Message.getFieldWithDefault(this, 1, "0")
        },proto.stream.KickPlayerReq.prototype.setRoomid = function (e) {
            i.Message.setProto3StringIntField(this, 1, e)
        },proto.stream.KickPlayerReq.prototype.getSrcuserid = function () {
            return i.Message.getFieldWithDefault(this, 2, 0)
        },proto.stream.KickPlayerReq.prototype.setSrcuserid = function (e) {
            i.Message.setProto3IntField(this, 2, e)
        },proto.stream.KickPlayerReq.prototype.getUserid = function () {
            return i.Message.getFieldWithDefault(this, 3, 0)
        },proto.stream.KickPlayerReq.prototype.setUserid = function (e) {
            i.Message.setProto3IntField(this, 3, e)
        };
        proto.stream.KickPlayerReq.prototype.getCpproto = function () {
            return i.Message.getFieldWithDefault(this, 4, "")
        }, proto.stream.KickPlayerReq.prototype.getCpproto_asB64 = function () {
            return i.Message.bytesAsB64(this.getCpproto())
        }, proto.stream.KickPlayerReq.prototype.getCpproto_asU8 = function () {
            return i.Message.bytesAsU8(this.getCpproto())
        }, proto.stream.KickPlayerReq.prototype.setCpproto = function (e) {
            i.Message.setProto3BytesField(this, 4, e)
        }, proto.stream.KickPlayerRsp = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.stream.KickPlayerRsp, i.Message), o.DEBUG && !COMPILED && (proto.stream.KickPlayerRsp.displayName = "proto.stream.KickPlayerRsp"), i.Message.GENERATE_TO_OBJECT && (proto.stream.KickPlayerRsp.prototype.toObject = function (e) {
            return proto.stream.KickPlayerRsp.toObject(e, this)
        }, proto.stream.KickPlayerRsp.toObject = function (e, t) {
            var r = {
                status: i.Message.getFieldWithDefault(t, 1, 0),
                userid: i.Message.getFieldWithDefault(t, 2, 0),
                roomid: i.Message.getFieldWithDefault(t, 3, "0"),
                owner: i.Message.getFieldWithDefault(t, 4, 0)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.stream.KickPlayerRsp.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.KickPlayerRsp;
            return proto.stream.KickPlayerRsp.deserializeBinaryFromReader(r, t)
        }, proto.stream.KickPlayerRsp.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readEnum();
                        e.setStatus(r);
                        break;
                    case 2:
                        r = t.readUint32();
                        e.setUserid(r);
                        break;
                    case 3:
                        r = t.readUint64String();
                        e.setRoomid(r);
                        break;
                    case 4:
                        r = t.readUint32();
                        e.setOwner(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.stream.KickPlayerRsp.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.KickPlayerRsp.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.stream.KickPlayerRsp.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getStatus()) && t.writeEnum(1, r), 0 !== (r = e.getUserid()) && t.writeUint32(2, r), r = e.getRoomid(), 0 !== parseInt(r, 10) && t.writeUint64String(3, r), 0 !== (r = e.getOwner()) && t.writeUint32(4, r)
        }, proto.stream.KickPlayerRsp.prototype.getStatus = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        }, proto.stream.KickPlayerRsp.prototype.setStatus = function (e) {
            i.Message.setProto3EnumField(this, 1, e)
        }, proto.stream.KickPlayerRsp.prototype.getUserid = function () {
            return i.Message.getFieldWithDefault(this, 2, 0)
        }, proto.stream.KickPlayerRsp.prototype.setUserid = function (e) {
            i.Message.setProto3IntField(this, 2, e)
        }, proto.stream.KickPlayerRsp.prototype.getRoomid = function () {
            return i.Message.getFieldWithDefault(this, 3, "0")
        }, proto.stream.KickPlayerRsp.prototype.setRoomid = function (e) {
            i.Message.setProto3StringIntField(this, 3, e)
        }, proto.stream.KickPlayerRsp.prototype.getOwner = function () {
            return i.Message.getFieldWithDefault(this, 4, 0)
        }, proto.stream.KickPlayerRsp.prototype.setOwner = function (e) {
            i.Message.setProto3IntField(this, 4, e)
        }, proto.stream.KickPlayerNotify = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.stream.KickPlayerNotify, i.Message), o.DEBUG && !COMPILED && (proto.stream.KickPlayerNotify.displayName = "proto.stream.KickPlayerNotify"), i.Message.GENERATE_TO_OBJECT && (proto.stream.KickPlayerNotify.prototype.toObject = function (e) {
            return proto.stream.KickPlayerNotify.toObject(e, this)
        }, proto.stream.KickPlayerNotify.toObject = function (e, t) {
            var r = {
                srcuserid: i.Message.getFieldWithDefault(t, 1, 0),
                userid: i.Message.getFieldWithDefault(t, 2, 0),
                cpproto: t.getCpproto_asB64(),
                owner: i.Message.getFieldWithDefault(t, 4, 0)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.stream.KickPlayerNotify.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.KickPlayerNotify;
            return proto.stream.KickPlayerNotify.deserializeBinaryFromReader(r, t)
        }, proto.stream.KickPlayerNotify.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setSrcuserid(r);
                        break;
                    case 2:
                        r = t.readUint32();
                        e.setUserid(r);
                        break;
                    case 3:
                        r = t.readBytes();
                        e.setCpproto(r);
                        break;
                    case 4:
                        r = t.readUint32();
                        e.setOwner(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.stream.KickPlayerNotify.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.KickPlayerNotify.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.stream.KickPlayerNotify.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getSrcuserid()) && t.writeUint32(1, r), 0 !== (r = e.getUserid()) && t.writeUint32(2, r), 0 < (r = e.getCpproto_asU8()).length && t.writeBytes(3, r), 0 !== (r = e.getOwner()) && t.writeUint32(4, r)
        }, proto.stream.KickPlayerNotify.prototype.getSrcuserid = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        }, proto.stream.KickPlayerNotify.prototype.setSrcuserid = function (e) {
            i.Message.setProto3IntField(this, 1, e)
        }, proto.stream.KickPlayerNotify.prototype.getUserid = function () {
            return i.Message.getFieldWithDefault(this, 2, 0)
        }, proto.stream.KickPlayerNotify.prototype.setUserid = function (e) {
            i.Message.setProto3IntField(this, 2, e)
        }, proto.stream.KickPlayerNotify.prototype.getCpproto = function () {
            return i.Message.getFieldWithDefault(this, 3, "")
        }, proto.stream.KickPlayerNotify.prototype.getCpproto_asB64 = function () {
            return i.Message.bytesAsB64(this.getCpproto())
        }, proto.stream.KickPlayerNotify.prototype.getCpproto_asU8 = function () {
            return i.Message.bytesAsU8(this.getCpproto())
        }, proto.stream.KickPlayerNotify.prototype.setCpproto = function (e) {
            i.Message.setProto3BytesField(this, 3, e)
        }, proto.stream.KickPlayerNotify.prototype.getOwner = function () {
            return i.Message.getFieldWithDefault(this, 4, 0)
        }, proto.stream.KickPlayerNotify.prototype.setOwner = function (e) {
            i.Message.setProto3IntField(this, 4, e)
        }, proto.stream.GetRoomDetailReq = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.stream.GetRoomDetailReq, i.Message), o.DEBUG && !COMPILED && (proto.stream.GetRoomDetailReq.displayName = "proto.stream.GetRoomDetailReq"), i.Message.GENERATE_TO_OBJECT && (proto.stream.GetRoomDetailReq.prototype.toObject = function (e) {
            return proto.stream.GetRoomDetailReq.toObject(e, this)
        }, proto.stream.GetRoomDetailReq.toObject = function (e, t) {
            var r = {
                gameid: i.Message.getFieldWithDefault(t, 1, 0),
                roomid: i.Message.getFieldWithDefault(t, 2, "0"),
                latestwatchernum: i.Message.getFieldWithDefault(t, 3, 0)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.stream.GetRoomDetailReq.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.GetRoomDetailReq;
            return proto.stream.GetRoomDetailReq.deserializeBinaryFromReader(r, t)
        }, proto.stream.GetRoomDetailReq.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setGameid(r);
                        break;
                    case 2:
                        r = t.readUint64String();
                        e.setRoomid(r);
                        break;
                    case 3:
                        r = t.readUint32();
                        e.setLatestwatchernum(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.stream.GetRoomDetailReq.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.GetRoomDetailReq.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.stream.GetRoomDetailReq.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getGameid()) && t.writeUint32(1, r), r = e.getRoomid(), 0 !== parseInt(r, 10) && t.writeUint64String(2, r), 0 !== (r = e.getLatestwatchernum()) && t.writeUint32(3, r)
        }, proto.stream.GetRoomDetailReq.prototype.getGameid = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        }, proto.stream.GetRoomDetailReq.prototype.setGameid = function (e) {
            i.Message.setProto3IntField(this, 1, e)
        }, proto.stream.GetRoomDetailReq.prototype.getRoomid = function () {
            return i.Message.getFieldWithDefault(this, 2, "0")
        }, proto.stream.GetRoomDetailReq.prototype.setRoomid = function (e) {
            i.Message.setProto3StringIntField(this, 2, e)
        }, proto.stream.GetRoomDetailReq.prototype.getLatestwatchernum = function () {
            return i.Message.getFieldWithDefault(this, 3, 0)
        }, proto.stream.GetRoomDetailReq.prototype.setLatestwatchernum = function (e) {
            i.Message.setProto3IntField(this, 3, e)
        }, proto.stream.GetRoomDetailRsp = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.stream.GetRoomDetailRsp, i.Message), o.DEBUG && !COMPILED && (proto.stream.GetRoomDetailRsp.displayName = "proto.stream.GetRoomDetailRsp"), i.Message.GENERATE_TO_OBJECT && (proto.stream.GetRoomDetailRsp.prototype.toObject = function (e) {
            return proto.stream.GetRoomDetailRsp.toObject(e, this)
        }, proto.stream.GetRoomDetailRsp.toObject = function (e, t) {
            var r, o = {
                status: i.Message.getFieldWithDefault(t, 1, 0),
                roomdetail: (r = t.getRoomdetail()) && proto.stream.RoomDetail.toObject(e, r)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.stream.GetRoomDetailRsp.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.GetRoomDetailRsp;
            return proto.stream.GetRoomDetailRsp.deserializeBinaryFromReader(r, t)
        }, proto.stream.GetRoomDetailRsp.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readEnum();
                        e.setStatus(r);
                        break;
                    case 2:
                        r = new proto.stream.RoomDetail;
                        t.readMessage(r, proto.stream.RoomDetail.deserializeBinaryFromReader), e.setRoomdetail(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.stream.GetRoomDetailRsp.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.GetRoomDetailRsp.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.stream.GetRoomDetailRsp.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getStatus()) && t.writeEnum(1, r), null != (r = e.getRoomdetail()) && t.writeMessage(2, r, proto.stream.RoomDetail.serializeBinaryToWriter)
        }, proto.stream.GetRoomDetailRsp.prototype.getStatus = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        }, proto.stream.GetRoomDetailRsp.prototype.setStatus = function (e) {
            i.Message.setProto3EnumField(this, 1, e)
        }, proto.stream.GetRoomDetailRsp.prototype.getRoomdetail = function () {
            return i.Message.getWrapperField(this, proto.stream.RoomDetail, 2)
        }, proto.stream.GetRoomDetailRsp.prototype.setRoomdetail = function (e) {
            i.Message.setWrapperField(this, 2, e)
        }, proto.stream.GetRoomDetailRsp.prototype.clearRoomdetail = function () {
            this.setRoomdetail(void 0)
        }, proto.stream.GetRoomDetailRsp.prototype.hasRoomdetail = function () {
            return null != i.Message.getField(this, 2)
        }, proto.stream.RoomDetail = function (e) {
            i.Message.initialize(this, e, 0, -1, proto.stream.RoomDetail.repeatedFields_, null)
        }, o.inherits(proto.stream.RoomDetail, i.Message), o.DEBUG && !COMPILED && (proto.stream.RoomDetail.displayName = "proto.stream.RoomDetail"), proto.stream.RoomDetail.repeatedFields_ = [9, 11], i.Message.GENERATE_TO_OBJECT && (proto.stream.RoomDetail.prototype.toObject = function (e) {
            return proto.stream.RoomDetail.toObject(e, this)
        }, proto.stream.RoomDetail.toObject = function (e, t) {
            var r, o = {
                roomid: i.Message.getFieldWithDefault(t, 1, "0"),
                state: i.Message.getFieldWithDefault(t, 2, 0),
                maxplayer: i.Message.getFieldWithDefault(t, 3, 0),
                mode: i.Message.getFieldWithDefault(t, 4, 0),
                canwatch: i.Message.getFieldWithDefault(t, 5, 0),
                roomproperty: t.getRoomproperty_asB64(),
                owner: i.Message.getFieldWithDefault(t, 7, 0),
                createflag: i.Message.getFieldWithDefault(t, 8, 0),
                playerinfosList: i.Message.toObjectList(t.getPlayerinfosList(), proto.stream.PlayerInfo.toObject, e),
                watchroom: (r = t.getWatchroom()) && proto.stream.WatchRoom.toObject(e, r),
                brigadesList: i.Message.toObjectList(t.getBrigadesList(), proto.stream.BrigadeInfo.toObject, e)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.stream.RoomDetail.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.RoomDetail;
            return proto.stream.RoomDetail.deserializeBinaryFromReader(r, t)
        }, proto.stream.RoomDetail.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint64String();
                        e.setRoomid(r);
                        break;
                    case 2:
                        r = t.readEnum();
                        e.setState(r);
                        break;
                    case 3:
                        r = t.readUint32();
                        e.setMaxplayer(r);
                        break;
                    case 4:
                        r = t.readInt32();
                        e.setMode(r);
                        break;
                    case 5:
                        r = t.readInt32();
                        e.setCanwatch(r);
                        break;
                    case 6:
                        r = t.readBytes();
                        e.setRoomproperty(r);
                        break;
                    case 7:
                        r = t.readUint32();
                        e.setOwner(r);
                        break;
                    case 8:
                        r = t.readUint32();
                        e.setCreateflag(r);
                        break;
                    case 9:
                        r = new proto.stream.PlayerInfo;
                        t.readMessage(r, proto.stream.PlayerInfo.deserializeBinaryFromReader), e.addPlayerinfos(r);
                        break;
                    case 10:
                        r = new proto.stream.WatchRoom;
                        t.readMessage(r, proto.stream.WatchRoom.deserializeBinaryFromReader), e.setWatchroom(r);
                        break;
                    case 11:
                        r = new proto.stream.BrigadeInfo;
                        t.readMessage(r, proto.stream.BrigadeInfo.deserializeBinaryFromReader), e.addBrigades(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.stream.RoomDetail.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.RoomDetail.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.stream.RoomDetail.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            r = e.getRoomid(), 0 !== parseInt(r, 10) && t.writeUint64String(1, r), 0 !== (r = e.getState()) && t.writeEnum(2, r), 0 !== (r = e.getMaxplayer()) && t.writeUint32(3, r), 0 !== (r = e.getMode()) && t.writeInt32(4, r), 0 !== (r = e.getCanwatch()) && t.writeInt32(5, r), 0 < (r = e.getRoomproperty_asU8()).length && t.writeBytes(6, r), 0 !== (r = e.getOwner()) && t.writeUint32(7, r), 0 !== (r = e.getCreateflag()) && t.writeUint32(8, r), 0 < (r = e.getPlayerinfosList()).length && t.writeRepeatedMessage(9, r, proto.stream.PlayerInfo.serializeBinaryToWriter), null != (r = e.getWatchroom()) && t.writeMessage(10, r, proto.stream.WatchRoom.serializeBinaryToWriter), 0 < (r = e.getBrigadesList()).length && t.writeRepeatedMessage(11, r, proto.stream.BrigadeInfo.serializeBinaryToWriter)
        }, proto.stream.RoomDetail.prototype.getRoomid = function () {
            return i.Message.getFieldWithDefault(this, 1, "0")
        }, proto.stream.RoomDetail.prototype.setRoomid = function (e) {
            i.Message.setProto3StringIntField(this, 1, e)
        }, proto.stream.RoomDetail.prototype.getState = function () {
            return i.Message.getFieldWithDefault(this, 2, 0)
        }, proto.stream.RoomDetail.prototype.setState = function (e) {
            i.Message.setProto3EnumField(this, 2, e)
        }, proto.stream.RoomDetail.prototype.getMaxplayer = function () {
            return i.Message.getFieldWithDefault(this, 3, 0)
        }, proto.stream.RoomDetail.prototype.setMaxplayer = function (e) {
            i.Message.setProto3IntField(this, 3, e)
        }, proto.stream.RoomDetail.prototype.getMode = function () {
            return i.Message.getFieldWithDefault(this, 4, 0)
        }, proto.stream.RoomDetail.prototype.setMode = function (e) {
            i.Message.setProto3IntField(this, 4, e)
        }, proto.stream.RoomDetail.prototype.getCanwatch = function () {
            return i.Message.getFieldWithDefault(this, 5, 0)
        }, proto.stream.RoomDetail.prototype.setCanwatch = function (e) {
            i.Message.setProto3IntField(this, 5, e)
        }, proto.stream.RoomDetail.prototype.getRoomproperty = function () {
            return i.Message.getFieldWithDefault(this, 6, "")
        }, proto.stream.RoomDetail.prototype.getRoomproperty_asB64 = function () {
            return i.Message.bytesAsB64(this.getRoomproperty())
        }, proto.stream.RoomDetail.prototype.getRoomproperty_asU8 = function () {
            return i.Message.bytesAsU8(this.getRoomproperty())
        }, proto.stream.RoomDetail.prototype.setRoomproperty = function (e) {
            i.Message.setProto3BytesField(this, 6, e)
        }, proto.stream.RoomDetail.prototype.getOwner = function () {
            return i.Message.getFieldWithDefault(this, 7, 0)
        }, proto.stream.RoomDetail.prototype.setOwner = function (e) {
            i.Message.setProto3IntField(this, 7, e)
        }, proto.stream.RoomDetail.prototype.getCreateflag = function () {
            return i.Message.getFieldWithDefault(this, 8, 0)
        }, proto.stream.RoomDetail.prototype.setCreateflag = function (e) {
            i.Message.setProto3IntField(this, 8, e)
        }, proto.stream.RoomDetail.prototype.getPlayerinfosList = function () {
            return i.Message.getRepeatedWrapperField(this, proto.stream.PlayerInfo, 9)
        }, proto.stream.RoomDetail.prototype.setPlayerinfosList = function (e) {
            i.Message.setRepeatedWrapperField(this, 9, e)
        }, proto.stream.RoomDetail.prototype.addPlayerinfos = function (e, t) {
            return i.Message.addToRepeatedWrapperField(this, 9, e, proto.stream.PlayerInfo, t)
        }, proto.stream.RoomDetail.prototype.clearPlayerinfosList = function () {
            this.setPlayerinfosList([])
        }, proto.stream.RoomDetail.prototype.getWatchroom = function () {
            return i.Message.getWrapperField(this, proto.stream.WatchRoom, 10)
        }, proto.stream.RoomDetail.prototype.setWatchroom = function (e) {
            i.Message.setWrapperField(this, 10, e)
        }, proto.stream.RoomDetail.prototype.clearWatchroom = function () {
            this.setWatchroom(void 0)
        }, proto.stream.RoomDetail.prototype.hasWatchroom = function () {
            return null != i.Message.getField(this, 10)
        },proto.stream.RoomDetail.prototype.getBrigadesList = function () {
            return i.Message.getRepeatedWrapperField(this, proto.stream.BrigadeInfo, 11)
        },proto.stream.RoomDetail.prototype.setBrigadesList = function (e) {
            i.Message.setRepeatedWrapperField(this, 11, e)
        },proto.stream.RoomDetail.prototype.addBrigades = function (e, t) {
            return i.Message.addToRepeatedWrapperField(this, 11, e, proto.stream.BrigadeInfo, t)
        },proto.stream.RoomDetail.prototype.clearBrigadesList = function () {
            this.setBrigadesList([])
        },proto.stream.SetRoomPropertyReq = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.SetRoomPropertyReq, i.Message),o.DEBUG && !COMPILED && (proto.stream.SetRoomPropertyReq.displayName = "proto.stream.SetRoomPropertyReq"),i.Message.GENERATE_TO_OBJECT && (proto.stream.SetRoomPropertyReq.prototype.toObject = function (e) {
            return proto.stream.SetRoomPropertyReq.toObject(e, this)
        }, proto.stream.SetRoomPropertyReq.toObject = function (e, t) {
            var r = {
                gameid: i.Message.getFieldWithDefault(t, 1, 0),
                roomid: i.Message.getFieldWithDefault(t, 2, "0"),
                userid: i.Message.getFieldWithDefault(t, 3, 0),
                roomproperty: t.getRoomproperty_asB64()
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.SetRoomPropertyReq.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.SetRoomPropertyReq;
            return proto.stream.SetRoomPropertyReq.deserializeBinaryFromReader(r, t)
        },proto.stream.SetRoomPropertyReq.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setGameid(r);
                        break;
                    case 2:
                        r = t.readUint64String();
                        e.setRoomid(r);
                        break;
                    case 3:
                        r = t.readUint32();
                        e.setUserid(r);
                        break;
                    case 4:
                        r = t.readBytes();
                        e.setRoomproperty(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.SetRoomPropertyReq.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.SetRoomPropertyReq.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.SetRoomPropertyReq.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getGameid()) && t.writeUint32(1, r), r = e.getRoomid(), 0 !== parseInt(r, 10) && t.writeUint64String(2, r), 0 !== (r = e.getUserid()) && t.writeUint32(3, r), 0 < (r = e.getRoomproperty_asU8()).length && t.writeBytes(4, r)
        },proto.stream.SetRoomPropertyReq.prototype.getGameid = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.SetRoomPropertyReq.prototype.setGameid = function (e) {
            i.Message.setProto3IntField(this, 1, e)
        },proto.stream.SetRoomPropertyReq.prototype.getRoomid = function () {
            return i.Message.getFieldWithDefault(this, 2, "0")
        },proto.stream.SetRoomPropertyReq.prototype.setRoomid = function (e) {
            i.Message.setProto3StringIntField(this, 2, e)
        },proto.stream.SetRoomPropertyReq.prototype.getUserid = function () {
            return i.Message.getFieldWithDefault(this, 3, 0)
        },proto.stream.SetRoomPropertyReq.prototype.setUserid = function (e) {
            i.Message.setProto3IntField(this, 3, e)
        },proto.stream.SetRoomPropertyReq.prototype.getRoomproperty = function () {
            return i.Message.getFieldWithDefault(this, 4, "")
        },proto.stream.SetRoomPropertyReq.prototype.getRoomproperty_asB64 = function () {
            return i.Message.bytesAsB64(this.getRoomproperty())
        },proto.stream.SetRoomPropertyReq.prototype.getRoomproperty_asU8 = function () {
            return i.Message.bytesAsU8(this.getRoomproperty())
        },proto.stream.SetRoomPropertyReq.prototype.setRoomproperty = function (e) {
            i.Message.setProto3BytesField(this, 4, e)
        },proto.stream.SetRoomPropertyRsp = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.SetRoomPropertyRsp, i.Message),o.DEBUG && !COMPILED && (proto.stream.SetRoomPropertyRsp.displayName = "proto.stream.SetRoomPropertyRsp"),i.Message.GENERATE_TO_OBJECT && (proto.stream.SetRoomPropertyRsp.prototype.toObject = function (e) {
            return proto.stream.SetRoomPropertyRsp.toObject(e, this)
        }, proto.stream.SetRoomPropertyRsp.toObject = function (e, t) {
            var r = {
                status: i.Message.getFieldWithDefault(t, 1, 0),
                roomid: i.Message.getFieldWithDefault(t, 2, "0"),
                userid: i.Message.getFieldWithDefault(t, 3, 0),
                roomproperty: t.getRoomproperty_asB64()
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.SetRoomPropertyRsp.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.SetRoomPropertyRsp;
            return proto.stream.SetRoomPropertyRsp.deserializeBinaryFromReader(r, t)
        },proto.stream.SetRoomPropertyRsp.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readEnum();
                        e.setStatus(r);
                        break;
                    case 2:
                        r = t.readUint64String();
                        e.setRoomid(r);
                        break;
                    case 3:
                        r = t.readUint32();
                        e.setUserid(r);
                        break;
                    case 4:
                        r = t.readBytes();
                        e.setRoomproperty(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.SetRoomPropertyRsp.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.SetRoomPropertyRsp.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.SetRoomPropertyRsp.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getStatus()) && t.writeEnum(1, r), r = e.getRoomid(), 0 !== parseInt(r, 10) && t.writeUint64String(2, r), 0 !== (r = e.getUserid()) && t.writeUint32(3, r), 0 < (r = e.getRoomproperty_asU8()).length && t.writeBytes(4, r)
        },proto.stream.SetRoomPropertyRsp.prototype.getStatus = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.SetRoomPropertyRsp.prototype.setStatus = function (e) {
            i.Message.setProto3EnumField(this, 1, e)
        },proto.stream.SetRoomPropertyRsp.prototype.getRoomid = function () {
            return i.Message.getFieldWithDefault(this, 2, "0")
        },proto.stream.SetRoomPropertyRsp.prototype.setRoomid = function (e) {
            i.Message.setProto3StringIntField(this, 2, e)
        },proto.stream.SetRoomPropertyRsp.prototype.getUserid = function () {
            return i.Message.getFieldWithDefault(this, 3, 0)
        },proto.stream.SetRoomPropertyRsp.prototype.setUserid = function (e) {
            i.Message.setProto3IntField(this, 3, e)
        },proto.stream.SetRoomPropertyRsp.prototype.getRoomproperty = function () {
            return i.Message.getFieldWithDefault(this, 4, "")
        },proto.stream.SetRoomPropertyRsp.prototype.getRoomproperty_asB64 = function () {
            return i.Message.bytesAsB64(this.getRoomproperty())
        },proto.stream.SetRoomPropertyRsp.prototype.getRoomproperty_asU8 = function () {
            return i.Message.bytesAsU8(this.getRoomproperty())
        },proto.stream.SetRoomPropertyRsp.prototype.setRoomproperty = function (e) {
            i.Message.setProto3BytesField(this, 4, e)
        },proto.stream.NoticeRoomProperty = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.NoticeRoomProperty, i.Message),o.DEBUG && !COMPILED && (proto.stream.NoticeRoomProperty.displayName = "proto.stream.NoticeRoomProperty"),i.Message.GENERATE_TO_OBJECT && (proto.stream.NoticeRoomProperty.prototype.toObject = function (e) {
            return proto.stream.NoticeRoomProperty.toObject(e, this)
        }, proto.stream.NoticeRoomProperty.toObject = function (e, t) {
            var r = {
                roomid: i.Message.getFieldWithDefault(t, 1, "0"),
                userid: i.Message.getFieldWithDefault(t, 2, 0),
                roomproperty: t.getRoomproperty_asB64()
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.NoticeRoomProperty.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.NoticeRoomProperty;
            return proto.stream.NoticeRoomProperty.deserializeBinaryFromReader(r, t)
        },proto.stream.NoticeRoomProperty.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint64String();
                        e.setRoomid(r);
                        break;
                    case 2:
                        r = t.readUint32();
                        e.setUserid(r);
                        break;
                    case 3:
                        r = t.readBytes();
                        e.setRoomproperty(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.NoticeRoomProperty.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.NoticeRoomProperty.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.NoticeRoomProperty.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            r = e.getRoomid(), 0 !== parseInt(r, 10) && t.writeUint64String(1, r), 0 !== (r = e.getUserid()) && t.writeUint32(2, r), 0 < (r = e.getRoomproperty_asU8()).length && t.writeBytes(3, r)
        },proto.stream.NoticeRoomProperty.prototype.getRoomid = function () {
            return i.Message.getFieldWithDefault(this, 1, "0")
        },proto.stream.NoticeRoomProperty.prototype.setRoomid = function (e) {
            i.Message.setProto3StringIntField(this, 1, e)
        },proto.stream.NoticeRoomProperty.prototype.getUserid = function () {
            return i.Message.getFieldWithDefault(this, 2, 0)
        },proto.stream.NoticeRoomProperty.prototype.setUserid = function (e) {
            i.Message.setProto3IntField(this, 2, e)
        },proto.stream.NoticeRoomProperty.prototype.getRoomproperty = function () {
            return i.Message.getFieldWithDefault(this, 3, "")
        },proto.stream.NoticeRoomProperty.prototype.getRoomproperty_asB64 = function () {
            return i.Message.bytesAsB64(this.getRoomproperty())
        },proto.stream.NoticeRoomProperty.prototype.getRoomproperty_asU8 = function () {
            return i.Message.bytesAsU8(this.getRoomproperty())
        },proto.stream.NoticeRoomProperty.prototype.setRoomproperty = function (e) {
            i.Message.setProto3BytesField(this, 3, e)
        },proto.stream.DestroyRoomReq = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.DestroyRoomReq, i.Message),o.DEBUG && !COMPILED && (proto.stream.DestroyRoomReq.displayName = "proto.stream.DestroyRoomReq"),i.Message.GENERATE_TO_OBJECT && (proto.stream.DestroyRoomReq.prototype.toObject = function (e) {
            return proto.stream.DestroyRoomReq.toObject(e, this)
        }, proto.stream.DestroyRoomReq.toObject = function (e, t) {
            var r = {gameid: i.Message.getFieldWithDefault(t, 1, 0), roomid: i.Message.getFieldWithDefault(t, 2, "0")};
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.DestroyRoomReq.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.DestroyRoomReq;
            return proto.stream.DestroyRoomReq.deserializeBinaryFromReader(r, t)
        },proto.stream.DestroyRoomReq.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setGameid(r);
                        break;
                    case 2:
                        r = t.readUint64String();
                        e.setRoomid(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.DestroyRoomReq.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.DestroyRoomReq.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.DestroyRoomReq.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getGameid()) && t.writeUint32(1, r), r = e.getRoomid(), 0 !== parseInt(r, 10) && t.writeUint64String(2, r)
        },proto.stream.DestroyRoomReq.prototype.getGameid = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.DestroyRoomReq.prototype.setGameid = function (e) {
            i.Message.setProto3IntField(this, 1, e)
        },proto.stream.DestroyRoomReq.prototype.getRoomid = function () {
            return i.Message.getFieldWithDefault(this, 2, "0")
        },proto.stream.DestroyRoomReq.prototype.setRoomid = function (e) {
            i.Message.setProto3StringIntField(this, 2, e)
        },proto.stream.DestroyRoomRsp = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.DestroyRoomRsp, i.Message),o.DEBUG && !COMPILED && (proto.stream.DestroyRoomRsp.displayName = "proto.stream.DestroyRoomRsp"),i.Message.GENERATE_TO_OBJECT && (proto.stream.DestroyRoomRsp.prototype.toObject = function (e) {
            return proto.stream.DestroyRoomRsp.toObject(e, this)
        }, proto.stream.DestroyRoomRsp.toObject = function (e, t) {
            var r = {status: i.Message.getFieldWithDefault(t, 1, 0)};
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.DestroyRoomRsp.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.DestroyRoomRsp;
            return proto.stream.DestroyRoomRsp.deserializeBinaryFromReader(r, t)
        },proto.stream.DestroyRoomRsp.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readEnum();
                        e.setStatus(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.DestroyRoomRsp.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.DestroyRoomRsp.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.DestroyRoomRsp.serializeBinaryToWriter = function (e, t) {
            var r;
            0 !== (r = e.getStatus()) && t.writeEnum(1, r)
        },proto.stream.DestroyRoomRsp.prototype.getStatus = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.DestroyRoomRsp.prototype.setStatus = function (e) {
            i.Message.setProto3EnumField(this, 1, e)
        },proto.stream.WatchSetting = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.WatchSetting, i.Message),o.DEBUG && !COMPILED && (proto.stream.WatchSetting.displayName = "proto.stream.WatchSetting"),i.Message.GENERATE_TO_OBJECT && (proto.stream.WatchSetting.prototype.toObject = function (e) {
            return proto.stream.WatchSetting.toObject(e, this)
        }, proto.stream.WatchSetting.toObject = function (e, t) {
            var r = {
                maxwatch: i.Message.getFieldWithDefault(t, 1, 0),
                watchpersistent: i.Message.getFieldWithDefault(t, 2, !1),
                watchdelayms: i.Message.getFieldWithDefault(t, 3, 0),
                cachetime: i.Message.getFieldWithDefault(t, 4, 0)
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.WatchSetting.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.WatchSetting;
            return proto.stream.WatchSetting.deserializeBinaryFromReader(r, t)
        },proto.stream.WatchSetting.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setMaxwatch(r);
                        break;
                    case 2:
                        r = t.readBool();
                        e.setWatchpersistent(r);
                        break;
                    case 3:
                        r = t.readUint32();
                        e.setWatchdelayms(r);
                        break;
                    case 4:
                        r = t.readUint32();
                        e.setCachetime(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.WatchSetting.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.WatchSetting.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.WatchSetting.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getMaxwatch()) && t.writeUint32(1, r), (r = e.getWatchpersistent()) && t.writeBool(2, r), 0 !== (r = e.getWatchdelayms()) && t.writeUint32(3, r), 0 !== (r = e.getCachetime()) && t.writeUint32(4, r)
        },proto.stream.WatchSetting.prototype.getMaxwatch = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.WatchSetting.prototype.setMaxwatch = function (e) {
            i.Message.setProto3IntField(this, 1, e)
        },proto.stream.WatchSetting.prototype.getWatchpersistent = function () {
            return i.Message.getFieldWithDefault(this, 2, !1)
        },proto.stream.WatchSetting.prototype.setWatchpersistent = function (e) {
            i.Message.setProto3BooleanField(this, 2, e)
        },proto.stream.WatchSetting.prototype.getWatchdelayms = function () {
            return i.Message.getFieldWithDefault(this, 3, 0)
        },proto.stream.WatchSetting.prototype.setWatchdelayms = function (e) {
            i.Message.setProto3IntField(this, 3, e)
        },proto.stream.WatchSetting.prototype.getCachetime = function () {
            return i.Message.getFieldWithDefault(this, 4, 0)
        },proto.stream.WatchSetting.prototype.setCachetime = function (e) {
            i.Message.setProto3IntField(this, 4, e)
        },proto.stream.WatchInfo = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.WatchInfo, i.Message),o.DEBUG && !COMPILED && (proto.stream.WatchInfo.displayName = "proto.stream.WatchInfo"),i.Message.GENERATE_TO_OBJECT && (proto.stream.WatchInfo.prototype.toObject = function (e) {
            return proto.stream.WatchInfo.toObject(e, this)
        }, proto.stream.WatchInfo.toObject = function (e, t) {
            var r, o = {
                roomid: i.Message.getFieldWithDefault(t, 1, "0"),
                state: i.Message.getFieldWithDefault(t, 2, 0),
                watchsetting: (r = t.getWatchsetting()) && proto.stream.WatchSetting.toObject(e, r),
                curwatch: i.Message.getFieldWithDefault(t, 4, 0)
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.stream.WatchInfo.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.WatchInfo;
            return proto.stream.WatchInfo.deserializeBinaryFromReader(r, t)
        },proto.stream.WatchInfo.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint64String();
                        e.setRoomid(r);
                        break;
                    case 2:
                        r = t.readUint32();
                        e.setState(r);
                        break;
                    case 3:
                        r = new proto.stream.WatchSetting;
                        t.readMessage(r, proto.stream.WatchSetting.deserializeBinaryFromReader), e.setWatchsetting(r);
                        break;
                    case 4:
                        r = t.readUint32();
                        e.setCurwatch(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.WatchInfo.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.WatchInfo.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.WatchInfo.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            r = e.getRoomid(), 0 !== parseInt(r, 10) && t.writeUint64String(1, r), 0 !== (r = e.getState()) && t.writeUint32(2, r), null != (r = e.getWatchsetting()) && t.writeMessage(3, r, proto.stream.WatchSetting.serializeBinaryToWriter), 0 !== (r = e.getCurwatch()) && t.writeUint32(4, r)
        },proto.stream.WatchInfo.prototype.getRoomid = function () {
            return i.Message.getFieldWithDefault(this, 1, "0")
        },proto.stream.WatchInfo.prototype.setRoomid = function (e) {
            i.Message.setProto3StringIntField(this, 1, e)
        },proto.stream.WatchInfo.prototype.getState = function () {
            return i.Message.getFieldWithDefault(this, 2, 0)
        },proto.stream.WatchInfo.prototype.setState = function (e) {
            i.Message.setProto3IntField(this, 2, e)
        },proto.stream.WatchInfo.prototype.getWatchsetting = function () {
            return i.Message.getWrapperField(this, proto.stream.WatchSetting, 3)
        },proto.stream.WatchInfo.prototype.setWatchsetting = function (e) {
            i.Message.setWrapperField(this, 3, e)
        },proto.stream.WatchInfo.prototype.clearWatchsetting = function () {
            this.setWatchsetting(void 0)
        },proto.stream.WatchInfo.prototype.hasWatchsetting = function () {
            return null != i.Message.getField(this, 3)
        },proto.stream.WatchInfo.prototype.getCurwatch = function () {
            return i.Message.getFieldWithDefault(this, 4, 0)
        },proto.stream.WatchInfo.prototype.setCurwatch = function (e) {
            i.Message.setProto3IntField(this, 4, e)
        },proto.stream.WatchRoom = function (e) {
            i.Message.initialize(this, e, 0, -1, proto.stream.WatchRoom.repeatedFields_, null)
        },o.inherits(proto.stream.WatchRoom, i.Message),o.DEBUG && !COMPILED && (proto.stream.WatchRoom.displayName = "proto.stream.WatchRoom"),proto.stream.WatchRoom.repeatedFields_ = [2],i.Message.GENERATE_TO_OBJECT && (proto.stream.WatchRoom.prototype.toObject = function (e) {
            return proto.stream.WatchRoom.toObject(e, this)
        }, proto.stream.WatchRoom.toObject = function (e, t) {
            var r, o = {
                watchinfo: (r = t.getWatchinfo()) && proto.stream.WatchInfo.toObject(e, r),
                watchplayersList: i.Message.toObjectList(t.getWatchplayersList(), proto.stream.PlayerInfo.toObject, e)
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.stream.WatchRoom.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.WatchRoom;
            return proto.stream.WatchRoom.deserializeBinaryFromReader(r, t)
        },proto.stream.WatchRoom.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = new proto.stream.WatchInfo;
                        t.readMessage(r, proto.stream.WatchInfo.deserializeBinaryFromReader), e.setWatchinfo(r);
                        break;
                    case 2:
                        r = new proto.stream.PlayerInfo;
                        t.readMessage(r, proto.stream.PlayerInfo.deserializeBinaryFromReader), e.addWatchplayers(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.WatchRoom.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.WatchRoom.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.WatchRoom.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            null != (r = e.getWatchinfo()) && t.writeMessage(1, r, proto.stream.WatchInfo.serializeBinaryToWriter), 0 < (r = e.getWatchplayersList()).length && t.writeRepeatedMessage(2, r, proto.stream.PlayerInfo.serializeBinaryToWriter)
        },proto.stream.WatchRoom.prototype.getWatchinfo = function () {
            return i.Message.getWrapperField(this, proto.stream.WatchInfo, 1)
        },proto.stream.WatchRoom.prototype.setWatchinfo = function (e) {
            i.Message.setWrapperField(this, 1, e)
        },proto.stream.WatchRoom.prototype.clearWatchinfo = function () {
            this.setWatchinfo(void 0)
        },proto.stream.WatchRoom.prototype.hasWatchinfo = function () {
            return null != i.Message.getField(this, 1)
        },proto.stream.WatchRoom.prototype.getWatchplayersList = function () {
            return i.Message.getRepeatedWrapperField(this, proto.stream.PlayerInfo, 2)
        },proto.stream.WatchRoom.prototype.setWatchplayersList = function (e) {
            i.Message.setRepeatedWrapperField(this, 2, e)
        },proto.stream.WatchRoom.prototype.addWatchplayers = function (e, t) {
            return i.Message.addToRepeatedWrapperField(this, 2, e, proto.stream.PlayerInfo, t)
        },proto.stream.WatchRoom.prototype.clearWatchplayersList = function () {
            this.setWatchplayersList([])
        },proto.stream.PlayRoom = function (e) {
            i.Message.initialize(this, e, 0, -1, proto.stream.PlayRoom.repeatedFields_, null)
        },o.inherits(proto.stream.PlayRoom, i.Message),o.DEBUG && !COMPILED && (proto.stream.PlayRoom.displayName = "proto.stream.PlayRoom"),proto.stream.PlayRoom.repeatedFields_ = [2],i.Message.GENERATE_TO_OBJECT && (proto.stream.PlayRoom.prototype.toObject = function (e) {
            return proto.stream.PlayRoom.toObject(e, this)
        }, proto.stream.PlayRoom.toObject = function (e, t) {
            var r, o = {
                roominfo: (r = t.getRoominfo()) && proto.stream.RoomInfo.toObject(e, r),
                playerList: i.Message.toObjectList(t.getPlayerList(), proto.stream.PlayerInfo.toObject, e)
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.stream.PlayRoom.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.PlayRoom;
            return proto.stream.PlayRoom.deserializeBinaryFromReader(r, t)
        },proto.stream.PlayRoom.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = new proto.stream.RoomInfo;
                        t.readMessage(r, proto.stream.RoomInfo.deserializeBinaryFromReader), e.setRoominfo(r);
                        break;
                    case 2:
                        r = new proto.stream.PlayerInfo;
                        t.readMessage(r, proto.stream.PlayerInfo.deserializeBinaryFromReader), e.addPlayer(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.PlayRoom.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.PlayRoom.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.PlayRoom.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            null != (r = e.getRoominfo()) && t.writeMessage(1, r, proto.stream.RoomInfo.serializeBinaryToWriter), 0 < (r = e.getPlayerList()).length && t.writeRepeatedMessage(2, r, proto.stream.PlayerInfo.serializeBinaryToWriter)
        },proto.stream.PlayRoom.prototype.getRoominfo = function () {
            return i.Message.getWrapperField(this, proto.stream.RoomInfo, 1)
        },proto.stream.PlayRoom.prototype.setRoominfo = function (e) {
            i.Message.setWrapperField(this, 1, e)
        },proto.stream.PlayRoom.prototype.clearRoominfo = function () {
            this.setRoominfo(void 0)
        },proto.stream.PlayRoom.prototype.hasRoominfo = function () {
            return null != i.Message.getField(this, 1)
        },proto.stream.PlayRoom.prototype.getPlayerList = function () {
            return i.Message.getRepeatedWrapperField(this, proto.stream.PlayerInfo, 2)
        },proto.stream.PlayRoom.prototype.setPlayerList = function (e) {
            i.Message.setRepeatedWrapperField(this, 2, e)
        },proto.stream.PlayRoom.prototype.addPlayer = function (e, t) {
            return i.Message.addToRepeatedWrapperField(this, 2, e, proto.stream.PlayerInfo, t)
        },proto.stream.PlayRoom.prototype.clearPlayerList = function () {
            this.setPlayerList([])
        },proto.stream.JoinWatchRoomReq = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.JoinWatchRoomReq, i.Message),o.DEBUG && !COMPILED && (proto.stream.JoinWatchRoomReq.displayName = "proto.stream.JoinWatchRoomReq"),i.Message.GENERATE_TO_OBJECT && (proto.stream.JoinWatchRoomReq.prototype.toObject = function (e) {
            return proto.stream.JoinWatchRoomReq.toObject(e, this)
        }, proto.stream.JoinWatchRoomReq.toObject = function (e, t) {
            var r = {
                gameid: i.Message.getFieldWithDefault(t, 1, 0),
                userid: i.Message.getFieldWithDefault(t, 2, 0),
                userprofile: t.getUserprofile_asB64(),
                roomid: i.Message.getFieldWithDefault(t, 4, "0")
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.JoinWatchRoomReq.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.JoinWatchRoomReq;
            return proto.stream.JoinWatchRoomReq.deserializeBinaryFromReader(r, t)
        },proto.stream.JoinWatchRoomReq.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setGameid(r);
                        break;
                    case 2:
                        r = t.readUint32();
                        e.setUserid(r);
                        break;
                    case 3:
                        r = t.readBytes();
                        e.setUserprofile(r);
                        break;
                    case 4:
                        r = t.readUint64String();
                        e.setRoomid(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.JoinWatchRoomReq.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.JoinWatchRoomReq.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.JoinWatchRoomReq.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getGameid()) && t.writeUint32(1, r), 0 !== (r = e.getUserid()) && t.writeUint32(2, r), 0 < (r = e.getUserprofile_asU8()).length && t.writeBytes(3, r), r = e.getRoomid(), 0 !== parseInt(r, 10) && t.writeUint64String(4, r)
        },proto.stream.JoinWatchRoomReq.prototype.getGameid = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.JoinWatchRoomReq.prototype.setGameid = function (e) {
            i.Message.setProto3IntField(this, 1, e)
        },proto.stream.JoinWatchRoomReq.prototype.getUserid = function () {
            return i.Message.getFieldWithDefault(this, 2, 0)
        },proto.stream.JoinWatchRoomReq.prototype.setUserid = function (e) {
            i.Message.setProto3IntField(this, 2, e)
        },proto.stream.JoinWatchRoomReq.prototype.getUserprofile = function () {
            return i.Message.getFieldWithDefault(this, 3, "")
        },proto.stream.JoinWatchRoomReq.prototype.getUserprofile_asB64 = function () {
            return i.Message.bytesAsB64(this.getUserprofile())
        },proto.stream.JoinWatchRoomReq.prototype.getUserprofile_asU8 = function () {
            return i.Message.bytesAsU8(this.getUserprofile())
        },proto.stream.JoinWatchRoomReq.prototype.setUserprofile = function (e) {
            i.Message.setProto3BytesField(this, 3, e)
        },proto.stream.JoinWatchRoomReq.prototype.getRoomid = function () {
            return i.Message.getFieldWithDefault(this, 4, "0")
        },proto.stream.JoinWatchRoomReq.prototype.setRoomid = function (e) {
            i.Message.setProto3StringIntField(this, 4, e)
        },proto.stream.JoinWatchRoomRsp = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.JoinWatchRoomRsp, i.Message),o.DEBUG && !COMPILED && (proto.stream.JoinWatchRoomRsp.displayName = "proto.stream.JoinWatchRoomRsp"),i.Message.GENERATE_TO_OBJECT && (proto.stream.JoinWatchRoomRsp.prototype.toObject = function (e) {
            return proto.stream.JoinWatchRoomRsp.toObject(e, this)
        }, proto.stream.JoinWatchRoomRsp.toObject = function (e, t) {
            var r, o = {
                status: i.Message.getFieldWithDefault(t, 1, 0),
                bookinfo: (r = t.getBookinfo()) && proto.stream.BookInfo.toObject(e, r),
                setid: i.Message.getFieldWithDefault(t, 3, 0),
                roomid: i.Message.getFieldWithDefault(t, 4, "0")
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.stream.JoinWatchRoomRsp.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.JoinWatchRoomRsp;
            return proto.stream.JoinWatchRoomRsp.deserializeBinaryFromReader(r, t)
        },proto.stream.JoinWatchRoomRsp.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readEnum();
                        e.setStatus(r);
                        break;
                    case 2:
                        r = new proto.stream.BookInfo;
                        t.readMessage(r, proto.stream.BookInfo.deserializeBinaryFromReader), e.setBookinfo(r);
                        break;
                    case 3:
                        r = t.readUint32();
                        e.setSetid(r);
                        break;
                    case 4:
                        r = t.readUint64String();
                        e.setRoomid(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.JoinWatchRoomRsp.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.JoinWatchRoomRsp.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.JoinWatchRoomRsp.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getStatus()) && t.writeEnum(1, r), null != (r = e.getBookinfo()) && t.writeMessage(2, r, proto.stream.BookInfo.serializeBinaryToWriter), 0 !== (r = e.getSetid()) && t.writeUint32(3, r), r = e.getRoomid(), 0 !== parseInt(r, 10) && t.writeUint64String(4, r)
        },proto.stream.JoinWatchRoomRsp.prototype.getStatus = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.JoinWatchRoomRsp.prototype.setStatus = function (e) {
            i.Message.setProto3EnumField(this, 1, e)
        },proto.stream.JoinWatchRoomRsp.prototype.getBookinfo = function () {
            return i.Message.getWrapperField(this, proto.stream.BookInfo, 2)
        },proto.stream.JoinWatchRoomRsp.prototype.setBookinfo = function (e) {
            i.Message.setWrapperField(this, 2, e)
        },proto.stream.JoinWatchRoomRsp.prototype.clearBookinfo = function () {
            this.setBookinfo(void 0)
        },proto.stream.JoinWatchRoomRsp.prototype.hasBookinfo = function () {
            return null != i.Message.getField(this, 2)
        },proto.stream.JoinWatchRoomRsp.prototype.getSetid = function () {
            return i.Message.getFieldWithDefault(this, 3, 0)
        },proto.stream.JoinWatchRoomRsp.prototype.setSetid = function (e) {
            i.Message.setProto3IntField(this, 3, e)
        },proto.stream.JoinWatchRoomRsp.prototype.getRoomid = function () {
            return i.Message.getFieldWithDefault(this, 4, "0")
        },proto.stream.JoinWatchRoomRsp.prototype.setRoomid = function (e) {
            i.Message.setProto3StringIntField(this, 4, e)
        },proto.stream.LeaveWatchRoomReq = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.LeaveWatchRoomReq, i.Message),o.DEBUG && !COMPILED && (proto.stream.LeaveWatchRoomReq.displayName = "proto.stream.LeaveWatchRoomReq"),i.Message.GENERATE_TO_OBJECT && (proto.stream.LeaveWatchRoomReq.prototype.toObject = function (e) {
            return proto.stream.LeaveWatchRoomReq.toObject(e, this)
        }, proto.stream.LeaveWatchRoomReq.toObject = function (e, t) {
            var r = {
                gameid: i.Message.getFieldWithDefault(t, 1, 0),
                userid: i.Message.getFieldWithDefault(t, 2, 0),
                roomid: i.Message.getFieldWithDefault(t, 3, "0"),
                cpproto: t.getCpproto_asB64()
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.LeaveWatchRoomReq.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.LeaveWatchRoomReq;
            return proto.stream.LeaveWatchRoomReq.deserializeBinaryFromReader(r, t)
        },proto.stream.LeaveWatchRoomReq.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setGameid(r);
                        break;
                    case 2:
                        r = t.readUint32();
                        e.setUserid(r);
                        break;
                    case 3:
                        r = t.readUint64String();
                        e.setRoomid(r);
                        break;
                    case 4:
                        r = t.readBytes();
                        e.setCpproto(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.LeaveWatchRoomReq.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.LeaveWatchRoomReq.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.LeaveWatchRoomReq.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getGameid()) && t.writeUint32(1, r), 0 !== (r = e.getUserid()) && t.writeUint32(2, r), r = e.getRoomid(), 0 !== parseInt(r, 10) && t.writeUint64String(3, r), 0 < (r = e.getCpproto_asU8()).length && t.writeBytes(4, r)
        },proto.stream.LeaveWatchRoomReq.prototype.getGameid = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.LeaveWatchRoomReq.prototype.setGameid = function (e) {
            i.Message.setProto3IntField(this, 1, e)
        },proto.stream.LeaveWatchRoomReq.prototype.getUserid = function () {
            return i.Message.getFieldWithDefault(this, 2, 0)
        },proto.stream.LeaveWatchRoomReq.prototype.setUserid = function (e) {
            i.Message.setProto3IntField(this, 2, e)
        },proto.stream.LeaveWatchRoomReq.prototype.getRoomid = function () {
            return i.Message.getFieldWithDefault(this, 3, "0")
        },proto.stream.LeaveWatchRoomReq.prototype.setRoomid = function (e) {
            i.Message.setProto3StringIntField(this, 3, e)
        },proto.stream.LeaveWatchRoomReq.prototype.getCpproto = function () {
            return i.Message.getFieldWithDefault(this, 4, "")
        },proto.stream.LeaveWatchRoomReq.prototype.getCpproto_asB64 = function () {
            return i.Message.bytesAsB64(this.getCpproto())
        },proto.stream.LeaveWatchRoomReq.prototype.getCpproto_asU8 = function () {
            return i.Message.bytesAsU8(this.getCpproto())
        },proto.stream.LeaveWatchRoomReq.prototype.setCpproto = function (e) {
            i.Message.setProto3BytesField(this, 4, e)
        },proto.stream.LeaveWatchRoomRsp = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.LeaveWatchRoomRsp, i.Message),o.DEBUG && !COMPILED && (proto.stream.LeaveWatchRoomRsp.displayName = "proto.stream.LeaveWatchRoomRsp"),i.Message.GENERATE_TO_OBJECT && (proto.stream.LeaveWatchRoomRsp.prototype.toObject = function (e) {
            return proto.stream.LeaveWatchRoomRsp.toObject(e, this)
        }, proto.stream.LeaveWatchRoomRsp.toObject = function (e, t) {
            var r = {status: i.Message.getFieldWithDefault(t, 1, 0)};
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.LeaveWatchRoomRsp.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.LeaveWatchRoomRsp;
            return proto.stream.LeaveWatchRoomRsp.deserializeBinaryFromReader(r, t)
        },proto.stream.LeaveWatchRoomRsp.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readEnum();
                        e.setStatus(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.LeaveWatchRoomRsp.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.LeaveWatchRoomRsp.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.LeaveWatchRoomRsp.serializeBinaryToWriter = function (e, t) {
            var r;
            0 !== (r = e.getStatus()) && t.writeEnum(1, r)
        },proto.stream.LeaveWatchRoomRsp.prototype.getStatus = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.LeaveWatchRoomRsp.prototype.setStatus = function (e) {
            i.Message.setProto3EnumField(this, 1, e)
        },proto.stream.ChangeRoleReq = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.ChangeRoleReq, i.Message),o.DEBUG && !COMPILED && (proto.stream.ChangeRoleReq.displayName = "proto.stream.ChangeRoleReq"),i.Message.GENERATE_TO_OBJECT && (proto.stream.ChangeRoleReq.prototype.toObject = function (e) {
            return proto.stream.ChangeRoleReq.toObject(e, this)
        }, proto.stream.ChangeRoleReq.toObject = function (e, t) {
            var r = {
                userid: i.Message.getFieldWithDefault(t, 1, 0),
                gameid: i.Message.getFieldWithDefault(t, 2, 0),
                roomid: i.Message.getFieldWithDefault(t, 3, "0"),
                targetroomtype: i.Message.getFieldWithDefault(t, 4, 0),
                userprofile: t.getUserprofile_asB64()
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.ChangeRoleReq.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.ChangeRoleReq;
            return proto.stream.ChangeRoleReq.deserializeBinaryFromReader(r, t)
        },proto.stream.ChangeRoleReq.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setUserid(r);
                        break;
                    case 2:
                        r = t.readUint32();
                        e.setGameid(r);
                        break;
                    case 3:
                        r = t.readUint64String();
                        e.setRoomid(r);
                        break;
                    case 4:
                        r = t.readEnum();
                        e.setTargetroomtype(r);
                        break;
                    case 5:
                        r = t.readBytes();
                        e.setUserprofile(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.ChangeRoleReq.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.ChangeRoleReq.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.ChangeRoleReq.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getUserid()) && t.writeUint32(1, r), 0 !== (r = e.getGameid()) && t.writeUint32(2, r), r = e.getRoomid(), 0 !== parseInt(r, 10) && t.writeUint64String(3, r), 0 !== (r = e.getTargetroomtype()) && t.writeEnum(4, r), 0 < (r = e.getUserprofile_asU8()).length && t.writeBytes(5, r)
        },proto.stream.ChangeRoleReq.prototype.getUserid = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.ChangeRoleReq.prototype.setUserid = function (e) {
            i.Message.setProto3IntField(this, 1, e)
        },proto.stream.ChangeRoleReq.prototype.getGameid = function () {
            return i.Message.getFieldWithDefault(this, 2, 0)
        },proto.stream.ChangeRoleReq.prototype.setGameid = function (e) {
            i.Message.setProto3IntField(this, 2, e)
        },proto.stream.ChangeRoleReq.prototype.getRoomid = function () {
            return i.Message.getFieldWithDefault(this, 3, "0")
        },proto.stream.ChangeRoleReq.prototype.setRoomid = function (e) {
            i.Message.setProto3StringIntField(this, 3, e)
        },proto.stream.ChangeRoleReq.prototype.getTargetroomtype = function () {
            return i.Message.getFieldWithDefault(this, 4, 0)
        },proto.stream.ChangeRoleReq.prototype.setTargetroomtype = function (e) {
            i.Message.setProto3EnumField(this, 4, e)
        },proto.stream.ChangeRoleReq.prototype.getUserprofile = function () {
            return i.Message.getFieldWithDefault(this, 5, "")
        },proto.stream.ChangeRoleReq.prototype.getUserprofile_asB64 = function () {
            return i.Message.bytesAsB64(this.getUserprofile())
        },proto.stream.ChangeRoleReq.prototype.getUserprofile_asU8 = function () {
            return i.Message.bytesAsU8(this.getUserprofile())
        },proto.stream.ChangeRoleReq.prototype.setUserprofile = function (e) {
            i.Message.setProto3BytesField(this, 5, e)
        },proto.stream.ChangeRoleRsp = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.ChangeRoleRsp, i.Message),o.DEBUG && !COMPILED && (proto.stream.ChangeRoleRsp.displayName = "proto.stream.ChangeRoleRsp"),i.Message.GENERATE_TO_OBJECT && (proto.stream.ChangeRoleRsp.prototype.toObject = function (e) {
            return proto.stream.ChangeRoleRsp.toObject(e, this)
        }, proto.stream.ChangeRoleRsp.toObject = function (e, t) {
            var r, o = {
                status: i.Message.getFieldWithDefault(t, 1, 0),
                targetroomtype: i.Message.getFieldWithDefault(t, 2, 0),
                playroom: (r = t.getPlayroom()) && proto.stream.PlayRoom.toObject(e, r),
                bookinfo: (r = t.getBookinfo()) && proto.stream.BookInfo.toObject(e, r),
                roomid: i.Message.getFieldWithDefault(t, 5, "0"),
                setid: i.Message.getFieldWithDefault(t, 6, 0)
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.stream.ChangeRoleRsp.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.ChangeRoleRsp;
            return proto.stream.ChangeRoleRsp.deserializeBinaryFromReader(r, t)
        },proto.stream.ChangeRoleRsp.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readEnum();
                        e.setStatus(r);
                        break;
                    case 2:
                        r = t.readEnum();
                        e.setTargetroomtype(r);
                        break;
                    case 3:
                        r = new proto.stream.PlayRoom;
                        t.readMessage(r, proto.stream.PlayRoom.deserializeBinaryFromReader), e.setPlayroom(r);
                        break;
                    case 4:
                        r = new proto.stream.BookInfo;
                        t.readMessage(r, proto.stream.BookInfo.deserializeBinaryFromReader), e.setBookinfo(r);
                        break;
                    case 5:
                        r = t.readUint64String();
                        e.setRoomid(r);
                        break;
                    case 6:
                        r = t.readUint32();
                        e.setSetid(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.ChangeRoleRsp.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.ChangeRoleRsp.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.ChangeRoleRsp.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getStatus()) && t.writeEnum(1, r), 0 !== (r = e.getTargetroomtype()) && t.writeEnum(2, r), null != (r = e.getPlayroom()) && t.writeMessage(3, r, proto.stream.PlayRoom.serializeBinaryToWriter), null != (r = e.getBookinfo()) && t.writeMessage(4, r, proto.stream.BookInfo.serializeBinaryToWriter), r = e.getRoomid(), 0 !== parseInt(r, 10) && t.writeUint64String(5, r), 0 !== (r = e.getSetid()) && t.writeUint32(6, r)
        },proto.stream.ChangeRoleRsp.prototype.getStatus = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.ChangeRoleRsp.prototype.setStatus = function (e) {
            i.Message.setProto3EnumField(this, 1, e)
        },proto.stream.ChangeRoleRsp.prototype.getTargetroomtype = function () {
            return i.Message.getFieldWithDefault(this, 2, 0)
        },proto.stream.ChangeRoleRsp.prototype.setTargetroomtype = function (e) {
            i.Message.setProto3EnumField(this, 2, e)
        },proto.stream.ChangeRoleRsp.prototype.getPlayroom = function () {
            return i.Message.getWrapperField(this, proto.stream.PlayRoom, 3)
        },proto.stream.ChangeRoleRsp.prototype.setPlayroom = function (e) {
            i.Message.setWrapperField(this, 3, e)
        },proto.stream.ChangeRoleRsp.prototype.clearPlayroom = function () {
            this.setPlayroom(void 0)
        },proto.stream.ChangeRoleRsp.prototype.hasPlayroom = function () {
            return null != i.Message.getField(this, 3)
        },proto.stream.ChangeRoleRsp.prototype.getBookinfo = function () {
            return i.Message.getWrapperField(this, proto.stream.BookInfo, 4)
        },proto.stream.ChangeRoleRsp.prototype.setBookinfo = function (e) {
            i.Message.setWrapperField(this, 4, e)
        },proto.stream.ChangeRoleRsp.prototype.clearBookinfo = function () {
            this.setBookinfo(void 0)
        },proto.stream.ChangeRoleRsp.prototype.hasBookinfo = function () {
            return null != i.Message.getField(this, 4)
        },proto.stream.ChangeRoleRsp.prototype.getRoomid = function () {
            return i.Message.getFieldWithDefault(this, 5, "0")
        },proto.stream.ChangeRoleRsp.prototype.setRoomid = function (e) {
            i.Message.setProto3StringIntField(this, 5, e)
        },proto.stream.ChangeRoleRsp.prototype.getSetid = function () {
            return i.Message.getFieldWithDefault(this, 6, 0)
        },proto.stream.ChangeRoleRsp.prototype.setSetid = function (e) {
            i.Message.setProto3IntField(this, 6, e)
        },proto.stream.GetWatchRoomsReq = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.GetWatchRoomsReq, i.Message),o.DEBUG && !COMPILED && (proto.stream.GetWatchRoomsReq.displayName = "proto.stream.GetWatchRoomsReq"),i.Message.GENERATE_TO_OBJECT && (proto.stream.GetWatchRoomsReq.prototype.toObject = function (e) {
            return proto.stream.GetWatchRoomsReq.toObject(e, this)
        }, proto.stream.GetWatchRoomsReq.toObject = function (e, t) {
            var r, o = {
                gameid: i.Message.getFieldWithDefault(t, 1, 0),
                roomfilter: (r = t.getRoomfilter()) && proto.stream.RoomFilter.toObject(e, r),
                sort: i.Message.getFieldWithDefault(t, 3, 0),
                order: i.Message.getFieldWithDefault(t, 4, 0),
                pageno: i.Message.getFieldWithDefault(t, 5, 0),
                pagesize: i.Message.getFieldWithDefault(t, 6, 0)
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.stream.GetWatchRoomsReq.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.GetWatchRoomsReq;
            return proto.stream.GetWatchRoomsReq.deserializeBinaryFromReader(r, t)
        },proto.stream.GetWatchRoomsReq.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setGameid(r);
                        break;
                    case 2:
                        r = new proto.stream.RoomFilter;
                        t.readMessage(r, proto.stream.RoomFilter.deserializeBinaryFromReader), e.setRoomfilter(r);
                        break;
                    case 3:
                        r = t.readEnum();
                        e.setSort(r);
                        break;
                    case 4:
                        r = t.readEnum();
                        e.setOrder(r);
                        break;
                    case 5:
                        r = t.readInt32();
                        e.setPageno(r);
                        break;
                    case 6:
                        r = t.readInt32();
                        e.setPagesize(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.GetWatchRoomsReq.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.GetWatchRoomsReq.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.GetWatchRoomsReq.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getGameid()) && t.writeUint32(1, r), null != (r = e.getRoomfilter()) && t.writeMessage(2, r, proto.stream.RoomFilter.serializeBinaryToWriter), 0 !== (r = e.getSort()) && t.writeEnum(3, r), 0 !== (r = e.getOrder()) && t.writeEnum(4, r), 0 !== (r = e.getPageno()) && t.writeInt32(5, r), 0 !== (r = e.getPagesize()) && t.writeInt32(6, r)
        },proto.stream.GetWatchRoomsReq.prototype.getGameid = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.GetWatchRoomsReq.prototype.setGameid = function (e) {
            i.Message.setProto3IntField(this, 1, e)
        },proto.stream.GetWatchRoomsReq.prototype.getRoomfilter = function () {
            return i.Message.getWrapperField(this, proto.stream.RoomFilter, 2)
        },proto.stream.GetWatchRoomsReq.prototype.setRoomfilter = function (e) {
            i.Message.setWrapperField(this, 2, e)
        },proto.stream.GetWatchRoomsReq.prototype.clearRoomfilter = function () {
            this.setRoomfilter(void 0)
        },proto.stream.GetWatchRoomsReq.prototype.hasRoomfilter = function () {
            return null != i.Message.getField(this, 2)
        },proto.stream.GetWatchRoomsReq.prototype.getSort = function () {
            return i.Message.getFieldWithDefault(this, 3, 0)
        },proto.stream.GetWatchRoomsReq.prototype.setSort = function (e) {
            i.Message.setProto3EnumField(this, 3, e)
        },proto.stream.GetWatchRoomsReq.prototype.getOrder = function () {
            return i.Message.getFieldWithDefault(this, 4, 0)
        },proto.stream.GetWatchRoomsReq.prototype.setOrder = function (e) {
            i.Message.setProto3EnumField(this, 4, e)
        },proto.stream.GetWatchRoomsReq.prototype.getPageno = function () {
            return i.Message.getFieldWithDefault(this, 5, 0)
        },proto.stream.GetWatchRoomsReq.prototype.setPageno = function (e) {
            i.Message.setProto3IntField(this, 5, e)
        },proto.stream.GetWatchRoomsReq.prototype.getPagesize = function () {
            return i.Message.getFieldWithDefault(this, 6, 0)
        },proto.stream.GetWatchRoomsReq.prototype.setPagesize = function (e) {
            i.Message.setProto3IntField(this, 6, e)
        },proto.stream.GetWatchRoomsRsp = function (e) {
            i.Message.initialize(this, e, 0, -1, proto.stream.GetWatchRoomsRsp.repeatedFields_, null)
        },o.inherits(proto.stream.GetWatchRoomsRsp, i.Message),o.DEBUG && !COMPILED && (proto.stream.GetWatchRoomsRsp.displayName = "proto.stream.GetWatchRoomsRsp"),proto.stream.GetWatchRoomsRsp.repeatedFields_ = [3],i.Message.GENERATE_TO_OBJECT && (proto.stream.GetWatchRoomsRsp.prototype.toObject = function (e) {
            return proto.stream.GetWatchRoomsRsp.toObject(e, this)
        }, proto.stream.GetWatchRoomsRsp.toObject = function (e, t) {
            var r = {
                status: i.Message.getFieldWithDefault(t, 1, 0),
                total: i.Message.getFieldWithDefault(t, 2, 0),
                roominfoexList: i.Message.toObjectList(t.getRoominfoexList(), proto.stream.RoomInfoEx.toObject, e)
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.GetWatchRoomsRsp.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.GetWatchRoomsRsp;
            return proto.stream.GetWatchRoomsRsp.deserializeBinaryFromReader(r, t)
        },proto.stream.GetWatchRoomsRsp.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readEnum();
                        e.setStatus(r);
                        break;
                    case 2:
                        r = t.readInt32();
                        e.setTotal(r);
                        break;
                    case 3:
                        r = new proto.stream.RoomInfoEx;
                        t.readMessage(r, proto.stream.RoomInfoEx.deserializeBinaryFromReader), e.addRoominfoex(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.GetWatchRoomsRsp.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.GetWatchRoomsRsp.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.GetWatchRoomsRsp.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getStatus()) && t.writeEnum(1, r), 0 !== (r = e.getTotal()) && t.writeInt32(2, r), 0 < (r = e.getRoominfoexList()).length && t.writeRepeatedMessage(3, r, proto.stream.RoomInfoEx.serializeBinaryToWriter)
        },proto.stream.GetWatchRoomsRsp.prototype.getStatus = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.GetWatchRoomsRsp.prototype.setStatus = function (e) {
            i.Message.setProto3EnumField(this, 1, e)
        },proto.stream.GetWatchRoomsRsp.prototype.getTotal = function () {
            return i.Message.getFieldWithDefault(this, 2, 0)
        },proto.stream.GetWatchRoomsRsp.prototype.setTotal = function (e) {
            i.Message.setProto3IntField(this, 2, e)
        },proto.stream.GetWatchRoomsRsp.prototype.getRoominfoexList = function () {
            return i.Message.getRepeatedWrapperField(this, proto.stream.RoomInfoEx, 3)
        },proto.stream.GetWatchRoomsRsp.prototype.setRoominfoexList = function (e) {
            i.Message.setRepeatedWrapperField(this, 3, e)
        },proto.stream.GetWatchRoomsRsp.prototype.addRoominfoex = function (e, t) {
            return i.Message.addToRepeatedWrapperField(this, 3, e, proto.stream.RoomInfoEx, t)
        },proto.stream.GetWatchRoomsRsp.prototype.clearRoominfoexList = function () {
            this.setRoominfoexList([])
        },proto.stream.TeamInfo = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.TeamInfo, i.Message),o.DEBUG && !COMPILED && (proto.stream.TeamInfo.displayName = "proto.stream.TeamInfo"),i.Message.GENERATE_TO_OBJECT && (proto.stream.TeamInfo.prototype.toObject = function (e) {
            return proto.stream.TeamInfo.toObject(e, this)
        }, proto.stream.TeamInfo.toObject = function (e, t) {
            var r = {
                teamid: i.Message.getFieldWithDefault(t, 1, "0"),
                password: i.Message.getFieldWithDefault(t, 2, ""),
                capacity: i.Message.getFieldWithDefault(t, 3, 0),
                mode: i.Message.getFieldWithDefault(t, 4, 0),
                visibility: i.Message.getFieldWithDefault(t, 5, 0),
                owner: i.Message.getFieldWithDefault(t, 6, 0)
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.TeamInfo.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.TeamInfo;
            return proto.stream.TeamInfo.deserializeBinaryFromReader(r, t)
        },proto.stream.TeamInfo.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint64String();
                        e.setTeamid(r);
                        break;
                    case 2:
                        r = t.readString();
                        e.setPassword(r);
                        break;
                    case 3:
                        r = t.readUint32();
                        e.setCapacity(r);
                        break;
                    case 4:
                        r = t.readInt32();
                        e.setMode(r);
                        break;
                    case 5:
                        r = t.readInt32();
                        e.setVisibility(r);
                        break;
                    case 6:
                        r = t.readUint32();
                        e.setOwner(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.TeamInfo.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.TeamInfo.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.TeamInfo.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            r = e.getTeamid(), 0 !== parseInt(r, 10) && t.writeUint64String(1, r), 0 < (r = e.getPassword()).length && t.writeString(2, r), 0 !== (r = e.getCapacity()) && t.writeUint32(3, r), 0 !== (r = e.getMode()) && t.writeInt32(4, r), 0 !== (r = e.getVisibility()) && t.writeInt32(5, r), 0 !== (r = e.getOwner()) && t.writeUint32(6, r)
        },proto.stream.TeamInfo.prototype.getTeamid = function () {
            return i.Message.getFieldWithDefault(this, 1, "0")
        },proto.stream.TeamInfo.prototype.setTeamid = function (e) {
            i.Message.setProto3StringIntField(this, 1, e)
        },proto.stream.TeamInfo.prototype.getPassword = function () {
            return i.Message.getFieldWithDefault(this, 2, "")
        },proto.stream.TeamInfo.prototype.setPassword = function (e) {
            i.Message.setProto3StringField(this, 2, e)
        },proto.stream.TeamInfo.prototype.getCapacity = function () {
            return i.Message.getFieldWithDefault(this, 3, 0)
        },proto.stream.TeamInfo.prototype.setCapacity = function (e) {
            i.Message.setProto3IntField(this, 3, e)
        },proto.stream.TeamInfo.prototype.getMode = function () {
            return i.Message.getFieldWithDefault(this, 4, 0)
        },proto.stream.TeamInfo.prototype.setMode = function (e) {
            i.Message.setProto3IntField(this, 4, e)
        },proto.stream.TeamInfo.prototype.getVisibility = function () {
            return i.Message.getFieldWithDefault(this, 5, 0)
        },proto.stream.TeamInfo.prototype.setVisibility = function (e) {
            i.Message.setProto3IntField(this, 5, e)
        },proto.stream.TeamInfo.prototype.getOwner = function () {
            return i.Message.getFieldWithDefault(this, 6, 0)
        },proto.stream.TeamInfo.prototype.setOwner = function (e) {
            i.Message.setProto3IntField(this, 6, e)
        },proto.stream.CreateTeamReq = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.CreateTeamReq, i.Message),o.DEBUG && !COMPILED && (proto.stream.CreateTeamReq.displayName = "proto.stream.CreateTeamReq"),i.Message.GENERATE_TO_OBJECT && (proto.stream.CreateTeamReq.prototype.toObject = function (e) {
            return proto.stream.CreateTeamReq.toObject(e, this)
        }, proto.stream.CreateTeamReq.toObject = function (e, t) {
            var r, o = {
                gameid: i.Message.getFieldWithDefault(t, 1, 0),
                teaminfo: (r = t.getTeaminfo()) && proto.stream.TeamInfo.toObject(e, r),
                playerinfo: (r = t.getPlayerinfo()) && proto.stream.PlayerInfo.toObject(e, r)
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.stream.CreateTeamReq.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.CreateTeamReq;
            return proto.stream.CreateTeamReq.deserializeBinaryFromReader(r, t)
        },proto.stream.CreateTeamReq.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setGameid(r);
                        break;
                    case 2:
                        r = new proto.stream.TeamInfo;
                        t.readMessage(r, proto.stream.TeamInfo.deserializeBinaryFromReader), e.setTeaminfo(r);
                        break;
                    case 3:
                        r = new proto.stream.PlayerInfo;
                        t.readMessage(r, proto.stream.PlayerInfo.deserializeBinaryFromReader), e.setPlayerinfo(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.CreateTeamReq.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.CreateTeamReq.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.CreateTeamReq.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getGameid()) && t.writeUint32(1, r), null != (r = e.getTeaminfo()) && t.writeMessage(2, r, proto.stream.TeamInfo.serializeBinaryToWriter), null != (r = e.getPlayerinfo()) && t.writeMessage(3, r, proto.stream.PlayerInfo.serializeBinaryToWriter)
        },proto.stream.CreateTeamReq.prototype.getGameid = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.CreateTeamReq.prototype.setGameid = function (e) {
            i.Message.setProto3IntField(this, 1, e)
        },proto.stream.CreateTeamReq.prototype.getTeaminfo = function () {
            return i.Message.getWrapperField(this, proto.stream.TeamInfo, 2)
        },proto.stream.CreateTeamReq.prototype.setTeaminfo = function (e) {
            i.Message.setWrapperField(this, 2, e)
        },proto.stream.CreateTeamReq.prototype.clearTeaminfo = function () {
            this.setTeaminfo(void 0)
        },proto.stream.CreateTeamReq.prototype.hasTeaminfo = function () {
            return null != i.Message.getField(this, 2)
        },proto.stream.CreateTeamReq.prototype.getPlayerinfo = function () {
            return i.Message.getWrapperField(this, proto.stream.PlayerInfo, 3)
        },proto.stream.CreateTeamReq.prototype.setPlayerinfo = function (e) {
            i.Message.setWrapperField(this, 3, e)
        },proto.stream.CreateTeamReq.prototype.clearPlayerinfo = function () {
            this.setPlayerinfo(void 0)
        },proto.stream.CreateTeamReq.prototype.hasPlayerinfo = function () {
            return null != i.Message.getField(this, 3)
        },proto.stream.CreateTeamRsp = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.CreateTeamRsp, i.Message),o.DEBUG && !COMPILED && (proto.stream.CreateTeamRsp.displayName = "proto.stream.CreateTeamRsp"),i.Message.GENERATE_TO_OBJECT && (proto.stream.CreateTeamRsp.prototype.toObject = function (e) {
            return proto.stream.CreateTeamRsp.toObject(e, this)
        }, proto.stream.CreateTeamRsp.toObject = function (e, t) {
            var r = {
                status: i.Message.getFieldWithDefault(t, 1, 0),
                teamid: i.Message.getFieldWithDefault(t, 2, "0"),
                owner: i.Message.getFieldWithDefault(t, 3, 0)
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.CreateTeamRsp.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.CreateTeamRsp;
            return proto.stream.CreateTeamRsp.deserializeBinaryFromReader(r, t)
        },proto.stream.CreateTeamRsp.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readEnum();
                        e.setStatus(r);
                        break;
                    case 2:
                        r = t.readUint64String();
                        e.setTeamid(r);
                        break;
                    case 3:
                        r = t.readUint32();
                        e.setOwner(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.CreateTeamRsp.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.CreateTeamRsp.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.CreateTeamRsp.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getStatus()) && t.writeEnum(1, r), r = e.getTeamid(), 0 !== parseInt(r, 10) && t.writeUint64String(2, r), 0 !== (r = e.getOwner()) && t.writeUint32(3, r)
        },proto.stream.CreateTeamRsp.prototype.getStatus = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.CreateTeamRsp.prototype.setStatus = function (e) {
            i.Message.setProto3EnumField(this, 1, e)
        },proto.stream.CreateTeamRsp.prototype.getTeamid = function () {
            return i.Message.getFieldWithDefault(this, 2, "0")
        },proto.stream.CreateTeamRsp.prototype.setTeamid = function (e) {
            i.Message.setProto3StringIntField(this, 2, e)
        },proto.stream.CreateTeamRsp.prototype.getOwner = function () {
            return i.Message.getFieldWithDefault(this, 3, 0)
        },proto.stream.CreateTeamRsp.prototype.setOwner = function (e) {
            i.Message.setProto3IntField(this, 3, e)
        },proto.stream.JoinTeamReq = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.JoinTeamReq, i.Message),o.DEBUG && !COMPILED && (proto.stream.JoinTeamReq.displayName = "proto.stream.JoinTeamReq"),i.Message.GENERATE_TO_OBJECT && (proto.stream.JoinTeamReq.prototype.toObject = function (e) {
            return proto.stream.JoinTeamReq.toObject(e, this)
        }, proto.stream.JoinTeamReq.toObject = function (e, t) {
            var r, o = {
                gameid: i.Message.getFieldWithDefault(t, 1, 0),
                teamid: i.Message.getFieldWithDefault(t, 2, "0"),
                playerinfo: (r = t.getPlayerinfo()) && proto.stream.PlayerInfo.toObject(e, r),
                password: i.Message.getFieldWithDefault(t, 4, "")
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.stream.JoinTeamReq.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.JoinTeamReq;
            return proto.stream.JoinTeamReq.deserializeBinaryFromReader(r, t)
        },proto.stream.JoinTeamReq.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setGameid(r);
                        break;
                    case 2:
                        r = t.readUint64String();
                        e.setTeamid(r);
                        break;
                    case 3:
                        r = new proto.stream.PlayerInfo;
                        t.readMessage(r, proto.stream.PlayerInfo.deserializeBinaryFromReader), e.setPlayerinfo(r);
                        break;
                    case 4:
                        r = t.readString();
                        e.setPassword(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.JoinTeamReq.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.JoinTeamReq.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.JoinTeamReq.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getGameid()) && t.writeUint32(1, r), r = e.getTeamid(), 0 !== parseInt(r, 10) && t.writeUint64String(2, r), null != (r = e.getPlayerinfo()) && t.writeMessage(3, r, proto.stream.PlayerInfo.serializeBinaryToWriter), 0 < (r = e.getPassword()).length && t.writeString(4, r)
        },proto.stream.JoinTeamReq.prototype.getGameid = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.JoinTeamReq.prototype.setGameid = function (e) {
            i.Message.setProto3IntField(this, 1, e)
        },proto.stream.JoinTeamReq.prototype.getTeamid = function () {
            return i.Message.getFieldWithDefault(this, 2, "0")
        },proto.stream.JoinTeamReq.prototype.setTeamid = function (e) {
            i.Message.setProto3StringIntField(this, 2, e)
        },proto.stream.JoinTeamReq.prototype.getPlayerinfo = function () {
            return i.Message.getWrapperField(this, proto.stream.PlayerInfo, 3)
        },proto.stream.JoinTeamReq.prototype.setPlayerinfo = function (e) {
            i.Message.setWrapperField(this, 3, e)
        },proto.stream.JoinTeamReq.prototype.clearPlayerinfo = function () {
            this.setPlayerinfo(void 0)
        },proto.stream.JoinTeamReq.prototype.hasPlayerinfo = function () {
            return null != i.Message.getField(this, 3)
        },proto.stream.JoinTeamReq.prototype.getPassword = function () {
            return i.Message.getFieldWithDefault(this, 4, "")
        },proto.stream.JoinTeamReq.prototype.setPassword = function (e) {
            i.Message.setProto3StringField(this, 4, e)
        },proto.stream.JoinTeamRsp = function (e) {
            i.Message.initialize(this, e, 0, -1, proto.stream.JoinTeamRsp.repeatedFields_, null)
        },o.inherits(proto.stream.JoinTeamRsp, i.Message),o.DEBUG && !COMPILED && (proto.stream.JoinTeamRsp.displayName = "proto.stream.JoinTeamRsp"),proto.stream.JoinTeamRsp.repeatedFields_ = [3],i.Message.GENERATE_TO_OBJECT && (proto.stream.JoinTeamRsp.prototype.toObject = function (e) {
            return proto.stream.JoinTeamRsp.toObject(e, this)
        }, proto.stream.JoinTeamRsp.toObject = function (e, t) {
            var r, o = {
                status: i.Message.getFieldWithDefault(t, 1, 0),
                teaminfo: (r = t.getTeaminfo()) && proto.stream.TeamInfo.toObject(e, r),
                usersList: i.Message.toObjectList(t.getUsersList(), proto.stream.PlayerInfo.toObject, e)
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.stream.JoinTeamRsp.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.JoinTeamRsp;
            return proto.stream.JoinTeamRsp.deserializeBinaryFromReader(r, t)
        },proto.stream.JoinTeamRsp.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readEnum();
                        e.setStatus(r);
                        break;
                    case 2:
                        r = new proto.stream.TeamInfo;
                        t.readMessage(r, proto.stream.TeamInfo.deserializeBinaryFromReader), e.setTeaminfo(r);
                        break;
                    case 3:
                        r = new proto.stream.PlayerInfo;
                        t.readMessage(r, proto.stream.PlayerInfo.deserializeBinaryFromReader), e.addUsers(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.JoinTeamRsp.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.JoinTeamRsp.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.JoinTeamRsp.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getStatus()) && t.writeEnum(1, r), null != (r = e.getTeaminfo()) && t.writeMessage(2, r, proto.stream.TeamInfo.serializeBinaryToWriter), 0 < (r = e.getUsersList()).length && t.writeRepeatedMessage(3, r, proto.stream.PlayerInfo.serializeBinaryToWriter)
        },proto.stream.JoinTeamRsp.prototype.getStatus = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.JoinTeamRsp.prototype.setStatus = function (e) {
            i.Message.setProto3EnumField(this, 1, e)
        },proto.stream.JoinTeamRsp.prototype.getTeaminfo = function () {
            return i.Message.getWrapperField(this, proto.stream.TeamInfo, 2)
        },proto.stream.JoinTeamRsp.prototype.setTeaminfo = function (e) {
            i.Message.setWrapperField(this, 2, e)
        },proto.stream.JoinTeamRsp.prototype.clearTeaminfo = function () {
            this.setTeaminfo(void 0)
        },proto.stream.JoinTeamRsp.prototype.hasTeaminfo = function () {
            return null != i.Message.getField(this, 2)
        },proto.stream.JoinTeamRsp.prototype.getUsersList = function () {
            return i.Message.getRepeatedWrapperField(this, proto.stream.PlayerInfo, 3)
        },proto.stream.JoinTeamRsp.prototype.setUsersList = function (e) {
            i.Message.setRepeatedWrapperField(this, 3, e)
        },proto.stream.JoinTeamRsp.prototype.addUsers = function (e, t) {
            return i.Message.addToRepeatedWrapperField(this, 3, e, proto.stream.PlayerInfo, t)
        },proto.stream.JoinTeamRsp.prototype.clearUsersList = function () {
            this.setUsersList([])
        },proto.stream.JoinTeamNotify = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.JoinTeamNotify, i.Message),o.DEBUG && !COMPILED && (proto.stream.JoinTeamNotify.displayName = "proto.stream.JoinTeamNotify"),i.Message.GENERATE_TO_OBJECT && (proto.stream.JoinTeamNotify.prototype.toObject = function (e) {
            return proto.stream.JoinTeamNotify.toObject(e, this)
        }, proto.stream.JoinTeamNotify.toObject = function (e, t) {
            var r, o = {user: (r = t.getUser()) && proto.stream.PlayerInfo.toObject(e, r)};
            return e && (o.$jspbMessageInstance = t), o
        }),proto.stream.JoinTeamNotify.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.JoinTeamNotify;
            return proto.stream.JoinTeamNotify.deserializeBinaryFromReader(r, t)
        },proto.stream.JoinTeamNotify.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = new proto.stream.PlayerInfo;
                        t.readMessage(r, proto.stream.PlayerInfo.deserializeBinaryFromReader), e.setUser(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.JoinTeamNotify.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.JoinTeamNotify.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.JoinTeamNotify.serializeBinaryToWriter = function (e, t) {
            var r;
            null != (r = e.getUser()) && t.writeMessage(1, r, proto.stream.PlayerInfo.serializeBinaryToWriter)
        },proto.stream.JoinTeamNotify.prototype.getUser = function () {
            return i.Message.getWrapperField(this, proto.stream.PlayerInfo, 1)
        },proto.stream.JoinTeamNotify.prototype.setUser = function (e) {
            i.Message.setWrapperField(this, 1, e)
        },proto.stream.JoinTeamNotify.prototype.clearUser = function () {
            this.setUser(void 0)
        },proto.stream.JoinTeamNotify.prototype.hasUser = function () {
            return null != i.Message.getField(this, 1)
        },proto.stream.LeaveTeamReq = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.LeaveTeamReq, i.Message),o.DEBUG && !COMPILED && (proto.stream.LeaveTeamReq.displayName = "proto.stream.LeaveTeamReq"),i.Message.GENERATE_TO_OBJECT && (proto.stream.LeaveTeamReq.prototype.toObject = function (e) {
            return proto.stream.LeaveTeamReq.toObject(e, this)
        }, proto.stream.LeaveTeamReq.toObject = function (e, t) {
            var r = {
                gameid: i.Message.getFieldWithDefault(t, 1, 0),
                teamid: i.Message.getFieldWithDefault(t, 2, "0"),
                userid: i.Message.getFieldWithDefault(t, 3, 0)
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.LeaveTeamReq.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.LeaveTeamReq;
            return proto.stream.LeaveTeamReq.deserializeBinaryFromReader(r, t)
        },proto.stream.LeaveTeamReq.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setGameid(r);
                        break;
                    case 2:
                        r = t.readUint64String();
                        e.setTeamid(r);
                        break;
                    case 3:
                        r = t.readUint32();
                        e.setUserid(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.LeaveTeamReq.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.LeaveTeamReq.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.LeaveTeamReq.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getGameid()) && t.writeUint32(1, r), r = e.getTeamid(), 0 !== parseInt(r, 10) && t.writeUint64String(2, r), 0 !== (r = e.getUserid()) && t.writeUint32(3, r)
        },proto.stream.LeaveTeamReq.prototype.getGameid = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.LeaveTeamReq.prototype.setGameid = function (e) {
            i.Message.setProto3IntField(this, 1, e)
        },proto.stream.LeaveTeamReq.prototype.getTeamid = function () {
            return i.Message.getFieldWithDefault(this, 2, "0")
        },proto.stream.LeaveTeamReq.prototype.setTeamid = function (e) {
            i.Message.setProto3StringIntField(this, 2, e)
        },proto.stream.LeaveTeamReq.prototype.getUserid = function () {
            return i.Message.getFieldWithDefault(this, 3, 0)
        },proto.stream.LeaveTeamReq.prototype.setUserid = function (e) {
            i.Message.setProto3IntField(this, 3, e)
        },proto.stream.LeaveTeamRsp = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.LeaveTeamRsp, i.Message),o.DEBUG && !COMPILED && (proto.stream.LeaveTeamRsp.displayName = "proto.stream.LeaveTeamRsp"),i.Message.GENERATE_TO_OBJECT && (proto.stream.LeaveTeamRsp.prototype.toObject = function (e) {
            return proto.stream.LeaveTeamRsp.toObject(e, this)
        }, proto.stream.LeaveTeamRsp.toObject = function (e, t) {
            var r = {
                status: i.Message.getFieldWithDefault(t, 1, 0),
                teamid: i.Message.getFieldWithDefault(t, 2, "0"),
                userid: i.Message.getFieldWithDefault(t, 3, 0)
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.LeaveTeamRsp.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.LeaveTeamRsp;
            return proto.stream.LeaveTeamRsp.deserializeBinaryFromReader(r, t)
        },proto.stream.LeaveTeamRsp.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readEnum();
                        e.setStatus(r);
                        break;
                    case 2:
                        r = t.readUint64String();
                        e.setTeamid(r);
                        break;
                    case 3:
                        r = t.readUint32();
                        e.setUserid(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.LeaveTeamRsp.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.LeaveTeamRsp.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.LeaveTeamRsp.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getStatus()) && t.writeEnum(1, r), r = e.getTeamid(), 0 !== parseInt(r, 10) && t.writeUint64String(2, r), 0 !== (r = e.getUserid()) && t.writeUint32(3, r)
        },proto.stream.LeaveTeamRsp.prototype.getStatus = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.LeaveTeamRsp.prototype.setStatus = function (e) {
            i.Message.setProto3EnumField(this, 1, e)
        },proto.stream.LeaveTeamRsp.prototype.getTeamid = function () {
            return i.Message.getFieldWithDefault(this, 2, "0")
        },proto.stream.LeaveTeamRsp.prototype.setTeamid = function (e) {
            i.Message.setProto3StringIntField(this, 2, e)
        },proto.stream.LeaveTeamRsp.prototype.getUserid = function () {
            return i.Message.getFieldWithDefault(this, 3, 0)
        },proto.stream.LeaveTeamRsp.prototype.setUserid = function (e) {
            i.Message.setProto3IntField(this, 3, e)
        },proto.stream.LeaveTeamNotify = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.LeaveTeamNotify, i.Message),o.DEBUG && !COMPILED && (proto.stream.LeaveTeamNotify.displayName = "proto.stream.LeaveTeamNotify"),i.Message.GENERATE_TO_OBJECT && (proto.stream.LeaveTeamNotify.prototype.toObject = function (e) {
            return proto.stream.LeaveTeamNotify.toObject(e, this)
        }, proto.stream.LeaveTeamNotify.toObject = function (e, t) {
            var r = {
                teamid: i.Message.getFieldWithDefault(t, 1, "0"),
                userid: i.Message.getFieldWithDefault(t, 2, 0),
                owner: i.Message.getFieldWithDefault(t, 3, 0)
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.LeaveTeamNotify.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.LeaveTeamNotify;
            return proto.stream.LeaveTeamNotify.deserializeBinaryFromReader(r, t)
        },proto.stream.LeaveTeamNotify.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint64String();
                        e.setTeamid(r);
                        break;
                    case 2:
                        r = t.readUint32();
                        e.setUserid(r);
                        break;
                    case 3:
                        r = t.readUint32();
                        e.setOwner(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.LeaveTeamNotify.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.LeaveTeamNotify.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.LeaveTeamNotify.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            r = e.getTeamid(), 0 !== parseInt(r, 10) && t.writeUint64String(1, r), 0 !== (r = e.getUserid()) && t.writeUint32(2, r), 0 !== (r = e.getOwner()) && t.writeUint32(3, r)
        },proto.stream.LeaveTeamNotify.prototype.getTeamid = function () {
            return i.Message.getFieldWithDefault(this, 1, "0")
        },proto.stream.LeaveTeamNotify.prototype.setTeamid = function (e) {
            i.Message.setProto3StringIntField(this, 1, e)
        },proto.stream.LeaveTeamNotify.prototype.getUserid = function () {
            return i.Message.getFieldWithDefault(this, 2, 0)
        },proto.stream.LeaveTeamNotify.prototype.setUserid = function (e) {
            i.Message.setProto3IntField(this, 2, e)
        },proto.stream.LeaveTeamNotify.prototype.getOwner = function () {
            return i.Message.getFieldWithDefault(this, 3, 0)
        },proto.stream.LeaveTeamNotify.prototype.setOwner = function (e) {
            i.Message.setProto3IntField(this, 3, e)
        },proto.stream.TeamMatchCond = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.TeamMatchCond, i.Message),o.DEBUG && !COMPILED && (proto.stream.TeamMatchCond.displayName = "proto.stream.TeamMatchCond"),i.Message.GENERATE_TO_OBJECT && (proto.stream.TeamMatchCond.prototype.toObject = function (e) {
            return proto.stream.TeamMatchCond.toObject(e, this)
        }, proto.stream.TeamMatchCond.toObject = function (e, t) {
            var r = {
                teamnum: i.Message.getFieldWithDefault(t, 1, 0),
                teammembernum: i.Message.getFieldWithDefault(t, 2, 0),
                timeout: i.Message.getFieldWithDefault(t, 3, 0),
                weight: i.Message.getFieldWithDefault(t, 4, 0),
                weightrange: i.Message.getFieldWithDefault(t, 5, 0),
                weightrule: i.Message.getFieldWithDefault(t, 6, 0),
                full: i.Message.getFieldWithDefault(t, 7, 0)
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.TeamMatchCond.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.TeamMatchCond;
            return proto.stream.TeamMatchCond.deserializeBinaryFromReader(r, t)
        },proto.stream.TeamMatchCond.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setTeamnum(r);
                        break;
                    case 2:
                        r = t.readUint32();
                        e.setTeammembernum(r);
                        break;
                    case 3:
                        r = t.readUint32();
                        e.setTimeout(r);
                        break;
                    case 4:
                        r = t.readUint32();
                        e.setWeight(r);
                        break;
                    case 5:
                        r = t.readUint32();
                        e.setWeightrange(r);
                        break;
                    case 6:
                        r = t.readUint32();
                        e.setWeightrule(r);
                        break;
                    case 7:
                        r = t.readUint32();
                        e.setFull(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.TeamMatchCond.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.TeamMatchCond.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.TeamMatchCond.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getTeamnum()) && t.writeUint32(1, r), 0 !== (r = e.getTeammembernum()) && t.writeUint32(2, r), 0 !== (r = e.getTimeout()) && t.writeUint32(3, r), 0 !== (r = e.getWeight()) && t.writeUint32(4, r), 0 !== (r = e.getWeightrange()) && t.writeUint32(5, r), 0 !== (r = e.getWeightrule()) && t.writeUint32(6, r), 0 !== (r = e.getFull()) && t.writeUint32(7, r)
        },proto.stream.TeamMatchCond.prototype.getTeamnum = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.TeamMatchCond.prototype.setTeamnum = function (e) {
            i.Message.setProto3IntField(this, 1, e)
        },proto.stream.TeamMatchCond.prototype.getTeammembernum = function () {
            return i.Message.getFieldWithDefault(this, 2, 0)
        },proto.stream.TeamMatchCond.prototype.setTeammembernum = function (e) {
            i.Message.setProto3IntField(this, 2, e)
        },proto.stream.TeamMatchCond.prototype.getTimeout = function () {
            return i.Message.getFieldWithDefault(this, 3, 0)
        },proto.stream.TeamMatchCond.prototype.setTimeout = function (e) {
            i.Message.setProto3IntField(this, 3, e)
        },proto.stream.TeamMatchCond.prototype.getWeight = function () {
            return i.Message.getFieldWithDefault(this, 4, 0)
        },proto.stream.TeamMatchCond.prototype.setWeight = function (e) {
            i.Message.setProto3IntField(this, 4, e)
        },proto.stream.TeamMatchCond.prototype.getWeightrange = function () {
            return i.Message.getFieldWithDefault(this, 5, 0)
        },proto.stream.TeamMatchCond.prototype.setWeightrange = function (e) {
            i.Message.setProto3IntField(this, 5, e)
        },proto.stream.TeamMatchCond.prototype.getWeightrule = function () {
            return i.Message.getFieldWithDefault(this, 6, 0)
        },proto.stream.TeamMatchCond.prototype.setWeightrule = function (e) {
            i.Message.setProto3IntField(this, 6, e)
        },proto.stream.TeamMatchCond.prototype.getFull = function () {
            return i.Message.getFieldWithDefault(this, 7, 0)
        },proto.stream.TeamMatchCond.prototype.setFull = function (e) {
            i.Message.setProto3IntField(this, 7, e)
        },proto.stream.TeamMatchReq = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.TeamMatchReq, i.Message),o.DEBUG && !COMPILED && (proto.stream.TeamMatchReq.displayName = "proto.stream.TeamMatchReq"),i.Message.GENERATE_TO_OBJECT && (proto.stream.TeamMatchReq.prototype.toObject = function (e) {
            return proto.stream.TeamMatchReq.toObject(e, this)
        }, proto.stream.TeamMatchReq.toObject = function (e, t) {
            var r, o = {
                gameid: i.Message.getFieldWithDefault(t, 1, 0),
                teamid: i.Message.getFieldWithDefault(t, 2, "0"),
                userid: i.Message.getFieldWithDefault(t, 3, 0),
                cond: (r = t.getCond()) && proto.stream.TeamMatchCond.toObject(e, r),
                roominfo: (r = t.getRoominfo()) && proto.stream.RoomInfo.toObject(e, r),
                watchsetting: (r = t.getWatchsetting()) && proto.stream.WatchSetting.toObject(e, r)
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.stream.TeamMatchReq.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.TeamMatchReq;
            return proto.stream.TeamMatchReq.deserializeBinaryFromReader(r, t)
        },proto.stream.TeamMatchReq.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setGameid(r);
                        break;
                    case 2:
                        r = t.readUint64String();
                        e.setTeamid(r);
                        break;
                    case 3:
                        r = t.readUint32();
                        e.setUserid(r);
                        break;
                    case 4:
                        r = new proto.stream.TeamMatchCond;
                        t.readMessage(r, proto.stream.TeamMatchCond.deserializeBinaryFromReader), e.setCond(r);
                        break;
                    case 5:
                        r = new proto.stream.RoomInfo;
                        t.readMessage(r, proto.stream.RoomInfo.deserializeBinaryFromReader), e.setRoominfo(r);
                        break;
                    case 6:
                        r = new proto.stream.WatchSetting;
                        t.readMessage(r, proto.stream.WatchSetting.deserializeBinaryFromReader), e.setWatchsetting(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.TeamMatchReq.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.TeamMatchReq.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.TeamMatchReq.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getGameid()) && t.writeUint32(1, r), r = e.getTeamid(), 0 !== parseInt(r, 10) && t.writeUint64String(2, r), 0 !== (r = e.getUserid()) && t.writeUint32(3, r), null != (r = e.getCond()) && t.writeMessage(4, r, proto.stream.TeamMatchCond.serializeBinaryToWriter), null != (r = e.getRoominfo()) && t.writeMessage(5, r, proto.stream.RoomInfo.serializeBinaryToWriter), null != (r = e.getWatchsetting()) && t.writeMessage(6, r, proto.stream.WatchSetting.serializeBinaryToWriter)
        },proto.stream.TeamMatchReq.prototype.getGameid = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.TeamMatchReq.prototype.setGameid = function (e) {
            i.Message.setProto3IntField(this, 1, e)
        },proto.stream.TeamMatchReq.prototype.getTeamid = function () {
            return i.Message.getFieldWithDefault(this, 2, "0")
        },proto.stream.TeamMatchReq.prototype.setTeamid = function (e) {
            i.Message.setProto3StringIntField(this, 2, e)
        },proto.stream.TeamMatchReq.prototype.getUserid = function () {
            return i.Message.getFieldWithDefault(this, 3, 0)
        },proto.stream.TeamMatchReq.prototype.setUserid = function (e) {
            i.Message.setProto3IntField(this, 3, e)
        },proto.stream.TeamMatchReq.prototype.getCond = function () {
            return i.Message.getWrapperField(this, proto.stream.TeamMatchCond, 4)
        },proto.stream.TeamMatchReq.prototype.setCond = function (e) {
            i.Message.setWrapperField(this, 4, e)
        },proto.stream.TeamMatchReq.prototype.clearCond = function () {
            this.setCond(void 0)
        },proto.stream.TeamMatchReq.prototype.hasCond = function () {
            return null != i.Message.getField(this, 4)
        },proto.stream.TeamMatchReq.prototype.getRoominfo = function () {
            return i.Message.getWrapperField(this, proto.stream.RoomInfo, 5)
        },proto.stream.TeamMatchReq.prototype.setRoominfo = function (e) {
            i.Message.setWrapperField(this, 5, e)
        },proto.stream.TeamMatchReq.prototype.clearRoominfo = function () {
            this.setRoominfo(void 0)
        },proto.stream.TeamMatchReq.prototype.hasRoominfo = function () {
            return null != i.Message.getField(this, 5)
        },proto.stream.TeamMatchReq.prototype.getWatchsetting = function () {
            return i.Message.getWrapperField(this, proto.stream.WatchSetting, 6)
        },proto.stream.TeamMatchReq.prototype.setWatchsetting = function (e) {
            i.Message.setWrapperField(this, 6, e)
        },proto.stream.TeamMatchReq.prototype.clearWatchsetting = function () {
            this.setWatchsetting(void 0)
        },proto.stream.TeamMatchReq.prototype.hasWatchsetting = function () {
            return null != i.Message.getField(this, 6)
        },proto.stream.TeamMatchRsp = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.TeamMatchRsp, i.Message),o.DEBUG && !COMPILED && (proto.stream.TeamMatchRsp.displayName = "proto.stream.TeamMatchRsp"),i.Message.GENERATE_TO_OBJECT && (proto.stream.TeamMatchRsp.prototype.toObject = function (e) {
            return proto.stream.TeamMatchRsp.toObject(e, this)
        }, proto.stream.TeamMatchRsp.toObject = function (e, t) {
            var r = {status: i.Message.getFieldWithDefault(t, 1, 0)};
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.TeamMatchRsp.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.TeamMatchRsp;
            return proto.stream.TeamMatchRsp.deserializeBinaryFromReader(r, t)
        },proto.stream.TeamMatchRsp.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readEnum();
                        e.setStatus(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.TeamMatchRsp.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.TeamMatchRsp.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.TeamMatchRsp.serializeBinaryToWriter = function (e, t) {
            var r;
            0 !== (r = e.getStatus()) && t.writeEnum(1, r)
        },proto.stream.TeamMatchRsp.prototype.getStatus = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.TeamMatchRsp.prototype.setStatus = function (e) {
            i.Message.setProto3EnumField(this, 1, e)
        },proto.stream.TeamDetail = function (e) {
            i.Message.initialize(this, e, 0, -1, proto.stream.TeamDetail.repeatedFields_, null)
        },o.inherits(proto.stream.TeamDetail, i.Message),o.DEBUG && !COMPILED && (proto.stream.TeamDetail.displayName = "proto.stream.TeamDetail"),proto.stream.TeamDetail.repeatedFields_ = [2],i.Message.GENERATE_TO_OBJECT && (proto.stream.TeamDetail.prototype.toObject = function (e) {
            return proto.stream.TeamDetail.toObject(e, this)
        }, proto.stream.TeamDetail.toObject = function (e, t) {
            var r, o = {
                teaminfo: (r = t.getTeaminfo()) && proto.stream.TeamInfo.toObject(e, r),
                playerList: i.Message.toObjectList(t.getPlayerList(), proto.stream.PlayerInfo.toObject, e)
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.stream.TeamDetail.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.TeamDetail;
            return proto.stream.TeamDetail.deserializeBinaryFromReader(r, t)
        },proto.stream.TeamDetail.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = new proto.stream.TeamInfo;
                        t.readMessage(r, proto.stream.TeamInfo.deserializeBinaryFromReader), e.setTeaminfo(r);
                        break;
                    case 2:
                        r = new proto.stream.PlayerInfo;
                        t.readMessage(r, proto.stream.PlayerInfo.deserializeBinaryFromReader), e.addPlayer(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.TeamDetail.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.TeamDetail.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.TeamDetail.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            null != (r = e.getTeaminfo()) && t.writeMessage(1, r, proto.stream.TeamInfo.serializeBinaryToWriter), 0 < (r = e.getPlayerList()).length && t.writeRepeatedMessage(2, r, proto.stream.PlayerInfo.serializeBinaryToWriter)
        },proto.stream.TeamDetail.prototype.getTeaminfo = function () {
            return i.Message.getWrapperField(this, proto.stream.TeamInfo, 1)
        },proto.stream.TeamDetail.prototype.setTeaminfo = function (e) {
            i.Message.setWrapperField(this, 1, e)
        },proto.stream.TeamDetail.prototype.clearTeaminfo = function () {
            this.setTeaminfo(void 0)
        },proto.stream.TeamDetail.prototype.hasTeaminfo = function () {
            return null != i.Message.getField(this, 1)
        },proto.stream.TeamDetail.prototype.getPlayerList = function () {
            return i.Message.getRepeatedWrapperField(this, proto.stream.PlayerInfo, 2)
        },proto.stream.TeamDetail.prototype.setPlayerList = function (e) {
            i.Message.setRepeatedWrapperField(this, 2, e)
        },proto.stream.TeamDetail.prototype.addPlayer = function (e, t) {
            return i.Message.addToRepeatedWrapperField(this, 2, e, proto.stream.PlayerInfo, t)
        },proto.stream.TeamDetail.prototype.clearPlayerList = function () {
            this.setPlayerList([])
        },proto.stream.BrigadeInfo = function (e) {
            i.Message.initialize(this, e, 0, -1, proto.stream.BrigadeInfo.repeatedFields_, null)
        },o.inherits(proto.stream.BrigadeInfo, i.Message),o.DEBUG && !COMPILED && (proto.stream.BrigadeInfo.displayName = "proto.stream.BrigadeInfo"),proto.stream.BrigadeInfo.repeatedFields_ = [2],i.Message.GENERATE_TO_OBJECT && (proto.stream.BrigadeInfo.prototype.toObject = function (e) {
            return proto.stream.BrigadeInfo.toObject(e, this)
        }, proto.stream.BrigadeInfo.toObject = function (e, t) {
            var r = {
                brigadeid: i.Message.getFieldWithDefault(t, 1, 0),
                teamsList: i.Message.toObjectList(t.getTeamsList(), proto.stream.TeamDetail.toObject, e)
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.BrigadeInfo.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.BrigadeInfo;
            return proto.stream.BrigadeInfo.deserializeBinaryFromReader(r, t)
        },proto.stream.BrigadeInfo.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setBrigadeid(r);
                        break;
                    case 2:
                        r = new proto.stream.TeamDetail;
                        t.readMessage(r, proto.stream.TeamDetail.deserializeBinaryFromReader), e.addTeams(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.BrigadeInfo.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.BrigadeInfo.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.BrigadeInfo.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getBrigadeid()) && t.writeUint32(1, r), 0 < (r = e.getTeamsList()).length && t.writeRepeatedMessage(2, r, proto.stream.TeamDetail.serializeBinaryToWriter)
        },proto.stream.BrigadeInfo.prototype.getBrigadeid = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.BrigadeInfo.prototype.setBrigadeid = function (e) {
            i.Message.setProto3IntField(this, 1, e)
        },proto.stream.BrigadeInfo.prototype.getTeamsList = function () {
            return i.Message.getRepeatedWrapperField(this, proto.stream.TeamDetail, 2)
        },proto.stream.BrigadeInfo.prototype.setTeamsList = function (e) {
            i.Message.setRepeatedWrapperField(this, 2, e)
        },proto.stream.BrigadeInfo.prototype.addTeams = function (e, t) {
            return i.Message.addToRepeatedWrapperField(this, 2, e, proto.stream.TeamDetail, t)
        },proto.stream.BrigadeInfo.prototype.clearTeamsList = function () {
            this.setTeamsList([])
        },proto.stream.TeamMatchResultNotify = function (e) {
            i.Message.initialize(this, e, 0, -1, proto.stream.TeamMatchResultNotify.repeatedFields_, null)
        },o.inherits(proto.stream.TeamMatchResultNotify, i.Message),o.DEBUG && !COMPILED && (proto.stream.TeamMatchResultNotify.displayName = "proto.stream.TeamMatchResultNotify"),proto.stream.TeamMatchResultNotify.repeatedFields_ = [2],i.Message.GENERATE_TO_OBJECT && (proto.stream.TeamMatchResultNotify.prototype.toObject = function (e) {
            return proto.stream.TeamMatchResultNotify.toObject(e, this)
        }, proto.stream.TeamMatchResultNotify.toObject = function (e, t) {
            var r, o = {
                status: i.Message.getFieldWithDefault(t, 1, 0),
                brigadesList: i.Message.toObjectList(t.getBrigadesList(), proto.stream.BrigadeInfo.toObject, e),
                roominfo: (r = t.getRoominfo()) && proto.stream.RoomInfo.toObject(e, r),
                bookinfo: (r = t.getBookinfo()) && proto.stream.BookInfo.toObject(e, r)
            };
            return e && (o.$jspbMessageInstance = t), o
        }),proto.stream.TeamMatchResultNotify.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.TeamMatchResultNotify;
            return proto.stream.TeamMatchResultNotify.deserializeBinaryFromReader(r, t)
        },proto.stream.TeamMatchResultNotify.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readEnum();
                        e.setStatus(r);
                        break;
                    case 2:
                        r = new proto.stream.BrigadeInfo;
                        t.readMessage(r, proto.stream.BrigadeInfo.deserializeBinaryFromReader), e.addBrigades(r);
                        break;
                    case 3:
                        r = new proto.stream.RoomInfo;
                        t.readMessage(r, proto.stream.RoomInfo.deserializeBinaryFromReader), e.setRoominfo(r);
                        break;
                    case 4:
                        r = new proto.stream.BookInfo;
                        t.readMessage(r, proto.stream.BookInfo.deserializeBinaryFromReader), e.setBookinfo(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.TeamMatchResultNotify.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.TeamMatchResultNotify.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.TeamMatchResultNotify.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getStatus()) && t.writeEnum(1, r), 0 < (r = e.getBrigadesList()).length && t.writeRepeatedMessage(2, r, proto.stream.BrigadeInfo.serializeBinaryToWriter), null != (r = e.getRoominfo()) && t.writeMessage(3, r, proto.stream.RoomInfo.serializeBinaryToWriter), null != (r = e.getBookinfo()) && t.writeMessage(4, r, proto.stream.BookInfo.serializeBinaryToWriter)
        },proto.stream.TeamMatchResultNotify.prototype.getStatus = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.TeamMatchResultNotify.prototype.setStatus = function (e) {
            i.Message.setProto3EnumField(this, 1, e)
        },proto.stream.TeamMatchResultNotify.prototype.getBrigadesList = function () {
            return i.Message.getRepeatedWrapperField(this, proto.stream.BrigadeInfo, 2)
        },proto.stream.TeamMatchResultNotify.prototype.setBrigadesList = function (e) {
            i.Message.setRepeatedWrapperField(this, 2, e)
        },proto.stream.TeamMatchResultNotify.prototype.addBrigades = function (e, t) {
            return i.Message.addToRepeatedWrapperField(this, 2, e, proto.stream.BrigadeInfo, t)
        },proto.stream.TeamMatchResultNotify.prototype.clearBrigadesList = function () {
            this.setBrigadesList([])
        },proto.stream.TeamMatchResultNotify.prototype.getRoominfo = function () {
            return i.Message.getWrapperField(this, proto.stream.RoomInfo, 3)
        },proto.stream.TeamMatchResultNotify.prototype.setRoominfo = function (e) {
            i.Message.setWrapperField(this, 3, e)
        },proto.stream.TeamMatchResultNotify.prototype.clearRoominfo = function () {
            this.setRoominfo(void 0)
        },proto.stream.TeamMatchResultNotify.prototype.hasRoominfo = function () {
            return null != i.Message.getField(this, 3)
        },proto.stream.TeamMatchResultNotify.prototype.getBookinfo = function () {
            return i.Message.getWrapperField(this, proto.stream.BookInfo, 4)
        },proto.stream.TeamMatchResultNotify.prototype.setBookinfo = function (e) {
            i.Message.setWrapperField(this, 4, e)
        },proto.stream.TeamMatchResultNotify.prototype.clearBookinfo = function () {
            this.setBookinfo(void 0)
        },proto.stream.TeamMatchResultNotify.prototype.hasBookinfo = function () {
            return null != i.Message.getField(this, 4)
        },proto.stream.TeamMatchStartNotify = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.TeamMatchStartNotify, i.Message),o.DEBUG && !COMPILED && (proto.stream.TeamMatchStartNotify.displayName = "proto.stream.TeamMatchStartNotify"),i.Message.GENERATE_TO_OBJECT && (proto.stream.TeamMatchStartNotify.prototype.toObject = function (e) {
            return proto.stream.TeamMatchStartNotify.toObject(e, this)
        }, proto.stream.TeamMatchStartNotify.toObject = function (e, t) {
            var r = {teamid: i.Message.getFieldWithDefault(t, 1, "0"), userid: i.Message.getFieldWithDefault(t, 2, 0)};
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.TeamMatchStartNotify.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.TeamMatchStartNotify;
            return proto.stream.TeamMatchStartNotify.deserializeBinaryFromReader(r, t)
        },proto.stream.TeamMatchStartNotify.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint64String();
                        e.setTeamid(r);
                        break;
                    case 2:
                        r = t.readUint32();
                        e.setUserid(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.TeamMatchStartNotify.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.TeamMatchStartNotify.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.TeamMatchStartNotify.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            r = e.getTeamid(), 0 !== parseInt(r, 10) && t.writeUint64String(1, r), 0 !== (r = e.getUserid()) && t.writeUint32(2, r)
        },proto.stream.TeamMatchStartNotify.prototype.getTeamid = function () {
            return i.Message.getFieldWithDefault(this, 1, "0")
        },proto.stream.TeamMatchStartNotify.prototype.setTeamid = function (e) {
            i.Message.setProto3StringIntField(this, 1, e)
        },proto.stream.TeamMatchStartNotify.prototype.getUserid = function () {
            return i.Message.getFieldWithDefault(this, 2, 0)
        },proto.stream.TeamMatchStartNotify.prototype.setUserid = function (e) {
            i.Message.setProto3IntField(this, 2, e)
        },proto.stream.CmdId = {
            NOCMD: 0,
            LOGINREQ: 1101,
            LOGINRSP: 1102,
            HEARTBEATREQ: 1103,
            LOGOUTREQ: 1105,
            LOGOUTRSP: 1106,
            SETRECONNECTTIMEOUTREQ: 1109,
            SETRECONNECTTIMEOUTRSP: 1110,
            NETWORKSTATEREQ: 1120,
            NETWORKSTATERSP: 1121,
            NOTICENETWORKSTATEREQ: 1122,
            JOINROOMREQ: 1201,
            JOINROOMRSP: 1202,
            NOTICEUSERJOINREQ: 1301,
            CREATEROOMREQ: 1203,
            CREATEROOMRSP: 1204,
            LEAVEROOMREQ: 1205,
            LEAVEROOMRSP: 1206,
            NOTICEUSERLEAVEREQ: 1302,
            GETROOMLISTREQ: 1207,
            GETROOMLISTRSP: 1208,
            GETROOMDETAILREQ: 1209,
            GETROOMDETAILRSP: 1210,
            ROOMDETAILUPDATENOTIFY: 1211,
            JOINOVERREQ: 1213,
            JOINOVERRSP: 1214,
            JOINOVERNOTIFY: 1306,
            ROOMLISTEXREQ: 1215,
            ROOMLISTEXRSP: 1216,
            MVSSTARTEDREQ: 1217,
            MVSSTARTEDRSP: 1218,
            SETROOMPROPERTYREQ: 1219,
            SETROOMPROPERTYRSP: 1220,
            NOTICEROOMPROPERTY: 1307,
            JOINOPENREQ: 1221,
            JOINOPENRSP: 1222,
            JOINOPENNOTIFY: 1308,
            DESTROYROOMREQ: 1223,
            DESTROYROOMRSP: 1224,
            JOINWATCHROOMREQ: 1225,
            JOINWATCHROOMRSP: 1226,
            LEAVEWATCHROOMREQ: 1227,
            LEAVEWATCHROOMRSP: 1228,
            GETWATCHROOMSREQ: 1229,
            GETWATCHROOMSRSP: 1230,
            CHANGEROLEREQ: 1231,
            CHANGEROLERSP: 1232,
            KICKPLAYERREQ: 1303,
            KICKPLAYERRSP: 1304,
            KICKPLAYERNOTIFY: 1305,
            CREATETEAMREQ: 1233,
            CREATETEAMRSP: 1234,
            JOINTEAMREQ: 1235,
            JOINTEAMRSP: 1236,
            JOINTEAMNOTIFY: 1309,
            LEAVETEAMREQ: 1237,
            LEAVETEAMRSP: 1238,
            LEAVETEAMNOTIFY: 1310,
            TEAMMATCHREQ: 1239,
            TEAMMATCHRSP: 1240,
            TEAMMATCHRESULTNOTIFY: 1311,
            TEAMMATCHSTARTNOTIFY: 1312
        },proto.stream.JoinRoomType = {
            NOJOIN: 0,
            JOINSPECIALROOM: 1,
            JOINROOMWITHPROPERTY: 2,
            JOINRANDOMROOM: 3,
            REJOINROOM: 4,
            CREATEJOINROOM: 5,
            WATCHERJOIN: 6
        },proto.stream.RoomState = {
            ROOMSTATENIL: 0,
            ROOMSTATEOPEN: 1,
            ROOMSTATECLOSED: 2
        },proto.stream.CreateFlag = {
            CREATEROOMUNKNOWN: 0,
            CREATEROOMSYSTEM: 1,
            CREATEROOMPLAYER: 2,
            CREATEROOMGS: 3
        },proto.stream.RoomListSort = {NIL: 0, CREATETIME: 1, PLAYERNUM: 2, STATE: 3},proto.stream.SortOrder = {
            ASC: 0,
            DESC: 1
        },proto.stream.RoomType = {GAMEROOM: 0, WATCHROOMTYPE: 1},o.object.extend(r, proto.stream)
    }, {"./errorcode_pb.js": 5, "google-protobuf": 8}], 8: [function (_require, module, exports) {
        (function (global, Buffer) {
            var $jscomp = {
                scope: {}, getGlobal: function (e) {
                    return "undefined" != typeof window && window === e ? e : void 0 !== global ? global : e
                }
            };
            $jscomp.global = $jscomp.getGlobal(this), $jscomp.initSymbol = function () {
                $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol), $jscomp.initSymbol = function () {
                }
            }, $jscomp.symbolCounter_ = 0, $jscomp.Symbol = function (e) {
                return "jscomp_symbol_" + e + $jscomp.symbolCounter_++
            }, $jscomp.initSymbolIterator = function () {
                $jscomp.initSymbol(), $jscomp.global.Symbol.iterator || ($jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator")), $jscomp.initSymbolIterator = function () {
                }
            }, $jscomp.makeIterator = function (e) {
                $jscomp.initSymbolIterator(), $jscomp.initSymbol(), $jscomp.initSymbolIterator();
                var t = e[Symbol.iterator];
                if (t) return t.call(e);
                var r = 0;
                return {
                    next: function () {
                        return r < e.length ? {done: !1, value: e[r++]} : {done: !0}
                    }
                }
            }, $jscomp.arrayFromIterator = function (e) {
                for (var t, r = []; !(t = e.next()).done;) r.push(t.value);
                return r
            }, $jscomp.arrayFromIterable = function (e) {
                return e instanceof Array ? e : $jscomp.arrayFromIterator($jscomp.makeIterator(e))
            }, $jscomp.inherits = function (e, t) {
                function r() {
                }

                for (var o in r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e, t) if (Object.defineProperties) {
                    var i = Object.getOwnPropertyDescriptor(t, o);
                    i && Object.defineProperty(e, o, i)
                } else e[o] = t[o]
            }, $jscomp.array = $jscomp.array || {}, $jscomp.iteratorFromArray = function (t, r) {
                $jscomp.initSymbolIterator(), t instanceof String && (t += "");
                var o = 0, i = {
                    next: function () {
                        if (o < t.length) {
                            var e = o++;
                            return {value: r(e, t[e]), done: !1}
                        }
                        return i.next = function () {
                            return {done: !0, value: void 0}
                        }, i.next()
                    }
                };
                return $jscomp.initSymbol(), $jscomp.initSymbolIterator(), i[Symbol.iterator] = function () {
                    return i
                }, i
            }, $jscomp.findInternal = function (e, t, r) {
                e instanceof String && (e = String(e));
                for (var o = e.length, i = 0; i < o; i++) {
                    var s = e[i];
                    if (t.call(r, s, i, e)) return {i: i, v: s}
                }
                return {i: -1, v: void 0}
            }, $jscomp.array.from = function (e, t, r) {
                $jscomp.initSymbolIterator(), t = null != t ? t : function (e) {
                    return e
                };
                var o = [];
                if ($jscomp.initSymbol(), $jscomp.initSymbolIterator(), "function" == typeof (i = e[Symbol.iterator]) && (e = i.call(e)), "function" == typeof e.next) for (; !(i = e.next()).done;) o.push(t.call(r, i.value)); else for (var i = e.length, s = 0; s < i; s++) o.push(t.call(r, e[s]));
                return o
            }, $jscomp.array.of = function (e) {
                return $jscomp.array.from(arguments)
            }, $jscomp.array.entries = function () {
                return $jscomp.iteratorFromArray(this, function (e, t) {
                    return [e, t]
                })
            }, $jscomp.array.installHelper_ = function (e, t) {
                !Array.prototype[e] && Object.defineProperties && Object.defineProperty && Object.defineProperty(Array.prototype, e, {
                    configurable: !0,
                    enumerable: !1,
                    writable: !0,
                    value: t
                })
            }, $jscomp.array.entries$install = function () {
                $jscomp.array.installHelper_("entries", $jscomp.array.entries)
            }, $jscomp.array.keys = function () {
                return $jscomp.iteratorFromArray(this, function (e) {
                    return e
                })
            }, $jscomp.array.keys$install = function () {
                $jscomp.array.installHelper_("keys", $jscomp.array.keys)
            }, $jscomp.array.values = function () {
                return $jscomp.iteratorFromArray(this, function (e, t) {
                    return t
                })
            }, $jscomp.array.values$install = function () {
                $jscomp.array.installHelper_("values", $jscomp.array.values)
            }, $jscomp.array.copyWithin = function (e, t, r) {
                var o = this.length;
                if (e = Number(e), t = Number(t), r = Number(null != r ? r : o), e < t) for (r = Math.min(r, o); t < r;) t in this ? this[e++] = this[t++] : (delete this[e++], t++); else for (e += (r = Math.min(r, o + t - e)) - t; t < r;) --r in this ? this[--e] = this[r] : delete this[e];
                return this
            }, $jscomp.array.copyWithin$install = function () {
                $jscomp.array.installHelper_("copyWithin", $jscomp.array.copyWithin)
            }, $jscomp.array.fill = function (e, t, r) {
                var o = this.length || 0;
                for (t < 0 && (t = Math.max(0, o + t)), (null == r || o < r) && (r = o), (r = Number(r)) < 0 && (r = Math.max(0, o + r)), t = Number(t || 0); t < r; t++) this[t] = e;
                return this
            }, $jscomp.array.fill$install = function () {
                $jscomp.array.installHelper_("fill", $jscomp.array.fill)
            }, $jscomp.array.find = function (e, t) {
                return $jscomp.findInternal(this, e, t).v
            }, $jscomp.array.find$install = function () {
                $jscomp.array.installHelper_("find", $jscomp.array.find)
            }, $jscomp.array.findIndex = function (e, t) {
                return $jscomp.findInternal(this, e, t).i
            }, $jscomp.array.findIndex$install = function () {
                $jscomp.array.installHelper_("findIndex", $jscomp.array.findIndex)
            }, $jscomp.ASSUME_NO_NATIVE_MAP = !1, $jscomp.Map$isConformant = function () {
                if ($jscomp.ASSUME_NO_NATIVE_MAP) return !1;
                var e = $jscomp.global.Map;
                if (!e || !e.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var t = Object.seal({x: 4}), r = new e($jscomp.makeIterator([[t, "s"]]));
                    if ("s" != r.get(t) || 1 != r.size || r.get({x: 4}) || r.set({x: 4}, "t") != r || 2 != r.size) return !1;
                    var o = r.entries(), i = o.next();
                    return !i.done && i.value[0] == t && "s" == i.value[1] && !((i = o.next()).done || 4 != i.value[0].x || "t" != i.value[1] || !o.next().done)
                } catch (e) {
                    return !1
                }
            }, $jscomp.Map = function (e) {
                if (this.data_ = {}, this.head_ = $jscomp.Map.createHead(), this.size = 0, e) {
                    e = $jscomp.makeIterator(e);
                    for (var t; !(t = e.next()).done;) t = t.value, this.set(t[0], t[1])
                }
            }, $jscomp.Map.prototype.set = function (e, t) {
                var r = $jscomp.Map.maybeGetEntry(this, e);
                return r.list || (r.list = this.data_[r.id] = []), r.entry ? r.entry.value = t : (r.entry = {
                    next: this.head_,
                    previous: this.head_.previous,
                    head: this.head_,
                    key: e,
                    value: t
                }, r.list.push(r.entry), this.head_.previous.next = r.entry, this.head_.previous = r.entry, this.size++), this
            }, $jscomp.Map.prototype.delete = function (e) {
                return !(!(e = $jscomp.Map.maybeGetEntry(this, e)).entry || !e.list) && (e.list.splice(e.index, 1), e.list.length || delete this.data_[e.id], e.entry.previous.next = e.entry.next, e.entry.next.previous = e.entry.previous, e.entry.head = null, this.size--, !0)
            }, $jscomp.Map.prototype.clear = function () {
                this.data_ = {}, this.head_ = this.head_.previous = $jscomp.Map.createHead(), this.size = 0
            }, $jscomp.Map.prototype.has = function (e) {
                return !!$jscomp.Map.maybeGetEntry(this, e).entry
            }, $jscomp.Map.prototype.get = function (e) {
                return (e = $jscomp.Map.maybeGetEntry(this, e).entry) && e.value
            }, $jscomp.Map.prototype.entries = function () {
                return $jscomp.Map.makeIterator_(this, function (e) {
                    return [e.key, e.value]
                })
            }, $jscomp.Map.prototype.keys = function () {
                return $jscomp.Map.makeIterator_(this, function (e) {
                    return e.key
                })
            }, $jscomp.Map.prototype.values = function () {
                return $jscomp.Map.makeIterator_(this, function (e) {
                    return e.value
                })
            }, $jscomp.Map.prototype.forEach = function (e, t) {
                for (var r, o = this.entries(); !(r = o.next()).done;) r = r.value, e.call(t, r[1], r[0], this)
            }, $jscomp.Map.maybeGetEntry = function (e, t) {
                var r = $jscomp.Map.getId(t), o = e.data_[r];
                if (o && Object.prototype.hasOwnProperty.call(e.data_, r)) for (var i = 0; i < o.length; i++) {
                    var s = o[i];
                    if (t != t && s.key != s.key || t === s.key) return {id: r, list: o, index: i, entry: s}
                }
                return {id: r, list: o, index: -1, entry: void 0}
            }, $jscomp.Map.makeIterator_ = function (e, t) {
                var r = e.head_, o = {
                    next: function () {
                        if (r) {
                            for (; r.head != e.head_;) r = r.previous;
                            for (; r.next != r.head;) return r = r.next, {done: !1, value: t(r)};
                            r = null
                        }
                        return {done: !0, value: void 0}
                    }
                };
                return $jscomp.initSymbol(), $jscomp.initSymbolIterator(), o[Symbol.iterator] = function () {
                    return o
                }, o
            }, $jscomp.Map.mapIndex_ = 0, $jscomp.Map.createHead = function () {
                var e = {};
                return e.previous = e.next = e.head = e
            }, $jscomp.Map.getId = function (e) {
                if (!(e instanceof Object)) return "p_" + e;
                if (!($jscomp.Map.idKey in e)) try {
                    $jscomp.Map.defineProperty(e, $jscomp.Map.idKey, {value: ++$jscomp.Map.mapIndex_})
                } catch (e) {
                }
                return $jscomp.Map.idKey in e ? e[$jscomp.Map.idKey] : "o_ " + e
            }, $jscomp.Map.defineProperty = Object.defineProperty ? function (e, t, r) {
                Object.defineProperty(e, t, {value: String(r)})
            } : function (e, t, r) {
                e[t] = String(r)
            }, $jscomp.Map.Entry = function () {
            }, $jscomp.Map$install = function () {
                $jscomp.initSymbol(), $jscomp.initSymbolIterator(), $jscomp.Map$isConformant() ? $jscomp.Map = $jscomp.global.Map : ($jscomp.initSymbol(), $jscomp.initSymbolIterator(), $jscomp.Map.prototype[Symbol.iterator] = $jscomp.Map.prototype.entries, $jscomp.initSymbol(), $jscomp.Map.idKey = Symbol("map-id-key"), $jscomp.Map$install = function () {
                })
            }, $jscomp.math = $jscomp.math || {}, $jscomp.math.clz32 = function (e) {
                if (0 === (e = Number(e) >>> 0)) return 32;
                var t = 0;
                return 0 == (4294901760 & e) && (e <<= 16, t += 16), 0 == (4278190080 & e) && (e <<= 8, t += 8), 0 == (4026531840 & e) && (e <<= 4, t += 4), 0 == (3221225472 & e) && (e <<= 2, t += 2), 0 == (2147483648 & e) && t++, t
            }, $jscomp.math.imul = function (e, t) {
                var r = 65535 & (e = Number(e)), o = 65535 & (t = Number(t));
                return r * o + ((e >>> 16 & 65535) * o + r * (t >>> 16 & 65535) << 16 >>> 0) | 0
            }, $jscomp.math.sign = function (e) {
                return 0 === (e = Number(e)) || isNaN(e) ? e : 0 < e ? 1 : -1
            }, $jscomp.math.log10 = function (e) {
                return Math.log(e) / Math.LN10
            }, $jscomp.math.log2 = function (e) {
                return Math.log(e) / Math.LN2
            }, $jscomp.math.log1p = function (e) {
                if ((e = Number(e)) < .25 && -.25 < e) {
                    for (var t = e, r = 1, o = e, i = 0, s = 1; i != o;) o = (i = o) + (s *= -1) * (t *= e) / ++r;
                    return o
                }
                return Math.log(1 + e)
            }, $jscomp.math.expm1 = function (e) {
                if ((e = Number(e)) < .25 && -.25 < e) {
                    for (var t = e, r = 1, o = e, i = 0; i != o;) o = (i = o) + (t *= e / ++r);
                    return o
                }
                return Math.exp(e) - 1
            }, $jscomp.math.cosh = function (e) {
                return e = Number(e), (Math.exp(e) + Math.exp(-e)) / 2
            }, $jscomp.math.sinh = function (e) {
                return 0 === (e = Number(e)) ? e : (Math.exp(e) - Math.exp(-e)) / 2
            }, $jscomp.math.tanh = function (e) {
                if (0 === (e = Number(e))) return e;
                var t = (1 - (t = Math.exp(-2 * Math.abs(e)))) / (1 + t);
                return e < 0 ? -t : t
            }, $jscomp.math.acosh = function (e) {
                return e = Number(e), Math.log(e + Math.sqrt(e * e - 1))
            }, $jscomp.math.asinh = function (e) {
                if (0 === (e = Number(e))) return e;
                var t = Math.log(Math.abs(e) + Math.sqrt(e * e + 1));
                return e < 0 ? -t : t
            }, $jscomp.math.atanh = function (e) {
                return e = Number(e), ($jscomp.math.log1p(e) - $jscomp.math.log1p(-e)) / 2
            }, $jscomp.math.hypot = function (e, t, r) {
                e = Number(e), t = Number(t);
                var o, i, s, a = Math.max(Math.abs(e), Math.abs(t));
                for (o = 2; o < arguments.length; o++) a = Math.max(a, Math.abs(arguments[o]));
                if (1e100 < a || a < 1e-100) {
                    for (s = (e /= a) * e + (t /= a) * t, o = 2; o < arguments.length; o++) s += (i = Number(arguments[o]) / a) * i;
                    return Math.sqrt(s) * a
                }
                for (s = e * e + t * t, o = 2; o < arguments.length; o++) s += (i = Number(arguments[o])) * i;
                return Math.sqrt(s)
            }, $jscomp.math.trunc = function (e) {
                if (e = Number(e), isNaN(e) || 1 / 0 === e || -1 / 0 === e || 0 === e) return e;
                var t = Math.floor(Math.abs(e));
                return e < 0 ? -t : t
            }, $jscomp.math.cbrt = function (e) {
                if (0 === e) return e;
                e = Number(e);
                var t = Math.pow(Math.abs(e), 1 / 3);
                return e < 0 ? -t : t
            }, $jscomp.number = $jscomp.number || {}, $jscomp.number.isFinite = function (e) {
                return "number" == typeof e && (!isNaN(e) && 1 / 0 !== e && -1 / 0 !== e)
            }, $jscomp.number.isInteger = function (e) {
                return !!$jscomp.number.isFinite(e) && e === Math.floor(e)
            }, $jscomp.number.isNaN = function (e) {
                return "number" == typeof e && isNaN(e)
            }, $jscomp.number.isSafeInteger = function (e) {
                return $jscomp.number.isInteger(e) && Math.abs(e) <= $jscomp.number.MAX_SAFE_INTEGER
            }, $jscomp.number.EPSILON = Math.pow(2, -52), $jscomp.number.MAX_SAFE_INTEGER = 9007199254740991, $jscomp.number.MIN_SAFE_INTEGER = -9007199254740991, $jscomp.object = $jscomp.object || {}, $jscomp.object.assign = function (e, t) {
                for (var r = 1; r < arguments.length; r++) {
                    var o = arguments[r];
                    if (o) for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (e[i] = o[i])
                }
                return e
            }, $jscomp.object.is = function (e, t) {
                return e === t ? 0 !== e || 1 / e == 1 / t : e != e && t != t
            }, $jscomp.ASSUME_NO_NATIVE_SET = !1, $jscomp.Set$isConformant = function () {
                if ($jscomp.ASSUME_NO_NATIVE_SET) return !1;
                var e = $jscomp.global.Set;
                if (!e || !e.prototype.entries || "function" != typeof Object.seal) return !1;
                try {
                    var t = Object.seal({x: 4}), r = new e($jscomp.makeIterator([t]));
                    if (!r.has(t) || 1 != r.size || r.add(t) != r || 1 != r.size || r.add({x: 4}) != r || 2 != r.size) return !1;
                    var o = r.entries(), i = o.next();
                    return !i.done && i.value[0] == t && i.value[1] == t && (!(i = o.next()).done && i.value[0] != t && 4 == i.value[0].x && i.value[1] == i.value[0] && o.next().done)
                } catch (e) {
                    return !1
                }
            }, $jscomp.Set = function (e) {
                if (this.map_ = new $jscomp.Map, e) {
                    e = $jscomp.makeIterator(e);
                    for (var t; !(t = e.next()).done;) this.add(t.value)
                }
                this.size = this.map_.size
            }, $jscomp.Set.prototype.add = function (e) {
                return this.map_.set(e, e), this.size = this.map_.size, this
            }, $jscomp.Set.prototype.delete = function (e) {
                return e = this.map_.delete(e), this.size = this.map_.size, e
            }, $jscomp.Set.prototype.clear = function () {
                this.map_.clear(), this.size = 0
            }, $jscomp.Set.prototype.has = function (e) {
                return this.map_.has(e)
            }, $jscomp.Set.prototype.entries = function () {
                return this.map_.entries()
            }, $jscomp.Set.prototype.values = function () {
                return this.map_.values()
            }, $jscomp.Set.prototype.forEach = function (t, r) {
                var o = this;
                this.map_.forEach(function (e) {
                    return t.call(r, e, e, o)
                })
            }, $jscomp.Set$install = function () {
                $jscomp.Map$install(), $jscomp.Set$isConformant() ? $jscomp.Set = $jscomp.global.Set : ($jscomp.initSymbol(), $jscomp.initSymbolIterator(), $jscomp.Set.prototype[Symbol.iterator] = $jscomp.Set.prototype.values, $jscomp.Set$install = function () {
                })
            }, $jscomp.string = $jscomp.string || {}, $jscomp.checkStringArgs = function (e, t, r) {
                if (null == e) throw new TypeError("The 'this' value for String.prototype." + r + " must not be null or undefined");
                if (t instanceof RegExp) throw new TypeError("First argument to String.prototype." + r + " must not be a regular expression");
                return e + ""
            }, $jscomp.string.fromCodePoint = function (e) {
                for (var t = "", r = 0; r < arguments.length; r++) {
                    var o = Number(arguments[r]);
                    if (o < 0 || 1114111 < o || o !== Math.floor(o)) throw new RangeError("invalid_code_point " + o);
                    o <= 65535 ? t += String.fromCharCode(o) : (o -= 65536, t += String.fromCharCode(o >>> 10 & 1023 | 55296), t += String.fromCharCode(1023 & o | 56320))
                }
                return t
            }, $jscomp.string.repeat = function (e) {
                var t = $jscomp.checkStringArgs(this, null, "repeat");
                if (e < 0 || 1342177279 < e) throw new RangeError("Invalid count value");
                e |= 0;
                for (var r = ""; e;) 1 & e && (r += t), (e >>>= 1) && (t += t);
                return r
            }, $jscomp.string.repeat$install = function () {
                String.prototype.repeat || (String.prototype.repeat = $jscomp.string.repeat)
            }, $jscomp.string.codePointAt = function (e) {
                var t = $jscomp.checkStringArgs(this, null, "codePointAt"), r = t.length;
                if (0 <= (e = Number(e) || 0) && e < r) {
                    e |= 0;
                    var o = t.charCodeAt(e);
                    return o < 55296 || 56319 < o || e + 1 === r ? o : (e = t.charCodeAt(e + 1)) < 56320 || 57343 < e ? o : 1024 * (o - 55296) + e + 9216
                }
            }, $jscomp.string.codePointAt$install = function () {
                String.prototype.codePointAt || (String.prototype.codePointAt = $jscomp.string.codePointAt)
            }, $jscomp.string.includes = function (e, t) {
                return -1 !== $jscomp.checkStringArgs(this, e, "includes").indexOf(e, t || 0)
            }, $jscomp.string.includes$install = function () {
                String.prototype.includes || (String.prototype.includes = $jscomp.string.includes)
            }, $jscomp.string.startsWith = function (e, t) {
                var r = $jscomp.checkStringArgs(this, e, "startsWith");
                e += "";
                for (var o = r.length, i = e.length, s = Math.max(0, Math.min(0 | t, r.length)), a = 0; a < i && s < o;) if (r[s++] != e[a++]) return !1;
                return i <= a
            }, $jscomp.string.startsWith$install = function () {
                String.prototype.startsWith || (String.prototype.startsWith = $jscomp.string.startsWith)
            }, $jscomp.string.endsWith = function (e, t) {
                var r = $jscomp.checkStringArgs(this, e, "endsWith");
                e += "", void 0 === t && (t = r.length);
                for (var o = Math.max(0, Math.min(0 | t, r.length)), i = e.length; 0 < i && 0 < o;) if (r[--o] != e[--i]) return !1;
                return i <= 0
            }, $jscomp.string.endsWith$install = function () {
                String.prototype.endsWith || (String.prototype.endsWith = $jscomp.string.endsWith)
            };
            var COMPILED = !0, goog = goog || {};
            goog.global = this, goog.isDef = function (e) {
                return void 0 !== e
            }, goog.exportPath_ = function (e, t, r) {
                e = e.split("."), r = r || goog.global, e[0] in r || !r.execScript || r.execScript("var " + e[0]);
                for (var o; e.length && (o = e.shift());) !e.length && goog.isDef(t) ? r[o] = t : r = r[o] ? r[o] : r[o] = {}
            }, goog.define = function (e, t) {
                var r = t;
                COMPILED || (goog.global.CLOSURE_UNCOMPILED_DEFINES && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_UNCOMPILED_DEFINES, e) ? r = goog.global.CLOSURE_UNCOMPILED_DEFINES[e] : goog.global.CLOSURE_DEFINES && Object.prototype.hasOwnProperty.call(goog.global.CLOSURE_DEFINES, e) && (r = goog.global.CLOSURE_DEFINES[e])), goog.exportPath_(e, r)
            }, goog.DEBUG = !0, goog.LOCALE = "en", goog.TRUSTED_SITE = !0, goog.STRICT_MODE_COMPATIBLE = !1, goog.DISALLOW_TEST_ONLY_CODE = COMPILED && !goog.DEBUG, goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING = !1, goog.provide = function (e) {
                if (!COMPILED && goog.isProvided_(e)) throw Error('Namespace "' + e + '" already declared.');
                goog.constructNamespace_(e)
            }, goog.constructNamespace_ = function (e, t) {
                if (!COMPILED) {
                    delete goog.implicitNamespaces_[e];
                    for (var r = e; (r = r.substring(0, r.lastIndexOf("."))) && !goog.getObjectByName(r);) goog.implicitNamespaces_[r] = !0
                }
                goog.exportPath_(e, t)
            }, goog.VALID_MODULE_RE_ = /^[a-zA-Z_$][a-zA-Z0-9._$]*$/, goog.module = function (e) {
                if (!goog.isString(e) || !e || -1 == e.search(goog.VALID_MODULE_RE_)) throw Error("Invalid module identifier");
                if (!goog.isInModuleLoader_()) throw Error("Module " + e + " has been loaded incorrectly.");
                if (goog.moduleLoaderState_.moduleName) throw Error("goog.module may only be called once per module.");
                if (goog.moduleLoaderState_.moduleName = e, !COMPILED) {
                    if (goog.isProvided_(e)) throw Error('Namespace "' + e + '" already declared.');
                    delete goog.implicitNamespaces_[e]
                }
            }, goog.module.get = function (e) {
                return goog.module.getInternal_(e)
            }, goog.module.getInternal_ = function (e) {
                if (!COMPILED) return goog.isProvided_(e) ? e in goog.loadedModules_ ? goog.loadedModules_[e] : goog.getObjectByName(e) : null
            }, goog.moduleLoaderState_ = null, goog.isInModuleLoader_ = function () {
                return null != goog.moduleLoaderState_
            }, goog.module.declareLegacyNamespace = function () {
                if (!COMPILED && !goog.isInModuleLoader_()) throw Error("goog.module.declareLegacyNamespace must be called from within a goog.module");
                if (!COMPILED && !goog.moduleLoaderState_.moduleName) throw Error("goog.module must be called prior to goog.module.declareLegacyNamespace.");
                goog.moduleLoaderState_.declareLegacyNamespace = !0
            }, goog.setTestOnly = function (e) {
                if (goog.DISALLOW_TEST_ONLY_CODE) throw e = e || "", Error("Importing test-only code into non-debug environment" + (e ? ": " + e : "."))
            }, goog.forwardDeclare = function (e) {
            }, COMPILED || (goog.isProvided_ = function (e) {
                return e in goog.loadedModules_ || !goog.implicitNamespaces_[e] && goog.isDefAndNotNull(goog.getObjectByName(e))
            }, goog.implicitNamespaces_ = {"goog.module": !0}), goog.getObjectByName = function (e, t) {
                for (var r, o = e.split("."), i = t || goog.global; r = o.shift();) {
                    if (!goog.isDefAndNotNull(i[r])) return null;
                    i = i[r]
                }
                return i
            }, goog.globalize = function (e, t) {
                var r, o = t || goog.global;
                for (r in e) o[r] = e[r]
            }, goog.addDependency = function (e, t, r, o) {
                if (goog.DEPENDENCIES_ENABLED) {
                    var i;
                    e = e.replace(/\\/g, "/");
                    for (var s = goog.dependencies_, a = 0; i = t[a]; a++) s.nameToPath[i] = e, s.pathIsModule[e] = !!o;
                    for (o = 0; t = r[o]; o++) e in s.requires || (s.requires[e] = {}), s.requires[e][t] = !0
                }
            }, goog.ENABLE_DEBUG_LOADER = !0, goog.logToConsole_ = function (e) {
                goog.global.console && goog.global.console.error(e)
            }, goog.require = function (e) {
                if (!COMPILED) {
                    if (goog.ENABLE_DEBUG_LOADER && goog.IS_OLD_IE_ && goog.maybeProcessDeferredDep_(e), goog.isProvided_(e)) return goog.isInModuleLoader_() ? goog.module.getInternal_(e) : null;
                    if (goog.ENABLE_DEBUG_LOADER) {
                        var t = goog.getPathFromDeps_(e);
                        if (t) return goog.writeScripts_(t), null
                    }
                    throw e = "goog.require could not find: " + e, goog.logToConsole_(e), Error(e)
                }
            }, goog.basePath = "", goog.nullFunction = function () {
            }, goog.abstractMethod = function () {
                throw Error("unimplemented abstract method")
            }, goog.addSingletonGetter = function (e) {
                e.getInstance = function () {
                    return e.instance_ ? e.instance_ : (goog.DEBUG && (goog.instantiatedSingletons_[goog.instantiatedSingletons_.length] = e), e.instance_ = new e)
                }
            }, goog.instantiatedSingletons_ = [], goog.LOAD_MODULE_USING_EVAL = !0, goog.SEAL_MODULE_EXPORTS = goog.DEBUG, goog.loadedModules_ = {}, goog.DEPENDENCIES_ENABLED = !COMPILED && goog.ENABLE_DEBUG_LOADER, goog.DEPENDENCIES_ENABLED && (goog.dependencies_ = {
                pathIsModule: {},
                nameToPath: {},
                requires: {},
                visited: {},
                written: {},
                deferred: {}
            }, goog.inHtmlDocument_ = function () {
                var e = goog.global.document;
                return null != e && "write" in e
            }, goog.findBasePath_ = function () {
                if (goog.isDef(goog.global.CLOSURE_BASE_PATH)) goog.basePath = goog.global.CLOSURE_BASE_PATH; else if (goog.inHtmlDocument_()) for (var e = goog.global.document.getElementsByTagName("SCRIPT"), t = e.length - 1; 0 <= t; --t) {
                    var r = e[t].src, o = -1 == (o = r.lastIndexOf("?")) ? r.length : o;
                    if ("base.js" == r.substr(o - 7, 7)) {
                        goog.basePath = r.substr(0, o - 7);
                        break
                    }
                }
            }, goog.importScript_ = function (e, t) {
                (goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_)(e, t) && (goog.dependencies_.written[e] = !0)
            }, goog.IS_OLD_IE_ = !(goog.global.atob || !goog.global.document || !goog.global.document.all), goog.importModule_ = function (e) {
                goog.importScript_("", 'goog.retrieveAndExecModule_("' + e + '");') && (goog.dependencies_.written[e] = !0)
            }, goog.queuedModules_ = [], goog.wrapModule_ = function (e, t) {
                return goog.LOAD_MODULE_USING_EVAL && goog.isDef(goog.global.JSON) ? "goog.loadModule(" + goog.global.JSON.stringify(t + "\n//# sourceURL=" + e + "\n") + ");" : 'goog.loadModule(function(exports) {"use strict";' + t + "\n;return exports});\n//# sourceURL=" + e + "\n"
            }, goog.loadQueuedModules_ = function () {
                var e = goog.queuedModules_.length;
                if (0 < e) {
                    var t = goog.queuedModules_;
                    goog.queuedModules_ = [];
                    for (var r = 0; r < e; r++) goog.maybeProcessDeferredPath_(t[r])
                }
            }, goog.maybeProcessDeferredDep_ = function (e) {
                goog.isDeferredModule_(e) && goog.allDepsAreAvailable_(e) && (e = goog.getPathFromDeps_(e), goog.maybeProcessDeferredPath_(goog.basePath + e))
            }, goog.isDeferredModule_ = function (e) {
                return !(!(e = goog.getPathFromDeps_(e)) || !goog.dependencies_.pathIsModule[e]) && goog.basePath + e in goog.dependencies_.deferred
            }, goog.allDepsAreAvailable_ = function (e) {
                if ((e = goog.getPathFromDeps_(e)) && e in goog.dependencies_.requires) for (var t in goog.dependencies_.requires[e]) if (!goog.isProvided_(t) && !goog.isDeferredModule_(t)) return !1;
                return !0
            }, goog.maybeProcessDeferredPath_ = function (e) {
                if (e in goog.dependencies_.deferred) {
                    var t = goog.dependencies_.deferred[e];
                    delete goog.dependencies_.deferred[e], goog.globalEval(t)
                }
            }, goog.loadModuleFromUrl = function (e) {
                goog.retrieveAndExecModule_(e)
            }, goog.loadModule = function (e) {
                var t = goog.moduleLoaderState_;
                try {
                    var r;
                    if (goog.moduleLoaderState_ = {
                        moduleName: void 0,
                        declareLegacyNamespace: !1
                    }, goog.isFunction(e)) r = e.call(goog.global, {}); else {
                        if (!goog.isString(e)) throw Error("Invalid module definition");
                        r = goog.loadModuleFromSource_.call(goog.global, e)
                    }
                    var o = goog.moduleLoaderState_.moduleName;
                    if (!goog.isString(o) || !o) throw Error('Invalid module name "' + o + '"');
                    goog.moduleLoaderState_.declareLegacyNamespace ? goog.constructNamespace_(o, r) : goog.SEAL_MODULE_EXPORTS && Object.seal && Object.seal(r), goog.loadedModules_[o] = r
                } finally {
                    goog.moduleLoaderState_ = t
                }
            }, goog.loadModuleFromSource_ = function (a) {
                return eval(a), {}
            }, goog.writeScriptSrcNode_ = function (e) {
                goog.global.document.write('<script type="text/javascript" src="' + e + '"><\/script>')
            }, goog.appendScriptSrcNode_ = function (e) {
                var t = goog.global.document, r = t.createElement("script");
                r.type = "text/javascript", r.src = e, r.defer = !1, r.async = !1, t.head.appendChild(r)
            }, goog.writeScriptTag_ = function (e, t) {
                if (goog.inHtmlDocument_()) {
                    var r = goog.global.document;
                    if (!goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING && "complete" == r.readyState) {
                        if (/\bdeps.js$/.test(e)) return !1;
                        throw Error('Cannot write "' + e + '" after document load')
                    }
                    var o = goog.IS_OLD_IE_;
                    return void 0 === t ? o ? (o = " onreadystatechange='goog.onScriptLoad_(this, " + ++goog.lastNonModuleScriptIndex_ + ")' ", r.write('<script type="text/javascript" src="' + e + '"' + o + "><\/script>")) : goog.ENABLE_CHROME_APP_SAFE_SCRIPT_LOADING ? goog.appendScriptSrcNode_(e) : goog.writeScriptSrcNode_(e) : r.write('<script type="text/javascript">' + t + "<\/script>"), !0
                }
                return !1
            }, goog.lastNonModuleScriptIndex_ = 0, goog.onScriptLoad_ = function (e, t) {
                return "complete" == e.readyState && goog.lastNonModuleScriptIndex_ == t && goog.loadQueuedModules_(), !0
            }, goog.writeScripts_ = function (e) {
                var o = [], i = {}, s = goog.dependencies_;
                for (function e(t) {
                    if (!(t in s.written || t in s.visited)) {
                        if (s.visited[t] = !0, t in s.requires) for (var r in s.requires[t]) if (!goog.isProvided_(r)) {
                            if (!(r in s.nameToPath)) throw Error("Undefined nameToPath for " + r);
                            e(s.nameToPath[r])
                        }
                        t in i || (i[t] = !0, o.push(t))
                    }
                }(e), e = 0; e < o.length; e++) {
                    var t = o[e];
                    goog.dependencies_.written[t] = !0
                }
                var r = goog.moduleLoaderState_;
                for (goog.moduleLoaderState_ = null, e = 0; e < o.length; e++) {
                    if (!(t = o[e])) throw goog.moduleLoaderState_ = r, Error("Undefined script input");
                    s.pathIsModule[t] ? goog.importModule_(goog.basePath + t) : goog.importScript_(goog.basePath + t)
                }
                goog.moduleLoaderState_ = r
            }, goog.getPathFromDeps_ = function (e) {
                return e in goog.dependencies_.nameToPath ? goog.dependencies_.nameToPath[e] : null
            }, goog.findBasePath_(), goog.global.CLOSURE_NO_DEPS || goog.importScript_(goog.basePath + "deps.js")), goog.normalizePath_ = function (e) {
                e = e.split("/");
                for (var t = 0; t < e.length;) "." == e[t] ? e.splice(t, 1) : t && ".." == e[t] && e[t - 1] && ".." != e[t - 1] ? e.splice(--t, 2) : t++;
                return e.join("/")
            }, goog.loadFileSync_ = function (e) {
                if (goog.global.CLOSURE_LOAD_FILE_SYNC) return goog.global.CLOSURE_LOAD_FILE_SYNC(e);
                var t = new goog.global.XMLHttpRequest;
                return t.open("get", e, !1), t.send(), t.responseText
            }, goog.retrieveAndExecModule_ = function (e) {
                if (!COMPILED) {
                    var t = e;
                    e = goog.normalizePath_(e);
                    var r = goog.global.CLOSURE_IMPORT_SCRIPT || goog.writeScriptTag_, o = goog.loadFileSync_(e);
                    if (null == o) throw Error("load of " + e + "failed");
                    o = goog.wrapModule_(e, o), goog.IS_OLD_IE_ ? (goog.dependencies_.deferred[t] = o, goog.queuedModules_.push(t)) : r(e, o)
                }
            }, goog.typeOf = function (e) {
                var t = typeof e;
                if ("object" == t) {
                    if (!e) return "null";
                    if (e instanceof Array) return "array";
                    if (e instanceof Object) return t;
                    var r = Object.prototype.toString.call(e);
                    if ("[object Window]" == r) return "object";
                    if ("[object Array]" == r || "number" == typeof e.length && void 0 !== e.splice && void 0 !== e.propertyIsEnumerable && !e.propertyIsEnumerable("splice")) return "array";
                    if ("[object Function]" == r || void 0 !== e.call && void 0 !== e.propertyIsEnumerable && !e.propertyIsEnumerable("call")) return "function"
                } else if ("function" == t && void 0 === e.call) return "object";
                return t
            }, goog.isNull = function (e) {
                return null === e
            }, goog.isDefAndNotNull = function (e) {
                return null != e
            }, goog.isArray = function (e) {
                return "array" == goog.typeOf(e)
            }, goog.isArrayLike = function (e) {
                var t = goog.typeOf(e);
                return "array" == t || "object" == t && "number" == typeof e.length
            }, goog.isDateLike = function (e) {
                return goog.isObject(e) && "function" == typeof e.getFullYear
            }, goog.isString = function (e) {
                return "string" == typeof e
            }, goog.isBoolean = function (e) {
                return "boolean" == typeof e
            }, goog.isNumber = function (e) {
                return "number" == typeof e
            }, goog.isFunction = function (e) {
                return "function" == goog.typeOf(e)
            }, goog.isObject = function (e) {
                var t = typeof e;
                return "object" == t && null != e || "function" == t
            }, goog.getUid = function (e) {
                return e[goog.UID_PROPERTY_] || (e[goog.UID_PROPERTY_] = ++goog.uidCounter_)
            }, goog.hasUid = function (e) {
                return !!e[goog.UID_PROPERTY_]
            }, goog.removeUid = function (e) {
                null !== e && "removeAttribute" in e && e.removeAttribute(goog.UID_PROPERTY_);
                try {
                    delete e[goog.UID_PROPERTY_]
                } catch (e) {
                }
            }, goog.UID_PROPERTY_ = "closure_uid_" + (1e9 * Math.random() >>> 0), goog.uidCounter_ = 0, goog.getHashCode = goog.getUid, goog.removeHashCode = goog.removeUid, goog.cloneObject = function (e) {
                if ("object" == (r = goog.typeOf(e)) || "array" == r) {
                    if (e.clone) return e.clone();
                    var t, r = "array" == r ? [] : {};
                    for (t in e) r[t] = goog.cloneObject(e[t]);
                    return r
                }
                return e
            }, goog.bindNative_ = function (e, t, r) {
                return e.call.apply(e.bind, arguments)
            }, goog.bindJs_ = function (t, r, e) {
                if (!t) throw Error();
                if (2 < arguments.length) {
                    var o = Array.prototype.slice.call(arguments, 2);
                    return function () {
                        var e = Array.prototype.slice.call(arguments);
                        return Array.prototype.unshift.apply(e, o), t.apply(r, e)
                    }
                }
                return function () {
                    return t.apply(r, arguments)
                }
            }, goog.bind = function (e, t, r) {
                return Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf("native code") ? goog.bind = goog.bindNative_ : goog.bind = goog.bindJs_, goog.bind.apply(null, arguments)
            }, goog.partial = function (t, e) {
                var r = Array.prototype.slice.call(arguments, 1);
                return function () {
                    var e = r.slice();
                    return e.push.apply(e, arguments), t.apply(this, e)
                }
            }, goog.mixin = function (e, t) {
                for (var r in t) e[r] = t[r]
            }, goog.now = goog.TRUSTED_SITE && Date.now || function () {
                return +new Date
            }, goog.globalEval = function (e) {
                if (goog.global.execScript) goog.global.execScript(e, "JavaScript"); else {
                    if (!goog.global.eval) throw Error("goog.globalEval not available");
                    if (null == goog.evalWorksForGlobals_) if (goog.global.eval("var _evalTest_ = 1;"), void 0 !== goog.global._evalTest_) {
                        try {
                            delete goog.global._evalTest_
                        } catch (e) {
                        }
                        goog.evalWorksForGlobals_ = !0
                    } else goog.evalWorksForGlobals_ = !1;
                    if (goog.evalWorksForGlobals_) goog.global.eval(e); else {
                        var t = goog.global.document, r = t.createElement("SCRIPT");
                        r.type = "text/javascript", r.defer = !1, r.appendChild(t.createTextNode(e)), t.body.appendChild(r), t.body.removeChild(r)
                    }
                }
            }, goog.evalWorksForGlobals_ = null, goog.getCssName = function (e, t) {
                var o = function (e) {
                    return goog.cssNameMapping_[e] || e
                }, r = function (e) {
                    e = e.split("-");
                    for (var t = [], r = 0; r < e.length; r++) t.push(o(e[r]));
                    return t.join("-")
                };
                r = goog.cssNameMapping_ ? "BY_WHOLE" == goog.cssNameMappingStyle_ ? o : r : function (e) {
                    return e
                };
                return t ? e + "-" + r(t) : r(e)
            }, goog.setCssNameMapping = function (e, t) {
                goog.cssNameMapping_ = e, goog.cssNameMappingStyle_ = t
            }, !COMPILED && goog.global.CLOSURE_CSS_NAME_MAPPING && (goog.cssNameMapping_ = goog.global.CLOSURE_CSS_NAME_MAPPING), goog.getMsg = function (e, r) {
                return r && (e = e.replace(/\{\$([^}]+)}/g, function (e, t) {
                    return null != r && t in r ? r[t] : e
                })), e
            }, goog.getMsgWithFallback = function (e, t) {
                return e
            }, goog.exportSymbol = function (e, t, r) {
                goog.exportPath_(e, t, r)
            }, goog.exportProperty = function (e, t, r) {
                e[t] = r
            }, goog.inherits = function (e, s) {
                function t() {
                }

                t.prototype = s.prototype, e.superClass_ = s.prototype, e.prototype = new t, (e.prototype.constructor = e).base = function (e, t, r) {
                    for (var o = Array(arguments.length - 2), i = 2; i < arguments.length; i++) o[i - 2] = arguments[i];
                    return s.prototype[t].apply(e, o)
                }
            }, goog.base = function (e, t, r) {
                var o = arguments.callee.caller;
                if (goog.STRICT_MODE_COMPATIBLE || goog.DEBUG && !o) throw Error("arguments.caller not defined.  goog.base() cannot be used with strict mode code. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
                if (o.superClass_) {
                    for (var i = Array(arguments.length - 1), s = 1; s < arguments.length; s++) i[s - 1] = arguments[s];
                    return o.superClass_.constructor.apply(e, i)
                }
                for (i = Array(arguments.length - 2), s = 2; s < arguments.length; s++) i[s - 2] = arguments[s];
                s = !1;
                for (var a = e.constructor; a; a = a.superClass_ && a.superClass_.constructor) if (a.prototype[t] === o) s = !0; else if (s) return a.prototype[t].apply(e, i);
                if (e[t] === o) return e.constructor.prototype[t].apply(e, i);
                throw Error("goog.base called from a method of one name to a method of a different name")
            }, goog.scope = function (e) {
                e.call(goog.global)
            }, COMPILED || (goog.global.COMPILED = COMPILED), goog.defineClass = function (e, t) {
                var r = t.constructor, o = t.statics;
                return r && r != Object.prototype.constructor || (r = function () {
                    throw Error("cannot instantiate an interface (no constructor defined).")
                }), r = goog.defineClass.createSealingConstructor_(r, e), e && goog.inherits(r, e), delete t.constructor, delete t.statics, goog.defineClass.applyProperties_(r.prototype, t), null != o && (o instanceof Function ? o(r) : goog.defineClass.applyProperties_(r, o)), r
            }, goog.defineClass.SEAL_CLASS_INSTANCES = goog.DEBUG, goog.defineClass.createSealingConstructor_ = function (t, e) {
                if (goog.defineClass.SEAL_CLASS_INSTANCES && Object.seal instanceof Function) {
                    if (e && e.prototype && e.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_]) return t;
                    var r = function () {
                        var e = t.apply(this, arguments) || this;
                        return e[goog.UID_PROPERTY_] = e[goog.UID_PROPERTY_], this.constructor === r && Object.seal(e), e
                    };
                    return r
                }
                return t
            }, goog.defineClass.OBJECT_PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "), goog.defineClass.applyProperties_ = function (e, t) {
                for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                for (var o = 0; o < goog.defineClass.OBJECT_PROTOTYPE_FIELDS_.length; o++) r = goog.defineClass.OBJECT_PROTOTYPE_FIELDS_[o], Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
            }, goog.tagUnsealableClass = function (e) {
                !COMPILED && goog.defineClass.SEAL_CLASS_INSTANCES && (e.prototype[goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_] = !0)
            }, goog.UNSEALABLE_CONSTRUCTOR_PROPERTY_ = "goog_defineClass_legacy_unsealable", goog.dom = {}, goog.dom.NodeType = {
                ELEMENT: 1,
                ATTRIBUTE: 2,
                TEXT: 3,
                CDATA_SECTION: 4,
                ENTITY_REFERENCE: 5,
                ENTITY: 6,
                PROCESSING_INSTRUCTION: 7,
                COMMENT: 8,
                DOCUMENT: 9,
                DOCUMENT_TYPE: 10,
                DOCUMENT_FRAGMENT: 11,
                NOTATION: 12
            }, goog.debug = {}, goog.debug.Error = function (e) {
                if (Error.captureStackTrace) Error.captureStackTrace(this, goog.debug.Error); else {
                    var t = Error().stack;
                    t && (this.stack = t)
                }
                e && (this.message = String(e)), this.reportErrorToServer = !0
            }, goog.inherits(goog.debug.Error, Error), goog.debug.Error.prototype.name = "CustomError", goog.string = {}, goog.string.DETECT_DOUBLE_ESCAPING = !1, goog.string.FORCE_NON_DOM_HTML_UNESCAPING = !1, goog.string.Unicode = {NBSP: " "}, goog.string.startsWith = function (e, t) {
                return 0 == e.lastIndexOf(t, 0)
            }, goog.string.endsWith = function (e, t) {
                var r = e.length - t.length;
                return 0 <= r && e.indexOf(t, r) == r
            }, goog.string.caseInsensitiveStartsWith = function (e, t) {
                return 0 == goog.string.caseInsensitiveCompare(t, e.substr(0, t.length))
            }, goog.string.caseInsensitiveEndsWith = function (e, t) {
                return 0 == goog.string.caseInsensitiveCompare(t, e.substr(e.length - t.length, t.length))
            }, goog.string.caseInsensitiveEquals = function (e, t) {
                return e.toLowerCase() == t.toLowerCase()
            },goog.string.subs = function (e, t) {
                for (var r = e.split("%s"), o = "", i = Array.prototype.slice.call(arguments, 1); i.length && 1 < r.length;) o += r.shift() + i.shift();
                return o + r.join("%s")
            },goog.string.collapseWhitespace = function (e) {
                return e.replace(/[\s\xa0]+/g, " ").replace(/^\s+|\s+$/g, "")
            },goog.string.isEmptyOrWhitespace = function (e) {
                return /^[\s\xa0]*$/.test(e)
            },goog.string.isEmptyString = function (e) {
                return 0 == e.length
            },goog.string.isEmpty = goog.string.isEmptyOrWhitespace,goog.string.isEmptyOrWhitespaceSafe = function (e) {
                return goog.string.isEmptyOrWhitespace(goog.string.makeSafe(e))
            },goog.string.isEmptySafe = goog.string.isEmptyOrWhitespaceSafe,goog.string.isBreakingWhitespace = function (e) {
                return !/[^\t\n\r ]/.test(e)
            },goog.string.isAlpha = function (e) {
                return !/[^a-zA-Z]/.test(e)
            },goog.string.isNumeric = function (e) {
                return !/[^0-9]/.test(e)
            },goog.string.isAlphaNumeric = function (e) {
                return !/[^a-zA-Z0-9]/.test(e)
            },goog.string.isSpace = function (e) {
                return " " == e
            },goog.string.isUnicodeChar = function (e) {
                return 1 == e.length && " " <= e && e <= "~" || "" <= e && e <= "�"
            },goog.string.stripNewlines = function (e) {
                return e.replace(/(\r\n|\r|\n)+/g, " ")
            },goog.string.canonicalizeNewlines = function (e) {
                return e.replace(/(\r\n|\r|\n)/g, "\n")
            },goog.string.normalizeWhitespace = function (e) {
                return e.replace(/\xa0|\s/g, " ")
            },goog.string.normalizeSpaces = function (e) {
                return e.replace(/\xa0|[ \t]+/g, " ")
            },goog.string.collapseBreakingSpaces = function (e) {
                return e.replace(/[\t\r\n ]+/g, " ").replace(/^[\t\r\n ]+|[\t\r\n ]+$/g, "")
            },goog.string.trim = goog.TRUSTED_SITE && String.prototype.trim ? function (e) {
                return e.trim()
            } : function (e) {
                return e.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "")
            },goog.string.trimLeft = function (e) {
                return e.replace(/^[\s\xa0]+/, "")
            },goog.string.trimRight = function (e) {
                return e.replace(/[\s\xa0]+$/, "")
            },goog.string.caseInsensitiveCompare = function (e, t) {
                var r = String(e).toLowerCase(), o = String(t).toLowerCase();
                return r < o ? -1 : r == o ? 0 : 1
            },goog.string.numberAwareCompare_ = function (e, t, r) {
                if (e == t) return 0;
                if (!e) return -1;
                if (!t) return 1;
                for (var o = e.toLowerCase().match(r), i = t.toLowerCase().match(r), s = Math.min(o.length, i.length), a = 0; a < s; a++) {
                    r = o[a];
                    var n = i[a];
                    if (r != n) return e = parseInt(r, 10), !isNaN(e) && (t = parseInt(n, 10), !isNaN(t) && e - t) ? e - t : r < n ? -1 : 1
                }
                return o.length != i.length ? o.length - i.length : e < t ? -1 : 1
            },goog.string.intAwareCompare = function (e, t) {
                return goog.string.numberAwareCompare_(e, t, /\d+|\D+/g)
            },goog.string.floatAwareCompare = function (e, t) {
                return goog.string.numberAwareCompare_(e, t, /\d+|\.\d+|\D+/g)
            },goog.string.numerateCompare = goog.string.floatAwareCompare,goog.string.urlEncode = function (e) {
                return encodeURIComponent(String(e))
            },goog.string.urlDecode = function (e) {
                return decodeURIComponent(e.replace(/\+/g, " "))
            },goog.string.newLineToBr = function (e, t) {
                return e.replace(/(\r\n|\r|\n)/g, t ? "<br />" : "<br>")
            },goog.string.htmlEscape = function (e, t) {
                if (t) e = e.replace(goog.string.AMP_RE_, "&amp;").replace(goog.string.LT_RE_, "&lt;").replace(goog.string.GT_RE_, "&gt;").replace(goog.string.QUOT_RE_, "&quot;").replace(goog.string.SINGLE_QUOTE_RE_, "&#39;").replace(goog.string.NULL_RE_, "&#0;"), goog.string.DETECT_DOUBLE_ESCAPING && (e = e.replace(goog.string.E_RE_, "&#101;")); else {
                    if (!goog.string.ALL_RE_.test(e)) return e;
                    -1 != e.indexOf("&") && (e = e.replace(goog.string.AMP_RE_, "&amp;")), -1 != e.indexOf("<") && (e = e.replace(goog.string.LT_RE_, "&lt;")), -1 != e.indexOf(">") && (e = e.replace(goog.string.GT_RE_, "&gt;")), -1 != e.indexOf('"') && (e = e.replace(goog.string.QUOT_RE_, "&quot;")), -1 != e.indexOf("'") && (e = e.replace(goog.string.SINGLE_QUOTE_RE_, "&#39;")), -1 != e.indexOf("\0") && (e = e.replace(goog.string.NULL_RE_, "&#0;")), goog.string.DETECT_DOUBLE_ESCAPING && -1 != e.indexOf("e") && (e = e.replace(goog.string.E_RE_, "&#101;"))
                }
                return e
            },goog.string.AMP_RE_ = /&/g,goog.string.LT_RE_ = /</g,goog.string.GT_RE_ = />/g,goog.string.QUOT_RE_ = /"/g,goog.string.SINGLE_QUOTE_RE_ = /'/g,goog.string.NULL_RE_ = /\x00/g,goog.string.E_RE_ = /e/g,goog.string.ALL_RE_ = goog.string.DETECT_DOUBLE_ESCAPING ? /[\x00&<>"'e]/ : /[\x00&<>"']/,goog.string.unescapeEntities = function (e) {
                return goog.string.contains(e, "&") ? !goog.string.FORCE_NON_DOM_HTML_UNESCAPING && "document" in goog.global ? goog.string.unescapeEntitiesUsingDom_(e) : goog.string.unescapePureXmlEntities_(e) : e
            },goog.string.unescapeEntitiesWithDocument = function (e, t) {
                return goog.string.contains(e, "&") ? goog.string.unescapeEntitiesUsingDom_(e, t) : e
            },goog.string.unescapeEntitiesUsingDom_ = function (e, t) {
                var i, s = {"&amp;": "&", "&lt;": "<", "&gt;": ">", "&quot;": '"'};
                return i = t ? t.createElement("div") : goog.global.document.createElement("div"), e.replace(goog.string.HTML_ENTITY_PATTERN_, function (e, t) {
                    var r = s[e];
                    if (r) return r;
                    if ("#" == t.charAt(0)) {
                        var o = Number("0" + t.substr(1));
                        isNaN(o) || (r = String.fromCharCode(o))
                    }
                    return r || (i.innerHTML = e + " ", r = i.firstChild.nodeValue.slice(0, -1)), s[e] = r
                })
            },goog.string.unescapePureXmlEntities_ = function (e) {
                return e.replace(/&([^;]+);/g, function (e, t) {
                    switch (t) {
                        case"amp":
                            return "&";
                        case"lt":
                            return "<";
                        case"gt":
                            return ">";
                        case"quot":
                            return '"';
                        default:
                            if ("#" == t.charAt(0)) {
                                var r = Number("0" + t.substr(1));
                                if (!isNaN(r)) return String.fromCharCode(r)
                            }
                            return e
                    }
                })
            },goog.string.HTML_ENTITY_PATTERN_ = /&([^;\s<&]+);?/g,goog.string.whitespaceEscape = function (e, t) {
                return goog.string.newLineToBr(e.replace(/  /g, " &#160;"), t)
            },goog.string.preserveSpaces = function (e) {
                return e.replace(/(^|[\n ]) /g, "$1" + goog.string.Unicode.NBSP)
            },goog.string.stripQuotes = function (e, t) {
                for (var r = t.length, o = 0; o < r; o++) {
                    var i = 1 == r ? t : t.charAt(o);
                    if (e.charAt(0) == i && e.charAt(e.length - 1) == i) return e.substring(1, e.length - 1)
                }
                return e
            },goog.string.truncate = function (e, t, r) {
                return r && (e = goog.string.unescapeEntities(e)), e.length > t && (e = e.substring(0, t - 3) + "..."), r && (e = goog.string.htmlEscape(e)), e
            },goog.string.truncateMiddle = function (e, t, r, o) {
                if (r && (e = goog.string.unescapeEntities(e)), o && e.length > t) {
                    t < o && (o = t);
                    var i = e.length - o;
                    e = e.substring(0, t - o) + "..." + e.substring(i)
                } else e.length > t && (o = Math.floor(t / 2), i = e.length - o, e = e.substring(0, o + t % 2) + "..." + e.substring(i));
                return r && (e = goog.string.htmlEscape(e)), e
            },goog.string.specialEscapeChars_ = {
                "\0": "\\0",
                "\b": "\\b",
                "\f": "\\f",
                "\n": "\\n",
                "\r": "\\r",
                "\t": "\\t",
                "\v": "\\x0B",
                '"': '\\"',
                "\\": "\\\\",
                "<": "<"
            },goog.string.jsEscapeCache_ = {"'": "\\'"},goog.string.quote = function (e) {
                e = String(e);
                for (var t = ['"'], r = 0; r < e.length; r++) {
                    var o = e.charAt(r), i = o.charCodeAt(0);
                    t[r + 1] = goog.string.specialEscapeChars_[o] || (31 < i && i < 127 ? o : goog.string.escapeChar(o))
                }
                return t.push('"'), t.join("")
            },goog.string.escapeString = function (e) {
                for (var t = [], r = 0; r < e.length; r++) t[r] = goog.string.escapeChar(e.charAt(r));
                return t.join("")
            },goog.string.escapeChar = function (e) {
                if (e in goog.string.jsEscapeCache_) return goog.string.jsEscapeCache_[e];
                if (e in goog.string.specialEscapeChars_) return goog.string.jsEscapeCache_[e] = goog.string.specialEscapeChars_[e];
                var t, r = e.charCodeAt(0);
                return 31 < r && r < 127 ? t = e : (r < 256 ? (t = "\\x", (r < 16 || 256 < r) && (t += "0")) : (t = "\\u", r < 4096 && (t += "0")), t += r.toString(16).toUpperCase()), goog.string.jsEscapeCache_[e] = t
            },goog.string.contains = function (e, t) {
                return -1 != e.indexOf(t)
            },goog.string.caseInsensitiveContains = function (e, t) {
                return goog.string.contains(e.toLowerCase(), t.toLowerCase())
            },goog.string.countOf = function (e, t) {
                return e && t ? e.split(t).length - 1 : 0
            },goog.string.removeAt = function (e, t, r) {
                var o = e;
                return 0 <= t && t < e.length && 0 < r && (o = e.substr(0, t) + e.substr(t + r, e.length - t - r)), o
            },goog.string.remove = function (e, t) {
                var r = new RegExp(goog.string.regExpEscape(t), "");
                return e.replace(r, "")
            },goog.string.removeAll = function (e, t) {
                var r = new RegExp(goog.string.regExpEscape(t), "g");
                return e.replace(r, "")
            },goog.string.regExpEscape = function (e) {
                return String(e).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, "\\$1").replace(/\x08/g, "\\x08")
            },goog.string.repeat = String.prototype.repeat ? function (e, t) {
                return e.repeat(t)
            } : function (e, t) {
                return Array(t + 1).join(e)
            },goog.string.padNumber = function (e, t, r) {
                return -1 == (r = (e = goog.isDef(r) ? e.toFixed(r) : String(e)).indexOf(".")) && (r = e.length), goog.string.repeat("0", Math.max(0, t - r)) + e
            },goog.string.makeSafe = function (e) {
                return null == e ? "" : String(e)
            },goog.string.buildString = function (e) {
                return Array.prototype.join.call(arguments, "")
            },goog.string.getRandomString = function () {
                return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ goog.now()).toString(36)
            },goog.string.compareVersions = function (e, t) {
                for (var r = 0, o = goog.string.trim(String(e)).split("."), i = goog.string.trim(String(t)).split("."), s = Math.max(o.length, i.length), a = 0; 0 == r && a < s; a++) {
                    var n = o[a] || "", p = i[a] || "", g = RegExp("(\\d*)(\\D*)", "g"),
                        u = RegExp("(\\d*)(\\D*)", "g");
                    do {
                        var l = g.exec(n) || ["", "", ""], c = u.exec(p) || ["", "", ""];
                        if (0 == l[0].length && 0 == c[0].length) break;
                        r = 0 == l[1].length ? 0 : parseInt(l[1], 10);
                        var m = 0 == c[1].length ? 0 : parseInt(c[1], 10);
                        r = goog.string.compareElements_(r, m) || goog.string.compareElements_(0 == l[2].length, 0 == c[2].length) || goog.string.compareElements_(l[2], c[2])
                    } while (0 == r)
                }
                return r
            },goog.string.compareElements_ = function (e, t) {
                return e < t ? -1 : t < e ? 1 : 0
            },goog.string.hashCode = function (e) {
                for (var t = 0, r = 0; r < e.length; ++r) t = 31 * t + e.charCodeAt(r) >>> 0;
                return t
            },goog.string.uniqueStringCounter_ = 2147483648 * Math.random() | 0,goog.string.createUniqueString = function () {
                return "goog_" + goog.string.uniqueStringCounter_++
            },goog.string.toNumber = function (e) {
                var t = Number(e);
                return 0 == t && goog.string.isEmptyOrWhitespace(e) ? NaN : t
            },goog.string.isLowerCamelCase = function (e) {
                return /^[a-z]+([A-Z][a-z]*)*$/.test(e)
            },goog.string.isUpperCamelCase = function (e) {
                return /^([A-Z][a-z]*)+$/.test(e)
            },goog.string.toCamelCase = function (e) {
                return String(e).replace(/\-([a-z])/g, function (e, t) {
                    return t.toUpperCase()
                })
            },goog.string.toSelectorCase = function (e) {
                return String(e).replace(/([A-Z])/g, "-$1").toLowerCase()
            },goog.string.toTitleCase = function (e, t) {
                var r = goog.isString(t) ? goog.string.regExpEscape(t) : "\\s";
                return e.replace(new RegExp("(^" + (r ? "|[" + r + "]+" : "") + ")([a-z])", "g"), function (e, t, r) {
                    return t + r.toUpperCase()
                })
            },goog.string.capitalize = function (e) {
                return String(e.charAt(0)).toUpperCase() + String(e.substr(1)).toLowerCase()
            },goog.string.parseInt = function (e) {
                return isFinite(e) && (e = String(e)), goog.isString(e) ? /^\s*-?0x/i.test(e) ? parseInt(e, 16) : parseInt(e, 10) : NaN
            },goog.string.splitLimit = function (e, t, r) {
                e = e.split(t);
                for (var o = []; 0 < r && e.length;) o.push(e.shift()), r--;
                return e.length && o.push(e.join(t)), o
            },goog.string.editDistance = function (e, t) {
                var r = [], o = [];
                if (e == t) return 0;
                if (!e.length || !t.length) return Math.max(e.length, t.length);
                for (var i = 0; i < t.length + 1; i++) r[i] = i;
                for (i = 0; i < e.length; i++) {
                    o[0] = i + 1;
                    for (var s = 0; s < t.length; s++) o[s + 1] = Math.min(o[s] + 1, r[s + 1] + 1, r[s] + Number(e[i] != t[s]));
                    for (s = 0; s < r.length; s++) r[s] = o[s]
                }
                return o[t.length]
            },goog.asserts = {},goog.asserts.ENABLE_ASSERTS = goog.DEBUG,goog.asserts.AssertionError = function (e, t) {
                t.unshift(e), goog.debug.Error.call(this, goog.string.subs.apply(null, t)), t.shift(), this.messagePattern = e
            },goog.inherits(goog.asserts.AssertionError, goog.debug.Error),goog.asserts.AssertionError.prototype.name = "AssertionError",goog.asserts.DEFAULT_ERROR_HANDLER = function (e) {
                throw e
            },goog.asserts.errorHandler_ = goog.asserts.DEFAULT_ERROR_HANDLER,goog.asserts.doAssertFailure_ = function (e, t, r, o) {
                var i = "Assertion failed";
                if (r) {
                    i = i + ": " + r;
                    var s = o
                } else e && (i += ": " + e, s = t);
                e = new goog.asserts.AssertionError("" + i, s || []), goog.asserts.errorHandler_(e)
            },goog.asserts.setErrorHandler = function (e) {
                goog.asserts.ENABLE_ASSERTS && (goog.asserts.errorHandler_ = e)
            },goog.asserts.assert = function (e, t, r) {
                return goog.asserts.ENABLE_ASSERTS && !e && goog.asserts.doAssertFailure_("", null, t, Array.prototype.slice.call(arguments, 2)), e
            },goog.asserts.fail = function (e, t) {
                goog.asserts.ENABLE_ASSERTS && goog.asserts.errorHandler_(new goog.asserts.AssertionError("Failure" + (e ? ": " + e : ""), Array.prototype.slice.call(arguments, 1)))
            },goog.asserts.assertNumber = function (e, t, r) {
                return goog.asserts.ENABLE_ASSERTS && !goog.isNumber(e) && goog.asserts.doAssertFailure_("Expected number but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
            },goog.asserts.assertString = function (e, t, r) {
                return goog.asserts.ENABLE_ASSERTS && !goog.isString(e) && goog.asserts.doAssertFailure_("Expected string but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
            },goog.asserts.assertFunction = function (e, t, r) {
                return goog.asserts.ENABLE_ASSERTS && !goog.isFunction(e) && goog.asserts.doAssertFailure_("Expected function but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
            },goog.asserts.assertObject = function (e, t, r) {
                return goog.asserts.ENABLE_ASSERTS && !goog.isObject(e) && goog.asserts.doAssertFailure_("Expected object but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
            },goog.asserts.assertArray = function (e, t, r) {
                return goog.asserts.ENABLE_ASSERTS && !goog.isArray(e) && goog.asserts.doAssertFailure_("Expected array but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
            },goog.asserts.assertBoolean = function (e, t, r) {
                return goog.asserts.ENABLE_ASSERTS && !goog.isBoolean(e) && goog.asserts.doAssertFailure_("Expected boolean but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
            },goog.asserts.assertElement = function (e, t, r) {
                return !goog.asserts.ENABLE_ASSERTS || goog.isObject(e) && e.nodeType == goog.dom.NodeType.ELEMENT || goog.asserts.doAssertFailure_("Expected Element but got %s: %s.", [goog.typeOf(e), e], t, Array.prototype.slice.call(arguments, 2)), e
            },goog.asserts.assertInstanceof = function (e, t, r, o) {
                return !goog.asserts.ENABLE_ASSERTS || e instanceof t || goog.asserts.doAssertFailure_("Expected instanceof %s but got %s.", [goog.asserts.getType_(t), goog.asserts.getType_(e)], r, Array.prototype.slice.call(arguments, 3)), e
            },goog.asserts.assertObjectPrototypeIsIntact = function () {
                for (var e in Object.prototype) goog.asserts.fail(e + " should not be enumerable in Object.prototype.")
            },goog.asserts.getType_ = function (e) {
                return e instanceof Function ? e.displayName || e.name || "unknown type name" : e instanceof Object ? e.constructor.displayName || e.constructor.name || Object.prototype.toString.call(e) : null === e ? "null" : typeof e
            };
            var jspb = {
                Map: function (e, t) {
                    this.arr_ = e, this.valueCtor_ = t, this.map_ = {}, this.arrClean = !0, 0 < this.arr_.length && this.loadFromArray_()
                }
            }, Bza, Cza;
            jspb.Map.prototype.loadFromArray_ = function () {
                for (var e = 0; e < this.arr_.length; e++) {
                    var t = this.arr_[e], r = t[0];
                    this.map_[r.toString()] = new jspb.Map.Entry_(r, t[1])
                }
                this.arrClean = !0
            }, jspb.Map.prototype.toArray = function () {
                if (this.arrClean) {
                    if (this.valueCtor_) {
                        var e, t = this.map_;
                        for (e in t) if (Object.prototype.hasOwnProperty.call(t, e)) {
                            var r = t[e].valueWrapper;
                            r && r.toArray()
                        }
                    }
                } else {
                    for (this.arr_.length = 0, (t = this.stringKeys_()).sort(), e = 0; e < t.length; e++) {
                        var o = this.map_[t[e]];
                        (r = o.valueWrapper) && r.toArray(), this.arr_.push([o.key, o.value])
                    }
                    this.arrClean = !0
                }
                return this.arr_
            }, jspb.Map.prototype.toObject = function (e, t) {
                for (var r = this.toArray(), o = [], i = 0; i < r.length; i++) {
                    var s = this.map_[r[i][0].toString()];
                    this.wrapEntry_(s);
                    var a = s.valueWrapper;
                    a ? (goog.asserts.assert(t), o.push([s.key, t(e, a)])) : o.push([s.key, s.value])
                }
                return o
            }, jspb.Map.fromObject = function (e, t, r) {
                t = new jspb.Map([], t);
                for (var o = 0; o < e.length; o++) {
                    var i = e[o][0], s = r(e[o][1]);
                    t.set(i, s)
                }
                return t
            }, jspb.Map.ArrayIteratorIterable_ = function (e) {
                this.idx_ = 0, this.arr_ = e
            }, jspb.Map.ArrayIteratorIterable_.prototype.next = function () {
                return this.idx_ < this.arr_.length ? {done: !1, value: this.arr_[this.idx_++]} : {
                    done: !0,
                    value: void 0
                }
            }, $jscomp.initSymbol(), "undefined" != typeof Symbol && ($jscomp.initSymbol(), $jscomp.initSymbolIterator(), jspb.Map.ArrayIteratorIterable_.prototype[Symbol.iterator] = function () {
                return this
            }), jspb.Map.prototype.getLength = function () {
                return this.stringKeys_().length
            }, jspb.Map.prototype.clear = function () {
                this.map_ = {}, this.arrClean = !1
            }, jspb.Map.prototype.del = function (e) {
                e = e.toString();
                var t = this.map_.hasOwnProperty(e);
                return delete this.map_[e], this.arrClean = !1, t
            }, jspb.Map.prototype.getEntryList = function () {
                var e = [], t = this.stringKeys_();
                t.sort();
                for (var r = 0; r < t.length; r++) {
                    var o = this.map_[t[r]];
                    e.push([o.key, o.value])
                }
                return e
            }, jspb.Map.prototype.entries = function () {
                var e = [], t = this.stringKeys_();
                t.sort();
                for (var r = 0; r < t.length; r++) {
                    var o = this.map_[t[r]];
                    e.push([o.key, this.wrapEntry_(o)])
                }
                return new jspb.Map.ArrayIteratorIterable_(e)
            }, jspb.Map.prototype.keys = function () {
                var e = [], t = this.stringKeys_();
                t.sort();
                for (var r = 0; r < t.length; r++) e.push(this.map_[t[r]].key);
                return new jspb.Map.ArrayIteratorIterable_(e)
            }, jspb.Map.prototype.values = function () {
                var e = [], t = this.stringKeys_();
                t.sort();
                for (var r = 0; r < t.length; r++) e.push(this.wrapEntry_(this.map_[t[r]]));
                return new jspb.Map.ArrayIteratorIterable_(e)
            }, jspb.Map.prototype.forEach = function (e, t) {
                var r = this.stringKeys_();
                r.sort();
                for (var o = 0; o < r.length; o++) {
                    var i = this.map_[r[o]];
                    e.call(t, this.wrapEntry_(i), i.key, this)
                }
            }, jspb.Map.prototype.set = function (e, t) {
                var r = new jspb.Map.Entry_(e);
                return this.valueCtor_ ? (r.valueWrapper = t, r.value = t.toArray()) : r.value = t, this.map_[e.toString()] = r, this.arrClean = !1, this
            }, jspb.Map.prototype.wrapEntry_ = function (e) {
                return this.valueCtor_ ? (e.valueWrapper || (e.valueWrapper = new this.valueCtor_(e.value)), e.valueWrapper) : e.value
            }, jspb.Map.prototype.get = function (e) {
                if (e = this.map_[e.toString()]) return this.wrapEntry_(e)
            }, jspb.Map.prototype.has = function (e) {
                return e.toString() in this.map_
            }, jspb.Map.prototype.serializeBinary = function (e, t, r, o, i) {
                var s = this.stringKeys_();
                s.sort();
                for (var a = 0; a < s.length; a++) {
                    var n = this.map_[s[a]];
                    t.beginSubMessage(e), r.call(t, 1, n.key), this.valueCtor_ ? o.call(t, 2, this.wrapEntry_(n), i) : o.call(t, 2, n.value), t.endSubMessage()
                }
            }, jspb.Map.deserializeBinary = function (e, t, r, o, i, s) {
                for (var a = void 0; t.nextField() && !t.isEndGroup();) {
                    var n = t.getFieldNumber();
                    1 == n ? s = r.call(t) : 2 == n && (e.valueCtor_ ? (goog.asserts.assert(i), a = new e.valueCtor_, o.call(t, a, i)) : a = o.call(t))
                }
                goog.asserts.assert(null != s), goog.asserts.assert(null != a), e.set(s, a)
            }, jspb.Map.prototype.stringKeys_ = function () {
                var e, t = this.map_, r = [];
                for (e in t) Object.prototype.hasOwnProperty.call(t, e) && r.push(e);
                return r
            }, jspb.Map.Entry_ = function (e, t) {
                this.key = e, this.value = t, this.valueWrapper = void 0
            }, goog.array = {}, goog.NATIVE_ARRAY_PROTOTYPES = goog.TRUSTED_SITE, goog.array.ASSUME_NATIVE_FUNCTIONS = !1, goog.array.peek = function (e) {
                return e[e.length - 1]
            }, goog.array.last = goog.array.peek, goog.array.indexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.indexOf) ? function (e, t, r) {
                return goog.asserts.assert(null != e.length), Array.prototype.indexOf.call(e, t, r)
            } : function (e, t, r) {
                if (r = null == r ? 0 : r < 0 ? Math.max(0, e.length + r) : r, goog.isString(e)) return goog.isString(t) && 1 == t.length ? e.indexOf(t, r) : -1;
                for (; r < e.length; r++) if (r in e && e[r] === t) return r;
                return -1
            }, goog.array.lastIndexOf = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.lastIndexOf) ? function (e, t, r) {
                return goog.asserts.assert(null != e.length), Array.prototype.lastIndexOf.call(e, t, null == r ? e.length - 1 : r)
            } : function (e, t, r) {
                if ((r = null == r ? e.length - 1 : r) < 0 && (r = Math.max(0, e.length + r)), goog.isString(e)) return goog.isString(t) && 1 == t.length ? e.lastIndexOf(t, r) : -1;
                for (; 0 <= r; r--) if (r in e && e[r] === t) return r;
                return -1
            }, goog.array.forEach = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.forEach) ? function (e, t, r) {
                goog.asserts.assert(null != e.length), Array.prototype.forEach.call(e, t, r)
            } : function (e, t, r) {
                for (var o = e.length, i = goog.isString(e) ? e.split("") : e, s = 0; s < o; s++) s in i && t.call(r, i[s], s, e)
            }, goog.array.forEachRight = function (e, t, r) {
                var o = e.length, i = goog.isString(e) ? e.split("") : e;
                for (o = o - 1; 0 <= o; --o) o in i && t.call(r, i[o], o, e)
            }, goog.array.filter = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.filter) ? function (e, t, r) {
                return goog.asserts.assert(null != e.length), Array.prototype.filter.call(e, t, r)
            } : function (e, t, r) {
                for (var o = e.length, i = [], s = 0, a = goog.isString(e) ? e.split("") : e, n = 0; n < o; n++) if (n in a) {
                    var p = a[n];
                    t.call(r, p, n, e) && (i[s++] = p)
                }
                return i
            }, goog.array.map = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.map) ? function (e, t, r) {
                return goog.asserts.assert(null != e.length), Array.prototype.map.call(e, t, r)
            } : function (e, t, r) {
                for (var o = e.length, i = Array(o), s = goog.isString(e) ? e.split("") : e, a = 0; a < o; a++) a in s && (i[a] = t.call(r, s[a], a, e));
                return i
            }, goog.array.reduce = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduce) ? function (e, t, r, o) {
                return goog.asserts.assert(null != e.length), o && (t = goog.bind(t, o)), Array.prototype.reduce.call(e, t, r)
            } : function (r, o, e, i) {
                var s = e;
                return goog.array.forEach(r, function (e, t) {
                    s = o.call(i, s, e, t, r)
                }), s
            }, goog.array.reduceRight = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.reduceRight) ? function (e, t, r, o) {
                return goog.asserts.assert(null != e.length), goog.asserts.assert(null != t), o && (t = goog.bind(t, o)), Array.prototype.reduceRight.call(e, t, r)
            } : function (r, o, e, i) {
                var s = e;
                return goog.array.forEachRight(r, function (e, t) {
                    s = o.call(i, s, e, t, r)
                }), s
            }, goog.array.some = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.some) ? function (e, t, r) {
                return goog.asserts.assert(null != e.length), Array.prototype.some.call(e, t, r)
            } : function (e, t, r) {
                for (var o = e.length, i = goog.isString(e) ? e.split("") : e, s = 0; s < o; s++) if (s in i && t.call(r, i[s], s, e)) return !0;
                return !1
            }, goog.array.every = goog.NATIVE_ARRAY_PROTOTYPES && (goog.array.ASSUME_NATIVE_FUNCTIONS || Array.prototype.every) ? function (e, t, r) {
                return goog.asserts.assert(null != e.length), Array.prototype.every.call(e, t, r)
            } : function (e, t, r) {
                for (var o = e.length, i = goog.isString(e) ? e.split("") : e, s = 0; s < o; s++) if (s in i && !t.call(r, i[s], s, e)) return !1;
                return !0
            }, goog.array.count = function (e, o, i) {
                var s = 0;
                return goog.array.forEach(e, function (e, t, r) {
                    o.call(i, e, t, r) && ++s
                }, i), s
            }, goog.array.find = function (e, t, r) {
                return (t = goog.array.findIndex(e, t, r)) < 0 ? null : goog.isString(e) ? e.charAt(t) : e[t]
            }, goog.array.findIndex = function (e, t, r) {
                for (var o = e.length, i = goog.isString(e) ? e.split("") : e, s = 0; s < o; s++) if (s in i && t.call(r, i[s], s, e)) return s;
                return -1
            }, goog.array.findRight = function (e, t, r) {
                return (t = goog.array.findIndexRight(e, t, r)) < 0 ? null : goog.isString(e) ? e.charAt(t) : e[t]
            }, goog.array.findIndexRight = function (e, t, r) {
                var o = e.length, i = goog.isString(e) ? e.split("") : e;
                for (o = o - 1; 0 <= o; o--) if (o in i && t.call(r, i[o], o, e)) return o;
                return -1
            }, goog.array.contains = function (e, t) {
                return 0 <= goog.array.indexOf(e, t)
            }, goog.array.isEmpty = function (e) {
                return 0 == e.length
            }, goog.array.clear = function (e) {
                if (!goog.isArray(e)) for (var t = e.length - 1; 0 <= t; t--) delete e[t];
                e.length = 0
            }, goog.array.insert = function (e, t) {
                goog.array.contains(e, t) || e.push(t)
            }, goog.array.insertAt = function (e, t, r) {
                goog.array.splice(e, r, 0, t)
            }, goog.array.insertArrayAt = function (e, t, r) {
                goog.partial(goog.array.splice, e, r, 0).apply(null, t)
            }, goog.array.insertBefore = function (e, t, r) {
                var o;
                2 == arguments.length || (o = goog.array.indexOf(e, r)) < 0 ? e.push(t) : goog.array.insertAt(e, t, o)
            }, goog.array.remove = function (e, t) {
                var r, o = goog.array.indexOf(e, t);
                return (r = 0 <= o) && goog.array.removeAt(e, o), r
            }, goog.array.removeAt = function (e, t) {
                return goog.asserts.assert(null != e.length), 1 == Array.prototype.splice.call(e, t, 1).length
            }, goog.array.removeIf = function (e, t, r) {
                return 0 <= (t = goog.array.findIndex(e, t, r)) && (goog.array.removeAt(e, t), !0)
            }, goog.array.removeAllIf = function (r, o, i) {
                var s = 0;
                return goog.array.forEachRight(r, function (e, t) {
                    o.call(i, e, t, r) && goog.array.removeAt(r, t) && s++
                }), s
            }, goog.array.concat = function (e) {
                return Array.prototype.concat.apply(Array.prototype, arguments)
            }, goog.array.join = function (e) {
                return Array.prototype.concat.apply(Array.prototype, arguments)
            }, goog.array.toArray = function (e) {
                var t = e.length;
                if (0 < t) {
                    for (var r = Array(t), o = 0; o < t; o++) r[o] = e[o];
                    return r
                }
                return []
            }, goog.array.clone = goog.array.toArray, goog.array.extend = function (e, t) {
                for (var r = 1; r < arguments.length; r++) {
                    var o = arguments[r];
                    if (goog.isArrayLike(o)) {
                        var i = e.length || 0, s = o.length || 0;
                        e.length = i + s;
                        for (var a = 0; a < s; a++) e[i + a] = o[a]
                    } else e.push(o)
                }
            }, goog.array.splice = function (e, t, r, o) {
                return goog.asserts.assert(null != e.length), Array.prototype.splice.apply(e, goog.array.slice(arguments, 1))
            }, goog.array.slice = function (e, t, r) {
                return goog.asserts.assert(null != e.length), arguments.length <= 2 ? Array.prototype.slice.call(e, t) : Array.prototype.slice.call(e, t, r)
            }, goog.array.removeDuplicates = function (e, t, r) {
                t = t || e;
                var o = function (e) {
                    return goog.isObject(e) ? "o" + goog.getUid(e) : (typeof e).charAt(0) + e
                };
                r = r || o;
                o = {};
                for (var i = 0, s = 0; s < e.length;) {
                    var a = e[s++], n = r(a);
                    Object.prototype.hasOwnProperty.call(o, n) || (o[n] = !0, t[i++] = a)
                }
                t.length = i
            }, goog.array.binarySearch = function (e, t, r) {
                return goog.array.binarySearch_(e, r || goog.array.defaultCompare, !1, t)
            }, goog.array.binarySelect = function (e, t, r) {
                return goog.array.binarySearch_(e, t, !0, void 0, r)
            }, goog.array.binarySearch_ = function (e, t, r, o, i) {
                for (var s, a = 0, n = e.length; a < n;) {
                    var p, g = a + n >> 1;
                    0 < (p = r ? t.call(i, e[g], g, e) : t(o, e[g])) ? a = g + 1 : (n = g, s = !p)
                }
                return s ? a : ~a
            }, goog.array.sort = function (e, t) {
                e.sort(t || goog.array.defaultCompare)
            }, goog.array.stableSort = function (e, t) {
                for (var r = 0; r < e.length; r++) e[r] = {index: r, value: e[r]};
                var o = t || goog.array.defaultCompare;
                for (goog.array.sort(e, function (e, t) {
                    return o(e.value, t.value) || e.index - t.index
                }), r = 0; r < e.length; r++) e[r] = e[r].value
            }, goog.array.sortByKey = function (e, r, t) {
                var o = t || goog.array.defaultCompare;
                goog.array.sort(e, function (e, t) {
                    return o(r(e), r(t))
                })
            }, goog.array.sortObjectsByKey = function (e, t, r) {
                goog.array.sortByKey(e, function (e) {
                    return e[t]
                }, r)
            }, goog.array.isSorted = function (e, t, r) {
                t = t || goog.array.defaultCompare;
                for (var o = 1; o < e.length; o++) {
                    var i = t(e[o - 1], e[o]);
                    if (0 < i || 0 == i && r) return !1
                }
                return !0
            }, goog.array.equals = function (e, t, r) {
                if (!goog.isArrayLike(e) || !goog.isArrayLike(t) || e.length != t.length) return !1;
                var o = e.length;
                r = r || goog.array.defaultCompareEquality;
                for (var i = 0; i < o; i++) if (!r(e[i], t[i])) return !1;
                return !0
            }, goog.array.compare3 = function (e, t, r) {
                r = r || goog.array.defaultCompare;
                for (var o = Math.min(e.length, t.length), i = 0; i < o; i++) {
                    var s = r(e[i], t[i]);
                    if (0 != s) return s
                }
                return goog.array.defaultCompare(e.length, t.length)
            }, goog.array.defaultCompare = function (e, t) {
                return t < e ? 1 : e < t ? -1 : 0
            }, goog.array.inverseDefaultCompare = function (e, t) {
                return -goog.array.defaultCompare(e, t)
            }, goog.array.defaultCompareEquality = function (e, t) {
                return e === t
            }, goog.array.binaryInsert = function (e, t, r) {
                return (r = goog.array.binarySearch(e, t, r)) < 0 && (goog.array.insertAt(e, t, -(r + 1)), !0)
            }, goog.array.binaryRemove = function (e, t, r) {
                return 0 <= (t = goog.array.binarySearch(e, t, r)) && goog.array.removeAt(e, t)
            }, goog.array.bucket = function (e, t, r) {
                for (var o = {}, i = 0; i < e.length; i++) {
                    var s = e[i], a = t.call(r, s, i, e);
                    goog.isDef(a) && (o[a] || (o[a] = [])).push(s)
                }
                return o
            }, goog.array.toObject = function (r, o, i) {
                var s = {};
                return goog.array.forEach(r, function (e, t) {
                    s[o.call(i, e, t, r)] = e
                }), s
            }, goog.array.range = function (e, t, r) {
                var o = [], i = 0, s = e;
                if (void 0 !== t && (i = e, s = t), (r = r || 1) * (s - i) < 0) return [];
                if (0 < r) for (e = i; e < s; e += r) o.push(e); else for (e = i; s < e; e += r) o.push(e);
                return o
            }, goog.array.repeat = function (e, t) {
                for (var r = [], o = 0; o < t; o++) r[o] = e;
                return r
            }, goog.array.flatten = function (e) {
                for (var t = [], r = 0; r < arguments.length; r++) {
                    var o = arguments[r];
                    if (goog.isArray(o)) for (var i = 0; i < o.length; i += 8192) for (var s = goog.array.slice(o, i, i + 8192), a = (s = goog.array.flatten.apply(null, s), 0); a < s.length; a++) t.push(s[a]); else t.push(o)
                }
                return t
            }, goog.array.rotate = function (e, t) {
                return goog.asserts.assert(null != e.length), e.length && (0 < (t %= e.length) ? Array.prototype.unshift.apply(e, e.splice(-t, t)) : t < 0 && Array.prototype.push.apply(e, e.splice(0, -t))), e
            }, goog.array.moveItem = function (e, t, r) {
                goog.asserts.assert(0 <= t && t < e.length), goog.asserts.assert(0 <= r && r < e.length), t = Array.prototype.splice.call(e, t, 1), Array.prototype.splice.call(e, r, 0, t[0])
            }, goog.array.zip = function (e) {
                if (!arguments.length) return [];
                for (var t = [], r = e.length, o = 1; o < arguments.length; o++) arguments[o].length < r && (r = arguments[o].length);
                for (o = 0; o < r; o++) {
                    for (var i = [], s = 0; s < arguments.length; s++) i.push(arguments[s][o]);
                    t.push(i)
                }
                return t
            }, goog.array.shuffle = function (e, t) {
                for (var r = t || Math.random, o = e.length - 1; 0 < o; o--) {
                    var i = Math.floor(r() * (o + 1)), s = e[o];
                    e[o] = e[i], e[i] = s
                }
            }, goog.array.copyByIndex = function (t, e) {
                var r = [];
                return goog.array.forEach(e, function (e) {
                    r.push(t[e])
                }), r
            }, goog.crypt = {}, goog.crypt.stringToByteArray = function (e) {
                for (var t = [], r = 0, o = 0; o < e.length; o++) {
                    for (var i = e.charCodeAt(o); 255 < i;) t[r++] = 255 & i, i >>= 8;
                    t[r++] = i
                }
                return t
            }, goog.crypt.byteArrayToString = function (e) {
                if (e.length <= 8192) return String.fromCharCode.apply(null, e);
                for (var t = "", r = 0; r < e.length; r += 8192) {
                    var o = goog.array.slice(e, r, r + 8192);
                    t = t + String.fromCharCode.apply(null, o)
                }
                return t
            }, goog.crypt.byteArrayToHex = function (e) {
                return goog.array.map(e, function (e) {
                    return 1 < (e = e.toString(16)).length ? e : "0" + e
                }).join("")
            }, goog.crypt.hexToByteArray = function (e) {
                goog.asserts.assert(0 == e.length % 2, "Key string length must be multiple of 2");
                for (var t = [], r = 0; r < e.length; r += 2) t.push(parseInt(e.substring(r, r + 2), 16));
                return t
            }, goog.crypt.stringToUtf8ByteArray = function (e) {
                for (var t = [], r = 0, o = 0; o < e.length; o++) {
                    var i = e.charCodeAt(o);
                    i < 128 ? t[r++] = i : (i < 2048 ? t[r++] = i >> 6 | 192 : (55296 == (64512 & i) && o + 1 < e.length && 56320 == (64512 & e.charCodeAt(o + 1)) ? (i = 65536 + ((1023 & i) << 10) + (1023 & e.charCodeAt(++o)), t[r++] = i >> 18 | 240, t[r++] = i >> 12 & 63 | 128) : t[r++] = i >> 12 | 224, t[r++] = i >> 6 & 63 | 128), t[r++] = 63 & i | 128)
                }
                return t
            }, goog.crypt.utf8ByteArrayToString = function (e) {
                for (var t = [], r = 0, o = 0; r < e.length;) {
                    if ((a = e[r++]) < 128) t[o++] = String.fromCharCode(a); else if (191 < a && a < 224) {
                        var i = e[r++];
                        t[o++] = String.fromCharCode((31 & a) << 6 | 63 & i)
                    } else if (239 < a && a < 365) {
                        i = e[r++];
                        var s = e[r++], a = ((7 & a) << 18 | (63 & i) << 12 | (63 & s) << 6 | 63 & e[r++]) - 65536;
                        t[o++] = String.fromCharCode(55296 + (a >> 10)), t[o++] = String.fromCharCode(56320 + (1023 & a))
                    } else i = e[r++], s = e[r++], t[o++] = String.fromCharCode((15 & a) << 12 | (63 & i) << 6 | 63 & s)
                }
                return t.join("")
            }, goog.crypt.xorByteArray = function (e, t) {
                goog.asserts.assert(e.length == t.length, "XOR array lengths must match");
                for (var r = [], o = 0; o < e.length; o++) r.push(e[o] ^ t[o]);
                return r
            }, goog.labs = {}, goog.labs.userAgent = {}, goog.labs.userAgent.util = {}, goog.labs.userAgent.util.getNativeUserAgentString_ = function () {
                var e = goog.labs.userAgent.util.getNavigator_();
                return e && (e = e.userAgent) ? e : ""
            }, goog.labs.userAgent.util.getNavigator_ = function () {
                return goog.global.navigator
            },goog.labs.userAgent.util.userAgent_ = goog.labs.userAgent.util.getNativeUserAgentString_(),goog.labs.userAgent.util.setUserAgent = function (e) {
                goog.labs.userAgent.util.userAgent_ = e || goog.labs.userAgent.util.getNativeUserAgentString_()
            },goog.labs.userAgent.util.getUserAgent = function () {
                return goog.labs.userAgent.util.userAgent_
            },goog.labs.userAgent.util.matchUserAgent = function (e) {
                var t = goog.labs.userAgent.util.getUserAgent();
                return goog.string.contains(t, e)
            },goog.labs.userAgent.util.matchUserAgentIgnoreCase = function (e) {
                var t = goog.labs.userAgent.util.getUserAgent();
                return goog.string.caseInsensitiveContains(t, e)
            },goog.labs.userAgent.util.extractVersionTuples = function (e) {
                for (var t, r = RegExp("(\\w[\\w ]+)/([^\\s]+)\\s*(?:\\((.*?)\\))?", "g"), o = []; t = r.exec(e);) o.push([t[1], t[2], t[3] || void 0]);
                return o
            },goog.labs.userAgent.platform = {},goog.labs.userAgent.platform.isAndroid = function () {
                return goog.labs.userAgent.util.matchUserAgent("Android")
            },goog.labs.userAgent.platform.isIpod = function () {
                return goog.labs.userAgent.util.matchUserAgent("iPod")
            },goog.labs.userAgent.platform.isIphone = function () {
                return goog.labs.userAgent.util.matchUserAgent("iPhone") && !goog.labs.userAgent.util.matchUserAgent("iPod") && !goog.labs.userAgent.util.matchUserAgent("iPad")
            },goog.labs.userAgent.platform.isIpad = function () {
                return goog.labs.userAgent.util.matchUserAgent("iPad")
            },goog.labs.userAgent.platform.isIos = function () {
                return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpad() || goog.labs.userAgent.platform.isIpod()
            },goog.labs.userAgent.platform.isMacintosh = function () {
                return goog.labs.userAgent.util.matchUserAgent("Macintosh")
            },goog.labs.userAgent.platform.isLinux = function () {
                return goog.labs.userAgent.util.matchUserAgent("Linux")
            },goog.labs.userAgent.platform.isWindows = function () {
                return goog.labs.userAgent.util.matchUserAgent("Windows")
            },goog.labs.userAgent.platform.isChromeOS = function () {
                return goog.labs.userAgent.util.matchUserAgent("CrOS")
            },goog.labs.userAgent.platform.getVersion = function () {
                var e = goog.labs.userAgent.util.getUserAgent(), t = "";
                return goog.labs.userAgent.platform.isWindows() ? t = (e = (t = /Windows (?:NT|Phone) ([0-9.]+)/).exec(e)) ? e[1] : "0.0" : goog.labs.userAgent.platform.isIos() ? t = (e = (t = /(?:iPhone|iPod|iPad|CPU)\s+OS\s+(\S+)/).exec(e)) && e[1].replace(/_/g, ".") : goog.labs.userAgent.platform.isMacintosh() ? t = (e = (t = /Mac OS X ([0-9_.]+)/).exec(e)) ? e[1].replace(/_/g, ".") : "10" : goog.labs.userAgent.platform.isAndroid() ? t = (e = (t = /Android\s+([^\);]+)(\)|;)/).exec(e)) && e[1] : goog.labs.userAgent.platform.isChromeOS() && (t = (e = (t = /(?:CrOS\s+(?:i686|x86_64)\s+([0-9.]+))/).exec(e)) && e[1]), t || ""
            },goog.labs.userAgent.platform.isVersionOrHigher = function (e) {
                return 0 <= goog.string.compareVersions(goog.labs.userAgent.platform.getVersion(), e)
            },goog.object = {},goog.object.forEach = function (e, t, r) {
                for (var o in e) t.call(r, e[o], o, e)
            },goog.object.filter = function (e, t, r) {
                var o, i = {};
                for (o in e) t.call(r, e[o], o, e) && (i[o] = e[o]);
                return i
            },goog.object.map = function (e, t, r) {
                var o, i = {};
                for (o in e) i[o] = t.call(r, e[o], o, e);
                return i
            },goog.object.some = function (e, t, r) {
                for (var o in e) if (t.call(r, e[o], o, e)) return !0;
                return !1
            },goog.object.every = function (e, t, r) {
                for (var o in e) if (!t.call(r, e[o], o, e)) return !1;
                return !0
            },goog.object.getCount = function (e) {
                var t, r = 0;
                for (t in e) r++;
                return r
            },goog.object.getAnyKey = function (e) {
                for (var t in e) return t
            },goog.object.getAnyValue = function (e) {
                for (var t in e) return e[t]
            },goog.object.contains = function (e, t) {
                return goog.object.containsValue(e, t)
            },goog.object.getValues = function (e) {
                var t, r = [], o = 0;
                for (t in e) r[o++] = e[t];
                return r
            },goog.object.getKeys = function (e) {
                var t, r = [], o = 0;
                for (t in e) r[o++] = t;
                return r
            },goog.object.getValueByKeys = function (e, t) {
                for (var r = (o = goog.isArrayLike(t)) ? t : arguments, o = o ? 0 : 1; o < r.length && (e = e[r[o]], goog.isDef(e)); o++) ;
                return e
            },goog.object.containsKey = function (e, t) {
                return null !== e && t in e
            },goog.object.containsValue = function (e, t) {
                for (var r in e) if (e[r] == t) return !0;
                return !1
            },goog.object.findKey = function (e, t, r) {
                for (var o in e) if (t.call(r, e[o], o, e)) return o
            },goog.object.findValue = function (e, t, r) {
                return (t = goog.object.findKey(e, t, r)) && e[t]
            },goog.object.isEmpty = function (e) {
                for (var t in e) return !1;
                return !0
            },goog.object.clear = function (e) {
                for (var t in e) delete e[t]
            },goog.object.remove = function (e, t) {
                var r;
                return (r = t in e) && delete e[t], r
            },goog.object.add = function (e, t, r) {
                if (null !== e && t in e) throw Error('The object already contains the key "' + t + '"');
                goog.object.set(e, t, r)
            },goog.object.get = function (e, t, r) {
                return null !== e && t in e ? e[t] : r
            },goog.object.set = function (e, t, r) {
                e[t] = r
            },goog.object.setIfUndefined = function (e, t, r) {
                return t in e ? e[t] : e[t] = r
            },goog.object.setWithReturnValueIfNotSet = function (e, t, r) {
                return t in e ? e[t] : (r = r(), e[t] = r)
            },goog.object.equals = function (e, t) {
                for (var r in e) if (!(r in t) || e[r] !== t[r]) return !1;
                for (r in t) if (!(r in e)) return !1;
                return !0
            },goog.object.clone = function (e) {
                var t, r = {};
                for (t in e) r[t] = e[t];
                return r
            },goog.object.unsafeClone = function (e) {
                if ("object" == (r = goog.typeOf(e)) || "array" == r) {
                    if (goog.isFunction(e.clone)) return e.clone();
                    var t, r = "array" == r ? [] : {};
                    for (t in e) r[t] = goog.object.unsafeClone(e[t]);
                    return r
                }
                return e
            },goog.object.transpose = function (e) {
                var t, r = {};
                for (t in e) r[e[t]] = t;
                return r
            },goog.object.PROTOTYPE_FIELDS_ = "constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" "),goog.object.extend = function (e, t) {
                for (var r, o, i = 1; i < arguments.length; i++) {
                    for (r in o = arguments[i]) e[r] = o[r];
                    for (var s = 0; s < goog.object.PROTOTYPE_FIELDS_.length; s++) r = goog.object.PROTOTYPE_FIELDS_[s], Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r])
                }
            },goog.object.create = function (e) {
                var t = arguments.length;
                if (1 == t && goog.isArray(e)) return goog.object.create.apply(null, e);
                if (t % 2) throw Error("Uneven number of arguments");
                for (var r = {}, o = 0; o < t; o += 2) r[arguments[o]] = arguments[o + 1];
                return r
            },goog.object.createSet = function (e) {
                var t = arguments.length;
                if (1 == t && goog.isArray(e)) return goog.object.createSet.apply(null, e);
                for (var r = {}, o = 0; o < t; o++) r[arguments[o]] = !0;
                return r
            },goog.object.createImmutableView = function (e) {
                var t = e;
                return Object.isFrozen && !Object.isFrozen(e) && (t = Object.create(e), Object.freeze(t)), t
            },goog.object.isImmutableView = function (e) {
                return !!Object.isFrozen && Object.isFrozen(e)
            },goog.labs.userAgent.browser = {},goog.labs.userAgent.browser.matchOpera_ = function () {
                return goog.labs.userAgent.util.matchUserAgent("Opera") || goog.labs.userAgent.util.matchUserAgent("OPR")
            },goog.labs.userAgent.browser.matchIE_ = function () {
                return goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE")
            },goog.labs.userAgent.browser.matchEdge_ = function () {
                return goog.labs.userAgent.util.matchUserAgent("Edge")
            },goog.labs.userAgent.browser.matchFirefox_ = function () {
                return goog.labs.userAgent.util.matchUserAgent("Firefox")
            },goog.labs.userAgent.browser.matchSafari_ = function () {
                return goog.labs.userAgent.util.matchUserAgent("Safari") && !(goog.labs.userAgent.browser.matchChrome_() || goog.labs.userAgent.browser.matchCoast_() || goog.labs.userAgent.browser.matchOpera_() || goog.labs.userAgent.browser.matchEdge_() || goog.labs.userAgent.browser.isSilk() || goog.labs.userAgent.util.matchUserAgent("Android"))
            },goog.labs.userAgent.browser.matchCoast_ = function () {
                return goog.labs.userAgent.util.matchUserAgent("Coast")
            },goog.labs.userAgent.browser.matchIosWebview_ = function () {
                return (goog.labs.userAgent.util.matchUserAgent("iPad") || goog.labs.userAgent.util.matchUserAgent("iPhone")) && !goog.labs.userAgent.browser.matchSafari_() && !goog.labs.userAgent.browser.matchChrome_() && !goog.labs.userAgent.browser.matchCoast_() && goog.labs.userAgent.util.matchUserAgent("AppleWebKit")
            },goog.labs.userAgent.browser.matchChrome_ = function () {
                return (goog.labs.userAgent.util.matchUserAgent("Chrome") || goog.labs.userAgent.util.matchUserAgent("CriOS")) && !goog.labs.userAgent.browser.matchOpera_() && !goog.labs.userAgent.browser.matchEdge_()
            },goog.labs.userAgent.browser.matchAndroidBrowser_ = function () {
                return goog.labs.userAgent.util.matchUserAgent("Android") && !(goog.labs.userAgent.browser.isChrome() || goog.labs.userAgent.browser.isFirefox() || goog.labs.userAgent.browser.isOpera() || goog.labs.userAgent.browser.isSilk())
            },goog.labs.userAgent.browser.isOpera = goog.labs.userAgent.browser.matchOpera_,goog.labs.userAgent.browser.isIE = goog.labs.userAgent.browser.matchIE_,goog.labs.userAgent.browser.isEdge = goog.labs.userAgent.browser.matchEdge_,goog.labs.userAgent.browser.isFirefox = goog.labs.userAgent.browser.matchFirefox_,goog.labs.userAgent.browser.isSafari = goog.labs.userAgent.browser.matchSafari_,goog.labs.userAgent.browser.isCoast = goog.labs.userAgent.browser.matchCoast_,goog.labs.userAgent.browser.isIosWebview = goog.labs.userAgent.browser.matchIosWebview_,goog.labs.userAgent.browser.isChrome = goog.labs.userAgent.browser.matchChrome_,goog.labs.userAgent.browser.isAndroidBrowser = goog.labs.userAgent.browser.matchAndroidBrowser_,goog.labs.userAgent.browser.isSilk = function () {
                return goog.labs.userAgent.util.matchUserAgent("Silk")
            },goog.labs.userAgent.browser.getVersion = function () {
                function e(e) {
                    return e = goog.array.find(e, o), r[e] || ""
                }

                var t = goog.labs.userAgent.util.getUserAgent();
                if (goog.labs.userAgent.browser.isIE()) return goog.labs.userAgent.browser.getIEVersion_(t);
                t = goog.labs.userAgent.util.extractVersionTuples(t);
                var r = {};
                goog.array.forEach(t, function (e) {
                    r[e[0]] = e[1]
                });
                var o = goog.partial(goog.object.containsKey, r);
                return goog.labs.userAgent.browser.isOpera() ? e(["Version", "Opera", "OPR"]) : goog.labs.userAgent.browser.isEdge() ? e(["Edge"]) : goog.labs.userAgent.browser.isChrome() ? e(["Chrome", "CriOS"]) : (t = t[2]) && t[1] || ""
            },goog.labs.userAgent.browser.isVersionOrHigher = function (e) {
                return 0 <= goog.string.compareVersions(goog.labs.userAgent.browser.getVersion(), e)
            },goog.labs.userAgent.browser.getIEVersion_ = function (e) {
                if ((t = /rv: *([\d\.]*)/.exec(e)) && t[1]) return t[1];
                var t = "", r = /MSIE +([\d\.]+)/.exec(e);
                if (r && r[1]) if (e = /Trident\/(\d.\d)/.exec(e), "7.0" == r[1]) if (e && e[1]) switch (e[1]) {
                    case"4.0":
                        t = "8.0";
                        break;
                    case"5.0":
                        t = "9.0";
                        break;
                    case"6.0":
                        t = "10.0";
                        break;
                    case"7.0":
                        t = "11.0"
                } else t = "7.0"; else t = r[1];
                return t
            },goog.labs.userAgent.engine = {},goog.labs.userAgent.engine.isPresto = function () {
                return goog.labs.userAgent.util.matchUserAgent("Presto")
            },goog.labs.userAgent.engine.isTrident = function () {
                return goog.labs.userAgent.util.matchUserAgent("Trident") || goog.labs.userAgent.util.matchUserAgent("MSIE")
            },goog.labs.userAgent.engine.isEdge = function () {
                return goog.labs.userAgent.util.matchUserAgent("Edge")
            },goog.labs.userAgent.engine.isWebKit = function () {
                return goog.labs.userAgent.util.matchUserAgentIgnoreCase("WebKit") && !goog.labs.userAgent.engine.isEdge()
            },goog.labs.userAgent.engine.isGecko = function () {
                return goog.labs.userAgent.util.matchUserAgent("Gecko") && !goog.labs.userAgent.engine.isWebKit() && !goog.labs.userAgent.engine.isTrident() && !goog.labs.userAgent.engine.isEdge()
            },goog.labs.userAgent.engine.getVersion = function () {
                if (t = goog.labs.userAgent.util.getUserAgent()) {
                    var e, t = goog.labs.userAgent.util.extractVersionTuples(t),
                        r = goog.labs.userAgent.engine.getEngineTuple_(t);
                    if (r) return "Gecko" == r[0] ? goog.labs.userAgent.engine.getVersionForKey_(t, "Firefox") : r[1];
                    if ((t = t[0]) && (e = t[2]) && (e = /Trident\/([^\s;]+)/.exec(e))) return e[1]
                }
                return ""
            },goog.labs.userAgent.engine.getEngineTuple_ = function (e) {
                if (!goog.labs.userAgent.engine.isEdge()) return e[1];
                for (var t = 0; t < e.length; t++) {
                    var r = e[t];
                    if ("Edge" == r[0]) return r
                }
            },goog.labs.userAgent.engine.isVersionOrHigher = function (e) {
                return 0 <= goog.string.compareVersions(goog.labs.userAgent.engine.getVersion(), e)
            },goog.labs.userAgent.engine.getVersionForKey_ = function (e, t) {
                var r = goog.array.find(e, function (e) {
                    return t == e[0]
                });
                return r && r[1] || ""
            },goog.userAgent = {},goog.userAgent.ASSUME_IE = !1,goog.userAgent.ASSUME_EDGE = !1,goog.userAgent.ASSUME_GECKO = !1,goog.userAgent.ASSUME_WEBKIT = !1,goog.userAgent.ASSUME_MOBILE_WEBKIT = !1,goog.userAgent.ASSUME_OPERA = !1,goog.userAgent.ASSUME_ANY_VERSION = !1,goog.userAgent.BROWSER_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_GECKO || goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_OPERA,goog.userAgent.getUserAgentString = function () {
                return goog.labs.userAgent.util.getUserAgent()
            },goog.userAgent.getNavigator = function () {
                return goog.global.navigator || null
            },goog.userAgent.OPERA = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_OPERA : goog.labs.userAgent.browser.isOpera(),goog.userAgent.IE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_IE : goog.labs.userAgent.browser.isIE(),goog.userAgent.EDGE = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_EDGE : goog.labs.userAgent.engine.isEdge(),goog.userAgent.EDGE_OR_IE = goog.userAgent.EDGE || goog.userAgent.IE,goog.userAgent.GECKO = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_GECKO : goog.labs.userAgent.engine.isGecko(),goog.userAgent.WEBKIT = goog.userAgent.BROWSER_KNOWN_ ? goog.userAgent.ASSUME_WEBKIT || goog.userAgent.ASSUME_MOBILE_WEBKIT : goog.labs.userAgent.engine.isWebKit(),goog.userAgent.isMobile_ = function () {
                return goog.userAgent.WEBKIT && goog.labs.userAgent.util.matchUserAgent("Mobile")
            },goog.userAgent.MOBILE = goog.userAgent.ASSUME_MOBILE_WEBKIT || goog.userAgent.isMobile_(),goog.userAgent.SAFARI = goog.userAgent.WEBKIT,goog.userAgent.determinePlatform_ = function () {
                var e = goog.userAgent.getNavigator();
                return e && e.platform || ""
            },goog.userAgent.PLATFORM = goog.userAgent.determinePlatform_(),goog.userAgent.ASSUME_MAC = !1,goog.userAgent.ASSUME_WINDOWS = !1,goog.userAgent.ASSUME_LINUX = !1,goog.userAgent.ASSUME_X11 = !1,goog.userAgent.ASSUME_ANDROID = !1,goog.userAgent.ASSUME_IPHONE = !1,goog.userAgent.ASSUME_IPAD = !1,goog.userAgent.PLATFORM_KNOWN_ = goog.userAgent.ASSUME_MAC || goog.userAgent.ASSUME_WINDOWS || goog.userAgent.ASSUME_LINUX || goog.userAgent.ASSUME_X11 || goog.userAgent.ASSUME_ANDROID || goog.userAgent.ASSUME_IPHONE || goog.userAgent.ASSUME_IPAD,goog.userAgent.MAC = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_MAC : goog.labs.userAgent.platform.isMacintosh(),goog.userAgent.WINDOWS = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_WINDOWS : goog.labs.userAgent.platform.isWindows(),goog.userAgent.isLegacyLinux_ = function () {
                return goog.labs.userAgent.platform.isLinux() || goog.labs.userAgent.platform.isChromeOS()
            },goog.userAgent.LINUX = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_LINUX : goog.userAgent.isLegacyLinux_(),goog.userAgent.isX11_ = function () {
                var e = goog.userAgent.getNavigator();
                return !!e && goog.string.contains(e.appVersion || "", "X11")
            },goog.userAgent.X11 = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_X11 : goog.userAgent.isX11_(),goog.userAgent.ANDROID = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_ANDROID : goog.labs.userAgent.platform.isAndroid(),goog.userAgent.IPHONE = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPHONE : goog.labs.userAgent.platform.isIphone(),goog.userAgent.IPAD = goog.userAgent.PLATFORM_KNOWN_ ? goog.userAgent.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad(),goog.userAgent.operaVersion_ = function () {
                var t = goog.global.opera.version;
                try {
                    return t()
                } catch (e) {
                    return t
                }
            },goog.userAgent.determineVersion_ = function () {
                if (goog.userAgent.OPERA && goog.global.opera) return goog.userAgent.operaVersion_();
                var e = "", t = goog.userAgent.getVersionRegexResult_();
                return t && (e = t ? t[1] : ""), goog.userAgent.IE && (t = goog.userAgent.getDocumentMode_()) > parseFloat(e) ? String(t) : e
            },goog.userAgent.getVersionRegexResult_ = function () {
                var e = goog.userAgent.getUserAgentString();
                return goog.userAgent.GECKO ? /rv\:([^\);]+)(\)|;)/.exec(e) : goog.userAgent.EDGE ? /Edge\/([\d\.]+)/.exec(e) : goog.userAgent.IE ? /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e) : goog.userAgent.WEBKIT ? /WebKit\/(\S+)/.exec(e) : void 0
            },goog.userAgent.getDocumentMode_ = function () {
                var e = goog.global.document;
                return e ? e.documentMode : void 0
            },goog.userAgent.VERSION = goog.userAgent.determineVersion_(),goog.userAgent.compare = function (e, t) {
                return goog.string.compareVersions(e, t)
            },goog.userAgent.isVersionOrHigherCache_ = {},goog.userAgent.isVersionOrHigher = function (e) {
                return goog.userAgent.ASSUME_ANY_VERSION || goog.userAgent.isVersionOrHigherCache_[e] || (goog.userAgent.isVersionOrHigherCache_[e] = 0 <= goog.string.compareVersions(goog.userAgent.VERSION, e))
            },goog.userAgent.isVersion = goog.userAgent.isVersionOrHigher,goog.userAgent.isDocumentModeOrHigher = function (e) {
                return Number(goog.userAgent.DOCUMENT_MODE) >= e
            },goog.userAgent.isDocumentMode = goog.userAgent.isDocumentModeOrHigher,goog.userAgent.DOCUMENT_MODE = (Bza = goog.global.document, Cza = goog.userAgent.getDocumentMode_(), Bza && goog.userAgent.IE ? Cza || ("CSS1Compat" == Bza.compatMode ? parseInt(goog.userAgent.VERSION, 10) : 5) : void 0),goog.userAgent.product = {},goog.userAgent.product.ASSUME_FIREFOX = !1,goog.userAgent.product.ASSUME_IPHONE = !1,goog.userAgent.product.ASSUME_IPAD = !1,goog.userAgent.product.ASSUME_ANDROID = !1,goog.userAgent.product.ASSUME_CHROME = !1,goog.userAgent.product.ASSUME_SAFARI = !1,goog.userAgent.product.PRODUCT_KNOWN_ = goog.userAgent.ASSUME_IE || goog.userAgent.ASSUME_EDGE || goog.userAgent.ASSUME_OPERA || goog.userAgent.product.ASSUME_FIREFOX || goog.userAgent.product.ASSUME_IPHONE || goog.userAgent.product.ASSUME_IPAD || goog.userAgent.product.ASSUME_ANDROID || goog.userAgent.product.ASSUME_CHROME || goog.userAgent.product.ASSUME_SAFARI,goog.userAgent.product.OPERA = goog.userAgent.OPERA,goog.userAgent.product.IE = goog.userAgent.IE,goog.userAgent.product.EDGE = goog.userAgent.EDGE,goog.userAgent.product.FIREFOX = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_FIREFOX : goog.labs.userAgent.browser.isFirefox(),goog.userAgent.product.isIphoneOrIpod_ = function () {
                return goog.labs.userAgent.platform.isIphone() || goog.labs.userAgent.platform.isIpod()
            },goog.userAgent.product.IPHONE = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPHONE : goog.userAgent.product.isIphoneOrIpod_(),goog.userAgent.product.IPAD = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_IPAD : goog.labs.userAgent.platform.isIpad(),goog.userAgent.product.ANDROID = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_ANDROID : goog.labs.userAgent.browser.isAndroidBrowser(),goog.userAgent.product.CHROME = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_CHROME : goog.labs.userAgent.browser.isChrome(),goog.userAgent.product.isSafariDesktop_ = function () {
                return goog.labs.userAgent.browser.isSafari() && !goog.labs.userAgent.platform.isIos()
            },goog.userAgent.product.SAFARI = goog.userAgent.product.PRODUCT_KNOWN_ ? goog.userAgent.product.ASSUME_SAFARI : goog.userAgent.product.isSafariDesktop_(),goog.crypt.base64 = {},goog.crypt.base64.byteToCharMap_ = null,goog.crypt.base64.charToByteMap_ = null,goog.crypt.base64.byteToCharMapWebSafe_ = null,goog.crypt.base64.ENCODED_VALS_BASE = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",goog.crypt.base64.ENCODED_VALS = goog.crypt.base64.ENCODED_VALS_BASE + "+/=",goog.crypt.base64.ENCODED_VALS_WEBSAFE = goog.crypt.base64.ENCODED_VALS_BASE + "-_.",goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ = goog.userAgent.GECKO || goog.userAgent.WEBKIT && !goog.userAgent.product.SAFARI || goog.userAgent.OPERA,goog.crypt.base64.HAS_NATIVE_ENCODE_ = goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ || "function" == typeof goog.global.btoa,goog.crypt.base64.HAS_NATIVE_DECODE_ = goog.crypt.base64.ASSUME_NATIVE_SUPPORT_ || !goog.userAgent.product.SAFARI && !goog.userAgent.IE && "function" == typeof goog.global.atob,goog.crypt.base64.encodeByteArray = function (e, t) {
                goog.asserts.assert(goog.isArrayLike(e), "encodeByteArray takes an array as a parameter"), goog.crypt.base64.init_();
                for (var r = t ? goog.crypt.base64.byteToCharMapWebSafe_ : goog.crypt.base64.byteToCharMap_, o = [], i = 0; i < e.length; i += 3) {
                    var s = e[i], a = i + 1 < e.length, n = a ? e[i + 1] : 0, p = i + 2 < e.length, g = s >> 2,
                        u = (s = (3 & s) << 4 | n >> 4, n = (15 & n) << 2 | (u = p ? e[i + 2] : 0) >> 6, 63 & u);
                    p || (u = 64, a || (n = 64)), o.push(r[g], r[s], r[n], r[u])
                }
                return o.join("")
            },goog.crypt.base64.encodeString = function (e, t) {
                return goog.crypt.base64.HAS_NATIVE_ENCODE_ && !t ? goog.global.btoa(e) : goog.crypt.base64.encodeByteArray(goog.crypt.stringToByteArray(e), t)
            },goog.crypt.base64.decodeString = function (e, t) {
                if (goog.crypt.base64.HAS_NATIVE_DECODE_ && !t) return goog.global.atob(e);
                var r = "";
                return goog.crypt.base64.decodeStringInternal_(e, function (e) {
                    r += String.fromCharCode(e)
                }), r
            },goog.crypt.base64.decodeStringToByteArray = function (e, t) {
                var r = [];
                return goog.crypt.base64.decodeStringInternal_(e, function (e) {
                    r.push(e)
                }), r
            },goog.crypt.base64.decodeStringToUint8Array = function (e) {
                goog.asserts.assert(!goog.userAgent.IE || goog.userAgent.isVersionOrHigher("10"), "Browser does not support typed arrays");
                var t = new Uint8Array(Math.ceil(3 * e.length / 4)), r = 0;
                return goog.crypt.base64.decodeStringInternal_(e, function (e) {
                    t[r++] = e
                }), t.subarray(0, r)
            },goog.crypt.base64.decodeStringInternal_ = function (o, e) {
                function t(e) {
                    for (; i < o.length;) {
                        var t = o.charAt(i++), r = goog.crypt.base64.charToByteMap_[t];
                        if (null != r) return r;
                        if (!goog.string.isEmptyOrWhitespace(t)) throw Error("Unknown base64 encoding at char: " + t)
                    }
                    return e
                }

                goog.crypt.base64.init_();
                for (var i = 0; ;) {
                    var r = t(-1), s = t(0), a = t(64), n = t(64);
                    if (64 === n && -1 === r) break;
                    e(r << 2 | s >> 4), 64 != a && (e(s << 4 & 240 | a >> 2), 64 != n && e(a << 6 & 192 | n))
                }
            },goog.crypt.base64.init_ = function () {
                if (!goog.crypt.base64.byteToCharMap_) {
                    goog.crypt.base64.byteToCharMap_ = {}, goog.crypt.base64.charToByteMap_ = {}, goog.crypt.base64.byteToCharMapWebSafe_ = {};
                    for (var e = 0; e < goog.crypt.base64.ENCODED_VALS.length; e++) goog.crypt.base64.byteToCharMap_[e] = goog.crypt.base64.ENCODED_VALS.charAt(e), goog.crypt.base64.charToByteMap_[goog.crypt.base64.byteToCharMap_[e]] = e, goog.crypt.base64.byteToCharMapWebSafe_[e] = goog.crypt.base64.ENCODED_VALS_WEBSAFE.charAt(e), e >= goog.crypt.base64.ENCODED_VALS_BASE.length && (goog.crypt.base64.charToByteMap_[goog.crypt.base64.ENCODED_VALS_WEBSAFE.charAt(e)] = e)
                }
            },jspb.ExtensionFieldInfo = function (e, t, r, o, i) {
                this.fieldIndex = e, this.fieldName = t, this.ctor = r, this.toObjectFn = o, this.isRepeated = i
            },jspb.ExtensionFieldBinaryInfo = function (e, t, r, o, i, s) {
                this.fieldInfo = e, this.binaryReaderFn = t, this.binaryWriterFn = r, this.binaryMessageSerializeFn = o, this.binaryMessageDeserializeFn = i, this.isPacked = s
            },jspb.ExtensionFieldInfo.prototype.isMessageType = function () {
                return !!this.ctor
            },jspb.Message = function () {
            },jspb.Message.GENERATE_TO_OBJECT = !0,jspb.Message.GENERATE_FROM_OBJECT = !goog.DISALLOW_TEST_ONLY_CODE,jspb.Message.GENERATE_TO_STRING = !0,jspb.Message.ASSUME_LOCAL_ARRAYS = !1,jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS = !0,jspb.Message.SUPPORTS_UINT8ARRAY_ = "function" == typeof Uint8Array,jspb.Message.prototype.getJsPbMessageId = function () {
                return this.messageId_
            },jspb.Message.getIndex_ = function (e, t) {
                return t + e.arrayIndexOffset_
            },jspb.Message.getFieldNumber_ = function (e, t) {
                return t - e.arrayIndexOffset_
            },jspb.Message.initialize = function (e, t, r, o, i, s) {
                if (e.wrappers_ = null, t || (t = r ? [r] : []), e.messageId_ = r ? String(r) : void 0, e.arrayIndexOffset_ = 0 === r ? -1 : 0, e.array = t, jspb.Message.initPivotAndExtensionObject_(e, o), e.convertedFloatingPointFields_ = {}, jspb.Message.SERIALIZE_EMPTY_TRAILING_FIELDS || (e.repeatedFields = i), i) for (t = 0; t < i.length; t++) (r = i[t]) < e.pivot_ ? (r = jspb.Message.getIndex_(e, r), e.array[r] = e.array[r] || jspb.Message.EMPTY_LIST_SENTINEL_) : (jspb.Message.maybeInitEmptyExtensionObject_(e), e.extensionObject_[r] = e.extensionObject_[r] || jspb.Message.EMPTY_LIST_SENTINEL_);
                if (s && s.length) for (t = 0; t < s.length; t++) jspb.Message.computeOneofCase(e, s[t])
            },jspb.Message.EMPTY_LIST_SENTINEL_ = goog.DEBUG && Object.freeze ? Object.freeze([]) : [],jspb.Message.isArray_ = function (e) {
                return jspb.Message.ASSUME_LOCAL_ARRAYS ? e instanceof Array : goog.isArray(e)
            },jspb.Message.initPivotAndExtensionObject_ = function (e, t) {
                if (e.array.length) {
                    var r = e.array.length - 1, o = e.array[r];
                    if (o && "object" == typeof o && !jspb.Message.isArray_(o) && !(jspb.Message.SUPPORTS_UINT8ARRAY_ && o instanceof Uint8Array)) return e.pivot_ = jspb.Message.getFieldNumber_(e, r), void (e.extensionObject_ = o)
                }
                -1 < t ? (e.pivot_ = t, e.extensionObject_ = null) : e.pivot_ = Number.MAX_VALUE
            },jspb.Message.maybeInitEmptyExtensionObject_ = function (e) {
                var t = jspb.Message.getIndex_(e, e.pivot_);
                e.array[t] || (e.extensionObject_ = e.array[t] = {})
            },jspb.Message.toObjectList = function (e, t, r) {
                for (var o = [], i = 0; i < e.length; i++) o[i] = t.call(e[i], r, e[i]);
                return o
            },jspb.Message.toObjectExtension = function (e, t, r, o, i) {
                for (var s in r) {
                    var a = r[s], n = o.call(e, a);
                    if (null != n) {
                        for (var p in a.fieldName) if (a.fieldName.hasOwnProperty(p)) break;
                        t[p] = a.toObjectFn ? a.isRepeated ? jspb.Message.toObjectList(n, a.toObjectFn, i) : a.toObjectFn(i, n) : n
                    }
                }
            },jspb.Message.serializeBinaryExtensions = function (e, t, r, o) {
                for (var i in r) {
                    var s = r[i], a = s.fieldInfo;
                    if (!s.binaryWriterFn) throw Error("Message extension present that was generated without binary serialization support");
                    var n = o.call(e, a);
                    if (null != n) if (a.isMessageType()) {
                        if (!s.binaryMessageSerializeFn) throw Error("Message extension present holding submessage without binary support enabled, and message is being serialized to binary format");
                        s.binaryWriterFn.call(t, a.fieldIndex, n, s.binaryMessageSerializeFn)
                    } else s.binaryWriterFn.call(t, a.fieldIndex, n)
                }
            },jspb.Message.readBinaryExtension = function (e, t, r, o, i) {
                var s = r[t.getFieldNumber()];
                if (s) {
                    if (r = s.fieldInfo, !s.binaryReaderFn) throw Error("Deserializing extension whose generated code does not support binary format");
                    var a;
                    r.isMessageType() ? (a = new r.ctor, s.binaryReaderFn.call(t, a, s.binaryMessageDeserializeFn)) : a = s.binaryReaderFn.call(t), r.isRepeated && !s.isPacked ? (t = o.call(e, r)) ? t.push(a) : i.call(e, r, [a]) : i.call(e, r, a)
                } else t.skipField()
            },jspb.Message.getField = function (e, t) {
                if (t < e.pivot_) {
                    var r = jspb.Message.getIndex_(e, t), o = e.array[r];
                    return o === jspb.Message.EMPTY_LIST_SENTINEL_ ? e.array[r] = [] : o
                }
                if (e.extensionObject_) return (o = e.extensionObject_[t]) === jspb.Message.EMPTY_LIST_SENTINEL_ ? e.extensionObject_[t] = [] : o
            },jspb.Message.getRepeatedField = function (e, t) {
                if (t < e.pivot_) {
                    var r = jspb.Message.getIndex_(e, t), o = e.array[r];
                    return o === jspb.Message.EMPTY_LIST_SENTINEL_ ? e.array[r] = [] : o
                }
                return (o = e.extensionObject_[t]) === jspb.Message.EMPTY_LIST_SENTINEL_ ? e.extensionObject_[t] = [] : o
            },jspb.Message.getOptionalFloatingPointField = function (e, t) {
                var r = jspb.Message.getField(e, t);
                return null == r ? r : +r
            },jspb.Message.getRepeatedFloatingPointField = function (e, t) {
                var r = jspb.Message.getRepeatedField(e, t);
                if (e.convertedFloatingPointFields_ || (e.convertedFloatingPointFields_ = {}), !e.convertedFloatingPointFields_[t]) {
                    for (var o = 0; o < r.length; o++) r[o] = +r[o];
                    e.convertedFloatingPointFields_[t] = !0
                }
                return r
            },jspb.Message.bytesAsB64 = function (e) {
                return null == e || goog.isString(e) ? e : jspb.Message.SUPPORTS_UINT8ARRAY_ && e instanceof Uint8Array ? goog.crypt.base64.encodeByteArray(e) : (goog.asserts.fail("Cannot coerce to b64 string: " + goog.typeOf(e)), null)
            },jspb.Message.bytesAsU8 = function (e) {
                return null == e || e instanceof Uint8Array ? e : goog.isString(e) ? goog.crypt.base64.decodeStringToUint8Array(e) : (goog.asserts.fail("Cannot coerce to Uint8Array: " + goog.typeOf(e)), null)
            },jspb.Message.bytesListAsB64 = function (e) {
                return jspb.Message.assertConsistentTypes_(e), !e.length || goog.isString(e[0]) ? e : goog.array.map(e, jspb.Message.bytesAsB64)
            },jspb.Message.bytesListAsU8 = function (e) {
                return jspb.Message.assertConsistentTypes_(e), !e.length || e[0] instanceof Uint8Array ? e : goog.array.map(e, jspb.Message.bytesAsU8)
            },jspb.Message.assertConsistentTypes_ = function (e) {
                if (goog.DEBUG && e && 1 < e.length) {
                    var t = goog.typeOf(e[0]);
                    goog.array.forEach(e, function (e) {
                        goog.typeOf(e) != t && goog.asserts.fail("Inconsistent type in JSPB repeated field array. Got " + goog.typeOf(e) + " expected " + t)
                    })
                }
            },jspb.Message.getFieldWithDefault = function (e, t, r) {
                return null == (e = jspb.Message.getField(e, t)) ? r : e
            },jspb.Message.getFieldProto3 = jspb.Message.getFieldWithDefault,jspb.Message.getMapField = function (e, t, r, o) {
                return e.wrappers_ || (e.wrappers_ = {}), t in e.wrappers_ ? e.wrappers_[t] : r ? void 0 : ((r = jspb.Message.getField(e, t)) || (r = [], jspb.Message.setField(e, t, r)), e.wrappers_[t] = new jspb.Map(r, o))
            },jspb.Message.setField = function (e, t, r) {
                t < e.pivot_ ? e.array[jspb.Message.getIndex_(e, t)] = r : (jspb.Message.maybeInitEmptyExtensionObject_(e), e.extensionObject_[t] = r)
            },jspb.Message.setProto3IntField = function (e, t, r) {
                jspb.Message.setFieldIgnoringDefault_(e, t, r, 0)
            },jspb.Message.setProto3StringIntField = function (e, t, r) {
                jspb.Message.setFieldIgnoringDefault_(e, t, r, "0")
            },jspb.Message.setProto3FloatField = function (e, t, r) {
                jspb.Message.setFieldIgnoringDefault_(e, t, r, 0)
            },jspb.Message.setProto3BooleanField = function (e, t, r) {
                jspb.Message.setFieldIgnoringDefault_(e, t, r, !1)
            },jspb.Message.setProto3StringField = function (e, t, r) {
                jspb.Message.setFieldIgnoringDefault_(e, t, r, "")
            },jspb.Message.setProto3BytesField = function (e, t, r) {
                jspb.Message.setFieldIgnoringDefault_(e, t, r, "")
            },jspb.Message.setProto3EnumField = function (e, t, r) {
                jspb.Message.setFieldIgnoringDefault_(e, t, r, 0)
            },jspb.Message.setFieldIgnoringDefault_ = function (e, t, r, o) {
                r != o ? jspb.Message.setField(e, t, r) : e.array[jspb.Message.getIndex_(e, t)] = null
            },jspb.Message.addToRepeatedField = function (e, t, r, o) {
                e = jspb.Message.getRepeatedField(e, t), null != o ? e.splice(o, 0, r) : e.push(r)
            },jspb.Message.setOneofField = function (e, t, r, o) {
                (r = jspb.Message.computeOneofCase(e, r)) && r !== t && void 0 !== o && (e.wrappers_ && r in e.wrappers_ && (e.wrappers_[r] = void 0), jspb.Message.setField(e, r, void 0)), jspb.Message.setField(e, t, o)
            },jspb.Message.computeOneofCase = function (e, t) {
                for (var r, o, i = 0; i < t.length; i++) {
                    var s = t[i], a = jspb.Message.getField(e, s);
                    null != a && (r = s, o = a, jspb.Message.setField(e, s, void 0))
                }
                return r ? (jspb.Message.setField(e, r, o), r) : 0
            },jspb.Message.getWrapperField = function (e, t, r, o) {
                if (e.wrappers_ || (e.wrappers_ = {}), !e.wrappers_[r]) {
                    var i = jspb.Message.getField(e, r);
                    (o || i) && (e.wrappers_[r] = new t(i))
                }
                return e.wrappers_[r]
            },jspb.Message.getRepeatedWrapperField = function (e, t, r) {
                return jspb.Message.wrapRepeatedField_(e, t, r), (t = e.wrappers_[r]) == jspb.Message.EMPTY_LIST_SENTINEL_ && (t = e.wrappers_[r] = []), t
            },jspb.Message.wrapRepeatedField_ = function (e, t, r) {
                if (e.wrappers_ || (e.wrappers_ = {}), !e.wrappers_[r]) {
                    for (var o = jspb.Message.getRepeatedField(e, r), i = [], s = 0; s < o.length; s++) i[s] = new t(o[s]);
                    e.wrappers_[r] = i
                }
            },jspb.Message.setWrapperField = function (e, t, r) {
                e.wrappers_ || (e.wrappers_ = {});
                var o = r ? r.toArray() : r;
                e.wrappers_[t] = r, jspb.Message.setField(e, t, o)
            },jspb.Message.setOneofWrapperField = function (e, t, r, o) {
                e.wrappers_ || (e.wrappers_ = {});
                var i = o ? o.toArray() : o;
                e.wrappers_[t] = o, jspb.Message.setOneofField(e, t, r, i)
            },jspb.Message.setRepeatedWrapperField = function (e, t, r) {
                e.wrappers_ || (e.wrappers_ = {}), r = r || [];
                for (var o = [], i = 0; i < r.length; i++) o[i] = r[i].toArray();
                e.wrappers_[t] = r, jspb.Message.setField(e, t, o)
            },jspb.Message.addToRepeatedWrapperField = function (e, t, r, o, i) {
                jspb.Message.wrapRepeatedField_(e, o, t);
                var s = e.wrappers_[t];
                return s || (s = e.wrappers_[t] = []), r = r || new o, e = jspb.Message.getRepeatedField(e, t), null != i ? (s.splice(i, 0, r), e.splice(i, 0, r.toArray())) : (s.push(r), e.push(r.toArray())), r
            },jspb.Message.toMap = function (e, t, r, o) {
                for (var i = {}, s = 0; s < e.length; s++) i[t.call(e[s])] = r ? r.call(e[s], o, e[s]) : e[s];
                return i
            },jspb.Message.prototype.syncMapFields_ = function () {
                if (this.wrappers_) for (var e in this.wrappers_) {
                    var t = this.wrappers_[e];
                    if (goog.isArray(t)) for (var r = 0; r < t.length; r++) t[r] && t[r].toArray(); else t && t.toArray()
                }
            },jspb.Message.prototype.toArray = function () {
                return this.syncMapFields_(), this.array
            },jspb.Message.GENERATE_TO_STRING && (jspb.Message.prototype.toString = function () {
                return this.syncMapFields_(), this.array.toString()
            }),jspb.Message.prototype.getExtension = function (t) {
                if (this.extensionObject_) {
                    this.wrappers_ || (this.wrappers_ = {});
                    var e = t.fieldIndex;
                    if (t.isRepeated) {
                        if (t.isMessageType()) return this.wrappers_[e] || (this.wrappers_[e] = goog.array.map(this.extensionObject_[e] || [], function (e) {
                            return new t.ctor(e)
                        })), this.wrappers_[e]
                    } else if (t.isMessageType()) return !this.wrappers_[e] && this.extensionObject_[e] && (this.wrappers_[e] = new t.ctor(this.extensionObject_[e])), this.wrappers_[e];
                    return this.extensionObject_[e]
                }
            },jspb.Message.prototype.setExtension = function (e, t) {
                this.wrappers_ || (this.wrappers_ = {}), jspb.Message.maybeInitEmptyExtensionObject_(this);
                var r = e.fieldIndex;
                return e.isRepeated ? (t = t || [], e.isMessageType() ? (this.wrappers_[r] = t, this.extensionObject_[r] = goog.array.map(t, function (e) {
                    return e.toArray()
                })) : this.extensionObject_[r] = t) : e.isMessageType() ? (this.wrappers_[r] = t, this.extensionObject_[r] = t ? t.toArray() : t) : this.extensionObject_[r] = t, this
            },jspb.Message.difference = function (e, t) {
                if (!(e instanceof t.constructor)) throw Error("Messages have different types.");
                var r = e.toArray(), o = t.toArray(), i = [], s = 0, a = r.length > o.length ? r.length : o.length;
                for (e.getJsPbMessageId() && (i[0] = e.getJsPbMessageId(), s = 1); s < a; s++) jspb.Message.compareFields(r[s], o[s]) || (i[s] = o[s]);
                return new e.constructor(i)
            },jspb.Message.equals = function (e, t) {
                return e == t || !(!e || !t) && e instanceof t.constructor && jspb.Message.compareFields(e.toArray(), t.toArray())
            },jspb.Message.compareExtensions = function (e, t) {
                e = e || {}, t = t || {};
                var r, o = {};
                for (r in e) o[r] = 0;
                for (r in t) o[r] = 0;
                for (r in o) if (!jspb.Message.compareFields(e[r], t[r])) return !1;
                return !0
            },jspb.Message.compareFields = function (e, t) {
                if (e == t) return !0;
                if (!goog.isObject(e) || !goog.isObject(t)) return !!(goog.isNumber(e) && isNaN(e) || goog.isNumber(t) && isNaN(t)) && String(e) == String(t);
                if (e.constructor != t.constructor) return !1;
                if (jspb.Message.SUPPORTS_UINT8ARRAY_ && e.constructor === Uint8Array) {
                    if (e.length != t.length) return !1;
                    for (var r = 0; r < e.length; r++) if (e[r] != t[r]) return !1;
                    return !0
                }
                if (e.constructor === Array) {
                    var o = void 0, i = void 0, s = Math.max(e.length, t.length);
                    for (r = 0; r < s; r++) {
                        var a = e[r], n = t[r];
                        if (a && a.constructor == Object && (goog.asserts.assert(void 0 === o), goog.asserts.assert(r === e.length - 1), o = a, a = void 0), n && n.constructor == Object && (goog.asserts.assert(void 0 === i), goog.asserts.assert(r === t.length - 1), i = n, n = void 0), !jspb.Message.compareFields(a, n)) return !1
                    }
                    return !o && !i || (o = o || {}, i = i || {}, jspb.Message.compareExtensions(o, i))
                }
                if (e.constructor === Object) return jspb.Message.compareExtensions(e, t);
                throw Error("Invalid type in JSPB array")
            },jspb.Message.prototype.cloneMessage = function () {
                return jspb.Message.cloneMessage(this)
            },jspb.Message.prototype.clone = function () {
                return jspb.Message.cloneMessage(this)
            },jspb.Message.clone = function (e) {
                return jspb.Message.cloneMessage(e)
            },jspb.Message.cloneMessage = function (e) {
                return new e.constructor(jspb.Message.clone_(e.toArray()))
            },jspb.Message.copyInto = function (e, t) {
                goog.asserts.assertInstanceof(e, jspb.Message), goog.asserts.assertInstanceof(t, jspb.Message), goog.asserts.assert(e.constructor == t.constructor, "Copy source and target message should have the same type.");
                for (var r = jspb.Message.clone(e), o = t.toArray(), i = r.toArray(), s = o.length = 0; s < i.length; s++) o[s] = i[s];
                t.wrappers_ = r.wrappers_, t.extensionObject_ = r.extensionObject_
            },jspb.Message.clone_ = function (e) {
                var t;
                if (goog.isArray(e)) {
                    for (var r = Array(e.length), o = 0; o < e.length; o++) null != (t = e[o]) && (r[o] = "object" == typeof t ? jspb.Message.clone_(goog.asserts.assert(t)) : t);
                    return r
                }
                if (jspb.Message.SUPPORTS_UINT8ARRAY_ && e instanceof Uint8Array) return new Uint8Array(e);
                for (o in r = {}, e) null != (t = e[o]) && (r[o] = "object" == typeof t ? jspb.Message.clone_(goog.asserts.assert(t)) : t);
                return r
            },jspb.Message.registerMessageType = function (e, t) {
                (jspb.Message.registry_[e] = t).messageId = e
            },jspb.Message.registry_ = {},jspb.Message.messageSetExtensions = {},jspb.Message.messageSetExtensionsBinary = {},jspb.arith = {},jspb.arith.UInt64 = function (e, t) {
                this.lo = e, this.hi = t
            },jspb.arith.UInt64.prototype.cmp = function (e) {
                return this.hi < e.hi || this.hi == e.hi && this.lo < e.lo ? -1 : this.hi == e.hi && this.lo == e.lo ? 0 : 1
            },jspb.arith.UInt64.prototype.rightShift = function () {
                return new jspb.arith.UInt64((this.lo >>> 1 | (1 & this.hi) << 31) >>> 0, this.hi >>> 1 >>> 0)
            },jspb.arith.UInt64.prototype.leftShift = function () {
                return new jspb.arith.UInt64(this.lo << 1 >>> 0, (this.hi << 1 | this.lo >>> 31) >>> 0)
            },jspb.arith.UInt64.prototype.msb = function () {
                return !!(2147483648 & this.hi)
            },jspb.arith.UInt64.prototype.lsb = function () {
                return !!(1 & this.lo)
            },jspb.arith.UInt64.prototype.zero = function () {
                return 0 == this.lo && 0 == this.hi
            },jspb.arith.UInt64.prototype.add = function (e) {
                return new jspb.arith.UInt64((this.lo + e.lo & 4294967295) >>> 0 >>> 0, ((this.hi + e.hi & 4294967295) >>> 0) + (4294967296 <= this.lo + e.lo ? 1 : 0) >>> 0)
            },jspb.arith.UInt64.prototype.sub = function (e) {
                return new jspb.arith.UInt64((this.lo - e.lo & 4294967295) >>> 0 >>> 0, ((this.hi - e.hi & 4294967295) >>> 0) - (this.lo - e.lo < 0 ? 1 : 0) >>> 0)
            },jspb.arith.UInt64.mul32x32 = function (e, t) {
                for (var r = e >>> 16, o = 65535 & t, i = t >>> 16, s = (a = 65535 & e) * o + 65536 * (a * i & 65535) + 65536 * (r * o & 65535), a = r * i + (a * i >>> 16) + (r * o >>> 16); 4294967296 <= s;) s -= 4294967296, a += 1;
                return new jspb.arith.UInt64(s >>> 0, a >>> 0)
            },jspb.arith.UInt64.prototype.mul = function (e) {
                var t = jspb.arith.UInt64.mul32x32(this.lo, e);
                return (e = jspb.arith.UInt64.mul32x32(this.hi, e)).hi = e.lo, e.lo = 0, t.add(e)
            },jspb.arith.UInt64.prototype.div = function (e) {
                if (0 == e) return [];
                var t = new jspb.arith.UInt64(0, 0), r = new jspb.arith.UInt64(this.lo, this.hi);
                e = new jspb.arith.UInt64(e, 0);
                for (var o = new jspb.arith.UInt64(1, 0); !e.msb();) e = e.leftShift(), o = o.leftShift();
                for (; !o.zero();) e.cmp(r) <= 0 && (t = t.add(o), r = r.sub(e)), e = e.rightShift(), o = o.rightShift();
                return [t, r]
            },jspb.arith.UInt64.prototype.toString = function () {
                for (var e = "", t = this; !t.zero();) {
                    var r = (t = t.div(10))[0];
                    e = t[1].lo + e, t = r
                }
                return "" == e && (e = "0"), e
            },jspb.arith.UInt64.fromString = function (e) {
                for (var t = new jspb.arith.UInt64(0, 0), r = new jspb.arith.UInt64(0, 0), o = 0; o < e.length; o++) {
                    if (e[o] < "0" || "9" < e[o]) return null;
                    var i = parseInt(e[o], 10);
                    r.lo = i, t = t.mul(10).add(r)
                }
                return t
            },jspb.arith.UInt64.prototype.clone = function () {
                return new jspb.arith.UInt64(this.lo, this.hi)
            },jspb.arith.Int64 = function (e, t) {
                this.lo = e, this.hi = t
            },jspb.arith.Int64.prototype.add = function (e) {
                return new jspb.arith.Int64((this.lo + e.lo & 4294967295) >>> 0 >>> 0, ((this.hi + e.hi & 4294967295) >>> 0) + (4294967296 <= this.lo + e.lo ? 1 : 0) >>> 0)
            },jspb.arith.Int64.prototype.sub = function (e) {
                return new jspb.arith.Int64((this.lo - e.lo & 4294967295) >>> 0 >>> 0, ((this.hi - e.hi & 4294967295) >>> 0) - (this.lo - e.lo < 0 ? 1 : 0) >>> 0)
            },jspb.arith.Int64.prototype.clone = function () {
                return new jspb.arith.Int64(this.lo, this.hi)
            },jspb.arith.Int64.prototype.toString = function () {
                var e = 0 != (2147483648 & this.hi), t = new jspb.arith.UInt64(this.lo, this.hi);
                return e && (t = new jspb.arith.UInt64(0, 0).sub(t)), (e ? "-" : "") + t.toString()
            },jspb.arith.Int64.fromString = function (e) {
                var t = 0 < e.length && "-" == e[0];
                return t && (e = e.substring(1)), null === (e = jspb.arith.UInt64.fromString(e)) ? null : (t && (e = new jspb.arith.UInt64(0, 0).sub(e)), new jspb.arith.Int64(e.lo, e.hi))
            },jspb.BinaryConstants = {},jspb.ConstBinaryMessage = function () {
            },jspb.BinaryMessage = function () {
            },jspb.BinaryConstants.FieldType = {
                INVALID: -1,
                DOUBLE: 1,
                FLOAT: 2,
                INT64: 3,
                UINT64: 4,
                INT32: 5,
                FIXED64: 6,
                FIXED32: 7,
                BOOL: 8,
                STRING: 9,
                GROUP: 10,
                MESSAGE: 11,
                BYTES: 12,
                UINT32: 13,
                ENUM: 14,
                SFIXED32: 15,
                SFIXED64: 16,
                SINT32: 17,
                SINT64: 18,
                FHASH64: 30,
                VHASH64: 31
            },jspb.BinaryConstants.WireType = {
                INVALID: -1,
                VARINT: 0,
                FIXED64: 1,
                DELIMITED: 2,
                START_GROUP: 3,
                END_GROUP: 4,
                FIXED32: 5
            },jspb.BinaryConstants.FieldTypeToWireType = function (e) {
                var t = jspb.BinaryConstants.FieldType, r = jspb.BinaryConstants.WireType;
                switch (e) {
                    case t.INT32:
                    case t.INT64:
                    case t.UINT32:
                    case t.UINT64:
                    case t.SINT32:
                    case t.SINT64:
                    case t.BOOL:
                    case t.ENUM:
                    case t.VHASH64:
                        return r.VARINT;
                    case t.DOUBLE:
                    case t.FIXED64:
                    case t.SFIXED64:
                    case t.FHASH64:
                        return r.FIXED64;
                    case t.STRING:
                    case t.MESSAGE:
                    case t.BYTES:
                        return r.DELIMITED;
                    case t.FLOAT:
                    case t.FIXED32:
                    case t.SFIXED32:
                        return r.FIXED32;
                    default:
                        return r.INVALID
                }
            },jspb.BinaryConstants.INVALID_FIELD_NUMBER = -1,jspb.BinaryConstants.FLOAT32_EPS = 1401298464324817e-60,jspb.BinaryConstants.FLOAT32_MIN = 11754943508222875e-54,jspb.BinaryConstants.FLOAT32_MAX = 34028234663852886e22,jspb.BinaryConstants.FLOAT64_EPS = 5e-324,jspb.BinaryConstants.FLOAT64_MIN = 22250738585072014e-324,jspb.BinaryConstants.FLOAT64_MAX = 17976931348623157e292,jspb.BinaryConstants.TWO_TO_20 = 1048576,jspb.BinaryConstants.TWO_TO_23 = 8388608,jspb.BinaryConstants.TWO_TO_31 = 2147483648,jspb.BinaryConstants.TWO_TO_32 = 4294967296,jspb.BinaryConstants.TWO_TO_52 = 4503599627370496,jspb.BinaryConstants.TWO_TO_63 = 0x8000000000000000,jspb.BinaryConstants.TWO_TO_64 = 0x10000000000000000,jspb.BinaryConstants.ZERO_HASH = "\0\0\0\0\0\0\0\0",jspb.utils = {},jspb.utils.split64Low = 0,jspb.utils.split64High = 0,jspb.utils.splitUint64 = function (e) {
                var t = e >>> 0;
                e = Math.floor((e - t) / jspb.BinaryConstants.TWO_TO_32) >>> 0, jspb.utils.split64Low = t, jspb.utils.split64High = e
            },jspb.utils.splitInt64 = function (e) {
                var t = e < 0, r = (e = Math.abs(e)) >>> 0;
                e = Math.floor((e - r) / jspb.BinaryConstants.TWO_TO_32), e >>>= 0, t && (e = ~e >>> 0, 4294967295 < (r = 1 + (~r >>> 0)) && (r = 0, 4294967295 < ++e && (e = 0))), jspb.utils.split64Low = r, jspb.utils.split64High = e
            },jspb.utils.splitZigzag64 = function (e) {
                var t = e < 0;
                e = 2 * Math.abs(e), jspb.utils.splitUint64(e), e = jspb.utils.split64Low;
                var r = jspb.utils.split64High;
                t && (0 == e ? 0 == r ? r = e = 4294967295 : (r--, e = 4294967295) : e--), jspb.utils.split64Low = e, jspb.utils.split64High = r
            },jspb.utils.splitFloat32 = function (e) {
                var t, r = e < 0 ? 1 : 0;
                0 === (e = r ? -e : e) ? 0 < 1 / e ? (jspb.utils.split64High = 0, jspb.utils.split64Low = 0) : (jspb.utils.split64High = 0, jspb.utils.split64Low = 2147483648) : isNaN(e) ? (jspb.utils.split64High = 0, jspb.utils.split64Low = 2147483647) : e > jspb.BinaryConstants.FLOAT32_MAX ? (jspb.utils.split64High = 0, jspb.utils.split64Low = (r << 31 | 2139095040) >>> 0) : e < jspb.BinaryConstants.FLOAT32_MIN ? (e = Math.round(e / Math.pow(2, -149)), jspb.utils.split64High = 0, jspb.utils.split64Low = (r << 31 | e) >>> 0) : (t = Math.floor(Math.log(e) / Math.LN2), e *= Math.pow(2, -t), e = 8388607 & Math.round(e * jspb.BinaryConstants.TWO_TO_23), jspb.utils.split64High = 0, jspb.utils.split64Low = (r << 31 | t + 127 << 23 | e) >>> 0)
            },jspb.utils.splitFloat64 = function (e) {
                var t = e < 0 ? 1 : 0;
                if (0 === (e = t ? -e : e)) jspb.utils.split64High = 0 < 1 / e ? 0 : 2147483648, jspb.utils.split64Low = 0; else if (isNaN(e)) jspb.utils.split64High = 2147483647, jspb.utils.split64Low = 4294967295; else if (e > jspb.BinaryConstants.FLOAT64_MAX) jspb.utils.split64High = (t << 31 | 2146435072) >>> 0, jspb.utils.split64Low = 0; else if (e < jspb.BinaryConstants.FLOAT64_MIN) {
                    var r = e / Math.pow(2, -1074);
                    e = r / jspb.BinaryConstants.TWO_TO_32, jspb.utils.split64High = (t << 31 | e) >>> 0, jspb.utils.split64Low = r >>> 0
                } else {
                    var o = Math.floor(Math.log(e) / Math.LN2);
                    1024 == o && (o = 1023), e = (r = e * Math.pow(2, -o)) * jspb.BinaryConstants.TWO_TO_20 & 1048575, r = r * jspb.BinaryConstants.TWO_TO_52 >>> 0, jspb.utils.split64High = (t << 31 | o + 1023 << 20 | e) >>> 0, jspb.utils.split64Low = r
                }
            },jspb.utils.splitHash64 = function (e) {
                var t = e.charCodeAt(0), r = e.charCodeAt(1), o = e.charCodeAt(2), i = e.charCodeAt(3),
                    s = e.charCodeAt(4), a = e.charCodeAt(5), n = e.charCodeAt(6);
                e = e.charCodeAt(7), jspb.utils.split64Low = t + (r << 8) + (o << 16) + (i << 24) >>> 0, jspb.utils.split64High = s + (a << 8) + (n << 16) + (e << 24) >>> 0
            },jspb.utils.joinUint64 = function (e, t) {
                return t * jspb.BinaryConstants.TWO_TO_32 + e
            },jspb.utils.joinInt64 = function (e, t) {
                var r = 2147483648 & t;
                r && (t = ~t >>> 0, 0 == (e = 1 + ~e >>> 0) && (t = t + 1 >>> 0));
                var o = jspb.utils.joinUint64(e, t);
                return r ? -o : o
            },jspb.utils.joinZigzag64 = function (e, t) {
                var r = 1 & e;
                e = (e >>> 1 | t << 31) >>> 0, t >>>= 1, r && (0 == (e = e + 1 >>> 0) && (t = t + 1 >>> 0));
                var o = jspb.utils.joinUint64(e, t);
                return r ? -o : o
            },jspb.utils.joinFloat32 = function (e, t) {
                var r = 2 * (e >> 31) + 1, o = e >>> 23 & 255, i = 8388607 & e;
                return 255 == o ? i ? NaN : 1 / 0 * r : 0 == o ? r * Math.pow(2, -149) * i : r * Math.pow(2, o - 150) * (i + Math.pow(2, 23))
            },jspb.utils.joinFloat64 = function (e, t) {
                var r = 2 * (t >> 31) + 1, o = t >>> 20 & 2047, i = jspb.BinaryConstants.TWO_TO_32 * (1048575 & t) + e;
                return 2047 == o ? i ? NaN : 1 / 0 * r : 0 == o ? r * Math.pow(2, -1074) * i : r * Math.pow(2, o - 1075) * (i + jspb.BinaryConstants.TWO_TO_52)
            },jspb.utils.joinHash64 = function (e, t) {
                return String.fromCharCode(e >>> 0 & 255, e >>> 8 & 255, e >>> 16 & 255, e >>> 24 & 255, t >>> 0 & 255, t >>> 8 & 255, t >>> 16 & 255, t >>> 24 & 255)
            },jspb.utils.DIGITS = "0123456789abcdef".split(""),jspb.utils.joinUnsignedDecimalString = function (e, t) {
                function r(e) {
                    for (var t = 1e7, r = 0; r < 7; r++) {
                        var o = e / (t = t / 10) % 10 >>> 0;
                        (0 != o || n) && (n = !0, p += a[o])
                    }
                }

                if (t <= 2097151) return "" + (jspb.BinaryConstants.TWO_TO_32 * t + e);
                var o = (16777215 & e) + 6777216 * (i = (e >>> 24 | t << 8) >>> 0 & 16777215) + 6710656 * (s = t >> 16 & 65535),
                    i = i + 8147497 * s, s = 2 * s;
                1e7 <= o && (i += Math.floor(o / 1e7), o %= 1e7), 1e7 <= i && (s += Math.floor(i / 1e7), i %= 1e7);
                var a = jspb.utils.DIGITS, n = !1, p = "";
                return (s || n) && r(s), (i || n) && r(i), (o || n) && r(o), p
            },jspb.utils.joinSignedDecimalString = function (e, t) {
                var r = 2147483648 & t;
                r && (t = ~t + (0 == (e = 1 + ~e >>> 0) ? 1 : 0) >>> 0);
                var o = jspb.utils.joinUnsignedDecimalString(e, t);
                return r ? "-" + o : o
            },jspb.utils.hash64ToDecimalString = function (e, t) {
                jspb.utils.splitHash64(e);
                var r = jspb.utils.split64Low, o = jspb.utils.split64High;
                return t ? jspb.utils.joinSignedDecimalString(r, o) : jspb.utils.joinUnsignedDecimalString(r, o)
            },jspb.utils.hash64ArrayToDecimalStrings = function (e, t) {
                for (var r = Array(e.length), o = 0; o < e.length; o++) r[o] = jspb.utils.hash64ToDecimalString(e[o], t);
                return r
            },jspb.utils.decimalStringToHash64 = function (e) {
                function t(e, t) {
                    for (var r = 0; r < 8 && (1 !== e || 0 < t); r++) {
                        var o = e * i[r] + t;
                        i[r] = 255 & o, t = o >>> 8
                    }
                }

                goog.asserts.assert(0 < e.length);
                var r = !1;
                "-" === e[0] && (r = !0, e = e.slice(1));
                for (var i = [0, 0, 0, 0, 0, 0, 0, 0], o = 0; o < e.length; o++) t(10, jspb.utils.DIGITS.indexOf(e[o]));
                return r && (function () {
                    for (var e = 0; e < 8; e++) i[e] = 255 & ~i[e]
                }(), t(1, 1)), goog.crypt.byteArrayToString(i)
            },jspb.utils.splitDecimalString = function (e) {
                jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(e))
            },jspb.utils.hash64ToHexString = function (e) {
                var t = Array(18);
                t[0] = "0", t[1] = "x";
                for (var r = 0; r < 8; r++) {
                    var o = e.charCodeAt(7 - r);
                    t[2 * r + 2] = jspb.utils.DIGITS[o >> 4], t[2 * r + 3] = jspb.utils.DIGITS[15 & o]
                }
                return t.join("")
            },jspb.utils.hexStringToHash64 = function (e) {
                e = e.toLowerCase(), goog.asserts.assert(18 == e.length), goog.asserts.assert("0" == e[0]), goog.asserts.assert("x" == e[1]);
                for (var t = "", r = 0; r < 8; r++) {
                    var o = jspb.utils.DIGITS.indexOf(e[2 * r + 2]), i = jspb.utils.DIGITS.indexOf(e[2 * r + 3]);
                    t = String.fromCharCode(16 * o + i) + t
                }
                return t
            },jspb.utils.hash64ToNumber = function (e, t) {
                jspb.utils.splitHash64(e);
                var r = jspb.utils.split64Low, o = jspb.utils.split64High;
                return t ? jspb.utils.joinInt64(r, o) : jspb.utils.joinUint64(r, o)
            },jspb.utils.numberToHash64 = function (e) {
                return jspb.utils.splitInt64(e), jspb.utils.joinHash64(jspb.utils.split64Low, jspb.utils.split64High)
            },jspb.utils.countVarints = function (e, t, r) {
                for (var o = 0, i = t; i < r; i++) o += e[i] >> 7;
                return r - t - o
            },jspb.utils.countVarintFields = function (e, t, r, o) {
                var i = 0;
                if ((o = 8 * o + jspb.BinaryConstants.WireType.VARINT) < 128) for (; t < r && e[t++] == o;) for (i++; ;) {
                    var s = e[t++];
                    if (0 == (128 & s)) break
                } else for (; t < r;) {
                    for (s = o; 128 < s;) {
                        if (e[t] != (127 & s | 128)) return i;
                        t++, s >>= 7
                    }
                    if (e[t++] != s) break;
                    for (i++; 0 != (128 & (s = e[t++]));) ;
                }
                return i
            },jspb.utils.countFixedFields_ = function (e, t, r, o, i) {
                var s = 0;
                if (o < 128) for (; t < r && e[t++] == o;) s++, t += i; else for (; t < r;) {
                    for (var a = o; 128 < a;) {
                        if (e[t++] != (127 & a | 128)) return s;
                        a >>= 7
                    }
                    if (e[t++] != a) break;
                    s++, t += i
                }
                return s
            },jspb.utils.countFixed32Fields = function (e, t, r, o) {
                return jspb.utils.countFixedFields_(e, t, r, 8 * o + jspb.BinaryConstants.WireType.FIXED32, 4)
            },jspb.utils.countFixed64Fields = function (e, t, r, o) {
                return jspb.utils.countFixedFields_(e, t, r, 8 * o + jspb.BinaryConstants.WireType.FIXED64, 8)
            },jspb.utils.countDelimitedFields = function (e, t, r, o) {
                var i = 0;
                for (o = 8 * o + jspb.BinaryConstants.WireType.DELIMITED; t < r;) {
                    for (var s = o; 128 < s;) {
                        if (e[t++] != (127 & s | 128)) return i;
                        s >>= 7
                    }
                    if (e[t++] != s) break;
                    i++;
                    for (var a = 0, n = 1; a += (127 & (s = e[t++])) * n, n *= 128, 0 != (128 & s);) ;
                    t += a
                }
                return i
            },jspb.utils.debugBytesToTextFormat = function (e) {
                var t = '"';
                if (e) {
                    e = jspb.utils.byteSourceToUint8Array(e);
                    for (var r = 0; r < e.length; r++) t += "\\x", e[r] < 16 && (t += "0"), t += e[r].toString(16)
                }
                return t + '"'
            },jspb.utils.debugScalarToTextFormat = function (e) {
                return goog.isString(e) ? goog.string.quote(e) : e.toString()
            },jspb.utils.stringToByteArray = function (e) {
                for (var t = new Uint8Array(e.length), r = 0; r < e.length; r++) {
                    var o = e.charCodeAt(r);
                    if (255 < o) throw Error("Conversion error: string contains codepoint outside of byte range");
                    t[r] = o
                }
                return t
            },jspb.utils.byteSourceToUint8Array = function (e) {
                return e.constructor === Uint8Array ? e : e.constructor === ArrayBuffer || e.constructor === Buffer || e.constructor === Array ? new Uint8Array(e) : e.constructor === String ? goog.crypt.base64.decodeStringToUint8Array(e) : (goog.asserts.fail("Type not convertible to Uint8Array."), new Uint8Array(0))
            },jspb.BinaryEncoder = function () {
                this.buffer_ = []
            },jspb.BinaryEncoder.prototype.length = function () {
                return this.buffer_.length
            },jspb.BinaryEncoder.prototype.end = function () {
                var e = this.buffer_;
                return this.buffer_ = [], e
            },jspb.BinaryEncoder.prototype.writeSplitVarint64 = function (e, t) {
                for (goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(t == Math.floor(t)), goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_32), goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32); 0 < t || 127 < e;) this.buffer_.push(127 & e | 128), e = (e >>> 7 | t << 25) >>> 0, t >>>= 7;
                this.buffer_.push(e)
            },jspb.BinaryEncoder.prototype.writeSplitFixed64 = function (e, t) {
                goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(t == Math.floor(t)), goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_32), goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32), this.writeUint32(e), this.writeUint32(t)
            },jspb.BinaryEncoder.prototype.writeUnsignedVarint32 = function (e) {
                for (goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_32); 127 < e;) this.buffer_.push(127 & e | 128), e >>>= 7;
                this.buffer_.push(e)
            },jspb.BinaryEncoder.prototype.writeSignedVarint32 = function (e) {
                if (goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_31 && e < jspb.BinaryConstants.TWO_TO_31), 0 <= e) this.writeUnsignedVarint32(e); else {
                    for (var t = 0; t < 9; t++) this.buffer_.push(127 & e | 128), e >>= 7;
                    this.buffer_.push(1)
                }
            },jspb.BinaryEncoder.prototype.writeUnsignedVarint64 = function (e) {
                goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_64), jspb.utils.splitInt64(e), this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High)
            },jspb.BinaryEncoder.prototype.writeSignedVarint64 = function (e) {
                goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_63 && e < jspb.BinaryConstants.TWO_TO_63), jspb.utils.splitInt64(e), this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High)
            },jspb.BinaryEncoder.prototype.writeZigzagVarint32 = function (e) {
                goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_31 && e < jspb.BinaryConstants.TWO_TO_31), this.writeUnsignedVarint32((e << 1 ^ e >> 31) >>> 0)
            },jspb.BinaryEncoder.prototype.writeZigzagVarint64 = function (e) {
                goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_63 && e < jspb.BinaryConstants.TWO_TO_63), jspb.utils.splitZigzag64(e), this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High)
            },jspb.BinaryEncoder.prototype.writeZigzagVarint64String = function (e) {
                this.writeZigzagVarint64(parseInt(e, 10))
            },jspb.BinaryEncoder.prototype.writeUint8 = function (e) {
                goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(0 <= e && e < 256), this.buffer_.push(e >>> 0 & 255)
            },jspb.BinaryEncoder.prototype.writeUint16 = function (e) {
                goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(0 <= e && e < 65536), this.buffer_.push(e >>> 0 & 255), this.buffer_.push(e >>> 8 & 255)
            },jspb.BinaryEncoder.prototype.writeUint32 = function (e) {
                goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_32), this.buffer_.push(e >>> 0 & 255), this.buffer_.push(e >>> 8 & 255), this.buffer_.push(e >>> 16 & 255), this.buffer_.push(e >>> 24 & 255)
            },jspb.BinaryEncoder.prototype.writeUint64 = function (e) {
                goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(0 <= e && e < jspb.BinaryConstants.TWO_TO_64), jspb.utils.splitUint64(e), this.writeUint32(jspb.utils.split64Low), this.writeUint32(jspb.utils.split64High)
            },jspb.BinaryEncoder.prototype.writeInt8 = function (e) {
                goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(-128 <= e && e < 128), this.buffer_.push(e >>> 0 & 255)
            },jspb.BinaryEncoder.prototype.writeInt16 = function (e) {
                goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(-32768 <= e && e < 32768), this.buffer_.push(e >>> 0 & 255), this.buffer_.push(e >>> 8 & 255)
            },jspb.BinaryEncoder.prototype.writeInt32 = function (e) {
                goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_31 && e < jspb.BinaryConstants.TWO_TO_31), this.buffer_.push(e >>> 0 & 255), this.buffer_.push(e >>> 8 & 255), this.buffer_.push(e >>> 16 & 255), this.buffer_.push(e >>> 24 & 255)
            },jspb.BinaryEncoder.prototype.writeInt64 = function (e) {
                goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_63 && e < jspb.BinaryConstants.TWO_TO_63), jspb.utils.splitInt64(e), this.writeSplitFixed64(jspb.utils.split64Low, jspb.utils.split64High)
            },jspb.BinaryEncoder.prototype.writeInt64String = function (e) {
                goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(+e >= -jspb.BinaryConstants.TWO_TO_63 && +e < jspb.BinaryConstants.TWO_TO_63), jspb.utils.splitHash64(jspb.utils.decimalStringToHash64(e)), this.writeSplitFixed64(jspb.utils.split64Low, jspb.utils.split64High)
            },jspb.BinaryEncoder.prototype.writeFloat = function (e) {
                goog.asserts.assert(e >= -jspb.BinaryConstants.FLOAT32_MAX && e <= jspb.BinaryConstants.FLOAT32_MAX), jspb.utils.splitFloat32(e), this.writeUint32(jspb.utils.split64Low)
            },jspb.BinaryEncoder.prototype.writeDouble = function (e) {
                goog.asserts.assert(e >= -jspb.BinaryConstants.FLOAT64_MAX && e <= jspb.BinaryConstants.FLOAT64_MAX), jspb.utils.splitFloat64(e), this.writeUint32(jspb.utils.split64Low), this.writeUint32(jspb.utils.split64High)
            },jspb.BinaryEncoder.prototype.writeBool = function (e) {
                goog.asserts.assert(goog.isBoolean(e) || goog.isNumber(e)), this.buffer_.push(e ? 1 : 0)
            },jspb.BinaryEncoder.prototype.writeEnum = function (e) {
                goog.asserts.assert(e == Math.floor(e)), goog.asserts.assert(e >= -jspb.BinaryConstants.TWO_TO_31 && e < jspb.BinaryConstants.TWO_TO_31), this.writeSignedVarint32(e)
            },jspb.BinaryEncoder.prototype.writeBytes = function (e) {
                this.buffer_.push.apply(this.buffer_, e)
            },jspb.BinaryEncoder.prototype.writeVarintHash64 = function (e) {
                jspb.utils.splitHash64(e), this.writeSplitVarint64(jspb.utils.split64Low, jspb.utils.split64High)
            },jspb.BinaryEncoder.prototype.writeFixedHash64 = function (e) {
                jspb.utils.splitHash64(e), this.writeUint32(jspb.utils.split64Low), this.writeUint32(jspb.utils.split64High)
            },jspb.BinaryEncoder.prototype.writeString = function (e) {
                for (var t = this.buffer_.length, r = 0; r < e.length; r++) {
                    var o = e.charCodeAt(r);
                    if (o < 128) this.buffer_.push(o); else if (o < 2048) this.buffer_.push(o >> 6 | 192), this.buffer_.push(63 & o | 128); else if (o < 65536) if (55296 <= o && o <= 56319 && r + 1 < e.length) {
                        var i = e.charCodeAt(r + 1);
                        56320 <= i && i <= 57343 && (o = 1024 * (o - 55296) + i - 56320 + 65536, this.buffer_.push(o >> 18 | 240), this.buffer_.push(o >> 12 & 63 | 128), this.buffer_.push(o >> 6 & 63 | 128), this.buffer_.push(63 & o | 128), r++)
                    } else this.buffer_.push(o >> 12 | 224), this.buffer_.push(o >> 6 & 63 | 128), this.buffer_.push(63 & o | 128)
                }
                return this.buffer_.length - t
            },jspb.BinaryWriter = function () {
                this.blocks_ = [], this.totalLength_ = 0, this.encoder_ = new jspb.BinaryEncoder, this.bookmarks_ = []
            },jspb.BinaryWriter.prototype.appendUint8Array_ = function (e) {
                var t = this.encoder_.end();
                this.blocks_.push(t), this.blocks_.push(e), this.totalLength_ += t.length + e.length
            },jspb.BinaryWriter.prototype.beginDelimited_ = function (e) {
                return this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), e = this.encoder_.end(), this.blocks_.push(e), this.totalLength_ += e.length, e.push(this.totalLength_), e
            },jspb.BinaryWriter.prototype.endDelimited_ = function (e) {
                var t = e.pop();
                t = this.totalLength_ + this.encoder_.length() - t;
                for (goog.asserts.assert(0 <= t); 127 < t;) e.push(127 & t | 128), t >>>= 7, this.totalLength_++;
                e.push(t), this.totalLength_++
            },jspb.BinaryWriter.prototype.writeSerializedMessage = function (e, t, r) {
                this.appendUint8Array_(e.subarray(t, r))
            },jspb.BinaryWriter.prototype.maybeWriteSerializedMessage = function (e, t, r) {
                null != e && null != t && null != r && this.writeSerializedMessage(e, t, r)
            },jspb.BinaryWriter.prototype.reset = function () {
                this.blocks_ = [], this.encoder_.end(), this.totalLength_ = 0, this.bookmarks_ = []
            },jspb.BinaryWriter.prototype.getResultBuffer = function () {
                goog.asserts.assert(0 == this.bookmarks_.length);
                for (var e = new Uint8Array(this.totalLength_ + this.encoder_.length()), t = this.blocks_, r = t.length, o = 0, i = 0; i < r; i++) {
                    var s = t[i];
                    e.set(s, o), o += s.length
                }
                return t = this.encoder_.end(), e.set(t, o), o += t.length, goog.asserts.assert(o == e.length), this.blocks_ = [e], e
            },jspb.BinaryWriter.prototype.getResultBase64String = function (e) {
                return goog.crypt.base64.encodeByteArray(this.getResultBuffer(), e)
            },jspb.BinaryWriter.prototype.beginSubMessage = function (e) {
                this.bookmarks_.push(this.beginDelimited_(e))
            },jspb.BinaryWriter.prototype.endSubMessage = function () {
                goog.asserts.assert(0 <= this.bookmarks_.length), this.endDelimited_(this.bookmarks_.pop())
            },jspb.BinaryWriter.prototype.writeFieldHeader_ = function (e, t) {
                goog.asserts.assert(1 <= e && e == Math.floor(e)), this.encoder_.writeUnsignedVarint32(8 * e + t)
            },jspb.BinaryWriter.prototype.writeAny = function (e, t, r) {
                var o = jspb.BinaryConstants.FieldType;
                switch (e) {
                    case o.DOUBLE:
                        this.writeDouble(t, r);
                        break;
                    case o.FLOAT:
                        this.writeFloat(t, r);
                        break;
                    case o.INT64:
                        this.writeInt64(t, r);
                        break;
                    case o.UINT64:
                        this.writeUint64(t, r);
                        break;
                    case o.INT32:
                        this.writeInt32(t, r);
                        break;
                    case o.FIXED64:
                        this.writeFixed64(t, r);
                        break;
                    case o.FIXED32:
                        this.writeFixed32(t, r);
                        break;
                    case o.BOOL:
                        this.writeBool(t, r);
                        break;
                    case o.STRING:
                        this.writeString(t, r);
                        break;
                    case o.GROUP:
                        goog.asserts.fail("Group field type not supported in writeAny()");
                        break;
                    case o.MESSAGE:
                        goog.asserts.fail("Message field type not supported in writeAny()");
                        break;
                    case o.BYTES:
                        this.writeBytes(t, r);
                        break;
                    case o.UINT32:
                        this.writeUint32(t, r);
                        break;
                    case o.ENUM:
                        this.writeEnum(t, r);
                        break;
                    case o.SFIXED32:
                        this.writeSfixed32(t, r);
                        break;
                    case o.SFIXED64:
                        this.writeSfixed64(t, r);
                        break;
                    case o.SINT32:
                        this.writeSint32(t, r);
                        break;
                    case o.SINT64:
                        this.writeSint64(t, r);
                        break;
                    case o.FHASH64:
                        this.writeFixedHash64(t, r);
                        break;
                    case o.VHASH64:
                        this.writeVarintHash64(t, r);
                        break;
                    default:
                        goog.asserts.fail("Invalid field type in writeAny()")
                }
            },jspb.BinaryWriter.prototype.writeUnsignedVarint32_ = function (e, t) {
                null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeUnsignedVarint32(t))
            },jspb.BinaryWriter.prototype.writeSignedVarint32_ = function (e, t) {
                null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint32(t))
            },jspb.BinaryWriter.prototype.writeUnsignedVarint64_ = function (e, t) {
                null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeUnsignedVarint64(t))
            },jspb.BinaryWriter.prototype.writeSignedVarint64_ = function (e, t) {
                null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint64(t))
            },jspb.BinaryWriter.prototype.writeZigzagVarint32_ = function (e, t) {
                null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarint32(t))
            },jspb.BinaryWriter.prototype.writeZigzagVarint64_ = function (e, t) {
                null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarint64(t))
            },jspb.BinaryWriter.prototype.writeZigzagVarint64String_ = function (e, t) {
                null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeZigzagVarint64String(t))
            },jspb.BinaryWriter.prototype.writeInt32 = function (e, t) {
                null != t && (goog.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_31 && t < jspb.BinaryConstants.TWO_TO_31), this.writeSignedVarint32_(e, t))
            },jspb.BinaryWriter.prototype.writeInt32String = function (e, t) {
                if (null != t) {
                    var r = parseInt(t, 10);
                    goog.asserts.assert(r >= -jspb.BinaryConstants.TWO_TO_31 && r < jspb.BinaryConstants.TWO_TO_31), this.writeSignedVarint32_(e, r)
                }
            },jspb.BinaryWriter.prototype.writeInt64 = function (e, t) {
                null != t && (goog.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_63 && t < jspb.BinaryConstants.TWO_TO_63), this.writeSignedVarint64_(e, t))
            },jspb.BinaryWriter.prototype.writeInt64String = function (e, t) {
                if (null != t) {
                    var r = jspb.arith.Int64.fromString(t);
                    this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSplitVarint64(r.lo, r.hi)
                }
            },jspb.BinaryWriter.prototype.writeUint32 = function (e, t) {
                null != t && (goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32), this.writeUnsignedVarint32_(e, t))
            },jspb.BinaryWriter.prototype.writeUint32String = function (e, t) {
                if (null != t) {
                    var r = parseInt(t, 10);
                    goog.asserts.assert(0 <= r && r < jspb.BinaryConstants.TWO_TO_32), this.writeUnsignedVarint32_(e, r)
                }
            },jspb.BinaryWriter.prototype.writeUint64 = function (e, t) {
                null != t && (goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_64), this.writeUnsignedVarint64_(e, t))
            },jspb.BinaryWriter.prototype.writeUint64String = function (e, t) {
                if (null != t) {
                    var r = jspb.arith.UInt64.fromString(t);
                    this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSplitVarint64(r.lo, r.hi)
                }
            },jspb.BinaryWriter.prototype.writeSint32 = function (e, t) {
                null != t && (goog.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_31 && t < jspb.BinaryConstants.TWO_TO_31), this.writeZigzagVarint32_(e, t))
            },jspb.BinaryWriter.prototype.writeSint64 = function (e, t) {
                null != t && (goog.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_63 && t < jspb.BinaryConstants.TWO_TO_63), this.writeZigzagVarint64_(e, t))
            },jspb.BinaryWriter.prototype.writeSint64String = function (e, t) {
                null != t && (goog.asserts.assert(+t >= -jspb.BinaryConstants.TWO_TO_63 && +t < jspb.BinaryConstants.TWO_TO_63), this.writeZigzagVarint64String_(e, t))
            },jspb.BinaryWriter.prototype.writeFixed32 = function (e, t) {
                null != t && (goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_32), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED32), this.encoder_.writeUint32(t))
            },jspb.BinaryWriter.prototype.writeFixed64 = function (e, t) {
                null != t && (goog.asserts.assert(0 <= t && t < jspb.BinaryConstants.TWO_TO_64), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeUint64(t))
            },jspb.BinaryWriter.prototype.writeFixed64String = function (e, t) {
                if (null != t) {
                    var r = jspb.arith.UInt64.fromString(t);
                    this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeSplitFixed64(r.lo, r.hi)
                }
            },jspb.BinaryWriter.prototype.writeSfixed32 = function (e, t) {
                null != t && (goog.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_31 && t < jspb.BinaryConstants.TWO_TO_31), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED32), this.encoder_.writeInt32(t))
            },jspb.BinaryWriter.prototype.writeSfixed64 = function (e, t) {
                null != t && (goog.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_63 && t < jspb.BinaryConstants.TWO_TO_63), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeInt64(t))
            },jspb.BinaryWriter.prototype.writeSfixed64String = function (e, t) {
                if (null != t) {
                    var r = jspb.arith.Int64.fromString(t);
                    this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeSplitFixed64(r.lo, r.hi)
                }
            },jspb.BinaryWriter.prototype.writeFloat = function (e, t) {
                null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED32), this.encoder_.writeFloat(t))
            },jspb.BinaryWriter.prototype.writeDouble = function (e, t) {
                null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeDouble(t))
            },jspb.BinaryWriter.prototype.writeBool = function (e, t) {
                null != t && (goog.asserts.assert(goog.isBoolean(t) || goog.isNumber(t)), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeBool(t))
            },jspb.BinaryWriter.prototype.writeEnum = function (e, t) {
                null != t && (goog.asserts.assert(t >= -jspb.BinaryConstants.TWO_TO_31 && t < jspb.BinaryConstants.TWO_TO_31), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeSignedVarint32(t))
            },jspb.BinaryWriter.prototype.writeString = function (e, t) {
                if (null != t) {
                    var r = this.beginDelimited_(e);
                    this.encoder_.writeString(t), this.endDelimited_(r)
                }
            },jspb.BinaryWriter.prototype.writeBytes = function (e, t) {
                if (null != t) {
                    var r = jspb.utils.byteSourceToUint8Array(t);
                    this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(r.length), this.appendUint8Array_(r)
                }
            },jspb.BinaryWriter.prototype.writeMessage = function (e, t, r) {
                null != t && (e = this.beginDelimited_(e), r(t, this), this.endDelimited_(e))
            },jspb.BinaryWriter.prototype.writeGroup = function (e, t, r) {
                null != t && (this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.START_GROUP), r(t, this), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.END_GROUP))
            },jspb.BinaryWriter.prototype.writeFixedHash64 = function (e, t) {
                null != t && (goog.asserts.assert(8 == t.length), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.FIXED64), this.encoder_.writeFixedHash64(t))
            },jspb.BinaryWriter.prototype.writeVarintHash64 = function (e, t) {
                null != t && (goog.asserts.assert(8 == t.length), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.VARINT), this.encoder_.writeVarintHash64(t))
            },jspb.BinaryWriter.prototype.writeRepeatedInt32 = function (e, t) {
                if (null != t) for (var r = 0; r < t.length; r++) this.writeSignedVarint32_(e, t[r])
            },jspb.BinaryWriter.prototype.writeRepeatedInt32String = function (e, t) {
                if (null != t) for (var r = 0; r < t.length; r++) this.writeInt32String(e, t[r])
            },jspb.BinaryWriter.prototype.writeRepeatedInt64 = function (e, t) {
                if (null != t) for (var r = 0; r < t.length; r++) this.writeSignedVarint64_(e, t[r])
            },jspb.BinaryWriter.prototype.writeRepeatedInt64String = function (e, t) {
                if (null != t) for (var r = 0; r < t.length; r++) this.writeInt64String(e, t[r])
            },jspb.BinaryWriter.prototype.writeRepeatedUint32 = function (e, t) {
                if (null != t) for (var r = 0; r < t.length; r++) this.writeUnsignedVarint32_(e, t[r])
            },jspb.BinaryWriter.prototype.writeRepeatedUint32String = function (e, t) {
                if (null != t) for (var r = 0; r < t.length; r++) this.writeUint32String(e, t[r])
            },jspb.BinaryWriter.prototype.writeRepeatedUint64 = function (e, t) {
                if (null != t) for (var r = 0; r < t.length; r++) this.writeUnsignedVarint64_(e, t[r])
            },jspb.BinaryWriter.prototype.writeRepeatedUint64String = function (e, t) {
                if (null != t) for (var r = 0; r < t.length; r++) this.writeUint64String(e, t[r])
            },jspb.BinaryWriter.prototype.writeRepeatedSint32 = function (e, t) {
                if (null != t) for (var r = 0; r < t.length; r++) this.writeZigzagVarint32_(e, t[r])
            },jspb.BinaryWriter.prototype.writeRepeatedSint64 = function (e, t) {
                if (null != t) for (var r = 0; r < t.length; r++) this.writeZigzagVarint64_(e, t[r])
            },jspb.BinaryWriter.prototype.writeRepeatedSint64String = function (e, t) {
                if (null != t) for (var r = 0; r < t.length; r++) this.writeZigzagVarint64String_(e, t[r])
            },jspb.BinaryWriter.prototype.writeRepeatedFixed32 = function (e, t) {
                if (null != t) for (var r = 0; r < t.length; r++) this.writeFixed32(e, t[r])
            },jspb.BinaryWriter.prototype.writeRepeatedFixed64 = function (e, t) {
                if (null != t) for (var r = 0; r < t.length; r++) this.writeFixed64(e, t[r])
            },jspb.BinaryWriter.prototype.writeRepeatedFixed64String = function (e, t) {
                if (null != t) for (var r = 0; r < t.length; r++) this.writeFixed64String(e, t[r])
            },jspb.BinaryWriter.prototype.writeRepeatedSfixed32 = function (e, t) {
                if (null != t) for (var r = 0; r < t.length; r++) this.writeSfixed32(e, t[r])
            },jspb.BinaryWriter.prototype.writeRepeatedSfixed64 = function (e, t) {
                if (null != t) for (var r = 0; r < t.length; r++) this.writeSfixed64(e, t[r])
            },jspb.BinaryWriter.prototype.writeRepeatedSfixed64String = function (e, t) {
                if (null != t) for (var r = 0; r < t.length; r++) this.writeSfixed64String(e, t[r])
            },jspb.BinaryWriter.prototype.writeRepeatedFloat = function (e, t) {
                if (null != t) for (var r = 0; r < t.length; r++) this.writeFloat(e, t[r])
            },jspb.BinaryWriter.prototype.writeRepeatedDouble = function (e, t) {
                if (null != t) for (var r = 0; r < t.length; r++) this.writeDouble(e, t[r])
            },jspb.BinaryWriter.prototype.writeRepeatedBool = function (e, t) {
                if (null != t) for (var r = 0; r < t.length; r++) this.writeBool(e, t[r])
            },jspb.BinaryWriter.prototype.writeRepeatedEnum = function (e, t) {
                if (null != t) for (var r = 0; r < t.length; r++) this.writeEnum(e, t[r])
            },jspb.BinaryWriter.prototype.writeRepeatedString = function (e, t) {
                if (null != t) for (var r = 0; r < t.length; r++) this.writeString(e, t[r])
            },jspb.BinaryWriter.prototype.writeRepeatedBytes = function (e, t) {
                if (null != t) for (var r = 0; r < t.length; r++) this.writeBytes(e, t[r])
            },jspb.BinaryWriter.prototype.writeRepeatedMessage = function (e, t, r) {
                if (null != t) for (var o = 0; o < t.length; o++) {
                    var i = this.beginDelimited_(e);
                    r(t[o], this), this.endDelimited_(i)
                }
            },jspb.BinaryWriter.prototype.writeRepeatedGroup = function (e, t, r) {
                if (null != t) for (var o = 0; o < t.length; o++) this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.START_GROUP), r(t[o], this), this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.END_GROUP)
            },jspb.BinaryWriter.prototype.writeRepeatedFixedHash64 = function (e, t) {
                if (null != t) for (var r = 0; r < t.length; r++) this.writeFixedHash64(e, t[r])
            },jspb.BinaryWriter.prototype.writeRepeatedVarintHash64 = function (e, t) {
                if (null != t) for (var r = 0; r < t.length; r++) this.writeVarintHash64(e, t[r])
            },jspb.BinaryWriter.prototype.writePackedInt32 = function (e, t) {
                if (null != t && t.length) {
                    for (var r = this.beginDelimited_(e), o = 0; o < t.length; o++) this.encoder_.writeSignedVarint32(t[o]);
                    this.endDelimited_(r)
                }
            },jspb.BinaryWriter.prototype.writePackedInt32String = function (e, t) {
                if (null != t && t.length) {
                    for (var r = this.beginDelimited_(e), o = 0; o < t.length; o++) this.encoder_.writeSignedVarint32(parseInt(t[o], 10));
                    this.endDelimited_(r)
                }
            },jspb.BinaryWriter.prototype.writePackedInt64 = function (e, t) {
                if (null != t && t.length) {
                    for (var r = this.beginDelimited_(e), o = 0; o < t.length; o++) this.encoder_.writeSignedVarint64(t[o]);
                    this.endDelimited_(r)
                }
            },jspb.BinaryWriter.prototype.writePackedInt64String = function (e, t) {
                if (null != t && t.length) {
                    for (var r = this.beginDelimited_(e), o = 0; o < t.length; o++) {
                        var i = jspb.arith.Int64.fromString(t[o]);
                        this.encoder_.writeSplitVarint64(i.lo, i.hi)
                    }
                    this.endDelimited_(r)
                }
            },jspb.BinaryWriter.prototype.writePackedUint32 = function (e, t) {
                if (null != t && t.length) {
                    for (var r = this.beginDelimited_(e), o = 0; o < t.length; o++) this.encoder_.writeUnsignedVarint32(t[o]);
                    this.endDelimited_(r)
                }
            },jspb.BinaryWriter.prototype.writePackedUint32String = function (e, t) {
                if (null != t && t.length) {
                    for (var r = this.beginDelimited_(e), o = 0; o < t.length; o++) this.encoder_.writeUnsignedVarint32(parseInt(t[o], 10));
                    this.endDelimited_(r)
                }
            },jspb.BinaryWriter.prototype.writePackedUint64 = function (e, t) {
                if (null != t && t.length) {
                    for (var r = this.beginDelimited_(e), o = 0; o < t.length; o++) this.encoder_.writeUnsignedVarint64(t[o]);
                    this.endDelimited_(r)
                }
            },jspb.BinaryWriter.prototype.writePackedUint64String = function (e, t) {
                if (null != t && t.length) {
                    for (var r = this.beginDelimited_(e), o = 0; o < t.length; o++) {
                        var i = jspb.arith.UInt64.fromString(t[o]);
                        this.encoder_.writeSplitVarint64(i.lo, i.hi)
                    }
                    this.endDelimited_(r)
                }
            },jspb.BinaryWriter.prototype.writePackedSint32 = function (e, t) {
                if (null != t && t.length) {
                    for (var r = this.beginDelimited_(e), o = 0; o < t.length; o++) this.encoder_.writeZigzagVarint32(t[o]);
                    this.endDelimited_(r)
                }
            },jspb.BinaryWriter.prototype.writePackedSint64 = function (e, t) {
                if (null != t && t.length) {
                    for (var r = this.beginDelimited_(e), o = 0; o < t.length; o++) this.encoder_.writeZigzagVarint64(t[o]);
                    this.endDelimited_(r)
                }
            },jspb.BinaryWriter.prototype.writePackedSint64String = function (e, t) {
                if (null != t && t.length) {
                    for (var r = this.beginDelimited_(e), o = 0; o < t.length; o++) this.encoder_.writeZigzagVarint64(parseInt(t[o], 10));
                    this.endDelimited_(r)
                }
            },jspb.BinaryWriter.prototype.writePackedFixed32 = function (e, t) {
                if (null != t && t.length) {
                    this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(4 * t.length);
                    for (var r = 0; r < t.length; r++) this.encoder_.writeUint32(t[r])
                }
            },jspb.BinaryWriter.prototype.writePackedFixed64 = function (e, t) {
                if (null != t && t.length) {
                    this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * t.length);
                    for (var r = 0; r < t.length; r++) this.encoder_.writeUint64(t[r])
                }
            },jspb.BinaryWriter.prototype.writePackedFixed64String = function (e, t) {
                if (null != t && t.length) {
                    this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * t.length);
                    for (var r = 0; r < t.length; r++) {
                        var o = jspb.arith.UInt64.fromString(t[r]);
                        this.encoder_.writeSplitFixed64(o.lo, o.hi)
                    }
                }
            },jspb.BinaryWriter.prototype.writePackedSfixed32 = function (e, t) {
                if (null != t && t.length) {
                    this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(4 * t.length);
                    for (var r = 0; r < t.length; r++) this.encoder_.writeInt32(t[r])
                }
            },jspb.BinaryWriter.prototype.writePackedSfixed64 = function (e, t) {
                if (null != t && t.length) {
                    this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * t.length);
                    for (var r = 0; r < t.length; r++) this.encoder_.writeInt64(t[r])
                }
            },jspb.BinaryWriter.prototype.writePackedSfixed64String = function (e, t) {
                if (null != t && t.length) {
                    this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * t.length);
                    for (var r = 0; r < t.length; r++) this.encoder_.writeInt64String(t[r])
                }
            },jspb.BinaryWriter.prototype.writePackedFloat = function (e, t) {
                if (null != t && t.length) {
                    this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(4 * t.length);
                    for (var r = 0; r < t.length; r++) this.encoder_.writeFloat(t[r])
                }
            },jspb.BinaryWriter.prototype.writePackedDouble = function (e, t) {
                if (null != t && t.length) {
                    this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * t.length);
                    for (var r = 0; r < t.length; r++) this.encoder_.writeDouble(t[r])
                }
            },jspb.BinaryWriter.prototype.writePackedBool = function (e, t) {
                if (null != t && t.length) {
                    this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(t.length);
                    for (var r = 0; r < t.length; r++) this.encoder_.writeBool(t[r])
                }
            },jspb.BinaryWriter.prototype.writePackedEnum = function (e, t) {
                if (null != t && t.length) {
                    for (var r = this.beginDelimited_(e), o = 0; o < t.length; o++) this.encoder_.writeEnum(t[o]);
                    this.endDelimited_(r)
                }
            },jspb.BinaryWriter.prototype.writePackedFixedHash64 = function (e, t) {
                if (null != t && t.length) {
                    this.writeFieldHeader_(e, jspb.BinaryConstants.WireType.DELIMITED), this.encoder_.writeUnsignedVarint32(8 * t.length);
                    for (var r = 0; r < t.length; r++) this.encoder_.writeFixedHash64(t[r])
                }
            },jspb.BinaryWriter.prototype.writePackedVarintHash64 = function (e, t) {
                if (null != t && t.length) {
                    for (var r = this.beginDelimited_(e), o = 0; o < t.length; o++) this.encoder_.writeVarintHash64(t[o]);
                    this.endDelimited_(r)
                }
            },jspb.BinaryIterator = function (e, t, r) {
                this.elements_ = this.nextMethod_ = this.decoder_ = null, this.cursor_ = 0, this.nextValue_ = null, this.atEnd_ = !0, this.init_(e, t, r)
            },jspb.BinaryIterator.prototype.init_ = function (e, t, r) {
                e && t && (this.decoder_ = e, this.nextMethod_ = t), this.elements_ = r || null, this.cursor_ = 0, this.nextValue_ = null, this.atEnd_ = !this.decoder_ && !this.elements_, this.next()
            },jspb.BinaryIterator.instanceCache_ = [],jspb.BinaryIterator.alloc = function (e, t, r) {
                if (jspb.BinaryIterator.instanceCache_.length) {
                    var o = jspb.BinaryIterator.instanceCache_.pop();
                    return o.init_(e, t, r), o
                }
                return new jspb.BinaryIterator(e, t, r)
            },jspb.BinaryIterator.prototype.free = function () {
                this.clear(), jspb.BinaryIterator.instanceCache_.length < 100 && jspb.BinaryIterator.instanceCache_.push(this)
            },jspb.BinaryIterator.prototype.clear = function () {
                this.decoder_ && this.decoder_.free(), this.elements_ = this.nextMethod_ = this.decoder_ = null, this.cursor_ = 0, this.nextValue_ = null, this.atEnd_ = !0
            },jspb.BinaryIterator.prototype.get = function () {
                return this.nextValue_
            },jspb.BinaryIterator.prototype.atEnd = function () {
                return this.atEnd_
            },jspb.BinaryIterator.prototype.next = function () {
                var e = this.nextValue_;
                return this.decoder_ ? this.decoder_.atEnd() ? (this.nextValue_ = null, this.atEnd_ = !0) : this.nextValue_ = this.nextMethod_.call(this.decoder_) : this.elements_ && (this.cursor_ == this.elements_.length ? (this.nextValue_ = null, this.atEnd_ = !0) : this.nextValue_ = this.elements_[this.cursor_++]), e
            },jspb.BinaryDecoder = function (e, t, r) {
                this.bytes_ = null, this.tempHigh_ = this.tempLow_ = this.cursor_ = this.end_ = this.start_ = 0, this.error_ = !1, e && this.setBlock(e, t, r)
            },jspb.BinaryDecoder.instanceCache_ = [],jspb.BinaryDecoder.alloc = function (e, t, r) {
                if (jspb.BinaryDecoder.instanceCache_.length) {
                    var o = jspb.BinaryDecoder.instanceCache_.pop();
                    return e && o.setBlock(e, t, r), o
                }
                return new jspb.BinaryDecoder(e, t, r)
            },jspb.BinaryDecoder.prototype.free = function () {
                this.clear(), jspb.BinaryDecoder.instanceCache_.length < 100 && jspb.BinaryDecoder.instanceCache_.push(this)
            },jspb.BinaryDecoder.prototype.clone = function () {
                return jspb.BinaryDecoder.alloc(this.bytes_, this.start_, this.end_ - this.start_)
            },jspb.BinaryDecoder.prototype.clear = function () {
                this.bytes_ = null, this.cursor_ = this.end_ = this.start_ = 0, this.error_ = !1
            },jspb.BinaryDecoder.prototype.getBuffer = function () {
                return this.bytes_
            },jspb.BinaryDecoder.prototype.setBlock = function (e, t, r) {
                this.bytes_ = jspb.utils.byteSourceToUint8Array(e), this.start_ = goog.isDef(t) ? t : 0, this.end_ = goog.isDef(r) ? this.start_ + r : this.bytes_.length, this.cursor_ = this.start_
            },jspb.BinaryDecoder.prototype.getEnd = function () {
                return this.end_
            },jspb.BinaryDecoder.prototype.setEnd = function (e) {
                this.end_ = e
            },jspb.BinaryDecoder.prototype.reset = function () {
                this.cursor_ = this.start_
            },jspb.BinaryDecoder.prototype.getCursor = function () {
                return this.cursor_
            },jspb.BinaryDecoder.prototype.setCursor = function (e) {
                this.cursor_ = e
            },jspb.BinaryDecoder.prototype.advance = function (e) {
                this.cursor_ += e, goog.asserts.assert(this.cursor_ <= this.end_)
            },jspb.BinaryDecoder.prototype.atEnd = function () {
                return this.cursor_ == this.end_
            },jspb.BinaryDecoder.prototype.pastEnd = function () {
                return this.cursor_ > this.end_
            },jspb.BinaryDecoder.prototype.getError = function () {
                return this.error_ || this.cursor_ < 0 || this.cursor_ > this.end_
            },jspb.BinaryDecoder.prototype.readSplitVarint64_ = function () {
                for (var e, t, r = 0, o = 0; o < 4; o++) if (r |= (127 & (e = this.bytes_[this.cursor_++])) << 7 * o, e < 128) return this.tempLow_ = r >>> 0, void (this.tempHigh_ = 0);
                if (r |= (127 & (e = this.bytes_[this.cursor_++])) << 28, t = 0 | (127 & e) >> 4, e < 128) this.tempLow_ = r >>> 0, this.tempHigh_ = t >>> 0; else {
                    for (o = 0; o < 5; o++) if (t |= (127 & (e = this.bytes_[this.cursor_++])) << 7 * o + 3, e < 128) return this.tempLow_ = r >>> 0, void (this.tempHigh_ = t >>> 0);
                    goog.asserts.fail("Failed to read varint, encoding is invalid."), this.error_ = !0
                }
            },jspb.BinaryDecoder.prototype.skipVarint = function () {
                for (; 128 & this.bytes_[this.cursor_];) this.cursor_++;
                this.cursor_++
            },jspb.BinaryDecoder.prototype.unskipVarint = function (e) {
                for (; 128 < e;) this.cursor_--, e >>>= 7;
                this.cursor_--
            },jspb.BinaryDecoder.prototype.readUnsignedVarint32 = function () {
                var e, t = this.bytes_, r = 127 & (e = t[this.cursor_ + 0]);
                return e < 128 ? (this.cursor_ += 1, goog.asserts.assert(this.cursor_ <= this.end_), r) : (r |= (127 & (e = t[this.cursor_ + 1])) << 7, e < 128 ? (this.cursor_ += 2, goog.asserts.assert(this.cursor_ <= this.end_), r) : (r |= (127 & (e = t[this.cursor_ + 2])) << 14, e < 128 ? (this.cursor_ += 3, goog.asserts.assert(this.cursor_ <= this.end_), r) : (r |= (127 & (e = t[this.cursor_ + 3])) << 21, e < 128 ? (this.cursor_ += 4, goog.asserts.assert(this.cursor_ <= this.end_), r) : (r |= (15 & (e = t[this.cursor_ + 4])) << 28, e < 128 ? (this.cursor_ += 5, goog.asserts.assert(this.cursor_ <= this.end_), r >>> 0) : (this.cursor_ += 5, 128 <= t[this.cursor_++] && 128 <= t[this.cursor_++] && 128 <= t[this.cursor_++] && 128 <= t[this.cursor_++] && 128 <= t[this.cursor_++] && goog.asserts.assert(!1), goog.asserts.assert(this.cursor_ <= this.end_), r)))))
            },jspb.BinaryDecoder.prototype.readSignedVarint32 = jspb.BinaryDecoder.prototype.readUnsignedVarint32,jspb.BinaryDecoder.prototype.readUnsignedVarint32String = function () {
                return this.readUnsignedVarint32().toString()
            },jspb.BinaryDecoder.prototype.readSignedVarint32String = function () {
                return this.readSignedVarint32().toString()
            },jspb.BinaryDecoder.prototype.readZigzagVarint32 = function () {
                var e = this.readUnsignedVarint32();
                return e >>> 1 ^ -(1 & e)
            },jspb.BinaryDecoder.prototype.readUnsignedVarint64 = function () {
                return this.readSplitVarint64_(), jspb.utils.joinUint64(this.tempLow_, this.tempHigh_)
            },jspb.BinaryDecoder.prototype.readUnsignedVarint64String = function () {
                return this.readSplitVarint64_(), jspb.utils.joinUnsignedDecimalString(this.tempLow_, this.tempHigh_)
            },jspb.BinaryDecoder.prototype.readSignedVarint64 = function () {
                return this.readSplitVarint64_(), jspb.utils.joinInt64(this.tempLow_, this.tempHigh_)
            },jspb.BinaryDecoder.prototype.readSignedVarint64String = function () {
                return this.readSplitVarint64_(), jspb.utils.joinSignedDecimalString(this.tempLow_, this.tempHigh_)
            },jspb.BinaryDecoder.prototype.readZigzagVarint64 = function () {
                return this.readSplitVarint64_(), jspb.utils.joinZigzag64(this.tempLow_, this.tempHigh_)
            },jspb.BinaryDecoder.prototype.readZigzagVarint64String = function () {
                return this.readZigzagVarint64().toString()
            },jspb.BinaryDecoder.prototype.readUint8 = function () {
                var e = this.bytes_[this.cursor_ + 0];
                return this.cursor_ += 1, goog.asserts.assert(this.cursor_ <= this.end_), e
            },jspb.BinaryDecoder.prototype.readUint16 = function () {
                var e = this.bytes_[this.cursor_ + 0], t = this.bytes_[this.cursor_ + 1];
                return this.cursor_ += 2, goog.asserts.assert(this.cursor_ <= this.end_), e << 0 | t << 8
            },jspb.BinaryDecoder.prototype.readUint32 = function () {
                var e = this.bytes_[this.cursor_ + 0], t = this.bytes_[this.cursor_ + 1],
                    r = this.bytes_[this.cursor_ + 2], o = this.bytes_[this.cursor_ + 3];
                return this.cursor_ += 4, goog.asserts.assert(this.cursor_ <= this.end_), (e << 0 | t << 8 | r << 16 | o << 24) >>> 0
            },jspb.BinaryDecoder.prototype.readUint64 = function () {
                var e = this.readUint32(), t = this.readUint32();
                return jspb.utils.joinUint64(e, t)
            },jspb.BinaryDecoder.prototype.readUint64String = function () {
                var e = this.readUint32(), t = this.readUint32();
                return jspb.utils.joinUnsignedDecimalString(e, t)
            },jspb.BinaryDecoder.prototype.readInt8 = function () {
                var e = this.bytes_[this.cursor_ + 0];
                return this.cursor_ += 1, goog.asserts.assert(this.cursor_ <= this.end_), e << 24 >> 24
            },jspb.BinaryDecoder.prototype.readInt16 = function () {
                var e = this.bytes_[this.cursor_ + 0], t = this.bytes_[this.cursor_ + 1];
                return this.cursor_ += 2, goog.asserts.assert(this.cursor_ <= this.end_), (e << 0 | t << 8) << 16 >> 16
            },jspb.BinaryDecoder.prototype.readInt32 = function () {
                var e = this.bytes_[this.cursor_ + 0], t = this.bytes_[this.cursor_ + 1],
                    r = this.bytes_[this.cursor_ + 2], o = this.bytes_[this.cursor_ + 3];
                return this.cursor_ += 4, goog.asserts.assert(this.cursor_ <= this.end_), e << 0 | t << 8 | r << 16 | o << 24
            },jspb.BinaryDecoder.prototype.readInt64 = function () {
                var e = this.readUint32(), t = this.readUint32();
                return jspb.utils.joinInt64(e, t)
            },jspb.BinaryDecoder.prototype.readInt64String = function () {
                var e = this.readUint32(), t = this.readUint32();
                return jspb.utils.joinSignedDecimalString(e, t)
            },jspb.BinaryDecoder.prototype.readFloat = function () {
                var e = this.readUint32();
                return jspb.utils.joinFloat32(e, 0)
            },jspb.BinaryDecoder.prototype.readDouble = function () {
                var e = this.readUint32(), t = this.readUint32();
                return jspb.utils.joinFloat64(e, t)
            },jspb.BinaryDecoder.prototype.readBool = function () {
                return !!this.bytes_[this.cursor_++]
            },jspb.BinaryDecoder.prototype.readEnum = function () {
                return this.readSignedVarint32()
            },jspb.BinaryDecoder.prototype.readString = function (e) {
                var t = this.bytes_, r = this.cursor_;
                e = r + e;
                for (var o = [], i = ""; r < e;) {
                    if ((n = t[r++]) < 128) o.push(n); else {
                        if (n < 192) continue;
                        if (n < 224) {
                            var s = t[r++];
                            o.push((31 & n) << 6 | 63 & s)
                        } else if (n < 240) {
                            s = t[r++];
                            var a = t[r++];
                            o.push((15 & n) << 12 | (63 & s) << 6 | 63 & a)
                        } else if (n < 248) {
                            var n = (n = (7 & n) << 18 | (63 & (s = t[r++])) << 12 | (63 & (a = t[r++])) << 6 | 63 & t[r++]) - 65536;
                            o.push(55296 + (n >> 10 & 1023), 56320 + (1023 & n))
                        }
                    }
                    8192 <= o.length && (i += String.fromCharCode.apply(null, o), o.length = 0)
                }
                return i += goog.crypt.byteArrayToString(o), this.cursor_ = r, i
            },jspb.BinaryDecoder.prototype.readStringWithLength = function () {
                var e = this.readUnsignedVarint32();
                return this.readString(e)
            },jspb.BinaryDecoder.prototype.readBytes = function (e) {
                if (e < 0 || this.cursor_ + e > this.bytes_.length) return this.error_ = !0, goog.asserts.fail("Invalid byte length!"), new Uint8Array(0);
                var t = this.bytes_.subarray(this.cursor_, this.cursor_ + e);
                return this.cursor_ += e, goog.asserts.assert(this.cursor_ <= this.end_), t
            },jspb.BinaryDecoder.prototype.readVarintHash64 = function () {
                return this.readSplitVarint64_(), jspb.utils.joinHash64(this.tempLow_, this.tempHigh_)
            },jspb.BinaryDecoder.prototype.readFixedHash64 = function () {
                var e = this.bytes_, t = this.cursor_, r = e[t + 0], o = e[t + 1], i = e[t + 2], s = e[t + 3],
                    a = e[t + 4], n = e[t + 5], p = e[t + 6];
                e = e[t + 7];
                return this.cursor_ += 8, String.fromCharCode(r, o, i, s, a, n, p, e)
            },jspb.BinaryReader = function (e, t, r) {
                this.decoder_ = jspb.BinaryDecoder.alloc(e, t, r), this.fieldCursor_ = this.decoder_.getCursor(), this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER, this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID, this.error_ = !1, this.readCallbacks_ = null
            },jspb.BinaryReader.instanceCache_ = [],jspb.BinaryReader.alloc = function (e, t, r) {
                if (jspb.BinaryReader.instanceCache_.length) {
                    var o = jspb.BinaryReader.instanceCache_.pop();
                    return e && o.decoder_.setBlock(e, t, r), o
                }
                return new jspb.BinaryReader(e, t, r)
            },jspb.BinaryReader.prototype.alloc = jspb.BinaryReader.alloc,jspb.BinaryReader.prototype.free = function () {
                this.decoder_.clear(), this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER, this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID, this.error_ = !1, this.readCallbacks_ = null, jspb.BinaryReader.instanceCache_.length < 100 && jspb.BinaryReader.instanceCache_.push(this)
            },jspb.BinaryReader.prototype.getFieldCursor = function () {
                return this.fieldCursor_
            },jspb.BinaryReader.prototype.getCursor = function () {
                return this.decoder_.getCursor()
            },jspb.BinaryReader.prototype.getBuffer = function () {
                return this.decoder_.getBuffer()
            },jspb.BinaryReader.prototype.getFieldNumber = function () {
                return this.nextField_
            },jspb.BinaryReader.prototype.getWireType = function () {
                return this.nextWireType_
            },jspb.BinaryReader.prototype.isEndGroup = function () {
                return this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP
            },jspb.BinaryReader.prototype.getError = function () {
                return this.error_ || this.decoder_.getError()
            },jspb.BinaryReader.prototype.setBlock = function (e, t, r) {
                this.decoder_.setBlock(e, t, r), this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER, this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID
            },jspb.BinaryReader.prototype.reset = function () {
                this.decoder_.reset(), this.nextField_ = jspb.BinaryConstants.INVALID_FIELD_NUMBER, this.nextWireType_ = jspb.BinaryConstants.WireType.INVALID
            },jspb.BinaryReader.prototype.advance = function (e) {
                this.decoder_.advance(e)
            },jspb.BinaryReader.prototype.nextField = function () {
                if (this.decoder_.atEnd()) return !1;
                if (this.getError()) return goog.asserts.fail("Decoder hit an error"), !1;
                this.fieldCursor_ = this.decoder_.getCursor();
                var e, t = (e = this.decoder_.readUnsignedVarint32()) >>> 3;
                return (e = 7 & e) != jspb.BinaryConstants.WireType.VARINT && e != jspb.BinaryConstants.WireType.FIXED32 && e != jspb.BinaryConstants.WireType.FIXED64 && e != jspb.BinaryConstants.WireType.DELIMITED && e != jspb.BinaryConstants.WireType.START_GROUP && e != jspb.BinaryConstants.WireType.END_GROUP ? (goog.asserts.fail("Invalid wire type"), !(this.error_ = !0)) : (this.nextField_ = t, this.nextWireType_ = e, !0)
            },jspb.BinaryReader.prototype.unskipHeader = function () {
                this.decoder_.unskipVarint(this.nextField_ << 3 | this.nextWireType_)
            },jspb.BinaryReader.prototype.skipMatchingFields = function () {
                var e = this.nextField_;
                for (this.unskipHeader(); this.nextField() && this.getFieldNumber() == e;) this.skipField();
                this.decoder_.atEnd() || this.unskipHeader()
            },jspb.BinaryReader.prototype.skipVarintField = function () {
                this.nextWireType_ != jspb.BinaryConstants.WireType.VARINT ? (goog.asserts.fail("Invalid wire type for skipVarintField"), this.skipField()) : this.decoder_.skipVarint()
            },jspb.BinaryReader.prototype.skipDelimitedField = function () {
                if (this.nextWireType_ != jspb.BinaryConstants.WireType.DELIMITED) goog.asserts.fail("Invalid wire type for skipDelimitedField"), this.skipField(); else {
                    var e = this.decoder_.readUnsignedVarint32();
                    this.decoder_.advance(e)
                }
            },jspb.BinaryReader.prototype.skipFixed32Field = function () {
                this.nextWireType_ != jspb.BinaryConstants.WireType.FIXED32 ? (goog.asserts.fail("Invalid wire type for skipFixed32Field"), this.skipField()) : this.decoder_.advance(4)
            },jspb.BinaryReader.prototype.skipFixed64Field = function () {
                this.nextWireType_ != jspb.BinaryConstants.WireType.FIXED64 ? (goog.asserts.fail("Invalid wire type for skipFixed64Field"), this.skipField()) : this.decoder_.advance(8)
            },jspb.BinaryReader.prototype.skipGroup = function () {
                var e = [this.nextField_];
                do {
                    if (!this.nextField()) {
                        goog.asserts.fail("Unmatched start-group tag: stream EOF"), this.error_ = !0;
                        break
                    }
                    if (this.nextWireType_ == jspb.BinaryConstants.WireType.START_GROUP) e.push(this.nextField_); else if (this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP && this.nextField_ != e.pop()) {
                        goog.asserts.fail("Unmatched end-group tag"), this.error_ = !0;
                        break
                    }
                } while (0 < e.length)
            },jspb.BinaryReader.prototype.skipField = function () {
                switch (this.nextWireType_) {
                    case jspb.BinaryConstants.WireType.VARINT:
                        this.skipVarintField();
                        break;
                    case jspb.BinaryConstants.WireType.FIXED64:
                        this.skipFixed64Field();
                        break;
                    case jspb.BinaryConstants.WireType.DELIMITED:
                        this.skipDelimitedField();
                        break;
                    case jspb.BinaryConstants.WireType.FIXED32:
                        this.skipFixed32Field();
                        break;
                    case jspb.BinaryConstants.WireType.START_GROUP:
                        this.skipGroup();
                        break;
                    default:
                        goog.asserts.fail("Invalid wire encoding for field.")
                }
            },jspb.BinaryReader.prototype.registerReadCallback = function (e, t) {
                goog.isNull(this.readCallbacks_) && (this.readCallbacks_ = {}), goog.asserts.assert(!this.readCallbacks_[e]), this.readCallbacks_[e] = t
            },jspb.BinaryReader.prototype.runReadCallback = function (e) {
                return goog.asserts.assert(!goog.isNull(this.readCallbacks_)), e = this.readCallbacks_[e], goog.asserts.assert(e), e(this)
            },jspb.BinaryReader.prototype.readAny = function (e) {
                this.nextWireType_ = jspb.BinaryConstants.FieldTypeToWireType(e);
                var t = jspb.BinaryConstants.FieldType;
                switch (e) {
                    case t.DOUBLE:
                        return this.readDouble();
                    case t.FLOAT:
                        return this.readFloat();
                    case t.INT64:
                        return this.readInt64();
                    case t.UINT64:
                        return this.readUint64();
                    case t.INT32:
                        return this.readInt32();
                    case t.FIXED64:
                        return this.readFixed64();
                    case t.FIXED32:
                        return this.readFixed32();
                    case t.BOOL:
                        return this.readBool();
                    case t.STRING:
                        return this.readString();
                    case t.GROUP:
                        goog.asserts.fail("Group field type not supported in readAny()");
                    case t.MESSAGE:
                        goog.asserts.fail("Message field type not supported in readAny()");
                    case t.BYTES:
                        return this.readBytes();
                    case t.UINT32:
                        return this.readUint32();
                    case t.ENUM:
                        return this.readEnum();
                    case t.SFIXED32:
                        return this.readSfixed32();
                    case t.SFIXED64:
                        return this.readSfixed64();
                    case t.SINT32:
                        return this.readSint32();
                    case t.SINT64:
                        return this.readSint64();
                    case t.FHASH64:
                        return this.readFixedHash64();
                    case t.VHASH64:
                        return this.readVarintHash64();
                    default:
                        goog.asserts.fail("Invalid field type in readAny()")
                }
                return 0
            },jspb.BinaryReader.prototype.readMessage = function (e, t) {
                goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
                var r = this.decoder_.getEnd(), o = this.decoder_.readUnsignedVarint32();
                o = this.decoder_.getCursor() + o;
                this.decoder_.setEnd(o), t(e, this), this.decoder_.setCursor(o), this.decoder_.setEnd(r)
            },jspb.BinaryReader.prototype.readGroup = function (e, t, r) {
                goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.START_GROUP), goog.asserts.assert(this.nextField_ == e), r(t, this), this.error_ || this.nextWireType_ == jspb.BinaryConstants.WireType.END_GROUP || (goog.asserts.fail("Group submessage did not end with an END_GROUP tag"), this.error_ = !0)
            },jspb.BinaryReader.prototype.getFieldDecoder = function () {
                goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
                var e = this.decoder_.readUnsignedVarint32(), t = this.decoder_.getCursor(), r = t + e;
                e = jspb.BinaryDecoder.alloc(this.decoder_.getBuffer(), t, e);
                return this.decoder_.setCursor(r), e
            },jspb.BinaryReader.prototype.readInt32 = function () {
                return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readSignedVarint32()
            },jspb.BinaryReader.prototype.readInt32String = function () {
                return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readSignedVarint32String()
            },jspb.BinaryReader.prototype.readInt64 = function () {
                return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readSignedVarint64()
            },jspb.BinaryReader.prototype.readInt64String = function () {
                return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readSignedVarint64String()
            },jspb.BinaryReader.prototype.readUint32 = function () {
                return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readUnsignedVarint32()
            },jspb.BinaryReader.prototype.readUint32String = function () {
                return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readUnsignedVarint32String()
            },jspb.BinaryReader.prototype.readUint64 = function () {
                return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readUnsignedVarint64()
            },jspb.BinaryReader.prototype.readUint64String = function () {
                return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readUnsignedVarint64String()
            },jspb.BinaryReader.prototype.readSint32 = function () {
                return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readZigzagVarint32()
            },jspb.BinaryReader.prototype.readSint64 = function () {
                return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readZigzagVarint64()
            },jspb.BinaryReader.prototype.readSint64String = function () {
                return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readZigzagVarint64String()
            },jspb.BinaryReader.prototype.readFixed32 = function () {
                return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32), this.decoder_.readUint32()
            },jspb.BinaryReader.prototype.readFixed64 = function () {
                return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64), this.decoder_.readUint64()
            },jspb.BinaryReader.prototype.readFixed64String = function () {
                return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64), this.decoder_.readUint64String()
            },jspb.BinaryReader.prototype.readSfixed32 = function () {
                return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32), this.decoder_.readInt32()
            },jspb.BinaryReader.prototype.readSfixed32String = function () {
                return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32), this.decoder_.readInt32().toString()
            },jspb.BinaryReader.prototype.readSfixed64 = function () {
                return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64), this.decoder_.readInt64()
            },jspb.BinaryReader.prototype.readSfixed64String = function () {
                return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64), this.decoder_.readInt64String()
            },jspb.BinaryReader.prototype.readFloat = function () {
                return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED32), this.decoder_.readFloat()
            },jspb.BinaryReader.prototype.readDouble = function () {
                return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64), this.decoder_.readDouble()
            },jspb.BinaryReader.prototype.readBool = function () {
                return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), !!this.decoder_.readUnsignedVarint32()
            },jspb.BinaryReader.prototype.readEnum = function () {
                return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readSignedVarint64()
            },jspb.BinaryReader.prototype.readString = function () {
                goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
                var e = this.decoder_.readUnsignedVarint32();
                return this.decoder_.readString(e)
            },jspb.BinaryReader.prototype.readBytes = function () {
                goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
                var e = this.decoder_.readUnsignedVarint32();
                return this.decoder_.readBytes(e)
            },jspb.BinaryReader.prototype.readVarintHash64 = function () {
                return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.VARINT), this.decoder_.readVarintHash64()
            },jspb.BinaryReader.prototype.readFixedHash64 = function () {
                return goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.FIXED64), this.decoder_.readFixedHash64()
            },jspb.BinaryReader.prototype.readPackedField_ = function (e) {
                goog.asserts.assert(this.nextWireType_ == jspb.BinaryConstants.WireType.DELIMITED);
                for (var t = this.decoder_.readUnsignedVarint32(), r = (t = this.decoder_.getCursor() + t, []); this.decoder_.getCursor() < t;) r.push(e.call(this.decoder_));
                return r
            },jspb.BinaryReader.prototype.readPackedInt32 = function () {
                return this.readPackedField_(this.decoder_.readSignedVarint32)
            },jspb.BinaryReader.prototype.readPackedInt32String = function () {
                return this.readPackedField_(this.decoder_.readSignedVarint32String)
            },jspb.BinaryReader.prototype.readPackedInt64 = function () {
                return this.readPackedField_(this.decoder_.readSignedVarint64)
            },jspb.BinaryReader.prototype.readPackedInt64String = function () {
                return this.readPackedField_(this.decoder_.readSignedVarint64String)
            },jspb.BinaryReader.prototype.readPackedUint32 = function () {
                return this.readPackedField_(this.decoder_.readUnsignedVarint32)
            },jspb.BinaryReader.prototype.readPackedUint32String = function () {
                return this.readPackedField_(this.decoder_.readUnsignedVarint32String)
            },jspb.BinaryReader.prototype.readPackedUint64 = function () {
                return this.readPackedField_(this.decoder_.readUnsignedVarint64)
            },jspb.BinaryReader.prototype.readPackedUint64String = function () {
                return this.readPackedField_(this.decoder_.readUnsignedVarint64String)
            },jspb.BinaryReader.prototype.readPackedSint32 = function () {
                return this.readPackedField_(this.decoder_.readZigzagVarint32)
            },jspb.BinaryReader.prototype.readPackedSint64 = function () {
                return this.readPackedField_(this.decoder_.readZigzagVarint64)
            },jspb.BinaryReader.prototype.readPackedSint64String = function () {
                return this.readPackedField_(this.decoder_.readZigzagVarint64String)
            },jspb.BinaryReader.prototype.readPackedFixed32 = function () {
                return this.readPackedField_(this.decoder_.readUint32)
            },jspb.BinaryReader.prototype.readPackedFixed64 = function () {
                return this.readPackedField_(this.decoder_.readUint64)
            },jspb.BinaryReader.prototype.readPackedFixed64String = function () {
                return this.readPackedField_(this.decoder_.readUint64String)
            },jspb.BinaryReader.prototype.readPackedSfixed32 = function () {
                return this.readPackedField_(this.decoder_.readInt32)
            },jspb.BinaryReader.prototype.readPackedSfixed64 = function () {
                return this.readPackedField_(this.decoder_.readInt64)
            },jspb.BinaryReader.prototype.readPackedSfixed64String = function () {
                return this.readPackedField_(this.decoder_.readInt64String)
            },jspb.BinaryReader.prototype.readPackedFloat = function () {
                return this.readPackedField_(this.decoder_.readFloat)
            },jspb.BinaryReader.prototype.readPackedDouble = function () {
                return this.readPackedField_(this.decoder_.readDouble)
            },jspb.BinaryReader.prototype.readPackedBool = function () {
                return this.readPackedField_(this.decoder_.readBool)
            },jspb.BinaryReader.prototype.readPackedEnum = function () {
                return this.readPackedField_(this.decoder_.readEnum)
            },jspb.BinaryReader.prototype.readPackedVarintHash64 = function () {
                return this.readPackedField_(this.decoder_.readVarintHash64)
            },jspb.BinaryReader.prototype.readPackedFixedHash64 = function () {
                return this.readPackedField_(this.decoder_.readFixedHash64)
            },jspb.Export = {},exports.Map = jspb.Map,exports.Message = jspb.Message,exports.BinaryReader = jspb.BinaryReader,exports.BinaryWriter = jspb.BinaryWriter,exports.ExtensionFieldInfo = jspb.ExtensionFieldInfo,exports.ExtensionFieldBinaryInfo = jspb.ExtensionFieldBinaryInfo,exports.exportSymbol = goog.exportSymbol,exports.inherits = goog.inherits,exports.object = {extend: goog.object.extend},exports.typeOf = goog.typeOf
        }).call(this, "undefined" != typeof global ? global : "undefined" != typeof self ? self : "undefined" != typeof window ? window : {}, _require("buffer").Buffer)
    }, {buffer: 2}], 9: [function (e, t, r) {
        var o = e("google-protobuf"), i = o, s = window;
        i.exportSymbol("proto.stream.Broadcast", null, s), i.exportSymbol("proto.stream.BroadcastAck", null, s), i.exportSymbol("proto.stream.CheckIn", null, s), i.exportSymbol("proto.stream.CheckInAck", null, s), i.exportSymbol("proto.stream.CheckInNotify", null, s), i.exportSymbol("proto.stream.FrameBroadcast", null, s), i.exportSymbol("proto.stream.FrameBroadcastAck", null, s), i.exportSymbol("proto.stream.FrameDataNotify", null, s), i.exportSymbol("proto.stream.FrameSyncNotify", null, s), i.exportSymbol("proto.stream.GetCacheData", null, s), i.exportSymbol("proto.stream.GetCacheDataAck", null, s), i.exportSymbol("proto.stream.Heartbeat", null, s), i.exportSymbol("proto.stream.HeartbeatAck", null, s), i.exportSymbol("proto.stream.Notify", null, s), i.exportSymbol("proto.stream.Publish", null, s), i.exportSymbol("proto.stream.PublishAck", null, s), i.exportSymbol("proto.stream.PublishNotify", null, s), i.exportSymbol("proto.stream.SDKHotelCmdID", null, s), i.exportSymbol("proto.stream.SetFrameSyncRate", null, s), i.exportSymbol("proto.stream.SetFrameSyncRateAck", null, s), i.exportSymbol("proto.stream.SetFrameSyncRateNotify", null, s), i.exportSymbol("proto.stream.SetUseTimeStamp", null, s), i.exportSymbol("proto.stream.SetUseTimeStampAck", null, s), i.exportSymbol("proto.stream.Subscribe", null, s), i.exportSymbol("proto.stream.SubscribeAck", null, s), proto.stream.CheckIn = function (e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.stream.CheckIn, o.Message), i.DEBUG && !COMPILED && (proto.stream.CheckIn.displayName = "proto.stream.CheckIn"), o.Message.GENERATE_TO_OBJECT && (proto.stream.CheckIn.prototype.toObject = function (e) {
            return proto.stream.CheckIn.toObject(e, this)
        }, proto.stream.CheckIn.toObject = function (e, t) {
            var r = {
                gameid: o.Message.getFieldWithDefault(t, 1, 0),
                roomid: o.Message.getFieldWithDefault(t, 2, "0"),
                userid: o.Message.getFieldWithDefault(t, 3, 0),
                bookid: o.Message.getFieldWithDefault(t, 4, ""),
                key: o.Message.getFieldWithDefault(t, 5, "")
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.stream.CheckIn.deserializeBinary = function (e) {
            var t = new o.BinaryReader(e), r = new proto.stream.CheckIn;
            return proto.stream.CheckIn.deserializeBinaryFromReader(r, t)
        }, proto.stream.CheckIn.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setGameid(r);
                        break;
                    case 2:
                        r = t.readUint64String();
                        e.setRoomid(r);
                        break;
                    case 3:
                        r = t.readUint32();
                        e.setUserid(r);
                        break;
                    case 4:
                        r = t.readString();
                        e.setBookid(r);
                        break;
                    case 5:
                        r = t.readString();
                        e.setKey(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.stream.CheckIn.prototype.serializeBinary = function () {
            var e = new o.BinaryWriter;
            return proto.stream.CheckIn.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.stream.CheckIn.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getGameid()) && t.writeUint32(1, r), r = e.getRoomid(), 0 !== parseInt(r, 10) && t.writeUint64String(2, r), 0 !== (r = e.getUserid()) && t.writeUint32(3, r), 0 < (r = e.getBookid()).length && t.writeString(4, r), 0 < (r = e.getKey()).length && t.writeString(5, r)
        }, proto.stream.CheckIn.prototype.getGameid = function () {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }, proto.stream.CheckIn.prototype.setGameid = function (e) {
            o.Message.setProto3IntField(this, 1, e)
        }, proto.stream.CheckIn.prototype.getRoomid = function () {
            return o.Message.getFieldWithDefault(this, 2, "0")
        }, proto.stream.CheckIn.prototype.setRoomid = function (e) {
            o.Message.setProto3StringIntField(this, 2, e)
        }, proto.stream.CheckIn.prototype.getUserid = function () {
            return o.Message.getFieldWithDefault(this, 3, 0)
        }, proto.stream.CheckIn.prototype.setUserid = function (e) {
            o.Message.setProto3IntField(this, 3, e)
        }, proto.stream.CheckIn.prototype.getBookid = function () {
            return o.Message.getFieldWithDefault(this, 4, "")
        }, proto.stream.CheckIn.prototype.setBookid = function (e) {
            o.Message.setProto3StringField(this, 4, e)
        }, proto.stream.CheckIn.prototype.getKey = function () {
            return o.Message.getFieldWithDefault(this, 5, "")
        }, proto.stream.CheckIn.prototype.setKey = function (e) {
            o.Message.setProto3StringField(this, 5, e)
        }, proto.stream.CheckInAck = function (e) {
            o.Message.initialize(this, e, 0, -1, proto.stream.CheckInAck.repeatedFields_, null)
        }, i.inherits(proto.stream.CheckInAck, o.Message), i.DEBUG && !COMPILED && (proto.stream.CheckInAck.displayName = "proto.stream.CheckInAck"), proto.stream.CheckInAck.repeatedFields_ = [3, 4], o.Message.GENERATE_TO_OBJECT && (proto.stream.CheckInAck.prototype.toObject = function (e) {
            return proto.stream.CheckInAck.toObject(e, this)
        }, proto.stream.CheckInAck.toObject = function (e, t) {
            var r = {
                status: o.Message.getFieldWithDefault(t, 1, 0),
                bookid: o.Message.getFieldWithDefault(t, 2, ""),
                checkinsList: o.Message.getRepeatedField(t, 3),
                playersList: o.Message.getRepeatedField(t, 4),
                maxplayers: o.Message.getFieldWithDefault(t, 5, 0)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.stream.CheckInAck.deserializeBinary = function (e) {
            var t = new o.BinaryReader(e), r = new proto.stream.CheckInAck;
            return proto.stream.CheckInAck.deserializeBinaryFromReader(r, t)
        }, proto.stream.CheckInAck.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setStatus(r);
                        break;
                    case 2:
                        r = t.readString();
                        e.setBookid(r);
                        break;
                    case 3:
                        r = t.readPackedUint32();
                        e.setCheckinsList(r);
                        break;
                    case 4:
                        r = t.readPackedUint32();
                        e.setPlayersList(r);
                        break;
                    case 5:
                        r = t.readUint32();
                        e.setMaxplayers(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.stream.CheckInAck.prototype.serializeBinary = function () {
            var e = new o.BinaryWriter;
            return proto.stream.CheckInAck.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.stream.CheckInAck.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getStatus()) && t.writeUint32(1, r), 0 < (r = e.getBookid()).length && t.writeString(2, r), 0 < (r = e.getCheckinsList()).length && t.writePackedUint32(3, r), 0 < (r = e.getPlayersList()).length && t.writePackedUint32(4, r), 0 !== (r = e.getMaxplayers()) && t.writeUint32(5, r)
        }, proto.stream.CheckInAck.prototype.getStatus = function () {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }, proto.stream.CheckInAck.prototype.setStatus = function (e) {
            o.Message.setProto3IntField(this, 1, e)
        }, proto.stream.CheckInAck.prototype.getBookid = function () {
            return o.Message.getFieldWithDefault(this, 2, "")
        }, proto.stream.CheckInAck.prototype.setBookid = function (e) {
            o.Message.setProto3StringField(this, 2, e)
        }, proto.stream.CheckInAck.prototype.getCheckinsList = function () {
            return o.Message.getRepeatedField(this, 3)
        }, proto.stream.CheckInAck.prototype.setCheckinsList = function (e) {
            o.Message.setField(this, 3, e || [])
        }, proto.stream.CheckInAck.prototype.addCheckins = function (e, t) {
            o.Message.addToRepeatedField(this, 3, e, t)
        }, proto.stream.CheckInAck.prototype.clearCheckinsList = function () {
            this.setCheckinsList([])
        }, proto.stream.CheckInAck.prototype.getPlayersList = function () {
            return o.Message.getRepeatedField(this, 4)
        }, proto.stream.CheckInAck.prototype.setPlayersList = function (e) {
            o.Message.setField(this, 4, e || [])
        }, proto.stream.CheckInAck.prototype.addPlayers = function (e, t) {
            o.Message.addToRepeatedField(this, 4, e, t)
        }, proto.stream.CheckInAck.prototype.clearPlayersList = function () {
            this.setPlayersList([])
        }, proto.stream.CheckInAck.prototype.getMaxplayers = function () {
            return o.Message.getFieldWithDefault(this, 5, 0)
        }, proto.stream.CheckInAck.prototype.setMaxplayers = function (e) {
            o.Message.setProto3IntField(this, 5, e)
        }, proto.stream.Heartbeat = function (e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.stream.Heartbeat, o.Message), i.DEBUG && !COMPILED && (proto.stream.Heartbeat.displayName = "proto.stream.Heartbeat"), o.Message.GENERATE_TO_OBJECT && (proto.stream.Heartbeat.prototype.toObject = function (e) {
            return proto.stream.Heartbeat.toObject(e, this)
        }, proto.stream.Heartbeat.toObject = function (e, t) {
            var r = {
                gameid: o.Message.getFieldWithDefault(t, 1, 0),
                roomid: o.Message.getFieldWithDefault(t, 2, "0"),
                userid: o.Message.getFieldWithDefault(t, 3, 0)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.stream.Heartbeat.deserializeBinary = function (e) {
            var t = new o.BinaryReader(e), r = new proto.stream.Heartbeat;
            return proto.stream.Heartbeat.deserializeBinaryFromReader(r, t)
        }, proto.stream.Heartbeat.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setGameid(r);
                        break;
                    case 2:
                        r = t.readUint64String();
                        e.setRoomid(r);
                        break;
                    case 3:
                        r = t.readUint32();
                        e.setUserid(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.stream.Heartbeat.prototype.serializeBinary = function () {
            var e = new o.BinaryWriter;
            return proto.stream.Heartbeat.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.stream.Heartbeat.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getGameid()) && t.writeUint32(1, r), r = e.getRoomid(), 0 !== parseInt(r, 10) && t.writeUint64String(2, r), 0 !== (r = e.getUserid()) && t.writeUint32(3, r)
        }, proto.stream.Heartbeat.prototype.getGameid = function () {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }, proto.stream.Heartbeat.prototype.setGameid = function (e) {
            o.Message.setProto3IntField(this, 1, e)
        }, proto.stream.Heartbeat.prototype.getRoomid = function () {
            return o.Message.getFieldWithDefault(this, 2, "0")
        }, proto.stream.Heartbeat.prototype.setRoomid = function (e) {
            o.Message.setProto3StringIntField(this, 2, e)
        }, proto.stream.Heartbeat.prototype.getUserid = function () {
            return o.Message.getFieldWithDefault(this, 3, 0)
        }, proto.stream.Heartbeat.prototype.setUserid = function (e) {
            o.Message.setProto3IntField(this, 3, e)
        }, proto.stream.HeartbeatAck = function (e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        }, i.inherits(proto.stream.HeartbeatAck, o.Message), i.DEBUG && !COMPILED && (proto.stream.HeartbeatAck.displayName = "proto.stream.HeartbeatAck"), o.Message.GENERATE_TO_OBJECT && (proto.stream.HeartbeatAck.prototype.toObject = function (e) {
            return proto.stream.HeartbeatAck.toObject(e, this)
        }, proto.stream.HeartbeatAck.toObject = function (e, t) {
            var r = {status: o.Message.getFieldWithDefault(t, 1, 0)};
            return e && (r.$jspbMessageInstance = t), r
        }), proto.stream.HeartbeatAck.deserializeBinary = function (e) {
            var t = new o.BinaryReader(e), r = new proto.stream.HeartbeatAck;
            return proto.stream.HeartbeatAck.deserializeBinaryFromReader(r, t)
        }, proto.stream.HeartbeatAck.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setStatus(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.stream.HeartbeatAck.prototype.serializeBinary = function () {
            var e = new o.BinaryWriter;
            return proto.stream.HeartbeatAck.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.stream.HeartbeatAck.serializeBinaryToWriter = function (e, t) {
            var r;
            0 !== (r = e.getStatus()) && t.writeUint32(1, r)
        }, proto.stream.HeartbeatAck.prototype.getStatus = function () {
            return o.Message.getFieldWithDefault(this, 1, 0)
        }, proto.stream.HeartbeatAck.prototype.setStatus = function (e) {
            o.Message.setProto3IntField(this, 1, e)
        }, proto.stream.Broadcast = function (e) {
            o.Message.initialize(this, e, 0, -1, proto.stream.Broadcast.repeatedFields_, null)
        }, i.inherits(proto.stream.Broadcast, o.Message), i.DEBUG && !COMPILED && (proto.stream.Broadcast.displayName = "proto.stream.Broadcast"), proto.stream.Broadcast.repeatedFields_ = [3], o.Message.GENERATE_TO_OBJECT && (proto.stream.Broadcast.prototype.toObject = function (e) {
            return proto.stream.Broadcast.toObject(e, this)
        }, proto.stream.Broadcast.toObject = function (e, t) {
            var r = {
                roomid: o.Message.getFieldWithDefault(t, 1, "0"),
                flag: o.Message.getFieldWithDefault(t, 2, 0),
                dstuidsList: o.Message.getRepeatedField(t, 3),
                cpproto: t.getCpproto_asB64()
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.stream.Broadcast.deserializeBinary = function (e) {
            var t = new o.BinaryReader(e), r = new proto.stream.Broadcast;
            return proto.stream.Broadcast.deserializeBinaryFromReader(r, t)
        }, proto.stream.Broadcast.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint64String();
                        e.setRoomid(r);
                        break;
                    case 2:
                        r = t.readUint32();
                        e.setFlag(r);
                        break;
                    case 3:
                        r = t.readPackedUint32();
                        e.setDstuidsList(r);
                        break;
                    case 4:
                        r = t.readBytes();
                        e.setCpproto(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.stream.Broadcast.prototype.serializeBinary = function () {
            var e = new o.BinaryWriter;
            return proto.stream.Broadcast.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.stream.Broadcast.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            r = e.getRoomid(), 0 !== parseInt(r, 10) && t.writeUint64String(1, r), 0 !== (r = e.getFlag()) && t.writeUint32(2, r), 0 < (r = e.getDstuidsList()).length && t.writePackedUint32(3, r), 0 < (r = e.getCpproto_asU8()).length && t.writeBytes(4, r)
        }, proto.stream.Broadcast.prototype.getRoomid = function () {
            return o.Message.getFieldWithDefault(this, 1, "0")
        }, proto.stream.Broadcast.prototype.setRoomid = function (e) {
            o.Message.setProto3StringIntField(this, 1, e)
        },proto.stream.Broadcast.prototype.getFlag = function () {
            return o.Message.getFieldWithDefault(this, 2, 0)
        },proto.stream.Broadcast.prototype.setFlag = function (e) {
            o.Message.setProto3IntField(this, 2, e)
        },proto.stream.Broadcast.prototype.getDstuidsList = function () {
            return o.Message.getRepeatedField(this, 3)
        },proto.stream.Broadcast.prototype.setDstuidsList = function (e) {
            o.Message.setField(this, 3, e || [])
        },proto.stream.Broadcast.prototype.addDstuids = function (e, t) {
            o.Message.addToRepeatedField(this, 3, e, t)
        },proto.stream.Broadcast.prototype.clearDstuidsList = function () {
            this.setDstuidsList([])
        },proto.stream.Broadcast.prototype.getCpproto = function () {
            return o.Message.getFieldWithDefault(this, 4, "")
        },proto.stream.Broadcast.prototype.getCpproto_asB64 = function () {
            return o.Message.bytesAsB64(this.getCpproto())
        },proto.stream.Broadcast.prototype.getCpproto_asU8 = function () {
            return o.Message.bytesAsU8(this.getCpproto())
        },proto.stream.Broadcast.prototype.setCpproto = function (e) {
            o.Message.setProto3BytesField(this, 4, e)
        },proto.stream.BroadcastAck = function (e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        },i.inherits(proto.stream.BroadcastAck, o.Message),i.DEBUG && !COMPILED && (proto.stream.BroadcastAck.displayName = "proto.stream.BroadcastAck"),o.Message.GENERATE_TO_OBJECT && (proto.stream.BroadcastAck.prototype.toObject = function (e) {
            return proto.stream.BroadcastAck.toObject(e, this)
        }, proto.stream.BroadcastAck.toObject = function (e, t) {
            var r = {status: o.Message.getFieldWithDefault(t, 1, 0)};
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.BroadcastAck.deserializeBinary = function (e) {
            var t = new o.BinaryReader(e), r = new proto.stream.BroadcastAck;
            return proto.stream.BroadcastAck.deserializeBinaryFromReader(r, t)
        },proto.stream.BroadcastAck.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setStatus(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.BroadcastAck.prototype.serializeBinary = function () {
            var e = new o.BinaryWriter;
            return proto.stream.BroadcastAck.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.BroadcastAck.serializeBinaryToWriter = function (e, t) {
            var r;
            0 !== (r = e.getStatus()) && t.writeUint32(1, r)
        },proto.stream.BroadcastAck.prototype.getStatus = function () {
            return o.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.BroadcastAck.prototype.setStatus = function (e) {
            o.Message.setProto3IntField(this, 1, e)
        },proto.stream.CheckInNotify = function (e) {
            o.Message.initialize(this, e, 0, -1, proto.stream.CheckInNotify.repeatedFields_, null)
        },i.inherits(proto.stream.CheckInNotify, o.Message),i.DEBUG && !COMPILED && (proto.stream.CheckInNotify.displayName = "proto.stream.CheckInNotify"),proto.stream.CheckInNotify.repeatedFields_ = [3, 4],o.Message.GENERATE_TO_OBJECT && (proto.stream.CheckInNotify.prototype.toObject = function (e) {
            return proto.stream.CheckInNotify.toObject(e, this)
        }, proto.stream.CheckInNotify.toObject = function (e, t) {
            var r = {
                userid: o.Message.getFieldWithDefault(t, 1, 0),
                bookid: o.Message.getFieldWithDefault(t, 2, ""),
                checkinsList: o.Message.getRepeatedField(t, 3),
                playersList: o.Message.getRepeatedField(t, 4),
                maxplayers: o.Message.getFieldWithDefault(t, 5, 0)
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.CheckInNotify.deserializeBinary = function (e) {
            var t = new o.BinaryReader(e), r = new proto.stream.CheckInNotify;
            return proto.stream.CheckInNotify.deserializeBinaryFromReader(r, t)
        },proto.stream.CheckInNotify.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setUserid(r);
                        break;
                    case 2:
                        r = t.readString();
                        e.setBookid(r);
                        break;
                    case 3:
                        r = t.readPackedUint32();
                        e.setCheckinsList(r);
                        break;
                    case 4:
                        r = t.readPackedUint32();
                        e.setPlayersList(r);
                        break;
                    case 5:
                        r = t.readUint32();
                        e.setMaxplayers(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.CheckInNotify.prototype.serializeBinary = function () {
            var e = new o.BinaryWriter;
            return proto.stream.CheckInNotify.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.CheckInNotify.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getUserid()) && t.writeUint32(1, r), 0 < (r = e.getBookid()).length && t.writeString(2, r), 0 < (r = e.getCheckinsList()).length && t.writePackedUint32(3, r), 0 < (r = e.getPlayersList()).length && t.writePackedUint32(4, r), 0 !== (r = e.getMaxplayers()) && t.writeUint32(5, r)
        },proto.stream.CheckInNotify.prototype.getUserid = function () {
            return o.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.CheckInNotify.prototype.setUserid = function (e) {
            o.Message.setProto3IntField(this, 1, e)
        },proto.stream.CheckInNotify.prototype.getBookid = function () {
            return o.Message.getFieldWithDefault(this, 2, "")
        },proto.stream.CheckInNotify.prototype.setBookid = function (e) {
            o.Message.setProto3StringField(this, 2, e)
        },proto.stream.CheckInNotify.prototype.getCheckinsList = function () {
            return o.Message.getRepeatedField(this, 3)
        },proto.stream.CheckInNotify.prototype.setCheckinsList = function (e) {
            o.Message.setField(this, 3, e || [])
        },proto.stream.CheckInNotify.prototype.addCheckins = function (e, t) {
            o.Message.addToRepeatedField(this, 3, e, t)
        },proto.stream.CheckInNotify.prototype.clearCheckinsList = function () {
            this.setCheckinsList([])
        },proto.stream.CheckInNotify.prototype.getPlayersList = function () {
            return o.Message.getRepeatedField(this, 4)
        },proto.stream.CheckInNotify.prototype.setPlayersList = function (e) {
            o.Message.setField(this, 4, e || [])
        },proto.stream.CheckInNotify.prototype.addPlayers = function (e, t) {
            o.Message.addToRepeatedField(this, 4, e, t)
        },proto.stream.CheckInNotify.prototype.clearPlayersList = function () {
            this.setPlayersList([])
        },proto.stream.CheckInNotify.prototype.getMaxplayers = function () {
            return o.Message.getFieldWithDefault(this, 5, 0)
        },proto.stream.CheckInNotify.prototype.setMaxplayers = function (e) {
            o.Message.setProto3IntField(this, 5, e)
        },proto.stream.Notify = function (e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        },i.inherits(proto.stream.Notify, o.Message),i.DEBUG && !COMPILED && (proto.stream.Notify.displayName = "proto.stream.Notify"),o.Message.GENERATE_TO_OBJECT && (proto.stream.Notify.prototype.toObject = function (e) {
            return proto.stream.Notify.toObject(e, this)
        }, proto.stream.Notify.toObject = function (e, t) {
            var r = {
                srcuid: o.Message.getFieldWithDefault(t, 1, 0),
                priority: o.Message.getFieldWithDefault(t, 2, 0),
                cpproto: t.getCpproto_asB64()
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.Notify.deserializeBinary = function (e) {
            var t = new o.BinaryReader(e), r = new proto.stream.Notify;
            return proto.stream.Notify.deserializeBinaryFromReader(r, t)
        },proto.stream.Notify.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setSrcuid(r);
                        break;
                    case 2:
                        r = t.readUint32();
                        e.setPriority(r);
                        break;
                    case 3:
                        r = t.readBytes();
                        e.setCpproto(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.Notify.prototype.serializeBinary = function () {
            var e = new o.BinaryWriter;
            return proto.stream.Notify.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.Notify.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getSrcuid()) && t.writeUint32(1, r), 0 !== (r = e.getPriority()) && t.writeUint32(2, r), 0 < (r = e.getCpproto_asU8()).length && t.writeBytes(3, r)
        },proto.stream.Notify.prototype.getSrcuid = function () {
            return o.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.Notify.prototype.setSrcuid = function (e) {
            o.Message.setProto3IntField(this, 1, e)
        },proto.stream.Notify.prototype.getPriority = function () {
            return o.Message.getFieldWithDefault(this, 2, 0)
        },proto.stream.Notify.prototype.setPriority = function (e) {
            o.Message.setProto3IntField(this, 2, e)
        },proto.stream.Notify.prototype.getCpproto = function () {
            return o.Message.getFieldWithDefault(this, 3, "")
        },proto.stream.Notify.prototype.getCpproto_asB64 = function () {
            return o.Message.bytesAsB64(this.getCpproto())
        },proto.stream.Notify.prototype.getCpproto_asU8 = function () {
            return o.Message.bytesAsU8(this.getCpproto())
        },proto.stream.Notify.prototype.setCpproto = function (e) {
            o.Message.setProto3BytesField(this, 3, e)
        },proto.stream.Subscribe = function (e) {
            o.Message.initialize(this, e, 0, -1, proto.stream.Subscribe.repeatedFields_, null)
        },i.inherits(proto.stream.Subscribe, o.Message),i.DEBUG && !COMPILED && (proto.stream.Subscribe.displayName = "proto.stream.Subscribe"),proto.stream.Subscribe.repeatedFields_ = [3, 4],o.Message.GENERATE_TO_OBJECT && (proto.stream.Subscribe.prototype.toObject = function (e) {
            return proto.stream.Subscribe.toObject(e, this)
        }, proto.stream.Subscribe.toObject = function (e, t) {
            var r = {
                gameid: o.Message.getFieldWithDefault(t, 1, 0),
                roomid: o.Message.getFieldWithDefault(t, 2, "0"),
                confirmsList: o.Message.getRepeatedField(t, 3),
                cancelsList: o.Message.getRepeatedField(t, 4)
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.Subscribe.deserializeBinary = function (e) {
            var t = new o.BinaryReader(e), r = new proto.stream.Subscribe;
            return proto.stream.Subscribe.deserializeBinaryFromReader(r, t)
        },proto.stream.Subscribe.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setGameid(r);
                        break;
                    case 2:
                        r = t.readUint64String();
                        e.setRoomid(r);
                        break;
                    case 3:
                        r = t.readString();
                        e.addConfirms(r);
                        break;
                    case 4:
                        r = t.readString();
                        e.addCancels(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.Subscribe.prototype.serializeBinary = function () {
            var e = new o.BinaryWriter;
            return proto.stream.Subscribe.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.Subscribe.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getGameid()) && t.writeUint32(1, r), r = e.getRoomid(), 0 !== parseInt(r, 10) && t.writeUint64String(2, r), 0 < (r = e.getConfirmsList()).length && t.writeRepeatedString(3, r), 0 < (r = e.getCancelsList()).length && t.writeRepeatedString(4, r)
        },proto.stream.Subscribe.prototype.getGameid = function () {
            return o.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.Subscribe.prototype.setGameid = function (e) {
            o.Message.setProto3IntField(this, 1, e)
        },proto.stream.Subscribe.prototype.getRoomid = function () {
            return o.Message.getFieldWithDefault(this, 2, "0")
        },proto.stream.Subscribe.prototype.setRoomid = function (e) {
            o.Message.setProto3StringIntField(this, 2, e)
        },proto.stream.Subscribe.prototype.getConfirmsList = function () {
            return o.Message.getRepeatedField(this, 3)
        },proto.stream.Subscribe.prototype.setConfirmsList = function (e) {
            o.Message.setField(this, 3, e || [])
        },proto.stream.Subscribe.prototype.addConfirms = function (e, t) {
            o.Message.addToRepeatedField(this, 3, e, t)
        },proto.stream.Subscribe.prototype.clearConfirmsList = function () {
            this.setConfirmsList([])
        },proto.stream.Subscribe.prototype.getCancelsList = function () {
            return o.Message.getRepeatedField(this, 4)
        },proto.stream.Subscribe.prototype.setCancelsList = function (e) {
            o.Message.setField(this, 4, e || [])
        },proto.stream.Subscribe.prototype.addCancels = function (e, t) {
            o.Message.addToRepeatedField(this, 4, e, t)
        },proto.stream.Subscribe.prototype.clearCancelsList = function () {
            this.setCancelsList([])
        },proto.stream.SubscribeAck = function (e) {
            o.Message.initialize(this, e, 0, -1, proto.stream.SubscribeAck.repeatedFields_, null)
        },i.inherits(proto.stream.SubscribeAck, o.Message),i.DEBUG && !COMPILED && (proto.stream.SubscribeAck.displayName = "proto.stream.SubscribeAck"),proto.stream.SubscribeAck.repeatedFields_ = [2],o.Message.GENERATE_TO_OBJECT && (proto.stream.SubscribeAck.prototype.toObject = function (e) {
            return proto.stream.SubscribeAck.toObject(e, this)
        }, proto.stream.SubscribeAck.toObject = function (e, t) {
            var r = {status: o.Message.getFieldWithDefault(t, 1, 0), groupsList: o.Message.getRepeatedField(t, 2)};
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.SubscribeAck.deserializeBinary = function (e) {
            var t = new o.BinaryReader(e), r = new proto.stream.SubscribeAck;
            return proto.stream.SubscribeAck.deserializeBinaryFromReader(r, t)
        },proto.stream.SubscribeAck.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setStatus(r);
                        break;
                    case 2:
                        r = t.readString();
                        e.addGroups(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.SubscribeAck.prototype.serializeBinary = function () {
            var e = new o.BinaryWriter;
            return proto.stream.SubscribeAck.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.SubscribeAck.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getStatus()) && t.writeUint32(1, r), 0 < (r = e.getGroupsList()).length && t.writeRepeatedString(2, r)
        },proto.stream.SubscribeAck.prototype.getStatus = function () {
            return o.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.SubscribeAck.prototype.setStatus = function (e) {
            o.Message.setProto3IntField(this, 1, e)
        },proto.stream.SubscribeAck.prototype.getGroupsList = function () {
            return o.Message.getRepeatedField(this, 2)
        },proto.stream.SubscribeAck.prototype.setGroupsList = function (e) {
            o.Message.setField(this, 2, e || [])
        },proto.stream.SubscribeAck.prototype.addGroups = function (e, t) {
            o.Message.addToRepeatedField(this, 2, e, t)
        },proto.stream.SubscribeAck.prototype.clearGroupsList = function () {
            this.setGroupsList([])
        },proto.stream.Publish = function (e) {
            o.Message.initialize(this, e, 0, -1, proto.stream.Publish.repeatedFields_, null)
        },i.inherits(proto.stream.Publish, o.Message),i.DEBUG && !COMPILED && (proto.stream.Publish.displayName = "proto.stream.Publish"),proto.stream.Publish.repeatedFields_ = [3],o.Message.GENERATE_TO_OBJECT && (proto.stream.Publish.prototype.toObject = function (e) {
            return proto.stream.Publish.toObject(e, this)
        }, proto.stream.Publish.toObject = function (e, t) {
            var r = {
                roomid: o.Message.getFieldWithDefault(t, 1, "0"),
                priority: o.Message.getFieldWithDefault(t, 2, 0),
                groupsList: o.Message.getRepeatedField(t, 3),
                cpproto: t.getCpproto_asB64()
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.Publish.deserializeBinary = function (e) {
            var t = new o.BinaryReader(e), r = new proto.stream.Publish;
            return proto.stream.Publish.deserializeBinaryFromReader(r, t)
        },proto.stream.Publish.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint64String();
                        e.setRoomid(r);
                        break;
                    case 2:
                        r = t.readUint32();
                        e.setPriority(r);
                        break;
                    case 3:
                        r = t.readString();
                        e.addGroups(r);
                        break;
                    case 4:
                        r = t.readBytes();
                        e.setCpproto(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.Publish.prototype.serializeBinary = function () {
            var e = new o.BinaryWriter;
            return proto.stream.Publish.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.Publish.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            r = e.getRoomid(), 0 !== parseInt(r, 10) && t.writeUint64String(1, r), 0 !== (r = e.getPriority()) && t.writeUint32(2, r), 0 < (r = e.getGroupsList()).length && t.writeRepeatedString(3, r), 0 < (r = e.getCpproto_asU8()).length && t.writeBytes(4, r)
        },proto.stream.Publish.prototype.getRoomid = function () {
            return o.Message.getFieldWithDefault(this, 1, "0")
        },proto.stream.Publish.prototype.setRoomid = function (e) {
            o.Message.setProto3StringIntField(this, 1, e)
        },proto.stream.Publish.prototype.getPriority = function () {
            return o.Message.getFieldWithDefault(this, 2, 0)
        },proto.stream.Publish.prototype.setPriority = function (e) {
            o.Message.setProto3IntField(this, 2, e)
        },proto.stream.Publish.prototype.getGroupsList = function () {
            return o.Message.getRepeatedField(this, 3)
        },proto.stream.Publish.prototype.setGroupsList = function (e) {
            o.Message.setField(this, 3, e || [])
        },proto.stream.Publish.prototype.addGroups = function (e, t) {
            o.Message.addToRepeatedField(this, 3, e, t)
        },proto.stream.Publish.prototype.clearGroupsList = function () {
            this.setGroupsList([])
        },proto.stream.Publish.prototype.getCpproto = function () {
            return o.Message.getFieldWithDefault(this, 4, "")
        },proto.stream.Publish.prototype.getCpproto_asB64 = function () {
            return o.Message.bytesAsB64(this.getCpproto())
        },proto.stream.Publish.prototype.getCpproto_asU8 = function () {
            return o.Message.bytesAsU8(this.getCpproto())
        },proto.stream.Publish.prototype.setCpproto = function (e) {
            o.Message.setProto3BytesField(this, 4, e)
        },proto.stream.PublishAck = function (e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        },i.inherits(proto.stream.PublishAck, o.Message),i.DEBUG && !COMPILED && (proto.stream.PublishAck.displayName = "proto.stream.PublishAck"),o.Message.GENERATE_TO_OBJECT && (proto.stream.PublishAck.prototype.toObject = function (e) {
            return proto.stream.PublishAck.toObject(e, this)
        }, proto.stream.PublishAck.toObject = function (e, t) {
            var r = {status: o.Message.getFieldWithDefault(t, 1, 0), dstnum: o.Message.getFieldWithDefault(t, 2, 0)};
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.PublishAck.deserializeBinary = function (e) {
            var t = new o.BinaryReader(e), r = new proto.stream.PublishAck;
            return proto.stream.PublishAck.deserializeBinaryFromReader(r, t)
        },proto.stream.PublishAck.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setStatus(r);
                        break;
                    case 2:
                        r = t.readUint32();
                        e.setDstnum(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.PublishAck.prototype.serializeBinary = function () {
            var e = new o.BinaryWriter;
            return proto.stream.PublishAck.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.PublishAck.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getStatus()) && t.writeUint32(1, r), 0 !== (r = e.getDstnum()) && t.writeUint32(2, r)
        },proto.stream.PublishAck.prototype.getStatus = function () {
            return o.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.PublishAck.prototype.setStatus = function (e) {
            o.Message.setProto3IntField(this, 1, e)
        },proto.stream.PublishAck.prototype.getDstnum = function () {
            return o.Message.getFieldWithDefault(this, 2, 0)
        },proto.stream.PublishAck.prototype.setDstnum = function (e) {
            o.Message.setProto3IntField(this, 2, e)
        },proto.stream.PublishNotify = function (e) {
            o.Message.initialize(this, e, 0, -1, proto.stream.PublishNotify.repeatedFields_, null)
        },i.inherits(proto.stream.PublishNotify, o.Message),i.DEBUG && !COMPILED && (proto.stream.PublishNotify.displayName = "proto.stream.PublishNotify"),proto.stream.PublishNotify.repeatedFields_ = [3],o.Message.GENERATE_TO_OBJECT && (proto.stream.PublishNotify.prototype.toObject = function (e) {
            return proto.stream.PublishNotify.toObject(e, this)
        }, proto.stream.PublishNotify.toObject = function (e, t) {
            var r = {
                srcuid: o.Message.getFieldWithDefault(t, 1, 0),
                priority: o.Message.getFieldWithDefault(t, 2, 0),
                groupsList: o.Message.getRepeatedField(t, 3),
                cpproto: t.getCpproto_asB64()
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.PublishNotify.deserializeBinary = function (e) {
            var t = new o.BinaryReader(e), r = new proto.stream.PublishNotify;
            return proto.stream.PublishNotify.deserializeBinaryFromReader(r, t)
        },proto.stream.PublishNotify.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setSrcuid(r);
                        break;
                    case 2:
                        r = t.readUint32();
                        e.setPriority(r);
                        break;
                    case 3:
                        r = t.readString();
                        e.addGroups(r);
                        break;
                    case 4:
                        r = t.readBytes();
                        e.setCpproto(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.PublishNotify.prototype.serializeBinary = function () {
            var e = new o.BinaryWriter;
            return proto.stream.PublishNotify.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.PublishNotify.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getSrcuid()) && t.writeUint32(1, r), 0 !== (r = e.getPriority()) && t.writeUint32(2, r), 0 < (r = e.getGroupsList()).length && t.writeRepeatedString(3, r), 0 < (r = e.getCpproto_asU8()).length && t.writeBytes(4, r)
        },proto.stream.PublishNotify.prototype.getSrcuid = function () {
            return o.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.PublishNotify.prototype.setSrcuid = function (e) {
            o.Message.setProto3IntField(this, 1, e)
        },proto.stream.PublishNotify.prototype.getPriority = function () {
            return o.Message.getFieldWithDefault(this, 2, 0)
        },proto.stream.PublishNotify.prototype.setPriority = function (e) {
            o.Message.setProto3IntField(this, 2, e)
        },proto.stream.PublishNotify.prototype.getGroupsList = function () {
            return o.Message.getRepeatedField(this, 3)
        },proto.stream.PublishNotify.prototype.setGroupsList = function (e) {
            o.Message.setField(this, 3, e || [])
        },proto.stream.PublishNotify.prototype.addGroups = function (e, t) {
            o.Message.addToRepeatedField(this, 3, e, t)
        },proto.stream.PublishNotify.prototype.clearGroupsList = function () {
            this.setGroupsList([])
        },proto.stream.PublishNotify.prototype.getCpproto = function () {
            return o.Message.getFieldWithDefault(this, 4, "")
        },proto.stream.PublishNotify.prototype.getCpproto_asB64 = function () {
            return o.Message.bytesAsB64(this.getCpproto())
        },proto.stream.PublishNotify.prototype.getCpproto_asU8 = function () {
            return o.Message.bytesAsU8(this.getCpproto())
        },proto.stream.PublishNotify.prototype.setCpproto = function (e) {
            o.Message.setProto3BytesField(this, 4, e)
        },proto.stream.SetUseTimeStamp = function (e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        },i.inherits(proto.stream.SetUseTimeStamp, o.Message),i.DEBUG && !COMPILED && (proto.stream.SetUseTimeStamp.displayName = "proto.stream.SetUseTimeStamp"),o.Message.GENERATE_TO_OBJECT && (proto.stream.SetUseTimeStamp.prototype.toObject = function (e) {
            return proto.stream.SetUseTimeStamp.toObject(e, this)
        }, proto.stream.SetUseTimeStamp.toObject = function (e, t) {
            var r = {
                gameid: o.Message.getFieldWithDefault(t, 1, 0),
                roomid: o.Message.getFieldWithDefault(t, 2, "0"),
                priority: o.Message.getFieldWithDefault(t, 3, 0),
                usetimestamp: o.Message.getFieldWithDefault(t, 4, !1)
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.SetUseTimeStamp.deserializeBinary = function (e) {
            var t = new o.BinaryReader(e), r = new proto.stream.SetUseTimeStamp;
            return proto.stream.SetUseTimeStamp.deserializeBinaryFromReader(r, t)
        },proto.stream.SetUseTimeStamp.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setGameid(r);
                        break;
                    case 2:
                        r = t.readUint64String();
                        e.setRoomid(r);
                        break;
                    case 3:
                        r = t.readUint32();
                        e.setPriority(r);
                        break;
                    case 4:
                        r = t.readBool();
                        e.setUsetimestamp(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.SetUseTimeStamp.prototype.serializeBinary = function () {
            var e = new o.BinaryWriter;
            return proto.stream.SetUseTimeStamp.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.SetUseTimeStamp.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getGameid()) && t.writeUint32(1, r), r = e.getRoomid(), 0 !== parseInt(r, 10) && t.writeUint64String(2, r), 0 !== (r = e.getPriority()) && t.writeUint32(3, r), (r = e.getUsetimestamp()) && t.writeBool(4, r)
        },proto.stream.SetUseTimeStamp.prototype.getGameid = function () {
            return o.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.SetUseTimeStamp.prototype.setGameid = function (e) {
            o.Message.setProto3IntField(this, 1, e)
        },proto.stream.SetUseTimeStamp.prototype.getRoomid = function () {
            return o.Message.getFieldWithDefault(this, 2, "0")
        },proto.stream.SetUseTimeStamp.prototype.setRoomid = function (e) {
            o.Message.setProto3StringIntField(this, 2, e)
        },proto.stream.SetUseTimeStamp.prototype.getPriority = function () {
            return o.Message.getFieldWithDefault(this, 3, 0)
        },proto.stream.SetUseTimeStamp.prototype.setPriority = function (e) {
            o.Message.setProto3IntField(this, 3, e)
        },proto.stream.SetUseTimeStamp.prototype.getUsetimestamp = function () {
            return o.Message.getFieldWithDefault(this, 4, !1)
        },proto.stream.SetUseTimeStamp.prototype.setUsetimestamp = function (e) {
            o.Message.setProto3BooleanField(this, 4, e)
        },proto.stream.SetUseTimeStampAck = function (e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        },i.inherits(proto.stream.SetUseTimeStampAck, o.Message),i.DEBUG && !COMPILED && (proto.stream.SetUseTimeStampAck.displayName = "proto.stream.SetUseTimeStampAck"),o.Message.GENERATE_TO_OBJECT && (proto.stream.SetUseTimeStampAck.prototype.toObject = function (e) {
            return proto.stream.SetUseTimeStampAck.toObject(e, this)
        }, proto.stream.SetUseTimeStampAck.toObject = function (e, t) {
            var r = {
                status: o.Message.getFieldWithDefault(t, 1, 0),
                timestamp: o.Message.getFieldWithDefault(t, 2, "0")
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.SetUseTimeStampAck.deserializeBinary = function (e) {
            var t = new o.BinaryReader(e), r = new proto.stream.SetUseTimeStampAck;
            return proto.stream.SetUseTimeStampAck.deserializeBinaryFromReader(r, t)
        },proto.stream.SetUseTimeStampAck.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setStatus(r);
                        break;
                    case 2:
                        r = t.readUint64String();
                        e.setTimestamp(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.SetUseTimeStampAck.prototype.serializeBinary = function () {
            var e = new o.BinaryWriter;
            return proto.stream.SetUseTimeStampAck.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.SetUseTimeStampAck.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getStatus()) && t.writeUint32(1, r), r = e.getTimestamp(), 0 !== parseInt(r, 10) && t.writeUint64String(2, r)
        },proto.stream.SetUseTimeStampAck.prototype.getStatus = function () {
            return o.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.SetUseTimeStampAck.prototype.setStatus = function (e) {
            o.Message.setProto3IntField(this, 1, e)
        },proto.stream.SetUseTimeStampAck.prototype.getTimestamp = function () {
            return o.Message.getFieldWithDefault(this, 2, "0")
        },proto.stream.SetUseTimeStampAck.prototype.setTimestamp = function (e) {
            o.Message.setProto3StringIntField(this, 2, e)
        },proto.stream.SetFrameSyncRate = function (e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        },i.inherits(proto.stream.SetFrameSyncRate, o.Message),i.DEBUG && !COMPILED && (proto.stream.SetFrameSyncRate.displayName = "proto.stream.SetFrameSyncRate"),o.Message.GENERATE_TO_OBJECT && (proto.stream.SetFrameSyncRate.prototype.toObject = function (e) {
            return proto.stream.SetFrameSyncRate.toObject(e, this)
        }, proto.stream.SetFrameSyncRate.toObject = function (e, t) {
            var r = {
                gameid: o.Message.getFieldWithDefault(t, 1, 0),
                roomid: o.Message.getFieldWithDefault(t, 2, "0"),
                priority: o.Message.getFieldWithDefault(t, 3, 0),
                framerate: o.Message.getFieldWithDefault(t, 4, 0),
                frameidx: o.Message.getFieldWithDefault(t, 5, 0),
                enablegs: o.Message.getFieldWithDefault(t, 6, 0),
                cacheframems: o.Message.getFieldWithDefault(t, 7, 0)
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.SetFrameSyncRate.deserializeBinary = function (e) {
            var t = new o.BinaryReader(e), r = new proto.stream.SetFrameSyncRate;
            return proto.stream.SetFrameSyncRate.deserializeBinaryFromReader(r, t)
        },proto.stream.SetFrameSyncRate.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setGameid(r);
                        break;
                    case 2:
                        r = t.readUint64String();
                        e.setRoomid(r);
                        break;
                    case 3:
                        r = t.readUint32();
                        e.setPriority(r);
                        break;
                    case 4:
                        r = t.readUint32();
                        e.setFramerate(r);
                        break;
                    case 5:
                        r = t.readUint32();
                        e.setFrameidx(r);
                        break;
                    case 6:
                        r = t.readUint32();
                        e.setEnablegs(r);
                        break;
                    case 7:
                        r = t.readInt32();
                        e.setCacheframems(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.SetFrameSyncRate.prototype.serializeBinary = function () {
            var e = new o.BinaryWriter;
            return proto.stream.SetFrameSyncRate.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.SetFrameSyncRate.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getGameid()) && t.writeUint32(1, r), r = e.getRoomid(), 0 !== parseInt(r, 10) && t.writeUint64String(2, r), 0 !== (r = e.getPriority()) && t.writeUint32(3, r), 0 !== (r = e.getFramerate()) && t.writeUint32(4, r), 0 !== (r = e.getFrameidx()) && t.writeUint32(5, r), 0 !== (r = e.getEnablegs()) && t.writeUint32(6, r), 0 !== (r = e.getCacheframems()) && t.writeInt32(7, r)
        },proto.stream.SetFrameSyncRate.prototype.getGameid = function () {
            return o.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.SetFrameSyncRate.prototype.setGameid = function (e) {
            o.Message.setProto3IntField(this, 1, e)
        },proto.stream.SetFrameSyncRate.prototype.getRoomid = function () {
            return o.Message.getFieldWithDefault(this, 2, "0")
        },proto.stream.SetFrameSyncRate.prototype.setRoomid = function (e) {
            o.Message.setProto3StringIntField(this, 2, e)
        },proto.stream.SetFrameSyncRate.prototype.getPriority = function () {
            return o.Message.getFieldWithDefault(this, 3, 0)
        },proto.stream.SetFrameSyncRate.prototype.setPriority = function (e) {
            o.Message.setProto3IntField(this, 3, e)
        },proto.stream.SetFrameSyncRate.prototype.getFramerate = function () {
            return o.Message.getFieldWithDefault(this, 4, 0)
        },proto.stream.SetFrameSyncRate.prototype.setFramerate = function (e) {
            o.Message.setProto3IntField(this, 4, e)
        },proto.stream.SetFrameSyncRate.prototype.getFrameidx = function () {
            return o.Message.getFieldWithDefault(this, 5, 0)
        },proto.stream.SetFrameSyncRate.prototype.setFrameidx = function (e) {
            o.Message.setProto3IntField(this, 5, e)
        },proto.stream.SetFrameSyncRate.prototype.getEnablegs = function () {
            return o.Message.getFieldWithDefault(this, 6, 0)
        },proto.stream.SetFrameSyncRate.prototype.setEnablegs = function (e) {
            o.Message.setProto3IntField(this, 6, e)
        },proto.stream.SetFrameSyncRate.prototype.getCacheframems = function () {
            return o.Message.getFieldWithDefault(this, 7, 0)
        },proto.stream.SetFrameSyncRate.prototype.setCacheframems = function (e) {
            o.Message.setProto3IntField(this, 7, e)
        },proto.stream.SetFrameSyncRateAck = function (e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        },i.inherits(proto.stream.SetFrameSyncRateAck, o.Message),i.DEBUG && !COMPILED && (proto.stream.SetFrameSyncRateAck.displayName = "proto.stream.SetFrameSyncRateAck"),o.Message.GENERATE_TO_OBJECT && (proto.stream.SetFrameSyncRateAck.prototype.toObject = function (e) {
            return proto.stream.SetFrameSyncRateAck.toObject(e, this)
        }, proto.stream.SetFrameSyncRateAck.toObject = function (e, t) {
            var r = {status: o.Message.getFieldWithDefault(t, 1, 0)};
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.SetFrameSyncRateAck.deserializeBinary = function (e) {
            var t = new o.BinaryReader(e), r = new proto.stream.SetFrameSyncRateAck;
            return proto.stream.SetFrameSyncRateAck.deserializeBinaryFromReader(r, t)
        },proto.stream.SetFrameSyncRateAck.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setStatus(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.SetFrameSyncRateAck.prototype.serializeBinary = function () {
            var e = new o.BinaryWriter;
            return proto.stream.SetFrameSyncRateAck.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.SetFrameSyncRateAck.serializeBinaryToWriter = function (e, t) {
            var r;
            0 !== (r = e.getStatus()) && t.writeUint32(1, r)
        },proto.stream.SetFrameSyncRateAck.prototype.getStatus = function () {
            return o.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.SetFrameSyncRateAck.prototype.setStatus = function (e) {
            o.Message.setProto3IntField(this, 1, e)
        },proto.stream.SetFrameSyncRateNotify = function (e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        },i.inherits(proto.stream.SetFrameSyncRateNotify, o.Message),i.DEBUG && !COMPILED && (proto.stream.SetFrameSyncRateNotify.displayName = "proto.stream.SetFrameSyncRateNotify"),o.Message.GENERATE_TO_OBJECT && (proto.stream.SetFrameSyncRateNotify.prototype.toObject = function (e) {
            return proto.stream.SetFrameSyncRateNotify.toObject(e, this)
        }, proto.stream.SetFrameSyncRateNotify.toObject = function (e, t) {
            var r = {
                priority: o.Message.getFieldWithDefault(t, 1, 0),
                framerate: o.Message.getFieldWithDefault(t, 2, 0),
                frameidx: o.Message.getFieldWithDefault(t, 3, 0),
                timestamp: o.Message.getFieldWithDefault(t, 4, "0"),
                enablegs: o.Message.getFieldWithDefault(t, 5, 0),
                cacheframems: o.Message.getFieldWithDefault(t, 6, 0)
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.SetFrameSyncRateNotify.deserializeBinary = function (e) {
            var t = new o.BinaryReader(e), r = new proto.stream.SetFrameSyncRateNotify;
            return proto.stream.SetFrameSyncRateNotify.deserializeBinaryFromReader(r, t)
        },proto.stream.SetFrameSyncRateNotify.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setPriority(r);
                        break;
                    case 2:
                        r = t.readUint32();
                        e.setFramerate(r);
                        break;
                    case 3:
                        r = t.readUint32();
                        e.setFrameidx(r);
                        break;
                    case 4:
                        r = t.readUint64String();
                        e.setTimestamp(r);
                        break;
                    case 5:
                        r = t.readUint32();
                        e.setEnablegs(r);
                        break;
                    case 6:
                        r = t.readInt32();
                        e.setCacheframems(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.SetFrameSyncRateNotify.prototype.serializeBinary = function () {
            var e = new o.BinaryWriter;
            return proto.stream.SetFrameSyncRateNotify.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.SetFrameSyncRateNotify.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getPriority()) && t.writeUint32(1, r), 0 !== (r = e.getFramerate()) && t.writeUint32(2, r), 0 !== (r = e.getFrameidx()) && t.writeUint32(3, r), r = e.getTimestamp(), 0 !== parseInt(r, 10) && t.writeUint64String(4, r), 0 !== (r = e.getEnablegs()) && t.writeUint32(5, r), 0 !== (r = e.getCacheframems()) && t.writeInt32(6, r)
        },proto.stream.SetFrameSyncRateNotify.prototype.getPriority = function () {
            return o.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.SetFrameSyncRateNotify.prototype.setPriority = function (e) {
            o.Message.setProto3IntField(this, 1, e)
        },proto.stream.SetFrameSyncRateNotify.prototype.getFramerate = function () {
            return o.Message.getFieldWithDefault(this, 2, 0)
        },proto.stream.SetFrameSyncRateNotify.prototype.setFramerate = function (e) {
            o.Message.setProto3IntField(this, 2, e)
        },proto.stream.SetFrameSyncRateNotify.prototype.getFrameidx = function () {
            return o.Message.getFieldWithDefault(this, 3, 0)
        },proto.stream.SetFrameSyncRateNotify.prototype.setFrameidx = function (e) {
            o.Message.setProto3IntField(this, 3, e)
        },proto.stream.SetFrameSyncRateNotify.prototype.getTimestamp = function () {
            return o.Message.getFieldWithDefault(this, 4, "0")
        },proto.stream.SetFrameSyncRateNotify.prototype.setTimestamp = function (e) {
            o.Message.setProto3StringIntField(this, 4, e)
        },proto.stream.SetFrameSyncRateNotify.prototype.getEnablegs = function () {
            return o.Message.getFieldWithDefault(this, 5, 0)
        },proto.stream.SetFrameSyncRateNotify.prototype.setEnablegs = function (e) {
            o.Message.setProto3IntField(this, 5, e)
        },proto.stream.SetFrameSyncRateNotify.prototype.getCacheframems = function () {
            return o.Message.getFieldWithDefault(this, 6, 0)
        },proto.stream.SetFrameSyncRateNotify.prototype.setCacheframems = function (e) {
            o.Message.setProto3IntField(this, 6, e)
        },proto.stream.FrameBroadcast = function (e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        },i.inherits(proto.stream.FrameBroadcast, o.Message),i.DEBUG && !COMPILED && (proto.stream.FrameBroadcast.displayName = "proto.stream.FrameBroadcast"),o.Message.GENERATE_TO_OBJECT && (proto.stream.FrameBroadcast.prototype.toObject = function (e) {
            return proto.stream.FrameBroadcast.toObject(e, this)
        }, proto.stream.FrameBroadcast.toObject = function (e, t) {
            var r = {
                roomid: o.Message.getFieldWithDefault(t, 1, "0"),
                priority: o.Message.getFieldWithDefault(t, 2, 0),
                cpproto: t.getCpproto_asB64(),
                operation: o.Message.getFieldWithDefault(t, 4, 0)
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.FrameBroadcast.deserializeBinary = function (e) {
            var t = new o.BinaryReader(e), r = new proto.stream.FrameBroadcast;
            return proto.stream.FrameBroadcast.deserializeBinaryFromReader(r, t)
        },proto.stream.FrameBroadcast.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint64String();
                        e.setRoomid(r);
                        break;
                    case 2:
                        r = t.readUint32();
                        e.setPriority(r);
                        break;
                    case 3:
                        r = t.readBytes();
                        e.setCpproto(r);
                        break;
                    case 4:
                        r = t.readInt32();
                        e.setOperation(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.FrameBroadcast.prototype.serializeBinary = function () {
            var e = new o.BinaryWriter;
            return proto.stream.FrameBroadcast.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.FrameBroadcast.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            r = e.getRoomid(), 0 !== parseInt(r, 10) && t.writeUint64String(1, r), 0 !== (r = e.getPriority()) && t.writeUint32(2, r), 0 < (r = e.getCpproto_asU8()).length && t.writeBytes(3, r), 0 !== (r = e.getOperation()) && t.writeInt32(4, r)
        },proto.stream.FrameBroadcast.prototype.getRoomid = function () {
            return o.Message.getFieldWithDefault(this, 1, "0")
        },proto.stream.FrameBroadcast.prototype.setRoomid = function (e) {
            o.Message.setProto3StringIntField(this, 1, e)
        },proto.stream.FrameBroadcast.prototype.getPriority = function () {
            return o.Message.getFieldWithDefault(this, 2, 0)
        },proto.stream.FrameBroadcast.prototype.setPriority = function (e) {
            o.Message.setProto3IntField(this, 2, e)
        },proto.stream.FrameBroadcast.prototype.getCpproto = function () {
            return o.Message.getFieldWithDefault(this, 3, "")
        },proto.stream.FrameBroadcast.prototype.getCpproto_asB64 = function () {
            return o.Message.bytesAsB64(this.getCpproto())
        },proto.stream.FrameBroadcast.prototype.getCpproto_asU8 = function () {
            return o.Message.bytesAsU8(this.getCpproto())
        },proto.stream.FrameBroadcast.prototype.setCpproto = function (e) {
            o.Message.setProto3BytesField(this, 3, e)
        },proto.stream.FrameBroadcast.prototype.getOperation = function () {
            return o.Message.getFieldWithDefault(this, 4, 0)
        },proto.stream.FrameBroadcast.prototype.setOperation = function (e) {
            o.Message.setProto3IntField(this, 4, e)
        },proto.stream.FrameBroadcastAck = function (e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        },i.inherits(proto.stream.FrameBroadcastAck, o.Message),i.DEBUG && !COMPILED && (proto.stream.FrameBroadcastAck.displayName = "proto.stream.FrameBroadcastAck"),o.Message.GENERATE_TO_OBJECT && (proto.stream.FrameBroadcastAck.prototype.toObject = function (e) {
            return proto.stream.FrameBroadcastAck.toObject(e, this)
        }, proto.stream.FrameBroadcastAck.toObject = function (e, t) {
            var r = {status: o.Message.getFieldWithDefault(t, 1, 0)};
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.FrameBroadcastAck.deserializeBinary = function (e) {
            var t = new o.BinaryReader(e), r = new proto.stream.FrameBroadcastAck;
            return proto.stream.FrameBroadcastAck.deserializeBinaryFromReader(r, t)
        },proto.stream.FrameBroadcastAck.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setStatus(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.FrameBroadcastAck.prototype.serializeBinary = function () {
            var e = new o.BinaryWriter;
            return proto.stream.FrameBroadcastAck.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.FrameBroadcastAck.serializeBinaryToWriter = function (e, t) {
            var r;
            0 !== (r = e.getStatus()) && t.writeUint32(1, r)
        },proto.stream.FrameBroadcastAck.prototype.getStatus = function () {
            return o.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.FrameBroadcastAck.prototype.setStatus = function (e) {
            o.Message.setProto3IntField(this, 1, e)
        },proto.stream.FrameDataNotify = function (e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        },i.inherits(proto.stream.FrameDataNotify, o.Message),i.DEBUG && !COMPILED && (proto.stream.FrameDataNotify.displayName = "proto.stream.FrameDataNotify"),o.Message.GENERATE_TO_OBJECT && (proto.stream.FrameDataNotify.prototype.toObject = function (e) {
            return proto.stream.FrameDataNotify.toObject(e, this)
        }, proto.stream.FrameDataNotify.toObject = function (e, t) {
            var r = {
                srcuid: o.Message.getFieldWithDefault(t, 1, 0),
                priority: o.Message.getFieldWithDefault(t, 2, 0),
                cpproto: t.getCpproto_asB64(),
                timestamp: o.Message.getFieldWithDefault(t, 4, "0"),
                frameidx: o.Message.getFieldWithDefault(t, 5, 0)
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.FrameDataNotify.deserializeBinary = function (e) {
            var t = new o.BinaryReader(e), r = new proto.stream.FrameDataNotify;
            return proto.stream.FrameDataNotify.deserializeBinaryFromReader(r, t)
        },proto.stream.FrameDataNotify.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setSrcuid(r);
                        break;
                    case 2:
                        r = t.readUint32();
                        e.setPriority(r);
                        break;
                    case 3:
                        r = t.readBytes();
                        e.setCpproto(r);
                        break;
                    case 4:
                        r = t.readUint64String();
                        e.setTimestamp(r);
                        break;
                    case 5:
                        r = t.readUint32();
                        e.setFrameidx(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.FrameDataNotify.prototype.serializeBinary = function () {
            var e = new o.BinaryWriter;
            return proto.stream.FrameDataNotify.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.FrameDataNotify.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getSrcuid()) && t.writeUint32(1, r), 0 !== (r = e.getPriority()) && t.writeUint32(2, r), 0 < (r = e.getCpproto_asU8()).length && t.writeBytes(3, r), r = e.getTimestamp(), 0 !== parseInt(r, 10) && t.writeUint64String(4, r), 0 !== (r = e.getFrameidx()) && t.writeUint32(5, r)
        },proto.stream.FrameDataNotify.prototype.getSrcuid = function () {
            return o.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.FrameDataNotify.prototype.setSrcuid = function (e) {
            o.Message.setProto3IntField(this, 1, e)
        },proto.stream.FrameDataNotify.prototype.getPriority = function () {
            return o.Message.getFieldWithDefault(this, 2, 0)
        },proto.stream.FrameDataNotify.prototype.setPriority = function (e) {
            o.Message.setProto3IntField(this, 2, e)
        },proto.stream.FrameDataNotify.prototype.getCpproto = function () {
            return o.Message.getFieldWithDefault(this, 3, "")
        },proto.stream.FrameDataNotify.prototype.getCpproto_asB64 = function () {
            return o.Message.bytesAsB64(this.getCpproto())
        },proto.stream.FrameDataNotify.prototype.getCpproto_asU8 = function () {
            return o.Message.bytesAsU8(this.getCpproto())
        },proto.stream.FrameDataNotify.prototype.setCpproto = function (e) {
            o.Message.setProto3BytesField(this, 3, e)
        },proto.stream.FrameDataNotify.prototype.getTimestamp = function () {
            return o.Message.getFieldWithDefault(this, 4, "0")
        },proto.stream.FrameDataNotify.prototype.setTimestamp = function (e) {
            o.Message.setProto3StringIntField(this, 4, e)
        },proto.stream.FrameDataNotify.prototype.getFrameidx = function () {
            return o.Message.getFieldWithDefault(this, 5, 0)
        },proto.stream.FrameDataNotify.prototype.setFrameidx = function (e) {
            o.Message.setProto3IntField(this, 5, e)
        },proto.stream.FrameSyncNotify = function (e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        },i.inherits(proto.stream.FrameSyncNotify, o.Message),i.DEBUG && !COMPILED && (proto.stream.FrameSyncNotify.displayName = "proto.stream.FrameSyncNotify"),o.Message.GENERATE_TO_OBJECT && (proto.stream.FrameSyncNotify.prototype.toObject = function (e) {
            return proto.stream.FrameSyncNotify.toObject(e, this)
        }, proto.stream.FrameSyncNotify.toObject = function (e, t) {
            var r = {
                priority: o.Message.getFieldWithDefault(t, 1, 0),
                lastidx: o.Message.getFieldWithDefault(t, 2, 0),
                nextidx: o.Message.getFieldWithDefault(t, 3, 0),
                startts: o.Message.getFieldWithDefault(t, 4, "0"),
                endts: o.Message.getFieldWithDefault(t, 5, "0"),
                timestamp: o.Message.getFieldWithDefault(t, 6, "0")
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.FrameSyncNotify.deserializeBinary = function (e) {
            var t = new o.BinaryReader(e), r = new proto.stream.FrameSyncNotify;
            return proto.stream.FrameSyncNotify.deserializeBinaryFromReader(r, t)
        },proto.stream.FrameSyncNotify.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setPriority(r);
                        break;
                    case 2:
                        r = t.readUint32();
                        e.setLastidx(r);
                        break;
                    case 3:
                        r = t.readUint32();
                        e.setNextidx(r);
                        break;
                    case 4:
                        r = t.readUint64String();
                        e.setStartts(r);
                        break;
                    case 5:
                        r = t.readUint64String();
                        e.setEndts(r);
                        break;
                    case 6:
                        r = t.readUint64String();
                        e.setTimestamp(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.FrameSyncNotify.prototype.serializeBinary = function () {
            var e = new o.BinaryWriter;
            return proto.stream.FrameSyncNotify.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.FrameSyncNotify.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getPriority()) && t.writeUint32(1, r), 0 !== (r = e.getLastidx()) && t.writeUint32(2, r), 0 !== (r = e.getNextidx()) && t.writeUint32(3, r), r = e.getStartts(), 0 !== parseInt(r, 10) && t.writeUint64String(4, r), r = e.getEndts(), 0 !== parseInt(r, 10) && t.writeUint64String(5, r), r = e.getTimestamp(), 0 !== parseInt(r, 10) && t.writeUint64String(6, r)
        },proto.stream.FrameSyncNotify.prototype.getPriority = function () {
            return o.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.FrameSyncNotify.prototype.setPriority = function (e) {
            o.Message.setProto3IntField(this, 1, e)
        },proto.stream.FrameSyncNotify.prototype.getLastidx = function () {
            return o.Message.getFieldWithDefault(this, 2, 0)
        },proto.stream.FrameSyncNotify.prototype.setLastidx = function (e) {
            o.Message.setProto3IntField(this, 2, e)
        },proto.stream.FrameSyncNotify.prototype.getNextidx = function () {
            return o.Message.getFieldWithDefault(this, 3, 0)
        },proto.stream.FrameSyncNotify.prototype.setNextidx = function (e) {
            o.Message.setProto3IntField(this, 3, e)
        },proto.stream.FrameSyncNotify.prototype.getStartts = function () {
            return o.Message.getFieldWithDefault(this, 4, "0")
        },proto.stream.FrameSyncNotify.prototype.setStartts = function (e) {
            o.Message.setProto3StringIntField(this, 4, e)
        },proto.stream.FrameSyncNotify.prototype.getEndts = function () {
            return o.Message.getFieldWithDefault(this, 5, "0")
        },proto.stream.FrameSyncNotify.prototype.setEndts = function (e) {
            o.Message.setProto3StringIntField(this, 5, e)
        },proto.stream.FrameSyncNotify.prototype.getTimestamp = function () {
            return o.Message.getFieldWithDefault(this, 6, "0")
        },proto.stream.FrameSyncNotify.prototype.setTimestamp = function (e) {
            o.Message.setProto3StringIntField(this, 6, e)
        },proto.stream.GetCacheData = function (e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        },i.inherits(proto.stream.GetCacheData, o.Message),i.DEBUG && !COMPILED && (proto.stream.GetCacheData.displayName = "proto.stream.GetCacheData"),o.Message.GENERATE_TO_OBJECT && (proto.stream.GetCacheData.prototype.toObject = function (e) {
            return proto.stream.GetCacheData.toObject(e, this)
        }, proto.stream.GetCacheData.toObject = function (e, t) {
            var r = {
                gameid: o.Message.getFieldWithDefault(t, 1, 0),
                roomid: o.Message.getFieldWithDefault(t, 2, "0"),
                cacheframems: o.Message.getFieldWithDefault(t, 3, 0)
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.GetCacheData.deserializeBinary = function (e) {
            var t = new o.BinaryReader(e), r = new proto.stream.GetCacheData;
            return proto.stream.GetCacheData.deserializeBinaryFromReader(r, t)
        },proto.stream.GetCacheData.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setGameid(r);
                        break;
                    case 2:
                        r = t.readUint64String();
                        e.setRoomid(r);
                        break;
                    case 3:
                        r = t.readInt32();
                        e.setCacheframems(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.GetCacheData.prototype.serializeBinary = function () {
            var e = new o.BinaryWriter;
            return proto.stream.GetCacheData.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.GetCacheData.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getGameid()) && t.writeUint32(1, r), r = e.getRoomid(), 0 !== parseInt(r, 10) && t.writeUint64String(2, r), 0 !== (r = e.getCacheframems()) && t.writeInt32(3, r)
        },proto.stream.GetCacheData.prototype.getGameid = function () {
            return o.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.GetCacheData.prototype.setGameid = function (e) {
            o.Message.setProto3IntField(this, 1, e)
        },proto.stream.GetCacheData.prototype.getRoomid = function () {
            return o.Message.getFieldWithDefault(this, 2, "0")
        },proto.stream.GetCacheData.prototype.setRoomid = function (e) {
            o.Message.setProto3StringIntField(this, 2, e)
        },proto.stream.GetCacheData.prototype.getCacheframems = function () {
            return o.Message.getFieldWithDefault(this, 3, 0)
        },proto.stream.GetCacheData.prototype.setCacheframems = function (e) {
            o.Message.setProto3IntField(this, 3, e)
        },proto.stream.GetCacheDataAck = function (e) {
            o.Message.initialize(this, e, 0, -1, null, null)
        },i.inherits(proto.stream.GetCacheDataAck, o.Message),i.DEBUG && !COMPILED && (proto.stream.GetCacheDataAck.displayName = "proto.stream.GetCacheDataAck"),o.Message.GENERATE_TO_OBJECT && (proto.stream.GetCacheDataAck.prototype.toObject = function (e) {
            return proto.stream.GetCacheDataAck.toObject(e, this)
        }, proto.stream.GetCacheDataAck.toObject = function (e, t) {
            var r = {
                status: o.Message.getFieldWithDefault(t, 1, 0),
                framecount: o.Message.getFieldWithDefault(t, 2, 0),
                msgcount: o.Message.getFieldWithDefault(t, 3, 0)
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.GetCacheDataAck.deserializeBinary = function (e) {
            var t = new o.BinaryReader(e), r = new proto.stream.GetCacheDataAck;
            return proto.stream.GetCacheDataAck.deserializeBinaryFromReader(r, t)
        },proto.stream.GetCacheDataAck.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setStatus(r);
                        break;
                    case 2:
                        r = t.readUint32();
                        e.setFramecount(r);
                        break;
                    case 3:
                        r = t.readUint32();
                        e.setMsgcount(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.GetCacheDataAck.prototype.serializeBinary = function () {
            var e = new o.BinaryWriter;
            return proto.stream.GetCacheDataAck.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.GetCacheDataAck.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getStatus()) && t.writeUint32(1, r), 0 !== (r = e.getFramecount()) && t.writeUint32(2, r), 0 !== (r = e.getMsgcount()) && t.writeUint32(3, r)
        },proto.stream.GetCacheDataAck.prototype.getStatus = function () {
            return o.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.GetCacheDataAck.prototype.setStatus = function (e) {
            o.Message.setProto3IntField(this, 1, e)
        },proto.stream.GetCacheDataAck.prototype.getFramecount = function () {
            return o.Message.getFieldWithDefault(this, 2, 0)
        },proto.stream.GetCacheDataAck.prototype.setFramecount = function (e) {
            o.Message.setProto3IntField(this, 2, e)
        },proto.stream.GetCacheDataAck.prototype.getMsgcount = function () {
            return o.Message.getFieldWithDefault(this, 3, 0)
        },proto.stream.GetCacheDataAck.prototype.setMsgcount = function (e) {
            o.Message.setProto3IntField(this, 3, e)
        },proto.stream.SDKHotelCmdID = {
            INVALIDSDKCMD: 0,
            CHECKINCMDID: 1401,
            CHECKINACKCMDID: 1402,
            HEARTBEATCMDID: 1403,
            HEARTBEATACKCMDID: 1404,
            BROADCASTCMDID: 1405,
            BROADCASTACKCMDID: 1406,
            NOTIFYCMDID: 1408,
            CHECKINNOTIFYCMDID: 1410,
            SUBSCRIBECMDID: 1411,
            SUBSCRIBEACKCMDID: 1412,
            PUBLISHCMDID: 1413,
            PUBLISHACKCMDID: 1414,
            PUBLISHNOTIFYCMDID: 1416,
            SETUSETIMESTAMPCMDID: 1417,
            SETUSETIMESTAMPACKCMDID: 1418,
            SETFRAMESYNCRATECMDID: 1419,
            SETFRAMESYNCRATEACKCMDID: 1420,
            SETFRAMESYNCRATENOTIFYCMDID: 1422,
            FRAMEBROADCASTCMDID: 1423,
            FRAMEBROADCASTACKCMDID: 1424,
            FRAMEDATANOTIFYCMDID: 1426,
            FRAMESYNCNOTIFYCMDID: 1428,
            GETCACHEDATACMDID: 1429,
            GETCACHEDATACMDIDACKCMDID: 1430
        },i.object.extend(r, proto.stream)
    }, {"google-protobuf": 8}], 10: [function (e, t, r) {
        var i = e("google-protobuf"), o = i, s = window, a = e("./common_pb.js");
        o.exportSymbol("proto.stream.EnterLiveRoom", null, s), o.exportSymbol("proto.stream.EnterLiveRoomAck", null, s), o.exportSymbol("proto.stream.EnterLiveRoomNotify", null, s), o.exportSymbol("proto.stream.ExitLiveRoomNotify", null, s), o.exportSymbol("proto.stream.LiveBroadcast", null, s), o.exportSymbol("proto.stream.LiveBroadcastAck", null, s), o.exportSymbol("proto.stream.LiveBroadcastNotify", null, s), o.exportSymbol("proto.stream.LiveFrameDataNotify", null, s), o.exportSymbol("proto.stream.LiveFrameSyncNotify", null, s), o.exportSymbol("proto.stream.LiveHeartbeat", null, s), o.exportSymbol("proto.stream.LiveHeartbeatAck", null, s), o.exportSymbol("proto.stream.LiveOverNotify", null, s), o.exportSymbol("proto.stream.SDKWatchCmdID", null, s), o.exportSymbol("proto.stream.SetLiveOffset", null, s), o.exportSymbol("proto.stream.SetLiveOffsetAck", null, s), proto.stream.EnterLiveRoom = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.stream.EnterLiveRoom, i.Message), o.DEBUG && !COMPILED && (proto.stream.EnterLiveRoom.displayName = "proto.stream.EnterLiveRoom"), i.Message.GENERATE_TO_OBJECT && (proto.stream.EnterLiveRoom.prototype.toObject = function (e) {
            return proto.stream.EnterLiveRoom.toObject(e, this)
        }, proto.stream.EnterLiveRoom.toObject = function (e, t) {
            var r = {
                gameid: i.Message.getFieldWithDefault(t, 1, 0),
                roomid: i.Message.getFieldWithDefault(t, 2, "0"),
                userid: i.Message.getFieldWithDefault(t, 3, 0),
                userprofile: t.getUserprofile_asB64(),
                bookid: i.Message.getFieldWithDefault(t, 5, ""),
                ticket: i.Message.getFieldWithDefault(t, 6, ""),
                setid: i.Message.getFieldWithDefault(t, 7, 0)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.stream.EnterLiveRoom.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.EnterLiveRoom;
            return proto.stream.EnterLiveRoom.deserializeBinaryFromReader(r, t)
        }, proto.stream.EnterLiveRoom.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setGameid(r);
                        break;
                    case 2:
                        r = t.readUint64String();
                        e.setRoomid(r);
                        break;
                    case 3:
                        r = t.readUint32();
                        e.setUserid(r);
                        break;
                    case 4:
                        r = t.readBytes();
                        e.setUserprofile(r);
                        break;
                    case 5:
                        r = t.readString();
                        e.setBookid(r);
                        break;
                    case 6:
                        r = t.readString();
                        e.setTicket(r);
                        break;
                    case 7:
                        r = t.readUint32();
                        e.setSetid(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.stream.EnterLiveRoom.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.EnterLiveRoom.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.stream.EnterLiveRoom.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getGameid()) && t.writeUint32(1, r), r = e.getRoomid(), 0 !== parseInt(r, 10) && t.writeUint64String(2, r), 0 !== (r = e.getUserid()) && t.writeUint32(3, r), 0 < (r = e.getUserprofile_asU8()).length && t.writeBytes(4, r), 0 < (r = e.getBookid()).length && t.writeString(5, r), 0 < (r = e.getTicket()).length && t.writeString(6, r), 0 !== (r = e.getSetid()) && t.writeUint32(7, r)
        }, proto.stream.EnterLiveRoom.prototype.getGameid = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        }, proto.stream.EnterLiveRoom.prototype.setGameid = function (e) {
            i.Message.setProto3IntField(this, 1, e)
        }, proto.stream.EnterLiveRoom.prototype.getRoomid = function () {
            return i.Message.getFieldWithDefault(this, 2, "0")
        }, proto.stream.EnterLiveRoom.prototype.setRoomid = function (e) {
            i.Message.setProto3StringIntField(this, 2, e)
        }, proto.stream.EnterLiveRoom.prototype.getUserid = function () {
            return i.Message.getFieldWithDefault(this, 3, 0)
        }, proto.stream.EnterLiveRoom.prototype.setUserid = function (e) {
            i.Message.setProto3IntField(this, 3, e)
        }, proto.stream.EnterLiveRoom.prototype.getUserprofile = function () {
            return i.Message.getFieldWithDefault(this, 4, "")
        }, proto.stream.EnterLiveRoom.prototype.getUserprofile_asB64 = function () {
            return i.Message.bytesAsB64(this.getUserprofile())
        }, proto.stream.EnterLiveRoom.prototype.getUserprofile_asU8 = function () {
            return i.Message.bytesAsU8(this.getUserprofile())
        }, proto.stream.EnterLiveRoom.prototype.setUserprofile = function (e) {
            i.Message.setProto3BytesField(this, 4, e)
        }, proto.stream.EnterLiveRoom.prototype.getBookid = function () {
            return i.Message.getFieldWithDefault(this, 5, "")
        }, proto.stream.EnterLiveRoom.prototype.setBookid = function (e) {
            i.Message.setProto3StringField(this, 5, e)
        }, proto.stream.EnterLiveRoom.prototype.getTicket = function () {
            return i.Message.getFieldWithDefault(this, 6, "")
        }, proto.stream.EnterLiveRoom.prototype.setTicket = function (e) {
            i.Message.setProto3StringField(this, 6, e)
        }, proto.stream.EnterLiveRoom.prototype.getSetid = function () {
            return i.Message.getFieldWithDefault(this, 7, 0)
        }, proto.stream.EnterLiveRoom.prototype.setSetid = function (e) {
            i.Message.setProto3IntField(this, 7, e)
        }, proto.stream.EnterLiveRoomAck = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.stream.EnterLiveRoomAck, i.Message), o.DEBUG && !COMPILED && (proto.stream.EnterLiveRoomAck.displayName = "proto.stream.EnterLiveRoomAck"), i.Message.GENERATE_TO_OBJECT && (proto.stream.EnterLiveRoomAck.prototype.toObject = function (e) {
            return proto.stream.EnterLiveRoomAck.toObject(e, this)
        }, proto.stream.EnterLiveRoomAck.toObject = function (e, t) {
            var r, o = {
                status: i.Message.getFieldWithDefault(t, 1, 0),
                roomstatus: i.Message.getFieldWithDefault(t, 2, 0),
                reserved: i.Message.getFieldWithDefault(t, 3, ""),
                wathchinfo: (r = t.getWathchinfo()) && a.LiveWatchInfo.toObject(e, r)
            };
            return e && (o.$jspbMessageInstance = t), o
        }), proto.stream.EnterLiveRoomAck.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.EnterLiveRoomAck;
            return proto.stream.EnterLiveRoomAck.deserializeBinaryFromReader(r, t)
        }, proto.stream.EnterLiveRoomAck.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setStatus(r);
                        break;
                    case 2:
                        r = t.readUint32();
                        e.setRoomstatus(r);
                        break;
                    case 3:
                        r = t.readString();
                        e.setReserved(r);
                        break;
                    case 4:
                        r = new a.LiveWatchInfo;
                        t.readMessage(r, a.LiveWatchInfo.deserializeBinaryFromReader), e.setWathchinfo(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.stream.EnterLiveRoomAck.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.EnterLiveRoomAck.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.stream.EnterLiveRoomAck.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getStatus()) && t.writeUint32(1, r), 0 !== (r = e.getRoomstatus()) && t.writeUint32(2, r), 0 < (r = e.getReserved()).length && t.writeString(3, r), null != (r = e.getWathchinfo()) && t.writeMessage(4, r, a.LiveWatchInfo.serializeBinaryToWriter)
        }, proto.stream.EnterLiveRoomAck.prototype.getStatus = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        }, proto.stream.EnterLiveRoomAck.prototype.setStatus = function (e) {
            i.Message.setProto3IntField(this, 1, e)
        }, proto.stream.EnterLiveRoomAck.prototype.getRoomstatus = function () {
            return i.Message.getFieldWithDefault(this, 2, 0)
        }, proto.stream.EnterLiveRoomAck.prototype.setRoomstatus = function (e) {
            i.Message.setProto3IntField(this, 2, e)
        }, proto.stream.EnterLiveRoomAck.prototype.getReserved = function () {
            return i.Message.getFieldWithDefault(this, 3, "")
        }, proto.stream.EnterLiveRoomAck.prototype.setReserved = function (e) {
            i.Message.setProto3StringField(this, 3, e)
        }, proto.stream.EnterLiveRoomAck.prototype.getWathchinfo = function () {
            return i.Message.getWrapperField(this, a.LiveWatchInfo, 4)
        }, proto.stream.EnterLiveRoomAck.prototype.setWathchinfo = function (e) {
            i.Message.setWrapperField(this, 4, e)
        }, proto.stream.EnterLiveRoomAck.prototype.clearWathchinfo = function () {
            this.setWathchinfo(void 0)
        }, proto.stream.EnterLiveRoomAck.prototype.hasWathchinfo = function () {
            return null != i.Message.getField(this, 4)
        }, proto.stream.LiveHeartbeat = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.stream.LiveHeartbeat, i.Message), o.DEBUG && !COMPILED && (proto.stream.LiveHeartbeat.displayName = "proto.stream.LiveHeartbeat"), i.Message.GENERATE_TO_OBJECT && (proto.stream.LiveHeartbeat.prototype.toObject = function (e) {
            return proto.stream.LiveHeartbeat.toObject(e, this)
        }, proto.stream.LiveHeartbeat.toObject = function (e, t) {
            var r = {
                gameid: i.Message.getFieldWithDefault(t, 1, 0),
                roomid: i.Message.getFieldWithDefault(t, 2, "0"),
                userid: i.Message.getFieldWithDefault(t, 3, 0)
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.stream.LiveHeartbeat.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.LiveHeartbeat;
            return proto.stream.LiveHeartbeat.deserializeBinaryFromReader(r, t)
        }, proto.stream.LiveHeartbeat.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setGameid(r);
                        break;
                    case 2:
                        r = t.readUint64String();
                        e.setRoomid(r);
                        break;
                    case 3:
                        r = t.readUint32();
                        e.setUserid(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.stream.LiveHeartbeat.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.LiveHeartbeat.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.stream.LiveHeartbeat.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getGameid()) && t.writeUint32(1, r), r = e.getRoomid(), 0 !== parseInt(r, 10) && t.writeUint64String(2, r), 0 !== (r = e.getUserid()) && t.writeUint32(3, r)
        }, proto.stream.LiveHeartbeat.prototype.getGameid = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        }, proto.stream.LiveHeartbeat.prototype.setGameid = function (e) {
            i.Message.setProto3IntField(this, 1, e)
        }, proto.stream.LiveHeartbeat.prototype.getRoomid = function () {
            return i.Message.getFieldWithDefault(this, 2, "0")
        }, proto.stream.LiveHeartbeat.prototype.setRoomid = function (e) {
            i.Message.setProto3StringIntField(this, 2, e)
        }, proto.stream.LiveHeartbeat.prototype.getUserid = function () {
            return i.Message.getFieldWithDefault(this, 3, 0)
        }, proto.stream.LiveHeartbeat.prototype.setUserid = function (e) {
            i.Message.setProto3IntField(this, 3, e)
        }, proto.stream.LiveHeartbeatAck = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        }, o.inherits(proto.stream.LiveHeartbeatAck, i.Message), o.DEBUG && !COMPILED && (proto.stream.LiveHeartbeatAck.displayName = "proto.stream.LiveHeartbeatAck"), i.Message.GENERATE_TO_OBJECT && (proto.stream.LiveHeartbeatAck.prototype.toObject = function (e) {
            return proto.stream.LiveHeartbeatAck.toObject(e, this)
        }, proto.stream.LiveHeartbeatAck.toObject = function (e, t) {
            var r = {status: i.Message.getFieldWithDefault(t, 1, 0)};
            return e && (r.$jspbMessageInstance = t), r
        }), proto.stream.LiveHeartbeatAck.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.LiveHeartbeatAck;
            return proto.stream.LiveHeartbeatAck.deserializeBinaryFromReader(r, t)
        }, proto.stream.LiveHeartbeatAck.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setStatus(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.stream.LiveHeartbeatAck.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.LiveHeartbeatAck.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.stream.LiveHeartbeatAck.serializeBinaryToWriter = function (e, t) {
            var r;
            0 !== (r = e.getStatus()) && t.writeUint32(1, r)
        }, proto.stream.LiveHeartbeatAck.prototype.getStatus = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        }, proto.stream.LiveHeartbeatAck.prototype.setStatus = function (e) {
            i.Message.setProto3IntField(this, 1, e)
        }, proto.stream.LiveBroadcast = function (e) {
            i.Message.initialize(this, e, 0, -1, proto.stream.LiveBroadcast.repeatedFields_, null)
        }, o.inherits(proto.stream.LiveBroadcast, i.Message), o.DEBUG && !COMPILED && (proto.stream.LiveBroadcast.displayName = "proto.stream.LiveBroadcast"), proto.stream.LiveBroadcast.repeatedFields_ = [3], i.Message.GENERATE_TO_OBJECT && (proto.stream.LiveBroadcast.prototype.toObject = function (e) {
            return proto.stream.LiveBroadcast.toObject(e, this)
        }, proto.stream.LiveBroadcast.toObject = function (e, t) {
            var r = {
                roomid: i.Message.getFieldWithDefault(t, 1, "0"),
                flag: i.Message.getFieldWithDefault(t, 2, 0),
                dstuidsList: i.Message.getRepeatedField(t, 3),
                cpproto: t.getCpproto_asB64()
            };
            return e && (r.$jspbMessageInstance = t), r
        }), proto.stream.LiveBroadcast.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.LiveBroadcast;
            return proto.stream.LiveBroadcast.deserializeBinaryFromReader(r, t)
        }, proto.stream.LiveBroadcast.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint64String();
                        e.setRoomid(r);
                        break;
                    case 2:
                        r = t.readUint32();
                        e.setFlag(r);
                        break;
                    case 3:
                        r = t.readPackedUint32();
                        e.setDstuidsList(r);
                        break;
                    case 4:
                        r = t.readBytes();
                        e.setCpproto(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        }, proto.stream.LiveBroadcast.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.LiveBroadcast.serializeBinaryToWriter(this, e), e.getResultBuffer()
        }, proto.stream.LiveBroadcast.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            r = e.getRoomid(), 0 !== parseInt(r, 10) && t.writeUint64String(1, r), 0 !== (r = e.getFlag()) && t.writeUint32(2, r), 0 < (r = e.getDstuidsList()).length && t.writePackedUint32(3, r), 0 < (r = e.getCpproto_asU8()).length && t.writeBytes(4, r)
        }, proto.stream.LiveBroadcast.prototype.getRoomid = function () {
            return i.Message.getFieldWithDefault(this, 1, "0")
        }, proto.stream.LiveBroadcast.prototype.setRoomid = function (e) {
            i.Message.setProto3StringIntField(this, 1, e)
        }, proto.stream.LiveBroadcast.prototype.getFlag = function () {
            return i.Message.getFieldWithDefault(this, 2, 0)
        }, proto.stream.LiveBroadcast.prototype.setFlag = function (e) {
            i.Message.setProto3IntField(this, 2, e)
        }, proto.stream.LiveBroadcast.prototype.getDstuidsList = function () {
            return i.Message.getRepeatedField(this, 3)
        }, proto.stream.LiveBroadcast.prototype.setDstuidsList = function (e) {
            i.Message.setField(this, 3, e || [])
        }, proto.stream.LiveBroadcast.prototype.addDstuids = function (e, t) {
            i.Message.addToRepeatedField(this, 3, e, t)
        }, proto.stream.LiveBroadcast.prototype.clearDstuidsList = function () {
            this.setDstuidsList([])
        }, proto.stream.LiveBroadcast.prototype.getCpproto = function () {
            return i.Message.getFieldWithDefault(this, 4, "")
        }, proto.stream.LiveBroadcast.prototype.getCpproto_asB64 = function () {
            return i.Message.bytesAsB64(this.getCpproto())
        }, proto.stream.LiveBroadcast.prototype.getCpproto_asU8 = function () {
            return i.Message.bytesAsU8(this.getCpproto())
        },proto.stream.LiveBroadcast.prototype.setCpproto = function (e) {
            i.Message.setProto3BytesField(this, 4, e)
        },proto.stream.LiveBroadcastAck = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.LiveBroadcastAck, i.Message),o.DEBUG && !COMPILED && (proto.stream.LiveBroadcastAck.displayName = "proto.stream.LiveBroadcastAck"),i.Message.GENERATE_TO_OBJECT && (proto.stream.LiveBroadcastAck.prototype.toObject = function (e) {
            return proto.stream.LiveBroadcastAck.toObject(e, this)
        }, proto.stream.LiveBroadcastAck.toObject = function (e, t) {
            var r = {status: i.Message.getFieldWithDefault(t, 1, 0)};
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.LiveBroadcastAck.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.LiveBroadcastAck;
            return proto.stream.LiveBroadcastAck.deserializeBinaryFromReader(r, t)
        },proto.stream.LiveBroadcastAck.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setStatus(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.LiveBroadcastAck.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.LiveBroadcastAck.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.LiveBroadcastAck.serializeBinaryToWriter = function (e, t) {
            var r;
            0 !== (r = e.getStatus()) && t.writeUint32(1, r)
        },proto.stream.LiveBroadcastAck.prototype.getStatus = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.LiveBroadcastAck.prototype.setStatus = function (e) {
            i.Message.setProto3IntField(this, 1, e)
        },proto.stream.SetLiveOffset = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.SetLiveOffset, i.Message),o.DEBUG && !COMPILED && (proto.stream.SetLiveOffset.displayName = "proto.stream.SetLiveOffset"),i.Message.GENERATE_TO_OBJECT && (proto.stream.SetLiveOffset.prototype.toObject = function (e) {
            return proto.stream.SetLiveOffset.toObject(e, this)
        }, proto.stream.SetLiveOffset.toObject = function (e, t) {
            var r = {
                gameid: i.Message.getFieldWithDefault(t, 1, 0),
                roomid: i.Message.getFieldWithDefault(t, 2, "0"),
                userid: i.Message.getFieldWithDefault(t, 3, 0),
                offsetms: i.Message.getFieldWithDefault(t, 4, 0)
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.SetLiveOffset.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.SetLiveOffset;
            return proto.stream.SetLiveOffset.deserializeBinaryFromReader(r, t)
        },proto.stream.SetLiveOffset.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setGameid(r);
                        break;
                    case 2:
                        r = t.readUint64String();
                        e.setRoomid(r);
                        break;
                    case 3:
                        r = t.readUint32();
                        e.setUserid(r);
                        break;
                    case 4:
                        r = t.readInt32();
                        e.setOffsetms(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.SetLiveOffset.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.SetLiveOffset.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.SetLiveOffset.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getGameid()) && t.writeUint32(1, r), r = e.getRoomid(), 0 !== parseInt(r, 10) && t.writeUint64String(2, r), 0 !== (r = e.getUserid()) && t.writeUint32(3, r), 0 !== (r = e.getOffsetms()) && t.writeInt32(4, r)
        },proto.stream.SetLiveOffset.prototype.getGameid = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.SetLiveOffset.prototype.setGameid = function (e) {
            i.Message.setProto3IntField(this, 1, e)
        },proto.stream.SetLiveOffset.prototype.getRoomid = function () {
            return i.Message.getFieldWithDefault(this, 2, "0")
        },proto.stream.SetLiveOffset.prototype.setRoomid = function (e) {
            i.Message.setProto3StringIntField(this, 2, e)
        },proto.stream.SetLiveOffset.prototype.getUserid = function () {
            return i.Message.getFieldWithDefault(this, 3, 0)
        },proto.stream.SetLiveOffset.prototype.setUserid = function (e) {
            i.Message.setProto3IntField(this, 3, e)
        },proto.stream.SetLiveOffset.prototype.getOffsetms = function () {
            return i.Message.getFieldWithDefault(this, 4, 0)
        },proto.stream.SetLiveOffset.prototype.setOffsetms = function (e) {
            i.Message.setProto3IntField(this, 4, e)
        },proto.stream.SetLiveOffsetAck = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.SetLiveOffsetAck, i.Message),o.DEBUG && !COMPILED && (proto.stream.SetLiveOffsetAck.displayName = "proto.stream.SetLiveOffsetAck"),i.Message.GENERATE_TO_OBJECT && (proto.stream.SetLiveOffsetAck.prototype.toObject = function (e) {
            return proto.stream.SetLiveOffsetAck.toObject(e, this)
        }, proto.stream.SetLiveOffsetAck.toObject = function (e, t) {
            var r = {status: i.Message.getFieldWithDefault(t, 1, 0)};
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.SetLiveOffsetAck.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.SetLiveOffsetAck;
            return proto.stream.SetLiveOffsetAck.deserializeBinaryFromReader(r, t)
        },proto.stream.SetLiveOffsetAck.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setStatus(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.SetLiveOffsetAck.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.SetLiveOffsetAck.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.SetLiveOffsetAck.serializeBinaryToWriter = function (e, t) {
            var r;
            0 !== (r = e.getStatus()) && t.writeUint32(1, r)
        },proto.stream.SetLiveOffsetAck.prototype.getStatus = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.SetLiveOffsetAck.prototype.setStatus = function (e) {
            i.Message.setProto3IntField(this, 1, e)
        },proto.stream.EnterLiveRoomNotify = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.EnterLiveRoomNotify, i.Message),o.DEBUG && !COMPILED && (proto.stream.EnterLiveRoomNotify.displayName = "proto.stream.EnterLiveRoomNotify"),i.Message.GENERATE_TO_OBJECT && (proto.stream.EnterLiveRoomNotify.prototype.toObject = function (e) {
            return proto.stream.EnterLiveRoomNotify.toObject(e, this)
        }, proto.stream.EnterLiveRoomNotify.toObject = function (e, t) {
            var r = {userid: i.Message.getFieldWithDefault(t, 1, 0), userprofile: t.getUserprofile_asB64()};
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.EnterLiveRoomNotify.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.EnterLiveRoomNotify;
            return proto.stream.EnterLiveRoomNotify.deserializeBinaryFromReader(r, t)
        },proto.stream.EnterLiveRoomNotify.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setUserid(r);
                        break;
                    case 2:
                        r = t.readBytes();
                        e.setUserprofile(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.EnterLiveRoomNotify.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.EnterLiveRoomNotify.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.EnterLiveRoomNotify.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getUserid()) && t.writeUint32(1, r), 0 < (r = e.getUserprofile_asU8()).length && t.writeBytes(2, r)
        },proto.stream.EnterLiveRoomNotify.prototype.getUserid = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.EnterLiveRoomNotify.prototype.setUserid = function (e) {
            i.Message.setProto3IntField(this, 1, e)
        },proto.stream.EnterLiveRoomNotify.prototype.getUserprofile = function () {
            return i.Message.getFieldWithDefault(this, 2, "")
        },proto.stream.EnterLiveRoomNotify.prototype.getUserprofile_asB64 = function () {
            return i.Message.bytesAsB64(this.getUserprofile())
        },proto.stream.EnterLiveRoomNotify.prototype.getUserprofile_asU8 = function () {
            return i.Message.bytesAsU8(this.getUserprofile())
        },proto.stream.EnterLiveRoomNotify.prototype.setUserprofile = function (e) {
            i.Message.setProto3BytesField(this, 2, e)
        },proto.stream.ExitLiveRoomNotify = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.ExitLiveRoomNotify, i.Message),o.DEBUG && !COMPILED && (proto.stream.ExitLiveRoomNotify.displayName = "proto.stream.ExitLiveRoomNotify"),i.Message.GENERATE_TO_OBJECT && (proto.stream.ExitLiveRoomNotify.prototype.toObject = function (e) {
            return proto.stream.ExitLiveRoomNotify.toObject(e, this)
        }, proto.stream.ExitLiveRoomNotify.toObject = function (e, t) {
            var r = {userid: i.Message.getFieldWithDefault(t, 1, 0), userprofile: t.getUserprofile_asB64()};
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.ExitLiveRoomNotify.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.ExitLiveRoomNotify;
            return proto.stream.ExitLiveRoomNotify.deserializeBinaryFromReader(r, t)
        },proto.stream.ExitLiveRoomNotify.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setUserid(r);
                        break;
                    case 2:
                        r = t.readBytes();
                        e.setUserprofile(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.ExitLiveRoomNotify.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.ExitLiveRoomNotify.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.ExitLiveRoomNotify.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getUserid()) && t.writeUint32(1, r), 0 < (r = e.getUserprofile_asU8()).length && t.writeBytes(2, r)
        },proto.stream.ExitLiveRoomNotify.prototype.getUserid = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.ExitLiveRoomNotify.prototype.setUserid = function (e) {
            i.Message.setProto3IntField(this, 1, e)
        },proto.stream.ExitLiveRoomNotify.prototype.getUserprofile = function () {
            return i.Message.getFieldWithDefault(this, 2, "")
        },proto.stream.ExitLiveRoomNotify.prototype.getUserprofile_asB64 = function () {
            return i.Message.bytesAsB64(this.getUserprofile())
        },proto.stream.ExitLiveRoomNotify.prototype.getUserprofile_asU8 = function () {
            return i.Message.bytesAsU8(this.getUserprofile())
        },proto.stream.ExitLiveRoomNotify.prototype.setUserprofile = function (e) {
            i.Message.setProto3BytesField(this, 2, e)
        },proto.stream.LiveBroadcastNotify = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.LiveBroadcastNotify, i.Message),o.DEBUG && !COMPILED && (proto.stream.LiveBroadcastNotify.displayName = "proto.stream.LiveBroadcastNotify"),i.Message.GENERATE_TO_OBJECT && (proto.stream.LiveBroadcastNotify.prototype.toObject = function (e) {
            return proto.stream.LiveBroadcastNotify.toObject(e, this)
        }, proto.stream.LiveBroadcastNotify.toObject = function (e, t) {
            var r = {
                srcuid: i.Message.getFieldWithDefault(t, 1, 0),
                priority: i.Message.getFieldWithDefault(t, 2, 0),
                cpproto: t.getCpproto_asB64()
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.LiveBroadcastNotify.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.LiveBroadcastNotify;
            return proto.stream.LiveBroadcastNotify.deserializeBinaryFromReader(r, t)
        },proto.stream.LiveBroadcastNotify.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setSrcuid(r);
                        break;
                    case 2:
                        r = t.readUint32();
                        e.setPriority(r);
                        break;
                    case 3:
                        r = t.readBytes();
                        e.setCpproto(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.LiveBroadcastNotify.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.LiveBroadcastNotify.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.LiveBroadcastNotify.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getSrcuid()) && t.writeUint32(1, r), 0 !== (r = e.getPriority()) && t.writeUint32(2, r), 0 < (r = e.getCpproto_asU8()).length && t.writeBytes(3, r)
        },proto.stream.LiveBroadcastNotify.prototype.getSrcuid = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.LiveBroadcastNotify.prototype.setSrcuid = function (e) {
            i.Message.setProto3IntField(this, 1, e)
        },proto.stream.LiveBroadcastNotify.prototype.getPriority = function () {
            return i.Message.getFieldWithDefault(this, 2, 0)
        },proto.stream.LiveBroadcastNotify.prototype.setPriority = function (e) {
            i.Message.setProto3IntField(this, 2, e)
        },proto.stream.LiveBroadcastNotify.prototype.getCpproto = function () {
            return i.Message.getFieldWithDefault(this, 3, "")
        },proto.stream.LiveBroadcastNotify.prototype.getCpproto_asB64 = function () {
            return i.Message.bytesAsB64(this.getCpproto())
        },proto.stream.LiveBroadcastNotify.prototype.getCpproto_asU8 = function () {
            return i.Message.bytesAsU8(this.getCpproto())
        },proto.stream.LiveBroadcastNotify.prototype.setCpproto = function (e) {
            i.Message.setProto3BytesField(this, 3, e)
        },proto.stream.LiveOverNotify = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.LiveOverNotify, i.Message),o.DEBUG && !COMPILED && (proto.stream.LiveOverNotify.displayName = "proto.stream.LiveOverNotify"),i.Message.GENERATE_TO_OBJECT && (proto.stream.LiveOverNotify.prototype.toObject = function (e) {
            return proto.stream.LiveOverNotify.toObject(e, this)
        }, proto.stream.LiveOverNotify.toObject = function (e, t) {
            var r = {gameid: i.Message.getFieldWithDefault(t, 1, 0), roomid: i.Message.getFieldWithDefault(t, 2, "0")};
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.LiveOverNotify.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.LiveOverNotify;
            return proto.stream.LiveOverNotify.deserializeBinaryFromReader(r, t)
        },proto.stream.LiveOverNotify.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setGameid(r);
                        break;
                    case 2:
                        r = t.readUint64String();
                        e.setRoomid(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.LiveOverNotify.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.LiveOverNotify.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.LiveOverNotify.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getGameid()) && t.writeUint32(1, r), r = e.getRoomid(), 0 !== parseInt(r, 10) && t.writeUint64String(2, r)
        },proto.stream.LiveOverNotify.prototype.getGameid = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.LiveOverNotify.prototype.setGameid = function (e) {
            i.Message.setProto3IntField(this, 1, e)
        },proto.stream.LiveOverNotify.prototype.getRoomid = function () {
            return i.Message.getFieldWithDefault(this, 2, "0")
        },proto.stream.LiveOverNotify.prototype.setRoomid = function (e) {
            i.Message.setProto3StringIntField(this, 2, e)
        },proto.stream.LiveFrameDataNotify = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.LiveFrameDataNotify, i.Message),o.DEBUG && !COMPILED && (proto.stream.LiveFrameDataNotify.displayName = "proto.stream.LiveFrameDataNotify"),i.Message.GENERATE_TO_OBJECT && (proto.stream.LiveFrameDataNotify.prototype.toObject = function (e) {
            return proto.stream.LiveFrameDataNotify.toObject(e, this)
        }, proto.stream.LiveFrameDataNotify.toObject = function (e, t) {
            var r = {
                srcuid: i.Message.getFieldWithDefault(t, 1, 0),
                priority: i.Message.getFieldWithDefault(t, 2, 0),
                cpproto: t.getCpproto_asB64(),
                timestamp: i.Message.getFieldWithDefault(t, 4, 0),
                frameidx: i.Message.getFieldWithDefault(t, 5, 0)
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.LiveFrameDataNotify.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.LiveFrameDataNotify;
            return proto.stream.LiveFrameDataNotify.deserializeBinaryFromReader(r, t)
        },proto.stream.LiveFrameDataNotify.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setSrcuid(r);
                        break;
                    case 2:
                        r = t.readUint32();
                        e.setPriority(r);
                        break;
                    case 3:
                        r = t.readBytes();
                        e.setCpproto(r);
                        break;
                    case 4:
                        r = t.readUint64();
                        e.setTimestamp(r);
                        break;
                    case 5:
                        r = t.readUint32();
                        e.setFrameidx(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.LiveFrameDataNotify.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.LiveFrameDataNotify.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.LiveFrameDataNotify.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getSrcuid()) && t.writeUint32(1, r), 0 !== (r = e.getPriority()) && t.writeUint32(2, r), 0 < (r = e.getCpproto_asU8()).length && t.writeBytes(3, r), 0 !== (r = e.getTimestamp()) && t.writeUint64(4, r), 0 !== (r = e.getFrameidx()) && t.writeUint32(5, r)
        },proto.stream.LiveFrameDataNotify.prototype.getSrcuid = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.LiveFrameDataNotify.prototype.setSrcuid = function (e) {
            i.Message.setProto3IntField(this, 1, e)
        },proto.stream.LiveFrameDataNotify.prototype.getPriority = function () {
            return i.Message.getFieldWithDefault(this, 2, 0)
        },proto.stream.LiveFrameDataNotify.prototype.setPriority = function (e) {
            i.Message.setProto3IntField(this, 2, e)
        },proto.stream.LiveFrameDataNotify.prototype.getCpproto = function () {
            return i.Message.getFieldWithDefault(this, 3, "")
        },proto.stream.LiveFrameDataNotify.prototype.getCpproto_asB64 = function () {
            return i.Message.bytesAsB64(this.getCpproto())
        },proto.stream.LiveFrameDataNotify.prototype.getCpproto_asU8 = function () {
            return i.Message.bytesAsU8(this.getCpproto())
        },proto.stream.LiveFrameDataNotify.prototype.setCpproto = function (e) {
            i.Message.setProto3BytesField(this, 3, e)
        },proto.stream.LiveFrameDataNotify.prototype.getTimestamp = function () {
            return i.Message.getFieldWithDefault(this, 4, 0)
        },proto.stream.LiveFrameDataNotify.prototype.setTimestamp = function (e) {
            i.Message.setProto3IntField(this, 4, e)
        },proto.stream.LiveFrameDataNotify.prototype.getFrameidx = function () {
            return i.Message.getFieldWithDefault(this, 5, 0)
        },proto.stream.LiveFrameDataNotify.prototype.setFrameidx = function (e) {
            i.Message.setProto3IntField(this, 5, e)
        },proto.stream.LiveFrameSyncNotify = function (e) {
            i.Message.initialize(this, e, 0, -1, null, null)
        },o.inherits(proto.stream.LiveFrameSyncNotify, i.Message),o.DEBUG && !COMPILED && (proto.stream.LiveFrameSyncNotify.displayName = "proto.stream.LiveFrameSyncNotify"),i.Message.GENERATE_TO_OBJECT && (proto.stream.LiveFrameSyncNotify.prototype.toObject = function (e) {
            return proto.stream.LiveFrameSyncNotify.toObject(e, this)
        }, proto.stream.LiveFrameSyncNotify.toObject = function (e, t) {
            var r = {
                priority: i.Message.getFieldWithDefault(t, 1, 0),
                lastidx: i.Message.getFieldWithDefault(t, 2, 0),
                nextidx: i.Message.getFieldWithDefault(t, 3, 0),
                startts: i.Message.getFieldWithDefault(t, 4, 0),
                endts: i.Message.getFieldWithDefault(t, 5, 0),
                timestamp: i.Message.getFieldWithDefault(t, 6, 0)
            };
            return e && (r.$jspbMessageInstance = t), r
        }),proto.stream.LiveFrameSyncNotify.deserializeBinary = function (e) {
            var t = new i.BinaryReader(e), r = new proto.stream.LiveFrameSyncNotify;
            return proto.stream.LiveFrameSyncNotify.deserializeBinaryFromReader(r, t)
        },proto.stream.LiveFrameSyncNotify.deserializeBinaryFromReader = function (e, t) {
            for (; t.nextField() && !t.isEndGroup();) {
                switch (t.getFieldNumber()) {
                    case 1:
                        var r = t.readUint32();
                        e.setPriority(r);
                        break;
                    case 2:
                        r = t.readUint32();
                        e.setLastidx(r);
                        break;
                    case 3:
                        r = t.readUint32();
                        e.setNextidx(r);
                        break;
                    case 4:
                        r = t.readUint64();
                        e.setStartts(r);
                        break;
                    case 5:
                        r = t.readUint64();
                        e.setEndts(r);
                        break;
                    case 6:
                        r = t.readUint64();
                        e.setTimestamp(r);
                        break;
                    default:
                        t.skipField()
                }
            }
            return e
        },proto.stream.LiveFrameSyncNotify.prototype.serializeBinary = function () {
            var e = new i.BinaryWriter;
            return proto.stream.LiveFrameSyncNotify.serializeBinaryToWriter(this, e), e.getResultBuffer()
        },proto.stream.LiveFrameSyncNotify.serializeBinaryToWriter = function (e, t) {
            var r = void 0;
            0 !== (r = e.getPriority()) && t.writeUint32(1, r), 0 !== (r = e.getLastidx()) && t.writeUint32(2, r), 0 !== (r = e.getNextidx()) && t.writeUint32(3, r), 0 !== (r = e.getStartts()) && t.writeUint64(4, r), 0 !== (r = e.getEndts()) && t.writeUint64(5, r), 0 !== (r = e.getTimestamp()) && t.writeUint64(6, r)
        },proto.stream.LiveFrameSyncNotify.prototype.getPriority = function () {
            return i.Message.getFieldWithDefault(this, 1, 0)
        },proto.stream.LiveFrameSyncNotify.prototype.setPriority = function (e) {
            i.Message.setProto3IntField(this, 1, e)
        },proto.stream.LiveFrameSyncNotify.prototype.getLastidx = function () {
            return i.Message.getFieldWithDefault(this, 2, 0)
        },proto.stream.LiveFrameSyncNotify.prototype.setLastidx = function (e) {
            i.Message.setProto3IntField(this, 2, e)
        },proto.stream.LiveFrameSyncNotify.prototype.getNextidx = function () {
            return i.Message.getFieldWithDefault(this, 3, 0)
        },proto.stream.LiveFrameSyncNotify.prototype.setNextidx = function (e) {
            i.Message.setProto3IntField(this, 3, e)
        },proto.stream.LiveFrameSyncNotify.prototype.getStartts = function () {
            return i.Message.getFieldWithDefault(this, 4, 0)
        },proto.stream.LiveFrameSyncNotify.prototype.setStartts = function (e) {
            i.Message.setProto3IntField(this, 4, e)
        },proto.stream.LiveFrameSyncNotify.prototype.getEndts = function () {
            return i.Message.getFieldWithDefault(this, 5, 0)
        },proto.stream.LiveFrameSyncNotify.prototype.setEndts = function (e) {
            i.Message.setProto3IntField(this, 5, e)
        },proto.stream.LiveFrameSyncNotify.prototype.getTimestamp = function () {
            return i.Message.getFieldWithDefault(this, 6, 0)
        },proto.stream.LiveFrameSyncNotify.prototype.setTimestamp = function (e) {
            i.Message.setProto3IntField(this, 6, e)
        },proto.stream.SDKWatchCmdID = {
            INVALIDWATCHCMD: 0,
            ENTERLIVEROOMCMDID: 3401,
            ENTERLIVEROOMACKCMDID: 3402,
            LIVEHEARTBEATCMDID: 3403,
            LIVEHEARTBEATACKCMDID: 3404,
            LIVEBROADCASTCMDID: 3405,
            LIVEBROADCASTACKCMDID: 3406,
            SETLIVEOFFSETCMDID: 3407,
            SETLIVEOFFSETACKCMDID: 3408,
            ENTERLIVEROOMNOTIFYCMDID: 3420,
            EXITLIVEROOMNOTIFYCMDID: 3422,
            LIVEBROADCASTNOTIFYCMDID: 3424,
            LIVEOVERNOTIFYCMDID: 3426,
            LIVEFRAMEDATANOTIFYCMDID: 3428,
            LIVEFRAMESYNCNOTIFYCMDID: 3430
        },o.object.extend(r, proto.stream)
    }, {"./common_pb.js": 4, "google-protobuf": 8}]
}, {}, [6]), function (e) {
    e.FrameOpt = {ONLY_CLIENT: 0, ONLY_GS: 1, CLIENT_GS: 2}, e.MsSetFrameSyncNotify = function (e, t, r, o) {
        this.frameRate = e, this.startIndex = t, this.timestamp = r, this.enableGS = o
    }, e.MsWatchSet = function (e, t, r, o) {
        this.cacheMS = e, this.maxWatch = t, this.delayMS = r, this.persistent = o
    }, e.MsLiveFrameDataNotify = function (e, t, r, o) {
        this.srcUserID = e, this.cpProto = t, this.timeStamp = r, this.frameIdx = o
    }, e.MsLiveAudience = function (e, t, r) {
        this.userID = e, this.profile = t, this.enterTime = r
    }, e.MsLiveWatchInfo = function (e, t, r, o, i, s, a, n) {
        this.roomID = e, this.startTS = t, this.delayMS = r, this.cacheMS = o, this.maxAudiences = i, this.curAudiences = s, this.peakAudiences = a, this.lastAudiences = n
    }, e.MsJoinWatchRoomRsp = function (e, t, r, o) {
        this.status = e, this.roomStatus = t, this.reserved = r, this.wathchInfo = o
    }, e.MsExitLiveRoomNotify = function (e, t) {
        this.userID = e, this.userProfile = t
    }, e.MsLiveOverNotify = function (e, t) {
        this.gameID = e, this.roomID = t
    }, e.MsChangeRoleRsp = function (e, t) {
        this.status = e, this.targetRoomType = t
    }, e.MsCreateTeamInfo = function (e, t, r, o, i) {
        this.password = e, this.capacity = t, this.mode = r, this.visibility = o, this.userProfile = i
    }, e.MsTeamMatchCond = function (e, t, r, o, i, s, a) {
        this.teamNum = e, this.teamMemberNum = t, this.timeout = r, this.weight = o, this.weightRange = i, this.weightRule = s, this.full = a
    }, e.MsTeamMatchInfo = function (e, t, r, o, i, s, a, n) {
        this.roomName = e, this.maxPlayer = t, this.canWatch = r, this.mode = o, this.visibility = i, this.roomProperty = s, this.watchSet = n, this.cond = a
    }
}(MVS || {});
var MvsCode = {NoLogin: -2, CODE_201: 201, CODE_1000: 1e3, NetworkErr: 1001, CODE_1005: 1005, DataParseErr: 1606},
    MvsErrMsg = new function () {
        this[1001] = "network error, please reference [http://www.matchvs.com/service?page=egretGuide]", this[1e3] = "netwrk closed normal ", this[1005] = "netwrk closed no status ", this[1606] = "you data parse error ", this[400] = "bad request ", this[401] = "invaild appkey ", this[402] = "invaild sign [http://www.matchvs.com/service?page=js]", this[403] = "forbidden", this[404] = "not found anything, please reference [ http://www.matchvs.com/service?page=js ]", this[405] = "room have full, please reference [ http://www.matchvs.com/service?page=js ]", this[406] = "room had joinOver, please reference [ http://www.matchvs.com/service?page=js ]", this[500] = "server error, please reference [ http://www.matchvs.com/service?page=egretGuide ]", this[502] = "service stoped,the license expires or the account is in arrears. please reference [ http://www.matchvs.com/price ]", this[503] = "the ccu exceed the limit. please reference [ http://www.matchvs.com/price ]", this[504] = "your traffic is running out today,please recharge [ http://www.matchvs.com/price ]", this[507] = "room does not exist", this[509] = "not in the room ", this[521] = "gameServer not exist, please check your gameserver is ok http://www.matchvs.com/service?page=gameServer", this[522] = "frame sync is close, please call the api 'setFrameSync' [http://www.matchvs.com/service?page=js]", this[523] = "gameServer internal error, need check you game server", this[527] = "sending message too often ,  can't exceed 500 times per second", this[201] = "reconnect not in room http://www.matchvs.com/service?page=js", this[422] = "team match timeout", this[423] = "parameters is incorrect"
    };

function MsCreateRoomInfo(e, t, r, o, i, s) {
    this.roomName = e, this.maxPlayer = t, this.mode = r, this.canWatch = o, this.visibility = i, this.roomProperty = s, this.toString = function () {
        return "roomName:" + this.roomName + " maxPlayer:" + this.maxPlayer + " mode:" + this.mode + " canWatch:" + this.canWatch + " visibility:" + this.visibility + " roomProperty:" + this.roomProperty
    }, MatchvsLog.logI(this + " MsCreateRoomInfo:" + JSON.stringify(this))
}

function MsEnum() {
}

function MsRoomJoin(e, t, r, o, i, s, a, n, p, g, u) {
    this.joinType = e, this.userID = t, this.roomID = r, this.gameID = o, this.maxPlayer = i, this.mode = s, this.canWatch = a, this.tags = p, this.userProfile = n, this.visibility = g, this.roomProperty = u, MatchvsLog.logI(this + " MsRoomJoin:" + JSON.stringify(this))
}

function MsJoinOverRsp(e, t) {
    this.status = e, this.cpProto = t, MatchvsLog.logI(this + " MsJoinOverRsp:" + JSON.stringify(this))
}

function MsJoinOverNotifyInfo(e, t, r) {
    this.roomID = e, this.srcUserID = t, this.cpProto = r, MatchvsLog.logI(this + " MsJoinOverNotifyInfo:" + JSON.stringify(this))
}

function MsCreateRoomRsp(e, t, r) {
    this.status = e, this.roomID = t, this.owner = r, MatchvsLog.logI(this + " MsCreateRoomRsp:" + JSON.stringify(this))
}

function MsCheckIn(e, t, r, o, i, s) {
    this.gameID = e, this.roomID = t, this.userID = r, this.bookID = o, this.bookKey = i, this.hotelInfo = s
}

function MsMatchInfo(e, t, r, o, i, s) {
    this.maxPlayer = e, this.mode = t, this.canWatch = r, this.tags = {}, this.tags = o, this.visibility = i, this.roomProperty = s, MatchvsLog.logI(this + " MsMatchInfo:" + JSON.stringify(this))
}

function MsRoomInfo(e, t, r, o, i) {
    this.roomID = e, this.roomName = i, this.roomProperty = t, this.ownerId = r, this.owner = r, this.state = o, MatchvsLog.logI(this + " MsRoomInfo:" + JSON.stringify(this))
}

function MsRoomUserInfo(e, t) {
    this.userId = e, this.userID = e, this.userProfile = t, MatchvsLog.logI(this + " MsRoomUserInfo:" + JSON.stringify(this))
}

function MsLeaveRoomRsp(e, t, r, o) {
    this.status = e, this.roomID = t, this.userId = r, this.userID = r, this.cpProto = o, MatchvsLog.logI(this + " MsLeaveRoomRsp:" + JSON.stringify(this))
}

function MsLeaveRoomNotify(e, t, r, o) {
    this.userId = t, this.userID = t, this.roomID = e, this.owner = r, this.cpProto = o, MatchvsLog.logI(this + " MsLeaveRoomNotify:" + JSON.stringify(this))
}

function MsSubscribeEventGroupRsp(e, t) {
    this.status = e, this.groups = t
}

function MsSendEventGroupNotify(e, t, r) {
    this.srcUid = e, this.srcUserID = e, this.groups = t, this.cpProto = r
}

function MsRegistRsp(e, t, r, o, i) {
    this.status = e, this.id = t, this.userID = t, this.token = r, this.name = o, this.avatar = i, MatchvsLog.logI("MsRegistRsp:" + JSON.stringify(this))
}

function MsLoginRsp(e, t) {
    this.status = e, this.roomID = t, MatchvsLog.logI("MsLoginRsp::" + JSON.stringify(this))
}

function MsCheckInNotify(e, t, r, o) {
    this.userID = e, this.checkins = t, this.players = r, this.maxPlayers = o, this.maxPlayer = o, MatchvsLog.logI(this + ":" + JSON.stringify(this))
}

function MsSendEventNotify(e, t) {
    this.srcUserId = e, this.srcUserID = e, this.cpProto = t
}

function MsGameServerNotifyInfo(e, t) {
    this.srcUserId = e, this.srcUserID = e, this.cpProto = t
}

function MsSendEventRsp(e, t) {
    this.status = e, this.sequence = t
}

function MsRoomInfoEx(e, t, r, o, i, s) {
    this.roomID = e, this.roomName = t, this.maxPlayer = r, this.mode = o, this.canWatch = i, this.roomProperty = s, MatchvsLog.logI(" MsRoomInfoEx:" + JSON.stringify(this))
}

function MsRoomListRsp(e, t) {
    this.status = e, this.roomInfos = t, MatchvsLog.logI(this + " MsRoomListRsp:" + JSON.stringify(this))
}

function MsKickPlayerNotify(e, t, r, o) {
    this.userId = e, this.userID = e, this.srcUserId = t, this.srcUserID = t, this.cpProto = r, this.owner = o, MatchvsLog.logI(this + " MsKickPlayerNotify:" + JSON.stringify(this))
}

function MsKickPlayerRsp(e, t, r) {
    this.status = e, this.owner = t, this.userID = r, MatchvsLog.logI(this + " MsKickPlayerRsp:" + JSON.stringify(this))
}

function MsSetChannelFrameSyncRsp(e) {
    this.status = e
}

function MsSendFrameEventRsp(e) {
    this.status = e
}

function MsRoomFilter(e, t, r, o) {
    this.maxPlayer = e, this.mode = t, this.canWatch = r, this.roomProperty = o, MatchvsLog.logI(this + " MsRoomFilter:" + JSON.stringify(this))
}

function MsRoomFilterEx(e, t, r, o, i, s, a, n, p, g) {
    this.maxPlayer = e, this.mode = t, this.canWatch = r, this.roomProperty = o, this.full = i, this.state = s, this.sort = a, this.order = n, this.pageNo = p, this.pageSize = g || 10, MatchvsLog.logI(this + " MsRoomFilterEx:" + JSON.stringify(this))
}

function MsGetRoomDetailRsp(e, t, r, o, i, s, a, n, p, g, u) {
    this.status = e, this.state = t, this.maxPlayer = r, this.mode = o, this.canWatch = i, this.roomProperty = s, this.owner = a, this.createFlag = n, this.userInfos = [], this.userInfos = p, this.watchinfo = g, this.brigades = u, MatchvsLog.logI(this + " MsGetRoomDetailRsp:" + JSON.stringify(this))
}

function MsRoomAttribute(e, t, r, o, i, s, a, n, p, g, u, l) {
    this.roomID = e, this.roomName = t, this.maxPlayer = r, this.gamePlayer = o, this.watchPlayer = i, this.mode = s, this.canWatch = a, this.roomProperty = n, this.owner = p, this.state = g, this.createTime = u, this.watchSet = l, MatchvsLog.logI(this + " MsRoomAttribute:" + JSON.stringify(this))
}

function MsGetRoomListExRsp(e, t, r) {
    this.status = e, this.total = t, this.roomAttrs = r, MatchvsLog.logI(this + " MsGetRoomListExRsp:" + JSON.stringify(this))
}

function MsFrameItem(e, t, r) {
    this.srcUserID = e, this.cpProto = t, this.timestamp = r
}

function MsFrameData(e, t, r) {
    this.frameIndex = e, this.frameItems = t, this.frameWaitCount = r
}

function MsNetworkStateNotify(e, t, r, o) {
    this.roomID = e, this.userID = t, this.state = r, this.owner = o
}

function MsSetRoomPropertyRspInfo(e, t, r, o) {
    this.status = e, this.roomID = t, this.userID = r, this.roomProperty = o, MatchvsLog.logI(this + " MsSetRoomPropertyRspInfo:" + JSON.stringify(this))
}

function MsRoomPropertyNotifyInfo(e, t, r) {
    this.roomID = e, this.userID = t, this.roomProperty = r, MatchvsLog.logI(this + " MsRoomPropertyNotifyInfo:" + JSON.stringify(this))
}

function MsHeartBeatResponse(e, t) {
    this.gameID = e, this.gsExist = t
}

function MsGatewaySpeedResponse(e, t) {
    this.status = e, this.seq = t
}

function MsReopenRoomResponse(e, t) {
    this.status = e, this.cpProto = t, MatchvsLog.logI(this + " MsReopenRoomResponse:" + JSON.stringify(this))
}

function MsReopenRoomNotify(e, t, r) {
    this.roomID = e, this.userID = t, this.cpProto = r, MatchvsLog.logI(this + " MsReopenRoomNotify:" + JSON.stringify(this))
}

MsEnum.JoinRoomType = {
    NoJoin: 0,
    joinSpecialRoom: 1,
    joinRoomWithProperty: 2,
    joinRandomRoom: 3,
    reconnect: 4
}, function (e) {
    var t, r;
    try {
        "undefined" != typeof egret ? (console.log("network api -> egret"), t = function (e, t) {
            var i = null, s = !1, a = [], n = t, r = e, o = this;
            this.close = function () {
                i && i.close()
            }, this.send = function (e) {
                if (s) {
                    var t = new egret.ByteArray;
                    t.position = 0;
                    for (var r = e.buffer.byteLength, o = 0; o < r; o++) t.writeByte(e.getUint8(o));
                    i.writeBytes(t, 0, t.bytesAvailable)
                } else a.length < 100 && a.unshift(e)
            };
            var p = function (e) {
                for (MatchvsLog.logI("[egret.WebSocket][connect]:" + e), s = !0; 0 < a.length;) o.send(a.pop());
                n.onConnect && n.onConnect(r)
            }, g = function (e) {
                s = !1, n.onDisConnect && n.onDisConnect(r, e = {code: 1e3}), MatchvsLog.logI("[egret.WebSocket] [onClose] case:" + JSON.stringify(e))
            }, u = function () {
                var e = new egret.ByteArray;
                i.readBytes(e);
                for (var t = new ArrayBuffer(e.readAvailable), r = new DataView(t), o = 0; o < t.byteLength; o++) r.setUint8(o, e.readUnsignedByte());
                n.onMsg(r)
            }, l = function (e) {
                n.onDisConnect && n.onDisConnect(r, e = {code: "1006"}), MatchvsLog.logI("[egret.WebSocket] [onError] case:" + JSON.stringify(e))
            };
            !function () {
                (i = new egret.WebSocket).type = egret.WebSocket.TYPE_BINARY, i.addEventListener(egret.ProgressEvent.SOCKET_DATA, u, this), i.addEventListener(egret.Event.CONNECT, p, this), i.addEventListener(egret.Event.CLOSE, g, this), i.addEventListener(egret.IOErrorEvent.IO_ERROR, l, this), i.connectByUrl(e)
            }()
        }, r = function (e) {
            function r(e, t, r, o) {
                var i = new XMLHttpRequest;
                i.open(r ? "POST" : "GET", e, !0), i.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), i.onreadystatechange = function () {
                    4 === i.readyState && (200 === i.status ? (t.onMsg(i.responseText), MatchvsLog.logI("[HTTP:](" + e + ")+" + i.responseText)) : t.onErr(i.status, i.statusText))
                }, r ? i.send(o) : i.send(null)
            }

            this.mCallback = e, this.get = function (e) {
                r(e, this.mCallback, !1, null)
            }, this.post = function (e, t) {
                r(e, this.mCallback, !0, t)
            }
        }) : (console.log("network api->browser"), t = function (e, t) {
            this.socket = null, this.mCallBack = t, this.mHost = e;
            var r = !1, o = [];
            this.send = function (e) {
                if (window.WebSocket) {
                    if (isIE()) {
                        for (var t = new Uint8Array(e.buffer.byteLength), r = 0; r < t.length; r++) t[r] = e.getUint8(r);
                        e = t
                    }
                    this.socket.readyState === WebSocket.OPEN ? this.socket.send(e.buffer) : o.unshift(e)
                }
            }, this.close = function () {
                this.socket && ("undefined" != typeof cc && void 0 !== cc.Component ? (r = !0, this.socket.close()) : this.socket.close(1e3, ""))
            }, window.WebSocket || (window.WebSocket = window.MozWebSocket), window.WebSocket ? (this.socket = new WebSocket(e), this.socket.hashcode = (new Date).getMilliseconds(), MatchvsLog.logI("try to create a socket:" + this.mHost + " socket is " + this.socket.hashcode), this.socket.onmessage = function (e) {
                if ("undefined" != typeof FileReader && e.data instanceof Blob) {
                    var r = new FileReader;
                    r.readAsArrayBuffer(e.data), r.onload = function (e) {
                        if (e.target.readyState === FileReader.DONE) {
                            var t = new DataView(r.result);
                            this.mCallBack.onMsg(t)
                        } else this.mCallBack.onErr(MvsCode.DataParseErr, "[err]parse fail")
                    }.bind(this)
                } else if (e.data instanceof ArrayBuffer) {
                    var t = new DataView(e.data);
                    this.mCallBack.onMsg(t)
                } else console.log("[error] unknown event :" + e + " => " + JSON.stringify(e)), this.mCallBack.onErr(MvsCode.DataParseErr, "[err]parse fail")
            }.bind(this), this.socket.onopen = function (e) {
                for (r = !1, MatchvsLog.logI("Create the socket is success :" + this.mHost + " socket is " + this.socket.hashcode); 0 < o.length;) this.send(o.pop());
                this.mCallBack.onConnect && this.mCallBack.onConnect(this.mHost)
            }.bind(this), this.socket.onclose = function (e) {
                "undefined" != typeof cc && void 0 !== cc.Component && (e = r ? {
                    code: 1e3,
                    reason: "jsb friend close "
                } : {
                    code: 1006,
                    reason: "error close "
                }), MatchvsLog.logI("socket on closed ,code:" + (e && e.code) + "(1000:NORMAL,1005:CLOSE_NO_STATUS,1006:RESET,1009:CLOSE_TOO_LARGE) err:" + JSON.stringify(e)), this.mCallBack.onDisConnect && this.mCallBack.onDisConnect(this.mHost, e)
            }.bind(this), this.socket.onerror = function (e) {
                MatchvsLog.logI("socket on error ,event:" + JSON.stringify(e)), this.mCallBack.onDisConnect && this.mCallBack.onDisConnect(this.mHost, e)
            }.bind(this)) : alert("Not Support the WebSocket！")
        }, r = function (e) {
            function r(e, t, r, o) {
                var i = new XMLHttpRequest;
                i.open(r ? "POST" : "GET", e, !0), i.setRequestHeader("Content-type", "application/x-www-form-urlencoded"), i.onreadystatechange = function () {
                    4 === i.readyState && (200 === i.status ? (t.onMsg(i.responseText), MatchvsLog.logI("[HTTP:](" + e + ")+" + i.responseText)) : t.onErr(i.status, i.statusText))
                }, r ? i.send(o) : i.send(null)
            }

            this.mCallback = e, this.get = function (e) {
                r(e, this.mCallback, !1, null)
            }, this.post = function (e, t) {
                r(e, this.mCallback, !0, t)
            }
        }), "undefined" != typeof wx ? (console.log("network api->WX"), t = function (e, t) {
            this.socket = wx.connectSocket({url: e, header: {engine: "WeiXinGame"}}), this.socketOpen = !1;
            var r = [], o = t, i = e, s = this;
            this.close = function () {
                this.socket && this.socket.close({code: 1e3, reason: "normal"})
            }, this.send = function (e) {
                this.socketOpen ? this.socket.send({data: e.buffer}) : r.length < 100 && r.unshift(e)
            }, this.socket.onOpen(function (e) {
                for (MatchvsLog.logI("[wx.WebSocket][connect]:" + e), s.socketOpen = !0; 0 < r.length;) s.send(r.pop());
                o.onConnect && o.onConnect(i)
            }), this.socket.onClose(function (e) {
                s.socketOpen = !1, e.reason && "interrupted" === e.reason && (e.code = 1001), o.onDisConnect && o.onDisConnect(i, e), MatchvsLog.logI("[wx.WebSocket] [onClose] case:" + JSON.stringify(e))
            }), this.socket.onMessage(function (e) {
                var t = new DataView(e.data);
                o.onMsg(t)
            }), this.socket.onError(function (e) {
                o.onDisConnect && o.onDisConnect(i, e), MatchvsLog.logI("[wx.WebSocket] [onError] case:" + JSON.stringify(e))
            })
        }, r = function (e) {
            function r(e, r, t, o) {
                var i = t ? "application/json" : "application/x-www-form-urlencoded";
                wx.request({
                    url: e, data: o, header: {"content-type": i}, success: function (e) {
                        var t = JSON.stringify(e.data);
                        MatchvsLog.logI("http success:" + t), r.onMsg(t)
                    }, fail: function (e) {
                        MatchvsLog.logI("http fail:" + e.errMsg), r.onErr(0, e.errMsg)
                    }
                })
            }

            this.mCallback = e, this.get = function (e) {
                r(e, this.mCallback, !1, null)
            }, this.post = function (e, t) {
                r(e, this.mCallback, !0, t)
            }
        }) : "undefined" != typeof BK && (console.log("network api->BK"), t = function (e, t) {
            var s = t, r = e, o = [], i = !1, a = new BK.WebSocket(e), n = this;
            this.send = function (e) {
                i ? a.send(e.buffer) : o.length < 100 && o.unshift(e)
            }, this.close = function () {
                console.log("[matchvs sdk]websocket close"), a && a.close()
            }, a.onOpen = function (e) {
                for (i = !0, console.log("[BK.WebSocket][connect][Matchvs]:", e); 0 < o.length;) n.send(o.pop());
                s.onConnect && s.onConnect(r)
            }, a.onClose = function (e) {
                i = !1, console.log("[BK.WebSocket][onClose][Matchvs] case:", JSON.stringify(e));
                s.onDisConnect && s.onDisConnect(r, {code: 1e3, message: " close normal"})
            }, a.onError = function (e) {
                a && i && (i = !1, a.close());
                var t = {code: e.getErrorCode(), message: e.getErrorString()};
                65535 === t.code && (t.code = 1e3), s.onDisConnect && s.onDisConnect(r, t), MatchvsLog.logI("[BK.WebSocket] [onError][Matchvs] case:" + JSON.stringify(e))
            }, a.onMessage = function (e, t) {
                var r = t.data;
                r.rewind();
                for (var o = new ArrayBuffer(r.length), i = new DataView(o); !r.eof;) i.setUint8(r.pointer, r.readUint8Buffer());
                s.onMsg && s.onMsg(i)
            }, a && a.connect()
        }, r = function (e) {
            function r(o, i, e, t) {
                var r = new BK.HttpUtil(o);
                r.setHttpMethod(e ? "post" : "get"), r.setHttpHeader("Content-type", "application/x-www-form-urlencoded"), r.requestAsync(function (e, t) {
                    if (200 === t) {
                        var r = e.readAsString(!0);
                        i.onMsg(r), MatchvsLog.logI("[HTTP:](" + o + ")+" + r)
                    } else i.onErr(t, e.readAsString(!0))
                }), e ? r.setHttpPostData(t) : r.setHttpUrl(o)
            }

            this.mCallback = e, this.get = function (e) {
                r(e, this.mCallback, !1, null)
            }, this.post = function (e, t) {
                r(e, this.mCallback, !0, t)
            }
        })
    } catch (e) {
        console.warn("network adapter warning:" + e.message)
    }
    e.MatchvsNetWork = t, e.MatchvsHttp = r, e.MatchvsNetWorkCallBack = function () {
        this.onMsg = function (e) {
        }, this.onErr = function (e, t) {
        }
    }
}(MVS || {});
var MATCHVS_USER_GATEWAY_SPEED_REQ = 1001, MATCHVS_USER_GATEWAY_SPEED_RSP = 1002, MATCHVS_USER_LOGIN_REQ = 1101,
    MATCHVS_USER_LOGIN_RSP = 1102, MATCHVS_USER_HEARTBEAT_REQ = 1103, MATCHVS_USER_HEARTBEAT_RSP = 1103,
    MATCHVS_NOTICE_USER_RELOGIN = 1104, MATCHVS_USER_LOGOUT_REQ = 1105, MATCHVS_USER_LOGOUT_RSP = 1106,
    MATCHVS_NETWORK_STATE_NOTIFY = 1122, MATCHVS_ROOM_CREATE_REQ = 1203, MATCHVS_ROOM_CREATE_RSP = 1204,
    MATCHVS_ROOM_JOIN_REQ = 1201, MATCHVS_ROOM_JOIN_RSP = 1202, MATCHVS_ROOM_JOIN_OVER_REQ = 1213,
    MATCHVS_ROOM_JOIN_OVER_RSP = 1214, MATCHVS_ROOM_JOIN_OVER_NOTIFY = 1306, MATCHVS_ROOM_LEAVE_REQ = 1205,
    MATCHVS_ROOM_LEAVE_RSP = 1206, MATCHVS_ROOM_NOTICE_USER_JOIN = 1301, MATCHVS_ROOM_NOTICE_USER_LEAVE = 1302,
    MATCHVS_ROOM_CHECK_IN_REQ = 1401, MATCHVS_ROOM_CHECK_IN_RSP = 1402, MATCHVS_HEARTBEAT_HOTEL_REQ = 1403,
    MATCHVS_HEARTBEAT_HOTEL_RSP = 1404, MATCHVS_BROADCAST_HOTEL_REQ = 1405, MATCHVS_BROADCAST_HOTEL_RSP = 1406,
    MATCHVS_HOTEL_NOTIFY = 1408, MATCHVS_ROOM_CHECKIN_NOTIFY = 1410, CMD_GET_ROOM_LIST_REQ = 1207,
    CMD_GET_ROOM_LIST_RSP = 1208, CMD_GET_ROOM_DETAIL_REQ = 1209, CMD_GET_ROOM_DETAIL_RSP = 1210,
    CMD_GET_ROOM_LIST_EX_REQ = 1215, CMD_GET_ROOM_LIST_EX_RSP = 1216, CMD_SET_ROOM_PROPERTY_REQ = 1219,
    CMD_SET_ROOM_PROPERTY_RSP = 1220, CMD_SET_ROOM_PROPERTY_NOTIFY = 1307, CMD_DISCONNECT_REQ = 1107,
    CMD_DISCONNECT_RSP = 1108, CMD_KICK_PLAYER_REQ = 1303, CMD_KICK_PLAYER_RSP = 1304, CMD_KICK_PLAYER_NOTIFY = 1305,
    CMD_SUBSCRIBE_CMDID = 1411, CMD_SUBSCRIBE_ACK_CMDID = 1412, CMD_PUBLISH_CMDID = 1413, CMD_PUBLISH_ACKCMDID = 1414,
    CMD_PUBLISH_NOTIFYCMDID = 1416, CMD_SET_USE_TIMESTAMP_CMDID = 1417, CMD_SET_USE_TIMESTAMPACK_CMDID = 1418,
    CMD_SET_FRAME_SYNCRATE_CMDID = 1419, CMD_SET_FRAME_SYNCRATEACK_CMDID = 1420,
    CMD_SET_FRAME_SYNCRATENOTIFY_CMDID = 1422, CMD_FRAME_BROADCAST_CMDID = 1423, CMD_FRAME_BROADCASTACK_CMDID = 1424,
    CMD_FRAME_DATANOTIFY_CMDID = 1426, CMD_FRAME_SYNCNOTIFY_CMDID = 1428, CMD_ROOM_JOIN_OPEN_REQ = 1221,
    CMD_ROOM_JOIN_OPEN_RSP = 1222, CMD_ROOM_JOIN_OPEN_NOT = 1308, FIXED_HEAD_SIZE = 16, VERSION = 2;

function Packet() {
}

function MatchvsHeader() {
    this.size = 0, this.seq = 0, this.cmd = 0, this.version = 0, this.userID = 0, this.toString = function () {
        return " this.size   " + this.size + " this.seq    " + this.seq + " this.cmd    " + this.cmd + " this.version" + this.version + " this.userID " + this.userID
    }
}

!function (e) {
    var m = proto.stream, a = {
        LOGIN_REQ: 1101,
        LOGIN_RSP: 1102,
        CREATE_ROOM_REQ: 1203,
        CREATE_ROOM_RSP: 1204,
        JOIN_ROOM_REQ: 1201,
        JOIN_ROOM_RSP: 1202,
        JOIN_ROOM_NOTIFY: 1301,
        CHECK_IN_REQ: 1401,
        CHECK_IN_RSP: 1402,
        CHECK_IN_NOTIFY: 1410,
        SET_RECONNECT_TIMEOUT_REQ: 1109,
        SET_RECONNECT_TIMEOUT_RSP: 1110,
        JOIN_WATCHROOM_REQ: 1225,
        JOIN_WATCHROOM_RSP: 1226,
        LEAVE_WATCHROOM_REQ: 1227,
        LEAVE_WATCHROOM_RSP: 1228,
        GET_WATCHROOM_REQ: 1229,
        GET_WATCHROOM_RSP: 1230,
        CHANGE_ROLE_REQ: 1231,
        CHANGE_ROLE_RSP: 1232,
        ENTER_LIVEROOM_REQ: 3401,
        ENTER_LIVEROOM_RSP: 3402,
        ENTER_LIVEROOM_NOTIFY: 3420,
        LIVE_HEARTBEAT_REQ: 3403,
        LIVE_HEARTBEAT_RSP: 3404,
        LIVE_BROADCAST_REQ: 3405,
        LIVE_BROADCAST_RSP: 3406,
        LIVE_BROADCAST_NOTIFY: 3424,
        SET_LIVEOFFSET_REQ: 3407,
        SET_LIVEOFFSET_RSP: 3408,
        EXIT_LIVEROOM_NOTIFY: 3422,
        LIVE_OVER_NOTIFY: 3426,
        LIVE_FRAMEDATA_NOTIFY: 3428,
        LIVE_FRAMESYNC_NOTIFY: 3430,
        CREATE_TEAM_REQ: 1233,
        CREATE_TEAM_RSP: 1234,
        JOIN_TEAM_REQ: 1235,
        JOIN_TEAM_RSP: 1236,
        JOIN_TEAM_NOTIFY: 1309,
        LEAVE_TEAM_REQ: 1237,
        LEAVE_TEAM_RSP: 1238,
        LEAVE_TEAM_NOTIFY: 1310,
        TEAM_MATCH_REQ: 1239,
        TEAM_MATCH_RSP: 1240,
        TEAM_MATCH_RESULT_NOTIFY: 1311,
        TEAM_MATCH_START_NOTIFY: 1312,
        GET_CACHEDATA_REQ: 1429,
        GET_CACHEdATA_RSP: 1430
    };
    e.ProtoCmd = a;
    var n = new function e() {
        return e.prototype
    };
    n[a.LOGIN_RSP] = m.LoginRsp, n[a.JOIN_ROOM_RSP] = m.JoinRoomRsp, n[a.CHECK_IN_RSP] = m.CheckInAck, n[a.CREATE_ROOM_RSP] = m.CreateRoomRsp, n[a.CHECK_IN_NOTIFY] = m.CheckInNotify, n[MATCHVS_ROOM_JOIN_OVER_RSP] = m.JoinOverRsp, n[MATCHVS_ROOM_LEAVE_RSP] = m.LeaveRoomRsp, n[MATCHVS_ROOM_NOTICE_USER_JOIN] = m.NoticeJoin, n[MATCHVS_HEARTBEAT_HOTEL_RSP] = m.HeartbeatAck, n[MATCHVS_ROOM_NOTICE_USER_LEAVE] = m.NoticeLeave, n[MATCHVS_BROADCAST_HOTEL_RSP] = m.BroadcastAck, n[CMD_SUBSCRIBE_ACK_CMDID] = m.SubscribeAck, n[MATCHVS_HOTEL_NOTIFY] = m.Notify, n[CMD_PUBLISH_ACKCMDID] = m.PublishAck, n[CMD_PUBLISH_NOTIFYCMDID] = m.PublishNotify, n[MATCHVS_USER_HEARTBEAT_RSP] = m.HeartbeatRsp, n[CMD_GET_ROOM_LIST_RSP] = m.GetRoomListRsp, n[MATCHVS_USER_LOGOUT_RSP] = m.LogoutRsp, n[CMD_DISCONNECT_RSP] = m.DisconnectRsp, n[CMD_KICK_PLAYER_NOTIFY] = m.KickPlayerNotify, n[CMD_KICK_PLAYER_RSP] = m.KickPlayerRsp, n[CMD_SET_FRAME_SYNCRATEACK_CMDID] = m.SetFrameSyncRateAck, n[CMD_FRAME_BROADCASTACK_CMDID] = m.FrameBroadcastAck, n[CMD_SET_FRAME_SYNCRATENOTIFY_CMDID] = m.SetFrameSyncRateNotify, n[CMD_FRAME_DATANOTIFY_CMDID] = m.FrameDataNotify, n[MATCHVS_NETWORK_STATE_NOTIFY] = m.NetworkStateNotify, n[CMD_FRAME_SYNCNOTIFY_CMDID] = m.FrameSyncNotify, n[CMD_GET_ROOM_LIST_EX_RSP] = m.GetRoomListExRsp, n[MATCHVS_ROOM_JOIN_OVER_NOTIFY] = m.JoinOverNotify, n[CMD_GET_ROOM_DETAIL_RSP] = m.GetRoomDetailRsp, n[CMD_SET_ROOM_PROPERTY_RSP] = m.SetRoomPropertyRsp, n[CMD_ROOM_JOIN_OPEN_RSP] = m.JoinOpenRsp, n[CMD_SET_ROOM_PROPERTY_NOTIFY] = m.NoticeRoomProperty, n[CMD_ROOM_JOIN_OPEN_NOT] = m.JoinOpenNotify, n[a.JOIN_WATCHROOM_RSP] = m.JoinWatchRoomRsp, n[a.ENTER_LIVEROOM_RSP] = m.EnterLiveRoomAck, n[a.ENTER_LIVEROOM_NOTIFY] = m.EnterLiveRoomNotify, n[a.LIVE_HEARTBEAT_RSP] = m.LiveHeartbeatAck, n[a.LIVE_BROADCAST_RSP] = m.LiveBroadcastAck, n[a.LIVE_BROADCAST_NOTIFY] = m.LiveBroadcastNotify, n[a.SET_LIVEOFFSET_RSP] = m.SetLiveOffsetAck, n[a.EXIT_LIVEROOM_NOTIFY] = m.ExitLiveRoomNotify, n[a.LIVE_OVER_NOTIFY] = m.LiveOverNotify, n[a.LIVE_FRAMEDATA_NOTIFY] = m.LiveFrameDataNotify, n[a.LIVE_FRAMESYNC_NOTIFY] = m.LiveFrameSyncNotify, n[a.LEAVE_WATCHROOM_RSP] = m.LeaveWatchRoomRsp, n[a.GET_WATCHROOM_RSP] = m.GetWatchRoomsRsp, n[a.CHANGE_ROLE_RSP] = m.ChangeRoleRsp, n[a.SET_RECONNECT_TIMEOUT_RSP] = m.SetReconnectTimeoutRsp, n[a.CREATE_TEAM_RSP] = m.CreateTeamRsp, n[a.JOIN_TEAM_RSP] = m.JoinTeamRsp, n[a.JOIN_TEAM_NOTIFY] = m.JoinTeamNotify, n[a.LEAVE_TEAM_RSP] = m.LeaveTeamRsp, n[a.LEAVE_TEAM_NOTIFY] = m.LeaveTeamNotify, n[a.TEAM_MATCH_RSP] = m.TeamMatchRsp, n[a.TEAM_MATCH_RESULT_NOTIFY] = m.TeamMatchResultNotify, n[a.TEAM_MATCH_START_NOTIFY] = m.TeamMatchStartNotify, e.MatchvsProtocol = function () {
        this.seq = 1;
        var l = 0, c = !1;
        this.fillHeader = function (e, t) {
            MVS.mtaReport && MVS.mtaReport.Report(t);
            var r = new ArrayBuffer(FIXED_HEAD_SIZE + e.length), o = new DataView(r);
            o.setInt32(0, r.byteLength, !0), o.setInt32(4, this.seq++, !0), o.setInt16(8, t, !0), c ? (c = !1, o.setInt16(10, 3, !0)) : o.setInt16(10, VERSION, !0), o.setInt32(12, Number(l), !0);
            for (var i = e.length, s = 0; s < i; s++) o.setUint8(s + FIXED_HEAD_SIZE, e[s]);
            return o
        }, this.parseHeader = function (e) {
            var t = e, r = new MatchvsHeader;
            return r.size = t.getInt32(0, !0), r.seq = t.getInt32(4, !0), r.cmd = t.getInt16(8, !0), r.version = t.getInt16(10, !0), r.userID = t.getInt32(12, !0), r
        }, this.handleMsg = function (e) {
            for (var t = e, r = this.parseHeader(e), o = new Uint8Array(r.size - FIXED_HEAD_SIZE), i = 0; i < o.length; i++) o[i] = e.getUint8(FIXED_HEAD_SIZE + i);
            var s = n[r.cmd], a = new Packet;
            return a.header = r, a.buf = t, s ? a.payload = s.deserializeBinary && s.deserializeBinary(e.buffer.slice(FIXED_HEAD_SIZE, e.buffer.byteLength)) : MatchvsLog.logI("[WARN]unknown msg,Head:" + r), a
        }, this.init = function () {
        }, this.login = function (e, t, r, o, i, s) {
            var a = hex_md5(t), n = format("%s&UserID=%s&GameID=%s&VersionSdk=%d&%s", i, e, r, 3, a);
            l = e;
            var p = hex_md5(n);
            MatchvsLog.logI("[Sign]" + n + "->" + p);
            var g = new m.LoginReq;
            g.setGameid(Number(r)), g.setAppkey(i), g.setToken(a), g.setSdkver("3"), g.setDeviceid(s), g.setSign(p);
            var u = g.serializeBinary();
            return MatchvsLog.logI("[REQ]login...userID:" + e), c = !0, this.fillHeader(u, MATCHVS_USER_LOGIN_REQ)
        }, this.speed = function (e, t, r, o, i) {
            var s = new ArrayBuffer(49), a = new DataView(s), n = Number(e), p = Number(t);
            a.setUint32(0, n, !0), a.setUint32(4, p, !0);
            for (var g = 0; g < 32; g++) a.setUint8(8 + g, r.charCodeAt(g));
            a.setUint16(40, o, !0), a.setUint16(42, i, !0), a.setUint32(44, 1, !0), a.setUint8(48, 1);
            for (var u = new Uint8Array(a.byteLength), l = 0; l < a.byteLength; l++) u[l] = a.getUint8(l);
            return this.fillHeader(u, MATCHVS_USER_GATEWAY_SPEED_REQ)
        }, this.roomCreate = function (e, t, r, o) {
            var i = new m.CreateRoomReq;
            i.setGameid(Number(e));
            var s = new m.PlayerInfo;
            s.setUserid(r.userID), s.setUserprofile(stringToUtf8ByteArray(r.userProfile)), i.setPlayerinfo(s);
            var a = new m.RoomInfo;
            if (a.setMaxplayer(Number(t.maxPlayer)), a.setCanwatch(t.canWatch), a.setMode(t.mode), a.setVisibility(t.visibility), a.setRoomname(t.roomName), a.setRoomproperty(stringToUtf8ByteArray(t.roomProperty)), i.setRoominfo(a), o) {
                var n = new m.WatchSetting;
                n.setCachetime(o.cacheMS), n.setMaxwatch(o.maxWatch), n.setWatchdelayms(o.delayMS), n.setWatchpersistent(o.persistent), i.setWatchsetting(n)
            }
            var p = i.serializeBinary();
            return this.fillHeader(p, MATCHVS_ROOM_CREATE_REQ)
        }, this.joinRandomRoom = function (e) {
            var t = new m.JoinRoomReq;
            t.setGameid(Number(e.gameID)), t.setJointype(m.JoinRoomType.JOINRANDOMROOM), t.setCpproto(stringToUtf8ByteArray(e.userProfile));
            var r = new m.PlayerInfo;
            r.setUserid(e.userID), r.setUserprofile(stringToUtf8ByteArray(e.userProfile)), t.setPlayerinfo(r);
            var o = new m.RoomInfo;
            o.setMaxplayer(e.maxPlayer), o.setCanwatch(e.canWatch), o.setMode(e.mode), o.setVisibility(0), t.setRoominfo(o);
            var i = t.serializeBinary();
            return this.fillHeader(i, MATCHVS_ROOM_JOIN_REQ)
        }, this.joinRoomSpecial = function (e) {
            var t = new m.JoinRoomReq;
            t.setGameid(Number(e.gameID)), t.setJointype(e.joinType), t.setCpproto(stringToUtf8ByteArray(e.userProfile));
            var r = new m.PlayerInfo;
            r.setUserid(e.userID), r.setUserprofile(stringToUtf8ByteArray(e.userProfile)), t.setPlayerinfo(r);
            var o = new m.RoomInfo;
            o.setMaxplayer(e.maxPlayer), o.setCanwatch(e.canWatch), o.setMode(e.mode), o.setVisibility(0), o.setRoomid(e.roomID), t.setRoominfo(o);
            var i = t.serializeBinary();
            return this.fillHeader(i, MATCHVS_ROOM_JOIN_REQ)
        }, this.joinRoomWithProperties = function (e, t) {
            var r = new m.JoinRoomReq, o = [], i = e.tags, s = 0;
            for (var a in i) {
                var n = new m.keyValue;
                n.setKey(a), n.setValue(i[a]), o[s++] = n
            }
            r.setTagsList(o), r.setGameid(e.gameID), r.setJointype(m.JoinRoomType.JOINROOMWITHPROPERTY), r.setCpproto(stringToUtf8ByteArray(e.userProfile));
            var p = new m.PlayerInfo;
            p.setUserid(e.userID), p.setUserprofile(stringToUtf8ByteArray(e.userProfile)), r.setPlayerinfo(p);
            var g = new m.RoomInfo;
            if (g.setMaxplayer(e.maxPlayer), g.setCanwatch(e.canWatch), g.setMode(e.mode), g.setVisibility(e.visibility), g.setRoomproperty(stringToUtf8ByteArray(e.roomProperty)), g.setRoomid(e.roomID), r.setRoominfo(g), t) {
                var u = new m.WatchSetting;
                u.setCachetime(t.cacheMS), u.setMaxwatch(t.maxWatch), u.setWatchdelayms(t.delayMS), u.setWatchpersistent(t.persistent), r.setWatchsetting(u)
            }
            var l = r.serializeBinary();
            return this.fillHeader(l, MATCHVS_ROOM_JOIN_REQ)
        }, this.roomCheckIn = function (e, t, r, o) {
            var i = new m.CheckIn;
            i.setGameid(Number(o)), i.setRoomid(t.getRoomid()), i.setUserid(Number(r)), i.setBookid(e.getBookid()), i.setKey(e.getBookkey());
            var s = i.serializeBinary();
            return this.fillHeader(s, MATCHVS_ROOM_CHECK_IN_REQ)
        }, this.getRoomList = function (e, t) {
            var r = new m.GetRoomListReq, o = new m.RoomFilter;
            o.setCanwatch(t.canWatch), o.setMaxplayer(t.maxPlayer), o.setMode(Number(t.mode)), o.setRoomproperty(stringToUtf8ByteArray(t.roomProperty)), r.setGameid(e), r.setRoomfilter(o);
            var i = r.serializeBinary();
            return this.fillHeader(i, CMD_GET_ROOM_LIST_REQ)
        }, this.getRoomListEx = function (e, t) {
            var r = new m.GetRoomListExReq, o = new m.RoomFilter;
            o.setMaxplayer(t.maxPlayer), o.setMode(Number(t.mode)), o.setFull(t.full), o.setCanwatch(t.canWatch), o.setRoomproperty(stringToUtf8ByteArray(t.roomProperty)), o.setState(t.state), r.setGameid(e), r.setRoomfilter(o), r.setSort(t.sort), r.setOrder(t.order), r.setPageno(t.pageNo), r.setPagesize(t.pageSize);
            var i = r.serializeBinary();
            return this.fillHeader(i, CMD_GET_ROOM_LIST_EX_REQ)
        }, this.getRoomDetail = function (e, t) {
            var r = new m.GetRoomDetailReq;
            r.setGameid(e), r.setRoomid(t);
            var o = r.serializeBinary();
            return this.fillHeader(o, CMD_GET_ROOM_DETAIL_REQ)
        }, this.joinOver = function (e, t, r, o) {
            var i = new m.JoinOverReq;
            i.setGameid(e), i.setRoomid(t), i.setCpproto(r), i.setUserid(o);
            var s = i.serializeBinary();
            return this.fillHeader(s, MATCHVS_ROOM_JOIN_OVER_REQ)
        }, this.leaveRoom = function (e, t, r, o) {
            var i = new m.LeaveRoomReq;
            i.setGameid(e), i.setUserid(t), i.setRoomid(r), i.setCpproto(stringToUtf8ByteArray(o));
            var s = i.serializeBinary();
            return this.fillHeader(s, MATCHVS_ROOM_LEAVE_REQ)
        }, this.heartBeat = function (e, t) {
            var r = new m.HeartbeatReq;
            r.setGameid(e), r.setRoomid(t);
            var o = r.serializeBinary();
            return this.fillHeader(o, MATCHVS_USER_HEARTBEAT_REQ)
        }, this.logout = function (e) {
            var t = stringToUtf8ByteArray(e);
            return this.fillHeader(t, MATCHVS_USER_LOGOUT_REQ)
        }, this.broadCast = function (e, t, r, o, i) {
            var s = new m.Broadcast;
            s.setRoomid(e), s.setDstuidsList(t), s.setCpproto(i);
            var a = 32 + ((3 & r) << 2) + (3 & o);
            s.setFlag(a);
            var n = s.serializeBinary();
            return this.fillHeader(n, MATCHVS_BROADCAST_HOTEL_REQ)
        }, this.subscribeEventGroup = function (e, t, r, o) {
            var i = new m.Subscribe;
            i.setRoomid(t), i.setGameid(e), i.setCancelsList(o), i.setConfirmsList(r);
            var s = i.serializeBinary();
            return this.fillHeader(s, CMD_SUBSCRIBE_CMDID)
        }, this.sendEventGroup = function (e, t, r, o, i) {
            var s = new m.Publish;
            s.setRoomid(t), s.setPriority(r), s.setCpproto(stringToUtf8ByteArray(i)), s.setGroupsList(o);
            var a = s.serializeBinary();
            return this.fillHeader(a, CMD_PUBLISH_CMDID)
        }, this.hotelHeartBeat = function (e, t, r) {
            var o = new m.Heartbeat;
            o.setGameid(e), o.setRoomid(t), o.setUserid(r);
            var i = o.serializeBinary();
            return this.fillHeader(i, MATCHVS_HEARTBEAT_HOTEL_REQ)
        }, this.disConnect = function (e, t, r) {
            var o = new m.DisconnectReq;
            o.setGameid(t), o.setRoomid(r), o.setUserid(e);
            var i = o.serializeBinary();
            return this.fillHeader(i, CMD_DISCONNECT_REQ)
        }, this.kickPlayer = function (e, t, r, o) {
            var i = new m.KickPlayerReq;
            i.setRoomid(r), i.setSrcuserid(t), i.setUserid(e), i.setCpproto(stringToUtf8ByteArray(o));
            var s = i.serializeBinary();
            return this.fillHeader(s, CMD_KICK_PLAYER_REQ)
        }, this.setFrameSync = function (e) {
            var t = new m.SetFrameSyncRate;
            t.setGameid(e.gameID), t.setRoomid(e.roomID), t.setPriority(e.priority), t.setFramerate(e.frameRate), t.setFrameidx(e.frameidx), t.setEnablegs(e.enableGS);
            var r = t.serializeBinary();
            return this.fillHeader(r, CMD_SET_FRAME_SYNCRATE_CMDID)
        }, this.sendFrameEvent = function (e, t, r, o) {
            var i = new m.FrameBroadcast;
            i.setRoomid(e), i.setPriority(t), i.setOperation(Number(o)), i.setCpproto(stringToUtf8ByteArray(r));
            var s = i.serializeBinary();
            return this.fillHeader(s, CMD_FRAME_BROADCAST_CMDID)
        }, this.setRoomProperty = function (e, t, r, o) {
            var i = new m.SetRoomPropertyReq;
            i.setGameid(e), i.setRoomid(r), i.setUserid(t), i.setRoomproperty(stringToUtf8ByteArray(o));
            var s = i.serializeBinary();
            return this.fillHeader(s, CMD_SET_ROOM_PROPERTY_REQ)
        }, this.joinOpen = function (e, t, r, o) {
            var i = new m.JoinOpenReq;
            i.setRoomid(r), i.setGameid(e), i.setUserid(t), i.setCpproto(stringToUtf8ByteArray(o));
            var s = i.serializeBinary();
            return this.fillHeader(s, CMD_ROOM_JOIN_OPEN_REQ)
        }, this.joinWatchRoom = function (e, t, r, o) {
            var i = new m.JoinWatchRoomReq;
            i.setGameid(e), i.setRoomid(r), i.setUserid(t), i.setUserprofile(stringToUtf8ByteArray(o));
            var s = i.serializeBinary();
            return this.fillHeader(s, m.CmdId.JOINWATCHROOMREQ)
        }, this.enterLiveRoom = function (e, t, r, o, i) {
            var s = new m.EnterLiveRoom;
            s.setBookid(e.getBookid()), s.setTicket(e.getBookkey()), s.setGameid(t), s.setUserid(r), s.setSetid(i), s.setUserprofile(""), s.setRoomid(o);
            var a = s.serializeBinary();
            return this.fillHeader(a, m.SDKWatchCmdID.ENTERLIVEROOMCMDID)
        }, this.leaveWatchRoom = function (e, t, r, o) {
            var i = new m.LeaveWatchRoomReq;
            i.setCpproto(stringToUtf8ByteArray(o)), i.setGameid(e), i.setUserid(t), i.setRoomid(r);
            var s = i.serializeBinary();
            return this.fillHeader(s, m.CmdId.LEAVEWATCHROOMREQ)
        }, this.getWatchRooms = function (e, t) {
            var r = new m.GetWatchRoomsReq, o = new m.RoomFilter;
            o.setMaxplayer(t.maxPlayer), o.setMode(Number(t.mode)), o.setFull(t.full), o.setCanwatch(t.canWatch), o.setRoomproperty(stringToUtf8ByteArray(t.roomProperty)), o.setState(t.state), r.setGameid(e), r.setRoomfilter(o), r.setSort(t.sort), r.setOrder(t.order), r.setPageno(t.pageNo), r.setPagesize(t.pageSize);
            var i = r.serializeBinary();
            return this.fillHeader(i, m.CmdId.GETWATCHROOMSREQ)
        }, this.liveHeartBeat = function (e, t, r) {
            var o = new m.LiveHeartbeat;
            o.setGameid(Number(e)), o.setRoomid(t), o.setUserid(Number(r));
            var i = o.serializeBinary();
            return this.fillHeader(i, m.SDKWatchCmdID.LIVEHEARTBEATCMDID)
        }, this.broadCastWatch = function (e, t, r, o, i) {
            var s = new m.LiveBroadcast;
            s.setRoomid(e), s.setDstuidsList(t), s.setCpproto(stringToUtf8ByteArray(i));
            var a = 32 + ((3 & r) << 2) + (3 & o);
            s.setFlag(a);
            var n = s.serializeBinary();
            return this.fillHeader(n, m.SDKWatchCmdID.LIVEBROADCASTCMDID)
        }, this.setLiveOffset = function (e, t, r, o) {
            var i = new m.SetLiveOffset;
            i.setGameid(e), i.setRoomid(t), i.setUserid(r), i.setOffsetms(o);
            var s = i.serializeBinary();
            return this.fillHeader(s, MVS.ProtoCmd.SET_LIVEOFFSET_REQ)
        }, this.changeRoleProto = function (e, t, r, o, i) {
            var s = new m.ChangeRole;
            s.setGameid(t), s.setRoomid(r), s.setUserid(e), s.setUserprofile(stringToUtf8ByteArray(i));
            var a = 0 === o ? m.RoomType.GAMEROOM : m.RoomType.WATCHROOMTYPE;
            s.setTargetroomtype(a);
            var n = s.serializeBinary();
            return this.fillHeader(n, MVS.ProtoCmd.CHANGE_ROLE_REQ)
        }, this.setReconnectTimeout = function (e, t) {
            var r = new m.SetReconnectTimeoutReq;
            r.setTimeout(Number(t)), r.setUserid(Number(e));
            var o = r.serializeBinary();
            return this.fillHeader(o, MVS.ProtoCmd.SET_RECONNECT_TIMEOUT_REQ)
        }, this.CreateTeam = function (e, t, r) {
            MVS.DEBUG && console.log("CreateTeam gameID:", e, " teamInfo:", t);
            var o = new m.TeamInfo;
            o.setCapacity(t.capacity), o.setTeamid(t.teamID), o.setPassword(t.password), o.setMode(t.mode), o.setOwner(t.owner), o.setVisibility(t.visibility);
            var i = new m.PlayerInfo;
            i.setUserid(r.userID), i.setUserprofile(stringToUtf8ByteArray(r.userProfile));
            var s = new m.CreateTeamReq;
            s.setGameid(Number(e)), s.setPlayerinfo(i), s.setTeaminfo(o);
            var a = s.serializeBinary();
            return this.fillHeader(a, MVS.ProtoCmd.CREATE_TEAM_REQ)
        }, this.JoinTeam = function (e) {
            var t = new m.PlayerInfo;
            t.setUserid(e.player.userID), t.setUserprofile(stringToUtf8ByteArray(e.player.userProfile));
            var r = new m.JoinTeamReq;
            r.setGameid(e.gameID), r.setTeamid(e.teamID), r.setPlayerinfo(t), r.setPassword(e.password);
            var o = r.serializeBinary();
            return this.fillHeader(o, MVS.ProtoCmd.JOIN_TEAM_REQ)
        }, this.LeaveTeam = function (e) {
            MVS.DEBUG && console.log("LeaveTeam args:", e);
            var t = new m.LeaveTeamReq;
            t.setGameid(Number(e.gameID)), t.setTeamid(e.teamID), t.setUserid(Number(e.userID));
            var r = t.serializeBinary();
            return this.fillHeader(r, MVS.ProtoCmd.LEAVE_TEAM_REQ)
        }, this.TeamMatch = function (e) {
            MVS.DEBUG && console.log("TeamMatch args:", e);
            var t = new m.TeamMatchCond;
            t.setFull(e.cond.full), t.setTeammembernum(e.cond.teamMemberNum), t.setTeamnum(e.cond.teamNum), t.setTimeout(e.cond.timeout), t.setWeight(e.cond.weight), t.setWeightrange(e.cond.weightRange), t.setWeightrule(e.cond.weightRule);
            var r = new m.WatchSetting;
            r.setWatchpersistent(e.watchSet.persistent), r.setWatchdelayms(e.watchSet.delayMS), r.setMaxwatch(e.watchSet.maxWatch), r.setCachetime(e.watchSet.cacheMS);
            var o = new m.RoomInfo;
            o.setRoomproperty(stringToUtf8ByteArray(e.roomInfo.roomProperty)), o.setCanwatch(e.roomInfo.canWatch), o.setMaxplayer(e.roomInfo.maxPlayer), o.setMode(e.roomInfo.mode), o.setOwner(0), o.setRoomid(""), o.setRoomname(e.roomInfo.roomName), o.setVisibility(e.roomInfo.visibility);
            var i = new m.TeamMatchReq;
            i.setGameid(e.gameID), i.setTeamid(e.teamID), i.setUserid(e.userID), i.setCond(t), i.setRoominfo(o), i.setWatchsetting(r);
            var s = i.serializeBinary();
            return this.fillHeader(s, a.TEAM_MATCH_REQ)
        }
    }
}(MVS || {});
var NetWorkCallBackImp = function (s) {
    MSExtend(this, MVS.MatchvsNetWork), this.engineWorkMap = new MVS.EngineNetworkMap, this.gtwTimer = 0, this.watchTimer = 0, this.mHotelTimer = 0, this.frameCache = [], this.hbTimers = [], this.clearAllBeatTimer = function () {
        for (; 0 < this.hbTimers.length;) MVS.ticker.clearInterval(this.hbTimers.pop())
    }, this.onMsg = function (e) {
        var t = s.mProtocol.handleMsg(e), r = new proto.stream.RoomInfo, o = {
            hotelTimer: this.mHotelTimer,
            watchTimer: this.watchTimer,
            payload: t.payload,
            seq: t.header.seq,
            roomInfo: r,
            frameCache: this.frameCache,
            teamNotifyInfo: this.teamNotifyInfo
        }, i = this.engineWorkMap[t.header.cmd];
        MVS.mtaReport && MVS.mtaReport.Report(t.header.cmd), i ? i.doSubHandle(o, s) : MatchvsLog.logE("no the cmd: ", t.header.cmd)
    }, this.onErr = function (e, t) {
        MVS.ErrorRspWork(s.mRsp.errorResponse, e, t)
    }, this.onConnect = function (e) {
        "" !== MVS.Host.HOST_HOTEL_ADDR && 0 <= e.indexOf(MVS.Host.HOST_HOTEL_ADDR) ? (this.mHotelTimer = MVS.ticker.setInterval(s.hotelHeartBeat, MVS.Config.HEART_BEAT_INTERVAL), this.hbTimers.push(this.mHotelTimer)) : "" !== MVS.Host.HOST_WATCH_ADDR && 0 <= e.indexOf(MVS.Host.HOST_WATCH_ADDR) ? (this.watchTimer = MVS.ticker.setInterval(s.liveHeartBeat, MVS.Config.HEART_BEAT_INTERVAL), this.hbTimers.push(this.watchTimer)) : "" !== MVS.Host.HOST_GATWAY_ADDR && 0 <= e.indexOf(MVS.Host.HOST_GATWAY_ADDR) && (this.gtwTimer = MVS.ticker.setInterval(s.heartBeat, MVS.Config.HEART_BEAT_INTERVAL), this.hbTimers.push(this.gtwTimer)), s.mRsp.onConnect && s.mRsp.onConnect(e)
    }, this.onDisConnect = function (e, t) {
        s.mCntRoomType = MVS.TgRoomType.NRoom, s.mRsp.onDisConnect && s.mRsp.onDisConnect(e), e.endsWith(MVS.Host.HOST_GATWAY_ADDR) ? (s.mEngineState = MVS.ENGE_STATE.HAVE_INIT, t && t.code && (t.code === MvsCode.CODE_1000 || t.code === MvsCode.CODE_1005) ? MatchvsLog.logI("gateway close is friend") : (this.clearAllBeatTimer(), s.mHotelNetWork && s.mHotelNetWork.close(), MVS.ErrorRspWork(s.mRsp.errorResponse, MvsCode.NetworkErr, "(" + t.code + ") gateway network error")), MVS.ticker.clearInterval(this.gtwTimer)) : "" !== MVS.Host.HOST_WATCH_ADDR && e.endsWith(MVS.Host.HOST_WATCH_ADDR) ? (MatchvsLog.logI("live disconnect"), t && t.code && (t.code === MvsCode.CODE_1000 || t.code === MvsCode.CODE_1005) ? MatchvsLog.logI("live close is friend") : (s.mEngineState = MVS.ENGE_STATE.HAVE_INIT, this.clearAllBeatTimer(), s.mWatchNetwrok && s.mWatchNetwrok.close(), MVS.ErrorRspWork(s.mRsp.errorResponse, MvsCode.NetworkErr, "(" + t.code + ") watch network error")), MVS.ticker.clearInterval(this.watchTimer), s.mEngineState &= ~MVS.ENGE_STATE.IN_WATCHING, s.mEngineState &= ~MVS.ENGE_STATE.IN_WATCH) : "" !== MVS.Host.HOST_HOTEL_ADDR && e.endsWith(MVS.Host.HOST_HOTEL_ADDR) && (MatchvsLog.logI("hotel disconnect"), t && t.code && (t.code === MvsCode.CODE_1000 || t.code === MvsCode.CODE_1005) ? MatchvsLog.logI("hotel close is friend") : (s.mEngineState = MVS.ENGE_STATE.HAVE_INIT, this.clearAllBeatTimer(), s.mGTWNetwork && s.mGTWNetwork.close(), MVS.ErrorRspWork(s.mRsp.errorResponse, MvsCode.NetworkErr, "(" + t.code + ") hotel network error")), MVS.ticker.clearInterval(this.mHotelTimer), s.mEngineState &= ~MVS.ENGE_STATE.JOIN_ROOMING, s.mEngineState &= ~MVS.ENGE_STATE.LEAVE_ROOMING, s.mEngineState &= ~MVS.ENGE_STATE.IN_ROOM, s.mEngineState &= ~MVS.ENGE_STATE.CREATEROOM), MatchvsLog.logI("EngineState", s.mEngineState)
    }
};

function MatchvsResponse() {
    this.registerUserResponse = function (e) {
    }, this.loginResponse = function (e) {
    }, this.logoutResponse = function (e) {
    }, this.createRoomResponse = function (e) {
    }, this.getRoomListResponse = function (e, t) {
    }, this.joinRoomResponse = function (e, t, r) {
    }, this.joinRoomNotify = function (e) {
    }, this.joinOverResponse = function (e) {
    }, this.joinOverNotify = function (e) {
    }, this.leaveRoomResponse = function (e) {
    }, this.leaveRoomNotify = function (e) {
    }, this.kickPlayerResponse = function (e) {
    }, this.kickPlayerNotify = function (e) {
    }, this.sendEventResponse = function (e) {
    }, this.sendEventNotify = function (e) {
    }, this.gameServerNotify = function (e) {
    }, this.errorResponse = function (e, t) {
    }, this.initResponse = function (e) {
    }, this.networkStateNotify = function (e) {
    }, this.subscribeEventGroupResponse = function (e, t) {
    }, this.sendEventGroupResponse = function (e, t) {
    }, this.sendEventGroupNotify = function (e, t, r) {
    }, this.setFrameSyncResponse = function (e) {
    }, this.setFrameSyncNotify = function (e) {
    }, this.sendFrameEventResponse = function (e) {
    }, this.frameUpdate = function (e) {
    }, this.hotelHeartBeatRsp = function (e) {
    }, this.gatewaySpeedResponse = function (e) {
    }, this.heartBeatResponse = function (e) {
    }, this.roomCheckInNotify = function (e) {
    }, this.disConnectResponse = function (e) {
    }, this.getRoomDetailResponse = function (e) {
    }, this.getRoomListExResponse = function (e) {
    }, this.setRoomPropertyResponse = function (e) {
    }, this.setRoomPropertyNotify = function (e) {
    }, this.reconnectResponse = function (e, t, r) {
    }, this.joinOpenNotify = function (e) {
    }, this.joinOpenResponse = function (e) {
    }, this.joinWatchRoomResponse = function (e) {
    }, this.joinWatchRoomNotify = function (e) {
    }, this.leaveWatchRoomResponse = function (e) {
    }, this.leaveWatchRoomNotify = function (e) {
    }, this.getWatchRoomsResponse = function (e) {
    }, this.watchHeartBeat = function (e) {
    }, this.liveBroadcastResponse = function (e) {
    }, this.liveBroadcastNotify = function (e) {
    }, this.setLiveOffsetResponse = function (e) {
    }, this.liveOverNotify = function (e) {
    }, this.liveFrameUpdate = function (e) {
    }, this.changeRoleResponse = function (e) {
    }, this.setReconnectTimeoutResponse = function (e) {
    }, this.createTeamResponse = function (e) {
    }, this.joinTeamResponse = function (e) {
    }, this.joinTeamNotify = function (e) {
    }, this.leaveTeamResponse = function (e) {
    }, this.leaveTeamNotify = function (e) {
    }, this.teamMatchResponse = function (e) {
    }, this.teamMatchResultNotify = function (e) {
    }, this.teamMatchStartNotify = function (e) {
    }
}

!function (e) {
    e.EngineNetworkMap = function () {
        this[MVS.ProtoCmd.LOGIN_RSP] = new t, this[MVS.ProtoCmd.JOIN_ROOM_RSP] = new r, this[MVS.ProtoCmd.JOIN_ROOM_NOTIFY] = new g, this[MVS.ProtoCmd.CHECK_IN_RSP] = new i, this[MVS.ProtoCmd.CREATE_ROOM_RSP] = new o, this[MVS.ProtoCmd.CHECK_IN_NOTIFY] = new s, this[MATCHVS_ROOM_JOIN_OVER_RSP] = new n, this[MATCHVS_ROOM_JOIN_OVER_NOTIFY] = new p, this[MATCHVS_ROOM_LEAVE_RSP] = new a, this[MATCHVS_ROOM_NOTICE_USER_LEAVE] = new l, this[MATCHVS_USER_HEARTBEAT_RSP] = new M, this[MATCHVS_HEARTBEAT_HOTEL_RSP] = new c, this[MATCHVS_BROADCAST_HOTEL_RSP] = new m, this[MATCHVS_HOTEL_NOTIFY] = new f, this[CMD_SUBSCRIBE_ACK_CMDID] = new d, this[CMD_PUBLISH_ACKCMDID] = new h, this[CMD_PUBLISH_NOTIFYCMDID] = new y, this[MATCHVS_USER_GATEWAY_SPEED_RSP] = new R, this[CMD_GET_ROOM_LIST_RSP] = new E, this[MATCHVS_USER_LOGOUT_RSP] = new b, this[CMD_DISCONNECT_RSP] = new S, this[CMD_KICK_PLAYER_NOTIFY] = new T, this[CMD_KICK_PLAYER_RSP] = new _, this[CMD_SET_FRAME_SYNCRATEACK_CMDID] = new v, this[CMD_FRAME_BROADCASTACK_CMDID] = new B, this[CMD_SET_FRAME_SYNCRATENOTIFY_CMDID] = new I, this[CMD_FRAME_DATANOTIFY_CMDID] = new F, this[CMD_FRAME_SYNCNOTIFY_CMDID] = new A, this[MATCHVS_NETWORK_STATE_NOTIFY] = new O, this[CMD_GET_ROOM_LIST_EX_RSP] = new w, this[CMD_GET_ROOM_DETAIL_RSP] = new D, this[CMD_SET_ROOM_PROPERTY_RSP] = new C, this[CMD_SET_ROOM_PROPERTY_NOTIFY] = new N, this[CMD_ROOM_JOIN_OPEN_RSP] = new W, this[CMD_ROOM_JOIN_OPEN_NOT] = new P, this[MVS.ProtoCmd.JOIN_WATCHROOM_RSP] = new L, this[MVS.ProtoCmd.LEAVE_WATCHROOM_RSP] = new k, this[MVS.ProtoCmd.GET_WATCHROOM_RSP] = new U, this[MVS.ProtoCmd.CHANGE_ROLE_RSP] = new Y, this[MVS.ProtoCmd.ENTER_LIVEROOM_RSP] = new j, this[MVS.ProtoCmd.ENTER_LIVEROOM_NOTIFY] = new G, this[MVS.ProtoCmd.LIVE_HEARTBEAT_RSP] = new x, this[MVS.ProtoCmd.LIVE_BROADCAST_RSP] = new z, this[MVS.ProtoCmd.LIVE_BROADCAST_NOTIFY] = new V, this[MVS.ProtoCmd.SET_LIVEOFFSET_RSP] = new H, this[MVS.ProtoCmd.EXIT_LIVEROOM_NOTIFY] = new q, this[MVS.ProtoCmd.LIVE_OVER_NOTIFY] = new J, this[MVS.ProtoCmd.LIVE_FRAMEDATA_NOTIFY] = new $, this[MVS.ProtoCmd.LIVE_FRAMESYNC_NOTIFY] = new K, this[MVS.ProtoCmd.SET_RECONNECT_TIMEOUT_RSP] = new X, this[MVS.ProtoCmd.CREATE_TEAM_RSP] = new Q, this[MVS.ProtoCmd.JOIN_TEAM_RSP] = new Z, this[MVS.ProtoCmd.JOIN_TEAM_NOTIFY] = new ee, this[MVS.ProtoCmd.LEAVE_TEAM_RSP] = new te, this[MVS.ProtoCmd.LEAVE_TEAM_NOTIFY] = new re, this[MVS.ProtoCmd.TEAM_MATCH_RSP] = new oe, this[MVS.ProtoCmd.TEAM_MATCH_RESULT_NOTIFY] = new ie, this[MVS.ProtoCmd.TEAM_MATCH_START_NOTIFY] = new se
    };
    var u = function (e, t, r) {
        var o = "";
        o = void 0 !== MvsErrMsg[t] ? r + ". " + MvsErrMsg[t] : r, MatchvsLog.logI("[error code:" + t + "] " + o), e && e(t, o)
    };

    function t() {
        this.doSubHandle = function (e, t) {
            var r = e.payload.getStatus();
            if (MVS.ccReport && MVS.ccReport.loginRsp(r), 200 === r ? t.mEngineState |= MVS.ENGE_STATE.HAVE_LOGIN : (t.mEngineState &= ~MVS.ENGE_STATE.LOGINING, t.mEngineState &= ~MVS.ENGE_STATE.RECONNECTING, u(t.mRsp.errorResponse, r, "login is fail")), t.mEngineState &= ~MVS.ENGE_STATE.LOGINING, t.mRecntRoomID = e.payload.getRoomid(), (t.mEngineState & MVS.ENGE_STATE.RECONNECTING) === MVS.ENGE_STATE.RECONNECTING) if ("0" !== t.mRecntRoomID) {
                var o = new MsRoomJoin(MsEnum.JoinRoomType.reconnect, t.mMsPubArgs.userID, t.mRecntRoomID, t.mMsPubArgs.gameID, 0, 0, 0, "reconnect", [{name: "MatchVS"}]),
                    i = t.mProtocol && t.mProtocol.joinRoomSpecial(o);
                t.mGTWNetwork && t.mGTWNetwork.send(i)
            } else t.mEngineState &= ~MVS.ENGE_STATE.RECONNECTING, t.mRsp.reconnectResponse && t.mRsp.reconnectResponse(MvsCode.CODE_201, [], {}); else t.mRsp.loginResponse(new MsLoginRsp(r, t.mRecntRoomID))
        }
    }

    function r() {
        this.doSubHandle = function (e, t) {
            var r = e.payload.getStatus();
            if (200 === r) {
                var o = e.payload.getBookinfo();
                t.mRoomInfo = e.payload.getRoominfo(), t.mUserListForJoinRoomRsp = e.payload.getUsersList(), MVS.Host.HOST_HOTEL_ADDR = MVS.MsUtil.getHotelUrl(o), t.roomCheckIn(e.payload.getBookinfo(), e.payload.getRoominfo())
            } else t.mEngineState &= ~MVS.ENGE_STATE.JOIN_ROOMING, t.mEngineState &= ~MVS.ENGE_STATE.RECONNECTING, u(t.mRsp.errorResponse, r, "join room failed "), t.mRsp.joinRoomResponse && t.mRsp.joinRoomResponse(r, null, null)
        }
    }

    function o() {
        this.doSubHandle = function (e, t) {
            if (200 === e.payload.getStatus()) {
                var r = e.payload.getBookinfo();
                e.roomInfo.setRoomid(e.payload.getRoomid()), e.roomInfo.setOwner(e.payload.getOwner()), t.mRoomInfo = e.roomInfo, MVS.Host.HOST_HOTEL_ADDR = MVS.MsUtil.getHotelUrl(r), t.roomCheckIn(e.payload.getBookinfo(), e.roomInfo)
            } else t.mEngineState &= ~MVS.ENGE_STATE.CREATEROOM, u(t.mRsp.errorResponse, e.payload.getStatus(), ""), t.mRsp.createRoomResponse && t.mRsp.createRoomResponse(new MsCreateRoomRsp(e.payload.getStatus(), "", 0))
        }
    }

    function i() {
        this.doSubHandle = function (e, t) {
            var r = e.payload.getStatus();
            if (200 !== r) t.mEngineState = MVS.ENGE_STATE.HAVE_INIT, t.mEngineState |= MVS.ENGE_STATE.HAVE_LOGIN, u(t.mRsp.errorResponse, r, "check in error"), t.mHotelNetWork && t.mHotelNetWork.close(); else {
                t.mCntRoomType = MVS.TgRoomType.PRoom, t.mRecntRoomID = t.mRoomInfo.getRoomid(), t.mAllPlayers = e.payload.getCheckinsList();
                var o = [];
                t.mUserListForJoinRoomRsp.forEach(function (e) {
                    var t = new MsRoomUserInfo(e.getUserid(), utf8ByteArrayToString(e.getUserprofile()));
                    o.push(t)
                });
                var i = new MsRoomInfo(t.mRoomInfo.getRoomid(), utf8ByteArrayToString(t.mRoomInfo.getRoomproperty()), t.mRoomInfo.getOwner(), t.mRoomInfo.getState());
                t.mEngineState |= MVS.ENGE_STATE.IN_ROOM, (t.mEngineState & MVS.ENGE_STATE.CREATEROOM) === MVS.ENGE_STATE.CREATEROOM ? (t.mEngineState &= ~MVS.ENGE_STATE.CREATEROOM, t.mRsp.createRoomResponse && t.mRsp.createRoomResponse(new MsCreateRoomRsp(r, t.mRoomInfo.getRoomid(), t.mRoomInfo.getOwner()))) : (t.mEngineState & MVS.ENGE_STATE.JOIN_ROOMING) === MVS.ENGE_STATE.JOIN_ROOMING ? (t.mEngineState &= ~MVS.ENGE_STATE.JOIN_ROOMING, t.mRsp.joinRoomResponse && t.mRsp.joinRoomResponse(r, o, i)) : (t.mEngineState & MVS.ENGE_STATE.RECONNECTING) === MVS.ENGE_STATE.RECONNECTING ? (t.mEngineState &= ~MVS.ENGE_STATE.RECONNECTING, t.mRsp.reconnectResponse && t.mRsp.reconnectResponse(r, o, i)) : (t.mEngineState & MVS.ENGE_STATE.TEAMMATCHING) === MVS.ENGE_STATE.TEAMMATCHING && (t.mEngineState &= ~MVS.ENGE_STATE.TEAMMATCHING, t.teamNotifyInfo.roomInfo = i, t.mRsp.teamMatchResultNotify(t.teamNotifyInfo))
            }
        }
    }

    function s() {
        this.doSubHandle = function (e, t) {
            t.joinRoomNotifyInfo && t.mRsp.joinRoomNotify && t.mRsp.joinRoomNotify(t.joinRoomNotifyInfo), t.mAllPlayers = e.payload.getCheckinsList(), t.joinRoomNotifyInfo = null
        }
    }

    function a() {
        this.doSubHandle = function (e, t) {
            t.mEngineState &= ~MVS.ENGE_STATE.LEAVE_ROOMING, 200 !== e.payload.getStatus() && u(t.mRsp.errorResponse, e.payload.getStatus(), "leave room fail"), e.roomInfo.setRoomid("0"), t.mRoomInfo = e.roomInfo;
            var r = new MsLeaveRoomRsp(e.payload.getStatus(), e.payload.getRoomid(), e.payload.getUserid(), e.payload.getCpproto());
            t.mRsp.leaveRoomResponse && t.mRsp.leaveRoomResponse(r), t.mEngineState &= ~MVS.ENGE_STATE.IN_ROOM
        }
    }

    function n() {
        this.doSubHandle = function (e, t) {
            200 !== e.payload.getStatus() && u(t.mRsp.errorResponse, e.payload.getStatus(), "join over fail"), t.mRsp.joinOverResponse && t.mRsp.joinOverResponse(new MsJoinOverRsp(e.payload.getStatus(), utf8ByteArrayToString(e.payload.getCpproto())))
        }
    }

    function p() {
        this.doSubHandle = function (e, t) {
            var r = new MsJoinOverNotifyInfo(e.payload.getRoomid(), e.payload.getSrcuserid(), utf8ByteArrayToString(e.payload.getCpproto()));
            t.mRsp.joinOverNotify && t.mRsp.joinOverNotify(r)
        }
    }

    function g() {
        this.doSubHandle = function (e, t) {
            t.joinRoomNotifyInfo = new MsRoomUserInfo(e.payload.getUser().getUserid(), utf8ByteArrayToString(e.payload.getUser().getUserprofile()))
        }
    }

    function l() {
        this.doSubHandle = function (e, t) {
            var r = new MsLeaveRoomNotify(e.payload.getRoomid(), e.payload.getUserid(), e.payload.getOwner(), utf8ByteArrayToString(e.payload.getCpproto()));
            t.mRsp.leaveRoomNotify && t.mRsp.leaveRoomNotify(r)
        }
    }

    function c() {
        this.doSubHandle = function (e, t) {
            t.mRsp.hotelHeartBeatRsp && t.mRsp.hotelHeartBeatRsp(e.payload.getStatus()), MatchvsLog.logI("hotelHeartBeatRsp")
        }
    }

    function m() {
        this.doSubHandle = function (e, t) {
            200 !== e.payload.getStatus() && u(t.mRsp.errorResponse, e.payload.getStatus(), "send event fail"), t.mRsp.sendEventResponse && t.mRsp.sendEventResponse(new MsSendEventRsp(e.payload.getStatus(), e.seq))
        }
    }

    function f() {
        this.doSubHandle = function (e, t) {
            0 === e.payload.getSrcuid() ? t.mRsp.gameServerNotify && t.mRsp.gameServerNotify(new MsGameServerNotifyInfo(e.payload.getSrcuid(), utf8ByteArrayToString(e.payload.getCpproto()))) : t.mRsp.sendEventNotify && t.mRsp.sendEventNotify(new MsSendEventNotify(e.payload.getSrcuid(), utf8ByteArrayToString(e.payload.getCpproto())))
        }
    }

    function d() {
        this.doSubHandle = function (e, t) {
            t.mRsp.subscribeEventGroupResponse && t.mRsp.subscribeEventGroupResponse(e.payload.getStatus(), e.payload.getGroupsList())
        }
    }

    function h() {
        this.doSubHandle = function (e, t) {
            t.mRsp.sendEventGroupResponse && t.mRsp.sendEventGroupResponse(e.payload.getStatus(), e.payload.getDstnum())
        }
    }

    function y() {
        this.doSubHandle = function (e, t) {
            t.mRsp.sendEventGroupNotify && t.mRsp.sendEventGroupNotify(e.payload.getSrcuid(), e.payload.getGroupsList(), utf8ByteArrayToString(e.payload.getCpproto()))
        }
    }

    function R() {
        this.doSubHandle = function (e, t) {
            var r = e.payload.getStatus(), o = e.payload.getSeq();
            t.mRsp.gatewaySpeedResponse && t.mRsp.gatewaySpeedResponse(new MsGatewaySpeedResponse(r, o))
        }
    }

    function M() {
        this.doSubHandle = function (e, t) {
            var r = e.payload.getGameid(), o = e.payload.getGsexist();
            t.mEngineState |= MVS.ENGE_STATE.HAVE_LOGIN, t.mRsp.heartBeatResponse && t.mRsp.heartBeatResponse(new MsHeartBeatResponse(r, o)), MatchvsLog.logI("gatewayHeartBeatResponse")
        }
    }

    function b() {
        this.doSubHandle = function (e, t) {
            t.mGTWNetwork.close(), t.mRsp.logoutResponse && t.mRsp.logoutResponse(e.payload.getStatus())
        }
    }

    function E() {
        this.doSubHandle = function (e, t) {
            var r = e.payload.getStatus();
            200 !== r && (t.mRsp.getRoomListResponse && t.mRsp.getRoomListResponse(e.payload.getStatus(), null), u(t.mRsp.errorResponse, e.payload.getStatus(), "get room list error "));
            for (var o = e.payload.getRoominfoList(), i = [], s = 0; s < o.length; s++) i[s] = new MsRoomInfoEx(o[s].getRoomid(), o[s].getRoomname(), o[s].getMaxplayer(), o[s].getMode(), o[s].getCanwatch(), utf8ByteArrayToString(o[s].getRoomproperty()));
            t.mRsp.getRoomListResponse && t.mRsp.getRoomListResponse(r, i)
        }
    }

    function S() {
        this.doSubHandle = function (e, t) {
            t.mRsp.disConnectResponse && t.mRsp.disConnectResponse(e.payload.getStatus())
        }
    }

    function _() {
        this.doSubHandle = function (e, t) {
            200 != e.payload.getStatus() && u(t.mRsp.errorResponse, e.payload.getStatus(), "kick player error "), t.mRsp.kickPlayerResponse && t.mRsp.kickPlayerResponse(new MsKickPlayerRsp(e.payload.getStatus(), e.payload.getOwner(), e.payload.getUserid()))
        }
    }

    function T() {
        this.doSubHandle = function (e, t) {
            e.payload.getUserid().toString() === "" + t.mUserID && null != e.hotelTimer && (MVS.ticker.clearInterval(e.hotelTimer), t.mEngineState &= ~MVS.ENGE_STATE.IN_ROOM, t.mEngineState |= MVS.ENGE_STATE.HAVE_LOGIN, t.mHotelNetWork.close()), t.mRsp.kickPlayerNotify && t.mRsp.kickPlayerNotify(new MsKickPlayerNotify(e.payload.getUserid(), e.payload.getSrcuserid(), utf8ByteArrayToString(e.payload.getCpproto()), e.payload.getOwner()))
        }
    }

    function v() {
        this.doSubHandle = function (e, t) {
            MatchvsLog.logI("SetFrameSyncRateAck:" + e.payload), t.mRsp.setFrameSyncResponse && t.mRsp.setFrameSyncResponse(new MsSetChannelFrameSyncRsp(e.payload.getStatus()))
        }
    }

    function I() {
        this.doSubHandle = function (e, t) {
            var r = new MVS.MsSetFrameSyncNotify(e.payload.getFramerate(), e.payload.getFrameidx(), e.payload.getTimestamp(), e.payload.getEnablegs());
            t.mRsp.setFrameSyncNotify && t.mRsp.setFrameSyncNotify(r)
        }
    }

    function B() {
        this.doSubHandle = function (e, t) {
            t.mRsp.sendFrameEventResponse && t.mRsp.sendFrameEventResponse(new MsSendFrameEventRsp(e.payload.getStatus()))
        }
    }

    function F() {
        this.doSubHandle = function (e, t) {
            e.frameCache.unshift(new MsFrameItem(e.payload.getSrcuid(), utf8ByteArrayToString(e.payload.getCpproto()), e.payload.getTimestamp()))
        }
    }

    function A() {
        this.doSubHandle = function (e, t) {
            for (var r = []; 0 < e.frameCache.length;) r.push(e.frameCache.pop());
            var o = new MsFrameData(e.payload.getLastidx(), r, r.length);
            t.mRsp.frameUpdate && t.mRsp.frameUpdate(o)
        }
    }

    function O() {
        this.doSubHandle = function (e, t) {
            t.mRsp.networkStateNotify && t.mRsp.networkStateNotify(new MsNetworkStateNotify(e.payload.getRoomid(), e.payload.getUserid(), e.payload.getState(), e.payload.getOwner()))
        }
    }

    function w() {
        this.doSubHandle = function (e, t) {
            var r = e.payload.getRoominfoexList(), i = [];
            r.forEach(function (e) {
                var t = e.getWatchinfo().getWatchsetting(),
                    r = new MVS.MsWatchSet(t.getCachetime(), t.getMaxwatch(), t.getWatchdelayms(), t.getWatchpersistent()),
                    o = new MsRoomAttribute(e.getRoomid(), e.getRoomname(), e.getMaxplayer(), e.getGameplayer(), e.getWatchplayer(), e.getMode(), e.getCanwatch(), utf8ByteArrayToString(e.getRoomproperty()), e.getOwner(), e.getState(), e.getCreatetime().toString(), r);
                i.push(o)
            });
            var o = new MsGetRoomListExRsp(e.payload.getStatus(), e.payload.getTotal(), i);
            t.mRsp.getRoomListExResponse && t.mRsp.getRoomListExResponse(o)
        }
    }

    function D() {
        this.doSubHandle = function (e, t) {
            200 !== e.payload.getStatus() && (t.mRsp.getRoomDetailResponse && t.mRsp.getRoomDetailResponse(new MsGetRoomDetailRsp(e.payload.getStatus())), u(t.mRsp.errorResponse, e.payload.getStatus(), ""));
            var r = e.payload.getRoomdetail(), o = [];
            r.getPlayerinfosList().forEach(function (e) {
                var t = new MsRoomUserInfo(e.getUserid(), utf8ByteArrayToString(e.getUserprofile()));
                o.push(t)
            });
            var i = r.getWatchroom(), s = i.getWatchinfo().getWatchsetting(), a = {
                state: i.getWatchinfo().getState(),
                curWatch: i.getWatchinfo().getCurwatch(),
                persistent: s.getWatchpersistent(),
                maxWatch: s.getMaxwatch(),
                delayMS: s.getWatchdelayms(),
                cacheTime: s.getCachetime()
            }, n = r.getBrigadesList(), p = [];
            n.forEach(function (e) {
                var a = [];
                e.getTeamsList().forEach(function (e) {
                    for (var t = e.getTeaminfo(), r = e.getPlayerList(), o = [], i = 0; i < r.length; i++) o[i] = {
                        userID: r[i].getUserid(),
                        userProfile: utf8ByteArrayToString(r[i].getUserprofile())
                    };
                    var s = {
                        teamID: t.getTeamid(),
                        capacity: t.getCapacity(),
                        mode: t.getMode(),
                        owner: t.getOwner(),
                        playerList: o
                    };
                    a.push(s)
                });
                var t = {brigadeID: e.getBrigadeid(), teamList: a};
                p.push(t)
            });
            var g = new MsGetRoomDetailRsp(e.payload.getStatus(), r.getState(), r.getMaxplayer(), r.getMode(), r.getCanwatch(), utf8ByteArrayToString(r.getRoomproperty()), r.getOwner(), r.getCreateflag(), o, a, p);
            t.mRsp.getRoomDetailResponse && t.mRsp.getRoomDetailResponse(g)
        }
    }

    function C() {
        this.doSubHandle = function (e, t) {
            200 !== e.payload.getStatus() && u(t.mRsp.errorResponse, e.payload.getStatus(), "set room property fail"), t.mRsp.setRoomPropertyResponse && t.mRsp.setRoomPropertyResponse(new MsSetRoomPropertyRspInfo(e.payload.getStatus(), e.payload.getRoomid(), e.payload.getUserid(), utf8ByteArrayToString(e.payload.getRoomproperty())))
        }
    }

    function N() {
        this.doSubHandle = function (e, t) {
            t.mRsp.setRoomPropertyNotify && t.mRsp.setRoomPropertyNotify(new MsRoomPropertyNotifyInfo(e.payload.getRoomid(), e.payload.getUserid(), utf8ByteArrayToString(e.payload.getRoomproperty())))
        }
    }

    function W() {
        this.doSubHandle = function (e, t) {
            t.mRsp.joinOpenResponse && t.mRsp.joinOpenResponse(new MsReopenRoomResponse(e.payload.getStatus(), utf8ByteArrayToString(e.payload.getCpproto())))
        }
    }

    function P() {
        this.doSubHandle = function (e, t) {
            t.mRsp.joinOpenNotify && t.mRsp.joinOpenNotify(new MsReopenRoomNotify(e.payload.getRoomid(), e.payload.getUserid(), utf8ByteArrayToString(e.payload.getCpproto())))
        }
    }

    function L() {
        this.doSubHandle = function (e, t) {
            var r = e.payload, o = r.getStatus();
            if (200 !== o) return t.mEngineState &= ~MVS.ENGE_STATE.IN_WATCHING, u(t.mRsp.errorResponse, o, "join watch room error "), void (t.mRsp.joinWatchRoom && t.mRsp.joinWatchRoom(o));
            var i = r.getBookinfo();
            MVS.DEBUG && console.log("JoinWatchRoomRspWork bookInfo", i), MVS.Host.HOST_WATCH_ADDR = MVS.MsUtil.getLiveUrl(i, t.mGameID, r.getRoomid(), r.getSetid()), t.enterLiveRoom(r.getBookinfo(), r.getRoomid())
        }
    }

    function k() {
        this.doSubHandle = function (e, t) {
            t.mWatchNetwrok && t.mWatchNetwrok.close();
            var r = e.payload;
            MVS.DEBUG && console.log(MVS.LgFormat("LeaveWatchRoomRspWork"), r), 200 !== r.getStatus() && u(t.mRsp.errorResponse(r.getStatus(), " leave watch room error ")), t.mWatchRoomID = "0", t.mRsp.leaveWatchRoomResponse && t.mRsp.leaveWatchRoomResponse(r.getStatus())
        }
    }

    function U() {
        this.doSubHandle = function (e, t) {
            var r = e.payload;
            if (200 !== r.getStatus()) return t.mRsp.getRoomListExResponse && t.mRsp.getRoomListExResponse(new MsGetRoomListExRsp(r.getStatus(), 0, [])), void u(t.mRsp.errorResponse, r.getStatus(), "get watch room list error ");
            var o = r.getRoominfoexList(), i = [];
            o.forEach(function (e) {
                var t = e.getWatchinfo().getWatchsetting(),
                    r = new MVS.MsWatchSet(t.getCachetime(), t.getMaxwatch(), t.getWatchdelayms(), t.getWatchpersistent()),
                    o = new MsRoomAttribute(e.getRoomid(), e.getRoomname(), e.getMaxplayer(), e.getGameplayer(), e.getWatchplayer(), e.getMode(), e.getCanwatch(), utf8ByteArrayToString(e.getRoomproperty()), e.getOwner(), e.getState(), e.getCreatetime().toString(), r);
                i.push(o)
            });
            var s = new MsGetRoomListExRsp(r.getStatus(), r.getTotal(), i);
            t.mRsp.getWatchRoomsResponse && t.mRsp.getWatchRoomsResponse(s)
        }
    }

    function j() {
        this.doSubHandle = function (e, t) {
            t.mEngineState &= ~MVS.ENGE_STATE.IN_WATCHING;
            var r = e.payload, o = {};
            if (200 !== r.getStatus()) u(t.mRsp.errorResponse, r.getStatus(), "enter live room error"), o = new MVS.MsJoinWatchRoomRsp(r.getStatus(), 0, "", {}); else {
                t.mEngineState |= MVS.ENGE_STATE.IN_WATCH;
                var i = r.getWathchinfo(), s = [];
                t.mCntRoomType = MVS.TgRoomType.WRoom, t.mWatchRoomID = i.getRoomid(), i.getLastaudiencesList().forEach(function (e) {
                    var t = new MVS.MsLiveAudience(e.getUserid(), utf8ByteArrayToString(e.getProfile()), e.getEntertime());
                    s.push(t)
                });
                var a = new MVS.MsLiveWatchInfo(i.getRoomid(), i.getStartts(), i.getDelayms(), i.getCachems(), i.getMaxaudiences(), i.getCuraudiences(), i.getPeakaudiences(), s);
                o = new MVS.MsJoinWatchRoomRsp(r.getStatus(), r.getRoomstatus(), r.getReserved(), a)
            }
            t.mRsp.joinWatchRoomResponse && t.mRsp.joinWatchRoomResponse(o)
        }
    }

    function G() {
        this.doSubHandle = function (e, t) {
            var r = e.payload, o = new MsRoomUserInfo(r.getUserid(), utf8ByteArrayToString(r.getUserprofile()));
            MVS.DEBUG && console.log(MVS.LgFormat("EnterLiveRoomNotifyWork"), r), t.mRsp.joinWatchRoomNotify && t.mRsp.joinWatchRoomNotify(o)
        }
    }

    function x() {
        this.doSubHandle = function (e, t) {
            t.mRsp.watchHeartBeat && t.mRsp.watchHeartBeat(e.payload.getStatus())
        }
    }

    function z() {
        this.doSubHandle = function (e, t) {
            var r = e.payload;
            200 !== r.getStatus() && u(t.mRsp.errorResponse, r.getStatus(), " watch send message error "), t.mRsp.liveBroadcastResponse && t.mRsp.liveBroadcastResponse(r.getStatus())
        }
    }

    function V() {
        this.doSubHandle = function (e, t) {
            var r = e.payload;
            t.mRsp.liveBroadcastNotify && t.mRsp.liveBroadcastNotify(new MsSendEventNotify(r.getSrcuid(), utf8ByteArrayToString(r.getCpproto())))
        }
    }

    function H() {
        this.doSubHandle = function (e, t) {
            var r = e.payload;
            t.mRsp.setLiveOffsetResponse && t.mRsp.setLiveOffsetResponse(r.getStatus())
        }
    }

    function q() {
        this.doSubHandle = function (e, t) {
            var r = e.payload,
                o = new MVS.MsExitLiveRoomNotify(r.getUserid(), utf8ByteArrayToString(r.getUserprofile()));
            MVS.DEBUG && console.log(MVS.LgFormat("ExitLiveRoomNotifyWork"), o), t.mRsp.leaveWatchRoomNotify && t.mRsp.leaveWatchRoomNotify(o)
        }
    }

    function J() {
        this.doSubHandle = function (e, t) {
            var r = e.payload;
            MVS.DEBUG && console.log(MVS.LgFormat("LiveOverNotifyWork"), r), t.mRsp.liveOverNotify && t.mRsp.liveOverNotify(new MVS.MsLiveOverNotify(r.getGameid(), r.getRoomid()))
        }
    }

    function $() {
        var i = 0;
        this.doSubHandle = function (e, t) {
            var r = e.payload, o = utf8ByteArrayToString(r.getCpproto());
            console.log("收到数据总数：", i++, "context=" + o), e.frameCache.unshift(new MsFrameItem(r.getSrcuid(), o, r.getTimestamp()))
        }
    }

    function K() {
        this.doSubHandle = function (e, t) {
            for (var r = []; 0 < e.frameCache.length;) r.push(e.frameCache.pop());
            var o = new MsFrameData(e.payload.getLastidx(), r, r.length);
            t.mRsp.liveFrameUpdate && t.mRsp.liveFrameUpdate(o)
        }
    }

    function Y() {
        this.doSubHandle = function (e, t) {
            var r = e.payload;
            if (200 !== r.getStatus()) u(t.mRsp.errorResponse, r.getStatus(), " watch send message error "); else {
                var o = r.getBookinfo();
                if (r.getTargetroomtype() == MVS.TgRoomType.PRoom) {
                    MVS.ticker.clearInterval(e.watchTimer), t.mWatchNetwrok && t.mWatchNetwrok.close();
                    var i = r.getPlayroom().getRoominfo();
                    t.mRoomInfo = i, MVS.Host.HOST_HOTEL_ADDR = MVS.MsUtil.getHotelUrl(o), console.log("getRoomid():", i.getRoomid()), t.roomCheckIn(o, i)
                } else r.getTargetroomtype() == MVS.TgRoomType.WRoom && (MVS.ticker.clearInterval(e.hotelTimer), t.mEngineState &= ~MVS.ENGE_STATE.IN_ROOM, t.mEngineState |= MVS.ENGE_STATE.HAVE_LOGIN, t.mHotelNetWork && t.mHotelNetWork.close(), MVS.Host.HOST_WATCH_ADDR = MVS.MsUtil.getLiveUrl(o, t.mGameID, r.getRoomid(), r.getSetid()), t.enterLiveRoom(r.getBookinfo(), r.getRoomid()))
            }
            t.mRsp.changeRoleResponse(new MVS.MsChangeRoleRsp(r.getStatus(), r.getTargetroomtype()))
        }
    }

    function X() {
        this.doSubHandle = function (e, t) {
            var r = e.payload.getStatus();
            200 !== r && u(t.mRsp.errorResponse, r, " set reconnect timeout value response error"), t.mRsp.setReconnectTimeoutResponse && t.mRsp.setReconnectTimeoutResponse(r)
        }
    }

    function Q() {
        this.doSubHandle = function (e, t) {
            console.log("来啦");
            var r = e.payload.getStatus();
            200 !== r && u(t.mRsp.errorResponse, r, "create team response error"), t.mTeamID = e.payload.getTeamid();
            var o = {status: r, teamID: e.payload.getTeamid(), owner: e.payload.getOwner()};
            t.mRsp.createTeamResponse && t.mRsp.createTeamResponse(o)
        }
    }

    function Z() {
        this.doSubHandle = function (e, t) {
            var r = e.payload.getStatus();
            200 !== r && u(t.mRsp.errorResponse, r, "join team response error");
            var o = e.payload.getTeaminfo(), i = e.payload.getUsersList(), s = [];
            i.forEach(function (e) {
                s.push({userID: e.getUserid(), userProfile: utf8ByteArrayToString(e.getUserprofile())})
            });
            var a = {
                team: {
                    teamID: o.getTeamid() || "0",
                    password: o.getPassword() || "",
                    capacity: o.getCapacity() || 0,
                    mode: o.getMode() || 0,
                    owner: o.getOwner() || 0
                }, status: r, userList: s
            };
            t.mRsp.joinTeamResponse && t.mRsp.joinTeamResponse(a)
        }
    }

    function ee() {
        this.doSubHandle = function (e, t) {
            var r = e.payload.getUser(),
                o = {user: {userID: r.getUserid(), userProfile: utf8ByteArrayToString(r.getUserprofile())}};
            t.mRsp.joinTeamNotify && t.mRsp.joinTeamNotify(o)
        }
    }

    function te() {
        this.doSubHandle = function (e, t) {
            var r = e.payload.getStatus();
            200 !== r && u(t.mRsp.errorResponse, r, "leave team response error");
            var o = {status: r, teamID: e.payload.getTeamid() || "0", userID: e.payload.getUserid() || 0};
            t.mRsp.leaveTeamResponse && t.mRsp.leaveTeamResponse(o)
        }
    }

    function re() {
        this.doSubHandle = function (e, t) {
            var r = {
                teamID: e.payload.getTeamid() || "",
                userID: e.payload.getUserid() || 0,
                owner: e.payload.getOwner() || 0
            };
            t.mRsp.leaveTeamNotify && t.mRsp.leaveTeamNotify(r)
        }
    }

    function oe() {
        this.doSubHandle = function (e, t) {
            var r = e.payload.getStatus();
            200 !== r && u(t.mRsp.errorResponse, r, "team match response error");
            var o = {status: r};
            t.mRsp.teamMatchResponse && t.mRsp.teamMatchResponse(o)
        }
    }

    function ie() {
        this.doSubHandle = function (e, t) {
            var r = e.payload.getStatus();
            if (200 !== r) return u(t.mRsp.errorResponse, r, "team match error"), t.mEngineState &= ~MVS.ENGE_STATE.TEAMMATCHING, t.mRsp.teamMatchResultNotify && t.mRsp.teamMatchResultNotify({
                status: r,
                brigades: {},
                roomInfo: {}
            }), 0;
            var o = e.payload.getBookinfo();
            t.mRoomInfo = e.payload.getRoominfo();
            var i = e.payload.getBrigadesList(), s = [];
            return i.forEach(function (e) {
                var a = [];
                e.getTeamsList().forEach(function (e) {
                    for (var t = e.getTeaminfo(), r = e.getPlayerList(), o = [], i = 0; i < r.length; i++) o[i] = {
                        userID: r[i].getUserid(),
                        userProfile: utf8ByteArrayToString(r[i].getUserprofile())
                    };
                    var s = {
                        teamID: t.getTeamid(),
                        capacity: t.getCapacity(),
                        mode: t.getMode(),
                        owner: t.getOwner(),
                        playerList: o
                    };
                    a.push(s)
                });
                var t = {brigadeID: e.getBrigadeid(), teamList: a};
                s.push(t)
            }), t.teamNotifyInfo = {
                status: r,
                brigades: s,
                roomInfo: {}
            }, MVS.DEBUG && console.log(MVS.LgFormat("TeamMatchResultNotifyWork"), t.teamNotifyInfo), MVS.Host.HOST_HOTEL_ADDR = MVS.MsUtil.getHotelUrl(o), t.mEngineState |= MVS.ENGE_STATE.TEAMMATCHING, t.roomCheckIn(e.payload.getBookinfo(), e.payload.getRoominfo()), 0
        }
    }

    function se() {
        this.doSubHandle = function (e, t) {
            t.mEngineState |= MVS.ENGE_STATE.TEAMMATCHING;
            var r = {teamID: e.payload.getTeamid(), userID: e.payload.getUserid()};
            t.mRsp.teamMatchStartNotify && t.mRsp.teamMatchStartNotify(r)
        }
    }

    e.ErrorRspWork = u
}(MVS || {}), function (e) {
    var o;

    function t() {
        this.userID = 0, this.token = "", this.gameID = 0, this.gameVersion = "", this.appKey = "", this.deviceID = "", this.platform = ""
    }

    function r() {
        (o = this).mChannel = "MatchVS", this.mPlatform = "release", this.mMsPubArgs = new t, this.mEngineState = MVS.ENGE_STATE.NONE, this.mAllPlayers = [], this.mRecntRoomID = 0, this.mWatchRoomID = 0, this.mTeamID = "", this.mNetWorkCallBackImp = null, this.mUserListForJoinRoomRsp = [], this.joinRoomNotifyInfo = null, this.teamNotifyInfo = null, this.mCntRoomType = MVS.TgRoomType.NRoom, this.mGTWNetwork = null, this.mHotelNetWork = null, this.mWatchNetwrok = null, this.mProtocol = new e.MatchvsProtocol, this.init = function (e, t, r, o) {
            return MVS.Game.id = o, MVS.mtaReport && MVS.mtaReport.Report("init"), this.mRsp = e, this.mChannel = t, this.mPlatform = r, this.mGameID = o, this.mEngineState = MVS.ENGE_STATE.INITING, this.mProtocol.init(), this.getHostList(), 0
        }, this.premiseInit = function (e, t, r) {
            return void 0 === t || "" === t ? -1 : (this.mRsp = e, this.mGameID = r, MVS.Host.HOST_GATWAY_ADDR = "ws://" + t, this.mEngineState = MVS.ENGE_STATE.HAVE_INIT, this.mRsp.initResponse(200), 0)
        }, this.reconnect = function () {
            if ((this.mEngineState & MVS.ENGE_STATE.HAVE_INIT) !== MVS.ENGE_STATE.HAVE_INIT) return -2;
            if ((this.mEngineState & MVS.ENGE_STATE.RECONNECTING) === MVS.ENGE_STATE.RECONNECTING) return -9;
            if ("0" !== this.mRecntRoomID && (this.mEngineState & MVS.ENGE_STATE.HAVE_LOGIN) === MVS.ENGE_STATE.HAVE_LOGIN) {
                this.mEngineState |= MVS.ENGE_STATE.RECONNECTING;
                var e = new MsRoomJoin(MsEnum.JoinRoomType.reconnect, this.mMsPubArgs.userID, this.mRecntRoomID, this.mMsPubArgs.gameID, 0, 0, 0, "reconnect", [{name: "MatchVS"}]),
                    t = this.mProtocol.joinRoomSpecial(e);
                return this.mGTWNetwork.send(t), this.mRecntRoomID = "0", 0
            }
            if (void 0 === this.mMsPubArgs.gameID || void 0 === this.mMsPubArgs.appKey) return -1;
            if ((this.mEngineState & MVS.ENGE_STATE.HAVE_LOGIN) === MVS.ENGE_STATE.HAVE_LOGIN) return -6;
            void 0 !== this.mGTWNetwork && null !== this.mGTWNetwork && this.mGTWNetwork.close(), this.mEngineState |= MVS.ENGE_STATE.LOGINING, this.mEngineState |= MVS.ENGE_STATE.RECONNECTING, this.mNetWorkCallBackImp = new NetWorkCallBackImp(this), this.mGTWNetwork = new MVS.MatchvsNetWork(MVS.Host.HOST_GATWAY_ADDR, this.mNetWorkCallBackImp);
            var r = this.mProtocol.login(this.mMsPubArgs.userID, this.mMsPubArgs.token, this.mMsPubArgs.gameID, this.mMsPubArgs.gameVersion, this.mMsPubArgs.appKey, this.mMsPubArgs.deviceID);
            return this.mGTWNetwork.send(r), 0
        }, this.login = function (e, t, r, o, i, s) {
            if ((this.mEngineState & MVS.ENGE_STATE.HAVE_INIT) !== MVS.ENGE_STATE.HAVE_INIT) return -2;
            if ((this.mEngineState & MVS.ENGE_STATE.INITING) === MVS.ENGE_STATE.INITING) return -3;
            if ((this.mEngineState & MVS.ENGE_STATE.LOGINING) === MVS.ENGE_STATE.LOGINING) return -5;
            if ((this.mEngineState & MVS.ENGE_STATE.HAVE_LOGIN) === MVS.ENGE_STATE.HAVE_LOGIN) return -6;
            if ((this.mEngineState & MVS.ENGE_STATE.LOGOUTING) === MVS.ENGE_STATE.LOGOUTING) return -11;
            var a = new MVS.AppKeyCheck;
            if (MVS.Game.id = r, !a.isInvailed(i)) return -26;
            MVS.ccReport && MVS.ccReport.init(), MVS.ccReport && MVS.ccReport.login(r), void 0 !== this.mGTWNetwork && null !== this.mGTWNetwork && this.mGTWNetwork.close(), this.mNetWorkCallBackImp = new NetWorkCallBackImp(this), this.mGTWNetwork = new MVS.MatchvsNetWork(MVS.Host.HOST_GATWAY_ADDR, this.mNetWorkCallBackImp), this.mUserID = e, this.mToken = t, this.mGameID = r, this.mGameVersion = o, this.mAppKey = i, this.mMsPubArgs.userID = e, this.mMsPubArgs.token = t, this.mMsPubArgs.gameID = r, this.mMsPubArgs.gameVersion = o, this.mMsPubArgs.appKey = i, this.mMsPubArgs.deviceID = s;
            var n = this.mProtocol.login(e, t, r, o, i, s);
            return this.mEngineState |= MVS.ENGE_STATE.LOGINING, this.mGTWNetwork.send(n), MatchvsLog.logI("login,userID" + e + ", token:" + t), 0
        }, this.speed = function () {
            if ((this.mEngineState & MVS.ENGE_STATE.HAVE_LOGIN) !== MVS.ENGE_STATE.HAVE_LOGIN) return -4;
            var e = this.mProtocol.speed(this.mUserID, this.mGameID, this.mToken, VERSION, this.mGameVersion);
            return this.mGTWNetwork.send(e), 0
        }, this.createRoom = function (e, t, r) {
            var o = commEngineStateCheck(this.mEngineState, 2);
            if (0 !== o) return o;
            if (512 < t.length) return -21;
            if (e.maxPlayer > MVS.Config.MAXPLAYER_LIMIT || e.maxPlayer < MVS.Config.MINPLAYER_LIMIT) return -20;
            var i = {
                roomID: 0,
                roomName: e.roomName,
                maxPlayer: e.maxPlayer,
                mode: e.mode,
                canWatch: e.canWatch,
                visibility: e.visibility,
                roomProperty: e.roomProperty,
                owner: 0
            }, s = {userID: this.mUserID, userProfile: t}, a = this.mProtocol.roomCreate(this.mGameID, i, s, r);
            return 1024 < a.byteLength || 512 < t.length ? -21 : (this.mEngineState |= MVS.ENGE_STATE.CREATEROOM, this.mGTWNetwork.send(a), MatchvsLog.logI("create room"), 0)
        }, this.uninit = function () {
            return this.mEngineState = MVS.ENGE_STATE.NONE, this.mRsp = null, MatchvsLog.logI("unInit "), 0
        }, this.getRoomList = function (e) {
            var t = commEngineStateCheck(this.mEngineState, 2);
            if (0 !== t) return t;
            var r = this.mProtocol.getRoomList(this.mGameID, e);
            return 1024 < r.byteLength ? -21 : (this.mGTWNetwork.send(r), 0)
        }, this.roomCheckIn = function (e, t) {
            this.mNetWorkCallBackImp.frameCache = [], this.mHotelNetWork = new MVS.MatchvsNetWork(MVS.Host.HOST_HOTEL_ADDR, this.mNetWorkCallBackImp);
            var r = this.mProtocol.roomCheckIn(e, t, this.mUserID, this.mGameID);
            return this.mHotelNetWork.send(r), 0
        }, this.joinRandomRoom = function (e, t) {
            var r = commEngineStateCheck(this.mEngineState, 2);
            if (0 !== r) return r;
            if (e > MVS.Config.MAXPLAYER_LIMIT || e < MVS.Config.MINPLAYER_LIMIT) return -20;
            if (512 < t.length) return -21;
            var o = new MsRoomJoin(MsEnum.JoinRoomType.joinRandomRoom, this.mUserID, 0, this.mGameID, e, 0, 0, t, [{name: "matchvs"}]),
                i = this.mProtocol.joinRandomRoom(o);
            return this.mEngineState |= MVS.ENGE_STATE.JOIN_ROOMING, this.mGTWNetwork.send(i), 0
        }, this.joinRoomWithProperties = function (e, t, r) {
            var o = commEngineStateCheck(this.mEngineState, 2);
            if (0 !== o) return o;
            if (512 < t.length) return -21;
            if ("object" != typeof e) return -1;
            if ("string" != typeof t) return -1;
            if (e.maxPlayer > MVS.Config.MAXPLAYER_LIMIT || e.maxPlayer < MVS.Config.MINPLAYER_LIMIT) return -20;
            var i = new MsRoomJoin(MsEnum.JoinRoomType.joinRoomWithProperty, this.mUserID, 1, this.mGameID, e.maxPlayer, e.mode, e.canWatch, t, e.tags, e.visibility, e.roomProperty),
                s = this.mProtocol.joinRoomWithProperties(i, r);
            return this.mEngineState |= MVS.ENGE_STATE.JOIN_ROOMING, this.mGTWNetwork.send(s), 0
        }, this.joinRoom = function (e, t) {
            var r = commEngineStateCheck(this.mEngineState, 2);
            if (0 !== r) return r;
            if (!/^[0-9]+$/.test(e)) return -1;
            var o = String(e).trim();
            if (0 === o || "" === o) return -1;
            var i = new MsRoomJoin(MsEnum.JoinRoomType.joinSpecialRoom, this.mUserID, e, this.mGameID, 0, 0, 0, t, [{name: "MatchVS"}]),
                s = this.mProtocol.joinRoomSpecial(i);
            return this.mEngineState |= MVS.ENGE_STATE.JOIN_ROOMING, this.mGTWNetwork.send(s), MatchvsLog.logI("join room"), 0
        }, this.joinOver = function (e) {
            var t = commEngineStateCheck(this.mEngineState, 1);
            if (0 !== t) return t;
            if (1024 < e.length) return -21;
            var r = this.mProtocol.joinOver(this.mGameID, this.mRoomInfo.getRoomid(), stringToUtf8ByteArray(e), this.mUserID);
            return this.mGTWNetwork.send(r), 0
        }, this.leaveRoom = function (e) {
            var t = commEngineStateCheck(this.mEngineState, 3);
            if (0 !== t) return t;
            var r = this.mRecntRoomID;
            if (this.mRoomInfo && this.mRoomInfo.getRoomid && (r = this.mRoomInfo.getRoomid()), 1024 < e.length) return -21;
            var o = this.mProtocol.leaveRoom(this.mGameID, this.mUserID, r, e);
            return this.mGTWNetwork.send(o), this.mEngineState |= MVS.ENGE_STATE.LEAVE_ROOMING, this.mHotelNetWork && this.mHotelNetWork.close(), MatchvsLog.logI("leaveRoom"), 0
        }, this.kickPlayer = function (e, t) {
            var r = commEngineStateCheck(this.mEngineState, 1);
            if (0 !== r) return r;
            if (1024 < t.length) return -21;
            var o = this.mProtocol.kickPlayer(e, this.mUserID, this.mRoomInfo.getRoomid(), t);
            return this.mGTWNetwork.send(o), 0
        }, this.setFrameSync = function (e, t) {
            var r = commEngineStateCheck(this.mEngineState, 1);
            if (0 !== r) return r;
            if (20 < e || e < 0) return -20;
            var o = {
                gameID: this.mGameID,
                roomID: this.mRoomInfo.getRoomid(),
                priority: 0,
                frameRate: e,
                frameidx: 1,
                enableGS: t
            }, i = this.mProtocol.setFrameSync(o);
            return this.mHotelNetWork.send(i), 0
        }, this.sendFrameEvent = function (e, t) {
            var r = commEngineStateCheck(this.mEngineState, 1);
            if (0 !== r) return r;
            if (1024 < e.length) return -21;
            var o = this.mProtocol.sendFrameEvent(this.mRoomInfo.getRoomid(), 0, e, t);
            return this.mHotelNetWork.send(o), 0
        }, this.joinOpen = function (e) {
            var t = commEngineStateCheck(this.mEngineState, 1);
            if (0 !== t) return t;
            var r = this.mProtocol.joinOpen(this.mGameID, this.mUserID, this.mRoomInfo.getRoomid(), e);
            return this.mGTWNetwork.send(r), 0
        }
    }

    r.prototype.logout = function (e) {
        if ((this.mEngineState & MVS.ENGE_STATE.HAVE_LOGIN) !== MVS.ENGE_STATE.HAVE_LOGIN) return -4;
        (this.mEngineState & MVS.ENGE_STATE.IN_ROOM) === MVS.ENGE_STATE.IN_ROOM && (this.mEngineState |= MVS.ENGE_STATE.LEAVE_ROOMING, this.leaveRoom("user logout"), this.mHotelNetWork && this.mHotelNetWork.close()), MVS.ccReport && MVS.ccReport.logout();
        var t = this.mProtocol.logout(e);
        return this.mEngineState |= MVS.ENGE_STATE.LOGOUTING, this.mGTWNetwork.send(t), 0
    }, r.prototype.heartBeat = function () {
        var e, t = o;
        if (void 0 !== t.mGameID && "" !== t.mGameID && 0 !== t.mGameID && (e = void 0 === t.mRoomInfo ? 0 : t.mRoomInfo.getRoomid(), (t.mEngineState & MVS.ENGE_STATE.LOGOUTING) !== MVS.ENGE_STATE.LOGOUTING)) {
            var r = t.mProtocol.heartBeat(t.mGameID, e);
            t.mGTWNetwork.send(r), MatchvsLog.logI("gateway heartBeat")
        }
    }, r.prototype.sendEvent = function (e) {
        if ((this.mEngineState & MVS.ENGE_STATE.HAVE_INIT) !== MVS.ENGE_STATE.HAVE_INIT) return {
            sequence: this.mProtocol.seq - 1,
            result: -2
        };
        if ((this.mEngineState & MVS.ENGE_STATE.HAVE_LOGIN) !== MVS.ENGE_STATE.HAVE_LOGIN) return {
            sequence: this.mProtocol.seq - 1,
            result: -4
        };
        if ((this.mEngineState & MVS.ENGE_STATE.IN_ROOM) !== MVS.ENGE_STATE.IN_ROOM) return {
            sequence: this.mProtocol.seq - 1,
            result: -6
        };
        if ((this.mEngineState & MVS.ENGE_STATE.INITING) === MVS.ENGE_STATE.INITING) return {
            sequence: this.mProtocol.seq - 1,
            result: -3
        };
        if ((this.mEngineState & MVS.ENGE_STATE.CREATEROOM) === MVS.ENGE_STATE.CREATEROOM) return {
            sequence: this.mProtocol.seq - 1,
            result: -7
        };
        if ((this.mEngineState & MVS.ENGE_STATE.JOIN_ROOMING) === MVS.ENGE_STATE.JOIN_ROOMING) return {
            sequence: this.mProtocol.seq - 1,
            result: -7
        };
        if ("string" != typeof e) return {sequence: this.mProtocol.seq - 1, result: -1};
        for (var t = [], r = 0, o = 0; o < this.mAllPlayers.length; o++) this.mAllPlayers[o] !== parseInt(this.mUserID) && (t[r++] = this.mAllPlayers[o]);
        if (t.length > MVS.Config.MAXPLAYER_LIMIT) return -20;
        if (1024 < e.length) return -21;
        var i = this.mProtocol.broadCast(this.mRoomInfo.getRoomid(), t, 0, 0, stringToUtf8ByteArray(e));
        return this.mHotelNetWork.send(i), {sequence: this.mProtocol.seq - 1, result: 0}
    }, r.prototype.sendEventEx = function (e, t, r, o) {
        if ((this.mEngineState & MVS.ENGE_STATE.HAVE_INIT) !== MVS.ENGE_STATE.HAVE_INIT) return {
            sequence: this.mProtocol.seq - 1,
            result: -2
        };
        if ((this.mEngineState & MVS.ENGE_STATE.HAVE_LOGIN) !== MVS.ENGE_STATE.HAVE_LOGIN) return {
            sequence: this.mProtocol.seq - 1,
            result: -4
        };
        if ((this.mEngineState & MVS.ENGE_STATE.IN_ROOM) !== MVS.ENGE_STATE.IN_ROOM) return {
            sequence: this.mProtocol.seq - 1,
            result: -6
        };
        if ((this.mEngineState & MVS.ENGE_STATE.INITING) === MVS.ENGE_STATE.INITING) return {
            sequence: this.mProtocol.seq - 1,
            result: -3
        };
        if ((this.mEngineState & MVS.ENGE_STATE.CREATEROOM) === MVS.ENGE_STATE.CREATEROOM) return {
            sequence: this.mProtocol.seq - 1,
            result: -7
        };
        if ((this.mEngineState & MVS.ENGE_STATE.JOIN_ROOMING) === MVS.ENGE_STATE.JOIN_ROOMING) return {
            sequence: this.mProtocol.seq - 1,
            result: -7
        };
        if ("string" != typeof t) return {sequence: this.mProtocol.seq - 1, result: -1};
        if (0 !== e && 1 !== e && 2 !== e) return {sequence: this.mProtocol.seq - 1, result: -23};
        if (0 !== r && 1 !== r) return {sequence: this.mProtocol.seq - 1, result: -24};
        if (1024 < t.length) return -21;
        var i = this.mProtocol.broadCast(this.mRoomInfo.getRoomid(), o, r, e, stringToUtf8ByteArray(t));
        return this.mHotelNetWork.send(i), {sequence: this.mProtocol.seq - 1, result: 0}
    }, r.prototype.subscribeEventGroup = function (e, t) {
        var r = commEngineStateCheck(this.mEngineState, 1);
        if (0 !== r) return r;
        if (0 === e.length && 0 === t.length) return -20;
        var o = this.mProtocol.subscribeEventGroup(this.mGameID, this.mRoomInfo.getRoomid(), e, t);
        return this.mHotelNetWork.send(o), 0
    }, r.prototype.sendEventGroup = function (e, t) {
        var r = commEngineStateCheck(this.mEngineState, 1);
        if (0 !== r) return r;
        if (t.length <= 0) return -20;
        if (1024 < e.length) return -21;
        var o = this.mProtocol.sendEventGroup(this.mGameID, this.mRoomInfo.getRoomid(), 1, t, e);
        return this.mHotelNetWork.send(o), 0
    }, r.prototype.hotelHeartBeat = function () {
        var e = o;
        if ((e.mEngineState & MVS.ENGE_STATE.LEAVE_ROOMING) === MVS.ENGE_STATE.LEAVE_ROOMING) return 0;
        e.mEngineState |= MVS.ENGE_STATE.IN_ROOM, e.mEngineState |= MVS.ENGE_STATE.HAVE_LOGIN;
        var t = e.mProtocol.hotelHeartBeat(e.mGameID, e.mRoomInfo.getRoomid(), e.mUserID);
        e.mHotelNetWork.send(t), MatchvsLog.logI("hotel heartBeat")
    }, r.prototype.registerUser = function () {
        if (MVS.mtaReport && MVS.mtaReport.Report("registerUser"), (this.mEngineState & MVS.ENGE_STATE.HAVE_INIT) !== MVS.ENGE_STATE.HAVE_INIT) return -2;
        var e = this.mChannel, r = "regUserInfo" + e + this.mPlatform, t = this.mGameVersion, o = LocalStore_Load(r);
        if (o) {
            var i = JSON.parse(o);
            return this.mRsp.registerUserResponse(new MsRegistRsp(i.status, i.data.userid, i.data.token, i.data.nickname, i.data.avatar)), MatchvsLog.logI("load user info from cache:" + i), 0
        }
        var s = MVS.Host.REGISTER_USER_URL + "/wc3/regit.do?mac=0&deviceid=javascript&channel=" + e + "&pid=13&version=" + t,
            a = new MVS.MatchvsNetWorkCallBack;
        return a.rsp = this.mRsp.registerUserResponse, a.onMsg = function (e) {
            var t = JSON.parse(e);
            0 === t.status ? (LocalStore_Save(r, e), this.rsp(new MsRegistRsp(t.status, t.data.userid, t.data.token, t.data.nickname, t.data.avatar))) : this.rsp(new MsRegistRsp(t.status, 0, "err", e, "err")), MVS.mtaReport && MVS.mtaReport.Report("registerUserResponse")
        }, a.onErr = function (e, t) {
            this.rsp(new MsRegistRsp(0 === e ? -1 : e, 0, "err", t, "err"))
        }, new MVS.MatchvsHttp(a).get(s), 0
    }, r.prototype.getHostList = function () {
        var e = this.mGameID, t = this.mChannel, r = this.mPlatform, o = MVS.MsUtil.isNeedUseWSS(),
            i = "https://sdk.matchvs.com/v1/gateway/query?mac=0&gameid=" + e + "&channel=" + t + "&platform=" + r + (o ? "&useWSSProxy=1" : ""),
            s = new MVS.MatchvsNetWorkCallBack, a = this;
        return s.onMsg = function (e) {
            var t = JSON.parse(e);
            if (200 === t.status) {
                a.mEngineState |= MVS.ENGE_STATE.HAVE_INIT, a.mEngineState &= ~MVS.ENGE_STATE.INITING;
                var r = "https://";
                MVS.Host.REGISTER_USER_URL = r + t.data.vsuser, MVS.Host.HOST_GATWAY_ADDR = (o ? "wss://" : "ws://") + (o ? t.data.wssProxy : t.data.engine + ":7001"), MVS.Host.CMSNS_URL = r + t.data.cmsns, MVS.Host.VS_OPEN_URL = r + t.data.vsopen, MVS.Host.VS_PAY_URL = r + t.data.vspay, MVS.Host.VS_PRODUCT_URL = r + t.data.VS_PRODUCT_URL
            }
            MVS.mtaReport && MVS.mtaReport.Report("initResponse"), a.mRsp.initResponse(t.status)
        }, s.onErr = function (e, t) {
            console.error("getHostListErrCode" + e + " getHostListErrMsg" + t), a.mRsp.errorResponse(e, t)
        }, new MVS.MatchvsHttp(s).get(i), 0
    }, r.prototype.getRoomListEx = function (e) {
        var t = commEngineStateCheck(this.mEngineState, 0);
        if (0 !== t) return t;
        var r = this.mProtocol.getRoomListEx(this.mGameID, e);
        return this.mGTWNetwork.send(r), 0
    }, r.prototype.getRoomDetail = function (e) {
        var t = commEngineStateCheck(this.mEngineState, 0);
        if (0 !== t) return t;
        var r = this.mProtocol.getRoomDetail(this.mGameID, e);
        return this.mGTWNetwork.send(r), 0
    }, r.prototype.setRoomProperty = function (e, t) {
        if (0 === t.length) return -1;
        if (1024 < t.length) return -21;
        var r = commEngineStateCheck(this.mEngineState, 1);
        if (0 !== r) return r;
        var o = this.mProtocol.setRoomProperty(this.mGameID, this.mUserID, e, t);
        return this.mGTWNetwork.send(o), 0
    }, r.prototype.disConnect = function (e) {
        var t = engine.mProtocol.disConnect(this.mUserID, this.mGameID, e);
        this.mGTWNetwork.send(t)
    }, r.prototype.joinWatchRoom = function (e, t) {
        var r = commEngineStateCheck(this.mEngineState, 2);
        if (0 !== r) return r;
        if (512 < t.length) return -21;
        this.mWatchRoomID = e;
        var o = this.mProtocol.joinWatchRoom(this.mGameID, this.mUserID, this.mWatchRoomID, t);
        return this.mEngineState |= MVS.ENGE_STATE.IN_WATCHING, this.mGTWNetwork.send(o), r
    }, r.prototype.enterLiveRoom = function (e, t) {
        this.mNetWorkCallBackImp.frameCache = [], t && (this.mWatchRoomID = t), this.mWatchNetwrok = new MVS.MatchvsNetWork(MVS.Host.HOST_WATCH_ADDR, this.mNetWorkCallBackImp);
        var r = this.mProtocol.enterLiveRoom(e, this.mGameID, this.mUserID, this.mWatchRoomID, 0);
        return this.mWatchNetwrok.send(r), 0
    }, r.prototype.liveHeartBeat = function () {
        var e = o, t = e.mRecntRoomID, r = e.mProtocol.liveHeartBeat(e.mGameID, t, e.mUserID);
        return e.mWatchNetwrok.send(r), MatchvsLog.logI("live heartBeat"), 0
    }, r.prototype.leaveWatchRoom = function (e) {
        var t = commEngineStateCheck(this.mEngineState, 0);
        if (0 !== t) return t;
        var r = this.mWatchRoomID, o = this.mProtocol.leaveWatchRoom(this.mGameID, this.mUserID, r, e);
        return this.mGTWNetwork.send(o), MatchvsLog.logI("leaveWatchRoom"), 0
    }, r.prototype.sendWatchEvent = function (e, t, r, o) {
        var i = this.mRecntRoomID;
        if (1024 < o.length) return -21;
        var s = this.mProtocol.broadCastWatch(i, e, r, t, o);
        return this.mWatchNetwrok.send(s), 0
    }, r.prototype.setLiveOffset = function (e) {
        var t = commEngineStateCheck(this.mEngineState, 4);
        if (0 !== t) return t;
        var r = this.mWatchRoomID, o = this.mProtocol.setLiveOffset(this.mGameID, r, this.mUserID, e);
        return this.mWatchNetwrok.send(o), 0
    }, r.prototype.getWatchRoomList = function (e) {
        var t = commEngineStateCheck(this.mEngineState, 0);
        if (0 !== t) return t;
        var r = this.mProtocol.getWatchRooms(this.mGameID, e);
        return this.mGTWNetwork.send(r), 0
    }, r.prototype.changeRole = function (e, t) {
        var r = this.mWatchRoomID, o = 0, i = commEngineStateCheck(this.mEngineState, 0);
        if (0 !== i) return i;
        if (MatchvsLog.logI("targetRoomType:" + t + " mCntRoomType:" + this.mCntRoomType + " roomID:" + this.mRecntRoomID), this.mCntRoomType == MVS.TgRoomType.PRoom) {
            if (i = commEngineStateCheck(this.mEngineState, 1), this.mCntRoomType == t) return -30;
            r = this.mRecntRoomID, o = MVS.TgRoomType.WRoom
        } else {
            if (this.mCntRoomType != MVS.TgRoomType.WRoom) return -1;
            if (i = commEngineStateCheck(this.mEngineState, 4), this.mCntRoomType == t) return -30;
            r = this.mWatchRoomID, o = MVS.TgRoomType.PRoom
        }
        if (0 !== i) return i;
        var s = this.mProtocol.changeRoleProto(this.mUserID, this.mGameID, r, o, e);
        return this.mGTWNetwork.send(s), 0
    }, r.prototype.setReconnectTimeout = function (e) {
        var t = Number(e), r = commEngineStateCheck(this.mEngineState, 0);
        if (0 !== r) return r;
        if (t < 0 || 600 < t) return -27;
        var o = this.mProtocol.setReconnectTimeout(this.mUserID, e);
        return this.mGTWNetwork.send(o), 0
    }, r.prototype.createTeam = function (e) {
        var t = commEngineStateCheck(this.mEngineState, 2);
        if (0 !== t) return t;
        if (512 < e.userProfile.length) return -21;
        if (50 < Number(e.capacity)) return -20;
        var r = {
            teamID: "0",
            password: e.password,
            capacity: e.capacity,
            mode: e.mode,
            owner: 0,
            visibility: e.visibility
        }, o = {userID: this.mUserID, userProfile: e.userProfile}, i = this.mProtocol.CreateTeam(this.mGameID, r, o);
        return this.mGTWNetwork.send(i), 0
    }, r.prototype.joinTeam = function (e) {
        var t = commEngineStateCheck(this.mEngineState, 2);
        if (0 !== t) return t;
        if (512 < e.userProfile.length) return -21;
        this.mTeamID = e.teamID;
        var r = {
            gameID: this.mGameID,
            teamID: e.teamID,
            password: e.password,
            player: {userID: this.mUserID, userProfile: e.userProfile}
        }, o = this.mProtocol.JoinTeam(r);
        return this.mGTWNetwork.send(o), 0
    }, r.prototype.leaveTeam = function () {
        var e = commEngineStateCheck(this.mEngineState, 0);
        if (0 !== e) return e;
        var t = {gameID: this.mGameID, userID: this.mUserID, teamID: this.mTeamID}, r = this.mProtocol.LeaveTeam(t);
        return this.mGTWNetwork.send(r), 0
    }, r.prototype.teamMatch = function (e) {
        var t = commEngineStateCheck(this.mEngineState, 2);
        if (0 !== t) return t;
        if (512 < e.roomProperty.length) return -21;
        if (100 < e.maxPlayer || e.maxPlayer < 0) return -20;
        var r = {
            gameID: this.mGameID,
            teamID: this.mTeamID,
            userID: this.mUserID,
            cond: e.cond,
            watchSet: e.watchSet,
            roomInfo: {
                roomName: e.roomName,
                mode: e.mode,
                maxPlayer: e.maxPlayer,
                canWatch: e.canWatch,
                visibility: e.visibility,
                roomProperty: e.roomProperty
            }
        }, o = this.mProtocol.TeamMatch(r);
        return this.mEngineState |= MVS.ENGE_STATE.TEAMMATCHING, this.mGTWNetwork.send(o), 0
    }, window.MatchvsEngine = r, e.MatchvsEngine = r
}(MVS || {});
try {
    module && module.exports && (module.exports = {
        MVS: MVS,
        MatchvsLog: MatchvsLog,
        MatchvsEngine: MVS.MatchvsEngine,
        MatchvsResponse: MatchvsResponse,
        MsMatchInfo: MsMatchInfo,
        MsCreateRoomInfo: MsCreateRoomInfo,
        MsRoomFilter: MsRoomFilter,
        MsRoomFilterEx: MsRoomFilterEx,
        LocalStore_Clear: LocalStore_Clear,
        MsReopenRoomResponse: MsReopenRoomResponse,
        MsReopenRoomNotify: MsReopenRoomNotify,
        MatchvsHttp: MVS.MatchvsHttp
    })
} catch (e) {
    console.log(e)
}
window.MVS = MVS, window.MatchvsLog = MatchvsLog, window.MatchvsEngine = MatchvsEngine, window.MatchvsResponse = MatchvsResponse, window.MsMatchInfo = MsMatchInfo, window.MsCreateRoomInfo = MsCreateRoomInfo, window.MsRoomFilter = MsRoomFilter, window.MsRoomFilterEx = MsRoomFilterEx, window.LocalStore_Clear = LocalStore_Clear, window.MsReopenRoomResponse = MsReopenRoomResponse, window.MsReopenRoomNotify = MsReopenRoomNotify, window.MatchvsHttp = MVS.MatchvsHttp;