
            (function () {
    var pvs = window.top.location == window.self.location ? 1 : 2;
    var ecid=getEventChainId();
    var hitDone=false;
    var sf2=null;
    if (window.DotMetricsInitScript == undefined) {
        window.DotMetricsInitScript = true;

        checkTCF(start);

        function NewDotMetricsLoad(DotMetricsContentLoadedFunction) {
            if (document.readyState != undefined && document.readyState != 'loading') {
                setTimeout(function () {
                    DotMetricsContentLoadedFunction();
                }, 100);
            } else if (document.addEventListener) {
                document.addEventListener('DOMContentLoaded', DotMetricsContentLoadedFunction, false);
            } else if (document.attachEvent) {
                document.attachEvent('onreadystatechange', DotMetricsContentLoadedFunction);
            } else if (window.addEventListener) {
                window.addEventListener('load', DotMetricsContentLoadedFunction, false);
            } else if (window.attachEvent) {
                window.attachEvent('onload', DotMetricsContentLoadedFunction);
            }
            if (window.location.href.indexOf('dotmetrics_debug=true') >= 0){
                DotMetricsContentLoadedFunction();
            }
        }

        function checkTCF(callback){
            //if cmp uses TCF __tcfapi function must exist
            if(typeof __tcfapi == 'function'){
                var lr=false;
                __tcfapi('addEventListener', 2, function(tcData, success){
                    if(success){
                        if(lr==true){return;}

                        if(tcData.gdprApplies==true){
                            //if tcloaded event or user interaction with tcf is complete (useractioncomplete) check for consent
                            if(tcData.eventStatus === 'tcloaded' || tcData.eventStatus === 'useractioncomplete'){
                                //make sure that event is handled only once regardless of removeEventListener
                                lr=true;

                                //stop listening for TCF events
                                __tcfapi('removeEventListener', 2,function(success){},tcData.listenerId);

                                if(typeof tcData.specialFeatureOptins != 'undefined' && typeof tcData.specialFeatureOptins[2] != 'undefined'){
                                    sf2=tcData.specialFeatureOptins[2];
                                }

                                //check for vendor consent, Dotmetrics vendor id 896
                                if(typeof tcData.vendor != 'undefined' && typeof tcData.vendor.consents != 'undefined' && tcData.vendor.consents[896]==true){
                                    //we have user consent
                                    callback(true);
                                }else{
                                    //we dont have user consent
                                    callback(false);
                                }
                            }
                            //This is the event status whenever the UI is surfaced or re-surfaced to a user.
                            if(tcData.eventStatus === 'cmpuishown'){
                                lr=true;
                                callback(false);
                            }
                        }else if(tcData.gdprApplies==false){
                            lr=true;
                            callback(true);
                        }else{
                            lr=true;
                            callback(false);
                        }
                    }
                });
            }else{
                //cmp does not use TCF
                callback(true);
            }
        }

        function start(hasConsent){
            var rand=new Date().getTime();
            var domain = window.location.hostname;
            var pageUrl = encodeURIComponent(window.location);
            var tzOffset= new Date().getTimezoneOffset();
            var doorUrl = 'http%3a%2f%2fuk-script.dotmetrics.net%2fdoor.js%3fd%3dwww.livescience.com%26t%3dlsci';

            var domainCookieEnabled = false;
            var useDomainCookie = hasConsent && domainCookieEnabled;
            var domainCookieData = getDomainCookie(useDomainCookie);
            var domainFph = getDomainFph(useDomainCookie);

            if(!hitDone){
                var dcOpt = useDomainCookie ? '&dc=' + domainCookieData.value : '';
                var imgUrl = 'https://uk-script.dotmetrics.net/hit.gif?id=5208&url=' + pageUrl + '&dom=' + domain + '&r=' + rand + '&pvs=' + pvs + '&ecid=' + ecid + dcOpt + '&c=' + hasConsent + '&tzOffset=' + tzOffset + '&doorUrl=' + doorUrl + '&dfph=' + domainFph+'&ver=345';
                if(sf2!=null){imgUrl+='&sf2='+sf2;}
                var im=new Image;
                im.src = imgUrl;
                im.onload = function (){im.onload=null};

                var panelImgUrl = 'https://rm-script.dotmetrics.net/hit.gif?id=5208&url=' + pageUrl + '&dom=' + domain + '&r=' + rand + '&pvs=' + pvs + '&pvid=' + ecid + '&c=' + hasConsent + '&tzOffset=' + tzOffset;
                var panelIm = new Image;
                panelIm.src = panelImgUrl;
                panelIm.onload = function (){panelIm.onload=null};
                hitDone=true;
            }

            if(pvs==2){return;}

            NewDotMetricsLoad(function () {
                if (document.createElement) {
                    if (typeof window.DotMetricsSettings == 'undefined') {
                        window.DotMetricsSettings =
                            {
                                Debug: false,
                                BaseUrl: 'https://uk-script.dotmetrics.net',
                                ScriptUrl:  'https://uk-script.dotmetrics.net/Scripts/script.js?v=345',
                                ScriptDebugUrl:  'https://download.dotmetrics.net/Script/script.debug.js?v=23c68371-9961-41b0-a73c-6fd1677d5ca7',
                                NCSScriptUrl: 'https://uk-script.dotmetrics.net/Scripts/ncs-script.js?v=345',
                                NCSScriptDebugUrl: 'https://download.dotmetrics.net/Script/ncs-script.debug.js?v=86ca0be9-c8f7-4d08-89d0-ff093ff87c73',
                                AdexConfigUrl: 'https://script.api/DotMetrics.Script.Adex/adexConfig.js?v=345&id=5208',
                                SiteSectionId: 5208,
                                SiteId: 935,
                                TimeOnPage: 'DotMetricsTimeOnPage',
                                AjaxEventTimeout: 500,
                                EventChainId:ecid,
                                DomainCookieData: domainCookieData,
                                AdexEnabled: false,
                                VideoTrackingEnabled: true,
                                VideoSearchEnabled: true,
                                DomainCookieEnabled: domainCookieEnabled,
                                ScriptVersion: 345,
                                UrlDecoratorEnabled: false
                            };

                        var scriptUrl;
                        var scriptType;
                        if(hasConsent==false){
                            if(window.DotMetricsSettings.VideoTrackingEnabled==true){
                                scriptType=window.location.href.indexOf('dotmetrics_debug=true') >= 0 ? 'NCSScriptDebugUrl' : 'NCSScriptUrl';
                                scriptUrl = window.DotMetricsSettings[scriptType];
                            }
                        }else{
                            scriptType=window.location.href.indexOf('dotmetrics_debug=true') >= 0 ? 'ScriptDebugUrl' : 'ScriptUrl';
                            scriptUrl = window.DotMetricsSettings[scriptType];
                        }

                        if(typeof scriptUrl != 'undefined'){
                            var fileref = document.createElement('script');
                                fileref.setAttribute('type', 'text/javascript');
                                fileref.setAttribute('src', scriptUrl);
                                fileref.setAttribute('async', 'async');
                                if (typeof fileref != 'undefined') {
                                    document.getElementsByTagName('head')[0].appendChild(fileref);
                                }
                        }

                        window.postMessage({ type: 'DotmetricsDoorEvent', siteId: DotMetricsSettings.SiteId, sectionId: DotMetricsSettings.SiteSectionId},'*');

                        

                        if(hasConsent!=false && window.DotMetricsSettings.AdexEnabled){
	                        fileref = document.createElement('script');
	                        fileref.setAttribute('type', 'text/javascript');
	                        fileref.setAttribute('src', window.DotMetricsSettings.AdexConfigUrl);
	                        fileref.setAttribute('async', 'async');
	                        if (typeof fileref != 'undefined') {
	                             document.getElementsByTagName('head')[0].appendChild(fileref);
                            }
                        }
                    }
                }
            });
        }
    }
    function getEventChainId(){
        var ecid;
        try{
            if(crypto.randomUUID){
                ecid=crypto.randomUUID();
            }else{
                ecid=([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c => (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16))
            }
        }catch(e){
            ecid = (Date.now().toString(36) + Math.random().toString(36).substr(2, 24));
        }
        return ecid;
    }
    function getDomainCookie(hasConsent){
        var ndc='00000000-0000-0000-0000-000000000000';
        var dcChanged=false;
        if(!hasConsent){return {value:ndc,changed:false}}
        var cn='DotMetrics.DomainCookie';
        var ckDc,lsDc,finalValue,finalTs;

        ckDc=getCkValue(cn);

        if(window.localStorage){
            try{
                lsDc=window.localStorage.getItem(cn);
            }catch(e) {}
        }

        try{ckDc=JSON.parse(ckDc);}catch(e){}
        try{lsDc=JSON.parse(lsDc);}catch(e){}

        if(validateDCObject(ckDc,ndc)){
            finalValue=ckDc.dc;
            finalTs=ckDc.ts;
        }else if(validateDCObject(lsDc,ndc)){
            finalValue=lsDc.dc;
            finalTs=lsDc.ts;
        }else if(ckDc&&ckDc.length==ndc.length){
            finalValue=ckDc;
            finalTs=new Date().getTime()-86400000;
        }else if(lsDc&&lsDc.length==ndc.length){
            finalValue=lsDc;
            finalTs=new Date().getTime()-86400000;
        }else{
            finalValue=ndc;
            finalTs=new Date().getTime();
            dcChanged=true;
        }
        updateDomainCookie(cn,finalValue,finalTs);
        return {value:finalValue,ts:finalTs,changed:dcChanged};
    }
    function validateDCObject(data,ndc){
        if(data!=null && typeof data === 'object' && typeof data.dc!= 'undefined' && data.dc!= null && data.dc.length==ndc.length
        && typeof data.ts != 'undefined' && typeof data.ts == 'number'){
            return true;
        }else{
            return false;
        }
    }

    function updateDomainCookie(cn,ndc,ts){
        var exdate = new Date();exdate.setFullYear(exdate.getFullYear() + 1);
        var data = JSON.stringify({dc:ndc,ts:ts});
        var value = data+'; expires='+exdate.toUTCString()+';path=/;secure;';
        document.cookie = cn + '=' + value + ';path=/;secure;';
        if(window.localStorage){
            try{ window.localStorage.setItem(cn,data); }catch(e) {}
        }
    }
    function getDomainFph(hasConsent) {
        if(!hasConsent){return '';}
        var dpfName='DotmetricsDomainFPH';

        var lsItem,cookieItem;
        try { lsItem= JSON.parse(window.localStorage.getItem(dpfName)); }catch (e) { lsItem = null; }
        try { cookieItem = JSON.parse(getCkValue(dpfName)); }catch (e) { cookieItem = null; }

        if(checkFPData(lsItem)){
            return lsItem.dfph;
        }else if(checkFPData(cookieItem)){
            return cookieItem.dfph;
        }

        return '';
    }

    function checkFPData(data) {
        if(data!=null && data.dfph!=null && data.dfph!='' && (data.dfph.length==40 || data.dfph.indexOf('_unstable')>-1)){
            return true;
          return true;
        }else{
          return false;
        }
      }

    function getCkValue(name) {
        var pairs = document.cookie.split(';'), pair, result = null;
        for (var index = 0, len = pairs.length; index < len; ++index) {
            pair = pairs[index].split('=');
            pair[0] = pair[0].replace(/^\s+|\s+$/, '');
            if (pair[0] === name) {
                result = pair[1];
            }
        }
        return decodeURIComponent(result);
    }
})(window);