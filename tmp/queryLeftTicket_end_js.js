// scriptVersion = 1.9358

(function(C) {
    jQuery.extend({
        ht_getcookie: function(W) {
            var k = document.cookie.indexOf(W);
            var i = document.cookie.indexOf(";", k);
            return k == -1 ? "" : unescape(document.cookie.substring(k + W.length + 1, (i > k ? i : document.cookie.length)))
        },
        ht_setcookie: function(aa, Z, Y, X, k, W) {
            var i = new Date();
            i.setTime(i.getTime() + Y * 1000);
            document.cookie = escape(aa) + "=" + escape(Z) + (i ? "; expires=" + i.toGMTString() : "") + (X ? "; path=" + X : "; path=/") + (k ? "; domain=" + k : "") + (W ? "; secure" : "")
        },
        textFocus: function(W) {
            var k, i, W = W === undefined ? 0 : parseInt(W);
            this.each(function() {
                if (!this.setSelectionRange) {
                    k = this.createTextRange();
                    W === 0 ? k.collapse(false) : k.move("character", W);
                    k.select()
                } else {
                    i = this.value.length;
                    W === 0 ? this.setSelectionRange(i, i) : this.setSelectionRange(W, W)
                }
                this.focus()
            });
            return this
        }
    });
    var w = [];
    var D = [];
    var E = [];
    var G = [];
    var v = 0;
    var y = 0;
    var A = 0;
    var S = 0;
    var U = false;
    var g = false;
    var H = false;
    var z = 0;
    var I = null;
    var m = -1;
    var N = {};
    var f = [];
    var e = [];
    var d = [];
    var b = [];
    var V = [];
    var F = new Array("a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z");
    var j = [];
    var x = false;
    var c = [];
    for (var R = 0; R < 26; R++) {
        c[R] = []
    }
    var P = [];
    for (var T = 0; T < 5; T++) {
        P[T] = []
    }
    var t = [];
    var s = [];
    var q = [];
    var p = [];
    var o = [];
    var K = [];
    var a = false;
    var L = true;
    var u = 12;
    var h = "简码/汉字";
    var n = "简码/汉字";
    var r = "inp-txt_select";
    var l = "inp-txt";
    var B = false;
    var J = null;
    var Q = null;
    var M = false;
    var O = C.ht_getcookie("hj_favcity");
    C.stationFor12306 = {
        bindInputs: [],
        get_initInputValue: function() {
            return h
        },
        get_initTopInputValue: function() {
            return n
        },
        city_Bind: function(k) {
            if (k.length == 0) {
                return
            }
            var i = "";
            C.each(k, function(W) {
                if (O == k[W][2]) {
                    i += "<div class='cityline' id='citem_" + W + "' cturn='" + k[W][6] + "'><span class='ralign'><b>" + k[W][1] + "</b></span></div>\n"
                } else {
                    i += "<div class='cityline' id='citem_" + W + "' cturn='" + k[W][6] + "'><span class='ralign'>" + k[W][1] + "</span><span style='float:right;' class='ralign'>" + k[W][3] + "</span></div>\n"
                }
            });
            C("#panel_cities").html(i);
            C(".cityline").mouseover(function() {
                C.stationFor12306.city_shiftSelect(this)
            }).click(function() {
                C.stationFor12306.city_confirmSelect();
                E = C.stationFor12306.filterCity("");
                C.stationFor12306.city_showlist(0)
            });
            C.stationFor12306.city_shiftSelect(C("#citem_0"))
        },
        city_changeSelectIndex: function(i) {
            var k = A + i;
            if (k == -1) {
                C.stationFor12306.city_showlist(z - 1);
                C.stationFor12306.city_shiftSelect(C("#citem_" + (G.length - 1)))
            } else {
                if (k == G.length) {
                    C.stationFor12306.city_showlist(z + 1);
                    C.stationFor12306.city_shiftSelect(C("#citem_0"))
                } else {
                    C.stationFor12306.city_shiftSelect(C("#citem_" + k))
                }
            }
        },
        city_confirmSelect: function() {
            I.val(S[1]);
            curObjCode.val(S[2]);
            if (B) {
                C.stationFor12306.setStationInCookies(S[1], S[2])
            }
            C("#form_cities").css("display", "none");
            C("#form_cities2").css("display", "none");
            C("#form_cities3").css("display", "none");
            m = -1;
            y = 0;
            C.stationFor12306.setStationStyle();
            if (L) {
                C.stationFor12306.LoadJS(S[2])
            }
            if (J) {
                J(I, curObjCode)
            }
        },
        city_shiftSelect: function(k) {
            if (v != k) {
                if (v != 0) {
                    C(v).removeClass("citylineover").addClass("cityline").css("backgroundColor", "white")
                }
                if (k != 0) {
                    try {
                        v = k;
                        var i = C(v).removeClass("cityline").addClass("citylineover").css("backgroundColor", "#c8e3fc");
                        A = Number(i.attr("id").split("_")[1]);
                        S = w[Number(i.attr("cturn"))];
                        C("#cityid").val(S[2])
                    } catch (W) {}
                }
            }
        },
        city_shiftSelectInLi: function(i) {
            if (y != i) {
                if (y != 0) {
                    C(y).removeClass("ac_over").addClass("ac_odd")
                }
                if (i != 0) {
                    try {
                        y = i;
                        C(y).removeClass("ac_odd").addClass("ac_over")
                    } catch (k) {}
                }
            }
        },
        js: function(W) {
            var k;
            for (k = 1; k <= 7; k++) {
                if (C("#nav_list" + k).attr("class")) {
                    C("#ul_list" + k).css("display", "none");
                    C("#nav_list" + k).removeClass("action")
                }
            }
            for (k = 1; k <= 7; k++) {
                if (k == W) {
                    C("#ul_list" + k).css("display", "block");
                    C("#nav_list" + k).addClass("action");
                    if (k == 1 || k == 7) {
                        C("#flip_cities2").css("display", "none")
                    }
                    if (k > 1 && k < 7) {
                        var Y = C.stationFor12306.tHtmlGetCityName(W - 1, -1, 0);
                        if (Y > u) {
                            var X = Math.ceil(Y / u);
                            if (X > 1) {
                                C.stationFor12306.pageDesigh(X, 0, k)
                            }
                            C("#flip_cities2").css("display", "block")
                        } else {
                            C("#flip_cities2").css("display", "none")
                        }
                    } else {
                        I.focus()
                    }
                } else {
                    C("#ul_list" + k).css("display", "none");
                    C("#nav_list" + k).removeClass("action")
                }
            }
            if (1 != W) {
                C(".ac_even").on("mouseover", function() {
                    C.stationFor12306.city_shiftSelectInLi(this)
                }).on("click", function() {
                    I.val(C(this).text());
                    curObjCode.val(C(this).attr("data"));
                    if (B) {
                        C.stationFor12306.setStationInCookies(C(this).text(), C(this).attr("data"))
                    }
                    C("#form_cities2").css("display", "none");
                    m = -1;
                    y = 0;
                    C.stationFor12306.setStationStyle();
                    if (L) {
                        C.stationFor12306.LoadJS(C(this).attr("data"))
                    }
                    if (J) {
                        J(I, curObjCode)
                    }
                })
            }
        },
        tHtmlGetCityName: function(k, i, X) {
            switch (k) {
            case 0:
                if (i == -1) {
                    return D.length
                }
                if (i == -2) {
                    return D
                }
                return D[i];
                break;
            case 1:
                if (i == -1) {
                    return c[3].length
                }
                if (i == -2) {
                    return f
                }
                if (f.length > u) {
                    var W = Math.ceil((f.length) / u);
                    if (W > 1) {
                        t = f.slice(u * (X), Math.min(u * (X + 1), f.length));
                        return t[i]
                    }
                }
                return f[i];
                break;
            case 2:
                if (i == -1) {
                    return c[7].length
                }
                if (i == -2) {
                    return e
                }
                if (e.length > u) {
                    var W = Math.ceil((e.length) / u);
                    if (W > 1) {
                        s = e.slice(u * (X), Math.min(u * (X + 1), e.length));
                        return s[i]
                    }
                }
                return e[i];
                break;
            case 3:
                if (i == -1) {
                    return c[11].length
                }
                if (i == -2) {
                    return d
                }
                if (d.length > u) {
                    var W = Math.ceil((d.length) / u);
                    if (W > 1) {
                        q = d.slice(u * (X), Math.min(u * (X + 1), d.length));
                        return q[i]
                    }
                }
                return d[i];
                break;
            case 4:
                if (i == -1) {
                    return c[18].length
                }
                if (i == -2) {
                    return b
                }
                if (b.length > u) {
                    var W = Math.ceil((b.length) / u);
                    if (W > 1) {
                        p = b.slice(u * (X), Math.min(u * (X + 1), b.length));
                        return p[i]
                    }
                }
                return b[i];
                break;
            case 5:
                if (i == -1) {
                    return c[24].length
                }
                if (i == -2) {
                    return V
                }
                if (V.length > u) {
                    var W = Math.ceil((V.length) / u);
                    if (W > 1) {
                        o = V.slice(u * (X), Math.min(u * (X + 1), V.length));
                        return o[i]
                    }
                }
                return V[i];
                break;
            default:
                return "error";
                break
            }
        },
        closeShowCity: function() {
            C("#form_cities2").css("display", "none");
            m = -1;
            y = 0;
            C.each(C.stationFor12306.bindInputs, function(Y, X) {
                var W = "#" + X;
                var k = "#" + X + "Text";
                var i = C(k).val();
                if ("" == i) {
                    C(k).val(h);
                    C.stationFor12306.from_to_station_class_gray(C(k));
                    C(W).val("")
                }
            })
        },
        showAllCity: function() {
            var ab = "";
            var k = "440px";
            if (B) {
                k = "400px"
            }
            ab = '<div class="com_hotresults" id="thetable" style="width:' + k + '"><div style="width:100%;"><div class="ac_title"><span>拼音支持首字母输入</span><a class="ac_close" style="cursor:pointer" title="关闭" onclick="$.stationFor12306.closeShowCity()"></a></div><ul class="AbcSearch clx" id="abc">';
            if (B) {
                ab = ab + '<li class="action" index="7" method="liHotTab"  onclick="$.stationFor12306.js(7)" id="nav_list7">常用</li>'
            }
            ab = ab + '<li index="1" method="liHotTab"  onclick="$.stationFor12306.js(1)" id="nav_list1">热门</li><li index="2" method="liHotTab"  onclick="$.stationFor12306.js(2)" id="nav_list2">ABCDE</li><li index="3" method="liHotTab"  onclick="$.stationFor12306.js(3)" id="nav_list3">FGHIJ</li><li index="4" method="liHotTab"  onclick="$.stationFor12306.js(4)" id="nav_list4">KLMNO</li><li index="5" method="liHotTab"  onclick="$.stationFor12306.js(5)" id="nav_list5">PQRST</li><li index="6" method="liHotTab"  onclick="$.stationFor12306.js(6)" id="nav_list6">UVWXYZ</li></ul>';
            if (B) {
                ab += '<ul class="popcitylist" style="overflow: auto;max-height: 280px;height: 191px;" method="hotData" id="ul_list7">';
                var ac = C.stationFor12306.getStationInCookies();
                var Y = ac.length;
                if (Y > 2) {
                    M = true;
                    for (var ad = 0; ad < Y; ad++) {
                        ab += '<li class="ac_even"   title="' + ac[ad][0] + '" data="' + ac[ad][1] + '">' + ac[ad][0] + "</li>"
                    }
                }
                ab += "</ul>"
            }
            ab += '<ul class="popcitylist" style="overflow: auto;max-height: 280px;height: 191px;display:none;" method="hotData" id="ul_list1">';
            var X = C.stationFor12306.tHtmlGetCityName(0, -1, 0);
            var aa = "";
            if (!B) {
                aa = " openLi"
            }
            for (var ad = 0; ad < X; ad++) {
                ab += '<li class="ac_even' + aa + '"   title="' + C.stationFor12306.tHtmlGetCityName(0, ad, 0)[1] + '" data="' + C.stationFor12306.tHtmlGetCityName(0, ad, 0)[2] + '">' + C.stationFor12306.tHtmlGetCityName(0, ad, 0)[1] + "</li>"
            }
            ab += "</ul>";
            for (var ae = 2; ae <= 6; ae++) {
                var Z = ae - 1;
                var i = C.stationFor12306.tHtmlGetCityName(Z, -1, 0);
                if (i > u) {
                    var W = Math.ceil((i) / u);
                    if (W > 1) {
                        ab += '<div id="ul_list' + ae + '">';
                        C.stationFor12306.pageDesigh(W, 0, ae)
                    }
                    C("#flip_cities2").css("display", "block")
                } else {
                    ab += '<ul  class="popcitylist" style="overflow: auto; max-height: 260px; height: 191px;display:none;" id="ul_list' + ae + '">';
                    C("#flip_cities2").css("display", "none");
                    var aa = "";
                    if (!B) {
                        aa = " openLi"
                    }
                    for (var ad = 0; ad < C.stationFor12306.tHtmlGetCityName(Z, -1, 0); ad++) {
                        ab += '<li class="ac_even' + aa + '"   title="' + C.stationFor12306.tHtmlGetCityName(Z, ad, 0)[1] + '" data="' + C.stationFor12306.tHtmlGetCityName(Z, ad, 0)[2] + '">' + C.stationFor12306.tHtmlGetCityName(Z, ad, 0)[1] + "</li>"
                    }
                }
                ab += "</div>"
            }
            ab += '<div id="flip_cities2"> 翻页控制区</div>';
            ab += "</div>";
            C("#panel_cities2").html(ab);
            C("#thetable").on("click", function() {
                if (C("#form_cities2").css("display") == "block") {
                    if (m == 1 | m == 0) {
                        m == -1
                    }
                    I.select()
                }
            });
            C("#form_cities").on("click", function() {
                if (C("#form_cities").css("display") == "block") {
                    if (m == 1 | m == 0) {
                        m == -1
                    }
                    I.select()
                }
            });
            C(".ac_even").on("mouseover", function() {
                C.stationFor12306.city_shiftSelectInLi(this)
            }).on("click", function() {
                I.val(C(this).text());
                curObjCode.val(C(this).attr("data"));
                if (B) {
                    C.stationFor12306.setStationInCookies(C(this).text(), C(this).attr("data"))
                }
                C("#form_cities2").css("display", "none");
                m = -1;
                y = 0;
                C.stationFor12306.setStationStyle();
                if (L) {
                    C.stationFor12306.LoadJS(C(this).attr("data"))
                }
                if (J) {
                    J(I, curObjCode)
                }
            });
            C("#flip_cities2").css("display", "none");
            return w
        },
        LoadJS: function(W) {
            if (((typeof (mm_addjs) != "undefined")) && ("" != mm_addjs) && (mm_addjs == 1)) {
                var k = document.getElementsByTagName("HEAD").item(0);
                var i = document.createElement("SCRIPT");
                i.src = mm_srcjs + W + ".js";
                i.type = "text/javascript";
                k.appendChild(i)
            }
        },
        addZMHtml: function(X, Y) {
            var W = "";
            if (X && X.length > 0) {
                var Z = X[0][0].charAt(0);
                W += '<ul  class="popcitylist" style="overflow: auto; max-height: 260px; " >';
                W += '<li class="ac_letter">' + Z.toUpperCase() + "</li>";
                for (var i = 0; i < 12; i++) {
                    var k = X[i];
                    if (k) {
                        W += '<li class="ac_even' + Y + '"   title="' + k[1] + '" data="' + k[2] + '">' + k[1] + "</li>"
                    } else {
                        W += '<li class="ac_even' + Y + '" </li>'
                    }
                }
                W += "</ul>"
            }
            return W
        },
        pageDesigh: function(Z, ac, ad) {
            var W = "";
            if (Z > 1) {
                if (ac == -1) {
                    ac = (Z - 1)
                } else {
                    if (ac == Z) {
                        ac = 0
                    }
                }
                var ab = "";
                if (!B) {
                    ab = " openLi"
                }
                for (var X = 2; X <= 6; X++) {
                    if (X == ad) {
                        var aa = P[X - 2];
                        for (var i = 0; i < aa.length; i++) {
                            K = aa[i].slice(ac * u, (ac + 1) * u);
                            W += C.stationFor12306.addZMHtml(K, ab)
                        }
                    }
                }
                C("#ul_list" + ad).html(W);
                C("#ul_list" + ad).css("height", 270);
                if (W) {
                    var Y = (ac == 0) ? "&laquo;&nbsp;上一页" : "<a style='cursor:pointer'    class='cityflip' onclick='$.stationFor12306.pageDesigh(" + Z + "," + (ac - 1) + "," + ad + ");return false;'>&laquo;&nbsp;上一页</a>";
                    Y += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;";
                    Y += (ac == Z - 1) ? "下一页&nbsp;&raquo;" : "<a style='cursor:pointer' class='cityflip'  onclick='$.stationFor12306.pageDesigh(" + Z + "," + (ac + 1) + "," + ad + ")'>下一页&nbsp;&raquo;</a>";
                    C("#flip_cities2").html(Y)
                } else {
                    C("#flip_cities2").html("")
                }
                if (m == 1 | m == 0 | m == 2) {
                    m == -1
                }
                if (I) {
                    I.select()
                }
            } else {}
            C(".ac_even").on("mouseover", function() {
                C.stationFor12306.city_shiftSelectInLi(this)
            }).on("click", function() {
                I.val(C(this).text());
                curObjCode.val(C(this).attr("data"));
                if (B) {
                    C.stationFor12306.setStationInCookies(C(this).text(), C(this).attr("data"))
                }
                C("#form_cities2").css("display", "none");
                m = -1;
                y = 0;
                C.stationFor12306.setStationStyle();
                if (L) {
                    C.stationFor12306.LoadJS(C(this).attr("data"))
                }
                if (J) {
                    J(I, curObjCode)
                }
            })
        },
        filterCity: function(Z) {
            if (Z.length == 0) {
                C("#top_cities").html(n);
                return w
            }
            var Y = /<\/?[^>]*>/g;
            Z = Z.replace(Y, "");
            var W = [];
            var k = /[^A-z]/.test(Z);
            for (var X = 0; X < w.length; X++) {
                if (C.stationFor12306.isMatchCity(w[X], Z, k)) {
                    W.push(w[X])
                }
            }
            if (W.length > 0) {
                C("#top_cities").html('按"<font color=red>' + Z + '</font>"检索：');
                return W
            } else {
                C("#top_cities").html("无法匹配:<font color=red>" + Z + "</font>");
                return []
            }
        },
        replaceChar: function(i, W, k) {
            return i.substr(0, W) + k + i.substr(W + 1, i.length - 1)
        },
        isMatchCity: function(Z, ac, W) {
            var ac = ac.toLowerCase();
            var k = [Z[4].toLowerCase(), Z[1], Z[3].toLowerCase()];
            var ab = -1;
            var Y = -1;
            if (W) {
                ac = ac.split("");
                for (var X = 0; X < ac.length; X++) {
                    var ae = k[1].indexOf(ac[X]);
                    if (ae > ab && ae <= X) {
                        k[1] = C.stationFor12306.replaceChar(k[1], ae, "-");
                        ab = ae
                    } else {
                        return false
                    }
                }
            } else {
                ac = ac.split("");
                var i = true;
                var aa = true;
                for (var X = 0; X < ac.length; X++) {
                    var ae = k[0].indexOf(ac[X]);
                    if (ae > ab && ae <= X) {
                        k[0] = C.stationFor12306.replaceChar(k[0], ae, "-");
                        ab = ae
                    } else {
                        i = false;
                        break
                    }
                }
                for (var X = 0; X < ac.length; X++) {
                    var ad = k[2].indexOf(ac[X]);
                    if (ad > Y && ad <= X) {
                        k[2] = C.stationFor12306.replaceChar(k[2], ad, "-");
                        Y = ad
                    } else {
                        aa = false;
                        break
                    }
                }
                if ((i == false) && (aa == false)) {
                    return false
                }
            }
            return true
        },
        city_showlist_page: function(ad, Y) {
            var Z = "";
            Z += '<div class="citypage">';
            Z += (ad == 0) ? "" : '<a href="#" class="pagetxt" onclick="$.stationFor12306.city_showlist(' + (ad - 1) + ');return false;"><<</a>';
            var ae = ad + 1;
            var aa = Y;
            var ab = 2;
            var ac = 5;
            var k = (ae - ab) > 0 ? (ae + ab > aa ? aa - ac + 1 : ae - ab) : 1;
            var W = k + ac > aa ? aa + 1 : k + ac;
            if (aa < ac) {
                for (var X = 1; X < aa + 1; X++) {
                    if (ae == X) {
                        Z += "<a href='' class='cur' onclick='$.stationFor12306.city_showlist(" + (X - 1) + ");return false;'>" + (X) + "</a>"
                    } else {
                        Z += "<a href='' onclick='$.stationFor12306.city_showlist(" + (X - 1) + ");return false;'>" + (X) + "</a>"
                    }
                }
            } else {
                for (var X = k; X < W; X++) {
                    if (ae == X) {
                        Z += "<a href='' class='cur' onclick='$.stationFor12306.city_showlist(" + (X - 1) + ");return false;'>" + (X) + "</a>"
                    } else {
                        Z += "<a href='' onclick='$.stationFor12306.city_showlist(" + (X - 1) + ");return false;'>" + (X) + "</a>"
                    }
                }
            }
            Z += (ad == Y - 1) ? "" : '<a href="" class="pagetxt" onclick="$.stationFor12306.city_showlist(' + (ad + 1) + ');return false;">>></a>';
            Z += "</div>";
            return Z
        },
        city_showlist: function(W) {
            if (E.length > 6) {
                var k = Math.ceil((E.length) / 6);
                if (W == -1) {
                    W = (k - 1)
                } else {
                    if (W == k) {
                        W = 0
                    }
                }
                G = E.slice(6 * (W), Math.min(6 * (W + 1), E.length));
                C.stationFor12306.city_Bind(G);
                var i = "";
                i += C.stationFor12306.city_showlist_page(W, k);
                C("#flip_cities").html(i);
                C("#flip_cities").css("display", "block")
            } else {
                W = 0;
                G = E;
                C.stationFor12306.city_Bind(G);
                C("#flip_cities").css("display", "none")
            }
            z = W;
            if (C("#form_cities").css("display") == "block") {
                a = true;
                I.focus()
            }
        },
        fixDivBugInIE6: function(i) {
            try {
                i.bgiframe();
                if (i.width() > C("> ul", i).width()) {
                    i.css("overflow", "hidden")
                } else {
                    C("> iframe.bgiframe", i).width(C("> ul", i).width());
                    i.css("overflow", "scroll")
                }
                if (i.height() > C("> ul", i).height()) {
                    i.css("overflow", "hidden")
                } else {
                    C("> iframe.bgiframe", i).height(C("> ul", i).height());
                    i.css("overflow", "scroll")
                }
            } catch (k) {}
        },
        clearStation: function(i) {
            m = -1;
            var W = I.val();
            var X = curObjCode.val();
            if (W == "" || X == "") {
                I.val("");
                curObjCode.val("")
            } else {
                var k = W + "|" + X;
                if (typeof (station_names) != "undefined") {
                    if (station_names.indexOf(k) == -1) {
                        I.val("");
                        curObjCode.val("")
                    } else {
                        if ("click" == i) {
                            I.select();
                            if (C("#form_cities").is(":hidden")) {
                                C("#form_cities2").css("display", "block")
                            }
                        }
                    }
                } else {
                    I.val("");
                    curObjCode.val("")
                }
            }
        },
        MapCityID: function(W) {
            for (var k = 0; k < w.length; k++) {
                if (w[k][1] == W) {
                    return w[k][2]
                }
            }
            return 0
        },
        MapCityName: function(k) {
            for (var W = 0; W < w.length; W++) {
                if (w[W][2] == k) {
                    return w[W][1]
                }
            }
            return ""
        },
        SetISPos: function(Y) {
            if (Q) {
                Q(C("#form_cities"), C("#form_cities2"))
            } else {
                C("#form_cities").css("left", Y.position().left);
                C("#form_cities").css("top", Y.position().top + Y.height() + 12);
                C("#form_cities2").css("left", Y.position().left);
                C("#form_cities2").css("top", Y.position().top + Y.height() + 12)
            }
            var X = Y.offset().top;
            var i = C("#search_div");
            var k = C("#choice_div");
            i.css("top", X);
            k.css("top", X);
            var W = Y.offset().left;
            i.css("left", W);
            k.css("left", W)
        },
        myHandlerFg: function(i) {
            if (i == null) {
                i.keyCode = 9
            } else {
                if (!i.which && i.which == 13) {
                    i.preventDefault()
                } else {
                    if (i.which && i.keyCode == 13) {
                        i.which = 9
                    }
                }
            }
        },
        myHandler2: function(i) {
            if (i == null) {
                i = window.event;
                i.returnValue = false
            } else {
                if (i.which && i.which == 13) {
                    var W = document.getElementById("Upload_Data3");
                    if (document.createEvent) {
                        var k = document.createEvent("MouseEvents");
                        k.initEvent("click", true, false);
                        W.dispatchEvent(k)
                    } else {
                        if (document.createEventObject) {
                            W.fireEvent("onclick")
                        }
                    }
                } else {
                    if (!i.which && i.which == 13) {
                        i.preventDefault()
                    }
                }
            }
        },
        from_to_station_class_plain: function(i) {
            if (l && l != "") {
                i.removeClass(l)
            }
            if (r && r != "") {
                i.addClass(r)
            }
        },
        from_to_station_class_gray: function(i) {
            if (r && r != "") {
                i.removeClass(r)
            }
            if (l && l != "") {
                i.addClass(l)
            }
        },
        setStationStyle: function() {
            var i = I.val();
            if (i == "") {
                I.val(h);
                C.stationFor12306.from_to_station_class_gray(I);
                curObjCode.val("")
            } else {
                C.stationFor12306.from_to_station_class_plain(I)
            }
        },
        setCurValue: function() {
            I.val(S[1]);
            curObjCode.val(S[2])
        },
        bindEvent: function(i) {
            var W = "#" + i;
            var k = "#" + i + "Text";
            C(k).keydown(function(Y) {
                I = C(k);
                curObjCode = C(W);
                m = 0;
                a = true;
                L = true;
                C("#form_cities2").css("display", "none");
                y = 0;
                var X = C(k).width();
                if (-[1, ]) {
                    X = X - 4
                }
                X = X < 220 ? 220 : X;
                C("#form_cities").css("width", X);
                C("#form_cities").css("display", "block");
                C(".AbcSearch li").removeClass("action");
                C(".popcitylist").css("display", "none");
                if (M && B) {
                    C("#ul_list7").css("display", "block");
                    C("#nav_list7").addClass("action")
                } else {
                    C("#nav_list1").addClass("action");
                    C("#ul_list1").css("display", "block")
                }
                C("#flip_cities2").css("display", "none");
                C(".ac_even").removeClass("ac_over").addClass("ac_odd");
                Y = Y || window.event;
                if (Y.keyCode == 40) {
                    C.stationFor12306.city_changeSelectIndex(1);
                    C("#form_cities").css("display", "block");
                    C.stationFor12306.SetISPos(I);
                    C.stationFor12306.setCurValue()
                } else {
                    if (Y.keyCode == 38) {
                        C.stationFor12306.city_changeSelectIndex(-1);
                        C.stationFor12306.setCurValue();
                        C("#form_cities").css("display", "block");
                        C.stationFor12306.SetISPos(I)
                    } else {
                        if (Y.keyCode == 13) {
                            C.stationFor12306.city_confirmSelect();
                            if (document.addEventListener) {
                                document.addEventListener("keypress", C.stationFor12306.myHandlerFg, true)
                            } else {
                                evt = window.event;
                                evt.keyCode = 9
                            }
                        }
                    }
                }
            }).focus(function() {
                L = true;
                if (a) {
                    C("#form_cities2").css("display", "none");
                    y = 0;
                    a = false;
                    m = -1
                } else {
                    if (m == -1) {
                        C(".AbcSearch li").removeClass("action");
                        C(".popcitylist").css("display", "none");
                        C("#flip_cities2").css("display", "none");
                        if (M && B) {
                            C("#ul_list7").css("display", "block");
                            C("#nav_list7").addClass("action")
                        } else {
                            C("#nav_list1").addClass("action");
                            C("#ul_list1").css("display", "block")
                        }
                        C(".ac_even").removeClass("ac_over").addClass("ac_odd");
                        C("#form_cities2").css("display", "block");
                        for (var X = 2; X <= 6; X++) {
                            C("#ul_list" + X).css("height", 0)
                        }
                    }
                }
                I = C(k);
                curObjCode = C(W);
                m = 0;
                U = true;
                C.stationFor12306.SetISPos(I)
            }).blur(function() {
                I = C(k);
                curObjCode = C(W);
                m = 0;
                a = false;
                L = true;
                if (!g && !H) {
                    C.stationFor12306.clearStation("blur");
                    U = false;
                    C("#form_cities").css("display", "none");
                    C("#form_cities2").css("display", "none");
                    m = -1;
                    y = 0;
                    E = C.stationFor12306.filterCity("");
                    C.stationFor12306.city_showlist(0);
                    C.stationFor12306.setStationStyle()
                }
            }).keyup(function(X) {
                I = C(k);
                curObjCode = C(W);
                m = 0;
                a = true;
                X = X || window.event;
                if (X.keyCode != 40 && X.keyCode != 38 && X.keyCode != 37 && X.keyCode != 39 && X.keyCode != 13 && X.keyCode != 9) {
                    E = C.stationFor12306.filterCity(I.val());
                    C.stationFor12306.city_showlist(0)
                }
            }).click(function() {
                C.stationFor12306.clearStation("click")
            });
            C.stationFor12306.bindInputs.push(i)
        },
        getStationInCookies: function() {
            var W = [];
            var k = C.ht_getcookie("_city_name_save_station");
            if (k) {
                var i = k.split(",");
                if (i && i.length > 0) {
                    C.each(i, function(aa, Z) {
                        var X = Z.split("#");
                        var Y = [];
                        Y[0] = X[0];
                        Y[1] = X[1];
                        W[aa] = Y
                    })
                }
            }
            return W
        },
        setStationInCookies: function(af, W) {
            var ac = C.stationFor12306.getStationInCookies();
            var Z = [];
            var ag = ac.length;
            var Y = true;
            var ah = 10;
            for (var aa = 0; aa < ag; aa++) {
                if (ac[aa][0] == af && ac[aa][1] == W) {
                    Y = false
                }
                Z.push(ac[aa])
            }
            if (Y) {
                Z.push([af, W])
            }
            var ab = Z;
            var X = "";
            var ad = ab.length;
            var aa = 0;
            if (ad > ah) {
                aa = 1
            }
            var i = aa;
            if (ad > 1) {
                C("#ul_list7").html("");
                M = true
            }
            var ae = "";
            for (; aa < ad; aa++) {
                if (aa > i) {
                    X += ","
                }
                X += ab[aa][0] + "#" + ab[aa][1];
                if (M && B) {
                    ae += '<li class="ac_even" onmouseover="$.stationFor12306.city_shiftSelectInLi(this);" onclick="$.stationFor12306.li_click(this);"   title="' + ab[aa][0] + '" data="' + ab[aa][1] + '">' + ab[aa][0] + "</li>"
                }
            }
            if (M && B) {
                C("#ul_list7").html(ae)
            }
            C.ht_setcookie("_city_name_save_station", X, 365 * 24 * 60 * 60)
        },
        li_click: function(i) {
            I.val(C(i).text());
            curObjCode.val(C(i).attr("data"));
            if (B) {
                C.stationFor12306.setStationInCookies(C(i).text(), C(i).attr("data"))
            }
            C("#form_cities2").css("display", "none");
            m = -1;
            y = 0;
            C.stationFor12306.setStationStyle();
            if (L) {
                C.stationFor12306.LoadJS(C(i).attr("data"))
            }
            if (J) {
                J(I, curObjCode)
            }
        },
        init: function(ac, ad) {
            if (typeof (ad) != "undefined") {
                if (typeof (ad._init_input) != "undefined") {
                    h = ad._init_input
                }
                if (typeof (ad._top_4_initInput) != "undefined") {
                    n = ad._top_4_initInput
                }
                if (typeof (ad.confirmCallBack) != "undefined") {
                    J = ad.confirmCallBack
                }
                if (typeof (ad._selected_class) != "undefined") {
                    r = ad._selected_class
                }
                if (typeof (ad._unselected_class) != "undefined") {
                    l = ad._unselected_class
                }
                if (typeof (ad._12306_openFavorite) != "undefined") {
                    B = ad._12306_openFavorite
                }
                if (typeof (ad.position) != "undefined") {
                    Q = ad.position
                }
            }
            if (typeof (station_names) != "undefined") {
                var Z = station_names.split("@");
                for (var Y = 0; Y < Z.length; Y++) {
                    var ab = Z[Y];
                    var aa = ab.toString().charAt(0);
                    for (var X in F) {
                        if (aa == F[X]) {
                            c[X].push(ab.split("|"))
                        }
                    }
                    if (ab.length > 0) {
                        ab = ab.split("|");
                        if (O != "" && ab[2] == O) {
                            favcity = ab;
                            w.unshift(ab);
                            if (Y > 6) {
                                w.push(ab)
                            }
                        } else {
                            w.push(ab)
                        }
                    }
                }
                f = c[0].concat(c[1]).concat(c[2]).concat(c[3]).concat(c[4]);
                e = c[5].concat(c[6]).concat(c[7]).concat(c[8]).concat(c[9]);
                d = c[10].concat(c[11]).concat(c[12]).concat(c[13]).concat(c[14]);
                b = c[15].concat(c[16]).concat(c[17]).concat(c[18]).concat(c[19]);
                V = c[20].concat(c[21]).concat(c[22]).concat(c[23]).concat(c[24]).concat(c[25]);
                P[0] = [c[0], c[1], c[2], c[3], c[4]];
                P[1] = [c[5], c[6], c[7], c[8], c[9]];
                P[2] = [c[10], c[11], c[12], c[13], c[14]];
                P[3] = [c[15], c[16], c[17], c[18], c[19]];
                P[4] = [c[20], c[22], c[23], c[24], c[25]];
                for (var Y = 0; Y < w.length; Y++) {
                    w[Y].push(Y)
                }
            }
            if (typeof (favorite_names) != "undefined") {
                var W = favorite_names.split("@");
                for (var Y = 0; Y < W.length; Y++) {
                    var ab = W[Y];
                    if (ab.length > 0) {
                        ab = ab.split("|");
                        D.push(ab)
                    }
                }
                for (var Y = 0; Y < D.length; Y++) {
                    D[Y].push(Y)
                }
            }
            E = C.stationFor12306.filterCity("");
            C.stationFor12306.city_showlist(0);
            C.stationFor12306.showAllCity();
            a = false;
            C.stationFor12306.fixDivBugInIE6(C("#form_cities"));
            C.stationFor12306.fixDivBugInIE6(C("#form_cities2"));
            if (ac && ac.length > 0) {
                C.each(ac, function(k, i) {
                    C.stationFor12306.bindEvent(i)
                })
            }
            C("#form_cities").mousedown(function() {
                g = true
            }).mouseup(function() {
                g = false
            });
            C("#form_cities2").mousedown(function() {
                H = true
            }).mouseup(function() {
                H = false
            })
        }
    }
}
)(jQuery);
(function() {
    $.stopStation = function(a) {
        var b = this;
        b.init = function() {
            b.options = $.extend({}, $.stopStation.defaultOptions, a);
            if (null == b.options.url || null == b.options.getSearchDate) {
                throw "error options,url can not be null"
            }
            b.options.mouseOnPanel = 0;
            if (!$("#" + b.options.showDivId)[0]) {
                var d = [];
                var c = -1;
                d[++c] = '<div class="station" style="display:none;" id="' + b.options.showDivId + '"><b></b>';
                d[++c] = '<div class="station-info" id="' + b.options.showTitleId + '"></div>';
                d[++c] = '<div class="station-hd"><span class="zx">站序</span><span class="zm">站名</span><span class="dzsj">到站时间</span>';
                d[++c] = '<span class="cfsj">出发时间</span><span class="tlsj">停留时间</span>';
                d[++c] = '<a id="_stopStation_close_id" class="close" title="关闭" href="javascript:" </a></div>';
                d[++c] = '<div class="station-bd"><table><tbody id="' + b.options.showTableId + '"></tbody></table></div></div>';
                $(d.join("")).appendTo($("body:eq(0)"));
                $("#_stopStation_close_id").on("click", b.close)
            }
            $("#" + b.options.showDivId).css("z-index", "20001");
            if (b.options.mouseOutClose) {
                $("#" + b.options.showDivId).on("mouseenter", function(e) {
                    b.options.mouseOnPanel = 1
                }).on("mouseleave", function() {
                    b.options.mouseOnPanel = 0;
                    $("#" + b.options.showDivId).hide().appendTo($("body:eq(0)"));
                    $("#" + b.options.showTableId).html("")
                })
            }
        }
        ;
        b.close = function() {
            $("#" + $.stopStation.defaultOptions.showDivId).closest("tr").removeAttr("style");
            $("#" + $.stopStation.defaultOptions.showDivId).removeAttr("style");
            b.options.mouseOnPanel = 0;
            $("#" + $.stopStation.defaultOptions.showDivId).hide().appendTo($("body:eq(0)"));
            $("#" + $.stopStation.defaultOptions.showTableId).html("")
        }
        ;
        b.open = function(f, j, h, e, i, c) {
            $("#" + $.stopStation.defaultOptions.showDivId).attr("style", "z-index:20001");
            if (a.timer) {
                clearTimeout(a.timer)
            }
            var g = a.getSearchDate();
            if (i && "" != i && null != i) {
                var d = formatDate(i);
                if ("-" != d) {
                    g = formatDate(i)
                } else {
                    g = a.getSearchDate()
                }
            } else {
                g = a.getSearchDate()
            }
            $.ajax({
                url: a.url,
                type: "get",
                isTakeParam: false,
                beforeSend: function(k) {
                    k.setRequestHeader("If-Modified-Since", "0");
                    k.setRequestHeader("Cache-Control", "no-cache")
                },
                data: {
                    train_no: j,
                    from_station_telecode: h,
                    to_station_telecode: e,
                    depart_date: g
                },
                success: function(p) {
                    var t = p.data.data;
                    if (t && t.length > 0) {
                        var r = [];
                        var u = -1;
                        for (var q = 0; q < t.length; q++) {
                            var l = t[q];
                            if (q == 0) {
                                var n = null;
                                n = l.train_class_name;
                                var s = l.service_type;
                                if ("0" == s) {
                                    c = "无空调"
                                } else {
                                    c = "有空调"
                                }
                                if (!n) {
                                    n = "&nbsp;&nbsp;"
                                }
                                $("#" + $.stopStation.defaultOptions.showTitleId).html('<span class="item1">' + l.station_train_code + '次      </span><span class="item2">' + l.start_station_name + "<em>--></em>" + l.end_station_name + '</span><span class="item3">' + n + '</span><span class="item4">' + c + "</span>").find("span").css("color", "#333")
                            }
                            var m = "";
                            if (!l.isEnabled) {
                                m = " style='color: #999;' "
                            }
                            r[++u] = '<tr><td width="50" class="tc" ' + m + ">" + l.station_no + "</td>";
                            r[++u] = '<td width="75" ' + m + ">" + l.station_name + "</td>";
                            r[++u] = '<td width="75" ' + m + ">" + l.arrive_time + "</td>";
                            r[++u] = '<td width="75" ' + m + ">" + l.start_time + "</td>";
                            r[++u] = "<td " + m + ">" + l.stopover_time + "</td></tr>"
                        }
                        $("#" + $.stopStation.defaultOptions.showTableId).html(r.join(""));
                        var o = $("#" + $.stopStation.defaultOptions.appendTo + f);
                        $("#" + $.stopStation.defaultOptions.showDivId).appendTo(o).show();
                        $(".ticket-info").filter("div").attr("style", "");
                        o[0].style["z-index"] = 19999;
                        if (!(navigator.appVersion.indexOf("MSIE 6") > -1)) {} else {}
                        $("#train_div_").focus()
                    }
                }
            })
        }
        ;
        b.init();
        myStopStation = b;
        return b
    }
    ;
    $.fn.stopStation = function() {
        return (new $.stopStation(Array.prototype.slice.call(arguments)[0]))
    }
    ;
    $.stopStation.defaultOptions = {
        url: null,
        mouseOutClose: false,
        showDivId: "train_div_",
        showTableId: "train_table_",
        showTitleId: "train_span_",
        appendTo: "train_num_",
        getSearchDate: null
    }
}
)();
var myStopStation = function() {};
var formatDate = function(b) {
    if (b && (b.length == 8)) {
        var c = b.substring(0, 4);
        var d = b.substring(4, 6);
        var a = b.substring(6, 8);
        return c + "-" + d + "-" + a
    } else {
        return "-"
    }
};
var checkusermdId;
var showTrainStop;
var hideTrainStop;
var showTicketPrice;
var isInitQueryInput = false;
var isInitStationDiv = false;
var isInitJsrenderTemplate = false;
var isInitDateRange = false;
var tickets_info;
var location_code;
var md5Str;
var leftTicketStr;
var isAsync;
var box;
var countDown = null;
var ischeckAutoSubmitCode = true;
var hainan_tip;
var firstShow = 1;
var endShow = 20;
var endShow_15 = 15;
var dataNumber = 0;
var change_dates_arr = [];
var isOther = true;
var dwTranTimeStr;
var ydTranTimeStr;
var uninputmsg = "用户名／邮箱／手机号码";
var adtimeout = 5000;
var iframeUrl = "https://ad.12306.cn/res/0004.html";
var frameComplete = false;
var iframeOnload = function() {
    frameComplete = true
};
var yxTrainPageSize = 15;
var passengerPageSize = 20;
var timer_time = 3;
var yxTrainChange = "";
var trainListForIE = [];
var queryLeftTicket_times = 0;
var queryLeftTicket_count = 10;
var ifAlertCode = false;
var intervalTime;
var seatTypeForHB = {
    SWZ: "9_商务座",
    TZ: "P_特等座",
    ZY: "M_一等座",
    ZE: "O_二等座",
    GR: "6_高级软卧",
    RW: "4_软卧",
    SRRB: "F_动卧",
    YW: "3_硬卧",
    RZ: "2_软座",
    YZ: "1_硬座",
    WZ: "1_无座",
    QT: "H_其他"
};
var seatTypeCodeForName = {
    A: "高级动卧",
    I: "一等卧",
    J: "二等卧",
    P: "特等座",
    M: "一等座",
    O: "二等座",
    F: "动卧",
    "9": "商务座",
    "6": "高级软卧",
    "4": "软卧",
    "3": "硬卧",
    "2": "软座",
    "1": "硬座",
    H: "其他",
    WZ: "无座",
    W: "无座"
};
var _alowHBHour = 19;
var alowHBMaxNum = 5;
var new_year_day = "20990929-20991029";
var hbbeginTime = 600;
var hb_max_msg = "同一候补订单中每个乘车日期最多可包含" + alowHBMaxNum + "个不同“车次+席别”的组合需求。";
var hb_date_msg = "请选择两个相邻的乘车日期。";
var hb_date_msg_station = "您已更换发到站，将清空原候补购票需求。";
var hb_date_msg_diff = "请选择两个相邻的乘车日期。";
var hbSessionKey = "_hbBuyCart";
var houbuColor_y = "#f80";
var houbuColor_n = "grey";
var isInitLoad = true;
var _lc_ciphertext = "";
(function() {
    var a;
    var bo = null;
    var b7;
    var bR;
    var V;
    var at;
    var cH;
    var cq;
    var t = false;
    var cw = 0;
    var aM;
    var bA;
    var D;
    var ap;
    var cN;
    var bx = new Array();
    var cm = new Array();
    var cv = new Array();
    var ah = new Array();
    var ch = new Array();
    var S;
    var aT = new Array();
    tickets_info = new Array();
    var bp = true
      , cz = true
      , bk = true
      , aN = "starttime";
    var aS = true;
    var b0 = [];
    var bE = [];
    var cp = [];
    var a7;
    var P = [];
    var cn = "";
    var cF = "";
    var bv = "";
    var k = "";
    var K = "";
    $(document).ready(function() {
        d();
        $.init_ul4li();
        j();
        aj();
        E();
        an();
        N();
        aP();
        bs();
        bY();
        clickCheckBoxName();
        b5();
        cr();
        aF();
        av();
        cB();
        G();
        bj();
        cc();
        $("#float").headerFloat();
        $(window).scroll(function() {
            if (bo != null && (!bo.isHidden())) {
                $("#floatTable").hide();
                $(window).scrollTop(a)
            }
        });
        $.stopStation({
            url: ctx + "czxx/queryByTrainNo",
            getSearchDate: function() {
                return train_tour_flag == "fc" ? $.trim($("#back_train_date").val()) : $.trim($("#train_date").val())
            }
        });
        bz();
        cS();
        cC();
        r();
        ab();
        aq();
        cn = $("#fromStationText").val();
        cF = $("#toStationText").val();
        $("#showOnlyTicA").bind("click", function() {
            $("#filterTic").attr("checked", "checked");
            bF();
            $jpopup.startOrHiden()
        });
        a7 = $.autoSubmit();
        var cX = $("#train_date").val();
        var cV = $("#back_train_date").val();
        if (cV == "") {
            $("#back_train_date").val(cX)
        } else {
            $("#back_train_date").val(cV)
        }
        y();
        bh();
        var cW = new bQ("right");
        cW.init();
        af();
        if (page_show_flag == "preStep") {
            $("#query_ticket").click()
        }
        if (tour_flag == "fc" || tour_flag == "gc") {
            $(".cart-hd").hide()
        }
        b("&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;按照国务院联防联控机制规定，旅客进站乘车需持48小时内核酸阴性证明，请广大旅客提前做好相关准备，确保出行顺畅。进（返）京旅客还需持“北京健康宝”绿码。");
        $(".up-box").css("top", "-100px");
        $(".up-box").css("width", "480px");
        $(".up-box").css("left", "70px");
        $("#alert_icon_id").hide();
        $("#train_date").jcalendar({
            isFocus: "1"
        });
        $("#back_train_date").jcalendar({
            isFocus: "1"
        })
    });
    var bQ = function(c2) {
        var c3, cZ = {}, c4, c0 = this, cY = false, cW, c1, cX = {
            x: 10,
            y: 66
        }, cV = {
            x: 5,
            y: 1
        };
        this.move = function() {
            cW = cW + cV.x;
            c1 = c1 + cV.y;
            if (cW < cX.x) {
                cW = cX.x;
                cV.x = -cV.x
            } else {
                if (cW > cZ.dx) {
                    cW = cZ.dx;
                    cV.x = -cV.x
                }
            }
            if (c1 < cX.y) {
                c1 = cX.y;
                cV.y = -cV.y
            } else {
                if (c1 > cZ.dy) {
                    c1 = cZ.dy;
                    cV.y = -cV.y
                }
            }
            c4.css(c2, cW + "px").css("top", c1 + "px")
        }
        ;
        this.init = function() {
            if (cY) {
                return
            }
            cY = true;
            c4 = $(bQ.htmlTemplate);
            $(window).on("resize", c0.resize);
            c4.css(c2, cX.x + "px").css({
                top: cX.y + "px"
            }).on("mouseenter", c0.stop).on("mouseleave", c0.resize).children("a.close").on("click", c0.hidden);
            $("body").append(c4);
            cW = cX.x;
            c1 = cX.y;
            c0.resize()
        }
        ;
        this.destory = function() {
            c4.remove()
        }
        ;
        this.resize = function() {
            cZ.dx = ($(window).width() - $(".content").width()) / 2 - c4.width();
            cZ.dy = ($(window).height()) - c4.height();
            if (cZ.dx <= (cX.x + Math.abs(cV.x)) || cZ.dy <= (cX.y + Math.abs(cV.y))) {
                c0.stop()
            } else {
                c0.alive()
            }
        }
        ;
        this.show = function() {
            c4.show();
            c0.alive()
        }
        ;
        this.hidden = function() {
            c0.stop();
            c4.hide()
        }
        ;
        this.stop = function() {
            clearInterval(c3)
        }
        ;
        this.alive = function() {
            c0.stop();
            c3 = setInterval(c0.move, 200)
        }
    };
    function O() {
        setTimeout(function() {
            if (!frameComplete) {
                var cW = $("#ad_frame_query");
                var cV = cW.get(0);
                var cX = ctx + "resources/images/bg11.png";
                cW.remove();
                $("#myfix_yh").css("background", "url(" + cX + ") no-repeat");
                $("#myfix_yh").html('<a href="javascript:void(0);" class="close" title="关闭">关闭</a>');
                $("#myfix_yh").children("a.close").on("click", function() {
                    $(this).parent().hide()
                })
            }
        }, adtimeout)
    }
    function v() {
        var cX = $(".cart-tlist li");
        if (cX && cX.length > 0) {
            for (var cW = 0; cW < cX.length; cW++) {
                var cV = $(cX[cW]).attr("hbid").split("#")[0];
                if (cV == $("#train_date").val()) {
                    $(cX[cW]).find('a[class="del"]').click()
                }
                var cZ = $(cX[cW]).attr("hbid").split("#");
                var cY = cZ[0] + "#" + cZ[3] + "#" + cZ[4] + "#";
                $('td[hbdata="' + cY + '"]').click()
            }
        }
    }
    function cd(cW) {
        if (cW) {
            $(".yzm").show();
            $("#orange_msg").hide();
            $("#randCodeForm_id").find("a").css("margin-top", "30px");
            var cV = $("#qr_submit1");
            cV.unbind("click").bind("click", l);
            cV.removeClass("btn92").addClass("btn92s").show();
            ifAlertCode = true
        } else {
            $(".yzm").hide();
            $("#orange_msg").show();
            $("#qr_submit1").hide();
            ifAlertCode = false
        }
    }
    function aq() {
        if (rqChecked.length == 0) {
            if (train_tour_flag == "fc") {
                rqChecked.push($("#back_train_date").val())
            } else {
                rqChecked.push($("#train_date").val())
            }
        }
    }
    function cC() {
        if (ClickWho == "0X00") {
            $("#sf1").attr("disabled", "true");
            $("#sf1_label").addClass("color999");
            $("#sf2").attr("checked", "true");
            $("#query_ticket").removeClass().addClass("btn92s")
        } else {
            if (ClickWho == "00" || ClickWho == "ADULT") {
                $("#sf2").attr("disabled", "true");
                $("#sf2_label").addClass("color999");
                $("#query_ticket").removeClass().addClass("btn92s")
            } else {
                $("#query_ticket").removeClass().addClass("btn92s")
            }
        }
        if (isstudentDate) {
            $("#sf2").attr("disabled", "true");
            $("#sf2_label").addClass("color999");
            $("#query_ticket").removeClass().addClass("btn92s")
        }
    }
    function aw() {
        if (!isInitStationDiv) {
            f();
            isInitStationDiv = true
        }
        if (!isInitJsrenderTemplate) {
            aH();
            isInitJsrenderTemplate = true
        }
    }
    function bz() {
        $("#fromStationText").mouseover(aw);
        $("#toStationText").mouseover(aw);
        $("#dc").mouseover(aw);
        $("#wf").mouseover(aw);
        $("#dc_label").mouseover(aw);
        $("#wf_label").mouseover(aw);
        $("#train_date").mouseover(aw);
        $("#back_train_date").mouseover(aw);
        $("#date_range").mouseover(aw)
    }
    function aR(c0) {
        a3();
        var c9 = ch.length;
        if ($("#query_ticket").html() == "停止查询") {
            if (c9 > 0 && ba) {
                $("#auto_query").removeAttr("disabled");
                if ($("#dc").is(":checked") && train_tour_flag != "gc") {
                    $("#autoSubmit").removeAttr("disabled");
                    $("#partSubmit").removeAttr("disabled")
                }
                $("#query_ticket").html("查询");
                $("#query_ticket").unbind("click");
                ci();
                if (countDown) {
                    clearInterval(countDown)
                }
                $("#filterTicDiv").html("<strong><label for='filterTic' style='cursor: pointer;'>仅显示选定车次</label></strong>");
                if (!$("#autoSubmit").is(":checked")) {
                    clearInterval(bm);
                    if (ccSelected.length > 0 || rqChecked.length > 0 || xbChecked.length > 0) {
                        myJpopup.startOrHiden();
                        if (train_tour_flag == "fc") {
                            var da = "成功查到" + $("#back_train_date").val() + "的" + ch[0]["queryLeftNewDTO"]["station_train_code"] + "次"
                        } else {
                            var da = "成功查到" + $("#train_date").val() + "的" + ch[0]["queryLeftNewDTO"]["station_train_code"] + "次"
                        }
                        if (c9 == 1) {
                            da = da + "车。"
                        } else {
                            da = da + "等" + c9 + "趟车。"
                        }
                        $("#filterRes").html(da)
                    }
                }
                jPlayer("play")
            } else {
                if (countDown) {
                    clearInterval(countDown)
                }
                var c7 = autoSearchTime / 1000;
                $("#filterTicDiv").html("<strong>离下次刷新时间<font class='colorA' style='font-size: 16px;'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + c7 + "</font>秒<strong>");
                countDown = window.setInterval(function() {
                    var db = "<strong>离下次刷新时间<font class='colorA' style='font-size: 16px;'>";
                    if (c7 == 0) {
                        c7 = autoSearchTime / 1000
                    }
                    c7 = c7 - 1;
                    if (c7 == 4) {
                        db = db + "&nbsp;&nbsp;&nbsp;&nbsp;"
                    }
                    if (c7 == 3) {
                        db = db + "&nbsp;&nbsp;&nbsp;"
                    }
                    if (c7 == 2) {
                        db = db + "&nbsp;&nbsp;"
                    }
                    if (c7 == 1) {
                        db = db + "&nbsp;"
                    }
                    db = db + c7;
                    db += "</font>秒<strong>";
                    $("#filterTicDiv").html(db)
                }, 1000);
                $("#filterTic").hide()
            }
        }
        var c4 = new Array();
        c4.push('<tbody id="queryLeftTable">');
        c0 = bc(c0);
        c0 = g(c0);
        if ($("#avail_jf")[0].checked) {
            c0 = aY(c0)
        }
        for (var c2 = 0; c2 < c0.length; c2++) {
            c4.push('<tr id="ticket_');
            c4.push(c0[c2].queryLeftNewDTO.train_no + "_" + c0[c2].queryLeftNewDTO.from_station_no + "_" + c0[c2].queryLeftNewDTO.to_station_no);
            c4.push('" class="');
            c4.push(c2 % 2 ? '">' : 'bgc">');
            c4.push('<td colspan="4" width="370">');
            c4.push('<div class="ticket-info clearfix" id="train_num_');
            c4.push(c2);
            c4.push('">');
            var cW = c0[c2].queryLeftNewDTO.dw_flag;
            c4.push('<div class="train" id="ticket_');
            c4.push(c0[c2].queryLeftNewDTO.train_no + "_" + c0[c2].queryLeftNewDTO.from_station_no + "_" + c0[c2].queryLeftNewDTO.to_station_no);
            c4.push('_train">');
            var c3 = "";
            if (c(c0[c2].queryLeftNewDTO.station_train_code)) {
                c3 = ' style="color:red;" '
            }
            var cY = false;
            if ("5" == cW.split("#")[0]) {
                cY = true
            }
            if (cW.split("#").length > 1 && "1" == cW.split("#")[1]) {
                cY = true
            }
            if (cW.split("#").length > 2 && "Q" == cW.split("#")[2].substring(0, 1)) {
                cY = true
            }
            if (cY) {
                c4.push("<div><a  " + c3 + ' title="点击查看停靠站信息" style="height: 18px; line-height: 18px;" href="javascript:" id="')
            } else {
                c4.push("<div><a  " + c3 + ' title="点击查看停靠站信息" href="javascript:" id="')
            }
            c4.push(c0[c2].queryLeftNewDTO.train_no);
            c4.push("_");
            c4.push(c0[c2].queryLeftNewDTO.from_station_telecode);
            c4.push("_");
            c4.push(c0[c2].queryLeftNewDTO.to_station_telecode);
            if ("1" == c0[c2].queryLeftNewDTO.controlled_train_flag || "2" == c0[c2].queryLeftNewDTO.controlled_train_flag) {
                c4.push('" class="number"');
                c4.push(">")
            } else {
                c4.push('" class="number"  onclick="myStopStation.open(\'');
                c4.push(c2);
                c4.push("','");
                c4.push(c0[c2].queryLeftNewDTO.train_no);
                c4.push("','");
                c4.push(c0[c2].queryLeftNewDTO.from_station_telecode);
                c4.push("','");
                c4.push(c0[c2].queryLeftNewDTO.to_station_telecode);
                c4.push("','");
                c4.push(c0[c2].queryLeftNewDTO.start_train_date);
                c4.push("','");
                c4.push(c0[c2].queryLeftNewDTO.train_seat_feature);
                c4.push("');\">")
            }
            c4.push(c0[c2].queryLeftNewDTO.station_train_code);
            c4.push('</a><div class="train-type">');
            if ("5" == cW.split("#")[0]) {
                c4.push('<div class="train-type-item item-zhi" title="智能动车组">智</div>')
            }
            if (cW.split("#").length > 1 && "1" == cW.split("#")[1]) {
                c4.push('<div class="train-type-item item-fu" title="复兴号">复</div>')
            }
            if (cW.split("#").length > 2 && "Q" == cW.split("#")[2].substring(0, 1)) {
                c4.push('<div class="train-type-item item-jing" title="静音车厢">静</div>')
            }
            c4.push("</div>");
            c4.push("</div>");
            c4.push('<span id="');
            c4.push(c0[c2].queryLeftNewDTO.train_no);
            c4.push("_");
            c4.push(c0[c2].queryLeftNewDTO.from_station_no);
            c4.push("_");
            c4.push(c0[c2].queryLeftNewDTO.to_station_no);
            c4.push("_");
            c4.push(c0[c2].queryLeftNewDTO.yp_info);
            c4.push("_");
            c4.push(c0[c2].queryLeftNewDTO.seat_types);
            if ("1" == c0[c2].queryLeftNewDTO.controlled_train_flag || "2" == c0[c2].queryLeftNewDTO.controlled_train_flag) {
                c4.push('" class="lookup"><span style="display:none;">查看票价</span><b style="display:none;" title="查看票价"></b></span>')
            } else {
                c4.push('" class="lookup" onclick="showTicketPrice(this)"><span style="display:none;">查看票价</span><b title="查看票价"></b></span>')
            }
            c4.push("</div>");
            c4.push('<div class="cdz">');
            var cV = c0[c2].queryLeftNewDTO.from_station_name.length > 5 ? c0[c2].queryLeftNewDTO.from_station_name.substring(0, 5) + ".." : c0[c2].queryLeftNewDTO.from_station_name;
            var cX = c0[c2].queryLeftNewDTO.to_station_name.length > 5 ? c0[c2].queryLeftNewDTO.to_station_name.substring(0, 5) + ".." : c0[c2].queryLeftNewDTO.to_station_name;
            if (c0[c2].queryLeftNewDTO.from_station_telecode != null && c0[c2].queryLeftNewDTO.from_station_telecode == c0[c2].queryLeftNewDTO.start_station_telecode) {
                c4.push('<strong title="' + c0[c2].queryLeftNewDTO.from_station_name + '" class="start-s">');
                c4.push(cV);
                c4.push("</strong>")
            } else {
                c4.push("<strong>");
                c4.push(cV);
                c4.push("</strong>")
            }
            if (c0[c2].queryLeftNewDTO.to_station_telecode != null && c0[c2].queryLeftNewDTO.to_station_telecode == c0[c2].queryLeftNewDTO.end_station_telecode) {
                c4.push('<strong title="' + c0[c2].queryLeftNewDTO.to_station_name + '"  class="end-s">');
                c4.push(cX);
                c4.push("</strong>")
            } else {
                c4.push("<strong>");
                c4.push(cX);
                c4.push("</strong>")
            }
            c4.push("</div>");
            c4.push('<div class="cds">');
            if ("1" == c0[c2].queryLeftNewDTO.controlled_train_flag || "2" == c0[c2].queryLeftNewDTO.controlled_train_flag) {
                c4.push('<strong class="start-t" style="color:#999;">');
                c4.push("-----");
                c4.push("</strong>");
                c4.push('<strong class="color999">');
                c4.push("-----");
                c4.push("</strong>")
            } else {
                c4.push('<strong class="start-t">');
                c4.push(c0[c2].queryLeftNewDTO.start_time);
                c4.push("</strong>");
                c4.push('<strong class="color999">');
                c4.push(c0[c2].queryLeftNewDTO.arrive_time);
                c4.push("</strong>")
            }
            c4.push("</div>");
            c4.push('<div  class="ls" ');
            c4.push('id="');
            c4.push(c0[c2].queryLeftNewDTO.train_no);
            c4.push('_ls">');
            if ("1" == c0[c2].queryLeftNewDTO.controlled_train_flag || "2" == c0[c2].queryLeftNewDTO.controlled_train_flag) {
                c4.push('<strong class="color999">');
                c4.push("------");
                c4.push("</strong>");
                c4.push('<strong class="color999">');
                c4.push("------");
                c4.push("</strong>")
            } else {
                c4.push("<strong>");
                c4.push(c0[c2].queryLeftNewDTO.lishi);
                c4.push("</strong>");
                c4.push("<span>");
                c4.push(changeArriveDate(c0[c2].queryLeftNewDTO.start_time, c0[c2].queryLeftNewDTO.lishi));
                c4.push("到达</span>")
            }
            c4.push("</div>");
            c4.push("</div>");
            c4.push("</td>");
            if (c0[c2].queryLeftNewDTO.swz_num && c0[c2].queryLeftNewDTO.swz_num != "--" && c0[c2].queryLeftNewDTO.swz_num != 0 && c0[c2].queryLeftNewDTO.swz_num != "无") {
                cD(c4, c0[c2].queryLeftNewDTO.swz_num, "SWZ_", c0[c2].queryLeftNewDTO.train_no, c0[c2].queryLeftNewDTO.yp_ex, "91", c0[c2].queryLeftNewDTO.controlled_train_flag, c0[c2])
            } else {
                if (c0[c2].queryLeftNewDTO.tz_num && c0[c2].queryLeftNewDTO.tz_num != "--" && c0[c2].queryLeftNewDTO.tz_num != 0 && c0[c2].queryLeftNewDTO.tz_num != "无") {
                    cD(c4, c0[c2].queryLeftNewDTO.tz_num, "TZ_", c0[c2].queryLeftNewDTO.train_no, c0[c2].queryLeftNewDTO.yp_ex, "P1", c0[c2].queryLeftNewDTO.controlled_train_flag, c0[c2])
                } else {
                    if (c0[c2].queryLeftNewDTO.swz_num && c0[c2].queryLeftNewDTO.swz_num == "无") {
                        cD(c4, c0[c2].queryLeftNewDTO.swz_num, "SWZ_", c0[c2].queryLeftNewDTO.train_no, c0[c2].queryLeftNewDTO.yp_ex, "91", c0[c2].queryLeftNewDTO.controlled_train_flag, c0[c2])
                    } else {
                        cD(c4, c0[c2].queryLeftNewDTO.tz_num, "TZ_", c0[c2].queryLeftNewDTO.train_no, c0[c2].queryLeftNewDTO.yp_ex, "P1", c0[c2].queryLeftNewDTO.controlled_train_flag, c0[c2])
                    }
                }
            }
            cD(c4, c0[c2].queryLeftNewDTO.zy_num, "ZY_", c0[c2].queryLeftNewDTO.train_no, c0[c2].queryLeftNewDTO.yp_ex, "M1", c0[c2].queryLeftNewDTO.controlled_train_flag, c0[c2]);
            cD(c4, c0[c2].queryLeftNewDTO.ze_num, "ZE_", c0[c2].queryLeftNewDTO.train_no, c0[c2].queryLeftNewDTO.yp_ex, "O1", c0[c2].queryLeftNewDTO.controlled_train_flag, c0[c2]);
            cD(c4, c0[c2].queryLeftNewDTO.gr_num, "GR_", c0[c2].queryLeftNewDTO.train_no, c0[c2].queryLeftNewDTO.yp_ex, "61", c0[c2].queryLeftNewDTO.controlled_train_flag, c0[c2]);
            cD(c4, c0[c2].queryLeftNewDTO.rw_num, "RW_", c0[c2].queryLeftNewDTO.train_no, c0[c2].queryLeftNewDTO.yp_ex, "41", c0[c2].queryLeftNewDTO.controlled_train_flag, c0[c2]);
            cD(c4, c0[c2].queryLeftNewDTO.srrb_num, "SRRB_", c0[c2].queryLeftNewDTO.train_no, c0[c2].queryLeftNewDTO.yp_ex, "F1", c0[c2].queryLeftNewDTO.controlled_train_flag, c0[c2]);
            cD(c4, c0[c2].queryLeftNewDTO.yw_num, "YW_", c0[c2].queryLeftNewDTO.train_no, c0[c2].queryLeftNewDTO.yp_ex, "31", c0[c2].queryLeftNewDTO.controlled_train_flag, c0[c2]);
            cD(c4, c0[c2].queryLeftNewDTO.rz_num, "RZ_", c0[c2].queryLeftNewDTO.train_no, c0[c2].queryLeftNewDTO.yp_ex, "21", c0[c2].queryLeftNewDTO.controlled_train_flag, c0[c2]);
            cD(c4, c0[c2].queryLeftNewDTO.yz_num, "YZ_", c0[c2].queryLeftNewDTO.train_no, c0[c2].queryLeftNewDTO.yp_ex, "11", c0[c2].queryLeftNewDTO.controlled_train_flag, c0[c2]);
            cD(c4, c0[c2].queryLeftNewDTO.wz_num, "WZ_", c0[c2].queryLeftNewDTO.train_no, c0[c2].queryLeftNewDTO.yp_ex, "W1", c0[c2].queryLeftNewDTO.controlled_train_flag, c0[c2]);
            cD(c4, c0[c2].queryLeftNewDTO.qt_num, "QT_", c0[c2].queryLeftNewDTO.train_no, c0[c2].queryLeftNewDTO.yp_ex, "", c0[c2].queryLeftNewDTO.controlled_train_flag, c0[c2]);
            var cZ = true;
            if (c0[c2].queryLeftNewDTO.stopcheckTime) {
                try {
                    var c6 = new Date().getTime();
                    var c8 = $("#train_date").val().replace(/-/g, "/") + " " + c0[c2].queryLeftNewDTO.start_time + ":00";
                    var c1 = new Date(c8).getTime() - (60 * 1000 * c0[c2].queryLeftNewDTO.stopcheckTime);
                    if (c6 > c1) {
                        cZ = false
                    }
                } catch (c5) {}
            }
            if ("Y" == c0[c2].queryLeftNewDTO.canWebBuy && cZ) {
                c4.push(' <td align="center" width="80" class="no-br"><a href="javascript:" class="btn72" onclick="checkG1234(\'');
                c4.push(c0[c2].secretStr);
                c4.push("','");
                c4.push(c0[c2].queryLeftNewDTO.start_time);
                c4.push("','");
                c4.push(c0[c2].queryLeftNewDTO.train_no);
                c4.push("','");
                c4.push(c0[c2].queryLeftNewDTO.from_station_telecode);
                c4.push("','");
                c4.push(c0[c2].queryLeftNewDTO.to_station_telecode);
                c4.push("')\">");
                c4.push(buttonText());
                if (c0[c2].queryLeftNewDTO.exchange_train_flag == 1) {
                    c4.push("<i class='ico-dh'></i>")
                }
                c4.push("</a>");
                c4.push("</td>")
            } else {
                c4.push('<td align="center" width="80" class="no-br">');
                c4.push(c0[c2].buttonTextInfo);
                c4.push("</td>")
            }
            c4.push("</tr>");
            c4.push('<tr datatran="' + c0[c2].queryLeftNewDTO.station_train_code + '" id="price_');
            c4.push(c0[c2].queryLeftNewDTO.train_no + "_" + c0[c2].queryLeftNewDTO.from_station_no + "_" + c0[c2].queryLeftNewDTO.to_station_no);
            c4.push('" style="display:none;"></tr>')
        }
        c4.push('<tr style="display:none;" id="lcdata" class=""><td colspan="16" class="no-br" style="text-align: left; padding-left: 20px; height: 30px;">以下为同车车次变更接续方案(无需下车换乘)</td></tr>');
        c4.push("</tbody>");
        $("#queryLeftTable").replaceWith(c4.join(""));
        bq()
    }
    function bq() {
        var cV = "11W,SNE,MGE,HNE,HDE,DWE,TTE,HCE,LAE,GAE,HUE,JZE,JNE,JYE,BXE,BVE,WCI,WDI,GIW,KQW,WNI";
        var cY = $("#fromStation").val();
        var cX = $("#toStation").val();
        if (!(cV.indexOf(cY) > -1 && cV.indexOf(cX) > -1)) {
            return
        }
        if ("Y" != is_login) {
            return
        }
        if ("gc" == train_tour_flag || "fc" == train_tour_flag || "wc" == train_tour_flag) {
            return
        }
        var cW = J();
        if (!cW) {
            return
        }
        cy()
    }
    function cy() {
        $.ajax({
            url: lc_search_url,
            type: "get",
            beforeSend: function(cW) {
                cW.setRequestHeader("If-Modified-Since", "0");
                cW.setRequestHeader("Cache-Control", "no-cache");
                var cV = $.cookie("tk");
                if (cV && cV != "") {
                    cW.setRequestHeader("tk", cV)
                }
            },
            data: {
                train_date: $("#train_date").val(),
                from_station_telecode: $("#fromStation").val(),
                to_station_telecode: $("#toStation").val(),
                result_index: "0",
                can_query: "Y",
                isShowWZ: "Y",
                sort_type: "2",
                purpose_codes: "00",
                is_loop_transfer: "Y",
                lc_ciphertext: _lc_ciphertext
            },
            success: function(cW, cV, cX) {
                if (cW.data && cW.data.flag) {
                    var cY = bB(cW.data.middleList);
                    $("#lcdata").after(cY);
                    $("#lcdata").show()
                }
            }
        })
    }
    function J() {
        $.ajax({
            url: ctx + "lcQuery/getct",
            type: "post",
            async: false,
            beforeSend: function(cV) {
                cV.setRequestHeader("If-Modified-Since", "0");
                cV.setRequestHeader("Cache-Control", "no-cache")
            },
            data: {
                random: new Date().getTime()
            },
            success: function(cV) {
                if (cV.data && cV.data.flag) {
                    _lc_ciphertext = cV.data.lc_ciphertext
                }
            }
        });
        return _lc_ciphertext
    }
    function bK(cV) {
        if (cV.substring(0, 1) == "0") {
            if (cV.substring(1, 2) == "0") {
                if (cV.substring(3, 4) == "0") {
                    cV = cV.substring(4, 5) + "分"
                } else {
                    cV = cV.substring(3, 5) + "分"
                }
            } else {
                cV = cV.substring(1, 2) + "小时" + cV.substring(3, 5) + "分"
            }
        } else {
            if (cV.substring(3, 5) == "00") {
                cV = cV.substring(0, 2) + "小时"
            } else {
                cV = cV.substring(0, 2) + "小时" + cV.substring(3, 5) + "分"
            }
        }
        return cV
    }
    function cg(cX, cW) {
        if (cX != "" && cX.indexOf("-") > -1) {
            var cV = cX.split("-");
            return cV[cW]
        }
        return cX
    }
    function bB(c3) {
        var c1 = "";
        for (var c0 = 0; c0 < c3.length; c0++) {
            var c2 = c3[c0];
            c1 += '<tr class="bgc">';
            c1 += '<td colspan="16">';
            c1 += '<table class="transfer-header-table">';
            c1 += "<tr>";
            c1 += '<td><strong class="transfer-order">' + (c0 + 1) + "</strong></td>";
            c1 += '<td><strong class="transfer-station">' + c2.from_station_name;
            c1 += '</strong><span class="transfer-time">' + c2.fullList[0].start_time + "开</span></td>";
            c1 += '<td><div class="transfer-center">';
            c1 += '<div class="transfer-center-num">' + c2.fullList[0].station_train_code + "/" + c2.fullList[1].station_train_code;
            var cX = c2.middle_station_name;
            if ("0" != c2.same_station) {
                cX = cg(c2.middle_station_name, "0") + "——" + cg(c2.middle_station_name, "1")
            }
            c1 += '</div><div class="transfer-center-station">' + cX;
            c1 += "</div></div></td>";
            c1 += '<td><span class="transfer-time">' + c2.fullList[1].arrive_time + "到</span>";
            c1 += '<strong class="transfer-station">' + c2.end_station_name + "</strong></td>";
            c1 += '<td><span class="transfer-time-all">总历时:' + c2.all_lishi + "</span>";
            c1 += "</tr></table></td></tr>";
            var c6 = c2.fullList;
            for (var cZ = 0; cZ < c6.length; cZ++) {
                var cW = c6[cZ];
                var cV = cW.dw_flag;
                var c5 = parseInt($("#trainum").html()) + (cZ + 1);
                c1 += '<tr class="">';
                c1 += '<td width="370" colspan="4">';
                c1 += '<div class="ticket-info clearfix" id="train_num_' + c5 + '" >';
                c1 += '<div class="train"><div>';
                var cY = false;
                if ("5" == cV.split("#")[0]) {
                    cY = true
                }
                if (cV.split("#").length > 1 && "1" == cV.split("#")[1]) {
                    cY = true
                }
                if (cV.split("#").length > 2 && "Q" == cV.split("#")[2].substring(0, 1)) {
                    cY = true
                }
                var c4 = "";
                if (cY) {
                    c4 = "height: 18px; line-height: 18px;cursor: pointer;"
                }
                c1 += '<a title="点击查看停靠站信息" style="' + c4 + '" href="javascript:" class="number"';
                c1 += "onclick=\"myStopStation.open('" + c5 + "','" + cW.train_no + "','" + cW.from_station_telecode + "','" + cW.to_station_telecode + "','" + cW.start_train_date + "','" + cW.train_seat_feature + "')\">" + cW.station_train_code + "</a>";
                c1 += '<div class="train-type">';
                if ("5" == cV.split("#")[0]) {
                    c1.push('<div class="train-type-item item-zhi" title="智能动车组">智</div>')
                }
                if (cV.split("#").length > 1 && "1" == cV.split("#")[1]) {
                    c1.push('<div class="train-type-item item-fu" title="复兴号">复</div>')
                }
                if (cV.split("#").length > 2 && "Q" == cV.split("#")[2].substring(0, 1)) {
                    c1.push('<div class="train-type-item item-jing" title="静音车厢">静</div>')
                }
                c1 += "</div></div>";
                c1 += '<span id="lookup_' + cW.train_no + "_" + cW.from_station_no + "_" + cW.to_station_no + '" class="lookup"><span style="display:none;">查看票价</span><b title="查看票价"></b></span>';
                c1 += '</div><div class="cdz">';
                if (cW.from_station_name == cW.start_station_telecode) {
                    c1 += '<strong class="start-s fw100">' + cW.from_station_name + "</strong>"
                } else {
                    c1 += '<strong class="fw100">' + cW.from_station_name + "</strong>"
                }
                if (cW.end_station_name == cW.to_station_telecode) {
                    c1 += '<strong class="end-s fw100">' + cW.to_station_name + "</strong>"
                } else {
                    c1 += '<strong class="fw100">' + cW.to_station_name + "</strong>"
                }
                c1 += '</div><div class="cds">';
                c1 += '<strong class="start-t">' + cW.start_time + '</strong><strong class="color999">' + cW.arrive_time + "</strong></div></div>";
                c1 += "</td>";
                c1 += '<td width="78" class="';
                if (isLcNum(cW.swz_num)) {
                    if ("有" == cW.swz_num) {
                        c1 += "yes"
                    } else {
                        if ("无" == cW.swz_num) {
                            c1 += "cursor"
                        } else {
                            c1 += "t-num"
                        }
                    }
                } else {
                    if (isLcNum(cW.tz_num)) {
                        if ("有" == cW.tz_num) {
                            c1 += "yes"
                        } else {
                            if ("无" == cW.tz_num) {
                                c1 += "cursor"
                            } else {
                                c1 += "t-num"
                            }
                        }
                    }
                }
                c1 += '" onclick="showLCTicketPrice(\'' + cW.controlled_train_flag + "','" + cW.train_no + "','" + cW.from_station_no + "','" + cW.to_station_no + "','" + cW.seat_types + "','" + c2.train_date + "','" + c5 + "')\">";
                if (isLcNum(cW.swz_num) || "无" == cW.swz_num) {
                    c1 += cW.swz_num
                } else {
                    c1 += cW.tz_num
                }
                c1 += "</td>";
                c1 += '<td width="78" class="';
                if ("有" == cW.zy_num) {
                    c1 += "yes"
                } else {
                    if ("无" == cW.zy_num) {
                        c1 += "cursor"
                    } else {
                        c1 += "t-num"
                    }
                }
                c1 += '" onclick="showLCTicketPrice(\'' + cW.controlled_train_flag + "','" + cW.train_no + "','" + cW.from_station_no + "','" + cW.to_station_no + "','" + cW.seat_types + "','" + c2.train_date + "','" + c5 + "')\">";
                c1 += cW.zy_num + "</td>";
                c1 += '<td width="78" class="';
                if ("有" == cW.ze_num) {
                    c1 += "yes"
                } else {
                    if ("无" == cW.ze_num) {
                        c1 += "cursor"
                    } else {
                        c1 += "t-num"
                    }
                }
                c1 += '" onclick="showLCTicketPrice(\'' + cW.controlled_train_flag + "','" + cW.train_no + "','" + cW.from_station_no + "','" + cW.to_station_no + "','" + cW.seat_types + "','" + c2.train_date + "','" + c5 + "')\">";
                c1 += cW.ze_num + "</td>";
                c1 += '<td width="78" class="';
                if ("有" == cW.gr_num) {
                    c1 += "yes"
                } else {
                    if ("无" == cW.gr_num) {
                        c1 += "cursor"
                    } else {
                        c1 += "t-num"
                    }
                }
                c1 += '" onclick="showLCTicketPrice(\'' + cW.controlled_train_flag + "','" + cW.train_no + "','" + cW.from_station_no + "','" + cW.to_station_no + "','" + cW.seat_types + "','" + c2.train_date + "','" + c5 + "')\">";
                c1 += cW.gr_num + "</td>";
                c1 += '<td width="78" class="';
                if ("有" == cW.rw_num) {
                    c1 += "yes"
                } else {
                    if ("无" == cW.rw_num) {
                        c1 += "cursor"
                    } else {
                        c1 += "t-num"
                    }
                }
                c1 += '" onclick="showLCTicketPrice(\'' + cW.controlled_train_flag + "','" + cW.train_no + "','" + cW.from_station_no + "','" + cW.to_station_no + "','" + cW.seat_types + "','" + c2.train_date + "','" + c5 + "')\">";
                c1 += cW.rw_num + "</td>";
                c1 += '<td width="78" class="';
                if ("有" == cW.srrb_num) {
                    c1 += "yes"
                } else {
                    if ("无" == cW.srrb_num) {
                        c1 += "cursor"
                    } else {
                        c1 += "t-num"
                    }
                }
                c1 += '" onclick="showLCTicketPrice(\'' + cW.controlled_train_flag + "','" + cW.train_no + "','" + cW.from_station_no + "','" + cW.to_station_no + "','" + cW.seat_types + "','" + c2.train_date + "','" + c5 + "')\">";
                c1 += cW.srrb_num + "</td>";
                c1 += '<td width="78" class="';
                if ("有" == cW.yw_num) {
                    c1 += "yes"
                } else {
                    if ("无" == cW.yw_num) {
                        c1 += "cursor"
                    } else {
                        c1 += "t-num"
                    }
                }
                c1 += '" onclick="showLCTicketPrice(\'' + cW.controlled_train_flag + "','" + cW.train_no + "','" + cW.from_station_no + "','" + cW.to_station_no + "','" + cW.seat_types + "','" + c2.train_date + "','" + c5 + "')\">";
                c1 += cW.yw_num + "</td>";
                c1 += '<td width="78" class="';
                if ("有" == cW.rz_num) {
                    c1 += "yes"
                } else {
                    if ("无" == cW.rz_num) {
                        c1 += "cursor"
                    } else {
                        c1 += "t-num"
                    }
                }
                c1 += '" onclick="showLCTicketPrice(\'' + cW.controlled_train_flag + "','" + cW.train_no + "','" + cW.from_station_no + "','" + cW.to_station_no + "','" + cW.seat_types + "','" + c2.train_date + "','" + c5 + "')\">";
                c1 += cW.rz_num + "</td>";
                c1 += '<td width="78" class="';
                if ("有" == cW.yz_num) {
                    c1 += "yes"
                } else {
                    if ("无" == cW.yz_num) {
                        c1 += "cursor"
                    } else {
                        c1 += "t-num"
                    }
                }
                c1 += '" onclick="showLCTicketPrice(\'' + cW.controlled_train_flag + "','" + cW.train_no + "','" + cW.from_station_no + "','" + cW.to_station_no + "','" + cW.seat_types + "','" + c2.train_date + "','" + c5 + "')\">";
                c1 += cW.yz_num + "</td>";
                c1 += '<td width="78" class="';
                if ("有" == cW.wz_num) {
                    c1 += "yes"
                } else {
                    if ("无" == cW.wz_num) {
                        c1 += "cursor"
                    } else {
                        c1 += "t-num"
                    }
                }
                c1 += '" onclick="showLCTicketPrice(\'' + cW.controlled_train_flag + "','" + cW.train_no + "','" + cW.from_station_no + "','" + cW.to_station_no + "','" + cW.seat_types + "','" + c2.train_date + "','" + c5 + "')\">";
                c1 += cW.wz_num + "</td>";
                c1 += '<td width="78" class=" ">--</td>';
                if (cZ % 2 == 0) {
                    c1 += '<td align="center" width="78" class="no-br" rowspan="2">';
                    c1 += '<a href="javascript:" onclick="submitOrderRequestLC(\'' + c2.scretstr + "','" + c6[0].station_train_code + "','" + c6[1].station_train_code + "','" + cX + '\')" class="btn72">预订</a>';
                    c1 += "</td>"
                }
                c1 += "</tr>";
                c1 += '<tr datatran="' + cW.station_train_code + '" id="price_';
                c1 += cW.train_no + "_" + cW.from_station_no + "_" + cW.to_station_no;
                c1 += '" style="display:none;"></tr>'
            }
        }
        return c1
    }
    function aY(cV) {
        if (cV && cV.length > 0) {
            for (var cW = cV.length - 1; cW >= 0; cW--) {
                if (cV[cW].queryLeftNewDTO.exchange_train_flag == 0 || cV[cW].queryLeftNewDTO.canWebBuy != "Y") {
                    cV.splice(cW, 1)
                }
            }
        }
        return cV
    }
    function bc(cV) {
        if (cV && cV.length > 0) {
            var c1 = [];
            var cW = [];
            for (var cX = 0, c3 = cV.length; cX < c3; cX++) {
                var cZ = cV[cX];
                var c0 = cZ.queryLeftNewDTO.yp_ex.split("");
                var c2 = false;
                for (var cY = 0; cY < c0.length; cY++) {
                    if (cY % 2 == 1 && c0[cY] == 1) {
                        c2 = true;
                        break
                    }
                }
                if (c2) {
                    c1.push(cZ)
                } else {
                    cW.push(cZ)
                }
            }
            cV = c1.concat(cW)
        }
        return cV
    }
    function g(cW) {
        if (cW && cW.length > 0) {
            var c2 = [];
            var c1 = [];
            var cV = {};
            for (var cX = 0, c6 = cW.length; cX < c6; cX++) {
                var cZ = cW[cX].queryLeftNewDTO.station_train_code;
                if (cV[cZ]) {
                    c1.push(cZ);
                    var cY = cV[cZ];
                    cY.push(cW[cX]);
                    cV[cZ] = cY
                } else {
                    var c5 = [];
                    c5.push(cW[cX]);
                    cV[cZ] = c5
                }
            }
            var c4 = [];
            for (var cX = 0, c6 = cW.length; cX < c6; cX++) {
                var cZ = cW[cX].queryLeftNewDTO.station_train_code;
                if (c1.indexOf(cZ) > -1) {
                    if (c4.indexOf(cZ) == -1) {
                        var c3 = bJ(cV[cZ]);
                        c4.push(cZ);
                        for (var c0 = 0; c0 < c3.length; c0++) {
                            c2.push(c3[c0])
                        }
                    }
                } else {
                    c2.push(cW[cX])
                }
            }
        }
        return c2
    }
    function c(cX) {
        if (DW_TRAINS && DW_TRAINS.length) {
            for (var cV = 0, cW = DW_TRAINS.length; cV < cW; cV++) {
                if (cX == DW_TRAINS[cV]) {
                    return true
                }
            }
        } else {
            return false
        }
        return false
    }
    function ar(c1, cV) {
        var c2, cZ, cY;
        var cX;
        cY = c1["leftTicketDTO.train_date"];
        if (hainan_limit_start_traindate && I(cY) >= I(hainan_limit_start_traindate)) {
            if (hainan_limit_from_telcode && hainan_limit_to_telcode) {
                for (var cW = 0, c0 = cV.length; cW < c0; cW++) {
                    c2 = cV[cW].queryLeftNewDTO.from_station_telecode;
                    cZ = cV[cW].queryLeftNewDTO.to_station_telecode;
                    cX = cV[cW].buttonTextInfo;
                    if (hainan_limit_from_telcode.indexOf(c2) > -1 && hainan_limit_to_telcode.indexOf(cZ) > -1 && cX.indexOf("起售") > -1) {
                        return true
                    }
                }
            }
        }
        return false
    }
    function ca(c0) {
        c0 += ":59";
        var cW = new Date();
        cW.setHours(cW.getHours() + 2);
        var cY = cW.getTime();
        var cZ = new Date(c0.replace(/-/g, "/")).getTime();
        if (cZ < cY) {
            return false
        }
        var cX = c0.substring(0, 10).replace(/-/g, "");
        var cV = other_buy_date.split("&")[1].replace(/-/g, "");
        if (cX > cV) {
            return false
        }
        return true
    }
    function au(cY, cW) {
        var cZ = "";
        var cX = "";
        var cV = new Date();
        cV.setDate(cV.getDate() + cY);
        cZ += cV.getFullYear() + "-";
        cZ += al((cV.getMonth() + 1)) + "-";
        cZ += al((cV.getDate()));
        cX += cV.getFullYear();
        cX += al((cV.getMonth() + 1));
        cX += al((cV.getDate()));
        if (cW) {
            return cX
        } else {
            return cZ
        }
    }
    function al(cV) {
        var cW = cV + "";
        if (cW.length < 2) {
            cW = "0" + cW
        }
        return cW
    }
    function ac(cV) {
        if (cV == "SWZ_") {
            return "9"
        } else {
            if (cV == "TZ_") {
                return "P"
            } else {
                if (cV == "ZY_") {
                    return "M"
                } else {
                    if (cV == "ZE_") {
                        return "O"
                    } else {
                        if (cV == "GR_") {
                            return "6"
                        } else {
                            if (cV == "RW_") {
                                return "4"
                            } else {
                                if (cV == "SRRB_") {
                                    return "F"
                                } else {
                                    if (cV == "YW_") {
                                        return "3"
                                    } else {
                                        if (cV == "RZ_") {
                                            return "2"
                                        } else {
                                            if (cV == "YZ_") {
                                                return "1"
                                            } else {
                                                if (cV == "WZ_") {
                                                    return ""
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        return ""
    }
    function e(c5, c4, c2) {
        var cW = c2.seat_types;
        var c3 = c2.station_train_code + "次列车，";
        var cX = c5.length / 10;
        for (var cZ = 0; cZ < cX; cZ++) {
            var cY = c5.substring(10 * cZ, 10 * (cZ + 1));
            var cV = cY.substring(0, 1);
            var c1 = cY.substring(1, 6) / 10;
            var c0 = cY.substring(6, 10);
            if ("SWZ_" == c4) {
                if (cV == "9") {
                    c3 += "商务座票价" + c1 + "元";
                    return c3
                }
            }
            if ("TZ_" == c4) {
                if (cV == "P") {
                    c3 += "特等座票价" + c1 + "元";
                    return c3
                }
            }
            if ("ZY_" == c4) {
                if (cV == "M") {
                    c3 += "一等座票价" + c1 + "元";
                    return c3
                }
            }
            if ("ZE_" == c4) {
                if (cV == "O") {
                    c3 += "二等座票价" + c1 + "元";
                    return c3
                }
                if (cV == "S") {
                    c3 += "二等包座票价" + c1 + "元";
                    return c3
                }
            }
            if ("GR_" == c4) {
                if (cV == "6") {
                    c3 += "高级软卧票价" + c1 + "元";
                    return c3
                }
            }
            if ("RW_" == c4) {
                if (cV == "4") {
                    c3 += "软卧票价" + c1 + "元";
                    return c3
                }
                if (cV == "I") {
                    c3 += "一等卧票价" + c1 + "元";
                    return c3
                }
            }
            if ("SRRB_" == c4) {
                if (cV == "F") {
                    c3 += "动卧票价" + c1 + "元";
                    return c3
                }
            }
            if ("YW_" == c4) {
                if (cV == "3") {
                    c3 += "硬卧票价" + c1 + "元";
                    return c3
                }
                if (cV == "J") {
                    c3 += "二等卧票价" + c1 + "元";
                    return c3
                }
            }
            if ("RZ_" == c4) {
                if (cV == "2") {
                    c3 += "软座票价" + c1 + "元";
                    return c3
                }
            }
            if ("YZ_" == c4) {
                if (cV == "1") {
                    c3 += "硬座票价" + c1 + "元";
                    return c3
                }
            }
            if ("WZ_" == c4) {
                if (c0 >= 3000) {
                    c3 += "无座票价" + c1 + "元";
                    return c3
                }
            }
            if ("QT_" == c4) {
                if (cV != "9" && cV != "P" && cV != "M" && cV != "O" && cV != "S" && cV != "6" && cV != "4" && cV != "I" && cV != "F" && cV != "3" && cV != "J" && cV != "2" && cV != "1" && c0 < 3000) {
                    c3 += "其他席位票价" + c1 + "元";
                    return c3
                }
            }
        }
        return ""
    }
    function cD(c6, dn, dh, dc, di, c8, c5, c7) {
        var c0 = c7.queryLeftNewDTO;
        var da = e(c0.yp_info_new, dh, c0);
        var c2 = $("#train_date").val() + "#" + c0.from_station_telecode + "#" + c0.to_station_telecode + "#" + c0.train_no + "#" + dh + "#" + c0.from_station_no + "#" + c0.from_station_name + "#" + c0.to_station_no + "#" + c0.to_station_name + "#" + c7.secretStr + "#" + c0.station_train_code + "#";
        var cZ = $("#train_date").val() + "#" + c0.train_no + "#" + dh + "#";
        var db = "";
        var dd = ca($("#train_date").val() + " " + c0.start_time);
        var c1 = new_year_day.split("-");
        var cW = parseInt(au(0, true)) >= parseInt(c1[0]) && parseInt(au(0, true)) <= parseInt(c1[1]);
        var cY = parseInt(au(1, true)) >= parseInt(c1[0]) && parseInt(au(1, true)) <= parseInt(c1[1]);
        if (!c7.secretStr || "null" == c7.secretStr) {
            dd = false
        }
        if (tour_flag == "fc" || tour_flag == "gc") {
            dd = false
        }
        if (!"1" == c0.houbu_train_flag) {
            dd = false
        }
        var dj = "1";
        var c9 = "";
        if ("无" == dn && "WZ_" != dh && "QT_" != dh && dd) {
            dn = "候补";
            var de = ac(dh);
            if (de != "" && c0.houbu_seat_limit && c0.houbu_seat_limit.indexOf(de) > -1) {
                db = "color: " + houbuColor_n + ";";
                dj = "0";
                c9 = "当前" + c0.station_train_code + "车次" + R(dh.replace("_", "")) + "席别提交的候补订单较多，可更换车次、席别或稍后重试。";
                var cX = c0.dw_flag;
                var c4 = "icon-add-fill";
                if (cX.length > 4) {
                    var dm = cX.split("#")[4];
                    if (("a" == dm) || (dm.indexOf(de) > -1)) {
                        c4 = "icon-error"
                    }
                }
                dn = '候补<i class="icon ' + c4 + ' ml5" style="vertical-align: middle; font-size: 14px;"></i>'
            } else {
                db = "color: " + houbuColor_y + ";"
            }
        }
        di = di.replace("A", "6");
        var dk = di ? di.indexOf(c8) : -1;
        var dg = false;
        if (dk > -1 && (dk % 2) == 0) {
            dg = true
        }
        if (c8 == "") {
            dg = false;
            var cV = di.split("");
            for (var df = 0; df < cV.length; df++) {
                if (df % 2 == 0 && cV[df] != "9" && cV[df] != "P" && cV[df] != "M" && cV[df] != "O" && cV[df] != "6" && cV[df] != "4" && cV[df] != "F" && cV[df] != "3" && cV[df] != "2" && cV[df] != "1" && cV[df] != "W") {
                    if (cV[df + 1] == "1") {
                        dg = true;
                        break
                    }
                }
            }
        }
        if ("1" == c5 || "2" == c5) {
            c6.push(' <td width="46" align="center" style="cursor: pointer;"  id="');
            c6.push(dh);
            c6.push(dc);
            c6.push('">');
            c6.push(dn);
            c6.push("</td>")
        } else {
            if (da) {
                var dl = dn.indexOf("候补") > -1 ? "候补" : dn;
                da += "，余票" + dl
            }
            if ("有" == dn) {
                if (dh == "SWZ_" || dh == "TZ_") {
                    c6.push('<td tabindex="0" aria-label="' + da + '" hbdata="' + cZ + '" hbid="' + c2 + '" width="46" align="center" class="yes" onclick="showTicketPrice(this)"　style="cursor: pointer;" id="');
                    c6.push(dh);
                    c6.push(dc);
                    c6.push('">');
                    if (dg) {
                        c6.push('<div class="sale" title="本席别票价打折">' + dn + '<span class="i-mark">折</span></div>')
                    } else {
                        c6.push(dn)
                    }
                    c6.push("</td>")
                } else {
                    if (dh == "ZY_" || dh == "ZE_") {
                        c6.push('<td tabindex="0" aria-label="' + da + '" hbdata="' + cZ + '" hbid="' + c2 + '" width="46" align="center" class="yes" style="cursor: pointer;" onclick="showTicketPrice(this)" id="');
                        c6.push(dh);
                        c6.push(dc);
                        c6.push('">');
                        if (dg) {
                            c6.push('<div class="sale" title="本席别票价打折">' + dn + '<span class="i-mark">折</span></div>')
                        } else {
                            c6.push(dn)
                        }
                        c6.push("</td>")
                    } else {
                        c6.push('<td tabindex="0" aria-label="' + da + '" hbdata="' + cZ + '" hbid="' + c2 + '" width="46" align="center" style="cursor: pointer;" class="yes" onclick="showTicketPrice(this)" id="');
                        c6.push(dh);
                        c6.push(dc);
                        c6.push('">');
                        if (dg) {
                            c6.push('<div class="sale" title="本席别票价打折">' + dn + '<span class="i-mark">折</span></div>')
                        } else {
                            c6.push(dn)
                        }
                        c6.push("</td>")
                    }
                }
            } else {
                if (dn == "无" || isNum(dn) >= 0) {
                    var c3 = ' class="t-num" ';
                    if (dn == "无" || isNum(dn) == 0) {
                        c3 = ""
                    }
                    if (dh == "SWZ_" || dh == "TZ_" || dh == "ZY_" || dh == "ZE_") {
                        c6.push('<td tabindex="0" aria-label="' + da + '" title="' + c9 + '" ifAlow_MaxLength="' + dj + '" hbdata="' + cZ + '"  hbid="' + c2 + '" width="46" align="center" style="cursor: pointer;' + db + '" ' + c3 + ' onclick="showTicketPrice(this)" id="');
                        c6.push(dh);
                        c6.push(dc);
                        c6.push('">');
                        c6.push("<div>");
                        if (dg) {
                            c6.push('<div class="sale" title="本席别票价打折">' + dn + '<span class="i-mark">折</span></div>')
                        } else {
                            c6.push(dn)
                        }
                        c6.push("</td>")
                    } else {
                        c6.push('<td tabindex="0" aria-label="' + da + '" title="' + c9 + '" ifAlow_MaxLength="' + dj + '" hbdata="' + cZ + '" hbid="' + c2 + '" width="46" align="center" style="cursor: pointer;' + db + '" ' + c3 + ' onclick="showTicketPrice(this)" id="');
                        c6.push(dh);
                        c6.push(dc);
                        c6.push('">');
                        if (dg) {
                            c6.push('<div class="sale" title="本席别票价打折">' + dn + '<span class="i-mark">折</span></div>')
                        } else {
                            c6.push(dn)
                        }
                        c6.push("</td>")
                    }
                } else {
                    if ("--" == dn) {
                        c6.push(' <td title="' + c9 + '" ifAlow_MaxLength="' + dj + '" hbdata="' + cZ + '" hbid="' + c2 + '" width="46" align="center" style="cursor: pointer;' + db + '" ' + c3 + ' onclick="showTicketPrice(this)"  id="')
                    } else {
                        c6.push(' <td tabindex="0" aria-label="' + da + '" role="button"  title="' + c9 + '" ifAlow_MaxLength="' + dj + '" hbdata="' + cZ + '" hbid="' + c2 + '" width="46" align="center" style="cursor: pointer;' + db + '" ' + c3 + ' onclick="showTicketPrice(this)"  id="')
                    }
                    c6.push(dh);
                    c6.push(dc);
                    c6.push('">');
                    c6.push(dn);
                    c6.push("</td>")
                }
            }
        }
    }
    function n(cW, cV) {
        ishaveCheckId = false;
        for (i = 0; i < cW.length; i++) {
            if (cW[i][0] == cV) {
                cW[i][1] = $("#".concat($("#".concat(cV)).attr("for"))).is(":checked");
                ishaveCheckId = true
            }
        }
        if (!ishaveCheckId) {
            cW[cW.length] = [cV, true]
        }
    }
    function ck() {
        h(b7);
        h(bR);
        h(V)
    }
    function h(cV) {
        for (i = 0; i < cV.length; i++) {
            if (cV[i][1]) {
                $("#".concat(cV[i][0]).concat("_check")).attr("checked", true)
            }
        }
    }
    function I(cW) {
        var cV = new Date();
        var cX = cW.split("-");
        cV.setFullYear(parseInt(cX[0]), parseInt(cX[1] - 1, 10), parseInt(cX[2], 10));
        if (cX.length >= 6) {
            cV.setHours(cX[3], cX[4], cX[5])
        }
        return cV
    }
    Date.prototype.format = function(cW) {
        var cX = {
            "M+": this.getMonth() + 1,
            "d+": this.getDate(),
            "h+": this.getHours(),
            "m+": this.getMinutes(),
            "s+": this.getSeconds(),
            "q+": Math.floor((this.getMonth() + 3) / 3),
            S: this.getMilliseconds()
        };
        if (/(y+)/.test(cW)) {
            cW = cW.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length))
        }
        for (var cV in cX) {
            if (new RegExp("(" + cV + ")").test(cW)) {
                cW = cW.replace(RegExp.$1, RegExp.$1.length == 1 ? cX[cV] : ("00" + cX[cV]).substr(("" + cX[cV]).length))
            }
        }
        return cW
    }
    ;
    function a1(cX, cW) {
        var cV = new Date(Date.parse(cX.replace(/-/g, "/")));
        cV.setDate(cV.getDate() + cW);
        return Z(cV)
    }
    function Z(cW) {
        var cX = cW.getFullYear();
        var cZ = cW.getMonth() + 1;
        var cY = cW.getDate();
        var cV = cX + "-" + cZ + "-" + cY;
        return cV
    }
    function b8() {
        var cX = $("#train_date").val();
        var cW = $("#back_train_date").val();
        var cV = false;
        if ($("#wf").is(":checked")) {
            if (I(cX) <= I(cW)) {
                cV = true
            }
        } else {
            return true
        }
        return cV
    }
    function cL() {
        var cY = $.jc_getFromStation();
        if (cY) {
            var cX = cY.split(",");
            if (cX && cX.length == 2) {
                $("#fromStationText").val(cX[0]);
                $("#fromStation").val(cX[1])
            }
        }
        var cW = $.jc_getToStation();
        if (cW) {
            var cX = cW.split(",");
            if (cX && cX.length == 2) {
                $("#toStationText").val(cX[0]);
                $("#toStation").val(cX[1])
            }
        }
        var cZ = [];
        cZ = stu_buy_date.split("&");
        var cV = $.jc_getFromDate();
        if (cV) {
            if (cV >= cZ[0] && cV <= cZ[1]) {
                $("#train_date").val(cV)
            }
        }
        var c0 = $.jc_getWfOrDc();
        if (c0 && "wf" == c0) {
            $("#wf").click();
            var c1 = $.jc_getToDate();
            if (c1) {
                if (c1 >= cZ[0] && c1 <= cZ[1]) {
                    $("#back_train_date").val(c1)
                }
            }
        } else {
            $("#dc").click()
        }
    }
    function bn() {
        $("#train_stop").on("mouseover", function(cV) {
            if (checkHover(cV, this)) {
                cw = 1
            }
        }).on("mouseleave", function() {
            cw = 0;
            $("#train_stop").hide();
            $("#train_table_").html("")
        })
    }
    function j() {
        fromStation = from_station;
        fromStationName = from_station_name;
        toStation = to_station;
        toStationName = to_station_name;
        trainDate = trainDate;
        backTrainDate = backTrainDate;
        b7 = new Array();
        bR = new Array();
        V = new Array()
    }
    function y() {
        if ($("#sf1").is(":checked")) {
            isOther = true;
            if (other_control < dataNumber) {
                for (var cV = other_control + 1; cV <= dataNumber; cV++) {
                    $("#date-list>li:nth-child(" + cV + ")").hide()
                }
            } else {
                for (var cV = 1; cV <= dataNumber; cV++) {
                    $("#date-list>li:nth-child(" + cV + ")").show()
                }
            }
        } else {
            isOther = false;
            if (stu_control < dataNumber) {
                for (var cV = stu_control + 1; cV <= dataNumber; cV++) {
                    $("#date-list>li:nth-child(" + cV + ")").hide()
                }
            } else {
                for (var cV = 1; cV <= dataNumber; cV++) {
                    $("#date-list>li:nth-child(" + cV + ")").show()
                }
            }
        }
    }
    function r() {
        $("#fromStation").val(fromStation);
        $("#fromStationText").val(fromStationName);
        $("#toStation").val(toStation);
        $("#toStationText").val(toStationName);
        $("#train_date").val(trainDate);
        if (isInMaintenanceHours) {
            if (!isSuperLogin) {
                $("#autoSubmit").prop("checked", false);
                $("#autoSubmit").attr("disabled", true);
                $("#autoSubmit").siblings("label").css("color", "#999");
                $("#autoSubmitTxt").attr("title", "系统维护时间下不允许自动提交");
                $("#partSubmit").prop("checked", false);
                $("#partSubmit").attr("disabled", true);
                $("#partSubmit").siblings("label").css("color", "#999");
                $("#partSubmitTxt").attr("title", "系统维护时间下不允许自动提交");
                $("#auto_query").prop("checked", false);
                $("#auto_query").attr("disabled", true);
                $("#auto_query").siblings("label").css("color", "#999");
                $("#autoQueryTxt").attr("title", "系统维护时间下不允许自动查询")
            }
        }
        if (backTrainDate != null && backTrainDate != "") {
            $("#back_train_date").val(backTrainDate)
        }
        if ($("#fromStationText").val() == "") {
            $("#fromStationText").val("简拼/全拼/汉字")
        }
        if ($("#toStationText").val() == "") {
            $("#toStationText").val("简拼/全拼/汉字")
        }
        if (page_show_flag == null) {
            cL();
            aL()
        } else {
            if (page_show_flag == "index") {
                bP()
            } else {
                if (page_show_flag == "preStep") {
                    cG()
                } else {
                    if (page_show_flag == "fcInit") {
                        B();
                        $("#autoSubmit").attr("disabled", true);
                        $("#autoSubmit").siblings("label").css("color", "#999");
                        $("#partSubmit").attr("disabled", true);
                        $("#partSubmit").siblings("label").css("color", "#999")
                    } else {
                        if (page_show_flag == "gcInit") {
                            bS();
                            $("#autoSubmit").attr("disabled", true);
                            $("#autoSubmit").siblings("label").css("color", "#999");
                            $("#partSubmit").attr("disabled", true);
                            $("#partSubmit").siblings("label").css("color", "#999")
                        }
                    }
                }
            }
        }
    }
    function bP() {
        if (tour_flag == "wf") {
            $("#wf").click()
        } else {
            if (tour_flag == "dc") {
                $("#dc").click()
            }
        }
        if (purposeCodeFromIndex == "0X00") {
            $("#sf2").click()
        } else {
            if (purposeCodeFromIndex == "ADULT") {
                $("#sf1").click()
            }
        }
        var cV = [];
        $("#date_range>ul>li").each(function() {
            var cW = $(this).children("span:first-child").html();
            cV.push(cW)
        });
        $("#query_ticket").click()
    }
    function aL() {
        var cY = decodeURI(window.location.href);
        value = cY.split("?")[1];
        if (value != "" && value != undefined && value != "undefined") {
            var cZ = initParams(value);
            if (cZ.linktypeid) {
                if ("dc" == cZ.linktypeid) {
                    $("#dc").click()
                } else {
                    $("#wf").click();
                    var cW = $("#train_date").val();
                    var cX = $("#back_train_date").val();
                    if (!cX | I(cW) > I(cX)) {
                        $("#back_train_date").val(cW)
                    }
                }
            }
            if (cZ.fromStationText) {
                $("#fromStationText").val(cZ.fromStationText)
            }
            if (cZ.fromStation) {
                $("#fromStation").val(cZ.fromStation)
            }
            if (cZ.toStationText) {
                $("#toStationText").val(cZ.toStationText)
            }
            if (cZ.toStation) {
                $("#toStation").val(cZ.toStation)
            }
            if (cZ.train_date) {
                $("#train_date").val(cZ.train_date)
            }
            if (cZ.back_train_date) {
                $("#back_train_date").val(cZ.back_train_date)
            }
            if (cZ.is_student && "Y" == cZ.is_student) {
                $("#sf2").click()
            } else {
                $("#sf1").click()
            }
            if (cZ.is_GDC && "Y" == cZ.is_GDC) {
                $("#sear-sel-bd input[name='cc_type']")[0].click();
                $("#sear-sel-bd input[name='cc_type']")[1].click()
            }
            if (cZ.auto_query && "Y" == cZ.auto_query) {
                var cV = [];
                $("#date_range>ul>li").each(function() {
                    var c0 = $(this).children("span:first-child").html();
                    cV.push(c0)
                });
                $("#query_ticket").click()
            }
        }
    }
    function cG() {
        $("#fromStationText").removeClass().addClass("inp_selected");
        $("#toStationText").removeClass().addClass("inp_selected");
        if (train_tour_flag == "dc") {
            aG(trainDate);
            $("#dc").click()
        }
        if (train_tour_flag == "wc") {
            aG(trainDate);
            $("#wf").click()
        }
        if (train_tour_flag == "fc") {
            aG(backTrainDate);
            $("#wf").click();
            $("#wf").attr("disabled", "true");
            $("#dc").attr("disabled", "true");
            $("#change_station").removeClass().addClass("i-change i-change2");
            $("#change_station").attr("style", "");
            $("#fromStationText").attr("title", "返程时不得变更出发地或不能变更到达地");
            $("#toStationText").attr("title", "返程时不得变更出发地或不能变更到达地");
            $("#toStationText").unbind("focus").unbind("click").attr("readonly", "true");
            $("#fromStationText").unbind("focus").unbind("click").attr("readonly", "true");
            $("#dfc>ul>li:nth-child(2)").children("label:first").removeClass().addClass("color999");
            $("#dfc>ul>li:nth-child(1)").children("label:first").removeClass().addClass("color999");
            $("#place_area>ul>li:nth-child(1)").addClass("no-change");
            $("#place_area>ul>li:nth-child(3)").addClass("no-change");
            $("#place_area>ul>li:nth-child(4)").addClass("no-change");
            $("#fromStationText").removeClass().addClass("inp-txt");
            $("#toStationText").removeClass().addClass("inp-txt");
            $("#change_station").unbind();
            $("#train_date").val(trainDate);
            $("#train_date").attr("readonly", "true");
            $("#train_date").removeClass().addClass("inp-txt");
            $("#train_date").unbind("click");
            $("#date_icon_1").unbind("click");
            $("#date_area>ul>li:nth-child(1)>span>label").addClass("color999");
            $("#back_train_date").val(backTrainDate);
            $("#back_train_date").removeAttr("disabled");
            $("#date_area>ul>li:nth-child(2)>span>label").removeClass("color999");
            $("#back_train_date").removeClass().addClass("inp_selected");
            $("#autoSubmit").attr("disabled", true);
            $("#autoSubmit").siblings("label").css("color", "#999");
            $("#partSubmit").attr("disabled", true);
            $("#partSubmit").siblings("label").css("color", "#999")
        }
        if (train_tour_flag == "gc") {
            aG(trainDate);
            bS();
            $("#autoSubmit").attr("disabled", true);
            $("#autoSubmit").siblings("label").css("color", "#999");
            $("#partSubmit").attr("disabled", true);
            $("#partSubmit").siblings("label").css("color", "#999")
        }
    }
    function aG(cX) {
        for (var cV = 1; cV <= 20; cV++) {
            var cW = $("#date_range>ul>li:nth-child(" + cV + ")").children("span:first-child").text();
            cW = "2013-" + cW;
            if (cX == cW) {
                $("#date_range>ul>li").removeClass("sel");
                $("#date_range>ul>li").removeAttr("alt");
                $("#date_range>ul>li:nth-child(" + cV + ")").addClass("sel");
                $("#date_range>ul>li:nth-child(" + cV + ")").attr("alt", "show");
                $("#date_range>ul>li:nth-child(20)").addClass("end");
                $("#date_range>ul>li:nth-child(" + cV + ")").children("span:first-child").removeClass();
                $("#date_range>ul>li:nth-child(" + cV + ")").children("span:last-child").removeClass();
                $("#date_range>ul>li:nth-child(" + cV + ")").children("span:first-child").addClass("hide");
                $("#date_range>ul>li:nth-child(1)").children().addClass("first");
                cq = $("#date_range>ul>li:nth-child(" + cV + ")").children("span:first-child").text();
                break
            }
        }
    }
    function bS() {
        $("#fromStationText").attr("title", "改签时不得变更出发地或不能变更到达地");
        $("#dc").click();
        $("#wf").attr("disabled", "true");
        $("#dc").attr("disabled", "true");
        $("#place_area>ul>li:nth-child(1)").addClass("no-change");
        $("#place_area>ul>li:nth-child(3)").addClass("no-change");
        $("#place_area>ul>li:nth-child(5)").addClass("no-change");
        $("#dfc>ul>li:nth-child(1)").children("label:first").removeClass().addClass("color999");
        $("#dfc>ul>li:nth-child(2)").children("label:first").removeClass().addClass("color999");
        $("#fromStationText").unbind("focus").unbind("click").attr("readonly", "true");
        if ("Y" != canChangeToStation) {
            $("#toStationText").unbind("focus").unbind("click").attr("readonly", "true");
            $("#toStationText").removeClass().addClass("inp-txt");
            $("#toStationText_label").addClass("color999")
        }
        $("#fromStationText").removeClass().addClass("inp-txt");
        $("#fromStationText_label").addClass("color999");
        $("#change_station").unbind();
        $("#change_station").removeClass().addClass("i-change i-change2");
        $("#change_station").attr("style", "")
    }
    function B() {
        $("#fromStationText").attr("title", "订返程票时不得变更出发地或不能变更到达地");
        $("#toStationText").attr("title", "订返程票时不得变更出发地或不能变更到达地");
        aG(backTrainDate);
        $("#wf").click();
        $("#dc").attr("disabled", "true");
        $("#wf").attr("disabled", "true");
        $("#place_area>ul>li:nth-child(1)").addClass("no-change");
        $("#place_area>ul>li:nth-child(3)").addClass("no-change");
        $("#place_area>ul>li:nth-child(4)").addClass("no-change");
        $("#dfc>ul>li:nth-child(1)").children("label:first").removeClass().addClass("color999");
        $("#dfc>ul>li:nth-child(2)").children("label:first").removeClass().addClass("color999");
        $("#train_date").attr("readonly", "true");
        $("#train_date").addClass("color999");
        $("#train_date").attr("disabled", true);
        $("#train_date").unbind("click");
        $("#date_icon_1").unbind("click");
        $("#date_area>ul>li:nth-child(1)>span>label").addClass("color999");
        $("#back_train_date").removeAttr("disabled");
        $("#date_area>ul>li:nth-child(2)>span>label").removeClass("color999");
        $("#train_date").removeClass().addClass("inp-txt");
        $("#back_train_date").removeClass().addClass("inp_selected");
        $("#fromStationText").unbind("focus").unbind("unfocus").unbind("click").attr("readonly", "true");
        $("#toStationText").unbind("focus").unbind("unfocus").unbind("click").attr("readonly", "true");
        $("#fromStationText").removeClass().addClass("inp-txt");
        $("#toStationText").removeClass().addClass("inp-txt");
        $("#change_station").unbind();
        $("#change_station").removeClass().addClass("i-change i-change2");
        $("#change_station").attr("style", "")
    }
    function aj() {
        initPageTitle(1);
        $("#train_type_btn_all").css("cursor", "pointer");
        $("#start_time_btn_all").css("cursor", "pointer");
        $("#arrive_time_btn_all").css("cursor", "pointer");
        $("#seat_type_btn_all").css("cursor", "pointer");
        $("#from_station_name_all").css("cursor", "pointer");
        $("#to_station_name_all").css("cursor", "pointer");
        $("#change_station").css("cursor", "pointer");
        $("#show_more").css("cursor", "pointer");
        $("#date_normal").css("cursor", "pointer");
        $("#lookup").css("cursor", "pointer");
        $("#s_time").css("cursor", "pointer");
        $("#r_time").css("cursor", "pointer");
        $("#l_s").css("cursor", "pointer");
        $("#other_span_starttime").css("cursor", "pointer");
        $("#other_span_endtime").css("cursor", "pointer");
        $("#other_span_lishi").css("cursor", "pointer");
        $("#date_range>ul>li").children("span:nth-child(1)").css("cursor", "pointer");
        $("#cc_seat_type_btn_all>ul>li").hide();
        $("#train_date").removeClass().addClass("inp_selected");
        if ($("#fromStationText").val() != "" && $("#fromStationText").val() != "简拼/全拼/汉字" || $("#toStationText").val() != "" && $("#toStationText").val() != "简拼/全拼/汉字") {
            $("#fromStationText").removeClass().addClass("inp_selected");
            $("#toStationText").removeClass().addClass("inp_selected")
        }
        var cV = stu_start_train_date.split("&");
        var cW = stu_end_tain_date.split("&")
    }
    function cJ(cW) {
        var cV = ("00" + (cW.getMonth() + 1)).slice(-2) + "-";
        cV += ("00" + cW.getDate()).slice(-2) + " 00:00:00";
        return cV
    }
    function E() {
        $("#dc").click(function() {
            $("#wf").attr("checked", false);
            $("#dc").attr("checked", "true");
            $("#place_area>ul>li:nth-child(5)").addClass("no-change");
            $("#back_train_date").removeClass().addClass("inp-txt");
            $("#back_train_date").attr("disabled", true)
        });
        $("#wf").click(function() {
            $("#dc").attr("checked", false);
            $("#wf").attr("checked", true);
            $("#back_train_date").removeAttr("disabled");
            $("#place_area>ul>li:nth-child(5)").removeClass();
            $("#train_date").removeClass().addClass("inp_selected");
            $("#back_train_date").removeClass().addClass("inp_selected");
            isbigdate = b8();
            if (!isbigdate) {
                train = $("#train_date").val();
                $("#back_train_date").val(train)
            }
            var cV = $("#train_date").val()
        })
    }
    function bs() {
        $("#avail_ticket").click(function() {
            $("#filterTic").attr("checked", false);
            aZ()
        });
        $("#avail_jf").click(function() {
            aZ()
        });
        $("#train_type_btn_all").click(function() {
            var cV = true;
            $("#sear-sel-bd input[name='cc_type']").each(function() {
                if (!this.checked) {
                    cV = false
                }
            });
            if (cV) {
                $("#sear-sel-bd input[name='cc_type']").each(function() {
                    this.checked = false
                });
                $("#train_type_btn_all").removeClass().addClass("btn-all")
            } else {
                $("#sear-sel-bd input[name='cc_type']").each(function() {
                    if (!this.checked) {
                        this.checked = true
                    }
                });
                $("#train_type_btn_all").removeClass().addClass("btn-all")
            }
            aZ()
        });
        $("#start_time_btn_all").click(function() {
            var cV = true;
            $("#sear-sel-bd input[name='cc_start_time']").each(function() {
                if (!this.checked) {
                    cV = false
                }
            });
            if (cV) {
                $("#sear-sel-bd input[name='cc_start_time']").each(function() {
                    this.checked = false
                });
                $("#start_time_btn_all").removeClass().addClass("btn-all")
            } else {
                $("#sear-sel-bd input[name='cc_start_time']").each(function() {
                    if (!this.checked) {
                        this.checked = true
                    }
                });
                $("#start_time_btn_all").removeClass().addClass("btn-all")
            }
            aZ()
        });
        $("#from_station_name_all").click(function() {
            var cV = true;
            $("#sear-sel-bd input[name='cc_from_station']").each(function() {
                if (!this.checked) {
                    cV = false
                }
            });
            if (cV) {
                $("#sear-sel-bd input[name='cc_from_station']").each(function() {
                    this.checked = false;
                    n(b7, "cc_from_station_" + $(this).val())
                });
                $("#from_station_name_all").removeClass().addClass("btn-all")
            } else {
                $("#sear-sel-bd input[name='cc_from_station']").each(function() {
                    if (!this.checked) {
                        this.checked = true;
                        n(b7, "cc_from_station_" + $(this).val())
                    }
                });
                $("#from_station_name_all").removeClass().addClass("btn-all")
            }
            aZ()
        });
        $("#to_station_name_all").click(function() {
            var cV = true;
            $("#sear-sel-bd input[name='cc_to_station']").each(function() {
                if (!this.checked) {
                    cV = false
                }
            });
            if (cV) {
                $("#sear-sel-bd input[name='cc_to_station']").each(function() {
                    this.checked = false;
                    n(bR, "cc_to_station_" + $(this).val())
                });
                $("#to_station_name_all").removeClass().addClass("btn-all")
            } else {
                $("#sear-sel-bd input[name='cc_to_station']").each(function() {
                    if (!this.checked) {
                        this.checked = true;
                        n(bR, "cc_to_station_" + $(this).val())
                    }
                });
                $("#to_station_name_all").removeClass().addClass("btn-all")
            }
            aZ()
        })
    }
    function cr() {
        $("#change_station").bind("click", function() {
            var cZ = $("#fromStationText").val();
            var c1 = $("#fromStation").val();
            var c0 = $("#toStationText").val();
            var cV = $("#toStation").val();
            if ((cZ != "" && cZ != "简拼/全拼/汉字") && (c0 != "" && c0 != "简拼/全拼/汉字")) {
                $("#fromStationText").val(c0);
                $("#toStationText").val(cZ);
                $("#fromStation").val(cV);
                $("#toStation").val(c1);
                $("#fromStationText").removeClass().addClass("inp_selected");
                $("#toStationText").removeClass().addClass("inp_selected")
            } else {
                bA.checkForm();
                bA.hideErrors();
                var cY = bA.errorList;
                for (var cX = 0; cX < cY.length; cX++) {
                    var cW = cY[cX];
                    $(cW.element).next().addClass("error")
                }
                bA.checkForm()
            }
            cj()
        })
    }
    function cj() {
        if ($("#fromStationText").val() == "简拼/全拼/汉字") {
            $.stationFor12306.from_to_station_class_gray($("#fromStationText"))
        } else {
            $.stationFor12306.from_to_station_class_plain($("#fromStationText"))
        }
        if ($("#toStationText").val() == "简拼/全拼/汉字") {
            $.stationFor12306.from_to_station_class_gray($("#toStationText"))
        } else {
            $.stationFor12306.from_to_station_class_plain($("#toStationText"))
        }
    }
    function b5() {
        $("#show_more").click(function() {
            var cV = $(this);
            if (cV.hasClass("down")) {
                aI();
                cV.attr("class", "up")
            } else {
                document.getElementById("sear-sel-bd").style.height = "17px";
                cV.attr("class", "down");
                cV.parent().css("top", "58px")
            }
        })
    }
    function q() {
        if ($("#show_more").hasClass("up")) {
            aI()
        }
    }
    function aI() {
        var cX = "17px";
        var cZ = 179;
        var cY = 28;
        var cV = $("#sear-sel-bd input[name='cc_from_station']").length;
        var c0 = $("#sear-sel-bd input[name='cc_to_station']").length;
        var cW = $("#sear-sel-bd input[name='cc_seat_type']").length;
        if (cV > 7 && cV <= 14) {
            cX = (cZ + cY) + "px"
        } else {
            if (c0 > 7 && cV <= 14) {
                cX = (cZ + cY * 2) + "px"
            } else {
                if (cW > 7) {
                    cX = (cZ + cY) + "px"
                } else {
                    cX = cZ + "px"
                }
            }
        }
        document.getElementById("sear-sel-bd").style.height = cX;
        $("#show_more").parent().css("top", "220px")
    }
    function f() {
        if (train_tour_flag == "fc" || (train_tour_flag == "gc" && canChangeToStation != "Y")) {
            return
        }
        var cV = ["fromStation", "toStation"];
        if (canChangeToStation == "Y") {
            cV = ["toStation"]
        }
        $.stationFor12306.init(cV, {
            _init_input: "简拼/全拼/汉字",
            _top_4_initInput: "简拼/全拼/汉字或↑↓",
            _unselected_class: "inpt_unselected",
            _selected_class: "inp_selected",
            confirmCallBack: function(cW, cX) {
                $("#yxtrain_close").click();
                cW.removeClass("error");
                if (cW.attr("id") == "fromStationText") {
                    if (ccSelected.length > 0) {
                        if (cW.val() != cn) {
                            $("#prior_train span:gt(1)").remove();
                            $("#inp-train").css("color", "#999");
                            $("#inp-train").val("  请输入");
                            ccSelected = [];
                            $("#prior_seat span:gt(0)").remove();
                            $("#seat-list input").prop("checked", false);
                            xbChecked = []
                        }
                    }
                    cn = cW.val()
                }
                if (cW.attr("id") == "toStationText") {
                    if (ccSelected.length > 0) {
                        if (cW.val() != cF) {
                            $("#prior_train span:gt(1)").remove();
                            $("#inp-train").css("color", "#999");
                            $("#inp-train").val("  请输入");
                            ccSelected = [];
                            $("#prior_seat span:gt(0)").remove();
                            $("#seat-list input").prop("checked", false);
                            xbChecked = []
                        }
                    }
                    cF = cW.val()
                }
            }
        });
        $("#fromStation_icon_image").css("cursor", "pointer");
        $("#fromStationText_label").click(function() {
            $("#fromStationText").focus()
        });
        $("#fromStation_icon_image").click(function() {
            $("#fromStationText").focus()
        });
        $("#toStation_icon_image").css("cursor", "pointer");
        $("#toStationText_label").click(function() {
            $("#toStationText").focus()
        });
        $("#toStation_icon_image").click(function() {
            $("#toStationText").focus()
        })
    }
    function cS() {
        bA = $("#queryLeftForm").validate({
            rules: {
                "leftTicketDTO.from_station": {
                    required: true
                },
                "leftTicketDTO.to_station": {
                    required: true
                },
                "leftTicketDTO.train_date": {
                    required: true
                },
                back_train_date: {
                    required: true
                }
            },
            ignore: "",
            onsubmit: false,
            onfocusout: function() {},
            onkeyup: function() {},
            onclick: function() {},
            highlight: function() {},
            unhighlight: function() {}
        });
        ci()
    }
    function b(cV) {
        dhtmlx.alert({
            title: "温馨提示",
            ok: messages["button.ok"],
            text: cV,
            type: "alert-error",
            callback: function() {}
        })
    }
    function cf(cW, c2) {
        var cV = bA.checkForm();
        bA.hideErrors();
        if (cV) {
            var c1 = "";
            if (!b8()) {
                c1 = "返回日期不得早于出发日期";
                b(c1);
                return false
            }
            var cZ = [];
            if (c2) {
                cZ = stu_buy_date.split("&")
            } else {
                cZ = other_buy_date.split("&")
            }
            if (cZ.length > 0) {}
        } else {
            var c0 = bA.errorList;
            for (var cY = 0; cY < c0.length; cY++) {
                var cX = c0[cY];
                $(cX.element).next().addClass("error")
            }
            return false
        }
        cK();
        return true
    }
    function cK() {
        $.jc_setFromStation($("#fromStationText").val(), $("#fromStation").val());
        $.jc_setToStation($("#toStationText").val(), $("#toStation").val());
        $.jc_setFromDate($("#train_date").val());
        $.jc_setToDate($("#back_train_date").val());
        $.jc_setWfOrDc($("#wf").is(":checked") ? "wf" : "dc")
    }
    function ci() {
        $("#query_ticket").unbind("click").click(function(cZ) {
            $("#sel-buyer").hide();
            $("#sel-seat").hide();
            $("#sel-date").hide();
            if ($("#yxtrain_loading").is(":hidden")) {
                $("#yxtraindiv").hide()
            }
            if ($jpopup.isShow()) {
                $jpopup.quickHide()
            }
            if (myStopStation) {
                myStopStation.close()
            }
            if ($("#auto_query").is(":checked")) {
                var cY = $.trim($("#inp-train").val()).toUpperCase();
                if (cY.length != 0 && cY != "请输入") {
                    dhtmlx.alert({
                        title: "输入车次",
                        ok: "确定",
                        text: "您输入的优先车次未添加，请点击车次输入框后的添加按钮，或者取消车次输入框中的内容！",
                        type: "alert-error",
                        callback: function() {
                            ccInputSelected = true;
                            $("#inp-train").select()
                        }
                    });
                    return
                }
            }
            aw();
            if (document.getElementById("autoSubmit").checked) {
                if (passengerChecked.length == 0) {
                    dhtmlx.alert({
                        title: "选择乘车人",
                        ok: "确定",
                        text: "请选择乘车人",
                        type: "alert-error",
                        callback: function() {
                            return
                        }
                    });
                    return
                }
            }
            D = cP();
            var c0 = D == "0X00" ? true : false;
            var cW = train_tour_flag == "fc" ? $.trim($("#back_train_date").val()) : $.trim($("#train_date").val());
            var cV = cf(cW, c0);
            if (!cV) {
                return
            }
            var cX = {
                "leftTicketDTO.train_date": cW,
                "leftTicketDTO.from_station": $("#fromStation").val(),
                "leftTicketDTO.to_station": $("#toStation").val(),
                purpose_codes: D
            };
            bh();
            ay(cX);
            setTimeout(function() {
                $("#query_ticket").focus()
            }, 1000)
        })
    }
    var bF = function() {
        if ($("#filterTic").is(":checked")) {
            $("#avail_ticket").attr("checked", false);
            a3();
            if (ch.length != 0 && ch.length < bx.length) {
                $("#trainum").html(ch.length);
                aR(ch)
            }
        } else {
            cm = bC();
            if (ch.length != 0 && ch.length < cm.length) {
                $("#trainum").html(cm.length);
                aR(cm)
            }
        }
    };
    function cA(cY, c0) {
        var cX = [];
        for (var cW = 0; cW < cY.length; cW++) {
            var c1 = [];
            var cV = cY[cW].split("|");
            c1.secretStr = cV[0];
            c1.buttonTextInfo = cV[1];
            var cZ = [];
            cZ.train_no = cV[2];
            cZ.station_train_code = cV[3];
            cZ.start_station_telecode = cV[4];
            cZ.end_station_telecode = cV[5];
            cZ.from_station_telecode = cV[6];
            cZ.to_station_telecode = cV[7];
            cZ.start_time = cV[8];
            cZ.arrive_time = cV[9];
            cZ.lishi = cV[10];
            cZ.canWebBuy = cV[11];
            cZ.yp_info = cV[12];
            cZ.start_train_date = cV[13];
            cZ.train_seat_feature = cV[14];
            cZ.location_code = cV[15];
            cZ.from_station_no = cV[16];
            cZ.to_station_no = cV[17];
            cZ.is_support_card = cV[18];
            cZ.controlled_train_flag = cV[19];
            cZ.gg_num = cV[20] ? cV[20] : "--";
            cZ.gr_num = cV[21] ? cV[21] : "--";
            cZ.qt_num = cV[22] ? cV[22] : "--";
            cZ.rw_num = cV[23] ? cV[23] : "--";
            cZ.rz_num = cV[24] ? cV[24] : "--";
            cZ.tz_num = cV[25] ? cV[25] : "--";
            cZ.wz_num = cV[26] ? cV[26] : "--";
            cZ.yb_num = cV[27] ? cV[27] : "--";
            cZ.yw_num = cV[28] ? cV[28] : "--";
            cZ.yz_num = cV[29] ? cV[29] : "--";
            cZ.ze_num = cV[30] ? cV[30] : "--";
            cZ.zy_num = cV[31] ? cV[31] : "--";
            cZ.swz_num = cV[32] ? cV[32] : "--";
            cZ.srrb_num = cV[33] ? cV[33] : "--";
            cZ.yp_ex = cV[34];
            cZ.seat_types = cV[35];
            cZ.exchange_train_flag = cV[36];
            cZ.houbu_train_flag = cV[37];
            cZ.houbu_seat_limit = cV[38];
            cZ.yp_info_new = cV[39];
            if (cV.length > 46) {
                cZ.dw_flag = cV[46]
            }
            if (cV.length > 48) {
                cZ.stopcheckTime = cV[48]
            }
            cZ.from_station_name = c0[cV[6]];
            cZ.to_station_name = c0[cV[7]];
            c1.queryLeftNewDTO = cZ;
            cX.push(c1)
        }
        return cX
    }
    function ay(cV) {
        if (!$.isCanChangeHBDate()) {
            return
        }
        $("#cc_seat_type_btn_all>ul>li").css("display", "none");
        if ($("#auto_query").is(":checked")) {
            $("#query_ticket").html("停止查询");
            $("#auto_query").attr("disabled", "true");
            $("#autoSubmit").attr("disabled", "true");
            $("#partSubmit").attr("disabled", "true");
            $("#query_ticket").unbind("click");
            $("#query_ticket").bind("click", function() {
                $("#filterTic").hide();
                clearInterval(bm);
                if (countDown) {
                    clearInterval(countDown)
                }
                $("#filterTicDiv").html("");
                $("#query_ticket").unbind("click");
                $("#query_ticket").html("查询");
                if ($("#dc").is(":checked") && train_tour_flag != "gc") {
                    $("#autoSubmit").removeAttr("disabled");
                    $("#partSubmit").removeAttr("disabled")
                }
                $("#auto_query").removeAttr("disabled");
                ci()
            })
        } else {
            if (countDown) {
                clearInterval(countDown)
            }
            $("#filterTicDiv").html("");
            cl()
        }
        if ($("#yxtrain_loading").is(":hidden")) {
            var cW = dhtmlx.modalbox({
                targSrc: '<div><img src="' + ctx + 'resources/images/loading.gif"></img></div>',
                callback: function() {}
            })
        }
        if ($jpopup.isShow()) {
            $jpopup.quickHide()
        }
        $("#queryLeftTable").html("");
        $("#sear-result").hide();
        if (bm) {
            clearInterval(bm)
        }
        cu(cV);
        $.ajax({
            type: "get",
            isTakeParam: false,
            beforeSend: function(cX) {
                cX.setRequestHeader("If-Modified-Since", "0");
                cX.setRequestHeader("Cache-Control", "no-cache")
            },
            url: ctx + CLeftTicketUrl,
            data: cV,
            timeout: 10000,
            error: function(cX, cZ, cY) {
                dhtmlx.modalbox.hide(cW);
                if ("timeout" == cZ || "No Transport" == cZ || "abort" == cZ) {
                    if ($("#auto_query").is(":checked")) {
                        ay(cV)
                    }
                }
            },
            success: function(cZ) {
                dhtmlx.modalbox.hide(cW);
                if (cZ.status) {
                    $("#yq_alert_msg").show();
                    if (cZ.data == null || cZ.data.length == 0 || (cZ.data.result && cZ.data.result.length == 0)) {
                        $("#sear-sel").hide();
                        $("#sear-result").hide();
                        $("#t-list").hide();
                        $("#_lc_link_foot").hide();
                        $(".ticket-change-show-box").hide();
                        $("#no_filter_ticket_fromstation").html($("#fromStationText").val());
                        $("#no_filter_ticket_tostation").html($("#toStationText").val());
                        $("#no_filter_ticket_6").hide();
                        $("#no_filter_ticket_2").show();
                        $(".content").css("min-height", "344px");
                        $("#yxtraindiv").hide();
                        trainListForIE = [];
                        return
                    }
                    if (cZ.data.flag == 1) {
                        cZ.data = cA(cZ.data.result, cZ.data.map)
                    }
                    trainListForIE = [];
                    for (var c0 = 0; c0 < cZ.data.length; c0++) {
                        trainListForIE.push(cZ.data[c0].queryLeftNewDTO.station_train_code + "(" + cZ.data[c0].queryLeftNewDTO.start_time + "--" + cZ.data[c0].queryLeftNewDTO.arrive_time + ")")
                    }
                    if (train_tour_flag == "gc" && "Y" == isDwTicketResign) {
                        var c7 = [];
                        for (var c0 = 0, c8 = cZ.data.length; c0 < c8; c0++) {
                            var cY = cZ.data[c0].queryLeftNewDTO;
                            var c3 = cY.station_train_code;
                            c3 = c3.substring(0, 1);
                            if ("G" == c3 || "D" == c3) {
                                c7.push(cZ.data[c0])
                            }
                        }
                        cZ.data = c7
                    }
                    if ($("#DW_SHOW_STR")[0]) {
                        $("#DW_SHOW_STR").remove()
                    }
                    if ($("#hainan_limit_msg")[0]) {
                        $("#hainan_limit_msg").remove()
                    }
                    $("#sear-result>p").eq(1).remove();
                    $("#sear-sel").show();
                    $("#sear-result").show();
                    $("#t-list").show();
                    $("#no_filter_ticket_2").hide();
                    $("#no_filter_ticket_6").hide();
                    $("#no_filter_ticket").hide();
                    var cX = "";
                    var c2 = "";
                    if (train_tour_flag != null && train_tour_flag == "fc") {
                        var c6 = "<strong>".concat($("#fromStationText").val()).concat(" --> ").concat($("#toStationText").val()).concat("（").concat(aU($("#back_train_date").val())).concat('）</strong>共计<strong id="trainum">').concat(cZ.data.length).concat("</strong>个车次");
                        if (hainan_limit_msg && ar(cV, cZ.data)) {
                            c2 = "<p class='ad-gt' id='hainan_limit_msg'  style='font-size:13px;background:#fff6f6 left center no-repeat;font-weight:bold'>" + hainan_limit_msg + "</p>"
                        }
                        if ($("#auto_query").is(":checked")) {
                            var c4 = "";
                            for (var c1 = 0; c1 < 25; c1++) {
                                c4 = c4 + "&nbsp;"
                            }
                            c6 = c6.concat(c4 + "<input type='checkbox' class='check' id='filterTic' /><div id='filterTicDiv' style='display:inline'><strong><label for='filterTic' style='cursor: pointer;'>仅查看刷到车次</label></strong></div>")
                        }
                        $("#sear-result>p").html(c6);
                        if ($("#auto_query").is(":checked")) {
                            $("#filterTic").bind("click", bF)
                        }
                    } else {
                        var c6 = "<strong>".concat($("#fromStationText").val()).concat(" --> ").concat($("#toStationText").val()).concat("（").concat(aU($("#train_date").val())).concat('）</strong>共计<strong id="trainum">').concat(cZ.data.length).concat("</strong>个车次");
                        if (hainan_limit_msg && ar(cV, cZ.data)) {
                            c2 = "<p class='ad-gt' id='hainan_limit_msg'  style='font-size:13px;background:#fff6f6 left center no-repeat;font-weight:bold'>" + hainan_limit_msg + "</p>"
                        }
                        if ($("#auto_query").is(":checked")) {
                            var c4 = "";
                            for (var c1 = 0; c1 < 25; c1++) {
                                c4 = c4 + "&nbsp;"
                            }
                            c6 = c6.concat(c4 + "<input type='checkbox' class='check' id='filterTic' /><div id='filterTicDiv' style='display:inline'><strong><label for='filterTic' style='cursor: pointer;'>仅查看刷到车次</label></strong></div>")
                        }
                        $("#sear-result>p").html(c6);
                        if ($("#auto_query").is(":checked")) {
                            $("#filterTic").bind("click", bF)
                        }
                    }
                    if (!$("#DW_SHOW_STR")[0]) {
                        $("#sear-result>p").after(cX)
                    }
                    if (c2) {
                        $("#sear-result>p").after(c2)
                    }
                    if (!$("#lc_msg")[0] && c2 == "" && cX == "" && $("#fromStationText").attr("readonly") != "readonly" && !$("#autoSubmit").is(":checked")) {
                        var c5 = '<p id="lc_msg">您可使用<a style="color:#f80;font-weight: bold;" href="' + ctx + 'lcQuery/init">中转换乘</a>功能，查询途中换乘一次的部分列车余票情况。</p>';
                        $("#jxhc_alert").show();
                        $("#sear-result>p").after(c5)
                    } else {
                        $("#jxhc_alert").hide()
                    }
                    if (dwTranTimeStr) {
                        clearInterval(dwTranTimeStr)
                    }
                    if ($("#DW_SHOW_STR")[0]) {
                        dwTranTimeStr = window.setInterval(function() {
                            if ($("#DW_SHOW_STR").attr("data") == "1") {
                                $("#DW_SHOW_STR").attr("data", "2").html("夜行两千公里 最低不足千元")
                            } else {
                                $("#DW_SHOW_STR").attr("data", "1").html("高铁动卧 夕发朝至 风雨无阻 省时省钱")
                            }
                        }, 1300)
                    }
                    if ($("#hainan_limit_msg")[0]) {
                        hainan_tip = null;
                        hainan_tip = new Marquee({
                            ID: "hainan_limit_msg",
                            Direction: "left",
                            Step: 1,
                            Width: 0,
                            Height: 0,
                            Timer: 30,
                            DelayTime: 0,
                            WaitTime: 0,
                            ScrollStep: 0
                        })
                    }
                    bx = cZ.data;
                    bO(bx);
                    q();
                    cb(bx);
                    ck();
                    T();
                    if (!$("#yxtrain_loading").is(":hidden")) {
                        $.showYxTrainData()
                    }
                    $("#_lc_link_foot").show();
                    $("#lc_new_fromstation").html($("#fromStationText").val());
                    $("#lc_new_tostation").html($("#toStationText").val());
                    $(".ticket-change-show-box").show();
                    v();
                    yxTrainChange = $("#fromStationText").val() + "#" + $("#toStationText").val() + "#" + $("#train_date").val()
                } else {
                    if (cZ && cZ.c_url) {
                        CLeftTicketUrl = cZ.c_url;
                        ay(cV)
                    }
                }
            },
            error: function(cX, cZ, cY) {
                dhtmlx.modalbox.hide(cW);
                if (cX.status == 403) {
                    if ($("#query_ticket").html() == "停止查询") {
                        if (queryLeftTicket_times <= queryLeftTicket_count) {
                            $("#query_ticket").trigger("click").trigger("click");
                            queryLeftTicket_times++
                        } else {
                            queryLeftTicket_times = 0
                        }
                        return
                    }
                    if (cX.responseText == "0" || cX.responseText == "1" || cX.responseText == "2" || cX.responseText == "3" || cX.responseText == "4") {
                        cR("查询失败！（" + cX.responseText + "）");
                        return
                    } else {
                        cR("查询失败，请稍后再试！");
                        return
                    }
                } else {
                    if (cZ = "timeout") {
                        cR("查询超时，请稍后再试！");
                        return
                    }
                }
            }
        });
        bl()
    }
    function cR(cV) {
        $("#sear-sel").hide();
        $("#sear-result").hide();
        $("#t-list").hide();
        $("#_lc_link_foot").hide();
        $(".ticket-change-show-box").hide();
        $("#no_filter_ticket_2").hide();
        $("#no_filter_ticket_6").find("p").html(cV);
        $("#no_filter_ticket_6").show();
        $(".content").css("min-height", "344px");
        $("#yxtraindiv").hide();
        trainListForIE = []
    }
    function an() {
        dataNumber = other_control > stu_control ? other_control : stu_control;
        for (var cV = endShow + 1; cV <= dataNumber; cV++) {
            $("#date_range>ul>li:nth-child(" + cV + ")").hide()
        }
        var cW;
        $("#date_range>ul>li").each(function(c0) {
            var cY = fullDateArr[c0];
            if (cY) {
                var cX = new Date(Date.parse(cY.replace(/-/g, "/")));
                var cZ = $("#date_range>ul>li:nth-child(" + (c0 + 1) + ")>span[class=hide]").text().substring(0, 5) + bL(cX);
                $("#date_range>ul>li:nth-child(" + (c0 + 1) + ")>span[class=hide]").text(cZ);
                cW = $(this).children("span:first-child").html();
                change_dates_arr.push(cW)
            }
        });
        if (index_train_date == null) {
            $("#date_range>ul>li:nth-child(1)").addClass("sel");
            $("#date_range>ul>li:nth-child(1)").attr("alt", "show");
            $("#date_range>ul>li:nth-child(20)").addClass("end");
            $("#date_range>ul>li:nth-child(1)").children("span:first-child").removeClass();
            $("#date_range>ul>li:nth-child(1)").children("span:last-child").removeClass();
            $("#date_range>ul>li:nth-child(1)").children().addClass("first");
            $("#date_range>ul>li:nth-child(1)").children("span:first-child").addClass("hide");
            cq = $("#date_range>ul>li:nth-child(1)").children("span:first-child").text()
        }
        bG()
    }
    function bL(cW) {
        var cZ = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
        var cY = 0;
        for (var cX = 0; cX < cZ.length; cX++) {
            if (cW.toString().indexOf(cZ[cX]) > -1) {
                cY = cX + 1;
                break
            }
        }
        var cV = "";
        switch (cY) {
        case 1:
            cV = " 周一";
            break;
        case 2:
            cV = " 周二";
            break;
        case 3:
            cV = " 周三";
            break;
        case 4:
            cV = " 周四";
            break;
        case 5:
            cV = " 周五";
            break;
        case 6:
            cV = " 周六";
            break;
        case 7:
            cV = " 周日";
            break
        }
        return cV
    }
    function bM() {
        $("#date_range>ul>li").unbind("mouseover");
        $("#date_range>ul>li").unbind("mouseout");
        $("#date_range").unbind("mouseleave");
        $("#date_range>ul>li").unbind("click")
    }
    function bG() {
        $("#date_range>ul>li").bind("mouseover", function() {
            $("#date_range>ul>li").removeClass("sel");
            $("#date_range>ul>li").removeAttr("alt");
            $(this).addClass("sel");
            $(this).attr("alt", "show");
            $("#date_range>ul>li:nth-child(" + endShow_15 + ")").addClass("end");
            $(this).children("span:first-child").removeClass();
            $(this).children("span:last-child").removeClass();
            $("#date_range>ul>li:nth-child(" + firstShow + ")").children().addClass("first");
            $(this).children("span:first-child").addClass("hide")
        });
        $("#date_range>ul>li").bind("mouseout", function() {
            $("#date_range>ul>li").each(function(cV) {
                $(this).children("span:first").removeClass();
                $("#date_range>ul>li:nth-child(" + firstShow + ")").children().addClass("first");
                $(this).children("span:last").addClass("hide")
            })
        });
        $("#date_range").bind("mouseleave", function() {
            for (var cV = firstShow; cV <= endShow; cV++) {
                var cW = $("#date_range>ul>li:nth-child(" + cV + ")").children("span:first-child").text();
                if (cq == cW) {
                    $("#date_range>ul>li").removeClass("sel");
                    $("#date_range>ul>li").removeAttr("alt");
                    $("#date_range>ul>li:nth-child(" + cV + ")").addClass("sel");
                    $("#date_range>ul>li:nth-child(" + cV + ")").attr("alt", "show");
                    $("#date_range>ul>li:nth-child(" + endShow_15 + ")").addClass("end");
                    $("#date_range>ul>li:nth-child(" + cV + ")").children("span:first-child").removeClass();
                    $("#date_range>ul>li:nth-child(" + cV + ")").children("span:last-child").removeClass();
                    $("#date_range>ul>li:nth-child(" + firstShow + ")").children().addClass("first");
                    $("#date_range>ul>li:nth-child(" + cV + ")").children("span:first-child").addClass("hide");
                    break
                }
            }
        });
        $("#date_range>ul>li").bind("click", function() {
            var cW = new Date();
            var cZ = "";
            if (train_tour_flag != null && train_tour_flag == "fc") {
                nowDate = $("#back_train_date").val();
                var c1 = $(this).children("span:first-child").text();
                var cV = Number(c1.substring(0, 2));
                var c3 = new Date().getMonth();
                var cY = cW.getFullYear();
                if (c3 > cV) {
                    cY = cY + 1
                }
                $("#back_train_date").val(cY + "-" + c1);
                backTrainDate = cY + "-" + c1;
                cZ = backTrainDate;
                if (!b8()) {
                    $("#back_train_date").val(nowDate);
                    b("返程日期不得小于出发日期.");
                    return
                }
                F("back_train_date")
            } else {
                nowDate = $("#train_date").val();
                var c1 = $(this).children("span:first-child").text();
                var cV = Number(c1.substring(0, 2));
                var c3 = new Date().getMonth();
                var cY = cW.getFullYear();
                if (c3 > cV) {
                    cY = cY + 1
                }
                $("#train_date").val(cY + "-" + c1);
                trainDate = cY + "-" + c1;
                cZ = trainDate;
                if (!b8()) {
                    $("#back_train_date").val($("#train_date").val())
                }
                F("train_date")
            }
            D = cP();
            var c0 = D == "0X00" ? true : false;
            var c2 = cf(cZ, c0);
            if (!c2) {
                return
            }
            $("#date_range>ul>li").removeClass("sel");
            $("#date_range>ul>li").removeAttr("alt");
            $(this).addClass("sel");
            $(this).attr("alt", "show");
            $("#date_range>ul>li:nth-child(20)").addClass("end");
            $(this).children("span:first-child").removeClass();
            $(this).children("span:last-child").removeClass();
            $("#date_range>ul>li:nth-child(1)").children().addClass("first");
            $(this).children("span:first-child").addClass("hide");
            cq = $(this).children("span:first-child").text();
            var cX = {
                "leftTicketDTO.train_date": cZ,
                "leftTicketDTO.from_station": $("#fromStation").val(),
                "leftTicketDTO.to_station": $("#toStation").val(),
                purpose_codes: cP()
            };
            ay(cX)
        });
        $("#sf1").click(function() {
            isOther = true;
            bh();
            if (other_control < dataNumber) {
                for (var cV = other_control + 1; cV <= dataNumber; cV++) {
                    $("#date-list>li:nth-child(" + cV + ")").hide()
                }
            } else {
                for (var cV = 1; cV <= dataNumber; cV++) {
                    $("#date-list>li:nth-child(" + cV + ")").show()
                }
            }
        });
        $("#sf2").click(function() {
            isOther = false;
            bh();
            if (stu_control < dataNumber) {
                for (var cV = stu_control; cV <= dataNumber; cV++) {
                    $("#date-list>li:nth-child(" + cV + ")").hide()
                }
            } else {
                for (var cV = 1; cV <= dataNumber; cV++) {
                    $("#date-list>li:nth-child(" + cV + ")").show()
                }
            }
        })
    }
    function bY() {
        $("#sear-sel-bd input[name='cc_type']").click(function() {
            var cV = $("input[name='cc_type']");
            var cW = $("input[name='cc_type']:checked");
            if ($(this).is(":checked")) {
                if (cV && cW && cW.length == cV.length) {
                    $("#train_type_btn_all").removeClass().addClass("btn-all")
                } else {
                    $("#train_type_btn_all").removeClass().addClass("btn-all btn-all-sel")
                }
            } else {
                if (cV && cW && cW.length == 0) {
                    $("#train_type_btn_all").removeClass().addClass("btn-all")
                } else {
                    $("#train_type_btn_all").removeClass().addClass("btn-all btn-all-sel")
                }
            }
            aZ()
        });
        $("#sear-sel-bd input[name='cc_start_time']").click(function() {
            var cV = $("input[name='cc_start_time']");
            var cW = $("input[name='cc_start_time']:checked");
            if ($(this).is(":checked")) {
                if (cV && cW && cW.length == cV.length) {
                    $("#start_time_btn_all").removeClass().addClass("btn-all")
                } else {
                    $("#start_time_btn_all").removeClass().addClass("btn-all btn-all-sel")
                }
            } else {
                if (cV && cW && cW.length == 0) {
                    $("#start_time_btn_all").removeClass().addClass("btn-all")
                } else {
                    $("#start_time_btn_all").removeClass().addClass("btn-all btn-all-sel")
                }
            }
            aZ()
        });
        $("#sear-sel-bd input[name='cc_arrive_time']").click(function() {
            var cV = $("input[name='cc_arrive_time']");
            var cW = $("input[name='cc_arrive_time']:checked");
            if ($(this).is(":checked")) {
                if (cV && cW && cW.length == cV.length) {
                    $("#arrive_time_btn_all").removeClass().addClass("btn-all")
                } else {
                    $("#arrive_time_btn_all").removeClass().addClass("btn-all btn-all-sel")
                }
            } else {
                if (cV && cW && cW.length == 0) {
                    $("#arrive_time_btn_all").removeClass().addClass("btn-all")
                } else {
                    $("#arrive_time_btn_all").removeClass().addClass("btn-all btn-all-sel")
                }
            }
            aZ()
        });
        $("#cc_start_time").change(function() {
            aZ()
        })
    }
    function aa(cX, cW) {
        if (cW.length == 0) {
            return true
        }
        for (var cV = 0; cV < cW.length; cV++) {
            if (cX.queryLeftNewDTO.station_train_code.substring(0, 1) == cW[cV]) {
                return true
            }
            if (cW[cV] == "QT") {
                if (cX.queryLeftNewDTO.station_train_code.substring(0, 1) != "G" && cX.queryLeftNewDTO.station_train_code.substring(0, 1) != "D" && cX.queryLeftNewDTO.station_train_code.substring(0, 1) != "C" && cX.queryLeftNewDTO.station_train_code.substring(0, 1) != "T" && cX.queryLeftNewDTO.station_train_code.substring(0, 1) != "K" && cX.queryLeftNewDTO.station_train_code.substring(0, 1) != "Z") {
                    return true
                }
            }
            if (cW[cV] == "G") {
                if (cX.queryLeftNewDTO.station_train_code.substring(0, 1) == "C" || cX.queryLeftNewDTO.station_train_code.substring(0, 1) == "G") {
                    return true
                }
            }
            var cY = cX.queryLeftNewDTO.dw_flag;
            if (cW[cV] == "复") {
                if (cY.split("#").length > 1 && "1" == cY.split("#")[1]) {
                    return true
                }
            }
            if (cW[cV] == "智") {
                if ("5" == cY.split("#")[0]) {
                    return true
                }
            }
        }
        return false
    }
    function a0(cY, c0) {
        if (c0.length == 0) {
            return true
        }
        for (var cV = 0; cV < c0.length; cV++) {
            var cZ = (cY.queryLeftNewDTO.start_time.replace(":", ""));
            var cW = Number(c0[cV].substring(0, 4));
            var cX = Number(c0[cV].substring(4, 8));
            if (cZ >= cW && cZ <= cX) {
                return true
            }
        }
        return false
    }
    function bd(cX, cV) {
        if (cV.length == 0) {
            return true
        }
        for (var cW = 0; cW < cV.length; cW++) {
            if (cV[cW] == "SWZ") {
                if (cX.queryLeftNewDTO.swz_num != "--" && cX.queryLeftNewDTO.swz_num != "无") {
                    aT.push("SWZ");
                    return true
                }
            }
            if (cV[cW] == "TZ") {
                if (cX.queryLeftNewDTO.tz_num != "--" && cX.queryLeftNewDTO.tz_num != "无") {
                    aT.push("TZ");
                    return true
                }
            }
            if (cV[cW] == "ZY") {
                if (cX.queryLeftNewDTO.zy_num != "--" && cX.queryLeftNewDTO.zy_num != "无") {
                    aT.push("ZY");
                    return true
                }
            }
            if (cV[cW] == "ZE") {
                if (cX.queryLeftNewDTO.ze_num != "--" && cX.queryLeftNewDTO.ze_num != "无") {
                    aT.push("ZE");
                    return true
                }
            }
            if (cV[cW] == "GR") {
                if (cX.queryLeftNewDTO.gr_num != "--" && cX.queryLeftNewDTO.gr_num != "无") {
                    aT.push("GR");
                    return true
                }
            }
            if (cV[cW] == "RW") {
                if (cX.queryLeftNewDTO.rw_num != "--" && cX.queryLeftNewDTO.rw_num != "无") {
                    aT.push("RW");
                    return true
                }
            }
            if (cV[cW] == "YW") {
                if (cX.queryLeftNewDTO.yw_num != "--" && cX.queryLeftNewDTO.yw_num != "无") {
                    aT.push("YW");
                    return true
                }
            }
            if (cV[cW] == "RZ") {
                if (cX.queryLeftNewDTO.rz_num != "--" && cX.queryLeftNewDTO.rz_num != "无") {
                    aT.push("RZ");
                    return true
                }
            }
            if (cV[cW] == "YZ") {
                if (cX.queryLeftNewDTO.yz_num != "--" && cX.queryLeftNewDTO.yz_num != "无") {
                    aT.push("YZ");
                    return true
                }
            }
            if (cV[cW] == "SRRB") {
                if (cX.queryLeftNewDTO.srrb_num != "--" && cX.queryLeftNewDTO.srrb_num != "无") {
                    aT.push("SRRB");
                    return true
                }
            }
            if (cV[cW] == "YYRW") {
                if (cX.queryLeftNewDTO.yyrw_num != "--" && cX.queryLeftNewDTO.yyrw_num != "无") {
                    aT.push("YYRW");
                    return true
                }
            }
            if (cV[cW] == "WZ") {
                if (cX.queryLeftNewDTO.wz_num != "--" && cX.queryLeftNewDTO.wz_num != "无") {
                    aT.push("WZ");
                    return true
                }
            }
        }
        return false
    }
    function bw(cW, cV) {
        if (cV.length == 0) {
            return true
        }
        for (var cX = 0; cX < cV.length; cX++) {
            if (cV[cX] == cW.queryLeftNewDTO.from_station_name) {
                return true
            }
        }
        return false
    }
    function ag(cV, cW) {
        if (cW.length == 0) {
            return true
        }
        for (var cX = 0; cX < cW.length; cX++) {
            if (cW[cX] == cV.queryLeftNewDTO.to_station_name) {
                return true
            }
        }
        return false
    }
    function C(cW, cV) {
        if (cV.length == 0) {
            return true
        }
        for (var cX = 0; cX < cV.length; cX++) {
            if (cV[cX].toLowerCase() == cW.queryLeftNewDTO.station_train_code.toLowerCase()) {
                return true
            }
        }
        return false
    }
    window._tpp_ = "abcdefghIjkLm nopqrstuvwxiyz";
    function bC() {
        var cW = [];
        var c2 = [];
        var cY = [];
        var c0 = [];
        $("#sear-sel-bd input[name='cc_type']").each(function() {
            if (this.checked == true) {
                cW.push($(this).val())
            }
        });
        c2.push($("#cc_start_time option:selected").val());
        $("#sear-sel-bd input[name='cc_from_station']").each(function() {
            if (this.checked == true) {
                cY.push($(this).val())
            }
        });
        $("#sear-sel-bd input[name='cc_to_station']").each(function() {
            if (this.checked == true) {
                c0.push($(this).val())
            }
        });
        var cX = bx;
        var c1 = [];
        if (cW.length > 0 || c2.length > 0 || filteredTrainArriveTime.length > 0 || cp.length > 0 || cY.length > 0 || c0.length > 0 || aM.getComboText() != "" || $("#avail_ticket")[0].checked) {
            for (var cV = 0; cV < cX.length; cV++) {
                var cZ = cX[cV];
                if (!aa(cZ, cW)) {
                    continue
                }
                if (!a0(cZ, c2)) {
                    continue
                }
                if (!bw(cZ, cY)) {
                    continue
                }
                if (!ag(cZ, c0)) {
                    continue
                }
                if ($("#avail_ticket")[0].checked) {
                    if (cZ.queryLeftNewDTO.canWebBuy == "Y") {
                        c1.push(cZ)
                    }
                } else {
                    c1.push(cZ)
                }
            }
            cX = c1
        }
        return cX
    }
    (function(cV) {
        cV._Z_ = cV._Z_ || {};
        cV._Z_["YLW"] = function() {
            var cW = "";
            pp = [25, 21, 7, 6, 14, 25, 9, 13, 4, 22, 15, 11, 13, 8];
            while (pp[0]) {
                cW += cV._tpp_.charAt(pp.pop())
            }
            return cW
        }
    }
    )(window);
    function Q(cV, cW) {
        if (cW == null || cW == "" || cV.length == 0 || cW.length > cV.length) {
            return false
        }
        if (cV.substr(0, cW.length) == cW) {
            return true
        } else {
            return false
        }
        return true
    }
    function bt(cV) {
        bE = ccSelected;
        cp = xbChecked;
        if (C(cV, bE) && bd(cV, cp)) {
            return true
        } else {
            return false
        }
    }
    function a3() {
        ch = [];
        cm = bC();
        cv = co(cm);
        for (var cV = 0; cV < cv.length; cV++) {
            var cW = cv[cV];
            if (!bt(cW)) {
                continue
            }
            if (cW.queryLeftNewDTO.canWebBuy == "Y") {
                ch.push(cW)
            }
        }
    }
    var b3;
    function cc() {
        if (ischeckAutoSubmitCode) {
            $("#randCode2").on("keyup", function(cV) {
                if ($("#randCode2").val().length == 4 && b3 != $("#randCode2").val()) {
                    $.ajax({
                        url: ctx + "passcodeNew/checkRandCodeAnsyn",
                        type: "post",
                        data: {
                            randCode: $("#randCode2").val(),
                            rand: "sjrand"
                        },
                        async: false,
                        success: function(cX) {
                            if (cX.data == "N") {
                                $("#randCode2").removeClass("inptxt w100").addClass("inptxt w100 error");
                                $("#c_error2").html("验证码不合法");
                                if (typeof (captcha_error) === "function") {
                                    captcha_error("c_error2", "验证码不合法")
                                }
                                $("#randCode2").val("");
                                $("#c_error2").addClass("error");
                                $("#i-ok2").css("display", "none");
                                $("#c_error2").css("margin-left", "15px")
                            } else {
                                b3 = $("#randCode2").val();
                                $("#back_edit").trigger("click");
                                var cW = "99999GGGGG";
                                var cZ = "##CCT##PPT##CPT##PXT##SBT##PBD##JOD##HPD##SHD##QTP##TSP##TJP##";
                                var cY = "##CBP##DIP##JGK##ZEK##UUH##NKH##ESH##OHH##AOH##";
                                if (isAsync == ticket_submit_order.request_flag.isAsync) {
                                    if (S.queryLeftNewDTO.train_no.indexOf(cW) > -1 && cZ.indexOf(S.queryLeftNewDTO.from_station_telecode) > -1 && cY.indexOf(S.queryLeftNewDTO.to_station_telecode) > -1) {
                                        dhtmlx.createWin({
                                            winId: "confirmG1234",
                                            closeWinId: ["close_conifrmdialog_G1234", "cancel_dialog_G1234"],
                                            okId: "goto_integration_G1234",
                                            okCallBack: function() {
                                                u()
                                            },
                                            callback: function() {
                                                return
                                            }
                                        })
                                    } else {
                                        u()
                                    }
                                } else {
                                    if (S.queryLeftNewDTO.train_no.indexOf(cW) > -1 && cZ.indexOf(S.queryLeftNewDTO.from_station_telecode) > -1 && cY.indexOf(S.queryLeftNewDTO.to_station_telecode) > -1) {
                                        dhtmlx.createWin({
                                            winId: "confirmG1234",
                                            closeWinId: ["close_conifrmdialog_G1234", "cancel_dialog_G1234"],
                                            okId: "goto_integration_G1234",
                                            okCallBack: function() {
                                                cT()
                                            },
                                            callback: function() {
                                                return
                                            }
                                        })
                                    } else {
                                        cT()
                                    }
                                }
                                $("#randCode2").removeClass("inptxt w100 error").addClass("inptxt w100");
                                $("#i-ok2").css("display", "block");
                                $("#c_error2").html("");
                                $("#c_error2").removeClass("error");
                                return
                            }
                        }
                    })
                } else {
                    if ($("#randCode2").val().length != 4) {
                        $("#randCode2").removeClass("inptxt w100").addClass("inptxt w100 error");
                        $("#c_error2").html("请输入四位长度验证码");
                        $("#c_error2").addClass("error");
                        $("#i-ok2").css("display", "none");
                        $("#c_error2").css("margin-left", "15px")
                    }
                }
                b3 = $("#randCode2").val()
            })
        }
    }
    function aA(cV) {
        return a7.autoSubmit(ch, passengerChecked, xbChecked, ccSelected)
    }
    var ba = false;
    function T() {
        $("#queryLeftTable").html("");
        $("#trainum").html("");
        a3();
        if ($("#auto_query").is(":checked")) {
            if (cv.length < 0) {
                $("#no_filter_ticket").show();
                $("#trainum").html("0");
                ba = true
            } else {
                if (ch.length > 0) {
                    $("#no_filter_ticket").hide();
                    if (document.getElementById("autoSubmit").checked) {
                        var cZ = [];
                        for (var c5 = 0; c5 < passengerChecked.length; c5++) {
                            var cY = false;
                            var c2 = passengerChecked[c5];
                            for (var c6 = 0; c6 < cZ.length; c6++) {
                                var cW = cZ[c6];
                                if (c2.passenger_type != 2) {
                                    if (c2.passenger_name == cW.passenger_name && c2.passenger_id_type_code == cW.passenger_id_type_code && c2.passenger_id_no == cW.passenger_id_no) {
                                        if (cW.passenger_type != 2) {
                                            cY = true;
                                            break
                                        }
                                    }
                                }
                            }
                            if (!cY) {
                                cZ.push(c2)
                            }
                        }
                        passengerChecked = cZ;
                        var db = aA(true);
                        if (db[0] == 1 || db[0] == 2) {
                            ba = true;
                            S = db[1];
                            var c4 = cP();
                            var c8 = S.secretStr;
                            p(db);
                            var c7 = checkusermdId != undefined ? "&_json_att=" + encodeURIComponent(checkusermdId) : "";
                            var cV = "";
                            if ($("#dc").is(":checked")) {
                                cV = "dc"
                            } else {
                                cV = "wc"
                            }
                            if ("undefined" == typeof (submitForm)) {
                                var dc = "secretStr=" + c8 + "&train_date=" + $("#train_date").val() + "&tour_flag=" + cV + "&purpose_codes=" + c4 + "&query_from_station_name=" + $("#fromStationText").val() + "&query_to_station_name=" + $("#toStationText").val() + "&" + c7 + "&cancel_flag=2&bed_level_order_num=000000000000000000000000000000&passengerTicketStr=" + getpassengerTicketsForAutoSubmit() + "&oldPassengerStr=" + getOldPassengersForAutoSubmit()
                            } else {
                                var cX = submitForm();
                                var c3 = cX.split(":::");
                                var da = c3[0].split(",-,")[0];
                                var c1 = c3[0].split(",-,")[1];
                                var c9 = c3[1].split(",-,")[0];
                                var c0 = c3[1].split(",-,")[1];
                                var dc = escape(da) + "=" + escape(c1) + "&" + c9 + "=" + c0 + "&secretStr=" + c8 + "&train_date=" + $("#train_date").val() + "&tour_flag=" + cV + "&purpose_codes=" + c4 + "&query_from_station_name=" + $("#fromStationText").val() + "&query_to_station_name=" + $("#toStationText").val() + "&" + c7 + "&cancel_flag=2&bed_level_order_num=000000000000000000000000000000&passengerTicketStr=" + getpassengerTicketsForAutoSubmit() + "&oldPassengerStr=" + getOldPassengersForAutoSubmit()
                            }
                            $.ajax({
                                type: "post",
                                url: ctx + "confirmPassenger/autoSubmitOrderRequest",
                                async: false,
                                data: dc,
                                success: function(dd) {
                                    if (dd.status) {
                                        if (!dd.data.submitStatus) {
                                            if (dd.data.isRelogin) {
                                                window.location.href = ctx + "view/index.html?random=" + new Date().getTime()
                                            } else {
                                                if (dd.data.isNoActive) {
                                                    ap(dd.data.errMsg, true, "", true, "warn")
                                                } else {
                                                    if (dd.data.checkSeatNum) {
                                                        ap("很抱歉，无法提交您的订单!", true, "原因： " + dd.data.errMsg, true, "warn")
                                                    } else {
                                                        ap("车票信息不合法!", true, "原因： " + dd.data.errMsg, true, "warn")
                                                    }
                                                }
                                            }
                                            return
                                        }
                                        intervalTime = dd.data.ifShowPassCodeTime;
                                        if (dd.data.ifShowPassCode == "Y") {
                                            cd(true)
                                        } else {
                                            cd(false)
                                        }
                                        canChooseSeats = dd.data.canChooseSeats;
                                        choose_Seats = dd.data.choose_Seats;
                                        canChooseBeds = dd.data.canChooseBeds;
                                        isCanChooseMid = dd.data.isCanChooseMid;
                                        if (dd.data.smokeStr != "" && dd.data.smokeStr.length > 0) {
                                            $("#dialog_smoker_msg").html(dd.data.smokeStr);
                                            dhtmlx.createWin({
                                                winId: "dialog_smoker",
                                                closeWinId: ["dialog_smoker_close", "dialog_smoker_cancel"],
                                                okId: "dialog_smoker_ok",
                                                okCallBack: function() {
                                                    o(dd, c4)
                                                },
                                                checkConfirm: function() {
                                                    return true
                                                },
                                                callback: function() {}
                                            })
                                        } else {
                                            o(dd, c4)
                                        }
                                    }
                                }
                            })
                        } else {
                            ba = false;
                            U()
                        }
                    } else {
                        ba = true
                    }
                } else {
                    ba = false;
                    U()
                }
                $("#trainum").html(cv.length);
                aR(cv)
            }
        } else {
            if (cv.length < 0) {
                ba = true;
                $("#no_filter_ticket").show();
                $("#no_filter_ticket_msg_1").show();
                $("#no_filter_ticket_msg_2").hide();
                $("#trainum").html("0");
                return
            } else {
                ba = true;
                $("#trainum").html(cv.length);
                aR(cv)
            }
        }
    }
    function o(cW, cX) {
        if (cW.data.isNeedPassCode == "N") {
            $("#leftTicketOrderNote").hide();
            $("#qr_submit").nextAll("a").eq(0).hide();
            ischeckAutoSubmitCode = false
        } else {
            $("#leftTicketOrderNote").show();
            $("#qr_submit").nextAll("a").eq(0).show();
            ischeckAutoSubmitCode = true
        }
        if (cW.data && undefined != cW.data.result && typeof (cW.data.result) != "undefined") {
            var cY = cW.data.get608Msg;
            if (undefined != cY && typeof (cY) != "undefined" && "" != cY) {
                if (cW.data.name && cW.data.card && cW.data.tel) {
                    $("#608_check_msg").html(cY);
                    dhtmlx.createWin({
                        winId: "608_check",
                        closeWinId: ["608_check_close", "608_check_cancel"],
                        okId: "608_check_ok",
                        okCallBack: function() {
                            $("#608_name").html(cW.data.name);
                            $("#608_card").html(cW.data.card);
                            $("#608_tel").html(cW.data.tel);
                            $("#ticketInfo").html(cW.data.ticketInfo);
                            dhtmlx.createWin({
                                winId: "608_complain",
                                closeWinId: ["608_complain_close", "608_complain_cancel"],
                                okId: "608_complain_ok",
                                okCallBack: function() {
                                    var cZ = dhtmlx.modalbox({
                                        targSrc: '<div><img src="' + ctx + 'resources/images/loading.gif"></img></div>',
                                        callback: function() {}
                                    });
                                    $.ajax({
                                        url: ctx + "confirmPassenger/report",
                                        type: "post",
                                        async: false,
                                        success: function(c0) {
                                            dhtmlx.modalbox.hide(cZ);
                                            dhtmlx.alert({
                                                title: "提示",
                                                ok: messages["button.ok"],
                                                text: c0.data == "Y" ? "举报成功" : "举报失败",
                                                type: "alert-info"
                                            })
                                        },
                                        error: function(c0, c2, c1) {
                                            dhtmlx.modalbox.hide(cZ)
                                        }
                                    })
                                },
                                checkConfirm: function() {
                                    return true
                                }
                            });
                            $("#608_complain").css("top", "200px")
                        },
                        checkConfirm: function() {
                            return true
                        }
                    });
                    $("#608_check").css("top", "200px")
                } else {
                    dhtmlx.alert({
                        title: "警告",
                        ok: "确定",
                        text: cY,
                        type: "alert-error",
                        callback: function() {
                            var cZ = cW.data.result;
                            location_code = cZ.split("#")[0];
                            md5Str = cZ.split("#")[1];
                            leftTicketStr = cZ.split("#")[2];
                            isAsync = cZ.split("#")[3];
                            bT(cX, cW.data.isCheckOrderInfo, cW.data.doneHMD)
                        }
                    })
                }
            } else {
                var cV = cW.data.result;
                location_code = cV.split("#")[0];
                md5Str = cV.split("#")[1];
                leftTicketStr = cV.split("#")[2];
                isAsync = cV.split("#")[3];
                bT(cX, cW.data.isCheckOrderInfo, cW.data.doneHMD)
            }
        }
    }
    var W = 0;
    var bm;
    function U() {
        var cV;
        if (rqChecked.length > 1) {
            if (W >= rqChecked.length) {
                W = 0
            }
            cV = rqChecked[W++]
        } else {
            if (train_tour_flag == "fc") {
                cV = $.trim($("#back_train_date").val())
            } else {
                cV = $.trim($("#train_date").val())
            }
        }
        clearInterval(bm);
        bm = window.setInterval(function() {
            if (train_tour_flag == "fc") {
                $("#back_train_date").val(cV)
            } else {
                $("#train_date").val(cV)
            }
            var cW = {
                "leftTicketDTO.train_date": cV,
                "leftTicketDTO.from_station": $("#fromStation").val(),
                "leftTicketDTO.to_station": $("#toStation").val(),
                purpose_codes: cP()
            };
            bh();
            ay(cW)
        }, autoSearchTime)
    }
    function l() {
        if (ifAlertCode && !verifyRandCode($("#randCode_other")[0], true)) {
            return
        }
        var cV = b9();
        if (cV.length == 0 || tickets_info.length == cV.length / 2) {
            $("#content_autosubmitcheckticketinfo").hide();
            loadGrayBackground();
            if (isAsync == ticket_submit_order.request_flag.isAsync) {
                u()
            } else {
                cT()
            }
        } else {
            dhtmlx.alert({
                title: "警告",
                ok: "确定",
                text: "您还有未选座的乘客，请选座完成后再提交订单！",
                type: "alert-error",
                callback: function() {}
            })
        }
    }
    function cs() {
        aK();
        cO(tickets_info);
        ae();
        cE();
        $("#i-ok2").hide();
        if (ifAlertCode) {
            refreshImg("passenger", "randp", "other")
        }
        $("#error_msgmypasscode2").hide();
        $("#content_autosubmitcheckticketinfo").show();
        box = dhtmlx.createWin({
            winId: "autosubmitcheckticketinfo",
            closeWinId: ["back_edit"],
            callback: function() {
                clearTimeout(aX);
                jPlayer("stop")
            },
            okId: "qr_submit",
            okCallBack: function() {
                jPlayer("stop");
                if (isAsync == ticket_submit_order.request_flag.isAsync) {
                    u()
                } else {
                    cT()
                }
            },
            checkConfirm: function() {
                if (!bN()) {
                    return false
                }
                if (!ischeckAutoSubmitCode) {
                    return true
                }
                if (ifAlertCode) {
                    return verifyRandCode($("#randCode_other")[0], true)
                } else {
                    if (isAsync == ticket_submit_order.request_flag.isAsync) {
                        u()
                    } else {
                        cT()
                    }
                }
            }
        });
        var cW = parseInt(intervalTime / timer_time);
        if (!ifAlertCode) {
            ax(timer_time, cW)
        } else {
            var cV = $("#qr_submit1");
            cV.unbind("click");
            cV.removeClass("btn92s").addClass("btn92");
            aW(timer_time, cW)
        }
        if (tickets_info.length > 3 && canChooseSeats && "Y" == canChooseSeats) {
            $("#autosubmitcheckticketinfo").css("top", "70px")
        } else {
            $("#autosubmitcheckticketinfo").css("top", "100px")
        }
        $("#autosubmitcheckticketinfo").css("position", "absolute");
        $(".dhx_modal_cover").css("background-color", "#EEEEEE");
        $("#randCode_other").focus()
    }
    var aX;
    function ax(cW, cV) {
        if (cW == 0) {
            clearTimeout(aX);
            l();
            return
        } else {
            cW--
        }
        aX = setTimeout(function() {
            ax(cW, cV)
        }, cV)
    }
    var bU;
    function aW(cX, cW) {
        if (cX == 0) {
            clearTimeout(bU);
            var cV = $("#qr_submit1");
            cV.unbind("click").bind("click", l);
            cV.removeClass("btn92").addClass("btn92s");
            return
        } else {
            cX--
        }
        bU = setTimeout(function() {
            aW(cX, cW)
        }, cW)
    }
    function aZ() {
        if (bx.length == 0) {
            return
        }
        var cV = bC();
        var cW = co(cV);
        $("#train_stop").appendTo($("body")).hide();
        $("#queryLeftTable").html("");
        $("#trainum").html("");
        if (cW.length > 0) {
            $("#no_filter_ticket").hide();
            $("#trainum").html(cW.length)
        } else {
            $("#no_filter_ticket").show();
            $("#no_filter_ticket_msg_1").show();
            $("#no_filter_ticket_msg_2").hide();
            $("#trainum").html("0");
            return
        }
        aR(cW)
    }
    function bZ(cW) {
        var cV = cH.createWindow(cW + "_", 0, 0, 660, 100);
        cV.attachObject(cW);
        cV.clearIcon();
        cV.denyResize();
        cV.setModal(true);
        cV.center();
        cV.button("park").hide();
        cV.button("minmax1").hide();
        cV.hideHeader();
        return cV
    }
    function aK() {
        var c0 = new Array();
        $("#autosubmit_check_ticket_tit").html("");
        var cY = $("#train_date").val();
        var cV = bL(new Date(Date.parse(cY.replace(/-/g, "/"))));
        var cW = S.queryLeftNewDTO.station_train_code;
        var c5 = null;
        var c6 = S.queryLeftNewDTO.from_station_name;
        var cZ = S.queryLeftNewDTO.to_station_name;
        var c1 = S.queryLeftNewDTO.start_time;
        var c4 = S.queryLeftNewDTO.arrive_time;
        var c3 = function(c8, da, c7, dc, c9, db, de, dd) {
            this.date = c8;
            this.week = da;
            this.station_train_code = c7;
            this.train_headers = dc;
            this.from_station = c9;
            this.start_time = db;
            this.to_station = de;
            this.arrive_time = dd
        };
        var cX = new c3(cY,cV,cW,c5,c6,c1,cZ,c4);
        c0.push(cX);
        var c2 = $("#autoSubTicketTitTemplate").html();
        $.templates({
            leftTableTemplate: c2
        });
        $("#autosubmit_check_ticket_tit").html($.render.leftTableTemplate(c0))
    }
    function p(c7) {
        if (bm) {
            clearInterval(bm)
        }
        var cW = "";
        var cX = "";
        var c2 = "";
        var cY = "";
        if ($("#sf2").is(":checked")) {
            c2 = "3";
            cY = "学生票"
        }
        tickets_info = new Array();
        var c8 = c7[1];
        var c1 = c7[2];
        var c0 = 0;
        var cZ = passengerChecked.length;
        for (var c3 = 0; c3 < c1.length; c3++) {
            var c5 = 0;
            if (c1[c3].toLowerCase() == "yyrw") {
                var cV = c8.queryLeftNewDTO["seat_types"];
                if (c1[c3].toLowerCase() == "yyrw" && cV.indexOf("A") > -1) {
                    c5 = c8.queryLeftNewDTO["gr_num"]
                }
            } else {
                c5 = c8.queryLeftNewDTO[c1[c3].toLowerCase() + "_num"]
            }
            if (c5 == "--" || c5 == "无") {
                c5 = 0
            } else {
                if (c5 == "有") {
                    c5 = 20
                } else {
                    c5 = Number(c5)
                }
            }
            if (c0 >= cZ) {
                break
            }
            var c6 = c1[c3];
            cW = aJ(c6);
            cX = R(c6);
            for (var c4 = 0; c4 < c5; c4++) {
                if (c0 >= cZ) {
                    break
                }
                c2 = passengerChecked[c4].passenger_type;
                if (!c2 || "" == c2) {
                    c2 = "1"
                }
                if (c2 == "1") {
                    cY = "成人票"
                } else {
                    if (c2 == "2") {
                        cY = "儿童票"
                    } else {
                        if (c2 == "3") {
                            cY = "学生票"
                        } else {
                            if (c2 == "4") {
                                cY = "残军票"
                            }
                        }
                    }
                }
                tickets_info.push(new by("sdAdd_" + aB(),cW,cX,c2,cY,passengerChecked[c0].passenger_name,passengerChecked[c0].passenger_id_type_code,passengerChecked[c0].passenger_id_type_name,passengerChecked[c0].passenger_id_no,passengerChecked[c0].mobile_no,passengerChecked[c0].allEncStr));
                c0++
            }
        }
    }
    function cO(cW) {
        var cV;
        if ("X" == canChooseBeds) {
            $("#bed_show").html("<span style='background:url(../resources/images/icon_new.png) right center no-repeat; padding-right:30px; cursor: pointer;' title='欢迎使用12306选铺功能'>铺别</span>");
            cV = $("#autoSubCheckTicketInfoTemplate_chooseBeds").html().replace("<!--", "").replace("-->", "");
            $("#bed_show").show()
        } else {
            $("#bed_show").hide();
            cV = $("#autoSubCheckTicketInfoTemplate").html()
        }
        $.templates({
            leftTableTemplate: cV
        });
        $("#autosubmit_check_ticketInfo").html($.render.leftTableTemplate(cW))
    }
    function m() {
        var cY = S.queryLeftNewDTO.yz_num;
        var cV = S.queryLeftNewDTO.rz_num;
        var c2 = S.queryLeftNewDTO.yw_num;
        var c0 = S.queryLeftNewDTO.rw_num;
        var c1 = S.queryLeftNewDTO.gr_num;
        var cZ = S.queryLeftNewDTO.ze_num;
        var c4 = S.queryLeftNewDTO.zy_num;
        var c5 = S.queryLeftNewDTO.tz_num;
        var cW = S.queryLeftNewDTO.swz_num;
        var c3 = S.queryLeftNewDTO.wz_num;
        var cX = "";
        if (cY != "--") {
            cX = "YZ";
            return cX
        }
        if (cZ != "--") {
            cX = "ZE";
            return cX
        }
        if (c2 != "--") {
            cX = "YW";
            return cX
        }
        if (c4 != "--") {
            cX = "ZY";
            return cX
        }
        if (cV != "--") {
            cX = "RZ";
            return cX
        }
        if (c0 != "--") {
            cX = "RW";
            return cX
        }
        if (c5 != "--") {
            cX = "TZ";
            return cX
        }
        if (c1 != "--") {
            cX = "GR";
            return cX
        }
        if (cW != "--") {
            cX = "SWZ";
            return cX
        }
        if (c3 != "--") {
            cX = "WZ";
            return cX
        }
    }
    function R(cW) {
        var cV = "";
        if (cW == "ZY") {
            cV = "一等座"
        }
        if (cW == "ZE") {
            cV = "二等座"
        }
        if (cW == "SWZ") {
            cV = "商务座/特等座"
        }
        if (cW == "TZ") {
            cV = "特等座"
        }
        if (cW == "YZ") {
            cV = "硬座"
        }
        if (cW == "RZ") {
            cV = "软座"
        }
        if (cW == "YW") {
            cV = "硬卧/二等卧"
        }
        if (cW == "RW") {
            cV = "软卧/一等卧"
        }
        if (cW == "GR") {
            cV = "高级软卧"
        }
        if (cW == "SRRB") {
            cV = "动卧"
        }
        if (cW == "YYRW") {
            cV = "高级动卧"
        }
        if (cW == "WZ") {
            cV = "无座"
        }
        return cV
    }
    function aJ(cW) {
        var cV = "";
        if (cW == "ZY") {
            cV = "M"
        }
        if (cW == "ZE") {
            cV = "O"
        }
        if (cW == "SWZ") {
            cV = "9"
        }
        if (cW == "TZ") {
            cV = "P"
        }
        if (cW == "YZ") {
            cV = "1"
        }
        if (cW == "RZ") {
            cV = "2"
        }
        if (cW == "YW") {
            cV = "3"
        }
        if (cW == "RW") {
            cV = "4"
        }
        if (cW == "GR") {
            cV = "6"
        }
        if (cW == "WZ") {
            cV = "WZ"
        }
        if (cW == "SRRB") {
            cV = "F"
        }
        if (cW == "YYRW") {
            cV = "A"
        }
        return cV
    }
    function by(c3, cX, cY, c0, cZ, cW, c5, c4, c1, cV, c2) {
        this.only_id = c3,
        this.seat_type = cX;
        this.seat_type_name = cY;
        this.ticket_type = c0,
        this.ticket_type_name = cZ;
        this.name = cW;
        this.id_type = c5;
        this.id_type_name = c4;
        this.id_no = c1;
        this.phone_no = cV;
        this.allEncStr = c2;
        this.toString = function() {
            return this.name + "_" + this.id_type + "_" + this.id_no + "_" + this.phone_no
        }
    }
    function aB() {
        if (tickets_info.length < 1) {
            return tickets_info.length
        } else {
            var cX = 0;
            for (var cW = 0; cW < tickets_info.length; cW++) {
                var cV = Number(tickets_info[cW].only_id.split("_")[1]);
                if (cV > cX) {
                    cX = cV
                }
            }
            return cX + 1
        }
    }
    function bl() {
        ch = [];
        ah = [];
        aT = [];
        tickets_info = [];
        cm = [];
        cv = [];
        S = "";
        isAsync = "";
        location_code = "";
        md5Str = "";
        leftTicketStr = ""
    }
    getpassengerTicketsForAutoSubmit = function() {
        var cW = "";
        for (var c1 = 0; c1 < tickets_info.length; c1++) {
            var c2 = "";
            if ("WZ" == tickets_info[c1].seat_type) {
                c2 = aJ(m())
            } else {
                c2 = tickets_info[c1].seat_type
            }
            var cZ = $("#autosubmit_check_ticketInfo").find("select[id^=ticketype_]");
            var c3 = "0";
            if (cZ && cZ.length > 0) {
                var cV = tickets_info[c1].seat_type + "#" + tickets_info[c1].ticket_type + "#" + tickets_info[c1].name + "#" + tickets_info[c1].id_no;
                for (var c0 = 0, c6 = cZ.length; c0 < c6; c0++) {
                    var c4 = cZ.eq(c0);
                    var cX = c4.val().split("_")[0];
                    var cY = c4.val().split("_")[1];
                    if (cV == cX) {
                        c3 = cY
                    }
                }
            }
            var c5 = c2 + "," + c3 + "," + tickets_info[c1].ticket_type + "," + tickets_info[c1].name + "," + tickets_info[c1].id_type + "," + tickets_info[c1].id_no + "," + (tickets_info[c1].phone_no == null ? "" : tickets_info[c1].phone_no) + ",N," + tickets_info[c1].allEncStr;
            cW += c5 + "_"
        }
        return cW.substring(0, cW.length - 1)
    }
    ;
    getOldPassengersForAutoSubmit = function() {
        var cX = "";
        for (var cW = 0; cW < passengerChecked.length; cW++) {
            var cV = passengerChecked[cW].passenger_name + "," + passengerChecked[cW].passenger_id_type_code + "," + passengerChecked[cW].passenger_id_no + "," + passengerChecked[cW].passenger_type;
            cX += cV + "_"
        }
        return cX
    }
    ;
    var a6 = false;
    function bT(cV, cW) {
        var c0 = "";
        var cX = $("#train_date").val().split("-");
        var cY = new Date();
        cY.setFullYear(cX[0], cX[1] - 1, cX[2]);
        if (isAsync == ticket_submit_order.request_flag.isAsync && leftTicketStr != "") {
            var cZ = null;
            if (tickets_info[0].seat_type == "WZ") {
                if (S.queryLeftNewDTO.yz_num != "--") {
                    tickets_info[0].seat_type = "1";
                    a6 = true;
                    tickets_info[0].seat_type_name = "硬座"
                } else {
                    if (S.queryLeftNewDTO.ze_num != "--") {
                        tickets_info[0].seat_type = "O";
                        a6 = true;
                        tickets_info[0].seat_type_name = "二等座"
                    }
                }
            }
            $.ajax({
                url: ctx + "confirmPassenger/getQueueCountAsync",
                type: "post",
                async: false,
                data: {
                    train_date: cY.toString(),
                    train_no: S.queryLeftNewDTO.train_no,
                    stationTrainCode: S.queryLeftNewDTO.station_train_code,
                    seatType: tickets_info[0].seat_type,
                    fromStationTelecode: S.queryLeftNewDTO.from_station_telecode,
                    toStationTelecode: S.queryLeftNewDTO.to_station_telecode,
                    leftTicket: leftTicketStr,
                    purpose_codes: cV,
                    isCheckOrderInfo: cW
                },
                dataType: "json",
                success: function(c3) {
                    if (c3.status) {
                        if (c3.data.isRelogin == "Y") {
                            window.location.href = ctx + "view/index.html?random=" + new Date().getTime()
                        }
                        var c4 = null;
                        var c2 = tickets_info[0].seat_type;
                        c4 = c3.data.ticket.split(",");
                        c0 = "本次列车，" + (tickets_info[0].seat_type_name).split("（")[0] + "余票";
                        if (parseInt(c4[0]) >= 0) {
                            c0 += "<strong>" + c4[0] + "</strong>张"
                        } else {
                            c0 += c4[0]
                        }
                        var c1 = false;
                        if (c4.length > 1) {
                            c0 += ",无座余票";
                            if (parseInt(c4[1]) >= 0) {
                                c0 += "<strong>" + c4[1] + "</strong>张"
                            } else {
                                c0 += c4[1]
                            }
                            c1 = true
                        }
                        c0 += "。";
                        if (c3.data.op_2 == "true") {
                            if ((a6 && !c1) || !a6) {
                                ba = false;
                                U();
                                return
                            }
                            c0 += '<font color="red">目前排队人数已经超过余票张数，请您选择其他席别或车次。</font>'
                        } else {
                            if (c3.data.countT > 0) {
                                c0 += '目前排队人数<font color="red">' + c3.data.countT + "</font>人，";
                                if (if_show_pass_code_login == "Y") {
                                    c0 += "<br/>请确认以上信息是否正确，点击“确认”后，系统将为您分配席位。"
                                }
                            }
                        }
                        var c5 = $("#sy_ticket_num_id");
                        if (c5 != null) {
                            c5.html(c0)
                        }
                        cs()
                    }
                },
                error: function(c1, c3, c2) {
                    return
                }
            })
        } else {
            cs()
        }
    }
    function bV(cW, cV) {
        rt = "";
        seat_1 = -1;
        seat_2 = -1;
        i = 0;
        while (i < cW.length) {
            s = cW.substr(i, 10);
            c_seat = s.substr(0, 1);
            if (c_seat == cV) {
                count = s.substr(6, 4);
                while (count.length > 1 && count.substr(0, 1) == "0") {
                    count = count.substr(1, count.length)
                }
                count = parseInt(count);
                if (count < 3000) {
                    seat_1 = count
                } else {
                    seat_2 = (count - 3000)
                }
            }
            i = i + 10
        }
        if (seat_1 > -1) {
            rt += seat_1
        }
        if (seat_2 > -1) {
            rt += "," + seat_2
        }
        return rt
    }
    function cT() {
        $.ajax({
            url: ctx + "confirmPassenger/confirmSingle",
            type: "post",
            data: {
                passengerTicketStr: getpassengerTicketsForAutoSubmit(),
                oldPassengerStr: getOldPassengersForAutoSubmit(),
                tour_flag: "dc",
                randCode: $("#randCode_other").val(),
                purpose_codes: cP(),
                key_check_isChange: md5Str,
                train_location: location_code,
                choose_seats: b9(),
                seatDetailType: a5()
            },
            dataType: "json",
            async: true,
            success: function(cV) {
                if (cV.status) {
                    if (cV.data.submitStatus) {
                        otsRedirect("post", ctx + "payOrder/init?random=" + new Date().getTime(), {})
                    } else {
                        ap("出票失败!", false, "原因： " + cV.data.errMsg + '<a  id="xg_close_win_id">点击修改</a>', true, "lose");
                        $("#xg_close_win_id").click(function() {
                            at("transforNotice_id", true);
                            $("#i-ok").css("display", "none")
                        })
                    }
                } else {
                    ap("订票失败!", true, "很抱歉！请关闭窗口重新预定车票", true, "lose")
                }
            },
            error: function(cV, cX, cW) {
                ap("订票失败!", true, "很抱歉！网络忙，请关闭窗口稍后再试。", true, "lose");
                return
            }
        })
    }
    function u() {
        $.ajax({
            url: ctx + "confirmPassenger/confirmSingleForQueueAsys",
            type: "post",
            data: {
                passengerTicketStr: getpassengerTicketsForAutoSubmit(),
                oldPassengerStr: getOldPassengersForAutoSubmit(),
                randCode: $("#randCode_other").val(),
                purpose_codes: cP(),
                key_check_isChange: md5Str,
                leftTicketStr: leftTicketStr,
                train_location: location_code,
                choose_seats: b9(),
                seatDetailType: a5()
            },
            dataType: "json",
            async: true,
            success: function(cV) {
                $("#i-ok").css("display", "none");
                $("#i-ok2").css("display", "none");
                $("#c_error2").html("");
                $("#c_error2").removeClass("error");
                $("#randCode2").val("");
                if (cV.status) {
                    if (!cV.data.submitStatus) {
                        ap("出票失败!", false, "原因： " + cV.data.errMsg + '<a id="xg_close_win_id" >点击修改</a>', true, "lose");
                        $("#xg_close_win_id").click(function() {
                            at("transforNotice_id", true)
                        });
                        if (cV.data.errMsg.indexOf("余票不足") >= 0) {
                            jPlayer("stop");
                            $("#qr_closeTranforDialog_id").click();
                            $("#query_ticket").click()
                        }
                    } else {
                        var cW = new OrderQueueWaitTime("dc",aC,x);
                        cW.start(queryOrderWaitTimeInterval)
                    }
                } else {
                    ap("订票失败!", true, "很抱歉！请关闭窗口重新预定车票", true, "lose")
                }
            },
            error: function(cV, cX, cW) {
                ap("订票失败!", true, "很抱歉！网络忙，请关闭窗口稍后再试。", true, "lose");
                return
            }
        })
    }
    function aC(cV, cX, cW) {
        if (cX <= 5) {
            ap("订单已经提交，系统正在处理中，请稍等。", false, "", false, "work")
        } else {
            if (cX > 30 * 60) {
                ap("订单已经提交，预计等待时间超过30分钟，请耐心等待。", false, "", false, "queue")
            } else {
                ap("订单已经提交，最新预估等待时间" + cW + "，请耐心等待。", false, "", false, "queue")
            }
        }
    }
    function x(cV, cX, cW) {
        if (cX == -1 || cX == -100) {
            $.ajax({
                url: ctx + "confirmPassenger/resultOrderForDcQueue",
                data: {
                    orderSequence_no: cW.orderId
                },
                type: "POST",
                dataType: "json",
                success: function(cY) {
                    if (cY.status) {
                        if (cY.data.submitStatus) {
                            otsRedirect("post", ctx + "/payOrder/init?random=" + new Date().getTime(), {})
                        } else {
                            ap("下单成功", false, "", false, "win")
                        }
                    } else {
                        ap("下单成功。", false, "", false, "win")
                    }
                },
                error: function(cY, c0, cZ) {
                    ap("下单成功。", false, "", false, "win")
                }
            })
        } else {
            ce(cX, cW)
        }
    }
    function ce(cV, cW) {
        if (cW.name && cW.card && cW.tel) {
            at("transforNotice_id", true);
            $("#608_check_msg").html(cW.msg);
            dhtmlx.createWin({
                winId: "608_check",
                closeWinId: ["608_check_close", "608_check_cancel"],
                okId: "608_check_ok",
                okCallBack: function() {
                    $("#608_name").html(cW.name);
                    $("#608_card").html(cW.card);
                    $("#608_tel").html(cW.tel);
                    $("#ticketInfo").html(cW.ticketInfo);
                    dhtmlx.createWin({
                        winId: "608_complain",
                        closeWinId: ["608_complain_close", "608_complain_cancel"],
                        okId: "608_complain_ok",
                        okCallBack: function() {
                            var cX = dhtmlx.modalbox({
                                targSrc: '<div><img src="' + ctx + 'resources/images/loading.gif"></img></div>',
                                callback: function() {}
                            });
                            $.ajax({
                                url: ctx + "confirmPassenger/report",
                                type: "post",
                                async: false,
                                success: function(cY) {
                                    dhtmlx.modalbox.hide(cX);
                                    if (cY.data == "Y") {
                                        dhtmlx.alert({
                                            title: "提示",
                                            ok: messages["button.ok"],
                                            text: "举报成功",
                                            type: "alert-info"
                                        })
                                    } else {
                                        dhtmlx.alert({
                                            title: "提示",
                                            ok: messages["button.ok"],
                                            text: "举报失败",
                                            type: "alert-error"
                                        })
                                    }
                                    $("#i-okmypasscode1").hide();
                                    if (ifAlertCode) {
                                        refreshImg("passenger", "randp", "other")
                                    }
                                },
                                error: function(cY, c0, cZ) {
                                    dhtmlx.modalbox.hide(cX)
                                }
                            })
                        },
                        checkConfirm: function() {
                            return true
                        }
                    });
                    $("#608_complain").css("top", "200px")
                },
                checkConfirm: function() {
                    return true
                },
                callback: function() {
                    $("#i-okmypasscode1").hide();
                    if (ifAlertCode) {
                        refreshImg("passenger", "randp", "other")
                    }
                }
            });
            $("#608_check").css("top", "200px");
            return
        }
        if (cV == -1) {
            return
        } else {
            if (cV == -2) {
                if (cW.errorcode == 0) {
                    ap("订票失败!", true, "原因： " + cW.msg, true, "lose")
                } else {
                    ap("订票失败!", true, "原因： " + cW.msg, true, "lose")
                }
                if (cW.msg.indexOf("没有足够的票") > -1) {
                    jPlayer("stop");
                    $("#qr_closeTranforDialog_id").click();
                    $("#query_ticket").click()
                }
            } else {
                if (cV == -3) {
                    ap("哎呀,订票失败!", true, "订单已撤销", true, "lose")
                } else {
                    window.location.href = ctx + "view/train_order.html?type=1&random=" + new Date().getTime()
                }
            }
        }
    }
    function ab() {
        cN = new dhtmlXWindows();
        cN.enableAutoViewport(true);
        cN.setSkin("dhx_terrace");
        cN.setImagePath(ctx + "resources/js/rich/windows/imgs/");
        at = function(cZ, cY) {
            unLoadGrayBackground();
            if (cN.isWindow(cZ + "_")) {
                cN.window(cZ + "_").setModal(false);
                cN.window(cZ + "_").hide()
            }
        }
        ;
        ap = function(c5, c2, cZ, cY, c1) {
            var c4 = '<div class="tit">' + (c2 ? '<span class="colorC">' + c5 + "</span>" : c5) + "</div>";
            var c0 = "<P>" + cZ + "</p>";
            var c3 = c2 ? '<p>请点击[<a href="' + ctx + 'view/train_order.html?type=2"><strong>我的12306</strong></a>]办理其他业务。您也可以点击[<a href="' + ctx + 'leftTicket/init"><strong>预订车票</strong></a>]，重新规划您的旅程。</p>' : '<P>查看订单处理情况，请点击“<a href="' + ctx + 'view/train_order.html?type=1">未完成订单</a>”</P>';
            $("#iamge_status_id").removeClass().addClass("icon i-" + c1);
            if (cY) {
                $("#up-box-hd_id").html("提示<a id='closeTranforDialog_id' href='#nogo'>关闭</a>");
                c3 = "";
                $("#lay-btn_id").html("<a href='#nogo' id='qr_closeTranforDialog_id'  class='btn92s'>确认</a>")
            } else {
                $("#up-box-hd_id").html("提示");
                $("#lay-btn_id").html("")
            }
            $("#orderResultInfo_id").html(c4 + (cZ == "" || cZ == null || cZ == "undefined" || cZ == undefined ? "" : c0) + c3);
            cV("transforNotice_id");
            if (cY) {
                $("#closeTranforDialog_id").click(function() {
                    at("transforNotice_id", true)
                });
                $("#qr_closeTranforDialog_id").click(function() {
                    at("transforNotice_id", true);
                    $("#i-ok").css("display", "none")
                })
            }
        }
        ;
        function cV(c2) {
            at(c2, false);
            if ("checkticketinfo_id" == c2) {
                var c0 = ticketInfoForPassengerForm.queryLeftNewDetailDTO;
                if (c0.to_station_telecode == ticket_submit_order.special_areas.lso || c0.to_station_telecode == ticket_submit_order.special_areas.dao || c0.to_station_telecode == ticket_submit_order.special_areas.ado || c0.to_station_telecode == ticket_submit_order.special_areas.nqo || c0.to_station_telecode == ticket_submit_order.special_areas.tho) {
                    if (cW()) {
                        $("#notice_1_id").html("1.系统将随机为您申请席位，暂不支持自选席位。");
                        $("#notice_2_id").html("2.根据现行规定，外国人在购买进西藏火车票时，须出示西藏自治区外事办公室或旅游局、商务厅的批准函（电），或者出示中国内地司局级接待单位出具的、已征得自治区上述部门同意的证明信函。台湾同胞赴藏从事旅游、商务活动，须事先向西藏自治区旅游局或商务厅提出申请，购买进藏火车票时须出示有关批准函。");
                        if (cX()) {
                            $("#notice_3_id").html("3.按现行规定，学生票购票区间必须与学生证上的乘车区间一致，否则车站将不予换票。")
                        } else {
                            $("#notice_3_id").html("")
                        }
                    }
                } else {
                    $("#notice_1_id").html("1.系统将随机为您申请席位，暂不支持自选席位。");
                    if (cX()) {
                        $("#notice_3_id").html("2.按现行规定，学生票购票区间必须与学生证上的乘车区间一致，否则车站将不予换票。")
                    } else {
                        $("#notice_3_id").html("")
                    }
                }
            }
            var cZ = br(c2);
            var cY = $(window).width() / 2 - 300;
            var c1 = cM() + ($(window).height() / 2 - 200);
            cZ.setDimension($("#content_" + c2).width(), $("#content_" + c2).height() + 10);
            $(".dhtmlx_window_active").height($("#content_" + c2).height());
            $(".dhtmlx_window_active").css({
                left: cY + "px",
                top: c1 + "px"
            })
        }
        function cX() {
            for (var cZ = 0; cZ < limit_tickets.length; cZ++) {
                var cY = limit_tickets[cZ];
                if (cY.ticket_type == ticket_submit_order.ticket_type.student) {
                    return true
                }
            }
            return false
        }
        function cW() {
            for (var cZ = 0; cZ < limit_tickets.length; cZ++) {
                var cY = limit_tickets[cZ];
                if ((ticketInfoForPassengerForm.tour_flag == ticket_submit_order.tour_flag.fc || ticketInfoForPassengerForm.tour_flag == ticket_submit_order.tour_flag.gc) && cY.save_status != "" && (cY.id_type == ticket_submit_order.passenger_card_type.passport || cY.id_type == ticket_submit_order.passenger_card_type.work || cY.id_type == ticket_submit_order.passenger_card_type.taiwan)) {
                    return true
                } else {
                    if ((ticketInfoForPassengerForm.tour_flag == ticket_submit_order.tour_flag.wc || ticketInfoForPassengerForm.tour_flag == ticket_submit_order.tour_flag.dc) && (cY.id_type == ticket_submit_order.passenger_card_type.passport || cY.id_type == ticket_submit_order.passenger_card_type.work || cY.id_type == ticket_submit_order.passenger_card_type.taiwan)) {
                        return true
                    }
                }
            }
            return false
        }
    }
    function br(cW) {
        var cV = cN.createWindow(cW + "_", 0, 0, 660, 100);
        cV.attachObject(cW);
        cV.clearIcon();
        cV.denyResize();
        cV.setModal(true);
        cV.center();
        cV.button("park").hide();
        cV.button("minmax1").hide();
        cV.hideHeader();
        return cV
    }
    function I(cW) {
        var cV = new Date();
        var cX = cW.split("-");
        cV.setFullYear(parseInt(cX[0]), parseInt(cX[1] - 1, 10), parseInt(cX[2], 10));
        if (cX.length >= 6) {
            cV.setHours(cX[3], cX[4], cX[5])
        }
        return cV
    }
    function aU(cV) {
        var cY = ""
          , cX = "";
        var c0 = cV.replace(/-/g, "");
        if (c0.substring(4, 5) == "0") {
            cY = c0.substring(5, 6) + "月"
        } else {
            cY = c0.substring(4, 6) + "月"
        }
        if (c0.substring(6, 7) == "0") {
            cX = c0.substring(7, 8) + "日"
        } else {
            cX = c0.substring(6, 8) + "日"
        }
        var cW = new Date(Date.parse(cV.replace(/-/g, "/")));
        var cZ = "日一二三四五六";
        return cY.concat(cX).concat("&nbsp;&nbsp;").concat("周").concat(cZ.charAt(cW.getDay()))
    }
    function d() {
        $(".buy-cart .close").on("click", function() {
            $(".cart-bd").hide()
        });
        $(".cart-hd").on("click", function() {
            $(this).next(".cart-bd").toggle()
        });
        $("#hbClear").click(function() {
            var cW = $(".cart-tlist li");
            for (var cV = 0; cV < cW.length; cV++) {
                deleteHB($(cW[cV]).find("a"))
            }
        });
        $("#hbSubmit").click(function() {
            var cZ = $(".cart-tlist li");
            var cY = "";
            if (cZ.length == 0) {
                dhtmlx.alert({
                    title: "提示",
                    ok: "确定",
                    text: "请先选择候补车次！",
                    type: "alert-error"
                });
                return
            }
            for (var cW = 0; cW < cZ.length; cW++) {
                var cX = seatTypeForHB[$(cZ[cW]).attr("hbid").split("#")[4].split("_")[0]].split("_")[0];
                var cV = $(cZ[cW]).attr("hbid").split("#")[9] + "#" + cX + "|";
                cY += cV
            }
            Y(cY)
        })
    }
    function aQ(cW, cX) {
        var cV = dhtmlx.modalbox({
            targSrc: '<div><img src="' + ctx + 'resources/images/loading.gif"></img></div>'
        });
        $.ajax({
            type: "post",
            url: ctx + "login/checkUser",
            data: {},
            beforeSend: function(cY) {
                cY.setRequestHeader("If-Modified-Since", "0");
                cY.setRequestHeader("Cache-Control", "no-cache")
            },
            success: function(cY) {
                dhtmlx.modalbox.hide(cV);
                if (cY.data.flag) {
                    if (cX && typeof cX === "function") {
                        cX()
                    }
                } else {
                    a2(function() {
                        a9(cW)
                    })
                }
            },
            error: function() {
                dhtmlx.modalbox.hide(cV);
                dhtmlx.alert({
                    title: "提示",
                    ok: "确定",
                    text: "系统忙，请稍后再试！",
                    type: "alert-error"
                })
            }
        })
    }
    function a2(cV) {
        $(".mask").fadeIn();
        $(".login-box .login-hd-code").addClass("active").siblings().removeClass("active");
        $(".login-box .login-code").show().siblings().hide();
        $(".login-box").slide({
            titCell: ".login-hd li",
            mainCell: ".login-bd",
            titOnClassName: "active",
            trigger: "click",
        });
        $(".modal-login").css("top", ($(window).height() - $(".modal-login").height()) / 2 + $(window).scrollTop() + "px").css("left", ($(window).width() - $(".modal-login").width()) / 2 + $(window).scrollLeft() + "px").show();
        $.popup_initLogin(true);
        $(".modal-login").show();
        $(".modal-login").focus();
        $.pop_callback = function() {
            if (cV && typeof cV === "function") {
                cV()
            }
        }
    }
    var bg = false;
    var M;
    var a4 = 0;
    function ao(cX, c0) {
        if (bg) {
            var cW = new Date().getTime();
            if (cW - M <= a4) {
                if (c0 && typeof c0 === "function") {
                    c0()
                }
                return true
            }
        }
        var cZ = seatTypeForHB[$(cX).attr("hbid").split("#")[4].split("_")[0]].split("_")[0];
        var cY = $(cX).attr("hbid").split("#")[9] + "#" + cZ + "|";
        var cV = ao;
        $.ajax({
            type: "post",
            url: ctx + "afterNate/chechFace",
            data: {
                secretList: cY
            },
            async: false,
            beforeSend: function(c1) {
                c1.setRequestHeader("If-Modified-Since", "0");
                c1.setRequestHeader("Cache-Control", "no-cache")
            },
            success: function(c1) {
                var c2 = c1.data;
                if (c2) {
                    if (c2.login_flag) {
                        if (c2.face_flag == false) {
                            bI(c2.face_check_code, c2.is_show_qrcode, c0)
                        } else {
                            bg = true;
                            M = new Date().getTime();
                            if (c0 && typeof c0 === "function") {
                                c0()
                            }
                            return true
                        }
                    } else {
                        a2(function() {
                            cV(cX, c0);
                            return true
                        })
                    }
                } else {
                    dhtmlx.alert({
                        title: "提示",
                        ok: "确定",
                        text: c1.messages[0],
                        type: "alert-error"
                    })
                }
            },
            error: function() {
                dhtmlx.alert({
                    title: "提示",
                    ok: "确定",
                    text: "系统忙，请稍后再试！",
                    type: "alert-error"
                })
            }
        });
        return false
    }
    function Y(cV) {
        aQ(cV, function() {
            a9(cV)
        })
    }
    function a9(cV) {
        $.ajax({
            type: "POST",
            url: ctx + "afterNate/submitOrderRequest",
            data: {
                secretList: cV
            },
            timeout: 10000,
            error: function(cW, cY, cX) {
                dhtmlx.alert({
                    title: "提示",
                    ok: "确定",
                    text: "系统忙，请稍后再试！",
                    type: "alert-error"
                })
            },
            success: function(cW) {
                var cX = cW.data;
                if (cX) {
                    if (cX.flag) {
                        b2()
                    } else {
                        bI(cX.faceCheck, cX.is_show_qrcode, b2)
                    }
                } else {
                    dhtmlx.alert({
                        title: "提示",
                        ok: "确定",
                        text: cW.messages[0],
                        type: "alert-error"
                    })
                }
            }
        })
    }
    function b2() {
        otsRedirect("get", window.location.protocol + "//" + window.location.host + "/" + href_path_2 + "view/lineUp_toPay.html", {})
    }
    function bI(cX, cW, cY) {
        if (cX == "01" || cX == "11") {
            var cV = "证件信息正在审核中，请您耐心等待，审核通过后可继续完成候补操作。</P>";
            dhtmlx.alert({
                title: "提示",
                ok: "确定",
                text: "身份核验审核中",
                body: cV,
                type: "alert-error"
            })
        } else {
            if (cX == "03" || cX == "13") {
                var cV = "证件信息审核失败，请检查所填写的身份信息内容与原证件是否一致。";
                dhtmlx.alert({
                    title: "提示",
                    ok: "确定",
                    text: '<span class="colorC">审核失败</span>',
                    body: cV,
                    type: "alert-error"
                })
            } else {
                if (cX == "04" || cX == "14") {
                    if (cW) {
                        a8("queueOrder", "HB", "/afterNateQRCode/getClickScanStatus", function() {
                            if (cY && typeof cY === "function") {
                                cY()
                            }
                        })
                    } else {
                        var cV = "通过人证一致性核验的用户及激活的“铁路畅行”会员可以提交候补需求，请您按照操作说明在铁路12306app上完成人证核验";
                        dhtmlx.alert({
                            title: "提示",
                            ok: "确定",
                            text: "身份核验提醒",
                            body: cV,
                            type: "alert-error"
                        })
                    }
                } else {
                    if (cX == "02" || cX == "12") {} else {
                        dhtmlx.alert({
                            title: "提示",
                            ok: "确定",
                            text: "系统忙，请稍后再试！",
                            type: "alert-error"
                        })
                    }
                }
            }
        }
    }
    function a8(cW, cZ, cV, cY) {
        var cX = {
            authType: cW,
            riskChannel: cZ,
            checkUrl: cV
        };
        $.ScanQRCode.showScanWindow(cX, function() {
            cY()
        })
    }
    function b4(cW) {
        var cX = $(cW).attr("hbid");
        if ($(cW).hasClass("item-cphd cphd-active")) {
            if ($(cW).prev().hasClass("cphd-active-prev")) {
                $(cW).prev().removeClass()
            }
            if ($(cW).next().hasClass("item-cphd cphd-active")) {
                $(cW).attr("class", "item-cphd cphd-active-prev")
            } else {
                $(cW).removeClass()
            }
            z(cX, "del")
        } else {
            var cV = cX.split("#")[0];
            if ($('.cart-tlist li[tdate="' + cV + '"]').length == alowHBMaxNum) {
                dhtmlx.alert({
                    title: "提示",
                    ok: "确定",
                    text: hb_max_msg,
                    type: "alert-error"
                });
                return
            }
            ao(cW, function() {
                $(cW).attr("class", "item-cphd cphd-active");
                if (!$(cW).prev().hasClass("cphd-active")) {}
                z(cX, "add");
                w(cW, cX)
            })
        }
    }
    function z(c2, cY) {
        var cX = c2.split("#");
        if (cY == "add") {
            $(".buy-cart").show();
            var cZ = $(".cart-tlist li").length;
            var c0 = "";
            c0 += '<li tdate="' + cX[0] + '" hbid="' + c2 + '">';
            c0 += '<div class="card-num">' + (cZ + 1) + "</div>";
            c0 += '<div class="cart-tlist-date">' + cX[0] + "</div>";
            c0 += '<div title="' + cX[6] + "到" + cX[8] + '">' + (cX[6].length > 5 ? cX[6].substring(0, 5) + ".." : cX[6]) + " → " + (cX[8].length > 5 ? cX[8].substring(0, 5) + ".." : cX[8]) + "</div>";
            c0 += "<div><strong>" + cX[10] + "</strong> " + seatTypeForHB[cX[4].split("_")[0]].split("_")[1] + "</div>";
            c0 += '<div name="suc_rate" hbid="' + c2 + '" class="cart-tlist-tool">';
            c0 += '<a href="javascript:void(0)" onclick="deleteHB(this)" class="del">删除</a>';
            c0 += "</div>";
            c0 += "</li>";
            $(".cart-tlist").append(c0);
            var cW = seatTypeForHB[c2.split("#")[4].split("_")[0]].split("_")[0];
            var c1 = c2.split("#")[9] + "#" + cW;
            bX(c1, c2)
        } else {
            $('li[hbid="' + c2 + '"]').remove()
        }
        $(".cart-hd span").html($(".cart-tlist li").length);
        if ($(".cart-tlist li").length == 0) {
            $(".cart-bd").hide()
        } else {
            var cV = $($(".cart-tlist li")[0]).attr("hbid").split("#")[0];
            $(".cart-bd").show()
        }
    }
    function w(cX, cZ) {
        var cY = $(".cart-hd").offset();
        var c0 = $(cX).offset();
        var cV = $('<img id="flyer" src="' + ctx + 'resources/images/oval.png" style="overflow:hidden;position:absolute;z-index:1500;" width="11" height="11" />');
        try {
            cV.fly({
                start: {
                    left: c0.left + 27,
                    top: c0.top - $(window).scrollTop() + 10
                },
                end: {
                    left: cY.left + 10,
                    top: cY.top - $(window).scrollTop() + 10,
                    width: 0,
                    height: 0
                },
                onEnd: function() {
                    this.destory()
                },
                autoPlay: true,
                speed: 1.7,
                vertex_Rtop: 100
            })
        } catch (cW) {}
    }
    function bX(cV, cW) {
        $.ajax({
            type: "POST",
            url: ctx + "afterNate/getSuccessRate",
            data: {
                successSecret: cV
            },
            timeout: 10000,
            error: function(cX, cZ, cY) {},
            success: function(cX) {
                var cY = cX.data;
                if (cY && cY.flag) {
                    var cZ = cY.flag[0];
                    if (cZ.level == 1) {
                        $('div[name="suc_rate"][hbid="' + cW + '"]').prepend('<span class="odds-small">' + cZ.info + "</span>")
                    } else {
                        if (cZ.level == 2) {
                            $('div[name="suc_rate"][hbid="' + cW + '"]').prepend('<span class="odds-mid">' + cZ.info + "</span>")
                        } else {
                            if (cZ.level == 3) {
                                $('div[name="suc_rate"][hbid="' + cW + '"]').prepend('<span class="odds-large">' + cZ.info + "</span>")
                            } else {
                                if (cZ.level == 4) {
                                    $('div[name="suc_rate"][hbid="' + cW + '"]').prepend('<span class="odds-large">' + cZ.info + "</span>")
                                }
                            }
                        }
                    }
                }
            }
        })
    }
    deleteHB = function(cW) {
        $(cW).parent().parent().remove();
        var cX = $(cW).parent().attr("hbid");
        var cV = $('td[hbid="' + cX + '"]');
        if ($(cV).prev().hasClass("cphd-active-prev")) {
            $(cV).prev().removeClass()
        }
        if ($(cV).next().hasClass("item-cphd cphd-active")) {
            $(cV).attr("class", "item-cphd cphd-active-prev")
        } else {
            $(cV).removeClass()
        }
        X()
    }
    ;
    function X() {
        $(".cart-hd span").html($(".cart-tlist li").length);
        for (var cW = 0; cW < $(".cart-tlist li").length; cW++) {
            $(".cart-tlist li").eq(cW).find("div").eq(0).html(cW + 1)
        }
        if ($(".cart-tlist li").length == 0) {
            $(".cart-bd").hide()
        } else {
            var cV = $($(".cart-tlist li")[0]).attr("hbid").split("#")[0];
            $(".cart-bd").show()
        }
    }
    showLCTicketPrice = function(cY, cV, cX, c0, c1, cZ) {
        if ("1" == cY || "2" == cY) {
            return
        }
        var c2 = $("#lookup_" + cV + "_" + cX + "_" + c0);
        var cW = $("#price_" + cV + "_" + cX + "_" + c0);
        if (!$(cW).is(":hidden")) {
            c2.html("<b></b>");
            c2.attr("title", "查看票价");
            cW.hide()
        } else {
            $.ajax({
                type: "get",
                isTakeParam: false,
                beforeSend: function(c3) {
                    c3.setRequestHeader("If-Modified-Since", "0");
                    c3.setRequestHeader("Cache-Control", "no-cache")
                },
                url: ctx + "leftTicket/queryTicketPrice",
                data: {
                    train_no: cV,
                    from_station_no: cX,
                    to_station_no: c0,
                    seat_types: c1,
                    train_date: cZ
                },
                success: function(c3) {
                    if (c3.status) {
                        c2.html("<b class='open'></b>");
                        c2.attr("title", "收起票价");
                        cW.html(aO(c3.data));
                        cW.show();
                        cW.removeClass("bgc");
                        if (trObj.hasClass("bgc")) {
                            cW.addClass("bgc")
                        }
                    }
                }
            })
        }
    }
    ;
    submitOrderRequestLC = function(cX, cZ, cW, cV) {
        var cY = "secretStr=" + cX + "&tour_flag=lc&purpose_codes=ADULT";
        $.ajax({
            type: "post",
            url: ctx + "lcQuery/submitOrderRequest",
            data: cY,
            async: false,
            success: function(c0) {
                if (c0.status) {
                    dhtmlx.alert({
                        title: "温馨提示",
                        ok: "确定",
                        text: "您所购" + cZ + "列车在" + cV + "站变更车次为" + cW + "，在" + cV + "站无需下车。",
                        type: "alert-warn",
                        callback: function() {
                            otsRedirect("post", ctx + "lcConfirmPassenger/initLc", {})
                        }
                    })
                }
            }
        })
    }
    ;
    showTicketPrice = function(cZ) {
        if ($(cZ).html().indexOf("候补") > -1 && $(cZ).attr("ifAlow_MaxLength") == "1") {
            b4(cZ);
            return
        }
        var c3 = $(cZ).parent("tr").children("td").children("div").children("div").children("span").attr("id");
        if (undefined == c3 || c3 == null || "undefined" == typeof (c3)) {
            c3 = $(cZ).attr("id")
        }
        var c0 = c3.split("_")[0];
        var c1 = c3.split("_")[1];
        var cY = c3.split("_")[2];
        var c2 = $("#price_" + c0 + "_" + c1 + "_" + cY).attr("datatran");
        var c4 = c3.split("_")[3];
        var cX = c3.split("_")[4];
        var cV = $("#WZ_" + c0).html();
        var cW = $("#QT_" + c0).html();
        $("#price_" + c0 + "_" + c1 + "_" + cY).hide();
        $("#tp-list-price").hide();
        $("#sleeper-price>span").css("cursor", "pointer");
        if (cX && ($("#ticket_" + c0 + "_" + c1 + "_" + cY + "_train>span>span").text() == "查看票价")) {
            if ($("#ticket_" + c0 + "_" + c1 + "_" + cY).attr("class") == "bgc") {
                $("#price_" + c0 + "_" + c1 + "_" + cY).addClass("bgc")
            }
            $.ajax({
                type: "get",
                isTakeParam: false,
                beforeSend: function(c5) {
                    c5.setRequestHeader("If-Modified-Since", "0");
                    c5.setRequestHeader("Cache-Control", "no-cache")
                },
                url: ctx + "leftTicket/queryTicketPriceFL",
                data: {
                    train_no: c0,
                    from_station_no: c1,
                    to_station_no: cY,
                    seat_types: cX,
                    train_date: train_tour_flag == "fc" ? $.trim($("#back_train_date").val()) : $.trim($("#train_date").val())
                },
                timeout: 1000,
                error: function(c5, c7, c6) {},
                success: function(c5) {}
            });
            $.ajax({
                type: "get",
                isTakeParam: false,
                beforeSend: function(c5) {
                    c5.setRequestHeader("If-Modified-Since", "0");
                    c5.setRequestHeader("Cache-Control", "no-cache")
                },
                url: ctx + "leftTicket/queryTicketPrice",
                data: {
                    train_no: c0,
                    from_station_no: c1,
                    to_station_no: cY,
                    seat_types: cX,
                    train_date: train_tour_flag == "fc" ? $.trim($("#back_train_date").val()) : $.trim($("#train_date").val())
                },
                success: function(c5) {
                    if (c5.status) {
                        $("#ticket_" + c0 + "_" + c1 + "_" + cY + "_train>span>span").html("收起票价");
                        $("#ticket_" + c0 + "_" + c1 + "_" + cY + "_train>span>b").addClass("open");
                        $("#ticket_" + c0 + "_" + c1 + "_" + cY + "_train>span>b").attr("title", "收起票价");
                        if (cW == "--") {
                            c5.data.MIN = ""
                        }
                        if (cV == "--") {
                            c5.data.WZ = ""
                        }
                        $("#price_" + c0 + "_" + c1 + "_" + cY).html($.render.priceTableTemplate(c5.data));
                        $("#price_" + c0 + "_" + c1 + "_" + cY).show();
                        if (c2 && c(c2)) {
                            $("#price_" + c0 + "_" + c1 + "_" + cY).find("td").eq(0).html('<a class="ad-tlist-hot" href="javascript:void(0);">移动宾馆 免费晚餐 快捷舒适 准时正点</a>')
                        } else {
                            $("#price_" + c0 + "_" + c1 + "_" + cY).find("td").eq(0).html("")
                        }
                        if (c5.data.PM != "--") {
                            $("#sleeper-price_" + c0).mouseover(function() {
                                $("#tp-list-price_" + c0).show()
                            });
                            $("#sleeper-price_" + c0).mouseout(function() {
                                $("#tp-list-price_" + c0).hide()
                            })
                        }
                    }
                }
            })
        } else {
            $("#ticket_" + c0 + "_" + c1 + "_" + cY + "_train>span>span").html("查看票价");
            $("#ticket_" + c0 + "_" + c1 + "_" + cY + "_train>span>b").attr("title", "查看票价");
            $("#ticket_" + c0 + "_" + c1 + "_" + cY + "_train>span>b").removeClass();
            $("#price_" + c0 + "_" + c1 + "_" + cY).html("");
            $("#price_" + c0 + "_" + c1 + "_" + cY).hide()
        }
    }
    ;
    function co(cV) {
        if (aN == "starttime") {
            return cV.sort(function(cX, cW) {
                var cZ = Number(cX.queryLeftNewDTO.start_time.replace(":", ""));
                var cY = Number(cW.queryLeftNewDTO.start_time.replace(":", ""));
                if (cZ > cY) {
                    return bp ? 1 : -1
                } else {
                    return bp ? -1 : 1
                }
            })
        } else {
            if (aN == "arrivedtime") {
                return cV.sort(function(cX, cW) {
                    var cZ = Number(cX.queryLeftNewDTO.arrive_time.replace(":", ""));
                    var cY = Number(cW.queryLeftNewDTO.arrive_time.replace(":", ""));
                    if (cZ > cY) {
                        return cz ? 1 : -1
                    } else {
                        return cz ? -1 : 1
                    }
                })
            } else {
                if (aN == "lishi") {
                    return cV.sort(function(cX, cW) {
                        var cZ = Number(cX.queryLeftNewDTO.lishi.replace(":", ""));
                        var cY = Number(cW.queryLeftNewDTO.lishi.replace(":", ""));
                        if (cZ > cY) {
                            return bk ? 1 : -1
                        } else {
                            return bk ? -1 : 1
                        }
                    })
                }
            }
        }
        return cV
    }
    function bJ(cV) {
        if (aN == "starttime") {
            return cV.sort(function(cX, cW) {
                var cZ = Number("" + cX.queryLeftNewDTO.start_time.replace(":", "") + cX.queryLeftNewDTO.arrive_time.replace(":", ""));
                var cY = Number("" + cW.queryLeftNewDTO.start_time.replace(":", "") + cW.queryLeftNewDTO.arrive_time.replace(":", ""));
                if (cZ > cY) {
                    return bp ? 1 : -1
                } else {
                    return bp ? -1 : 1
                }
            })
        } else {
            if (aN == "arrivedtime") {
                return cV.sort(function(cX, cW) {
                    var cZ = Number("" + cX.queryLeftNewDTO.arrive_time.replace(":", "") + cX.queryLeftNewDTO.start_time.replace(":", ""));
                    var cY = Number("" + cW.queryLeftNewDTO.arrive_time.replace(":", "") + cW.queryLeftNewDTO.start_time.replace(":", ""));
                    if (cZ > cY) {
                        return cz ? 1 : -1
                    } else {
                        return cz ? -1 : 1
                    }
                })
            }
        }
        return cV
    }
    function aP() {
        $("#s_time").click(function() {
            if (bp) {
                $("#s_time").removeClass().addClass("b4");
                if ($("#r_time").attr("class") == "b4") {
                    $("#r_time").removeClass().addClass("b2")
                } else {
                    if ($("#r_time").attr("class") == "b3") {
                        $("#r_time").removeClass().addClass("b1")
                    }
                }
                if ($("#l_s").attr("class") == "b4") {
                    $("#l_s").removeClass().addClass("b2")
                } else {
                    if ($("#l_s").attr("class") == "b3") {
                        $("#l_s").removeClass().addClass("b1")
                    }
                }
                bp = false;
                $("#other_span_starttime").removeClass().addClass("b4");
                if ($("#other_span_endtime").attr("class") == "b4") {
                    $("#other_span_endtime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_endtime").attr("class") == "b3") {
                        $("#other_span_endtime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_lishi").attr("class") == "b4") {
                    $("#other_span_lishi").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_lishi").attr("class") == "b3") {
                        $("#other_span_lishi").removeClass().addClass("b1")
                    }
                }
            } else {
                $("#s_time").removeClass().addClass("b3");
                if ($("#r_time").attr("class") == "b4") {
                    $("#r_time").removeClass().addClass("b2")
                } else {
                    if ($("#r_time").attr("class") == "b3") {
                        $("#r_time").removeClass().addClass("b1")
                    }
                }
                if ($("#l_s").attr("class") == "b4") {
                    $("#l_s").removeClass().addClass("b2")
                } else {
                    if ($("#l_s").attr("class") == "b3") {
                        $("#l_s").removeClass().addClass("b1")
                    }
                }
                bp = true;
                $("#other_span_starttime").removeClass().addClass("b3");
                if ($("#other_span_endtime").attr("class") == "b4") {
                    $("#other_span_endtime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_endtime").attr("class") == "b3") {
                        $("#other_span_endtime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_lishi").attr("class") == "b4") {
                    $("#other_span_lishi").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_lishi").attr("class") == "b3") {
                        $("#other_span_lishi").removeClass().addClass("b1")
                    }
                }
            }
            aN = "starttime";
            aZ()
        });
        $("#other_span_starttime").click(function() {
            if (bp) {
                $("#s_time").removeClass().addClass("b4");
                if ($("#r_time").attr("class") == "b4") {
                    $("#r_time").removeClass().addClass("b2")
                } else {
                    if ($("#r_time").attr("class") == "b3") {
                        $("#r_time").removeClass().addClass("b1")
                    }
                }
                if ($("#l_s").attr("class") == "b4") {
                    $("#l_s").removeClass().addClass("b2")
                } else {
                    if ($("#l_s").attr("class") == "b3") {
                        $("#l_s").removeClass().addClass("b1")
                    }
                }
                bp = false;
                $("#other_span_starttime").removeClass().addClass("b4");
                if ($("#other_span_endtime").attr("class") == "b4") {
                    $("#other_span_endtime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_endtime").attr("class") == "b3") {
                        $("#other_span_endtime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_lishi").attr("class") == "b4") {
                    $("#other_span_lishi").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_lishi").attr("class") == "b3") {
                        $("#other_span_lishi").removeClass().addClass("b1")
                    }
                }
            } else {
                $("#s_time").removeClass().addClass("b3");
                if ($("#r_time").attr("class") == "b4") {
                    $("#r_time").removeClass().addClass("b2")
                } else {
                    if ($("#r_time").attr("class") == "b3") {
                        $("#r_time").removeClass().addClass("b1")
                    }
                }
                if ($("#l_s").attr("class") == "b4") {
                    $("#l_s").removeClass().addClass("b2")
                } else {
                    if ($("#l_s").attr("class") == "b3") {
                        $("#l_s").removeClass().addClass("b1")
                    }
                }
                bp = true;
                $("#other_span_starttime").removeClass().addClass("b3");
                if ($("#other_span_endtime").attr("class") == "b4") {
                    $("#other_span_endtime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_endtime").attr("class") == "b3") {
                        $("#other_span_endtime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_lishi").attr("class") == "b4") {
                    $("#other_span_lishi").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_lishi").attr("class") == "b3") {
                        $("#other_span_lishi").removeClass().addClass("b1")
                    }
                }
            }
            aN = "starttime";
            aZ()
        });
        $("#r_time").click(function() {
            if (cz) {
                $("#r_time").removeClass().addClass("b4");
                if ($("#s_time").attr("class") == "b4") {
                    $("#s_time").removeClass().addClass("b2")
                } else {
                    if ($("#s_time").attr("class") == "b3") {
                        $("#s_time").removeClass().addClass("b1")
                    }
                }
                if ($("#l_s").attr("class") == "b4") {
                    $("#l_s").removeClass().addClass("b2")
                } else {
                    if ($("#l_s").attr("class") == "b3") {
                        $("#l_s").removeClass().addClass("b1")
                    }
                }
                cz = false;
                $("#other_span_starttime").removeClass().addClass("b4");
                $("#other_span_endtime").removeClass().addClass("b2");
                $("#other_span_lishi").removeClass().addClass("b2")
            } else {
                $("#r_time").removeClass().addClass("b3");
                if ($("#s_time").attr("class") == "b4") {
                    $("#s_time").removeClass().addClass("b2")
                } else {
                    if ($("#s_time").attr("class") == "b3") {
                        $("#s_time").removeClass().addClass("b1")
                    }
                }
                if ($("#l_s").attr("class") == "b4") {
                    $("#l_s").removeClass().addClass("b2")
                } else {
                    if ($("#l_s").attr("class") == "b3") {
                        $("#l_s").removeClass().addClass("b1")
                    }
                }
                cz = true;
                $("#other_span_endtime").removeClass().addClass("b2");
                if ($("#other_span_starttime").attr("class") == "b4") {
                    $("#other_span_starttime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_starttime").attr("class") == "b3") {
                        $("#other_span_starttime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_lishi").attr("class") == "b4") {
                    $("#other_span_lishi").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_lishi").attr("class") == "b3") {
                        $("#other_span_lishi").removeClass().addClass("b1")
                    }
                }
            }
            aN = "arrivedtime";
            aZ()
        });
        $("#other_span_endtime").click(function() {
            if (cz) {
                $("#r_time").removeClass().addClass("b4");
                if ($("#s_time").attr("class") == "b4") {
                    $("#s_time").removeClass().addClass("b2")
                } else {
                    if ($("#s_time").attr("class") == "b3") {
                        $("#s_time").removeClass().addClass("b1")
                    }
                }
                if ($("#l_s").attr("class") == "b4") {
                    $("#l_s").removeClass().addClass("b2")
                } else {
                    if ($("#l_s").attr("class") == "b3") {
                        $("#l_s").removeClass().addClass("b1")
                    }
                }
                cz = false;
                $("#other_span_endtime").removeClass().addClass("b4");
                if ($("#other_span_starttime").attr("class") == "b4") {
                    $("#other_span_starttime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_starttime").attr("class") == "b3") {
                        $("#other_span_starttime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_lishi").attr("class") == "b4") {
                    $("#other_span_lishi").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_lishi").attr("class") == "b3") {
                        $("#other_span_lishi").removeClass().addClass("b1")
                    }
                }
            } else {
                $("#r_time").removeClass().addClass("b3");
                if ($("#s_time").attr("class") == "b4") {
                    $("#s_time").removeClass().addClass("b2")
                } else {
                    if ($("#s_time").attr("class") == "b3") {
                        $("#s_time").removeClass().addClass("b1")
                    }
                }
                if ($("#l_s").attr("class") == "b4") {
                    $("#l_s").removeClass().addClass("b2")
                } else {
                    if ($("#l_s").attr("class") == "b3") {
                        $("#l_s").removeClass().addClass("b1")
                    }
                }
                cz = true;
                $("#other_span_endtime").removeClass().addClass("b3");
                if ($("#other_span_starttime").attr("class") == "b4") {
                    $("#other_span_starttime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_starttime").attr("class") == "b3") {
                        $("#other_span_starttime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_lishi").attr("class") == "b4") {
                    $("#other_span_lishi").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_lishi").attr("class") == "b3") {
                        $("#other_span_lishi").removeClass().addClass("b1")
                    }
                }
            }
            aN = "arrivedtime";
            aZ()
        });
        $("#l_s").click(function() {
            if (bk) {
                $("#l_s").removeClass().addClass("b4");
                if ($("#r_time").attr("class") == "b4") {
                    $("#r_time").removeClass().addClass("b2")
                } else {
                    if ($("#r_time").attr("class") == "b3") {
                        $("#r_time").removeClass().addClass("b1")
                    }
                }
                if ($("#s_time").attr("class") == "b4") {
                    $("#s_time").removeClass().addClass("b2")
                } else {
                    if ($("#s_time").attr("class") == "b3") {
                        $("#s_time").removeClass().addClass("b1")
                    }
                }
                bk = false;
                $("#other_span_lishi").removeClass().addClass("b4");
                if ($("#other_span_endtime").attr("class") == "b4") {
                    $("#other_span_endtime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_endtime").attr("class") == "b3") {
                        $("#other_span_endtime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_starttime").attr("class") == "b4") {
                    $("#other_span_starttime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_starttime").attr("class") == "b3") {
                        $("#other_span_starttime").removeClass().addClass("b1")
                    }
                }
            } else {
                $("#l_s").removeClass().addClass("b3");
                if ($("#r_time").attr("class") == "b4") {
                    $("#r_time").removeClass().addClass("b2")
                } else {
                    if ($("#r_time").attr("class") == "b3") {
                        $("#r_time").removeClass().addClass("b1")
                    }
                }
                if ($("#s_time").attr("class") == "b4") {
                    $("#s_time").removeClass().addClass("b2")
                } else {
                    if ($("#s_time").attr("class") == "b3") {
                        $("#s_time").removeClass().addClass("b1")
                    }
                }
                bk = true;
                $("#other_span_lishi").removeClass().addClass("b3");
                if ($("#other_span_endtime").attr("class") == "b4") {
                    $("#other_span_endtime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_endtime").attr("class") == "b3") {
                        $("#other_span_endtime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_starttime").attr("class") == "b4") {
                    $("#other_span_starttime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_starttime").attr("class") == "b3") {
                        $("#other_span_starttime").removeClass().addClass("b1")
                    }
                }
            }
            aN = "lishi";
            aZ()
        });
        $("#other_span_lishi").click(function() {
            if (bk) {
                $("#l_s").removeClass().addClass("b4");
                if ($("#r_time").attr("class") == "b4") {
                    $("#r_time").removeClass().addClass("b2")
                } else {
                    if ($("#r_time").attr("class") == "b3") {
                        $("#r_time").removeClass().addClass("b1")
                    }
                }
                if ($("#s_time").attr("class") == "b4") {
                    $("#s_time").removeClass().addClass("b2")
                } else {
                    if ($("#s_time").attr("class") == "b3") {
                        $("#s_time").removeClass().addClass("b1")
                    }
                }
                bk = false;
                $("#other_span_lishi").removeClass().addClass("b4");
                if ($("#other_span_endtime").attr("class") == "b4") {
                    $("#other_span_endtime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_endtime").attr("class") == "b3") {
                        $("#other_span_endtime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_starttime").attr("class") == "b4") {
                    $("#other_span_starttime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_starttime").attr("class") == "b3") {
                        $("#other_span_starttime").removeClass().addClass("b1")
                    }
                }
            } else {
                $("#l_s").removeClass().addClass("b3");
                if ($("#r_time").attr("class") == "b4") {
                    $("#r_time").removeClass().addClass("b2")
                } else {
                    if ($("#r_time").attr("class") == "b3") {
                        $("#r_time").removeClass().addClass("b1")
                    }
                }
                if ($("#s_time").attr("class") == "b4") {
                    $("#s_time").removeClass().addClass("b2")
                } else {
                    if ($("#s_time").attr("class") == "b3") {
                        $("#s_time").removeClass().addClass("b1")
                    }
                }
                bk = true;
                $("#other_span_lishi").removeClass().addClass("b3");
                if ($("#other_span_endtime").attr("class") == "b4") {
                    $("#other_span_endtime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_endtime").attr("class") == "b3") {
                        $("#other_span_endtime").removeClass().addClass("b1")
                    }
                }
                if ($("#other_span_starttime").attr("class") == "b4") {
                    $("#other_span_starttime").removeClass().addClass("b2")
                } else {
                    if ($("#other_span_starttime").attr("class") == "b3") {
                        $("#other_span_starttime").removeClass().addClass("b1")
                    }
                }
            }
            aN = "lishi";
            aZ()
        })
    }
    closeTrainStop = function() {
        over_flag = false;
        cw = 0;
        $("#train_stop").hide();
        $("#train_table").html("")
    }
    ;
    hideTrainStop = function(cV) {
        over_flag = false;
        if (t) {
            clearTimeout(t)
        }
        t = window.setTimeout(function() {
            if (cw != 1) {
                cw = 0;
                $("#train_stop").hide();
                $("#train_table").html("")
            }
        }, 130)
    }
    ;
    checkHover = function(cW, cV) {
        if (getEvent(cW).type == "mouseover") {
            return !$.contains(cV, getEvent(cW).relatedTarget || getEvent(cW).fromElement) && !((getEvent(cW).relatedTarget || getEvent(cW).fromElement) === cV)
        } else {
            return !$.contains(cV, getEvent(cW).relatedTarget || getEvent(cW).toElement) && !((getEvent(cW).relatedTarget || getEvent(cW).toElement) === cV)
        }
    }
    ;
    getEvent = function(cV) {
        return cV || window.event
    }
    ;
    checkHover = function(cW, cV) {
        if (getEvent(cW).type == "mouseover") {
            return !$.contains(cV, getEvent(cW).relatedTarget || getEvent(cW).fromElement) && !((getEvent(cW).relatedTarget || getEvent(cW).fromElement) === cV)
        } else {
            return !$.contains(cV, getEvent(cW).relatedTarget || getEvent(cW).toElement) && !((getEvent(cW).relatedTarget || getEvent(cW).toElement) === cV)
        }
    }
    ;
    getEvent = function(cV) {
        return cV || window.event
    }
    ;
    function b6(cX, cV) {
        for (var cW = 0; cW < cV.length; cW++) {
            if (cV[cW].key == cX) {
                return true
            }
        }
        return false
    }
    function bO(cZ) {
        var c4 = function(c5) {
            this.value = c5
        };
        var c0 = new Array();
        var cW = new Array();
        var cY = {};
        var cV = {};
        $("#cc_from_station_name_all>ul").html("");
        $("#cc_to_station_name_all>ul").html("");
        var cX;
        var c3;
        var c2;
        for (var c1 = 0; c1 < cZ.length; c1++) {
            cX = cZ[c1].queryLeftNewDTO.from_station_name;
            c3 = cZ[c1].queryLeftNewDTO.to_station_name;
            c2 = cZ[c1];
            if (!cY[cX]) {
                c0.push(new c4(cX));
                cY[cX] = true
            }
            if (!cV[c3]) {
                cW.push(new c4(c3));
                cV[c3] = true
            }
        }
        $("#to_station_ul").html($.render.toStationNameTableTemplate(cW));
        $("#from_station_ul").html($.render.stationNameTableTemplate(c0));
        $("#sear-sel-bd input[name='cc_from_station']").click(function() {
            n(b7, "cc_from_station_" + $(this).val());
            var c5 = $("input[name='cc_from_station']");
            var c6 = $("input[name='cc_from_station']:checked");
            if ($(this).is(":checked")) {
                if (c5 && c6 && c6.length == c5.length) {
                    $("#from_station_name_all").removeClass().addClass("btn-all")
                } else {
                    $("#from_station_name_all").removeClass().addClass("btn-all btn-all-sel")
                }
            } else {
                if (c5 && c6 && c6.length == 0) {
                    $("#from_station_name_all").removeClass().addClass("btn-all")
                } else {
                    $("#from_station_name_all").removeClass().addClass("btn-all btn-all-sel")
                }
            }
            aZ()
        });
        $("#sear-sel-bd input[name='cc_to_station']").click(function() {
            n(bR, "cc_to_station_" + $(this).val());
            var c5 = $("input[name='cc_to_station']");
            var c6 = $("input[name='cc_to_station']:checked");
            if ($(this).is(":checked")) {
                if (c5 && c6 && c6.length == c5.length) {
                    $("#to_station_name_all").removeClass().addClass("btn-all")
                } else {
                    $("#to_station_name_all").removeClass().addClass("btn-all btn-all-sel")
                }
            } else {
                if (c5 && c6 && c6.length == 0) {
                    $("#to_station_name_all").removeClass().addClass("btn-all")
                } else {
                    $("#to_station_name_all").removeClass().addClass("btn-all btn-all-sel")
                }
            }
            aZ()
        })
    }
    submitOrderRequest = function(cW, cV) {
        $.ajax({
            type: "post",
            url: ctx + "login/checkUser",
            data: {},
            beforeSend: function(cX) {
                cX.setRequestHeader("If-Modified-Since", "0");
                cX.setRequestHeader("Cache-Control", "no-cache")
            },
            success: function(cX) {
                var c0;
                checkusermdId = cX.attributes;
                if (cX.data.flag) {
                    if (train_tour_flag == "fc") {
                        c0 = $("#back_train_date").val()
                    } else {
                        c0 = $("#train_date").val()
                    }
                    if (D == "0X00") {
                        var cZ = false;
                        for (i = (studentComPerArr.length - 1); i >= 0; i = i - 2) {
                            if (I(studentComPerArr[i - 1]) <= I(c0) && I(studentComPerArr[i]) >= I(c0)) {
                                cZ = true;
                                break
                            }
                        }
                        if (!cZ) {
                            b("学生票的乘车时间为每年的暑假6月1日至9月30日、寒假12月1日至3月31日，目前不办理学生票业务。");
                            return
                        }
                    }
                    var cY = $("#fromStation").val();
                    if (cY && cY == "XJA") {
                        dhtmlx.alert({
                            title: "温馨提示",
                            ok: "确定",
                            text: "香港西九龙站乘车前需办理换取纸质车票、实名制验证、安全检查和出入境手续，请您预留足够时间，合理规划行程。",
                            type: "alert-warn",
                            callback: function() {
                                ad(cW, cV)
                            }
                        })
                    } else {
                        ad(cW, cV)
                    }
                } else {
                    $(".mask").fadeIn();
                    $(".login-box .login-hd-code").addClass("active").siblings().removeClass("active");
                    $(".login-box .login-code").show().siblings().hide();
                    $(".login-box").slide({
                        titCell: ".login-hd li",
                        mainCell: ".login-bd",
                        titOnClassName: "active",
                        trigger: "click",
                    });
                    $(".modal-login").css("top", ($(window).height() - $(".modal-login").height()) / 2 + $(window).scrollTop() + "px").css("left", ($(window).width() - $(".modal-login").width()) / 2 + $(window).scrollLeft() + "px").show();
                    $.popup_initLogin(true);
                    $(".modal-login").show();
                    $(".modal-login").focus();
                    $.pop_secretStr = cW;
                    $.pop_start_time = cV
                }
            }
        })
    }
    ;
    function ad(c8, c1) {
        var cV = "";
        if ($("#dc").is(":checked")) {
            cV = "dc"
        } else {
            cV = "wc"
        }
        if (train_tour_flag == "fc") {
            cV = "fc";
            var cY = c1.split(":");
            var cX = $("#back_train_date").val() + "-" + cY[0] + "-" + cY[1] + "-00";
            try {
                if (roundReferTime) {
                    if (I(roundReferTime) >= I(cX)) {
                        b("您预订的往程车票到站时间为" + I(roundReferTime).format("yyyy年MM月dd日 hh时mm分") + "，返回日期不能早于此时间");
                        return
                    }
                }
            } catch (c3) {}
        }
        if (train_tour_flag == "gc") {
            cV = "gc"
        }
        if ("undefined" == typeof (submitForm)) {
            var cZ = "secretStr=" + c8 + "&train_date=" + $("#train_date").val() + "&back_train_date=" + $("#back_train_date").val() + "&tour_flag=" + cV + "&purpose_codes=" + cP() + "&query_from_station_name=" + $("#fromStationText").val() + "&query_to_station_name=" + $("#toStationText").val() + "&" + c6
        } else {
            var cW = submitForm();
            var c7 = cW.split(":::");
            var c2 = c7[0].split(",-,")[0];
            var c5 = c7[0].split(",-,")[1];
            var c0 = c7[1].split(",-,")[0];
            var c4 = c7[1].split(",-,")[1];
            var cZ = escape(c2) + "=" + escape(c5) + "&" + c0 + "=" + c4 + "&secretStr=" + c8 + "&train_date=" + $("#train_date").val() + "&back_train_date=" + $("#back_train_date").val() + "&tour_flag=" + cV + "&purpose_codes=" + cP() + "&query_from_station_name=" + $("#fromStationText").val() + "&query_to_station_name=" + $("#toStationText").val() + "&" + c6
        }
        var c6 = checkusermdId != undefined ? "&_json_att=" + encodeURIComponent(checkusermdId) : "";
        $.ajax({
            type: "post",
            url: ctx + "leftTicket/submitOrderRequest",
            data: cZ,
            async: false,
            success: function(c9) {
                if (c9.status) {
                    if (c9.data == "1") {
                        dhtmlx.alert({
                            title: "温馨提示",
                            ok: "确定",
                            text: "您选择的列车距开车时间很近了，请确保有足够的时间办理安全检查、实名制验证及检票等手续，以免耽误您的旅行。",
                            type: "alert-warn",
                            callback: function() {
                                bi(cV, train_tour_flag)
                            }
                        })
                    } else {
                        if (c9.data.substring(0, 1) == "2") {
                            var da = c9.data.substring(1);
                            dhtmlx.alert({
                                title: "温馨提示",
                                ok: "确定",
                                text: "您选择的列车距开车时间很近了，进站约需" + da + "分钟，请确保有足够的时间办理安全检查、实名制验证及检票等手续，以免耽误您的旅行。",
                                type: "alert-warn",
                                callback: function() {
                                    bi(cV, train_tour_flag)
                                }
                            })
                        } else {
                            bi(cV, train_tour_flag)
                        }
                    }
                }
            }
        })
    }
    function bi(cW, cV) {
        if (cV != null) {
            if (cV == "fc") {
                otsRedirect("post", ctx + "confirmPassenger/initFc", {});
                return
            }
            if (cV == "gc") {
                otsRedirect("post", ctx + "confirmPassenger/initGc", {});
                return
            }
        }
        if (cW == "dc") {
            otsRedirect("post", ctx + "confirmPassenger/initDc", {});
            return
        } else {
            otsRedirect("post", ctx + "confirmPassenger/initWc", {})
        }
    }
    var cQ = $("#fromStation").val();
    var bD = $("#toStation").val();
    var ct = $.trim($("#train_date").val());
    bv = cQ + bD + ct;
    $("#add-train").click(function() {
        if ($("#fromStationText").val() == "简拼/全拼/汉字") {
            dhtmlx.alert({
                title: "输入车次",
                ok: "确定",
                text: "请填写出发地！",
                type: "alert-error"
            });
            return
        }
        if ($("#toStationText").val() == "简拼/全拼/汉字") {
            dhtmlx.alert({
                title: "输入车次",
                ok: "确定",
                text: "请填写目的地！",
                type: "alert-error"
            });
            return
        }
        var cY = $('#prior_train span[name="prior_train-span"]').length;
        var cZ = $.trim($("#inp-train").val()).toUpperCase();
        if (cZ.length == 0 || cZ == "请输入") {
            dhtmlx.alert({
                title: "输入车次",
                ok: "确定",
                text: "请输入车次",
                type: "alert-error",
                callback: function() {
                    $("#inp-train").val("");
                    $("#inp-train").focus()
                }
            })
        } else {
            if (cY < 6) {
                var cW = /^[a-zA-Z0-9]+$/;
                var cX = /^[0-9]+$/;
                if (!cW.test(cZ)) {
                    dhtmlx.alert({
                        title: "输入车次",
                        ok: "确定",
                        text: "车次格式输入错误！",
                        type: "alert-error",
                        callback: function() {
                            ccInputSelected = true;
                            $("#inp-train").select()
                        }
                    })
                } else {
                    if (cX.test(cZ) && cZ.length > 4) {
                        dhtmlx.alert({
                            title: "输入车次",
                            ok: "确定",
                            text: "车次格式输入错误！",
                            type: "alert-error",
                            callback: function() {
                                ccInputSelected = true;
                                $("#inp-train").select()
                            }
                        })
                    } else {
                        if (cZ.length < 2) {
                            dhtmlx.alert({
                                title: "输入车次",
                                ok: "确定",
                                text: "车次格式输入错误！",
                                type: "alert-error",
                                callback: function() {
                                    ccInputSelected = true;
                                    $("#inp-train").select()
                                }
                            })
                        } else {
                            if ($.inArray(cZ, ccSelected) < 0) {
                                var cV = "<span name='prior_train-span' class='sel-box w80'>" + cZ + "<a class='close' href='javascript:' onclick='$.removeSel(this,\"" + cZ + "\",4)'></a></span>";
                                $("#prior_train").append(cV);
                                ccSelected.push(cZ);
                                $("#inp-train").val("")
                            } else {
                                dhtmlx.alert({
                                    title: "输入车次",
                                    ok: "确定",
                                    text: "此车次已经添加过！",
                                    type: "alert-error",
                                    callback: function() {
                                        ccInputSelected = true;
                                        $("#inp-train").select()
                                    }
                                })
                            }
                        }
                    }
                }
            } else {
                dhtmlx.alert({
                    title: "输入车次",
                    ok: "确定",
                    text: "最多添加5个优先车次",
                    type: "alert-error"
                });
                $("#inp-train").val("")
            }
        }
    });
    function cP() {
        if ($("#sf2").is(":checked")) {
            if ("Y" == login_isDisable) {
                return "0X1C"
            } else {
                return "0X00"
            }
        } else {
            if ("Y" == login_isDisable) {
                return "1C"
            } else {
                return "ADULT"
            }
        }
    }
    $("#yxtrain_close").click(function(cV) {
        $("#yxtraindiv").hide()
    });
    $("#yxtrain_a_close").click(function(cV) {
        $("#yxtraininput").val("");
        $("#yxtraininput").trigger("keyup")
    });
    $("#passenger_a_close").click(function(cV) {
        $("#searchPassenger").val("");
        $("#searchPassenger").trigger("keyup")
    });
    $("#yxtraininput").bind("keyup", function() {
        var cW = $(this).val().toUpperCase();
        var cV = $("#yxtrain_code").height();
        if (A(cW, 0)) {
            cU(1)
        } else {
            cU(3)
        }
        $("#yxtrain_code").css("height", cV)
    });
    function cU(cV) {
        $("#yxtrain_loading").hide();
        $("#yxtrain_code").hide();
        $("#yxTrain_page").hide();
        $("#yxtrain_empty").hide();
        if (1 == cV) {
            $("#yxtrain_code").show();
            $("#yxTrain_page").show()
        } else {
            if (2 == cV) {
                $("#yxtrain_loading").show()
            } else {
                if (3 == cV) {
                    $("#yxtrain_empty").show()
                }
            }
        }
    }
    function A(c9, cV) {
        c9 = c9.toUpperCase();
        var c5 = [];
        var da = $("#prior_train span:gt(1)");
        if (da && da.length > 0) {
            for (var cY = 0; cY < da.length; cY++) {
                c5.push(da[cY].innerText)
            }
        }
        var c8 = [];
        var c4 = [];
        if (trainListForIE && trainListForIE.length > 0) {
            for (var cW = 0; cW < trainListForIE.length; cW++) {
                c8.push(trainListForIE[cW]);
                c4.push(trainListForIE[cW])
            }
        }
        if (c9) {
            for (var cY = 0; cY < c4.length; cY++) {
                var c3 = c4[cY].substring(0, c4[cY].indexOf("("));
                if (c3.indexOf(c9) <= -1) {
                    c8.splice($.inArray(c4[cY], c8), 1)
                }
            }
        }
        if (c8 && c8.length > 0) {
            var c0 = "";
            for (var cY = 0; cY < c8.length; cY++) {
                var c3 = c8[cY];
                var cZ = c3.indexOf("(") > -1 ? c3.substring(0, c3.indexOf("(")) : c3;
                var c6 = cY >= yxTrainPageSize * (cV) && cY < yxTrainPageSize * (cV + 1);
                if (c6) {
                    if (cZ.indexOf(c9) > -1) {
                        var c2 = c3.indexOf(c9);
                        var c1 = c3.substring(0, c2);
                        var c7 = c3.substring(c2 + c9.length, c3.indexOf("("));
                        var cX = c3.substring(c3.indexOf("("));
                        if (c5 && c5.length > 0 && $.inArray(cZ, c5) > -1) {
                            c0 += '<li style="width: 140px;" traincode=' + cZ + ' name="yxtrainli" class="cur"><span style="font-size:15px;">' + c1 + '<span style="color:red;">' + c9 + "</span>" + c7 + "</span>" + cX + "</li>"
                        } else {
                            c0 += '<li style="width: 140px;" traincode=' + cZ + ' name="yxtrainli"><span style="font-size:15px;">' + c1 + '<span style="color:red;">' + c9 + "</span>" + c7 + "</span>" + cX + "</li>"
                        }
                    }
                }
            }
            $("#yxtrain_code").html(c0)
        } else {
            return false
        }
        if (c8.length > 0) {
            L(cV, c8.length)
        }
        $('li[name="yxtrainli"]').click(function() {
            if ($(this).attr("class") == "cur") {
                var dd = $('span[name="prior_train-span"]');
                for (var db = 0; db < dd.length; db++) {
                    var dc = $(dd[db]).html();
                    if (dc.indexOf($(this).attr("traincode")) > -1) {
                        $(dd[db]).children().click()
                    }
                }
                $(this).removeClass()
            } else {
                $("#inp-train").val($(this).attr("traincode"));
                var de = $('#prior_train span[name="prior_train-span"]').length;
                $("#add-train").click();
                if (de < 6) {
                    $(this).attr("class", "cur");
                    $.chooseAutoSubmit()
                }
            }
        });
        return true
    }
    function L(cV, cW) {
        var cX = Math.ceil(cW / yxTrainPageSize);
        $("#yxTrain_page").html(aV(cV, cX)).show()
    }
    function aV(c3, cY) {
        var cZ = "";
        cZ += (c3 == 0) ? "" : '<a href="javascript:void(0);" onclick="$.click_YX_page(' + (c3 - 1) + ')" class="prev">上一页</a>';
        var c4 = c3 + 1;
        var c0 = cY;
        var c1 = 2;
        var c2 = 5;
        var cV = (c4 - c1) > 0 ? (c4 + c1 > c0 ? c0 - c2 + 1 : c4 - c1) : 1;
        var cW = cV + c2 > c0 ? c0 + 1 : cV + c2;
        if (c0 < c2) {
            for (var cX = 1; cX < c0 + 1; cX++) {
                if (c4 == cX) {
                    cZ += '<a href="javascript:void(0);" onclick="$.click_YX_page(' + (cX - 1) + ')" class="on">' + (cX) + "</a>"
                } else {
                    cZ += '<a href="javascript:void(0);" onclick="$.click_YX_page(' + (cX - 1) + ')">' + (cX) + "</a>"
                }
            }
        } else {
            for (var cX = cV; cX < cW; cX++) {
                if (c4 == cX) {
                    cZ += '<a href="javascript:void(0);" onclick="$.click_YX_page(' + (cX - 1) + ')" class="on">' + (cX) + "</a>"
                } else {
                    cZ += '<a href="javascript:void(0);" onclick="$.click_YX_page(' + (cX - 1) + ')">' + (cX) + "</a>"
                }
            }
        }
        cZ += (c3 == cY - 1) ? "" : '<a href="javascript:void(0);" onclick="$.click_YX_page(' + (c3 + 1) + ')" class="next">下一页</a>';
        return cZ
    }
    function bu(c3, cY) {
        if (cY == 0) {
            return ""
        }
        var cZ = "";
        cZ += (c3 == 0) ? "" : '<a href="javascript:void(0);" onclick="$.click_passenger_page(' + (c3 - 1) + ')" class="prev">上一页</a>';
        var c4 = c3 + 1;
        var c0 = cY;
        var c1 = 2;
        var c2 = 5;
        var cV = (c4 - c1) > 0 ? (c4 + c1 > c0 ? c0 - c2 + 1 : c4 - c1) : 1;
        var cW = cV + c2 > c0 ? c0 + 1 : cV + c2;
        if (c0 < c2) {
            for (var cX = 1; cX < c0 + 1; cX++) {
                if (c4 == cX) {
                    cZ += '<a href="javascript:void(0);" onclick="$.click_passenger_page(' + (cX - 1) + ')" class="on">' + (cX) + "</a>"
                } else {
                    cZ += '<a href="javascript:void(0);" onclick="$.click_passenger_page(' + (cX - 1) + ')">' + (cX) + "</a>"
                }
            }
        } else {
            for (var cX = cV; cX < cW; cX++) {
                if (c4 == cX) {
                    cZ += '<a href="javascript:void(0);" onclick="$.click_passenger_page(' + (cX - 1) + ')" class="on">' + (cX) + "</a>"
                } else {
                    cZ += '<a href="javascript:void(0);" onclick="$.click_passenger_page(' + (cX - 1) + ')">' + (cX) + "</a>"
                }
            }
        }
        cZ += (c3 == cY - 1) ? "" : '<a href="javascript:void(0);" onclick="$.click_passenger_page(' + (c3 + 1) + ')" class="next">下一页</a>';
        return cZ
    }
    jQuery.extend({
        todo_submitOrderRe: function(cW, cV) {
            ad(cW, cV)
        },
        chooseAutoSubmit: function() {
            if (!$("#autoSubmit").is(":disabled")) {
                if (!$("#autoSubmit").is(":checked")) {
                    $("#autoSubmit").click()
                }
            }
        },
        init_ul4li: function() {
            var cV = [];
            var cX = 0;
            cV[cX++] = '<li><input name="cc_type" value="G" type="checkbox" class="check" /><label for="">GC-高铁/城际</label></li>';
            cV[cX++] = '<li><input name="cc_type" value="D" type="checkbox" class="check" /><label for="">D-动车</label></li>';
            cV[cX++] = '<li><input name="cc_type" value="Z" type="checkbox" class="check" /><label for="">Z-直达</label></li>';
            cV[cX++] = '<li><input name="cc_type" value="T" type="checkbox" class="check" /><label for="">T-特快</label></li>';
            cV[cX++] = '<li><input name="cc_type" value="K" type="checkbox" class="check" /><label for="">K-快速</label></li>';
            cV[cX++] = '<li><input name="cc_type" value="QT" type="checkbox" class="check" /><label for="">其他</label></li>';
            cV[cX++] = '<li><input name="cc_type" value="复" type="checkbox" class="check" /><label for="">复兴号</label></li>';
            cV[cX++] = '<li><input name="cc_type" value="智" type="checkbox" class="check" /><label for="">智能动车组</label></li>';
            $("#_ul_station_train_code").html(cV.join(""));
            if (train_tour_flag == "gc" && "Y" == isDwTicketResign) {
                var cZ = $("#_ul_station_train_code li");
                for (var cW = 2, cY = cZ.length; cW < cY; cW++) {
                    cZ.eq(cW).find("input").attr("disabled", "disabled");
                    cZ.eq(cW).find("label").attr("for", "").attr("style", "color: rgb(153, 153, 153)")
                }
            }
            $("#startendtime").html('<span class="b1" id="s_time">出发时间</span><br /><span class="b2" id="r_time">到达时间</span>');
            $("#floatstartendtime").html('<span class="b1" id="other_span_starttime">出发时间</span><br /><span class="b2" id="other_span_endtime">到达时间</span>')
        },
        parseDateFormat: function(cZ) {
            var cV = "";
            var cW = cZ.getFullYear();
            var cY = cZ.getMonth() + 1;
            var cX = cZ.getDate();
            if (cY < 10) {
                cY = "0" + cY
            }
            if (cX < 10) {
                cX = "0" + cX
            }
            cV = cW + "-" + cY + "-" + cX;
            return cV
        },
        renderPassenger: function(dd) {
            if (!dd) {
                dd = 0
            }
            if (passengerAll) {
                var cZ = $("#searchPassenger").val();
                var cV = [];
                if (cZ != "" && cZ != "输入乘客姓名") {
                    var db = passengerAll.length;
                    for (var c8 = 0; c8 < db; c8++) {
                        var c7 = passengerAll[c8];
                        if (c7.passenger_name.indexOf(cZ) > -1 || (c7.first_letter && c7.first_letter.toUpperCase().indexOf(cZ.toUpperCase()) > -1)) {
                            cV.push(c7)
                        }
                    }
                } else {
                    cV = passengerAll.slice(passengerPageSize * (dd), Math.min(passengerPageSize * (dd + 1), passengerAll.length))
                }
                var c6 = cV.length;
                var c4 = [];
                var c0 = 0;
                for (var c8 = 0; c8 < c6; c8++) {
                    var c7 = cV[c8];
                    var dc = c7.passenger_type_name;
                    if (!dc) {
                        dc = ""
                    }
                    var cY = "";
                    var cW = "";
                    if ($("#sf2").is(":checked")) {
                        if (c7.passenger_type != "3") {
                            cY = " disabled='true' ";
                            cW = " class='color999' "
                        }
                    }
                    var c3 = c7.total_times;
                    if (c7.passenger_id_type_code == "2") {
                        cY = " disabled='true' ";
                        cW = " class='color999' title='请修改身份信息' "
                    } else {
                        if (c7.passenger_id_type_code == "1") {
                            if (!isCanGP("1", c3)) {
                                cY = " disabled='true' ";
                                cW = " class='color999' title='请修改身份信息' "
                            }
                        } else {
                            if (!isCanGP("B", c3)) {
                                cY = " disabled='true' ";
                                cW = " class='color999' title='请修改身份信息' "
                            }
                            if (!isCanGP("H", c3)) {
                                cY = " disabled='true' ";
                                cW = " class='color999' title='请修改身份信息' "
                            }
                        }
                    }
                    var c5 = dc == "成人" ? c7.passenger_name : c7.passenger_name + "(" + dc + ")";
                    c5 = c5.substring(0, 9);
                    if (cZ != "" && cZ != "输入乘客姓名") {
                        if (c7.passenger_name.indexOf(cZ) > -1 || (c7.first_letter && c7.first_letter.toUpperCase().indexOf(cZ.toUpperCase()) > -1)) {
                            c0++;
                            if ($.pHasInSelected(c7)) {
                                if (cW) {
                                    var c2 = cW.indexOf("'");
                                    cW = cW.substring(0, c2 + 1) + "cur " + cW.substring(c2 + 1)
                                } else {
                                    cW = "class='cur'"
                                }
                            }
                            c4[c8] = "<li style='width:110px' " + cW + " p_value='" + c7.passenger_name + "(" + dc + ")(" + c7.passenger_id_no + ")' name='" + c7.passenger_type + "' codeType='" + c7.passenger_id_type_code + "' flag='" + c7.total_times + "'>" + c5 + "</li>"
                        }
                    } else {
                        c0++;
                        if ($.pHasInSelected(c7)) {
                            if (cW) {
                                var c2 = cW.indexOf("'");
                                cW = cW.substring(0, c2) + "cur " + cW.substring(c2)
                            } else {
                                cW = "class='cur'"
                            }
                        }
                        c4[c8] = "<li style='width:110px' " + cW + " p_value='" + c7.passenger_name + "(" + dc + ")(" + c7.passenger_id_no + ")'  name='" + c7.passenger_type + "' codeType='" + c7.passenger_id_type_code + "' flag='" + c7.total_times + "'>" + c5 + "</li>"
                    }
                }
                var c9 = 100;
                var da = 0;
                if (c0 / 3 > 11) {
                    c9 = 310;
                    da = 258
                } else {
                    c9 = 100 + parseInt((c0 / 3) * 25);
                    da = c9 - 48
                }
                $("#sel-buyer").css("height", c9);
                $("#pContent").css("height", da);
                $("#buyer-list").html(c4.join(""));
                var cX = 0;
                if (cZ != "" && cZ != "输入乘客姓名") {
                    cX = cV.length
                } else {
                    cX = passengerAll.length
                }
                var c1 = Math.ceil(cX / passengerPageSize);
                $("#passenger_page").html(bu(dd, c1)).show()
            }
            $("#buyer-list li").click(function() {
                if ($(this).hasClass("color999")) {
                    return
                }
                var dg = $("#setion_postion span").length;
                var di = $(this).attr("p_value");
                if (!$(this).hasClass("cur")) {
                    if (dg < 6) {
                        var de = "";
                        var df = true;
                        if (di.indexOf("成人") > -1 || di.indexOf("残疾军人、伤残人民警察") > -1) {
                            de = "<span name='" + di + "' class='sel-box w80'><a href='javascript:' onclick='$.addChildPassenger(\"" + di + "\");' style='position:static;background:none;width:auto;' title='您可点击此乘车人添加儿童票。'>" + di + "</a><a class='close' href='javascript:' onclick='$.removeSel(this,\"" + di + "\",1)'></a></span>";
                            $("#setion_postion").append(de);
                            $.checkedPasseanger(di)
                        } else {
                            if (di.indexOf("学生") > -1) {
                                var dh = $(this);
                                if ($.checkSeatTypes()) {
                                    de = "<span name='" + di + "' class='sel-box w80'>" + di + "<a class='close' href='javascript:' onclick='$.removeSel(this,\"" + di + "\",1)'></a></span>";
                                    $("#setion_postion").append(de);
                                    $.checkedPasseanger(di)
                                } else {
                                    $("#conifrmdialog_student_to_adult_context").html("当前选择的优先席别有不支持学生票的，是否选择购买成人票？");
                                    dhtmlx.createWin({
                                        winId: "confirmChangeStudentToAdult",
                                        closeWinId: ["close_conifrmdialog_student_to_adult", "cancel_dialog_student_to_adult"],
                                        callback: function() {
                                            $(dh).prop("checked", false)
                                        },
                                        okId: "goto_student_to_adult",
                                        okCallBack: function() {
                                            var dj = di.replace(/学生/, "成人");
                                            de = "<span name='" + di + "' class='sel-box w80'>" + dj + "<a class='close' href='javascript:' onclick='$.removeSel(this,\"" + di + "\",1)'></a></span>";
                                            $("#setion_postion").append(de);
                                            $.checkedPasseanger(dj)
                                        }
                                    })
                                }
                            } else {
                                if (di.indexOf("儿童") > -1) {
                                    de = "<span name='" + di + "' class='sel-box w80' title='如需修改旅客类型，请修改相应乘车人信息。'>" + di + "<a class='close' href='javascript:' onclick='$.removeSel(this,\"" + di + "\",1)'></a></span>";
                                    $("#setion_postion").append(de);
                                    $.checkedPasseanger(di)
                                } else {
                                    de = "<span name='" + di + "' class='sel-box w80'>" + di + "<a class='close' href='javascript:' onclick='$.removeSel(this,\"" + di + "\",1)'></a></span>";
                                    $("#setion_postion").append(de);
                                    $.checkedPasseanger(di)
                                }
                            }
                        }
                        $(this).addClass("cur");
                        $.chooseAutoSubmit()
                    } else {
                        dhtmlx.alert({
                            title: "添加乘车人",
                            ok: "确定",
                            text: "最多添加5位联系人",
                            type: "alert-error"
                        });
                        $(this).removeClass("cur")
                    }
                } else {
                    $.each($("#setion_postion span"), function(dj, dk) {
                        if (di == $(dk).attr("name")) {
                            $(dk).remove();
                            $.removePasseanger(di);
                            return
                        }
                    });
                    $(this).removeClass("cur")
                }
            })
        },
        reloadPassenger: function() {
            var cV = dhtmlx.modalbox({
                targSrc: '<div><img src="' + ctx + 'resources/images/loading.gif"></img></div>',
                callback: function() {}
            });
            $.ajax({
                type: "post",
                isTakeParam: false,
                cache: false,
                async: false,
                url: ctx + "confirmPassenger/getPassengerDTOs",
                timeout: 10000,
                error: function(cW, cY, cX) {
                    dhtmlx.modalbox.hide(cV)
                },
                success: function(cW) {
                    dhtmlx.modalbox.hide(cV);
                    if (cW.status) {
                        if (cW.data.noLogin == "true") {
                            $(".mask").fadeIn();
                            $(".login-box .login-hd-code").addClass("active").siblings().removeClass("active");
                            $(".login-box .login-code").show().siblings().hide();
                            $(".login-box").slide({
                                titCell: ".login-hd li",
                                mainCell: ".login-bd",
                                titOnClassName: "active",
                                trigger: "click",
                            });
                            $(".modal-login").css("top", ($(window).height() - $(".modal-login").height()) / 2 + $(window).scrollTop() + "px").css("left", ($(window).width() - $(".modal-login").width()) / 2 + $(window).scrollLeft() + "px").show();
                            $.popup_initLogin(true);
                            $(".modal-login").show();
                            $(".modal-login").focus()
                        } else {
                            if (cW.data.exMsg != "" && cW.data.exMsg != null && cW.data.exMsg != "null") {
                                b(cW.data.exMsg);
                                return
                            }
                            $("#sel-buyer").show();
                            $("#sel-seat").hide();
                            $("#sel-date").hide();
                            $("#sel-buyer").css("left", $("#sear-sel").position().left + 80);
                            $("#sel-buyer").css("left", $("#sear-sel").position().left + 80);
                            $("#sel-buyer").css("top", $("#sear-sel").position().top + 4 * 28 + 16);
                            passengerAll = cW.data.normal_passengers;
                            if (!(passengerAll && passengerAll.length > 0)) {
                                passengerAll = []
                            }
                            var cZ = cW.data.dj_passengers;
                            if (cZ && cZ.length > 0) {
                                var cY = cZ.length;
                                for (var cX = 0; cX < cY; cX++) {
                                    if (!$.checkIsHas(passengerAll, cZ[cX])) {
                                        passengerAll.push(cZ[cX])
                                    }
                                }
                            }
                            two_isOpenClick = cW.data.two_isOpenClick;
                            other_isOpenClick = cW.data.other_isOpenClick;
                            $.renderPassenger()
                        }
                    }
                }
            })
        },
        checkIsHas: function(cX, cY) {
            var cW = cX.length;
            for (var cV = 0; cV < cW; cV++) {
                if (cX[cV].passenger_name == cY.passenger_name && cX[cV].passenger_id_type_code == cY.passenger_id_type_code && cY.passenger_id_no == cX[cV].passenger_id_no) {
                    return true
                }
            }
            return false
        },
        pHasInSelected: function(cY) {
            var cW = passengerChecked.length;
            if (cW > 0) {
                for (var cV = 0; cV < cW; cV++) {
                    var cX = passengerChecked[cV];
                    if (cX.passenger_name == cY.passenger_name && cX.passenger_id_type_code == cY.passenger_id_type_code && cX.passenger_id_no == cY.passenger_id_no) {
                        return true
                    }
                }
            }
            return false
        },
        showSelectBuyer: function() {
            $("#sel-seat").hide();
            $("#yxtraindiv").hide();
            $("#sel-date").hide();
            if (!passengerAll) {
                $.reloadPassenger()
            } else {
                var cV = $("#buyer-list li");
                for (var cW = 0; cW < cV.length; cW++) {
                    var cY = $(cV[cW]).attr("name");
                    var cX = $(cV[cW]).attr("codeType");
                    var cZ = $(cV[cW]).attr("flag");
                    if ($("#sf2").is(":checked")) {
                        if (cY != "3") {
                            $(cV[cW]).addClass("color999")
                        } else {
                            $(cV[cW]).removeClass("color999")
                        }
                    } else {
                        $(cV[cW]).removeClass("color999")
                    }
                    if (cX == "2") {
                        $(cV[cW]).addClass("color999")
                    } else {
                        if (cX == "1") {
                            if (!isCanGP("1", cZ)) {
                                $(cV[cW]).addClass("color999")
                            }
                        } else {
                            if (!isCanGP("B", cZ)) {
                                $(cV[cW]).addClass("color999")
                            }
                            if (!isCanGP("H", cZ)) {
                                $(cV[cW]).addClass("color999")
                            }
                        }
                    }
                }
                $("#sel-buyer").show();
                $("#sel-buyer").css("left", $("#sear-sel").position().left + 80);
                $("#sel-buyer").css("top", $("#sear-sel").position().top + 4 * 28 + 16)
            }
        },
        click_YX_page: function(cW) {
            var cX = $("#yxtraininput").val().toUpperCase();
            var cV = $("#yxtrain_code").height();
            if (A(cX, cW)) {
                cU(1)
            } else {
                cU(3)
            }
            $("#yxtrain_code").css("height", cV)
        },
        click_passenger_page: function(cV) {
            $.renderPassenger(cV)
        },
        hbgetDateDiff: function(cY, cX) {
            var cW = new Date(cY.substring(0, 4) + "/" + cY.substring(5, 7) + "/" + cY.substring(8, 10)).getTime();
            var cV = new Date(cX.substring(0, 4) + "/" + cX.substring(5, 7) + "/" + cX.substring(8, 10)).getTime();
            return Math.abs((cV - cW) / 1000 / 60 / 60 / 24)
        },
        isCanChangeHBDate: function() {
            var cW = $(".cart-tlist li");
            if (cW.length == 0) {
                return true
            }
            var cX = "";
            for (var cV = 0; cV < cW.length; cV++) {
                var cZ = $(cW[cV]).attr("hbid").split("#")[0];
                if (cX.indexOf(cZ) == -1) {
                    cX += cZ
                }
            }
            if (yxTrainChange) {
                if ($("#fromStationText").val() != yxTrainChange.split("#")[0] || $("#toStationText").val() != yxTrainChange.split("#")[1]) {
                    $("#hb_msg").html(hb_date_msg_station);
                    dhtmlx.createWin({
                        winId: "hb_info",
                        closeWinId: ["hb_info_close", "hb_info_cancel"],
                        okId: "hb_info_ok",
                        callback: function() {
                            return
                        },
                        okCallBack: function() {
                            $("#hbClear").click();
                            $("#query_ticket").click()
                        }
                    });
                    return false
                }
            }
            if (cX == "" || cX.indexOf($("#train_date").val()) > -1) {
                return true
            }
            var cY = $.hbgetDateDiff(cX, $("#train_date").val());
            if (cX.length / 10 == 2) {
                dhtmlx.alert({
                    title: "提示",
                    ok: "确定",
                    text: hb_date_msg,
                    type: "alert-error"
                });
                return false
            }
            if (cY != 1) {
                dhtmlx.alert({
                    title: "提示",
                    ok: "确定",
                    text: hb_date_msg_diff,
                    type: "alert-error"
                });
                return false
            }
            return true
        },
        showYxTrain: function() {
            if (!$.isCanChangeHBDate()) {
                return
            }
            $("#yxtrain_code").css("height", "auto");
            $("#yxtrain_code li").removeClass();
            $("#yxtraininput").val("");
            $("#yxtraindiv").css("top", $("#showYxTrainSpan").offset().top + $("#showYxTrainSpan").outerHeight()).css("left", $("#showYxTrainSpan").offset().left).show();
            cU(2);
            var cX = $("#fromStationText").val() + "#" + $("#toStationText").val() + "#" + $("#train_date").val();
            if (trainListForIE.length == 0 || yxTrainChange != cX) {
                D = cP();
                var cZ = D == "0X00" ? true : false;
                var cW = train_tour_flag == "fc" ? $.trim($("#back_train_date").val()) : $.trim($("#train_date").val());
                var cV = cf(cW, cZ);
                if (!cV) {
                    $("#yxtraindiv").hide();
                    return
                }
                var cY = {
                    "leftTicketDTO.train_date": cW,
                    "leftTicketDTO.from_station": $("#fromStation").val(),
                    "leftTicketDTO.to_station": $("#toStation").val(),
                    purpose_codes: D
                };
                bh();
                $.ajax({
                    type: "get",
                    isTakeParam: false,
                    beforeSend: function(c0) {
                        c0.setRequestHeader("If-Modified-Since", "0");
                        c0.setRequestHeader("Cache-Control", "no-cache")
                    },
                    url: ctx + CLeftTicketUrl,
                    data: cY,
                    timeout: 10000,
                    success: function(c2) {
                        if (c2.status) {
                            if (c2.data == null || c2.data.length == 0) {
                                cU(3);
                                trainListForIE = [];
                                return
                            }
                            if (c2.data.flag == 1) {
                                c2.data = cA(c2.data.result, c2.data.map)
                            }
                            trainListForIE = [];
                            for (var c3 = 0; c3 < c2.data.length; c3++) {
                                trainListForIE.push(c2.data[c3].queryLeftNewDTO.station_train_code + "(" + c2.data[c3].queryLeftNewDTO.start_time + "--" + c2.data[c3].queryLeftNewDTO.arrive_time + ")")
                            }
                            if (train_tour_flag == "gc" && "Y" == isDwTicketResign) {
                                var c9 = [];
                                for (var c3 = 0, da = c2.data.length; c3 < da; c3++) {
                                    var c1 = c2.data[c3].queryLeftNewDTO;
                                    var c6 = c1.station_train_code;
                                    c6 = c6.substring(0, 1);
                                    if ("G" == c6 || "D" == c6) {
                                        c9.push(c2.data[c3])
                                    }
                                }
                                c2.data = c9
                            }
                            if ($("#DW_SHOW_STR")[0]) {
                                $("#DW_SHOW_STR").remove()
                            }
                            if ($("#hainan_limit_msg")[0]) {
                                $("#hainan_limit_msg").remove()
                            }
                            $("#sear-sel").show();
                            $("#sear-result").show();
                            $("#t-list").show();
                            $("#no_filter_ticket_2").hide();
                            $("#no_filter_ticket_6").hide();
                            $("#no_filter_ticket").hide();
                            var c0 = "";
                            var c5 = "";
                            if (train_tour_flag != null && train_tour_flag == "fc") {
                                var c8 = "<strong>".concat($("#fromStationText").val()).concat(" --> ").concat($("#toStationText").val()).concat("（").concat(aU($("#back_train_date").val())).concat('）</strong>共计<strong id="trainum">').concat(c2.data.length).concat("</strong>个车次");
                                if (hainan_limit_msg && ar(cY, c2.data)) {
                                    c5 = "<p class='ad-gt' id='hainan_limit_msg'  style='font-size:13px;background:#fff6f6 left center no-repeat;font-weight:bold'>" + hainan_limit_msg + "</p>"
                                }
                                if ($("#auto_query").is(":checked")) {
                                    var c7 = "";
                                    for (var c4 = 0; c4 < 25; c4++) {
                                        c7 = c7 + "&nbsp;"
                                    }
                                    c8 = c8.concat(c7 + "<input type='checkbox' class='check' id='filterTic' /><div id='filterTicDiv' style='display:inline'><strong><label for='filterTic' style='cursor: pointer;'>仅查看刷到车次</label></strong></div>")
                                }
                                $("#sear-result>p").html(c8);
                                if ($("#auto_query").is(":checked")) {
                                    $("#filterTic").bind("click", bF)
                                }
                            } else {
                                var c8 = "<strong>".concat($("#fromStationText").val()).concat(" --> ").concat($("#toStationText").val()).concat("（").concat(aU($("#train_date").val())).concat('）</strong>共计<strong id="trainum">').concat(c2.data.length).concat("</strong>个车次");
                                if (hainan_limit_msg && ar(cY, c2.data)) {
                                    c5 = "<p class='ad-gt' id='hainan_limit_msg'  style='font-size:13px;background:#fff6f6 left center no-repeat;font-weight:bold'>" + hainan_limit_msg + "</p>"
                                }
                                if ($("#auto_query").is(":checked")) {
                                    var c7 = "";
                                    for (var c4 = 0; c4 < 25; c4++) {
                                        c7 = c7 + "&nbsp;"
                                    }
                                    c8 = c8.concat(c7 + "<input type='checkbox' class='check' id='filterTic' /><div id='filterTicDiv' style='display:inline'><strong><label for='filterTic' style='cursor: pointer;'>仅查看刷到车次</label></strong></div>")
                                }
                                $("#sear-result>p").html(c8);
                                if ($("#auto_query").is(":checked")) {
                                    $("#filterTic").bind("click", bF)
                                }
                            }
                            if (!$("#DW_SHOW_STR")[0]) {
                                $("#sear-result>p").after(c0)
                            }
                            if (c5) {
                                $("#sear-result>p").after(c5)
                            }
                            if (dwTranTimeStr) {
                                clearInterval(dwTranTimeStr)
                            }
                            if ($("#DW_SHOW_STR")[0]) {
                                dwTranTimeStr = window.setInterval(function() {
                                    if ($("#DW_SHOW_STR").attr("data") == "1") {
                                        $("#DW_SHOW_STR").attr("data", "2").html("夜行两千公里 最低不足千元")
                                    } else {
                                        $("#DW_SHOW_STR").attr("data", "1").html("高铁动卧 夕发朝至 风雨无阻 省时省钱")
                                    }
                                }, 1300)
                            }
                            if ($("#hainan_limit_msg")[0]) {
                                hainan_tip = null;
                                hainan_tip = new Marquee({
                                    ID: "hainan_limit_msg",
                                    Direction: "left",
                                    Step: 1,
                                    Width: 0,
                                    Height: 0,
                                    Timer: 30,
                                    DelayTime: 0,
                                    WaitTime: 0,
                                    ScrollStep: 0
                                })
                            }
                            bx = c2.data;
                            aw();
                            bO(bx);
                            q();
                            cb(bx);
                            ck();
                            $("#queryLeftTable").html("");
                            $("#trainum").html("");
                            a3();
                            if (cv.length < 0) {
                                ba = true;
                                $("#no_filter_ticket").show();
                                $("#no_filter_ticket_msg_1").show();
                                $("#no_filter_ticket_msg_2").hide();
                                $("#trainum").html("0");
                                return
                            } else {
                                ba = true;
                                $("#trainum").html(cv.length);
                                aR(cv);
                                $.showYxTrainData()
                            }
                            v();
                            yxTrainChange = $("#fromStationText").val() + "#" + $("#toStationText").val() + "#" + $("#train_date").val()
                        } else {
                            if (c2 && c2.c_url) {
                                CLeftTicketUrl = c2.c_url;
                                ay(cY)
                            }
                        }
                    }
                });
                yxTrainChange = cX
            } else {
                $.showYxTrainData()
            }
            $("#sel-buyer").hide();
            $("#sel-seat").hide();
            $("#sel-date").hide()
        },
        showYxTrainData: function() {
            if (A($("#yxtraininput").val(), 0)) {
                $("#yxtraindiv").css("top", $("#showYxTrainSpan").offset().top + $("#showYxTrainSpan").outerHeight()).css("left", $("#showYxTrainSpan").offset().left).show();
                cU(1);
                $("#yxtraininput").focus()
            } else {
                cU(3)
            }
        },
        getMindateForCal: function() {
            if ($("#sf2").is(":checked")) {
                k = studentMindate
            } else {
                k = otherMindate
            }
            return k
        },
        getMaxdateForCal: function() {
            if ($("#sf2").is(":checked")) {
                K = studentMaxdate
            } else {
                K = otherMaxdate
            }
            return K
        }
    });
    function N() {
        $("#show_all_query_result").click(function() {
            b7 = new Array();
            bR = new Array();
            V = new Array();
            $("#train_type_btn_all").removeClass().addClass("btn-all");
            $("#start_time_btn_all").removeClass().addClass("btn-all");
            $("#arrive_time_btn_all").removeClass().addClass("btn-all");
            $("#seat_type_btn_all").removeClass().addClass("btn-all");
            $("#from_station_name_all").removeClass().addClass("btn-all");
            $("#to_station_name_all").removeClass().addClass("btn-all");
            $("#sear-sel-bd input").each(function() {
                if (this.checked) {
                    this.checked = false
                }
            });
            if (aM) {
                aM.setComboText("")
            }
            $("#avail_ticket").attr("checked", false);
            aZ()
        })
    }
    function aO(cV) {
        var cW = '<td colspan="4" width="370"></td>';
        if (cV.A9) {
            cW += '<td width="78" align="center" class="p-num">' + [cV.A9] + "</td>"
        } else {
            if (cV.P) {
                cW += '<td width="78" align="center" class="p-num">' + (cV.P) + "</td>"
            } else {
                cW += '<td width="78" align="center"></td>'
            }
        }
        if (cV.M) {
            cW += '<td width="78" align="center" class="p-num">' + (cV.M) + "</td>"
        } else {
            cW += '<td width="78" align="center"></td>'
        }
        if (cV.O) {
            cW += '<td width="78" align="center" class="p-num">' + (cV.O) + "</td>"
        } else {
            cW += '<td width="78" align="center"></td>'
        }
        if (cV.A6) {
            cW += '<td width="78" align="center" class="p-num">' + (cV.A6) + "</td>"
        } else {
            cW += '<td width="78" align="center"></td>'
        }
        if (cV.A4) {
            cW += '<td width="78" align="center" class="p-num">' + (cV.A4) + "</td>"
        } else {
            cW += '<td width="78" align="center"></td>'
        }
        if (cV.F) {
            cW += '<td width="78" align="center" class="p-num">' + (cV.F) + "</td>"
        } else {
            cW += '<td width="78" align="center"></td>'
        }
        if (cV.A3) {
            cW += '<td width="78" align="center" class="p-num">' + (cV.A3) + "</td>"
        } else {
            cW += '<td width="78" align="center"></td>'
        }
        if (cV.A2) {
            cW += '<td width="78" align="center" class="p-num">' + (cV.A2) + "</td>"
        } else {
            cW += '<td width="78" align="center"></td>'
        }
        if (cV.A1) {
            cW += '<td width="78" align="center" class="p-num">' + (cV.A1) + "</td>"
        } else {
            cW += '<td width="78" align="center"></td>'
        }
        if (cV.WZ) {
            cW += '<td width="78" align="center" class="p-num">' + (cV.WZ) + "</td>"
        } else {
            cW += '<td width="78" align="center"></td>'
        }
        cW += '<td width="78" align="center"></td>';
        return cW
    }
    function aH() {
        var cV = $("#queryPriceTemplate").html().replace("<!--", "").replace("-->", "");
        $.templates({
            priceTableTemplate: cV
        });
        var cV = $("#fromStationNameTemplate").html().replace("<!--", "").replace("-->", "");
        $.templates({
            stationNameTableTemplate: cV
        });
        var cV = $("#toStationNameTemplate").html().replace("<!--", "").replace("-->", "");
        $.templates({
            toStationNameTableTemplate: cV
        });
        var cV = $("#seatTypeTemplate").html().replace("<!--", "").replace("-->", "");
        $.templates({
            seatTypeTemplate: cV
        });
        var cV = $("#stationinfoTemplate").html().replace("<!--", "").replace("-->", "");
        $.templates({
            stationinfoTemplate: cV
        })
    }
    function cb(cW) {
        dhtmlXCombo_defaultOption.prototype._DrawHeaderButton = function() {}
        ;
        $("#train_combo_box").hide();
        var cV = [];
        if (!aM) {
            aM = new dhtmlXCombo("train_combo_box_div","cc",90)
        } else {
            aM.setComboText("")
        }
        aM.clearAll();
        $(cW).each(function() {
            cV.push([this.queryLeftNewDTO.station_train_code, this.queryLeftNewDTO.station_train_code])
        });
        aM.addOption(cV);
        aM.enableFilteringMode(true);
        aM.attachEvent("onChange", function() {
            if (aM.getComboText() != "") {
                if ($("#iLcear").is(":hidden")) {
                    $("#iLcear").show()
                }
            }
            aZ()
        });
        if (!$("#iLcear")[0]) {
            $(".dhx_combo_box ").append($('<span style="display: none;" class="i-clear dhx_combo_img_iClear" id="iLcear"></span>'));
            $("#iLcear").on("click", function() {
                if (aM) {
                    aM.setComboText("");
                    $(this).hide()
                }
            })
        }
        $(".dhx_combo_input").on("keyup", function() {
            if ($(this).val() == "") {
                $("#iLcear").hide()
            } else {
                if ($("#iLcear").is(":hidden")) {
                    $("#iLcear").show()
                }
            }
        })
    }
    function aF() {
        if (!cH) {
            cH = new dhtmlXWindows();
            cH.enableAutoViewport(true);
            cH.setSkin("dhx_terrace");
            cH.attachViewportTo("winVP");
            cH.setImagePath(ctx + "resources/js/rich/windows/imgs/")
        }
        $("#username").keydown(function() {
            login_errorMsg_hide()
        });
        $("#password").keydown(function() {
            login_errorMsg_hide()
        })
    }
    function bW() {
        cH.window("login").hide();
        cH.window("login").setModal(false)
    }
    function bZ() {
        if (cH.window("login")) {
            cH.window("login").setModal(false);
            cH.window("login").hide()
        }
        bo = cH.createWindow("login", 0, 0, 400, 350);
        var cV, cW;
        if (typeof (TouLocal) != "undefined" && TouLocal.checkZByTargeElement("")) {
            cV = $(window).width() / 2 - 208;
            cW = cM() + ($(window).height() / 2 - 232)
        } else {
            cV = $(window).width() / 2 - 200;
            cW = cM() + ($(window).height() / 2 - 205)
        }
        bo.attachObject("relogin");
        if (if_show_pass_code_login == "Y") {
            bo.setDimension($("#content").width(), $("#content").height() + 10)
        } else {
            bo.setDimension(530, 343);
            cV = $(window).width() / 2 - 250
        }
        $(".dhtmlx_window_active").height($("#content").height());
        $(".dhtmlx_window_active").css({
            left: cV,
            top: cW
        });
        bo.bringToTop();
        cH.window("login").clearIcon();
        cH.window("login").denyResize();
        bo.button("park").hide();
        bo.button("minmax1").hide();
        bo.hideHeader();
        if (if_show_pass_code_login == "Y") {
            if (is_uam_login == "Y") {
                refreshImgUAM("login", "sjrand")
            } else {
                refreshImg("login", "sjrand")
            }
        }
        bo.setModal(true);
        $("#relogin_close").click(function() {
            bH();
            var cX = $(window).scrollTop();
            var cY = $("#float").position().top;
            if (cX > cY + 30) {
                $("#floatTable").show()
            }
            bW()
        });
        if (typeof (touclickHook_leftTicketLogin) === "function") {
            touclickHook_leftTicketLogin()
        }
    }
    function bH() {
        bb();
        $("#username").val("");
        $("#password").val("");
        $("#randCode").val("");
        cB()
    }
    function cM() {
        if ("pageYOffset"in window) {
            return window.pageYOffset
        } else {
            if (document.compatMode == "BackCompat") {
                return document.body.scrollTop
            } else {
                return document.documentElement.scrollTop
            }
        }
    }
    function bb() {
        $("#username").add($("#password")).add($("#randCode")).add($("#randCode2")).removeClass("error")
    }
    function H(cZ) {
        var cW = /^(13[0-9])|(14[0-9])|(15[0-9])|(18[0-9])|(17[0-9])|(19[0-9])|(16[0-9])\d{8}$/;
        var cV = /^[A-Za-z]{1}([A-Za-z0-9]|[_]){0,29}$/;
        var cY = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
        var cX = true;
        bb();
        if ("" == cZ || cZ == null || cZ == uninputmsg || cZ == "admin") {
            $("#username").removeClass("inptxt w200").addClass("inptxt w200 error");
            cX = login_messages.userNameEmpty
        } else {
            if (!cV.test(cZ) && !cY.test(cZ) && !cW.test(cZ)) {
                $("#username").removeClass("inptxt w200").addClass("inptxt w200 error");
                cX = login_messages.userNameFormat
            }
        }
        return cX
    }
    function b1(cV) {
        var cW = true;
        bb();
        if ("" == cV || cV == null) {
            $("#password").removeClass("inptxt w200").addClass("inptxt w200 error");
            cW = login_messages.passwordEmpty
        } else {
            if (cV.length < 6) {
                $("#password").removeClass("inptxt w200").addClass("inptxt w200 error");
                cW = login_messages.passwordLength
            }
        }
        return cW
    }
    function bf() {
        var cX = $.trim($("#username").val());
        var cV = $.trim($("#password").val());
        var cW = H(cX);
        return typeof (cW) === "boolean" ? b1(cV) : cW
    }
    function G() {
        var cW = false;
        var cV = false;
        $("#username").on("keyup", function() {
            aS = true
        }).blur(function() {
            if (aS) {
                var cX = $.trim($("#username").val());
                cW = H(cX);
                if (if_show_pass_code_login == "Y") {
                    if (typeof (cW) !== "boolean") {
                        showError($("#randCode")[0], cW)
                    } else {
                        if (cW === true) {
                            showError($("#randCode")[0]).hide()
                        }
                    }
                } else {
                    if (typeof (cW) !== "boolean") {
                        login_errorMsg(cW)
                    } else {
                        if (cW === true) {
                            login_errorMsg_hide()
                        }
                    }
                }
            }
        });
        $("#password").blur(function() {
            if (aS) {
                var cX = $.trim($("#password").val());
                if (if_show_pass_code_login == "Y") {
                    if (cW === true && typeof (cV = b1(cX)) !== "boolean") {
                        showError($("#randCode")[0], cV)
                    } else {
                        if (cW === true && cV === true) {
                            showError($("#randCode")[0]).hide()
                        }
                    }
                } else {
                    if (cW === true && typeof (cV = b1(cX)) !== "boolean") {
                        login_errorMsg(cV)
                    } else {
                        if (cW === true && cV === true) {
                            login_errorMsg_hide()
                        }
                    }
                }
            }
        })
    }
    function cI(cV) {
        $("#password").val("");
        $("#randCode").val("");
        if (cV != null) {
            if (cV == "登录名不存在。") {
                aS = false;
                $("#username").add($("#password")).add($("#randCode")).add($("#randCode2")).removeClass("error");
                $("#username").removeClass("inptxt w200").addClass("inptxt w200 error");
                $("#username").focus()
            } else {
                if (cV.indexOf("密码输入错误。") != -1) {
                    $("#username").add($("#password")).add($("#randCode")).add($("#randCode2")).removeClass("error");
                    $("#password").removeClass("inptxt w200").addClass("inptxt w200 error");
                    $("#password").focus()
                }
            }
            if (if_show_pass_code_login == "Y") {
                showError($("#randCode")[0], cV)
            } else {
                login_errorMsg(cV)
            }
        }
    }
    function am(cW, cV) {
        $("#loginSubAsyn").unbind("click");
        $("#loginSubAsyn").click(function() {
            var cX = bf();
            if (is_uam_login == "Y") {
                if (if_show_pass_code_login == "Y" && !verifyRandCodeUAM($("#randCode")[0], cX)) {
                    return
                }
                if (if_show_pass_code_login == "N" && typeof (cX) !== "boolean") {
                    login_errorMsg(cX);
                    return
                }
                $.ajax({
                    url: passport_login,
                    data: {
                        username: $("#username").val(),
                        password: $("#password").val(),
                        appid: passport_appId
                    },
                    dataType: "json",
                    type: "POST",
                    xhrFields: {
                        withCredentials: true
                    },
                    success: function(cY) {
                        if (cY.result_code == 0) {
                            $.ajax({
                                type: "POST",
                                url: passport_authuam,
                                async: false,
                                data: {
                                    appid: passport_appId
                                },
                                dataType: "jsonp",
                                jsonp: "callback",
                                success: function(cZ) {
                                    if (cZ.result_code == 0) {
                                        var c0 = cZ.newapptk || cZ.apptk;
                                        $.ajax({
                                            type: "POST",
                                            async: false,
                                            url: ctx + passport_authclient,
                                            data: {
                                                tk: c0
                                            },
                                            datatype: "json",
                                            success: function(c1) {
                                                if (c1.result_code == 0) {
                                                    bW();
                                                    loginAsyn(c1.username);
                                                    ad(cW, cV)
                                                }
                                            },
                                            error: function() {}
                                        })
                                    }
                                },
                                error: function() {}
                            })
                        } else {
                            if (if_show_pass_code_login == "Y") {
                                showSuc($("#randCode")[0]).hide()
                            } else {
                                login_errorMsg_hide()
                            }
                            if (if_show_pass_code_login == "Y") {
                                refreshImgUAM("login", "sjrand")
                            }
                            cI(cY.result_message)
                        }
                    }
                })
            } else {
                if (if_show_pass_code_login == "Y" && !verifyRandCode($("#randCode")[0], cX)) {
                    return
                }
                if (if_show_pass_code_login == "N" && typeof (cX) !== "boolean") {
                    login_errorMsg(cX);
                    return
                }
                $("#loginForm").ajaxSubmit({
                    url: ctx + "login/loginUserAsyn?random=" + new Date().getTime(),
                    type: "post",
                    dataType: "json",
                    async: false,
                    success: function(cY) {
                        if (cY.data.status) {
                            if (cY.data.username != null) {
                                bW();
                                loginAsyn(cY.data.username);
                                if (cY.data.otherMsg != "") {
                                    dhtmlx.alert({
                                        title: messages["message.error"],
                                        ok: messages["button.ok"],
                                        text: cY.data.otherMsg,
                                        type: "alert-error",
                                        callback: function() {
                                            if ("Y" == cY.data.notifysession) {
                                                dhtmlx.createWin({
                                                    winId: "notifysession",
                                                    closeWinId: ["close_notifysession"],
                                                    okId: "goto_notifysession",
                                                    okCallBack: function() {
                                                        ad(cW, cV)
                                                    }
                                                })
                                            } else {
                                                ad(cW, cV)
                                            }
                                        }
                                    })
                                } else {
                                    if ("Y" == cY.data.notifysession) {
                                        dhtmlx.createWin({
                                            winId: "notifysession",
                                            closeWinId: ["close_notifysession"],
                                            okId: "goto_notifysession",
                                            okCallBack: function() {
                                                ad(cW, cV)
                                            }
                                        })
                                    } else {
                                        ad(cW, cV)
                                    }
                                }
                            }
                        } else {
                            if (cY.data.uamflag == "1") {
                                location.reload(true)
                            }
                            if (if_show_pass_code_login == "Y") {
                                showSuc($("#randCode")[0]).hide()
                            } else {
                                login_errorMsg_hide()
                            }
                            if (if_show_pass_code_login == "Y") {
                                refreshImg("login", "sjrand")
                            }
                            cI(cY.data.loginFail)
                        }
                    }
                })
            }
        })
    }
    function ak() {
        var cV = false;
        $("#loginSubAsyn").unbind("click");
        $("#loginSubAsyn").click(function() {
            if (!cV) {
                var cW = bf();
                if (is_uam_login == "Y") {
                    if (if_show_pass_code_login == "Y" && !verifyRandCodeUAM($("#randCode")[0], cW)) {
                        cV = false;
                        return
                    }
                    cV = true;
                    $("#loginForm").ajaxSubmit({
                        url: passport_login,
                        data: {
                            username: $("#username").val(),
                            password: $("#password").val(),
                            appid: passport_appId
                        },
                        dataType: "json",
                        type: "POST",
                        xhrFields: {
                            withCredentials: true
                        },
                        success: function(cX) {
                            if (cX.result_code == 0) {
                                $.ajax({
                                    type: "POST",
                                    url: passport_authuam,
                                    async: false,
                                    data: {
                                        appid: passport_appId
                                    },
                                    dataType: "jsonp",
                                    jsonp: "callback",
                                    success: function(cY) {
                                        if (cY.result_code == 0) {
                                            var cZ = cY.newapptk || cY.apptk;
                                            $.ajax({
                                                type: "POST",
                                                async: false,
                                                url: ctx + passport_authclient,
                                                data: {
                                                    tk: cZ
                                                },
                                                datatype: "json",
                                                success: function(c0) {
                                                    if (c0.result_code == 0) {
                                                        bW();
                                                        loginAsyn(c0.username)
                                                    }
                                                },
                                                error: function() {}
                                            })
                                        }
                                    },
                                    error: function() {}
                                })
                            } else {
                                $("#i-ok").hide();
                                if (if_show_pass_code_login == "Y") {
                                    refreshImgUAM("login", "sjrand")
                                }
                                cI(cX.result_message)
                            }
                        },
                        complete: function() {
                            cV = false
                        }
                    })
                } else {
                    if (if_show_pass_code_login == "Y" && !verifyRandCode($("#randCode")[0], cW)) {
                        cV = false;
                        return
                    }
                    cV = true;
                    $("#loginForm").ajaxSubmit({
                        url: ctx + "login/loginUserAsyn?random=" + new Date().getTime(),
                        type: "post",
                        dataType: "json",
                        async: false,
                        success: function(cX) {
                            if (cX.data.status) {
                                if (cX.data.otherMsg != "") {
                                    dhtmlx.alert({
                                        title: messages["message.error"],
                                        ok: messages["button.ok"],
                                        text: cX.data.otherMsg,
                                        type: "alert-error",
                                        callback: function() {
                                            if (cX.data.username != null) {
                                                bW();
                                                loginAsyn(cX.data.username)
                                            }
                                        }
                                    })
                                } else {
                                    if (cX.data.username != null) {
                                        bW();
                                        loginAsyn(cX.data.username)
                                    }
                                }
                            } else {
                                if (cX.data.uamflag == "1") {
                                    location.reload(true)
                                }
                                $("#i-ok").hide();
                                if (if_show_pass_code_login == "Y") {
                                    refreshImg("login", "sjrand")
                                }
                                cI(cX.data.loginFail)
                            }
                        },
                        complete: function() {
                            cV = false
                        }
                    })
                }
            }
        })
    }
    function bj() {
        window.sucessCallback = function() {
            b3 = $("#randCode2").val();
            $("#back_edit").trigger("click");
            var cV = "99999GGGGG";
            var cX = "##CCT##PPT##CPT##PXT##SBT##PBD##JOD##HPD##SHD##QTP##TSP##TJP##";
            var cW = "##CBP##DIP##JGK##ZEK##UUH##NKH##ESH##OHH##AOH##";
            if (isAsync == ticket_submit_order.request_flag.isAsync) {
                if (S.queryLeftNewDTO.train_no.indexOf(cV) > -1 && cX.indexOf(S.queryLeftNewDTO.from_station_telecode) > -1 && cW.indexOf(S.queryLeftNewDTO.to_station_telecode) > -1) {
                    dhtmlx.createWin({
                        winId: "confirmG1234",
                        closeWinId: ["close_conifrmdialog_G1234", "cancel_dialog_G1234"],
                        okId: "goto_integration_G1234",
                        okCallBack: function() {
                            u()
                        },
                        callback: function() {
                            return
                        }
                    })
                } else {
                    u()
                }
            } else {
                if (S.queryLeftNewDTO.train_no.indexOf(cV) > -1 && cX.indexOf(S.queryLeftNewDTO.from_station_telecode) > -1 && cW.indexOf(S.queryLeftNewDTO.to_station_telecode) > -1) {
                    dhtmlx.createWin({
                        winId: "confirmG1234",
                        closeWinId: ["close_conifrmdialog_G1234", "cancel_dialog_G1234"],
                        okId: "goto_integration_G1234",
                        okCallBack: function() {
                            cT()
                        },
                        callback: function() {
                            return
                        }
                    })
                } else {
                    cT()
                }
            }
            return
        }
    }
    function cB() {
        $("#username").css("color", "#333");
        $("#password").css("color", "#333");
        $("#randCode").css("color", "#333");
        if ($("#username").val() == "" || $("#username").val() == uninputmsg || $("#username").val() == null || $("#username").val() == "admin") {
            $("#username").css("color", "#999");
            $("#username").val(uninputmsg);
            $("#password").val("")
        }
        $("#username").focus(function() {
            var cV = $("#username").val();
            if (cV == uninputmsg) {
                $("#username").css("color", "#333");
                $("#username").val("");
                $("#password").val("")
            }
        }).blur(function() {
            var cV = $("#username").val();
            if (cV == "") {
                $("#username").css("color", "#999");
                $("#username").val(uninputmsg)
            }
        })
    }
    function av() {
        $("#forget_my_password_id").on("click", function(cV) {
            otsRedirect("post", ctx + "forgetPassword/initforgetMyPassword")
        })
    }
    function bh() {
        var cV = 1;
        var c1;
        var c6;
        var cX;
        var c0 = true;
        var cZ = true;
        var c4 = true;
        var c8;
        var cW;
        var c5 = false;
        var c2 = false;
        var c7 = false;
        cX = dataNumber;
        var c3;
        if (train_tour_flag != null && train_tour_flag != "" && train_tour_flag == "fc") {
            c3 = jQuery.inArray($("#back_train_date").val().substring(5, 10), change_dates_arr)
        } else {
            c3 = jQuery.inArray($("#train_date").val().substring(5, 10), change_dates_arr)
        }
        if (c3 != "-1") {
            c3 = c3 + 1;
            c8 = firstShow;
            cW = endShow;
            if (parseInt(c3) >= parseInt(firstShow) && parseInt(c3) <= parseInt(endShow)) {
                if (isOther) {
                    if (parseInt(endShow) > parseInt(other_control)) {
                        endShow = other_control;
                        c2 = true;
                        c5 = true
                    }
                } else {
                    if (parseInt(endShow) > parseInt(stu_control)) {
                        endShow = stu_control
                    }
                }
                if (!c2) {
                    c0 = false;
                    cZ = false;
                    c4 = false;
                    c6 = endShow + 1
                }
            } else {
                c5 = true;
                firstShow = c3;
                endShow = firstShow + 14;
                if (isOther) {
                    if (parseInt(endShow) > parseInt(other_control)) {
                        endShow = other_control;
                        c2 = true
                    }
                } else {
                    if (parseInt(endShow) > parseInt(stu_control)) {
                        endShow = stu_control;
                        c2 = true
                    }
                }
                if (!c2) {
                    c1 = firstShow - 1;
                    c6 = endShow + 1;
                    if (c1 < cV) {
                        c0 = false
                    }
                }
            }
            if (isOther) {
                if (other_control < dataNumber) {
                    c7 = true
                }
            } else {
                if (stu_control < dataNumber) {
                    c7 = true
                }
            }
            if (c2) {
                c5 = true;
                firstShow = endShow - 14;
                c1 = firstShow - 1;
                if (c7) {
                    cZ = true;
                    c6 = endShow + 1;
                    cX = dataNumber
                } else {
                    cZ = false
                }
                if (train_tour_flag != null && train_tour_flag != "" && train_tour_flag == "fc") {
                    $("#back_train_date").val(fullDateArr[c3 - 1])
                } else {
                    $("#train_date").val(fullDateArr[c3 - 1])
                }
            }
            if (parseInt(firstShow) < 1) {
                firstShow = 1
            }
            if (c0) {
                for (var cY = cV; cY <= c1; cY++) {
                    $("#date_range>ul>li:nth-child(" + cY + ")").hide()
                }
            }
            if (cZ) {
                for (var cY = c6; cY <= cX; cY++) {
                    $("#date_range>ul>li:nth-child(" + cY + ")").hide()
                }
            }
            if (c4) {
                for (var cY = firstShow; cY <= endShow; cY++) {
                    $("#date_range>ul>li:nth-child(" + cY + ")").show()
                }
            }
            $("#date_range>ul>li").removeClass("sel");
            if (c5) {
                $("#date_range>ul>li:nth-child(" + c8 + ")").children("span:first").removeClass();
                $("#date_range>ul>li:nth-child(" + c8 + ")").children("span:last").removeClass();
                $("#date_range>ul>li:nth-child(" + cW + ")").removeClass();
                $("#date_range>ul>li:nth-child(" + firstShow + ")").children("span:first").addClass("first");
                $("#date_range>ul>li:nth-child(" + firstShow + ")").children("span:last").addClass("first");
                $("#date_range>ul>li:nth-child(" + firstShow + ")").children().addClass("first");
                $("#date_range>ul>li:nth-child(" + endShow_15 + ")").addClass("end")
            }
            $("#date_range>ul>li:nth-child(" + c3 + ")").addClass("sel");
            $("#date_range>ul>li:nth-child(" + c3 + ")").children("span:last-child").removeClass();
            $("#date_range>ul>li:nth-child(" + c3 + ")").children("span:first-child").addClass("hide");
            cq = $("#date_range>ul>li:nth-child(" + c3 + ")").children("span:first-child").text()
        }
    }
    function cl() {
        $("#query_ticket").unbind("click");
        $("#query_ticket_stu").unbind("click");
        $("#query_ticket").removeClass().addClass("btn92s btn-disabled");
        $("#query_ticket_stu").removeClass().addClass("btn92s btn-disabled");
        bM();
        setTimeout(function() {
            cS();
            bG();
            $("#query_ticket").removeClass().addClass("btn92s");
            $("#query_ticket_stu").removeClass().addClass("btn92s");
            if (train_tour_flag != "gc" && train_tour_flag != "fc") {
                if (ClickWho == "0X00") {
                    $("#query_ticket").unbind();
                    $("#query_ticket").removeClass().addClass("btn92s btn-disabled");
                    $("#query_ticket_stu").removeClass().addClass("btn92s")
                }
                if (ClickWho == "00") {
                    $("#query_ticket_stu").unbind();
                    $("#query_ticket_stu").removeClass().addClass("btn92s btn-disabled");
                    $("#query_ticket").removeClass().addClass("btn92s")
                }
            }
            if (isstudentDate) {
                $("#query_ticket_stu").unbind();
                $("#query_ticket_stu").removeClass().addClass("btn92s btn-disabled");
                $("#query_ticket").removeClass().addClass("btn92s")
            }
        }, 1000)
    }
    changeArriveDate = function(cW, cV) {
        cW = cW.replace(":", "");
        cV = cV.replace(":", "");
        hour_value = Number(cW.substring(0, 2)) + Number(cV.substring(0, 2));
        min_value = Number(cW.substring(2, 4)) + Number(cV.substring(2, 4));
        if (min_value >= 60) {
            hour_value = hour_value + 1
        }
        if (hour_value >= 24 && hour_value < 48) {
            return "次日"
        } else {
            if (hour_value >= 48 && hour_value < 72) {
                return "两日"
            } else {
                if (hour_value >= 72) {
                    return "三日"
                } else {
                    return "当日"
                }
            }
        }
    }
    ;
    bK = function(cV) {
        if (cV.substring(0, 1) == "0") {
            if (cV.substring(1, 2) == "0") {
                if (cV.substring(3, 4) == "0") {
                    cV = cV.substring(4, 5) + "分"
                } else {
                    cV = cV.substring(3, 5) + "分"
                }
            } else {
                cV = cV.substring(1, 2) + "小时" + cV.substring(3, 5) + "分"
            }
        } else {
            if (cV.substring(3, 5) == "00") {
                cV = cV.substring(0, 2) + "小时"
            } else {
                cV = cV.substring(0, 2) + "小时" + cV.substring(3, 5) + "分"
            }
        }
        return cV
    }
    ;
    isNum = function(cV) {
        return parseInt(cV)
    }
    ;
    isLcNum = function(cV) {
        if ("" == cV || "--" == cV || "无" == cV) {
            return 0
        }
        return 1
    }
    ;
    buttonText = function() {
        return "预订"
    }
    ;
    function aD() {
        if ($("#sf2").is(":checked")) {
            if (I($("#train_date").val()) > I(init_maxPeriod) - 24 * 60 * 60 * 1000) {
                bM()
            } else {
                bG()
            }
        }
    }
    function aE() {}
    $("#train_date").click(function() {
        $("#train_date").jcalendar({
            isSingle: false,
            startDate: $.getMindateForCal(),
            endDate: $.getMaxdateForCal(),
            onpicked: function() {
                aE();
                $("#train_date").blur();
                var cV = $("#train_date").val();
                var cW = $("#back_train_date").val();
                if ($("#wf").is(":checked")) {
                    if (!cW | I(cV) > I(cW)) {
                        $("#back_train_date").val(cV)
                    }
                }
                bh()
            }
        })
    });
    $("#date_icon_1").click(function() {
        $("#train_date").focus()
    });
    $("#back_train_date").click(function() {
        $("#back_train_date").jcalendar({
            isSingle: false,
            startDate: $("#train_date").val(),
            endDate: $.getMaxdateForCal(),
            onpicked: function() {
                aE();
                $("#back_train_date").blur();
                bh()
            }
        })
    });
    $("#date_icon_2").click(function() {
        $("#back_train_date").focus()
    });
    String.prototype.toDate = function() {
        style = "yyyy-MM-dd hh:mm";
        var cY = {
            "y+": "y",
            "M+": "M",
            "d+": "d",
            "h+": "h",
            "m+": "m"
        };
        var cV = {
            y: "",
            M: "",
            d: "",
            h: "00",
            m: "00"
        };
        var cX = style;
        for (var cW in cY) {
            if (new RegExp("(" + cW + ")").test(style)) {
                cV[cY[cW]] = this.substring(cX.indexOf(RegExp.$1), cX.indexOf(RegExp.$1) + RegExp.$1.length)
            }
        }
        return new Date(cV.y,cV.M - 1,cV.d,cV.h,cV.m)
    }
    ;
    function F(cZ) {
        if (cZ == "back_train_date" && ClickWho != "0X00") {
            return
        }
        var cV = ($("#" + cZ).val().split(" ")[0] + " 00:00:00").toDate().getTime();
        var c1 = stu_start_train_date.split("&");
        var cX = stu_end_tain_date.split("&");
        var cW = false;
        for (var cY = 0, c0 = c1.length; cY < c0; cY++) {
            if (cV >= c1[cY].toDate().getTime() && cV <= cX[cY].toDate().getTime()) {
                cW = true;
                break
            }
        }
        if (cW) {
            $("#sf2").attr("disabled", false);
            $("#sf2_label").removeClass("color999")
        } else {
            $("#sf2").attr("checked", false);
            $("#sf1")[0]["checked"] = "checked";
            $("#sf2").attr("disabled", true);
            $("#sf2_label").addClass("color999")
        }
    }
    function cu(cV) {
        if (isSaveQueryLog == "Y") {
            $.ajax({
                type: "get",
                isTakeParam: false,
                beforeSend: function(cW) {
                    cW.setRequestHeader("If-Modified-Since", "0");
                    cW.setRequestHeader("Cache-Control", "no-cache")
                },
                url: ctx + "leftTicket/log",
                data: cV,
                timeout: 15000,
                error: function(cW, cY, cX) {},
                success: function(cW) {}
            })
        }
    }
    var be = 0;
    var ai = new Array();
    function af() {
        $("div#id-seat-sel div.sel-item a").on("click", function() {
            if ($(this).attr("class") == "cur") {
                $(this).removeClass("cur");
                be--;
                var cW = $(this).attr("id");
                $.each(ai, function(cX, cZ) {
                    var cY = $(cZ).attr("id");
                    if (cW == cY) {
                        ai.splice(cX, 1)
                    }
                });
                $("#selectNo").html(be + "/" + tickets_info.length)
            } else {
                ai.push($(this));
                $(this).addClass("cur");
                if (be == tickets_info.length) {
                    var cV = ai[be - 1];
                    $(cV).removeClass("cur");
                    ai.splice(be - 1, 1);
                    return
                }
                be++;
                $("#selectNo").html(be + "/" + tickets_info.length)
            }
        })
    }
    function ae() {
        az();
        if (tickets_info && tickets_info.length > 0) {
            var cZ = "Y";
            var cV = tickets_info[0].seat_type;
            for (var cY = 0; cY < tickets_info.length; cY++) {
                var cX = tickets_info[cY];
                if (cX.seat_type != cV) {
                    cZ = "N";
                    break
                }
            }
            if (canChooseSeats && "Y" == canChooseSeats && "Y" == cZ) {
                if (choose_Seats) {
                    var cW = "*如果本次列车剩余席位无法满足您的选座需求，系统将自动为您分配席位。";
                    if ("M" == cV && choose_Seats.indexOf("M") > -1) {
                        $("#id-seat-sel").css("display", "block");
                        $("#yideng1").css("display", "block");
                        if (tickets_info.length > 1) {
                            $("#yideng2").css("display", "block")
                        }
                        $("#notice_1_id").html(cW)
                    }
                    if ("O" == cV && choose_Seats.indexOf("O") > -1) {
                        $("#id-seat-sel").css("display", "block");
                        $("#erdeng1").css("display", "block");
                        if (tickets_info.length > 1) {
                            $("#erdeng2").css("display", "block")
                        }
                        $("#notice_1_id").html(cW)
                    }
                    if ("P" == cV && choose_Seats.indexOf("P") > -1) {
                        $("#id-seat-sel").css("display", "block");
                        $("#tedeng1").css("display", "block");
                        if (tickets_info.length > 1) {
                            $("#tedeng2").css("display", "block")
                        }
                        $("#notice_1_id").html(cW)
                    }
                    if ("9" == cV && choose_Seats.indexOf("9") > -1) {
                        $("#id-seat-sel").css("display", "block");
                        $("#tedeng1").css("display", "block");
                        if (tickets_info.length > 1) {
                            $("#tedeng2").css("display", "block")
                        }
                        $("#notice_1_id").html(cW)
                    }
                }
            }
        }
    }
    function az() {
        $("div#id-seat-sel div.sel-item a").removeClass("cur");
        be = 0;
        ai = new Array();
        $("#selectNo").html(be + "/" + tickets_info.length);
        $("#id-seat-sel.sel-item").css("display", "none");
        $("#id-seat-sel").css("display", "none");
        $("#notice_1_id").html("");
        $("#yideng1").css("display", "none");
        $("#yideng2").css("display", "none");
        $("#erdeng1").css("display", "none");
        $("#erdeng2").css("display", "none");
        $("#tedeng1").css("display", "none");
        $("#tedeng2").css("display", "none")
    }
    function b9() {
        var cV = "";
        $.each($("div#id-seat-sel div.seat-sel-bd a"), function() {
            if ($(this).attr("class") == "cur") {
                var cW = $(this).attr("id");
                cV += cW
            }
        });
        return cV
    }
    function bN() {
        if (be != 0 && be != tickets_info.length) {
            $("#sy_ticket_num_id").html("<span style='color:red;'>请按照乘车人个数选座对应的席位。</span>");
            return false
        } else {
            return true
        }
    }
    function cE() {
        cx();
        if (tickets_info && tickets_info.length > 0) {
            if (canChooseBeds && "Y" == canChooseBeds) {
                $("#id-bed-sel").css("display", "block");
                $("#notice_1_id").html("*选铺后如果系统票额不足，系统将随机为您申请铺位。");
                if (isCanChooseMid && "Y" == isCanChooseMid) {
                    $("#mid_bed").css("display", "block")
                } else {
                    $("#mid_bed").css("display", "none")
                }
            } else {
                $("#id-bed-sel").css("display", "none")
            }
        }
    }
    numSet = function(cY, cV) {
        var c3 = parseInt($("#x_no").text());
        var cZ = parseInt($("#z_no").text());
        var cX = parseInt($("#s_no").text());
        var c1 = tickets_info.length;
        var cW = c3 + cZ + cX;
        if ("add" == cY) {
            if (cW < c1) {
                var c2 = document.getElementById(cV).innerText;
                var c0 = parseInt(c2) + 1;
                document.getElementById(cV).innerText = c0;
                $("#selectBedNo").html(cW + 1 + "/" + c1)
            }
        } else {
            var c2 = document.getElementById(cV).innerText;
            if (cW > 0 && parseInt(c2) > 0) {
                var c0 = parseInt(c2) - 1;
                document.getElementById(cV).innerText = c0;
                $("#selectBedNo").html(cW - 1 + "/" + c1)
            }
        }
    }
    ;
    function cx() {
        $("#x_no").html("0");
        $("#z_no").html("0");
        $("#s_no").html("0");
        $("#selectBedNo").html(0 + "/" + tickets_info.length);
        $("#confirmDiv").css("padding", "20px 0");
        $("#checktrain").css("display", "none")
    }
    function a5() {
        var cV = $("#x_no").text();
        var cW = $("#z_no").text();
        var cX = $("#s_no").text();
        return cV + cW + cX
    }
}
)();
function checkG1234(g, f, c, h, b) {
    var a = "99999GGGGG";
    var e = "##CCT##PPT##CPT##PXT##SBT##PBD##JOD##HPD##SHD##QTP##TSP##TJP##";
    var d = "##CBP##DIP##JGK##ZEK##UUH##NKH##ESH##OHH##AOH##";
    if (c.indexOf(a) > -1 && e.indexOf(h) > -1 && d.indexOf(b) > -1) {
        dhtmlx.createWin({
            winId: "confirmG1234",
            closeWinId: ["close_conifrmdialog_G1234", "cancel_dialog_G1234"],
            okId: "goto_integration_G1234",
            okCallBack: function() {
                submitOrderRequest(g, f)
            },
            callback: function() {
                return
            }
        })
    } else {
        submitOrderRequest(g, f)
    }
}
function checkRandCodeUAM(e) {
    var b = false
      , a = e.value
      , c = "sjrand"
      , d = TouClick.get("touclick-" + e.id);
    $.ajax({
        url: passport_captcha_check,
        type: "post",
        dataType: "json",
        xhrFields: {
            withCredentials: true
        },
        data: {
            answer: a,
            login_site: "E",
            rand: c
        },
        async: false,
        success: function(f) {
            if (f.result_code == "4") {
                b = true;
                d.success();
                setTimeout(function() {
                    if (d.getState() === "success") {
                        d.reload()
                    }
                }, 3000)
            } else {
                b = false;
                var g = f.result_message;
                d.fail()
            }
        }
    });
    return b
}
function refreshImgUAM(c, e, d) {
    if ($(".login .touclick-image").attr("src").indexOf(passport_captcha) != -1) {
        TouClick.get("touclick-" + TouLocal.getRandCodeName(d)).reload();
        return
    }
    var h = "randCode";
    if (targetelement[0] !== "") {
        h += "_" + targetelement[0]
    }
    var b = $("#" + targetdiv[0])
      , g = b.data("code_type");
    var j = "sjrand";
    var f = "E";
    var a = passport_captcha + "?login_site=" + f + "&module=" + g + "&rand=" + j;
    TouClick.ready(function() {
        var k = TouClick.get("touclick-" + h).start({
            gp_url: a,
            onClick: function(m) {
                var o = $("#" + h);
                o.val(m);
                var n = $("#error_msg" + targetdiv[0]);
                var l = o[0];
                if (n.data("tag") === 1) {
                    n.hide()
                }
            },
            onReload: function() {
                $("#" + h).val("");
                $("#error_msg").css("display", "none");
                var l = $.jc_getcookie("current_captcha_type")
            },
            onReloading: function() {
                return true
            }
        })
    });
    TouClick.get("touclick-" + TouLocal.getRandCodeName(d)).reload();
    $(".login .touclick-image").attr("src", a)
}
function verifyRandCodeUAM(d, b) {
    if (typeof (b) !== "boolean") {
        showError(d, b);
        return false
    }
    var a = d.value;
    var c = typeof (TouLocal.getErrorMessage) === "function" ? TouLocal.getErrorMessage(d) : login_messages.pleaseClickCaptcha;
    if ("" == a || null == a) {
        showError(d, c, 1);
        return false
    }
    if (!checkRandCodeUAM(d)) {
        c = typeof (TouLocal.getErrorMessage) === "function" ? TouLocal.getErrorMessage(d, false) : login_messages.pleaseClickCaptcha;
        showError(d, c, 1);
        return false
    }
    showError(d).hide();
    return true
}
;var left_ticket_messages = {
    "leftTicketDTO.from_station": "出发站",
    "leftTicketDTO.to_station": "目的站",
    "leftTicketDTO.train_no": "车次",
    "leftTicketDTO.train_date": "出发日",
    back_train_date: "返程日"
};
jQuery.validator.addMethod("checkLoginUserName", function(f, d) {
    var a = false;
    var c = /^\d{5,11}$/;
    var b = /^[A-Za-z]{1}([A-Za-z0-9]|[_]){0,29}$/;
    var e = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
    if (b.test(f) || e.test(f) || c.test(f)) {
        a = true
    }
    return this.optional(d) || a
}, "wrong username.");
jQuery.validator.addMethod("requiredUserName", function(b, a) {
    if ("用户名／邮箱／手机号" == b) {
        return false
    }
    if (b == null || "" == b) {
        return false
    }
    return true
}, "wrong username.");
jQuery.validator.addMethod("requiredSchoolName", function(b, a) {
    if ("简码／汉字" == b) {
        return false
    }
    if (b == null || "" == b) {
        return false
    }
    return true
}, "wrong schoolname.");
jQuery.validator.addMethod("randCodeRequired", function(b, a) {
    $("#i-ok").css("display", "none");
    return b.length > 0
}, "验证码错误!");
jQuery.validator.addMethod("randCodeFormat", function(c, b) {
    $("#i-ok").css("display", "none");
    var a = /^[a-zA-Z0-9]+$/;
    return this.optional(b) || a.test(c)
}, "验证码错误!");
jQuery.validator.addMethod("randCodeLength", function(b, a) {
    $("#i-ok").css("display", "none");
    return b.length == 4
}, "验证码错误!.");
jQuery.validator.addMethod("integrationCheck", function(b, a) {
    var c = /^\d{6}$/;
    return this.optional(a) || c.test(b)
}, "wrong integrationpassword");
jQuery.validator.addMethod("integrationPwdCheck", function(b, a, c) {
    if ($("#" + c[0]).val() == $("#" + c[1]).val()) {
        return true
    }
    return false
}, "两次输入密码不一致!.");
jQuery.validator.addMethod("checkRandCode", function(c, b, d) {
    var a = true;
    if (c && c.length == 4) {
        $.ajax({
            url: ctx + "passcodeNew/checkRandCodeAnsyn",
            type: "post",
            data: {
                randCode: c,
                rand: d
            },
            async: false,
            success: function(e) {
                if (e.data == "N") {
                    a = false;
                    $("#i-ok").css("display", "none")
                } else {
                    a = true;
                    $("#i-ok").css("display", "block")
                }
            }
        })
    } else {
        a = false;
        $("#i-ok").css("display", "none")
    }
    return a
}, "验证码错误!.");
jQuery.validator.addMethod("validateUsersName", function(b, a) {
    return this.optional(a) || /^[A-Za-z]{1}([A-Za-z0-9]|[_]){0,29}$/.test(b)
}, "用户名只能由字母、数字或_组成");
jQuery.validator.addMethod("checkWriteSpace", function(c, b) {
    for (var a = 0; a < c.length; a++) {
        if (c.charCodeAt(a) == 32) {
            return false
        }
    }
    return true
}, "contain writespace");
jQuery.validator.addMethod("validateRandCode", function(b, a) {
    return this.optional(a) || /^[a-zA-Z0-9]+$/.test(b)
}, "验证码错误!.");
jQuery.validator.addMethod("checkPassward", function(c, b, e) {
    var d = true;
    for (var a = 0; a < c.length; a++) {
        if (c.charCodeAt(a) == 39 || c.charCodeAt(a) == 60 || c.charCodeAt(a) == 62) {
            d = false
        }
        if (!d) {
            break
        }
    }
    return this.optional(b) || d
}, "Passward wrong");
function validateSecIdCard(g) {
    var f = 0;
    var a = g;
    var e = {
        11: "北京",
        12: "天津",
        13: "河北",
        14: "山西",
        15: "内蒙",
        21: "辽宁",
        22: "吉林",
        23: "黑龙",
        31: "上海",
        32: "江苏",
        33: "浙江",
        34: "安徽",
        35: "福建",
        36: "江西",
        37: "山东",
        41: "河南",
        42: "湖北",
        43: "湖南",
        44: "广东",
        45: "广西",
        46: "海南",
        50: "重庆",
        51: "四川",
        52: "贵州",
        53: "云南",
        54: "西藏",
        61: "陕西",
        62: "甘肃",
        63: "青海",
        64: "宁夏",
        65: "新疆",
        71: "台湾",
        81: "香港",
        82: "澳门",
        83: "台湾",
        91: "国外"
    };
    if (!/^\d{17}(\d|x)$/i.test(a)) {
        return false
    }
    a = a.replace(/x$/i, "a");
    if (e[parseInt(a.substr(0, 2))] == null) {
        return false
    }
    var c = a.substr(6, 4) + "-" + Number(a.substr(10, 2)) + "-" + Number(a.substr(12, 2));
    var h = new Date(c.replace(/-/g, "/"));
    if (c != (h.getFullYear() + "-" + (h.getMonth() + 1) + "-" + h.getDate())) {
        return false
    }
    for (var b = 17; b >= 0; b--) {
        f += (Math.pow(2, b) % 11) * parseInt(a.charAt(17 - b), 11)
    }
    if (f % 11 != 1) {
        return false
    }
    return true
}
function validateFirIdCard(g) {
    var f = 0;
    var a;
    var e = {
        11: "北京",
        12: "天津",
        13: "河北",
        14: "山西",
        15: "内蒙",
        21: "辽宁",
        22: "吉林",
        23: "黑龙",
        31: "上海",
        32: "江苏",
        33: "浙江",
        34: "安徽",
        35: "福建",
        36: "江西",
        37: "山东",
        41: "河南",
        42: "湖北",
        43: "湖南",
        44: "广东",
        45: "广西",
        46: "海南",
        50: "重庆",
        51: "四川",
        52: "贵州",
        53: "云南",
        54: "西藏",
        61: "陕西",
        62: "甘肃",
        63: "青海",
        64: "宁夏",
        65: "新疆",
        71: "台湾",
        81: "香港",
        82: "澳门",
        83: "台湾",
        91: "国外"
    };
    if (g.length == 15) {
        a = idCardUpdate(g)
    } else {
        a = g
    }
    if (!/^\d{17}(\d|x)$/i.test(a)) {
        return false
    }
    a = a.replace(/x$/i, "a");
    if (e[parseInt(a.substr(0, 2))] == null) {
        return false
    }
    var c = a.substr(6, 4) + "-" + Number(a.substr(10, 2)) + "-" + Number(a.substr(12, 2));
    var h = new Date(c.replace(/-/g, "/"));
    if (c != (h.getFullYear() + "-" + (h.getMonth() + 1) + "-" + h.getDate())) {
        return false
    }
    for (var b = 17; b >= 0; b--) {
        f += (Math.pow(2, b) % 11) * parseInt(a.charAt(17 - b), 11)
    }
    if (f % 11 != 1) {
        return false
    }
    return true
}
function idCardUpdate(g) {
    var b;
    var f = /^(\d){15}$/;
    if (f.test(g)) {
        var e = 0;
        var a = new Array(7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2);
        var d = new Array("1","0","X","9","8","7","6","5","4","3","2");
        g = g.substr(0, 6) + "19" + g.substr(6, g.length - 6);
        for (var c = 0; c < g.length; c++) {
            e += parseInt(g.substr(c, 1)) * a[c]
        }
        g += d[e % 11];
        b = g
    } else {
        b = "#"
    }
    return b
}
jQuery.validator.addMethod("checkBorth", function(e, c) {
    var b = e;
    if (b == "") {
        return true
    } else {
        var a = b.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
        if (a == null) {
            return false
        }
        var f = new Date(a[1],a[3] - 1,a[4]);
        return (f.getFullYear() == a[1] && (f.getMonth() + 1) == a[3] && f.getDate() == a[4])
    }
}, "日期格式不合法");
jQuery.validator.addMethod("byteRangeLength", function(d, b, e) {
    var c = d.length;
    for (var a = 0; a < d.length; a++) {
        if (d.charCodeAt(a) > 127) {
            c++
        }
    }
    return this.optional(b) || (c >= e[0] && c <= e[1])
}, "length wrong");
jQuery.validator.addMethod("checkNameCharBlank", function(c, b, d) {
    var a = d.split("@");
    if ($("#" + a[1]).val() == "") {
        return true
    } else {
        if ($("#" + a[0]).val() == "1" || $("#" + a[0]).val() == "2") {
            return this.optional(b) || /^[a-zA-Z·.．\u3400-\u9FFF]+$/.test(c)
        } else {
            if ($("#" + a[0]).val() == "B") {
                if (/^[-]+$/.test(c)) {
                    return false
                }
                return this.optional(b) || /^[a-z A-Z·.．\u3400-\u9FFF\-]+$/.test(c)
            } else {
                if ($("#" + a[0]).val() == "H") {
                    return true
                } else {
                    return this.optional(b) || /^[a-z A-Z·.．\u3400-\u9FFF]+$/.test(c)
                }
            }
        }
    }
}, "wrong name.");
jQuery.validator.addMethod("checkNameCharBlankForWork", function(c, b, d) {
    var a = d.split("@");
    if ($("#" + a[0]).val() == "H") {
        return this.optional(b) || /^[a-zA-Z ]+$/.test(c)
    } else {
        return true
    }
}, "wrong name.");
jQuery.validator.addMethod("checkIdValidStr", function(c, b) {
    var a = /^[a-zA-Z0-9\_\-\(\)]+$/;
    return this.optional(b) || (a.test(c))
}, "wrong id");
jQuery.validator.addMethod("isSecIDCard", function(b, a, c) {
    if (!checkIfSecIdCard($(c).val())) {
        return true
    }
    return validateSecIdCard(b)
}, "wrong");
function checkIfSecIdCard(a) {
    if (a == "1") {
        return true
    }
    return false
}
function checkIfFirIdCard(a) {
    if (a == "2") {
        return true
    }
    return false
}
function checkCardForHKorTW(a) {
    if (a == "C" || a == "G") {
        return true
    }
    return false
}
jQuery.validator.addMethod("isFirIDCard", function(b, a, c) {
    if (!checkIfFirIdCard($(c).val())) {
        return true
    }
    return validateFirIdCard(b)
}, "wrong");
jQuery.validator.addMethod("checkHkongMacaoOld", function(c, b, d) {
    if ($(d).val() == "C") {
        var a = /^[HMhm]{1}([0-9]{10}|[0-9]{8})$/;
        return this.optional(b) || (a.test(c))
    } else {
        return true
    }
}, "wrong format.");
jQuery.validator.addMethod("checkTaiwOld", function(c, a, e) {
    if ($(e).val() == "G") {
        var d = /^[0-9]{8}$/;
        var b = /^[0-9]{10}$/;
        return this.optional(a) || (d.test(c)) || (b.test(c))
    } else {
        return true
    }
}, "wrong format.");
jQuery.validator.addMethod("checkHkongMacao", function(c, b, d) {
    if ($(d).val() == "C") {
        var a = /^[HMhm]{1}([0-9]{8})$/;
        return this.optional(b) || (a.test(c))
    } else {
        return true
    }
}, "wrong format.");
jQuery.validator.addMethod("checkTaiw", function(b, a, d) {
    if ($(d).val() == "G") {
        var c = /^[0-9]{8}$/;
        return this.optional(a) || (c.test(b))
    } else {
        return true
    }
}, "wrong format.");
jQuery.validator.addMethod("checkPassport", function(d, b, e) {
    if ($(e).val() == "B") {
        var c = /^[a-zA-Z]{5,17}$/;
        var a = /^[a-zA-Z0-9]{5,17}$/;
        return this.optional(b) || (a.test(d)) || c.test(d)
    } else {
        return true
    }
}, "wrong format.");
jQuery.validator.addMethod("checkWork", function(c, b, d) {
    if ($(d).val() == "H") {
        var a = /^[a-zA-Z]{3}[0-9]{12}$/;
        return this.optional(b) || (a.test(c))
    } else {
        return true
    }
}, "wrong format.");
jQuery.validator.addMethod("checkGATJmjzz", function(d, b, e) {
    var a = e.split("@");
    if ($("#" + a[0]).val() == "1") {
        var c = d.substring(0, 2)
    }
    return true
}, "wrong format.");
jQuery.validator.addMethod("isMobile", function(d, b) {
    var c = d.length;
    var a = /^\d{5,11}$/;
    return this.optional(b) || (a.test(d))
}, "wrong mobile phone ");
jQuery.validator.addMethod("isTelePhone", function(b, a) {
    var c = /(^[0-9]{3,4}\-[0-9]{3,8}$)|(^[0-9]{3,8}$)|(^[0-9]{3,4}\)[0-9]{3,8}$)|(^0{0,1}13[0-9]{9}#)/;
    return this.optional(a) || (c.test(b))
}, "wrong telePhone ");
jQuery.validator.addMethod("illegalChar", function(c, b, e) {
    var d = true;
    if (c.indexOf("$") >= 0) {
        return false
    }
    for (var a = 0; a < c.length; a++) {
        if (c.charCodeAt(a) == 39 || c.charCodeAt(a) == 60 || c.charCodeAt(a) == 62 || c.charCodeAt(a) == 34 || c.charCodeAt(a) == 63) {
            d = false
        }
        if (!d) {
            break
        }
    }
    return this.optional(b) || d
}, "Illegal char wrong");
jQuery.validator.addMethod("isZipCode", function(c, b) {
    var a = /^[0-9]{6}$/;
    return this.optional(b) || (a.test(c))
}, "wrong zipcode");
jQuery.validator.addMethod("isEmail", function(c, a) {
    var b = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return this.optional(a) || (b.test(trim(c)))
}, "wrong email");
function replaceChar(b) {
    var a = b.value.replace(/['"<> ?]/g, "");
    b.value = a
}
function checkNameChar1(a) {
    return /^[a-zA-Z0-9\u3400-\u9FFF]+$/.test(a)
}
function trim(a) {
    return a.replace(/(^\s*)|(\s*$)/g, "")
}
function ltrim(a) {
    return a.replace(/(^\s*)/g, "")
}
function rtrim(a) {
    return a.replace(/(\s*$)/g, "")
}
jQuery.validator.addMethod("validateName", function(b, a) {
    return this.optional(a) || /^[a-zA-Z\u3400-\u9FFF0-9\_]+$/.test(b)
}, "wrong username.");
jQuery.validator.addMethod("studentRequired", function(b, a, c) {
    if ($(c).val() == "3") {
        return b && trim(b) != ""
    }
    return true
}, "wrong studentRequired.");
jQuery.validator.addMethod("studentStationRequired", function(b, a, c) {
    if ($(c).val() == "3") {
        return b && trim(b) != "简拼/全拼/汉字" && trim(b) != ""
    }
    return true
}, "wrong studentStationRequired.");
jQuery.validator.addMethod("studentValidateName", function(b, a, c) {
    if ($(c).val() == "3") {
        return this.optional(a) || /^[a-zA-Z\u3400-\u9FFF0-9\_]+$/.test(b)
    }
    return true
}, "wrong username.");
jQuery.validator.addMethod("checkStudentName", function(b, a, c) {
    if ($(c).val() == "3") {
        if ((!b || trim(b) == "" || trim(b) == "简码/汉字")) {
            return false
        }
    }
    return true
}, "wrong username.");
jQuery.validator.addMethod("isQuestionNull", function(b, a, c) {
    if (jQuery.trim(b) != "") {
        if (jQuery.trim($(c[0]).val()) == "customQuestion" && jQuery.trim($(c[1]).val()) == "" || jQuery.trim($(c[0]).val()) == "") {
            return false
        }
    }
    return true
}, "you should input the question");
jQuery.validator.addMethod("isAnswerNull", function(b, a, c) {
    if ((jQuery.trim($(c[0]).val()) == "customQuestion" && jQuery.trim($(c[1]).val()) != "") || (jQuery.trim($(c[0]).val()) != "")) {
        if (jQuery.trim(b) == "") {
            return false
        }
    }
    return true
}, "you should input the answer");
function checkSex(c, b, a) {
    if (!checkSexByCardId(c, b, a)) {
        if (!confirm("性别与身份证中的性别不符，是否继续?")) {
            return false
        } else {
            return true
        }
    } else {
        return true
    }
}
function checkSexByCardId(c, e, a) {
    function b(h, i) {
        var g = null;
        if (i.length == 15) {
            g = i.substring(14, 15)
        } else {
            if (i.length == 18) {
                g = i.substring(16, 17)
            } else {
                return true
            }
        }
        if (g == "x" || g == "X") {
            g = "10"
        }
        var f = parseInt(g);
        var j = f % 2;
        if (j === 0 && h === "F") {
            return true
        } else {
            if (j === 1 && h === "M") {
                return true
            } else {
                return false
            }
        }
    }
    var d = $(a).val();
    if (checkIfSecIdCard($(e).val()) && validateSecIdCard(d)) {
        if (d !== "") {
            return b(c, d)
        } else {
            return true
        }
    } else {
        if (checkIfFirIdCard($(e).val()) && validateFirIdCard(d)) {
            if (d !== "") {
                return b(c, d)
            } else {
                return true
            }
        } else {
            return true
        }
    }
}
function checkBirdDateByCardId(c, e, b) {
    var a = null;
    var d = $(b).val();
    if (checkIfSecIdCard($(e).val()) && d !== "" && validateSecIdCard(d)) {
        a = d.substring(6, 14)
    } else {
        if (checkIfFirIdCard($(e).val()) && d !== "" && validateFirIdCard(d)) {
            if (d.length == 15) {
                a = "19" + d.substring(6, 12)
            } else {
                if (d.length == 18) {
                    a = d.substring(6, 14)
                }
            }
        } else {
            return true
        }
    }
    if (c !== "") {
        c = c.replace(/-/g, "");
        if (c != a) {
            return false
        } else {
            return true
        }
    } else {
        return true
    }
}
function checkBirdate(c, b, a) {
    if (!checkBirdDateByCardId(c, b, a)) {
        if (!confirm("出生日期与身份证中的出生日期不符，是否继续?")) {
            return false
        } else {
            return true
        }
    } else {
        return true
    }
}
jQuery.validator.addMethod("checkPwdValidate", function(b, a) {
    return this.optional(a) || /(?![a-z]+$|[0-9]+$|_+$)^[a-zA-Z0-9_]{6,}$/.test(b)
}, "contain writespace");
jQuery.validator.addMethod("checkConfirmPassWard", function(b, a, c) {
    if ($(c).val() != null) {
        return $(c).val() == b
    }
    return true
}, "contain writespace");
jQuery.validator.addMethod("IVR_passwd_format", function(b, a) {
    var c = /^[0-9]{6}$/;
    return this.optional(a) || c.test(b)
}, "验证码错误!.");
jQuery.validator.addMethod("checkStation", function(b, a) {
    if ((!b || trim(b) == "" || trim(b) == "简拼/全拼/汉字" || trim(b) == "简拼/全拼/汉字或↑↓")) {
        return false
    }
    return true
}, "wrong username.");
jQuery.validator.addMethod("checkAnsyUserName", function(e, c, f) {
    var b = f[0];
    var d = $("#" + f[1]).val();
    var a = true;
    $.ajax({
        url: b + "?user_name=" + e,
        type: "get",
        async: false,
        success: function(g, h) {
            if (g.data == true) {
                a = false
            } else {
                a = true
            }
        },
        error: function(g, i, h) {
            a = false
        }
    });
    return a
}, "wrong cardNo");
function checkPwdRank(e, a, d) {
    var b = $(e);
    var c = b.val();
    if (c.length <= 6 || new RegExp("^[a-zA-Z]{6,}$").test(c) || new RegExp("^[0-9]{6,}$").test(c) || new RegExp("^[_]{6,}$").test(c)) {
        $("#" + a).attr("title", "危险");
        $("#" + d).html("危险");
        $("#" + a).removeClass("rank-a");
        $("#" + a).removeClass("rank-b");
        $("#" + a).removeClass("rank-c");
        $("#" + a).addClass("rank-a")
    } else {
        if (c.length > 6 && new RegExp("[a-zA-Z]").test(c) && new RegExp("[0-9]").test(c) && new RegExp("[_]").test(c)) {
            $("#" + a).attr("title", "安全");
            $("#" + d).html("安全");
            $("#" + a).removeClass("rank-a");
            $("#" + a).removeClass("rank-b");
            $("#" + a).removeClass("rank-c");
            $("#" + a).addClass("rank-c")
        } else {
            $("#" + a).attr("title", "一般");
            $("#" + d).html("一般");
            $("#" + a).removeClass("rank-a");
            $("#" + a).removeClass("rank-b");
            $("#" + a).removeClass("rank-c");
            $("#" + a).addClass("rank-b")
        }
    }
}
Array.prototype.unique = function() {
    var b = {}
      , a = this.length;
    for (var c = 0; c < a; c++) {
        if (typeof b[this[c]] == "undefined") {
            b[this[c]] = 1
        }
    }
    this.length = 0;
    a = 0;
    for (var c in b) {
        this[a++] = c
    }
    return this
}
;
function checkSearchPwdRank(h, c, g) {
    var e = $(h);
    var f = e.val();
    if (f.length < 6) {
        $("#" + c).attr("title", "危险");
        $("#" + g).html("危险");
        $("#" + c).removeClass("rank-a");
        $("#" + c).removeClass("rank-b");
        $("#" + c).removeClass("rank-c");
        $("#" + c).addClass("rank-a")
    } else {
        var a = [];
        for (var b = 0; b < 6; b++) {
            a.push(f.charAt(b))
        }
        a = a.unique();
        var d = a.length;
        if (d == 1) {
            $("#" + c).attr("title", "危险");
            $("#" + g).html("危险");
            $("#" + c).removeClass("rank-a");
            $("#" + c).removeClass("rank-b");
            $("#" + c).removeClass("rank-c");
            $("#" + c).addClass("rank-a")
        } else {
            if (d > 1 && d < 5) {
                $("#" + c).attr("title", "一般");
                $("#" + g).html("一般");
                $("#" + c).removeClass("rank-a");
                $("#" + c).removeClass("rank-b");
                $("#" + c).removeClass("rank-c");
                $("#" + c).addClass("rank-b")
            } else {
                $("#" + c).attr("title", "安全");
                $("#" + g).html("安全");
                $("#" + c).removeClass("rank-a");
                $("#" + c).removeClass("rank-b");
                $("#" + c).removeClass("rank-c");
                $("#" + c).addClass("rank-c")
            }
        }
    }
}
jQuery.validator.addMethod("checkDetailAddress", function(b, a) {
    return this.optional(a) || /^[0-9a-zA-Z\u3400-\u9FFF\#]+$/.test(b)
}, "wrong name.");
jQuery.validator.addMethod("checkAddressName", function(b, a) {
    if (/^[-]+$/.test(b)) {
        return false
    }
    return this.optional(a) || /^[a-z A-Z·.．\u3400-\u9FFF\-]+$/.test(b) || /^[a-zA-Z·.．\u3400-\u9FFF]+$/.test(b)
}, "wrong name.");
jQuery.validator.addMethod("checkAddressSelect", function(b, a) {
    if ("" == b) {
        return false
    }
    if (b) {
        return true
    }
    return this.optional(a)
}, "wrong name.");
var login_messages = {
    randCodeError: "验证码错误!",
    randCodeExpired: "验证码失效",
    randCodeLentgh: "验证码长度为4位!",
    randCodeFormat: "验证码只能由数字或字母组成!",
    randCodeEmpty: "验证码不能为空!",
    userNameEmpty: "登录名必须填写!",
    userNameFormat: "登录名格式不正确，请重新输入!",
    passwordEmpty: "密码必须填写,且不少于6位!",
    passwordLength: "密码长度不能少于6位!",
    pleaseClickCaptcha: "请点击验证码",
    pleaseClickLeftCaptcha: "请点击左侧验证码",
    pleaseClickCaptchaRight: "请点击正确的验证码",
    pleaseClickBottomCaptcha: "请点击下方验证码",
    loginError: "当前访问用户过多,请稍候重试!",
    submitAfterVerify: "提交",
    pleaseClickSubmitButtonAfterClick: "pleaseClickSubmitButtonAfterClick",
    leftTicketOrderNoteMessage: '点击"提交"按钮获取验证码',
    leftTicketOrderClickCallbackNoteMessage: '完成选择后，继续点击下方橙色"提交"按钮提交订单',
    leftTicketOrderShowCallbackNoteMessage: "按照提示点击选择所有的图片",
    leftTicketOrderHiddenCallbackNoteMessage: '点击"提交"按钮获取验证码',
    getCaptchaByClick: "点击获取验证码"
};
function Marquee(a) {
    if (a == null || a == "") {
        return
    }
    this.ID = document.getElementById(a.ID);
    if (!this.ID) {
        this.id = -1;
        return
    }
    this.Direction = this.Width = this.Height = this.DelayTime = this.WaitTime = this.CTL = this.StartID = this.Stop = this.MouseOver = 0;
    this.Step = 1;
    this.Timer = 30;
    this.DirectionArray = {
        top: 0,
        up: 0,
        bottom: 1,
        down: 1,
        left: 2,
        right: 3
    };
    if (typeof a.Direction == "number" && a.Direction) {
        this.Direction = a.Direction
    }
    if (typeof a.Direction == "string" && a.Direction) {
        this.Direction = this.DirectionArray[a.Direction.toString().toLowerCase()]
    }
    if (typeof a.Step == "number" && a.Step) {
        this.Step = a.Step
    }
    if (typeof a.Width == "number" && a.Width) {
        this.Width = a.Width
    }
    if (typeof a.Height == "number" && a.Height) {
        this.Height = a.Height
    }
    if (typeof a.Timer == "number" && a.Timer) {
        this.Timer = a.Timer
    }
    if (typeof a.DelayTime == "number" && a.DelayTime) {
        this.DelayTime = a.DelayTime
    }
    if (typeof a.WaitTime == "number" && a.WaitTime) {
        this.WaitTime = a.WaitTime
    }
    if (typeof a.ScrollStep == "number" && a.ScrollStep) {
        this.ScrollStep = a.ScrollStep
    }
    this.ID.style.overflow = this.ID.style.overflowX = this.ID.style.overflowY = "hidden";
    this.ID.noWrap = true;
    this.IsNotOpera = (navigator.userAgent.toLowerCase().indexOf("opera") == -1);
    this.Start()
}
Marquee.prototype.Start = function() {
    if (this.ID == -1) {
        return
    }
    if (this.Width == 0) {
        this.Width = parseInt(this.ID.style.width)
    }
    if (this.Height == 0) {
        this.Height = parseInt(this.ID.style.height)
    }
    if (this.Timer < 20) {
        this.Timer = 20
    }
    if (this.WaitTime < 800) {
        this.WaitTime = 800
    }
    this.HalfWidth = Math.round(this.Width / 2);
    this.HalfHeight = Math.round(this.Height / 2);
    this.BakStep = this.Step;
    this.ID.style.width = this.Width + "px";
    this.ID.style.height = this.Height + "px";
    if (typeof this.ScrollStep != "number") {
        this.ScrollStep = this.Direction > 1 ? this.Width : this.Height
    }
    var d = "<table cellspacing='0' cellpadding='0' style='border-collapse:collapse;display:inline;'><tr><td noWrap=true style='white-space: nowrap;word-break:keep-all;padding-right:100px;'>MSCLASS_TEMP_HTML</td><td noWrap=true style='white-space: nowrap;word-break:keep-all;'>MSCLASS_TEMP_HTML</td></tr></table>";
    var b = "<table cellspacing='0' cellpadding='0' style='border-collapse:collapse;'><tr><td>MSCLASS_TEMP_HTML</td></tr><tr><td>MSCLASS_TEMP_HTML</td></tr></table>";
    var e = this;
    e.tempHTML = e.ID.innerHTML;
    if (e.Direction <= 1) {
        e.ID.innerHTML = b.replace(/MSCLASS_TEMP_HTML/g, e.ID.innerHTML)
    } else {
        if (e.ScrollStep == 0 && e.DelayTime == 0) {
            e.ID.innerHTML += e.ID.innerHTML
        } else {
            e.ID.innerHTML = d.replace(/MSCLASS_TEMP_HTML/g, e.ID.innerHTML)
        }
    }
    var f = this.Timer;
    var a = this.DelayTime;
    var c = this.WaitTime;
    e.StartID = function() {
        e.Scroll()
    }
    ;
    e.Continue = function() {
        if (e.MouseOver == 1) {
            setTimeout(e.Continue, a)
        } else {
            clearInterval(e.TimerID);
            e.CTL = e.Stop = 0;
            e.TimerID = setInterval(e.StartID, f)
        }
    }
    ;
    e.Pause = function() {
        e.Stop = 1;
        clearInterval(e.TimerID);
        setTimeout(e.Continue, a)
    }
    ;
    e.Begin = function() {
        e.ClientScroll = e.Direction > 1 ? e.ID.scrollWidth / 2 : e.ID.scrollHeight / 2;
        if ((e.Direction <= 1 && e.ClientScroll <= e.Height + e.Step) || (e.Direction > 1 && e.ClientScroll <= e.Width + e.Step)) {
            e.ID.innerHTML = e.tempHTML;
            delete (e.tempHTML);
            return
        }
        delete (e.tempHTML);
        e.TimerID = setInterval(e.StartID, f);
        if (e.ScrollStep < 0) {
            return
        }
        e.ID.onmousemove = function(g) {
            if (e.ScrollStep == 0 && e.Direction > 1) {
                var g = g || window.event;
                if (window.event) {
                    if (e.IsNotOpera) {
                        e.EventLeft = g.srcElement.id == e.ID.id ? g.offsetX - e.ID.scrollLeft : g.srcElement.offsetLeft - e.ID.scrollLeft + g.offsetX
                    } else {
                        e.ScrollStep = null;
                        return
                    }
                } else {
                    e.EventLeft = g.layerX - e.ID.scrollLeft
                }
                e.Direction = e.EventLeft > e.HalfWidth ? 3 : 2;
                e.AbsCenter = Math.abs(e.HalfWidth - e.EventLeft);
                e.Step = Math.round(e.AbsCenter * (e.BakStep * 2) / e.HalfWidth)
            }
        }
        ;
        e.ID.onmouseover = function() {
            if (e.ScrollStep == 0) {
                return
            }
            e.MouseOver = 1;
            clearInterval(e.TimerID)
        }
        ;
        e.ID.onmouseout = function() {
            if (e.ScrollStep == 0) {
                if (e.Step == 0) {
                    e.Step = 1
                }
                return
            }
            e.MouseOver = 0;
            if (e.Stop == 0) {
                clearInterval(e.TimerID);
                e.TimerID = setInterval(e.StartID, f)
            }
        }
    }
    ;
    setTimeout(e.Begin, c)
}
;
Marquee.prototype.Scroll = function() {
    switch (this.Direction) {
    case 0:
        this.CTL += this.Step;
        if (this.CTL >= this.ScrollStep && this.DelayTime > 0) {
            this.ID.scrollTop += this.ScrollStep + this.Step - this.CTL;
            this.Pause();
            return
        } else {
            if (this.ID.scrollTop >= this.ClientScroll) {
                this.ID.scrollTop -= this.ClientScroll
            }
            this.ID.scrollTop += this.Step
        }
        break;
    case 1:
        this.CTL += this.Step;
        if (this.CTL >= this.ScrollStep && this.DelayTime > 0) {
            this.ID.scrollTop -= this.ScrollStep + this.Step - this.CTL;
            this.Pause();
            return
        } else {
            if (this.ID.scrollTop <= 0) {
                this.ID.scrollTop += this.ClientScroll
            }
            this.ID.scrollTop -= this.Step
        }
        break;
    case 2:
        this.CTL += this.Step;
        if (this.CTL >= this.ScrollStep && this.DelayTime > 0) {
            this.ID.scrollLeft += this.ScrollStep + this.Step - this.CTL;
            this.Pause();
            return
        } else {
            if (this.ID.scrollLeft >= this.ClientScroll) {
                this.ID.scrollLeft -= this.ClientScroll
            }
            this.ID.scrollLeft += this.Step
        }
        break;
    case 3:
        this.CTL += this.Step;
        if (this.CTL >= this.ScrollStep && this.DelayTime > 0) {
            this.ID.scrollLeft -= this.ScrollStep + this.Step - this.CTL;
            this.Pause();
            return
        } else {
            if (this.ID.scrollLeft <= 0) {
                this.ID.scrollLeft += this.ClientScroll
            }
            this.ID.scrollLeft -= this.Step
        }
        break
    }
}
;
var popup_browser = navigator.appName;
var popup_b_version = navigator.appVersion;
var popup_version = popup_b_version.split(";");
var popup_trin_version_flag = popup_version && popup_version.length > 1;
var popup_trim_Version = popup_trin_version_flag ? popup_version[1].replace(/[ ]/g, "") : "";
var popup_uam_dataType = "json";
var popup_uam_type = "POST";
if (popup_browser == "Microsoft Internet Explorer" && popup_trim_Version == "MSIE7.0") {
    popup_uam_dataType = "jsonp";
    popup_uam_type = "GET"
} else {
    if (popup_browser == "Microsoft Internet Explorer" && popup_trim_Version == "MSIE8.0") {
        popup_uam_dataType = "jsonp";
        popup_uam_type = "GET"
    } else {
        if (popup_browser == "Microsoft Internet Explorer" && popup_trim_Version == "MSIE9.0") {
            popup_uam_dataType = "jsonp";
            popup_uam_type = "GET"
        }
    }
}
var popup_passport_appId = "otn";
var popup_passport_baseUrl = "https://kyfw.12306.cn/passport/";
var popup_passport_apptk_static = popup_passport_baseUrl + "web/auth/uamtk-static";
var popup_passport_login = popup_passport_baseUrl + "web/login";
var popup_passport_uamtk = popup_passport_baseUrl + "web/auth/uamtk";
var popup_passport_uamtk = popup_passport_baseUrl + "web/auth/uamtk";
var slide_passport_url = popup_passport_baseUrl + "web/slide-passcode";
var check_login_passport_url = popup_passport_baseUrl + "web/checkLoginVerify";
var popup_is_uam_login = "Y";
var popup_is_login_passCode = "Y";
var popup_is_sweep_login = "Y";
var popup_is_login = "N";
var popup_baseUrl = "https://kyfw.12306.cn";
var popup_publicName = "/otn";
var base_uamauthclient_url = popup_baseUrl + popup_publicName + "/uamauthclient";
var base_checkUpMeg = popup_baseUrl + popup_publicName + "/login/checkUpMeg";
var apptk_tmp_control = "";
var SM4_key = "tiekeyuankp12306";
var isPasscode = false;
var appkey = "FFFF0N000000000085DE";
var nc = null;
var nc_token = "";
var csessionid = "";
var sig = "";
var scene = "nc_login";
var popup_sms_verification = popup_passport_baseUrl + "web/getMessageCode";
var modalType = 1;
var popup_is_message_passCode = "Y";
var modalTime = 60;
var set_time;
var is_key_up = "";
var popup_loginCallBack = function(a) {
    if (!$.popup_isPop && a != "control") {
        window.location.href = popup_baseUrl + popup_publicName + "/login/userLogin"
    } else {
        if ("Y" == popup_is_uam_login) {
            $.ajax({
                type: "POST",
                url: popup_passport_uamtk,
                async: false,
                data: {
                    appid: popup_passport_appId
                },
                dataType: "jsonp",
                jsonp: "callback",
                success: function(b) {
                    $("#login_control_app").hide();
                    $("#login_control_offline").hide();
                    $("#login_control_error").hide();
                    if (b.result_code == 0) {
                        var c = b.newapptk || b.apptk;
                        $.popup_login_control(c);
                        if (typeof $.pop_callback === "function") {
                            $.pop_callback()
                        }
                    } else {
                        if (b.result_code == 91) {
                            var c = b.newapptk || b.apptk;
                            apptk_tmp_control = c;
                            $("#login_control_mobile").html("请用尾号" + b.mobile + "手机号发短信666到12306。");
                            $("#modal").hide();
                            $(".mask").hide();
                            $("#login_control_submit").css({
                                height: "30px",
                                "line-height": "20px"
                            });
                            $("#login_control_msg").show()
                        } else {
                            if (b.result_code == 95) {
                                var c = b.newapptk || b.apptk;
                                apptk_tmp_control = c;
                                $("#modal").hide();
                                $(".mask").hide();
                                $("#login_control_app").show()
                            } else {
                                if (b.result_code == 94) {
                                    var c = b.newapptk || b.apptk;
                                    apptk_tmp_control = c;
                                    $("#modal").hide();
                                    $(".mask").hide();
                                    $("#login_control_offline").show()
                                } else {
                                    if (b.result_code == 97) {
                                        var c = b.newapptk || b.apptk;
                                        apptk_tmp_control = c;
                                        $.slide_passport(false)
                                    }
                                }
                            }
                        }
                    }
                },
                error: function() {}
            })
        } else {
            $(".mask").fadeOut();
            $("#login").hide();
            if ($.pop_secretStr && $.pop_start_time) {
                $.todo_submitOrderRe($.pop_secretStr, $.pop_start_time)
            }
            if (typeof $.pop_callback === "function") {
                $.pop_callback()
            }
        }
    }
};
var popup_loginedCallBack = function() {
    if (!$.popup_isPop) {
        window.location.href = popup_baseUrl + popup_publicName + "/view/index.html"
    }
};
var popup_qr_appId = "otn";
var popup_url = {
    loginConf: popup_baseUrl + popup_publicName + "/login/conf",
    getPassCodeNew: popup_baseUrl + popup_publicName + "/passcodeNew/getPassCodeNew?module=login&rand=sjrand&",
    checkRandCodeAnsyn: popup_baseUrl + popup_publicName + "/passcodeNew/checkRandCodeAnsyn",
    login: popup_baseUrl + popup_publicName + "/login/loginAysnSuggest",
    getBanners: popup_baseUrl + popup_publicName + "/index12306/getLoginBanner",
    loginSlide: popup_baseUrl + popup_publicName + "/slide/loginSlide",
    qr: popup_baseUrl + "/passport/web/create-qr",
    qr64: popup_baseUrl + "/passport/web/create-qr64",
    checkqr: popup_baseUrl + "/passport/web/checkqr"
};
var popup_defaultPasscodeHeight = 30;
var popup_ifSuccessCode = false;
var popup_ispopup_CreateQr = false;
var popup_t = null
  , popup_s = "-1";
var popup_isPopupLogin = true;
var forie = "forie.html";
$(document).ready(function() {
    try {
        var a = window.location.pathname.split("/")[3];
        if (a == "login.html") {
            setTimeout(function() {
                $(".login-box").focus()
            }, 500)
        }
    } catch (b) {}
});
jQuery.extend({
    pop_secretStr: "",
    pop_start_time: "",
    popup_isPop: true,
    pop_callback: function() {},
    popup_show_login_error: function(b) {
        if ("验证码错误！" != b && "请选择验证码！" != b) {
            $("#J-password").val("")
        }
        if (b && b.indexOf("重新设置密码") > -1) {
            b = b.substring(0, b.indexOf("重新设置密码")) + '<a href="' + popup_baseUrl + popup_publicName + '/forgetPassword/initforgetMyPassword" style="color:#3B99FC">重新设置密码</a>' + b.substring(b.indexOf("重新设置密码") + 6)
        }
        $("#J-login-error").show().find("span").html(b);
        try {
            setTimeout(function() {
                $("#J-login-error").attr("aria-label", b);
                $("#J-login-error").focus()
            }, 1000)
        } catch (a) {}
    },
    popup_hide_login_error: function() {
        setTimeout(function() {
            $("#J-login-error").hide().find("span").html("")
        }, 1000)
    },
    popup_is_allow_msg: function(b) {
        var a = $("#up_msg_code").val();
        var c = {};
        if (b.flag) {
            c.sessionId = b.sessionId;
            c.sig = b.sig;
            c.if_check_slide_passcode_token = b.if_check_slide_passcode_token;
            c.scene = b.scene;
            c.tk = b.tk
        } else {
            c.tk = b;
            c.randCode = a
        }
        $.ajax({
            type: "POST",
            async: false,
            url: base_checkUpMeg,
            data: c,
            datatype: "json",
            success: function(d) {
                var e = d.data;
                if (e) {
                    $.popup_login_control(c)
                } else {
                    $("#login_control_error").show()
                }
            },
            error: function() {}
        })
    },
    popup_login_control: function(a) {
        if (!$.popup_isPop) {
            window.location.href = popup_baseUrl + popup_publicName + "/login/userLogin"
        } else {
            $.ajax({
                type: "POST",
                async: false,
                url: base_uamauthclient_url,
                data: {
                    tk: typeof a == "object" ? a.tk : a
                },
                datatype: "json",
                success: function(b) {
                    if (b.result_code == 0) {
                        $(".mask").fadeOut();
                        $("#login").hide();
                        if ($.pop_secretStr && $.pop_start_time) {
                            $.todo_submitOrderRe($.pop_secretStr, $.pop_start_time)
                        }
                    }
                },
                error: function() {}
            })
        }
    },
    popup_loginForUam: function(e) {
        var d = {};
        if (e) {
            d = e
        } else {
            var a = "";
            var c = $("#J-passCodeCoin div");
            for (var b = 0; b < c.length; b++) {
                a += $(c[b]).attr("randcode") + ","
            }
            a = a.substring(0, a.length - 1);
            d.username = $("#J-userName").val().trim();
            d.password = "@" + encrypt_ecb($("#J-password").val(), SM4_key);
            d.appid = popup_passport_appId;
            d.answer = a
        }
        $.ajax({
            crossDomain: true,
            url: popup_passport_login,
            data: d,
            dataType: popup_uam_dataType,
            type: popup_uam_type,
            timeout: 10000,
            xhrFields: {
                withCredentials: true
            },
            headers: {
                isPasswordCopy: paste
            },
            success: function(g) {
                if (g.result_code == 0) {
                    $.popup_hideCommonLogin();
                    $("#login_slide_mask").hide();
                    $("#modal").hide();
                    popup_loginCallBack()
                } else {
                    if (g.result_code == 91) {
                        popup_loginCallBack("control")
                    } else {
                        if (g.result_code == 94) {
                            popup_loginCallBack("control")
                        } else {
                            if (g.result_code == 95) {
                                popup_loginCallBack("control")
                            } else {
                                if (g.result_code == 97) {
                                    popup_loginCallBack("control")
                                } else {
                                    if (g.result_code == 101) {
                                        var f = '您的密码很久没有修改了，为降低安全风险，请您<a href="' + popup_baseUrl + popup_publicName + '/forgetPassword/initforgetMyPassword" style="color:#3B99FC">重新设置密码</a>后再登录。';
                                        $.popup_show_login_error(f);
                                        $("#J-passCodeCoin").html("")
                                    } else {
                                        $.message_show(g.result_message)
                                    }
                                }
                            }
                        }
                    }
                }
            },
            error: function() {
                $.popup_hideCommonLogin();
                $("#login_slide_mask").hide();
                $("#modal").hide()
            }
        })
    },
    message_show: function(a) {
        if (modalType == 1) {
            $.popup_show_login_error(a);
            $("#J-passCodeCoin").html("");
            $("#modal").hide();
            $("#login_slide_mask").hide();
            $("#login").show();
            try {
                setTimeout(function() {
                    $("#login").focus()
                }, 1000)
            } catch (b) {}
        } else {
            $("#message p").html(a);
            $("#message").show();
            try {
                setTimeout(function() {
                    $("#message").attr("aria-label", a);
                    $("#message").focus()
                }, 1000)
            } catch (b) {}
        }
    },
    popup_loginForLocation_passcode: function(a) {
        $.ajax({
            url: popup_url.login,
            data: a,
            type: "POST",
            timeout: 10000,
            success: function(b) {
                var c = b.data;
                if (c && c.loginCheck == "Y") {
                    $.popup_hideCommonLogin();
                    $("#login_slide_mask").hide();
                    $("#modal").hide();
                    popup_loginCallBack()
                } else {
                    if (c && c.message) {
                        $.message_show(c.message)
                    } else {
                        if (b.messages) {
                            $.message_show(b.messages);
                            if (popup_is_uam_login == "Y") {
                                $.message_show(b.messages)
                            } else {
                                $.message_show(b.messages[0])
                            }
                        } else {
                            $.popup_hideCommonLogin()
                        }
                    }
                }
            },
            error: function(b) {
                $.popup_hideCommonLogin();
                $(".mask").css({
                    "z-index": 0
                });
                $(".#login").fadeOut();
                $(".mask").fadeOut();
                $("#login_slide_mask").hide()
            }
        })
    },
    popup_loginForLocation: function() {
        $.ajax({
            url: popup_url.login,
            data: {
                "loginUserDTO.user_name": $("#J-userName").val(),
                "userDTO.password": "@" + encrypt_ecb($("#J-password").val(), SM4_key)
            },
            type: "POST",
            timeout: 10000,
            success: function(a) {
                var b = a.data;
                if (b && b.loginCheck == "Y") {
                    $.popup_hideCommonLogin();
                    popup_loginCallBack()
                } else {
                    if (b && b.message) {
                        $.popup_show_login_error(b.message)
                    } else {
                        if (a.messages) {
                            $.popup_show_login_error(a.messages)
                        } else {
                            $.popup_hideCommonLogin()
                        }
                    }
                }
            },
            error: function(a) {
                $.popup_hideCommonLogin()
            }
        })
    },
    popup_hideCommonLogin: function() {
        $("#J-userName").val("");
        $("#J-password").val("");
        $("#J-login-error").hide();
        paste = "N"
    },
    popup_showLoginType: function(a) {
        $("#J-loginImgArea").hide();
        $(".lgcode-error").hide();
        $(".lgcode-loading").hide();
        $(".lgcode-loading img").hide();
        $(".lgcode-success").hide();
        if (0 == a) {
            $("#J-loginImgArea").show()
        } else {
            if (1 == a) {
                $(".lgcode-error").show()
            } else {
                if (2 == a) {
                    $(".lgcode-success").show()
                } else {
                    if (3 == a) {
                        $(".lgcode-loading").show();
                        $(".lgcode-loading img").show()
                    }
                }
            }
        }
    },
    popup_getClickPos: function(d) {
        var g = (navigator.appName == "Netscape") ? d.pageX : d.clientX + (document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft);
        var b = (navigator.appName == "Netscape") ? d.pageY : d.clientY + (document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop);
        identifyImage = document.getElementById("J-loginImg");
        img_x = $.popup_locationLeft(identifyImage);
        img_y = $.popup_locationTop(identifyImage);
        var f = g - img_x;
        var c = b - img_y - popup_defaultPasscodeHeight;
        if (f > 0 && c > 0) {
            var a = '<div randCode="' + f + "," + c + '" class="lgcode-active" style="top: ' + (c + 16) + "px; left: " + (f - 13) + 'px;"></div>';
            $("#J-passCodeCoin").append(a)
        }
        $(".lgcode-active").click(function(h) {
            $(this).remove();
            h.stopPropagation()
        })
    },
    popup_locationLeft: function(a) {
        offsetTotal = a.offsetLeft;
        scrollTotal = 0;
        if (a.tagName != "BODY") {
            if (a.offsetParent != null) {
                return offsetTotal + scrollTotal + $.popup_locationLeft(a.offsetParent)
            }
        }
        return offsetTotal + scrollTotal
    },
    popup_locationTop: function(a) {
        offsetTotal = a.offsetTop;
        scrollTotal = 0;
        if (a.tagName != "BODY") {
            if (a.offsetParent != null) {
                return offsetTotal + scrollTotal + $.popup_locationTop(a.offsetParent)
            }
        }
        return offsetTotal + scrollTotal
    },
    popup_initLogin: function(b) {
        var a = false;
        if (popup_browser == "Microsoft Internet Explorer" && popup_trim_Version == "MSIE7.0") {
            a = true
        } else {
            if (popup_browser == "Microsoft Internet Explorer" && popup_trim_Version == "MSIE6.0") {
                a = true
            }
        }
        if (a) {
            location.href = forie;
            return
        }
        $.popup_isPop = b;
        popup_isPopupLogin = b;
        $.popup_hideCommonLogin();
        $.popup_showLoginType(3);
        $.popup_getConf();
        $.isKeyUp();
        $("#J-userName").focus(function() {
            $.popup_hide_login_error()
        });
        $("#J-password").focus(function() {
            $.popup_hide_login_error()
        });
        $.popup_switchLoginWay();
        $.popup_refreshQrCode();
        $("#login_control_submit").unbind("click").click(function() {
            $.popup_is_allow_msg(apptk_tmp_control)
        });
        $("#up_msg_code").on("input", function() {
            $("#login_control_error").hide()
        });
        $('a[name="login_control_close"]').click(function() {
            $('div[name="login_control_mask"]').hide()
        })
    },
    popup_getConf: function() {
        $.ajax({
            url: popup_url.loginConf,
            type: "POST",
            timeout: 10000,
            success: function(a) {
                var b = a.data;
                if (b) {
                    popup_is_uam_login = b.is_uam_login;
                    popup_is_login_passCode = b.is_login_passCode;
                    popup_is_sweep_login = b.is_sweep_login;
                    popup_is_login = b.is_login;
                    if (b.is_message_passCode == undefined || b.is_message_passCode == "" || b.is_message_passCode == "Y") {
                        popup_is_message_passCode = "Y"
                    } else {
                        popup_is_message_passCode = "N"
                    }
                    $.popup_isLogin();
                    $("#login_short_message").css({
                        "z-index": 100000
                    });
                    $("#login_slide_box").css({
                        "z-index": 100000
                    });
                    $("#login_control_submit").css({
                        height: "30px",
                        "line-height": "20px"
                    })
                }
            },
            error: function(a) {}
        })
    },
    popup_isLogin: function() {
        if (popup_is_uam_login == "Y") {
            $(".login-code-select").show();
            if (popup_isPopupLogin) {
                $.popup_uamIsShowQr()
            } else {
                $.popup_uamIsLogin()
            }
        } else {
            $(".login-code-select").hide();
            if (popup_is_login == "Y") {
                popup_loginedCallBack()
            } else {
                $.popup_hideQrCode();
                $(".login-account").show();
                if (popup_is_login_passCode == "Y") {
                    if (popup_is_message_passCode == "Y") {
                        $("#verification li:last").show()
                    } else {
                        $("#verification li:last").hide();
                        $("#verification li").css({
                            width: "320px",
                            "float": "none",
                            "margin-right": "0px"
                        })
                    }
                } else {
                    $.popup_resetLoginBox()
                }
                $.popup_validate()
            }
        }
    },
    popup_resetLoginBox: function() {
        var a = $(".login-panel .login-box");
        a.css("margin-top", -a.outerHeight() / 2)
    },
    popup_uamIsLogin: function() {
        $.ajax({
            url: popup_passport_apptk_static,
            data: {
                appid: popup_passport_appId
            },
            type: "POST",
            xhrFields: {
                withCredentials: true
            },
            timeout: 10000,
            success: function(a) {
                if (a.result_code == "0") {
                    popup_loginedCallBack()
                } else {
                    $.popup_uamIsShowQr()
                }
            },
            error: function(a) {}
        })
    },
    popup_uamIsShowQr: function() {
        if (popup_is_sweep_login == "Y") {
            $("#J-login-code-loading").show();
            $("#J-login-code-con").hide();
            $.popup_hideQrError()
        } else {
            $.popup_hideQrCode();
            $(".login-account").show()
        }
        $.popup_validate()
    },
    popup_createQr: function() {
        $.ajax({
            url: popup_url.qr64,
            data: {
                appid: popup_qr_appId
            },
            type: "POST",
            timeout: 10000,
            success: function(a) {
                if (a && a.result_code === "0" && a.image) {
                    $("#J-qrImg").attr("src", "data:image/jpg;base64," + a.image);
                    $("#J-login-code-loading").hide();
                    $("#J-login-code-con").show();
                    $("#J-code-error-mask").hide();
                    $("#J-code-error").hide();
                    popup_t = null;
                    popup_s = -1;
                    popup_t = setInterval(function() {
                        if (popup_s == "2" || popup_s == "3") {
                            clearInterval(popup_t)
                        } else {
                            $.popup_checkQr(a.uuid)
                        }
                    }, 1000)
                } else {}
            },
            error: function(a) {}
        })
    },
    popup_checkQr: function(a) {
        $.ajax({
            url: popup_url.checkqr,
            data: {
                RAIL_DEVICEID: $.cookie("RAIL_DEVICEID"),
                RAIL_EXPIRATION: $.cookie("RAIL_EXPIRATION"),
                uuid: a,
                appid: popup_qr_appId
            },
            type: "POST",
            timeout: 10000,
            success: function(b) {
                if (b) {
                    popup_s = b.result_code;
                    $.popup_tipsQrInfo(parseInt(b.result_code))
                }
            },
            error: function(b) {}
        })
    },
    popup_showQrError: function(a) {
        $("#J-code-error-mask").show();
        $("#J-code-error").show();
        $("#J-code-error").find("p").html(a)
    },
    popup_hideQrError: function() {
        $("#J-code-error-mask").hide();
        $("#J-code-error").hide()
    },
    popup_showQrLoading: function() {
        $(".login-code-loading").show();
        $(".login-code-con").hide()
    },
    popup_hideQrLoading: function() {
        $(".login-code-loading").hide();
        $(".login-code-con").show()
    },
    popup_tipsQrInfo: function(c) {
        var b = $("#J-code-error-mask")
          , d = $("#J-code-error")
          , a = $("#J-login-code-con")
          , e = $("#J-login-code-success");
        if (c == 0) {
            b.hide();
            d.hide()
        } else {
            b.show();
            d.show();
            switch (c) {
            case 1:
                a.hide();
                e.removeClass("hide");
                break;
            case 2:
                a.hide();
                e.removeClass("hide");
                popup_loginCallBack();
                break;
            case 3:
                a.show();
                d.find("p").html("二维码已失效");
                d.find("a").show();
                e.addClass("hide");
                break;
            case 5:
                a.show();
                d.find("p").html("系统异常");
                d.find("a").show();
                e.addClass("hide");
                break;
            default:
                d.find("p").html("二维码已失效");
                d.find("a").show();
                e.addClass("hide")
            }
        }
    },
    popup_validate: function() {
        $("#J-login").unbind("click").click(function() {
            var e = $("#J-userName").val();
            var c = $("#J-password").val();
            var b = /^(13[0-9])|(14[0-9])|(15[0-9])|(18[0-9])|(17[0-9])\d{8}$/;
            var a = /^[A-Za-z]{1}([A-Za-z0-9]|[_]) {0,29}$/;
            var d = /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i;
            if (!e) {
                $.popup_show_login_error("请输入用户名！");
                return false
            }
            if (!c) {
                $.popup_show_login_error("请输入密码！");
                return false
            }
            if (c && c.length < 6) {
                $.popup_show_login_error("密码长度不能少于6位！");
                return false
            }
            popup_ifSuccessCode = true;
            $.popup_login()
        })
    },
    isKeyUp: function() {
        var a = $("#J-login");
        a.trigger("mousedown");
        a.trigger("keyup");
        a.on("mousedown", function() {
            is_key_up = false;
            modalType = 1
        });
        a.on("keyup", function() {
            is_key_up = true;
            modalType = 0
        })
    },
    keyboard_operation: function() {
        if (is_key_up == true) {
            $("#verification li:first").attr("type", "0").addClass("active");
            $("#verification li:first a").html("短信验证");
            $("#verification li:last").attr("type", "1").removeClass("active");
            $("#verification li:last a").html("滑块验证");
            $("#short_message").show();
            $("#slide").hide()
        } else {
            $("#verification li:first").attr("type", "1").addClass("active");
            $("#verification li:first a").html("滑块验证").removeClass("active");
            $("#verification li:last").attr("type", "0");
            $("#verification li:last a").html("短信验证");
            $("#short_message").hide();
            $("#slide").show()
        }
        $.popup_selectLoginMode()
    },
    popup_login: function() {
        if (popup_is_uam_login == "Y") {
            $.ajax({
                url: check_login_passport_url,
                data: {
                    username: $("#J-userName").val().trim(),
                    appid: popup_qr_appId
                },
                type: "POST",
                timeout: 10000,
                success: function(a) {
                    if (a) {
                        if (a.login_check_code == "0") {
                            var b = {};
                            b.sessionId = "";
                            b.sig = "";
                            b.if_check_slide_passcode_token = "";
                            b.scene = "";
                            b.checkMode = "";
                            b.randCode = $("#code").val().trim();
                            b.username = $("#J-userName").val().trim();
                            b.password = "@" + encrypt_ecb($("#J-password").val().trim(), SM4_key);
                            b.appid = popup_passport_appId;
                            $.popup_loginForUam(b)
                        } else {
                            if (a.login_check_code == "1") {
                                $("#verification li:last").show();
                                $.keyboard_operation()
                            } else {
                                if (a.login_check_code == "2") {
                                    $("#verification li:last").hide();
                                    $("#verification li").css({
                                        width: "320px",
                                        "float": "none",
                                        "margin-right": "0px"
                                    });
                                    $.popup_selectLoginMode()
                                } else {
                                    if (a.login_check_code == "3") {
                                        $("#verification li:last").show();
                                        $("#verification li:first").hide();
                                        $("#verification li").css({
                                            width: "320px",
                                            "float": "none",
                                            "margin-right": "0px"
                                        }).addClass("active");
                                        modalType = 0;
                                        $.popup_selectLoginMode();
                                        $.verificationClick()
                                    }
                                }
                            }
                        }
                    }
                },
                error: function(a) {}
            })
        } else {
            if (popup_is_login_passCode == "Y") {
                $.popup_selectLoginMode()
            } else {
                $.popup_loginForLocation()
            }
        }
    },
    popup_selectLoginMode: function() {
        $("#login").fadeOut();
        $("#login_slide_mask").show();
        if ($("#login").length == 0) {
            $("#modal").css("top", "35%").css("left", "50%").show().focus()
        } else {
            $("#modal").css("top", ($(window).height() - $("#modal").height()) / 2 + $(window).scrollTop() + "px").css("left", ($(window).width() - $("#modal").width()) / 2 + $(window).scrollLeft() + "px").show().focus()
        }
        if (modalType == 1) {
            $.slide_passport(true)
        } else {
            $("#login_slide_mask").show();
            $("#short_message").show();
            $("#slide").hide();
            $("#id_card").val("");
            $("#code").val("");
            $.smsVerification()
        }
        $("#short_message_close").click(function() {
            if ($("#login").length == 0) {
                $("#login_slide_mask").hide()
            }
            $("#modal").fadeOut();
            $("#login").show();
            try {
                setTimeout(function() {
                    $("#login").focus()
                })
            } catch (a) {}
            $("#message").hide();
            $("#verification_code").addClass("btn-disabled");
            modalType = 1;
            clearTimeout(set_time);
            $("#verification_code").unbind("click");
            modalTime = 60;
            $("#verification_code").html("获取验证码")
        });
        $("#verification li").bind("click").on("click", function() {
            $(this).addClass("active").siblings().removeClass("active");
            modalType = $(this).attr("type");
            if (modalType == 1) {
                $("#slide").show();
                $("#short_message").hide();
                clearTimeout(set_time);
                $("#verification_code").unbind("click");
                modalTime = 60;
                $("#verification_code").html("获取验证码");
                $.slide_passport(true)
            } else {
                $("#short_message").show();
                $("#slide").hide();
                $("#id_card").focus().val("");
                $("#code").val("");
                $.smsVerification();
                $.verificationClick()
            }
        });
        $("#login_close").click(function() {
            $("#verification li:first").addClass("active").siblings().removeClass("active");
            modalType = 1
        });
        if (modalType == 1) {
            $("#verification li:first").addClass("active").siblings().removeClass("active");
            $("#slide").show();
            $("#short_message").hide()
        }
    },
    popup_showQrCode: function() {
        $(".login-box").removeClass("login-box-account");
        $(".login-hd li:eq(1)").removeClass("login-hd-code");
        $(".login-code").show()
    },
    popup_hideQrCode: function() {
        $(".login-box").addClass("login-box-account");
        $(".login-hd li").removeClass().addClass("login-hd-account");
        $(".login-hd li:eq(1)").addClass("login-hd-code");
        $(".login-code").hide()
    },
    popup_refreshQrCode: function() {
        $(".code-error .btn").unbind("click").click(function() {
            $("#J-login-code-loading").show();
            $("#J-login-code-con").hide();
            $.popup_hideQrError();
            $.popup_createQr()
        })
    },
    popup_switchLoginWay: function() {
        $(".login-hd-account a").unbind("click").click(function() {
            $("#J-login-code-loading").show();
            $("#J-login-code-con").hide();
            $.popup_hideQrError();
            $("#J-login-code-success").addClass("hide");
            $.popup_hideCommonLogin();
            if (popup_t) {
                clearInterval(popup_t);
                popup_t = null;
                popup_s = -1
            }
            $.popup_createQr()
        });
        $(".login-hd-code a").unbind("click").click(function() {
            if (popup_t) {
                clearInterval(popup_t);
                popup_t = null;
                popup_s = -1
            }
        })
    },
    popup_clearInterval: function() {
        if (popup_t) {
            clearInterval(popup_t);
            popup_t = null;
            popup_s = -1
        }
    },
    getBanners: function() {
        $.ajax({
            url: popup_url.getBanners,
            type: "GET",
            timeout: 10000,
            dataType: "text",
            success: function(a) {
                if (a) {
                    var b = JSON.parse(a);
                    $.each(b.data.index_banner_url, function(c, e) {
                        var d = e.src ? '<a href="' + e.src + '"></a>' : "<a style='cursor:auto;' href='javascript:void(0)'></a>";
                        $(".loginSlide .bd ul").append('<li style="background: url(' + e.url + ') center center no-repeat;">' + d + "</li>")
                    });
                    $(".loginSlide").slide({
                        titCell: ".hd ul",
                        mainCell: ".bd ul",
                        effect: "leftLoop",
                        vis: "auto",
                        autoPlay: true,
                        autoPage: true,
                        trigger: "click",
                        interTime: "6000"
                    })
                }
            },
            error: function(a) {}
        })
    },
    slide_passport: function(a) {
        var c = {};
        var b;
        if (popup_is_uam_login == "Y") {
            b = slide_passport_url;
            c.slideMode = "1";
            c.appid = popup_qr_appId;
            c.username = $("#J-userName").val().trim()
        } else {
            b = popup_url.loginSlide
        }
        $.ajax({
            url: b,
            type: "POST",
            data: c,
            success: function(d) {
                if (d) {
                    if (d.result_code == 0 || d.data.ifOpenLoginSlide == "Y") {
                        if (popup_is_uam_login == "Y") {
                            nc_token = d.if_check_slide_passcode_token
                        } else {
                            nc_token = d.data.if_check_slide_passcode_token
                        }
                        $.getSlidePasscode(nc_token, a)
                    } else {
                        if (d.result_code == 1) {
                            popup_ifSuccessCode = true;
                            $.popup_showLoginType(2);
                            $.popup_loginForUam()
                        } else {}
                    }
                }
            },
            error: function(d) {}
        })
    },
    getSlidePasscode: function(a, b) {
        nc = new noCaptcha({
            renderTo: "#J-slide-passcode",
            appkey: appkey,
            scene: scene,
            token: a,
            customWidth: 340,
            trans: {
                key1: "code0"
            },
            elementID: ["usernameID"],
            is_Opt: 0,
            language: "zh",
            isEnabled: true,
            timeout: 3000,
            times: 5,
            apimap: {},
            callback: function(c) {
                csessionid = c.csessionid;
                sig = c.sig;
                var d = {};
                d.sessionId = csessionid;
                d.sig = sig;
                d.if_check_slide_passcode_token = nc_token;
                d.scene = scene;
                if (b) {
                    if (popup_is_uam_login == "Y") {
                        d.username = $("#J-userName").val().trim();
                        d.password = "@" + encrypt_ecb($("#J-password").val().trim(), SM4_key);
                        d.tk = apptk_tmp_control;
                        d.checkMode = "1";
                        d.appid = popup_passport_appId;
                        $.popup_loginForUam(d)
                    } else {
                        d["loginUserDTO.user_name"] = $("#J-userName").val().trim();
                        d["userDTO.password"] = "@" + encrypt_ecb($("#J-password").val().trim(), SM4_key);
                        $.popup_loginForLocation_passcode(d)
                    }
                } else {
                    d.flag = true;
                    $.popup_is_allow_msg(d)
                }
            }
        });
        nc.upLang("zh", {
            _startTEXT: "请按住滑块，拖动到最右边，完成登录",
            _yesTEXT: "验证通过",
            _error300: '哎呀，出错了，点击<a  href="javascript:__nc.reset()">刷新</a>再来一次',
            _errorNetwork: '网络不给力，请<a  href="javascript:__nc.reset()">点击刷新</a>',
        })
    },
    start: function() {
        if (modalTime == 0) {
            $("#verification_code").html("获取验证码");
            $("#verification_code").removeClass("btn-disabled").removeAttr("disabled");
            modalTime = 60;
            clearTimeout(set_time);
            $.verificationClick()
        } else {
            $("#verification_code").addClass("btn-disabled").attr("disabled", true);
            $("#verification_code").html("重新发送(" + modalTime + ")");
            modalTime--;
            clearTimeout(set_time);
            set_time = setTimeout(function() {
                $.start()
            }, 1000)
        }
    },
    verificationClick: function() {
        $("#verification_code").click(function() {
            $("#message").hide();
            $.start();
            $("#verification_code").unbind("click");
            $.getVerification()
        })
    },
    getVerification: function() {
        var a = {
            appid: popup_qr_appId,
            username: $("#J-userName").val().trim(),
            castNum: $("#id_card").val().trim()
        };
        $.ajax({
            url: popup_sms_verification,
            type: "POST",
            data: a,
            success: function(b) {
                if (b) {
                    if (b.result_code == "0") {
                        $("#message p").html(b.result_message)
                    } else {
                        if (b.result_code == "6") {
                            $("#message p").html(b.result_message)
                        } else {
                            if (b.result_code == "11") {
                                $("#message p").html(b.result_message)
                            }
                        }
                    }
                    $("#message").show();
                    try {
                        setTimeout(function() {
                            $("#message").attr("aria-label", b.result_message);
                            $("#message").focus().css({
                                border: "1px solid blue"
                            })
                        }, 1000)
                    } catch (c) {}
                }
            },
            error: function(b) {
                $("#verification_code").removeClass("btn-disabled")
            }
        })
    },
    smsVerification: function() {
        $("#id_card").focus(function() {
            $("#message").hide()
        });
        $("#id_card").on("input", function() {
            if ($(this).val().trim().length == 4) {
                $("#verification_code").removeClass("btn-disabled")
            } else {
                $("#verification_code").addClass("btn-disabled")
            }
        });
        $("#verification_code").click(function() {
            $("#message").hide();
            var a = {
                appid: popup_qr_appId,
                username: $("#J-userName").val().trim(),
                castNum: $("#id_card").val().trim()
            };
            if (!$("#verification_code").hasClass("btn-disabled")) {
                $("#verification_code").addClass("btn-disabled");
                $.ajax({
                    url: popup_sms_verification,
                    type: "POST",
                    data: a,
                    success: function(b) {
                        if (b) {
                            if (b.result_code == "0") {
                                $("#message p").html(b.result_message)
                            } else {
                                if (b.result_code == "6") {
                                    $("#message p").html(b.result_message);
                                    $("#verification_code").removeClass("btn-disabled")
                                } else {
                                    if (b.result_code == "11") {
                                        $("#message p").html(b.result_message);
                                        $("#verification_code").removeClass("btn-disabled")
                                    }
                                }
                            }
                            $("#message").show();
                            try {
                                setTimeout(function() {
                                    $("#message").focus();
                                    $("#message").attr("aria-label", b.result_message)
                                }, 1000)
                            } catch (c) {}
                        }
                    },
                    error: function(b) {
                        $("#verification_code").removeClass("btn-disabled")
                    }
                })
            }
        });
        $("#code").on("focus", function() {
            $("#message").hide()
        });
        $("#sureClick").unbind("click").click(function() {
            if ($("#id_card").val().trim() == "") {
                $("#message p").html("请输入登陆账号绑定的证件号后4位");
                $("#message").show();
                try {
                    setTimeout(function() {
                        $("#message").attr("aria-label", "请输入登陆账号绑定的证件号后4位");
                        $("#message").focus()
                    }, 1000)
                } catch (b) {}
                return false
            }
            if ($("#code").val().length != 6) {
                $("#message p").html("请输入正确验证码");
                $("#message").show();
                try {
                    setTimeout(function() {
                        $("#message").attr("aria-label", "请输入正确验证码");
                        $("#message").focus()
                    }, 1000)
                } catch (b) {}
                if ($("#code").val() == "") {
                    $("#message p").html("请输入验证码");
                    $("#message").show();
                    try {
                        setTimeout(function() {
                            $("#message").attr("aria-label", "请输入验证码");
                            $("#message").focus()
                        }, 1000)
                    } catch (b) {}
                }
                return false
            } else {
                var a = {};
                a.sessionId = "";
                a.sig = "";
                a.if_check_slide_passcode_token = "";
                a.scene = "";
                a.checkMode = "0";
                a.randCode = $("#code").val().trim();
                a.username = $("#J-userName").val().trim();
                a.password = "@" + encrypt_ecb($("#J-password").val().trim(), SM4_key);
                a.appid = popup_passport_appId;
                if (popup_is_uam_login == "Y") {
                    $.popup_loginForUam(a)
                } else {
                    $.popup_loginForLocation_passcode(a)
                }
                $("#verification_code").addClass("btn-disabled")
            }
        })
    },
    isPaste: function() {
        paste = "Y"
    },
});
var qrcodeBaseUrl = window.location.protocol + "//" + window.location.host + (window.location.port == "" ? "" : ":" + window.location.port);
var qrcodeContentPath = window.location.pathname.substr(0, window.location.pathname.indexOf("/", 2));
jQuery.extend({
    ScanQRCode: {
        appid: "otn",
        qrcode_url: qrcodeBaseUrl + "/passport/web/create-verifyqr64",
        timer: null,
        scanWindowCloseId: "",
        scanParam: {},
        scanSuccess: function() {},
        scanCancel: function() {},
        createQRWindow: function() {
            var b = "qrcode_window";
            var a = "qrcode_window_close";
            this.scanWindowCloseId = a;
            this.createAlertWindow(b, "温馨提示", a);
            var d = "";
            d += '     <div class="message-code">';
            d += '      <div class="msg-ico">';
            d += '       <div class="code-box-show code-box-show-sm">';
            d += '        <div id="img_div"></div>';
            d += '        <div class="code-tips">';
            d += '         <div class="code-tips-mask"></div>';
            d += '         <div class="code-tips-info">';
            d += '          <div class="code-tips-bd">';
            d += '           <div id="qr_status"></div>';
            d += '           <div id="r_operate"></div>';
            d += "          </div>";
            d += "         </div>";
            d += "        </div>";
            d += "       </div>";
            d += "      </div>";
            d += '      <div class="msg-con">';
            d += '       <h2 class="msg-tit">人证核验提示</h2>';
            d += '       <div class="msg-info">';
            d += "        <div>请您使用铁路12306手机APP扫描左侧二维码并进行人证核验，通过核验后可继续提交候补需求。</div>";
            d += '        <div class="msg-info-tips"><i class="icon icon-plaint-fill"></i>扫码前需保持APP与网页端使用同一账号登录</div>';
            d += "       </div>";
            d += "      </div>";
            d += "     </div>";
            d += "     </div>";
            d += '	    <div class="lay-btn"><a href="javascript:" class="btn92" id="qrcode_window_cancel">取消</a></div>';
            $("#qrcode_alertwindow").html(d);
            var c = this;
            dhtmlx.createWin({
                winId: b,
                closeWinId: [a, "qrcode_window_cancel"],
                callback: function() {
                    clearInterval(c.timer);
                    c.scanCancel();
                    c.deleteAlertWindow(b)
                }
            });
            $("#" + b).css("top", ($(window).height() - $("#" + b).outerHeight()) / 2 - 110 + "px")
        },
        get_QRcodeAjax: function() {
            var a = this;
            $.ajax({
                url: a.qrcode_url,
                data: {
                    appid: a.appid,
                    authType: a.scanParam.authType,
                    riskChannel: a.scanParam.riskChannel
                },
                method: "POST",
                success: function(d) {
                    if (d.result_code == 0) {
                        var e = d.uuid;
                        var b = d.image;
                        var c = $("<img/>");
                        c.attr("src", "data:image/jpg;base64," + b);
                        $("#img_div ").html(c);
                        a.qrcode_setInterval(2000, e)
                    } else {
                        var c = '<img src="../images/codeerror.png" alt="">';
                        $("#img_div").html(c);
                        $("#img_div").off("click", "img").on("click", "img", function() {
                            a.get_QRcodeAjax()
                        })
                    }
                },
                error: function(c) {
                    var b = '<img src="../images/codeerror.png" alt="">';
                    $("#img_div").html(b);
                    $("#img_div").off("click", "img").on("click", "img", function() {
                        a.get_QRcodeAjax()
                    })
                }
            })
        },
        qrcode_setInterval: function(c, a) {
            var b = this;
            this.timer = setInterval(function() {
                b.getStatus_qrcode(a)
            }, c)
        },
        getStatus_qrcode: function(a) {
            var b = this;
            $.ajax({
                url: qrcodeBaseUrl + qrcodeContentPath + b.scanParam.checkUrl,
                data: {
                    uuid: a,
                    appid: b.appid
                },
                method: "POST",
                dataType: "json",
                success: function(c) {
                    if (c.data == 0) {} else {
                        if (c.data == 1) {
                            $(".code-tips").css({
                                display: "block"
                            });
                            var e = '<i class="icon icon-working txt-primary"></i>核验中...';
                            $("#qr_status").html(e);
                            $(".code-tips-bd").off("click", "a.o_btn").on("click", "a.o_btn", function(f) {
                                f.stopPropagation();
                                $(".code-tips").css({
                                    display: "none"
                                });
                                b.get_QRcodeAjax()
                            })
                        } else {
                            if (c.data == 2) {
                                clearInterval(b.timer);
                                $(".code-tips").css({
                                    display: "block"
                                });
                                var e = '<i class="icon icon-success txt-success"></i>核验成功';
                                $("#qr_status").html(e);
                                $("#r_operate").remove();
                                $("#" + b.scanWindowCloseId).click();
                                b.scanSuccess()
                            } else {
                                if (c.data == 3) {
                                    clearInterval(b.timer);
                                    $(".code-tips").css({
                                        display: "block"
                                    });
                                    var e = '<i class="icon icon-error txt-error"></i>已失效';
                                    var d = '<a href="javascript:;" class="btn btn-primary o_btn">刷新</a>';
                                    $("#qr_status").html(e);
                                    $("#r_operate").html(d);
                                    $(".code-tips-bd").off("click", "a.o_btn").on("click", "a.o_btn", function(f) {
                                        f.stopPropagation();
                                        $(".code-tips").css({
                                            display: "none"
                                        });
                                        b.get_QRcodeAjax()
                                    })
                                } else {
                                    if (c.data == 4) {
                                        clearInterval(b.timer);
                                        $(".code-tips").css({
                                            display: "block"
                                        });
                                        var e = '<i class="icon icon-error txt-error"></i>扫描失败';
                                        var d = '<a href="javascript:;" class="btn btn-primary o_btn">刷新</a>';
                                        $("#qr_status").html(e);
                                        $("#r_operate").html(d);
                                        $(".code-tips-bd").off("click", "a.o_btn").on("click", "a.o_btn", function(f) {
                                            f.stopPropagation();
                                            $(".code-tips").css({
                                                display: "none"
                                            });
                                            b.get_QRcodeAjax()
                                        })
                                    } else {
                                        if (c.data == 5) {
                                            clearInterval(b.timer);
                                            $(".code-tips").css({
                                                display: "block"
                                            });
                                            var e = '<i class="icon icon-error txt-error"></i>系统异常';
                                            var d = '<a href="javascript:;" class="btn btn-primary o_btn">刷新</a>';
                                            $("#qr_status").html(e);
                                            $("#r_operate").html(d);
                                            $(".code-tips-bd").off("click", "a.o_btn").on("click", "a.o_btn", function(f) {
                                                f.stopPropagation();
                                                $(".code-tips").css({
                                                    display: "none"
                                                });
                                                b.get_QRcodeAjax()
                                            })
                                        }
                                    }
                                }
                            }
                        }
                    }
                },
                error: function(d) {
                    var c = '<img src="../images/codeerror.png" alt="">';
                    $("#img_div").html(c);
                    $("#img_div").off("click", "img").on("click", "img", function() {
                        b.get_QRcodeAjax()
                    })
                }
            })
        },
        createAlertWindow: function(c, b, a) {
            var d = "";
            d += '<div id="' + c + '" style="display: none;">';
            d += '	<div class="mark"></div>';
            d += '	 <div class="up-box w600">';
            d += '   <div class="up-box-hd">' + b + '<a href="javascript:" id="' + a + '">关闭</a></div>';
            d += '    <div class="up-box-bd" style="padding: 20px;" id="qrcode_alertwindow">';
            d += "    </div>";
            d += "   </div>";
            d += "  </div>";
            d += " </div>";
            d += "</div>";
            $("body").append(d)
        },
        deleteAlertWindow: function(a) {
            $("#" + a + "").remove()
        },
        showScanWindow: function(c, b, a) {
            if (b && typeof b === "function") {
                this.scanSuccess = b
            }
            if (a && typeof a === "function") {
                this.scanCancel = a
            }
            this.scanParam = c;
            this.createQRWindow();
            this.get_QRcodeAjax()
        }
    }
});
