
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 12775, hash: '3dddfe953a64f6e9daceca110f8a6e835f3938f64480accdef5242e735b3e34c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 8039, hash: '5bcd1f9663f683d574e45102f6d1a3870b7d41a8678d15f7715022213101d75e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 41214, hash: 'b0153be1dfbe44c444274a74c50b0d998c3687bccd1638459dcafc09671dd4d1', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-ISPK2VYP.css': {size: 334183, hash: 'AgscHyVezTo', text: () => import('./assets-chunks/styles-ISPK2VYP_css.mjs').then(m => m.default)}
  },
};
