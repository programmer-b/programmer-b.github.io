'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "9bffe0e36d93e8d8fabed03021abc130",
"index.html": "c105a53cea73c35db8070045887f0ea3",
"/": "c105a53cea73c35db8070045887f0ea3",
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
"README.md": "cc9496bff076bd1deb3ac2a9d45334e4",
"icons/Icon-maskable-512.png": "e61ec42b035e308a1c2ff4a94d6ca86f",
"icons/Icon-512.png": "e61ec42b035e308a1c2ff4a94d6ca86f",
"icons/Icon-192.png": "5be66d1a84aacd3460fb1ffb45ec1c05",
"icons/Icon-maskable-192.png": "5be66d1a84aacd3460fb1ffb45ec1c05",
".git/config": "3a6f695698a5831d26397fdaac963577",
".git/FETCH_HEAD": "c0855ea35ddb736a8c1c33a3df8c1f75",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/refs/remotes/origin/main": "2e5940b6c507769e328291c14f6c09fe",
".git/refs/heads/main": "2e5940b6c507769e328291c14f6c09fe",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/index": "d01fec790904ed73b880fe32eb41d2d3",
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
".git/objects/30/74dc26d940eba09ffa807d82fa01de33f8234d": "9c4323dfe1aabc3ceb2e111ef0dec217",
".git/objects/8e/23b40a73a404bb5a3163a7798438ec072062fb": "ace88fe45235d46fda4cbff93bee56e1",
".git/objects/22/46d0c71ff0d23b4ee1dea5049d53647589aafe": "c67370000ed72dac1951de5f1249a700",
".git/objects/b0/0bc152af2a5fb97dfba543765dca03cb4b19c0": "24a1c731a574ef30d65e1ddb434c4325",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/73/aa48028b47588106fee37850110a60323e8bd9": "6d7e216bc3386604dfae6303080a55d9",
".git/objects/73/1b4fe59e56598a6b93f0da1458283633e6fe65": "237fa10cd0886658188687656e54d5ae",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/cd/617bd22236714089916c164af3227b62e358d8": "bc0521b4d8ffe4511236198df5938a59",
".git/objects/cd/f9357773ac8ba6f070c6c22a6a4ca73df6d322": "40fb0b9ec7f913aa0f7276904f4b9120",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/79/44f61ab208487007ff12c8e19af1a346d568cb": "4008f49a5394df7dd2cd3ae47ada79b6",
".git/objects/4b/a4eacd1f5c3a77ffe8591ad987d047d0956aea": "fdd2ae878f624e1111ed6e6a6d85f975",
".git/objects/7b/c50c125afb1d6f7cec1eb1301186d689e94dd9": "b23aae9615b401ddfa4059ba44d45a5f",
".git/objects/e2/e3a0238336e8f1e7fec772f33c9af692c45f5c": "810a726bab207441d6ea163c482641df",
".git/objects/e6/6a2c57e43976d7b95b3121fc1ef43e717ea72b": "27767c3270fcffc641d9ed098454b306",
".git/objects/4f/858f12583bc8f4e70ae2dd5bdec5a322d6bb97": "9782579f4a3e74d1d86083e0a2b3bb23",
".git/objects/ef/aae27ff17bc64c71e40f04a17f64f761788ebe": "ebe8f84c308232f0452f9bd29eb6ae3e",
".git/objects/b4/d3fb3bdd61bfb625efe8983f321902415b4706": "14c4259d0cf49e173e1c6e7afe576797",
".git/objects/51/042d0b9eb26f18cf0092dd44510ae26cebb079": "c8ea519cde3ade362de64bae289358d6",
".git/objects/a5/47d7530b17547f40e077669375b1875461b335": "9e2b85de372e6f80ffa977145f86f3c4",
".git/objects/e8/64d7200aad61450532af3aea9fbcab8ec4c0b3": "e1177ff0092b8b7d37c0b9a2079e6e79",
".git/objects/8c/4725325f7e093209c7b76d9bd9bf5802ede549": "ab6eb547dc555be2382ba85f5378c1e8",
".git/objects/10/323badd86a67b74526722162820c2bdbb86507": "3478f19dacc0f88a052e560e94cb0f5c",
".git/objects/71/a795f59dd16c3e9fca7b45c75f82840ca23cbd": "81f40bb6da3fdf0f796766454436b2fd",
".git/objects/fc/aebfdb4961347653186595b2a9896472525b60": "e20df2f9752fb340c9c8a7b3d9bb4bb5",
".git/objects/6e/bbd767e0b4df4b7ca63e1d4e4da156b814493d": "b6517571042b381d6162487e12333dca",
".git/objects/c6/014005a7f2fd7c132ea6103635c3bdb15ee5e6": "24a06de698a648b675516dcbdc56f1fe",
".git/objects/f2/98772edfac4df08ac6ef497c5c53ddfa2d6e09": "b12bacb9750b030b0e37c7d5cc95f933",
".git/objects/f2/0272301f8baa76a2c8252c3e815764327e6ea7": "1983fc187df6c5b715198154b1962a64",
".git/objects/28/5d3b3a65eb455d410c3bf31fccc8dbbc8cbdbc": "8f13b3e9424f71d09fc00a1d9e39692c",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/de/3435c82594a80d4ac8c106a2a2ccabd551ee8a": "bfb30fd78583c0558ed55effa426c2e0",
".git/objects/de/faa84da68d9da1f21da385969002214ba6758e": "12217f4057db4cb8116db385e07d58f6",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/3c/7861922d1045d5d81fdc1b1ec989a78af7948c": "14d1754b3f08279c4a4630cbfade5b8a",
".git/objects/6b/7627b668d8be356136a952b6aaeccf94d2dc91": "ee0410bb83f3c2cd7c22a5b2f8923016",
".git/objects/8a/755e0f29bcd98d948cf21cfa1fa19cb35ef703": "d57519d0c9e8f2f6be70097512a1a2d9",
".git/objects/8a/5c73192dfd379416217cd420387b45e37e03d0": "56be3dbe3b9c4ae1782dd0ab1c774acf",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/74/e5063402edaa08ecf79f55d7332818394db551": "54b284a63d94b61ea2ba17c537088595",
".git/objects/88/f97d63ff43580e30d6bc42fbfb0704a3059c14": "b9c16acb0e508428663c6b9243245772",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/dc/e992c231cf38064c1342854d546653a2ffbfcd": "4c58358fc037640116654120719d051f",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/b5/4ef72909c5e18d7f6ec46c7829cd5ee2e6081c": "dd905923a91e0179d32747ef4d16c4b8",
".git/objects/b5/71c2f113356569ae03154868117868c37c9de0": "200e61911b63a8c1bbe6ace519956436",
".git/objects/a0/4bae67747d75b29f2ff306e44a9c3f8363eeb8": "1793bc84dcba4ca70bf9505b3eadd4da",
".git/objects/77/1c2835f9bfea0e25925bdaaad22806f10be458": "61f63a48f9412c590b986c093f711922",
".git/objects/d3/6f61df9be0246e42944ccec829334ea4e95ec9": "4860e1e0ccd8239e049f4062758043c8",
".git/objects/d1/496ca2ac48996569f05764b4f7ef58f420c948": "d5a1f8c73d2c7684493822d724267ee8",
".git/objects/33/1bf5e827997cf3efb762b3e1ec36436773fd00": "b8d2119e473c647e7fbc02ede7ec9360",
".git/objects/4d/bf3109f0249f40314f6d92a66bca9a5741173d": "3794ca4ec2583dd95371f6a6bebb2843",
".git/objects/fd/f7795bac7556ea5a43343224a1e3afc52b9d10": "a882e7d251b096c25473294dc09ebbf8",
".git/objects/0d/de4b37f1943f175b44d73d5ec0c3231af0ee4e": "48bdfaf9b34fa2ebbed5c3f074220403",
".git/objects/4c/2359957a093fe58b736cd6873102acd85357b3": "a88bd9a70a5b1c34375fd412eb84c0e6",
".git/objects/ff/4e20a372898f45784b94d6cde833f709b15ad7": "34b384780bda7f69d5b3c08401d84e73",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/b2/17413e7de224f13a5e44b0eca780b284426292": "acc9d8a9002019d1d2fcb243f0a69b93",
".git/objects/b2/11ebf4bed2d99ce89b0825636a066fb8fa54ce": "9a1bc815aa17dc3bac807f5b8267d565",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/06/3ed505bc0874c9d458455901d7eaf651f5a27e": "33b021f2c9a17f507b1db1c56ccc92ad",
".git/objects/34/6b21c6aedc4156aeefbf23bcaf0ad31f2ef648": "90a858631d0056f3fcdd1ee7c16de15e",
".git/objects/d4/5c677ed650a6b1c5f0d1c8951d0bc74df6a0e4": "80e76921db65d1c7c1d0d89c988aaa75",
".git/objects/97/25bd9eb27b12e287de4a62e815ae33d06053a3": "edc0b7d451862552ce618d257652e68c",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/0e/1b16b929df2c8f2ed28ffcdcdbaa6f7cdf5a7d": "c188fece68947ce0350f6c9f4363a2e2",
".git/objects/0e/5f178eda241e829badedc55028a37af696c92c": "541f42056e68980d9837c710ddddf730",
".git/objects/87/8fb114e546c29f2418709b1a56c8f872f85891": "2dc87e59e9aa56cd4aa28ea025bcd7c5",
".git/objects/bb/9159e314837aaef6e9dda46d71e198dd506101": "02ccc0f63b3af8d9adaf5d58995f3fa4",
".git/objects/99/c166998a56308f33f72ab5597a415201e2349c": "749273490903db1dbb567d92c670b57b",
".git/objects/bf/b34b1d678c1de94ad5a4c659a165e3a8018c38": "1eff6aa3b513324b37786ae0a4a4accf",
".git/objects/a1/56d813c8a397d7ed06840bdb78b0814c5195cf": "0962b9188afe4ba188daff8ea5dca344",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/ab/3649d41349ca51cf14dd2437dd813dd1fea7c7": "192f72505d1b6d7d15026d33430902e5",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/66/ced856b6176047793b33ac6a1e3de2206921e8": "ed34d32e897b82a8fa359f69a13945c0",
".git/objects/66/0dafeeda138c8ef64d12b7fbffc1e7151275c8": "6edd01dfab9fe39aa5d079222fbd98da",
".git/objects/81/f8da657f4d111d76b4d2cd5a7411b77310dc0d": "8b8ee3407d538b030f8eb735009c6074",
".git/objects/81/5d08899470a3aa026edfa7e329add7408cc656": "0e9679c6c5bd2bb0e48418ee8f525126",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d6/a3e68a59efbe80feeb0c49221ffce21885f77c": "73d48e340a499221ba4631ea9edc6460",
".git/objects/a6/15776afd8be51486d94996a31ffc07e0ae49da": "0f08b25357829ad8becd274d1434f848",
".git/objects/3d/3ee4a025d1a1fec87536562b0afd3dfab395d8": "218dfe4f265f5332ac4dc38e673346cc",
".git/objects/27/08b9f4724b14d0daa7de5af2158c810f92e37c": "06af571fe47cdf38ef1d9da58873f1a8",
".git/objects/d2/e239731df1e72cb9a7ef0d2e9d3f3e592a9445": "f9b6ab67d73a4a881bbbda0f413cfad0",
".git/objects/d2/3d9afbfb18e7b7ee67373d26fdf505e27ea1a5": "6927fcbe3c224ab5103838aeb3ab0316",
".git/objects/f1/6b586918ae57b838e8c23711d7ff36727d69ca": "75d81a07f217b8831742764c638708b6",
".git/objects/e7/c9ab069bf1361592a41151ababc07b6084501f": "9e9f186ddff4e890a6a895e244d68a35",
".git/objects/cb/7acdb3ad7ba932626b8b0751267caa26225cf7": "85f15d06945bd4215fb443b72752e890",
".git/objects/ea/6548a8a18b9b71ddd26cb807f3da81939c65f9": "274e3217d830663cb8bd61ff003dfca1",
".git/objects/ea/b01a3a9fe68cbfc97ee8b0ae3a739fcdb66785": "b19e23761ec7964da7e9c8464c7154c0",
".git/objects/e5/ac305b546caf6cdf315ddf177b1e7af3d10209": "a0489f9daa6d8a8af809677fb3a625e4",
".git/objects/e5/e449291b645b6a56722c6d115af9e9e3dee9fa": "08b25cbeebda6608395a4af299b7b1c6",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/ba/011daaea03570ea674e626ee585ae1d964b9b1": "2051c0136a513b176afb730298746889",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2b/8eb5d50fe214ebcd2286a2e0d6846791e3ac64": "4baeed71eb55f789eeea8b0505ccfa9f",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/72/29d50bea31dd49a58d305895d684be451ca21b": "c426cc077f6cd2f31ddc5ca4d234c3fe",
".git/objects/2c/e7364fcb58f36c1d45c9699c03bc53b6ddb59e": "b1d672f378eb4aa984d347af13c5ae9d",
".git/objects/ce/2ced43cc4036080babe9625d90424bd06c030c": "cf8bbe71f1d6fba042caf13dc2414f30",
".git/objects/1f/97095f680c288746cbbce0200449978272dd62": "44bca3d97789b0a9d86f5b33fdc4f0de",
".git/objects/1f/29caa3436fddd426b723c22cbd35363997bb51": "baf4aaaa486bfcddb116f1aec7b90266",
".git/objects/f5/c7040babb8ebe9ecf5c6e9f0ffbdbf9443ab06": "b24fff06d27cccc4a46c14dcfd80e854",
".git/COMMIT_EDITMSG": "7dd3974197b3eb41ba21d031cd162099",
".git/logs/refs/remotes/origin/main": "221237ae6149a4f1a1629584906114f3",
".git/logs/refs/heads/main": "7be6dfa76fb0f19e1e0062407e131092",
".git/logs/HEAD": "c22a887b8637daf20253f60bc2cc992d",
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
