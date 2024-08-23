const u = [
  "/internal/immutable/assets/smallmask-02ff86d1.webp",
  "/internal/immutable/assets/small-8be2bec3.webp",
  "/internal/immutable/assets/p3cc-1c23eee2.png",
  "/internal/immutable/assets/introtologic-9e081f92.pdf",
  "/internal/immutable/assets/machinelearning-0178a0d5.pdf",
  "/internal/immutable/assets/comnet-d5b26047.pdf",
  "/internal/immutable/assets/ustats-68d7206d.pdf",
  "/internal/immutable/assets/google_sec-d37b2039.pdf",
  "/internal/immutable/assets/fca-b2a8e617.pdf",
  "/internal/immutable/assets/face-e7b2adcb.png",
  "/internal/immutable/assets/mathias_green-0f18e348.pdf",
  "/internal/immutable/assets/mathias_green-5eadd9fc.odt",
  "/internal/immutable/assets/erlang-60af0e45.pdf",
  "/internal/immutable/assets/bg-10c0b4e2.webp",
  "/internal/immutable/assets/Creepster-Regular-af46f60f.ttf",
  "/internal/immutable/start-145ad5a9.js",
  "/internal/immutable/components/pages/_layout.svelte-9815d680.js",
  "/internal/immutable/assets/_layout-31720baa.css",
  "/internal/immutable/components/pages/_error.svelte-731ac73b.js",
  "/internal/immutable/assets/_error-5ba6092a.css",
  "/internal/immutable/components/pages/exit_page/_layout.svelte-8261eddd.js",
  "/internal/immutable/assets/_layout-984ab1c7.css",
  "/internal/immutable/components/pages/_page.svelte-0a3745bb.js",
  "/internal/immutable/assets/_page-c53f0b1d.css",
  "/internal/immutable/components/pages/curriculum_vitae/_page.svelte-af9599ed.js",
  "/internal/immutable/assets/_page-0731d32f.css",
  "/internal/immutable/components/pages/exit_page/_page.svelte-306393f7.js",
  "/internal/immutable/assets/_page-b150f600.css",
  "/internal/immutable/components/pages/posts/_page.svelte-d5788d80.js",
  "/internal/immutable/assets/_page-64855329.css",
  "/internal/immutable/components/pages/posts/ErlangDBG/_page.svelte-a4ee9bbd.js",
  "/internal/immutable/assets/_page-4f638416.css",
  "/internal/immutable/components/pages/posts/jupyter/_page.svelte-d1a1e86b.js",
  "/internal/immutable/components/pages/posts/jupyter/AsymetricBreakCerts/_page.svelte-a025f135.js",
  "/internal/immutable/assets/_page-d17f105b.css",
  "/internal/immutable/components/pages/posts/jupyter/AsymetricCrypto/_page.svelte-fefa3a01.js",
  "/internal/immutable/components/pages/posts/jupyter/EmpiricalGrowthTesting/_page.svelte-aa26c78e.js",
  "/internal/immutable/components/pages/posts/jupyter/GrowthProjections/_page.svelte-3746ef72.js",
  "/internal/immutable/components/pages/posts/jupyter/Interpolation/_page.svelte-14e45130.js",
  "/internal/immutable/components/pages/posts/jupyter/MatricesInErlang/_page.svelte-48642801.js",
  "/internal/immutable/modules/pages/_layout.ts-16943143.js",
  "/internal/immutable/modules/pages/exit_page/_layout.ts-df906855.js",
  "/internal/immutable/modules/pages/curriculum_vitae/_page.ts-f547f504.js",
  "/internal/immutable/modules/pages/exit_page/_page.ts-61c4bc00.js",
  "/internal/immutable/modules/pages/posts/_page.ts-c6b8afe9.js",
  "/internal/immutable/modules/pages/posts/jupyter/_page.ts-5802215a.js",
  "/internal/immutable/chunks/singletons-1b2c8121.js",
  "/internal/immutable/chunks/preload-helper-176e53da.js",
  "/internal/immutable/chunks/index-57c1f8f9.js",
  "/internal/immutable/chunks/index-a3c86569.js",
  "/internal/immutable/chunks/stores-fb30f98d.js",
  "/internal/immutable/chunks/index-9678ea77.js",
  "/internal/immutable/chunks/_layout-409d426b.js",
  "/internal/immutable/chunks/_layout-386ee8cc.js",
  "/internal/immutable/chunks/_page-1462131d.js",
  "/internal/immutable/chunks/_page-473bc0e5.js",
  "/internal/immutable/chunks/_page-89f219c0.js",
  "/internal/immutable/chunks/_page-a01b6da5.js",
  "/internal/immutable/chunks/0-effa41e3.js",
  "/internal/immutable/chunks/1-76220179.js",
  "/internal/immutable/chunks/2-48581681.js",
  "/internal/immutable/chunks/3-1a08215b.js",
  "/internal/immutable/chunks/4-50ff5e15.js",
  "/internal/immutable/chunks/5-0b1c159b.js",
  "/internal/immutable/chunks/6-0bae5dd3.js",
  "/internal/immutable/chunks/7-61b610a3.js",
  "/internal/immutable/chunks/8-d77e35da.js",
  "/internal/immutable/chunks/9-e6f4ba90.js",
  "/internal/immutable/chunks/10-9baaa2cd.js",
  "/internal/immutable/chunks/11-3e14758a.js",
  "/internal/immutable/chunks/12-5d9cd096.js",
  "/internal/immutable/chunks/13-fcf5e7f0.js",
  "/internal/immutable/chunks/14-0048d2f5.js",
  "/internal/immutable/chunks/TimeLineCv-e0c5b2f5.js",
  "/internal/immutable/assets/TimeLineCv-dd5d6d51.css",
  "/internal/immutable/chunks/page-12c5f544.js",
  "/internal/immutable/chunks/page-577f338d.js",
  "/internal/immutable/chunks/page-a2fcd6d8.js",
  "/internal/immutable/chunks/page-0f5b2365.js",
  "/internal/immutable/chunks/page-c3fdc129.js",
  "/internal/immutable/chunks/page-7c909a19.js"
], o = [
  "/favicon.png",
  "/favicon192.png",
  "/favicon512.png",
  "/global.css",
  "/manifest.json",
  "/robots.txt"
], l = "1724374128138", s = self, m = `cache${l}`, c = u.concat(o), p = new Set(c);
s.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(m).then((a) => a.addAll(c)).then(() => {
      s.skipWaiting();
    })
  );
});
s.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(async (a) => {
      for (const t of a)
        t !== m && await caches.delete(t);
      s.clients.claim();
    })
  );
});
async function b(e) {
  const a = await caches.open(`offline${l}`);
  try {
    const t = await fetch(e);
    return a.put(e, t.clone()), t;
  } catch (t) {
    const n = await a.match(e);
    if (n)
      return n;
    throw t;
  }
}
s.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const a = new URL(e.request.url), t = a.protocol.startsWith("http"), n = a.hostname === self.location.hostname && a.port !== self.location.port, i = a.host === self.location.host && p.has(a.pathname), r = e.request.cache === "only-if-cached" && !i;
  t && !n && !r && e.respondWith(
    (async () => i && await caches.match(e.request) || b(e.request))()
  );
});
