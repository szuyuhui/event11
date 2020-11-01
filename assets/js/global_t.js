jQuery.fn.extend({everyTime:function(c,a,d,b){return this.each(function(){jQuery.timer.add(this,c,a,d,b)})},oneTime:function(c,a,d){return this.each(function(){jQuery.timer.add(this,c,a,d,1)})},stopTime:function(c,a){return this.each(function(){jQuery.timer.remove(this,c,a)})}});
jQuery.extend({timer:{global:[],guid:1,dataKey:"jQuery.timer",regex:/^([0-9]+(?:\.[0-9]*)?)\s*(.*s)?$/,powers:{ms:1,cs:10,ds:100,s:1E3,das:1E4,hs:1E5,ks:1E6},timeParse:function(c){if(c==undefined||c==null)return null;var a=this.regex.exec(jQuery.trim(c.toString()));return a[2]?parseFloat(a[1])*(this.powers[a[2]]||1):c},add:function(c,a,d,b,e){var g=0;if(jQuery.isFunction(d)){e||(e=b);b=d;d=a}a=jQuery.timer.timeParse(a);if(!(typeof a!="number"||isNaN(a)||a<0)){if(typeof e!="number"||isNaN(e)||e<0)e=
0;e=e||0;var f=jQuery.data(c,this.dataKey)||jQuery.data(c,this.dataKey,{});f[d]||(f[d]={});b.timerID=b.timerID||this.guid++;var h=function(){if(++g>e&&e!==0||b.call(c,g)===false)jQuery.timer.remove(c,d,b)};h.timerID=b.timerID;f[d][b.timerID]||(f[d][b.timerID]=window.setInterval(h,a));this.global.push(c)}},remove:function(c,a,d){var b=jQuery.data(c,this.dataKey),e;if(b){if(a){if(b[a]){if(d){if(d.timerID){window.clearInterval(b[a][d.timerID]);delete b[a][d.timerID]}}else for(d in b[a]){window.clearInterval(b[a][d]);
delete b[a][d]}for(e in b[a])break;if(!e){e=null;delete b[a]}}}else for(a in b)this.remove(c,a,d);for(e in b)break;e||jQuery.removeData(c,this.dataKey)}}}});jQuery(window).bind("unload",function(){jQuery.each(jQuery.timer.global,function(c,a){jQuery.timer.remove(a)})});
	
/*Network*/
var kNetwork = {}; kNetwork.data = {}; kNetwork.init = function () { var b = $("meta"); for (var a = 0; a < b.length; a++) { if ($("meta:eq(" + a + ")").attr("property") == "og:title") { kNetwork.data.title = $("meta:eq(" + a + ")").attr("content") } else { if ($("meta:eq(" + a + ")").attr("property") == "og:description") { kNetwork.data.description = $("meta:eq(" + a + ")").attr("content") } else { if ($("meta:eq(" + a + ")").attr("property") == "og:image") { kNetwork.data.image = $("meta:eq(" + a + ")").attr("content") } else { if ($("meta:eq(" + a + ")").attr("property") == "og:url") { kNetwork.data.url = $("meta:eq(" + a + ")").attr("content") } } } } } if (typeof kNetwork.data.url == "undefined") { kNetwork.data.url = location.href.replace(location.hash, "") } }; function f(a) { var b = "https://www.facebook.com/sharer/sharer.php?u="; var c = b + (a ? a : kNetwork.data.url); window.open(c) } function p(a) { var h = kNetwork.data.title; var b = kNetwork.data.description; var e = a ? a : kNetwork.data.url; var d = kNetwork.data.image; var c = 145 - e.length - h.length - d.length; b = b.substr(0, c) + "..."; window.open("http://www.plurk.com/?qualifier=shares&status=" + encodeURIComponent(e) + " (" + encodeURIComponent(h) + ") " + encodeURIComponent(b) + " " + d) } function t(a) { var e = kNetwork.data.title; var b = kNetwork.data.description; var d = a ? a : kNetwork.data.url; var c = 135 - d.length - e.length; b = b.substr(0, c) + "..."; window.open("http://twitter.com/home/?status=" + encodeURIComponent(d + " " + e + " " + b)) } function m(a) { var i = kNetwork.data.title; var b = kNetwork.data.description; var h = a ? a : kNetwork.data.url; var e = kNetwork.data.image; var d = 205 - h.length - i.length - e.length; b = b.substr(0, d); var c = encodeURIComponent(h) + "&title=" + encodeURIComponent(i) + "&screenshot=" + encodeURIComponent(e) + "&description=" + encodeURIComponent(b); window.open("http://profile.live.com/badge?url=" + c) } function g(a) { var c = a ? a : kNetwork.data.url; var b = "https://plus.google.com/share?url=" + c; window.open(b, "_blank", "menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600") } function line(a) { var c = "http://line.me/R/msg/text/?"; var b = c + "BMW%20i%E9%83%BD%E6%9C%83%E7%A7%BB%E5%8B%95%20%E9%AB%94%E7%8F%BE%E6%9C%AA%E4%BE%86" + encodeURIComponent(a ? a : kNetwork.data.url); window.open(b) } var sendEvent = function (b, c, a) { if (typeof ga == "undefined") { return } ga("send", "event", b, c, a) }; var sendPage = function (a, b) { if (typeof ga == "undefined") { return } ga("send", "pageview", { page: a, title: b }) }; $(kNetwork.init);
/*Root*/
var Root = {}; Root.IPHONE = "iPhone"; Root.IPAD = "iPad"; Root.ANDROID = "Android"; Root.ANDROIDTABLET = "AndroidTablet"; Root.WINDOWSPHONE = "WindowsPhone"; Root.PC = "PC"; Root.IE6 = "IE6"; Root.IE7 = "IE7"; Root.IE8 = "IE8"; Root.IE9 = "IE9"; Root.IE10 = "IE10"; Root.IE11 = "IE11";Root.MSEDGE="MSEdge"; Root.CHROME = "Chrome"; Root.FIREFOX = "FF"; Root.SAFARI = "Safari"; Root.OPERA = "Opera"; Root.MICROSOFT = "microsoft"; Root.APPLE = "apple"; Root.GOOGLE = "google"; Root.browser = ""; Root.device = ""; Root.mobile = false; Root.system = ""; Root.target = window; Root.pointer = false; Root.detectBrowser = function () { var a = navigator.userAgent; if (/iPhone/i.test(a)) { Root.browser = Root.SAFARI; Root.device = Root.IPHONE; Root.system = Root.APPLE; Root.mobile = true } else { if (/iPad/i.test(a)) { Root.browser = Root.SAFARI; Root.device = Root.IPAD; Root.system = Root.APPLE; Root.mobile = true } else { if (/Android/i.test(a) && /mobile/i.test(a)) { Root.browser = Root.CHROME; Root.device = Root.ANDROID; Root.system = Root.GOOGLE; Root.mobile = true } else { if (/Android/i.test(a)) { Root.browser = Root.CHROME; Root.device = Root.ANDROIDTABLET; Root.system = Root.GOOGLE; Root.mobile = true } else { if (/Windows Phone/i.test(a) && /rv:11/i.test(a)) { Root.browser = Root.IE11; Root.device = Root.WINDOWSPHONE; Root.System = Root.MICROSOFT; Root.mobile = true } else { if (/Windows Phone/i.test(a) && /MSIE 10/i.test(a)) { Root.browser = Root.IE10; Root.device = Root.WINDOWSPHONE; Root.System = Root.MICROSOFT; Root.mobile = true } else { if (/Windows Phone/i.test(a) && /MSIE 9/i.test(a)) { Root.browser = Root.IE9; Root.device = Root.WINDOWSPHONE; Root.system = Root.MICROSOFT; Root.mobile = false } else { if (/MSIE 6/i.test(a)) { Root.browser = Root.IE6; Root.device = Root.PC; Root.system = Root.MICROSOFT; Root.mobile = false } else { if (/MSIE 7/i.test(a)) { Root.browser = Root.IE7; Root.device = Root.PC; Root.system = Root.MICROSOFT; Root.mobile = false } else { if (/MSIE 8/i.test(a)) { Root.browser = Root.IE8; Root.device = Root.PC; Root.system = Root.MICROSOFT; Root.mobile = false } else { if (/MSIE 9/i.test(a)) { Root.browser = Root.IE9; Root.device = Root.PC; Root.system = Root.MICROSOFT; Root.mobile = false } else { if (/MSIE 10/i.test(a)) { Root.browser = Root.IE10; Root.device = Root.PC; Root.system = Root.MICROSOFT; Root.mobile = false } else { if (/rv:11/i.test(a)) { Root.browser = Root.IE11; Root.device = Root.PC; Root.system = Root.MICROSOFT; Root.mobile = false }else if (/Edge\/12./i.test(a)) {Root.browser = Root.MSEDGE;Root.device = Root.PC;Root.system = Root.MICROSOFT;Root.mobile = false;} else { if (/Firefox/i.test(a)) { Root.browser = Root.FIREFOX; Root.device = Root.PC; Root.system = Root.PC; Root.mobile = false } else { if (/Chrome/i.test(a)) { Root.browser = Root.CHROME; Root.device = Root.PC; Root.system = Root.MICROSOFT; Root.mobile = false } } } } } } } } } } } } } } } if (Root.browser == Root.IE10 && a.match(/Touch/i)) { Root.pointer = true } if (Root.browser == Root.IE11 && a.match(/Touch/i)) { Root.pointer = true } }; Root.detectWindowsTouch = function () { if (window.PointerEvent && (navigator.msMaxTouchPoints || navigator.maxTouchPoints)) { return true } else { if (window.MSPointerEvent && (navigator.msMaxTouchPoints || navigator.maxTouchPoints)) { return true } else { return false } } }; Root.cookieData = {}; Root.setCookie = function (c, e, d) { if (d) { var b = new Date(); b.setTime(b.getTime() + (d * 60 * 1000)); var a = ""; a = "" + b.toGMTString() } else { var a = "" } document.cookie = c + "=" + encodeURIComponent(e) + "; expires=" + a }; Root.getCookie = function (c) { var e = document.cookie; var g = e.split(";"); var b = {}; for (var d = 0; d < g.length; d++) { var h = g[d].split("="); var a = h[0].replace(/^[\s]*|[\s]*$/g, ""); var f = h[1]; b[a] = f } Root.cookieData = b; return decodeURIComponent(b[c]) }; Root.deleteCookie = function (a) { Root.setCookie(a, "", -60 * 24) }; Root.titleCase = function (a) { return a.replace(/\w\S*/g, function (b) { return b.charAt(0).toUpperCase() + b.substr(1).toLowerCase() }) }; Root.getParams = function () { if (location.search == "") { return "" } var e = {}; var b = location.search.split("?")[1]; var c = b; var a = c.split("&"); var g = a.length; for (var f = 0; f < g; f++) { var d = a[f]; var j = Root.getKey(d); var h = Root.getValue(d); e[j] = h } return e }; Root.getKey = function (a) { var b = a.match(/^[^=]+/i)[0]; return b }; Root.getValue = function (a) { var b = a.match(/[^=]+$/i)[0]; return b }; Root.verifyPhone = function (a) { phoneReg = /(^[0]\d{1}\d{6,8}$)|(^[0]\d{2}\d{6,7}$)|(^[0]\d{3}\d{6}$)|(^09([0-9]){8})$/i; return phoneReg.test(a) }; Root.verifyEmail = function (a) { emailReg = /^([a-zA-Z0-9]+)(([a-zA-Z0-9]+)|([_\-\.][a-zA-Z0-9]+))+@((([a-zA-Z0-9]+)|([a-zA-Z0-9]+_[a-zA-Z0-9]+)|[a-zA-Z0-9]+\-[a-zA-Z0-9]+)\.)+([a-zA-Z0-9]{2,4})$/i; return emailReg.test(a) }; Root.verifyTB = function (c) { var a = new String("12121241"); var b = 0; re = /^\d{8}$/; if (!re.test(c)) { return false } for (t = 0; t < 8; t++) { s1 = parseInt(c.substr(t, 1)); s2 = parseInt(a.substr(t, 1)); b += cal(s1 * s2) } if (!valid(b)) { if (c.substr(6, 1) == "7") { return (valid(b + 1)) } } return (valid(b)) }; function valid(a) { return (a % 10 == 0) ? true : false } function cal(b) { var a = 0; while (b != 0) { a += (b % 10); b = (b - b % 10) / 10 } return a } Root.verifyInvoice = function (a) { invoiceReg = /^[a-zA-Z]{2}\d{8}/; return invoiceReg.test(a) };
Root.detectBrowser();

!function(d){function f(t,a){var n=t.find(".digit");if(n.is(":animated"))return!1;if(t.data("digit")==a)return!1;t.data("digit",a);var s=d("<span>",{class:"digit",css:{top:"-2.1em",opacity:0},html:a});n.before(s).removeClass("static").animate({top:"2.5em",opacity:0},"fast",function(){n.remove()}),s.delay(100).animate({top:0,opacity:1},"fast",function(){s.addClass("static")})}d.fn.countdown=function(t){var a,n,s,i,o,c,e=d.extend({callback:function(){},timestamp:0},t);function p(t,a,n){f(c.eq(t),Math.floor(n/10)%10),f(c.eq(a),n%10)}return function(a){a.addClass("countdownHolder"),d.each(["Days","Hours","Minutes","Seconds"],function(t){d('<span class="count'+this+'">').html('<span class="position">\t\t\t\t\t<span class="digit static">0</span>\t\t\t\t</span>\t\t\t\t<span class="position">\t\t\t\t\t<span class="digit static">0</span>\t\t\t\t</span>').appendTo(a),"Seconds"!=this&&a.append('<span class="countDiv countDiv'+t+'"></span>')})}(this),c=this.find(".position"),function t(){(a=Math.floor((e.timestamp-new Date)/1e3))<0&&(a=0),p(0,1,n=Math.floor(a/86400)),a-=86400*n,p(2,3,s=Math.floor(a/3600)),a-=3600*s,p(4,5,i=Math.floor(a/60)),p(6,7,o=a-=60*i),e.callback(n,s,i,o),setTimeout(t,1e3)}(),this}}(jQuery);

$(function(){
	var setTime=0;
	if(Root.getParams().t){
		setTime=new Date(Root.getParams().t.replace("T"," "))
		console.log(setTime)
	}
	if(Root.getParams().r){
		var round=Root.getParams().r;
		if(round>=1){spDone1=true;}
		if(round>=2){spDone2=true;}
		if(round>=3){spDone3=true;}
		if(round>=4){spDone4=true;}
	}


  var openTime        = new Date('2020/11/01 10:30:00'); //開始倒數時間

  //活動倒數
  var openCountTime   = new Date('2020/11/04 12:00:00');//第一套組開賣
  var clozCountTime   = new Date('2020/11/11 00:00:00');//第一套組結束時間
  
	var openCountTime2  = new Date('2020/11/11 00:00:00');
  var clozCountTime2  = new Date('2020/11/12 00:00:00');

  var openCountTime3  = new Date('2020/11/12 00:00:00');
  var clozCountTime3  = new Date('2020/11/13 00:00:00');	

  //主視覺CTA
  var openKVCTA    = new Date('2020/11/04 12:00:00');
  var clozKVCTA    = new Date('2020/11/10 00:00:00');
  var openKVCTA2   = new Date('2020/11/10 00:00:00');
  var clozKVCTA2   = new Date('2020/11/12 00:00:00');
  var openKVCTA3   = new Date('2020/11/12 00:00:00');
  var clozKVCTA3   = new Date('2020/11/13 00:00:00');

  //早鳥折價序號
  var openCTA   = new Date('2020/11/04 12:00:00');
  var clozCTA   = new Date('2020/11/01 12:00:00');

  var openCTA2   = new Date('2020/11/01 12:00:00');
  var clozCTA2   = new Date('2020/11/01 12:00:00');

  var openCTA3   = new Date('2020/11/01 12:00:00');
  var clozCTA3   = new Date('2020/11/01 12:00:00');

  var openCTA4   = new Date('2020/11/01 12:00:00');
  var clozCTA4   = new Date('2020/11/01 12:00:00');

  var openCTA5   = new Date('2020/11/01 12:00:00');
  var clozCTA5   = new Date('2020/11/01 12:00:00');

  var openCTA6   = new Date('2020/11/01 12:00:00');
  var clozCTA6   = new Date('2020/11/01 12:00:00');

  var openCTA7   = new Date('2020/11/01 12:00:00');
  var clozCTA7   = new Date('2020/11/01 12:00:00');

  var openCTA8   = new Date('2020/11/01 12:00:00');
  var clozCTA8   = new Date('2020/11/01 12:00:00');

  //結帳再賺lineP
  var openLINEA   = new Date('2020/11/04 12:00:00');
  var clozLINEA   = new Date('2020/11/10 00:00:00');

  var openLINEB   = new Date('2020/11/10 00:00:00');
  var clozLINEB   = new Date('2020/11/12 00:00:00');

  var openLINEA2   = new Date('2020/11/12 00:00:00');
  var clozLINEA2   = new Date('2020/11/13 00:00:00');

  //萬元購物車下單抽
  var openCART_HIDE   = new Date('2020/11/04 12:00:00');
  var clozCART_HIDE   = new Date('2020/11/07 00:00:00');

  var openCART   = new Date('2020/11/07 00:00:00');
  var clozCART   = new Date('2020/11/09 00:00:00');

  var openCART_B   = new Date('2020/11/09 00:00:00');
  var clozCART_B   = new Date('2020/11/13 00:00:00');

  //$1瘋搶
  var openDOLR_PRE   = new Date('2020/11/04 12:00:00');
  var clozDOLR_PRE   = new Date('2020/11/07 12:00:00');

  var openDOLR_1     = new Date('2020/11/07 12:00:00');
  var clozDOLR_1     = new Date('2020/11/08 12:00:00');

  var openDOLR_2     = new Date('2020/11/08 12:00:00');
  var clozDOLR_2     = new Date('2020/11/09 12:00:00');

  var openDOLR_3     = new Date('2020/11/09 12:00:00');
  var clozDOLR_3     = new Date('2020/11/10 12:00:00');

  var openDOLR_4     = new Date('2020/11/10 12:00:00');
  var clozDOLR_4     = new Date('2020/11/11 12:00:00');

  var openDOLR_5     = new Date('2020/11/11 12:00:00');
  var clozDOLR_5     = new Date('2020/11/12 12:00:00');

  var openDOLR_6     = new Date('2020/11/12 12:00:00');
  var clozDOLR_6     = new Date('2020/11/13 12:00:00');

  
  //24hr限定秒殺組
  var openONLYtoday   = new Date('2020/11/04 12:00:00');//第一套組開賣
  var clozONLYtoday   = new Date('2020/11/05 12:00:00');//第一套組結束時間

  var openONLYtoday1   = new Date('2020/11/05 12:00:00');
  var clozONLYtoday1   = new Date('2020/11/06 12:00:00');

  var openONLYtoday2   = new Date('2020/11/06 12:00:00');
  var clozONLYtoday2   = new Date('2020/11/07 12:00:00');

  var openONLYtoday3   = new Date('2020/11/07 12:00:00');
  var clozONLYtoday3   = new Date('2020/11/08 12:00:00');

  var openONLYtoday4   = new Date('2020/11/08 12:00:00');
  var clozONLYtoday4   = new Date('2020/11/09 12:00:00');

  var openONLYtoday5   = new Date('2020/11/09 12:00:00');
  var clozONLYtoday5   = new Date('2020/11/10 12:00:00');

  var openONLYtoday6   = new Date('2020/11/10 12:00:00');
  var clozONLYtoday6   = new Date('2020/11/11 12:00:00');

  var openONLYtoday7   = new Date('2020/11/11 12:00:00');
  var clozONLYtoday7   = new Date('2020/11/13 00:00:00');
  


  

	var closeTime=new Date('2020/11/13 00:00:00'); //timer關閉時間（即將結束）
  
  var eventCount=$('.timerA');
  var eventCountB=$('.timerB');
  var eventEndTxt=$('.eventEndTxt');

		
	function setOpenTime(_type){
    var newDate=(setTime!=0)?setTime:new Date();
    
    // console.log( newDate );
    // console.log( closeTime );
    
    if(newDate<closeTime){
      eventCount.show();
      eventCountB.show();
      eventEndTxt.hide();

      // console.log( lastDate );
      
      var lastDate=undefined;

      if(newDate > openTime){
        if( openTime <= newDate && newDate <= openCountTime){
          lastDate = openCountTime;
          $('.eventCountdown .timerB .txt').html("開跑倒數");
          //$('.sp-board,.sp-board2,.sp-board3,.sp-board4').hide();

        }else if(openCountTime<=newDate && newDate<=clozCountTime){
          lastDate = clozCountTime;

          $('.eventCountdown .timerB .txt').html("剩餘");
          $('.countDownDays .day1').addClass('day_on');

        }else if(openCountTime2<=newDate && newDate<=clozCountTime2){
          lastDate = clozCountTime2;
          $('.eventCountdown .timerB .txt').html("剩餘");
          $('.countDownDays .day1').removeClass('day_on');
          $('.countDownDays .day2').addClass('day_on');
        }else if(openCountTime3<=newDate && newDate<=clozCountTime3){
          lastDate = clozCountTime3;
          $('.eventCountdown .timerB .txt').html("剩餘");
          $('.countDownDays .day2').removeClass('day_on');
          $('.countDownDays .day3').addClass('day_on');
  
        }else {
          lastDate = closeTime;
          $('.eventCountdown .timerB .txt').html("即將結束");
          $('.countDownDays').removeClass('day_on');
        }
      }
      else{
        $('.eventCountdown .timerB .txt').html("活動結束");
        $('.countdown_title .time').hide();
      }

      ///////////////////////////////////////////////////
      if(newDate > openTime){
        if( openTime <=newDate && newDate <=clozONLYtoday){
          lastDate = clozONLYtoday;
          $('.onlyToday .timerB .txt').html("開跑倒數");
          $('.onlyToday .today1').show();
          $('.onlyToday .today2,.onlyToday .today3,.onlyToday .today4,.onlyToday .today5,.onlyToday .today6').hide();

        }else if(openONLYtoday1<=newDate && newDate<=clozONLYtoday1){
          lastDate = clozONLYtoday1;

          $('.onlyToday .timerB .txt').html("倒數");
          $('.onlyToday .today1').show();
          $('.onlyToday .today2,.onlyToday .today3,.onlyToday .today4,.onlyToday .today5,.onlyToday .today6').hide();

        }else if(openONLYtoday2<=newDate && newDate<=clozONLYtoday2){
          lastDate = clozONLYtoday2;

          $('.onlyToday .timerB .txt').html("倒數");
          $('.onlyToday .today2').show();
          $('.onlyToday .today1,.onlyToday .today3,.onlyToday .today4,.onlyToday .today5,.onlyToday .today6').hide();

        }else if(openONLYtoday3<=newDate && newDate<=clozONLYtoday3){
          lastDate = clozONLYtoday3;

          $('.onlyToday .timerB .txt').html("倒數");
          $('.onlyToday .today3').show();
          $('.onlyToday .today2,.onlyToday .today1,.onlyToday .today4,.onlyToday .today5,.onlyToday .today6').hide();
  
        }else if(openONLYtoday4<=newDate && newDate<=clozONLYtoday4){
          lastDate = clozONLYtoday4;

          $('.onlyToday .timerB .txt').html("倒數");
          $('.onlyToday .today4').show();
          $('.onlyToday .today2,.onlyToday .today3,.onlyToday .today1,.onlyToday .today5,.onlyToday .today6').hide();
  
        }else if(openONLYtoday5<=newDate && newDate<=clozONLYtoday5){
          lastDate = clozONLYtoday5;

          $('.onlyToday .timerB .txt').html("倒數");
          $('.onlyToday .today5').show();
          $('.onlyToday .today2,.onlyToday .today3,.onlyToday .today4,.onlyToday .today1,.onlyToday .today6').hide();
  
        }else if(openONLYtoday6<=newDate && newDate<=clozONLYtoday6){
          lastDate = clozONLYtoday6;

          $('.onlyToday .timerB .txt').html("倒數");
          $('.onlyToday .today5').show();
          $('.onlyToday .today2,.onlyToday .today3,.onlyToday .today4,.onlyToday .today1,.onlyToday .today6').hide();
  
        }else if(openONLYtoday7<=newDate && newDate<=clozONLYtoday7){
          lastDate = clozONLYtoday7;

          $('.onlyToday .timerB .txt').html("倒數");
          $('.onlyToday .today6').show();
          $('.onlyToday .today2,.onlyToday .today3,.onlyToday .today4,.onlyToday .today1,.onlyToday .today5').hide();
  
        }else {
          lastDate = closeTime;

          $('.onlyToday .timerB .txt').html("即將結束");
          $('.onlyToday .today6').show();
          $('.onlyToday .today2,.onlyToday .today3,.onlyToday .today4,.onlyToday .today5,.onlyToday .today1').hide();
        }
      }
      else{
        $('.onlyToday .today1').show();
        $('.onlyToday .today2,.onlyToday .today3,.onlyToday .today4,.onlyToday .today5,.onlyToday .today6').hide();
      }

  
			var spantime = (closeTime - newDate)/1000;
      var d = Math.floor(spantime / (24 * 3600));
      var h = Math.floor((spantime) / 3600 - d * 24 );
      var m = Math.floor((spantime % 3600) / (60));
      var s = Math.floor(spantime % 60);
      var ms = Math.floor( ((closeTime - newDate) - (d*(24 * 60 * 60 * 1000)) - (h*(60 * 60 * 1000)) - (m*(60 * 1000))  - (s*1000)) / 10 % 100);

      eventCount.find('.days').html((d<10)?"0"+d:d);
      eventCount.find('.hours').html((h<10)?"0"+h:h);
			eventCount.find('.minutes').html((m<10)?"0"+m:m);
      eventCount.find('.seconds').html((s<10)?"0"+s:s);
      eventCount.find('.miliseconds').html((ms<10)?"0"+ms:ms);

      var spantime = (lastDate - newDate)/1000;
      var d = Math.floor(spantime / (24 * 3600));
      var h = Math.floor((spantime) / 3600 - d * 24 );
      var m = Math.floor((spantime % 3600) / (60));
      var s = Math.floor(spantime % 60);
      var ms = Math.floor( ((lastDate - newDate) - (d*(24 * 60 * 60 * 1000)) - (h*(60 * 60 * 1000)) - (m*(60 * 1000))  - (s*1000)) / 10 % 100);

      eventCountB.find('.days').html((d<10)?"0"+d:d);
      eventCountB.find('.hours').html((h<10)?"0"+h:h);
			eventCountB.find('.minutes').html((m<10)?"0"+m:m);
      eventCountB.find('.seconds').html((s<10)?"0"+s:s);
      eventCountB.find('.miliseconds').html((ms<10)?"0"+ms:ms);
			$(window).oneTime(100,function(){setOpenTime(false);});
		}else{
      eventCount.find('.miliseconds').html("00");
      eventCount.hide();
      eventCountB.hide();
      eventEndTxt.show();
    }

    //KV_CTA
    if(newDate>=openKVCTA2 && newDate<=clozKVCTA2){
      $('.header-cta b').addClass('part2');

    }else if(newDate>=openKVCTA3 && newDate<=openKVCTA3){
      $('.header-cta b').removeClass('part2');

    }else{
      $('.header-cta b').removeClass('part2');
    }


    //早鳥折價序號
    if(newDate>=openCTA && newDate<=clozCTA){
      $('.ctabox1').show();
      $('.ctabox2,.ctabox3,.ctabox4,.ctabox5,.ctabox6,.ctabox7,.ctabox8').hide();

    }else if(newDate>=openCTA2 && newDate<=clozCTA2){
      $('.ctabox2').show();
      $('.ctabox1,.ctabox3,.ctabox4,.ctabox5,.ctabox6,.ctabox7,.ctabox8').hide();

    }else if(newDate>=openCTA3 && newDate<=clozCTA3){
      $('.ctabox3').show();
      $('.ctabox1,.ctabox2,.ctabox4,.ctabox5,.ctabox6,.ctabox7,.ctabox8').hide();

    }else if(newDate>=openCTA4 && newDate<=clozCTA4){
      $('.ctabox4').show();
      $('.ctabox1,.ctabox2,.ctabox3,.ctabox5,.ctabox6,.ctabox7,.ctabox8').hide();

    }else if(newDate>=openCTA5 && newDate<=clozCTA5){
      $('.ctabox5').show();
      $('.ctabox1,.ctabox2,.ctabox3,.ctabox4,.ctabox6,.ctabox7,.ctabox8').hide();

    }else if(newDate>=openCTA6 && newDate<=clozCTA6){
      $('.ctabox6').show();
      $('.ctabox1,.ctabox2,.ctabox3,.ctabox4,.ctabox5,.ctabox7,.ctabox8').hide();

    }else if(newDate>=openCTA7 && newDate<=clozCTA7){
      $('.ctabox7').show();
      $('.ctabox1,.ctabox2,.ctabox3,.ctabox4,.ctabox5,.ctabox6,.ctabox8').hide();

    }else if(newDate>=openCTA8){
      $('.ctabox8').show();
      $('.ctabox1,.ctabox2,.ctabox3,.ctabox4,.ctabox5,.ctabox6,.ctabox7').hide();

    }else{
      $('.ctabox1').show();
      $('.ctabox2,.ctabox3,.ctabox4,.ctabox5,.ctabox6,.ctabox7,.ctabox8').hide();
    }

    //結帳再賺lineP
    if(newDate>=openLINEA && newDate<=clozLINEA){
      $('.specialBonus_v1').show();
      $('.specialBonus_v2').hide();

    }else if(newDate>=openLINEB && newDate<=clozLINEB){
      $('.specialBonus_v2').show();
      $('.specialBonus_v1').hide();

    }else if(newDate>=openLINEA2 && newDate<=clozLINEA2){
      $('.specialBonus_v1').show();
      $('.specialBonus_v2').hide();

    }else{
      $('.specialBonus_v1').show();
      $('.specialBonus_v2').hide();
    }

    //萬元購物車下單抽
    if(newDate>=openCART_HIDE && newDate<=clozCART_HIDE){
      $('.millionCart').css('display','none');

    }else if(newDate>=openCART && newDate<=clozCART){
      $('.millionCart_v1').show();
      $('.millionCart_v2').hide();

    }else if(newDate>=openCART_B && newDate<=clozCART_B){
      $('.millionCart_v1,.millionCart_v2').show();
      
    }else{
      $('.millionCart').css('display','none');
    }

    //$1瘋搶
    if(newDate>=openDOLR_1 && newDate<=clozDOLR_1){
      $('.crazyOneDollor .detList.d1').removeClass('pre').addClass('on');

    }else if(newDate>=openDOLR_2 && newDate<=clozDOLR_2){
      $('.crazyOneDollor .detList.d2').removeClass('pre').addClass('on');

    }else if(newDate>=openDOLR_3 && newDate<=clozDOLR_3){
      $('.crazyOneDollor .detList.d3').removeClass('pre').addClass('on');

    }else if(newDate>=openDOLR_4 && newDate<=clozDOLR_4){
      $('.crazyOneDollor .detList.d4').removeClass('pre').addClass('on');

    }else if(newDate>=openDOLR_5 && newDate<=clozDOLR_5){
      $('.crazyOneDollor .detList.d5').removeClass('pre').addClass('on');

    }else if(newDate>=openDOLR_6 && newDate<=clozDOLR_6){
      $('.crazyOneDollor .detList.d6').removeClass('pre').addClass('on');
      
    }else{
      $('.crazyOneDollor .detList').removeClass('on').addClass('pre');
    }


	}
	
	setOpenTime(true);
})