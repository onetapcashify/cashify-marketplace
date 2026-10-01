export function load(key, fallback){ try { const raw=localStorage.getItem(key); return raw?JSON.parse(raw):fallback; } catch { return fallback; } }
export function save(key, value){ localStorage.setItem(key, JSON.stringify(value)); window.dispatchEvent(new CustomEvent('app-data-change',{detail:{key,value}})); }
export function remove(key){ localStorage.removeItem(key); window.dispatchEvent(new CustomEvent('app-data-change',{detail:{key,value:null}})); }
export function uid(prefix='id'){ return `${prefix}-${Date.now()}-${Math.random().toString(36).slice(2,8)}`; }
export function subscribeKey(key, callback){ const run=()=>callback(load(key,null)); const custom=e=>{if(!e.detail?.key||e.detail.key===key)run()}; const storage=e=>{if(!e.key||e.key===key)run()}; window.addEventListener('app-data-change',custom);window.addEventListener('storage',storage);return()=>{window.removeEventListener('app-data-change',custom);window.removeEventListener('storage',storage)} }
