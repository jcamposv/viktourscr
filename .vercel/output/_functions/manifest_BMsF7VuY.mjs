import 'piccolore';
import { p as decodeKey } from './chunks/astro/server_Bi6k3bc9.mjs';
import 'clsx';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_DJI35Gri.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/jairocampos/Public/projects/viktours/","cacheDir":"file:///Users/jairocampos/Public/projects/viktours/node_modules/.astro/","outDir":"file:///Users/jairocampos/Public/projects/viktours/dist/","srcDir":"file:///Users/jairocampos/Public/projects/viktours/src/","publicDir":"file:///Users/jairocampos/Public/projects/viktours/public/","buildClientDir":"file:///Users/jairocampos/Public/projects/viktours/dist/client/","buildServerDir":"file:///Users/jairocampos/Public/projects/viktours/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"gallery/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/gallery","isIndex":false,"type":"page","pattern":"^\\/gallery\\/?$","segments":[[{"content":"gallery","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/gallery.astro","pathname":"/gallery","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/booking","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/booking\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"booking","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/booking.ts","pathname":"/api/booking","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://viktours.tours","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/Users/jairocampos/Public/projects/viktours/src/pages/gallery.astro",{"propagation":"none","containsHead":true}],["/Users/jairocampos/Public/projects/viktours/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000virtual:astro:actions/noop-entrypoint":"noop-entrypoint.mjs","\u0000@astro-page:src/pages/api/booking@_@ts":"pages/api/booking.astro.mjs","\u0000@astro-page:src/pages/gallery@_@astro":"pages/gallery.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_BMsF7VuY.mjs","/Users/jairocampos/Public/projects/viktours/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BSsIEBIh.mjs","/Users/jairocampos/Public/projects/viktours/src/components/booking/BookingModal":"_astro/BookingModal.zOSSaFDK.js","/Users/jairocampos/Public/projects/viktours/src/components/layout/MobileMenu":"_astro/MobileMenu.eIpgb2MR.js","@astrojs/react/client.js":"_astro/client.DYKcjN1Z.js","/Users/jairocampos/Public/projects/viktours/src/pages/gallery.astro?astro&type=script&index=0&lang.ts":"_astro/gallery.astro_astro_type_script_index_0_lang.BndwcNS_.js","/Users/jairocampos/Public/projects/viktours/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts":"_astro/BaseLayout.astro_astro_type_script_index_0_lang.aIT4rmJV.js","/Users/jairocampos/Public/projects/viktours/src/components/layout/Header.astro?astro&type=script&index=0&lang.ts":"_astro/Header.astro_astro_type_script_index_0_lang.DXPLIMiw.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/Users/jairocampos/Public/projects/viktours/src/pages/gallery.astro?astro&type=script&index=0&lang.ts","const g=document.querySelectorAll(\".filter-btn\"),p=document.querySelectorAll(\".gallery-item\"),b=document.getElementById(\"empty-state\");g.forEach(e=>{e.addEventListener(\"click\",()=>{const t=e.dataset.filter;g.forEach(n=>{n.classList.remove(\"bg-jungle\",\"text-white\",\"shadow-md\",\"shadow-jungle/20\"),n.classList.add(\"bg-jungle/[0.04]\",\"text-charcoal/60\")}),e.classList.remove(\"bg-jungle/[0.04]\",\"text-charcoal/60\"),e.classList.add(\"bg-jungle\",\"text-white\",\"shadow-md\",\"shadow-jungle/20\");let o=0;p.forEach(n=>{const m=t===\"All\"||n.dataset.category===t;n.style.display=m?\"\":\"none\",m&&o++}),b.style.display=o===0?\"block\":\"none\"})});const i=document.getElementById(\"lightbox\"),c=document.getElementById(\"lb-img\"),d=document.getElementById(\"lb-video\"),f=document.getElementById(\"lb-close\"),r=document.getElementById(\"lb-prev\"),y=document.getElementById(\"lb-next\"),E=document.getElementById(\"lb-counter\");document.getElementById(\"lb-container\");let s=[],l=0;function v(){const e=[];return document.querySelectorAll(\".gallery-item\").forEach(t=>{if(t.style.display===\"none\")return;const o=t.querySelector(\"[data-src]\"),n=t.querySelector(\"[data-video-src]\");o&&e.push(o.dataset.src),n&&e.push(n.dataset.videoSrc)}),e}function a(e){l=e;const t=s[e];t.endsWith(\".mp4\")?(c.style.display=\"none\",d.style.display=\"block\",d.src=t):(d.style.display=\"none\",d.pause(),c.style.display=\"block\",c.style.opacity=\"0\",c.src=t,c.onload=()=>{c.style.opacity=\"1\"}),E.textContent=`${e+1} / ${s.length}`,r.style.display=e===0?\"none\":\"flex\",y.style.display=e===s.length-1?\"none\":\"flex\"}function h(e){s=v();const t=s.indexOf(e);t!==-1&&(i.style.display=\"flex\",document.body.style.overflow=\"hidden\",document.querySelector(\"header\").style.display=\"none\",a(t))}function u(){i.style.display=\"none\",document.querySelector(\"header\").style.display=\"\",document.body.style.overflow=\"\",d.pause(),d.src=\"\"}document.querySelectorAll(\".gallery-thumb\").forEach(e=>{e.addEventListener(\"click\",()=>h(e.dataset.src))});document.querySelectorAll(\".gallery-video-thumb\").forEach(e=>{e.addEventListener(\"click\",()=>h(e.dataset.videoSrc))});f.addEventListener(\"click\",u);r.addEventListener(\"click\",()=>{l>0&&a(l-1)});y.addEventListener(\"click\",()=>{l<s.length-1&&a(l+1)});document.addEventListener(\"keydown\",e=>{i.style.display===\"none\"||i.style.display===\"\"||(e.key===\"Escape\"&&u(),e.key===\"ArrowLeft\"&&l>0&&a(l-1),e.key===\"ArrowRight\"&&l<s.length-1&&a(l+1))});i.addEventListener(\"click\",e=>{const t=e.target;document.getElementById(\"lb-modal\").contains(t)||r.contains(t)||y.contains(t)||f.contains(t)||u()});"],["/Users/jairocampos/Public/projects/viktours/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts","document.addEventListener(\"click\",t=>{const e=t.target;if(e.closest(\"[data-booking]\")){t.preventDefault(),window.dispatchEvent(new CustomEvent(\"open-booking\"));return}e.closest('a[href=\"#top\"]')&&(t.preventDefault(),window.scrollTo({top:0,behavior:\"smooth\"}))});const o=new IntersectionObserver(t=>{t.forEach(e=>{e.isIntersecting&&e.target.classList.add(\"visible\")})},{threshold:.1});document.querySelectorAll(\"[data-animate]\").forEach(t=>o.observe(t));"],["/Users/jairocampos/Public/projects/viktours/src/components/layout/Header.astro?astro&type=script&index=0&lang.ts","const e=document.querySelector(\"header\"),s=()=>{e&&(window.scrollY>40?e.classList.add(\"header-scrolled\"):e.classList.remove(\"header-scrolled\"))};window.addEventListener(\"scroll\",s,{passive:!0});s();"]],"assets":["/_astro/volcano.C2iMkuCr.jpg","/_astro/group-tour.CuUOnrNH.jpeg","/_astro/playa-grande.CrW9h1tf.jpg","/_astro/miravalles.DtdrfE0f.jpg","/_astro/tamarindo.Dn8C_d_z.jpg","/_astro/las-catalinas.9sg6eblS.jpg","/_astro/sunset.aMkS0cBB.jpg","/_astro/about-waterfall.DM8XBw9T.jpg","/_astro/catamaran.CHlNuwB-.jpg","/_astro/tortuguero.D-E1cQD4.jpg","/_astro/tortuguero-beach._gxO68Aj.jpg","/_astro/guatemala.BJVsnLiT.png","/_astro/nicaragua.DahMzbAL.png","/_astro/irazu.CGhF2vm-.jpg","/_astro/manuel-antonio.CKSCm3MB.jpg","/_astro/private-transfers.M-n-W6ug.jpeg","/_astro/staria-van.ChHFi6i9.png","/_astro/xtrail-nissan.F-HL-ME3.png","/_astro/hero.B0Rzkmhm.png","/_astro/toyota-rush.mYluo85G.png","/_astro/rio-celeste.Ct80RetS.jpg","/_astro/monteverde.COICRfje.jpg","/_astro/bajos-del-toro.Bmtfyl0B.jpg","/_astro/rental-car.CCA_JZxF.png","/_astro/gallery.Dj9KlB8g.css","/favicon.svg","/logo.png","/robots.txt","/_astro/BookingModal.zOSSaFDK.js","/_astro/MobileMenu.eIpgb2MR.js","/_astro/client.DYKcjN1Z.js","/_astro/index.CdJzaNS0.js","/_astro/jsx-runtime.D_zvdyIk.js","/gallery/bajos-del-toro/IMG_0021.jpg","/gallery/bajos-del-toro/IMG_0023.jpg","/gallery/bajos-del-toro/IMG_0026.jpg","/gallery/bajos-del-toro/IMG_1673.jpg","/gallery/bajos-del-toro/IMG_1880.jpg","/gallery/bajos-del-toro/IMG_2967.jpg","/gallery/bajos-del-toro/IMG_7623.jpg","/gallery/bajos-del-toro/IMG_7626.jpg","/gallery/bajos-del-toro/main.jpg","/gallery/playa-hermosa/IMG_0736.jpg","/gallery/playa-hermosa/IMG_0837.jpg","/gallery/playa-hermosa/IMG_3108.jpg","/gallery/fortuna/IMG_1209-1.jpg","/gallery/fortuna/IMG_1248-1.jpg","/gallery/fortuna/IMG_1248.jpg","/gallery/fortuna/IMG_1571-1.jpg","/gallery/fortuna/IMG_1571.jpg","/gallery/fortuna/IMG_7171-1.jpg","/gallery/fortuna/IMG_7171.jpg","/gallery/fortuna/main.jpg","/gallery/manuel-antonio/IMG_0720.mp4","/gallery/manuel-antonio/IMG_0721.mp4","/gallery/manuel-antonio/IMG_1545.jpeg","/gallery/manuel-antonio/main.jpeg","/gallery/rio-celeste/IMG_0428.jpg","/gallery/rio-celeste/IMG_0672.jpg","/gallery/rio-celeste/IMG_1549.jpg","/gallery/rio-celeste/IMG_8839.jpg","/gallery/poas/IMG_1292.jpg","/gallery/poas/IMG_1308.jpg","/gallery/poas/IMG_1322.jpg","/gallery/poas/IMG_3162.jpg","/gallery/tortuguero/IMG_7400.jpg","/gallery/tortuguero/IMG_7412.jpg","/gallery/tortuguero/IMG_7443.jpg","/gallery/tortuguero/IMG_7514.jpg","/gallery/tortuguero/IMG_7523.jpg","/gallery/tortuguero/IMG_7530.jpg","/gallery/monteverde/IMG_1850.jpg","/gallery/monteverde/IMG_3715-1.jpg","/gallery/monteverde/monteverde.jpg","/gallery/volcan-irazu/IMG_0158.jpg","/gallery/volcan-irazu/IMG_0169.jpg","/gallery/volcan-irazu/IMG_0170.jpg","/gallery/volcan-irazu/IMG_0172.jpg","/gallery/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"actionBodySizeLimit":1048576,"serverIslandNameMap":[],"key":"6VkxEQcut74blKu7Xrll6UGi4IcwwpetKQHHxeiHSzU="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
