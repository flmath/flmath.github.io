const u = [
  "/internal/immutable/assets/small-8be2bec3.webp",
  "/internal/immutable/assets/smallmask-02ff86d1.webp",
  "/internal/immutable/assets/p3cc-1c23eee2.png",
  "/internal/immutable/assets/introtologic-9e081f92.pdf",
  "/internal/immutable/assets/machinelearning-0178a0d5.pdf",
  "/internal/immutable/assets/comnet-d5b26047.pdf",
  "/internal/immutable/assets/ustats-68d7206d.pdf",
  "/internal/immutable/assets/face-e7b2adcb.png",
  "/internal/immutable/assets/mathias_green-f7cd0e85.pdf",
  "/internal/immutable/assets/mathias_green-c9a5e96a.odt",
  "/internal/immutable/assets/erlang-60af0e45.pdf",
  "/internal/immutable/assets/bg-10c0b4e2.webp",
  "/internal/immutable/assets/Creepster-Regular-af46f60f.ttf",
  "/internal/immutable/start-7ac1ef8f.js",
  "/internal/immutable/components/pages/_layout.svelte-94f63c20.js",
  "/internal/immutable/assets/_layout-31720baa.css",
  "/internal/immutable/components/pages/_error.svelte-efb2a2ad.js",
  "/internal/immutable/assets/_error-5ba6092a.css",
  "/internal/immutable/components/pages/exit_page/_layout.svelte-8261eddd.js",
  "/internal/immutable/assets/_layout-984ab1c7.css",
  "/internal/immutable/components/pages/_page.svelte-0a3745bb.js",
  "/internal/immutable/assets/_page-c53f0b1d.css",
  "/internal/immutable/components/pages/curriculum_vitae/_page.svelte-3f00e49e.js",
  "/internal/immutable/assets/_page-2052f221.css",
  "/internal/immutable/components/pages/exit_page/_page.svelte-306393f7.js",
  "/internal/immutable/assets/_page-b150f600.css",
  "/internal/immutable/components/pages/posts/_page.svelte-0708e1a8.js",
  "/internal/immutable/assets/_page-64855329.css",
  "/internal/immutable/components/pages/posts/ErlangDBG/_page.svelte-a4ee9bbd.js",
  "/internal/immutable/assets/_page-4f638416.css",
  "/internal/immutable/components/pages/posts/jupyter/EmpiricalGrowthTesting/_page.svelte-7a1d99c7.js",
  "/internal/immutable/assets/_page-d17f105b.css",
  "/internal/immutable/components/pages/posts/jupyter/GrowthProjections/_page.svelte-76e3d35c.js",
  "/internal/immutable/components/pages/posts/jupyter/Interpolation/_page.svelte-00dfe2ae.js",
  "/internal/immutable/components/pages/posts/jupyter/MatricesInErlang/_page.svelte-cd542e14.js",
  "/internal/immutable/modules/pages/_layout.ts-1a40caa5.js",
  "/internal/immutable/modules/pages/curriculum_vitae/_page.ts-f547f504.js",
  "/internal/immutable/chunks/singletons-9defc9d7.js",
  "/internal/immutable/chunks/preload-helper-0ffe6af8.js",
  "/internal/immutable/chunks/index-57c1f8f9.js",
  "/internal/immutable/chunks/index-a3c86569.js",
  "/internal/immutable/chunks/stores-1a7d76f7.js",
  "/internal/immutable/chunks/index-9678ea77.js",
  "/internal/immutable/chunks/_layout-5bead24a.js",
  "/internal/immutable/chunks/_page-1462131d.js",
  "/internal/immutable/chunks/0-9238040b.js",
  "/internal/immutable/chunks/1-2676bde3.js",
  "/internal/immutable/chunks/2-f2e2f943.js",
  "/internal/immutable/chunks/3-1a08215b.js",
  "/internal/immutable/chunks/4-1be13a81.js",
  "/internal/immutable/chunks/5-c95a4f2d.js",
  "/internal/immutable/chunks/6-ff3562fa.js",
  "/internal/immutable/chunks/7-61b610a3.js",
  "/internal/immutable/chunks/8-3fe203aa.js",
  "/internal/immutable/chunks/9-811d0968.js",
  "/internal/immutable/chunks/10-8e0e1837.js",
  "/internal/immutable/chunks/11-516d7a3d.js",
  "/internal/immutable/chunks/TimeLineCv-b8791856.js",
  "/internal/immutable/assets/TimeLineCv-dd5d6d51.css",
  "/internal/immutable/chunks/page-a2fcd6d8.js",
  "/internal/immutable/chunks/page-0f5b2365.js",
  "/internal/immutable/chunks/page-c3fdc129.js",
  "/internal/immutable/chunks/page-7c909a19.js"
], o = [
  "/.nojekyll",
  "/favicon.png",
  "/favicon192.png",
  "/favicon512.png",
  "/global.css",
  "/manifest.json",
  "/robots.txt"
], l = "1664166395770", s = self, m = `cache${l}`, c = u.concat(o), b = new Set(c);
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
async function p(e) {
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
  const a = new URL(e.request.url), t = a.protocol.startsWith("http"), n = a.hostname === self.location.hostname && a.port !== self.location.port, i = a.host === self.location.host && b.has(a.pathname), r = e.request.cache === "only-if-cached" && !i;
  t && !n && !r && e.respondWith(
    (async () => i && await caches.match(e.request) || p(e.request))()
  );
});