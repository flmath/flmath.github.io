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
  "/internal/immutable/start-3b9e181d.js",
  "/internal/immutable/components/pages/_layout.svelte-fd2b51b0.js",
  "/internal/immutable/assets/_layout-31720baa.css",
  "/internal/immutable/components/pages/_error.svelte-0e4e99c8.js",
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
  "/internal/immutable/modules/pages/curriculum_vitae/_layout.ts-f1c136d3.js",
  "/internal/immutable/chunks/singletons-931a59a3.js",
  "/internal/immutable/chunks/preload-helper-0ffe6af8.js",
  "/internal/immutable/chunks/index-57c1f8f9.js",
  "/internal/immutable/chunks/index-a3c86569.js",
  "/internal/immutable/chunks/stores-8bdfa184.js",
  "/internal/immutable/chunks/index-9678ea77.js",
  "/internal/immutable/chunks/_layout-5bead24a.js",
  "/internal/immutable/chunks/_layout-a54b6abc.js",
  "/internal/immutable/chunks/0-b69a1fcd.js",
  "/internal/immutable/chunks/1-e44a607c.js",
  "/internal/immutable/chunks/2-e93beabb.js",
  "/internal/immutable/chunks/3-79a5cc62.js",
  "/internal/immutable/chunks/4-3637ec1e.js",
  "/internal/immutable/chunks/5-408fdbb4.js",
  "/internal/immutable/chunks/6-c453e884.js",
  "/internal/immutable/chunks/7-fa0c629d.js",
  "/internal/immutable/chunks/8-ee63ced9.js",
  "/internal/immutable/chunks/9-993a2171.js",
  "/internal/immutable/chunks/10-ef24f084.js",
  "/internal/immutable/chunks/11-6a200dde.js",
  "/internal/immutable/chunks/12-a071c081.js",
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
], l = "1664164174166", s = self, c = `cache${l}`, m = u.concat(o), b = new Set(m);
s.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(c).then((a) => a.addAll(m)).then(() => {
      s.skipWaiting();
    })
  );
});
s.addEventListener("activate", (e) => {
  e.waitUntil(
    caches.keys().then(async (a) => {
      for (const t of a)
        t !== c && await caches.delete(t);
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
