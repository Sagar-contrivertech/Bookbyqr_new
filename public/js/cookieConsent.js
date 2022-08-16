function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;domain=.zasta.de;";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return null;
}

function saveAllowedURLParamsAsCookie(allowedURLParams) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    allowedURLParams.forEach(function (urlParam) {
        if (urlParams.get(urlParam)) {
            setCookie(urlParam, urlParams.get(urlParam), 90);
        }
    });
}

function addCookieToUrl(cookieName, url) {
    url = new URL(url);
    const cookieValue = getCookie(cookieName);
    if (cookieValue) {
        url.searchParams.set(cookieName, cookieValue);
    }
    return url.toString();
}

var captureOutboundLink = function (url) {
    // add affiliate link data from landing page url
    if (url.includes("register")) {
        let sId = getCookie("affiliate_id");
        if (!sId) {
            sId = window.localStorage.getItem('affiliate_id');
        }
        if (sId) {
            url = url + "?s_id=" + sId;
        }
        url = addCookieToUrl("utm_medium", url);
        url = addCookieToUrl("utm_source", url);
        url = addCookieToUrl("utm_campaign", url);
        url = addCookieToUrl("utm_term", url);
        url = addCookieToUrl("utm_content", url);
        url = addCookieToUrl("gclid", url);
    }

    if (window.gtag) {
        // add a timer just to be sure the user is directed to the
        // outbound link
        const timeout = setTimeout(() => document.location = url, 2000);
        gtag('event', 'click', {
            event_category: 'outbound',
            event_label: url,
            event_callback: () => {
                clearTimeout(timeout)
                document.location = url
            }
        })
    } else {
        document.location = url;
    }
}

$(document).ready(function () {
    const statsInputEl = $('#input-stats');
    const marketingInputEl = $('#input-marketing');

    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    let sId = urlParams.get('s_id')
    if (sId) {
        setCookie("affiliate_id", sId, 90);
        window.localStorage.setItem('affiliate_id', sId);
    }

    const initBingUet = function () {
        (function (w, d, t, r, u) { var f, n, i; w[u] = w[u] || [], f = function () { var o = { ti: "134600389" }; o.q = w[u], w[u] = new UET(o), w[u].push("pageLoad") }, n = d.createElement(t), n.src = r, n.async = 1, n.onload = n.onreadystatechange = function () { var s = this.readyState; s && s !== "loaded" && s !== "complete" || (f(), n.onload = n.onreadystatechange = null) }, i = d.getElementsByTagName(t)[0], i.parentNode.insertBefore(n, i) })(window, document, "script", "//bat.bing.com/bat.js", "uetq");
    }

    const initFacebookPixel = function () {
        !function (f, b, e, v, n, t, s) {
            if (f.fbq) return;
            n = f.fbq = function () {
                n.callMethod ?
                    n.callMethod.apply(n, arguments) : n.queue.push(arguments)
            };
            if (!f._fbq) f._fbq = n;
            n.push = n;
            n.loaded = !0;
            n.version = '2.0';
            n.queue = [];
            t = b.createElement(e);
            t.async = !0;
            t.src = v;
            s = b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t, s)
        }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');

        fbq('init', '189878868046050');
        fbq('track', 'PageView');
        fbq('track', 'ViewContent', {
            content_name: 'Landing1'
        });
    };

    const initGoogleAnalytics = function () {
        const gaScriptTag = document.createElement('script')
        gaScriptTag.setAttribute('async', '')
        gaScriptTag.setAttribute('src', `https://www.googletagmanager.com/gtag/js?id=AW-723390317`)
        document.body.appendChild(gaScriptTag)
        
        window.dataLayer = window.dataLayer || [];
        window.gtag = function() { window.dataLayer.push(arguments) }
        gtag('js', new Date())
        gtag('set', 'linker', { 'domains': ['app.zasta.de', 'www.zasta.de', 'steuern.zasta.de'] })
        gtag('config', 'UA-88270645-1', { send_page_view: true });
    };

    const initGoogleUTM = function () {
        const allowedURLParams = ['utm_medium', 'utm_source', 'utm_campaign', 'utm_term', 'utm_content', 'gclid'];
        saveAllowedURLParamsAsCookie(allowedURLParams);
    }

    const initTaboola = function () {
        window._tfa = window._tfa || [];
        window._tfa.push({ notify: 'event', name: 'coldhome_page_view', id: 1326473 });
        !function (t, f, a, x) {
            if (!document.getElementById(x)) {
                t.async = 1;
                t.src = a;
                t.id = x;
                f.parentNode.insertBefore(t, f);
            }
        }(document.createElement('script'),
            document.getElementsByTagName('script')[0],
            '//cdn.taboola.com/libtrc/unip/1326473/tfa.js',
            'tb_tfa_script');
    };

    const initTikTok = function () {
        !function (w, d, t) {
            w.TiktokAnalyticsObject = t;
            var ttq = w[t] = w[t] || [];
            ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"], ttq.setAndDefer = function (t, e) {
                t[e] = function () {
                    t.push([e].concat(Array.prototype.slice.call(arguments, 0)))
                }
            };
            for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
            ttq.instance = function (t) {
                for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++
                ) ttq.setAndDefer(e, ttq.methods[n]);
                return e
            }, ttq.load = function (e, n) {
                var i = "https://analytics.tiktok.com/i18n/pixel/events.js";
                ttq._i = ttq._i || {}, ttq._i[e] = [], ttq._i[e]._u = i, ttq._t = ttq._t || {}, ttq._t[e] = +new Date, ttq._o = ttq._o || {}, ttq._o[e] = n || {};
                n = document.createElement("script");
                n.type = "text/javascript", n.async = !0, n.src = i + "?sdkid=" + e + "&lib=" + t;
                e = document.getElementsByTagName("script")[0];
                e.parentNode.insertBefore(n, e)
            };
            ttq.load('C35HUQNG09FB96L8V0F0');
            ttq.page();
        }(window, document, 'ttq');
    }

    const initReferrerPassThrough = function () {
        if (document.referrer) {
            setCookie('referrer', document.referrer, 1);
        }
    }

    const setConsentSettings = function () {
        const stats = statsInputEl.is(':checked');
        const marketing = marketingInputEl.is(':checked');
        setCookie('CookieConsent', true, 365 * 2);
        setCookie('CookieConsent_stats', stats, 365 * 2);
        setCookie('CookieConsent_marketing', marketing, 365 * 2);

        try {
            trackCookieConsentSetting(stats, marketing)
        } catch (e) {
        }
    };

    const applyConsentSettings = function () {
        const statsOn = getCookie('CookieConsent_stats') === 'true'
        const marketingOn = getCookie('CookieConsent_marketing') === 'true'
        if (statsOn) {
            initGoogleAnalytics();
        }
        if (marketingOn) {
            initGoogleUTM();
            initFacebookPixel();
            initBingUet();
            initTaboola();
            initTikTok();
            initReferrerPassThrough();
        }
    };

    const trackCookieConsentSetting = function (statsOn, marketingOn) {
        if (statsOn && marketingOn) {
            $.get('https://track.zasta.de/cookie-consent/all_confirmed')
            return
        }

        if (statsOn) {
            $.get('https://track.zasta.de/cookie-consent/stats_confirmed')
            return
        }

        if (marketingOn) {
            $.get('https://track.zasta.de/cookie-consent/marketing_confirmed')
            return
        }

        $.get('https://track.zasta.de/cookie-consent/essential_confirmed')
    }

    $('#cookieConsentEdit').on('click', function () {
        $('#cookie-settings').toggleClass('hidden', false);
        $('#cookieConsentEdit').toggleClass('hidden', true);
        $('#cookieConsentSave').toggleClass('hidden', false);
    });

    $('#cookieConsentSave').on('click', function () {
        setConsentSettings();
        $('#cookie-info').hide();
        applyConsentSettings();
    });

    if (!getCookie('CookieConsent') || !getCookie('CookieConsent_stats') || !getCookie('CookieConsent_marketing')) {
        $('#cookie-info').show();
    } else {
        applyConsentSettings();
    }

    $('#cookieConsentAccept').on('click', function () {
        statsInputEl.prop('checked', true);
        marketingInputEl.prop('checked', true);

        setConsentSettings();
        applyConsentSettings();

        setTimeout(function () {
            $('#cookie-info').hide();
        }, 300);
    });
});
