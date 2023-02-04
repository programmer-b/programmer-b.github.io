'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "9bffe0e36d93e8d8fabed03021abc130",
"index.html": "3ee04ac9d42089ffe839620a0e997fc4",
"/": "3ee04ac9d42089ffe839620a0e997fc4",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"main.dart.js": "482d237ca92602f0243c5d9b20a3828c",
"assets/shaders/ink_sparkle.frag": "f02dd83e35239f7f3a81e95f12b7480c",
"assets/AssetManifest.json": "92bcbcafd05694251587b4611fc9ff77",
"assets/assets/images/rose-symbol-valentines-day.png": "1578f9368dbf70c355610c7d5da08fc2",
"assets/assets/images/web/icon-512.png": "4bd3b030406e17eca5fe0efdb6410735",
"assets/assets/images/XNUrSP.jpg": "e9cd2b2a461bb41010234b3d923660bd",
"assets/assets/images/happy-valentines-day-rose.gif": "242c967e332f1f6918bb41d6fd79399c",
"assets/assets/images/valentines.jpg": "8f3549574e1f1eb9268de01dd0e216b9",
"assets/assets/images/pngtree-half-a-piece-of-paper-torn-from-the-notebook-png-image_2367501-removebg-preview.png": "9ce5cd11733700d4b09a1c24b345e17e",
"assets/assets/images/collection-3d-gift-boxes_91128-1024.png": "2719a6c174893eb16f7825a4628518a3",
"assets/assets/images/beautiful_flower.png": "28aaa560ded069515ad07da4bbaf780d",
"assets/NOTICES": "3cdf9ba51cc607fdc4c866f70485a07c",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "48ce1bb8a42776caa951cb782d277730",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "99f29024aee8f4672a47cc3a81b9b84a",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "d8e9b6203ce2657c991f0b339ccb3a6d",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"README.md": "323d6778faa17bef09661ec02d199979",
"icons/Icon-maskable-512.png": "e61ec42b035e308a1c2ff4a94d6ca86f",
"icons/Icon-512.png": "e61ec42b035e308a1c2ff4a94d6ca86f",
"icons/Icon-192.png": "5be66d1a84aacd3460fb1ffb45ec1c05",
"icons/Icon-maskable-192.png": "5be66d1a84aacd3460fb1ffb45ec1c05",
".git/config": "341d354b6f242e7cd133fb3d855147e0",
".git/FETCH_HEAD": "aedab49dd5ab6d5416b0c0a2fcd009cb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/remotes/origin/main": "74743416f6f431281129653b86d22a01",
".git/refs/heads/main": "74743416f6f431281129653b86d22a01",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/index": "56ce35fcf092f5c723d3f90175d82494",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/objects/40/831c9cc55170bc38ec173032a35b04b719aefb": "a2e4ea5ce208baae93465949bb8df305",
".git/objects/36/6a05c78baab95ffc534bc71d9922075060baaf": "d0ee958cf3d2dc47467683e19fa4c8f0",
".git/objects/30/74dc26d940eba09ffa807d82fa01de33f8234d": "9c4323dfe1aabc3ceb2e111ef0dec217",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/45/65edefd3b75d502c79361db8309b06cf3a480a": "42c7ab1d99caee2ea90292d8cdbad2e6",
".git/objects/73/1b4fe59e56598a6b93f0da1458283633e6fe65": "237fa10cd0886658188687656e54d5ae",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/f9357773ac8ba6f070c6c22a6a4ca73df6d322": "40fb0b9ec7f913aa0f7276904f4b9120",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/44f61ab208487007ff12c8e19af1a346d568cb": "4008f49a5394df7dd2cd3ae47ada79b6",
".git/objects/54/31e2c18f4995e97df6c1127b448702df047f2d": "5145415c80d9521c3c3dc0e6fd38e6a2",
".git/objects/6c/34989ca0d5cc485b70887579b3ec7da622a91d": "659848a2449011a8bf68c0d684204bb1",
".git/objects/08/074e0651ae473ce5b3bfd5bf895cb3b81575a9": "bda106bdc4a184b63f778f38b1c8b256",
".git/objects/ef/aae27ff17bc64c71e40f04a17f64f761788ebe": "ebe8f84c308232f0452f9bd29eb6ae3e",
".git/objects/b4/1effecb81579cb0bebe7548f3d041cfc5adea1": "f2a170e41775663843ceaae546e131fd",
".git/objects/05/baeb327b2fb92ddef6b46ad32c5c30c2e9a007": "32a40eb46560928cbe1e6dadb0ee30f4",
".git/objects/51/5cd0cecc45527e1e5a39dc94f9f66c2ac22b90": "3e554e25be1d8eacdb346dc3ea17e978",
".git/objects/a5/47d7530b17547f40e077669375b1875461b335": "9e2b85de372e6f80ffa977145f86f3c4",
".git/objects/10/323badd86a67b74526722162820c2bdbb86507": "3478f19dacc0f88a052e560e94cb0f5c",
".git/objects/28/5d3b3a65eb455d410c3bf31fccc8dbbc8cbdbc": "8f13b3e9424f71d09fc00a1d9e39692c",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/8a/5c73192dfd379416217cd420387b45e37e03d0": "56be3dbe3b9c4ae1782dd0ab1c774acf",
".git/objects/74/e5063402edaa08ecf79f55d7332818394db551": "54b284a63d94b61ea2ba17c537088595",
".git/objects/88/f97d63ff43580e30d6bc42fbfb0704a3059c14": "b9c16acb0e508428663c6b9243245772",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/b5/71c2f113356569ae03154868117868c37c9de0": "200e61911b63a8c1bbe6ace519956436",
".git/objects/37/0059dfa2bfa6a56478dc930e84e9252292cd65": "4d1aa0fbe539c95b722933a698c85de8",
".git/objects/33/1bf5e827997cf3efb762b3e1ec36436773fd00": "b8d2119e473c647e7fbc02ede7ec9360",
".git/objects/0c/06cc9dcb311cc6f336b508d89a9a2f1a728feb": "9be736682068cae9780aac128233b79b",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/be/667c823d5a0d8e93bcba3c72b3a60378571a0b": "af1be81f2d8f4c0e1a21647a77874076",
".git/objects/ad/0bf02c3e886089e83316675fe54b23964569dd": "642130cf247d69781832996d14529869",
".git/objects/55/9d3537863ea51518fd7baf7d822a08090d6a23": "477a97e364f1295dc29ec5a0194c7fc8",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/0e/1b16b929df2c8f2ed28ffcdcdbaa6f7cdf5a7d": "c188fece68947ce0350f6c9f4363a2e2",
".git/objects/0e/24afdcd1c40bc76b4188231487ca1ddad73838": "eabc744a80ca491bfe4efc5e2a2fdce5",
".git/objects/99/c166998a56308f33f72ab5597a415201e2349c": "749273490903db1dbb567d92c670b57b",
".git/objects/bf/b34b1d678c1de94ad5a4c659a165e3a8018c38": "1eff6aa3b513324b37786ae0a4a4accf",
".git/objects/8b/81d10a25b91f0ee258b793c50197b2a3aacb06": "b13370eb0999f248b305c2c411960c19",
".git/objects/a1/56d813c8a397d7ed06840bdb78b0814c5195cf": "0962b9188afe4ba188daff8ea5dca344",
".git/objects/a1/6eb307a0aaa0b12aba3d3237417feb41342fa7": "cb3ba67d161446f74f47fc7feaff90ff",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/66/ced856b6176047793b33ac6a1e3de2206921e8": "ed34d32e897b82a8fa359f69a13945c0",
".git/objects/81/f8da657f4d111d76b4d2cd5a7411b77310dc0d": "8b8ee3407d538b030f8eb735009c6074",
".git/objects/a6/15776afd8be51486d94996a31ffc07e0ae49da": "0f08b25357829ad8becd274d1434f848",
".git/objects/a6/baade4eca5aa1979ff83117377f167be56043d": "de5bf01621a411e10614e8c45a91cb59",
".git/objects/3d/3ee4a025d1a1fec87536562b0afd3dfab395d8": "218dfe4f265f5332ac4dc38e673346cc",
".git/objects/d2/e239731df1e72cb9a7ef0d2e9d3f3e592a9445": "f9b6ab67d73a4a881bbbda0f413cfad0",
".git/objects/f1/6b586918ae57b838e8c23711d7ff36727d69ca": "75d81a07f217b8831742764c638708b6",
".git/objects/e7/c9ab069bf1361592a41151ababc07b6084501f": "9e9f186ddff4e890a6a895e244d68a35",
".git/objects/35/96be640b965445a44420c39a699d4f326030f6": "5652cbb91ac3ba6be5078c3ca83d3616",
".git/objects/e5/ac305b546caf6cdf315ddf177b1e7af3d10209": "a0489f9daa6d8a8af809677fb3a625e4",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ba/011daaea03570ea674e626ee585ae1d964b9b1": "2051c0136a513b176afb730298746889",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/f3/625154f285fd746a8d117ed49746b9e05027ed": "a6cfa17859c6e11af8447f62eae7eef2",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/COMMIT_EDITMSG": "7dd3974197b3eb41ba21d031cd162099",
".git/logs/refs/remotes/origin/main": "86b99c5eb34d5fe951c68f101bf8165d",
".git/logs/refs/heads/main": "22106fd63af31caac9d9b7dd02bdf6cf",
".git/logs/HEAD": "d981f3a8ffe037e0ac7272159a17b090",
"manifest.json": "b8e131d008513a7e4fe9a136fcf5274e",
"favicon.png": "e6d0624fdc9f095ec35f5e2459656a5d"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
