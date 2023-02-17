'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "59c1f11166529e5803304321ad915590",
".git/config": "ac2c33e1a6398137d8e0db47eb9ff682",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9577cb352c05196969c37dd2270a0107",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "402301dea2b57906e96d876460d500cf",
".git/logs/refs/heads/master": "402301dea2b57906e96d876460d500cf",
".git/logs/refs/remotes/origin/master": "6939d6bce0e5b8c1f2619ddc1dc8e84f",
".git/objects/02/d72e07213d59dea8c990bced0501de1d376180": "4f049993a5e45235b04d2ef9ed1da008",
".git/objects/04/820d352a288a47487963191f2fdecbb4c5042b": "bbc691d03191712adb89b53400ef417a",
".git/objects/06/e98017cd36688e047999448f0d3bdefc9d3512": "e4df4a91cd5ffa3770c893da615db26d",
".git/objects/07/a6f235b7ee551b43e9350f0b562f07ca3e084e": "73c64a0b024b35c48fadf11b6c299ced",
".git/objects/0f/585d829e6a8b2d36bfe8d3b326795f0dc6358f": "45077240f753612593b31d03773eadd8",
".git/objects/0f/d12bf8bdd02115f897a3a161cf44fe0e3a3596": "0615dacd7877862d42400a24572bde1b",
".git/objects/11/71ea53fb884482b0d36bb86a2d5f50d32d6b14": "c740ab9f67bd8310b186c6b0dbc2b79c",
".git/objects/14/146df51362a3801c364951abf9e1146d47706d": "c41e9696d2048e2f64ef221bfb3c9200",
".git/objects/16/7494e6435f38be767aa6ef0582474d82e02fda": "9c073f2c3b9c31009edb64520af31d52",
".git/objects/1a/b847b818dec389fb43fb9da80637c02e27d3d3": "8af286f2a069534106d53e8c037b0a4a",
".git/objects/1d/422bee7de3a5b79949156710e029a1a79b751c": "621fb39c01c179ee048946c7eda01d3a",
".git/objects/20/aeab6d380a9ce04c48372c55e28e03e36f4c45": "b2870555de3bf2ab7907d6ece9c146e0",
".git/objects/23/ecdd1a8eabf7e4e7577a123c8d784a3e11219e": "a1b47370f04b722704887a0843cf5243",
".git/objects/24/5bfff409980f5975d0d04f0054de91d1fe2e6c": "afeba0422a3efcab132fb9a5c3e2e83c",
".git/objects/24/e0caaf481c3f8eea6c976682a4103543dd53cf": "e289d4652a7ca10b7d8cc27c96f6baf1",
".git/objects/24/ee822be9eaa8b8ceaeb285074b8830316b64d1": "5c3defe292f6aa233219031cefa16316",
".git/objects/25/ea4b7e2a6c02ee519f6b6ec8bc9af94ed44d55": "24a52dd9ac9fb327ccdfc806c9e5ae6b",
".git/objects/27/221dc287f2d210f71da72d4a34f420692d5bf5": "ea3e440221e47fa72d868acf951cc57b",
".git/objects/2b/2c3a562b375d8b8666585df340e8f3868f38a8": "92a5ead6e841d0afb413c30b02850499",
".git/objects/2b/e75f3d7469a40dc9a800993c11d5010abe6058": "1e967db8d068895ef786ec6a5edd81c5",
".git/objects/2e/498e76f83efd04311e03ca68732e5d0fd46aae": "36a0feb6421453387c301fc6f093c604",
".git/objects/2e/e2be0af5ef80ab71ce702f4949f4f361f41aef": "70954851ce1df72dac048f9b02953708",
".git/objects/2f/a4d97a9093e64669525c1aa2f717718cbbb3fd": "d7ac259f8776a6055d6c6d0e3c2bac5c",
".git/objects/30/59d8f274438e88789e72f269b6192d2e2cc9c4": "b65b4b48ec0e68351bea96952c663809",
".git/objects/33/463fcceae3837739aea4a47220db2a760c8050": "2f1bb649666c6bc705315f4de11f6308",
".git/objects/33/b1a12c3759cf6fe88c5050a0cc556aa9a293d9": "736fd4c7f42f44035d53bbd4e8b3454d",
".git/objects/36/bb7cbc59d80e5b1aded037efe7d69cbcfe4938": "32bb71f4513f1576b378113e4829bcc7",
".git/objects/38/0f79dd6c59a50a878c5c25bbe53df8dbcd2ad6": "cdf8a3bb8e7550e24c2258fe377fd482",
".git/objects/39/6a8a844bc97636e51dea62a8785e7d3e3d01b8": "65d266d73bf9c4cecabd7bfb65556c87",
".git/objects/3f/7682a6e830e34f27e98a37d386fa63b2985df4": "1acac7a08041d4c873c649de6751474c",
".git/objects/44/cb660162afa4c609622861467e6d84a7726c5c": "913b859107bfe05a61eb042a655105d7",
".git/objects/45/cc76d7708c3f80a4eaf698da91abb9d5c9bcd8": "b786a5afdcfa51e3ab6a566a7c968ecc",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/6b3dd5c72e9f95f5a39efdb014a1953ac60605": "68410352df78dd3fbbd2e9666bc401fd",
".git/objects/49/36fecc1b9cc9a4fd930a2e07e0ad94b57d5c1c": "b5e3528a5c6b9e3064ee530efa11d478",
".git/objects/49/9a7612937c4b9b24bb51a4609ff1db3d974401": "9470188a3ee858cb7be9da49487c2e08",
".git/objects/4e/dab12ea6bfc20c83394e33fcab85647416886d": "1b85c4f37b8538db0888570a983d030a",
".git/objects/52/92b790839ed551aa1ae77fc52cc034b253edf4": "924d10657107792320526b06d1110464",
".git/objects/54/6acbffc79e51d57b8c62423b547d637d182384": "9ad6cb275535dd0a8a2b218e23437b8f",
".git/objects/58/9fc9fa3fc3926c2b5431dd0d222f0c88730071": "f165ca0cff4116b049f8cd9dd153e5b6",
".git/objects/5a/77bc9b6c50e4de33c94ee6bc0c71101da49d59": "63a7e13f8a710005757244ab6f503fb4",
".git/objects/61/65a44be9c3db42180e4dbe03110348d72f39be": "d9b8c56626cf4a80509675c461122e0c",
".git/objects/65/f09a8852b861f10b7aedf890be086b5a4e4602": "0598cb7467c2a69662b1781f52d6461a",
".git/objects/66/58f20aa4690c140f9f0104178606916255fdf6": "44ab5553063d1d58d465b5b4b7b3f3d2",
".git/objects/68/d72a093982e63c63e99939b96a879bf6f0a90d": "dc102dc18d60cd344b9df7a82e62a8c2",
".git/objects/6a/a3ae6d567ad96b8c6d3b679afe7697924b4f4d": "40b4fa411200cc5222dbc499f8ba1222",
".git/objects/6f/2af3a2824b2be070fc5e4212ee3bd825ae741e": "7f1922ad274efd3585386e0abce25ec7",
".git/objects/73/4a72280f2e54465cd4c6aef2ed6f17d188cc60": "2389ed39785c13020f3065b448786a11",
".git/objects/74/118af402966be1172adc66d3eec3472f665000": "845f9a09f95ae2cee626b9a6272e4f94",
".git/objects/75/655f543dfe890bdcd33dd510296e7e06c2d508": "46d22bb50254d11949fe738d73f5b82b",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/43bf7147959ed84c5666ae41c11449f0cb2e7e": "57bf174b2b8c17a6cf660ad1ed9920aa",
".git/objects/7c/fa79e78da00787729517b093943ce30eb5bb8e": "fb1d48e3f394aca107ef5ed92c31766e",
".git/objects/7c/fb6f962bdb8c4b610bb1bb25b6c4361f9d20e8": "20235224869b650fc9ceb371e56bb5c9",
".git/objects/7f/a575e9ba64101f2c08677f072315f0bd681533": "8c811649184f2d8a2c79f955bb032541",
".git/objects/87/295607e7ba7001e578eef671202134ef691743": "d195bd4983af67c6c7b1b4abd255c016",
".git/objects/88/4f7b57d6da795db65a49ccfdb61139262a3fbb": "1bf936ab690307dc46b021c3c8e62bce",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/d7425faf18a79cbea95f6a24f6c70b4a7e8b6e": "b8b36a32007b723b63cc522b527eb947",
".git/objects/97/8746b5424d1212460133977131fc5ef0971abb": "3cc094294d4d3275ff02b12eff5e10c3",
".git/objects/98/b2d8945ccac5bea1c52fab70cf293be601b959": "2beb121ca702b6a2857541ff5c84be93",
".git/objects/98/e7dc7fa47a4096924c739dbd63080675582df1": "db5faed8f85acbafebb3f31e43b605fd",
".git/objects/a1/011da9238a8cb6d574f42db9e7de2c7f2c76d7": "8580fb80c623192a64147f22175da53f",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/4ee7927c0b4dcaabccc0b07f64d76aac0888ab": "7c746b9dfa79083816b9fd4e2b72cd23",
".git/objects/a2/f22d9085de3fa606d8c00e1822f3891fb71279": "f133d15f949d7903b950044896fcc618",
".git/objects/b1/883f5d4f8b8f6081d62e7765efebb642e77b26": "588cd8913dbd2f8c3e738f105ff8cdb9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/48f0b199f4831a1211888b0e45f2998843103f": "8bbc47ebd4fc4a3450b341844855f97b",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/76bd12c674ea280335e6acb0757f75cf8ffbfd": "f72c5397a0a5440407a525d9f283c9e4",
".git/objects/bf/2b3f89db2114cde8bff5c303c258793a6eca5f": "c669cfce29ea84daadafa3af82b67a66",
".git/objects/bf/31c69c009d458d10b283b322e53e4f251af96c": "408897224adeee1d66956ffeb9bb6b5b",
".git/objects/c3/5048b1cfb0e4a0d32a3fe7094d899072c1282d": "330b5cd5272c8b5927a4db1cd072962d",
".git/objects/c5/1577b47be820f71ea51f7bb10d60094c5a4d49": "610989733a2209dda6e241cde74cd9de",
".git/objects/c9/dd12a3f42505f9f2c556590de34097864e0e00": "6225b5aa6d71319f370b3047dc515655",
".git/objects/cc/5725b315760d100f6386e6bbf09af8fe57a9f1": "29c19352d2bee0821600856656c95791",
".git/objects/cd/22076013ce8b84475eae9bb4cd6c60b5460fbe": "81c620e2d6cbe5638d6c90ee25886389",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/784b5f79f0669495a0ae507e25508b4912cac9": "4dbcda820e9a2035fde0e9690ba56676",
".git/objects/d9/071c9a4123d47db158a370b3e7c5f5047e319f": "1e28c493e032d4e249afe2556cb01ebb",
".git/objects/de/28db843d7df6ed23b8a7526f6b6b4a83425fe7": "797e4f7b3d8dced098c51679ff33e848",
".git/objects/e0/2012ca0a73da86edd7614aebdc24f350669305": "4cb516f7f367eb8387729d8cfc7cf9b2",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/1ed22b26987939eb90a1b835d47eaa7416a8d9": "1c193b804d3c8556b984529fdc09c339",
".git/objects/ea/17d41bd7311eb939b30a3fb25312700e2ec8e6": "383b0efef12336be48863138cab9bc20",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/6e2731e599989e6a4bb9d9df373c209b823919": "966fa4a95d1802cfab79ff321b504d89",
".git/objects/f0/1d6459f6b92f7bf1c47ec8776cd5fdff67d21b": "043315de416a1a8dbe35b0a3d7534df6",
".git/objects/f0/c74a25e7853fd047a7d27d64ea033dd280a6c3": "e49d29f7e35c3d52a48eed668b2731f9",
".git/objects/f1/d7e3e3987575f2f0e0968de4bc128117e762b0": "0f78c5c61accd78823d43a6521d9eec0",
".git/objects/f5/8f81c7f1b2912bec5ca23dc60ccb64d9c37b3b": "8cf498e1bcc2732b918ae0486b2e4804",
".git/objects/f7/2ca8a86d1edd0dd0d0eb98f756eb9a463bd42e": "0e2c376d3a58d34f55c5e60bf98e4c2e",
".git/objects/f8/fbf0c190101e2485705798405d90ccd3fbab50": "7153bf3ededa964bc866a8236eb95276",
".git/objects/fc/4778449d2841f0bab89ff180640e56781cd6cd": "78756c6cfe5132c26eb742e4a947f21f",
".git/objects/ff/6fb78d4bd66c268d46ba8adcb2b6bc0addef79": "e937bd3532e20f57ac156ae8492e28d2",
".git/refs/heads/master": "e0967ee791b9060627e7ba83c75fd04b",
".git/refs/remotes/origin/master": "e0967ee791b9060627e7ba83c75fd04b",
"assets/AssetManifest.json": "865ac5bd7d2060b248fd89160bab2aa4",
"assets/assets/item.png": "5ab16b84cb01670dfa55325781a2d2f0",
"assets/assets/itemDetails.png": "e1fb714d85ee4364be287ffd3968c03a",
"assets/assets/logo.png": "b5a114e8cad1aabd1061197fbcf0af33",
"assets/assets/male.png": "72b7182a9780959c2ba6017db50b7fa3",
"assets/assets/railways.png": "b4e7fde58ff35942d24300201e041d6b",
"assets/assets/ship.png": "c484749d764586d71e334a7968c47639",
"assets/assets/shipmentDetails.png": "d5004bc64dcee3d54b545f0a1cc97843",
"assets/assets/status1.png": "b8c94110c5003517ac6e931c824c7d79",
"assets/assets/status10.png": "b0b95684b7838f2dbbddcf041c588c58",
"assets/assets/status11.png": "0e757a3bde7f1759ee577baa26b3e420",
"assets/assets/status2.png": "795d67646abd15e5f13f53f761bfd99c",
"assets/assets/status3.png": "2eda30bf01e3f16c0f00a15642d65794",
"assets/assets/status4.png": "c1288262784d9eee75eedb0e89d47f6a",
"assets/assets/status5.png": "7ffa53118d98026cd87f04c5eda08803",
"assets/assets/status6.png": "a6eba584918b9f367e4d909327d58f48",
"assets/assets/status7.png": "4a5210fd40b7c8a52f62511ae4e33cb9",
"assets/assets/status8.png": "f2a26d94a9ffde98b80cace7cc1d746e",
"assets/assets/status9.png": "28591775ed2ab417dc0fb24b6781cc53",
"assets/assets/transportation.png": "4faa51bf686c361459e9c964dc21a635",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "9f65d42bc50246ac3944c31e60be739d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/progress_dialog/assets/double_ring_loading_io.gif": "e5b006904226dc824fdb6b8027f7d930",
"assets/shaders/ink_sparkle.frag": "6333b551ea27fd9d8e1271e92def26a9",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "cbf84b8d86fda4dd5573d63245624f3c",
"/": "cbf84b8d86fda4dd5573d63245624f3c",
"main.dart.js": "159189e8c7919d406b697cd55b74eb49",
"manifest.json": "10c60091cda61c5a52dcf8b55eeffa1d",
"version.json": "1d083fa054db8cc9f85c60840269f4dc"
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
