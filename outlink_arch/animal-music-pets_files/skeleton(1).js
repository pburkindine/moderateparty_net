




var __IntegralASDiagnosticCall = (function() {
	try {
		var alreadySent = {};
		return function(code, err, config) {
			try {
				if (!__IASScope.isDomless) {
					try {
						__IASScope.postMessage(
							{
								code,
								name: 'jsdiag',
								origin: 'ias',
							},
							'*'
						);
					} catch (_) {}
				}

				var gen = function(code, err, config) {
					var url = '//diag.adsafeprotected.com/js?';
					try {
						var errMsg = err && err.message ? encodeURIComponent(err.message.replace(/ /g, '-')).substring(0, 200) : '';
						url += 'code:fwjs-diag-' + code;
						url += '&err:' + errMsg;
						url += '&codeanderr:' + code + '_' + errMsg;
						if (config) {
							
							url += '&version:' + config.version || '';
							url += '&server:' + config.mn || '';
							url += '&region:' + config.region || '';
							url += '&mode:' + config.mode || '';
							url += '&forceAppend:' + config.forceAppend || '';
							url += '&asid:' + config.asid || '';
							url += '&anId:' + config.anId || '';
							url += '&advEntityId:' + config.advEntityId || '';
							url += '&pubEntityId:' + config.pubEntityId || '';
							url += '&mobOrTab:' + config.mobOrTab || '';
							url += '&app:' + config.app || '';
							url += '&mobAppWebview:' + config.mobAppWebview || '';
						}
						url += '&domless:' + __IASScope.isDomless;
					} catch (e) {
						url += '&diagx:' + (e && e.message ? e.message.toString().replace(/ /g, '-') : '');
					}
					return url;
				};

				var send = function(url) {
					if (__IASScope.isDomless && __IASOmidVerificationClient && __IASOmidVerificationClient.sendUrl) {
						__IASOmidVerificationClient.sendUrl(url);
					} else {
						var img = new Image();
						img.src = url;
					}
				};
				if (!alreadySent[code] && Math.random() < 0.01) {
					alreadySent[code] = true;
					send(gen(code, err, config));
				}
			} catch (e) {}
		};
	} catch (e) {
		return function() {};
	}
})();





try {

	var __IntegralASConfig = {
		jsDoSplit: true,
		debug: "false",
		jsDiag: 'true',
		version: '19.8.619',
		exchList: {'e1':'nqzryq','e2':'tbbtyrnqf.t.qbhoyrpyvpx','e3':'ehovpbacebwrpg','e4':'chozngvp','e5':'bcrak','e6':'nqoevgr.pbz','e7':'tynz.pbz','e8':'lvryqznantre.pbz','e9':'yvwvg','e10':'nqakf','p11':'ghea.pbz','p12':'zngugnt','p13':'vaivgrzrqvn','p14':'qngnkh','n15':'zrqvn6qrterrf','n16':'dhnagfreir','n17':'esvuho.arg','a18':'napubeserr','a19':'eff2frnepu','a20':'mgfgngvp.pbz','n21':'ovq.npr.nqiregvfvat','e22':'wnfba','v23':'fcbgkpqa','v24':'ogeyy','v25':'yvirenvy','v26':'nqncgi','v27':'nqnc.gi','n29':'qbzqrk.pbz','n30':'ernyih.arg','d31':'cvengronl','d32':'cebklonl','d33':'onlcebkl','d34':'cvengrcebkl','d35':'cebklcvengr','d36':'onlcvengr','n37':'tjnyyrg','p39':'j55p.arg','p40':'c0l.pa','p41':'vcvalbh.pbz','p42':'c0lwferaqre'},
		sp_cdnDomain: 'cdn.adsafeprotected.com',
		sp_cdnScripts: {xsca: "static.adsafeprotected.com/xsca.17.4.85.js", sca: "static.adsafeprotected.com/sca.17.6.4.js", main: "static.adsafeprotected.com/main.19.8.619.js"},
		protocol: 'https',
		jsref: "https:\/\/31280f7cafeaef924edec101ee59261a.safeframe.googlesyndication.com\/",
		asid: "bc5a18d9-abef-11f0-8a00-1ab0211c1b7c",
		allowViewability: "true",
		jsFeatures: "viewabilityready,rattie,exch,usedtdomain,resolution,usetpl,idMap,offscreen,everySecond:1,slid,fm2:1,largeAd,chromeNativeIO,ios,ancestor,avmm,avgrn,swapids,pIntervals:10,usesca,bustediframe,impFailSafe,yieldmo,sfdetect,pmdetect,novidnodeerr:5,viewabilityOptimization,usehaps,customMetric,sizmek,celtra,groupmCM,avidPropertiesInImpression,abcAudit,mrcAudit:1,bbs,bas,spg,exitOASRSEarly:1,encodeInvalidUrlChars,recoverOmidLostTime,forceKeepGoogleAdNode",
		minimizeCalls: "false",
		adWidth: "300",
		adHeight: "250",
		forceAppend: "true",
		forceNoIframe: false,
		sp_imp_maxLength: 10000,
		sp_imp_jsInfo_minLength: 200,
		_onInViewMRC15: __IntegralASConfig && __IntegralASConfig.onInViewMRC15,
		_onInViewMRC: __IntegralASConfig && __IntegralASConfig.onInViewMRC,
		_onMeasurable: __IntegralASConfig && __IntegralASConfig.onMeasurable,
		_onAPIResult: __IntegralASConfig && __IntegralASConfig.onAPIResult,
		_onInViewFull: __IntegralASConfig && __IntegralASConfig.onInViewFull,
		_onSuspicious: __IntegralASConfig && __IntegralASConfig.onSuspicious,
		_onInViewMRC5: __IntegralASConfig && __IntegralASConfig.onInViewMRC5,
		reqquery: "",
		mode: "rjss",
		requrl: "",
		dtBaseURL: "https:\/\/dt.adsafeprotected.com\/dt?advEntityId=854585",
		adsafeSrc: "https:\/\/pixel.adsafeprotected.com\/rfw\/st\/854585\/68926917\/skeleton.js?bundleId=livescience.com&ias_dspID=30&ias_campId=766112&ias_pubId=3&ias_chanId=3444427&ias_placementId=1052506&ias_creativeId=7580446&bidurl=https%3A%2F%2F31280f7cafeaef924edec101ee59261a.safeframe.googlesyndication.com%2Fsafeframe%2F1-0-45%2Fhtml%2Fcontainer.html&adsafe_par&ias_impId=v4~~2555958589622359401:1760770585875",
		tpiLookupURL: "",
		getTpl: "false",
		use100v: false,
		useBapiCallback: "",
		useViewabilityNotification: "",
		scriptUrl: "https:\/\/pixel.adsafeprotected.com\/rjss\/st\/854585\/68926917\/skeleton.js?bundleId=livescience.com&ias_dspID=30&ias_campId=766112&ias_pubId=3&ias_chanId=3",
		accountForSadImps: '',
		fwMonitoring: 'true',
		mn: "jsserver-primary-7f487c5899-5rlbg",
		mobOrTab: false,
		app: false,
		mobAppWebview: false,
		mobFwUrl: "https:\/\/mobile.adsafeprotected.com\/internal\/monitoring\/app\/initial\/854585\/68926917\/?ias_creativeId=7580446&bidurl=https%3A%2F%2F31280f7cafeaef924edec101ee59261a.safeframe.googlesyndication.com%2Fsafeframe%2F1-0-45%2Fhtml%2Fcontainer.html&ias_impId=v4~~2555958589622359401:1760770585875&bundleId=livescience.com&ias_pubId=3&ias_placementId=1052506&ias_chanId=3444427&ias_dspId=30&ias_campId=766112&adsafe_par=",
		anId: '',
		advEntityId: '854585',
		pubEntityId: '68926917',
		videoId: '',
		rts: {},
		customViewability: [{ "id":"grpm1", "tiv": 1, "minunit":1, "thresholds": [{"piv":100, "ub": 242499}, {"piv": 50, "lb": 242500}], "mediaTypes":["display"], "deviceGroups":["desktop"], "distributionChannels":["web","app"], "rts":"_onInViewGroupM" },{ "id":"grpm2", "tiv": "15|50%", "minunit":1, "sound": "on", "soundExcl": "groupm_native", "thresholds": [{"piv":100, "ub": 299999},{"piv":80, "lb": 300000} ], "mediaTypes":["video"], "deviceGroups":["desktop"], "distributionChannels":["web","app"] },{ "id":"grpm3", "tiv": 1, "minunit":1, "thresholdType":"grpmMobPassThru","thresholds": [{"piv":100}], "mediaTypes":["display"], "deviceGroups":["mobile"], "distributionChannels":["web","app"], "rts":"_onInViewGroupM" },{ "id":"grpm4", "tiv": "15|50%", "minunit":1, "sound": "on", "soundExcl": "groupm_native", "thresholdType":"grpmMobPassThru","thresholds": [{"piv":100} ], "mediaTypes":["video"], "deviceGroups":["mobile"], "distributionChannels":["web","app"] },{"id":"CmxKD1","tiv":300,"minunit":1,"thresholds":[{"piv":100,"lb":0}],"mediaTypes":["display"],"deviceGroups":["desktop","mobile"],"distributionChannels":["web","app"]},{"id":"CmxKD2","minunit":1,"qiv":[4],"sound":"any","thresholds":[{"piv":50,"lb":0}],"mediaTypes":["video"],"deviceGroups":["desktop","mobile"],"distributionChannels":["web","app"]},{"id":"Mobile_Display","tiv":2,"minunit":2,"thresholds":[{"piv":50,"lb":242500},{"piv":50,"ub":242499}],"mediaTypes":["display"],"deviceGroups":["mobile"],"distributionChannels":["web","app"]}],
		serverSideAppDetection: [],
		groupm_native_publisher: false,
		integration: null,
		staticServer: '\/\/static.adsafeprotected.com\/',
		passback: '',
		iasProxyPartnerDomain: '',
		region: 'or'
	};

try {


	

	__IASScope = typeof window !== "undefined" ? window : this;
	
	__IntegralASConfig.isResolved = !!__IntegralASConfig.jsFeatures;
	__IntegralASConfig.staticMode = !__IntegralASConfig.isResolved;
	__IntegralASConfig.birthdate = new Date().getTime();
	__IntegralASConfig.perfBirth = (typeof __IASScope.performance !== "undefined" && typeof __IASScope.performance.now === 'function') ? __IASScope.performance.now() : null;




;(function(omidGlobal, factory, exports) {
  // CommonJS support
  if (typeof exports === 'object' && typeof exports.nodeName !== 'string') {
    factory(omidGlobal, exports);

  // If neither AMD nor CommonJS are used, export to a versioned name in the
  // global context.
  } else {
    var exports = {};
    var versions = ['1.5.3-iab4563'];
    var additionalVersionString = '';
    if (!!additionalVersionString) {
       versions.push(additionalVersionString);
    }

    factory(omidGlobal, exports);

    function deepFreeze(object) {
      for (var key in object) {
        if (object.hasOwnProperty(key)) {
          object[key] = deepFreeze(object[key]);
        }
      }
      return Object.freeze(object);
    }

    // Inject and freeze the exported components of omid.
    for (var key in exports) {
      if (exports.hasOwnProperty(key)) {
        if (Object.getOwnPropertyDescriptor(omidGlobal, key) == null) {
          // Define the top level property in the global scope
          Object.defineProperty(omidGlobal, key, {
//			value: {},       Removed trailing comma for build
            value: {}
          });
        }
        versions.forEach(function(version) {
          if (Object.getOwnPropertyDescriptor(omidGlobal[key], version) == null) {
            var frozenObject = deepFreeze(exports[key]);
            // Define the object exports keyed-off versions
            Object.defineProperty(omidGlobal[key], version, {
              get: function () {
                return frozenObject;
              },
//            enumerable: true,       Removed trailing comma for build
              enumerable: true
            });
          }
        });
      }
    }
  }
}(typeof global === 'undefined' ? this : global, function(omidGlobal, omidExports) {
  var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.createTemplateTagFirstArg = function(a) {
  return a.raw = a;
};
$jscomp.createTemplateTagFirstArgWithRaw = function(a, b) {
  a.raw = b;
  return a;
};
$jscomp.arrayIteratorImpl = function(a) {
  var b = 0;
  return function() {
    return b < a.length ? {done:!1, value:a[b++],} : {done:!0};
  };
};
$jscomp.arrayIterator = function(a) {
  return {next:$jscomp.arrayIteratorImpl(a)};
};
$jscomp.makeIterator = function(a) {
  var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
  if (b) {
    return b.call(a);
  }
  if ("number" == typeof a.length) {
    return $jscomp.arrayIterator(a);
  }
  throw Error(String(a) + " is not an iterable or ArrayLike");
};
$jscomp.arrayFromIterator = function(a) {
  for (var b, c = []; !(b = a.next()).done;) {
    c.push(b.value);
  }
  return c;
};
$jscomp.arrayFromIterable = function(a) {
  return a instanceof Array ? a : $jscomp.arrayFromIterator($jscomp.makeIterator(a));
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.SIMPLE_FROUND_POLYFILL = !1;
$jscomp.ISOLATE_POLYFILLS = !1;
$jscomp.FORCE_POLYFILL_PROMISE = !1;
$jscomp.FORCE_POLYFILL_PROMISE_WHEN_NO_UNHANDLED_REJECTION = !1;
$jscomp.objectCreate = $jscomp.ASSUME_ES5 || "function" == typeof Object.create ? Object.create : function(a) {
  var b = function() {
  };
  b.prototype = a;
  return new b();
};
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
  if (a == Array.prototype || a == Object.prototype) {
    return a;
  }
  a[b] = c.value;
  return a;
};
$jscomp.getGlobal = function(a) {
  a = ["object" == typeof globalThis && globalThis, a, "object" == typeof window && window, "object" == typeof self && self, "object" == typeof global && global,];
  for (var b = 0; b < a.length; ++b) {
    var c = a[b];
    if (c && c.Math == Math) {
      return c;
    }
  }
  throw Error("Cannot find global object");
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.IS_SYMBOL_NATIVE = "function" === typeof Symbol && "symbol" === typeof Symbol("x");
$jscomp.TRUST_ES6_POLYFILLS = !$jscomp.ISOLATE_POLYFILLS || $jscomp.IS_SYMBOL_NATIVE;
$jscomp.polyfills = {};
$jscomp.propertyToPolyfillSymbol = {};
$jscomp.POLYFILL_PREFIX = "$jscp$";
var $jscomp$lookupPolyfilledValue = function(a, b, c) {
  if (!c || null != a) {
    c = $jscomp.propertyToPolyfillSymbol[b];
    if (null == c) {
      return a[b];
    }
    c = a[c];
    return void 0 !== c ? c : a[b];
  }
};
$jscomp.polyfill = function(a, b, c, d) {
  b && ($jscomp.ISOLATE_POLYFILLS ? $jscomp.polyfillIsolated(a, b, c, d) : $jscomp.polyfillUnisolated(a, b, c, d));
};
$jscomp.polyfillUnisolated = function(a, b, c, d) {
  c = $jscomp.global;
  a = a.split(".");
  for (d = 0; d < a.length - 1; d++) {
    var e = a[d];
    if (!(e in c)) {
      return;
    }
    c = c[e];
  }
  a = a[a.length - 1];
  d = c[a];
  b = b(d);
  b != d && null != b && $jscomp.defineProperty(c, a, {configurable:!0, writable:!0, value:b});
};
$jscomp.polyfillIsolated = function(a, b, c, d) {
  var e = a.split(".");
  a = 1 === e.length;
  d = e[0];
  d = !a && d in $jscomp.polyfills ? $jscomp.polyfills : $jscomp.global;
  for (var f = 0; f < e.length - 1; f++) {
    var g = e[f];
    if (!(g in d)) {
      return;
    }
    d = d[g];
  }
  e = e[e.length - 1];
  c = $jscomp.IS_SYMBOL_NATIVE && "es6" === c ? d[e] : null;
  b = b(c);
  null != b && (a ? $jscomp.defineProperty($jscomp.polyfills, e, {configurable:!0, writable:!0, value:b}) : b !== c && (void 0 === $jscomp.propertyToPolyfillSymbol[e] && (c = 1E9 * Math.random() >>> 0, $jscomp.propertyToPolyfillSymbol[e] = $jscomp.IS_SYMBOL_NATIVE ? $jscomp.global.Symbol(e) : $jscomp.POLYFILL_PREFIX + c + "$" + e), $jscomp.defineProperty(d, $jscomp.propertyToPolyfillSymbol[e], {configurable:!0, writable:!0, value:b})));
};
$jscomp.getConstructImplementation = function() {
  function a() {
    function c() {
    }
    new c();
    Reflect.construct(c, [], function() {
    });
    return new c() instanceof c;
  }
  if ($jscomp.TRUST_ES6_POLYFILLS && "undefined" != typeof Reflect && Reflect.construct) {
    if (a()) {
      return Reflect.construct;
    }
    var b = Reflect.construct;
    return function(c, d, e) {
      c = b(c, d);
      e && Reflect.setPrototypeOf(c, e.prototype);
      return c;
    };
  }
  return function(c, d, e) {
    void 0 === e && (e = c);
    e = $jscomp.objectCreate(e.prototype || Object.prototype);
    return Function.prototype.apply.call(c, e, d) || e;
  };
};
$jscomp.construct = {valueOf:$jscomp.getConstructImplementation}.valueOf();
$jscomp.underscoreProtoCanBeSet = function() {
  var a = {a:!0}, b = {};
  try {
    return b.__proto__ = a, b.a;
  } catch (c) {
  }
  return !1;
};
$jscomp.setPrototypeOf = $jscomp.TRUST_ES6_POLYFILLS && "function" == typeof Object.setPrototypeOf ? Object.setPrototypeOf : $jscomp.underscoreProtoCanBeSet() ? function(a, b) {
  a.__proto__ = b;
  if (a.__proto__ !== b) {
    throw new TypeError(a + " is not extensible");
  }
  return a;
} : null;
$jscomp.inherits = function(a, b) {
  a.prototype = $jscomp.objectCreate(b.prototype);
  a.prototype.constructor = a;
  if ($jscomp.setPrototypeOf) {
    var c = $jscomp.setPrototypeOf;
    c(a, b);
  } else {
    for (c in b) {
      if ("prototype" != c) {
        if (Object.defineProperties) {
          var d = Object.getOwnPropertyDescriptor(b, c);
          d && Object.defineProperty(a, c, d);
        } else {
          a[c] = b[c];
        }
      }
    }
  }
  a.superClass_ = b.prototype;
};
$jscomp.getRestArguments = function() {
  for (var a = Number(this), b = [], c = a; c < arguments.length; c++) {
    b[c - a] = arguments[c];
  }
  return b;
};
$jscomp.polyfill("Reflect", function(a) {
  return a ? a : {};
}, "es6", "es3");
$jscomp.polyfill("Reflect.construct", function(a) {
  return $jscomp.construct;
}, "es6", "es3");
$jscomp.polyfill("Reflect.setPrototypeOf", function(a) {
  if (a) {
    return a;
  }
  if ($jscomp.setPrototypeOf) {
    var b = $jscomp.setPrototypeOf;
    return function(c, d) {
      try {
        return b(c, d), !0;
      } catch (e) {
        return !1;
      }
    };
  }
  return null;
}, "es6", "es5");
$jscomp.owns = function(a, b) {
  return Object.prototype.hasOwnProperty.call(a, b);
};
$jscomp.polyfill("Object.values", function(a) {
  return a ? a : function(b) {
    var c = [], d;
    for (d in b) {
      $jscomp.owns(b, d) && c.push(b[d]);
    }
    return c;
  };
}, "es8", "es3");
var module$exports$omid$common$constants = {AdEventType:{IMPRESSION:"impression", LOADED:"loaded", GEOMETRY_CHANGE:"geometryChange", SESSION_START:"sessionStart", SESSION_ERROR:"sessionError", SESSION_FINISH:"sessionFinish", MEDIA:"media", VIDEO:"video", START:"start", FIRST_QUARTILE:"firstQuartile", MIDPOINT:"midpoint", THIRD_QUARTILE:"thirdQuartile", COMPLETE:"complete", PAUSE:"pause", RESUME:"resume", BUFFER_START:"bufferStart", BUFFER_FINISH:"bufferFinish", SKIPPED:"skipped", VOLUME_CHANGE:"volumeChange", 
PLAYER_STATE_CHANGE:"playerStateChange", AD_USER_INTERACTION:"adUserInteraction", STATE_CHANGE:"stateChange",}, MediaEventType:{LOADED:"loaded", START:"start", FIRST_QUARTILE:"firstQuartile", MIDPOINT:"midpoint", THIRD_QUARTILE:"thirdQuartile", COMPLETE:"complete", PAUSE:"pause", RESUME:"resume", BUFFER_START:"bufferStart", BUFFER_FINISH:"bufferFinish", SKIPPED:"skipped", VOLUME_CHANGE:"volumeChange", PLAYER_STATE_CHANGE:"playerStateChange", AD_USER_INTERACTION:"adUserInteraction",}, ImpressionType:{DEFINED_BY_JAVASCRIPT:"definedByJavaScript", 
UNSPECIFIED:"unspecified", LOADED:"loaded", BEGIN_TO_RENDER:"beginToRender", ONE_PIXEL:"onePixel", VIEWABLE:"viewable", AUDIBLE:"audible", OTHER:"other",}, ErrorType:{GENERIC:"generic", VIDEO:"video", MEDIA:"media",}, AdSessionType:{NATIVE:"native", HTML:"html", JAVASCRIPT:"javascript",}, EventOwner:{NATIVE:"native", JAVASCRIPT:"javascript", NONE:"none",}, SessionOwner:{JAVASCRIPT:"javascript", NATIVE:"native",}, AccessMode:{FULL:"full", DOMAIN:"domain", LIMITED:"limited",}, AppState:{BACKGROUNDED:"backgrounded", 
FOREGROUNDED:"foregrounded",}, DeviceLockState:{LOCKED:"locked", UNLOCKED:"unlocked",}, Environment:{APP:"app", WEB:"web",}, DeviceCategory:{CTV:"ctv", DESKTOP:"desktop", MOBILE:"mobile", OTHER:"other",}, InteractionType:{CLICK:"click", INVITATION_ACCEPT:"invitationAccept",}, CreativeType:{DEFINED_BY_JAVASCRIPT:"definedByJavaScript", HTML_DISPLAY:"htmlDisplay", NATIVE_DISPLAY:"nativeDisplay", VIDEO:"video", AUDIO:"audio",}, MediaType:{DISPLAY:"display", VIDEO:"video",}, Reason:{NOT_FOUND:"notFound", 
HIDDEN:"hidden", BACKGROUNDED:"backgrounded", PICTURE_IN_PICTURE:"pictureInPicture", DEVICE_LOCKED:"deviceLocked", VIEWPORT:"viewport", OBSTRUCTED:"obstructed", CLIPPED:"clipped", UNMEASURABLE:"unmeasurable", NO_WINDOW_FOCUS:"noWindowFocus", NO_OUTPUT_DEVICE:"noOutputDevice",}, SupportedFeatures:{CONTAINER:"clid", VIDEO:"vlid",}, VideoPosition:{PREROLL:"preroll", MIDROLL:"midroll", POSTROLL:"postroll", STANDALONE:"standalone",}, VideoPlayerState:{MINIMIZED:"minimized", COLLAPSED:"collapsed", NORMAL:"normal", 
EXPANDED:"expanded", FULLSCREEN:"fullscreen",}, NativeViewKeys:{X:"x", LEFT:"left", Y:"y", TOP:"top", WIDTH:"width", HEIGHT:"height", AD_SESSION_ID:"adSessionId", IS_FRIENDLY_OBSTRUCTION_FOR:"isFriendlyObstructionFor", CLIPS_TO_BOUNDS:"clipsToBounds", CHILD_VIEWS:"childViews", END_X:"endX", END_Y:"endY", OBSTRUCTIONS:"obstructions", OBSTRUCTION_CLASS:"obstructionClass", OBSTRUCTION_PURPOSE:"obstructionPurpose", OBSTRUCTION_REASON:"obstructionReason", PIXELS:"pixels", HAS_WINDOW_FOCUS:"hasWindowFocus",
}, MeasurementStateChangeSource:{CONTAINER:"container", CREATIVE:"creative",}, ElementMarkup:{OMID_ELEMENT_CLASS_NAME:"omid-element",}, CommunicationType:{NONE:"NONE", DIRECT:"DIRECT", POST_MESSAGE:"POST_MESSAGE",}, OmidImplementer:{OMSDK:"omsdk",}, MessageMethod:{IDENTIFY_SERVICE_WINDOW:"identifyServiceWindow",}};
var module$contents$omid$common$InternalMessage_GUID_KEY = "omid_message_guid", module$contents$omid$common$InternalMessage_METHOD_KEY = "omid_message_method", module$contents$omid$common$InternalMessage_VERSION_KEY = "omid_message_version", module$contents$omid$common$InternalMessage_ARGS_KEY = "omid_message_args", module$exports$omid$common$InternalMessage = function(a, b, c, d) {
  this.guid = a;
  this.method = b;
  this.version = c;
  this.args = d;
};
module$exports$omid$common$InternalMessage.isValidSerializedMessage = function(a) {
  return !!a && void 0 !== a[module$contents$omid$common$InternalMessage_GUID_KEY] && void 0 !== a[module$contents$omid$common$InternalMessage_METHOD_KEY] && void 0 !== a[module$contents$omid$common$InternalMessage_VERSION_KEY] && "string" === typeof a[module$contents$omid$common$InternalMessage_GUID_KEY] && "string" === typeof a[module$contents$omid$common$InternalMessage_METHOD_KEY] && "string" === typeof a[module$contents$omid$common$InternalMessage_VERSION_KEY] && (void 0 === a[module$contents$omid$common$InternalMessage_ARGS_KEY] || 
  void 0 !== a[module$contents$omid$common$InternalMessage_ARGS_KEY]);
};
module$exports$omid$common$InternalMessage.deserialize = function(a) {
  return new module$exports$omid$common$InternalMessage(a[module$contents$omid$common$InternalMessage_GUID_KEY], a[module$contents$omid$common$InternalMessage_METHOD_KEY], a[module$contents$omid$common$InternalMessage_VERSION_KEY], a[module$contents$omid$common$InternalMessage_ARGS_KEY]);
};
module$exports$omid$common$InternalMessage.prototype.serialize = function() {
  var a = {};
  a = (a[module$contents$omid$common$InternalMessage_GUID_KEY] = this.guid, a[module$contents$omid$common$InternalMessage_METHOD_KEY] = this.method, a[module$contents$omid$common$InternalMessage_VERSION_KEY] = this.version, a);
  void 0 !== this.args && (a[module$contents$omid$common$InternalMessage_ARGS_KEY] = this.args);
  return a;
};
var module$exports$omid$common$Communication = function(a) {
  this.to = a;
  this.communicationType_ = module$exports$omid$common$constants.CommunicationType.NONE;
};
module$exports$omid$common$Communication.prototype.sendMessage = function(a, b) {
};
module$exports$omid$common$Communication.prototype.handleMessage = function(a, b) {
  if (this.onMessage) {
    this.onMessage(a, b);
  }
};
module$exports$omid$common$Communication.prototype.serialize = function(a) {
  return JSON.stringify(a);
};
module$exports$omid$common$Communication.prototype.deserialize = function(a) {
  return JSON.parse(a);
};
module$exports$omid$common$Communication.prototype.isDirectCommunication = function() {
  return this.communicationType_ === module$exports$omid$common$constants.CommunicationType.DIRECT;
};
module$exports$omid$common$Communication.prototype.isCrossOrigin = function() {
};
var module$exports$omid$common$logger = {};
function module$contents$omid$common$logger_error() {
  var a = $jscomp.getRestArguments.apply(0, arguments);
  module$contents$omid$common$logger_executeLog(function() {
    throw new (Function.prototype.bind.apply(Error, [null, "Could not complete the test successfully - "].concat($jscomp.arrayFromIterable(a))))();
  }, function() {
    return console.error.apply(console, $jscomp.arrayFromIterable(a));
  });
}
function module$contents$omid$common$logger_debug() {
  var a = $jscomp.getRestArguments.apply(0, arguments);
  module$contents$omid$common$logger_executeLog(function() {
  }, function() {
    return console.error.apply(console, $jscomp.arrayFromIterable(a));
  });
}
function module$contents$omid$common$logger_executeLog(a, b) {
  "undefined" !== typeof jasmine && jasmine ? a() : "undefined" !== typeof console && console && console.error && b();
}
module$exports$omid$common$logger.error = module$contents$omid$common$logger_error;
module$exports$omid$common$logger.debug = module$contents$omid$common$logger_debug;
var module$exports$omid$common$eventTypedefs = {};
var module$exports$omid$common$version = {ApiVersion:"1.0", Version:"1.5.3-iab4563"};
var module$exports$omid$common$argsChecker = {};
function module$contents$omid$common$argsChecker_assertTruthyString(a, b) {
  if (!b) {
    throw Error("Value for " + a + " is undefined, null or blank.");
  }
  if ("string" !== typeof b && !(b instanceof String)) {
    throw Error("Value for " + a + " is not a string.");
  }
  if ("" === b.trim()) {
    throw Error("Value for " + a + " is empty string.");
  }
}
function module$contents$omid$common$argsChecker_assertNotNullObject(a, b) {
  if (null == b) {
    throw Error("Value for " + a + " is undefined or null");
  }
}
function module$contents$omid$common$argsChecker_assertNumber(a, b) {
  if (null == b) {
    throw Error(a + " must not be null or undefined.");
  }
  if ("number" !== typeof b || isNaN(b)) {
    throw Error("Value for " + a + " is not a number");
  }
}
function module$contents$omid$common$argsChecker_assertNumberBetween(a, b, c, d) {
  module$contents$omid$common$argsChecker_assertNumber(a, b);
  if (b < c || b > d) {
    throw Error("Value for " + a + " is outside the range [" + c + "," + d + "]");
  }
}
function module$contents$omid$common$argsChecker_assertFunction(a, b) {
  if (!b) {
    throw Error(a + " must not be truthy.");
  }
}
function module$contents$omid$common$argsChecker_assertPositiveNumber(a, b) {
  module$contents$omid$common$argsChecker_assertNumber(a, b);
  if (0 > b) {
    throw Error(a + " must be a positive number.");
  }
}
module$exports$omid$common$argsChecker.assertTruthyString = module$contents$omid$common$argsChecker_assertTruthyString;
module$exports$omid$common$argsChecker.assertNotNullObject = module$contents$omid$common$argsChecker_assertNotNullObject;
module$exports$omid$common$argsChecker.assertNumber = module$contents$omid$common$argsChecker_assertNumber;
module$exports$omid$common$argsChecker.assertNumberBetween = module$contents$omid$common$argsChecker_assertNumberBetween;
module$exports$omid$common$argsChecker.assertFunction = module$contents$omid$common$argsChecker_assertFunction;
module$exports$omid$common$argsChecker.assertPositiveNumber = module$contents$omid$common$argsChecker_assertPositiveNumber;
var module$exports$omid$common$VersionUtils = {}, module$contents$omid$common$VersionUtils_SEMVER_DIGITS_NUMBER = 3;
function module$contents$omid$common$VersionUtils_isValidVersion(a) {
  return /\d+\.\d+\.\d+(-.*)?/.test(a);
}
function module$contents$omid$common$VersionUtils_versionGreaterOrEqual(a, b) {
  a = a.split("-")[0].split(".");
  b = b.split("-")[0].split(".");
  for (var c = 0; c < module$contents$omid$common$VersionUtils_SEMVER_DIGITS_NUMBER; c++) {
    var d = parseInt(a[c], 10), e = parseInt(b[c], 10);
    if (d > e) {
      break;
    } else if (d < e) {
      return !1;
    }
  }
  return !0;
}
module$exports$omid$common$VersionUtils.isValidVersion = module$contents$omid$common$VersionUtils_isValidVersion;
module$exports$omid$common$VersionUtils.versionGreaterOrEqual = module$contents$omid$common$VersionUtils_versionGreaterOrEqual;
var module$exports$omid$common$ArgsSerDe = {}, module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION = "1.0.3";
function module$contents$omid$common$ArgsSerDe_serializeMessageArgs(a, b) {
  return module$contents$omid$common$VersionUtils_isValidVersion(a) && module$contents$omid$common$VersionUtils_versionGreaterOrEqual(a, module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION) ? b : JSON.stringify(b);
}
function module$contents$omid$common$ArgsSerDe_deserializeMessageArgs(a, b) {
  return module$contents$omid$common$VersionUtils_isValidVersion(a) && module$contents$omid$common$VersionUtils_versionGreaterOrEqual(a, module$contents$omid$common$ArgsSerDe_ARGS_NOT_SERIALIZED_VERSION) ? b ? b : [] : b && "string" === typeof b ? JSON.parse(b) : [];
}
module$exports$omid$common$ArgsSerDe.serializeMessageArgs = module$contents$omid$common$ArgsSerDe_serializeMessageArgs;
module$exports$omid$common$ArgsSerDe.deserializeMessageArgs = module$contents$omid$common$ArgsSerDe_deserializeMessageArgs;
var module$exports$omid$common$guid = {};
function module$contents$omid$common$guid_generateGuid() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(a) {
    var b = 16 * Math.random() | 0;
    a = "y" === a ? (b & 3 | 8).toString(16) : b.toString(16);
    return a;
  });
}
module$exports$omid$common$guid.generateGuid = module$contents$omid$common$guid_generateGuid;
var module$exports$omid$common$DetectOmid = {OMID_PRESENT_FRAME_NAME:"omid_v1_present", OMID_PRESENT_FRAME_NAME_WEB:"omid_v1_present_web", OMID_PRESENT_FRAME_NAME_APP:"omid_v1_present_app", getEnvironmentIframeName:function(a) {
  var b = {};
  return (b[module$exports$omid$common$constants.Environment.APP] = module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME_APP, b[module$exports$omid$common$constants.Environment.WEB] = module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME_WEB, b)[a];
}};
function module$contents$omid$common$DetectOmid_isIframePresent(a, b) {
  try {
    return a.frames && !!a.frames[b];
  } catch (c) {
    return !1;
  }
}
module$exports$omid$common$DetectOmid.isOmidPresent = function(a) {
  return [module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME, module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME_WEB, module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME_APP,].some(function(b) {
    return module$contents$omid$common$DetectOmid_isIframePresent(a, b);
  });
};
module$exports$omid$common$DetectOmid.getOmidEnvironment = function(a) {
  for (var b = $jscomp.makeIterator(Object.values(module$exports$omid$common$constants.Environment)), c = b.next(); !c.done; c = b.next()) {
    c = c.value;
    var d = module$exports$omid$common$DetectOmid.getEnvironmentIframeName(c);
    if (module$contents$omid$common$DetectOmid_isIframePresent(a, d)) {
      return c;
    }
  }
  return null;
};
function module$contents$omid$common$DetectOmid_writePresenceIframe_(a, b) {
  a.document.write('<iframe style="display:none" id="' + (b + '" name="' + b + '" sandbox></iframe>'));
}
module$exports$omid$common$DetectOmid.declareOmidPresence = function(a, b) {
  a.frames && a.document && ![module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME, module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME_WEB, module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME_APP,].some(function(c) {
    return !!a.frames[c];
  }) && (null == a.document.body && module$exports$omid$common$DetectOmid.isMutationObserverAvailable_(a) ? module$exports$omid$common$DetectOmid.registerMutationObserver_(a, b) : (b = module$exports$omid$common$DetectOmid.getEnvironmentIframeName(b), a.document.body ? (module$exports$omid$common$DetectOmid.appendPresenceIframe_(a, module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME), module$exports$omid$common$DetectOmid.appendPresenceIframe_(a, b)) : (module$contents$omid$common$DetectOmid_writePresenceIframe_(a, 
  module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME), module$contents$omid$common$DetectOmid_writePresenceIframe_(a, b))));
};
module$exports$omid$common$DetectOmid.appendPresenceIframe_ = function(a, b) {
  var c = a.document.createElement("iframe");
  c.id = b;
  c.name = b;
  c.style.display = "none";
  c.sandbox = "";
  a.document.body.appendChild(c);
};
module$exports$omid$common$DetectOmid.isMutationObserverAvailable_ = function(a) {
  return "MutationObserver" in a;
};
module$exports$omid$common$DetectOmid.registerMutationObserver_ = function(a, b) {
  var c = new MutationObserver(function(d) {
    d.forEach(function(e) {
      "BODY" === e.addedNodes[0].nodeName && (e = module$exports$omid$common$DetectOmid.getEnvironmentIframeName(b), module$exports$omid$common$DetectOmid.appendPresenceIframe_(a, module$exports$omid$common$DetectOmid.OMID_PRESENT_FRAME_NAME), module$exports$omid$common$DetectOmid.appendPresenceIframe_(a, e), c.disconnect());
    });
  });
  c.observe(a.document.documentElement, {childList:!0});
};
var module$exports$omid$common$serviceMethodUtils = {}, module$contents$omid$common$serviceMethodUtils_ServiceMethodPrefix = {SESSION_SERVICE:"SessionService.", VERIFICATION_SERVICE:"VerificationService.",};
function module$contents$omid$common$serviceMethodUtils_getPrefixedSessionServiceMethod(a) {
  return module$contents$omid$common$serviceMethodUtils_getPrefixedMethod(a, module$contents$omid$common$serviceMethodUtils_ServiceMethodPrefix.SESSION_SERVICE);
}
function module$contents$omid$common$serviceMethodUtils_getUnprefixedSessionServiceMethod(a) {
  return module$contents$omid$common$serviceMethodUtils_getUnprefixedMethod(a, module$contents$omid$common$serviceMethodUtils_ServiceMethodPrefix.SESSION_SERVICE);
}
function module$contents$omid$common$serviceMethodUtils_isPrefixedSessionServiceMethod(a) {
  return null != module$contents$omid$common$serviceMethodUtils_getUnprefixedSessionServiceMethod(a);
}
function module$contents$omid$common$serviceMethodUtils_getPrefixedVerificationServiceMethod(a) {
  return module$contents$omid$common$serviceMethodUtils_getPrefixedMethod(a, module$contents$omid$common$serviceMethodUtils_ServiceMethodPrefix.VERIFICATION_SERVICE);
}
function module$contents$omid$common$serviceMethodUtils_getUnprefixedVerificationServiceMethod(a) {
  return module$contents$omid$common$serviceMethodUtils_getUnprefixedMethod(a, module$contents$omid$common$serviceMethodUtils_ServiceMethodPrefix.VERIFICATION_SERVICE);
}
function module$contents$omid$common$serviceMethodUtils_isPrefixedVerificationServiceMethod(a) {
  return null != module$contents$omid$common$serviceMethodUtils_getUnprefixedVerificationServiceMethod(a);
}
function module$contents$omid$common$serviceMethodUtils_getPrefixedMethod(a, b) {
  return b + a;
}
function module$contents$omid$common$serviceMethodUtils_getUnprefixedMethod(a, b) {
  return (a = a.match(new RegExp("^" + b + "(.*)"))) && a[1];
}
module$exports$omid$common$serviceMethodUtils.getPrefixedSessionServiceMethod = module$contents$omid$common$serviceMethodUtils_getPrefixedSessionServiceMethod;
module$exports$omid$common$serviceMethodUtils.getPrefixedVerificationServiceMethod = module$contents$omid$common$serviceMethodUtils_getPrefixedVerificationServiceMethod;
module$exports$omid$common$serviceMethodUtils.getUnprefixedSessionServiceMethod = module$contents$omid$common$serviceMethodUtils_getUnprefixedSessionServiceMethod;
module$exports$omid$common$serviceMethodUtils.getUnprefixedVerificationServiceMethod = module$contents$omid$common$serviceMethodUtils_getUnprefixedVerificationServiceMethod;
module$exports$omid$common$serviceMethodUtils.isPrefixedSessionServiceMethod = module$contents$omid$common$serviceMethodUtils_isPrefixedSessionServiceMethod;
module$exports$omid$common$serviceMethodUtils.isPrefixedVerificationServiceMethod = module$contents$omid$common$serviceMethodUtils_isPrefixedVerificationServiceMethod;
var module$exports$omid$common$OmidGlobalProvider = {};
function module$contents$omid$common$OmidGlobalProvider_getOmidGlobal() {
  if ("undefined" !== typeof omidGlobal && omidGlobal) {
    return omidGlobal;
  }
  if ("undefined" !== typeof global && global) {
    return global;
  }
  if ("undefined" !== typeof window && window) {
    return window;
  }
  if ("undefined" !== typeof globalThis && globalThis) {
    return globalThis;
  }
  var a = Function("return this")();
  if (a) {
    return a;
  }
  throw Error("Could not determine global object context.");
}
module$exports$omid$common$OmidGlobalProvider.omidGlobal = module$contents$omid$common$OmidGlobalProvider_getOmidGlobal();
var module$exports$omid$common$exporter = {};
function module$contents$omid$common$exporter_getOmidExports() {
  return "undefined" === typeof omidExports ? null : omidExports;
}
function module$contents$omid$common$exporter_getOrCreateName(a, b) {
  return a && (a[b] || (a[b] = {}));
}
function module$contents$omid$common$exporter_packageExport(a, b, c) {
  if (c = void 0 === c ? module$contents$omid$common$exporter_getOmidExports() : c) {
    a = a.split("."), a.slice(0, a.length - 1).reduce(module$contents$omid$common$exporter_getOrCreateName, c)[a[a.length - 1]] = b;
  }
}
module$exports$omid$common$exporter.packageExport = module$contents$omid$common$exporter_packageExport;
var module$exports$omid$common$windowUtils = {};
function module$contents$omid$common$windowUtils_isValidWindow(a) {
  return null != a && "undefined" !== typeof a.top && null != a.top;
}
function module$contents$omid$common$windowUtils_isCrossOrigin(a) {
  if (a === module$exports$omid$common$OmidGlobalProvider.omidGlobal) {
    return !1;
  }
  try {
    if ("undefined" === typeof a.location.hostname) {
      return !0;
    }
    module$contents$omid$common$windowUtils_isSameOriginForIE(a);
  } catch (b) {
    return !0;
  }
  return !1;
}
function module$contents$omid$common$windowUtils_isSameOriginForIE(a) {
  return "" === a.x || "" !== a.x;
}
function module$contents$omid$common$windowUtils_resolveGlobalContext(a) {
  "undefined" === typeof a && "undefined" !== typeof window && window && (a = window);
  return module$contents$omid$common$windowUtils_isValidWindow(a) ? a : module$exports$omid$common$OmidGlobalProvider.omidGlobal;
}
function module$contents$omid$common$windowUtils_resolveTopWindowContext(a) {
  return module$contents$omid$common$windowUtils_isValidWindow(a) ? a.top : module$exports$omid$common$OmidGlobalProvider.omidGlobal;
}
function module$contents$omid$common$windowUtils_isTopWindowAccessible(a) {
  try {
    return a.top.location.href ? !0 : !1;
  } catch (b) {
    return !1;
  }
}
function module$contents$omid$common$windowUtils_removeDomElements(a) {
  a.type === module$exports$omid$common$constants.AdEventType.SESSION_START && ("undefined" !== typeof a.data.context.videoElement && (a.data.context.videoElement = "Video Element (" + a.data.context.videoElement.id + ")"), "undefined" !== typeof a.data.context.slotElement && (a.data.context.slotElement = "Slot Element (" + a.data.context.slotElement.id + ")"));
  return a;
}
function module$contents$omid$common$windowUtils_evaluatePageUrl(a) {
  if (!module$contents$omid$common$windowUtils_isValidWindow(a)) {
    return null;
  }
  try {
    var b = a.top;
    return module$contents$omid$common$windowUtils_isCrossOrigin(b) ? null : b.location.href;
  } catch (c) {
    return null;
  }
}
module$exports$omid$common$windowUtils.evaluatePageUrl = module$contents$omid$common$windowUtils_evaluatePageUrl;
module$exports$omid$common$windowUtils.isCrossOrigin = module$contents$omid$common$windowUtils_isCrossOrigin;
module$exports$omid$common$windowUtils.removeDomElements = module$contents$omid$common$windowUtils_removeDomElements;
module$exports$omid$common$windowUtils.resolveGlobalContext = module$contents$omid$common$windowUtils_resolveGlobalContext;
module$exports$omid$common$windowUtils.resolveTopWindowContext = module$contents$omid$common$windowUtils_resolveTopWindowContext;
module$exports$omid$common$windowUtils.isTopWindowAccessible = module$contents$omid$common$windowUtils_isTopWindowAccessible;
var module$exports$omid$common$DirectCommunication = function(a) {
  module$exports$omid$common$Communication.call(this, a);
  this.communicationType_ = module$exports$omid$common$constants.CommunicationType.DIRECT;
  this.handleExportedMessage = module$exports$omid$common$DirectCommunication.prototype.handleExportedMessage.bind(this);
};
$jscomp.inherits(module$exports$omid$common$DirectCommunication, module$exports$omid$common$Communication);
module$exports$omid$common$DirectCommunication.prototype.sendMessage = function(a, b) {
  b = void 0 === b ? this.to : b;
  if (!b) {
    throw Error("Message destination must be defined at construction time or when sending the message.");
  }
  b.handleExportedMessage(a.serialize(), this);
};
module$exports$omid$common$DirectCommunication.prototype.handleExportedMessage = function(a, b) {
  module$exports$omid$common$InternalMessage.isValidSerializedMessage(a) && this.handleMessage(module$exports$omid$common$InternalMessage.deserialize(a), b);
};
module$exports$omid$common$DirectCommunication.prototype.isCrossOrigin = function() {
  return !1;
};
var module$exports$omid$common$PostMessageCommunication = function(a, b) {
  b = void 0 === b ? module$exports$omid$common$OmidGlobalProvider.omidGlobal : b;
  module$exports$omid$common$Communication.call(this, b);
  var c = this;
  this.communicationType_ = module$exports$omid$common$constants.CommunicationType.POST_MESSAGE;
  a.addEventListener("message", function(d) {
    if ("object" === typeof d.data) {
      var e = d.data;
      module$exports$omid$common$InternalMessage.isValidSerializedMessage(e) && (e = module$exports$omid$common$InternalMessage.deserialize(e), d.source && c.handleMessage(e, d.source));
    }
  });
};
$jscomp.inherits(module$exports$omid$common$PostMessageCommunication, module$exports$omid$common$Communication);
module$exports$omid$common$PostMessageCommunication.isCompatibleContext = function(a) {
  return !!(a && a.addEventListener && a.postMessage);
};
module$exports$omid$common$PostMessageCommunication.prototype.sendMessage = function(a, b) {
  b = void 0 === b ? this.to : b;
  if (!b) {
    throw Error("Message destination must be defined at construction time or when sending the message.");
  }
  b.postMessage(a.serialize(), "*");
};
module$exports$omid$common$PostMessageCommunication.prototype.isCrossOrigin = function() {
  return this.to ? module$contents$omid$common$windowUtils_isCrossOrigin(this.to) : !0;
};
var module$exports$omid$common$serviceCommunication = {}, module$contents$omid$common$serviceCommunication_EXPORTED_SESSION_COMMUNICATION_NAME = ["omid", "v1_SessionServiceCommunication"], module$contents$omid$common$serviceCommunication_EXPORTED_VERIFICATION_COMMUNICATION_NAME = ["omid", "v1_VerificationServiceCommunication"], module$contents$omid$common$serviceCommunication_EXPORTED_SERVICE_WINDOW_NAME = ["omidVerificationProperties", "serviceWindow"];
function module$contents$omid$common$serviceCommunication_getValueForKeypath(a, b) {
  return b.reduce(function(c, d) {
    return c && c[d];
  }, a);
}
function module$contents$omid$common$serviceCommunication_startServiceCommunication(a, b, c, d) {
  if (!module$contents$omid$common$windowUtils_isCrossOrigin(b)) {
    try {
      var e = module$contents$omid$common$serviceCommunication_getValueForKeypath(b, c);
      if (e) {
        return new module$exports$omid$common$DirectCommunication(e);
      }
    } catch (f) {
    }
  }
  return d(b) ? new module$exports$omid$common$PostMessageCommunication(a, b) : null;
}
function module$contents$omid$common$serviceCommunication_startServiceCommunicationFromCandidates(a, b, c, d) {
  b = $jscomp.makeIterator(b);
  for (var e = b.next(); !e.done; e = b.next()) {
    if (e = module$contents$omid$common$serviceCommunication_startServiceCommunication(a, e.value, c, d)) {
      return e;
    }
  }
  return null;
}
function module$contents$omid$common$serviceCommunication_startSessionServiceCommunication(a, b, c) {
  c = void 0 === c ? module$exports$omid$common$DetectOmid.isOmidPresent : c;
  var d = [a, module$contents$omid$common$windowUtils_resolveTopWindowContext(a)];
  b && d.unshift(b);
  return module$contents$omid$common$serviceCommunication_startServiceCommunicationFromCandidates(a, d, module$contents$omid$common$serviceCommunication_EXPORTED_SESSION_COMMUNICATION_NAME, c);
}
function module$contents$omid$common$serviceCommunication_startVerificationServiceCommunication(a, b) {
  b = void 0 === b ? module$exports$omid$common$DetectOmid.isOmidPresent : b;
  var c = [], d = module$contents$omid$common$serviceCommunication_getValueForKeypath(a, module$contents$omid$common$serviceCommunication_EXPORTED_SERVICE_WINDOW_NAME);
  d && c.push(d);
  c.push(module$contents$omid$common$windowUtils_resolveTopWindowContext(a));
  return module$contents$omid$common$serviceCommunication_startServiceCommunicationFromCandidates(a, c, module$contents$omid$common$serviceCommunication_EXPORTED_VERIFICATION_COMMUNICATION_NAME, b);
}
module$exports$omid$common$serviceCommunication.startSessionServiceCommunication = module$contents$omid$common$serviceCommunication_startSessionServiceCommunication;
module$exports$omid$common$serviceCommunication.startVerificationServiceCommunication = module$contents$omid$common$serviceCommunication_startVerificationServiceCommunication;
var module$contents$omid$verificationClient$VerificationClient_VERIFICATION_CLIENT_VERSION = module$exports$omid$common$version.Version, module$contents$omid$verificationClient$VerificationClient_EventCallback;
function module$contents$omid$verificationClient$VerificationClient_getThirdPartyOmid() {
  var a = module$exports$omid$common$OmidGlobalProvider.omidGlobal.omid3p;
  return a && "function" === typeof a.registerSessionObserver && "function" === typeof a.addEventListener ? a : null;
}
var module$exports$omid$verificationClient$VerificationClient = function(a) {
  if (this.communication = a || module$contents$omid$common$serviceCommunication_startVerificationServiceCommunication(module$contents$omid$common$windowUtils_resolveGlobalContext())) {
    this.communication.onMessage = this.handleMessage_.bind(this);
  } else {
    if (a = module$contents$omid$verificationClient$VerificationClient_getThirdPartyOmid()) {
      this.omid3p = a;
    }
  }
//----------this.remoteIntervals_ = this.remoteTimeouts_ = 0;
  this.callbackMap_ = {};
  this.imgCache_ = [];
  this.injectionId_ = (a = module$exports$omid$common$OmidGlobalProvider.omidGlobal.omidVerificationProperties) ? a.injectionId : void 0;
};
module$exports$omid$verificationClient$VerificationClient.prototype.isSupported = function() {
  return this.getEnvironment() !== module$exports$omid$common$constants.Environment.WEB || this.injectionId_ ? !(!this.communication && !this.omid3p) : !1;
};
module$exports$omid$verificationClient$VerificationClient.prototype.getEnvironment = function() {
  var a = module$contents$omid$common$windowUtils_resolveGlobalContext();
  return this.injectionSource() || (0,module$exports$omid$common$DetectOmid.getOmidEnvironment)(a) || (0,module$exports$omid$common$DetectOmid.getOmidEnvironment)(module$contents$omid$common$windowUtils_resolveTopWindowContext(a));
};
module$exports$omid$verificationClient$VerificationClient.prototype.injectionSource = function() {
  var a = module$exports$omid$common$OmidGlobalProvider.omidGlobal.omidVerificationProperties;
  if (a && a.injectionSource) {
    return a.injectionSource;
  }
};
module$exports$omid$verificationClient$VerificationClient.prototype.registerSessionObserver = function(a, b) {
  module$contents$omid$common$argsChecker_assertFunction("functionToExecute", a);
  this.omid3p ? this.omid3p.registerSessionObserver(a, b, this.injectionId_) : this.sendMessage_("addSessionListener", a, b, this.injectionId_);
};
module$exports$omid$verificationClient$VerificationClient.prototype.addEventListener = function(a, b) {
  module$contents$omid$common$argsChecker_assertTruthyString("eventType", a);
  module$contents$omid$common$argsChecker_assertFunction("functionToExecute", b);
  this.omid3p ? this.omid3p.addEventListener(a, b, this.injectionId_) : this.sendMessage_("addEventListener", b, a, this.injectionId_);
};
module$exports$omid$verificationClient$VerificationClient.prototype.sendUrl = function(a, b, c) {
  module$contents$omid$common$argsChecker_assertTruthyString("url", a);
  module$exports$omid$common$OmidGlobalProvider.omidGlobal.document && module$exports$omid$common$OmidGlobalProvider.omidGlobal.document.createElement ? this.sendUrlWithImg_(a, b, c) : this.sendMessage_("sendUrl", function(d) {
    d && b ? b() : !d && c && c();
  }, a);
};
module$exports$omid$verificationClient$VerificationClient.prototype.sendUrlWithImg_ = function(a, b, c) {
  var d = this, e = module$exports$omid$common$OmidGlobalProvider.omidGlobal.document.createElement("img");
  this.imgCache_.push(e);
  var f = function(g) {
    var h = d.imgCache_.indexOf(e);
    0 <= h && d.imgCache_.splice(h, 1);
    g && g();
  };
  e.addEventListener("load", f.bind(this, b));
  e.addEventListener("error", f.bind(this, c));
  e.src = a;
};
module$exports$omid$verificationClient$VerificationClient.prototype.injectJavaScriptResource = function(a, b, c) {
  var d = this;
  module$contents$omid$common$argsChecker_assertTruthyString("url", a);
  module$exports$omid$common$OmidGlobalProvider.omidGlobal.document ? this.injectJavascriptResourceUrlInDom_(a, b, c) : this.sendMessage_("injectJavaScriptResource", function(e, f) {
    e ? (d.evaluateJavaScript_(f, a), b()) : (module$contents$omid$common$logger_error("Service failed to load JavaScript resource."), c());
  }, a);
};
module$exports$omid$verificationClient$VerificationClient.prototype.injectJavascriptResourceUrlInDom_ = function(a, b, c) {
  var d = module$exports$omid$common$OmidGlobalProvider.omidGlobal.document, e = d.body;
  d = d.createElement("script");
  d.onload = b;
  d.onerror = c;
  d.src = a;
  d.type = "application/javascript";
  e.appendChild(d);
};
module$exports$omid$verificationClient$VerificationClient.prototype.evaluateJavaScript_ = function(a, b) {
  try {
    eval(a);
  } catch (c) {
    module$contents$omid$common$logger_error('Error evaluating the JavaScript resource from "' + b + '".');
  }
};
module$exports$omid$verificationClient$VerificationClient.prototype.setTimeout = function(a, b) {
  module$contents$omid$common$argsChecker_assertFunction("functionToExecute", a);
  module$contents$omid$common$argsChecker_assertPositiveNumber("timeInMillis", b);
  if (this.hasTimeoutMethods_()) {
    return module$exports$omid$common$OmidGlobalProvider.omidGlobal.setTimeout(a, b);
  }
//----------var c = this.remoteTimeouts_++;
  var c = ((new Date()).getTime() * 1000000) + (Math.floor(Math.random() * 1000000));
  this.sendMessage_("setTimeout", a, c, b);
  return c;
};
module$exports$omid$verificationClient$VerificationClient.prototype.clearTimeout = function(a) {
  module$contents$omid$common$argsChecker_assertPositiveNumber("timeoutId", a);
  this.hasTimeoutMethods_() ? module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearTimeout(a) : this.sendOneWayMessage_("clearTimeout", a);
};
module$exports$omid$verificationClient$VerificationClient.prototype.setInterval = function(a, b) {
  module$contents$omid$common$argsChecker_assertFunction("functionToExecute", a);
  module$contents$omid$common$argsChecker_assertPositiveNumber("timeInMillis", b);
  if (this.hasIntervalMethods_()) {
    return module$exports$omid$common$OmidGlobalProvider.omidGlobal.setInterval(a, b);
  }
//----------var c = this.remoteIntervals_++;
  var c = ((new Date()).getTime() * 1000000) + (Math.floor(Math.random() * 1000000));
  this.sendMessage_("setInterval", a, c, b);
  return c;
};
module$exports$omid$verificationClient$VerificationClient.prototype.clearInterval = function(a) {
  module$contents$omid$common$argsChecker_assertPositiveNumber("intervalId", a);
  this.hasIntervalMethods_() ? module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearInterval(a) : this.sendOneWayMessage_("clearInterval", a);
};
module$exports$omid$verificationClient$VerificationClient.prototype.hasTimeoutMethods_ = function() {
  return "function" === typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.setTimeout && "function" === typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearTimeout;
};
module$exports$omid$verificationClient$VerificationClient.prototype.hasIntervalMethods_ = function() {
  return "function" === typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.setInterval && "function" === typeof module$exports$omid$common$OmidGlobalProvider.omidGlobal.clearInterval;
};
module$exports$omid$verificationClient$VerificationClient.prototype.handleMessage_ = function(a, b) {
  b = a.method;
  var c = a.guid;
  a = a.args;
  if ("response" === b && this.callbackMap_[c]) {
    var d = module$contents$omid$common$ArgsSerDe_deserializeMessageArgs(module$exports$omid$common$version.Version, a);
    this.callbackMap_[c].apply(this, d);
  }
  "error" === b && window.console && module$contents$omid$common$logger_error(a);
};
module$exports$omid$verificationClient$VerificationClient.prototype.sendOneWayMessage_ = function(a) {
  var b = $jscomp.getRestArguments.apply(1, arguments);
  this.sendMessage_.apply(this, [a, null].concat($jscomp.arrayFromIterable(b)));
};
module$exports$omid$verificationClient$VerificationClient.prototype.sendMessage_ = function(a, b) {
  var c = $jscomp.getRestArguments.apply(2, arguments);
  if (this.communication) {
    var d = module$contents$omid$common$guid_generateGuid();
    b && (this.callbackMap_[d] = b);
    c = new module$exports$omid$common$InternalMessage(d, module$contents$omid$common$serviceMethodUtils_getPrefixedVerificationServiceMethod(a), module$exports$omid$common$version.Version, module$contents$omid$common$ArgsSerDe_serializeMessageArgs(module$exports$omid$common$version.Version, c));
    this.communication.sendMessage(c);
  }
};
module$contents$omid$common$exporter_packageExport("OmidVerificationClient", module$exports$omid$verificationClient$VerificationClient);

}, typeof exports === 'undefined' ? undefined : exports));



} catch(e) {
	__IntegralASDiagnosticCall('thirdparty', e);
}





	
	__IASScope.isDomless = typeof window === "undefined";
	__IASOmidVerificationClient = { isSupported: function () { return false; } };

	if (typeof __IASScope.OmidVerificationClient !== 'undefined') {
		try {
			__IASOmidVerificationClient = new __IASScope.OmidVerificationClient['1.5.3-iab4563'](); //try standard in-browser instantiation
		}
		catch(e) {
			try {
				__IASOmidVerificationClient = new __IASScope.OmidVerificationClient(); //try domless version which has no version
			}
			catch(e) {
			}
		}
	}

	var isRedirectedStaticCMTag = false;

	if (
		!__IASScope.isDomless &&
		document.currentScript &&
		document.currentScript.src &&
		document.currentScript.src.includes('/jload')
	) {
		isRedirectedStaticCMTag = true;
	}

	function IASBaseTrustedTypesPolicy(scope) {
		this.policy = null;
	
		if (scope && !scope.isDomless && scope.trustedTypes && scope.trustedTypes.createPolicy) {
			try {
				this.policy = scope.trustedTypes.createPolicy('IASBaseTrustedTypesPolicy', {
					createHTML: function(input) {
						return input;
					},
					createScriptURL: function(input) {
						return input;
					},
					createScript: function(input) {
						return input;
					},
				});
			} catch (e) {}
		}
	
		this.createHTML = function(input) {
			return (this.policy && this.policy.createHTML) ? this.policy.createHTML(input) : input;
		}
		this.createScriptURL = function(input) {
			return (this.policy && this.policy.createScriptURL) ? this.policy.createScriptURL(input) : input;
		} 
		this.createScript = function(input) {
			return (this.policy && this.policy.createScript) ? this.policy.createScript(input) : input;
		}
	}
	
	if (__IASScope && !__IASScope.iasBaseTrustedTypesPolicy) {
		__IASScope.iasBaseTrustedTypesPolicy = new IASBaseTrustedTypesPolicy(__IASScope);
	}
	
	__IntegralASConfig.useFIF = __IASScope && !!__IASScope.__IntegralASUseFIF && (__IntegralASConfig.mode === "jload" || isRedirectedStaticCMTag);
	__IntegralASConfig.adRefreshThreshold = __IASScope && __IASScope.__IntegralASAdRefreshThreshold;




__IntegralASConfig.getContextNode = function (win, topWin) {
	'use strict';

	if (__IASScope.isDomless) {
		return;
	}
	
	if (win.location && win.location.href && (win.location.href.includes('fw.html') || win.location.href.includes('/rjsi/'))) {
		return { dataset: {}, parentNode: win.document.body, src: win.location.href };
	}

	if (__IntegralASConfig.useFIF) {
		return __IASScope.frameElement; // Early exit if using FIF
	}

	if (document.currentScript) {
		return document.currentScript;
	}

	var getScripts = function (shouldSearchShadowDom) {
		var scripts = [];

		if (!shouldSearchShadowDom) {
			scripts = [...document.getElementsByTagName('script')];
		} else {
			function traverse(node) {
				if (node.tagName === 'SCRIPT') {
					scripts.push(node);
				}
				
				if (node.shadowRoot) {
					traverse(node.shadowRoot);
				}
				
				var children = node.children;
				for (var i = 0; i < children.length; i++) {
					traverse(children[i]);
				}
			}

			traverse(document.body);
		}

		return scripts;
	}

	var tempScript;
	// TODO: I suspect this will become an issue for static FWJS within a shadow root,
	// which will a) not have a bootstrapper at this point and b) not have a currentScript.
	var scriptUrl = __IntegralASConfig.scriptUrl;
	var shouldSearchShadowDom = scriptUrl && scriptUrl.includes('ias_searchshadowdom=true');
	var scripts = getScripts(shouldSearchShadowDom);
	var result = scripts[scripts.length - 1];
	var scriptIndex = scripts.length;

	try {
		// If you encounter strange behavior with this node traversal (FWJS not selecting the expected script tag),
		// check ContextNodeHelper.js where this code is duplicated and can silently overwrite the context node later.
		while (--scriptIndex >= 0) {
			tempScript = scripts[scriptIndex];
			if (
				tempScript.src &&
				tempScript.src.indexOf(scriptUrl) === 0 &&
				tempScript.getAttribute('data-ias-script-tag') === null
			) {
				result = tempScript;
				tempScript.setAttribute('data-ias-script-tag', 'found');
				break;
			}
		}
	} catch (e) {} // TODO: maybe a jsDiagnostic?

	return result;
};
__IntegralASConfig.getCurrentScript = function () {
	if (document.currentScript) {
		return document.currentScript;
	}
};

__IntegralASConfig.contextNode = __IASScope.isDomless ? undefined : __IntegralASConfig.getContextNode(window, top);
__IntegralASConfig.currentScript = __IASScope.isDomless ? undefined : __IntegralASConfig.getCurrentScript();





__IntegralASConfig.perfFactory = function() {
	'use strict';

	var _marks = {};
	var START_CODE = 'A';
	var END_CODE = 'Z';

	function _addMark(codeName, time) {
		
		_marks[codeName] = time;
	}

	function mark(codeName) {
		_addMark(codeName, Math.round(__IASScope.performance.now()));
	}

	function markStart(baseName) {
		mark(baseName + START_CODE);
	}

	function markEnd(baseName) {
		mark(baseName + END_CODE);
	}

	function markResource(baseName, url) {
		var entry, entries;
		entries = __IASScope.performance.getEntriesByName(url);
		if (entries && entries.length) {
			entry = entries[entries.length - 1];
			if (entry.startTime > 0 && entry.responseEnd > 0) {
				_addMark(baseName + START_CODE, Math.round(entry.startTime));
				
				_addMark(baseName + END_CODE, Math.round(entry.responseEnd));
			}
		}
	}

	function getData() {
		return _marks;
	}

	function getStart(baseName) {
		return _marks[baseName + START_CODE];
	}

	function getEnd(baseName) {
		return _marks[baseName + END_CODE];
	}

	function noop() {}

	function setNoops() {
		_addMark = noop;
		mark = noop;
		markStart = noop;
		markEnd = noop;
		markResource = noop;
	}

	function isFunc(obj) {
		return typeof obj === 'function';
	}

	function _init() {
		var canUsePerformanceAPIs = false;
		var PERF_MARK_BOOTSTRAPPER_EXECUTION = 'be';
		var PERF_MARK_BOOTSTRAPPER_SCRIPT_DOWNLOAD = 'bd';
		var PERF_MARK_MAIN_SCRIPT_DOWNLOAD = 'md'; // note: this code is intentionally the same as the one in globalConstants.js
		var downloadMark;

		try {
			canUsePerformanceAPIs =
				__IASScope.performance &&
				isFunc(__IASScope.performance.getEntriesByName) &&
				isFunc(__IASScope.performance.now) &&
				__IntegralASConfig.perfBirth !== null; // initialized to null or a time in jsAddOns1-birthdate.js

			if (canUsePerformanceAPIs) {
				downloadMark = __IntegralASConfig.jsDoSplit
					? PERF_MARK_BOOTSTRAPPER_SCRIPT_DOWNLOAD
					: PERF_MARK_MAIN_SCRIPT_DOWNLOAD;

				markResource(downloadMark, __IntegralASConfig.scriptUrl); // in split mode, this captures download time for the bootstrapper script, in bundled mode, the bundled/main script
				_addMark(PERF_MARK_BOOTSTRAPPER_EXECUTION + START_CODE, Math.round(__IntegralASConfig.perfBirth)); // put the birthdate that we already captured into our list of marks
				markEnd(PERF_MARK_BOOTSTRAPPER_EXECUTION); // roughly the end time of execution for the bootstrapper script in split mode, in bundled mode, end of the bootstrapper part of the script and start of the module definition part
			} else {
				setNoops();
			}
		} catch (err) {
			// TODO: remove if we never get here?
			setNoops();
			if (isFunc(__IASScope.__IntegralASDiagnosticCall)) {
				__IASScope.__IntegralASDiagnosticCall('perf', err, __IntegralASConfig);
			}
		}
	}

	_init();

	return {
		mark: mark,
		markStart: markStart,
		markEnd: markEnd,
		markResource: markResource,
		getData: getData,
		getStart: getStart,
		getEnd: getEnd
	};
};
__IntegralASConfig.perf = __IntegralASConfig.perfFactory();





} catch(err) {
	__IntegralASConfig = {};
	__IntegralASDiagnosticCall('bootstrapper', err);
}



// This is an immediately invoked bootstrapper extension, rather than an anonymous IIFE to enable unit testing.
__IASScope.__IntegralASConfig = typeof __IntegralASConfig !== 'undefined' ? __IntegralASConfig : {};

function mainScriptAppender(params, mainScriptScope) {
	'use strict';

	// TODO: minification for this file

	function isDef(obj) {
		return typeof obj !== 'undefined';
	}

	function isFunc(obj) {
		return typeof obj === 'function';
	}

	function sendDiag(point, err) {
		if (isFunc(mainScriptScope.__IntegralASDiagnosticCall)) {
			mainScriptScope.__IntegralASDiagnosticCall('appender-' + point, err, params);
		}
	}

	function getInitializerIfAvailable() {
		// TODO: future enhancement - look in top when available and consider storing in top when possible to increase availability.
		// Also consider potential timing issues between when a version of __IntegralASExec would be
		// loaded by another script vs. when this code checks. (E.g. three tags on a page all direct.
		// When the Bootstrapper Script runs for all three, none have had time to load an __IntegralASExec
		// yet, so all three wind up requesting it. (The browser may combine the requests into one due to browser caching.)
		// Perhaps the three tags should coordinate somehow?)

		var result = false;
		var functionExists =
			isDef(mainScriptScope.__IntegralASExec) &&
			isDef(mainScriptScope.__IntegralASExec[params.version]) &&
			isFunc(mainScriptScope.__IntegralASExec[params.version].initialize);

		if (functionExists) {
			result = mainScriptScope.__IntegralASExec[params.version].initialize;
		}
		return result;
	}

	// TODO: add an onload handler so we can short-circuit polling https://stackoverflow.com/questions/4845762/onload-handler-for-script-tag-in-internet-explorer
	function appendScript(scriptUrl) {
		if (__IASScope.isDomless) {
			if (__IASOmidVerificationClient && __IASOmidVerificationClient.injectJavaScriptResource) {
				__IASOmidVerificationClient.injectJavaScriptResource(scriptUrl, function() {});
			}
		} else {
			var mainScriptDoc = mainScriptScope.document;
			var script = mainScriptDoc.createElement('script');
			script.type = 'text/javascript';
			script.src = __IASScope.iasBaseTrustedTypesPolicy.createScriptURL(scriptUrl);
			mainScriptDoc.head.appendChild(script);
		}
	}

	function lookForMainScriptAndRun() {
		var initializerFn, shouldSendTimeout, timePassed, timeoutExceeded;
		var initializerScope = params.useFIF ? mainScriptScope.parent : mainScriptScope;
		var TIMEOUT_MS = 5000;
		var INTERVAL_MS = 25;
		var timeoutDiagSent = false;
		var timeoutScope = __IASScope;
		if (__IASScope.isDomless && __IASOmidVerificationClient && __IASOmidVerificationClient.setTimeout) {
			timeoutScope = __IASOmidVerificationClient;
		}

		function timedLoad() {
			try {
				initializerFn = getInitializerIfAvailable();

				if (initializerFn) {
					initializerFn(params, initializerScope, initializerScope.document);
				} else {
					timePassed = new Date().getTime() - params.birthdate;
					timeoutExceeded = timePassed > TIMEOUT_MS;
					shouldSendTimeout = !timeoutDiagSent && timeoutExceeded;
					if (shouldSendTimeout) {
						var rand = Math.random();
						
						if (rand < 0.1) {
							sendDiag('timeout', new Error('Exceeded 5s jsA loading static script.*10'));
						}
						timeoutDiagSent = true;
					}
					timeoutScope.setTimeout(timedLoad, INTERVAL_MS); //thanks to this setTimeout, we're keeping the interval behaviour
				}
			} catch (err) {
				sendDiag('interval', err);
			}
		}

		timeoutScope.setTimeout(timedLoad, INTERVAL_MS);
	}

	function loadMainScript(scriptUrl) {
		// In jss,jsi,jspix modes, when params.forceAppend is "false", we need to use document.write instead of document.append
		// TODO: check for docWrite mode and properly invoke when we move beyond "jload only"
		appendScript(scriptUrl);
		lookForMainScriptAndRun();
	}

	function beginAppending() {
		var mainScriptUrl = params.protocol + '://' + params.sp_cdnScripts.main;

		// TODO: add functionality here to getInitializerIfAvailable() and only requst the main script if necessary
		// Not doing now because:
		// 1) it adds a lot of complexity to testing
		// 2) in most of the initial use cases, our script will be in its own iframe and
		//    I don't want to add the complexity of looking in other scopes yet
		loadMainScript(mainScriptUrl);
	}

	function isValidToAppend() {
		var configIsValid = params.protocol && params.sp_cdnScripts && params.sp_cdnScripts.main;
		return configIsValid;
	}

	function start() {
		try {
			params.isSplitMode = true;
			if (isValidToAppend()) {
				beginAppending();
			} else {
				throw new Error('incorrect configuration for split mode');
			}
		} catch (err) {
			sendDiag('start', err);
		}
	}

	start();
}

__IASScope.__IntegralASConfig.mainScriptAppender = mainScriptAppender;
__IASScope.__IntegralASConfig.mainScriptAppender(__IASScope.__IntegralASConfig, __IASScope);


