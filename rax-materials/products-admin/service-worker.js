"use strict";var precacheConfig=[["/ice/rax-materials/products-admin/favicon.png","0d4cca8dcc3deff70425210396f97a03"],["/ice/rax-materials/products-admin/images/alert-cc2b3de1.png","cc2b3de182e48ba11b409194542c2259"],["/ice/rax-materials/products-admin/images/avatar-44478d27.png","44478d278bc5b625667a7d3546c0f89b"],["/ice/rax-materials/products-admin/images/colum-height-b9e1bdea.png","b9e1bdeaf6469feb8801c6ff337f9768"],["/ice/rax-materials/products-admin/images/edit-square-94f5b359.png","94f5b359b593c22b0fb6f4cd23cc5510"],["/ice/rax-materials/products-admin/images/icons/icon-128x128.png","b57be776006e9f6d03dd474a5056f1b1"],["/ice/rax-materials/products-admin/images/icons/icon-144x144.png","fb496b753a6e98c0b94c5bac70716243"],["/ice/rax-materials/products-admin/images/icons/icon-152x152.png","4b19f343321ef4252c1355055bd37e6b"],["/ice/rax-materials/products-admin/images/icons/icon-192x192.png","10e08149886fe7bab53a5129bb816d95"],["/ice/rax-materials/products-admin/images/icons/icon-384x384.png","1d47255a502d9817a71d3d87d8c9e1d7"],["/ice/rax-materials/products-admin/images/icons/icon-512x512.png","2a1f755aa55f24023788feb696cda025"],["/ice/rax-materials/products-admin/images/icons/icon-72x72.png","195ecd89be117baf5ceac2a97a5ed3b5"],["/ice/rax-materials/products-admin/images/icons/icon-96x96.png","31e0f34da6949ee21607d28b7b7acd2c"],["/ice/rax-materials/products-admin/images/issues-close-e2dda16c.png","e2dda16cd874f8dc66c4d569c2bfb704"],["/ice/rax-materials/products-admin/images/mobile-6f58281b.png","6f58281bb69cad48fa2b38aeab0fa558"],["/ice/rax-materials/products-admin/images/not-found-4fc3e7d8.png","4fc3e7d83a32de31050d10727fefe786"],["/ice/rax-materials/products-admin/images/security-scan-51e12625.png","51e126251e55f3fb52df41149770663e"],["/ice/rax-materials/products-admin/images/star-2e6c5d88.png","2e6c5d88f40d6bbf0ee08eaf19e8191c"],["/ice/rax-materials/products-admin/images/tag-5f6dfe9f.png","5f6dfe9f162cf953b19c54af6e6bac2f"],["/ice/rax-materials/products-admin/images/warning-88105f00.png","88105f00ce01cba3e8e4f4ad572848b2"],["/ice/rax-materials/products-admin/index.html","a38273dd966fbd80aa5138f9a890da74"],["/ice/rax-materials/products-admin/js/atag.js","a77b5510dcff65e53cc87169b45d93b4"],["/ice/rax-materials/products-admin/js/index.min.js","42a2c8e9d17a1624808f4483bb935cf6"],["/ice/rax-materials/products-admin/js/vendor.js","419a554a58d3184432c66f0272e755d7"],["/ice/rax-materials/products-admin/manifest.json","62b40e7c1f8bc8e38fdb30f369d2ecfe"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=a),n.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,n,r){var t=new URL(e);return r&&t.pathname.match(r)||(t.search+=(t.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(n)),t.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var n=new URL(a).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,a){var n=new URL(e);return n.hash="",n.search=n.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),n.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],n=e[1],r=new URL(a,self.location),t=createCacheKey(r,hashParamName,n,/\.\w{8}\./);return[r.toString(),t]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n){if(!a.has(n)){var r=new Request(n,{credentials:"same-origin"});return fetch(r).then(function(a){if(!a.ok)throw new Error("Request for "+n+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(n,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(n){return Promise.all(n.map(function(n){if(!a.has(n.url))return e.delete(n)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,n=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);(a=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,"index.html"),a=urlsToCacheKeys.has(n));0,a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});