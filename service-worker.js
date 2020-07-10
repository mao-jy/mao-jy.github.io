/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["D:/personal files/personal blog/hexo/public/2020/06/24/python-dl-reading-log-1/index.html","84caf94dfc839a5a84d27932367161bf"],["D:/personal files/personal blog/hexo/public/2020/06/24/python-dl-reading-log-1/keras_20200624.png","a425e39e2516c1ea496f886ac72d3606"],["D:/personal files/personal blog/hexo/public/2020/06/26/LeNet-5/LeNet_20200626.png","9d588975747ae79cb1064865d12a911b"],["D:/personal files/personal blog/hexo/public/2020/06/26/LeNet-5/LeNet_C3_20200626.png","f501ef502c672e66524bb567979ce4b6"],["D:/personal files/personal blog/hexo/public/2020/06/26/LeNet-5/LeNet_cover_20200626.png","65a8e30c5e90613a4fcd849220426ef9"],["D:/personal files/personal blog/hexo/public/2020/06/26/LeNet-5/index.html","3a67eaaf9be9a8dcc04192cb4dbd2e74"],["D:/personal files/personal blog/hexo/public/2020/06/27/AlexNet/AlexNet_20200627.png","c74908c788ed9e632049edd448b12005"],["D:/personal files/personal blog/hexo/public/2020/06/27/AlexNet/AlexNet_Andrew_Ng_20200627.png","328aacf49e1fc2bfa7e87fea2bb73c1f"],["D:/personal files/personal blog/hexo/public/2020/06/27/AlexNet/ReLU_20200627.png","e88ee1349e3b20965e723b8eca2a284f"],["D:/personal files/personal blog/hexo/public/2020/06/27/AlexNet/index.html","012ec58ac7096e9e85e439876294d638"],["D:/personal files/personal blog/hexo/public/2020/06/28/GoogLeNet/GoogLeNet_20200628.png","0cb304dde7b6a4e9b0014c9f3e366615"],["D:/personal files/personal blog/hexo/public/2020/06/28/GoogLeNet/GoogLeNet_parameter_20200628.png","e8fe889f59fb671cf6f21e8da5382f1e"],["D:/personal files/personal blog/hexo/public/2020/06/28/GoogLeNet/Inception_Naive_20200628.png","d95a4622f446b49b9a516609b49d8e95"],["D:/personal files/personal blog/hexo/public/2020/06/28/GoogLeNet/Inception_with_dimensionality_reduction_20200628.png","c0bafc6e86dd7d52cc60d685bc88a85b"],["D:/personal files/personal blog/hexo/public/2020/06/28/GoogLeNet/computational_cost_20200628.png","f259f93b14ec44ed65c1a1f62c4277cc"],["D:/personal files/personal blog/hexo/public/2020/06/28/GoogLeNet/computational_cost_with_dimensionality_reduction_20200628.png","bd251f136451a7be1bf711d33d80e7d1"],["D:/personal files/personal blog/hexo/public/2020/06/28/GoogLeNet/deeper_20200628.jpg","869f770d3fd83f645f3ecede043b4f7f"],["D:/personal files/personal blog/hexo/public/2020/06/28/GoogLeNet/index.html","06039accbd50719aa1a48bfad1b9c524"],["D:/personal files/personal blog/hexo/public/2020/06/28/GoogLeNet/sparse_matrix__20200628.png","03be4b0f8b42cbb4c9848055b6fe469a"],["D:/personal files/personal blog/hexo/public/2020/07/02/VGG/VGG-16_20200702.png","767f885cd3909cf73ac00114d362b895"],["D:/personal files/personal blog/hexo/public/2020/07/02/VGG/VGGNet_20200702.png","41a2e1b76d33c99e2211770a92ae51a3"],["D:/personal files/personal blog/hexo/public/2020/07/02/VGG/index.html","dfbee9fd16231f98b4e47f57d7d96e6a"],["D:/personal files/personal blog/hexo/public/2020/07/03/ResNet/Network_Degradation.png","44cd992ca0592d2a1fe4d8ab90536664"],["D:/personal files/personal blog/hexo/public/2020/07/03/ResNet/ResNet.png","1fc989dcc2f3c580b25b7176ca3d6468"],["D:/personal files/personal blog/hexo/public/2020/07/03/ResNet/ResNet50.png","9e448deeac6a83d299bc24ba6d9a0419"],["D:/personal files/personal blog/hexo/public/2020/07/03/ResNet/Residual_Block.png","3c8c8b2a32b648788fa15127ed466147"],["D:/personal files/personal blog/hexo/public/2020/07/03/ResNet/Shortcut_Connection.png","48d49951b41a1f9914a62fb89619406e"],["D:/personal files/personal blog/hexo/public/2020/07/03/ResNet/conv_block.png","845179e351303579d91d58d05fd7e07e"],["D:/personal files/personal blog/hexo/public/2020/07/03/ResNet/identity_block.png","1e8849abc534bf8507a9968c8adcc3fc"],["D:/personal files/personal blog/hexo/public/2020/07/03/ResNet/index.html","55e35e113408a90ec5c08a6a97bcb118"],["D:/personal files/personal blog/hexo/public/2020/07/05/python-dl-reading-log-2/index.html","8b36d9d53dc39c4989b61afcab083c4b"],["D:/personal files/personal blog/hexo/public/2020/07/05/python-dl-reading-log-2/keras.png","a425e39e2516c1ea496f886ac72d3606"],["D:/personal files/personal blog/hexo/public/2020/07/07/yolov3-cfg-analysis/index.html","7c4723a6e133fa8b277a2c7a5c5d357f"],["D:/personal files/personal blog/hexo/public/2020/07/07/yolov3-cfg-analysis/yolo.png","8e1969f18dd08ac8e3758796a84df922"],["D:/personal files/personal blog/hexo/public/2020/07/08/yolov3-backbone-neck/darknet53.png","90e90a6e870efa9e2f2661788823fe7f"],["D:/personal files/personal blog/hexo/public/2020/07/08/yolov3-backbone-neck/index.html","4ec5116396be7149cfcb975278901c58"],["D:/personal files/personal blog/hexo/public/2020/07/08/yolov3-backbone-neck/yolo.png","8e1969f18dd08ac8e3758796a84df922"],["D:/personal files/personal blog/hexo/public/2020/07/08/yolov3-backbone-neck/yolov3.png","6df611b189adc5993d4d65a9ee0f1c77"],["D:/personal files/personal blog/hexo/public/2020/07/10/yolov3-head-loss/index.html","c17d6cb043b891bfcb94c084b814b871"],["D:/personal files/personal blog/hexo/public/2020/07/10/yolov3-head-loss/yolo.png","8e1969f18dd08ac8e3758796a84df922"],["D:/personal files/personal blog/hexo/public/404.html","7aba1859ecf0376797494b7ae22b53f1"],["D:/personal files/personal blog/hexo/public/archives/2020/06/index.html","91e5caf3e06d9ec4a99cffb70c676e65"],["D:/personal files/personal blog/hexo/public/archives/2020/07/index.html","2c983ad2923c85135ba4a667c852ebf4"],["D:/personal files/personal blog/hexo/public/archives/2020/index.html","3aae948d48867796482109824554663e"],["D:/personal files/personal blog/hexo/public/archives/index.html","47905c6886ed6e40f07df12de930f933"],["D:/personal files/personal blog/hexo/public/categories/index.html","54fc18e5d8b73d67816f8c49700b7e70"],["D:/personal files/personal blog/hexo/public/categories/模型实现/index.html","05d530a64864ffdfbbf6a3c23b417e8b"],["D:/personal files/personal blog/hexo/public/categories/模型解析/index.html","577b3681e21e2389a430d656e534218c"],["D:/personal files/personal blog/hexo/public/categories/阅读记录/index.html","9b429734dd3bb128bdfa9dc2bc9ff2da"],["D:/personal files/personal blog/hexo/public/css/footer.min.css","be0a0c9e0dbc32e2dd2332aa11b0301b"],["D:/personal files/personal blog/hexo/public/css/index.css","9e794b98bd342a45f82f534f745f79c5"],["D:/personal files/personal blog/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["D:/personal files/personal blog/hexo/public/img/404.jpg","4ef3cfb882b6dd4128da4c8745e9a507"],["D:/personal files/personal blog/hexo/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["D:/personal files/personal blog/hexo/public/img/alipay.png","9ff3cb1ef0c26eae8014d171f7706676"],["D:/personal files/personal blog/hexo/public/img/avatar.jpg","cd43a801eab071d5d651713ddb0a841e"],["D:/personal files/personal blog/hexo/public/img/favicon.jpg","90884cbf8cafacfeb785b76b50ca7a9b"],["D:/personal files/personal blog/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["D:/personal files/personal blog/hexo/public/img/loading.gif","232c10434108c414914474d6d2c9d78c"],["D:/personal files/personal blog/hexo/public/img/wechat.png","0f1551e79ee57f3af7624cc27b62cc06"],["D:/personal files/personal blog/hexo/public/index.html","688fff10c263660fb1e2ae701f7ffe1c"],["D:/personal files/personal blog/hexo/public/js/classify.js","bc737bcf95f572496a9ef54e8bf02a67"],["D:/personal files/personal blog/hexo/public/js/jsdelivr.js","ee70cdb5f73763f6c4c08222b6b56c71"],["D:/personal files/personal blog/hexo/public/js/main.js","9ae2856869433ab1770b105c639b7710"],["D:/personal files/personal blog/hexo/public/js/search/algolia.js","d50c62e5d368a89a795f652e8600dd8f"],["D:/personal files/personal blog/hexo/public/js/search/local-search.js","271777e2b46e5743942ca9ac31baff15"],["D:/personal files/personal blog/hexo/public/js/third-party/ClickShowText.js","22f4c82da4faed04c79e61fcbbdf675c"],["D:/personal files/personal blog/hexo/public/js/third-party/activate-power-mode.js","e8455f75769585811cd6b3220787d08e"],["D:/personal files/personal blog/hexo/public/js/third-party/canvas-nest.js","bb643bd9c2ac59f6ce2a1251b8014624"],["D:/personal files/personal blog/hexo/public/js/third-party/canvas-ribbon.js","f6cac3572847858e5b8edb3e6894f5ad"],["D:/personal files/personal blog/hexo/public/js/third-party/click_heart.js","c2420dfec66aa5bad663e6c365a129c8"],["D:/personal files/personal blog/hexo/public/js/third-party/fireworks.js","080fdfcacffc6828826484645140af50"],["D:/personal files/personal blog/hexo/public/js/third-party/piao.js","6df6ba5f90c4dff026fc3eea73933e8b"],["D:/personal files/personal blog/hexo/public/js/tw_cn.js","de2abf47a3e2ff88c167a78a3256a0cd"],["D:/personal files/personal blog/hexo/public/js/utils.js","fcbf12c4fd30e2c08400527366b20acc"],["D:/personal files/personal blog/hexo/public/link/index.html","dee7086ff65483a101bdc9c1dec81325"],["D:/personal files/personal blog/hexo/public/tags/CNN/index.html","aa3f388ede700ef65e784b3864d2d6d5"],["D:/personal files/personal blog/hexo/public/tags/CNN五大经典模型/index.html","0b2f84309d091a2cc5d59f3b6431f2ea"],["D:/personal files/personal blog/hexo/public/tags/Deep-Learning/index.html","d336409f78f03f8d4c0899f535e08306"],["D:/personal files/personal blog/hexo/public/tags/Keras/index.html","96cf126d6418bed77b1e589f98df5f2c"],["D:/personal files/personal blog/hexo/public/tags/Object-Detection/index.html","878d48e3eec1419092be0db33446cc85"],["D:/personal files/personal blog/hexo/public/tags/Python/index.html","806ef4c8a7a712a7aa2382c436fa30a2"],["D:/personal files/personal blog/hexo/public/tags/Tensorflow/index.html","3e8a7112a9090f648e2df801ecc834e1"],["D:/personal files/personal blog/hexo/public/tags/index.html","a8229ae75efe4d69bc471d5178261373"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







