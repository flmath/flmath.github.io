const o = [
  "/flmath.github.io/internal/immutable/assets/small-8be2bec3.webp",
  "/flmath.github.io/internal/immutable/assets/smallmask-02ff86d1.webp",
  "/flmath.github.io/internal/immutable/assets/p3cc-1c23eee2.png",
  "/flmath.github.io/internal/immutable/assets/introtologic-9e081f92.pdf",
  "/flmath.github.io/internal/immutable/assets/machinelearning-0178a0d5.pdf",
  "/flmath.github.io/internal/immutable/assets/comnet-d5b26047.pdf",
  "/flmath.github.io/internal/immutable/assets/ustats-68d7206d.pdf",
  "/flmath.github.io/internal/immutable/assets/face-e7b2adcb.png",
  "/flmath.github.io/internal/immutable/assets/mathias_green-f7cd0e85.pdf",
  "/flmath.github.io/internal/immutable/assets/mathias_green-c9a5e96a.odt",
  "/flmath.github.io/internal/immutable/assets/erlang-60af0e45.pdf",
  "/flmath.github.io/internal/immutable/assets/bg-10c0b4e2.webp",
  "/flmath.github.io/internal/immutable/assets/Creepster-Regular-af46f60f.ttf",
  "/flmath.github.io/internal/immutable/start-37636d96.js",
  "/flmath.github.io/internal/immutable/components/pages/_layout.svelte-5faeea8c.js",
  "/flmath.github.io/internal/immutable/assets/_layout-31720baa.css",
  "/flmath.github.io/internal/immutable/components/pages/_error.svelte-ff1e0288.js",
  "/flmath.github.io/internal/immutable/assets/_error-5ba6092a.css",
  "/flmath.github.io/internal/immutable/components/pages/exit_page/_layout.svelte-8261eddd.js",
  "/flmath.github.io/internal/immutable/assets/_layout-984ab1c7.css",
  "/flmath.github.io/internal/immutable/components/pages/_page.svelte-0a3745bb.js",
  "/flmath.github.io/internal/immutable/assets/_page-c53f0b1d.css",
  "/flmath.github.io/internal/immutable/components/pages/curriculum_vitae/_page.svelte-3f00e49e.js",
  "/flmath.github.io/internal/immutable/assets/_page-2052f221.css",
  "/flmath.github.io/internal/immutable/components/pages/exit_page/_page.svelte-306393f7.js",
  "/flmath.github.io/internal/immutable/assets/_page-b150f600.css",
  "/flmath.github.io/internal/immutable/components/pages/posts/_page.svelte-0708e1a8.js",
  "/flmath.github.io/internal/immutable/assets/_page-64855329.css",
  "/flmath.github.io/internal/immutable/components/pages/posts/ErlangDBG/_page.svelte-a4ee9bbd.js",
  "/flmath.github.io/internal/immutable/assets/_page-4f638416.css",
  "/flmath.github.io/internal/immutable/components/pages/posts/jupyter/EmpiricalGrowthTesting/_page.svelte-7a1d99c7.js",
  "/flmath.github.io/internal/immutable/assets/_page-d17f105b.css",
  "/flmath.github.io/internal/immutable/components/pages/posts/jupyter/GrowthProjections/_page.svelte-76e3d35c.js",
  "/flmath.github.io/internal/immutable/components/pages/posts/jupyter/Interpolation/_page.svelte-00dfe2ae.js",
  "/flmath.github.io/internal/immutable/components/pages/posts/jupyter/MatricesInErlang/_page.svelte-cd542e14.js",
  "/flmath.github.io/internal/immutable/modules/pages/_layout.ts-1a40caa5.js",
  "/flmath.github.io/internal/immutable/chunks/singletons-815684db.js",
  "/flmath.github.io/internal/immutable/chunks/preload-helper-0ffe6af8.js",
  "/flmath.github.io/internal/immutable/chunks/index-57c1f8f9.js",
  "/flmath.github.io/internal/immutable/chunks/index-a3c86569.js",
  "/flmath.github.io/internal/immutable/chunks/stores-ec8a3498.js",
  "/flmath.github.io/internal/immutable/chunks/index-9678ea77.js",
  "/flmath.github.io/internal/immutable/chunks/_layout-5bead24a.js",
  "/flmath.github.io/internal/immutable/chunks/0-0409ff01.js",
  "/flmath.github.io/internal/immutable/chunks/1-1b2dc7ed.js",
  "/flmath.github.io/internal/immutable/chunks/2-f2e2f943.js",
  "/flmath.github.io/internal/immutable/chunks/3-1a08215b.js",
  "/flmath.github.io/internal/immutable/chunks/4-cd05bc1a.js",
  "/flmath.github.io/internal/immutable/chunks/5-c95a4f2d.js",
  "/flmath.github.io/internal/immutable/chunks/6-ff3562fa.js",
  "/flmath.github.io/internal/immutable/chunks/7-61b610a3.js",
  "/flmath.github.io/internal/immutable/chunks/8-3fe203aa.js",
  "/flmath.github.io/internal/immutable/chunks/9-811d0968.js",
  "/flmath.github.io/internal/immutable/chunks/10-8e0e1837.js",
  "/flmath.github.io/internal/immutable/chunks/11-516d7a3d.js",
  "/flmath.github.io/internal/immutable/chunks/TimeLineCv-b8791856.js",
  "/flmath.github.io/internal/immutable/assets/TimeLineCv-dd5d6d51.css",
  "/flmath.github.io/internal/immutable/chunks/page-a2fcd6d8.js",
  "/flmath.github.io/internal/immutable/chunks/page-0f5b2365.js",
  "/flmath.github.io/internal/immutable/chunks/page-c3fdc129.js",
  "/flmath.github.io/internal/immutable/chunks/page-7c909a19.js"
], b = [
  "/flmath.github.io/.nojekyll",
  "/flmath.github.io/favicon.png",
  "/flmath.github.io/favicon192.png",
  "/flmath.github.io/favicon512.png",
  "/flmath.github.io/global.css",
  "/flmath.github.io/manifest.json",
  "/flmath.github.io/robots.txt"
], l = "1664163959474", i = self, m = `cache${l}`, h = o.concat(b), c = new Set(h);
i.addEventListener("install", (t) => {
  t.waitUntil(
    caches.open(m).then((a) => a.addAll(h)).then(() => {
      i.skipWaiting();
    })
  );
});
i.addEventListener("activate", (t) => {
  t.waitUntil(
    caches.keys().then(async (a) => {
      for (const e of a)
        e !== m && await caches.delete(e);
      i.clients.claim();
    })
  );
});
async function f(t) {
  const a = await caches.open(`offline${l}`);
  try {
    const e = await fetch(t);
    return a.put(t, e.clone()), e;
  } catch (e) {
    const s = await a.match(t);
    if (s)
      return s;
    throw e;
  }
}
i.addEventListener("fetch", (t) => {
  if (t.request.method !== "GET" || t.request.headers.has("range"))
    return;
  const a = new URL(t.request.url), e = a.protocol.startsWith("http"), s = a.hostname === self.location.hostname && a.port !== self.location.port, n = a.host === self.location.host && c.has(a.pathname), u = t.request.cache === "only-if-cached" && !n;
  e && !s && !u && t.respondWith(
    (async () => n && await caches.match(t.request) || f(t.request))()
  );
});
