var esd_jq;
var jQuery;
var esdDTGZ={
 init:function(){
 	document.esdQuerySelector = document.querySelectorAll;
 	if(navigator.userAgent.toLowerCase().indexOf('ie 8')>-1){
 		var esd_qu = document.createElement('script');
 		esd_qu.setAttribute('type', 'text/javascript');
 		esd_qu.setAttribute('src', 'https://kyfw.12306.cn/otn/resources/toolbar/jquery.js');
 		esd_qu.setAttribute('charset', 'utf-8');
 		document.body.appendChild(esd_qu);
 		esd_jq = jQuery.noConflict(true);
 		document.esdQuerySelector = function(selector){
 			var arr = new Array;
 			esd_jq(selector).each(function(){
 				arr.push(this);
 			});
 			return arr;
 		};
 	}
 },
 addText:function(s,t){
		var arr = document.esdQuerySelector(s);
		for(var i=0; i<arr.length; i++){
			var ele = arr[i];
			ele.title=t;
			ele.ariaLabel=t;
			if(ele.tagName==='IMG'){
				ele.alt=t
			}else if(ele.tagName==='INPUT'){
				if(ele.type==='text'){
					ele.placeholder=t;
				}
			}else{
				if(ele.tagName==='A'){
					var eImg = ele.querySelector('img');
					eImg.alt=t
				}
			}
		}
 },
 common: {
	P132102001:function(){
		$("img[src='/otn/resources/images/ins_ad7.png']").attr("alt","中国铁路保险,乘意相伴,安心出行");
function esd_ZxdpublicwzaGz() {
	/* 添加跳过导航 */
	esd_blurNavElement = function (thisNode) {
		document.getElementById("esd_createToNavNode").innerHTML = " ";
		document.getElementById("esd_createCrossNavNode").innerHTML = " ";
	}
	esd_JumpToNavElementId = function (NodeClass, NodeIndex) {
		var esd_jumpNode = document.createElement("a");
		esd_jumpNode.setAttribute("href", "javascript:void(0);");
		esd_jumpNode.setAttribute("id", "esd_JumpToNavId");
		esd_jumpNode.setAttribute("style", "width:1px; height:1px; line-height:0px; font-size:0px; position:absolute;");
		esd_jumpNode.setAttribute("title", esd_jumpToText);
		esd_jumpNode.setAttribute("aria-label", esd_jumpToText);
		esd_jumpNode.innerHTML = esd_jumpToText;
		esd_blurNavElement(this);
		esd_jumpNode.setAttribute("onblur", "esd_blurNavElement(this)");
		if (NodeIndex == undefined) { //用id取
			document.getElementById("esd_createToNavNode").appendChild(esd_jumpNode)
		}
		window.location.href = "#esd_JumpToNavId";
		return false;
	}
	function esd_showjumpFrame() {
		$("#jumpareNodeId").attr("style", "position:absolute;left:0px; top:0px; z-index:1; background:#fff; padding:10px;");
		$("#jumpareNodeId").attr("role", "complementary");
	}
	function esd_hidejumpFrame() {
		$("#jumpareNodeId").attr("style", "position:absolute;left:-9999px; top:-9999px; z-index:1;");
		$("#jumpareNodeId").attr("role", "complementary");
	}
	esd_JumpCrossNavElementId = function () {
		var esd_jumpNode = document.createElement("a");
		esd_jumpNode.setAttribute("href", "javascript:void(0);");
		esd_jumpNode.setAttribute("id", "esd_JumpCrossNavId");
		esd_jumpNode.setAttribute("style", "width:1px; height:1px; line-height:0px; font-size:0px; position:absolute;");
		esd_jumpNode.setAttribute("title", esd_jumpCrossText);
		esd_jumpNode.setAttribute("aria-label", esd_jumpCrossText);
		esd_jumpNode.innerHTML = esd_jumpCrossText;
		esd_blurNavElement(this);
		esd_jumpNode.setAttribute("onblur", "esd_blurNavElement(this)");
		document.getElementById("esd_createCrossNavNode").appendChild(esd_jumpNode);
		window.location.href = "#esd_JumpCrossNavId";
		return false;
	}
	setJumpNodeElement = function (NodeClass, NodeIndex) {
		var esd_jumpFrame = document.createElement("div");
		esd_jumpFrame.setAttribute("id", "jumpareNodeId");
		esd_jumpFrame.setAttribute("style", "position:absolute;left:-9999px; top:-9999px; z-index:2001;");
		document.getElementsByTagName("body")[0].insertBefore(esd_jumpFrame, document.getElementsByTagName("body")[0].childNodes[0]);
		esd_jumpToText = "已跳转到导航区域";
		esd_jumpCrossText = "已跳过导航区域</a>";
		document.getElementById("jumpareNodeId").innerHTML = "<a href='javascript:' onfocus='$(\"#jumpareNodeId\").attr(\"style\",\"position:absolute;left:5px; top:5px; z-index:2001; background:#fff; padding:5px 15px;\")' onblur='$(\"#jumpareNodeId\").attr(\"style\",\"position:absolute;left:-9999px; top:-9999px; z-index:2001; background:#fff; padding:5px 15px;\")' onclick='esd_JumpToNavElementId()' style='display:block; font-size:14px; line-height:2em;letter-spacing:2px;' aria-label='跳转到导航区域'>跳转到导航区域</a><a href='javascript:' style='display:block; font-size:14px; line-height:2em;letter-spacing:2px;' onfocus='$(\"#jumpareNodeId\").attr(\"style\",\"position:absolute;left:5px; top:5px; z-index:2001; background:#fff; padding:5px 15px;\")' onblur='$(\"#jumpareNodeId\").attr(\"style\",\"position:absolute;left:-9999px; top:-9999px; z-index:0;\")' onclick='esd_JumpCrossNavElementId()' aria-label='跳过导航区域'>跳过导航区域</a>";
		var createToNavNode = document.createElement("div");
		createToNavNode.setAttribute("id", "esd_createToNavNode");
		var createCrossNavNode = document.createElement("div");
		createCrossNavNode.setAttribute("id", "esd_createCrossNavNode");
		//新加
		if (document.getElementById(NodeClass) != undefined || document.getElementsByClassName(NodeClass)[0] != undefined) {
			if (NodeIndex == undefined) { //用id取
				document.getElementById(NodeClass).insertBefore(createToNavNode, document.getElementById(NodeClass).childNodes[0]);
				document.getElementById(NodeClass).appendChild(createCrossNavNode)
			} else if (NodeIndex != "undefined") { //用class取
				document.getElementsByClassName(NodeClass)[NodeIndex].insertBefore(createToNavNode, document.getElementsByClassName(NodeClass)[NodeIndex].childNodes[0]);
				document.getElementsByClassName(NodeClass)[NodeIndex].appendChild(createCrossNavNode)
			}
			document.getElementsByTagName("body")[0].onkeydown = function (event) {
				var e = event || window.event || arguments.callee.caller.arguments[0];
				if (e && e.keyCode == 49 && e.altKey) {
					esd_JumpToNavElementId();
				} else if (e && e.keyCode == 50 && e.altKey) {
					esd_JumpCrossNavElementId()
				}
			}
		}
	}
	$("#jumpareNodeId a").focus(function () {
		$("#jumpareNodeId").attr("style", "position:absolute;z-index:999999; background:#fff; padding:10px 15px;");
		//console.log("11")
	})
	$("#jumpareNodeId a").blur(function () {
		$("#jumpareNodeId").attr("style", "position:absolute;z-index:0; left:-99999px; top:-99999px;");
		//console.log("22")
	})
	if (document.getElementsByClassName("nav-box").length > 0) {
		setJumpNodeElement("nav-box", "0");
	}

	//设置img的alt和title
	function esd_setimgTitle(NodeElement, NodeText) {
		NodeElement.attr("title", NodeText);
		NodeElement.attr("alt", NodeText);
		if (NodeElement.parent("a").length > 0) {
			NodeElement.parent("a").attr("title", NodeText);
			NodeElement.parent("a").attr("aria-label", NodeText);
		}
	}
	function esd_pubInsertA(NodeElement, NodeText) {
		thisAElement = "<a href='javascript:' title='" + NodeText + "' aria-label='" + NodeText + "' style='width:10px;height:10px;position:absolute;display:block;'></a>";
		NodeElement.prepend(thisAElement);
	}
	if (document.getElementsByClassName("footer").length > 0) {
		var footerlistImgTitle = new Array("中国国家铁路集团有限公司", "中国铁路财产保险自保有限公司", "中国铁路95306网", "中铁快运股份有限公司", "中国铁路官方微信", "中国铁路官方微博", "12306 公众号", "铁路12306");
		if ($(".footer .foot-links .foot-links-list").length > 0) {
			$(".footer img").each(function () {
				esd_setimgTitle($(this), footerlistImgTitle[$(this).index()])
			})
		}
	}

	function esdJumpNodeTagLwLb(NodeElement, LastFunc, NextFunc) {
		NodeElement.keydown(function (e) {
			if (e.shiftKey && e.keyCode == 9) {
				LastFunc();
				return false;
			}
			if (e.keyCode == 9) {
				NextFunc();
				return false;
			}
		});
	}
	$(".header:eq(0)").attr("role", "head");
	$(".wrapper:eq(1)").attr("role", "main");
	$(".footer").attr("role", "footer");
	//$("#search-input").attr("title", "请输入要搜索的车票/餐饮/常旅客/相关规章");
	$("#search-input").attr("aria-label", "请输入要搜索的车票/餐饮/常旅客/相关规章");
	//$(".search-btn").attr("title", "点击搜索");
	$(".search-btn").attr("aria-label", "点击搜索，搜索结果页面可能超出无障碍服务范围");
	//语言-我的12306
	var esd_language_Array = [{
			"esd_title": $(".header-menu .menu-nav:eq(0) a:eq(0)"),
			"esd_firstfocus": $(".header-menu .menu-nav:eq(0) .menu-nav-bd a:eq(0)"),
			"esd_secondfocus": $(".header-menu .menu-nav:eq(0) .menu-nav-bd a:eq(1)"),
			"esd_secondlastfocus": $(".header-menu .menu-nav:eq(0) .menu-nav-bd a:eq(-2)"),
			"esd_lastfocus": $(".header-menu .menu-nav:eq(0) .menu-nav-bd a:last")
		}, {
			"esd_title": $(".header-menu .menu-nav:eq(1) a:eq(0)"),
			"esd_firstfocus": $(".header-menu .menu-nav:eq(1) .menu-nav-bd a:eq(0)"),
			"esd_secondfocus": $(".header-menu .menu-nav:eq(1) .menu-nav-bd a:eq(1)"),
			"esd_secondlastfocus": $(".header-menu .menu-nav:eq(1) .menu-nav-bd a:eq(-2)"),
			"esd_lastfocus": $(".header-menu .menu-nav:eq(1) .menu-nav-bd a:last")
		}, {
			"esd_title": $("#J-header-login a:eq(0)")
		}, {
			"esd_title": $("#J-header-login a:eq(1)")
		}
	]
	//语言
	//语言移除display
	function esd_removeheadmenuDisplay() {
		$(".header-menu li ul.menu-nav-bd").each(function () {
			$(this).removeAttr("style");
		})
	}
	$(".header-menu>li").mouseout(function () {
		$(".header-menu li .menu-nav-bd").removeAttr("style");
	})

	/* 主导航 */
	var esd_mainnav_Array = [{
			"esd_title": $(".nav-box .nav>li.nav-item:eq(0) a:eq(0)"),
			"esd_frame": $(".nav-box .nav>li.nav-item:eq(0)>a~div"),
			"esd_firstfocus": $(".nav-box .nav>li.nav-item:eq(0) .nav-bd a:eq(0)"),
			"esd_secondfocus": $(".nav-box .nav>li.nav-item:eq(0) .nav-bd a:eq(1)"),
			"esd_secondlastfocus": $(".nav-box .nav>li.nav-item:eq(0) .nav-bd a:eq(-2)"),
			"esd_lastfocus": $(".nav-box .nav>li.nav-item:eq(0) .nav-bd a:last")
		}, {
			"esd_title": $(".nav-box .nav>li.nav-item:eq(1) a:eq(0)"),
			"esd_frame": $(".nav-box .nav>li.nav-item:eq(1)>a~div"),
			"esd_firstfocus": $(".nav-box .nav>li.nav-item:eq(1) .nav-bd a:eq(0)"),
			"esd_secondfocus": $(".nav-box .nav>li.nav-item:eq(1) .nav-bd a:eq(1)"),
			"esd_secondlastfocus": $(".nav-box .nav>li.nav-item:eq(1) .nav-bd a:eq(-2)"),
			"esd_lastfocus": $(".nav-box .nav>li.nav-item:eq(1) .nav-bd a:last")
		}, {
			"esd_title": $(".nav-box .nav>li.nav-item:eq(2) a:eq(0)"),
			"esd_frame": $(".nav-box .nav>li.nav-item:eq(2)>a~div"),
			"esd_firstfocus": $(".nav-box .nav>li.nav-item:eq(2) .nav-bd a:eq(0)"),
			"esd_secondfocus": $(".nav-box .nav>li.nav-item:eq(2) .nav-bd a:eq(1)"),
			"esd_secondlastfocus": $(".nav-box .nav>li.nav-item:eq(2) .nav-bd a:eq(-2)"),
			"esd_lastfocus": $(".nav-box .nav>li.nav-item:eq(2) .nav-bd a:last")
		}, {
			"esd_title": $(".nav-box .nav>li.nav-item:eq(3) a:eq(0)"),
			"esd_frame": $(".nav-box .nav>li.nav-item:eq(3)>a~div"),
			"esd_firstfocus": $(".nav-box .nav>li.nav-item:eq(3) .nav-bd a:eq(0)"),
			"esd_secondfocus": $(".nav-box .nav>li.nav-item:eq(3) .nav-bd a:eq(1)"),
			"esd_secondlastfocus": $(".nav-box .nav>li.nav-item:eq(3) .nav-bd a:eq(-2)"),
			"esd_lastfocus": $(".nav-box .nav>li.nav-item:eq(3) .nav-bd a:last")
		}, {
			"esd_title": $(".nav-box .nav>li.nav-item:eq(4) a:eq(0)"),
			"esd_frame": $(".nav-box .nav>li.nav-item:eq(4)>a~div"),
			"esd_firstfocus": $(".nav-box .nav>li.nav-item:eq(4) .nav-bd a:eq(0)"),
			"esd_secondfocus": $(".nav-box .nav>li.nav-item:eq(4) .nav-bd a:eq(1)"),
			"esd_secondlastfocus": $(".nav-box .nav>li.nav-item:eq(4) .nav-bd a:eq(-2)"),
			"esd_lastfocus": $(".nav-box .nav>li.nav-item:eq(4) .nav-bd a:last")
		}, {
			"esd_title": $(".nav-box .nav>li.nav-item:eq(5) a:eq(0)"),
			"esd_frame": $(".nav-box .nav>li.nav-item:eq(5)>a~div"),
			"esd_firstfocus": $(".nav-box .nav>li.nav-item:eq(5) .nav-bd a:eq(0)"),
			"esd_secondfocus": $(".nav-box .nav>li.nav-item:eq(5) .nav-bd a:eq(1)"),
			"esd_secondlastfocus": $(".nav-box .nav>li.nav-item:eq(5) .nav-bd a:eq(-2)"),
			"esd_lastfocus": $(".nav-box .nav>li.nav-item:eq(5) .nav-bd a:last")
		}, {
			"esd_title": $(".nav-box .nav>li.nav-item:eq(6) a:eq(0)"),
			"esd_frame": $(".nav-box .nav>li.nav-item:eq(6)>a~div"),
			"esd_firstfocus": $(".nav-box .nav>li.nav-item:eq(6) .nav-bd a:eq(0)"),
			"esd_secondfocus": $(".nav-box .nav>li.nav-item:eq(6) .nav-bd a:eq(1)"),
			"esd_secondlastfocus": $(".nav-box .nav>li.nav-item:eq(6) .nav-bd a:eq(-2)"),
			"esd_lastfocus": $(".nav-box .nav>li.nav-item:eq(6) .nav-bd a:last")
		}, {
			"esd_title": $(".nav-box .nav>li.nav-item:eq(7) a:eq(0)"),
			"esd_frame": $(".nav-box .nav>li.nav-item:eq(7)>a~div"),
			"esd_firstfocus": $(".nav-box .nav>li.nav-item:eq(7) .nav-bd a:eq(0)"),
			"esd_secondfocus": $(".nav-box .nav>li.nav-item:eq(7) .nav-bd a:eq(1)"),
			"esd_secondlastfocus": $(".nav-box .nav>li.nav-item:eq(7) .nav-bd a:eq(-2)"),
			"esd_lastfocus": $(".nav-box .nav>li.nav-item:eq(7) .nav-bd a:last")
		},
	]
	//导航移除display
	function esd_removeDisplay() {
		$(".nav-box .nav li div.nav-bd").each(function () {
			$(this).removeAttr("style")
		})
	}
	$(".nav-box .nav>li").mouseout(function () {
		$(".nav-box .nav li div.nav-bd").removeAttr("style")
	})

	//语言
	/*esdJumpNodeTagLwLb($(".search-btn"), function () {
	$("#search-input").focus();
	}, function () {
	$(".header-menu .menu-nav:eq(0) .menu-nav-bd").show();
	esd_language_Array[0].esd_title.focus();
	});*/

	esdJumpNodeTagLwLb(esd_language_Array[0].esd_title, function () {
		esd_removeheadmenuDisplay();
		$("#toolbarSwitch").focus();
	}, function () {
		$(".header-menu .menu-nav:eq(0) .menu-nav-bd").show();
		esd_language_Array[0].esd_firstfocus.focus();
	});
	esdJumpNodeTagLwLb(esd_language_Array[0].esd_firstfocus, function () {
		$(".header-menu .menu-nav:eq(0) .menu-nav-bd").hide();
		esd_language_Array[0].esd_title.focus();
	}, function () {
		esd_language_Array[0].esd_secondfocus.focus();
	});
	esdJumpNodeTagLwLb(esd_language_Array[0].esd_lastfocus, function () {
		esd_language_Array[0].esd_secondlastfocus.focus();
	}, function () {
		esd_removeheadmenuDisplay();
		$(".header-menu .menu-nav:eq(2) .menu-nav-bd").show();
		esd_language_Array[1].esd_title.focus();
	});

	esdJumpNodeTagLwLb(esd_language_Array[1].esd_title, function () {
		esd_removeheadmenuDisplay();
		$(".header-menu .menu-nav:eq(0) .menu-nav-bd").show();
		esd_language_Array[0].esd_lastfocus.focus();
	}, function () {
		$(".header-menu .menu-nav:eq(1) .menu-nav-bd").show();
		esd_language_Array[1].esd_firstfocus.focus();
	});
	esdJumpNodeTagLwLb(esd_language_Array[1].esd_firstfocus, function () {
		esd_language_Array[1].esd_title.focus();
	}, function () {
		esd_language_Array[1].esd_secondfocus.focus();
	})
	esdJumpNodeTagLwLb(esd_language_Array[1].esd_lastfocus, function () {
		esd_language_Array[1].esd_secondlastfocus.focus();
	}, function () {
		esd_language_Array[2].esd_title.focus();
		esd_removeheadmenuDisplay();
	});

	esdJumpNodeTagLwLb(esd_language_Array[2].esd_title, function () {
		$(".header-menu .menu-nav:eq(1) .menu-nav-bd").show();
		esd_language_Array[1].esd_lastfocus.focus();
	}, function () {
		esd_language_Array[3].esd_title.focus();
	});

	//主导航
	esdJumpNodeTagLwLb(esd_mainnav_Array[0].esd_title, function () {
		$(".header-con a:last").focus();
	}, function () {
		esd_mainnav_Array[1].esd_title.focus();
		esd_mainnav_Array[1].esd_frame.show();
	})

	esdJumpNodeTagLwLb(esd_mainnav_Array[1].esd_title, function () {
		esd_removeDisplay();
		esd_mainnav_Array[0].esd_title.focus();
		esd_mainnav_Array[1].esd_frame.hide();
	}, function () {
		esd_mainnav_Array[1].esd_firstfocus.focus();
		esd_mainnav_Array[1].esd_frame.show();
	})
	esdJumpNodeTagLwLb(esd_mainnav_Array[1].esd_firstfocus, function () {
		esd_mainnav_Array[1].esd_title.focus();
	}, function () {
		esd_mainnav_Array[1].esd_secondfocus.focus();
	});
	esdJumpNodeTagLwLb(esd_mainnav_Array[1].esd_lastfocus, function () {
		esd_mainnav_Array[1].esd_secondlastfocus.focus();
	}, function () {
		esd_removeDisplay();
		esd_mainnav_Array[2].esd_frame.show();
		esd_mainnav_Array[2].esd_title.focus();
		esd_mainnav_Array[1].esd_frame.hide();
	});

	esdJumpNodeTagLwLb(esd_mainnav_Array[2].esd_title, function () {
		esd_removeDisplay();
		esd_mainnav_Array[1].esd_frame.show();
		esd_mainnav_Array[1].esd_lastfocus.focus();
		esd_mainnav_Array[2].esd_frame.hide();
	}, function () {
		esd_mainnav_Array[2].esd_firstfocus.focus();
		esd_mainnav_Array[2].esd_frame.show();
	})
	esdJumpNodeTagLwLb(esd_mainnav_Array[2].esd_firstfocus, function () {
		esd_mainnav_Array[2].esd_title.focus();
	}, function () {
		esd_mainnav_Array[2].esd_secondfocus.focus();
	});
	esdJumpNodeTagLwLb(esd_mainnav_Array[2].esd_lastfocus, function () {
		esd_mainnav_Array[2].esd_secondlastfocus.focus();
	}, function () {
		esd_removeDisplay();
		esd_mainnav_Array[3].esd_frame.show();
		esd_mainnav_Array[3].esd_title.focus();
		esd_mainnav_Array[2].esd_frame.hide();
	});

	esdJumpNodeTagLwLb(esd_mainnav_Array[3].esd_title, function () {
		esd_removeDisplay();
		esd_mainnav_Array[2].esd_frame.show();
		esd_mainnav_Array[2].esd_lastfocus.focus();
		esd_mainnav_Array[3].esd_frame.hide();
	}, function () {
		esd_mainnav_Array[3].esd_firstfocus.focus();
		esd_mainnav_Array[3].esd_frame.show();
	})
	esdJumpNodeTagLwLb(esd_mainnav_Array[3].esd_firstfocus, function () {
		esd_mainnav_Array[3].esd_title.focus();
	}, function () {
		esd_mainnav_Array[3].esd_secondfocus.focus();
	});
	esdJumpNodeTagLwLb(esd_mainnav_Array[3].esd_lastfocus, function () {
		esd_mainnav_Array[3].esd_secondlastfocus.focus();
	}, function () {
		esd_removeDisplay();
		esd_mainnav_Array[4].esd_frame.show();
		esd_mainnav_Array[4].esd_title.focus();
		esd_mainnav_Array[3].esd_frame.hide();
	});

	esdJumpNodeTagLwLb(esd_mainnav_Array[4].esd_title, function () {
		esd_removeDisplay();
		esd_mainnav_Array[3].esd_frame.show();
		esd_mainnav_Array[3].esd_lastfocus.focus();
		esd_mainnav_Array[4].esd_frame.hide();
	}, function () {
		esd_mainnav_Array[4].esd_firstfocus.focus();
		esd_mainnav_Array[4].esd_frame.show();
	})
	esdJumpNodeTagLwLb(esd_mainnav_Array[4].esd_firstfocus, function () {
		esd_mainnav_Array[4].esd_title.focus();
	}, function () {
		esd_mainnav_Array[4].esd_secondfocus.focus();
	});
	esdJumpNodeTagLwLb(esd_mainnav_Array[4].esd_lastfocus, function () {
		esd_mainnav_Array[4].esd_secondlastfocus.focus();
	}, function () {
		esd_removeDisplay();
		esd_mainnav_Array[5].esd_frame.show();
		esd_mainnav_Array[5].esd_title.focus();
		esd_mainnav_Array[4].esd_frame.hide();
	});

	esdJumpNodeTagLwLb(esd_mainnav_Array[5].esd_title, function () {
		esd_removeDisplay();
		esd_mainnav_Array[4].esd_frame.show();
		esd_mainnav_Array[4].esd_lastfocus.focus();
		esd_mainnav_Array[5].esd_frame.hide();
	}, function () {
		esd_mainnav_Array[5].esd_firstfocus.focus();
		esd_mainnav_Array[5].esd_frame.show();
	})
	esdJumpNodeTagLwLb(esd_mainnav_Array[5].esd_firstfocus, function () {
		esd_mainnav_Array[5].esd_title.focus();
	}, function () {
		esd_mainnav_Array[5].esd_secondfocus.focus();
	});
	esdJumpNodeTagLwLb(esd_mainnav_Array[5].esd_lastfocus, function () {
		esd_mainnav_Array[5].esd_secondlastfocus.focus();
	}, function () {
		esd_removeDisplay();
		esd_mainnav_Array[6].esd_frame.show();
		esd_mainnav_Array[6].esd_title.focus();
		esd_mainnav_Array[5].esd_frame.hide();
	});

	esdJumpNodeTagLwLb(esd_mainnav_Array[6].esd_title, function () {
		esd_removeDisplay();
		esd_mainnav_Array[5].esd_frame.show();
		esd_mainnav_Array[5].esd_lastfocus.focus();
		esd_mainnav_Array[6].esd_frame.hide();
	}, function () {
		esd_mainnav_Array[6].esd_firstfocus.focus();
		esd_mainnav_Array[6].esd_frame.show();
	})
	esdJumpNodeTagLwLb(esd_mainnav_Array[6].esd_firstfocus, function () {
		esd_mainnav_Array[6].esd_title.focus();
	}, function () {
		esd_mainnav_Array[6].esd_secondfocus.focus();
	});
	esdJumpNodeTagLwLb(esd_mainnav_Array[6].esd_lastfocus, function () {
		esd_mainnav_Array[6].esd_secondlastfocus.focus();
	}, function () {
		esd_removeDisplay();
		esd_mainnav_Array[7].esd_frame.show();
		esd_mainnav_Array[7].esd_title.focus();
		esd_mainnav_Array[6].esd_frame.hide();
	});

	esdJumpNodeTagLwLb(esd_mainnav_Array[7].esd_title, function () {
		esd_removeDisplay();
		esd_mainnav_Array[6].esd_frame.show();
		esd_mainnav_Array[6].esd_lastfocus.focus();
		esd_mainnav_Array[7].esd_frame.hide();
	}, function () {
		esd_mainnav_Array[7].esd_firstfocus.focus();
		esd_mainnav_Array[7].esd_frame.show();
	})
	esdJumpNodeTagLwLb(esd_mainnav_Array[7].esd_firstfocus, function () {
		esd_mainnav_Array[7].esd_title.focus();
	}, function () {
		esd_mainnav_Array[7].esd_secondfocus.focus();
	});
	esdJumpNodeTagLwLb(esd_mainnav_Array[7].esd_lastfocus, function () {
		esd_mainnav_Array[7].esd_secondlastfocus.focus();
	}, function () {
		esd_mainnav_Array[7].esd_frame.hide();
		esd_removeDisplay();
		$(".content [tabindex=0]:eq(0)").focus();
	});

	esdJumpNodeTagLwLb($(".content [tabindex=0]:eq(0)"), function () {
		esd_mainnav_Array[7].esd_frame.show();
		esd_mainnav_Array[7].esd_lastfocus.focus();
	}, function () {
		$(".content [tabindex=0]:eq(1)").focus();
	});
	$(".content .center-box .center-menu .menu-item").each(function () {
		if ($(this).find("h2 a").length < 1) {
			esd_pubInsertA($(this).find("h2"), $(this).find("h2").text());
		}
		if ($(this).find(".menu-sub").length > 1 && $(this).find(".menu-sub").css("display") == "none") {
			/*$(this).find("h2 a").click(function(){
			$(this).find("h2 i").click();
			})*/
		}
	})
	//侧边栏收缩
	$(".center-menu>li").each(function () {
		$(this).find("h2>a").click(function () {
			$(this).parent("h2").find(".icon-switch").click()
		})
	})

	$("body>div").attr("role", "complementary");
	$(".header:eq(0)").attr("role", "complementary");
	$(".content:eq(0)").attr("role", "main");
	$(".footer:eq(0)").attr("role", "complementary");
	$(".header:eq(0)").attr("aria-label", "头部");
	$(".footer:eq(0)").attr("aria-label", "底部");
	$(".logo").attr("role", "banner");
	esd_setimgTitle($(".foot-links-list img:eq(0)"), "中国国家铁路集团有限公司");
	esd_setimgTitle($(".foot-links-list img:eq(1)"), "中国铁路财产保险自保有限公司");
	esd_setimgTitle($(".foot-links-list img:eq(2)"), "中国铁路95306网");
	esd_setimgTitle($(".foot-links-list img:eq(3)"), "中铁快运股份有限公司");
	esd_setimgTitle($(".foot-code img:eq(0)"), "中国铁路官方微信");
	esd_setimgTitle($(".foot-code img:eq(1)"), "中国铁路官方微博");
	esd_setimgTitle($(".foot-code img:eq(2)"), "12306 公众号");
	esd_setimgTitle($(".foot-code img:eq(3)"), "铁路12306");
	esd_setimgTitle($(".mask img"), "正在加载");
	if ($("html:eq(0)").attr("lang") == undefined) {
		$("html:eq(0)").attr("lang", "zh-CN")
	}
	//聚焦获得黑边框
	var focusTags = "a,input,textarea area"
		$(focusTags).focus(function () {
			this.style.setProperty("outline", "1px dashed black", "important");
		});
	$(focusTags).blur(function () {
		$(this).css({
			"outline": ""
		});
	});
}

var esd_checkPublicOnload;
esd_checkPublicOnload = window.setInterval(
		function () {
		if ($ == undefined) {}
		else {
			$(function () {
				clearInterval(esd_checkPublicOnload);
				esd_ZxdpublicwzaGz();
			})
		}
	},
		2000);

	} },
 gdt: {
	P132101101:function(){
var esd_checkOnload;
esd_checkOnload=window.setInterval(
	function(){
		if( $ == undefined){
		}
		else{
			$(function(){
				clearInterval(esd_checkOnload);
				esd_wzaGz();

			})
		}
	},
	2000
);

function esd_wzaGz(){/* 改造代码开始 */
	$(function(){
		/* 跳过导航结束 */
		//焦点前后切换函数
		function esdJumpNodeTagLwLb(NodeElement, LastFunc, NextFunc) {
			NodeElement.keydown(function (e) {
				if (e.shiftKey && e.keyCode == 9) {
					LastFunc();
					return false;
				}
				if (e.keyCode == 9) {
					NextFunc();
					return false;
				}
			});
		}
		$("#qd_closeDefaultWarningWindowDialog_id").focus();
		//语言-我的12306
		var esd_language_Array=[
			{"esd_title":$(".header-menu .menu-item:eq(0) a:eq(0)"),"esd_firstfocus":$(".header-menu .menu-item:eq(0) .menu-nav-bd a:eq(0)"),"esd_secondfocus":$(".header-menu .menu-item:eq(0) .menu-nav-bd a:eq(1)"),"esd_secondlastfocus":$(".header-menu .menu-item:eq(0) .menu-nav-bd a:eq(-2)"),"esd_lastfocus":$(".header-menu .menu-item:eq(0) .menu-nav-bd a:last")},
			{"esd_title":$(".header-menu .menu-item:eq(2) a:eq(0)"),"esd_firstfocus":$(".header-menu .menu-item:eq(2) .menu-nav-bd a:eq(0)"),"esd_secondfocus":$(".header-menu .menu-item:eq(2) .menu-nav-bd a:eq(1)"),"esd_secondlastfocus":$(".header-menu .menu-item:eq(2) .menu-nav-bd a:eq(-2)"),"esd_lastfocus":$(".header-menu .menu-item:eq(2) .menu-nav-bd a:last")},
			{"esd_title":$("#J-header-login a:eq(0)")},
			{"esd_title":$("#J-header-login a:eq(1)")}
		]
		//语言
		//语言移除display
		function esd_removeheadmenuDisplay(){
			$(".header-menu li ul.menu-nav-bd").each(function(){
				$(this).removeAttr("style");
			})
		}
		$(".header-menu>li").mouseout(function(){
			$(".header-menu li .menu-nav-bd").removeAttr("style");
		})

		/* 主导航 */
		var esd_mainnav_Array=[
			{"esd_title":$(".nav-box .nav>li.nav-item:eq(0) a:eq(0)"),"esd_frame":$(".nav-box .nav>li.nav-item:eq(0)>a~div"),"esd_firstfocus":$(".nav-box .nav>li.nav-item:eq(0) .nav-bd a:eq(0)"),"esd_secondfocus":$(".nav-box .nav>li.nav-item:eq(0) .nav-bd a:eq(1)"),"esd_secondlastfocus":$(".nav-box .nav>li.nav-item:eq(0) .nav-bd a:eq(-2)"),"esd_lastfocus":$(".nav-box .nav>li.nav-item:eq(0) .nav-bd a:last")},
			{"esd_title":$(".nav-box .nav>li.nav-item:eq(1) a:eq(0)"),"esd_frame":$(".nav-box .nav>li.nav-item:eq(1)>a~div"),"esd_firstfocus":$(".nav-box .nav>li.nav-item:eq(1) .nav-bd a:eq(0)"),"esd_secondfocus":$(".nav-box .nav>li.nav-item:eq(1) .nav-bd a:eq(1)"),"esd_secondlastfocus":$(".nav-box .nav>li.nav-item:eq(1) .nav-bd a:eq(-2)"),"esd_lastfocus":$(".nav-box .nav>li.nav-item:eq(1) .nav-bd a:last")},
			{"esd_title":$(".nav-box .nav>li.nav-item:eq(2) a:eq(0)"),"esd_frame":$(".nav-box .nav>li.nav-item:eq(2)>a~div"),"esd_firstfocus":$(".nav-box .nav>li.nav-item:eq(2) .nav-bd a:eq(0)"),"esd_secondfocus":$(".nav-box .nav>li.nav-item:eq(2) .nav-bd a:eq(1)"),"esd_secondlastfocus":$(".nav-box .nav>li.nav-item:eq(2) .nav-bd a:eq(-2)"),"esd_lastfocus":$(".nav-box .nav>li.nav-item:eq(2) .nav-bd a:last")},
			{"esd_title":$(".nav-box .nav>li.nav-item:eq(3) a:eq(0)"),"esd_frame":$(".nav-box .nav>li.nav-item:eq(3)>a~div"),"esd_firstfocus":$(".nav-box .nav>li.nav-item:eq(3) .nav-bd a:eq(0)"),"esd_secondfocus":$(".nav-box .nav>li.nav-item:eq(3) .nav-bd a:eq(1)"),"esd_secondlastfocus":$(".nav-box .nav>li.nav-item:eq(3) .nav-bd a:eq(-2)"),"esd_lastfocus":$(".nav-box .nav>li.nav-item:eq(3) .nav-bd a:last")},
			{"esd_title":$(".nav-box .nav>li.nav-item:eq(4) a:eq(0)"),"esd_frame":$(".nav-box .nav>li.nav-item:eq(4)>a~div"),"esd_firstfocus":$(".nav-box .nav>li.nav-item:eq(4) .nav-bd a:eq(0)"),"esd_secondfocus":$(".nav-box .nav>li.nav-item:eq(4) .nav-bd a:eq(1)"),"esd_secondlastfocus":$(".nav-box .nav>li.nav-item:eq(4) .nav-bd a:eq(-2)"),"esd_lastfocus":$(".nav-box .nav>li.nav-item:eq(4) .nav-bd a:last")},
			{"esd_title":$(".nav-box .nav>li.nav-item:eq(5) a:eq(0)"),"esd_frame":$(".nav-box .nav>li.nav-item:eq(5)>a~div"),"esd_firstfocus":$(".nav-box .nav>li.nav-item:eq(5) .nav-bd a:eq(0)"),"esd_secondfocus":$(".nav-box .nav>li.nav-item:eq(5) .nav-bd a:eq(1)"),"esd_secondlastfocus":$(".nav-box .nav>li.nav-item:eq(5) .nav-bd a:eq(-2)"),"esd_lastfocus":$(".nav-box .nav>li.nav-item:eq(5) .nav-bd a:last")},
			{"esd_title":$(".nav-box .nav>li.nav-item:eq(6) a:eq(0)"),"esd_frame":$(".nav-box .nav>li.nav-item:eq(6)>a~div"),"esd_firstfocus":$(".nav-box .nav>li.nav-item:eq(6) .nav-bd a:eq(0)"),"esd_secondfocus":$(".nav-box .nav>li.nav-item:eq(6) .nav-bd a:eq(1)"),"esd_secondlastfocus":$(".nav-box .nav>li.nav-item:eq(6) .nav-bd a:eq(-2)"),"esd_lastfocus":$(".nav-box .nav>li.nav-item:eq(6) .nav-bd a:last")},
			{"esd_title":$(".nav-box .nav>li.nav-item:eq(7) a:eq(0)"),"esd_frame":$(".nav-box .nav>li.nav-item:eq(7)>a~div"),"esd_firstfocus":$(".nav-box .nav>li.nav-item:eq(7) .nav-bd a:eq(0)"),"esd_secondfocus":$(".nav-box .nav>li.nav-item:eq(7) .nav-bd a:eq(1)"),"esd_secondlastfocus":$(".nav-box .nav>li.nav-item:eq(7) .nav-bd a:eq(-2)"),"esd_lastfocus":$(".nav-box .nav>li.nav-item:eq(7) .nav-bd a:last")},
		]
		//导航移除display
		function esd_removeDisplay(){
			$(".nav-box .nav li div.nav-bd").each(function(){
				$(this).removeAttr("style")
			})
		}
		$(".nav-box .nav>li").mouseout(function(){
			$(".nav-box .nav li div.nav-bd").removeAttr("style")
		})

		//底部图片改造
		$("img[src='/otn/resources/images/12306_index/link05.png']").parent("a").attr("title","中国国家铁路集团有限公司");
		$("img[src='/otn/resources/images/12306_index/link05.png']").attr("title","中国国家铁路集团有限公司");
		$("img[src='/otn/resources/images/12306_index/link05.png']").attr("alt","中国国家铁路集团有限公司");

		$("img[src='/otn/resources/images/12306_index/link02.png']").parent("a").attr("title","中国铁路财产保险自保有限公司");
		$("img[src='/otn/resources/images/12306_index/link02.png']").attr("title","中国铁路财产保险自保有限公司");
		$("img[src='/otn/resources/images/12306_index/link02.png']").attr("alt","中国铁路财产保险自保有限公司");

		$("img[src='/otn/resources/images/12306_index/link03.png']").parent("a").attr("title","中国铁路95306网");
		$("img[src='/otn/resources/images/12306_index/link03.png']").attr("title","中国铁路95306网");
		$("img[src='/otn/resources/images/12306_index/link03.png']").attr("alt","中国铁路95306网");

		$("img[src='/otn/resources/images/12306_index/link04.png']").parent("a").attr("title","中铁快运股份有限公司");
		$("img[src='/otn/resources/images/12306_index/link04.png']").attr("title","中铁快运股份有限公司");
		$("img[src='/otn/resources/images/12306_index/link04.png']").attr("alt","中铁快运股份有限公司");

		$("img[src='/otn/resources/images/12306_index/zgtlwb.png']").attr("title","中国铁路官方微信");
		$("img[src='/otn/resources/images/12306_index/zgtlwb.png']").attr("alt","中国铁路官方微信");

		$("img[src='/otn/resources/images/12306_index/zgtlwx.png']").attr("title","中国铁路官方微博");
		$("img[src='/otn/resources/images/12306_index/zgtlwx.png']").attr("alt","中国铁路官方微博");

		$("img[src='/otn/resources/images/12306_index/public.png']").attr("title","12306 公众号");
		$("img[src='/otn/resources/images/12306_index/public.png']").attr("alt","12306 公众号");

		$("img[src='/otn/resources/images/12306_index/download.png']").attr("title","铁路12306");
		$("img[src='/otn/resources/images/12306_index/download.png']").attr("alt","铁路12306");

		esdJumpNodeTagLwLb(esd_mainnav_Array[7].esd_firstfocus,function(){esd_mainnav_Array[7].esd_title.focus();},function(){esd_mainnav_Array[7].esd_secondfocus.focus();});
		esdJumpNodeTagLwLb(esd_mainnav_Array[7].esd_lastfocus,function(){esd_mainnav_Array[7].esd_secondlastfocus.focus();},function(){esd_mainnav_Array[7].esd_frame.hide();esd_removeDisplay();$("#dfc input:eq(0)").focus();});

		//开始
		$(".content").prepend("<a href='javascript:' title='"+$(".t-info").text().trim()+"' style='width:10px; height:10px; position:absolute;'></a>");
		$("#quickQueryPassenger_id").attr("title","请输入搜索的乘车人姓名");
		$("#submit_quickQueryPassenger").attr("title","点击搜索");
		function esd_setCcrTicketFun(){
			var esd_setCcrTicket;
			esd_setCcrTicket=window.setInterval(function(){
				if($("#ticketInfo_id tr:last td:last a")==undefined){
					$("#ticketInfo_id tr").each(function(){
						/*$(this).find("td:eq(1) select").attr("title","请选择票种");
						$(this).find("td:eq(2) select").attr("title","请选择席别");
						$(this).find("td:eq(-2) a").attr("title","为此乘车人添加儿童票");
						$(this).find("td:eq(-2) a").click(function(){
							esd_setCcrTicket();
						});
						$(this).find("td:last a").prepend("<a href='javascript:' style='width:10px; height:10px; position:absolute;' title='删除此乘车人'></a>");*/
					})
				}
				else if($("#ticketInfo_id tr:eq(-2) td:last a")!= undefined){
					clearInterval(esd_setCcrTicket);
				}
			},2000)
		}


		var esd_setCcrTitle;
		esd_setCcrTitle=window.setInterval(
			function(){
				if( $("#normal_passenger_id li").length > 0){
					$("#normal_passenger_id li input").each(function(){
						$(this).attr("title","设置"+$(this).parent("li").find("label").text()+"为乘车人,按空格键进行操作");
					})
					clearInterval(esd_setCcrTitle);
				}
			},
			2000
		);
		$("#queryLeftTable tr").each(function(){
			$(this).find("td:last a").click(function(){
				esd_focusloginClose;
			})
		})

		/* 提交订单 */
		$("#submitOrder_id").click(function(){
			var esd_subForm;
			esd_subForm=window.setInterval(
				function(){
					if( $(".dhtmlx_wins_body_inner:last").css("display") == "block"){
						check_ticket_tit_idInfo=$(".dhtmlx_window_active:last #check_ticket_tit_id").text().trim()+$(".dhtmlx_window_active:last #check_ticketInfo_id").text().trim();
						$(".dhtmlx_window_active:last .dhtmlx_wins_body_outer:eq(0)").prepend("<a href='javascript:' title='请核对以下信息："+check_ticket_tit_idInfo+"'></a>");
						$(".dhtmlx_window_active:last a:first").focus();
						$(".dhtmlx_window_active:last #1A").attr("title","A号座在三座靠窗位");
						$(".dhtmlx_window_active:last #1B").attr("title","B号座在三座中间位");
						$(".dhtmlx_window_active:last #1C").attr("title","C号座在三座过道位");
						$(".dhtmlx_window_active:last #1D").attr("title","D号座在两座过道位");
						$(".dhtmlx_window_active:last #1F").attr("title","F号座在两座靠窗位");
						clearInterval(esd_subForm);
					}
					else if($("#qd_closeDefaultWarningWindowDialog_id").length<1){
						$("#qd_closeDefaultWarningWindowDialog_id").focus();
						clearInterval(esd_subForm);
					}
					else if($(".dhtmlx_window_active:last").css("display") != "none"){
						$("#qr_closeTranforDialog_id").focus();
					}
				},
				2000
			);
		})
	//聚焦获得黑边框
		var focusTags = "a,input,textarea area"
		$(focusTags).focus(function () {
			this.style.setProperty("outline", "1px dashed black", "important");
		});
		$(focusTags).blur(function () {
			$(this).css({"outline": ""});
		});
/* 改造代码结束 */
	})
}
	},
 }
};
esdDTGZ.init();
window.esdRebuildedTimer = setInterval(function(){
    if(typeof(EsdToolbar)=="object"&&EsdToolbar.pageIsRebuilded){
		clearInterval(window.esdRebuildedTimer);
		for (var attr in esdDTGZ.common) {
			var func = esdDTGZ.common[attr];
			if (typeof(func) == 'function') {
				func();
			}
		}
		for (var attr2 in esdDTGZ.gdt) {
			var func2 = esdDTGZ.gdt[attr2];
			if (typeof(func2) == 'function') {
				func2();
			}
		}
		for (var attr3 in esdDTGZ.elem) {
			var func3 = esdDTGZ.elem[attr3];
			if (typeof(func3) == 'function') {
				func3();
			}
		}
	}
},500)
