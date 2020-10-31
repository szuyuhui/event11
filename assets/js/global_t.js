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


  var openTime       = new Date('2020/09/06 9:00:00'); //開始倒數時間

  //test
  var openBNspTimeA   = new Date('2020/09/07 00:00:00');//TT
  var closeBNspTimeB  = new Date('2020/09/11 23:59:00');//TT

  var openBNspTime   = new Date('2020/09/07 00:00:00');//第一套組開賣
  var closeBNspTime  = new Date('2020/09/09 00:00:00');//第一套組結束時間
  
	var openBNspTime2  = new Date('2020/09/09 00:00:00');//貼臉
  var closeBNspTime2 = new Date('2020/09/10 00:00:00');

  var openBNspTime3  = new Date('2020/09/10 00:00:00');
  var closeBNspTime3 = new Date('2020/09/11 00:00:00');

  var openBNspTime4  = new Date('2020/09/11 00:00:00');
  var closeBNspTime4 = new Date('2020/09/11 23:59:00');

  //timerB
  var openSale24Time   = new Date('2020/09/07 12:00:00');//第一套組開賣
  var closeSale24Time  = new Date('2020/09/08 12:00:00');//第一套組結束時間
  
	var openSale24Time2  = new Date('2020/09/08 12:00:00');//貼臉
  var closeSale24Time2 = new Date('2020/09/09 12:00:00');

  var openSale24Time3  = new Date('2020/09/09 12:00:00');
  var closeSale24Time3 = new Date('2020/09/10 12:00:00');

  var openSale24Time4  = new Date('2020/09/10 12:00:00');
  var closeSale24Time4 = new Date('2020/09/11 12:00:00');

  var openSale24Time5  = new Date('2020/09/11 12:00:00');
  var closeSale24Time5 = new Date('2020/09/11 23:59:00');
  
  //cta TIME
  var openctaTime   = new Date('2020/09/07 12:00:00');
  var closectaTime  = new Date('2020/09/08 00:00:00');

  var openctaTime2  = new Date('2020/09/08 00:00:00');
  var closectaTime2 = new Date('2020/09/09 00:00:00');

  var openctaTime3  = new Date('2020/09/09 00:00:00');
  var closectaTime3  = new Date('2020/09/10 12:00:00');

  var openctaTime4  = new Date('2020/09/10 12:00:00');
  var closectaTime4  = new Date('2020/09/10 22:00:00');

  var openctaTime5  = new Date('2020/09/10 22:00:00');
  var closectaTime5  = new Date('2020/09/11 23:59:00');//壹定要 < closeTime

  //$1瘋搶 OneDlar
  var openOneDlarTime   = new Date('2020/09/07 00:00:00');
  var closeOneDlarTime  = new Date('2020/09/08 12:00:00');

  var openOneDlarTime2   = new Date('2020/09/08 12:00:00');
  var closeOneDlarTime2  = new Date('2020/09/09 12:00:00');

  var openOneDlarTime3  = new Date('2020/09/09 12:00:00');
  var closeOneDlarTime3 = new Date('2020/09/10 12:00:00');

  var openOneDlarTime4  = new Date('2020/09/10 12:00:00');
  var closeOneDlarTime4  = new Date('2020/09/11 12:00:00');

  var openOneDlarTime5  = new Date('2020/09/11 12:00:00');
  var closeOneDlarTime5  = new Date('2020/09/11 23:59:00');//壹定要 < closeTime

  //購物車
  var openCartTime   = new Date('2020/09/07 00:00:00');
  var closeCartTime  = new Date('2020/09/08 12:00:00');

  var openCartTime2  = new Date('2020/09/08 12:00:00');
  var closeCartTime2 = new Date('2020/09/11 23:59:00');

	var closeTime=new Date('2020/09/11 23:59:00'); //timer關閉時間（即將結束）
  
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

      console.log("testa");
      
      var lastDate=undefined;

      if(newDate > openTime){
        if( openTime <=newDate && newDate <=openBNspTimeA){
          lastDate = openBNspTimeA;

          $('.timerA .txt').html("開跑倒數"); 
          
        }else if(openBNspTimeA<=newDate && newDate<=closeBNspTimeB){
          lastDate = closeBNspTimeB;

          $('.timerA .txt').html("剩餘");
          console.log( "!!!!"  +  closeTime);
         
        }else {
          lastDate = closeTime;
          $('.timerA .txt').html("即將結束");
        }
      }
      else{
        $('.timerA .txt').html("");
      }

      ///////////////////////////////////////////////////
      if(newDate > openTime){
        if( openTime <=newDate && newDate <=openSale24Time){
          lastDate = openSale24Time;
          $('.timerB .txt').html("開跑倒數");
          $('.sale24-board').show();
          $('.sale24-board2,.sale24-board3,.sale24-board4,.sale24-board5').hide();

        }else if(openSale24Time<=newDate && newDate<=closeSale24Time){
          lastDate = closeSale24Time;

          $('.timerB .txt').html("剩餘");
          $('.sale24-board').show();
          $('.sale24-board2,.sale24-board3,.sale24-board4,.sale24-board5').hide();

        }else if(openSale24Time2<newDate && newDate<closeSale24Time2){
          lastDate = closeSale24Time2;
          $('.timerB .txt').html("剩餘");
          $('.sale24-board2').show();
          $('.sale24-board,.sale24-board3,.sale24-board4,.sale24-board5').hide();
        }else if(openSale24Time3<newDate && newDate<closeSale24Time3){
          lastDate = closeSale24Time3;
          $('.timerB .txt').html("剩餘");
          $('.sale24-board3').show();
          $('.sale24-board,.sale24-board2,.sale24-board4,.sale24-board5').hide();
  
        }else if(openSale24Time4<newDate && newDate<closeSale24Time4){
          lastDate = closeSale24Time4;
          $('.timerB .txt').html("剩餘");
          $('.sale24-board4').show();
          $('.sale24-board,.sale24-board2,.sale24-board3,.sale24-board5').hide();
  
        }else if(openSale24Time5<newDate && newDate<closeSale24Time5){
          lastDate = closeSale24Time5;
          $('.timerB .txt').html("剩餘");
          $('.sale24-board5').show();
          $('.sale24-board,.sale24-board2,.sale24-board3,.sale24-board4').hide();
  
        }else {
          lastDate = closeTime;
          $('.timerB .txt').html("即將結束");
          $('.sale24-board5').show();
          $('.sale24-board,.sale24-board2,.sale24-board3,.sale24-board4').hide();
        }
      }
      else{
        $('.sale24-board,.sale24-board2,.sale24-board3,.sale24-board4,.sale24-board5').hide();
      }

  
			var spantime = (lastDate - newDate)/1000;
      var d1 = Math.floor(spantime / (24 * 3600));
      var h1 = Math.floor((spantime) / 3600 - d * 24 );
      var m1 = Math.floor((spantime % 3600) / (60));
      var s1 = Math.floor(spantime % 60);
      var ms1 = Math.floor( ((lastDate - newDate) - (d*(24 * 60 * 60 * 1000)) - (h*(60 * 60 * 1000)) - (m*(60 * 1000))  - (s*1000)) / 10 % 100);

      var d2 = Math.floor(spantime / (24 * 3600));
      var h2 = Math.floor((spantime) / 3600 - d * 24 );
      var m2 = Math.floor((spantime % 3600) / (60));
      var s2 = Math.floor(spantime % 60);
      var ms2 = Math.floor( ((lastDate - newDate) - (d*(24 * 60 * 60 * 1000)) - (h*(60 * 60 * 1000)) - (m*(60 * 1000))  - (s*1000)) / 10 % 100);

      eventCount.find('.days').html((d1<10)?"0"+d1:d1);
      eventCount.find('.hours').html((h1<10)?"0"+h1:h1);
			eventCount.find('.minutes').html((m1<10)?"0"+m1:m1);
      eventCount.find('.seconds').html((s1<10)?"0"+s1:s1);
      eventCount.find('.miliseconds').html((ms1<10)?"0"+ms1:ms1);

      eventCountB.find('.days').html((d2<10)?"0"+d2:d2);
      eventCountB.find('.hours').html((h2<10)?"0"+h2:h2);
			eventCountB.find('.minutes').html((m2<10)?"0"+m2:m2);
      eventCountB.find('.seconds').html((s2<10)?"0"+s2:s2);
      eventCountB.find('.miliseconds').html((ms2<10)?"0"+ms2:ms2);
			$(window).oneTime(100,function(){setOpenTime(false);});
		}else{
      eventCount.find('.miliseconds').html("00");
      eventCount.hide();
      eventCountB.hide();
      eventEndTxt.show();
    }

    //event Days
    if(newDate>=openBNspTime && newDate<=closeBNspTime){
      $('.sp-board').show();
      $('.sp-board2,.sp-board3,.sp-board4').hide();
    }else if(newDate>=openBNspTime2 && newDate<=closeBNspTime2){
      $('.sp-board2').show();
      $('.sp-board,.sp-board3,.sp-board4').hide();
    }else if(newDate>=openBNspTime3 && newDate<=closeBNspTime3){
      $('.sp-board3').show();
      $('.sp-board,.sp-board2,.sp-board4').hide();
    }else if(newDate>=openBNspTime4){
      $('.sp-board4').show();
      $('.sp-board,.sp-board2,.sp-board3').hide();
    }else{
      $('.sp-board,.sp-board2,.sp-board3,.sp-board4').hide();
    }


    //CTA
    if(newDate>=openctaTime && newDate<=closectaTime){
      $('.ctabx01').show();
      $('.ctabx02,.ctabx03,.ctabx04').hide();
    }else if(newDate>=openctaTime2 && newDate<=closectaTime2){
      $('.ctabx02').show();
      $('.ctabx03,.ctabx04,.ctabx01').hide();
    }else if(newDate>=openctaTime3 && newDate<=closectaTime3){
      $('.ctabx03').show();
      $('.ctabx01,.ctabx02,.ctabx04').hide();
    }else if(newDate>=openctaTime4 && newDate<=closectaTime4){
      $('.ctabx02').show();
      $('.ctabx03,.ctabx04,.ctabx01').hide();
    }else if(newDate>=openctaTime5){
      $('.ctabx04').show();
      $('.ctabx01,.ctabx02,.ctabx03').hide();
    }else{
      $('.ctabx01').show();
      $('.ctabx02,.ctabx03,.ctabx04').hide();
    }

    //$1瘋搶
    if(newDate>=openOneDlarTime && newDate<=closeOneDlarTime){//未開賣
      $('.preimgD1,.preimgD2,.preimgD3,.preimgD4').show();
      $('.onimgD1,.onimgD2,.onimgD3,.onimgD4').hide();
    }else if(newDate>=openOneDlarTime2 && newDate<=closeOneDlarTime2){
      $('.onimgD1,.preimgD2,.preimgD3,.preimgD4').show();
      $('.preimgD1,.onimgD2,.onimgD3,.onimgD4').hide();
    }else if(newDate>=openOneDlarTime3 && newDate<=closeOneDlarTime3){
      $('.onimgD1,.onimgD2,.preimgD3,.preimgD4').show();
      $('.preimgD1,.preimgD2,.onimgD3,.onimgD4').hide();
    }else if(newDate>=openOneDlarTime4 && newDate<=closeOneDlarTime4){
      $('.onimgD1,.onimgD2,.onimgD3,.preimgD4').show();
      $('.preimgD1,.preimgD2,.preimgD3,.onimgD4').hide();
    }else if(newDate>=openOneDlarTime5){
      $('.onimgD1,.onimgD2,.onimgD3,.onimgD4').show();
      $('.preimgD1,.preimgD2,.preimgD3,.preimgD4').hide();
    }else{
      $('.preimgD1,.preimgD2,.preimgD3,.preimgD4').show();
      $('.onimgD1,.onimgD2,.onimgD3,.onimgD4').hide();
    }

    //購物車
    if(newDate>=openCartTime && newDate<=closeCartTime){ //未開賣
      $('.cartA').show();
      $('.cartB').hide();
    }else if(newDate>=openCartTime2){ //第一組
      $('.cartB').show();
      $('.cartA').hide();
    }else{
      $('.cartA').show();
      $('.cartB').hide();
    }
	}
	
	setOpenTime(true);
})