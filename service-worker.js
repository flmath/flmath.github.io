const u = [
  "/internal/immutable/assets/small-8be2bec3.webp",
  "/internal/immutable/assets/smallmask-02ff86d1.webp",
  "/internal/immutable/assets/p3cc-1c23eee2.png",
  "/internal/immutable/assets/introtologic-9e081f92.pdf",
  "/internal/immutable/assets/machinelearning-0178a0d5.pdf",
  "/internal/immutable/assets/comnet-d5b26047.pdf",
  "/internal/immutable/assets/ustats-68d7206d.pdf",
  "/internal/immutable/assets/fca-b2a8e617.pdf",
  "/internal/immutable/assets/google_sec-d37b2039.pdf",
  "/internal/immutable/assets/face-e7b2adcb.png",
  "/internal/immutable/assets/mathias_green-0f18e348.pdf",
  "/internal/immutable/assets/mathias_green-5eadd9fc.odt",
  "/internal/immutable/assets/erlang-60af0e45.pdf",
  "/internal/immutable/assets/bg-10c0b4e2.webp",
  "/internal/immutable/assets/Creepster-Regular-af46f60f.ttf",
  "/internal/immutable/start-aece0bf0.js",
  "/internal/immutable/components/pages/_layout.svelte-8b16d0ba.js",
  "/internal/immutable/assets/_layout-31720baa.css",
  "/internal/immutable/components/pages/_error.svelte-c16cccaa.js",
  "/internal/immutable/assets/_error-5ba6092a.css",
  "/internal/immutable/components/pages/exit_page/_layout.svelte-8261eddd.js",
  "/internal/immutable/assets/_layout-984ab1c7.css",
  "/internal/immutable/components/pages/_page.svelte-0a3745bb.js",
  "/internal/immutable/assets/_page-c53f0b1d.css",
  "/internal/immutable/components/pages/curriculum_vitae/_page.svelte-af9599ed.js",
  "/internal/immutable/assets/_page-0731d32f.css",
  "/internal/immutable/components/pages/exit_page/_page.svelte-306393f7.js",
  "/internal/immutable/assets/_page-b150f600.css",
  "/internal/immutable/components/pages/posts/_page.svelte-5541b783.js",
  "/internal/immutable/assets/_page-64855329.css",
  "/internal/immutable/components/pages/posts/ErlangDBG/_page.svelte-a4ee9bbd.js",
  "/internal/immutable/assets/_page-4f638416.css",
  "/internal/immutable/components/pages/posts/jupyter/_page.svelte-d1a1e86b.js",
  "/internal/immutable/components/pages/posts/jupyter/Empirical_growth_testing/_page.svelte-0f75dd57.js",
  "/internal/immutable/assets/_page-d17f105b.css",
  "/internal/immutable/components/pages/posts/jupyter/asymetric_break_certs/_page.svelte-6cc465d0.js",
  "/internal/immutable/components/pages/posts/jupyter/asymetric_crypto/_page.svelte-fe869b97.js",
  "/internal/immutable/components/pages/posts/jupyter/growth_projections/_page.svelte-956d18b4.js",
  "/internal/immutable/components/pages/posts/jupyter/interpolation/_page.svelte-e2aa6bf8.js",
  "/internal/immutable/components/pages/posts/jupyter/matrix_implementations_pt1/_page.svelte-7609cf91.js",
  "/internal/immutable/modules/pages/_layout.ts-16943143.js",
  "/internal/immutable/modules/pages/exit_page/_layout.ts-df906855.js",
  "/internal/immutable/modules/pages/curriculum_vitae/_page.ts-f547f504.js",
  "/internal/immutable/modules/pages/exit_page/_page.ts-61c4bc00.js",
  "/internal/immutable/modules/pages/posts/_page.ts-c6b8afe9.js",
  "/internal/immutable/modules/pages/posts/jupyter/_page.ts-5802215a.js",
  "/internal/immutable/chunks/singletons-8d2de3f1.js",
  "/internal/immutable/chunks/preload-helper-176e53da.js",
  "/internal/immutable/chunks/index-57c1f8f9.js",
  "/internal/immutable/chunks/index-a3c86569.js",
  "/internal/immutable/chunks/stores-f6dd2c33.js",
  "/internal/immutable/chunks/index-9678ea77.js",
  "/internal/immutable/chunks/_layout-409d426b.js",
  "/internal/immutable/chunks/_layout-386ee8cc.js",
  "/internal/immutable/chunks/_page-1462131d.js",
  "/internal/immutable/chunks/_page-473bc0e5.js",
  "/internal/immutable/chunks/_page-89f219c0.js",
  "/internal/immutable/chunks/_page-a01b6da5.js",
  "/internal/immutable/chunks/0-e46e6cd4.js",
  "/internal/immutable/chunks/1-c89df4b8.js",
  "/internal/immutable/chunks/2-48581681.js",
  "/internal/immutable/chunks/3-1a08215b.js",
  "/internal/immutable/chunks/4-50ff5e15.js",
  "/internal/immutable/chunks/5-0b1c159b.js",
  "/internal/immutable/chunks/6-945042e1.js",
  "/internal/immutable/chunks/7-61b610a3.js",
  "/internal/immutable/chunks/8-d77e35da.js",
  "/internal/immutable/chunks/9-e5b0537f.js",
  "/internal/immutable/chunks/10-b6288d0f.js",
  "/internal/immutable/chunks/11-0eb093f2.js",
  "/internal/immutable/chunks/12-e751144a.js",
  "/internal/immutable/chunks/13-9205e6a2.js",
  "/internal/immutable/chunks/14-43da1d1c.js",
  "/internal/immutable/chunks/TimeLineCv-e0c5b2f5.js",
  "/internal/immutable/assets/TimeLineCv-dd5d6d51.css",
  "/internal/immutable/chunks/page-925548f6.js",
  "/internal/immutable/chunks/page-2e1972d8.js",
  "/internal/immutable/chunks/page-87f6d544.js",
  "/internal/immutable/chunks/page-b9a57e38.js",
  "/internal/immutable/chunks/page-743516db.js",
  "/internal/immutable/chunks/page-92d6d56e.js"
], b = [
  "/favicon.png",
  "/favicon192.png",
  "/favicon512.png",
  "/global.css",
  "/manifest.json",
  "/robots.txt"
], l = "1747721039510", s = self, m = `cache${l}`, c = u.concat(b), o = new Set(c);
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
  const a = new URL(e.request.url), t = a.protocol.startsWith("http"), n = a.hostname === self.location.hostname && a.port !== self.location.port, i = a.host === self.location.host && o.has(a.pathname), r = e.request.cache === "only-if-cached" && !i;
  t && !n && !r && e.respondWith(
    (async () => i && await caches.match(e.request) || p(e.request))()
  );
});
