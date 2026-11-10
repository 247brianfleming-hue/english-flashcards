// Sunflower English - offline cache.
// Caches the app shell, word list and ALL audio clips on first install,
// then serves them from the phone or PC when there is no internet.
const CACHE = "sunflower-english-v3";
const SHELL = [
  "./", "./index.html", "./manifest.json", "./data/words.json", "./data/order.json",
  // Every audio chunk, so the whole course works offline.
  "./audio/a001.json", "./audio/a002.json", "./audio/a003.json", "./audio/a004.json", "./audio/a005.json", "./audio/a006.json", "./audio/a007.json", "./audio/a008.json", "./audio/a009.json", "./audio/a010.json",
  "./audio/a011.json", "./audio/a012.json", "./audio/a013.json", "./audio/a014.json", "./audio/a015.json", "./audio/a016.json", "./audio/a017.json", "./audio/a018.json", "./audio/a019.json", "./audio/a020.json",
  "./audio/a021.json", "./audio/a022.json", "./audio/a023.json", "./audio/a024.json", "./audio/a025.json", "./audio/a026.json", "./audio/a027.json", "./audio/a028.json", "./audio/a029.json", "./audio/a030.json",
  "./audio/a031.json", "./audio/a032.json", "./audio/a033.json", "./audio/a034.json", "./audio/a035.json", "./audio/a036.json", "./audio/a037.json", "./audio/a038.json", "./audio/a039.json", "./audio/a040.json",
  "./audio/a041.json", "./audio/a042.json", "./audio/a043.json", "./audio/a044.json", "./audio/a045.json", "./audio/a046.json", "./audio/a047.json", "./audio/a048.json", "./audio/a049.json", "./audio/a050.json",
  "./audio/a051.json", "./audio/a052.json", "./audio/a053.json", "./audio/a054.json", "./audio/a055.json", "./audio/a056.json", "./audio/a057.json", "./audio/a058.json", "./audio/a059.json", "./audio/a060.json",
  "./audio/a061.json", "./audio/a062.json", "./audio/a063.json", "./audio/a064.json", "./audio/a065.json", "./audio/a066.json", "./audio/a067.json", "./audio/a068.json", "./audio/a069.json", "./audio/a070.json",
  "./audio/a071.json", "./audio/a072.json", "./audio/a073.json", "./audio/a074.json", "./audio/a075.json", "./audio/a076.json", "./audio/a077.json", "./audio/a078.json", "./audio/a079.json", "./audio/a080.json",
  "./audio/a081.json", "./audio/a082.json", "./audio/a083.json", "./audio/a084.json", "./audio/a085.json", "./audio/a086.json", "./audio/a087.json", "./audio/a088.json", "./audio/a089.json", "./audio/a090.json",
  "./audio/a091.json", "./audio/a092.json", "./audio/a093.json", "./audio/a094.json", "./audio/a095.json", "./audio/a096.json", "./audio/a097.json", "./audio/a098.json", "./audio/a099.json", "./audio/a100.json",
  "./audio/a101.json", "./audio/a102.json", "./audio/a103.json", "./audio/a104.json", "./audio/a105.json", "./audio/a106.json", "./audio/a107.json", "./audio/a108.json", "./audio/a109.json", "./audio/a110.json",
  "./audio/a111.json", "./audio/a112.json", "./audio/a113.json", "./audio/a114.json", "./audio/a115.json", "./audio/a116.json", "./audio/a117.json", "./audio/a118.json", "./audio/a119.json", "./audio/a120.json",
  "./audio/a121.json", "./audio/a122.json", "./audio/a123.json", "./audio/a124.json", "./audio/a125.json", "./audio/a126.json", "./audio/a127.json", "./audio/a128.json", "./audio/a129.json", "./audio/a130.json",
  "./audio/a131.json", "./audio/a132.json", "./audio/a133.json", "./audio/a134.json", "./audio/a135.json", "./audio/a136.json", "./audio/a137.json", "./audio/a138.json", "./audio/a139.json", "./audio/a140.json",
  "./audio/a141.json", "./audio/a142.json", "./audio/a143.json", "./audio/a144.json", "./audio/a145.json", "./audio/a146.json", "./audio/a147.json", "./audio/a148.json", "./audio/a149.json", "./audio/a150.json",
  "./audio/a151.json", "./audio/a152.json", "./audio/a153.json", "./audio/a154.json", "./audio/a155.json", "./audio/a156.json", "./audio/a157.json", "./audio/a158.json", "./audio/a159.json", "./audio/a160.json",
  "./audio/a161.json", "./audio/a162.json", "./audio/a163.json", "./audio/a164.json", "./audio/a165.json", "./audio/a166.json", "./audio/a167.json", "./audio/a168.json", "./audio/a169.json", "./audio/a170.json",
  "./audio/a171.json", "./audio/a172.json", "./audio/a173.json", "./audio/a174.json", "./audio/a175.json", "./audio/a176.json", "./audio/a177.json", "./audio/a178.json", "./audio/a179.json", "./audio/a180.json",
  "./audio/a181.json", "./audio/a182.json", "./audio/a183.json", "./audio/a184.json", "./audio/a185.json", "./audio/a186.json", "./audio/a187.json", "./audio/a188.json", "./audio/a189.json", "./audio/a190.json",
  "./audio/a191.json", "./audio/a192.json", "./audio/a193.json", "./audio/a194.json", "./audio/a195.json", "./audio/a196.json", "./audio/a197.json", "./audio/a198.json", "./audio/a199.json", "./audio/a200.json",
  "./audio/a201.json", "./audio/a202.json", "./audio/a203.json", "./audio/a204.json", "./audio/a205.json", "./audio/a206.json", "./audio/a207.json", "./audio/a208.json", "./audio/a209.json", "./audio/a210.json",
  "./audio/a211.json", "./audio/a212.json", "./audio/a213.json", "./audio/a214.json", "./audio/a215.json", "./audio/a216.json", "./audio/a217.json", "./audio/a218.json", "./audio/a219.json", "./audio/a220.json",
  "./audio/a221.json", "./audio/a222.json", "./audio/a223.json", "./audio/a224.json", "./audio/a225.json", "./audio/a226.json", "./audio/a227.json", "./audio/a228.json", "./audio/a229.json", "./audio/a230.json",
  "./audio/a231.json", "./audio/a232.json", "./audio/a233.json", "./audio/a234.json", "./audio/a235.json", "./audio/a236.json", "./audio/a237.json", "./audio/a238.json", "./audio/a239.json", "./audio/a240.json",
  "./audio/a241.json", "./audio/a242.json", "./audio/a243.json", "./audio/a244.json", "./audio/a245.json", "./audio/a246.json", "./audio/a247.json", "./audio/a248.json", "./audio/a249.json", "./audio/a250.json",
  "./audio/a251.json", "./audio/a252.json", "./audio/a253.json", "./audio/a254.json", "./audio/a255.json", "./audio/a256.json", "./audio/a257.json", "./audio/a258.json", "./audio/a259.json", "./audio/a260.json",
  "./audio/a261.json", "./audio/a262.json", "./audio/a263.json", "./audio/a264.json", "./audio/a265.json", "./audio/a266.json", "./audio/a267.json", "./audio/a268.json", "./audio/a269.json", "./audio/a270.json",
  "./audio/a271.json", "./audio/a272.json", "./audio/a273.json", "./audio/a274.json", "./audio/a275.json", "./audio/a276.json", "./audio/a277.json",
];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((response) => {
          if (response.ok) {
            const copy = response.clone();
            caches.open(CACHE).then((cache) => cache.put(event.request, copy));
          }
          return response;
        })
        .catch(() => caches.match("./index.html"));
    })
  );
});
