;/* Version 0086dbec5e8a6e717bf36d3a06b62042 v:4.2.7.0, c:ea629f71a1cb83c311d8dd4c260012a29ff1ffce, b:5359 n:29-4.2.7.next-build */(function(){new function(){if(!window.ADRUM&&!0!==window["adrum-disable"]){var g=window.ADRUM={};window["adrum-start-time"]=window["adrum-start-time"]||(new Date).getTime();(function(a){(function(a){a.Zc=function(){for(var a=[],d=0;d<arguments.length;d++)a[d-0]=arguments[d];for(d=0;d<a.length;d++){var b=a[d];b&&b.setUp()}}})(a.monitor||(a.monitor={}))})(g||(g={}));(function(a){a=a.conf||(a.conf={});a.beaconUrlHttp="http://col.eum-appdynamics.com";a.beaconUrlHttps="https://col.eum-appdynamics.com";a.corsEndpointPath="/eumcollector/beacons/browser/v1";
a.imageEndpointPath="/eumcollector/adrum.gif?";a.appKey=window["adrum-app-key"]||"AD-AAB-AAC-RBY";var d="https:"===document.location.protocol;a.adrumExtUrl=(d?"https://cdn.appdynamics.com":"http://cdn.appdynamics.com")+"/adrum-ext.0086dbec5e8a6e717bf36d3a06b62042.js";a.adrumXdUrl="https://cdn.appdynamics.com/adrum-xd.0086dbec5e8a6e717bf36d3a06b62042.html";a.agentVer="4.2.7.0";a.sendImageBeacon="false";if(window["adrum-geo-resolver-url"]){var f=window["adrum-geo-resolver-url"],c=f.indexOf("://");-1!=
c&&(f=f.substring(c+3));f=(d?"https://":"http://")+f}else f=d?"":"";a.geoResolverUrl=f;a.useStrictDomainCookies=!0===window["adrum-use-strict-domain-cookies"];a.userConf=window["adrum-config"];a.$d=10})(g||(g={}));(function(a){(function(d){function f(a){return"undefined"!==typeof a&&null!==a}function c(a){return"[object Array]"===Object.prototype.toString.apply(a)}function b(a){return"object"==typeof a&&!c(a)&&null!==a}function e(a){return"string"==
typeof a}function h(a,e){for(var d in e){var p=e[d];if(l(e,d)){var f=a[d];b(p)&&b(f)?h(f,p):a[d]=c(f)&&c(p)?f.concat(p):p}}return a}function l(a,h){return Object.prototype.hasOwnProperty.call(a,h)&&f(a[h])}function p(a){return e(a)?a.replace(/^\s*/,"").replace(/\s*$/,""):a}d.isDefined=f;d.isArray=c;d.isObject=b;d.isFunction=function(a){return"function"==typeof a||!1};d.isString=e;d.isNumber=function(a){return"number"==typeof a};d.Ta=function(a){setTimeout(a,0)};d.addEventListener=function(h,e,b){function l(){try{return b.apply(this,
Array.prototype.slice.call(arguments))}catch(d){a.exception(d,"M1",e,h,d)}}a.isDebug&&a.log("M0",e,h);h.addEventListener?h.addEventListener(e,l,!1):h.attachEvent&&h.attachEvent("on"+e,l)};d.loadScriptAsync=function(h){var e=document.createElement("script");e.async=!0;e.src=h;var b=document.getElementsByTagName("script")[0];b?(b.parentNode.insertBefore(e,b),a.log("M2",h)):a.log("M3",h)};d.mergeJSON=h;d.hasOwnPropertyDefined=l;d.od=function(a){var h=[];a&&(d.isObject(a)?h=[a]:d.isArray(a)&&(h=a));return h};
d.generateGUID="undefined"!==typeof window.crypto&&"undefined"!==typeof window.crypto.getRandomValues?function(){function a(h){for(h=h.toString(16);4>h.length;)h="0"+h;return h}var h=new Uint16Array(8);window.crypto.getRandomValues(h);return a(h[0])+a(h[1])+"_"+a(h[2])+"_"+a(h[3])+"_"+a(h[4])+"_"+a(h[5])+a(h[6])+a(h[7])}:function(){return"xxxxxxxx_xxxx_4xxx_yxxx_xxxxxxxxxxxx".replace(/[xy]/g,function(a){var h=16*Math.random()|0;return("x"==a?h:h&3|8).toString(16)})};d.fd=function(a){return a?(a=a.stack)&&
"string"===typeof a?a:null:null};d.trim=p;d.xg=function(a){var h={},e,b;if(!a)return h;var l=a.split("\n");for(b=0;b<l.length;b++){var d=l[b];e=d.indexOf(":");a=p(d.substr(0,e)).toLowerCase();e=p(d.substr(e+1));a&&(h[a]=h[a]?h[a]+(", "+e):e)}return h};d.tryPeriodically=function(a,h,e,b){function l(){if(h())e&&e();else{var c=a(++d);0<c?setTimeout(l,c):b&&b()}}var d=0;l()};d.Qb=function(a){return a.charAt(0).toUpperCase()+a.slice(1)};d.Ic=function(a){for(var h=[],e=1;e<arguments.length;e++)h[e-1]=arguments[e];
return function(){for(var e=[],b=0;b<arguments.length;b++)e[b-0]=arguments[b];return a.apply(this,h.concat(e))}};d.now=Date&&Date.now||function(){return(new Date).getTime()}})(a.utils||(a.utils={}))})(g||(g={}));(function(a){function d(h,e,b,d){h=a.conf.beaconUrlHttps+"/eumcollector/error.gif?version=1&appKey="+b+"&msg="+encodeURIComponent(h.substring(0,500));d&&(h+="&stack=",h+=encodeURIComponent(d.substring(0,1500-h.length)));return h}function f(h,b){2<=e||(document.createElement("img").src=d(h,
0,a.conf.appKey,b),e++)}function c(a){return 0<=a.location.search.indexOf("ADRUM_debug=true")||0<=a.cookie.search(/(^|;)\s*ADRUM_debug=true/)}a.iDR=c;a.isDebug=c(document);var b=[];a.logMessages=b;a.log=function(h){for(var e=1;e<arguments.length;e++);a.isDebug&&b.push(Array.prototype.slice.call(arguments).join(" | "))};a.error=function(h){for(var e=1;e<arguments.length;e++);e=Array.prototype.slice.call(arguments).join(" | ");a.log(e);f(e,null)};a.exception=function(){for(var h=[],e=0;e<arguments.length;e++)h[e-
0]=arguments[e];1>arguments.length||(h=Array.prototype.slice.call(arguments),e=a.utils.fd(h[0]),h=h.slice(1).join(" | "),a.log(h),f(h,e))};a.assert=function(h,e){h||a.error("Assert fail: "+e)};a.dumpLog=a.isDebug?function(){for(var a="",e=0;e<b.length;e++)a+=b[e].replace(RegExp("<br/>","g"),"\n\t")+"\n";return a}:function(){};a.cIEBU=d;var e=0;a.log("M4")})(g||(g={}));(function(a){var d=function(){function a(b){this.max=b;this.za=0}a.prototype.Mf=function(){this.ka()||this.za++};a.prototype.ka=function(){return this.za>=
this.max};a.prototype.reset=function(){this.za=0};return a}(),f=function(){function c(){this.ha=[];this.Va=new d(c.oe);this.Ka=new d(c.ce)}c.prototype.submit=function(b){this.push(b)&&a.initEXTDone&&this.processQ()};c.prototype.processQ=function(){for(var b=this.ef(),e=0;e<b.length;e++){var h=b[e];"function"===typeof a.commands[h[0]]?(a.isDebug&&a.log("M5",h[0],h.slice(1).join(", ")),a.commands[h[0]].apply(a,h.slice(1))):a.error("M6",h[0])}};c.prototype.ag=function(a){return"reportXhr"===a||"reportPageError"===
a};c.prototype.push=function(b){var e=b[0],h=this.ag(e),d=h?this.Va:this.Ka;if(d.ka())return a.log("M7",h?"spontaneous":"non spontaneous",e),!1;this.ha.push(b);d.Mf();return!0};c.prototype.ef=function(){var a=this.ha;this.reset();return a};c.prototype.size=function(){return this.ha.length};c.prototype.reset=function(){this.ha=[];this.Va.reset();this.Ka.reset()};c.prototype.isSpontaneousQueueDead=function(){return this.Va.ka()};c.prototype.isNonSpontaneousQueueDead=function(){return this.Ka.ka()};
c.oe=100;c.ce=100;return c}();a.Cd=f})(g||(g={}));(function(a){a.q=new a.Cd;a.command=function(d){for(var f=1;f<arguments.length;f++);a.isDebug&&a.log("M8",d,Array.prototype.slice.call(arguments).slice(1).join(", "));a.q.submit(Array.prototype.slice.call(arguments))}})(g||(g={}));(function(a){(function(a){var f=function(){function a(){this.status={}}a.prototype.setUp=function(){};a.prototype.set=function(a,e){this.status[a]=e};return a}();a.mb=f})(a.monitor||(a.monitor={}))})(g||(g={}));(function(a){(function(d){window.ADRUM.aop=
d;d.support=function(a){return!a||"apply"in a};d.around=function(f,c,b,e){a.assert(d.support(f),"aop.around called on a function which does not support interception");f=f||function(){};return function(){a.isDebug&&a.log("M9",e,Array.prototype.slice.call(arguments).join(", "));var h=Array.prototype.slice.call(arguments),d;try{c&&(d=c.apply(this,h))}catch(p){a.exception(p,"M10",e,p)}a.assert(!d||"[object Array]"===Object.prototype.toString.call(d));var k=void 0;try{k=f.apply(this,d||h)}finally{try{b&&
b.apply(this,h)}catch(m){a.exception(m,"M11",e,m)}}return k}};d.before=function(a,c){return d.around(a,c)};d.after=function(a,c){return d.around(a,null,c)}})(a.aop||(a.aop={}))})(g||(g={}));(function(a){a=a.EventType||(a.EventType={});a[a.BASE_PAGE=0]="BASE_PAGE";a[a.IFRAME=1]="IFRAME";a[a.XHR=2]="XHR";a[a.VIRTUAL_PAGE=3]="VIRTUAL_PAGE";a[a.PAGE_ERROR=4]="PAGE_ERROR";a[a.ABSTRACT=100]="ABSTRACT";a[a.ADRUM_XHR=101]="ADRUM_XHR";a[a.NG_VIRTUAL_PAGE=102]="NG_VIRTUAL_PAGE"})(g||(g={}));(function(a){a=
a.events||(a.events={});a.l={};a.l[100]={guid:"string",url:"string",parentGUID:"string",parentUrl:"string",parentType:"number",timestamp:"number"};a.l[3]={resTiming:"object"};a.l[102]={digestCount:"number"};a.l[2]={method:"string",parentPhase:"string",parentPhaseId:"number",error:"object"};a.l[101]={xhr:"object"};a.l[4]={msg:"string",line:"number",stack:"string"}})(g||(g={}));(function(a){var d=function(){function a(){this.w={}}a.prototype.mark=function(a,e){f.mark.apply(this,arguments)};a.prototype.getTiming=
function(a){return(a=this.getEntryByName(a))&&a.startTime};a.prototype.measure=function(a,e,h){f.measure.apply(this,arguments)};a.prototype.getEntryByName=function(a){return f.getEntryByName.call(this,a)};a.ya=function(a){return f.ya(a)};return a}();a.PerformanceTracker=d;var f;(function(d){var b=a.utils.hasOwnPropertyDefined,e=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance,h=e&&e.timing&&e.timing.navigationStart?e.timing.navigationStart:window["adrum-start-time"],
l=a.utils.now;d.mark=function(e,h){this.w[e]={name:e,entryType:"mark",startTime:a.utils.isDefined(h)?h:l(),duration:0}};d.measure=function(e,d,c){b(this.w,d)&&b(this.w,c)?this.w[e]={name:e,entryType:"measure",startTime:d?this.w[d].startTime:h,duration:(c?this.w[c].startTime:l())-(d?this.w[d].startTime:h)}:a.error("M12",b(this.w,d)?c:d)};d.getEntryByName=function(a){return this.w[a]||null};d.ya=function(a){return a+h}})(f||(f={}))})(g||(g={}));(function(a){(function(d){function f(e,h){e=e||{};for(var b in e)h[b]=
function(){var h=b,d=e[b];return function(e){var b="_"+h,l=this[b];if(a.utils.isDefined(e))if(typeof e===d)this[b]=e;else throw TypeError("wrong type of "+h+" value, "+typeof e+" passed in but should be a "+d+".");return l}}()}function c(a){var h={},b;for(b in a){var d=a[b];h[d.start]=!0;h[d.end]=!0}return h}var b=function(){function e(e){this.perf=new a.PerformanceTracker;this.timestamp(a.utils.now());this.guid(a.utils.generateGUID());this.url(document.URL);this.Yc(e)}e.prototype.type=function(){return 100};
e.prototype.Yc=function(e){if(a.utils.isObject(e))for(var b in e){var d=this[b]||this["mark"+a.utils.Qb(b)];d&&a.utils.isFunction(d)&&d.call(this,e[b])}};e.Mb=function(a,e,b){return{guid:function(){return a},url:function(){return e},type:function(){return b}}};e.prototype.Cf=function(){return e.Mb(this.parentGUID(),this.parentUrl(),this.parentType())};e.prototype.parent=function(e){var b=this.Cf();a.utils.isDefined(e)&&(this.parentGUID(e.guid()),this.parentUrl(e.url()),this.parentType(e.type()));
return b};return e}();d.EventTracker=b;d.W=f;d.Nb=function(e,h){e=e||{};var b=c(e),d;for(d in b)b=a.utils.Qb(d),h["mark"+b]=a.utils.Ic(function(a,e){this.perf.mark(a,e)},d),h["get"+b]=a.utils.Ic(function(a){return this.perf.getTiming(a)},d)};f(d.l[100],b.prototype)})(a.events||(a.events={}))})(g||(g={}));var t=this.He||function(a,d){function f(){this.constructor=a}for(var c in d)d.hasOwnProperty(c)&&(a[c]=d[c]);f.prototype=d.prototype;a.prototype=new f};(function(a){(function(a){var f=function(a){function b(e){a.call(this,
e)}t(b,a);b.prototype.type=function(){return 4};return b}(a.EventTracker);a.Error=f;a.W(a.l[4],f.prototype)})(a.events||(a.events={}))})(g||(g={}));(function(a){(function(d){var f=function(d){function b(){d.apply(this,arguments)}t(b,d);b.prototype.setUp=function(){d.prototype.setUp.call(this);a.listenForErrors=this.Ac;this.Ac()};b.prototype.Ac=function(){if(a.aop.support(window.onerror)){var e=this;window.onerror=a.aop.around(window.onerror,function(h,d,c,f,g){b.Ia||(b.errorsSent>=a.conf.$d?a.log("M13"):
(f=a.utils.fd(g),a.command("reportPageError",new a.events.Error(a.utils.mergeJSON({msg:h,url:d,line:c,stack:f},e.status))),b.errorsSent++,b.Ia=!0))},function(){b.Ia=!1},"onerror");a.log("M14")}else a.log("M15")};b.Ia=!1;b.errorsSent=0;return b}(d.mb);d.ErrorMonitor=f;d.Zb=new d.ErrorMonitor})(a.monitor||(a.monitor={}))})(g||(g={}));(function(a){var d=function(){function d(){this.sa=[];this.na(d.va,0)}d.prototype.pg=function(a){this.na(d.Gb,a)};d.prototype.rg=function(a){this.na(d.Ob,a)};d.prototype.qg=
function(a){this.na(d.Ib,a)};d.prototype.na=function(a,d){this.sa.push({og:(new Date).getTime(),mg:d,Jc:a});this.af=a};d.prototype.getPhaseName=function(){return this.af};d.prototype.getPhaseID=function(a){for(var b=0;b<d.Lb.length;b++)if(d.Lb[b]===a)return b;return null};d.prototype.getPhaseCallbackTime=function(a){for(var d=this.sa,e=0;e<d.length;e++)if(d[e].Jc===a)return d[e].og;return null};d.prototype.findPhaseAtNominalTime=function(c){a.assert(0<=c);for(var b=this.sa,e=b.length-1;0<=e;e--)if(c>=
b[e].mg)return b[e].Jc;a.error("M16",c,a.utils.ff(b));return d.va};d.va="AFTER_FIRST_BYTE";d.Gb="AFTER_DOM_INTERACTIVE";d.Ob="AT_ONLOAD";d.Ib="AFTER_ONLOAD";d.Lb=[d.va,d.Gb,d.Ob,d.Ib];return d}();a.ph=d;a.lifecycle=new d;a.lifecycle=a.lifecycle})(g||(g={}));(function(a){(function(a){var f=function(a){function d(){a.apply(this,arguments)}t(d,a);d.prototype.type=function(){return 0};return d}(a.EventTracker);a.PageView=f})(a.events||(a.events={}))})(g||(g={}));(function(a){(function(d){var f=function(){function c(){}
c.prototype.setUp=function(){c.Lg();c.Kg()};c.Kg=function(){a.utils.addEventListener(window,"load",c.oa);a.utils.addEventListener(window,"load",c.ug)};c.ug=function(b){a.lifecycle.rg(b&&b.timeStamp);a.utils.Ta(function(){var e=(new Date).getTime();a.lifecycle.qg(e);a.command("mark","onload",e);d.yb.perf&&(d.perfMonitor.Xe(),d.perfMonitor.Ye());a.command("reportOnload",new a.events.PageView);a.utils.loadScriptAsync(a.conf.adrumExtUrl)});a.log("M17")};c.Lg=function(){if(document.addEventListener)document.addEventListener("DOMContentLoaded",
c.ca,!1);else{document.attachEvent("onreadystatechange",c.ca);var d=null;try{d=null===window.frameElement?document.documentElement:null}catch(e){}null!=d&&d.doScroll&&function l(){if(!c.isReady){try{d.doScroll("left")}catch(a){setTimeout(l,10);return}c.oa()}}()}a.log("M18")};c.oa=function(d){c.Dc||(a.lifecycle.pg(d&&d.timeStamp),a.command("mark","onready",(new Date).getTime()),c.Dc=!0)};c.ca=function(a){document.addEventListener?(document.removeEventListener("DOMContentLoaded",c.ca,!1),c.oa(a)):"complete"===
document.readyState&&(document.detachEvent("onreadystatechange",c.ca),c.oa(a))};c.isReady=!1;c.Dc=!1;return c}();d.Ed=f;d.df=new d.Ed})(a.monitor||(a.monitor={}))})(g||(g={}));(function(a){(function(d){var f=function(){function d(){this.navTiming=this.resTiming=null}d.prototype.setUp=function(){d.perf=window.performance||window.mozPerformance||window.msPerformance||window.webkitPerformance};d.prototype.Xe=function(){var b=d.perf;if(b=b&&b.timing)if(b.navigationStart&&b.navigationStart<=b.loadEventEnd){var e=
{},h;for(h in b){var l=b[h];"number"===typeof l&&(e[h]=l)}this.navTiming=e}else a.log("M20");else a.log("M19")};d.prototype.Ye=function(){this.resTiming=this.hc()};d.prototype.hc=function(){var b=d.perf,e=[];b&&b.getEntriesByType&&(b=b.getEntriesByType("resource"))&&b.length&&0<b.length&&b.unshift&&(e=b);0==e.length&&a.log("M21");return e};d.perf=null;return d}();d.yb=f;d.perfMonitor=new d.yb})(a.monitor||(a.monitor={}))})(g||(g={}));(function(a){a=a.events||(a.events={});a=a.b||(a.b={});a.navigationStart=
"navigationStart";a.domainLookupStart="domainLookupStart";a.domainLookupEnd="domainLookupEnd";a.connectStart="connectStart";a.secureConnectionStart="secureConnectionStart";a.connectEnd="connectEnd";a.requestStart="requestStart";a.responseStart="responseStart";a.responseEnd="responseEnd";a.domContentLoadedEventStart="domContentLoadedEventStart";a.loadEventEnd="loadEventEnd";a.Wc="sendTime";a.ac="firstByteTime";a.Sc="respAvailTime";a.Tc="respProcTime";a.cb="viewChangeStart";a.kd="viewChangeEnd";a.eb=
"viewDOMLoaded";a.qd="xhrRequestsCompleted";a.Wh="viewFragmentsLoaded";a.Xh="viewResourcesLoaded";a.fb="virtualPageStart";a.eh="virtualPageEnd"})(g||(g={}));(function(a){a=a.events||(a.events={});a.B={};a.B[0]={lf:{start:a.b.navigationStart,end:a.b.loadEventEnd,name:"PLT"},qf:{start:a.b.navigationStart,end:a.b.responseStart,name:"FBT"},Sh:{start:a.b.navigationStart,end:a.b.requestStart,name:"SCT"},Th:{start:a.b.secureConnectionStart,end:a.b.connectEnd,name:"SHT"},zh:{start:a.b.domainLookupStart,end:a.b.domainLookupEnd,
name:"DLT"},Vh:{start:a.b.connectStart,end:a.b.connectEnd,name:"TCP"},Qh:{start:a.b.requestStart,end:a.b.responseStart,name:"RAT"},Bh:{start:a.b.responseStart,end:a.b.loadEventEnd,name:"FET"},Dh:{start:a.b.responseStart,end:a.b.domContentLoadedEventStart,name:"DRT"},th:{start:a.b.responseStart,end:a.b.responseEnd,name:"DDT"},xh:{start:a.b.responseEnd,end:a.b.domContentLoadedEventStart,name:"DPT"},Ph:{start:a.b.domContentLoadedEventStart,end:a.b.loadEventEnd,name:"PRT"},yh:{start:a.b.navigationStart,
end:a.b.domContentLoadedEventStart,name:"DOM"}};a.B[2]={qf:{start:a.b.Wc,end:a.b.ac,name:"FBT"},Ch:{start:a.b.ac,end:a.b.Sc,name:"DDT"},sh:{start:a.b.Sc,end:a.b.Tc,name:"DPT"},lf:{start:a.b.Wc,end:a.b.Tc,name:"PLT"}};a.B[3]={Jh:{start:a.b.fb,end:a.b.eh,name:"PLT"},vh:{start:a.b.cb,end:a.b.kd,name:"DDT"},Gh:{start:a.b.cb,end:a.b.eb,name:"DRT"},kh:{start:a.b.kd,end:a.b.eb,name:"DPT"},lh:{start:a.b.cb,end:a.b.eb,name:"DOM"},Oh:{start:"viewChangeEnd",end:"xhrRequestsCompleted",name:null},Hh:{start:"viewChangeEnd",
end:"viewPartialsLoaded",name:null},Fh:{start:"viewPartialsLoaded",end:"viewFragmentsLoaded",name:null},Ih:{start:"viewPartialsLoaded",end:"viewResourcesLoaded",name:null}};a.B[102]=a.B[3]})(g||(g={}));(function(a){(function(a){var f=function(a){function d(e){a.call(this,e)}t(d,a);d.prototype.type=function(){return 2};return d}(a.EventTracker);a.Ajax=f;a.W(a.l[2],f.prototype);a.Nb(a.B[2],f.prototype)})(a.events||(a.events={}))})(g||(g={}));(function(a){(function(a){var f=function(a){function d(e){a.call(this,
e)}t(d,a);d.prototype.type=function(){return 2};return d}(a.Ajax);a.AdrumAjax=f;a.W(a.l[101],f.prototype)})(a.events||(a.events={}))})(g||(g={}));(function(a){(function(d){var f=function(d){function b(){d.call(this);this.conf=null;this.Wa=!1;!0===window["adrum-xhr-disable"]?a.log("M22"):window.XMLHttpRequest?(this.conf={exclude:[{urls:[{pattern:a.conf.beaconUrlHttp+a.conf.corsEndpointPath},{pattern:a.conf.beaconUrlHttps+a.conf.corsEndpointPath}]}],include:[]},b.Mc(this.conf,a.conf.userConf&&a.conf.userConf.xhr),
(this.d=window.XMLHttpRequest.prototype)?"open"in this.d&&"send"in this.d?(this.Wa=a.aop.support(this.d.open)&&a.aop.support(this.d.send))||a.log("M26"):a.log("M25"):a.log("M24")):a.log("M23")}t(b,d);b.Mc=function(e,d){d&&(d.include=a.utils.od(d.include),d.exclude=a.utils.od(d.exclude),a.utils.mergeJSON(e,d));var l=e.exclude;if(l)for(var p=0;p<l.length;p++){var c=l[p].urls;c&&0<c.length&&(l[p].urls=b.Ub(c))}if(l=e.include)for(p=0;p<l.length;p++)(c=l[p].urls)&&0<c.length&&(l[p].urls=b.Ub(c))};b.Ub=
function(e){for(var d=[],b=0;b<e.length;b++){var p=e[b].pattern;if("string"===typeof p)try{d.push(new RegExp(p))}catch(c){a.exception(c,"Parse regex pattern failed.")}else a.error("xhr filter pattern should be a string")}return d};b.$c=function(a,d,l){var p=l&&l.include;l=l&&l.exclude;return p&&0<p.length&&!b.xc(d,a,p)||l&&0<l.length&&b.xc(d,a,l)};b.prototype.setUp=function(){if(this.Wa){a.log("M27");a.xhrConstructor=window.XMLHttpRequest;a.xhrOpen=this.xhrOpen=this.d.open;a.xhrSend=this.xhrSend=
this.d.send;var e=this;this.d.open=a.aop.around(this.d.open,function(){var d=1<=arguments.length?String(arguments[0]):"",l=2<=arguments.length?String(arguments[1]):"";b.$c(l,d,e.conf)||(this._adrumAjaxT=new a.events.AdrumAjax(a.utils.mergeJSON({method:d,url:l,xhr:this},e.status)))},null,"XHR.open");this.d.send=a.aop.around(this.d.send,function(){var d=this,l=d._adrumAjaxT;if(l){var p=a.utils.now(),c=l.getSendTime();a.assert(null===c,"M28");l.timestamp(p);l.markSendTime(c||p);l.parentPhase(a.lifecycle.getPhaseName());
b.Zf(l.url())?d.setRequestHeader("ADRUM","isAjax:true"):a.log("M29",document.location.href,l.url());var f=0,g=function(){if(4==d.readyState)a.log("M30"),e.ta(d);else{var l=null;try{l=d.onreadystatechange}catch(p){a.log("M31",p);e.ta(d);return}f++;l?a.aop.support(l)?(d.onreadystatechange=e.Vb(l,d,"XHR.onReadyStateChange"),a.log("M32",f)):(a.log("M33"),e.ta(d)):f<b.Fe?a.utils.Ta(g):(a.log("M34"),e.ta(d))}};g()}},null,"XHR.send");"addEventListener"in this.d&&"removeEventListener"in this.d&&a.aop.support(this.d.addEventListener)&&
a.aop.support(this.d.removeEventListener)?(this.d.addEventListener=a.aop.around(this.d.addEventListener,this.$e(),null,"XHR.addEventListener"),this.d.removeEventListener=a.aop.around(this.d.removeEventListener,function(d,e){if(this._adrumAjaxT){var b=Array.prototype.slice.call(arguments);e.__adrumInterceptor?(b[1]=e.__adrumInterceptor,a.log("M35")):a.log("M36");return b}},null,"XHR.removeEventListener")):a.log("M37");a.log("M38")}};b.jg=function(a,d){for(var b=!1,p=0;p<d.length;p++){var c=d[p];if(c&&
c.test(a)){b=!0;break}}return b};b.xc=function(a,d,l){var p=!1;if(d&&l)for(var c=0;c<l.length;c++){var f=l[c];if(!(f.method&&a!==f.method||f.urls&&!b.jg(d,f.urls))){p=!0;break}}return p};b.Zf=function(a){var d=document.createElement("a");d.href=a;a=document.location;return":"===d.protocol&&""===d.hostname&&""===d.port||d.protocol===a.protocol&&d.hostname===a.hostname&&d.port===a.port};b.nc=function(d){var h=d._adrumAjaxT;if(h){var b=(new Date).getTime();2==d.readyState?h.markFirstByteTime(h.getFirstByteTime()||
b):4==d.readyState&&(a.assert(null===h.getRespAvailTime(),"M39"),h.markRespAvailTime(h.getRespAvailTime()||b),h.markFirstByteTime(h.getFirstByteTime()||b))}};b.prototype.Vb=function(d,h,l){return b.ih(d,function(){b.nc(this)},function(){var d=h._adrumAjaxT;if(d&&4==h.readyState){var e=(new Date).getTime();a.assert(null===d.getRespProcTime(),"M40");d.markRespProcTime(d.getRespProcTime()||e);b.a(h,d)}},l)};b.a=function(d,b){var l=d.status;if(400<=l){var c=d.responseText;b.error({status:l,msg:a.utils.isString(c)?
c:""})}a.command("reportXhr",b)};b.prototype.ta=function(d){if(d._adrumAjaxT){var h=(new Date).getTime()+3E4,l=function(){b.nc(d);var c=d._adrumAjaxT;if(c){var f=(new Date).getTime();4==d.readyState?(a.assert(null===c.getRespProcTime(),"M41"),c.markRespProcTime(c.markRespProcTime()||f),a.log("M42"),b.a(d,c),delete d._adrumAjaxT):f<h?setTimeout(l,b.lb):(delete d._adrumAjaxT,a.log("M43"))}};l()}};b.ih=function(d,b,l,c){var f=d;d&&"object"===typeof d&&"toString"in d&&"[xpconnect wrapped nsIDOMEventListener]"===
d.toString()&&"handleEvent"in d&&(f=function(){d.handleEvent.apply(this,Array.prototype.slice.call(arguments))});return a.aop.around(f,b,l,c)};b.prototype.$e=function(){for(var d=0;d<arguments.length;d++);var b=this;return function(d,e){if(("load"===d||"error"===d)&&e&&this._adrumAjaxT){var c;c=e;if(c.__adrumInterceptor)c=c.__adrumInterceptor;else if(a.aop.support(c)){var f=b.Vb(c,this,"XHR.invokeEventListener");c=c.__adrumInterceptor=f}else c=null;if(c)return f=Array.prototype.slice.call(arguments),
f[1]=c,a.log("M44"),f;a.log("M45",d,e)}}};b.Fe=5;b.lb=50;return b}(d.mb);d.fa=f;d.hb=new d.fa})(a.monitor||(a.monitor={}))})(g||(g={}));(function(a){(function(d){function f(a,d){var b=[],c=/^\s*(ADRUM_BT\w*)=(.*)\s*$/i.exec(a);if(c){var f=c[1],c=c[2].replace(/^"|"$/g,""),c=decodeURIComponent(c).split("|"),g=c[0].split(":");if("R"===g[0]&&Number(g[1])===d)for(e(f),f=1;f<c.length;f++)b.push(c[f])}return b}function c(a,d){var b=/^\s*(ADRUM_(\d+)_(\d+)_(\d+))=(.*)\s*$/i.exec(a);if(b){var c=b[1],f=b[4],
g=b[5];if(Number(b[3])===d)return e(c),{index:Number(f),value:g}}return null}function b(d){var b=/^\s*ADRUM=s=([\d]+)&r=(.*)\s*/.exec(d);if(b){a.log("M48",d);if(3===b.length)return e("ADRUM"),{startTime:Number(b[1]),startPage:b[2]};a.error("M49",d);return null}}function e(d){a.log("M47",d);var e=new Date;e.setTime(e.getTime()-1E3);document.cookie=d+"=;Expires="+e.toUTCString()}d.startTimeCookie=null;d.cookieMetadataChunks=null;d.Xb=function(e,l){a.log("M46");for(var p=l?l.length:0,g=[],m=e.split(";"),
q=0;q<m.length;q++){var n=m[q],t=c(n,p);t?g.push(t):(n=b(n),null!=n&&(d.startTimeCookie=n))}Array.prototype.sort.call(g,function(a,d){return a.index-d.index});n=[];for(q=0;q<g.length;q++)n.push(g[q].value);for(q=0;q<m.length;q++)(g=f(m[q],p))&&0<g.length&&(n=n.concat(g));d.cookieMetadataChunks=n};a.correlation.eck=d.Xb})(a.correlation||(a.correlation={}))})(g||(g={}));(function(a){a.report=function(d){a.utils.Ta(function(){a.command("reportEvent",d)})}})(g||(g={}));(function(a){"APP_KEY_NOT_SET"===
a.conf.appKey&&"undefined"!==typeof console&&"undefined"!==typeof console.log&&console.log("AppDynamics EUM cloud application key missing. Please specify window['adrum-app-key']");a.correlation.Xb(document.cookie,document.referrer);a.command("mark","firstbyte",window["adrum-start-time"]);a.monitor.Zc(a.monitor.Zb,a.monitor.df,a.monitor.perfMonitor,a.monitor.hb)})(g||(g={}));(function(a){a=a.ng||(a.ng={});a=a.c||(a.c={});a.Bc="locationChangeStart";a.gg="locationChangeSuccess";a.Uc="routeChangeStart";
a.Vc="routeChangeSuccess";a.bd="stateChangeStart";a.cd="stateChangeSuccess";a.ld="viewContentLoaded";a.Jf="includeContentRequested";a.If="includeContentLoaded";a.Wb="digest";a.Lh="outstandingRequestsComplete";a.Pb="beforeNgXhrRequested";a.Hb="afterNgXhrRequested";a.Kh="ngXhrLoaded";a.Sb="$$completeOutstandingRequest"})(g||(g={}));(function(a){(function(d){function f(a,b,c,f,g,m){if(b)try{return b.apply(a,[c,f,g].concat(m))}catch(q){return a.error(c,f,g,m,d.Error.Md,"an exception occurred in a caller-provided callback function",
q)}}function c(a,b){return function(){var c=this.current,p=b[c]||b[d.ea]||c,g=Array.prototype.slice.call(arguments);if(this.Ve(a))return this.error(a,c,p,g,d.Error.Nd,"event "+a+" inappropriate in current state "+this.current);if(!1===f(this,this["onbefore"+a],a,c,p,g))return d.da.ib;p===d.ea&&(p=c);if(c===p)return f(this,this["onafter"+a]||this["on"+a],a,c,p,g),d.da.qe;var m=this;this.transition=function(){m.transition=null;m.current=p;f(m,m["onenter"+p]||m["on"+p],a,c,p,g);f(m,m["onafter"+a]||m["on"+
a],a,c,p,g);return d.da.ye};if(!1===f(this,this["onleave"+c],a,c,p,g))return this.transition=null,d.da.ib;if(this.transition)return this.transition()}}var b=a.utils.hasOwnPropertyDefined;d.VERSION="2.3.5";d.da={ye:1,qe:2,ib:3,nh:4};d.Error={Nd:100,oh:200,Md:300};d.ea="*";d.create=function(a,h){function l(a){var b=a.from instanceof Array?a.from:a.from?[a.from]:[d.ea];n[a.name]=n[a.name]||{};for(var e=0;e<b.length;e++)t[b[e]]=t[b[e]]||[],t[b[e]].push(a.name),n[a.name][b[e]]=a.to||b[e]}var f="string"==
typeof a.initial?{state:a.initial}:a.initial,g=h||a.target||{},m=a.events||[],q=a.callbacks||{},n={},t={};f&&(f.event=f.event||"startup",l({name:f.event,from:"none",to:f.state}));for(var s=0;s<m.length;s++)l(m[s]);for(var v in n)b(n,v)&&(g[v]=c(v,n[v]));for(v in q)b(q,v)&&(g[v]=q[v]);g.current="none";g.Eh=function(a){return a instanceof Array?0<=a.indexOf(this.current):this.current===a};g.Ue=function(a){return!this.transition&&(b(n[a],this.current)||b(n[a],d.ea))};g.Ve=function(a){return!this.Ue(a)};
g.sa=function(){return t[this.current]};g.error=a.error||function(a,d,b,e,h,c,l){throw l||c;};if(f&&!f.defer)g[f.event]();return g}})(a.Bb||(a.Bb={}))})(g||(g={}));(function(a){(function(d){var f=function(c){function b(d){c.call(this,d);this.perf=new a.PerformanceTracker;this.start()}t(b,c);b.prototype.type=function(){return 3};b.prototype.yf=function(){return d.EventTracker.Mb(this.guid(),this.url(),this.type())};b.prototype.ad=function(d){var b=this.yf();d.set("parent",b);a.log("M50",b.guid(),b.url())};
b.prototype.startCorrelatingXhrs=function(){a.log("M51");this.ad(a.monitor.hb)};b.prototype.stopCorrelatingXhrs=function(){a.monitor.hb.set("parent",null);a.log("M52")};b.prototype.Og=function(){a.log("M53");this.ad(a.monitor.Zb)};b.prototype.start=function(){this.markVirtualPageStart();this.startCorrelatingXhrs()};b.prototype.end=function(){this.markVirtualPageEnd();this.stopCorrelatingXhrs()};return b}(d.EventTracker);d.VPageView=f;d.W(d.l[3],f.prototype);d.Nb(d.B[3],f.prototype)})(a.events||(a.events=
{}))})(g||(g={}));(function(a){var d=a.ng||(a.ng={}),d=d.conf||(d.conf={});d.disabled=a.conf.userConf&&a.conf.userConf.spa&&a.conf.userConf.spa.angular&&a.conf.userConf.spa.angular.disable;d.distinguishVPwithItsTemplateUrl=a.conf.userConf&&a.conf.userConf.spa&&a.conf.userConf.spa.angular&&!0===a.conf.userConf.spa.angular.distinguishVPwithItsTemplateUrl?!0:!1;d.xhr={};d.metrics={includeResTimingInEndUserResponseTiming:!0};a.conf.userConf&&a.conf.userConf.spa&&a.conf.userConf.spa.angular&&a.conf.userConf.spa.angular.vp&&
(a.conf.userConf.spa.angular.vp.xhr&&a.monitor.fa.Mc(d.xhr,a.conf.userConf.spa.angular.vp.xhr),a.conf.userConf.spa.angular.vp.metrics&&a.utils.mergeJSON(d.metrics,a.conf.userConf.spa.angular.vp.metrics))})(g||(g={}));(function(a){(function(d){var f=function(c){function b(a){c.call(this,a);this.vc=!0;this.Y={};this.U=0;this.stopCorrelatingXhrs()}t(b,c);b.prototype.type=function(){return 3};b.prototype.fb=function(){this.markViewChangeStart();this.markVirtualPageStart(this.getViewChangeStart());this.timestamp(this.getViewChangeStart())};
b.prototype.Kf=function(){this.digestCount(this.digestCount()+1)};b.prototype.Lf=function(){this.U++;a.log("increasing xhr count "+this.U+" pending xhr requests")};b.prototype.bf=function(){this.U--;a.log("decreasing xhr count "+this.U+" pending xhr requests")};b.prototype.Ff=function(){var d=this.perf.getEntryByName(a.events.b.qd);a.log("xhrCount "+this.U+" xhrReuqestCompleted "+d);return 0<this.U};b.prototype.Re=function(){var a={ra:0},d=document.querySelectorAll("ng-view, [ng-view], .ng-view, [ui-view]");
if(d&&0<d.length)for(var c in b.Rc)for(var f=0;f<d.length;f++){var g=angular.element(d[f]).find(c);if(0<g.length)for(var m=0;m<g.length;m++){var q=g[m][b.Rc[c].Ya];(q=q?decodeURIComponent(q):null)&&!a[q]&&(a[q]=c,a.ra++)}}this.Y=a};b.prototype.Qe=function(a){return!!this.Y[decodeURIComponent(a.name)]};b.prototype.Se=function(){var d=[],b=this;0<this.Y.ra&&(d=a.monitor.perfMonitor.hc().filter(function(a){return b.Qe(a)}));this.resTiming(d)};b.nf=function(b){for(var h=[],c=0;c<b.length;c++){var f=b[c];
2!==b[c].eventType&&101!==b[c].eventType||a.monitor.fa.$c(f.eventUrl,f.method,d.conf.xhr)||h.push(b[c])}return h};b.zf=function(a){var d,b,c=-1;d=0;for(b=a.length;d<b;d++)c=Math.max(c,a[d].timestamp+a[d].metrics.PLT);return c};b.prototype.Le=function(){if(d.conf.xhr){var e=b.nf(a.channel.getEventsWithParentGUID(this.guid())),e=b.zf(e);if(0<e){var h=this.perf.getEntryByName(a.events.b.qd);this.markXhrRequestsCompleted(Math.min(h&&h.startTime||Number.MAX_VALUE,e))}}};b.prototype.adjustTimings=function(){this.Le();
var b=this.getViewDOMLoaded(),h=this.getXhrRequestsCompleted(),b=Math.max(b,h);d.conf.metrics.includeResTimingInEndUserResponseTiming&&(this.Ke(),h=this.getViewResourcesLoaded(),h=Math.max(b,h),a.log("adjust this.end from %s to %s",b,h),b=h);this.markVirtualPageEnd(b)};b.prototype.Ke=function(){if(0<this.Y.ra){this.Se();var d=this.resTiming();if(d&&d.length>=this.Y.ra){for(var b=[],c=0;c<d.length;c++)b.push(d[c].responseEnd);d=Math.max.apply(Math,b);this.markViewResourcesLoaded(a.PerformanceTracker.ya(d))}}};
b.prototype.identifier=function(d){var c=this.nd;a.utils.isDefined(d)&&(this.nd=b.mf(d),this.url(this.nd.url));return c};b.mf=function(d){var b={};d&&d.g?(b.g={Ma:""},a.utils.mergeJSON(b.g,{Ma:d.g.originalPath,Z:d.g.template,$:d.g.templateUrl})):d&&d.state&&(b.state={url:""},a.utils.mergeJSON(b.state,{url:d.state.url,name:d.state.name,Z:d.state.template,$:d.state.templateUrl}));return b};b.Rc={img:{Ya:"src"},script:{Ya:"src"},link:{Ya:"href"}};return b}(a.events.VPageView);d.NgVPageView=f;a.events.W(a.events.l[102],
f.prototype)})(a.ng||(a.ng={}))})(g||(g={}));(function(a){(function(d){var f=function(){function c(){this.e=new d.NgVPageView}c.prototype.Eg=function(){var b=this;d.conf.metrics.includeResTimingInEndUserResponseTiming?(a.log("M54"),setTimeout(function(){b.Pa()},c.Ae)):setTimeout(function(){b.Pa()},c.Be)};c.prototype.Pa=function(){a.log("M55");var d=this.e;a.command("call",function(){d.adjustTimings();a.reporter.reportEvent(d)})};c.prototype.Jg=function(a){this.e=a};c.Ae=5E3;c.Be=2*a.monitor.fa.lb;
return c}();d.VirtualPageStateMachine=f;a.Bb.create({events:[{name:"start",from:"none",to:"ChangeView"},{name:"viewLoaded",from:"ChangeView",to:"XhrPending"},{name:"xhrCompleted",from:"XhrPending",to:"End"},{name:"abort",from:"*",to:"none"},{name:"init",from:"*",to:"none"},{name:"locChange",from:"*",to:"*"},{name:"beforeXhrReq",from:"*",to:"*"},{name:"afterXhrReq",from:"*",to:"*"}],error:function(d){a.log("M56"+d)},callbacks:{onChangeView:function(){this.e.fb();this.e.Og()},onviewLoaded:function(){this.e.markViewDOMLoaded()},
onXhrPending:function(){this.e.vc&&this.xhrCompleted()},onleaveXhrPending:function(a,d,e){if("abort"===a)return this.Pa(),!0;if("xhrCompleted"===a&&"End"===e){if(this.e.Ff())return!1;this.e.markXhrRequestsCompleted();return!0}},onEnd:function(){this.e.Re();this.Eg()},oninit:function(a,d,e,h){this.Jg(h)},onlocChange:function(a,d,e,h){this.e.identifier.url=h},onbeforeXhrReq:function(d,b,e,h){var f=this.e;f.vc=!1;a.log("M57",h&&h[1]||"",f.guid());f.Lf();f.startCorrelatingXhrs();h[3]&&(h[3]=a.aop.before(h[3],
function(d,b,e){a.log("M58");f.bf();e&&(d=a.utils.xg(e)["content-type"])&&0<=d.indexOf("text/html")&&f.markViewFragmentsLoaded()}));return h},onafterXhrReq:function(){this.e.stopCorrelatingXhrs()}}},f.prototype)})(a.ng||(a.ng={}))})(g||(g={}));(function(a){(function(d){var f=function(){function c(){this.k=new d.VirtualPageStateMachine;this.distinguishVPwithItsTemplateUrl=a.ng.conf.distinguishVPwithItsTemplateUrl}c.prototype.h=function(b,e){a.log("M59",b);switch(b){case d.c.Uc:case d.c.bd:this.k.start();
var h=new d.NgVPageView({url:e.next.url,identifier:e.next});this.distinguishVPwithItsTemplateUrl&&c.Tf(this.k.e,h)?this.k.e.Yc({url:e.next.url,identifier:e.next}):this.Tg(h);break;case d.c.Vc:case d.c.cd:this.k.e.markViewChangeEnd();break;case d.c.ld:this.k.viewLoaded();break;case d.c.Pb:this.k.beforeXhrReq(e);break;case d.c.Hb:this.k.afterXhrReq();break;case d.c.Sb:this.k.xhrCompleted();break;case d.c.Bc:this.k.locChange(e.next.url);break;case d.c.Wb:this.k.e.Kf()}};c.prototype.Tg=function(a){this.k.abort();
this.k.init(a);this.k.start()};c.Tf=function(d,e){var c=d.identifier(),f=e.identifier(),g=!1;return g=!a.utils.isDefined(c)&&!a.utils.isDefined(f)||c===f?!0:a.utils.isDefined(c)&&a.utils.isDefined(f)?c.state||f.state?a.utils.isDefined(c.state)&&a.utils.isDefined(f.state)?c.state.name===f.state.name&&c.state.Z===f.state.Z&&c.state.$===f.state.$&&c.state.url===f.state.url:!1:c.g&&f.g?c.g.Ma===f.g.Ma&&c.g.Z===f.g.Z&&c.g.$===f.g.$:c.url===f.url:!1};return c}();d.De=f})(a.ng||(a.ng={}))})(g||(g={}));(function(a){(function(d){var f=
function(){function c(){this.j=new d.De}c.prototype.setUp=function(){var d=this;a.utils.addEventListener(document,"DOMContentLoaded",function(){a.log("M60");d.init()})};c.prototype.init=function(){if("undefined"!=typeof angular){a.log("M61");var d=this,e=angular.module("ng");e.config(["$provide",function(a){d.Qf(a);d.Pf(a)}]);e.run(["$browser",function(a){d.Of(a)}]);a.log("M62")}};c.prototype.Pf=function(b){var e=a.aop,c=this;b.decorator("$httpBackend",["$delegate",function(a){return a=e.around(a,
function(){var a=Array.prototype.slice.call(arguments);c.j.h(d.c.Pb,a);return a},function(){c.j.h(d.c.Hb)})}])};c.prototype.Qf=function(b){var e=a.aop,c=this;b.decorator("$rootScope",["$delegate",function(a){a.$digest=e.after(a.$digest,function(){c.j.h(d.c.Wb)});a.$on("$locationChangeStart",function(a,b){var e={url:b},f=a&&a.X&&a.X.$state&&a.X.$state.current;f&&(e.state=f);c.j.h(d.c.Bc,{next:e})});a.$on("$locationChangeSuccess",function(){c.j.h(d.c.gg)});a.$on("$routeChangeStart",function(a,b){var e=
{url:location.href},f=b&&b.$$route;f&&(e.g=f);c.j.h(d.c.Uc,{next:e})});a.$on("$routeChangeSuccess",function(){c.j.h(d.c.Vc)});a.$on("$stateChangeStart",function(a,b){c.j.h(d.c.bd,{next:{state:b}})});a.$on("$stateChangeSuccess",function(){c.j.h(d.c.cd)});a.$on("$viewContentLoaded",function(a){var b={url:location.href};if(a=a&&a.X&&a.X.$state&&a.X.$state.current)b.state=a;c.j.h(d.c.ld,{next:b})});a.$on("$includeContentRequested",function(){c.j.h(d.c.Jf)});a.$on("$includeContentLoaded",function(){c.j.h(d.c.If)});
return a}])};c.prototype.Of=function(b){var e=this;b.$$completeOutstandingRequest=a.aop.before(b.$$completeOutstandingRequest,function(){e.j.h(d.c.Sb)})};return c}();d.jh=f;d.ngMonitor=new f})(a.ng||(a.ng={}))})(g||(g={}));(function(a){var d=a.ng||(a.ng={});d.conf.disabled||a.monitor.Zc(d.ngMonitor)})(g||(g={}))}};})();

